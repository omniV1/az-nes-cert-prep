/* Quizlet-style term/definition decks. Original wording — not Pearson stems.
   `example` is a usage phrase that shows the definition’s structure in English. */
window.FLASHCARDS = (() => {
  function slug(text) {
    return String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function shuffle(list, seed) {
    const keyOf = item => (item && typeof item === "object" && item.term) ? item.term : String(item);
    const hash = value => {
      let h = 2166136261;
      for (const ch of String(value)) {
        h ^= ch.charCodeAt(0);
        h = Math.imul(h, 16777619);
      }
      return h >>> 0;
    };
    return list.slice().sort((a, b) => hash(seed + ":" + keyOf(a)) - hash(seed + ":" + keyOf(b)));
  }

  const decks = [
    {
      id: "reading-process",
      title: "Reading process and skills",
      domain: "reading",
      aepa: "Field 02 · 0001 / 0004",
      nes: "NES 301 · 0001",
      blurb: "How you read: rate, monitoring, word-meaning clues, general vs specific.",
      cards: [
        { term: "Skimming", definition: "Fast pass for gist or to find a section — not full comprehension.", example: "She ran her eyes down the headings to see if the memo was about staffing." },
        { term: "Scanning", definition: "Sweeping a text to locate a specific name, date, or fact.", example: "He searched the table for the row labeled sodium." },
        { term: "Close reading", definition: "Slow rereading that tracks wording, structure, and implication.", example: "She circled the one adjective that turned a report into an accusation." },
        { term: "Metacognition", definition: "Watching your own understanding and changing strategy when it fails.", example: "I don’t get this paragraph — I’ll reread the last two sentences instead of pushing on." },
        { term: "Schema", definition: "Prior knowledge you bring to a text; it helps or it distorts.", example: "Knowing what a warranty is, she expected coverage limits before she finished page one." },
        { term: "Predicting", definition: "Using title, headings, and opening lines to forecast what comes next.", example: "The title ‘Why the Bridge Failed’ made him expect a cause, not a tourist history." },
        { term: "Clarifying", definition: "Stopping to resolve a confusing word, pronoun, or jump in the argument.", example: "Wait — does they mean the students or the board?" },
        { term: "Questioning the text", definition: "Asking what the author is doing and what is not yet proven.", example: "This sentence sounds like proof, but has the writer actually shown the cause?" },
        { term: "Summarizing", definition: "Restating the central idea in order, without new claims or trivia.", example: "The article argues the levy is needed, then lists three costs, then answers one objection." },
        { term: "Synthesizing", definition: "Combining ideas from more than one place into a new understanding.", example: "The graph’s drop plus the interview’s ‘we cut the bus’ explains the attendance dip." },
        { term: "Annotating", definition: "Margin notes that mark claims, shifts, and questions — not highlighting everything.", example: "In the margin: claim / evidence / this overreaches." },
        { term: "Rereading", definition: "Returning to a hard stretch after a first pass, with a specific purpose.", example: "I’ll reread the third paragraph only to find the warrant." },
        { term: "KWL", definition: "Know / Want to know / Learned — a before-and-after comprehension frame.", example: "Know: canals move water. Want: who paid. Learned: the pamphlet never says." },
        { term: "SQ3R", definition: "Survey, Question, Read, Recite, Review — a study-reading routine.", example: "Survey the headings, turn one into a question, then read to answer it." },
        { term: "Reading rate", definition: "Speed matched to purpose: slower for analysis, faster for search.", example: "She slowed for the contract clause and sped up through the company history." },
        { term: "Denotation", definition: "The dictionary, literal meaning of a word.", example: "Home denotes a dwelling — four walls, an address." },
        { term: "Connotation", definition: "The feeling or cultural association a word carries beyond its literal sense.", example: "Home connotes warmth; residence does not." },
        { term: "Context clue", definition: "Nearby wording that lets you bound an unknown word without a dictionary.", example: "The arid, almost rainless plain — arid is bounded by almost rainless." },
        { term: "Appositive definition", definition: "A restatement set beside the word, often between commas.", example: "A kiva, an underground ceremonial room, sat at the plaza’s edge." },
        { term: "Synonym clue", definition: "A nearby word that means roughly the same thing.", example: "The edict, or official order, closed the market." },
        { term: "Antonym clue", definition: "A contrast signal (but, unlike, rather than) that bounds the word by opposition.", example: "Unlike the sparse desert, the oasis was lush." },
        { term: "Example clue", definition: "A list or instance that shows what the word covers.", example: "Marsupials — kangaroos, koalas, opossums — carry young in pouches." },
        { term: "Inference clue", definition: "You must combine several details; no single synonym sits next to the word.", example: "Mud on the boots, a snapped oar, and ‘we turned back’ together bound foundered." },
        { term: "Morphology", definition: "Using roots, prefixes, and suffixes to guess meaning.", example: "Un- + predict + -able → not able to be predicted." },
        { term: "Etymology", definition: "A word’s history and language of origin — useful, not a substitute for context.", example: "Democracy comes from demos, but this sentence may not mean ‘rule by the people’ as a compliment." },
        { term: "Register", definition: "Level of formality and field vocabulary suited to audience and purpose.", example: "A lab report says decreased; a text to a friend says dropped." },
        { term: "Jargon", definition: "Specialized terms of a field; precise inside the field, opaque outside it.", example: "The nurse wrote NPO; the family needed nothing by mouth." },
        { term: "Dialect", definition: "A regional or social variety of a language with its own patterns — not 'incorrect English.'", example: "Y’all is a second-person plural in that variety, not a grammar error." },
        { term: "Main idea", definition: "The claim or point the rest of the passage supports.", example: "The whole article exists to argue that the levy is necessary this year." },
        { term: "Supporting detail", definition: "A fact, example, or image that develops the main idea — not a second thesis.", example: "Bus 12 ran 18 minutes late on Tuesday supports unreliability; it is not the article’s thesis." },
        { term: "Stated information", definition: "Something the text actually says.", example: "The notice says the pool closes at 6 — that is stated." },
        { term: "Implied information", definition: "A conclusion the wording licenses, even if no sentence states it outright.", example: "Wet streets and umbrellas license ‘it has been raining’ even if rain is never named." },
        { term: "General statement", definition: "A broad claim; details beneath it should fit, not replace it.", example: "Droughts strain cities is general; Phoenix’s 2023 restrictions are a detail under it." },
        { term: "Specific detail", definition: "A narrow fact that may be true without being the passage’s point.", example: "The canal was lined in 1911 may be true and still not be why the author wrote the piece." }
      ]
    },
    {
      id: "informational",
      title: "Literacy and informational texts",
      domain: "reading",
      aepa: "Field 02 · 0001 / 0003",
      nes: "NES 301 · 0002–0004",
      blurb: "Structure, graphics, credibility, workplace texts, fact vs opinion.",
      cards: [
        { term: "Informational text", definition: "Prose whose primary job is to explain, report, or instruct — not to tell a story.", example: "How to winterize a swamp cooler explains; it does not narrate a character’s night." },
        { term: "Expository organization", definition: "Thesis plus explanation: cause/effect, compare/contrast, problem/solution, or classification.", example: "Thesis: shade trees cut cooling bills. Then: how, by how much, compared with what." },
        { term: "Cause and effect", definition: "Shows why something happened and what followed.", example: "Because the canal lining cracked, seepage rose, so nearby basements flooded." },
        { term: "Compare and contrast", definition: "Sets two things side by side to show likeness and difference.", example: "Both buses are late; only Route 7 skips the hospital stop." },
        { term: "Problem and solution", definition: "Names a difficulty, then the proposed fix and why it might work.", example: "Lunch waste is high; offer a second vegetable and publish the weights." },
        { term: "Chronological order", definition: "Events or steps in time sequence.", example: "Mix, rest 20 minutes, bake, cool, slice." },
        { term: "Inverted pyramid", definition: "News lead: most newsworthy facts first, then background.", example: "Council voted 5–2 to raise fares. The rest of the story explains who spoke and why." },
        { term: "Author’s purpose", definition: "What the writer is trying to do: inform, persuade, instruct, or entertain.", example: "This pamphlet exists to get you to vote yes — persuade, not merely inform." },
        { term: "Thesis", definition: "The central arguable claim an informational or persuasive piece is built to support.", example: "The city should restore night bus service is a thesis; ridership fell is a fact under it." },
        { term: "Topic sentence", definition: "The sentence that states what a paragraph will develop.", example: "Three design flaws made the bridge fail — the next sentences name the three." },
        { term: "Text feature", definition: "Heading, caption, bold term, sidebar, or numbered step that guides reading.", example: "The bold word glossary in the margin tells you where the definition lives." },
        { term: "Caption", definition: "Words that label or reframe an image — they can change what the picture seems to prove.", example: "The photo is a crowd; the caption ‘overflowing protest’ is the claim." },
        { term: "Legend / key", definition: "The decoder for symbols, colors, or abbreviations on a graphic.", example: "Red squares = closed stations, says the key — without it the map is decoration." },
        { term: "Table", definition: "Rows and columns of data for lookup, not a narrative.", example: "Find Tuesday, then the sodium column — that is table reading." },
        { term: "Chart / graph", definition: "A visual of quantities or change over time; ask what is measured and omitted.", example: "The line climbs, but the axis starts at 90%, so a 2-point change looks like a crisis." },
        { term: "Diagram", definition: "A labeled drawing of parts or process, not a photograph of a scene.", example: "Arrows from boiler to pipe to radiator show the heating loop." },
        { term: "Primary source", definition: "An original artifact from the time: letter, speech, data set, law, photograph.", example: "Equiano’s narrative is primary; a 2020 article about it is not." },
        { term: "Secondary source", definition: "Commentary or synthesis about primary material.", example: "A historian’s chapter on Equiano comments on the narrative; it is secondary." },
        { term: "Credibility", definition: "Whether the source is accountable, informed, and free enough of hidden interest to trust on this claim.", example: "A named city engineer on drainage is more credible here than an anonymous comment." },
        { term: "Bias", definition: "A leaning that shapes what is included, omitted, or loaded in the wording.", example: "The flyer lists only success stories and calls opponents ‘anti-kid.’" },
        { term: "Fact", definition: "A checkable statement about the world — still may be irrelevant to the claim.", example: "The meeting ran 47 minutes is checkable; it does not prove the policy is wise." },
        { term: "Opinion", definition: "A value judgment or interpretation, not something a measurement settles by itself.", example: "The policy is unfair cannot be settled by a stopwatch." },
        { term: "Warrant", definition: "The unstated rule that lets this evidence count as proof of that claim.", example: "Claim: hire more nurses. Evidence: wait times. Warrant: wait times mean too few nurses." },
        { term: "Sufficient evidence", definition: "Enough support for the size of the claim — not one anecdote for a universal law.", example: "One wet basement does not prove every house on the street floods." },
        { term: "Relevant evidence", definition: "Support that actually bears on the claim, even if the fact is true.", example: "The mayor likes hiking is true and still irrelevant to the water-rate vote." },
        { term: "Accurate summary", definition: "Keeps the author’s order and emphasis; does not add a stronger claim than the text made.", example: "The piece says may reduce waste — a summary that says proves waste will vanish overclaims." },
        { term: "Paraphrase", definition: "Your wording of someone else’s idea — still needs citation.", example: "Douglass argues literacy can feel like a curse (Douglass) — your words, his idea, still cited." },
        { term: "Technical / functional text", definition: "A text meant to be used: manual, warranty, form, procedure, consumer notice.", example: "If the seal is broken, coverage ends — you use that sentence, you don’t admire it." },
        { term: "Procedure", definition: "Numbered or sequenced steps a reader must follow in order.", example: "1. Shut the valve. 2. Drain. 3. Replace the washer. Skip 1 and you flood the cabinet." },
        { term: "Warranty", definition: "A consumer document stating what is covered, for how long, and what voids coverage.", example: "Parts for one year; labor excluded if you install it yourself." },
        { term: "Overclaim", definition: "A conclusion stronger than the passage licenses (always, proved, safest).", example: "The study found a link; the choice that says this proves the cause overclaims." },
        { term: "Tone (informational)", definition: "The writer’s attitude toward the subject — explanatory, cautionary, promotional — not the reader’s mood.", example: "Residents should note the deadline is cautionary, not a ghost-story mood." }
      ]
    },
    {
      id: "rhetoric-composition",
      title: "Rhetoric and composition",
      domain: "writing",
      aepa: "Field 02 · 0007–0012",
      nes: "NES 301 · 0009–0015",
      blurb: "Appeals, fallacies, modes, process, research ethics, sentence craft.",
      cards: [
        { term: "Ethos", definition: "Appeal to the speaker’s credibility, fairness, or shared values.", example: "As a twenty-year mechanic, I won’t sell a repair you don’t need." },
        { term: "Pathos", definition: "Appeal to the audience’s feelings, identity, or imagination.", example: "Picture a child waiting in the dark because the last bus already left." },
        { term: "Logos", definition: "Appeal to pattern, definition, comparison, or data — the sense that the reasoning hangs together.", example: "If wait times doubled after the cut, restoring two routes should cut waits." },
        { term: "Claim", definition: "A debatable assertion the rest of the piece tries to make you accept.", example: "The district should start school after 8:30 is a claim; 7:20 is early is a feeling under it." },
        { term: "Evidence", definition: "Specific support: data, quotation, example, or testimony.", example: "Attendance rose 6% in the later-start pilot (district report, 2024)." },
        { term: "Counterargument", definition: "The strongest reasonable objection, stated fairly before you answer it.", example: "Critics worry later starts collide with sports — that objection deserves a sentence." },
        { term: "Concession", definition: "Granting a limited point to the other side without abandoning your position.", example: "Yes, some jobs start at 7; still, most student jobs do not." },
        { term: "Rebuttal", definition: "The answer that shows why the counterargument does not defeat the claim.", example: "Sports can shift twenty minutes; the attendance data still favors the later bell." },
        { term: "Audience", definition: "Who must be able to use this text; it controls diction, evidence, and tone.", example: "A letter to the board needs costs; a note to ninth graders needs the bell time." },
        { term: "Diction", definition: "Word choice: formal, technical, colloquial, loaded.", example: "Terminated vs let go vs fired — same event, three audiences." },
        { term: "Voice", definition: "The consistent personality of the prose — not a slang drop in an otherwise academic paragraph.", example: "The data suggest a trial. Also tbh the board is sus. — the second sentence breaks voice." },
        { term: "Coherence", definition: "Ideas follow in an order the reader can reconstruct.", example: "Problem, then cause, then fix — not fix, random statistic, then the problem." },
        { term: "Cohesion", definition: "Sentences link with transitions, repeated key terms, and clear pronouns.", example: "The levy failed. That vote left the night routes unfunded. That points back to the levy." },
        { term: "Parallelism", definition: "Same grammatical form in a series or comparison.", example: "The plan will cut wait times, restore night service, and publish monthly data — all verbs." },
        { term: "Narrative writing", definition: "Scene, sequence, and sensory detail that show an event unfolding.", example: "The gym lights hummed. She tied the shoe. Then the buzzer." },
        { term: "Expository writing", definition: "Thesis plus explanation; style is direct and succinct, not decorative.", example: "A swamp cooler works by evaporation. Here is the pad, the pump, the airflow." },
        { term: "Persuasive writing", definition: "A position plus reasons, evidence, and a handled counterargument.", example: "Vote yes: three reasons, one table of costs, then the ‘it raises taxes’ objection answered." },
        { term: "Analytical writing", definition: "An interpretive claim about a text, paid off with quoted evidence.", example: "The speaker’s ‘home’ is a trap, not a comfort: ‘the walls leaned in’ (line 12)." },
        { term: "Lead / hook", definition: "The opening that earns the thesis — not a dictionary definition of a vague noun.", example: "The night the last bus left at 7:10, two nurses missed their shift. Then the thesis." },
        { term: "Revision", definition: "Changing ideas, order, and development — not comma hunting.", example: "Move the counterargument before the conclusion; cut the paragraph that doesn’t serve the thesis." },
        { term: "Editing", definition: "Sentence-level clarity, concision, and grammar after the ideas are in place.", example: "Combine the two short sentences; fix the dangling modifier; keep the argument as-is." },
        { term: "Proofreading", definition: "Last pass for spelling, punctuation, and typos.", example: "Catch it’s/its and the missing period — the ideas are already set." },
        { term: "Plagiarism", definition: "Uncited language or uncited ideas presented as your own.", example: "Pasting a scholar’s sentence without quotes and a name is plagiarism even if you changed a comma." },
        { term: "Quotation", definition: "Exact words in quotation marks, attributed to the source.", example: "Douglass calls literacy at times ‘a curse rather than a blessing’ (ch. 7)." },
        { term: "Open-ended research question", definition: "A question that cannot be answered yes/no and that evidence can actually address.", example: "How did later start times change attendance in three Arizona districts? — not Is sleep good?" },
        { term: "Ad hominem", definition: "Attack the person instead of the data or reasoning.", example: "Don’t trust her budget — she failed chemistry. (The budget is unaddressed.)" },
        { term: "Straw man", definition: "Distort the other view, then refute the distortion.", example: "They want buses. So they want to bankrupt the city. Then you refute bankruptcy." },
        { term: "False dilemma", definition: "Only two boxes when more options exist.", example: "Either we cut arts or we go bankrupt — as if a smaller cut isn’t a third box." },
        { term: "Hasty generalization", definition: "Treating n=1 or a tiny sample as a law.", example: "My cousin got a job without college, so college is useless." },
        { term: "Post hoc", definition: "After this, therefore because of this — sequence treated as cause.", example: "The mascot changed in May; scores fell in June; therefore the mascot caused the drop." },
        { term: "Bandwagon", definition: "Popularity offered as proof.", example: "Most parents already support it, so it must be the right policy." },
        { term: "Slippery slope", definition: "A small step treated as an invented catastrophe with no mechanism.", example: "If we allow hats, next year no one will wear clothes to school." },
        { term: "False analogy", definition: "Compared things do not match where the argument needs them to match.", example: "Running a school is just like running a lemonade stand — budgets and labor law disagree." },
        { term: "Circular reasoning", definition: "The claim restated as its own warrant.", example: "The rule is fair because it treats people fairly." },
        { term: "Red herring", definition: "A distraction from the question actually asked.", example: "Asked about bus cuts, the speaker talks about cafeteria pizza." },
        { term: "False authority", definition: "Fame or expertise in one field used as proof in another.", example: "A famous athlete endorses a reading curriculum — fame is not literacy research." }
      ]
    },
    {
      id: "oral-visual",
      title: "Oral and visual communication",
      domain: "oral",
      aepa: "Field 02 · 0013–0018",
      nes: "NES 301 · 0016–0017",
      blurb: "Listening, discussion, delivery, media bias, presentations, copyright.",
      cards: [
        { term: "Hearing vs listening", definition: "Hearing is sound arriving; listening is attention plus interpretation.", example: "The announcement played; she heard noise but could not repeat the gate number." },
        { term: "Active listening", definition: "Paraphrase, question, and hold a reply until the speaker’s point is clear.", example: "So you’re saying the delay is the vendor, not staffing — is that right?" },
        { term: "Barrier to listening", definition: "Bias, distraction, or rehearsing your answer instead of tracking theirs.", example: "He planned his comeback during her second sentence and missed the actual request." },
        { term: "Register (speech)", definition: "Formality and vocabulary fitted to this audience and purpose.", example: "To the board: I recommend we restore night service. To a friend: we should get the late bus back." },
        { term: "Intonation", definition: "Pitch pattern that can turn a statement into a question or a warning.", example: "You’re coming. vs You’re coming? — same words, different pitch job." },
        { term: "Pace", definition: "Speed of delivery; too fast buries structure, too slow loses attention.", example: "She slowed on the three reasons and moved quickly through the greeting." },
        { term: "Volume and projection", definition: "Loudness matched to room and emphasis — shouting is not clarity.", example: "He dropped his voice on the warning so the back row still heard it, without yelling." },
        { term: "Eye contact", definition: "A delivery cue that signals address; staring down a page is not engagement.", example: "She looked up from the note card when she named the decision they had to make." },
        { term: "Nonverbal cue", definition: "Gesture, posture, and face that confirm or contradict the words.", example: "‘I’m fine with the plan,’ he said, arms crossed, chair pushed back." },
        { term: "Turn-taking", definition: "Conversation rule: one floor at a time, with signals that you are yielding or holding.", example: "She paused and opened her palm — the floor was available." },
        { term: "Paraphrase (discussion)", definition: "Restating another speaker’s point to check understanding before you argue.", example: "If I heard you, you want a trial month, not a permanent cut." },
        { term: "Consensus", definition: "A decision the group can live with, not necessarily a unanimous cheer.", example: "No one loved 8:10, but everyone could teach with it." },
        { term: "Majority vote", definition: "More than half decide; dissent may remain on the record.", example: "5–2 passed the fare hike; the two no votes are still in the minutes." },
        { term: "Motion (parliamentary)", definition: "A formal proposal the group must dispose of before moving on.", example: "I move that we restore the 9 p.m. route for a 60-day trial." },
        { term: "Second (parliamentary)", definition: "Another member agrees the motion is worth discussing.", example: "Second — now the trial route can be debated." },
        { term: "Visual aid", definition: "A slide, object, or chart that carries one job — not a paragraph pasted on a screen.", example: "One bar chart: wait times before and after. No paragraph of 12-point text." },
        { term: "Caption vs image", definition: "The caption can reframe what the photo actually shows; read both.", example: "The photo is a line at a window; the caption ‘crisis at the polls’ is the argument." },
        { term: "Cropping", definition: "What is cut out of a frame is an argument, not a neutral window.", example: "Crop away the empty chairs and the ‘packed hearing’ photo is a different claim." },
        { term: "Camera angle", definition: "High, low, or close shots assign power and intimacy.", example: "Shot from the floor, the principal looks towering; from above, small." },
        { term: "Juxtaposition (media)", definition: "Placing two images or shots together so the pair makes a claim neither makes alone.", example: "A mansion, then a tent — the cut argues inequality without a sentence." },
        { term: "Loaded language (media)", definition: "Words chosen to trigger a verdict before the evidence is in.", example: "Mob vs crowd vs gathering — the noun already voted." },
        { term: "Testimonial (ad)", definition: "A person endorses a product; fame is not expertise.", example: "A celebrity holds the vitamin and smiles; no study is shown." },
        { term: "Propaganda", definition: "Communication designed to manufacture consent, often by simplifying and repeating.", example: "The same slogan on every bus: three words, no numbers, no opponent named fairly." },
        { term: "Copyright", definition: "Legal control of a work; 'I found it online' is not permission.", example: "She still needs a license to drop that song under the class video." },
        { term: "Fair use", definition: "Limited use of copyrighted work for criticism, comment, or teaching — not a blank copy.", example: "A 20-second clip to critique the ad may qualify; uploading the whole film does not." },
        { term: "Public domain", definition: "A work no longer (or never) under copyright; still cite it as a source.", example: "You may reprint the 1855 Leaves of Grass text; you still say Whitman wrote it." },
        { term: "Citation in a presentation", definition: "Name the source on the slide or spoken line when you use someone else’s words, data, or image.", example: "Wait times: City Transit report, March 2024 — on the slide, not only in your head." },
        { term: "Evaluating a speaker", definition: "Judge delivery, evidence, and fallacies — not whether you already liked the person.", example: "The joke landed, but the only ‘proof’ was a cousin’s story." },
        { term: "Purpose of a speech", definition: "Inform, persuade, or commemorate; organization follows that job.", example: "A eulogy organizes memories; a budget speech organizes reasons to vote." },
        { term: "Multimedia", definition: "Combined sound, image, and text; each channel should add information, not duplicate it.", example: "The clip shows the leak; the caption names the date; the voiceover does not read the caption aloud." }
      ]
    },
    {
      id: "literature-terms",
      title: "Literature terms and devices",
      domain: "literature",
      aepa: "Field 02 · 0002 / 0005 / 0006",
      nes: "NES 301 · 0005–0008",
      blurb: "Devices, forms, narrative elements, periods as artistic problems.",
      cards: [
        { term: "Simile", definition: "Comparison using like or as.", example: "The ice was like glass under the streetlight." },
        { term: "Metaphor", definition: "Implied comparison with no like/as.", example: "The ice was glass under the streetlight." },
        { term: "Personification", definition: "Human traits given to something nonhuman.", example: "The wind worried the screen door all night." },
        { term: "Metonymy", definition: "A related name stands in (the Crown for the monarch).", example: "The White House declined to comment — building for administration." },
        { term: "Synecdoche", definition: "A part stands for the whole (all hands on deck).", example: "We need more boots on the trail — boots for hikers." },
        { term: "Apostrophe (device)", definition: "Direct address to someone absent or to an abstraction.", example: "O Death, be not proud — Death is addressed as if it could hear." },
        { term: "Hyperbole", definition: "Deliberate exaggeration.", example: "I’ve told you a thousand times to lock the gate." },
        { term: "Understatement", definition: "Deliberate downplaying for effect.", example: "After the roof came off, she said, ‘It’s a bit breezy.’" },
        { term: "Paradox", definition: "An apparent contradiction that points to a truth.", example: "The more he explained, the less anyone understood." },
        { term: "Verbal irony", definition: "Saying the opposite of what is meant.", example: "Lovely weather, she said, as the tent blew across the lot." },
        { term: "Dramatic irony", definition: "The audience knows more than a character.", example: "We saw the letter in the drawer; he still trusts the friend who wrote it." },
        { term: "Situational irony", definition: "Outcome reverses a reasonable expectation.", example: "The fire station burned down." },
        { term: "Alliteration", definition: "Repeated initial consonant sounds.", example: "Cold canal current." },
        { term: "Assonance", definition: "Repeated vowel sounds inside words.", example: "The late gray day stayed." },
        { term: "Allusion", definition: "A brief reference to a known text, person, or event.", example: "He had an Achilles of a left ankle — the myth is borrowed, not retold." },
        { term: "Motif", definition: "A recurring image or idea that helps build theme.", example: "Locked doors keep appearing until the novel’s idea of privacy is clear." },
        { term: "Theme", definition: "An arguable insight the work develops — not a one-word topic.", example: "Not ‘love,’ but ‘love that keeps a secret becomes a kind of theft.’" },
        { term: "Foil", definition: "A character whose contrast throws another character into relief.", example: "The reckless brother makes the cautious sister’s choices visible." },
        { term: "Point of view", definition: "Who sees and tells: first, limited third, omniscient, or unreliable.", example: "I thought the gate was locked — first person, and maybe wrong." },
        { term: "Tone (literary)", definition: "The narrator’s or speaker’s attitude toward the subject.", example: "‘Another heroic memo from downtown’ — the narrator is dry, not the weather." },
        { term: "Mood", definition: "The atmosphere the work creates for the reader.", example: "Unlit hall, ticking clock, no footsteps — the reader is meant to feel dread." },
        { term: "Soliloquy", definition: "A character alone on stage speaking inner thought.", example: "The stage empties; she speaks her doubt to the air, not to another person." },
        { term: "Aside", definition: "A brief remark to the audience that other characters do not 'hear.'", example: "He turns out: ‘She’ll believe that.’ The others keep talking." },
        { term: "Blank verse", definition: "Unrhymed iambic pentameter.", example: "To be, or not to be, that is the question — five iambs, no end rhyme." },
        { term: "Free verse", definition: "Poetry without a regular meter or rhyme scheme.", example: "Line lengths jump; no beat you can tap the same way twice." },
        { term: "Iambic pentameter", definition: "Five iambs (unstressed–stressed) per line.", example: "da-DUM da-DUM da-DUM da-DUM da-DUM — ‘Shall I compare thee to a summer’s day?’" },
        { term: "Sonnet", definition: "Fourteen-line lyric; Shakespearean rhyme abab cdcd efef gg.", example: "Three quatrains turn an idea; a couplet snaps it shut." },
        { term: "Villanelle", definition: "Nineteen-line form with two repeating refrains.", example: "Do not go gentle… / Rage, rage… — the two lines keep returning." },
        { term: "Ballad", definition: "Narrative poem, often in quatrains, built for oral telling.", example: "A quatrain that could be sung: who rode, what happened, what was lost." },
        { term: "Epic", definition: "Long heroic narrative, often beginning in medias res.", example: "The wanderer is already at sea; the childhood comes later, in a telling." },
        { term: "In medias res", definition: "Starting in the middle of the action.", example: "Chapter one opens on the duel, not the morning the insult was spoken." },
        { term: "Denouement", definition: "Unraveling after the climax; the new status quo.", example: "The killer is named; the last pages show who keeps the house." },
        { term: "Allegory", definition: "A narrative whose surface story systematically maps onto another meaning.", example: "The farm’s pigs are not only pigs — each role tracks a political type." },
        { term: "Fable", definition: "Short moral tale, often with animal characters.", example: "The crow drops the cheese; the moral is vanity, not ornithology." },
        { term: "Myth", definition: "Sacred or origin story that a culture treats as explaining the world.", example: "Why the seasons change is told as a descent and return, not as a weather chart." },
        { term: "Legend", definition: "A story rooted in a possible historical figure, enlarged in the telling.", example: "A real sheriff becomes a man who never missed — history plus growth." },
        { term: "Romanticism", definition: "Nature, memory, and the solitary self as the artistic problem.", example: "A speaker alone on a hill, recalling a scene until the self is the subject." },
        { term: "Realism", definition: "Probable social cause: money, class, ordinary consequence.", example: "She misses the rent; the landlord changes the lock — no ghost required." },
        { term: "Modernism", definition: "Fragment, broken time, and experiment with form.", example: "The day is told in shards of thought, not in clock order." },
        { term: "Harlem Renaissance", definition: "Modern Black artistic self-definition using vernacular and high form together.", example: "A sonnet in the same book as blues cadence and street talk — both are the art." }
      ]
    },
    {
      id: "grammar-usage",
      title: "Grammar, usage, and mechanics",
      domain: "language",
      aepa: "Field 02 · 0012",
      nes: "NES 301 · 0009",
      blurb: "Named errors and the fix — cheap points if the term is automatic.",
      cards: [
        { term: "Independent clause", definition: "A group of words with subject and verb that can stand as a sentence.", example: "The rain stopped." },
        { term: "Dependent clause", definition: "Has subject and verb but cannot stand alone (starts with although, because, when, that…).", example: "Although the rain stopped — needs an independent clause to finish." },
        { term: "Phrase", definition: "A group of words without its own subject–verb pair.", example: "after the last bell — no subject doing a verb." },
        { term: "Fragment", definition: "A punctuated 'sentence' missing a needed independent clause.", example: "Because the rain stopped. ← punctuated, still not a sentence." },
        { term: "Run-on", definition: "Two independents jammed together with no legal joiner.", example: "The rain stopped we walked home." },
        { term: "Comma splice", definition: "Two independents joined by a comma only.", example: "The rain stopped, we walked home." },
        { term: "FANBOYS", definition: "Coordinating conjunctions: for, and, nor, but, or, yet, so.", example: "The rain stopped, so we walked home." },
        { term: "Semicolon", definition: "Joins two closely related independents without a conjunction.", example: "The rain stopped; we walked home." },
        { term: "Subject–verb agreement", definition: "The verb follows the true subject, not the nearest noun.", example: "The box of pencils is (not are) on the desk." },
        { term: "Pronoun–antecedent agreement", definition: "A pronoun matches its noun in number and, where required, gender.", example: "Each student brought a laptop — not their if the test wants singular each." },
        { term: "Dangling modifier", definition: "An opening phrase that does not attach to the grammatical subject.", example: "Walking to school, the backpack bounced. (The backpack was not walking.)" },
        { term: "Misplaced modifier", definition: "A modifier sitting next to the wrong word, so the sentence means the wrong thing.", example: "She almost ate all the cookies vs She ate almost all the cookies." },
        { term: "Who vs whom", definition: "Who is the subject form; whom is the object form.", example: "Who called? / To whom did you write?" },
        { term: "It's vs its", definition: "It's = it is; its = possessive.", example: "It’s raining. The engine lost its heat." },
        { term: "That vs which", definition: "That introduces a restrictive clause; which (with commas) a nonrestrictive one.", example: "The bus that stops here is late. The 7, which I usually miss, is late." },
        { term: "Restrictive clause", definition: "Needed to identify the noun; no commas.", example: "The students who missed the bus waited — not all students, only those." },
        { term: "Nonrestrictive clause", definition: "Extra information; set off with commas.", example: "My bus, which is usually late, came on time — there is only one ‘my bus.’" },
        { term: "Active voice", definition: "The subject performs the verb.", example: "The committee tabled the motion." },
        { term: "Passive voice", definition: "The subject receives the action; useful when the actor is unknown or beside the point.", example: "The motion was tabled." },
        { term: "Parallel structure", definition: "Items in a list or comparison share the same grammatical shape.", example: "to revise, to edit, and to proofread — not to revise, editing, and proofread." },
        { term: "Appositive", definition: "A noun phrase that renames the noun beside it.", example: "My sister, a welder, fixed the gate." },
        { term: "Modifier", definition: "A word or phrase that qualifies another word (adjective, adverb, phrase).", example: "The almost silent canal — almost modifies silent." },
        { term: "Tense consistency", definition: "Stay in one time frame unless the meaning actually shifts.", example: "She opens the door and saw the note — opens/saw is the break." },
        { term: "Idiom", definition: "A conventional phrase whose meaning is not the sum of the words.", example: "Kick the bucket does not describe a pail." },
        { term: "Homophone error", definition: "Wrong spelling of a word that sounds like the intended one (there/their/they’re).", example: "Their going home should be They’re going home." },
        { term: "Capitalization", definition: "Proper nouns and sentence starts; not every important-feeling word.", example: "She moved to Phoenix in June. — not She Moved To The Southwest." },
        { term: "Possessive apostrophe", definition: "Shows ownership: student’s (one), students’ (more than one).", example: "the student’s locker / the students’ lockers." }
      ]
    }
  ];

  function deckById(id) {
    return decks.find(d => d.id === id) || null;
  }

  function cardsFor(deckIds) {
    const ids = Array.isArray(deckIds) ? deckIds : [deckIds];
    return ids.flatMap(id => {
      const deck = deckById(id);
      if (!deck) return [];
      return deck.cards.map(card => ({ ...card, deckId: deck.id, domain: deck.domain }));
    });
  }

  const DECK_SKILLS = {
    "reading-process": ["reading-process", "vocab-context"],
    "informational": ["informational-texts"],
    "rhetoric-composition": ["rhetorical-appeals", "writing-process"],
    "oral-visual": ["media-analysis", "listening-speaking"],
    "literature-terms": ["figurative-language", "literary-elements-intro"],
    "grammar-usage": ["grammar-usage", "agreement-usage"]
  };

  function examItems(deckIds, count, examId) {
    const pool = cardsFor(deckIds);
    if (pool.length < 4) return [];
    const n = count == null ? 20 : count;
    if (n <= 0) return [];
    const seed = examId || ("sit:" + Date.now());
    const ordered = shuffle(pool.map((_, i) => i), seed + ":order").map(i => pool[i]);
    const take = ordered.slice(0, Math.min(n, ordered.length));
    return take.map((card, index) => {
      const others = pool.filter(c => c.term !== card.term);
      const distractorPool = shuffle(others, seed + ":d:" + card.term + ":" + index).slice(0, 3);
      const usage = card.example ? ` In use: ${card.example}` : "";
      const styles = card.example ? 3 : 2;
      const style = hashMod(seed + ":" + card.term + ":style:" + index, styles);
      const skills = DECK_SKILLS[card.deckId] || [];
      const base = {
        domain: card.domain,
        difficulty: "easy",
        skillIds: skills,
        kind: "flashcard",
        answer: 0,
        explanation: `${card.term}: ${card.definition}${usage}`
      };
      if (style === 0) {
        return {
          ...base,
          id: `FC-${card.deckId}-${slug(card.term)}-td`,
          stem: `Which definition matches “${card.term}”?`,
          choices: [card.definition, ...distractorPool.map(c => c.definition)]
        };
      }
      if (style === 2) {
        return {
          ...base,
          id: `FC-${card.deckId}-${slug(card.term)}-ex`,
          stem: `Which term is this sentence using?\n\n${card.example}`,
          choices: [card.term, ...distractorPool.map(c => c.term)]
        };
      }
      return {
        ...base,
        id: `FC-${card.deckId}-${slug(card.term)}-dt`,
        stem: `Which term matches this definition?\n\n${card.definition}`,
        choices: [card.term, ...distractorPool.map(c => c.term)]
      };
    });
  }

  function hashMod(value, n) {
    let h = 2166136261;
    for (const ch of String(value)) {
      h ^= ch.charCodeAt(0);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0) % Math.max(1, n);
  }

  function quizPrompt(card, pool, seed, mode) {
    const kind = mode === "write" ? "write" : "mc";
    if (kind === "write") {
      return {
        mode: "write",
        term: card.term,
        definition: card.definition,
        example: card.example || "",
        prompt: "Type the term (close spelling is fine).",
        passage: card.definition,
        choices: [],
        answer: card.term
      };
    }
    const others = pool.filter(c => c.term !== card.term);
    const distractors = shuffle(others, seed + ":d").slice(0, 3);
    const styles = card.example ? 3 : 2;
    const style = hashMod(seed, styles);
    if (style === 2) {
      const correct = card.term;
      const choices = shuffle([correct, ...distractors.map(c => c.term)], seed + ":c");
      return {
        mode: "mc",
        term: card.term,
        definition: card.definition,
        example: "",
        promptKind: "example",
        prompt: "Which term is this sentence using?",
        passage: card.example,
        choices,
        answer: choices.indexOf(correct)
      };
    }
    const termToDef = style === 0;
    const correct = termToDef ? card.definition : card.term;
    const choices = shuffle(
      [correct, ...distractors.map(c => termToDef ? c.definition : c.term)],
      seed + ":c"
    );
    return {
      mode: "mc",
      term: card.term,
      definition: card.definition,
      example: card.example || "",
      promptKind: termToDef ? "term" : "def",
      prompt: termToDef
        ? `Which definition matches “${card.term}”?`
        : "Which term matches this definition?",
      passage: termToDef ? "" : card.definition,
      choices,
      answer: choices.indexOf(correct)
    };
  }

  function answersMatch(input, expectedTerm, expectedDefinition) {
    const a = fold(input);
    if (!a || a.length < 2) return false;
    if (closeEnough(a, fold(expectedTerm))) return true;
    const withoutParen = fold(String(expectedTerm || "").replace(/\s*\([^)]*\)/g, ""));
    if (closeEnough(a, withoutParen)) return true;
    const parts = withoutParen.split(/\s+(?:vs|or)\s+/);
    if (parts.length > 1) {
      if (parts.includes(a) || closeEnough(a, parts.slice().reverse().join(" vs "))) return true;
    }
    if (expectedDefinition && a.split(" ").length >= 4) {
      if (closeEnough(a, fold(expectedDefinition))) return true;
      if (tokenOverlap(a, fold(expectedDefinition)) >= 0.62) return true;
    }
    return false;
  }

  function fold(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[''`´]/g, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function dropSmall(s) {
    const stop = new Set(["the", "a", "an", "of", "and", "or", "to", "for", "in", "on", "vs"]);
    return s.split(" ").filter(t => t && !stop.has(t)).join(" ");
  }

  function closeEnough(a, b) {
    if (!a || !b) return false;
    if (a === b) return true;
    const aa = dropSmall(a);
    const bb = dropSmall(b);
    if (aa && aa === bb) return true;
    const left = aa || a;
    const right = bb || b;
    if (left === right) return true;
    if (right.startsWith(left) && left.length >= 4) return true;
    if (left.startsWith(right) && right.length >= 4 && right.length / left.length >= 0.7) return true;
    const maxLen = Math.max(left.length, right.length);
    if (maxLen < 3) return left === right;
    const dist = levenshtein(left, right);
    const allowed = maxLen <= 4 ? 1 : maxLen <= 8 ? 2 : maxLen <= 14 ? 3 : 4;
    if (dist <= allowed) return true;
    return dist / maxLen <= 0.3;
  }

  function tokenOverlap(a, b) {
    const stop = new Set(["the", "a", "an", "of", "and", "or", "to", "for", "in", "on", "is", "that", "this", "with", "not", "vs"]);
    const toks = s => new Set(s.split(" ").filter(t => t.length > 2 && !stop.has(t)));
    const aa = toks(a);
    const bb = toks(b);
    if (!aa.size || !bb.size) return 0;
    let hit = 0;
    aa.forEach(t => { if (bb.has(t)) hit += 1; });
    return hit / Math.max(aa.size, bb.size);
  }

  function levenshtein(a, b) {
    const rows = Array.from({ length: a.length + 1 }, (_, i) => i);
    for (let j = 1; j <= b.length; j++) {
      let prev = rows[0];
      rows[0] = j;
      for (let i = 1; i <= a.length; i++) {
        const cur = rows[i];
        rows[i] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, rows[i], rows[i - 1]);
        prev = cur;
      }
    }
    return rows[a.length];
  }

  return { decks, deckById, cardsFor, examItems, quizPrompt, answersMatch };
})();
