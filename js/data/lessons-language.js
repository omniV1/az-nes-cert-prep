/* NES English Language Arts (301) Domain III — competencies 0009–0011 */
(function () {
  const { section, check } = window.LessonKit;

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "lg-01": {
      title: "Grammar and usage under pressure",
      domain: "language",
      intro: `<p><strong>NES 301 competency 0009:</strong> Apply Standard American English usage and sentence structure under timed pressure. Diagnose fragments, run-ons, comma splices, tense shifts, and voice problems, then choose the revision that fixes the error without changing meaning.</p>`,
      sections: [
        section(
          "Fragments, run-ons, and comma splices",
          "A complete sentence needs a subject, a finite verb, and a finished thought. An independent clause can stand alone; a dependent clause cannot.",
          "A <strong>fragment</strong> is missing a subject, a finite verb, or a complete thought. A <strong>fused run-on</strong> slams two independent clauses together with no mark. A <strong>comma splice</strong> joins two independent clauses with only a comma. Legal joins are a period, a semicolon, or a comma plus a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).",
          `<table><tr><th>Error</th><th>Test</th><th>Legal fix</th></tr>
<tr><td>Fragment</td><td>Can it stand alone as a complete thought?</td><td>Add the missing piece or attach it to a nearby sentence</td></tr>
<tr><td>Fused run-on</td><td>Two independents with no punctuation</td><td>Period, semicolon, or comma + FANBOYS</td></tr>
<tr><td>Comma splice</td><td>Two independents with only a comma</td><td>Same three joins; a comma alone is never enough</td></tr></table>`,
          {
            label: "comma splice in a lab write-up",
            problem: "A student writes: <em>The beaker cracked, the class stopped the trial.</em> Which revision is best?",
            steps: [
              "<strong>Find the clauses:</strong> \"The beaker cracked\" and \"the class stopped the trial\" are both independent — each has a subject and a finite verb and can stand alone.",
              "<strong>Name the error:</strong> only a comma sits between them, so this is a comma splice, not a legal compound sentence.",
              "<strong>Choose a legal join that keeps the cause-effect meaning:</strong> a comma plus <em>so</em> (FANBOYS) preserves the logic without adding extra clauses."
            ],
            answer: "Best revision: <em>The beaker cracked, so the class stopped the trial.</em>"
          },
          {
            label: "dependent-clause fragment",
            problem: "A draft reads: <em>Because the auditorium lights failed during rehearsal. The cast practiced in the cafeteria.</em> Which revision is best?",
            steps: [
              "<strong>Test the first group:</strong> \"Because the auditorium lights failed during rehearsal\" starts with a subordinating conjunction, so it is a dependent clause — a fragment.",
              "<strong>Test the second group:</strong> \"The cast practiced in the cafeteria\" is a complete independent clause.",
              "<strong>Attach, do not just capitalize:</strong> joining them with a comma after the opener yields one grammatical complex sentence and keeps the cause-effect link."
            ],
            answer: "Best revision: <em>Because the auditorium lights failed during rehearsal, the cast practiced in the cafeteria.</em>"
          },
          {
            problem: "Revise: <em>The yearbook staff met after school they still missed the printer deadline.</em>",
            hint: "Two independent clauses with nothing between them = fused run-on. Insert a legal join; do not merely add a comma."
          },
          "Treating a long sentence as automatically correct. Length is not a test. Count independent clauses and check the join. A comma after a dependent opener is required; a comma between two independents is not enough.",
          [
            check(
              "Which revision is best for: <em>Walking to the bus, the backpack unzipped and spilled notebooks.</em>",
              [
                "Walking to the bus, Maya felt her backpack unzip and spill notebooks.",
                "Walking to the bus. The backpack unzipped and spilled notebooks.",
                "Walking to the bus the backpack unzipped, and spilled notebooks.",
                "Walking to the bus, notebooks spilled from the unzipped backpack and Maya."
              ],
              0,
              "The original dangling modifier makes the backpack seem to walk. The best revision gives a human subject who is actually walking. Splitting into a fragment or leaving the dangling opener does not fix the logic."
            ),
            check(
              "A student writes: <em>The debate round ran long the judges asked for silence.</em> Which error is present, and which revision is best?",
              [
                "Fused run-on; best: <em>The debate round ran long, so the judges asked for silence.</em>",
                "Fragment; best: add a subject to the second half",
                "Comma splice; best: delete the second clause",
                "Correct as written because both ideas are related"
              ],
              0,
              "Two independent clauses with no punctuation is a fused run-on. A comma plus <em>so</em> is a legal FANBOYS join. Related ideas do not excuse a missing join."
            )
          ]
        ),
        section(
          "Tense consistency and voice",
          "English verbs show time (tense) and whether the subject acts or is acted upon (active vs. passive voice). A narrative usually stays in one primary tense unless a real time shift occurs.",
          "Under pressure, scan for <strong>unmotivated tense shifts</strong> (a story that jumps from past to present for no reason) and for <strong>awkward or hiding passive</strong> (the actor disappears when the actor matters). Passive voice is grammatical and useful when the receiver of the action is the focus; it is a problem when it creates vagueness or wordiness, not merely because it is passive.",
          `<table><tr><th>Issue</th><th>Cue</th><th>Exam move</th></tr>
<tr><td>Tense shift</td><td>was / is / had mixed with no time change</td><td>Pick the dominant tense unless a flashback or ongoing fact requires a shift</td></tr>
<tr><td>Useful passive</td><td>actor unknown or less important than the result</td><td>Keep it: <em>The mural was restored in 2019.</em></td></tr>
<tr><td>Weak passive</td><td>actor matters and is known</td><td>Revise to active: <em>The principal canceled the assembly.</em></td></tr></table>`,
          {
            label: "unmotivated tense shift",
            problem: "A narrative draft: <em>Jalen opened the kiln and the glaze is already cracked.</em> Which revision is best?",
            steps: [
              "<strong>Name the dominant tense:</strong> \"opened\" is simple past, so this is a past-tense narrative moment.",
              "<strong>Test the second verb:</strong> \"is\" jumps to present with no signal that we have left the scene.",
              "<strong>Match tenses unless a real time change exists:</strong> keep both verbs in past: <em>Jalen opened the kiln and the glaze was already cracked.</em>"
            ],
            answer: "Best revision matches past tense throughout the scene."
          },
          {
            label: "when passive should stay",
            problem: "A science report: <em>The samples were contaminated before anyone entered the lab.</em> A peer wants to force active voice. What should the writer do?",
            steps: [
              "<strong>Ask who acts:</strong> the contaminating agent is unknown; inventing \"someone contaminated the samples\" adds a fake actor.",
              "<strong>Ask what the sentence is about:</strong> the samples and the result are the focus, which is a legitimate use of passive.",
              "<strong>Keep the passive:</strong> NES items often include a distractor that \"always change passive to active.\" Voice is a meaning choice, not a moral rule."
            ],
            answer: "Keep the passive: it correctly hides an unknown actor and focuses on the samples."
          },
          {
            problem: "Revise for tense and voice: <em>After the counselor explained the form, applications are submitted by students the same day.</em>",
            hint: "The first clause is past. Either stay in past active (<em>students submitted</em>) or, if this is a standing procedure, recast both clauses in present. Do not mix."
          },
          "Changing every passive sentence on sight. The exam rewards the revision that restores a needed actor or removes a tense jump — not a blanket war on <em>was</em> and <em>were</em>.",
          [
            check(
              "Which revision is best for: <em>When the fire alarm rang, students file outside and wait on the lawn.</em>",
              [
                "When the fire alarm rang, students filed outside and waited on the lawn.",
                "When the fire alarm rings, students filed outside and wait on the lawn.",
                "When the fire alarm rang, students are filing outside and wait on the lawn.",
                "When the fire alarm had rang, students file outside and waited on the lawn."
              ],
              0,
              "The opener is past tense, so the rest of the scene should stay past. Mixing present and past, or using the nonstandard <em>had rang</em>, fails the consistency test."
            ),
            check(
              "A news brief says: <em>The stolen instruments were returned to the band room on Monday.</em> Which judgment is most accurate?",
              [
                "The passive is appropriate because the return, not the unidentified actor, is the news.",
                "The sentence is ungrammatical because all news writing must be active.",
                "The sentence is a fragment because it lacks a direct object.",
                "The writer must name the thief or the sentence is a run-on."
              ],
              0,
              "Passive voice is grammatical and useful when the receiver of the action is the focus and the actor is unknown. It is not a fragment or a run-on."
            )
          ]
        ),
        section(
          "Usage traps: agreement, pronouns, and modifiers",
          "Subjects must agree with verbs; pronouns must agree with antecedents in number and be in the correct case. A modifier must sit next to the word it actually describes.",
          "Timed items hide errors in <strong>interrupted subjects</strong> (a phrase between subject and verb), <strong>who/whom</strong> (subject vs. object case), and <strong>dangling or misplaced modifiers</strong>. Procedure: find the true subject, ignore the interrupting phrase, then check the nearest noun the modifier can attach to.",
          `<pre>Subject — (interrupting phrase) — verb
The box of calculators  is  missing.   (box = singular)

Who vs whom: replace with he/him
Who called?  → he called
Whom did you call? → you called him

Modifier: the word after the comma is what the opener describes
Opening the laptop, Jordan groaned.   (Jordan opens)
Opening the laptop, the screen froze. (illogical: the screen did not open it)</pre>`,
          {
            label: "interrupted subject-verb agreement",
            problem: "Which revision is best? <em>The stack of permission slips, along with the roster, were left on the counter.</em>",
            steps: [
              "<strong>Find the true subject:</strong> \"stack\" is singular. \"Of permission slips\" is a prepositional phrase; \"along with the roster\" is not a second subject.",
              "<strong>Match the verb:</strong> singular subject takes <em>was</em>, not <em>were</em>.",
              "<strong>Do not let nearby plurals bully the verb:</strong> NES distractors copy the nearest plural noun."
            ],
            answer: "Best revision: <em>The stack of permission slips, along with the roster, was left on the counter.</em>"
          },
          {
            label: "who vs whom in a clause",
            problem: "A recommendation letter: <em>Please contact the mentor who the intern shadowed in March.</em> Which revision is best?",
            steps: [
              "<strong>Isolate the clause:</strong> \"who/whom the intern shadowed.\"",
              "<strong>Replace:</strong> \"the intern shadowed him,\" not \"he.\" Object case is required.",
              "<strong>Choose whom:</strong> <em>Please contact the mentor whom the intern shadowed in March.</em>"
            ],
            answer: "Use <em>whom</em> because the pronoun is the object of <em>shadowed</em>."
          },
          {
            problem: "Revise: <em>Each of the seniors submitted their portfolio before the gallery opening, which was sitting in a cardboard box.</em>",
            hint: "Two problems may appear: number agreement with <em>each</em>, and a misplaced <em>which</em> that seems to modify the opening rather than the portfolio. Fix the attachment first."
          },
          "Choosing a verb that agrees with the nearest noun instead of the head noun, or treating <em>who</em> as always correct because it sounds polite. Case is grammar, not manners.",
          [
            check(
              "Which revision is best for: <em>Neither of the essays have a workable thesis.</em>",
              [
                "Neither of the essays has a workable thesis.",
                "Neither of the essays have workable theses.",
                "Neither of the essays were having a workable thesis.",
                "Neither of the essays are a workable thesis."
              ],
              0,
              "<em>Neither</em> is singular. Ignore the plural <em>essays</em> inside the prepositional phrase and use <em>has</em>."
            ),
            check(
              "Which sentence uses a modifier correctly?",
              [
                "Covered in glaze, the pottery sat on the drying rack.",
                "Covered in glaze, the drying rack held the pottery.",
                "Covered in glaze, we placed the pottery on the drying rack.",
                "Covered in glaze, placing the pottery on the drying rack."
              ],
              0,
              "The word right after the comma must be what is covered in glaze. Only the pottery fits. The <em>placing the pottery</em> version is also a fragment."
            )
          ]
        )
      ]
    },

    "lg-02": {
      title: "Mechanics: punctuation, spelling, capitalization",
      domain: "language",
      intro: `<p><strong>NES 301 competency 0009:</strong> Apply punctuation, spelling, and capitalization as meaning tools, not decoration. The exam asks which mark, capital, or spelling choice is correct in a classroom or student-draft context.</p>`,
      sections: [
        section(
          "Punctuation that changes meaning",
          "Commas separate, semicolons join equal independents, colons introduce, and apostrophes mark possession or contraction — not plurals.",
          "Choose the mark by the <strong>job</strong> it does. A comma after an introductory clause prevents misreading. A semicolon is a period that keeps two closely related independents in one sentence. A colon must follow a complete independent clause when it introduces a list or explanation. Apostrophes never make an ordinary plural.",
          `<table><tr><th>Mark</th><th>Job</th><th>Legal pattern</th></tr>
<tr><td>Comma</td><td>Introducer, series, FANBOYS join</td><td>After the opener; A, B, and C; clause, but clause</td></tr>
<tr><td>Semicolon</td><td>Join two independents</td><td>Clause; clause. Or clause; however, clause</td></tr>
<tr><td>Colon</td><td>Introduce after a complete clause</td><td>Clause: list or explanation</td></tr>
<tr><td>Apostrophe</td><td>Possession or contraction</td><td>student's essay; students' essays; it's = it is</td></tr></table>`,
          {
            label: "colon vs semicolon",
            problem: "Which revision is best? <em>The director posted three notes, bring black shoes, a water bottle, and a pencil.</em>",
            steps: [
              "<strong>Read the first group:</strong> \"The director posted three notes\" is an independent clause that sets up a list.",
              "<strong>A comma cannot introduce a list after a complete clause:</strong> that job belongs to a colon.",
              "<strong>Revise:</strong> <em>The director posted three notes: bring black shoes, a water bottle, and a pencil.</em>"
            ],
            answer: "Use a colon after the complete clause that announces the list."
          },
          {
            label: "its vs it's and possession",
            problem: "A caption reads: <em>The robot lost it's left treads during Friday's demo.</em> Which revision is best?",
            steps: [
              "<strong>Test it's:</strong> if you cannot substitute <em>it is</em>, the apostrophe is wrong. \"The robot lost it is left treads\" fails.",
              "<strong>Possessive its takes no apostrophe:</strong> like <em>his</em> and <em>hers</em>.",
              "<strong>Keep Friday's:</strong> that apostrophe correctly shows a singular possessive (the demo belonging to Friday)."
            ],
            answer: "Best revision: <em>The robot lost its left treads during Friday's demo.</em>"
          },
          {
            problem: "Choose marks: <em>After the pep rally the buses were late however the choir still reached the festival.</em>",
            hint: "Add a comma after the introductory phrase. Join the two independents with a semicolon before <em>however</em>, and a comma after it."
          },
          "Putting a colon after a verb or preposition (<em>The supplies we need are: tape, glue, and card stock</em>). A colon needs a complete clause before it. Also, never use an apostrophe to pluralize years or families (<em>the 1990s</em>, <em>the Garcias</em>).",
          [
            check(
              "Which revision is best for: <em>Bring the following, a pencil a calculator and the formula sheet.</em>",
              [
                "Bring the following: a pencil, a calculator, and the formula sheet.",
                "Bring the following; a pencil, a calculator, and the formula sheet.",
                "Bring the following a pencil, a calculator, and the formula sheet.",
                "Bring the following: a pencil a calculator, and the formula sheet."
              ],
              0,
              "A complete clause plus a list needs a colon, then commas between list items. A semicolon joins two independents; it does not introduce a list."
            ),
            check(
              "Which sentence is punctuated correctly?",
              [
                "The seniors' mural is finished; the freshmen's wall is still wet.",
                "The seniors mural is finished, the freshmen's wall is still wet.",
                "The senior's mural is finished; the freshmens' wall is still wet.",
                "The seniors' mural is finished, the freshmen's wall is still wet."
              ],
              0,
              "Plural possessives take apostrophe after the s. Two independent clauses need a semicolon or a comma+FANBOYS, not a comma splice. <em>Freshmen's</em> is the plural possessive of the irregular plural <em>freshmen</em>."
            )
          ]
        ),
        section(
          "Capitalization in titles, names, and quotations",
          "Capitalize the first word of a sentence, proper nouns, and main words in titles. Do not capitalize school subjects, seasons, or job titles used generically.",
          "The exam tests <strong>title-case vs. sentence-case</strong>, <strong>quoted sentences</strong> (the first word of a quoted sentence is capitalized), and <strong>false proper nouns</strong> (biology vs. Biology 201; the principal vs. Principal Chen). Procedure: ask whether the word names a unique person, place, course title, or organization.",
          `<table><tr><th>Capitalize</th><th>Do not capitalize</th></tr>
<tr><td>Principal Chen; English 10; the Sonoran Desert</td><td>the principal; an English class; the desert</td></tr>
<tr><td>Monday; October; Thanksgiving</td><td>spring; summer (unless part of a title)</td></tr>
<tr><td>\"The kiln is still hot,\" she warned.</td><td>She warned that \"the kiln is still hot.\" (quoted fragment)</td></tr>
<tr><td>Title: <em>How to Build a Solar Oven</em></td><td>Short function words in titles: a, an, the, of, to (unless first/last)</td></tr></table>`,
          {
            label: "course title vs. subject",
            problem: "Which revision is best? <em>In the Spring, Priya switched from Biology to algebra 2 with ms. ortiz.</em>",
            steps: [
              "<strong>Season:</strong> <em>spring</em> is not a proper noun here — lowercase.",
              "<strong>Subjects vs. course titles:</strong> generic <em>biology</em> and <em>Algebra 2</em> (official course name) differ. Capitalize the named course; lowercase the generic subject unless it is a language name like English.",
              "<strong>Name and title:</strong> <em>Ms. Ortiz</em> is a proper name with a courtesy title."
            ],
            answer: "Best: <em>In the spring, Priya switched from biology to Algebra 2 with Ms. Ortiz.</em>"
          },
          {
            label: "quotation capitals",
            problem: "Which version is correct? A) <em>The coach yelled, \"run the play again.\"</em> B) <em>The coach yelled that \"Run the play again.\"</em>",
            steps: [
              "<strong>Quoted full sentence after a comma + speech tag:</strong> capitalize the first word: <em>\"Run the play again.\"</em>",
              "<strong>Quoted fragment woven into the writer's sentence:</strong> do not capitalize unless a proper noun starts it.",
              "<strong>B is wrong twice:</strong> <em>that</em> plus a capitalized quoted command is a mismatch of structure and capital."
            ],
            answer: "Correct pattern: <em>The coach yelled, \"Run the play again.\"</em>"
          },
          {
            problem: "Fix capitals: <em>aunt nia from tucson taught earth science until she joined the peace corps in august.</em>",
            hint: "Capitalize names, place names, organization names, and months. Lowercase generic kinship terms used with a name? Actually <em>Aunt Nia</em> as a name-title is capitalized. Lowercase <em>earth science</em> as a generic subject."
          },
          "Capitalizing every important-sounding noun (<em>the Science Fair</em> when it is just a generic fair) or lowercasing a person's title when it is attached to a name. Attachment is the test: <em>Superintendent Reyes</em> vs. <em>the superintendent</em>.",
          [
            check(
              "Which sentence is capitalized correctly?",
              [
                "On Tuesday, Coach Diaz met the superintendent in the gym.",
                "On tuesday, coach Diaz met the Superintendent in the Gym.",
                "On Tuesday, Coach Diaz met the Superintendent in the gym.",
                "On Tuesday, coach Diaz met The superintendent in the gym."
              ],
              0,
              "Days and names with titles take capitals. Generic <em>superintendent</em> and <em>gym</em> do not. <em>Coach Diaz</em> is a title attached to a name."
            ),
            check(
              "Which revision is best for a works-cited title of a student article originally written as a sentence-style heading?",
              [
                "<em>Why the Cafeteria Line Needs Two Registers</em>",
                "<em>Why The Cafeteria Line Needs Two Registers</em>",
                "<em>why the cafeteria line needs two registers</em>",
                "<em>Why The Cafeteria Line Needs two Registers</em>"
              ],
              0,
              "Title case capitalizes main words and leaves short function words (<em>the</em>, <em>to</em>) lowercase unless they are first or last. <em>The</em> in the middle stays lowercase."
            )
          ]
        ),
        section(
          "Spelling patterns and commonly confused words",
          "English spelling is pattern-based more often than it looks: prefixes keep the base spelling; suffixes may drop silent e or double a final consonant. Homophones are meaning errors, not typing errors.",
          "Exam items mix <strong>rule-based misspellings</strong> (occurred, definitely, separate) with <strong>wrong-word homophones</strong> (their/there/they're; affect/effect; principal/principle). Procedure: substitute a test phrase. If <em>they are</em> fits, use <em>they're</em>. If you need a noun meaning \"result,\" use <em>effect</em>.",
          `<table><tr><th>Pair</th><th>Test</th></tr>
<tr><td>their / there / they're</td><td>possessive / location / they are</td></tr>
<tr><td>its / it's</td><td>possessive / it is</td></tr>
<tr><td>affect / effect</td><td>usually verb / usually noun</td></tr>
<tr><td>principal / principle</td><td>person or main / rule</td></tr>
<tr><td>then / than</td><td>time or next / comparison</td></tr>
<tr><td>accept / except</td><td>receive / excluding</td></tr></table>
<p>Doubling: stressed short vowel + one consonant before a vowel suffix → double (<em>occur → occurred</em>). Silent e: drop before a vowel suffix (<em>write → writing</em>) but keep before a consonant suffix (<em>definite → definitely</em> still trips people because the base is <em>definite</em>, not <em>definate</em>).</p>`,
          {
            label: "affect vs effect in a lab conclusion",
            problem: "Which word is correct? <em>Sleep loss had a clear _____ on reaction time, and caffeine did not _____ the results as much as students predicted.</em>",
            steps: [
              "<strong>First blank is a noun (\"a clear ___\"):</strong> use <em>effect</em> (result).",
              "<strong>Second blank is a verb (\"did not ___ the results\"):</strong> use <em>affect</em> (influence).",
              "<strong>Do not memorize \"affect is always a verb\":</strong> the article <em>a</em> before the first blank is the giveaway that you need the noun."
            ],
            answer: "<em>Sleep loss had a clear effect on reaction time, and caffeine did not affect the results as much as students predicted.</em>"
          },
          {
            label: "homophone cluster in a parent email",
            problem: "Which revision is best? <em>Their going to wait over their by the gym until they're coach arrives.</em>",
            steps: [
              "<strong>First:</strong> \"they are going\" → <em>They're</em>.",
              "<strong>Second:</strong> location → <em>there</em>.",
              "<strong>Third:</strong> possessive before <em>coach</em> → <em>their</em>."
            ],
            answer: "<em>They're going to wait over there by the gym until their coach arrives.</em>"
          },
          {
            problem: "Choose: <em>The principle announced that all seniors except Maya would except the late applications.</em>",
            hint: "Person in charge = <em>principal</em>. Receive = <em>accept</em>. Excluding = <em>except</em>. The sentence currently reverses both pairs."
          },
          "Trusting what \"looks long enough\" (<em>seperate</em>, <em>definately</em>) instead of a substitution test. Homophone errors survive spell-check because they are real words.",
          [
            check(
              "Which sentence uses the commonly confused words correctly?",
              [
                "The principal's new policy will affect passing time more than the old one did.",
                "The principle's new policy will effect passing time more then the old one did.",
                "The principal's new policy will effect passing time more than the old one did.",
                "The principle's new policy will affect passing time more then the old one did."
              ],
              0,
              "<em>Principal</em> is the person, <em>affect</em> is the verb, and <em>than</em> makes the comparison. <em>Then</em> is time, and <em>principle</em> is a rule."
            ),
            check(
              "Which revision is best for: <em>Its important that every team turn in it's roster.</em>",
              [
                "It's important that every team turn in its roster.",
                "Its important that every team turn in its roster.",
                "It's important that every team turn in it's roster.",
                "Its' important that every team turn in its' roster."
              ],
              0,
              "First blank = <em>it is</em> → <em>It's</em>. Second = possessive → <em>its</em>. <em>Its'</em> is never standard English."
            )
          ]
        )
      ]
    },

    "lg-03": {
      title: "Sentence combining, parallelism, and coherence",
      domain: "language",
      intro: `<p><strong>NES 301 competencies 0009 and 0010:</strong> Combine choppy sentences without creating run-ons, keep lists and comparisons in parallel form, and make paragraphs cohere through transitions, clear pronoun reference, and logical order.</p>`,
      sections: [
        section(
          "Combining sentences without new errors",
          "You already can spot fragments and run-ons. Combining is the constructive version of that skill: pack related ideas into compound, complex, or compound-complex sentences.",
          "Choppy primer-style sentences waste the reader's working memory. Combine when ideas share a logical relation (cause, contrast, time, addition). Do not combine unrelated ideas just to make a longer sentence. Prefer a subordinate clause or a precise coordinator over a vague <em>and then</em>.",
          `<table><tr><th>Relation</th><th>Legal combiner</th></tr>
<tr><td>Contrast</td><td>but, yet, although, whereas</td></tr>
<tr><td>Cause / result</td><td>because, since, so, therefore (with a semicolon)</td></tr>
<tr><td>Time</td><td>after, before, when, while</td></tr>
<tr><td>Addition of equals</td><td>and; semicolon; not only...but also (keep parallel)</td></tr></table>`,
          {
            label: "subordination beats a string of ands",
            problem: "Choppy draft: <em>The printer jammed. The staff was waiting. They missed the bus.</em> Which combination is best?",
            steps: [
              "<strong>Name the logic:</strong> jam caused delay, which caused a missed bus — cause then result, not three equal events.",
              "<strong>Reject the and-and string:</strong> <em>The printer jammed and the staff was waiting and they missed the bus</em> is grammatical but incoherent.",
              "<strong>Subordinate the cause:</strong> <em>Because the printer jammed while the staff was waiting, they missed the bus.</em>"
            ],
            answer: "Best combining shows cause and overlap in time, not three stacked independents."
          },
          {
            label: "do not create a comma splice while combining",
            problem: "A student combines: <em>The solo was ready, the pianist was not.</em> What went wrong, and what is the best fix?",
            steps: [
              "<strong>The ideas are related by contrast,</strong> so combining is the right instinct.",
              "<strong>The join is illegal:</strong> two independents and only a comma = comma splice.",
              "<strong>Use contrast legally:</strong> <em>The solo was ready, but the pianist was not</em> or <em>Although the solo was ready, the pianist was not.</em>"
            ],
            answer: "Combine with <em>but</em> or <em>although</em>; do not \"combine\" with a lone comma."
          },
          {
            problem: "Combine without a run-on: <em>Ms. Hale dimmed the lights. Students opened their notebooks. She started the documentary.</em>",
            hint: "Time sequence can use <em>After</em> or <em>When</em> for the first two actions, then the independent clause for the last."
          },
          "Thinking any longer sentence is more mature. The exam's best combination is the one that encodes the real relationship and remains grammatical — often a complex sentence, not a five-clause pileup.",
          [
            check(
              "Which revision best combines: <em>The clay was still wet. Lila carved her initials. The letters sank.</em>",
              [
                "Because the clay was still wet, Lila's carved initials sank.",
                "The clay was still wet, Lila carved her initials, the letters sank.",
                "The clay was still wet and Lila carved her initials and the letters sank.",
                "The clay was still wet; Lila carved her initials the letters sank."
              ],
              0,
              "Cause-effect subordination is precise and grammatical. The comma-only version is a comma-splice chain; the and-and version is a floppy and-string; the semicolon version fuses the last two clauses."
            ),
            check(
              "A writer wants to combine two equal, closely related independents. Which pattern is best?",
              [
                "The lights failed; the backup generator started within ten seconds.",
                "The lights failed, the backup generator started within ten seconds.",
                "The lights failed: the backup generator started within ten seconds.",
                "The lights failed the backup generator started within ten seconds."
              ],
              0,
              "A semicolon joins two independents. A comma splice, a colon (which should introduce, not merely join equals), and a fused sentence all fail."
            )
          ]
        ),
        section(
          "Parallelism in lists, comparisons, and correlatives",
          "Items that share a grammatical job should share a grammatical form: all nouns, all -ing phrases, all clauses — not a mix.",
          "Parallelism is a fairness rule for syntax. If the sentence says <em>The club wants X, Y, and Z</em>, X, Y, and Z must be the same kind of thing. Correlative pairs (<em>both...and</em>, <em>either...or</em>, <em>not only...but also</em>, <em>neither...nor</em>) must be followed by matching structures. Comparisons with <em>than</em> must compare like things.",
          `<pre>NOT: The intern filed reports, answering calls, and to schedule tours.
YES: The intern filed reports, answered calls, and scheduled tours.

NOT: She wanted not only a refund but also wanted an apology.
YES: She wanted not only a refund but also an apology.

NOT: His essay is stronger than Maya.
YES: His essay is stronger than Maya's (essay).</pre>`,
          {
            label: "list parallelism in a purpose statement",
            problem: "Which revision is best? <em>The service project will collect coats, to repair backpacks, and handing out bus passes.</em>",
            steps: [
              "<strong>List the three items:</strong> collect coats (verb phrase), to repair (infinitive), handing out (gerund) — three different forms.",
              "<strong>Pick one form and stick to it:</strong> three verb phrases after <em>will</em> is cleanest.",
              "<strong>Revise:</strong> <em>The service project will collect coats, repair backpacks, and hand out bus passes.</em>"
            ],
            answer: "Match verb forms after the shared helping verb <em>will</em>."
          },
          {
            label: "faulty comparison",
            problem: "Which revision is best? <em>Westfield's debate team is more prepared than Riverview.</em>",
            steps: [
              "<strong>Name what is being compared:</strong> a team vs. a school — unlike things.",
              "<strong>Complete the comparison:</strong> team vs. team, or add the possessive.",
              "<strong>Best:</strong> <em>Westfield's debate team is more prepared than Riverview's.</em>"
            ],
            answer: "Compare team with team, not team with school."
          },
          {
            problem: "Fix: <em>The workshop asked students not only to outline but also they should draft a paragraph.</em>",
            hint: "After <em>not only</em> you have an infinitive. Match it after <em>but also</em>: <em>not only to outline but also to draft a paragraph</em>."
          },
          "Matching the first two list items and then letting the third wander. The exam often hides the broken item at the end. Also, do not \"fix\" parallelism by making every item a full sentence if the prompt wants a concise list.",
          [
            check(
              "Which revision is best for: <em>Ms. Calderon values curiosity, to revise carefully, and students who listen.</em>",
              [
                "Ms. Calderon values curiosity, careful revision, and attentive listening.",
                "Ms. Calderon values curiosity, to revise carefully, and listening.",
                "Ms. Calderon values being curious, revise carefully, and students who listen.",
                "Ms. Calderon values curiosity, revising, and who listen."
              ],
              0,
              "Three nouns (or noun phrases) make a parallel list. Mixing a noun, an infinitive, and a clause is the original error."
            ),
            check(
              "Which sentence is parallel?",
              [
                "The intern will either file the negatives or scan the contact sheets.",
                "The intern will either file the negatives or scanning the contact sheets.",
                "The intern will either to file the negatives or scan the contact sheets.",
                "The intern will either file the negatives or she scans the contact sheets."
              ],
              0,
              "<em>Either...or</em> must be followed by matching verb phrases. Mixing a verb with a gerund, an infinitive, or a new clause breaks the pair."
            )
          ]
        ),
        section(
          "Coherence: transitions, reference, and order",
          "A paragraph coheres when each sentence has a reason to follow the one before it. Transitions, consistent pronouns, and a visible order (time, importance, cause) do that work.",
          "Incoherence on the exam usually comes from a <strong>vague pronoun</strong> (<em>this</em>, <em>it</em>, <em>they</em> with two possible antecedents), a <strong>wrong-relation transition</strong> (<em>however</em> where the logic is addition), or <strong>scrambled order</strong> (a conclusion sentence parked in the middle). Procedure: track what each pronoun points to, then name the logical relation before picking a transition.",
          `<table><tr><th>Relation</th><th>Typical transitions</th></tr>
<tr><td>Addition</td><td>also, furthermore, in addition</td></tr>
<tr><td>Contrast</td><td>however, instead, on the other hand</td></tr>
<tr><td>Cause / result</td><td>therefore, consequently, as a result</td></tr>
<tr><td>Example</td><td>for example, specifically, for instance</td></tr>
<tr><td>Time / sequence</td><td>first, next, later, finally</td></tr></table>`,
          {
            label: "wrong-relation transition",
            problem: "Draft: <em>The kiln reached 1800°F. However, the glaze matured exactly as planned.</em> Which revision is best?",
            steps: [
              "<strong>Name the real relation:</strong> reaching temperature allowed the glaze to mature — result, not contrast.",
              "<strong>However signals opposition</strong> that is not in the content.",
              "<strong>Replace with a result marker:</strong> <em>The kiln reached 1800°F; therefore, the glaze matured exactly as planned.</em>"
            ],
            answer: "Swap <em>however</em> for a result transition; do not keep a contrast word out of habit."
          },
          {
            label: "ambiguous pronoun",
            problem: "Which revision is best? <em>After Jordan handed Mateo the flash drive, he realized it was blank.</em>",
            steps: [
              "<strong>Who is he?</strong> Jordan or Mateo — two masculine antecedents.",
              "<strong>What is it?</strong> Probably the drive, but the exam still prefers a named actor.",
              "<strong>Name the person:</strong> <em>After Jordan handed Mateo the flash drive, Mateo realized the drive was blank.</em> (or Jordan, if that is the intended meaning — the key is disambiguation)."
            ],
            answer: "Replace the ambiguous <em>he</em> with a name. Coherence beats pronoun economy."
          },
          {
            problem: "A paragraph lists a problem, then a statistic, then restates the problem, then gives a solution in sentence 2. What should the writer do first?",
            hint: "Reorder before adding transitions. Transitions cannot rescue a scrambled sequence."
          },
          "Sprinkling fancy transitions (<em>moreover</em>, <em>nevertheless</em>) onto a paragraph that already has unclear pronouns. A transition cannot glue two sentences whose nouns do not connect.",
          [
            check(
              "Which transition best fills the blank? <em>The cafeteria compost bin filled by fourth period. _____, custodial staff had to empty it before lunch.</em>",
              [
                "Therefore",
                "However",
                "For example",
                "Meanwhile in contrast"
              ],
              0,
              "A full bin causing an extra emptying is result, so <em>therefore</em> fits. <em>However</em> and contrast phrases invent opposition that is not there."
            ),
            check(
              "Which revision best improves coherence? <em>The sculpture fell. This made them upset, and it was glued.</em>",
              [
                "When the sculpture fell, the art students were upset, so they glued the break.",
                "The sculpture fell; however, this made them upset, and it was glued.",
                "The sculpture fell, this made them upset, and it was glued.",
                "Falling, this made them upset, and it was glued."
              ],
              0,
              "Name the people and the actions, and show cause. Adding <em>however</em>, creating a comma splice, or dangling <em>this</em> does not clarify who did what."
            )
          ]
        )
      ]
    },

    "lg-04": {
      title: "Introductions, body development, and conclusions",
      domain: "language",
      intro: `<p><strong>NES 301 competency 0009:</strong> Recognize and produce the architecture of an effective composition: a hook and a clear thesis, body paragraphs with topic sentences plus emphasis and contrast, and a conclusion that resolves or calls to action rather than repeating the introduction word for word.</p>`,
      sections: [
        section(
          "Hooks and thesis statements",
          "A thesis is the essay's controlling claim, not the topic. A hook earns the next sentence; it does not replace the thesis.",
          "An introduction typically moves from <strong>hook</strong> (brief interest) to <strong>context</strong> (what the issue is) to <strong>thesis</strong> (the specific claim the body must prove). Weak theses announce a topic (<em>This paper is about school start times</em>) or split into an unmanageable list. Strong theses are arguable, limited, and preview the line of reasoning without writing the whole essay.",
          `<pre>Hook  →  needed context  →  thesis (claim + limitation)

WEAK: I will discuss cafeteria food.
WEAK: Cafeteria food is bad and also buses and homework.
STRONG: Shortening the lunch period to 20 minutes has increased
        wasted food because students do not have time to eat what they take.</pre>`,
          {
            label: "topic announcement vs. thesis",
            problem: "A student opener ends: <em>In this essay I will talk about later school start times.</em> Which revision is the strongest thesis?",
            steps: [
              "<strong>Reject the announcement:</strong> \"I will talk about\" names a topic, not a claim.",
              "<strong>Limit the subject:</strong> \"later start times\" is still huge — later for whom, measured how?",
              "<strong>Make a defensible claim:</strong> <em>Starting Westfield High at 8:30 rather than 7:15 would reduce first-period tardies without shortening instructional minutes.</em>"
            ],
            answer: "The best thesis is arguable, local, and measurable — not a promise to \"discuss.\""
          },
          {
            label: "hook that steals the conclusion",
            problem: "An introduction begins with a three-paragraph anecdote about a bus breakdown and never states a thesis until page two. What is the exam diagnosis?",
            steps: [
              "<strong>A hook should be short</strong> relative to the essay — a sentence or two, not a buried lede.",
              "<strong>Readers need a thesis early</strong> so body paragraphs have a job.",
              "<strong>Trim the anecdote and land the claim in paragraph 1.</strong> Color is useful; delay is not."
            ],
            answer: "Cut the hook down and place a clear thesis at the end of the introduction."
          },
          {
            problem: "Improve: <em>Uniforms. Many people have opinions. This paper looks at both sides.</em>",
            hint: "Replace the one-word fragment hook and the \"both sides\" non-thesis with a limited claim (who, where, what policy, what effect)."
          },
          "Confusing a dramatic first sentence with a thesis, or writing a three-part list thesis so rigid that the body cannot develop emphasis. The thesis must be a sentence the rest of the essay can actually support.",
          [
            check(
              "Which thesis is strongest for a 600-word editorial about the school library?",
              [
                "Keeping the library open during both lunches would give more students access to computers without adding staff hours.",
                "Libraries are important in society today.",
                "This essay will discuss libraries, computers, and lunch.",
                "The library is a place where students go."
              ],
              0,
              "The first claim is limited, arguable, and sets up body evidence. The others are topic announcements, three-topic sprawl, or mere definition."
            ),
            check(
              "A student starts an essay with a dictionary definition of <em>responsibility</em>. Why is this usually a weak hook?",
              [
                "It delays a specific claim and tells readers almost nothing they could not already guess.",
                "Definitions are never allowed in academic writing.",
                "Hooks must always be questions.",
                "The dictionary is not a credible source for any purpose."
              ],
              0,
              "Generic definitions waste the introduction. Hooks can be questions, anecdotes, or surprising facts — but they must lead to a thesis, not replace one."
            )
          ]
        ),
        section(
          "Topic sentences, emphasis, and contrast in the body",
          "Each body paragraph needs a topic sentence that supports the thesis, then development (examples, explanation), not a new thesis.",
          "A <strong>topic sentence</strong> names the paragraph's one job. <strong>Emphasis</strong> means the most important evidence or reason gets the most space or the end-of-paragraph power position. <strong>Contrast</strong> (however, unlike, on the other hand) clarifies a claim by showing what it is not. Dumping three unrelated examples in equal sentences is development without emphasis.",
          `<pre>Topic sentence (supports thesis)
  ↓ specific evidence
  ↓ explanation of how the evidence proves the topic sentence
  ↓ optional contrast or emphasis closer

NOT a body paragraph: a new thesis, a plot summary, or a list of quotes with no commentary.</pre>`,
          {
            label: "topic sentence that wanders from the thesis",
            problem: "Thesis: later start times would cut tardies. Body opener: <em>Teenagers also need more vegetables.</em> What should the writer do?",
            steps: [
              "<strong>Test alignment:</strong> vegetables do not support a tardy claim.",
              "<strong>This is not \"development\"; it is a new essay.</strong>",
              "<strong>Replace with a tardy-related topic sentence:</strong> <em>First-period attendance logs from last October already show a spike in tardies before 8:00 a.m.</em>"
            ],
            answer: "Every topic sentence must be a reason or evidence-chunk for the stated thesis."
          },
          {
            label: "emphasis by position and space",
            problem: "A paragraph gives equal sentences to a joke a student made, a rumor, and a district attendance table. Which organizational revision is best?",
            steps: [
              "<strong>Rank support:</strong> the table is the strongest evidence; the joke is at best a hook, not proof.",
              "<strong>Cut or demote weak material</strong> and expand the table: what it shows, over what period, compared with what.",
              "<strong>End on the table's implication</strong> so emphasis falls on the best evidence."
            ],
            answer: "Give the strongest evidence the most space and the closing slot; do not treat all sentences as equal."
          },
          {
            problem: "A paragraph argues that the late bus causes missed tutoring, then spends six sentences describing the bus color. Fix the emphasis.",
            hint: "Keep one concrete detail if it helps readers see the scene; convert the rest of the space to missed-session counts or counselor testimony."
          },
          "Starting every body paragraph with \"Also\" plus a fact, with no topic sentence. A fact is not a topic sentence unless the writer states what the fact is there to prove.",
          [
            check(
              "Thesis: the school should restore a full-length passing period. Which is the best topic sentence?",
              [
                "Students who must cross campus for band already arrive after the bell, which is an attendance problem, not a motivation problem.",
                "Passing periods exist in many schools.",
                "I hate being late.",
                "In conclusion, bells are loud."
              ],
              0,
              "The first sentence makes a specific, thesis-serving claim the paragraph can prove. The others are background, venting, or a misplaced conclusion."
            ),
            check(
              "Which sentence best uses contrast to sharpen a body paragraph about silent-reading time?",
              [
                "Unlike study hall, which students use to finish homework, silent-reading time is protected for books students choose themselves.",
                "Silent reading is good, however homework is good too, and sports are also good.",
                "However, reading.",
                "On the other hand, the school has lockers."
              ],
              0,
              "Useful contrast distinguishes two similar-looking periods. Random <em>however</em> sentences do not create emphasis."
            )
          ]
        ),
        section(
          "Conclusions: resolution versus call to action",
          "A conclusion should not copy the introduction. It should resolve the thinking (so what?) or, in persuasive pieces, call for a specific next step.",
          "Match the ending to the purpose. <strong>Expository</strong> conclusions synthesize (what the evidence adds up to) without announcing \"In conclusion.\" <strong>Persuasive</strong> conclusions often add a <strong>call to action</strong> that is doable for the actual audience (the school board, not \"everyone in the world\"). Avoid the new-topic dump and the moralizing bumper sticker.",
          `<table><tr><th>Purpose</th><th>Ending job</th><th>Weak version</th></tr>
<tr><td>Explain</td><td>Resolution: the insight the body earned</td><td>Repeating the thesis verbatim</td></tr>
<tr><td>Persuade</td><td>Call to action: who should do what by when</td><td>\"People should care more\"</td></tr>
<tr><td>Narrate</td><td>Reflection or image that lands the meaning</td><td>\"Then I woke up\"</td></tr></table>`,
          {
            label: "echo vs. resolution",
            problem: "Introduction thesis: composting in the cafeteria would cut trash-bag costs. Conclusion: <em>In conclusion, composting in the cafeteria would cut trash-bag costs.</em> Which revision is best?",
            steps: [
              "<strong>The echo adds no new thinking</strong> — it only labels itself \"in conclusion.\"",
              "<strong>Resolution uses the body's specifics:</strong> bags saved, cost, student jobs.",
              "<strong>Better:</strong> <em>A two-bin trial during one lunch period would show whether the projected savings appear before the district buys another year of extra liners.</em>"
            ],
            answer: "End with a synthesis or next-step that the body made possible, not a relabeled thesis."
          },
          {
            label: "call to action scaled to audience",
            problem: "A letter to the principal ends: <em>The world must end hunger now.</em> Why is this the wrong call to action?",
            steps: [
              "<strong>Audience:</strong> a principal cannot end world hunger.",
              "<strong>The body</strong> (if it was about leftover cafeteria fruit) never earned a global demand.",
              "<strong>Scale the ask:</strong> <em>Please approve a Friday leftover-fruit cart at the late bus line for the rest of the semester.</em>"
            ],
            answer: "A call to action must be something the named audience can actually do."
          },
          {
            problem: "A narrative about failing a driving test ends by listing new statistics about national accident rates. What is wrong?",
            hint: "The ending switched modes. Resolve the story's meaning (what the failure taught) instead of dumping unmatched expository data."
          },
          "Starting the conclusion with \"In conclusion\" and then either repeating the hook or introducing a brand-new argument the body never supported. If it is new and important, it belonged in the body.",
          [
            check(
              "Which conclusion best fits an explanatory essay on how the school's rain garden works?",
              [
                "Taken together, the gravel layer, native plants, and overflow pipe show why the courtyard no longer floods after spring storms.",
                "In conclusion, rain gardens are a thing I discussed.",
                "Everyone should hug a tree today.",
                "The real issue, which I did not mention earlier, is cafeteria pizza."
              ],
              0,
              "Resolution synthesizes the body's parts. Repetition, an unrelated call to action, and a new topic all fail the ending test."
            ),
            check(
              "A persuasive speech to the PTA argues for a later start time. Which ending is the best call to action?",
              [
                "Please vote next Tuesday to support the 8:15 start in the survey the district already emailed.",
                "Society must value sleep.",
                "In conclusion, start times.",
                "I will now repeat my three body paragraphs."
              ],
              0,
              "The best call to action is specific, timed, and aimed at the people in the room. Vague moralizing and mere repetition are not actions."
            )
          ]
        )
      ]
    },

    "lg-05": {
      title: "The writing process: generate through proofread",
      domain: "language",
      intro: `<p><strong>NES 301 competency 0010:</strong> Match form to purpose and audience, then move through generate, organize, draft, revise (especially wordiness), edit (sentence variety, parallelism, transitions), and proofread. The exam tests which stage a writer is in and which move belongs there.</p>`,
      sections: [
        section(
          "Form, purpose, audience; generate and organize",
          "Purpose is the job (narrate, explain, persuade, analyze). Audience is who must be able to act or understand. Form is the container (email, editorial, lab report, speech).",
          "Choose form <strong>after</strong> purpose and audience, not before. Generating (brainstorming, listing, freewriting, talking) should be messy on purpose. Organizing is the first ruthless cut: group ideas, drop what does not serve the purpose, and pick a pattern (time, importance, cause, problem-solution) before drafting full sentences.",
          `<pre>Purpose + audience → form
  explain to new lab partners → numbered procedure
  persuade the school board → one-page memo with a recommendation
  narrate a personal turning point → scene, not a report

Generate (quantity) → Organize (groups + order) → Draft (sentences)</pre>`,
          {
            label: "wrong form for the audience",
            problem: "A student wants the cafeteria manager to add a nut-free table. She writes a five-page personal memoir about her cousin. Which process move is best?",
            steps: [
              "<strong>Purpose:</strong> persuade a manager to change a procedure.",
              "<strong>Audience:</strong> a busy staff member who needs a request, a reason, and a feasible action.",
              "<strong>Change form:</strong> a short proposal or email with the request up front, not a memoir. Generating the cousin story was fine; organizing should have cut it or reduced it to one sentence of context."
            ],
            answer: "Match form to purpose and audience; save the long narrative for a different assignment."
          },
          {
            label: "organize before drafting",
            problem: "Mateo's notes mix bus times, a joke about gum, a statistic, and a thesis about late buses. He starts writing paragraph 1 with the joke. What should he do instead?",
            steps: [
              "<strong>He is still generating</strong> if everything is still in one pile.",
              "<strong>Organize:</strong> cluster evidence under reasons; park the joke as a possible hook, not as body proof.",
              "<strong>Then draft</strong> from the outline so the thesis, not the first idea he remembered, runs the essay."
            ],
            answer: "Group and rank notes before writing full paragraphs."
          },
          {
            problem: "Purpose: explain to ninth graders how to request a schedule change. Which form fits best: a sonnet, a numbered how-to with office hours, or a fiery editorial?",
            hint: "The audience needs steps they can follow. Choose the how-to."
          },
          "Drafting from the first idea on the page because it feels like progress. Generating is supposed to overproduce; organizing is supposed to throw most of it away.",
          [
            check(
              "A writer must tell working parents how to opt a child out of a field trip. Which form best matches purpose and audience?",
              [
                "A one-page notice with the deadline, the form's location, and a contact name",
                "A narrative about the writer's own field-trip memories",
                "A rhymed cheer",
                "A literary analysis of a novel that mentions travel"
              ],
              0,
              "Functional form follows purpose: parents need instructions, not a story or a poem."
            ),
            check(
              "During which stage should a writer discard a vivid anecdote that does not support the thesis?",
              [
                "Organizing (or early revision), because generating is for quantity and organizing is for fit",
                "Proofreading, because anecdotes are spelling issues",
                "Never; every generated idea must appear in the draft",
                "Only after publication"
              ],
              0,
              "Fit is an organizing and revising job. Proofreading catches conventions, not relevance."
            )
          ]
        ),
        section(
          "Drafting and revising for wordiness and focus",
          "A draft turns the outline into sentences. Revision changes meaning, structure, and focus — including cutting wordiness — and is not the same as fixing commas.",
          "Wordiness hides claims: empty openers (<em>It is important to note that</em>), doubled words (<em>each and every</em>), and throat-clearing. Revision asks: Does this sentence earn its place? Can two sentences become one without a run-on? Is this paragraph still about the topic sentence? Do not proofread until the bones are right, or you will polish sentences you should delete.",
          `<table><tr><th>Wordy</th><th>Lean</th></tr>
<tr><td>Due to the fact that the bell rang</td><td>Because the bell rang</td></tr>
<tr><td>In order to start</td><td>To start</td></tr>
<tr><td>There are many students who wait</td><td>Many students wait</td></tr>
<tr><td>absolutely essential; past history</td><td>essential; history</td></tr></table>`,
          {
            label: "cut the empty opener",
            problem: "Which revision is best? <em>It is important to note that the fact of the matter is that the kiln was unplugged.</em>",
            steps: [
              "<strong>Circle delay words:</strong> \"It is important to note,\" \"the fact of the matter is that.\"",
              "<strong>Keep the news:</strong> the kiln was unplugged.",
              "<strong>Revise:</strong> <em>The kiln was unplugged.</em>"
            ],
            answer: "Revision for wordiness deletes throat-clearing and leaves the claim."
          },
          {
            label: "revision vs. editing",
            problem: "A draft's second paragraph argues a new thesis. A peer writes \"add a comma\" in the margin. What is the higher-priority move?",
            steps: [
              "<strong>A new thesis in paragraph 2 is a focus problem</strong> — revision, not mechanics.",
              "<strong>Fixing the comma first</strong> polishes a paragraph that may be cut or moved.",
              "<strong>Revise structure first:</strong> merge, move, or rewrite the paragraph so it supports the real thesis, then edit."
            ],
            answer: "Revise focus before editing punctuation."
          },
          {
            problem: "Tighten: <em>At this point in time, students are in the process of being in need of more time.</em>",
            hint: "Drop <em>at this point in time</em> and <em>in the process of being</em>. Try: <em>Students need more time.</em>"
          },
          "Calling every change \"revision.\" Swapping <em>happy</em> for <em>glad</em> is diction editing. Cutting a page, changing the thesis, or reordering reasons is revision.",
          [
            check(
              "Which revision best cuts wordiness without changing meaning? <em>There were several students who were waiting in a line in order to sign up.</em>",
              [
                "Several students waited in line to sign up.",
                "There were several students who were waiting.",
                "Several students were in the process of waiting in a line in order that they might sign up.",
                "Students. Line. Sign up."
              ],
              0,
              "The lean sentence keeps every necessary idea. Fragments and extra process-language are not improvements."
            ),
            check(
              "A teacher says, \"Your third page repeats page one in different words.\" Which stage is this feedback aimed at?",
              [
                "Revision for focus and redundancy",
                "Proofreading for capital letters",
                "Generating more unrelated ideas",
                "Choosing a new audience at random"
              ],
              0,
              "Repeating the same content is a revision problem. Proofreading would not find it."
            )
          ]
        ),
        section(
          "Editing sentence craft, then proofreading",
          "Editing improves sentences that will stay: variety, parallelism, transitions. Proofreading is the last pass for spelling, punctuation, capitalization, and typos.",
          "After structure is stable, edit for <strong>sentence variety</strong> (not all subject-verb-object; mix in a complex sentence), <strong>parallelism</strong>, and <strong>transitions</strong> that match logic. Then proofread slowly — preferably from the last sentence backward or aloud — because the brain autocorrects familiar errors. Do not proofread a draft you still intend to cut in half.",
          `<pre>Process order (exam loves this):
1 Generate  2 Organize  3 Draft
4 Revise (ideas, order, wordiness, focus)
5 Edit (variety, parallelism, transitions)
6 Proofread (mechanics)

A spell-checker is a helper, not a proofreader: it misses homophones.</pre>`,
          {
            label: "edit for variety, not random complexity",
            problem: "A paragraph is six sentences of <em>The club did X. The club did Y.</em> Which editing move is best?",
            steps: [
              "<strong>Keep the content</strong> if revision already approved it.",
              "<strong>Combine two related sentences</strong> with a because/when/although clause, and start one sentence with a prepositional phrase.",
              "<strong>Do not combine all six into one sentence</strong> — that creates a run-on, not variety."
            ],
            answer: "Mix sentence openings and lengths; do not manufacture one giant sentence."
          },
          {
            label: "proofread last, and for the right errors",
            problem: "A polished editorial still says <em>The school should except all late forms</em> and <em>its time to vote</em>. What did the writer skip?",
            steps: [
              "<strong>These are homophone and apostrophe errors</strong> — proofreading territory.",
              "<strong>A thesaurus pass would not catch them.</strong>",
              "<strong>Read aloud and run the substitution tests:</strong> except vs. accept; it's vs. its."
            ],
            answer: "Proofread specifically for homophones and apostrophes after editing style."
          },
          {
            problem: "A student proofreads while still generating ideas and then wonders why new typos appear. Diagnose the process error.",
            hint: "Proofreading too early. New sentences created during generating/drafting were never checked. Finish revise/edit, then proofread the stable text."
          },
          "Using a thesaurus during proofreading and accidentally changing meaning (<em>the principal was taut</em>). Proofreading preserves meaning; it does not restyle.",
          [
            check(
              "Which task belongs to editing rather than proofreading?",
              [
                "Rewriting a string of identical simple sentences so two of them become a complex sentence with a clear transition",
                "Fixing <em>teh</em> to <em>the</em>",
                "Capitalizing October",
                "Adding a missing period at the end of the last line"
              ],
              0,
              "Sentence variety and transitions are editing. Typos, capitals, and end marks are proofreading."
            ),
            check(
              "A writer has a strong thesis, tight paragraphs, and varied sentences, but the draft still contains <em>occurred</em> misspelled as <em>occured</em> and a missing apostrophe in <em>students essays</em>. What is the best next step?",
              [
                "Proofread conventions; do not reopen generating",
                "Delete the thesis and brainstorm again",
                "Change the audience to kindergarteners",
                "Add however to every sentence"
              ],
              0,
              "When ideas and sentence craft are done, the last job is proofreading remaining mechanical errors."
            )
          ]
        )
      ]
    },

    "lg-06": {
      title: "Research: questions, sources, paraphrase, citation",
      domain: "language",
      intro: `<p><strong>NES 301 competency 0011:</strong> Refine a topic into an open-ended research question, locate and evaluate sources, organize notes, choose paraphrase versus quotation versus summary, and cite to avoid plagiarism. The exam favorite is \"which research question is strongest.\"</p>`,
      sections: [
        section(
          "Refining topics into open-ended questions",
          "A topic is a noun phrase. A research question is a genuine inquiry the paper can answer with evidence. Closed yes/no questions and unresearchable moral demands make weak papers.",
          "Start broad, then limit by time, place, population, and measurable angle. Strong questions are <strong>open-ended</strong> (how, why, to what extent), <strong>answerable with sources</strong>, and <strong>narrow enough</strong> for the assignment length. \"Is social media bad?\" is a trap: it is yes/no, huge, and undefined.",
          `<table><tr><th>Weak</th><th>Why</th><th>Stronger</th></tr>
<tr><td>Recycling</td><td>Topic, not a question</td><td>—</td></tr>
<tr><td>Is recycling good?</td><td>Yes/no, undefined \"good\"</td><td>How have contamination rates changed in three Arizona cities since single-stream recycling began?</td></tr>
<tr><td>Why is everything unfair?</td><td>Unresearchable</td><td>How did last year's dress-code changes affect disciplinary referrals for ninth-grade girls at one high school?</td></tr></table>`,
          {
            label: "yes/no vs. open-ended",
            problem: "Which research question is strongest for a six-page paper?",
            steps: [
              "<strong>Reject yes/no:</strong> \"Should students have homework?\" invites a rant, not an investigation.",
              "<strong>Reject the universe:</strong> \"How does education work?\" cannot be answered in six pages.",
              "<strong>Prefer limited how/why:</strong> \"How did Westfield High's 2024 homework-capping policy change average weekday sleep reported by tenth graders?\""
            ],
            answer: "The strongest question is open-ended, local, and measurable."
          },
          {
            label: "refine a sprawling topic",
            problem: "A student picks \"climate.\" Walk the refinement.",
            steps: [
              "<strong>Add a human-scale angle:</strong> school energy use, not the entire atmosphere.",
              "<strong>Add place and time:</strong> this campus, last three years.",
              "<strong>Turn into a question:</strong> \"To what extent did the new classroom thermostat policy reduce after-hours HVAC use in the science wing from 2023 to 2025?\""
            ],
            answer: "Each limiter (place, time, measurable outcome) turns a slogan into a researchable question."
          },
          {
            problem: "Rank: (1) What is a cell? (2) Are phones bad? (3) How did the district's phone-off policy change office referrals in March compared with February?",
            hint: "(1) is a definition, too basic for research. (2) is yes/no and vague. (3) is strongest."
          },
          "Choosing a question you already have a bumper-sticker answer for. If no source could change your mind, you are writing a sermon, not research.",
          [
            check(
              "Which research question is strongest?",
              [
                "How did the late-bus pilot in spring 2025 affect attendance at after-school tutoring for ninth graders?",
                "Is transportation good or bad?",
                "Why are buses?",
                "Should society improve everything about schools?"
              ],
              0,
              "The first question is open-ended, bounded by program, time, and population. The others are vague, incomplete, or unresearchable."
            ),
            check(
              "A student changes \"Is the rain garden successful?\" to \"How many gallons of runoff did the courtyard rain garden divert during the three heaviest 2025 storms, compared with 2022 logs?\" What did the revision improve?",
              [
                "It replaced a yes/no judgment with a measurable, open-ended comparison.",
                "It made the topic broader so more sources would fit.",
                "It removed the need for any data.",
                "It turned research into a personal narrative."
              ],
              0,
              "Stronger questions specify how success will be measured. Broader is not better."
            )
          ]
        ),
        section(
          "Sources, credibility, and organized notes",
          "Sources must be locatable and evaluable. Credibility is about authority, evidence, purpose, and currency — not about whether you agree.",
          "Locate sources on purpose (library databases, official reports, interviews with named experts), not by clicking the first result. Test credibility: Who wrote this, with what expertise? What evidence is shown? Who paid for it? How current is it for this question? Organize notes by <strong>subquestion or claim</strong>, always with a source tag, so you never have a brilliant fact you cannot cite.",
          `<table><tr><th>More credible for school research</th><th>Handle with care</th></tr>
<tr><td>Peer-reviewed study; government data; named expert</td><td>Anonymous blog; unnamed \"studies show\"</td></tr>
<tr><td>Purpose: to inform or report methods</td><td>Purpose: to sell a product or harvest clicks</td></tr>
<tr><td>Date matches the question</td><td>A 1998 stat used as if it were this year</td></tr></table>
<p>Note card / digital note: <em>claim or quote in your words or in quotation marks + source + page/URL + why you might use it</em>.</p>`,
          {
            label: "credibility over convenience",
            problem: "For a paper on concussion protocols, which source is strongest?",
            steps: [
              "<strong>A sports-drink ad with a smiling athlete</strong> has a sales purpose — weak for medical protocol.",
              "<strong>A classmate's group chat</strong> is anecdote, not a protocol source.",
              "<strong>The district athletic handbook plus a recent CDC summary</strong> combine local policy with recognized health authority."
            ],
            answer: "Match source type to the question; ads and chats are not protocol evidence."
          },
          {
            label: "notes without a citation trail",
            problem: "Priya copies four statistics into a document titled \"stuff\" with no sources. At draft time she cannot remember which number came from where. What process failed?",
            steps: [
              "<strong>Locating sources happened; organizing notes did not.</strong>",
              "<strong>Every note needs a tag</strong> at the moment of copying, not later.",
              "<strong>Fix going forward:</strong> one note = one fact + source + locator. Never paste naked numbers."
            ],
            answer: "Unsourced note piles create accidental plagiarism and unusable drafts."
          },
          {
            problem: "A website about sleep has no author, no date, and a \"Buy melatonin 20% off\" banner. How should a researcher treat it?",
            hint: "Low credibility. You may use it to find named studies it mentions, then go to those studies. Do not cite the sales page as scientific authority."
          },
          "Equating \"it was on a website\" with \"it is a source,\" or equating \"I disagree\" with \"it is not credible.\" Credibility is a method test, not a vibe test.",
          [
            check(
              "A student researching cafeteria food waste is choosing among sources. Which is most credible for local amounts?",
              [
                "The district's dated waste-audit spreadsheet plus an interview with the cafeteria manager",
                "An undated listicle titled \"10 Shocking School Lunch Facts\" with no author",
                "A comment under a cooking video",
                "A meme about mystery meat"
              ],
              0,
              "Local, dated, accountable sources beat anonymous clickbait. Humor is not a waste audit."
            ),
            check(
              "Which note-taking habit best prevents lost citations?",
              [
                "Recording each fact with the source name, date, and page or URL before moving on",
                "Copying whole web pages into one untitled file",
                "Memorizing statistics and writing them later from memory",
                "Highlighting a printout but never listing the book"
              ],
              0,
              "Source tags belong on the note itself. Memory and mystery files are how citations disappear."
            )
          ]
        ),
        section(
          "Paraphrase, quotation, summary, citation, and plagiarism",
          "You may use other people's ideas only with credit. Quotation uses their exact words in quotation marks. Paraphrase restates a specific passage in your syntax and words. Summary condenses a larger stretch. All three still need citation.",
          "Plagiarism includes copying words without marks, copying structure with synonym swaps (\"mosaic\" paraphrase), and dropping in statistics with no source. Citation style (MLA, APA) can vary; the ethical requirement does not: readers must be able to find the source. Quote <strong>short distinctive language</strong>; paraphrase facts and ordinary wording; summarize whole articles or chapters.",
          `<table><tr><th>Move</th><th>When</th><th>Still cite?</th></tr>
<tr><td>Quote</td><td>The exact wording matters (definition, striking phrase)</td><td>Yes + quotation marks</td></tr>
<tr><td>Paraphrase</td><td>The idea matters; the original wording does not</td><td>Yes, no quotation marks</td></tr>
<tr><td>Summary</td><td>The overall argument or plot of a long text</td><td>Yes</td></tr>
<tr><td>Common knowledge</td><td>Easily verified basics (water freezes at 0°C)</td><td>Usually no</td></tr></table>`,
          {
            label: "mosaic plagiarism vs. real paraphrase",
            problem: "Source: <em>Ninth graders in the late-bus group attended 18% more tutoring sessions.</em> Student: <em>Ninth graders in the late bus group attended eighteen percent more tutoring sessions.</em> No citation. Diagnose.",
            steps: [
              "<strong>The syntax is the same;</strong> only a hyphen and a spelled-out number changed.",
              "<strong>That is not paraphrase</strong> — it is a thinly disguised copy, and the statistic still needs a source.",
              "<strong>Real paraphrase plus citation:</strong> <em>Tutoring logs showed higher session attendance among ninth graders who could ride the late bus (Hale 14).</em>"
            ],
            answer: "Changing a few tokens is still plagiarism if the structure and data are lifted without credit."
          },
          {
            label: "when a short quote is better",
            problem: "A district policy says students are \"not to be denied access solely due to unpaid fees.\" Should the writer paraphrase or quote?",
            steps: [
              "<strong>The exact legal-sounding phrasing is the evidence</strong> — synonym-swapping could change the policy.",
              "<strong>Quote the short phrase</strong> and cite the policy document.",
              "<strong>Then explain in your own words</strong> what it means for the yearbook fee case."
            ],
            answer: "Quote distinctive policy language; paraphrase the explanation around it; cite both uses."
          },
          {
            problem: "A student summarizes a three-page article in two sentences, cites it, and also quotes a four-word slogan from an ad-free school poster with citation. Is either plagiarism?",
            hint: "No. Summary with citation is legitimate. A cited short quote is legitimate. Plagiarism is missing credit or fake paraphrase, not the mere use of sources."
          },
          "Believing that changing every third word, or omitting a citation because \"I put it in my own words,\" makes work original. Paraphrase without citation is still using someone else's idea.",
          [
            check(
              "Which student move is plagiarism?",
              [
                "Copying a paragraph from a website, changing two adjectives, and omitting any citation",
                "Quoting a short phrase in quotation marks and adding an in-text citation",
                "Summarizing a chapter in original sentences and listing the book in the works cited",
                "Citing a statistic after restating it in new syntax"
              ],
              0,
              "Synonym swaps without citation are mosaic plagiarism. Quoted, summarized, and paraphrased material with credit is legitimate."
            ),
            check(
              "When is a direct quotation the best choice?",
              [
                "When the original wording is distinctive or legally precise and you will discuss those exact words",
                "Whenever a sentence feels hard to rewrite",
                "For every statistic, even ordinary numbers",
                "Instead of a works-cited list"
              ],
              0,
              "Quote what you will analyze as wording. Ordinary facts should be paraphrased and cited. Quotations never replace a bibliography."
            )
          ]
        )
      ]
    }
  });
})();
