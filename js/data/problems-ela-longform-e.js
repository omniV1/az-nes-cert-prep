/* Form E — original NES 301 passage clusters with new structures and wider literature.
   Literature excerpts are public domain and were checked against Project Gutenberg texts:
   Frost, Mountain Interval (1916, #29345); McKay, in The Book of American Negro Poetry (1922, #11986);
   Du Bois, The Souls of Black Folk (1903, #408); Eliot, Prufrock and Other Observations (1917, #1459);
   Joyce, Dubliners (1914, #2814); Tagore, Gitanjali (1912, #7164).
   Gutenberg's "--" is printed here as an em dash.
   Design rules for this form: every distractor is a plausible misreading, and several keys are the
   firm reading while an over-hedged option is the trap, so "pick the cautious answer" does not work. */
(function () {
  const P = {
    frost: `Robert Frost, “The Road Not Taken” (Mountain Interval, 1916)

Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`,

    mckay: `Claude McKay, “If We Must Die,” first published in July 1919, during the wave of white mob violence against Black communities later called the Red Summer. It was reprinted in James Weldon Johnson’s anthology The Book of American Negro Poetry (1922).

If we must die—let it not be like hogs
Hunted and penned in an inglorious spot,
While round us bark the mad and hungry dogs,
Making their mock at our accursed lot.
If we must die—oh, let us nobly die,
So that our precious blood may not be shed
In vain; then even the monsters we defy
Shall be constrained to honor us though dead!

Oh, Kinsmen! We must meet the common foe;
Though far outnumbered, let us still be brave,
And for their thousand blows deal one death-blow!
What though before us lies the open grave?
Like men we’ll face the murderous, cowardly pack,
Pressed to the wall, dying, but—fighting back!`,

    dubois: `W. E. B. Du Bois, The Souls of Black Folk (1903), from chapter 1, “Of Our Spiritual Strivings.” The historical terms are Du Bois’s 1903 usage.

After the Egyptian and Indian, the Greek and Roman, the Teuton and Mongolian, the Negro is a sort of seventh son, born with a veil, and gifted with second-sight in this American world,—a world which yields him no true self-consciousness, but only lets him see himself through the revelation of the other world. It is a peculiar sensation, this double-consciousness, this sense of always looking at one’s self through the eyes of others, of measuring one’s soul by the tape of a world that looks on in amused contempt and pity. One ever feels his twoness,—an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body, whose dogged strength alone keeps it from being torn asunder.

The history of the American Negro is the history of this strife,—this longing to attain self-conscious manhood, to merge his double self into a better and truer self. In this merging he wishes neither of the older selves to be lost. He would not Africanize America, for America has too much to teach the world and Africa. He would not bleach his Negro soul in a flood of white Americanism, for he knows that Negro blood has a message for the world. He simply wishes to make it possible for a man to be both a Negro and an American, without being cursed and spit upon by his fellows, without having the doors of Opportunity closed roughly in his face.`,

    prufrock: `T. S. Eliot, the opening of “The Love Song of J. Alfred Prufrock” (Prufrock and Other Observations, 1917)

Let us go then, you and I,
When the evening is spread out against the sky
Like a patient etherized upon a table;
Let us go, through certain half-deserted streets,
The muttering retreats
Of restless nights in one-night cheap hotels
And sawdust restaurants with oyster-shells:
Streets that follow like a tedious argument
Of insidious intent
To lead you to an overwhelming question ...
Oh, do not ask, “What is it?”
Let us go and make our visit.

In the room the women come and go
Talking of Michelangelo.`,

    araby: `James Joyce, the ending of “Araby” (Dubliners, 1914). The narrator, a boy, has promised to bring a gift from the Araby bazaar to a girl he admires. Delayed for hours, he arrives as the bazaar is closing; at the one open stall, the young woman in charge speaks to him briefly and without interest.

I lingered before her stall, though I knew my stay was useless, to make my interest in her wares seem the more real. Then I turned away slowly and walked down the middle of the bazaar. I allowed the two pennies to fall against the sixpence in my pocket. I heard a voice call from one end of the gallery that the light was out. The upper part of the hall was now completely dark.

Gazing up into the darkness I saw myself as a creature driven and derided by vanity; and my eyes burned with anguish and anger.`,

    gitanjali: `Rabindranath Tagore, poem 35 of Gitanjali (1912), Tagore’s own English prose translation of his Bengali poems. In 1913 he became the first non-European to receive the Nobel Prize in Literature. India was then under British rule.

Where the mind is without fear and the head is held high;

Where knowledge is free;

Where the world has not been broken up into fragments by narrow domestic walls;

Where words come out from the depth of truth;

Where tireless striving stretches its arms towards perfection;

Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit;

Where the mind is led forward by thee into ever-widening thought and action—

Into that heaven of freedom, my Father, let my country awake.`,

    absence: `MESA RIDGE UNIFIED — CHRONIC ABSENCE, 2019–2024 (district data brief, 2025)

Year   Chronically absent   Definition in use
2019   9%                   missed 18 or more days
2020   11%                  missed 18 or more days
2021   12%                  missed 18 or more days
2022   21%                  missed 10% or more of the days enrolled
2023   19%                  missed 10% or more of the days enrolled
2024   16%                  missed 10% or more of the days enrolled

Note: In 2022 the state changed the definition. Under the new rule, a student enrolled for 90 days counts as chronically absent after 9 absences; under the old rule the same student needed 18. As a check, staff recalculated 2021 under the new rule: 19%.

At the board meeting, one trustee said, “Absences nearly doubled after 2021.” The superintendent replied, “Since 2022, chronic absence has fallen every year.”`,

    thread: `Email thread, English 9 team

Mon 7:42 a.m. — From: Dana Ruiz (department chair). To: English 9 team. Subject: Midterm essay
Midterm essays are due Friday at 3:00 p.m. in the LMS. Score them with the rubric in the shared folder (v2). Late work loses 10% per day.

Mon 4:15 p.m. — From: Dana Ruiz. To: English 9 team. Subject: RE: Midterm essay — correction
Correction: because of Friday’s assembly schedule, the due date moves to Monday at 8:00 a.m. Everything else in this morning’s message stands.

Tue 9:05 a.m. — From: Lee Park. To: Dana Ruiz; cc: English 9 team.
Thanks. Quick question: are we still on v2, or the v3 rubric the district posted last week? v3 weights evidence at 40% instead of 30%.

Tue 11:30 a.m. — From: Dana Ruiz. Reply all.
Good catch. Use v3 for scoring. Students who already self-assessed with v2 don’t need to redo it.

Tue 11:41 a.m. — From: Lee Park. To: Dana Ruiz only.
Got it. Honestly, the district changing rubrics midweek is ridiculous.`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: P[set], stem, options, explanation
  });

  const items = [
    /* ---- Frost: the famous misreading ---- */
    item("LF213", "literature", "Frost — what the middle stanzas establish", ["poetry"], ["prose-drama-analysis", "poetry-forms"], "frost",
      "Lines 9–12 (“Though as for that the passing there / Had worn them really about the same, / And both that morning equally lay / In leaves no step had trodden black”) mainly establish that—",
      [o("LF213-alike", "the two roads were essentially alike when the speaker chose",
          "“Really about the same” and “equally lay” undo the idea that one road was clearly less used.", true),
       o("LF213-less-used", "the speaker chose the road that far fewer travelers had used",
          "This is the popular misreading the poem sets up and then quietly denies."),
       o("LF213-regret", "the speaker already regrets leaving the first road untraveled",
          "Regret, if any, is a later possibility (“with a sigh”); these lines describe the roads."),
       o("LF213-destination", "both roads would have led to the same destination",
          "The poem never says where the roads lead; it says they looked alike that morning.")],
      "Read what the poem says, not the line everyone quotes. Stanzas 2–3 insist the roads were equally worn, which makes the final stanza’s “less traveled” claim something to examine."),

    item("LF214", "literature", "Frost — the final stanza", ["poetry"], ["prose-drama-analysis"], "frost",
      "In light of the whole poem, the final stanza is best read as—",
      [o("LF214-retelling", "his prediction of how he will later retell the choice, with more meaning than the earlier stanzas support",
          "“I shall be telling this … ages hence” is a future story; the claim that he took the road “less traveled” conflicts with stanzas 2–3.", true),
       o("LF214-sincere", "a sincere record that taking the road fewer people had traveled has already transformed the course of his life",
          "The stanza is in the future tense, and the roads were “really about the same.”"),
       o("LF214-refuses", "the speaker’s refusal to say which road he finally took",
          "He says he “took the other”; the question is how he will later describe it."),
       o("LF214-return", "a promise that he will come back and travel the first road after all",
          "Stanza 3 already says he “doubted if I should ever come back.”")],
      "The irony is structural: a speaker who saw two equal roads expects to tell a tidier, more flattering story later."),

    item("LF215", "literature", "Frost — rhyme scheme", ["poetry"], ["poetry-forms"], "frost",
      "The rhyme scheme of each stanza is—",
      [o("LF215-abaab", "ABAAB",
          "Stanza 1: wood / both / stood / could / undergrowth. The first, third, and fourth lines rhyme; the second and fifth rhyme.", true),
       o("LF215-ababb", "ABABB",
          "Line 4 (could) rhymes with lines 1 and 3, not with line 2 (both)."),
       o("LF215-aabba", "AABBA",
          "Lines 1 and 2 (wood / both) do not rhyme."),
       o("LF215-unrhymed", "unrhymed, in the manner of free verse",
          "Every stanza follows the same five-line rhyme pattern.")],
      "Mark the end words of one stanza and label each new sound with a new lowercase letter: wood (a), both (b), stood (a), could (a), undergrowth (b), which gives abaab."),

    item("LF216", "literature", "Frost — the sigh", ["poetry"], ["prose-drama-analysis"], "frost",
      "“I shall be telling this with a sigh” is most defensibly read as—",
      [o("LF216-open", "open: it could signal regret, nostalgia, or satisfaction, and the poem does not settle which",
          "Nothing in the text fixes the sigh’s meaning, and the uncertainty fits a speaker unsure of his own story.", true),
       o("LF216-relief", "clear relief that he avoided the rougher, more dangerous of the two roads and chose the safer path",
          "The poem says the roads were alike; there is no worse road to have avoided."),
       o("LF216-grief", "grief for a traveling companion lost on the road",
          "No companion appears; the speaker regrets he could not “be one traveler” on both roads."),
       o("LF216-boredom", "boredom with a story he has told too often",
          "Nothing suggests repetition; the telling is still in the future.")],
      "Some questions really do reward ambiguity. The test is whether the text supports one reading over the others. Here it does not."),

    item("LF217", "literature", "Frost — the speaker’s expectation", ["poetry"], ["prose-drama-analysis"], "frost",
      "Which statement about the speaker in stanza 3 is best supported?",
      [o("LF217-wont-return", "He tells himself he will return to the first road but already suspects he will not.",
          "“I kept the first for another day!” followed by “I doubted if I should ever come back.”", true),
       o("LF217-no-indication", "The poem gives no indication whether he expects to return.",
          "Over-hedged: line 15 states his doubt directly."),
       o("LF217-certain-return", "He is certain he will come back another day and take the first road, as his exclamation promises.",
          "He “doubted” it; the exclamation is a wish, not a plan."),
       o("LF217-never-wanted", "He never wanted the first road and dismisses it.",
          "He “kept the first for another day,” which shows he valued it.")],
      "When the text states something outright, the cautious “we can’t tell” option is wrong. Line 15 answers the question."),

    /* ---- McKay: form, tone, context ---- */
    item("LF218", "literature", "McKay — form", ["poetry"], ["poetry-forms"], "mckay",
      "Formally, “If We Must Die” is—",
      [o("LF218-english", "an English (Shakespearean) sonnet: three quatrains and a rhymed closing couplet",
          "Rhymes run abab cdcd efef gg (hogs/dogs, spot/lot … pack/back).", true),
       o("LF218-petrarchan", "a Petrarchan sonnet, because the poem’s sense divides into an octave and a sestet after line 8",
          "The turn at “Oh, Kinsmen!” is Petrarchan in feel, but the rhyme scheme is English, ending in a couplet."),
       o("LF218-ballad", "a ballad in quatrains built for singing",
          "Fourteen lines of iambic pentameter ending in a couplet is a sonnet, not a ballad."),
       o("LF218-free-verse", "free verse with occasional rhyme",
          "The meter and rhyme are regular throughout.")],
      "Identify the sonnet type by rhyme scheme. A turn after line 8 can occur in an English sonnet too, so the couplet decides it."),

    item("LF219", "literature", "McKay — hogs versus nobly", ["poetry"], ["figurative-language"], "mckay",
      "The contrast between dying “like hogs / Hunted and penned” and dying “nobly” chiefly argues that—",
      [o("LF219-dignity", "dignity lies in how one faces death, not in whether one can avoid it",
          "Both lines accept the possibility of death; the difference is resistance versus degradation.", true),
       o("LF219-avoid", "the speakers can escape death entirely if they act bravely enough together",
          "“If we must die” and “the open grave” admit death may come anyway."),
       o("LF219-animals", "the attackers should treat their victims like animals",
          "The simile condemns being treated like penned animals; it does not endorse it."),
       o("LF219-rural", "rural life is more honorable than city life",
          "“Hogs” and “penned” are images of degradation, not a comparison of settings.")],
      "Read paired images as an argument: the simile names the fate refused, and “nobly” names the alternative chosen."),

    item("LF220", "literature", "McKay — the turn", ["poetry"], ["poetry-forms", "figurative-language"], "mckay",
      "At “Oh, Kinsmen! We must meet the common foe,” the poem shifts from—",
      [o("LF220-exhort", "conditional reflection (“If we must die”) to direct, collective exhortation",
          "The speaker addresses his kin and moves from “if” to “must” and commands.", true),
       o("LF220-plea", "defiance to a desperate plea that the attackers show mercy to the outnumbered",
          "He addresses kinsmen, not attackers, and urges fighting back."),
       o("LF220-past", "present-tense action to a memory of past battles",
          "The verbs stay present and future (“we must meet,” “we’ll face”)."),
       o("LF220-private", "public address to private, inward meditation",
          "It moves the other way, toward a rallying address to a group.")],
      "Track the address and the verbs at a turn: who is spoken to, and does the mood shift from conditional to imperative?"),

    item("LF221", "literature", "McKay — tone", ["poetry", "tone"], ["prose-drama-analysis"], "mckay",
      "The tone of the closing couplet is best described as—",
      [o("LF221-defiant", "defiant resolve",
          "“Pressed to the wall, dying, but—fighting back!” ends on resistance, not resignation.", true),
       o("LF221-ambivalent", "ambivalent: the speaker cannot decide whether resistance is worth it",
          "Over-hedged. The speaker shows no doubt; every line argues for resistance."),
       o("LF221-despair", "despairing surrender to an outcome already decided",
          "The dash before “fighting back” turns from dying to resistance."),
       o("LF221-irony", "detached irony toward heroic poetry",
          "The poem uses heroic diction sincerely, as a call to courage.")],
      "When diction and syntax all push one way, the firm reading is correct and the “mixed feelings” option is the trap."),

    item("LF222", "literature", "McKay — context", ["context"], ["literature-context", "literary-periods"], "mckay",
      "In its 1919 context, the poem is best understood as—",
      [o("LF222-self-defense", "a call for collective self-defense against mob violence, voiced in a traditional English form",
          "The headnote supplies the Red Summer context; the sonnet form claims a prestigious tradition for that message.", true),
       o("LF222-recruiting", "a World War I recruiting poem urging young Black men to enlist and fight the war’s common enemy abroad",
          "The war had ended by 1919, and the “foe” is the mob described, not a foreign army."),
       o("LF222-elegy", "a pastoral elegy mourning a single fallen friend",
          "It speaks for a group (“we,” “Kinsmen”) and urges action rather than mourning one person."),
       o("LF222-satire", "a satire mocking heroic poetry’s exaggerations",
          "Nothing undercuts the heroic stance; the poem means it.")],
      "Use the given context to sharpen the reading. McKay’s poem is often treated as an early landmark of the Harlem Renaissance’s assertive voice."),

    /* ---- Du Bois: double-consciousness ---- */
    item("LF223", "reading", "Du Bois — double-consciousness", ["persuasive"], ["informational-texts", "literature-context"], "dubois",
      "As Du Bois uses it, double-consciousness most nearly means—",
      [o("LF223-two-selves", "seeing oneself through the eyes of a contemptuous world while holding two identities at once",
          "He defines it directly: “looking at one’s self through the eyes of others” and feeling “his twoness.”", true),
       o("LF223-second-sight", "a literal gift of second-sight, inherited by a “seventh son,” that lets one foresee the future",
          "“Second-sight” is figurative; the passage defines the term as self-perception through others’ eyes."),
       o("LF223-two-jobs", "the strain of holding two jobs to survive economically",
          "The passage is about identity and perception, not employment."),
       o("LF223-illness", "a diagnosable mental illness",
          "“Peculiar sensation” describes a social and psychological experience, not a diagnosis.")],
      "When a writer defines a coined term in apposition (“this double-consciousness, this sense of…”), use that definition."),

    item("LF224", "reading", "Du Bois — the tape measure", ["persuasive"], ["figurative-language"], "dubois",
      "“Measuring one’s soul by the tape of a world that looks on in amused contempt and pity” is primarily—",
      [o("LF224-metaphor", "a metaphor in which self-worth is judged against a hostile outside standard",
          "The “tape” is a measuring standard held by the contemptuous world.", true),
       o("LF224-simile", "a simile comparing the soul to a tape measure with like or as",
          "There is no like or as; the comparison is implied."),
       o("LF224-literal", "a literal reference to the physical measurements officials once took to classify people",
          "A soul cannot literally be measured; the image is figurative."),
       o("LF224-hyperbole", "a hyperbole that exaggerates how much others pity him",
          "The phrase describes how the judgment works, not an exaggerated amount of pity.")],
      "Identify the device, then its job. Here a measuring tape turns social judgment into a standard imposed from outside."),

    item("LF225", "reading", "Du Bois — two refusals", ["persuasive", "rhetoric"], ["rhetorical-appeals", "persuasive-texts"], "dubois",
      "The parallel sentences “He would not Africanize America … He would not bleach his Negro soul …” work together to—",
      [o("LF225-both", "reject two opposite kinds of erasure so that the goal becomes keeping both identities",
          "The paired refusals set up the next sentence: to be “both a Negro and an American.”", true),
       o("LF225-africa", "argue that Black Americans should return to Africa",
          "He refuses to “Africanize America” and says America has “much to teach.”"),
       o("LF225-assimilate", "argue for full assimilation into “white Americanism”",
          "He explicitly refuses to “bleach his Negro soul.”"),
       o("LF225-concede", "concede that, in the merging he longs for, one of the two older selves must finally give way",
          "“He wishes neither of the older selves to be lost.”")],
      "Parallel negatives often clear the ground for a positive claim. Read the sentence that follows them."),

    item("LF226", "reading", "Du Bois — central claim", ["persuasive"], ["persuasive-texts"], "dubois",
      "Which statement best expresses the second paragraph’s central claim?",
      [o("LF226-both", "A person should be able to be both Negro and American without being cursed or shut out.",
          "This is the stated aim (“He simply wishes to make it possible…”).", true),
       o("LF226-permanent", "The strife between the two selves is permanent, since the two warring ideals can never be reconciled.",
          "He describes a “longing … to merge his double self into a better and truer self.”"),
       o("LF226-economic", "The problem is mainly economic rather than psychological or social.",
          "“Opportunity” is one part; the paragraph is about identity, contempt, and exclusion together."),
       o("LF226-describes-only", "The paragraph only describes feelings and makes no argument.",
          "Over-hedged: it states what the striving “wishes” and why each extreme is rejected.")],
      "A central claim is the sentence the rest supports. Here the paragraph builds to “He simply wishes…”."),

    item("LF227", "reading", "Du Bois — later influence", ["context"], ["literature-context"], "dubois",
      "The idea of double-consciousness is most directly relevant to which concern in later African American literature, including the Harlem Renaissance?",
      [o("LF227-gaze", "how writers represent a divided identity shaped by a hostile outside gaze",
          "Seeing oneself through others’ eyes and holding two identities is exactly that concern.", true),
       o("LF227-pastoral", "how pastoral poetry celebrates rural landscapes",
          "The passage is about identity, not landscape."),
       o("LF227-meter", "how strict meter should replace free verse",
          "Double-consciousness concerns identity, not prosody."),
       o("LF227-dialect-ban", "why writers should avoid dialect entirely, so that their work is judged by a single standard",
          "Nothing in the concept forbids dialect; many writers used dialect to explore identity.")],
      "Connect a concept to later literature by its core idea. Here that idea is divided identity under a contemptuous gaze."),

    /* ---- Prufrock: Modernism ---- */
    item("LF228", "literature", "Prufrock — the etherized evening", ["poetry", "figurative"], ["figurative-language"], "prufrock",
      "Comparing the evening to “a patient etherized upon a table” chiefly—",
      [o("LF228-numb", "trades a conventional romantic evening for a clinical image of numbness",
          "An anesthetized patient is passive and inert, which is far from the expected lovely sky.", true),
       o("LF228-surgeon", "establishes that the speaker works as a surgeon",
          "It is a simile (“like”), not biographical information."),
       o("LF228-beauty", "celebrates the city at dusk, spreading the evening across the sky like a painted canvas",
          "Ether, tables, and patients undercut beauty."),
       o("LF228-excited", "shows the speaker’s excitement about the evening’s visit",
          "The image suggests sedation and helplessness, not eagerness.")],
      "Ask what a surprising comparison replaces. Here a clinical image displaces the romantic sky the title (“Love Song”) leads us to expect."),

    item("LF229", "literature", "Prufrock — the streets", ["poetry", "figurative"], ["figurative-language", "prose-drama-analysis"], "prufrock",
      "The streets that “follow like a tedious argument / Of insidious intent / To lead you to an overwhelming question” suggest that—",
      [o("LF229-mind", "the winding city mirrors a mind circling toward a question it would rather avoid",
          "The simile maps the route onto thought; the next line refuses to name the question.", true),
       o("LF229-literal-argument", "the speaker and a companion are literally quarreling as they walk through the half-deserted streets",
          "The argument is a simile for the streets, not a quarrel in the scene."),
       o("LF229-crime", "the streets are dangerous because of crime",
          "“Insidious” describes the argument’s creeping pull, not street crime."),
       o("LF229-enjoys", "the speaker enjoys debating ideas",
          "“Tedious” and “insidious” show reluctance, not enjoyment.")],
      "Extended similes in Modernist poems often map outer scene onto inner state."),

    item("LF230", "literature", "Prufrock — avoiding the question", ["poetry"], ["prose-drama-analysis"], "prufrock",
      "In “Oh, do not ask, ‘What is it?’ / Let us go and make our visit,” the speaker—",
      [o("LF230-deflects", "deflects the “overwhelming question” instead of naming it",
          "He cuts off the question and changes the subject to the visit.", true),
       o("LF230-neutral", "may or may not know the question; the lines are neutral",
          "Over-hedged: the plea “do not ask” is an active refusal, not neutrality."),
       o("LF230-answers", "answers the question directly in the next line",
          "The next line proposes a visit; the question is never stated."),
       o("LF230-angry", "angrily rejects the companion’s company",
          "He invites the companion along (“Let us go”).")],
      "A refusal to name something is itself evidence. When the speaker says “do not ask,” the avoidance is the point."),

    item("LF231", "literature", "Prufrock — the recurring couplet", ["poetry", "irony"], ["prose-drama-analysis", "sound-devices"], "prufrock",
      "The couplet “In the room the women come and go / Talking of Michelangelo,” which recurs later in the poem, most likely—",
      [o("LF231-chatter", "sets polite social chatter against the unspoken question, in an ironic singsong rhyme",
          "The jingling rhyme and casual talk of a great artist contrast with the speaker’s unspoken crisis.", true),
       o("LF231-praise", "sincerely praises the women’s deep knowledge of Renaissance art, which the speaker admires and envies",
          "The tone is ironic; the talk is drawing-room small talk."),
       o("LF231-museum", "establishes that the visit takes place in an art museum in Florence",
          "“The room” is a social setting; Michelangelo is the topic of conversation."),
       o("LF231-stage", "functions as a stage direction for a play",
          "It is part of a poem, a dramatic monologue, not a script.")],
      "Read tone through sound and context. A light, chiming couplet placed beside an “overwhelming question” signals irony."),

    item("LF232", "literature", "Prufrock — movement", ["poetry", "periods"], ["literary-periods"], "prufrock",
      "Taken together (urban squalor, an unheroic speaker, abrupt shifts, ironic juxtaposition), these features best fit—",
      [o("LF232-modernism", "Modernism",
          "Fragmentation, irony, and a paralyzed modern consciousness in a city are Modernist signatures.", true),
       o("LF232-realism", "Realism, because the poem describes cheap hotels and restaurants",
          "The details are real, but the method (abrupt shifts, inner monologue, irony) is Modernist."),
       o("LF232-romanticism", "Romanticism, because the speaker reflects alone on his feelings",
          "There is no restorative nature and no confident self; the self is fractured."),
       o("LF232-harlem", "the Harlem Renaissance, because it was written in the same era",
          "Same broad era, but a different project: Eliot’s poem is not part of Black artistic self-definition.")],
      "Period questions turn on method, not only date or subject."),

    /* ---- Araby: epiphany ---- */
    item("LF233", "literature", "Araby — the final sentence", ["narrative"], ["narrative-elements"], "araby",
      "The boy’s sudden self-recognition in the final sentence is best described as—",
      [o("LF233-epiphany", "an epiphany: a sudden moment of insight",
          "He suddenly sees himself clearly; Joyce’s stories often end on such moments.", true),
       o("LF233-denouement", "a denouement that resolves the story’s external conflict",
          "Nothing external is resolved; the change happens inside him."),
       o("LF233-dramatic-irony", "dramatic irony, because the reader knows more than the boy",
          "Here the boy himself reaches the realization."),
       o("LF233-flashback", "a flashback to an earlier scene",
          "The sentence continues the present moment.")],
      "Name the moment by what changes. Here nothing happens outwardly, but the boy’s understanding shifts."),

    item("LF234", "literature", "Araby — the light goes out", ["narrative", "symbol"], ["narrative-elements", "figurative-language"], "araby",
      "The details that “the light was out” and “the upper part of the hall was now completely dark” chiefly—",
      [o("LF234-illusion", "mirror the extinguishing of the boy’s romantic illusion",
          "Outer darkness arrives just before his inner recognition (“Gazing up into the darkness I saw myself…”).", true),
       o("LF234-danger", "establish that the bazaar is dangerous at night",
          "No threat appears; the darkness matters for what it reveals to him."),
       o("LF234-foreshadow", "foreshadow a later plot event in the story",
          "The story ends here; the darkness pays off immediately, inside him."),
       o("LF234-fear", "show the boy’s fear of the dark",
          "He gazes up into it; his emotions are anguish and anger at himself.")],
      "Setting details at a story’s climax often externalize an inner change."),

    item("LF235", "literature", "Araby — driven and derided", ["narrative"], ["narrative-elements"], "araby",
      "In “I saw myself as a creature driven and derided by vanity,” the boy—",
      [o("LF235-self-judgment", "judges his quest as self-centered fantasy and mocks himself for it",
          "Vanity is both what drove him and what derides him; the judgment is his own.", true),
       o("LF235-laughed-at", "reports that people at the bazaar laughed at him",
          "“Derided by vanity”: the mockery comes from his own vanity, not a crowd."),
       o("LF235-next-time", "resolves to buy a better gift next time",
          "There is no plan, only recognition, anguish, and anger."),
       o("LF235-blames-her", "blames the young woman at the stall for his failure",
          "He sees himself as the creature driven by vanity; the judgment turns inward.")],
      "Pay attention to the agent in a passive phrase. Here the boy is “derided by vanity,” not by other people."),

    item("LF236", "literature", "Araby — lingering at the stall", ["narrative"], ["narrative-elements"], "araby",
      "The boy lingers at the stall “to make my interest in her wares seem the more real” because he—",
      [o("LF236-save-face", "wants to save face, though he knows he will buy nothing",
          "“Though I knew my stay was useless”: the lingering is for appearances.", true),
       o("LF236-bargain", "is waiting for the prices to drop",
          "Nothing suggests bargaining; he has already given up."),
       o("LF236-interested", "is genuinely deciding which item is best",
          "He calls his stay “useless” and wants his interest to “seem” real."),
       o("LF236-flirt", "hopes the young woman will invite him to stay",
          "She has spoken to him only briefly and without interest, and he acts for appearance’s sake.")],
      "“Seem” signals a gap between appearance and reality; the boy is performing interest."),

    item("LF237", "literature", "Araby — how the story ends", ["narrative", "periods"], ["literary-periods", "narrative-elements"], "araby",
      "Ending on the boy’s inner realization rather than on what he does next is most typical of—",
      [o("LF237-modernist", "Modernist short fiction that places the climax in consciousness",
          "Joyce’s Dubliners stories often end on an inner moment of recognition instead of plot resolution.", true),
       o("LF237-fable", "a fable that closes by stating its moral",
          "No moral is stated; the meaning stays inside the boy’s perception."),
       o("LF237-realist-novel", "a Realist novel’s ending that ties up every plot line",
          "The story leaves the external situation unresolved."),
       o("LF237-romantic", "a Romantic lyric that restores the self through nature",
          "The self is shaken, not restored, and the setting is a dark hall.")],
      "Endings are evidence of period method. Inner recognition with an open outer situation points to Modernist fiction."),

    /* ---- Gitanjali: world literature ---- */
    item("LF238", "literature", "Gitanjali — structure", ["world-lit", "poetry"], ["world-literature", "poetry-forms"], "gitanjali",
      "The repeated “Where …” clauses build toward—",
      [o("LF238-prayer", "a single closing prayer that names the conditions for the country’s awakening",
          "Each clause describes the hoped-for place; the last line asks that the country awake into it.", true),
       o("LF238-places", "a list of real places the speaker has visited",
          "The clauses describe ideal conditions, not locations."),
       o("LF238-couplets", "a sequence of rhymed couplets",
          "The translation is prose-poetry without rhyme."),
       o("LF238-unrelated", "a series of separate wishes that are never gathered into a single conclusion or request",
          "The final line gathers all the clauses (“Into that heaven of freedom…”).")],
      "Anaphora (repeated openings) can suspend the main clause until the end. Here the whole poem is one long sentence."),

    item("LF239", "literature", "Gitanjali — narrow domestic walls", ["world-lit", "figurative"], ["figurative-language", "world-literature"], "gitanjali",
      "“Where the world has not been broken up into fragments by narrow domestic walls” most nearly refers to—",
      [o("LF239-divisions", "divisions that split people into closed, mutually suspicious groups",
          "“Fragments” and “narrow” point to social division, not literal houses.", true),
       o("LF239-houses", "literal houses that the poet wishes to tear down",
          "The image is figurative; the poem is about minds and society."),
       o("LF239-family", "the comfort of family life, which the poet praises",
          "The walls are “narrow” and break the world “into fragments,” which is a criticism."),
       o("LF239-borders", "national borders, which the poet hopes will be made stronger to protect India",
          "The hope is for a world not broken into fragments, the opposite of stronger walls.")],
      "Test a metaphor against its modifiers. “Narrow” and “fragments” make these walls a problem, not a comfort."),

    item("LF240", "literature", "Gitanjali — stream and desert", ["world-lit", "figurative"], ["figurative-language"], "gitanjali",
      "“The clear stream of reason has not lost its way into the dreary desert sand of dead habit” is best described as—",
      [o("LF240-metaphor", "an extended metaphor contrasting living thought with unexamined custom",
          "A flowing stream (reason) dies when it runs into the desert (habit).", true),
       o("LF240-literal", "a literal description of a river in the Bengali countryside",
          "“Reason” and “habit” mark the image as figurative."),
       o("LF240-simile", "a simile that compares reason to a stream using like or as",
          "There is no like or as; reason is called a stream."),
       o("LF240-army", "personification of the desert as an invading army",
          "The desert is a place where the stream gets lost, not an attacker.")],
      "Name the device precisely: an implied comparison sustained across a phrase is an extended metaphor."),

    item("LF241", "literature", "Gitanjali — prayer and nation", ["world-lit", "context"], ["world-literature", "literature-context"], "gitanjali",
      "In the closing line, “Into that heaven of freedom, my Father, let my country awake,” the speaker—",
      [o("LF241-both", "addresses God in prayer while voicing a hope for the nation’s awakening",
          "“My Father” is a divine address; “my country” gives the prayer a public, political dimension, especially under colonial rule.", true),
       o("LF241-private", "offers purely private devotion, a prayer for the speaker’s own soul with no public dimension",
          "Over-hedged. “Let my country awake” is explicitly collective."),
       o("LF241-parent", "speaks to his biological father about a family decision",
          "The address follows “led forward by thee”; it is a prayer."),
       o("LF241-ironic", "ironically rejects prayer as useless",
          "The tone is earnest supplication.")],
      "A poem can work on two levels at once. Here a devotional address carries a national hope."),

    item("LF242", "literature", "Gitanjali — self-translation", ["world-lit"], ["world-literature"], "gitanjali",
      "Because Tagore translated these poems into English himself, a reader comparing the English with the Bengali should expect—",
      [o("LF242-choices", "the English to reflect the poet’s own choices as a translator, not a word-for-word match",
          "Self-translation is still translation: form (here, prose) and wording can change.", true),
       o("LF242-original", "the English to be the original version and the Bengali a later translation made for local readers",
          "The headnote says the English translates his Bengali poems."),
       o("LF242-identical", "identical word order and imagery in both languages",
          "No translation keeps identical word order across languages."),
       o("LF242-anonymous", "the English to be an anonymous translation the poet never approved",
          "The headnote names Tagore as translator.")],
      "World literature in translation is shaped by the translator, even when translator and author are the same person."),

    /* ---- Chronic absence: a definition changes mid-series ---- */
    item("LF243", "reading", "Absence data — best-supported claim", ["informational", "graphics"], ["text-graphics", "informational-texts"], "absence",
      "Which claim is best supported by the table and note?",
      [o("LF243-fell", "Under one consistent definition, chronic absence fell from 21% to 16% from 2022 to 2024.",
          "2022–2024 all use the new rule, so that comparison is valid.", true),
       o("LF243-no-trend", "No trend can be stated for any span of years, because the state changed how absence is defined.",
          "Over-hedged. The change blocks comparisons across 2021–2022, not comparisons within one definition."),
       o("LF243-doubled", "Chronic absence nearly doubled between 2021 and 2022.",
          "This compares 12% (old rule) with 21% (new rule)."),
       o("LF243-2019-best", "Students attended best in 2019 under either definition.",
          "2019 was never recalculated under the new rule, so “either definition” is unsupported.")],
      "When a measure changes, compare only within one definition, or use a recalculated bridge year."),

    item("LF244", "reading", "Absence data — the trustee’s claim", ["informational", "evidence"], ["evidence-credibility", "text-graphics"], "absence",
      "The trustee’s statement that absences “nearly doubled after 2021” is flawed mainly because it—",
      [o("LF244-definition", "compares 12% under the old rule with 21% under the new one; under one rule the change is 19% to 21%",
          "The recalculated 2021 figure shows most of the “doubling” came from the definition change.", true),
       o("LF244-rounding", "rounds 21% down when it should round up",
          "The issue is comparability, not rounding."),
       o("LF244-years", "uses 2019 as the starting year",
          "The trustee refers to “after 2021,” not 2019."),
       o("LF244-true", "it is accurate, because 21% is close to double 12% and both figures come from the same district",
          "Arithmetically close, but it compares two different measures.")],
      "A real-looking jump can be an artifact of changed definitions. Check what was measured, not just the numbers."),

    item("LF245", "reading", "Absence data — the bridge year", ["informational", "graphics"], ["text-graphics"], "absence",
      "The recalculated 2021 figure (19%) primarily functions to—",
      [o("LF245-bridge", "allow a like-for-like comparison across the definition change",
          "It puts 2021 on the new rule, so 2021→2022 can be compared fairly.", true),
       o("LF245-replace", "replace the 2019–2021 figures, which are now incorrect",
          "Those figures are correct under the old rule; the recalculation is a check, not a correction."),
       o("LF245-prove-worse", "prove that attendance was worse in 2021 than the district first reported",
          "Attendance did not change; only the counting rule did."),
       o("LF245-new-policy", "show that the district changed its attendance policy in 2021",
          "The state changed the definition in 2022; the recalculation is an analytic check.")],
      "A bridge value restates one period under the other definition so the series can be compared."),

    item("LF246", "reading", "Absence data — who the new rule affects", ["informational"], ["informational-texts"], "absence",
      "The note’s example (a student enrolled 90 days now needs 9 absences instead of 18) implies that the new rule most raised the count for students who—",
      [o("LF246-part-year", "were enrolled for only part of the year",
          "The threshold now scales with days enrolled, so short-enrollment students cross it sooner.", true),
       o("LF246-full-year", "were enrolled for the full year and missed exactly 17 days",
          "For a typical 180-day year, 10% is 18 days, so full-year students face about the same bar."),
       o("LF246-perfect", "had perfect attendance",
          "A student with no absences is never chronically absent under either rule."),
       o("LF246-all-equal", "were affected equally, regardless of enrollment",
          "The example shows the effect depends on days enrolled.")],
      "Work the example through: a percentage threshold changes most for students whose denominator is smallest."),

    item("LF247", "reading", "Absence data — the superintendent’s claim", ["informational", "evidence"], ["evidence-credibility"], "absence",
      "The superintendent’s claim that “since 2022, chronic absence has fallen every year” is—",
      [o("LF247-accurate", "accurate as stated, because 2022–2024 use the same definition and the rate fell each year",
          "21% → 19% → 16%, all under the new rule.", true),
       o("LF247-misleading", "misleading, because the state changed the definition of chronic absence in 2022, so the years cannot be compared",
          "Over-cautious. The change happened before this series begins, so it does not affect 2022–2024."),
       o("LF247-false", "false, because 2023 was higher than 2024",
          "That fits the claim: 19% then 16% is a decline."),
       o("LF247-untestable", "untestable without student-level records",
          "The table gives yearly rates under one definition, which is enough to check this claim.")],
      "Skepticism must be specific. A definition change discredits comparisons across it, not every claim made afterward."),

    /* ---- Email thread: instructions that supersede ---- */
    item("LF248", "reading", "Email thread — on time?", ["technical"], ["technical-texts"], "thread",
      "A student submits the essay in the LMS on Monday at 7:50 a.m. The submission is—",
      [o("LF248-on-time", "on time, because the 4:15 p.m. correction moved the deadline to Monday at 8:00 a.m.",
          "The later message supersedes the original Friday deadline.", true),
       o("LF248-late-friday", "late, because the original message set the deadline at Friday 3:00 p.m. and that message was never withdrawn",
          "The correction replaced that deadline."),
       o("LF248-late-assembly", "late, because the assembly schedule cancelled LMS submissions",
          "The assembly moved the deadline; it did not cancel submissions."),
       o("LF248-unclear", "impossible to judge, because two deadlines were sent",
          "Over-hedged. The second message labels itself a correction and says which parts change.")],
      "In functional texts, a later message marked as a correction controls whatever it changes."),

    item("LF249", "reading", "Email thread — which rubric", ["technical"], ["technical-texts"], "thread",
      "Which statement about the rubric is accurate?",
      [o("LF249-v3", "Teachers score with v3; students who self-assessed with v2 need not redo it.",
          "Tuesday 11:30 reply-all settles both points.", true),
       o("LF249-v2-stands", "Teachers score with v2, because Monday’s correction said everything else stands.",
          "That was true on Monday, but Tuesday’s reply-all changed the scoring rubric."),
       o("LF249-redo", "Students must redo their self-assessments with v3.",
          "The chair says they don’t need to."),
       o("LF249-teacher-choice", "Each teacher may choose v2 or v3.",
          "The chair gives a single instruction: use v3 for scoring.")],
      "Track each instruction to the latest message that addresses it. A later message can override an earlier “everything else stands.”"),

    item("LF250", "reading", "Email thread — late penalty", ["technical"], ["technical-texts"], "thread",
      "A student submits on Monday at noon. Under the thread’s instructions, the essay—",
      [o("LF250-ten", "loses 10%, because it is late and the late-work rule was left in place",
          "Due Monday 8:00 a.m.; noon is within the first late day; “Everything else … stands.”", true),
       o("LF250-none", "loses nothing, because the correction cancelled the late penalty",
          "The correction changed only the due date."),
       o("LF250-twenty", "loses 20%, because the original Friday deadline counts as well",
          "The Friday deadline was replaced, not added to."),
       o("LF250-reject", "cannot be accepted, because late work is not allowed",
          "Late work is accepted with a 10%-per-day penalty.")],
      "Apply each rule from the latest message that governs it: deadline from the correction, penalty from the original."),

    item("LF251", "reading", "Email thread — audience and register", ["technical", "audience"], ["style-audience"], "thread",
      "Lee Park’s 11:41 a.m. message differs from the 9:05 a.m. message mainly in—",
      [o("LF251-register", "audience and register: a private, informal complaint rather than a professional question to the team",
          "It is sent to Dana only and uses casual, evaluative language (“ridiculous”).", true),
       o("LF251-claim", "making a factual claim about the district’s rubric change that the earlier 9:05 message did not contain",
          "“Ridiculous” is an opinion; the factual content (v3 weighting) was in the 9:05 message."),
       o("LF251-reply-all", "being sent to the whole team as a reply-all",
          "It goes to Dana Ruiz only."),
       o("LF251-same", "nothing important; both are professional questions",
          "The 11:41 message asks nothing and changes tone.")],
      "Audience (To/cc lines) and diction together define register."),

    item("LF252", "reading", "Email thread — accurate summary", ["technical"], ["technical-texts", "informational-texts"], "thread",
      "Which summary of the current instructions is accurate?",
      [o("LF252-summary", "Due Monday 8:00 a.m. in the LMS; score with v3; 10% off per late day; v2 self-assessments need not be redone.",
          "Each element comes from the latest message that governs it.", true),
       o("LF252-friday", "Due Friday 3:00 p.m.; score with v2; late work loses 10% per day.",
          "This is Monday morning’s message before the two later changes."),
       o("LF252-no-penalty", "Due Monday 8:00 a.m. in the LMS; score with v3; the late penalty was dropped; no self-assessment redo is needed.",
          "Nothing dropped the late penalty."),
       o("LF252-v2-score", "Due Monday 8:00 a.m.; score with v2; students redo self-assessments with v3.",
          "Both rubric details are reversed.")],
      "A good summary of evolving instructions keeps every element current and invents nothing.")
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  items.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items);
})();
