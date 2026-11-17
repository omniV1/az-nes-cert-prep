/* Build the copy you distribute ("sale" edition) into release/ (or a directory you name).

   node scripts/build-release.js [outDir] [--name "Product Name"]

   - Copies the site (HTML, css/, js/) and nothing else: no tests, scripts, notes, or audit files.
   - Leaves out the Pearson-derived files (answer keys and Field 02 coaching notes) and removes their
     <script> tags.
   - Sets window.APP_EDITION = "sale" in js/edition.js, which turns Pearson's PDFs into plain links
     and removes anything marked data-personal-only.
   - Replaces the product name "AZ NES Cert Prep" in every page with --name, or with a neutral
     default so the trademark never ships in the product name.
   - Leaves out the pages built entirely on Pearson's retired study guides (study-guides.html).
   Fails if any Pearson answer key or coaching text is still present in the output. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const PERSONAL_ONLY = ["js/data/pearson-keys.js", "js/data/field02-coach.js", "js/data/aepa-guides.js"];
/* Pages built entirely on Pearson's retired study guides; left out of the sale build. */
const PERSONAL_PAGES = ["study-guides.html"];
const PRODUCT_NAME = "AZ NES Cert Prep";
/* Used when --name is not given, so the sale build never ships with NES in the product name. */
const DEFAULT_SALE_NAME = "AZ Secondary Cert Prep";

function copyDir(from, to, skip) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const rel = path.relative(ROOT, src).split(path.sep).join("/");
    if (skip.has(rel)) continue;
    const dst = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dst, skip);
    else fs.copyFileSync(src, dst);
  }
}

function build(outDir, { name } = {}) {
  const out = path.resolve(outDir);
  if (out === ROOT || ROOT.startsWith(out + path.sep)) throw new Error("Refusing to build into the repository root.");
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });

  const skip = new Set(PERSONAL_ONLY);
  for (const dir of ["css", "js"]) {
    if (fs.existsSync(path.join(ROOT, dir))) copyDir(path.join(ROOT, dir), path.join(out, dir), skip);
  }

  const pages = fs.readdirSync(ROOT).filter(f => f.endsWith(".html") && !PERSONAL_PAGES.includes(f));
  for (const page of pages) {
    let html = fs.readFileSync(path.join(ROOT, page), "utf8");
    for (const file of PERSONAL_ONLY) {
      html = html.replace(new RegExp(`[ \\t]*<script src="${file.replace(/[.]/g, "\\.")}"></script>\\r?\\n`, "g"), "");
    }
    html = html.split(PRODUCT_NAME).join(name || DEFAULT_SALE_NAME);
    fs.writeFileSync(path.join(out, page), html);
  }

  const editionPath = path.join(out, "js/edition.js");
  const edition = fs.readFileSync(editionPath, "utf8");
  const saleEdition = edition.replace('window.APP_EDITION = "personal";', 'window.APP_EDITION = "sale";');
  if (saleEdition === edition) throw new Error("Could not set the sale edition in js/edition.js.");
  fs.writeFileSync(editionPath, saleEdition);

  check(out);
  return { out, pages };
}

/* Strings that exist only in the Pearson-derived files. If any appears in the build, it fails. */
function forbiddenStrings() {
  const window = {};
  window.window = window;
  const ctx = vm.createContext({ window });
  for (const file of PERSONAL_ONLY) vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), ctx, { filename: file });
  const out = [];
  for (const bank of Object.values(window.PEARSON_KEYS)) out.push(bank.answers.slice(0, 40));
  for (const note of Object.values(window.FIELD02_COACH).slice(0, 10)) out.push(note.whyKey.slice(0, 60));
  for (const guide of Object.values(window.AEPA_GUIDES)) out.push(guide.formatNote.slice(0, 60), ...guide.objectives.slice(0, 5).map(o => o.summary.slice(0, 50)));
  return out;
}

function check(out) {
  const bad = [];
  const needles = forbiddenStrings();
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(p); continue; }
      const text = fs.readFileSync(p, "utf8");
      const rel = path.relative(out, p);
      if (PERSONAL_ONLY.some(f => rel.split(path.sep).join("/") === f)) bad.push(`${rel}: personal-only file`);
      for (const file of PERSONAL_ONLY) if (text.includes(`src="${file}"`)) bad.push(`${rel}: loads ${file}`);
      for (const n of needles) if (text.includes(n)) bad.push(`${rel}: contains Pearson-derived text`);
    }
  };
  walk(out);
  if (bad.length) throw new Error("Release check failed:\n" + [...new Set(bad)].join("\n"));
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const nameAt = args.indexOf("--name");
  const name = nameAt >= 0 ? args[nameAt + 1] : null;
  const positional = args.filter((a, i) => nameAt < 0 || (i !== nameAt && i !== nameAt + 1));
  const outDir = positional[0] || path.join(ROOT, "release");
  const { out, pages } = build(outDir, { name });
  console.log(`Sale edition built in ${out} (${pages.length} pages). Pearson answer keys and coaching notes left out.`);
  if (!name) console.log(`Product name set to the placeholder "${DEFAULT_SALE_NAME}". Pass --name "..." to choose your own.`);
}

module.exports = { build, check, PERSONAL_ONLY, PERSONAL_PAGES, DEFAULT_SALE_NAME };
