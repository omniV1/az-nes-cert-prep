const test = require("node:test");
const assert = require("node:assert/strict");
const QuizCore = require("../js/quiz-core.js");
const { loadQuestionData } = require("../scripts/load-question-data.js");

const { problems } = loadQuestionData();
const byId = id => problems.find(p => p.id === id);

// The exact seed exam.html uses for question `index` of an exam.
const examOrder = (examId, index, p) => QuizCore.shuffleOptionIds(p, examId + ":" + index + ":" + p.id);

/** Find a seed whose shuffle actually moves the key away from its source letter. */
function reshuffledOrder(p) {
  const key = QuizCore.correctOption(p).id;
  const sourceIndex = QuizCore.getOptions(p).findIndex(o => o.isCorrect);
  for (let n = 0; n < 200; n++) {
    const order = QuizCore.shuffleOptionIds(p, "seed-" + n);
    if (order.indexOf(key) !== sourceIndex) return order;
  }
  throw new Error("no reshuffle found for " + p.id);
}

const roundTrip = value => JSON.parse(JSON.stringify(value));

test("options are self-contained objects with stable IDs and one isCorrect flag", () => {
  const p = byId("LG002");
  const options = QuizCore.getOptions(p);
  // Array.from: problem data lives in a vm sandbox, so its arrays have another realm's prototype.
  assert.deepEqual(Array.from(options, o => o.id), ["LG002-0", "LG002-1", "LG002-2", "LG002-3"]);
  assert.deepEqual(Array.from(options, o => o.isCorrect), [false, false, true, false]);
  assert.equal(options[2].text, "She reread Pride and Prejudice.");
  // Shuffling reorders whole objects; IDs never change with position.
  const order = reshuffledOrder(p);
  assert.deepEqual([...order].sort(), Array.from(options, o => o.id).sort());
});

test("authored option objects (id/text/isCorrect/explanation) are supported", () => {
  const p = {
    id: "X1",
    explanation: "{{opt:x-right}} is right; {{opt:x-wrong}} is not.",
    options: [
      { id: "x-wrong", text: "two", isCorrect: false, explanation: "Off by one." },
      { id: "x-right", text: "three", isCorrect: true }
    ]
  };
  const order = ["x-right", "x-wrong"];
  const item = QuizCore.buildAttemptItem(p, order, "x-wrong");
  const r = QuizCore.describeAttemptItem(p, item);
  assert.equal(r.yourLetter, "B");
  assert.equal(r.yourExplanation, "Off by one.");
  assert.equal(r.keyLetter, "A");
  assert.equal(r.explanation, "A is right; B is not.");
});

test("a wrong answer is saved with its option ID and reviewed as that choice, not blank", () => {
  const p = byId("LG002");
  const order = reshuffledOrder(p);
  const wrong = QuizCore.getOptions(p).find(o => !o.isCorrect);
  const item = roundTrip(QuizCore.buildAttemptItem(p, order, wrong.id)); // as stored in localStorage

  assert.equal(item.chosenOptionId, wrong.id);
  assert.equal(item.correct, false);
  const r = QuizCore.describeAttemptItem(p, item);
  assert.equal(r.blank, false);
  assert.equal(r.correct, false);
  assert.equal(r.yourLetter, QuizCore.letterAt(order.indexOf(wrong.id)));
  assert.equal(r.yourText, wrong.text);
});

test("every wrong option of every bank question is saved and graded wrong", () => {
  for (const p of problems) {
    const order = examOrder("ela-official-1", 0, p);
    for (const o of QuizCore.getOptions(p)) {
      const item = QuizCore.buildAttemptItem(p, order, o.id);
      assert.equal(item.chosenOptionId, o.id, p.id);
      assert.equal(item.correct, o.isCorrect, p.id);
      assert.equal(QuizCore.describeAttemptItem(p, item).blank, false, p.id);
    }
  }
});

test("only a true blank (nothing submitted) is reviewed as blank", () => {
  const p = byId("LG014");
  const order = reshuffledOrder(p);
  for (const nothing of [null, undefined, ""]) {
    const item = roundTrip(QuizCore.buildAttemptItem(p, order, nothing));
    assert.equal(item.chosenOptionId, null);
    assert.equal(item.correct, false);
    const r = QuizCore.describeAttemptItem(p, item);
    assert.equal(r.blank, true);
    assert.equal(r.yourLetter, null);
    assert.equal(r.keyLetter, QuizCore.letterFor(order, "LG014-1"));
  }
});

test("grading compares option IDs and is independent of the shuffle", () => {
  for (const p of problems) {
    const key = QuizCore.correctOption(p);
    for (const seed of ["a", "b", "c", "d", "e"]) {
      const order = QuizCore.shuffleOptionIds(p, seed + p.id);
      assert.equal(QuizCore.grade(p, key.id).correct, true, p.id);
      // Picking whatever sits at the source key's index is only right if the shuffle kept it there.
      const atSourceIndex = order[QuizCore.getOptions(p).indexOf(key)];
      assert.equal(QuizCore.grade(p, atSourceIndex).correct, atSourceIndex === key.id, p.id);
    }
    // Display letters and raw indexes are never accepted as answers.
    for (const bogus of ["A", "B", "C", "D", 0, 1, 2, 3, String(p.answer)]) {
      assert.equal(QuizCore.grade(p, bogus).correct, false, `${p.id} accepted ${bogus}`);
    }
  }
});

test("review shows the right 'your answer' and 'key' letters after a shuffle", () => {
  const p = byId("LG002");
  const order = reshuffledOrder(p);
  const letterOf = id => QuizCore.letterFor(order, id);
  const picked = "LG002-1"; // "She reread Pride And Prejudice." (source position B)
  const r = QuizCore.describeAttemptItem(p, roundTrip(QuizCore.buildAttemptItem(p, order, picked)));

  assert.equal(r.yourLetter, letterOf(picked));
  assert.equal(r.yourText, "She reread Pride And Prejudice.");
  assert.equal(r.keyLetter, letterOf("LG002-2"));
  assert.equal(r.keyText, "She reread Pride and Prejudice.");
  // The explanation names each option by the letter it had on screen.
  assert.match(r.explanation, new RegExp(`${letterOf("LG002-0")} under-capitalizes; ${letterOf("LG002-1")} capitalizes and; ${letterOf("LG002-3")} is inconsistent\\.`));
  // ...so it can never describe the key as one of the wrong choices.
  assert.doesNotMatch(r.explanation, new RegExp(`\\b${r.keyLetter} (under-capitalizes|capitalizes and|is inconsistent)`));
  assert.doesNotMatch(r.explanation, /\{\{opt:/);
});

test("a saved attempt reviews identically after reload, even if the live shuffle changes", () => {
  const p = byId("RD002");
  const order = reshuffledOrder(p);
  const saved = JSON.stringify(QuizCore.buildAttemptItem(p, order, "RD002-0"));
  const before = QuizCore.describeAttemptItem(p, JSON.parse(saved));
  // Simulate a later session with a different order; the stored order wins.
  QuizCore.shuffleOptionIds(p, "some-other-session");
  const after = QuizCore.describeAttemptItem(p, JSON.parse(saved));
  assert.deepEqual(after, before);
  assert.equal(after.yourText, "Buffelgrass should be banned statewide this year.");
});

test("every explanation token renders to the letter its option was shown at", () => {
  for (const p of problems) {
    const ids = QuizCore.getOptions(p).map(o => o.id);
    const order = reshuffledOrder(p);
    const rendered = QuizCore.renderExplanation(p.explanation, order);
    assert.doesNotMatch(rendered, /\{\{opt:/, p.id);
    for (const [, id] of String(p.explanation).matchAll(QuizCore.OPTION_TOKEN)) {
      assert.ok(ids.includes(id), `${p.id} token ${id}`);
    }
  }
});
