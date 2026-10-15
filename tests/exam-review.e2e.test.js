/* Drives the real exam.html in Chromium on the 56-question ELA passage-set
   exam: answer the seven reported misses wrong, leave one question blank,
   answer the rest right, submit, and check the review screen and the saved
   attempt. Skips when Playwright is not installed. */
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");
const { pathToFileURL } = require("url");

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  chromium = null;
}

const PAGE = pathToFileURL(path.join(__dirname, "..", "exam.html")).href;
const MISSES = ["LF017", "LF020", "LF021", "LF028", "LF035", "LF047", "LF055"];
const BLANK = "LF001";

test("passage-set exam review: wrong answers show the picked choice, only blanks say Blank, keys follow the shuffle", { skip: !chromium && "playwright not installed" }, async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    page.on("dialog", d => d.accept());
    await page.goto(PAGE + "?exam=ela-field-rigor");

    const total = await page.evaluate(() => session.items.length);
    assert.equal(total, 56);
    const expected = [];
    for (let i = 0; i < total; i++) {
      // What the learner sees: letter + option ID + text per choice.
      const shown = await page.$$eval("#qchoices .choice", labels => labels.map(l => ({
        id: l.querySelector("input").value,
        letter: l.querySelector("strong").textContent.replace(".", "")
      })));
      const { id, keyId, texts } = await page.evaluate(i => {
        const p = session.items[i];
        return {
          id: p.id,
          keyId: QuizCore.correctOption(p).id,
          texts: Object.fromEntries(QuizCore.getOptions(p).map(o => [o.id, o.text]))
        };
      }, i);
      const key = shown.find(s => s.id === keyId);
      const mode = MISSES.includes(id) ? "wrong" : id === BLANK ? "blank" : "right";
      const pick = mode === "right" ? key : mode === "wrong" ? shown.find(s => s.id !== keyId) : null;
      if (pick) await page.click(`#qchoices input[value="${pick.id}"]`);
      expected.push({ id, mode, pick, key, pickText: pick && texts[pick.id], keyText: texts[keyId] });
      if (i < total - 1) await page.click("#next");
    }
    await page.click("#submit-exam");

    const rows = await page.$$eval("#review-list .review-item", els => els.map(e => {
      const boxes = e.querySelectorAll(".grid-2 > div");
      return {
        id: e.querySelector(".chip").textContent,
        status: e.querySelectorAll(".chip")[1].textContent,
        yourLetter: boxes[0].children[1].textContent.trim(),
        yourNote: boxes[0].querySelector("p").textContent.trim(),
        keyLetter: boxes[1].children[1].textContent.trim(),
        keyNote: (boxes[1].querySelector("p") || { textContent: "" }).textContent.trim(),
        explanation: (e.querySelector(".explanation") || { textContent: "" }).textContent
      };
    }));
    assert.equal(rows.length, total);
    rows.forEach((row, i) => {
      const exp = expected[i];
      assert.equal(row.id, exp.id);
      assert.equal(row.keyLetter, exp.key.letter, exp.id);
      assert.equal(row.keyNote, exp.keyText, exp.id);
      assert.doesNotMatch(row.explanation, /\{\{opt:/, exp.id);
      if (exp.mode === "blank") {
        assert.equal(row.status, "missed");
        assert.equal(row.yourLetter, "—");
        assert.equal(row.yourNote, "Blank. A blank is wrong.");
      } else if (exp.mode === "wrong") {
        assert.equal(row.status, "missed", exp.id);
        assert.equal(row.yourLetter, exp.pick.letter, exp.id);
        assert.equal(row.yourNote, exp.pickText, exp.id);
        assert.doesNotMatch(row.yourNote, /Blank/, exp.id);
      } else {
        assert.equal(row.status, "correct", exp.id);
        assert.equal(row.yourLetter, exp.key.letter, exp.id);
        assert.equal(row.yourNote, "Matches the published key.", exp.id);
      }
    });
    const score = await page.textContent("#results");
    assert.match(score, /48<\/strong>|48\s*\/\s*56/);

    // LF055: the explanation names options by the letters actually shown.
    const lf = await page.evaluate(() => {
      const i = session.items.findIndex(p => p.id === "LF055");
      const order = session.optionOrders[i];
      return { i, b: QuizCore.letterFor(order, "LF055-1"), a: QuizCore.letterFor(order, "LF055-0") };
    });
    assert.ok(rows[lf.i].explanation.startsWith(`${lf.b} recasts the idea in new syntax and keeps the limit. ${lf.a} is unquoted copying.`));
    assert.equal(rows[lf.i].keyLetter, lf.b);

    // The saved attempt stores option IDs (and text) for every submission, wrong ones included.
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("az-nes-math-prep-v1")).exams[0]);
    assert.equal(saved.correct, 48);
    assert.equal(saved.items.length, total);
    saved.items.forEach((item, i) => {
      assert.equal(item.problemId, expected[i].id);
      assert.equal(item.chosenOptionId, expected[i].pick ? expected[i].pick.id : null);
      assert.equal(item.correct, expected[i].mode === "right");
    });

    // After a reload, the stored attempt alone reproduces the same letters.
    await page.goto(PAGE);
    const reloaded = await page.evaluate(() => Progress.load().exams[0].items.map(item => {
      const r = QuizCore.describeAttemptItem(PROBLEMS.find(p => p.id === item.problemId), item);
      return [r.blank ? "—" : r.yourLetter, r.keyLetter];
    }));
    assert.deepEqual(reloaded, rows.map(r => [r.yourLetter, r.keyLetter]));
  } finally {
    await browser.close();
  }
});
