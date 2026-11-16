/* Crude guards against answers that can be picked without the passage. They catch only the
   mechanical tells; the real check is a passage-blind read by someone who has not seen the
   passages (see "Anti-testwiseness rules" in CLAUDE.md). Applies to Form F, the first form
   written to those rules. */
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadQuestionData } = require("../scripts/load-question-data.js");

const data = loadQuestionData();
const ids = data.problemsByFile["js/data/problems-ela-longform-f.js"];
const items = data.problems.filter(p => ids.has(p.id));

const ABSOLUTE = /\b(always|never|nothing|must|every|everyone|no one|proves?|proved|guarantees?|impossible|completely|entirely)\b/i;

test("Form F options use no absolute or extreme words", () => {
  for (const p of items) {
    for (const o of p.options) assert.doesNotMatch(o.text, ABSOLUTE, `${p.id}: ${o.text}`);
  }
});

test("Form F options do not mix bare answers with answers that carry a reason", () => {
  for (const p of items) {
    const withReason = p.options.filter(o => /\b(because|since|so that)\b|, so\b/i.test(o.text)).length;
    assert.ok(withReason === 0 || withReason === p.options.length, `${p.id}: ${withReason} of ${p.options.length} options give a reason`);
  }
});

test("Form F: no question's correct answer repeats another question's correct answer in its cluster", () => {
  const words = t => new Set(t.toLowerCase().match(/[a-z]{5,}/g) || []);
  const bySet = new Map();
  for (const p of items) bySet.set(p.passageSet, (bySet.get(p.passageSet) || []).concat(p));
  for (const [set, list] of bySet) {
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const a = words(list[i].options.find(o => o.isCorrect).text), b = words(list[j].options.find(o => o.isCorrect).text);
      const shared = [...a].filter(w => b.has(w));
      assert.ok(shared.length < 3, `${set}: ${list[i].id} and ${list[j].id} keys share "${shared.join(", ")}"`);
    }
  }
});
