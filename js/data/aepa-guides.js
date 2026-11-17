/* The retired AEPA Field 02 and Field 10 study guides as Pearson organized them: objective
   numbers, titles, and subarea weights, mapped onto this app’s lessons. Personal edition only;
   scripts/build-release.js leaves this file out of the sale build. */
window.AEPA_GUIDES = (() => {
  const FIELD02_URL = "https://www.aepa.nesinc.com/Content/Docs/AZ_Field02_StudyGuide.pdf";
  const FIELD10_URL = "https://www.aepa.nesinc.com/Content/Docs/AZ_Field10_StudyGuide.pdf";

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

  return { field02, field10 };
})();
