window.Progress = (() => {
  const KEY = "az-nes-math-prep-v1";
  const SCHEMA_VERSION = 2;
  const LESSON_CONTENT_VERSION = 2;

  function load() {
    try {
      return migrateState(JSON.parse(localStorage.getItem(KEY)) || defaultState());
    } catch {
      return defaultState();
    }
  }

  function defaultState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      lessonContentVersion: LESSON_CONTENT_VERSION,
      lessonsDone: {},
      lessonProgress: {}, // lessonId -> { checks: { "sec-check": { chosen, correct, at } }, correct, total }
      lessonMastery: {},
      lessonChecks: {},
      problems: {},
      exams: [],
      placement: null,
      skillProgress: {},
      reviewQueue: [],
      reviewFlags: {
        formulasReviewedAt: null,
        trapsReviewedAt: null
      },
      gates: {
        strictPrereqs: true,
        placementComplete: false,
        spacedReviewEnabled: true,
        bypassLessons: {}
      },
      startedAt: new Date().toISOString()
    };
  }

  function migrateState(input) {
    const s = input && typeof input === "object" ? input : {};
    if (s.lessonContentVersion !== LESSON_CONTENT_VERSION) {
      s.legacyLessonsDone = Object.assign({}, s.legacyLessonsDone || {}, s.lessonsDone || {});
      s.lessonsDone = {};
      s.lessonProgress = {};
      s.lessonMastery = {};
      s.lessonChecks = {};
      s.lessonContentVersion = LESSON_CONTENT_VERSION;
    }
    s.lessonsDone = s.lessonsDone || {};
    s.lessonProgress = s.lessonProgress || {};
    s.lessonMastery = s.lessonMastery || {};
    s.lessonChecks = s.lessonChecks || {};
    s.problems = s.problems || {};
    s.exams = Array.isArray(s.exams) ? s.exams : [];
    s.skillProgress = s.skillProgress || {};
    for (const [skillId, rec] of Object.entries(s.skillProgress)) {
      s.skillProgress[skillId] = {
        attempts: Number(rec?.attempts) || 0,
        correct: Number(rec?.correct) || 0,
        streak: Number(rec?.streak) || 0,
        lastAt: rec?.lastAt || null,
        history: Array.isArray(rec?.history) ? rec.history : []
      };
    }
    s.reviewQueue = Array.isArray(s.reviewQueue) ? s.reviewQueue : [];
    s.reviewFlags = Object.assign({
      formulasReviewedAt: localStorage.getItem("az-nes-formulas-reviewed") || null,
      trapsReviewedAt: localStorage.getItem("az-nes-traps-reviewed") || null
    }, s.reviewFlags || {});
    s.gates = Object.assign({
      strictPrereqs: true,
      placementComplete: false,
      spacedReviewEnabled: true,
      bypassLessons: {}
    }, s.gates || {});
    s.gates.bypassLessons = s.gates.bypassLessons || {};
    s.placement = s.placement || null;
    s.startedAt = s.startedAt || new Date().toISOString();

    // Preserve previous completion while deriving v2 lesson mastery.
    for (const [lessonId, at] of Object.entries(s.lessonsDone)) {
      s.lessonMastery[lessonId] = Object.assign({
        masteredAt: at,
        source: "v1-completion"
      }, s.lessonMastery[lessonId] || {});
    }
    for (const [lessonId, lp] of Object.entries(s.lessonProgress)) {
      const total = lp.total || Object.keys(lp.checks || {}).length;
      const correct = lp.correct || Object.values(lp.checks || {}).filter(c => c.correct).length;
      s.lessonMastery[lessonId] = Object.assign({
        checksPassed: correct,
        checksTotal: total,
        checkAccuracy: total ? correct / total : 0
      }, s.lessonMastery[lessonId] || {});
    }
    s.schemaVersion = SCHEMA_VERSION;
    s.lessonContentVersion = LESSON_CONTENT_VERSION;
    return s;
  }

  function save(state) {
    state.schemaVersion = SCHEMA_VERSION;
    state.lessonContentVersion = LESSON_CONTENT_VERSION;
    state.updatedAt = new Date().toISOString();
    localStorage.setItem(KEY, JSON.stringify(state));
    if (typeof window.CustomEvent === "function") {
      window.dispatchEvent(new window.CustomEvent("az-nes-progress-changed", { detail: state }));
    }
  }

  function markLesson(id) {
    const s = load();
    s.lessonsDone[id] = new Date().toISOString();
    save(s);
    return s;
  }

  function recordProblem(id, correct) {
    const s = load();
    const prev = s.problems[id] || { attempts: 0 };
    const history = Array.isArray(prev.history) ? prev.history : [];
    history.push({ correct: !!correct, at: new Date().toISOString() });
    s.problems[id] = {
      status: correct ? "solved" : "attempted",
      correct: correct || prev.correct || false,
      attempts: (prev.attempts || 0) + 1,
      lastAt: new Date().toISOString(),
      history: history.slice(-50)
    };
    if (correct) s.problems[id].correct = true;
    if (correct) s.problems[id].status = "solved";
    save(s);
    return s;
  }

  function getLessonProgress(lessonId) {
    const s = load();
    return s.lessonProgress[lessonId] || { checks: {}, correct: 0, total: 0 };
  }

  function saveLessonCheck(lessonId, secIdx, checkIdx, chosen, correct, signature) {
    const s = load();
    s.lessonProgress = s.lessonProgress || {};
    const lp = s.lessonProgress[lessonId] || { checks: {}, correct: 0, total: 0 };
    const key = secIdx + "-" + checkIdx;
    const wasNew = !lp.checks[key];
    lp.checks[key] = {
      chosen: chosen,
      correct: !!correct,
      signature: signature || null,
      at: new Date().toISOString()
    };
    // Rebuild aggregates from checks so re-answers stay consistent
    let c = 0;
    let t = 0;
    for (const k of Object.keys(lp.checks)) {
      t += 1;
      if (lp.checks[k].correct) c += 1;
    }
    lp.correct = c;
    lp.total = t;
    s.lessonProgress[lessonId] = lp;
    s.lessonMastery[lessonId] = Object.assign({}, s.lessonMastery[lessonId] || {}, {
      checksPassed: c,
      checksTotal: t,
      checkAccuracy: t ? c / t : 0,
      lastAt: new Date().toISOString()
    });

    // Keep legacy aggregate in sync
    s.lessonChecks = s.lessonChecks || {};
    s.lessonChecks[lessonId] = { correct: c, total: t };
    save(s);
    return lp;
  }

  function setLessonMastery(lessonId, mastery) {
    const s = load();
    s.lessonMastery[lessonId] = Object.assign({}, s.lessonMastery[lessonId] || {}, mastery, {
      updatedAt: new Date().toISOString()
    });
    if (mastery.masteredAt && !s.lessonsDone[lessonId]) {
      s.lessonsDone[lessonId] = mastery.masteredAt;
    }
    save(s);
    return s.lessonMastery[lessonId];
  }

  function recordSkillAttempt(skillId, correct, source) {
    const s = load();
    const rec = s.skillProgress[skillId] || {
      attempts: 0,
      correct: 0,
      streak: 0,
      history: []
    };
    rec.attempts = Number(rec.attempts) || 0;
    rec.correct = Number(rec.correct) || 0;
    rec.streak = Number(rec.streak) || 0;
    rec.history = Array.isArray(rec.history) ? rec.history : [];
    rec.attempts += 1;
    if (correct) rec.correct += 1;
    rec.streak = correct ? rec.streak + 1 : 0;
    rec.lastAt = new Date().toISOString();
    rec.history.push({ correct: !!correct, source: source || "unknown", at: rec.lastAt });
    rec.history = rec.history.slice(-100);
    s.skillProgress[skillId] = rec;
    save(s);
    scheduleReview(skillId, correct, source);
    return rec;
  }

  function scheduleReview(skillId, correct, source) {
    const s = load();
    if (!s.gates.spacedReviewEnabled) return s.reviewQueue;
    const old = s.reviewQueue.find(x => x.skillId === skillId);
    const priorInterval = old?.intervalDays || 0;
    const intervalDays = correct
      ? (priorInterval < 1 ? 1 : priorInterval < 3 ? 3 : priorInterval < 7 ? 7 : Math.min(30, priorInterval * 2))
      : 1;
    const dueAt = new Date(Date.now() + intervalDays * 86400000).toISOString();
    s.reviewQueue = s.reviewQueue.filter(x => x.skillId !== skillId);
    s.reviewQueue.push({ skillId, dueAt, intervalDays, source: source || "skill" });
    save(s);
    return s.reviewQueue;
  }

  function getDueReviews() {
    const now = Date.now();
    return load().reviewQueue
      .filter(x => new Date(x.dueAt).getTime() <= now)
      .sort((a, b) => new Date(a.dueAt) - new Date(b.dueAt));
  }

  function savePlacement(result) {
    const s = load();
    s.placement = Object.assign({}, result, { at: new Date().toISOString() });
    s.gates.placementComplete = true;
    save(s);
    return s.placement;
  }

  function setGate(name, value) {
    const s = load();
    s.gates[name] = value;
    save(s);
    return s.gates;
  }

  function setReviewFlag(name) {
    const s = load();
    const key = name === "formulas" ? "formulasReviewedAt" : "trapsReviewedAt";
    s.reviewFlags[key] = new Date().toISOString();
    save(s);
    return s.reviewFlags;
  }

  function bypassLesson(lessonId) {
    const s = load();
    s.gates.bypassLessons[lessonId] = new Date().toISOString();
    save(s);
    return s.gates.bypassLessons;
  }

  function recordLessonCheck(lessonId, correct) {
    // Backward-compatible wrapper; prefer saveLessonCheck
    const s = load();
    s.lessonChecks = s.lessonChecks || {};
    const c = s.lessonChecks[lessonId] || { correct: 0, total: 0 };
    c.total += 1;
    if (correct) c.correct += 1;
    s.lessonChecks[lessonId] = c;
    save(s);
    return s;
  }

  function clearLessonProgress(lessonId) {
    const s = load();
    if (s.lessonProgress) delete s.lessonProgress[lessonId];
    if (s.lessonChecks) delete s.lessonChecks[lessonId];
    if (s.lessonMastery) delete s.lessonMastery[lessonId];
    if (s.lessonsDone) delete s.lessonsDone[lessonId];
    save(s);
    return s;
  }

  function recordExam(result) {
    const s = load();
    s.exams.unshift({ ...result, at: new Date().toISOString() });
    save(s);
    return s;
  }

  function stats() {
    const s = load();
    const totalProblems = (window.PROBLEMS || []).length;
    const solved = Object.values(s.problems).filter(p => p.correct).length;
    const attempted = Object.keys(s.problems).length;
    const lessons = Object.keys(s.lessonsDone).length;
    const totalLessons = (window.CURRICULUM?.domains || []).reduce((n, d) => n + d.lessons.length, 0);
    const examCount = s.exams.length;
    const bestMath = s.exams.filter(e => e.type === "math").reduce((m, e) => Math.max(m, e.percent || 0), 0);
    return { totalProblems, solved, attempted, lessons, totalLessons, examCount, bestMath, state: s };
  }

  function reset() {
    const state = defaultState();
    save(state);
    return state;
  }

  function exportData() {
    return JSON.stringify(load(), null, 2);
  }

  function importData(json) {
    const parsed = JSON.parse(json);
    const migrated = migrateState(parsed);
    save(migrated);
    return migrated;
  }

  return {
    load, save, markLesson, recordProblem, recordLessonCheck, saveLessonCheck,
    getLessonProgress, clearLessonProgress, setLessonMastery,
    recordSkillAttempt, scheduleReview, getDueReviews, savePlacement,
    setGate, setReviewFlag, bypassLesson, recordExam, stats, reset, defaultState,
    migrateState, exportData, importData
  };
})();
