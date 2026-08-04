/* Adult-from-scratch mastery lessons -- NES Mathematics NT304 competencies 0014-0016 */
(function () {
  function section(heading, prerequisite, meaning, model, example1, example2, guided, mistake, checks) {
    return {
      heading,
      body: `
        <div class="callout"><strong>Prerequisite reminder:</strong> ${prerequisite}</div>
        <p><strong>Plain meaning:</strong> ${meaning}</p>
        <div class="formula"><strong>Visual model</strong><br>${model}</div>
        <div class="worked-example">
          <div class="we-label">Worked Example 1 — ${example1.label}</div>
          <p>${example1.problem}</p>
          <ol class="we-steps">${example1.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          <p class="we-answer">${example1.answer}</p>
        </div>
        <div class="worked-example">
          <div class="we-label">Worked Example 2 — ${example2.label}</div>
          <p>${example2.problem}</p>
          <ol class="we-steps">${example2.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          <p class="we-answer">${example2.answer}</p>
        </div>
        <div class="callout"><strong>Guided practice:</strong> ${guided.problem}<br><strong>Hint / partial setup:</strong> ${guided.hint}</div>
        <div class="callout"><strong>Common mistake:</strong> ${mistake}</div>
      `,
      checks
    };
  }

  const check = (prompt, choices, answer, explain) => ({ prompt, choices, answer, explain });

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "st-01": {
      title: "Data displays & descriptive statistics",
      domain: "stats",
      intro: `<p><strong>NES NT304 competency 0014:</strong> Start with what the data describe, then use displays and statistics to explain center, spread, shape, and unusual values.</p>`,
      sections: [
        section(
          "Context, center, and shape",
          "A data set is a collection of values. Sort values before finding the median; the mean is the total divided by the count.",
          "Statistics answer a real question. First name the people or objects, the variable, and its units. Then inspect the shape. Use the mean for roughly symmetric data without strong outliers; use the median for skewed data or outliers.",
          `Context → shape → useful center<br>
          Monthly repair bills ($): 40, 45, 50, 55, 310<br>
          40  45  50  55 ---------------- 310<br>
          median = 50; mean = 100; long right tail`,
          {
            label: "customer perspective",
            problem: "A renter wants a typical monthly repair bill from $40, $45, $50, $55, and $310.",
            steps: [
              "<strong>Context first:</strong> the variable is monthly repair cost in dollars; the renter wants a typical bill.",
              "<strong>Inspect:</strong> $310 is far beyond the other four values, creating right skew.",
              "<strong>Compare:</strong> mean = 500/5 = $100; median = $50.",
              "<strong>Interpret:</strong> $50 sits among ordinary bills, so it better answers the renter's question."
            ],
            answer: "Answer: Report the median, $50; mention the $310 unusual bill."
          },
          {
            label: "manager perspective",
            problem: "Two shifts have wait times A: 8, 9, 10, 11, 12 and B: 2, 8, 10, 12, 18. Compare them.",
            steps: [
              "Both sets concern wait time in minutes, and both have mean 10 and median 10.",
              "Shift A is tightly packed; Shift B reaches much farther below and above 10.",
              "A manager should not say the shifts are equivalent: their centers match, but B is less consistent."
            ],
            answer: "Answer: Same center; Shift B has greater spread."
          },
          { problem: "Salaries are $42k, $44k, $45k, $47k, and $180k. Choose a typical salary.", hint: "Name the variable and units; sketch the values; compare mean with the middle value." },
          "Choosing a statistic before considering context and shape. Also remember: the mean is pulled toward the tail, so mean greater than median suggests right skew.",
          [
            check("House prices cluster near $300,000 with three multimillion-dollar homes. Which center best describes a typical house?", ["Median, because high outliers pull the mean upward", "Mean, because it must equal a listed price", "Range, because it is a center", "Mode, because every set has one"], 0, "The question asks for a typical price in a right-skewed distribution, so the resistant median is best."),
            check("A distribution has mean 28 and median 35. What shape is most plausible?", ["Left-skewed; low values pull the mean left", "Right-skewed; high values pull the mean down", "Perfectly symmetric", "No conclusion about shape is possible"], 0, "The mean is pulled toward the tail. Mean below median points to a left tail.")
          ]
        ),
        section(
          "Spread and standard deviation",
          "A deviation is value minus mean. Squaring makes negative and positive deviations contribute instead of canceling.",
          "Spread describes consistency. Range uses only endpoints; IQR describes the middle 50%; standard deviation describes typical distance from the mean in the original units.",
          `value:       2   4   6   8  10<br>
          mean = 6<br>
          deviation:  -4  -2   0  +2  +4<br>
          population σ = √[Σ(x−μ)²/n]`,
          {
            label: "conceptual comparison",
            problem: "Machines A and B both fill a mean of 500 mL. A has σ=2 mL; B has σ=18 mL.",
            steps: [
              "The equal means say their average fills match.",
              "The smaller σ says A's fills stay closer to 500 mL.",
              "This is a consistency conclusion, not a claim that A's mean is higher."
            ],
            answer: "Answer: Machine A is more consistent."
          },
          {
            label: "calculation",
            problem: "Find the population standard deviation of 2, 4, 6, 8, 10.",
            steps: [
              "Mean μ = 30/5 = 6.",
              "Deviations are −4, −2, 0, 2, 4; squares are 16, 4, 0, 4, 16.",
              "Variance = 40/5 = 8; σ = √8 ≈ 2.83."
            ],
            answer: "Answer: Population σ ≈ 2.83."
          },
          { problem: "Find the population σ of 3, 3, 7, 7.", hint: "μ=5. Start the square table: (3−5)²=4, (3−5)²=4, ..." },
          "Stopping at variance. Variance is in squared units; standard deviation requires the final square root. Use n for a population and n−1 only when asked for sample standard deviation.",
          [
            check("For 1, 1, 5, 5, what is the population standard deviation?", ["2", "4", "8", "√2"], 0, "Mean 3; squared deviations total 16; variance 16/4=4; σ=2."),
            check("Every score in a data set is increased by 7. What happens?", ["Mean rises by 7; standard deviation is unchanged", "Both rise by 7", "Mean is unchanged; standard deviation rises by 7", "Both are unchanged"], 0, "A common shift changes center but preserves every distance and therefore preserves spread.")
          ]
        ),
        section(
          "Histograms and box plots",
          "Quartiles split ordered data into four parts. IQR=Q3−Q1. Histogram bars represent intervals, not individual categories.",
          "A histogram reveals shape and frequency; a box plot compresses data into minimum, Q1, median, Q3, and maximum. Use both as evidence rather than treating a picture as decoration.",
          `Histogram: 0–9 |■■  10–19 |■■■■■  20–29 |■■■<br>
          Box plot: min ──[ Q1 ──|median|──── Q3 ]── max<br>
          middle 50% = box; IQR = Q3−Q1`,
          {
            label: "reading a display",
            problem: "A histogram has frequencies 2, 5, and 3 in intervals 0–9, 10–19, and 20–29.",
            steps: [
              "The tallest bar is 10–19, so that interval contains the most observations.",
              "Total observations = 2+5+3 = 10.",
              "The graph does not reveal exact values inside each interval, so an exact mean cannot be recovered."
            ],
            answer: "Answer: Modal interval 10–19; n=10; exact mean is unavailable."
          },
          {
            label: "box-plot decision",
            problem: "A box plot has Q1=18, median=24, Q3=30. Is 50 an outlier by the 1.5·IQR rule?",
            steps: [
              "IQR = 30−18 = 12.",
              "Upper fence = 30+1.5(12)=48.",
              "Because 50>48, it is flagged as an outlier."
            ],
            answer: "Answer: Yes; 50 lies beyond the upper fence 48."
          },
          { problem: "For Q1=12 and Q3=20, test whether 34 is an outlier.", hint: "IQR=8; upper fence = 20+1.5(8)=___." },
          "Assuming a histogram gives exact raw values, or calling every point beyond Q1 or Q3 an outlier. Outliers lie beyond the fences, not merely outside the box.",
          [
            check("A box plot has Q1=10 and Q3=22. What is its IQR?", ["12", "32", "16", "6"], 0, "IQR=Q3−Q1=22−10=12."),
            check("Which statement about a histogram is valid?", ["Its bar heights show frequencies in intervals", "It always reveals every exact data value", "Its bars must be separated like categories", "It directly marks Q1 and Q3"], 0, "Histogram bars summarize numerical intervals and their frequencies.")
          ]
        )
      ]
    },

    "st-02": {
      title: "Sampling, bias & study design",
      domain: "stats",
      intro: `<p><strong>NES NT304 competency 0014:</strong> Judge how samples and studies support—or fail to support—claims about populations and causes.</p>`,
      sections: [
        section(
          "Population, sample, and sampling methods",
          "A population is the entire group of interest; a sample is the smaller group actually measured.",
          "A representative sample supports generalization. Random selection helps represent a population; it is different from random assignment, which creates comparable treatment groups.",
          `Population (all 1,200 students)<br>
          ├─ Grade 9 → random 20<br>├─ Grade 10 → random 20<br>└─ Grade 11 → random 20<br>
          = stratified sample from every stratum`,
          {
            label: "representation goal",
            problem: "A district wants each grade represented proportionally in a survey.",
            steps: [
              "Divide students into grade-level strata.",
              "Randomly select within every grade, using proportional counts.",
              "Because every subgroup contributes, this is stratified random sampling."
            ],
            answer: "Answer: Use a proportional stratified random sample."
          },
          {
            label: "cost goal",
            problem: "A state randomly chooses 6 schools and surveys every teacher in those schools.",
            steps: [
              "Schools are natural groups, or clusters.",
              "Only some whole clusters are chosen; everyone in those clusters is surveyed.",
              "This lowers travel cost but can have more sampling variation if schools differ."
            ],
            answer: "Answer: Cluster sampling."
          },
          { problem: "A factory inspects every 25th product after a random starting point.", hint: "The repeated interval k=25 identifies the method." },
          "Confusing stratified with cluster: stratified samples some members from every group; cluster selects some whole groups. Convenience samples are easy, not reliably representative.",
          [
            check("A researcher randomly draws 100 names from a complete employee list. What method is this?", ["Simple random sample", "Cluster sample", "Convenience sample", "Voluntary response"], 0, "Each listed employee has an equal random chance, which defines an SRS."),
            check("Which method samples randomly from every age group?", ["Stratified sampling", "Cluster sampling", "Systematic sampling", "Convenience sampling"], 0, "Age groups are strata, and each stratum contributes a random sample.")
          ]
        ),
        section(
          "Bias and better surveys",
          "Random error varies by chance; bias consistently pushes results in a direction. A larger sample reduces random error but does not repair bias.",
          "Ask two separate questions: who could enter the sample, and how were answers elicited? Undercoverage, nonresponse, voluntary response, and leading wording can each distort conclusions.",
          `Target population → sampling frame → invited → responded<br>
          missing from frame = undercoverage<br>
          invited but silent = nonresponse<br>
          chose themselves = voluntary response`,
          {
            label: "sampling-frame diagnosis",
            problem: "A city surveys only landline numbers about late-night transit.",
            steps: [
              "The target is all city adults, but the frame contains only landline users.",
              "Adults without landlines cannot be selected.",
              "This systematic exclusion is undercoverage, a form of selection bias."
            ],
            answer: "Answer: Undercoverage; use a broader address- or resident-based frame."
          },
          {
            label: "question-design diagnosis",
            problem: "A poll asks, “Should wasteful spending on the unnecessary park continue?”",
            steps: [
              "Words such as “wasteful” and “unnecessary” signal a preferred response.",
              "Even a perfect random sample can be pushed by this wording.",
              "Rewrite neutrally: “Should current funding for the park continue?”"
            ],
            answer: "Answer: Leading-wording bias."
          },
          { problem: "An optional app poll gets 50,000 replies. Can it represent all voters?", hint: "Focus on who chose to reply, not the impressive sample size." },
          "Saying “large n means unbiased.” A huge voluntary-response sample can be precisely wrong because strong opinions are overrepresented.",
          [
            check("Only 35% of randomly contacted people answer a survey. What concern is most direct?", ["Nonresponse bias", "Cluster bias", "Experimental bias", "No concern because contact was random"], 0, "Respondents may differ systematically from those who did not answer."),
            check("What does increasing a biased sample from 500 to 50,000 mainly do?", ["Reduce random error without removing systematic bias", "Guarantee representativeness", "Create random assignment", "Eliminate leading wording"], 0, "Sample size addresses chance variation, not a flawed selection or question process.")
          ]
        ),
        section(
          "Correlation, experiments, and causation",
          "Correlation means two variables move together. A lurking or confounding variable can influence both. Treatment is the condition imposed in an experiment.",
          "Observational studies can reveal association, not causation. A randomized experiment can support causation because random assignment tends to balance confounders. Random selection supports population generalization; random assignment supports cause-and-effect.",
          `Observed: exercise ↔ lower stress<br>
          possible confounder: income → exercise AND stress<br><br>
          Experiment: volunteers ─random assignment─┬→ exercise plan<br>
                                                   └→ control`,
          {
            label: "correlation claim",
            problem: "People who carry lighters have higher lung-cancer rates. Do lighters cause cancer?",
            steps: [
              "No treatment was assigned; this is observational.",
              "Smoking is a confounder associated with carrying lighters and with cancer.",
              "The data show correlation, not that the lighter is causal."
            ],
            answer: "Answer: No causal conclusion; smoking is a plausible confounder."
          },
          {
            label: "causal design",
            problem: "Test whether a new study app improves scores.",
            steps: [
              "Recruit participants and randomly assign them to app or comparison conditions.",
              "Keep testing time and outcome measurement alike; blind scorers if possible.",
              "A meaningful difference can then be attributed to the app for these participants, subject to study limits."
            ],
            answer: "Answer: Random assignment creates the basis for a causal claim."
          },
          { problem: "A survey finds coffee drinkers sleep less. Write a defensible conclusion.", hint: "Use the word “associated,” then name one possible confounder such as work schedule." },
          "Treating correlation as causation, or confusing random selection with random assignment. Neither a large sample nor a strong correlation by itself rules out confounding.",
          [
            check("A records study finds tutoring and higher grades are associated. What is justified?", ["An association exists; self-selection may confound it", "Tutoring definitely caused every gain", "Random assignment occurred", "The variables are unrelated"], 0, "Records are observational; motivation could affect both tutoring use and grades."),
            check("Which feature most directly permits a causal conclusion?", ["Random assignment to treatment and control", "A very large convenience sample", "A correlation near 1", "A colorful graph"], 0, "Random assignment balances confounders on average and isolates treatment effects.")
          ]
        )
      ]
    },

    "st-03": {
      title: "Probability rules & conditionals",
      domain: "stats",
      intro: `<p><strong>NES NT304 competency 0015:</strong> Build sample spaces first, then reason with complements, trees, overlaps, independence, and restricted sample spaces.</p>`,
      sections: [
        section(
          "Sample spaces and complements",
          "A probability is favorable equally likely outcomes divided by all outcomes. An event is a subset of the sample space.",
          "List or model outcomes before choosing a formula. “Not A” is the complement: every outcome outside A, so P(not A)=1−P(A).",
          `Two coin flips tree:<br>
          start ─H─┬─H → HH<br>          │   └─T → HT<br>
          └────T─┬─H → TH<br>              └─T → TT<br>
          S={HH,HT,TH,TT}`,
          {
            label: "explicit list",
            problem: "Roll one die. Find P(result is not a multiple of 3).",
            steps: [
              "Sample space S={1,2,3,4,5,6}.",
              "Multiples of 3 are {3,6}; their complement is {1,2,4,5}.",
              "Four of six equally likely outcomes qualify: 4/6=2/3."
            ],
            answer: "Answer: 2/3."
          },
          {
            label: "tree counting",
            problem: "Flip two fair coins. Find P(exactly one head).",
            steps: [
              "The tree gives four equally likely leaves: HH, HT, TH, TT.",
              "Exactly one head occurs at HT and TH.",
              "Thus P=2/4=1/2."
            ],
            answer: "Answer: 1/2."
          },
          { problem: "Roll two dice and find P(sum 7).", hint: "Use the 36 ordered pairs. Begin (1,6), (2,5), (3,4), ..." },
          "Counting labels instead of equally likely outcomes. Dice sums are not equally likely: sum 7 has six ordered pairs, while sum 2 has one.",
          [
            check("For two fair coin flips, what is P(at least one head)?", ["3/4", "1/2", "1/4", "2/3"], 0, "Only TT has no heads, so use the complement: 1−1/4=3/4."),
            check("Two dice are rolled. How many ordered outcomes are in the sample space?", ["36", "12", "11", "6"], 0, "Each first-die result pairs with six second-die results: 6×6=36.")
          ]
        ),
        section(
          "Trees, multiplication, and independence",
          "“And” means a complete path or intersection. Multiply probabilities along a tree path; add probabilities of separate qualifying paths.",
          "Independent events leave later probabilities unchanged. Without replacement usually creates dependence, so branch probabilities must be updated.",
          `Bag: 3R, 2B without replacement<br>
          start ─R 3/5─┬─R 2/4 → RR: (3/5)(2/4)<br>
          │            └─B 2/4<br>
          └────B 2/5─┬─R 3/4<br>                       └─B 1/4`,
          {
            label: "independent devices",
            problem: "Flip a fair coin and roll a die. Find P(head and number above 4).",
            steps: [
              "Coin outcomes do not change die outcomes, so the events are independent.",
              "P(head)=1/2 and P(above 4)=2/6=1/3.",
              "Multiply along the joint path: (1/2)(1/3)=1/6."
            ],
            answer: "Answer: 1/6."
          },
          {
            label: "dependent draws",
            problem: "From 3 red and 2 blue marbles, draw two without replacement. Find P(same color).",
            steps: [
              "RR path: (3/5)(2/4)=6/20.",
              "BB path: (2/5)(1/4)=2/20.",
              "These paths cannot both occur, so add: 8/20=2/5."
            ],
            answer: "Answer: 2/5."
          },
          { problem: "From 4 green and 6 yellow marbles, draw two without replacement. Find P(both green).", hint: "First branch is 4/10; after green, the second branch is ___/9." },
          "Reusing the original denominator after a no-replacement draw. The bag changed, so both numerator and denominator may change.",
          [
            check("A card is drawn, replaced, shuffled, then another is drawn. Are the draws independent?", ["Yes, replacement restores the original probabilities", "No, two draws are always dependent", "Only if the first card is red", "Only for face cards"], 0, "Replacement resets the deck composition before the second draw."),
            check("A bag has 5 red and 3 blue marbles. P(two red without replacement) equals:", ["(5/8)(4/7)=5/14", "(5/8)(5/8)=25/64", "10/15", "4/8"], 0, "After one red is removed, four red remain among seven marbles.")
          ]
        ),
        section(
          "Venn diagrams, addition, and conditionals",
          "A∪B means A or B (including both); A∩B means both. Conditional language “given B” tells you to ignore everything outside B.",
          "First restrict the sample space to the given event; only then use notation. Inside B, compare the A∩B region with all of B: P(A|B)=P(A∩B)/P(B). For “or,” Venn overlap is counted twice and must be subtracted once.",
          `Venn counts (total 40):<br>
          A only 12 | A∩B 8 | B only 10 | neither 10<br>
          restricted to B: [8 overlap + 10 B-only] = 18<br>
          P(A|B)=8/18;  |A∪B|=12+8+10`,
          {
            label: "inclusion reasoning",
            problem: "In 40 people, 20 like tea, 18 like coffee, and 8 like both. Find P(tea or coffee).",
            steps: [
              "Picture the overlap: adding 20+18 counts the eight “both” people twice.",
              "Subtract one copy: union count =20+18−8=30.",
              "Probability =30/40=3/4."
            ],
            answer: "Answer: 3/4."
          },
          {
            label: "restricted-space reasoning",
            problem: "Using the same counts, find P(tea | coffee).",
            steps: [
              "“Given coffee” restricts attention to the 18 coffee drinkers.",
              "Within that restricted group, eight also like tea.",
              "Therefore P(tea|coffee)=8/18=4/9. This is not divided by 40."
            ],
            answer: "Answer: 4/9."
          },
          { problem: "Of 30 students, 18 work, 12 take evening classes, and 9 do both. Find P(evening | works).", hint: "Circle the 18 workers as the new sample space; 9 of them are in the overlap." },
          "Reversing the condition. P(A|B) and P(B|A) share the same overlap numerator but usually have different restricted denominators.",
          [
            check("If 24 people own bikes, 15 own scooters, and 6 own both, how many own at least one?", ["33", "39", "9", "45"], 0, "Venn reasoning gives 24+15−6=33."),
            check("Of 50 employees, 30 are remote and 12 are remote managers. What is P(manager | remote)?", ["12/30=40%", "12/50=24%", "30/50=60%", "18/30=60%"], 0, "The given event restricts the denominator to the 30 remote employees.")
          ]
        )
      ]
    },

    "st-04": {
      title: "Distributions: uniform, binomial, normal",
      domain: "stats",
      intro: `<p><strong>NES NT304 competency 0015:</strong> Recognize distribution models and calculate probabilities from their structure, not from memorized formulas alone.</p>`,
      sections: [
        section(
          "Uniform distributions",
          "Equal-length intervals have equal probability in a continuous uniform model; equally likely discrete outcomes each have the same probability.",
          "A continuous uniform probability is a length ratio. Draw the full interval, shade the valid requested part, and clip anything outside the support before dividing.",
          `0────────5████████15────────20<br>
          full support [0,20], length 20<br>
          shaded [5,15], length 10<br>
          probability = shaded length / total length`,
          {
            label: "continuous waiting time",
            problem: "A bus arrives uniformly from minute 0 to 20. Find P(arrival from 5 through 15).",
            steps: [
              "The whole interval has length 20−0=20.",
              "The shaded requested interval has length 15−5=10.",
              "Probability =10/20=1/2; individual endpoints have zero area, so inclusion does not change it."
            ],
            answer: "Answer: 1/2."
          },
          {
            label: "boundary clipping",
            problem: "A machine finishes uniformly from 0 to 40 minutes. Find P(finishing from minute 35 to 45).",
            steps: [
              "The support ends at 40, so 40–45 is impossible.",
              "Clip the request to [35,40], length 5.",
              "Probability =5/40=1/8."
            ],
            answer: "Answer: 1/8."
          },
          { problem: "X is uniform on [10,30]. Find P(18≤X≤26).", hint: "Draw [10,30]. Total length=20; shaded length=26−18." },
          "Using the requested width before clipping to the support, or counting continuous endpoints as extra outcomes.",
          [
            check("X is uniform on [0,50]. What is P(10≤X≤20)?", ["1/5", "1/2", "1/4", "2/5"], 0, "The desired length is 10 and total length is 50, giving 10/50=1/5."),
            check("X is uniform on [2,8]. What is P(X>8)?", ["0", "1/6", "1/2", "1"], 0, "Values beyond the model's support are impossible.")
          ]
        ),
        section(
          "Combinations first, then binomial probability",
          "A success/failure trial has two outcomes. A combination counts selections when order does not matter: choosing positions {1,3} is the same set as {3,1}.",
          "Before a binomial formula, list success arrangements. For exactly k successes in n trials, every arrangement has probability p^k(1−p)^(n−k), and C(n,k) counts the arrangements. Only after that reasoning: P(X=k)=C(n,k)p^k(1−p)^(n−k).",
          `Exactly 2 successes in 3 trials:<br>
          SSF   SFS   FSS  → 3 arrangements = C(3,2)<br>
          each path: p·p·(1−p)<br>
          total: 3p²(1−p)<br>
          Conditions: fixed n; two outcomes; constant p; independent trials`,
          {
            label: "listing before formula",
            problem: "A fair coin is flipped 3 times. Find P(exactly 2 heads).",
            steps: [
              "List the arrangements: HHT, HTH, THH. There are C(3,2)=3.",
              "Each arrangement has probability (1/2)^3=1/8.",
              "Add the three equal paths: 3/8. This produces the binomial formula rather than merely invoking it."
            ],
            answer: "Answer: 3/8."
          },
          {
            label: "unequal success probability",
            problem: "Four independent questions each have success probability 0.2. Find P(exactly one success).",
            steps: [
              "The success can occupy any one of four positions: SFFF, FSFF, FFSF, FFFS; count C(4,1)=4.",
              "Each arrangement has probability (0.2)(0.8)^3=0.1024.",
              "Multiply arrangement count by path probability: 4(0.1024)=0.4096."
            ],
            answer: "Answer: 0.4096."
          },
          { problem: "Five independent trials have p=0.3. Find P(exactly two successes).", hint: "First count the success-position sets: C(5,2)=10. Then one path has probability (0.3)²(0.7)³." },
          "Using a binomial model for draws without replacement from a small group: p changes. Also, “at least two” requires adding k=2,3,...,n, not one exact-k term.",
          [
            check("How many success arrangements produce exactly 3 successes in 5 trials?", ["C(5,3)=10", "5³=125", "3!=6", "5+3=8"], 0, "Choose which three of five positions are successes; their internal order does not matter."),
            check("For n=4 and p=1/2, what is P(exactly 2 successes)?", ["6/16=3/8", "2/16", "4/16", "8/16"], 0, "There are C(4,2)=6 arrangements, each with probability (1/2)^4=1/16.")
          ]
        ),
        section(
          "Normal distributions and shaded bands",
          "A normal distribution is symmetric and bell-shaped. Standard deviation σ marks distance from the mean μ.",
          "Master symmetric bands first: about 68% lies within 1σ, 95% within 2σ, and 99.7% within 3σ. Symmetry splits each centered band equally. Build asymmetric areas by joining familiar half-bands.",
          `−3σ   −2σ   −1σ    μ    +1σ   +2σ   +3σ<br>
          |.15%|2.35%|13.5%|34%|34%|13.5%|2.35%|.15%|<br>
          symmetric shade μ−σ █████████ μ+σ = 68%`,
          {
            label: "symmetric band first",
            problem: "Scores are normal with μ=70 and σ=5. Find the approximate percent from 60 to 80.",
            steps: [
              "60=70−2(5) and 80=70+2(5), so the band is symmetric within 2σ.",
              "The 68–95–99.7 rule assigns about 95% to this centered band."
            ],
            answer: "Answer: About 95%."
          },
          {
            label: "asymmetric band",
            problem: "For the same model, find the percent from 65 to 80.",
            steps: [
              "65 is −1σ; 80 is +2σ. Shade −1σ to μ and μ to +2σ.",
              "Area −1σ to μ is 34%. Area μ to +2σ is half of 95%, or 47.5%.",
              "Add adjoining bands: 34%+47.5%=81.5%."
            ],
            answer: "Answer: About 81.5%."
          },
          { problem: "A normal model has μ=100, σ=10. Find the approximate percent above 120.", hint: "120=μ+2σ. The 5% outside ±2σ is split symmetrically between two tails." },
          "Using the full two-tail percentage for one tail, or applying 68%, 95%, or 99.7% to an asymmetric interval without splitting it into bands.",
          [
            check("Approximately what percent of a normal distribution lies from μ−σ to μ+σ?", ["68%", "34%", "95%", "99.7%"], 0, "The empirical rule assigns about 68% to the centered one-standard-deviation band."),
            check("Approximately what percent lies above μ+2σ?", ["2.5%", "5%", "47.5%", "95%"], 0, "Five percent lies outside ±2σ, and symmetry gives 2.5% to each tail.")
          ]
        )
      ]
    },

    "st-05": {
      title: "Counting: permutations & combinations",
      domain: "stats",
      intro: `<p><strong>NES NT304 competency 0016:</strong> Build counting methods from order stories and organized choices before using factorial notation.</p>`,
      sections: [
        section(
          "Order stories and the counting principle",
          "A choice at one stage can be paired with every choice at the next stage. Multiply for successive stages; add separate, nonoverlapping cases.",
          "Ask the swap test: if swapping two selected people changes the outcome, order or role matters. Begin with slots and choices before factorial formulas.",
          `President slot × Treasurer slot<br>
          [ 5 choices ] → [ 4 choices ] = 20<br>
          swap Ana/Bo: Ana-President differs from Bo-President<br>
          Meal tree: 3 mains, each branches to 2 drinks → 3·2=6`,
          {
            label: "role story",
            problem: "Five adults choose a chair and a recorder.",
            steps: [
              "The chair slot has five choices.",
              "After choosing the chair, the recorder slot has four choices.",
              "Roles distinguish outcomes, so multiply: 5·4=20."
            ],
            answer: "Answer: 20 assignments."
          },
          {
            label: "product menu",
            problem: "A code uses one of 3 letters followed by one of 4 digits, with repetition allowed.",
            steps: [
              "The first stage has three choices.",
              "For each letter, the digit stage still has four choices.",
              "The branching model gives 3·4=12 codes."
            ],
            answer: "Answer: 12 codes."
          },
          { problem: "Six people fill speaker, timer, and host roles.", hint: "Draw three labeled slots. Choices are 6, then 5, then 4." },
          "Adding stage counts when every first choice pairs with every second choice. Add alternatives; multiply successive choices.",
          [
            check("Four shirts and three pants create how many outfits?", ["12", "7", "4", "3"], 0, "Each of four shirts pairs with each of three pants: 4·3=12."),
            check("Seven people fill two distinct offices. How many assignments?", ["42", "21", "14", "49"], 0, "Seven choices for the first role and six remaining choices for the second: 7·6=42.")
          ]
        ),
        section(
          "Permutations: order matters",
          "Factorial n! means n(n−1)...2·1. It records the shrinking choices when arranging n distinct objects.",
          "A permutation counts ordered selections. Derive it from slots: n choices, then n−1, continuing for r slots. This product is P(n,r)=n!/(n−r)!.",
          `Arrange 3 of 5 books:<br>
          slot 1 [5] → slot 2 [4] → slot 3 [3]<br>
          5·4·3 = 60 = 5!/(5−3)!`,
          {
            label: "partial arrangement",
            problem: "Award gold, silver, and bronze among eight finalists.",
            steps: [
              "The medals are distinct slots; swapping winners changes the result.",
              "Choices shrink 8, then 7, then 6.",
              "P(8,3)=8·7·6=336."
            ],
            answer: "Answer: 336 podium orders."
          },
          {
            label: "repeated objects",
            problem: "Count distinct arrangements of LEVEL.",
            steps: [
              "If all five letters were distinct there would be 5!=120 orders.",
              "The two Ls can swap invisibly (divide by 2!), and the two Es can also swap invisibly (divide by 2!).",
              "Distinct arrangements =5!/(2!2!)=120/4=30."
            ],
            answer: "Answer: 30."
          },
          { problem: "How many 4-character codes use distinct letters selected from 10 letters?", hint: "Four ordered slots have 10, 9, 8, and 7 choices." },
          "Using n^r when repetition is forbidden, or forgetting to divide by factorials for identical repeated objects.",
          [
            check("How many ways can 3 runners occupy first, second, and third among 6 runners?", ["120", "20", "18", "216"], 0, "The ordered slots give 6·5·4=120."),
            check("How many distinct arrangements does NOON have?", ["6", "24", "12", "4"], 0, "There are 4! raw orders divided by 2! for N and 2! for O: 24/4=6.")
          ]
        ),
        section(
          "Combinations: order does not matter",
          "A permutation counts ordered lists. A committee, hand, or chosen subset has no internal order.",
          "First count ordered selections, then notice each r-person group was counted r! times—once for every internal order. Divide: C(n,r)=P(n,r)/r!=n!/[r!(n−r)!].",
          `Choose 2 from {A,B,C}:<br>
          ordered: AB, BA | AC, CA | BC, CB<br>
          each pair appears 2!=2 times<br>
          3·2 / 2 = 3 combinations`,
          {
            label: "committee story",
            problem: "Choose a 3-person committee from 7 adults.",
            steps: [
              "The same three adults form one committee regardless of listing order.",
              "Ordered count is 7·6·5=210, but every committee appears 3!=6 times.",
              "C(7,3)=210/6=35."
            ],
            answer: "Answer: 35 committees."
          },
          {
            label: "case-based selection",
            problem: "From 5 teachers and 4 parents, choose 3 people with exactly 2 teachers.",
            steps: [
              "Choose the teacher subset: C(5,2)=10.",
              "Choose one parent: C(4,1)=4.",
              "Every teacher choice pairs with every parent choice: 10·4=40."
            ],
            answer: "Answer: 40 groups."
          },
          { problem: "Choose 4 books from 9 for a reading list with no order.", hint: "Start with P(9,4), then divide by 4!, or directly use C(9,4)." },
          "Using permutations for a hand or committee, and adding subgroup choices that must occur together. Multiply required stages; add mutually exclusive cases such as “exactly 3 or exactly 4.”",
          [
            check("How many 2-person teams can be chosen from 8 people?", ["28", "56", "16", "64"], 0, "Order does not matter: C(8,2)=8·7/2=28."),
            check("Choose 3 from 4 women and 5 men with exactly 1 woman. How many groups?", ["40", "30", "20", "90"], 0, "C(4,1)·C(5,2)=4·10=40.")
          ]
        )
      ]
    },

    "st-06": {
      title: "Sequences, series, matrices & sets",
      domain: "stats",
      intro: `<p><strong>NES NT304 competency 0016:</strong> Derive and use patterns, row-column matrix operations, and set models with inclusion-exclusion.</p>`,
      sections: [
        section(
          "Deriving sequences and series",
          "A sequence is an ordered list; a series is a sum of terms. Position counting starts with n=1.",
          "Derive the rule from the repeated action. Arithmetic sequences repeatedly add d, so reaching term n requires n−1 additions: a_n=a_1+(n−1)d. Geometric sequences repeatedly multiply by r, so a_n=a_1r^(n−1).",
          `Arithmetic: 5 ─+3→ 8 ─+3→ 11 ─+3→ 14<br>
          a4 = 5 + three 3s = 5+(4−1)3<br>
          Geometric: 2 ─×4→ 8 ─×4→ 32<br>
          a3 = 2·4²`,
          {
            label: "pattern derivation",
            problem: "Find the 20th term of 7, 11, 15, ...",
            steps: [
              "Consecutive differences are 4, so the pattern is arithmetic with d=4.",
              "From term 1 to term 20 are 19 jumps, not 20.",
              "a20=7+19(4)=83."
            ],
            answer: "Answer: 83."
          },
          {
            label: "series pairing",
            problem: "Find the sum of the first 10 terms of 3, 6, 9, ...",
            steps: [
              "The tenth term is 3+9(3)=30.",
              "Pair first+last: 3+30=33; second+next-to-last also equals 33.",
              "The average term is (3+30)/2=16.5, so S10=10(16.5)=165."
            ],
            answer: "Answer: 165."
          },
          { problem: "Find a6 for 5, 15, 45, ...", hint: "Ratios are 3. From a1 to a6 are five multiplications: a6=5·3^5." },
          "Using n rather than n−1 repeated changes. Also do not apply the infinite geometric sum a1/(1−r) unless |r|<1.",
          [
            check("What is a8 for arithmetic sequence 4, 9, 14, ...?", ["39", "44", "35", "49"], 0, "d=5 and there are seven jumps: 4+7(5)=39."),
            check("What is the infinite sum 12+6+3+...?", ["24", "21", "18", "It diverges"], 0, "r=1/2 has |r|<1, so S=12/(1−1/2)=24.")
          ]
        ),
        section(
          "Matrix multiplication by row and column",
          "Matrix dimensions are rows×columns. Addition is entrywise only for equal dimensions; multiplication is a different operation.",
          "For AB, the columns of A must equal the rows of B. Each output entry is one row of A dotted with one column of B. The result keeps the outer dimensions.",
          `A (2×3) · B (3×2) → AB (2×2)<br>
          [a b c] · [x]  = ax+by+cz<br>
                    [y]<br>
                    [z]<br>
          output entry (row 1,column 1) = row 1 of A · column 1 of B`,
          {
            label: "matrix-vector layout",
            problem: "Multiply [2 0; 1 3] by [4; 2].",
            steps: [
              "Dimensions (2×2)(2×1) are compatible; output is 2×1.",
              "First output: row [2,0]·column [4,2]=2(4)+0(2)=8.",
              "Second output: [1,3]·[4,2]=1(4)+3(2)=10."
            ],
            answer: "Answer: [8; 10]."
          },
          {
            label: "full row-column product",
            problem: "Compute [1 2; 3 4][2 1; 0 5].",
            steps: [
              "Top-left: [1,2]·[2,0]=2. Top-right: [1,2]·[1,5]=11.",
              "Bottom-left: [3,4]·[2,0]=6. Bottom-right: [3,4]·[1,5]=23.",
              "Place each dot product in its row-column position."
            ],
            answer: "Answer: [2 11; 6 23]."
          },
          { problem: "Compute the top-right entry of [2 1; 0 3][4 2; 5 1].", hint: "Use row 1 of the first matrix [2,1] and column 2 of the second [2,1]." },
          "Multiplying matching positions entry-by-entry, or assuming AB=BA. Matrix multiplication is generally not commutative.",
          [
            check("What size is (3×2)(2×4)?", ["3×4", "2×2", "3×2", "Undefined"], 0, "Inner dimensions 2 and 2 match; retain outer dimensions 3×4."),
            check("Compute [3 1][2; 4].", ["10", "11", "[6 4]", "Undefined"], 0, "The row-column dot product is 3(2)+1(4)=10.")
          ]
        ),
        section(
          "Sets, Venn reasoning, and inclusion-exclusion",
          "Union A∪B means in A or B or both; intersection A∩B means in both; a complement means outside the set.",
          "Reason from Venn regions before formulas. Adding set totals counts overlap twice, so subtract one overlap. For three sets, pairwise subtraction removes the center too many times, so add the triple intersection back once.",
          `Two-set Venn regions:<br>
          [ A only 10 | both 6 | B only 8 ]  outside 4<br>
          union = 10+6+8<br>
          equivalently |A|+|B|−|A∩B| = 16+14−6`,
          {
            label: "fill regions first",
            problem: "Of 30 adults, 18 use buses, 14 use trains, and 7 use both. How many use neither?",
            steps: [
              "Put 7 in the overlap. Then bus-only=18−7=11 and train-only=14−7=7.",
              "The union contains 11+7+7=25.",
              "Outside both circles: 30−25=5."
            ],
            answer: "Answer: 5 use neither."
          },
          {
            label: "three-set correction",
            problem: "Counts are |A|=20, |B|=18, |C|=15; pair intersections 7,6,5; triple intersection 2. Find the union.",
            steps: [
              "Adding individual circles gives 20+18+15=53 and overcounts pair overlaps.",
              "Subtract pair totals: 53−7−6−5=35. This subtraction removed the center one time too many.",
              "Add the triple region back: 35+2=37."
            ],
            answer: "Answer: |A∪B∪C|=37."
          },
          { problem: "In 40 people, 22 are in A, 17 in B, and 9 in both. Find neither.", hint: "Draw overlap 9; union=22+17−9=___; neither=40−union." },
          "Adding set totals without correcting overlap. In three-set problems, stopping after subtracting pairwise intersections loses the triple-overlap region.",
          [
            check("If |A|=16, |B|=13, and |A∩B|=5, what is |A∪B|?", ["24", "34", "18", "8"], 0, "The overlap was counted twice, so 16+13−5=24."),
            check("For three sets, why is the triple intersection added after subtracting pairwise overlaps?", ["Pairwise subtraction removes the center too many times", "Union excludes the center", "Intersections can never overlap", "To make every count positive"], 0, "The center was counted three times initially and then subtracted three times, leaving zero; it must appear once in the union.")
          ]
        )
      ]
    }
  });
})();
