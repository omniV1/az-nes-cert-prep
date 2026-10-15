/* NES English Language Arts (301) — ELA Foundation Bootcamp. Unofficial original items. */
window.PROBLEMS = (window.PROBLEMS || []).concat([
  { id:"EF001", domain:"ela-foundation", title:"Identify the Verb", difficulty:"easy", tags:["grammar"], skillIds:["parts-of-speech"],
    stem:"In the sentence below, which word functions as a verb?\n\nThe new librarian catalogs rare maps each Friday.",
    choices:["librarian","catalogs","rare","Friday"], answer:1,
    explanation:"Catalogs names the action. Librarian is the subject noun, rare is an adjective modifying maps, and Friday is a noun used as a time marker. On NES items, do not confuse the actor with the action." },

  { id:"EF002", domain:"ela-foundation", title:"Simple Subject", difficulty:"easy", tags:["sentences"], skillIds:["sentence-anatomy"],
    stem:"Which word is the simple subject of this sentence?\n\nAfter the assembly, several tenth-grade volunteers stacked the chairs.",
    choices:["assembly","tenth-grade","volunteers","chairs"], answer:2,
    explanation:"The simple subject is the noun that performs the verb stacked: volunteers. Assembly sits inside a prepositional phrase, tenth-grade is an adjective, and chairs is the direct object. Prepositional-phrase nouns are a frequent false subject." },

  { id:"EF003", domain:"ela-foundation", title:"Dependent Clause", difficulty:"easy", tags:["clauses"], skillIds:["phrases-clauses"],
    stem:"Which group of words is a dependent clause?",
    choices:["before sunrise","the buses idled","because the buses idled","idling in the lot"], answer:2,
    explanation:"A dependent clause has a subject and a verb but cannot stand alone. Because the buses idled begins with a subordinating conjunction. Before sunrise and idling in the lot are phrases (no subject-verb pair). The buses idled is independent." },

  { id:"EF004", domain:"ela-foundation", title:"It's versus Its", difficulty:"easy", tags:["punctuation"], skillIds:["punctuation-basics"],
    stem:"Which sentence uses an apostrophe correctly?",
    choices:["Its time to revise the outline.","The dog chased it's tail.","The class of 26 lost it's rubric.","It's time to revise the outline."], answer:3,
    explanation:"It's means it is or it has. Its is the possessive pronoun and never takes an apostrophe. {{opt:EF004-0}} omits the needed contraction; {{opt:EF004-1}} and {{opt:EF004-2}} treat possessive its as if it were a contraction." },

  { id:"EF005", domain:"ela-foundation", title:"Subject-Verb Agreement", difficulty:"easy", tags:["agreement"], skillIds:["agreement-usage"],
    stem:"Which sentence shows correct subject-verb agreement?",
    choices:["The stack of essays are on the desk.","The stack of essays is on the desk.","The stack of essays were on the desk.","The stack of essays have been on the desk."], answer:1,
    explanation:"Stack is a singular subject; of essays is a prepositional phrase and does not control the verb. Use is. The other choices make the verb agree with essays, the NES trap of agreeing with the nearest noun." },

  { id:"EF006", domain:"ela-foundation", title:"Context Clue Meaning", difficulty:"easy", tags:["vocabulary"], skillIds:["vocab-context"],
    stem:"In the sentence below, the word arid most nearly means—\n\nThe arid plain produced almost no grass after three rainless months.",
    choices:["mountainous, because a plain can still be high ground","crowded, because three months without rain draw people in","dry","fertile, because plains are usually good farmland"], answer:2,
    explanation:"Rainless months and almost no grass signal dryness. Mountainous and crowded are unsupported by context. Fertile is a real association with plains that this sentence contradicts." },

  { id:"EF007", domain:"ela-foundation", title:"Previewing a Chapter", difficulty:"easy", tags:["reading-process"], skillIds:["reading-process"],
    stem:"Before reading a dense chapter, a student skims headings, bold terms, and the first sentence of each section. This strategy is best described as—",
    choices:["summarizing","previewing","evaluating sources","paraphrasing"], answer:1,
    explanation:"Previewing surveys text features to set a purpose before close reading. Summarizing and paraphrasing restate content after (or during) reading. Evaluating sources is a credibility task, not a first look at structure." },

  { id:"EF008", domain:"ela-foundation", title:"Setting Defined", difficulty:"easy", tags:["literary-elements"], skillIds:["literary-elements-intro"],
    stem:"In a story, the time and place of the action are called the—",
    choices:["theme","plot","setting","conflict"], answer:2,
    explanation:"Setting is when and where events occur. Theme is the insight about life, plot is the sequence of events, and conflict is the central struggle. Tests often swap these four terms." },

  { id:"EF009", domain:"ela-foundation", title:"Claim versus Evidence", difficulty:"easy", tags:["rhetoric"], skillIds:["rhetoric-intro"],
    stem:"A writer argues, 'The school should start later because three peer-reviewed sleep studies found that later start times improved attendance.' The quoted studies function as—",
    choices:["the claim","evidence","a counterclaim","a call to action"], answer:1,
    explanation:"The claim is that school should start later. The studies are evidence offered to support that claim. A counterclaim would oppose the proposal. A call to action would urge a next step rather than supply data." },

  { id:"EF010", domain:"ela-foundation", title:"Adjective or Adverb", difficulty:"medium", tags:["grammar"], skillIds:["parts-of-speech"],
    stem:"In the sentence below, what part of speech is quickly?\n\nThe intern quickly filed the forms.",
    choices:["adjective","adverb","preposition","conjunction"], answer:1,
    explanation:"Quickly modifies the verb filed, so it is an adverb. Adjectives modify nouns (a quick intern). Prepositions introduce phrases (to, of, after). Conjunctions join words or clauses (and, but, because)." },

  { id:"EF011", domain:"ela-foundation", title:"Complex Sentence", difficulty:"medium", tags:["sentences"], skillIds:["sentence-anatomy"],
    stem:"Which sentence is complex?",
    choices:["The bell rang, and the hallway filled.","The bell rang.","When the bell rang, the hallway filled.","Ring the bell."], answer:2,
    explanation:"A complex sentence joins one independent clause to at least one dependent clause. When the bell rang is dependent. {{opt:EF011-0}} is compound (two independents joined by and). {{opt:EF011-1}} is simple. {{opt:EF011-3}} is an imperative simple sentence." },

  { id:"EF012", domain:"ela-foundation", title:"Prepositional Phrase", difficulty:"medium", tags:["phrases"], skillIds:["phrases-clauses"],
    stem:"In the sentence After the debate, the judges conferred, the words After the debate form a—",
    choices:["dependent clause","independent clause","prepositional phrase","appositive"], answer:2,
    explanation:"After is a preposition; the debate is its object. There is no subject-verb pair, so the group is a phrase, not a clause. An appositive would rename a noun (Ms. Chen, the moderator, ...)." },

  { id:"EF013", domain:"ela-foundation", title:"Comma Splice", difficulty:"medium", tags:["punctuation"], skillIds:["punctuation-basics"],
    stem:"Which sentence contains a comma splice?",
    choices:["The rain stopped, so the game resumed.","The rain stopped; the game resumed.","The rain stopped, the game resumed.","After the rain stopped, the game resumed."], answer:2,
    explanation:"A comma splice joins two independent clauses with only a comma. Fix it with a period, a semicolon, or a coordinating conjunction (as in {{opt:EF013-0}}). {{opt:EF013-1}} uses a semicolon correctly. {{opt:EF013-3}} opens with a dependent clause, which a comma may follow." },

  { id:"EF014", domain:"ela-foundation", title:"Who or Whom", difficulty:"medium", tags:["pronouns"], skillIds:["agreement-usage"],
    stem:"Choose the sentence that uses who or whom correctly.",
    choices:["Whom wrote the dissent?","The intern who we hired starts Monday.","To whom did you address the memo?","The speaker whom opened the forum is a chemist."], answer:2,
    explanation:"Whom is the object form; here it is the object of the preposition to. Who is the subject form, so {{opt:EF014-0}} and {{opt:EF014-3}} are reversed. In {{opt:EF014-1}} the pronoun is the object of hired, so the test key is whom we hired." },

  { id:"EF015", domain:"ela-foundation", title:"Denotation and Connotation", difficulty:"medium", tags:["vocabulary"], skillIds:["vocab-context"],
    stem:"The words slender, skinny, and scrawny can all denote 'thin.' The best explanation of how they differ is that they—",
    choices:["have different denotations but identical connotations","are synonyms with no difference in use","share a denotation but carry different connotations","are antonyms used for contrast"], answer:2,
    explanation:"Denotation is the dictionary meaning; connotation is the emotional coloring. Slender often sounds complimentary, skinny is more neutral-to-negative, and scrawny is clearly negative. They are not antonyms, and usage is not identical." },

  { id:"EF016", domain:"ela-foundation", title:"Annotating to Monitor", difficulty:"medium", tags:["reading-process"], skillIds:["reading-process"],
    stem:"A student writes questions in the margin while reading and then checks whether the next section answers them. This habit primarily supports—",
    choices:["decoding unfamiliar letters in the next heading","monitoring comprehension","memorizing the author's biography from the preface","avoiding rereading once a question is written"], answer:1,
    explanation:"Generating and checking questions is a metacognitive way to monitor whether meaning is coming through. It is not phonics, not biography work, and an unanswered question often prompts rereading rather than avoiding it." },

  { id:"EF017", domain:"ela-foundation", title:"Types of Conflict", difficulty:"medium", tags:["literary-elements"], skillIds:["literary-elements-intro"],
    stem:"A protagonist wants a scholarship, but a rival sabotages the application. This conflict is best classified as—",
    choices:["person vs. person","person vs. nature","person vs. self","person vs. society"], answer:0,
    explanation:"The struggle is between two characters. Nature would involve weather or wilderness; self would be internal doubt; society would pit the character against a law, custom, or institution." },

  { id:"EF018", domain:"ela-foundation", title:"Ethos in an Advertisement", difficulty:"medium", tags:["rhetoric"], skillIds:["rhetoric-intro"],
    stem:"A dentist advertisement reads, 'As a board-certified pediatric dentist with 20 years of practice, I recommend fluoride varnish.' The appeal is primarily—",
    choices:["logos, because it cites a statistic about cavities later in the campaign","pathos, because it tries to frighten parents about enamel","ethos, because it stresses the speaker's credentials","kairos, because 'recommend' implies a once-a-year deadline"], answer:2,
    explanation:"Ethos relies on credibility and character. The ad highlights certification and experience. It does not offer cavity data (logos) or fear (pathos), and no timing deadline (kairos) appears." },

  { id:"EF019", domain:"ela-foundation", title:"Gerund as Subject", difficulty:"hard", tags:["grammar"], skillIds:["parts-of-speech"],
    stem:"In the sentence Baking bread relaxes her, the word Baking functions as a—",
    choices:["present participle modifying bread","gerund serving as the subject","infinitive phrase","coordinating conjunction"], answer:1,
    explanation:"A gerund is an -ing form used as a noun. Baking bread is the subject of relaxes. A participle would modify a noun (The baking bread smelled warm). Infinitives use to (to bake). Conjunctions join; they do not act as subjects." },

  { id:"EF020", domain:"ela-foundation", title:"Compound-Complex Sentence", difficulty:"hard", tags:["sentences"], skillIds:["sentence-anatomy"],
    stem:"Which sentence is compound-complex?",
    choices:["I filed the form after I proofread it.","I filed the form, and I mailed the copy.","After I proofread it, I filed the form, and I mailed the copy.","Filing the form, I mailed the copy."], answer:2,
    explanation:"Compound-complex has at least two independent clauses and at least one dependent clause. After I proofread it is dependent; I filed the form and I mailed the copy are independent. {{opt:EF020-0}} is complex, {{opt:EF020-1}} is compound, and {{opt:EF020-3}} is simple with a participial phrase." },

  { id:"EF021", domain:"ela-foundation", title:"Restrictive versus Nonrestrictive", difficulty:"hard", tags:["clauses"], skillIds:["phrases-clauses"],
    stem:"Which sentence uses a nonrestrictive clause that is correctly punctuated?",
    choices:["The novel that I reread is on the shelf.","The novel, that I reread, is on the shelf.","My copy of Pride and Prejudice which is torn needs tape.","My copy of Pride and Prejudice, which is torn, needs tape."], answer:3,
    explanation:"A nonrestrictive clause adds extra information and takes commas; which is the usual relative pronoun. That introduces essential (restrictive) clauses and is not set off by commas, so {{opt:EF021-0}} is correctly restrictive while {{opt:EF021-1}} is not. {{opt:EF021-2}} needs commas around the extra which-clause." },

  { id:"EF022", domain:"ela-foundation", title:"Colon before a List", difficulty:"hard", tags:["punctuation"], skillIds:["punctuation-basics"],
    stem:"Which sentence uses a colon correctly?",
    choices:["She packed: a laptop a charger and a notebook.","She packed three items: a laptop, a charger, and a notebook.","She packed a laptop: a charger, and a notebook.","She: packed a laptop, a charger, and a notebook."], answer:1,
    explanation:"A colon may introduce a list only after an independent clause. She packed three items can stand alone. {{opt:EF022-0}} places the colon after a verb with no complete clause; {{opt:EF022-2}} and {{opt:EF022-3}} split the clause incorrectly." },

  { id:"EF023", domain:"ela-foundation", title:"Dangling Modifier", difficulty:"hard", tags:["modifiers"], skillIds:["agreement-usage"],
    stem:"Which sentence contains a dangling modifier?",
    choices:["Walking to class, Maya reviewed her notes.","Walking to class, the notes were reviewed by Maya.","Maya reviewed her notes while walking to class.","After walking to class, Maya reviewed her notes."], answer:1,
    explanation:"A participial opener must modify the noun that immediately follows. In {{opt:EF023-1}}, notes appears to be walking. {{opt:EF023-0}} and {{opt:EF023-3}} attach the walking to Maya. {{opt:EF023-2}} uses a clear adverb clause with Maya as subject." },

  { id:"EF024", domain:"ela-foundation", title:"Latin Root -ject-", difficulty:"hard", tags:["vocabulary"], skillIds:["vocab-context"],
    stem:"The root -ject- (as in eject, reject, and projectile) most nearly means—",
    choices:["write, as in inscribe or scripture","throw","hear, as in audible","lead, as in conduct"], answer:1,
    explanation:"Latin jacere / ject- means throw. Eject = throw out; reject = throw back; projectile = something thrown forward. Script- is write, aud- is hear, and duc- is lead." },

  { id:"EF025", domain:"ela-foundation", title:"Fix-Up Strategies", difficulty:"hard", tags:["reading-process"], skillIds:["reading-process"],
    stem:"A reader realizes a paragraph no longer makes sense, rereads the prior section, and adjusts a prediction. This is an example of—",
    choices:["skimming for main idea only and then moving on","a fix-up (repair) strategy","reading every word at one speed regardless of confusion","ignoring text features that might have clarified the paragraph"], answer:1,
    explanation:"Noticing a breakdown, rereading, and revising a prediction are classic fix-up strategies. Skimming and a single speed would not repair confusion. Ignoring headings and captions would remove useful cues." },

  { id:"EF026", domain:"ela-foundation", title:"Limited Narrator", difficulty:"hard", tags:["literary-elements"], skillIds:["literary-elements-intro"],
    stem:"A first-person narrator insists he is calm and sane while describing an obsessive crime in minute detail. Students should treat the narration as—",
    choices:["objective omniscience","a trustworthy summary of facts","a limited, possibly distorted point of view","the author's unfiltered biography"], answer:2,
    explanation:"First-person narrators can be biased or self-deceiving. The clash between I am sane and obsessive detail invites skepticism. Omniscience is third-person all-knowing; the narrator is not automatically factual; narrator is not the same as the author." },

  { id:"EF027", domain:"ela-foundation", title:"Pathos without Evidence", difficulty:"hard", tags:["rhetoric"], skillIds:["rhetoric-intro"],
    stem:"A campaign mailer shows a crying child beside the sentence 'If you cared about families, you would vote yes,' with no data. The dominant appeal is—",
    choices:["logos, because voting is always a logical civic duty","ethos, because the mailer names a university the child attends","pathos, because it uses emotion and guilt in place of evidence","a concession to the opposing view that families already vote yes"], answer:2,
    explanation:"Pathos targets emotion. Guilt (if you cared) plus an image of distress, without evidence, is emotional pressure. Logos would use data; ethos would build credibility; a concession would acknowledge the other side." },

  { id:"EF028", domain:"ela-foundation", title:"Pronoun-Antecedent Agreement", difficulty:"medium", tags:["agreement"], skillIds:["agreement-usage"],
    stem:"Which sentence has correct pronoun-antecedent agreement on a traditional usage test?",
    choices:["Each of the singers forgot their music stand.","Each of the singers forgot his or her music stand.","Each of the singers forgot they music stand.","Each of the singers forgot them music stand."], answer:1,
    explanation:"Each is singular, so a singular pronoun is the conventional test key. Their is a common informal (and increasingly accepted) choice, but NES-style items still flag it when a singular option is offered. {{opt:EF028-2}} and {{opt:EF028-3}} are ungrammatical." },

  { id:"EF029", domain:"ela-foundation", title:"Comma with Coordinating Conjunction", difficulty:"easy", tags:["punctuation"], skillIds:["punctuation-basics"],
    stem:"Which sentence correctly punctuates a compound sentence?",
    choices:["The lights dimmed but the film continued.","The lights dimmed, but the film continued.","The lights dimmed, the film continued.","The lights, dimmed but the film continued."], answer:1,
    explanation:"When a coordinating conjunction (but) joins two independent clauses, place a comma before it. {{opt:EF029-0}} omits the comma. {{opt:EF029-2}} is a comma splice. {{opt:EF029-3}} misplaces the comma inside the first clause." },

  { id:"EF030", domain:"ela-foundation", title:"Logos with Data", difficulty:"medium", tags:["rhetoric"], skillIds:["rhetoric-intro"],
    stem:"Which sentence relies primarily on logos?",
    choices:["Join us—your neighbors already believe in this park.","As your pediatrician, I urge you to vaccinate on schedule.","City data show a 22 percent drop in crashes after the new crosswalk.","Imagine your child's empty chair at dinner if the crosswalk is delayed."], answer:2,
    explanation:"Logos uses reasons and measurable evidence. {{opt:EF030-0}} is bandwagon pressure, {{opt:EF030-1}} is ethos (credentials), and {{opt:EF030-3}} is pathos (an imagined loss)." }
]);
