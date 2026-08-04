/* Deep, interactive teaching -- Trigonometry & Calculus */
window.LESSONS = Object.assign(window.LESSONS || {}, {
  "tc-01": {
    title: "Right-triangle trig & applications",
    domain: "trigcalc",
    intro: `<p><strong>Goal (NES NT304 competency 0011):</strong> Build right-triangle trigonometry from side ratios, solve for sides and angles, and model elevation and depression situations.</p>`,
    sections: [
      {
        heading: "Side ratios begin with a labeled triangle",
        body: `
          <p><strong>Prerequisite reminder:</strong> A right triangle has one 90° angle. Its longest side, opposite 90°, is the hypotenuse. For a chosen acute angle θ, the leg across from θ is opposite and the touching leg that is not the hypotenuse is adjacent.</p>
          <p><strong>Plain meaning:</strong> Trig ratios compare side lengths. Triangles with the same acute angle have the same shape, so their side ratios stay fixed even when the triangle is enlarged.</p>
          <div class="formula">         opposite
            |\\
            | \\ hypotenuse
            |θ_\\
            adjacent

sin θ = opposite/hypotenuse   cos θ = adjacent/hypotenuse   tan θ = opposite/adjacent</div>
          <table><tr><th>Known/wanted sides</th><th>Ratio</th></tr><tr><td>opposite and hypotenuse</td><td>sine</td></tr><tr><td>adjacent and hypotenuse</td><td>cosine</td></tr><tr><td>opposite and adjacent</td><td>tangent</td></tr></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — ratio first</div><p><em>Relative to θ, opposite = 6 and hypotenuse = 10. Find sin θ.</em></p><ol class="we-steps"><li>Point to the chosen angle θ; the labels are relative to it.</li><li>Sine compares opposite with hypotenuse: sin θ = 6/10.</li><li>Reduce the ratio: sin θ = 3/5.</li></ol><p class="we-answer">Answer: 3/5</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — find a side</div><p><em>θ = 35° and the adjacent leg is 12. Find the opposite leg x.</em></p><ol class="we-steps"><li>The two involved legs are opposite x and adjacent 12, so choose tangent.</li><li>Write the relationship before calculating: tan(35°) = x/12.</li><li>Multiply by 12: x = 12tan(35°) ≈ 8.40.</li></ol><p class="we-answer">Answer: x ≈ 8.4 units</p></div>
          <div class="callout"><strong>Guided practice:</strong> If θ = 28° and the hypotenuse is 15, find the adjacent side a. <strong>Hint/partial setup:</strong> adjacent and hypotenuse signal cosine: cos(28°) = a/15; now isolate a.</div>
          <div class="callout"><strong>Common mistake:</strong> Calling the touching leg “adjacent” without first locating θ. The labels opposite and adjacent swap when the chosen acute angle changes; the hypotenuse never changes.</div>
        `,
        checks: [
          { prompt: "Relative to θ, opposite = 9 and adjacent = 40. What is tan θ?", choices: ["9/40", "40/9", "9/41", "41/40"], answer: 0, explain: "Tangent compares opposite to adjacent, so tan θ = 9/40." },
          { prompt: "θ = 30° and the hypotenuse is 14. Which setup finds the opposite side x?", choices: ["sin(30°) = x/14", "cos(30°) = x/14", "tan(30°) = 14/x", "sin(30°) = 14/x"], answer: 0, explain: "Opposite and hypotenuse use sine: sin(30°) = x/14." }
        ]
      },
      {
        heading: "Inverse trig finds an angle",
        body: `
          <p><strong>Prerequisite reminder:</strong> First label opposite, adjacent, and hypotenuse relative to the unknown angle. A calculator must be in degree mode when the requested answer is in degrees.</p>
          <p><strong>Plain meaning:</strong> Sine turns an angle into a side ratio; sin⁻¹ (arcsin) reverses that action. Cos⁻¹ and tan⁻¹ similarly recover an angle from their ratios. The superscript −1 here means inverse function, not reciprocal.</p>
          <table><tr><th>If you know</th><th>Angle command</th></tr><tr><td>opposite/hypotenuse = r</td><td>θ = sin⁻¹(r)</td></tr><tr><td>adjacent/hypotenuse = r</td><td>θ = cos⁻¹(r)</td></tr><tr><td>opposite/adjacent = r</td><td>θ = tan⁻¹(r)</td></tr></table>
          <div class="formula">ratio ──trig⁻¹──▶ angle
Example calculator entry: asin(0.6) or sin⁻¹(0.6)</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — from two legs</div><p><em>Opposite = 8 and adjacent = 15. Find θ.</em></p><ol class="we-steps"><li>The known pair points to tangent: tan θ = 8/15.</li><li>Undo tangent: θ = tan⁻¹(8/15).</li><li>In degree mode, θ ≈ 28.1°.</li></ol><p class="we-answer">Answer: θ ≈ 28.1°</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — from a hypotenuse</div><p><em>Adjacent = 5 and hypotenuse = 13. Find θ.</em></p><ol class="we-steps"><li>This pair points to cosine: cos θ = 5/13.</li><li>Use the inverse, not 1/cos: θ = cos⁻¹(5/13).</li><li>In degree mode, θ ≈ 67.4°; the large angle fits the short adjacent leg.</li></ol><p class="we-answer">Answer: θ ≈ 67.4°</p></div>
          <div class="callout"><strong>Guided practice:</strong> Opposite = 7 and hypotenuse = 25. Find θ. <strong>Hint/partial setup:</strong> sin θ = 7/25, so θ = sin⁻¹(7/25). Check degree mode.</div>
          <div class="callout"><strong>Common mistake:</strong> Entering sin(7/25) instead of sin⁻¹(7/25), or leaving the calculator in radian mode. Estimate whether the angle should be small or large to catch mode errors.</div>
        `,
        checks: [
          { prompt: "A ladder is 11 ft long and its base is 4 ft from a wall. Which expression gives its angle θ with the ground?", choices: ["cos⁻¹(4/11)", "sin⁻¹(4/11)", "tan⁻¹(4/11)", "cos⁻¹(11/4)"], answer: 0, explain: "At the ground angle, 4 is adjacent and 11 is the hypotenuse, so θ = cos⁻¹(4/11)." },
          { prompt: "If opposite = 12 and adjacent = 9, θ is approximately:", choices: ["53.1°", "36.9°", "0.9°", "90.0°"], answer: 0, explain: "θ = tan⁻¹(12/9) ≈ 53.1°." }
        ]
      },
      {
        heading: "Applications: elevation and depression",
        body: `
          <p><strong>Prerequisite reminder:</strong> Draw a right triangle, label units, and identify the horizontal and vertical distances before selecting a trig ratio.</p>
          <p><strong>Plain meaning:</strong> An angle of elevation is measured upward from a horizontal line; an angle of depression is measured downward from a horizontal line. Parallel horizontal lines make the depression angle equal to the corresponding elevation angle.</p>
          <div class="formula">top •──────── horizontal
     |\\  depression
height| \\
     |__\\• observer
       distance

tan(angle) = vertical change / horizontal change</div>
          <table><tr><th>Story clue</th><th>Model adjustment</th></tr><tr><td>eye level given</td><td>add it after finding rise above eyes</td></tr><tr><td>angle of depression</td><td>transfer angle to lower horizontal</td></tr><tr><td>sloped line given</td><td>it is usually the hypotenuse</td></tr></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — height above eye level</div><p><em>An observer's eyes are 5 ft high, 30 ft from a tree. Elevation to the top is 40°. Find total height.</em></p><ol class="we-steps"><li>The triangle's rise is above eye level: tan(40°) = rise/30.</li><li>rise = 30tan(40°) ≈ 25.17 ft.</li><li>Add the 5-ft eye height: 25.17 + 5 ≈ 30.17 ft.</li></ol><p class="we-answer">Answer: about 30.2 ft</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — depression and denominator</div><p><em>From a 120-ft cliff, depression to a boat is 25°. Find horizontal distance d.</em></p><ol class="we-steps"><li>Transfer 25° to the boat's elevation angle.</li><li>Vertical 120 is opposite and d is adjacent: tan(25°) = 120/d.</li><li>Multiply by d and divide by tan(25°): d = 120/tan(25°) ≈ 257.3 ft.</li></ol><p class="we-answer">Answer: about 257.3 ft</p></div>
          <div class="callout"><strong>Guided practice:</strong> From 50 m away, elevation to a building is 55°. Find its height h. <strong>Hint/partial setup:</strong> tan(55°) = h/50, so h = 50tan(55°).</div>
          <div class="callout"><strong>Common mistake:</strong> Adding eye height when the observation starts at ground level, or forgetting it when the line of sight begins above ground. The sketch shows exactly what the triangle's vertical leg measures.</div>
        `,
        checks: [
          { prompt: "A person stands 30 m from a building; elevation to the top is 55°. Ignoring eye height, what is the building height?", choices: ["≈ 42.8 m", "≈ 21.0 m", "≈ 24.6 m", "≈ 17.2 m"], answer: 0, explain: "tan(55°) = h/30, so h = 30tan(55°) ≈ 42.8 m." },
          { prompt: "From a 60-ft tower, depression to a car is 30°. What setup finds horizontal distance d?", choices: ["tan(30°) = 60/d", "tan(30°) = d/60", "sin(30°) = 60/d", "cos(30°) = d/60"], answer: 0, explain: "At the car, 60 is opposite and d is adjacent, so tan(30°) = 60/d." }
        ]
      }
    ]
  },

  "tc-02": {
    title: "Unit circle & trig graphs",
    domain: "trigcalc",
    intro: `<p><strong>Goal (NES NT304 competency 0011):</strong> Connect degrees, radians, unit-circle coordinates, signs, and transformations of sine and cosine graphs.</p>`,
    sections: [
      {
        heading: "Degrees, radians, and distance around a circle",
        body: `
          <p><strong>Prerequisite reminder:</strong> A full turn is 360° and a semicircle is 180°. A circle of radius r has circumference 2πr.</p>
          <p><strong>Plain meaning:</strong> Degrees divide a turn into 360 parts. Radians measure angle by arc length: on a unit circle, an angle of θ radians cuts off an arc of length θ. One full unit circle has length 2π, so 360° = 2π radians and 180° = π radians.</p>
          <table><tr><th>Turn</th><th>Degrees</th><th>Radians</th></tr><tr><td>quarter</td><td>90°</td><td>π/2</td></tr><tr><td>half</td><td>180°</td><td>π</td></tr><tr><td>full</td><td>360°</td><td>2π</td></tr></table>
          <div class="formula">degrees × π/180 = radians
radians × 180/π = degrees
0 → π/2 → π → 3π/2 → 2π around one turn</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — degrees to radians</div><p><em>Convert 150° to radians.</em></p><ol class="we-steps"><li>Multiply by π/180 so degree units cancel.</li><li>150(π/180) = 150π/180.</li><li>Reduce 150/180 to 5/6: 5π/6.</li></ol><p class="we-answer">Answer: 5π/6</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — radians to degrees</div><p><em>Convert 7π/4 radians to degrees.</em></p><ol class="we-steps"><li>Multiply by 180/π so π cancels.</li><li>(7π/4)(180/π) = 7·45.</li><li>7·45 = 315°.</li></ol><p class="we-answer">Answer: 315°</p></div>
          <div class="callout"><strong>Guided practice:</strong> Convert 225° to radians. <strong>Hint/partial setup:</strong> 225(π/180); reduce 225/180 by 45.</div>
          <div class="callout"><strong>Common mistake:</strong> Using π/180 in both directions. Ask what unit must cancel: degrees-to-radians needs π radians over 180 degrees; reverse the factor for radians-to-degrees.</div>
        `,
        checks: [
          { prompt: "Convert 60° to radians.", choices: ["π/3", "π/6", "2π/3", "3π"], answer: 0, explain: "60(π/180) = π/3." },
          { prompt: "Convert 5π/6 radians to degrees.", choices: ["150°", "120°", "210°", "300°"], answer: 0, explain: "(5π/6)(180/π) = 5·30 = 150°." }
        ]
      },
      {
        heading: "Unit-circle coordinates create trig values",
        body: `
          <p><strong>Prerequisite reminder:</strong> Coordinates are (x,y). On x² + y² = 1, right/left determine the sign of x and up/down determine the sign of y.</p>
          <p><strong>Plain meaning:</strong> Start at (1,0) and rotate θ. The landing point is (cos θ, sin θ). Thus signs come from location, not a memorized slogan: left means cosine is negative; below means sine is negative; tan θ = y/x has the sign of that quotient.</p>
          <div class="formula">             (0,1)
                |
(-1,0) ─────── (0,0) ─────── (1,0)
                |
             (0,-1)
point = (cos θ, sin θ),  tan θ = sin θ/cos θ = y/x</div>
          <table><tr><th>Reference triangle</th><th>|x|</th><th>|y|</th></tr><tr><td>30°</td><td>√3/2</td><td>1/2</td></tr><tr><td>45°</td><td>√2/2</td><td>√2/2</td></tr><tr><td>60°</td><td>1/2</td><td>√3/2</td></tr></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — derive coordinates</div><p><em>Find the point and sin(120°).</em></p><ol class="we-steps"><li>120° is 60° above the negative x-axis, so its reference triangle has magnitudes (1/2, √3/2).</li><li>The point is left (x negative) and up (y positive): (−1/2, √3/2).</li><li>Sine is the y-coordinate, so sin(120°) = √3/2.</li></ol><p class="we-answer">Answer: point (−1/2, √3/2); sine √3/2</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — derive tangent sign</div><p><em>Find tan(225°).</em></p><ol class="we-steps"><li>225° is 45° past 180°, in the lower-left region.</li><li>The coordinates are (−√2/2, −√2/2).</li><li>tan θ = y/x, so (−√2/2)/(−√2/2) = 1.</li></ol><p class="we-answer">Answer: tan(225°) = 1</p></div>
          <div class="callout"><strong>Guided practice:</strong> Find cos(300°). <strong>Hint/partial setup:</strong> 300° is 60° below the positive x-axis; use 60° magnitudes and note that x is positive.</div>
          <div class="callout"><strong>Common mistake:</strong> Swapping coordinates. Cosine is horizontal x; sine is vertical y. At 90° the point (0,1) makes this easy to verify.</div>
        `,
        checks: [
          { prompt: "What is cos(210°)?", choices: ["−√3/2", "√3/2", "−1/2", "1/2"], answer: 0, explain: "210° has 30° reference magnitudes and lies left/below, so x = cos(210°) = −√3/2." },
          { prompt: "What is sin(300°) + cos(300°)?", choices: ["(1−√3)/2", "(1+√3)/2", "(√3−1)/2", "−(1+√3)/2"], answer: 0, explain: "The point is (1/2,−√3/2), so the sum is (1−√3)/2." }
        ]
      },
      {
        heading: "Reading and transforming sine and cosine graphs",
        body: `
          <p><strong>Prerequisite reminder:</strong> A graph plots input x horizontally and output y vertically. Sine and cosine repeat every 2π radians.</p>
          <p><strong>Plain meaning:</strong> In y = A sin(B(x−C))+D, |A| is vertical reach from the midline, 2π/|B| is cycle length, C shifts horizontally, and D moves the midline. Cosine uses the same transformations.</p>
          <div class="formula">y
D+|A|     •       •
D      •     • •     •   midline
D-|A|          •
       C ─────────── C+period       x</div>
          <table><tr><th>Feature</th><th>From equation</th><th>Graph meaning</th></tr><tr><td>amplitude</td><td>|A|</td><td>midline to peak</td></tr><tr><td>period</td><td>2π/|B|</td><td>one cycle width</td></tr><tr><td>phase shift</td><td>C after factoring B</td><td>horizontal move</td></tr><tr><td>vertical shift</td><td>D</td><td>midline y=D</td></tr></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — read clean form</div><p><em>Analyze y = 3sin(2(x−π/4))−1.</em></p><ol class="we-steps"><li>A=3, so amplitude is 3; D=−1, so midline is y=−1.</li><li>B=2, so period = 2π/2 = π.</li><li>C=π/4, so shift right π/4.</li></ol><p class="we-answer">Answer: amplitude 3, period π, right π/4, midline y=−1</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — factor before reading</div><p><em>Analyze y = −2cos(4x+2π)+5.</em></p><ol class="we-steps"><li>Factor the argument: 4x+2π = 4(x+π/2).</li><li>Amplitude is |−2|=2; period is 2π/4=π/2.</li><li>x+π/2 means left π/2; D=5 gives midline y=5. The negative A reflects the wave.</li></ol><p class="we-answer">Answer: amplitude 2, period π/2, left π/2, midline y=5</p></div>
          <div class="callout"><strong>Guided practice:</strong> Analyze y = 4sin(3x−π)+2. <strong>Hint/partial setup:</strong> 3x−π = 3(x−π/3); now identify A, B, C, D.</div>
          <div class="callout"><strong>Common mistake:</strong> Reading 2π as the shift in 4x+2π. Factor B first: the actual inside shift is π/2 left.</div>
        `,
        checks: [
          { prompt: "For y = −2cos(4x)+7, what are amplitude and period?", choices: ["2 and π/2", "−2 and π/2", "2 and 8π", "7 and π/2"], answer: 0, explain: "Amplitude is |−2|=2 and period is 2π/4=π/2." },
          { prompt: "For y = 3sin(4x−2π)+5, what is the phase shift?", choices: ["Right π/2", "Right 2π", "Left π/2", "Right 8π"], answer: 0, explain: "4x−2π = 4(x−π/2), so the shift is right π/2." }
        ]
      }
    ]
  },

  "tc-03": {
    title: "Identities & trig equations",
    domain: "trigcalc",
    intro: `<p><strong>Goal (NES NT304 competency 0011):</strong> Derive core identities from coordinates and angle addition, then use them to find values and solve equations.</p>`,
    sections: [
      {
        heading: "Deriving the Pythagorean identity",
        body: `
          <p><strong>Prerequisite reminder:</strong> Every unit-circle point satisfies x²+y²=1, and the point at angle θ is (cos θ,sin θ).</p>
          <p><strong>Plain meaning:</strong> Substitute x=cos θ and y=sin θ into the circle equation. This produces sin²θ+cos²θ=1; it is geometry, not an isolated formula. Signs still come from the coordinate location.</p>
          <div class="formula">x² + y² = 1
↓ x=cos θ, y=sin θ
cos²θ + sin²θ = 1</div>
          <table><tr><th>Region</th><th>x=cos θ</th><th>y=sin θ</th></tr><tr><td>right/up</td><td>+</td><td>+</td></tr><tr><td>left/up</td><td>−</td><td>+</td></tr><tr><td>left/down</td><td>−</td><td>−</td></tr><tr><td>right/down</td><td>+</td><td>−</td></tr></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — identity route</div><p><em>sin θ=12/13 and θ is left/up. Find cos θ.</em></p><ol class="we-steps"><li>cos²θ = 1−sin²θ = 1−144/169 = 25/169.</li><li>Taking a square root gives cos θ = ±5/13.</li><li>Left means x=cos θ is negative, so cos θ=−5/13.</li></ol><p class="we-answer">Answer: −5/13</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — coordinate triangle route</div><p><em>tan θ=−3/4 and θ is left/up. Find sine and cosine.</em></p><ol class="we-steps"><li>|tan θ|=|y/x|=3/4, so use legs 3 and 4; the hypotenuse is 5.</li><li>Left gives x negative; up gives y positive.</li><li>Therefore cos θ=−4/5 and sin θ=3/5; their quotient is −3/4.</li></ol><p class="we-answer">Answer: sin θ=3/5, cos θ=−4/5</p></div>
          <div class="callout"><strong>Guided practice:</strong> cos θ=−8/17 and θ is left/down. Find sin θ. <strong>Hint/partial setup:</strong> sin²θ=1−64/289=225/289; then choose the sign from “down.”</div>
          <div class="callout"><strong>Common mistake:</strong> Writing only the positive square root. Squaring erases sign, so restore it from the point's left/right and up/down location.</div>
        `,
        checks: [
          { prompt: "If sin θ=7/25 and θ is right/up, what is cos θ?", choices: ["24/25", "−24/25", "7/24", "24/7"], answer: 0, explain: "cos²θ=1−49/625=576/625, and right means cosine is positive: 24/25." },
          { prompt: "If tan θ=5/12 and θ is left/down, what is cos θ?", choices: ["−12/13", "12/13", "−5/13", "−13/12"], answer: 0, explain: "A 5-12-13 triangle supplies the magnitudes, and left means cosine is −12/13." }
        ]
      },
      {
        heading: "Deriving and using double-angle identities",
        body: `
          <p><strong>Prerequisite reminder:</strong> The angle-sum formulas are sin(a+b)=sin a cos b+cos a sin b and cos(a+b)=cos a cos b−sin a sin b.</p>
          <p><strong>Plain meaning:</strong> A double angle is θ+θ. Substitute a=b=θ into the sum formulas; then use sin²θ+cos²θ=1 to create alternate cosine forms. Derive first, then choose the form matching the information given.</p>
          <div class="formula">sin(θ+θ)=sinθ cosθ+cosθ sinθ=2sinθ cosθ
cos(θ+θ)=cos²θ−sin²θ
=2cos²θ−1=1−2sin²θ</div>
          <table><tr><th>Given</th><th>Efficient identity</th></tr><tr><td>sin and cos</td><td>sin(2θ)=2sinθcosθ</td></tr><tr><td>cos only</td><td>cos(2θ)=2cos²θ−1</td></tr><tr><td>sin only</td><td>cos(2θ)=1−2sin²θ</td></tr></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — both ratios</div><p><em>sin θ=3/5 and θ is right/up. Find sin(2θ).</em></p><ol class="we-steps"><li>The 3-4-5 triangle gives cos θ=4/5.</li><li>Use the derived product: sin(2θ)=2sinθcosθ.</li><li>2(3/5)(4/5)=24/25.</li></ol><p class="we-answer">Answer: 24/25</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — one-ratio shortcut</div><p><em>cos θ=−1/3. Find cos(2θ).</em></p><ol class="we-steps"><li>Because cosine is given, choose cos(2θ)=2cos²θ−1.</li><li>Squaring removes the sign: cos²θ=1/9.</li><li>2/9−1=−7/9.</li></ol><p class="we-answer">Answer: −7/9</p></div>
          <div class="callout"><strong>Guided practice:</strong> If sin θ=1/2, find cos(2θ). <strong>Hint/partial setup:</strong> use 1−2sin²θ = 1−2(1/2)².</div>
          <div class="callout"><strong>Common mistake:</strong> Writing sin(2θ)=2sin θ. The sum-formula derivation shows the missing factor cos θ.</div>
        `,
        checks: [
          { prompt: "If sin θ=1/2, what is cos(2θ)?", choices: ["1/2", "√3/2", "−1/2", "1"], answer: 0, explain: "cos(2θ)=1−2(1/2)²=1/2." },
          { prompt: "If sin θ=−4/5 and cos θ=3/5, what is sin(2θ)?", choices: ["−24/25", "24/25", "−7/25", "−12/25"], answer: 0, explain: "sin(2θ)=2(−4/5)(3/5)=−24/25." }
        ]
      },
      {
        heading: "Solving trig equations over one cycle",
        body: `
          <p><strong>Prerequisite reminder:</strong> One radian cycle is [0,2π). Exact unit-circle coordinates tell where sine or cosine has a requested value.</p>
          <p><strong>Plain meaning:</strong> Solving a trig equation means finding every point on the circle whose x-coordinate (cosine), y-coordinate (sine), or y/x (tangent) matches. Isolate the trig expression, find the reference angle, then inspect all matching locations.</p>
          <div class="formula">0 included                               2π excluded
0 ───── π/2 ───── π ───── 3π/2 ───── 2π
isolate → reference angle → matching coordinates → all solutions</div>
          <table><tr><th>Value</th><th>Where it is positive</th></tr><tr><td>sine (y)</td><td>upper half</td></tr><tr><td>cosine (x)</td><td>right half</td></tr><tr><td>tangent (y/x)</td><td>x and y have same sign</td></tr></table>
          <div class="worked-example"><div class="we-label">Worked Example 1 — linear trig equation</div><p><em>Solve 2sin θ−1=0 on [0,2π).</em></p><ol class="we-steps"><li>Isolate: sin θ=1/2.</li><li>The reference angle is π/6 because its y-coordinate is 1/2.</li><li>The upper-half points are θ=π/6 and 5π/6.</li></ol><p class="we-answer">Answer: π/6, 5π/6</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — quadratic in sine</div><p><em>Solve 2sin²θ−sinθ−1=0 on [0,2π).</em></p><ol class="we-steps"><li>Let s=sin θ and factor: (2s+1)(s−1)=0.</li><li>Thus sin θ=−1/2 or sin θ=1.</li><li>For −1/2, lower-half points are 7π/6 and 11π/6; for 1, θ=π/2.</li></ol><p class="we-answer">Answer: π/2, 7π/6, 11π/6</p></div>
          <div class="callout"><strong>Guided practice:</strong> Solve 2cos θ+√2=0 on [0,2π). <strong>Hint/partial setup:</strong> cos θ=−√2/2; find the two points with negative x and reference angle π/4.</div>
          <div class="callout"><strong>Common mistake:</strong> Giving only the calculator's principal answer. The interval asks for every matching circle point, and 2π is excluded because it duplicates 0.</div>
        `,
        checks: [
          { prompt: "Solve √3 tan θ−1=0 on [0,2π).", choices: ["π/6, 7π/6", "π/6 only", "π/6, 5π/6", "7π/6 only"], answer: 0, explain: "tan θ=1/√3 at same-sign coordinate points: π/6 and 7π/6." },
          { prompt: "Solve cos θ=−√2/2 on [0,2π).", choices: ["3π/4, 5π/4", "π/4, 7π/4", "3π/4 only", "π/4, 3π/4"], answer: 0, explain: "Cosine is the x-coordinate; x=−√2/2 at 3π/4 and 5π/4." }
        ]
      }
    ]
  },

  "tc-04": {
    title: "Limits & continuity",
    domain: "trigcalc",
    intro: `<p><strong>Goal (NES NT304 competency 0012):</strong> Interpret a limit as an approached value using tables and graphs, then evaluate accessible limits and test continuity.</p>`,
    sections: [
      {
        heading: "A limit is the value being approached",
        body: `
          <p><strong>Prerequisite reminder:</strong> Function notation f(x) gives an output for an input. Values such as 1.9 and 2.1 are near 2 from the left and right.</p>
          <p><strong>Plain meaning:</strong> lim(x→a)f(x)=L asks where outputs approach as x gets close to a, not necessarily what happens exactly at a. Left and right must approach the same L.</p>
          <table><tr><th>x</th><th>1.9</th><th>1.99</th><th>2</th><th>2.01</th><th>2.1</th></tr><tr><td>f(x)</td><td>3.9</td><td>3.99</td><td>not defined</td><td>4.01</td><td>4.1</td></tr></table>
          <div class="formula">y
4       ○  ← both sides approach this open point
      ↗   ↖
──────────── x
        2
The limit is 4 even if f(2) is missing or different.</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — read a table</div><p><em>Near x=3, outputs are 6.9, 6.99 from the left and 7.01, 7.1 from the right. Find the limit.</em></p><ol class="we-steps"><li>Left-side outputs rise toward 7.</li><li>Right-side outputs fall toward 7.</li><li>Both agree, so lim(x→3)f(x)=7.</li></ol><p class="we-answer">Answer: 7</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — detect a jump</div><p><em>As x→1⁻, f(x)→2; as x→1⁺, f(x)→5. Find the two-sided limit.</em></p><ol class="we-steps"><li>The left approach is 2.</li><li>The right approach is 5.</li><li>Because 2≠5, there is no single approached value.</li></ol><p class="we-answer">Answer: the two-sided limit does not exist</p></div>
          <div class="callout"><strong>Guided practice:</strong> Near x=4, a table shows 8.99, 8.999 on the left and 9.001, 9.01 on the right. <strong>Hint/partial setup:</strong> name the number each side is closing in on.</div>
          <div class="callout"><strong>Common mistake:</strong> Looking only at f(a). A limit ignores the single point and tracks nearby behavior from both directions.</div>
        `,
        checks: [
          { prompt: "As x→2, values from both sides approach 5, but f(2)=9. What is the limit?", choices: ["5", "9", "Does not exist", "0"], answer: 0, explain: "The nearby values, not the value at the point, determine the limit." },
          { prompt: "If the left-hand limit is 4 and the right-hand limit is 7, the two-sided limit:", choices: ["Does not exist", "Is 5.5", "Is 4", "Is 7"], answer: 0, explain: "A two-sided limit exists only when both one-sided limits agree." }
        ]
      },
      {
        heading: "From approached behavior to algebraic limits",
        body: `
          <p><strong>Prerequisite reminder:</strong> Factor x²−a²=(x−a)(x+a). Cancel factors, not terms, and only when the factor is nonzero.</p>
          <p><strong>Plain meaning:</strong> Direct substitution works for ordinary continuous expressions. If it produces 0/0, that is a signal to reveal the nearby rule by factoring. In a limit x is near a, not equal to a, so a common factor x−a may be canceled.</p>
          <table><tr><th>x</th><th>1.9</th><th>1.99</th><th>2.01</th><th>2.1</th></tr><tr><td>(x²−4)/(x−2)</td><td>3.9</td><td>3.99</td><td>4.01</td><td>4.1</td></tr></table>
          <div class="formula">(x²−4)/(x−2) = ((x−2)(x+2))/(x−2) = x+2, for x≠2
graph: the line y=x+2 with a hole at (2,4)</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — removable hole</div><p><em>Find lim(x→2)(x²−4)/(x−2).</em></p><ol class="we-steps"><li>Substitution gives 0/0, so factor rather than stop.</li><li>Cancel x−2 from (x−2)(x+2)/(x−2), valid nearby.</li><li>The nearby rule is x+2; approaching 2 gives 4.</li></ol><p class="we-answer">Answer: 4</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — factor both parts</div><p><em>Find lim(x→3)(x²−2x−3)/(x²−9).</em></p><ol class="we-steps"><li>Factor numerator (x−3)(x+1) and denominator (x−3)(x+3).</li><li>Cancel the common x−3 factor.</li><li>Evaluate the nearby rule (x+1)/(x+3) at 3: 4/6=2/3.</li></ol><p class="we-answer">Answer: 2/3</p></div>
          <div class="callout"><strong>Guided practice:</strong> Find lim(x→5)(x²−25)/(x−5). <strong>Hint/partial setup:</strong> x²−25=(x−5)(x+5); cancel, then approach 5.</div>
          <div class="callout"><strong>Common mistake:</strong> Declaring “undefined” at 0/0. The original function may have a hole, while its nearby values still approach a definite number.</div>
        `,
        checks: [
          { prompt: "Find lim(x→5)(x²−25)/(x−5).", choices: ["10", "0", "undefined", "5"], answer: 0, explain: "After factoring and canceling x−5, x+5 approaches 10." },
          { prompt: "Find lim(x→−3)(x²+5x+6)/(x+3).", choices: ["−1", "0", "1", "Does not exist"], answer: 0, explain: "Factor as (x+3)(x+2), cancel, and let x approach −3: x+2→−1." }
        ]
      },
      {
        heading: "Continuity and accessible end behavior",
        body: `
          <p><strong>Prerequisite reminder:</strong> A function value is a filled point; a limit is nearby behavior. For large |x|, fractions such as 1/x and 1/x² approach 0.</p>
          <p><strong>Plain meaning:</strong> Continuity at a means you can trace through the point without lifting your pencil: f(a) exists, the two-sided limit exists, and they are equal. End behavior uses the same “approaches” idea, but x travels far left or right.</p>
          <table><tr><th>Continuity test at a</th><th>Question</th></tr><tr><td>1</td><td>Is f(a) defined?</td></tr><tr><td>2</td><td>Do both sides approach one limit?</td></tr><tr><td>3</td><td>Does that limit equal f(a)?</td></tr></table>
          <div class="formula">For (3x²+5x)/(2x²−1), divide by x²:
(3+5/x)/(2−1/x²) → 3/2 as x→∞
graph levels toward horizontal line y=3/2.</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — continuity</div><p><em>g(4)=2 but lim(x→4)g(x)=9. Is g continuous?</em></p><ol class="we-steps"><li>g(4) exists, so condition 1 passes.</li><li>The limit exists, so condition 2 passes.</li><li>2≠9, so condition 3 fails; changing the point to 9 would repair the hole.</li></ol><p class="we-answer">Answer: not continuous; removable discontinuity</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — simple infinity limit</div><p><em>Find lim(x→∞)(3x²+5x)/(2x²−1).</em></p><ol class="we-steps"><li>Divide each term by x², the largest denominator power.</li><li>This gives (3+5/x)/(2−1/x²).</li><li>As x grows, 5/x and 1/x² approach 0, leaving 3/2.</li></ol><p class="we-answer">Answer: 3/2</p></div>
          <div class="callout"><strong>Guided practice:</strong> For f(x)=x²+3 when x&lt;2 and f(x)=kx+1 when x≥2, find k for continuity. <strong>Hint/partial setup:</strong> left approach is 7; set 2k+1=7.</div>
          <div class="callout"><strong>Common mistake:</strong> Using the ratio of leading coefficients when polynomial degrees differ. That shortcut is only for equal degrees; radical and sign-sensitive infinity limits require additional prerequisites and should come later.</div>
        `,
        checks: [
          { prompt: "h(1)=4 and lim(x→1)h(x)=4. Is h continuous at 1?", choices: ["Yes", "No, because derivatives are required", "No, because limits cannot equal values", "Cannot be determined"], answer: 0, explain: "The value exists, the limit exists, and they are equal." },
          { prompt: "Find lim(x→∞)(5x+1)/(x²+4).", choices: ["0", "5", "∞", "5/4"], answer: 0, explain: "Divide by x²: (5/x+1/x²)/(1+4/x²) approaches 0/1=0." }
        ]
      }
    ]
  },

  "tc-05": {
    title: "Derivatives & applications",
    domain: "trigcalc",
    intro: `<p><strong>Goal (NES NT304 competency 0012):</strong> Build derivatives from average and instantaneous rates, explain differentiation rules, and use derivative signs to analyze change.</p>`,
    sections: [
      {
        heading: "From average rate to instantaneous slope",
        body: `
          <p><strong>Prerequisite reminder:</strong> Slope between (x₁,y₁) and (x₂,y₂) is change in y divided by change in x. A secant line joins two graph points.</p>
          <p><strong>Plain meaning:</strong> Average rate measures change across an interval. To measure “right now,” move the second point closer; secant slopes approach the tangent slope. That approached slope is the derivative.</p>
          <table><tr><th>h</th><th>[f(2+h)−f(2)]/h for f(x)=x²</th></tr><tr><td>1</td><td>5</td></tr><tr><td>0.1</td><td>4.1</td></tr><tr><td>0.01</td><td>4.01</td></tr><tr><td>−0.01</td><td>3.99</td></tr></table>
          <div class="formula">average rate on [a,b] = (f(b)−f(a))/(b−a)
instantaneous rate: f'(a)=lim(h→0)[f(a+h)−f(a)]/h
secant lines → tangent line</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — average speed</div><p><em>s(t)=t² meters. Find average speed from t=2 to t=5.</em></p><ol class="we-steps"><li>Positions are s(2)=4 and s(5)=25.</li><li>Change in position is 21 m; change in time is 3 s.</li><li>Average speed =21/3=7 m/s.</li></ol><p class="we-answer">Answer: 7 m/s</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — instantaneous slope</div><p><em>Use the difference quotient to find f'(2) for f(x)=x².</em></p><ol class="we-steps"><li>[f(2+h)−f(2)]/h = [(2+h)²−4]/h.</li><li>Expand and simplify: (4+4h+h²−4)/h=4+h for h≠0.</li><li>As h approaches 0, 4+h approaches 4.</li></ol><p class="we-answer">Answer: f'(2)=4</p></div>
          <div class="callout"><strong>Guided practice:</strong> Find the average rate of f(x)=x² from x=1 to x=3. <strong>Hint/partial setup:</strong> [f(3)−f(1)]/(3−1)=(9−1)/2.</div>
          <div class="callout"><strong>Common mistake:</strong> Computing change in x divided by change in y. Rates and slopes are output change over input change, with units such as meters per second.</div>
        `,
        checks: [
          { prompt: "For s(t)=3t², what is average velocity from t=1 to t=3?", choices: ["12", "9", "6", "24"], answer: 0, explain: "[s(3)−s(1)]/(3−1)=(27−3)/2=12." },
          { prompt: "For f(x)=x², secant slopes near x=4 approach which instantaneous slope?", choices: ["8", "4", "16", "2"], answer: 0, explain: "The derivative of x² is 2x, so at x=4 the tangent slope is 8; nearby difference quotients approach 8." }
        ]
      },
      {
        heading: "Power and chain rules",
        body: `
          <p><strong>Prerequisite reminder:</strong> A composition puts one function inside another, such as (3x+1)⁴: inner g(x)=3x+1 and outer f(u)=u⁴.</p>
          <p><strong>Plain meaning:</strong> The power rule summarizes repeated difference-quotient patterns. The chain rule is needed because an outer output changes both with its input and with how fast that inner input changes: outer rate × inner rate.</p>
          <table><tr><th>Expression</th><th>Outer</th><th>Inner</th></tr><tr><td>(3x+1)⁴</td><td>u⁴</td><td>3x+1</td></tr><tr><td>√(x²+5)</td><td>u^(1/2)</td><td>x²+5</td></tr><tr><td>x⁴</td><td>power</td><td>x (inner rate 1)</td></tr></table>
          <div class="formula">d/dx[xⁿ]=nxⁿ⁻¹
d/dx[f(g(x))]=f'(g(x))·g'(x)
why: output change/input change = (output change/inner change)(inner change/input change)</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — direct power</div><p><em>Differentiate 5x⁴−2x.</em></p><ol class="we-steps"><li>Differentiate each term.</li><li>5x⁴ becomes 5·4x³=20x³.</li><li>−2x becomes −2, so f'(x)=20x³−2.</li></ol><p class="we-answer">Answer: 20x³−2</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — identify inner and outer</div><p><em>Differentiate (3x+1)⁴.</em></p><ol class="we-steps"><li>Outer u⁴ has derivative 4u³; keep u=3x+1.</li><li>Inner 3x+1 has derivative 3.</li><li>Multiply outer rate by inner rate: 4(3x+1)³·3=12(3x+1)³.</li></ol><p class="we-answer">Answer: 12(3x+1)³</p></div>
          <div class="callout"><strong>Guided practice:</strong> Differentiate (2x−5)³. <strong>Hint/partial setup:</strong> outer derivative 3(2x−5)²; multiply by inner derivative 2.</div>
          <div class="callout"><strong>Common mistake:</strong> Stopping after the outer derivative. Label inner and outer before working, then explicitly write the inner derivative as a final factor.</div>
        `,
        checks: [
          { prompt: "Differentiate (2x−5)³.", choices: ["6(2x−5)²", "3(2x−5)²", "6x(2x−5)²", "3(2x−5)³"], answer: 0, explain: "Outer derivative is 3(2x−5)² and inner derivative is 2, giving 6(2x−5)²." },
          { prompt: "For y=(x²+1)⁵, which are the inner and outer functions?", choices: ["inner x²+1; outer u⁵", "inner u⁵; outer x²+1", "inner x; outer x¹⁰", "There is no composition"], answer: 0, explain: "The expression x²+1 is fed into the fifth-power function." }
        ]
      },
      {
        heading: "Product, quotient, and derivative applications",
        body: `
          <p><strong>Prerequisite reminder:</strong> Product means two changing factors multiplied; quotient means one changing expression divided by another. Use the chain rule inside either rule when a factor is composite.</p>
          <p><strong>Plain meaning:</strong> In uv, change can come from u while v scales it and from v while u scales it, producing u'v+uv'. For u/v=u·v⁻¹, applying product and chain rules simplifies to (u'v−uv')/v². Derivative sign then tells whether a graph rises or falls.</p>
          <table><tr><th>f' sign</th><th>Graph behavior</th><th>At sign change</th></tr><tr><td>+</td><td>increasing</td><td>+ to − gives local max</td></tr><tr><td>−</td><td>decreasing</td><td>− to + gives local min</td></tr></table>
          <div class="formula">(uv)'=u'v+uv'
(u/v)'=(u'v−uv')/v²
number line:  + + + | − − − | + + +
                    max     min</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — two sources of product change</div><p><em>Differentiate x²(x+3).</em></p><ol class="we-steps"><li>Let u=x², v=x+3; then u'=2x, v'=1.</li><li>Account for both changes: u'v+uv'=2x(x+3)+x².</li><li>Simplify to 3x²+6x.</li></ol><p class="we-answer">Answer: 3x²+6x</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — quotient then interpretation</div><p><em>Differentiate (3x+1)/(x−2).</em></p><ol class="we-steps"><li>u=3x+1, u'=3; v=x−2, v'=1.</li><li>Use top-prime times bottom minus top times bottom-prime: [3(x−2)−(3x+1)]/(x−2)².</li><li>The numerator is −7, so f'(x)=−7/(x−2)²; it is negative wherever defined, so the graph decreases separately on each domain interval.</li></ol><p class="we-answer">Answer: −7/(x−2)²; decreasing on (−∞,2) and (2,∞)</p></div>
          <div class="callout"><strong>Guided practice:</strong> For f(x)=x²−6x+5, find and classify the critical point. <strong>Hint/partial setup:</strong> f'(x)=2x−6=0 gives x=3; test the sign just left and right.</div>
          <div class="callout"><strong>Common mistake:</strong> Multiplying derivatives for a product or reversing the quotient numerator. The formulas reflect where change comes from; write u, v, u', v' in a small table first.</div>
        `,
        checks: [
          { prompt: "Differentiate x³(x−4).", choices: ["4x³−12x²", "3x³−12x²", "3x²", "4x³"], answer: 0, explain: "3x²(x−4)+x³=4x³−12x²." },
          { prompt: "For f(x)=−x²+4x+1, the critical point at x=2 is a:", choices: ["Local maximum", "Local minimum", "Discontinuity", "Neither"], answer: 0, explain: "f'=−2x+4 changes from positive to negative at 2, so the graph has a local maximum." }
        ]
      }
    ]
  },

  "tc-06": {
    title: "Integrals & area under curves",
    domain: "trigcalc",
    intro: `<p><strong>Goal (NES NT304 competency 0013):</strong> Build definite integrals from accumulated sums, connect them to antiderivatives, distinguish net from total area, and use substitution as the reverse chain rule.</p>`,
    sections: [
      {
        heading: "Accumulation begins with sums of areas",
        body: `
          <p><strong>Prerequisite reminder:</strong> Rectangle area is width × height. A function value f(x) can serve as the height of a thin rectangle.</p>
          <p><strong>Plain meaning:</strong> To estimate accumulated area from a to b, split the interval, add rectangle areas f(xᵢ)Δx, and make rectangles thinner. The definite integral is the approached sum. Pieces below the x-axis contribute negative signed area.</p>
          <table><tr><th>Partition of [0,2]</th><th>Right-endpoint sum for f(x)=x</th></tr><tr><td>2 rectangles, Δx=1</td><td>1(1)+2(1)=3</td></tr><tr><td>4 rectangles, Δx=0.5</td><td>0.5(0.5)+1(0.5)+1.5(0.5)+2(0.5)=2.5</td></tr><tr><td>thinner rectangles</td><td>approaches 2</td></tr></table>
          <div class="formula">y
2        /|
       /□|
1    /□|□|
   /□|□|□|
0 ───────── x
  0        2
∫ₐᵇf(x)dx = limit of Σf(xᵢ)Δx</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — estimate accumulation</div><p><em>Estimate area under f(x)=x on [0,2] with two right rectangles.</em></p><ol class="we-steps"><li>Two equal widths give Δx=1.</li><li>Right endpoints are 1 and 2, so heights are 1 and 2.</li><li>Add areas: 1·1+2·1=3 square units; this is an overestimate.</li></ol><p class="we-answer">Answer: estimated area 3</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — accumulation from a rate table</div><p><em>Water flows at 4 L/min for 3 minutes, then 2 L/min for 2 minutes. How much accumulates?</em></p><ol class="we-steps"><li>Each constant-rate block forms a rectangle in a rate-versus-time graph.</li><li>First amount: 4·3=12 L; second: 2·2=4 L.</li><li>Add the areas: 12+4=16 L.</li></ol><p class="we-answer">Answer: 16 liters</p></div>
          <div class="callout"><strong>Guided practice:</strong> A speed is 5 m/s for 4 s, then 3 m/s for 2 s. <strong>Hint/partial setup:</strong> accumulated distance = 5·4 + 3·2.</div>
          <div class="callout"><strong>Common mistake:</strong> Adding heights without multiplying by widths. Every contribution is rate or height × interval width, so units multiply appropriately.</div>
        `,
        checks: [
          { prompt: "For f(x)=2 on [0,5], what is the accumulated area?", choices: ["10", "7", "2", "5"], answer: 0, explain: "The region is a rectangle of width 5 and height 2, so area is 10." },
          { prompt: "Using two right-endpoint rectangles on [0,2] for f(x)=x², Δx=1. What is the sum?", choices: ["5", "4", "3", "2"], answer: 0, explain: "Heights are f(1)=1 and f(2)=4; sum 1·1+4·1=5." }
        ]
      },
      {
        heading: "Antiderivatives and the Fundamental Theorem",
        body: `
          <p><strong>Prerequisite reminder:</strong> A derivative is an instantaneous rate. The power rule says d/dx[xⁿ]=nxⁿ⁻¹.</p>
          <p><strong>Plain meaning:</strong> An antiderivative rebuilds a quantity from its rate. The Fundamental Theorem says the accumulated sum from a to b equals total change F(b)−F(a) when F'=f. Reversing the power rule raises the exponent and divides by the new exponent.</p>
          <table><tr><th>Rate f(x)</th><th>One antiderivative F(x)</th><th>Check F'=f</th></tr><tr><td>3x²</td><td>x³</td><td>3x²</td></tr><tr><td>4x</td><td>2x²</td><td>4x</td></tr><tr><td>5</td><td>5x</td><td>5</td></tr></table>
          <div class="formula">∫xⁿdx=xⁿ⁺¹/(n+1)+C, n≠−1
∫ₐᵇf(x)dx=F(b)−F(a), where F'=f
accumulated area/sum ⇄ antiderivative change</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — indefinite family</div><p><em>Find ∫(4x³+2x)dx.</em></p><ol class="we-steps"><li>Reverse the power rule term by term.</li><li>4x³ gives 4x⁴/4=x⁴; 2x gives 2x²/2=x².</li><li>Add C because all vertical shifts have the same derivative.</li></ol><p class="we-answer">Answer: x⁴+x²+C</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — exact accumulation</div><p><em>Evaluate ∫₀²3x²dx.</em></p><ol class="we-steps"><li>An antiderivative is F(x)=x³.</li><li>Evaluate accumulated change: F(2)−F(0).</li><li>8−0=8. No +C is needed because it cancels at the bounds.</li></ol><p class="we-answer">Answer: 8</p></div>
          <div class="callout"><strong>Guided practice:</strong> Evaluate ∫₁³4x dx. <strong>Hint/partial setup:</strong> F(x)=2x², then compute F(3)−F(1).</div>
          <div class="callout"><strong>Common mistake:</strong> Forgetting +C for an indefinite integral or using F(a)−F(b). Definite integrals always use upper value minus lower value.</div>
        `,
        checks: [
          { prompt: "Find ∫(9x²+1)dx.", choices: ["3x³+x+C", "3x³+C", "9x³+x+C", "3x³+x"], answer: 0, explain: "Reverse the power rule on each term and include C: 3x³+x+C." },
          { prompt: "Evaluate ∫₁³4x dx.", choices: ["16", "18", "20", "8"], answer: 0, explain: "F(x)=2x², so F(3)−F(1)=18−2=16." }
        ]
      },
      {
        heading: "Net area, total area, and u-substitution",
        body: `
          <p><strong>Prerequisite reminder:</strong> Definite integrals count below-axis regions negatively. The derivative chain rule has the pattern d/dx[F(g(x))]=F'(g(x))g'(x).</p>
          <p><strong>Plain meaning:</strong> Net area allows positive and negative regions to cancel; total geometric area uses absolute values piece by piece. For composite rates, u-substitution reverses the already-learned chain rule: name the inner expression u and replace its derivative factor by du.</p>
          <table><tr><th>Goal</th><th>Procedure</th></tr><tr><td>net signed area</td><td>add signed integrals</td></tr><tr><td>total area</td><td>split at zeros; add absolute pieces</td></tr><tr><td>reverse chain rule</td><td>u=g(x), du=g'(x)dx</td></tr></table>
          <div class="formula">above axis: + area     below axis: − area
chain: d/dx[(x²+1)⁴/4]=(x²+1)³·2x
reverse: ∫2x(x²+1)³dx=(x²+1)⁴/4+C</div>
          <div class="worked-example"><div class="we-label">Worked Example 1 — net versus total</div><p><em>A function is nonnegative on [0,1] and nonpositive on [1,3]. Its integrals on those intervals are 5 and −8. Find net and total area.</em></p><ol class="we-steps"><li>Net keeps signs: 5+(−8)=−3.</li><li>Because the function does not change sign inside either stated interval, those integral magnitudes are the two geometric region areas. Total area is |5|+|−8|=13.</li><li>Taking |−3|=3 would lose the separate region sizes.</li></ol><p class="we-answer">Answer: net −3; total 13</p></div>
          <div class="worked-example"><div class="we-label">Worked Example 2 — reverse the chain rule</div><p><em>Find ∫2x(x²+1)³dx.</em></p><ol class="we-steps"><li>Inner expression is x²+1; its derivative 2x is present.</li><li>Let u=x²+1, so du=2x dx. The integral becomes ∫u³du.</li><li>Integrate and substitute back: u⁴/4+C=(x²+1)⁴/4+C.</li></ol><p class="we-answer">Answer: (x²+1)⁴/4+C</p></div>
          <div class="callout"><strong>Guided practice:</strong> Find ∫x(x²+5)⁶dx. <strong>Hint/partial setup:</strong> u=x²+5 and du=2x dx, so x dx=du/2; the integral becomes (1/2)∫u⁶du.</div>
          <div class="callout"><strong>Common mistake:</strong> Using u-substitution without replacing the entire integrand, or ignoring a constant mismatch. Differentiate the inner expression and solve explicitly for the factor that appears.</div>
        `,
        checks: [
          { prompt: "A function contributes 7 above the axis and −15 below it. What is total unsigned area?", choices: ["22", "8", "−8", "−22"], answer: 0, explain: "Total area is |7|+|−15|=22." },
          { prompt: "Find ∫3x²(x³+4)⁵dx.", choices: ["(x³+4)⁶/6+C", "(x³+4)⁶+C", "6(x³+4)⁶+C", "(x³+4)⁶/18+C"], answer: 0, explain: "Let u=x³+4, du=3x²dx; then ∫u⁵du=u⁶/6+C." }
        ]
      }
    ]
  }
});
