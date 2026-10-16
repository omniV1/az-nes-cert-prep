const test = require("node:test");
const assert = require("node:assert/strict");
const { loadQuestionData } = require("../scripts/load-question-data.js");

const data = loadQuestionData();
const { window } = data;
const exam = data.exams.find(e => e.id === "ela-clusters");
const sets = new Set(data.problems.filter(p => (p.tags || []).includes("longform") && p.passageSet).map(p => p.passageSet));
const familyOf = Object.fromEntries(
  Object.entries(window.CLUSTER_FAMILIES).flatMap(([family, members]) => members.map(m => [m, family]))
);
const family = id => familyOf[id] || id;

function sitWith(history) {
  window.Progress = { load: () => ({ exams: history }) };
  data.resolveExamItems(exam);
  return Array.from(exam._clusterIds);
}

test("every template family names real passage sets", () => {
  for (const [name, members] of Object.entries(window.CLUSTER_FAMILIES)) {
    assert.ok(members.length >= 2, name);
    for (const m of members) assert.ok(sets.has(m), `${name}: ${m}`);
  }
});

test("a sitting never draws two clusters from the same template", () => {
  for (let i = 0; i < 200; i++) {
    const ids = sitWith([]);
    assert.equal(ids.length, exam.build.clusterCount);
    const families = ids.map(family);
    assert.equal(new Set(families).size, families.length, ids.join(", "));
  }
});

test("templates from the last sitting are skipped while fresh ones remain", () => {
  for (let i = 0; i < 50; i++) {
    const last = sitWith([]);
    const next = sitWith([{ id: "ela-clusters", clusterIds: last }]);
    const lastFamilies = new Set(last.map(family));
    assert.deepEqual(next.filter(id => lastFamilies.has(family(id))), [], `repeated after ${last.join(", ")}`);
  }
});

test("yesterday's dust note keeps the smoke and heat briefings out of today's sitting", () => {
  for (let i = 0; i < 50; i++) {
    const next = sitWith([{ id: "ela-clusters", clusterIds: ["dust", "canals", "start"] }]);
    for (const id of ["dust", "smoke", "heat", "sources", "canals", "water", "start", "lunch", "hours"]) {
      assert.ok(!next.includes(id), `${id} in ${next.join(", ")}`);
    }
  }
});
