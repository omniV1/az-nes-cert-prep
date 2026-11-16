/* Form F — three original NES 301 passage clusters that add new templates to the thinnest
   cluster kinds: informational (a sponsored opinion poll with margins of error), paired sources
   (a study abstract and the news story that reports it), and technical (a medicine label with a
   dosing chart). All passages are original. The label describes a fictional product with a
   fictional ingredient, so no real-world medical knowledge applies; it is not medical advice.

   This is the second version of the form. A passage-blind audit predicted all 15 keys of the first
   version (LF253–LF267, now retired) from the stems and options alone. These questions are built so
   that is not possible:
   - the four options of a question are the same kind of statement, at the same level of certainty;
   - no option can be ruled out, and none confirmed, without the passage;
   - no question's stem or options answer another question;
   - every passage departs from the textbook case, and the textbook answer is offered as a wrong
     option: the label doses by age, the poll is paid for by the firm with questions written by the
     campaign, and the study is a randomized experiment whose headline errs about subjects, not cause. */
(function () {
  const P = {
    poll: `CANYON COUNTY SCHOOL BOND SURVEY — Summary of results (October 2026)

Desert Research Group interviewed 612 likely voters by phone and text from September 18 to 24 as part of its quarterly county poll, which the firm pays for itself. The margin of error is ±4 percentage points for the full sample, ±8 points for parents of current students, and ±5 points for voters with no children in district schools.

Question: “If the election were held today, would you vote for Measure K, a bond to replace school roofs and cooling systems?”

Response      All likely voters (612)   Parents (148)   No children in district (464)
Yes           48%                       63%             43%
No            44%                       30%             49%
Undecided      8%                        7%              8%

Notes. Measure K needs a simple majority to pass. The questions about Measure K were written by Friends of Measure K, the campaign supporting the bond; Desert Research Group conducted the interviews and publishes the full questionnaire online. The ballot will list the bond’s cost, $95 million; the survey question did not. A survey is a snapshot of opinion during its field dates, not a forecast of who will turn out in November.`,

    study: `SOURCE A — Journal of School Health Research (2026), study abstract

Researchers randomly assigned 2,400 ninth graders in 14 Arizona high schools either to a daily 30-minute period of reading for pleasure or to a regular study hall for one semester. At the end of the semester, the reading group scored 4 percentile points higher on the state reading test than the study-hall group. The two groups did not differ on the state mathematics test. The authors note that the study did not follow students after the semester ended.

SOURCE B — Valley Courier, March 3
“30 Minutes a Day Boosts Teen Test Scores Across the Board, Study Finds”

Want better grades in every class? Hand your teenager a novel. A major new study of Arizona ninth graders found that reading for fun half an hour a day raises test scores. “This is a simple fix every family can make,” said Ana Ruiz, a Glendale parent who was not involved in the research. The study’s lead author, Dr. Kenji Watanabe, called the results “encouraging” and said sign-ups for his university’s summer reading program are up 12 percent since the study appeared.`,

    syrup: `DRUG FACTS — LUMAREST CHILDREN’S FEVER RELIEF (a fictional product with a fictional ingredient, written for reading practice; not medical advice)

Active ingredient (in each 5 mL): Tovaprin 120 mg ............ Purpose: Fever reducer

Use: temporarily reduces fever.

Warnings
Do not use
• at the same time as any other product containing tovaprin (see Directions for the waiting period)
• if the child has asthma

Ask a doctor before use if
• the child’s fever began more than 2 days ago
• the child is under 2 years of age

Stop use and ask a doctor if
• a rash appears
• fever lasts more than 3 days after the first dose

Directions
• Use the child’s age to find the dose on the chart. If the child weighs less than the weight range shown for that age, use the row that matches the child’s weight instead.
• Use only the enclosed oral syringe.
• Wait at least 6 hours between doses. Do not give more than 3 doses in one calendar day (midnight to midnight).
• If the child has taken another product containing tovaprin, wait 8 hours after that product before giving this one.
• Discard unused medicine 60 days after opening.

Age (yr)      Weight (lb)     Dose (mL)
under 2       under 24        ask a doctor
2–3           24–35           5 mL
4–5           36–47           7.5 mL
6–8           48–59           10 mL
9–10          60–71           12.5 mL
11            72–95           15 mL`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: P[set], stem, options, explanation
  });

  const items = [
    /* ---- Sponsored bond poll: margins of error, subgroups, question order ---- */
    item("LF268", "reading", "Bond poll — supported claim", ["informational", "graphics"], ["text-graphics", "informational-texts"], "poll",
      "Which claim is supported by the table and its margins of error?",
      [o("LF268-all", "Among all likely voters, Yes leads No by more than the full sample’s margin of error.",
          "48 − 44 = 4 points, which is not more than the ±4-point margin."),
       o("LF268-parents", "Among parents, Yes leads No by more than that group’s margin of error.",
          "63 − 30 = 33 points, far more than the ±8-point margin.", true),
       o("LF268-undecided", "Parents were undecided at about twice the rate of voters with no children in district schools.",
          "Parents were 7% undecided and the other group 8%; the rates are nearly equal."),
       o("LF268-more-undecided", "Among all likely voters, undecided respondents outnumber those who said No.",
          "8% were undecided and 44% said No.")],
      "Read the column for the group named, subtract, and compare the gap with that group’s own margin of error."),

    item("LF269", "reading", "Bond poll — from percent to people", ["informational", "graphics"], ["text-graphics"], "poll",
      "About how many of the likely voters interviewed said they were undecided?",
      [o("LF269-8", "about 8",
          "8 is the percentage, not the number of people."),
       o("LF269-49", "about 49",
          "8% of the 612 likely voters is about 49 people.", true),
       o("LF269-148", "about 148",
          "148 is the number of parents interviewed."),
       o("LF269-269", "about 269",
          "That is about 44% of 612, the share who said No.")],
      "A percentage in a table means little until it is tied to its base. Find the column total and multiply."),

    item("LF270", "reading", "Bond poll — the question itself", ["informational", "evidence"], ["evidence-credibility"], "poll",
      "Which feature of this survey could have pushed respondents toward Yes?",
      [o("LF270-staff", "Campaign staff conducted the interviews.",
          "Desert Research Group conducted the interviews."),
       o("LF270-neighbors", "Respondents were told that most of their neighbors supported the bond.",
          "Nothing in the summary says respondents were told how others would vote."),
       o("LF270-cost", "The vote question left out the bond’s cost.",
          "The notes say the ballot will list the $95 million cost and the survey question did not; a benefit named without its price draws more support.", true),
       o("LF270-roofs", "Before the vote question, respondents heard about classrooms with leaking roofs.",
          "The summary reports no such description; the question only names what the bond would replace.")],
      "Each of these would be a real source of bias. The task is to find the one the summary actually reports."),

    item("LF271", "reading", "Bond poll — reading a subgroup", ["informational", "graphics"], ["text-graphics"], "poll",
      "Which statement about voters with no children in district schools does the table support?",
      [o("LF271-yes6", "Yes leads No by 6 points.",
          "The gap is 6 points, but No is ahead, 49% to 43%."),
       o("LF271-no6", "No leads Yes by 6 points.",
          "In that column No is 49% and Yes is 43%.", true),
       o("LF271-yes4", "Yes leads No by 4 points.",
          "That is the result for all likely voters, 48% to 44%."),
       o("LF271-no4", "No leads Yes by 4 points.",
          "A 4-point gap appears only among all likely voters, and there Yes is ahead.")],
      "Find the column for the group named in the question before reading across."),

    item("LF272", "reading", "Bond poll — who did what", ["informational", "evidence"], ["evidence-credibility", "informational-texts"], "poll",
      "According to the summary, who paid for the survey and who wrote its questions about Measure K?",
      [o("LF272-both-campaign", "The campaign both paid for it and wrote the questions.",
          "The campaign wrote the questions, but the firm pays for its own quarterly poll."),
       o("LF272-split", "The campaign paid; the research firm wrote the questions.",
          "This reverses the two roles."),
       o("LF272-both-firm", "The research firm both paid for it and wrote the questions.",
          "The firm paid, but the questions about Measure K came from the campaign."),
       o("LF272-reverse", "The firm paid; the campaign wrote the questions.",
          "The firm pays for its quarterly poll; Friends of Measure K wrote the questions about the bond.", true)],
      "Sponsorship and authorship are separate facts. A reader judging a poll needs both, and they do not always fall the usual way."),

    /* ---- Study abstract and the news story that reports it ---- */
    item("LF273", "reading", "Study vs story — the headline", ["paired", "evidence"], ["evidence-credibility", "informational-texts"], "study",
      "Source B’s headline misrepresents Source A by treating—",
      [o("LF273-magnitude", "a difference of a few percentile points as if the scores had doubled",
          "The headline gives no size for the gain at all."),
       o("LF273-cause", "a difference between groups as if an experiment had produced it",
          "An experiment did produce it: students were randomly assigned, so the causal claim is fair."),
       o("LF273-subject", "a gain on one subject’s test as if it appeared in all subjects",
          "The gain was on the reading test only, and the groups did not differ in mathematics; “across the board” claims every subject.", true),
       o("LF273-grade", "a finding about ninth graders as if it applied to younger children",
          "The headline says “teen,” which fits ninth graders.")],
      "Each option names a real way headlines distort research. Only the passage shows which one this headline commits."),

    item("LF274", "reading", "Study vs story — the method", ["paired", "research"], ["research-citation", "evidence-credibility"], "study",
      "According to Source A, how did the researchers make the reading group and the comparison group comparable?",
      [o("LF274-random", "They assigned students at random to the reading period or to a study hall.",
          "The abstract says students were “randomly assigned” to one of the two.", true),
       o("LF274-match", "They matched each reader with a non-reader at the same school.",
          "The abstract describes random assignment, not matching."),
       o("LF274-exclude", "They left out students who already read for pleasure.",
          "The abstract mentions no exclusions."),
       o("LF274-adjust", "They adjusted the results for prior test scores and family income.",
          "The abstract mentions no statistical adjustment; random assignment did that work.")],
      "A method question is answered by the abstract’s own description, not by what a study of this kind usually does."),

    item("LF275", "reading", "Study vs story — the parent quote", ["paired", "evidence"], ["evidence-credibility"], "study",
      "How does Source B identify Ana Ruiz?",
      [o("LF275-parent-out", "as a parent who was not involved in the research",
          "The article calls her “a Glendale parent who was not involved in the research,” so her comment is an outside opinion.", true),
       o("LF275-parent-in", "as a parent whose child took part in the research",
          "She is a parent, but the article says she was not involved; it does not say her child took part."),
       o("LF275-teacher-out", "as a teacher who was not involved in the research",
          "She was not involved, but the article identifies her as a parent, not a teacher."),
       o("LF275-teacher-in", "as a teacher whose class took part in the research",
          "The article identifies her as a parent with no involvement in the research.")],
      "How much a quotation is worth depends on who the speaker is, and only the article says."),

    item("LF276", "reading", "Study vs story — the 12 percent figure", ["paired", "evidence"], ["evidence-credibility"], "study",
      "Which statement about the 12 percent figure is accurate?",
      [o("LF276-author-signups", "The lead author reports it, and it counts sign-ups.",
          "Dr. Watanabe says sign-ups for his university’s summer reading program are up 12 percent.", true),
       o("LF276-author-scores", "The lead author reports it, and it measures a score gain.",
          "He reports it, but it counts sign-ups; the score difference was 4 percentile points."),
       o("LF276-library-signups", "Local libraries report it, and it counts sign-ups.",
          "It counts sign-ups, but the article attributes it to the lead author, not to libraries."),
       o("LF276-library-scores", "Local libraries report it, and it measures a score gain.",
          "Neither part is right: the lead author reports it, and it counts sign-ups.")],
      "Before judging what a number shows, establish who reported it and what it counts."),

    item("LF277", "reading", "Study vs story — common ground", ["paired", "research"], ["research-citation", "evidence-credibility"], "study",
      "Which detail appears in both sources?",
      [o("LF277-count", "The study had 2,400 students.",
          "Only Source A gives the number of students."),
       o("LF277-grade", "The students were ninth graders.",
          "Source A: 2,400 ninth graders. Source B: “Arizona ninth graders.”", true),
       o("LF277-length", "The study lasted one semester.",
          "Only Source A gives the study’s length."),
       o("LF277-math", "The groups did not differ in mathematics.",
          "Only Source A reports the mathematics result.")],
      "A synthesis starts from what both sources state. Check each detail in each source."),

    /* ---- Medicine label for a fictional product: every answer depends on this label's own rules ---- */
    item("LF278", "reading", "Medicine label — choosing a dose", ["technical", "graphics"], ["technical-texts", "text-graphics"], "syrup",
      "A 5-year-old weighs 33 pounds. According to the label, the dose is—",
      [o("LF278-5", "5 mL",
          "Age 5 points to the 4–5 row, but 33 lb is below that row’s 36–47 lb range, so the label says to use the weight row: 24–35 lb, 5 mL.", true),
       o("LF278-75", "7.5 mL",
          "This is the age row alone. The label says to switch to the weight row when the child weighs less than the range for that age."),
       o("LF278-10", "10 mL",
          "This is the 6–8 year row, which matches neither the child’s age nor weight."),
       o("LF278-125", "12.5 mL",
          "This is the 9–10 year row.")],
      "This label starts from age and makes weight the exception. Apply the label’s rule, not the usual one."),

    item("LF279", "reading", "Medicine label — the next dose", ["technical"], ["technical-texts"], "syrup",
      "A child was given doses at 5 a.m., 11 a.m., and 5 p.m. on the same day. According to the label, the earliest time for another dose is—",
      [o("LF279-9", "9 p.m.",
          "Four hours is not this label’s interval; it requires at least 6."),
       o("LF279-11", "11 p.m.",
          "Six hours have passed, but this would be a fourth dose in the same calendar day; the limit is 3."),
       o("LF279-midnight", "midnight",
          "The 6-hour wait is met at 11 p.m., and the 3-dose limit resets at midnight, so midnight is the first time both rules allow.", true),
       o("LF279-5", "5 a.m.",
          "The limit is per calendar day, not per 24 hours counted from the first dose.")],
      "Two rules apply here: the wait between doses and the daily limit. The answer is the first time that satisfies both."),

    item("LF280", "reading", "Medicine label — which warning", ["technical"], ["technical-texts"], "syrup",
      "Which situation does the label list under “Ask a doctor before use”?",
      [o("LF280-asthma", "The child was diagnosed with asthma two years ago.",
          "Asthma is listed under “Do not use.”"),
       o("LF280-rash", "The child gets a rash after a dose.",
          "A rash is listed under “Stop use and ask a doctor.”"),
       o("LF280-fever", "The child’s fever started three days ago.",
          "“Ask a doctor before use if the child’s fever began more than 2 days ago.”", true),
       o("LF280-lasting", "The child’s fever has lasted four days after the first dose.",
          "A fever that lasts more than 3 days after the first dose is listed under “Stop use and ask a doctor.”")],
      "This label does not sort its warnings the way most do. Find each situation under its own heading."),

    item("LF281", "reading", "Medicine label — after opening", ["technical"], ["technical-texts"], "syrup",
      "According to the label, unused medicine should be discarded how long after the bottle is opened?",
      [o("LF281-14", "14 days",
          "Two weeks appears nowhere on the label; the line says 60 days."),
       o("LF281-30", "30 days",
          "The label gives 60 days, not a month."),
       o("LF281-60", "60 days",
          "“Discard unused medicine 60 days after opening.”", true),
       o("LF281-120", "120 days",
          "This doubles the 60 days the label gives.")],
      "A detail question about a technical text is answered by locating the line, not by estimating."),

    item("LF282", "reading", "Medicine label — another product", ["technical"], ["technical-texts"], "syrup",
      "A child took a cough syrup containing tovaprin at 6 a.m. and has had no other medicine. According to the label, the earliest time for a dose of this product is—",
      [o("LF282-10", "10 a.m.",
          "Four hours is not a waiting period this label uses."),
       o("LF282-12", "12 p.m.",
          "Six hours is the wait between doses of this product, not the wait after another tovaprin product."),
       o("LF282-2", "2 p.m.",
          "The label says to wait 8 hours after another product containing tovaprin.", true),
       o("LF282-4", "4 p.m.",
          "The wait is 8 hours, not 10.")],
      "The label gives two different waiting periods. Match the situation to the right one.")
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  items.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items);
})();
