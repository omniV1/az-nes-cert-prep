/* Optional durable progress backup inside the user's Obsidian vault. */
window.VaultProgress = (() => {
  const DB_NAME = "az-nes-vault-progress";
  const STORE_NAME = "handles";
  const HANDLE_KEY = "obsidian-vault";
  const DIRECTORY_NAME = "Progress";
  const FILE_NAME = "az-nes-progress.json";
  let writeTimer = null;
  let syncing = false;

  function supported() {
    return "showDirectoryPicker" in window && "indexedDB" in window;
  }

  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(STORE_NAME)) {
          request.result.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function storedHandle() {
    if (!supported()) return null;
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const request = transaction.objectStore(STORE_NAME).get(HANDLE_KEY);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  async function rememberHandle(handle) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      transaction.objectStore(STORE_NAME).put(handle, HANDLE_KEY);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
  }

  async function forgetHandle() {
    if (!supported()) return;
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      transaction.objectStore(STORE_NAME).delete(HANDLE_KEY);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
  }

  async function hasPermission(handle, request) {
    const options = { mode: "readwrite" };
    if ((await handle.queryPermission(options)) === "granted") return true;
    return request && (await handle.requestPermission(options)) === "granted";
  }

  async function progressFile(handle, create) {
    const directory = await handle.getDirectoryHandle(DIRECTORY_NAME, { create });
    return directory.getFileHandle(FILE_NAME, { create });
  }

  async function readVaultState(handle) {
    try {
      const fileHandle = await progressFile(handle, false);
      const file = await fileHandle.getFile();
      return JSON.parse(await file.text());
    } catch (error) {
      if (error?.name === "NotFoundError") return null;
      throw error;
    }
  }

  async function writeVaultState(handle, state) {
    const fileHandle = await progressFile(handle, true);
    const writable = await fileHandle.createWritable();
    const payload = {
      ...state,
      vaultSync: {
        savedAt: new Date().toISOString(),
        file: `${DIRECTORY_NAME}/${FILE_NAME}`
      }
    };
    await writable.write(JSON.stringify(payload, null, 2));
    await writable.close();
    return payload.vaultSync.savedAt;
  }

  async function syncNow(options = {}) {
    if (syncing || !window.Progress) return { connected: false };
    const handle = await storedHandle();
    if (!handle || !(await hasPermission(handle, !!options.requestPermission))) {
      return { connected: false, needsPermission: !!handle };
    }

    syncing = true;
    try {
      const local = Progress.load();
      const vault = await readVaultState(handle);
      const localTime = Date.parse(local.updatedAt || "") || 0;
      const vaultTime = Date.parse(vault?.updatedAt || vault?.vaultSync?.savedAt || "") || 0;
      if (vault && vaultTime > localTime) {
        Progress.importData(JSON.stringify(vault));
        return { connected: true, action: "imported", handleName: handle.name };
      }
      const savedAt = await writeVaultState(handle, local);
      return { connected: true, action: "saved", savedAt, handleName: handle.name };
    } finally {
      syncing = false;
    }
  }

  async function connect() {
    if (!supported()) {
      throw new Error("This browser does not support direct folder sync. Open the app in current Chrome or Edge.");
    }
    const handle = await window.showDirectoryPicker({ mode: "readwrite", id: "az-nes-obsidian-vault" });
    if (!(await hasPermission(handle, true))) throw new Error("Write permission was not granted.");
    await rememberHandle(handle);
    return syncNow();
  }

  async function disconnect() {
    await forgetHandle();
    return { connected: false };
  }

  async function status() {
    if (!supported()) return { supported: false, connected: false };
    const handle = await storedHandle();
    if (!handle) return { supported: true, connected: false };
    const granted = await hasPermission(handle, false);
    return { supported: true, connected: granted, needsPermission: !granted, handleName: handle.name };
  }

  function scheduleWrite(state) {
    if (syncing) return;
    clearTimeout(writeTimer);
    writeTimer = setTimeout(async () => {
      try {
        const handle = await storedHandle();
        if (handle && await hasPermission(handle, false)) {
          await writeVaultState(handle, state || Progress.load());
          window.dispatchEvent(new CustomEvent("az-nes-vault-synced"));
        }
      } catch (error) {
        console.warn("Obsidian progress autosave failed:", error);
      }
    }, 250);
  }

  window.addEventListener("az-nes-progress-changed", event => scheduleWrite(event.detail));
  queueMicrotask(() => {
    syncNow()
      .then(result => {
        if (result.action === "imported") location.reload();
      })
      .catch(error => console.warn("Obsidian progress sync unavailable:", error));
  });

  return { supported, connect, disconnect, status, syncNow };
})();
