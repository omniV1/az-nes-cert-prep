/* Edition setting. Load this first on every page.
   "personal": your own study copy. Pearson's answer keys (js/data/pearson-keys.js), the Field 02
   coaching notes (js/data/field02-coach.js), the interactive Field 02 / Field 10 exams, and Pearson's
   PDFs shown inside the pages are all available.
   "sale": the copy you distribute. scripts/build-release.js sets this value and leaves the two
   Pearson-derived files out of the build. Pearson's PDFs become plain links, and anything marked
   data-personal-only is removed. */
window.APP_EDITION = "personal";

(function () {
  const DISCLAIMER = "Unofficial study tool. Not affiliated with or endorsed by Pearson, the NES program, AEPA, or the Arizona Department of Education. NES and National Evaluation Series are trademarks of Pearson Education, Inc.";

  function iframeToLink(frame) {
    if (frame.dataset.converted) return;
    const src = frame.getAttribute("src");
    if (!src) { frame.remove(); return; }
    const p = document.createElement("p");
    p.className = "official-link";
    const a = document.createElement("a");
    a.href = src;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "Open " + (frame.getAttribute("title") || "the PDF") + " on Pearson’s site";
    p.appendChild(a);
    frame.dataset.converted = "1";
    frame.replaceWith(p);
  }

  function applySaleEdition(root) {
    root.querySelectorAll("iframe.official-embed").forEach(iframeToLink);
    root.querySelectorAll("[data-personal-only]").forEach(el => el.remove());
  }

  function addDisclaimer() {
    if (document.querySelector("[data-disclaimer]")) return;
    const p = document.createElement("p");
    p.className = "footer muted";
    p.setAttribute("data-disclaimer", "");
    p.textContent = DISCLAIMER;
    document.body.appendChild(p);
  }

  document.addEventListener("DOMContentLoaded", () => {
    addDisclaimer();
    if (window.APP_EDITION !== "sale") return;
    applySaleEdition(document);
    new MutationObserver(() => applySaleEdition(document)).observe(document.body, { childList: true, subtree: true });
  });
})();
