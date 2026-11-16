/* Form D — original NES 301 passage clusters aimed at the thinnest competencies:
   research (0011), visual media and presentations (0017), expository writing (0013),
   literature in context and analytical writing (0008, 0015, 0007), world literature
   and poetry (0006, 0007), and vocabulary/etymology (0001).
   Public-domain literature (Gilman 1892, FitzGerald 1859) and original prose only; the
   literary excerpts are unchanged from the first version and were checked against
   Project Gutenberg texts.

   This is the second version of the form. A reader with no passages answered all 30
   questions of the first version (LF183–LF212, now retired) correctly. These questions
   follow the anti-testwiseness rules in CLAUDE.md:
   - the options of a question are the same kind of statement and differ in a checkable fact;
   - the original passages depart from the textbook case, and the textbook answer is offered
     as a wrong option (the unsigned official bulletin, the photo the district owns, the icon
     that is too tall but not twice as wide, the label that goes on after the cover);
   - the word-history passage uses invented mill slang, because real etymologies can be known
     without the passage;
   - no question's stem or options answer another question in its cluster.
   Authored in the option-object format: every option carries a stable id and its own
   explanation, so feedback stays correct when choices are shuffled. */
(function () {
  const P = {
    garden: `SOURCE 1 — “Why Every School Garden Needs Drip,” by Dale Ferris, on the blog of FlowRight Supply (no date given)
Drip irrigation cuts water use by up to 70 percent and doubles harvests. Teachers tell us students love the hands-off system. Order a starter kit today and watch your garden thrive.

SOURCE 2 — Saguaro County Cooperative Extension, Bulletin 41 (2024), no author listed
In a two-season trial at six school gardens, beds watered by drip lines used 38 percent less water than beds watered by hand with hoses, as measured by inline meters. Tomato yields did not differ by more than 5 percent between the two methods. The trial did not test lettuce or herbs, and two gardens lost three weeks of data when their meters were vandalized. The bulletin recommends drip lines for fruiting crops in beds larger than 4 by 8 feet and cautions that smaller beds may not repay the installation cost within three years.

STUDENT NOTECARD
Drip lines use up to 70 percent less water than hand watering (Saguaro County, 2024).

STUDENT DRAFT SENTENCE
A two-season trial at six school gardens found that drip lines cut water use by 38 percent and raised tomato yields.`,

    ebooks: `A district communications office drafted the poster and slide plan below for a family night about library e-books.

POSTER DRAFT
The headline reads “E-BOOKS ON THE RISE.” Beneath it, two book icons compare checkouts: one labeled “2023: 4,100” and one labeled “2024: 8,200.” The two icons are the same width, and the 2024 icon is drawn three times as tall as the 2023 icon. A footnote reads: “Print checkouts fell from 61,000 to 58,500 over the same period.” The lower half of the poster is a photograph of students holding tablets. A staff member took it at last year’s family night, so the district owns the picture, but the office has no signed release from the families of the students shown.

SLIDE PLAN
Slide 3 lists three steps for borrowing an e-book. Slide 4 displays all 312 words of the board’s lending policy while the presenter sums it up in two sentences. Slide 5 shows a 14-row table of branch-by-branch figures. Slide 6 is a 40-word thank-you that the presenter will read aloud word for word. The recorded version of the talk will have captions. Large-print copies of the policy will be available at the door. A sign-language interpreter will attend the live event only if a family asks for one by the Friday before.`,

    bookpath: `A student wrote the draft below for an assignment titled “Explain a process most people at our school never see.”

(1) Most students never see what happens to a new book before it reaches a shelf in our school library. (2) Every book goes through the same steps, and the order matters. (3) First, an aide stamps the school’s name on the top edge of the pages. (4) Next, the librarian enters the book in the catalog and prints its spine label. (5) I think the old card catalog was more fun to use than the computer. (6) The label is not attached yet, because the plastic cover goes on first and the label is stuck to the outside of the cover. (7) After the cover and label are on, a security strip is hidden inside the back cover. (8) Then the book is entered in the catalog. (9) Finally, the book sits on the New Arrivals cart for two weeks before it moves to its regular shelf. (10) That is how a book gets to the shelf.`,

    wallpaper: `From Charlotte Perkins Gilman, “The Yellow Wallpaper” (1892). The narrator, a new mother, has been brought by her husband to a rented country house to rest.

John laughs at me, of course, but one expects that in marriage.

John is practical in the extreme. He has no patience with faith, an intense horror of superstition, and he scoffs openly at any talk of things not to be felt and seen and put down in figures.

John is a physician, and perhaps—(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)—perhaps that is one reason I do not get well faster.

You see, he does not believe I am sick!

And what can one do?

If a physician of high standing, and one’s own husband, assures friends and relatives that there is really nothing the matter with one but temporary nervous depression—a slight hysterical tendency—what is one to do?

My brother is also a physician, and also of high standing, and he says the same thing.

So I take phosphates or phosphites—whichever it is, and tonics, and journeys, and air, and exercise, and am absolutely forbidden to “work” until I am well again.

STUDENT ANALYTICAL PARAGRAPH (draft)
(1) Gilman’s narrator is crazy. (2) She says her brother is a lawyer. (3) Her husband John is a physician. (4) “John laughs at me, of course, but one expects that in marriage.” (5) This shows that marriage is funny.`,

    rubaiyat: `Edward FitzGerald published his English Rubáiyát of Omar Khayyám in 1859. It is a free Victorian adaptation, not a line-by-line translation, of Persian quatrains (rubāʿiyāt) attributed to the twelfth-century astronomer and poet Omar Khayyám. FitzGerald rearranged, combined, and sometimes invented material so that the quatrains read as a single meditation. One stanza reads:

The Moving Finger writes; and, having writ,
Moves on: nor all thy Piety nor Wit
Shall lure it back to cancel half a Line,
Nor all thy Tears wash out a Word of it.`,

    words: `MILL WORDS

For a century the woolen mills at Harrow Creek, a fictional town, had a slang of their own, and some of it outlived the mills.

A tam was a short break, named for Tamsin Rowe, a floor boss who rang a hand bell to end it. The word first meant the bell itself; by the 1890s it meant the ten minutes the bell ended. Today in Harrow Creek a tam is any short wait, even at a traffic light.

The ending -kin marked something spoiled, not something small. A boltkin was a ruined bolt of cloth, and a daykin was a shift lost to a broken loom.

To grey meant to teach. New hands learned on undyed, grey wool, so an old hand who trained them was said to grey them. A greyer was a teacher, and the word carried respect.

Pell began as the mill’s word for its finest yarn, kept back for sale. After the owners began putting that name on their seconds, weavers used pell for a flaw, and no one used it as praise again.

A hobber was at first a hand cart for bobbins. The carts wore out in the 1890s, the owners hired boys to carry bobbins in their place, and the boys took the name.

The mill’s ledgers survive, and people who read them make one mistake more than any other: they carry a word’s present meaning back into an old page. Someone who finds “second tam” in an 1850 ledger and pictures a rest has made it. In 1850 a tam was still a bell.`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: P[set], stem, options, explanation
  });

  const items = [
    /* ---- Research: two sources, a notecard, and a draft sentence ---- */
    item("LF283", "language", "Drip sources — stated method", ["research"], ["research-citation", "evidence-credibility"], "garden",
      "Which source says how its water figures were measured?",
      [o("LF283-s1", "Source 1 only",
          "Source 1 gives a figure, “up to 70 percent,” with no account of how it was reached."),
       o("LF283-s2", "Source 2 only",
          "Source 2 says the water was “measured by inline meters”; Source 1 names no method.", true),
       o("LF283-both", "both sources",
          "Only Source 2 describes a measurement."),
       o("LF283-neither", "neither source",
          "Source 2 names inline meters.")],
      "Before weighing two sources, check which one tells you how it knows."),

    item("LF284", "language", "Drip sources — the notecard", ["research"], ["research-citation"], "garden",
      "The figure on the student’s notecard—",
      [o("LF284-s1-s1", "comes from Source 1 and is credited to Source 1",
          "The figure is Source 1’s, but the notecard credits Saguaro County, which is Source 2."),
       o("LF284-s1-s2", "comes from Source 1 but is credited to Source 2",
          "“Up to 70 percent” is the blog’s figure; the notecard’s citation names Saguaro County, 2024.", true),
       o("LF284-s2-s2", "comes from Source 2 and is credited to Source 2",
          "Source 2’s figure is 38 percent, not 70."),
       o("LF284-s2-s1", "comes from Source 2 but is credited to Source 1",
          "This reverses both the figure’s origin and the credit.")],
      "A citation must point to the source the fact actually came from. Check the number against each source."),

    item("LF285", "language", "Drip sources — the draft sentence", ["research"], ["research-citation"], "garden",
      "Which detail in the student’s draft sentence misstates the trial?",
      [o("LF285-seasons", "the number of seasons",
          "The trial did run for two seasons."),
       o("LF285-gardens", "the number of gardens",
          "The trial did use six school gardens."),
       o("LF285-water", "the size of the water savings",
          "The bulletin does report 38 percent."),
       o("LF285-yields", "the effect on tomato yields",
          "Yields “did not differ by more than 5 percent”; the draft says they rose.", true)],
      "A paraphrase has to be checked detail by detail. One wrong detail can sit among several right ones."),

    item("LF286", "language", "Drip sources — the citation", ["research"], ["research-citation"], "garden",
      "A works-cited entry for Source 1 would have to leave out—",
      [o("LF286-author", "the author’s name",
          "Source 1 names its author, Dale Ferris. Source 2 is the one with no author listed."),
       o("LF286-title", "the title of the post",
          "The title is given: “Why Every School Garden Needs Drip.”"),
       o("LF286-date", "the post’s date",
          "Source 1 is marked “no date given.”", true),
       o("LF286-site", "the name of the site",
          "The site is named: the blog of FlowRight Supply.")],
      "The two sources are missing different things. Read each source line before building its entry."),

    item("LF287", "language", "Drip sources — the missing data", ["research"], ["evidence-credibility"], "garden",
      "What does Source 2 report about missing data?",
      [o("LF287-2-3", "Two gardens lost three weeks of data.",
          "“Two gardens lost three weeks of data when their meters were vandalized.”", true),
       o("LF287-3-2", "Three gardens lost two weeks of data.",
          "The numbers are reversed."),
       o("LF287-2-drop", "Two gardens were dropped from the trial.",
          "Two gardens lost some data; the bulletin does not say they were dropped."),
       o("LF287-3-drop", "Three gardens were dropped from the trial.",
          "No garden is reported as dropped, and the number affected was two.")],
      "A source that reports its own gaps lets you judge how far to trust its figures."),

    /* ---- Visual media and presentations: a poster and a slide plan ---- */
    item("LF288", "oral", "E-book poster — the icons", ["media"], ["media-analysis"], "ebooks",
      "How does the growth of the icon compare with the growth in e-book checkouts?",
      [o("LF288-same", "The icon grows by the same factor as checkouts.",
          "Checkouts doubled, from 4,100 to 8,200; the icon tripled in height at the same width."),
       o("LF288-3v2", "The icon’s area triples; checkouts double.",
          "Same width and three times the height gives three times the area, against a doubling in checkouts.", true),
       o("LF288-4v2", "The icon’s area is four times as large; checkouts double.",
          "That would need double the height and double the width. Here only the height changes."),
       o("LF288-2v3", "The icon’s area doubles; checkouts triple.",
          "This reverses the two: checkouts doubled and the icon tripled.")],
      "Work out what the picture does to area, then compare it with what the numbers do."),

    item("LF289", "oral", "E-book poster — the footnote", ["media"], ["media-analysis"], "ebooks",
      "Counting print and e-books together, checkouts from 2023 to 2024—",
      [o("LF289-fell2500", "fell by about 2,500",
          "That is the drop in print alone."),
       o("LF289-fell900", "fell by about 900",
          "The total rose: 65,100 to 66,700."),
       o("LF289-rose1600", "rose by about 1,600",
          "4,100 + 61,000 = 65,100; 8,200 + 58,500 = 66,700; the difference is 1,600.", true),
       o("LF289-rose4100", "rose by about 4,100",
          "That is the rise in e-books alone.")],
      "A headline figure and a footnote figure often need to be added before either means much."),

    item("LF290", "oral", "E-book poster — the photograph", ["media"], ["presentation-ethics"], "ebooks",
      "What does the office still need before it uses the photograph?",
      [o("LF290-license", "a license from the photographer",
          "A staff member took it, and the district owns the picture."),
       o("LF290-site", "permission from the website where it was found",
          "The photograph did not come from a website."),
       o("LF290-release", "releases from the families of the students shown",
          "The office “has no signed release from the families of the students shown.”", true),
       o("LF290-credit", "a credit line naming a stock-photo agency",
          "No agency is involved; the district’s own staff took the picture.")],
      "Owning a picture and having permission to show the people in it are separate questions."),

    item("LF291", "oral", "E-book slides — reading aloud", ["media"], ["presentation-ethics", "speech-craft"], "ebooks",
      "Which slide does the plan say the presenter will read aloud word for word?",
      [o("LF291-3", "Slide 3",
          "Slide 3 lists three steps; the plan does not say it is read aloud."),
       o("LF291-4", "Slide 4",
          "Slide 4 shows the full policy, but the presenter sums it up in two sentences."),
       o("LF291-5", "Slide 5",
          "Slide 5 is a table of figures."),
       o("LF291-6", "Slide 6",
          "“Slide 6 is a 40-word thank-you that the presenter will read aloud word for word.”", true)],
      "Check what the plan says the presenter does with each slide, not what such slides usually invite."),

    item("LF292", "oral", "E-book slides — on request", ["media"], ["presentation-ethics"], "ebooks",
      "According to the plan, which of these is provided only if a family asks for it?",
      [o("LF292-captions", "captions on the recorded version of the talk",
          "The plan says the recorded version will have captions."),
       o("LF292-interpreter", "a sign-language interpreter at the live event",
          "An interpreter attends “only if a family asks for one by the Friday before.”", true),
       o("LF292-print", "large-print copies of the lending policy at the door",
          "Large-print copies will be available at the door."),
       o("LF292-slides", "a printed copy of the slides",
          "The plan does not mention printed slides at all.")],
      "An accommodation that depends on a request reaches only the people who know to ask."),

    /* ---- Expository writing: a process draft with numbered sentences ---- */
    item("LF293", "writing", "Book draft — off-purpose sentence", ["revision"], ["expository-writing", "writing-process"], "bookpath",
      "Which sentence departs from the draft’s purpose of explaining a process?",
      [o("LF293-2", "Sentence 2",
          "Sentence 2 sets up the explanation by saying the order matters."),
       o("LF293-5", "Sentence 5",
          "Sentence 5 gives the writer’s opinion of the old card catalog; it is not a step.", true),
       o("LF293-6", "Sentence 6",
          "Sentence 6 explains why the label waits for the cover."),
       o("LF293-9", "Sentence 9",
          "Sentence 9 gives the last step.")],
      "In an explanation, a sentence earns its place by telling the reader what happens or why."),

    item("LF294", "writing", "Book draft — repeated step", ["revision"], ["expository-writing", "writing-process"], "bookpath",
      "Which sentence repeats a step the draft has already explained?",
      [o("LF294-4", "Sentence 4",
          "Sentence 4 is the first mention of the catalog."),
       o("LF294-6", "Sentence 6",
          "Sentence 6 adds new information about the cover and label."),
       o("LF294-7", "Sentence 7",
          "Sentence 7 introduces the security strip."),
       o("LF294-8", "Sentence 8",
          "Sentence 8 says the book is entered in the catalog, which sentence 4 already covered.", true)],
      "Trace each step to its first mention. A second mention out of order confuses the sequence."),

    item("LF295", "writing", "Book draft — the label", ["revision"], ["expository-writing"], "bookpath",
      "According to the draft, when is the spine label attached?",
      [o("LF295-before-cover", "before the plastic cover goes on",
          "Sentence 6 says the cover goes on first."),
       o("LF295-after-cover", "after the plastic cover goes on",
          "The label “is stuck to the outside of the cover,” so the cover comes first.", true),
       o("LF295-after-strip", "after the security strip is hidden",
          "Sentence 7 puts the strip after the cover and label."),
       o("LF295-before-catalog", "before the book is entered in the catalog",
          "The label is printed when the book is cataloged and attached later.")],
      "When a process departs from the order you would expect, the writer’s explanation is the evidence."),

    item("LF296", "writing", "Book draft — placing a sentence", ["revision"], ["expository-writing", "sentence-craft"], "bookpath",
      "The writer wants to add this sentence: “The strip sets off the door alarm if a book leaves without being checked out.” It fits best right after—",
      [o("LF296-4", "sentence 4",
          "Sentence 4 is about the catalog and the label."),
       o("LF296-6", "sentence 6",
          "Sentence 6 is about the cover; the strip has not been mentioned yet."),
       o("LF296-7", "sentence 7",
          "Sentence 7 introduces the security strip, so the detail about it follows there.", true),
       o("LF296-9", "sentence 9",
          "Sentence 9 is about the New Arrivals cart.")],
      "A supporting detail belongs directly after the sentence that introduces what it supports."),

    item("LF297", "writing", "Book draft — giving a reason", ["revision"], ["expository-writing"], "bookpath",
      "Which sentence explains why two steps happen in the order they do?",
      [o("LF297-3", "Sentence 3",
          "Sentence 3 states a step without a reason."),
       o("LF297-4", "Sentence 4",
          "Sentence 4 states a step without a reason."),
       o("LF297-6", "Sentence 6",
          "Sentence 6 says the label waits “because the plastic cover goes on first.”", true),
       o("LF297-7", "Sentence 7",
          "Sentence 7 gives the order of the strip but no reason for it.")],
      "Sentence 2 promises that the order matters. Look for where the draft makes good on that."),

    /* ---- Literature in context: Gilman, with a student paragraph ---- */
    item("LF298", "literature", "Gilman — one reason", ["context"], ["narrative-elements"], "wallpaper",
      "What does the narrator suggest may be one reason she does not get well faster?",
      [o("LF298-physician", "Her husband is a physician.",
          "“John is a physician, and perhaps … that is one reason I do not get well faster.”", true),
       o("LF298-brother", "Her brother disagrees with her husband.",
          "Her brother “says the same thing” as John."),
       o("LF298-tonics", "She has stopped taking her tonics.",
          "She says she takes phosphates and tonics."),
       o("LF298-work", "She has been made to work too hard.",
          "She is “absolutely forbidden” to work.")],
      "The narrator’s suggestion is the surprising one. Take it from her sentence, not from what would be usual."),

    item("LF299", "literature", "Gilman — a second opinion", ["context"], ["narrative-elements"], "wallpaper",
      "Besides John, who does the narrator say gives the same opinion of her condition?",
      [o("LF299-brother", "her brother",
          "“My brother is also a physician, and also of high standing, and he says the same thing.”", true),
       o("LF299-sister", "her sister",
          "No sister appears in the excerpt."),
       o("LF299-mother", "her mother",
          "No mother appears in the excerpt."),
       o("LF299-friend", "a family friend",
          "Friends and relatives are told John’s opinion; they do not give one.")],
      "Name the person from the text. The excerpt mentions several people and gives an opinion to only two."),

    item("LF300", "literature", "Gilman — the list", ["context"], ["narrative-elements", "literature-context"], "wallpaper",
      "In her list of treatments, which one is the narrator unsure how to name?",
      [o("LF300-phosphates", "the phosphates",
          "“Phosphates or phosphites—whichever it is.” She does not care, or is not told, which.", true),
       o("LF300-tonics", "the tonics",
          "She names the tonics without hesitation."),
       o("LF300-journeys", "the journeys",
          "She names the journeys without hesitation."),
       o("LF300-exercise", "the exercise",
          "She names the exercise without hesitation.")],
      "A small hesitation in a list can show how little a patient has been told about her own treatment."),

    item("LF301", "writing", "Gilman — the student’s facts", ["analytical"], ["analytical-writing"], "wallpaper",
      "Which sentence of the student’s paragraph gets a fact from the excerpt wrong?",
      [o("LF301-2", "Sentence 2",
          "The narrator says her brother is a physician, not a lawyer.", true),
       o("LF301-3", "Sentence 3",
          "The excerpt does say John is a physician."),
       o("LF301-4", "Sentence 4",
          "The quotation matches the excerpt word for word."),
       o("LF301-5", "Sentence 5",
          "Sentence 5 is a weak interpretation, not a statement of fact.")],
      "Check an analytical paragraph’s facts against the text before judging its ideas."),

    item("LF302", "literature", "Gilman — what is forbidden", ["context"], ["literature-context"], "wallpaper",
      "What does the narrator say she is absolutely forbidden to do until she is well?",
      [o("LF302-work", "to work",
          "She is “absolutely forbidden to ‘work’ until I am well again.”", true),
       o("LF302-travel", "to travel",
          "Journeys are among the things prescribed for her."),
       o("LF302-exercise", "to exercise",
          "Exercise is among the things prescribed for her."),
       o("LF302-read", "to read",
          "The excerpt does not mention reading.")],
      "Separate what the narrator is given from what she is denied. The list holds both."),

    /* ---- World literature and poetry: FitzGerald's Rubáiyát ---- */
    item("LF303", "literature", "Rubáiyát — three things", ["world-lit"], ["world-literature"], "rubaiyat",
      "Which three things does the stanza say cannot undo what has been written?",
      [o("LF303-pwt", "Piety, Wit, and Tears",
          "“Nor all thy Piety nor Wit … Nor all thy Tears.”", true),
       o("LF303-pwealtht", "Piety, Wealth, and Tears",
          "Wealth is not named in the stanza."),
       o("LF303-prayer", "Prayer, Wit, and Time",
          "Neither prayer nor time is named."),
       o("LF303-wtt", "Wit, Tears, and Time",
          "Time is not named, and Piety is left out.")],
      "List what the stanza names before deciding what it means."),

    item("LF304", "literature", "Rubáiyát — how much", ["world-lit"], ["figurative-language"], "rubaiyat",
      "How much does the stanza say the Finger cannot be lured back to cancel?",
      [o("LF304-word", "a single Word",
          "A Word is what tears cannot wash out; the amount that cannot be cancelled is half a Line."),
       o("LF304-half", "half a Line",
          "“Shall lure it back to cancel half a Line.”", true),
       o("LF304-line", "a whole Line",
          "The stanza says not even half a line."),
       o("LF304-page", "a whole Page",
          "Pages are not mentioned.")],
      "The stanza measures twice, with two verbs. Match the amount to the verb in the question."),

    item("LF305", "literature", "Rubáiyát — what FitzGerald did", ["world-lit"], ["world-literature"], "rubaiyat",
      "According to the introduction, what did FitzGerald do with the Persian quatrains?",
      [o("LF305-literal", "He translated them line by line in their original order.",
          "The introduction says his version is “not a line-by-line translation.”"),
       o("LF305-free", "He rearranged and combined them and sometimes invented material.",
          "“FitzGerald rearranged, combined, and sometimes invented material.”", true),
       o("LF305-select", "He chose a few and left their wording as close as he could.",
          "The introduction describes free adaptation, not close selection."),
       o("LF305-prose", "He turned them into a single prose meditation.",
          "They read as one meditation but remain quatrains, as the stanza shows.")],
      "An English version of a foreign poem is partly the translator’s work. The introduction says how much."),

    item("LF306", "literature", "Rubáiyát — after it writes", ["world-lit"], ["figurative-language"], "rubaiyat",
      "In the stanza, what does the Moving Finger do once it has written?",
      [o("LF306-moves", "It moves on.",
          "“And, having writ, / Moves on.”", true),
       o("LF306-waits", "It waits for an answer.",
          "Nothing in the stanza pauses."),
       o("LF306-returns", "It returns to correct a line.",
          "The stanza says it cannot be lured back."),
       o("LF306-erases", "It washes out a word.",
          "Washing out is what tears fail to do.")],
      "Follow the Finger’s own verbs: writes, moves on."),

    item("LF307", "literature", "Rubáiyát — who is addressed", ["world-lit"], ["poetry-forms"], "rubaiyat",
      "Whose piety, wit, and tears does the stanza speak of?",
      [o("LF307-finger", "the Moving Finger’s",
          "The Finger is what cannot be moved; the piety is someone else’s."),
       o("LF307-poet", "the speaker’s own",
          "The stanza says “thy,” not “my.”"),
       o("LF307-reader", "the listener’s",
          "“All thy Piety,” “all thy Tears”: the stanza speaks to a listener, addressed as “thy.”", true),
       o("LF307-khayyam", "Omar Khayyám’s",
          "The poet is named in the introduction, not addressed in the stanza.")],
      "A pronoun tells you who is being spoken to. Find it before reading the lines as a general statement."),

    /* ---- Vocabulary and word history: invented mill slang, so no outside knowledge applies ---- */
    item("LF308", "reading", "Mill words — first meaning", ["vocabulary"], ["word-origins"], "words",
      "According to the passage, what did tam first name?",
      [o("LF308-bell", "a hand bell",
          "“The word first meant the bell itself.”", true),
       o("LF308-boss", "a floor boss",
          "The word comes from a floor boss’s name, but it did not name her."),
       o("LF308-break", "a ten-minute break",
          "That is the second meaning, from the 1890s."),
       o("LF308-wait", "any short wait",
          "That is the meaning in Harrow Creek today.")],
      "The passage gives three meanings in order. The question asks for the first."),

    item("LF309", "reading", "Mill words — an ending", ["vocabulary"], ["vocab-strategies", "word-origins"], "words",
      "Going by the passage’s account of the ending -kin, a loomkin would most likely be—",
      [o("LF309-small", "a small loom",
          "The passage says -kin marked something spoiled, “not something small.”"),
       o("LF309-spoiled", "a ruined loom",
          "A boltkin was a ruined bolt and a daykin a lost shift, so -kin marks the thing as spoiled.", true),
       o("LF309-learner", "a loom for learners",
          "Learners are tied to the word grey, not to -kin."),
       o("LF309-prized", "a prized loom",
          "Both -kin words in the passage name something ruined or lost, not something valued.")],
      "Apply the meaning the passage gives the ending, even where it differs from the ending’s usual sense in English."),

    item("LF310", "reading", "Mill words — greyer", ["vocabulary"], ["vocab-context", "word-origins"], "words",
      "In mill talk, a greyer was—",
      [o("LF310-teacher", "an old hand who trained new workers",
          "“A greyer was a teacher”: an old hand who trained new hands on grey wool.", true),
       o("LF310-beginner", "a new worker still learning the looms",
          "New hands were the ones being greyed, not the greyers."),
       o("LF310-dyer", "a worker who dyed the grey wool for the looms",
          "The wool was grey because it was undyed; no dyer is mentioned."),
       o("LF310-sorter", "a worker who sorted the undyed wool by grade",
          "Sorting is not mentioned in the passage.")],
      "The passage builds the noun from a verb it has just defined. Follow that step."),

    item("LF311", "reading", "Mill words — pell", ["vocabulary"], ["word-origins"], "words",
      "How did the meaning of pell change?",
      [o("LF311-up", "from a flaw to something buyers wanted",
          "This reverses the direction. Pell began as the finest yarn and ended as a flaw."),
       o("LF311-down", "from a mark of quality to a flaw",
          "It began as the mill’s “finest yarn” and, once the name went on seconds, was used “for a flaw.”", true),
       o("LF311-narrow", "from any yarn to one kind of yarn",
          "The word first named the finest yarn, not yarn in general; its value changed, not its range."),
       o("LF311-broad", "from one kind of yarn to any yarn",
          "The word did not widen to all yarn; it came to name a flaw.")],
      "Words can rise or fall in esteem as well as widen or narrow. Decide which kind of change the passage reports, and in which direction."),

    item("LF312", "reading", "Mill words — reading the ledgers", ["vocabulary"], ["word-origins", "informational-texts"], "words",
      "Which reader makes the mistake the final paragraph describes?",
      [o("LF312-old-boy", "one who takes hobber in an 1870 ledger to mean a boy",
          "In 1870 a hobber was still a cart. This reader carries the later meaning back into an old page.", true),
       o("LF312-old-cart", "one who takes hobber in an 1870 ledger to mean a cart",
          "This is the correct reading. The boys did not take the name until the 1890s."),
       o("LF312-new-boy", "one who takes hobber in a 1920 ledger to mean a boy",
          "This is the correct reading. By 1920 the name had passed to the boys."),
       o("LF312-new-cart", "one who takes hobber in a 1920 ledger to mean a cart",
          "This reader is wrong, but in the other direction: the first meaning is applied to a later page. The paragraph describes carrying the present meaning back.")],
      "Work out what hobber meant at each date, then find the reader who puts the later meaning into the earlier page.")
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  items.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items);
})();
