/* Algebra mastery lessons: NES NT304 competencies 0004-0007 */
window.LESSONS = Object.assign(window.LESSONS || {}, {
  "alg-01": {
    title: "Relations vs functions; domain & range",
    domain: "algebra",
    intro: `<p><strong>Goal:</strong> Build the basic ideas of relation, function, domain, and range before applying advanced restrictions.</p>`,
    sections: [
      {
        heading: "Relations and functions in ordinary language",
        body: `
          <p><strong>Prerequisite reminder:</strong> An ordered pair (x,y) records an input first and its output second.</p>
          <p><strong>Plain meaning:</strong> A relation is any collection of input-output pairings. A function is a dependable rule: each allowed input has exactly one output. Different inputs may share an output.</p>
          <p><strong>See it:</strong> In a table, scan the x-column for a repeated x with different y-values. On a graph, a vertical line must never hit twice.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — table view</div>
            <p><em>Is {(-1,4),(0,2),(3,4)} a function?</em></p>
            <ol class="we-steps"><li>Read the inputs: -1, 0, 3.</li><li>No input repeats, so none can be assigned two outputs.</li><li>The repeated output 4 is harmless: two people can have the same age while each person still has one age.</li></ol>
            <p class="we-answer">Answer: Yes, it is a function.</p>
          </div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — graph/equation view</div>
            <p><em>Does x = y² define y as a function of x?</em></p>
            <ol class="we-steps"><li>Use x=9 as one vertical location.</li><li>Then y²=9, so y=3 or y=-3.</li><li>One input gives two outputs; graphically, the vertical line x=9 meets the sideways parabola twice.</li></ol>
            <p class="we-answer">Answer: No.</p>
          </div>
          <p><strong>Guided practice:</strong> Decide whether {(2,5),(2,7),(4,7)} is a function. <em>Hint:</em> circle repeated inputs; compare only their outputs.</p>
          <div class="callout"><strong>Common mistake:</strong> Rejecting repeated y-values. Only one x paired with different y-values breaks a function.</div>
        `,
        checks: [
          { prompt: "Which relation is a function?", choices: ["{(1,3),(2,3),(4,5)}", "{(1,3),(1,5)}", "{(0,2),(0,-2)}", "{(4,1),(4,1),(4,2)}"], answer: 0, explain: "The first relation gives each input one output; repeating output 3 is allowed." },
          { prompt: "Which graph description fails the function test?", choices: ["A vertical line meets it twice", "A horizontal line meets it twice", "It crosses the x-axis twice", "Two inputs share one output"], answer: 0, explain: "Two hits by one vertical line mean one x has two y-values." }
        ]
      },
      {
        heading: "Basic domain and range",
        body: `
          <p><strong>Prerequisite reminder:</strong> The first coordinate is x; the second is y.</p>
          <p><strong>Plain meaning:</strong> Domain is the set of inputs a relation uses. Range is the set of outputs it produces.</p>
          <p><strong>See it:</strong> From a table, collect x-values for domain and y-values for range, listing repeats once. On a graph, domain is the left-to-right shadow and range is the bottom-to-top shadow.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — list view</div>
            <p><em>Find domain and range of {(-2,1),(0,1),(5,4)}.</em></p>
            <ol class="we-steps"><li>Collect first coordinates: -2, 0, 5.</li><li>Collect second coordinates: 1, 1, 4.</li><li>A set lists 1 once, so the range is {1,4}.</li></ol>
            <p class="we-answer">Answer: domain {-2,0,5}; range {1,4}.</p>
          </div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — formula/graph view</div>
            <p><em>Find domain and range of y=√x.</em></p>
            <ol class="we-steps"><li>A real square root needs x≥0, so the graph starts at x=0 and continues right.</li><li>Principal square roots are nonnegative, so y≥0.</li><li>Every nonnegative x and y occurs: 0→0, 1→1, 4→2, and so on.</li></ol>
            <p class="we-answer">Answer: domain [0,∞); range [0,∞).</p>
          </div>
          <p><strong>Guided practice:</strong> For {(-3,2),(1,5),(4,2)}, start: domain = {-3, __, __}; range = {2, __}.</p>
          <div class="callout"><strong>Common mistake:</strong> Reading interval endpoints from axes backward; domain belongs to x and range belongs to y.</div>
        `,
        checks: [
          { prompt: "For {(1,-2),(3,0),(5,-2)}, what is the range?", choices: ["{-2,0}", "{1,3,5}", "{-2,-2,0}", "[-2,0]"], answer: 0, explain: "The outputs are -2, 0, -2; as a set, {-2,0}." },
          { prompt: "A graph extends from x=-4 (included) forever right and has y-values at most 6. Which pair is correct?", choices: ["Domain [-4,∞), range (-∞,6]", "Domain (-∞,6], range [-4,∞)", "Domain (-4,∞), range (-∞,6)", "Domain all reals, range y=6"], answer: 0, explain: "Left-to-right gives x≥-4; bottom-to-top gives y≤6." }
        ]
      },
      {
        heading: "Advanced domain: denominators, roots, and logarithms",
        body: `
          <p><strong>Prerequisite reminder:</strong> An input belongs to the domain only when every operation in the formula is defined.</p>
          <p><strong>Plain meaning:</strong> Denominators cannot be zero, even roots need what is inside to be at least zero, and logarithms accept only positive arguments.</p>
          <p><strong>See it:</strong> Write each restriction as a number-line condition, then shade only the overlap.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — restriction checklist</div>
            <p><em>Find the domain of √(x+4)/(x-1).</em></p>
            <ol class="we-steps"><li>Root: x+4≥0, so x≥-4.</li><li>Denominator: x-1≠0, so x≠1.</li><li>On the number line, keep x≥-4 but punch out 1.</li></ol>
            <p class="we-answer">Answer: [-4,1) ∪ (1,∞).</p>
          </div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — overlapping restrictions</div>
            <p><em>Find the domain of log(x-3)+√(9-x).</em></p>
            <ol class="we-steps"><li>Log: x-3&gt;0, so x&gt;3; 3 is open because log 0 is undefined.</li><li>Root: 9-x≥0, so x≤9; 9 is allowed.</li><li>The overlap on a number line is greater than 3 through 9.</li></ol>
            <p class="we-answer">Answer: (3,9].</p>
          </div>
          <p><strong>Guided practice:</strong> For log(7-x)/√(x+1), write: 7-x&gt;0 and, because the root is downstairs, x+1&gt;0. Now overlap them.</p>
          <div class="callout"><strong>Common mistake:</strong> Using ≥0 for a log argument or for a square root in a denominator; both require strict positivity here.</div>
        `,
        checks: [
          { prompt: "What is the domain of √(x-5)/(x+2)?", choices: ["[5,∞)", "(5,∞)", "[-2,∞)", "All x except -2"], answer: 0, explain: "x≥5 already excludes -2, so no additional cut is needed." },
          { prompt: "What is the domain of log(7-x)/√(x+1)?", choices: ["(-1,7)", "[-1,7)", "(-1,7]", "[-1,7]"], answer: 0, explain: "The denominator requires x>-1 and the log requires x<7." }
        ]
      },
      {
        heading: "Advanced range of quadratics",
        body: `
          <p><strong>Prerequisite reminder:</strong> Range means possible y-values, and any real square is at least zero.</p>
          <p><strong>Plain meaning:</strong> A quadratic has a lowest or highest point called its vertex. That point sets the endpoint of its range.</p>
          <p><strong>See it:</strong> In y=a(x-h)²+k, the vertex is (h,k). If a&gt;0 the U opens up; if a&lt;0 it opens down.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — square-value view</div>
            <p><em>Find the range of y=(x-2)²+3.</em></p>
            <ol class="we-steps"><li>(x-2)² can be 0 but never negative.</li><li>Adding 3 makes the smallest output 3, reached at x=2.</li><li>Larger squares make every output above 3, matching an upward U.</li></ol>
            <p class="we-answer">Answer: [3,∞).</p>
          </div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — graph-direction view</div>
            <p><em>Find the range of y=-2(x+1)²+5.</em></p>
            <ol class="we-steps"><li>The vertex is (-1,5).</li><li>The negative coefficient turns the U downward, so 5 is a maximum.</li><li>The arms continue downward without bound.</li></ol>
            <p class="we-answer">Answer: (-∞,5].</p>
          </div>
          <p><strong>Guided practice:</strong> For y=3(x-4)²-7, identify k=-7 and ask whether a=3 opens up or down.</p>
          <div class="callout"><strong>Common mistake:</strong> Using the vertex's x-coordinate as a range endpoint; range uses the y-coordinate k.</div>
        `,
        checks: [
          { prompt: "What is the range of y=(x+3)²-2?", choices: ["[-2,∞)", "[-3,∞)", "(-∞,-2]", "All reals"], answer: 0, explain: "The upward-opening parabola has minimum y=-2." },
          { prompt: "What is the range of y=-4(x-1)²+9?", choices: ["(-∞,9]", "[9,∞)", "(-∞,1]", "All reals"], answer: 0, explain: "The graph opens down and has maximum y=9." }
        ]
      }
    ]
  },

  "alg-02": {
    title: "Function operations, composition, inverses",
    domain: "algebra",
    intro: `<p><strong>Goal:</strong> Treat functions as machines, connect them safely, and understand an inverse as an undoing machine.</p>`,
    sections: [
      {
        heading: "Function operations",
        body: `
          <p><strong>Prerequisite reminder:</strong> f(x) names the output of machine f when input x enters.</p>
          <p><strong>Plain meaning:</strong> To add, subtract, multiply, or divide two functions, send the same input through both and combine their outputs.</p>
          <p><strong>See it:</strong> Draw two side-by-side boxes: x→f→f(x) and x→g→g(x), then join the outputs with +, -, ×, or ÷.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — numerical view</div><p><em>If f(x)=x+4 and g(x)=2x, find (f+g)(3).</em></p><ol class="we-steps"><li>Machine f sends 3 to 7.</li><li>Machine g sends 3 to 6.</li><li>Add the outputs: 7+6=13.</li></ol><p class="we-answer">Answer: 13.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — algebra/domain view</div><p><em>If f=x²-4 and g=x-2, find f/g.</em></p><ol class="we-steps"><li>Form (x²-4)/(x-2).</li><li>Factor and cancel to get x+2.</li><li>The original g-output is zero at x=2, so the quotient still excludes 2.</li></ol><p class="we-answer">Answer: x+2, x≠2.</p></div>
          <p><strong>Guided practice:</strong> With f=x² and g=x+1, begin (f-g)(x)=x²-(x+1). Distribute the minus.</p>
          <div class="callout"><strong>Common mistake:</strong> Losing the original denominator restriction after cancellation.</div>
        `,
        checks: [
          { prompt: "If f(x)=x+2 and g(x)=3x, what is (f+g)(2)?", choices: ["10", "8", "24", "6"], answer: 0, explain: "f(2)=4 and g(2)=6; 4+6=10." },
          { prompt: "For f=x²-9 and g=x+3, which is f/g?", choices: ["x-3, x≠-3", "x-3 for all x", "x+3, x≠-3", "x²-6"], answer: 0, explain: "Cancel x+3, but retain x≠-3 from the original quotient." }
        ]
      },
      {
        heading: "Composition as a machine pipeline",
        body: `
          <p><strong>Prerequisite reminder:</strong> A machine's output can become another machine's input.</p>
          <p><strong>Plain meaning:</strong> Composition connects machines in a pipeline. In f(g(x)), g runs first and f runs second. Only after this picture is clear do we abbreviate it as (f∘g)(x).</p>
          <p><strong>See it:</strong> x → [g] → g(x) → [f] → f(g(x)). Reversing the boxes usually changes the result.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — trace one input</div><p><em>f doubles then adds 1; g squares. Compare both orders at 3.</em></p><ol class="we-steps"><li>g then f: 3→9→19.</li><li>f then g: 3→7→49.</li><li>Thus f(g(3))=19 while g(f(3))=49.</li></ol><p class="we-answer">Answer: 19 and 49.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — formula pipeline</div><p><em>f(x)=x-4, g(x)=√(x+5). Find g(f(x)).</em></p><ol class="we-steps"><li>First box outputs x-4.</li><li>Feed that whole output into g: √((x-4)+5)=√(x+1).</li><li>The radicand needs x+1≥0, so x≥-1.</li></ol><p class="we-answer">Answer: √(x+1), domain [-1,∞).</p></div>
          <p><strong>Guided practice:</strong> If f(x)=x+2 and g(x)=3x, sketch x→f→g; partial setup: g(f(x))=3(__).</p>
          <div class="callout"><strong>Common mistake:</strong> Reading f(g(x)) left to right; the inner machine g acts first.</div>
        `,
        checks: [
          { prompt: "If f(x)=x+3 and g(x)=2x², find g(f(2)).", choices: ["50", "11", "20", "13"], answer: 0, explain: "The pipeline is 2→5→2(5²)=50." },
          { prompt: "If f(x)=3x-2 and g(x)=x²+1, solve f(g(x))=10.", choices: ["x=±√3", "x=±3", "x=3", "x=√3"], answer: 0, explain: "f(g(x))=3(x²+1)-2=3x²+1; set equal to 10." }
        ]
      },
      {
        heading: "Inverse functions as undoing steps",
        body: `
          <p><strong>Prerequisite reminder:</strong> Inverse operations undo one another: +6 is undone by -6; ×3 by ÷3.</p>
          <p><strong>Plain meaning:</strong> An inverse machine reverses both the operations and their order, returning each output to its original input. Only one-to-one functions can have inverse functions on their full domains.</p>
          <p><strong>See it:</strong> If x→×3→-6 gives f(x), then f(x)→+6→÷3 gives x. Its graph is the original reflected across y=x.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — undoing recipe</div><p><em>Find the inverse of f(x)=3x-6.</em></p><ol class="we-steps"><li>The forward order is multiply by 3, then subtract 6.</li><li>Undo backward: add 6, then divide by 3.</li><li>Therefore f⁻¹(x)=(x+6)/3; checking f⁻¹(f(4))=f⁻¹(6)=4.</li></ol><p class="we-answer">Answer: (x+6)/3.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — swap-and-solve view</div><p><em>Find the inverse of f(x)=(x+2)/(x-1).</em></p><ol class="we-steps"><li>Write y=(x+2)/(x-1), then swap input/output: x=(y+2)/(y-1).</li><li>Clear the denominator: xy-x=y+2; gather y-terms: xy-y=x+2.</li><li>Factor y(x-1)=x+2, giving y=(x+2)/(x-1). This function happens to undo itself.</li></ol><p class="we-answer">Answer: f⁻¹(x)=(x+2)/(x-1).</p></div>
          <p><strong>Guided practice:</strong> For f(x)=2x+5, write the backward recipe: subtract __, then divide by __.</p>
          <div class="callout"><strong>Common mistake:</strong> Undoing in the forward order or mistaking f⁻¹(x) for 1/f(x).</div>
        `,
        checks: [
          { prompt: "What is the inverse of f(x)=(x-4)/2?", choices: ["2x+4", "2x-4", "(x+4)/2", "x/2+4"], answer: 0, explain: "Undo divide by 2 with ×2, then undo -4 with +4." },
          { prompt: "Which g verifies as the inverse of f(x)=4x-8?", choices: ["g(x)=(x+8)/4", "g(x)=(x-8)/4", "g(x)=4x+8", "g(x)=x/4-8"], answer: 0, explain: "f(g(x))=4[(x+8)/4]-8=x." }
        ]
      }
    ]
  },

  "alg-03": {
    title: "Linear functions, systems & inequalities",
    domain: "algebra",
    intro: `<p><strong>Goal:</strong> Start algebra from unknowns and balance, then build lines, systems, and inequalities without assuming function fluency.</p>`,
    sections: [
      {
        heading: "Unknowns, balance, and one- and two-step equations",
        body: `
          <p><strong>Prerequisite reminder:</strong> An equals sign means both sides have the same value; a letter is a number not yet known.</p>
          <p><strong>Plain meaning:</strong> Solving finds the number that makes the statement true. Keep the equation balanced by doing the same legal operation to both sides.</p>
          <p><strong>See it:</strong> Picture a balance scale. Remove equal weights from both pans, then split both pans into the same number of groups.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — balance model</div><p><em>Solve x+7=12.</em></p><ol class="we-steps"><li>x has seven extra units beside it.</li><li>Remove 7 from both pans: x+7-7=12-7.</li><li>The balance remains level and x=5; check 5+7=12.</li></ol><p class="we-answer">Answer: x=5.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — reverse-operations view</div><p><em>Solve 3x-4=17.</em></p><ol class="we-steps"><li>Undo the last operation first: add 4 to both sides, giving 3x=21.</li><li>Three equal x-groups total 21, so divide both sides by 3.</li><li>x=7; check 3(7)-4=17.</li></ol><p class="we-answer">Answer: x=7.</p></div>
          <p><strong>Guided practice:</strong> Solve 2x+5=19. Partial setup: 2x=19-__; then x=__/2.</p>
          <div class="callout"><strong>Common mistake:</strong> Changing only one side or moving a term by memorized sign-changing without understanding the matching operation.</div>
        `,
        checks: [
          { prompt: "Solve x-9=4.", choices: ["13", "-5", "5", "-13"], answer: 0, explain: "Add 9 to both sides: x=13." },
          { prompt: "A fee model gives 5x+8=43. What is x?", choices: ["7", "10.2", "35", "5"], answer: 0, explain: "Subtract 8 to get 5x=35, then divide by 5." }
        ]
      },
      {
        heading: "Slope from a table and equations of lines",
        body: `
          <p><strong>Prerequisite reminder:</strong> A table pairs x-values with y-values; no function vocabulary is needed to compare changes.</p>
          <p><strong>Plain meaning:</strong> Slope is how much y changes for each one-unit change in x: rise/run = Δy/Δx. Constant slope makes a straight line.</p>
          <p><strong>See it:</strong> Add columns Δx and Δy to a table. On a graph, the same ratio is a step right followed by a step up or down.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — table view</div><p><em>For points (1,4),(3,10),(5,16), find slope and equation.</em></p><ol class="we-steps"><li>Each table step has Δx=2 and Δy=6, so m=6/2=3.</li><li>Use y=mx+b with (1,4): 4=3(1)+b, so b=1.</li><li>The rule y=3x+1 also produces 10 and 16, confirming it.</li></ol><p class="we-answer">Answer: slope 3; y=3x+1.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — geometric relationship</div><p><em>Find a line perpendicular to y=-2x+5 through (4,1).</em></p><ol class="we-steps"><li>The given slope -2 means down 2 for right 1.</li><li>A 90° turn swaps the steps and reverses one direction: perpendicular slope 1/2.</li><li>Use y-1=(1/2)(x-4), then simplify to y=(1/2)x-1.</li></ol><p class="we-answer">Answer: y=(1/2)x-1.</p></div>
          <p><strong>Guided practice:</strong> Table x:0,2,4; y:1,5,9. Compute Δy/Δx=__/__ before finding b from x=0.</p>
          <div class="callout"><strong>Common mistake:</strong> Computing Δy/Δx in one order on top and the opposite order below.</div>
        `,
        checks: [
          { prompt: "A table has x: 0,3,6 and y: 2,8,14. What is the slope?", choices: ["2", "6", "1/2", "3"], answer: 0, explain: "Each step changes y by 6 while x changes by 3; 6/3=2." },
          { prompt: "A line parallel to y=(3/4)x-2 passes through (8,1). What is it?", choices: ["y=(3/4)x-5", "y=(3/4)x+1", "y=-(4/3)x-5", "y=(3/4)x-2"], answer: 0, explain: "Parallel slope is 3/4; y-1=(3/4)(x-8) simplifies to y=(3/4)x-5." }
        ]
      },
      {
        heading: "Systems as shared solutions",
        body: `
          <p><strong>Prerequisite reminder:</strong> A solution must make every equation in the system true.</p>
          <p><strong>Plain meaning:</strong> A system asks where two conditions agree. On a graph, that is an intersection; algebraically, substitution replaces an equal quantity and elimination cancels one unknown.</p>
          <p><strong>See it:</strong> Two crossing lines give one ordered pair; the same line gives infinitely many; parallel distinct lines give none.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — elimination/intersection</div><p><em>Solve 2x+y=7 and x-y=2.</em></p><ol class="we-steps"><li>Add equations; +y and -y cancel, giving 3x=9.</li><li>x=3. Put it into x-y=2: 3-y=2, so y=1.</li><li>(3,1) satisfies both and is the lines' intersection.</li></ol><p class="we-answer">Answer: (3,1).</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — substitution/special cases</div><p><em>Compare 3x+6y=12 and x+2y=4.</em></p><ol class="we-steps"><li>Multiply the second equation by 3.</li><li>It becomes exactly 3x+6y=12, the first equation.</li><li>Both describe the same line, so every point on it solves both.</li></ol><p class="we-answer">Answer: infinitely many solutions.</p></div>
          <p><strong>Guided practice:</strong> For y=2x-3 and 3x+2y=8, substitute: 3x+2(__)=8.</p>
          <div class="callout"><strong>Common mistake:</strong> Stopping after finding x instead of back-substituting for y, or calling proportional left sides “same line” without checking constants.</div>
        `,
        checks: [
          { prompt: "Solve x+y=9 and x-y=3.", choices: ["(6,3)", "(3,6)", "(9,3)", "(6,-3)"], answer: 0, explain: "Add to get 2x=12; then y=3." },
          { prompt: "For what k do 6x+9y=15 and 2x+3y=k represent the same line?", choices: ["5", "15", "3", "45"], answer: 0, explain: "Multiplying the second equation by 3 requires 3k=15." }
        ]
      },
      {
        heading: "Inequalities and solution regions",
        body: `
          <p><strong>Prerequisite reminder:</strong> &lt; and &gt; compare sizes; an inequality usually has many solutions.</p>
          <p><strong>Plain meaning:</strong> Solve as with equations, but multiplying or dividing by a negative reverses order. On a graph, shade every point that works.</p>
          <p><strong>See it:</strong> On a number line use an open dot for &lt; or &gt;, closed for ≤ or ≥. For two variables, a boundary line divides the plane; test one point to choose a side.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — number line</div><p><em>Solve -3x+4≤19.</em></p><ol class="we-steps"><li>Subtract 4: -3x≤15.</li><li>Divide by -3 and reverse the sign: x≥-5 because multiplication by a negative reverses order.</li><li>Use a closed dot at -5 and shade right; x=0 checks.</li></ol><p class="we-answer">Answer: x≥-5.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — coordinate-plane region</div><p><em>Graph y&gt;2x-1.</em></p><ol class="we-steps"><li>Draw boundary y=2x-1 using points (0,-1) and (1,1).</li><li>Use a dashed line because equality is not included.</li><li>Test (0,0): 0&gt;-1 is true, so shade the side containing (0,0), above the line.</li></ol><p class="we-answer">Answer: dashed boundary y=2x-1; shade above.</p></div>
          <p><strong>Guided practice:</strong> Solve -4x&gt;12. Before dividing, note the divisor is negative, so write x __ -3.</p>
          <div class="callout"><strong>Common mistake:</strong> Flipping for addition/subtraction, or forgetting to flip for multiplication/division by a negative.</div>
        `,
        checks: [
          { prompt: "Solve -4x-5>11.", choices: ["x<-4", "x>-4", "x<4", "x>4"], answer: 0, explain: "-4x>16; divide by -4 and reverse." },
          { prompt: "For y≤-x+2, how is the graph made?", choices: ["Solid boundary, shade below", "Dashed boundary, shade below", "Solid boundary, shade above", "Dashed boundary, shade above"], answer: 0, explain: "≤ includes the line, and smaller y-values lie below it." }
        ]
      }
    ]
  },

  "alg-04": {
    title: "Quadratic functions & equations",
    domain: "algebra",
    intro: `<p><strong>Goal:</strong> Understand quadratic shape, complete squares in a safe sequence, solve equations, and read root behavior visually.</p>`,
    sections: [
      {
        heading: "Completing the square: first a=1, then a≠1",
        body: `
          <p><strong>Prerequisite reminder:</strong> (x+p)²=x²+2px+p², and adding then subtracting the same number changes nothing.</p>
          <p><strong>Plain meaning:</strong> Completing the square rebuilds a quadratic as a shifted square so its vertex becomes visible.</p>
          <p><strong>See it:</strong> x²+bx is an almost-square area; half of b supplies the missing side, and (b/2)² supplies the missing corner.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — leading coefficient 1</div><p><em>Rewrite y=x²-6x+5.</em></p><ol class="we-steps"><li>Half of -6 is -3; square it to get 9.</li><li>Add and subtract 9: y=x²-6x+9-9+5.</li><li>The square is (x-3)² and constants give -4, so the vertex is (3,-4).</li></ol><p class="we-answer">Answer: y=(x-3)²-4.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — scaffold for a≠1</div><p><em>Rewrite y=2x²-12x+7.</em></p><ol class="we-steps"><li>Factor 2 from x-terms: 2(x²-6x)+7.</li><li>Complete the inside square: 2[(x-3)²-9]+7.</li><li>Distribute the outside 2: 2(x-3)²-18+7=2(x-3)²-11.</li></ol><p class="we-answer">Answer: y=2(x-3)²-11.</p></div>
          <p><strong>Guided practice:</strong> For x²+8x+10, half 8, square it, then write x²+8x+__-__+10.</p>
          <div class="callout"><strong>Common mistake:</strong> When a≠1, completing before factoring a from both x² and x terms, or forgetting that a multiplies the correction.</div>
        `,
        checks: [
          { prompt: "What is the vertex of y=x²+8x+10?", choices: ["(-4,-6)", "(4,-6)", "(-4,6)", "(8,10)"], answer: 0, explain: "y=(x+4)²-6." },
          { prompt: "What is the vertex of y=-3x²+12x-5?", choices: ["(2,7)", "(-2,7)", "(2,-7)", "(4,7)"], answer: 0, explain: "-3(x²-4x)-5=-3[(x-2)²-4]-5=-3(x-2)²+7." }
        ]
      },
      {
        heading: "Solving quadratic equations",
        body: `
          <p><strong>Prerequisite reminder:</strong> If AB=0, then A=0 or B=0.</p>
          <p><strong>Plain meaning:</strong> Solutions are x-intercepts. Factoring is efficient for friendly factors; the quadratic formula works for every ax²+bx+c=0.</p>
          <p><strong>See it:</strong> A parabola can cross the x-axis twice, touch once, or miss it. Algebra finds those crossing inputs.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — factor view</div><p><em>Solve x²-5x+6=0.</em></p><ol class="we-steps"><li>Find numbers multiplying to 6 and adding to -5: -2 and -3.</li><li>Write (x-2)(x-3)=0.</li><li>Each factor may be zero, giving x=2 or x=3, the two intercepts.</li></ol><p class="we-answer">Answer: 2, 3.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — formula view</div><p><em>Solve 2x²+3x-4=0.</em></p><ol class="we-steps"><li>Identify a=2,b=3,c=-4.</li><li>Substitute into x=(-b±√(b²-4ac))/(2a): (-3±√(9+32))/4.</li><li>Since 41 is not a square, keep the exact radical.</li></ol><p class="we-answer">Answer: x=(-3±√41)/4.</p></div>
          <p><strong>Guided practice:</strong> For x²+2x-15=0, seek two numbers with product -15 and sum 2.</p>
          <div class="callout"><strong>Common mistake:</strong> Using the formula before setting the equation equal to zero or dropping the ±.</div>
        `,
        checks: [
          { prompt: "Solve x²+2x-15=0.", choices: ["-5 or 3", "5 or -3", "-5 or -3", "5 or 3"], answer: 0, explain: "(x+5)(x-3)=0." },
          { prompt: "Solve -x²+4x+1=0.", choices: ["2±√5", "-2±√5", "4±√5", "2±√20"], answer: 0, explain: "The formula simplifies from [-4±√20]/-2 to 2±√5 as a solution set." }
        ]
      },
      {
        heading: "Discriminant as a visual predictor",
        body: `
          <p><strong>Prerequisite reminder:</strong> The square-root part of the quadratic formula is √(b²-4ac).</p>
          <p><strong>Plain meaning:</strong> The discriminant Δ=b²-4ac predicts whether the parabola crosses, touches, or misses the x-axis.</p>
          <p><strong>See it:</strong> Δ&gt;0 gives two crossings; Δ=0 gives one tangent touch; Δ&lt;0 asks for a real square root of a negative number, so there are no real crossings.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — graph prediction</div><p><em>How many real roots has 2x²-4x+5=0?</em></p><ol class="we-steps"><li>Compute Δ=(-4)²-4(2)(5)=16-40=-24.</li><li>Negative means the formula has √(-24), not real.</li><li>Graphically, the parabola misses the x-axis.</li></ol><p class="we-answer">Answer: zero real roots.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — parameter view</div><p><em>When does x²+6x+k=0 touch once?</em></p><ol class="we-steps"><li>Touch once means Δ=0.</li><li>36-4k=0, so k=9.</li><li>Then x²+6x+9=(x+3)², confirming a repeated root.</li></ol><p class="we-answer">Answer: k=9.</p></div>
          <p><strong>Guided practice:</strong> For x²-4x+k, write Δ=16-4k and set it &gt;0 for two crossings.</p>
          <div class="callout"><strong>Common mistake:</strong> Reversing the sign meanings; negative Δ means no real roots, not two.</div>
        `,
        checks: [
          { prompt: "How many real roots has 3x²+2x+5=0?", choices: ["0", "1", "2", "Infinitely many"], answer: 0, explain: "Δ=4-60=-56." },
          { prompt: "For which k does x²-4x+k=0 have two distinct real roots?", choices: ["k<4", "k>4", "k=4", "k≤4"], answer: 0, explain: "16-4k>0 implies k<4." }
        ]
      },
      {
        heading: "Quadratic inequalities with visual sign charts",
        body: `
          <p><strong>Prerequisite reminder:</strong> Factored expressions change sign only at their zeros.</p>
          <p><strong>Plain meaning:</strong> A quadratic inequality asks where the graph sits above or below the x-axis.</p>
          <p><strong>See it:</strong> Put roots on a number line, label each interval + or - by testing one point, then select the requested signs.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — sign chart</div><p><em>Solve x²-2x-8≤0.</em></p><ol class="we-steps"><li>Factor (x-4)(x+2); roots -2 and 4 make three intervals.</li><li>Test -3,0,5: signs are +,-,+.</li><li>Select negative or zero, including roots because of ≤.</li></ol><p class="we-answer">Answer: [-2,4].</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — graph view</div><p><em>Solve -x²+x+6≥0.</em></p><ol class="we-steps"><li>Factor -(x-3)(x+2), with intercepts -2 and 3.</li><li>The downward parabola lies above the axis between its intercepts.</li><li>Include both intercepts for ≥0.</li></ol><p class="we-answer">Answer: [-2,3].</p></div>
          <p><strong>Guided practice:</strong> For (x-1)(x-5)&gt;0, mark 1 and 5 and test x=0,3,6.</p>
          <div class="callout"><strong>Common mistake:</strong> Choosing “between” automatically; the leading sign and requested inequality determine inside versus outside.</div>
        `,
        checks: [
          { prompt: "Solve x²-x-6>0.", choices: ["x<-2 or x>3", "-2<x<3", "x<-2 or x≥3", "x>3 only"], answer: 0, explain: "(x-3)(x+2) is positive outside the roots." },
          { prompt: "Solve -2x²+8x-6<0.", choices: ["x<1 or x>3", "1<x<3", "x≤1 or x≥3", "x<1 or x≥3"], answer: 0, explain: "Divide by -2 and reverse: (x-1)(x-3)>0, outside with strict endpoints." }
        ]
      }
    ]
  },

  "alg-05": {
    title: "Higher-order polynomials",
    domain: "algebra",
    intro: `<p><strong>Goal:</strong> Read polynomial graphs, divide explicitly, find rational roots, and connect multiplicity to graph behavior.</p>`,
    sections: [
      {
        heading: "Degree, leading term, and end behavior",
        body: `
          <p><strong>Prerequisite reminder:</strong> The leading term has the greatest exponent and dominates for very large |x|.</p>
          <p><strong>Plain meaning:</strong> Degree tells whether graph ends agree or oppose; the leading coefficient tells where the right end goes.</p>
          <p><strong>See it:</strong> Even degree: both ends same. Odd: opposite. Positive leading coefficient: right end up; negative: right end down.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — rule view</div><p><em>Describe 3x⁴-x+2.</em></p><ol class="we-steps"><li>Leading term 3x⁴ has even degree.</li><li>Even means same-direction ends.</li><li>Positive means the right rises, so both rise.</li></ol><p class="we-answer">Answer: both ends approach +∞.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — large-input view</div><p><em>Describe -2x⁵+3x²-1.</em></p><ol class="we-steps"><li>For huge positive x, -2x⁵ is huge negative, so right falls.</li><li>Degree 5 is odd, so the left does the opposite.</li><li>Thus left rises and right falls.</li></ol><p class="we-answer">Answer: left +∞; right -∞.</p></div>
          <p><strong>Guided practice:</strong> For -4x⁶+…, identify “even” and “negative,” then combine the two rules.</p>
          <div class="callout"><strong>Common mistake:</strong> Using the constant term instead of the leading term.</div>
        `,
        checks: [
          { prompt: "What is the end behavior of -4x⁶+2x³-7?", choices: ["Both down", "Both up", "Left down/right up", "Left up/right down"], answer: 0, explain: "Even degree and negative leading coefficient give both ends down." },
          { prompt: "What is the end behavior of -5x⁷+2x²?", choices: ["Left up, right down", "Left down, right up", "Both up", "Both down"], answer: 0, explain: "The leading term has odd degree, so the ends oppose; its negative coefficient makes the right end fall." }
        ]
      },
      {
        heading: "Factor theorem and synthetic division layout",
        body: `
          <p><strong>Prerequisite reminder:</strong> If x=c is a root, then x-c is zero there.</p>
          <p><strong>Plain meaning:</strong> p(c)=0 means x-c divides evenly. Synthetic division is a compact divide-bring-multiply-add procedure.</p>
          <p><strong>See it:</strong> Put c outside and every coefficient inside, including 0 for missing powers. Bring down the first coefficient; repeatedly multiply by c and add down. The last entry is the remainder.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — explicit layout</div><p><em>Divide x³-x²-x-2 by x-2.</em></p><ol class="we-steps"><li>Layout: <code>2 | 1  -1  -1  -2</code>. Bring down 1.</li><li>Multiply/add: 1·2=2, so -1+2=1; then 1·2=2, so -1+2=1.</li><li>Then 1·2=2 and -2+2=0. Bottom row 1,1,1,0 means quotient x²+x+1, remainder 0.</li></ol><p class="we-answer">Answer: quotient x²+x+1, remainder 0.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — factor theorem view</div><p><em>If x-3 factors x³-2x²+kx-12, find k.</em></p><ol class="we-steps"><li>x-3 corresponds to c=3, so require p(3)=0.</li><li>27-18+3k-12=-3+3k.</li><li>Set -3+3k=0, giving k=1.</li></ol><p class="we-answer">Answer: k=1.</p></div>
          <p><strong>Guided practice:</strong> For division by x+2, place __ outside. For x³+0x²-5x+6, write all coefficients: 1,__, -5,6.</p>
          <div class="callout"><strong>Common mistake:</strong> Putting +2 outside for factor x+2, or omitting a zero coefficient and shifting columns.</div>
        `,
        checks: [
          { prompt: "Which value tests whether x+1 factors p(x)?", choices: ["p(-1)", "p(1)", "p(0)", "p(2)"], answer: 0, explain: "Set x+1=0, giving x=-1." },
          { prompt: "Synthetic division of x³-4x+3 by x-1 uses which setup?", choices: ["1 | 1, 0, -4, 3", "-1 | 1, 0, -4, 3", "1 | 1, -4, 3", "1 | 3, -4, 0, 1"], answer: 0, explain: "The root is 1, and the missing x² term requires coefficient 0." }
        ]
      },
      {
        heading: "Rational root theorem",
        body: `
          <p><strong>Prerequisite reminder:</strong> Factors divide a number evenly; a rational number is p/q in lowest terms.</p>
          <p><strong>Plain meaning:</strong> Any rational root must have numerator dividing the constant and denominator dividing the leading coefficient. These are candidates, not promises.</p>
          <p><strong>See it:</strong> Make a two-row list: ± factors of constant over ± factors of leading coefficient; reduce duplicates, then test.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — monic list</div><p><em>List candidates for x³-4x²-7x+10 and find one root.</em></p><ol class="we-steps"><li>Leading coefficient 1 makes denominator 1.</li><li>Constant factors give ±1,±2,±5,±10.</li><li>p(1)=1-4-7+10=0, so 1 is an actual root.</li></ol><p class="we-answer">Answer: candidates ±1,±2,±5,±10; root 1.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — fraction list</div><p><em>Is 3/2 a candidate for 2x³+3x²-8x+3?</em></p><ol class="we-steps"><li>Numerator 3 divides constant 3.</li><li>Denominator 2 divides leading coefficient 2.</li><li>Therefore 3/2 belongs on the test list, though it is not yet proven a root.</li></ol><p class="we-answer">Answer: Yes, it is a candidate.</p></div>
          <p><strong>Guided practice:</strong> For 3x³+…-4, numerator factors are 1,2,4 and denominator factors are 1,__.</p>
          <div class="callout"><strong>Common mistake:</strong> Treating every listed candidate as a root without substitution or division.</div>
        `,
        checks: [
          { prompt: "Which is a possible rational root of x³+2x²-11x-12?", choices: ["4", "5", "7", "10"], answer: 0, explain: "For a monic polynomial, candidates divide 12; only 4 does." },
          { prompt: "Which is NOT a candidate for 3x³-5x²+x-4?", choices: ["3/4", "4/3", "2/3", "1/3"], answer: 0, explain: "A denominator must divide 3; 4 does not." }
        ]
      },
      {
        heading: "Multiplicity in plain graph language",
        body: `
          <p><strong>Prerequisite reminder:</strong> An exponent on a factor says how many times that factor repeats.</p>
          <p><strong>Plain meaning:</strong> At an odd-multiplicity root the graph passes through the road (x-axis); at an even-multiplicity root it touches the road and turns around. Repetition makes the graph flatter nearby.</p>
          <p><strong>See it:</strong> Multiplicity 1 crosses normally, 2 bounces, 3 crosses with an S-shaped flattening, 4 bounces flatter.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — factors to graph</div><p><em>Describe (x-2)³(x+1)².</em></p><ol class="we-steps"><li>x=2 has multiplicity 3, which is odd.</li><li>It crosses there and flattens because 3&gt;1.</li><li>x=-1 has multiplicity 2, so it touches and turns.</li></ol><p class="we-answer">Answer: flattened cross at 2; bounce at -1.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — graph to factors</div><p><em>A degree-5 graph touches at 1 and crosses flatly at -3. Give a form.</em></p><ol class="we-steps"><li>Touching needs an even multiplicity; choose 2: (x-1)².</li><li>Three degrees remain; odd 3 gives a flat crossing: (x+3)³.</li><li>Exponents total 5.</li></ol><p class="we-answer">Answer: (x-1)²(x+3)³ times any nonzero constant.</p></div>
          <p><strong>Guided practice:</strong> For (x+4)⁴(x-2), label each exponent even/odd before saying touch/cross.</p>
          <div class="callout"><strong>Common mistake:</strong> Thinking touch always means exactly 2 or cross always means exactly 1.</div>
        `,
        checks: [
          { prompt: "At x=-2, how does (x+2)²(x-5) behave?", choices: ["Touches", "Crosses", "Is not a root", "Cannot tell"], answer: 0, explain: "Multiplicity 2 is even." },
          { prompt: "Which multiplicity gives a flattened crossing?", choices: ["3", "1", "2", "4"], answer: 0, explain: "A higher odd multiplicity crosses and flattens." }
        ]
      }
    ]
  },

  "alg-06": {
    title: "Exponential & logarithmic functions",
    domain: "algebra",
    intro: `<p><strong>Goal:</strong> Build exponent and logarithm meaning from repeated multiplication, then solve and model.</p>`,
    sections: [
      {
        heading: "Exponents and logarithms are inverse questions",
        body: `
          <p><strong>Prerequisite reminder:</strong> 2³ means repeated multiplication 2·2·2=8.</p>
          <p><strong>Plain meaning:</strong> An exponential asks “what value results?” A logarithm asks the undoing question “what exponent produced this value?” For b&gt;0, b&ne;1, and x&gt;0, b^y=x exactly when log_b(x)=y.</p>
          <p><strong>See it:</strong> Table for base 2: exponent 0,1,2,3 ↔ value 1,2,4,8. Read rightward for powers and leftward for logs.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — inverse table</div><p><em>Evaluate log₂32.</em></p><ol class="we-steps"><li>Ask: “How many factors of 2 make 32?”</li><li>2·2·2·2·2=32, or 2⁵=32.</li><li>Therefore the missing exponent is 5.</li></ol><p class="we-answer">Answer: log₂32=5.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — same-base equation</div><p><em>Solve 9^x=27^(x-1).</em></p><ol class="we-steps"><li>Rewrite repeated powers: 9=3² and 27=3³.</li><li>Then 3^(2x)=3^(3x-3); equal outputs from the one-to-one base-3 machine have equal exponents.</li><li>2x=3x-3, so x=3.</li></ol><p class="we-answer">Answer: x=3.</p></div>
          <p><strong>Guided practice:</strong> Rewrite 125 as 5^__ before solving 5^(x-2)=125.</p>
          <div class="callout"><strong>Common mistake:</strong> Treating log as division; it names an exponent.</div>
        `,
        checks: [
          { prompt: "What is log₃81?", choices: ["4", "27", "3", "9"], answer: 0, explain: "3⁴=81." },
          { prompt: "Solve 4^(x+1)=8^(x-1).", choices: ["5", "1", "-5", "2"], answer: 0, explain: "Use base 2: 2x+2=3x-3, so x=5." }
        ]
      },
      {
        heading: "Log laws from repeated multiplication",
        body: `
          <p><strong>Prerequisite reminder:</strong> Multiplying like bases adds exponents: b^m·b^n=b^(m+n); division subtracts; a power multiplies exponents.</p>
          <p><strong>Plain meaning:</strong> Because logs report exponents, product becomes addition, quotient becomes subtraction, and a power becomes a multiplier.</p>
          <p><strong>See it:</strong> If 8=2³ and 4=2², then 8·4=2^(3+2), so log₂(8·4)=3+2.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — quotient meaning</div><p><em>Simplify log₃45-log₃5.</em></p><ol class="we-steps"><li>Subtracting exponents corresponds to dividing values.</li><li>Combine as log₃(45/5)=log₃9.</li><li>Since 3²=9, the result is 2.</li></ol><p class="we-answer">Answer: 2.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — power meaning</div><p><em>Simplify 2log₂6-log₂9.</em></p><ol class="we-steps"><li>Two copies of log₂6 combine as log₂(6²)=log₂36.</li><li>Subtracting logs divides: log₂(36/9)=log₂4.</li><li>2²=4, so the result is 2.</li></ol><p class="we-answer">Answer: 2.</p></div>
          <p><strong>Guided practice:</strong> log₂4+log₂8 = log₂(4 __ 8). Then evaluate the product.</p>
          <div class="callout"><strong>Common mistake:</strong> Writing log(a+b)=log a+log b. There is no sum law.</div>
        `,
        checks: [
          { prompt: "Simplify log₂4+log₂8.", choices: ["5", "32", "12", "2"], answer: 0, explain: "log₂(4·8)=log₂32=5." },
          { prompt: "Simplify 3log₅2+log₅10-log₅4.", choices: ["log₅20", "log₅14", "log₅80", "log₅12"], answer: 0, explain: "Combine as log₅(2³·10/4)=log₅20." }
        ]
      },
      {
        heading: "Solving exponentials and change of base",
        body: `
          <p><strong>Prerequisite reminder:</strong> A logarithm undoes an exponent, and an exponential term should be isolated before undoing it.</p>
          <p><strong>Plain meaning:</strong> When bases do not match, take logs of both sides. The exponent becomes a multiplier. <strong>Change of base:</strong> log_b(A)=log(A)/log(b), which lets a calculator using log or ln answer any base.</p>
          <p><strong>See it:</strong> 5^x=40 becomes “the base-5 exponent of 40,” x=log₅40=log40/log5.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — change of base</div><p><em>Solve 5^x=40.</em></p><ol class="we-steps"><li>Apply log: log(5^x)=log40.</li><li>Bring down x: x log5=log40.</li><li>Divide: x=log40/log5≈2.292. This quotient is the change-of-base formula.</li></ol><p class="we-answer">Answer: x≈2.292.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — isolate first</div><p><em>Solve 3·2^x=50.</em></p><ol class="we-steps"><li>Divide by 3: 2^x=50/3.</li><li>Take logs and bring down x: x log2=log(50/3).</li><li>x=log(50/3)/log2≈4.059.</li></ol><p class="we-answer">Answer: x≈4.059.</p></div>
          <p><strong>Guided practice:</strong> For 5·4^x=200, first write 4^x=__. Then use x=log(__)/log4.</p>
          <div class="callout"><strong>Common mistake:</strong> Taking a log before isolating and pretending log(3·2^x)=x log6.</div>
        `,
        checks: [
          { prompt: "Solve 3^x=20 to three decimals.", choices: ["2.727", "1.301", "6.667", "0.477"], answer: 0, explain: "x=log20/log3≈2.727." },
          { prompt: "Solve 5·4^x=200 to three decimals.", choices: ["2.661", "3.161", "1.602", "0.602"], answer: 0, explain: "4^x=40, so x=log40/log4≈2.661." }
        ]
      },
      {
        heading: "Exponential growth and decay models",
        body: `
          <p><strong>Prerequisite reminder:</strong> The exponent counts how many equal time periods have passed.</p>
          <p><strong>Plain meaning:</strong> Doubling multiplies by 2 each period; half-life multiplies by 1/2. In A=A₀·b^(t/T), t/T is the number of periods.</p>
          <p><strong>See it:</strong> A table with periods 0,1,2,3 shows growth A₀,2A₀,4A₀,8A₀ or decay A₀,A₀/2,A₀/4,A₀/8.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — decay table</div><p><em>400 g has half-life 3 years. Amount after 9 years?</em></p><ol class="we-steps"><li>9/3=3 periods.</li><li>Table: 400→200→100→50.</li><li>Formula agrees: 400(1/2)³=50.</li></ol><p class="we-answer">Answer: 50 g.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — growth equation</div><p><em>200 doubles every 5 years. When is it 1600?</em></p><ol class="we-steps"><li>1600/200=8=2³, so three doublings are needed.</li><li>Each takes 5 years: 3·5=15.</li><li>In the formula, 1600=200·2^(t/5) gives t/5=3.</li></ol><p class="we-answer">Answer: 15 years.</p></div>
          <p><strong>Guided practice:</strong> 800 g, half-life 4, after 12 years: periods=12/__=__; amount=800(1/2)^__.</p>
          <div class="callout"><strong>Common mistake:</strong> Using T/t or t·T; t/T is “elapsed time divided by time per period.”</div>
        `,
        checks: [
          { prompt: "800 g has a 4-year half-life. How much after 12 years?", choices: ["100 g", "200 g", "50 g", "266.7 g"], answer: 0, explain: "Three half-lives: 800/8=100." },
          { prompt: "A culture grows 500→4000 in 6 hours. Its doubling time is:", choices: ["2 hours", "3 hours", "6 hours", "1.5 hours"], answer: 0, explain: "The factor 8 is three doublings; 6/3=2 hours." }
        ]
      }
    ]
  },

  "alg-07": {
    title: "Rational, radical, absolute & piecewise",
    domain: "algebra",
    intro: `<p><strong>Goal:</strong> Explain rational graph features from undefined inputs, divide for slant asymptotes, and solve radicals and piecewise forms safely.</p>`,
    sections: [
      {
        heading: "Undefined inputs create holes or vertical asymptotes",
        body: `
          <p><strong>Prerequisite reminder:</strong> Division by zero is undefined, and cancellation is valid only where the canceled factor was not zero.</p>
          <p><strong>Plain meaning:</strong> First mark every denominator zero as missing. If its factor cancels, nearby values approach one finite point—a hole. If it remains downstairs, values grow without bound—a vertical asymptote.</p>
          <p><strong>See it:</strong> A hole is one missing dot on an otherwise smooth graph; an asymptote is a vertical fence the graph approaches.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — cancellation to a hole</div><p><em>Analyze (x²-9)/(x-3).</em></p><ol class="we-steps"><li>x=3 is undefined in the original expression.</li><li>Factor and cancel: (x-3)(x+3)/(x-3)=x+3, but only for x≠3.</li><li>Nearby points follow y=x+3 and approach 6, leaving a missing dot at (3,6).</li></ol><p class="we-answer">Answer: hole at (3,6).</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — hole and fence</div><p><em>Analyze (x²-x-6)/(x²-4).</em></p><ol class="we-steps"><li>Factor: (x-3)(x+2)/[(x-2)(x+2)]. Original undefined inputs are ±2.</li><li>x+2 cancels, so x=-2 is a hole; simplified value there is (-5)/(-4)=5/4.</li><li>x-2 remains downstairs, so x=2 is a vertical asymptote.</li></ol><p class="we-answer">Answer: hole (-2,5/4); vertical asymptote x=2.</p></div>
          <p><strong>Guided practice:</strong> Factor (x²-16)/(x-4), record x=4 as undefined before canceling, then find the missing y-value.</p>
          <div class="callout"><strong>Common mistake:</strong> Calling every denominator zero an asymptote before checking cancellation.</div>
        `,
        checks: [
          { prompt: "What occurs at x=4 for (x²-16)/(x-4)?", choices: ["A hole", "A vertical asymptote", "A horizontal asymptote", "Nothing"], answer: 0, explain: "x-4 cancels, but the original remains undefined at 4." },
          { prompt: "For (x+1)/[(x-1)(x+1)], what occurs?", choices: ["Asymptote x=1; hole x=-1", "Hole x=1; asymptote x=-1", "Two asymptotes", "Two holes"], answer: 0, explain: "x+1 cancels; x-1 remains in the denominator." }
        ]
      },
      {
        heading: "Horizontal and slant asymptotes by division",
        body: `
          <p><strong>Prerequisite reminder:</strong> Degree is the greatest exponent; polynomial long division mirrors ordinary long division.</p>
          <p><strong>Plain meaning:</strong> End behavior compares fastest-growing terms. Lower numerator degree gives y=0; equal degrees give the leading-coefficient ratio. One-higher numerator degree gives a slant line from the division quotient.</p>
          <p><strong>See it:</strong> Write f(x)=quotient+remainder/divisor. As |x| grows, the remainder fraction shrinks toward 0, leaving the quotient as the asymptote.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — equal-degree view</div><p><em>Find the horizontal asymptote of (3x²+2x-1)/(5x²-4).</em></p><ol class="we-steps"><li>Both degrees are 2.</li><li>For huge x, lower terms matter little, leaving 3x²/5x².</li><li>x² cancels in that comparison, so the limiting height is 3/5.</li></ol><p class="we-answer">Answer: y=3/5.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — full long division</div><p><em>Find the slant asymptote of (2x³-x)/(x²+1).</em></p><ol class="we-steps"><li>Write missing terms: 2x³+0x²-x+0. Divide leading terms: 2x³÷x²=2x.</li><li>Put 2x in the quotient; multiply back 2x(x²+1)=2x³+2x.</li><li>Subtract: (2x³+0x²-x+0)-(2x³+0x²+2x+0)=-3x. Thus f=2x-3x/(x²+1).</li><li>The remainder fraction tends to 0, leaving the slant line.</li></ol><p class="we-answer">Answer: y=2x.</p></div>
          <p><strong>Guided practice:</strong> Divide (x²+3x+1) by (x+1): first quotient term x²÷x=__; multiply back __(x+1), then subtract.</p>
          <div class="callout"><strong>Common mistake:</strong> Naming a slant asymptote from leading terms without completing division, or omitting zero placeholders.</div>
        `,
        checks: [
          { prompt: "Horizontal asymptote of (4x+7)/(x²-9)?", choices: ["y=0", "y=4", "y=4/9", "None"], answer: 0, explain: "The numerator degree is lower." },
          { prompt: "What is the slant asymptote of (x²+3x+1)/(x+1)?", choices: ["y=x+2", "y=x+3", "y=x-2", "y=1"], answer: 0, explain: "Long division gives x+2-1/(x+1), so the remainder term vanishes at the ends." }
        ]
      },
      {
        heading: "Radical equations and extraneous roots",
        body: `
          <p><strong>Prerequisite reminder:</strong> A principal square root is never negative; squaring erases sign information.</p>
          <p><strong>Plain meaning:</strong> Squaring can create candidates that solve the squared equation but not the original. Every candidate must be checked in the unsquared equation.</p>
          <p><strong>See it:</strong> Use a candidate table with columns “candidate,” “original left,” “original right,” and “keep/reject.”</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — one extraneous root</div><p><em>Solve √(x+2)=x.</em></p><ol class="we-steps"><li>Square: x+2=x², so (x-2)(x+1)=0 and candidates are 2,-1.</li><li>Check 2: √4=2, keep.</li><li>Check -1: √1=1≠-1, reject; squaring had hidden the sign mismatch.</li></ol><p class="we-answer">Answer: x=2 only.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — nonnegative-side view</div><p><em>Solve x+1=√(3x+7).</em></p><ol class="we-steps"><li>Square and rearrange: (x+1)²=3x+7 gives x²-x-6=0, so x=3,-2.</li><li>Check 3: 4=√16, keep.</li><li>Check -2: -1≠√1=1, reject because a principal root cannot equal a negative left side.</li></ol><p class="we-answer">Answer: x=3 only.</p></div>
          <p><strong>Guided practice:</strong> For √(2x+3)=x, square to get x²-2x-3=0; factor, then make a two-row check table using the original equation.</p>
          <div class="callout"><strong>Common mistake:</strong> Reporting both algebraic candidates without substitution into the original.</div>
        `,
        checks: [
          { prompt: "Solve √(2x+3)=x.", choices: ["x=3 only", "x=-1 only", "Both", "Neither"], answer: 0, explain: "Candidates 3 and -1 arise; only √9=3 passes." },
          { prompt: "Solve √(x+3)=x-3.", choices: ["x=6 only", "x=1 only", "Both 1 and 6", "Neither"], answer: 0, explain: "Squaring gives 1 and 6; x=1 makes the right side negative and fails." }
        ]
      },
      {
        heading: "Absolute value and piecewise rules",
        body: `
          <p><strong>Prerequisite reminder:</strong> |a| is distance from 0 and therefore never negative.</p>
          <p><strong>Plain meaning:</strong> A piecewise function chooses a rule based on the input's condition. |A|=B means A is B units from zero, so A=B or A=-B when B≥0.</p>
          <p><strong>See it:</strong> For piecewise tables, highlight the condition containing the input. For absolute value, mark two number-line locations equally far from zero.</p>
          <div class="worked-example"><div class="we-label">Worked Example 1 — rule selection</div><p><em>f(x)=x-1 for x&lt;2 and x² for x≥2. Find f(1)+f(3).</em></p><ol class="we-steps"><li>1 satisfies x&lt;2, so f(1)=1-1=0.</li><li>3 satisfies x≥2, so f(3)=9.</li><li>Add only after evaluating with the correct rules: 0+9=9.</li></ol><p class="we-answer">Answer: 9.</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — distance view</div><p><em>Solve |2x-5|=9.</em></p><ol class="we-steps"><li>The inside can be 9 or -9.</li><li>2x-5=9 gives x=7; 2x-5=-9 gives x=-2.</li><li>Both produce distance 9, so both pass.</li></ol><p class="we-answer">Answer: x=7 or -2.</p></div>
          <p><strong>Guided practice:</strong> For |3x+1|=5, write the two partial equations 3x+1=__ and 3x+1=__.</p>
          <div class="callout"><strong>Common mistake:</strong> Using both piecewise rules or forgetting the negative absolute-value case.</div>
        `,
        checks: [
          { prompt: "If f=2x+1 for x≤0 and x²-3 for x>0, find f(-2)+f(4).", choices: ["10", "13", "-3", "16"], answer: 0, explain: "f(-2)=-3 and f(4)=13; sum 10." },
          { prompt: "Which equation has no solution?", choices: ["|3x-1|=-5", "|3x-1|=0", "|3x-1|=5", "|3x+2|=7"], answer: 0, explain: "Absolute value cannot equal a negative number." }
        ]
      }
    ]
  }
});
