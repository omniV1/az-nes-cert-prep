/* Add skill and representation metadata without duplicating the problem bank. */
(function tagProblems() {
  const rules = [
    ["number-fluency", /integer|fraction|decimal|absolute value|signed number/],
    ["estimation", /estimat|plausib|approx|mental math/],
    ["percent-change", /percent|discount|markup|tax|interest/],
    ["work-rates", /together|job\/hour|work rate|pump|pipe/],
    ["average-speed", /average speed|round trip/],
    ["ratios-proportions", /ratio|proportion|scale/],
    ["unit-rates", /unit rate|per hour|per mile|per gallon/],
    ["average-rate-change", /average rate of change|difference quotient/],
    ["gcf-lcm", /\bgcf\b|\blcm\b|greatest common|least common/],
    ["prime-factorization", /prime|factorization|divisib/],
    ["complex-numbers", /complex|\bi\b|conjugate/],
    ["real-number-system", /real number|rational|irrational|nested number/],
    ["logic", /logic|counterexample|contrapositive|converse|deduct|induct/],
    ["systems", /system|two equations|intersection/],
    ["inequalities", /inequal|at least|at most/],
    ["slope", /slope|rate of change|linear rate/],
    ["linear-equations", /linear|line equation|point-slope/],
    ["composition", /composition|f\(g|g\(f/],
    ["inverse-functions", /inverse function|f\\^-1/],
    ["domain-range", /domain|range/],
    ["functions", /function|relation|vertical line/],
    ["quadratics", /quadratic|parabola|vertex|discriminant/],
    ["completing-square", /complete.*square|completing.*square/],
    ["discriminant", /discriminant|root type|number of real roots/],
    ["function-operations", /function operation|add.*functions|subtract.*functions|multiply.*functions|divide.*functions/],
    ["polynomials", /polynomial|synthetic|factor theorem|multiplicity/],
    ["factor-theorem", /factor theorem|synthetic division|remainder theorem/],
    ["multiplicity", /multiplicity|crosses.*axis|touches.*axis/],
    ["logarithms", /logarithm|\\blog\\b|\\bln\\b/],
    ["exponential-functions", /exponential|half-life|doubl/],
    ["rational-functions", /rational function|asymptote|hole/],
    ["radical-equations", /radical|square root equation|extraneous/],
    ["piecewise-functions", /piecewise|absolute value/],
    ["measurement-units", /unit conversion|measurement|precision|error/],
    ["scale", /scale factor|scale drawing|similar.*scale/],
    ["perimeter-area", /perimeter|area|sector|circumference/],
    ["surface-volume", /surface area|volume|cylinder|cone|sphere|prism/],
    ["pythagorean", /pythagorean|right triangle|hypotenuse/],
    ["polygon-circle", /polygon|circle|arc|inscribed/],
    ["congruence-similarity", /congruen|similar triangle|sss|sas|asa|aas|ssa/],
    ["geometry-proof", /geometric proof|proof|counterexample|deductive/],
    ["solid-geometry", /polyhed|cross section|net|euler/],
    ["nets-cross-sections", /cross section|net of|solid net/],
    ["coordinate-geometry", /distance formula|midpoint|coordinate geometry/],
    ["transformations", /rotation|reflection|translation|dilation|transform/],
    ["conic-sections", /conic|ellipse|hyperbola|parabola|circle equation/],
    ["right-triangle-trig", /soh|sine|cosine|tangent|angle of elevation/],
    ["unit-circle", /unit circle|reference angle|radian/],
    ["trig-graphs", /trig graph|amplitude|period|phase/],
    ["trig-identities", /identity|sin²|cos²|double-angle/],
    ["trig-equations", /trig equation|solve.*sin|solve.*cos/],
    ["limits", /limit|approach/],
    ["continuity", /continu/],
    ["derivatives", /derivative|differentiat|chain rule|product rule|quotient rule/],
    ["derivative-applications", /critical point|optimization|increasing|decreasing|related rate/],
    ["integrals", /integral|antiderivative|area under|u-sub/],
    ["fundamental-theorem", /fundamental theorem|accumulation function|derivative of.*integral/],
    ["descriptive-statistics", /mean|median|mode|standard deviation|iqr|box plot/],
    ["data-displays", /box plot|histogram|scatterplot|data display|dot plot/],
    ["sampling-study-design", /sample|bias|observational|experiment|caus/],
    ["permutations-combinations", /permutation|combination|committee|arrange/],
    ["counting", /counting principle|how many|arrangement|permutation|combination/],
    ["conditional-probability", /conditional|given that|bayes/],
    ["probability", /probability|dice|coin|card|independent|mutually exclusive/],
    ["binomial-normal", /binomial|normal distribution|z-score|empirical rule/],
    ["distributions", /probability distribution|expected value|binomial|normal distribution/],
    ["sequences-series", /sequence|series|arithmetic sequence|geometric sequence/],
    ["matrices-sets", /matrix|set|union|intersection|venn/],
    ["parts-of-speech", /noun|verb|adjective|adverb|preposition|conjunction|pronoun|interjection|part of speech/],
    ["phrases-clauses", /independent clause|dependent clause|subordinate|phrase vs clause|relative clause/],
    ["punctuation-basics", /comma splice|semicolon|apostrophe|colon|dash|quotation mark/],
    ["agreement-usage", /subject-verb|pronoun-antecedent|dangling|misplaced modifier|who\/whom/],
    ["vocab-strategies", /context clue|connotation|denotation|root|prefix|suffix|etymolog/],
    ["informational-texts", /informational|main idea|text structure|compare-contrast|cause-and-effect/],
    ["persuasive-texts", /editorial|propaganda|advertisement|claim|counterargument/],
    ["rhetorical-appeals", /ethos|pathos|logos|rhetorical appeal/],
    ["technical-texts", /warranty|contract|timetable|application|functional text|flowchart/],
    ["evidence-credibility", /credibility|reliability|bias|sufficient evidence|summary/],
    ["text-graphics", /table|chart|caption|legend|graphic feature|schematic/],
    ["prose-drama-analysis", /soliloquy|dramatic irony|denouement|flashback|characterization/],
    ["poetry-forms", /sonnet|villanelle|ode|ballad|tanka|iambic|free verse|quatrain/],
    ["figurative-language", /metaphor|simile|personification|metonymy|synecdoche|apostrophe|hyperbole|irony/],
    ["sound-devices", /alliteration|assonance|consonance|rhyme|meter|iambic pentameter/],
    ["narrative-elements", /point of view|tone|mood|theme|plot|setting|unreliable narrator/],
    ["world-literature", /fable|epic|oral tradition|trickster|haiku|frame tale/],
    ["literary-periods", /romanticism|realism|modernism|harlem renaissance|enlightenment|transcendental/],
    ["literature-context", /child labor|abolition|civil rights|social issue|historical context/],
    ["grammar-usage", /parallelism|fragment|run-on|tense shift|voice|mood of verb/],
    ["mechanics", /capitalization|spelling|hyphen|its\/it's|there\/their\/they're/],
    ["sentence-craft", /sentence combining|transition|wordiness|coherence|subordination/],
    ["essay-structure", /thesis|introduction|conclusion|topic sentence|body paragraph/],
    ["writing-process", /brainstorm|draft|revise|edit|proofread|prewriting/],
    ["research-citation", /paraphrase|plagiarism|citation|works cited|primary source|open-ended question/],
    ["narrative-writing", /in medias res|flashback|sensory detail|strong verb|narrative/],
    ["expository-writing", /expository|explain|problem-and-solution|cause-and-effect organization/],
    ["persuasive-writing", /counterargument|call to action|logical order|respectful tone/],
    ["analytical-writing", /literary analysis|textual evidence|interpretive claim|close reading/],
    ["style-audience", /diction|audience|formal tone|voice|style/],
    ["listening-speaking", /active listening|barrier to listening|restating|clarifying/],
    ["group-discussion", /group discussion|turn-taking|nonverbal cue/],
    ["speech-craft", /speech|vocal variety|occasion|rhetorical device in speech/],
    ["media-analysis", /media|visual image|photo manipulation|camera angle|advertisement image/],
    ["presentation-ethics", /copyright|fair use|citation of media|presentation aid/]
  ];

  const domainFallback = {
    number: "problem-solving",
    algebra: "functions",
    geometry: "measurement-units",
    trigcalc: "right-triangle-trig",
    stats: "descriptive-statistics",
    pedagogy: null,
    "ela-foundation": "sentence-anatomy",
    reading: "informational-texts",
    literature: "narrative-elements",
    language: "grammar-usage",
    writing: "expository-writing",
    oral: "listening-speaking"
  };

  for (const problem of (window.PROBLEMS || [])) {
    const haystack = [problem.title, problem.stem, ...(problem.tags || [])].join(" ").toLowerCase();
    const matches = rules.filter(([, pattern]) => pattern.test(haystack)).map(([skillId]) => skillId);
    const combined = [...(problem.skillIds || []), ...matches];
    problem.skillIds = [...new Set(
      combined.length ? combined : [domainFallback[problem.domain]].filter(Boolean)
    )];
    problem.representations = problem.representations || inferRepresentations(haystack);
  }

  function inferRepresentations(text) {
    const result = [];
    if (/graph|plot|coordinate|box plot|histogram/.test(text)) result.push("graph");
    if (/table|data|sequence/.test(text)) result.push("table");
    if (/diagram|triangle|circle|shape|figure/.test(text)) result.push("diagram");
    if (/word|situation|store|student|teacher|miles|price|population/.test(text)) result.push("verbal");
    if (!result.length) result.push("symbolic");
    return result;
  }
})();

window.stemHtml = function stemHtml(p) {
  const esc = s => String(s ?? "").replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  const withBreaks = s => esc(s).replace(/\n/g, "<br>");
  const passage = p.passage
    ? `<blockquote class="passage">${withBreaks(p.passage)}</blockquote>`
    : "";
  return passage + `<div class="problem-stem">${withBreaks(p.stem)}</div>`;
};
