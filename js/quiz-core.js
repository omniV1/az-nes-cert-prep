/* Shared question model: options carry stable IDs, grading compares IDs,
   and display letters (A–D) are assigned only at render time.

   A problem may be authored either as
     { choices: ["...", ...], answer: <index>, explanation }            (legacy)
   or as
     { options: [{ id, text, isCorrect, explanation }, ...], explanation }
   Both normalize to the same option objects. Legacy option IDs are
   "<problemId>-<sourceIndex>", so they never depend on the shuffled order.

   Explanations must not hardcode letters. Refer to an option with
   {{opt:<optionId>}}; it renders as that option's letter in the order the
   learner actually saw. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.QuizCore = api;
})(typeof window !== "undefined" ? window : null, function () {
  const OPTION_TOKEN = /\{\{opt:([^}\s]+)\}\}/g;
  const cache = new WeakMap();

  function legacyOptionId(problemId, index) {
    return problemId + "-" + index;
  }

  function getOptions(problem) {
    if (cache.has(problem)) return cache.get(problem);
    let options;
    if (Array.isArray(problem.options)) {
      options = problem.options.map((o, index) => ({
        id: String(o.id != null ? o.id : legacyOptionId(problem.id, index)),
        text: o.text,
        isCorrect: o.isCorrect === true,
        explanation: o.explanation || ""
      }));
    } else {
      options = (problem.choices || []).map((text, index) => ({
        id: legacyOptionId(problem.id, index),
        text,
        isCorrect: index === problem.answer,
        explanation: ""
      }));
    }
    cache.set(problem, options);
    return options;
  }

  function findOption(problem, optionId) {
    return getOptions(problem).find(o => o.id === optionId) || null;
  }

  function correctOption(problem) {
    return getOptions(problem).find(o => o.isCorrect) || null;
  }

  function hash(value) {
    let h = 2166136261;
    for (const ch of value) {
      h ^= ch.charCodeAt(0);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /** Deterministic shuffle of whole option objects. Returns option IDs in display order. */
  function shuffleOptionIds(problem, seedKey) {
    return getOptions(problem)
      .map((o, index) => ({ id: o.id, h: hash(seedKey + ":" + index) }))
      .sort((a, b) => a.h - b.h)
      .map(x => x.id);
  }

  function letterAt(index) {
    return index >= 0 ? String.fromCharCode(65 + index) : null;
  }

  function letterFor(optionOrder, optionId) {
    return optionId == null ? null : letterAt(optionOrder.indexOf(optionId));
  }

  /** Replace {{opt:id}} tokens with the letter that option had in this order. */
  function renderExplanation(text, optionOrder) {
    return String(text || "").replace(OPTION_TOKEN, (_, id) => letterFor(optionOrder, id) || "?");
  }

  function grade(problem, chosenOptionId) {
    const answered = chosenOptionId != null && chosenOptionId !== "";
    const chosen = answered ? findOption(problem, chosenOptionId) : null;
    return { answered, correct: !!(chosen && chosen.isCorrect) };
  }

  /**
   * Build the saved record for one question. It is created from the raw
   * submission first (right or wrong), then graded, so a wrong answer is never
   * dropped. `chosenOptionId` is null only when nothing was submitted.
   */
  function buildAttemptItem(problem, optionOrder, chosenOptionId) {
    const chosen = chosenOptionId == null || chosenOptionId === "" ? null : String(chosenOptionId);
    const key = correctOption(problem);
    const item = {
      problemId: problem.id,
      optionOrder: optionOrder.slice(),
      chosenOptionId: chosen,
      correctOptionId: key ? key.id : null
    };
    item.correct = grade(problem, chosen).correct;
    return item;
  }

  /** Everything the review screen needs, derived only from a saved attempt item. */
  function describeAttemptItem(problem, item) {
    const blank = item.chosenOptionId == null;
    const chosen = blank ? null : findOption(problem, item.chosenOptionId);
    const key = item.correctOptionId != null ? findOption(problem, item.correctOptionId) : correctOption(problem);
    return {
      blank,
      correct: !blank && !!(chosen && chosen.isCorrect),
      yourLetter: blank ? null : letterFor(item.optionOrder, item.chosenOptionId),
      yourText: chosen ? chosen.text : null,
      yourExplanation: chosen ? renderExplanation(chosen.explanation, item.optionOrder) : "",
      keyLetter: key ? letterFor(item.optionOrder, key.id) : null,
      keyText: key ? key.text : null,
      explanation: renderExplanation(problem.explanation, item.optionOrder)
    };
  }

  return {
    OPTION_TOKEN,
    legacyOptionId,
    getOptions,
    findOption,
    correctOption,
    shuffleOptionIds,
    letterAt,
    letterFor,
    renderExplanation,
    grade,
    buildAttemptItem,
    describeAttemptItem
  };
});
