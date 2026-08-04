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
    ["matrices-sets", /matrix|set|union|intersection|venn/]
  ];

  const domainFallback = {
    number: "problem-solving",
    algebra: "functions",
    geometry: "measurement-units",
    trigcalc: "right-triangle-trig",
    stats: "descriptive-statistics",
    pedagogy: null
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
