/* NeetCode-style problem bank aligned to NES Mathematics + APK Secondary */
window.PROBLEMS = [
  /* ===== NUMBER ===== */
  {
    id: "N001", domain: "number", title: "Proportion Word Problem",
    difficulty: "easy", tags: ["proportions", "rates"],
    stem: "A map uses a scale of 1 inch : 12 miles. Two towns are 3.5 inches apart on the map. How many miles apart are they?",
    choices: ["36 miles", "42 miles", "48 miles", "24 miles"],
    answer: 1,
    explanation: "3.5 × 12 = 42 miles. Scale factors are direct proportions."
  },
  {
    id: "N002", domain: "number", title: "Percent Change",
    difficulty: "easy", tags: ["percents"],
    stem: "A phone drops from $800 to $680. What is the percent decrease?",
    choices: ["12%", "15%", "18%", "20%"],
    answer: 1,
    explanation: "Decrease = 120. Percent decrease = 120/800 = 0.15 = 15%."
  },
  {
    id: "N003", domain: "number", title: "GCF Application",
    difficulty: "easy", tags: ["number-theory"],
    stem: "What is the greatest number of identical gift bags that can be filled using 48 chocolates and 72 stickers with none left over?",
    choices: ["12", "16", "24", "8"],
    answer: 2,
    explanation: "GCF(48,72)=24. Each bag gets 2 chocolates and 3 stickers."
  },
  {
    id: "N004", domain: "number", title: "Prime Factorization",
    difficulty: "medium", tags: ["number-theory"],
    stem: "The prime factorization of 360 is:",
    choices: ["2³ · 3² · 5", "2² · 3³ · 5", "2⁴ · 3² · 5", "2³ · 3 · 5²"],
    answer: 0,
    explanation: "360 = 36×10 = (2²·3²)×(2·5) = 2³·3²·5."
  },
  {
    id: "N005", domain: "number", title: "Complex Arithmetic",
    difficulty: "medium", tags: ["complex"],
    stem: "(3 − 2i)(1 + 4i) equals:",
    choices: ["11 + 10i", "3 − 8i", "−5 + 10i", "11 − 10i"],
    answer: 0,
    explanation: "3·1 + 3·4i − 2i·1 − 2i·4i = 3 + 12i − 2i − 8i² = 3 + 10i + 8 = 11 + 10i."
  },
  {
    id: "N006", domain: "number", title: "Inductive vs Deductive",
    difficulty: "medium", tags: ["reasoning"],
    stem: "A student notices that 3²+4²=5² and 5²+12²=13², then concludes every odd integer is a leg of a Pythagorean triple. This reasoning is best classified as:",
    choices: ["Deductive and valid", "Inductive and not necessarily valid", "Deductive and invalid", "Proof by contradiction"],
    answer: 1,
    explanation: "Generalizing from examples is inductive; the conclusion is not guaranteed."
  },
  {
    id: "N007", domain: "number", title: "Average Rate",
    difficulty: "hard", tags: ["rates"],
    stem: "A cyclist rides 30 miles at 15 mph and returns the same route at 10 mph. What is the average speed for the round trip?",
    choices: ["12 mph", "12.5 mph", "11.5 mph", "13 mph"],
    answer: 0,
    explanation: "Total distance 60. Time = 30/15 + 30/10 = 2 + 3 = 5 hours. Average = 60/5 = 12 mph (harmonic mean)."
  },
  {
    id: "N008", domain: "number", title: "Complex Modulus",
    difficulty: "hard", tags: ["complex"],
    stem: "If z = −3 + 4i, then |z| equals:",
    choices: ["1", "5", "7", "√7"],
    answer: 1,
    explanation: "|a+bi|=√(a²+b²)=√(9+16)=5."
  },

  /* ===== ALGEBRA ===== */
  {
    id: "A001", domain: "algebra", title: "Function Check",
    difficulty: "easy", tags: ["functions"],
    stem: "Which relation is NOT a function?",
    choices: ["{(1,2),(2,3),(3,4)}", "y = x²", "x = y²", "y = |x|"],
    answer: 2,
    explanation: "x = y² assigns two y-values for most x (e.g., x=4 → y=±2). Fails vertical line test."
  },
  {
    id: "A002", domain: "algebra", title: "Linear System",
    difficulty: "easy", tags: ["systems"],
    stem: "Solve: 2x + y = 7 and x − y = 2.",
    choices: ["(3,1)", "(2,3)", "(1,5)", "(4,−1)"],
    answer: 0,
    explanation: "Add equations: 3x = 9 → x=3. Then 3−y=2 → y=1."
  },
  {
    id: "A003", domain: "algebra", title: "Quadratic Roots",
    difficulty: "easy", tags: ["quadratics"],
    stem: "The solutions of x² − 5x + 6 = 0 are:",
    choices: ["x=2,3", "x=−2,−3", "x=1,6", "x=−1,−6"],
    answer: 0,
    explanation: "(x−2)(x−3)=0."
  },
  {
    id: "A004", domain: "algebra", title: "Composition",
    difficulty: "medium", tags: ["functions"],
    stem: "If f(x)=2x+1 and g(x)=x², then (f∘g)(3) equals:",
    choices: ["19", "49", "37", "13"],
    answer: 0,
    explanation: "g(3)=9; f(9)=19."
  },
  {
    id: "A005", domain: "algebra", title: "Inverse Function",
    difficulty: "medium", tags: ["functions"],
    stem: "The inverse of f(x)=3x−6 is:",
    choices: ["f⁻¹(x)=(x+6)/3", "f⁻¹(x)=3x+6", "f⁻¹(x)=(x−6)/3", "f⁻¹(x)=x/3−6"],
    answer: 0,
    explanation: "y=3x−6 → x=(y+6)/3 → swap: (x+6)/3."
  },
  {
    id: "A006", domain: "algebra", title: "Exponential Growth",
    difficulty: "medium", tags: ["exponential"],
    stem: "A culture starts at 200 cells and doubles every 4 hours. Which model gives cells after t hours?",
    choices: ["200(2)^{t/4}", "200(2)^{4t}", "200 + 2^{t/4}", "200(1/2)^{t/4}"],
    answer: 0,
    explanation: "Doubling period 4 hours → multiplier 2^{t/4}."
  },
  {
    id: "A007", domain: "algebra", title: "Log Equation",
    difficulty: "medium", tags: ["logarithms"],
    stem: "Solve log₂(x−1) = 3.",
    choices: ["x=9", "x=8", "x=7", "x=10"],
    answer: 0,
    explanation: "x−1 = 2³ = 8 → x=9."
  },
  {
    id: "A008", domain: "algebra", title: "Rational Asymptotes",
    difficulty: "hard", tags: ["rational"],
    stem: "For f(x)=(2x²−8)/(x−2), which statement is true after simplifying for x≠2?",
    choices: [
      "Removable discontinuity at x=2; equals 2x+4 elsewhere",
      "Vertical asymptote at x=2",
      "Equals 2x−4 for all x",
      "Horizontal asymptote y=0"
    ],
    answer: 0,
    explanation: "Factor: 2(x−2)(x+2)/(x−2)=2(x+2)=2x+4 for x≠2. Hole at x=2."
  },
  {
    id: "A009", domain: "algebra", title: "Piecewise Evaluation",
    difficulty: "medium", tags: ["piecewise"],
    stem: "f(x)= { x+2 if x<0 ; x² if x≥0 }. Find f(−3)+f(2).",
    choices: ["1", "−1", "5", "3"],
    answer: 0,
    explanation: "f(−3)=−1; f(2)=4; sum=3? Wait: −1+4=3. Correct choice index for 3 is 3... Recalculate choices: should be 3. Fix answer to 3.",
    // Will fix - answer should be 3 for choice "3"
  },
  {
    id: "A010", domain: "algebra", title: "Vertex Form",
    difficulty: "hard", tags: ["quadratics"],
    stem: "Rewrite y = x² − 6x + 5 in vertex form.",
    choices: ["y=(x−3)² − 4", "y=(x−3)² + 4", "y=(x+3)² − 4", "y=(x−6)² + 5"],
    answer: 0,
    explanation: "Complete square: x²−6x+9−9+5=(x−3)²−4."
  },
  {
    id: "A011", domain: "algebra", title: "Polynomial End Behavior",
    difficulty: "medium", tags: ["polynomials"],
    stem: "For p(x)=−2x⁵ + 3x² − 1, as x→∞, p(x) →",
    choices: ["∞", "−∞", "0", "3"],
    answer: 1,
    explanation: "Odd degree, negative leading coefficient → as x→∞, p→−∞."
  },
  {
    id: "A012", domain: "algebra", title: "Absolute Value Inequality",
    difficulty: "hard", tags: ["absolute-value"],
    stem: "Solve |2x−1| > 5.",
    choices: ["x < −2 or x > 3", "−2 < x < 3", "x < −2", "x > 3"],
    answer: 0,
    explanation: "2x−1 > 5 or 2x−1 < −5 → x>3 or x<−2."
  },

  /* ===== GEOMETRY ===== */
  {
    id: "G001", domain: "geometry", title: "Circle Area",
    difficulty: "easy", tags: ["measurement"],
    stem: "A circle has radius 6. Its area is:",
    choices: ["12π", "36π", "6π", "72π"],
    answer: 1,
    explanation: "A=πr²=36π."
  },
  {
    id: "G002", domain: "geometry", title: "Pythagorean Triple",
    difficulty: "easy", tags: ["pythagorean"],
    stem: "A right triangle has legs 9 and 12. The hypotenuse is:",
    choices: ["15", "21", "√108", "13"],
    answer: 0,
    explanation: "√(81+144)=√225=15."
  },
  {
    id: "G003", domain: "geometry", title: "Similar Triangles",
    difficulty: "medium", tags: ["similarity"],
    stem: "Triangles ABC ~ DEF with AB/DE = 3/5. If area(ABC)=27, area(DEF) is:",
    choices: ["45", "75", "81", "135"],
    answer: 1,
    explanation: "Area ratio = (3/5)² = 9/25. Area DEF = 27 · 25/9 = 75."
  },
  {
    id: "G004", domain: "geometry", title: "Cylinder Volume",
    difficulty: "easy", tags: ["volume"],
    stem: "A cylinder has radius 4 and height 10. Volume is:",
    choices: ["40π", "80π", "160π", "320π"],
    answer: 2,
    explanation: "V=πr²h=π·16·10=160π."
  },
  {
    id: "G005", domain: "geometry", title: "Midpoint & Distance",
    difficulty: "medium", tags: ["coordinate"],
    stem: "Endpoints A(−2,3) and B(4,−1). Midpoint M is:",
    choices: ["(1,1)", "(2,1)", "(1,2)", "(3,1)"],
    answer: 0,
    explanation: "M=((−2+4)/2,(3−1)/2)=(1,1)."
  },
  {
    id: "G006", domain: "geometry", title: "Circle Equation",
    difficulty: "medium", tags: ["conics"],
    stem: "The equation (x−1)² + (y+2)² = 9 represents a circle with center and radius:",
    choices: ["(1,−2), r=3", "(−1,2), r=3", "(1,2), r=9", "(1,−2), r=9"],
    answer: 0,
    explanation: "Center (h,k)=(1,−2), r=√9=3."
  },
  {
    id: "G007", domain: "geometry", title: "Transformation",
    difficulty: "medium", tags: ["transformations"],
    stem: "Point (2,−3) reflected over the y-axis becomes:",
    choices: ["(−2,−3)", "(2,3)", "(−2,3)", "(3,−2)"],
    answer: 0,
    explanation: "Reflection over y-axis: (x,y)→(−x,y)."
  },
  {
    id: "G008", domain: "geometry", title: "Parabola Focus",
    difficulty: "hard", tags: ["conics"],
    stem: "For y = (1/8)x², the focus is at:",
    choices: ["(0,2)", "(0,1/32)", "(0,8)", "(2,0)"],
    answer: 0,
    explanation: "Standard y=(1/(4p))x². 1/(4p)=1/8 → 4p=8 → p=2. Focus (0,p)=(0,2)."
  },
  {
    id: "G009", domain: "geometry", title: "Cross Section",
    difficulty: "medium", tags: ["3d"],
    stem: "A plane parallel to the base of a right circular cone intersects the cone. The cross section is:",
    choices: ["A circle", "An ellipse that is not a circle", "A parabola", "A triangle"],
    answer: 0,
    explanation: "Plane // base → circle (similar to base)."
  },
  {
    id: "G010", domain: "geometry", title: "Congruence Criteria",
    difficulty: "hard", tags: ["proof"],
    stem: "Which set of conditions is sufficient to prove triangle congruence?",
    choices: [
      "Angle-Angle-Side (AAS)",
      "Side-Side-Angle (SSA) in general",
      "Angle-Angle-Angle (AAA)",
      "Two sides only (SS)"
    ],
    answer: 0,
    explanation: "AAS is a valid congruence criterion. SSA is not generally valid; AAA proves similarity only."
  },

  /* ===== TRIG / CALC ===== */
  {
    id: "T001", domain: "trigcalc", title: "SOHCAHTOA",
    difficulty: "easy", tags: ["trig"],
    stem: "In a right triangle, opposite=5, adjacent=12. sin θ =",
    choices: ["5/13", "12/13", "5/12", "12/5"],
    answer: 0,
    explanation: "Hypotenuse=13. sin=opp/hyp=5/13."
  },
  {
    id: "T002", domain: "trigcalc", title: "Unit Circle",
    difficulty: "easy", tags: ["unit-circle"],
    stem: "cos(2π/3) equals:",
    choices: ["−1/2", "1/2", "√3/2", "−√3/2"],
    answer: 0,
    explanation: "120° is in QII; cosine negative; reference 60° → −1/2."
  },
  {
    id: "T003", domain: "trigcalc", title: "Amplitude & Period",
    difficulty: "medium", tags: ["trig-graphs"],
    stem: "For y = 3 sin(2x), amplitude and period are:",
    choices: ["3 and π", "3 and 2π", "2 and π", "3 and 4π"],
    answer: 0,
    explanation: "Amplitude=|3|=3. Period=2π/|2|=π."
  },
  {
    id: "T004", domain: "trigcalc", title: "Pythagorean Identity",
    difficulty: "medium", tags: ["identities"],
    stem: "If sin θ = 3/5 and θ is in Quadrant II, cos θ =",
    choices: ["−4/5", "4/5", "−3/5", "5/4"],
    answer: 0,
    explanation: "cos²=1−sin²=16/25 → |cos|=4/5; QII → negative."
  },
  {
    id: "T005", domain: "trigcalc", title: "Limit",
    difficulty: "medium", tags: ["limits"],
    stem: "lim (x→2) (x²−4)/(x−2) equals:",
    choices: ["4", "0", "2", "undefined"],
    answer: 0,
    explanation: "Factor (x−2)(x+2)/(x−2)=x+2 → 4."
  },
  {
    id: "T006", domain: "trigcalc", title: "Derivative Power Rule",
    difficulty: "easy", tags: ["derivatives"],
    stem: "If f(x)=x⁴ − 3x + 7, then f′(x) =",
    choices: ["4x³ − 3", "4x³ − 3x", "x³ − 3", "4x³ + 7"],
    answer: 0,
    explanation: "Power rule: 4x³ − 3."
  },
  {
    id: "T007", domain: "trigcalc", title: "Tangent Slope",
    difficulty: "medium", tags: ["derivatives"],
    stem: "Slope of the tangent to y=x² at x=3 is:",
    choices: ["6", "9", "3", "1"],
    answer: 0,
    explanation: "y′=2x; at 3 → 6."
  },
  {
    id: "T008", domain: "trigcalc", title: "Optimization",
    difficulty: "hard", tags: ["derivatives"],
    stem: "A rectangle has perimeter 40. Maximum area occurs when sides are:",
    choices: ["10 by 10", "5 by 15", "8 by 12", "0 by 20"],
    answer: 0,
    explanation: "Among rectangles with fixed perimeter, square maximizes area: 10×10=100."
  },
  {
    id: "T009", domain: "trigcalc", title: "Indefinite Integral",
    difficulty: "medium", tags: ["integrals"],
    stem: "∫ (3x² − 2) dx =",
    choices: ["x³ − 2x + C", "6x − 2 + C", "x³ − 2 + C", "3x³ − 2x + C"],
    answer: 0,
    explanation: "Antiderivative: x³ − 2x + C."
  },
  {
    id: "T010", domain: "trigcalc", title: "Definite Integral Area",
    difficulty: "hard", tags: ["integrals"],
    stem: "∫₀² (2x) dx equals:",
    choices: ["4", "2", "8", "0"],
    answer: 0,
    explanation: "[x²]₀² = 4−0=4."
  },
  {
    id: "T011", domain: "trigcalc", title: "Continuity",
    difficulty: "hard", tags: ["limits"],
    stem: "f(x)= { (x²−1)/(x−1) if x≠1 ; k if x=1 }. For continuity at x=1, k must be:",
    choices: ["2", "0", "1", "−1"],
    answer: 0,
    explanation: "Limit as x→1 of (x+1)=2, so k=2."
  },

  /* ===== STATS ===== */
  {
    id: "S001", domain: "stats", title: "Mean vs Median",
    difficulty: "easy", tags: ["descriptive"],
    stem: "Data: 2, 3, 3, 4, 18. Which measure is most affected by the outlier?",
    choices: ["Mean", "Median", "Mode", "Midrange of middle three only"],
    answer: 0,
    explanation: "Mean is pulled toward outliers; median stays near 3."
  },
  {
    id: "S002", domain: "stats", title: "Basic Probability",
    difficulty: "easy", tags: ["probability"],
    stem: "A fair die is rolled. P(even number) =",
    choices: ["1/2", "1/3", "1/6", "2/3"],
    answer: 0,
    explanation: "Even: 2,4,6 → 3/6=1/2."
  },
  {
    id: "S003", domain: "stats", title: "Conditional Probability",
    difficulty: "medium", tags: ["probability"],
    stem: "P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. P(A|B) =",
    choices: ["0.4", "0.5", "0.2", "0.8"],
    answer: 0,
    explanation: "P(A|B)=P(A∩B)/P(B)=0.2/0.5=0.4."
  },
  {
    id: "S004", domain: "stats", title: "Combinations",
    difficulty: "medium", tags: ["counting"],
    stem: "How many 3-person committees from 8 students?",
    choices: ["56", "336", "24", "512"],
    answer: 0,
    explanation: "C(8,3)=56."
  },
  {
    id: "S005", domain: "stats", title: "Permutations",
    difficulty: "medium", tags: ["counting"],
    stem: "How many ways to award gold/silver/bronze to 8 runners (no ties)?",
    choices: ["336", "56", "24", "512"],
    answer: 0,
    explanation: "P(8,3)=8·7·6=336."
  },
  {
    id: "S006", domain: "stats", title: "Normal Rule",
    difficulty: "medium", tags: ["normal"],
    stem: "In a roughly normal distribution, about what percent of data lie within 1 SD of the mean?",
    choices: ["68%", "95%", "99.7%", "50%"],
    answer: 0,
    explanation: "Empirical rule: ~68% within 1σ."
  },
  {
    id: "S007", domain: "stats", title: "Sampling Bias",
    difficulty: "easy", tags: ["sampling"],
    stem: "A principal emails only AP students to survey \"school lunch quality.\" The main problem is:",
    choices: ["Selection bias / nonrepresentative sample", "Too large a sample", "Measurement always invalid", "No bias present"],
    answer: 0,
    explanation: "AP-only sample is not representative of the whole school."
  },
  {
    id: "S008", domain: "stats", title: "Arithmetic Sequence",
    difficulty: "easy", tags: ["sequences"],
    stem: "For 5, 9, 13, 17, … the 20th term is:",
    choices: ["81", "85", "77", "80"],
    answer: 0,
    explanation: "aₙ=5+(n−1)·4 → a₂₀=5+76=81."
  },
  {
    id: "S009", domain: "stats", title: "Geometric Series",
    difficulty: "hard", tags: ["sequences"],
    stem: "Sum of infinite series 1/2 + 1/4 + 1/8 + … equals:",
    choices: ["1", "2", "1/2", "diverges"],
    answer: 0,
    explanation: "Geometric |r|<1: S=a/(1−r)=(1/2)/(1/2)=1."
  },
  {
    id: "S010", domain: "stats", title: "Matrix Multiply",
    difficulty: "hard", tags: ["matrices"],
    stem: "If A=[1 2; 0 1] and B=[3 0; 1 2], then AB =",
    choices: ["[5 4; 1 2]", "[3 0; 1 2]", "[4 4; 1 2]", "[5 2; 1 2]"],
    answer: 0,
    explanation: "Row·col: top-left 1·3+2·1=5; top-right 1·0+2·2=4; bottom-left 0·3+1·1=1; bottom-right 0·0+1·2=2."
  },
  {
    id: "S011", domain: "stats", title: "Set Operations",
    difficulty: "medium", tags: ["sets"],
    stem: "If U={1..10}, A={2,4,6,8}, B={3,4,5,6}, then |A∪B| =",
    choices: ["6", "4", "8", "2"],
    answer: 0,
    explanation: "A∪B={2,3,4,5,6,8}; size 6."
  },

  /* ===== PEDAGOGY ===== */
  {
    id: "P001", domain: "pedagogy", title: "Zone of Proximal Development",
    difficulty: "easy", tags: ["learning-theory"],
    stem: "Vygotsky’s ZPD is best described as the range of tasks a learner can do:",
    choices: [
      "With guidance but not yet independently",
      "Only after mastery of all prerequisites years earlier",
      "Without any social interaction",
      "Only through operant conditioning"
    ],
    answer: 0,
    explanation: "ZPD sits between independent performance and assisted performance."
  },
  {
    id: "P002", domain: "pedagogy", title: "Formative Assessment",
    difficulty: "easy", tags: ["assessment"],
    stem: "Which is primarily formative?",
    choices: [
      "Exit ticket used to adjust tomorrow’s lesson",
      "Final exam determining course grade only",
      "State end-of-year summative score alone",
      "College admissions SAT used by universities"
    ],
    answer: 0,
    explanation: "Formative assessment informs ongoing instruction."
  },
  {
    id: "P003", domain: "pedagogy", title: "Differentiation",
    difficulty: "medium", tags: ["differentiation"],
    stem: "A secondary math teacher offers tiered practice sets on the same standard (slope). This primarily differentiates by:",
    choices: ["Readiness / process or product complexity", "Ignoring standards", "Lowering expectations for all", "Removing scaffolds permanently"],
    answer: 0,
    explanation: "Tiered tasks keep the goal constant while adjusting challenge/support."
  },
  {
    id: "P004", domain: "pedagogy", title: "IEP Accommodation",
    difficulty: "medium", tags: ["inclusion"],
    stem: "A student with an IEP has extended time on assessments. The teacher should:",
    choices: [
      "Provide the accommodation as written and maintain confidentiality",
      "Announce the accommodation to the class for fairness",
      "Ignore it if the student seems capable",
      "Replace all tests with oral quizzes without documentation"
    ],
    answer: 0,
    explanation: "Legal/ethical duty: implement IEP accommodations and protect privacy."
  },
  {
    id: "P005", domain: "pedagogy", title: "Motivation",
    difficulty: "medium", tags: ["motivation"],
    stem: "Which strategy best supports intrinsic motivation in Algebra I?",
    choices: [
      "Offer meaningful choice and connect tasks to student goals",
      "Only use public ranking charts for every quiz",
      "Punish mistakes harshly to increase effort",
      "Remove all challenge so everyone always succeeds instantly"
    ],
    answer: 0,
    explanation: "Autonomy, relevance, and appropriate challenge support intrinsic motivation."
  },
  {
    id: "P006", domain: "pedagogy", title: "Classroom Management",
    difficulty: "medium", tags: ["management"],
    stem: "The most proactive approach to reducing off-task behavior is:",
    choices: [
      "Clear routines, engaging instruction, and consistent expectations",
      "Waiting until chaos occurs then assigning detention only",
      "Ignoring all behavior forever",
      "Comparing students publicly"
    ],
    answer: 0,
    explanation: "Prevention via structure and engagement outperforms pure reaction."
  },
  {
    id: "P007", domain: "pedagogy", title: "Family Communication",
    difficulty: "easy", tags: ["families"],
    stem: "Best first step when a student suddenly disengages:",
    choices: [
      "Contact family with specific observations and invite collaboration",
      "Assume laziness and lower the grade silently",
      "Discuss confidential details with other students",
      "Remove the student from class permanently without process"
    ],
    answer: 0,
    explanation: "Partner with families using concrete, respectful communication."
  },
  {
    id: "P008", domain: "pedagogy", title: "Ethics & Confidentiality",
    difficulty: "hard", tags: ["ethics"],
    stem: "A colleague asks to see a student’s cumulative file out of curiosity. You should:",
    choices: [
      "Decline; share records only with legitimate educational interest",
      "Share freely because staff always have access",
      "Post scores on a hallway bulletin",
      "Email the full file to the whole department"
    ],
    answer: 0,
    explanation: "FERPA-style ethics: need-to-know educational interest only."
  },
  {
    id: "P009", domain: "pedagogy", title: "Backwards Design",
    difficulty: "medium", tags: ["planning"],
    stem: "In UbD/backwards design, teachers first identify:",
    choices: [
      "Desired results / learning goals",
      "Cute activities with no targets",
      "Only textbooks pages randomly",
      "Punishment systems"
    ],
    answer: 0,
    explanation: "Goals → evidence → learning plan."
  },
  {
    id: "P010", domain: "pedagogy", title: "Wait Time",
    difficulty: "easy", tags: ["instruction"],
    stem: "Increasing wait time after questions typically:",
    choices: [
      "Improves response quality and participation",
      "Always decreases learning",
      "Only helps the fastest students",
      "Violates professional standards"
    ],
    answer: 0,
    explanation: "Wait time supports deeper thinking and broader participation."
  }
];

/* Fix A009 answer */
(function () {
  const p = window.PROBLEMS.find(x => x.id === "A009");
  if (p) {
    p.choices = ["3", "1", "−1", "5"];
    p.answer = 0;
    p.explanation = "f(−3)=−3+2=−1; f(2)=4; sum=3.";
  }
  const n5 = window.PROBLEMS.find(x => x.id === "N005");
  if (n5) {
    n5.choices = ["11 + 10i", "3 − 8i", "−5 + 10i", "11 − 10i"];
  }
})();
