/* Foundations for adult learners preparing for NES Mathematics (NT304). */
(function () {
  "use strict";

  function makeSection(config) {
    function steps(items) {
      return items.map(function (item) {
        return "<li>" + item + "</li>";
      }).join("");
    }

    return {
      heading: config.heading,
      body: `
        <p><strong>Plain-language meaning:</strong> ${config.meaning}</p>
        <div class="concrete-model"><strong>See it concretely:</strong> ${config.concrete}</div>
        <div class="formula">${config.symbols}</div>
        <div class="worked-example">
          <div class="we-label">Worked Example 1</div>
          <p><em>${config.example1.prompt}</em></p>
          <ol class="we-steps">${steps(config.example1.steps)}</ol>
          <p class="we-answer">Answer: ${config.example1.answer}</p>
        </div>
        <div class="worked-example">
          <div class="we-label">Worked Example 2</div>
          <p><em>${config.example2.prompt}</em></p>
          <ol class="we-steps">${steps(config.example2.steps)}</ol>
          <p class="we-answer">Answer: ${config.example2.answer}</p>
        </div>
        <div class="callout">
          <strong>Guided practice:</strong> ${config.guided.prompt}<br>
          <strong>Hint:</strong> ${config.guided.hint}
          <ol class="we-steps">${steps(config.guided.steps)}</ol>
        </div>
        <div class="callout"><strong>Common mistake:</strong> ${config.mistake}</div>
      `,
      checks: config.checks
    };
  }

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "fdn-01": {
      title: "Whole numbers, place value, and the four operations",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Rebuild reliable whole-number sense. You will read place value, choose among addition, subtraction, multiplication, and division, and check whether an answer is reasonable.</p>`,
      sections: [
        makeSection({
          heading: "Place value: a digit's position gives its value",
          meaning: "A digit is a written symbol from 0 through 9. Its place tells how many ones, tens, hundreds, and so on it represents.",
          concrete: `<table><tr><th>Thousands</th><th>Hundreds</th><th>Tens</th><th>Ones</th></tr><tr><td>4</td><td>7</td><td>2</td><td>6</td></tr></table><p>Think of 4 large groups of 1,000, 7 groups of 100, 2 groups of 10, and 6 single pieces.</p>`,
          symbols: `4,726 = 4 &times; 1,000 + 7 &times; 100 + 2 &times; 10 + 6 &times; 1`,
          example1: {
            prompt: "Write 5,083 in expanded form.",
            steps: [
              "<strong>Locate each digit:</strong> 5 is in the thousands place, 0 is in the hundreds place, 8 is in the tens place, and 3 is in the ones place.",
              "<strong>Give each digit its value:</strong> 5 &times; 1,000 = 5,000; 0 &times; 100 = 0; 8 &times; 10 = 80; 3 &times; 1 = 3.",
              "<strong>Combine the values:</strong> 5,000 + 0 + 80 + 3 = 5,083. The zero records that there are no hundreds."
            ],
            answer: "5,000 + 80 + 3"
          },
          example2: {
            prompt: "Which is greater, 39,812 or 39,781?",
            steps: [
              "<strong>Compare from the left:</strong> both have 3 ten-thousands and 9 thousands, so those places tie.",
              "<strong>Move one place right:</strong> the hundreds digits are 8 and 7.",
              "<strong>Decide at the first difference:</strong> 8 hundreds is greater than 7 hundreds, so 39,812 &gt; 39,781. Later digits cannot reverse that difference."
            ],
            answer: "39,812 is greater"
          },
          guided: {
            prompt: "Write 62,407 in expanded form.",
            hint: "Name the value of each nonzero digit; the zero keeps the tens place empty.",
            steps: ["6 &times; 10,000 = 60,000", "2 &times; 1,000 = 2,000", "4 &times; 100 = ___; 7 &times; 1 = ___", "Expanded form: 60,000 + 2,000 + ___ + ___"]
          },
          mistake: "Reading 5,083 as 5,800 because the zero is ignored. A zero holds a place even though it adds no value.",
          checks: [
            {prompt: "What is the value of the 6 in 46,215?", choices: ["6,000", "600", "60", "6"], answer: 0, explain: "The 6 is in the thousands place, so its value is 6 &times; 1,000 = 6,000."},
            {prompt: "A town has 70,504 people. Which expanded form matches that number?", choices: ["70,000 + 500 + 4", "7,000 + 500 + 4", "70,000 + 50 + 4", "70,000 + 5,000 + 4"], answer: 0, explain: "The 7 means 70,000, the 5 means 500, and the 4 means 4; the zero digits hold the thousands and tens places."}
          ]
        }),
        makeSection({
          heading: "The four operations describe four actions",
          meaning: "Addition joins amounts, subtraction finds what remains or the difference, multiplication makes equal groups, and division shares into equal groups or counts how many groups fit.",
          concrete: `<p><strong>Add:</strong> ●●● + ●● = ●●●●●</p><p><strong>Multiply:</strong> 3 groups of 4: [●●●●] [●●●●] [●●●●]</p><p><strong>Divide:</strong> 12 pieces shared among 3 boxes gives [●●●●] [●●●●] [●●●●].</p>`,
          symbols: `join: a + b &nbsp; | &nbsp; difference: a &minus; b &nbsp; | &nbsp; equal groups: a &times; b &nbsp; | &nbsp; share: a &divide; b`,
          example1: {
            prompt: "A library has 248 adult books and 176 children's books on a cart. How many books are there?",
            steps: [
              "<strong>Choose addition:</strong> the two amounts are being joined, so compute 248 + 176.",
              "<strong>Ones:</strong> 8 + 6 = 14. Write 4 ones and regroup 10 ones as 1 ten.",
              "<strong>Tens:</strong> 4 tens + 7 tens + 1 regrouped ten = 12 tens. Write 2 tens and regroup 10 tens as 1 hundred.",
              "<strong>Hundreds:</strong> 2 + 1 + 1 = 4 hundreds. Therefore 248 + 176 = 424."
            ],
            answer: "424 books"
          },
          example2: {
            prompt: "Thirty-six chairs are arranged in 4 equal rows. How many chairs are in each row?",
            steps: [
              "<strong>Choose division:</strong> 36 objects are being shared equally among 4 rows, so compute 36 &divide; 4.",
              "<strong>Use equal groups:</strong> ask what number multiplied by 4 gives 36.",
              "<strong>Check the group size:</strong> 4 &times; 9 = 36, so each of the 4 rows has 9 chairs."
            ],
            answer: "9 chairs per row"
          },
          guided: {
            prompt: "Seven boxes hold 24 pencils each. How many pencils are there?",
            hint: "Equal groups signal multiplication.",
            steps: ["Number of groups &times; amount in each group = total", "7 &times; 24 = 7 &times; (20 + 4)", "= 140 + ___", "= ___ pencils"]
          },
          mistake: "Choosing an operation from the size of the numbers. Choose from the action in the situation: joining, comparing, making equal groups, or sharing.",
          checks: [
            {prompt: "A store had 95 notebooks and sold 28. Which calculation finds how many remain?", choices: ["95 &minus; 28", "95 + 28", "95 &times; 28", "95 &divide; 28"], answer: 0, explain: "Sold notebooks are removed from the starting amount, so subtraction models what remains."},
            {prompt: "A coach shares 84 cones equally among 6 teams. How many cones does each team receive?", choices: ["14", "78", "90", "504"], answer: 0, explain: "Sharing 84 into 6 equal groups means 84 &divide; 6 = 14. Check: 6 &times; 14 = 84."}
          ]
        }),
        makeSection({
          heading: "Multi-step calculations and reasonableness",
          meaning: "A multi-step situation has more than one action. Work in the order the story happens, keep units attached, and estimate to catch arithmetic slips.",
          concrete: `<p>Textual diagram: <strong>start 125</strong> &rarr; add 48 &rarr; <strong>173</strong> &rarr; remove 39 &rarr; <strong>134</strong>.</p><p>Each arrow is one operation.</p>`,
          symbols: `exact calculation + nearby-number estimate = a result you can trust`,
          example1: {
            prompt: "A theater has 18 rows with 24 seats each. If 37 seats are empty, how many are occupied?",
            steps: [
              "<strong>Find all seats first:</strong> 18 &times; 24 = 18 &times; (20 + 4) because multiplication counts equal rows.",
              "<strong>Distribute:</strong> 18 &times; 20 = 360 and 18 &times; 4 = 72, so total seats = 360 + 72 = 432.",
              "<strong>Remove empty seats:</strong> 432 &minus; 37 = 395 occupied seats.",
              "<strong>Check:</strong> 20 rows of about 20 seats is about 400; 395 is reasonable."
            ],
            answer: "395 occupied seats"
          },
          example2: {
            prompt: "Three friends each contribute $28 toward a $100 purchase. How much more is needed?",
            steps: [
              "<strong>Find the amount contributed:</strong> 3 equal contributions of $28 means 3 &times; 28 = 84.",
              "<strong>Find the gap:</strong> the purchase costs $100, so compute 100 &minus; 84 = 16.",
              "<strong>Check another way:</strong> 84 + 16 = 100, so the gap has been filled exactly."
            ],
            answer: "$16 more"
          },
          guided: {
            prompt: "Nine packs contain 15 cards each. You give away 22 cards. How many remain?",
            hint: "Find the starting total before removing cards.",
            steps: ["Starting total: 9 &times; 15 = 9 &times; (10 + 5)", "= 90 + 45 = ___", "Remaining: ___ &minus; 22 = ___"]
          },
          mistake: "Rounding during the exact calculation. Estimate separately, then return to the original numbers for the exact answer.",
          checks: [
            {prompt: "Five buses carry 42 students each. How many students ride the buses?", choices: ["210", "47", "205", "8 remainder 2"], answer: 0, explain: "Five equal groups of 42 means 5 &times; 42 = 210."},
            {prompt: "Eight trays hold 36 rolls each. After 49 rolls are served, how many remain?", choices: ["239", "288", "337", "175"], answer: 0, explain: "First find 8 &times; 36 = 288 rolls. Then remove 49: 288 &minus; 49 = 239."}
          ]
        })
      ]
    },

    "fdn-02": {
      title: "Signed numbers and order of operations",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Make positive and negative numbers meaningful, then calculate with them and apply a dependable order when several operations appear.</p>`,
      sections: [
        makeSection({
          heading: "Signed numbers on a number line",
          meaning: "A positive number is above zero and a negative number is below zero. The sign tells direction from zero. Distance from zero is called absolute value.",
          concrete: `<p>&minus;5 &nbsp; &minus;4 &nbsp; &minus;3 &nbsp; &minus;2 &nbsp; &minus;1 &nbsp; <strong>0</strong> &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5</p><p>Numbers farther right are greater. Both &minus;4 and 4 are 4 spaces from zero.</p>`,
          symbols: `|&minus;4| = 4 &nbsp; because absolute value records distance, not direction`,
          example1: {
            prompt: "Compare &minus;3 and &minus;8.",
            steps: [
              "<strong>Place both on the line:</strong> &minus;8 is eight spaces left of zero; &minus;3 is three spaces left.",
              "<strong>Use position:</strong> &minus;3 lies to the right of &minus;8.",
              "<strong>State the comparison:</strong> a number to the right is greater, so &minus;3 &gt; &minus;8."
            ],
            answer: "&minus;3 &gt; &minus;8"
          },
          example2: {
            prompt: "A temperature is &minus;6&deg;C. What is its distance from zero?",
            steps: [
              "<strong>Identify the request:</strong> distance from zero means absolute value.",
              "<strong>Count spaces:</strong> moving from &minus;6 to 0 takes 6 unit steps.",
              "<strong>Write it symbolically:</strong> |&minus;6| = 6. The answer is nonnegative because distance has no left/right direction."
            ],
            answer: "6 degrees"
          },
          guided: {
            prompt: "Order &minus;7, 2, and &minus;1 from least to greatest.",
            hint: "Read a number line from left to right.",
            steps: ["The farthest left is ___.", "Next comes &minus;1.", "The farthest right is ___.", "Order: ___, &minus;1, ___"]
          },
          mistake: "Thinking &minus;8 is greater than &minus;3 because 8 is a larger digit. On the number line, &minus;8 is farther left, so it is less.",
          checks: [
            {prompt: "Which number is greatest?", choices: ["&minus;2", "&minus;5", "&minus;9", "&minus;12"], answer: 0, explain: "&minus;2 is farthest right and closest to zero, so it is the greatest."},
            {prompt: "A diver is at &minus;14 feet and another is at &minus;9 feet relative to sea level. Who is higher?", choices: ["The diver at &minus;9 feet", "The diver at &minus;14 feet", "They are equally high", "There is not enough information"], answer: 0, explain: "&minus;9 is to the right of &minus;14 on a number line, so &minus;9 feet is the higher position."}
          ]
        }),
        makeSection({
          heading: "Adding, subtracting, multiplying, and dividing signed numbers",
          meaning: "Adding moves on a number line. Subtracting means adding the opposite. For multiplication and division, matching signs give a positive result and different signs give a negative result.",
          concrete: `<p>For &minus;2 + 5, start at &minus;2 and move 5 spaces right: &minus;2 &rarr; &minus;1 &rarr; 0 &rarr; 1 &rarr; 2 &rarr; 3.</p><p>Opposite-color pieces can represent +1 and &minus;1; one of each makes zero.</p>`,
          symbols: `a &minus; b = a + (&minus;b) &nbsp; | &nbsp; (&minus;)(+) = (&minus;) &nbsp; | &nbsp; (&minus;)(&minus;) = (+)`,
          example1: {
            prompt: "Compute &minus;7 + 12.",
            steps: [
              "<strong>Start at &minus;7:</strong> the first number gives the starting point.",
              "<strong>Add 12:</strong> positive 12 means move 12 spaces right.",
              "<strong>Reach 5:</strong> seven moves reach zero and five more reach 5, so &minus;7 + 12 = 5."
            ],
            answer: "5"
          },
          example2: {
            prompt: "Compute 6 &minus; (&minus;4), then compute (&minus;3)(5).",
            steps: [
              "<strong>Rewrite subtraction:</strong> 6 &minus; (&minus;4) = 6 + 4 because subtracting a number means adding its opposite; the opposite of &minus;4 is 4.",
              "<strong>Add:</strong> 6 + 4 = 10.",
              "<strong>Multiply magnitudes:</strong> 3 &times; 5 = 15.",
              "<strong>Choose the product's sign:</strong> &minus;3 and 5 have different signs, so (&minus;3)(5) = &minus;15."
            ],
            answer: "10 and &minus;15"
          },
          guided: {
            prompt: "Compute &minus;9 &minus; 6.",
            hint: "Change subtraction to addition of the opposite.",
            steps: ["&minus;9 &minus; 6 = &minus;9 + (___)", "Start at &minus;9 and move 6 spaces ___.", "Result: ___"]
          },
          mistake: "Using 'two negatives make a positive' for every operation. That shortcut applies to multiplying or dividing two negatives and to subtracting a negative after rewriting; it does not make &minus;3 + (&minus;4) positive.",
          checks: [
            {prompt: "What is &minus;4 + 9?", choices: ["5", "&minus;5", "13", "&minus;13"], answer: 0, explain: "Start at &minus;4 and move 9 spaces right to reach 5."},
            {prompt: "At dawn it is &minus;3&deg;C. The temperature falls 7 degrees. What is the new temperature?", choices: ["&minus;10&deg;C", "4&deg;C", "10&deg;C", "&minus;4&deg;C"], answer: 0, explain: "A fall of 7 means &minus;3 &minus; 7 = &minus;3 + (&minus;7) = &minus;10."}
          ]
        }),
        makeSection({
          heading: "Order of operations",
          meaning: "When one expression contains several operations, grouping symbols tell what belongs together. Then calculate exponents, multiplication or division from left to right, and addition or subtraction from left to right.",
          concrete: `<p>Think of nested boxes: <strong>3 &times; (8 &minus; 2)</strong>. Open the parentheses box first: (8 &minus; 2) = 6. Then multiply.</p>`,
          symbols: `Grouping &rarr; Exponents &rarr; Multiply/Divide left to right &rarr; Add/Subtract left to right`,
          example1: {
            prompt: "Evaluate 18 &minus; 3 &times; 4.",
            steps: [
              "<strong>Look for grouping and exponents:</strong> there are none.",
              "<strong>Multiply before subtracting:</strong> 3 &times; 4 = 12.",
              "<strong>Subtract:</strong> 18 &minus; 12 = 6. We do not simply work left to right because multiplication has priority."
            ],
            answer: "6"
          },
          example2: {
            prompt: "Evaluate (10 &minus; 4) &divide; 2 + 3.",
            steps: [
              "<strong>Grouping first:</strong> 10 &minus; 4 = 6, so the expression becomes 6 &divide; 2 + 3.",
              "<strong>Division before addition:</strong> 6 &divide; 2 = 3.",
              "<strong>Add last:</strong> 3 + 3 = 6."
            ],
            answer: "6"
          },
          guided: {
            prompt: "Evaluate 5 + 2(9 &minus; 6).",
            hint: "Complete the parentheses, then multiplication, then addition.",
            steps: ["9 &minus; 6 = ___", "2(___) = ___", "5 + ___ = ___"]
          },
          mistake: "Treating multiplication as always before division. Multiplication and division have equal priority, so do whichever appears first from the left; addition and subtraction work the same way.",
          checks: [
            {prompt: "What is 7 + 3 &times; 2?", choices: ["13", "20", "17", "10"], answer: 0, explain: "Multiply first: 3 &times; 2 = 6. Then 7 + 6 = 13."},
            {prompt: "A score is calculated by 4(6 &minus; 1) &divide; 2. What is the score?", choices: ["10", "2", "14", "20"], answer: 0, explain: "Grouping first gives 4 &times; 5 &divide; 2. Work multiplication and division left to right: 20 &divide; 2 = 10."}
          ]
        })
      ]
    },

    "fdn-03": {
      title: "Fraction meaning and equivalent fractions",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> See fractions as numbers, not mysterious pairs of digits. Build, rename, compare, and simplify fractions while preserving their value.</p>`,
      sections: [
        makeSection({
          heading: "A fraction names equal parts and division",
          meaning: "In a fraction, the denominator is the bottom number and tells how many equal parts make one whole. The numerator is the top number and tells how many of those parts are selected.",
          concrete: `<p>One bar split into 4 equal pieces: <span class="formula">[■][■][□][□]</span>. Two of four equal pieces are selected, so the bar shows 2/4.</p>`,
          symbols: `numerator / denominator = selected equal parts / equal parts in one whole`,
          example1: {
            prompt: "What fraction of [■][■][■][□][□] is shaded?",
            steps: [
              "<strong>Count all equal pieces:</strong> there are 5, so the denominator is 5.",
              "<strong>Count shaded pieces:</strong> there are 3, so the numerator is 3.",
              "<strong>Write the fraction:</strong> selected pieces over total equal pieces gives 3/5."
            ],
            answer: "3/5"
          },
          example2: {
            prompt: "Interpret 7/3 as division and as wholes plus a part.",
            steps: [
              "<strong>Read the bar as division:</strong> 7/3 means 7 &divide; 3.",
              "<strong>Make groups of 3:</strong> [●●●] [●●●] [●]. Two complete groups use 6 pieces, with 1 piece left.",
              "<strong>Name the amount:</strong> each complete group is one whole, and the leftover is 1 of the 3 pieces in another whole, so 7/3 = 2 1/3."
            ],
            answer: "2 1/3"
          },
          guided: {
            prompt: "A bar has 8 equal pieces and 5 are shaded. Name the fraction.",
            hint: "The total number of equal pieces goes on the bottom.",
            steps: ["Denominator = ___ equal pieces", "Numerator = ___ shaded pieces", "Fraction = ___/___"]
          },
          mistake: "Counting dividing lines instead of spaces. A bar with 4 pieces has 3 inside dividing lines; the denominator counts the pieces.",
          checks: [
            {prompt: "In 4/9, what does 9 mean?", choices: ["Nine equal parts make one whole", "Nine parts are selected", "There are nine wholes", "The fraction equals 9 &divide; 4"], answer: 0, explain: "The denominator is 9, so one whole is divided into 9 equal parts."},
            {prompt: "Nine meters of ribbon are shared equally among 4 people. How many meters does each receive?", choices: ["9/4 meters", "4/9 meter", "5 meters", "13 meters"], answer: 0, explain: "Sharing 9 by 4 means 9 &divide; 4, written as 9/4 meters per person."}
          ]
        }),
        makeSection({
          heading: "Equivalent fractions and simplifying",
          meaning: "Equivalent fractions name the same amount with different-sized pieces. Multiplying or dividing the numerator and denominator by the same nonzero number changes the piece names, not the amount.",
          concrete: `<p><span class="formula">[■][□] = 1/2</span></p><p><span class="formula">[■][■][□][□] = 2/4</span></p><p>The shaded length is the same; the second bar uses smaller pieces.</p>`,
          symbols: `a/b = (a &times; n)/(b &times; n), for n not equal to 0`,
          example1: {
            prompt: "Rename 3/4 with denominator 12.",
            steps: [
              "<strong>Ask the denominator question:</strong> what multiplies 4 to reach 12? The answer is 3 because 4 &times; 3 = 12.",
              "<strong>Multiply both parts by 3:</strong> (3 &times; 3)/(4 &times; 3) = 9/12.",
              "<strong>Explain why:</strong> each fourth was split into 3 smaller equal pieces, so 3 fourths becomes 9 twelfths without changing the shaded amount."
            ],
            answer: "9/12"
          },
          example2: {
            prompt: "Simplify 18/24.",
            steps: [
              "<strong>Find a shared factor:</strong> both 18 and 24 can be divided by 6.",
              "<strong>Divide top and bottom:</strong> (18 &divide; 6)/(24 &divide; 6) = 3/4.",
              "<strong>Check for more simplification:</strong> 3 and 4 share no factor larger than 1, so 3/4 is simplest."
            ],
            answer: "3/4"
          },
          guided: {
            prompt: "Rename 2/5 with denominator 20.",
            hint: "Ask: what multiplies 5 to reach 20?",
            steps: ["5 &times; ___ = 20", "Multiply the numerator by that same number: 2 &times; ___ = ___", "2/5 = ___/20"]
          },
          mistake: "Multiplying only the denominator. That changes the size of each piece without changing how many are selected, so it changes the value.",
          checks: [
            {prompt: "Which fraction is equivalent to 3/5?", choices: ["12/20", "6/15", "4/6", "9/20"], answer: 0, explain: "What multiplies 5 to reach 20? Four. Multiply the numerator by 4 too: 3 &times; 4 = 12, so 3/5 = 12/20."},
            {prompt: "A recipe uses 14/21 cup of an ingredient. What is that amount in simplest form?", choices: ["2/3 cup", "7/10 cup", "3/2 cups", "4/7 cup"], answer: 0, explain: "Divide numerator and denominator by their shared factor 7: 14 &divide; 7 = 2 and 21 &divide; 7 = 3."}
          ]
        }),
        makeSection({
          heading: "Comparing fractions and mixed numbers",
          meaning: "To compare fractions, represent them with equal-sized pieces or use known benchmarks such as 0, 1/2, and 1. A mixed number combines whole units and a fraction.",
          concrete: `<p><span class="formula">3/4: [■][■][■][□]</span></p><p><span class="formula">2/3: [■][■][□]</span></p><p>Rename both in twelfths to compare equal-sized pieces.</p>`,
          symbols: `mixed to fraction: whole &times; denominator + numerator, all over the denominator`,
          example1: {
            prompt: "Compare 3/4 and 2/3.",
            steps: [
              "<strong>Choose denominator 12:</strong> it can be made from both 4 and 3.",
              "<strong>Rename 3/4:</strong> what multiplies 4 to reach 12? Three. So 3/4 = (3 &times; 3)/(4 &times; 3) = 9/12.",
              "<strong>Rename 2/3:</strong> what multiplies 3 to reach 12? Four. So 2/3 = (2 &times; 4)/(3 &times; 4) = 8/12.",
              "<strong>Compare equal pieces:</strong> 9 twelfths is more than 8 twelfths, so 3/4 &gt; 2/3."
            ],
            answer: "3/4 &gt; 2/3"
          },
          example2: {
            prompt: "Write 2 3/5 as a fraction greater than 1.",
            steps: [
              "<strong>Count fifths in the wholes:</strong> each whole has 5 fifths, so 2 wholes have 2 &times; 5 = 10 fifths.",
              "<strong>Add the extra fifths:</strong> 10 fifths + 3 fifths = 13 fifths.",
              "<strong>Write the result:</strong> 13 fifths is 13/5."
            ],
            answer: "13/5"
          },
          guided: {
            prompt: "Compare 5/6 and 3/4 using denominator 12.",
            hint: "Ask separately what multiplies each denominator to reach 12.",
            steps: ["What multiplies 6 to reach 12? ___, so 5/6 = ___/12.", "What multiplies 4 to reach 12? ___, so 3/4 = ___/12.", "Compare the numerators: ___ is greater."]
          },
          mistake: "Comparing denominators alone. A larger denominator means smaller pieces when the whole is the same; it does not automatically mean a larger fraction.",
          checks: [
            {prompt: "Which is greater?", choices: ["5/8", "3/5", "They are equal", "Cannot be compared"], answer: 0, explain: "Use fortieths: what multiplies 8 to reach 40? Five, so 5/8 = 25/40. What multiplies 5 to reach 40? Eight, so 3/5 = 24/40. Therefore 5/8 is greater."},
            {prompt: "A board is 1 3/4 meters long. Which fraction names the same length?", choices: ["7/4", "4/7", "5/4", "6/4"], answer: 0, explain: "One whole is 4/4. Add 3/4: 4/4 + 3/4 = 7/4."}
          ]
        })
      ]
    },

    "fdn-04": {
      title: "Adding and subtracting fractions",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Add and subtract fractions by working with equal-sized pieces, including unlike denominators and mixed numbers.</p>`,
      sections: [
        makeSection({
          heading: "Adding fractions with like and unlike denominators",
          meaning: "Fractions can be added directly only when their denominators name the same-sized pieces. Add the numerators because they count those pieces; keep the shared denominator.",
          concrete: `<p><span class="formula">1/4 + 2/4: [■][□][□][□] + [■][■][□][□] = [■][■][■][□] = 3/4</span></p>`,
          symbols: `a/c + b/c = (a + b)/c`,
          example1: {
            prompt: "Compute 3/8 + 2/8.",
            steps: [
              "<strong>Check piece size:</strong> both denominators are 8, so every piece is one eighth.",
              "<strong>Add the counts:</strong> 3 eighths + 2 eighths = (3 + 2) eighths = 5 eighths.",
              "<strong>Keep the denominator:</strong> the pieces remain eighths, so the result is 5/8."
            ],
            answer: "5/8"
          },
          example2: {
            prompt: "Compute 1/3 + 1/4.",
            steps: [
              "<strong>Choose twelfths:</strong> 12 is a shared denominator.",
              "<strong>Rename 1/3:</strong> what multiplies 3 to reach 12? Four. So 1/3 = 4/12.",
              "<strong>Rename 1/4:</strong> what multiplies 4 to reach 12? Three. So 1/4 = 3/12.",
              "<strong>Add equal-sized pieces:</strong> 4/12 + 3/12 = 7/12."
            ],
            answer: "7/12"
          },
          guided: {
            prompt: "Compute 2/5 + 1/10.",
            hint: "Use tenths. Ask: what multiplies 5 to reach 10?",
            steps: ["2/5 = ___/10 because 5 &times; ___ = 10.", "___/10 + 1/10 = ___/10", "Simplest result: ___"]
          },
          mistake: "Adding denominators, such as 1/3 + 1/4 = 2/7. Thirds and fourths are different-sized pieces; rename them before counting.",
          checks: [
            {prompt: "What is 2/7 + 3/7?", choices: ["5/7", "5/14", "6/7", "1/7"], answer: 0, explain: "The pieces are already sevenths, so add their counts: 2 + 3 = 5 sevenths."},
            {prompt: "Mia walks 1/2 mile in the morning and 3/8 mile later. How far does she walk?", choices: ["7/8 mile", "4/10 mile", "1/8 mile", "1 1/8 miles"], answer: 0, explain: "Use eighths. What multiplies 2 to reach 8? Four, so 1/2 = 4/8. Then 4/8 + 3/8 = 7/8."}
          ]
        }),
        makeSection({
          heading: "Subtracting fractions and regrouping",
          meaning: "Subtraction removes equal-sized pieces or finds a difference. Match denominators first. If a mixed number has too few fractional pieces, trade one whole for denominator-many pieces.",
          concrete: `<p><span class="formula">5/6 &minus; 2/6: [■][■][■][■][■][□] remove [■][■] &rarr; [■][■][■][□][□][□] = 3/6</span></p>`,
          symbols: `a/c &minus; b/c = (a &minus; b)/c`,
          example1: {
            prompt: "Compute 5/6 &minus; 1/4.",
            steps: [
              "<strong>Choose twelfths:</strong> 12 is shared by 6 and 4.",
              "<strong>Rename 5/6:</strong> what multiplies 6 to reach 12? Two. So 5/6 = 10/12.",
              "<strong>Rename 1/4:</strong> what multiplies 4 to reach 12? Three. So 1/4 = 3/12.",
              "<strong>Subtract:</strong> 10/12 &minus; 3/12 = 7/12."
            ],
            answer: "7/12"
          },
          example2: {
            prompt: "Compute 3 1/4 &minus; 1 3/4.",
            steps: [
              "<strong>Notice the problem:</strong> 1 fourth is too small to remove 3 fourths.",
              "<strong>Trade one whole:</strong> one whole equals 4/4, so 3 1/4 = 2 + 4/4 + 1/4 = 2 5/4.",
              "<strong>Subtract whole and fractional parts:</strong> 2 5/4 &minus; 1 3/4 = (2 &minus; 1) + (5/4 &minus; 3/4).",
              "<strong>Finish:</strong> 1 + 2/4 = 1 + 1/2 = 1 1/2."
            ],
            answer: "1 1/2"
          },
          guided: {
            prompt: "Compute 4 2/5 &minus; 2 4/5.",
            hint: "Trade one whole for 5/5.",
            steps: ["4 2/5 = 3 + 5/5 + 2/5 = 3 ___/5", "3 ___/5 &minus; 2 4/5 = 1 ___/5", "Simplified answer: ___"]
          },
          mistake: "Borrowing 10 fractional pieces out of habit. One whole becomes as many pieces as the denominator: 5/5 for fifths, 8/8 for eighths.",
          checks: [
            {prompt: "What is 7/9 &minus; 2/9?", choices: ["5/9", "5/0", "9/9", "5/18"], answer: 0, explain: "Both fractions use ninths, so subtract the counts: 7 &minus; 2 = 5 ninths."},
            {prompt: "A 2 1/3-meter board is cut down by 5/6 meter. How much remains?", choices: ["1 1/2 meters", "1 2/3 meters", "2 1/2 meters", "1 1/6 meters"], answer: 0, explain: "Rename 2 1/3 as 2 2/6 because what multiplies 3 to reach 6? Two. Regroup: 2 2/6 = 1 8/6. Then 1 8/6 &minus; 5/6 = 1 3/6 = 1 1/2."}
          ]
        }),
        makeSection({
          heading: "Fraction sums and differences in context",
          meaning: "In a situation, first decide whether amounts are being joined or compared. Estimate with benchmarks, calculate using common denominators, and label the unit.",
          concrete: `<table><tr><th>Amount used</th><th>Amount left</th><th>Whole</th></tr><tr><td>3/8</td><td>?</td><td>1 = 8/8</td></tr></table>`,
          symbols: `part used + part left = whole`,
          example1: {
            prompt: "A tank is 2/5 full, then 1/4 of the tank is added. How full is it?",
            steps: [
              "<strong>Choose addition:</strong> the tank receives more, so calculate 2/5 + 1/4.",
              "<strong>Use twentieths:</strong> what multiplies 5 to reach 20? Four, so 2/5 = 8/20. What multiplies 4 to reach 20? Five, so 1/4 = 5/20.",
              "<strong>Add:</strong> 8/20 + 5/20 = 13/20.",
              "<strong>Check:</strong> 2/5 is 8/20 and 1/4 is 5/20; their sum is more than 1/2 but less than 1, matching 13/20."
            ],
            answer: "13/20 full"
          },
          example2: {
            prompt: "A recipe needs 1 1/2 cups of flour. You have 7/8 cup. How much more is needed?",
            steps: [
              "<strong>Choose subtraction:</strong> find the gap between needed and available: 1 1/2 &minus; 7/8.",
              "<strong>Rename halves:</strong> what multiplies 2 to reach 8? Four, so 1 1/2 = 1 4/8.",
              "<strong>Regroup:</strong> 1 4/8 = 12/8 because one whole is 8/8.",
              "<strong>Subtract:</strong> 12/8 &minus; 7/8 = 5/8 cup."
            ],
            answer: "5/8 cup"
          },
          guided: {
            prompt: "A trail is 3/4 mile long. You have walked 2/5 mile. How much remains?",
            hint: "Subtract using twentieths.",
            steps: ["3/4 = ___/20 because what multiplies 4 to reach 20? ___.", "2/5 = ___/20 because what multiplies 5 to reach 20? ___.", "___/20 &minus; ___/20 = ___/20 mile"]
          },
          mistake: "Dropping units or answering the wrong question. 'How much more' asks for a difference, while 'how much altogether' asks for a sum.",
          checks: [
            {prompt: "A container is 3/10 full and another 4/10 is added. How full is it?", choices: ["7/10", "7/20", "1/10", "12/10"], answer: 0, explain: "The pieces are tenths, so 3 tenths + 4 tenths = 7 tenths."},
            {prompt: "A 5/6-mile route has 1/4 mile remaining. How much has been completed?", choices: ["7/12 mile", "13/12 miles", "4/10 mile", "2/3 mile"], answer: 0, explain: "Completed = 5/6 &minus; 1/4. What multiplies 6 to reach 12? Two, so 5/6 = 10/12. What multiplies 4 to reach 12? Three, so 1/4 = 3/12. Then 10/12 &minus; 3/12 = 7/12 mile."}
          ]
        })
      ]
    },

    "fdn-05": {
      title: "Multiplying and dividing fractions",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Understand fraction multiplication as taking part of an amount and fraction division as measuring or sharing, then apply both operations reliably.</p>`,
      sections: [
        makeSection({
          heading: "Multiplying fractions means taking a part of a part",
          meaning: "The word 'of' often signals multiplication. To take a fraction of a fraction, multiply the numerators and multiply the denominators, then simplify.",
          concrete: `<p>Picture a rectangle split into 3 rows and 4 columns. Shade 2 of 3 rows, then keep 3 of 4 columns. The overlap covers 6 of 12 equal cells, or 1/2.</p>`,
          symbols: `(a/b)(c/d) = (a &times; c)/(b &times; d)`,
          example1: {
            prompt: "Compute 2/3 of 3/5.",
            steps: [
              "<strong>Translate 'of':</strong> 2/3 of 3/5 means (2/3)(3/5).",
              "<strong>Multiply:</strong> (2 &times; 3)/(3 &times; 5) = 6/15.",
              "<strong>Simplify:</strong> divide top and bottom by 3: (6 &divide; 3)/(15 &divide; 3) = 2/5.",
              "<strong>Reasonableness:</strong> taking 2/3 of 3/5 should be smaller than 3/5; 2/5 is."
            ],
            answer: "2/5"
          },
          example2: {
            prompt: "Find 3/4 of 20.",
            steps: [
              "<strong>Write 20 as a fraction:</strong> 20 = 20/1.",
              "<strong>Multiply:</strong> (3/4)(20/1) = 60/4.",
              "<strong>Divide:</strong> 60 &divide; 4 = 15.",
              "<strong>See it another way:</strong> one fourth of 20 is 5, so three fourths is 3 &times; 5 = 15."
            ],
            answer: "15"
          },
          guided: {
            prompt: "Find 2/5 of 15.",
            hint: "First find one fifth, then take two of those parts.",
            steps: ["1/5 of 15 = 15 &divide; 5 = ___", "2/5 of 15 = 2 &times; ___", "Result: ___"]
          },
          mistake: "Finding a common denominator before multiplying. Common denominators are needed for addition and subtraction, not multiplication.",
          checks: [
            {prompt: "What is 2/3 &times; 5/7?", choices: ["10/21", "7/10", "10/10", "7/21"], answer: 0, explain: "Multiply numerators and denominators: (2 &times; 5)/(3 &times; 7) = 10/21."},
            {prompt: "A class uses 3/5 of a box containing 30 markers. How many markers are used?", choices: ["18", "50", "6", "27"], answer: 0, explain: "One fifth of 30 is 6; three fifths is 3 &times; 6 = 18."}
          ]
        }),
        makeSection({
          heading: "Dividing fractions measures how many groups fit",
          meaning: "Division can ask how many groups of one size fit in an amount. Dividing by a fraction is equivalent to multiplying by its reciprocal, the fraction formed by swapping numerator and denominator.",
          concrete: `<p>How many 1/4-cup scoops fit in 3/4 cup? <span class="formula">[■][■][■][□]</span> contains three one-fourth pieces, so (3/4) &divide; (1/4) = 3.</p>`,
          symbols: `(a/b) &divide; (c/d) = (a/b) &times; (d/c), with c/d not equal to 0`,
          example1: {
            prompt: "Compute 3/4 &divide; 1/8.",
            steps: [
              "<strong>Interpret:</strong> ask how many one-eighth pieces fit in three fourths.",
              "<strong>Rename three fourths:</strong> what multiplies 4 to reach 8? Two, so 3/4 = 6/8. Six one-eighth pieces fit.",
              "<strong>Confirm with the reciprocal:</strong> (3/4)(8/1) = 24/4 = 6."
            ],
            answer: "6"
          },
          example2: {
            prompt: "Compute 2/3 &divide; 4/5.",
            steps: [
              "<strong>Use the reciprocal:</strong> the reciprocal of 4/5 is 5/4.",
              "<strong>Multiply instead:</strong> (2/3)(5/4) = 10/12.",
              "<strong>Simplify:</strong> divide numerator and denominator by 2 to get 5/6.",
              "<strong>Check size:</strong> dividing by 4/5, a number below 1, gives a result slightly larger than 2/3; 5/6 fits."
            ],
            answer: "5/6"
          },
          guided: {
            prompt: "Compute 5/6 &divide; 2/3.",
            hint: "Keep 5/6, change division to multiplication, and use the reciprocal of 2/3.",
            steps: ["5/6 &divide; 2/3 = 5/6 &times; ___/___", "= (5 &times; ___)/(6 &times; ___) = ___/___", "Simplified result: ___"]
          },
          mistake: "Flipping the first fraction or both fractions. Keep the first fraction; use the reciprocal only of the divisor, the fraction after the division sign.",
          checks: [
            {prompt: "What is 1/2 &divide; 1/4?", choices: ["2", "1/8", "1/2", "4"], answer: 0, explain: "Two one-fourth pieces fit in one half. Symbolically, (1/2)(4/1) = 4/2 = 2."},
            {prompt: "You have 2 1/4 cups of rice and each serving uses 3/4 cup. How many servings can you make?", choices: ["3", "1 11/16", "2", "4"], answer: 0, explain: "2 1/4 = 9/4. Then (9/4) &divide; (3/4) = (9/4)(4/3) = 9/3 = 3 servings."}
          ]
        }),
        makeSection({
          heading: "Choosing multiplication or division with fractions",
          meaning: "Multiply when taking a stated part of an amount. Divide when sharing an amount equally or asking how many groups of a given fractional size fit.",
          concrete: `<table><tr><th>Question</th><th>Action</th></tr><tr><td>What is 2/3 of 12?</td><td>multiply</td></tr><tr><td>How many 2/3-unit pieces fit in 12?</td><td>divide</td></tr></table>`,
          symbols: `part of amount &rarr; multiply &nbsp; | &nbsp; number of groups &rarr; divide`,
          example1: {
            prompt: "A 6-mile trail is completed 5/8 of the way. How many miles are completed?",
            steps: [
              "<strong>Choose multiplication:</strong> the question asks for 5/8 of 6.",
              "<strong>Calculate:</strong> (5/8)(6/1) = 30/8.",
              "<strong>Simplify and rename:</strong> 30/8 = 15/4 = 3 3/4.",
              "<strong>Check:</strong> 5/8 is a little more than half; a little more than half of 6 is a little more than 3, matching 3 3/4."
            ],
            answer: "3 3/4 miles"
          },
          example2: {
            prompt: "A 3 1/2-foot board is cut into pieces 1/2 foot long. How many pieces are made?",
            steps: [
              "<strong>Choose division:</strong> ask how many half-foot groups fit in 3 1/2 feet.",
              "<strong>Rename:</strong> 3 1/2 = 7/2.",
              "<strong>Divide:</strong> (7/2) &divide; (1/2) = (7/2)(2/1) = 14/2 = 7.",
              "<strong>See the pieces:</strong> each whole foot supplies two half-foot pieces, so 3 feet gives 6 pieces and the remaining half gives 1 more."
            ],
            answer: "7 pieces"
          },
          guided: {
            prompt: "A 4-cup container is 3/4 full. How many cups are in it?",
            hint: "'Three fourths of 4' means multiplication.",
            steps: ["3/4 &times; 4/1 = (3 &times; 4)/(4 &times; 1)", "= 12/___", "= ___ cups"]
          },
          mistake: "Assuming multiplication always makes larger and division always makes smaller. Multiplying by a number below 1 makes smaller; dividing by a number below 1 asks how many small groups fit and can make a larger count.",
          checks: [
            {prompt: "Which operation finds 2/5 of 35?", choices: ["(2/5) &times; 35", "35 &divide; (2/5)", "35 + 2/5", "35 &minus; 2/5"], answer: 0, explain: "The phrase 'of 35' asks for a part of 35, so multiplication is appropriate."},
            {prompt: "How many 2/3-cup portions can be filled from 4 cups?", choices: ["6", "2 2/3", "4 2/3", "8"], answer: 0, explain: "The question asks how many groups fit: 4 &divide; (2/3) = 4 &times; (3/2) = 12/2 = 6."}
          ]
        })
      ]
    },

    "fdn-06": {
      title: "Decimals, percents, and conversions",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Connect decimals, fractions, and percents as three names for the same values, and use those forms accurately in calculations and applications.</p>`,
      sections: [
        makeSection({
          heading: "Decimal place value and operations",
          meaning: "Places to the right of the decimal point name tenths, hundredths, thousandths, and smaller parts. Align decimal points when adding or subtracting so equal-sized places combine.",
          concrete: `<table><tr><th>Ones</th><th>.</th><th>Tenths</th><th>Hundredths</th></tr><tr><td>3</td><td>.</td><td>4</td><td>7</td></tr></table><p>3.47 means 3 ones, 4 tenths, and 7 hundredths.</p>`,
          symbols: `3.47 = 3 + 4/10 + 7/100`,
          example1: {
            prompt: "Compute 5.6 + 0.37.",
            steps: [
              "<strong>Align place values:</strong> write 5.6 as 5.60 so tenths sit under tenths and hundredths under hundredths.",
              "<strong>Add hundredths:</strong> 0 + 7 = 7 hundredths.",
              "<strong>Add tenths:</strong> 6 + 3 = 9 tenths.",
              "<strong>Add ones:</strong> 5 + 0 = 5, so 5.60 + 0.37 = 5.97."
            ],
            answer: "5.97"
          },
          example2: {
            prompt: "Compute 2.4 &times; 0.3.",
            steps: [
              "<strong>Use fraction meaning:</strong> 2.4 = 24/10 and 0.3 = 3/10.",
              "<strong>Multiply:</strong> (24/10)(3/10) = 72/100.",
              "<strong>Return to decimal form:</strong> 72 hundredths is 0.72.",
              "<strong>Check size:</strong> 0.3 is less than 1, so 0.3 of 2.4 must be less than 2.4."
            ],
            answer: "0.72"
          },
          guided: {
            prompt: "Compute 8.2 &minus; 1.46.",
            hint: "Write 8.2 as 8.20, then align decimal points.",
            steps: ["8.20 &minus; 1.46", "Borrow so 10 hundredths &minus; 6 hundredths = ___ hundredths.", "The completed difference is ___"]
          },
          mistake: "Aligning the last digits instead of decimal points. Decimal points must line up because tenths can only combine directly with tenths, hundredths with hundredths, and so on.",
          checks: [
            {prompt: "What is 4.08 + 0.7?", choices: ["4.78", "4.15", "11.08", "4.087"], answer: 0, explain: "Write 0.7 as 0.70. Then 4.08 + 0.70 = 4.78."},
            {prompt: "A 6.5-meter rope has 2.75 meters removed. How much remains?", choices: ["3.75 meters", "4.25 meters", "3.80 meters", "9.25 meters"], answer: 0, explain: "Align decimals: 6.50 &minus; 2.75 = 3.75 meters."}
          ]
        }),
        makeSection({
          heading: "Converting among fractions, decimals, and percents",
          meaning: "Percent means 'out of 100.' A decimal records place value, and a fraction records division. Converting changes the notation, not the amount.",
          concrete: `<p>A 100-cell grid with 35 shaded cells shows <span class="formula">35/100 = 0.35 = 35%</span>.</p>`,
          symbols: `decimal &times; 100% = percent &nbsp; | &nbsp; percent &divide; 100 = decimal &nbsp; | &nbsp; fraction = numerator &divide; denominator`,
          example1: {
            prompt: "Convert 3/8 to a decimal and percent.",
            steps: [
              "<strong>Use fraction as division:</strong> 3/8 = 3 &divide; 8 = 0.375.",
              "<strong>Convert decimal to percent:</strong> multiply by 100%, so 0.375 &times; 100% = 37.5%.",
              "<strong>Check:</strong> 3/8 is less than 1/2, so a percent below 50% is reasonable."
            ],
            answer: "0.375 and 37.5%"
          },
          example2: {
            prompt: "Convert 45% to a simplified fraction.",
            steps: [
              "<strong>Use the meaning of percent:</strong> 45% means 45 out of 100, or 45/100.",
              "<strong>Simplify:</strong> divide numerator and denominator by 5: 45/100 = 9/20.",
              "<strong>Check:</strong> 9/20 = 0.45, which returns to 45%."
            ],
            answer: "9/20"
          },
          guided: {
            prompt: "Convert 0.62 to a percent and fraction.",
            hint: "Read 0.62 as 62 hundredths.",
            steps: ["0.62 &times; 100% = ___%", "0.62 = 62/100", "Divide numerator and denominator by 2: 62/100 = ___/___"]
          },
          mistake: "Attaching a percent sign without multiplying the decimal value by 100. For example, 0.4 equals 40%, not 0.4%.",
          checks: [
            {prompt: "Which percent equals 0.07?", choices: ["7%", "0.7%", "70%", "700%"], answer: 0, explain: "Multiply the decimal by 100%: 0.07 &times; 100% = 7%."},
            {prompt: "A survey reports that 5/8 of respondents agreed. What percent agreed?", choices: ["62.5%", "58%", "80%", "12.5%"], answer: 0, explain: "5 &divide; 8 = 0.625, and 0.625 &times; 100% = 62.5%."}
          ]
        }),
        makeSection({
          heading: "Finding a percent of an amount",
          meaning: "To find a percent of an amount, convert the percent to a decimal or fraction and multiply. The result is the stated part of the original amount.",
          concrete: `<p>25% means 25/100 = 1/4. A $60 amount split into four equal groups gives [$15][$15][$15][$15], so 25% of $60 is $15.</p>`,
          symbols: `part = percent as a decimal &times; whole`,
          example1: {
            prompt: "Find 18% of 250.",
            steps: [
              "<strong>Convert the percent:</strong> 18% = 18/100 = 0.18.",
              "<strong>Multiply:</strong> 0.18 &times; 250 = 45.",
              "<strong>Check another way:</strong> 10% of 250 is 25 and 8% is 20, so 18% is 25 + 20 = 45.",
              "<strong>Reasonableness:</strong> 18% is near 20%, and 20% of 250 is 50, so 45 fits."
            ],
            answer: "45"
          },
          example2: {
            prompt: "A $80 item is discounted 15%. Find the discount and sale price.",
            steps: [
              "<strong>Find the discount:</strong> 15% = 0.15, so 0.15 &times; 80 = 12.",
              "<strong>Interpret $12:</strong> this is the amount removed, not the final price.",
              "<strong>Subtract from the original:</strong> 80 &minus; 12 = 68.",
              "<strong>Check:</strong> 10% is $8 and 5% is $4; together the discount is $12."
            ],
            answer: "$12 discount; $68 sale price"
          },
          guided: {
            prompt: "Find 30% of 90.",
            hint: "Convert 30% to 0.30, then multiply.",
            steps: ["30% = ___ as a decimal", "0.30 &times; 90 = ___", "Because 30% is less than half, the answer should be less than ___."]
          },
          mistake: "Confusing a discount amount with the final price. First find the percent of the original; then subtract that amount if the question asks for the price after a discount.",
          checks: [
            {prompt: "What is 20% of 70?", choices: ["14", "20", "50", "350"], answer: 0, explain: "20% = 0.20, and 0.20 &times; 70 = 14."},
            {prompt: "A $120 bill receives a 15% tip. What is the total including tip?", choices: ["$138", "$18", "$135", "$102"], answer: 0, explain: "The tip is 0.15 &times; 120 = $18. Add it to the bill: $120 + $18 = $138."}
          ]
        })
      ]
    },

    "fdn-07": {
      title: "Evaluating expressions and substitution",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Read algebraic expressions as calculation instructions, replace letters with known values, and evaluate carefully using grouping and operation order.</p>`,
      sections: [
        makeSection({
          heading: "Expressions are calculation instructions",
          meaning: "An expression is a mathematical phrase with numbers, operation signs, and sometimes letters. A letter that can represent a number is called a variable. An expression has no equals sign.",
          concrete: `<table><tr><th>Words</th><th>Expression</th></tr><tr><td>five more than a number</td><td>n + 5</td></tr><tr><td>three groups of a number</td><td>3n</td></tr></table>`,
          symbols: `3n means 3 &times; n; n/4 means n &divide; 4`,
          example1: {
            prompt: "Translate 'seven less than twice a number n' into an expression.",
            steps: [
              "<strong>Translate twice a number:</strong> twice means 2 equal groups, so write 2n.",
              "<strong>Translate seven less than that amount:</strong> remove 7 from 2n, giving 2n &minus; 7.",
              "<strong>Check the order of words:</strong> 'seven less than twice n' starts with twice n and subtracts 7."
            ],
            answer: "2n &minus; 7"
          },
          example2: {
            prompt: "Describe 4(x + 3) in words and with grouped objects.",
            steps: [
              "<strong>Read the parentheses as one group:</strong> each group contains x objects plus 3 objects.",
              "<strong>Read the 4:</strong> there are 4 identical groups: [x+3] [x+3] [x+3] [x+3].",
              "<strong>State in words:</strong> four times the sum of x and 3."
            ],
            answer: "four times the sum of x and 3"
          },
          guided: {
            prompt: "Translate 'a number y divided by 6, then increased by 2.'",
            hint: "Write the division before adding 2.",
            steps: ["A number y divided by 6: y/___", "Increase that result by 2: y/6 + ___", "Expression: ___"]
          },
          mistake: "Treating 3n as the two-digit number '3n' or as 3 + n. A number touching a variable means multiplication.",
          checks: [
            {prompt: "Which expression means 'five times a number x, plus 2'?", choices: ["5x + 2", "5(x + 2)", "x + 10", "2x + 5"], answer: 0, explain: "Five times x is 5x; adding 2 afterward gives 5x + 2."},
            {prompt: "A taxi charges $4 plus $3 per mile m. Which expression gives the cost?", choices: ["4 + 3m", "7m", "4m + 3", "12m"], answer: 0, explain: "The fixed charge is 4 and the mileage charge is 3 for each of m miles, or 3m, so total cost is 4 + 3m."}
          ]
        }),
        makeSection({
          heading: "Substitution replaces a variable with a value",
          meaning: "Substitution means replacing a variable with a given number. Put the number in parentheses, especially when it is negative, then follow the order of operations.",
          concrete: `<p>Think of a labeled box: <span class="formula">2[x] + 1</span>. If the x-box receives 4, the machine performs 2(4) + 1.</p>`,
          symbols: `if x = value, replace every x with (value)`,
          example1: {
            prompt: "Evaluate 3x + 5 when x = 4.",
            steps: [
              "<strong>Substitute:</strong> replace x with 4: 3(4) + 5.",
              "<strong>Multiply first:</strong> 3(4) = 12.",
              "<strong>Add:</strong> 12 + 5 = 17."
            ],
            answer: "17"
          },
          example2: {
            prompt: "Evaluate x<sup>2</sup> &minus; 2x when x = &minus;3.",
            steps: [
              "<strong>Substitute with parentheses:</strong> (&minus;3)<sup>2</sup> &minus; 2(&minus;3). Parentheses show the negative belongs to the value.",
              "<strong>Evaluate the exponent:</strong> (&minus;3)<sup>2</sup> = (&minus;3)(&minus;3) = 9.",
              "<strong>Multiply:</strong> 2(&minus;3) = &minus;6, so the expression is 9 &minus; (&minus;6).",
              "<strong>Subtract the negative:</strong> 9 + 6 = 15."
            ],
            answer: "15"
          },
          guided: {
            prompt: "Evaluate 5 &minus; 2a when a = &minus;4.",
            hint: "Write 5 &minus; 2(&minus;4) before calculating.",
            steps: ["Substitute: 5 &minus; 2(___)", "Multiply: 2(&minus;4) = ___", "5 &minus; (___) = ___"]
          },
          mistake: "Dropping the negative sign during substitution. Parentheses make the replacement visible: x<sup>2</sup> at x = &minus;2 becomes (&minus;2)<sup>2</sup>, not &minus;2<sup>2</sup>.",
          checks: [
            {prompt: "Evaluate 2n + 7 when n = 5.", choices: ["17", "14", "19", "10"], answer: 0, explain: "Substitute 5: 2(5) + 7 = 10 + 7 = 17."},
            {prompt: "The cost expression is 12 + 4h. What is the cost when h = 3?", choices: ["24", "48", "19", "36"], answer: 0, explain: "Replace h with 3: 12 + 4(3) = 12 + 12 = 24."}
          ]
        }),
        makeSection({
          heading: "Evaluating formulas with more than one variable",
          meaning: "A formula is an equation that states a dependable relationship among quantities. When values are known, substitute each one and evaluate the right side to find the requested quantity.",
          concrete: `<table><tr><th>Symbol</th><th>Meaning</th><th>Value</th></tr><tr><td>l</td><td>length</td><td>6</td></tr><tr><td>w</td><td>width</td><td>4</td></tr></table><p>For A = lw, insert both values: A = (6)(4).</p>`,
          symbols: `A = lw means area = length &times; width`,
          example1: {
            prompt: "Use P = 2l + 2w to find perimeter when l = 8 and w = 3.",
            steps: [
              "<strong>Identify each value:</strong> l is 8 and w is 3.",
              "<strong>Substitute:</strong> P = 2(8) + 2(3).",
              "<strong>Multiply:</strong> 2(8) = 16 and 2(3) = 6.",
              "<strong>Add:</strong> P = 16 + 6 = 22. Perimeter uses length units."
            ],
            answer: "22 units"
          },
          example2: {
            prompt: "Use d = rt to find distance when r = 55 miles per hour and t = 2.5 hours.",
            steps: [
              "<strong>Read the formula:</strong> distance equals rate times time.",
              "<strong>Substitute:</strong> d = (55)(2.5).",
              "<strong>Multiply by splitting 2.5:</strong> 55(2) + 55(0.5) = 110 + 27.5 = 137.5.",
              "<strong>Check units:</strong> miles per hour times hours leaves miles."
            ],
            answer: "137.5 miles"
          },
          guided: {
            prompt: "Use A = bh/2 when b = 10 and h = 7.",
            hint: "Multiply base and height, then divide by 2.",
            steps: ["A = (___)(___)/2", "A = 70/___", "A = ___ square units"]
          },
          mistake: "Substituting a value for the wrong letter. Make a small label-and-value table before calculating.",
          checks: [
            {prompt: "Use C = 5n + 2. What is C when n = 6?", choices: ["32", "42", "17", "13"], answer: 0, explain: "Substitute n = 6: C = 5(6) + 2 = 30 + 2 = 32."},
            {prompt: "Use V = lwh. Find V when l = 4, w = 3, and h = 2.5.", choices: ["30", "9.5", "24", "15"], answer: 0, explain: "Substitute all three values: V = (4)(3)(2.5) = 12(2.5) = 30 cubic units."}
          ]
        })
      ]
    },

    "fdn-08": {
      title: "One-step and two-step equations",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Treat an equation as a balance, undo operations in a justified order, and verify solutions by substitution.</p>`,
      sections: [
        makeSection({
          heading: "Equations and one-step addition or subtraction",
          meaning: "An equation says two expressions have equal value. A solution is a value that makes the equation true. Keep equality by doing the same operation to both sides.",
          concrete: `<p>Balance model: <span class="formula">[x + 5] = [12]</span>. Remove 5 from both pans: <span class="formula">[x] = [7]</span>.</p>`,
          symbols: `if a = b, then a + c = b + c and a &minus; c = b &minus; c`,
          example1: {
            prompt: "Solve x + 9 = 23.",
            steps: [
              "<strong>Identify what happened to x:</strong> 9 was added.",
              "<strong>Undo with subtraction:</strong> subtract 9 from both sides so the balance stays equal: x + 9 &minus; 9 = 23 &minus; 9.",
              "<strong>Simplify:</strong> x = 14.",
              "<strong>Check:</strong> substitute 14 into the original: 14 + 9 = 23, which is true."
            ],
            answer: "x = 14"
          },
          example2: {
            prompt: "Solve y &minus; 6 = &minus;2.",
            steps: [
              "<strong>Identify what happened to y:</strong> 6 was subtracted.",
              "<strong>Undo with addition:</strong> add 6 to both sides: y &minus; 6 + 6 = &minus;2 + 6.",
              "<strong>Simplify:</strong> y = 4.",
              "<strong>Check:</strong> 4 &minus; 6 = &minus;2, so the solution works."
            ],
            answer: "y = 4"
          },
          guided: {
            prompt: "Solve n + 7 = 19.",
            hint: "Undo adding 7 by subtracting 7 from both sides.",
            steps: ["n + 7 &minus; ___ = 19 &minus; ___", "n = ___", "Check: ___ + 7 = 19"]
          },
          mistake: "Moving a number across the equals sign and changing its sign without understanding why. Write the same inverse operation on both sides; the sign change then follows from valid arithmetic.",
          checks: [
            {prompt: "Solve a &minus; 8 = 5.", choices: ["a = 13", "a = &minus;3", "a = 3", "a = 40"], answer: 0, explain: "Add 8 to both sides: a = 5 + 8 = 13. Check: 13 &minus; 8 = 5."},
            {prompt: "After 12 points are added, a score is 31. What was the original score s?", choices: ["19", "43", "21", "372"], answer: 0, explain: "The equation is s + 12 = 31. Subtract 12 from both sides to get s = 19."}
          ]
        }),
        makeSection({
          heading: "One-step multiplication or division and two-step equations",
          meaning: "Undo operations in reverse order. In a two-step equation, undo added or subtracted amounts first, then undo multiplication or division.",
          concrete: `<p>Machine model for 3x + 4: <span class="formula">x &rarr; multiply by 3 &rarr; add 4 &rarr; 19</span>. Walk backward: 19 &rarr; subtract 4 &rarr; divide by 3 &rarr; x.</p>`,
          symbols: `ax + b = c &rarr; ax = c &minus; b &rarr; x = (c &minus; b)/a`,
          example1: {
            prompt: "Solve 5x = 35.",
            steps: [
              "<strong>Identify the operation:</strong> x is multiplied by 5.",
              "<strong>Undo with division:</strong> divide both sides by 5: 5x/5 = 35/5.",
              "<strong>Simplify:</strong> x = 7.",
              "<strong>Check:</strong> 5(7) = 35."
            ],
            answer: "x = 7"
          },
          example2: {
            prompt: "Solve 4x &minus; 3 = 17.",
            steps: [
              "<strong>Undo subtraction first:</strong> add 3 to both sides: 4x &minus; 3 + 3 = 17 + 3.",
              "<strong>Simplify:</strong> 4x = 20.",
              "<strong>Undo multiplication:</strong> divide both sides by 4: x = 20/4 = 5.",
              "<strong>Check:</strong> 4(5) &minus; 3 = 20 &minus; 3 = 17."
            ],
            answer: "x = 5"
          },
          guided: {
            prompt: "Solve 3n + 8 = 26.",
            hint: "Undo +8 first; then undo multiplication by 3.",
            steps: ["3n + 8 &minus; 8 = 26 &minus; 8, so 3n = ___", "3n/3 = ___/3", "n = ___; check: 3(___) + 8 = 26"]
          },
          mistake: "Dividing only one term. If dividing an entire side, every term on that side must be divided; isolating the multiplied variable after removing the added term avoids this error.",
          checks: [
            {prompt: "Solve x/6 = 4.", choices: ["x = 24", "x = 2/3", "x = 10", "x = &minus;2"], answer: 0, explain: "Multiply both sides by 6: x = 4 &times; 6 = 24. Check: 24/6 = 4."},
            {prompt: "Solve 2x + 5 = 21.", choices: ["x = 8", "x = 13", "x = 16", "x = 7"], answer: 0, explain: "Subtract 5: 2x = 16. Divide by 2: x = 8. Check: 2(8) + 5 = 21."}
          ]
        }),
        makeSection({
          heading: "Building and checking equations from situations",
          meaning: "Choose a variable for the unknown, translate each action in the order described, solve, and interpret the value in the situation.",
          concrete: `<table><tr><th>Story part</th><th>Math</th></tr><tr><td>$6 fixed fee</td><td>+ 6</td></tr><tr><td>$4 per hour h</td><td>4h</td></tr><tr><td>$30 total</td><td>= 30</td></tr></table>`,
          symbols: `fixed amount + rate &times; number of units = total`,
          example1: {
            prompt: "A gym charges a $10 entry fee plus $3 per class. The total is $25. How many classes c were taken?",
            steps: [
              "<strong>Build the equation:</strong> $3 per class is 3c; adding the $10 fee gives 3c + 10 = 25.",
              "<strong>Undo the fee:</strong> subtract 10 from both sides: 3c = 15.",
              "<strong>Undo the per-class multiplication:</strong> divide by 3: c = 5.",
              "<strong>Check in context:</strong> 5 classes cost 3(5) = $15; plus $10 is $25."
            ],
            answer: "5 classes"
          },
          example2: {
            prompt: "A ribbon is cut into 4 equal pieces after 2 feet are removed. Each piece is 3 feet. What was the original length L?",
            steps: [
              "<strong>Follow the story:</strong> removing 2 feet gives L &minus; 2; dividing the remainder into 4 pieces gives (L &minus; 2)/4.",
              "<strong>Set the piece length:</strong> (L &minus; 2)/4 = 3.",
              "<strong>Undo division:</strong> multiply both sides by 4: L &minus; 2 = 12.",
              "<strong>Undo subtraction:</strong> add 2: L = 14. Check: 14 &minus; 2 = 12, and 12/4 = 3."
            ],
            answer: "14 feet"
          },
          guided: {
            prompt: "A service charges $5 plus $2 per use. The total is $17. How many uses u?",
            hint: "Write 5 + 2u = 17.",
            steps: ["5 + 2u &minus; 5 = 17 &minus; 5, so 2u = ___", "u = ___/2 = ___", "Check: 5 + 2(___) = 17"]
          },
          mistake: "Using the total as the variable's coefficient. 'Three dollars per class' gives 3c; the total belongs alone on the other side of the equation.",
          checks: [
            {prompt: "A $7 fee plus $4 per visit totals $27. How many visits v occurred?", choices: ["5", "8.5", "20", "4"], answer: 0, explain: "Write 7 + 4v = 27. Subtract 7 to get 4v = 20, then divide by 4 to get v = 5."},
            {prompt: "Three identical boxes and a 2-pound crate weigh 20 pounds total. What is each box's weight b?", choices: ["6 pounds", "22/3 pounds", "18 pounds", "54 pounds"], answer: 0, explain: "The equation is 3b + 2 = 20. Subtract 2: 3b = 18. Divide by 3: b = 6 pounds."}
          ]
        })
      ]
    },

    "fdn-09": {
      title: "Exponents, roots, and coordinate-plane basics",
      domain: "foundation",
      intro: `<p><strong>Goal:</strong> Interpret exponents and roots as related operations and locate, read, and reason about points on the coordinate plane.</p>`,
      sections: [
        makeSection({
          heading: "Exponents describe repeated multiplication",
          meaning: "An exponent tells how many copies of a base are multiplied. In 3<sup>4</sup>, 3 is the base and 4 is the exponent.",
          concrete: `<p>Square model: 4<sup>2</sup> can be seen as a 4-by-4 array containing 16 unit squares.</p><p><span class="formula">[■■■■]<br>[■■■■]<br>[■■■■]<br>[■■■■]</span></p>`,
          symbols: `a<sup>n</sup> = a &times; a &times; ... &times; a, using n copies of a`,
          example1: {
            prompt: "Evaluate 2<sup>5</sup>.",
            steps: [
              "<strong>Identify base and exponent:</strong> the base is 2 and the exponent 5 requests five copies of 2.",
              "<strong>Expand:</strong> 2<sup>5</sup> = 2 &times; 2 &times; 2 &times; 2 &times; 2.",
              "<strong>Multiply step by step:</strong> 2 &times; 2 = 4; 4 &times; 2 = 8; 8 &times; 2 = 16; 16 &times; 2 = 32."
            ],
            answer: "32"
          },
          example2: {
            prompt: "Evaluate (&minus;3)<sup>2</sup> and &minus;3<sup>2</sup>.",
            steps: [
              "<strong>Use grouping:</strong> (&minus;3)<sup>2</sup> means (&minus;3)(&minus;3) = 9.",
              "<strong>Read the ungrouped form:</strong> in &minus;3<sup>2</sup>, the exponent applies to 3 before the leading negative.",
              "<strong>Follow operation order:</strong> &minus;3<sup>2</sup> = &minus;(3 &times; 3) = &minus;9.",
              "<strong>Compare:</strong> parentheses determine whether the negative sign is part of the base."
            ],
            answer: "9 and &minus;9"
          },
          guided: {
            prompt: "Evaluate 4<sup>3</sup>.",
            hint: "Write three copies of the base 4.",
            steps: ["4<sup>3</sup> = 4 &times; ___ &times; ___", "4 &times; 4 = ___", "___ &times; 4 = ___"]
          },
          mistake: "Multiplying the base by the exponent. For example, 2<sup>5</sup> is five factors of 2, not 2 &times; 5.",
          checks: [
            {prompt: "What is 5<sup>3</sup>?", choices: ["125", "15", "25", "8"], answer: 0, explain: "5<sup>3</sup> = 5 &times; 5 &times; 5 = 25 &times; 5 = 125."},
            {prompt: "A square has side length 7 units. What is its area?", choices: ["49 square units", "14 square units", "28 square units", "343 square units"], answer: 0, explain: "Square area is side &times; side, so 7<sup>2</sup> = 7 &times; 7 = 49 square units."}
          ]
        }),
        makeSection({
          heading: "Roots undo powers",
          meaning: "The principal square root asks which nonnegative number multiplied by itself gives the stated number. A cube root asks which number used as three equal factors gives the stated number.",
          concrete: `<p>A square made of 36 unit tiles has 6 rows and 6 columns. Its area is 36, so its side length is <span class="formula">&radic;36 = 6</span>.</p>`,
          symbols: `if a<sup>2</sup> = b and a is nonnegative, then &radic;b = a`,
          example1: {
            prompt: "Evaluate &radic;81.",
            steps: [
              "<strong>Interpret the symbol:</strong> ask for the nonnegative number whose square is 81.",
              "<strong>Test a known square:</strong> 9 &times; 9 = 81.",
              "<strong>Conclude:</strong> &radic;81 = 9. The radical symbol &radic; asks for the principal, or nonnegative, square root."
            ],
            answer: "9"
          },
          example2: {
            prompt: "Between which whole numbers does &radic;50 lie?",
            steps: [
              "<strong>Find nearby perfect squares:</strong> 7<sup>2</sup> = 49 and 8<sup>2</sup> = 64.",
              "<strong>Compare:</strong> 49 &lt; 50 &lt; 64.",
              "<strong>Apply square roots:</strong> 7 &lt; &radic;50 &lt; 8. Because 50 is just above 49, &radic;50 is just above 7."
            ],
            answer: "between 7 and 8"
          },
          guided: {
            prompt: "Between which whole numbers does &radic;30 lie?",
            hint: "Find consecutive perfect squares around 30.",
            steps: ["5<sup>2</sup> = ___ and 6<sup>2</sup> = ___", "___ &lt; 30 &lt; ___", "Therefore ___ &lt; &radic;30 &lt; ___"]
          },
          mistake: "Dividing by 2 to find a square root. A square root reverses squaring: search for a number times itself.",
          checks: [
            {prompt: "What is &radic;64?", choices: ["8", "32", "16", "4"], answer: 0, explain: "8 &times; 8 = 64, so the nonnegative square root is 8."},
            {prompt: "A square garden has area 121 square feet. What is one side length?", choices: ["11 feet", "60.5 feet", "22 feet", "14 feet"], answer: 0, explain: "Side length is the square root of area: &radic;121 = 11 because 11 &times; 11 = 121."}
          ]
        }),
        makeSection({
          heading: "Coordinates locate points on a plane",
          meaning: "The coordinate plane uses a horizontal x-axis and vertical y-axis. An ordered pair (x, y) gives a point's horizontal move first and vertical move second. The axes divide the plane into four regions called quadrants.",
          concrete: `<p>Textual plane:</p><pre>          +y
     II    |    I
           |
 -x -------+------- +x
           |
     III   |    IV
          -y</pre>`,
          symbols: `(x, y): move x units right if positive or left if negative; then y units up if positive or down if negative`,
          example1: {
            prompt: "Plot and describe the point (&minus;3, 2).",
            steps: [
              "<strong>Start at the origin:</strong> the origin is (0, 0), where the axes meet.",
              "<strong>Use x first:</strong> x = &minus;3 means move 3 units left.",
              "<strong>Use y second:</strong> y = 2 means move 2 units up.",
              "<strong>Name the region:</strong> negative x and positive y place the point in Quadrant II."
            ],
            answer: "3 left and 2 up, in Quadrant II"
          },
          example2: {
            prompt: "Find the horizontal distance between A(&minus;2, 4) and B(5, 4).",
            steps: [
              "<strong>Notice equal y-values:</strong> both points have y = 4, so the segment is horizontal.",
              "<strong>See the number-line movement:</strong> move from x = &minus;2 to 0, which is 2 units, then from 0 to 5, which is 5 units.",
              "<strong>Add distances:</strong> 2 + 5 = 7 units. Distance is nonnegative."
            ],
            answer: "7 units"
          },
          guided: {
            prompt: "Describe the point (4, &minus;3).",
            hint: "Read x first, then y.",
            steps: ["x = 4 means move 4 units ___.", "y = &minus;3 means move 3 units ___.", "Positive x and negative y place the point in Quadrant ___."]
          },
          mistake: "Reading (x, y) in the wrong order. Move horizontally using x first, then vertically using y.",
          checks: [
            {prompt: "In which quadrant is (&minus;5, &minus;2)?", choices: ["Quadrant III", "Quadrant I", "Quadrant II", "Quadrant IV"], answer: 0, explain: "Negative x moves left and negative y moves down, which is Quadrant III."},
            {prompt: "Points P(2, &minus;1) and Q(2, 6) share the same x-coordinate. What is the distance between them?", choices: ["7 units", "4 units", "8 units", "5 units"], answer: 0, explain: "The segment is vertical. From y = &minus;1 to 0 is 1 unit and from 0 to 6 is 6 units, for 7 units total."}
          ]
        })
      ]
    }
  });
}());
