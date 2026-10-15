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
  for (const file of files) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
  }
  return {
    files,
    problems: window.PROBLEMS || [],
    lessons: window.LESSONS || {},
    exams: window.EXAMS || [],
    resolveExamItems: window.resolveExamItems
  };
}

module.exports = { ROOT, loadQuestionData };
