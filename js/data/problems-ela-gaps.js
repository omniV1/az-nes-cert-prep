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
      "Everyone who matters already agrees, so vote yes.",
      "Here are three years of leak counts, repair bids, and a one-year pilot metric we will publish.",
      "Opponents are cowards.",
      "If you vote no, you hate this town."
    ],
    answer: 1, explanation: "Checkable evidence beats popularity, insult, and moral blackmail." },

  { id: "EG011", domain: "reading", title: "Semantic change — nice", difficulty: "medium", tags: ["etymology", "dialect"], skillIds: ["word-origins"],
    stem: "Historically nice could mean “foolish” or “fastidious” before “pleasant.” This is an example of—",
    choices: ["semantic change (a word’s meaning shifting over time)", "narrowing: a broader meaning becoming more specific", "dialect: a regional variety treated as the whole history of the word", "register: a one-audience formality shift, not a historical meaning change"],
    answer: 0, explanation: "Meanings drift. NES 0001 / Field 02 language-change items test that habit, not a single year." },

  { id: "EG012", domain: "reading", title: "Semantic narrowing — meat", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Old English mete meant food in general; modern meat is usually animal flesh. The change is—",
    choices: ["narrowing (a broader meaning becomes more specific)", "broadening (a specific meaning becoming more general)", "pejoration (the word becoming more negative in tone)", "amelioration (the word becoming more positive in status)"],
    answer: 0, explanation: "Broad → narrow is specialization/narrowing." },

  { id: "EG013", domain: "reading", title: "Amelioration — knight", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Knight once meant a youth or servant and later a ranked mounted warrior. That rise in status-meaning is—",
    choices: ["amelioration", "pejoration: a fall in status-meaning", "narrowing: a broader sense becoming more specific with no status rise", "broadening: a specific sense becoming more general"],
    answer: 0, explanation: "Amelioration = meaning becomes more positive or higher-status. Pejoration is the opposite." },

  { id: "EG014", domain: "reading", title: "Pejoration — villain", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Villain once related to a farm worker and now names a wicked character. This is—",
    choices: ["pejoration (meaning becomes more negative)", "amelioration: a rise in status-meaning", "narrowing: farm worker becoming a more specific job title only", "broadening: a specific sense becoming more general"],
    answer: 0, explanation: "Status/moral fall in the word’s usual sense." },

  { id: "EG015", domain: "reading", title: "Dialect vs error", difficulty: "hard", tags: ["dialect"], skillIds: ["word-origins", "grammar-usage"],
    stem: "A literary narrator writes, “He don’t never come by here.” On an NES item about dialect in literature, the best first move is to—",
    choices: [
      "treat it only as a student grammar error to “fix” before reading meaning",
      "ask what the nonstandard pattern is doing (voice, region, character) rather than only marking it wrong",
      "read it as a register mismatch to a formal audience, ignoring literary voice",
      "read it as semantic change (a word’s historical meaning shift) rather than a dialect pattern"
    ],
    answer: 1, explanation: "Field 02 / NES literature items treat dialect as a feature of voice and culture, not only as a worksheet error. Usage items in a student-draft context are a different game." },

  { id: "EG016", domain: "reading", title: "Register", difficulty: "easy", tags: ["dialect", "style"], skillIds: ["style-audience", "word-origins"],
    stem: "A job application that says “gonna crush this gig lol” is weak primarily because of—",
    choices: ["register: informal slang mismatches a formal civic/employment audience", "dialect: a regional grammar pattern rather than an audience-formality mismatch", "semantic narrowing: a word’s meaning becoming more specific over centuries", "pejoration: a historical fall in a word’s status-meaning"],
    answer: 0, explanation: "Audience controls diction. The content may even be confident; the register is wrong." },

  { id: "EG017", domain: "reading", title: "Borrowing", difficulty: "easy", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "Piano, soprano, and soprano’s cousin alto in music vocabulary are historically—",
    choices: ["borrowings from Italian arts vocabulary", "coinages invented inside English with no loan source", "semantic narrowing of native English music words", "dialect variants of the same native English roots"],
    answer: 0, explanation: "English constantly borrows. Music terms from Italian are a standard example." },

  { id: "EG018", domain: "reading", title: "Coinage vs shift", difficulty: "medium", tags: ["etymology"], skillIds: ["word-origins"],
    stem: "A company invents the trademarked name of a new gadget; a century later the word is used generically for any similar device. The second stage is—",
    choices: ["genericization (a brand becomes a common noun), a kind of semantic change", "coinage only: the trademark naming event, stopping before the later generic use", "borrowing from another language rather than a brand becoming a common noun", "narrowing: a general device name becoming a single trademark"],
    answer: 0, explanation: "Aspirin-style drift. Distinct from the original coinage event." },

  { id: "EG019", domain: "literature", title: "Classical epic habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods", "world-literature"],
    stem: "An opening that calls on a muse, names a wandering hero, and starts mid-story is most characteristic of—",
    choices: ["classical epic (Homeric habit)", "medieval romance (questing knight and courtly tests)", "English Renaissance tragedy (blank-verse asides and a tragic fall)", "British Romantic lyric (solitary speaker restored by nature)"],
    answer: 0, explanation: "Invocation + in medias res + nostos/wanderer = epic toolkit." },

  { id: "EG020", domain: "literature", title: "Medieval romance habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "A questing knight, a courtly love test, and marvels alongside Christian symbols most nearly signal—",
    choices: ["medieval romance", "classical epic (muse invocation and in medias res wanderer)", "English Renaissance tragedy (public blank verse and asides)", "Naturalism (determinism of heredity and industry)"],
    answer: 0, explanation: "Arthurian/romance furniture. Not Dreiser or Pound’s single image." },

  { id: "EG021", domain: "literature", title: "Renaissance drama habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods", "prose-drama-analysis"],
    stem: "Blank-verse public speech, a tragic fall, and asides to the audience are most at home in—",
    choices: ["English Renaissance tragedy (Shakespearean toolkit)", "medieval romance (questing knight and marvels)", "British Romantic lyric (solitary nature-memory)", "American Transcendentalism (intuition and self-reliance essays)"],
    answer: 0, explanation: "Stage, verse, aside, fall. Not medieval romance, Romantic nature-memory, or Emerson’s woods." },

  { id: "EG022", domain: "literature", title: "Enlightenment habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Public reason, satire of institutions, and social-contract argument (Paine, Swift, Popean couplets) characterize—",
    choices: ["Enlightenment / neoclassical writing", "British Romantic lyric (solitary feeling in nature)", "American Realism (ordinary class and money)", "medieval romance (courtly quest and marvels)"],
    answer: 0, explanation: "Reason and public satire, not Wordsworth’s inward eye as the definition." },

  { id: "EG023", domain: "literature", title: "Romantic habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "A solitary speaker restored by a natural scene stored in memory is a hallmark of—",
    choices: ["British Romantic lyric", "Enlightenment / neoclassical satire and public reason", "Realism’s ordinary social cause and class detail", "Naturalism’s grim industrial determinism"],
    answer: 0, explanation: "Wordsworthian pattern. Augustan satire and documentary wages are other toolkits." },

  { id: "EG024", domain: "literature", title: "Realism habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Ordinary money, class, and probable social cause (rather than sublime nature) most nearly mark—",
    choices: ["Realism", "British Romantic lyric (sublime nature and solitary self)", "Naturalism (heredity and chance crushing characters)", "Modernism (fragmented time and broken narration)"],
    answer: 0, explanation: "Austen-to-Eliot-to-Twain social world. Romantic sublime, Naturalist determinism, and Modernist fracture are other period habits." },

  { id: "EG025", domain: "literature", title: "Naturalism habit", difficulty: "medium", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Characters crushed by heredity, industry, and chance, narrated with grim determinism, best fits—",
    choices: ["Naturalism (a harder-edged heir of Realism)", "Realism (ordinary social cause without grim determinism as the rule)", "American Transcendentalism (intuition and self-trust)", "British Romantic lyric (restorative nature and imagination)"],
    answer: 0, explanation: "Determinism + social forces. Emerson’s self-trust is the opposite mood." },

  { id: "EG026", domain: "literature", title: "Modernism habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Fragmented form, broken time, and distrust of a single smooth narrator most nearly mark—",
    choices: ["Modernism", "Enlightenment / neoclassical couplet order and public reason", "Realism’s probable social cause and ordinary speech", "the Harlem Renaissance as a jazz-cadence project only"],
    answer: 0, explanation: "Make it new / make it broken. Not Pope’s balance, Realist social cause, or Harlem Renaissance self-definition as the whole cluster." },

  { id: "EG027", domain: "literature", title: "Harlem Renaissance habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Modern Black artistic self-definition using both vernacular and high form (sonnet, blues cadence, diasporic history) is a defining habit of—",
    choices: ["the Harlem Renaissance", "Modernism (broken chronology without that Black-arts self-definition project)", "American Transcendentalism (nature and self-reliance essays)", "Enlightenment / Augustan mock-epic satire"],
    answer: 0, explanation: "The movement claims the full toolkit, not a ban on form." },

  { id: "EG028", domain: "literature", title: "Transcendentalism habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Intuition over stale custom, the self in nature, and “trust thyself” rhetoric characterize—",
    choices: ["American Transcendentalism", "Naturalism (characters crushed by heredity and chance)", "British Romantic lyric as imported English nature-feeling only", "American Realism (wages and probable social cause)"],
    answer: 0, explanation: "Emerson/Thoreau habit. Naturalism denies that freedom; Romantic nature-feeling and Realist wages are other toolkits." },

  { id: "EG029", domain: "literature", title: "Gothic habit", difficulty: "easy", tags: ["periods"], skillIds: ["literary-periods"],
    stem: "Gloom, a threatened interior, and psychological dread (Poe; later Gothic houses) most nearly signal—",
    choices: ["Gothic atmosphere", "Enlightenment optimism and public reason", "British Romantic restorative nature lyric", "Realism’s ordinary probable social cause"],
    answer: 0, explanation: "Mood and threatened space, not Enlightenment optimism, Romantic restoration, or Realist social cause." },

  { id: "EG030", domain: "literature", title: "Period trap", difficulty: "hard", tags: ["periods", "traps"], skillIds: ["literary-periods"],
    stem: "The weakest study habit for NES period items is—",
    choices: [
      "learning each movement’s artistic problem and a public-domain example",
      "memorizing spouses and exact birthdays instead of characteristic style",
      "contrasting Romantic nature-self with Realist social cause",
      "noticing when a passage is satire rather than sincere policy"
    ],
    answer: 1, explanation: "The exam asks habits, not trivia lists. {{opt:EG030-0}}, {{opt:EG030-2}}, and {{opt:EG030-3}} are the useful moves." },

  { id: "EG031", domain: "reading", title: "Job posting — must vs prefer", difficulty: "hard", tags: ["technical", "workplace"], skillIds: ["technical-texts"],
    passage: "LIBRARY AIDE (part-time). Required: 16 years of age; ability to lift 20 lb; Saturday 9–1 availability. Preferred: Spanish; prior cash-register work. Apply by the 15th with a one-page availability grid. Incomplete grids will not be reviewed. The posting is not a contract; hiring depends on a background check.",
    stem: "A 17-year-old who can lift 20 lb, is free Saturdays, and submits a complete grid but has no Spanish and no register experience is—",
    choices: [
      "automatically disqualified",
      "eligible on required items; preferred items are not automatic rejects",
      "already hired because the posting is a contract",
      "required to speak Spanish by the word Required"
    ],
    answer: 1, explanation: "Required vs preferred is the functional-text move. The posting says it is not a contract." },

  { id: "EG032", domain: "reading", title: "Job posting — deadline", difficulty: "medium", tags: ["technical", "workplace"], skillIds: ["technical-texts"],
    passage: "LIBRARY AIDE (part-time). Required: 16 years of age; ability to lift 20 lb; Saturday 9–1 availability. Preferred: Spanish; prior cash-register work. Apply by the 15th with a one-page availability grid. Incomplete grids will not be reviewed. The posting is not a contract; hiring depends on a background check.",
    stem: "An otherwise complete application arriving on the 16th without a grid should be—",
    choices: [
      "reviewed because preferred skills are strong",
      "not reviewed: late and incomplete both fail stated gates",
      "treated as a signed contract",
      "held for review because Required items were met even though the grid is missing"
    ],
    answer: 1, explanation: "By the 15th + incomplete grids will not be reviewed. Preferred skills do not reopen the gate." },

  { id: "EG033", domain: "reading", title: "Evacuation card — sequence", difficulty: "hard", tags: ["technical", "workplace"], skillIds: ["technical-texts"],
    passage: "IF YOU SMELL GAS: (1) Do not switch lights. (2) Leave the door open as you exit. (3) Call the utility from outside. (4) Do not re-enter until a utility tech says the line is clear. A text to a neighbor is not a substitute for step 3.",
    stem: "A resident who flips a light on to “see the stove,” then texts a neighbor from the kitchen, has—",
    choices: [
      "followed the card in order",
      "violated step 1 and substituted a text for the required outside call",
      "completed step 4",
      "satisfied step 3 by notifying any person, not the utility from outside"
    ],
    answer: 1, explanation: "Lights are forbidden first; the call must be from outside to the utility, not a kitchen text." },

  { id: "EG034", domain: "reading", title: "Benefits table — inference", difficulty: "hard", tags: ["graphics", "workplace"], skillIds: ["text-graphics", "technical-texts"],
    passage: "Plan     Monthly premium   Deductible   Specialist copay\nA        $0                $2,000       $80\nB        $120              $500         $40\nC        $40               $1,000       $40\nNote: Plan A is free only if you use the in-network clinic list. Out-of-network claims are denied.",
    stem: "A worker who needs frequent specialists and can pay $120/month would most reasonably compare—",
    choices: [
      "only the $0 premium and ignore copays",
      "Plan B’s higher premium against its lower deductible and copay, and still read the in-network note if considering A",
      "Plan C as having a $0 premium",
      "the table as proof that all claims are always paid"
    ],
    answer: 1, explanation: "Graphics items punish reading one column. A’s $0 is conditional. C is $40, not $0. Denied out-of-network is in the note." },

  { id: "EG035", domain: "oral", title: "Parliamentary basics", difficulty: "medium", tags: ["discussion"], skillIds: ["group-discussion"],
    stem: "In a formal club meeting, a member who wants to end debate and vote should most properly—",
    choices: [
      "move to table the motion indefinitely without a vote on the pending question",
      "move to call the question (or the group’s equivalent close-debate motion) rather than talk over people",
      "move to adjourn in order to skip the pending question without a vote",
      "raise a point of personal privilege as a substitute for closing debate"
    ],
    answer: 1, explanation: "Field 02 discussion items include basic parliamentary courtesy: a motion to close debate, not tabling, adjourning, or a privilege point as a substitute." },

  { id: "EG036", domain: "oral", title: "Evaluating a speaker", difficulty: "medium", tags: ["listening"], skillIds: ["listening-speaking", "speech-craft"],
    stem: "A speaker cites one unnamed “expert” and never defines the policy ask. The fairest evaluation is that the speech is weak in—",
    choices: ["named evidence and a clear purpose", "volume and pacing as the main defect", "eye contact as the only missing skill", "complete sentences as the sole missing feature"],
    answer: 0, explanation: "Analysis of a speech: claim, support, ask. Volume and grammar may be fine." },

  { id: "EG037", domain: "oral", title: "Visual aid ethics", difficulty: "medium", tags: ["ethics"], skillIds: ["presentation-ethics", "media-analysis"],
    stem: "A student crops a photo to hide protest signs, then captions it “unanimous support.” The ethical problem is—",
    choices: ["selection and caption that falsify the scene’s disagreement", "cropping for length while the caption still reports the disagreement", "fair use deleting all captions automatically", "naming the photographer while the crop and caption still hide dissent"],
    answer: 0, explanation: "Crop + caption can manufacture consensus. Attribution or fair-use talk does not repair a falsified scene." },

  { id: "EG038", domain: "language", title: "MLA vs APA signal", difficulty: "medium", tags: ["research"], skillIds: ["research-citation"],
    stem: "A paper uses (Ruiz 42) after a quotation and a works-cited page of author-first entries. That pattern is—",
    choices: ["MLA-style author-page citation", "APA-style author-year as the only legal form worldwide", "Chicago-style footnotes as the only pattern shown", "common knowledge that needs no source"],
    answer: 0, explanation: "MLA: author page. APA typically uses year. NES asks you to recognize a consistent academic pattern, not to litigate every handbook." },

  { id: "EG039", domain: "language", title: "Open vs closed question", difficulty: "easy", tags: ["research"], skillIds: ["research-citation"],
    stem: "Which is the better open-ended research question?",
    choices: [
      "Did it rain in Phoenix on 12 July 2024?",
      "How did the 2024 monsoon alert system affect first-hour evacuation in two ridge neighborhoods, and what limited the data?",
      "Is water wet?",
      "Who is your favorite celebrity?"
    ],
    answer: 1, explanation: "Open, bounded, and researchable. {{opt:EG039-0}} and {{opt:EG039-2}} are closed or trivial; {{opt:EG039-3}} is preference." },

  { id: "EG040", domain: "literature", title: "Haiku vs sonnet", difficulty: "easy", tags: ["poetry"], skillIds: ["poetry-forms"],
    stem: "A three-line image poem with a seasonal cut, historically 5-7-5 in Japanese count, is a—",
    choices: ["haiku (or haiku-influenced form)", "Shakespearean sonnet", "villanelle", "epic invocation"],
    answer: 0, explanation: "14-line sonnet, 19-line villanelle, muse-opening epic are other forms." }
]);
