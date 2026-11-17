/* Form B and remaining Field 02-style formats.
   Original or public-domain only. Not Pearson, Quizlet, or licensed modern works.
   Distractors are meant to be almost right: overclaim, wrong speaker, adjacent term,
   or a true detail that is not the controlling idea. Joke options (haiku, blender, bus timetable) are out. */
(function () {
  const P = {
    equiano: `From Olaudah Equiano, The Interesting Narrative (1789):

I remember, in the vessel in which I was brought over, in the men’s apartment, there were several brothers, who, in the sale, were sold in different lots; and it was very moving on this occasion, to see and hear their cries at parting. O, ye nominal Christians! might not an African ask you—Learned you this from your God, who says unto you, Do unto all men as you would men should do unto you?

I saw, during our passage, many of these my unfortunate countrymen thrown overboard. I asked the sailors, if these people were not to be eaten? They answered, No. I then asked, why they were thrown overboard? They said, they were sick, and would not live. I have since seen the same thing practised in the West Indies.

One day they had taken a number of fishes; and when they had done, they brought some of the remaining fish, of which they had more than they could use, and instead of tossing them over to us, as we expected, they tossed them back into the sea, though we begged and prayed for some. This, and many more instances, served to increase the astonishment I had at the manners of the whites.`,

    daffodils: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,

    caesar: `[Rome. The Forum. Brutus has spoken. Enter ANTONY with Caesar’s body.]

ANTONY.
Friends, Romans, countrymen, lend me your ears;
I come to bury Caesar, not to praise him.
The evil that men do lives after them;
The good is oft interred with their bones;
So let it be with Caesar. The noble Brutus
Hath told you Caesar was ambitious:
If it were so, it was a grievous fault,
And grievously hath Caesar answer’d it.
Here, under leave of Brutus and the rest—
For Brutus is an honourable man;
So are they all, all honourable men—
Come I to speak in Caesar’s funeral.

He was my friend, faithful and just to me:
But Brutus says he was ambitious;
And Brutus is an honourable man.
He hath brought many captives home to Rome,
Whose ransoms did the general coffers fill:
Did this in Caesar seem ambitious?
When that the poor have cried, Caesar hath wept:
Ambition should be made of sterner stuff:
Yet Brutus says he was ambitious;
And Brutus is an honourable man.

You all did see that on the Lupercal
I thrice presented him a kingly crown,
Which he did thrice refuse: was this ambition?
Yet Brutus says he was ambitious;
And, sure, he is an honourable man.
I speak not to disprove what Brutus spoke,
But here I am to speak what I do know.`,

    paine: `From Thomas Paine, Common Sense (1776):

Society in every state is a blessing, but government even in its best state is but a necessary evil; in its worst state an intolerable one; for when we suffer, or are exposed to the same miseries by a government, which we might expect in a country without government, our calamity is heightened by reflecting that we furnish the means by which we suffer. Government, like dress, is the badge of lost innocence; the palaces of kings are built on the ruins of the bowers of paradise.

For were the impulses of conscience clear, uniform, and irresistibly obeyed, man would need no other lawgiver; but that not being the case, he finds it necessary to surrender up a part of his property to furnish means for the protection of the rest; and this he is induced to do by the same prudence which in every other case advises him out of two evils to choose the least. Wherefore, security being the true design and end of government, it unanswerably follows that whatever form thereof appears most likely to ensure it to us, with the least expence and greatest benefit, is preferable to all others.`,

    swift: `From Jonathan Swift, A Modest Proposal (1729):

It is a melancholy object to those who walk through this great town or travel in the country, when they see the streets, the roads, and cabin doors, crowded with beggars of the female sex, followed by three, four, or six children, all in rags and importuning every passenger for an alms. These mothers, instead of being able to work for their honest livelihood, are forced to employ all their time in strolling to beg sustenance for their helpless infants: who as they grow up either turn thieves for want of work, or leave their dear native country to fight for the Pretender in Spain, or sell themselves to the Barbadoes.

I think it is agreed by all parties that this prodigious number of children in the arms, or on the backs, or at the heels of their mothers, and frequently of their fathers, is in the present deplorable state of the kingdom a very great additional grievance; and, therefore, whoever could find out a fair, cheap, and easy method of making these children sound, useful members of the commonwealth, would deserve so well of the public as to have his statue set up for a preserver of the nation.

I shall now therefore humbly propose my own thoughts, which I hope will not be liable to the least objection.`,

    odyssey: `From Homer, The Odyssey, trans. S. H. Butcher and A. Lang (public-domain English):

Tell me, Muse, of that man, so ready at need, who wandered far and wide, after he had sacked the sacred citadel of Troy, and many were the men whose towns he saw and whose mind he learnt, yea, and many the woes he suffered in his heart upon the deep, striving to win his own life and the return of his company. Nay, but even so he saved not his company, though he desired it sore. For through the blindness of their own hearts they perished, fools, who devoured the oxen of Helios Hyperion: but the god took from them their day of returning. Of these things, goddess, daughter of Zeus, beginning where thou wilt, speak thou also to us.`,

    declaration: `From the Declaration of Independence (1776):

We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.—That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,—That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness.`,

    captain: `O Captain! my Captain! our fearful trip is done,
The ship has weather'd every rack, the prize we sought is won,
The port is near, the bells I hear, the people all exulting,
While follow eyes the steady keel, the vessel grim and daring;
But O heart! heart! heart!
O the bleeding drops of red,
Where on the deck my Captain lies,
Fallen cold and dead.

O Captain! my Captain! rise up and hear the bells;
Rise up—for you the flag is flung—for you the bugle trills,
For you bouquets and ribbon'd wreaths—for you the shores a-crowding,
For you they call, the swaying mass, their eager faces turning;
Here Captain! dear father!
This arm beneath your head!
It is some dream that on the deck,
You've fallen cold and dead.`
  };

  const items = [
    { id: "LF070", domain: "literature", title: "Equiano — apostrophe", difficulty: "hard", tags: ["figurative", "longform"], skillIds: ["figurative-language", "prose-drama-analysis"], passageSet: "equiano", passage: P.equiano,
      stem: "“O, ye nominal Christians!” is best identified as—",
      choices: [
        "an aside to the sailors on deck, unheard by the wider reading public",
        "apostrophe: he turns to address an absent audience he accuses",
        "soliloquy: he debates privately whether to convert",
        "verbal irony: he pretends that the captors had kept the Golden Rule"
      ], answer: 1,
      explanation: "He turns from narrative to address professed Christians who are not in the scene. An aside is a stage whisper to those present. A soliloquy is private self-speech. The irony is in “nominal,” but the device of the line is the address itself." },

    { id: "LF071", domain: "literature", title: "Equiano — purpose", difficulty: "hard", tags: ["context", "longform"], skillIds: ["literature-context", "prose-drama-analysis"], passageSet: "equiano", passage: P.equiano,
      stem: "A chief purpose of the fish episode is to—",
      choices: [
        "explain why the sick captives were thrown overboard during the voyage",
        "show waste and indifference so the reader judges the captors",
        "show that he already understood shipboard custom before he asked",
        "record the later reunion of the brothers who were sold in separate lots"
      ], answer: 1,
      explanation: "Unused fish tossed back while captives beg is moral evidence that “increase[s] the astonishment…at the manners of the whites.” {{opt:LF071-0}} confuses this episode with the earlier throwing-overboard. {{opt:LF071-2}} is the opposite of his questioning. {{opt:LF071-3}} is not in the excerpt." },

    { id: "LF072", domain: "literature", title: "Equiano — irony", difficulty: "hard", tags: ["irony", "longform"], skillIds: ["figurative-language", "literature-context"], passageSet: "equiano", passage: P.equiano,
      stem: "Calling the captors “nominal Christians” is ironic because—",
      choices: [
        "they claim the Golden Rule he quotes and break it",
        "they have not yet done anything cruel in the excerpt",
        "they quoted the Golden Rule to him when he asked",
        "nominal means Christian in practice but not in name"
      ], answer: 0,
      explanation: "Nominal = in name. He juxtaposes “Do unto all men” with the sale and the throwings-overboard. {{opt:LF072-1}} is false: the address follows the brothers’ sale. {{opt:LF072-2}} reverses who quotes the Rule. {{opt:LF072-3}} inverts the meaning of nominal." },

    { id: "LF073", domain: "literature", title: "Equiano — inference", difficulty: "hard", tags: ["narrative", "longform"], skillIds: ["prose-drama-analysis"], passageSet: "equiano", passage: P.equiano,
      stem: "The excerpt most strongly supports the inference that Equiano—",
      choices: [
        "knew shipboard customs before he boarded",
        "asks about what he sees and revises his view from the answers",
        "leaves other Africans out of his account",
        "found the whites’ manners just as he had expected"
      ], answer: 1,
      explanation: "He asks if the thrown-overboard will be eaten, then records the sick-and-would-not-live answer and later West Indian repetition. He describes brothers and countrymen. The fish episode increases astonishment; it does not confirm prior expectation." },

    { id: "LF074", domain: "literature", title: "Wordsworth — simile", difficulty: "hard", tags: ["figurative", "longform"], skillIds: ["figurative-language", "poetry-forms"], passageSet: "daffodils", passage: P.daffodils,
      stem: "The opening comparison “lonely as a cloud” is—",
      choices: [
        "a simile that sets the speaker apart",
        "a metaphor that makes the speaker and the cloud one thing",
        "personification that gives the cloud the daffodils’ dance",
        "an invocation asking the cloud to tell the tale"
      ], answer: 0,
      explanation: "Like/as plus loneliness sets up the later host. It is not a metaphor (as is present), not yet the flowers’ personification, and not a muse-address." },

    { id: "LF075", domain: "literature", title: "Wordsworth — personification", difficulty: "hard", tags: ["figurative", "longform"], skillIds: ["figurative-language"], passageSet: "daffodils", passage: P.daffodils,
      stem: "“Tossing their heads in sprightly dance” is primarily—",
      choices: [
        "personification: the flowers have heads and dance",
        "simile: the flowers are compared to dancers with like",
        "understatement: the scene is made to seem plain",
        "apostrophe: the speaker speaks to the daffodils"
      ], answer: 0,
      explanation: "Heads and dance assign human motion to daffodils without like/as. The speaker is not yet saying “O daffodils,” and the image is vivid, not understated." },

    { id: "LF076", domain: "literature", title: "Wordsworth — theme", difficulty: "hard", tags: ["theme", "longform"], skillIds: ["narrative-elements", "literary-periods"], passageSet: "daffodils", passage: P.daffodils,
      stem: "The last stanza most clearly claims that—",
      choices: [
        "memory of the scene returns as wealth in solitude",
        "the pleasure lasts only while he stands by the lake",
        "solitude is empty until other people join him",
        "the inward eye brings regret that he ignored the scene"
      ], answer: 0,
      explanation: "Inward eye / bliss of solitude / heart fills. He “little thought” the wealth at the time, but the close is restoration, not leftover regret or a need for human company." },

    { id: "LF077", domain: "literature", title: "Wordsworth — period", difficulty: "hard", tags: ["periods", "longform"], skillIds: ["literary-periods"], passageSet: "daffodils", passage: P.daffodils,
      stem: "The poem’s habits (solitary walker, nature as joy, memory restoring the self) best fit—",
      choices: [
        "Enlightenment satire in heroic couplets",
        "British Romantic lyric",
        "Naturalist novel of the city",
        "Neoclassical pastoral"
      ], answer: 1,
      explanation: "Nature + individual feeling + inward eye is Romantic, not Popean satire, documentary Naturalism, or a courtly pastoral of rank." },

    { id: "LF078", domain: "literature", title: "Caesar — dramatic situation", difficulty: "hard", tags: ["drama", "longform"], skillIds: ["prose-drama-analysis"], passageSet: "caesar", passage: P.caesar,
      stem: "Antony’s opening line is spoken—",
      choices: [
        "as an aside to Caesar’s body, unheard by the citizens around him",
        "to the crowd, after Brutus has called Caesar ambitious",
        "as a soliloquy in an empty Forum",
        "in Brutus’s voice, repeating the conspirators’ charge against Caesar"
      ], answer: 1,
      explanation: "The heading and “Brutus hath told you” place a funeral oration before citizens. It is not empty-stage solitude, an aside to the corpse, or Brutus speaking." },

    { id: "LF079", domain: "literature", title: "Caesar — verbal irony", difficulty: "hard", tags: ["irony", "longform"], skillIds: ["figurative-language", "prose-drama-analysis"], passageSet: "caesar", passage: P.caesar,
      stem: "Repeated “Brutus is an honourable man” works primarily as—",
      choices: [
        "sincere praise that asks the crowd to trust Brutus’s judgment of Caesar",
        "verbal irony: praise that undercuts Brutus more each time",
        "dramatic irony: the crowd already distrusts Brutus",
        "apostrophe: Antony speaks to the absent Brutus"
      ], answer: 1,
      explanation: "Each repetition follows evidence that undercuts “ambitious.” The praise becomes a blade. Dramatic irony here runs the other way: the audience hears the strategy before the crowd fully does. He talks about Brutus, not to him." },

    { id: "LF080", domain: "literature", title: "Caesar — rhetorical question", difficulty: "hard", tags: ["rhetoric", "longform"], skillIds: ["rhetorical-appeals", "speech-craft"], passageSet: "caesar", passage: P.caesar,
      stem: "“Did this in Caesar seem ambitious?” after the ransoms and the refused crown is meant to—",
      choices: [
        "invite the crowd to give its own definition of ambition before he does",
        "lead the crowd to answer no without calling Brutus a liar",
        "concede that Caesar’s refusing the crown three times was ambition",
        "close the argument he has just promised the crowd he will not make"
      ], answer: 1,
      explanation: "Rhetorical questions plus examples do the refutation while he still says he will not “disprove” Brutus. {{opt:LF080-0}} treats the question as sincere inquiry. {{opt:LF080-2}} reverses the implied answer. {{opt:LF080-3}} mistakes the disclaimer for a stop." },

    { id: "LF081", domain: "literature", title: "Caesar — audience knowledge", difficulty: "hard", tags: ["drama", "longform"], skillIds: ["prose-drama-analysis"], passageSet: "caesar", passage: P.caesar,
      stem: "The scene creates dramatic irony because—",
      choices: [
        "the audience has seen the murder and knows Antony’s aim",
        "the citizens know Antony means to turn them",
        "Antony does not yet know that Caesar is dead",
        "the audience has not heard of the Lupercal crown"
      ], answer: 0,
      explanation: "We know more than the wavering crowd about the conspiracy and Antony’s aims. Caesar’s body is present; the Lupercal refusal is prior action the crowd “all did see.” {{opt:LF081-1}} overstates the crowd’s knowledge at this point in the speech." },

    { id: "LF082", domain: "literature", title: "Caesar — purpose", difficulty: "hard", tags: ["drama", "longform"], skillIds: ["prose-drama-analysis", "speech-craft"], passageSet: "caesar", passage: P.caesar,
      stem: "Antony’s stated purpose (“to bury Caesar, not to praise him”) is best read as—",
      choices: [
        "a promise he keeps by listing only Caesar’s faults and failings",
        "a move to lower suspicion while the speech praises Caesar",
        "an admission that he accepts Brutus’s charge of ambition",
        "a request that the crowd go home and spare Brutus any more debate"
      ], answer: 1,
      explanation: "The disclaimer is strategy. He lists friendship, ransoms, tears, refused crown—praise that prosecutes. {{opt:LF082-2}} and {{opt:LF082-0}} treat the opening as sincere self-limitation." },

    { id: "LF083", domain: "reading", title: "Paine — analogy", difficulty: "hard", tags: ["rhetoric", "longform"], skillIds: ["rhetorical-appeals", "persuasive-texts"], passageSet: "paine", passage: P.paine,
      stem: "“Government, like dress, is the badge of lost innocence” is primarily—",
      choices: [
        "a simile: government marks a fallen state, unlike society",
        "a simile: government can restore paradise",
        "a metaphor: government and society are one",
        "a simile: government, like dress, can be set aside"
      ], answer: 0,
      explanation: "Like dress + badge of lost innocence. He still calls government a necessary evil for security and opens by splitting society (blessing) from government (evil). Palaces are built on ruined paradise, not a cure. Nor does he say government can be set aside: he calls it necessary for security." },

    { id: "LF084", domain: "reading", title: "Paine — central claim", difficulty: "hard", tags: ["persuasive", "longform"], skillIds: ["persuasive-texts"], passageSet: "paine", passage: P.paine,
      stem: "Paine’s governing criterion for a form of government is that it should—",
      choices: [
        "make each citizen’s conscience the only lawgiver for the community",
        "give security at the least expense and greatest benefit",
        "be borne in any form, as a blessing just like society itself",
        "take all of the citizens’ property for the state"
      ], answer: 1,
      explanation: "The last sentence states the test. He says conscience is not uniformly obeyed, so some government is needed—not that conscience can replace it. Worst-state government is “intolerable,” and only a part of property is surrendered." },

    { id: "LF085", domain: "reading", title: "Paine — period", difficulty: "hard", tags: ["periods", "longform"], skillIds: ["literary-periods", "literature-context"], passageSet: "paine", passage: P.paine,
      stem: "The passage’s habits (reasoned distinction, social-contract logic, public persuasion) best fit—",
      choices: [
        "Enlightenment political prose",
        "Romantic nature lyric",
        "Modernist collage",
        "Puritan spiritual autobiography"
      ], answer: 0,
      explanation: "Civic reason and pamphlet argument are Enlightenment. Not daffodil inwardness, fragment, or a conversion narrative." },

    { id: "LF086", domain: "reading", title: "Paine — diction", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["vocab-strategies"], passageSet: "paine", passage: P.paine,
      stem: "In “unanswerably follows,” unanswerably most nearly means—",
      choices: [
        "as a preference open to equally good replies",
        "as a conclusion no good reply can meet",
        "against the law that conscience supplies",
        "tentatively, as the lesser of two evils"
      ], answer: 1,
      explanation: "He presents the security test as a forced inference. Prudence chooses the lesser evil; “unanswerably” is the stronger claim that the criterion then follows. {{opt:LF086-2}} misreads conscience as already sufficient." },

    { id: "LF087", domain: "literature", title: "Swift — satire", difficulty: "hard", tags: ["satire", "longform"], skillIds: ["prose-drama-analysis", "literary-periods"], passageSet: "swift", passage: P.swift,
      stem: "The title and the promise of a “fair, cheap, and easy method” prepare the reader for—",
      choices: [
        "a sincere civic pamphlet whose humble tone is meant at face value",
        "satire: a reasonable voice about to propose something monstrous",
        "a lyric in which poverty becomes private comfort",
        "a treatise that will reject usefulness as a standard for public policy"
      ], answer: 1,
      explanation: "Modest + humble + statue for a preserver is the setup of ironic proposal. The famous “method” is cannibalism of children—the excerpt stops before the explicit proposal, but the satiric machinery is already visible. {{opt:LF087-3}} is tempting but backwards: the persona worships cheap usefulness." },

    { id: "LF088", domain: "literature", title: "Swift — tone", difficulty: "hard", tags: ["tone", "longform"], skillIds: ["narrative-elements"], passageSet: "swift", passage: P.swift,
      stem: "The tone of the opening is best described as—",
      choices: [
        "open fury that names the English as enemies",
        "grave, statistical concern that treats children as a public grievance",
        "playful understatement that treats begging in the streets as a small matter",
        "warm praise of mothers whose livelihood is secure"
      ], answer: 1,
      explanation: "Melancholy object + prodigious number + grievance is cold civic accounting. That chill is the satiric voice. The persona has not yet broken into open denunciation; “honest livelihood” is what mothers cannot reach." },

    { id: "LF089", domain: "literature", title: "Swift — purpose", difficulty: "hard", tags: ["context", "longform"], skillIds: ["literature-context", "analytical-writing"], passageSet: "swift", passage: P.swift,
      stem: "A reader who takes the speaker’s later “proposal” as Swift’s real policy has most likely—",
      choices: [
        "confused the ironic speaker with Swift himself",
        "rightly read the statue line as Swift’s own ambition",
        "shown that the opening’s melancholy rules out satire",
        "shown that satire cannot criticize a real public"
      ], answer: 0,
      explanation: "Satire uses a mask. The target is English/Irish policy and callous “usefulness.” Melancholy is part of the mask, not a disproof of satire. {{opt:LF089-1}} takes the persona’s vanity as the author’s." },

    { id: "LF090", domain: "literature", title: "Swift — period", difficulty: "hard", tags: ["periods", "longform"], skillIds: ["literary-periods"], passageSet: "swift", passage: P.swift,
      stem: "A Modest Proposal is most at home in which movement’s toolkit?",
      choices: [
        "Harlem Renaissance lyric",
        "Enlightenment or Augustan satire",
        "British Romantic lyric",
        "Naturalist reportage"
      ], answer: 1,
      explanation: "Public-issue prose irony is Augustan/Enlightenment. Adjacent periods either lyricize feeling, restore the self in nature, or claim documentary neutrality." },

    { id: "LF091", domain: "literature", title: "Odyssey — epic opening", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["world-literature", "poetry-forms"], passageSet: "odyssey", passage: P.odyssey,
      stem: "“Tell me, Muse…” is an example of—",
      choices: [
        "an epic invocation of the Muse",
        "an apostrophe asking Odysseus to tell his story",
        "an aside to the crew that later eats the oxen",
        "in medias res narration that begins at Troy"
      ], answer: 0,
      explanation: "Classic epic opening: muse, wanderer, Troy, withheld homecoming. Odysseus is the subject, not the addressee. The muse request is not an aside, and in medias res is invited later (“beginning where thou wilt”), not instead of the invocation." },

    { id: "LF092", domain: "literature", title: "Odyssey — in medias res", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["world-literature", "narrative-elements"], passageSet: "odyssey", passage: P.odyssey,
      stem: "“Beginning where thou wilt” after naming the wanderings most nearly invites—",
      choices: [
        "a strict chronology from the hero’s birth",
        "starting in the middle of a known story",
        "leaving out the crew’s death from the song",
        "Odysseus telling the story in his own voice"
      ], answer: 1,
      explanation: "The poet may start mid-myth. Listing key events in the invocation is not a mandate to tell them in biographical order. The company’s death is already named; the speaker is still the muse, not Odysseus." },

    { id: "LF093", domain: "literature", title: "Odyssey — theme", difficulty: "hard", tags: ["world-lit", "longform"], skillIds: ["world-literature"], passageSet: "odyssey", passage: P.odyssey,
      stem: "The company dies “through the blindness of their own hearts” primarily to—",
      choices: [
        "blame the men’s own choice to eat Helios’s oxen",
        "show that Odysseus did not want to save them",
        "place all the blame on Helios",
        "show that the wanderings were the crew’s punishment"
      ], answer: 0,
      explanation: "The opening splits his desire to save them from their transgression. He “saved not his company, though he desired it sore.” Helios takes their homecoming after the offense. The wanderings characterize the man, not the crew’s sentence alone." },

    { id: "LF110", domain: "reading", title: "Paine vs Declaration — shared premise", difficulty: "hard", tags: ["paired", "longform"], skillIds: ["persuasive-texts", "literature-context"], passageSet: "pair-liberty", passage: P.paine + "\n\n" + P.declaration,
      stem: "Both passages most clearly share the premise that government is legitimate when it—",
      choices: [
        "secures people’s safety or rights and can be judged by that",
        "is the same as society, which both call a blessing",
        "is fixed once founded and cannot be altered",
        "makes conscience the only lawgiver"
      ], answer: 0,
      explanation: "Paine: security as end; least expense/greatest benefit. Declaration: instituted to secure rights; alter or abolish if destructive. Paine distinguishes society from government and says conscience is not uniformly obeyed." },

    { id: "LF111", domain: "reading", title: "Paine vs Declaration — difference", difficulty: "hard", tags: ["paired", "longform"], skillIds: ["informational-texts", "persuasive-texts"], passageSet: "pair-liberty", passage: P.paine + "\n\n" + P.declaration,
      stem: "A difference in strategy is that the Declaration—",
      choices: [
        "makes no claim about equality at all, while Paine starts from equal security",
        "names self-evident rights and a right of revolution; Paine reasons from security",
        "calls government a necessary evil, while Paine calls it a natural blessing like society",
        "forbids citizens to judge their governments, while Paine offers a test of expense and benefit"
      ], answer: 1,
      explanation: "Rights language vs necessary-evil / dress analogy. The Declaration’s equality clause is famous; it does not forbid judging governments. {{opt:LF111-2}} reverses which text calls government an evil." },

    { id: "LF112", domain: "reading", title: "Paine vs Declaration — purpose", difficulty: "hard", tags: ["paired", "longform"], skillIds: ["rhetorical-appeals"], passageSet: "pair-liberty", passage: P.paine + "\n\n" + P.declaration,
      stem: "Both texts are best classified as—",
      choices: [
        "private meditations addressed to the writer’s conscience",
        "public arguments meant to justify a new civic order",
        "histories of particular kings",
        "nature lyrics about paradise and creation"
      ], answer: 1,
      explanation: "Pamphlet and founding declaration. Conscience and Creator are civic premises here, not a diary or a landscape poem. Neither excerpt is a chronicle of named kings." },

    { id: "LF113", domain: "reading", title: "Paine vs Declaration — vocab", difficulty: "hard", tags: ["vocabulary", "longform"], skillIds: ["vocab-strategies"], passageSet: "pair-liberty", passage: P.paine + "\n\n" + P.declaration,
      stem: "In the Declaration, unalienable most nearly means—",
      choices: [
        "transferable by consent, as offices are",
        "not able to be taken or given away",
        "self-evident only after a government fails",
        "reserved for those who found a new government"
      ], answer: 1,
      explanation: "Rights that cannot be alienated (handed off). They are named as already belonging to people, and they justify altering government—they are not created by the new one. Self-evident is a different claim in the same sentence." },

    { id: "LF122", domain: "literature", title: "Whitman — extended metaphor", difficulty: "hard", tags: ["figurative", "longform"], skillIds: ["figurative-language", "poetry-forms"], passageSet: "captain", passage: P.captain,
      stem: "The ship, prize, port, and captain function together as—",
      choices: [
        "a literal voyage about a crew and a port",
        "an extended metaphor for a nation’s war and its dead leader",
        "apostrophe alone, with no figure beyond the address",
        "dramatic irony: the crowd knows the captain is dead"
      ], answer: 1,
      explanation: "O Captain is an elegy using a ship-of-state figure. Apostrophe (“O Captain”) is present but does not exhaust the ship/prize/port cluster. The speaker knows the body is on deck; the crowd is the one still exulting." },

    { id: "LF123", domain: "literature", title: "Whitman — contrast", difficulty: "hard", tags: ["poetry", "longform"], skillIds: ["narrative-elements", "sound-devices"], passageSet: "captain", passage: P.captain,
      stem: "The bells, flag, and crowding shores are set against—",
      choices: [
        "the speaker’s hope that the captain will rise at the bugle",
        "the captain lying cold and dead on the deck",
        "a prize that has not yet been won",
        "a ship that failed to weather the storm"
      ], answer: 1,
      explanation: "Public victory vs private corpse; “some dream” is wished, then the refrain returns to the body. The trip is done and the prize won; the rack has been weathered. The bugle does not raise the captain." },

    { id: "LF124", domain: "literature", title: "Whitman — context", difficulty: "hard", tags: ["context", "longform"], skillIds: ["literature-context", "literary-periods"], passageSet: "captain", passage: P.captain,
      stem: "Read as a public elegy after a civil war, the poem most clearly treats victory as—",
      choices: [
        "incomplete while the leader lies dead on the deck",
        "a reason to join the exulting crowd and leave the body behind",
        "unfinished until the ship reaches the near port",
        "a private family grief with no public bells, flags, or celebration"
      ], answer: 0,
      explanation: "Prize won / port near / but heart, bleeding drops. The public celebration is present, not erased; the incompleteness is the corpse amid that noise. “Near” does not cancel “trip is done.”" }
  ];

  /* ---- Rebuilt original passages (LF388–LF424). The first versions (LF057–LF069, LF094–LF109,
     LF114–LF121) are retired. Option-object format: every option carries its own explanation. ---- */
  const Q = {
    siren: `HOW THE CEDAR FORK FLOOD WARNING WORKS
A handout from a fictional county emergency office, 2026 edition

Step 1. Three river gauges (Mill Road, Pike Ford, and South Bend) report the water’s height every 15 minutes.
Step 2. If any one gauge reads above 9 feet, the duty officer is paged. No public alert goes out yet.
Step 3. If two or more gauges read above 9 feet, or any one gauge reads above 12 feet, a text alert goes to residents who have signed up.
Step 4. The sirens sound only when the Mill Road gauge reads above 12 feet. Mill Road sits just upstream of the low bridge.
Step 5. The all-clear text goes out once every gauge has read below 9 feet for 90 minutes.

Box: The sirens are tested at noon on the first Monday of each month, except in January, when the test moves to the second Monday.

Note: The 2024 edition of this handout said the sirens sound when any gauge passes 12 feet. That rule changed in 2025.`,

    park: `A letter to the editor of a town paper (fictional). The paragraphs are numbered.

(1) The city council votes Tuesday on renaming Juniper Park for the late mayor Ellen Voss. I urge a no vote.

(2) I sat on the parks board for twelve years and chaired the committee that named three of our parks. I know what a park’s name is for: it should tell a visitor something about the place.

(3) My grandmother learned to swim in the Juniper Park pool in 1951. When she died last spring, we scattered her ashes under the juniper hedge by the gate. That hedge is where the park’s name comes from.

(4) The council’s own online survey drew 412 replies, and 58 percent opposed the change. I should admit that the survey was open to anyone, including people outside the city, and that one person could answer more than once.

(5) Name the new library for Mayor Voss instead. She fought for it for ten years, and it opens in June.`,

    projector: `LUMEX P-40 CLASSROOM PROJECTOR — QUICK START (fictional product)

Setup
1. Connect the power cord. Leave the video cable unplugged for now.
2. Press POWER twice within two seconds. Holding POWER down resets the projector to factory settings.
3. When the status light turns solid white, connect the video cable. Connecting it earlier can make the projector choose the wrong input.

Status light
Solid white: ready.
Blinking white: warming up. Wait.
Blinking orange, two flashes: filter blocked. Turn the projector off, clean the filter, and restart.
Blinking orange, three flashes: overheated. Unplug it for 30 minutes. Do not open the case.
Solid orange: lamp failure. Call the help desk. Do not restart.

Warranty
The two-year warranty covers the lamp only for its first 1,500 hours of use. Owners may open the case to replace the filter or the lamp. Installing a lamp not made by Lumex voids the warranty.`,

    workscited: `A student’s draft paragraph and works-cited list. The sentences are numbered. (The sources are fictional.)

(1) The Larkin Dam was finished in 1938 (Okafor 12). (2) Its builders housed workers in a camp that held 600 families (Hale). (3) A camp nurse later recalled that “water came by truck twice a week” (Marsh 44). (4) One writer argued at the time that the camp was better run than most of its kind (Pryor 33). (5) Later accounts put the camp at 900 families (Diaz 3).

Works Cited
Hale, Ruth. Interview by the author. 4 Mar. 2025.
Marsh, Edith. Recollections of the Larkin Camp. Larkin County Historical Society, 1979.
Okafor, James. The River Camps. Western Press, 2011.
Pryor, Lena. “Camp Life at Larkin.” Valley Review, vol. 2, 1938, pp. 30–41.
Vance, Tomas. Concrete and Water. Delta Books, 2004.`,

    outline: `A student’s outline for an argument essay

Thesis: The school should replace paper hall passes with a sign-out sheet at each classroom door.

I. Paper passes get lost.
   A. The office printed 2,000 passes in September; 300 were left by October.
   B. Students keep old passes and reuse them.
II. A sign-out sheet records time.
   A. Teachers could see how long each student was gone.
   B. Paper passes get lost.
   C. The library already uses a sheet, and the librarian reports fewer students wandering the halls.
III. Some say sheets waste class time.
   A. Signing out takes about ten seconds.
   B. Our school mascot is a heron.

Conclusion: Restate the thesis.`,

    lostdog: `A student’s personal narrative, first draft. The sentences are numbered.

(1) The morning our dog ran off, the fog was so thick I could not see our mailbox. (2) I walked the ditch along Pruitt Road, calling her name until my voice cracked. (3) Then I hear a bark from the culvert. (4) She was wedged in the pipe, muddy to the ears and wagging. (5) You never feel as relieved as you do in a moment like that. (6) I was very happy. (7) We carried her home wrapped in my brother’s coat.`,

    fire: `Two accounts of the same event (both fictional)

ACCOUNT 1 — From a letter Ada Kell wrote to her sister a month later
The fire at Lowry’s mill started a little after nine that night, in the dye house at the east end. By the time the pump wagon came, the roof over the looms had caught. No one was hurt; the night crew of eleven got out by the river door.

ACCOUNT 2 — From the Lowry Falls Courier, the next morning
Fire broke out at the Lowry mill shortly before ten on Thursday night, beginning in the boiler room at the west end. The volunteer company arrived within twenty minutes. All fourteen men of the night shift escaped, two of them with burns to the hands.`,

    radio: `Transcript of a school radio interview (fictional)

HOST: Today’s guest is Dr. Imani Rhee, who studies sleep at Coastal State. Dr. Rhee, you found that teens who put their phones away an hour before bed slept longer?
RHEE: About twenty minutes longer on average, in a group of 90 students over three weeks. I’d call that strong enough to try at home, but not strong enough to put into a school policy.
HOST: So, twenty more minutes for everyone who tries it.
RHEE: No. Twenty minutes was the average for the students who kept to it at least five nights a week. Across the whole group, it was eight minutes.
HOST: And this was all high-school students?
RHEE: Ninth and tenth graders, at two schools.
HOST: Listeners, text us your bedtime tips.`,

    peerreview: `Two students review Ana’s essay draft with a three-row rubric: Claim, Evidence, Organization. (fictional)

JONAH: Your claim is in the last paragraph, not the first. Under Claim, I’d move it up.
TESS: I liked it.
ANA: Liked what part?
TESS: The second paragraph, with the bus-schedule numbers. Under Evidence, those are your strongest.
JONAH: Paragraph three repeats paragraph two, though. That’s Organization.
ANA: Okay. I’ll move the claim and cut paragraph three. I’m keeping the bus numbers.`
  };

  const o = (id, text, explanation, isCorrect = false) => ({ id, text, explanation, isCorrect });
  const item = (id, domain, title, tags, skillIds, set, stem, options, explanation) => ({
    id, domain, title, difficulty: "hard", tags: tags.concat("longform"), skillIds,
    passageSet: set, passage: Q[set], stem, options, explanation
  });

  const rebuilt = [
    /* ---- Informational: a warning procedure with thresholds ---- */
    item("LF388", "reading", "Flood handout — one gauge high", ["informational", "graphics"], ["informational-texts", "text-graphics"], "siren",
      "Pike Ford reads 10 feet; the other two gauges read 7 feet. What happens?",
      [o("LF388-page", "The duty officer is paged.",
          "Step 2: one gauge above 9 feet pages the duty officer, and “no public alert goes out yet.”", true),
       o("LF388-text", "Residents get a text alert.",
          "Step 3 needs two gauges above 9 feet, or one above 12."),
       o("LF388-siren", "The sirens sound at once.",
          "Step 4: the sirens depend on Mill Road reading above 12 feet."),
       o("LF388-allclear", "The all-clear text goes out.",
          "The all-clear needs every gauge below 9 feet for 90 minutes.")],
      "Each step has its own threshold. Count how many gauges are above 9 feet, then check for any above 12."),

    item("LF389", "reading", "Flood handout — South Bend at 13 feet", ["informational", "graphics"], ["informational-texts", "text-graphics"], "siren",
      "South Bend reads 13 feet; the other two gauges read 8 feet. What happens?",
      [o("LF389-both", "sirens sound, and a text alert goes out",
          "This was the 2024 rule, when any gauge above 12 feet set off the sirens. It changed in 2025."),
       o("LF389-text", "a text alert goes out, but no sirens sound",
          "One gauge above 12 feet triggers the text alert (step 3); only Mill Road above 12 feet sounds the sirens (step 4).", true),
       o("LF389-page", "the duty officer is paged, but no text goes out",
          "A gauge above 12 feet goes past the paging step to a text alert."),
       o("LF389-siren", "sirens sound, but no text alert goes out",
          "South Bend cannot sound the sirens, and the text alert is triggered.")],
      "The note matters: the handout’s siren rule is newer than the one many residents may remember."),

    item("LF390", "reading", "Flood handout — the all-clear", ["informational"], ["informational-texts"], "siren",
      "Every gauge drops below 9 feet at 3:00 p.m. and stays there. When does the all-clear go out?",
      [o("LF390-3", "at 3:00 p.m.",
          "The gauges must stay below 9 feet for 90 minutes first."),
       o("LF390-315", "at 3:15 p.m.",
          "That is the next 15-minute reading, not the 90-minute wait."),
       o("LF390-430", "at 4:30 p.m.",
          "Step 5: below 9 feet “for 90 minutes.”", true),
       o("LF390-5", "at 5:00 p.m.",
          "That would be a two-hour wait. This county’s wait is 90 minutes.")],
      "A wait measured from when a condition starts ends at that time plus the wait."),

    item("LF391", "reading", "Flood handout — siren tests", ["informational"], ["informational-texts"], "siren",
      "When is the January siren test?",
      [o("LF391-first-noon", "the first Monday at noon",
          "That is every other month’s test day. January is the exception."),
       o("LF391-second-noon", "the second Monday at noon",
          "The box: “except in January, when the test moves to the second Monday.” The time stays noon.", true),
       o("LF391-second-nine", "the second Monday at 9 a.m.",
          "The day moves in January; the time does not."),
       o("LF391-first-nine", "the first Monday at 9 a.m.",
          "Neither the day nor the time is right for January.")],
      "An exception changes only what it names. Here it moves the day, not the hour."),

    item("LF392", "reading", "Flood handout — what changed", ["informational", "evidence"], ["informational-texts", "evidence-credibility"], "siren",
      "According to the note, what changed in 2025?",
      [o("LF392-height", "The text-alert height fell from 12 feet to 9.",
          "The note says nothing about text alerts. Its change is to the sirens."),
       o("LF392-gauge", "The sirens came to depend on one gauge, not any gauge.",
          "In 2024 any gauge past 12 feet sounded them; now only Mill Road does.", true),
       o("LF392-third", "A third gauge was added at South Bend.",
          "The note does not mention adding a gauge."),
       o("LF392-wait", "The all-clear wait grew from one hour to two.",
          "The note does not mention the all-clear.")],
      "A note about an earlier edition tells you which rule a reader might wrongly remember."),

    /* ---- Persuasion: a letter with numbered paragraphs ---- */
    item("LF393", "reading", "Park letter — credibility", ["persuasive", "rhetoric"], ["rhetorical-appeals", "persuasive-texts"], "park",
      "In which paragraph does the writer lean mainly on her own experience and standing?",
      [o("LF393-2", "Paragraph 2",
          "Twelve years on the parks board and three parks named: she presents herself as someone who knows how names work.", true),
       o("LF393-3", "Paragraph 3",
          "Paragraph 3 is a family story aimed at feeling, not a claim about her qualifications."),
       o("LF393-4", "Paragraph 4",
          "Paragraph 4 rests on survey numbers."),
       o("LF393-5", "Paragraph 5",
          "Paragraph 5 offers an alternative and a reason for it.")],
      "An appeal to credibility asks the reader to trust the speaker. Look for the writer’s own record."),

    item("LF394", "reading", "Park letter — feeling", ["persuasive", "rhetoric"], ["rhetorical-appeals", "persuasive-texts"], "park",
      "Which paragraph relies mainly on an appeal to feeling?",
      [o("LF394-1", "Paragraph 1",
          "Paragraph 1 states the vote and the writer’s position."),
       o("LF394-2", "Paragraph 2",
          "Paragraph 2 appeals to the writer’s credibility."),
       o("LF394-3", "Paragraph 3",
          "A grandmother’s swimming lessons and her ashes under the hedge are offered to move the reader.", true),
       o("LF394-4", "Paragraph 4",
          "Paragraph 4 offers numbers, however weak.")],
      "Each middle paragraph uses a different kind of support. Match the paragraph to the kind."),

    item("LF395", "reading", "Park letter — the survey", ["persuasive", "evidence"], ["evidence-credibility", "persuasive-texts"], "park",
      "Which weakness of the survey does the writer herself admit?",
      [o("LF395-few", "Only 41 people answered it.",
          "The survey drew 412 replies."),
       o("LF395-repeat", "One person could answer more than once.",
          "Paragraph 4: “one person could answer more than once,” and people outside the city could answer.", true),
       o("LF395-residents", "Only city residents could answer it.",
          "This reverses the paragraph: people outside the city could answer."),
       o("LF395-wording", "The council wrote slanted questions.",
          "She does not criticize the wording of the questions.")],
      "A writer who admits a weakness in her own evidence earns some trust, and also tells you how far the evidence goes."),

    item("LF396", "reading", "Park letter — the alternative", ["persuasive"], ["persuasive-texts"], "park",
      "What does the writer propose instead of renaming the park?",
      [o("LF396-plaque", "keeping the name and adding a plaque for Voss",
          "A plaque is a common compromise, but the letter does not propose one."),
       o("LF396-library", "naming the new library for Voss",
          "Paragraph 5: “Name the new library for Mayor Voss instead.”", true),
       o("LF396-pool", "naming the park’s pool for Voss",
          "The pool appears only in the grandmother’s story."),
       o("LF396-vote", "putting the name to a citywide vote",
          "The letter asks for a no vote by the council, not a public vote.")],
      "A letter that opposes a plan may also offer one. Read the last paragraph closely."),

    /* ---- Technical: setup steps and a status-light table ---- */
    item("LF397", "reading", "Projector guide — three orange flashes", ["technical"], ["technical-texts"], "projector",
      "The status light blinks orange three times. What should the user do?",
      [o("LF397-unplug", "unplug it for 30 minutes",
          "Three orange flashes means overheated: “Unplug it for 30 minutes. Do not open the case.”", true),
       o("LF397-filter", "clean the filter and restart",
          "That is the fix for two orange flashes, a blocked filter."),
       o("LF397-helpdesk", "call the help desk at once",
          "The help desk is for a solid orange light, lamp failure."),
       o("LF397-wait", "wait for it to finish warming up",
          "Warming up is a blinking white light.")],
      "The table separates signals by color, by blinking or solid, and by the number of flashes. Match all three."),

    item("LF398", "reading", "Projector guide — setup order", ["technical"], ["technical-texts"], "projector",
      "Which order follows the setup steps?",
      [o("LF398-power-first", "power cord, video cable, press POWER",
          "Step 1 says to leave the video cable unplugged; it goes in after the light turns solid white."),
       o("LF398-video-first", "video cable, power cord, press POWER",
          "Connecting video first is a common habit, but this guide connects it last."),
       o("LF398-power-mid", "video cable, press POWER, power cord",
          "The projector cannot be switched on before it has power."),
       o("LF398-power-on", "power cord, press POWER, video cable",
          "Steps 1–3: power cord, press POWER, then the video cable once the light is solid white.", true)],
      "Read setup steps for order words such as first, now, and when."),

    item("LF399", "reading", "Projector guide — switching on", ["technical"], ["technical-texts"], "projector",
      "How does a user switch the projector on?",
      [o("LF399-once", "press POWER once",
          "Step 2 calls for two presses."),
       o("LF399-twice", "press POWER twice quickly",
          "Step 2: “Press POWER twice within two seconds.”", true),
       o("LF399-hold3", "hold POWER for 3 seconds",
          "Holding POWER is how many devices start, but on this one it resets the projector."),
       o("LF399-hold10", "hold POWER for 10 seconds",
          "Holding POWER down resets the projector to factory settings.")],
      "When a guide gives an unusual step, follow it over the habit. Here the habitual press-and-hold does something else."),

    item("LF400", "reading", "Projector guide — the warranty", ["technical"], ["technical-texts"], "projector",
      "Which of these voids the warranty?",
      [o("LF400-filter", "opening the case to replace the filter",
          "Owners may open the case to replace the filter."),
       o("LF400-lamp", "opening the case to replace the lamp",
          "Many warranties forbid this, but this one lets owners replace the lamp themselves."),
       o("LF400-hours", "using the lamp for more than 1,500 hours",
          "Past 1,500 hours the lamp is no longer covered, but the warranty is not voided."),
       o("LF400-other", "installing a lamp from another maker",
          "“Installing a lamp not made by Lumex voids the warranty.”", true)],
      "Ending coverage for one part is not the same as voiding the whole warranty, and a guide’s own rules can differ from the usual ones."),
    item("LF401", "language", "Dam paragraph — a missing entry", ["research"], ["research-citation"], "workscited",
      "Which in-text citation names a source that is missing from the works-cited list?",
      [o("LF401-hale", "Hale, in sentence 2",
          "Hale’s interview is listed."),
       o("LF401-marsh", "Marsh, in sentence 3",
          "Marsh’s recollections are listed."),
       o("LF401-pryor", "Pryor, in sentence 4",
          "Pryor’s article is listed."),
       o("LF401-diaz", "Diaz, in sentence 5",
          "The list has no entry for Diaz.", true)],
      "Every source cited in the text needs an entry, and every entry should be cited. Check both directions."),

    item("LF402", "language", "Dam paragraph — an unused entry", ["research"], ["research-citation"], "workscited",
      "Which works-cited entry is never cited in the paragraph?",
      [o("LF402-hale", "Hale",
          "Hale is cited in sentence 2."),
       o("LF402-vance", "Vance",
          "No sentence cites Vance’s book.", true),
       o("LF402-pryor", "Pryor",
          "Pryor is cited in sentence 4."),
       o("LF402-okafor", "Okafor",
          "Okafor is cited in sentence 1.")],
      "An entry no one cites should be cut or used."),

    item("LF403", "language", "Dam paragraph — a source from the time", ["research"], ["research-citation", "evidence-credibility"], "workscited",
      "Which listed source was written while the camp existed?",
      [o("LF403-marsh", "Marsh’s recollections",
          "A nurse’s account sounds firsthand, but she wrote it in 1979, decades later."),
       o("LF403-okafor", "Okafor’s book",
          "Okafor’s book was published in 2011."),
       o("LF403-pryor", "Pryor’s article",
          "Pryor’s article appeared in 1938, the year the dam was finished.", true),
       o("LF403-hale", "Hale’s interview",
          "The interview took place in 2025.")],
      "A witness can write long after the event. Read the dates in the list, not only the kind of source."),

    item("LF404", "language", "Dam paragraph — the two figures", ["research"], ["research-citation", "evidence-credibility"], "workscited",
      "The paragraph gives two sizes for the camp. Which sources give them?",
      [o("LF404-hale-diaz", "Hale gives 600 families, and Diaz gives 900",
          "Sentence 2 cites Hale for 600; sentence 5 cites Diaz for 900.", true),
       o("LF404-hale-vance", "Hale gives 600 families, and Vance gives 900",
          "Vance is listed but never cited; the 900 comes from Diaz."),
       o("LF404-pryor-diaz", "Pryor gives 600 families, and Diaz gives 900",
          "Pryor is cited for a judgment about how the camp was run, not for its size."),
       o("LF404-pryor-vance", "Pryor gives 600 families, and Vance gives 900",
          "Neither source is cited for a size.")],
      "When sources disagree, a writer should say which source gives which figure."),

    item("LF405", "language", "Dam paragraph — a direct quotation", ["research"], ["research-citation"], "workscited",
      "Which sentence quotes its source word for word?",
      [o("LF405-1", "Sentence 1",
          "Sentence 1 paraphrases Okafor."),
       o("LF405-2", "Sentence 2",
          "Sentence 2 paraphrases Hale."),
       o("LF405-3", "Sentence 3",
          "Sentence 3 puts the nurse’s words in quotation marks.", true),
       o("LF405-4", "Sentence 4",
          "Sentence 4 reports Pryor’s argument in the student’s own words.")],
      "Quotation marks show where a source’s exact words begin and end."),

    /* ---- Writing: an outline ---- */
    item("LF406", "writing", "Hall-pass outline — repetition", ["revision"], ["essay-structure", "writing-process"], "outline",
      "Which line repeats a point the outline has already made?",
      [o("LF406-IB", "Line I.B",
          "I.B adds a new point about reuse."),
       o("LF406-IIB", "Line II.B",
          "“Paper passes get lost” is the heading of section I, repeated under II.", true),
       o("LF406-IIC", "Line II.C",
          "II.C adds new evidence from the library."),
       o("LF406-IIIA", "Line III.A",
          "III.A answers an objection.")],
      "In an outline, each line should do work no other line does."),

    item("LF407", "writing", "Hall-pass outline — off thesis", ["revision"], ["essay-structure", "thesis-support"], "outline",
      "Which line does nothing for the thesis?",
      [o("LF407-IA", "Line I.A",
          "I.A gives numbers on lost passes."),
       o("LF407-IIA", "Line II.A",
          "II.A gives a benefit of the sheet."),
       o("LF407-IIIA", "Line III.A",
          "III.A answers an objection to the sheet."),
       o("LF407-IIIB", "Line III.B",
          "The mascot has nothing to do with hall passes.", true)],
      "Test each line against the thesis: does it help show the school should switch?"),

    item("LF408", "writing", "Hall-pass outline — the objection", ["revision", "fallacies"], ["essay-structure", "persuasive-writing"], "outline",
      "Which line answers an objection to the thesis?",
      [o("LF408-IA", "Line I.A",
          "I.A supports the thesis directly; it answers no objection."),
       o("LF408-IB", "Line I.B",
          "I.B supports section I."),
       o("LF408-IIC", "Line II.C",
          "II.C is evidence for the sheet."),
       o("LF408-IIIA", "Line III.A",
          "Section III raises the objection that sheets waste class time; III.A answers it with ten seconds.", true)],
      "A counterargument needs a reply. Find the line that gives one."),

    item("LF409", "writing", "Hall-pass outline — a working example", ["revision"], ["thesis-support", "evidence-credibility"], "outline",
      "Which line offers evidence from a place that already uses the proposed system?",
      [o("LF409-IA", "Line I.A",
          "I.A is about the current paper passes."),
       o("LF409-IIA", "Line II.A",
          "II.A predicts a benefit; it does not report one."),
       o("LF409-IIC", "Line II.C",
          "The library already uses a sheet, and the librarian reports results.", true),
       o("LF409-IIIA", "Line III.A",
          "III.A estimates time but does not come from a place using a sheet.")],
      "Evidence from a working example is stronger than a prediction. Find the line that reports one."),

    /* ---- Writing: a narrative draft ---- */
    item("LF410", "writing", "Lost-dog draft — tense", ["narrative"], ["narrative-writing", "grammar-usage"], "lostdog",
      "Which sentence shifts tense without reason?",
      [o("LF410-2", "Sentence 2",
          "Sentence 2 is in the past tense, like the story."),
       o("LF410-3", "Sentence 3",
          "“Then I hear a bark” jumps into the present tense in a past-tense story.", true),
       o("LF410-4", "Sentence 4",
          "Sentence 4 is in the past tense."),
       o("LF410-7", "Sentence 7",
          "Sentence 7 is in the past tense.")],
      "A narrative can use any tense, but it should keep the one it chooses."),

    item("LF411", "writing", "Lost-dog draft — point of view", ["narrative"], ["narrative-writing", "style-audience"], "lostdog",
      "Which sentence breaks the story’s first-person point of view?",
      [o("LF411-1", "Sentence 1",
          "Sentence 1 uses “I” and “our.”"),
       o("LF411-5", "Sentence 5",
          "“You never feel as relieved” turns to the reader in the second person.", true),
       o("LF411-6", "Sentence 6",
          "Sentence 6 uses “I.”"),
       o("LF411-7", "Sentence 7",
          "Sentence 7 uses “we” and “my.”")],
      "Look for a sudden “you” in a story told by “I.”"),

    item("LF412", "writing", "Lost-dog draft — telling a feeling", ["narrative"], ["narrative-writing", "essay-structure"], "lostdog",
      "Which sentence names a feeling instead of showing it?",
      [o("LF412-2", "Sentence 2",
          "A voice cracking from calling shows the narrator’s worry."),
       o("LF412-4", "Sentence 4",
          "Mud and wagging show the scene."),
       o("LF412-6", "Sentence 6",
          "“I was very happy” states the feeling outright.", true),
       o("LF412-7", "Sentence 7",
          "Carrying her home in a coat shows care.")],
      "Showing gives details a reader can picture; telling names the feeling."),

    /* ---- Paired sources: two accounts that disagree ---- */
    item("LF413", "reading", "Mill fire — agreement", ["paired"], ["evidence-credibility", "informational-texts"], "fire",
      "On which point do the two accounts agree?",
      [o("LF413-start", "the part of the mill where the fire began",
          "Account 1 says the dye house at the east end; Account 2 says the boiler room at the west end."),
       o("LF413-crew", "the number of workers on the night shift",
          "Account 1 says eleven; Account 2 says fourteen."),
       o("LF413-escaped", "that the whole night crew got out",
          "Account 1: the crew “got out by the river door.” Account 2: “All fourteen men … escaped.”", true),
       o("LF413-hurt", "that no worker was hurt",
          "Account 2 reports two men with burned hands.")],
      "Two accounts can agree on the outcome while disagreeing on almost every detail."),

    item("LF414", "reading", "Mill fire — where it began", ["paired"], ["evidence-credibility"], "fire",
      "Account 1 says the fire began in the dye house. Where does Account 2 say it began?",
      [o("LF414-boiler", "the boiler room at the west end",
          "“Beginning in the boiler room at the west end.”", true),
       o("LF414-dye", "the dye house at the east end",
          "That is Account 1’s version."),
       o("LF414-looms", "the roof over the looms",
          "In Account 1 the roof over the looms caught later; it is not where the fire began."),
       o("LF414-river", "the room by the river door",
          "The river door is how the crew got out in Account 1.")],
      "Keep each account’s details with that account."),

    item("LF415", "reading", "Mill fire — closeness to the event", ["paired"], ["evidence-credibility", "research-citation"], "fire",
      "Which account was written closer to the event, and when?",
      [o("LF415-1-next", "Account 1, the next morning",
          "A private letter can feel more immediate, but Ada Kell wrote hers a month later."),
       o("LF415-2-next", "Account 2, the next morning",
          "The Courier printed its account the next morning; the letter came a month later.", true),
       o("LF415-1-month", "Account 1, a month later",
          "That is when the letter was written, but it is the later of the two."),
       o("LF415-2-month", "Account 2, a month later",
          "The month’s delay belongs to Account 1.")],
      "When accounts disagree, time of writing is one factor in weighing them. Read the headings for dates."),

    item("LF416", "reading", "Mill fire — the crew", ["paired"], ["evidence-credibility"], "fire",
      "How many night-shift workers does each account report?",
      [o("LF416-11-14", "eleven in Account 1, fourteen in Account 2",
          "“The night crew of eleven” against “all fourteen men of the night shift.”", true),
       o("LF416-14-11", "fourteen in Account 1 and eleven in Account 2",
          "This reverses the two figures."),
       o("LF416-11-11", "eleven in each of the two accounts",
          "Account 2 says fourteen."),
       o("LF416-14-14", "fourteen in each of the two accounts",
          "Account 1 says eleven.")],
      "Read each number with the account it comes from."),

    /* ---- Oral: an interview transcript ---- */
    item("LF417", "oral", "Radio interview — the correction", ["listening"], ["listening-speaking", "speech-craft"], "radio",
      "When the host restates her finding, how does Dr. Rhee correct him?",
      [o("LF417-average", "She says twenty minutes is an average, and some students slept no longer.",
          "That is the usual correction, but she makes a different one: the twenty minutes applies to a subgroup."),
       o("LF417-subgroup", "She says twenty minutes held only for students who kept to it.",
          "“The average for the students who kept to it at least five nights a week. Across the whole group, it was eight minutes.”", true),
       o("LF417-grades", "She says the twenty minutes held only for the ninth graders in the group.",
          "She separates students by how often they kept to it, not by grade."),
       o("LF417-forty", "She says the true gain was closer to forty minutes a night.",
          "She lowers the figure for the whole group, to eight minutes.")],
      "A good listener catches which group a number belongs to. Here the headline figure describes only the students who stuck with it."),

    item("LF418", "oral", "Radio interview — the students", ["listening"], ["listening-speaking"], "radio",
      "Which students were in the study?",
      [o("LF418-9-10-two", "ninth and tenth graders at two schools",
          "“Ninth and tenth graders, at two schools.”", true),
       o("LF418-9-10-one", "ninth and tenth graders at one school",
          "She says two schools."),
       o("LF418-11-12-two", "eleventh and twelfth graders at two schools",
          "She names ninth and tenth grade."),
       o("LF418-11-12-one", "eleventh and twelfth graders at one school",
          "She names ninth and tenth grade, at two schools.")],
      "Listen for the exact group a finding covers; it limits who the finding applies to."),

    item("LF419", "oral", "Radio interview — size and length", ["listening"], ["listening-speaking"], "radio",
      "How large was the study, and how long did it run?",
      [o("LF419-90-3w", "90 students, three weeks",
          "“In a group of 90 students over three weeks.”", true),
       o("LF419-90-3m", "90 students, three months",
          "She says weeks."),
       o("LF419-900-3w", "900 students, three weeks",
          "She says 90."),
       o("LF419-900-3m", "900 students, three months",
          "She says 90 students and three weeks.")],
      "Small studies over short periods are a reason for the limit she puts on her finding."),

    item("LF420", "oral", "Radio interview — her verdict", ["listening"], ["listening-speaking", "evidence-credibility"], "radio",
      "How does Dr. Rhee describe the strength of her finding?",
      [o("LF420-start", "as a start, not a rule",
          "That is a common way for researchers to hedge, but it is not what she says."),
       o("LF420-home", "as fit for home, not for school policy",
          "“Strong enough to try at home, but not strong enough to put into a school policy.”", true),
       o("LF420-policy", "as strong enough to become a school policy now",
          "She says the opposite about school policy."),
       o("LF420-weak", "as too weak to be worth trying at home",
          "She says it is strong enough to try at home.")],
      "A speaker’s own words about how sure she is are evidence a listener should keep. Do not substitute the usual phrase."),
    item("LF421", "oral", "Peer review — asking for detail", ["discussion"], ["group-discussion", "listening-speaking"], "peerreview",
      "Who asks a reviewer to make a comment more specific?",
      [o("LF421-ana", "Ana",
          "Ana answers “I liked it” with “Liked what part?”", true),
       o("LF421-jonah", "Jonah",
          "Jonah gives specific comments but asks no one for more detail."),
       o("LF421-tess", "Tess",
          "Tess is the one asked to be more specific."),
       o("LF421-none", "None",
          "Ana asks Tess for detail.")],
      "A follow-up question can turn vague praise into feedback the writer can use."),

    item("LF422", "oral", "Peer review — the rubric row", ["discussion"], ["group-discussion", "writing-process"], "peerreview",
      "Which rubric row does Tess’s second comment address?",
      [o("LF422-claim", "Claim",
          "Jonah’s first comment is the one about the claim."),
       o("LF422-evidence", "Evidence",
          "“Under Evidence, those are your strongest.”", true),
       o("LF422-org", "Organization",
          "Jonah raises Organization."),
       o("LF422-none", "None",
          "Tess names the Evidence row.")],
      "Tying a comment to a rubric row tells the writer which part of the draft it concerns."),

    item("LF423", "oral", "Peer review — what Ana moves", ["discussion"], ["group-discussion"], "peerreview",
      "What does Ana say she will move, and where?",
      [o("LF423-claim-first", "the claim, up to the first paragraph",
          "Jonah says the claim is in the last paragraph and should move up; Ana agrees.", true),
       o("LF423-claim-end", "the claim, down to the last paragraph",
          "The claim is already in the last paragraph; she will move it up."),
       o("LF423-bus-first", "the bus numbers, up to the first paragraph",
          "Ana says she is keeping the bus numbers where they are."),
       o("LF423-bus-end", "the bus numbers, down to the last paragraph",
          "No one suggests moving the bus numbers, and Ana keeps them.")],
      "A writer can accept some feedback and keep what works. Track which change goes with which comment."),

    item("LF424", "oral", "Peer review — the repetition", ["discussion"], ["group-discussion", "essay-structure"], "peerreview",
      "Which paragraph does Jonah say repeats another?",
      [o("LF424-3-2", "paragraph three repeats paragraph two",
          "“Paragraph three repeats paragraph two.”", true),
       o("LF424-3-1", "paragraph three repeats paragraph one",
          "He names paragraph two as the one repeated."),
       o("LF424-4-2", "paragraph four repeats paragraph two",
          "He names paragraph three as the one that repeats."),
       o("LF424-4-1", "paragraph four repeats paragraph one",
          "He names paragraphs three and two.")],
      "Keep each comment with the paragraphs it names."),
  ];

  // Legacy consumers read choices/answer; QuizCore reads the option objects.
  rebuilt.forEach(p => {
    p.choices = p.options.map(opt => opt.text);
    p.answer = p.options.findIndex(opt => opt.isCorrect);
  });

  window.PROBLEMS = (window.PROBLEMS || []).concat(items, rebuilt);
})();
