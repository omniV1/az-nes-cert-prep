/* Timed practice exams — weighted toward real NES Mathematics domain mix */
function elaMixExam(spec) {
  const mix = spec.mix;
  return {
    id: spec.id,
    title: spec.title,
    type: "english",
    group: spec.group || "ela-phase",
    minutes: spec.minutes,
    description: spec.description,
    build: {
      count: (mix.bankCount || 0) + (mix.cardCount || 0),
      mix
    }
  };
}

window.EXAMS = [
  {
    id: "math-placement-short",
    title: "Foundation Placement Check",
    type: "math",
    minutes: 40,
    description: "30 focused questions covering every Foundation Bootcamp skill. Strong results can place you past known prerequisites; misses route to exact lessons.",
    problemIds: [
      "F001","F002","F003","F004","F005","F006","F007","F008","F009",
      "F010","F011","F012","F013","F014","F015","F016","F017","F018",
      "F019","F020","F021","F022","F023","F024","F025","F026","F027",
      "F028","F029","F030"
    ]
  },
  {
    id: "math-diagnostic",
    title: "Math Diagnostic (Mixed)",
    type: "math",
    minutes: 60,
    description: "40 mixed questions. Day-1 baseline across all five NES Mathematics domains.",
    problemIds: [
      "N001","N002","N009","N011","N015","N019",
      "A001","A002","A013","A016","A018","A021","A029","A030",
      "G001","G002","G011","G015","G018","G023",
      "T001","T002","T005","T013","T017","T021","T024",
      "S001","S003","S004","S009","S017","S021","S025",
      "N007","A008","G008","T008","S010","A022"
    ]
  },
  {
    id: "math-full-1",
    title: "Half-Length Math Mock A",
    type: "math",
    minutes: 150,
    description: "75 questions in 2.5 hours: half of the official 150-question, 5-hour format. Use before full-length simulations.",
    build: { count: 75, official: true, weighted: true }
  },
  {
    id: "math-full-2",
    title: "Half-Length Math Mock B",
    type: "math",
    minutes: 150,
    description: "Second 75-question, 2.5-hour form with a different item mix. Clear both before a full-length simulation.",
    build: { count: 75, official: true, weighted: true }
  },
  {
    id: "math-official-1",
    title: "Official-Length Math Simulation A",
    type: "math",
    minutes: 300,
    description: "150 questions in 5 hours, weighted to the five official NT304 domains. Use only after both half-length forms are stable.",
    build: { count: 150, official: true, weighted: true }
  },
  {
    id: "math-official-2",
    title: "Official-Length Math Simulation B",
    type: "math",
    minutes: 300,
    description: "A second shuffled 150-question, 5-hour simulation. Ace gate: score at least 85% on both official-length forms.",
    build: { count: 150, official: true, weighted: true }
  },
  {
    id: "math-algebra-block",
    title: "Domain Drill: Algebra (24%)",
    type: "math",
    minutes: 50,
    description: "Heaviest domain — must be near-automatic.",
    problemIds: [
      "A001","A002","A003","A004","A005","A006","A007","A008","A009","A010","A011","A012",
      "A013","A014","A015","A016","A017","A018","A019","A020","A021","A022","A023","A025","A028","A029","A030","A032"
    ]
  },
  {
    id: "math-trigcalc-block",
    title: "Domain Drill: Trig & Calculus",
    type: "math",
    minutes: 50,
    description: "Make-or-break high-school domain for many candidates.",
    problemIds: [
      "T001","T002","T003","T004","T005","T006","T007","T008","T009","T010","T011",
      "T012","T013","T014","T015","T016","T017","T018","T019","T020","T021","T022","T024","T026","T027"
    ]
  },
  {
    id: "math-geometry-block",
    title: "Domain Drill: Geometry & Measurement",
    type: "math",
    minutes: 45,
    description: "Euclidean, coordinate, conics, 3D.",
    problemIds: [
      "G001","G002","G003","G004","G005","G006","G007","G008","G009","G010",
      "G011","G012","G013","G014","G015","G016","G018","G019","G021","G022","G023","G024"
    ]
  },
  {
    id: "math-stats-block",
    title: "Domain Drill: Stats / Prob / Discrete",
    type: "math",
    minutes: 45,
    description: "Counting, distributions, sequences, matrices.",
    problemIds: [
      "S001","S002","S003","S004","S005","S006","S007","S008","S009","S010","S011",
      "S012","S013","S014","S015","S016","S017","S018","S020","S021","S022","S024","S025"
    ]
  },
  {
    id: "math-number-block",
    title: "Domain Drill: Number & Processes",
    type: "math",
    minutes: 40,
    description: "Foundations that still appear at secondary level.",
    problemIds: [
      "N001","N002","N003","N004","N005","N006","N007","N008",
      "N009","N010","N011","N012","N013","N015","N017","N018","N019","N020"
    ]
  },
  {
    id: "math-hard-gauntlet",
    title: "Hard Gauntlet (Ace Sharpener)",
    type: "math",
    minutes: 75,
    description: "Hard items only. If you can clear ≥75% here, you're dangerous in a good way.",
    build: { difficulties: ["hard"], count: 35 }
  },
  {
    id: "apk-diagnostic",
    title: "APK Secondary Diagnostic",
    type: "pedagogy",
    minutes: 40,
    description: "Pedagogy baseline.",
    problemIds: ["P001","P002","P003","P004","P005","P006","P007","P008","P009","P010"]
  },
  {
    id: "apk-full-1",
    title: "APK Secondary Mock (MCQ)",
    type: "pedagogy",
    minutes: 90,
    description: "Expanded pedagogy set. Pair with CR prompts.",
    problemIds: [
      "P001","P002","P003","P004","P005","P006","P007","P008","P009","P010",
      "P011","P012","P013","P014","P015","P016","P017","P018"
    ]
  },
  {
    id: "ela-placement-short",
    title: "ELA Foundation Placement Check",
    type: "english",
    minutes: 50,
    description: "50-item baseline: grammar/reading application plus term questions. Each sitting draws a new subset, mixes prompt types (term ↔ definition ↔ usage sentence), and reshuffles choices so the form itself cannot be memorized. Strong skill scores can place you past known prerequisites.",
    build: {
      count: 50,
      mix: {
        domains: ["ela-foundation", "language", "reading"],
        decks: ["grammar-usage", "reading-process"],
        bankCount: 32,
        cardCount: 18,
        excludeLongform: true
      }
    }
  },
  {
    id: "ela-diagnostic",
    title: "ELA Diagnostic (Mixed)",
    type: "english",
    minutes: 60,
    description: "Day-1 baseline across all five NES 301 domains plus mixed term questions. Item selection, prompt type, and choice order change every sitting.",
    build: {
      count: 48,
      mix: {
        domains: ["reading", "literature", "language", "writing", "oral", "ela-foundation"],
        decks: ["grammar-usage", "reading-process", "literature-terms", "rhetoric-composition"],
        bankCount: 32,
        cardCount: 16,
        excludeLongform: true
      }
    }
  },
  {
    id: "ela-full-1",
    title: "Half-Length ELA Mock A",
    type: "english",
    minutes: 90,
    description: "75 questions in 1.5 hours: half of the official 150-question, 3-hour format. Built from long-passage and hard items first so the score is closer to Field 02 / NES 301 than the old short-stem bank.",
    build: { count: 75, official: true, weighted: true, track: "english" }
  },
  {
    id: "ela-full-2",
    title: "Half-Length ELA Mock B",
    type: "english",
    minutes: 90,
    description: "Second 75-question, 1.5-hour form. Same rigor mix as Mock A, different shuffle. Clear both before a full-length simulation.",
    build: { count: 75, official: true, weighted: true, track: "english" }
  },
  {
    id: "ela-official-1",
    title: "Official-Length ELA Simulation A",
    type: "english",
    minutes: 180,
    description: "150 questions in 3 hours, weighted to the five official NT301 domains. Long-passage and hard items fill first. Treat this score—not a short-stem 90%—as your unofficial NES 301 signal.",
    build: { count: 150, official: true, weighted: true, track: "english" }
  },
  {
    id: "ela-official-2",
    title: "Official-Length ELA Simulation B",
    type: "english",
    minutes: 180,
    description: "A second shuffled 150-question, 3-hour simulation with the same hard-first mix. Ace gate: ≥85% here is only booking-relevant if Field 02 or passage-set Form B is also in the mid-70s+.",
    build: { count: 150, official: true, weighted: true, track: "english" }
  },
  {
    id: "ela-reading-block",
    title: "Domain Drill: Reading & Text Forms (23%)",
    type: "english",
    minutes: 45,
    description: "Vocabulary, informational, persuasive, and technical reading — a 23% domain.",
    build: { domain: "reading", count: 30 }
  },
  {
    id: "ela-literature-block",
    title: "Domain Drill: Literature (23%)",
    type: "english",
    minutes: 45,
    description: "Prose, poetry, world literature, periods, and social context.",
    build: { domain: "literature", count: 30 }
  },
  {
    id: "ela-language-block",
    title: "Domain Drill: Conventions & Research (19%)",
    type: "english",
    minutes: 40,
    description: "Grammar, mechanics, process, and research ethics.",
    build: { domain: "language", count: 28 }
  },
  {
    id: "ela-writing-block",
    title: "Domain Drill: Modes of Writing (23%)",
    type: "english",
    minutes: 45,
    description: "Narrative, expository, persuasive, and analytical writing.",
    build: { domain: "writing", count: 30 }
  },
  {
    id: "ela-oral-block",
    title: "Domain Drill: Oral & Visual (12%)",
    type: "english",
    minutes: 30,
    description: "Smaller domain — still easy points if you know media bias and discussion norms.",
    build: { domain: "oral", count: 20 }
  },
  {
    id: "ela-hard-gauntlet",
    title: "ELA Hard Gauntlet (Ace Sharpener)",
    type: "english",
    minutes: 60,
    description: "Hard ELA items only. If you can clear ≥75% here, you're dangerous in a good way.",
    build: { difficulties: ["hard"], count: 30, track: "english" }
  },
  {
    id: "math-terms-traps",
    title: "Math terms, history, and traps",
    type: "math",
    minutes: 40,
    description: "Exam-style items for cheap-point killers: logic, history of math, formula application, and classic distractors. Use this instead of flashcards.",
    problemIds: [
      "N021","N022","N023","N024","N025","N026","N027","N028",
      "A033","A034","A035","A036",
      "G025","G026","G027","G028",
      "T028","T029","T030","T031","T032",
      "S026","S027","S028","S029"
    ]
  },
  {
    id: "ela-terms-traps",
    title: "ELA terms, periods, and traps",
    type: "english",
    minutes: 45,
    description: "Exam-style items for devices, periods, grammar, rhetoric, and media — the Quizlet-style content as NES multiple choice.",
    problemIds: [
      "LT051","LT052","LT053","LT054","LT055","LT056","LT057","LT058","LT059","LT060",
      "LT061","LT062","LT063","LT064","LT065",
      "LG041","LG042","LG043","LG044","LG045","LG046","LG047","LG048",
      "RD046","RD047","RD048",
      "WR041","WR042","WR043","WR044",
      "OV026","OV027","OV028"
    ]
  },
  {
    id: "ela-field-rigor",
    title: "ELA passage sets (Field 02 rigor)",
    type: "english",
    minutes: 80,
    description: "Original long-passage clusters written to match retired Field 02 selected-response difficulty: dense distractors, multi-question sets, public-domain literature. Not Pearson’s items. Use this score—not a Field 02 retake—as your honest NES 301 signal once the official PDF is burned.",
    problemIds: [
      "LF001","LF002","LF003","LF004","LF005",
      "LF006","LF007","LF008","LF009",
      "LF010","LF011","LF012","LF013",
      "LF014","LF015","LF016","LF017","LF018",
      "LF019","LF020","LF021","LF022",
      "LF023","LF024","LF025","LF026",
      "LF027","LF028","LF029","LF030",
      "LF031","LF032","LF033","LF034",
      "LF035","LF036","LF037","LF038","LF039",
      "LF040","LF041","LF042","LF043",
      "LF044","LF045",
      "LF046","LF047","LF048",
      "LF049","LF050","LF051","LF052","LF053",
      "LF054","LF055","LF056"
    ]
  },
  {
    id: "ela-field-rigor-b",
    title: "ELA passage sets Form B (Field 02 rigor)",
    type: "english",
    minutes: 90,
    description: "Second original long-passage form: paired texts, a drama scene, graphics in a briefing, listening/seminar transcripts, revision drafts, and public-domain literature not used on Form A. Distractors are written close together (overclaim, wrong speaker, adjacent literary term) so the key should not be obvious without the passage.",
    problemIds: [
      "LF057","LF058","LF059","LF060","LF061",
      "LF062","LF063","LF064","LF065",
      "LF066","LF067","LF068","LF069",
      "LF070","LF071","LF072","LF073",
      "LF074","LF075","LF076","LF077",
      "LF078","LF079","LF080","LF081","LF082",
      "LF083","LF084","LF085","LF086",
      "LF087","LF088","LF089","LF090",
      "LF091","LF092","LF093",
      "LF094","LF095","LF096","LF097","LF098",
      "LF099","LF100","LF101","LF102",
      "LF103","LF104","LF105",
      "LF106","LF107","LF108","LF109",
      "LF110","LF111","LF112","LF113",
      "LF114","LF115","LF116","LF117",
      "LF118","LF119","LF120","LF121",
      "LF122","LF123","LF124"
    ]
  },
  {
    id: "ela-field-rigor-c",
    title: "ELA passage sets Form C (Field 02 rigor)",
    type: "english",
    minutes: 80,
    description: "Third original long-passage form: dust-event briefing with a table, Sunday hours editorial, pool rules, Blake/Keats/Chopin/Dunbar/Emerson/Frankenstein, a revision draft, paired water-rate sources, a board transcript, a misleading poster, and an analytical paragraph. Same tight-distractor style as A/B. After two sittings, switch to the randomized cluster exam — do not grind these letters.",
    problemIds: [
      "LF125","LF126","LF127","LF128","LF129",
      "LF130","LF131","LF132","LF133",
      "LF134","LF135","LF136","LF137",
      "LF138","LF139","LF140","LF141",
      "LF142","LF143","LF144","LF145",
      "LF146","LF147","LF148","LF149",
      "LF150","LF151","LF152","LF153",
      "LF154","LF155","LF156","LF157",
      "LF158","LF159","LF160","LF161",
      "LF162","LF163","LF164","LF165","LF166",
      "LF167","LF168","LF169","LF170",
      "LF171","LF172","LF173","LF174",
      "LF175","LF176","LF177","LF178",
      "LF179","LF180","LF181","LF182"
    ]
  },
  {
    id: "ela-clusters",
    title: "ELA Pearson-style cluster exam (new mix each sitting)",
    type: "english",
    minutes: 80,
    description: "The weekly Field 02 analog that does not burn a letter key: 12 original passage clusters drawn from Forms A/B/C (informational, editorial, technical, literature, revision, paired sources, oral/visual) plus a short cheap-point block. Cluster choice prefers passages you did not just sit. Item order stays grouped by passage; choices reshuffle. Target ≥80% on a sitting whose clusters are still mostly new.",
    build: {
      count: 56,
      clusters: true,
      clusterCount: 12,
      cheapCount: 8
    }
  },
  {
    id: "ela-periods-drill",
    title: "ELA periods, language change, and fallacies",
    type: "english",
    minutes: 40,
    description: "Timed cheap-point drill: movement habits, semantic change, dialect/register, workplace texts, and named fallacies. Use with the ELA reference sheet.",
    problemIds: [
      "EG001","EG002","EG003","EG004","EG005","EG006","EG007","EG008","EG009","EG010",
      "EG011","EG012","EG013","EG014","EG015","EG016","EG017","EG018",
      "EG019","EG020","EG021","EG022","EG023","EG024","EG025","EG026","EG027","EG028","EG029","EG030",
      "EG031","EG032","EG033","EG034","EG035","EG036","EG037","EG038","EG039","EG040"
    ]
  },
  {
    id: "ela-cards-reading-process",
    title: "Quiz: reading process terms",
    type: "english",
    minutes: 15,
    group: "flashcards",
    description: "Pass/fail on each term. Misses recycle until you hit 100%. Opens the Quizlet-style card quiz.",
    build: { flashcardDecks: ["reading-process"], count: 20 }
  },
  {
    id: "ela-cards-informational",
    title: "Quiz: informational / literacy terms",
    type: "english",
    minutes: 15,
    group: "flashcards",
    description: "Word ↔ definition on structure, graphics, credibility, fact vs opinion, workplace texts.",
    build: { flashcardDecks: ["informational"], count: 20 }
  },
  {
    id: "ela-cards-rhetoric",
    title: "Quiz: rhetoric and composition terms",
    type: "english",
    minutes: 18,
    group: "flashcards",
    description: "Word ↔ definition on appeals, fallacies, modes, process, and research ethics.",
    build: { flashcardDecks: ["rhetoric-composition"], count: 24 }
  },
  {
    id: "ela-cards-oral",
    title: "Quiz: oral and visual terms",
    type: "english",
    minutes: 15,
    group: "flashcards",
    description: "Word ↔ definition on listening, discussion, delivery, media, copyright.",
    build: { flashcardDecks: ["oral-visual"], count: 20 }
  },
  {
    id: "ela-cards-literature",
    title: "Quiz: literature terms",
    type: "english",
    minutes: 15,
    group: "flashcards",
    description: "Word ↔ definition on devices, forms, POV, and period habits.",
    build: { flashcardDecks: ["literature-terms"], count: 20 }
  },
  {
    id: "ela-cards-grammar",
    title: "Quiz: grammar and usage terms",
    type: "english",
    minutes: 15,
    group: "flashcards",
    description: "Word ↔ definition on named errors and the fix (splice, agreement, who/whom).",
    build: { flashcardDecks: ["grammar-usage"], count: 20 }
  },
  {
    id: "ela-cards-mixed",
    title: "Quiz: mixed ELA terms",
    type: "english",
    minutes: 20,
    group: "flashcards",
    description: "Random term → definition and definition → term across reading, rhetoric, oral/visual, literature, and grammar.",
    build: { flashcardDecks: ["reading-process", "informational", "rhetoric-composition", "oral-visual", "literature-terms", "grammar-usage"], count: 30 }
  },
  elaMixExam({
    id: "ela-phase-02",
    title: "Phase 2 test: sentence anatomy",
    minutes: 30,
    description: "Parts of speech, phrases, clauses, and sentence types — application items mixed with grammar terms. New subset and prompt types each sitting.",
    mix: {
      domains: ["ela-foundation", "language"],
      skills: ["parts-of-speech", "sentence-anatomy", "phrases-clauses", "sentence-craft"],
      decks: ["grammar-usage"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-03",
    title: "Phase 3 test: mechanics and usage",
    minutes: 30,
    description: "Punctuation, agreement, pronouns, and modifiers plus named grammar errors. Form reshuffles every sitting.",
    mix: {
      domains: ["ela-foundation", "language"],
      skills: ["punctuation-basics", "agreement-usage", "grammar-usage", "mechanics"],
      decks: ["grammar-usage"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-04",
    title: "Phase 4 test: reading and rhetoric bridge",
    minutes: 30,
    description: "Vocabulary in context, reading process, literary elements, and argument basics mixed with reading-process terms.",
    mix: {
      domains: ["ela-foundation", "reading"],
      skills: ["vocab-context", "reading-process", "literary-elements-intro", "rhetoric-intro", "vocab-strategies"],
      decks: ["reading-process", "grammar-usage"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-05",
    title: "Phase 5 test: vocabulary and informational reading",
    minutes: 32,
    description: "Word-meaning, informational structure, summary, and graphics mixed with reading-process and informational terms.",
    mix: {
      domains: ["reading", "ela-foundation"],
      skills: ["vocab-strategies", "word-origins", "informational-texts", "text-graphics", "vocab-context"],
      decks: ["reading-process", "informational"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-06",
    title: "Phase 6 test: persuasive and technical reading",
    minutes: 32,
    description: "Appeals, credibility, evidence, and functional texts mixed with rhetoric and informational terms.",
    mix: {
      domains: ["reading"],
      skills: ["persuasive-texts", "rhetorical-appeals", "technical-texts", "evidence-credibility"],
      decks: ["rhetoric-composition", "informational"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-check-06",
    title: "Checkpoint: phases 1–6",
    group: "ela-checkpoint",
    minutes: 55,
    description: "Summary of foundation, grammar, reading, and rhetoric covered so far — application plus term/usage questions. Larger pool; a new random form each sitting so you cannot memorize this test.",
    mix: {
      domains: ["ela-foundation", "reading", "language"],
      decks: ["grammar-usage", "reading-process", "informational", "rhetoric-composition"],
      bankCount: 28,
      cardCount: 24,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-07",
    title: "Phase 7 test: prose, drama, and narrative craft",
    minutes: 32,
    description: "Fiction, literary nonfiction, drama, plot, character, POV, and tone mixed with literature terms.",
    mix: {
      domains: ["literature", "ela-foundation"],
      skills: ["prose-drama-analysis", "narrative-elements", "literary-elements-intro"],
      decks: ["literature-terms"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-08",
    title: "Phase 8 test: poetry and figurative language",
    minutes: 32,
    description: "Forms, meter, sound devices, imagery, and figures of speech mixed with literature terms in shuffled prompt types.",
    mix: {
      domains: ["literature"],
      skills: ["poetry-forms", "sound-devices", "figurative-language"],
      decks: ["literature-terms"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-09",
    title: "Phase 9 test: world literature and context",
    minutes: 32,
    description: "Genres, oral tradition, periods, movements, and social argument mixed with literature terms.",
    mix: {
      domains: ["literature"],
      skills: ["world-literature", "literary-periods", "literature-context"],
      decks: ["literature-terms"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-10",
    title: "Phase 10 test: conventions and composition",
    minutes: 32,
    description: "Grammar under pressure, sentence craft, and essay architecture mixed with grammar-usage terms.",
    mix: {
      domains: ["language", "ela-foundation"],
      skills: ["grammar-usage", "mechanics", "sentence-craft", "essay-structure", "agreement-usage", "punctuation-basics"],
      decks: ["grammar-usage"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-11",
    title: "Phase 11 test: process and research",
    minutes: 32,
    description: "Generate–revise–edit–proofread, sources, paraphrase, and citation mixed with rhetoric/composition terms.",
    mix: {
      domains: ["language", "writing"],
      skills: ["writing-process", "research-citation", "essay-structure"],
      decks: ["rhetoric-composition", "grammar-usage"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-12",
    title: "Phase 12 test: narrative and expository modes",
    minutes: 32,
    description: "Scene and voice; thesis, explanation, and development mixed with rhetoric terms.",
    mix: {
      domains: ["writing", "language"],
      skills: ["narrative-writing", "expository-writing", "thesis-support", "style-audience"],
      decks: ["rhetoric-composition"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-check-12",
    title: "Checkpoint: phases 7–12",
    group: "ela-checkpoint",
    minutes: 55,
    description: "Summary of literature, conventions, process/research, and narrative/expository writing plus the term decks from those phases. New mix each sitting.",
    mix: {
      domains: ["literature", "language", "writing"],
      decks: ["literature-terms", "grammar-usage", "rhetoric-composition"],
      bankCount: 28,
      cardCount: 24,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-13",
    title: "Phase 13 test: persuasive and analytical modes",
    minutes: 32,
    description: "Counterargument, literary analysis, style, tone, and audience mixed with rhetoric terms and named fallacies.",
    mix: {
      domains: ["writing", "reading"],
      skills: ["persuasive-writing", "analytical-writing", "thesis-support", "style-audience", "persuasive-texts"],
      decks: ["rhetoric-composition"],
      bankCount: 16,
      cardCount: 16,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-14",
    title: "Phase 14 test: oral and visual communication",
    minutes: 28,
    description: "Discussion, speech craft, media bias, presentations, and ethics mixed with oral/visual terms.",
    mix: {
      domains: ["oral"],
      skills: ["listening-speaking", "group-discussion", "speech-craft", "media-analysis", "presentation-ethics"],
      decks: ["oral-visual"],
      bankCount: 14,
      cardCount: 14,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-15",
    title: "Phase 15 test: interleaved ELA",
    minutes: 40,
    description: "Spaced mix across all five official NES 301 domains plus a draw from every term deck. Use this before half-length mocks; the form is new each sitting.",
    mix: {
      domains: ["reading", "literature", "language", "writing", "oral"],
      decks: ["reading-process", "informational", "rhetoric-composition", "oral-visual", "literature-terms", "grammar-usage"],
      bankCount: 22,
      cardCount: 18,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-phase-16",
    title: "Phase 16 test: full-map mixed review",
    minutes: 40,
    description: "Holistic short form across every ELA domain and term deck before official-length simulations. Not a substitute for passage-set Forms A/B.",
    mix: {
      domains: ["reading", "literature", "language", "writing", "oral", "ela-foundation"],
      decks: ["reading-process", "informational", "rhetoric-composition", "oral-visual", "literature-terms", "grammar-usage"],
      bankCount: 22,
      cardCount: 18,
      excludeLongform: true
    }
  }),
  elaMixExam({
    id: "ela-check-16",
    title: "Checkpoint: phases 13–16",
    group: "ela-checkpoint",
    minutes: 55,
    description: "Summary of persuasive/analytical writing, oral/visual, and interleaved review — plus a recap sample from earlier decks. New mix each sitting. Still take passage sets A/B separately.",
    mix: {
      domains: ["writing", "oral", "reading", "literature", "language"],
      decks: ["rhetoric-composition", "oral-visual", "literature-terms", "grammar-usage", "informational"],
      bankCount: 28,
      cardCount: 24,
      excludeLongform: true
    }
  }),
  {
    id: "aepa-field02",
    title: "Official AEPA Field 02 English items",
    type: "english",
    minutes: 90,
    aepaGuide: "field02",
    description: "Pearson’s free Field 02 selected-response set, scored interactively. Numbers match the PDF (1–80). Questions 12 and 26 were removed by Pearson and are skipped, not renumbered. Skip the written assignment (81). After two sittings, stop retaking: those 78 letters will stick in memory and will not be on NES 301. Repair misses with the coach notes, then switch to Passage sets A/B."
  },
  {
    id: "aepa-field10",
    title: "Official AEPA Field 10 Mathematics items",
    type: "math",
    minutes: 120,
    aepaGuide: "field10",
    description: "Pearson’s free Field 10 selected-response set, scored interactively. Read each item in the official PDF; answer A–D here against the published key. Not the live NES 304 blueprint. Skip constructed-response tasks."
  }
];

window.CR_PROMPTS = [
  {
    id: "cr-case",
    title: "Case Study (Domain II style)",
    minutes: 30,
    prompt: `You teach Algebra I. Several students scored below proficient on a formative quiz about solving systems of equations. English learners in the class struggle with word problems. One student has an IEP with extended time and graphic organizers.

In a focused response (approx. 150–250 words):
1) Identify two likely learning barriers.
2) Describe one instructional adjustment and one assessment adjustment.
3) Explain how you will check whether the adjustments worked.`
  },
  {
    id: "cr-work",
    title: "Work Product (Domain III style)",
    minutes: 30,
    prompt: `Write a professional email (or outline one) to a parent/guardian after a student has missed three consecutive homework assignments and participated less in class discussions. Stay factual, collaborative, and confidential. Include an invitation to partner on next steps and offer two concrete supports you can provide at school.`
  },
  {
    id: "cr-case-2",
    title: "Case Study: Geometry Proof Block",
    minutes: 30,
    prompt: `In Geometry, students can compute with formulas but freeze on two-column proofs. A few dominate discussion; others copy silently. Your PLC wants more equitable discourse.

Write 150–250 words addressing: (1) one learning-theory explanation, (2) one instructional routine to build proof reasoning, (3) one formative check you will use within a week, (4) how you will support a student with an IEP accommodation for graphic organizers during proofs.`
  }
];

/** Resolve exam items (supports dynamic hard gauntlet builds) */
window.resolveExamItems = function resolveExamItems(exam) {
  if (exam.aepaGuide && window.STUDY_GUIDES) {
    return STUDY_GUIDES.itemsForGuide(exam.aepaGuide).map(item => STUDY_GUIDES.examItemFromOfficial(item));
  }
  if (exam.build && exam.build.mix) {
    return buildMixedSitting(exam);
  }
  if (exam.build && exam.build.clusters) {
    return buildClusterSitting(exam);
  }
  if (exam.build && exam.build.flashcardDecks && window.FLASHCARDS) {
    const seed = newSittingSeed(exam);
    return FLASHCARDS.examItems(exam.build.flashcardDecks, exam.build.count || 20, seed);
  }
  const bank = window.PROBLEMS || [];
  if (exam.problemIds) {
    return exam.problemIds.map(id => bank.find(p => p.id === id)).filter(Boolean);
  }
  if (exam.build) {
    const mathDomains = ["number", "algebra", "geometry", "trigcalc", "stats"];
    const englishDomains = ["reading", "literature", "language", "writing", "oral"];
    const track = exam.build.track || exam.type || "math";
    const officialDomains = track === "english" ? englishDomains : mathDomains;
    let pool;
    if (exam.build.official) {
      pool = bank.filter(p => officialDomains.includes(p.domain));
    } else if (track === "english") {
      pool = bank.filter(p => englishDomains.includes(p.domain) || p.domain === "ela-foundation");
    } else {
      pool = bank.filter(p => p.domain !== "pedagogy" && p.domain !== "foundation" && p.domain !== "ela-foundation" && !englishDomains.includes(p.domain));
    }
    if (exam.build.difficulties) pool = pool.filter(p => exam.build.difficulties.includes(p.difficulty));
    if (exam.build.domain) pool = pool.filter(p => p.domain === exam.build.domain);
    const preferRigor = !!(exam.build.official || exam.build.rigor || (exam.build.difficulties && exam.build.difficulties.includes("hard")));
    const seed = newSittingSeed(exam);
    pool = pool.slice().sort((a, b) => {
      if (preferRigor) {
        const d = examRigorScore(b) - examRigorScore(a);
        if (d) return d;
      }
      return examHash(seed + ":" + a.id) - examHash(seed + ":" + b.id);
    });
    const count = exam.build.count || 30;
    if (exam.build.weighted) {
      const weights = track === "english"
        ? { reading: 0.23, literature: 0.23, language: 0.19, writing: 0.23, oral: 0.12 }
        : { number: 0.19, algebra: 0.24, geometry: 0.19, trigcalc: 0.19, stats: 0.19 };
      const targets = Object.fromEntries(officialDomains.map(domain => [
        domain,
        Math.floor(count * weights[domain])
      ]));
      let remainder = count - Object.values(targets).reduce((sum, value) => sum + value, 0);
      const fractionalOrder = officialDomains.slice().sort((a, b) =>
        (count * weights[b] % 1) - (count * weights[a] % 1)
      );
      for (let i = 0; i < remainder; i++) targets[fractionalOrder[i % fractionalOrder.length]]++;
      const selected = [];
      const used = new Set();
      for (const domain of officialDomains) {
        const domainPool = pool.filter(p => p.domain === domain);
        for (const p of domainPool.slice(0, targets[domain])) {
          selected.push(p);
          used.add(p.id);
        }
      }
      for (const p of pool) {
        if (selected.length >= count) break;
        if (!used.has(p.id)) {
          selected.push(p);
          used.add(p.id);
        }
      }
      return orderByPassageSet(selected.slice(0, count));
    }
    return orderByPassageSet(pool.slice(0, count));
  }
  return [];
};

function examHash(value) {
  let h = 2166136261;
  for (const ch of String(value)) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function newSittingSeed(exam) {
  const seed = exam.id + ":" + Date.now() + ":" + Math.random().toString(36).slice(2, 10);
  exam._sittingSeed = seed;
  return seed;
}

function seededShuffle(list, seed) {
  return list.slice().sort((a, b) => {
    const ka = (a && a.id) || (a && a.term) || String(a);
    const kb = (b && b.id) || (b && b.term) || String(b);
    return examHash(seed + ":" + ka) - examHash(seed + ":" + kb);
  });
}

function isLongformItem(p) {
  return (p.tags || []).includes("longform");
}

function sampleBankForMix(mix, bank, seed) {
  let pool = bank.filter(p => (mix.domains || []).includes(p.domain));
  if (mix.excludeLongform !== false) pool = pool.filter(p => !isLongformItem(p));
  const n = mix.bankCount || 20;
  const preferred = (mix.skills && mix.skills.length)
    ? pool.filter(p => (p.skillIds || []).some(s => mix.skills.includes(s)))
    : pool;
  const take = [];
  const used = new Set();
  const pushFrom = (list, tag) => {
    for (const p of seededShuffle(list, seed + ":" + tag)) {
      if (used.has(p.id)) continue;
      used.add(p.id);
      take.push(p);
      if (take.length >= n) return;
    }
  };
  if (preferred.length) pushFrom(preferred, "pref");
  if (take.length < n) pushFrom(pool, "fill");
  return take;
}

function buildMixedSitting(exam) {
  const seed = newSittingSeed(exam);
  const mix = exam.build.mix;
  const bankItems = sampleBankForMix(mix, window.PROBLEMS || [], seed);
  const cardCount = mix.cardCount || 0;
  const cardItems = (cardCount && mix.decks && window.FLASHCARDS)
    ? FLASHCARDS.examItems(mix.decks, cardCount, seed + ":cards")
    : [];
  return orderByPassageSet(seededShuffle(bankItems.concat(cardItems), seed + ":all"));
}

function classifyCluster(cluster) {
  const kinds = new Set();
  cluster.items.forEach(p => {
    (p.tags || []).forEach(t => kinds.add(t));
    kinds.add(p.domain);
  });
  const literatureShare = cluster.items.filter(p => p.domain === "literature").length / cluster.items.length;
  if (kinds.has("paired")) return "paired";
  if (kinds.has("technical")) return "technical";
  if (literatureShare >= 0.6) return "literature";
  if (kinds.has("oral") || kinds.has("listening") || kinds.has("discussion") || kinds.has("media") || kinds.has("speech")) {
    return "oral";
  }
  if (kinds.has("language") || kinds.has("mechanics") || kinds.has("usage")) return "language";
  if (kinds.has("writing") || kinds.has("fallacies") || kinds.has("analytical") || kinds.has("revision") || kinds.has("modes")) {
    return "writing";
  }
  if (kinds.has("informational")) return "informational";
  if (kinds.has("persuasive") || kinds.has("rhetoric")) return "persuasive";
  return cluster.items[0].domain;
}

function longformClusters(bank) {
  const map = new Map();
  for (const p of bank) {
    if (!(p.tags || []).includes("longform") || !p.passageSet) continue;
    if (!map.has(p.passageSet)) map.set(p.passageSet, { id: p.passageSet, items: [] });
    map.get(p.passageSet).items.push(p);
  }
  return [...map.values()].map(c => ({ ...c, kind: classifyCluster(c) }));
}

function recentClusterIds() {
  try {
    const exams = (window.Progress && Progress.load && Progress.load().exams) || [];
    return new Set(
      exams
        .filter(e => e.id === "ela-clusters" && Array.isArray(e.clusterIds))
        .slice(0, 3)
        .flatMap(e => e.clusterIds)
    );
  } catch (err) {
    return new Set();
  }
}

function buildClusterSitting(exam) {
  const seed = newSittingSeed(exam);
  const spec = exam.build;
  const clusterCount = spec.clusterCount || 12;
  const cheapCount = spec.cheapCount || 8;
  const bank = window.PROBLEMS || [];
  const clusters = longformClusters(bank);
  const recent = recentClusterIds();
  const ranked = clusters.slice().sort((a, b) => {
    const ra = recent.has(a.id) ? 1 : 0;
    const rb = recent.has(b.id) ? 1 : 0;
    if (ra !== rb) return ra - rb;
    return examHash(seed + ":" + a.id) - examHash(seed + ":" + b.id);
  });
  const quotas = spec.quotas || {
    informational: 1,
    persuasive: 1,
    paired: 1,
    technical: 1,
    literature: 3,
    language: 1,
    writing: 1,
    oral: 2
  };
  const selected = [];
  const used = new Set();
  const takeKind = (kind, n) => {
    let got = 0;
    for (const c of ranked) {
      if (got >= n) break;
      if (used.has(c.id) || c.kind !== kind) continue;
      used.add(c.id);
      selected.push(c);
      got += 1;
    }
  };
  Object.entries(quotas).forEach(([kind, n]) => takeKind(kind, n));
  for (const c of ranked) {
    if (selected.length >= clusterCount) break;
    if (used.has(c.id)) continue;
    used.add(c.id);
    selected.push(c);
  }
  exam._clusterIds = selected.map(c => c.id);
  const passageItems = selected.flatMap(c => c.items);
  const usedIds = new Set(passageItems.map(p => p.id));
  const cheapPool = bank.filter(p =>
    ["reading", "literature", "language", "writing", "oral"].includes(p.domain) &&
    !(p.tags || []).includes("longform") &&
    !usedIds.has(p.id)
  );
  const hardCheap = seededShuffle(cheapPool.filter(p => p.difficulty === "hard"), seed + ":cheap-h");
  const restCheap = seededShuffle(cheapPool.filter(p => p.difficulty !== "hard"), seed + ":cheap-r");
  const cheapItems = hardCheap.concat(restCheap).slice(0, cheapCount);
  return orderByPassageSet(passageItems.concat(cheapItems));
}

function examRigorScore(p) {
  let s = 0;
  if ((p.tags || []).includes("longform")) s += 5;
  if (p.passage && String(p.passage).length > 500) s += 2;
  else if (p.passage) s += 1;
  if (p.difficulty === "hard") s += 2;
  if (p.difficulty === "medium") s += 1;
  return s;
}

function orderByPassageSet(items) {
  const groups = new Map();
  const order = [];
  for (const item of items) {
    const key = item.passageSet || item.id;
    if (!groups.has(key)) {
      groups.set(key, []);
      order.push(key);
    }
    groups.get(key).push(item);
  }
  return order.flatMap(key => groups.get(key));
}
