#!/usr/bin/env node
/* Passage-blind and open-book audit copies of a passage form, and scoring of a reader's predictions.

   node scripts/audit.js export <form> [--seed N]
       Writes three files to audit-out/ (not committed):
         <form>-s<N>-blind.txt   stems and options only; for a reader who must not see the passages
         <form>-s<N>-open.txt    passages, stems, and options; checks that the key is the defensible answer
         <form>-s<N>-key.json    the key for that option order; never give this to the reader
       Options are shuffled per question from the seed, so a reader's habit of favoring one letter
       cancels out across runs. --seed 0 keeps the source order. Use a new seed and a new chat per run.

   node scripts/audit.js score <key.json> <predictions.txt> [<key.json> <predictions.txt> ...]
       Scores each run. The predictions file is whatever the reader replied: a table with rows like
       "| 3 | B | High | reason |", or just the letters in order ("ABDCA..."). With several runs it
       also reports how often each question was guessed.

   See "Anti-testwiseness rules" in CLAUDE.md for how to read the results. */
const fs = require("fs");
const path = require("path");
const QuizCore = require("../js/quiz-core.js");
const { loadQuestionData } = require("./load-question-data.js");

const FORM_FILES = {
  A: "js/data/problems-ela-longform.js",
  B: "js/data/problems-ela-longform-b.js",
  C: "js/data/problems-ela-longform-c.js",
  D: "js/data/problems-ela-longform-d.js",
  E: "js/data/problems-ela-longform-e.js",
  F: "js/data/problems-ela-longform-f.js"
};
const LETTERS = "ABCD";

const BLIND_PROMPT = `You are taking a multiple-choice reading test, but the passages are missing.
Answer every question anyway using only the stems and options.

Reply with one table and nothing else:
Question | Answer (A–D) | Confidence (High / Medium / Low) | Reason in under 15 words

Do not skip any question. Do not add commentary before or after the table.`;

const OPEN_PROMPT = `Answer every question using the passages below.

Reply with one table and nothing else:
Question | Answer (A–D) | Confidence (High / Medium / Low) | Reason in under 15 words

If two options seem defensible for a question, name both letters in the Reason column.
Do not skip any question. Do not add commentary before or after the table.`;

function hash(text) {
  let h = 2166136261;
  for (const ch of String(text)) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic option order for one question; seed 0 keeps the authored order. */
function shuffled(options, seed, problemId) {
  if (!seed) return options.slice();
  return options
    .map(o => ({ o, k: hash(seed + ":" + problemId + ":" + o.id) }))
    .sort((a, b) => a.k - b.k || String(a.o.id).localeCompare(String(b.o.id)))
    .map(x => x.o);
}

function buildExport(data, form, seed) {
  const file = FORM_FILES[form];
  if (!file) throw new Error(`Unknown form "${form}". Use one of ${Object.keys(FORM_FILES).join(", ")}.`);
  const ids = data.problemsByFile[file];
  const problems = data.problems.filter(p => ids.has(p.id));
  let blind = BLIND_PROMPT + "\n\n";
  let open = OPEN_PROMPT + "\n";
  const questions = [];
  let lastSet = null;
  problems.forEach((p, i) => {
    const n = i + 1;
    const order = shuffled(QuizCore.getOptions(p), seed, p.id);
    const block = `${n}. ${p.stem}\n` + order.map((o, j) => `   ${LETTERS[j]}. ${o.text}`).join("\n") + "\n\n";
    blind += block;
    if (p.passageSet !== lastSet) {
      lastSet = p.passageSet;
      open += `\n=== PASSAGE ===\n${p.passage}\n=== END PASSAGE ===\n\n`;
    }
    open += block;
    questions.push({ n, id: p.id, set: p.passageSet, key: LETTERS[order.findIndex(o => o.isCorrect)], order: Array.from(order, o => o.id) });
  });
  return { blind, open, key: { form, seed, questions } };
}

/** Pull answers out of a reader's reply: table rows, numbered lines, or a bare run of letters. */
function parsePredictions(text, count) {
  const out = new Map();
  for (const line of String(text).split(/\r?\n/)) {
    const cells = line.split("|").map(c => c.replace(/[*_`#]/g, "").trim()).filter(Boolean);
    if (cells.length >= 2 && /^Q?\d+$/i.test(cells[0]) && /^[A-D]$/i.test(cells[1])) {
      const confidence = (cells[2] || "").match(/^(high|medium|low)/i);
      out.set(Number(cells[0].replace(/\D/g, "")), { answer: cells[1].toUpperCase(), confidence: confidence ? confidence[1].toLowerCase() : null });
      continue;
    }
    const m = line.match(/^\s*Q?(\d+)\s*[.):-]\s*\**\(?([A-D])\)?\**(?![a-z])/i);
    if (m) out.set(Number(m[1]), { answer: m[2].toUpperCase(), confidence: null });
  }
  if (!out.size) {
    const letters = String(text).replace(/[^A-Da-d]/g, "").toUpperCase();
    if (letters.length === count) letters.split("").forEach((a, i) => out.set(i + 1, { answer: a, confidence: null }));
  }
  return out;
}

function scoreRun(key, predictions) {
  const rows = key.questions.map(q => {
    const p = predictions.get(q.n);
    return { ...q, answer: p ? p.answer : null, confidence: p ? p.confidence : null, correct: !!p && p.answer === q.key };
  });
  const tally = list => ({ correct: list.filter(r => r.correct).length, total: list.length });
  const byConfidence = {};
  for (const level of ["high", "medium", "low"]) {
    const list = rows.filter(r => r.confidence === level);
    if (list.length) byConfidence[level] = tally(list);
  }
  const bySet = {};
  for (const r of rows) (bySet[r.set] = bySet[r.set] || []).push(r);
  return {
    rows,
    answered: rows.filter(r => r.answer).length,
    total: tally(rows),
    byConfidence,
    bySet: Object.fromEntries(Object.entries(bySet).map(([set, list]) => [set, tally(list)]))
  };
}

function report(runs) {
  let out = "";
  runs.forEach((run, i) => {
    const { key, score } = run;
    out += `Run ${i + 1}: Form ${key.form}, seed ${key.seed}: ${score.total.correct} of ${score.total.total} correct` +
      ` (chance is about ${(score.total.total / 4).toFixed(1)})\n`;
    if (score.answered < score.total.total) out += `  Only ${score.answered} of ${score.total.total} questions had a readable answer.\n`;
    for (const [level, t] of Object.entries(score.byConfidence)) out += `  ${level} confidence: ${t.correct} of ${t.total}\n`;
    out += "  By passage: " + Object.entries(score.bySet).map(([set, t]) => `${set} ${t.correct}/${t.total}`).join(", ") + "\n";
    const flagged = score.rows.filter(r => r.correct && r.confidence === "high").map(r => `${r.n} (${r.id})`);
    if (flagged.length) out += `  Correct with high confidence: ${flagged.join(", ")}\n`;
    out += "\n";
  });
  if (runs.length > 1) {
    const hits = new Map();
    for (const { score } of runs) for (const r of score.rows) {
      const h = hits.get(r.id) || { id: r.id, n: r.n, set: r.set, correct: 0, runs: 0 };
      h.runs += 1;
      if (r.correct) h.correct += 1;
      hits.set(r.id, h);
    }
    const sorted = [...hits.values()].sort((a, b) => b.correct / b.runs - a.correct / a.runs || a.n - b.n);
    out += `Across ${runs.length} runs, questions guessed in more than half:\n`;
    const leaking = sorted.filter(h => h.correct / h.runs > 0.5);
    out += leaking.length ? leaking.map(h => `  ${h.id} (${h.set}): ${h.correct} of ${h.runs}`).join("\n") + "\n" : "  none\n";
  }
  return out;
}

function main(argv) {
  const [command, ...rest] = argv;
  if (command === "export") {
    const form = String(rest[0] || "").toUpperCase();
    const seedAt = rest.indexOf("--seed");
    const seed = seedAt >= 0 ? Number(rest[seedAt + 1]) : 1;
    const result = buildExport(loadQuestionData(), form, seed);
    const dir = path.join(__dirname, "..", "audit-out");
    fs.mkdirSync(dir, { recursive: true });
    const base = path.join(dir, `${form}-s${seed}`);
    fs.writeFileSync(base + "-blind.txt", result.blind);
    fs.writeFileSync(base + "-open.txt", result.open);
    fs.writeFileSync(base + "-key.json", JSON.stringify(result.key, null, 1));
    console.log(`Form ${form}, seed ${seed}: ${result.key.questions.length} questions`);
    for (const suffix of ["-blind.txt", "-open.txt", "-key.json"]) console.log("  " + path.relative(process.cwd(), base + suffix));
    return;
  }
  if (command === "score" && rest.length >= 2 && rest.length % 2 === 0) {
    const runs = [];
    for (let i = 0; i < rest.length; i += 2) {
      const key = JSON.parse(fs.readFileSync(rest[i], "utf8"));
      const predictions = parsePredictions(fs.readFileSync(rest[i + 1], "utf8"), key.questions.length);
      runs.push({ key, score: scoreRun(key, predictions) });
    }
    process.stdout.write(report(runs));
    return;
  }
  console.log("Usage:\n  node scripts/audit.js export <A-F> [--seed N]\n  node scripts/audit.js score <key.json> <predictions.txt> [<key.json> <predictions.txt> ...]");
  process.exitCode = 1;
}

if (require.main === module) main(process.argv.slice(2));

module.exports = { buildExport, parsePredictions, scoreRun, report, FORM_FILES };
