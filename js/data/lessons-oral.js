/* NES English Language Arts (301) Domain V — competencies 0016–0017 */
(function () {
  const { section, check } = window.LessonKit;

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "ov-01": {
      title: "Listening, speaking, and group discussion",
      domain: "oral",
      intro: `<p><strong>NES 301 competency 0016:</strong> Effective oral communication depends on the type of listening required, the barriers that block it, and the social norms of discussion — restating, clarifying, and reading nonverbal cues. The exam favorite is \"which listening barrier.\"</p>`,
      sections: [
        section(
          "Types of listening",
          "Listening is not the same as waiting to talk. Different situations require different listening jobs: enjoying, noticing a sound difference, getting information, judging an argument, or supporting a speaker's feelings.",
          "Name the job before you name the skill. <strong>Appreciative</strong> listening is for enjoyment (a performance). <strong>Discriminative</strong> listening notices differences (a tone shift, an alarm vs. a bell). <strong>Comprehensive</strong> (informational) listening is for understanding and recalling. <strong>Critical</strong> listening evaluates claims and evidence. <strong>Empathetic</strong> (therapeutic) listening is for the speaker's feelings, not for fixing or winning. Using critical listening during a classmate's grief, or only empathetic listening during a campaign speech, is a mismatch.",
          `<table><tr><th>Type</th><th>Job</th><th>Classroom cue</th></tr>
<tr><td>Appreciative</td><td>Enjoy / take in artfully</td><td>A spoken-word performance</td></tr>
<tr><td>Discriminative</td><td>Detect difference</td><td>Which name was called; sarcasm vs. sincerity</td></tr>
<tr><td>Comprehensive</td><td>Understand and remember</td><td>Lab safety instructions</td></tr>
<tr><td>Critical</td><td>Judge quality of argument</td><td>A campaign speech at an assembly</td></tr>
<tr><td>Empathetic</td><td>Understand feelings</td><td>A peer describing a family crisis</td></tr></table>`,
          {
            label: "wrong type for the moment",
            problem: "During a peer's account of a grandparent's funeral, a classmate starts fact-checking dates and rating the \"logic\" of grief. Which listening type was needed, and which was misused?",
            steps: [
              "<strong>The speaker is offering feelings, not a policy brief.</strong> Empathetic listening is the job.",
              "<strong>Critical listening</strong> (judging argument quality) is the mismatch and will feel like an attack.",
              "<strong>A better move:</strong> attend, reflect feeling (\"that sounds exhausting\"), and save evaluation for a debate round."
            ],
            answer: "Empathetic listening was required; critical listening was the wrong tool."
          },
          {
            label: "comprehensive vs. critical at a safety talk",
            problem: "The chemistry teacher lists evacuation steps. A student spends the time deciding whether the teacher is a \"credible speaker\" and takes no notes. What failed?",
            steps: [
              "<strong>The immediate job is comprehensive listening:</strong> get the steps right.",
              "<strong>Credibility matters in other contexts,</strong> but skipping the content to hold an ethos trial is a barrier disguised as sophistication.",
              "<strong>Take the steps first;</strong> critical questions about drills can come after the procedure is learned."
            ],
            answer: "Safety instructions call for comprehensive listening, not an on-the-spot rhetoric seminar."
          },
          {
            problem: "A jazz concert vs. a candidate's student-council speech vs. a friend who is crying. Name the primary listening type for each.",
            hint: "Appreciative; critical (and some comprehensive); empathetic."
          },
          "Treating \"active listening\" as one generic smile. The exam wants the type that matches the purpose of the talk.",
          [
            check(
              "Students are deciding whether a candidate's assembly speech used fair evidence. Which type of listening is most appropriate?",
              [
                "Critical listening",
                "Appreciative listening only",
                "Empathetic listening only",
                "No listening, because speeches are entertainment"
              ],
              0,
              "Evaluating evidence is critical listening. Enjoyment or emotional support may occur, but they are not the primary job for a campaign speech."
            ),
            check(
              "A lab partner whispers that she cannot see the board and sounds close to tears. Which listening type should come first?",
              [
                "Empathetic listening, then a practical clarification about seating",
                "Appreciative listening for the beauty of the whisper",
                "Critical listening to rate her argumentative thesis",
                "Discriminative listening to ignore her and track only the bell"
              ],
              0,
              "Distress calls for empathy first. You can still solve the seating problem; you should not treat her feelings as a debate case."
            )
          ]
        ),
        section(
          "Barriers to listening",
          "A listening barrier is anything that keeps the message from being received as intended: noise, bias, overload, fake attention, or planning your reply instead of hearing.",
          "Classify the barrier so you can remove it. <strong>Physical/environmental:</strong> HVAC roar, a late bell, a blocked sight line. <strong>Physiological:</strong> hearing loss, headache, hunger. <strong>Psychological:</strong> boredom, anger, anxiety. <strong>Bias and prejudice:</strong> dismissing a speaker because of accent, age, or role. <strong>Semantic:</strong> jargon or a loaded word that derails meaning. <strong>Rehearsing a response</strong> (internal noise) is one of the most common classroom barriers. The exam asks which barrier is at work, not whether listening is \"good\" in general.",
          `<table><tr><th>Barrier</th><th>What it looks like</th></tr>
<tr><td>Environmental noise</td><td>Can't hear over the band practice next door</td></tr>
<tr><td>Information overload</td><td>Twelve new steps with no pause or visual</td></tr>
<tr><td>Confirmation bias</td><td>Hearing only the one sentence that matches your side</td></tr>
<tr><td>Pseudolistening</td><td>Nodding while scrolling</td></tr>
<tr><td>Rehearsing</td><td>Writing your comeback during their evidence</td></tr>
<tr><td>Semantic</td><td>The word \"policy\" triggers a fight before the proposal is stated</td></tr></table>`,
          {
            label: "which listening barrier",
            problem: "During a group report, Mateo stares at the speaker and nods, but his notes are a grocery list and he cannot repeat the claim. Which barrier is this?",
            steps: [
              "<strong>The body language looks attentive</strong> — this is not environmental noise.",
              "<strong>He is faking the appearance of listening:</strong> pseudolistening.",
              "<strong>The fix is genuine comprehensive listening</strong> (eye contact plus actually encoding the claim), not a scolding about politeness alone."
            ],
            answer: "Pseudolistening: the performance of attention without reception."
          },
          {
            label: "bias as a barrier",
            problem: "A ninth grader presents a well-sourced recycling plan. A senior whispers, \"Freshmen don't know anything,\" and later misstates the plan as \"she just wants to lecture us.\" Which barrier is primary?",
            steps: [
              "<strong>The content was available;</strong> the senior refused it because of the speaker's status.",
              "<strong>That is prejudice/bias,</strong> not a semantic mix-up about the word <em>recycle</em>.",
              "<strong>Critical listening would test the sources,</strong> not the speaker's grade level."
            ],
            answer: "Bias against the speaker blocked the message more than noise or vocabulary did."
          },
          {
            problem: "A fire-drill explanation is given once, very fast, while a leaf blower runs under the window. Name two barriers and one repair.",
            hint: "Environmental noise + overload/speed. Repair: move rooms or pause the blower, then slow down and post the steps."
          },
          "Blaming every failure on \"kids these days don't listen.\" Barriers are specific and often under the speaker's or group's control (pace, noise, bias).",
          [
            check(
              "Which listening barrier is strongest in this scene: a student spends the entire counterargument composing a sarcastic reply and then attacks a point the speaker never made?",
              [
                "Rehearsing a response (internal noise), which produced a straw man",
                "A hearing impairment the scene never mentions",
                "Appreciative listening taken too far",
                "Too much note-taking of the actual evidence"
              ],
              0,
              "Planning a dunk while the other person talks is a classic barrier and often creates a fake version of their claim."
            ),
            check(
              "The HVAC drowns the last three steps of a lab briefing. Students in the back miss the warning about the wet floor. Which barrier is this, and what is the best repair?",
              [
                "Environmental noise; move, amplify, or post the steps where they can be seen",
                "Semantic barrier; ban the word <em>floor</em>",
                "Empathetic excess; students cared too much",
                "No barrier, because the front row heard it"
              ],
              0,
              "If sound cannot reach listeners, the barrier is environmental. Repair the channel; do not pretend the front row's luck counts as communication."
            )
          ]
        ),
        section(
          "Discussion norms: restating, clarifying, nonverbal",
          "Group discussion has social norms: take turns, attack ideas not people, invite quiet members in, and check understanding before you disagree. Restating, clarifying questions, and nonverbal cues are the tools.",
          "<strong>Restating</strong> (paraphrasing the other person) proves comprehensive listening and lowers heat. <strong>Clarifying</strong> asks for the missing piece (\"Do you mean the late bus or all buses?\"). <strong>Nonverbal</strong> cues — posture, eye contact, silence, notes — can support or leak contempt. Norms are not decoration; they are how a group keeps critical listening from turning into a pile-on. NES items often show a student who \"wins\" by interrupting and ask what the facilitator should do.",
          `<pre>Useful talk moves
RESTATE: "So you're saying the cost is the main objection, not safety."
CLARIFY: "When you say 'everyone,' do you mean all grades or only seniors?"
INVITE: "Aisha, you logged the data — do you want to add the March numbers?"
NONVERBAL support: facing the speaker, notes, unstacked arms
NONVERBAL leak: eye-roll, side-talk, packing up while they finish</pre>`,
          {
            label: "disagree after restating",
            problem: "Priya argues for a later start. Jordan snaps, \"That's lazy.\" Which discussion move is better before any rebuttal?",
            steps: [
              "<strong>Jordan skipped restating,</strong> so he may be fighting a slogan Priya did not say.",
              "<strong>Restate:</strong> \"You're arguing that an 8:15 start would cut tardies, not that people should sleep through first period.\"",
              "<strong>Then clarify or rebut the real claim</strong> with evidence. The personal adjective <em>lazy</em> violates the idea-not-person norm."
            ],
            answer: "Restate the actual claim, then disagree with it; do not label the speaker."
          },
          {
            label: "nonverbal contradiction",
            problem: "A facilitator says \"we value every voice\" while checking a phone and angling away from the quiet student who just started talking. What is the message?",
            steps: [
              "<strong>Nonverbal leaks beat the slogan.</strong> Phone plus turned shoulder says the voice is optional.",
              "<strong>Norm repair:</strong> phone down, body oriented to the speaker, a brief restatement of the quiet student's point so the group has to take it up.",
              "<strong>This is still competency 0016:</strong> speaking includes the body."
            ],
            answer: "Nonverbal behavior can cancel a stated discussion norm."
          },
          {
            problem: "A group member uses \"just to play devil's advocate\" to interrupt the same two students five times. What norm is broken, and what should the facilitator do?",
            hint: "Turn-taking and inviting others. Cap the repeats, restate the unanswered point from the interrupted students, and ask a third person to speak before the advocate returns."
          },
          "Treating restatement as agreement. You can paraphrase accurately and still reject the claim. In fact, fair restatement makes the rejection more credible.",
          [
            check(
              "Which discussion move best follows a classmate's confusing proposal about \"fixing lunch\"?",
              [
                "Ask a clarifying question: \"Do you mean longer lunch, a second line, or a nut-free table?\"",
                "Talk over them with a prepared speech on an unrelated topic",
                "Roll your eyes and whisper to a neighbor",
                "Declare that clarifying questions are rude"
              ],
              0,
              "Clarifying specifies the ask. Interruptions and nonverbal contempt are barriers, not norms."
            ),
            check(
              "A student restates an opponent's cost concern accurately, then offers ridership data. What did the restatement accomplish?",
              [
                "It showed comprehensive listening and framed a fair rebuttal, without requiring agreement",
                "It meant the student secretly switched sides",
                "It was pseudolistening because paraphrase is always fake",
                "It violated norms by not interrupting"
              ],
              0,
              "Accurate restatement is a norm of good disagreement. It is not surrender and not fake attention."
            )
          ]
        )
      ]
    },

    "ov-02": {
      title: "Speech craft: purpose, audience, and delivery",
      domain: "oral",
      intro: `<p><strong>NES 301 competency 0016:</strong> Speeches are designed for a purpose, an audience, and an occasion. Language style, rhetorical devices, and vocal techniques must serve that design — not decorate it.</p>`,
      sections: [
        section(
          "Purpose, audience, and occasion",
          "A speech is not an essay worn aloud. Purpose (inform, persuade, entertain, commemorate), audience (who is in the seats and what they can do), and occasion (assembly, eulogy, two-minute comment, pep rally) select content and tone together.",
          "Occasion constraints are easy to miss on the exam: a two-minute board comment cannot hold a twenty-minute lecture's structure; a memorial is the wrong hour for a campaign closer; a pep rally can use chanting that would cheapen a funeral. Analyze audience as you did in writing (knowledge, power, values), then add the live constraints: time, microphone, whether they can leave, whether a vote follows.",
          `<table><tr><th>Occasion</th><th>Typical purpose</th><th>Misfit</th></tr>
<tr><td>School-board comment</td><td>Persuade a vote</td><td>A stand-up set with no ask</td></tr>
<tr><td>Lab demo</td><td>Inform a procedure</td><td>A surprise plot twist</td></tr>
<tr><td>Retirement send-off</td><td>Commemorate</td><td>A roast that humiliates</td></tr>
<tr><td>Pep rally</td><td>Energize</td><td>A 15-minute policy white paper</td></tr></table>`,
          {
            label: "occasion mismatch",
            problem: "At a memorial for a classmate, a student-council candidate ends with \"And that's why you should vote for me on Friday.\" Why is this a speech-craft failure?",
            steps: [
              "<strong>Occasion is commemorative;</strong> purpose should honor the person, not harvest grief for a campaign.",
              "<strong>Audience is mourners,</strong> not a rally.",
              "<strong>Even a \"true\" policy claim</strong> is unethical here; save it for the actual campaign event."
            ],
            answer: "Purpose must fit occasion; a campaign closer at a memorial violates both ethics and craft."
          },
          {
            label: "audience that cannot grant the ask",
            problem: "A ninth-grade speech class is asked to \"end world hunger\" in a three-minute talk to classmates. Which revision of purpose and ask is best?",
            steps: [
              "<strong>Classmates cannot end world hunger this period.</strong> The ask is scaled to the wrong audience.",
              "<strong>Keep a real local purpose:</strong> persuade peers to volunteer at the weekend food-pack, or inform them how the cafeteria leftover cart works.",
              "<strong>Occasion (class speech) plus audience (peers)</strong> should produce a doable action or a clear explanation."
            ],
            answer: "Scale the purpose to what this audience, on this occasion, can actually do or learn."
          },
          {
            problem: "You have four minutes at PTA. You want a second crossing guard. What belongs in minute one?",
            hint: "The ask and the strongest public reason (sight line, counts), not your biography from kindergarten."
          },
          "Recycling one all-purpose speech for every occasion. A pep-rally closer and a board comment can share a fact and still need different style, length, and ask.",
          [
            check(
              "Which purpose best fits a two-minute comment at a school-board meeting about cutting the late bus?",
              [
                "Persuade the board to keep or pilot the route, using local ridership and safety evidence",
                "Entertain with a ten-minute comedy set about buses",
                "Commemorate a historical figure unrelated to transportation",
                "Inform the board of your favorite movie"
              ],
              0,
              "The occasion is a decision meeting. Persuasion with local evidence matches purpose, audience, and time."
            ),
            check(
              "A speaker gives a dense, jargon-filled kiln lecture at a pep rally. What is the main speech-craft error?",
              [
                "Occasion and audience called for energy and shared school identity, not a technical lecture",
                "Pep rallies legally forbid complete sentences",
                "Kilns may never be mentioned in any speech",
                "The speaker should have used more sarcasm about the football team"
              ],
              0,
              "Occasion mismatch is the diagnosis. Technical content belongs in a studio demo, not a rally."
            )
          ]
        ),
        section(
          "Language styles and rhetorical devices",
          "Spoken language styles range from formal to colloquial. Rhetorical devices (repetition, rhetorical question, analogy, parallelism, understatement) must be hearable in real time — if listeners cannot catch them by ear, they do not work.",
          "Choose a style the audience can process at speech speed: shorter sentences than in an essay, clearer signposts (\"first,\" \"the cost objection is this\"), and devices that emphasize rather than puzzle. Repetition and parallelism help memory. A buried allusion to a private joke does not. Loaded language can fire up a rally and backfire at a board table. Devices are not extra credit; a pile of metaphors with no claim is still a weak speech.",
          `<table><tr><th>Device</th><th>Spoken job</th><th>Risk</th></tr>
<tr><td>Repetition / refrain</td><td>Memory and unity</td><td>Feels like a chant if overused in a solemn occasion</td></tr>
<tr><td>Rhetorical question</td><td>Invite judgment</td><td>Sounds fake if the answer is insulting</td></tr>
<tr><td>Analogy</td><td>Make the unfamiliar graspable</td><td>False analogy (a school is not \"a business\" in every way)</td></tr>
<tr><td>Parallel lists</td><td>Rhythm and fairness of items</td><td>A third item that breaks the pattern</td></tr></table>`,
          {
            label: "device vs. occasion",
            problem: "A eulogy for a quiet art teacher uses five sarcastic rhetorical questions mocking students who skipped class. Which revision is best?",
            steps: [
              "<strong>Rhetorical questions that punch down</strong> fight a commemorative purpose.",
              "<strong>A single image or a short refrain about her kiln</strong> would fit the ear and the occasion.",
              "<strong>Cut the sarcasm;</strong> save critique of attendance for another day."
            ],
            answer: "Devices must serve the occasion; mock-questions at a eulogy are a misfit."
          },
          {
            label: "style too written to be spoken",
            problem: "A student reads: <em>One must, however, notwithstanding the aforementioned budgetary constraints, endeavor to conceptualize...</em> Listeners glaze over. What should change?",
            steps: [
              "<strong>The style is written-bureaucratic,</strong> too nested for the ear.",
              "<strong>Speak in hearable units:</strong> <em>The budget is tight. Here is a cheaper option that still keeps the late bus one day a week.</em>",
              "<strong>Keep one precise term if you define it;</strong> do not stack Latinate delay words."
            ],
            answer: "Spoken style needs shorter syntactic units than a policy appendix."
          },
          {
            problem: "You want classmates to remember three bus-safety steps. Which device helps most?",
            hint: "Parallel three-part list, possibly with light repetition (\"Look once. Look twice. Then cross.\"). A private metaphor they have to decode will not stick."
          },
          "Collecting devices like stickers. If you cannot say what job the anaphora is doing for this audience, cut it.",
          [
            check(
              "Which rhetorical choice best fits a solemn retirement speech for a librarian?",
              [
                "A short repeated line about the quiet way she found books for shy readers",
                "A string of sarcastic questions humiliating a rival employee",
                "A fake-legal paragraph of \"heretofore\" and \"whereas\" with no memories",
                "A pep-rally chant of the librarian's last name"
              ],
              0,
              "A restrained refrain matches commemorative occasion. Humiliation, frozen legalese, and chants do not."
            ),
            check(
              "A board comment includes the analogy \"students are customers, so cut whatever they don't buy.\" Why is this a weak device here?",
              [
                "It is a false analogy: students are not only customers, and a late bus can be a safety duty rather than a product",
                "Analogies are never allowed in speeches",
                "Boards cannot understand any comparison",
                "The analogy is too short to count as language"
              ],
              0,
              "Analogies fail when the comparison hides a duty the audience actually has. Devices are allowed; false ones are still weak."
            )
          ]
        ),
        section(
          "Vocal techniques and delivery",
          "Delivery is meaning: volume, pitch, rate, pause, stress, and articulation. Nonverbal delivery (stance, gestures, notes vs. reading) must match the words.",
          "Volume should reach the back row without shouting intimacy. Rate slows for new information and names; it can quicken for a story's chase but not for a safety step. Pauses let a claim land; filler (<em>um</em>, <em>like</em>) is human, but a wall of filler hides the thesis. Stress the words that carry the ask (\"<em>six-week</em> pilot\"). Reading a full script to a small circle kills eye contact; note cards with key phrases usually fit classroom occasions better. Vocal variety is not acting class for its own sake — monotone can put an audience to sleep, but fake drama at a budget hearing sounds untrustworthy.",
          `<pre>Delivery checklist (exam translation)
Can the back row hear?     volume
Do they have time to write  rate + pause
  a number?
Does stress fall on the ask?  emphasis
Do gestures support, not    nonverbal
  fan the air?
Is this sincere for the     variety without theater
  occasion?</pre>`,
          {
            label: "rate that buries the number",
            problem: "A speaker races through \"four hundred twelve dollars a week\" and then pauses for a joke. Listeners remember the joke, not the cost. Which delivery revision is best?",
            steps: [
              "<strong>The number is the logos.</strong> It needed a slower rate and a pause after it.",
              "<strong>Jokes can pause for laughter;</strong> evidence needs a pause for encoding.",
              "<strong>Say the figure twice or show it on a slide</strong> if the occasion allows visuals."
            ],
            answer: "Slow and pause on the figure; do not spend the only pause on a joke."
          },
          {
            label: "volume vs. intimacy",
            problem: "At a small circle sharing a personal narrative, a student uses pep-rally volume and a pointing finger on every sentence. What should change?",
            steps: [
              "<strong>Occasion is intimate;</strong> rally volume feels aggressive.",
              "<strong>Drop volume, slow rate, open the hand</strong> rather than jab.",
              "<strong>Match delivery to distance and purpose:</strong> the same speech at an outdoor rally would need more projection."
            ],
            answer: "Delivery scales to room and purpose; volume is not automatically confidence."
          },
          {
            problem: "A speaker's notes are a full essay; they never look up. Name two delivery costs and one practical fix.",
            hint: "Lost eye contact and a written-not-spoken rate. Fix: keyword cards, rehearse looking up on the ask and on names."
          },
          "Thinking delivery is only \"don't say um.\" A fluent, smiling delivery of a contemptuous sentence is still a tone problem. Fluency cannot launder content.",
          [
            check(
              "Which vocal technique best helps a mixed-age PTA audience remember a three-part dismissal plan?",
              [
                "A moderate rate, a pause after each step, and stress on the door letter and time",
                "A single breath racing all three steps, then a long pause for a joke",
                "A whisper that only the front row can hear",
                "A monotone equal stress on every syllable including \"um\""
              ],
              0,
              "Pauses and stress encode steps. Racing, inaudible volume, and flat filler do not."
            ),
            check(
              "A speaker arguing for a crossing guard pounds the podium and shouts the word \"idiots\" at the transportation chart. What is the delivery/tone problem?",
              [
                "Aggressive volume and insulting stress destroy ethos even if the chart is accurate",
                "Podiums may never be touched",
                "Charts are illegal visual aids",
                "The speaker should have shouted more to show passion"
              ],
              0,
              "Delivery that attacks people undercuts a public-safety ask. Passion is not the same as contempt."
            )
          ]
        )
      ]
    },

    "ov-03": {
      title: "Visual media: images, bias, and manipulation",
      domain: "oral",
      intro: `<p><strong>NES 301 competency 0017:</strong> Images send messages and can carry bias. They change behavior and opinion. Viewers' prior knowledge shapes interpretation. The exam asks which media manipulation is at work in an original classroom or school-media scenario — never a copyrighted ad campaign.</p>`,
      sections: [
        section(
          "Messages and bias in images",
          "An image is an argument with a frame. Someone chose what to include, what to crop, what to light, and what caption to lock to the picture. Bias can live in any of those choices.",
          "Read images the way you read persuasive text: Who made this, for whom, with what purpose? What is in the frame, and what was likely left out? Camera angle (looking up at a figure can confer power; looking down can diminish). Cropping can turn a wide, calm crowd into a \"mob\" of three angry faces. Color, staging, and who gets named in a caption all steer meaning. Neutrality is a claim, not a default.",
          `<table><tr><th>Choice</th><th>Possible bias</th></tr>
<tr><td>Crop</td><td>Removes context that would change the story</td></tr>
<tr><td>Angle</td><td>Heroizes or shrinks a person</td></tr>
<tr><td>Caption</td><td>Tells the viewer what to conclude</td></tr>
<tr><td>Selection</td><td>One messy lunch tray stands for \"the cafeteria\"</td></tr>
<tr><td>Staging</td><td>A posed handshake presented as candid news</td></tr></table>`,
          {
            label: "crop and caption",
            problem: "The yearbook runs a photo of three students grimacing in the lunch line, cropped so empty extra tables disappear, captioned \"Cafeteria chaos daily.\" What bias is at work?",
            steps: [
              "<strong>Selection + crop</strong> hide counterevidence (empty tables, other calm days).",
              "<strong>The caption states a universal (\"daily\")</strong> the picture cannot prove.",
              "<strong>A fairer package</strong> would show a wider frame and a caption that matches the actual moment (\"Thursday's second seating, 12:18 p.m.\")."
            ],
            answer: "Cropping and an overstated caption manufacture a \"chaos\" message."
          },
          {
            label: "angle as power",
            problem: "The school site posts a low-angle photo of the principal at a podium and a high-angle photo of student protesters on the lawn, both without context. What messages are stacked?",
            steps: [
              "<strong>Low angle on the principal</strong> tends to confer stature.",
              "<strong>High angle on students</strong> tends to make them look smaller or more chaotic.",
              "<strong>Paired, the layout argues hierarchy</strong> before a reader hits a single sentence of the dispute."
            ],
            answer: "Camera angle can assign power; pairing two angles is a rhetorical choice."
          },
          {
            problem: "A club poster shows one overflowing trash can at 3:05, labeled \"We don't recycle.\" List two questions a critical viewer should ask.",
            hint: "When was it taken? What is just outside the frame? Who benefits from this message? Is there a second can that was emptied at 2:50?"
          },
          "Believing a photograph cannot lie because \"the camera was there.\" The camera was there for a chosen second, from a chosen height, after a chosen crop.",
          [
            check(
              "A campus news photo shows only the one cracked instrument from a band trip, captioned \"Band ruins another festival.\" Which bias technique is most central?",
              [
                "Selective framing plus a caption that generalizes one mishap into a total failure",
                "A fair wide shot of the whole successful concert",
                "A citation of the festival schedule",
                "An interview with the director that includes praise"
              ],
              0,
              "One damaged object plus a totalizing caption is selection bias. Fair wide shots and balanced interviews would reduce, not create, that bias."
            ),
            check(
              "Which caption is least biased for a photo of students waiting at a late bus?",
              [
                "Route 4 at 4:12 p.m. on Tuesday, after the posted 3:50 departure",
                "Lazy teens waste another afternoon",
                "Proof that transportation hates students",
                "The happiest bus in America (when faces are clearly tired)"
              ],
              0,
              "A dated, specific caption reports. Insults, mind-reading, and fake cheer all editorialize beyond the image."
            )
          ]
        ),
        section(
          "How images change behavior and opinion",
          "Images are used to move people: buy, vote, donate, obey, share. Manipulation is a design choice that hides or distorts in order to produce that move. Not every persuasive image is a lie, but viewers should be able to name the technique.",
          "Classroom-safe techniques to recognize: <strong>juxtaposition</strong> (before/after that fakes the after), <strong>implied causation</strong> (a smiling student next to a product as if the product caused the grade), <strong>omitted scale</strong> (a chart with a truncated axis in a student infographic), <strong>emotional close-up</strong> that blocks data, <strong>bandwagon visuals</strong> (a crowd shot implying \"everyone already agrees\"), <strong>fear stacking</strong> (danger imagery attached to a mild policy). The exam question is often \"which media manipulation,\" so name the mechanism, not just \"this is fake.\"",
          `<table><tr><th>Technique</th><th>Behavior it tries to produce</th></tr>
<tr><td>Fake before/after</td><td>Buy the \"fix\"</td></tr>
<tr><td>Crowd = consensus</td><td>Join or stay silent</td></tr>
<tr><td>Fear close-up</td><td>Approve a harsh rule without numbers</td></tr>
<tr><td>Missing baseline on a graph</td><td>See a tiny change as a crisis</td></tr>
<tr><td>Celebrity-style endorsement (a popular senior holding a flyer)</td><td>Transfer liking to a candidate or product</td></tr></table>`,
          {
            label: "which media manipulation",
            problem: "A student-council flyer puts a close-up of a overflowing trash can next to the opponent's face and the words \"This is what they want.\" The opponent's platform is actually more recycling bins. Which manipulation is this?",
            steps: [
              "<strong>The image-text pair assigns a motive the platform contradicts</strong> — guilt by juxtaposition.",
              "<strong>It uses disgust to block reading the actual plan.</strong>",
              "<strong>Name it:</strong> misleading juxtaposition / straw-man visual, not a good-faith comparison of bin counts."
            ],
            answer: "Juxtaposition that pins a problem image on a person who did not cause it is visual straw-manning."
          },
          {
            label: "graph that shouts",
            problem: "A club infographic shows cafeteria waste \"skyrocketing\" on a bar graph whose vertical axis starts at 48 bags instead of 0 (the numbers are 49, 50, 51). What is the manipulation, and how does it try to change opinion?",
            steps: [
              "<strong>A truncated axis</strong> turns a small change into a cliff.",
              "<strong>The intended behavior</strong> is panic and a rushed vote for whatever the club is selling as a fix.",
              "<strong>A fair graph starts at zero</strong> (or clearly marks a break) and names the time window."
            ],
            answer: "Scale manipulation makes a tiny shift look like a crisis."
          },
          {
            problem: "A \"before/after\" hallway photo: before is a wide, dark, rainy afternoon; after is a cropped, brightly lit, freshly waxed corner credited to a new product the club did not actually apply. Name two tricks.",
            hint: "Lighting and weather as fake variables; crop that hides the rest of the still-scuffed hall; implied causation."
          },
          "Calling every emotional image \"manipulation.\" A genuine photo of a cracked sidewalk can honestly support a repair ask. Manipulation is the hidden distortion, not the presence of feeling.",
          [
            check(
              "Which media manipulation is at work? A campaign video loops a five-person huddle shot while a voiceover says \"the whole school has already decided.\"",
              [
                "Bandwagon / false consensus: a small group is presented as everyone",
                "A fair census of all 1,200 students",
                "A citation of the official vote tally",
                "An invitation to read the full platform"
              ],
              0,
              "A handful of people cannot visually prove a schoolwide decision. That is bandwagon imagery."
            ),
            check(
              "A poster for a study-app (invented for class) shows a student holding an A paper beside the logo, with no time, no other methods, and the slogan \"Download this, get that.\" Which manipulation is central?",
              [
                "Implied causation: the image treats correlation (or staging) as proof the app caused the grade",
                "A randomized study reported in the fine print that does not exist on the poster",
                "Too many sourced statistics",
                "A clear disclaimer that grades have many causes"
              ],
              0,
              "Staging a grade next to a product implies a cause the poster never demonstrates."
            )
          ]
        ),
        section(
          "Prior knowledge and interpretation",
          "Two viewers can see one image and disagree without either being \"bad at looking.\" Prior knowledge, culture, role, and recent experience fill in what the frame left out.",
          "A photo of a raised hand may look like participation to a teacher and like anxiety to a student who was just cold-called. A picture of a closed classroom door may look like quiet work or like exclusion, depending on whether you have been locked out. Media literacy includes asking <strong>what a viewer might already believe</strong> and how the image-maker is counting on that. Designers exploit prior knowledge (school colors implying official approval; a white coat implying medical authority in a student video). Responsible presenters test images on someone outside their in-group.",
          `<pre>Image  +  viewer's prior knowledge  =  interpretation

Same photo of a packed gym
  Senior: "spirit."
  New student: "no place to sit."
  Custodian: "who is going to reset those bleachers?"

Exam move: do not treat your first reading as the only reading;
ask what knowledge you used, and what the maker wanted you to use.</pre>`,
          {
            label: "official colors as borrowed authority",
            problem: "A student flyer uses the district seal and school colors to advertise an unofficial off-campus party. Why might some families interpret it as school-sponsored?",
            steps: [
              "<strong>Prior knowledge:</strong> seal + colors usually mark official communication.",
              "<strong>The maker is borrowing that association</strong> whether or not they admit it.",
              "<strong>Ethical fix:</strong> drop the seal, label \"not a school event,\" and use distinct design."
            ],
            answer: "Viewers apply learned symbols of authority; designers can exploit that."
          },
          {
            label: "two honest readings",
            problem: "A photo shows students in hoodies sitting on the library floor. A board member says \"loitering.\" A librarian says \"we ran out of chairs during exam week.\" What should a media-literate discussion do?",
            steps: [
              "<strong>Both readings use prior knowledge</strong> (discipline narratives vs. exam-week overflow).",
              "<strong>The image alone cannot settle it.</strong> Ask for date, time, and whether chairs were already full.",
              "<strong>Do not declare one viewer \"biased\" and the other \"objective\"</strong> without checking the missing context."
            ],
            answer: "Prior knowledge fills gaps; the remedy is context, not mockery of one viewer."
          },
          {
            problem: "A still image of a teacher standing with crossed arms is captioned in a student video as \"hostile.\" What prior knowledge might produce a different reading?",
            hint: "Cold room, a listening stance, a break between classes, cultural differences in posture. Ask the maker what else was happening."
          },
          "Assuming that because an interpretation is possible, it is necessary. Possibility is not proof — that is as true of images as of poetry.",
          [
            check(
              "A new family from another district sees a hallway poster of a mascot they associate with a rival school and reads it as mockery. The poster is actually this school's own mascot. What does this illustrate?",
              [
                "Prior knowledge can misread an image even when the maker did not intend mockery",
                "The family is not allowed to interpret images",
                "Mascots cannot carry meaning",
                "Only one interpretation can ever exist"
              ],
              0,
              "Viewers import old associations. Intent and effect can diverge; media literacy names that gap."
            ),
            check(
              "Which classroom move best accounts for prior knowledge when presenting a photo of a crowded lunch line?",
              [
                "State when it was taken, what sits outside the frame, and ask how different roles (student, cashier, custodian) might read it",
                "Insist there is only one adult reading",
                "Refuse to caption it at all and dare people to guess",
                "Crop it tighter so fewer questions arise"
              ],
              0,
              "Context plus multiple-role readings is media literacy. Tighter crops usually increase, not reduce, manipulation."
            )
          ]
        )
      ]
    },

    "ov-04": {
      title: "Presentations, technologies, copyright, and ethics",
      domain: "oral",
      intro: `<p><strong>NES 301 competency 0017:</strong> Presentations are planned for a purpose and modified for an audience. Visual aids and technologies should help, not compete. Legal and ethical rules — including copyright and citation — still apply when the work is spoken, projected, or posted.</p>`,
      sections: [
        section(
          "Purpose and audience modification",
          "A presentation is a live (or recorded) composition. You still choose purpose first, then modify content, vocabulary, examples, and length for the actual audience — including accessibility needs.",
          "Modification is not \"dumbing down.\" For the school board, lead with the decision and the cost. For ninth graders, define terms and show the object. For multilingual families, slow down, add translated handouts, and avoid idioms that do not travel. For a recorded announcement, write for the ear and do not rely on a tiny slide the camera never shows. If a student presenter keeps the same 40-slide deck for kindergarten families and for the superintendent, the purpose has not been modified.",
          `<table><tr><th>Audience</th><th>Modify</th></tr>
<tr><td>Board / admin</td><td>Ask, cost, timeline, one slide of evidence</td></tr>
<tr><td>Peers</td><td>Shared examples, less title-page theater</td></tr>
<tr><td>Families</td><td>Times, doors, buses; plain language</td></tr>
<tr><td>Specialists (art, athletics)</td><td>Keep jargon they already share</td></tr>
<tr><td>Mixed / public livestream</td><td>Define once; don't assume in-jokes</td></tr></table>`,
          {
            label: "same deck, wrong room",
            problem: "Ava built a ceramics-glaze chemistry deck for her class. She presents it unchanged to kindergarten families on curriculum night. Which modification is best?",
            steps: [
              "<strong>Purpose for families</strong> is likely \"what students make and how to see the show,\" not cone numbers.",
              "<strong>Keep one photo of student work</strong> and the exhibit date; cut the chemistry tables or move them to a handout for interested parents.",
              "<strong>That is audience modification,</strong> not a betrayal of rigor."
            ],
            answer: "Change depth, vocabulary, and examples to match the room; keep the purpose honest."
          },
          {
            label: "accessibility as audience",
            problem: "A morning announcement video is only spoken, with no captions, and the key date appears for half a second in 8-point type. Who is excluded, and what should change?",
            steps: [
              "<strong>Deaf or hard-of-hearing viewers, noisy-bus viewers, and anyone who blinked</strong> miss the date.",
              "<strong>Captions, a held full-screen date, and a follow-up text</strong> modify for real audiences, not hypothetical ideal ones.",
              "<strong>Technology that cannot be received is not a presentation;</strong> it is a private recording."
            ],
            answer: "Build captions and durable on-screen text into the design, not as afterthoughts."
          },
          {
            problem: "You have 12 minutes with the PTA and 40 minutes of kiln content. What do you cut first?",
            hint: "Cut backstory and duplicate examples. Keep the decision you want (funding extra firings), the cost, and one clear photo of student work at risk if firings are cut."
          },
          "Refusing to modify because \"the information is the information.\" Unreceived information is not communicated, however accurate it was on the slide.",
          [
            check(
              "A presenter will speak to new immigrant families about early dismissal. Which modification is most appropriate?",
              [
                "Plain language, the time and door in numerals, a translated handout, and no unexplained idioms",
                "More sarcastic school slang to sound friendly",
                "A 40-slide history of the district with no dismissal time",
                "Speaking faster to show energy"
              ],
              0,
              "Families need the actionable facts in accessible language. Slang, history dumps, and speed all raise barriers."
            ),
            check(
              "Why should a student shorten a 30-slide research deck to 8 slides for a three-minute fair?",
              [
                "Occasion and audience time require a modified presentation, not the full paper on a wall",
                "Slides are illegal in fairs",
                "Research should never be shared",
                "Three minutes is enough to read 30 slides aloud if you skip breathing"
              ],
              0,
              "Time is an audience constraint. Modification is part of competency 0017, not a lesser version of the work."
            )
          ]
        ),
        section(
          "Visual aids and presentation technologies",
          "A visual aid should do a job the voice cannot do as well: show a map, a step, a graph, a model. Technology is a delivery system, not the message.",
          "Choose the aid for the content: a real kiln shelf on a table may beat a blurry photo; a large printed map of dismissal doors may beat a live app that needs Wi-Fi. Slides: one idea, readable type, high contrast, alt-able images. Avoid reading bullet walls, auto-playing sound, and animations that stall a timer. Have a no-tech backup (handout, whiteboard) because projectors fail. Passing a tiny phone around a 30-person class is not a visual aid; it is a bottleneck.",
          `<pre>Aid that earns its place
  - a graph with a zero baseline and a source
  - a photo that shows the cracked step, held long enough to see
  - a demo of the actual form on a projected screen

Aid that steals the show
  - six fonts and a spinning clip-art bus
  - a 3-minute meme compilation "to hook"
  - a video with unreadable captions and no pause for discussion</pre>`,
          {
            label: "slide that competes with talking",
            problem: "A speaker reads 90-word slides verbatim while the audience tries to copy them. Which revision is best?",
            steps: [
              "<strong>The slide is now the speech,</strong> and badly: people cannot read and listen at full capacity.",
              "<strong>Cut to a headline plus two numbers,</strong> speak the explanation, put the paragraph on a handout.",
              "<strong>Technology should support dual coding (simple visual + spoken explanation),</strong> not duplicate a dense essay."
            ],
            answer: "Reduce on-screen text; speak the reasoning; hand out the details."
          },
          {
            label: "wrong technology for the room",
            problem: "For an outdoor pep-rally map of bus staging, a student prepared a phone-sized interactive 3-D model that cannot be seen past row two. What should they have used?",
            steps: [
              "<strong>The job is a shared map at distance.</strong>",
              "<strong>A large printed board or a projected high-contrast map</strong> beats a fancy model nobody can see.",
              "<strong>\"More technology\" is not automatically \"better visual aid.\"</strong>"
            ],
            answer: "Match scale and contrast to the viewing distance."
          },
          {
            problem: "The projector bulb dies 30 seconds in. What ethical/professional backup should already exist?",
            hint: "A printed agenda, a whiteboard sketch of the two numbers that matter, or a shared handout. Do not cancel the purpose because a gadget failed."
          },
          "Designing the aid first (\"I want to use this cool transition\") and then finding a topic. Purpose still comes first; tech is downstream.",
          [
            check(
              "Which visual aid best supports a three-minute explanation of a new dismissal map?",
              [
                "One high-contrast projected map with two labeled doors and a spoken walk-through",
                "Twenty slides of unreadable hallway photos plus autoplay music",
                "A phone passed along one row",
                "A spinning animation of the mascot with no map"
              ],
              0,
              "One readable map does the job. Music, phone-passing, and mascot spin do not communicate doors."
            ),
            check(
              "A live demo of a website requires login, but the guest Wi-Fi is down. What is the best technology decision?",
              [
                "Switch to screenshots or a downloaded offline copy prepared as backup",
                "Apologize and end the presentation with no content",
                "Describe a different website from memory with no relation to the purpose",
                "Ask the audience to shout passwords"
              ],
              0,
              "Backups are part of competent use of technology. Ending or fishing for passwords is not."
            )
          ]
        ),
        section(
          "Legal, ethical, copyright, and citation",
          "Spoken and projected work still uses other people's intellectual property. Copyright, fair-use limits, school posting rules, and citation ethics apply to slides, videos, music beds, and photos — including student photos of other students.",
          "Do not assume a classroom wall or a student video is \"not real publishing.\" Posting a classmate's photo without permission, ripping a commercial song as background for a required video, or pasting a news photo into a slide with the source cropped off are ethical and often legal problems. Cite images as you cite quotations. Prefer public-domain or school-licensed materials, or create original photos of objects (not of unwilling people). Fair use is a limited, context-specific defense — not a blanket hall pass because the assignment is for school. When in doubt, link, cite, replace, or get permission.",
          `<table><tr><th>Move</th><th>Usually OK</th><th>Not OK</th></tr>
<tr><td>Photo</td><td>Your photo of a kiln; cited public-domain image</td><td>A classmate's face posted without consent; a stolen news photo with credit cropped away</td></tr>
<tr><td>Text</td><td>Short quoted policy line + citation</td><td>Pasting a page of a textbook onto a slide as if you wrote it</td></tr>
<tr><td>Audio</td><td>Silence, original recording, licensed school track</td><td>A ripped commercial hit as the bed for a graded film</td></tr>
<tr><td>Data</td><td>Chart you made from cited figures</td><td>A screenshot of someone else's infographic presented as yours</td></tr></table>`,
          {
            label: "image citation is still citation",
            problem: "A slide shows a dramatic storm photo found online, no photographer, no license, captioned as if the student shot it. Which ethical/legal revision is best?",
            steps: [
              "<strong>Passing off someone else's photo is plagiarism</strong> and likely infringement.",
              "<strong>Replace with an original photo,</strong> a clearly licensed/public-domain image with a credit line, or no photo.",
              "<strong>\"I found it on the internet\" is not a license.</strong>"
            ],
            answer: "Credit and permission (or replacement) are required; school use does not erase authorship."
          },
          {
            label: "student privacy",
            problem: "A presenter includes a candid photo of a peer crying after a failed audition in a video that will be posted to the class stream. The peer did not consent. What should happen?",
            steps: [
              "<strong>This is an ethics issue even if copyright of the photo belongs to the photographer.</strong> People have privacy and dignity interests.",
              "<strong>Remove the image,</strong> blur, or replace with a non-identifying shot (empty stage) unless the peer clearly agrees to that use in that venue.",
              "<strong>\"It's for school\" does not equal consent to publish distress.</strong>"
            ],
            answer: "Do not project or post identifiable student distress without consent."
          },
          {
            problem: "A group wants a tense drum loop under a presentation about lab safety. They only have a ripped file from a commercial track. What should they do?",
            hint: "Use a school-licensed library, an original recording, or silence. Do not assume classroom fair use covers a copied hit, especially if the video is posted."
          },
          "Believing citation is only for research papers. A slide, a spoken quotation, and a posted flyer are all places to steal — or to model academic honesty.",
          [
            check(
              "Which practice is ethically and legally soundest for a student video that will be posted on the school site?",
              [
                "Original footage, school-licensed audio, cited public-domain stills, and permission for any identifiable students",
                "A ripped commercial song plus uncredited news photos of strangers and classmates",
                "Copying a textbook chapter onto the screen with no source",
                "Cropping watermarks off stock photos so they look original"
              ],
              0,
              "Original or licensed + cited + consented is the ethical bundle. Ripping, hiding credits, and pasting textbooks fail copyright and honesty."
            ),
            check(
              "A student quotes two lines of a district policy on a slide, with quotation marks and a citation to the handbook, then explains the lines in her own words. Is this plagiarism?",
              [
                "No; short quotation with marks and a source, plus original explanation, is responsible use",
                "Yes; policies may never be quoted",
                "Yes; slides cannot contain citations",
                "Only if the font is too large"
              ],
              0,
              "Citation and quotation marks are how you use others' language without stealing it. The explanation should stay original."
            )
          ]
        )
      ]
    }
  });
})();
