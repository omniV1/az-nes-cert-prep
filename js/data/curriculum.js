/* NES Mathematics (304) + English Language Arts (301) + Professional Knowledge Secondary curriculum */
window.CURRICULUM = {
  exams: {
    math: {
      code: "NES Mathematics (304)",
      aka: "Arizona Secondary Mathematics Subject Knowledge",
      questions: 150,
      timeMinutes: 300,
      passing: 220,
      note: "Official format: approximately 150 multiple-choice questions in 5 hours, with an on-screen scientific calculator and formula page."
    },
    english: {
      code: "NES English Language Arts (301)",
      aka: "Arizona Secondary English Language Arts Subject Knowledge",
      questions: 150,
      timeMinutes: 180,
      passing: 220,
      note: "Official format: approximately 150 multiple-choice questions in 3 hours. No reference sheet is provided — literary terms, grammar, and rhetoric must be automatic."
    },
    pedagogy: {
      code: "NES APK Secondary (052)",
      questions: 100,
      constructedResponses: 2,
      timeMinutes: 180,
      passing: 220
    }
  },
  domains: [
    {
      id: "foundation",
      num: "F",
      title: "Foundation Bootcamp",
      track: "math",
      weight: "Prerequisite",
      competencies: "Supports 0001–0016",
      officialExamDomain: false,
      blurb: "Start here if arithmetic, fractions, equations, or notation do not yet feel automatic. Mastery matters more than speed.",
      color: "#475569",
      lessons: [
        { id: "fdn-01", title: "Whole numbers, place value, and the four operations", minutes: 55, level: "foundation", prerequisites: [], skills: ["whole-operations"], competencyIds: [] },
        { id: "fdn-02", title: "Signed numbers and order of operations", minutes: 55, level: "foundation", prerequisites: ["fdn-01"], skills: ["signed-arithmetic", "order-operations"], competencyIds: [] },
        { id: "fdn-03", title: "Fraction meaning and equivalent fractions", minutes: 60, level: "foundation", prerequisites: ["fdn-01"], skills: ["fraction-meaning", "fraction-equivalence"], competencyIds: ["0001"] },
        { id: "fdn-04", title: "Adding and subtracting fractions", minutes: 60, level: "foundation", prerequisites: ["fdn-03"], skills: ["fraction-add-subtract"], competencyIds: ["0001"] },
        { id: "fdn-05", title: "Multiplying and dividing fractions", minutes: 60, level: "foundation", prerequisites: ["fdn-03"], skills: ["fraction-multiply-divide"], competencyIds: ["0001"] },
        { id: "fdn-06", title: "Decimals, percents, and conversions", minutes: 65, level: "foundation", prerequisites: ["fdn-03"], skills: ["decimal-percent-convert", "percent-of"], competencyIds: ["0001"] },
        { id: "fdn-07", title: "Evaluating expressions and substitution", minutes: 55, level: "foundation", prerequisites: ["fdn-02"], skills: ["expression-evaluation"], competencyIds: ["0004"] },
        { id: "fdn-08", title: "One-step and two-step equations", minutes: 65, level: "foundation", prerequisites: ["fdn-02", "fdn-07"], skills: ["linear-equation-basics"], competencyIds: ["0004"] },
        { id: "fdn-09", title: "Exponents, roots, and coordinate-plane basics", minutes: 70, level: "foundation", prerequisites: ["fdn-02", "fdn-07"], skills: ["exponent-root-basics", "coordinate-basics"], competencyIds: ["0003", "0004", "0009"] }
      ]
    },
    {
      id: "number",
      num: "I",
      title: "Number Sense & Mathematical Processes",
      track: "math",
      weight: "19%",
      competencies: "0001–0003",
      blurb: "Problem solving, reasoning, number theory, reals/complexes, ratios, proportions.",
      color: "#0f766e",
      officialExamDomain: true,
      lessons: [
        { id: "num-02", title: "Integers, fractions, decimals, percents", minutes: 70, level: "foundation", prerequisites: ["fdn-02", "fdn-04", "fdn-05", "fdn-06"], skills: ["number-fluency", "percent-change"], competencyIds: ["0001"] },
        { id: "num-01", title: "Problem-solving strategies & estimation", minutes: 70, level: "foundation", prerequisites: ["num-02", "fdn-08"], skills: ["problem-solving", "estimation", "work-rates", "average-speed"], competencyIds: ["0001"] },
        { id: "num-05", title: "Number theory: primes, GCF, LCM", minutes: 60, level: "core", prerequisites: ["fdn-01", "fdn-09"], skills: ["prime-factorization", "gcf-lcm"], competencyIds: ["0003"] },
        { id: "num-03", title: "Ratios, proportions & rates of change", minutes: 70, level: "foundation", prerequisites: ["num-02", "fdn-08", "alg-03"], skills: ["ratios-proportions", "unit-rates", "average-rate-change"], competencyIds: ["0001"] },
        { id: "num-04", title: "Mathematical communication & logic", minutes: 60, level: "core", prerequisites: ["fdn-07"], skills: ["math-reasoning", "logic"], competencyIds: ["0002"] },
        { id: "num-06", title: "Real number structure & complex numbers", minutes: 75, level: "exam", prerequisites: ["num-05", "alg-04"], skills: ["real-number-system", "complex-numbers"], competencyIds: ["0003"] }
      ]
    },
    {
      id: "algebra",
      num: "II",
      title: "Patterns, Algebra & Functions",
      track: "math",
      weight: "24%",
      competencies: "0004–0007",
      blurb: "Largest domain. Relations, polynomials, exponential/log, rational/radical/absolute/piecewise.",
      color: "#c2410c",
      officialExamDomain: true,
      lessons: [
        { id: "alg-03", title: "Linear functions, systems & inequalities", minutes: 80, level: "foundation", prerequisites: ["fdn-08", "fdn-09"], skills: ["linear-equations", "slope", "systems", "inequalities"], competencyIds: ["0004", "0005"] },
        { id: "alg-01", title: "Relations vs functions; domain & range", minutes: 70, level: "foundation", prerequisites: ["alg-03"], skills: ["functions", "domain-range"], competencyIds: ["0004"] },
        { id: "alg-04", title: "Quadratic functions & equations", minutes: 85, level: "core", prerequisites: ["alg-03", "alg-01"], skills: ["quadratics", "completing-square", "discriminant"], competencyIds: ["0005", "0006"] },
        { id: "alg-02", title: "Function operations, composition, inverses", minutes: 75, level: "core", prerequisites: ["alg-01", "alg-03"], skills: ["function-operations", "composition", "inverse-functions"], competencyIds: ["0004"] },
        { id: "alg-05", title: "Higher-order polynomials", minutes: 75, level: "core", prerequisites: ["alg-04"], skills: ["polynomials", "factor-theorem", "multiplicity"], competencyIds: ["0005", "0006"] },
        { id: "alg-07", title: "Rational, radical, absolute & piecewise", minutes: 85, level: "exam", prerequisites: ["alg-04", "alg-05"], skills: ["rational-functions", "radical-equations", "piecewise-functions"], competencyIds: ["0006", "0007"] },
        { id: "alg-06", title: "Exponential & logarithmic functions", minutes: 85, level: "exam", prerequisites: ["alg-01", "fdn-09"], skills: ["exponential-functions", "logarithms"], competencyIds: ["0007"] }
      ]
    },
    {
      id: "geometry",
      num: "III",
      title: "Measurement & Geometry",
      track: "math",
      weight: "19%",
      competencies: "0008–0010",
      blurb: "Units, area/volume, Euclidean proofs, coordinate geometry, transformations, conics.",
      color: "#1d4ed8",
      officialExamDomain: true,
      lessons: [
        { id: "geo-01", title: "Units, precision, similarity & scale", minutes: 65, level: "foundation", prerequisites: ["fdn-05", "fdn-06"], skills: ["measurement-units", "scale"], competencyIds: ["0008"] },
        { id: "geo-02", title: "Perimeter, area, surface area & volume", minutes: 75, level: "foundation", prerequisites: ["geo-01", "fdn-09"], skills: ["perimeter-area", "surface-volume"], competencyIds: ["0008"] },
        { id: "geo-03", title: "Polygons, circles & Pythagorean theorem", minutes: 75, level: "core", prerequisites: ["geo-02", "fdn-08"], skills: ["polygon-circle", "pythagorean"], competencyIds: ["0009"] },
        { id: "geo-04", title: "Congruence, similarity & formal proof", minutes: 80, level: "core", prerequisites: ["geo-03", "num-04"], skills: ["congruence-similarity", "geometry-proof"], competencyIds: ["0009"] },
        { id: "geo-05", title: "3D figures, nets & cross sections", minutes: 65, level: "core", prerequisites: ["geo-02"], skills: ["solid-geometry", "nets-cross-sections"], competencyIds: ["0008", "0009"] },
        { id: "geo-06", title: "Coordinate geometry & transformations", minutes: 80, level: "exam", prerequisites: ["alg-03", "geo-03"], skills: ["coordinate-geometry", "transformations"], competencyIds: ["0010"] },
        { id: "geo-07", title: "Conic sections", minutes: 80, level: "exam", prerequisites: ["alg-04", "geo-06"], skills: ["conic-sections"], competencyIds: ["0010"] }
      ]
    },
    {
      id: "trigcalc",
      num: "IV",
      title: "Trigonometry & Calculus",
      track: "math",
      weight: "19%",
      competencies: "0011–0013",
      blurb: "High-school stretch domain: unit circle, identities, limits, derivatives, integrals.",
      color: "#7c3aed",
      officialExamDomain: true,
      lessons: [
        { id: "tc-01", title: "Right-triangle trig & applications", minutes: 75, level: "foundation", prerequisites: ["geo-03"], skills: ["right-triangle-trig"], competencyIds: ["0011"] },
        { id: "tc-02", title: "Unit circle & trig graphs", minutes: 85, level: "core", prerequisites: ["tc-01", "fdn-09"], skills: ["unit-circle", "trig-graphs"], competencyIds: ["0011"] },
        { id: "tc-03", title: "Identities & trig equations", minutes: 85, level: "exam", prerequisites: ["tc-02", "alg-04"], skills: ["trig-identities", "trig-equations"], competencyIds: ["0011"] },
        { id: "tc-04", title: "Limits & continuity", minutes: 80, level: "core", prerequisites: ["alg-05", "alg-07"], skills: ["limits", "continuity"], competencyIds: ["0012"] },
        { id: "tc-05", title: "Derivatives & applications", minutes: 90, level: "exam", prerequisites: ["tc-04", "alg-04"], skills: ["derivatives", "derivative-applications"], competencyIds: ["0012"] },
        { id: "tc-06", title: "Integrals & area under curves", minutes: 90, level: "exam", prerequisites: ["tc-05"], skills: ["integrals", "fundamental-theorem"], competencyIds: ["0013"] }
      ]
    },
    {
      id: "stats",
      num: "V",
      title: "Statistics, Probability & Discrete Math",
      track: "math",
      weight: "19%",
      competencies: "0014–0016",
      blurb: "Data displays, sampling bias, probability, counting, sequences, matrices, sets.",
      color: "#be123c",
      officialExamDomain: true,
      lessons: [
        { id: "st-01", title: "Data displays & descriptive statistics", minutes: 70, level: "foundation", prerequisites: ["fdn-06"], skills: ["descriptive-statistics", "data-displays"], competencyIds: ["0014"] },
        { id: "st-02", title: "Sampling, bias & study design", minutes: 60, level: "core", prerequisites: ["st-01"], skills: ["sampling-study-design"], competencyIds: ["0014"] },
        { id: "st-05", title: "Counting: permutations & combinations", minutes: 70, level: "core", prerequisites: ["fdn-01"], skills: ["counting", "permutations-combinations"], competencyIds: ["0016"] },
        { id: "st-03", title: "Probability rules & conditionals", minutes: 75, level: "core", prerequisites: ["fdn-04", "st-05"], skills: ["probability", "conditional-probability"], competencyIds: ["0015"] },
        { id: "st-04", title: "Distributions: uniform, binomial, normal", minutes: 80, level: "exam", prerequisites: ["st-01", "st-03", "st-05"], skills: ["distributions", "binomial-normal"], competencyIds: ["0015"] },
        { id: "st-06", title: "Sequences, series, matrices & sets", minutes: 85, level: "exam", prerequisites: ["alg-03", "alg-06", "st-05"], skills: ["sequences-series", "matrices-sets"], competencyIds: ["0016"] }
      ]
    },
    {
      id: "ela-foundation",
      num: "EF",
      title: "ELA Foundation Bootcamp",
      track: "english",
      weight: "Prerequisite",
      competencies: "Supports 0001–0017",
      officialExamDomain: false,
      blurb: "Rebuild grammar, vocabulary, reading process, literary elements, and rhetoric from scratch before exam-depth analysis.",
      color: "#44403c",
      lessons: [
        { id: "efdn-01", title: "Parts of speech and sentence anatomy", minutes: 55, level: "foundation", prerequisites: [], skills: ["parts-of-speech", "sentence-anatomy"], competencyIds: [] },
        { id: "efdn-02", title: "Phrases, clauses, and sentence types", minutes: 60, level: "foundation", prerequisites: ["efdn-01"], skills: ["phrases-clauses"], competencyIds: ["0009"] },
        { id: "efdn-03", title: "Punctuation and mechanics", minutes: 55, level: "foundation", prerequisites: ["efdn-01"], skills: ["punctuation-basics"], competencyIds: ["0009"] },
        { id: "efdn-04", title: "Usage: agreement, pronouns, and modifiers", minutes: 60, level: "foundation", prerequisites: ["efdn-02"], skills: ["agreement-usage"], competencyIds: ["0009"] },
        { id: "efdn-05", title: "Vocabulary: roots, context, and connotation", minutes: 55, level: "foundation", prerequisites: ["efdn-01"], skills: ["vocab-context"], competencyIds: ["0001"] },
        { id: "efdn-06", title: "The reading process: before, during, after", minutes: 50, level: "foundation", prerequisites: ["efdn-05"], skills: ["reading-process"], competencyIds: ["0001"] },
        { id: "efdn-07", title: "Literary elements: plot, character, setting, theme", minutes: 55, level: "foundation", prerequisites: ["efdn-06"], skills: ["literary-elements-intro"], competencyIds: ["0005"] },
        { id: "efdn-08", title: "Rhetoric and argument: claims, evidence, appeals", minutes: 55, level: "foundation", prerequisites: ["efdn-06"], skills: ["rhetoric-intro"], competencyIds: ["0003"] }
      ]
    },
    {
      id: "reading",
      num: "E-I",
      title: "Vocabulary, Reading Comprehension & Text Forms",
      track: "english",
      weight: "23%",
      competencies: "0001–0004",
      officialExamDomain: true,
      blurb: "Word meaning, informational/persuasive/technical texts, evidence, credibility, and graphics.",
      color: "#0e7490",
      lessons: [
        { id: "rd-01", title: "Vocabulary strategies and comprehension", minutes: 70, level: "foundation", prerequisites: ["efdn-05", "efdn-06"], skills: ["vocab-strategies", "word-origins"], competencyIds: ["0001"] },
        { id: "rd-02", title: "Informational texts: structure, purpose, summary", minutes: 75, level: "core", prerequisites: ["rd-01"], skills: ["informational-texts"], competencyIds: ["0002"] },
        { id: "rd-03", title: "Persuasive texts and rhetorical appeals", minutes: 75, level: "core", prerequisites: ["rd-01", "efdn-08"], skills: ["persuasive-texts", "rhetorical-appeals"], competencyIds: ["0003"] },
        { id: "rd-04", title: "Technical and functional texts", minutes: 65, level: "core", prerequisites: ["rd-02"], skills: ["technical-texts"], competencyIds: ["0004"] },
        { id: "rd-05", title: "Evidence, credibility, and accurate summary", minutes: 70, level: "exam", prerequisites: ["rd-02", "rd-03"], skills: ["evidence-credibility"], competencyIds: ["0002", "0003"] },
        { id: "rd-06", title: "Graphics, features, and multimodal texts", minutes: 65, level: "exam", prerequisites: ["rd-02", "rd-04"], skills: ["text-graphics"], competencyIds: ["0002", "0004"] }
      ]
    },
    {
      id: "literature",
      num: "E-II",
      title: "Analyzing and Interpreting Literature",
      track: "english",
      weight: "23%",
      competencies: "0005–0008",
      officialExamDomain: true,
      blurb: "Prose, drama, poetry, world literature, literary periods, and social/historical context.",
      color: "#9f1239",
      lessons: [
        { id: "lt-01", title: "Fiction, literary nonfiction, and drama", minutes: 80, level: "foundation", prerequisites: ["efdn-07"], skills: ["prose-drama-analysis"], competencyIds: ["0005"] },
        { id: "lt-02", title: "Poetry forms, meter, and sound", minutes: 80, level: "core", prerequisites: ["efdn-07"], skills: ["poetry-forms", "sound-devices"], competencyIds: ["0006"] },
        { id: "lt-03", title: "Figurative language and imagery", minutes: 75, level: "core", prerequisites: ["lt-02"], skills: ["figurative-language"], competencyIds: ["0006"] },
        { id: "lt-04", title: "Plot, character, point of view, tone, and theme", minutes: 80, level: "core", prerequisites: ["lt-01"], skills: ["narrative-elements"], competencyIds: ["0005"] },
        { id: "lt-05", title: "World literature, genres, and oral tradition", minutes: 75, level: "exam", prerequisites: ["lt-01", "lt-02"], skills: ["world-literature"], competencyIds: ["0007"] },
        { id: "lt-06", title: "Literary periods, movements, and major writers", minutes: 80, level: "exam", prerequisites: ["lt-05"], skills: ["literary-periods"], competencyIds: ["0007"] },
        { id: "lt-07", title: "Literature as social and historical argument", minutes: 75, level: "exam", prerequisites: ["lt-06"], skills: ["literature-context"], competencyIds: ["0008"] }
      ]
    },
    {
      id: "language",
      num: "E-III",
      title: "Conventions, Composition, Process & Research",
      track: "english",
      weight: "19%",
      competencies: "0009–0011",
      officialExamDomain: true,
      blurb: "Standard American English, sentence craft, essay architecture, writing process, and research ethics.",
      color: "#a16207",
      lessons: [
        { id: "lg-01", title: "Grammar and usage under pressure", minutes: 75, level: "foundation", prerequisites: ["efdn-04"], skills: ["grammar-usage"], competencyIds: ["0009"] },
        { id: "lg-02", title: "Mechanics: punctuation, spelling, capitalization", minutes: 65, level: "foundation", prerequisites: ["efdn-03"], skills: ["mechanics"], competencyIds: ["0009"] },
        { id: "lg-03", title: "Sentence combining, parallelism, and coherence", minutes: 70, level: "core", prerequisites: ["lg-01"], skills: ["sentence-craft"], competencyIds: ["0009", "0010"] },
        { id: "lg-04", title: "Introductions, body development, and conclusions", minutes: 70, level: "core", prerequisites: ["lg-03"], skills: ["essay-structure"], competencyIds: ["0009"] },
        { id: "lg-05", title: "The writing process: generate through proofread", minutes: 70, level: "core", prerequisites: ["lg-04"], skills: ["writing-process"], competencyIds: ["0010"] },
        { id: "lg-06", title: "Research: questions, sources, paraphrase, citation", minutes: 80, level: "exam", prerequisites: ["rd-05", "lg-05"], skills: ["research-citation"], competencyIds: ["0011"] }
      ]
    },
    {
      id: "writing",
      num: "E-IV",
      title: "Modes of Writing",
      track: "english",
      weight: "23%",
      competencies: "0012–0015",
      officialExamDomain: true,
      blurb: "Narrative, expository, persuasive, and critical/analytical writing — purpose, organization, and style.",
      color: "#6d28d9",
      lessons: [
        { id: "wr-01", title: "Narrative writing: scene, sequence, and voice", minutes: 75, level: "foundation", prerequisites: ["lg-05", "efdn-07"], skills: ["narrative-writing"], competencyIds: ["0012"] },
        { id: "wr-02", title: "Expository writing: thesis, explanation, and clarity", minutes: 75, level: "core", prerequisites: ["lg-05", "rd-02"], skills: ["expository-writing"], competencyIds: ["0013"] },
        { id: "wr-03", title: "Persuasive writing: position, support, and counterargument", minutes: 80, level: "core", prerequisites: ["lg-05", "rd-03"], skills: ["persuasive-writing"], competencyIds: ["0014"] },
        { id: "wr-04", title: "Critical and analytical writing about literature", minutes: 80, level: "exam", prerequisites: ["wr-02", "lt-04"], skills: ["analytical-writing"], competencyIds: ["0015"] },
        { id: "wr-05", title: "Thesis, organization, and supporting detail across modes", minutes: 70, level: "exam", prerequisites: ["wr-02", "wr-03"], skills: ["thesis-support"], competencyIds: ["0013", "0014", "0015"] },
        { id: "wr-06", title: "Style, tone, diction, and audience", minutes: 70, level: "exam", prerequisites: ["wr-05"], skills: ["style-audience"], competencyIds: ["0012", "0014"] }
      ]
    },
    {
      id: "oral",
      num: "E-V",
      title: "Oral and Visual Communication",
      track: "english",
      weight: "12%",
      competencies: "0016–0017",
      officialExamDomain: true,
      blurb: "Listening, discussion, speech craft, media analysis, presentations, and citation ethics.",
      color: "#115e59",
      lessons: [
        { id: "ov-01", title: "Listening, speaking, and group discussion", minutes: 65, level: "foundation", prerequisites: ["efdn-08"], skills: ["listening-speaking", "group-discussion"], competencyIds: ["0016"] },
        { id: "ov-02", title: "Speech craft: purpose, audience, and delivery", minutes: 70, level: "core", prerequisites: ["ov-01", "wr-03"], skills: ["speech-craft"], competencyIds: ["0016"] },
        { id: "ov-03", title: "Visual media: images, bias, and manipulation", minutes: 70, level: "exam", prerequisites: ["rd-03", "rd-06"], skills: ["media-analysis"], competencyIds: ["0017"] },
        { id: "ov-04", title: "Presentations, technologies, copyright, and ethics", minutes: 65, level: "exam", prerequisites: ["ov-02", "ov-03"], skills: ["presentation-ethics"], competencyIds: ["0017"] }
      ]
    },
    {
      id: "pedagogy",
      num: "PK",
      title: "Professional Knowledge: Secondary",
      track: "pedagogy",
      weight: "Exam 052",
      competencies: "0001–0010",
      blurb: "Adolescent development, planning, instruction, assessment, classroom management, ethics.",
      color: "#0c4a6e",
      officialExamDomain: false,
      lessons: [
        { id: "pk-01", title: "Adolescent development & learning theory", minutes: 45, level: "foundation", competencyIds: ["0001", "0002"] },
        { id: "pk-02", title: "Student differences, IEPs & differentiation", minutes: 45, level: "core", competencyIds: ["0003", "0006"] },
        { id: "pk-03", title: "Assessment design & data use", minutes: 40, level: "core", competencyIds: ["0004"] },
        { id: "pk-04", title: "Instructional planning & methods", minutes: 45, level: "core", competencyIds: ["0005", "0006"] },
        { id: "pk-05", title: "Motivation, communication & engagement", minutes: 35, level: "core", competencyIds: ["0001", "0006"] },
        { id: "pk-06", title: "Classroom management & climate", minutes: 40, level: "exam", competencyIds: ["0007", "0008"] },
        { id: "pk-07", title: "Families, collaboration & professional ethics", minutes: 40, level: "exam", competencyIds: ["0009", "0010"] },
        { id: "pk-08", title: "Constructed-response writing patterns", minutes: 50, level: "exam", competencyIds: ["case study", "work product"] }
      ]
    }
  ],
  weeks: [
    { week: 1, title: "Foundation placement", focus: "Measure arithmetic prerequisites; begin whole numbers and signed arithmetic", domains: ["foundation"], hours: "repeat until ≥85%", drill: { href: "exam.html?exam=math-placement-short", label: "Foundation placement" } },
    { week: 2, title: "Fraction meaning", focus: "Equivalent fractions, common-sized pieces, addition and subtraction", domains: ["foundation"], hours: "repeat until ≥85%", drill: { href: "practice.html?domain=foundation", label: "Foundation bank" } },
    { week: 3, title: "Fraction operations and percents", focus: "Multiplication, division, decimals, percents, and conversions", domains: ["foundation"], hours: "repeat until ≥85%", drill: { href: "practice.html?domain=foundation", label: "Foundation bank" } },
    { week: 4, title: "Bridge into algebra", focus: "Expressions, equations, exponents, roots, and coordinates", domains: ["foundation"], hours: "repeat until ≥85%", drill: { href: "exam.html?exam=math-placement-short", label: "Retake placement" } },
    { week: 5, title: "Number processes", focus: "Problem solving, estimation, number theory, logic, ratios, and rates", domains: ["number"], hours: "8–12", drill: { href: "exam.html?exam=math-number-block", label: "Number domain drill" } },
    { week: 6, title: "Linear algebra engine", focus: "Equations, slope, systems, inequalities, and function meaning", domains: ["algebra"], hours: "10–14", drill: { href: "exam.html?exam=math-algebra-block", label: "Algebra domain drill" } },
    { week: 7, title: "Quadratics and function operations", focus: "Quadratics, composition, inverses, and complex-number bridge", domains: ["algebra", "number"], hours: "10–14", drill: { href: "exam.html?exam=math-algebra-block", label: "Algebra domain drill" } },
    { week: 8, title: "Advanced algebra", focus: "Polynomials, rational/radical/piecewise, exponentials, and logarithms", domains: ["algebra"], hours: "10–14", drill: { href: "exam.html?exam=math-algebra-block", label: "Algebra domain drill" } },
    { week: 9, title: "Measurement and Euclidean geometry", focus: "Units, area, volume, polygons, circles, congruence, and proof", domains: ["geometry"], hours: "10–14", drill: { href: "exam.html?exam=math-geometry-block", label: "Geometry domain drill" } },
    { week: 10, title: "Coordinate geometry and conics", focus: "Transformations, coordinates, solids, and conic sections", domains: ["geometry"], hours: "8–12", drill: { href: "exam.html?exam=math-geometry-block", label: "Geometry domain drill" } },
    { week: 11, title: "Trigonometry", focus: "Right triangles, radians, unit circle, graphs, identities, and equations", domains: ["trigcalc"], hours: "10–14", drill: { href: "exam.html?exam=math-trigcalc-block", label: "Trig/calc domain drill" } },
    { week: 12, title: "Calculus", focus: "Limits, continuity, derivatives, applications, integrals, and accumulated area", domains: ["trigcalc"], hours: "12–16", drill: { href: "exam.html?exam=math-trigcalc-block", label: "Trig/calc domain drill" } },
    { week: 13, title: "Statistics and study design", focus: "Data displays, center/spread, sampling, bias, and causation", domains: ["stats"], hours: "8–12", drill: { href: "exam.html?exam=math-stats-block", label: "Stats domain drill" } },
    { week: 14, title: "Probability and discrete mathematics", focus: "Counting, probability, distributions, sequences, matrices, and sets", domains: ["stats"], hours: "10–14", drill: { href: "exam.html?exam=math-stats-block", label: "Stats domain drill" } },
    { week: 15, title: "Interleaved repair", focus: "Spaced review, weakest skills, and both 75-question half-length forms", domains: ["number", "algebra", "geometry", "trigcalc", "stats"], hours: "10–14", drill: { href: "exam.html?exam=math-full-1", label: "Half-length mock A" } },
    { week: 16, title: "Official-length simulations", focus: "Two 150-question, 5-hour simulations plus targeted repair between them", domains: ["number", "algebra", "geometry", "trigcalc", "stats"], hours: "12–16", drill: { href: "exam.html?exam=math-official-1", label: "Official-length simulation" } }
  ],
  englishWeeks: [
    { week: 1, title: "ELA foundation placement", focus: "Measure grammar, usage, vocabulary, and reading-process prerequisites on a new randomized mix each sitting", domains: ["ela-foundation"], hours: "repeat until ≥85%", test: { href: "exam.html?exam=ela-placement-short", label: "ELA placement test" }, cards: { href: "cards.html?deck=grammar-usage", label: "Grammar cards" }, quiz: { href: "cards.html?deck=grammar-usage&mode=quiz", label: "Grammar quiz" } },
    { week: 2, title: "Sentence anatomy", focus: "Parts of speech, phrases, clauses, and sentence types", domains: ["ela-foundation"], hours: "repeat until ≥85%", test: { href: "exam.html?exam=ela-phase-02", label: "Phase 2 test" }, drill: { href: "practice.html?domain=ela-foundation", label: "Foundation bank" }, cards: { href: "cards.html?deck=grammar-usage", label: "Grammar cards" }, quiz: { href: "cards.html?deck=grammar-usage&mode=quiz", label: "Grammar quiz" } },
    { week: 3, title: "Mechanics and usage", focus: "Punctuation, agreement, pronouns, and modifiers", domains: ["ela-foundation"], hours: "repeat until ≥85%", test: { href: "exam.html?exam=ela-phase-03", label: "Phase 3 test" }, drill: { href: "exam.html?exam=ela-language-block", label: "Conventions drill" }, cards: { href: "cards.html?deck=grammar-usage", label: "Grammar cards" }, quiz: { href: "cards.html?deck=grammar-usage&mode=quiz", label: "Grammar quiz" } },
    { week: 4, title: "Reading and rhetoric bridge", focus: "Vocabulary, reading process, literary elements, and argument", domains: ["ela-foundation"], hours: "repeat until ≥85%", test: { href: "exam.html?exam=ela-phase-04", label: "Phase 4 test" }, drill: { href: "practice.html?domain=ela-foundation", label: "Foundation bank" }, cards: { href: "cards.html?deck=reading-process", label: "Reading-process cards" }, quiz: { href: "cards.html?deck=reading-process&mode=quiz", label: "Reading-process quiz" } },
    { week: 5, title: "Vocabulary and informational reading", focus: "Word-meaning strategies, informational structure, summary, and graphics", domains: ["reading"], hours: "8–12", test: { href: "exam.html?exam=ela-phase-05", label: "Phase 5 test" }, drill: { href: "exam.html?exam=ela-reading-block", label: "Reading domain drill" }, cards: [{ href: "cards.html?deck=reading-process", label: "Reading-process cards" }, { href: "cards.html?deck=informational", label: "Informational cards" }], quiz: [{ href: "cards.html?deck=reading-process&mode=quiz", label: "Reading-process quiz" }, { href: "cards.html?deck=informational&mode=quiz", label: "Informational quiz" }] },
    { week: 6, title: "Persuasive and technical reading", focus: "Appeals, credibility, evidence, warranties, and functional texts", domains: ["reading"], hours: "8–12", test: { href: "exam.html?exam=ela-phase-06", label: "Phase 6 test" }, checkpoint: { href: "exam.html?exam=ela-check-06", label: "Checkpoint 1–6" }, drill: { href: "exam.html?exam=ela-reading-block", label: "Reading domain drill" }, cards: { href: "cards.html?deck=rhetoric-composition", label: "Rhetoric cards" }, quiz: { href: "cards.html?deck=rhetoric-composition&mode=quiz", label: "Rhetoric quiz" } },
    { week: 7, title: "Prose, drama, and narrative craft", focus: "Fiction, literary nonfiction, drama, plot, character, POV, and tone", domains: ["literature"], hours: "10–14", test: { href: "exam.html?exam=ela-phase-07", label: "Phase 7 test" }, drill: { href: "exam.html?exam=ela-literature-block", label: "Literature domain drill" }, cards: { href: "cards.html?deck=literature-terms", label: "Literature cards" }, quiz: { href: "cards.html?deck=literature-terms&mode=quiz", label: "Literature quiz" } },
    { week: 8, title: "Poetry and figurative language", focus: "Forms, meter, sound devices, imagery, and figures of speech", domains: ["literature"], hours: "8–12", test: { href: "exam.html?exam=ela-phase-08", label: "Phase 8 test" }, drill: { href: "exam.html?exam=ela-literature-block", label: "Literature domain drill" }, cards: { href: "cards.html?deck=literature-terms", label: "Literature cards" }, quiz: { href: "cards.html?deck=literature-terms&mode=quiz", label: "Literature quiz" } },
    { week: 9, title: "World literature and context", focus: "Genres, oral tradition, periods, movements, and social argument", domains: ["literature"], hours: "10–14", test: { href: "exam.html?exam=ela-phase-09", label: "Phase 9 test" }, drill: { href: "exam.html?exam=ela-periods-drill", label: "Periods drill" }, cards: { href: "cards.html?deck=literature-terms", label: "Literature cards" }, quiz: { href: "cards.html?deck=literature-terms&mode=quiz", label: "Literature quiz" } },
    { week: 10, title: "Conventions and composition", focus: "Grammar under pressure, sentence craft, and essay architecture", domains: ["language"], hours: "8–12", test: { href: "exam.html?exam=ela-phase-10", label: "Phase 10 test" }, drill: { href: "exam.html?exam=ela-language-block", label: "Conventions drill" }, cards: { href: "cards.html?deck=grammar-usage", label: "Grammar cards" }, quiz: { href: "cards.html?deck=grammar-usage&mode=quiz", label: "Grammar quiz" } },
    { week: 11, title: "Process and research", focus: "Generate–revise–edit–proofread, sources, paraphrase, and citation", domains: ["language"], hours: "8–12", test: { href: "exam.html?exam=ela-phase-11", label: "Phase 11 test" }, drill: { href: "exam.html?exam=ela-language-block", label: "Conventions drill" }, cards: { href: "cards.html?deck=rhetoric-composition", label: "Rhetoric cards" }, quiz: { href: "cards.html?deck=rhetoric-composition&mode=quiz", label: "Rhetoric quiz" } },
    { week: 12, title: "Narrative and expository modes", focus: "Scene and voice; thesis, explanation, and succinct development", domains: ["writing"], hours: "8–12", test: { href: "exam.html?exam=ela-phase-12", label: "Phase 12 test" }, checkpoint: { href: "exam.html?exam=ela-check-12", label: "Checkpoint 7–12" }, drill: { href: "exam.html?exam=ela-writing-block", label: "Writing modes drill" }, cards: { href: "cards.html?deck=rhetoric-composition", label: "Rhetoric cards" }, quiz: { href: "cards.html?deck=rhetoric-composition&mode=quiz", label: "Rhetoric quiz" } },
    { week: 13, title: "Persuasive and analytical modes", focus: "Counterargument, literary analysis, style, tone, and audience", domains: ["writing"], hours: "10–14", test: { href: "exam.html?exam=ela-phase-13", label: "Phase 13 test" }, drill: { href: "exam.html?exam=ela-writing-block", label: "Writing modes drill" }, cards: { href: "cards.html?deck=rhetoric-composition", label: "Rhetoric cards" }, quiz: { href: "cards.html?deck=rhetoric-composition&mode=quiz", label: "Rhetoric quiz" } },
    { week: 14, title: "Oral and visual communication", focus: "Discussion, speech craft, media bias, presentations, and ethics", domains: ["oral"], hours: "6–10", test: { href: "exam.html?exam=ela-phase-14", label: "Phase 14 test" }, drill: { href: "exam.html?exam=ela-oral-block", label: "Oral/visual drill" }, cards: { href: "cards.html?deck=oral-visual", label: "Oral/visual cards" }, quiz: { href: "cards.html?deck=oral-visual&mode=quiz", label: "Oral/visual quiz" } },
    { week: 15, title: "ELA interleaved repair", focus: "Spaced review, weakest skills, a randomized mixed test, then both 75-question half-length forms", domains: ["reading", "literature", "language", "writing", "oral"], hours: "10–14", test: { href: "exam.html?exam=ela-phase-15", label: "Phase 15 mixed test" }, drill: { href: "exam.html?exam=ela-full-1", label: "Half-length mock A" }, quiz: { href: "cards.html?deck=mixed&mode=quiz", label: "Mixed term quiz" } },
    { week: 16, title: "ELA official-length simulations", focus: "Holistic mixed review, then two 150-question simulations plus targeted repair between them", domains: ["reading", "literature", "language", "writing", "oral"], hours: "10–14", test: { href: "exam.html?exam=ela-phase-16", label: "Phase 16 mixed test" }, checkpoint: { href: "exam.html?exam=ela-check-16", label: "Checkpoint 13–16" }, drill: { href: "exam.html?exam=ela-official-1", label: "Official-length simulation" }, quiz: [{ href: "exam.html?exam=ela-clusters", label: "Cluster exam" }, { href: "exam.html?exam=ela-field-rigor-c", label: "Passage set C" }] }
  ]
};
