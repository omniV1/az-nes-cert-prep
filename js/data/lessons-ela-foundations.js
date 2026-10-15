/* Adult-from-scratch ELA Foundation Bootcamp for NES English Language Arts (NT301). */
(function () {
  const { section, check } = window.LessonKit;

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "efdn-01": {
      title: "Parts of speech and sentence anatomy",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Rebuild the sentence from the ground up. You will name a word by the job it does in this sentence, then find the subject and predicate that make a complete thought, and finally tell objects from complements. NES grammar items punish dictionary-label guessing; they reward a function test you can run under time pressure.</p>`,
      sections: [
        section(
          "Parts of speech are jobs, not permanent name tags",
          "A word is a tool. The same spelling can do different jobs in different sentences. Ask what the word is doing here, not what a list says it 'is.'",
          "English sorts words into eight jobs: noun (names a person, place, thing, or idea), pronoun (stands in for a noun), verb (shows action or a state of being), adjective (modifies a noun or pronoun), adverb (modifies a verb, adjective, or other adverb), preposition (links a noun/pronoun to the sentence as a relationship of time, place, or manner), conjunction (joins words, phrases, or clauses), and interjection (a burst of feeling, grammatically detachable). Mastery is a test, not a memorized inventory: if you can replace the word with a known noun, it is working as a noun; if it answers how, when, where, or to what degree, it is working as an adverb.",
          `Job test &rarr; label the function, then confirm by substitution<br>
          <table>
            <tr><th>Job</th><th>Question it answers</th><th>Swap test</th></tr>
            <tr><td>Noun</td><td>Who or what?</td><td>Can a name or the/a + thing replace it?</td></tr>
            <tr><td>Verb</td><td>What happens, or what is it?</td><td>Can it take tense (walk / walked)?</td></tr>
            <tr><td>Adjective</td><td>Which one? What kind?</td><td>Can it sit next to a noun?</td></tr>
            <tr><td>Adverb</td><td>How / when / where / how much?</td><td>Can very or yesterday stand in?</td></tr>
            <tr><td>Preposition</td><td>Relates a noun to the rest</td><td>Does a noun follow as its object?</td></tr>
          </table>
          Sample: The weary traveler slowly crossed the river.<br>
          weary = adjective (what kind of traveler); slowly = adverb (how crossed); river = noun (object of crossed).`,
          {
            label: "function test on a full sentence",
            problem: "Name the job of each bold word: <em>After the storm, a <strong>light</strong> rain <strong>light</strong>ed the fields, and the farmers worked <strong>light</strong>ly until dusk.</em> (Treat the second bold as the verb <em>lighted</em>.)",
            steps: [
              "<strong>Do not trust the spelling:</strong> <em>light</em> can be noun, verb, adjective, or adverb. Run a job test in each slot.",
              "<strong>First <em>light</em>:</strong> it sits before the noun <em>rain</em> and answers 'what kind?' Substitution: a <em>gentle</em> rain. Job = adjective.",
              "<strong><em>lighted</em>:</strong> it carries past tense and tells what the rain did. Substitution: rain <em>touched</em> the fields. Job = verb.",
              "<strong><em>lightly</em>:</strong> it answers 'how did they work?' and modifies the verb <em>worked</em>. Substitution: worked <em>gently</em>. Job = adverb."
            ],
            answer: "Answer: adjective, then verb, then adverb — same root, three jobs."
          },
          {
            label: "noun versus verb versus gerund",
            problem: "In which sentence is <em>running</em> a noun (a gerund naming an activity), not a verb?",
            steps: [
              "<strong>Sentence A:</strong> The horse is running toward the gate. <em>Is running</em> is the verb phrase; <em>running</em> is the present participle of the action.",
              "<strong>Sentence B:</strong> Running exhausted the messenger. Ask 'what exhausted the messenger?' The answer is the activity of running. A noun can be a subject; a finite verb cannot.",
              "<strong>Confirm:</strong> you can replace the subject with <em>the race</em> or <em>that activity</em>: The race exhausted the messenger. You cannot put a tense on this <em>running</em> (you would not say 'ran exhausted the messenger').",
              "<strong>Exam transfer:</strong> NES items love -ing words. If the -ing word is the subject or object, it is a gerund (noun). If it is part of the verb phrase or a modifier, it is a participle (verb form)."
            ],
            answer: "Answer: Sentence B — <em>Running</em> names the activity that did the exhausting, so it is a gerund."
          },
          { problem: "Label each word in: <em>Yes, the old lantern flickered brightly above us.</em>", hint: "Start with the verb (<em>flickered</em>). Then ask who flickered (subject noun). Then sort the leftover modifiers and the preposition <em>above</em>." },
          "Treating a word's most common dictionary entry as its job in every sentence. <em>After</em> is a preposition in 'after the rain' and a subordinating conjunction in 'after the rain stopped.' The slot, not the spelling, decides.",
          [
            check("In 'Hope is the thing with feathers' (Dickinson), the word <em>Hope</em> functions as a", ["Noun — it names an idea and is the subject of <em>is</em>", "Verb — it tells what someone does", "Adjective — it describes feathers", "Adverb — it tells how hope behaves"], 0, "Ask 'who or what is the thing with feathers?' The answer is Hope. An abstract idea used as a subject is still a noun. It is not performing an action; <em>is</em> is the verb."),
            check("Which sentence uses <em>well</em> as an adverb rather than as a noun or adjective?", ["The messenger spoke well before the council.", "The well in the courtyard ran dry.", "She is well after the fever.", "A well argument needs evidence."], 0, "<em>Spoke well</em> answers 'how did the messenger speak?' so <em>well</em> modifies a verb (adverb). In the second sentence <em>well</em> is a noun (a water source). In the third it is an adjective meaning healthy. The fourth is ungrammatical if <em>well</em> is forced into an adjective slot that wants <em>good</em>.")
          ]
        ),
        section(
          "A sentence is a subject plus a predicate that can stand as a complete thought",
          "You already know words have jobs. A sentence is not 'words with a capital and a period.' It is a complete thought: someone or something (subject) does or is something (predicate).",
          "The simple subject is the main noun or pronoun. The complete subject is that noun plus all its modifiers. The simple predicate is the verb (or verb phrase). The complete predicate is the verb plus everything that completes or modifies it. A fragment is missing a subject, a finite verb, or a complete thought (often because it is only a dependent clause). Length is not completeness: a three-word sentence can be whole, and a twenty-word -ing phrase can be a fragment.",
          `Split the sentence at the verb:<br>
          [ complete subject ] | [ complete predicate ]<br>
          The copper kettle on the stove | hissed until dawn.<br>
          simple subject = kettle &nbsp;|&nbsp; simple predicate = hissed<br><br>
          Completeness test: Who or what? + Did/was what? + Can it stand alone as an answer to a question?<br>
          Fragment: After the harbor bell rang. (subordinator <em>After</em> leaves the thought unfinished)`,
          {
            label: "finding simple and complete parts",
            problem: "Identify the simple subject, complete subject, simple predicate, and complete predicate in: <em>The weary traveler from the inland hills slowly crossed the swollen river at dusk.</em>",
            steps: [
              "<strong>Find the finite verb first:</strong> what is happening? <em>crossed</em>. That is the simple predicate. The complete predicate is everything that tells about the crossing: <em>slowly crossed the swollen river at dusk</em>.",
              "<strong>Ask who crossed:</strong> not <em>hills</em> and not <em>river</em> (those are objects of prepositions). The traveler did the crossing. Simple subject = <em>traveler</em>.",
              "<strong>Gather modifiers of the subject:</strong> <em>The weary traveler from the inland hills</em> is the complete subject.",
              "<strong>Check:</strong> Traveler crossed. That kernel is a complete thought. Everything else is modification."
            ],
            answer: "Answer: simple subject <em>traveler</em>; complete subject <em>The weary traveler from the inland hills</em>; simple predicate <em>crossed</em>; complete predicate <em>slowly crossed the swollen river at dusk</em>."
          },
          {
            label: "the completeness test on look-alikes",
            problem: "Which of these is a complete sentence, and why do the others fail? (A) Because I could not stop for Death. (B) He kindly stopped for me. (C) The carriage held just ourselves and Immortality, rolling past the school.",
            steps: [
              "<strong>(A) Dickinson's opening line as written here is a dependent clause:</strong> <em>Because</em> is a subordinator. 'Because I could not stop for Death' cannot stand alone; it answers 'why' but never states an independent claim. Fragment.",
              "<strong>(B) Who?</strong> <em>He</em>. Did what? <em>kindly stopped for me</em>. No subordinator. It can stand alone. Complete sentence. (Dickinson's next line is exactly this independent clause.)",
              "<strong>(C) looks long, so students call it complete.</strong> The core 'The carriage held just ourselves and Immortality' is a sentence, but the added <em>rolling past the school</em> is only a participial phrase if it is punctuated as a second 'sentence.' As written with a comma splice into a phrase, the first part is complete; if someone wrote only 'Rolling past the school,' that would be a fragment. The trap is treating a modifier as a second sentence.",
              "<strong>Exam transfer:</strong> If a choice starts with because, although, when, if, or who (as a relative), run the stand-alone test. A capital letter does not rescue a dependent clause."
            ],
            answer: "Answer: (B) is a complete independent clause. (A) is a dependent-clause fragment. Length in (C) does not by itself prove completeness of every chunk."
          },
          { problem: "Is this a sentence or a fragment? <em>Whitman cataloging carols of mechanics, carpenters, and boatmen.</em>", hint: "Find a finite verb. <em>Cataloging</em> is an -ing form. Is there a helper like <em>is</em> or a past-tense verb? If not, you have a phrase, not a predicate." },
          "Calling anything long a sentence, or anything short a fragment. 'Birds sing' is complete. 'Although the entire congregation rose and the organ thundered through the rafters' is still a fragment because <em>Although</em> subordinated the whole thought.",
          [
            check("Which group of words is a complete sentence?", ["The raven perched above the chamber door.", "After the raven perched above the chamber door.", "The raven perched above the chamber door and.", "Perching above the chamber door in the lamplight."], 0, "The first has a subject (<em>raven</em>) and a finite verb (<em>perched</em>) and can stand alone. The second is a dependent clause. The third is missing a second complete predicate after <em>and</em>. The fourth is a participial phrase with no finite verb."),
            check("What is the simple subject of 'Friends, Romans, countrymen, lend me your ears' (Shakespeare)?", ["Understood <em>you</em> — the listeners being commanded", "<em>Friends</em> only", "<em>ears</em>", "<em>me</em>"], 0, "This is an imperative. The verb is <em>lend</em>. In commands the subject is the understood <em>you</em>. <em>Friends, Romans, countrymen</em> is a vocative — the people being addressed, not the grammatical subject. <em>Ears</em> is the direct object; <em>me</em> is the indirect object.")
          ]
        ),
        section(
          "Objects complete actions; complements complete linking verbs",
          "A complete sentence still may have slots after the verb. Those slots are not all the same: some receive the action; some rename or describe the subject.",
          "Action verbs can take a direct object (whom or what received the action) and sometimes an indirect object (to whom or for whom). Linking verbs (<em>be, seem, become, appear, feel, look, sound, taste, remain</em> when they equate rather than act) take a subject complement: a predicate nominative (renames the subject) or a predicate adjective (describes the subject). Prepositions have objects too, but those objects belong to the prepositional phrase, not to the verb. The decision procedure is: (1) find the verb; (2) ask whether it can be replaced by <em>equals</em> or <em>is</em> without changing the relationship; (3) if yes, the word after it describes or renames the subject; if no, ask whom/what after the verb for a direct object.",
          `Action path: Subject &rarr; action verb &rarr; (indirect object) &rarr; direct object<br>
          She | wrote | the council | a petition.<br>
          IO = council (to whom); DO = petition (what was written)<br><br>
          Linking path: Subject &rarr; linking verb &rarr; complement (same as subject, not a new thing)<br>
          The night | seemed | endless. &nbsp;(predicate adjective)<br>
          O Captain | is | the fallen Lincoln. &nbsp;(predicate nominative, reading Whitman's elegy)`,
          {
            label: "direct and indirect objects",
            problem: "In <em>Equiano told the English readers his story of the Middle Passage</em>, identify the indirect object and the direct object.",
            steps: [
              "<strong>Find the action verb:</strong> <em>told</em>. This is an action, not an equation.",
              "<strong>Ask 'told what?':</strong> <em>his story of the Middle Passage</em>. That whole noun phrase is the direct object — the thing communicated.",
              "<strong>Ask 'told to whom?':</strong> <em>the English readers</em>. That is the indirect object. Pattern: told + IO + DO. You can paraphrase as 'told his story to the English readers.'",
              "<strong>Reject the trap:</strong> <em>Passage</em> is the object of the preposition <em>of</em>, not of the verb. Do not grab the last noun in the sentence and call it the direct object."
            ],
            answer: "Answer: indirect object = <em>readers</em> (complete: <em>the English readers</em>); direct object = <em>story</em> (complete: <em>his story of the Middle Passage</em>)."
          },
          {
            label: "linking versus action with the same verb",
            problem: "Compare: (1) <em>The traveler looked weary.</em> (2) <em>The traveler looked wearily at the map.</em> Is <em>weary/wearily</em> a complement or a modifier, and is <em>looked</em> linking or action?",
            steps: [
              "<strong>Substitution test for (1):</strong> Can you say the traveler <em>was</em> weary? Yes. <em>Looked</em> equates appearance with a quality of the subject. <em>Weary</em> is a predicate adjective (subject complement). You would not say 'looked the weary' as an object.",
              "<strong>Substitution test for (2):</strong> 'The traveler was wearily' is nonsense. <em>Looked</em> here is the physical action of directing the eyes. <em>Wearily</em> answers 'how' and is an adverb. <em>Map</em> is the object of the preposition <em>at</em>.",
              "<strong>Why NES cares:</strong> items often pair <em>She feels bad</em> (predicate adjective: her state is bad) with <em>She feels badly</em> (awkward adverb, as if her sense of touch is impaired). Choose the complement when the verb links; choose the adverb when the verb acts.",
              "<strong>Confirm with Shakespeare:</strong> 'Something is rotten in the state of Denmark' — <em>is</em> links; <em>rotten</em> describes <em>Something</em> (predicate adjective). Denmark is the object of <em>in</em>, not a complement of <em>is</em>."
            ],
            answer: "Answer: (1) linking verb + predicate adjective <em>weary</em>; (2) action verb + adverb <em>wearily</em>."
          },
          { problem: "In <em>Whitman became the bard of the open road</em>, is <em>bard</em> a direct object or a subject complement?", hint: "Replace <em>became</em> with <em>is/equals</em>. If the word after the verb is the same person as the subject, it is a predicate nominative, not a new thing being acted on." },
          "Calling every noun after the verb a direct object. After a linking verb there is no 'receiver of action.' Also: the object of a preposition never counts as the sentence's direct object, even if it sits at the end.",
          [
            check("In 'All the world's a stage' (Shakespeare), <em>stage</em> functions as a", ["Predicate nominative — it renames <em>world</em> after the linking verb <em>is</em> ('s)", "Direct object — the world acts on a stage", "Indirect object — the stage receives something", "Object of a preposition"], 0, "<em>World's</em> = world is. Linking <em>is</em> equates world and stage. The stage is not receiving an action; it is what the world is being called. That is a subject complement (predicate nominative)."),
            check("Which sentence contains a direct object?", ["Douglass wrote a narrative of his life.", "Douglass became a powerful orator.", "The narrative seems urgent even now.", "He remained cautious in Baltimore."], 0, "Wrote what? A narrative. Action verb + receiver. In the others, <em>became</em>, <em>seems</em>, and <em>remained</em> link the subject to a complement (<em>orator</em>, <em>urgent</em>, <em>cautious</em>) rather than transferring action to an object.")
          ]
        )
      ]
    },

    "efdn-02": {
      title: "Phrases, clauses, and sentence types",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Tell a phrase from a clause, then tell an independent clause from a dependent one, then classify sentences as simple, compound, complex, or compound-complex. This is the machinery behind fragments, run-ons, and comma splices — the highest-yield grammar traps on NES English Language Arts.</p>`,
      sections: [
        section(
          "A phrase has no subject-verb pair; a clause has both",
          "You can already find a subject and a finite verb. A clause is a word group that contains that pair. A phrase is a word group that does not.",
          "Common phrases: prepositional (<em>across the river</em>), participial (<em>exhausted by the climb</em>), infinitive (<em>to bury Caesar</em>), gerund (<em>reading Douglass</em> as a noun), and appositive (<em>Lincoln, the fallen captain</em>). A phrase can be long and meaningful and still cannot be a sentence by itself. A clause always has a subject and a predicate; whether it can stand alone is a later question. The first fork in the road is only: do I see a subject plus a finite verb inside this group?",
          `Word group &rarr; Is there a subject + finite verb inside it?<br>
          NO &rarr; phrase &nbsp;&nbsp; YES &rarr; clause<br><br>
          Phrase: in the forests of the night &nbsp;(prep. phrases; no verb)<br>
          Phrase: burning bright &nbsp;(participial; no subject doing a finite verb)<br>
          Clause: the tyger burns bright &nbsp;(subject <em>tyger</em> + verb <em>burns</em>)<br>
          Clause: while I pondered, weak and weary &nbsp;(subject <em>I</em> + verb <em>pondered</em>)`,
          {
            label: "sorting phrases in a literary sentence",
            problem: "In Blake's 'Tyger Tyger, burning bright, / In the forests of the night,' label each word group as a phrase type. Is any group a clause?",
            steps: [
              "<strong>Tyger Tyger:</strong> vocative — a noun of address, not a clause (no verb).",
              "<strong>burning bright:</strong> participial phrase modifying tyger. <em>Burning</em> is a participle, not a finite verb with a subject performing a tense (there is no 'the tyger burns' stated).",
              "<strong>In the forests of the night:</strong> stacked prepositional phrases (in the forests / of the night). Objects of prepositions: <em>forests</em>, <em>night</em>. No subject-verb pair.",
              "<strong>Decision:</strong> the famous opening is built from phrases. The finite clause would be something like 'Tyger, you burn bright in the forests of the night.' Blake withholds that independent clause and lets the phrases carry the image — which is why students mislabel the whole stanza as a 'sentence type' without first checking for a clause."
            ],
            answer: "Answer: vocative + participial phrase + prepositional phrases. No clause in those opening groups."
          },
          {
            label: "gerund phrase versus participial phrase",
            problem: "Compare: (1) <em>Reading Douglass changed her teaching.</em> (2) <em>Reading Douglass, she revised her lecture.</em> Same -ing word. Different jobs.",
            steps: [
              "<strong>Sentence (1):</strong> Ask what changed her teaching. <em>Reading Douglass</em> is the subject — a gerund phrase acting as a noun. You can replace it with <em>that activity</em>.",
              "<strong>Sentence (2):</strong> Who revised? <em>She</em>. <em>Reading Douglass</em> is not the subject; it tells the circumstance of the revising. That is a participial phrase modifying <em>she</em>.",
              "<strong>Hang-on test:</strong> if you delete the -ing group in (1), nothing remains to be the subject. If you delete it in (2), 'she revised her lecture' is still a complete sentence. Deletion that leaves a sentence intact usually means you removed a modifier (phrase), not the subject.",
              "<strong>Exam transfer:</strong> both are phrases (the -ing form is not a finite verb here). The difference is noun-job versus adjective-job. Mixing them up leads to dangling-modifier errors later."
            ],
            answer: "Answer: (1) gerund phrase as subject; (2) participial phrase as modifier of <em>she</em>."
          },
          { problem: "Is <em>to be, or not to be</em> a phrase or a clause? Then what is <em>that is the question</em>?", hint: "Infinitives (<em>to</em> + verb) do not create a finite clause by themselves. Look for a subject plus a tensed verb in the second group." },
          "Calling any group of related words a clause. 'Across the swollen river at dusk' is two prepositional phrases, not a clause, no matter how complete it feels as a picture.",
          [
            check("Which of the following is a clause rather than a phrase?", ["while I pondered, weak and weary", "once upon a midnight dreary", "to bury Caesar, not to praise him", "in the forests of the night"], 0, "Only the first has a subject (<em>I</em>) and a finite verb (<em>pondered</em>). The others are a prepositional/adverbial phrase, infinitive phrases, and prepositional phrases."),
            check("In 'Reading exhausted the messenger,' the word group <em>Reading</em> is", ["A gerund (noun) serving as the subject — a one-word gerund phrase", "A finite verb in past progressive", "A participial modifier of <em>messenger</em>", "A preposition"], 0, "What exhausted the messenger? Reading. That is the subject. A participle would modify a noun that is already the subject; here <em>Reading</em> is the subject itself.")
          ]
        ),
        section(
          "Independent clauses can stand alone; dependent clauses cannot",
          "A clause has a subject and a verb. The next fork: can that clause be a sentence by itself? If yes, independent. If a subordinator or relative pronoun has clipped its wings, dependent.",
          "Independent clauses are complete thoughts. Dependent (subordinate) clauses still have subject + verb, but they begin with a subordinating conjunction (<em>because, although, when, if, since, unless, while, after, before, until</em>) or a relative pronoun (<em>who, whom, whose, which, that</em>) that makes them function as an adverb, adjective, or noun inside a larger sentence. Coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) join equals; they do not turn an independent clause into a dependent one. That distinction is the entire comma-splice engine: two independents joined by a comma alone are illegal; an independent plus a dependent is not a comma splice.",
          `Independent: The fox leaped at the grapes. &nbsp;(stands alone)<br>
          Dependent adverb clause: because they hung too high &nbsp;(needs an independent)<br>
          Dependent adjective (relative) clause: that hung too high &nbsp;(modifies grapes)<br>
          Dependent noun clause: what the fox could not reach &nbsp;(acts as a noun)<br><br>
          FANBOYS join independents as equals (compound sentence).<br>
          Subordinators attach a dependent to an independent (complex sentence).`,
          {
            label: "classifying clauses in a nested sentence",
            problem: "In Austen's opening — <em>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife</em> — identify an independent clause and a dependent clause.",
            steps: [
              "<strong>Core independent:</strong> <em>It is a truth universally acknowledged</em>. Subject <em>It</em>, verb <em>is</em>. This could stand as a (bland) sentence.",
              "<strong>Dependent noun clause:</strong> <em>that a single man ... must be in want of a wife</em>. <em>That</em> introduces a clause naming what the 'truth' is. Subject of the inner clause: <em>man</em>; verb: <em>must be</em>. Because of <em>that</em>, the group cannot stand alone as Austen's claim without the frame.",
              "<strong>Do not be fooled by length:</strong> the dependent clause is longer and more interesting than the independent frame. Interest is not independence.",
              "<strong>Irony note for later literature work:</strong> the narrator states this as 'truth,' but the novel will pressure that claim. Grammatically it is still independent frame + dependent content clause."
            ],
            answer: "Answer: independent = <em>It is a truth universally acknowledged</em>; dependent = the <em>that</em>-clause naming the supposed truth."
          },
          {
            label: "relative clause versus independent",
            problem: "Which is a fragment, and how do you fix it? (A) <em>Who would bear the whips and scorns of time.</em> (B) <em>Hamlet asks who would bear the whips and scorns of time.</em>",
            steps: [
              "<strong>(A) starts with <em>Who</em> as a relative/interrogative that, in this punctuation, never gets a main clause to hang on.</strong> As a standalone period-ended group echoing Hamlet, it reads as a dependent/interrogative fragment in a grammar-item context: it is a clause, but it is not presented as a complete independent statement.",
              "<strong>(B) supplies an independent clause:</strong> <em>Hamlet asks</em> + a noun clause <em>who would bear...</em>. Now the <em>who</em>-clause is doing a job (direct object of <em>asks</em>) inside a complete sentence.",
              "<strong>Fix options for (A):</strong> turn it into a question with a complete independent interrogative ('Who would bear the whips and scorns of time?') if <em>who</em> is interrogative, or attach it to an independent: 'He names those who would bear the whips and scorns of time.'",
              "<strong>Exam transfer:</strong> a relative clause (<em>who..., which..., that...</em>) modifying nothing is a classic fragment. Presence of who + verb is not enough."
            ],
            answer: "Answer: (A) fails as a stand-alone statement; (B) is complete because an independent clause hosts the <em>who</em>-clause."
          },
          { problem: "Label each clause: <em>When the raven spoke, the speaker demanded that it explain itself.</em>", hint: "Find three subject-verb pairs. Then circle the openers <em>When</em> and <em>that</em>. Those mark dependents. What is left is independent." },
          "Thinking that a coordinating conjunction (and/but) makes a clause dependent. 'The raven spoke, and the speaker leaped' is two independents. 'Although the raven spoke' is dependent. FANBOYS do not subordinate.",
          [
            check("Which clause can stand alone as a sentence?", ["the speaker pondered, weak and weary", "once the speaker pondered, weak and weary", "although the speaker pondered, weak and weary", "because the speaker pondered, weak and weary"], 0, "Only the first is independent. The others add subordinators (<em>once, although, because</em>) that leave the thought unfinished."),
            check("In 'Douglass describes the moment when he resolved to read,' the group <em>when he resolved to read</em> is", ["A dependent adverb clause telling when", "A second independent clause", "A prepositional phrase", "A gerund phrase"], 0, "Subject <em>he</em> + verb <em>resolved</em>, opened by <em>when</em> — a dependent clause answering when, not a second sentence.")
          ]
        ),
        section(
          "Sentence types, and the two ways joining fails: fragments and comma splices",
          "You can now mark independent versus dependent. Sentence type is simply a count of those clauses. Errors are failed joins.",
          "Simple = one independent clause (phrases allowed). Compound = two or more independents joined by a FANBOYS conjunction (with a comma) or by a semicolon. Complex = one independent + at least one dependent. Compound-complex = at least two independents + at least one dependent. A run-on (fused sentence) smashes two independents together with no punctuation or conjunction. A comma splice joins two independents with only a comma. Both are illegal compounds. Three legal repairs: period (two sentences), semicolon, or comma + FANBOYS. Making one clause dependent also works (complex sentence).",
          `Simple: The fox leaped.<br>
          Compound: The fox leaped, but the grapes hung too high.<br>
          Complex: Because the grapes hung too high, the fox walked away.<br>
          Compound-complex: Because the grapes hung too high, the fox walked away, and he called them sour.<br><br>
          Illegal: The fox leaped, the grapes hung too high. &nbsp;(comma splice)<br>
          Illegal: The fox leaped the grapes hung too high. &nbsp;(fused run-on)`,
          {
            label: "classifying a real sentence",
            problem: "Classify: <em>When I heard the learn'd astronomer, Whitman became restless, and he wandered out into the mystical moist night air.</em> (adapted from Whitman's poem into a single grammatical test sentence)",
            steps: [
              "<strong>Bracket clauses:</strong> (1) <em>When I heard the learn'd astronomer</em> — dependent (opener <em>When</em>). (2) <em>Whitman became restless</em> — independent. (3) <em>he wandered out into the mystical moist night air</em> — independent, joined by <em>and</em>.",
              "<strong>Count:</strong> two independents + one dependent = compound-complex.",
              "<strong>Reject near misses:</strong> it is not merely complex (that would need only one independent). It is not merely compound (that would need no dependent). The <em>When</em>-clause is the difference.",
              "<strong>Punctuation check:</strong> comma after the introductory dependent clause is required. Comma before <em>and</em> joining two independents is required. Both are present, so the join is legal."
            ],
            answer: "Answer: compound-complex."
          },
          {
            label: "diagnosing and repairing a comma splice",
            problem: "The following is illegal: <em>Whitman catalogs American workers, he hears them singing.</em> Name the error and produce three legal repairs.",
            steps: [
              "<strong>Identify two independents:</strong> 'Whitman catalogs American workers' can stand alone. 'He hears them singing' can stand alone. They are joined by a comma with no FANBOYS. That is a comma splice, not a complex sentence (there is no subordinator) and not a legal compound.",
              "<strong>Repair 1 — period:</strong> Whitman catalogs American workers. He hears them singing.",
              "<strong>Repair 2 — semicolon:</strong> Whitman catalogs American workers; he hears them singing. Use this when the second clause closely comments on the first.",
              "<strong>Repair 3 — comma + FANBOYS:</strong> Whitman catalogs American workers, and he hears them singing. Alternate complex repair: After Whitman catalogs American workers, he hears them singing. (first clause made dependent)."
            ],
            answer: "Answer: comma splice. Fix with a period, a semicolon, comma + FANBOYS, or subordination."
          },
          { problem: "Classify and, if needed, repair: <em>Although Sojourner Truth had borne children into slavery she demanded to be recognized as a woman and her question still rings.</em>", hint: "Mark <em>Although...</em> as dependent. Then count independents. You will also need a comma after the introductory dependent clause and a comma before the <em>and</em> that joins two independents." },
          "Joining two complete sentences with a comma because they 'feel related.' Relatedness is a reason to use a semicolon or FANBOYS, not a reason a comma is enough. Relatedness plus a comma is the definition of a comma splice.",
          [
            check("'The raven spoke, the speaker sat transfixed.' This is", ["A comma splice — two independents joined by a comma alone", "A correct compound sentence", "A complex sentence with a dependent clause", "A simple sentence with a compound predicate"], 0, "Each half has its own subject and finite verb and could be a sentence. A comma without FANBOYS is a splice. A compound predicate would share one subject: 'The raven spoke and departed.'"),
            check("Which sentence is complex?", ["Because the grapes hung high, the fox walked away.", "The fox leaped, and the grapes hung high.", "The fox leaped.", "The fox leaped; the grapes hung high."], 0, "Only the first pairs a dependent clause (<em>Because...</em>) with an independent. The second is compound (FANBOYS). The third is simple. The fourth is compound with a semicolon.")
          ]
        )
      ]
    },

    "efdn-03": {
      title: "Punctuation and mechanics",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Punctuate from clause structure, not from breath. You will use commas for series and true compounds, control introductory and nonrestrictive elements, kill comma splices, and then handle apostrophes, semicolons, colons, and quotation mechanics — the core of NES competency 0009.</p>`,
      sections: [
        section(
          "End marks, series commas, and the compound-sentence comma",
          "Sentence type from the previous lesson is now a punctuation map. If you cannot name the clauses, you cannot place the comma.",
          "A period ends a statement; a question mark ends a direct question (not an indirect one: <em>She asked whether the raven would speak</em> takes a period). Commas separate items in a series of three or more. When two independents are joined by FANBOYS, put a comma before the conjunction. Do not put a comma between a subject and its verb, and do not put a comma between two verbs that share one subject (compound predicate). That last distinction is a favorite NES trap: 'She packed the trunk and locked the door' has no comma; 'She packed the trunk, and she locked the door' needs one.",
          `Series: lanterns, maps, and compasses<br>
          Compound sentence: The lanterns failed, but the maps remained.<br>
          Compound predicate (NO comma): The lanterns failed and left us in darkness.<br>
          Subject | verb (NO comma): The weary traveler | crossed the river.<br><br>
          Question: Direct — What did the raven say?<br>
          Indirect — He asked what the raven said.`,
          {
            label: "series versus compound predicate",
            problem: "Punctuate: <em>Dickinson names hope a bird a presence in the soul and a song without words.</em> Then compare: <em>Dickinson names hope and then withholds a sermon.</em>",
            steps: [
              "<strong>First sentence is a series of three complements:</strong> a bird, a presence in the soul, and a song without words. Insert commas after <em>bird</em> and after <em>soul</em> (the and-comma before the last item — the serial comma — prevents misreading 'soul and a song' as one blob). Result: Dickinson names hope a bird, a presence in the soul, and a song without words.",
              "<strong>Second sentence has one subject, two verbs:</strong> names + withholds. That is a compound predicate. No comma before <em>and</em>.",
              "<strong>Decision procedure:</strong> after <em>and</em>, is there a new subject doing a new finite verb? If yes, comma (compound sentence). If the same subject continues with another verb, no comma.",
              "<strong>Exam transfer:</strong> if a choice inserts a comma before <em>and then withholds</em>, it has treated a compound predicate as a compound sentence."
            ],
            answer: "Answer: series commas in the first; no comma in the compound-predicate second."
          },
          {
            label: "comma between subject and verb — the false pause",
            problem: "Which is correctly punctuated? (A) <em>The man in possession of a good fortune, must be in want of a wife.</em> (B) <em>The man in possession of a good fortune must be in want of a wife.</em>",
            steps: [
              "<strong>Find subject and verb:</strong> simple subject <em>man</em>; verb phrase <em>must be</em>. Everything between is a prepositional modifier, not a clause boundary.",
              "<strong>(A) puts a comma between subject and verb</strong> because the subject is long. Length does not create a comma slot. That comma is illegal.",
              "<strong>(B) lets the complete subject run into its verb.</strong> Correct.",
              "<strong>When a comma WOULD appear:</strong> if the interrupter were nonrestrictive, it would take a pair of commas: 'The man, who had just arrived from London, must be in want of a wife.' A single comma before the verb is almost never the right fix."
            ],
            answer: "Answer: (B). Do not separate a subject from its verb with a single comma."
          },
          { problem: "Add or remove commas: <em>Poe's speaker pondered the darkness and demanded a name and the raven answered Nevermore.</em>", hint: "You have three finite verbs and a subject change at <em>the raven</em>. That is where a compound-sentence comma (and a FANBOYS or a period) belongs. The first <em>and</em> may be a compound predicate." },
          "Inserting a comma wherever you would inhale. Breath is not a rule. The rules are clause boundaries, series of three, and paired interrupters.",
          [
            check("Which sentence is punctuated correctly?", ["Austen's narrator states a 'truth' and then undercuts it.", "Austen's narrator states a 'truth,' and then undercuts it.", "Austen's narrator, states a 'truth' and then undercuts it.", "Austen's narrator states a 'truth' and, then undercuts it."], 0, "One subject (<em>narrator</em>) with a compound predicate (states / undercuts). No comma before <em>and</em>. The version with a comma before <em>and</em> treats it as a compound sentence, but there is no second subject. The version with a comma after <em>narrator</em> illegally splits subject from verb."),
            check("Choose the correctly punctuated series.", ["Blake's tyger is bright, fearful, and symmetrical.", "Blake's tyger is bright fearful and symmetrical.", "Blake's tyger is bright, fearful and, symmetrical.", "Blake's tyger is bright fearful, and symmetrical."], 0, "Three adjectives need commas between items. The standard exam-safe form puts a comma before <em>and</em> as well, which also prevents misreading.")
          ]
        ),
        section(
          "Introductory elements, nonrestrictive clauses, and the comma splice",
          "You already place a comma before FANBOYS joining two independents. Now place commas that mark extra information — and refuse the comma that tries to join two sentences.",
          "An introductory word, phrase, or dependent clause is followed by a comma: <em>Although the grapes hung high, the fox leaped.</em> When the dependent clause follows the independent, you usually omit the comma: <em>The fox leaped although the grapes hung high.</em> Restrictive (essential) adjective clauses take no commas and often use <em>that</em>: they identify which one. Nonrestrictive (extra) clauses take a comma pair and often use <em>which</em> or <em>who</em>: they comment on an already-identified noun. A comma splice is still two independents with only a comma — including after a conjunctive adverb: <em>The fox failed, however, he sneered.</em> is a splice if <em>however</em> is trying to join the sentences. Legal: <em>The fox failed; however, he sneered.</em>",
          `Intro dependent + comma + independent:<br>
          When I heard the learn'd astronomer, I became tired and sick.<br>
          Independent + no comma + trailing dependent:<br>
          I became tired and sick when I heard the learn'd astronomer.<br><br>
          Restrictive (no commas): The letter that Equiano wrote shocked readers. (which letter? the one he wrote)<br>
          Nonrestrictive (commas): Equiano's <em>Narrative</em>, which shocked readers, still teaches.<br>
          Splice: The raven spoke, the air grew still.<br>
          Not a splice: When the raven spoke, the air grew still.`,
          {
            label: "introductory clause versus trailing clause",
            problem: "Punctuate both: (1) <em>After Douglass learned to read he called literacy a curse and a blessing.</em> (2) <em>Douglass called literacy a curse and a blessing after he learned to read.</em>",
            steps: [
              "<strong>(1) opens with a dependent clause</strong> (<em>After Douglass learned to read</em>). Readers need the comma as a hinge before the independent clause: After Douglass learned to read, he called literacy a curse and a blessing.",
              "<strong>(2) ends with the same dependent clause.</strong> The independent clause already landed. No comma: Douglass called literacy a curse and a blessing after he learned to read.",
              "<strong>Why the asymmetry:</strong> the comma after an opener prevents misreading the next noun as still inside the dependent clause. At the end, the subordinator <em>after</em> itself marks the boundary.",
              "<strong>Do not 'balance' them:</strong> matching commas on both versions is a common overcorrection."
            ],
            answer: "Answer: comma after the opener in (1); no comma in (2)."
          },
          {
            label: "restrictive versus nonrestrictive, then a splice",
            problem: "Choose commas or not: (A) <em>The slaves who learned to read threatened the system.</em> (B) <em>Frederick Douglass who learned to read threatened the system.</em> Then diagnose: (C) <em>Douglass learned to read, he taught others.</em>",
            steps: [
              "<strong>(A) Restrictive:</strong> not all enslaved people are meant — only those who learned to read. The clause identifies which people. No commas. <em>That</em> could replace <em>who</em> in many style guides.",
              "<strong>(B) Nonrestrictive:</strong> Frederick Douglass is already a unique name. The clause adds extra biography. Pair of commas: Frederick Douglass, who learned to read, threatened the system.",
              "<strong>(C) Comma splice:</strong> two independents ('Douglass learned to read' / 'he taught others') with only a comma. Fix: period, semicolon, or ', and'.",
              "<strong>Exam transfer:</strong> if deleting the clause changes which person/thing you mean, it is restrictive (no commas). If you still know which one, it is extra (commas)."
            ],
            answer: "Answer: (A) no commas; (B) comma pair around the extra clause; (C) comma splice — repair the join."
          },
          { problem: "Fix punctuation: <em>The fox could not reach the grapes however he declared them sour.</em>", hint: "<em>However</em> is a conjunctive adverb, not FANBOYS. It cannot legally join two independents with a comma. Use a semicolon before <em>however</em> and a comma after it, or make two sentences." },
          "Putting a comma after FANBOYS instead of before ('The fox leaped but, the grapes hung high') and treating <em>however/therefore/then</em> as if they were <em>and/but</em>. Conjunctive adverbs need a semicolon (or a period), not a comma splice.",
          [
            check("Which sentence correctly punctuates an introductory dependent clause?", ["Although the night was dreary, the speaker kept reading.", "Although the night was dreary the speaker kept reading.", "Although, the night was dreary the speaker kept reading.", "Although the night was dreary; the speaker kept reading."], 0, "Dependent opener takes a comma, not a semicolon (a semicolon would imply two independents). No comma after <em>Although</em> alone."),
            check("'Poe's speaker sat in the lamplight, he heard a tapping.' The error is a", ["Comma splice", "Missing serial comma", "Restrictive clause without <em>that</em>", "Apostrophe error"], 0, "Two independent clauses are glued with a comma and no coordinating conjunction. That is the definition of a comma splice.")
          ]
        ),
        section(
          "Apostrophes, semicolons, colons, quotations, and capitals",
          "Commas mark extra information and clause joins. The remaining marks have narrower jobs: ownership, close relation, introduction, and exact words.",
          "Apostrophes mark possession (the raven's shadow; the speakers' chairs; Dickens's — or Dickens' — depending on house style, but never an apostrophe for a plain plural) and contractions (<em>it's</em> = it is). <em>Its</em> possessive has no apostrophe, like <em>his</em>. Semicolons join closely related independents or separate series items that already contain commas. Colons introduce a list, an explanation, or a quotation after a complete independent clause. Quotation marks enclose actual words; commas and periods sit inside closing quotes in standard American exam style. Capitalize proper nouns, the first word of a sentence, and the first word of a complete quoted sentence — not every important-looking noun.",
          `it's = it is &nbsp;|&nbsp; its = belonging to it &nbsp;|&nbsp; its' is never a word<br>
          teacher's = one teacher owns &nbsp;|&nbsp; teachers' = several teachers own &nbsp;|&nbsp; teachers = plural, no ownership<br><br>
          Semicolon: The raven spoke; the speaker froze.<br>
          Colon (complete clause, then reveal): He heard one word: Nevermore.<br>
          Illegal colon after a verb: He heard: Nevermore. &nbsp;(the left side is not independent)<br>
          Quote: Poe writes, \"Quoth the Raven, 'Nevermore.'\"`,
          {
            label: "its / it's and possessive plurals",
            problem: "Correct the apostrophes: <em>Its a truth that the foxs pride was wounded when its leap failed; the teachers copies of Aesop were missing their title pages.</em>",
            steps: [
              "<strong>Its a truth:</strong> you mean <em>it is</em> &rarr; <em>It's</em>. Then later <em>its leap</em> is possessive (the leap belonging to it) &rarr; no apostrophe.",
              "<strong>foxs pride:</strong> one fox owns pride &rarr; <em>fox's pride</em>.",
              "<strong>teachers copies:</strong> several teachers own copies &rarr; <em>teachers' copies</em>. If one teacher owned them, <em>teacher's copies</em>. The noun <em>copies</em> is a plain plural — no apostrophe.",
              "<strong>their title pages:</strong> <em>their</em> is already possessive; no apostrophe. Scan for the phantom <em>its'</em> — delete it from your mental keyboard."
            ],
            answer: "Answer: It's a truth that the fox's pride was wounded when its leap failed; the teachers' copies of Aesop were missing their title pages."
          },
          {
            label: "semicolon versus colon versus splice",
            problem: "Choose the mark: (1) Two related independents with no FANBOYS. (2) An independent clause that announces a list of three labors Sojourner Truth names. (3) A sentence that quotes Blake.",
            steps: [
              "<strong>(1) Semicolon</strong> (or period): Sojourner Truth had worked the fields; she had borne children into slavery. A comma here would splice.",
              "<strong>(2) Colon</strong> only if the left side is already a complete sentence: She named three proofs of her strength: fieldwork, childbearing, and endurance. Wrong: She named: fieldwork, childbearing, and endurance. (left side not independent)",
              "<strong>(3) Comma before a short quotation after an attributing clause:</strong> Blake asks, \"What immortal hand or eye, / Could frame thy fearful symmetry?\" Capitalize the first word of the quoted sentence. Keep the question mark that belongs to Blake's question.",
              "<strong>Decision tree:</strong> joining two independents without FANBOYS &rarr; semicolon or period. Introducing something that explains a complete clause &rarr; colon. Wrapping someone else's words &rarr; quotation marks plus American comma/period placement."
            ],
            answer: "Answer: semicolon for related independents; colon after a complete lead-in; comma + quotes for a reported line."
          },
          { problem: "Punctuate: <em>whitman writes i hear america singing the varied carols i hear</em> (capitalize and mark the quotation).", hint: "Capitalize the poet's name and the first word of the quoted line. The quoting sentence needs a comma (or colon, if you make a complete lead-in) before the opening quote." },
          "Using an apostrophe to make a plural (<em>raven's</em> when you merely mean more than one raven) and writing <em>it's</em> for possession. If you can expand to 'it is,' use <em>it's</em>. If you mean belonging to it, use <em>its</em>.",
          [
            check("Which sentence uses the apostrophe correctly?", ["The raven folded its wings.", "The raven folded it's wings.", "The raven folded its' wings.", "The ravens folded its wings' in the possessive of it."], 0, "<em>Its</em> is the possessive pronoun, like <em>his</em>. <em>It's</em> always means it is or it has. <em>Its'</em> is not English."),
            check("Which punctuation is legal?", ["Truth had worked as hard as any man; she asked whether that labor counted.", "Truth had worked as hard as any man, she asked whether that labor counted.", "Truth had worked as hard as any man: she asked? whether that labor counted.", "Truth had worked as hard as any man she asked whether that labor counted."], 0, "Two independents may take a semicolon. The comma version is a splice. The colon version mangles the second clause. The last is a fused run-on.")
          ]
        )
      ]
    },

    "efdn-04": {
      title: "Usage: agreement, pronouns, and modifiers",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Make subjects and verbs agree even when phrases intervene, choose pronoun case with a who/whom procedure, and park modifiers next to the words they actually describe. These are the usage items that separate 'I have an ear for English' from a repeatable NES method.</p>`,
      sections: [
        section(
          "The verb agrees with the subject, not with the nearest noun",
          "You can already find the simple subject. Agreement means that subject — not a noun in a prepositional phrase, not the complement — governs singular versus plural on the verb.",
          "A singular subject takes a singular verb; a plural subject takes a plural verb. Ignore prepositional phrases that sit between them (<em>the bouquet of roses is</em>, not <em>are</em>). Compound subjects joined by <em>and</em> are usually plural; with <em>or/nor</em>, agree with the nearer subject. Indefinite pronouns <em>each, every, everyone, anybody, nobody, either, neither</em> are singular. Collective nouns (<em>jury, flock, committee</em>) are singular when the group acts as one. Delayed subjects after <em>there is/are</em> still control the verb: look behind the dummy <em>there</em>.",
          `Find simple subject &rarr; cross out prepositional phrases &rarr; match the verb<br>
          The flock of blackbirds [cross out: of blackbirds] settles on the yard.<br>
          Neither the maps nor the compass was in the kit. &nbsp;(nearer = compass, singular)<br>
          Neither the compass nor the maps were in the kit. &nbsp;(nearer = maps, plural)<br>
          Each of the speakers has a carol. &nbsp;(Each = singular)<br>
          There are carols in Whitman's catalog. &nbsp;(true subject = carols)`,
          {
            label: "intervening phrase trap",
            problem: "Choose: <em>The Narrative of the Life of Frederick Douglass, an American Slave, together with Equiano's account, (was/were) assigned for the week.</em>",
            steps: [
              "<strong>Find the true subject:</strong> <em>Narrative</em> (a book title, singular). <em>Of the Life...</em> is a prepositional stack. <em>Together with Equiano's account</em> is an additive phrase, not <em>and</em> — it does not create a compound subject.",
              "<strong>Cross out the noise:</strong> The Narrative ... was assigned. Additive phrases (<em>along with, as well as, together with</em>) do not pluralize the verb.",
              "<strong>Contrast:</strong> If the sentence were <em>Douglass's Narrative and Equiano's account were assigned</em>, <em>and</em> would make a plural subject.",
              "<strong>Check complement:</strong> <em>assigned</em> is not a noun competing for agreement. Do not agree with <em>Slave</em> or <em>account</em> just because they are nearer."
            ],
            answer: "Answer: was — singular subject <em>Narrative</em> plus an additive phrase, not a compound with <em>and</em>."
          },
          {
            label: "or/nor, indefinites, and delayed subjects",
            problem: "Choose the verbs: (1) <em>Neither the students nor the teacher (was/were) ready.</em> (2) <em>Everyone in the galleries (was/were) silent.</em> (3) <em>There (is/are) a lantern and a map on the bench.</em>",
            steps: [
              "<strong>(1) Neither/nor:</strong> agree with the nearer subject, <em>teacher</em> (singular) &rarr; <em>was</em>. If you flip to 'Neither the teacher nor the students,' the verb becomes <em>were</em>.",
              "<strong>(2) Everyone:</strong> grammatically singular despite referring to many bodies &rarr; <em>was</em>. <em>In the galleries</em> is a prepositional phrase to ignore.",
              "<strong>(3) There is/are:</strong> <em>there</em> is a dummy. The real subject is the compound <em>a lantern and a map</em> (plural) &rarr; <em>are</em>. (Some speakers say 'there is a lantern and a map' in speech; exam English matches the compound.)",
              "<strong>Procedure recap:</strong> locate simple subject, ignore prepositional and additive extras, apply and = plural, or/nor = nearer, indefinites = singular, there = look right."
            ],
            answer: "Answer: was; was; are."
          },
          { problem: "Choose: <em>The committee of readers (has/have) submitted its report, and each of the poems (need/needs) a title.</em>", hint: "Committee acting as one unit + possessive <em>its</em> signals singular. <em>Each</em> is always singular, so the second verb takes -s." },
          "Agreeing with the nearest noun ('a flock of blackbirds settle') instead of the simple subject. Nearness is not a rule. Also: <em>and</em> is not the same as <em>as well as</em>.",
          [
            check("'A bouquet of roses and lilies (sit/sits) on Austen's table' — wait: if the subject is <em>bouquet</em>, the verb is", ["sits — <em>bouquet</em> is singular; <em>of roses and lilies</em> is a prepositional phrase", "sit — roses and lilies are plural", "sit — two kinds of flowers make a compound subject", "sits or sit, depending on whether you like the scent"], 0, "Simple subject is <em>bouquet</em>. The prepositional phrase cannot control the verb, even though it contains a compound object."),
            check("Neither the captain nor the sailors (was/were) on deck. The standard exam choice is", ["were — agree with the nearer subject, <em>sailors</em>", "was — <em>neither</em> is always singular no matter what follows", "was — captain is more important than sailors", "were — all neither/nor compounds are plural"], 0, "With or/nor, the nearer subject governs. Sailors is plural, so were. (If the sentence were 'Neither the sailors nor the captain,' the verb would be was.)")
          ]
        ),
        section(
          "Pronoun case, who/whom, agreement, and clear reference",
          "A pronoun takes a noun's job. Case is the form that matches that job: subject forms (<em>I, he, she, we, they, who</em>) versus object forms (<em>me, him, her, us, them, whom</em>).",
          "Use a subject pronoun as a subject or after a linking verb in formal exam English (<em>It was she</em>). Use an object pronoun as a direct/indirect object or object of a preposition. For <em>who/whom</em>, isolate the clause, turn it into a statement, and substitute <em>he</em> (who) or <em>him</em> (whom). Pronouns must agree with their antecedents: <em>everyone</em> is singular on the exam (<em>his or her</em>, or recast the sentence in the plural). A pronoun must point to one clear noun; if two nouns could claim it, rewrite. Do not let <em>this/that/which</em> refer to a whole previous sentence if the reference could wobble.",
          `Who/whom procedure:<br>
          1. Cover the rest of the sentence; look only at the clause with who/whom.<br>
          2. Reorder as a statement.<br>
          3. If he/she/they fits &rarr; who; if him/her/them fits &rarr; whom.<br><br>
          The delegate who wrote the report arrived. &nbsp;(he wrote &rarr; who)<br>
          The delegate whom the committee appointed arrived. &nbsp;(appointed him &rarr; whom)<br>
          To whom did Hamlet speak? &nbsp;(to him &rarr; whom)`,
          {
            label: "who versus whom, step by step",
            problem: "Fill in: <em>The messenger _____ the council trusted had ridden from the hills.</em> Then: <em>The messenger _____ had ridden from the hills was trusted.</em>",
            steps: [
              "<strong>Isolate clause 1:</strong> 'the council trusted _____.' Reorder: the council trusted <em>him</em>. Object &rarr; <em>whom</em>. Full: The messenger whom the council trusted had ridden from the hills.",
              "<strong>Isolate clause 2:</strong> '_____ had ridden from the hills.' Substitute: <em>he</em> had ridden. Subject &rarr; <em>who</em>.",
              "<strong>Ignore the surrounding glamour:</strong> both sentences are about a messenger and a council. The job inside the relative clause is the only thing that matters.",
              "<strong>Object-of-preposition shortcut:</strong> after <em>to, for, with, of</em>, exam English wants <em>whom</em> ('To whom it may concern'). Do not write 'To who it may concern' on this test."
            ],
            answer: "Answer: whom (object of trusted); who (subject of had ridden)."
          },
          {
            label: "agreement and vague reference",
            problem: "Repair: (1) <em>Everyone brought their copy of Douglass.</em> (2) <em>When Douglass met Covey, he was terrified.</em> (3) <em>She gave the letters to Sarah and I.</em>",
            steps: [
              "<strong>(1) Traditional NES agreement:</strong> <em>Everyone</em> is singular, so <em>his or her copy</em>, or recast: <em>All the students brought their copies</em> (plural antecedent). Singular <em>they</em> is widely used in modern prose; many large-scale exams still prefer the recast or <em>his or her</em>. Choose the recast when in doubt — it offends no scoring key.",
              "<strong>(2) Two men, one <em>he</em>:</strong> unclear whether Douglass or Covey is terrified. Name the noun: When Douglass met Covey, Douglass was terrified. Or recast with a noun in the second clause.",
              "<strong>(3) Case after a conjunction:</strong> drop 'Sarah and' and listen: 'She gave the letters to I' is wrong. Object of <em>to</em> &rarr; <em>me</em>. She gave the letters to Sarah and me.",
              "<strong>Linking-verb formal case:</strong> 'It was I who knocked' (subject complement) is the conservative exam choice, even if speech prefers <em>me</em>."
            ],
            answer: "Answer: recast (1) with a plural antecedent; name the noun in (2); use <em>me</em> in (3)."
          },
          { problem: "Choose who/whom: <em>Hamlet asks _____ would bear the whips and scorns of time, and _____ Fortune's star has already wounded.</em>", hint: "First blank is the subject of <em>would bear</em> (he would bear &rarr; who). Second blank is the object of <em>has wounded</em> (has wounded him &rarr; whom)." },
          "Using <em>who</em> everywhere because it sounds polite, or using <em>myself</em> as a fancy <em>me</em> ('send it to Sarah and myself'). Reflexives need the same person already in the clause as subject ('I told myself').",
          [
            check("The senator _____ the assembly chose had read Equiano. The blank is", ["whom — the assembly chose him", "who — he the assembly chose", "whoever — always for people", "whomever — always after a noun"], 0, "Isolate: the assembly chose _____. Substitute <em>him</em>. Object form is whom."),
            check("Which sentence has clear, exam-safe pronoun use?", ["After Truth spoke, the crowd rose to its feet.", "After Truth spoke, they were amazed by them.", "Everyone must bring their self to the lecture.", "Send the notes to Jordan and I."], 0, "Crowd as a unit takes <em>its</em>. The second has two vague pronouns. The third mismatches <em>everyone</em> and bungles the reflexive. The fourth needs <em>me</em> (object of <em>to</em>).")
          ]
        ),
        section(
          "Park modifiers next to what they modify; keep lists parallel",
          "A modifier (word, phrase, or clause) describes something. English assumes it describes the nearest eligible noun or the subject that follows an introductory phrase.",
          "A misplaced modifier is too far from its target: <em>She almost ate all the grapes</em> (she came close to eating, but maybe ate none) versus <em>She ate almost all the grapes</em> (most grapes are gone). A dangling modifier has no legal target in the sentence: <em>Reading Douglass, the cruelty became clear</em> — cruelty cannot read. Fix danglers by putting the real actor after the comma or by rewriting the phrase as a clause with its own subject. Parallel structure means items in a series share the same grammatical form: nouns with nouns, infinitives with infinitives, clauses with clauses.",
          `Dangler: Walking through Baltimore, the ships filled the harbor.<br>
          (Ships were not walking.)<br>
          Fix A: Walking through Baltimore, Equiano saw ships filling the harbor.<br>
          Fix B: As Equiano walked through Baltimore, the ships filled the harbor.<br><br>
          Parallel: She came to bury Caesar, not to praise him. &nbsp;(to + verb // to + verb)<br>
          Not parallel: She came to bury Caesar, not praising him.`,
          {
            label: "dangling modifier diagnosis",
            problem: "Why is this wrong, and how do you fix it? <em>Having finished the Narrative, the lamp was blown out.</em>",
            steps: [
              "<strong>Identify the modifier:</strong> <em>Having finished the Narrative</em> is a participial phrase. It expects to modify the next noun.",
              "<strong>Identify the next noun:</strong> <em>lamp</em>. A lamp cannot finish a book. The actor is missing — that is a dangler, not merely a 'style issue.'",
              "<strong>Fix by naming the actor after the comma:</strong> Having finished the Narrative, Douglass blew out the lamp. Now the phrase touches the person who actually finished.",
              "<strong>Fix by making a clause:</strong> After Douglass finished the Narrative, the lamp was blown out. The phrase is no longer hunting for a noun to modify."
            ],
            answer: "Answer: dangler — the lamp is not the reader. Supply Douglass after the comma, or rewrite as an adverb clause."
          },
          {
            label: "misplaced modifier and parallelism",
            problem: "Repair: (1) <em>Poe almost wrote nothing but 'Nevermore' in the last stanzas.</em> (Did he almost write, or write almost nothing else?) (2) <em>Truth demanded recognition, justice, and to be heard.</em>",
            steps: [
              "<strong>(1) <em>Almost</em> attaches to the word after it.</strong> 'Almost wrote nothing but...' claims he nearly failed to write. If the meaning is that the word <em>Nevermore</em> dominates those stanzas, park <em>almost</em> by the quantity: Poe wrote almost nothing but 'Nevermore' in the last stanzas.",
              "<strong>Other classic misplacements:</strong> 'She served cake to the children on paper plates' (were the children on plates?). Move the phrase: She served cake on paper plates to the children.",
              "<strong>(2) Series mismatch:</strong> two nouns (<em>recognition, justice</em>) + an infinitive (<em>to be heard</em>). Make all nouns: recognition, justice, and a hearing. Or all infinitives: to be recognized, to receive justice, and to be heard.",
              "<strong>Shakespeare's model:</strong> 'I come to bury Caesar, not to praise him' stays parallel on purpose — two infinitive phrases — which is why the antithesis cuts."
            ],
            answer: "Answer: move <em>almost</em> next to the quantity it limits; rewrite Truth's list so every item has the same form."
          },
          { problem: "Fix the dangler: <em>Reading 'I'm Nobody! Who are you?' the idea of public fame felt cheap.</em>", hint: "Ideas cannot read Dickinson. Put a reader after the comma, or write 'When we read...' so the phrase is no longer a hanging participle." },
          "If the modifier is vivid, students assume it attaches to the interesting noun even when grammar attaches it to the nearest one. The sentence does not care which noun you meant. It cares which noun sits in the slot.",
          [
            check("'Walking down the lane, the apple trees came into view.' The problem is a", ["Dangling modifier — trees were not walking", "Comma splice", "Subject-verb disagreement", "Who/whom error"], 0, "The participial phrase tries to modify the next noun, <em>trees</em>. Put a walker after the comma, or rewrite: As we walked down the lane, the apple trees came into view."),
            check("Which list is parallel?", ["to bury Caesar, not to praise him", "to bury Caesar, not praising him", "burying Caesar, not to praise him", "to bury Caesar, and praise"], 0, "Two matching infinitive phrases. The others mix an infinitive with a participle or drop <em>to</em> on the second item.")
          ]
        )
      ]
    },

    "efdn-05": {
      title: "Vocabulary: roots, context, and connotation",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Unlock unfamiliar words with morphology, then with context, then with the emotional charge a word carries. NES reading items (competency 0001) test whether you can prove a meaning from evidence rather than from a vague hunch.</p>`,
      sections: [
        section(
          "Prefixes, roots, and suffixes are reusable machinery",
          "Many English academic words are built from Greek and Latin parts. If you can split a word, you can often bound its meaning before you look at the sentence.",
          "A prefix attaches to the front and usually tweaks meaning (not, again, badly, across). A root carries the core idea. A suffix often marks the job: <em>-tion</em> noun, <em>-ive</em> adjective, <em>-ly</em> adverb. High-yield roots: <em>dict/dic</em> speak, <em>scrib/script</em> write, <em>port</em> carry, <em>spect</em> look, <em>ject</em> throw, <em>cred</em> believe, <em>bene</em> good, <em>mal</em> bad, <em>chron</em> time, <em>phon</em> sound, <em>duc/duct</em> lead, <em>voc/vok</em> call, <em>path</em> feeling. Procedure: split, gloss each piece, predict a meaning, then confirm in context so you do not get trapped by a look-alike (<em>ingenious</em> vs <em>ingenuous</em>).",
          `un + preced + ent + ed<br>
          un = not; preced = go before; -ent/-ed = adjectival<br>
          unprecedented &approx; never having gone before<br><br>
          Family around <em>scrib/script</em>: describe (write down), manuscript (written by hand), inscription (written into), scripture, subscribe (write under).<br>
          Family around <em>spect</em>: inspect, spectator, respect, conspicuous, circumspect.`,
          {
            label: "unpacking a hard word",
            problem: "Without a dictionary, bound the meaning of <em>circumnavigate</em> and of <em>malediction</em>.",
            steps: [
              "<strong>circumnavigate:</strong> <em>circum</em> = around (circumference, circumspect). <em>nav</em> = ship/sail (navy, navigate). Verb. Prediction: to sail around. Confirm: Magellan's expedition circumnavigated the globe.",
              "<strong>malediction:</strong> <em>mal</em> = bad. <em>dict</em> = speak. <em>-ion</em> = noun. Prediction: a speaking of evil — a curse. Contrast <em>benediction</em> (good-speaking, a blessing).",
              "<strong>Trap check:</strong> do not confuse <em>malediction</em> with <em>malediction's</em> cousin <em>contradiction</em> (speak against) or with <em>diction</em> alone (word choice). The prefix is doing real work.",
              "<strong>Exam transfer:</strong> if two choices are close, prefer the one that accounts for every morpheme, not the one that matches only the root you recognized first."
            ],
            answer: "Answer: circumnavigate = sail/travel around; malediction = a curse (evil speech)."
          },
          {
            label: "using a word family from a public-domain line",
            problem: "Dickinson writes of a 'thing with feathers that perches in the soul.' Using roots, distinguish <em>inspire, expire, perspire, spirit</em> as a family, then decide which best names the inward 'breath' her metaphor treats as living.",
            steps: [
              "<strong>Shared root:</strong> <em>spir</em> = breathe. <em>in-spire</em> = breathe into (hence 'fill with spirit'). <em>ex-pire</em> = breathe out, hence die. <em>per-spire</em> = breathe through (sweat). <em>spirit</em> = the breath/life of a person.",
              "<strong>Apply to the poem:</strong> hope 'perches' and 'sings' — it behaves like a living breath inside the soul. <em>Spirit</em> and <em>inspire</em> sit nearest that picture; <em>expire</em> is the opposite pole.",
              "<strong>Why morphology first:</strong> even if you have never seen <em>perspire</em> in a biology passage, <em>per</em> + <em>spir</em> still yields a defensible guess you can check against context.",
              "<strong>Look-alike warning:</strong> <em>sprite</em> looks related but is not the academic member of this family; do not let spelling rhyme override the root."
            ],
            answer: "Answer: <em>spir</em> = breathe; hope as inward living breath aligns with <em>spirit/inspire</em>, not <em>expire</em>."
          },
          { problem: "Split and gloss <em>benevolent</em> and <em>revocation</em>.", hint: "bene = good, vol = wish; re = back, voc = call, -ation = noun. Predict before you think of a thesaurus synonym." },
          "Guessing from a word that merely looks similar (<em>complacent</em> vs <em>complaisant</em>; <em>incredible</em> vs <em>incredulous</em>). Pieces must be real morphemes, not coincidental letter clumps. <em>Island</em> is not <em>is + land</em> in the Latin sense.",
          [
            check("The most defensible morphological meaning of <em>retrospective</em> is", ["looking back", "looking forward", "speaking badly", "carrying across"], 0, "<em>retro</em> = back; <em>spect</em> = look. Prospective would be forward-looking. Malediction is speaking badly; transport is carrying across."),
            check("If <em>scrib/script</em> means write, a <em>nondescript</em> person is most nearly", ["not distinctly 'written' or marked out — lacking distinctive features", "unable to read", "famous in manuscripts", "under a doctor's prescription"], 0, "<em>Non</em> + <em>descript</em> (described/written down) yields 'not clearly described,' hence ordinary-looking. The other choices grab nearby English words instead of the morphemes.")
          ]
        ),
        section(
          "Context clues are evidence, not vibes",
          "Morphology gives a bounded guess. The sentence and surrounding sentences confirm, narrow, or overturn that guess.",
          "Five useful clue types: definition/appositive (the word is restated), synonym, antonym/contrast (<em>but, unlike, however</em>), example/list, and inference (you must combine details). Procedure: (1) cover the target word; (2) read the full sentence plus one sentence on each side; (3) predict a plain-language meaning; (4) check morphology; (5) prove the choice with a quoted clue. If the passage does not support a fancy extra sense, do not import it from your life. Exam wrong answers often use a real dictionary sense that does not fit this context.",
          `Cover the word &rarr; predict &rarr; match a clue type &rarr; prove<br>
          Definition: The hold was loathsome, that is, sickening to breathe in.<br>
          Contrast: He called literacy a blessing, yet at times it felt like a curse.<br>
          Example: She wanted a benediction — a blessing, a good word at parting.<br>
          Inference: The stench was so intolerably loathsome that... (degree words prove intensity)`,
          {
            label: "definition and inference in Equiano",
            problem: "Equiano writes that the stench of the hold 'was so intolerably loathsome' that many enslaved people died. What does <em>loathsome</em> mean here, and which clue type proves it?",
            steps: [
              "<strong>Cover the word:</strong> the stench was so intolerably _____ that people died. Prediction: horribly disgusting; causing revulsion.",
              "<strong>Clue type:</strong> inference plus degree. <em>Intolerably</em> and the death that follows are not a dictionary restatement, but they bound the word to an extreme of disgust, not to a mild dislike.",
              "<strong>Reject a dictionary tourist:</strong> <em>loath</em> as in 'reluctant' ('I am loath to go') is related historically but is the wrong sense here. The passage is about a smell, not about unwillingness.",
              "<strong>Confirm:</strong> morphology is thin here; context does the heavy lifting. On the exam, pick the choice about disgusting/repellent, not the choice about reluctance."
            ],
            answer: "Answer: disgusting, repulsive — inferred from 'intolerably' plus lethal conditions; not 'unwilling.'"
          },
          {
            label: "contrast clue in Douglass, and knowing when context is thin",
            problem: "Douglass writes that learning to read 'had been a curse rather than a blessing. It had given me a view of my wretched condition, without the remedy.' What does <em>wretched</em> mean, and what can you not yet conclude?",
            steps: [
              "<strong>Contrast:</strong> curse vs blessing. Reading revealed something painful, not comforting.",
              "<strong>Definition-by-consequence:</strong> the condition is one for which he has 'a view' but 'without the remedy' — so <em>wretched</em> is miserable, deeply unfortunate, not merely 'poor quality' as in a wretched essay.",
              "<strong>Stop where evidence stops:</strong> the sentence does not define <em>remedy</em> as a specific political program. Do not leap to a modern slogan the passage has not earned. <em>Remedy</em> here is simply a means of correcting the condition.",
              "<strong>When context is thin:</strong> if a word sits in a spare line with no restatement, contrast, or example, combine morphology with the passage's topic, and eliminate choices that contradict tone. Do not pretend a clue exists."
            ],
            answer: "Answer: wretched = miserable / deeply unfortunate; proved by curse-not-blessing plus 'without the remedy.' Do not over-specify the remedy."
          },
          { problem: "In 'Hope is the thing with feathers that perches in the soul,' what context clues tell you <em>perches</em> is literal-for-a-bird and metaphorical-for-hope?", hint: "Feathers and a bird-action verb are an example/inference cluster. Hope cannot literally sit on a branch inside a soul; the surrounding bird words force the metaphor." },
          "Using only the word immediately next to the target, or importing a meaning you 'just know' from another course. The credited evidence is in this passage. Also: a real but wrong dictionary sense is the most dangerous distractor.",
          [
            check("Douglass calls literacy at times 'a curse rather than a blessing.' The phrase <em>rather than</em> is chiefly a clue of", ["Contrast/antonym — curse is set against blessing", "Example — a list of curses", "Appositive definition of literacy", "A root meaning 'write'"], 0, "<em>Rather than</em> signals opposition. You can bound <em>curse</em> as the opposite of <em>blessing</em> in this sentence even before you recall theology."),
            check("In Equiano, a smell is 'intolerably loathsome.' Which meaning of <em>loathsome</em> fits?", ["Causing disgust or horror", "Mildly inconvenient", "Legally forbidden", "Unwilling, as in 'loath to go'"], 0, "Death and 'intolerably' force an extreme of disgust. The 'unwilling' sense of <em>loath</em> is a real related word that does not fit a smell.")
          ]
        ),
        section(
          "Denotation is the dictionary; connotation is the charge — and figures add a second layer",
          "Two words can share a denotation (roughly the same referred thing) and still steer feeling differently. Figurative language then uses one domain to talk about another.",
          "Denotation = the stable, public meaning. Connotation = the emotional, cultural, or tonal freight (positive, negative, or formal). <em>Slender, thin, skinny, scrawny</em> can point at a similar body; they do not send the same social signal. Authors choose connotations to build tone. Figurative language (metaphor, simile, personification, hyperbole, understatement) is not 'pretty extra': it is a meaning engine. Literal = the words as denotation; figurative = a comparison or stretch you must unpack. NES will ask you to distinguish a neutral synonym from a loaded one, and a topic-word from the figurative claim.",
          `Denotation overlap, connotation split:<br>
          house (neutral) / home (warmth, belonging) / shack (poverty, scorn) / residence (formal)<br>
          asked / demanded / begged / inquired<br><br>
          Dickinson: Hope is the thing with feathers. &nbsp;(metaphor: hope = bird)<br>
          Blake: Tyger, burning bright. &nbsp;(metaphorical burning + apostrophe: addressing the tyger)<br>
          Shakespeare: All the world's a stage. &nbsp;(extended metaphor)`,
          {
            label: "choosing the charged word",
            problem: "A historian describes enslaved people being forced into a ship's hold. Which verb is most precise in denotation and most honest in connotation: <em>placed, housed, packed, invited</em>?",
            steps: [
              "<strong>Denotation first:</strong> <em>invited</em> is factually false. <em>Housed</em> denotes shelter and implies care. <em>Placed</em> is oddly neutral, as if arranging objects on a shelf. <em>Packed</em> denotes filling a space tightly, which matches Equiano's account of the hold.",
              "<strong>Connotation:</strong> <em>packed</em> carries crowding and objectification — uncomfortable, and therefore historically honest. <em>Housed</em> would whitewash. Tone must match the source, not the reader's wish for gentler language.",
              "<strong>Exam trap:</strong> a choice that is 'nicer' is not therefore better. Another trap is a word with the right feeling but the wrong denotation (e.g., <em>executed</em> if no one is being legally put to death in that sentence).",
              "<strong>Transfer:</strong> when an item asks for the author's tone, hunt connotative verbs and adjectives, not the topic noun."
            ],
            answer: "Answer: <em>packed</em> — denotation of crowding plus a connotation that does not sanitize the hold."
          },
          {
            label: "metaphor versus literal, Dickinson",
            problem: "In 'Hope is the thing with feathers / That perches in the soul / And sings the tune without the words,' what is figurative, and what would a purely literal reading miss?",
            steps: [
              "<strong>Literal layer:</strong> a small bird perches and sings a wordless tune. That picture is the vehicle.",
              "<strong>Figurative claim:</strong> hope is being mapped onto that bird: inward, alive, persistent, not requiring a speech. The tenor is hope; the vehicle is the bird.",
              "<strong>What is not the point:</strong> Dickinson is not giving ornithology advice. A choice that says the speaker's hobby is birdwatching confuses vehicle with tenor.",
              "<strong>Connotation of <em>sings</em>:</strong> not merely 'makes noise' (denotation) but warmth, continuance, grace — which is why 'never stops at all' in the next lines matters. A synonym like <em>screeches</em> would wreck the tone."
            ],
            answer: "Answer: metaphor (hope = bird); a literal bird-watching reading misses the claim about hope's inward persistence."
          },
          { problem: "Replace <em>said</em> in 'The fox said the grapes were sour' with a verb whose connotation matches Aesop's self-justifying sneer.", hint: "Denotation can stay 'uttered words.' Connotation should mark dismissiveness: <em>sniffed, sneered, scoffed</em> — not <em>whispered</em> or <em>confessed</em>." },
          "Treating thesaurus mates as interchangeable. <em>Childish</em> and <em>childlike</em> share a root and a denotation involving children; one insults, one praises. NES loves that split.",
          [
            check("Which pair best shows a shift in connotation with nearly the same denotation?", ["slender vs scrawny", "hope vs feathers", "raven vs nevermore", "subject vs predicate"], 0, "Both slender and scrawny can denote a thin body; slender often flatters, scrawny often insults. Hope/feathers is a metaphor, not a synonym pair."),
            check("Shakespeare's 'All the world's a stage' is best described as", ["A metaphor equating social life with theatrical performance", "A literal claim that the planet is made of wood planks", "A simile, because it uses <em>like</em> or <em>as</em>", "An antonym context clue for <em>world</em>"], 0, "No <em>like/as</em>, so not a simile. The world is not literally a platform. The figure maps life onto theater so that later lines about 'exits' and 'entrances' can work.")
          ]
        )
      ]
    },

    "efdn-06": {
      title: "The reading process: before, during, after",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Read on purpose. Before you enter a text, you will set a job and preview structure. During, you will monitor and annotate. After, you will summarize, infer only what the text earns, and map those habits onto NES stems. Unofficial prep still rewards official reading behavior: evidence first.</p>`,
      sections: [
        section(
          "Before reading: purpose, preview, activate — without hijacking the text",
          "Vocabulary tools help at the word level. The reading process starts one level up: why am I reading this, and how is it built?",
          "Set a purpose: pleasure, gist, argument critique, or exam-item hunt. Those purposes change speed and annotation. Preview the title, first and last paragraphs, headings, stanza breaks, speaker, and (on the test) the stem and choices before you drown in details. Activate prior knowledge — who Aesop is, what a ship's hold was — as a hypothesizing aid, then hold it loosely. Prior knowledge that contradicts the passage must lose. On NES items, previewing the question is part of 'before': if the stem asks for tone, you will not spend your first pass outlining plot.",
          `Before-reading map:<br>
          1. Read the stem (exam) or title (open reading).<br>
          2. Name the job: gist / argument / craft / vocab-in-context.<br>
          3. Preview architecture: stanzas? dialogue? a claim in sentence one?<br>
          4. Activate 1–2 relevant prior ideas, tagged as guesses.<br>
          5. Enter the text ready to revise those guesses.<br><br>
          Whitman title 'I Hear America Singing' &rarr; expect catalog, sound, many workers, not a single plot.`,
          {
            label: "previewing Whitman",
            problem: "You are about to read 'I Hear America Singing.' The exam stem asks: 'The catalog of workers mainly suggests that the speaker views American labor as...' What do you do before a close first line-by-line?",
            steps: [
              "<strong>Read the stem first:</strong> the job is the speaker's view of labor, not a quiz on every occupation. That purpose licenses a hunt for pattern and tone-words, not a list to memorize.",
              "<strong>Preview architecture:</strong> the poem is a catalog (mechanics, carpenter, mason, boatman...). Catalogs usually argue by accumulation: many similar items &rarr; a claimed unity or variety.",
              "<strong>Activate lightly:</strong> you may recall Whitman as a poet of democracy and the body. Tag that as a hypothesis: 'possibly celebrating ordinary work.' Do not yet write 'Whitman always...' into an answer.",
              "<strong>Enter:</strong> now the first line, 'I hear America singing, the varied carols I hear,' can be checked against the hypothesis (varied + singing = valued multiplicity). Purpose made the first line evidence, not scenery."
            ],
            answer: "Answer: stem-driven purpose + notice of catalog structure + a loose Whitman hypothesis, then read to confirm or revise."
          },
          {
            label: "purpose for an exam versus purpose for a whole work",
            problem: "Compare two before-reading setups: (A) You have 90 seconds for a paragraph from Douglass attached to a main-idea item. (B) You are rereading the <em>Narrative</em> to teach it.",
            steps: [
              "<strong>(A) Exam purpose:</strong> preview the question ('main idea of the paragraph'). Skim for the paragraph's claim and how the rest supports it. Do not spend the clock reconstructing Douglass's full biography from memory.",
              "<strong>(B) Teaching purpose:</strong> preview chapter titles, note recurring conflicts (literacy, violence, identity), and plan to track change across chapters. Slow annotation is appropriate.",
              "<strong>The error is using B's process on A's clock,</strong> or using A's skimming when the stem asks about a single verb's connotation (that needs a microscope, not a catalog glance).",
              "<strong>Match tool to stem:</strong> vocab-in-context &rarr; cover the word. Tone &rarr; connotative diction. Structure &rarr; paragraph jobs. Inference &rarr; two details plus a conservative leap."
            ],
            answer: "Answer: exam 'before' is stem-specific and fast; teaching 'before' is architectural and slow. Match the process to the job."
          },
          { problem: "You see a passage from Poe's 'The Raven' and a stem that asks for mood. What three preview moves do you make?", hint: "Read the stem (mood, not plot summary). Glance at time words and setting (midnight, chamber). Note sound devices you may later cite. Do not start paraphrasing every stanza yet." },
          "Diving into line 1 with no job, then highlighting everything. Highlighting is not a purpose. Also: forcing a remembered SparkNotes theme onto a passage that is doing something smaller and more local.",
          [
            check("Best first move on an NES reading item?", ["Read the stem so you know the job, then preview the passage's shape", "Read the passage twice before looking at the question", "Skim the choices and pick the longest", "Recall the author's biography and choose from that"], 0, "Purpose first. Biography can mislead; choices-first guessing skips evidence; a second full read may waste time if the stem only needs one paragraph."),
            check("Previewing 'I Hear America Singing,' a reader should most usefully expect", ["A catalog of varied workers whose 'carols' the speaker hears", "A murder mystery like 'The Raven'", "A rhymed sonnet arguing against labor", "Stage directions for a play"], 0, "Title + known Whitman catalog form predict accumulation of workers and song. The other genres are prior-knowledge hijacks.")
          ]
        ),
        section(
          "During reading: monitor, annotate, question, and infer conservatively",
          "Purpose tells you what to look for. During reading you keep a running check: does this still make sense, and where is the evidence for the job I set?",
          "Monitor: when meaning breaks, stop. Reread a smaller chunk, paraphrase it in plain words, then continue. Annotate with a job: star a claim, underline a shift (but, yet, however, suddenly), circle an unfamiliar word, jot ? for a question the text raises. Do not color entire paragraphs. Infer = combine two or more textual details to name something unstated but required; it is not a guess from your life. Visualize when a setting is doing work (Poe's midnight chamber). For poetry, track the speaker, not the biographical author, unless the item asks for the author.",
          `During-reading toolkit:<br>
          Paraphrase a hard sentence in 8–12 ordinary words.<br>
          Mark shifts: but / yet / however / then / therefore.<br>
          Inference test: Detail A + Detail B &rarr; conclusion C that must be true if A and B are true.<br>
          If C could be false while A and B stay true, C is too big.<br><br>
          Poe: midnight + dreary + weak and weary &rarr; exhausted speaker in a bleak hour (supported).<br>
          Poe: therefore the speaker is a medical doctor (unsupported).`,
          {
            label: "annotating a short Poe opening",
            problem: "During a first pass of 'Once upon a midnight dreary, while I pondered, weak and weary,' what do you mark, and what inference is legal?",
            steps: [
              "<strong>Setting/time:</strong> midnight, dreary — mood work, not filler. Circle those for a mood stem.",
              "<strong>Dependent clause:</strong> <em>while I pondered</em> — speaker is thinking, not yet acting. <em>Weak and weary</em> doubles exhaustion (sound + sense).",
              "<strong>Legal inference:</strong> the speaker is tired and the hour is bleak. You combined time, weather-word, and body-words.",
              "<strong>Illegal inference:</strong> 'He is grieving a woman named Lenore' — that may become true later in the poem, but this line does not yet earn it. During-reading means tracking what has been established so far, especially on a passage excerpt."
            ],
            answer: "Answer: mark time, mood diction, and the speaker's fatigue; infer exhaustion in a bleak hour; do not import later plot."
          },
          {
            label: "monitoring a break in Douglass",
            problem: "A reader hits Douglass's claim that literacy felt like a curse and stops, thinking 'that cannot be right; reading is always good.' What should happen next?",
            steps: [
              "<strong>Notice the monitor alarm:</strong> the sentence contradicted the reader's prior belief. That is a feature, not a reason to skip.",
              "<strong>Reread locally:</strong> he has a view of his 'wretched condition, without the remedy.' Paraphrase: knowledge showed the horror without yet showing an escape.",
              "<strong>Question the text:</strong> Why would a gift hurt? The next sentences are likely to answer. Annotation: 'literacy = awareness without power (here).'",
              "<strong>Keep the author's claim:</strong> the exam will offer a choice that restores the reader's comfortable belief ('he regretted education because it was boring'). That choice fails the paraphrase."
            ],
            answer: "Answer: treat the contradiction as a signal to reread and paraphrase; do not 'correct' Douglass with a platitude."
          },
          { problem: "Infer conservatively from Blake: 'Tyger Tyger, burning bright, / In the forests of the night.' What can you claim about the tyger after two lines?", hint: "You can claim fierce, luminous, nocturnal imagery. You cannot yet claim a full theology of good and evil — later lines raise that question, but these two have not finished the argument." },
          "Highlighting entire stanzas, or inferring from your world ('my uncle owned a boat, so Whitman's boatman is lonely') instead of from the line. If you cannot point to the words, you are not inferring; you are decorating.",
          [
            check("Which is a conservative inference from 'I hear America singing, the varied carols I hear'?", ["The speaker presents American voices as many and songlike", "Whitman hates cities", "The speaker is literally deaf in one ear", "The poem is a tragedy about a dead captain"], 0, "Varied + carols + hear are in the line. The others import other Whitman poems, a joke, or 'O Captain! My Captain!'"),
            check("When a sentence contradicts what you expected, the best during-reading move is to", ["Reread and paraphrase the author's actual claim", "Skip it as a printing error", "Replace it with a familiar proverb", "Highlight the rest of the page in one color"], 0, "Comprehension monitoring means repairing the break from the text, not from a proverb.")
          ]
        ),
        section(
          "After reading: summarize, distinguish topic from main idea, then answer the stem",
          "During reading gathered marks. After reading you compress, check, and only then match a choice. Compression is not a replay of every event.",
          "A summary is a short, neutral restatement of the central claim or plot in order, without your opinion. A paraphrase restates a local sentence at about the same length. An analysis names how craft produces meaning. Topic is the subject matter (one word or short phrase). Main idea is what the text says about that topic. After an exam passage: glance back at your purpose, predict an answer in your own words, then eliminate choices that are too broad, too narrow, true-but-not-in-this-passage, or opposite in tone. True statements that are not the answer to this stem are still wrong.",
          `After-reading stack:<br>
          Topic: what it is about (the fox and the grapes)<br>
          Main idea: what it says about that (failure can produce sour-grapes scorn)<br>
          Summary: 1–3 sentences of the essential plot/claim<br>
          Inference: a warranted extra step<br>
          Opinion: your judgment (not asked unless the stem says so)<br><br>
          NES elimination: too broad / too narrow / not in passage / opposite tone / true of another text`,
          {
            label: "summary versus replay — Aesop",
            problem: "After 'The Fox and the Grapes,' which after-reading product is a summary, and which is a topic label?",
            steps: [
              "<strong>Events:</strong> A fox wants grapes, cannot reach them, and walks away calling them sour.",
              "<strong>Summary (neutral, complete, short):</strong> Unable to reach the grapes he desired, a fox declared them sour. That keeps sequence and the closing twist without retelling every leap.",
              "<strong>Topic:</strong> desire and rationalization — or even just 'sour grapes.' A topic is not a sentence-claim.",
              "<strong>Not a summary:</strong> a stanza-by-stanza replay, or 'this teaches us to try harder' (that is a moral you imposed; Aesop's sting is the sneer, not grit)."
            ],
            answer: "Answer: summary = desire, failed reach, scornful dismissal; topic = a short label like 'rationalizing failure.'"
          },
          {
            label: "main idea versus a true detail — Douglass",
            problem: "A paragraph explains that literacy showed Douglass his 'wretched condition, without the remedy.' An item asks for the main idea. Choices include a true detail about Mrs. Auld teaching him the alphabet. How do you decide?",
            steps: [
              "<strong>Predict in your own words before looking:</strong> learning to read, in this paragraph, hurts because it reveals bondage without supplying an escape.",
              "<strong>Mrs. Auld's alphabet</strong> may be true in the <em>Narrative</em>, but if it is not what this paragraph is doing, it is too narrow or off-scope — a supporting detail from another section.",
              "<strong>Too broad:</strong> 'Education is important.' That ignores the curse/blessing tension the paragraph actually argues.",
              "<strong>Opposite tone:</strong> 'Douglass wanted to remain illiterate forever.' He does not; he is naming a painful stage. After-reading means matching the paragraph's job, not the book you remember as a whole."
            ],
            answer: "Answer: pick the choice that captures literacy as painful awareness without a remedy; reject true-but-elsewhere details and bumper-sticker broadness."
          },
          { problem: "Write a one-sentence summary of the opening of 'The Raven' (midnight, weary speaker, a tapping) and then a three-word topic.", hint: "Summary needs speaker, time, and the interruption. Topic might be 'uneasy night vigil' — not a theme yet, and not a list of every adjective." },
          "Calling a retelling of every event a summary, or calling a topic word a main idea. 'Hope' is a topic of Dickinson's poem; 'hope persists inwardly even without language' is a main-idea candidate.",
          [
            check("Best one-sentence summary of Aesop's 'The Fox and the Grapes'?", ["A fox, failing to reach grapes, sneers that they were sour anyway", "Grapes", "Foxes eat fruit in summer", "Never give up on your goals"], 0, "The first compresses the plot and the twist. The second is a topic. The third is a generality not in the fable. The fourth is a moral the fable does not actually preach."),
            check("A choice restates a true fact from another chapter of Douglass that this excerpt never mentions. On a main-idea item you should", ["Reject it as out of scope for this passage", "Accept it because Douglass did live that fact", "Accept it if it is longer than the other choices", "Accept it if it mentions slavery, the book's general topic"], 0, "After-reading for an exam is passage-bound. A true extra-textual fact is still a wrong answer to 'what does this passage do?'")
          ]
        )
      ]
    },

    "efdn-07": {
      title: "Literary elements: plot, character, setting, theme",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Name the moving parts of a story without confusing them. You will map plot and conflict, read character and setting as evidence, and separate a topic from a theme — the distinction NES literature items (competency 0005) use to trap reciters of vague morals.</p>`,
      sections: [
        section(
          "Plot is a pattern of conflict, not a pile of events",
          "After-reading summaries compress what happened. Plot analysis names the structure those happenings form, driven by conflict.",
          "Plot is the arranged sequence of events, usually: exposition (world and baseline), inciting incident (conflict ignites), rising action (complications), climax (turning point of greatest pressure, where the conflict pivots), falling action, and resolution (new baseline). Conflict is a struggle: person vs person, vs self, vs society, vs nature, vs fate. Not every exciting moment is the climax — the climax is where the central conflict turns. A subplot is a second chain that should eventually touch the main chain. Fables and short lyrics may compress or skip stages; still ask 'what does the character want, what blocks it, and where does that struggle change?'",
          `Want &rarr; block &rarr; pressure rises &rarr; turn &rarr; new normal<br>
          Aesop's fox: wants grapes (desire) &rarr; height blocks him (nature/circumstance) &rarr; repeated leaps (rising) &rarr; he abandons the attempt and names the grapes sour (climax as psychological turn) &rarr; walks off (resolution with a lie in place).<br><br>
          Climax &ne; 'the most special-effects moment.' It is the hinge of the conflict.`,
          {
            label: "mapping the fox",
            problem: "Map exposition, conflict type, climax, and resolution in 'The Fox and the Grapes.'",
            steps: [
              "<strong>Exposition:</strong> a hungry fox finds grapes hanging high. World = rural path; baseline = desire without yet failing.",
              "<strong>Conflict:</strong> character vs circumstance (the grapes' height). It is not primarily fox vs another animal.",
              "<strong>Rising action:</strong> the leaps. Each failure increases the need for an explanation that will protect pride.",
              "<strong>Climax/turn:</strong> not the highest leap, but the decision to stop and reframe the grapes as sour. The conflict 'resolves' by changing the want instead of the world. Resolution: he departs, self-story intact. Students who pick 'the last leap' as climax have confused spectacle with hinge."
            ],
            answer: "Answer: hunger + high grapes; vs circumstance; turn = sour-grapes declaration; resolution = departure with a rationalization."
          },
          {
            label: "climax versus ending in a lyric-narrative",
            problem: "In Poe's 'The Raven,' the bird repeatedly says 'Nevermore,' and the speaker ends still in the shadow. Why is the climax not simply 'the last Nevermore'?",
            steps: [
              "<strong>Identify the speaker's want:</strong> relief from grief, later a hope of reunion or forgetting (the poem tightens this as it goes).",
              "<strong>Identify the block:</strong> a visitor that will only say Nevermore — a one-word fate.",
              "<strong>The hinge:</strong> the moment the speaker stops treating the bird as a curious guest and starts asking questions whose answers he cannot bear (Lenore, relief). That is where the conflict turns from spooky incident to psychological trap.",
              "<strong>The ending:</strong> the shadow that 'shall be lifted — nevermore!' is resolution (a new, worse baseline), not automatically the climax. Exam choices often label the last line 'climax' because it is famous. Famous &ne; hinge."
            ],
            answer: "Answer: climax = the turn into questions the raven's Nevermore can torture; the final shadow is resolution of that turn."
          },
          { problem: "Name the central conflict of the tortoise-and-hare fable (Aesop) and where it turns.", hint: "Hare vs tortoise is person vs person, but also each vs self (arrogance vs persistence). The turn is the hare's nap — the hinge where overconfidence changes the outcome — not the starting line." },
          "Listing events in order and calling that a plot analysis. Order is sequence; plot is sequence under pressure from a want and a block. Also: calling the most violent or famous moment the climax by default.",
          [
            check("In 'The Fox and the Grapes,' the climax is best identified as", ["The fox's decision to stop leaping and call the grapes sour", "The first sight of the grapes", "The fact that grapes grow on vines", "The title"], 0, "The sight is inciting; the botanical fact is setting/world; the title is not an event. The sour declaration is the psychological hinge."),
            check("A student says the climax of 'The Raven' must be the final line because it is the most famous. That error confuses", ["Fame or finality with the conflict's turning point", "Setting with character", "Simile with metaphor", "Who with whom"], 0, "Climax is a structural job: where the central struggle turns. Last lines are often resolution. Fame is not a literary element.")
          ]
        ),
        section(
          "Character is revealed; setting is a pressure, not a postcard",
          "Plot tells what happens. Character and setting tell to whom and in what world — and they should explain why the plot can happen that way.",
          "Direct characterization tells ('He was a proud fox'). Indirect characterization shows, via STEAL: Speech, Thoughts, Effect on others, Actions, Looks. Round characters are complex; flat characters have one dominant trait (useful in fables). Dynamic characters change; static characters do not. Protagonist = the central struggler, not always a hero; antagonist = the opposing force, not always a villain (it can be a storm, a law, a grief). Setting is time, place, and social/atmospheric conditions. Mood is the feeling the setting and diction create in the reader; tone is the author's or speaker's attitude. Exam questions ask how setting shapes conflict or character, not whether you can name the city.",
          `Indirect character (Austen's opening irony):<br>
          Speech of the 'truth' is public wisdom; the narrator's cool overstatement is the real characterization of a marriage market.<br><br>
          Setting as pressure (Poe): midnight + dreary chamber + lamplight + tapping<br>
          &rarr; isolation, fatigue, a mind primed to turn a sound into an omen.<br>
          Postcard reading: 'it is nighttime' (true, insufficient).`,
          {
            label: "indirect characterization in Austen",
            problem: "How does 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife' characterize a society — without describing a single face?",
            steps: [
              "<strong>Direct?</strong> No one is called greedy in a simple adjective. The line pretends to state a law of nature.",
              "<strong>Indirect — speech/thought of a culture:</strong> 'universally acknowledged' and 'must be' expose a community that treats wealth as a magnet for marriage. The narrator's exaggeration is the characterization: this society is marriage-hungry and money-minded.",
              "<strong>Effect:</strong> readers are positioned to watch mothers and neighbors prove the 'law' true by their behavior (as the novel will). Character here is communal, not just individual.",
              "<strong>Exam transfer:</strong> when asked how a narrator characterizes, look at irony, what is treated as obvious, and what is left unsaid — not only at labels like 'kind' or 'cruel.'"
            ],
            answer: "Answer: ironic 'universal truth' indirectly characterizes a fortune-hunting marriage culture."
          },
          {
            label: "setting that does work in Poe and Whitman",
            problem: "Contrast the function of setting in the opening of 'The Raven' with the function of setting in 'I Hear America Singing.'",
            steps: [
              "<strong>Poe:</strong> midnight, dreary, a private chamber, a dying fire. Setting isolates the speaker and supplies mood (oppressive, watchful). The tapping needs that silence to become supernatural pressure. Setting is a partner in the conflict vs grief/fear.",
              "<strong>Whitman:</strong> workplaces of mechanics, carpenters, boatmen — a public, daytime, many-voiced America. Setting is not one room; it is a nation of sites. That expanse supports the claim of varied carols. Conflict is minimal; setting argues inclusion.",
              "<strong>Do not stop at 'Poe is dark, Whitman is happy.'</strong> Name the job: Poe's setting traps; Whitman's setting catalogs and celebrates.",
              "<strong>Character link:</strong> Poe's speaker is alone in his setting (mind under pressure). Whitman's speaker is a hearing presence moving across settings (self as national ear)."
            ],
            answer: "Answer: Poe's chamber isolates and darkens so grief can trap the speaker; Whitman's many work-sites enlarge the speaker into a national listener."
          },
          { problem: "Using STEAL, characterize Sojourner Truth from 'I have as much muscle as any man, and can do as much work as any man.'", hint: "Speech: comparative, public, insistent. Action implied: labor equal to men's. Effect: challenges the audience's definition of woman. You need not invent her appearance." },
          "Treating setting as a list of decorations ('there was a moon') without saying how it constrains or enables the conflict. A moon that lets a thief see the latch is a plot tool; a moon mentioned once for pretty is weaker evidence.",
          [
            check("The fox who calls unreachable grapes 'sour' is being characterized mainly through", ["Action and speech — he leaps, fails, then speaks a dismissive claim", "A narrator calling him 'evil' in an adjective (direct only)", "His costume", "The vineyard's tax laws"], 0, "We infer pride and self-justification from what he does and says. Fables often stay indirect plus a moral; Aesop does not need a paragraph of direct labels."),
            check("Poe's 'midnight dreary' chamber functions primarily as", ["Setting that creates isolation and a bleak mood that pressures the speaker's mind", "A theme stating that night is evil", "The protagonist", "A semicolon rule"], 0, "Time and place plus atmosphere shape what the tapping can mean. Setting is not a character and not itself a theme statement.")
          ]
        ),
        section(
          "Theme is a text-supported claim; topic is the subject matter",
          "You can now name what happens (plot) and to whom, where (character, setting). Theme is the idea the whole arrangement suggests — and it is the most missed distinction on literature items.",
          "A topic is a noun or short phrase: hope, grief, pride, literacy, marriage. A theme is a complete, arguable claim the work supports about that topic: 'People often scorn what they cannot obtain'; 'Hope can persist inwardly without a public language'; 'Literacy can wound before it frees.' Themes are not plot summaries, not one-word labels, not commands ('Don't give up!'), and not clichés unless the text actually earns that cliché. A symbol is a concrete thing that also means more (the raven, the grapes). A motif is a repeated element. Prove theme with two or three details from plot, character, setting, or diction — not with a bumper sticker you brought from home.",
          `Topic &rarr; what is it about?<br>
          Theme &rarr; what does it suggest about human experience?<br>
          Proof &rarr; which details force that suggestion?<br><br>
          Aesop topic: failure / desire / pride<br>
          Weak 'theme': Grapes. &nbsp;or&nbsp; Never give up.<br>
          Stronger theme: When desire fails, people may protect pride by belittling the thing they wanted.<br>
          Dickinson topic: hope<br>
          Not a theme: Birds. &nbsp;or&nbsp; Hope is nice.<br>
          Stronger: Hope is imagined as a small persistent song inside the self, independent of words.`,
          {
            label: "theme versus topic versus moral — Aesop",
            problem: "A student writes three statements about 'The Fox and the Grapes.' Sort them: (1) Grapes and foxes. (2) Don't be a quitter. (3) People often disparage what they cannot have.",
            steps: [
              "<strong>(1) Topic (actually two topics/characters).</strong> It names subject matter and stops. No claim.",
              "<strong>(2) A moral command,</strong> and a mismatched one: the fox does quit, and the fable's sting is his excuse, not a coach's pep talk. If the text rewarded persistence, the tortoise-and-hare would be the better source for that moral. Do not staple a school-poster lesson on the wrong fable.",
              "<strong>(3) Theme:</strong> a general claim about human behavior that the fox's sour speech illustrates. It is arguable (someone might emphasize hunger instead of pride) but it is text-warranted.",
              "<strong>Proof from the text:</strong> repeated failed leaps (want + block) + the untrue claim that the grapes are sour (pride-saving lie). Without the lie, you would have a different theme."
            ],
            answer: "Answer: (1) topic; (2) mismatched moral; (3) theme, proved by the sour-grapes speech after failure."
          },
          {
            label: "theme in Dickinson, not ornithology",
            problem: "Which is the best theme statement for 'Hope is the thing with feathers,' and why are the others wrong?",
            steps: [
              "<strong>Candidate A:</strong> Hope. — Topic only.",
              "<strong>Candidate B:</strong> The speaker owns a pet bird. — Literal vehicle mistaken for the whole; the bird is a metaphor.",
              "<strong>Candidate C:</strong> Hope lives inwardly, lightly, and keeps singing even in extremity. — Matches feathers, perches in the soul, sings without words, and (in later lines) is present in the gale. This is a claim, not a noun.",
              "<strong>Candidate D:</strong> Always look on the bright side. — Tone-deaf to Dickinson's spare, almost stoic image; also a command, not an interpretation of this poem's figure.",
              "<strong>Exam habit:</strong> if a choice is one word, it is probably a topic. If it is a command, it is probably a moral. If it is a plot fact ('a bird perches'), it is summary. Theme = claim + textual blood supply."
            ],
            answer: "Answer: C is a theme; A topic; B literal mix-up; D generic moral."
          },
          { problem: "Propose a theme for Douglass's literacy-as-curse passage, then name two supporting details.", hint: "Claim something like: knowledge can intensify suffering when it reveals injustice without yet conferring power. Details: 'curse rather than a blessing'; 'view of my wretched condition, without the remedy.'" },
          "Writing the topic in the theme blank, or recycling 'don't judge a book by its cover' for every story. If your theme would fit fifty unrelated works equally well, it is too generic to be this text's theme.",
          [
            check("Best theme statement for 'The Fox and the Grapes'?", ["People may scorn what they fail to obtain in order to protect their pride", "Foxes", "The fox jumped", "Always try harder and you will succeed"], 0, "The first is a text-supported claim. Foxes is a topic. The jump is plot. The last is a moral the fable does not reward — the fox does not succeed by trying harder."),
            check("Dickinson's 'Hope is the thing with feathers' has the topic 'hope.' A theme would be", ["A complete claim about hope that the bird-metaphor supports", "The single word <em>feathers</em>", "A command to buy a bird", "The poet's last name"], 0, "Theme = arguable, text-based statement about the topic. A word, a shopping command, or an author's name cannot fill that slot.")
          ]
        )
      ]
    },

    "efdn-08": {
      title: "Rhetoric and argument: claims, evidence, appeals",
      domain: "ela-foundation",
      intro: `<p><strong>Goal:</strong> Take arguments apart the way you took sentences apart. You will name claims, reasons, evidence, and warrants; identify ethos, pathos, and logos without treating emotion as a crime; and evaluate whether proof is relevant and sufficient. This is the bridge into NES competency 0003.</p>`,
      sections: [
        section(
          "A claim is arguable; evidence is the support; a warrant is the unstated glue",
          "Theme was a claim a literary text suggests. Rhetoric studies claims a speaker wants an audience to accept, plus the support offered.",
          "A claim is a debatable assertion (not a bare fact, not a definition everyone already grants). Reasons are the 'because' clauses. Evidence is the specific support: facts, statistics, examples, testimony, textual quotation. A warrant is the often-unstated assumption that lets evidence count as proof of the claim. Facts can be true and still not be the claim. Opinions can be claims if they are offered as something to be believed on the basis of support. Procedure: underline the sentence the rest of the passage is trying to make you accept; bracket the data; then say 'this data counts only if we assume ___' — that blank is the warrant.",
          `Claim: Sojourner Truth ought to be recognized as a woman and an equal laborer.<br>
          Reason: because she does the work men do.<br>
          Evidence: muscle, fieldwork, childbearing under slavery (her testimony).<br>
          Warrant: whoever performs that labor and bears that suffering counts as a woman/equal — physical labor and maternity are credentials, not disqualifiers.<br><br>
          Fact (not a claim): Thirteen is a number. &nbsp;Claim: Her having borne children should count as proof of womanhood.`,
          {
            label: "labeling the parts in Truth",
            problem: "From 'I have as much muscle as any man, and can do as much work as any man,' extract claim, evidence, and warrant.",
            steps: [
              "<strong>Local claim:</strong> she matches men in strength and work (and therefore, in the speech's larger claim, she is a woman who deserves the rights under discussion).",
              "<strong>Evidence:</strong> first-person testimony about her muscle and labor — experiential, not a census table. On an exam, testimony is still evidence; it is not 'just pathos' by default.",
              "<strong>Warrant:</strong> physical capacity and labor are legitimate criteria for the status she is being denied. If an audience assumes 'real women don't do fieldwork,' her evidence will not land — that is a clash of warrants, not a missing fact.",
              "<strong>Not the claim:</strong> the muscle itself. Muscle is support. Students often circle the vivid detail and miss the demand it serves."
            ],
            answer: "Answer: claim = I equal men in labor/strength (hence in womanhood/rights); evidence = her muscle and work; warrant = that kind of labor counts."
          },
          {
            label: "fact versus claim versus evidence in Douglass",
            problem: "Sort: (A) Douglass learned to read. (B) Learning to read can worsen a slave's suffering by revealing a condition he cannot yet escape. (C) He calls literacy 'a curse rather than a blessing' and says it gave a view 'without the remedy.'",
            steps: [
              "<strong>(A) Fact/report</strong> in the narrative's world — important, but not by itself an argumentative claim about what literacy does.",
              "<strong>(B) Claim</strong> — arguable interpretation of what literacy did to him (someone could argue literacy was only solace).",
              "<strong>(C) Evidence</strong> — quoted self-report that supports B.",
              "<strong>Warrant connecting C to B:</strong> Douglass is a credible reporter of his inner state, and 'curse' plus 'no remedy' names intensified suffering rather than mere annoyance. If a reader assumes he is exaggerating for effect, the warrant is contested."
            ],
            answer: "Answer: A fact; B claim; C evidence for B."
          },
          { problem: "In Antony's 'I come to bury Caesar, not to praise him,' what is the surface claim, and why might the warrant of the whole speech undercut it?", hint: "Surface claim = my purpose is burial, not praise. The speech then praises. Warrant of irony: a speaker may deny an intent while performing it. The real claim (Caesar was loyal/wronged) arrives through examples." },
          "Circling a statistic or a vivid story and calling it the claim. Numbers are usually evidence. Also: calling every sentence in an argument a claim. Most sentences are reasons, data, concessions, or transitions.",
          [
            check("Which sentence is a claim rather than a fact or a piece of evidence?", ["Literacy can wound when it reveals injustice without offering a way out", "Douglass wrote a narrative", "The word <em>curse</em> appears in the passage", "Thirteen is greater than twelve"], 0, "Only the first is a debatable assertion about what literacy does. The others are reportable facts or textual observations that might support a claim."),
            check("A warrant is best described as", ["The unstated assumption that makes evidence count as support for a claim", "A type of comma", "The title of a fable", "Any emotional word"], 0, "Without a warrant, evidence and claim sit in two piles. The warrant is the rule of relevance that joins them.")
          ]
        ),
        section(
          "Ethos, pathos, and logos are tools; name them, then judge them",
          "You can label claim and evidence. Appeals are the kinds of pressure those materials put on an audience.",
          "Logos = appeal to pattern, cause, definition, comparison, or data — the audience's sense that the reasoning hangs together. Ethos = appeal to the speaker's credibility, character, expertise, or goodwill (and to shared values). Pathos = appeal to the audience's feelings, imagination, or identity. Real speeches braid all three. Pathos is not automatically a fallacy, and logos is not automatically honest (bad data can be arranged logically). Exam task 1: identify which appeal a passage primarily uses. Exam task 2: evaluate whether the appeal is appropriate and non-manipulative for the audience and purpose. Do not treat 'emotional' as a synonym for 'invalid.'",
          `Logos: I have as much muscle as any man, and can do as much work as any man. (comparison as proof)<br>
          Pathos: I have borne thirteen children, and seen most all sold off to slavery, and when I cried out with my mother's grief, none but Jesus heard me!<br>
          Ethos: the standing of a woman who has lived the labor and the loss she names — she is a witness, not a tourist.<br>
          Shakespeare (Antony): Friends, Romans, countrymen, lend me your ears — ethos of belonging; then logos of Caesar's will and refusals of the crown.`,
          {
            label: "braided appeals in Sojourner Truth",
            problem: "Identify the dominant appeal in the muscle sentence, then in the children sentence, and explain how ethos underwrites both.",
            steps: [
              "<strong>Muscle/work sentence:</strong> primarily logos — a comparison that functions as a criterion: if muscle and work define the status men have, she meets it. It also has pathos (the sting of being excluded despite the proof), but the structure is a logical test.",
              "<strong>Children sold:</strong> primarily pathos — maternal grief, the sold children, the unanswered cry. An audience that has children, or that honors motherhood, is pressured to feel the contradiction of denying her womanhood.",
              "<strong>Ethos throughout:</strong> she is the one who did the work and bore the children. That is credibility from lived authority, not a résumé of degrees. If a stranger invented the same story, pathos would still be present but ethos would collapse.",
              "<strong>Exam trap:</strong> a choice that says 'the children sentence is logos because it contains a number (thirteen).' A number can serve pathos; counting losses is not the same as a syllogism."
            ],
            answer: "Answer: muscle = logos (comparison); children = pathos (grief); both rest on ethos of witness."
          },
          {
            label: "logos in Douglass, pathos without cheapness",
            problem: "Douglass's 'curse rather than a blessing' line: which appeal is primary, and why is it still moving?",
            steps: [
              "<strong>Primary logos:</strong> he sets up a surprising contrast (curse/blessing) and explains the mechanism: vision without remedy. That is cause-and-effect reasoning, not a sob without a structure.",
              "<strong>Pathos is present:</strong> wretchedness is feeling-laden. But if you label the line 'only pathos,' you miss the intellectual turn NES wants: he is analyzing literacy, not merely emoting.",
              "<strong>Ethos:</strong> a man who risked literacy and then reports its double edge is harder to dismiss than a distant essayist.",
              "<strong>Evaluation:</strong> the appeal is earned — the feeling follows from the mechanism he names. Manipulative pathos would pile suffering images with no claim and no cause. That is not this sentence."
            ],
            answer: "Answer: primarily logos (contrast + mechanism), supported by earned pathos and witness ethos."
          },
          { problem: "Antony says he comes to bury Caesar, not to praise him, then recites Caesar's generosity. Name the appeals.", hint: "Opening denial = ethos (I am moderate, not a flatterer). Examples of generosity and the refused crown = logos. The crowd's grief and the wounds = pathos. Irony is a rhetorical strategy that uses all three." },
          "Marking any feeling as a weak argument, or marking any quotation as ethos. Ethos is about who is speaking and whether we should trust them, not about the mere presence of quotation marks. A villain can quote scripture.",
          [
            check("Truth's account of children sold into slavery is primarily an appeal to", ["Pathos — it presses the audience's grief and moral horror", "Logos only, because thirteen is a statistic", "Ethos only, because it is a résumé of jobs", "A comma splice"], 0, "The sentence is built to make the audience feel a mother's grief. It also supports ethos (she lived it) but the dominant pressure of that sentence is emotional. A number does not automatically equal logos."),
            check("Which statement about appeals is exam-safe?", ["Pathos can be legitimate when feeling is relevant to the claim; it is not automatically a fallacy", "Logos is always honest", "Ethos means using Greek words", "If the audience cries, the argument has no claim"], 0, "Appeals are tools. Pathos about sold children is relevant to womanhood and justice. Logos can organize lies. Crying does not erase structure.")
          ]
        ),
        section(
          "Counterarguments, fallacies, and the test of relevant, sufficient evidence",
          "Naming appeals is identification. Evaluation asks: does this argument survive a fair objection, and is the proof enough of the right kind?",
          "A counterargument states a reasonable opposing claim. A rebuttal answers it (not by insulting the opponent). Strong rhetors raise the best objection they can. Fallacies are broken warrants: ad hominem (attack the person instead of the claim), false dichotomy (only two options when more exist), hasty generalization (too few examples), slippery slope (an unearned chain of disasters), straw man (refuting a cartoon of the other side). Evidence should be relevant (about the actual claim), sufficient (enough for the stakes), and representative (not a cherry-picked exception). Emotion plus a fallacy can still be present in a speech that also has real proof — judge each piece.",
          `Evaluate:<br>
          Claim &larr; is it clear and arguable?<br>
          Evidence &larr; relevant? sufficient? representative?<br>
          Warrant &larr; stated or fair? or a leap?<br>
          Counter &larr; acknowledged or silently hoped away?<br><br>
          Weak: One fox lied, therefore all consolation is dishonest. (hasty generalization)<br>
          Stronger: This fable illustrates one common pride-saving move.`,
          {
            label: "finding the warrant and a fair counter",
            problem: "Argument: 'Douglass says literacy felt like a curse; therefore enslaved people should not have been taught to read.' Diagnose the warrant and write a rebuttal Douglass's own book supports.",
            steps: [
              "<strong>Evidence:</strong> his reported inner state at a specific stage.",
              "<strong>Illegal warrant:</strong> if a good has a painful stage, it should be withheld. That warrant would also ban surgery and grief-counseling.",
              "<strong>Fallacy type:</strong> hasty leap from one man's painful midpoint to a policy of enforced illiteracy; also a distortion of Douglass's purpose (he is showing why the slave system feared literacy, not volunteering to stay unread).",
              "<strong>Rebuttal:</strong> the same <em>Narrative</em> treats literacy as the path toward manhood and freedom. The 'curse' names incomplete knowledge, not a recommendation. A fair counter to 'literacy hurt' is 'literacy also made resistance conceivable' — which Douglass himself supplies later."
            ],
            answer: "Answer: the warrant ('painful awareness should be prevented') is false to Douglass's larger claim; rebut with his pursuit of reading as liberation."
          },
          {
            label: "relevance and sufficiency",
            problem: "A student argues: 'Aesop's fox is proud. Pride is a deadly sin in some sermons. Therefore Whitman's singing workers are morally suspect.' Where does the argument break?",
            steps: [
              "<strong>Relevance:</strong> evidence from Aesop does not speak to Whitman's catalog. Wrong text, wrong claim. That is a relevance failure, not a small gap.",
              "<strong>Sufficiency:</strong> even about the fox, 'one fable' does not prove a theology of all pride, and 'deadly sin' is an imported warrant Whitman does not share in that poem.",
              "<strong>Straw man risk:</strong> reducing Whitman to 'pride' ignores 'varied carols' and labor. You would be refuting a poem he did not write.",
              "<strong>Repair:</strong> evaluate Whitman with Whitman's evidence (catalog, verbs of singing, everyday trades). Use Aesop only if the claim is about Aesop."
            ],
            answer: "Answer: breaks first on relevance (Aesop ≠ Whitman), then on a smuggled religious warrant and a straw man."
          },
          { problem: "A critic says, 'Sojourner Truth only uses emotion, so her speech is not an argument.' Write a two-sentence evaluation.", hint: "Sentence 1: she does use pathos (sold children). Sentence 2: she also uses logos (labor comparison) and ethos (witness), so 'only emotion' is a straw man; pathos here is also relevant to the claim about womanhood." },
          "Assuming that naming a fallacy in one sentence wrecks an entire speech, or that a speaker who feels strongly has no logos. Evaluate claim by claim. Also: confusing a counterargument (fair opposition) with an insult.",
          [
            check("Attacking Equiano as 'biased because he was enslaved' instead of answering his descriptions of the hold is", ["An ad hominem — it targets the person to dodge the evidence", "A strong logos move", "A semicolon error", "A theme of the passage"], 0, "Lived experience can be ethos, not automatic disqualification. Dismissing the witness because of identity, without touching the descriptions, is ad hominem."),
            check("Which is the fairest evaluation of Truth's muscle-and-work sentences?", ["Relevant logos plus ethos: labor is offered as a criterion for the status she claims", "Hasty generalization because she does not interview every laborer in the United States", "Slippery slope because muscle leads inevitably to war", "False dichotomy because she mentions both muscle and work"], 0, "She is not sampling a national survey; she is proving her own case with her own labor — sufficient for a first-person rights claim. Two compatible proofs are not a false dichotomy.")
          ]
        )
      ]
    }
  });
})();
