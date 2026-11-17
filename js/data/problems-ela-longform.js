/* Original NES 301 / Field 02-style passage sets.
   Public-domain literature excerpts and original informational prose only.
   Not copied from Pearson Field 02, Quizlet, or licensed modern works. */
(function () {
  const P = {
    douglass: `The first step had been taken. Mistress, in teaching me the alphabet, had given me the inch, and no precaution could prevent me from taking the ell.

The plan which I adopted, and the one by which I was most successful, was that of making friends of all the little white boys whom I met in the street. As many of these as I could, I converted into teachers. With their kindly aid, obtained at different times and in different places, I finally succeeded in learning to read. When I was sent of errands, I always took my book, and by going one part of my errand quickly, I found time to get a lesson before my return. I used also to carry bread from the house, enough of which was always in the house, and to which I was always welcome; for I was much better off in this regard than many of the poor white children in our neighborhood. This bread I used to bestow upon the hungry little urchins, who, in return, would give me that more valuable bread of knowledge.

I am strongly tempted to give the names of two or three of those little boys, as a testimonial of the gratitude and affection I bear them; but prudence forbids;—not that it would injure me, but it might embarrass them; for it is almost an unpardonable offence to teach slaves to read in this Christian country.

I used to talk this matter of slavery over with them. I would sometimes say to them, I wished I could be as free as they would be when they got to be men. “You will be free as soon as you are twenty-one, but I am a slave for life! Have not I as good a right to be free as you have?” These words used to trouble them; they would express for me the liveliest sympathy, and console me with the hope that something would occur by which I might be free.

I was now about twelve years old, and the thought of being a slave for life began to bear heavily upon my heart. Just about this time, I got hold of a book entitled “The Columbian Orator.” Every opportunity I got, I used to read this book.`,

    austen: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.

“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”

Mr. Bennet replied that he had not.

“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”

Mr. Bennet made no answer.

“Do not you want to know who has taken it?” cried his wife impatiently.

“You want to tell me, and I have no objection to hearing it.”

This was invitation enough.

“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.”

“What is his name?”

“Bingley.”

“Is he married or single?”

“Oh! single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!”

“How so? how can it affect them?”

“My dear Mr. Bennet,” replied his wife, “how can you be so tiresome! You must know that I am thinking of his marrying one of them.”`,

    macbeth: `She should have died hereafter;
There would have been a time for such a word.
To-morrow, and to-morrow, and to-morrow,
Creeps in this petty pace from day to day,
To the last syllable of recorded time;
And all our yesterdays have lighted fools
The way to dusty death. Out, out, brief candle!
Life's but a walking shadow, a poor player
That struts and frets his hour upon the stage
And then is heard no more. It is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.`,

    dickinson: `Because I could not stop for Death –
He kindly stopped for me –
The Carriage held but just Ourselves –
And Immortality.

We slowly drove – He knew no haste
And I had put away
My labor and my leisure too,
For His Civility –

We passed the School, where Children strove
At Recess – in the Ring –
We passed the Fields of Gazing Grain –
We passed the Setting Sun –

Or rather – He passed Us –
The Dews drew quivering and Chill –
For only Gossamer, my Gown –
My Tippet – only Tulle –

We paused before a House that seemed
A Swelling of the Ground –
The Roof was scarcely visible –
The Cornice – in the Ground –

Since then – 'tis Centuries – and yet
Feels shorter than the Day
I first surmised the Horses' Heads
Were toward Eternity –`,

    lincoln: `Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.`,

    thoreau: `From Henry David Thoreau, Walden (1854), the chapter “Economy”:

The greater part of what my neighbors call good I believe in my soul to be bad, and if I repent of anything, it is very likely to be my good behavior. What demon possessed me that I behaved so well? You may say the wisest thing you can, old man,—you who have lived seventy years, not without honor of a kind,—I hear an irresistible voice which invites me away from all that. One generation abandons the enterprises of another like stranded vessels.

I think that we may safely trust a good deal more than we do. We may waive just so much care of ourselves as we honestly bestow elsewhere. Nature is as well adapted to our weakness as to our strength. The incessant anxiety and strain of some is a well-nigh incurable form of disease. We are made to exaggerate the importance of what work we do; and yet how much is not done by us! or, what if we had been taken sick? How vigilant we are! determined not to live by faith if we can avoid it; all the day long on the alert, at night we unwillingly say our prayers and commit ourselves to uncertainties.

[From a later chapter, “Where I Lived, and What I Lived For”:]

We are determined to be starved before we are hungry. Men say that a stitch in time saves nine, and so they take a thousand stitches to-day to save nine to-morrow.`,

    fox: `A Fox one day spied a beautiful bunch of ripe grapes hanging from a vine trained along the branches of a tree. The grapes seemed ready to burst with juice, and the Fox's mouth watered as he gazed longingly at them.

The bunch hung from a high branch, and the Fox had to jump for it. The first time he jumped he missed it by a long way. So he walked off a short distance and took a running leap at it, only to fall short once more. Again and again he tried, but in vain.

Now he sat down and looked at the grapes in disgust.

"What a fool I am," he said. "Here I am wearing myself out to get a lot of sour grapes that are not worth gaping for."

And off he walked very, very scornfully.

Moral: There are many who pretend to despise and belittle that which is beyond their reach.`

  };

  const items = [
    { id: "LF014", domain: "literature", title: "Douglass — figurative bread", difficulty: "hard", tags: ["figurative", "longform"], skillIds: ["figurative-language"], passageSet: "douglass", passage: P.douglass,
      stem: "When Douglass calls the boys’ lessons “that more valuable bread of knowledge,” he is primarily using—",
      choices: [
        "simile, comparing lessons to bread with like or as",
        "metaphor, treating lessons as food better than a loaf",
        "personification, giving knowledge the hunger of the boys who teach him",
        "apostrophe, turning aside from the story to address knowledge directly"
      ], answer: 1,
      explanation: "“Bread of knowledge” maps learning onto food without like or as, right after he has given away real bread. {{opt:LF014-0}} needs like or as, which the phrase lacks. {{opt:LF014-2}} gives the boys’ hunger to knowledge; the boys are the hungry ones. {{opt:LF014-3}} needs a direct address, which the sentence does not make." },

    { id: "LF015", domain: "literature", title: "Douglass — tone", difficulty: "hard", tags: ["narrative", "longform"], skillIds: ["narrative-elements", "literature-context"], passageSet: "douglass", passage: P.douglass,
      stem: "The tone of the paragraph that withholds the boys’ names is best described as—",
      choices: [
        "grateful, and bitter at a law that makes their help an offense",
        "grateful, and afraid that naming the boys would get him punished",
        "resentful, and unwilling to credit the boys for their help",
        "detached, recording the boys’ help as a plain fact"
      ], answer: 0,
      explanation: "He wants to thank them but holds back because teaching a slave to read is “almost an unpardonable offence,” and “this Christian country” is bitter. {{opt:LF015-1}} reverses his reason: he says naming them would not injure him but might embarrass them. {{opt:LF015-2}} contradicts “gratitude and affection.” {{opt:LF015-3}} misses both feelings." },

    { id: "LF016", domain: "literature", title: "Douglass — purpose", difficulty: "hard", tags: ["context", "longform"], skillIds: ["literature-context", "prose-drama-analysis"], passageSet: "douglass", passage: P.douglass,
      stem: "A chief purpose of this excerpt in Douglass’s narrative is to—",
      choices: [
        "show how he won reading from a system built to keep him from it",
        "show how his mistress’s lessons carried him from the alphabet to full literacy",
        "show how the boys’ sympathy made him content with his position as a slave",
        "show how The Columbian Orator eased the thought of slavery for life"
      ], answer: 0,
      explanation: "The inch and the ell, the street teachers, and the Orator all stage reading as something taken against the system. {{opt:LF016-1}} is false: she gave him the alphabet, and the boys did the rest. {{opt:LF016-2}} reverses the end of the excerpt, where slavery for life begins “to bear heavily.” {{opt:LF016-3}} reverses the timing: the Orator arrives as that thought grows heavier." },

    { id: "LF017", domain: "literature", title: "Douglass — inference", difficulty: "hard", tags: ["narrative", "longform"], skillIds: ["prose-drama-analysis"], passageSet: "douglass", passage: P.douglass,
      stem: "The excerpt most strongly supports the inference that—",
      choices: [
        "his mistress went on teaching him openly after he learned the alphabet",
        "he used errands and spare bread to get lessons in secret",
        "the boys’ families knew about the lessons and approved of them",
        "he learned to read from the pages of The Columbian Orator itself"
      ], answer: 1,
      explanation: "He hurries errands to study and trades bread for lessons, and he will not name the boys. {{opt:LF017-0}} is false: the boys, not his mistress, became his teachers. {{opt:LF017-2}} is contradicted by his need to protect the boys. {{opt:LF017-3}} reverses the order: he gets the book after he can read." },

    { id: "LF018", domain: "literature", title: "Douglass — theme", difficulty: "hard", tags: ["theme", "longform"], skillIds: ["narrative-elements"], passageSet: "douglass", passage: P.douglass,
      stem: "Which statement is the best theme (not a topic) of the excerpt?",
      choices: [
        "slavery",
        "reading",
        "When a society forbids knowledge, the hunger for it can turn ordinary errands and friendships into resistance.",
        "childhood friendship"
      ], answer: 2,
      explanation: "A theme is a complete insight. {{opt:LF018-0}}, {{opt:LF018-1}}, and {{opt:LF018-3}} are topics. {{opt:LF018-2}} accounts for the covert lessons, the bread exchange, and the forbidden names." },

    { id: "LF019", domain: "literature", title: "Austen — irony", difficulty: "hard", tags: ["irony", "longform"], skillIds: ["figurative-language", "prose-drama-analysis"], passageSet: "austen", passage: P.austen,
      stem: "The opening sentence is ironic primarily because—",
      choices: [
        "Mrs. Bennet speaks it while meaning the opposite",
        "it states as a universal truth what is only the families’ wish",
        "Mr. Bennet has already met Bingley, and the reader learns this later",
        "the new tenant turns out to have no fortune at all"
      ], answer: 1,
      explanation: "“Universally acknowledged” and “must be in want” sound like a law of nature; the dialogue shows the want belongs to the families. {{opt:LF019-0}} is false: the narrator, not Mrs. Bennet, speaks the line. {{opt:LF019-2}} is false: Mr. Bennet has not heard of Bingley. {{opt:LF019-3}} is false: he has four or five thousand a year." },

    { id: "LF020", domain: "literature", title: "Austen — narrative voice", difficulty: "hard", tags: ["pov", "longform"], skillIds: ["narrative-elements"], passageSet: "austen", passage: P.austen,
      stem: "The narrator’s stance toward Mrs. Bennet is best described as—",
      choices: [
        "agreement with Mrs. Bennet that a rich bachelor belongs to some daughter",
        "amused distance that lets Mrs. Bennet’s talk expose her motives",
        "first-person sympathy from inside Mrs. Bennet’s own thoughts and plans",
        "sharp disapproval aimed at Mr. Bennet’s dry replies"
      ], answer: 1,
      explanation: "The opening axiom and Mr. Bennet’s dry replies frame her as comic and mercenary. {{opt:LF020-0}} takes the ironic opening at face value. {{opt:LF020-2}} is false: the narrator is third person and reports her speech from outside. {{opt:LF020-3}} reverses the roles: Mr. Bennet is the foil, not the target." },

    { id: "LF021", domain: "literature", title: "Austen — characterization", difficulty: "hard", tags: ["character", "longform"], skillIds: ["prose-drama-analysis"], passageSet: "austen", passage: P.austen,
      stem: "Mr. Bennet’s replies characterize him as—",
      choices: [
        "as eager as his wife to match Bingley with a daughter",
        "detached and teasing, making his wife carry the conversation",
        "uninterested in the new tenant’s name or situation",
        "already informed of the news by Mrs. Long"
      ], answer: 1,
      explanation: "He withholds curiosity (“You want to tell me”) so that she performs. {{opt:LF021-0}} gives him her plan. {{opt:LF021-2}} is false: he asks the tenant’s name and whether he is married. {{opt:LF021-3}} is false: Mrs. Long told Mrs. Bennet, and Mr. Bennet “had not” heard." },

    { id: "LF022", domain: "literature", title: "Austen — social context", difficulty: "hard", tags: ["context", "longform"], skillIds: ["literature-context", "literary-periods"], passageSet: "austen", passage: P.austen,
      stem: "The passage most clearly satirizes a social world in which—",
      choices: [
        "a rich man is a prize for families with daughters",
        "marriage is arranged by fathers without the mothers’ say",
        "women may not speak of money or income in front of men",
        "newcomers are shunned until they have lived there a year"
      ], answer: 0,
      explanation: "“Rightful property,” “a fine thing for our girls,” and the income figure make marriage a market. {{opt:LF022-1}} reverses the scene: the mother is the one planning. {{opt:LF022-2}} is false: Mrs. Bennet names his income at once. {{opt:LF022-3}} is false: the neighborhood claims Bingley before he arrives." },

    { id: "LF023", domain: "literature", title: "Macbeth — metaphor", difficulty: "hard", tags: ["figurative", "longform"], skillIds: ["figurative-language", "poetry-forms"], passageSet: "macbeth", passage: P.macbeth,
      stem: "In “Life’s but a walking shadow, a poor player,” Macbeth primarily compares life to—",
      choices: [
        "the yesterdays that light fools to dusty death",
        "an actor who struts and frets his hour and is heard no more",
        "the petty pace that creeps from day to day",
        "the recorded time that ends at its last syllable"
      ], answer: 1,
      explanation: "The “poor player” is an actor who “struts and frets his hour upon the stage / And then is heard no more.” The other options are images from earlier lines, each describing time rather than life." },

    { id: "LF024", domain: "literature", title: "Macbeth — tone", difficulty: "hard", tags: ["tone", "longform"], skillIds: ["narrative-elements"], passageSet: "macbeth", passage: P.macbeth,
      stem: "The tone of the speech is best described as—",
      choices: [
        "hopeful: tomorrow promises time to recover",
        "weary despair: time crawls and life means nothing",
        "mocking: the speaker laughs at the tale told by an idiot",
        "grieving: the speaker mourns the queen’s death and no wider loss"
      ], answer: 1,
      explanation: "Tomorrow creeps, yesterdays light fools to death, and the tale signifies nothing. {{opt:LF024-0}} misreads “to-morrow” as hope; it is grind. {{opt:LF024-2}} mistakes the idiot’s tale for a joke; it is the verdict on life. {{opt:LF024-3}} stops at the opening line; the speech widens from one death to all of life." },

    { id: "LF025", domain: "literature", title: "Macbeth — theme", difficulty: "hard", tags: ["theme", "longform"], skillIds: ["narrative-elements"], passageSet: "macbeth", passage: P.macbeth,
      stem: "Which statement best captures a theme of the speech?",
      choices: [
        "Time grinds on yet leaves life without lasting meaning.",
        "Grief should be delayed until there is time to feel it properly.",
        "Acting on a stage gives life more meaning than death can take away.",
        "The future offers relief from the failures and griefs of the past."
      ], answer: 0,
      explanation: "“Petty pace” and “signifying nothing” join duration to emptiness. {{opt:LF025-1}} turns the opening line into a lesson. {{opt:LF025-2}} reverses the player image, which ends “heard no more.” {{opt:LF025-3}} reverses “to-morrow,” which only creeps." },

    { id: "LF026", domain: "literature", title: "Macbeth — sound and pace", difficulty: "hard", tags: ["sound", "longform"], skillIds: ["sound-devices", "poetry-forms"], passageSet: "macbeth", passage: P.macbeth,
      stem: "The repetition of “To-morrow, and to-morrow, and to-morrow” most clearly—",
      choices: [
        "speeds the line, as each tomorrow comes faster",
        "slows the line to the creeping pace it describes",
        "echoes a refrain the witches chant earlier in the play",
        "addresses tomorrow as a listener"
      ], answer: 1,
      explanation: "Three tomorrows joined by and drag the line, matching “creeps in this petty pace.” {{opt:LF026-0}} reverses the effect. {{opt:LF026-2}} is outside this speech. {{opt:LF026-3}} would need a direct address, which the line does not make." },

    { id: "LF027", domain: "literature", title: "Dickinson — personification", difficulty: "hard", tags: ["figurative", "longform"], skillIds: ["figurative-language"], passageSet: "dickinson", passage: P.dickinson,
      stem: "Death is characterized in the opening stanzas primarily through—",
      choices: [
        "personification: Death is a polite driver",
        "simile: Death is like a carriage, compared with like or as",
        "apostrophe: the speaker addresses Death directly as you",
        "hyperbole: Death’s slow pace is exaggerated for effect"
      ], answer: 0,
      explanation: "Death “kindly stopped,” “knew no haste,” shows “Civility,” and drives: human traits with no like or as. {{opt:LF027-1}} needs like or as, which the stanzas lack. {{opt:LF027-2}} is false: she speaks of Death as he. {{opt:LF027-3}} is false: “He knew no haste” is stated plainly, not exaggerated." },

    { id: "LF028", domain: "literature", title: "Dickinson — tone shift", difficulty: "hard", tags: ["tone", "longform"], skillIds: ["narrative-elements", "poetry-forms"], passageSet: "dickinson", passage: P.dickinson,
      stem: "The poem’s tone shifts most sharply when—",
      choices: [
        "Immortality joins them in the carriage",
        "the dew turns chill and her thin gown gives no warmth",
        "she says the ride happened centuries ago, though it feels shorter than a day",
        "Death drops his civility and begins to drive the horses with haste"
      ], answer: 1,
      explanation: "After “He passed Us,” the dew is quivering and chill and her gown is only gossamer; the next stop is a house that is a swelling in the ground. {{opt:LF028-0}} is in the calm first stanza. {{opt:LF028-2}} comes after the shift, in the last stanza. {{opt:LF028-3}} is false: Death never hurries." },

    { id: "LF029", domain: "literature", title: "Dickinson — theme", difficulty: "hard", tags: ["theme", "longform"], skillIds: ["narrative-elements"], passageSet: "dickinson", passage: P.dickinson,
      stem: "Which reading is best supported by the whole poem?",
      choices: [
        "Death arrives politely, yet the ride ends at the grave and points toward eternity.",
        "The ride ends at the speaker’s childhood school, where the poem began.",
        "The children at recess show that Immortality has failed.",
        "The ride passes through ordinary life and stops before reaching the grave."
      ], answer: 0,
      explanation: "Kindness and civility sit beside the house in the ground and the horses’ heads toward eternity. {{opt:LF029-1}} is false: the school is an early stop, and the ride ends at the grave. {{opt:LF029-2}} makes the children an argument; they are a scene passed. {{opt:LF029-3}} is false: they pause before a house that is a grave." },

    { id: "LF030", domain: "literature", title: "Dickinson — structure", difficulty: "hard", tags: ["form", "longform"], skillIds: ["poetry-forms"], passageSet: "dickinson", passage: P.dickinson,
      stem: "The repeated “We passed…” sequence functions structurally as—",
      choices: [
        "a refrain that keeps the ride circling the schoolyard",
        "a list of stops that moves through a day of life toward dusk and burial",
        "the turn that ends the poem in the schoolyard stanza",
        "a frame that returns the speaker at the end to the labor and leisure she had put away"
      ], answer: 1,
      explanation: "Anaphora marks the stages of the ride: school, grain, setting sun, then the house in the ground. {{opt:LF030-0}} is false: the ride moves on. {{opt:LF030-2}} is false: three stanzas follow. {{opt:LF030-3}} is false: she put labor and leisure away at the start." },

    { id: "LF031", domain: "reading", title: "Gettysburg — purpose", difficulty: "hard", tags: ["rhetoric", "longform"], skillIds: ["rhetorical-appeals", "persuasive-texts"], passageSet: "lincoln", passage: P.lincoln,
      stem: "Lincoln’s primary purpose is to—",
      choices: [
        "recount the battle fought on this field",
        "turn the dedication into a charge to the living to finish the work",
        "argue that this speech will outlast the soldiers’ deeds",
        "consecrate the ground with words"
      ], answer: 1,
      explanation: "After saying the ground is already consecrated, he turns to “us the living” and “the great task remaining.” {{opt:LF031-0}} is false: no account of the battle appears. {{opt:LF031-2}} reverses “the world will little note.” {{opt:LF031-3}} reverses “we can not consecrate.”" },

    { id: "LF032", domain: "reading", title: "Gettysburg — antithesis", difficulty: "hard", tags: ["rhetoric", "longform"], skillIds: ["rhetorical-appeals"], passageSet: "lincoln", passage: P.lincoln,
      stem: "“The world will little note, nor long remember what we say here, but it can never forget what they did here” is best described as—",
      choices: [
        "metaphor: words and deeds are made into the same kind of act",
        "antithesis: what we say is set against what they did",
        "irony: the line means the speech will be remembered",
        "tricolon: three verbs of dedication in a row"
      ], answer: 1,
      explanation: "Say and did, little note and never forget, are balanced opposites. {{opt:LF032-0}} reverses the contrast. {{opt:LF032-2}} reads a hidden meaning the speech does not support. {{opt:LF032-3}} describes the nearby sentence “we can not dedicate—we can not consecrate—we can not hallow.”" },

    { id: "LF033", domain: "reading", title: "Gettysburg — diction", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["vocab-strategies", "style-audience"], passageSet: "lincoln", passage: P.lincoln,
      stem: "In “the last full measure of devotion,” measure most nearly means—",
      choices: [
        "a bar of music",
        "the full amount or extent",
        "a step taken to reach a goal",
        "a unit used in surveying land"
      ], answer: 1,
      explanation: "“The last full measure of devotion” is the complete extent of their commitment: their lives. The other options are real senses of measure that do not fit “of devotion.”" },

    { id: "LF034", domain: "reading", title: "Gettysburg — implied argument", difficulty: "hard", tags: ["persuasive", "longform"], skillIds: ["persuasive-texts", "literature-context"], passageSet: "lincoln", passage: P.lincoln,
      stem: "The speech most strongly implies that the war’s justification depends on—",
      choices: [
        "whether the living finish the work of popular government",
        "whether the world remembers the words spoken at this ceremony",
        "whether words can consecrate ground the soldiers already hallowed",
        "whether the nation can end the war before another battle is fought"
      ], answer: 0,
      explanation: "“Testing whether that nation … can long endure” and “shall not have died in vain” tie the war’s meaning to the unfinished work. {{opt:LF034-1}} reverses “the world will little note.” {{opt:LF034-2}} reverses “we can not consecrate.” {{opt:LF034-3}} names a goal the speech never mentions." },

    { id: "LF040", domain: "writing", title: "Thoreau — analytical thesis", difficulty: "hard", tags: ["analytical", "longform"], skillIds: ["analytical-writing", "thesis-support"], passageSet: "thoreau", passage: P.thoreau,
      stem: "Which thesis best fits a critical essay on this excerpt (interpretive, arguable, text-based)?",
      choices: [
        "Thoreau praises his neighbors’ careful habits as the source of a steady life.",
        "Thoreau’s images of disease and wasted stitches cast anxious caution as a failure of trust.",
        "Thoreau argues that the old man’s seventy years of experience should guide the young.",
        "Thoreau treats a thousand stitches today as sensible saving for tomorrow."
      ], answer: 1,
      explanation: "{{opt:LF040-1}} names the devices and makes an arguable claim the text supports. {{opt:LF040-0}} reverses his view of what neighbors call good. {{opt:LF040-2}} reverses his answer to the old man: an “irresistible voice” calls him away. {{opt:LF040-3}} reverses the stitches line, which mocks the extra work." },

    { id: "LF041", domain: "writing", title: "Thoreau — best support", difficulty: "hard", tags: ["analytical", "longform"], skillIds: ["analytical-writing"], passageSet: "thoreau", passage: P.thoreau,
      stem: "Which sentence from the excerpt best supports the claim that Thoreau treats over-caution as a kind of illness?",
      choices: [
        "One generation abandons the enterprises of another like stranded vessels.",
        "The incessant anxiety and strain of some is a well-nigh incurable form of disease.",
        "You may say the wisest thing you can, old man.",
        "Men say that a stitch in time saves nine, and so they take a thousand stitches to-day to save nine to-morrow."
      ], answer: 1,
      explanation: "{{opt:LF041-1}} states the disease metaphor directly. {{opt:LF041-0}} is a generation image. {{opt:LF041-2}} addresses an elder. {{opt:LF041-3}} supports wasted labor and is close, but it does not name illness." },

    { id: "LF042", domain: "writing", title: "Thoreau — audience and style", difficulty: "hard", tags: ["style", "longform"], skillIds: ["style-audience", "expository-writing"], passageSet: "thoreau", passage: P.thoreau,
      stem: "If a student rewrote the excerpt as a school-board memo demanding a policy vote this week, the main stylistic problem would be—",
      choices: [
        "it is reflection and imagery, not a proposal with evidence",
        "the excerpt’s sentences are too short and plain for a formal board memo",
        "the excerpt is written in the first person, which a board memo should avoid",
        "the excerpt’s claims about trust would need quotation marks and a citation"
      ], answer: 0,
      explanation: "Mode and audience control form: a board memo needs a request, an audience, and checkable grounds. {{opt:LF042-1}} is false of Thoreau’s long sentences and is not the issue. {{opt:LF042-2}} is a minor point of style; memos often use first person. {{opt:LF042-3}} confuses citation with genre." },

    { id: "LF043", domain: "writing", title: "Thoreau — organization", difficulty: "hard", tags: ["structure", "longform"], skillIds: ["essay-structure", "expository-writing"], passageSet: "thoreau", passage: P.thoreau,
      stem: "The excerpt’s organization is best described as—",
      choices: [
        "cause and effect: a test of trust followed by its measured result",
        "associative: ideas build by turns of thought and image",
        "chronological: from his youth to the old man’s seventieth year",
        "comparison: neighbors’ habits set against his own, point by point"
      ], answer: 1,
      explanation: "Ideas accumulate by turn and image. {{opt:LF043-0}} is false: no test is run. {{opt:LF043-2}} is false: the old man is someone addressed, not a stage of Thoreau’s life. {{opt:LF043-3}} is false: there is no point-by-point comparison." },

    { id: "LF044", domain: "literature", title: "Fox and grapes — fable logic", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["world-literature", "narrative-elements"], passageSet: "fox", passage: P.fox,
      stem: "The fox’s final speech is an example of—",
      choices: [
        "an honest judgment: he has tasted the grapes and found them sour",
        "rationalization: he calls unreachable grapes sour",
        "dramatic irony: the reader knows the grapes really are sour",
        "verbal irony: he praises the grapes while walking off in scorn"
      ], answer: 1,
      explanation: "The moral names the pattern: belittling what is out of reach. {{opt:LF044-0}} is false: he never reaches them. {{opt:LF044-2}} is false: the grapes are described as ripe and full of juice. {{opt:LF044-3}} is false: he belittles them." },

    { id: "LF045", domain: "literature", title: "Fox and grapes — theme vs moral tag", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["world-literature"], passageSet: "fox", passage: P.fox,
      stem: "Compared with the appended moral, the narrative itself is more effective at showing the theme because it—",
      choices: [
        "it hides the failed leaps, so the scorn comes as a surprise",
        "it shows the failed leaps first, so the scorn reads as a cover for failure",
        "it explains why foxes cannot jump high, so the failure seems natural",
        "it states the moral first, so readers know what to look for"
      ], answer: 1,
      explanation: "Story, then spin: the leaps come before the scorn. {{opt:LF045-0}} is false: the leaps are shown. {{opt:LF045-2}} is false: the fable gives no reason. {{opt:LF045-3}} is false: the moral comes last." }

  ];

  /* ---- Rebuilt original passages (LF359–LF387). The first versions (LF001–LF013, LF035–LF039,
     LF046–LF056) are retired. Option-object format: every option carries its own explanation. ---- */
  const Q = {
    fans: `WIND MACHINES AND SPRING FROST
From Bulletin 9 of the Hollis Valley Growers’ Cooperative (a fictional cooperative), 2023

(1) On still spring nights, cold air settles near the ground while a layer of warmer air sits about 40 feet up. (2) A wind machine is a tall fan that pulls that warmer air down into the orchard. (3) In the cooperative’s trial on four farms, each fan was run on some frost nights and left off on others; with the fan running, its block stayed 2.5°F warmer at blossom height. (4) The fans made no difference on windy nights, when the warm layer had already mixed away, or on the two nights when the whole valley fell to 22°F.¹ (5) Growers in the trial named the fans’ noise as their chief complaint; two farms ran them only after midnight to spare their neighbors.² (6) The bulletin calls the fans a marginal tool: one that decides the crop only on nights already close to the damage line.³

Notes
1. Readings from the cooperative’s station network, March 2022.
2. Grower interviews, May 2022.
3. The damage line is the temperature below which open blossoms are killed: about 26°F at full bloom for the valley’s main variety.

A STUDENT’S NOTECARDS
Card A: “With the fan running, its block stayed 2.5°F warmer at blossom height on every frost night.” (Bulletin 9, sentence 3)
Card B: Growers said the noise was the biggest problem. (Bulletin 9, note 2)
Card C: The fans did not help on the nights the valley fell to 22°F. (Bulletin 9, note 2)`,

    comment: `Public comment at a meeting of the Ridgeline Unified school board (fictional), read by a parent

(1) I am here about the plan to close the Alder Street branch library on Saturdays. (2) The district says Saturday visits fell 30 percent in two years. (3) That figure is accurate, and I will not pretend otherwise. (4) But visits dropped the year the bus route stopped running on weekends, so the families who left did not stop wanting books; they stopped being able to reach them. (5) Either the board keeps Saturday hours or it admits it no longer cares about children who ride the bus. (6) Some board members say a weekday evening slot could replace Saturdays. (7) My neighbor tried the Tuesday evening slot once and found the parking lot empty, so evening hours will fail. (8) I ask the board to keep Saturday hours for one more year and to ask the transit office to restore the weekend route. (9) If visits do not recover once the bus runs again, I will support the change myself.`,

    buspass: `DELLWOOD SCHOOL DISTRICT — STUDENT BUS PASS RULES (fictional)

1. Hours. A student pass is valid on weekdays from 6:00 a.m. to 7:00 p.m. and on Saturdays until noon. It is not valid on Sundays.
2. Eligibility. Passes are issued free to students who live 1.5 miles or more from their school. A student who lives closer may buy a pass for $20 a semester.
3. Lost passes. The first replacement in a semester costs $5. Each later replacement in the same semester costs $15.
4. Guests. On field-trip days only, a student may bring one adult guest free of charge with the teacher’s signed slip.
5. Misuse. A second warning for misuse suspends the pass for five school days; a third suspends it for twenty.
6. Summer. Summer-school students keep using their spring pass until July 31.`,

    plantsale: `A student wrote the paragraph below for a school newsletter. The sentences are numbered.

(1) Every spring our school holds a plant sale to raise money for the greenhouse. (2) Last year the sale earned $1,400, more than twice what it earned the year before. (3) The tomatoes sold out by ten, the peppers lasted until noon. (4) Each of the volunteers were given a green apron. (5) Arriving early, the tables had already been set up by the custodians. (6) When a customer asks a volunteer about soil, they should point to the sign by the door. (7) My cousin’s school in Ohio sells pies instead of plants. (8) This year the club hopes to add herbs, since basil was the plant customers asked for most.`,

    studyloop: `A magazine ad for a study app (fictional)

Headline: “Students who use StudyLoop score 18 points higher.*”
Body: “Join 2 million learners.** Teachers recommend it.*** Try it free for 30 days.†”

Fine print
* Average gain on StudyLoop’s own practice quiz among users who finished all 40 lessons, compared with each user’s first practice quiz.
** Accounts created since 2019, including accounts no longer in use.
*** From a survey of 50 teachers who had been given a free classroom license.
† A card is required for the trial. The yearly plan, $59.99, is charged on day 15 of the trial and refunded in full if the trial is cancelled by day 30.`,

    council: `Transcript of a student council meeting about the spring dance (fictional)

MAYA (chair): We have $600. The gym costs $200, which leaves $400 for music and food.
LEO: A DJ quoted us $350.
PRIYA: So if we hire the DJ, food has to come out of $50?
LEO: That’s right.
SAM: What if we use a playlist and put the whole $400 into food?
MAYA: Let me make sure I have both plans. Leo’s is a DJ and almost no food; Sam’s is food and a playlist. Is that right?
PRIYA: Yes. And last year’s survey ranked food above music.
LEO: Can we also talk about moving the dance to Friday?
MAYA: Let’s hold that for next week. The vote on Sam’s plan is four in favor and one against. Sam’s plan passes.`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: Q[set], stem, options, explanation
  });

  const rebuilt = [
    /* ---- Research: a bulletin with notes and a student's notecards ---- */
    item("LF359", "language", "Frost fans — marginal", ["vocabulary", "research"], ["vocab-context", "vocab-strategies"], "fans",
      "As the bulletin uses it in sentence 6, marginal most nearly means—",
      [o("LF359-page", "written in the margin of a page",
          "That is a real sense of the word, but the bulletin defines its own use after the colon."),
       o("LF359-profit", "barely worth what it costs to run",
          "This is the common business sense. The bulletin never discusses cost; it defines marginal by when the fans matter."),
       o("LF359-threshold", "deciding the outcome only near a cutoff",
          "“One that decides the crop only on nights already close to the damage line.”", true),
       o("LF359-weak", "too weak to change temperatures",
          "Sentence 3 reports a 2.5°F gain, so the fans do change temperatures.")],
      "When a passage defines a word after a colon, that definition outranks the word’s everyday senses."),

    item("LF360", "language", "Frost fans — a misquotation", ["research"], ["research-citation"], "fans",
      "Which notecard changes the words of the sentence it quotes?",
      [o("LF360-a", "Card A",
          "Sentence 3 has no “on every frost night.” The card adds those words, and sentence 4 names nights when the fans made no difference.", true),
       o("LF360-b", "Card B",
          "Card B is a paraphrase without quotation marks, so it does not claim to give the bulletin’s words."),
       o("LF360-c", "Card C",
          "Card C is a paraphrase. Its problem, if any, is its citation, not its wording."),
       o("LF360-none", "no card",
          "Card A puts a word inside quotation marks that sentence 3 does not contain.")],
      "Quotation marks promise the source’s exact words. Compare each quoted card word for word."),

    item("LF361", "language", "Frost fans — the wrong note", ["research"], ["research-citation", "evidence-credibility"], "fans",
      "Which notecard credits its claim to the wrong note?",
      [o("LF361-a", "Card A",
          "Card A cites sentence 3, which is where its figure comes from."),
       o("LF361-b", "Card B",
          "The noise complaint is in sentence 5, which carries note 2, so Card B’s citation is right."),
       o("LF361-c", "Card C",
          "The 22°F nights are in sentence 4, which carries note 1, the station readings. Card C cites note 2, the interviews.", true),
       o("LF361-none", "no card",
          "Card C’s claim comes from a sentence marked with note 1, but the card cites note 2.")],
      "Follow each claim back to the sentence it comes from, then read the note number on that sentence."),

    item("LF362", "language", "Frost fans — the damage line", ["research"], ["informational-texts"], "fans",
      "According to the notes, open blossoms at full bloom are killed below about—",
      [o("LF362-22", "22°F",
          "22°F is how cold the whole valley got on two nights, from sentence 4."),
       o("LF362-26", "26°F",
          "Note 3: “about 26°F at full bloom for the valley’s main variety.”", true),
       o("LF362-32", "32°F",
          "32°F is the freezing point of water. The bulletin gives its own figure."),
       o("LF362-28", "28°F",
          "28°F is a figure often given for blossoms elsewhere. This bulletin gives its own: 26°F.")],
      "Footnotes often carry the definitions a reader needs. Note 3 defines the damage line and gives its value."),

    item("LF363", "language", "Frost fans — what the figure compares", ["research"], ["informational-texts", "evidence-credibility"], "fans",
      "The 2.5°F figure in sentence 3 compares—",
      [o("LF363-onoff", "the same block on frost nights with its fan on and with it off",
          "Each fan “was run on some frost nights and left off on others”; the 2.5°F is the difference for its own block.", true),
       o("LF363-neighbors", "blocks with a fan and nearby blocks with no fan",
          "This is the usual design for such a trial, but this one compared each block with itself, fan on and fan off."),
       o("LF363-height", "the air at blossom height and the air 40 feet up",
          "Sentence 1 says the upper layer is warmer but gives no figure for the difference."),
       o("LF363-midnight", "farms that ran fans all night and farms that waited until midnight",
          "Sentence 5 says two farms waited until midnight but reports no temperature for them.")],
      "Before using a number, find exactly which two things it compares."),

    /* ---- Argument: a numbered public comment ---- */
    item("LF364", "writing", "Library comment — the request", ["fallacies", "persuasive"], ["persuasive-texts", "persuasive-writing"], "comment",
      "Which sentence states what the speaker asks the board to do?",
      [o("LF364-1", "Sentence 1",
          "Sentence 1 names the topic, the plan to close on Saturdays, but asks for nothing."),
       o("LF364-5", "Sentence 5",
          "Sentence 5 frames the board’s choice; it is not the request."),
       o("LF364-8", "Sentence 8",
          "“I ask the board to keep Saturday hours for one more year and to ask the transit office to restore the weekend route.”", true),
       o("LF364-9", "Sentence 9",
          "Sentence 9 says what the speaker will do if visits do not recover.")],
      "The claim of a speech is often not its first sentence. Look for the sentence that asks for an action."),

    item("LF365", "writing", "Library comment — the concession", ["fallacies", "persuasive"], ["persuasive-texts", "rhetorical-appeals"], "comment",
      "In which sentence does the speaker grant a point to the district?",
      [o("LF365-3", "Sentence 3",
          "“That figure is accurate, and I will not pretend otherwise.”", true),
       o("LF365-4", "Sentence 4",
          "Sentence 4 begins “But” and answers the district’s figure with a cause."),
       o("LF365-6", "Sentence 6",
          "Sentence 6 reports what some board members say; the speaker does not agree with it."),
       o("LF365-7", "Sentence 7",
          "Sentence 7 argues against the board members’ suggestion.")],
      "A concession accepts something the other side says before the speaker answers it."),

    item("LF366", "writing", "Library comment — a false choice", ["fallacies"], ["persuasive-texts", "persuasive-writing"], "comment",
      "Which sentence offers only two options when others exist?",
      [o("LF366-4", "Sentence 4",
          "Sentence 4 offers a cause for the drop; it does not limit the board to two choices."),
       o("LF366-5", "Sentence 5",
          "“Either the board keeps Saturday hours or it admits it no longer cares” leaves out other possibilities, such as the evening slot raised in sentence 6.", true),
       o("LF366-7", "Sentence 7",
          "Sentence 7 has a different flaw: it generalizes from one visit."),
       o("LF366-8", "Sentence 8",
          "Sentence 8 is a request with two parts, not a choice between two options.")],
      "A false dilemma presents two options as the only ones. The speech itself mentions a third."),

    item("LF367", "writing", "Library comment — one case", ["fallacies"], ["persuasive-texts", "evidence-credibility"], "comment",
      "Which sentence draws a general conclusion from a single instance?",
      [o("LF367-2", "Sentence 2",
          "Sentence 2 reports a figure from two years of visits, not a single instance."),
       o("LF367-4", "Sentence 4",
          "Sentence 4 links a pattern to a cause; it is not built on one event."),
       o("LF367-7", "Sentence 7",
          "One neighbor’s one Tuesday becomes “evening hours will fail.”", true),
       o("LF367-9", "Sentence 9",
          "Sentence 9 is a promise about the future, not a conclusion from a case.")],
      "A hasty generalization moves from one example to a rule. Find the sentence built on one person’s one visit."),

    item("LF368", "writing", "Library comment — the cause offered", ["fallacies", "persuasive"], ["persuasive-texts"], "comment",
      "Which sentence offers an explanation for the drop in Saturday visits?",
      [o("LF368-2", "Sentence 2",
          "Sentence 2 reports the drop but does not explain it."),
       o("LF368-4", "Sentence 4",
          "Sentence 4 ties the drop to the end of the weekend bus route.", true),
       o("LF368-6", "Sentence 6",
          "Sentence 6 is about a possible replacement for Saturday hours."),
       o("LF368-9", "Sentence 9",
          "Sentence 9 depends on the explanation in sentence 4 but does not give it.")],
      "Separate the sentence that reports a fact from the sentence that explains it."),

    /* ---- Technical: rules that differ from the usual defaults ---- */
    item("LF369", "reading", "Bus pass — replacement fees", ["technical"], ["technical-texts"], "buspass",
      "A student loses her pass in September and again in November of the same semester. What has she paid in replacement fees?",
      [o("LF369-10", "$10",
          "This charges $5 twice. Section 3 raises the price after the first replacement."),
       o("LF369-15", "$15",
          "$15 is the second replacement alone. The first one cost $5."),
       o("LF369-20", "$20",
          "$5 for the first replacement plus $15 for the second.", true),
       o("LF369-30", "$30",
          "This charges $15 twice. The first replacement in a semester costs $5.")],
      "Read which replacement each fee applies to. The price changes after the first one."),

    item("LF370", "reading", "Bus pass — hours", ["technical"], ["technical-texts"], "buspass",
      "Which of these rides does a student pass cover?",
      [o("LF370-sat11", "Saturday at 11:00 a.m.",
          "Section 1: “on Saturdays until noon.”", true),
       o("LF370-sat1", "Saturday at 1:00 p.m.",
          "Saturday coverage ends at noon."),
       o("LF370-sun10", "Sunday at 10:00 a.m.",
          "The pass “is not valid on Sundays.”"),
       o("LF370-wed730", "Wednesday at 7:30 p.m.",
          "Weekday coverage ends at 7:00 p.m.")],
      "Each day has its own hours. Check the day first, then the time."),

    item("LF371", "reading", "Bus pass — suspensions", ["technical"], ["technical-texts"], "buspass",
      "A student’s pass is suspended for twenty school days. How many warnings for misuse has the student received?",
      [o("LF371-1", "one",
          "Section 5 sets no suspension after a single warning."),
       o("LF371-2", "two",
          "A second warning brings five school days, not twenty."),
       o("LF371-3", "three",
          "“A third suspends it for twenty.”", true),
       o("LF371-4", "four",
          "Twenty days is the penalty for the third warning; the rules do not mention a fourth.")],
      "Match the penalty to the warning that triggers it."),

    item("LF372", "reading", "Bus pass — eligibility", ["technical"], ["technical-texts"], "buspass",
      "A student lives 1.2 miles from her school. Under the rules, she—",
      [o("LF372-free", "receives a pass free of charge",
          "Free passes go to students who live 1.5 miles or more away."),
       o("LF372-buy20", "may buy a pass for $20 a semester",
          "Section 2: “A student who lives closer may buy a pass for $20 a semester.”", true),
       o("LF372-buy5", "may buy a pass for $5 a semester",
          "$5 is the first replacement fee in section 3, not the price of a pass."),
       o("LF372-none", "may not ride the bus with a pass",
          "Section 2 lets students who live closer buy a pass.")],
      "Many districts simply exclude students inside the distance limit. This one sells them a pass."),

    item("LF373", "reading", "Bus pass — guests", ["technical"], ["technical-texts"], "buspass",
      "When may a student bring an adult guest free of charge?",
      [o("LF373-anyday", "on any school day, with a teacher’s signed slip",
          "Section 4 limits guests to field-trip days."),
       o("LF373-trip-teacher", "on field-trip days, with a teacher’s signed slip",
          "“On field-trip days only, a student may bring one adult guest free of charge with the teacher’s signed slip.”", true),
       o("LF373-saturday", "on Saturday mornings, with a teacher’s signed slip",
          "Saturday mornings are part of the pass’s hours, not a guest rule."),
       o("LF373-trip-parent", "on field-trip days, with a parent’s signed note",
          "The day is right, but the slip must come from the teacher.")],
      "A rule with two conditions needs both. Check the day and who signs."),

    /* ---- Conventions: a numbered draft ---- */
    item("LF374", "language", "Plant sale — comma splice", ["mechanics"], ["mechanics", "punctuation-basics"], "plantsale",
      "Which sentence is a comma splice?",
      [o("LF374-2", "Sentence 2",
          "The comma in sentence 2 sets off an appositive phrase, not a second clause."),
       o("LF374-3", "Sentence 3",
          "“The tomatoes sold out by ten” and “the peppers lasted until noon” are complete clauses joined by a comma alone.", true),
       o("LF374-5", "Sentence 5",
          "Sentence 5 has a different error: its opening phrase has nothing to modify."),
       o("LF374-8", "Sentence 8",
          "The comma in sentence 8 comes before a dependent clause beginning with “since,” which is correct.")],
      "A comma splice joins two independent clauses with only a comma."),

    item("LF375", "language", "Plant sale — agreement", ["usage"], ["agreement-usage", "grammar-usage"], "plantsale",
      "Which sentence has a subject and verb that do not agree?",
      [o("LF375-1", "Sentence 1",
          "“Our school holds”: singular subject, singular verb."),
       o("LF375-4", "Sentence 4",
          "The subject is “Each,” which is singular, so the verb should be “was.”", true),
       o("LF375-6", "Sentence 6",
          "Sentence 6 has a pronoun problem, not a verb problem."),
       o("LF375-7", "Sentence 7",
          "“School … sells”: singular subject, singular verb.")],
      "The subject of “Each of the volunteers” is “Each.” The phrase after “of” does not change it."),

    item("LF376", "language", "Plant sale — dangling modifier", ["usage"], ["grammar-usage", "sentence-craft"], "plantsale",
      "Which sentence opens with a phrase that has no word to modify?",
      [o("LF376-3", "Sentence 3",
          "Sentence 3 is a comma splice; it does not open with a modifying phrase."),
       o("LF376-5", "Sentence 5",
          "“Arriving early” attaches to “the tables,” which did not arrive. No one who arrived is named.", true),
       o("LF376-6", "Sentence 6",
          "The opening clause of sentence 6 has its own subject, “a customer.”"),
       o("LF376-8", "Sentence 8",
          "“This year” is a time phrase and modifies the whole clause correctly.")],
      "An opening participle must describe the subject that follows the comma."),

    item("LF377", "language", "Plant sale — unclear pronoun", ["usage"], ["grammar-usage", "agreement-usage"], "plantsale",
      "In which sentence could a pronoun refer to either of two people?",
      [o("LF377-4", "Sentence 4",
          "Sentence 4 has no pronoun referring to a person."),
       o("LF377-5", "Sentence 5",
          "Sentence 5 has no pronoun at all."),
       o("LF377-6", "Sentence 6",
          "“They” could be the customer or the volunteer, and it is plural for two singular nouns.", true),
       o("LF377-7", "Sentence 7",
          "“My cousin’s school” is clear; no pronoun is ambiguous.")],
      "When two people come before a pronoun, check that a reader can tell which one it means."),

    item("LF378", "language", "Plant sale — off purpose", ["revision"], ["writing-process", "essay-structure"], "plantsale",
      "Which sentence does least to serve the paragraph’s purpose of describing this school’s sale?",
      [o("LF378-1", "Sentence 1",
          "Sentence 1 introduces the sale and its purpose."),
       o("LF378-2", "Sentence 2",
          "Sentence 2 reports what the sale earned."),
       o("LF378-7", "Sentence 7",
          "A cousin’s school in another state that sells pies says nothing about this school’s plant sale.", true),
       o("LF378-8", "Sentence 8",
          "Sentence 8 looks ahead to this year’s sale.")],
      "Every sentence should help the paragraph do what it sets out to do."),

    item("LF379", "language", "Plant sale — the earlier year", ["revision"], ["informational-texts"], "plantsale",
      "According to sentence 2, what did the sale earn the year before last year?",
      [o("LF379-under700", "less than $700",
          "$1,400 was “more than twice” the year before, so the year before was under $700.", true),
       o("LF379-700", "exactly $700",
          "Exactly $700 would make $1,400 exactly twice, not more than twice."),
       o("LF379-2800", "more than $2,800",
          "This doubles last year’s figure instead of halving it."),
       o("LF379-1400", "about $1,400",
          "$1,400 is last year’s figure.")],
      "“More than twice what it earned” sets an upper limit on the earlier figure. Halve $1,400 and read the direction."),

    /* ---- Persuasion: an ad and its fine print ---- */
    item("LF380", "reading", "Study app ad — the 18 points", ["persuasive", "rhetoric"], ["persuasive-texts", "evidence-credibility"], "studyloop",
      "According to the fine print, the 18-point gain compares users with—",
      [o("LF380-nonusers", "students who did not use the app",
          "The usual way to read an ad’s comparison. The fine print compares users only with themselves."),
       o("LF380-first", "their own first practice quiz",
          "“Compared with each user’s first practice quiz.”", true),
       o("LF380-state", "the state average on a state test",
          "The gain is on StudyLoop’s own practice quiz, not a state test."),
       o("LF380-fewer", "users who finished fewer lessons",
          "Only users who finished all 40 lessons are counted, and they are compared with their own first quiz.")],
      "An ad’s footnote says what its headline number measures. Read it before believing the headline."),

    item("LF381", "reading", "Study app ad — 2 million", ["persuasive", "rhetoric"], ["persuasive-texts", "rhetorical-appeals"], "studyloop",
      "The figure of 2 million learners counts—",
      [o("LF381-year", "accounts opened in the past year, used or not",
          "The count runs from 2019, not from the past year."),
       o("LF381-accounts", "accounts opened from 2019 on, used or not",
          "“Accounts created since 2019, including accounts no longer in use.”", true),
       o("LF381-downloads", "downloads of the app, repeat downloads included",
          "The fine print counts accounts, not downloads."),
       o("LF381-lesson", "students who finished at least one lesson",
          "The fine print counts accounts “including accounts no longer in use,” with no lesson required.")],
      "A bandwagon number is only as large as what it counts. Here it includes accounts no one uses."),

    item("LF382", "reading", "Study app ad — the teachers", ["persuasive", "rhetoric"], ["persuasive-texts", "evidence-credibility"], "studyloop",
      "The teachers whose recommendation the ad cites—",
      [o("LF382-random", "were chosen at random from the app’s users",
          "The fine print gives no sampling method; it says how the teachers were connected to the company."),
       o("LF382-paid", "were paid to appear in the ad",
          "The fine print mentions no payment."),
       o("LF382-license", "had been given a free classroom license",
          "“A survey of 50 teachers who had been given a free classroom license.”", true),
       o("LF382-count", "numbered about 2,000 in all",
          "The survey covered 50 teachers.")],
      "Ask who was asked and what they had received. A free license is a reason to discount the recommendation."),

    item("LF383", "reading", "Study app ad — the trial", ["persuasive"], ["persuasive-texts", "technical-texts"], "studyloop",
      "A user starts the free trial on June 1 and never cancels. When is she first charged $59.99?",
      [o("LF383-june15", "on June 15",
          "The fine print charges the yearly plan “on day 15 of the trial.” June 1 is day 1.", true),
       o("LF383-july1", "on July 1",
          "This assumes the charge comes after a 30-day trial ends. Here it comes on day 15; day 30 is only the refund deadline."),
       o("LF383-june30", "on June 30",
          "Day 30 is the last day to cancel for a refund, not the day of the charge."),
       o("LF383-june1", "on June 1",
          "A card is taken at signup, but the charge comes on day 15, not on day 1.")],
      "A free trial can still charge during the trial. Read when the charge falls, not only when the trial ends."),

    /* ---- Discussion: a meeting transcript ---- */
    item("LF384", "oral", "Council transcript — checking a consequence", ["discussion"], ["group-discussion"], "council",
      "Who asks a question to check what another member’s proposal would mean for the budget?",
      [o("LF384-maya", "Maya",
          "Maya restates both plans later, but her question is about whether she has them right."),
       o("LF384-leo", "Leo",
          "Leo gives the DJ’s price and later raises a new topic."),
       o("LF384-priya", "Priya",
          "“So if we hire the DJ, food has to come out of $50?”", true),
       o("LF384-sam", "Sam",
          "Sam’s question proposes a new plan rather than checking Leo’s.")],
      "A clarifying question works out what a proposal implies. It does not offer a new one."),

    item("LF385", "oral", "Council transcript — summarizing", ["discussion"], ["group-discussion"], "council",
      "Who sums up the two proposals before the vote?",
      [o("LF385-sam", "Sam",
          "Sam makes one of the two proposals."),
       o("LF385-priya", "Priya",
          "Priya confirms the summary and adds the survey result."),
       o("LF385-leo", "Leo",
          "Leo makes the other proposal and then raises a new topic."),
       o("LF385-maya", "Maya",
          "“Leo’s is a DJ and almost no food; Sam’s is food and a playlist.”", true)],
      "A chair often paraphrases the positions and checks them before calling a vote."),

    item("LF386", "oral", "Council transcript — the postponed topic", ["discussion"], ["group-discussion"], "council",
      "Whose topic does the chair put off until next week?",
      [o("LF386-leo", "Leo’s",
          "Leo asks to talk about moving the dance to Friday, and Maya says, “Let’s hold that for next week.”", true),
       o("LF386-sam", "Sam’s",
          "Sam’s plan is voted on and passes."),
       o("LF386-priya", "Priya’s",
          "Priya raises the survey, which supports the plan that passes."),
       o("LF386-maya", "Maya’s",
          "Maya is the one who postpones the topic.")],
      "Keeping to the agenda means placing a new topic, not ignoring it."),

    item("LF387", "oral", "Council transcript — the plan that passed", ["discussion"], ["group-discussion"], "council",
      "Under the plan that passed, how much goes to food?",
      [o("LF387-50", "$50",
          "$50 is what would be left for food under Leo’s plan."),
       o("LF387-200", "$200",
          "$200 is the cost of the gym."),
       o("LF387-350", "$350",
          "$350 is the DJ’s quote."),
       o("LF387-400", "$400",
          "Sam’s plan, which passed, puts “the whole $400 into food.”", true)],
      "Several numbers in a discussion belong to different plans. Find which plan passed, then its figure.")
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  rebuilt.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items, rebuilt);
})();
