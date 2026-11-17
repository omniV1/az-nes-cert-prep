/* Retired AEPA Field 02 / Field 10 study guides, mapped onto current NES 301 / 304 lessons.
   Pearson still publishes these as useful extra practice. They are not the current exam blueprint. */
window.STUDY_GUIDES = (() => {
  const FIELD02_URL = "https://www.aepa.nesinc.com/Content/Docs/AZ_Field02_StudyGuide.pdf";
  const FIELD10_URL = "https://www.aepa.nesinc.com/Content/Docs/AZ_Field10_StudyGuide.pdf";
  const NES_PROFILE_301 = "https://www.aepa.nesinc.com/Content/Docs/NES_Profile_301.pdf";
  const NES_PROFILE_304 = "https://www.aepa.nesinc.com/Content/Docs/NES_Profile_304.pdf";
  const NES_FRAMEWORK_301 = "https://www.nestest.com/static/docs/NES_Framework_301.pdf";
  const NES_FRAMEWORK_304 = "https://www.nestest.com/static/docs/NES_Framework_304.pdf";

  /* Pearson’s Field 02 / Field 10 objective lists live in js/data/aepa-guides.js (personal edition only).
     Without it, every Field-guide feature below returns nothing. */
  const aepa = (window.APP_EDITION !== "sale" && window.AEPA_GUIDES) || {};
  const field02 = aepa.field02 || null;
  const field10 = aepa.field10 || null;

  const guides = {};
  if (field02) guides.field02 = field02;
  if (field10) guides.field10 = field10;

  /* Pearson’s answer keys live in js/data/pearson-keys.js, which only the personal edition loads.
     Without it (the release build), the Field 02 / Field 10 items and exams are simply absent. */
  const itemBanks = (window.APP_EDITION !== "sale" && window.PEARSON_KEYS) || {};
  const hasKeys = Object.keys(itemBanks).length > 0;

  const current = {
    english: {
      code: "NES English Language Arts (301)",
      framework: NES_FRAMEWORK_301,
      profile: NES_PROFILE_301
    },
    math: {
      code: "NES Mathematics (304)",
      framework: NES_FRAMEWORK_304,
      profile: NES_PROFILE_304
    }
  };

  function lessonTitle(lessonId) {
    const lesson = (window.CURRICULUM?.domains || []).flatMap(d => d.lessons).find(L => L.id === lessonId);
    return lesson ? lesson.title : lessonId;
  }

  function forLesson(lessonId) {
    return Object.values(guides).flatMap(guide =>
      guide.objectives
        .filter(obj => obj.lessonIds.includes(lessonId))
        .map(obj => ({ ...obj, guideId: guide.id, guideTitle: guide.title, url: guide.url, track: guide.track }))
    );
  }

  function forTrack(track) {
    return Object.values(guides).find(guide => guide.track === track) || null;
  }

  function resourceKey(guideId, objectiveId) {
    return `aepa:${guideId}:${objectiveId}`;
  }

  function itemKey(guideId, n) {
    return `aepaItem:${guideId}:${n}`;
  }

  function itemsForGuide(guideId) {
    const bank = itemBanks[guideId];
    if (!bank) return [];
    return bank.objectives.map((objectiveId, i) => {
      const letter = bank.answers[i];
      const removed = !objectiveId || letter === "X";
      return {
        n: i + 1,
        guideId,
        answer: removed ? null : letter,
        objectiveId: objectiveId || null,
        pdfPage: bank.pages?.[i] || null,
        removed
      };
    });
  }

  function activeItems(guideId) {
    return itemsForGuide(guideId).filter(item => !item.removed);
  }

  function itemsForObjective(guideId, objectiveId) {
    return activeItems(guideId).filter(item => item.objectiveId === objectiveId);
  }

  function itemsForLesson(lessonId, guideId) {
    const matches = forLesson(lessonId).filter(obj => !guideId || obj.guideId === guideId);
    const seen = new Set();
    const out = [];
    matches.forEach(obj => {
      itemsForObjective(obj.guideId, obj.id).forEach(item => {
        const key = item.guideId + ":" + item.n;
        if (!seen.has(key)) {
          seen.add(key);
          out.push(item);
        }
      });
    });
    return out.sort((a, b) => a.n - b.n || a.guideId.localeCompare(b.guideId));
  }

  function formatItemList(items) {
    if (!items.length) return "";
    return items.map(item => item.n).join(", ");
  }

  function examItemFromOfficial(item) {
    const guide = guides[item.guideId];
    if (item.removed) {
      return {
        id: `AEPA-${guide.field}-${String(item.n).padStart(3, "0")}`,
        source: "aepa",
        removed: true,
        guideId: item.guideId,
        officialN: item.n,
        pdfPage: item.pdfPage,
        stem: `Pearson removed Field ${guide.field} question ${item.n} from this study guide. Skip it. The next item is still numbered ${item.n + 1} in the PDF.`,
        choices: [],
        answer: null,
        domain: guide.track === "english" ? "reading" : "number",
        skillIds: [],
        lessonIds: [],
        aepaObjective: null,
        explanation: "Not scored. Pearson left the original question number in the PDF as a placeholder."
      };
    }
    const obj = guide.objectives.find(o => o.id === item.objectiveId);
    const lessonIds = obj?.lessonIds || [];
    const domain = (window.CURRICULUM?.domains || []).find(d =>
      d.lessons.some(lesson => lessonIds.includes(lesson.id))
    );
    const lesson = domain?.lessons.find(L => lessonIds.includes(L.id));
    return {
      id: `AEPA-${guide.field}-${String(item.n).padStart(3, "0")}`,
      source: "aepa",
      guideId: item.guideId,
      officialN: item.n,
      pdfPage: item.pdfPage,
      stem: `Official Field ${guide.field} question ${item.n} is on the PDF page to the left. Choose A–D using the same letters as the PDF.`,
      choices: ["", "", "", ""],
      answer: "ABCD".indexOf(item.answer),
      domain: domain?.id || (guide.track === "english" ? "reading" : "number"),
      skillIds: lesson?.skills || [],
      lessonIds,
      aepaObjective: item.objectiveId,
      coach: (window.FIELD02_COACH && item.guideId === "field02") ? window.FIELD02_COACH[item.n] : null,
      explanation: `Pearson answer key: ${item.answer}. Field ${guide.field} objective ${item.objectiveId} (${obj?.title || ""}). On ${guide.replacedBy}, study: ${lessonIds.map(lessonTitle).join("; ") || "the mapped NES lessons"}.`
    };
  }

  function embedDetailsHtml(guide, extraNote) {
    return `
      <details class="card official-calibration" style="margin-top:1.25rem">
        <summary><strong>${guide.title}</strong> — retired AEPA, extra Pearson practice</summary>
        <p>${guide.formatNote}</p>
        ${extraNote ? `<p>${extraNote}</p>` : ""}
        <iframe class="official-embed" src="${guide.url}" title="${guide.title}" loading="lazy"></iframe>
        <p class="muted">If the PDF does not render, <a href="${guide.url}" target="_blank" rel="noopener">open the official archive guide</a>.</p>
      </details>`;
  }

  function examLobbyHtml() {
    return `
      <section class="card" style="margin-top:1.25rem">
        <h2>${field02 ? "Pearson’s free study PDFs — how to use them" : "Pearson’s free NES materials"}</h2>
        <ol>
          <li><strong>Current exam:</strong> NES frameworks and profiles (301 / 304) set the live competencies, weights, and sample-item style.</li>
          <li><strong>Lesson first:</strong> finish the mapped lesson in Learn, then work that competency's NES profile sample.</li>
          ${field02 ? `<li><strong>Extra practice from Pearson:</strong> Field 02 (English) and Field 10 (Math) are retired AEPA guides Pearson still recommends. Read each item in Pearson’s PDF and check it against the key at the back of the guide.${hasKeys ? " In this personal copy you can also score it here." : ""}</li>
          <li><strong>Ignore retired format:</strong> constructed-response / written tasks in Field 02 and Field 10 are not on NES 301 or 304 (those are multiple-choice). APK 052 is the exam with written tasks.</li>` : ""}
        </ol>
        ${hasKeys ? `<div class="cta-row">
          <a class="btn btn-accent" href="exam.html?exam=aepa-field02">Interactive Field 02 exam</a>
          <a class="btn btn-accent" href="exam.html?exam=aepa-field10">Interactive Field 10 exam</a>
        </div>` : ""}
        ${field02 ? `<p class="muted" style="margin-bottom:0"><a href="study-guides.html">Open the full Field 02 / Field 10 crosswalk</a> — every retired objective is mapped to a current lesson.</p>` : ""}
      </section>
      ${field02 ? embedDetailsHtml(field02, "Use after the matching NES 301 lesson. Current ELA weights: reading 23%, literature 23%, language 19%, writing modes 23%, oral/visual 12%.") : ""}
      ${field10 ? embedDetailsHtml(field10, "Use after the matching NES 304 lesson. Current math weights: number 19%, algebra 24%, geometry 19%, trig/calc 19%, stats/discrete 19%.") : ""}
      <details class="card official-calibration" style="margin-top:1.25rem">
        <summary><strong>Embedded official NES English Language Arts 301 profile</strong></summary>
        <p>Current 301 sample items. Pair with required calibration inside each official ELA lesson.</p>
        <iframe class="official-embed" src="${NES_PROFILE_301}" title="Official NES English Language Arts 301 profile" loading="lazy"></iframe>
        <p class="muted">If the PDF does not render, <a href="${NES_PROFILE_301}" target="_blank" rel="noopener">open the official 301 profile</a>.</p>
      </details>
      <details class="card official-calibration" style="margin-top:1.25rem">
        <summary><strong>Embedded official NES Mathematics 304 profile</strong></summary>
        <p>Current 304 sample items. Pair with required calibration inside each official math lesson.</p>
        <iframe class="official-embed" src="${NES_PROFILE_304}" title="Official NES Mathematics 304 profile" loading="lazy"></iframe>
        <p class="muted">If the PDF does not render, <a href="${NES_PROFILE_304}" target="_blank" rel="noopener">open the official 304 profile</a>.</p>
      </details>`;
  }

  function lessonPracticeHtml(lessonId, state) {
    const matches = forLesson(lessonId);
    if (!matches.length) return "";
    const resources = state?.officialResources || {};
    const groups = {};
    matches.forEach(obj => {
      if (!groups[obj.guideId]) groups[obj.guideId] = { guide: guides[obj.guideId], items: [] };
      groups[obj.guideId].items.push(obj);
    });
    return Object.values(groups).map(({ guide, items }) => {
      const objText = items.map(o => `<strong>${o.id}</strong> ${o.title}`).join("; ");
      const qItems = itemsForLesson(lessonId, guide.id);
      const qText = formatItemList(qItems);
      const allDone = items.every(o => resources[resourceKey(guide.id, o.id)]);
      const checkId = `aepa-lesson-${guide.id}`;
      return `
        <section class="official-calibration" id="aepa-${guide.id}">
          <div class="eyebrow">Supplemental AEPA practice (not the live blueprint)</div>
          <h3>${guide.title}</h3>
          <p>After the NES sample above, read Field ${guide.field} items <strong>${qText || objText}</strong> in Pearson’s PDF (objectives ${objText}). Cover the answer key at the back of the guide until you have answered.</p>
          ${hasKeys ? `<p class="cta-row"><a class="btn btn-secondary" href="exam.html?exam=aepa-${guide.id}&amp;lesson=${lessonId}">Score these Field ${guide.field} items</a></p>` : ""}
          <iframe class="official-embed" src="${guide.url}" title="${guide.title}" loading="lazy"></iframe>
          <p class="muted">If the PDF does not render, <a href="${guide.url}" target="_blank" rel="noopener">open Field ${guide.field}</a>. Full map: <a href="study-guides.html#${guide.id}">study-guides.html</a>.</p>
          <label class="official-confirm">
            <input type="checkbox" id="${checkId}" data-guide="${guide.id}" ${allDone ? "checked" : ""} />
            <span>I worked the mapped Field ${guide.field} practice items for this lesson before reading the answer key.</span>
          </label>
        </section>`;
    }).join("");
  }

  return {
    field02,
    field10,
    guides,
    hasKeys,
    current,
    urls: { FIELD02_URL, FIELD10_URL, NES_PROFILE_301, NES_PROFILE_304, NES_FRAMEWORK_301, NES_FRAMEWORK_304 },
    forLesson,
    forTrack,
    lessonTitle,
    resourceKey,
    itemKey,
    itemsForGuide,
    activeItems,
    itemsForObjective,
    itemsForLesson,
    formatItemList,
    examItemFromOfficial,
    embedDetailsHtml,
    examLobbyHtml,
    lessonPracticeHtml
  };
})();
