/* NES English Language Arts (301) Domain I — competencies 0001–0004 */
(function () {
  const { section, check } = window.LessonKit;

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "rd-01": {
      title: "Vocabulary strategies and comprehension",
      domain: "reading",
      intro: `<p><strong>NES 301 competency 0001:</strong> Recover word meaning from syntax, word parts, and context; separate denotation from connotation; and choose a before/during/after reading strategy that matches the text and purpose. On multiple-choice items, name the job of the clue before you name the word.</p>`,
      sections: [
        section(
          "Syntactic and context clues",
          "A word's part of speech is constrained by the sentence around it. Prefixes, roots, and suffixes carry stable pieces of meaning you can recombine.",
          "When a word is unknown, first ask what the sentence grammar will allow (noun, verb, adjective, adverb). Then use nearby signal words&mdash;definition, example, contrast, or cause&mdash;to substitute a guess that still makes the sentence true.",
          `Cover the word &rarr; name the part of speech that can fit &rarr; hunt a clue type &rarr; substitute and reread.<br>
          Definition: X, or / that is / which means<br>
          Example: such as / including / for instance<br>
          Contrast: but / however / unlike / rather than<br>
          Cause: because / therefore / so that`,
          {
            label: "syntax first",
            problem: "The hikers grew <em>languid</em> after the climb and sat without speaking. What part of speech must <em>languid</em> be, and what meaning fits?",
            steps: [
              "<strong>Cover the word:</strong> &ldquo;The hikers grew ___ after the climb&rdquo; needs an adjective describing a state they entered.",
              "<strong>Use the rest of the sentence:</strong> sitting without speaking after effort points to tiredness or sluggishness, not anger or speed.",
              "<strong>Substitute:</strong> &ldquo;grew weary&rdquo; still yields a coherent sentence.",
              "<strong>MCQ move:</strong> eliminate choices that are verbs or that mean &ldquo;excited&rdquo; or &ldquo;talkative,&rdquo; which the syntax or context will not allow."
            ],
            answer: "Answer: Adjective meaning weary or lacking energy."
          },
          {
            label: "contrast clue",
            problem: "Unlike her <em>garrulous</em> brother, Maya answered in three words. Which clue type identifies <em>garrulous</em>?",
            steps: [
              "<strong>Spot the signal:</strong> <em>Unlike</em> sets up contrast, not definition.",
              "<strong>Name the known side:</strong> Maya is brief, so the brother is the opposite of brief.",
              "<strong>Substitute:</strong> talkative / wordy fits; shy or kind does not, because those are not opposites of &ldquo;three words.&rdquo;",
              "<strong>MCQ move:</strong> when the stem asks how you knew, choose contrast/antonym clue, not &ldquo;the root -ous means full of&rdquo; unless the item actually tests word parts."
            ],
            answer: "Answer: Contrast clue; garrulous means talkative."
          },
          { problem: "The soil was <em>arid</em>, so the seedlings wilted within a day. Name the clue type and a substitute word.", hint: "So marks cause. Ask what kind of soil would make seedlings wilt." },
          "Guessing from a familiar-looking root while ignoring the sentence. <em>Inflammable</em> looks like &ldquo;not flammable&rdquo; but syntax and usage still mean it can burn. Always substitute back into the whole sentence.",
          [
            check("The mayor's plan was <em>nascent</em>; it had been announced that morning and had no budget yet. Nascent most nearly means:", ["just beginning", "already famous", "intentionally secret", "legally binding"], 0, "That morning plus no budget is a definition-by-detail for something newly started. Famous, secret, and binding are not supported."),
            check("Which sentence uses a contrast clue to reveal the italicized word?", ["The <em>palimpsest</em>, a manuscript scraped and rewritten, was displayed.", "Unlike the <em>frugal</em> cook, he bought every garnish in the market.", "Several metals, such as <em>copper</em> and tin, conduct heat.", "She was <em>elated</em> because the test was canceled."], 1, "Unlike signals contrast. The first item defines, the third exemplifies, and the fourth gives a cause.")
          ]
        ),
        section(
          "Denotation, connotation, and word relationships",
          "Denotation is the dictionary meaning. Connotation is the attitude the word carries. Homonyms share spelling or sound but not meaning; synonyms share denotation; antonyms oppose it.",
          "Exam stems that ask which word is most negative, most formal, or most precise are testing connotation, not whether you know a definition. Pair each choice with the same denotation, then rank the attitude.",
          `Same denotation, different charge:<br>
          thin (neutral) &nbsp;|&nbsp; slender (positive) &nbsp;|&nbsp; scrawny (negative)<br>
          house / home &nbsp;|&nbsp; cheap / inexpensive &nbsp;|&nbsp; curious / nosy<br>
          Homonym trap: bat (animal) vs bat (club); lead (verb) vs lead (metal)`,
          {
            label: "connotation rank",
            problem: "A news brief calls a protest &ldquo;passionate.&rdquo; An editorial calls it &ldquo;rabid.&rdquo; Same event; what changed?",
            steps: [
              "<strong>Hold denotation still:</strong> both words can mean strongly felt.",
              "<strong>Name the charge:</strong> passionate is respectful intensity; rabid compares people to diseased animals.",
              "<strong>Ask whose purpose:</strong> the editorial is not informing so much as attacking.",
              "<strong>MCQ move:</strong> if choices mix &ldquo;synonym of intense&rdquo; with &ldquo;more hostile connotation,&rdquo; pick the connotation answer when the stem mentions tone or attitude."
            ],
            answer: "Answer: Denotation overlaps; rabid adds a hostile connotation."
          },
          {
            label: "homonym vs synonym",
            problem: "Which pair is homonyms rather than synonyms: <em>fair/just</em> or <em>fair/fare</em>?",
            steps: [
              "<strong>Synonyms share meaning:</strong> fair and just both mean equitable.",
              "<strong>Homonyms share form:</strong> fair (just, or a festival) and fare (price of a ticket) collide in sound, not meaning.",
              "<strong>Check the sentence:</strong> &ldquo;The fair fare was fair&rdquo; is a joke only because three different meanings occupy similar sounds.",
              "<strong>MCQ move:</strong> if two choices both &ldquo;sound alike,&rdquo; ask whether the item wants meaning overlap (synonym/antonym) or form overlap (homonym/homophone)."
            ],
            answer: "Answer: fair/fare are homonyms; fair/just are synonyms."
          },
          { problem: "Replace <em>stubborn</em> with a positive-connotation synonym in &ldquo;She was stubborn about finishing the apprenticeship.&rdquo;", hint: "Keep the denotation &ldquo;will not quit.&rdquo; Try determined or resolute, not pigheaded." },
          "Treating any related word as a synonym. Antonyms oppose; homonyms collide in form; a near-synonym with the wrong charge will still be the wrong MCQ choice.",
          [
            check("Which word has the most negative connotation for someone who spends little money?", ["Thrifty", "Frugal", "Economical", "Stingy"], 3, "The first three can praise careful spending. Stingy adds meanness."),
            check("In &ldquo;The bass was too loud, so she switched from bass guitar to piano,&rdquo; bass and bass are:", ["antonyms", "synonyms with identical connotation", "homonyms with different denotations", "borrowings from two different modern slang terms"], 2, "Same spelling, two meanings (low frequency sound vs the instrument). That is a homonym pair, not a synonym pair.")
          ]
        ),
        section(
          "Borrowings, language change, and reading strategies",
          "English constantly absorbs words from other languages and reshapes old words when culture, science, or technology needs a new sense. Reading strategies are chosen for a purpose, not as a personality trait.",
          "Borrowings keep traces of their source (<em>ballet</em> from French, <em>algebra</em> from Arabic, <em>piano</em> from Italian). Historical change includes specialization (a field such as psychology narrowing a general word) and technology giving old words new jobs (<em>mouse</em>, <em>cloud</em>). Match before/during/after moves to the text: preview a textbook chapter; annotate an argument; summarize after an informational article.",
          `Before: preview title, headings, graphics, purpose<br>
          During: question, predict, annotate, monitor confusion<br>
          After: summarize, confirm purpose, check graphics against claims<br>
          Language-change MCQ: ask which force (science, region, technology, contact with another language) created the new sense.`,
          {
            label: "borrowing origin",
            problem: "Which word is a borrowing whose form still signals its source: <em>kindergarten</em>, <em>happiness</em>, or <em>slowly</em>?",
            steps: [
              "<strong>Native morphology:</strong> -ness and -ly are English derivational endings on English bases.",
              "<strong>Transparent borrowing:</strong> kindergarten keeps German <em>Kinder</em> (children) + <em>Garten</em> (garden).",
              "<strong>Do not overclaim:</strong> you need the exam's recognizable examples, not a full etymology dictionary.",
              "<strong>MCQ move:</strong> if the stem says &ldquo;origin in another language,&rdquo; pick the word that is not built from living English affixes."
            ],
            answer: "Answer: kindergarten, from German."
          },
          {
            label: "strategy matches purpose",
            problem: "A student must decide whether an editorial's evidence is sufficient. Which during-reading move is most appropriate?",
            steps: [
              "<strong>Name the purpose:</strong> evaluate an argument, not enjoy a story or follow a recipe.",
              "<strong>Match the tool:</strong> annotate claims vs reasons; mark fact vs opinion; note missing counterargument.",
              "<strong>Reject mismatched tools:</strong> previewing chapter headings helps a textbook, not this editorial. A plot timeline helps fiction.",
              "<strong>MCQ move:</strong> choose the strategy whose output would answer the purpose question."
            ],
            answer: "Answer: Annotate claims and weigh evidence during reading."
          },
          { problem: "The words <em>introvert</em> and <em>inhibition</em> took on specialized senses in psychology. What kind of influence is that?", hint: "Not a borrowing from another language; a field of knowledge narrowed older general meanings." },
          "Using the same reading ritual for every text. Skimming a warranty for headings is wise; skimming a sonnet for headings is not. Also, do not confuse a borrowing with a word that merely looks foreign.",
          [
            check("Which pair acquired new specialized meanings because of a scientific field rather than everyday technology?", ["Mouse and cloud", "Broadcast and screen", "Introvert and inhibition", "Sedan and coupe"], 2, "Psychology specialized introvert and inhibition. Mouse/cloud and broadcast/screen are technology senses; sedan/coupe are vehicle types."),
            check("Before reading a dense textbook chapter on plate tectonics, the most useful move is to:", ["Memorize the glossary in isolation", "Preview headings, captions, and the end-of-section questions", "Write a theme statement as if the chapter were a short story", "Skip graphics so they do not bias the prose"], 1, "Before-reading preview of structure and graphics sets a purpose. Theme statements belong to literature; skipping graphics discards evidence.")
          ]
        )
      ]
    },

    "rd-02": {
      title: "Informational texts: structure, purpose, summary",
      domain: "reading",
      intro: `<p><strong>NES 301 competency 0002:</strong> Recognize newspapers, textbooks, encyclopedias, and webzines; use organization to find main idea, purpose, and audience; separate general claims from specific details; and judge whether a summary or a graphic actually reports the text.</p>`,
      sections: [
        section(
          "Types of informational texts",
          "Informational texts explain, report, or instruct without a primary goal of selling a belief. Form follows that job.",
          "A newspaper article leads with the most newsworthy facts (who, what, when, where). A textbook sequences concepts and often includes headings, examples, and review questions. An encyclopedia entry defines a topic and stays relatively stable and reference-like. A webzine or online magazine mixes reported information with a magazine's voice and may update frequently. Identify the form first so you do not score a news lead as if it were a thesis essay.",
          `Newspaper: inverted pyramid (lead &rarr; details &rarr; background)<br>
          Textbook: headings, objectives, examples, checks<br>
          Encyclopedia: definition, scope, cross-references<br>
          Webzine: reported content + magazine voice + update cycle`,
          {
            label: "form recognition",
            problem: "A piece titled &ldquo;Monarch Migration&rdquo; opens with a one-sentence definition, then lists range, diet, and related articles. What form is it?",
            steps: [
              "<strong>Ask the job:</strong> it defines and inventories facts for lookup, not for breaking news or for teaching a unit in order.",
              "<strong>Match features:</strong> definition-first plus cross-references is encyclopedia structure.",
              "<strong>Eliminate:</strong> a newspaper would open with a timely event; a textbook would set learning objectives; a webzine might open with a scene or opinionated hook.",
              "<strong>MCQ move:</strong> name the form from features, not from the topic (butterflies can appear in any of the four)."
            ],
            answer: "Answer: Encyclopedia entry."
          },
          {
            label: "why this organization",
            problem: "A city-council story begins &ldquo;Voters rejected the stadium tax last night, 54% to 46%.&rdquo; Later paragraphs give history and quotations. Why this order?",
            steps: [
              "<strong>Name the structure:</strong> inverted pyramid&mdash;most newsworthy fact first.",
              "<strong>Name the audience need:</strong> readers may stop after the lead; the lead must still inform.",
              "<strong>Do not import essay logic:</strong> this is not a delayed thesis for suspense.",
              "<strong>MCQ move:</strong> stems that ask &ldquo;why does the author begin with&hellip;&rdquo; want the organizational job, not a theme."
            ],
            answer: "Answer: Newspaper inverted pyramid so the lead reports the outcome even if the reader stops."
          },
          { problem: "A weekly online magazine publishes a reported piece on heat pumps with a first-person opener and an update stamp. Newspaper, textbook, encyclopedia, or webzine?", hint: "Look at voice plus update cycle, not at whether facts appear." },
          "Assuming any article with facts is a textbook, or that a webzine cannot be informational because it has voice. Voice does not automatically make a text persuasive.",
          [
            check("Which feature most clearly marks a textbook rather than a newspaper story?", ["A date line and quotations from witnesses", "Chapter objectives, worked examples, and review questions", "A one-sentence definition and a list of related entries", "A timestamp showing the page was updated this morning"], 1, "Objectives and review questions serve instruction. Date lines serve news; definitions serve encyclopedias; timestamps serve frequently updated web content."),
            check("An informational webzine article is most unlike an encyclopedia entry in that it typically:", ["Contains no facts", "May use a magazine voice and be revised as events change", "Cannot include graphics", "Must open with a dictionary definition"], 1, "Both can inform. The webzine's voice and update cycle are the distinctive marks.")
          ]
        ),
        section(
          "Main idea, purpose, audience, general vs specific",
          "The main idea is the text's controlling claim. Purpose is the author's job (explain, report, instruct). Audience is who that job is for. A general statement names a class; a specific detail instances it.",
          "Find the main idea by asking what most sentences help prove&mdash;not which sentence is most interesting. Purpose and audience are inferred from diction, assumed knowledge, and what the writer bothers to define. On &ldquo;which sentence is a general statement&rdquo; items, the general sentence can lose its examples and still be true; a specific sentence cannot.",
          `Main idea = what the whole text is doing<br>
          Purpose = explain / report / instruct (informational)<br>
          Audience cue: jargon defined or not; &ldquo;you&rdquo; vs specialists<br>
          General: &ldquo;Birds migrate seasonally.&rdquo;<br>
          Specific: &ldquo;Arctic terns may fly more than 40,000 miles a year.&rdquo;`,
          {
            label: "main idea vs interesting detail",
            problem: "<em>Bees pollinate many food crops. A single almond orchard may rent millions of hives. Colony losses have risen in some regions. Without pollinators, several fruits and nuts become harder to grow.</em> What is the main idea?",
            steps: [
              "<strong>Test each sentence as a title:</strong> the almond statistic is vivid but local. Hive rentals support a larger claim.",
              "<strong>Ask what the last sentence does:</strong> it states the stakes of the whole cluster: pollinators matter to food.",
              "<strong>Purpose:</strong> explain a process and its importance, not argue a law or sell hives.",
              "<strong>MCQ move:</strong> reject the most specific number if the stem asks for main idea."
            ],
            answer: "Answer: Pollinators, especially bees, are essential to producing many foods."
          },
          {
            label: "audience from diction",
            problem: "Paragraph A defines <em>voltage</em> and compares it to water pressure. Paragraph B uses <em>potential difference</em> without definition and cites a circuit diagram. Who is each for?",
            steps: [
              "<strong>What is defined:</strong> A assumes a novice; B assumes a student who already has the term.",
              "<strong>Purpose still informational:</strong> both explain; audience differs.",
              "<strong>Do not confuse tone with audience:</strong> friendly analogies mark the novice text, not a persuasive purpose.",
              "<strong>MCQ move:</strong> pick the audience that matches assumed knowledge."
            ],
            answer: "Answer: A is for beginners; B is for readers with prior physics vocabulary."
          },
          { problem: "Label each: (1) &ldquo;Urban trees reduce summer heat.&rdquo; (2) &ldquo;On July 12, a street with canopy was 7&deg;F cooler than a nearby exposed block.&rdquo;", hint: "Which sentence still works if you delete the number?" },
          "Choosing a specific statistic as the main idea because it looks &ldquo;more factual.&rdquo; Facts support; they are not automatically the controlling claim.",
          [
            check("Which sentence is a general statement rather than a specific detail?", ["In 2019, City Clinic logged 412 heat-related visits.", "Shade trees can lower neighborhood temperatures.", "Elm Street's logger read 97&deg;F at 3 p.m.", "The July 12 map showed a 7&deg;F gap between two blocks."], 1, "The tree sentence names a class of effect. The others are dated, numbered, or localized details."),
            check("A sidebar in a health textbook defines BMI and shows a worked example. Its primary purpose is to:", ["Persuade readers to buy a diet plan", "Entertain with a patient anecdote", "Instruct a student audience in a concept and procedure", "Report breaking news"], 2, "Definition plus worked example is instructional textbook design.")
          ]
        ),
        section(
          "Accurate summary and informational graphics",
          "A summary restates main ideas in proportion, without new claims or inverted emphasis. Graphics in informational texts (tables, graphs, charts) are evidence, not decoration.",
          "An accurate summary keeps the author's scope and does not upgrade a hedge (&ldquo;may,&rdquo; &ldquo;in this sample&rdquo;) into a universal law. When a graphic appears, read the title, units, and what is actually plotted before matching it to a prose claim. NES items often ask which summary is faithful or which statement the graphic supports.",
          `Summary checklist:<br>
          1. Same main idea &nbsp; 2. Same scope/hedges &nbsp; 3. No new claim &nbsp; 4. Details only if they carry the claim<br>
          Graphic: title &rarr; axes/units &rarr; trend &rarr; compare to prose`,
          {
            label: "faithful summary",
            problem: "Original: &ldquo;In this three-year sample, downtown bus ridership rose about 8% on weekdays but was flat on Sundays.&rdquo; Which summary is accurate?",
            steps: [
              "<strong>Keep the hedge:</strong> three-year sample, not &ldquo;always.&rdquo;",
              "<strong>Keep the split:</strong> weekdays up, Sundays flat&mdash;not &ldquo;ridership soared.&rdquo;",
              "<strong>Reject additions:</strong> a choice that adds &ldquo;because of new bike lanes&rdquo; invents a cause.",
              "<strong>MCQ move:</strong> the tempting wrong summary is usually broader, more dramatic, or causally extra."
            ],
            answer: "Answer: A summary that keeps the sample limit and the weekday/Sunday split."
          },
          {
            label: "graphic vs prose",
            problem: "A bar graph titled &ldquo;Library visits, March&rdquo; shows Mon 120, Wed 80, Sat 200. The caption says visits peaked on Saturday. What can you conclude?",
            steps: [
              "<strong>Read the title:</strong> March only, visits, not checkouts.",
              "<strong>Check the claim:</strong> Saturday is the highest of the three days shown.",
              "<strong>Limit the leap:</strong> you cannot conclude Saturday is always busiest, or that Saturday had the most books borrowed.",
              "<strong>MCQ move:</strong> choose the statement that stays inside title, units, and plotted values."
            ],
            answer: "Answer: Among the days plotted for March, Saturday had the most visits."
          },
          { problem: "Text: &ldquo;Some studies suggest a link; more research is needed.&rdquo; Summary: &ldquo;Scientists have proven the link.&rdquo; What went wrong?", hint: "Name the hedge that disappeared." },
          "Writing a summary that is true in the real world but untrue to the passage, or reading a graphic's picture instead of its scale and title.",
          [
            check("Passage: &ldquo;After the new lights were installed, nighttime crashes on the ramp fell from 12 to 7 in one year.&rdquo; Which summary is accurate?", ["Lights eliminate ramp crashes.", "In that year, nighttime ramp crashes declined after the lights were installed.", "Drivers became more skilled that year.", "The ramp is now the safest in the state."], 1, "Only the middle choice keeps the time window and does not invent a statewide ranking or a cause beyond what is stated."),
            check("A line graph's vertical axis starts at 90, not 0, making a rise from 92 to 96 look steep. The most careful reading is that:", ["The increase is 4 units; the visual slope is exaggerated by the truncated axis", "The variable quadrupled", "Graphics cannot be compared with prose", "The title overrides the axis"], 0, "Read the numbers. A truncated axis is a display choice, not a larger increase.")
          ]
        )
      ]
    },

    "rd-03": {
      title: "Persuasive texts and rhetorical appeals",
      domain: "reading",
      intro: `<p><strong>NES 301 competency 0003:</strong> Know editorials, propaganda, and advertisements; separate fact from opinion; weigh evidence; and name rhetorical techniques&mdash;ethos, pathos, logos, repetition, exaggeration&mdash;by what they do in the passage, not by a memorized slogan.</p>`,
      sections: [
        section(
          "Editorials, propaganda, and ads",
          "Persuasive texts want a change in belief or action. Informational texts primarily want understanding. The same topic can appear in both.",
          "An editorial argues a public position in a journalistic setting. Propaganda organizes messages to mobilize a mass audience, often simplifying and repeating a slogan. An advertisement (print or pop-up) sells a product, service, or brand. Purpose and intended audience are read from the call to action, the assumed values, and what is left out.",
          `Ask: What should the reader DO or BELIEVE after this?<br>
          Editorial: public issue + reasoned (or not) stance<br>
          Propaganda: mass persuasion, slogan, us/them, repetition<br>
          Ad: product/brand + desire or fear + buy/click`,
          {
            label: "form and purpose",
            problem: "A city paper prints: &ldquo;The council should reject the stadium deal. It shifts risk to taxpayers while owners keep the profits.&rdquo; Editorial, news report, or ad?",
            steps: [
              "<strong>Look for a should:</strong> the piece tells readers what ought to happen.",
              "<strong>Venue and job:</strong> a paper's opinion page arguing policy is an editorial, not a news lead and not a product pitch.",
              "<strong>Audience:</strong> local voters and officials, not shoppers.",
              "<strong>MCQ move:</strong> <em>should</em>, <em>must</em>, and <em>vote</em> are purpose flags even when facts also appear."
            ],
            answer: "Answer: Editorial aiming to influence a policy decision."
          },
          {
            label: "propaganda vs ad",
            problem: "A poster shows a huge flag and the words &ldquo;ONE PEOPLE. ONE VOICE. ENLIST TODAY.&rdquo; No product price appears. What is the persuasive type?",
            steps: [
              "<strong>Call to action:</strong> enlist&mdash;political/military mobilization, not a purchase.",
              "<strong>Technique cluster:</strong> slogan, simplification, identity fusion (one people).",
              "<strong>Ad test:</strong> ads name a brand and a commercial exchange. This poster does not.",
              "<strong>MCQ move:</strong> if the stem asks characteristics of propaganda, pick mass identity + slogan + action, not &ldquo;contains a statistic.&rdquo;"
            ],
            answer: "Answer: Propaganda recruiting through slogan and group identity."
          },
          { problem: "A pop-up reads &ldquo;Only 2 left at this price&rdquo; beside a blender photo. Name the form and the intended audience action.", hint: "Scarcity plus product image is commercial persuasion." },
          "Calling every emotional text propaganda, or assuming an editorial cannot include facts. Form is the job plus the venue, not the presence or absence of feeling.",
          [
            check("Which text is best classified as an advertisement rather than an editorial?", ["A column arguing the city should fund night buses", "A pop-up promising 40% off if you click before midnight", "A flyer telling citizens to report corruption to a hotline", "A textbook chapter explaining how ballots are counted"], 1, "The pop-up sells a purchase with a time-limited offer. The column is editorial; the hotline flyer is civic persuasion/propaganda-adjacent; the chapter is informational."),
            check("A persuasive paragraph's intended audience is most clearly revealed by:", ["The font size", "Who is told to act and what knowledge is assumed", "Whether a graph appears", "The number of syllables in the title"], 1, "Audience is a function of assumed knowledge and the call to action.")
          ]
        ),
        section(
          "Fact versus opinion and the weight of reasons",
          "A fact is checkable against evidence in the world. An opinion is a judgment, prediction, or value. Persuasive writing mixes both; the exam asks you to label them and to say whether the reasons actually support the claim.",
          "Test fact: could a careful observer agree on a measurement, quotation, or record? Test opinion: does the sentence use <em>should</em>, <em>best</em>, <em>must</em>, or an unfalsifiable superlative? Then ask sufficiency: does the evidence cover the whole claim, or only a convenient slice?",
          `Claim: The city should add a late bus.<br>
          Fact-like support: Ridership after 10 p.m. is 180 people on the remaining route.<br>
          Opinion: Night workers deserve a safe ride.<br>
          Insufficient: One anecdote about a friend who missed a shift.`,
          {
            label: "fact/opinion split",
            problem: "Label each: (1) &ldquo;The plant released 2.1 tons of sulfur dioxide last year, according to the state report.&rdquo; (2) &ldquo;That amount is unforgivable.&rdquo;",
            steps: [
              "<strong>Checkability:</strong> (1) cites a measurable quantity and a source. Treat it as a factual claim (which you could still audit).",
              "<strong>Value word:</strong> (2) <em>unforgivable</em> is a moral judgment.",
              "<strong>Do not confuse sourced with proven:</strong> a cited number can still be wrong, but it is not an opinion in the exam's sense.",
              "<strong>MCQ move:</strong> scan for numbers-plus-source vs adjectives of praise/blame."
            ],
            answer: "Answer: (1) factual claim; (2) opinion."
          },
          {
            label: "sufficiency",
            problem: "Claim: &ldquo;Everyone in the county supports the landfill.&rdquo; Support: a quotation from the landfill company president. Is the evidence sufficient?",
            steps: [
              "<strong>Match scope:</strong> <em>everyone in the county</em> is universal.",
              "<strong>Match source:</strong> one interested speaker cannot stand for everyone.",
              "<strong>Name the gap:</strong> no poll, no range of residents, conflict of interest.",
              "<strong>MCQ move:</strong> when the stem asks which statement the excerpt sufficiently supports, pick the narrow claim the details actually earn&mdash;as in the NES horse-training sample."
            ],
            answer: "Answer: No; the evidence is too narrow and too interested for a universal claim."
          },
          { problem: "Claim: &ldquo;This vitamin cures fatigue.&rdquo; Support: a celebrity photo and the words &ldquo;I feel amazing!&rdquo; Name the problem.", hint: "Anecdote plus testimonial does not establish a medical cure." },
          "Calling every first-person sentence an opinion, or every number a proof. Also, treating a relevant example as sufficient for an absolute claim.",
          [
            check("Which sentence is an opinion rather than a checkable factual claim?", ["The ordinance was adopted on May 3.", "Turnout was 41% of registered voters.", "May 3 was the finest day in the town's history.", "The clerk posted the tally at 10:12 p.m."], 2, "<em>Finest</em> is a value judgment. Dates, percents, and clock times are checkable claims."),
            check("An editorial claims a park is unsafe. It quotes two residents and shows no incident data. The evidence is:", ["Sufficient, because two is more than one", "Insufficient for a general safety claim; it is anecdotal", "Irrelevant, because residents cannot speak", "Proof that the park is safe"], 1, "Two stories can be relevant but do not cover a general claim about safety.")
          ]
        ),
        section(
          "Ethos, pathos, logos, repetition, exaggeration",
          "Appeals are named by the kind of pressure they put on the reader. Devices are named by the linguistic move.",
          "Logos offers reasons, data, or a logical structure. Pathos stirs feeling (fear, pity, pride, belonging). Ethos borrows trust from character, credentials, or fairness. Repetition hammers a phrase. Exaggeration stretches a case past the evidence (including sweeping generalizations). On &ldquo;which technique&rdquo; items, describe the move in plain language first, then attach the term.",
          `Which-device procedure:<br>
          1. Quote the bit that is doing work.<br>
          2. Say what it does (numbers? credentials? fear? same phrase three times? impossible extreme?).<br>
          3. Match the term. Do not match the topic.`,
          {
            label: "naming the appeal",
            problem: "&ldquo;As a pediatric nurse for 18 years, I oppose this cut to clinic hours. Last winter we logged 900 after-school visits; working parents have no other option.&rdquo; Separate ethos, logos, and pathos.",
            steps: [
              "<strong>Ethos:</strong> 18 years as a pediatric nurse&mdash;credibility from role and experience.",
              "<strong>Logos:</strong> 900 visits is a reason tied to a measurable load.",
              "<strong>Pathos:</strong> working parents with no option invites worry and sympathy.",
              "<strong>MCQ move:</strong> if the stem asks for the ethical appeal, pick the credentials, not the statistic."
            ],
            answer: "Answer: Ethos = nurse experience; logos = visit count; pathos = parents with no option."
          },
          {
            label: "exaggeration and repetition",
            problem: "&ldquo;This app has destroyed childhood. Destroyed it. Every child in America is addicted.&rdquo; Which techniques, and what is the effect?",
            steps: [
              "<strong>Repetition:</strong> <em>destroyed</em> is restated for heat, not for new information.",
              "<strong>Exaggeration / sweeping generalization:</strong> <em>every child in America</em> cannot be supported from the sentence.",
              "<strong>Effect:</strong> intensity and bias become visible; logos is weak.",
              "<strong>MCQ move:</strong> NES-style items often ask what the exaggeration reveals (bias, overclaim), not whether you agree about screens."
            ],
            answer: "Answer: Repetition plus exaggeration; the overclaim displays bias more than it proves the case."
          },
          { problem: "A pop-up shows a shivering puppy and &ldquo;They need you now.&rdquo; Name the dominant appeal.", hint: "No data, no expert&mdash;feeling and urgency." },
          "Labeling any mention of a person as ethos, or any number as logos even when the number is decorative. Also, confusing pathos with the reader's private mood; pathos is a strategy in the text.",
          [
            check("Which excerpt relies primarily on ethos?", ["&ldquo;Crime doubled downtown; here are the police tables.&rdquo;", "&ldquo;Imagine your child's empty chair at dinner.&rdquo;", "&ldquo;I chaired the safety board for a decade; here is why I oppose the shortcut.&rdquo;", "&ldquo;Buy now, buy now, buy now.&rdquo;"], 2, "Chairing the board is a credibility move. Tables are logos; the empty chair is pathos; buy now is repetition."),
            check("The sentence &ldquo;Representative government has completely collapsed and politics is only a game for the rich&rdquo; most clearly illustrates:", ["Careful qualification", "Exaggeration and sweeping generalization", "A definition context clue", "A technical warranty clause"], 1, "Absolute collapse and <em>only</em> are overclaims; this is the NES exaggeration pattern.")
          ]
        )
      ]
    },

    "rd-04": {
      title: "Technical and functional texts",
      domain: "reading",
      intro: `<p><strong>NES 301 competency 0004:</strong> Use warranties, contracts, timetables, and applications to exercise consumer and civic rights and to complete tasks. Read every condition, exception, and graphic key; the exam hides the answer in a clause most skimmers skip.</p>`,
      sections: [
        section(
          "Warranties, contracts, and consumer rights",
          "Technical texts specify obligations, limits, and procedures. Everyday English words such as <em>only</em>, <em>must</em>, and <em>provided that</em> are doing legal work.",
          "A warranty states what the seller will repair or replace, for how long, and under which exclusions. A contract records mutual promises and the consequences of breaking them. To exercise a consumer right, match your situation to the triggering conditions (time window, proof of purchase, authorized service). Do not rely on the heading if the fine print narrows it.",
          `Read in this order:<br>
          1. What is covered? &nbsp; 2. For how long? &nbsp; 3. What is excluded?<br>
          4. What must the buyer do (register, keep receipt, ship at whose cost)?<br>
          5. What happens if a condition is missed?`,
          {
            label: "warranty conditions",
            problem: "&ldquo;Parts are warranted for 12 months from purchase. Labor is covered for 90 days. Damage from liquid is excluded. Claims require the original receipt and service at an authorized shop.&rdquo; A laptop bought 5 months ago fails after a spill. What is covered?",
            steps: [
              "<strong>Map the facts to clauses:</strong> 5 months is inside 12-month parts but outside 90-day labor.",
              "<strong>Apply the exclusion:</strong> liquid damage is excluded entirely.",
              "<strong>Rights move:</strong> the consumer can still ask what &ldquo;liquid&rdquo; requires as proof, but on the given text the spill knocks the claim out.",
              "<strong>MCQ move:</strong> the item usually turns on one missed condition, not on sympathy."
            ],
            answer: "Answer: Nothing under this warranty; liquid damage is excluded."
          },
          {
            label: "contract obligation",
            problem: "A gym contract: &ldquo;Membership auto-renews annually unless written notice is received 14 days before the anniversary. Email is not accepted.&rdquo; A member emails on day 10. What happens?",
            steps: [
              "<strong>Find the method:</strong> written notice, and email is barred.",
              "<strong>Find the deadline:</strong> 14 days before; day 10 is late even if the channel were valid.",
              "<strong>Two independent failures:</strong> wrong channel and late.",
              "<strong>MCQ move:</strong> choose the consequence the contract states (renewal), not what seems fair."
            ],
            answer: "Answer: The membership renews; the notice met neither the method nor the deadline."
          },
          { problem: "Warranty: &ldquo;Void if opened by anyone other than an authorized technician.&rdquo; The owner pries the case to clean a fan, then the device fails. Status?", hint: "An exclusion can void coverage even if the failure seems unrelated." },
          "Reading the bold promise (&ldquo;lifetime warranty&rdquo;) and skipping exclusions. Consumer rights are in the conditions, not the marketing banner.",
          [
            check("A phone warranty covers manufacturing defects for one year but excludes drops. The phone's camera fails after nine months with no drop. The consumer should:", ["Assume no rights remain because the phone is used", "Request repair or replacement for a manufacturing defect within the year", "Ignore the warranty and buy a new phone as the only legal option", "Claim drop coverage because nine months is less than a year"], 1, "Time window is open and the exclusion (drops) does not apply to a camera defect."),
            check("Which clause most clearly limits a buyer's rights?", ["&ldquo;Keep your receipt.&rdquo;", "&ldquo;Coverage excludes damage from unauthorized modification.&rdquo;", "&ldquo;Authorized shops are listed online.&rdquo;", "&ldquo;The warranty begins on the purchase date.&rdquo;"], 1, "An exclusion removes situations from coverage. The others are procedures or start dates.")
          ]
        ),
        section(
          "Timetables, applications, and performing tasks",
          "Functional texts exist so a reader can do something: catch a bus, apply for a job, request a ballot. Accuracy beats interpretation.",
          "A timetable encodes departures, transfers, and exceptions (weekends, holidays). An application lists required fields and acceptable documents. Confirm facts against the document rather than against memory. If a scenario says what the person already provided, check the list for the missing required item&mdash;the NES absentee-ballot pattern.",
          `Task procedure:<br>
          Highlight every MUST / required / by noon / Saturday except<br>
          List what the person already has<br>
          Subtract: the remainder is the answer<br>
          Never &ldquo;helpfully&rdquo; add a document the text does not require`,
          {
            label: "timetable exception",
            problem: "Weekday trains leave at 7:10, 8:10, and 9:10. Saturday: 9:10 only. Holiday schedule = Saturday. Thanksgiving is a holiday. What is the last morning option that day?",
            steps: [
              "<strong>Classify the day:</strong> holiday uses Saturday schedule.",
              "<strong>Read Saturday only:</strong> 9:10.",
              "<strong>Reject weekday memory:</strong> 7:10 and 8:10 do not run.",
              "<strong>MCQ move:</strong> exception lines beat the main grid."
            ],
            answer: "Answer: 9:10 only."
          },
          {
            label: "application gap",
            problem: "A job form requires name, signature, work history, and either a Social Security number or a passport copy. An applicant submits name, signature, work history, and a gym membership card. What is missing?",
            steps: [
              "<strong>Check each required field:</strong> name, signature, history are present.",
              "<strong>Check the either/or:</strong> SSN or passport&mdash;neither is present.",
              "<strong>Ignore extras:</strong> the gym card is not on the list.",
              "<strong>MCQ move:</strong> the extra document is a distractor; the missing authorized ID is the answer."
            ],
            answer: "Answer: A Social Security number or a passport copy."
          },
          { problem: "Bus 12: last trip 10:45 p.m. except Sundays, when the last trip is 8:15 p.m. Can a rider board at 9:00 p.m. on Sunday?", hint: "Apply the Sunday exception, not the weekday last trip." },
          "Filling in a &ldquo;reasonable&rdquo; extra document or assuming weekend service matches weekdays. Functional reading is subtraction against the printed list.",
          [
            check("A scholarship application requires a transcript, an essay, and one teacher recommendation. A student uploads a transcript, an essay, and a coach's letter. The packet is:", ["Complete, because a coach is a school adult", "Incomplete; it lacks a teacher recommendation", "Invalid because essays are optional in spirit", "Complete if the coach letter is longer than one page"], 1, "The requirement names a teacher. A coach does not substitute unless the text says so."),
            check("A timetable footnote says &ldquo;no service July 4.&rdquo; The grid shows a 6:00 a.m. trip every Friday. July 4 is a Friday. The 6:00 a.m. trip:", ["Runs, because the grid is the main text", "Does not run; the holiday footnote overrides the grid", "Runs if the rider has a monthly pass", "Runs two hours late"], 1, "Exception notes control the grid on that date.")
          ]
        ),
        section(
          "Keys, legends, flowcharts, and schematics",
          "Graphics in technical and functional texts are instructions. A key or legend defines symbols; a flowchart orders decisions; a schematic shows how parts connect, not how they look in a photograph.",
          "Read the legend before the picture. In a flowchart, every diamond is a yes/no (or branch) question; you cannot skip a branch because you already know the &ldquo;real-life&rdquo; answer. In a schematic, lines are connections or flows, not necessarily physical wires drawn to scale.",
          `Legend first &rarr; then symbols on the map<br>
          Flowchart: start &rarr; questions &rarr; end; never jump arrows<br>
          Schematic: components + connections; not a portrait`,
          {
            label: "legend",
            problem: "A trail map key: dashed line = seasonal trail (closed Nov&ndash;Apr); triangle = water. A dashed path to a triangle is marked in January. What can a hiker conclude?",
            steps: [
              "<strong>Decode with the key, not intuition:</strong> dashed means seasonal and closed in January.",
              "<strong>Do not invent:</strong> a triangle still means water, but the trail to it is closed.",
              "<strong>MCQ move:</strong> the right choice restates the legend; the trap says the trail is open because water is shown."
            ],
            answer: "Answer: The path is a seasonal trail closed in January, even though water is marked."
          },
          {
            label: "flowchart branch",
            problem: "Flowchart: Start &rarr; &ldquo;Receipt?&rdquo; No &rarr; &ldquo;Deny claim.&rdquo; Yes &rarr; &ldquo;Within 12 months?&rdquo; No &rarr; Deny. Yes &rarr; Approve. A buyer has a receipt for a 14-month-old purchase. Result?",
            steps: [
              "<strong>Do not stop at the first yes:</strong> receipt is present, so follow the Yes arrow.",
              "<strong>Second question:</strong> 14 months is not within 12, so Deny.",
              "<strong>Common skip:</strong> people approve because a receipt &ldquo;should&rdquo; be enough.",
              "<strong>MCQ move:</strong> trace every diamond in order."
            ],
            answer: "Answer: Deny; the time branch fails."
          },
          { problem: "A schematic shows a battery, a switch, and a lamp in one loop. The switch is drawn open. Will the lamp light?", hint: "An open switch breaks the circuit even if all parts are pictured." },
          "Treating a schematic as a realistic drawing, or following the flowchart path you wish were true. Symbols mean what the legend says.",
          [
            check("On a campus map, a solid square means a staff-only door. A visitor sees a solid square beside the library's side entrance. The visitor should:", ["Enter there because libraries are public", "Use a different entrance; the legend marks that door staff-only", "Assume the legend applies only to parking", "Treat squares as water fountains"], 1, "The legend binds the symbol wherever it appears."),
            check("A repair flowchart asks &ldquo;Is the device plugged in?&rdquo; before &ldquo;Replace the fuse.&rdquo; A technician who replaces the fuse first has:", ["Followed the schematic photographically", "Skipped a required decision branch", "Honored the warranty exclusion", "Read the timetable footnote"], 1, "Flowcharts require the questions in order; skipping a branch is the error the exam tests.")
          ]
        )
      ]
    },

    "rd-05": {
      title: "Evidence, credibility, and accurate summary",
      domain: "reading",
      intro: `<p><strong>NES 301 competencies 0002 and 0003:</strong> Informational and persuasive texts both ask you to judge whether evidence is relevant and sufficient, whether sources are credible, and whether a summary stays loyal to the original. These items punish extra drama and hidden bias.</p>`,
      sections: [
        section(
          "Relevance, importance, and sufficiency",
          "Relevant evidence is about the same claim. Important evidence would change how strongly we hold the claim. Sufficient evidence is enough in amount and kind for the claim's scope.",
          "A quotation can be on-topic (relevant) and still too thin (insufficient). A vivid story can be emotionally important to a reader and still fail a universal claim. Match claim scope to evidence kind: one case cannot prove <em>all</em>; a definition cannot prove a policy <em>should</em>.",
          `Claim scope &rarr; needed evidence<br>
          This sample / this year &rarr; data from that sample<br>
          All / always / everyone &rarr; representative evidence, not one ally<br>
          Should / must &rarr; facts plus a value; facts alone do not finish it`,
          {
            label: "relevant but insufficient",
            problem: "Claim: &ldquo;The new tutoring program raises algebra scores district-wide.&rdquo; Evidence: one student's grade went from C to B. Diagnose.",
            steps: [
              "<strong>Relevance:</strong> a tutoring grade change is on-topic.",
              "<strong>Scope failure:</strong> district-wide needs more than n = 1.",
              "<strong>Missing pieces:</strong> comparison group, typical change, other schools.",
              "<strong>MCQ move:</strong> if asked what the excerpt sufficiently supports, choose &ldquo;at least one student improved,&rdquo; not the district slogan."
            ],
            answer: "Answer: Relevant anecdote; insufficient for a district-wide claim."
          },
          {
            label: "irrelevant precision",
            problem: "Claim: &ldquo;The river is unsafe to swim.&rdquo; Evidence: a table of average rainfall in a different watershed. Why does it fail?",
            steps: [
              "<strong>Ask &ldquo;unsafe how?&rdquo;:</strong> swimming safety wants contamination, current, or similar measures.",
              "<strong>Wrong variable, wrong place:</strong> rainfall elsewhere does not speak to this river's swim safety.",
              "<strong>Numbers are not automatically logos:</strong> precise irrelevant data still fail.",
              "<strong>MCQ move:</strong> pick &ldquo;not relevant to the claim,&rdquo; not &ldquo;not a number.&rdquo;"
            ],
            answer: "Answer: The data are precise but off-topic."
          },
          { problem: "Claim: &ldquo;Horses respond best to calm, steady handling.&rdquo; Details: speak calmly, do not shout, do not move suddenly, use praise. Sufficient?", hint: "This is the NES pattern: several consistent how-to details can suffice for that modest claim." },
          "Equating a statistic with proof, or discarding a good example because it is not a percentage. Sufficiency depends on the claim's size.",
          [
            check("For which claim is a single documented example sufficient?", ["Every rural clinic has closed.", "At least one rural clinic has closed this year.", "Rural health is thriving everywhere.", "No patient will ever drive more than ten minutes."], 1, "An existential claim (at least one) can be shown with one case. Universals cannot."),
            check("An article argues a bridge is structurally unsound. Which evidence is most relevant?", ["A resident says the bridge looks ugly", "An engineer's inspection citing cracked supports and load ratings", "A photo of a sunset near the bridge", "Last year's tourism brochure"], 1, "Structural soundness needs engineering evidence, not aesthetics or promotion.")
          ]
        ),
        section(
          "Credibility, objectivity, and reliability",
          "Credibility is whether we have reason to trust the source on this question. Objectivity is whether the source has an interest that could warp the report. Reliability is whether the method would give a stable result.",
          "Ask: Who is speaking? What can they know? What do they gain? How was the information gathered? A credentialed expert selling the product is less objective than the same expert reporting a method others can check. Primary documents and named, dated data beat anonymous viral posts.",
          `Trust checklist:<br>
          Expertise on this topic<br>
          Opportunity to observe<br>
          Conflict of interest<br>
          Method (sample, date, peer review vs rumor)<br>
          Corroboration`,
          {
            label: "conflict of interest",
            problem: "Source A: a university study of air quality, methods posted. Source B: the factory's press office saying emissions are &ldquo;perfectly safe.&rdquo; Compare credibility on emissions.",
            steps: [
              "<strong>Expertise:</strong> both might have technicians; the press office's job is defense.",
              "<strong>Objectivity:</strong> B has a direct financial and legal interest.",
              "<strong>Method:</strong> A offers a checkable study; B offers a slogan.",
              "<strong>MCQ move:</strong> the exam wants the conflict and the missing method, not a claim that companies never tell the truth."
            ],
            answer: "Answer: A is more credible here because of method and weaker conflict; B is an interested slogan."
          },
          {
            label: "expertise mismatch",
            problem: "A famous athlete endorses a memory supplement. Why is this weak ethos for a medical claim?",
            steps: [
              "<strong>Fame is not domain expertise:</strong> athletic skill does not train someone to evaluate clinical evidence.",
              "<strong>Interest:</strong> endorsement deals pay.",
              "<strong>What would be stronger:</strong> independent trials, not a jersey.",
              "<strong>MCQ move:</strong> choose &ldquo;lacks relevant expertise / paid promoter,&rdquo; not &ldquo;athletes never remember things.&rdquo;"
            ],
            answer: "Answer: Celebrity ethos is off-domain and interested."
          },
          { problem: "An anonymous comment says a restaurant failed inspection. The county health dashboard, dated yesterday, shows no violation. How do you weigh them?", hint: "Named, dated, official method vs unsourced claim." },
          "Rejecting a source only because it has a point of view (everyone does) instead of asking about expertise, interest, and method. Also, treating .edu as automatically true.",
          [
            check("Which source is most reliable for yesterday's high temperature in Phoenix?", ["A poem about heat", "The National Weather Service daily record", "A travel ad calling Phoenix &ldquo;always perfect&rdquo;", "An undated social post with no station named"], 1, "A meteorological record is dated, instrumental, and institutional. Ads and poems have other jobs."),
            check("A pharmaceutical company funds a trial of its own drug and does not pre-register the method. The biggest credibility concern is:", ["The topic is scientific", "Conflict of interest plus an opaque method", "All numbers are opinions", "Only government authors can be believed"], 1, "Funding plus missing methods is the objectivity/reliability problem, not science as a subject.")
          ]
        ),
        section(
          "Accurate summary without distortion",
          "Summary errors on the exam are usually scope changes, polarity flips, or imported motives. Stay inside the passage.",
          "Compare the summary to the original's main idea, hedges, and proportions. A passage that spends 80% on causes should not be summarized as a how-to. A persuasive text's summary must still report the author's claim without turning it into the test-maker's claim about the world.",
          `Distortion types:<br>
          Broadening: some &rarr; all; may &rarr; will<br>
          Narrowing: dropping the actual main idea for a side example<br>
          Polarity: support &rarr; oppose<br>
          Invention: adding a cause, villain, or number not in the text`,
          {
            label: "hedge preserved",
            problem: "Original: &ldquo;Early results suggest the tutoring model may help ninth graders, though the sample is small.&rdquo; Which summary fails?",
            steps: [
              "<strong>Essential hedges:</strong> suggest, may, small sample.",
              "<strong>Failing rewrite:</strong> &ldquo;Research has proven that tutoring always raises ninth-grade achievement.&rdquo;",
              "<strong>Passing rewrite:</strong> keeps uncertainty and population.",
              "<strong>MCQ move:</strong> the dramatic, slogan-like choice is usually wrong."
            ],
            answer: "Answer: Any summary that upgrades &ldquo;may / small sample&rdquo; to proof."
          },
          {
            label: "proportion",
            problem: "An editorial uses one paragraph on cost and four paragraphs on safety. A summary mentions only cost. What is wrong?",
            steps: [
              "<strong>Main emphasis:</strong> safety is the controlling concern.",
              "<strong>A true sentence can still be a bad summary:</strong> cost appeared, but it was not the center.",
              "<strong>MCQ move:</strong> choose the option that reflects both the claim and where the author spent words."
            ],
            answer: "Answer: The summary is true but disproportionate; it hides the author's main emphasis."
          },
          { problem: "Passage opposes a ban and offers three reasons. Summary: &ldquo;The author is undecided.&rdquo; Name the distortion.", hint: "Polarity/stance error." },
          "Summarizing what you think is true instead of what the author wrote, especially when you disagree.",
          [
            check("Passage: &ldquo;The council delayed the vote; members asked for a traffic study.&rdquo; Which summary is accurate?", ["The council passed the project unanimously.", "The vote was postponed pending more traffic information.", "Citizens have already approved the project.", "The council banned all studies."], 1, "Delay plus a requested study is all the original gives."),
            check("A summary adds that the author &ldquo;secretly wants higher taxes&rdquo; though the passage never discusses taxes. This error is:", ["A faithful inference from tone alone", "Invention beyond the text", "A required NES paraphrase skill", "Objectivity in the source"], 1, "Motives and topics not in the passage cannot appear in an accurate summary.")
          ]
        )
      ]
    },

    "rd-06": {
      title: "Graphics, features, and multimodal texts",
      domain: "reading",
      intro: `<p><strong>NES 301 competencies 0002 and 0004:</strong> Informational graphics (tables, graphs, charts) and technical graphics (keys, flowcharts, schematics) carry meaning that prose may not repeat. Read features as a system: title, legend, caption, scale, and nearby sentences. Ask why this organization&mdash;including why a picture is being used.</p>`,
      sections: [
        section(
          "Tables, graphs, and charts as evidence",
          "A table lists values in rows and columns. A graph shows relationships among quantities. A chart may be a graph or a labeled display. All three need titles and units.",
          "Before interpreting a trend, name the variables. A rising line is meaningless until you know whether it is deaths, dollars, or degrees. Compare categories only when the graphic uses the same unit. On MCQs, a statement is supported only if the display actually contains that comparison.",
          `Graphic reading order:<br>
          Title &rarr; legend &rarr; units/scale &rarr; what is plotted &rarr; what is NOT plotted<br>
          Then: which prose claim is licensed?`,
          {
            label: "supported statement",
            problem: "Table: &ldquo;Median rent, 2024.&rdquo; City A $1,200; City B $1,450; City C $1,100. Which claim is supported?",
            steps: [
              "<strong>Variable:</strong> median rent, 2024, three cities.",
              "<strong>Licensed:</strong> City B's median is highest of the three.",
              "<strong>Not licensed:</strong> City B is unaffordable, or rents rose, or mean rent equals median.",
              "<strong>MCQ move:</strong> reject choices that add cause, fairness, or a year-to-year change the table does not show."
            ],
            answer: "Answer: Among these cities in 2024, City B has the highest median rent."
          },
          {
            label: "why this organization",
            problem: "A textbook places a climate table beside a paragraph on grape growing. Why include the table rather than more adjectives?",
            steps: [
              "<strong>Job of the table:</strong> exact ranges (temperature, rainfall) a grower or student can use.",
              "<strong>Job of the prose:</strong> to tell the reader what to notice.",
              "<strong>Organization answer:</strong> the author uses a display because precise comparison is the point.",
              "<strong>MCQ move:</strong> &ldquo;why this feature&rdquo; = the task it makes possible, not &ldquo;to be pretty.&rdquo;"
            ],
            answer: "Answer: So readers can compare exact climate values the paragraph only interprets."
          },
          { problem: "A pie chart of &ldquo;budget shares&rdquo; has no percentages labeled and slices that do not look equal. What must you refuse to conclude?", hint: "Without numbers or a legend, slice size is not a reliable quantity." },
          "Reading the picture's drama (a huge arrow, a tall bar) instead of the scale. Also, comparing two charts that use different units as if they were the same.",
          [
            check("A bar graph shows school A's test average at 82 and school B's at 80. The most supported conclusion is:", ["School A is a better school in every way", "School A's plotted average is 2 points higher than school B's", "School B cheated", "The difference must be due to class size"], 1, "Only the plotted averages are given. Quality, cheating, and class size are inventions."),
            check("Why might an author present the same data as a table instead of a line graph?", ["Tables cannot show numbers", "A table makes exact lookup easier; a line graph emphasizes trend over time", "Line graphs are only for poetry", "Tables hide units by design"], 1, "Form follows job: lookup vs trend.")
          ]
        ),
        section(
          "Captions, keys, and print features",
          "Multimodal texts combine prose with titles, headings, captions, sidebars, footnotes, and legends. A caption binds an image to a claim; a heading previews a section's job.",
          "When prose and a graphic seem to disagree, do not instantly pick a side. Check whether they report different variables (visits vs checkouts) or different years. Headings help you predict, but a heading can be rhetorical in a magazine; still verify against the body. Footnotes and keys override casual reading of the picture.",
          `If prose and graphic conflict:<br>
          1. Same variable? &nbsp; 2. Same year/place? &nbsp; 3. Same unit?<br>
          If yes to all and they still clash, the text may be sloppy&mdash;say what each actually shows.`,
          {
            label: "caption binds the image",
            problem: "A photo of a crowded platform is captioned &ldquo;Opening day, 2018, not current ridership.&rdquo; The article is about 2024 declines. What must a reader not do?",
            steps: [
              "<strong>Caption's job:</strong> stop you from treating a 2018 image as 2024 evidence.",
              "<strong>Feature literacy:</strong> the picture is illustrative history, not the current data.",
              "<strong>MCQ move:</strong> the correct choice respects the caption's time stamp."
            ],
            answer: "Answer: Do not use the photo as proof of 2024 crowding."
          },
          {
            label: "heading vs body",
            problem: "Heading: &ldquo;A miracle crop.&rdquo; Body: yields rose 4% in one trial and failed in two others. How should you read the heading?",
            steps: [
              "<strong>Magazine headings may sell:</strong> &ldquo;miracle&rdquo; is hype.",
              "<strong>Body controls:</strong> mixed trial results, not a miracle.",
              "<strong>Purpose:</strong> possibly to hook; the informational content is in the body and any table.",
              "<strong>MCQ move:</strong> when asked for the author's actual claim, privilege the body and data."
            ],
            answer: "Answer: Treat the heading as a hook; the body reports mixed, modest results."
          },
          { problem: "A map key shows gray = proposed lane, black = built lane. The article says &ldquo;the lane is finished.&rdquo; The map is mostly gray. What do you report?", hint: "Name the mismatch: prose vs legend-coded map." },
          "Ignoring captions because the photo &ldquo;looks obvious,&rdquo; or trusting a heading that the data contradict.",
          [
            check("A footnote says amounts are in thousands. A table cell reads 12. The quantity is:", ["12", "12,000", "0.012", "12 million"], 1, "The footnote scales every cell."),
            check("In a multimodal article, the most responsible way to resolve a clash between a chart and a sentence is to:", ["Always believe the sentence", "Always believe the largest picture", "Check whether they measure the same variable, time, and unit", "Average the two claims"], 2, "Alignment of variable and unit comes before picking a winner.")
          ]
        ),
        section(
          "Flow, schematics, and misleading visuals",
          "Technical graphics tell you how to act or how a system is hooked up. Persuasive graphics can distort by truncation, pictogram scaling, or cropped photos. The same reading discipline applies: decode, then judge.",
          "A flowchart organizes decisions; a schematic organizes parts and connections. A pictogram that doubles the height and width of an icon quadruples the area, so the picture lies even if the label is honest. Ask why the designer chose that visual&mdash;clarity, or pressure.",
          `Misleading-visual checklist:<br>
          Axis that does not start at zero when comparing magnitudes<br>
          Pictograms scaled in two dimensions<br>
          Photo cropped to remove context<br>
          3-D pie slices that inflate a wedge`,
          {
            label: "schematic vs picture",
            problem: "A coffee-maker schematic shows a heating element between two wires. A photo shows a curved plastic shell. Which tells you how electricity flows?",
            steps: [
              "<strong>Schematic job:</strong> connections and components.",
              "<strong>Photo job:</strong> appearance.",
              "<strong>Task match:</strong> a wiring or safety question needs the schematic.",
              "<strong>MCQ move:</strong> choose the graphic whose convention matches the question (flow vs look)."
            ],
            answer: "Answer: The schematic; the photo does not encode the circuit."
          },
          {
            label: "distorted comparison",
            problem: "An ad represents a 2&times; sales increase with a moneybag whose height and width both double. What is the distortion?",
            steps: [
              "<strong>Honest number:</strong> sales doubled.",
              "<strong>Visual area:</strong> 2 &times; 2 = 4 times the ink.",
              "<strong>Effect:</strong> readers feel a fourfold boom.",
              "<strong>MCQ move:</strong> this is the NES-style &ldquo;pictorial increase exceeds the data&rdquo; item."
            ],
            answer: "Answer: Two-dimensional scaling makes a doubling look like a quadrupling."
          },
          { problem: "A 3-D pie chart tilts so the &ldquo;our brand&rdquo; slice looks larger. The numbers say 22% vs a rival's 24%. What should a reader conclude?", hint: "Believe the numbers; the tilt is rhetoric." },
          "Trusting visual area or camera angle over labeled values. Also, using a flowchart as if later steps could override an earlier No.",
          [
            check("A campaign poster crops a photo so a small crowd looks packed. The ethical reading problem is:", ["Photos cannot be used in persuasion", "Cropping can change the implied size of the event", "Crops always tell the truth better than wide shots", "Only flowcharts can mislead"], 1, "Framing is a rhetorical choice that can inflate turnout."),
            check("You need to know which fuse to check after a &ldquo;no power&rdquo; symptom. The best graphic is:", ["A decorative product photo", "A decision flowchart plus a wiring schematic", "A pie chart of last year's sales", "An editorial cartoon"], 1, "Diagnosis is a branched procedure plus connections&mdash;flowchart and schematic.")
          ]
        )
      ]
    }
  });
})();
