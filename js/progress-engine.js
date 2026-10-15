/* Central mastery, prerequisite, placement, and remediation logic. */
window.ProgressEngine = (() => {
  const OFFICIAL_MATH_DOMAINS = ["number", "algebra", "geometry", "trigcalc", "stats"];
  const OFFICIAL_ENGLISH_DOMAINS = ["reading", "literature", "language", "writing", "oral"];
  const MATH_TRACK_DOMAINS = ["foundation", ...OFFICIAL_MATH_DOMAINS];
  const ENGLISH_TRACK_DOMAINS = ["ela-foundation", ...OFFICIAL_ENGLISH_DOMAINS];

  function trackForDomain(domainId) {
    const domain = (window.CURRICULUM?.domains || []).find(d => d.id === domainId);
    if (domain?.track) return domain.track;
    if (OFFICIAL_ENGLISH_DOMAINS.includes(domainId) || domainId === "ela-foundation") return "english";
    if (domainId === "pedagogy") return "pedagogy";
    return "math";
  }

  function trackForSkill(skillId) {
    const skill = window.SKILLS?.[skillId];
    return trackForDomain(skill?.domain);
  }

  function skillBelongsToTrack(skillId, track) {
    return trackForSkill(skillId) === track;
  }

  function allLessons() {
    return (window.CURRICULUM?.domains || []).flatMap(domain =>
      domain.lessons.map(lesson => ({
        ...lesson,
        domainId: domain.id,
        domainTitle: domain.title,
        track: domain.track || "math",
        officialExamDomain: !!domain.officialExamDomain,
        requiresOfficialCalibration: !!domain.officialExamDomain || domain.id === "pedagogy"
      }))
    );
  }

  function lessonById(id) {
    return allLessons().find(lesson => lesson.id === id);
  }

  function lessonCheckTotals(lessonId, stateArg) {
    const lesson = window.LESSONS?.[lessonId];
    if (!lesson?.sections) return { total: 0, correct: 0 };
    const total = lesson.sections.reduce((sum, section) =>
      sum + (section.checks || (section.check ? [section.check] : [])).length, 0
    );
    const saved = (stateArg || window.Progress.load()).lessonProgress?.[lessonId];
    return { total, correct: saved?.correct || 0, attempted: saved?.total || 0 };
  }

  function placementWaivesLesson(lesson, state) {
    const track = lesson.track || "math";
    const placement = state.placementByTrack?.[track] || (track === "math" ? state.placement : null);
    if (!placement?.bySkill || !lesson?.skills?.length) return false;
    return lesson.skills.every(skillId => {
      const result = placement.bySkill[skillId];
      return result && result.total >= 2 && result.pct >= 85;
    });
  }

  function examHistoryForSkill(skillId, state) {
    const rec = state.skillProgress?.[skillId] || {};
    const hist = (rec.history || []).filter(entry => String(entry.source || "").startsWith("exam:"));
    const total = hist.length;
    const correct = hist.filter(entry => entry.correct).length;
    return {
      total,
      correct,
      pct: total ? Math.round(100 * correct / total) : 0
    };
  }

  function examWaivesLesson(lesson, state) {
    if (!lesson?.skills?.length) return false;
    const perSkill = lesson.skills.map(skillId => examHistoryForSkill(skillId, state));
    if (perSkill.every(stat => stat.total >= 2 && stat.pct >= 85)) return true;
    const combined = perSkill.reduce((acc, stat) => ({
      total: acc.total + stat.total,
      correct: acc.correct + stat.correct
    }), { total: 0, correct: 0 });
    const overall = combined.total ? combined.correct / combined.total : 0;
    const noFailingSkill = perSkill.every(stat => stat.total < 2 || stat.pct >= 70);
    return combined.total >= 3 && overall >= 0.85 && noFailingSkill;
  }

  function syncExamLessonMastery(track) {
    const state = window.Progress?.load?.() || {};
    const newly = [];
    for (const lesson of allLessons()) {
      if (track && lesson.track !== track) continue;
      if (!examWaivesLesson(lesson, state)) continue;
      const already = state.lessonsDone?.[lesson.id] || state.lessonMastery?.[lesson.id]?.masteredAt;
      if (already) continue;
      const at = new Date().toISOString();
      window.Progress.setLessonMastery(lesson.id, { masteredAt: at, source: "exam" });
      newly.push(lesson);
    }
    return newly;
  }

  function lessonMasteryStatus(lessonId, stateArg) {
    const state = stateArg || window.Progress.load();
    const lesson = lessonById(lessonId);
    if (!lesson) return { mastered: false, reason: "Unknown lesson" };
    const officialComplete = !lesson.requiresOfficialCalibration ||
      !!state.officialResources?.[`lesson:${lessonId}`];

    if ((state.lessonsDone?.[lessonId] || state.lessonMastery?.[lessonId]?.masteredAt) && officialComplete) {
      return { mastered: true, source: state.lessonMastery?.[lessonId]?.source || "completed" };
    }
    if (placementWaivesLesson(lesson, state)) {
      return { mastered: true, source: "placement" };
    }
    if (examWaivesLesson(lesson, state)) {
      return { mastered: true, source: "exam" };
    }

    const checks = lessonCheckTotals(lessonId, state);
    const accuracy = checks.attempted ? checks.correct / checks.attempted : 0;
    const allAttempted = checks.total > 0 && checks.attempted >= checks.total;
    const mastered = allAttempted && accuracy >= 0.8 && officialComplete;
    return {
      mastered,
      source: mastered ? "checks" : null,
      checksTotal: checks.total,
      checksAttempted: checks.attempted,
      checksCorrect: checks.correct,
      accuracy,
      officialComplete,
      reason: !allAttempted
        ? `Complete all ${checks.total} quick checks`
        : accuracy < 0.8
          ? `Reach at least 80% check accuracy (currently ${Math.round(accuracy * 100)}%)`
          : "Complete the embedded official sample-item calibration"
    };
  }

  function missingPrerequisites(lessonId, stateArg) {
    const state = stateArg || window.Progress.load();
    const lesson = lessonById(lessonId);
    if (!lesson) return [];
    return (lesson.prerequisites || []).filter(id => !lessonMasteryStatus(id, state).mastered);
  }

  function lessonGateStatus(lessonId, stateArg) {
    const state = stateArg || window.Progress.load();
    const lesson = lessonById(lessonId);
    if (!lesson) return { locked: true, reason: "Lesson not found", missingPrereqs: [] };
    if (!state.gates?.strictPrereqs || state.gates?.bypassLessons?.[lessonId]) {
      return { locked: false, overridden: !!state.gates?.bypassLessons?.[lessonId], missingPrereqs: [] };
    }
    const missing = missingPrerequisites(lessonId, state);
    return {
      locked: missing.length > 0,
      missingPrereqs: missing,
      reason: missing.length
        ? "Build these prerequisites first: " + missing.map(id => lessonById(id)?.title || id).join(", ")
        : ""
    };
  }

  function skillMasteryStatus(skillId, stateArg) {
    const state = stateArg || window.Progress.load();
    const skill = window.SKILLS?.[skillId];
    if (!skill) return { mastered: false, attempts: 0, accuracy: 0 };
    const rec = state.skillProgress?.[skillId] || { attempts: 0, correct: 0 };
    const lessonReady = (skill.lessonIds || []).every(id => lessonMasteryStatus(id, state).mastered);
    const accuracy = rec.attempts ? rec.correct / rec.attempts : 0;
    const threshold = skill.mastery || {};
    const availableProblems = (window.PROBLEMS || [])
      .filter(problem => problem.skillIds?.includes(skillId)).length;
    const minimumProblems = Math.min(threshold.minProblems || 0, availableProblems);
    const enoughPractice = rec.attempts >= minimumProblems;
    const practiceAccuracyReady = minimumProblems === 0 ||
      accuracy >= (threshold.minProblemAccuracy || 0);
    return {
      mastered: lessonReady && enoughPractice && practiceAccuracyReady,
      lessonReady,
      attempts: rec.attempts,
      correct: rec.correct,
      accuracy,
      nextReviewAt: state.reviewQueue?.find(x => x.skillId === skillId)?.dueAt || null
    };
  }

  function getRemedialPlan(stateArg, track) {
    const state = stateArg || window.Progress.load();
    const weakSkills = [];
    for (const [skillId, skill] of Object.entries(window.SKILLS || {})) {
      if (track && trackForSkill(skillId) !== track) continue;
      const placement = (track && state.placementByTrack?.[track]?.bySkill?.[skillId])
        || state.placement?.bySkill?.[skillId];
      const progress = state.skillProgress?.[skillId];
      const total = progress ? progress.attempts : (placement?.total || 0);
      const correct = progress ? progress.correct : (placement?.correct || 0);
      const pct = total ? Math.round(correct * 100 / total) : null;
      if (pct != null && pct < 75) {
        weakSkills.push({
          skillId,
          title: skill.title,
          domain: skill.domain,
          track: trackForSkill(skillId),
          pct,
          lessonIds: skill.lessonIds || []
        });
      }
    }
    weakSkills.sort((a, b) => a.pct - b.pct);
    return {
      weakSkills,
      suggestedLessons: [...new Set(weakSkills.flatMap(x => x.lessonIds))].slice(0, 5)
    };
  }

  const DOMAIN_DRILLS = {
    number: "math-number-block",
    algebra: "math-algebra-block",
    geometry: "math-geometry-block",
    trigcalc: "math-trigcalc-block",
    stats: "math-stats-block",
    reading: "ela-reading-block",
    literature: "ela-literature-block",
    language: "ela-language-block",
    writing: "ela-writing-block",
    oral: "ela-oral-block"
  };

  function repairPlanFromExam({ type, byDomain, bySkill, itemResults }) {
    const track = type === "english" ? "english" : type === "pedagogy" ? "pedagogy" : "math";
    const trackLabel = track === "english"
      ? "English Language Arts (301)"
      : track === "pedagogy"
        ? "APK Secondary (052)"
        : "Mathematics (304)";
    const domainRows = Object.entries(byDomain || {}).map(([id, stats]) => {
      const domain = (window.CURRICULUM?.domains || []).find(d => d.id === id);
      const pct = stats.total ? Math.round(100 * stats.correct / stats.total) : 0;
      return {
        id,
        title: domain?.title || id,
        track: trackForDomain(id),
        correct: stats.correct,
        total: stats.total,
        pct,
        drillId: DOMAIN_DRILLS[id] || null,
        firstLessonId: domain?.lessons?.[0]?.id || null
      };
    }).filter(row => row.track === track || !type)
      .sort((a, b) => a.pct - b.pct);
    const weakDomains = domainRows.filter(row => row.pct < 85);

    const skillMisses = {};
    (itemResults || []).filter(item => !item.correct).forEach(item => {
      (item.skillIds || []).forEach(skillId => {
        if (!skillBelongsToTrack(skillId, track)) return;
        const skill = window.SKILLS?.[skillId];
        skillMisses[skillId] = skillMisses[skillId] || {
          skillId,
          title: skill?.title || skillId,
          domain: skill?.domain,
          missed: 0,
          lessonIds: skill?.lessonIds || []
        };
        skillMisses[skillId].missed++;
      });
    });
    const weakSkills = Object.values(skillMisses).sort((a, b) => b.missed - a.missed);
    const suggestedLessons = [...new Set(weakSkills.flatMap(skill => skill.lessonIds))]
      .map(id => lessonById(id))
      .filter(lesson => lesson && lesson.track === track)
      .slice(0, 6);

    return {
      track,
      trackLabel,
      domainRows,
      weakDomains,
      weakSkills,
      suggestedLessons,
      missedIds: (itemResults || [])
        .filter(item => !item.correct && !String(item.problemId || "").startsWith("AEPA-"))
        .map(item => item.problemId)
    };
  }

  function mockSequenceFor(track) {
    if (track === "english") {
      return [
        { examId: "ela-field-rigor", title: "ELA passage sets Form A", target: 80 },
        { examId: "ela-field-rigor-b", title: "ELA passage sets Form B", target: 80 },
        { examId: "ela-clusters", title: "ELA Pearson-style cluster exam", target: 80 },
        { examId: "ela-official-1", title: "Official-Length ELA Simulation A", target: 85 },
        { examId: "ela-official-2", title: "Official-Length ELA Simulation B", target: 85 }
      ];
    }
    return [
      { examId: "math-full-1", title: "Half-Length Math Mock A", target: 85 },
      { examId: "math-full-2", title: "Half-Length Math Mock B", target: 85 },
      { examId: "math-official-1", title: "Official-Length Math Simulation A", target: 85 },
      { examId: "math-official-2", title: "Official-Length Math Simulation B", target: 85 }
    ];
  }

  function recommendedNext(stateArg, opts = {}) {
    const state = stateArg || window.Progress.load();
    const track = opts.track || null;
    const due = window.Progress.getDueReviews().filter(item => {
      if (!track) return true;
      return trackForSkill(item.skillId) === track;
    });
    if (due.length) {
      const skill = window.SKILLS?.[due[0].skillId];
      return {
        type: "review",
        skillId: due[0].skillId,
        title: `Review: ${skill?.title || due[0].skillId}`,
        lessonId: skill?.lessonIds?.[0] || null
      };
    }

    const remediation = getRemedialPlan(state, track);
    for (const lessonId of remediation.suggestedLessons) {
      if (!lessonMasteryStatus(lessonId, state).mastered && !lessonGateStatus(lessonId, state).locked) {
        return { type: "remedial", lessonId, title: lessonById(lessonId)?.title };
      }
    }

    const tracksToScan = track ? [track] : ["math", "english"];
    for (const currentTrack of tracksToScan) {
      for (const lesson of allLessons()) {
        if (lesson.track !== currentTrack) continue;
        if (!lessonMasteryStatus(lesson.id, state).mastered && !lessonGateStatus(lesson.id, state).locked) {
          return { type: "lesson", lessonId: lesson.id, title: lesson.title, domainId: lesson.domainId, track: currentTrack };
        }
      }
      const best = examId => (state.exams || [])
        .filter(exam => exam.id === examId)
        .reduce((score, exam) => Math.max(score, exam.percent || 0), 0);
      const nextMock = mockSequenceFor(currentTrack).find(mock => best(mock.examId) < (mock.target || 85));
      if (nextMock) return { type: "mock", track: currentTrack, ...nextMock };
    }
    return { type: "maintenance", title: "Maintain mastery with mixed review" };
  }

  const ELA_TRAPS = [
    { id: "overclaim", label: "Overclaim (always / proved / safest)" },
    { id: "wrong-speaker", label: "Wrong speaker (appendix vs main, mask vs author)" },
    { id: "adjacent-term", label: "Adjacent literary term (simile/metaphor, verbal/dramatic irony)" },
    { id: "true-detail", label: "True detail that is not the main idea" },
    { id: "tone", label: "Tone / mood mix-up" },
    { id: "fact-opinion", label: "Fact vs opinion / inference the passage does not license" },
    { id: "grammar", label: "Named grammar error vs a different real error" },
    { id: "skipped-passage", label: "Guessed without reading the passage" }
  ];

  function trapLabel(id) {
    return (ELA_TRAPS.find(t => t.id === id) || {}).label || id;
  }

  function classifyElaTrap(text) {
    const raw = String(text || "").trim();
    if (ELA_TRAPS.some(t => t.id === raw)) return raw;
    const s = raw.toLowerCase();
    if (/overclaim|do not overclaim|always|proved|safest|whole excerpt|not one image/.test(s)) return "overclaim";
    if (/speaker|appendix|mask vs|stage manager|soliloquy vs aside|who is accountable/.test(s)) return "wrong-speaker";
    if (/simile|metaphor|irony|literary term|name the form|genre of|device|figurative|soliloquy|aside vs/.test(s)) return "adjacent-term";
    if (/specific detail|true detail|not the main|literal reading|not one stanza|not the most literal/.test(s)) return "true-detail";
    if (/\btone\b|\bmood\b/.test(s)) return "tone";
    if (/fact vs opinion|inference|licenses|does not license/.test(s)) return "fact-opinion";
    if (/grammar|parallelism|comma|agreement|modifier|named grammar/.test(s)) return "grammar";
    if (/without reading|skipped|guessed/.test(s)) return "skipped-passage";
    return null;
  }

  function examBest(state, examId) {
    return (state.exams || [])
      .filter(exam => exam.id === examId)
      .reduce((score, exam) => Math.max(score, exam.percent || 0), 0);
  }

  function examCount(state, examId) {
    return (state.exams || []).filter(exam => exam.id === examId).length;
  }

  function daysSince(iso) {
    if (!iso) return 99;
    return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  }

  function elaPasserLoop(stateArg) {
    const state = stateArg || window.Progress.load();
    const today = window.Progress.studyLoopToday();
    const field02N = examCount(state, "aepa-field02");
    const field02Best = examBest(state, "aepa-field02");
    const formA = { n: examCount(state, "ela-field-rigor"), best: examBest(state, "ela-field-rigor") };
    const formB = { n: examCount(state, "ela-field-rigor-b"), best: examBest(state, "ela-field-rigor-b") };
    const formC = { n: examCount(state, "ela-field-rigor-c"), best: examBest(state, "ela-field-rigor-c") };
    const clusters = { n: examCount(state, "ela-clusters"), best: examBest(state, "ela-clusters") };
    const traps = ((window.Progress.trapCounts && window.Progress.trapCounts()) || [])
      .map(t => ({ ...t, label: trapLabel(t.trap) }));
    const topTrap = traps[0];

    const trapDeck = {
      grammar: "cards.html?deck=grammar-usage",
      "adjacent-term": "cards.html?deck=literature-terms",
      tone: "cards.html?deck=literature-terms",
      overclaim: "cards.html?deck=informational",
      "fact-opinion": "cards.html?deck=informational",
      "true-detail": "cards.html?deck=reading-process",
      "wrong-speaker": "cards.html?deck=literature-terms",
      "skipped-passage": "cards.html?deck=reading-process"
    };
    const cardsHref = topTrap
      ? (trapDeck[topTrap.trap] || "cards.html")
      : "cards.html";
    const cardsLabel = topTrap
      ? `Cards: drill “${topTrap.label}” (${topTrap.n} logged)`
      : "Cards: word ↔ definition (20–30 min)";

    let passageExam = "ela-field-rigor-b";
    let passageWhy = "New passages, same Field 02 moves.";
    if (formA.n === 0) {
      passageExam = "ela-field-rigor";
      passageWhy = "You have not sat original Form A yet. One full calibration form, then switch to randomized clusters.";
    } else if (formB.n === 0) {
      passageExam = "ela-clusters";
      passageWhy = "Form A is started. Weekly work is a new cluster mix — not Field 02. Sit Form B once when you want a second fixed calibration.";
    } else {
      passageExam = "ela-clusters";
      passageWhy = "Random original clusters (A/B/C bank). This sitting will not match the last letter key.";
    }

    const timedDue = daysSince(today.lastTimedAt) >= 6;
    let timedExam = "ela-clusters";
    if (formA.n === 0) timedExam = "ela-field-rigor";
    else if (formB.n === 0) timedExam = "ela-field-rigor-b";
    else if (examBest(state, "ela-official-1") < 70 && examCount(state, "ela-official-1") >= 1) timedExam = "ela-official-1";
    else timedExam = "ela-clusters";

    return {
      today,
      field02N,
      field02Best,
      formA,
      formB,
      formC,
      clusters,
      traps,
      topTrap,
      cards: { href: cardsHref, label: cardsLabel, done: today.cards },
      passage: {
        href: passageExam ? `exam.html?exam=${passageExam}` : "practice.html?track=english&missed=1",
        examId: passageExam,
        why: passageWhy,
        done: today.passage
      },
      timed: {
        due: timedDue,
        href: `exam.html?exam=${timedExam}`,
        examId: timedExam,
        daysSince: daysSince(today.lastTimedAt)
      },
      field02Burned: field02N >= 2,
      honestReady: field02N >= 2
        ? (formA.best >= 80 && formB.best >= 80)
        : (field02N >= 1 && field02Best >= 70 && (formA.best >= 80 || formB.best >= 80))
    };
  }

  function officialMathDomains() {
    return OFFICIAL_MATH_DOMAINS.slice();
  }

  function officialEnglishDomains() {
    return OFFICIAL_ENGLISH_DOMAINS.slice();
  }

  function mathTrackDomains() {
    return MATH_TRACK_DOMAINS.slice();
  }

  function englishTrackDomains() {
    return ENGLISH_TRACK_DOMAINS.slice();
  }

  return {
    allLessons,
    lessonById,
    lessonCheckTotals,
    lessonMasteryStatus,
    examWaivesLesson,
    examHistoryForSkill,
    syncExamLessonMastery,
    missingPrerequisites,
    lessonGateStatus,
    skillMasteryStatus,
    getRemedialPlan,
    repairPlanFromExam,
    trackForDomain,
    trackForSkill,
    recommendedNext,
    elaPasserLoop,
    ELA_TRAPS,
    classifyElaTrap,
    trapLabel,
    officialMathDomains,
    officialEnglishDomains,
    mathTrackDomains,
    englishTrackDomains
  };
})();
