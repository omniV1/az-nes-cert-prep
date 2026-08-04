/* NES NT304 Geometry & Measurement — adult-relearning lessons. */
(function () {
  "use strict";

  function check(prompt, choices, answer, explain) {
    return { prompt: prompt, choices: choices, answer: answer, explain: explain };
  }

  function section(heading, prerequisite, meaning, visual, example1, example2, guided, mistake, checks) {
    return {
      heading: heading,
      body: `
        <div class="callout"><strong>Prerequisite reminder:</strong> ${prerequisite}</div>
        <p><strong>Plain meaning:</strong> ${meaning}</p>
        <div class="visual-model"><strong>Picture it:</strong>${visual}</div>
        <div class="worked-example"><div class="we-label">Worked Example 1 — one way to see it</div>${example1}</div>
        <div class="worked-example"><div class="we-label">Worked Example 2 — another way to see it</div>${example2}</div>
        <div class="guided-practice"><strong>Guided practice:</strong> ${guided}</div>
        <div class="callout"><strong>Common mistake:</strong> ${mistake}</div>
      `,
      checks: checks
    };
  }

  window.LESSONS = Object.assign(window.LESSONS || {}, {
    "geo-01": {
      title: "Units, precision, similarity & scale",
      domain: "geometry",
      intro: `<p><strong>NES NT304 competency 0008:</strong> Build measurement sense, convert units, and explain how length, area, and volume change under scaling.</p>`,
      sections: [
        section(
          "Area and volume unit conversions",
          "A rectangle is tiled by unit squares; a box is packed by unit cubes. Recall 1 m = 100 cm.",
          "A square unit counts tiles, not edge marks. A cubic unit counts cubes. Therefore a length conversion must be used once per dimension.",
          `<pre class="diagram">1 m by 1 m floor
100 cm across × 100 cm down
= 100 rows of 100 one-cm² tiles
= 10,000 cm²

1 m cube
= 100 × 100 × 100 one-cm³ cubes
= 1,000,000 cm³</pre>`,
          `<p><em>Convert 3 m² to cm².</em></p><ol class="we-steps"><li>One 1 m by 1 m square becomes 100 cm by 100 cm.</li><li>Tile count: 100 &times; 100 = 10,000 cm² per m².</li><li>Three such floors contain 3 &times; 10,000 = 30,000 cm².</li></ol><p class="we-answer">30,000 cm²</p>`,
          `<p><em>Convert 3,456 in³ to ft³.</em></p><ol class="we-steps"><li>A 1-ft cube is 12 in on each of three edges.</li><li>It contains 12 &times; 12 &times; 12 = 1,728 in³.</li><li>Count 1-ft³ boxes: 3,456 &divide; 1,728 = 2.</li></ol><p class="we-answer">2 ft³</p>`,
          `Convert 2.5 m² to cm². <strong>Hint:</strong> first complete 1 m² = 100 cm &times; 100 cm = ___ cm²; then multiply by 2.5.`,
          "Using 100 for m² or m³. The exponent tells how many independent directions must be converted.",
          [
            check("How many square centimeters are in 4 m²?", ["40,000", "400", "4,000", "400,000"], 0, "A 1-m² tiled square has 100² = 10,000 cm²; 4 × 10,000 = 40,000."),
            check("How many cubic feet are in 5,184 in³?", ["3", "36", "432", "0.333"], 0, "One ft³ contains 12³ = 1,728 in³, so 5,184 ÷ 1,728 = 3.")
          ]
        ),
        section(
          "Precision, greatest possible error & significant figures",
          "Rounding places a number at the nearest marked interval; halfway points form the boundaries.",
          "A recorded measurement represents an interval of possible true values. Greatest possible error (GPE) is half the rounding unit.",
          `<pre class="diagram">Recorded 15 cm to nearest cm
14.5 -------- 15.0 -------- 15.5
 included                      excluded
GPE = 0.5 cm

Recorded 8.0 to nearest tenth:
7.95 ≤ true value &lt; 8.05</pre>`,
          `<p><em>A rod is 15 cm to the nearest cm.</em></p><ol class="we-steps"><li>The rounding unit is 1 cm.</li><li>Half is 0.5 cm, so that is the GPE.</li><li>Subtract and add 0.5: 14.5 &le; length &lt; 15.5.</li></ol><p class="we-answer">GPE 0.5 cm; interval [14.5, 15.5)</p>`,
          `<p><em>A mass is 8.0 g to the nearest tenth. Find maximum relative error.</em></p><ol class="we-steps"><li>The unit is 0.1 g, so GPE = 0.05 g.</li><li>Compare error with recorded size: 0.05/8.0 = 0.00625.</li><li>As a percent, 0.00625 &times; 100 = 0.625%.</li></ol><p class="we-answer">0.625%</p>`,
          `A board is 6.2 cm to the nearest tenth. <strong>Partial setup:</strong> GPE = 0.1/2 = ___; interval is 6.2 &minus; ___ to 6.2 + ___.`,
          "Using the whole rounding unit as the error, or treating the trailing zero in 8.0 as meaningless; it records precision.",
          [
            check("A length is 42 mm to the nearest millimeter. What is its GPE?", ["0.5 mm", "1 mm", "0.05 mm", "42 mm"], 0, "Half of the 1-mm rounding unit is 0.5 mm."),
            check("Sides 6 cm and 10 cm are each nearest-cm measurements. What is the least possible rectangular perimeter?", ["30 cm", "32 cm", "28 cm", "31 cm"], 0, "Least sides are 5.5 and 9.5; 2(5.5 + 9.5) = 30.")
          ]
        ),
        section(
          "Scale factor: k, k², k³",
          "Similar figures have the same shape and every corresponding length is multiplied by one factor k.",
          "Scaling is repeated in each dimension. A k-by-k tiled copy contains k² area tiles; a k-by-k-by-k packed copy contains k³ cubes.",
          `<pre class="diagram">k = 2
length:  [--] → [----]                 ×2
area:    1 tile → 2 rows × 2 columns   ×4
volume:  1 cube → 2 layers of 2×2      ×8

k : area factor : volume factor
2 :      4      :       8</pre>`,
          `<p><em>A 3-by-5 rectangle is enlarged by k=2.</em></p><ol class="we-steps"><li>New sides are 6 and 10.</li><li>Old area is 15; new area is 60.</li><li>60/15 = 4 = 2², matching the 2-by-2 tile model.</li></ol><p class="we-answer">Area is multiplied by 4.</p>`,
          `<p><em>Similar tanks have volume ratio 8:125. Find surface-area ratio.</em></p><ol class="we-steps"><li>Volume ratio is the cubed length ratio.</li><li>Cube-root each side: k = 2:5.</li><li>A surface is two-dimensional, so square: 4:25.</li></ol><p class="we-answer">4:25</p>`,
          `A cube's edge triples. <strong>Hint:</strong> sketch 3 layers, each with a 3 &times; 3 array. How many small cubes? What is the volume factor?`,
          "Applying k directly to area or volume, or forgetting to take a root when the given ratio is already an area or volume ratio.",
          [
            check("Similar prisms have length ratio 3:1. What is their surface-area ratio?", ["9:1", "3:1", "27:1", "6:1"], 0, "Every face scales in two directions, so 3²:1² = 9:1."),
            check("A model's volume is 1/1,000 of the original. A 30-cm model length represents what original length?", ["300 cm", "30,000 cm", "3,000 cm", "3 cm"], 0, "Cube-root 1:1,000 to get length ratio 1:10; 30 × 10 = 300 cm.")
          ]
        )
      ]
    },

    "geo-02": {
      title: "Perimeter, area, surface area & volume",
      domain: "geometry",
      intro: `<p><strong>NES NT304 competency 0008:</strong> Measure boundaries, regions, surfaces, and space, including composite figures and solids.</p>`,
      sections: [
        section(
          "Perimeter and area of composite figures",
          "Perimeter uses linear units and traces only the outside boundary; area counts square units inside.",
          "For area, split or subtract familiar pieces. For perimeter, walk the actual outline and label every exposed segment.",
          `<pre class="diagram">L-shape cut from 12 × 9 rectangle
             8 ft
        ┌────────────┐
   5 ft │            │
   ┌────┘            │ 9 ft
4ft│                 │
   └─────────────────┘
          12 ft
notch edges: 4 ft horizontal, 5 ft vertical
right exposed side: 9−5 = 4 ft
top exposed side: 12−4 = 8 ft</pre>`,
          `<p><em>Find the area of that L-shape.</em></p><ol class="we-steps"><li>Imagine restoring the full 12 &times; 9 rectangle: area 108.</li><li>The missing corner is 4 &times; 5 = 20.</li><li>Subtract removed tiles: 108 &minus; 20 = 88 ft².</li></ol><p class="we-answer">88 ft²</p>`,
          `<p><em>Find its perimeter.</em></p><ol class="we-steps"><li>Trace the labeled outline: 12, 4, 8, 5, 4, 9.</li><li>Add lengths only: 12+4+8+5+4+9=42.</li><li>The cut removed 4+5 from old edges but added equal 4+5 notch edges, so 42 is sensible.</li></ol><p class="we-answer">42 ft</p>`,
          `A 3-by-2 corner is cut from a 10-by-7 rectangle. <strong>Partial setup:</strong> area = 70 &minus; 6. For perimeter, label remaining top 10&minus;3 and side 7&minus;2, then trace all six segments.`,
          "Adding the perimeters of component rectangles counts shared interior edges; perimeter includes exposed boundary only.",
          [
            check("A 6×4 corner is removed from a 20×15 rectangle. What area remains?", ["276 ft²", "300 ft²", "280 ft²", "294 ft²"], 0, "20×15 − 6×4 = 300 − 24 = 276."),
            check("A 3×5 corner notch is cut from an 18×10 rectangle. What is the perimeter?", ["56 m", "48 m", "40 m", "72 m"], 0, "A corner notch replaces removed edge lengths with equal notch lengths; 2(18+10)=56.")
          ]
        ),
        section(
          "Circle measures: circumference, arc length & sector area",
          "A radius runs center-to-circle; a diameter is two radii. A full turn is 360°.",
          "An arc is part of the circular boundary; a sector is the wedge inside it. Use the central-angle fraction of the whole circumference or whole area.",
          `<pre class="diagram">          arc
       .-~~~~~-.
      / \ θ   /
     |   \   |    radius r
     |    •--|    
      \      /
       '----'
fraction of circle = θ/360
arc: fraction × 2πr
sector: fraction × πr²</pre>`,
          `<p><em>Radius 12, angle 90°: sector area?</em></p><ol class="we-steps"><li>90° is one quarter of 360°.</li><li>Whole area is &pi;(12²)=144&pi;.</li><li>One quarter is 36&pi; square units.</li></ol><p class="we-answer">36&pi;</p>`,
          `<p><em>A 120° arc has length 10&pi;. Find r.</em></p><ol class="we-steps"><li>120/360=1/3, so the arc is one third of the circumference.</li><li>Thus 10&pi;=(1/3)(2&pi;r).</li><li>Multiply by 3 and divide by 2&pi;: r=15.</li></ol><p class="we-answer">15</p>`,
          `Radius 6, angle 60°. <strong>Hint:</strong> 60/360 = 1/6. Complete arc = (1/6)(2&pi;&middot;6); sector = (1/6)(&pi;&middot;6²).`,
          "Using 2πr for sector area or πr² for arc length. Check units: an arc is units; a sector is square units.",
          [
            check("Radius 6 and central angle 60° give what arc length?", ["2π", "12π", "π", "6π"], 0, "(60/360)(2π·6) = (1/6)(12π)=2π."),
            check("A radius-9 sector has area 27π. What is its central angle?", ["120°", "90°", "60°", "108°"], 0, "27π/(81π)=1/3 of the circle; (1/3)360°=120°.")
          ]
        ),
        section(
          "Surface area and volume of 3D solids",
          "Base area B is a two-dimensional area. Height h is the perpendicular distance between bases or from base to apex.",
          "Volume counts unit cubes. A prism or cylinder stacks identical base layers, giving Bh. A pyramid or cone with base area B and perpendicular height h has volume (1/3)Bh. Surface area adds exposed faces.",
          `<pre class="diagram">Prism layers                 Pyramid comparison
┌─────┐  layer B                △  apex
├─────┤  h layers              │  perpendicular height h
├─────┤  V = B·h               ▔  base area B
└─────┘                         V = Bh/3

Cylinder net:  ○  + [rectangle 2πr by h] +  ○</pre>`,
          `<p><em>Cone r=3, h=8: volume?</em></p><ol class="we-steps"><li>Base disk area B=&pi;(3²)=9&pi;.</li><li>Multiply base area by perpendicular height: Bh=9&pi;(8)=72&pi;.</li><li>A cone has one-third that corresponding cylinder volume: 72&pi;/3=24&pi;.</li></ol><p class="we-answer">24&pi; cubic units</p>`,
          `<p><em>Closed cylinder r=2, h=5: surface area?</em></p><ol class="we-steps"><li>Unroll the side: rectangle width 2&pi;r=4&pi;, height 5, area 20&pi;.</li><li>Two bases total 2&pi;r²=8&pi;.</li><li>Add exposed pieces: 28&pi;.</li></ol><p class="we-answer">28&pi; square units</p>`,
          `A square pyramid has base edge 6 and height 8. <strong>Partial setup:</strong> B=6²=36; V=(1/3)(36)(8)=___.`,
          "Mixing surface area and volume, omitting a base, or forgetting the 1/3 for a cone/pyramid.",
          [
            check("What is the volume of a cylinder with r=5 and h=10?", ["250π", "50π", "125π", "750π"], 0, "V=πr²h=π(25)(10)=250π."),
            check("A square pyramid has base edge 6 and volume 96. What is its height?", ["8", "16", "32", "8/3"], 0, "96=(1/3)(36)h=12h, so h=8.")
          ]
        )
      ]
    },

    "geo-03": {
      title: "Polygons, circles & Pythagorean theorem",
      domain: "geometry",
      intro: `<p><strong>NES NT304 competency 0008:</strong> Reason about angles and right-triangle lengths rather than relying on isolated formulas.</p>`,
      sections: [
        section(
          "Polygon angle sums",
          "A triangle's interior angles total 180°. A convex polygon has no inward dents.",
          "Draw diagonals from one vertex. An n-sided polygon becomes n−2 nonoverlapping triangles, so its angle sum is (n−2)180°.",
          `<pre class="diagram">Pentagon from one vertex:
        B
       /|\\
      A-|-C      diagonals AC, AD
       \\|/       make 3 triangles
        D--E      3×180° = 540°

one exterior turn at each corner → one full turn = 360°</pre>`,
          `<p><em>Each angle of a regular octagon?</em></p><ol class="we-steps"><li>Eight sides make 8−2=6 triangles.</li><li>Total is 6&times;180°=1080°.</li><li>Regular means equal angles: 1080°/8=135°.</li></ol><p class="we-answer">135°</p>`,
          `<p><em>A regular polygon has exterior angle 24°. How many sides?</em></p><ol class="we-steps"><li>Walking around makes one 360° turn.</li><li>Equal 24° turns fit 360/24=15 times.</li><li>One turn occurs at each vertex, so there are 15 sides.</li></ol><p class="we-answer">15 sides</p>`,
          `Find each interior angle of a regular hexagon. <strong>Partial setup:</strong> (6−2)180° = ___ total; divide by 6.`,
          "Using n·180° instead of (n−2)·180°, or dividing by n when the polygon is not regular.",
          [
            check("What is the interior-angle sum of a hexagon?", ["720°", "1080°", "540°", "360°"], 0, "(6−2)180°=720°."),
            check("A regular polygon has exterior angle 30°. How many sides?", ["12", "6", "10", "15"], 0, "Equal exterior angles total 360°; 360/30=12.")
          ]
        ),
        section(
          "Pythagorean theorem and special right triangles",
          "In a right triangle, the hypotenuse is opposite the 90° angle and is the longest side.",
          "The theorem a²+b²=c² relates right-triangle sides. The two special ratios come from building familiar symmetric shapes, then applying that theorem—not from magic.",
          `<pre class="diagram">45-45-90: split a square       30-60-90: split equilateral side 2a
a ┌─────┐                      apex
  │\\    │                       /|\\
  │ \\ c │                 2a  / | \\ 2a
  │  \\  │                    /  |  \\
  └─────┘                   base a  a
    a
c²=a²+a²=2a² → c=a√2       height²=(2a)²−a²=3a² → a√3</pre>`,
          `<p><em>A square has side 6. Find its diagonal.</em></p><ol class="we-steps"><li>The diagonal makes a right triangle with equal legs 6 and 6.</li><li>c²=36+36=72.</li><li>c=&radic;72=6&radic;2, deriving the 45-45-90 rule.</li></ol><p class="we-answer">6&radic;2</p>`,
          `<p><em>An equilateral triangle has side 14. Find its altitude.</em></p><ol class="we-steps"><li>The altitude bisects the base into 7 and 7, making a 30-60-90 triangle.</li><li>h²+7²=14², so h²=147.</li><li>h=&radic;147=7&radic;3; now the ratio a:a&radic;3:2a is visible.</li></ol><p class="we-answer">7&radic;3</p>`,
          `A 45-45-90 triangle has hypotenuse 10&radic;2. <strong>Hint:</strong> from c=a&radic;2, solve a=(10&radic;2)/&radic;2.`,
          "Memorizing labels without checking which side is opposite 30°, 60°, or 90°, or using a special ratio on a nonspecial triangle.",
          [
            check("A 45-45-90 triangle has legs 6. Its hypotenuse is:", ["6√2", "12", "6√3", "3√2"], 0, "By Pythagoras, c²=36+36=72, so c=6√2."),
            check("A 30-60-90 triangle has hypotenuse 18. Its short leg is:", ["9", "9√3", "18√3", "6"], 0, "The equilateral-halving model shows the hypotenuse is twice the short leg; 18/2=9.")
          ]
        ),
        section(
          "Circle angle relationships",
          "A central angle has vertex at the center; an inscribed angle has vertex on the circle. Both must intercept the same arc for comparison.",
          "A central angle measures its intercepted arc. An inscribed angle seeing that same arc is half as large. A tangent touches once and is perpendicular to the radius at the touch point.",
          `<pre class="diagram">        B•—— tangent
       / | 90°
      /  |
   A•    O• center
      \\  |
       \\ |
        C•
∠A? (on circle) sees arc BC
∠BOC (at center) sees same arc
∠A = ½∠BOC</pre>`,
          `<p><em>Central angle BOC is 100°. Find an inscribed angle seeing arc BC.</em></p><ol class="we-steps"><li>Verify both angles intercept endpoints B and C.</li><li>The center angle is the whole arc measure.</li><li>The inscribed angle is half: 100°/2=50°.</li></ol><p class="we-answer">50°</p>`,
          `<p><em>From external P, tangent PT=12 to radius OT=5. Find OP.</em></p><ol class="we-steps"><li>OT is perpendicular to PT, so triangle OTP is right at T.</li><li>OP is opposite the right angle, hence the hypotenuse.</li><li>OP=&radic;(5²+12²)=13.</li></ol><p class="we-answer">13</p>`,
          `An inscribed angle is 35°. <strong>Hint:</strong> the central angle over the same arc is twice it: 2(___) = ___.`,
          "Halving or doubling angles that intercept different arcs, or placing the tangent-radius right angle anywhere except the point of tangency.",
          [
            check("An inscribed angle is 35°. What same-arc central angle corresponds?", ["70°", "17.5°", "35°", "145°"], 0, "The central angle is twice the same-arc inscribed angle: 70°."),
            check("A triangle is inscribed in a circle with one side as a diameter. The angle opposite that diameter is:", ["90°", "45°", "180°", "60°"], 0, "It intercepts a 180° semicircle, so its inscribed measure is half: 90°.")
          ]
        )
      ]
    },

    "geo-04": {
      title: "Congruence, similarity & formal proof",
      domain: "geometry",
      intro: `<p><strong>NES NT304 competency 0009:</strong> Distinguish same-size from same-shape claims and justify geometric conclusions.</p>`,
      sections: [
        section(
          "Valid vs invalid congruence shortcuts",
          "Corresponding parts occupy matching positions. An included angle sits between the two named sides.",
          "<strong>Congruent</strong> means exactly the same size and shape. SSS, SAS, ASA, AAS, and right-triangle HL force one triangle. <strong>SSA</strong> means two sides and a non-included angle; it may allow two triangles, so it is not a general proof.",
          `<pre class="diagram">SAS (locked)                  SSA (swinging)
A———B                         A———B
 \\  / given angle at A        \\  ) two possible landing points C
  C                            C•  •C'
angle is between sides        angle is NOT between both given sides

AAA → same shape only; size may change.</pre>`,
          `<p><em>AB=DE, BC=EF, and &ang;B=&ang;E, with B and E between the named sides.</em></p><ol class="we-steps"><li>Mark two side pairs.</li><li>The equal angle is included between them.</li><li>The triangle is locked by SAS, so the triangles are congruent.</li></ol><p class="we-answer">Congruent by SAS</p>`,
          `<p><em>Two sides and a non-included angle match. Is that enough?</em></p><ol class="we-steps"><li>The pattern is SSA, not SAS.</li><li>Imagine a fixed-length side swinging until it meets the other ray.</li><li>It can meet in two places, creating different triangles; no general congruence conclusion follows.</li></ol><p class="we-answer">No; SSA is ambiguous.</p>`,
          `Given two angles and the side between them. <strong>Hint:</strong> write the information in order: Angle–Side–Angle = ___. Is it valid?`,
          "Calling every two-sides-and-an-angle situation SAS without checking whether the angle lies between those sides.",
          [
            check("JK=MN, ∠J=∠M, and ∠K=∠N. Which criterion uses side JK between the angles?", ["ASA", "SAS", "AAS", "SSA"], 0, "Two angles and their included side form ASA."),
            check("Which does NOT prove triangle congruence in general?", ["SSA", "SSS", "SAS", "AAS"], 0, "SSA can make two different triangles; the other three are valid criteria.")
          ]
        ),
        section(
          "Similarity and area ratio",
          "A ratio compares quantities in the same order. Perimeter is a sum of lengths; area counts two-dimensional tiles.",
          "<strong>Similar</strong> means same shape: corresponding angles match and corresponding sides share one scale factor k. It does not require equal size. A k-by-k tile model makes area scale by k².",
          `<pre class="diagram">small rectangle 2×3       large rectangle 4×6
┌───┐                     ┌──────┐
│6  │  k=2 each way       │24    │
└───┘                     └──────┘
area ratio 6:24 = 1:4 = 1²:2²
perimeter ratio remains 1:2</pre>`,
          `<p><em>Similar triangles have side ratio 3:5; smaller area is 27.</em></p><ol class="we-steps"><li>A 3-by-3 tile block corresponds to a 5-by-5 block, so area ratio is 9:25.</li><li>Write 27/A=9/25.</li><li>A=27&times;25/9=75.</li></ol><p class="we-answer">75</p>`,
          `<p><em>Similar polygons have areas 50:128; smaller side is 10.</em></p><ol class="we-steps"><li>Simplify area ratio: 25:64.</li><li>Undo the two-dimensional scaling: side ratio=&radic;25:&radic;64=5:8.</li><li>10/L=5/8, so L=16.</li></ol><p class="we-answer">16</p>`,
          `Side ratio is 2:7 and smaller area is 12. <strong>Partial setup:</strong> area ratio = 2²:7² = 4:49; 12/A = 4/49.`,
          "Using k for area instead of k², or taking a square root of a side ratio that is already linear.",
          [
            check("Side ratio is 5:8 and smaller area is 75. Larger area?", ["192", "120", "75", "29"], 0, "Area ratio is 25:64; 75×64/25=192."),
            check("Perimeter ratio is 2:5 and larger area is 200. Smaller area?", ["32", "80", "500", "1250"], 0, "Perimeter ratio is linear; square 2:5 to 4:25, then 200×4/25=32.")
          ]
        ),
        section(
          "Proof structure and logical reasoning",
          "A proof starts from givens and definitions; each new statement needs a named reason.",
          "<strong>CPCTC</strong> means “corresponding parts of congruent triangles are congruent.” In plain language: after proving two entire triangles are exact matches, their matching leftover sides and angles match too.",
          `<pre class="diagram">Givens/definitions
       ↓
prove whole triangles congruent
(SSS, SAS, ASA, AAS, or HL)
       ↓
CPCTC may now prove a leftover
matching side or angle

Never: CPCTC → triangle congruence</pre>`,
          `<p><em>&triangle;ABC&cong;&triangle;DEF is already proven. Show &ang;C&cong;&ang;F.</em></p><ol class="we-steps"><li>The naming order pairs A↔D, B↔E, C↔F.</li><li>Whole-triangle congruence is already available.</li><li>Therefore matching angles C and F are congruent by CPCTC.</li></ol><p class="we-answer">&ang;C&cong;&ang;F by CPCTC</p>`,
          `<p><em>PQ=PR, S is midpoint of QR, and PS is drawn. Prove &triangle;PQS&cong;&triangle;PRS.</em></p><ol class="we-steps"><li>PQ&cong;PR is given.</li><li>QS&cong;SR by definition of midpoint.</li><li>PS&cong;PS by the reflexive property.</li><li>Three side pairs give SSS.</li></ol><p class="we-answer">&triangle;PQS&cong;&triangle;PRS by SSS</p>`,
          `Triangles are proven congruent, and you need a matching unused side. <strong>Hint:</strong> the reason is the four-letter statement that may only follow whole-triangle congruence.`,
          "Using CPCTC before proving the triangles congruent, or omitting the reflexive reason for a shared side.",
          [
            check("After ΔXYZ≅ΔRST is proven, what justifies XY≅RS?", ["CPCTC", "SSS", "Reflexive Property", "AAS"], 0, "XY and RS are corresponding parts of already-congruent triangles."),
            check("A proof uses CPCTC after only two angle pairs are given. What is wrong?", ["Triangle congruence was never established", "CPCTC proves similarity only", "Angles cannot correspond", "Reflexive property was required"], 0, "CPCTC is available only after whole triangles are proven congruent.")
          ]
        )
      ]
    },

    "geo-05": {
      title: "3D figures, nets & cross sections",
      domain: "geometry",
      intro: `<p><strong>NES NT304 competency 0009:</strong> Connect three-dimensional solids with their faces, unfoldings, and planar slices.</p>`,
      sections: [
        section(
          "Euler's formula for polyhedra",
          "A face is flat, an edge is where two faces meet, and a vertex is a corner where edges meet.",
          "For a connected convex polyhedron, vertices minus edges plus faces always equals 2. Use it as both a solver and a counting check.",
          `<pre class="diagram">Cube count table
vertices V | edges E | faces F | V−E+F
     8     |   12    |    6    |   2

Square pyramid:
5 corners, 8 edges, 5 faces → 5−8+5=2</pre>`,
          `<p><em>Square pyramid: V=5, E=8. Find F.</em></p><ol class="we-steps"><li>Write V−E+F=2.</li><li>Substitute: 5−8+F=2.</li><li>Add 3 to both sides: F=5, matching four triangles plus one square.</li></ol><p class="we-answer">5 faces</p>`,
          `<p><em>Triangular prism: V=6, F=5. Find E.</em></p><ol class="we-steps"><li>6−E+5=2.</li><li>Combine: 11−E=2.</li><li>Subtract 11: −E=−9, then multiply by −1: E=9.</li></ol><p class="we-answer">9 edges</p>`,
          `A polyhedron has E=12 and F=6. <strong>Partial setup:</strong> V−12+6=2; add 6 to both sides to get V=___.`,
          "Losing the negative sign on E, or counting a hidden edge twice/forgetting it before using the formula.",
          [
            check("A hexagonal prism has V=12 and E=18. Find F.", ["8", "6", "30", "4"], 0, "12−18+F=2, so F=8."),
            check("A convex polyhedron has F=6 and E=12. Find V.", ["8", "10", "6", "4"], 0, "V−12+6=2 gives V=8.")
          ]
        ),
        section(
          "Nets of 3D solids",
          "Surface area is the sum of every exposed face. A net keeps faces joined along edges so they can fold without overlap.",
          "A net is a solid cut open and laid flat. Matching net edges become matching solid edges; adding the flat pieces gives surface area.",
          `<pre class="diagram">Cube net                     Cylinder net
        [□]                       ○
    [□][□][□][□]             [  rectangle  ]
        [□]                       ○
six squares fold            rectangle width = 2πr
to six faces                rectangle height = h</pre>`,
          `<p><em>Square-pyramid net: square side 4; four triangles base 4, height 5.</em></p><ol class="we-steps"><li>The center square is the base: 4²=16.</li><li>Each flap is (1/2)(4)(5)=10.</li><li>Four flaps total 40; surface area 16+40=56.</li></ol><p class="we-answer">56 square units</p>`,
          `<p><em>Cylinder r=3, h=10.</em></p><ol class="we-steps"><li>Two net circles total 2&pi;(3²)=18&pi;.</li><li>The side unwraps to width 2&pi;r=6&pi; and height 10, area 60&pi;.</li><li>Total is 78&pi;.</li></ol><p class="we-answer">78&pi; square units</p>`,
          `A triangular-prism net has two 3-4-5 triangles and three rectangles of length 12. <strong>Hint:</strong> bases total 2(1/2&middot;3&middot;4); rectangles total 12(3+4+5).`,
          "Using a cylinder's diameter as the net rectangle width; it must wrap around the full circumference 2πr.",
          [
            check("A valid net made of six congruent squares folds into a:", ["cube", "square pyramid", "triangular prism", "cone"], 0, "A cube has exactly six congruent square faces."),
            check("A 3-4-5 triangular prism of length 12 has total surface area:", ["156", "144", "150", "162"], 0, "Bases total 12; rectangles total 12(3+4+5)=144; total 156.")
          ]
        ),
        section(
          "Cross sections",
          "A plane is a perfectly flat sheet. A cross section is the two-dimensional region formed by the intersection of that plane and a solid.",
          "Hold the cutting plane still and notice which surfaces it meets. Parallel, vertical, and tilted cuts can produce different shapes.",
          `<pre class="diagram">Cylinder                     Cone
   ______                    /\\
  /------\\ ← parallel       /--\\ ← parallel: circle
 |  |  |  | ← through axis / |  \\ ← through apex: triangle
  \\_|__|_/                 /__|___\\
parallel → circle
through axis → rectangle    Sphere: every plane slice → circle
tilted → ellipse</pre>`,
          `<p><em>A plane cuts a cylinder parallel to its bases.</em></p><ol class="we-steps"><li>At every height the cylinder has the same circular outline.</li><li>A parallel plane meets that outline all the way around.</li><li>The section is a circle congruent to a base.</li></ol><p class="we-answer">Circle</p>`,
          `<p><em>A plane passes through a cone's apex and crosses its base.</em></p><ol class="we-steps"><li>The plane meets the curved surface along two straight generators from the apex.</li><li>It meets the base along one chord.</li><li>Those three segments enclose a triangle.</li></ol><p class="we-answer">Triangle</p>`,
          `A plane passes through a cylinder's axis from top to bottom. <strong>Hint:</strong> two vertical side segments plus a diameter on each base form a ___.`,
          "Assuming every tilted cut is an ellipse; a cone cut through its apex has straight sides and is triangular.",
          [
            check("A plane parallel to a cylinder's base makes what cross section?", ["circle", "rectangle", "triangle", "parabola"], 0, "A parallel slice reproduces the circular base."),
            check("A sphere has radius 10; a plane is 6 from its center. Cross-section radius?", ["8", "4", "16", "6"], 0, "The radii form a right triangle: r²+6²=10², so r=8.")
          ]
        )
      ]
    },

    "geo-06": {
      title: "Coordinate geometry & transformations",
      domain: "geometry",
      intro: `<p><strong>NES NT304 competency 0010:</strong> Use coordinates to describe position, distance, lines, and transformations.</p>`,
      sections: [
        section(
          "Distance, midpoint, and slope",
          "<strong>Advanced; review alg-03 first.</strong> A coordinate pair (x,y) means move x horizontally, then y vertically. Positive x is right; positive y is up.",
          "The coordinate plane is a numbered map. Distance comes from a right triangle, midpoint averages locations, and slope is vertical change divided by horizontal change.",
          `<pre class="diagram">             y
             ↑
        B(4,6)•
             |  rise = 4
             |
        A(1,2)•———→ run = 3
-------------+--------------→ x
distance = √(3²+4²)
slope = rise/run = 4/3</pre>`,
          `<p><em>Distance from (1,2) to (4,6).</em></p><ol class="we-steps"><li>Horizontal change is 4−1=3; vertical change is 6−2=4.</li><li>These are right-triangle legs.</li><li>Distance=&radic;(3²+4²)=5.</li></ol><p class="we-answer">5</p>`,
          `<p><em>Find midpoint of (−3,5) and (7,1).</em></p><ol class="we-steps"><li>Halfway horizontally is the average: (−3+7)/2=2.</li><li>Halfway vertically is (5+1)/2=3.</li><li>The midpoint is (2,3); it is equally displaced from both ends.</li></ol><p class="we-answer">(2,3)</p>`,
          `Find slope from (2,1) to (6,9). <strong>Partial setup:</strong> rise=9−1=8; run=6−2=4; slope=8/4=___.`,
          "Mixing x and y subtraction orders. If y₂−y₁ is used on top, use x₂−x₁ on bottom.",
          [
            check("What is the midpoint of (−3,5) and (7,1)?", ["(2,3)", "(4,6)", "(2,6)", "(5,3)"], 0, "Average x-values and y-values separately: (2,3)."),
            check("Are (1,2), (4,8), and (6,12) collinear?", ["Yes; both connecting slopes are 2", "No; slopes are 2 and 3", "Yes; distances are equal", "No"], 0, "Slopes AB=6/3=2 and BC=4/2=2, so the shared segments lie on one line.")
          ]
        ),
        section(
          "Rigid motions: reflections, rotations & translations",
          "On the coordinate plane, x controls left/right and y controls down/up. Review ordered pairs before using rules.",
          "A rigid motion moves a figure without stretching it, so the image is congruent to the original. A translation slides, a reflection flips, and a rotation turns.",
          `<pre class="diagram">y-axis mirror:
(-3,2) • ——|—— • (3,2)
            y
            ↑
90° CCW: (x,y) → (-y,x)
translation right a, up b:
(x,y) → (x+a,y+b)</pre>`,
          `<p><em>Rotate (4,−3) 90° counterclockwise about the origin.</em></p><ol class="we-steps"><li>Picture the ray turning one quarter-turn left.</li><li>Use (x,y)→(−y,x).</li><li>(4,−3)→(3,4), which lies in quadrant I as the picture predicts.</li></ol><p class="we-answer">(3,4)</p>`,
          `<p><em>Reflect (2,5) over x-axis, then move right 3 and down 4.</em></p><ol class="we-steps"><li>Reflection changes vertical sign: (2,5)→(2,−5).</li><li>Use that image as the new input.</li><li>Add (3,−4): (2,−5)→(5,−9).</li></ol><p class="we-answer">(5,−9)</p>`,
          `Translate (−1,4) right 5 and down 2. <strong>Hint:</strong> (−1+5, 4−2) = (___,___).`,
          "Changing the wrong coordinate in a reflection or applying a sequence in reverse order.",
          [
            check("Reflect (−2,6) over the y-axis.", ["(2,6)", "(−2,−6)", "(6,−2)", "(2,−6)"], 0, "A y-axis reflection flips x only."),
            check("Move (3,−4) left 5 and up 2, then reflect over x-axis.", ["(−2,2)", "(−2,−2)", "(2,2)", "(−2,6)"], 0, "Translate to (−2,−2), then flip y to get (−2,2).")
          ]
        ),
        section(
          "Dilations and similarity transformations",
          "<strong>Advanced; review alg-03 first.</strong> Multiplying a coordinate changes its signed distance from the origin.",
          "A dilation stretches every point's distance from a center by k. It preserves shape and angles (similarity), but preserves size only when |k|=1.",
          `<pre class="diagram">center O(0,0)
O——A(2,1)———A'(6,3)
OA' = 3·OA, so k=3

center C(p,q):
point − center → scale by k → add center back
(x−p,y−q) → (k(x−p),k(y−q)) → image</pre>`,
          `<p><em>Dilate A(2,3) by k=3 about the origin.</em></p><ol class="we-steps"><li>A is 2 right and 3 up from the center.</li><li>Triple both displacements: 6 right and 9 up.</li><li>A'=(6,9); every length triples and area grows by 9.</li></ol><p class="we-answer">(6,9)</p>`,
          `<p><em>Dilate B(5,4) by k=2 about C(1,2).</em></p><ol class="we-steps"><li>Relative to C, B−C=(4,2).</li><li>Scale that displacement: (8,4).</li><li>Add C back: (8+1,4+2)=(9,6).</li></ol><p class="we-answer">(9,6)</p>`,
          `Dilate (4,−6) by 1/2 about the origin. <strong>Partial setup:</strong> (4&middot;1/2, −6&middot;1/2) = (___,___).`,
          "Multiplying raw coordinates when the dilation center is not the origin; scale the displacement from the center.",
          [
            check("Dilate (4,−6) by k=1/2 about the origin.", ["(2,−3)", "(8,−12)", "(2,−12)", "(4.5,−5.5)"], 0, "Multiply each coordinate by 1/2."),
            check("Under k=4 dilation, side length and area are multiplied by:", ["4 and 16", "4 and 4", "16 and 64", "1 and 4"], 0, "Lengths scale by k=4; tiled areas scale by k²=16.")
          ]
        )
      ]
    },

    "geo-07": {
      title: "Conic sections",
      domain: "geometry",
      intro: `<p><strong>NES NT304 competency 0010:</strong> Connect conic shapes to their geometric definitions and equations. These are advanced topics.</p>`,
      sections: [
        section(
          "Circles and ellipses: meaning before form",
          "<strong>Advanced; review alg-03 and alg-04 first.</strong> Be comfortable with coordinates, distance, squares, and square roots.",
          "A circle is all points one fixed distance from a center. An ellipse is all points whose distances to two fixed foci have a fixed sum. Standard forms record the center and horizontal/vertical reach.",
          `<pre class="diagram">Circle: fixed distance r       Ellipse: fixed distance sum
          • P                           • P
       .- | -.                      .-'''''''-.
      /   r   \\                   F1•———+———•F2
     |    C    |                  PF1 + PF2 = constant
      \\       /

circle: (x−h)²+(y−k)²=r²
ellipse: (x−h)²/a²+(y−k)²/b²=1</pre>`,
          `<p><em>Read (x+2)²+(y−5)²=49.</em></p><ol class="we-steps"><li>The center makes both coordinate differences zero: (−2,5).</li><li>The right side is squared distance r²=49.</li><li>r=7, so every solution point is 7 from the center.</li></ol><p class="we-answer">Center (−2,5), radius 7</p>`,
          `<p><em>Read (x−3)²/16+(y+1)²/25=1.</em></p><ol class="we-steps"><li>Center is (3,−1).</li><li>At x=3, y can differ by &radic;25=5; at y=−1, x can differ by &radic;16=4.</li><li>The longer reach is vertical, so semi-major axis 5 and semi-minor axis 4.</li></ol><p class="we-answer">Center (3,−1); vertical semi-major 5</p>`,
          `For (x−4)²+(y+3)²=81, <strong>hint:</strong> center signs reverse inside parentheses; radius is &radic;81.`,
          "Calling the ellipse denominator itself an axis length. Denominators are squared reaches, so take square roots.",
          [
            check("For (x−4)²+(y+3)²=81, center and radius are:", ["(4,−3), 9", "(−4,3), 9", "(4,−3), 81", "(4,3), 9"], 0, "The center is (4,−3), and radius √81=9."),
            check("For (x−1)²/36+(y−2)²/9=1, the major direction and semi-major length are:", ["horizontal, 6", "vertical, 6", "horizontal, 36", "vertical, 3"], 0, "The larger squared reach 36 is under x; √36=6 horizontally.")
          ]
        ),
        section(
          "Parabolas and hyperbolas: one shape at a time",
          "<strong>Advanced; review alg-03 and alg-04 first.</strong> Know vertex form and how signs control direction.",
          "A parabola contains points equally distant from a focus and a line called the directrix. A hyperbola contains points whose distances to two foci have a fixed difference. Their equations reflect those different geometries.",
          `<pre class="diagram">Parabola                      Hyperbola
directrix ----------          )      (
             V•               ) F1 F2(
              \\              two separate branches
               • focus        distance difference fixed

y=a(x−h)²+k: vertex (h,k)
hyperbola has subtraction; the positive squared term gives opening.</pre>`,
          `<p><em>Read y=−3(x−4)²+5.</em></p><ol class="we-steps"><li>The minimum/maximum turning point is vertex (4,5).</li><li>The symmetry line is x=4.</li><li>a is negative, so values fall on both sides: it opens down.</li></ol><p class="we-answer">Vertex (4,5); opens down</p>`,
          `<p><em>Read (y−2)²/9−(x+1)²/16=1.</em></p><ol class="we-steps"><li>The subtraction identifies a hyperbola, not an ellipse.</li><li>Center is (−1,2).</li><li>The positive y-term controls opening: vertical; a²=9 gives center-to-vertex distance 3.</li></ol><p class="we-answer">Center (−1,2); opens up/down; a=3</p>`,
          `For x=(1/2)(y+2)²−6, <strong>hint:</strong> y is squared, so the parabola is sideways; vertex is (−6,−2), and positive coefficient means right.`,
          "Using an ellipse's “largest denominator” rule on a hyperbola; for a hyperbola, the positive term determines opening.",
          [
            check("What is the vertex of y=4(x+1)²−9?", ["(−1,−9)", "(1,−9)", "(−1,9)", "(1,9)"], 0, "x+1=x−(−1), so h=−1 and k=−9."),
            check("For (y−2)²/9−(x+1)²/16=1, opening and a are:", ["vertical, 3", "horizontal, 4", "vertical, 4", "horizontal, 3"], 0, "The positive y-term gives vertical opening, and a=√9=3.")
          ]
        ),
        section(
          "Completing the square to identify a conic",
          "<strong>Advanced; review alg-03 and alg-04 first.</strong> You must preserve equality: any amount added to one side must be added to the other.",
          "Completing the square turns x²+bx into (x+b/2)² by adding (b/2)². The added tile fills a square corner; equation balance requires an equal addition on both sides, including any outside coefficient.",
          `<pre class="diagram">x² + 6x needs a corner:
┌──────x──────┬──3──┐
│             │     │  x
├─────────────┼─────┤
│             │ +9  │  3
└─────────────┴─────┘
x²+6x+9=(x+3)²

Balance: left +9  =  right +9</pre>`,
          `<p><em>x²+y²−4x+6y−3=0.</em></p><ol class="we-steps"><li>Move −3 by adding 3 to both sides: (x²−4x)+(y²+6y)=3.</li><li>x-group needs (−4/2)²=4; y-group needs (6/2)²=9.</li><li>Add 4+9 to both sides: (x²−4x+4)+(y²+6y+9)=3+4+9.</li><li>Rewrite: (x−2)²+(y+3)²=16.</li></ol><p class="we-answer">Circle, center (2,−3), radius 4</p>`,
          `<p><em>4x²+9y²−16x+18y−11=0.</em></p><ol class="we-steps"><li>Add 11 to both sides and factor groups: 4(x²−4x)+9(y²+2y)=11.</li><li>Inside, x needs +4, but outside 4 makes the actual left addition 16; y needs +1, and outside 9 makes 9.</li><li>Balance with +16+9 on the right: 4(x²−4x+4)+9(y²+2y+1)=36.</li><li>Rewrite and divide every term by 36: (x−2)²/9+(y+1)²/4=1.</li></ol><p class="we-answer">Ellipse, center (2,−1)</p>`,
          `Complete x²+8x. <strong>Partial setup:</strong> half of 8 is 4; square it to add 16: x²+8x+16=(x+___)². If this is in an equation, add ___ to the other side too.`,
          "Adding the inside completion number to the right without multiplying by an outside coefficient; 4(x²−4x+4) adds 16, not 4.",
          [
            check("What is the center of x²+y²+8x−2y+8=0?", ["(−4,1)", "(4,−1)", "(−4,−1)", "(8,−2)"], 0, "Completing gives (x+4)²+(y−1)²=9, so center (−4,1)."),
            check("What is the center of 9x²−4y²−18x−16y−43=0?", ["(1,−2)", "(−1,2)", "(1,2)", "(2,−1)"], 0, "Completing gives 9(x−1)²−4(y+2)²=36, so center (1,−2).")
          ]
        )
      ]
    }
  });
}());
