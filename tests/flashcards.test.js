const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const window = {};
window.window = window;
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "js/data/flashcards.js"), "utf8"), vm.createContext({ window }));
const F = window.FLASHCARDS;
const allDecks = F.decks.map(d => d.id);
const cards = F.cardsFor(allDecks);
const termOf = new Map(cards.flatMap(c => [[c.term, c.term], [c.definition, c.term]]));

test("near-duplicate terms are treated as confusable", () => {
  for (const [a, b] of [
    ["Tone (informational)", "Tone (literary)"],
    ["Register", "Register (speech)"],
    ["Paraphrase", "Paraphrase (discussion)"],
    ["Main idea", "Thesis"],
    ["Context clue", "Antonym clue"],
    ["Epic", "In medias res"]
  ]) {
    assert.equal(F.confusable(a, b), true, `${a} / ${b}`);
  }
  assert.equal(F.confusable("Simile", "Metaphor"), false);
  assert.equal(F.confusable("Skimming", "Scanning"), false);
});

test("every confusable group names real cards", () => {
  const terms = new Set(cards.map(c => c.term));
  // Array.from: the deck data lives in a vm sandbox, so its arrays have another realm's prototype.
  assert.deepEqual(Array.from(F.CONFUSABLE_GROUPS.flat().filter(t => !terms.has(t))), []);
});

test("mixed-deck exam questions never offer a confusable (possibly also-correct) distractor", () => {
  for (let s = 0; s < 8; s++) {
    for (const item of F.examItems(allDecks, 30, "regression-" + s)) {
      const key = termOf.get(item.choices[item.answer]);
      for (const choice of item.choices.filter((_, i) => i !== item.answer)) {
        assert.equal(F.confusable(key, termOf.get(choice)), false, `${item.id}: ${key} vs ${termOf.get(choice)}`);
      }
    }
  }
});

test("cards-page quiz prompts never offer a confusable distractor", () => {
  for (const card of cards) {
    const q = F.quizPrompt(card, cards, "q:" + card.term, "mc");
    for (const choice of q.choices.filter((_, i) => i !== q.answer)) {
      assert.equal(F.confusable(card.term, termOf.get(choice)), false, `${card.term} vs ${termOf.get(choice)}`);
    }
  }
});
