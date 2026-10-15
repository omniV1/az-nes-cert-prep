/* NES English Language Arts (301) Domain II — competencies 0005–0008 */
(function () {
  const { section, check } = window.LessonKit;

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "lt-01": {
      title: "Fiction, literary nonfiction, and drama",
      domain: "literature",
      intro: `<p><strong>NES 301 competency 0005:</strong> Tell a critical biography from a political essay, a psychological novel from a tragedy; then track soliloquy, foreshadowing, denouement, flashback, point of view, tone, voice, mood, and characterization as craft choices, not trivia labels.</p>`,
      sections: [
        section(
          "Forms: biography, political essay, psychological novel, tragedy",
          "Literary nonfiction uses the resources of art&mdash;scene, voice, structure&mdash;on real people and events. Fiction invents. Drama is written to be performed.",
          "A critical biography interprets a life with a thesis, not a year-by-year list. A political essay argues a public question in a personal or literary voice. A psychological novel treats inner motive, memory, and consciousness as the main action. A tragedy shows a serious action in which a protagonist's error or limitation, colliding with circumstance, brings irreversible loss&mdash;often recognized too late. Identify the form by what counts as the central event.",
          `Form test: what is the &ldquo;plot&rdquo;?<br>
          Critical biography: a life's meaning, argued<br>
          Political essay: a civic claim, developed<br>
          Psychological novel: interior change<br>
          Tragic play: public action + catastrophe + recognition`,
          {
            label: "form from features",
            problem: "A book on Frederick Douglass spends less time listing dates than arguing that his voice as a writer was itself a political act. Critical biography or textbook chronology?",
            steps: [
              "<strong>Central event:</strong> an interpretation of a life, not a syllabus of facts.",
              "<strong>Literary nonfiction cue:</strong> thesis plus selective scene and quotation.",
              "<strong>Not a novel:</strong> the subject is historical Douglass.",
              "<strong>MCQ move:</strong> when the stem names &ldquo;critical biography,&rdquo; look for interpretive argument about a real life."
            ],
            answer: "Answer: Critical biography&mdash;a thesis about a real life, not a date list."
          },
          {
            label: "tragedy vs psychological novel",
            problem: "In <em>Macbeth</em>, ambition and murder move from private thought to the destruction of a kingdom, ending in the tyrant's death. In a novel that never leaves a narrator's memories of a single afternoon, almost no public event occurs. How do the forms differ?",
            steps: [
              "<strong>Tragedy:</strong> staged public action, high stakes, catastrophe, recognition (Macbeth sees too late what he has made).",
              "<strong>Psychological novel:</strong> the mind is the battlefield; outer plot may be slight.",
              "<strong>Do not reduce tragedy to &ldquo;sad&rdquo;:</strong> many sad stories are not tragedies.",
              "<strong>MCQ move:</strong> match the exam examples (tragic play, psychological novel) to where the action lives&mdash;stage/world vs interior."
            ],
            answer: "Answer: Tragedy = public catastrophic action; psychological novel = interior process as plot."
          },
          { problem: "Thoreau's &ldquo;Civil Disobedience&rdquo; argues that conscience outranks an unjust law. Novel, tragedy, or political essay?", hint: "A civic claim in prose, not invented characters or a staged catastrophe." },
          "Calling every true story a biography, or every play a tragedy. Comedy, history, and problem plays also exist. Form is the job of the work.",
          [
            check("Which work is a political essay rather than a psychological novel?", ["A book-length study of one character's dreams and guilt, with invented people", "Paine's <em>The American Crisis</em>, urging colonists to stand fast in 1776", "A five-act play ending in the royal family's deaths", "A year-by-year list of a president's appointments"], 1, "Paine argues a public course of action. Invented interior life is a novel; royal catastrophe is tragic drama; an appointment list is chronicle, not critical biography."),
            check("A tragic play is best recognized by:", ["Any unhappy feeling in the audience", "A serious action leading to irreversible loss and recognition, usually in public/political space", "A narrator who analyzes childhood in long paragraphs", "Rhymed couplets at the end of every scene"], 1, "Tragedy is a structure of action, not a mood and not a verse form.")
          ]
        ),
        section(
          "Soliloquy, foreshadowing, flashback, denouement",
          "Dramatic and narrative devices are named by what they do to information and time.",
          "A soliloquy is a character speaking thoughts aloud while alone on stage (or treating the audience as not &ldquo;in&rdquo; the scene), so we hear interiority the other characters do not. Foreshadowing plants a later outcome. Flashback breaks chronology to show an earlier scene. Denouement is the untying after the climax&mdash;how conflicts settle. On &ldquo;which device&rdquo; items, describe the information structure first.",
          `Which-device procedure:<br>
          Alone on stage, inner speech &rarr; soliloquy<br>
          Hint of a later event &rarr; foreshadowing<br>
          Jump to earlier time &rarr; flashback<br>
          After the peak, consequences sorted &rarr; denouement`,
          {
            label: "soliloquy",
            problem: "Hamlet, left on stage, asks &ldquo;To be, or not to be, that is the question: / Whether 'tis nobler in the mind to suffer / The slings and arrows of outrageous fortune.&rdquo; Why is this a soliloquy rather than dialogue?",
            steps: [
              "<strong>Speech situation:</strong> he is thinking aloud, not answering another character in conversation.",
              "<strong>Dramatic job:</strong> the audience gets access to a mind that other characters do not hear this way.",
              "<strong>Not a narrator:</strong> this is still a play; the actor speaks the interior.",
              "<strong>MCQ move:</strong> if another person is being addressed and can reply, it is not a soliloquy (aside is a related but shorter private remark)."
            ],
            answer: "Answer: Soliloquy&mdash;interior speech performed as if unheard by other characters."
          },
          {
            label: "time devices and denouement",
            problem: "A story opens at a funeral, then shows the year that led there, then returns to the guests leaving the cemetery. Name flashback vs denouement.",
            steps: [
              "<strong>Funeral first, then earlier year:</strong> the year is a flashback (or a large anachrony) filling cause.",
              "<strong>Guests leaving after we know the death's meaning:</strong> that settling is denouement, not another climax.",
              "<strong>Foreshadowing would be the reverse hint:</strong> a healthy character coughing in chapter 1 if the funeral is later in chronological order.",
              "<strong>MCQ move:</strong> ask whether the scene is earlier in story-time (flashback) or after the conflict's peak (denouement)."
            ],
            answer: "Answer: The inserted year is flashback; the cemetery departure is denouement."
          },
          { problem: "In Act 1 a soothsayer warns Caesar to beware the Ides of March. Device?", hint: "A planted future outcome the audience is invited to remember." },
          "Calling any speech a soliloquy, or calling the climax the denouement. Climax is the turning peak; denouement is the aftermath's arrangement.",
          [
            check("Which passage is the best example of foreshadowing?", ["A chapter that returns to the character's childhood before the crime", "A cracked portrait falling the night before a family disaster", "The detective explaining every clue after the culprit is caught", "Two servants chatting about the weather with no later payoff"], 1, "The falling portrait hints a coming disaster. Childhood is flashback; the detective's wrap-up is denouement/explanation; idle weather is not a device unless paid off."),
            check("A character alone on stage reveals a plan the others do not hear. The device is:", ["Aside", "Soliloquy", "Monologue", "Dramatic irony"], 1, "Alone on stage and speaking inner thoughts is a soliloquy. An aside is a brief remark while others are present, a monologue is a long speech to other characters, and dramatic irony may result but is not the speech device.")
          ]
        ),
        section(
          "Point of view, tone, voice, mood, characterization",
          "Point of view is who sees and speaks. Tone is the speaker's attitude. Voice is the distinctive verbal personality. Mood is the atmosphere the reader is invited to feel. Characterization is how a figure is built.",
          "Do not swap these terms. A grim setting can create mood while the narrator's tone is bitterly comic. Direct characterization states a trait; indirect shows it through action, speech, appearance, or others' reactions. Keep excerpts short and name the evidence.",
          `POV: who is the camera / who says &ldquo;I&rdquo;?<br>
          Tone: speaker's attitude toward subject<br>
          Voice: habitual style of that speaker<br>
          Mood: feeling-in-the-air for the reader<br>
          Character: told vs shown`,
          {
            label: "tone vs mood",
            problem: "Austen opens <em>Pride and Prejudice</em>: &ldquo;It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.&rdquo; Is the tone earnest or ironic?",
            steps: [
              "<strong>Literal claim:</strong> rich bachelors must want wives.",
              "<strong>Under-reading:</strong> the book immediately shows families hunting husbands, so the &ldquo;truth&rdquo; is social pressure dressed as nature.",
              "<strong>Tone:</strong> ironic, amused, satirical&mdash;not sincere philosophy.",
              "<strong>Mood:</strong> light, social, comic; do not call the tone &ldquo;romantic longing&rdquo; just because marriage is the topic."
            ],
            answer: "Answer: Ironic tone; the sentence mocks a social &ldquo;truth,&rdquo; it does not preach it."
          },
          {
            label: "indirect characterization",
            problem: "A man &ldquo;never remembers servants' names but can recite every wine vintage.&rdquo; What trait is shown, and how?",
            steps: [
              "<strong>No adjective is used:</strong> the narrator does not say <em>snobbish</em>.",
              "<strong>Action contrast:</strong> memory is selective toward status objects, not people.",
              "<strong>Indirect characterization:</strong> we infer class vanity.",
              "<strong>MCQ move:</strong> if asked how the author characterizes, pick showing via behavior, not a theme statement."
            ],
            answer: "Answer: Indirect characterization of snobbery through selective attention."
          },
          { problem: "A first-person narrator describes a &ldquo;cozy&rdquo; cellar while listing rusted locks and no windows. Split tone, mood, and possible unreliability.", hint: "Tone is the narrator's cozy label; mood may be claustrophobic; the mismatch is a cue." },
          "Using tone, mood, and voice as synonyms. Tone is attitude in the speaker; mood is the reader's induced atmosphere; voice is the signature of how that speaker sounds across sentences.",
          [
            check("In a passage, rain ticks on a tin roof and the street is empty. This description primarily establishes:", ["Theme", "Mood (uneasy stillness)", "Tone (the narrator's attitude)", "Characterization"], 1, "Sensory setting that invites a feeling is mood. It does not by itself name the narrator's attitude (tone), state a theme, or characterize anyone."),
            check("Which is direct characterization?", ["&ldquo;He kicked the chair aside and spoke before anyone else could.&rdquo;", "&ldquo;Mara was impatient with delay.&rdquo;", "&ldquo;The room smelled of oranges.&rdquo;", "&ldquo;Then the story jumped back to June.&rdquo;"], 1, "A stated trait is direct. Kicking a chair is indirect. Smell is setting. June is flashback.")
          ]
        )
      ]
    },

    "lt-02": {
      title: "Poetry forms, meter, and sound",
      domain: "literature",
      intro: `<p><strong>NES 301 competency 0006:</strong> Recognize epic, ode, sonnet, ballad, villanelle, and tanka by structure; scan quatrains, iambic pentameter, and free verse; and hear alliteration and assonance as meaning-making sound, not decoration.</p>`,
      sections: [
        section(
          "Epic, ode, sonnet, ballad, villanelle, tanka",
          "A poetic form is a contract: length, stanza, subject tradition, and sometimes refrain. Identify the contract before interpreting theme.",
          "An epic is a long narrative of a hero and a people, often opening in the midst of action, with elevated style. An ode is a lyric of elevated address, often to a person, object, or abstraction. A sonnet is 14 lines, typically iambic pentameter, with a turn (volta). A ballad is a narrative in simple stanzas, often with refrain, built for voice and memory. A villanelle is 19 lines: five tercets and a quatrain, two refrains, two repeating rhymes. A tanka is a 5-7-5-7-7 syllabic lyric from the Japanese tradition. Match the blueprint, not the topic (love can appear in all of them).",
          `Sonnet: 14 lines + turn<br>
          Villanelle: 19 lines, two refrains<br>
          Tanka: 5-7-5-7-7<br>
          Ballad: story + songlike stanza<br>
          Ode: lyric praise/address, elevated<br>
          Epic: long heroic narrative, cultural scope`,
          {
            label: "sonnet vs ode",
            problem: "Shakespeare's Sonnet 18 has 14 lines of iambic pentameter and a turn toward the beloved's preservation in verse. Keats's &ldquo;Ode on a Grecian Urn&rdquo; is a longer lyric addressing an object. Why are they different forms?",
            steps: [
              "<strong>Count and meter:</strong> 14 pentameter lines with a volta = sonnet contract.",
              "<strong>Ode:</strong> sustained elevated address to the urn, not a 14-line box.",
              "<strong>Do not use &ldquo;serious&rdquo; as the test:</strong> both are serious lyrics.",
              "<strong>MCQ move:</strong> if the item gives line count 14, look for sonnet before ode."
            ],
            answer: "Answer: Sonnet = 14-line structure with a turn; ode = elevated lyric address, not defined by 14 lines."
          },
          {
            label: "villanelle and tanka",
            problem: "A poem repeats &ldquo;The clock will not go back&rdquo; and &ldquo;We spend what we cannot stack&rdquo; on a strict 19-line pattern. Another poem is five lines of 5, 7, 5, 7, and 7 syllables on a passing season. Name the forms.",
            steps: [
              "<strong>Two refrains + 19 lines:</strong> villanelle.",
              "<strong>5-7-5-7-7:</strong> tanka, not haiku (haiku is 5-7-5).",
              "<strong>Do not call the tanka a sonnet:</strong> syllable count is not 14 pentameter lines.",
              "<strong>MCQ move:</strong> villanelle is the refrain machine; tanka is the syllabic 31-syllable lyric."
            ],
            answer: "Answer: Villanelle; tanka."
          },
          { problem: "A long poem begins by invoking a muse to sing a hero's rage that brought suffering to a people, then narrates battles and journeys. Form?", hint: "Cultural-scale heroic narrative = epic." },
          "Identifying forms by topic (a &ldquo;nature poem&rdquo; could be ode, tanka, or free verse). Count lines, refrains, and stanza math.",
          [
            check("Which description fits a ballad rather than an epic?", ["A compact, songlike narrative stanza, often with refrain, telling a stark story", "Thousands of lines on a nation's founding war, with epithets and catalogues", "Exactly 14 lines and a couplet", "Five tercets plus a quatrain with two repeating lines"], 0, "Ballads are portable sung stories. Epics are long cultural narratives. 14 lines is a sonnet; the refrain machine is a villanelle."),
            check("A 5-7-5-7-7 lyric on autumn is a:", ["Sonnet", "Tanka", "Haiku", "Villanelle"], 1, "5-7-5-7-7 is the tanka pattern. A haiku stops at 5-7-5, and sonnets and villanelles are longer rhymed forms.")
          ]
        ),
        section(
          "Quatrain, iambic pentameter, free verse",
          "Meter is a pattern of stressed and unstressed syllables. A stanza is a grouped unit of lines. Free verse is not &ldquo;no craft&rdquo;; it is poetry without a regular meter and usually without a regular rhyme scheme.",
          "An iamb is unstressed + stressed (da-DUM). Iambic pentameter is five iambs: ten syllables in that pulse, with allowed substitutions. A quatrain is a four-line stanza. To scan, mark the beats you actually hear, then see whether a named meter fits. Free verse still uses line breaks, repetition, and cadence&mdash;Whitman is the NES-style example of unmetered surge.",
          `Iamb: da-DUM &nbsp;|&nbsp; Pentameter: five of those<br>
          &ldquo;Shall I compare thee to a summer's day?&rdquo;<br>
          da-DUM da-DUM da-DUM da-DUM da-DUM<br>
          Quatrain = 4-line stanza &nbsp;|&nbsp; Free verse = no set meter/rhyme`,
          {
            label: "scanning a line",
            problem: "Scan: &ldquo;Shall I compare thee to a summer's day?&rdquo; Why iambic pentameter?",
            steps: [
              "<strong>Count feet:</strong> Shall I | com-PARE | thee TO | a SUM | mer's DAY &mdash; five iambs (with the usual flexibility on <em>Shall I</em>).",
              "<strong>Not tetrameter:</strong> that would be four feet (eight pulses in a strict iambic count).",
              "<strong>MCQ move:</strong> pentameter = five feet, not five letters or five words."
            ],
            answer: "Answer: Five iambic feet; Shakespeare's sonnet line."
          },
          {
            label: "free verse vs formlessness",
            problem: "Whitman: &ldquo;O Captain! my Captain! our fearful trip is done, / The ship has weather'd every rack, the prize we sought is won.&rdquo; Later poems of his drop regular rhyme. Is free verse merely broken prose?",
            steps: [
              "<strong>This famous elegy actually uses a ballad-like pulse and refrain;</strong> Whitman's broader practice includes true free verse: irregular line length, catalog, anaphora.",
              "<strong>Craft remains:</strong> line break, repetition, breath.",
              "<strong>Contrast:</strong> a sonnet cannot &ldquo;accidentally&rdquo; gain a fifteenth line and stay a sonnet.",
              "<strong>MCQ move:</strong> free verse = no regular meter/rhyme scheme, not &ldquo;no devices.&rdquo;"
            ],
            answer: "Answer: Free verse abandons regular meter/rhyme but still organizes sound and line."
          },
          { problem: "A hymn stanza has four lines rhyming ABAB. Name the stanza type.", hint: "Four lines = quatrain; rhyme scheme is extra information." },
          "Counting words instead of feet, or calling any unrhymed poem free verse (blank verse is unrhymed iambic pentameter&mdash;regular meter, no rhyme).",
          [
            check("Blank verse is:", ["Unrhymed iambic pentameter", "Unrhymed lines with no regular meter", "Rhymed iambic pentameter couplets", "Prose arranged in short lines"], 0, "Blank verse has meter (iambic pentameter) but not rhyme. Unrhymed lines with no regular meter are free verse, rhymed pentameter couplets are heroic couplets, and prose in short lines is not verse."),
            check("A four-line stanza is a:", ["Couplet", "Tercet", "Quatrain", "Sestet"], 2, "Couplet 2, tercet 3, quatrain 4, sestet 6.")
          ]
        ),
        section(
          "Alliteration, assonance, and rhyme as meaning",
          "Sound devices are evidence when they cluster on the words that carry the idea. Name the repeated sound, then say what it emphasizes.",
          "Alliteration repeats initial consonant sounds (<em>wild and windy west</em>). Assonance repeats vowel sounds inside words (<em>mad as a hatter</em> has short <em>a</em>). Rhyme repeats closing sounds in a scheme (ABAB, AABB, couplets). On &ldquo;which device&rdquo; items, check whether the repeat is at the start (alliteration), in the vowel (assonance), or at the line's end (rhyme).",
          `Which sound?<br>
          Opening consonants &rarr; alliteration<br>
          Stressed vowels &rarr; assonance<br>
          End of lines in a pattern &rarr; rhyme scheme<br>
          Then: what idea do those words share?`,
          {
            label: "alliteration vs assonance",
            problem: "Blake: &ldquo;In every cry of every Man, / In every Infant's cry of fear.&rdquo; Later, &ldquo;The mind-forged manacles I hear.&rdquo; Which sounds are working?",
            steps: [
              "<strong>Cry / every / Infant:</strong> repeated long <em>i</em> and the thud of <em>cry</em> is assonance/repetition of a key noun.",
              "<strong>Mind-forged manacles:</strong> <em>m</em> alliteration binds mental oppression to metal restraints.",
              "<strong>Meaning:</strong> sound glues the metaphor of invisible chains.",
              "<strong>MCQ move:</strong> if the stem quotes <em>mind-forged manacles</em>, alliteration is the cleanest label."
            ],
            answer: "Answer: Alliteration on <em>m</em> in &ldquo;mind-forged manacles&rdquo;; repetition/assonance around <em>cry</em>."
          },
          {
            label: "rhyme scheme job",
            problem: "A ballad quatrain rhymes ABCB (second and fourth lines). Why might a poet choose that rather than dense couplets?",
            steps: [
              "<strong>Hear it:</strong> ABCB is singable and less witty-epigram than AABB couplets.",
              "<strong>Oral tradition:</strong> ballads travel by ear; a looser end-rhyme is easier to remember and vary.",
              "<strong>MCQ move:</strong> &ldquo;why this sound pattern&rdquo; = the effect (song, closure, punch), not a random preference."
            ],
            answer: "Answer: ABCB supports a songlike, oral narrative rather than closed epigrammatic couplets."
          },
          { problem: "Name the device: &ldquo;The long low moan of the ocean.&rdquo;", hint: "Repeated <em>o</em> vowel = assonance; <em>l</em> may also alliterate." },
          "Calling every repeated letter alliteration. Alliteration is initial sound, not spelling (<em>phone/philosophy</em> alliterate on <em>f</em>). Silent letters do not count.",
          [
            check("In &ldquo;silent sea,&rdquo; the repeated <em>s</em> is:", ["Assonance", "Alliteration", "Onomatopoeia", "Rhyme"], 1, "The initial /s/ repeats: alliteration. Assonance repeats vowel sounds, onomatopoeia imitates a sound, and <em>silent</em> and <em>sea</em> do not rhyme."),
            check("Assonance is best defined as:", ["Rhyme at the ends of lines only", "Repetition of vowel sounds in nearby words", "Repetition of initial consonant sounds", "Repetition of consonant sounds within or at the ends of words"], 1, "Assonance is vowel echo. End rhyme matches whole ending sounds, alliteration repeats initial consonants, and consonance repeats consonants inside or at the ends of words.")
          ]
        )
      ]
    },

    "lt-03": {
      title: "Figurative language and imagery",
      domain: "literature",
      intro: `<p><strong>NES 301 competency 0006:</strong> Name simile, metaphor, personification, metonymy, synecdoche, apostrophe, paradox, symbolism, irony, and allusion by the mental move they make. The exam's &ldquo;which figure&rdquo; items are won by a two-step: describe the move, then match the term.</p>`,
      sections: [
        section(
          "Simile, metaphor, personification",
          "Figurative language says one thing in the terms of another. Imagery is language that summons sensory experience; a figure often rides on an image.",
          "Simile compares with <em>like</em>, <em>as</em>, or <em>than</em>. Metaphor identifies or substitutes (A is B; the war is a storm). Personification gives human action or feeling to something nonhuman. Dickinson's &ldquo;Hope is the thing with feathers / That perches in the soul&rdquo; is metaphor (hope = bird) plus imagery (perching, singing). Do not call every vivid description a metaphor; sometimes a crow is a crow.",
          `Like/as/than &rarr; simile<br>
          Is / becomes / implied identity &rarr; metaphor<br>
          Nonhuman does a human verb &rarr; personification<br>
          Literal sensory detail with no transfer &rarr; imagery only`,
          {
            label: "metaphor without like",
            problem: "Dickinson: &ldquo;Hope is the thing with feathers / That perches in the soul / And sings the tune without the words.&rdquo; Which figures?",
            steps: [
              "<strong>Hope is the thing with feathers:</strong> identity statement = metaphor, not simile.",
              "<strong>Perches / sings:</strong> the bird-vehicle is given living action; hope is treated as an animal presence (personification is weaker here than extended metaphor, but the bird acts).",
              "<strong>Imagery:</strong> feathers, perching, singing are sensory.",
              "<strong>MCQ move:</strong> if choices include simile, reject it&mdash;there is no <em>like</em>."
            ],
            answer: "Answer: Extended metaphor of hope as a bird; sensory imagery; not a simile."
          },
          {
            label: "personification",
            problem: "Wordsworth: &ldquo;I wandered lonely as a cloud.&rdquo; Then daffodils &ldquo;tossing their heads in sprightly dance.&rdquo; Separate the figures.",
            steps: [
              "<strong>Lonely as a cloud:</strong> simile (like/as) comparing speaker to a cloud.",
              "<strong>Tossing their heads / dance:</strong> flowers given human festive motion = personification.",
              "<strong>MCQ move:</strong> one sentence can stack figures; pick the one the stem quotes."
            ],
            answer: "Answer: Simile for the speaker; personification of the daffodils."
          },
          { problem: "Macbeth: &ldquo;Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage.&rdquo; Simile or metaphor?", hint: "Life is a player&mdash;identity, no like/as." },
          "Labeling every comparison a metaphor. If <em>like</em> or <em>as</em> is doing the work, the exam wants simile.",
          [
            check("Which line is a simile?", ["&ldquo;Life's but a walking shadow&rdquo;", "&ldquo;I wandered lonely as a cloud&rdquo;", "&ldquo;Hope is the thing with feathers&rdquo;", "&ldquo;O Captain! my Captain!&rdquo;"], 1, "As a cloud is a simile. Shadow and feathers are metaphors. O Captain is apostrophe."),
            check("Personification is present in:", ["&ldquo;The angry storm hammered the shutters.&rdquo;", "&ldquo;The storm dropped two inches of rain.&rdquo;", "&ldquo;Rain is water from clouds.&rdquo;", "&ldquo;We measured the rainfall.&rdquo;"], 0, "Angry and hammered are human traits/actions given to weather. The others can be literal report.")
          ]
        ),
        section(
          "Metonymy, synecdoche, apostrophe",
          "These three are easy to confuse. Slow down and name the substitution.",
          "Metonymy replaces a thing with something associated (the crown = monarchy; the White House = the U.S. executive). Synecdoche replaces a whole with a part or a part with a whole (all hands on deck = sailors; wheels = car). Apostrophe addresses someone absent, dead, or nonhuman as if present (&ldquo;O wild and dismal night storm&rdquo;; &ldquo;O Captain! my Captain!&rdquo;). The NES sample on Whitman's tears/storm poem is apostrophe because of the direct O-address to the storm.",
          `Associated thing &rarr; metonymy (crown / press / brass)<br>
          Part &harr; whole &rarr; synecdoche (hands, wheels, bread)<br>
          Direct address to absent/abstract/inanimate &rarr; apostrophe`,
          {
            label: "apostrophe",
            problem: "Whitman: &ldquo;O Captain! my Captain! our fearful trip is done.&rdquo; The captain is Lincoln, already dead in the elegy's situation. Why apostrophe, not metaphor alone?",
            steps: [
              "<strong>Address:</strong> <em>O Captain</em> speaks to him, not only about him.",
              "<strong>Captain/ship:</strong> also an extended metaphor for leader/nation.",
              "<strong>The stem that asks for the passionate appeal's figure:</strong> on NES, direct O-address = apostrophe (as in the storm poem).",
              "<strong>MCQ move:</strong> if you see <em>O + inanimate or absent addressee</em>, apostrophe beats synecdoche."
            ],
            answer: "Answer: Apostrophe (addressing the dead captain); the ship is also metaphor."
          },
          {
            label: "metonymy vs synecdoche",
            problem: "Compare &ldquo;The White House issued a statement&rdquo; with &ldquo;We need more boots on the ground.&rdquo;",
            steps: [
              "<strong>White House:</strong> building associated with the presidency = metonymy, not a part of a person.",
              "<strong>Boots:</strong> equipment standing for soldiers = synecdoche (part/gear for the people).",
              "<strong>Hands on deck:</strong> body part for sailors = synecdoche.",
              "<strong>MCQ move:</strong> association vs part-whole is the fork."
            ],
            answer: "Answer: White House = metonymy; boots = synecdoche."
          },
          { problem: "Keats: &ldquo;Thou still unravish'd bride of quietness&rdquo; (addressing an urn). Device?", hint: "Speaking to an object as if it could hear." },
          "Guessing synecdoche whenever a concrete noun appears. Ask whether a part stands for a whole, or a related institution stands for people.",
          [
            check("Which figure is apostrophe?", ["&ldquo;The crown will not yield.&rdquo;", "&ldquo;All hands on deck.&rdquo;", "&ldquo;O storm, embodied, rising along the beach!&rdquo;", "&ldquo;He eats like a wolf.&rdquo;"], 2, "O-address to the storm is apostrophe. Crown is metonymy; hands is synecdoche; like a wolf is simile."),
            check("&ldquo;The press hounded the mayor&rdquo; uses:", ["Synecdoche", "Metonymy", "Simile", "Apostrophe"], 1, "<em>The press</em> stands for journalists by association, not as a part of them: metonymy. Synecdoche names a part for the whole, there is no <em>like</em> or <em>as</em>, and no one is addressed.")
          ]
        ),
        section(
          "Paradox, symbolism, irony, allusion",
          "These figures work at the level of idea and cultural memory, not only a local comparison.",
          "A paradox is an apparent contradiction that holds a truth (Wordsworth: &ldquo;The Child is father of the Man&rdquo;). A symbol is a concrete thing that stably points beyond itself in the work (a white whale, a raven). Irony is a split between appearance and reality: verbal (saying the opposite), situational (outcome reverses expectation), dramatic (audience knows more than a character). An allusion is a brief pointer to another text, myth, or history that the reader is expected to import. Theme is not a figure of speech; do not pick &ldquo;theme&rdquo; on a which-device item.",
          `Contradiction that is wise &rarr; paradox<br>
          Thing that means more, repeatedly &rarr; symbol<br>
          Gap between said/meant or expected/what happens &rarr; irony<br>
          Brief borrowed reference &rarr; allusion`,
          {
            label: "which device",
            problem: "Poe's raven says only &ldquo;Nevermore&rdquo; while the speaker demands different answers. The bird also gathers cultural weight as an omen. Separate irony, symbolism, and the speaker's situation.",
            steps: [
              "<strong>Symbol:</strong> the raven becomes a concrete stand-in for unending loss.",
              "<strong>Dramatic irony (mild):</strong> we see the speaker tormenting himself with a bird that cannot converse.",
              "<strong>Not allusion unless a specific other text is pointed to;</strong> a raven-as-omen draws on folklore more than a single quotation.",
              "<strong>MCQ move:</strong> if the stem stresses the one-word refrain against the speaker's hopes, lean irony/self-torture; if it stresses the bird as meaning-bearer, symbol."
            ],
            answer: "Answer: The raven functions as a symbol of finality; the speaker's questions create a grim ironic mismatch."
          },
          {
            label: "allusion",
            problem: "A modern poem calls a doomed workplace &ldquo;our little Troy.&rdquo; What must the reader bring?",
            steps: [
              "<strong>Troy:</strong> the city of the Iliad, destroyed after a long war.",
              "<strong>Allusion's job:</strong> import siege, loss, maybe wooden-horse deceit, in two words.",
              "<strong>Not a full retelling:</strong> if the poem narrated the whole Iliad, it would be adaptation, not a glancing allusion.",
              "<strong>MCQ move:</strong> allusion = compact cultural pointer."
            ],
            answer: "Answer: Allusion to the Trojan War's destruction, used to frame the workplace."
          },
          { problem: "A fire station burns down while the crew is at a false alarm. Irony type?", hint: "Outcome reverses the institution's purpose = situational irony." },
          "Calling every sad ending ironic, or every image a symbol. A symbol recurs or is positioned to mean; a one-off description may only be imagery.",
          [
            check("Wordsworth's &ldquo;The Child is father of the Man&rdquo; is best labeled:", ["Oxymoron", "Paradox", "Irony", "Hyperbole"], 1, "A child cannot literally father an adult, yet the line holds a truth: childhood shapes the grown person. An apparent contradiction that resolves into insight is a paradox. An oxymoron squeezes opposites into one phrase, irony sets expectation against outcome, and the line does not exaggerate."),
            check("A novel names a tempting offer &ldquo;this apple in the garden.&rdquo; The device is:", ["Allusion to Genesis", "Hyperbole", "Personification", "Onomatopoeia"], 0, "Apple plus garden imports the Eden story: an allusion. Nothing is exaggerated, given human traits, or imitating a sound.")
          ]
        )
      ]
    },

    "lt-04": {
      title: "Plot, character, point of view, tone, and theme",
      domain: "literature",
      intro: `<p><strong>NES 301 competency 0005:</strong> Track plot and setting; judge narrators, including unreliable ones; separate tone from topic; and state a theme as a claim, not a one-word subject. These are the highest-frequency literature MCQ skills.</p>`,
      sections: [
        section(
          "Plot, setting, and character in motion",
          "Plot is the causal sequence of events, not a random list. Setting is time, place, and social world. Character is a figure whose choices make plot happen.",
          "Name exposition, inciting incident, rising action, climax, falling action, denouement only when they help. More useful on the exam: because X, Y. If you cannot put <em>because</em> between events, you may have sequence without plot. Setting can be antagonist (a storm, a caste system). Round characters change or reveal contradiction; flat characters serve one function.",
          `Plot test: Event A causes Event B<br>
          Setting test: if you moved the story, what would break?<br>
          Character test: what choice could have gone otherwise?`,
          {
            label: "causal plot",
            problem: "A man hides a murdered body, then hears a heartbeat and confesses. Why is this plot rather than two unrelated scenes?",
            steps: [
              "<strong>Cause:</strong> the crime produces guilt and hypervigilance.",
              "<strong>Climax:</strong> the confession is forced by that inner pressure (Poe's &ldquo;Tell-Tale Heart&rdquo; pattern).",
              "<strong>Setting:</strong> the enclosed room makes the sound inescapable.",
              "<strong>MCQ move:</strong> when asked how plot is structured, name causation and pressure, not &ldquo;it is scary.&rdquo;"
            ],
            answer: "Answer: The murder causes the psychological collapse that produces the confession."
          },
          {
            label: "setting as pressure",
            problem: "A story set in a one-room cabin in a blizzard cannot use a hospital three minutes away. What is setting doing?",
            steps: [
              "<strong>Constraint:</strong> geography and weather close off options, so choices become stark.",
              "<strong>Not mere color:</strong> snow is not only pretty; it is a rule of the fictional world.",
              "<strong>MCQ move:</strong> pick the answer that treats setting as a force on character, not a postcard."
            ],
            answer: "Answer: Setting limits action and intensifies choice."
          },
          { problem: "A character is introduced as &ldquo;the grocer&rdquo; and never given a private want. Round or flat, and why might a writer do that?", hint: "Flat figures can be efficient if the story's interest is elsewhere." },
          "Retelling the plot as a list of events with <em>and then</em> instead of <em>because</em>. Theme questions will punish a plot summary that never becomes a claim.",
          [
            check("Which sentence describes plot rather than setting?", ["The mill town is soot-black and loud after dusk.", "Because she hid the letter, the engagement collapsed at dinner.", "The year is 1842.", "Windows rattle in the west wind."], 1, "Because + consequence is plot. The others locate atmosphere or time."),
            check("A character who represents only &ldquo;greedy landlord&rdquo; and does not change is:", ["Round", "Flat (and possibly symbolic)", "Dynamic", "Protagonist"], 1, "Single-trait, unchanging figures are flat. Round characters are complex, dynamic characters change, and nothing makes the landlord the protagonist. Flat characters can still matter.")
          ]
        ),
        section(
          "Point of view and the unreliable narrator",
          "Person (first, second, third) is not the whole of point of view. Also ask: limited or omniscient? Objective or interior? Trustworthy?",
          "An unreliable narrator's account is internally crooked: contradictions, special pleading, &ldquo;I am not mad,&rdquo; facts the rest of the text undermines. First person is a warning flag, not a proof of unreliability&mdash;Jane Eyre is relatively stable; Poe's tell-tale speaker is not. Dramatic irony often rides with unreliability: we know more or know better than the speaker.",
          `Unreliable-narrator procedure:<br>
          1. Does the speaker insist on a verdict (&ldquo;not mad,&rdquo; &ldquo;she deserved it&rdquo;)?<br>
          2. Do details contradict that verdict?<br>
          3. Does the text give us a second channel (other characters, outcomes)?<br>
          If yes, do not take the speaker's adjectives as the author's.`,
          {
            label: "Poe's special pleading",
            problem: "Poe: &ldquo;TRUE!&mdash;nervous&mdash;very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses&mdash;not destroyed&mdash;not dulled them.&rdquo; Why distrust him?",
            steps: [
              "<strong>The protest:</strong> he argues sanity as his first move&mdash;a classic tell.",
              "<strong>The logic:</strong> disease that sharpens hearing is offered as proof of health.",
              "<strong>Later action</strong> (murder, dismemberment, hearing a dead heart) confirms the gap.",
              "<strong>MCQ move:</strong> unreliability is evidenced by contradiction, not by first-person alone."
            ],
            answer: "Answer: He is unreliable; his defense of sanity is part of the pathology."
          },
          {
            label: "limited third vs omniscient",
            problem: "A story follows only Mara's thoughts; we never enter the rival's mind and are surprised with her. What POV, and why this organization?",
            steps: [
              "<strong>Limited third:</strong> she/her + one mind.",
              "<strong>Why:</strong> the reader shares Mara's blind spot; the surprise is structured, not a mistake.",
              "<strong>Omniscient would leak</strong> the rival's plan and kill that effect.",
              "<strong>MCQ move:</strong> &ldquo;why this POV&rdquo; = what knowledge is withheld or granted."
            ],
            answer: "Answer: Limited third to trap the reader in Mara's ignorance."
          },
          { problem: "A narrator says a neighbor is &ldquo;always kind&rdquo; but reports that the neighbor poisons cats. Unreliable? Why?", hint: "Adjective vs reported action." },
          "Assuming third person is always objective, or that every child narrator is unreliable. Cite the contradiction.",
          [
            check("The strongest evidence of an unreliable narrator is:", ["The story uses I", "The speaker's claims clash with the events the speaker also reports", "The narrator is a child", "The narrator describes events years later"], 1, "Unreliability is a gap between what the narrator claims and what the narrator's own report shows. First person, a young narrator, or a looking-back account can make unreliability possible, but none proves it."),
            check("An omniscient narrator could most easily:", ["Know several characters' private thoughts in the same chapter", "Report only what a camera could record", "Stay inside one character's mind throughout", "Address the reader as you"], 0, "Omniscience is access across minds. Camera-like reporting is the objective point of view, staying with one mind is limited point of view, and addressing the reader as you is second person.")
          ]
        ),
        section(
          "Theme versus topic; tone as attitude",
          "A topic is a noun or noun phrase (war, marriage, guilt). A theme is a debatable claim the work makes about that topic. Tone is the speaker's attitude, evidenced by diction&mdash;not the topic itself.",
          "If your theme statement could title an encyclopedia entry, it is still a topic. Upgrade: &ldquo;War&rdquo; &rarr; &ldquo;This poem argues that industrial war wastes the young while the comfortable look away.&rdquo; Tone words must be earned from adjectives, irony, and what is lingered on. Do not call a passage about death &ldquo;morbid in tone&rdquo; if the speaker is calm or tender (Dickinson often is).",
          `Topic: childhood labor<br>
          Theme: Industrial England treats children as expendable fuel.<br>
          Tone: indignant, pleading, accusatory (from diction), not &ldquo;the tone is children.&rdquo;`,
          {
            label: "theme vs topic",
            problem: "Blake's &ldquo;London&rdquo; lists cries, bans, and &ldquo;mind-forged manacles.&rdquo; Which is a theme statement?",
            steps: [
              "<strong>Topic:</strong> the city, oppression, poverty.",
              "<strong>Theme:</strong> social and mental restraints manufacture misery that looks like fate.",
              "<strong>Too broad:</strong> &ldquo;Oppression is bad&rdquo; fits thousands of works.",
              "<strong>MCQ move:</strong> pick the choice that is a complete claim anchored in this text's images."
            ],
            answer: "Answer: Theme = a specific claim about manufactured oppression in the city, not the word <em>London</em>."
          },
          {
            label: "tone from diction",
            problem: "Two obituaries: (1) &ldquo;He kicked the bucket after a long slog.&rdquo; (2) &ldquo;She entered rest, having finished her faithful course.&rdquo; Same topic (death). What differs?",
            steps: [
              "<strong>Topic is identical.</strong>",
              "<strong>Tone:</strong> (1) irreverent, colloquial; (2) reverent, religious.",
              "<strong>Voice</strong> would be the larger stylistic signature if we had more sentences.",
              "<strong>MCQ move:</strong> when the stem says tone, hunt attitude words, not the subject matter."
            ],
            answer: "Answer: Tone differs (irreverent vs reverent); topic does not."
          },
          { problem: "Upgrade this topic into a theme: &ldquo;ambition in Macbeth.&rdquo;", hint: "Make a claim: ambition + unchecked power + moral disintegration, etc." },
          "Circling the topic word that also appears in the passage and calling it theme. Theme must be a sentence-worth of idea.",
          [
            check("Which choice is a theme rather than a topic?", ["Jealousy", "Revenge", "Unchecked suspicion can destroy the innocent and the accuser together", "Venice"], 2, "Only the third is a claim. The others are subjects or a setting."),
            check("A speaker describes a funeral with slang and jokes. The tone is most likely:", ["Solemnly reverent", "Irreverent or defensive", "Mournful", "Detached and clinical"], 1, "Diction carries tone: slang and jokes make it irreverent or defensive even though the topic is death. Reverence or mourning would show in the word choice, and jokes are not clinical detachment.")
          ]
        )
      ]
    },

    "lt-05": {
      title: "World literature, genres, and oral tradition",
      domain: "literature",
      intro: `<p><strong>NES 301 competency 0007:</strong> Distinguish fable, myth, legend, and folktale; know how oral tradition shapes style; and recognize major world genres by formal and thematic habits, not by memorizing every title.</p>`,
      sections: [
        section(
          "Fable, myth, legend, folktale",
          "These oral-rooted genres overlap, but NES items expect a clean primary purpose and typical cast.",
          "A fable is a short tale, often with animal actors, built to deliver a moral about human behavior (Aesop: slow and steady wins the race). A myth explains origins, gods, and why the world is as it is for a people. A legend is tied to a possibly historical figure or place, enlarged in the telling. A folktale is a community's traditional story for entertainment and values, not necessarily sacred explanation and not necessarily a one-line moral. Magical realism and satire are different modern modes; do not mix them in unless the item does.",
          `Fable: animals + explicit moral<br>
          Myth: gods/origins/sacred explanation<br>
          Legend: hero/place with a historical hook, enlarged<br>
          Folktale: traditional community story, flexible, often anonymous`,
          {
            label: "fable",
            problem: "A tortoise beats a mocking hare by not stopping; the closing line states that steady effort wins. Why fable rather than myth?",
            steps: [
              "<strong>Cast:</strong> animals acting as people (anthropomorphism).",
              "<strong>Job:</strong> instruct a moral, not explain the birth of the world.",
              "<strong>Length and punchline:</strong> compact, epigrammatic.",
              "<strong>MCQ move:</strong> this is the NES sample pattern&mdash;fable = moral via animal action."
            ],
            answer: "Answer: Fable&mdash;animal actors teaching a human moral."
          },
          {
            label: "myth vs legend vs folktale",
            problem: "Compare: (1) a story of how the sun was stolen and returned by a divine trickster; (2) a greatly enlarged tale of a real outlaw who could not miss a shot; (3) a village story of a clever youngest child and a witch, told in many versions.",
            steps: [
              "<strong>(1) Myth:</strong> cosmic/sacred explanation and gods or culture heroes.",
              "<strong>(2) Legend:</strong> historical seed + exaggeration.",
              "<strong>(3) Folktale:</strong> anonymous traditional plot, many variants, not a national origin story.",
              "<strong>MCQ move:</strong> ask sacred-explanation vs historical kernel vs portable household tale."
            ],
            answer: "Answer: Myth; legend; folktale."
          },
          { problem: "Why is &ldquo;a fantasy that criticizes society with huge exaggerations&rdquo; a weak definition of fable?", hint: "That description fits some satire or tall tale better than Aesop's moral-animal pattern." },
          "Using <em>myth</em> for any falsehood in ordinary speech. In literary study, myth is a genre of sacred/explanatory narrative, not &ldquo;a lie.&rdquo;",
          [
            check("Which statement best describes a fable?", ["It memorializes a documented local hero with slight exaggeration", "It dramatizes human behavior through animal characters to teach a moral", "It combines modern city life with unexplained magic as equal realities", "It recounts a hero's journey in elevated verse"], 1, "Fables teach a moral through animal characters. Legends memorialize real heroes, magical realism blends the everyday with magic, and a hero's journey in elevated verse is epic."),
            check("A story explaining why earthquakes happen through a god's shifting body is a:", ["Legend", "Myth", "Fable", "Folktale"], 1, "A story explaining a natural event through a god is a myth. Legends grow from historical figures, fables teach morals with animals, and folktales are popular stories that usually lack the sacred, explanatory role.")
          ]
        ),
        section(
          "Oral tradition: how stories live in memory",
          "Oral tradition is not &ldquo;writing poorly.&rdquo; It is a technology of memory: repetition, formula, performance, and variation.",
          "Expect epithets and repeated scenes (Homeric &ldquo;wine-dark sea&rdquo;), stock openings, call-and-response, refrains, and plots that exist in variants rather than one authorized text. Trickster cycles (Anansi, Coyote, Brer Rabbit in later print) teach by cunning and reversal. A frame tale (a story wrapping other stories, as in the larger architecture around Scheherazade or Chaucer's pilgrims) can move from oral performance into writing. When an item asks about oral style, pick repetition, formula, and communal variation&mdash;not psychological interior monologue.",
          `Oral toolkit:<br>
          Formula and epithet<br>
          Repetition and refrain<br>
          Episodes that can be expanded or cut<br>
          Performance (voice, audience, occasion)<br>
          Variants, not one frozen text`,
          {
            label: "formula and variant",
            problem: "Two tellers give the same hero different helpers but keep the three-trial structure and a closing proverb. What oral features is that?",
            steps: [
              "<strong>Stable skeleton:</strong> three trials + proverb = memorable plot grammar.",
              "<strong>Variation:</strong> helpers change with audience and teller.",
              "<strong>Not plagiarism in the print sense:</strong> communal ownership.",
              "<strong>MCQ move:</strong> oral tradition explains both sameness and difference."
            ],
            answer: "Answer: Formulaic structure with licensed variation&mdash;oral tradition, not a single fixed novel."
          },
          {
            label: "trickster",
            problem: "A smaller, weaker creature outwits a powerful one and the tale ends with laughter plus a warning. Why is this a typical oral genre move?",
            steps: [
              "<strong>Social job:</strong> critique power without a treatise; the weak win by wit.",
              "<strong>Memorable reversal:</strong> easy to retell.",
              "<strong>Not a modern psychological novel:</strong> character is a type (trickster), not a case study of childhood.",
              "<strong>MCQ move:</strong> trickster = cunning, boundary-crossing, comic instruction."
            ],
            answer: "Answer: Trickster tale&mdash;wit overturns force; a communal teaching comedy."
          },
          { problem: "Why do epics use repeated epithets (swift-footed, wine-dark)?", hint: "Meter, memory, and instant characterization in performance." },
          "Assuming oral works are naive or for children only. Epics and myths can be philosophically dense; the style is mnemonic, not simple-minded.",
          [
            check("Which feature most strongly signals oral tradition?", ["A unique, copyrighted wording that never varies", "Formulaic repetition and multiple living variants", "A single named author", "Footnotes citing sources"], 1, "Variants and formulas are the oral signature. Fixed wording, a single named author, and footnotes belong to print culture."),
            check("A frame tale is:", ["A story that contains other stories inside a wrapping situation", "A story told in flashbacks from one character's memory", "A story that begins in the middle of the action", "A story with a moral stated at the end"], 0, "Pilgrims telling tales, or a narrator delaying death with stories, are frame structures. Flashback, in medias res, and a closing moral are different devices.")
          ]
        ),
        section(
          "Major world genres and traditions (habits, not lists)",
          "World literature on this exam means recognizable formal habits across cultures: epic, lyric, drama, frame narrative, haiku, court romance, and so on&mdash;not a quiz of obscure dates.",
          "Western epic (Homer) and other long heroic narratives share catalogue, invocation, and cultural stakes. Japanese haiku isolates a seasonal moment in a tight syllabic body; tanka extends it. A ghazal (Persian/Urdu tradition) uses couplets and a repeated refrain-rhyme. West African praise poetry and griot narrative bind history to performance. The exam will give features; you match the tradition's habits. Do not pretend a haiku is a failed sonnet.",
          `Match features, not fame:<br>
          Seasonal snapshot, 5-7-5 &rarr; haiku<br>
          Heroic scale, invocation, epithet &rarr; epic<br>
          Couplets + radif/refrain &rarr; ghazal (if features are given)<br>
          Dramatic masks/chorus &rarr; classical drama traditions`,
          {
            label: "haiku vs sonnet",
            problem: "A translation presents three lines on a frog-pond splash, no volta, no iambic pentameter. A student calls it a broken sonnet. What went wrong?",
            steps: [
              "<strong>Wrong contract:</strong> sonnet is 14-line argument with a turn.",
              "<strong>Haiku habit:</strong> brief perceptual event, seasonal world, juxtaposition.",
              "<strong>MCQ move:</strong> never grade one tradition by another tradition's rules."
            ],
            answer: "Answer: It is working as haiku (moment + juxtaposition), not as a defective sonnet."
          },
          {
            label: "epic as world genre",
            problem: "Pope's public-domain opening of the <em>Iliad</em> asks the goddess to sing Achilles' wrath, &ldquo;the direful spring / Of woes unnumber'd.&rdquo; What epic habits appear in two lines?",
            steps: [
              "<strong>Invocation:</strong> the muse/goddess is asked to sing.",
              "<strong>Hero + communal woe:</strong> one wrath, many sufferings.",
              "<strong>Elevated diction:</strong> <em>direful</em>, <em>unnumber'd</em>.",
              "<strong>MCQ move:</strong> epic = invocation + cultural-scale consequence, even in a brief excerpt."
            ],
            answer: "Answer: Invocation and communal stakes&mdash;epic opening habits."
          },
          { problem: "A chorus in a Greek play comments on the action as a group voice. How is that unlike a novel's limited first person?", hint: "Communal, staged commentary vs one mind's private report." },
          "Treating &ldquo;world literature&rdquo; as a list of names to memorize. The items give stylistic traits; your job is to match the trait to the genre tradition.",
          [
            check("A brief three-line poem capturing a seasonal instant is closest to:", ["A Homeric catalogue", "Haiku", "Limerick", "Sonnet"], 1, "A seasonal snapshot in a tiny three-line lyric is the haiku habit. Limericks are five comic rhymed lines, sonnets have fourteen lines, and a catalogue is a long list."),
            check("Invocation of a muse, a hero's rage, and a nation's suffering signal:", ["Ode", "Epic opening", "Elegy", "Ballad"], 1, "A muse invocation, a hero's rage, and a nation's suffering are epic conventions (the <em>Iliad</em>). An ode praises, an elegy mourns, and a ballad is a short sung story.")
          ]
        )
      ]
    },

    "lt-06": {
      title: "Literary periods, movements, and major writers",
      domain: "literature",
      intro: `<p><strong>NES 301 competency 0007:</strong> Know periods by their characteristic questions and styles&mdash;Classical, Medieval, Renaissance, Enlightenment, Romanticism, Realism, Modernism, Harlem Renaissance, and contemporary world literature&mdash;not by trivia lists of dates and spouses.</p>`,
      sections: [
        section(
          "Classical through Enlightenment",
          "A period label is a cluster of habits, not a border checkpoint. Use it when the text's values and forms match.",
          "Classical (Greek/Roman) literature prizes public rhetoric, epic and tragic form, and arguments about fate, civic duty, and proportion. Medieval literature often frames life as pilgrimage or spiritual combat: allegory, courtly love, religious lyric, estates satire (Chaucer's pilgrims). Renaissance writing recovers classical forms with a new stress on individual talent, sonnet sequences, and humanist debate (Shakespeare, the sonnet, blank-verse drama). Enlightenment writing trusts reason, satire, essay, and social critique (Pope, Swift, Paine, Franklin): the sentence is a tool for argument.",
          `Classical: civic/tragic/epic, measure, public speech<br>
          Medieval: faith, allegory, pilgrimage, courtly code<br>
          Renaissance: humanist self, sonnet, recovered classics on the stage<br>
          Enlightenment: reason, satire, essay, universal claims in prose`,
          {
            label: "period by habit",
            problem: "Chaucer's pilgrims tell tales on the road to Canterbury. Pope writes rhymed satires about critics and dunces. Which period habits are showing?",
            steps: [
              "<strong>Chaucer:</strong> pilgrimage frame, estates comedy, mix of sacred destination and earthly voices = Medieval narrative world.",
              "<strong>Pope:</strong> polished couplets scoring intellectual folly = Enlightenment/neoclassical satire.",
              "<strong>Do not use &ldquo;old&rdquo; as the only axis.</strong>",
              "<strong>MCQ move:</strong> match frame-pilgrimage vs reason-satire."
            ],
            answer: "Answer: Medieval frame-pilgrimage vs Enlightenment verse satire."
          },
          {
            label: "Renaissance vs Classical on stage",
            problem: "Sophocles's Oedipus pursues a civic plague to a fate already spun. Shakespeare's Hamlet delays inside a soliloquy. What shifted?",
            steps: [
              "<strong>Classical tragedy:</strong> public ritual, chorus, fate and knowledge.",
              "<strong>Renaissance drama:</strong> still public, but interior debate (soliloquy) becomes a main engine&mdash;humanist attention to the self.",
              "<strong>Both can be tragedies;</strong> the inner pause is the Renaissance signature in this contrast.",
              "<strong>MCQ move:</strong> soliloquy-as-engine points Renaissance more than Greek chorus."
            ],
            answer: "Answer: Hamlet's prolonged interior argument is a Renaissance dramatic habit; Oedipus's civic-fate plot is Classical tragedy."
          },
          { problem: "Paine: &ldquo;These are the times that try men's souls.&rdquo; Why is this Enlightenment political prose rather than Romantic nature lyric?", hint: "Public crisis, civic &ldquo;men,&rdquo; persuasive essay cadence&mdash;not a daffodil." },
          "Memorizing start years (1492, 1798) as if the exam were a history multiple-choice. The passage's habits beat the timeline.",
          [
            check("A polished satire in heroic couplets attacking dullness and bad writing is most at home in the:", ["Harlem Renaissance", "Enlightenment / neoclassical mode", "Romanticism", "Modernism"], 1, "Pope-style couplet satire against dullness is Enlightenment neoclassicism. Romanticism prized feeling over polish, Modernism broke inherited forms, and the Harlem Renaissance was a twentieth-century Black arts movement."),
            check("A pilgrimage frame with mixed social estates telling tales is a hallmark of:", ["Medieval narrative (Chaucer)", "Renaissance pastoral", "Enlightenment satire", "Romantic lyric"], 0, "The Canterbury Tales' pilgrimage frame, with tellers from every estate, is the standard medieval example. Pastoral idealizes shepherds, Enlightenment satire mocks in polished verse, and the Romantic lyric centers one feeling speaker.")
          ]
        ),
        section(
          "Romanticism, Realism, Modernism",
          "These three are often contrasted on the same exam item. Keep the forks clean.",
          "Romanticism (roughly early 19th century in Britain) elevates imagination, nature, childhood, the individual sublime, and political hope or disillusion after revolution (Wordsworth, Coleridge, Shelley, Keats, Blake's prophetic strain). Realism later insists on ordinary social worlds, money, class, and probable cause (Austen sits near the turn; George Eliot, Flaubert, Tolstoy, Twain, Douglass's documentary scenes also train a realist eye on actual institutions). Modernism (early 20th) fragments form, doubts easy meaning, experiments with time and consciousness (Eliot, Woolf, Joyce): &ldquo;Make it new,&rdquo; but the new is often broken.",
          `Romanticism: imagination, nature, the singular self, the sublime<br>
          Realism: probable social world, class, observation<br>
          Modernism: fragment, experiment, alienated consciousness, broken time`,
          {
            label: "Romantic vs Realist",
            problem: "Wordsworth wanders &ldquo;lonely as a cloud&rdquo; until daffodils fill the inward eye. Twain's Huck speaks in dialect about a runaway and a river economy. What habits differ?",
            steps: [
              "<strong>Wordsworth:</strong> nature as spiritual restoration; lyric self; memory as treasure = Romantic.",
              "<strong>Twain:</strong> vernacular voice, social hypocrisy, probable river world = Realist (with satire).",
              "<strong>Both can moralize;</strong> the source of truth differs (inward nature vs social observation).",
              "<strong>MCQ move:</strong> daffodil-memory vs dialect-and-institutions."
            ],
            answer: "Answer: Romantic lyric of nature-and-self vs Realist social vernacular world."
          },
          {
            label: "Modernist break",
            problem: "Eliot's &ldquo;Prufrock&rdquo; (1915) begins &ldquo;Let us go then, you and I, / When the evening is spread out against the sky / Like a patient etherised upon a table.&rdquo; Why not Romantic?",
            steps: [
              "<strong>Simile of the etherized patient:</strong> urban, clinical, anti-sublime.",
              "<strong>Hesitant modern self:</strong> not a prophet-poet in the mountains.",
              "<strong>Form:</strong> drifting, associative, not a closed ode of consolation.",
              "<strong>MCQ move:</strong> Modernism often ironizes the Romantic sunset."
            ],
            answer: "Answer: Modernist: urban paralysis and experimental simile, not nature-sublime consolation."
          },
          { problem: "A novel spends chapters on how a provincial bank actually clears a check, with no supernatural events. Period habit?", hint: "Ordinary institutions + probable cause = Realism." },
          "Calling anything emotional Romantic, or anything sad Modernist. Romanticism is a theory of imagination and nature; Modernism is a crisis of form and meaning after industrial modernity.",
          [
            check("Which excerpt best illustrates Romantic habit?", ["A ledger of mill wages in 1872", "A lyric in which memory of a natural scene restores the speaker's mind", "A collage of pub talk and mythic fragments with no single narrator", "A polished couplet mocking fashionable society"], 1, "Nature plus memory plus a restored self is Wordsworthian Romanticism. The ledger is Realist, the collage is Modernist, and couplet satire is Enlightenment."),
            check("Modernist fiction is most likely to:", ["Trust a single omniscient moralizer without irony", "Fragment time and point of view to show consciousness under strain", "Follow a strict chronological plot with a clear resolution", "Present characters as products of heredity and environment"], 1, "Broken time and unstable point of view are Modernist signatures. A trusted moralizing narrator and tidy chronology belong to earlier fiction, and heredity-and-environment determinism is Naturalism.")
          ]
        ),
        section(
          "Harlem Renaissance and contemporary world literature",
          "Do not reduce these to a list of names. Name the project and the forms.",
          "The Harlem Renaissance (1920s&ndash;30s) is a flowering of Black arts that claims modern, classical, and folk resources at once: jazz cadence, sonnet, vernacular, African diasporic memory. Hughes's 1921 &ldquo;The Negro Speaks of Rivers&rdquo; (&ldquo;My soul has grown deep like the rivers&rdquo;) links a speaker's soul to ancient waters&mdash;personal voice as world-historical claim. Contemporary world literature (late 20th&ndash;21st) is not one style: postcolonial rewriting of empire, hybrid languages, migration narratives, and global cities are recurring concerns. Teach the habit (who gets to narrate history, how language is mixed), not a celebrity roll call. Do not quote writers still in copyright as if they were exam set pieces.",
          `Harlem Renaissance: Black modern art, vernacular + high form, diaspora memory<br>
          Contemporary world lit: empire's afterlives, migration, hybrid voice, contested history<br>
          Characteristic test: what problem is the style built to solve?`,
          {
            label: "Hughes as movement evidence",
            problem: "Hughes: &ldquo;I've known rivers ancient as the world and older than the flow of human blood in human veins. / My soul has grown deep like the rivers.&rdquo; What movement claim is in the simile?",
            steps: [
              "<strong>Ancient rivers:</strong> the speaker's lineage is civilizational, not a footnote.",
              "<strong>Soul grown deep:</strong> interior dignity matched to world time.",
              "<strong>Harlem Renaissance project:</strong> modern lyric as a claim to history and art, against racist exclusion.",
              "<strong>MCQ move:</strong> pick the characteristic (diasporic depth, proud modern voice), not a random year."
            ],
            answer: "Answer: A modern Black lyric claiming ancient, global depth of soul and history."
          },
          {
            label: "contemporary habit without trivia",
            problem: "A late-20th-century novel retells a colonial adventure from the islanders' point of view in a mix of English and a local creole. What contemporary world-lit habit is that?",
            steps: [
              "<strong>Rewrite from the margin:</strong> the old imperial plot is no longer the owner's story.",
              "<strong>Hybrid language:</strong> English is not transparent or alone.",
              "<strong>This is a characteristic, not a title to memorize.</strong>",
              "<strong>MCQ move:</strong> match &ldquo;who speaks&rdquo; and &ldquo;which language mix,&rdquo; not the author's birthday."
            ],
            answer: "Answer: Postcolonial retelling plus linguistic hybridity&mdash;a contemporary world-literature habit."
          },
          { problem: "Why is &ldquo;lists every Harlem writer&rdquo; a weak study strategy compared with &ldquo;vernacular plus sonnet plus diasporic history&rdquo;?", hint: "NES asks characteristics of movements." },
          "Treating the Harlem Renaissance as only &ldquo;jazz background&rdquo; or contemporary literature as only &ldquo;anything recent.&rdquo; Name the artistic problem each movement is solving.",
          [
            check("A defining characteristic of Harlem Renaissance writing is:", ["A refusal to use lyric or sonnet forms", "Modern Black artistic self-definition using both vernacular and high-literary resources", "Expatriate writers reacting to World War I", "Fragmented forms that reject all tradition"], 1, "The movement claims the full toolkit, from blues to McKay's sonnets. Expatriate post-war writing is the Lost Generation, and rejecting all tradition misdescribes a movement that drew on folk and classical forms."),
            check("Contemporary world literature is best approached on this exam by:", ["Memorizing every Booker Prize winner", "Recognizing recurring concerns such as migration, empire's afterlives, and hybrid language", "Reading it mainly as autobiography", "Treating it as a branch of British literature"], 1, "Recognize characteristic concerns, not trivia. Reading every work as autobiography or as British literature erases the variety the exam asks about.")
          ]
        )
      ]
    },

    "lt-07": {
      title: "Literature as social and historical argument",
      domain: "literature",
      intro: `<p><strong>NES 301 competency 0008:</strong> Read literature as public argument: how writers comment on labor, rights, gender, and war, and how they try to move opinion. Use short public-domain evidence&mdash;Barrett Browning, Douglass, Equiano, Sojourner Truth&mdash;not biography trivia.</p>`,
      sections: [
        section(
          "Labor and the industrial child: Browning",
          "A poem can lobby. Ask what social arrangement the speaker wants the reader to find intolerable.",
          "Elizabeth Barrett Browning's 1843 &ldquo;The Cry of the Children&rdquo; answers reports of children in mines and factories. The NES excerpt shows children who cannot imagine meadow play because their world is &ldquo;the dark of the coal-shadows.&rdquo; The rhetorical job is to influence public opinion on child labor, not to teach botany. On items, match the images (mine, shroud, denied play) to the issue, and reject nearby wrong issues (truancy, infant mortality) that the lines do not actually argue.",
          `Social-argument procedure:<br>
          1. Who suffers, in what workplace or law?<br>
          2. What does the speaker ask the reader to feel and then do?<br>
          3. Which issue do the concrete nouns name?<br>
          Distractors will be other real problems the excerpt does not show.`,
          {
            label: "NES Browning pattern",
            problem: "Browning: &ldquo;Go out, children, from the mine and from the city, / Sing out, children, as the little thrushes do&hellip; But they answer, &lsquo;Are your cowslips of the meadows / Like our weeds anear the mine? / Leave us quiet in the dark of the coal-shadows.&rsquo;&rdquo; What issue is she pressing?",
            steps: [
              "<strong>Concrete world:</strong> mine, city, coal-shadows&mdash;child workers, not absentees from school as the main claim.",
              "<strong>The failed invitation to play</strong> shows childhood already spent.",
              "<strong>Shroud imagery elsewhere in the poem</strong> (&ldquo;ceremen from the grave&rdquo;) raises death-in-life, not a separate infant-mortality pamphlet.",
              "<strong>MCQ move:</strong> child labor exploitation, not truancy or a generic &ldquo;sad children.&rdquo;"
            ],
            answer: "Answer: Public opinion against child labor in mines and factories."
          },
          {
            label: "how the poem argues",
            problem: "Why might Browning give the children a reply instead of only describing them from above?",
            steps: [
              "<strong>Voice:</strong> the victims speak; they refuse the comfortable pastoral.",
              "<strong>Effect on the middle-class reader:</strong> your cowslips are irrelevant to our weeds.",
              "<strong>This is pathos with an ethical sting</strong> (you enjoy a landscape they cannot).",
              "<strong>MCQ move:</strong> structure (invitation + refusal) is the argument, not an extra moral tacked on."
            ],
            answer: "Answer: The children's refusal makes the pastoral solution look naive and indicts the reader."
          },
          { problem: "Why is &ldquo;infant mortality rates&rdquo; a tempting wrong answer to the Browning excerpt?", hint: "Death imagery is there, but the scene is labor in the mine, not a census of infants." },
          "Picking any social problem you know was real in 1843. The excerpt must license the issue.",
          [
            check("In the mine-and-cowslip excerpt, Browning is most clearly trying to influence opinion about:", ["Elementary truancy", "Child labor exploitation", "The decline of farming", "Crowding in industrial cities"], 1, "Mines, coal-shadows, and denied play point to the exploitation of child labor. The children are not skipping school, and the poem is not about farming or city crowding."),
            check("The children's question about cowslips vs weeds near the mine functions as:", ["A complaint that the meadow is too far away", "A rebuttal to a comfortable pastoral solution", "Evidence that the children prefer the mine", "A comic interruption that lightens the poem"], 1, "The children reject the speaker's meadow as unlike their world, rebutting the comfortable solution. They do not prefer the mine, the problem is not distance, and the moment is bitter, not comic.")
          ]
        ),
        section(
          "Enslavement, testimony, and rights: Equiano, Douglass, Truth",
          "Slave narratives and abolitionist speeches use first-person witness as evidence. Read them as argument, not only as story.",
          "Olaudah Equiano's <em>Interesting Narrative</em> (1789) makes the Middle Passage thinkable for British readers who had not seen it. Frederick Douglass's 1845 <em>Narrative</em> shows how literacy and public speech contest the legal lie that an enslaved person is not a full mind. Sojourner Truth's 1851 speech (as later printed) yokes race and gender: the protections offered &ldquo;women&rdquo; were never offered to her. Each writer comments on a historical institution and tries to change the audience's map of who counts as human.",
          `Testimony procedure:<br>
          What can this speaker know that the audience does not?<br>
          Which law or custom is on trial?<br>
          Where does the text turn witness into a public claim?`,
          {
            label: "Douglass",
            problem: "Douglass writes that he will show &ldquo;how a slave was made a man,&rdquo; after showing how a man was made a slave. What social argument is packed into that chiasmus?",
            steps: [
              "<strong>Institution first:</strong> enslavement is a making, not a nature.",
              "<strong>Reversal:</strong> education, resistance, and self-possession are also a making.",
              "<strong>Audience:</strong> readers who treat slavery as given must see it as produced&mdash;and reversible in the human being's standing.",
              "<strong>MCQ move:</strong> the issue is human rights under slavery, not a vague &ldquo;self-help&rdquo; slogan."
            ],
            answer: "Answer: Enslavement is an imposed unmaking; freedom and manhood are reclaimed standing, not a gift of the master."
          },
          {
            label: "Equiano and Truth",
            problem: "Equiano describes being &ldquo;persuaded that I had gotten into a world of bad spirits&rdquo; aboard a slave ship. Truth: &ldquo;Nobody ever helps me into carriages&hellip; And ain't I a woman?&rdquo; What does each force the audience to face?",
            steps: [
              "<strong>Equiano:</strong> the slave ship as a moral otherworld&mdash;readers must see terror, not a cargo list.",
              "<strong>Truth:</strong> white gender courtesy is class-and-race exclusive; womanhood already includes her labor and pain.",
              "<strong>Both:</strong> the audience's categories (commerce, ladyhood) fail the witness.",
              "<strong>MCQ move:</strong> match Equiano to the trade/Middle Passage; Truth to gender-and-race rights together."
            ],
            answer: "Answer: Equiano indicts the slave trade's horror; Truth indicts a feminism or courtesy that excludes Black women."
          },
          { problem: "Why is a slave narrative both literature and political evidence?", hint: "Craft (scene, irony, address) serves a public claim about an institution." },
          "Reading these texts only as &ldquo;historical background&rdquo; and skipping how the sentences argue. Competency 0008 wants the literary work as the comment.",
          [
            check("Sojourner Truth's &ldquo;Ain't I a woman?&rdquo; most directly challenges:", ["Laws denying women the vote", "A definition of womanhood that excludes Black women's labor and strength", "Northern indifference to slavery", "Church teaching on marriage"], 1, "The repeated question tests who counts as a woman, challenging a definition that excludes Black women's labor and strength. Suffrage, abolition politics, and church teaching surround the speech but are not the refrain's target."),
            check("Equiano's shipboard terror is best read, for this competency, as:", ["A personal memoir with no public purpose", "Literary witness meant to turn readers against the slave trade", "A travel narrative describing the voyage", "An adventure tale meant mainly to entertain"], 1, "The narrative's job is public persuasion about an institution. It is personal and describes a voyage, but its purpose is to turn readers against the trade, not to record travel or entertain.")
          ]
        ),
        section(
          "Gender, war, and reading literature as public speech",
          "Writers comment on war, gender, and rights in every period. The method stays the same: issue, audience, literary means.",
          "Austen's ironic opening about rich men and wives is also a comment on a marriage market that treats women as seekers of economic shelter. Whitman's &ldquo;O Captain!&rdquo; mourns Lincoln at the Civil War's end: national victory and intimate grief in one extended metaphor. Blake's London hears &ldquo;mind-forged manacles&rdquo; in every cry&mdash;political critique as lyric. When an item asks how a writer influenced opinion, name the issue the images actually prosecute, then the device (apostrophe, irony, testimony, refrain).",
          `Issue &rarr; audience &rarr; device &rarr; intended shift in opinion<br>
          Keep the chain; do not stop at &ldquo;the author is sad.&rdquo;`,
          {
            label: "gender and irony",
            problem: "Austen's &ldquo;truth universally acknowledged&rdquo; that a rich single man must want a wife actually shows families needing to place daughters. How is this social comment?",
            steps: [
              "<strong>Surface proverb</strong> blames bachelors' desire.",
              "<strong>The novel's world</strong> shows women's economic vulnerability.",
              "<strong>Irony</strong> is the argument: the &ldquo;universal truth&rdquo; is a custom serving a gendered market.",
              "<strong>MCQ move:</strong> the issue is gender and property in marriage, not a dating tip."
            ],
            answer: "Answer: Ironic critique of a marriage system that pressures women economically."
          },
          {
            label: "war elegy as public feeling",
            problem: "Whitman: &ldquo;O Captain! my Captain! our fearful trip is done, / The ship has weather'd every rack, the prize we sought is won.&rdquo; The captain lies fallen. What public work does the apostrophe do?",
            steps: [
              "<strong>Ship/captain:</strong> Union/Lincoln after the Civil War.",
              "<strong>Apostrophe:</strong> the nation is overheard addressing the dead leader.",
              "<strong>Mixed message:</strong> victory (&ldquo;prize&rdquo;) and unusable grief (the captain cannot hear).",
              "<strong>MCQ move:</strong> war's cost inside a victory poem, not a navy manual."
            ],
            answer: "Answer: A public elegy that lets readers feel victory and loss together after war."
          },
          { problem: "Blake's &ldquo;mind-forged manacles&rdquo;: labor law, or something else too?", hint: "Manacles are mental as well as legal&mdash;ideology plus institution." },
          "Stopping at the author's life (&ldquo;Whitman was a nurse&rdquo;) instead of the text's public claim. Biography can help; the exam still wants the excerpt.",
          [
            check("Austen's opening sentence is most defensible as a comment on:", ["Romantic love as the basis of marriage", "Gender, money, and marriage as a social market", "The decline of the landed gentry", "The education of young women"], 1, "The joke about wealthy bachelors and wives treats marriage as a market shaped by gender and money. The sentence mocks the idea that love drives the match, and it says nothing about the gentry's decline or education."),
            check("When an NES item asks how a writer influenced opinion, the best first move is to:", ["Name the issue licensed by the excerpt's concrete details, then the literary means", "Recall the author's biography and historical period", "Identify the excerpt's genre first", "Summarize the plot of the full work"], 0, "Issue plus means is competency 0008's decision procedure. Biography, genre labels, and full-work summaries can give context but do not answer how this excerpt influences opinion.")
          ]
        )
      ]
    }
  });
})();
