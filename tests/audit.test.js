const test = require("node:test");
const assert = require("node:assert/strict");
const QuizCore = require("../js/quiz-core.js");
const { loadQuestionData } = require("../scripts/load-question-data.js");
const { buildExport, parsePredictions, scoreRun, report, FORM_FILES } = require("../scripts/audit.js");

const data = loadQuestionData();
const byId = new Map(data.problems.map(p => [p.id, p]));

test("the blind copy has stems and options but no passage, key, or explanation", () => {
  for (const form of Object.keys(FORM_FILES)) {
    const { blind, key } = buildExport(data, form, 5);
    for (const q of key.questions) {
      const p = byId.get(q.id);
      assert.ok(blind.includes(`${q.n}. ${p.stem}`), `${q.id} stem`);
      for (const o of QuizCore.getOptions(p)) assert.ok(blind.includes(o.text), `${q.id} option`);
      assert.ok(!blind.includes(p.passage), `${q.id}: passage leaked`);
      assert.ok(!blind.includes(p.explanation), `${q.id}: explanation leaked`);
      for (const o of QuizCore.getOptions(p)) if (o.explanation) assert.ok(!blind.includes(o.explanation), `${q.id}: option explanation leaked`);
    }
    assert.doesNotMatch(blind, /isCorrect|\{\{opt:/);
  }
});

test("the open copy prints each passage once, before its questions", () => {
  const { open, key } = buildExport(data, "F", 5);
  for (const set of new Set(key.questions.map(q => q.set))) {
    const first = key.questions.find(q => q.set === set);
    const passage = byId.get(first.id).passage;
    assert.equal(open.split(passage).length - 1, 1, set);
    assert.ok(open.indexOf(passage) < open.indexOf(`${first.n}. `), set);
  }
});

test("the key matches the shuffled order, and the shuffle depends on the seed", () => {
  const a = buildExport(data, "E", 5);
  const b = buildExport(data, "E", 6);
  for (const q of a.key.questions) {
    const p = byId.get(q.id);
    assert.equal(q.order["ABCD".indexOf(q.key)], QuizCore.correctOption(p).id, q.id);
    // Array.from: option lists built from sandboxed data carry another realm's Array prototype.
    assert.deepEqual([...q.order].sort(), Array.from(QuizCore.getOptions(p), o => o.id).sort(), q.id);
  }
  assert.notDeepEqual(a.key.questions.map(q => q.order), b.key.questions.map(q => q.order));
  assert.deepEqual(buildExport(data, "E", 5).key, a.key, "same seed, same order");
  const source = buildExport(data, "E", 0);
  for (const q of source.key.questions) assert.deepEqual(Array.from(q.order), Array.from(QuizCore.getOptions(byId.get(q.id)), o => o.id));
  // Across the form, the key should not sit on one letter.
  const counts = a.key.questions.reduce((m, q) => ({ ...m, [q.key]: (m[q.key] || 0) + 1 }), {});
  assert.ok(Math.max(...Object.values(counts)) <= a.key.questions.length / 2, JSON.stringify(counts));
});

test("predictions are read from a markdown table, numbered lines, or bare letters", () => {
  const table = "| Q | Prediction | Confidence | Tell |\n|---|---|---|---|\n| 1 | **B** | Medium | x |\n| 2 | a | high | y |\n| Q3 | D | Low | z |";
  assert.deepEqual([...parsePredictions(table, 3)], [
    [1, { answer: "B", confidence: "medium" }], [2, { answer: "A", confidence: "high" }], [3, { answer: "D", confidence: "low" }]
  ]);
  assert.deepEqual([...parsePredictions("1. C\n2) A\nQ3: **B**", 3)].map(([n, p]) => n + p.answer), ["1C", "2A", "3B"]);
  assert.deepEqual([...parsePredictions("ABD", 3)].map(([n, p]) => n + p.answer), ["1A", "2B", "3D"]);
  assert.equal(parsePredictions("A fair reading of the passage", 3).size, 0, "prose is not mistaken for answers");
});

test("scoring counts hits by confidence and passage and flags confident correct guesses", () => {
  const { key } = buildExport(data, "F", 5);
  const lines = key.questions.map((q, i) => {
    const right = i < 6;
    const answer = right ? q.key : "ABCD".replace(q.key, "")[0];
    return `| ${q.n} | ${answer} | ${i === 0 ? "High" : i < 9 ? "Medium" : "Low"} | r |`;
  });
  const score = scoreRun(key, parsePredictions(lines.join("\n"), key.questions.length));
  assert.deepEqual(score.total, { correct: 6, total: 15 });
  assert.deepEqual(score.byConfidence, { high: { correct: 1, total: 1 }, medium: { correct: 5, total: 8 }, low: { correct: 0, total: 6 } });
  assert.deepEqual(score.bySet, { poll: { correct: 5, total: 5 }, study: { correct: 1, total: 5 }, syrup: { correct: 0, total: 5 } });
  const text = report([{ key, score }, { key, score }]);
  assert.match(text, /6 of 15 correct/);
  assert.match(text, /Correct with high confidence: 1 \(LF268\)/);
  assert.match(text, /LF268 \(poll\): 2 of 2/);
});
