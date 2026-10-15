/* Retired AEPA Field 02 / Field 10 study guides, mapped onto current NES 301 / 304 lessons.
   Pearson still publishes these as useful extra practice. They are not the current exam blueprint. */
window.STUDY_GUIDES = (() => {
  const FIELD02_URL = "https://www.aepa.nesinc.com/Content/Docs/AZ_Field02_StudyGuide.pdf";
  const FIELD10_URL = "https://www.aepa.nesinc.com/Content/Docs/AZ_Field10_StudyGuide.pdf";
  const NES_PROFILE_301 = "https://www.aepa.nesinc.com/Content/Docs/NES_Profile_301.pdf";
  const NES_PROFILE_304 = "https://www.aepa.nesinc.com/Content/Docs/NES_Profile_304.pdf";
  const NES_FRAMEWORK_301 = "https://www.nestest.com/static/docs/NES_Framework_301.pdf";
  const NES_FRAMEWORK_304 = "https://www.nestest.com/static/docs/NES_Framework_304.pdf";

  const field02 = {
    id: "field02",
    field: "02",
    title: "AEPA Field 02 English",
    track: "english",
    url: FIELD02_URL,
    replacedBy: "NES English Language Arts (301)",
    formatNote: "Retired AEPA. Pearson still says it can help NES prep because the content overlaps. Field 02 included a written performance assignment; NES 301 is multiple-choice only. Use NES 301 weights, not these.",
    weights: [
      { subarea: "Reading", pct: "33%", objectives: ["0001", "0002", "0003", "0004", "0005", "0006"] },
      { subarea: "Writing", pct: "34%", objectives: ["0007", "0008", "0009", "0010", "0011", "0012"] },
      { subarea: "Listening and Speaking", pct: "22%", objectives: ["0013", "0014", "0015", "0016"] },
      { subarea: "Viewing and Presenting", pct: "11%", objectives: ["0017", "0018"] }
    ],
    objectives: [
      { id: "0001", title: "Reading strategies for information", summary: "General vs specific, summary, conclusions, implied information.", nesCompetencies: ["0001", "0002"], lessonIds: ["efdn-06", "rd-01", "rd-02"] },
      { id: "0002", title: "Reading for literary response", summary: "Author's purpose, figurative language, imagery, character, plot, mood, theme.", nesCompetencies: ["0005", "0006"], lessonIds: ["efdn-07", "lt-01", "lt-03", "lt-04"] },
      { id: "0003", title: "Critical analysis and evaluation", summary: "Persuasion, fact vs opinion, support, credibility, tone, workplace/consumer texts.", nesCompetencies: ["0002", "0003"], lessonIds: ["efdn-08", "rd-03", "rd-04", "rd-05"] },
      { id: "0004", title: "Metacognitive reading and word meaning", summary: "Skimming, rate, denotation/connotation, context clues, monitoring comprehension.", nesCompetencies: ["0001"], lessonIds: ["efdn-05", "efdn-06", "rd-01"] },
      { id: "0005", title: "Genre features", summary: "Fiction, drama, nonfiction types, poetry forms (sonnet, haiku, and related).", nesCompetencies: ["0005", "0006", "0007"], lessonIds: ["lt-01", "lt-02", "lt-05"] },
      { id: "0006", title: "Literature, culture, and history", summary: "Periods, movements, mythology, folk literature, social issues, dialects.", nesCompetencies: ["0007", "0008"], lessonIds: ["lt-05", "lt-06", "lt-07"] },
      { id: "0007", title: "Expository and informational writing", summary: "Thesis, organization, journalism, workplace formats, revision.", nesCompetencies: ["0013"], lessonIds: ["wr-02", "wr-05"] },
      { id: "0008", title: "Literary-response writing", summary: "Text evidence, literary-element analysis, supporting a thesis about a work.", nesCompetencies: ["0015"], lessonIds: ["wr-04"] },
      { id: "0009", title: "Personal and narrative writing", summary: "Connotation, leads/closings, narrative/descriptive revision, personal letters.", nesCompetencies: ["0012"], lessonIds: ["wr-01", "wr-06"] },
      { id: "0010", title: "Persuasive writing", summary: "Editorial structure, support, transitions, logical fallacies.", nesCompetencies: ["0014"], lessonIds: ["wr-03", "wr-05"] },
      { id: "0011", title: "Writing process and research", summary: "Generating ideas, audience, research, supporting vs distracting detail, organization.", nesCompetencies: ["0010", "0011"], lessonIds: ["lg-05", "lg-06"] },
      { id: "0012", title: "Revision and standard English conventions", summary: "Wordiness, parallelism, sentence variety, spelling, punctuation, grammar, usage.", nesCompetencies: ["0009"], lessonIds: ["efdn-02", "efdn-03", "efdn-04", "lg-01", "lg-02", "lg-03"] },
      { id: "0013", title: "Speaking and listening for information", summary: "Organizing presentations, listener comprehension, register for audience and purpose.", nesCompetencies: ["0016"], lessonIds: ["ov-01", "ov-02"] },
      { id: "0014", title: "Speaking and listening for appreciation", summary: "Details that hold an audience; voice and intonation in stories, poetry, and drama.", nesCompetencies: ["0016"], lessonIds: ["ov-01", "ov-02"] },
      { id: "0015", title: "Speaking and listening for analysis and persuasion", summary: "Delivery, fallacies, evaluating a speaker, body language and visual aids.", nesCompetencies: ["0016"], lessonIds: ["ov-02", "wr-03"] },
      { id: "0016", title: "Discussion, questioning, and group talk", summary: "Conversation cues, paraphrasing, nonverbal monitoring, parliamentary basics.", nesCompetencies: ["0016"], lessonIds: ["ov-01"] },
      { id: "0017", title: "Visual and electronic media for information", summary: "Film, TV, graphics, charts, tables, cartoons; choosing media for a presentation.", nesCompetencies: ["0017"], lessonIds: ["rd-06", "ov-03", "ov-04"] },
      { id: "0018", title: "Visual media that influence attitudes", summary: "Photographs, advertising, prior knowledge, how media shape social attitudes.", nesCompetencies: ["0017"], lessonIds: ["ov-03"] }
    ]
  };

  const field10 = {
    id: "field10",
    field: "10",
    title: "AEPA Field 10 Mathematics",
    track: "math",
    url: FIELD10_URL,
    replacedBy: "NES Mathematics (304)",
    formatNote: "Retired AEPA. Pearson still says it can help NES prep because the content overlaps. Field 10 included constructed-response tasks and a different domain mix; NES 304 is multiple-choice only. Use NES 304 weights, not these.",
    weights: [
      { subarea: "Number Sense", pct: "14%", objectives: ["0001", "0002", "0003", "0004"] },
      { subarea: "Data Analysis and Probability", pct: "14%", objectives: ["0005", "0006", "0007", "0008"] },
      { subarea: "Patterns, Algebra, and Functions", pct: "18%", objectives: ["0009", "0010", "0011", "0012", "0013"] },
      { subarea: "Geometry and Measurement", pct: "18%", objectives: ["0014", "0015", "0016", "0017", "0018"] },
      { subarea: "Trigonometry and Conceptual Calculus", pct: "18%", objectives: ["0019", "0020", "0021", "0022", "0023"] },
      { subarea: "Mathematical Structure and Logic", pct: "18%", objectives: ["0024", "0025", "0026", "0027", "0028"] }
    ],
    objectives: [
      { id: "0001", title: "Integers, fractions, decimals, percents, ratios", summary: "Models, estimation, and problem solving with rational numbers and proportions.", nesCompetencies: ["0001"], lessonIds: ["fdn-03", "fdn-04", "fdn-05", "fdn-06", "num-02", "num-03"] },
      { id: "0002", title: "Real and complex number systems", summary: "Properties, order of operations, powers/roots, complex numbers as vectors.", nesCompetencies: ["0003"], lessonIds: ["fdn-02", "fdn-09", "num-06"] },
      { id: "0003", title: "Number theory", summary: "Divisibility, primes, Euclidean algorithm, congruence and modular arithmetic.", nesCompetencies: ["0003"], lessonIds: ["num-05"] },
      { id: "0004", title: "Discrete mathematics", summary: "Sets, counting, algorithms, combinatorics, sequences/series, graph theory.", nesCompetencies: ["0016"], lessonIds: ["st-05", "st-06"] },
      { id: "0005", title: "Descriptive statistics", summary: "Tables, plots, center and spread, correlation, percentiles, data transformations.", nesCompetencies: ["0014"], lessonIds: ["st-01"] },
      { id: "0006", title: "Probability fundamentals", summary: "Axioms, theoretical probability, simulations, geometric probability.", nesCompetencies: ["0015"], lessonIds: ["st-03"] },
      { id: "0007", title: "Probability models and distributions", summary: "Independent/dependent events, conditionals, binomial, uniform, and normal.", nesCompetencies: ["0015"], lessonIds: ["st-03", "st-04"] },
      { id: "0008", title: "Collecting and analyzing data", summary: "Sampling, experiment design, inference, interpolation, linear regression.", nesCompetencies: ["0014"], lessonIds: ["st-02"] },
      { id: "0009", title: "Algebraic functions, relations, expressions", summary: "Domain/range, multiple representations, inverses, parameter changes, composition.", nesCompetencies: ["0004"], lessonIds: ["alg-01", "alg-02"] },
      { id: "0010", title: "Linear and matrix algebra", summary: "Matrices, determinants, systems, vectors, linear transformations.", nesCompetencies: ["0004", "0016"], lessonIds: ["alg-03", "st-06"] },
      { id: "0011", title: "Linear and quadratic equations and functions", summary: "Modeling, systems, and judging whether a linear/quadratic model fits.", nesCompetencies: ["0005"], lessonIds: ["fdn-08", "alg-03", "alg-04"] },
      { id: "0012", title: "Radical, exponential, and logarithmic functions", summary: "Models, numerical solutions, and graphic/algebraic representations.", nesCompetencies: ["0007"], lessonIds: ["alg-06", "alg-07"] },
      { id: "0013", title: "Polynomial, rational, and absolute-value functions", summary: "Graphs, models, and calculator-assisted solutions.", nesCompetencies: ["0006"], lessonIds: ["alg-05", "alg-07"] },
      { id: "0014", title: "Measurement", summary: "Attributes, units, conversions, and dimensional analysis.", nesCompetencies: ["0008"], lessonIds: ["geo-01", "geo-02"] },
      { id: "0015", title: "Properties of geometric figures", summary: "Similarity, congruence, polygons, circles, constructions.", nesCompetencies: ["0009"], lessonIds: ["geo-03", "geo-04"] },
      { id: "0016", title: "Three-dimensional figures", summary: "Nets, cross sections, conics as slices, 3D coordinates, perspective.", nesCompetencies: ["0008", "0009"], lessonIds: ["geo-05", "geo-07"] },
      { id: "0017", title: "Coordinate geometry", summary: "Distance, midpoint, slope, polar vs rectangular, conics, algebra–geometry links.", nesCompetencies: ["0010"], lessonIds: ["geo-06", "geo-07"] },
      { id: "0018", title: "Vectors and transformations", summary: "Translations, rotations, reflections, dilations, tessellations, composition.", nesCompetencies: ["0010"], lessonIds: ["geo-06"] },
      { id: "0019", title: "Triangle trigonometry", summary: "Trig ratios, law of sines/cosines, polygon and circle applications.", nesCompetencies: ["0011"], lessonIds: ["tc-01"] },
      { id: "0020", title: "Trigonometric functions and identities", summary: "Radians, equations, unit circle, amplitude/period/phase, identities.", nesCompetencies: ["0011"], lessonIds: ["tc-02", "tc-03"] },
      { id: "0021", title: "Limits, continuity, and rate of change", summary: "Limits, sequences/series, continuity, secant lines, average rate of change.", nesCompetencies: ["0012"], lessonIds: ["tc-04"] },
      { id: "0022", title: "Derivatives and applications", summary: "Tangent as limit, max/min, inflection, concavity, related-rate style models.", nesCompetencies: ["0012"], lessonIds: ["tc-05"] },
      { id: "0023", title: "Integrals and area", summary: "Area under a curve, definite integral, FTC relationship, applications.", nesCompetencies: ["0013"], lessonIds: ["tc-06"] },
      { id: "0024", title: "Problem-solving strategies", summary: "Multiple strategies, modeling, and technology for nonroutine problems.", nesCompetencies: ["0001"], lessonIds: ["num-01"] },
      { id: "0025", title: "Mathematical communication", summary: "Symbols, graphic/numeric/symbolic/verbal representations and connections.", nesCompetencies: ["0002"], lessonIds: ["num-04"] },
      { id: "0026", title: "Mathematical reasoning", summary: "Induction/deduction, converse/inverse/contrapositive, proofs, counterexamples.", nesCompetencies: ["0002"], lessonIds: ["num-04", "geo-04"] },
      { id: "0027", title: "Connections across domains", summary: "Using one domain to solve another; math in other disciplines and real contexts.", nesCompetencies: ["0001", "0002"], lessonIds: ["num-01", "num-04"] },
      { id: "0028", title: "Axiomatic systems", summary: "Undefined terms, axioms, theorems; Euclidean vs non-Euclidean structure.", nesCompetencies: ["0002", "0009"], lessonIds: ["num-04", "geo-04"] }
    ]
  };

  const guides = { field02, field10 };

  /* Official answer-key letters and objective IDs only — not Pearson stems or choices.
     X / null = Pearson removed the item. Work the questions in the official PDF. */
  const itemBanks = {
    field02: {
      answers: "CDBCCADBBBDXCAABCDBDDADBBXDDBCAACCABDCADCBDCDBCADC BACDAADBBCBACDDBBACBACBCAAACBD".replace(/\s/g, ""),
      objectives: [
        "0001","0001","0001","0001","0002","0001","0002","0002","0003","0002",
        "0002",null,"0003","0003","0004","0004","0004","0004","0005","0005",
        "0005","0005","0006","0006","0006",null,"0007","0008","0007","0007",
        "0012","0008","0008","0008","0008","0009","0009","0009","0007","0010",
        "0011","0010","0010","0010","0010","0011","0011","0012","0011","0012",
        "0011","0012","0012","0013","0013","0013","0013","0013","0014","0014",
        "0014","0014","0015","0015","0015","0015","0016","0016","0016","0016",
        "0016","0017","0017","0017","0017","0018","0018","0018","0018","0018"
      ],
      pages: [
        11,12,12,12,15,16,16,17,17,19,
        19,20,21,21,22,22,22,23,23,24,
        24,25,25,26,26,27,28,28,29,30,
        30,31,31,32,32,33,34,34,34,35,
        35,36,36,37,37,38,38,38,39,39,
        40,40,40,41,41,41,42,42,42,42,
        43,43,43,43,44,44,44,44,45,45,
        45,46,46,47,48,48,49,49,50,51
      ]
    },
    field10: {
      answers: "BABDBDCDABBDBCADCBABADABDACBDCAACBCAAACBCABBDCCABADBCDBDBCCBDABCADDDDCBDBCDBDBDA",
      objectives: [
        "0001","0001","0001","0002","0002","0002","0003","0003","0004","0004",
        "0004","0005","0005","0005","0005","0006","0006","0007","0007","0007",
        "0008","0008","0009","0009","0009","0010","0010","0010","0011","0011",
        "0011","0012","0012","0012","0013","0013","0013","0014","0014","0014",
        "0015","0015","0015","0016","0016","0016","0016","0017","0017","0018",
        "0018","0018","0019","0019","0019","0020","0020","0020","0021","0021",
        "0022","0022","0022","0023","0023","0023","0024","0024","0024","0025",
        "0025","0025","0026","0026","0026","0027","0027","0027","0028","0028"
      ],
      pages: [
        13,14,14,15,15,15,16,17,17,18,
        18,19,19,20,20,21,21,22,22,23,
        23,24,24,25,25,26,27,27,28,28,
        29,30,31,32,33,34,34,35,35,36,
        36,37,38,39,40,41,42,43,44,45,
        46,47,47,48,48,49,49,50,51,51,
        52,52,53,53,54,55,55,56,56,57,
        58,58,59,59,60,60,61,61,62,62
      ]
    }
  };

  const current = {
    english: {
      code: "NES English Language Arts (301)",
      framework: NES_FRAMEWORK_301,
      profile: NES_PROFILE_301
    },
    math: {
      code: "NES Mathematics (304)",
      framework: NES_FRAMEWORK_304,
      profile: NES_PROFILE_304
    }
  };

  function lessonTitle(lessonId) {
    const lesson = (window.CURRICULUM?.domains || []).flatMap(d => d.lessons).find(L => L.id === lessonId);
    return lesson ? lesson.title : lessonId;
  }

  function forLesson(lessonId) {
    return Object.values(guides).flatMap(guide =>
      guide.objectives
        .filter(obj => obj.lessonIds.includes(lessonId))
        .map(obj => ({ ...obj, guideId: guide.id, guideTitle: guide.title, url: guide.url, track: guide.track }))
    );
  }

  function forTrack(track) {
    return Object.values(guides).find(guide => guide.track === track) || null;
  }

  function resourceKey(guideId, objectiveId) {
    return `aepa:${guideId}:${objectiveId}`;
  }

  function itemKey(guideId, n) {
    return `aepaItem:${guideId}:${n}`;
  }

  function itemsForGuide(guideId) {
    const bank = itemBanks[guideId];
    if (!bank) return [];
    return bank.objectives.map((objectiveId, i) => {
      const letter = bank.answers[i];
      const removed = !objectiveId || letter === "X";
      return {
        n: i + 1,
        guideId,
        answer: removed ? null : letter,
        objectiveId: objectiveId || null,
        pdfPage: bank.pages?.[i] || null,
        removed
      };
    });
  }

  function activeItems(guideId) {
    return itemsForGuide(guideId).filter(item => !item.removed);
  }

  function itemsForObjective(guideId, objectiveId) {
    return activeItems(guideId).filter(item => item.objectiveId === objectiveId);
  }

  function itemsForLesson(lessonId, guideId) {
    const matches = forLesson(lessonId).filter(obj => !guideId || obj.guideId === guideId);
    const seen = new Set();
    const out = [];
    matches.forEach(obj => {
      itemsForObjective(obj.guideId, obj.id).forEach(item => {
        const key = item.guideId + ":" + item.n;
        if (!seen.has(key)) {
          seen.add(key);
          out.push(item);
        }
      });
    });
    return out.sort((a, b) => a.n - b.n || a.guideId.localeCompare(b.guideId));
  }

  function formatItemList(items) {
    if (!items.length) return "";
    return items.map(item => item.n).join(", ");
  }

  function examItemFromOfficial(item) {
    const guide = guides[item.guideId];
    if (item.removed) {
      return {
        id: `AEPA-${guide.field}-${String(item.n).padStart(3, "0")}`,
        source: "aepa",
        removed: true,
        guideId: item.guideId,
        officialN: item.n,
        pdfPage: item.pdfPage,
        stem: `Pearson removed Field ${guide.field} question ${item.n} from this study guide. Skip it. The next item is still numbered ${item.n + 1} in the PDF.`,
        choices: [],
        answer: null,
        domain: guide.track === "english" ? "reading" : "number",
        skillIds: [],
        lessonIds: [],
        aepaObjective: null,
        explanation: "Not scored. Pearson left the original question number in the PDF as a placeholder."
      };
    }
    const obj = guide.objectives.find(o => o.id === item.objectiveId);
    const lessonIds = obj?.lessonIds || [];
    const domain = (window.CURRICULUM?.domains || []).find(d =>
      d.lessons.some(lesson => lessonIds.includes(lesson.id))
    );
    const lesson = domain?.lessons.find(L => lessonIds.includes(L.id));
    return {
      id: `AEPA-${guide.field}-${String(item.n).padStart(3, "0")}`,
      source: "aepa",
      guideId: item.guideId,
      officialN: item.n,
      pdfPage: item.pdfPage,
      stem: `Official Field ${guide.field} question ${item.n} is on the PDF page to the left. Choose A–D using the same letters as the PDF.`,
      choices: ["", "", "", ""],
      answer: "ABCD".indexOf(item.answer),
      domain: domain?.id || (guide.track === "english" ? "reading" : "number"),
      skillIds: lesson?.skills || [],
      lessonIds,
      aepaObjective: item.objectiveId,
      coach: (window.FIELD02_COACH && item.guideId === "field02") ? window.FIELD02_COACH[item.n] : null,
      explanation: `Pearson answer key: ${item.answer}. Field ${guide.field} objective ${item.objectiveId} (${obj?.title || ""}). On ${guide.replacedBy}, study: ${lessonIds.map(lessonTitle).join("; ") || "the mapped NES lessons"}.`
    };
  }

  function embedDetailsHtml(guide, extraNote) {
    return `
      <details class="card official-calibration" style="margin-top:1.25rem">
        <summary><strong>${guide.title}</strong> — retired AEPA, extra Pearson practice</summary>
        <p>${guide.formatNote}</p>
        ${extraNote ? `<p>${extraNote}</p>` : ""}
        <iframe class="official-embed" src="${guide.url}" title="${guide.title}" loading="lazy"></iframe>
        <p class="muted">If the PDF does not render, <a href="${guide.url}" target="_blank" rel="noopener">open the official archive guide</a>.</p>
      </details>`;
  }

  function examLobbyHtml() {
    return `
      <section class="card" style="margin-top:1.25rem">
        <h2>Official Pearson PDFs — how to use them to pass</h2>
        <ol>
          <li><strong>Current exam:</strong> NES frameworks and profiles (301 / 304) set the live competencies, weights, and sample-item style.</li>
          <li><strong>Lesson first:</strong> finish the mapped lesson in Learn, then work that competency's NES profile sample.</li>
          <li><strong>Extra official practice:</strong> Field 02 (English) and Field 10 (Math) are retired AEPA guides Pearson still recommends. Read each item in the official PDF, then score it here. Stems stay in Pearson’s document.</li>
          <li><strong>Ignore retired format:</strong> constructed-response / written tasks in Field 02 and Field 10 are not on NES 301 or 304 (those are multiple-choice). APK 052 is the exam with written tasks.</li>
        </ol>
        <div class="cta-row">
          <a class="btn btn-accent" href="exam.html?exam=aepa-field02">Interactive Field 02 exam</a>
          <a class="btn btn-accent" href="exam.html?exam=aepa-field10">Interactive Field 10 exam</a>
        </div>
        <p class="muted" style="margin-bottom:0"><a href="study-guides.html">Open the full Field 02 / Field 10 crosswalk</a> — every retired objective is mapped to a current lesson.</p>
      </section>
      ${embedDetailsHtml(field02, "Use after the matching NES 301 lesson. Current ELA weights: reading 23%, literature 23%, language 19%, writing modes 23%, oral/visual 12%.")}
      ${embedDetailsHtml(field10, "Use after the matching NES 304 lesson. Current math weights: number 19%, algebra 24%, geometry 19%, trig/calc 19%, stats/discrete 19%.")}
      <details class="card official-calibration" style="margin-top:1.25rem">
        <summary><strong>Embedded official NES English Language Arts 301 profile</strong></summary>
        <p>Current 301 sample items. Pair with required calibration inside each official ELA lesson.</p>
        <iframe class="official-embed" src="${NES_PROFILE_301}" title="Official NES English Language Arts 301 profile" loading="lazy"></iframe>
        <p class="muted">If the PDF does not render, <a href="${NES_PROFILE_301}" target="_blank" rel="noopener">open the official 301 profile</a>.</p>
      </details>
      <details class="card official-calibration" style="margin-top:1.25rem">
        <summary><strong>Embedded official NES Mathematics 304 profile</strong></summary>
        <p>Current 304 sample items. Pair with required calibration inside each official math lesson.</p>
        <iframe class="official-embed" src="${NES_PROFILE_304}" title="Official NES Mathematics 304 profile" loading="lazy"></iframe>
        <p class="muted">If the PDF does not render, <a href="${NES_PROFILE_304}" target="_blank" rel="noopener">open the official 304 profile</a>.</p>
      </details>`;
  }

  function lessonPracticeHtml(lessonId, state) {
    const matches = forLesson(lessonId);
    if (!matches.length) return "";
    const resources = state?.officialResources || {};
    const groups = {};
    matches.forEach(obj => {
      if (!groups[obj.guideId]) groups[obj.guideId] = { guide: guides[obj.guideId], items: [] };
      groups[obj.guideId].items.push(obj);
    });
    return Object.values(groups).map(({ guide, items }) => {
      const objText = items.map(o => `<strong>${o.id}</strong> ${o.title}`).join("; ");
      const qItems = itemsForLesson(lessonId, guide.id);
      const qText = formatItemList(qItems);
      const allDone = items.every(o => resources[resourceKey(guide.id, o.id)]);
      const checkId = `aepa-lesson-${guide.id}`;
      return `
        <section class="official-calibration" id="aepa-${guide.id}">
          <div class="eyebrow">Supplemental AEPA practice (not the live blueprint)</div>
          <h3>${guide.title}</h3>
          <p>After the NES sample above, read Field ${guide.field} items <strong>${qText || objText}</strong> in the official PDF (objectives ${objText}). Cover the answer key at the back. Score them on the Guides page — we use Pearson’s key, not a copy of the questions.</p>
          <p class="cta-row"><a class="btn btn-secondary" href="exam.html?exam=aepa-${guide.id}&amp;lesson=${lessonId}">Score these Field ${guide.field} items</a></p>
          <iframe class="official-embed" src="${guide.url}" title="${guide.title}" loading="lazy"></iframe>
          <p class="muted">If the PDF does not render, <a href="${guide.url}" target="_blank" rel="noopener">open Field ${guide.field}</a>. Full map: <a href="study-guides.html#${guide.id}">study-guides.html</a>.</p>
          <label class="official-confirm">
            <input type="checkbox" id="${checkId}" data-guide="${guide.id}" ${allDone ? "checked" : ""} />
            <span>I worked the mapped Field ${guide.field} practice items for this lesson before reading the answer key.</span>
          </label>
        </section>`;
    }).join("");
  }

  return {
    field02,
    field10,
    guides,
    current,
    urls: { FIELD02_URL, FIELD10_URL, NES_PROFILE_301, NES_PROFILE_304, NES_FRAMEWORK_301, NES_FRAMEWORK_304 },
    forLesson,
    forTrack,
    lessonTitle,
    resourceKey,
    itemKey,
    itemsForGuide,
    activeItems,
    itemsForObjective,
    itemsForLesson,
    formatItemList,
    examItemFromOfficial,
    embedDetailsHtml,
    examLobbyHtml,
    lessonPracticeHtml
  };
})();
