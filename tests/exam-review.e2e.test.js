/* Drives the real exam.html in Chromium: answer some questions wrong, some
   right, leave some blank, submit, and check the review screen and the saved
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

const EXAM_URL = pathToFileURL(path.join(__dirname, "..", "exam.html")).href + "?exam=ela-diagnostic";

test("exam review shows the picked choice for wrong answers, blanks only for blanks, and shuffled keys", { skip: !chromium && "playwright not installed" }, async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    page.on("dialog", d => d.accept());
    await page.goto(EXAM_URL);

    const total = await page.evaluate(() => session.items.length);
    const expected = [];
    for (let i = 0; i < total; i++) {
      // What the learner sees for this question: letter + option ID per choice.
      const shown = await page.$$eval("#qchoices .choice", labels => labels.map(l => ({
        id: l.querySelector("input").value,
        letter: l.querySelector("strong").textContent.replace(".", "")
      })));
      const keyId = await page.evaluate(i => QuizCore.correctOption(session.items[i]).id, i);
      const key = shown.find(s => s.id === keyId);
      // Cycle: wrong, wrong, right, blank.
      const mode = ["wrong", "wrong", "right", "blank"][i % 4];
      const pick = mode === "right" ? key : mode === "wrong" ? shown.find(s => s.id !== keyId) : null;
      if (pick) await page.click(`#qchoices input[value="${pick.id}"]`);
      expected.push({
        problemId: await page.evaluate(i => session.items[i].id, i),
        mode,
        yourLetter: pick ? pick.letter : "—",
        pickId: pick ? pick.id : null,
        keyLetter: key.letter
      });
      if (i < total - 1) await page.click("#next");
    }
    await page.click("#submit-exam");

    const rows = await page.$$eval("#results .grid > div", els => els.map(e => ({
      problemId: e.querySelector(".chip").textContent,
      status: e.querySelectorAll(".chip")[1].textContent,
      line: e.querySelector(".muted").textContent.trim(),
      explanation: e.querySelector(".explanation").textContent
    })));
    assert.equal(rows.length, total);
    rows.forEach((row, i) => {
      const exp = expected[i];
      assert.equal(row.problemId, exp.problemId);
      assert.equal(row.line, `Your answer: ${exp.yourLetter} · Key: ${exp.keyLetter}`, exp.problemId);
      assert.equal(row.status, exp.mode === "right" ? "correct" : "missed", exp.problemId);
      assert.doesNotMatch(row.explanation, /\{\{opt:/);
    });

    // LG002's explanation must name the options by the letters shown on screen.
    const lg = await page.evaluate(() => {
      const i = session.items.findIndex(p => p.id === "LG002");
      const order = session.optionOrders[i];
      return { i, letters: ["LG002-0", "LG002-1", "LG002-3"].map(id => QuizCore.letterFor(order, id)) };
    });
    assert.ok(rows[lg.i].explanation.includes(
      `${lg.letters[0]} under-capitalizes; ${lg.letters[1]} capitalizes and; ${lg.letters[2]} is inconsistent.`
    ));

    // The saved attempt stores option IDs for every submission, wrong ones included.
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("az-nes-math-prep-v1")).exams[0]);
    assert.equal(saved.items.length, total);
    saved.items.forEach((item, i) => {
      assert.equal(item.problemId, expected[i].problemId);
      assert.equal(item.chosenOptionId, expected[i].pickId);
      assert.equal(item.correct, expected[i].mode === "right");
    });
    assert.equal(saved.correct, expected.filter(e => e.mode === "right").length);

    // After a reload, the stored attempt alone reproduces the same review letters.
    await page.goto(pathToFileURL(path.join(__dirname, "..", "exam.html")).href);
    const reloaded = await page.evaluate(() => {
      const rec = Progress.load().exams[0];
      return rec.items.map(item => {
        const r = QuizCore.describeAttemptItem(PROBLEMS.find(p => p.id === item.problemId), item);
        return `Your answer: ${r.blank ? "—" : r.yourLetter} · Key: ${r.keyLetter}`;
      });
    });
    assert.deepEqual(reloaded, rows.map(r => r.line));
  } finally {
    await browser.close();
  }
});
