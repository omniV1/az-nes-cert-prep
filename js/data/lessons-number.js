/* Beginner-first Number Sense mastery lessons for NES Mathematics (NT304). */
window.LESSONS = Object.assign(window.LESSONS || {}, {
  "num-01": {
    title: "Problem-solving strategies & estimation",
    domain: "number",
    intro: `<p><strong>Goal:</strong> Translate everyday situations into arithmetic, choose a useful representation, estimate first, and check whether an answer makes sense.</p>`,
    sections: [
      {
        heading: "Estimate, compute, and check",
        body: `
          <p><strong>Prerequisite reminder:</strong> A percent means “out of 100.” Move the decimal point two places left before multiplying: 21% = 0.21.</p>
          <p><strong>Plain-language meaning:</strong> Estimation gives an answer neighborhood. It helps you choose an operation and catch a misplaced decimal; exact computation then gives the final answer.</p>
          <p><strong>Concrete representation:</strong></p>
          <table><thead><tr><th>Question</th><th>Friendly version</th><th>Expected neighborhood</th></tr></thead><tbody><tr><td>21% of 612</td><td>20% of 600</td><td>about 120</td></tr><tr><td>49 &times; 19</td><td>50 &times; 20</td><td>about 1,000</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — percent benchmark</div><p><em>Find 21% of 612.</em></p><ol class="we-steps"><li><strong>See it as “21 out of every 100”:</strong> 21% = 21/100 = 0.21.</li><li><strong>Estimate:</strong> 20% of 600 is 0.20 &times; 600 = 120, so the exact answer should be a little above 120.</li><li><strong>Compute:</strong> 0.21 &times; 612 = 128.52.</li><li><strong>Check:</strong> 128.52 is near 120, so the size is sensible.</li></ol><p class="we-answer">Answer: 128.52</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — break apart</div><p><em>Estimate and compute 49 &times; 19.</em></p><ol class="we-steps"><li><strong>See it by rounding:</strong> 49 &times; 19 is near 50 &times; 20 = 1,000.</li><li><strong>See it by breaking apart:</strong> 49 &times; 19 = 49(20 - 1) = 980 - 49.</li><li><strong>Compute:</strong> 980 - 49 = 931.</li><li><strong>Check:</strong> 931 is reasonably close to 1,000 and must be below it because both original factors are smaller.</li></ol><p class="we-answer">Answer: 931</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Find 32% of 480. Hint: 32% = <u>&nbsp;&nbsp;0.32&nbsp;&nbsp;</u>. Estimate with 30% of 500, then finish 0.32 &times; 480 = ___.</div>
          <div class="callout"><strong>Common mistake:</strong> Using 32 instead of 0.32. “Percent” requires division by 100 before multiplication.</div>
        `,
        checks: [
          { prompt: "What is 15% written as a decimal?", choices: ["0.15", "1.5", "15", "0.015"], answer: 0, explain: "Percent means divide by 100, so 15% = 15/100 = 0.15." },
          { prompt: "A student says 6% of 3,400 is 2,040. Which conclusion is best?", choices: ["It should be 204; 2,040 is ten times too large", "It is correct", "It should be 20.4", "It should be 3,394"], answer: 0, explain: "6% = 0.06, and 0.06 × 3,400 = 204. An estimate near 6% of 3,000, or 180, exposes the factor-of-10 error." }
        ]
      },
      {
        heading: "Rate addition: work completed together",
        body: `
          <p><strong>Prerequisite reminder:</strong> A rate such as 1/4 job per hour tells what fraction is completed in one hour. Fractions need matching denominators before addition.</p>
          <p><strong>Plain-language meaning:</strong> Workers’ completed pieces add each hour. Their alone-times do not add or average; their <em>rates</em> add.</p>
          <p><strong>Hourly-work table:</strong></p>
          <table><thead><tr><th>Worker</th><th>Alone time</th><th>Work in 1 hour</th></tr></thead><tbody><tr><td>A</td><td>4 h</td><td>1/4 job</td></tr><tr><td>B</td><td>12 h</td><td>1/12 job</td></tr><tr><td>Together</td><td>?</td><td>1/4 + 1/12</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — add hourly pieces</div><p><em>A finishes in 4 hours and B in 12 hours. How long together?</em></p><ol class="we-steps"><li><strong>See one hour:</strong> A completes 1/4 and B completes 1/12.</li><li><strong>Match pieces explicitly:</strong> What multiplies 4 to get 12? The answer is 3. Multiply top and bottom: 1/4 = 3/12.</li><li><strong>Add:</strong> 3/12 + 1/12 = 4/12 = 1/3 job per hour.</li><li><strong>See a timeline:</strong> after hour 1, 1/3 is done; hour 2, 2/3; hour 3, the whole job. Time = 3 hours.</li></ol><p class="we-answer">Answer: 3 hours</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — advanced reverse case</div><p><em>Advanced: Together two hoses fill a pool in 4 hours. Hose A alone needs 6 hours. Find B’s alone-time.</em></p><ol class="we-steps"><li><strong>See the whole rate:</strong> together they fill 1/4 pool per hour; A contributes 1/6.</li><li><strong>See B as the missing table entry:</strong> B = 1/4 - 1/6.</li><li><strong>Match pieces:</strong> 1/4 = 3/12 and 1/6 = 2/12, so B = 1/12 pool per hour.</li><li><strong>Turn rate into time:</strong> twelve 1/12 pieces make one pool, so B needs 12 hours.</li></ol><p class="we-answer">Answer: 12 hours</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> A machine takes 5 hours and another takes 20 hours. Start: 1/5 + 1/20. What multiplies 5 to get 20? ___. Therefore 1/5 = ___/20.</div>
          <div class="callout"><strong>Common mistake:</strong> Averaging 4 and 12. Together must be faster than the fastest worker, so an answer above 4 hours cannot fit.</div>
        `,
        checks: [
          { prompt: "A takes 6 hours and B takes 3 hours. What is their combined hourly rate?", choices: ["1/2 job per hour", "1/9 job per hour", "2/9 job per hour", "1/4 job per hour"], answer: 0, explain: "1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 job per hour." },
          { prompt: "Two hoses fill a pool together in 4 hours. Hose A alone takes 6 hours. How long does B take alone?", choices: ["12 hours", "2 hours", "10 hours", "24 hours"], answer: 0, explain: "This matches the advanced worked example: B's rate is 1/4 - 1/6 = 3/12 - 2/12 = 1/12, so B alone takes 12 hours." }
        ]
      },
      {
        heading: "Average speed means total distance divided by total time",
        body: `
          <p><strong>Prerequisite reminder:</strong> distance = speed &times; time, so time = distance &divide; speed. Units guide the operation: miles divided by miles per hour gives hours.</p>
          <p><strong>Plain-language meaning:</strong> Average speed answers, “If one steady speed covered the entire trip in the same total time, what would it be?” Always begin with <strong>total distance &divide; total time</strong>.</p>
          <p><strong>Distance-time table:</strong></p>
          <table><thead><tr><th>Leg</th><th>Distance</th><th>Speed</th><th>Time = distance/speed</th></tr></thead><tbody><tr><td>Out</td><td>60 mi</td><td>30 mph</td><td>2 h</td></tr><tr><td>Back</td><td>60 mi</td><td>60 mph</td><td>1 h</td></tr><tr><td>Total</td><td>120 mi</td><td>?</td><td>3 h</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — equal distances</div><p><em>Travel 60 miles at 30 mph and 60 miles at 60 mph. Find average speed.</em></p><ol class="we-steps"><li><strong>See each time in the table:</strong> 60/30 = 2 hours and 60/60 = 1 hour.</li><li><strong>Combine totals:</strong> distance = 120 miles; time = 3 hours.</li><li><strong>Use the meaning:</strong> average speed = 120/3 = 40 mph.</li><li><strong>See why 45 is wrong:</strong> the traveler spent twice as long at 30 mph, so the result is pulled toward 30.</li></ol><p class="we-answer">Answer: 40 mph</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — unequal distances</div><p><em>Drive 90 miles at 45 mph, then 60 miles at 30 mph.</em></p><ol class="we-steps"><li><strong>See the table entries:</strong> first time = 90/45 = 2 hours; second time = 60/30 = 2 hours.</li><li><strong>Combine:</strong> total distance = 150 miles and total time = 4 hours.</li><li><strong>Divide totals:</strong> 150/4 = 37.5 mph.</li><li><strong>Second way to see it:</strong> equal time was spent at each speed, so the simple midpoint (45 + 30)/2 = 37.5 works here.</li></ol><p class="we-answer">Answer: 37.5 mph</p></div>
          <p class="callout"><strong>Optional exam shortcut:</strong> Only for two <em>equal-distance</em> legs at speeds a and b, average speed = 2ab/(a+b), the harmonic mean. Meaning and the table come first. Solving reverse harmonic-mean equations is deferred until linear-equation prerequisites are secure.</p>
          <div class="guided-practice"><strong>Guided practice:</strong> A cyclist rides 40 miles at 10 mph and 40 miles at 20 mph. Complete the table: times are 40/10 = ___ and 40/20 = ___. Then average = 80/(total time).</div>
          <div class="callout"><strong>Common mistake:</strong> Averaging speeds without checking whether the times are equal. Average speed is totals divided by totals, not automatically the midpoint.</div>
        `,
        checks: [
          { prompt: "A car travels 100 miles in 2 hours. What is its average speed?", choices: ["50 mph", "100 mph", "102 mph", "200 mph"], answer: 0, explain: "Average speed = total distance / total time = 100/2 = 50 mph." },
          { prompt: "A cyclist rides 40 miles at 10 mph and returns 40 miles at 20 mph. What is the whole-trip average speed?", choices: ["13.3 mph", "15 mph", "10 mph", "20 mph"], answer: 0, explain: "Times are 4 hours and 2 hours. Total distance is 80 miles and total time is 6 hours, so 80/6 ≈ 13.3 mph." }
        ]
      }
    ]
  },

  "num-02": {
    title: "Integers, fractions, decimals, percents",
    domain: "number",
    intro: `<p><strong>Goal:</strong> Build reliable meaning for signed numbers, fractions, decimals, and percents before using them in algebra.</p>`,
    sections: [
      {
        heading: "Signed numbers and absolute value",
        body: `
          <p><strong>Prerequisite reminder:</strong> Positive numbers lie right of 0 and negative numbers lie left of 0 on a number line.</p>
          <p><strong>Plain-language meaning:</strong> A sign gives direction; absolute value gives distance from 0, so it is never negative.</p>
          <p><strong>Number-line representation:</strong> &minus;5 &larr; &minus;4 &larr; &minus;3 &larr; &minus;2 &larr; &minus;1 &larr; 0 &rarr; 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — movement</div><p><em>Compute &minus;3 + 7.</em></p><ol class="we-steps"><li><strong>See movement:</strong> start at &minus;3 and move 7 places right.</li><li><strong>Count:</strong> &minus;2, &minus;1, 0, 1, 2, 3, 4.</li><li><strong>See signed amounts:</strong> seven positive units cancel three negative units, leaving four positive units.</li></ol><p class="we-answer">Answer: 4</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — distance</div><p><em>Solve |x &minus; 2| = 5.</em></p><ol class="we-steps"><li><strong>See a distance:</strong> x must be 5 units from 2.</li><li><strong>Move both ways:</strong> 2 + 5 = 7 and 2 - 5 = &minus;3.</li><li><strong>See it algebraically:</strong> x - 2 = 5 or x - 2 = &minus;5, giving the same two answers.</li></ol><p class="we-answer">Answer: x = 7 or x = &minus;3</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Solve |x + 1| = 4. This means x is 4 units from ___. Try &minus;1 + 4 and &minus;1 - 4.</div>
          <div class="callout"><strong>Common mistake:</strong> Giving only one answer to a positive absolute-value equation. A point normally lies on either side of the center.</div>
        `,
        checks: [
          { prompt: "What is |-8|?", choices: ["8", "-8", "0", "16"], answer: 0, explain: "Absolute value is distance from zero; -8 is 8 units from zero." },
          { prompt: "Solve |x - 4| = 9.", choices: ["x = 13 or x = -5", "x = 13 only", "x = 5 or x = -13", "x = -5 only"], answer: 0, explain: "x is 9 units from 4: 4 + 9 = 13 and 4 - 9 = -5." }
        ]
      },
      {
        heading: "Fractions as equal pieces",
        body: `
          <p><strong>Prerequisite reminder:</strong> In a/b, b names how many equal pieces make a whole and a counts how many pieces we have.</p>
          <p><strong>Plain-language meaning:</strong> Addition combines same-sized pieces; multiplication takes a fraction <em>of</em> another amount; division asks how many groups fit.</p>
          <p><strong>Pieces representation:</strong> 1/2 = 2/4 because one of two large pieces covers the same amount as two of four smaller pieces.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — match piece sizes</div><p><em>Compute 1/3 + 1/4.</em></p><ol class="we-steps"><li><strong>See the pieces:</strong> thirds and fourths are different sizes, so do not add their labels directly.</li><li><strong>Rename both as twelfths:</strong> 1/3 = 4/12 and 1/4 = 3/12.</li><li><strong>Add equal pieces:</strong> 4/12 + 3/12 = 7/12.</li></ol><p class="we-answer">Answer: 7/12</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — groups that fit</div><p><em>Compute 3/4 &divide; 1/8.</em></p><ol class="we-steps"><li><strong>See eighth-size pieces:</strong> 3/4 = 6/8, so six groups of 1/8 fit.</li><li><strong>See the reciprocal rule:</strong> 3/4 &times; 8/1 = 24/4 = 6.</li><li><strong>Connect the ways:</strong> multiplying by the reciprocal counts the same six groups.</li></ol><p class="we-answer">Answer: 6</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Compute 2/5 + 1/2. Rename both with denominator 10: 2/5 = ___/10 and 1/2 = ___/10.</div>
          <div class="callout"><strong>Common mistake:</strong> Adding denominators. The denominator describes piece size; when pieces match, keep that denominator and add only the counts.</div>
        `,
        checks: [
          { prompt: "Compute 1/4 + 3/8.", choices: ["5/8", "4/12", "4/8", "1/2"], answer: 0, explain: "1/4 = 2/8, so 2/8 + 3/8 = 5/8." },
          { prompt: "Compute 5/6 ÷ 3/4.", choices: ["10/9", "5/8", "15/24", "9/10"], answer: 0, explain: "Multiply by the reciprocal: 5/6 × 4/3 = 20/18 = 10/9." }
        ]
      },
      {
        heading: "Decimals, percents, and percent change",
        body: `
          <p><strong>Prerequisite reminder:</strong> Decimal places represent tenths, hundredths, and thousandths. Percent means per hundred.</p>
          <p><strong>Plain-language meaning:</strong> Fractions, decimals, and percents are three names for the same amount. To change a percent to a decimal, divide by 100: move the decimal two places left.</p>
          <table><thead><tr><th>Fraction</th><th>Decimal</th><th>Percent</th></tr></thead><tbody><tr><td>1/2</td><td>0.50</td><td>50%</td></tr><tr><td>1/4</td><td>0.25</td><td>25%</td></tr><tr><td>3/4</td><td>0.75</td><td>75%</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — percent of an amount</div><p><em>Find 18% of 250.</em></p><ol class="we-steps"><li><strong>See “per hundred”:</strong> 18% = 18/100 = 0.18.</li><li><strong>Multiply:</strong> 0.18 &times; 250 = 45.</li><li><strong>See a benchmark:</strong> 20% of 250 is 50, so 18% being 45 is reasonable.</li></ol><p class="we-answer">Answer: 45</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — change compared with the start</div><p><em>A value rises from 80 to 100. Find percent increase.</em></p><ol class="we-steps"><li><strong>See the change:</strong> 100 - 80 = 20.</li><li><strong>Compare with the original:</strong> 20/80 = 0.25.</li><li><strong>Rename as percent:</strong> 0.25 = 25%.</li><li><strong>See a bar:</strong> the original 80 is four groups of 20, so the increase is one fourth of the start.</li></ol><p class="we-answer">Answer: 25% increase</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> A price rises from $50 to $60. Change = ___. Percent change = change/original = ___/50.</div>
          <div class="callout"><strong>Common mistake:</strong> Dividing percent change by the new value. The comparison base is the original value.</div>
        `,
        checks: [
          { prompt: "What is 35% of 80?", choices: ["28", "2.8", "35", "115"], answer: 0, explain: "35% = 0.35, and 0.35 × 80 = 28." },
          { prompt: "A population grows from 240 to 300. What is the percent increase?", choices: ["25%", "20%", "60%", "80%"], answer: 0, explain: "The change is 60; compare it with the original: 60/240 = 0.25 = 25%." }
        ]
      }
    ]
  },

  "num-03": {
    title: "Ratios, proportions & rates of change",
    domain: "number",
    intro: `<p><strong>Goal:</strong> Use tables before equations to understand proportional comparisons, mixtures, and average rate of change.</p>`,
    sections: [
      {
        heading: "Ratios and proportional scaling",
        body: `
          <p><strong>Prerequisite reminder:</strong> Equivalent fractions name the same amount; multiplying top and bottom by the same nonzero number preserves value.</p>
          <p><strong>Plain-language meaning:</strong> A ratio compares two quantities in a fixed order. A proportion says two ratios describe the same comparison.</p>
          <table><thead><tr><th>Sugar (cups)</th><th>Flour (cups)</th><th>Scale factor</th></tr></thead><tbody><tr><td>2</td><td>5</td><td>1</td></tr><tr><td>4</td><td>10</td><td>2</td></tr><tr><td>?</td><td>20</td><td>4</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — scale the table</div><p><em>Sugar:flour = 2:5. Find sugar for 20 cups of flour.</em></p><ol class="we-steps"><li><strong>See the scale:</strong> 5 becomes 20 by multiplying by 4.</li><li><strong>Keep the comparison:</strong> multiply 2 by the same 4.</li><li><strong>Compute:</strong> sugar = 8 cups.</li><li><strong>See the equation:</strong> 2/5 = s/20 gives 5s = 40, so s = 8.</li></ol><p class="we-answer">Answer: 8 cups</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — parts of a whole</div><p><em>Juice:soda = 3:5 in a 40-cup batch.</em></p><ol class="we-steps"><li><strong>See eight equal parts:</strong> 3 + 5 = 8 parts total.</li><li><strong>Find one part:</strong> 40/8 = 5 cups.</li><li><strong>Scale:</strong> juice = 3(5) = 15; soda = 5(5) = 25.</li><li><strong>Check:</strong> 15 + 25 = 40 and 15:25 simplifies to 3:5.</li></ol><p class="we-answer">Answer: 15 cups juice and 25 cups soda</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Red:blue = 2:7 with 27 objects total. Total parts = ___. One part = 27/___.</div>
          <div class="callout"><strong>Common mistake:</strong> Treating a whole total as one side of the ratio. Add ratio parts first when the given quantity is the combined total.</div>
        `,
        checks: [
          { prompt: "A recipe uses butter:sugar = 3:8. For 20 cups of sugar, how much butter?", choices: ["7.5 cups", "6 cups", "8 cups", "53.3 cups"], answer: 0, explain: "Sugar scales from 8 to 20 by 2.5, so butter is 3 × 2.5 = 7.5 cups." },
          { prompt: "Students are split boys:girls = 5:7. If there are 216 total, how many girls?", choices: ["126", "90", "108", "154"], answer: 0, explain: "There are 12 ratio parts; each is 216/12 = 18. Girls are 7 × 18 = 126." }
        ]
      },
      {
        heading: "Mixtures as conserved amounts",
        body: `
          <p><strong>Prerequisite reminder:</strong> Convert each percent to a decimal. <strong>Algebra prerequisite:</strong> distributing and solving a one-variable linear equation; review the Foundation Bootcamp if needed.</p>
          <p><strong>Plain-language meaning:</strong> Mixing changes concentration but does not create or destroy the ingredient. Ingredient amount from part 1 plus ingredient amount from part 2 equals ingredient amount in the final mixture.</p>
          <p><strong>Variable definitions:</strong> volume means total liquid; concentration means the fraction that is ingredient; ingredient amount = concentration &times; volume.</p>
          <table><thead><tr><th>Solution</th><th>Volume</th><th>Concentration</th><th>Ingredient amount</th></tr></thead><tbody><tr><td>Weak</td><td>x L</td><td>0.20</td><td>0.20x</td></tr><tr><td>Strong</td><td>10 L</td><td>0.50</td><td>5 L</td></tr><tr><td>Final</td><td>x + 10 L</td><td>0.30</td><td>0.30(x + 10)</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — table to equation</div><p><em>Mix x liters of 20% acid with 10 liters of 50% acid for 30% acid. Find x.</em></p><ol class="we-steps"><li><strong>See table amounts:</strong> weak acid = 0.20x; strong acid = 0.50(10) = 5.</li><li><strong>Conserve acid:</strong> 0.20x + 5 = 0.30(x + 10).</li><li><strong>Solve:</strong> 0.20x + 5 = 0.30x + 3, so 2 = 0.10x and x = 20.</li><li><strong>Check another way:</strong> acid is 4 + 5 = 9 liters in 30 total liters; 9/30 = 30%.</li></ol><p class="we-answer">Answer: 20 liters</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — pieces before algebra</div><p><em>Mix 4 L of 25% salt solution with 6 L of 50% solution.</em></p><ol class="we-steps"><li><strong>See ingredient pieces:</strong> salt amounts are 0.25(4) = 1 L and 0.50(6) = 3 L.</li><li><strong>Add conserved salt:</strong> 1 + 3 = 4 L salt.</li><li><strong>Add total volume:</strong> 4 + 6 = 10 L.</li><li><strong>Find concentration:</strong> 4/10 = 0.40 = 40%.</li></ol><p class="we-answer">Answer: 40%</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Mix 5 L of 10% with 5 L of 30%. Ingredient amounts are 0.10(5) = ___ and 0.30(5) = ___. Divide total ingredient by total volume.</div>
          <div class="callout"><strong>Common mistake:</strong> Averaging concentrations when volumes differ. Add actual ingredient amounts, then divide by total volume.</div>
        `,
        checks: [
          { prompt: "Mix 5 L of 10% solution with 5 L of 30% solution. What is the final concentration?", choices: ["20%", "40%", "15%", "25%"], answer: 0, explain: "Ingredient amounts are 0.5 L and 1.5 L, totaling 2 L in 10 L; 2/10 = 20%." },
          { prompt: "How many liters of 10% solution mix with 5 L of 40% solution to make 20% solution?", choices: ["10 L", "5 L", "15 L", "20 L"], answer: 0, explain: "0.10x + 0.40(5) = 0.20(x + 5). Thus 0.10x + 2 = 0.20x + 1, giving x = 10 L." }
        ]
      },
      {
        heading: "Average rate of change from a table",
        body: `
          <p><strong>Prerequisite reminder:</strong> <strong>Algebra prerequisite:</strong> subtract signed numbers and divide. A function is a rule pairing each allowed input with one output.</p>
          <p><strong>Plain-language meaning:</strong> Average rate of change tells how much the output changes, on average, for each one-unit increase in input.</p>
          <p><strong>Notation definitions:</strong> f names a function; x is an input; f(x) is its output. Thus f(2) = 5 means input 2 has output 5.</p>
          <table><thead><tr><th>x (input)</th><th>f(x) (output)</th></tr></thead><tbody><tr><td>2</td><td>5</td></tr><tr><td>6</td><td>21</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — table changes</div><p><em>Use the table to find average rate of change from x = 2 to x = 6.</em></p><ol class="we-steps"><li><strong>See output change:</strong> 21 - 5 = 16.</li><li><strong>See input change:</strong> 6 - 2 = 4.</li><li><strong>Compare changes:</strong> 16/4 = 4 output units per input unit.</li><li><strong>See the equation:</strong> [f(6) - f(2)]/(6 - 2) = 4.</li></ol><p class="we-answer">Answer: 4</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — word table</div><p><em>A tank contains 50 gallons at minute 1 and 26 gallons at minute 7.</em></p><ol class="we-steps"><li><strong>See the table change:</strong> amount changes by 26 - 50 = &minus;24 gallons.</li><li><strong>See elapsed time:</strong> 7 - 1 = 6 minutes.</li><li><strong>Divide:</strong> &minus;24/6 = &minus;4 gallons per minute.</li><li><strong>Interpret:</strong> the negative sign means the tank loses, rather than gains, 4 gallons each minute on average.</li></ol><p class="we-answer">Answer: &minus;4 gallons per minute</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> If g(3) = 10 and g(8) = 30, output change = ___ - ___ and input change = ___ - ___.</div>
          <div class="callout"><strong>Common mistake:</strong> Reversing only one subtraction. Use later minus earlier in both numerator and denominator.</div>
        `,
        checks: [
          { prompt: "A table gives f(1)=3 and f(5)=15. What is the average rate of change?", choices: ["3", "12", "4", "18"], answer: 0, explain: "Output change is 15 - 3 = 12; input change is 5 - 1 = 4; 12/4 = 3." },
          { prompt: "A temperature falls from 18°C at hour 2 to 6°C at hour 5. What is its average rate of change?", choices: ["-4°C per hour", "4°C per hour", "-12°C per hour", "8°C per hour"], answer: 0, explain: "Change in temperature is 6 - 18 = -12 over 5 - 2 = 3 hours, so -12/3 = -4°C per hour." }
        ]
      }
    ]
  },

  "num-04": {
    title: "Mathematical communication & logic",
    domain: "number",
    intro: `<p><strong>Goal:</strong> Explain reasoning in ordinary language, then attach formal logic names used on the NES.</p>`,
    sections: [
      {
        heading: "Patterns, proof, and counterexamples",
        body: `
          <p><strong>Prerequisite reminder:</strong> A claim using “all,” “every,” or “always” covers every possible case.</p>
          <p><strong>Plain-language meaning:</strong> Examples can suggest a pattern, but they cannot guarantee it forever. A proof explains why every case works; one counterexample breaks an “always” claim.</p>
          <table><thead><tr><th>Evidence</th><th>What it can do</th></tr></thead><tbody><tr><td>Several examples</td><td>Suggest a conjecture</td></tr><tr><td>Deduction from definitions</td><td>Prove a claim</td></tr><tr><td>One breaking case</td><td>Disprove a universal claim</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — examples versus proof</div><p><em>A student sees 2+2, 3+3, and 4+4 are even and claims n+n is always even.</em></p><ol class="we-steps"><li><strong>See the pattern:</strong> checking examples is <em>inductive reasoning</em>; it suggests the claim.</li><li><strong>See every case:</strong> n + n = 2n, which is divisible by 2 for every integer n.</li><li><strong>Name the second way:</strong> reasoning from the definition of even is <em>deductive reasoning</em>, so it proves the claim.</li></ol><p class="we-answer">Answer: The examples are inductive; 2n supplies a deductive proof.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — one breaking case</div><p><em>Claim: every prime number is odd.</em></p><ol class="we-steps"><li><strong>Look for a case meeting the condition:</strong> 2 is prime because its positive factors are 1 and 2.</li><li><strong>Check the conclusion:</strong> 2 is even, not odd.</li><li><strong>See the logic table:</strong> condition true, conclusion false; that row breaks the universal claim.</li><li><strong>Name it:</strong> 2 is a counterexample.</li></ol><p class="we-answer">Answer: False; 2 is a counterexample.</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Test “all multiples of 3 are odd.” Try the first few multiples: 3, ___, 9. Which one breaks the claim?</div>
          <div class="callout"><strong>Common mistake:</strong> Calling many successful examples a proof. They support a conjecture but do not cover untested cases.</div>
        `,
        checks: [
          { prompt: "A student checks five cases and states the pattern always continues. What kind of reasoning is this?", choices: ["Inductive reasoning", "Deductive proof", "A definition", "A counterexample"], answer: 0, explain: "Generalizing from observed examples is inductive reasoning." },
          { prompt: "Which number disproves 'all odd numbers greater than 1 are prime'?", choices: ["9", "3", "5", "7"], answer: 0, explain: "9 is odd and greater than 1 but equals 3 × 3, so it is not prime." }
        ]
      },
      {
        heading: "If-then statements in ordinary language",
        body: `
          <p><strong>Prerequisite reminder:</strong> In “If P, then Q,” P is the condition and Q is the promised result.</p>
          <p><strong>Plain-language meaning:</strong> “If it is a square, then it is a rectangle” says being a square guarantees being a rectangle. It does not say every rectangle is a square.</p>
          <table><thead><tr><th>Ordinary action</th><th>Formal name</th><th>Form</th></tr></thead><tbody><tr><td>Swap condition and result</td><td>Converse</td><td>If Q, then P</td></tr><tr><td>Negate both and swap</td><td>Contrapositive</td><td>If not Q, then not P</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — swap</div><p><em>Start with: If a shape is a square, then it is a rectangle.</em></p><ol class="we-steps"><li><strong>See the promise:</strong> square guarantees rectangle.</li><li><strong>Swap:</strong> “If a shape is a rectangle, then it is a square.” This is the converse.</li><li><strong>Test with a picture:</strong> a 3-by-5 rectangle is not a square, so the converse is false.</li></ol><p class="we-answer">Answer: The converse is false.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — rule out backward</div><p><em>Write the contrapositive of the same statement.</em></p><ol class="we-steps"><li><strong>Reason ordinarily:</strong> if a shape is not even a rectangle, it cannot possibly be a square.</li><li><strong>Negate and swap:</strong> “If a shape is not a rectangle, then it is not a square.”</li><li><strong>Name it:</strong> this is the contrapositive, and it always has the same truth value as the original.</li></ol><p class="we-answer">Answer: If not a rectangle, then not a square.</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Original: If a number is divisible by 6, then it is divisible by 3. Converse: If divisible by ___, then divisible by ___. Contrapositive: If not divisible by ___, then not divisible by ___.</div>
          <div class="callout"><strong>Common mistake:</strong> Assuming the converse is true. Swapping a true guarantee creates a different claim that needs its own test.</div>
        `,
        checks: [
          { prompt: "What is the converse of 'If a triangle is equilateral, then it is isosceles'?", choices: ["If a triangle is isosceles, then it is equilateral", "If it is not isosceles, then it is not equilateral", "If it is not equilateral, then it is not isosceles", "If it is equilateral, then it is not isosceles"], answer: 0, explain: "The converse swaps the condition and result without negating them." },
          { prompt: "What must follow from 'If a number is a multiple of 8, then it is a multiple of 4'?", choices: ["If it is not a multiple of 4, then it is not a multiple of 8", "If it is a multiple of 4, then it is a multiple of 8", "If it is not a multiple of 8, then it is not a multiple of 4", "Every multiple of 4 equals 8"], answer: 0, explain: "Negating and swapping gives the logically equivalent contrapositive." }
        ]
      },
      {
        heading: "Valid and invalid argument moves",
        body: `
          <p><strong>Prerequisite reminder:</strong> An argument combines a rule with facts to reach a conclusion.</p>
          <p><strong>Plain-language meaning:</strong> If a rule promises Q whenever P happens, seeing P lets you conclude Q. Seeing Q does not prove P caused it. If Q fails, P could not have happened.</p>
          <table><thead><tr><th>Rule and fact</th><th>Conclusion</th><th>Formal name</th></tr></thead><tbody><tr><td>P→Q; P</td><td>Q</td><td>Modus ponens</td></tr><tr><td>P→Q; not Q</td><td>not P</td><td>Modus tollens</td></tr><tr><td>P→Q; Q</td><td>P</td><td>Affirming the consequent: invalid</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — use the promised condition</div><p><em>If a figure is a square, it has four right angles. This figure is a square.</em></p><ol class="we-steps"><li><strong>Reason ordinarily:</strong> the condition happened, so the promised result follows.</li><li><strong>Use the table:</strong> P→Q and P, therefore Q.</li><li><strong>Name it:</strong> modus ponens.</li></ol><p class="we-answer">Answer: The figure has four right angles.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — rule out the condition</div><p><em>If a number is divisible by 6, it is even. The number is not even.</em></p><ol class="we-steps"><li><strong>Reason ordinarily:</strong> a number failing the required result cannot have met the condition.</li><li><strong>Use the table:</strong> P→Q and not Q, therefore not P.</li><li><strong>Name it:</strong> modus tollens.</li></ol><p class="we-answer">Answer: The number is not divisible by 6.</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> If it rains, the sidewalk is wet. It rains. Match P→Q plus P to the table and conclude ___.</div>
          <div class="callout"><strong>Common mistake:</strong> Concluding “it rained” merely because a sidewalk is wet. Sprinklers provide another possible cause; this is affirming the consequent.</div>
        `,
        checks: [
          { prompt: "If it is raining, the sidewalk is wet. It is raining. What follows?", choices: ["The sidewalk is wet", "It is not raining", "The sidewalk is dry", "Nothing"], answer: 0, explain: "The condition is true, so the promised result follows; this is modus ponens." },
          { prompt: "If a number is divisible by 10, it ends in 0. A number does not end in 0. What follows?", choices: ["It is not divisible by 10", "It is divisible by 10", "It is odd", "It is prime"], answer: 0, explain: "The required result fails, so the condition could not hold; this is modus tollens." }
        ]
      }
    ]
  },

  "num-05": {
    title: "Number theory: primes, GCF, LCM",
    domain: "number",
    intro: `<p><strong>Goal:</strong> Understand factors as building blocks, then use them to solve grouping and repeating-event problems.</p>`,
    sections: [
      {
        heading: "Divisibility and prime factorization",
        body: `
          <p><strong>Prerequisite reminder:</strong> A factor divides a whole number with no remainder. A prime number greater than 1 has exactly two positive factors: 1 and itself.</p>
          <p><strong>Plain-language meaning:</strong> Prime factorization breaks a number into prime building blocks. Exponent notation counts repeated factors: 2³ means 2 &times; 2 &times; 2, not 2 &times; 3.</p>
          <p><strong>Factor-tree representation:</strong> 72 = 8 &times; 9 = (2 &times; 2 &times; 2)(3 &times; 3) = 2³ &middot; 3².</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — factor tree</div><p><em>Prime-factor 360.</em></p><ol class="we-steps"><li><strong>See large pieces:</strong> 360 = 36 &times; 10.</li><li><strong>Break to primes:</strong> 36 = 2 &times; 2 &times; 3 &times; 3 and 10 = 2 &times; 5.</li><li><strong>Count repeated blocks:</strong> three 2s give 2³, two 3s give 3², and one 5 remains.</li><li><strong>Check by multiplying:</strong> 8 &times; 9 &times; 5 = 360.</li></ol><p class="we-answer">Answer: 2³ &middot; 3² &middot; 5</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — build from exponents</div><p><em>Evaluate 2² &middot; 3 &middot; 5² and decide whether 6 divides it.</em></p><ol class="we-steps"><li><strong>Expand:</strong> (2 &times; 2) &times; 3 &times; (5 &times; 5).</li><li><strong>Multiply:</strong> 4 &times; 3 &times; 25 = 300.</li><li><strong>See factor pieces:</strong> 6 needs one 2 and one 3; both appear in the factor set.</li><li><strong>Confirm:</strong> 300/6 = 50.</li></ol><p class="we-answer">Answer: 300; yes, it is divisible by 6.</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Factor 84 = 12 &times; 7 = (2 &times; 2 &times; 3) &times; 7 = 2<sup>__</sup> &middot; 3 &middot; 7.</div>
          <div class="callout"><strong>Common mistake:</strong> Stopping with composite factors such as 36 or reading 3² as 3 &times; 2.</div>
        `,
        checks: [
          { prompt: "What does 5³ mean?", choices: ["5 × 5 × 5", "5 × 3", "3 × 3 × 3 × 3 × 3", "5 + 5 + 5"], answer: 0, explain: "The exponent counts repeated copies of the base: three factors of 5." },
          { prompt: "What is the prime factorization of 252?", choices: ["2²·3²·7", "2³·3²", "2²·3·7²", "2·3³·7"], answer: 0, explain: "252 = 4 × 63 = 2² × 9 × 7 = 2²·3²·7." }
        ]
      },
      {
        heading: "GCF and LCM from factor lists",
        body: `
          <p><strong>Prerequisite reminder:</strong> Factors divide a number; multiples are results of multiplying a number by 1, 2, 3, and so on.</p>
          <p><strong>Plain-language meaning:</strong> The greatest common factor (GCF) is the largest building block shared by both numbers. The least common multiple (LCM) is the first positive landing place in both multiples lists.</p>
          <table><thead><tr><th>Number</th><th>Factors</th><th>First multiples</th></tr></thead><tbody><tr><td>12</td><td>{1,2,3,4,6,12}</td><td>{12,24,36,48,...}</td></tr><tr><td>18</td><td>{1,2,3,6,9,18}</td><td>{18,36,54,...}</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — lists first</div><p><em>Find GCF and LCM of 12 and 18.</em></p><ol class="we-steps"><li><strong>See shared factor set:</strong> {1,2,3,6}; the greatest is 6.</li><li><strong>See multiples timelines:</strong> 12,24,<u>36</u> and 18,<u>36</u>; the first meeting is 36.</li><li><strong>Connect to primes:</strong> 12 = 2²·3 and 18 = 2·3². Shared factors use the smaller count: 2¹·3¹ = 6. A common multiple needs enough for both, so use larger counts: 2²·3² = 36.</li></ol><p class="we-answer">Answer: GCF = 6; LCM = 36</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — why min and max work</div><p><em>Find GCF and LCM of 24 = 2³·3 and 40 = 2³·5.</em></p><ol class="we-steps"><li><strong>See factor bags:</strong> both bags contain three 2s; only 24 has a 3 and only 40 has a 5.</li><li><strong>GCF takes the intersection:</strong> keep only factors present in both, using the minimum count: 2³ = 8.</li><li><strong>LCM takes the union with enough copies:</strong> use the maximum count of every prime: 2³·3·5 = 120.</li><li><strong>Check:</strong> 120/24 = 5 and 120/40 = 3.</li></ol><p class="we-answer">Answer: GCF = 8; LCM = 120</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> 20 = 2²·5 and 30 = 2·3·5. For GCF, use min counts: 2<sup>__</sup>·5<sup>__</sup>. For LCM, include 2², 3, and 5.</div>
          <div class="callout"><strong>Common mistake:</strong> Memorizing “min/max” without meaning. Minimum counts form the shared intersection; maximum counts guarantee the result contains every original factor.</div>
        `,
        checks: [
          { prompt: "Using factor lists, what is GCF(12,18)?", choices: ["6", "36", "3", "2"], answer: 0, explain: "The common factors are 1, 2, 3, and 6; the greatest is 6." },
          { prompt: "Given a=2²·3·5² and b=2·3³·5, find GCF and LCM.", choices: ["GCF=2·3·5=30; LCM=2²·3³·5²=2700", "GCF=2700; LCM=30", "GCF=6; LCM=2700", "GCF=30; LCM=90"], answer: 0, explain: "GCF uses the minimum exponent of each shared prime; LCM uses the maximum exponent of every prime present." }
        ]
      },
      {
        heading: "Choose GCF or LCM in context",
        body: `
          <p><strong>Prerequisite reminder:</strong> GCF describes shared group size or number of equal groups; LCM describes when repeating cycles first meet.</p>
          <p><strong>Plain-language meaning:</strong> Ask whether the situation is <em>splitting existing objects evenly</em> or <em>waiting for repeating schedules to coincide</em>.</p>
          <table><thead><tr><th>Situation</th><th>Representation</th><th>Tool</th></tr></thead><tbody><tr><td>Identical bags, none left</td><td>Shared factor sets</td><td>GCF</td></tr><tr><td>Events repeat together</td><td>Multiples timeline</td><td>LCM</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — equal bags</div><p><em>Make the greatest number of identical bags from 48 chocolates and 72 stickers.</em></p><ol class="we-steps"><li><strong>See splitting:</strong> the number of bags must divide both 48 and 72.</li><li><strong>Use shared factors:</strong> GCF(48,72) = 24.</li><li><strong>See each bag:</strong> 48/24 = 2 chocolates and 72/24 = 3 stickers.</li><li><strong>Check:</strong> all objects are used with no remainder.</li></ol><p class="we-answer">Answer: 24 bags</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — repeating timeline</div><p><em>Buses leave every 18 and 24 minutes. When do they next leave together?</em></p><ol class="we-steps"><li><strong>See timelines:</strong> first bus: 18,36,54,72; second: 24,48,72.</li><li><strong>Find the first shared time:</strong> 72 minutes.</li><li><strong>See prime factors:</strong> 18=2·3² and 24=2³·3, so LCM=2³·3²=72.</li></ol><p class="we-answer">Answer: 72 minutes</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Lights flash every 6 and 8 seconds. Write timelines 6,12,18,___ and 8,16,___ to find the first meeting.</div>
          <div class="callout"><strong>Common mistake:</strong> Choosing by the words “greatest” or “least” alone. Decide from the physical action: split or repeat.</div>
        `,
        checks: [
          { prompt: "Joggers complete loops every 15 and 20 minutes. When are they next together at the start?", choices: ["60 minutes", "35 minutes", "300 minutes", "5 minutes"], answer: 0, explain: "This is a repeating timeline, so use LCM(15,20)=60." },
          { prompt: "Make the greatest number of identical bags from 84 pencils and 126 erasers, with none left. How many bags?", choices: ["42", "21", "252", "6"], answer: 0, explain: "This is equal splitting, so use GCF(84,126)=42." }
        ]
      }
    ]
  },

  "num-06": {
    title: "Real number structure & complex numbers",
    domain: "number",
    intro: `<p><strong>Goal:</strong> See number systems as nested extensions, then understand why complex numbers and their operations work.</p>`,
    sections: [
      {
        heading: "Nested number systems",
        body: `
          <p><strong>Prerequisite reminder:</strong> A fraction p/q has integer numerator p and nonzero integer denominator q.</p>
          <p><strong>Plain-language meaning:</strong> Each larger number system keeps earlier numbers and adds new ones needed for more equations. Natural numbers count; integers add negatives; rationals add fractions; reals add irrational numbers, whose decimal expansions are nonterminating and nonrepeating; complex numbers add solutions involving √&minus;1.</p>
          <p><strong>Nested-set representation:</strong> natural ⊂ integer ⊂ rational ⊂ real ⊂ complex. Irrational numbers such as √2 are real but not rational.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — smallest home</div><p><em>Classify &minus;5/3.</em></p><ol class="we-steps"><li><strong>See the nesting:</strong> it is not natural or integer because it is not a whole number.</li><li><strong>See its form:</strong> it is a ratio of integers, so its smallest listed home is rational.</li><li><strong>Move outward:</strong> every rational is also real and complex.</li></ol><p class="we-answer">Answer: rational, real, and complex</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — decimal behavior</div><p><em>Classify 0.454545... .</em></p><ol class="we-steps"><li><strong>See the repeating block:</strong> “45” repeats forever.</li><li><strong>See a pieces representation:</strong> let x=0.4545...; then 100x=45.4545.... Subtract to get 99x=45.</li><li><strong>Convert:</strong> x=45/99=5/11, a ratio of integers.</li></ol><p class="we-answer">Answer: rational (therefore also real and complex)</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Place &minus;4 in the smallest set: natural, integer, rational, real, complex. Since it is a negative whole number, start with ___.</div>
          <div class="callout"><strong>Common mistake:</strong> Calling every infinite decimal irrational. Repeating infinite decimals are rational.</div>
        `,
        checks: [
          { prompt: "What is the smallest listed system containing -7?", choices: ["Integers", "Natural numbers", "Irrational numbers", "Complex but not real numbers"], answer: 0, explain: "-7 is a negative whole number, so it is an integer." },
          { prompt: "Which number is irrational?", choices: ["√7", "√16", "9/4", "0.75"], answer: 0, explain: "√7 is a nonterminating, nonrepeating real number; the others are rational." }
        ]
      },
      {
        heading: "The meaning and powers of i",
        body: `
          <p><strong>Prerequisite reminder:</strong> Squaring means multiplying a number by itself. No real number has square &minus;1 because positive×positive and negative×negative are positive.</p>
          <p><strong>Plain-language meaning:</strong> Mathematicians define a new number i by i² = &minus;1. A complex number a+bi combines a real part a and an imaginary part bi.</p>
          <table><thead><tr><th>Power</th><th>Value</th><th>Reason</th></tr></thead><tbody><tr><td>i¹</td><td>i</td><td>definition</td></tr><tr><td>i²</td><td>&minus;1</td><td>definition</td></tr><tr><td>i³</td><td>&minus;i</td><td>i²·i</td></tr><tr><td>i⁴</td><td>1</td><td>i²·i²</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — build the cycle</div><p><em>Simplify i⁷.</em></p><ol class="we-steps"><li><strong>See repeated groups:</strong> i⁷ = i⁴·i³.</li><li><strong>Use known pieces:</strong> i⁴=1 and i³=&minus;i.</li><li><strong>Multiply:</strong> 1(&minus;i)=&minus;i.</li><li><strong>Second view:</strong> 7 leaves remainder 3 when divided by 4, so use i³.</li></ol><p class="we-answer">Answer: &minus;i</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — a large exponent</div><p><em>Simplify i⁹⁷.</em></p><ol class="we-steps"><li><strong>See complete cycles:</strong> 97 = 4(24)+1.</li><li><strong>Separate:</strong> i⁹⁷ = (i⁴)²⁴·i.</li><li><strong>Simplify:</strong> 1²⁴·i = i.</li><li><strong>Use the table:</strong> remainder 1 points to the first row.</li></ol><p class="we-answer">Answer: i</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> For i¹⁴, 14 ÷ 4 has remainder ___. Use the matching row of the cycle table.</div>
          <div class="callout"><strong>Common mistake:</strong> Replacing i² with +1. Its defining property is i²=&minus;1.</div>
        `,
        checks: [
          { prompt: "What is i²?", choices: ["-1", "1", "i", "-i"], answer: 0, explain: "i is defined so that i² = -1." },
          { prompt: "What is i²⁰²?", choices: ["-1", "1", "i", "-i"], answer: 0, explain: "202 leaves remainder 2 when divided by 4, so i²⁰² has the same value as i², which is -1." }
        ]
      },
      {
        heading: "Complex arithmetic and conjugates",
        body: `
          <p><strong>Prerequisite reminder:</strong> <strong>Algebra prerequisite:</strong> distribute multiplication across parentheses and combine like terms.</p>
          <p><strong>Plain-language meaning:</strong> In a+bi, real parts combine with real parts and imaginary parts with imaginary parts. The conjugate keeps the real part and reverses the imaginary sign: the conjugate of a+bi is a&minus;bi. Their imaginary pieces cancel when multiplied.</p>
          <table><thead><tr><th>Number</th><th>Real part</th><th>Imaginary coefficient</th><th>Conjugate</th></tr></thead><tbody><tr><td>3+2i</td><td>3</td><td>2</td><td>3&minus;2i</td></tr><tr><td>4&minus;i</td><td>4</td><td>&minus;1</td><td>4+i</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — multiply pieces</div><p><em>Compute (2+3i)(1&minus;2i).</em></p><ol class="we-steps"><li><strong>See an area-style four-part product:</strong> 2(1)+2(&minus;2i)+3i(1)+3i(&minus;2i).</li><li><strong>Simplify pieces:</strong> 2&minus;4i+3i&minus;6i².</li><li><strong>Use i²=&minus;1:</strong> &minus;6i²=+6.</li><li><strong>Group columns:</strong> real 2+6=8; imaginary &minus;4i+3i=&minus;i.</li></ol><p class="we-answer">Answer: 8&minus;i</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — conjugate cancellation</div><p><em>Simplify (3&minus;i)/(1+2i).</em></p><ol class="we-steps"><li><strong>See the obstacle:</strong> the denominator contains i; multiply top and bottom by its conjugate 1&minus;2i.</li><li><strong>Numerator:</strong> (3&minus;i)(1&minus;2i)=3&minus;6i&minus;i+2i²=1&minus;7i.</li><li><strong>Denominator:</strong> (1+2i)(1&minus;2i)=1&minus;4i²=5; cross imaginary terms cancel.</li><li><strong>Divide both parts:</strong> 1/5 &minus; (7/5)i.</li></ol><p class="we-answer">Answer: 1/5 &minus; (7/5)i</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> Multiply (1+i)(2+i). Four products are 2, i, 2i, and i²=___. Combine real and imaginary parts.</div>
          <div class="callout"><strong>Common mistake:</strong> Changing only one sign inconsistently or forgetting to divide both numerator parts after rationalizing.</div>
        `,
        checks: [
          { prompt: "What is the conjugate of 5+3i?", choices: ["5-3i", "-5+3i", "-5-3i", "3+5i"], answer: 0, explain: "A conjugate keeps the real part and reverses the sign of the imaginary part." },
          { prompt: "Compute (3+2i)(4-i).", choices: ["14+5i", "10+5i", "14-5i", "10-5i"], answer: 0, explain: "12-3i+8i-2i² = 12+5i+2 = 14+5i." }
        ]
      },
      {
        heading: "Bridge to complex quadratic roots",
        body: `
          <p><strong>Prerequisite reminder:</strong> <strong>Requires alg-04:</strong> use this section after learning the quadratic formula. Bridge: in x=[&minus;b±√(b²&minus;4ac)]/(2a), the expression b²&minus;4ac is the discriminant.</p>
          <p><strong>Plain-language meaning:</strong> A negative discriminant asks for the square root of a negative number. Write √(&minus;k)=i√k, then continue the quadratic formula. Real-coefficient quadratics produce nonreal roots in conjugate pairs.</p>
          <table><thead><tr><th>Discriminant</th><th>Root type</th></tr></thead><tbody><tr><td>positive</td><td>two real roots</td></tr><tr><td>zero</td><td>one repeated real root</td></tr><tr><td>negative</td><td>two complex conjugate roots</td></tr></tbody></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — formula bridge</div><p><em>Solve x²+4x+13=0.</em></p><ol class="we-steps"><li><strong>Identify variables:</strong> a=1, b=4, c=13.</li><li><strong>See the discriminant row:</strong> b²&minus;4ac=16&minus;52=&minus;36, so expect a conjugate pair.</li><li><strong>Translate the square root:</strong> √(&minus;36)=6i because (6i)²=36(&minus;1)=&minus;36.</li><li><strong>Finish the formula:</strong> x=(&minus;4±6i)/2=&minus;2±3i.</li></ol><p class="we-answer">Answer: &minus;2+3i and &minus;2&minus;3i</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — verify by conjugate factors</div><p><em>Show that roots 1±2i match x²&minus;2x+5=0.</em></p><ol class="we-steps"><li><strong>See conjugate factors:</strong> [x&minus;(1+2i)][x&minus;(1&minus;2i)].</li><li><strong>Regroup:</strong> [(x&minus;1)&minus;2i][(x&minus;1)+2i].</li><li><strong>Use conjugate cancellation:</strong> (x&minus;1)²&minus;(2i)²=(x&minus;1)²+4.</li><li><strong>Expand:</strong> x²&minus;2x+1+4=x²&minus;2x+5.</li></ol><p class="we-answer">Answer: The conjugate pair produces x²&minus;2x+5=0.</p></div>
          <div class="guided-practice"><strong>Guided practice:</strong> For x²+2x+5=0, identify a=___, b=___, c=___. Then compute b²&minus;4ac = 4&minus;20 = ___.</div>
          <div class="callout"><strong>Common mistake:</strong> Dividing only the real term by 2a. The entire numerator, including the imaginary term, is divided by 2a.</div>
        `,
        checks: [
          { prompt: "If a quadratic has a negative discriminant, what kind of roots does it have?", choices: ["Two complex conjugate roots", "Two distinct rational roots", "One repeated real root", "No roots in the complex system"], answer: 0, explain: "A negative discriminant introduces i and produces a conjugate pair for real coefficients." },
          { prompt: "Solve x²-2x+5=0.", choices: ["x=1+2i or x=1-2i", "x=2+4i or x=2-4i", "x=1+4i or x=1-4i", "x=-1+2i or x=-1-2i"], answer: 0, explain: "The discriminant is 4-20=-16, so x=(2±4i)/2=1±2i." }
        ]
      }
    ]
  }
});
