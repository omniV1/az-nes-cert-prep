/* Shared lesson-section builder used by English (and available to other domains). */
window.LessonKit = (() => {
  function section(heading, prerequisite, meaning, model, example1, example2, guided, mistake, checks) {
    return {
      heading,
      body: `
        <div class="callout"><strong>Prerequisite reminder:</strong> ${prerequisite}</div>
        <p><strong>Plain meaning:</strong> ${meaning}</p>
        <div class="formula"><strong>Visual model</strong><br>${model}</div>
        <div class="worked-example">
          <div class="we-label">Worked Example 1 — ${example1.label}</div>
          <p>${example1.problem}</p>
          <ol class="we-steps">${example1.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          <p class="we-answer">${example1.answer}</p>
        </div>
        <div class="worked-example">
          <div class="we-label">Worked Example 2 — ${example2.label}</div>
          <p>${example2.problem}</p>
          <ol class="we-steps">${example2.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          <p class="we-answer">${example2.answer}</p>
        </div>
        <div class="callout"><strong>Guided practice:</strong> ${guided.problem}<br><strong>Hint / partial setup:</strong> ${guided.hint}</div>
        <div class="callout"><strong>Common mistake:</strong> ${mistake}</div>
      `,
      checks
    };
  }

  const check = (prompt, choices, answer, explain) => ({ prompt, choices, answer, explain });

  function problem(spec) {
    return spec;
  }

  return { section, check, problem };
})();
