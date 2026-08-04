/* NES Mathematics (Secondary 6–12) + Professional Knowledge Secondary curriculum */
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
      id: "pedagogy",
      num: "PK",
      title: "Professional Knowledge: Secondary",
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
    { week: 1, title: "Foundation placement", focus: "Measure arithmetic prerequisites; begin whole numbers and signed arithmetic", domains: ["foundation"], hours: "repeat until ≥85%" },
    { week: 2, title: "Fraction meaning", focus: "Equivalent fractions, common-sized pieces, addition and subtraction", domains: ["foundation"], hours: "repeat until ≥85%" },
    { week: 3, title: "Fraction operations and percents", focus: "Multiplication, division, decimals, percents, and conversions", domains: ["foundation"], hours: "repeat until ≥85%" },
    { week: 4, title: "Bridge into algebra", focus: "Expressions, equations, exponents, roots, and coordinates", domains: ["foundation"], hours: "repeat until ≥85%" },
    { week: 5, title: "Number processes", focus: "Problem solving, estimation, number theory, logic, ratios, and rates", domains: ["number"], hours: "8–12" },
    { week: 6, title: "Linear algebra engine", focus: "Equations, slope, systems, inequalities, and function meaning", domains: ["algebra"], hours: "10–14" },
    { week: 7, title: "Quadratics and function operations", focus: "Quadratics, composition, inverses, and complex-number bridge", domains: ["algebra", "number"], hours: "10–14" },
    { week: 8, title: "Advanced algebra", focus: "Polynomials, rational/radical/piecewise, exponentials, and logarithms", domains: ["algebra"], hours: "10–14" },
    { week: 9, title: "Measurement and Euclidean geometry", focus: "Units, area, volume, polygons, circles, congruence, and proof", domains: ["geometry"], hours: "10–14" },
    { week: 10, title: "Coordinate geometry and conics", focus: "Transformations, coordinates, solids, and conic sections", domains: ["geometry"], hours: "8–12" },
    { week: 11, title: "Trigonometry", focus: "Right triangles, radians, unit circle, graphs, identities, and equations", domains: ["trigcalc"], hours: "10–14" },
    { week: 12, title: "Calculus", focus: "Limits, continuity, derivatives, applications, integrals, and accumulated area", domains: ["trigcalc"], hours: "12–16" },
    { week: 13, title: "Statistics and study design", focus: "Data displays, center/spread, sampling, bias, and causation", domains: ["stats"], hours: "8–12" },
    { week: 14, title: "Probability and discrete mathematics", focus: "Counting, probability, distributions, sequences, matrices, and sets", domains: ["stats"], hours: "10–14" },
    { week: 15, title: "Interleaved repair", focus: "Spaced review, weakest skills, and both 75-question half-length forms", domains: ["number", "algebra", "geometry", "trigcalc", "stats"], hours: "10–14" },
    { week: 16, title: "Official-length simulations", focus: "Two 150-question, 5-hour simulations plus targeted repair between them", domains: ["number", "algebra", "geometry", "trigcalc", "stats"], hours: "12–16" }
  ]
};
