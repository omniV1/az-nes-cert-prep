/* Load the browser data files (problem banks, lessons, exams) into a sandbox,
   in the same order the pages load them, so Node tools see exactly what the
   app sees. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const PAGES = ["guide.html", "exam.html", "practice.html"];

function dataScripts(root) {
  const seen = new Set();
  for (const page of PAGES) {
    const html = fs.readFileSync(path.join(root, page), "utf8");
    for (const [, src] of html.matchAll(/<script src="(js\/(?:data\/[^"]+|quiz-core)\.js)"/g)) seen.add(src);
  }
  return [...seen];
}

function loadQuestionData(root = ROOT) {
  const window = {};
  window.window = window;
  const context = vm.createContext({ window });
  const files = dataScripts(root);
  const problemsByFile = {};
  for (const file of files) {
    const before = new Set((window.PROBLEMS || []).map(p => p.id));
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
    const added = (window.PROBLEMS || []).filter(p => !before.has(p.id)).map(p => p.id);
    if (added.length) problemsByFile[file] = new Set(added);
  }
  return {
    files,
    problems: window.PROBLEMS || [],
    problemsByFile,
    lessons: window.LESSONS || {},
    exams: window.EXAMS || [],
    resolveExamItems: window.resolveExamItems,
    window
  };
}

module.exports = { ROOT, loadQuestionData };
