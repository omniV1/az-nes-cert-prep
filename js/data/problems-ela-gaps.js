/* Short NES-style items for remaining cheap-point gaps: fallacies, dialect/language change,
   literary periods, extra workplace texts. Original stems only. */
window.PROBLEMS = (window.PROBLEMS || []).concat([
  { id: "EG001", domain: "writing", title: "Straw man", difficulty: "medium", tags: ["fallacies"], skillIds: ["persuasive-writing"],
    stem: "A speaker says, “My opponent wants clean water.” A critic replies, “So you want to bankrupt every family tonight.” The critic’s move is primarily—",
    choices: ["ad hominem: attacking the opponent’s character instead of the clean-water claim", "a straw man: replacing the claim with an extreme version that is easier to attack", "a red herring: changing the subject away from water policy", "a false dilemma: treating clean water and family solvency as the only two options"],
    answer: 1, explanation: "Clean water ≠ bankrupt every family tonight. Straw man distorts, then knocks down the distortion." },

  { id: "EG002", domain: "writing", title: "Post hoc", difficulty: "medium", tags: ["fallacies"], skillIds: ["persuasive-writing", "evidence-credibility"],
    stem: "“We hired a mascot in March, and SAT scores rose in May, so the mascot caused the scores.” This is weakest as—",
    choices: ["post hoc: sequence treated as cause", "hasty generalization from one school’s spring scores", "false analogy: treating a mascot as equivalent to a curriculum", "bandwagon: other schools hired mascots, so this one must work"],
    answer: 0, explanation: "After this, therefore because of this. Many other variables sit between March and May." },

  { id: "EG003", domain: "writing", title: "Bandwagon", difficulty: "easy", tags: ["fallacies"], skillIds: ["persuasive-writing"],
    stem: "“Seven neighboring towns already banned the snack, so we must too.” The main appeal is—",
    choices: ["bandwagon (popularity as proof)", "false analogy: assuming the towns match this one in every relevant way", "slippery slope: the snack ban will inevitably end all food rules", "hasty generalization from seven towns to a universal must"],
    answer: 0, explanation: "Numbers of adopters are not, by themselves, evidence the ban works." },

  { id: "EG004", domain: "writing", title: "Slippery slope", difficulty: "medium", tags: ["fallacies"], skillIds: ["persuasive-writing"],
    stem: "“If we allow a 10-minute later bell, next year there will be no school at all.” This is primarily—",
    choices: ["a slippery slope that skips the in-between cases", "a straw man: replacing a later bell with a claim nobody made", "a false dilemma: only an on-time bell or no school at all", "post hoc: the last late start caused a shutdown elsewhere"],
    answer: 0, explanation: "A small change is chained to an extreme without showing the necessary steps." },

  { id: "EG005", domain: "writing", title: "False analogy", difficulty: "medium", tags: ["fallacies"], skillIds: ["persuasive-writing"],
    stem: "“Running a district is just like coaching a 3-on-3 tournament, so cut every counselor.” The comparison fails as—",
    choices: ["a false analogy: the relevant features (scale, law, counseling) do not match", "hasty generalization from one tournament result to all counseling", "a false dilemma: either coaches or counselors, never both", "a slippery slope: keeping counselors will end all sports"],
    answer: 0, explanation: "Analogies need matching structure. A gym bracket is not a statutory school system." },

  { id: "EG006", domain: "writing", title: "Circular reasoning", difficulty: "medium", tags: ["fallacies"], skillIds: ["persuasive-writing"],
    stem: "“The policy is wise because it is the wise policy.” This is—",
    choices: ["circular reasoning (the claim restated as its own proof)", "bandwagon: the policy is popular, so it must be wise", "appeal to false authority: a celebrity called it wise", "ad hominem: critics of the policy are unwise people"],
    answer: 0, explanation: "Wise because wise. No new warrant." },

  { id: "EG007", domain: "writing", title: "Appeal to false authority", difficulty: "medium", tags: ["fallacies"], skillIds: ["rhetorical-appeals", "evidence-credibility"],
    stem: "A celebrity chef is quoted as the sole source on whether a bridge is structurally sound. The ethos problem is—",
    choices: ["expertise in one field is treated as expertise in another", "ad hominem: the chef’s character is attacked instead of the claim", "bandwagon: diners like the chef, so the bridge must be sound", "hasty generalization from one kitchen inspection to all bridges"],
    answer: 0, explanation: "False / misplaced authority. Ethos must match the claim’s domain." },

  { id: "EG008", domain: "writing", title: "Red herring", difficulty: "medium", tags: ["fallacies"], skillIds: ["persuasive-writing"],
    stem: "Asked whether the budget covers roof repairs, a speaker answers with a two-minute story about a championship parade. That is primarily—",
    choices: ["a red herring: a distraction from the asked issue", "a straw man: distorting the roof claim into something easier to attack", "ad hominem: attacking the person who asked about the roof", "bandwagon: the parade was popular, so the roof must be fine"],
    answer: 0, explanation: "Parade pride does not answer the roof line." },

  { id: "EG009", domain: "writing", title: "Hasty generalization", difficulty: "easy", tags: ["fallacies"], skillIds: ["evidence-credibility"],
    stem: "After meeting one rude clerk, a writer concludes the entire agency is corrupt. The error is—",
    choices: ["hasty generalization from a single case", "ad hominem: attacking the clerk’s character instead of a policy claim", "post hoc: the clerk was rude after a visit, so the visit caused corruption", "false dilemma: either the whole agency is corrupt or none of it is"],
    answer: 0, explanation: "n = 1 cannot carry a universal institutional claim." },

  { id: "EG010", domain: "writing", title: "Ad populum vs data", difficulty: "hard", tags: ["fallacies"], skillIds: ["persuasive-writing", "rhetorical-appeals"],
    stem: "Which closing is logically stronger for a board memo?",
    choices: [
      "Every board member I spoke with already supports the repair, so tonight's vote should be a formality.",
      "Three years of leak counts and two repair bids show patching now costs more than replacing.",
      "Our school deserves a roof as strong as the students who learn under it.",
      "Delaying again would repeat the mistake the board made with the gym floor."
    ],
    answer: 1, explanation: "Checkable evidence (leak counts, bids, a cost comparison) is the logically strongest close. Agreement among members is bandwagon, the roof-and-students line is an emotional slogan, and the gym-floor comparison asserts a past mistake without showing it applies." },

  { id: "EG011", domain: "reading", title: "Semantic change — nice", difficulty: "medium", tags: ["etymology", "dialect"], skillIds: ["word-origins"],
    stem: "Historically nice could mean “foolish” or “fastidious” before “pleasant.” This is an example of—",
    choices: ["semantic change (a word's meaning shifting over time)", "narrowing (a broad meaning becoming more specific)", "dialect (a regional variety of a language)", "register (formality suited to an audience)"],
    answer: 0, explanation: "Nice moved from foolish to fastidious to pleasant, so its meaning shifted over time: semantic change. Narrowing would mean a broad sense became more specific, which is not what happened. Dialect and register describe variation between speakers or situations, not change across centuries." },

  { id: "EG012", domain: "reading", title: "Semantic narrowing — meat", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Old English mete meant food in general; modern meat is usually animal flesh. The change is—",
    choices: ["narrowing (a broader meaning becomes more specific)", "broadening (a specific meaning becoming more general)", "pejoration (the word becoming more negative in tone)", "amelioration (the word becoming more positive in status)"],
    answer: 0, explanation: "Broad → narrow is specialization/narrowing." },

  { id: "EG013", domain: "reading", title: "Amelioration — knight", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Knight once meant a youth or servant and later a ranked mounted warrior. That rise in status-meaning is—",
    choices: ["amelioration", "pejoration", "narrowing", "broadening"],
    answer: 0, explanation: "Amelioration means a word's meaning rises in status or becomes more positive: a servant boy became a ranked warrior. Pejoration is the opposite fall. Narrowing and broadening describe how wide a meaning is, not whether its status rose." },

  { id: "EG014", domain: "reading", title: "Pejoration — villain", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Villain once related to a farm worker and now names a wicked character. This is—",
    choices: ["pejoration", "amelioration", "narrowing", "broadening"],
    answer: 0, explanation: "Villain fell from a farm worker to a wicked character, a drop in status and moral standing: pejoration. Amelioration is a rise. Narrowing and broadening describe the range of a meaning, not its status." },

  { id: "EG015", domain: "reading", title: "Dialect vs error", difficulty: "hard", tags: ["dialect"], skillIds: ["word-origins", "grammar-usage"],
    stem: "A literary narrator writes, “He don’t never come by here.” On an NES item about dialect in literature, the best first move is to—",
    choices: [
      "mark it as a usage error the writer should correct",
      "ask what the nonstandard pattern shows about voice, region, or character",
      "treat it as a register error, since the narrator is not using formal English",
      "read it as an example of semantic change in the word never"
    ],
    answer: 1, explanation: "In literature, dialect is a choice that builds voice and culture, so the first move is to ask what it does. Correcting it treats a character's speech like a student draft. Register is about matching formality to an audience, which is not the issue in a character's voice, and no word's meaning is changing over time here." },

  { id: "EG016", domain: "reading", title: "Register", difficulty: "easy", tags: ["dialect", "style"], skillIds: ["style-audience", "word-origins"],
    stem: "A job application that says “gonna crush this gig lol” is weak primarily because of—",
    choices: ["register: slang that does not suit a job application", "dialect: a regional variety of English", "jargon: specialized vocabulary from a single field", "concision: the sentence is too short to be complete"],
    answer: 0, explanation: "Audience controls diction: gonna, gig, and lol are informal slang in a formal setting, a register mismatch. They are not regional dialect features or specialized jargon, and the sentence is not weak because it is short." },

  { id: "EG017", domain: "reading", title: "Borrowing", difficulty: "easy", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Piano, soprano, and soprano’s cousin alto in music vocabulary are historically—",
    choices: ["borrowings from Italian", "borrowings from French", "coinages invented in English", "native English words that narrowed in meaning"],
    answer: 0, explanation: "Piano, soprano, and alto came into English from Italian, the source of much musical vocabulary. They did not come through French, they were not invented in English, and they are not native English words." },

  { id: "EG018", domain: "reading", title: "Coinage vs shift", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "A company invents the trademarked name of a new gadget; a century later the word is used generically for any similar device. The second stage is—",
    choices: ["genericization: a brand name becomes a common noun", "coinage: a new word is invented", "borrowing: a word is taken from another language", "narrowing: a broad meaning becomes more specific"],
    answer: 0, explanation: "A trademark used for any similar device has become a common noun: genericization, a kind of semantic change (as with aspirin). Coinage describes the first stage, when the name was invented. Nothing was borrowed from another language, and the meaning grew broader, not narrower." },

  { id: "EG019", domain: "literature", title: "Classical epic habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods", "world-literature"],
    stem: "An opening that calls on a muse, names a wandering hero, and starts mid-story is most characteristic of—",
    choices: ["classical epic (Homeric habit)", "medieval romance (questing knight and courtly tests)", "English Renaissance tragedy (blank-verse asides and a tragic fall)", "British Romantic lyric (solitary speaker restored by nature)"],
    answer: 0, explanation: "Invocation + in medias res + nostos/wanderer = epic toolkit." },

  { id: "EG020", domain: "literature", title: "Medieval romance habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "A questing knight, a courtly love test, and marvels alongside Christian symbols most nearly signal—",
    choices: ["medieval romance", "classical epic", "Gothic novel", "Renaissance pastoral"],
    answer: 0, explanation: "A questing knight, a test of courtly love, and marvels set among Christian symbols are the furniture of medieval romance (Arthurian tales such as Sir Gawain). Classical epic invokes a muse and centers a war or homecoming, the Gothic novel builds dread in a threatened space, and pastoral idealizes rural shepherd life." },

  { id: "EG021", domain: "literature", title: "Renaissance drama habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods", "prose-drama-analysis"],
    stem: "Blank-verse public speech, a tragic fall, and asides to the audience are most at home in—",
    choices: ["English Renaissance tragedy", "medieval romance", "Restoration comedy of manners", "Greek tragedy"],
    answer: 0, explanation: "Blank verse, a tragic fall, and asides to the audience together point to English Renaissance tragedy (Shakespeare, Marlowe). Greek tragedy has a fall but no English blank verse and uses a chorus rather than asides. Restoration comedy uses asides but ends in marriage, not a fall, and medieval romance is narrative, not drama." },

  { id: "EG022", domain: "literature", title: "Enlightenment habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Public reason, satire of institutions, and social-contract argument (Paine, Swift, Popean couplets) characterize—",
    choices: ["Enlightenment / neoclassical writing", "British Romanticism", "American Realism", "Modernism"],
    answer: 0, explanation: "Public reason, satire of institutions, and social-contract argument mark the Enlightenment (Paine, Swift, Pope). Romanticism turns inward to feeling and nature, Realism portrays ordinary social life, and Modernism fragments form." },

  { id: "EG023", domain: "literature", title: "Romantic habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "A solitary speaker restored by a natural scene stored in memory is a hallmark of—",
    choices: ["British Romanticism", "Enlightenment / neoclassical writing", "Realism", "Modernism"],
    answer: 0, explanation: "A solitary speaker restored by a remembered natural scene is the Wordsworthian Romantic pattern (Tintern Abbey, I wandered lonely as a cloud). The Enlightenment favors public reason and satire, Realism ordinary social life, and Modernism fragmented form." },

  { id: "EG024", domain: "literature", title: "Realism habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Ordinary money, class, and probable social cause (rather than sublime nature) most nearly mark—",
    choices: ["Realism", "Romanticism", "Gothic fiction", "Modernism"],
    answer: 0, explanation: "Ordinary money, class, and plausible social causes are Realism's subject (Austen, George Eliot, Twain). Romanticism seeks the sublime in nature, Gothic fiction builds dread, and Modernism breaks narrative form." },

  { id: "EG025", domain: "literature", title: "Naturalism habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Characters crushed by heredity, industry, and chance, narrated with grim determinism, best fits—",
    choices: ["Naturalism", "Realism", "Romanticism", "Transcendentalism"],
    answer: 0, explanation: "Characters crushed by heredity, industry, and chance, told with grim determinism, define Naturalism (Crane, Dreiser), a harder-edged heir of Realism. Realism shows ordinary life without making determinism the rule, while Romanticism and Transcendentalism trust imagination and the self." },

  { id: "EG026", domain: "literature", title: "Modernism habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Fragmented form, broken time, and distrust of a single smooth narrator most nearly mark—",
    choices: ["Modernism", "Realism", "Naturalism", "Romanticism"],
    answer: 0, explanation: "Fragmented form, broken time, and distrust of a single smooth narrator are Modernist signatures (Woolf, Faulkner, Eliot). Realism and Naturalism rely on a steady narrator and chronological cause, and Romanticism centers a unified, feeling self." },

  { id: "EG027", domain: "literature", title: "Harlem Renaissance habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Modern Black artistic self-definition using both vernacular and high form (sonnet, blues cadence, diasporic history) is a defining habit of—",
    choices: ["the Harlem Renaissance", "Modernism", "Realism", "Transcendentalism"],
    answer: 0, explanation: "Black artistic self-definition that claims both vernacular (blues, spirituals) and high forms (McKay's sonnets) defines the Harlem Renaissance. It overlaps Modernism in time, but Modernism alone does not name that project. Realism and Transcendentalism belong to the nineteenth century." },

  { id: "EG028", domain: "literature", title: "Transcendentalism habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Intuition over stale custom, the self in nature, and “trust thyself” rhetoric characterize—",
    choices: ["American Transcendentalism", "Puritan plain style", "Naturalism", "Realism"],
    answer: 0, explanation: "Intuition over custom, the self in nature, and trust thyself are Emerson and Thoreau: American Transcendentalism. Puritan writing submits the self to scripture and community, Naturalism denies that freedom, and Realism records ordinary social life." },

  { id: "EG029", domain: "literature", title: "Gothic habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Gloom, a threatened interior, and psychological dread (Poe; later Gothic houses) most nearly signal—",
    choices: ["Gothic", "Enlightenment satire", "Realism", "Transcendentalism"],
    answer: 0, explanation: "Gloom, a threatened interior, and psychological dread are Gothic atmosphere (Poe, Shirley Jackson). Enlightenment satire is public and rational, Realism keeps to ordinary probable life, and Transcendentalism is hopeful about the self and nature." },

  { id: "EG030", domain: "literature", title: "Period trap", difficulty: "hard", tags: ["periods", "traps"], skillIds: ["literary-periods"],
    stem: "The weakest study habit for NES period items is—",
    choices: [
      "learning each movement's characteristic concerns with a public-domain example",
      "memorizing authors' birth dates and spouses",
      "contrasting Romantic nature-feeling with Realist social detail",
      "noticing when a passage is satire rather than sincere argument"
    ],
    answer: 1, explanation: "Period items test style and concerns, not trivia. Birth dates and spouses do not help you identify a passage. The other three habits are exactly what the items reward." },

  { id: "EG031", domain: "reading", title: "Job posting — must vs prefer", difficulty: "hard", tags: ["technical", "workplace"], skillIds: ["technical-texts"],
    passage: "LIBRARY AIDE (part-time). Required: 16 years of age; ability to lift 20 lb; Saturday 9–1 availability. Preferred: Spanish; prior cash-register work. Apply by the 15th with a one-page availability grid. Incomplete grids will not be reviewed. The posting is not a contract; hiring depends on a background check.",
    stem: "A 17-year-old who can lift 20 lb, is free Saturdays, and submits a complete grid but has no Spanish and no register experience is—",
    choices: [
      "ineligible, because Spanish appears in the posting's list of skills",
      "eligible: every required item is met; preferred ones are optional",
      "ineligible, because applicants must be 18 to handle cash",
      "eligible only if a manager waives the Saturday requirement"
    ],
    answer: 1, explanation: "The applicant meets every Required item: age 16 or older, lifting 20 lb, Saturday availability, and a complete grid. Spanish and register work are only Preferred, so lacking them is not disqualifying. The posting sets the age at 16, not 18, and the applicant is already free on Saturdays." },

  { id: "EG032", domain: "reading", title: "Job posting — deadline", difficulty: "medium", tags: ["technical", "workplace"], skillIds: ["technical-texts"],
    passage: "LIBRARY AIDE (part-time). Required: 16 years of age; ability to lift 20 lb; Saturday 9–1 availability. Preferred: Spanish; prior cash-register work. Apply by the 15th with a one-page availability grid. Incomplete grids will not be reviewed. The posting is not a contract; hiring depends on a background check.",
    stem: "An otherwise complete application arriving on the 16th without a grid should be—",
    choices: [
      "reviewed, because all required personal qualifications are met",
      "not reviewed: it is late and missing the required grid",
      "reviewed if the preferred skills are strong",
      "held until the grid arrives, since the deadline is only a guideline"
    ],
    answer: 1, explanation: "The posting sets two gates: apply by the 15th, and incomplete grids will not be reviewed. This application fails both. Meeting the personal requirements or having preferred skills does not reopen either gate, and the posting gives no grace period." },

  { id: "EG033", domain: "reading", title: "Evacuation card — sequence", difficulty: "hard", tags: ["technical", "workplace"], skillIds: ["technical-texts"],
    passage: "IF YOU SMELL GAS: (1) Do not switch lights. (2) Leave the door open as you exit. (3) Call the utility from outside. (4) Do not re-enter until a utility tech says the line is clear. A text to a neighbor is not a substitute for step 3.",
    stem: "A resident who flips a light on to “see the stove,” then texts a neighbor from the kitchen, has—",
    choices: [
      "followed steps 1 through 3 in order",
      "violated step 1 and replaced the outside call with a text",
      "violated only step 4 by staying in the kitchen",
      "satisfied step 3, since the neighbor can then call the utility for them"
    ],
    answer: 1, explanation: "Flipping a light breaks step 1. Step 3 requires calling the utility from outside, and the card says a text to a neighbor is not a substitute. Step 4 is about re-entering, which has not happened yet." },

  { id: "EG034", domain: "reading", title: "Benefits table — inference", difficulty: "hard", tags: ["graphics", "workplace"], skillIds: ["text-graphics", "technical-texts"],
    passage: "Plan     Monthly premium   Deductible   Specialist copay\nA        $0                $2,000       $80\nB        $120              $500         $40\nC        $40               $1,000       $40\nNote: Plan A is free only if you use the in-network clinic list. Out-of-network claims are denied.",
    stem: "A worker who needs frequent specialists and can pay $120/month would most reasonably compare—",
    choices: [
      "Plan A, because a $0 premium saves $1,440 a year",
      "Plan B's higher premium against its lower deductible and copay",
      "Plan C, because its premium and deductible are both the lowest",
      "Plan A's $0 premium against its $80 copay, ignoring the network note"
    ],
    answer: 1, explanation: "Frequent specialist visits make the deductible and copay matter, so the worker should weigh Plan B's $120 premium against its $500 deductible and $40 copay. Plan A's $0 premium comes with an $80 copay and only if the worker stays in network, and Plan C has neither the lowest premium nor the lowest deductible." },

  { id: "EG035", domain: "oral", title: "Parliamentary basics", difficulty: "medium", tags: ["discussion"], skillIds: ["group-discussion"],
    stem: "In a formal club meeting, a member who wants to end debate and vote should most properly—",
    choices: [
      "move to table the motion",
      "move the previous question (call the question)",
      "move to adjourn",
      "raise a point of order"
    ],
    answer: 1, explanation: "Moving the previous question (calling the question) is the motion that closes debate and brings the pending motion to a vote. Tabling sets the motion aside, adjourning ends the meeting, and a point of order flags a rules violation." },

  { id: "EG036", domain: "oral", title: "Evaluating a speaker", difficulty: "medium", tags: ["listening"], skillIds: ["listening-speaking", "speech-craft"],
    stem: "A speaker cites one unnamed “expert” and never defines the policy ask. The fairest evaluation is that the speech is weak in—",
    choices: ["named evidence and a clear purpose", "delivery, since the speaker's pacing was uneven", "organization, since the speech had no preview", "audience analysis, since the speaker used jargon"],
    answer: 0, explanation: "The stated problems are an unnamed expert (weak evidence) and an undefined ask (unclear purpose). Nothing in the description mentions pacing, a preview, or jargon, so those judgments go beyond the evidence." },

  { id: "EG037", domain: "oral", title: "Visual aid ethics", difficulty: "medium", tags: ["ethics"], skillIds: ["presentation-ethics", "media-analysis"],
    stem: "A student crops a photo to hide protest signs, then captions it “unanimous support.” The ethical problem is—",
    choices: ["selection and caption that misrepresent the scene", "publishing protesters without their written consent", "failing to credit the photographer", "a caption too short to give context"],
    answer: 0, explanation: "Cropping out the signs and captioning the scene unanimous support together manufacture a consensus that did not exist. Credit and consent matter in other cases, but they are not the problem here, and the caption is misleading, not merely short." },

  { id: "EG038", domain: "language", title: "MLA vs APA signal", difficulty: "medium", tags: ["research"], skillIds: ["research-citation"],
    stem: "A paper uses (Ruiz 42) after a quotation and a works-cited page of author-first entries. That pattern is—",
    choices: ["MLA author-page citation", "APA author-date citation", "Chicago notes-bibliography citation", "a signal phrase with no parenthetical"],
    answer: 0, explanation: "(Ruiz 42) gives author and page with no comma or year, and the works-cited page lists authors first: MLA. APA would include the year (Ruiz, 2021, p. 42), Chicago notes-bibliography uses footnotes, and this citation is parenthetical, not a signal phrase." },

  { id: "EG039", domain: "language", title: "Open vs closed question", difficulty: "easy", tags: ["research"], skillIds: ["research-citation"],
    stem: "Which is the better open-ended research question?",
    choices: [
      "Did it rain in Phoenix on 12 July 2024?",
      "How did the 2024 monsoon alert system affect evacuation times in two ridge neighborhoods?",
      "What is the history of weather in Arizona?",
      "Should Phoenix spend more money on weather alerts?"
    ],
    answer: 1, explanation: "A strong research question is open, focused, and answerable with evidence. The rain question is a yes/no fact check, the history question is too broad to research well, and the spending question asks for an opinion more than an investigation." },

  { id: "EG040", domain: "literature", title: "Haiku vs sonnet", difficulty: "easy", tags: ["poetry"], skillIds: ["poetry-forms"],
    stem: "A three-line image poem with a seasonal cut, historically 5-7-5 in Japanese count, is a—",
    choices: ["haiku", "tanka", "cinquain", "limerick"],
    answer: 0, explanation: "Three lines, a seasonal image, and a 5-7-5 count in Japanese mark the haiku. A tanka adds two more lines (5-7-5-7-7), a cinquain has five lines, and a limerick has five rhymed comic lines." }
]);
