/** Batch 1: enrich thinnest / high-value CED topics with self-study depth. */
export const ENRICHMENTS = {
  'math/calc-u1/1.2': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能用自己的话解释 \\(\\lim_{x\\to a}f(x)=L\\)：\\(x\\) 充分接近 \\(a\\)（但 \\(x\\neq a\\)）时，\\(f(x)\\) 可以任意接近 \\(L\\)；并说明 \\(f(a)\\) 是否存在、等于多少不影响该极限。 · Explain in your own words what this limit statement means: as \\(x\\) is sufficiently close to \\(a\\) (but \\(x\\neq a\\)), \\(f(x)\\) can be made arbitrarily close to \\(L\\); also explain why whether \\(f(a)\\) exists, or what it equals, does not affect the limit.',
      '能根据图像或数值表分别读出左极限与右极限，并用 \\(\\lim_{x\\to a^-}f(x)\\)、\\(\\lim_{x\\to a^+}f(x)\\) 正确书写，据此判断双侧极限是否存在。 · Read one-sided limits from a graph or table, write them correctly with the left- and right-limit notation shown above, and use them to decide whether the two-sided limit exists.',
      '能区分“极限存在且有限”“极限为无穷”“极限不存在”三类情形，并举出跳跃、无界、振荡的例子。 · Distinguish finite limits, infinite limits, and limits that do not exist, and give examples of jump, unbounded, and oscillatory behavior.',
      '能说明极限与连续的关系：\\(\\lim_{x\\to a}f(x)=f(a)\\) 时函数在 \\(a\\) 连续；极限存在但函数值缺失或不等时只是可去间断。 · Explain the relationship between limits and continuity: the function is continuous at \\(a\\) exactly when the limit equals \\(f(a)\\); if the limit exists but the function value is missing or different, the discontinuity is removable.',
    ],
    essentialKnowledge: [
      '记号 \\(\\lim_{x\\to a}f(x)=L\\) 描述函数值的趋势，不表示 \\(x=a\\) 时的取值；求极限时可以先做代数化简，再让 \\(x\\to a\\)。 · The limit notation above describes the trend of the function values, not the value at \\(x=a\\); when evaluating a limit, simplify algebraically first and then let \\(x\\) approach \\(a\\).',
      '双侧极限存在的充要条件是左右极限都存在且相等：\\(\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L\\)。 · A two-sided limit exists exactly when both one-sided limits exist and are equal; the left and right limits must agree with the same value \\(L\\).',
      '从图像读极限只看 \\(x\\) 接近 \\(a\\) 时曲线的高度；\\(a\\) 点的实心点或空心点决定函数值，不决定极限。 · When reading a limit from a graph, look only at the height of the curve as \\(x\\) approaches \\(a\\); a filled or open point at \\(a\\) determines the function value, not the limit.',
      '极限不存在的常见类型：左右极限不相等（跳跃）、函数值无界（如 \\(\\lim_{x\\to0}\\dfrac{1}{x^2}=+\\infty\\)）、在两点间无限振荡（如 \\(\\sin\\dfrac{1}{x}\\) 在 \\(x\\to0\\) 时）。 · Common ways a limit can fail to exist: the one-sided limits differ (a jump), the function values become unbounded (as in the example above), or the function oscillates infinitely near the point (as with the sine example above as \\(x\\to0\\)).',
      '写无穷极限时用“发散到 \\(+\\infty\\)”或“发散到 \\(-\\infty\\)”描述行为；它不是有限极限，不能当作普通实数参与运算。 · For infinite limits, describe the behavior as “diverges to \\(+\\infty\\)” or “diverges to \\(-\\infty\\)”; such a limit is not a finite limit and cannot be treated as an ordinary real number in calculations.',
      '连续的定义要求三件事同时成立：\\(f(a)\\) 有定义、\\(\\lim_{x\\to a}f(x)\\) 存在、二者相等；极限存在只满足其中一件。 · Continuity requires three things at once: \\(f(a)\\) is defined, the limit exists, and the two are equal; a limit existing by itself satisfies only one of them.',
    ],
    definition: '设函数 \\(f\\) 在 \\(x=a\\) 附近有定义（点 \\(a\\) 本身可无定义）。若存在实数 \\(L\\)，使得当 \\(x\\) 无限接近 \\(a\\)（但 \\(x\\neq a\\)）时 \\(f(x)\\) 无限接近 \\(L\\)，则称极限存在，记作\n\\[\\lim_{x\\to a}f(x)=L.\\]\n左右极限分别记为 \\(\\lim_{x\\to a^-}f(x)\\)、 \\(\\lim_{x\\to a^+}f(x)\\)；二者相等当且仅当双侧极限存在。 · Let the function \\(f\\) be defined near \\(x=a\\) (the point \\(a\\) itself may be undefined). If there is a real number \\(L\\) such that \\(f(x)\\) approaches \\(L\\) as \\(x\\) approaches \\(a\\) (but \\(x\\neq a\\)), then the limit exists and is written as shown above. The left- and right-hand limits use the one-sided notation above; they are equal exactly when the two-sided limit exists.',
    intuition: '极限描述“趋势”，不是“代入”。\\(x\\) 可以永远到不了 \\(a\\)，但 \\(f(x)\\) 仍可逼近某个高度 \\(L\\)。 · A limit describes a trend, not substitution. \\(x\\) may never reach \\(a\\), yet \\(f(x)\\) can still approach some height \\(L\\).',
    intuitionDetailed: '把 \\(x\\) 想象成滑块：只要它足够靠近 \\(a\\)，函数值就被关进 \\(L\\) 附近任意窄的水平带。洞、可去间断、跳跃，都靠左右极限是否相同来分类。 · Picture \\(x\\) as a slider: once it is close enough to \\(a\\), the function values are trapped inside an arbitrarily narrow horizontal band around \\(L\\). Holes, removable discontinuities, and jumps are classified by whether the left and right limits agree.',
    formulas: [
      { latex: '\\lim_{x\\to a}f(x)=L', note: '双侧极限存在并等于 L。 · The two-sided limit exists and equals \\(L\\).' },
      { latex: '\\lim_{x\\to a}f(x)=L \\iff \\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L', note: '左右极限判据。 · One-sided limit criterion.' },
    ],
    derivationNotes: [
      { from: 'ε-δ 定义 · ε-δ definition', to: '运算律 · Limit laws', note: '和差积商极限定理由 ε-δ 证明；商式要求分母极限非零。 · The limit laws for sums, differences, products, and quotients are proved from the ε-δ definition; a quotient requires a nonzero denominator limit.' },
      { from: '代数操作 · Algebraic manipulation', to: '可去间断 · Removable discontinuity', note: '约去 \\((x-a)\\) 后在 \\(x=a\\) 的代入值即极限（若简化后连续）。 · Cancel the common factor shown above, then substitute at \\(x=a\\); the result is the limit if the simplified function is continuous.' },
    ],
    conditions: ['讨论 \\(x\\to a\\) 时不要求 \\(f(a)\\) 有定义 · When discussing the approach to \\(a\\), \\(f(a)\\) need not be defined', '商的极限需分母极限不为 0 · A quotient limit requires a nonzero denominator limit', '无穷极限用 \\(\\infty\\) 记号时说“发散于无穷”，通常仍称极限不存在（有限意义下） · For infinite limits, the notation says “diverges to infinity”; in the finite sense the limit is still usually said not to exist'],
    keyPoints: ['极限 ≠ 函数值 · A limit is not the same as the function value', '左右极限是双侧极限存在的充要条件 · One-sided limits agreeing is necessary and sufficient for the two-sided limit to exist', '优先代数化简再代入；\\(\\dfrac{0}{0}\\) 是待定型不是答案 · Simplify algebraically before substituting; the indeterminate form shown above is not an answer'],
    misconceptions: [
      '以为 \\(f(a)\\) 必须有定义才谈极限 · Thinking \\(f(a)\\) must be defined before a limit can be discussed',
      '把 \\(\\dfrac{0}{0}\\) 写成“无意义”就停止，不进行因式分解/有理化 · Stopping after calling the indeterminate form “meaningless” instead of factoring or rationalizing',
      '左右极限不同却仍写双侧极限等于某数 · Writing a two-sided limit as some number even when the one-sided limits differ',
      '用斜线分式 \\(1/2x\\) 引起歧义（应写 \\(\\dfrac{1}{2x}\\) 或 \\(\\dfrac{1}{2}x\\)） · Using a slash fraction such as the ambiguous form shown above (write the stacked fractions instead)',
    ],
    examples: [
      {
        title: '例 1 · 直接代入 · Example 1 · Direct substitution',
        prompt: '求 \\(\\lim_{x\\to 3}(2x^2-5)\\)。 · Evaluate the polynomial limit shown above.',
        steps: [
          '多项式处处连续，极限等于函数值。 · A polynomial is continuous everywhere, so the limit equals the function value.',
          '代入：\\(2\\cdot 3^2-5=18-5=13\\)。 · Substitute the value and simplify to 13.',
        ],
        solution: '答案：13。 · Answer: 13.',
        solutionLatex: '\\lim_{x\\to 3}(2x^{2}-5)=13',
      },
      {
        title: '例 2 · 可去间断 · Example 2 · Removable discontinuity',
        prompt: '求 \\(\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}\\)。 · Evaluate the rational limit shown above.',
        steps: [
          '代入得 \\(\\dfrac{0}{0}\\)，待定型。 · Substitution gives the indeterminate form shown above.',
          '因式分解：\\(x^2-4=(x-2)(x+2)\\)。 · Factor the numerator as shown above.',
          '当 \\(x\\neq 2\\) 时，\\(\\dfrac{(x-2)(x+2)}{x-2}=x+2\\)。 · For \\(x\\neq 2\\), cancel the common factor; the simplified expression is \\(x+2\\).',
          '故极限为 \\(\\lim_{x\\to 2}(x+2)=4\\)。 · Therefore the limit is 4.',
        ],
        solution: '答案：4。图形上 \\(x=2\\) 有可去空洞，极限仍存在。 · Answer: 4. The graph has a removable hole at \\(x=2\\), but the limit still exists.',
        solutionLatex: '\\lim_{x\\to 2}\\dfrac{x^{2}-4}{x-2}=4',
      },
      {
        title: '例 3 · 左右极限 · Example 3 · One-sided limits',
        prompt: '设 \\(f(x)=\\begin{cases}x+1,&x<0\\\\ x^2,&x\\ge 0\\end{cases}\\)。判断 \\(\\lim_{x\\to 0}f(x)\\) 是否存在。 · For the piecewise function shown above, decide whether the two-sided limit at 0 exists.',
        steps: [
          '左极限：\\(\\lim_{x\\to 0^-}(x+1)=1\\)。 · Left-hand limit: 1.',
          '右极限：\\(\\lim_{x\\to 0^+}x^2=0\\)。 · Right-hand limit: 0.',
          '左右不等，双侧极限不存在。 · The one-sided limits differ, so the two-sided limit does not exist.',
        ],
        solution: '极限不存在（跳跃间断）。 · The limit does not exist (jump discontinuity).',
      },
    ],
    examTips: [
      'FRQ：若写“极限不存在”，最好补一句左右极限或说明发散方式。 · FRQ: if you write “the limit does not exist,” add a sentence about the one-sided limits or the way the function diverges.',
      'MCQ：先看是否 \\(\\dfrac{0}{0}\\)，再分解/共轭；不要过早用洛必达（Unit 4 才系统讲）。 · MCQ: first check for the indeterminate form shown above, then factor or conjugate; avoid using L’Hôpital too early (Unit 4 covers it systematically).',
      'CED 1.2：会用极限记号，并区分 \\(x\\to a\\)、\\(x\\to a^\\pm\\)、\\(x\\to\\infty\\)。 · CED 1.2: use limit notation correctly and distinguish the three approach notations shown above.',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u1', code: '1.1', title: '瞬时变化导论 · Introduction to Instantaneous Change', relation: '先修直觉 · prerequisite intuition' },
      { subject: 'math', chapterId: 'calc-u1', code: '1.5', title: '极限的代数性质 · Algebraic Properties of Limits', relation: '后续 · follow-up' },
      { subject: 'math', chapterId: 'calc-u1', code: '1.11', title: '定义连续性 · Defining Continuity', relation: '联系 · connection' },
    ],
    development: [
      '用表格观察 \\(x\\to a\\) 时 \\(f(x)\\) 的趋势。 · Use a table to observe the trend of \\(f(x)\\) as \\(x\\) approaches \\(a\\).',
      '用图像读左右极限。 · Read one-sided limits from a graph.',
      '用代数确认精确值。 · Confirm the exact value algebraically.',
    ],
    checks: [
      '能否解释“极限存在但函数在该点无定义”的例子？ · Can you explain an example where the limit exists but the function is undefined at that point?',
      '能否写出一个左右极限不同的分段函数？ · Can you write a piecewise function whose left and right limits differ?',
    ],
    summary: '极限刻画逼近趋势；左右极限一致是双侧极限存在的关键。 · Limits describe approach; agreement of the one-sided limits is the key to the two-sided limit.',
  },

  'math/calc-u2/2.2': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能写出导数在 \\(x=a\\) 处的两种等价定义 \\(f\'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}=\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}\\)，并说明 \\(h\\) 与 \\(x-a\\) 都表示自变量的增量。 · Write the two equivalent definitions of the derivative at \\(x=a\\) shown above, and explain that both \\(h\\) and \\(x-a\\) represent an increment in the independent variable.',
      '能用定义计算多项式、根式与简单有理函数在指定点的导数：先写差商，再因式分解、有理化或通分，最后取极限。 · Use the definition to compute derivatives of polynomials, radicals, and simple rational functions at a point: write the difference quotient, simplify by factoring, rationalizing, or finding a common denominator, and then take the limit.',
      '能把 \\(f\'(a)\\) 解释为曲线在 \\(x=a\\) 处的切线斜率与瞬时变化率，并用点斜式写出切线方程。 · Interpret \\(f\'(a)\\) as both the slope of the tangent line at \\(x=a\\) and the instantaneous rate of change, and write the tangent-line equation in point-slope form.',
      '能用左右导数判断分段函数或含绝对值函数在连接点是否可导，并说明“连续不一定可导”。 · Use one-sided derivatives to decide whether a piecewise or absolute-value function is differentiable at a junction, and explain that continuity does not imply differentiability.',
      '能说明导数的单位与符号：若 \\(s(t)\\) 为位置，则 \\(s\'(t)\\) 是瞬时速度，\\(s\'\'(t)\\) 是加速度。 · Explain the units and meaning of derivatives: if \\(s(t)\\) is position, then \\(s\'(t)\\) is instantaneous velocity and \\(s\'\'(t)\\) is acceleration.',
    ],
    essentialKnowledge: [
      '差商 \\(\\dfrac{f(a+h)-f(a)}{h}\\) 是区间上的平均变化率，也是割线斜率；\\(h\\to0\\) 时割线趋于切线，差商极限即导数。 · The difference quotient above is the average rate of change over the interval and the slope of the secant line; as \\(h\\to0\\), the secant approaches the tangent, and the limit of the difference quotient is the derivative.',
      '\\(f\'(a)\\)、\\(\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=a}\\)、\\(\\dfrac{\\mathrm{d}f}{\\mathrm{d}x}(a)\\) 是同一导数的不同记号；\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 整体是一个记号，不能拆成两个数相除。 · The three notations shown above all denote the same derivative; the Leibniz notation is a single symbol and must not be split into two numbers being divided.',
      '用定义求导时不能直接令 \\(h=0\\)；先把差商化简成在 \\(h=0\\) 附近有定义的形式，再取极限。 · When differentiating from the definition, do not substitute \\(h=0\\) directly; first simplify the difference quotient into a form defined near \\(h=0\\), then take the limit.',
      '可导必连续，连续不一定可导；尖点（如 \\(|x|\\) 在 0）、角点、垂直切线（如 \\(\\sqrt[3]{x}\\) 在 0）都可能连续但不可导。 · Differentiability implies continuity, but continuity does not imply differentiability; cusps (such as the absolute-value example at 0), corners, and vertical tangents (such as the cube-root example at 0) can be continuous yet not differentiable.',
      '切线方程：\\(y-f(a)=f\'(a)(x-a)\\)；若 \\(f\'(a)=0\\)，切线水平；法线斜率在 \\(f\'(a)\\neq0\\) 时为 \\(-\\dfrac{1}{f\'(a)}\\)。 · Tangent line: use the point-slope equation shown above; if the derivative is zero, the tangent is horizontal; when the derivative is nonzero, the normal-line slope is the negative reciprocal of the derivative.',
      '左右导数分别由 \\(h\\to0^-\\) 与 \\(h\\to0^+\\) 的差商极限给出；可导当且仅当二者存在且相等。 · The left- and right-hand derivatives come from the difference-quotient limits as \\(h\\to0^-\\) and \\(h\\to0^+\\), respectively; the derivative exists exactly when both exist and are equal.',
    ],
    definition: '函数 \\(f\\) 在 \\(x=a\\) 的导数定义为极限（若存在）\n\\[f\'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}=\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}.\\]\n导数是瞬时变化率，也是切线斜率。记号 \\(f\'(a)\\)、\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\big|_{x=a}\\) 等价。 · The derivative of \\(f\\) at \\(x=a\\) is defined by the limit (if it exists) shown above. The derivative is the instantaneous rate of change and the slope of the tangent line. The prime notation and the Leibniz notation above are equivalent.',
    intuition: '平均变化率是割线斜率；让两点贴合，割线变成切线，斜率变成导数。 · Average rate of change is the slope of a secant line; bring the two points together and the secant becomes the tangent, whose slope is the derivative.',
    intuitionDetailed: '若位置 \\(s(t)\\)，则 \\(\\dfrac{s(t+h)-s(t)}{h}\\) 是时段 \\(h\\) 的平均速度；\\(h\\to 0\\) 得到瞬时速度 \\(s\'(t)\\)。 · If \\(s(t)\\) is position, the difference quotient shown above is the average velocity over a time interval of length \\(h\\); letting \\(h\\to0\\) gives the instantaneous velocity \\(s\'(t)\\).',
    formulas: [
      { latex: "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}", note: '差商极限定义。 · Limit definition of the difference quotient.' },
      { latex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)", note: '莱布尼茨记号；叠式分式。 · Leibniz notation; stacked fraction.' },
    ],
    derivationNotes: [
      { from: '平均变化率 · Average rate of change', to: '导数 · Derivative', note: '对差商取 \\(h\\to 0\\) 极限。 · Take the limit of the difference quotient as \\(h\\to0\\).' },
      { from: '导数定义 · Derivative definition', to: '切线方程 · Tangent-line equation', note: '点斜式：\\(y-f(a)=f\'(a)(x-a)\\)。 · Point-slope form: use the equation shown above.' },
    ],
    conditions: ['定义中的极限必须存在（有限） · The limit in the definition must exist (and be finite)', '可导 ⇒ 连续，反之不然（如 \\(|x|\\) 在 0） · Differentiability implies continuity, but not conversely (for example, the absolute-value function at 0)'],
    keyPoints: ['导数是极限，不是代入差商 · A derivative is a limit, not a direct substitution into the difference quotient', '几何：切线斜率；物理：瞬时率 · Geometry: tangent slope; physics: instantaneous rate', '先化简差商再取极限 · Simplify the difference quotient before taking the limit'],
    misconceptions: [
      '把平均速度当成瞬时速度 · Treating average velocity as instantaneous velocity',
      '认为连续就一定可导 · Assuming continuity guarantees differentiability',
      '差商未化简就对 \\(h=0\\) 代入 · Substituting \\(h=0\\) before simplifying the difference quotient',
      '斜线书写 \\(dy/dx\\) 造成与 \\(d(y/dx)\\) 混淆——展示时用 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) · Writing the derivative with a slash notation that is ambiguous; use the stacked Leibniz notation shown above',
    ],
    examples: [
      {
        title: '例 1 · 用定义求 \\(f\'(2)\\) · Example 1 · Using the definition at a point',
        prompt: '设 \\(f(x)=x^2\\)。用定义求 \\(f\'(2)\\)。 · Let \\(f(x)=x^2\\). Use the definition to find the derivative at \\(x=2\\).',
        steps: [
          '写差商：\\(\\dfrac{(2+h)^2-2^2}{h}=\\dfrac{4+4h+h^2-4}{h}=\\dfrac{4h+h^2}{h}\\)。 · Write the difference quotient and expand the numerator as shown above.',
          '\\(h\\neq 0\\) 时等于 \\(4+h\\)。 · For \\(h\\neq0\\), it simplifies to \\(4+h\\).',
          '极限：\\(\\lim_{h\\to 0}(4+h)=4\\)。 · Take the limit: the result is 4.',
        ],
        solution: '故 \\(f\'(2)=4\\)。与幂法则 \\(f\'(x)=2x\\) 在 \\(x=2\\) 一致。 · Therefore the derivative at 2 is 4. This agrees with the power-rule result at \\(x=2\\).',
        solutionLatex: "f'(2)=4",
      },
      {
        title: '例 2 · 切线方程 · Example 2 · Tangent-line equation',
        prompt: '求 \\(y=\\sqrt{x}\\) 在 \\(x=4\\) 处的切线方程。 · Find the tangent line to the square-root curve at \\(x=4\\).',
        steps: [
          '\\(f(x)=\\sqrt{x}\\)，\\(f(4)=2\\)。 · Evaluate the function at 4: the point is \\((4,2)\\).',
          '差商：\\(\\dfrac{\\sqrt{4+h}-2}{h}\\)，有理化得 \\(\\dfrac{1}{\\sqrt{4+h}+2}\\)。 · Write the difference quotient and rationalize as shown above.',
          '极限 \\(h\\to 0\\)：\\(\\dfrac{1}{4}\\)，即斜率。 · The limit as \\(h\\to0\\) is the slope, one quarter.',
          '切线：\\(y-2=\\dfrac{1}{4}(x-4)\\)，即 \\(y=\\dfrac{1}{4}x+1\\)。 · Use point-slope form to get the tangent line shown above.',
        ],
        solution: '切线为 \\(y=\\dfrac{1}{4}x+1\\)。 · The tangent line is the linear equation shown above.',
        solutionLatex: 'y=\\dfrac{1}{4}x+1',
      },
      {
        title: '例 3 · 不可导 · Example 3 · Not differentiable',
        prompt: '说明 \\(f(x)=|x|\\) 在 \\(x=0\\) 连续但不可导。 · Show that the absolute-value function is continuous but not differentiable at \\(x=0\\).',
        steps: [
          '连续：\\(\\lim_{x\\to 0}|x|=0=f(0)\\)。 · Continuity: the limit equals the function value, 0.',
          '右导数：\\(\\lim_{h\\to 0^+}\\dfrac{|h|}{h}=1\\)。 · Right-hand derivative: 1.',
          '左导数：\\(\\lim_{h\\to 0^-}\\dfrac{|h|}{h}=-1\\)。 · Left-hand derivative: -1.',
          '左右导数不等，故 \\(f\'(0)\\) 不存在。 · The one-sided derivatives differ, so the derivative at 0 does not exist.',
        ],
        solution: '尖点：连续≠可导。 · A cusp: continuous does not imply differentiable.',
      },
    ],
    examTips: [
      'CED 2.2：会写定义、会用定义算简单导数、会解释导数含义。 · CED 2.2: write the definition, use it to compute simple derivatives, and explain what the derivative means.',
      '若题目要求“用定义”，不要直接写幂法则。 · If a question says “use the definition,” do not jump straight to the power rule.',
      '单位：若 \\(s\\) 以 m、\\(t\\) 以 s，则 \\(s\'\\) 的单位是 m/s。 · Units: if position is in meters and time in seconds, the derivative’s units are meters per second.',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u2', code: '2.1', title: '瞬时变化率 · Instantaneous Rate of Change', relation: '先修 · prerequisite' },
      { subject: 'math', chapterId: 'calc-u2', code: '2.4', title: '导数与连续 · Derivative and Continuity', relation: '后续 · follow-up' },
      { subject: 'math', chapterId: 'calc-u2', code: '2.5', title: '幂函数导数 · Power Rule', relation: '快捷法则 · shortcut rule' },
    ],
    development: ['先算平均率 · Compute the average rate first.', '再让间隔趋于 0 · Then let the interval shrink to 0.', '对照切线与瞬时速度语言 · Connect the result to tangent-line and instantaneous-velocity language.'],
    checks: ['能否用定义求 \\(f(x)=3x^2\\) 的 \\(f\'(1)\\)？ · Can you use the definition to find the derivative of \\(3x^2\\) at \\(x=1\\)?', '能否举出连续不可导的例子？ · Can you give an example of a function that is continuous but not differentiable?'],
    summary: '导数是差商的极限：瞬时率与切线斜率的统一。 · A derivative is the limit of a difference quotient: instantaneous rate and tangent slope unified.',
  },

  'math/calc-u2/2.5': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能陈述幂法则 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}x^n=nx^{n-1}\\)，并说明它对正整数、负整数和分数指数在相应定义域内都适用。 · State the power rule shown above, and explain that it applies to positive integer, negative integer, and fractional exponents on the appropriate domains.',
      '能先把根式、倒数改写成幂的形式（如 \\(\\sqrt{x}\\)、\\(\\sqrt[3]{x^2}\\)、\\(\\dfrac{1}{x^2}=x^{-2}\\)），再用幂法则求导。 · Rewrite radicals and reciprocals as powers (for example, the three forms shown above), then differentiate using the power rule.',
      '能结合常数倍与和差法则，对多项式及简单根式、分式逐项求导，并整理结果。 · Combine the power rule with the constant-multiple and sum and difference rules to differentiate polynomials and simple radical or rational expressions term by term, then simplify.',
      '能用幂法则求指定点的切线斜率或瞬时变化率，并检查指数、系数与定义域是否合理。 · Use the power rule to find a tangent slope or instantaneous rate of change at a specified point, and check that the exponents, coefficients, and domain are reasonable.',
      '能说明幂法则在边界点为何可能失效，例如 \\(\\sqrt[3]{x}\\) 在 \\(x=0\\) 处有垂直切线，不能直接断言可导。 · Explain why the power rule can fail at a boundary point; for example, the cube-root function has a vertical tangent at \\(x=0\\), so differentiability cannot be assumed there.',
    ],
    essentialKnowledge: [
      '幂法则：把原指数乘到前面作系数，再把指数减一；\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}x^n=nx^{n-1}\\)。 · Power rule: multiply the original exponent to the front as a coefficient, then decrease the exponent by one, as in the formula above.',
      '常数函数导数为 0，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}x=1\\)；常数倍与和差法则让多项式可以逐项求导。 · The derivative of a constant is 0, and the derivative of \\(x\\) is 1; the constant-multiple and sum and difference rules let you differentiate polynomials term by term.',
      '使用前先确认幂在所讨论点有定义：\\(\\sqrt{x}\\) 需 \\(x>0\\) 才有双侧导数（端点按单侧导数理解），\\(x^{-1}\\) 在 \\(x=0\\) 无定义。 · Before applying the rule, check that the power is defined at the point: the square root needs \\(x>0\\) for a two-sided derivative (endpoints use one-sided derivatives), and the reciprocal is undefined at \\(x=0\\).',
      '根式与倒数先改写为分数指数或负指数，可避免把 \\(\\sqrt{x}\\) 的导数误写成 \\(\\dfrac{1}{\\sqrt{x}}\\) 之类的形式。 · Rewrite radicals and reciprocals as fractional or negative exponents first; this helps avoid mistakes such as writing the derivative of the square root as the reciprocal square root shown above.',
      '常见错误：漏乘原指数、把指数写成 \\(n+1\\)、把 \\(n^x\\) 与 \\(x^n\\) 混为一谈；幂法则只适用于“底数是变量、指数是常数”的幂。 · Common errors: forgetting to multiply by the original exponent, increasing the exponent instead of decreasing it, and confusing an exponential function with a power; the power rule applies only when the base is the variable and the exponent is constant.',
      '正整数幂的幂法则可由导数定义与二项式定理证明；分数与负指数情形可借助商法则、链式法则或隐函数求导推广。 · For positive integer powers, the power rule follows from the derivative definition and the binomial theorem; fractional and negative exponents are handled by extending it with the quotient rule, chain rule, or implicit differentiation.',
    ],
    definition: '对任意实数 \\(n\\)（在 \\(x>0\\) 或使幂有定义的定义域上），有幂法则\n\\[\\dfrac{\\mathrm{d}}{\\mathrm{d}x}x^n=nx^{n-1}.\\]\n特别地常数函数导数为 0；线性函数 \\(x\\) 的导数为 1。 · For any real number \\(n\\) (on \\(x>0\\) or on a domain where the power is defined), the power rule holds as shown above. In particular, the derivative of a constant is 0 and the derivative of the linear function \\(x\\) is 1.',
    intuition: '把 \\(x^n\\) 想象成“自乘 \\(n\\) 次”；变厚一点时，变化率与 \\(n\\) 和“矮一阶”的幂成正比。 · Think of \\(x^n\\) as repeated multiplication; when the input thickens slightly, the rate of change is proportional to \\(n\\) and to the next-lower power.',
    intuitionDetailed: '由二项式展开 \\((x+h)^n=x^n+nx^{n-1}h+\\cdots\\)，差商极限只留下 \\(nx^{n-1}\\) 项。 · Expand using the binomial theorem as shown above; after dividing by \\(h\\) and taking the limit, only the leading correction term remains.',
    formulas: [
      { latex: '\\dfrac{\\mathrm{d}}{\\mathrm{d}x}x^{n}=nx^{n-1}', note: '幂法则。 · Power rule.' },
      { latex: '\\dfrac{\\mathrm{d}}{\\mathrm{d}x}c=0', note: '常数法则。 · Constant rule.' },
    ],
    derivationNotes: [
      { from: '导数定义 · Derivative definition', to: '正整数幂 · Positive integer powers', note: '二项式定理展开后除以 \\(h\\) 再令 \\(h\\to 0\\)。 · Expand by the binomial theorem, divide by \\(h\\), then let \\(h\\to0\\).' },
      { from: '正整数 · Positive integers', to: '一般实数 · General real exponents', note: '对有理数用隐函数/链式法则；一般实数用指数定义 \\(x^n=e^{n\\ln x}\\)。 · Use implicit differentiation or the chain rule for rational exponents; for general real exponents, use the exponential definition shown above.' },
    ],
    conditions: ['\\(x^n\\) 在所讨论点可导（如 \\(x^{-1}\\) 在 0 无定义） · The power must be differentiable at the point under discussion (for example, the reciprocal is undefined at 0)', '与常数倍、和差法则联用 · Combine with the constant-multiple and sum and difference rules'],
    keyPoints: ['指数减一、前面乘原指数 · Decrease the exponent by one and multiply by the original exponent', '可与常数倍结合：\\((cx^n)\'=cnx^{n-1}\\) · It combines with constant multiples, as in the formula shown above'],
    misconceptions: [
      '误记成 \\(nx^{n+1}\\) 或 \\(n^{x-1}\\) · Misremembering the rule by increasing the exponent or moving the exponent incorrectly',
      '对 \\(\\sqrt{x}\\) 忘记写成 \\(\\sqrt{x}\\) 再用幂法则 · Forgetting to rewrite the square root as a power before applying the rule',
      '以为 \\((x^n)\'=x^{n-1}\\) 漏乘 \\(n\\) · Omitting the factor of \\(n\\) in the derivative',
    ],
    examples: [
      {
        title: '例 1 · Example 1',
        prompt: '求 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(5x^4-3x+7)\\)。 · Differentiate the polynomial shown above.',
        steps: [
          '逐项：\\(5\\cdot 4x^3-3\\cdot 1+0=20x^3-3\\)。 · Differentiate term by term; the simplified derivative is the polynomial shown above.',
        ],
        solution: '答案：\\(20x^3-3\\)。 · Answer: the derivative shown above.',
        solutionLatex: '20x^{3}-3',
      },
      {
        title: '例 2 · 根式 · Example 2 · Radical',
        prompt: '求 \\(y=\\sqrt[3]{x^2}\\) 的导数。 · Find the derivative of the cube-root expression shown above.',
        steps: [
          '改写 \\(y=\\sqrt[3]{x^{2}}\\)。 · Rewrite it as a fractional power, as shown above.',
          '\\(y\'=\\dfrac{2}{3}x^{-1/3}=\\dfrac{2}{3\\sqrt[3]{x}}\\)（\\(x\\neq 0\\)）。 · Apply the power rule; the result is the expression shown above, valid for \\(x\\neq0\\).',
        ],
        solution: '在 \\(x=0\\) 需另议可导性；\\(x\\neq 0\\) 用上式。 · At \\(x=0\\), differentiability needs separate discussion; for \\(x\\neq0\\), use the result above.',
        solutionLatex: "y'=\\dfrac{2}{3}x^{-1/3}",
      },
      {
        title: '例 3 · 负指数 · Example 3 · Negative exponent',
        prompt: '求 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\dfrac{1}{x^2}\\right)\\)。 · Differentiate the reciprocal-square expression shown above.',
        steps: [
          '\\(\\dfrac{1}{x^2}=x^{-2}\\)。 · Rewrite it as a negative power, as shown above.',
          '导数 \\(-2x^{-3}=-\\dfrac{2}{x^3}\\)。 · Differentiate to get the negative cubic expression shown above.',
        ],
        solution: '答案：\\(-\\dfrac{2}{x^3}\\)。 · Answer: the derivative shown above.',
        solutionLatex: '-\\dfrac{2}{x^{3}}',
      },
    ],
    examTips: ['CED 2.5：熟练幂法则；根式与倒数先改写指数 · CED 2.5: master the power rule; rewrite radicals and reciprocals as exponents first.', '与积商法则、链式法则组合是后续重点 · Combining it with the product, quotient, and chain rules is the next focus.'],
    related: [
      { subject: 'math', chapterId: 'calc-u2', code: '2.2', title: '导数定义 · Derivative Definition', relation: '先修 · prerequisite' },
      { subject: 'math', chapterId: 'calc-u2', code: '2.6', title: '常数倍与和差 · Constant Multiples and Sums and Differences', relation: '联用 · used together' },
      { subject: 'math', chapterId: 'calc-u3', code: '3.1', title: '链式法则 · Chain Rule', relation: '后续 · follow-up' },
    ],
    development: ['整数幂 · Integer powers', '根式与负指数 · Radicals and negative exponents', '与四则法则联用 · Combine with the four operation rules'],
    checks: ['\\((x^{-3})\'\\) 是多少？ · What is the derivative of \\(x^{-3}\\)?', '\\((\\sqrt{x})\'\\) 能否写成叠式分式？ · Can you write the derivative of \\(\\sqrt{x}\\) as a stacked fraction?'],
    summary: '幂法则：指数乘到前面，幂减一。 · Power rule: multiply by the exponent, then decrease the exponent by one.',
  },

  'math/calc-u6/6.4': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能叙述 FTC1 与 FTC2，并说明它们如何把“累积”和“瞬时变化”互逆地联系起来。 · State FTC1 and FTC2, and explain how they connect accumulation and instantaneous change as inverse processes.',
      '能对变上限累积函数 \\(F(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\) 求导，并在上限为 \\(g(x)\\) 时正确使用链式法则。 · Differentiate an accumulation function with a variable upper limit, as in the definition above, and apply the chain rule correctly when the upper limit is \\(g(x)\\).',
      '能用 FTC2 计算定积分：先求原函数，再按 \\(F(b)-F(a)\\) 代入，注意上下限顺序与符号。 · Use FTC2 to evaluate a definite integral: find an antiderivative, then evaluate it by subtracting the lower-limit value from the upper-limit value, watching the order and signs.',
      '能利用 \\(F\'(x)=f(x)\\) 分析累积函数 \\(F\\) 的增减与极值：\\(f\\) 的符号决定 \\(F\\) 的增减，\\(f\\) 变号处可能出现极值。 · Use the fact that the derivative of the accumulation function equals the integrand to analyze its increase, decrease, and extrema: the sign of \\(f\\) controls whether \\(F\\) rises or falls, and a sign change in \\(f\\) can produce an extremum.',
      '能处理上下限都含变量的积分求导，并区分定积分（数）与不定积分（函数族）。 · Differentiate an integral whose upper and lower limits both depend on the variable, and distinguish a definite integral (a number) from an indefinite integral (a family of functions).',
    ],
    essentialKnowledge: [
      'FTC1：若 \\(f\\) 在 \\([a,b]\\) 连续，\\(F(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\) 在 \\((a,b)\\) 可导，且 \\(F\'(x)=f(x)\\)；这表示累积函数每增加一点，增加率就是被积函数在当前端点的高度。 · FTC1: if \\(f\\) is continuous on \\([a,b]\\), then the accumulation function defined above is differentiable on \\((a,b)\\) and its derivative is \\(f(x)\\); the rate at which accumulation grows is the height of the integrand at the current endpoint.',
      'FTC2：若 \\(F\'=f\\) 且 \\(f\\) 在 \\([a,b]\\) 连续，则 \\(\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)\\)；常写成 \\(\\left.F(x)\\right|_a^b\\)。 · FTC2: if \\(F\'=f\\) and \\(f\\) is continuous on \\([a,b]\\), then the definite integral equals the net change in the antiderivative, often written with the evaluation bar shown above.',
      '变上限链式法则：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\int_a^{g(x)}f(t)\\,\\mathrm{d}t=f(g(x))g\'(x)\\)；上下限都为变量时 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\int_{u(x)}^{v(x)}f(t)\\,\\mathrm{d}t=f(v(x))v\'(x)-f(u(x))u\'(x)\\)。 · Chain rule for a variable upper limit: the derivative is the integrand evaluated at the upper limit times the upper limit’s derivative; when both limits vary, subtract the lower-limit contribution from the upper-limit contribution.',
      '定积分的性质：\\(\\int_a^a f=0\\)，\\(\\int_b^a f=-\\int_a^b f\\)，\\(\\int_a^b c\\,\\mathrm{d}x=c(b-a)\\)；这些性质常与 FTC 联用。 · Properties of definite integrals: an integral over a zero-length interval is 0, reversing the limits changes the sign, and integrating a constant over an interval gives the constant times the interval length; these properties are often used with the FTC.',
      '累积函数 \\(F(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\) 表示从 \\(a\\) 到 \\(x\\) 的带符号面积；\\(f>0\\) 时 \\(F\\) 递增，\\(f<0\\) 时 \\(F\\) 递减，\\(f\\) 由正变负处 \\(F\\) 取局部极大。 · The accumulation function defined above represents the signed area from \\(a\\) to \\(x\\); it increases where \\(f>0\\), decreases where \\(f<0\\), and has a local maximum where \\(f\\) changes from positive to negative.',
      'FTC2 要求 \\(f\\) 在积分区间上连续（或至少存在满足 \\(F\'=f\\) 的原函数）；若被积函数在区间内有间断点，不能直接跨过该点套用公式。 · FTC2 requires \\(f\\) to be continuous on the interval (or at least to have an antiderivative whose derivative equals \\(f\\)); if the integrand has a discontinuity inside the interval, do not apply the formula straight across that point.',
      '定积分是一个确定的数，不定积分是含 \\(+C\\) 的函数族；求定积分时任意常数会相减抵消。 · A definite integral is a single number, while an indefinite integral is a family of functions containing an arbitrary constant; when evaluating a definite integral, the arbitrary constants cancel in the subtraction.',
    ],
    definition: '微积分基本定理（FTC）分两部分。FTC1：若 \\(f\\) 在 \\([a,b]\\) 连续，定义 \\(F(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\)，则 \\(F\'(x)=f(x)\\)。FTC2：若 \\(F\'=f\\) 连续，则\n\\[\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a).\\] · The Fundamental Theorem of Calculus (FTC) has two parts. FTC1: if \\(f\\) is continuous on \\([a,b]\\) and the accumulation function is defined as shown above, then its derivative is \\(f(x)\\). FTC2: if the derivative of \\(F\\) equals \\(f\\) and is continuous, then the definite integral equals the net change shown above.',
    intuition: '“累积函数的瞬时增长率就是被积函数”；定积分等于原函数净变化。 · The instantaneous growth rate of an accumulation function is the integrand; a definite integral equals the net change of an antiderivative.',
    intuitionDetailed: '面积函数 \\(F(x)\\) 在右端点多扫过的细条高度约为 \\(f(x)\\)，宽度 \\(\\mathrm{d}x\\)，故 \\(F\'=f\\)。 · The thin strip swept out by the area function at the right endpoint has height approximately equal to the integrand and infinitesimal width, so the derivative of the accumulation function is the integrand.',
    formulas: [
      { latex: '\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\int_{a}^{x}f(t)\\,\\mathrm{d}t=f(x)', note: 'FTC1。 · FTC1.' },
      { latex: '\\int_{a}^{b}f(x)\\,\\mathrm{d}x=F(b)-F(a)', note: 'FTC2，其中 \\(F\'=f\\)。 · FTC2, where the derivative of the antiderivative is the integrand.' },
    ],
    derivationNotes: [
      { from: '黎曼和 · Riemann sums', to: '面积函数 · Area function', note: '把上限变量化得到累积函数。 · Make the upper limit a variable to obtain the accumulation function.' },
      { from: 'FTC1 · FTC1', to: 'FTC2 · FTC2', note: '对 \\(F(b)-F(a)\\) 用 MVT/积分中值思想，或由 FTC1 与链式反推。 · Apply the Mean Value Theorem or the average-value idea to the net change, or work backward from FTC1 with the chain rule.' },
    ],
    conditions: ['FTC1 通常要求 \\(f\\) 连续（可放宽到可积） · FTC1 usually requires the integrand to be continuous (it can be relaxed to integrability)', 'FTC2 需要原函数在区间上可导且导数为 \\(f\\) · FTC2 requires an antiderivative that is differentiable on the interval and whose derivative is the integrand'],
    keyPoints: ['积分与微分互逆 · Integration and differentiation are inverse processes', '变上限积分求导时注意链式法则（上限为 \\(g(x)\\) 时乘 \\(g\'(x)\\)） · When differentiating a variable-upper-limit integral, remember the chain rule (multiply by the derivative of the upper limit)'],
    misconceptions: [
      '忘记变上限积分的链式法则 · Forgetting the chain rule for a variable-upper-limit integral',
      '把 \\(\\int_a^b f\\) 与原函数混用却漏写 \\(F(b)-F(a)\\) · Mixing up the integral with an antiderivative and omitting the net-change subtraction',
      '下限大于上限时符号处理错误 · Handling signs incorrectly when the lower limit is greater than the upper limit',
    ],
    examples: [
      {
        title: '例 1 · FTC2 · Example 1 · FTC2',
        prompt: '计算 \\(\\int_0^2 (3x^2-1)\\,\\mathrm{d}x\\)。 · Evaluate the definite integral shown above.',
        steps: [
          '原函数 \\(F(x)=x^3-x\\)。 · Find an antiderivative, as shown above.',
          '\\(F(2)-F(0)=(8-2)-0=6\\)。 · Evaluate at the endpoints and subtract: the result is 6.',
        ],
        solution: '答案：6。 · Answer: 6.',
        solutionLatex: '\\int_{0}^{2}(3x^{2}-1)\\,\\mathrm{d}x=6',
      },
      {
        title: '例 2 · FTC1 · Example 2 · FTC1',
        prompt: '设 \\(F(x)=\\int_1^x \\cos t\\,\\mathrm{d}t\\)。求 \\(F\'(x)\\)。 · For the accumulation function shown above, find its derivative.',
        steps: ['由 FTC1，\\(F\'(x)=\\cos x\\)。 · By FTC1, the derivative is the integrand evaluated at the upper limit.'],
        solution: '答案：\\(\\cos x\\)。 · Answer: the cosine function shown above.',
        solutionLatex: "F'(x)=\\cos x",
      },
      {
        title: '例 3 · 变上限 · Example 3 · Variable upper limit',
        prompt: '求 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\displaystyle\\int_0^{x^2}\\sin t\\,\\mathrm{d}t\\)。 · Differentiate the variable-upper-limit integral shown above.',
        steps: [
          '令 \\(u=x^2\\)，则 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\int_0^{u}\\sin t\\,\\mathrm{d}t=\\sin u\\cdot u\'\\)。 · Let the upper limit be \\(u=x^2\\), then apply FTC1 and the chain rule as shown above.',
          '即 \\(\\sin(x^2)\\cdot 2x=2x\\sin(x^2)\\)。 · Simplify: the result is the product shown above.',
        ],
        solution: '答案：\\(2x\\sin(x^2)\\)。 · Answer: the expression shown above.',
        solutionLatex: '2x\\sin(x^{2})',
      },
    ],
    examTips: ['CED 6.4–6.7：FTC 是 BC 核心；变上限必考链式法则 · CED 6.4–6.7: the FTC is the core of BC Calculus; variable upper limits and the chain rule are frequently tested.', '检查端点代入顺序 \\(F(b)-F(a)\\) · Check the endpoint substitution order when evaluating a definite integral.'],
    related: [
      { subject: 'math', chapterId: 'calc-u6', code: '6.2', title: '黎曼和近似 · Riemann Sum Approximation', relation: '先修 · prerequisite' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.7', title: '定积分求值 · Evaluating Definite Integrals', relation: '应用 · application' },
      { subject: 'math', chapterId: 'calc-u2', code: '2.2', title: '导数定义 · Derivative Definition', relation: '互逆 · inverse relationship' },
    ],
    development: ['黎曼和 → 定积分 · Riemann sums → definite integral', '面积函数 → FTC1 · Area function → FTC1', '原函数净变化 → FTC2 · Net change of an antiderivative → FTC2'],
    checks: ['\\(\\int_0^{x^3}e^{t^2}\\mathrm{d}t\\) 对 \\(x\\) 的导数？ · What is the derivative of the integral shown above with respect to \\(x\\)?', '能否口述 FTC 的一句话总结？ · Can you state the FTC in one sentence?'],
    summary: 'FTC 把微分与积分连通：累积函数的导数是被积函数；定积分是原函数净变化。 · The FTC connects differentiation and integration: the derivative of an accumulation function is the integrand, and a definite integral is the net change of an antiderivative.',
  },

  'math/math-prep-alg1/P1.9': {
    enrichedAt: 'batch1',
    definition: '因式分解是把多项式写成若干多项式之积。对二次式 \\(ax^2+bx+c\\)，常用十字相乘、完全平方、平方差 \\(a^2-b^2=(a-b)(a+b)\\) 等方法，使方程求解或化简分式。',
    intuition: '乘法的逆运算：展开是“拆开括号”，因式分解是“找括号”。',
    intuitionDetailed: '能分解则方程可用零因子法则：乘积为 0 ⇒ 某一因子为 0。',
    formulas: [
      { latex: 'a^{2}-b^{2}=(a-b)(a+b)', note: '平方差。' },
      { latex: 'a^{2}\\pm 2ab+b^{2}=(a\\pm b)^{2}', note: '完全平方。' },
    ],
    derivationNotes: [
      { from: '分配律', to: '平方差', note: '直接展开右边验证。' },
    ],
    conditions: ['在实数范围内不一定总能一次因式分解（判别式为负）', '先提取公因式'],
    keyPoints: ['先提公因式', '二次式看判别式与十字相乘', '分解后可解方程、化简有理式'],
    misconceptions: [
      '漏提公因式',
      '把 \\(x^2+4\\) 误写成 \\((x+2)^2\\)',
      '符号错误：\\(a^2-2ab+b^2=(a-b)^2\\) 不是 \\((a+b)^2\\)',
    ],
    examples: [
      {
        title: '例 1',
        prompt: '分解 \\(x^2-5x+6\\)。',
        steps: ['找两数积为 6、和为 -5：-2 与 -3。', '得 \\((x-2)(x-3)\\)。'],
        solution: '\\((x-2)(x-3)\\)。',
      },
      {
        title: '例 2',
        prompt: '分解 \\(2x^2+4x\\)。',
        steps: ['提 \\(2x\\)：\\(2x(x+2)\\)。'],
        solution: '\\(2x(x+2)\\)。',
      },
      {
        title: '例 3 · 解方程',
        prompt: '解 \\(x^2-9=0\\)。',
        steps: ['\\((x-3)(x+3)=0\\)', '\\(x=3\\) 或 \\(x=-3\\)。'],
        solution: '\\(x=\\pm 3\\)。',
      },
    ],
    examTips: ['代数预备：为极限中约分、导数差商化简打基础', '验算：展开因式应回到原式'],
    related: [
      { subject: 'math', chapterId: 'math-prep-alg1', code: 'P1.8', title: '多项式运算', relation: '先修' },
      { subject: 'math', chapterId: 'math-prep-alg1', code: 'P1.10', title: '二次方程入门', relation: '应用' },
      { subject: 'math', chapterId: 'calc-u1', code: '1.6', title: '代数操作求极限', relation: '后续' },
    ],
    development: ['公因式', '二次式十字相乘', '公式法'],
    checks: ['分解 \\(x^2-16\\)', '解 \\((x-1)(x+4)=0\\)'],
    summary: '因式分解是展开的逆过程，是解方程与化简的基本工具。',
  },

  'mech/mech-u3/3.1': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能区分恒力功与变力功，并用 \\(W=\\int \\mathbf F\\cdot\\mathrm{d}\\mathbf r\\) 计算变力做功。 · Distinguish work by constant and variable forces, and compute variable-force work with the line integral shown.',
      '能陈述并应用功–动能定理 \\(W_{\\mathrm{net}}=\\Delta K\\)，说明只有合功等于动能变化。 · State and apply the work–kinetic-energy theorem, explaining that only the net work equals the change in kinetic energy.',
      '能判断功的正负与动能变化方向，并用能量法解多步力学题。 · Determine the sign of work and the direction of kinetic-energy change, and solve multi-step mechanics problems with energy methods.',
    ],
    essentialKnowledge: [
      '功是力沿位移的标量积累；力与位移垂直时不做功。 · Work is the scalar accumulation of force along displacement; a force perpendicular to the displacement does no work.',
      '合外力做功等于动能变化；单个分力的功一般不等于 \\(\\Delta K\\)。 · The net work equals the change in kinetic energy; the work done by one component force generally does not.',
      '变力功由 \\(\\int F_x\\,\\mathrm{d}x\\) 给出，在 \\(F\\text{–}x\\) 图上等于曲线下面积。 · Variable-force work is given by the integral shown and equals the area under the force–position graph.',
      '摩擦等非保守力做负功时机械能减少，应使用功能原理而非机械能守恒。 · When nonconservative forces such as friction do negative work, mechanical energy decreases; use the work–energy principle instead of conservation of mechanical energy.',
      '动能 \\(K=\\dfrac{1}{2}mv^{2}\\) 是标量，其值依赖参考系。 · Kinetic energy is a scalar and its value depends on the reference frame.',
    ],
    definition: '功–动能定理：合外力对质点做的功等于动能的改变\n\\[\nW_{\\mathrm{net}}=\\Delta K=K_f-K_i=\\dfrac{1}{2}mv_f^{2}-\\dfrac{1}{2}mv_i^{2}.\n\\]\n对变力，\\(W=\\int\\mathbf{F}\\cdot\\mathrm{d}\\mathbf{r}\\)。',
    intuition: '推得越狠、位移越大，动能增加越多；阻力做负功则动能减少。',
    intuitionDetailed: '由牛顿第二定律 \\(F=ma\\) 与链式法则 \\(a=v\\dfrac{\\mathrm{d}v}{\\mathrm{d}x}\\)，积分得 \\(W=\\Delta K\\)。',
    formulas: [
      { latex: 'W_{\\mathrm{net}}=\\Delta K', note: '功–动能定理。' },
      { latex: 'K=\\dfrac{1}{2}mv^{2}', note: '平动动能。' },
      { latex: 'W=\\int_{i}^{f}\\mathbf{F}\\cdot\\mathrm{d}\\mathbf{r}', note: '变力功。' },
    ],
    derivationNotes: [
      { from: '牛顿第二定律', to: '功–动能定理', note: '\\(F\\,\\mathrm{d}x=mv\\,\\mathrm{d}v\\)，两边积分。' },
    ],
    conditions: ['对质点或可视为质点的平动；合外力做功', '动能相对惯性系'],
    keyPoints: ['功是标量，可正可负', '只有合功等于 \\(\\Delta K\\)，某一分力功一般不等于 \\(\\Delta K\\)', '摩擦等非保守力做功改变机械能'],
    misconceptions: [
      '以为单个力的功等于 \\(\\Delta K\\)',
      '漏掉负功（阻力）',
      '把功率与功混淆',
      '用斜线写 \\(1/2 mv^2\\) —— 必须用 \\(\\dfrac{1}{2}mv^{2}\\)',
    ],
    examples: [
      {
        title: '例 1 · 恒力加速',
        prompt: '质量 \\(m=2\\,\\mathrm{kg}\\) 物体由静止经合外力 \\(F=10\\,\\mathrm{N}\\) 沿力方向位移 \\(4\\,\\mathrm{m}\\)。求末速。',
        steps: [
          '\\(W=F\\Delta x=10\\cdot 4=40\\,\\mathrm{J}\\)。',
          '\\(W=\\Delta K=\\dfrac{1}{2}mv_f^{2}-0\\)。',
          '\\(\\dfrac{1}{2}\\cdot 2\\cdot v_f^{2}=40\\Rightarrow v_f^{2}=40\\Rightarrow v_f=\\sqrt{40}=2\\sqrt{10}\\,\\mathrm{m/s}\\)。',
        ],
        solution: '末速 \\(2\\sqrt{10}\\,\\mathrm{m/s}\\)。',
        solutionLatex: 'v_f=2\\sqrt{10}\\,\\mathrm{m/s}',
      },
      {
        title: '例 2 · 有摩擦',
        prompt: '物体质量 \\(3\\,\\mathrm{kg}\\)，初速 \\(5\\,\\mathrm{m/s}\\)，水平面上滑行 \\(4\\,\\mathrm{m}\\) 后停下。求平均摩擦力大小。',
        steps: [
          '\\(\\Delta K=0-\\dfrac{1}{2}\\cdot 3\\cdot 25=-\\dfrac{75}{2}\\,\\mathrm{J}\\)。',
          '合功即摩擦力功：\\(W_f=f\\cdot(-4)=-4f\\)（与位移反向）。',
          '\\(-4f=-\\dfrac{75}{2}\\Rightarrow f=\\dfrac{75}{8}\\,\\mathrm{N}\\)。',
        ],
        solution: '平均摩擦力 \\(\\dfrac{75}{8}\\,\\mathrm{N}\\)。',
        solutionLatex: 'f=\\dfrac{75}{8}\\,\\mathrm{N}',
      },
      {
        title: '例 3 · 变力（一维）',
        prompt: '\\(F_x=3x\\)（N，\\(x\\) 以 m）把质点从 \\(x=0\\) 推到 \\(x=2\\,\\mathrm{m}\\)。求功。若 \\(m=1\\,\\mathrm{kg}\\) 且由静止开始，求末速。',
        steps: [
          '\\(W=\\int_0^2 3x\\,\\mathrm{d}x=\\dfrac{3}{2}x^{2}\\Big|_0^2=6\\,\\mathrm{J}\\)。',
          '\\(\\dfrac{1}{2}mv^{2}=6\\Rightarrow v=\\sqrt{12}=2\\sqrt{3}\\,\\mathrm{m/s}\\)。',
        ],
        solution: '功 \\(6\\,\\mathrm{J}\\)，末速 \\(2\\sqrt{3}\\,\\mathrm{m/s}\\)。',
        solutionLatex: 'W=6\\,\\mathrm{J},\\; v=2\\sqrt{3}\\,\\mathrm{m/s}',
      },
    ],
    examTips: [
      'Physics C Mech CED Unit 3：功、能量、功率；功–动能定理是核心目标。',
      '符号：与位移同向为正功。',
      '可用能量方法替代多步牛顿定律。',
    ],
    related: [
      { subject: 'mech', chapterId: 'mech-u2', code: '2.3', title: '牛顿第一与第二定律', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.2', title: '力与势能', relation: '相关' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.4', title: '功率', relation: '后续' },
    ],
    development: ['恒力功', '动能定义', '由牛顿定律导出定理', '变力积分'],
    checks: ['合功为负时动能如何变？', '为何单个力的功一般不等于 \\(\\Delta K\\)？'],
    summary: '合外力做功等于动能变化——连接力与运动的能量桥梁。',
  },

  'mech/mech-u2/2.5': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能陈述牛顿第三定律，并区分作用–反作用力与同一物体上的平衡力。 · State Newton\'s third law and distinguish action–reaction pairs from balanced forces on the same object.',
      '能在受力分析中只画作用在该物体上的力，不把反作用力画进同一物体。 · In a free-body diagram, draw only the forces acting on that object, not their reaction partners.',
      '能用第三定律解释行走、游泳、火箭推进等常见现象。 · Use the third law to explain walking, swimming, rocket propulsion, and similar phenomena.',
    ],
    essentialKnowledge: [
      '两物体相互作用时，作用力与反作用力等大、反向、共线，分别作用在两个不同物体上。 · For two interacting objects, the action and reaction forces are equal in magnitude, opposite in direction, collinear, and act on different objects.',
      '作用力与反作用力同时产生、同时消失，不能相互抵消。 · Action–reaction pairs arise and vanish together and cannot cancel each other.',
      '平衡力作用在同一物体上且可抵消；作用–反作用力作用在不同物体上，不可抵消。 · Balanced forces act on the same object and can cancel; action–reaction pairs act on different objects and cannot.',
      '第三定律对接触力与场力（引力、电磁力）都成立。 · The third law holds for contact forces and field forces such as gravity and electromagnetic forces.',
    ],
    definition: '牛顿第三定律：两物体相互作用时，力总是成对出现，大小相等、方向相反、作用在不同物体上、沿同一直线：\n\\[\n\\mathbf{F}_{12}=-\\mathbf{F}_{21}.\n\\]',
    intuition: '你推墙，墙也推你；火箭排气向后，气体推火箭向前。',
    intuitionDetailed: '作用力与反作用力同时产生、同时消失，永不作用在同一物体上，因此不会“抵消”。',
    formulas: [
      { latex: '\\mathbf{F}_{AB}=-\\mathbf{F}_{BA}', note: '作用力与反作用力。' },
    ],
    derivationNotes: [
      { from: '实验观察', to: '第三定律', note: '动量守恒的微观体现：内力成对抵消。' },
    ],
    conditions: ['惯性系中成立', '力的性质可以是接触力、引力、电磁力等'],
    keyPoints: ['等大反向共线，作用在不同物体', '不能在同一受力分析中互相抵消', '与“平衡的两个力”不同'],
    misconceptions: [
      '以为作用力反作用力作用在同一物体而抵消',
      '与共点平衡的“等大反向”混淆',
      '认为运动的物体受力更大',
    ],
    examples: [
      {
        title: '例 1 · 人推箱子',
        prompt: '人以水平力 \\(120\\,\\mathrm{N}\\) 推箱子，箱子推人的力多大？方向？',
        steps: [
          '由第三定律，箱子对人的力大小 \\(120\\,\\mathrm{N}\\)，方向相反（人被向后推）。',
          '该力作用在人上，不影响箱子的 \\(\\sum F\\)（箱子只受人的推力与摩擦等）。',
        ],
        solution: '\\(120\\,\\mathrm{N}\\)，与人对箱子推力反向。',
      },
      {
        title: '例 2 · 火箭',
        prompt: '简述火箭加速的第三定律解释。',
        steps: [
          '火箭向后喷射气体（对气体施力）。',
          '气体对火箭施以向前的反作用力，使火箭动量增加。',
        ],
        solution: '推进力是排气反作用力，无需“蹬空气”。',
      },
      {
        title: '例 3 · 与平衡对比',
        prompt: '书本静止在桌上：重力与支持力是第三定律力对吗？',
        steps: [
          '不是。重力（地球→书）的反作用力是书→地球的引力。',
          '支持力（桌→书）的反作用力是书→桌的压力。',
          '重力与支持力是作用在同一物体上的平衡力。',
        ],
        solution: '平衡力 ≠ 作用反作用力。',
      },
    ],
    examTips: ['CED Unit 2：清晰区分平衡力与作用反作用', '受力分析图只画“作用在该物体上的力”'],
    related: [
      { subject: 'mech', chapterId: 'mech-u2', code: '2.3', title: '牛顿第一与第二定律', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u2', code: '2.6', title: '万有引力', relation: '应用' },
      { subject: 'mech', chapterId: 'mech-u4', code: '4.1', title: '冲量与动量', relation: '后续' },
    ],
    development: ['观察相互作用', '陈述第三定律', '与平衡对比', '火箭/行走应用'],
    checks: ['为什么作用反作用不能抵消？', '走路时地面摩擦力的反作用力作用在谁上？'],
    summary: '力成对出现：等大、反向、共线、异体。',
  },

  'em/em-u10/10.3': {
    enrichedAt: 'batch1-fix',
    learningObjectives: [
      '能用电容定义式 \\(C=\\dfrac{Q}{V}\\) 与平行板公式计算电容。 · Compute capacitance from the definition and the parallel-plate formula.',
      '能求串联、并联电容器的等效电容，并与电阻的组合规则区分。 · Find the equivalent capacitance of series and parallel combinations and distinguish the rules from those for resistors.',
      '能分析插入电介质时“孤立（\\(Q\\) 不变）”与“接电源（\\(V\\) 不变）”两种情形下 \\(Q\\)、\\(V\\)、\\(U\\) 的变化。 · Analyze how charge, voltage, and stored energy change when a dielectric is inserted, for an isolated capacitor and for one connected to a battery.',
    ],
    essentialKnowledge: [
      '电容由极板几何与电介质决定，与所带电荷量和电压无关。 · Capacitance is set by plate geometry and the dielectric, not by the stored charge or voltage.',
      '平行板电容器 \\(C=\\dfrac{\\kappa\\varepsilon_0 A}{d}\\)，间距远小于极板尺寸时适用。 · A parallel-plate capacitor has the capacitance shown, valid when the separation is much smaller than the plate dimensions.',
      '串联时 \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum\\dfrac{1}{C_i}\\)，并联时 \\(C_{\\mathrm{eq}}=\\sum C_i\\)。 · For series combinations the reciprocals add; for parallel combinations the capacitances add.',
      '储能 \\(U=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}\\)，两种写法在相应条件下等价。 · Stored energy can be written in either form; the two expressions are equivalent under the corresponding conditions.',
      '孤立电容器电荷量不变；接在电源上的电容器电压不变。 · An isolated capacitor keeps its charge fixed; a capacitor connected to a battery keeps its voltage fixed.',
    ],
    definition: '电容器由两片导体极板夹一层电介质构成。平行板电容器的电容为 \\(C=\\dfrac{\\kappa\\varepsilon_0 A}{d}\\)，定义式为 \\(C=\\dfrac{Q}{V}\\)：给定电压下能储存的电荷量由几何与电介质决定。',
    intuition: '电容器是电荷的临时仓库：极板面积越大、间距越小、介质越好，仓库越大。',
    intuitionDetailed: '接上电源时，电源把电子从一个极板搬到另一个极板，极板间建立电场并储存能量；断开电源后电荷被“锁”在极板上，电压随电容改变。',
    formulas: [
      { latex: 'C=\\dfrac{Q}{V}', note: '电容定义式，适用于任何电容器。' },
      { latex: 'C=\\dfrac{\\kappa\\varepsilon_0 A}{d}', note: '平行板电容器（填满电介质）。' },
      { latex: 'U=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}', note: '储存的电场能。' },
    ],
    derivationNotes: [
      { from: '定义式', to: '平行板公式', note: '由 \\(E=\\dfrac{\\sigma}{\\varepsilon}\\)、\\(V=Ed\\) 与 \\(\\sigma=\\dfrac{Q}{A}\\) 得 \\(C=\\dfrac{\\varepsilon A}{d}\\)。' },
    ],
    conditions: ['平行板近似：间距远小于极板尺寸，忽略边缘效应', '电介质填满极板间；\\(\\kappa\\) 为相对介电常数', '\\(Q\\) 取一个极板电荷量的绝对值'],
    keyPoints: ['\\(C\\) 由几何与电介质决定，与 \\(Q\\)、\\(V\\) 无关', '串联 \\(\\dfrac{1}{C_\\mathrm{eq}}=\\sum\\dfrac{1}{C_i}\\)，并联 \\(C_\\mathrm{eq}=\\sum C_i\\)', '插入电介质使 \\(C\\) 增大；孤立电容器 \\(Q\\) 不变，接电源 \\(V\\) 不变'],
    misconceptions: [
      '以为 \\(C\\) 随 \\(Q\\) 或 \\(V\\) 改变',
      '把电容串联/并联公式与电阻混淆',
      '认为插入电介质一定改变 \\(Q\\)（孤立时 \\(Q\\) 不变）',
    ],
    examples: [
      {
        title: '例 1 · 平行板',
        prompt: '\\(A=0.01\\,\\mathrm{m^2}\\)、\\(d=1\\,\\mathrm{mm}\\)、真空，求 \\(C\\)。',
        steps: [
          '\\(C=\\dfrac{\\varepsilon_0 A}{d}=\\dfrac{8.85\\times10^{-12}\\cdot0.01}{10^{-3}}\\)。',
          '\\(C\\approx8.85\\times10^{-11}\\,\\mathrm{F}=88.5\\,\\mathrm{pF}\\)。',
        ],
        solution: '约 \\(88.5\\,\\mathrm{pF}\\)。',
        solutionLatex: 'C\\approx88.5\\,\\mathrm{pF}',
      },
      {
        title: '例 2 · 储能',
        prompt: '\\(C=0.1\\,\\mu\\mathrm{F}\\)，\\(V=100\\,\\mathrm{V}\\)，求 \\(Q\\) 与 \\(U\\)。',
        steps: [
          '\\(Q=CV=10^{-7}\\cdot100=10^{-5}\\,\\mathrm{C}=10\\,\\mu\\mathrm{C}\\)。',
          '\\(U=\\dfrac{1}{2}CV^{2}=\\dfrac{1}{2}\\cdot10^{-7}\\cdot10^{4}=5\\times10^{-4}\\,\\mathrm{J}\\)。',
        ],
        solution: '\\(Q=10\\,\\mu\\mathrm{C}\\)，\\(U=0.5\\,\\mathrm{mJ}\\)。',
      },
      {
        title: '例 3 · 插入介质',
        prompt: '孤立带电电容器插入 \\(\\kappa=2\\) 的介质，\\(Q\\)、\\(C\\)、\\(V\\)、\\(U\\) 如何变？',
        steps: [
          '孤立 → \\(Q\\) 不变。',
          '\\(C\\) 变为 \\(2C\\)。',
          '\\(V=\\dfrac{Q}{C}\\) 变为 \\(\\dfrac{V}{2}\\)。',
          '\\(U=\\dfrac{Q^{2}}{2C}\\) 变为 \\(\\dfrac{U}{2}\\)。',
        ],
        solution: '\\(Q\\) 不变，\\(C\\) 变为 \\(2C\\)，\\(V\\) 与 \\(U\\) 均减半。',
      },
    ],
    examTips: ['CED Unit 10：导体、电容、电介质', '先判断“孤立（\\(Q\\) 不变）”还是“接电源（\\(V\\) 不变）”', '能量变化可用 \\(U=\\dfrac{Q^{2}}{2C}\\) 或 \\(\\dfrac{1}{2}CV^{2}\\) 判断'],
    related: [
      { subject: 'em', chapterId: 'em-u9', code: '9.1', title: '电势能', relation: '先修' },
      { subject: 'em', chapterId: 'em-u10', code: '10.4', title: '电介质', relation: '后续' },
      { subject: 'em', chapterId: 'em-u11', code: '11.8', title: 'RC 电路', relation: '应用' },
    ],
    development: ['电容定义', '平行板公式', '电介质与 \\(\\kappa\\)', '储能与连接'],
    checks: ['\\(C\\) 由哪些因素决定？', '孤立电容器插入电介质后 \\(Q\\)、\\(V\\)、\\(U\\) 如何变？'],
    summary: '电容描述给定电压下的储电荷能力，由极板几何与电介质决定。',
  },

  'em/em-u11/11.1': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能用 \\(I=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}\\) 计算平均电流与瞬时电流。 · Compute average and instantaneous current from the charge flow rate.',
      '能用电荷密度、漂移速度与截面积解释微观电流。 · Explain current microscopically using carrier density, drift speed, and cross-sectional area.',
      '能正确判断约定电流方向与电子运动方向的关系。 · Correctly relate the conventional current direction to the motion of electrons.',
    ],
    essentialKnowledge: [
      '电流是电荷随时间的变化率，单位安培 \\(\\mathrm{A}=\\mathrm{C/s}\\)。 · Current is the time rate of charge flow, measured in amperes.',
      '微观表达式 \\(I=nqv_dA\\)，其中 \\(n\\) 为载流子数密度、\\(v_d\\) 为漂移速度、\\(A\\) 为截面积。 · The microscopic expression contains carrier density, drift speed, and cross-sectional area.',
      '约定正电流方向与正电荷运动方向相同，电子运动方向与之相反。 · Conventional current points in the direction of positive-charge motion, opposite to electron motion.',
      '稳恒电路中串联各处电流相同；漂移速度很慢，但电场建立接近光速。 · In a steady circuit the current is the same in series; drift speeds are very slow, while the electric field is established near light speed.',
      '电流是标量，电路分析中按支路约定方向。 · Current is a scalar; in circuit analysis, assign a direction to each branch.',
    ],
    definition: '电流是电荷的定向流动。平均电流\n\\[\nI_{\\mathrm{avg}}=\\dfrac{\\Delta Q}{\\Delta t},\\qquad I=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}.\n\\]\n单位：安培 \\(\\mathrm{A}=\\mathrm{C/s}\\)。约定正电流方向与正电荷运动方向相同。',
    intuition: '像水流过管道；单位时间流过截面的电荷量就是电流。',
    intuitionDetailed: '微观：\\(I=nqv_d A\\)，其中 \\(n\\) 载流子数密度，\\(v_d\\) 漂移速度，\\(A\\) 截面积。',
    formulas: [
      { latex: 'I=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}', note: '瞬时电流。' },
      { latex: 'I=nqv_d A', note: '微观表达式（正载流子）。' },
    ],
    derivationNotes: [
      { from: '电荷守恒', to: '电流定义', note: '时间变化率。' },
      { from: '漂移模型', to: '微观式', note: '时间 \\(\\mathrm{d}t\\) 内体积 \\(Av_d\\mathrm{d}t\\) 的电荷通过截面。' },
    ],
    conditions: ['稳恒电流时电路中串联各处 \\(I\\) 相同', '电子带负电，其速度与约定电流方向相反'],
    keyPoints: ['电流是标量（有方向约定）', '漂移速度通常极慢，信号以近光速传播的是场'],
    misconceptions: [
      '以为电子跑得很快才有电流',
      '混淆约定电流方向与电子运动方向',
      '把电流当成矢量去分解（电路分析中按支路标方向）',
    ],
    examples: [
      {
        title: '例 1',
        prompt: '2 s 内通过导线截面 6 C 电荷，求平均电流。',
        steps: ['\\(I=\\dfrac{6}{2}=3\\,\\mathrm{A}\\)。'],
        solution: '\\(3\\,\\mathrm{A}\\)。',
        solutionLatex: 'I=3\\,\\mathrm{A}',
      },
      {
        title: '例 2 · 微观',
        prompt: '铜线 \\(n=8.5\\times 10^{28}\\,\\mathrm{m}^{-3}\\)，\\(A=1.0\\times 10^{-6}\\,\\mathrm{m}^{2}\\)，\\(I=1.0\\,\\mathrm{A}\\)。估计 \\(v_d\\)。',
        steps: [
          '\\(v_d=\\dfrac{I}{nqA}=\\dfrac{1}{(8.5\\times 10^{28})(1.6\\times 10^{-19})(1.0\\times 10^{-6})}\\)。',
          '约 \\(7.4\\times 10^{-5}\\,\\mathrm{m/s}\\)（数量级 \\(10^{-4}\\,\\mathrm{m/s}\\)）。',
        ],
        solution: '漂移速度极慢，约 \\(7\\times 10^{-5}\\,\\mathrm{m/s}\\)。',
      },
      {
        title: '例 3 · 电子方向',
        prompt: '金属中电子向左漂移，约定电流方向？',
        steps: ['电子带负电，负电荷向左 ≡ 正电流向右。'],
        solution: '约定电流向右。',
      },
    ],
    examTips: ['CED E&M 电流与电路单元：先掌握 \\(I=\\mathrm{d}Q/\\mathrm{d}t\\) 与微观式', '单位换算：mA、μA'],
    related: [
      { subject: 'em', chapterId: 'em-u8', code: '8.1', title: '电荷与力', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.2', title: '简单电路', relation: '后续' },
      { subject: 'em', chapterId: 'em-u11', code: '11.3', title: '电阻与欧姆定律', relation: '相关' },
    ],
    development: ['宏观定义', '微观漂移', '方向约定', '进入欧姆定律'],
    checks: ['1 mA 等于多少 C/s？', '为何灯几乎“立刻”亮而电子漂移很慢？'],
    summary: '电流是电荷的时间变化率；微观上由漂移速度决定。',
  },

  'bio/bio-u3/3.1': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能解释酶如何降低活化能而不改变 \\(\\Delta G\\) 与平衡。 · Explain how enzymes lower activation energy without changing \\(\\Delta G\\) or the equilibrium position.',
      '能区分竞争性与非竞争性抑制对 \\(K_m\\) 与 \\(V_{\\max}\\) 的影响。 · Distinguish the effects of competitive and noncompetitive inhibition on \\(K_m\\) and \\(V_{\\max}\\).',
      '能设计或解读温度、pH、底物浓度对酶活性影响的实验。 · Design or interpret experiments on how temperature, pH, and substrate concentration affect enzyme activity.',
    ],
    essentialKnowledge: [
      '酶是生物催化剂，绝大多数为蛋白质，少数为 RNA（核酶）。 · Enzymes are biological catalysts; most are proteins and a few are RNA ribozymes.',
      '活性位点以特异性方式结合底物，形成酶–底物复合物；诱导契合使结合更紧密。 · The active site binds substrates specifically to form an enzyme–substrate complex; induced fit tightens the interaction.',
      '酶降低正逆反应的活化能，加快反应速率，但不改变平衡常数。 · Enzymes lower the activation energy of both forward and reverse reactions, speeding the reaction without changing the equilibrium constant.',
      '高温与极端 pH 会破坏非共价相互作用，使酶变性失活；最适条件因酶而异。 · High temperature and extreme pH disrupt noncovalent interactions and denature the enzyme; optimum conditions vary by enzyme.',
      '竞争性抑制增大表观 \\(K_m\\) 而 \\(V_{\\max}\\) 不变；非竞争性抑制降低 \\(V_{\\max}\\)。 · Competitive inhibition raises the apparent \\(K_m\\) without changing \\(V_{\\max}\\); noncompetitive inhibition lowers \\(V_{\\max}\\).',
    ],
    connections: [
      '先修：1.6 酶结构与功能 \\(\\to\\) 活性位点与特异性。 · Prerequisite: enzyme structure and function introduce the active site and specificity.',
      '后续：3.2 环境影响酶；3.5 细胞呼吸中的酶促步骤。 · Follow-up: environmental effects on enzymes and the enzyme-catalyzed steps of cellular respiration.',
      '应用：工业酶、洗涤剂与医学抑制剂的设计。 · Application: industrial enzymes, detergents, and the design of medical inhibitors.',
    ],
    definition: '酶是生物催化剂（多数为蛋白质，少数为核酶），通过降低活化能 \\(E_a\\) 加快反应速率，但不改变 \\(\\Delta G\\) 与平衡点。活性位点与底物特异性结合形成酶–底物复合物。',
    intuition: '酶像精确模具：把底物摆成易反应的取向，降低“翻山”所需能量。',
    intuitionDetailed: '诱导契合：结合可引起构象微调。温度、pH、抑制剂影响活性。',
    formulas: [
      { latex: 'E+S\\rightleftharpoons ES\\rightarrow E+P', note: '简化米氏路径。' },
    ],
    derivationNotes: [
      { from: '过渡态理论', to: '降活化能', note: '稳定过渡态，降低 \\(E_a\\)，加速正逆反应，平衡常数不变。' },
    ],
    conditions: ['适宜温度与 pH', '底物浓度可饱和（\\(V_{\\max}\\)）'],
    keyPoints: ['酶不改 \\(\\Delta G\\)', '具特异性与可调节性', '竞争性抑制 vs 非竞争性抑制'],
    misconceptions: [
      '以为酶提供能量或改变 \\(\\Delta G\\)',
      '认为高温总是更好（变性）',
      '混淆竞争与非竞争抑制剂对 \\(K_m\\)、\\(V_{\\max}\\) 的影响',
    ],
    examples: [
      {
        title: '例 1',
        prompt: '为何酶加速反应却不改平衡？',
        steps: [
          '正逆反应的活化能都被降低。',
          '平衡由 \\(\\Delta G\\) 决定，酶不改反应物与产物的自由能。',
        ],
        solution: '速率变、平衡不变。',
      },
      {
        title: '例 2 · 竞争性抑制',
        prompt: '竞争性抑制如何影响 \\(K_m\\) 与 \\(V_{\\max}\\)？',
        steps: [
          '抑制剂与底物抢活性位点，表观亲和力下降，\\(K_m\\) 增大。',
          '足够底物可挤掉抑制剂，\\(V_{\\max}\\) 不变。',
        ],
        solution: '\\(K_m\\uparrow\\)，\\(V_{\\max}\\) 不变。',
      },
      {
        title: '例 3 · 体温',
        prompt: '人体酶最适温度约为？过高会怎样？',
        steps: [
          '约 \\(37^\\circ\\mathrm{C}\\)。',
          '过高导致蛋白质变性，活性位点构象破坏。',
        ],
        solution: '最适约 37°C；过热变性失活。',
      },
    ],
    examTips: ['AP Bio CED Unit 3：酶与能量；会读反应坐标图（有/无酶）', '实验设计：温度、pH、底物浓度曲线'],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.6', title: '酶结构与功能', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.2', title: '环境影响酶', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.5', title: '细胞呼吸', relation: '应用' },
    ],
    development: ['催化剂概念', '活性位点', '环境因素', '抑制剂'],
    checks: ['酶改变的是 \\(E_a\\) 还是 \\(\\Delta G\\)？', '画出有酶与无酶的反应坐标图'],
    summary: '酶降低活化能以加速反应，不改变热力学平衡。',
  },

  'bio/bio-u5/5.1': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能比较有丝分裂与减数分裂的 DNA 复制次数、分裂次数与染色体数变化。 · Compare mitosis and meiosis in DNA replication, number of divisions, and chromosome number.',
      '能说明交叉互换与独立分配如何产生遗传多样性。 · Explain how crossing over and independent assortment generate genetic diversity.',
      '能追踪减数分裂各阶段的染色体数与 DNA 含量。 · Track chromosome number and DNA content through the stages of meiosis.',
    ],
    essentialKnowledge: [
      '减数分裂经历一次 DNA 复制、两次连续分裂，使二倍体细胞产生单倍体配子。 · Meiosis has one DNA replication followed by two divisions, producing haploid gametes from diploid cells.',
      '减数第一次分裂同源染色体分离；减数第二次分裂姐妹染色单体分离。 · Homologs separate in meiosis I; sister chromatids separate in meiosis II.',
      '前期 I 的交叉互换与中期 I 的独立分配是遗传多样性的两个主要来源。 · Crossing over in prophase I and independent assortment in metaphase I are the two main sources of genetic diversity.',
      '精子发生产生 4 个精细胞；卵发生产生 1 个卵细胞和 3 个退化的极体。 · Spermatogenesis yields four sperm cells; oogenesis yields one ovum and three polar bodies that degenerate.',
    ],
    connections: [
      '先修：4.7 有丝分裂 \\(\\to\\) 姐妹染色单体分离机制。 · Prerequisite: mitosis introduces sister-chromatid separation.',
      '后续：5.2 减数分裂与遗传多样性；5.3 孟德尔遗传。 · Follow-up: meiotic diversity and Mendelian genetics.',
      '应用：非整倍体与出生缺陷的染色体基础。 · Application: the chromosomal basis of aneuploidy and birth defects.',
    ],
    definition: '减数分裂是产生配子的分裂：一次 DNA 复制，两次分裂，结果染色体数减半（二倍体 \\(\\to\\) 单倍体）。减数第一次分裂同源染色体分离；减数第二次分裂类似有丝分裂分离姐妹染色单体。',
    intuition: '有性生殖需要单倍体配子，受精后再恢复二倍体——减数分裂负责“减半”。',
    intuitionDetailed: '前期 I 联会与交叉互换增加遗传多样性；独立分配也产生多样性。',
    formulas: [],
    derivationNotes: [
      { from: '有丝分裂对比', to: '减数分裂', note: '多一次分裂且同源染色体分离，实现减半。' },
    ],
    conditions: ['发生于生殖细胞系', 'DNA 在间期只复制一次'],
    keyPoints: ['精子发生：4 个精细胞；卵发生：1 个卵细胞 + 3 个极体（退化）', '交叉互换与独立分配是多样性来源'],
    misconceptions: [
      '以为减数分裂有两次 DNA 复制',
      '混淆同源染色体分离与姐妹染色单体分离发生的时期',
      '以为有丝分裂也发生交叉互换',
    ],
    examples: [
      {
        title: '例 1',
        prompt: '人体 \\(2n=46\\)。减数分裂后配子染色体数？',
        steps: ['减半得 \\(n=23\\)。'],
        solution: '23 条。',
      },
      {
        title: '例 2',
        prompt: '同源染色体分离发生在？',
        steps: ['减数第一次分裂后期（Anaphase I）。'],
        solution: 'Anaphase I。',
      },
      {
        title: '例 3',
        prompt: '交叉互换的主要意义？',
        steps: ['在非姐妹染色单体间交换片段，重组等位基因组合。'],
        solution: '增加遗传多样性。',
      },
    ],
    examTips: ['CED Unit 5：遗传；会比较有丝/减数表格', '会解释多样性的两个机制'],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.6', title: '有丝分裂', relation: '对比' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.2', title: '减数分裂细节', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.3', title: '孟德尔遗传', relation: '应用' },
    ],
    development: ['二倍体/单倍体', '两次分裂', '互换与独立分配', '与有丝分裂对比'],
    checks: ['DNA 复制几次？分裂几次？', '多样性来自哪些过程？'],
    summary: '减数分裂把染色体数减半并制造遗传多样的配子。',
  },

  'bio/bio-u4/4.6': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能说明 G1/S、G2/M 与纺锤体检查点各自监测什么。 · Explain what the G1/S, G2/M, and spindle checkpoints monitor.',
      '能解释周期蛋白–CDK 复合物如何推进细胞周期。 · Explain how cyclin–CDK complexes drive progression through the cell cycle.',
      '能区分原癌基因与肿瘤抑制基因在癌症发生中的角色。 · Distinguish the roles of proto-oncogenes and tumor-suppressor genes in cancer.',
    ],
    essentialKnowledge: [
      '检查点监测 DNA 完整性、复制完成与纺锤体正确附着，防止错误遗传给子细胞。 · Checkpoints monitor DNA integrity, completion of replication, and correct spindle attachment to prevent errors from passing to daughter cells.',
      '周期蛋白浓度周期性升降，激活 CDK；CDK 磷酸化靶蛋白推动周期进程。 · Cyclin levels rise and fall periodically and activate CDKs, which phosphorylate target proteins to drive the cycle.',
      'p53 等肿瘤抑制基因在 DNA 损伤时阻滞周期、启动修复或触发凋亡。 · Tumor suppressors such as p53 arrest the cycle, start repair, or trigger apoptosis after DNA damage.',
      '原癌基因促进增殖，突变后可能变成癌基因；肿瘤抑制基因通常需两个拷贝失活。 · Proto-oncogenes promote proliferation and can become oncogenes when mutated; tumor suppressors usually require loss of both copies.',
    ],
    connections: [
      '先修：4.5 细胞周期 \\(\\to\\) 各阶段与时长。 · Prerequisite: the phases and timing of the cell cycle.',
      '后续：4.7 有丝分裂 \\(\\to\\) 染色体分离与检查点。 · Follow-up: mitosis and chromosome segregation.',
      '应用：癌症靶向治疗与检查点抑制剂。 · Application: targeted cancer therapy and checkpoint inhibitors.',
    ],
    definition: '细胞周期检查点（尤其 G1、G2、M）确保 DNA 完好、复制完成、纺锤体正确附着后才继续分裂。肿瘤抑制基因（如 p53）与原癌基因失衡可导致失控增殖。',
    intuition: '检查点是细胞分裂的“安检门”；失灵则可能癌变。',
    intuitionDetailed: 'G1：环境与 DNA 损伤；G2：复制完成；M（纺锤体）：着丝粒–微管连接。',
    formulas: [],
    derivationNotes: [
      { from: 'CDK–周期蛋白', to: '检查点调控', note: '周期蛋白浓度起伏驱动 CDK 活性，推进或阻滞周期。' },
    ],
    conditions: ['多细胞生物发育与组织稳态依赖检查点'],
    keyPoints: ['检查点防止受损 DNA 传递', '原癌基因过度激活 / 肿瘤抑制失活 → 癌症风险'],
    misconceptions: [
      '以为所有突变都致癌',
      '混淆原癌基因与肿瘤抑制基因的“油门/刹车”角色',
    ],
    examples: [
      {
        title: '例 1',
        prompt: 'DNA 严重损伤时 p53 的典型作用？',
        steps: ['阻滞 G1，启动修复或凋亡，防止突变传递。'],
        solution: '刹车：阻滞或凋亡。',
      },
      {
        title: '例 2',
        prompt: '纺锤体检查点失败可能导致？',
        steps: ['染色体错误分配 → 非整倍体。'],
        solution: '非整倍体子细胞。',
      },
      {
        title: '例 3',
        prompt: '原癌基因 vs 肿瘤抑制基因？',
        steps: [
          '原癌基因：促增殖（油门）；突变后可能变成癌基因。',
          '肿瘤抑制：抑制增殖或促凋亡（刹车）；需通常两拷贝失活。',
        ],
        solution: '油门 vs 刹车。',
      },
    ],
    examTips: ['CED Unit 4：细胞沟通与周期；会用实验/图解释检查点', '联系癌症但不需临床细节'],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.5', title: '细胞周期', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.7', title: '有丝分裂', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.1', title: 'DNA 与 RNA 结构', relation: '损伤修复联系' },
    ],
    development: ['周期阶段', '检查点', 'CDK', '癌症联系'],
    checks: ['三大检查点名称？', 'p53 属于哪类基因产物？'],
    summary: '检查点守护基因组完整性；调控失灵与癌症相关。',
  },

  'bio/bio-u6/6.2': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能说明 DNA 半保留复制及 Meselson–Stahl 实验证据。 · Explain semiconservative DNA replication and the Meselson–Stahl evidence.',
      '能按 \\(5\\prime\\to3\\prime\\) 方向解释前导链与滞后链的合成差异。 · Explain leading- and lagging-strand synthesis in terms of the \\(5\\prime\\to3\\prime\\) direction.',
      '能列举复制叉中的关键酶并说明其功能。 · List the key enzymes at the replication fork and describe their functions.',
    ],
    essentialKnowledge: [
      '每条旧链作模板合成互补新链，产生两个各含一条旧链的 DNA 分子。 · Each old strand serves as a template for a complementary new strand, producing two DNA molecules that each retain one old strand.',
      '解旋酶解开双链，单链结合蛋白稳定单链，引物酶合成 RNA 引物。 · Helicase unwinds the duplex, single-strand binding proteins stabilize the separated strands, and primase synthesizes RNA primers.',
      'DNA 聚合酶只能沿 \\(5\\prime\\to3\\prime\\) 延伸，因此滞后链分段形成冈崎片段。 · DNA polymerase extends only in the \\(5\\prime\\to3\\prime\\) direction, so the lagging strand is made in Okazaki fragments.',
      'DNA 连接酶封闭磷酸二酯键缺口；校对活性降低复制错误率。 · DNA ligase seals the phosphodiester nicks, and proofreading lowers the replication error rate.',
    ],
    connections: [
      '先修：6.1 DNA 与 RNA 结构 \\(\\to\\) 碱基配对与反向平行双链。 · Prerequisite: DNA/RNA structure, base pairing, and antiparallel strands.',
      '后续：6.3 转录与 RNA 加工。 · Follow-up: transcription and RNA processing.',
      '应用：PCR、DNA 测序与分子克隆。 · Application: PCR, DNA sequencing, and molecular cloning.',
    ],
    definition: 'DNA 复制为半保留复制：每条链作模板，合成互补新链。关键酶：解旋酶、单链结合蛋白、引物酶、DNA 聚合酶、连接酶。复制方向 \\(5\'\\to 3\'\\)，导致前导链连续、滞后链冈崎片段。',
    intuition: '拉链拉开，两边各配上新链；因为酶只能单向合成，一边顺畅一边分段。',
    intuitionDetailed: '碱基配对 A–T、G–C 保证遗传信息精确传递；校对降低突变率。',
    formulas: [],
    derivationNotes: [
      { from: 'Watson–Crick 配对', to: '半保留', note: 'Meselson–Stahl 实验证实。' },
    ],
    conditions: ['需要引物（RNA）', '能量来自三磷酸核苷'],
    keyPoints: ['半保留', '\\(5\'\\to 3\'\\) 合成', '前导/滞后链差异', '复制叉'],
    misconceptions: [
      '以为全保留或弥散复制',
      '忘记引物酶',
      '写错合成方向',
    ],
    examples: [
      {
        title: '例 1',
        prompt: 'Meselson–Stahl 如何支持半保留？',
        steps: [
          '15N 标记后转到 14N：一代后全为中间密度；二代出现中间+轻带。',
          '符合每子代分子一条旧链一条新链。',
        ],
        solution: '一代一条带、二代两条带 → 半保留。',
      },
      {
        title: '例 2',
        prompt: '为何滞后链形成冈崎片段？',
        steps: [
          '双链反向平行，复制叉单向打开。',
          '聚合酶只能 \\(5\'\\to 3\'\\)，故滞后链分段合成再连接。',
        ],
        solution: '方向限制 → 冈崎片段。',
      },
      {
        title: '例 3',
        prompt: 'DNA 连接酶的作用？',
        steps: ['连接冈崎片段之间的磷酸二酯键缺口。'],
        solution: '密封缺口，形成连续链。',
      },
    ],
    examTips: ['CED Unit 6：基因表达；复制机制与实验证据常考', '会标注复制叉图中的酶与方向'],
    related: [
      { subject: 'bio', chapterId: 'bio-u6', code: '6.1', title: 'DNA 与 RNA 结构', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.3', title: '转录', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.1', title: '减数分裂', relation: '遗传背景' },
    ],
    development: ['半保留证据', '酶与步骤', '前导/滞后', '校对与保真'],
    checks: ['复制方向？', '列举四种关键酶的功能'],
    summary: 'DNA 半保留复制：模板配对、\\(5\'\\to 3\'\\) 合成、滞后链分段。',
  },

  'bio/bio-u1/1.1': {
    enrichedAt: 'batch1',
    learningObjectives: [
      '能用极性与氢键解释水的内聚、黏附、高比热、高汽化热与溶剂性。 · Use polarity and hydrogen bonding to explain cohesion, adhesion, high specific heat, high heat of vaporization, and solvent behavior.',
      '能解释冰的密度小于液态水对水生生态的意义。 · Explain the ecological significance of ice being less dense than liquid water.',
      '能把水的性质与细胞、生理或生态现象联系起来。 · Connect water\'s properties to cellular, physiological, or ecological phenomena.',
    ],
    essentialKnowledge: [
      'O–H 键的极性使水分子带部分电荷，分子间形成氢键网络。 · Polar O–H bonds give water partial charges and a hydrogen-bond network between molecules.',
      '氢键网络赋予水高比热、高汽化热、表面张力以及内聚与黏附。 · The hydrogen-bond network gives water high specific heat, high heat of vaporization, surface tension, cohesion, and adhesion.',
      '冰的氢键晶格较空旷，密度小于液态水，因此冰浮在水面并保护水下生命。 · The open hydrogen-bond lattice of ice is less dense than liquid water, so ice floats and insulates life below.',
      '水是极性溶剂，能水合离子与极性分子，并参与水解与脱水缩合。 · Water is a polar solvent that hydrates ions and polar molecules and participates in hydrolysis and dehydration synthesis.',
    ],
    connections: [
      '先修：元素与大分子 \\(\\to\\) 共价键与电负性。 · Prerequisite: elements and macromolecules, covalent bonds, and electronegativity.',
      '后续：1.3 生物大分子导论；2.7 渗透与水势。 · Follow-up: biological macromolecules and osmosis/water potential.',
      '应用：蒸腾作用、体温调节与气候缓冲。 · Application: transpiration, thermoregulation, and climate buffering.',
    ],
    definition: '水的极性与氢键赋予其高比热、高汽化热、内聚/黏附、表面张力及作为溶剂的能力，使水成为生命的介质。',
    intuition: '水分子像小磁铁（正负端），彼此拉扯形成氢键网络。',
    intuitionDetailed: '比热高 → 体温/气候稳定；冰密度小于液态水 → 水体表面结冰保护水下生命。',
    formulas: [],
    derivationNotes: [
      { from: '极性共价键', to: '氢键', note: 'O 电负性高，H 带部分正电，分子间形成氢键。' },
    ],
    conditions: ['氢键弱于共价键但数量庞大'],
    keyPoints: ['极性与氢键', '四大特性：比热、汽化热、内聚黏附、溶剂', '冰浮于水'],
    misconceptions: [
      '以为氢键是水分子内的键（实为分子间）',
      '忽视溶剂对离子/极性分子的水合',
    ],
    examples: [
      {
        title: '例 1',
        prompt: '沿海气候比内陆温和的水相关解释？',
        steps: ['水比热高，吸收/释放大量热而温度变化小。'],
        solution: '高比热缓冲气温。',
      },
      {
        title: '例 2',
        prompt: '为何冰浮在水面？',
        steps: ['固态氢键形成较空旷晶格，密度小于液态水。'],
        solution: '晶格密度低 → 冰浮。',
      },
      {
        title: '例 3',
        prompt: '植物导管中水柱上升与哪些性质有关？',
        steps: ['内聚（水–水）与黏附（水–细胞壁）及蒸腾拉力。'],
        solution: '内聚–黏附–蒸腾连续体。',
      },
    ],
    examTips: ['CED Unit 1：化学与水；会用氢键解释性质', 'FRQ 常要求“结构→性质→功能”链条'],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.2', title: '元素与大分子', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.3', title: '生物大分子导论', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.7', title: '渗透与水势', relation: '应用' },
    ],
    development: ['极性', '氢键', '宏观性质', '生态/生理意义'],
    checks: ['氢键是分子内还是分子间？', '列出水的三项关键性质及意义'],
    summary: '水的极性与氢键支撑生命所需的物理化学性质。',
  },
};

