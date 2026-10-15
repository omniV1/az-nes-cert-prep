/* Deep, interactive teaching -- Professional Knowledge: Secondary (NES APK 052) */
window.LESSONS = Object.assign(window.LESSONS || {}, {
  "pk-01": {
    title: "Adolescent development & learning theory",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Match classroom scenarios to the correct developmental theory (Piaget, Vygotsky, Erikson) -- the exam tests application, not memorization of names. Each theory below gets two contrasting scenarios so you can see both the "textbook" case and the trickier near-miss case.</p>`,
    sections: [
      {
        heading: "Piaget: formal operational stage",
        body: `
          <p>Secondary students are entering or consolidating <strong>formal operational thought</strong>: reasoning abstractly, testing hypotheses systematically, and manipulating ideas ("what if...") without needing physical objects in front of them. This contrasts with <strong>concrete operational</strong> thought (roughly ages 7-11), which requires concrete, hands-on referents. But development is a continuum, not a light switch -- even secondary students often benefit from a concrete anchor when a concept is brand-new, and individual students progress at different rates. The exam rewards recognizing formal operational reasoning when you see it AND recognizing that concrete supports are still legitimate scaffolds, not a sign a student is "behind."</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>In 10th grade chemistry, students are given a lab problem and asked to design their own experiment that isolates one variable at a time to figure out which factor affects a reaction's rate, before running a single trial.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> students are reasoning systematically about multiple abstract variables and hypothetical outcomes ("if we change X while holding Y constant, then...") entirely in their heads, before any physical testing occurs.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is Piaget's <strong>formal operational stage</strong> -- hypothetical-deductive reasoning and systematic variable isolation are hallmark abilities of this stage, typically emerging in adolescence.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should design open-ended, multivariable problems that require systematic hypothesis testing rather than only step-by-step recipes, because this age group can handle -- and grows from -- that level of abstraction.</li>
            </ol>
            <p class="we-answer">Takeaway: formal operational thought means reasoning systematically about hypotheticals and abstractions without needing to physically manipulate every case.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A 7th grader can manipulate simple numeric equations fine, but is completely lost when first introduced to solving for an abstract variable with no real-world context. Once the teacher models the same equation using a physical balance-scale (adding/removing weights from each side), the student immediately grasps it.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the student needed a concrete, physical model to access a brand-new abstract idea -- this could look like the student "isn't capable of formal operations," but that would be the wrong read.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> formal operational thought is a developing capacity, not an on/off switch that flips identically across every topic at once; early adolescents especially may still need a concrete-to-abstract bridge when a concept is genuinely new, even if they can reason abstractly in familiar domains.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should not assume every secondary student is fully abstract in every domain -- introducing a brand-new abstraction with a concrete or visual anchor first, then fading it, respects where the student actually is developmentally.</li>
            </ol>
            <p class="we-answer">Takeaway: even secondary students legitimately benefit from concrete anchors when a concept is brand-new; that is not the same as being "stuck" at concrete operations.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming secondary students never need concrete supports, or conversely, assuming that any use of a concrete model means a student is at the concrete operational stage. The exam wants both truths held at once: teens CAN do abstract reasoning, and concrete anchors are still a legitimate scaffold for brand-new content -- it is not either/or.</div>
        `,
        checks: [
          {
            prompt: "A 9th grader in physics reasons, entirely in her head, \"if we double the mass but keep force the same, acceleration should be cut in half,\" without needing to physically test it first. Piaget would classify this as:",
            choices: ["Formal operational thought", "Concrete operational thought", "Preoperational thought", "Sensorimotor thought"],
            answer: 0,
            explain: "Abstract, hypothetical, systematic reasoning about variables without needing physical objects is the hallmark of formal operational thought, typical from adolescence onward."
          },
          {
            prompt: "A high schooler solves ordinary algebraic equations with ease, but when imaginary numbers are introduced for the first time, she needs a rotation/number-line visual model before the idea clicks; after a week of practice she no longer needs the visual. What is the MOST appropriate interpretation, per Piaget's theory?",
            choices: [
              "Using a visual model to introduce a genuinely new abstraction is developmentally appropriate and does not contradict formal operational capacity; the teacher should fade the support as understanding builds",
              "The student has regressed to concrete operational thought and needs permanent concrete-only instruction in all of math going forward",
              "The visual model should have been withheld entirely, since secondary students must reason abstractly on every topic from the start",
              "The student is incapable of ever understanding imaginary numbers in the abstract"
            ],
            answer: 0,
            explain: "A temporary concrete/visual bridge for a brand-new abstraction, later faded, is consistent with formal operational capacity -- it does not mean the student has regressed or is permanently limited. The tempting distractor (\"she regressed to concrete operational\") wrongly treats a single new-content scaffold as a global stage change."
          }
        ]
      },
      {
        heading: "Vygotsky: Zone of Proximal Development & scaffolding",
        body: `
          <p>The <strong>Zone of Proximal Development (ZPD)</strong> is the gap between what a student can do independently and what they can do with assistance from a "more knowledgeable other" (MKO) -- a teacher OR a more skilled peer. Effective <strong>scaffolding</strong> targets exactly this zone: support is matched to what a student almost can do alone, then gradually withdrawn ("fading") as competence grows. Learning, in Vygotsky's view, is fundamentally social -- it happens through guided interaction, not solo discovery alone.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A geometry teacher gives students a partially worked-out proof with several steps blanked out, planning to blank out fewer steps as the unit progresses and students improve.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> support is deliberately matched to a task the student cannot yet complete fully alone but can complete with help, and the plan is to gradually remove that support.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is Vygotsky's <strong>ZPD</strong> with scaffolding -- support that targets the "almost can do it alone" zone.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should provide temporary supports (partially worked examples, sentence starters, guiding questions) at the edge of current ability, then withdraw them as competence grows, rather than doing the work for the student or offering no support at all.</li>
            </ol>
            <p class="we-answer">Takeaway: effective scaffolding targets the ZPD and fades over time as the student internalizes the skill.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>For a graphing unit, a teacher pairs a student who is struggling with a peer who has already mastered graphing functions; the peer thinks aloud and asks guiding questions while they work through problems together, rather than simply handing over answers.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> a more capable peer provides guided assistance that lets the struggling student accomplish something they could not yet do alone -- this could be mislabeled as "just cooperative learning" without naming the deeper mechanism.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> this is Vygotsky's <strong>more knowledgeable other (MKO)</strong> concept -- the ZPD can be filled by a peer, not only a teacher, as long as the assistance genuinely guides the learner's own reasoning.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should intentionally structure peer pairings so more-skilled peers model reasoning within a struggling student's ZPD, and should monitor that the "helper" is guiding thinking rather than simply supplying answers, since giving answers does not build independent capacity.</li>
            </ol>
            <p class="we-answer">Takeaway: the ZPD can be filled by a teacher or a capable peer; what matters is guided assistance that stretches beyond independent ability, not mere proximity to someone skilled.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> confusing any group work with Vygotskian scaffolding, or confusing "giving the answer" with scaffolding. True scaffolding supports the student's own reasoning process at the edge of their ability and is designed to fade -- it does not do the thinking for them indefinitely.</div>
        `,
        checks: [
          {
            prompt: "A teacher provides sentence-starter templates for lab reports early in the year, and students need fewer and fewer starters as the semester goes on until they write independently. This best illustrates:",
            choices: ["Vygotsky's ZPD with scaffolding that fades over time", "Piaget's concrete operational stage", "Erikson's identity vs. role confusion", "Behaviorist extinction"],
            answer: 0,
            explain: "Support matched to what a student almost can do alone, gradually withdrawn as skill grows, is scaffolding within the ZPD."
          },
          {
            prompt: "A student struggles with essay organization. Compare two teacher responses across several drafts: (A) the teacher provides an outline template with guiding questions targeted to the specific gaps in the student's draft, removing more structure with each successive draft; (B) the teacher personally rewrites the introduction paragraph for the student every time they struggle. Which is genuine Vygotskian scaffolding, and why?",
            choices: [
              "(A) -- it targets the ZPD with guidance the student can act on, and is designed to fade as the student's own skill grows",
              "(B) -- it provides the most direct, reliable help so the student always produces a strong introduction",
              "Both equally represent scaffolding, since both involve teacher support with student writing",
              "Neither represents scaffolding, since scaffolding only applies to peer-to-peer help, not teacher-to-student help"
            ],
            answer: 0,
            explain: "(A) matches support to the ZPD and fades it, building the student's own capacity. (B) looks helpful but actually does the cognitive work FOR the student, does not target growth, and would need to be repeated forever -- it is not scaffolding even though it feels supportive."
          }
        ]
      },
      {
        heading: "Erikson: identity vs. role confusion",
        body: `
          <p>Erikson's psychosocial theory places adolescence in the <strong>identity vs. role confusion</strong> stage: teens are developmentally driven to figure out "who am I," which explains the outsized importance of peer relationships, autonomy, choice, and relevance-to-self for motivation at this age. This also explains why teens frequently question rules and push for independence -- that is often normal identity-stage development, not defiance for its own sake.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A teacher lets students choose project topics connected to their own interests and identities (a hobby, a career interest, a cultural background) rather than assigning one fixed topic to everyone, and notices engagement rises sharply.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> engagement increases specifically when the task connects to the student's personal interests/identity, not just when any choice is offered.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is Erikson's <strong>identity vs. role confusion</strong> stage -- adolescents are developmentally focused on defining who they are, so relevance-to-self is a strong motivational lever.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should build in choice and personal relevance wherever the standard allows, since this taps directly into the developmental work of this age group.</li>
            </ol>
            <p class="we-answer">Takeaway: choice and personal relevance strongly support engagement in adolescence because they connect to identity formation, the central developmental task of this stage.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A 16-year-old repeatedly asks "why do we have to do it this way" about classroom procedures and negotiates for more independence in how she completes assignments, while still turning in quality work and treating others respectfully.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the student is questioning authority and seeking autonomy, which could be misread as defiance requiring discipline -- but nothing here is actually disrespectful or unsafe.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> Erikson's theory explains this as normal identity-stage development -- adolescents developmentally need to test boundaries and exercise self-determination as part of forming a stable identity, separate from genuine misbehavior.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should respond by explaining the reasoning behind procedures and offering legitimate structured choice, reserving firm limits for genuine safety or policy issues, rather than treating normal autonomy-seeking as a discipline problem.</li>
            </ol>
            <p class="we-answer">Takeaway: distinguishing normal identity-driven autonomy-seeking from real defiance prevents over-punitive responses and supports healthy identity development.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> treating every instance of a teen wanting independence or questioning a rule as disrespect requiring discipline, instead of recognizing it as expected identity-stage behavior that calls for explanation and structured autonomy.</div>
        `,
        checks: [
          {
            prompt: "A student chooses to research a career field she is personally passionate about for an open-ended research project, producing noticeably more detailed work than on prior assigned-topic projects. This is best explained by:",
            choices: ["Erikson's identity vs. role confusion stage", "Piaget's sensorimotor stage", "Bloom's taxonomy", "Maslow's safety needs only"],
            answer: 0,
            explain: "Adolescents are developmentally focused on identity formation, so choice and relevance to self strongly support engagement and effort at this stage."
          },
          {
            prompt: "A 15-year-old frequently asks \"why do we have to do it this way\" during class discussions and proposes alternative approaches to assignments, but always completes work on time and treats peers respectfully. Which is the MOST appropriate interpretation and response, and why is the closest alternative wrong?",
            choices: [
              "This reflects Erikson's identity-stage need to question and understand rationale/autonomy; the best response is to explain the reasoning behind expectations and invite input, not discipline the questioning itself",
              "This reflects Piaget's formal operational stage alone -- since the questioning shows abstract reasoning growth, no special response beyond continuing to teach content abstractly is needed",
              "This is disrespectful defiance and should be referred for a discipline consequence immediately",
              "This behavior should be ignored entirely because it is not related to any developmental process"
            ],
            answer: 0,
            explain: "While the questioning does draw on growing abstract reasoning (Piaget), the specific pattern described -- pushing for autonomy, negotiating independence, questioning authority while otherwise behaving appropriately -- is centrally about identity-stage autonomy-seeking (Erikson), which calls for explanation and structured choice rather than treating it as either a pure cognitive-growth phenomenon or a discipline issue."
          }
        ]
      }
    ]
  },

  "pk-02": {
    title: "Student differences, IEPs & differentiation",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Distinguish accommodations from modifications, and apply differentiation and UDL principles to scenarios -- including the trickier cases where two supports look alike on the surface but differ in a way that matters for grading and rigor.</p>`,
    sections: [
      {
        heading: "Accommodation vs. modification",
        body: `
          <p><strong>Accommodation:</strong> changes <em>how</em> a student accesses or demonstrates learning, without changing the content or the standard being measured (extended time, a quiet room, larger print, text-to-speech). <strong>Modification:</strong> changes <em>what</em> is being learned or expected (fewer or easier problems, a reduced or altered grade-level standard). The deciding question is always: did the underlying content/expectation change, or only the access conditions?</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A student with an IEP takes the exact same algebra test as peers, but is given extended time and a quiet room to complete it.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the test content and expected rigor are identical to peers'; only the time and environment differ.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is an <strong>accommodation</strong> -- access changes, content/expectations stay the same.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should implement exactly the accommodation specified in the IEP and grade against the same standard as everyone else -- accommodations do not lower the bar.</li>
            </ol>
            <p class="we-answer">Takeaway: accommodations preserve the standard and only change delivery or access conditions.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>For the same unit science test: Student A (who has a reading-based learning disability) gets the identical test content read aloud through text-to-speech software. Student B, whose IEP goal targets below-grade-level content, gets a shortened version of the test covering only basic vocabulary rather than the full standard.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> Student A's content and rigor are unchanged, only the access method differs; Student B's actual content/expectations were reduced to a different, easier standard.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> Student A's support is an <strong>accommodation</strong> (how they access it changed); Student B's support is a <strong>modification</strong> (what is expected of them changed).</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher must track and report these differently -- a modification means the student is being measured against a different standard, which affects how progress toward grade-level standards is documented, while an accommodation does not change what standard is being measured.</li>
            </ol>
            <p class="we-answer">Takeaway: the test is always "did WHAT is expected change (modification), or only HOW it is accessed (accommodation)?" -- not how similar or different the supports look on the surface.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming any special support automatically counts as an "accommodation." Always check whether the underlying content or standard itself changed (modification) versus only the access, format, or timing changed (accommodation).</div>
        `,
        checks: [
          {
            prompt: "A student who is blind receives a braille version of the exact same standardized test that all other students take, with the same questions and the same passing standard. This is:",
            choices: ["An accommodation -- content and standard are unchanged, only the format changed", "A modification -- the content was altered", "Neither -- braille materials are unrelated to IEP services", "Differentiated instruction, not an IEP-related support"],
            answer: 0,
            explain: "The exact same content and standard are preserved; only the format/access method changed to braille, which is the definition of an accommodation."
          },
          {
            prompt: "Compare two supports on the SAME unit test: Support A gives every student a formula reference sheet as an optional tool, with all students required to answer the identical set of problems at the same rigor. Support B gives one student a version of the test with two fewer required standards and simpler substitute problems, per that student's IEP. Which one is an accommodation rather than a modification, and why?",
            choices: [
              "Support A -- because the underlying standard/content and rigor are unchanged for that student; a reference tool changes access, not what is being measured",
              "Support B -- because reducing the number of problems makes the test easier to complete, which counts as improved access",
              "Both are accommodations, since both involve providing extra support tools during a test",
              "Neither is an accommodation, since any change to a standardized test format is automatically a modification"
            ],
            answer: 0,
            explain: "Support A does not change what standard is being measured -- everyone answers the same problems at the same rigor, with a reference tool available -- so it is an accommodation. Support B changes the actual content and standards being assessed (fewer, easier standards), which is a modification, even though the tempting distractor frames it as just \"making the test easier to access.\""
          }
        ]
      },
      {
        heading: "Differentiation by readiness, interest, or profile",
        body: `
          <p><strong>Differentiation</strong> adjusts content, process, or product based on student readiness, interest, or learning profile -- while keeping the <em>same learning goal</em> for every student. This is the key line that separates differentiation from modification: differentiation varies the path to the goal; modification changes the goal itself.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>All students work toward the same learning goal -- solving systems of equations -- but some use graphing, some use substitution, and some use elimination, based on their individual strengths.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the method varies by student, but the learning goal (solve systems of equations) is identical for everyone.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>differentiation by process</strong> -- varying the path while keeping the destination the same.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should offer multiple valid solution methods and let students select based on their strengths, while assessing all students against the same standard.</li>
            </ol>
            <p class="we-answer">Takeaway: varying the method/process while keeping the same learning goal for everyone is differentiation, not a change to what is being assessed.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>For a unit on how theme develops in literature, a teacher offers the same theme-analysis standard to everyone, but lets students read one of three novels at different reading-complexity levels, and choose to demonstrate their analysis through an essay, a visual project, or an oral presentation.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> materials (text complexity) and product format vary by student, but every student is being assessed against the identical standard -- analyze how theme develops.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> this is <strong>differentiation by content and product</strong> based on readiness (text complexity) and interest/profile (product choice) -- it could be mistaken for a modification since the materials look very different across students, but the deciding factor is that the standard itself is unchanged for everyone.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should confirm that regardless of which text or product format a student uses, the same standard/rigor of analysis is required, which preserves differentiation rather than sliding into modification.</li>
            </ol>
            <p class="we-answer">Takeaway: differentiation varies materials, process, or product to reach the SAME goal for everyone; different-looking materials across students do not automatically mean a lowered standard.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming that if materials look different across students, the standard must have been lowered. The deciding factor is always whether the learning GOAL changed (modification) or only the path to it changed (differentiation).</div>
        `,
        checks: [
          {
            prompt: "Students at different readiness levels practice the same skill -- solving one-step equations -- but some work with whole numbers and others work with fractions, all while being held to the identical standard for the unit. This is:",
            choices: ["Differentiation by content/readiness", "A modification of the standard", "An IEP accommodation", "Summative assessment"],
            answer: 0,
            explain: "Varying the complexity of materials by readiness while keeping the same learning goal for all students is differentiation, not a change to the standard being assessed."
          },
          {
            prompt: "In one class, an \"advanced\" group solves two-step equations with fractions and a \"struggling\" group solves one-step equations with whole numbers, with all students expected to eventually meet the same grade-level standard by unit's end. In another class, a student's IEP specifies a formally lower, below-grade-level standard as their actual goal for the unit, and their assignments reflect only that reduced standard. Which of these two situations is a modification, not differentiation, and why?",
            choices: [
              "The second situation -- because the student's actual learning GOAL has been formally changed to a different, lower standard, not just the process or materials used to reach the same goal",
              "The first situation -- because giving different number types (fractions vs. whole numbers) to different groups always counts as changing the standard",
              "Both situations are modifications, since both involve giving different work to different students",
              "Neither is a modification, since both are simply examples of meeting students where they are"
            ],
            answer: 0,
            explain: "The first situation still aims every student at the same eventual grade-level standard -- it is readiness-based differentiation. The second situation formally changes the target standard itself for one student, which is the defining feature of a modification, regardless of how reasonable or well-intentioned the adjustment is."
          }
        ]
      },
      {
        heading: "Universal Design for Learning (UDL)",
        body: `
          <p>UDL builds multiple means of <strong>engagement</strong>, <strong>representation</strong>, and <strong>action/expression</strong> into a lesson from the start, for the whole class, based on the premise that learner variability is the norm rather than the exception. This is proactive and universal -- unlike an individual accommodation or modification, which is reactive and tied to one student's documented plan.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>Before the unit even starts, a teacher plans a lesson with a video, a text explanation, and a hands-on model of the same concept, and lets every student choose to respond via essay, poster, or oral presentation.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> multiple means of representation and expression are built into the lesson for everyone, in advance, before any individual need is even identified.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>Universal Design for Learning</strong> -- proactive, universal flexibility rather than a reaction to one student's documented need.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should plan flexible options into every unit by default, which benefits students with unidentified needs as well as those with simple preference differences.</li>
            </ol>
            <p class="we-answer">Takeaway: building multiple means of representation and expression into lesson design for all students from the outset is the core idea of UDL.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>Compare two situations: (A) as a standing class policy from day one, a teacher builds product choice (essay, video, or concept map) into every major assignment for the whole class. (B) only after an IEP meeting, a teacher allows one specific student to submit a video instead of an essay for one particular assignment, per that student's plan.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the actual support offered (choice of product format) can look nearly identical in both cases, which is exactly what makes this a tricky comparison.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> situation (A) is <strong>UDL</strong> -- proactive, universal, planned for everyone in advance; situation (B) is an individual <strong>accommodation</strong> -- reactive, tied to one student's documented plan, offered only after a specific need was identified.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should recognize that UDL and individual accommodations are complementary, not identical -- UDL reduces how many individual accommodations are even needed, but does not replace the legal obligation to provide documented accommodations for students who require them.</li>
            </ol>
            <p class="we-answer">Takeaway: UDL is proactive and universal (built for everyone up front); accommodations are reactive and individual (tied to a documented plan) -- the two can look the same on the surface but differ in WHO they are designed for and WHEN.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming UDL and accommodations are the same thing because the actual support can look identical. The difference is whether it was planned proactively for all learners (UDL) or provided reactively for one documented individual (accommodation).</div>
        `,
        checks: [
          {
            prompt: "From the first day of a unit, a teacher posts all lesson materials in text, audio, and video form for the entire class, without knowing in advance which students might need which format. This best reflects:",
            choices: ["Universal Design for Learning (proactive, multiple means for all)", "An IEP modification for one student", "A behavioral intervention plan", "Formative assessment"],
            answer: 0,
            explain: "Building multiple means of representation into the lesson design for all students from the outset, before any individual need is identified, is the core idea of UDL."
          },
          {
            prompt: "A teacher's class syllabus states that every major project throughout the year will always offer three product-format choices for all students. Separately, this teacher also honors one student's IEP-specified accommodation of a video-response option for a single specific assignment. Which statement correctly distinguishes these two practices?",
            choices: [
              "The syllabus-wide policy is UDL because it is planned in advance for everyone; the individual IEP allowance is an accommodation because it is tied to one student's documented, individual need",
              "Both practices are UDL, since both ultimately give students choices in how they respond",
              "Both practices are accommodations, since both involve flexible response formats",
              "The syllabus-wide policy is an accommodation because it still requires extra planning by the teacher"
            ],
            answer: 0,
            explain: "What determines the label is WHO the flexibility is designed for and WHEN it was planned -- universal, proactive design for the whole class is UDL, while a specific provision tied to one student's documented plan is an accommodation, even when the actual support looks the same."
          }
        ]
      }
    ]
  },

  "pk-03": {
    title: "Assessment design & data use",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Distinguish formative from summative assessment, reliability from validity, and practice matching the SCALE of a data-driven intervention to the SIZE of the gap the data reveals.</p>`,
    sections: [
      {
        heading: "Formative vs. summative",
        body: `
          <p><strong>Formative:</strong> ongoing, typically low-stakes, used to adjust instruction <em>while</em> learning is still happening (exit tickets, whiteboard checks). <strong>Summative:</strong> evaluates learning <em>after</em> a unit of instruction has concluded, typically higher-stakes and recorded (unit tests, finals). The deciding factor is the assessment's purpose and timing relative to the learning it targets -- not simply whether the data ever gets used to inform future teaching.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>Mid-lesson, a teacher gives a quick 3-question whiteboard check to decide whether to re-teach a concept before moving on to the next topic that same period.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the check happens WHILE the lesson is still in progress, and the result directly determines what happens next in that same lesson.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>formative assessment</strong> -- in-the-moment data used to adjust instruction during learning.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should build in frequent, low-stakes formative checks throughout a lesson specifically to catch and correct misunderstanding before it compounds.</li>
            </ol>
            <p class="we-answer">Takeaway: using in-the-moment data to adjust instruction during the lesson is the defining feature of formative assessment.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A teacher gives a graded final exam at the end of a unit. The following semester, the teacher looks back at that exam's results to decide which topics to review before starting a related new unit.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the assessment was graded and administered at the END of a completed unit -- but the data is later reused to plan future instruction, which could tempt someone to call it "formative."</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> this is still <strong>summative</strong> -- its original purpose and timing were to evaluate/certify mastery of learning that had concluded. Reusing the data afterward for planning does not retroactively make the assessment formative.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should classify assessments by their purpose and timing at the time they were given, and should still design deliberate, low-stakes formative checks DURING a unit if real-time instructional adjustment is the goal.</li>
            </ol>
            <p class="we-answer">Takeaway: an assessment's formative/summative status depends on its purpose and timing relative to the learning it assesses, not on whether the data happens to get reused later.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> labeling any assessment "formative" just because the data eventually informs later teaching. Ask instead: was this used to adjust instruction WHILE the learning was still happening, or to evaluate/certify it AFTER the fact?</div>
        `,
        checks: [
          {
            prompt: "A teacher uses daily exit tickets to decide which students need a small-group re-teach the very next morning. This is:",
            choices: ["Formative assessment", "Summative assessment", "A norm-referenced test", "A standardized benchmark"],
            answer: 0,
            explain: "Using ongoing, low-stakes data to adjust instruction in real time is the defining feature of formative assessment."
          },
          {
            prompt: "Compare two weekly practices: (A) a graded quiz that counts toward the report-card grade, which also happens to show the teacher which students are struggling; (B) an ungraded weekly \"check for understanding\" used only to decide how to regroup students for the following days, never entered in the gradebook. Which is truly formative, and why is the other one NOT formative despite also informing teaching?",
            choices: [
              "(B) is formative because it is low-stakes and used specifically to adjust near-term instruction; (A) is summative because it is graded and recorded as an evaluation of mastery, even though it also has instructional value",
              "(A) is formative because any data that reveals which students are struggling counts as formative by definition",
              "Both are formative, since both provide information the teacher can act on",
              "Neither is truly formative, since only end-of-course exams count as legitimate formative data"
            ],
            answer: 0,
            explain: "Being graded and recorded toward a final grade pushes a practice toward summative regardless of whether it also has instructional benefit; the deciding factor is the assessment's stakes/purpose, not merely whether the data is useful."
          }
        ]
      },
      {
        heading: "Reliability vs. validity",
        body: `
          <p><strong>Reliability:</strong> the consistency of results (across raters, occasions, or forms). <strong>Validity:</strong> whether an assessment actually measures what it claims to measure. A test can be reliable but not valid -- consistently measuring the wrong thing. Reliability is necessary but not sufficient for validity: an assessment must be reasonably consistent before its validity evidence can even be trusted, but consistency alone does not guarantee it measures the right skill.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A geometry test is entirely made up of vocabulary-matching questions, even though the standard being assessed is "construct geometric proofs."</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the test could be scored perfectly consistently (vocabulary matching has clear right/wrong answers), but it never asks students to actually construct a proof.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is a <strong>validity</strong> problem -- the test does not measure the intended skill, even though scores may be reliable.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should redesign the assessment so it actually requires students to construct proofs, since a reliable-but-invalid test gives a false picture of whether students met the standard.</li>
            </ol>
            <p class="we-answer">Takeaway: a test can be scored consistently (reliable) yet still fail to measure the actual standard (a validity problem).</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A hands-on lab-practical exam directly requires students to demonstrate proper microscope use, matching the target standard -- but different teachers grade the same student performance very differently because there is no shared rubric, only personal judgment.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the assessment content targets the right skill (so it could be valid), but the SCORES vary depending on who grades it -- the same performance gets different results from different raters.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> this is a <strong>reliability</strong> problem -- inconsistency in scoring/results -- which is separate from validity. A test can target the right skill and still be unreliable if scoring is not consistent.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher(s) should create and use a clear, consistent rubric with specific criteria, and ideally check inter-rater agreement, since reliable scoring is a prerequisite for the assessment's validity evidence to be trustworthy at all.</li>
            </ol>
            <p class="we-answer">Takeaway: reliability (consistency) and validity (measuring the right thing) are separate problems needing separate fixes -- inconsistent scoring is a reliability issue even when the content itself targets the right skill.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> labeling every assessment problem a "validity" issue. If the problem is inconsistent scores/results across raters, occasions, or conditions, that is reliability; if the problem is measuring the wrong thing relative to the standard, that is validity.</div>
        `,
        checks: [
          {
            prompt: "A listening-comprehension test is played through poor-quality audio equipment that some students can barely hear, producing wildly inconsistent scores among equally skilled students. This is primarily a problem of:",
            choices: ["Reliability -- inconsistent conditions produce inconsistent results", "Validity -- the test measures the wrong construct", "Both reliability and validity by definition", "Neither -- audio quality is unrelated to test quality"],
            answer: 0,
            explain: "Technical/environmental inconsistency causing unstable results for equally skilled students is a reliability problem, not a question of whether the right skill was targeted."
          },
          {
            prompt: "A district gives a hands-on public-speaking assessment meant to measure the standard \"deliver a persuasive, well-organized speech,\" but the rubric only awards points for volume and eye contact, with no criteria addressing organization or persuasive reasoning at all. Is this primarily a reliability or a validity problem, and why is the other option tempting but wrong?",
            choices: [
              "Validity -- the rubric does not measure the actual target skill (persuasive, organized reasoning), even though it could be scored very consistently using the wrong criteria",
              "Reliability -- because a rubric with only two criteria is too simple to produce consistent scores across raters",
              "Both equally, since any rubric problem affects both reliability and validity in the same way",
              "Neither -- rubrics by definition guarantee both reliability and validity"
            ],
            answer: 0,
            explain: "The rubric could be applied with perfect consistency (high reliability) while still measuring the wrong thing entirely -- it never checks organization or persuasiveness, the actual target standard. That makes this a validity problem; the reliability-sounding distractor is tempting because a rubric is involved, but the issue described is about WHAT is measured, not how consistently it is scored."
          }
        ]
      },
      {
        heading: "Using data to guide instruction",
        body: `
          <p>Item-level (or skill-level) analysis -- which specific questions or skills students missed -- is far more actionable than an overall score alone. Equally important: the SCALE of the response should match the SCALE of the gap. A skill that most of the class missed calls for a whole-class re-teach; a skill that only a handful of students missed calls for a targeted small-group intervention, not a whole-class re-teach that wastes time for students who already have it.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>After a unit test, a teacher notices 80% of students missed only the questions on factoring trinomials with a leading coefficient greater than 1, while doing well on everything else.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> a large majority of the class (80%) missed one specific, identifiable skill, while succeeding elsewhere.</li>
              <li><strong>Step 2 -- name the principle:</strong> item-level data pinpoints exactly which skill is broken; because the gap is widespread, this calls for a <strong>whole-class re-teach</strong> of that specific skill.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should deliver a targeted mini-lesson re-teaching factoring with a leading coefficient greater than 1, rather than reteaching the whole unit or ignoring the gap.</li>
            </ol>
            <p class="we-answer">Takeaway: item-level data pinpoints a specific skill gap, and targeted re-teaching of exactly that skill is more efficient than reteaching everything or ignoring it.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>After a different unit test, a teacher notices only 4 of 28 students missed questions on rationalizing denominators, while the rest of the class -- and those 4 students on every other skill -- did fine.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> only a small minority (4 of 28) missed one specific, identifiable skill, while the rest of the class shows mastery -- a very different pattern from Worked Scenario 1's 80%.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> the RESPONSE should be proportional to the SIZE of the gap -- a small subgroup gap calls for a <strong>targeted small-group intervention</strong>, not a whole-class re-teach that would waste time for the 24 students who already have it.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should pull those 4 students for small-group instruction or targeted practice on rationalizing denominators (e.g., during independent work time), rather than re-teaching the whole class or ignoring the gap because it is not "most of the class."</li>
            </ol>
            <p class="we-answer">Takeaway: the size and pattern of a data gap -- whole-class vs. small-subgroup -- should determine whether the response is a whole-class re-teach or a targeted small-group intervention.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> applying the same "reteach the whole class" response regardless of how many students actually struggled, wasting time for students who have already mastered the skill, or conversely, ignoring a small-group gap that could snowball since it does not affect "most of the class."</div>
        `,
        checks: [
          {
            prompt: "After a quiz, a teacher notices that 90% of the class missed questions specifically about interpreting remainders in word problems, while doing fine on the actual division computation. The best next step is to:",
            choices: ["Deliver a targeted whole-class mini-lesson specifically on interpreting remainders in context", "Reteach the entire division unit from the beginning", "Ignore it since the computation itself was correct", "Move on since only one question type was affected"],
            answer: 0,
            explain: "Since a large majority of the class missed this specific, identifiable skill, a targeted whole-class mini-lesson on exactly that skill is the efficient, proportional response."
          },
          {
            prompt: "After an assessment, a teacher notices 6 of 30 students missed a question requiring them to interpret what a slope means in a real-world context, while all 30 students -- including those 6 -- correctly calculated slope from a table of numbers on an identical-skill question. What is the MOST appropriate next step, and why is re-teaching the whole class the concept of slope NOT the best choice here?",
            choices: [
              "Provide targeted small-group support to the 6 students specifically on interpreting slope in context, since the gap is isolated both to a small subgroup and to a specific sub-skill (contextual interpretation, not computation)",
              "Reteach the whole class the concept of slope from scratch, since any missed question on a topic means the whole class needs review",
              "Do nothing further, since 24 of 30 students already got the question right",
              "Give the whole class extra homework problems on calculating slope from tables, since that is the skill being tested"
            ],
            answer: 0,
            explain: "The data shows two important things at once: the gap is isolated to a small subgroup (6 of 30) AND to a specific sub-skill (interpreting slope in context, not computing it). A whole-class reteach would waste time for the 24 who already show mastery, and assigning more slope-from-table computation practice (the tempting homework distractor) would not address the actual gap, which is about contextual interpretation."
          }
        ]
      }
    ]
  },

  "pk-04": {
    title: "Instructional planning & methods",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Apply backward design, choose instructional methods that match a stated objective, and check that activities/assessments actually match the cognitive rigor a standard calls for.</p>`,
    sections: [
      {
        heading: "Backward design (Understanding by Design)",
        body: `
          <p>Plan in this order: (1) desired results/standards, (2) acceptable evidence/assessment, (3) learning activities. But backward design is not just about SEQUENCE -- it also requires genuine ALIGNMENT between the three stages. A teacher can technically follow the right order and still fail backward design if the assessment does not actually measure the stated standard.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A teacher first decides students will complete a project on quadratic modeling, then designs a rubric for the project, then figures out which standard it addresses.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the activity was chosen FIRST, before the standard or the assessment evidence were defined.</li>
              <li><strong>Step 2 -- name the principle:</strong> this reverses <strong>backward design</strong>, which requires starting with the standard, then the evidence/assessment, and only then the activity.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should restart planning from the standard, define what evidence would demonstrate it, and only then decide whether the quadratic-modeling project is the right activity to get there.</li>
            </ol>
            <p class="we-answer">Takeaway: backward design requires starting with the standard/goal, then the assessment evidence, and only then the activity.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A teacher identifies the standard first ("analyze cause-and-effect relationships in historical events"), plans activities of reading and discussing primary sources -- but the actual unit test only asks students to recall dates and names via multiple choice.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the standard is about analysis/reasoning, but the assessment only measures recall of facts -- even though the teacher technically started with a standard, as backward design requires.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> this is a backward-design <strong>alignment failure</strong> between stage 1 (standard) and stage 2 (assessment evidence) -- having a standard on paper is not enough if the assessment does not actually measure it.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should redesign the assessment to require actual analysis of cause-and-effect (e.g., a short written argument using primary-source evidence) before finalizing the learning activities, ensuring true alignment across all three stages.</li>
            </ol>
            <p class="we-answer">Takeaway: backward design is about genuine ALIGNMENT between standard, assessment evidence, and activities -- not just doing the three steps in the right order on paper.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming backward design is satisfied just because a standard was named first, without checking whether the actual assessment given truly measures that standard.</div>
        `,
        checks: [
          {
            prompt: "A teacher first identifies the standard, then writes a performance-task rubric that matches that standard, and only then designs a project that will prepare students to meet the rubric. This is:",
            choices: ["Correct backward design, with the standard driving the assessment and the assessment driving the activity", "Backward design done in the wrong order", "Differentiated instruction, unrelated to backward design", "Formative assessment, unrelated to planning sequence"],
            answer: 0,
            explain: "Standard first, then matching assessment evidence, then activity, is exactly the sequence and alignment backward design requires."
          },
          {
            prompt: "Compare two teachers planning the same standard, \"evaluate the validity of an argument using evidence\": Teacher A writes the standard first, then a debate-style performance task requiring students to evaluate competing arguments with evidence, then plans supporting activities. Teacher B also writes the standard first, then plans engaging debate activities, then finishes with a test that only asks students to define \"argument\" and \"evidence\" as vocabulary terms. Which teacher actually followed backward design correctly, and why does Teacher B fall short despite the right sequence?",
            choices: [
              "Teacher A -- the assessment genuinely aligns with and provides evidence of the stated standard; Teacher B's assessment does not measure the standard at all, despite following the same three-step order",
              "Teacher B -- because vocabulary-based assessments are always easier to grade reliably",
              "Both teachers followed backward design correctly, since both wrote the standard first",
              "Neither followed backward design, since both eventually included activities"
            ],
            answer: 0,
            explain: "Teacher B technically used the right sequence (standard, then assessment, then activity) but the assessment does not provide evidence of the actual standard (evaluating argument validity) -- it only checks vocabulary recall. Backward design requires alignment, not just the right order of steps, which is why Teacher A -- not Teacher B -- actually followed it correctly."
          }
        ]
      },
      {
        heading: "Matching method to objective",
        body: `
          <p>Direct instruction suits foundational, procedural, or conventional content that must be applied accurately and efficiently. Guided inquiry/discovery suits objectives where there is a genuine relationship or pattern for students to uncover. Cooperative/collaborative learning suits objectives involving discussion, justification, or perspective-taking. No single method is universally "better" -- the exam rewards matching method to the TYPE of objective, not defaulting to one approach.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>The objective is: "Students will discover the relationship between a circle's circumference and diameter."</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the objective explicitly says "discover a relationship" -- there is a genuine mathematical pattern (the ratio is always pi) for students to uncover themselves.</li>
              <li><strong>Step 2 -- name the principle:</strong> this calls for <strong>guided inquiry</strong>, since the objective centers on discovering a relationship, not simply receiving a stated fact.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should have students measure several circles' circumference and diameter and compute the ratio themselves, guiding them toward noticing the constant relationship, rather than lecturing the formula directly.</li>
            </ol>
            <p class="we-answer">Takeaway: the objective explicitly calls for "discovering a relationship," which fits guided inquiry, not direct transmission of the answer.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>The objective is: "Students will correctly apply the order of operations (PEMDAS) to solve numeric expressions." A teacher spends an entire period having students "discover" the order of operations through open-ended exploration with no direct explanation, which leads to widespread confusion that takes several extra days to correct.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the order of operations is a fixed, agreed-upon convention, not a pattern with an underlying logical relationship for students to logically derive -- and pure discovery led to confusion rather than insight.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> fixed procedural conventions that must be applied accurately are generally better taught through <strong>direct, explicit instruction</strong> with modeling and practice, reserving inquiry for content with a genuine pattern to discover.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should explicitly teach and model the convention, then provide guided and independent practice, rather than assuming discovery-based learning is always the more rigorous choice.</li>
            </ol>
            <p class="we-answer">Takeaway: inquiry fits objectives with a genuine discoverable pattern; direct instruction fits fixed conventions where efficient, accurate transmission matters more than discovery -- neither method is universally superior.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming inquiry/discovery learning is always the more rigorous or preferred choice. Match the method to the nature of the objective -- a discoverable relationship vs. a fixed convention or foundational procedure.</div>
        `,
        checks: [
          {
            prompt: "The objective is: \"Students will accurately convert fractions to decimals using long division.\" Which instructional method best fits this objective?",
            choices: ["Direct instruction with modeling, followed by guided and independent practice", "An entirely open-ended discovery activity with no explanation of the procedure", "A silent, unstructured free-exploration period with no teacher input", "A debate about which conversion method is more elegant"],
            answer: 0,
            explain: "Converting fractions to decimals is a procedural skill with a fixed, correct method -- direct instruction with modeling and practice is the efficient, appropriate fit, similar to the order-of-operations case."
          },
          {
            prompt: "The objective is: \"Students will explain why the Pythagorean theorem is true, using an area-based visual proof.\" Which method best fits, and why is a pure lecture stating the theorem's formula NOT the best match here?",
            choices: [
              "Guided inquiry using visual/area manipulatives that let students reason toward WHY the relationship holds, since the objective explicitly emphasizes explaining the underlying reasoning, not just applying the formula",
              "A pure lecture stating a^2+b^2=c^2 with no supporting reasoning, since that is the most time-efficient way to convey a true mathematical fact",
              "An entirely unstructured discovery activity with no guidance at all, since any inquiry approach is equally effective regardless of structure",
              "Direct instruction only, since the Pythagorean theorem is a fixed mathematical fact like the order of operations"
            ],
            answer: 0,
            explain: "The objective's verb is \"explain why,\" targeting the underlying reasoning/relationship, not just applying a known formula -- this is a discoverable, reasoned relationship suited to guided inquiry with visual support. A pure lecture would fit an objective like \"state the theorem,\" and treating it like a fixed convention for direct instruction only (the order-of-operations distractor) ignores that the objective is specifically about the proof's reasoning, not rote application."
          }
        ]
      },
      {
        heading: "Bloom's Taxonomy and matching cognitive rigor",
        body: `
          <p>Bloom's (revised) taxonomy orders cognitive demand from remember, understand, and apply up through analyze, evaluate, and create. A standard or objective specifies a target cognitive level, and activities/assessments must actually require that level of thinking -- not a lower, easier substitute. For a genuinely new topic, higher-order tasks generally need to be built on a foundation of lower-order knowledge first; jumping straight to "evaluate" or "create" before students have the basics can undermine the task just as much as writing only recall-level questions for a standard that calls for analysis.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A standard states: "Students will evaluate the effectiveness of different persuasive techniques in a speech and justify which is most compelling." The teacher's actual activity has students simply define and list persuasive techniques (ethos, pathos, logos) from a worksheet, with no comparison or justification required.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the standard's verb ("evaluate...and justify") signals a high cognitive level, but the planned activity only requires low-level recall/identification (define, list).</li>
              <li><strong>Step 2 -- name the principle:</strong> this is a <strong>Bloom's-level mismatch</strong> -- the activity does not require the same cognitive level the standard specifies.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should redesign the activity so students compare real speech excerpts and argue, with evidence, which technique was most effective, matching the "evaluate" level named in the standard.</li>
            </ol>
            <p class="we-answer">Takeaway: always check that planned activities/assessment questions require the SAME cognitive level named in the standard, not a lower, easier substitute.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>Introducing photosynthesis for the very first time, a teacher assigns students to "design an original experiment evaluating factors influencing an ecosystem's photosynthesis rates" before students have learned even the basic definitions, inputs, and outputs of photosynthesis.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> students are asked to perform a high-level task (design, evaluate) on content they have not yet learned even at the basic recall/understanding level -- the opposite mismatch from Worked Scenario 1.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> for brand-new content, Bloom's levels are typically cumulative -- higher-order tasks generally presume foundational knowledge is already in place; skipping that foundation undermines the higher-order task rather than making the lesson more rigorous.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should first teach and check foundational understand-level content (what photosynthesis is, its basic inputs/outputs), then build toward create/evaluate-level tasks on that foundation, rather than assuming "aim as high as possible on Bloom's" is always the stronger design choice.</li>
            </ol>
            <p class="we-answer">Takeaway: matching cognitive rigor is not "always aim as high on Bloom's as possible" -- higher-order tasks need an appropriate foundation of lower-order knowledge, especially for brand-new topics.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> treating Bloom's taxonomy as "higher is always better" and skipping the needed foundation, OR the opposite error of writing only low-level recall activities for a standard that specifies higher-order thinking. The exam tests both directions of mismatch.</div>
        `,
        checks: [
          {
            prompt: "A standard states, \"students will summarize the main idea of a passage in their own words.\" The teacher's activity has students read short passages and write a one-sentence summary using their own wording. This activity is:",
            choices: ["Correctly matched to the standard's \"understand\" level of cognitive demand", "Mismatched, because summarizing is actually a \"create\"-level task", "Mismatched, because the standard requires memorization only", "Impossible to judge without knowing the students' grade level"],
            answer: 0,
            explain: "Summarizing in one's own words is an \"understand\"-level task in Bloom's taxonomy, and the activity requires exactly that -- a correct match."
          },
          {
            prompt: "A standard requires students to \"analyze the relationship between two historical events.\" Compare two lesson activities: Plan A has students research and separately describe each event's key facts in a written paragraph for each. Plan B has students create a chart identifying how specific actions in the first event directly caused or influenced specific outcomes in the second. Which plan actually matches the standard's Bloom's level, and why does the other one fall short despite looking rigorous?",
            choices: [
              "Plan B -- it requires students to relate and connect the two events (analyze), while Plan A only has students describe each event separately without ever relating them",
              "Plan A -- because writing full paragraphs demonstrates deeper engagement than a chart, regardless of what the paragraphs actually require students to do",
              "Both plans equally match the standard, since both require research into two historical events",
              "Neither plan matches the standard, since analysis can only be assessed through a formal essay"
            ],
            answer: 0,
            explain: "\"Analyze the relationship\" requires connecting the two events, which is exactly what Plan B's cause-and-outcome chart demands. Plan A looks substantial (full paragraphs, real research) but never actually requires relating the two events to each other, so it only reaches a \"describe/understand\" level despite its surface rigor -- a classic Bloom's-level mismatch that looks harder than it is."
          }
        ]
      }
    ]
  },

  "pk-05": {
    title: "Motivation, communication & engagement",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Distinguish intrinsic from extrinsic motivation, apply growth-mindset feedback to both success and failure, and recognize when unmet basic needs -- not a motivation strategy -- are the real barrier to engagement.</p>`,
    sections: [
      {
        heading: "Intrinsic vs. extrinsic motivation",
        body: `
          <p><strong>Intrinsic:</strong> driven by internal interest, curiosity, or satisfaction. <strong>Extrinsic:</strong> driven by outside rewards or consequences. Both are legitimate depending on context, but over-relying on extrinsic rewards -- especially for a task a student already finds interesting -- can backfire through the <strong>overjustification effect</strong>, actually undermining the intrinsic motivation that was already there.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A student spends extra time exploring a math puzzle purely for fun during free time, with no grade or reward attached.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the student engages purely out of interest, with no external reward driving the behavior.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>intrinsic motivation</strong> -- internally driven engagement.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should protect and nurture this kind of engagement (for example, through autonomy, appropriately challenging tasks, and genuine interest-based choice) rather than layering unnecessary rewards on top of it.</li>
            </ol>
            <p class="we-answer">Takeaway: engaging purely out of interest or enjoyment, with no external reward, is intrinsic motivation.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>Students have always loved an open-ended creative science project, doing it enthusiastically for years with no reward attached. This year, the teacher begins offering a small prize for the "best" project. Over time, fewer students engage unless the prize is offered, and enthusiasm for the ungraded, no-prize version drops noticeably.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> an external reward was added to a task students already did for its own sake, and afterward their willingness to engage without the reward decreased.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> this is the <strong>overjustification effect</strong> -- adding extrinsic rewards to an already intrinsically motivating task can crowd out and undermine the original intrinsic motivation.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should be cautious about adding extrinsic rewards to tasks that are already engaging on their own, reserving extrinsic incentives for tasks students find inherently less interesting.</li>
            </ol>
            <p class="we-answer">Takeaway: extrinsic rewards are not automatically helpful -- added to an already intrinsically motivating task, they can reduce genuine engagement rather than boost it.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming more rewards always increase motivation. When a task is already intrinsically engaging, adding extrinsic rewards can backfire; context (was there already intrinsic motivation to protect) matters.</div>
        `,
        checks: [
          {
            prompt: "A student voluntarily stays after class to keep working on a chemistry demonstration she finds fascinating, with no extra credit offered. This is an example of:",
            choices: ["Intrinsic motivation", "Extrinsic motivation", "Negative reinforcement", "Operant conditioning only"],
            answer: 0,
            explain: "Engaging purely out of interest/enjoyment, with no external reward, is intrinsic motivation."
          },
          {
            prompt: "Compare two incentive plans: (A) offering a pizza party to a class that already worked hard and enthusiastically on a collaborative unit long before any reward was mentioned; (B) offering occasional recognition for effort on a tedious, low-interest required grammar drill that students have never shown much natural enthusiasm for. Which plan carries a genuine risk of undermining motivation through the overjustification effect, and why does the other NOT carry that same risk?",
            choices: [
              "Plan A -- because it adds an extrinsic reward to a task the class was already intrinsically motivated to do, risking the overjustification effect; Plan B poses little such risk since there was little pre-existing intrinsic motivation to undermine",
              "Plan B -- because grammar drills are inherently more susceptible to any kind of reward system",
              "Both plans carry an equal risk of undermining motivation, since both involve external incentives",
              "Neither plan carries any risk, since rewards always increase engagement regardless of context"
            ],
            answer: 0,
            explain: "The overjustification effect specifically applies when a reward is layered onto a task that was already intrinsically enjoyable, as in Plan A -- it risks replacing \"I do this because I love it\" with \"I do this for the reward.\" Plan B targets a task with little existing intrinsic motivation, so extrinsic support is a reasonable, low-risk way to build engagement rather than something being undermined."
          }
        ]
      },
      {
        heading: "Growth-mindset feedback",
        body: `
          <p>Growth-mindset-aligned feedback (Dweck) praises process, strategy, and effort -- rather than fixed traits ("you're so smart") -- because research links process-focused feedback to resilience and a belief that ability can grow. This applies not only to praising success, but equally to how a teacher responds to a student's <em>struggle or failure</em>: redirecting toward specific, changeable strategies rather than confirming a fixed, global self-label.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A student solves a hard problem, and the teacher responds, "Your strategy of breaking the problem into smaller steps really paid off."</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the praise names a specific strategy the student used, not a fixed trait like intelligence.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>growth-mindset process praise</strong> -- reinforcing that success came from a specific, repeatable approach.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should consistently name the specific strategy/effort behind a success, so students learn to attribute achievement to actions they can repeat and control.</li>
            </ol>
            <p class="we-answer">Takeaway: praising the specific strategy or effort (process praise) reinforces that ability grows through approach and effort.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A student gets a problem wrong and says, "I'm just bad at math." The teacher wants to respond in a way that supports a growth mindset.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the student is attributing failure to a fixed, global trait ("bad at math") rather than to a specific strategy or effort -- a fixed-mindset statement about failure, not success.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> a growth-mindset-consistent response to failure redirects toward specific, changeable factors (which step went wrong, what strategy to try next) rather than confirming the fixed-trait narrative, even indirectly through comforting reassurance.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should name the specific step that went wrong, frame the mistake as useful information, and suggest a concrete next strategy -- not simply reassure the student they are "not bad at math," which fails to redirect toward process.</li>
            </ol>
            <p class="we-answer">Takeaway: growth-mindset feedback is not just about praising success correctly -- it is equally about how a teacher responds to struggle, redirecting from fixed-trait narratives toward strategy and effort.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> thinking growth-mindset feedback is only about giving positive praise. Responding well to failure -- redirecting to strategy and effort instead of comforting reassurance or confirming a fixed trait -- matters just as much.</div>
        `,
        checks: [
          {
            prompt: "After a student turns in a weak first draft, the teacher says, \"I can see you worked hard organizing your paragraphs -- let's look at how to strengthen your evidence next.\" This is an example of:",
            choices: ["Growth-mindset process feedback", "Fixed-mindset trait praise", "Purely summative feedback", "Extrinsic reward-based feedback"],
            answer: 0,
            explain: "Naming the specific effort/strategy (organizing paragraphs) and pointing to a concrete next step is process-focused, growth-mindset feedback."
          },
          {
            prompt: "A student fails a test and feels discouraged. Compare two teacher responses: (A) \"Don't worry, not everyone is a 'math person' -- you have plenty of other strengths.\" (B) \"Let's look at exactly which step tripped you up so we can adjust your strategy for next time.\" Which response is truly growth-mindset-aligned, and why is the other one NOT, despite sounding kind and supportive?",
            choices: [
              "(B) -- it redirects to a specific, changeable strategy the student can act on; (A) sounds kind but actually reinforces a fixed-trait narrative about the student's ability",
              "(A) -- it protects the student's self-esteem, which is the top priority of growth-mindset feedback",
              "Both are equally growth-mindset-aligned, since both are delivered with a supportive, caring tone",
              "Neither is growth-mindset-aligned, since growth-mindset feedback can only be given after success, not after failure"
            ],
            answer: 0,
            explain: "Response (A) sounds supportive but implicitly confirms a fixed, unchangeable trait (\"not a math person\") rather than redirecting to something the student can control. Response (B) names a specific, changeable factor (which step, which strategy) -- the core of growth-mindset feedback -- showing that surface-level kindness is not the same as growth-mindset framing."
          }
        ]
      },
      {
        heading: "Maslow's hierarchy of needs and readiness to engage",
        body: `
          <p>Maslow's hierarchy (physiological, safety, belonging, esteem, self-actualization) implies that unmet lower-level needs -- hunger, fatigue, feeling unsafe, lacking a sense of belonging -- interfere with a student's ability to engage in higher-order learning and motivation. This applies at every level of the hierarchy, not only in dramatic crisis situations: a student's unmet need for social belonging can suppress engagement just as much as hunger or safety concerns, and the appropriate response is to address the underlying need, not to apply a motivation technique on top of it.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A normally engaged 10th grader is unusually withdrawn today, puts her head down, and does not participate. The teacher learns she has not eaten since the previous day and is worried about a situation at home.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> sudden, out-of-character disengagement tied to unmet basic needs (hunger, family stress) rather than lack of interest in the content.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>Maslow's hierarchy of needs</strong> -- unmet physiological/safety-level needs take priority over and interfere with higher-level academic engagement.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should first address the immediate basic need (offer food if available, connect the student with counseling/support resources, show flexibility) rather than treating this as a motivation or discipline issue.</li>
            </ol>
            <p class="we-answer">Takeaway: address foundational needs before expecting a student to engage with higher-order academic motivation.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A student who transferred mid-year sits alone at lunch, rarely volunteers in class discussion, and hesitates to ask for help even when clearly stuck -- with no indication of hunger or safety concerns, simply because she is new and has not yet formed peer connections.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> disengagement correlates with being new and socially isolated, not with any physiological or safety issue -- this points to the <strong>belonging</strong> level of the hierarchy rather than the more basic, crisis-level needs.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> Maslow's hierarchy applies at the belonging level too -- students need social connection and a sense of belonging before they will take the risk of participating or asking for help, even absent any crisis.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should proactively build belonging (an assigned partner, small-group structures, deliberate invitations into discussion, individual check-ins) rather than assuming the student simply lacks interest or ability.</li>
            </ol>
            <p class="we-answer">Takeaway: Maslow's hierarchy is not only about dramatic crises -- unmet belonging needs alone can suppress engagement and call for proactive relationship-building.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming Maslow's hierarchy only applies to dramatic situations like hunger or an unsafe home. A milder, common case like a new student's unmet need for belonging is just as much a Maslow's-hierarchy issue, and calls for proactive relationship-building rather than an academic motivation technique.</div>
        `,
        checks: [
          {
            prompt: "A student who witnessed a scary altercation on the bus that morning seems anxious and unable to focus on the day's lesson. The teacher's best first step, per Maslow's hierarchy, is to:",
            choices: ["Address the student's immediate emotional/safety need (e.g., a calm check-in, connecting with a counselor) before expecting full academic engagement", "Immediately assign extra practice problems to redirect focus back to content", "Offer a small prize if the student participates fully in the lesson", "Ignore the situation since it did not happen at school"],
            answer: 0,
            explain: "An unmet safety/emotional need takes priority over academic engagement per Maslow's hierarchy; addressing it first is the appropriate response before expecting normal participation."
          },
          {
            prompt: "A previously engaged student has become withdrawn and stopped participating over the past two weeks, with no known safety or physiological concerns identified yet. Compare two teacher responses: (A) introduce a classroom rewards system offering extra credit points for participation to re-motivate the student; (B) check in privately with the student to understand what might be going on, considering whether an unmet need (belonging, stress, etc.) might be the root cause before assuming a motivation problem. Which response correctly applies Maslow's hierarchy, and why does the other fall short?",
            choices: [
              "(B) -- it investigates whether an unmet foundational need is suppressing engagement before applying any motivational strategy; (A) jumps straight to an extrinsic motivation fix without checking whether a foundational need is the actual root cause",
              "(A) -- because extra credit is the most direct way to restore participation regardless of the underlying cause",
              "Both are equally valid first steps, since both are intended to re-engage the student",
              "Neither addresses the situation correctly, since only formal counseling referrals are appropriate for any change in student behavior"
            ],
            answer: 0,
            explain: "Maslow's hierarchy suggests that unmet needs (belonging, safety, physiological) should be identified and addressed before motivational strategies will be effective -- jumping straight to an extrinsic reward (A) skips this diagnostic step and may fail if the true cause is an unmet need rather than a lack of incentive."
          }
        ]
      }
    ]
  },

  "pk-06": {
    title: "Classroom management & climate",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Apply proactive management strategies, choose the least-restrictive-but-proportional response to misbehavior, and know when restorative approaches -- not just punishment or a single reflective question -- are called for.</p>`,
    sections: [
      {
        heading: "Proactive vs. reactive management",
        body: `
          <p>Proactive management (clear routines, engaging pacing, explicitly taught expectations) prevents most misbehavior before it starts and is preferred over relying solely on reactive consequences. Critically, proactive management means actively <em>teaching, modeling, and practicing</em> routines -- not merely posting or announcing a list of rules once.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A teacher posts clear entry routines, has materials ready, and starts class with an engaging warm-up every day, resulting in noticeably fewer disruptions.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> structure and engagement are built in before class even starts, preventing the downtime/ambiguity where misbehavior tends to occur.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>proactive classroom management</strong> -- preventing misbehavior through structure and engagement.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should maintain and reinforce these consistent, low-friction routines all year, since prevention is more effective and less disruptive than repeatedly reacting to problems.</li>
            </ol>
            <p class="we-answer">Takeaway: preventing misbehavior through structure and engagement before it happens is proactive management.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A teacher posts a long list of classroom rules on the wall in August but never explicitly teaches, models, or practices routines with students (such as how to transition between activities); disruptions during transitions remain frequent all year.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> expectations exist on paper but were never explicitly taught, modeled, or practiced, and problems persist specifically at predictable friction points (transitions).</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> merely posting rules is NOT sufficient proactive management -- true proactive management requires explicitly teaching, modeling, and practicing routines, especially at predictable friction points.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should directly teach and rehearse the transition routine (model it, have students practice it, give feedback), reinforcing it consistently early in the year, rather than assuming a posted list alone produces the desired routine.</li>
            </ol>
            <p class="we-answer">Takeaway: proactive management means actively teaching and practicing routines, not simply posting or stating rules once.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> equating "having rules posted" with proactive management. The active teaching, modeling, and practicing of routines is what actually prevents misbehavior -- a posted list alone is a passive step, not sufficient proactive management.</div>
        `,
        checks: [
          {
            prompt: "At the start of the year, a teacher explicitly models and has students practice the exact procedure for turning in late work, resulting in a smooth, low-conflict routine all year. This illustrates:",
            choices: ["Proactive classroom management", "Reactive discipline", "An IEP accommodation", "Extrinsic punishment"],
            answer: 0,
            explain: "Explicitly teaching and practicing a routine before problems arise is the core of proactive management."
          },
          {
            prompt: "Compare two teachers, both of whom describe themselves as using \"proactive management\": Teacher A posts a syllabus listing rules and consequences on day one but never rehearses any routines with students. Teacher B spends the first week of school explicitly modeling and having students practice key routines, with specific feedback. Which teacher is actually using proactive management effectively, and why does the other fall short despite technically having rules in place?",
            choices: [
              "Teacher B -- explicitly teaching, modeling, and practicing routines is what prevents misbehavior; Teacher A's posted list is a passive step that does not by itself establish the routine",
              "Teacher A -- posting clear consequences in writing is the most important proactive step, regardless of whether routines are practiced",
              "Both teachers are equally proactive, since both communicated expectations to students",
              "Neither teacher is being proactive, since true proactive management requires no rules or consequences at all"
            ],
            answer: 0,
            explain: "A posted list of rules communicates expectations but does not build the actual skill/habit of following a routine. Teacher B's explicit modeling and practice is what actually prevents disruptions, which is why proactive management requires more than posting rules -- it requires actively teaching them."
          }
        ]
      },
      {
        heading: "Least-restrictive response first, scaled to severity",
        body: `
          <p>For minor, low-level disruptions, best practice is the least intrusive response that does not halt instruction (proximity, a nonverbal cue) before escalating. But "least-restrictive first" is a starting principle, not a ceiling: as behavior increases in severity, persistence, or begins to affect the whole class (or recruits other students), the response should escalate proportionally. Continuing to use only a minimal response after it has already failed, or after behavior has clearly escalated, under-responds to the actual situation.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A student is quietly off-task, whispering to a neighbor during independent work.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the behavior is minor, low-level, and not disrupting the rest of the class.</li>
              <li><strong>Step 2 -- name the principle:</strong> for minor off-task behavior, the <strong>least-intrusive, instruction-preserving</strong> strategy is the appropriate first step.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should move nearer to the student (proximity control) while continuing to teach, rather than stopping instruction or escalating immediately.</li>
            </ol>
            <p class="we-answer">Takeaway: for minor, low-level disruptions, the least-intrusive response that preserves instruction is the appropriate first step.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>The same student, after being quietly redirected via proximity, instead gets up and begins arguing loudly, refusing to sit down, and disrupting the whole class's ability to continue the lesson.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the behavior has escalated well beyond the original minor off-task whispering -- it is now loud, defiant, and disrupting everyone's learning.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> the <strong>hierarchy of interventions</strong> means starting minimal but escalating proportionally as severity/persistence increases -- continuing to rely only on quiet proximity would now under-respond to a whole-class disruption.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should move to a more direct, private response matched to the higher severity (for example, calmly asking the student to step into the hallway for a brief private conversation) rather than continuing with only the minimal proximity strategy.</li>
            </ol>
            <p class="we-answer">Takeaway: least-restrictive-first means START with minimal intervention for low-level behavior, but escalate the response as severity or persistence increases -- it is a starting principle, not a rule to apply no matter what.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> treating "always use the least restrictive strategy" as an absolute rule regardless of severity, leading to under-responding to escalating or class-disrupting behavior. Start minimal, then scale the response to match the behavior's actual severity and persistence.</div>
        `,
        checks: [
          {
            prompt: "A student taps a pencil repeatedly during a quiz, mildly distracting a nearby classmate. The teacher's best first response is to:",
            choices: ["Use a quiet nonverbal cue or gesture to redirect the student without stopping the quiz", "Immediately take the pencil away and issue a formal warning", "Stop the quiz to address the whole class about respecting others", "Send the student to the office"],
            answer: 0,
            explain: "For a minor, low-level distraction, the least-intrusive response that does not halt instruction (a nonverbal cue) is the appropriate first step."
          },
          {
            prompt: "A student refuses a direct, reasonable instruction for the second time in five minutes, after a first private redirection already failed, and is now quietly encouraging a neighbor to also ignore the teacher. Which response is MOST appropriate, and why are the other options each wrong?",
            choices: [
              "Escalate to a firmer, more formal private consequence per the classroom management plan, since the less-intrusive step already failed and the behavior is now spreading to another student",
              "Repeat the same quiet proximity or nonverbal cue again, since least-restrictive strategies should always be repeated before escalating further",
              "Publicly reprimand the student loudly in front of the class to make an example of the behavior",
              "Ignore it for now since the disruption has not yet affected the whole class"
            ],
            answer: 0,
            explain: "The first, less-intrusive redirection already failed, and the behavior is now recruiting another student -- both signal a need to escalate, not repeat the same quiet proximity cue or ignore it. A loud public reprimand is more intrusive than necessary and risks public humiliation, which is not best practice; a firmer but still private, planned consequence is the proportional next step."
          }
        ]
      },
      {
        heading: "Restorative practices vs. purely punitive discipline",
        body: `
          <p>Restorative practices respond to harm (conflict, disruption affecting the classroom community) by focusing on repairing relationships and helping students understand the impact of their actions and take real accountability -- for example, through structured restorative conversations or circles. This contrasts with purely punitive approaches that remove/punish without addressing the relationship or teaching accountability. Research links restorative approaches to better long-term behavior change and school climate. Importantly, "restorative" does not mean "no consequences" -- genuine restorative practice still requires real accountability and a concrete plan to repair harm, not just a single feelings-check question.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>Two students had a heated conflict during a group project that hurt feelings and disrupted the group's work. After things settle, the teacher facilitates a structured conversation where both students describe what happened, how it affected them and others, and agree on how to repair the relationship and work together going forward.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the response focuses on understanding impact and repairing the relationship, with both students actively involved in deciding how to make things right.</li>
              <li><strong>Step 2 -- name the principle:</strong> this is <strong>restorative practice</strong> -- addressing harm through accountability and repair rather than removal or punishment alone.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should use structured restorative conversations for interpersonal harm, since this teaches accountability and empathy and repairs the classroom's social fabric in a way punishment alone does not.</li>
            </ol>
            <p class="we-answer">Takeaway: restorative approaches address relational/community harm and teach accountability and repair, rather than relying only on punishment.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A student intentionally damages another student's project out of anger. The teacher asks only, "how do you think that made them feel?" and moves on, with no further accountability, restitution, or follow-through -- considering this "restorative." The affected student and family feel there were no real consequences.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> only a single reflective question was used, with no concrete accountability, restitution, or follow-up plan -- restorative LANGUAGE without the substance of the approach.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> genuine restorative practice is not simply "asking how someone feels" or avoiding consequences -- it still requires meaningful accountability and a concrete repair plan (for example, replacing or fixing the damaged work, a facilitated genuine apology, follow-through), combined with relationship repair.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should follow a more complete restorative process -- facilitating genuine acknowledgment of harm, agreeing on concrete repair, and ensuring real accountability -- rather than treating one reflective question as sufficient.</li>
            </ol>
            <p class="we-answer">Takeaway: restorative practices require real accountability and concrete repair, not just a single feelings-check question mistaken for "being restorative."</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> assuming "restorative" means "no real consequences," or reducing it to a single feel-good question. Restorative practice is a discipline PHILOSOPHY that still includes meaningful accountability and repair, not an absence of consequences.</div>
        `,
        checks: [
          {
            prompt: "After two students spread rumors about each other online that affected classroom dynamics, the teacher facilitates a guided conversation where both students acknowledge the impact of their actions and agree on concrete steps to rebuild trust. This best illustrates:",
            choices: ["Restorative practice", "Purely punitive discipline", "An IEP accommodation", "Extrinsic reward system"],
            answer: 0,
            explain: "Facilitating acknowledgment of harm and agreement on concrete repair steps, rather than only punishing, is the core of restorative practice."
          },
          {
            prompt: "A student repeatedly disrupts a small group, and one group member is visibly upset. Compare three teacher responses: (A) remove the disruptive student from the group permanently with no further conversation; (B) prompt the disruptive student to give a quick apology to the group and move on; (C) facilitate a structured conversation where the student acknowledges the specific impact of the disruptions, the group member shares how it affected them, and they agree on a concrete plan for how the student will participate going forward, with a follow-up check-in. Which response is genuinely restorative, and why do the other two fall short?",
            choices: [
              "(C) -- it combines real acknowledgment of impact, a concrete repair plan, and follow-through accountability; (A) is purely punitive with no repair, and (B) is only a shallow, prompted apology without genuine reflection or a real plan",
              "(B) -- because a prompted apology directly addresses the upset group member's feelings, which is the main goal of restorative practice",
              "(A) -- because removing the disruptive student immediately protects the rest of the group from further harm, which is the top priority",
              "All three responses are equally restorative, since all three involve some form of teacher intervention"
            ],
            answer: 0,
            explain: "(A) is purely punitive (removal, no repair or accountability conversation). (B) uses restorative-sounding language (an apology) but lacks genuine reflection, a concrete plan, or follow-through -- the same shallow pattern as Worked Scenario 2. Only (C) combines real accountability, a repair plan, and follow-up, which is what distinguishes genuine restorative practice from either punishment or a token gesture."
          }
        ]
      }
    ]
  },

  "pk-07": {
    title: "Families, collaboration & professional ethics",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Apply FERPA-aligned confidentiality norms, use the right first response to colleague disagreements versus genuine misconduct concerns, and correctly distinguish mandatory-reporting situations from professional-boundary situations.</p>`,
    sections: [
      {
        heading: "Confidentiality (FERPA principles)",
        body: `
          <p>Student records and performance information should only be shared with those who have a legitimate educational need -- the student, parents/guardians of a minor, and staff with a direct instructional or support role -- not casually with other students, unrelated parents, or in a setting where others might overhear. Confidentiality depends on both WHO is asking (do they have a legitimate right to know) AND HOW/WHERE the information is shared.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A parent asks a teacher how another, unrelated student performed on a test, purely out of curiosity.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the parent asking has no relationship to the student whose information is being requested.</li>
              <li><strong>Step 2 -- name the principle:</strong> this parent has no <strong>legitimate educational interest</strong> in that unrelated student's information under FERPA-aligned norms.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should decline to share the information, regardless of the parent's good intentions or curiosity.</li>
            </ol>
            <p class="we-answer">Takeaway: individual student information is shared only with those who have a legitimate educational interest -- an unrelated parent does not qualify.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>At parent-teacher night, a parent who DOES have every right to information about their own child asks the teacher to discuss the child's specific grade loudly, in a hallway crowded with other waiting families.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the person asking has a legitimate right to this specific information (it is their own child), but the SETTING risks exposing it to unauthorized listeners nearby.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> confidentiality depends on both who is asking AND how/where information is shared -- even a legitimately entitled parent's information should be discussed privately, not in a way that could be overheard by others without a legitimate need to know.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should politely suggest moving the conversation to a private space (or a scheduled follow-up) before discussing specific performance details, even with a parent who has every right to that information.</li>
            </ol>
            <p class="we-answer">Takeaway: confidentiality is about both who has a right to know AND making sure information isn't shared in a way that exposes it to those who don't.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> thinking confidentiality is satisfied simply by confirming the requester has a right to the information, while ignoring whether the setting or manner of disclosure could expose it to others who do not.</div>
        `,
        checks: [
          {
            prompt: "A caller who identifies themselves as a student's grandparent asks for the student's current grades over the phone, but the teacher has no record on file confirming this person has any legal or documented relationship to the student. The appropriate response is to:",
            choices: ["Decline to share the information over the phone and direct the caller to verify their relationship through the school's official channels first", "Share the grades since grandparents are typically trustworthy family members", "Share only a general description of performance, not exact grades", "Ask the caller to promise not to share the information further, then proceed"],
            answer: 0,
            explain: "Without verification of a legitimate educational interest or documented relationship, information should not be shared based on an unverified phone claim -- proper verification through official channels comes first."
          },
          {
            prompt: "Compare two requests for student information: (A) a co-teacher who does not currently teach a given student casually asks about that student's IEP details in the staff lounge, out of curiosity; (B) a school counselor currently working directly with a student on a behavior plan asks the teacher for relevant academic performance details to coordinate support. Which request should be granted, and why does simply \"being a school employee\" not settle the question?",
            choices: [
              "(B) should be granted -- the counselor has a current, legitimate educational interest tied to an active support role; (A) should be declined because casual curiosity from a colleague with no current instructional or support role does not qualify, even though both are school employees",
              "(A) should be granted, since any staff member at the same school has an automatic right to student information",
              "Both should be granted, since both requesters work at the school and have professional reasons for asking",
              "Neither should be granted, since only administrators can ever access student information"
            ],
            answer: 0,
            explain: "Being a school employee alone is not sufficient -- what matters is whether the person has a legitimate educational interest tied to a CURRENT instructional or support role with that specific student. The counselor's active role in supporting the student qualifies; the co-teacher's casual curiosity, with no current role for that student, does not."
          }
        ]
      },
      {
        heading: "Professional collaboration",
        body: `
          <p>Routine professional disagreements (differing opinions on grading approach, teaching style, or materials) call for direct, private, respectful conversation with the colleague first. But genuine concerns about student safety, welfare, or a potential policy/ethics violation are a different category -- these carry a professional obligation to report through the appropriate formal channel (an administrator or designated reporting process), since peer-to-peer conversation alone does not fulfill that responsibility.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A teacher disagrees with a co-teacher's grading approach on a shared assignment.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> this is a difference of professional opinion/approach, with no safety or ethics concern involved.</li>
              <li><strong>Step 2 -- name the principle:</strong> routine professional disagreements should be addressed through <strong>direct, private, respectful conversation</strong> with the colleague first.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should raise the concern privately and directly with the co-teacher, rather than complaining to others or undermining them in front of students.</li>
            </ol>
            <p class="we-answer">Takeaway: direct, private, respectful communication with the colleague is the professionally appropriate first step for routine disagreements.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A teacher overhears a colleague make a comment to a student that seems demeaning and potentially crosses a line regarding the student's wellbeing -- something that could constitute a policy violation, not simply a difference in teaching style.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the concern involves a potential safety/wellbeing/policy violation affecting a student, not a routine difference of professional opinion.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> genuine safety, welfare, or policy-violation concerns carry a professional obligation to report through the appropriate <strong>formal channel</strong> (an administrator or designated reporting process) -- peer-to-peer conversation alone does not fulfill this responsibility, unlike a routine disagreement.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should escalate this concern to the appropriate administrator or reporting channel, rather than treating it the same as a stylistic or pedagogical disagreement to be resolved one-on-one.</li>
            </ol>
            <p class="we-answer">Takeaway: routine professional disagreements go through private conversation first, but genuine safety, ethics, or policy concerns carry a duty to report through formal channels.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> treating every type of concern about a colleague the same way -- either always "keep it between us" or always "report everything formally." Recognize which category a concern falls into, since each calls for a different first step.</div>
        `,
        checks: [
          {
            prompt: "A teacher disagrees with a colleague's choice of a somewhat outdated instructional video and wants to suggest a more current alternative. The most professional first step is to:",
            choices: ["Discuss the concern directly and privately with the colleague", "Tell students the video their teacher chose is outdated", "Complain to other colleagues in the staff lounge", "Report the colleague to the administrator immediately"],
            answer: 0,
            explain: "This is a routine professional/pedagogical disagreement with no safety or ethics concern, so direct, private, respectful conversation is the appropriate first step."
          },
          {
            prompt: "Compare two colleague-concern scenarios: (A) a colleague consistently grades noticeably more harshly than the department's shared rubric intends; (B) a colleague was overheard making a demeaning, potentially discriminatory remark to a student in front of the class. Which of these should be reported to an administrator rather than resolved through a private colleague conversation alone, and why shouldn't the other one necessarily be escalated the same way?",
            choices: [
              "(B) should be reported to an administrator, since a potentially discriminatory remark toward a student is a welfare/ethics concern, not a routine disagreement; (A) is a professional/pedagogical difference best raised directly and privately first",
              "(A) should be reported to an administrator, since grading inconsistencies affect every student's official grades and are therefore more serious",
              "Both should be handled the exact same way, through a private conversation with the colleague first, since both involve a colleague's classroom practice",
              "Both should be reported directly to an administrator, since any concern about a colleague should always go through formal channels"
            ],
            answer: 0,
            explain: "Grading approach differences (A) are a routine professional/pedagogical matter, appropriately addressed through direct private conversation first. A demeaning, potentially discriminatory remark to a student (B) is a welfare/ethics concern that carries a reporting obligation through formal channels -- treating it as a private, informal matter between colleagues would not fulfill that responsibility."
          }
        ]
      },
      {
        heading: "Mandatory reporting and professional boundaries",
        body: `
          <p>Teachers are <strong>mandated reporters</strong>: any reasonable suspicion of child abuse or neglect must be reported to the appropriate authority (such as child protective services and/or the school's designated reporting contact) per state law and school policy. Teachers do not need to investigate, confirm, or gather proof themselves first, and cannot promise a student confidentiality about such a disclosure. This is a distinct issue from <strong>professional boundaries</strong> -- maintaining appropriate, transparent, professional relationships and communication channels with students (school platforms, not personal social media or late-night personal texting), which protects both students and teachers even when the underlying intention is purely supportive.</p>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>A student privately discloses to a teacher that a family member at home hits them when angry, and asks the teacher to keep it secret and not tell anyone.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the disclosure suggests possible abuse, and the student explicitly requests secrecy -- a mandated-reporter trigger regardless of the student's wishes.</li>
              <li><strong>Step 2 -- name the principle:</strong> teachers are <strong>mandated reporters</strong> -- reasonable suspicion of abuse/neglect must be reported; a teacher cannot promise confidentiality about this kind of disclosure or wait to independently verify it.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should calmly tell the student this is important enough that they must tell someone who can help (without promising secrecy), then follow the school's mandatory reporting procedure immediately.</li>
            </ol>
            <p class="we-answer">Takeaway: mandatory reporting obligations override a student's request for secrecy -- reasonable suspicion alone requires a report.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>A student going through a hard time at home starts frequently texting a teacher personal, non-academic messages late at night, and asks to connect on the teacher's personal social media so they can talk more easily outside school. The teacher, wanting to be supportive, is tempted to accept.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- identify the cue:</strong> the request is about ongoing, personal, informal communication outside official school channels -- a professional-boundaries issue, not itself a disclosure of abuse/neglect requiring mandatory reporting.</li>
              <li><strong>Step 2 -- name the principle and connect it:</strong> professional boundary norms call for appropriate, transparent relationships with students (school email/platforms, not personal social media or late-night texting), protecting both the student and the teacher, even when the intention is purely supportive.</li>
              <li><strong>Step 3 -- state the implication for teaching:</strong> the teacher should decline the personal social media connection and late-night texting, redirect communication to school-sanctioned channels, and connect the student with the school counselor for the underlying hardship.</li>
            </ol>
            <p class="we-answer">Takeaway: supportive intent does not excuse blurring professional boundaries -- transparent, appropriate channels protect both student and teacher, and this is a distinct issue from mandatory reporting.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> conflating "a student is struggling and confides in me" with either always being a mandatory-reporting trigger, or an invitation to build an informal personal relationship. Reasonable suspicion of abuse/neglect requires a report; a student seeking emotional connection calls for referral to appropriate support through transparent channels, not either silence or personal closeness.</div>
        `,
        checks: [
          {
            prompt: "A student shows unexplained bruises and becomes evasive and anxious when gently asked about them, avoiding the question. The teacher's obligation is to:",
            choices: ["Report reasonable suspicion to the designated authority per mandatory reporting policy, without needing to investigate or confirm first", "Continue observing over the next several weeks before deciding whether to say anything", "Ask the student's friends what they know before taking any action", "Say nothing unless the student explicitly asks for help"],
            answer: 0,
            explain: "Mandated reporters act on reasonable suspicion, not proof -- the teacher's role is to report to the appropriate authority, not to investigate or confirm the situation independently."
          },
          {
            prompt: "Compare two situations: (A) a student mentions offhand that a parent \"yells sometimes but it's not a big deal,\" said casually with no other signs of distress; (B) a student asks the teacher for a personal favor -- a ride home alone after school -- unrelated to any disclosure of harm. Which of these carries a legal/ethical reporting obligation regardless of the teacher's personal judgment about how serious it sounds, and which is instead a professional-boundaries issue to be declined and redirected?",
            choices: [
              "(A) requires reporting the reasonable suspicion, even though it sounds mild, because mandated reporters report reasonable suspicion, not proven certainty; (B) is a professional-boundaries issue that should be declined and redirected to an appropriate, transparent arrangement",
              "(B) requires a mandatory report, since any request involving being alone with a student off school grounds is automatically a reportable safety concern",
              "Neither requires any action, since (A) sounds minor and (B) is simply a student being friendly",
              "Both require an identical response -- reporting to child protective services -- since both scenarios involve some level of student welfare"
            ],
            answer: 0,
            explain: "Mandated reporters must report reasonable suspicion of abuse or neglect even when a disclosure sounds mild or is downplayed by the student -- the teacher does not get to decide it's \"not a big deal\" and skip reporting. The ride-home request, while it should be declined, is a professional-boundaries matter (about maintaining appropriate, transparent arrangements) rather than a disclosure requiring a mandatory report."
          }
        ]
      }
    ]
  },

  "pk-08": {
    title: "Constructed-response writing patterns",
    domain: "pedagogy",
    intro: `<p><strong>Goal:</strong> Internalize a repeatable structure for NES constructed-response prompts, and learn to diagnose exactly which piece is missing or weak in a near-miss response, so you can write and self-check a strong answer under time pressure.</p>`,
    sections: [
      {
        heading: "The 4-part CR structure",
        body: `
          <p>A strong constructed response: (1) states a clear <strong>claim/strategy</strong>, (2) grounds it in a <strong>theory/principle</strong> from the domains (cite it by name), (3) gives a <strong>specific classroom example</strong> tied to the scenario given, (4) explains <strong>why</strong> it addresses the stated problem/goal.</p>
          <div class="callout">Graders reward specificity. "I would differentiate instruction" alone scores low; naming the exact strategy and connecting it to the scenario's details scores high.</div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>CR prompt: a student disengages during independent practice but thrives in group discussion. Describe an instructional strategy to address this.</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- extract the specific cue from the prompt:</strong> "thrives in group discussion" signals a social/relational strength to leverage, not a discipline or ability problem.</li>
              <li><strong>Step 2 -- state a specific claim/strategy:</strong> name a concrete strategy, such as cooperative learning structures (e.g., think-pair-share), rather than a vague generality like "differentiate instruction."</li>
              <li><strong>Step 3 -- ground it in a named principle:</strong> connect it explicitly to the idea that peer interaction and social engagement support motivation for students who are energized by discussion.</li>
              <li><strong>Step 4 -- give a scenario-specific example and explain why:</strong> describe pairing this student for a think-pair-share during independent practice time, explaining that this keeps them engaged by leveraging their strength rather than fighting it.</li>
            </ol>
            <p class="we-answer">Takeaway: strong CR responses hit all 4 parts explicitly and tie the example back to the exact details given in the prompt.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>CR prompt: a student consistently rushes through open-ended writing assignments, turning in minimal, surface-level responses, though classroom discussion shows the student has much deeper ideas verbally. A near-miss sample response says: "Have the student talk through their ideas orally with a partner before writing, using a quick partner-talk activity right before the writing task begins."</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- check the response against the 4 parts:</strong> it has a claim/strategy (oral rehearsal before writing) and a scenario-specific example (a partner-talk activity before writing) -- but it never explicitly names or explains WHY this works.</li>
              <li><strong>Step 2 -- name what's missing and why it matters:</strong> the response is missing the "principle" component -- it never states that oral language lets a student externalize and organize ideas they already have before the added cognitive demand of writing, which is what shows the grader genuine understanding rather than a lucky guess.</li>
              <li><strong>Step 3 -- revise the response to add the missing part:</strong> add an explicit sentence naming the principle -- oral rehearsal reduces the cognitive load of simultaneously generating and writing ideas, letting the student's deeper thinking surface before it's lost to the difficulty of writing it down.</li>
            </ol>
            <p class="we-answer">Takeaway: even a response with a good strategy and a good scenario-specific example can score in the middle range if it never explicitly names and explains the underlying principle -- check your response against all 4 parts, not just 2 or 3.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> writing a response with a correct-sounding strategy and a nice example but forgetting to explicitly state the WHY/principle. Graders cannot infer your reasoning -- it must be written out.</div>
        `,
        checks: [
          {
            prompt: "A CR prompt describes a 9th grade science student who struggles to stay focused during long lecture segments but is highly engaged during hands-on lab activities. Which response best follows the 4-part CR structure?",
            choices: [
              "\"I would incorporate more hands-on, inquiry-based activities (claim), since active engagement with materials supports sustained attention for students who disengage during passive listening (principle), for example replacing part of the lecture with a short hands-on demonstration the student can manipulate directly (example), which keeps the student engaged by working with their strength instead of fighting a format that doesn't suit them (why).\"",
              "\"I would differentiate instruction for this student.\"",
              "\"This student probably just has an attention problem and should see a specialist.\"",
              "\"I would let the student skip the lecture portions entirely.\"",
            ],
            answer: 0,
            explain: "Only the hands-on, inquiry-based response names a specific strategy, ties it to a principle, gives a concrete scenario-specific example, and explains why it works -- the full 4-part structure graders look for."
          },
          {
            prompt: "For the SAME prompt (a student who disengages during independent practice but thrives in group discussion), compare two candidate responses: (A) \"I would use cooperative learning strategies like think-pair-share, since peer interaction supports engagement for socially-motivated learners, by pairing this student with a partner during independent work time, which keeps them engaged by leveraging their strength.\" (B) \"I would use more group work in my classroom because working with others is generally good for most students and can help with a variety of issues.\" Which response scores higher, and why does the other one fall short despite naming a similar strategy?",
            choices: [
              "(A) -- it names a specific strategy, an explicit principle, and a scenario-specific example with a clear \"why\"; (B) is vague and generic, never tying the strategy to this specific student's described strength or explaining why it addresses this exact problem",
              "(B) -- it applies more broadly to \"most students,\" which shows greater instructional range and flexibility",
              "Both are equally strong, since both recommend a group-work-based strategy",
              "Neither is strong, since group work is never an appropriate CR strategy"
            ],
            answer: 0,
            explain: "(B) uses similar surface language (\"group work\") but is generic and untethered to the scenario's specific detail (thriving in group discussion, disengaging during independent practice) and gives no specific reasoning for why it addresses this student's particular pattern -- exactly the kind of \"vague-but-plausible\" response the CR rubric penalizes, versus (A)'s full, scenario-specific 4-part structure."
          }
        ]
      },
      {
        heading: "Common CR scoring pitfalls",
        body: `
          <ul>
            <li>Restating the prompt or general good practice without naming a specific strategy.</li>
            <li>Naming a strategy but never explaining <em>why</em> it fits this specific scenario.</li>
            <li>Ignoring details given in the scenario (grade level, subject, specific behavior or population described).</li>
            <li>Recommending a strategy that sounds specific and reasonable in general, but is not actually well-matched to a key detail in the scenario.</li>
          </ul>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 1</div>
            <p><em>Sample response to a CR prompt about a disengaged student: "The teacher should differentiate instruction and use good classroom management."</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- read the sample response critically:</strong> it contains only generic educational buzzwords, with no specific strategy named at all.</li>
              <li><strong>Step 2 -- check it against the pitfall list:</strong> it restates general good practice without naming a specific strategy, without connecting to any scenario detail, and without explaining why it would address the stated problem -- hitting multiple pitfalls at once.</li>
              <li><strong>Step 3 -- state the fix:</strong> replace it with a specific, named strategy (for example, tiered assignments by readiness) explicitly tied to a described scenario detail, with an explanation of why it resolves the stated problem.</li>
            </ol>
            <p class="we-answer">Takeaway: generic, buzzword-only responses fail even when the buzzwords themselves are technically accurate terms, because they show no application of understanding to the specific scenario.</p>
          </div>
          <div class="worked-example">
            <div class="we-label">Worked Scenario 2</div>
            <p><em>CR prompt describes an English Language Learner at an intermediate proficiency level who understands most classroom content but rarely volunteers to speak in whole-class discussion. A sample response recommends "cold-calling the student more often to force them to practice speaking in front of the class."</em></p>
            <ol class="we-steps">
              <li><strong>Step 1 -- check whether the response accounts for every relevant scenario detail:</strong> the response addresses "needs more speaking practice" in general, but ignores that cold-calling an anxious intermediate-proficiency language learner unpredictably in front of peers can raise anxiety and shut the student down rather than build confidence.</li>
              <li><strong>Step 2 -- name the pitfall:</strong> the response ignores a key scenario detail (this is an ELL student at intermediate proficiency, a population for whom unplanned public speaking can be counterproductive), leading to a strategy that is not actually well-matched to the situation, even though it "sounds like" a real strategy.</li>
              <li><strong>Step 3 -- state the fix:</strong> revise to a strategy that accounts for the detail, such as structured, lower-stakes speaking opportunities (partner talk, small groups, or advance notice before being called on) that build confidence gradually, and explain why this fits an intermediate-proficiency ELL student's needs.</li>
            </ol>
            <p class="we-answer">Takeaway: even a response with a clearly named, real strategy can score poorly if it ignores a key detail in the scenario that should have shaped WHICH strategy is appropriate.</p>
          </div>
          <div class="callout"><strong>Common mistake:</strong> focusing so much on naming SOME specific strategy that you stop checking whether that particular strategy is actually well-matched to every relevant detail in the scenario (grade level, subject, specific population or need described).</div>
        `,
        checks: [
          {
            prompt: "A CR response to a prompt about a student who finishes work early and becomes disruptive says: \"The teacher should give the student a sticker for good behavior.\" What is the primary weakness of this response?",
            choices: ["It does not address the root cause of the disruption (lack of engaging follow-up work) and is not grounded in a stated instructional principle", "It is too long for a constructed response", "It fails to mention a learning theorist by name", "It uses too much educational jargon"],
            answer: 0,
            explain: "The response offers a surface-level reward without addressing why the student is disruptive (likely a need for engaging extension work) or explaining the reasoning behind the suggestion -- a specific, principle-grounded, scenario-connected strategy would score much higher."
          },
          {
            prompt: "Two CR responses to the SAME prompt (a student who is highly engaged in class discussion but consistently rushes and gives minimal effort on written homework) are: (A) \"The teacher should improve engagement and provide good feedback to help this student.\" (B) \"The teacher should require the student to submit a short oral recording explaining their homework answers before turning in the written version, since verbalizing ideas first, similar to think-aloud strategies, can help capture the deeper thinking this student already shows in discussion but skips in writing.\" Which specific pitfall does response (A) illustrate, distinct from an otherwise-reasonable-but-mismatched strategy?",
            choices: [
              "Response (A) illustrates the \"vague, generic, no specific strategy\" pitfall -- it names no concrete strategy at all and is not tied to any scenario detail, unlike a response that names a real but mismatched strategy",
              "Response (A) illustrates the pitfall of ignoring a key scenario detail, the same pitfall as the ELL cold-calling example",
              "Response (A) illustrates no pitfall at all, since \"improve engagement\" is a valid educational goal",
              "Response (B) illustrates the vague/generic pitfall, since it is longer than response (A)"
            ],
            answer: 0,
            explain: "Response (A) never names any specific strategy at all -- it is purely generic language (\"improve engagement,\" \"good feedback\") with no scenario connection, which is the vague/generic pitfall, distinct from the different pitfall (as in the ELL example) of naming a real, specific strategy that turns out to be mismatched to a key scenario detail. Response (B), by contrast, names a specific, scenario-tied strategy with reasoning."
          }
        ]
      }
    ]
  }
});
