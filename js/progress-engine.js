/* Central mastery, prerequisite, placement, and remediation logic. */
window.ProgressEngine = (() => {
  const OFFICIAL_MATH_DOMAINS = ["number", "algebra", "geometry", "trigcalc", "stats"];

  function allLessons() {
    return (window.CURRICULUM?.domains || []).flatMap(domain =>
      domain.lessons.map(lesson => ({ ...lesson, domainId: domain.id, domainTitle: domain.title }))
    );
  }

  function lessonById(id) {
    return allLessons().find(lesson => lesson.id === id);
  }

  function lessonCheckTotals(lessonId) {
    const lesson = window.LESSONS?.[lessonId];
    if (!lesson?.sections) return { total: 0, correct: 0 };
    const total = lesson.sections.reduce((sum, section) =>
      sum + (section.checks || (section.check ? [section.check] : [])).length, 0
    );
    const saved = window.Progress.load().lessonProgress?.[lessonId];
    return { total, correct: saved?.correct || 0, attempted: saved?.total || 0 };
  }

  function placementWaivesLesson(lesson, state) {
    if (!state.placement?.bySkill || !lesson?.skills?.length) return false;
    return lesson.skills.every(skillId => {
      const result = state.placement.bySkill[skillId];
      return result && result.total >= 2 && result.pct >= 85;
    });
  }

  function lessonMasteryStatus(lessonId, stateArg) {
    const state = stateArg || window.Progress.load();
    const lesson = lessonById(lessonId);
    if (!lesson) return { mastered: false, reason: "Unknown lesson" };

    if (state.lessonsDone?.[lessonId] || state.lessonMastery?.[lessonId]?.masteredAt) {
      return { mastered: true, source: "completed" };
    }
    if (placementWaivesLesson(lesson, state)) {
      return { mastered: true, source: "placement" };
    }

    const checks = lessonCheckTotals(lessonId);
    const accuracy = checks.attempted ? checks.correct / checks.attempted : 0;
    const allAttempted = checks.total > 0 && checks.attempted >= checks.total;
    const mastered = allAttempted && accuracy >= 0.8;
    return {
      mastered,
      source: mastered ? "checks" : null,
      checksTotal: checks.total,
      checksAttempted: checks.attempted,
      checksCorrect: checks.correct,
      accuracy,
      reason: !allAttempted
        ? `Complete all ${checks.total} quick checks`
        : `Reach at least 80% check accuracy (currently ${Math.round(accuracy * 100)}%)`
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

  function getRemedialPlan(stateArg) {
    const state = stateArg || window.Progress.load();
    const weakSkills = [];
    for (const [skillId, skill] of Object.entries(window.SKILLS || {})) {
      const placement = state.placement?.bySkill?.[skillId];
      const progress = state.skillProgress?.[skillId];
      const total = progress ? progress.attempts : (placement?.total || 0);
      const correct = progress ? progress.correct : (placement?.correct || 0);
      const pct = total ? Math.round(correct * 100 / total) : null;
      if (pct != null && pct < 75) {
        weakSkills.push({
          skillId,
          title: skill.title,
          domain: skill.domain,
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

  function recommendedNext(stateArg) {
    const state = stateArg || window.Progress.load();
    const due = window.Progress.getDueReviews();
    if (due.length) {
      const skill = window.SKILLS?.[due[0].skillId];
      return {
        type: "review",
        skillId: due[0].skillId,
        title: `Review: ${skill?.title || due[0].skillId}`,
        lessonId: skill?.lessonIds?.[0] || null
      };
    }

    const remediation = getRemedialPlan(state);
    for (const lessonId of remediation.suggestedLessons) {
      if (!lessonMasteryStatus(lessonId, state).mastered && !lessonGateStatus(lessonId, state).locked) {
        return { type: "remedial", lessonId, title: lessonById(lessonId)?.title };
      }
    }

    for (const lesson of allLessons()) {
      if (lesson.domainId === "pedagogy") continue;
      if (!lessonMasteryStatus(lesson.id, state).mastered && !lessonGateStatus(lesson.id, state).locked) {
        return { type: "lesson", lessonId: lesson.id, title: lesson.title, domainId: lesson.domainId };
      }
    }
    const best = examId => (state.exams || [])
      .filter(exam => exam.id === examId)
      .reduce((score, exam) => Math.max(score, exam.percent || 0), 0);
    const mockSequence = [
      { examId: "math-full-1", title: "Half-Length Math Mock A" },
      { examId: "math-full-2", title: "Half-Length Math Mock B" },
      { examId: "math-official-1", title: "Official-Length Math Simulation A" },
      { examId: "math-official-2", title: "Official-Length Math Simulation B" }
    ];
    const nextMock = mockSequence.find(mock => best(mock.examId) < 85);
    return nextMock
      ? { type: "mock", ...nextMock }
      : { type: "maintenance", title: "Maintain mastery with mixed review" };
  }

  function officialMathDomains() {
    return OFFICIAL_MATH_DOMAINS.slice();
  }

  return {
    allLessons,
    lessonById,
    lessonCheckTotals,
    lessonMasteryStatus,
    missingPrerequisites,
    lessonGateStatus,
    skillMasteryStatus,
    getRemedialPlan,
    recommendedNext,
    officialMathDomains
  };
})();
