# CLAUDE.md

Guidance for working in this repository. It records how the code is laid out, what a question must look like, the quality rules we adopted after real mistakes, and how changes are verified and shipped.

## What this is

An unofficial practice app for Arizona educator exams: NES Mathematics (304), NES English Language Arts (301), and APK Secondary (052). It is a static site: plain HTML pages that load plain JavaScript files as globals. There is no build step, no bundler, and no server. `package.json` exists only to run the tests and the validator.

The owner is preparing for NES 301 and intends to sell the guide later, so question accuracy and honest scoring matter more than volume.

## Layout

| Path | What it holds |
|---|---|
| `index.html` | Dashboard |
| `exam.html` | Timed exams and the review screen |
| `practice.html` | Single-question practice |
| `guide.html` | Lessons with quick checks |
| `ace.html` | Readiness gates |
| `countdown.html`, `js/countdown.js` | Study plan built backward from a test date |
| `cards.html`, `learn.html`, `plan.html`, `notes.html`, `formulas.html`, `traps.html`, `review.html`, `study-guides.html` | Other pages |
| `js/quiz-core.js` | Question model: option IDs, shuffling, grading, explanation rendering |
| `js/storage.js` | `window.Progress`: saved state in `localStorage` under `az-nes-math-prep-v1` |
| `js/progress-engine.js` | Mastery, repair plans, trap labels |
| `js/data/problems*.js` | Question banks; each file appends to `window.PROBLEMS` |
| `js/data/lessons-*.js` | Lessons and their quick checks (`window.LESSONS`) |
| `js/data/exams.js` | Exam definitions (`window.EXAMS`) and the code that assembles each sitting |
| `js/data/skills.js`, `js/data/curriculum.js` | Skill and domain definitions |
| `js/data/flashcards.js` | Flashcard decks and their quiz logic |
| `scripts/load-question-data.js` | Loads the data files into a Node sandbox in page order |
| `scripts/validate-questions.js` | Validator (`npm run validate`) |
| `tests/*.test.js` | `node:test` suites (`npm test`) |

### Passage forms

The hard, passage-based ELA questions live in six files. All use IDs `LF###`.

| Form | File | IDs | Authoring format |
|---|---|---|---|
| A | `js/data/problems-ela-longform.js` | LF001–LF056 | legacy |
| B | `js/data/problems-ela-longform-b.js` | LF057–LF124 | legacy |
| C | `js/data/problems-ela-longform-c.js` | LF125–LF182 | legacy |
| D | `js/data/problems-ela-longform-d.js` | LF183–LF212 | option objects |
| E | `js/data/problems-ela-longform-e.js` | LF213–LF252 | option objects |
| F | `js/data/problems-ela-longform-f.js` | LF268–LF282 | option objects |

The next free ID is LF283. LF253–LF267 were the first version of Form F and are retired; never reuse a retired ID, because saved attempts and mastery records still point at it. Use Form F as the model for new work.

### The five pages that load question data

A new `js/data/problems-*.js` file does nothing until it has a `<script>` tag in all five of these, placed with the other bank files and before `js/data/exams.js`:

- `index.html`
- `exam.html`
- `practice.html`
- `guide.html`
- `ace.html`

`scripts/load-question-data.js` discovers data files by reading the script tags in `guide.html`, `exam.html`, and `practice.html`. A file that is missing from those pages is invisible to the validator and the tests, so they will pass without checking it.

## Question schema

### New questions: option objects (Form F style)

```js
(function () {
  const P = {
    poll: `Passage text for the cluster...`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: P[set], stem, options, explanation
  });

  const items = [
    item("LF268", "reading", "Bond poll — supported claim", ["informational", "graphics"],
      ["text-graphics", "informational-texts"], "poll",
      "Which claim is supported by the table and its margins of error?",
      [o("LF268-all", "Among all likely voters, Yes leads No by more than the full sample’s margin of error.",
          "51 − 41 = 10 points, larger than the ±4-point margin.", true),
       o("LF268-nochild", "Among voters with no children in district schools, Yes leads No by more than that group’s margin of error.",
          "47 − 45 = 2 points, well inside that group’s ±5-point margin."),
       /* two more options of the same kind */],
      "Read the column for the group named, subtract, and compare the gap with that group’s own margin of error.")
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  items.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items);
})();
```

Required fields:

| Field | Rule |
|---|---|
| `id` | Unique across all banks. |
| `domain` | One of `reading`, `literature`, `language`, `writing`, `oral`, `ela-foundation` for ELA; `number`, `algebra`, `geometry`, `trigcalc`, `stats`, `foundation` for math; `pedagogy`. |
| `title` | Short label shown in lists. |
| `difficulty` | `easy`, `medium`, or `hard`. |
| `tags` | Free-form, but they decide the cluster kind (below). Passage questions must include `longform`. |
| `skillIds` | Keys of `window.SKILLS` in `js/data/skills.js`. The validator does not check these, so check them yourself. |
| `stem` | The question. |
| `options` | Exactly four for passage questions. Each has a stable `id`, `text`, its own `explanation`, and `isCorrect`. Exactly one is correct. |
| `explanation` | Item-level teaching note. Required. |
| `passageSet`, `passage` | For passage questions. Every question in a cluster shares one `passageSet` name and the identical `passage` string. |
| `choices`, `answer` | Derived from `options` by the `forEach` at the end of the file. Keep that block: older code reads these. |

Option IDs are `<problemId>-<slug>` (for example `LF268-all`). They are saved in users' attempt history, so never rename or reuse one after it ships. When a question changes so much that it is a different question, give it a new ID and retire the old one.

### Existing questions: legacy format (Forms A–C and most other banks)

```js
{ id: "LF001", domain: "reading", title: "...", difficulty: "hard",
  tags: ["informational", "longform"], skillIds: ["informational-texts"],
  passageSet: "heat", passage: P.heat,
  stem: "...",
  choices: ["...", "...", "...", "..."], answer: 0,
  explanation: "... {{opt:LF001-1}} overclaims ..." }
```

Legacy option IDs are generated as `<problemId>-<sourceIndex>`, so reordering `choices` changes which ID means what. Do not reorder choices in a shipped legacy question; edit the text in place.

Legacy questions have no per-option explanations. Keep editing them in their existing format; do not convert a file's format as a side effect of another change.

### Lesson quick checks

In `js/data/lessons-*.js`, as `check(prompt, [choices], answerIndex, explain)` inside a `section(...)`. Most lessons have three sections, and every section has two checks.

### Rules the validator enforces

`npm run validate` fails a question when:

- it does not have exactly one correct option, or has fewer than two options;
- an option ID or option text is duplicated, or an option text is empty;
- the explanation is missing;
- an explanation names an option by letter or position ("B is a comma splice", "the last choice");
- an `{{opt:<id>}}` token does not match one of the question's own options;
- two different passages share one `passageSet` name;
- an exam's `problemIds` names a question that does not exist.

It prints a warning, without failing, when the correct answer is the longest option in more than 45% of a bank of 20 or more questions.

### Referring to options in explanations

Options are shuffled per sitting, so an explanation must never use a letter or a position. Either describe the option's content, or write `{{opt:<optionId>}}`, which renders as the letter that option had on the learner's screen. When a passage has lettered sources, write "Source A" in full so it is not read as an option letter.

## Passage clusters and the cluster exam

Questions tagged `longform` that share a `passageSet` form a cluster. The cluster exam (`ela-clusters` in `js/data/exams.js`) builds each sitting from 12 clusters plus 8 short questions.

`classifyCluster` assigns a kind from the tags and domains, checked in this order:

1. `paired` tag → paired sources
2. `technical` tag → technical
3. 60% or more of the questions in the `literature` domain → literature
4. `oral`, `listening`, `discussion`, `media`, or `speech` → oral
5. `language`, `mechanics`, or `usage` → language
6. `writing`, `fallacies`, `analytical`, `revision`, or `modes` → writing
7. `informational` → informational
8. `persuasive` or `rhetoric` → persuasive

Each sitting takes 3 literature clusters, 2 oral, and 1 of each other kind. After adding a cluster, confirm it lands in the kind you intended.

`CLUSTER_FAMILIES` in `js/data/exams.js` groups passage sets that share a template (for example, the three sensor-data briefings). A sitting uses at most one set per family and avoids families from the last sitting. When a new passage reuses an existing structure with different numbers, add it to that family. Prefer writing a new structure.

## Quality rules for questions

These came from problems found in this repo. Treat them as requirements for any new or edited question.

### Answer-length tells

- Within a passage cluster, the correct answer may be the longest option in at most 30% of the questions, and the second-longest in at most 30%. Clusters with fewer than four questions get at most one question at each of those ranks. `tests/length-bias.test.js` enforces this for the six passage forms.
- Across a form, aim for the correct answer to sit at each length rank about a quarter of the time. The test fails above about a third.
- Fixing "longest" is not enough. An earlier pass stopped the correct answer being the longest and left it second-longest 48–68% of the time. Measure every rank.
- Make the gap real. A correct answer one character shorter than a wrong one passes the test and fixes nothing.
- Change lengths by tightening the correct answer or by giving a wrong answer the specifics a real misreading would cite. Do not pad.
- Leave alone questions whose options are quoted from the passage or fixed by the format (topic words against a theme sentence, rhyme-scheme letters). Balance the rest of the cluster around them.

### Anti-testwiseness rules

A passage question must not be answerable from the stem and options alone. The first version of Form F met every other rule in this file, and an independent reader who never saw the passages still predicted all 15 answers. These three rules come from that audit.

1. **No qualification asymmetry.** All four options of a question make the same kind of statement at the same level of certainty.
   - Do not put absolute or extreme words (always, never, nothing, must, every, proves, guarantees, impossible) in wrong answers. `tests/testwiseness.test.js` rejects them in Form F.
   - Do not give the correct answer the only hedge ("may," "could," "not necessarily," "does not by itself"), the only precise number, or the only two-part claim.
   - Do not attach a "because…" clause to some options and not others. A reason attached to a wrong answer is usually what gives it away.
   - Prefer options that differ in a checkable fact (which group, which number, which source, which heading) over options that differ in how reasonable they sound.
2. **No cross-item cueing.** No stem, option, or explanation shown before answering may reveal or narrow the answer to another question in the cluster.
   - Test a given idea once per cluster. The first Form F asked about correlation versus causation in three of five questions, so answering one answered all three.
   - Check distractors too: a fact offered as wrong in one question must not be the fact another question asks for.
3. **No background-knowledge leakage.** The answer must depend on something this passage says, not on what a well-informed person already knows or on how such documents usually work.
   - This applies to every kind of passage, not only rule documents. A fresh reader scored 8 of 10 on a typical poll and a typical observational study by choosing the most textbook option each time (question-order priming, "adjusted for prior scores and income," correlation reported as cause), and 1 of 5 on the label. Write passages whose facts depart from the textbook case, and offer the textbook answer as a wrong option: a poll the firm paid for with questions the campaign wrote, a randomized study whose headline errs about subjects instead of cause.
   - For rules, labels, policies, and procedures, make the passage's rule differ from the common default, and include the default as a wrong answer. The Form F label doses by age with a weight exception, waits 6 hours, and files asthma under "Do not use"; the usual conventions are all wrong there.
   - Use fictional products, places, and figures when real-world facts would otherwise settle the question.
   - A vocabulary-in-context question must turn on which sense the passage uses, with the other senses as real options. If the quoted phrase explains itself, write a different question.
   - Do not let the stem's wording match the correct option's wording ("is it allowed?" → "Do not use").

**The check.** Before opening a PR for new or rewritten passage questions, print the stems and options with no passages, keys, or explanations, and have a reader who has not seen the passages predict the answers with a confidence level for each. Chance is 25%. Treat any answer predicted with high confidence as a defect and fix the question, even if the prediction happens to be wrong. The author of the questions cannot run this check on their own work. Neither can a reader who has seen an earlier version of the same passages or the notes describing the revision: the second Form F audit was run by the reader who had audited the first, who then knew the passages' facts from the old options and scored 9 of 10 on the two unchanged passages against 2 of 5 on the new one. Use a fresh reader each time a passage is reused.

### Wrong answers

- Every wrong answer must be a mistake a real test-taker could make after reading the passage: a true detail that is not the main idea, the wrong speaker, a neighboring term, an overclaim, a causal reading of a correlation.
- No joke or off-topic options (a "warranty clause" offered as a literary device, an option about a different passage).
- No option that argues against itself ("Realism, without the determinism that defines it").
- Do not let "pick the cautious answer" work. Some questions should have a firm correct answer with an over-hedged option as the trap.
- Do not offer two answers that can both be defended. Overlapping periods are the usual cause: do not set the Harlem Renaissance against Modernism, or Romanticism against Transcendentalism, unless the stem separates them.

### Explanations

- In option-object files, every option has its own explanation saying why it is right or wrong. The review screen shows it to a learner who picked that option.
- When you change an option's text, reread its explanation and the item explanation. Update them in the same edit.
- Before rewriting a "revise this sentence" answer, check that your new wording is not already in the passage.

### Source texts

- Literature must be public domain and checked word for word against a public text. Project Gutenberg itself is blocked from this environment; clone the matching GITenberg repository instead and name the edition in the file header.
- Works published after about 1923 are not available that way. Write original questions about style and themes without quoting them.
- Original passages are fine. Mark anything that could be mistaken for a real document (a medicine label, a poll) as fictional.
- Do not add Pearson or NES test items.

### New passage structures

Before writing a cluster, check that its kind needs one and that its structure is new. Three kinds had only two templates each until Form F. A cluster that repeats a template with new numbers adds little.

## File-handling rules

- **Line endings.** Most files are CRLF. These are LF: `js/quiz-core.js`, `js/data/problems-ela-longform-e.js`, `js/data/problems-ela-longform-f.js`, and everything in `scripts/` and `tests/`. `js/data/problems-ela-longform.js` has mixed endings. Preserve whatever a file has. Edit by replacing exact strings, and never run a tool that rewrites a whole file's endings. Confirm with `git diff --stat` that only the lines you meant to change are listed.
- **Curly quotes.** Passage and option text uses `’ “ ”`. Match them when writing replacements.
- **Bulk edits.** For changes across many questions, write a spec and a script that replaces exact string literals inside each question's block and asserts each literal is found once. Assert that every correct answer keeps its position.
- **Saved progress.** `window.Progress` state is versioned in `js/storage.js`. Add new fields in both `defaultState()` and `migrateState()`.
- **Scope.** Do not change scoring thresholds, page layout, or the top navigation unless asked. The nav has no room for another link at desktop width.

## Commands

```bash
npm run validate                           # schema and letter-reference checks on every bank
npm test                                   # all unit tests; Chromium tests skip without Playwright
NODE_PATH=$(npm root -g) npm test          # the same, with the Chromium tests running
node --test tests/length-bias.test.js      # one suite
```

Playwright is installed globally in the cloud environment, not in `node_modules`. Without `NODE_PATH=$(npm root -g)`, the two browser tests are skipped and the run still reports success. Chromium is preinstalled; do not run `playwright install`.

Test suites:

| File | Covers |
|---|---|
| `tests/quiz-core.test.js` | Option IDs, shuffling, grading, saved attempts |
| `tests/validate-questions.test.js` | The validator's rules |
| `tests/length-bias.test.js` | Answer-length limits on the passage forms |
| `tests/testwiseness.test.js` | No absolute words in Form F options; parallel numeric options |
| `tests/clusters.test.js` | Template families in the cluster exam |
| `tests/flashcards.test.js` | No flashcard question with two correct answers |
| `tests/countdown.test.js` | Study-plan dates and weak-area ranking; includes a browser test |
| `tests/exam-review.e2e.test.js` | A full exam in Chromium, checking the review screen |

## Verifying a change

Run all of these before pushing a change to questions:

1. `npm run validate` reports "All questions valid" with no warnings.
2. `NODE_PATH=$(npm root -g) npm test` passes, with no skipped tests.
3. New clusters are classified as the intended kind.
4. For new or rewritten passage questions, the passage-blind check in "Anti-testwiseness rules" has been run by someone other than the author, or the PR says plainly that it has not.
5. A Chromium check of the changed questions on the real exam page. Load `exam.html`, push a temporary exam onto `EXAMS` whose `problemIds` are the changed questions, call `startExam`, answer each one wrong, submit, and read `#review-list .review-item`. Each row must show:
   - status "missed" and the letter that was picked;
   - that option's own explanation (or, for legacy questions, the option's text);
   - the correct answer's letter and text, and an explanation block;
   - no "Blank", no raw `{{opt:` token, and no "undefined".

   "Blank. A blank is wrong." may appear only for a question that was skipped. Repeat with each wrong option so every one is rendered. The page must raise no errors.

For page or layout changes, also take screenshots at 1200px and 390px wide and confirm there is no horizontal scroll.

## Git and pull requests

- Work on the branch the session assigns. After its PR merges, restart that branch from `origin/main` for the next change; do not stack new commits on merged history.
- One PR per piece of work, opened as a draft. Do not merge without the owner's go-ahead.
- The repository has no CI. The checks above are the only verification, so state in the PR which ones were run and what they showed.
- PR descriptions should give: why the change was made, what changed (with before and after numbers for quality work), and how it was verified. Say plainly when a rule was interpreted or an item was left alone, and why.
- Commit messages explain what changed and why. Do not name an AI model in commits, PR text, or code comments.
- After a merge, the owner runs `git pull` on `main` to get the change locally.

## Known gaps

- Forms A–C have no per-option explanations.
- The validator does not check `skillIds`, `domain`, or `difficulty` values.
- Progress lives in one browser's `localStorage`; there are no accounts or sync.
- Before selling: review the stored Pearson study-guide items and keys in `js/data/study-guides.js`, the use of the NES and Pearson names, and any pass-rate claims.
