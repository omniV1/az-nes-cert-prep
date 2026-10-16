/* Form F — three original NES 301 passage clusters that add new templates to the thinnest
   cluster kinds, so the cluster exam can rotate them without repeating a structure:
   informational (a sponsored opinion poll with margins of error), paired sources (a study
   abstract and the news story that reports it), and technical (an over-the-counter medicine
   label with a dosing table). All passages are original; the label is fictional, written for
   reading practice, and is not medical advice. Same design rules as Form E: every distractor is a
   plausible misreading and every option has its own explanation. */
(function () {
  const P = {
    poll: `CANYON COUNTY SCHOOL BOND SURVEY — Summary of results (October 2026)

Desert Research Group interviewed 612 likely voters by phone and text from September 18 to 24. The margin of error is ±4 percentage points for the full sample, ±8 points for parents of current students, and ±5 points for voters with no children in district schools.

Question: “If the election were held today, would you vote for Measure K, a $95 million bond to replace school roofs and cooling systems?”

Response      All likely voters (612)   Parents (148)   No children in district (464)
Yes           51%                       63%             47%
No            41%                       30%             45%
Undecided      8%                        7%              8%

Notes. Measure K needs a simple majority to pass. The survey was paid for by Friends of Measure K, the campaign supporting the bond; Desert Research Group wrote the questions and publishes the full questionnaire online. Earlier in the questionnaire, before the vote question, respondents heard a description of classrooms where roofs leaked during last summer’s storms. A survey is a snapshot of opinion during its field dates, not a forecast of who will turn out in November.`,

    study: `SOURCE A — Journal of School Health Research (2026), study abstract

Researchers followed 2,400 ninth graders in 14 Arizona high schools for one school year. Students who reported reading for pleasure at least 30 minutes a day scored 4 percentile points higher on the end-of-year reading test than students who reported no pleasure reading, after adjusting for prior test scores and family income. Because students chose how much to read, the study cannot show that pleasure reading caused the higher scores; students who already enjoy reading may differ in ways the study did not measure. The authors call for a randomized trial.

SOURCE B — Valley Courier, March 3
“30 Minutes a Day Boosts Teen Test Scores, Study Finds”

Want better grades? Hand your teenager a novel. A major new study of 2,400 Arizona students proves that reading for fun just half an hour a day raises test scores. “This is a simple fix every family can make,” said Ana Ruiz, a Glendale parent who was not involved in the research. The study’s lead author, Dr. Kenji Watanabe, called the results “encouraging.” Local libraries report that summer-reading sign-ups are already up 12 percent.`,

    label: `DRUG FACTS — COOLREST CHILDREN’S FEVER & PAIN (fictional label written for reading practice; not medical advice)

Active ingredient (in each 5 mL): Acetaminophen 160 mg ............ Purpose: Pain reliever / fever reducer

Uses: temporarily relieves minor aches and pains due to the common cold, flu, sore throat, and headache; temporarily reduces fever.

Warnings
Liver warning: This product contains acetaminophen. Severe liver damage may occur if your child takes more than 5 doses in 24 hours, or takes it with other drugs containing acetaminophen.
Do not use with any other drug containing acetaminophen (prescription or nonprescription). If you are not sure whether a drug contains acetaminophen, ask a doctor or pharmacist.
Ask a doctor before use if your child has liver disease.
Stop use and ask a doctor if pain gets worse or lasts more than 5 days, or fever gets worse or lasts more than 3 days.

Directions
• Find the right dose on the chart below. If possible, use weight to dose; otherwise, use age.
• Use only the enclosed dosing cup. Do not use any other dosing device.
• Repeat every 4 hours while symptoms last. Do not give more than 5 times in 24 hours.

Weight (lb)      Age (yr)        Dose (mL)
under 24         under 2         ask a doctor
24–35            2–3             5 mL
36–47            4–5             7.5 mL
48–59            6–8             10 mL
60–71            9–10            12.5 mL
72–95            11              15 mL`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: P[set], stem, options, explanation
  });

  const items = [
    /* ---- Sponsored bond poll: margins of error, subgroups, question order ---- */
    item("LF253", "reading", "Bond poll — best-supported claim", ["informational", "graphics"], ["text-graphics", "informational-texts"], "poll",
      "Which claim is best supported by the survey summary?",
      [o("LF253-lead", "Yes leads No by 10 points, more than the ±4-point margin.",
          "51 − 41 = 10, which is larger than the full-sample margin.", true),
       o("LF253-pass", "Measure K will pass in November, because 51% of likely voters already support it.",
          "The notes call the survey a snapshot, not a forecast, and 51% is within 4 points of 50%."),
       o("LF253-oppose", "Most voters with no children in district schools oppose the bond.",
          "Only 45% of that group said No; 47% said Yes."),
       o("LF253-nothing", "Nothing can be concluded from the survey, because the campaign paid for it.",
          "Over-hedged. Sponsorship is a reason for scrutiny, and the independent firm published its questionnaire; the full-sample lead is still a finding.")],
      "Compare a gap with the margin of error for that group, and keep a snapshot of opinion separate from a prediction."),

    item("LF254", "reading", "Bond poll — the headline claim", ["informational", "evidence"], ["evidence-credibility", "text-graphics"], "poll",
      "A campaign flyer says, “Measure K wins with 51%!” The claim is weakest because—",
      [o("LF254-parents", "parents made up only 148 of the 612 people who answered the survey",
          "True, but the 51% figure is for all likely voters, so the subgroup size is not the flaw."),
       o("LF254-snapshot", "it was taken in September, and 51% is within 4 points of 50%",
          "The summary itself warns against forecasting, and a 4-point margin leaves the majority uncertain.", true),
       o("LF254-undecided", "the 8% who were undecided must break against the measure",
          "Nothing in the summary says how undecided voters will decide."),
       o("LF254-majority", "51% is not enough for a simple majority",
          "51% is a majority; the problem is the uncertainty and timing, not the arithmetic.")],
      "A poll result becomes an overclaim when it is reported as a final outcome or treated as more precise than its margin allows."),

    item("LF255", "reading", "Bond poll — question order", ["informational", "evidence"], ["evidence-credibility"], "poll",
      "Which detail most reasonably raises concern that the survey itself nudged respondents toward Yes?",
      [o("LF255-online", "The firm publishes the full questionnaire online.",
          "Publishing the questions lets readers check them; it is a strength, not a source of bias."),
       o("LF255-phone", "Interviews were conducted by phone and text.",
          "The mode affects who answers, but nothing here suggests it favored Yes."),
       o("LF255-margin", "The parent subgroup has a margin of error of ±8 points.",
          "A wide margin makes the parent figures less precise; it does not push answers in one direction."),
       o("LF255-roofs", "Respondents heard about leaking roofs just before the vote question.",
          "Describing the problem the bond would fix, right before asking about the bond, can prime support.", true)],
      "Check what respondents heard before the key question. Question order can shape answers even when the question itself is neutral."),

    item("LF256", "reading", "Bond poll — reading a subgroup", ["informational", "graphics"], ["text-graphics"], "poll",
      "A reporter describes voters with no children in district schools as “evenly split.” That description is reasonable because—",
      [o("LF256-margin", "Yes (47%) and No (45%) differ by less than the ±5-point margin",
          "A 2-point gap inside a 5-point margin cannot be told apart from a tie.", true),
       o("LF256-undecided", "their undecided share (8%) is the same as the undecided share of the full sample",
          "Matching undecided shares says nothing about the split between Yes and No."),
       o("LF256-size", "they make up most of the 612 respondents",
          "Group size affects the margin, but it is not why the split is even."),
       o("LF256-overall", "the overall result is close to 50%",
          "The reporter is describing one subgroup, so the full-sample figure is the wrong evidence.")],
      "Use the margin of error for the group being described, not the full sample’s."),

    item("LF257", "reading", "Bond poll — “snapshot”", ["informational", "vocabulary"], ["vocab-strategies", "informational-texts"], "poll",
      "In the notes, calling the survey “a snapshot of opinion during its field dates” most nearly means the results—",
      [o("LF257-quick", "were collected over only a week, too quickly to reflect real opinion",
          "The phrase is about what the results represent, not whether the method was rushed."),
       o("LF257-parents", "reflect mainly the views of parents",
          "The survey reports all likely voters and two subgroups."),
       o("LF257-time", "show what people said September 18–24, not a November result",
          "A snapshot captures one moment; the sentence contrasts it with a forecast of November turnout.", true),
       o("LF257-weekly", "will be updated as new responses arrive",
          "Nothing says the survey continues; the field dates are closed.")],
      "Read a figurative phrase against the contrast the writer sets up: here, snapshot versus forecast."),

    /* ---- Study abstract and the news story that reports it ---- */
    item("LF258", "reading", "Study vs story — the headline", ["paired", "evidence"], ["evidence-credibility", "informational-texts"], "study",
      "Source B’s headline misrepresents Source A mainly because it—",
      [o("LF258-sample", "inflates the number of students studied",
          "Both sources say 2,400 students."),
       o("LF258-cause", "turns a link the authors could not prove was causal into a cause",
          "The abstract explicitly says the study cannot show causation; “boosts” asserts it.", true),
       o("LF258-minutes", "misstates the daily reading time",
          "Both sources say 30 minutes, or half an hour."),
       o("LF258-state", "leaves out that every student in the study attended school in Arizona",
          "The article names Arizona in its first paragraph, and location is not the distortion.")],
      "When a news story reports a study, compare its verbs (boosts, proves, raises) with the study’s own limits."),

    item("LF259", "reading", "Study vs story — the missing limit", ["paired", "evidence"], ["evidence-credibility", "research-citation"], "study",
      "Which detail from Source A does Source B leave out that would most change a reader’s conclusion?",
      [o("LF259-income", "Scores were adjusted for prior scores and income.",
          "Omitted, but the adjustment makes the finding stronger, not weaker, so leaving it out does not mislead much."),
       o("LF259-schools", "The students attended 14 different high schools.",
          "A sampling detail that does not change what the finding means."),
       o("LF259-grade", "The students were ninth graders.",
          "Useful context, but the article’s main error is about cause, not grade level."),
       o("LF259-cause", "The study cannot show that reading caused the higher scores.",
          "This is the limit that directly contradicts the article’s “proves” and “boosts.”", true)],
      "Ask which omission, if restored, would change the claim a reader walks away with."),

    item("LF260", "reading", "Study vs story — the parent quote", ["paired", "evidence"], ["evidence-credibility"], "study",
      "Ana Ruiz’s quotation is weak support for the article’s claim mainly because she—",
      [o("LF260-contradicts", "contradicts what the lead author said about the study",
          "She and Dr. Watanabe do not disagree; both comments are positive."),
       o("LF260-opinion", "was not involved and gives an opinion, not evidence",
          "The article itself says she was not involved; her view cannot confirm a causal finding.", true),
       o("LF260-location", "lives outside the area where the researchers collected their data",
          "The article never says where she lives relative to the 14 schools, and location would not make her an expert anyway."),
       o("LF260-order", "is quoted before the lead author",
          "Quotation order does not affect whether a source is qualified.")],
      "Weigh a quoted source by what that person knows about the question, not by how confident the quote sounds."),

    item("LF261", "reading", "Study vs story — the library figure", ["paired", "evidence"], ["evidence-credibility"], "study",
      "In Source B, the 12 percent rise in summer-reading sign-ups functions as—",
      [o("LF261-irrelevant", "a detail that sounds supportive but does not measure scores",
          "More sign-ups show interest, not an effect on test scores.", true),
       o("LF261-proof", "evidence that reading for pleasure causes the higher test scores",
          "Sign-ups measure behavior after the news, not what caused the score difference."),
       o("LF261-sourcea", "a statistic reported in Source A",
          "Source A never mentions libraries or sign-ups."),
       o("LF261-correction", "a correction to the article’s headline",
          "It is offered in support of the headline, not as a correction.")],
      "True but irrelevant evidence is a classic way to make a claim feel better supported than it is."),

    item("LF262", "reading", "Study vs story — fair synthesis", ["paired", "research"], ["research-citation", "evidence-credibility"], "study",
      "Which sentence most accurately synthesizes the two sources?",
      [o("LF262-agree", "Both sources agree that half an hour of daily reading raises a student’s reading score by 4 percentile points.",
          "Source A reports an association and explicitly declines to claim that reading raises scores."),
       o("LF262-fair", "A study linked pleasure reading to slightly higher scores without proving cause; a news story called it proof.",
          "It keeps the study’s finding and limit and names what the article did with them.", true),
       o("LF262-dismiss", "Because the news story exaggerates, the study’s finding should be dismissed as unreliable along with it.",
          "The article’s errors do not undo the study, which states its own limits clearly."),
       o("LF262-prior", "The study proves that students who already enjoy reading score higher no matter what other factors are involved.",
          "The study suggests that possibility as a limit; it does not prove it.")],
      "A fair synthesis keeps each source’s claim at its own strength."),

    /* ---- Over-the-counter medicine label: table, limits, warning sections ---- */
    item("LF263", "reading", "Medicine label — choosing a dose", ["technical", "graphics"], ["technical-texts", "text-graphics"], "label",
      "A 5-year-old who weighs 50 pounds has a fever. Following the label, the correct dose is—",
      [o("LF263-age", "7.5 mL, because the child is 5 years old",
          "Age is the fallback. The label says to use weight when it is known."),
       o("LF263-weight", "10 mL, because the label says to dose by weight when possible",
          "50 lb falls in the 48–59 lb row, which calls for 10 mL.", true),
       o("LF263-round", "12.5 mL, rounding up to be sure the medicine works",
          "The label gives no permission to round up, and a larger dose raises the risk of liver damage."),
       o("LF263-doctor", "none until a doctor is asked, because weight and age point to different rows",
          "The label settles the conflict itself: use weight first.")],
      "Technical texts often state a rule for resolving conflicts. Find it before choosing between two rows."),

    item("LF264", "reading", "Medicine label — the daily limit", ["technical"], ["technical-texts"], "label",
      "A child received doses at 6 a.m., 10 a.m., 2 p.m., 6 p.m., and 10 p.m. At 2 a.m. the fever is still high. According to the label—",
      [o("LF264-interval", "give another dose, since four hours have passed since the last one",
          "The 4-hour interval is met, but the 5-doses-in-24-hours limit is not."),
       o("LF264-half", "give half a dose to stay under the limit",
          "The label sets a number of doses, not an amount that can be split around."),
       o("LF264-wait", "no more until 6 a.m.; five doses in 24 hours is the limit",
          "Five doses fell within the last 24 hours; the 6 a.m. dose leaves that window at 6 a.m.", true),
       o("LF264-adult", "switch to an adult acetaminophen product, which has its own separate limit",
          "That would add more acetaminophen, which the warning specifically forbids.")],
      "When a text gives two limits (an interval and a daily cap), the stricter one controls."),

    item("LF265", "reading", "Medicine label — before vs during use", ["technical"], ["technical-texts"], "label",
      "Which situation does the label say requires asking a doctor before giving the medicine at all?",
      [o("LF265-fever", "The child’s fever has lasted more than 3 days.",
          "That appears under Stop use, which applies after treatment has begun."),
       o("LF265-liver", "The child has liver disease.",
          "Ask a doctor before use if your child has liver disease.", true),
       o("LF265-cold", "The child already took a cold medicine containing acetaminophen.",
          "That case falls under Do not use, which is a prohibition, not an ask-first rule."),
       o("LF265-pain", "The child’s pain is getting worse.",
          "Another Stop use condition, which comes up during treatment.")],
      "Labels sort warnings by when they apply. Match the stem’s timing word (before, during, never) to the right heading."),

    item("LF266", "reading", "Medicine label — the dosing cup", ["technical"], ["technical-texts"], "label",
      "The instruction to use only the enclosed dosing cup mainly guards against—",
      [o("LF266-measure", "measuring errors from spoons or cups in other units",
          "The doses are given in mL for this cup; other devices can deliver too much or too little.", true),
       o("LF266-germs", "contaminating the bottle with a used spoon",
          "Hygiene may matter, but the label ties the rule to dosing, not cleanliness."),
       o("LF266-expire", "using a cup that has expired",
          "Dosing cups do not expire, and the label says nothing about that."),
       o("LF266-weak", "giving too little medicine for it to work",
          "Underdosing is one possible error, but the rule guards against measurement error in both directions.")],
      "Infer the purpose of a rule from the problem it prevents, and prefer the answer that covers the whole problem."),

    item("LF267", "reading", "Medicine label — finding the right section", ["technical"], ["technical-texts"], "label",
      "A parent wants to give this medicine along with a nighttime cold syrup whose label lists acetaminophen. Which part of this label answers whether that is allowed?",
      [o("LF267-table", "the Directions chart",
          "The chart sets amounts for this product only; it does not address other medicines."),
       o("LF267-uses", "the Uses section",
          "Uses lists symptoms the product treats, not combinations."),
       o("LF267-stop", "the Stop use list",
          "Stop use covers worsening symptoms, not other drugs."),
       o("LF267-donot", "the Do not use line",
          "It says not to use this with any other drug containing acetaminophen.", true)],
      "Locate information by the section's job: combinations with other drugs are a warning, not a direction.")
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  items.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items);
})();
