const test = require("node:test");
const assert = require("node:assert/strict");
const { findLetterReferences, validateQuestion, validateAll } = require("../scripts/validate-questions.js");
const { loadQuestionData } = require("../scripts/load-question-data.js");

test("every question in every bank passes validation", () => {
  const { failures, counts } = validateAll(loadQuestionData());
  assert.ok(counts.problems > 400 && counts.lessonChecks > 500);
  assert.deepEqual(failures, []);
});

test("flags hardcoded letter and position references", () => {
  const ctx = "Which sentence is correct?";
  for (const text of [
    "A under-capitalizes; B capitalizes and; D is inconsistent.",
    "A is ethos, B is the ask, and D is pathos.",
    "Fix it with a semicolon (as in A).",
    "Choice C fuses the clauses.",
    "Do not repeat the same step (option 2).",
    "The last choice is also a fragment.",
    "C and D are ungrammatical."
  ]) {
    assert.notDeepEqual(findLetterReferences(text, ctx), [], text);
  }
});

test("does not flag articles, math variables, or letters the question itself uses as labels", () => {
  const cases = [
    ["A gerund is an -ing form used as a noun.", "Identify the gerund."],
    ["A ban-the-fables policy is persuasive and off-prompt.", "Pick the claim."],
    ["P(A|B)=P(A∩B)/P(B)=0.2/0.5=0.4.", "Find P(A|B)."],
    ["Antiderivative: x³ − 2x + C.", "x³ − 2x + C"],
    ["Type B is not automatic. Type A is weekday only.", "instant approval of Type B\nType A to include weekends"],
    ["(A) matches support to the ZPD; (B) does the work for the student.", "Compare (A) ... and (B) ..."],
    ["Title case keeps {{opt:Q-1}} lowercase.", ""]
  ];
  for (const [text, ctx] of cases) assert.deepEqual(findLetterReferences(text, ctx), [], text);
});

test("rejects questions without exactly one correct option or with dangling tokens", () => {
  const twoKeys = { id: "T", explanation: "x", options: [{ id: "a", text: "1", isCorrect: true }, { id: "b", text: "2", isCorrect: true }] };
  assert.match(validateQuestion(twoKeys, "").join(), /exactly one isCorrect option, found 2/);

  const noKey = { id: "T", explanation: "x", choices: ["1", "2"], answer: 5 };
  assert.match(validateQuestion(noKey, "").join(), /exactly one isCorrect option, found 0/);

  const dupText = { id: "T", explanation: "x", choices: ["same", "same"], answer: 0 };
  assert.match(validateQuestion(dupText, "").join(), /duplicate option text/);

  const badToken = { id: "T", explanation: "{{opt:T-9}} is wrong.", choices: ["1", "2"], answer: 0 };
  assert.match(validateQuestion(badToken, "").join(), /T-9.*not an option/);
});
