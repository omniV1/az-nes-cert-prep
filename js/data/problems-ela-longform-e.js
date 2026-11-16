/* Form E — original NES 301 passage clusters with new structures and wider literature.
   Literature excerpts are public domain and were checked against Project Gutenberg texts:
   Frost, Mountain Interval (1916, #29345); McKay, in The Book of American Negro Poetry (1922, #11986);
   Du Bois, The Souls of Black Folk (1903, #408); Eliot, Prufrock and Other Observations (1917, #1459);
   Joyce, Dubliners (1914, #2814); Tagore, Gitanjali (1912, #7164).
   Gutenberg's "--" is printed here as an em dash.
   Design rules for this form (rebuilt; the first version, LF213–LF252, is retired):
   - literature questions ask what specific lines say, with wrong answers drawn from other
     lines of the same excerpt, and avoid questions that knowledge of the author or period
     would settle;
   - the two original passages (a fictional district data brief and a fictional email thread)
     depart from the usual case, and the usual answer is offered as a wrong option;
   - all four options of a question make the same kind of statement, and no stem or option
     answers another question in its cluster. */
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

    absence: `MESA RIDGE UNIFIED — CHRONIC ABSENCE, 2019–2024 (data brief from a fictional district, 2025)

Year    Students enrolled   Chronically absent
2019    5,800               14%
2020*   5,900               9%
2021    6,100               18%
2022    6,300               15%
2023    6,200               15%
2024    6,000               13%

Note: Until 2022 the state counted a student as chronically absent after 18 or more missed days. Since 2022 it counts a student who misses 8% or more of the days that student was enrolled. So that the years can be compared, staff recalculated the earlier years, and every rate in this table uses the current definition except one. The daily records for 2020 were lost in a server failure, so the 2020 rate (*) is the figure reported that year under the earlier definition. Under the earlier definition, the 2021 rate was 12%.

At the board meeting, one trustee said, “Chronic absence doubled from 2020 to 2021.” The superintendent replied, “Chronic absence has fallen every year since 2021.”`,

    thread: `Email thread, English 9 team (fictional)

Mon 7:42 a.m. — From: Dana Ruiz (department chair). To: English 9 team. Subject: Midterm essay
Midterm essays are due Friday at 3:00 p.m. in the LMS. Score them with the rubric in the shared folder (v2). A late essay loses 10%, once, however late it comes in. One ground rule: these instructions change only when I send the change to the whole team.

Mon 4:15 p.m. — From: Dana Ruiz. To: English 9 team.
Friday’s assembly has moved to the afternoon, so the due date moves up to Thursday at 3:00 p.m. Everything else in this morning’s message stands.

Tue 9:05 a.m. — From: Lee Park. To: English 9 team.
The district posted a v3 rubric last week. Someone at the district office told me we are supposed to score with it starting now.

Tue 11:30 a.m. — From: Dana Ruiz. To: Lee Park only.
Yes, go ahead and use v3.

Tue 2:10 p.m. — From: Dana Ruiz. To: English 9 team.
The assembly is back to Friday morning. Please disregard what I sent yesterday afternoon.`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: P[set], stem, options, explanation
  });

  const items = [
    /* ---- Frost ---- */
    item("LF313", "literature", "Frost — the sigh", ["poetry"], ["prose-drama-analysis"], "frost",
      "The telling “with a sigh” is placed—",
      [o("LF313-morning", "on the morning of the choice",
          "The morning is when he chooses. The telling is set “ages and ages hence.”"),
       o("LF313-day", "on the day he comes back",
          "He doubts he will ever come back, and no return is described."),
       o("LF313-future", "far in the speaker’s future",
          "“I shall be telling this with a sigh / Somewhere ages and ages hence”: the telling has not happened yet.", true),
       o("LF313-past", "far in the speaker’s past",
          "“I shall be telling” is future tense. The choice is past; the telling is still to come.")],
      "Watch the tense. The last stanza predicts a story the speaker will tell later; it does not report one already told."),

    item("LF314", "literature", "Frost — both roads that morning", ["poetry"], ["prose-drama-analysis"], "frost",
      "What does the speaker say lay on both roads that morning?",
      [o("LF314-grass", "grass that wanted wear",
          "Grass is the reason he gives for one road’s “better claim,” in the second stanza."),
       o("LF314-leaves", "leaves no step had blackened",
          "“And both that morning equally lay / In leaves no step had trodden black.”", true),
       o("LF314-undergrowth", "undergrowth where the road bent",
          "The undergrowth is where the first road bends out of sight, in the first stanza."),
       o("LF314-wear", "the wear of earlier travelers",
          "The passing “had worn them really about the same,” but what lay on both that morning was untrodden leaves.")],
      "The question asks about the third stanza’s opening lines. The other details belong to other stanzas."),

    item("LF315", "literature", "Frost — rhyme scheme", ["poetry"], ["poetry-forms", "sound-devices"], "frost",
      "The rhyme scheme of each stanza is—",
      [o("LF315-abaab", "ABAAB",
          "wood / both / stood / could / undergrowth: lines 1, 3, and 4 rhyme, and lines 2 and 5 rhyme.", true),
       o("LF315-ababb", "ABABB",
          "This would make line 4 rhyme with line 2. “Could” rhymes with “wood” and “stood.”"),
       o("LF315-aabba", "AABBA",
          "This would make the first two lines rhyme. “Wood” and “both” do not."),
       o("LF315-abbab", "ABBAB",
          "This would make line 3 rhyme with line 2. “Stood” rhymes with “wood.”")],
      "Letter the end words of one stanza and check the pattern against a second stanza."),

    item("LF316", "literature", "Frost — the better claim", ["poetry"], ["prose-drama-analysis"], "frost",
      "Which road does the speaker say had “perhaps the better claim,” and on what ground?",
      [o("LF316-took-bend", "the road he took, for the way it bent in the undergrowth",
          "The road that bent in the undergrowth is the one he looked down first and did not take."),
       o("LF316-left-grass", "the road he left, for being grassy and wanting wear",
          "The ground is right, but the claim belongs to “the other,” the road he took."),
       o("LF316-left-bend", "the road he left, for the way it bent in the undergrowth",
          "The bend is only how far he could see down the first road. He gives it no claim."),
       o("LF316-took-grass", "the road he took, for being grassy and wanting wear",
          "“Then took the other, as just as fair, / And having perhaps the better claim, / Because it was grassy and wanted wear.”", true)],
      "Two things have to be matched: which road, and which reason. The second stanza gives both."),

    item("LF317", "literature", "Frost — the line at odds", ["poetry"], ["prose-drama-analysis"], "frost",
      "Which line is at odds with what the speaker reported earlier in the poem?",
      [o("LF317-less", "“I took the one less traveled by,”",
          "Earlier he said the passing “had worn them really about the same” and that both “equally lay” in untrodden leaves.", true),
       o("LF317-diverged", "“Two roads diverged in a wood, and I—”",
          "This repeats the poem’s first line with one word dropped."),
       o("LF317-kept", "“Oh, I kept the first for another day!”",
          "He did leave the first road. The next two lines add that he doubted he would be back."),
       o("LF317-doubted", "“I doubted if I should ever come back.”",
          "This follows from “way leads on to way” and contradicts no earlier line.")],
      "The last stanza is a story the speaker expects to tell. Compare its claim with his own account of the roads in the middle stanzas."),

    /* ---- McKay ---- */
    item("LF318", "literature", "McKay — the attackers", ["poetry"], ["figurative-language"], "mckay",
      "The poem pictures the attackers as—",
      [o("LF318-hogs", "hogs that are hunted and penned",
          "The hogs are what the speakers refuse to die like. They stand for the victims, not the attackers."),
       o("LF318-dogs", "dogs that are mad and hungry",
          "“While round us bark the mad and hungry dogs”; later they are “the murderous, cowardly pack.”", true),
       o("LF318-kinsmen", "kinsmen who are far outnumbered",
          "“Kinsmen” is the speaker’s name for his own side, which is “far outnumbered.”"),
       o("LF318-men", "men who are pressed to the wall",
          "“Like men we’ll face” the pack: the men pressed to the wall are the speakers.")],
      "Sort each image by side. Three of these describe the speakers."),

    item("LF319", "literature", "McKay — what the monsters will do", ["poetry"], ["prose-drama-analysis"], "mckay",
      "If the speakers die nobly, what does the poem say “the monsters” will be made to do?",
      [o("LF319-mock", "mock them in their defeat",
          "Mocking is what the dogs do now, in line 4. A noble death is meant to end it."),
       o("LF319-spare", "spare them at the wall",
          "The poem expects death: “dying, but—fighting back!”"),
       o("LF319-honor", "honor them though dead",
          "“Then even the monsters we defy / Shall be constrained to honor us though dead!”", true),
       o("LF319-fear", "fear them in the fight",
          "The poem calls the pack cowardly but does not say what the monsters will feel during the fight.")],
      "The first eight lines argue for one result of dying well. Find the verb that follows “constrained to.”"),

    item("LF320", "literature", "McKay — the turn", ["poetry"], ["poetry-forms"], "mckay",
      "In which line does the speaker first call on his listeners by name?",
      [o("LF320-1", "line 1",
          "Line 1 says “we” but names no one."),
       o("LF320-5", "line 5",
          "Line 5 repeats “If we must die” and still names no one."),
       o("LF320-9", "line 9",
          "“Oh, Kinsmen! We must meet the common foe” opens the poem’s last six lines.", true),
       o("LF320-13", "line 13",
          "Line 13 begins the closing couplet, four lines after the address to “Kinsmen.”")],
      "The address marks the poem’s turn from “if we must die” to “we must meet.”"),

    item("LF321", "literature", "McKay — the exchange of blows", ["poetry"], ["prose-drama-analysis"], "mckay",
      "What exchange of blows does the speaker call for?",
      [o("LF321-thousand-one", "a thousand blows for their one",
          "This reverses the numbers. The speakers are the ones outnumbered."),
       o("LF321-blow", "one blow for each blow of theirs",
          "The poem does not ask for an even exchange."),
       o("LF321-none", "no blow, but a death faced bravely",
          "The poem ends “fighting back,” and line 11 calls for a death-blow."),
       o("LF321-one-thousand", "one death-blow for their thousand",
          "“And for their thousand blows deal one death-blow!”", true)],
      "Line 11 sets the two numbers side by side. Check which side has which."),

    item("LF322", "literature", "McKay — the couplet", ["poetry"], ["poetry-forms", "sound-devices"], "mckay",
      "Which two lines are the poem’s only pair of adjacent lines that rhyme with each other?",
      [o("LF322-1-2", "lines 1 and 2",
          "“Hogs” and “spot” do not rhyme. Line 1 rhymes with line 3."),
       o("LF322-7-8", "lines 7 and 8",
          "“Defy” rhymes with line 5 and “dead” with line 6, not with each other."),
       o("LF322-9-10", "lines 9 and 10",
          "“Foe” and “brave” do not rhyme. Line 9 rhymes with line 11."),
       o("LF322-13-14", "lines 13 and 14",
          "“Pack” and “back” close the poem as a couplet after twelve lines of alternating rhyme.", true)],
      "Three groups of alternating rhyme and a final rhymed pair are the pattern of the English sonnet."),

    /* ---- Du Bois ---- */
    item("LF323", "reading", "Du Bois — what holds the body together", ["persuasive"], ["informational-texts", "figurative-language"], "dubois",
      "What does the passage say keeps the “dark body” from being torn asunder?",
      [o("LF323-strength", "its dogged strength",
          "“Two warring ideals in one dark body, whose dogged strength alone keeps it from being torn asunder.”", true),
       o("LF323-sight", "its gift of second-sight",
          "Second-sight is named in the first sentence as a gift, not as what holds the body together."),
       o("LF323-message", "its message for the world",
          "The message is the reason given later for not bleaching the Negro soul."),
       o("LF323-veil", "the veil it was born with",
          "The veil belongs to the image of the seventh son in the first sentence.")],
      "Each option is a phrase from the passage. Only one is attached to “torn asunder.”"),

    item("LF324", "reading", "Du Bois — the reason given", ["persuasive", "rhetoric"], ["rhetorical-appeals", "persuasive-texts"], "dubois",
      "What reason does the passage give for not wishing to “Africanize America”?",
      [o("LF324-blood", "Negro blood has a message for the world.",
          "That is the reason given in the next sentence, for not bleaching the Negro soul."),
       o("LF324-doors", "The doors of Opportunity would be closed.",
          "The doors appear in the final sentence, as a harm he wishes to be free of."),
       o("LF324-teach", "America has too much to teach the world and Africa.",
          "“He would not Africanize America, for America has too much to teach the world and Africa.”", true),
       o("LF324-selves", "The two older selves would be torn asunder.",
          "“Torn asunder” describes the body in the first paragraph. It is not offered as a reason here.")],
      "The two “He would not” sentences are built alike, and each carries its own reason after “for.” Match the reason to its sentence."),

    item("LF325", "reading", "Du Bois — the merging", ["persuasive"], ["persuasive-texts"], "dubois",
      "In the merging the passage describes, what happens to the two older selves?",
      [o("LF325-new", "Both give way to a new self.",
          "The “better and truer self” is a merging in which, he says, neither older self is lost."),
       o("LF325-both", "Both are kept.",
          "“In this merging he wishes neither of the older selves to be lost.”", true),
       o("LF325-american", "The American self is kept.",
          "He would not bleach his Negro soul “in a flood of white Americanism.”"),
       o("LF325-negro", "The Negro self is kept.",
          "He “would not Africanize America”; the American self is not given up.")],
      "“A better and truer self” sounds like a replacement. Read the sentence that follows it."),

    item("LF326", "reading", "Du Bois — what the world yields", ["persuasive"], ["informational-texts"], "dubois",
      "According to the first paragraph, what does “this American world” yield him?",
      [o("LF326-truer", "a better and truer self",
          "That is what he longs to attain in the second paragraph, not what the world yields."),
       o("LF326-sight", "the gift of second-sight at birth",
          "He is “gifted with second-sight in this American world”; the gift is his by birth, like the veil."),
       o("LF326-pity", "amused contempt and pity",
          "That is how the world looks on. The sentence about what it yields comes earlier."),
       o("LF326-none", "no true self-consciousness",
          "“A world which yields him no true self-consciousness, but only lets him see himself through the revelation of the other world.”", true)],
      "Find the verb “yields” and read its object."),

    item("LF327", "reading", "Du Bois — where the wish is stated", ["persuasive"], ["persuasive-texts", "informational-texts"], "dubois",
      "Which sentence of the second paragraph states what he “simply wishes”?",
      [o("LF327-2", "the second",
          "The second sentence says neither older self should be lost."),
       o("LF327-3", "the third",
          "The third sentence is “He would not Africanize America.”"),
       o("LF327-4", "the fourth",
          "The fourth sentence is “He would not bleach his Negro soul.”"),
       o("LF327-5", "the fifth",
          "“He simply wishes to make it possible for a man to be both a Negro and an American” is the paragraph’s last sentence.", true)],
      "The paragraph moves from the history, to two refusals, to the wish. The claim comes last."),

    /* ---- Eliot ---- */
    item("LF328", "literature", "Prufrock — what is etherized", ["poetry", "figurative"], ["figurative-language"], "prufrock",
      "What does the poem compare to “a patient etherized upon a table”?",
      [o("LF328-speaker", "the speaker",
          "The speaker makes the comparison; he is not its subject."),
       o("LF328-evening", "the evening",
          "“When the evening is spread out against the sky / Like a patient etherized upon a table.”", true),
       o("LF328-streets", "the streets",
          "The streets get their own comparison five lines later."),
       o("LF328-listener", "the listener",
          "The “you” is invited along and is not described.")],
      "A simile has two halves. Read back from “like” to find what is being described."),

    item("LF329", "literature", "Prufrock — the streets", ["poetry", "figurative"], ["figurative-language", "prose-drama-analysis"], "prufrock",
      "The streets are said to follow like—",
      [o("LF329-question", "an overwhelming question",
          "The question is where the streets lead, not what they are compared to."),
       o("LF329-night", "a restless night",
          "Restless nights are spent in the cheap hotels along the streets."),
       o("LF329-retreat", "a muttering retreat",
          "“The muttering retreats” are the streets themselves, named before the comparison."),
       o("LF329-argument", "a tedious argument",
          "“Streets that follow like a tedious argument / Of insidious intent.”", true)],
      "Keep three things apart: what the streets are called, what they are compared to, and where they lead."),

    item("LF330", "literature", "Prufrock — the restaurants", ["poetry"], ["prose-drama-analysis"], "prufrock",
      "Which detail does the poem attach to the restaurants?",
      [o("LF330-sawdust", "sawdust and oyster-shells",
          "“And sawdust restaurants with oyster-shells.”", true),
       o("LF330-cheap", "one-night cheapness",
          "“One-night cheap” describes the hotels in the line before."),
       o("LF330-deserted", "being half-deserted",
          "The streets are “half-deserted.”"),
       o("LF330-women", "women who come and go",
          "The women are in “the room,” in the closing couplet.")],
      "Each detail belongs to a different place in the excerpt: streets, hotels, restaurants, room."),

    item("LF331", "literature", "Prufrock — the question", ["poetry"], ["prose-drama-analysis"], "prufrock",
      "When the “overwhelming question” comes up, what does the speaker tell the listener?",
      [o("LF331-answer", "to answer it on the way",
          "No answer is asked for or given."),
       o("LF331-women", "to put it to the women in the room",
          "The women talk of Michelangelo; the question is not brought to them."),
       o("LF331-not-ask", "not to ask what it is",
          "“Oh, do not ask, ‘What is it?’ / Let us go and make our visit.”", true),
       o("LF331-wait", "to keep it for another evening",
          "The speaker sets no later time for it. He moves straight on to the visit.")],
      "The speaker raises the question and turns away from it in the next line."),

    item("LF332", "literature", "Prufrock — the unrhymed line", ["poetry"], ["sound-devices", "poetry-forms"], "prufrock",
      "Which of these lines rhymes with no other line in the excerpt?",
      [o("LF332-i", "“Let us go then, you and I,”",
          "“I” rhymes with “sky” in the next line."),
       o("LF332-table", "“Like a patient etherized upon a table;”",
          "No other line ends on a sound like “table.”", true),
       o("LF332-hotels", "“Of restless nights in one-night cheap hotels”",
          "“Hotels” rhymes with “oyster-shells.”"),
       o("LF332-intent", "“Of insidious intent”",
          "“Intent” rhymes with “argument.”")],
      "Most of the excerpt rhymes in pairs. One of the few lines left without a partner carries its strangest image."),

    /* ---- Joyce ---- */
    item("LF333", "literature", "Araby — why he lingers", ["narrative"], ["narrative-elements"], "araby",
      "Why does the boy linger before the stall?",
      [o("LF333-gift", "to choose the gift he promised",
          "He already knows “my stay was useless”; he is no longer choosing."),
       o("LF333-speak", "to hear the young woman speak again",
          "She has already spoken to him without interest, and he does not wait for more."),
       o("LF333-light", "to wait until the lights go out",
          "The light goes out after he has walked away."),
       o("LF333-real", "to make his interest seem real",
          "He lingers “to make my interest in her wares seem the more real.”", true)],
      "The sentence gives his motive in his own words, after admitting that staying was useless."),

    item("LF334", "literature", "Araby — the coins", ["narrative"], ["narrative-elements"], "araby",
      "What money does the boy have in his pocket?",
      [o("LF334-2p-6", "two pennies and a sixpence",
          "“I allowed the two pennies to fall against the sixpence in my pocket.”", true),
       o("LF334-6-shilling", "a sixpence and a shilling",
          "No shilling is mentioned in the excerpt."),
       o("LF334-2-6", "two sixpences and a penny",
          "This reverses the count: two pennies, one sixpence."),
       o("LF334-6", "a sixpence and no pennies",
          "The sixpence has two pennies falling against it.")],
      "The small sum is part of the scene’s point. Read the count exactly."),

    item("LF335", "literature", "Araby — where he looks", ["narrative", "symbol"], ["narrative-elements", "figurative-language"], "araby",
      "Where is the boy looking when he “saw myself”?",
      [o("LF335-stall", "at the wares on the stall",
          "He has already turned away from the stall."),
       o("LF335-up", "up into the darkness",
          "“Gazing up into the darkness I saw myself.”", true),
       o("LF335-middle", "down the middle of the bazaar",
          "That is where he walks, two sentences earlier."),
       o("LF335-gallery", "toward the end of the gallery",
          "The voice calls from one end of the gallery; he is not said to look there.")],
      "The moment of insight comes with nothing in front of him to see."),

    item("LF336", "literature", "Araby — driven and derided", ["narrative"], ["narrative-elements"], "araby",
      "By what does the boy see himself “driven and derided”?",
      [o("LF336-anguish", "anguish",
          "Anguish is in his eyes afterward. It is a result, not the driver."),
       o("LF336-anger", "anger",
          "Anger is paired with anguish in the final clause."),
       o("LF336-vanity", "vanity",
          "“I saw myself as a creature driven and derided by vanity.”", true),
       o("LF336-darkness", "darkness",
          "The darkness is what he gazes into.")],
      "Separate what he sees about himself from what he feels on seeing it."),

    item("LF337", "literature", "Araby — the order of events", ["narrative"], ["narrative-elements", "narrative-writing"], "araby",
      "Which of these happens first in the excerpt?",
      [o("LF337-walk", "He walks down the middle of the bazaar.",
          "He walks after he has turned away."),
       o("LF337-coins", "He lets the coins fall together in his pocket.",
          "The coins come after the walk."),
       o("LF337-turn", "He turns away from the stall.",
          "“Then I turned away slowly and walked down the middle of the bazaar”: turning comes before walking.", true),
       o("LF337-voice", "He hears a voice call from the gallery.",
          "The voice comes after the coins.")],
      "The order is: lingering, turning away, walking, the coins, the voice, the dark, the insight."),

    /* ---- Tagore ---- */
    item("LF338", "literature", "Gitanjali — the stream of reason", ["world-lit", "figurative"], ["figurative-language", "world-literature"], "gitanjali",
      "Into what has “the clear stream of reason” not lost its way?",
      [o("LF338-habit", "the desert sand of dead habit",
          "“Has not lost its way into the dreary desert sand of dead habit.”", true),
       o("LF338-truth", "the depth of truth",
          "The depth of truth is where words come out from, two lines earlier."),
       o("LF338-thought", "ever-widening thought",
          "That is where the mind is led forward, in the next line."),
       o("LF338-fear", "a mind full of fear",
          "Fear is named in the first line, where the mind is without it.")],
      "Each line pairs a good thing with a place or a condition. Keep the pairs straight."),

    item("LF339", "literature", "Gitanjali — arms toward perfection", ["world-lit", "figurative"], ["figurative-language", "world-literature"], "gitanjali",
      "What “stretches its arms towards perfection”?",
      [o("LF339-knowledge", "free knowledge",
          "The poem says only that knowledge is free."),
       o("LF339-mind", "the mind led forward",
          "The mind is led “into ever-widening thought and action.”"),
       o("LF339-head", "the head held high",
          "The head is held high in the first line and does nothing more."),
       o("LF339-striving", "tireless striving",
          "“Where tireless striving stretches its arms towards perfection.”", true)],
      "The poem gives arms to an abstraction. Find which one."),

    item("LF340", "literature", "Gitanjali — led by whom", ["world-lit"], ["world-literature", "prose-drama-analysis"], "gitanjali",
      "By whom is the mind “led forward”?",
      [o("LF340-country", "the country to be awakened in the closing line",
          "The country is what the speaker asks to have awakened."),
       o("LF340-father", "the Father addressed in the closing line",
          "“Led forward by thee”; the closing line shows who “thee” is: “my Father.”", true),
       o("LF340-reason", "the reason named in the line before",
          "Reason is a stream in the line before; it is not the “thee” who leads."),
       o("LF340-truth", "the truth named in an earlier line",
          "Truth is where words come from. The poem does not address it.")],
      "“Thee” is not explained until the last line. Read forward to find who is being spoken to."),

    item("LF341", "literature", "Gitanjali — one request", ["world-lit"], ["world-literature", "poetry-forms"], "gitanjali",
      "How many requests does the speaker make of the one he addresses?",
      [o("LF341-1", "one",
          "The “Where” lines describe a place. The only request is the last: “let my country awake.”", true),
       o("LF341-2", "two",
          "There is a single imperative, “let.”"),
       o("LF341-7", "seven",
          "There are seven “Where” lines, but each describes; none asks."),
       o("LF341-8", "eight",
          "The poem has eight lines; seven of them describe and one asks.")],
      "The poem is one sentence. Everything before the dash is description, held up until the request arrives."),

    item("LF342", "literature", "Gitanjali — awake into what", ["world-lit"], ["world-literature"], "gitanjali",
      "Into what does the speaker ask that the country awake?",
      [o("LF342-walls", "a world without walls",
          "The unbroken world is one of the conditions listed, not the name given to the whole."),
       o("LF342-knowledge", "knowledge that is free",
          "Free knowledge is the second condition in the list."),
       o("LF342-heaven", "a heaven of freedom",
          "“Into that heaven of freedom, my Father, let my country awake.”", true),
       o("LF342-action", "widening thought and action",
          "That is where the mind is led, in the line before the request.")],
      "“That” in the closing line gathers all the “Where” lines into one name."),

    /* ---- Absence table ---- */
    item("LF343", "reading", "Absence brief — the asterisk", ["informational", "graphics"], ["text-graphics", "informational-texts"], "absence",
      "Why is the 2020 rate marked with an asterisk?",
      [o("LF343-closed", "Schools were closed for part of that year.",
          "The brief says nothing about closures."),
       o("LF343-state", "The state changed the definition that year.",
          "The state changed the definition in 2022."),
       o("LF343-records", "The daily records for that year were lost.",
          "The records “were lost in a server failure,” so the rate could not be recalculated and stands as first reported.", true),
       o("LF343-enroll", "Enrollment was not reported for that year.",
          "The table gives 2020 enrollment: 5,900.")],
      "Read the note before reading the trend. It says which figure is not like the others, and why."),

    item("LF344", "reading", "Absence brief — every year", ["informational", "evidence"], ["evidence-credibility", "text-graphics"], "absence",
      "Which pair of years is the exception to the superintendent’s claim?",
      [o("LF344-20-21", "2020 to 2021",
          "The claim covers the years since 2021."),
       o("LF344-21-22", "2021 to 2022",
          "The rate fell from 18% to 15%."),
       o("LF344-22-23", "2022 to 2023",
          "The rate was 15% in both years. It did not fall.", true),
       o("LF344-23-24", "2023 to 2024",
          "The rate fell from 15% to 13%.")],
      "“Every year” is a claim about each step, not about the end points. Check each pair."),

    item("LF345", "reading", "Absence brief — how many students", ["informational", "graphics"], ["text-graphics", "informational-texts"], "absence",
      "About how many students were chronically absent in 2024?",
      [o("LF345-780", "780",
          "13% of 6,000 is 780.", true),
       o("LF345-806", "806",
          "This applies the 2024 rate to the 2023 enrollment of 6,200."),
       o("LF345-900", "900",
          "This applies the 2023 rate, 15%, to the 2024 enrollment."),
       o("LF345-930", "930",
          "This is the 2023 count: 15% of 6,200.")],
      "A rate needs its own year’s enrollment. Both numbers change from row to row."),

    item("LF346", "reading", "Absence brief — the current rule", ["informational"], ["informational-texts"], "absence",
      "Under the definition now in use, a student enrolled for 150 days counts as chronically absent after missing how many days?",
      [o("LF346-8", "8 days",
          "The rule is 8 percent of days enrolled, not 8 days."),
       o("LF346-12", "12 days",
          "8% of 150 days enrolled is 12 days.", true),
       o("LF346-15", "15 days",
          "Fifteen days would be 10% of 150. This state’s rule is 8%."),
       o("LF346-18", "18 days",
          "Eighteen days was the earlier definition.")],
      "The current definition is a share of the days a student was enrolled, so the number of days depends on the student. Use the share this brief gives."),

    item("LF347", "reading", "Absence brief — a fair comparison", ["informational", "evidence"], ["evidence-credibility", "informational-texts", "persuasive-texts"], "absence",
      "Which two figures compare 2020 with 2021 under a single definition?",
      [o("LF347-9-18", "9% and 18%",
          "These are the trustee’s figures: 2020 under the earlier definition, 2021 under the current one."),
       o("LF347-14-18", "14% and 18%",
          "14% is the 2019 rate."),
       o("LF347-12-18", "12% and 18%",
          "Both of these are 2021, under the two definitions."),
       o("LF347-9-12", "9% and 12%",
          "The 2020 rate exists only under the earlier definition, and the note gives 2021 under that definition as 12%.", true)],
      "The trustee’s “doubled” sets a figure under one definition beside a figure under the other. Like for like, the rise is 9% to 12%."),

    /* ---- Email thread ---- */
    item("LF348", "reading", "Email thread — the deadline", ["technical"], ["technical-texts"], "thread",
      "At the end of the thread, when are the essays due?",
      [o("LF348-thu-3", "Thursday at 3:00 p.m.",
          "Tuesday’s 2:10 message withdrew the move to Thursday."),
       o("LF348-fri-3", "Friday at 3:00 p.m.",
          "The 2:10 message tells the team to disregard Monday afternoon’s change, which leaves the first message’s deadline in force.", true),
       o("LF348-thu-8", "Thursday at 8:00 a.m.",
          "No message sets an 8:00 a.m. deadline."),
       o("LF348-fri-8", "Friday at 8:00 a.m.",
          "The assembly moved to Friday morning; the deadline did not.")],
      "The last message on a subject is not a new instruction here. It cancels a change, so the instruction before the change returns."),

    item("LF349", "reading", "Email thread — the rubric", ["technical"], ["technical-texts", "evidence-credibility"], "thread",
      "Under the ground rule in the first message, which rubric do the team’s instructions call for at the end of the thread?",
      [o("LF349-v2-742", "v2, set in Monday’s 7:42 a.m. message",
          "The only message about the rubric that the chair sent to the whole team is the first, which names v2.", true),
       o("LF349-v3-905", "v3, set in Tuesday’s 9:05 a.m. message",
          "That message is from Lee Park. Under the ground rule, changes come from the chair."),
       o("LF349-v3-1130", "v3, set in Tuesday’s 11:30 a.m. message",
          "The chair sent that reply to Lee Park only. The ground rule requires a change to go to the whole team."),
       o("LF349-v2-210", "v2, set in Tuesday’s 2:10 p.m. message",
          "The 2:10 message is about the due date and does not mention a rubric.")],
      "Check each message against the rule the chair set: who sent it, and to whom."),

    item("LF350", "reading", "Email thread — the late penalty", ["technical"], ["technical-texts"], "thread",
      "An essay comes in three school days after the deadline. How much does it lose?",
      [o("LF350-10", "10%",
          "“A late essay loses 10%, once, however late it comes in.”", true),
       o("LF350-20", "20%",
          "The penalty does not grow with the delay."),
       o("LF350-30", "30%",
          "This applies 10% per day. The thread’s rule is 10% once."),
       o("LF350-40", "40%",
          "No reading of the thread gives this figure.")],
      "Many late policies charge by the day. This one does not, and no later message changed it."),

    item("LF351", "reading", "Email thread — audience", ["technical", "audience"], ["style-audience"], "thread",
      "Which message was sent to one person only?",
      [o("LF351-415", "Monday, 4:15 p.m.",
          "This went to the English 9 team."),
       o("LF351-905", "Tuesday, 9:05 a.m.",
          "Lee Park sent this to the English 9 team."),
       o("LF351-210", "Tuesday, 2:10 p.m.",
          "This went to the English 9 team."),
       o("LF351-1130", "Tuesday, 11:30 a.m.",
          "Its header reads “To: Lee Park only.”", true)],
      "The header of each message says who received it. In this thread that decides whether a message counts."),

    item("LF352", "reading", "Email thread — the source of a claim", ["technical"], ["technical-texts", "evidence-credibility"], "thread",
      "According to Lee Park’s message, who said the team should score with v3?",
      [o("LF352-chair", "the department chair",
          "The chair’s reply comes later and goes to Lee Park alone."),
       o("LF352-notice", "the district’s posted notice",
          "The message says the district posted the rubric. It does not say the posting told teachers when to use it."),
       o("LF352-office", "someone at the district office",
          "“Someone at the district office told me we are supposed to score with it starting now.”", true),
       o("LF352-team", "another English 9 teacher",
          "The message names no colleague.")],
      "Posting a document and directing people to use it are different acts. The message reports the second on the word of an unnamed person.")
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  items.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items);
})();
