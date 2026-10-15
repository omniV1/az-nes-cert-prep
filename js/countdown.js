/* Date-driven NES 301 study plan: turns a test date and saved results into phases, weeks, and weak areas. */
(function (root) {
  const DAY_MS = 86400000;

  // Domain weights as listed on the ELA domain drills in exams.js.
  const DOMAIN_WEIGHTS = { reading: 23, literature: 23, language: 19, writing: 23, oral: 12 };
  const DOMAIN_DRILLS = {
    reading: "ela-reading-block",
    literature: "ela-literature-block",
    language: "ela-language-block",
    writing: "ela-writing-block",
    oral: "ela-oral-block"
  };
  // Full-length or passage-set sittings: the ones that say where you stand.
  const FULL_FORMS = [
    "ela-clusters", "ela-field-rigor", "ela-field-rigor-b", "ela-field-rigor-c",
    "ela-official-1", "ela-official-2", "ela-full-1", "ela-full-2"
  ];
  const PASSAGE_SETS = ["ela-clusters", "ela-field-rigor", "ela-field-rigor-b", "ela-field-rigor-c"];
  const TARGET_PCT = 80;
  const PEARSON_LEAD_DAYS = 17;
  const FINAL_SITTING_LEAD_DAYS = 7;

  // Days are integers (days since the epoch, UTC) so DST never shifts a date.
  function parseDay(s) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ""));
    if (!m) return null;
    const ms = Date.UTC(+m[1], +m[2] - 1, +m[3]);
    const d = new Date(ms);
    if (d.getUTCMonth() !== +m[2] - 1 || d.getUTCDate() !== +m[3]) return null;
    return ms / DAY_MS;
  }

  function formatDay(n) {
    return new Date(n * DAY_MS).toISOString().slice(0, 10);
  }

  function localToday(now) {
    const d = now || new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  const PHASES = {
    baseline: {
      title: "Baseline sitting",
      focus: "Take one timed cluster exam, cold. The point is an honest starting score. Afterward, read the explanation for every miss and log the trap type.",
      links: [{ label: "Cluster exam (56 q, 80 min)", href: "exam.html?exam=ela-clusters" }]
    },
    weak: {
      title: "Weakest areas first",
      focus: "Work your lowest domains (see Weak areas). Open the lesson for any idea you can't explain out loud, then run that domain's drill. Cards every day.",
      links: [{ label: "Cards", href: "cards.html" }, { label: "Missed problems", href: "practice.html?track=english&missed=1" }]
    },
    passages: {
      title: "Hard passages and literature",
      focus: "New passage clusters and hard items. Review literary periods, Romanticism through Modernism and the Harlem Renaissance. On every miss, read why your choice was wrong, not just the key.",
      links: [
        { label: "Cluster exam", href: "exam.html?exam=ela-clusters" },
        { label: "Hard gauntlet", href: "exam.html?exam=ela-hard-gauntlet" },
        { label: "Periods drill", href: "exam.html?exam=ela-periods-drill" }
      ]
    },
    fix: {
      title: "Fix what Pearson showed",
      focus: "Drill the areas the Pearson practice test flagged. One last full-length app sitting about a week out. Cards every day.",
      links: [{ label: "Cards", href: "cards.html" }, { label: "Missed problems", href: "practice.html?track=english&missed=1" }]
    },
    taper: {
      title: "Taper",
      focus: "Light cards only, about 20 minutes. Confirm the test center, your ID, and your arrival time. Sleep.",
      links: [{ label: "Cards", href: "cards.html" }]
    }
  };

  /*
   * opts: { today, testDate, baselineDone, pearsonDate }
   * today/testDate/pearsonDate are YYYY-MM-DD; pearsonDate is set once the Pearson practice test is taken.
   */
  function buildSchedule(opts) {
    const t = parseDay(opts.today);
    const D = parseDay(opts.testDate);
    if (t == null || D == null) return null;
    const daysLeft = D - t;
    if (daysLeft < 0) return { daysLeft, past: true, phases: [], milestones: [], weeks: [], notes: [] };

    const notes = [];
    const phases = [];
    const milestones = [];
    const addPhase = (id, start, end) => {
      start = Math.max(start, t);
      end = Math.min(end, D - 1);
      if (end >= start) phases.push({ id, ...PHASES[id], start, end });
    };

    const taperStart = daysLeft >= 5 ? D - 2 : D;

    let earliest = t;
    if (!opts.baselineDone && daysLeft >= 3) {
      const bEnd = daysLeft >= 14 ? t + 3 : t;
      addPhase("baseline", t, bEnd);
      earliest = bEnd + 1;
    }

    const taken = parseDay(opts.pearsonDate);
    let P;
    if (taken != null) {
      P = taken;
    } else if (daysLeft >= 2) {
      // Leave about 2.5 weeks to act on the result, but not before some drilling.
      P = D - PEARSON_LEAD_DAYS;
      if (P < earliest + 7) P = Math.max(earliest, D - Math.max(4, Math.round(daysLeft / 3)));
      P = Math.min(P, D - 2);
      P = Math.max(P, t);
    }

    if (taken == null && P != null) {
      const drillEnd = P - 1;
      if (drillEnd - earliest >= 1) {
        const mid = earliest + Math.floor((drillEnd - earliest) / 2);
        addPhase("weak", earliest, mid);
        addPhase("passages", mid + 1, drillEnd);
      } else {
        addPhase("weak", earliest, drillEnd);
      }
      milestones.push({
        id: "pearson", day: P, title: "Pearson practice test (one shot)",
        detail: "Real conditions: timed, no notes, one sitting. It is your best predictor, so take it with time left to act on it.",
        href: "https://www.nestest.com/prepare/301"
      });
    }

    // Once the Pearson test is taken, everything from today on is fixing its gaps.
    if (P != null) addPhase("fix", Math.max(earliest, taken != null ? t : P + 1), taperStart - 1);
    else addPhase("weak", earliest, taperStart - 1);
    addPhase("taper", taperStart, D - 1);

    const F = D - FINAL_SITTING_LEAD_DAYS;
    if (F >= t && (P == null || F >= P + 3)) {
      milestones.push({
        id: "final", day: F, title: "Last full-length sitting",
        detail: "150 questions in 3 hours: a stamina rehearsal. Review misses, then keep the last week light.",
        href: "exam.html?exam=ela-official-2"
      });
    }
    milestones.push({ id: "test", day: D, title: "Test day", detail: "Arrive early with your ID.", href: null });
    milestones.sort((a, b) => a.day - b.day);

    if (daysLeft < 21) notes.push("Short window: skip new lessons, drill weak domains and do one cluster sitting every few days.");
    if (taken == null && P != null && D - P < 10) notes.push("The Pearson practice test lands close to test day, so there is little time to act on it. Take it as soon as your baseline review is done.");

    const weeks = [];
    let passagesWeekSeen = false;
    for (let start = t, n = 1; start < D; start += 7, n++) {
      const end = Math.min(start + 6, D - 1);
      const inWeek = x => x.start <= end && x.end >= start;
      const weekPhases = phases.filter(inWeek).map(p => p.id);
      const weekMilestones = milestones.filter(m => m.day >= start && m.day <= end && m.id !== "test");
      let timed = null;
      if (weekMilestones.length || start > D - FINAL_SITTING_LEAD_DAYS) {
        timed = null; // a milestone is this week's timed sitting, or it is the light final week
      } else if (weekPhases.includes("baseline")) {
        timed = { label: "Baseline: cluster exam", href: "exam.html?exam=ela-clusters" };
      } else if (weekPhases.includes("passages") && !passagesWeekSeen) {
        timed = { label: "Full-length simulation A (3 hours)", href: "exam.html?exam=ela-official-1" };
      } else if (weekPhases.some(id => id !== "taper")) {
        timed = { label: "Cluster exam (new mix)", href: "exam.html?exam=ela-clusters" };
      }
      if (weekPhases.includes("passages")) passagesWeekSeen = true;
      weeks.push({ n, start, end, phaseIds: weekPhases, milestones: weekMilestones, timed });
    }

    return { daysLeft, past: false, today: t, testDay: D, phases, milestones, weeks, notes };
  }

  function phaseOn(schedule, day) {
    return (schedule?.phases || []).find(p => p.start <= day && p.end >= day) || null;
  }

  function englishSittings(state) {
    return (state.exams || [])
      .filter(e => e.type === "english" && FULL_FORMS.includes(e.id))
      .slice()
      .sort((a, b) => String(a.at).localeCompare(String(b.at)));
  }

  /* opts: { skills, domains } from window.SKILLS and CURRICULUM.domains. */
  function analyze(state, opts) {
    const skills = opts.skills || {};
    const domainTitles = Object.fromEntries((opts.domains || []).map(d => [d.id, d.title]));
    const english = (state.exams || []).filter(e => e.type === "english").slice(0, 8);

    const domainRows = Object.keys(DOMAIN_WEIGHTS).map(id => {
      const totals = english.reduce((acc, exam) => {
        const s = exam.byDomain?.[id];
        if (s) { acc.correct += s.correct || 0; acc.total += s.total || 0; }
        return acc;
      }, { correct: 0, total: 0 });
      const pct = totals.total ? Math.round(100 * totals.correct / totals.total) : null;
      return {
        id,
        title: domainTitles[id] || id,
        weight: DOMAIN_WEIGHTS[id],
        correct: totals.correct,
        total: totals.total,
        pct,
        drillId: DOMAIN_DRILLS[id],
        // Points at stake: how far below target, times how much of the test the domain is.
        priority: pct == null || totals.total < 3 ? 0 : Math.max(0, TARGET_PCT - pct) * DOMAIN_WEIGHTS[id]
      };
    });
    const weakDomains = domainRows.filter(r => r.priority > 0).sort((a, b) => b.priority - a.priority);

    const weakSkills = Object.entries(state.skillProgress || {})
      .filter(([id, rec]) => skills[id] && DOMAIN_WEIGHTS[skills[id].domain] && rec.attempts >= 4)
      .map(([id, rec]) => ({
        id,
        title: skills[id].title,
        domain: skills[id].domain,
        attempts: rec.attempts,
        pct: Math.round(100 * rec.correct / rec.attempts),
        lessonId: (skills[id].lessonIds || [])[0] || null
      }))
      .filter(s => s.pct < 75)
      .sort((a, b) => a.pct - b.pct || b.attempts - a.attempts)
      .slice(0, 6);

    const trapCounts = {};
    (state.trapLog || []).forEach(row => { trapCounts[row.trap] = (trapCounts[row.trap] || 0) + 1; });
    const traps = Object.entries(trapCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([trap, n]) => ({ trap, n }));

    const sittings = englishSittings(state);
    const passageSittings = sittings.filter(e => PASSAGE_SETS.includes(e.id));
    return {
      domainRows,
      weakDomains,
      weakSkills,
      traps,
      sittings: sittings.slice(-5),
      baselineDone: sittings.length > 0,
      latest: sittings.length ? sittings[sittings.length - 1] : null,
      bestPassage: passageSittings.reduce((m, e) => Math.max(m, e.percent || 0), 0) || null,
      metTarget: passageSittings.some(e => (e.percent || 0) >= TARGET_PCT)
    };
  }

  const api = { buildSchedule, analyze, phaseOn, parseDay, formatDay, localToday, DOMAIN_WEIGHTS, TARGET_PCT, FULL_FORMS };
  root.Countdown = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
