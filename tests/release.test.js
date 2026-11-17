/* The sale edition must ship without Pearson-derived material, and the personal edition must keep it. */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { pathToFileURL } = require("url");
const { build, PERSONAL_ONLY } = require("../scripts/build-release.js");
const { ROOT } = require("../scripts/load-question-data.js");

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  chromium = null;
}

const out = fs.mkdtempSync(path.join(os.tmpdir(), "release-"));
build(out, { name: "Test Prep Name" });

test("the sale build leaves out the Pearson-derived files and their script tags", () => {
  for (const file of PERSONAL_ONLY) {
    assert.ok(!fs.existsSync(path.join(out, file)), file);
    for (const page of fs.readdirSync(out).filter(f => f.endsWith(".html"))) {
      assert.doesNotMatch(fs.readFileSync(path.join(out, page), "utf8"), new RegExp(file.replace(/[.]/g, "\\.")), `${page} loads ${file}`);
    }
  }
  assert.match(fs.readFileSync(path.join(out, "js/edition.js"), "utf8"), /window\.APP_EDITION = "sale";/);
  assert.match(fs.readFileSync(path.join(out, "index.html"), "utf8"), /Test Prep Name/);
  for (const dir of ["tests", "scripts", "audit-out"]) assert.ok(!fs.existsSync(path.join(out, dir)), dir);
});

test("the personal copy keeps the keys; the sale edition drops the Field 02 / Field 10 exams", () => {
  const load = (edition, withKeys) => {
    const window = { APP_EDITION: edition };
    window.window = window;
    const ctx = vm.createContext({ window });
    const files = ["js/data/exams.js", ...(withKeys ? ["js/data/pearson-keys.js"] : []), "js/data/study-guides.js"];
    for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
    return window;
  };
  const personal = load("personal", true);
  assert.equal(personal.STUDY_GUIDES.hasKeys, true);
  assert.equal(personal.STUDY_GUIDES.activeItems("field02").length, 78);
  assert.equal(personal.EXAMS.filter(e => e.aepaGuide).length, 2);
  const sale = load("sale", false);
  assert.equal(sale.STUDY_GUIDES.hasKeys, false);
  assert.equal(sale.STUDY_GUIDES.itemsForGuide("field02").length, 0);
  assert.equal(sale.EXAMS.filter(e => e.aepaGuide).length, 0);
});

test("sale pages show Pearson PDFs as links, offer no Field exams, and carry the disclaimer", { skip: !chromium && "playwright not installed" }, async () => {
  const browser = await chromium.launch();
  try {
    for (const page of ["exam.html", "study-guides.html", "learn.html", "formulas.html"]) {
      const tab = await browser.newPage();
      const errors = [];
      tab.on("pageerror", e => errors.push(e.message));
      await tab.goto(pathToFileURL(path.join(out, page)).href);
      await tab.waitForTimeout(300);
      const r = await tab.evaluate(() => ({
        iframes: document.querySelectorAll("iframe").length,
        fieldExams: document.querySelectorAll('a[href*="exam=aepa-"]').length,
        disclaimer: document.querySelectorAll("[data-disclaimer]").length
      }));
      assert.deepEqual(r, { iframes: 0, fieldExams: 0, disclaimer: 1 }, page);
      assert.deepEqual(errors, [], page);
      await tab.close();
    }
  } finally {
    await browser.close();
  }
});

test.after(() => fs.rmSync(out, { recursive: true, force: true }));
