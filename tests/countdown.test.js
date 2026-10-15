const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");
const { pathToFileURL } = require("url");
const C = require("../js/countdown.js");

const day = C.parseDay;
const fmt = C.formatDay;

function plan(today, testDate, extra) {
  return C.buildSchedule(Object.assign({ today, testDate, baselineDone: false, pearsonDate: null }, extra));
}

test("Oct 15 to Dec 15: baseline, weak areas, hard passages, Pearson with 2.5 weeks left, fix, taper", () => {
  const s = plan("2026-10-15", "2026-12-15");
  assert.equal(s.daysLeft, 61);
  assert.deepEqual(s.phases.map(p => [p.id, fmt(p.start), fmt(p.end)]), [
    ["baseline", "2026-10-15", "2026-10-18"],
    ["weak", "2026-10-19", "2026-11-07"],
    ["passages", "2026-11-08", "2026-11-27"],
    ["fix", "2026-11-29", "2026-12-12"],
    ["taper", "2026-12-13", "2026-12-14"]
  ]);
  assert.deepEqual(s.milestones.map(m => [m.id, fmt(m.day)]), [
    ["pearson", "2026-11-28"], ["final", "2026-12-08"], ["test", "2026-12-15"]
  ]);
  assert.equal(s.weeks.length, 9);
  assert.equal(s.weeks[0].timed.href, "exam.html?exam=ela-clusters");
  assert.equal(s.weeks.at(-1).timed, null, "the last week stays light");
});

test("for any window, phases never overlap, stay before test day, and leave the Pearson day free", () => {
  for (const baselineDone of [false, true]) {
    for (let n = 0; n <= 120; n++) {
      const t = day("2026-10-15");
      const s = plan("2026-10-15", fmt(t + n), { baselineDone });
      const covered = new Map();
      for (const p of s.phases) {
        assert.ok(p.start <= p.end && p.start >= t && p.end < t + n, `${n}: ${p.id} out of range`);
        for (let d = p.start; d <= p.end; d++) {
          assert.ok(!covered.has(d), `${n}: ${p.id} overlaps ${covered.get(d)}`);
          covered.set(d, p.id);
        }
      }
      const pearson = s.milestones.find(m => m.id === "pearson");
      if (n >= 2) {
        assert.ok(pearson && pearson.day >= t && pearson.day <= t + n - 2, `${n}: Pearson placement`);
        assert.ok(!covered.has(pearson.day), `${n}: Pearson day is a study phase`);
        if (n >= 30) assert.ok(t + n - pearson.day >= 14, `${n}: Pearson too close to test day`);
      }
      for (let d = t; d < t + n; d++) {
        assert.ok(covered.has(d) || d === pearson?.day, `${n}: ${fmt(d)} has no plan`);
      }
    }
  }
});

test("once the Pearson test is taken, the plan switches to fixing its gaps", () => {
  const s = plan("2026-11-30", "2026-12-15", { baselineDone: true, pearsonDate: "2026-11-28" });
  assert.deepEqual(s.phases.map(p => [p.id, fmt(p.start), fmt(p.end)]), [
    ["fix", "2026-11-30", "2026-12-12"],
    ["taper", "2026-12-13", "2026-12-14"]
  ]);
  assert.equal(s.milestones.some(m => m.id === "pearson"), false);
});

test("bad and past dates", () => {
  assert.equal(plan("2026-10-15", "2026-02-30"), null);
  assert.equal(plan("2026-10-15", ""), null);
  assert.equal(plan("2026-10-15", "2026-10-01").past, true);
  assert.equal(plan("2026-10-15", "2026-10-15").daysLeft, 0);
});

const SKILLS = {
  "informational-texts": { title: "Informational texts", domain: "reading", lessonIds: ["rd-02"] },
  "poetry": { title: "Poetry", domain: "literature", lessonIds: ["lt-03"] },
  "grammar": { title: "Grammar", domain: "language", lessonIds: ["lg-01"] },
  "fractions": { title: "Fractions", domain: "number", lessonIds: ["n-01"] }
};

test("weak domains rank by points at stake; weak skills need 4+ tries and ignore math", () => {
  const state = {
    exams: [
      { id: "ela-clusters", type: "english", percent: 70, at: "2026-10-14T00:00:00Z",
        byDomain: { reading: { correct: 14, total: 20 }, oral: { correct: 3, total: 6 }, language: { correct: 9, total: 10 } } },
      { id: "ela-reading-block", type: "english", percent: 60, at: "2026-10-13T00:00:00Z",
        byDomain: { reading: { correct: 4, total: 10 } } },
      { id: "math-full-1", type: "math", percent: 40, at: "2026-10-12T00:00:00Z", byDomain: { number: { correct: 1, total: 10 } } }
    ],
    skillProgress: {
      "informational-texts": { attempts: 10, correct: 5 },
      "poetry": { attempts: 3, correct: 0 },
      "grammar": { attempts: 8, correct: 7 },
      "fractions": { attempts: 10, correct: 1 }
    },
    trapLog: [{ trap: "overclaim" }, { trap: "tone" }, { trap: "overclaim" }]
  };
  const a = C.analyze(state, { skills: SKILLS, domains: [] });
  // reading: 18/30 = 60% → (80-60)*23 = 460; oral: 50% → 30*12 = 360; language 90% → 0
  assert.deepEqual(a.weakDomains.map(d => [d.id, d.pct, d.priority]), [["reading", 60, 460], ["oral", 50, 360]]);
  assert.deepEqual(a.weakSkills.map(s => [s.id, s.pct]), [["informational-texts", 50]]);
  assert.deepEqual(a.traps, [{ trap: "overclaim", n: 2 }, { trap: "tone", n: 1 }]);
  assert.equal(a.baselineDone, true);
  assert.equal(a.bestPassage, 70);
  assert.equal(a.metTarget, false);
});

test("a domain drill alone is not a baseline sitting", () => {
  const a = C.analyze({ exams: [{ id: "ela-reading-block", type: "english", percent: 90, at: "x", byDomain: {} }] }, { skills: {} });
  assert.equal(a.baselineDone, false);
  assert.equal(a.latest, null);
});

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  chromium = null;
}

test("countdown page builds the plan from a saved date and saved results", { skip: !chromium && "playwright not installed" }, async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    const url = pathToFileURL(path.join(__dirname, "..", "countdown.html")).href;
    await page.goto(url);
    assert.match(await page.textContent("#today"), /Set your test date/);

    const today = await page.evaluate(() => Countdown.localToday());
    const testDate = fmt(day(today) + 61);
    await page.fill("#test-date", testDate);
    await page.click("#save-date");
    assert.equal(await page.textContent("#stats .stat:nth-child(1) .value"), "61");
    assert.equal(await page.textContent("#stats .stat:nth-child(2) .value"), "Baseline");
    assert.equal(await page.locator("#weeks .week-card").count(), 10); // 9 weeks + test day

    // A saved cluster sitting with weak oral and literature moves the plan past the baseline.
    await page.evaluate(() => {
      Progress.recordExam({
        id: "ela-clusters", title: "Cluster exam", type: "english", correct: 40, total: 56, percent: 71,
        byDomain: { reading: { correct: 13, total: 15 }, literature: { correct: 9, total: 15 }, oral: { correct: 3, total: 6 } }
      });
    });
    await page.reload();
    assert.equal(await page.inputValue("#test-date"), testDate);
    assert.equal(await page.textContent("#stats .stat:nth-child(2) .value"), "Weak areas");
    assert.equal(await page.textContent("#stats .stat:nth-child(3) .value"), "71%");
    const order = await page.$$eval("#domains .cd-domain strong", els => els.map(e => e.textContent));
    assert.match(order[0], /Literature/); // 60%: (80-60)*23 = 460 beats oral's 50%: 30*12 = 360
    assert.match(order[1], /Oral/);
    assert.match(await page.textContent("#today"), /Literature/);

    await page.check("#pearson-taken");
    await page.fill("#pearson-note", "Scaled 231; weakest: <writing>");
    await page.click("#save-pearson");
    await page.reload();
    assert.equal(await page.isChecked("#pearson-taken"), true);
    assert.match(await page.textContent("#ready"), /Scaled 231; weakest: <writing>/);
    assert.equal(await page.textContent("#stats .stat:nth-child(2) .value"), "Fix Pearson gaps");

    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
