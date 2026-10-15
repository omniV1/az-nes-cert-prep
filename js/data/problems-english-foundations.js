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
    choices:["flat","dry","vast","cold"], answer:1,
    explanation:"Rainless months and almost no grass are the clues: arid means dry. Flat and vast describe what plains often look like, not what this sentence's clues point to, and nothing mentions temperature." },

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
    choices:["previewing the text before reading","monitoring comprehension","summarizing each section afterward","activating prior knowledge"], answer:1,
    explanation:"Writing questions and checking whether the text answers them is self-questioning, a way to monitor whether meaning is coming through. Previewing happens before reading, summarizing restates content afterward, and activating prior knowledge connects the topic to what the reader already knows." },

  { id:"EF017", domain:"ela-foundation", title:"Types of Conflict", difficulty:"medium", tags:["literary-elements"], skillIds:["literary-elements-intro"],
    stem:"A protagonist wants a scholarship, but a rival sabotages the application. This conflict is best classified as—",
    choices:["person vs. person","person vs. nature","person vs. self","person vs. society"], answer:0,
    explanation:"The struggle is between two characters. Nature would involve weather or wilderness; self would be internal doubt; society would pit the character against a law, custom, or institution." },

  { id:"EF018", domain:"ela-foundation", title:"Ethos in an Advertisement", difficulty:"medium", tags:["rhetoric"], skillIds:["rhetoric-intro"],
    stem:"A dentist advertisement reads, 'As a board-certified pediatric dentist with 20 years of practice, I recommend fluoride varnish.' The appeal is primarily—",
    choices:["logos, because a medical recommendation is a reasoned conclusion","pathos, because parents worry about their children's teeth","ethos, because it stresses the speaker's credentials","kairos, because it ties the advice to a timely health concern"], answer:2,
    explanation:"Ethos relies on the speaker's credibility, and the ad leads with board certification and 20 years of practice. It offers no data or reasoning (logos), no emotional scene (pathos), and no appeal to timing (kairos)." },

  { id:"EF019", domain:"ela-foundation", title:"Gerund as Subject", difficulty:"hard", tags:["grammar"], skillIds:["parts-of-speech"],
    stem:"In the sentence Baking bread relaxes her, the word Baking functions as a—",
    choices:["present participle modifying bread","gerund serving as the subject","infinitive phrase","the main verb of the sentence"], answer:1,
    explanation:"A gerund is an -ing form used as a noun. Baking bread is the subject of relaxes, which is the main verb. A participle would modify a noun (The baking bread smelled warm), and infinitives use to (to bake)." },

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
    choices:["She packed: a laptop, a charger, and a notebook.","She packed three items: a laptop, a charger, and a notebook.","She packed a laptop: a charger, and a notebook.","She packed three items; a laptop, a charger, and a notebook."], answer:1,
    explanation:"A colon may introduce a list only after a complete independent clause, and She packed three items can stand alone. A colon right after the verb packed splits the verb from its objects, a colon in the middle of the list breaks the series, and a semicolon joins two independent clauses rather than introducing a list." },

  { id:"EF023", domain:"ela-foundation", title:"Dangling Modifier", difficulty:"hard", tags:["modifiers"], skillIds:["agreement-usage"],
    stem:"Which sentence contains a dangling modifier?",
    choices:["Walking to class, Maya reviewed her notes.","Walking to class, the notes were reviewed by Maya.","Maya reviewed her notes while walking to class.","After walking to class, Maya reviewed her notes."], answer:1,
    explanation:"A participial opener must modify the noun that immediately follows. In {{opt:EF023-1}}, notes appears to be walking. {{opt:EF023-0}} and {{opt:EF023-3}} attach the walking to Maya. {{opt:EF023-2}} uses a clear adverb clause with Maya as subject." },

  { id:"EF024", domain:"ela-foundation", title:"Latin Root -ject-", difficulty:"hard", tags:["vocabulary"], skillIds:["vocab-context"],
    stem:"The root -ject- (as in eject, reject, and projectile) most nearly means—",
    choices:["carry","throw","send","write"], answer:1,
    explanation:"Latin jacere / ject- means throw: eject is throw out, reject is throw back, and a projectile is thrown forward. Port- means carry (transport), mit-/miss- means send (transmit), and script- means write." },

  { id:"EF025", domain:"ela-foundation", title:"Fix-Up Strategies", difficulty:"hard", tags:["reading-process"], skillIds:["reading-process"],
    stem:"A reader realizes a paragraph no longer makes sense, rereads the prior section, and adjusts a prediction. This is an example of—",
    choices:["previewing","a fix-up (repair) strategy","skimming","summarizing"], answer:1,
    explanation:"Noticing a breakdown, rereading, and revising a prediction are classic fix-up strategies. Previewing happens before reading, skimming moves quickly for gist rather than repairing confusion, and summarizing restates what was already understood." },

  { id:"EF026", domain:"ela-foundation", title:"Limited Narrator", difficulty:"hard", tags:["literary-elements"], skillIds:["literary-elements-intro"],
    stem:"A first-person narrator insists he is calm and sane while describing an obsessive crime in minute detail. Students should treat the narration as—",
    choices:["objective third-person narration","reliable, because he took part in the events","a limited, possibly distorted point of view","the author's own view, since the narrator says I"], answer:2,
    explanation:"First-person narrators can be biased or self-deceiving, and the clash between I am calm and sane and the obsessive detail invites skepticism. The narration is first person, not objective third person; taking part in events does not make a narrator reliable; and the narrator is not the author." },

  { id:"EF027", domain:"ela-foundation", title:"Pathos without Evidence", difficulty:"hard", tags:["rhetoric"], skillIds:["rhetoric-intro"],
    stem:"A campaign mailer shows a crying child beside the sentence 'If you cared about families, you would vote yes,' with no data. The dominant appeal is—",
    choices:["logos, because it states what voters should conclude","ethos, because it questions the voter's character","pathos, using guilt and an image instead of evidence","kairos, because it ties the vote to an urgent moment"], answer:2,
    explanation:"Pathos targets emotion. Guilt (if you cared) plus an image of distress, with no evidence, is emotional pressure. Stating a conclusion is not logos without reasons or data, ethos concerns the speaker's credibility rather than the voter's character, and nothing in the mailer is about timing." },

  { id:"EF028", domain:"ela-foundation", title:"Pronoun-Antecedent Agreement", difficulty:"medium", tags:["agreement"], skillIds:["agreement-usage"],
    stem:"Which sentence has correct pronoun-antecedent agreement on a traditional usage test?",
    choices:["Each of the singers forgot their music stand.","Each of the singers forgot his or her music stand.","Each of the singers have forgotten his or her music stand.","All of the singers forgot his or her music stand."], answer:1,
    explanation:"Each is singular, so a singular pronoun is the conventional test key. Their is common informally (and increasingly accepted), but NES-style items still flag it when a singular option is offered. Have forgotten breaks subject-verb agreement with each, and all is plural, so his or her no longer agrees." },

  { id:"EF029", domain:"ela-foundation", title:"Comma with Coordinating Conjunction", difficulty:"easy", tags:["punctuation"], skillIds:["punctuation-basics"],
    stem:"Which sentence correctly punctuates a compound sentence?",
    choices:["The lights dimmed but the film continued.","The lights dimmed, but the film continued.","The lights dimmed, the film continued.","The lights dimmed but, the film continued."], answer:1,
    explanation:"When a coordinating conjunction (but) joins two independent clauses, put a comma before it. Leaving the comma out runs the clauses together, a comma alone is a comma splice, and a comma after but is in the wrong place." },

  { id:"EF030", domain:"ela-foundation", title:"Logos with Data", difficulty:"medium", tags:["rhetoric"], skillIds:["rhetoric-intro"],
    stem:"Which sentence relies primarily on logos?",
    choices:["Join us—your neighbors already believe in this park.","As your pediatrician, I urge you to vaccinate on schedule.","City data show a 22 percent drop in crashes after the new crosswalk.","Imagine your child's empty chair at dinner if the crosswalk is delayed."], answer:2,
    explanation:"Logos uses reasons and measurable evidence. {{opt:EF030-0}} is bandwagon pressure, {{opt:EF030-1}} is ethos (credentials), and {{opt:EF030-3}} is pathos (an imagined loss)." }
]);
