/* Form D — original NES 301 passage clusters aimed at the thinnest competencies:
   research (0011), visual media and presentations (0017), expository writing (0013),
   literature in context and analytical writing (0008, 0015, 0007), world literature
   and poetry (0006, 0007), and vocabulary/etymology (0001).
   Public-domain literature (Gilman 1892, FitzGerald 1859) and original prose only.
   Authored in the option-object format: every option carries a stable id and its own
   explanation, so feedback stays correct when choices are shuffled. */
(function () {
  const P = {
    garden: `SOURCE 1 — Saguaro County Cooperative Extension, Bulletin 41 (2024)
In a two-season trial at six school gardens, beds watered by drip lines used 38 percent less water than beds watered by hand with hoses, as measured by inline meters. Tomato yields did not differ by more than 5 percent between the two methods. The trial did not test lettuce or herbs, and two gardens lost three weeks of data when their meters were vandalized. The bulletin recommends drip lines for fruiting crops in beds larger than 4 by 8 feet and cautions that smaller beds may not repay the installation cost within three years.

SOURCE 2 — “Why Every School Garden Needs Drip,” posted in 2016 on the blog of FlowRight Supply (no author listed)
Drip irrigation cuts water use by up to 70 percent and doubles harvests. Teachers tell us students love the hands-off system. Order a starter kit today and watch your garden thrive.

STUDENT NOTECARD
Drip lines use 38 percent less water than hand watering (Saguaro County, 2024).

STUDENT DRAFT SENTENCE
Research proves drip irrigation saves water and doubles harvests in every school garden.`,

    ebooks: `A district communications office drafted the poster and slide plan below for a family night about library e-books.

POSTER DRAFT
The headline reads “E-BOOKS EXPLODE!” Beneath it, two book icons compare checkouts: a small icon labeled “2023: 4,100” and a larger icon labeled “2024: 8,300.” The 2024 icon is drawn twice as tall and twice as wide as the 2023 icon. A footnote in 7-point type reads: “Print checkouts fell from 61,000 to 58,500 over the same period.” A photograph of smiling teenagers holding tablets fills the lower half of the poster. The designer found it through an image search and plans to use it because “it was on a public website.”

SLIDE PLAN
Slide 4 will display all 312 words of the board’s lending policy, which the presenter will read aloud word for word. Slide 5 will show a 14-row table of branch-by-branch figures in 10-point type. The presenter plans to add captions to the recorded version of the talk only if a family requests them.`,

    treatment: `A student wrote the draft below for an assignment titled “Explain a process that affects daily life in our city.”

(1) Our city’s water comes from the Salt River, but you would not want to drink it straight from the canal. (2) Water treatment is the reason the tap is safe. (3) First, the plant adds a coagulant, which makes tiny particles clump together into larger bits called floc. (4) The floc is heavy, so it sinks to the bottom of the settling basins. (5) Filtration comes next. (6) The water passes through layers of sand, gravel, and charcoal. (7) Honestly, the city should spend more money on this plant than on the new stadium. (8) Last, the plant adds a small, measured amount of chlorine to kill microorganisms that survived filtering. (9) Some people think chlorine is dangerous. (10) In conclusion, water treatment is a process.`,

    wallpaper: `From Charlotte Perkins Gilman, “The Yellow Wallpaper” (1892). The narrator, a new mother, has been brought by her husband to a rented country house for a “rest cure.”

John laughs at me, of course, but one expects that in marriage.

John is practical in the extreme. He has no patience with faith, an intense horror of superstition, and he scoffs openly at any talk of things not to be felt and seen and put down in figures.

John is a physician, and perhaps—(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)—perhaps that is one reason I do not get well faster.

You see he does not believe I am sick!

And what can one do?

If a physician of high standing, and one’s own husband, assures friends and relatives that there is really nothing the matter with one but temporary nervous depression—a slight hysterical tendency—what is one to do?

My brother is also a physician, and also of high standing, and he says the same thing.

So I take phosphates or phosphites—whichever it is, and tonics, and journeys, and air, and exercise, and am absolutely forbidden to “work” until I am well again.

STUDENT ANALYTICAL PARAGRAPH (draft)
Gilman’s narrator is crazy. She says the house is queer. Her husband John is a doctor who wants her to get better. “John laughs at me, of course, but one expects that in marriage.” This shows that marriage is funny.`,

    rubaiyat: `Edward FitzGerald published his English Rubáiyát of Omar Khayyám in 1859. It is a free Victorian adaptation, not a line-by-line translation, of Persian quatrains (rubāʿiyāt) attributed to the twelfth-century astronomer and poet Omar Khayyám. FitzGerald rearranged, combined, and sometimes invented material so that the quatrains read as a single meditation. One stanza reads:

The Moving Finger writes; and, having writ,
Moves on: nor all thy Piety nor Wit
Shall lure it back to cancel half a Line,
Nor all thy Tears wash out a Word of it.`,

    words: `WORDS THAT REMEMBER

Many English words carry fossils of older beliefs. Disaster arrived in English in the late 1500s from Italian disastro, built from dis- (“ill” or “away”) and astro (“star”). To call an event a disaster once meant blaming a bad alignment of the stars. The astrological belief faded, but the word stayed.

Quarantine preserves a number. In the fourteenth century, the port of Ragusa (today’s Dubrovnik) required ships arriving from plague regions to wait offshore before landing; Venetian practice later fixed the wait at forty days—quaranta giorni in Italian. Today a quarantine can last two weeks or two hours, yet the forty is still hidden inside the word.

Muscle hides an animal. Latin musculus meant “little mouse,” perhaps because a flexing muscle under the skin looked like a mouse moving beneath a cloth. The ending marked something small, the same diminutive sense that survives in molecule, a “little mass.”

Etymology is evidence, not a verdict. A word’s history can suggest a meaning, but current usage decides what a word means now. A student who insists that a disaster must involve the stars has confused a word’s origin with its definition—a mistake linguists call the etymological fallacy.`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });

  const items = [
    /* ---- garden: research and citation (0011) ---- */
    { id: "LF183", domain: "language", title: "Drip sources — accurate paraphrase", difficulty: "hard", tags: ["research", "longform"], skillIds: ["research-citation"], passageSet: "garden", passage: P.garden,
      stem: "Which sentence is the most accurate paraphrase of Source 1’s findings about water and tomato yields?",
      options: [
        o("LF183-scoped", "In the trial, switching to drip lines cut water use without meaningfully changing tomato harvests.",
          "Restates both results in new words and keeps the trial’s scope (tomatoes, this study).", true),
        o("LF183-doubles", "Drip lines doubled tomato yields while using 38 percent less water.",
          "Imports Source 2’s unsupported “doubles harvests.” Source 1 found yields within 5 percent."),
        o("LF183-verbatim", "Tomato yields did not differ by more than 5 percent between the two methods.",
          "Copies Source 1 word for word without quotation marks: that is plagiarism, not paraphrase."),
        o("LF183-every-crop", "Drip lines are the best choice for every crop a school might grow.",
          "Overgeneralizes: lettuce and herbs were not tested, and small beds may not repay the cost.")
      ],
      explanation: "A paraphrase changes the wording, keeps the meaning, and keeps the source’s limits. Watch for imported claims from a weaker source and for verbatim copying without quotation marks." },

    { id: "LF184", domain: "language", title: "Drip sources — credibility", difficulty: "hard", tags: ["research", "longform"], skillIds: ["research-citation", "evidence-credibility"], passageSet: "garden", passage: P.garden,
      stem: "For a research paper, Source 1 is more credible than Source 2 chiefly because Source 1—",
      options: [
        o("LF184-method", "names its method, reports its own data losses, and limits its recommendation",
          "Transparency about method and limits is the strongest credibility signal here.", true),
        o("LF184-newer", "is more recent, and newer sources are always more accurate",
          "Currency helps, but “always” is false and recency is not the chief difference."),
        o("LF184-smaller", "reports a smaller water savings, which proves it is more careful",
          "A smaller number is not itself evidence of care; the method and stated limits are."),
        o("LF184-infallible", "comes from a government office, so it cannot contain errors",
          "Authority is not infallibility; the bulletin itself reports lost data.")
      ],
      explanation: "Judge credibility by method, transparency, and fit between claim and evidence. Source 2 is unsigned, promotional, and states “up to 70 percent” and “doubles harvests” with no method." },

    { id: "LF185", domain: "language", title: "Drip sources — misusing evidence", difficulty: "hard", tags: ["research", "longform"], skillIds: ["research-citation"], passageSet: "garden", passage: P.garden,
      stem: "The student’s draft sentence misuses the sources mainly by—",
      options: [
        o("LF185-blend", "blending Source 2’s unsupported “doubles harvests” into a claim the credible source contradicts and widening it to “every” school garden",
          "Both errors are present: an unsupported claim borrowed from the weak source, and an overgeneralization.", true),
        o("LF185-gov", "relying on a government bulletin, which should never be used in student research",
          "Agency bulletins are often strong sources; the problem is how the sources were combined."),
        o("LF185-research-word", "using the word “research,” which must always be replaced with the author’s name",
          "Word choice is not the main problem; the claim itself goes beyond the evidence."),
        o("LF185-common", "stating the water finding, which is common knowledge and needs no citation",
          "A measured 38 percent figure is specific evidence that needs a citation, and it is not the main misuse.")
      ],
      explanation: "“Research proves… doubles harvests… every school garden” turns a limited trial into a universal claim and smuggles in a vendor’s figure. Synthesis must keep each source’s limits." },

    { id: "LF186", domain: "language", title: "Drip sources — research question", difficulty: "hard", tags: ["research", "longform"], skillIds: ["research-citation"], passageSet: "garden", passage: P.garden,
      stem: "Which research question would best guide a paper built from these sources?",
      options: [
        o("LF186-conditions", "Under what conditions do drip lines save enough water in school gardens to justify their installation cost?",
          "Focused, researchable, and matched to what Source 1 actually measured (water use, bed size, cost).", true),
        o("LF186-broad", "Is gardening good for students?",
          "Too broad to answer from these sources, and it drops the irrigation question entirely."),
        o("LF186-narrow", "How much water did one garden use on one day?",
          "Too narrow to support a paper, and the sources do not report it."),
        o("LF186-loaded", "Why do supply companies lie about irrigation?",
          "Loaded: it presumes a conclusion. Source 2 is promotional and unsupported, which is not proof of lying.")
      ],
      explanation: "A strong research question is open, bounded, and answerable with credible evidence. Reject questions that are too broad, too trivial, or that presume their answer." },

    { id: "LF187", domain: "language", title: "Drip sources — what needs a citation", difficulty: "hard", tags: ["research", "longform"], skillIds: ["research-citation"], passageSet: "garden", passage: P.garden,
      stem: "Which detail in the student’s paper would most clearly require a citation?",
      options: [
        o("LF187-stat", "the 38 percent water reduction measured by inline meters",
          "A specific measured finding from one source must be attributed.", true),
        o("LF187-plants", "the fact that plants need water to grow",
          "Common knowledge that any reader could confirm in many places needs no citation."),
        o("LF187-gardens", "the observation that many schools keep gardens",
          "A general, widely known observation; it is not drawn from either source."),
        o("LF187-opinion", "the student’s own opinion that school gardens deserve funding",
          "The writer’s own claim needs support, but not a citation to someone else.")
      ],
      explanation: "Cite specific data, quotations, and ideas that come from a source. Common knowledge and your own claims do not need attribution, though your claims still need evidence." },

    /* ---- poster: visual media, presentations, copyright, accessibility (0017) ---- */
    { id: "LF188", domain: "oral", title: "E-book poster — misleading icons", difficulty: "hard", tags: ["media", "longform"], skillIds: ["media-analysis"], passageSet: "ebooks", passage: P.ebooks,
      stem: "The two book icons are misleading mainly because—",
      options: [
        o("LF188-area", "doubling both height and width makes the 2024 icon cover about four times the area, exaggerating a roughly twofold increase",
          "Scaling a picture in two dimensions squares the visual change. That is the classic pictograph distortion.", true),
        o("LF188-false", "the numbers printed on the labels are false",
          "Nothing suggests the labels are wrong; the distortion is in the drawing."),
        o("LF188-never", "icons can never be used in informational graphics",
          "Overclaim. Icons are fine when their size is proportional to the data."),
        o("LF188-order", "the 2023 icon should have been placed on the right",
          "Left-to-right order is not the problem; the area is.")
      ],
      explanation: "4,100 to 8,300 is about double, but an icon twice as tall and twice as wide looks four times as large. Proportional graphics scale one dimension, or use bars." },

    { id: "LF189", domain: "oral", title: "E-book poster — honest revision", difficulty: "hard", tags: ["media", "longform"], skillIds: ["media-analysis"], passageSet: "ebooks", passage: P.ebooks,
      stem: "Which revision would most improve the poster’s honesty?",
      options: [
        o("LF189-total", "give the print decline the same visual weight as the e-book gain so families can see total borrowing",
          "Total borrowing rose only from 65,100 to 66,800 (about 3 percent), which is not an explosion. Giving both trends equal weight removes the cherry-picking.", true),
        o("LF189-headline", "make the “E-BOOKS EXPLODE!” headline larger",
          "Amplifies the hype instead of correcting it."),
        o("LF189-cut-footnote", "remove the footnote so the message stays focused",
          "Hides the most relevant context; that makes the poster less honest."),
        o("LF189-photo", "add a second photograph of teenagers with tablets",
          "Decoration does not address the omitted data.")
      ],
      explanation: "The poster spotlights a gain of about 4,200 e-book checkouts while burying a print drop of 2,500 in 7-point type. Honest design shows the comparison readers need, at comparable visual weight." },

    { id: "LF190", domain: "oral", title: "E-book poster — using the photograph", difficulty: "hard", tags: ["media", "longform"], skillIds: ["presentation-ethics"], passageSet: "ebooks", passage: P.ebooks,
      stem: "The designer’s reasoning about the photograph is flawed because—",
      options: [
        o("LF190-license", "being publicly viewable does not make an image free to reuse; the office needs a license, permission, or an openly licensed image with the required attribution",
          "Copyright attaches automatically. Public visibility is not permission.", true),
        o("LF190-teens", "photographs of teenagers can never appear on school materials",
          "Overclaim. Releases may be needed, but that is not the flaw in the designer’s reasoning."),
        o("LF190-public-domain", "any image shared online enters the public domain once it is posted",
          "This is the misconception itself, not a correction of it."),
        o("LF190-size", "fair use depends only on how large the image is printed",
          "Fair use weighs purpose, nature, amount, and market effect, not just print size.")
      ],
      explanation: "Copyright protects an image from creation, whether or not it is online. Use licensed, permitted, or openly licensed images (for example, Creative Commons) and follow the license’s attribution terms." },

    { id: "LF191", domain: "oral", title: "E-book slides — audience fit", difficulty: "hard", tags: ["media", "longform"], skillIds: ["presentation-ethics", "speech-craft"], passageSet: "ebooks", passage: P.ebooks,
      stem: "Which change would best fit Slide 4 to a family-night audience?",
      options: [
        o("LF191-summarize", "summarize the policy’s key points in a few brief phrases and hand out or link the full text",
          "Slides support the speaker; dense documents belong in a handout or link.", true),
        o("LF191-shrink", "shrink the font so all 312 words fit on the slide more comfortably",
          "Makes a wall of text even harder to read."),
        o("LF191-animate", "animate each sentence so it appears one at a time while the presenter reads",
          "Still a read-aloud document, now with added distraction."),
        o("LF191-faster", "read the policy faster to leave time for questions",
          "Speed does not fix a slide that duplicates a document.")
      ],
      explanation: "Effective presentation slides carry a few key points the audience can take in at a glance. Reading a full document from a slide divides attention and loses listeners." },

    { id: "LF192", domain: "oral", title: "E-book slides — captions", difficulty: "hard", tags: ["media", "longform"], skillIds: ["presentation-ethics"], passageSet: "ebooks", passage: P.ebooks,
      stem: "The presenter’s plan for captions is weakest because—",
      options: [
        o("LF192-default", "captions should be built in from the start; waiting for requests excludes viewers who need them and may never ask",
          "Accessibility is planned in advance, not granted on request.", true),
        o("LF192-live", "captions are only necessary for live events, not recordings",
          "False. Recorded video is exactly where captions are expected."),
        o("LF192-distract", "captions distract hearing viewers, so they are best avoided",
          "Captions help many viewers (noise, language learners) and are an accessibility baseline."),
        o("LF192-only", "the 10-point table on Slide 5 is the only accessibility problem in the plan",
          "The small-type table is also a problem, but “only” makes this false.")
      ],
      explanation: "Inclusive presentation design builds in captions, readable type, and alternatives from the start. The plan has two accessibility problems: request-only captions and a 10-point table." },

    /* ---- water: expository writing (0013) ---- */
    { id: "LF193", domain: "writing", title: "Water draft — expository thesis", difficulty: "hard", tags: ["revision", "longform"], skillIds: ["expository-writing", "thesis-support"], passageSet: "treatment", passage: P.treatment,
      stem: "Which sentence would best replace sentence 2 as the draft’s thesis?",
      options: [
        o("LF193-stages", "Before it reaches the tap, river water passes through three main stages—coagulation and settling, filtration, and disinfection—each removing a different kind of contaminant.",
          "Explains rather than argues, previews the organization, and is specific.", true),
        o("LF193-argue", "Water treatment is the most important service a city provides, and anyone who disagrees is wrong.",
          "Argumentative and dismissive; the assignment is expository."),
        o("LF193-personal", "I have always been interested in where water comes from.",
          "Personal background, not a controlling idea."),
        o("LF193-vague", "Water treatment has many steps.",
          "True but too vague to organize the essay.")
      ],
      explanation: "An expository thesis states what will be explained and how it is organized. It informs; it does not take sides." },

    { id: "LF194", domain: "writing", title: "Water draft — off-purpose sentence", difficulty: "hard", tags: ["revision", "longform"], skillIds: ["expository-writing", "writing-process"], passageSet: "treatment", passage: P.treatment,
      stem: "Which sentence most clearly departs from the draft’s expository purpose?",
      options: [
        o("LF194-s7", "Sentence 7, which argues that the plant deserves more money than the stadium",
          "A persuasive aside about budget priorities breaks the explanation of the process.", true),
        o("LF194-s1", "Sentence 1, which contrasts canal water with tap water",
          "A legitimate hook that sets up why treatment matters."),
        o("LF194-s3", "Sentence 3, which defines floc",
          "Defining a technical term is exactly what exposition should do."),
        o("LF194-s8", "Sentence 8, which describes disinfection",
          "Explains the final stage; it belongs.")
      ],
      explanation: "In revision, cut or move sentences that switch modes. Sentence 7 argues for a budget priority in the middle of a process explanation." },

    { id: "LF195", domain: "writing", title: "Water draft — transition", difficulty: "hard", tags: ["revision", "longform"], skillIds: ["expository-writing", "sentence-craft"], passageSet: "treatment", passage: P.treatment,
      stem: "Which revision of sentence 5 best links it to sentence 4?",
      options: [
        o("LF195-once", "Once the floc has settled out, the clearer water moves on to filtration.",
          "Signals sequence and carries the result of settling into the next stage.", true),
        o("LF195-however", "However, filtration comes next.",
          "“However” signals contrast, but nothing is being contrasted."),
        o("LF195-therefore", "Therefore, filtration is better than settling.",
          "Adds an unsupported comparison and misuses a cause-effect transition."),
        o("LF195-conclusion", "In conclusion, filtration comes next.",
          "A concluding transition in the middle of the process misleads the reader.")
      ],
      explanation: "Choose transitions by the logical relation. Here the relation is sequence (then, once, after), not contrast or conclusion." },

    { id: "LF196", domain: "writing", title: "Water draft — developing a concern", difficulty: "hard", tags: ["revision", "longform"], skillIds: ["expository-writing"], passageSet: "treatment", passage: P.treatment,
      stem: "Sentence 9 would best be developed by—",
      options: [
        o("LF196-explain", "explaining that the chlorine dose is measured and monitored to stay within drinking-water limits, and citing the source of those limits",
          "Answers a reader’s likely concern with checkable information and stays expository.", true),
        o("LF196-delete-stage", "deleting every mention of chlorine so readers are not worried",
          "Removes a key stage of the process the essay must explain."),
        o("LF196-dismiss", "calling people who worry about chlorine uninformed",
          "Dismissive and argumentative; it explains nothing."),
        o("LF196-pool", "adding a story about a summer the writer spent swimming in a chlorinated pool",
          "An off-topic anecdote; pools are not drinking water.")
      ],
      explanation: "An undeveloped sentence that raises a concern should be followed by the explanation and evidence a reader needs. Here, how the dose is controlled." },

    { id: "LF197", domain: "writing", title: "Water draft — conclusion", difficulty: "hard", tags: ["revision", "longform"], skillIds: ["expository-writing", "essay-structure"], passageSet: "treatment", passage: P.treatment,
      stem: "Which sentence would best replace sentence 10?",
      options: [
        o("LF197-synthesize", "Each stage targets a different problem—particles, smaller debris, and microbes—so safe tap water depends on all three working in order.",
          "Synthesizes the process and states why the sequence matters.", true),
        o("LF197-restate", "In conclusion, water treatment is a process that has steps.",
          "Restates vaguely and adds nothing."),
        o("LF197-stadium", "In conclusion, the city should cancel the new stadium.",
          "Introduces a new argument at the end."),
        o("LF197-sewage", "Next, I will explain how sewage is treated.",
          "Opens a new topic instead of concluding.")
      ],
      explanation: "An expository conclusion pulls the parts together and shows their significance. It does not merely restate, argue something new, or start a new topic." },

    /* ---- wallpaper: literature in context (0008), narration (0005), analytical writing (0015), periods (0007) ---- */
    { id: "LF198", domain: "literature", title: "Gilman — social context", difficulty: "hard", tags: ["context", "longform"], skillIds: ["literature-context"], passageSet: "wallpaper", passage: P.wallpaper,
      stem: "Knowing that the period’s “rest cure” often forbade intellectual work, especially for women diagnosed with nervous illness, most strengthens which reading of the excerpt?",
      options: [
        o("LF198-silenced", "The forbidden “work” and the narrator’s secret writing on “dead paper” dramatize how medical authority could silence a woman’s mind.",
          "Context illuminates the details the text stresses: the forbidden work, the secret writing, the two physicians.", true),
        o("LF198-villain", "John is a cruel villain who knowingly harms his wife.",
          "Overclaim. The text shows John’s certainty and dismissal, not deliberate cruelty."),
        o("LF198-ghost", "The story is mainly a ghost story about a haunted colonial mansion.",
          "Elsewhere the narrator jokes about a haunted house; the excerpt’s pressure is medical and marital."),
        o("LF198-proved", "Two physicians have proved that the narrator’s illness is imaginary.",
          "Takes the doctors’ authority at face value; the excerpt invites the reader to question it.")
      ],
      explanation: "Use historical context to sharpen what the text already emphasizes, not to replace the text with outside claims. Here, prescribed idleness and male medical authority." },

    { id: "LF199", domain: "literature", title: "Gilman — the parenthesis", difficulty: "hard", tags: ["context", "longform"], skillIds: ["narrative-elements"], passageSet: "wallpaper", passage: P.wallpaper,
      stem: "The parenthetical aside “(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)” chiefly reveals that the narrator—",
      options: [
        o("LF199-private", "can voice doubts about her husband’s treatment only in private writing",
          "She confides to paper what she cannot say aloud, which is the core of the story’s irony.", true),
        o("LF199-destroy", "distrusts her own writing and plans to destroy it",
          "Nothing suggests she will destroy it; she calls writing “a great relief.”"),
        o("LF199-addressing-john", "is speaking these words directly to John",
          "She explicitly would not say this to a living soul."),
        o("LF199-recovered", "has fully recovered and is looking back on her illness",
          "“I do not get well faster” places the illness in the present.")
      ],
      explanation: "First-person asides reveal the gap between what a narrator thinks and what she may say. Here, writing is her only outlet." },

    { id: "LF200", domain: "writing", title: "Gilman — analytical claim", difficulty: "hard", tags: ["analytical", "longform"], skillIds: ["analytical-writing", "thesis-support"], passageSet: "wallpaper", passage: P.wallpaper,
      stem: "Which sentence would best replace the student’s first sentence as the paragraph’s claim?",
      options: [
        o("LF200-claim", "Gilman lets the narrator’s polite, self-correcting sentences expose how much authority her husband and brother hold over her diagnosis and her work.",
          "Arguable, specific, and tied to features of the text (style and the two physicians).", true),
        o("LF200-fact", "“The Yellow Wallpaper” was written by Charlotte Perkins Gilman in 1892.",
          "A fact, not an interpretation a paragraph can develop."),
        o("LF200-label", "The narrator is crazy, and people like her cannot be trusted.",
          "A reductive label rather than a text-based interpretation."),
        o("LF200-vague", "This story is very interesting and has many themes.",
          "Too vague to guide evidence or analysis.")
      ],
      explanation: "An analytical claim makes an arguable interpretation of how the text works, precise enough that the evidence can prove it." },

    { id: "LF201", domain: "writing", title: "Gilman — integrating evidence", difficulty: "hard", tags: ["analytical", "longform"], skillIds: ["analytical-writing"], passageSet: "wallpaper", passage: P.wallpaper,
      stem: "Which sentence best integrates and analyzes the quotation the student uses?",
      options: [
        o("LF201-embedded", "When the narrator remarks that John laughs at her and that “one expects that in marriage,” her shrug normalizes being dismissed by the person treating her.",
          "Embeds the quotation in the writer’s sentence and explains what it shows.", true),
        o("LF201-dropped", "“John laughs at me, of course, but one expects that in marriage.” This quote is about marriage.",
          "A dropped quotation followed by summary, not analysis."),
        o("LF201-misread", "John laughs at the narrator because their marriage is funny.",
          "Misreads the tone. The laughter dismisses her; it is not shared humor."),
        o("LF201-bare-cite", "Marriage is mentioned in the story (Gilman).",
          "A citation without a quotation or any analysis.")
      ],
      explanation: "Integrate evidence by blending the quotation into your own sentence and immediately explaining its significance for your claim." },

    { id: "LF202", domain: "literature", title: "Gilman — period and movement", difficulty: "hard", tags: ["periods", "longform"], skillIds: ["literary-periods"], passageSet: "wallpaper", passage: P.wallpaper,
      stem: "Placed in literary history, the excerpt is most accurately described as—",
      options: [
        o("LF202-gothic-realist", "late nineteenth-century American fiction that uses Gothic trappings within a realistic domestic setting to critique gender roles",
          "Matches the 1892 date, the domestic realism, the haunted-house play, and the critique of medical and marital authority.", true),
        o("LF202-romantic", "an early nineteenth-century Romantic celebration of nature’s power to heal",
          "Wrong period, and the prescribed “air” is part of what the story questions."),
        o("LF202-modernist", "a 1920s Modernist novel built on fragmented stream of consciousness",
          "Wrong decade and form. This is an 1892 short story in diary-like first person."),
        o("LF202-puritan", "a seventeenth-century Puritan spiritual autobiography",
          "Wrong century and purpose.")
      ],
      explanation: "Locate texts by date, form, and concerns. Gilman’s 1892 story blends realism and Gothic convention in an early feminist critique." },

    /* ---- rubaiyat: world literature, translation, poetry (0007, 0006, 0001) ---- */
    { id: "LF203", domain: "literature", title: "Rubáiyát — stanza form", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["poetry-forms"], passageSet: "rubaiyat", passage: P.rubaiyat,
      stem: "The rhyme scheme of the stanza is—",
      options: [
        o("LF203-aaba", "AABA: the first, second, and fourth lines rhyme (writ, Wit, it)",
          "“Line” is the unrhymed third line, the signature of the Rubáiyát quatrain.", true),
        o("LF203-abab", "ABAB: alternating rhyme",
          "The first and second lines rhyme with each other, so this is not alternating rhyme."),
        o("LF203-aabb", "AABB: two rhymed couplets",
          "The last two lines (Line, it) do not rhyme."),
        o("LF203-blank", "unrhymed blank verse",
          "Three of the four lines rhyme.")
      ],
      explanation: "Mark end words: writ, Wit, Line, it. Three share a rhyme and the third line stands apart, giving AABA." },

    { id: "LF204", domain: "literature", title: "Rubáiyát — translation as adaptation", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["world-literature"], passageSet: "rubaiyat", passage: P.rubaiyat,
      stem: "A teacher pairs this stanza with a literal scholarly translation of a Persian quatrain. The pairing most likely teaches students that—",
      options: [
        o("LF204-reshape", "a celebrated English version can reshape its source, so a translation reflects the translator’s era as well as the original",
          "The passage says FitzGerald rearranged, combined, and invented material.", true),
        o("LF204-original", "FitzGerald’s English stanza is the original text",
          "The passage identifies Persian quatrains as the source."),
        o("LF204-literal-better", "literal translations always make better poems",
          "Overclaim. The comparison is about what translation changes, not a ranking."),
        o("LF204-victorian-origin", "the quatrains were first composed in Victorian England",
          "Confuses the 1859 adaptation with the twelfth-century source.")
      ],
      explanation: "World literature in English often reaches readers through translation. Comparing versions shows how translators’ choices shape meaning." },

    { id: "LF205", domain: "literature", title: "Rubáiyát — the Moving Finger", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["figurative-language"], passageSet: "rubaiyat", passage: P.rubaiyat,
      stem: "“The Moving Finger writes” is best described as—",
      options: [
        o("LF205-personify", "a personification of time or fate as a hand recording events that cannot be revised",
          "The finger writes, moves on, and cannot be lured back: an abstract force given a human action.", true),
        o("LF205-onomatopoeia", "onomatopoeia that imitates the sound of a pen",
          "No word imitates a sound."),
        o("LF205-literal", "a literal description of a scribe at work",
          "Piety, wit, and tears cannot literally recall a scribe’s pen; the image is figurative."),
        o("LF205-hyperbole", "a hyperbole exaggerating how quickly people write",
          "Speed of writing is not the point; irreversibility is.")
      ],
      explanation: "Ask what abstract idea a concrete image stands for. Here, a writing hand that cannot erase stands for the irreversibility of what has happened." },

    { id: "LF206", domain: "literature", title: "Rubáiyát — word meaning", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["vocab-strategies"], passageSet: "rubaiyat", passage: P.rubaiyat,
      stem: "In line 2, “Wit” most nearly means—",
      options: [
        o("LF206-intelligence", "cleverness or intelligence",
          "Paired with Piety as a human resource that cannot undo the past: the older sense of wit as mind.", true),
        o("LF206-joking", "humor or joking",
          "The modern narrow sense; it does not fit beside Piety and Tears."),
        o("LF206-witness", "a witness",
          "Confuses wit with a different word."),
        o("LF206-wealth", "wealth or possessions",
          "Not a meaning of wit.")
      ],
      explanation: "Use context and period usage. Piety, Wit, and Tears name faith, intellect, and grief, and none of them can cancel a line." },

    { id: "LF207", domain: "literature", title: "Rubáiyát — central idea", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["world-literature"], passageSet: "rubaiyat", passage: P.rubaiyat,
      stem: "Which statement best expresses the stanza’s central idea?",
      options: [
        o("LF207-irreversible", "What is done cannot be undone, whether by devotion, cleverness, or grief.",
          "Covers all three failed remedies and the image of writing that cannot be cancelled.", true),
        o("LF207-prayer", "Sincere prayer can erase past mistakes.",
          "Contradicts “nor all thy Piety.”"),
        o("LF207-writing-skill", "Writing is a difficult skill that requires steady practice.",
          "Reads the figurative image literally."),
        o("LF207-tears-weak", "Tears are a sign of weakness.",
          "The stanza says tears cannot erase the past, not that they are weak.")
      ],
      explanation: "A central idea accounts for the whole stanza. Here, each human resource fails against the irreversibility of the past." },

    /* ---- words: vocabulary and etymology (0001) ---- */
    { id: "LF208", domain: "reading", title: "Word histories — inferring a root", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["word-origins"], passageSet: "words", passage: P.words,
      stem: "Based on the passage, the word asterisk most likely comes from a root meaning—",
      options: [
        o("LF208-star", "star",
          "The passage glosses astro as “star”; an asterisk is a little star-shaped mark.", true),
        o("LF208-mouse", "mouse",
          "That is the root of muscle, not asterisk."),
        o("LF208-forty", "forty",
          "That is the root of quarantine."),
        o("LF208-mass", "mass",
          "That is the root of molecule.")
      ],
      explanation: "Transfer a known root to a new word: astro/aster (star) appears in disaster, asterisk, and astronomy." },

    { id: "LF209", domain: "reading", title: "Word histories — diminutive ending", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["word-origins", "vocab-strategies"], passageSet: "words", passage: P.words,
      stem: "According to the passage, the ending shared by musculus and molecule signals—",
      options: [
        o("LF209-small", "smallness",
          "The passage calls it a diminutive: little mouse, little mass.", true),
        o("LF209-plural", "more than one",
          "A plural ending is not what the passage describes."),
        o("LF209-agent", "a person who performs an action",
          "That is the job of endings such as -er and -or, not a diminutive."),
        o("LF209-opposite", "a negative or opposite meaning",
          "That is the job of a prefix like dis-.")
      ],
      explanation: "Affixes carry meaning. A diminutive marks something small, as in musculus, molecule, and booklet." },

    { id: "LF210", domain: "reading", title: "Word histories — etymological fallacy", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["word-origins"], passageSet: "words", passage: P.words,
      stem: "Which statement commits the error the final paragraph describes?",
      options: [
        o("LF210-fallacy", "A two-hour quarantine is not a real quarantine, because quarantine means forty days.",
          "Treats the word’s origin as its current definition: the etymological fallacy.", true),
        o("LF210-origin", "Quarantine comes from the Italian phrase for “forty days.”",
          "An accurate statement about origin, with no claim about present meaning."),
        o("LF210-mouse", "A flexing muscle was once compared to a moving mouse.",
          "Reports history accurately."),
        o("LF210-date", "Disaster entered English in the late 1500s.",
          "A dated fact about the word’s arrival, not a claim about its meaning.")
      ],
      explanation: "Origins can explain a word but do not limit its present meaning. Current usage defines words." },

    { id: "LF211", domain: "reading", title: "Word histories — meaning in context", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["vocab-strategies"], passageSet: "words", passage: P.words,
      stem: "In the first paragraph, “alignment” most nearly means—",
      options: [
        o("LF211-position", "arrangement or relative position",
          "“A bad alignment of the stars” refers to how the stars were positioned.", true),
        o("LF211-alliance", "agreement or political alliance",
          "A real sense of the word, but it does not fit the stars."),
        o("LF211-line", "a straight line drawn on paper",
          "Too literal and unrelated to the context."),
        o("LF211-wheels", "an adjustment of a car’s wheels",
          "A specialized sense that does not fit the context.")
      ],
      explanation: "With multiple-meaning words, test each sense in the sentence. Only arrangement or position fits stars." },

    { id: "LF212", domain: "reading", title: "Word histories — author’s purpose", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["word-origins", "informational-texts"], passageSet: "words", passage: P.words,
      stem: "The writer’s main purpose is to—",
      options: [
        o("LF212-illuminate", "show how word histories can illuminate meaning while warning that origins do not fix present meaning",
          "Covers the three examples and the closing caution.", true),
        o("LF212-return", "argue that English speakers should return to the original meanings of words",
          "The final paragraph argues the opposite."),
        o("LF212-astrology", "prove that astrology shaped modern science",
          "Overclaim. The passage only says the belief left a word behind."),
        o("LF212-hard-words", "list the most difficult words in English",
          "The words are examples of etymology, not a difficulty ranking.")
      ],
      explanation: "A purpose statement must fit the whole passage, including any turn or caution at the end." }
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  items.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items);
})();
