/* NES English Language Arts (301) Domain IV — competencies 0012–0015 */
(function () {
  const { section, check } = window.LessonKit;

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "wr-01": {
      title: "Narrative writing: scene, sequence, and voice",
      domain: "writing",
      intro: `<p><strong>NES 301 competency 0012:</strong> Narrative writing recounts an event or personal experience. Limit the subject, choose a sequence (chronological, flashback, or in medias res), load scenes with sensory detail and specific nouns/strong verbs, and control style, tone, voice, and diction.</p>`,
      sections: [
        section(
          "Limiting the subject and choosing a sequence",
          "A narrative is a story with people, a setting, and a change — not a list of everything that happened in a year. Sequence is the order the reader meets events, which may differ from calendar order.",
          "Limit the subject to <strong>one event or a tightly linked sequence</strong> (the tryout, not \"my whole ninth-grade year\"). Then pick an order: <strong>chronological</strong> (easiest clarity), <strong>flashback</strong> (present frame that dips into the past for meaning), or <strong>in medias res</strong> (start in the middle of action, then fill in). The exam asks which pattern fits a purpose, not which pattern is \"more creative.\"",
          `<table><tr><th>Pattern</th><th>Reader experience</th><th>Use when</th></tr>
<tr><td>Chronological</td><td>Beginning → middle → end</td><td>Cause and consequence must stay obvious</td></tr>
<tr><td>Flashback</td><td>Now, then a past scene, back to now</td><td>The present only makes sense through a past moment</td></tr>
<tr><td>In medias res</td><td>Crisis first, then backstory</td><td>You want urgency; you will still explain how we got here</td></tr></table>`,
          {
            label: "subject too wide",
            problem: "Prompt: write about a time you changed your mind. Draft title: <em>My Life in Sports, Band, and Friendship, 2019–2025.</em> Which revision of the subject is best?",
            steps: [
              "<strong>The prompt asks for a time</strong> — one turning point, not a memoir of six years and three domains.",
              "<strong>Limit:</strong> the ten minutes after being cut from JV, or the bus ride home after the callback list.",
              "<strong>A limited subject</strong> can still imply a larger life; an unlimited subject cannot be a scene."
            ],
            answer: "Best subject: one concrete episode in which the change of mind actually happens."
          },
          {
            label: "which sequence fits",
            problem: "A student wants readers to feel panic first, then understand why the kiln door was opened. Which organizational pattern is best?",
            steps: [
              "<strong>Panic first</strong> means do not start with a calm morning timeline.",
              "<strong>In medias res</strong> opens on the alarm and the rush of heat, then steps back to the missed temperature check.",
              "<strong>Chronological would bury the panic</strong> under setup; flashback would start in a later \"now\" that this story may not need."
            ],
            answer: "In medias res: start in the crisis, then supply the missed step."
          },
          {
            problem: "A narrative about a lost solo starts at birth, covers every concert, and ends at last night's recital. What should the writer cut toward?",
            hint: "Limit to the recital night (or the rehearsal when the music disappeared). Other years can appear only as a brief flashback if they explain this night."
          },
          "Choosing in medias res because it sounds advanced, then never explaining the setup, so readers cannot follow. Pattern is a tool for meaning, not a badge.",
          [
            check(
              "Which organizational pattern best fits a personal narrative whose meaning depends on a childhood kitchen scene the narrator only understands now as a senior?",
              [
                "A present-day frame with a flashback to the kitchen, then a return to the present insight",
                "A strict minute-by-minute chronology of the senior year only, with the kitchen omitted",
                "In medias res starting at graduation, with no return to the kitchen",
                "A cause-effect report with statistics about kitchens"
              ],
              0,
              "Flashback is for a past scene that interprets the present. Omitting the kitchen drops the meaning; a report is the wrong mode."
            ),
            check(
              "A prompt asks students to recount one event that taught them a lesson. Which subject is appropriately limited?",
              [
                "The moment the understudy had to go on after the lead's microphone failed",
                "Everything that happened in drama club since sixth grade",
                "A history of theater in America",
                "Why art is important to society"
              ],
              0,
              "One staged moment can carry a lesson. A multi-year dump, a history lecture, and a slogan are not limited narrative subjects."
            )
          ]
        ),
        section(
          "Sensory details, specific nouns, and strong verbs",
          "Readers inhabit a scene through senses and precise language. Abstract labels (<em>it was chaotic</em>) tell; concrete nouns and verbs show.",
          "Build scenes with <strong>sensory detail</strong> (sight, sound, smell, touch, taste — only what this moment actually offers). Prefer <strong>specific nouns</strong> (<em>clarinet case</em> not <em>thing</em>) and <strong>strong verbs</strong> (<em>jolted</em> not <em>was very sudden</em>). Adverbs and adjectives can help, but they often paper over a vague noun. Do not flood every sentence with all five senses; that becomes a catalog, not a scene.",
          `<pre>TELL: The cafeteria was loud and I was nervous.
SHOW: Trays clattered. A ketchup packet popped.
      I folded the tryout form until the crease split.

WEAK NOUN + WEAK VERB: The guy went over to the thing.
STRONG: Mateo edged toward the kiln door.</pre>`,
          {
            label: "replace a vague telling sentence",
            problem: "Which revision is best? <em>The gym was really chaotic and I felt a lot of emotions.</em>",
            steps: [
              "<strong>Chaotic</strong> and <strong>emotions</strong> are labels. Ask: what did you hear, see, do?",
              "<strong>Pick two or three concrete beats:</strong> a whistle, a loose basketball, a name on a clipboard.",
              "<strong>Best:</strong> <em>A whistle cracked twice. A basketball rolled under the bleachers. My name was not on the clipboard.</em>"
            ],
            answer: "Specific objects and actions beat intensifiers like <em>really</em> and <em>a lot</em>."
          },
          {
            label: "strong verb vs. piled modifiers",
            problem: "Which sentence is strongest? A) <em>She very quickly and suddenly went to the door in a really hurried way.</em> B) <em>She lunged for the door.</em>",
            steps: [
              "<strong>A stacks adverbs</strong> on the weak verb <em>went</em>.",
              "<strong>B's verb already contains speed and urgency.</strong>",
              "<strong>Exam takeaway:</strong> one exact verb usually outranks a swarm of modifiers."
            ],
            answer: "<em>She lunged for the door</em> is the stronger narrative sentence."
          },
          {
            problem: "Revise: <em>The food was good and the room was nice.</em> for a scene at a neighborhood potluck.",
            hint: "Name a dish, a smell, a sound, a physical action (passing a pan, wiping a table). Delete <em>good</em> and <em>nice</em>."
          },
          "Pasting a sensory checklist onto a scene that does not need taste or smell. Irrelevant senses feel fake. Also, specific is not the same as overlong: three sharp details beat twelve.",
          [
            check(
              "Which revision is best for: <em>It was a messy, bad, stressful morning in the art room.</em>",
              [
                "Clay water had spilled down the slab table and the kiln timer was still blinking red.",
                "It was a very, very messy, bad, super-stressful morning in the art room.",
                "The art room had a lot of stuff and things everywhere.",
                "Morning. Art. Stress."
              ],
              0,
              "Concrete nouns and a telling object (the blinking timer) show the mess. Intensifiers, vague stuff, and fragments do not."
            ),
            check(
              "Which sentence uses a strong verb and a specific noun most effectively?",
              [
                "Jordan jammed the tuba case into the only empty locker.",
                "Jordan put her thing into a place.",
                "Jordan went and did something with her instrument in a kind of quick way.",
                "Jordan was the one who was putting something somewhere."
              ],
              0,
              "<em>Jammed</em> and <em>tuba case</em> carry the scene. Weak verbs plus vague nouns force the reader to invent the picture."
            )
          ]
        ),
        section(
          "Style, tone, voice, and diction in narrative",
          "Diction is word choice. Tone is the writer's attitude toward the subject. Voice is the distinctive personality of the telling. Style is how those choices work together.",
          "Match diction to narrator and moment: a six-year-old narrator should not suddenly sound like a legal brief unless that clash is the point. Tone can be wry, grave, tender, or bitter — but it should be <strong>controlled</strong>, not a mood swing every sentence. Voice comes from consistent syntax and diction (short punches vs. long rolling sentences), not from slang sprinkled at random. The exam asks which diction shift would damage voice or which tone fits the scene.",
          `<table><tr><th>Choice</th><th>Question to ask</th></tr>
<tr><td>Diction</td><td>Would this narrator actually say this word in this moment?</td></tr>
<tr><td>Tone</td><td>What attitude toward the event should the reader feel?</td></tr>
<tr><td>Voice</td><td>If I cover the name, could I still tell who is speaking?</td></tr>
<tr><td>Style</td><td>Do sentence length and sound match the emotion of the scene?</td></tr></table>`,
          {
            label: "diction that breaks voice",
            problem: "A first-person narrative in a child's voice at a county fair includes: <em>I subsequently ascertained that the livestock exhibition was suboptimal.</em> Which revision is best?",
            steps: [
              "<strong>The diction is adult-academic</strong> and fights the established child's voice.",
              "<strong>Keep the meaning, change the words:</strong> <em>Then I saw the goats, and they looked bored.</em>",
              "<strong>Unless the joke is that the child is imitating an adult,</strong> which the rest of the draft has not set up, the mismatch is an error."
            ],
            answer: "Revise inflated diction so it matches the narrator's voice."
          },
          {
            label: "tone control after a serious scene",
            problem: "A narrative about a grandparent's funeral ends the graveside scene with a punchline about cafeteria pizza. What is the problem?",
            steps: [
              "<strong>Tone can include dark humor,</strong> but only if the whole piece has earned that voice.",
              "<strong>A sudden joke that belongs to another essay</strong> feels like the writer flinched.",
              "<strong>Either commit to a wry voice earlier</strong> or end on an image that stays with the funeral's gravity."
            ],
            answer: "Do not lurch in tone unless the narrative has prepared the shift."
          },
          {
            problem: "A writer wants a breathless chase down a hallway. The draft uses long, nested sentences with three semicolons. What style move fits?",
            hint: "Shorten. Voice and style should speed up with the action: short sentences, strong verbs, fewer nested clauses."
          },
          "Confusing voice with nonstandard spelling in every word, or confusing tone with the character's mood. A calm narrator can describe a terrified character; that is control, not a mistake.",
          [
            check(
              "A reflective narrative about failing a driving test is mostly quiet and precise. Which sentence would most damage that voice?",
              [
                "LOL that examiner was TOTALLY a villain, not gonna lie, yeet the score sheet!!!",
                "The examiner's pencil paused on the parallel-park box.",
                "I turned the key and the engine caught on the second try.",
                "Rain filmed the rear window."
              ],
              0,
              "A sudden shout of internet slang breaks a quiet, precise voice. The other sentences match a controlled reflective style."
            ),
            check(
              "Which diction best fits a serious first-person account of waiting for a medical-test result in a school clinic?",
              [
                "The clock's second hand stuck, then jumped.",
                "The vibe was kinda sus and stuff.",
                "One must endeavor to remain cognizant of temporal dilatation.",
                "It was like, you know, whatever."
              ],
              0,
              "Plain, specific diction can be serious. Slang shrugs and fake-elevated vocabulary both fight the occasion."
            )
          ]
        )
      ]
    },

    "wr-02": {
      title: "Expository writing: thesis, explanation, and clarity",
      domain: "writing",
      intro: `<p><strong>NES 301 competency 0013:</strong> Expository writing explains or informs. Limit the subject, pair a focusing question with a thesis, choose cause-effect, problem-solution, or chronological organization, support with statistics and examples, and keep the style direct, simple, and succinct.</p>`,
      sections: [
        section(
          "Limit the subject; focusing question and thesis",
          "Expository writing answers a real question with information, not with a demand that the reader vote. The focusing question is the writer's private compass; the thesis is the public one-sentence answer.",
          "Limit by asking: What exactly am I explaining, to whom, at what scale? A focusing question such as <em>How does the courtyard rain garden keep the band-room floor dry?</em> produces a thesis such as <em>The rain garden diverts runoff through gravel, native roots, and an overflow pipe before water can reach the band-room door.</em> Do not turn exposition into persuasion by sneaking in \"everyone must.\" Do not hide the thesis in a topic announcement.",
          `<pre>Focusing question (writer) → Thesis (reader)
How does X work?            → X works by A, B, and C.
What caused Y?              → Y resulted from P, then Q.
How is Z done?              → Z is done in these steps.

WEAK thesis: Rain gardens are interesting.
WEAK thesis: You should build a rain garden tomorrow (that's persuasive).</pre>`,
          {
            label: "question and thesis that match",
            problem: "Focusing question: <em>How does the late bell affect passing time between the science wing and the gym?</em> Which thesis is best?",
            steps: [
              "<strong>The question is how</strong> — the thesis must explain a mechanism or measured effect, not praise or scold.",
              "<strong>Reject:</strong> \"Passing time is important\" (topic) and \"The principal should change the bell\" (persuasive).",
              "<strong>Best:</strong> <em>Students leaving third-period chemistry cannot reach PE before the late bell because the only open corridor adds a three-minute detour around construction.</em>"
            ],
            answer: "The thesis must answer the focusing question in explanatory form."
          },
          {
            label: "subject still too broad",
            problem: "A student writes an \"expository\" paper titled <em>Energy.</em> Which limited subject is best for a 700-word explanation?",
            steps: [
              "<strong>Energy</strong> is a field, not a subject.",
              "<strong>Limit to a system the writer can actually explain:</strong> how the school's solar canopy feeds the library lights on a cloudy day.",
              "<strong>Then write the focusing question</strong> before drafting body paragraphs."
            ],
            answer: "Explain one local system, not the concept of energy in general."
          },
          {
            problem: "Turn this topic into a focusing question + thesis: cafeteria compost bins.",
            hint: "Question: How do the two-bin carts reduce bagged trash at lunch? Thesis: state the steps (sort, empty, weigh) and the result in one sentence."
          },
          "Writing a focusing question you never answer, or answering a different question than you asked. If the question is <em>how</em>, a thesis that only says <em>should</em> has switched modes.",
          [
            check(
              "Which thesis best matches the focusing question <em>How does the library's laptop-checkout system work for a student with overdue books?</em>",
              [
                "A student with overdue books can still reserve a laptop online but must clear the fine at the desk before the case is handed over.",
                "Laptops are good for learning in the twenty-first century.",
                "The library should abolish all fines immediately.",
                "This paper is about laptops and also about fines and also about desks."
              ],
              0,
              "The first sentence explains the procedure the question asked for. The others announce, persuade, or sprawl."
            ),
            check(
              "A writer wants to inform new freshmen how to audition for jazz band. Which subject is appropriately limited?",
              [
                "The three-step audition: sign-up sheet, one-minute prepared piece, eight-bar sight-read",
                "The entire history of jazz",
                "Why music matters to humanity",
                "My feelings about every teacher in the building"
              ],
              0,
              "Exposition for this audience needs the procedure, not a history of a genre or a manifesto."
            )
          ]
        ),
        section(
          "Organizational patterns: cause-effect, problem-solution, chronological",
          "Once the thesis is set, pick the skeleton that matches the question. Chronological order is for processes and histories. Cause-effect is for why. Problem-solution is for explaining a difficulty and how a fix works — still explanatory if you are mapping, not campaigning.",
          "The exam asks <strong>which organizational pattern</strong> fits a purpose. A how-to on firing a kiln is chronological (steps). An explanation of why glaze crawled is cause-effect. An explanation of how the lost-and-found overcrowding was reduced can be problem-solution without becoming a rant. Mixing all three without signposts is how expository papers feel \"all over the place.\"",
          `<table><tr><th>Pattern</th><th>Best for</th><th>Typical cues</th></tr>
<tr><td>Chronological</td><td>Processes, timelines</td><td>first, next, after, finally</td></tr>
<tr><td>Cause-effect</td><td>Why something happens</td><td>because, therefore, as a result</td></tr>
<tr><td>Problem-solution</td><td>A difficulty and how a response works</td><td>the problem is; the response; the result</td></tr></table>`,
          {
            label: "match pattern to question",
            problem: "Purpose: explain to substitutes how to take attendance on the new tablet. Which organizational pattern is best?",
            steps: [
              "<strong>This is a procedure</strong> — order of operations matters.",
              "<strong>Chronological / step order:</strong> unlock, open the app, choose period, submit.",
              "<strong>Cause-effect would explain why the old clipboard failed;</strong> that is a different paper."
            ],
            answer: "Chronological steps fit a how-to for substitutes."
          },
          {
            label: "cause-effect vs. problem-solution",
            problem: "A paper explains why the gym floor warped (leaky roof, then trapped moisture) but never describes a repair. A peer says it must be problem-solution. Who is right?",
            steps: [
              "<strong>The focusing question is why</strong> — causes and effects.",
              "<strong>Problem-solution would require explaining a fix</strong> as a major movement of the paper.",
              "<strong>The peer is renaming the paper,</strong> not diagnosing it. Cause-effect is the correct pattern for this purpose."
            ],
            answer: "Why-questions take cause-effect even if the situation is unfortunate."
          },
          {
            problem: "Choose a pattern: explain how the student store reduced leftover spirit-wear after homecoming.",
            hint: "If the paper maps the leftover pile (problem) and the pre-order system (solution) plus the leftover count after, use problem-solution. If it only walks through the sale weekend, chronological may suffice."
          },
          "Defaulting to chronological because it feels safe even when the question is <em>why</em>. A timeline of symptoms is not the same as a cause-effect explanation.",
          [
            check(
              "A writer must explain why the choir missed the festival bus. Which organizational pattern is best?",
              [
                "Cause-effect: rehearsal ran over, the risers delayed loading, therefore the bus left",
                "In medias res narrative starting with a scream",
                "Comparison of two unrelated novels",
                "Order of importance of the author's childhood memories"
              ],
              0,
              "A why-question about a missed bus is cause-effect. Narrative panic and literary comparison are the wrong modes."
            ),
            check(
              "Which organizational pattern best fits an article informing families how the new rain-delay protocol for baseball works?",
              [
                "Chronological steps from first rumble of thunder to cancellation text",
                "A persuasive attack on the umpire",
                "Flashback to a game in 1998 as the whole structure",
                "A random list of sports equipment"
              ],
              0,
              "Protocols are processes. Readers need the sequence of actions, not a speech or a memory."
            )
          ]
        ),
        section(
          "Statistics, examples, and succinct style",
          "Expository support is information: facts, statistics, labeled examples, and clear definitions. Style should be direct, simple, and succinct — not dull, but not decorative for its own sake.",
          "A statistic needs a source, a time, and a comparison (18% of what, compared with what). An example should be typical or clearly marked as an exception. Succinct style cuts throat-clearing, prefers active verbs when the actor matters, and uses jargon only if the audience already knows it — or after you define it. Exposition fails when it sounds like a story with no point or a sermon with no information.",
          `<pre>WEAK: A lot of students are always late, which is crazy.
BETTER: In October, 42 first-period tardies were logged on Mondays
        compared with 19 on Wednesdays (attendance office, 2025).

WEAK: It is interesting to note that one may utilize the apparatus.
BETTER: Use the red valve first.</pre>`,
          {
            label: "statistic without a frame",
            problem: "Draft: <em>Attendance is 40%.</em> Why is this not yet useful support, and which revision is best?",
            steps: [
              "<strong>40% of what, when, for whom?</strong> A hanging percent is not information yet.",
              "<strong>Frame it:</strong> <em>Forty percent of late-bus riders in March still reached tutoring before 4:00 p.m., up from 22% in February (counseling log).</em>",
              "<strong>Now the number can explain something.</strong>"
            ],
            answer: "Give the statistic a population, a time, a comparison, and a source."
          },
          {
            label: "succinct vs. chatty",
            problem: "Which revision is best for a lab-procedure handout? <em>So basically you're gonna wanna kind of maybe turn the valve, you know, until it sort of hisses a little?</em>",
            steps: [
              "<strong>Audience is people who must do the step correctly.</strong> Hedging can be dangerous.",
              "<strong>Direct:</strong> <em>Turn the valve until you hear a steady hiss.</em>",
              "<strong>Simple is not rude</strong> in exposition; it is the job."
            ],
            answer: "Replace filler and hedges with the action and the observable cue."
          },
          {
            problem: "An explanatory paragraph about locker assignments uses one unnamed \"some kid\" story for 200 words and zero numbers. What should change?",
            hint: "Keep a brief typical example if it clarifies, but add the actual rule and a figure (how many lockers, what grade bands). Do not let anecdote replace the explanation."
          },
          "Padding with \"in today's society\" and \"it is important to understand.\" Those phrases signal that the statistic or the step has not been written yet.",
          [
            check(
              "Which sentence is the most effective expository support?",
              [
                "On the three rainy Mondays in April, the rain garden's overflow pipe ran for 12, 9, and 14 minutes, and the band-room floor stayed dry (custodial log).",
                "The rain garden is super awesome and really works a lot.",
                "Gardens have been important since ancient times.",
                "You must care about water or you are a bad person."
              ],
              0,
              "Dated, specific measurements with a source explain. Cheerleading, history-of-the-world, and moralizing do not."
            ),
            check(
              "Which revision is most direct and succinct for a how-to? <em>Students should make an effort to be in the process of submitting the form prior to the time when the office closes.</em>",
              [
                "Submit the form before the office closes.",
                "Students should make an effort.",
                "Prior to the time when the office closes, being in the process is essential.",
                "Submit, maybe, if you want, the form."
              ],
              0,
              "The lean imperative keeps every necessary idea. Hedges and process-language slow a how-to."
            )
          ]
        )
      ]
    },

    "wr-03": {
      title: "Persuasive writing: position, support, and counterargument",
      domain: "writing",
      intro: `<p><strong>NES 301 competency 0014:</strong> Persuasive writing expresses an opinion and tries to influence. Take a clear position, organize logically or by order of importance, support with facts, reasons, and appeals, anticipate counterarguments, and keep a respectful tone.</p>`,
      sections: [
        section(
          "Clear position and logical or importance order",
          "A position is a sentence a reasonable person could disagree with. Organization should either follow logic (if A then B; therefore C) or rank reasons from strongest to weakest — or sometimes weakest to strongest for a closing punch.",
          "Vague positions (<em>Something should be done about lunch</em>) cannot be proven. Limit the ask: who should do what. Then pick an order you can signal. <strong>Order of importance</strong> is the NES favorite for speeches and editorials: do not bury the best reason in the middle without a plan. Logical order is better when the case is a chain (if we keep the 20-minute lunch, then X, then Y).",
          `<pre>WEAK position: Lunch is an issue.
CLEAR: The cafeteria should restore a 35-minute lunch period for the second seating.

Order of importance (typical editorial):
  1. Strongest reason + evidence
  2. Next reason
  3. Concede/rebut
  4. Restate the ask

Logical chain:
  If passing time stays at 3 minutes → late arrivals → lost instruction → the policy fails its own goal.</pre>`,
          {
            label: "position that can be acted on",
            problem: "Which position is clearest for a letter to the principal?",
            steps: [
              "<strong>Reject slogans:</strong> \"Fairness matters\" cannot be implemented on Monday.",
              "<strong>Name the actor and the action:</strong> the principal can approve a trial nut-free table.",
              "<strong>Best:</strong> <em>Please designate one clearly labeled nut-free table in the cafeteria for a nine-week trial.</em>"
            ],
            answer: "A clear position names who should do what."
          },
          {
            label: "which organizational pattern",
            problem: "A student has three reasons to keep the late bus: safety (strongest), tutoring access, and one student's convenience. Which order is best for a school-board comment?",
            steps: [
              "<strong>Boards hear many speakers;</strong> lead with the public-safety reason, not the private convenience.",
              "<strong>Order of importance:</strong> safety, then tutoring (many students), then a brief human example.",
              "<strong>Do not open with convenience</strong> — it trains the audience to dismiss the rest as selfish."
            ],
            answer: "Lead with the strongest public reason; demote private convenience."
          },
          {
            problem: "Rewrite as a clear position: <em>I kind of feel like phones maybe shouldn't always be a thing during class perhaps.</em>",
            hint: "Cut hedges. Specify the policy: e.g., <em>Phones should stay in backpacks during direct instruction unless a teacher authorizes a documented use.</em>"
          },
          "Saving the real claim for the last line so the first page is only \"some people say.\" NES items treat an unclear or delayed position as a failed persuasive opening.",
          [
            check(
              "Which sentence is the clearest persuasive position?",
              [
                "The yearbook staff should receive one extra production week before spring photos are locked.",
                "Yearbooks are part of school life in many ways.",
                "I have opinions about photos.",
                "Something ought to change regarding stuff."
              ],
              0,
              "The first names the actor, the action, and the timing. The others are topics or fog."
            ),
            check(
              "For a two-minute PTA speech, a writer has a weak anecdote, a strong district statistic, and a medium-strength cost estimate. Which organizational pattern is best?",
              [
                "Order of importance: statistic first, then cost, then a brief anecdote as illustration",
                "A chronological life story from kindergarten to now",
                "Problem-solution with no stated position",
                "In medias res starting with a joke unrelated to the ask"
              ],
              0,
              "Short persuasive remarks should lead with the strongest public evidence. A life story and an unstated position waste the clock."
            )
          ]
        ),
        section(
          "Facts, reasons, and appeals",
          "Support is a mix of facts (checkable), reasons (logical links from facts to the claim), and appeals (ethos, pathos, logos). Appeals are tools; they are not cheating unless they replace evidence or manipulate.",
          "Logos: data, definitions, if-then structure. Ethos: credibility, fairness, expertise, showing you understand the audience's constraints. Pathos: concrete human stakes — used in proportion. A fact is not a reason until you explain how it supports the position. A story is not enough if the policy affects 800 people and you only described one.",
          `<table><tr><th>Support type</th><th>Does this job</th><th>Fails when</th></tr>
<tr><td>Fact</td><td>Gives a checkable piece of the world</td><td>Unsourced or off-claim</td></tr>
<tr><td>Reason</td><td>Connects fact to the ask</td><td>It is only \"because I said so\"</td></tr>
<tr><td>Logos</td><td>Makes the chain valid</td><td>Hidden leap in logic</td></tr>
<tr><td>Ethos</td><td>Makes the speaker worth trusting</td><td>Bragging or fake expertise</td></tr>
<tr><td>Pathos</td><td>Shows why the issue hurts or helps people</td><td>It substitutes for facts on a policy question</td></tr></table>`,
          {
            label: "fact without a reason",
            problem: "Position: restore the late bus. Draft: <em>The late bus costs $412 a week.</em> Why is this incomplete support?",
            steps: [
              "<strong>The fact might even help the opposition</strong> if cost is their objection.",
              "<strong>Add the reason:</strong> what does $412 buy (safety, tutoring attendance), and compared with what other line item?",
              "<strong>Complete:</strong> <em>The late bus costs $412 a week, less than one substitute-teacher day, and last spring it cut unsupervised street crossings after 4 p.m. (security log).</em>"
            ],
            answer: "Tie each fact to the claim with a reason; a naked cost can cut both ways."
          },
          {
            label: "pathos in proportion",
            problem: "A speech for a crosswalk uses 90 seconds of a fictional child's death and 0 seconds of traffic counts. Which revision is best?",
            steps: [
              "<strong>Pathos without logos</strong> on a public-safety ask looks like manipulation — an NES trap.",
              "<strong>Keep a brief human stake</strong> if it is true and relevant.",
              "<strong>Lead with counts, sight lines, and the specific ask</strong> (a painted crosswalk and a crossing guard at 3:05)."
            ],
            answer: "Do not let an invented tragedy replace checkable local evidence."
          },
          {
            problem: "Identify the missing appeal: a student cites three studies but mocks the cafeteria staff as \"clueless.\"",
            hint: "Logos is present; ethos is damaged. Respectful knowledge of staff constraints would strengthen, not weaken, the case."
          },
          "Treating \"emotional\" as automatically winning or automatically illegal. The test is proportion and honesty: does the feeling rest on real stakes, or does it hide a missing reason?",
          [
            check(
              "Which sentence best combines a fact and a reason for the claim <em>add a second calculator-checkout crate</em>?",
              [
                "Last unit, 14 students shared six calculators, so check-out lines spilled into instructional time (teacher tally, May 12).",
                "Calculators are cool.",
                "I feel like math is hard.",
                "A celebrity once used a calculator."
              ],
              0,
              "The tally is a fact; the link to lost instructional time is the reason. Coolness, feelings, and celebrity are not policy support."
            ),
            check(
              "A writer cites accurate bus-ridership numbers and fairly summarizes the transportation director's budget limit. Which appeal is strongest here?",
              [
                "Ethos, because the writer shows fairness and knowledge of real constraints",
                "Pathos only, because numbers are always emotional",
                "No appeal is present, because facts cannot be appeals",
                "A personal attack, because a director was named"
              ],
              0,
              "Fair, informed treatment of the other side builds ethos. Naming an official is not an attack."
            )
          ]
        ),
        section(
          "Counterarguments and respectful tone",
          "Anticipating a counterargument means stating a real objection fairly, then answering it. Tone stays respectful even when the claim is firm: no name-calling, no sarcasm that punches down, no straw man.",
          "A straw man is a fake, weaker version of the other side. Steel-man instead: give the best objection (cost, safety, fairness, time) and then rebut with evidence or a compromise (trial period, limited scope). Respectful tone is not weakness; it is how adult audiences keep listening. NES items often ask which rebuttal is fairest or which sentence damages tone.",
          `<pre>WEAK: People who disagree just hate students.
FAIR: Some staff worry that a later start will collide with after-school jobs.
REBUT: District survey data show most student jobs begin after 4:30, so a 8:15 start still leaves a full work shift.

Tone red flags: always, idiots, obviously, anyone with a brain, \"so-called\" experts.</pre>`,
          {
            label: "steel-man then rebut",
            problem: "Claim: add a nut-free table. Which counterargument handling is best?",
            steps: [
              "<strong>Weak:</strong> \"Only selfish people would object.\" That attacks motives.",
              "<strong>Fair objection:</strong> space is tight and another reserved table might increase crowding.",
              "<strong>Rebuttal:</strong> use one existing table near the door for a nine-week trial and count empty seats — a test, not a permanent land grab."
            ],
            answer: "Name a real logistical objection and answer it with a limited trial."
          },
          {
            label: "tone that loses the audience",
            problem: "A letter to custodial staff about recycling bins ends: <em>If you actually cared about the planet, this would already be done.</em> Which revision is best?",
            steps: [
              "<strong>The sentence attacks character</strong> instead of addressing workload or bin placement.",
              "<strong>These readers are the people who would have to empty the bins.</strong> Insulting them sinks ethos.",
              "<strong>Respectful ask:</strong> <em>Could we place one clearly labeled extra bin by the commons doors, and would emptying it after sixth period be feasible?</em>"
            ],
            answer: "Replace motive-attack with a feasible, polite request."
          },
          {
            problem: "A draft says opponents of later start times \"want teenagers to suffer.\" Rewrite the counterargument fairly.",
            hint: "Likely real objections: sports schedules, bus routes, parent work times. State one of those, then answer with a plan (staggered practice, route pilot)."
          },
          "Saving a sneer for the sentence after a polite claim. One contemptuous line can define the tone of the whole piece for NES scorers and for real audiences.",
          [
            check(
              "Which response best anticipates a counterargument to <em>keep the late bus</em>?",
              [
                "Although the late bus costs $412 a week, security logs show fewer students crossing the highway after dark, and a six-week ridership count can test whether the cost is justified.",
                "Anyone against the late bus is cruel.",
                "There are no possible objections.",
                "Cost does not matter in any school decision ever."
              ],
              0,
              "The first fairly names cost, answers with safety evidence, and offers a test. Denial and insults are not rebuttals."
            ),
            check(
              "Which sentence most damages respectful tone in a letter to the school board?",
              [
                "Only a fool would trust the so-called transportation \"experts\" on this.",
                "I disagree with the proposed cut because rural riders would lose the only late route.",
                "I understand that fuel prices rose this year.",
                "Please consider a one-route pilot before eliminating all late buses."
              ],
              0,
              "Name-calling and sarcastic quotation marks around <em>experts</em> attack people instead of arguing the cut. Disagreement can stay firm and polite."
            )
          ]
        )
      ]
    },

    "wr-04": {
      title: "Critical and analytical writing about literature",
      domain: "writing",
      intro: `<p><strong>NES 301 competency 0015:</strong> Analytical writing about literature makes an interpretive claim, organizes by complexity or comparison, quotes words and phrases as evidence, and can relate characters, themes, or points of view across works. Plot summary is not analysis.</p>`,
      sections: [
        section(
          "Interpretive claims, not plot summary",
          "An interpretive claim says what a text is doing with language, structure, character, or theme — something a careful reader could debate. Summary retells what happens.",
          "Start from a pattern you can point to (a repeated image, a shift in point of view, a character's contradiction). The thesis should be arguable: <em>not</em> \"Douglass was enslaved\" (fact) and <em>not</em> \"slavery is bad\" (moral slogan the text already assumes). Better: <em>Douglass uses the forbidden lesson in reading to show that literacy becomes both a tool of resistance and a source of painful knowledge.</em> Then the body proves that claim with quoted words, not with a chapter recap.",
          `<pre>SUMMARY: In the narrative, Douglass learns to read.
CLAIM: Douglass presents reading as a door that cannot be closed
       once opened, which is why the knowledge hurts as it frees.

Test: Could a smart classmate disagree and still be reading the same pages?
If no, you probably wrote a fact or a slogan.</pre>`,
          {
            label: "slogan vs. interpretation",
            problem: "Which thesis is strongest for a short paper on Aesop's \"The Ant and the Grasshopper\"?",
            steps: [
              "<strong>Reject:</strong> \"This fable is about an ant and a grasshopper\" (summary) and \"Always work hard\" (bumper sticker).",
              "<strong>Look at how the fable works:</strong> it withholds sympathy from the grasshopper at the end.",
              "<strong>Claim:</strong> <em>The fable's blunt ending refuses seasonal charity in order to make thrift look like justice, which is exactly why modern readers argue with it.</em>"
            ],
            answer: "A strong literary thesis interprets the fable's design, not just its moral poster."
          },
          {
            label: "summary that thinks it is a paragraph",
            problem: "Body paragraph: <em>First Macbeth meets witches. Then he writes a letter. Then Duncan arrives. Then Macbeth kills him.</em> What should replace this?",
            steps: [
              "<strong>This is chronology of plot,</strong> not a claim about the play.",
              "<strong>Pick a job:</strong> how the letter scene pulls Lady Macbeth into the plot, or how \"fair is foul\" language infects Macbeth's speech.",
              "<strong>Quote a short phrase</strong> and explain the work it does. Cut the tour of scenes."
            ],
            answer: "Replace the recap with one interpretive job plus quoted evidence."
          },
          {
            problem: "Improve: <em>Whitman's \"A Noiseless Patient Spider\" is a poem with a spider in it.</em>",
            hint: "Claim something about the comparison: the spider's filament and the soul's attempt to connect across space. Arguable and text-based."
          },
          "Using \"deeper meaning\" as a thesis. If you cannot name the device or pattern, you do not yet have a claim — you have a vibe.",
          [
            check(
              "Which thesis is the best interpretive claim about Dickinson's \"Because I could not stop for Death\"?",
              [
                "Dickinson personifies Death as a civil companion so that dying feels like a polite carriage ride rather than a rupture.",
                "This poem is about death, which happens to people.",
                "Emily Dickinson was a poet who wrote poems.",
                "The speaker goes for a ride and then the poem ends."
              ],
              0,
              "The first interprets a device (personification) and its effect. The others are biography, summary, or truism."
            ),
            check(
              "A student writes: <em>In Act 1, Romeo is sad. In Act 2, he meets Juliet. In Act 3, there is a fight.</em> What is the main weakness?",
              [
                "It summarizes plot instead of making an interpretive claim supported by language",
                "It uses too many quotations",
                "It compares two works, which is never allowed",
                "It is too focused on a single image"
              ],
              0,
              "Scene-by-scene recap is the classic failed analysis paragraph. Quotations and comparison, done well, are strengths."
            )
          ]
        ),
        section(
          "Organization by complexity or comparison",
          "Literary essays are not required to be five identical body paragraphs. Organization should follow the claim: unpack complexity inside one work, or compare two works (or two characters, two points of view) on a shared issue.",
          "Complexity organization follows the claim's layers (image → how it shifts → why the shift matters). Comparison organization needs a <strong>shared analytic question</strong>, not two mini-summaries glued with \"both.\" Point-by-point (each paragraph treats both texts on one feature) usually coheres better than block-by-block (all of Text A, then all of Text B) for short essays. Transitions should name the relation: unlike, similarly, more bitterly, with less irony.",
          `<pre>Complexity (one work):
  Claim about a tension in the text
  → passage A (one side of the tension)
  → passage B (the complicating side)
  → what the tension does to meaning

Comparison (two works):
  Shared question: How do two narrators claim authority?
  → Douglass's "I" vs. Equiano's "I" on a specific tactic
  NOT: everything in Douglass, then everything in Equiano.</pre>`,
          {
            label: "both-summary is not comparison",
            problem: "Draft: paragraph 1 retells \"The Ant and the Grasshopper.\" Paragraph 2 retells a classroom fable about a squirrel. Paragraph 3 says \"Both have animals.\" Which revision of organization is best?",
            steps: [
              "<strong>The shared question is missing.</strong> Animals are a topic, not an analysis.",
              "<strong>Pick a feature:</strong> how each ending assigns blame for hunger.",
              "<strong>Reorganize point-by-point:</strong> one paragraph on endings, one on who gets a voice, each discussing both texts."
            ],
            answer: "Compare on a focused feature; do not stack two summaries."
          },
          {
            label: "complexity inside one poem",
            problem: "A student claims Blake's \"The Tyger\" only celebrates a cute animal. The draft never mentions the fearful questions. What organizational move is needed?",
            steps: [
              "<strong>The poem's complexity is the awe/fear double question</strong> (\"Did he who made the Lamb make thee?\").",
              "<strong>Structure the essay to follow that tension:</strong> the hammering beat and fire imagery, then the Lamb question that refuses a simple \"cool tiger\" reading.",
              "<strong>A one-note celebration claim</strong> is too simple for the text's own structure."
            ],
            answer: "Let the essay's order follow the poem's complicating question, not a flattened theme."
          },
          {
            problem: "You are comparing Sojourner Truth's speech style with a polished political essay. What is a better shared question than \"both talk about rights\"?",
            hint: "Ask how each speaker builds authority (oral repetition and audience address vs. formal written structure) or how each handles counterargument."
          },
          "Writing \"similar yet different\" as a thesis. That sentence fits any two texts on Earth. Name the similar-in-what and different-in-what.",
          [
            check(
              "Which organizational plan best serves a comparison of Douglass's and Equiano's narratives on learning to read?",
              [
                "Point-by-point: a paragraph on each writer's motive for literacy, then one on how each describes the cost of knowledge",
                "A full plot summary of Douglass, then a full plot summary of Equiano, then \"both were important\"",
                "A chronological list of every chapter in both books",
                "A persuasive speech telling readers to value books, with no quotations"
              ],
              0,
              "A shared analytic feature, treated in both texts, is comparison. Double summary and a slogan speech are not."
            ),
            check(
              "An essay argues that a story's cheerful narrator becomes less trustworthy after a quiet detail in paragraph 8. Which organization fits?",
              [
                "Complexity: establish the cheerful voice, then the detail that undercuts it, then the effect on the reader",
                "Problem-solution: how to fix the narrator",
                "Chronological biography of the author only",
                "Order of importance of unrelated themes from other books"
              ],
              0,
              "A claim about a turn in reliability should follow that turn. Fixing the narrator or leaving the text are the wrong patterns."
            )
          ]
        ),
        section(
          "Quoted words as evidence; relating works",
          "In literary analysis, the smallest quoted words are often the best evidence: a verb, an adjective, a repeated noun. Relating works means putting those small choices next to each other, not claiming two books are \"basically the same.\"",
          "Quote what you will interpret. A three-line block quote with no commentary is decoration. After a quotation, explain <strong>how those words</strong> do the job your claim named (irony, characterization, point of view, theme). When relating characters, themes, or POV across works, keep the link specific: two first-person narrators who both address the reader, but one asks for sympathy and the other for judgment.",
          `<pre>WEAK evidence: The poem is sad. (no text)
WEAKER: a 10-line quotation and then "This shows sadness."
STRONG: Blake's "fearful symmetry" yokes beauty to threat in two words;
        the adjective will not let the tiger be merely pretty.

Across works:
  Truth's repeated "Ain't I a woman?" vs. a written essay's single thesis
  → both argue for recognition, but one builds it as oral refrain.</pre>`,
          {
            label: "quote the working words",
            problem: "Claim: Death in Dickinson's poem seems polite. Which evidence use is best?",
            steps: [
              "<strong>A plot paraphrase</strong> (\"Death picks her up\") restates without language.",
              "<strong>Quote the working diction:</strong> \"kindly stopped,\" \"Civility.\"",
              "<strong>Explain the effect:</strong> courtesy words make Death social, which is more unsettling than a monster would be."
            ],
            answer: "Quote the civility words and interpret them; do not only retell the ride."
          },
          {
            label: "relating POV across works",
            problem: "A student says Equiano and a third-person fairy tale \"have the same point of view because both are stories.\" What is wrong, and what is a better relation?",
            steps: [
              "<strong>Story is a genre label, not POV.</strong> First-person testimony vs. third-person fable are different vantage points.",
              "<strong>A real relation:</strong> both may teach, but Equiano's \"I\" claims historical witness while the fable's narrator claims moral authority without personal risk.",
              "<strong>Put short quoted pronouns or narrator comments side by side</strong> to make the difference visible."
            ],
            answer: "Relate POV by vantage and authority, not by the fact that both are narratives."
          },
          {
            problem: "You have quoted eight lines of Whitman and written \"This is imagery.\" Fix the evidence use.",
            hint: "Cut to a phrase (the spider's \"filament\"), then explain how that one image does the soul-work your thesis named."
          },
          "Quoting a famous first line everyone already knows and never quoting the line your claim actually needs. Also, do not force two works together because they were taught in the same week.",
          [
            check(
              "Which use of evidence best supports the claim that Blake's tiger is built from industrial, maker-language?",
              [
                "Quoting \"hammer,\" \"furnace,\" and \"anvil\" and explaining how those workshop words turn creation into smithing",
                "Retelling that there is a tiger in the poem",
                "Quoting the entire poem with no commentary",
                "Stating that tigers live in jungles, which the poem never discusses"
              ],
              0,
              "Short quoted maker-words plus explanation match the claim. Plot, undigested blocks, and outside zoo facts do not."
            ),
            check(
              "Which sentence best relates theme across Douglass's narrative and Sojourner Truth's speech without flattening them?",
              [
                "Both insist that denied education or denied recognition is a tool of oppression, but Douglass traces a private literacy struggle while Truth turns the demand into a public refrain before a live audience.",
                "Both are old texts, so they mean the same thing.",
                "Both have words in them.",
                "Truth copied Douglass's plot, so comparison is unnecessary."
              ],
              0,
              "A precise shared theme plus a difference in method is real relation. Sameness slogans and false copying claims are not."
            )
          ]
        )
      ]
    },

    "wr-05": {
      title: "Thesis, organization, and supporting detail across modes",
      domain: "writing",
      intro: `<p><strong>NES 301 competencies 0013–0015:</strong> Transfer the same three decisions across modes: a thesis that matches the purpose, an organizational pattern that matches the thesis, and supporting detail that actually belongs to that mode. The exam mixes narrative, expository, persuasive, and analytical tasks in one sitting.</p>`,
      sections: [
        section(
          "Theses that change with mode",
          "A thesis is always a controlling sentence, but its job changes: insight into an event (narrative), answer to a how/why (expository), policy or value claim (persuasive), interpretive claim (analytical).",
          "When an item gives a prompt, name the mode first, then judge the thesis. A beautiful interpretive claim is wrong for a how-to. A fiery policy demand is wrong for a lab explanation. A limited narrative insight (\"I learned that rushing the kiln wastes a week's work\") can look like a moral, but it must still be earned by the scene, not shouted in the first line as a slogan.",
          `<table><tr><th>Mode</th><th>Thesis job</th><th>Red flag</th></tr>
<tr><td>Narrative</td><td>The meaning of this event</td><td>A lecture with no scene</td></tr>
<tr><td>Expository</td><td>The explanation in one sentence</td><td>\"Should\" without information</td></tr>
<tr><td>Persuasive</td><td>The ask plus a why</td><td>\"I will discuss both sides\" with no side</td></tr>
<tr><td>Analytical</td><td>What the text is doing</td><td>Plot + \"deep meaning\"</td></tr></table>`,
          {
            label: "right claim, wrong mode",
            problem: "Prompt: explain how the tablet attendance app works. Student thesis: <em>Teachers who refuse the app are lazy.</em> Which revision is best?",
            steps: [
              "<strong>The prompt is expository.</strong> The draft thesis is a personal attack (failed persuasive).",
              "<strong>Write the explanation:</strong> <em>Substitutes take attendance by unlocking the tablet, choosing the period roster, and tapping submit before leaving the room.</em>",
              "<strong>Save evaluation of staff</strong> for a different assignment."
            ],
            answer: "Match the thesis type to the prompt's mode."
          },
          {
            label: "analytical thesis on a persuasive prompt",
            problem: "Prompt: persuade the board to keep late buses. Thesis: <em>In this memo, \"late\" symbolizes society.</em> Diagnose.",
            steps: [
              "<strong>Symbol hunting is literary analysis</strong> and does not give the board an ask.",
              "<strong>They need a position plus reasons</strong> they can vote on.",
              "<strong>Revise:</strong> <em>Keep the late bus because it cuts after-dark highway crossings and protects tutoring attendance, at a cost below one substitute day per week.</em>"
            ],
            answer: "A board memo needs a policy thesis, not a symbol thesis."
          },
          {
            problem: "Prompt: write a personal narrative about a mistake in the lab. Draft thesis (first sentence): <em>Safety is important in today's society.</em> Fix the mode.",
            hint: "Open in a scene (the moment of the mistake). Let the insight land later as earned meaning, not as a generic opener."
          },
          "Recycling one all-purpose thesis (\"X is important\") for every prompt. If it fits narrative, exposition, persuasion, and analysis equally, it fits none.",
          [
            check(
              "Prompt: write an explanatory article on how the lost-and-found is sorted. Which thesis is best?",
              [
                "Staff sort items by type and date, hold them for two weeks, then donate unclaimed clothing on the last Friday of the month.",
                "Lost-and-found is a metaphor for the human condition.",
                "Students should never lose anything.",
                "I once lost a jacket and learned a lesson about love."
              ],
              0,
              "The first sentence explains the system. Metaphor, scolding, and memoir belong to other modes."
            ),
            check(
              "Prompt: analyze how point of view shapes a fable. Which thesis is weakest because it is in the wrong mode?",
              [
                "The school should ban fables because they confuse children.",
                "The nameless third-person narrator of \"The Ant and the Grasshopper\" withholds the grasshopper's feelings so the ending can feel like justice rather than tragedy.",
                "Aesop's narrator treats thrift as a moral fact by never entering the grasshopper's hunger from the inside.",
                "The fable's distant POV makes charity look foolish, which is why the last line still startles."
              ],
              0,
              "A ban-the-fables policy is persuasive and off-prompt. The other three are interpretive claims about POV."
            )
          ]
        ),
        section(
          "Matching organizational pattern to purpose",
          "You have already learned chronological, flashback, in medias res, cause-effect, problem-solution, order of importance, complexity, and comparison. This section is the transfer skill: pick among them under a mixed prompt.",
          "Ask what the reader must understand first. If sequence is the content, go chronological. If the fight is which reason should win a vote, go order of importance. If two texts must be judged together, go comparison. A common NES trap is a well-written flashback in an expository how-to, or a problem-solution frame that never states the solution because the writer switched to memoir.",
          `<table><tr><th>If the reader needs...</th><th>Prefer</th></tr>
<tr><td>Steps or a timeline</td><td>Chronological</td></tr>
<tr><td>Why something happened</td><td>Cause-effect</td></tr>
<tr><td>A vote or a yes</td><td>Order of importance + rebuttal</td></tr>
<tr><td>The meaning of a past moment now</td><td>Flashback frame</td></tr>
<tr><td>Urgency in a story</td><td>In medias res</td></tr>
<tr><td>How a text is complicated</td><td>Complexity order</td></tr>
<tr><td>Two works or two views</td><td>Point-by-point comparison</td></tr></table>`,
          {
            label: "which organizational pattern",
            problem: "Prompt: inform new members how to run the ticket booth. Writer uses in medias res (a stolen cash box) for two pages, then never lists the steps. What failed?",
            steps: [
              "<strong>The purpose is exposition of a procedure.</strong>",
              "<strong>In medias res is a narrative urgency tool</strong> and here it stole the paper.",
              "<strong>Use chronological steps;</strong> a one-sentence caution about the cash box can appear as a warning inside the right step."
            ],
            answer: "A how-to needs step order; a crisis opening cannot replace the procedure."
          },
          {
            label: "persuasive pattern in analysis clothing",
            problem: "Prompt: compare two poems' speakers. Outline: strongest reason the first poem is \"better,\" then attacks on the second poet's life. Diagnose the pattern.",
            steps: [
              "<strong>Order of importance plus ad hominem</strong> is a persuasive (and unethical) pattern.",
              "<strong>The prompt asked for comparison of speakers</strong> — textual POV/voice.",
              "<strong>Rebuild point-by-point</strong> on speaker, address, and tone, with quotations, not a contest of biographies."
            ],
            answer: "Do not run a ranking campaign when the mode is comparison-analysis."
          },
          {
            problem: "Choose a pattern: a personal narrative whose whole point is that the narrator misunderstood a quiet remark until years later.",
            hint: "Flashback or a present-to-past-to-present frame. Pure chronological childhood-to-now may drown the remark in extra years."
          },
          "Decorating an essay with every pattern you know. One controlling pattern plus a brief local exception (a one-sentence flashback inside a chronological how-not-to) is enough.",
          [
            check(
              "Which organizational pattern best fits a persuasive letter asking the PTA to fund a second water-bottle filler?",
              [
                "Order of importance: health/wait-time data first, then cost, then a brief student example, then a fair cost objection and a rebuttal",
                "In medias res starting with an unrelated locker-room scene",
                "A complexity analysis of a sonnet",
                "Chronological autobiography from birth"
              ],
              0,
              "A funding ask should rank public reasons and handle cost. Narrative stunts and literary complexity are the wrong skeletons."
            ),
            check(
              "Prompt: explain why the glaze crawled in last week's firing. Which pattern is best?",
              [
                "Cause-effect: dust on the bisque, then uneven thickness, therefore crawl",
                "Call to action to fire the ceramics teacher",
                "Comparison of two novels",
                "Flashback to the writer's first birthday"
              ],
              0,
              "A why-explanation of a firing is cause-effect. Revenge, novels, and birthday scenes do not answer the question."
            )
          ]
        ),
        section(
          "Supporting detail that belongs to the mode",
          "Detail is not automatically good. Sensory detail belongs in narrative; statistics belong in exposition and persuasion; quoted words belong in analysis. Crossing wires is a frequent exam distractor.",
          "A persuasive policy paragraph that spends eight sentences on the smell of rain and zero on cost is using narrative detail in the wrong job. An analysis paragraph that cites a national poll instead of the poem is using expository detail in the wrong job. You may borrow a brief other-mode detail (one human example in a persuasive paragraph) if it is clearly in service of the mode's thesis.",
          `<table><tr><th>Mode</th><th>Best typical detail</th><th>Usually a mismatch</th></tr>
<tr><td>Narrative</td><td>Sensory beats, exact verbs</td><td>Unsourced national statistics as the whole scene</td></tr>
<tr><td>Expository</td><td>Steps, labeled facts, framed numbers</td><td>Unexplained dialogue scenes</td></tr>
<tr><td>Persuasive</td><td>Local facts + reasons + fair rebuttal</td><td>Plot summary of a novel</td></tr>
<tr><td>Analytical</td><td>Short quotations + commentary</td><td>Writer's childhood anecdote as \"proof\" of theme</td></tr></table>`,
          {
            label: "wrong-mode evidence",
            problem: "An analytical paragraph on Whitman's spider poem supports the thesis with the writer's memory of summer camp and no quoted words. Which revision is best?",
            steps: [
              "<strong>The camp memory is narrative detail.</strong> It does not prove what Whitman's language does.",
              "<strong>Quote \"filament\" or \"gossamer\"</strong> and explain the soul comparison.",
              "<strong>If the camp memory is a hook,</strong> keep one sentence in the introduction, not as body evidence."
            ],
            answer: "Literary claims need textual detail; memoir cannot substitute."
          },
          {
            label: "right detail, thin commentary",
            problem: "A persuasive paragraph lists four excellent statistics in a row and stops. What is missing?",
            steps: [
              "<strong>Facts without reasons</strong> leave the board to guess the logic.",
              "<strong>After each key number (or after the set),</strong> state how it supports the ask.",
              "<strong>Detail must be developed,</strong> not dumped."
            ],
            answer: "Support includes the reasoning that ties detail to the thesis."
          },
          {
            problem: "A narrative scene of a missed cue is interrupted by a 120-word history of Elizabethan stagecraft. Cut or keep?",
            hint: "Cut from the scene. That history is expository and stalls the event. One appositive (\"the same trapdoor we had rehearsed\") is enough if needed."
          },
          "Collecting \"good sentences\" from different modes into one paragraph. Unity of support is a mode test, not an elegance test.",
          [
            check(
              "Which supporting detail best belongs in an analytical paragraph about Sojourner Truth's refrain?",
              [
                "The repeated question \"Ain't I a woman?\" turns recognition into a public chant the audience must answer",
                "A story about the writer's aunt",
                "A statistic about modern crop yields with no link to the speech",
                "A call to sell raffle tickets"
              ],
              0,
              "Quoted refrain plus effect is analytical support. Family stories, random stats, and raffle asks belong elsewhere."
            ),
            check(
              "A persuasive paragraph arguing for a later start time uses only a description of fog on the bus windows. What is the main problem?",
              [
                "It offers narrative atmosphere where policy evidence and reasons are required",
                "Fog is never allowed in any writing",
                "The paragraph quotes too much poetry",
                "It uses too many framed statistics"
              ],
              0,
              "A little atmosphere can illustrate, but a policy paragraph cannot run on weather description alone."
            )
          ]
        )
      ]
    },

    "wr-06": {
      title: "Style, tone, diction, and audience",
      domain: "writing",
      intro: `<p><strong>NES 301 competencies 0012 and 0014:</strong> Style, tone, and diction must fit audience and purpose. The same claim can be right in content and wrong in register — a joke in a condolence note, slang in a board memo, or frozen formality in a personal narrative.</p>`,
      sections: [
        section(
          "Audience analysis and register",
          "Audience analysis asks who will read or hear this, what they already know, what they can do, and what register they expect. Register is the formality level of the language.",
          "Before choosing words, name the audience in practical terms: a principal with four minutes; ninth graders who do not know the jargon; a public comment microphone. Then match register. <strong>Frozen/formal:</strong> policies, citations, titles. <strong>Consultative:</strong> teacher-student, doctor-patient. <strong>Casual:</strong> peers. <strong>Intimate:</strong> a letter to one friend. NES items ask which sentence is most appropriate for a stated audience, not which sentence is \"best written\" in the abstract.",
          `<pre>Same request, three audiences
Principal (formal, feasible): Please approve a nine-week nut-free table trial.
Peers (casual, still clear): We should ask for a nut-free table and actually use it.
Board (public, evidence-forward): A labeled table would reduce exposure risk
  without adding staff hours; I request a vote to pilot it this quarter.</pre>`,
          {
            label: "right ask, wrong register",
            problem: "A student emails the superintendent: <em>yo pls fix the buses they r trash lol.</em> Which revision is best?",
            steps: [
              "<strong>The audience has public authority</strong> and did not invite casual peer talk.",
              "<strong>Keep the complaint's substance:</strong> buses are late; students miss first period.",
              "<strong>Raise register without puffery:</strong> <em>Superintendent Ruiz: Route 4 has arrived after the tardy bell on six of the last eight school days. Could transportation post a corrected time or an extra stop?</em>"
            ],
            answer: "Match formality to the office; do not confuse voice with slang."
          },
          {
            label: "talking over the audience",
            problem: "A how-to for new freshmen begins: <em>One must subsequently utilize the aforementioned portal in accordance with district parameters.</em> What is wrong?",
            steps: [
              "<strong>Freshmen need to log in,</strong> not decode bureaucratic style.",
              "<strong>This register might fit a policy appendix</strong> but not the stated audience.",
              "<strong>Revise:</strong> <em>Use your student ID to log in to the portal. Choose \"Schedule change.\" Submit before Friday.</em>"
            ],
            answer: "Audience knowledge and age should lower jargon, not raise it."
          },
          {
            problem: "You must tell kindergarten families where to wait at dismissal. Choose register and a first sentence.",
            hint: "Plain, calm, specific: <em>Wait at the painted stars by Door C. A teacher will bring your child to you.</em> Avoid sarcasm and legal Latin."
          },
          "Writing everything in the same \"essay voice\" regardless of audience. A perfect SAT sentence can still be the wrong sentence for a text to a coach two minutes before kickoff.",
          [
            check(
              "A notice to families about a 1:00 p.m. heat dismissal must be posted on the school site. Which sentence is most appropriate?",
              [
                "School will dismiss at 1:00 p.m. today because of heat. Buses will run on the early schedule; after-school activities are canceled.",
                "It's gonna be a scorcher, fam — bounce at 1 or melt, idk.",
                "Pursuant to meteorological exigencies, egress shall commence at 13:00 hours.",
                "Guess we'll see what happens with the day, whatever."
              ],
              0,
              "Families need time, reason, and effects on buses/activities. Slang, legalese, and shrug-voice all fail this audience."
            ),
            check(
              "Which choice best fits a peer study-group chat whose purpose is to divide lab tasks?",
              [
                "I can write the procedure if you two log the temperatures.",
                "One is inclined to commence the methodology section forthwith.",
                "A legal brief attacking the lab partner's character",
                "A sonnet about friendship with no task list"
              ],
              0,
              "Peers still need clear tasks. Inflated formality, attacks, and poems miss the job."
            )
          ]
        ),
        section(
          "Tone versus mood versus voice",
          "Tone is the writer's attitude. Mood is the feeling created in the reader. Voice is the recognizable person of the writing. They cooperate but are not synonyms — a test favorite.",
          "A writer can use a calm tone to create an uneasy mood (understatement). Voice can stay consistent while tone shifts for a new audience. In persuasive writing, a respectful tone can still be urgent. In narrative, a bitter voice should be a choice, not an accident of tired diction. When an item asks about tone, look at attitude words, not merely the topic (a funeral scene can be written with tenderness, numbness, or anger).",
          `<table><tr><th>Term</th><th>Lives in</th><th>Quick test</th></tr>
<tr><td>Tone</td><td>Writer's attitude</td><td>Does the writer sound scornful, earnest, wry?</td></tr>
<tr><td>Mood</td><td>Reader's feeling</td><td>Do I feel dread, warmth, amusement?</td></tr>
<tr><td>Voice</td><td>Personality of the prose</td><td>Could I identify this writer without the name?</td></tr></table>`,
          {
            label: "calm tone, tense mood",
            problem: "A narrative reads: <em>The kiln clicked once. Then again. No one moved.</em> Which description is most accurate?",
            steps: [
              "<strong>Diction is plain and unexclaimed</strong> — tone is controlled, even flat.",
              "<strong>The withheld panic creates tension in the reader</strong> — mood is uneasy.",
              "<strong>Do not call this \"an angry tone\"</strong> just because a kiln might be dangerous. Attitude is in the telling, not only in the topic."
            ],
            answer: "Controlled tone can produce a tense mood; topic does not equal tone."
          },
          {
            label: "tone shift that breaks persuasion",
            problem: "A respectful letter to the board ends: <em>Vote yes or prove you never cared about kids.</em> What happened to tone?",
            steps: [
              "<strong>The body built ethos;</strong> the closer attacks motives (contemptuous tone).",
              "<strong>Mood in the room will turn defensive,</strong> which works against the ask.",
              "<strong>Revise the closer to stay firm:</strong> <em>I ask for a yes vote on the six-week late-bus pilot.</em>"
            ],
            answer: "A last-line sneer redefines the letter's tone for the audience."
          },
          {
            problem: "A humorous writer is asked for a condolence message to a classmate. What should stay consistent, and what should shift?",
            hint: "Voice can remain recognizably kind and personal; tone should shift to sober and supportive. Jokes about the loss are the wrong tone, not \"more voice.\""
          },
          "Labeling every serious topic as a \"sad tone.\" If the language is sarcastic, the tone is sarcastic even at a funeral — which is usually a misfit, not a mood requirement.",
          [
            check(
              "A lab explanation says, <em>Turn the valve until the hiss is steady.</em> The topic is potentially dangerous. What is the tone?",
              [
                "Direct and calm; danger is in the situation, not in panicky diction",
                "Hysterical, because valves are always emotional",
                "Comic, because the sentence is short",
                "Romantic, because hissing appears in poetry"
              ],
              0,
              "Tone comes from how the writer speaks, not from the hazard itself. Short, clear instructions are a calm tone."
            ),
            check(
              "Which change would most damage a consistent wry narrative voice about a failed soufflé in culinary class?",
              [
                "Suddenly switching to a furious political rant about national elections for a full page",
                "A dry comparison of the soufflé to a collapsed hat",
                "A precise verb such as <em>slumped</em>",
                "A short admission that the timer was ignored"
              ],
              0,
              "Wry food-fail voice can include dry comparisons and precise verbs. An unrelated furious rant is a tone/voice break."
            )
          ]
        ),
        section(
          "Diction: precision, connotation, and jargon",
          "Diction is not \"using big words.\" It is choosing the word whose denotation and connotation fit audience, tone, and meaning. Jargon is useful inside a community and exclusionary outside it.",
          "Precision: <em>strolled, trudged, bolted</em> are not interchangeable. Connotation: <em>slender, thin, skinny, scrawny</em> point at similar sizes with different attitudes. Jargon: <em>bisque, cone 6, reduction firing</em> belong in a ceramics handout; they need translation in a PTA speech. The exam asks which word best maintains tone or which substitution would offend or confuse the stated audience.",
          `<pre>Denotation ≈ dictionary
Connotation ≈ attitude packed in the word
  group / clique / team / pack   (same people, different spin)

Jargon test: If the audience did not take the class, do they still get the sentence?
If not, define or replace.</pre>`,
          {
            label: "connotation that picks a fight",
            problem: "A persuasive letter to cafeteria staff calls the lunch line a \"scheme\" and the cooks \"the regime.\" Which diction revision is best?",
            steps: [
              "<strong>Scheme and regime connote conspiracy and tyranny.</strong> The denotation might be \"plan\" and \"staff,\" but the attitude is hostile.",
              "<strong>That diction wrecks respectful tone</strong> before the reason is heard.",
              "<strong>Use neutral job words:</strong> <em>the lunch line; the cafeteria staff.</em> Save critique for the specific policy (time, allergens)."
            ],
            answer: "Hostile connotations are diction choices, not proof."
          },
          {
            label: "jargon vs. public audience",
            problem: "PTA speech: <em>We need another 5-gallon reduction firing before glaze-calc can happen on the tenmoku loads.</em> Which revision is best for this audience?",
            steps: [
              "<strong>PTA members may not know reduction, calc, or tenmoku.</strong>",
              "<strong>Translate the ask:</strong> extra kiln time so student pots can be finished for the art show.",
              "<strong>Keep one technical word if you define it;</strong> do not stack three."
            ],
            answer: "For a public audience, translate studio jargon into the decision they can fund or approve."
          },
          {
            problem: "Choose the most precise verb: the student moved toward the door when the fire alarm sounded. Options: walked, bolted, ambled, meandered.",
            hint: "Alarms call for <em>bolted</em> (or hurried). <em>Ambled</em> and <em>meandered</em> fight the situation unless irony is the point."
          },
          "Thesaurus-swapping for \"smarter\" synonyms that smash connotation (<em>the principal was notorious for kindness</em>). Notorious carries disapproval; famous or known would fit kindness.",
          [
            check(
              "Which word choice best keeps a respectful, precise tone in a report to the principal?",
              [
                "Three buses arrived after the tardy bell.",
                "Three buses slithered in, late as usual, because transportation is a joke.",
                "Three vehicular apparatuses commenced delayed ingress.",
                "The buses were kinda sus ngl."
              ],
              0,
              "Plain precise diction fits a principal report. Mockery, fake-elevated jargon, and slang all miss the audience."
            ),
            check(
              "In a ceramics handout for students who already know the studio, which diction is most appropriate?",
              [
                "Fire the bisque to cone 04; do not glaze greenware.",
                "Cook the mud until it is done-ish.",
                "Pursuant to thermal transformation protocols...",
                "Make the stuff not wet with the shiny stuff yet, you know?"
              ],
              0,
              "Shared-community jargon is efficient for the in-group. Baby talk, legalese, and vagueness are worse, not friendlier."
            )
          ]
        )
      ]
    }
  });
})();
