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
   - the label's rules are specific to this passage and differ from common practice. */
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
          "51 − 41 = 10 points, larger than the ±4-point margin.", true),
       o("LF268-parents-close", "Among parents, Yes leads No by less than that group’s margin of error.",
          "Among parents the lead is 63 − 30 = 33 points, far more than ±8."),
       o("LF268-undecided", "Parents were undecided at about twice the rate of voters with no children in district schools.",
          "Parents were 7% undecided and the other group 8%; the rates are nearly equal."),
       o("LF268-more-undecided", "Among all likely voters, undecided respondents outnumber those who said No.",
          "8% were undecided and 41% said No.")],
      "Read the column for the group named, subtract, and compare the gap with that group’s own margin of error."),

    item("LF269", "reading", "Bond poll — from percent to people", ["informational", "graphics"], ["text-graphics"], "poll",
      "About how many of the likely voters interviewed said they were undecided?",
      [o("LF269-8", "about 8",
          "8 is the percentage, not the number of people."),
       o("LF269-49", "about 49",
          "8% of the 612 likely voters is about 49 people.", true),
       o("LF269-148", "about 148",
          "148 is the number of parents interviewed."),
       o("LF269-251", "about 251",
          "That is about 41% of 612, the share who said No.")],
      "A percentage in a table means little until it is tied to its base. Find the column total and multiply."),

    item("LF270", "reading", "Bond poll — question order", ["informational", "evidence"], ["evidence-credibility"], "poll",
      "Which feature of this survey could have pushed respondents toward Yes?",
      [o("LF270-staff", "Campaign staff conducted the interviews.",
          "Desert Research Group, not the campaign, conducted the interviews."),
       o("LF270-neighbors", "Respondents were told that most of their neighbors supported the bond.",
          "Nothing in the summary says respondents were told how others would vote."),
       o("LF270-cost", "The vote question left out the bond’s cost.",
          "The question names the $95 million cost."),
       o("LF270-roofs", "Before the vote question, respondents heard about classrooms with leaking roofs.",
          "The notes say this description came earlier in the questionnaire; hearing about the problem first can prime support for the fix.", true)],
      "Each of these would be a real source of bias. The task is to find the one the summary actually reports."),

    item("LF271", "reading", "Bond poll — reading a subgroup", ["informational", "graphics"], ["text-graphics"], "poll",
      "Which statement about voters with no children in district schools does the table support?",
      [o("LF271-yes10", "Yes leads No by 10 points.",
          "That is the gap among all likely voters, 51% to 41%."),
       o("LF271-no10", "No leads Yes by 10 points.",
          "No does not lead in any column of the table."),
       o("LF271-yes2", "Yes leads No by 2 points.",
          "In that column Yes is 47% and No is 45%.", true),
       o("LF271-yes33", "Yes leads No by 33 points.",
          "That is the gap among parents, 63% to 30%.")],
      "Find the column for the group named in the question before reading across."),

    item("LF272", "reading", "Bond poll — who did what", ["informational", "evidence"], ["evidence-credibility", "informational-texts"], "poll",
      "According to the notes, who paid for the survey and who wrote its questions?",
      [o("LF272-both-campaign", "The campaign both paid for it and wrote the questions.",
          "The campaign paid, but the research firm wrote the questions."),
       o("LF272-split", "The campaign paid; the firm wrote the questions.",
          "Friends of Measure K paid; Desert Research Group wrote the questions and publishes them.", true),
       o("LF272-both-firm", "The research firm both paid for it and wrote the questions.",
          "The firm wrote the questions but did not pay for the survey."),
       o("LF272-reverse", "The research firm paid; the campaign wrote the questions.",
          "This reverses the two roles.")],
      "Sponsorship and authorship are separate facts. A reader judging a poll needs both."),

    /* ---- Study abstract and the news story that reports it ---- */
    item("LF273", "reading", "Study vs story — the headline", ["paired", "evidence"], ["evidence-credibility", "informational-texts"], "study",
      "Source B’s headline misrepresents Source A by treating—",
      [o("LF273-magnitude", "a difference of a few percentile points as if the scores had doubled",
          "The headline gives no size for the gain at all."),
       o("LF273-cause", "a difference between groups as if an experiment had produced it",
          "Students chose how much to read, so the abstract says the study cannot show cause; “boosts” claims it.", true),
       o("LF273-sample", "a result from one high school as if it held across the whole state",
          "The study covered 14 high schools, and the headline names no place."),
       o("LF273-grade", "a finding about ninth graders as if it applied to younger children",
          "The headline says “teen,” which fits ninth graders.")],
      "Each option names a real way headlines distort research. Only the passage shows which one this headline commits."),

    item("LF274", "reading", "Study vs story — the method", ["paired", "research"], ["research-citation", "evidence-credibility"], "study",
      "According to Source A, how did the researchers account for differences in students’ backgrounds?",
      [o("LF274-random", "They assigned students at random either to read for pleasure or not to read at all.",
          "Students chose how much to read; a randomized trial is what the authors call for next."),
       o("LF274-school", "They limited each comparison to students at the same school.",
          "The study covered 14 high schools and does not describe within-school comparison."),
       o("LF274-exclude", "They left out students who already enjoyed reading.",
          "The abstract names those students as a limit of the study, not as a group that was removed."),
       o("LF274-adjust", "They adjusted the results for prior test scores and family income.",
          "The abstract says the difference held “after adjusting for prior test scores and family income.”", true)],
      "A method question is answered by the abstract’s own description, not by what a study of this kind usually does."),

    item("LF275", "reading", "Study vs story — the parent quote", ["paired", "evidence"], ["evidence-credibility"], "study",
      "How does Source B identify Ana Ruiz?",
      [o("LF275-outside", "as a parent with no part in the research",
          "The article calls her “a Glendale parent who was not involved in the research,” so her comment is an outside opinion.", true),
       o("LF275-participant", "as a parent whose own child took part in the study",
          "The article says she was not involved; it does not say her child took part."),
       o("LF275-teacher", "as a teacher at one of the high schools in the study",
          "She is identified as a parent, not a teacher."),
       o("LF275-librarian", "as a librarian who runs a local summer-reading program",
          "The article mentions libraries separately; Ruiz is identified as a parent.")],
      "How much a quotation is worth depends on who the speaker is, and only the article says."),

    item("LF276", "reading", "Study vs story — the library figure", ["paired", "evidence"], ["evidence-credibility"], "study",
      "Which statement about the 12 percent figure is accurate?",
      [o("LF276-sourcea", "Source A reports it as one of the study’s main results.",
          "Source A never mentions libraries or sign-ups."),
       o("LF276-author", "The study’s lead author reports it in his comments to Source B.",
          "The lead author is quoted only as calling the results “encouraging.”"),
       o("LF276-signups", "Local libraries report it, and it counts sign-ups.",
          "Source B attributes it to local libraries, and it measures summer-reading sign-ups, not test scores.", true),
       o("LF276-scores", "It is the score gain among students who signed up.",
          "The only score difference in either source is 4 percentile points.")],
      "Before judging what a number shows, establish who reported it and what it counts."),

    item("LF277", "reading", "Study vs story — common ground", ["paired", "research"], ["research-citation", "evidence-credibility"], "study",
      "Which detail appears in both sources?",
      [o("LF277-year", "The study followed its students for one school year.",
          "Only Source A gives the study’s length."),
       o("LF277-count", "The study included 2,400 students in Arizona.",
          "Source A: 2,400 ninth graders in 14 Arizona high schools. Source B: 2,400 Arizona students.", true),
       o("LF277-trial", "The study’s authors want a randomized trial next.",
          "Only Source A reports the call for a randomized trial."),
       o("LF277-libraries", "Library sign-ups have risen.",
          "Only Source B mentions libraries.")],
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
