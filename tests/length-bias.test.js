/* Guards the passage forms against answer-length tells: within a passage cluster, the key may not be
   the longest option, or the second-longest, in more than 30% of its questions. Clusters with fewer
   than four questions cannot meet a 30% cap (one question is already 33%), so they get one per rank. */
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadQuestionData } = require("../scripts/load-question-data.js");

const data = loadQuestionData();
const forms = Object.entries(data.problemsByFile).filter(([file]) => /problems-ela-longform/.test(file));
// 0 = the key is the longest option, 1 = second-longest, and so on.
const rank = p => p.choices.filter(c => c.length > p.choices[p.answer].length).length;

test("no passage cluster keys the longest or second-longest option more than 30% of the time", () => {
  for (const [file, ids] of forms) {
    const clusters = new Map();
    for (const p of data.problems) {
      if (!ids.has(p.id)) continue;
      if (!clusters.has(p.passageSet)) clusters.set(p.passageSet, []);
      clusters.get(p.passageSet).push(p);
    }
    for (const [set, items] of clusters) {
      const limit = items.length < 4 ? 1 : Math.floor(0.3 * items.length);
      for (const r of [0, 1]) {
        const hits = items.filter(p => rank(p) === r).map(p => p.id);
        assert.ok(hits.length <= limit, `${file} ${set}: key is ${r === 0 ? "longest" : "second-longest"} in ${hits.join(", ")}`);
      }
    }
  }
});

test("across each form, no length rank holds more than a third of the keys", () => {
  for (const [file, ids] of forms) {
    const items = data.problems.filter(p => ids.has(p.id));
    for (const r of [0, 1, 2, 3]) {
      const share = items.filter(p => rank(p) === r).length / items.length;
      assert.ok(share <= 0.34, `${file}: rank ${r} holds ${Math.round(share * 100)}% of keys`);
    }
  }
});
