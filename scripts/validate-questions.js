#!/usr/bin/env node
/* Validate every question in every bank (practice/exam problems and lesson
   quick-checks) plus every fixed exam form.

   Fails a question when:
   - it does not have exactly one correct option
   - option IDs are missing/duplicated, or option text is empty/duplicated
   - an explanation uses an {{opt:id}} token that is not one of its options
   - an explanation hardcodes a letter/position reference ("B is a comma
     splice", "Choice C", "option 2", "the last distractor") that breaks
     once options are shuffled. Use {{opt:<optionId>}} or describe the
     option's content instead.

   Usage: node scripts/validate-questions.js   (exit code 1 on any failure) */
const QuizCore = require("../js/quiz-core.js");
const { loadQuestionData } = require("./load-question-data.js");

const STANDALONE_LETTER = /(?<![\p{L}\p{N}'’$\\^_|∩∪=+\-−/])([A-E])(?![\p{L}\p{N}'’(|∩∪=²³_])/gu;
const POSITIONAL = [
  /\b(?:[Oo]ptions?|[Cc]hoices?|[Aa]nswers?)\s+(?:\(?[A-E]\)?|[1-5]|one|two|three|four|five)(?![\p{L}\p{N}])/gu,
  /\b(?:first|second|third|fourth|last|final)\s+(?:option|choice|answer|distractor)s?\b/gi
];

function plain(text) {
  return String(text || "")
    .replace(QuizCore.OPTION_TOKEN, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ");
}

/** Letters that the question itself uses as labels ("Type B", "set A", "+ C", "(A) the teacher…"). */
function contentLabels(contextText) {
  return new Set(plain(contextText).match(/(?<![\p{L}\p{N}'’])[A-E](?![\p{L}\p{N}'’])/gu) || []);
}

function looksLikeLetterReferenceToA(text, index) {
  const after = text.slice(index + 1);
  const before = text.slice(0, index);
  if (/^\s*(?:[,;:.)]|(?:and|or|is|are|was|through)\b|[–-]\s*[B-E]\b)/.test(after)) return true;
  if (/(?:\(|\b(?:in|as in|than|like)\s)$/.test(before)) return true;
  // "A omits…", "A under-capitalizes…": letter followed by a third-person verb, not a noun
  const next = (after.match(/^\s+([a-z][a-z-]*)/) || [])[1];
  if (!next) return false;
  const parts = next.split("-");
  if (parts.length > 2) return false; // compound noun such as "ban-the-fables policy"
  const word = parts.pop();
  return word.length > 3 && /s$/.test(word) && !/(?:ss|us|is|ies|ics|ous|ess|ness|sis|lens|news|series)$/.test(word);
}

/** Return hardcoded letter/position references found in an explanation. */
function findLetterReferences(explanation, contextText) {
  const text = plain(explanation);
  const labels = contentLabels(contextText);
  const hits = [];
  for (const re of POSITIONAL) {
    for (const m of text.matchAll(re)) {
      const letter = (m[0].match(/\b([A-E])\b/) || [])[1];
      if (!letter || !labels.has(letter)) hits.push(m[0].trim());
    }
  }
  for (const m of text.matchAll(STANDALONE_LETTER)) {
    const letter = m[1];
    if (labels.has(letter)) continue;
    if (letter === "A" && !looksLikeLetterReferenceToA(text, m.index)) continue;
    hits.push(text.slice(Math.max(0, m.index - 12), m.index + 14).replace(/\s+/g, " ").trim());
  }
  return [...new Set(hits)];
}

function validateQuestion(q, contextText) {
  const errors = [];
  if (!q.options && !Number.isInteger(q.answer)) errors.push(`answer key ${JSON.stringify(q.answer)} is not an option index`);
  const options = QuizCore.getOptions(q);
  if (options.length < 2) errors.push(`only ${options.length} option(s)`);
  const correct = options.filter(o => o.isCorrect);
  if (correct.length !== 1) errors.push(`expected exactly one isCorrect option, found ${correct.length}`);
  const ids = options.map(o => o.id);
  const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupIds.length) errors.push(`duplicate option id(s): ${[...new Set(dupIds)].join(", ")}`);
  const texts = options.map(o => String(o.text ?? "").trim());
  if (texts.some(t => !t)) errors.push("empty option text");
  const dupTexts = texts.filter((t, i) => t && texts.indexOf(t) !== i);
  if (dupTexts.length) errors.push(`duplicate option text: ${JSON.stringify(dupTexts[0])}`);
  if (!String(q.explanation || "").trim()) errors.push("missing explanation");

  const explanations = [["explanation", q.explanation], ...options.map(o => [`option ${o.id} explanation`, o.explanation])];
  for (const [label, text] of explanations) {
    if (!text) continue;
    for (const [, id] of String(text).matchAll(QuizCore.OPTION_TOKEN)) {
      if (!ids.includes(id)) errors.push(`${label}: {{opt:${id}}} is not an option of this question`);
    }
    const refs = findLetterReferences(text, contextText);
    if (refs.length) errors.push(`${label}: hardcoded letter/position reference(s): ${refs.map(r => JSON.stringify(r)).join(", ")}`);
  }
  return errors;
}

function problemContext(p) {
  return [p.title, p.stem, p.passage, ...QuizCore.getOptions(p).map(o => o.text)].filter(Boolean).join("\n");
}

function lessonChecks(lessons) {
  const out = [];
  for (const [lessonId, lesson] of Object.entries(lessons)) {
    (lesson.sections || []).forEach((sec, secIdx) => {
      (sec.checks || (sec.check ? [sec.check] : [])).forEach((check, checkIdx) => {
        out.push({
          label: `lesson ${lessonId} section ${secIdx} check ${checkIdx}`,
          question: { id: `${lessonId}:${secIdx}:${checkIdx}`, choices: check.choices || [], answer: check.answer, explanation: check.explain },
          context: [check.prompt, ...(check.choices || [])].join("\n")
        });
      });
    });
  }
  return out;
}

function validateAll(data) {
  const failures = [];
  const seen = new Map();
  for (const p of data.problems) {
    const errors = validateQuestion(p, problemContext(p));
    if (seen.has(p.id)) errors.push("duplicate problem id");
    seen.set(p.id, p);
    if (errors.length) failures.push({ label: `problem ${p.id}`, errors });
  }
  for (const c of lessonChecks(data.lessons)) {
    const errors = validateQuestion(c.question, c.context);
    if (errors.length) failures.push({ label: c.label, errors });
  }
  for (const exam of data.exams) {
    const missing = (exam.problemIds || []).filter(id => !seen.has(id));
    if (missing.length) failures.push({ label: `exam ${exam.id}`, errors: [`unknown problem id(s): ${missing.join(", ")}`] });
  }
  return {
    failures,
    counts: { problems: data.problems.length, lessonChecks: lessonChecks(data.lessons).length, exams: data.exams.length }
  };
}

if (require.main === module) {
  const { failures, counts } = validateAll(loadQuestionData());
  console.log(`Checked ${counts.problems} bank problems, ${counts.lessonChecks} lesson checks, ${counts.exams} exams.`);
  if (!failures.length) {
    console.log("All questions valid.");
  } else {
    console.log(`\n${failures.length} question(s) need fixes:\n`);
    for (const f of failures) {
      console.log(`✗ ${f.label}`);
      for (const e of f.errors) console.log(`    - ${e}`);
    }
    process.exitCode = 1;
  }
}

module.exports = { findLetterReferences, validateQuestion, validateAll };
