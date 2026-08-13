/* Timed practice exams — weighted toward real NES Mathematics domain mix */
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
    minutes: 40,
    description: "30 focused questions covering every ELA Foundation Bootcamp skill. Strong results can place you past known prerequisites; misses route to exact lessons.",
    problemIds: [
      "EF001","EF002","EF003","EF004","EF005","EF006","EF007","EF008","EF009",
      "EF010","EF011","EF012","EF013","EF014","EF015","EF016","EF017","EF018",
      "EF019","EF020","EF021","EF022","EF023","EF024","EF025","EF026","EF027",
      "EF028","EF029","EF030"
    ]
  },
  {
    id: "ela-diagnostic",
    title: "ELA Diagnostic (Mixed)",
    type: "english",
    minutes: 60,
    description: "40 mixed questions. Day-1 baseline across all five NES English Language Arts domains.",
    problemIds: [
      "RD001","RD002","RD008","RD012","RD018","RD024",
      "LT001","LT002","LT008","LT014","LT020","LT026","LT032",
      "LG001","LG002","LG008","LG014","LG020",
      "WR001","WR002","WR008","WR014","WR020",
      "OV001","OV002","OV006","OV010","OV014",
      "RD006","LT006","LG006","WR006","OV004",
      "RD015","LT018","LG016","WR016","OV012"
    ]
  },
  {
    id: "ela-full-1",
    title: "Half-Length ELA Mock A",
    type: "english",
    minutes: 90,
    description: "75 questions in 1.5 hours: half of the official 150-question, 3-hour format. Use before full-length simulations.",
    build: { count: 75, official: true, weighted: true, track: "english" }
  },
  {
    id: "ela-full-2",
    title: "Half-Length ELA Mock B",
    type: "english",
    minutes: 90,
    description: "Second 75-question, 1.5-hour form with a different item mix. Clear both before a full-length simulation.",
    build: { count: 75, official: true, weighted: true, track: "english" }
  },
  {
    id: "ela-official-1",
    title: "Official-Length ELA Simulation A",
    type: "english",
    minutes: 180,
    description: "150 questions in 3 hours, weighted to the five official NT301 domains. Use only after both half-length forms are stable.",
    build: { count: 150, official: true, weighted: true, track: "english" }
  },
  {
    id: "ela-official-2",
    title: "Official-Length ELA Simulation B",
    type: "english",
    minutes: 180,
    description: "A second shuffled 150-question, 3-hour simulation. Ace gate: score at least 85% on both official-length forms.",
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
    pool = pool.slice().sort(() => Math.random() - 0.5);
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
      return selected.slice(0, count).sort(() => Math.random() - 0.5);
    }
    return pool.slice(0, count);
  }
  return [];
};
