export const UNIT = {
  "id": "calc-u8",
  "code": "8",
  "titleZh": "积分的应用",
  "titleEn": "Applications of Integration",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "8.1": {
    "id": "math/calc-u8/8.1",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.1",
    "titleZh": "积分求平均",
    "titleEn": "Finding the Average Value of a Function on an Interval",
    "layer": "ap",
    "summary": "积分求平均：函数在区间上的平均高度等于同面积矩形的高度，连续函数必在某点取到该平均高度。 · Average value: the average height of a function on an interval is the height of the equal-area rectangle, and a continuous function attains that height somewhere on the interval.",
    "learningObjectives": [
      "能写出连续函数在区间上的平均值公式，并解释积分、区间长度与平均高度三者的关系。 · Write the average-value formula for a continuous function on an interval and explain how the integral, the interval length, and the average height are related.",
      "能用同面积矩形解释平均值，并从图像估计平均高度。 · Interpret the average value as the height of an equal-area rectangle and estimate it from a graph.",
      "能计算多项式、三角函数与分段连续函数在给定区间上的平均值。 · Compute average values of polynomial, trigonometric, and piecewise-continuous functions on a given interval.",
      "能使用积分中值定理找出使 \\(f(c)=f_{\\mathrm{avg}}\\) 的点 \\(c\\)，并说明存在性条件。 · Use the Mean Value Theorem for Integrals to find a point \\(c\\) with \\(f(c)=f_{\\mathrm{avg}}\\) and state the existence condition.",
      "能区分函数在区间上的平均值与函数自身的平均变化率，并说明两者的单位差异。 · Distinguish the average value of a function on an interval from the function's average rate of change, including the difference in units.",
      "能在温度、速度、浓度等应用情境中解释平均值的实际含义并完成计算。 · Interpret average value in applied contexts such as temperature, velocity, and concentration, and carry out the computation."
    ],
    "essentialKnowledge": [
      "连续函数 \\(f\\) 在区间 \\([a,b]\\) 上的平均值定义为 \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)。 · For a continuous function \\(f\\) on \\([a,b]\\), the average value is defined by \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\).",
      "同面积矩形：\\(f_{\\mathrm{avg}}(b-a)=\\int_a^b f(x)\\,\\mathrm{d}x\\)，即以 \\(f_{\\mathrm{avg}}\\) 为高、以 \\(b-a\\) 为宽的矩形与曲线下的有向面积相等。 · Equal-area rectangle: \\(f_{\\mathrm{avg}}(b-a)=\\int_a^b f(x)\\,\\mathrm{d}x\\), so the rectangle of height \\(f_{\\mathrm{avg}}\\) and width \\(b-a\\) has the same signed area as the region under the curve.",
      "积分中值定理：若 \\(f\\) 在 \\([a,b]\\) 上连续，则存在 \\(c\\in(a,b)\\) 使 \\(f(c)=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)。 · Mean Value Theorem for Integrals: if \\(f\\) is continuous on \\([a,b]\\), then some \\(c\\in(a,b)\\) satisfies \\(f(c)=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\).",
      "平均值必介于函数在区间上的最小值与最大值之间：\\(m\\le f_{\\mathrm{avg}}\\le M\\)；等号只在函数为常数时成立。 · The average value lies between the minimum and maximum values on the interval: \\(m\\le f_{\\mathrm{avg}}\\le M\\); equality occurs only for a constant function.",
      "常函数 \\(f(x)=k\\) 的平均值就是 \\(k\\)；线性函数 \\(f(x)=mx+b\\) 在 \\([a,b]\\) 上的平均值等于中点函数值 \\(f\\!\\left(\\dfrac{a+b}{2}\\right)\\)。 · A constant function \\(f(x)=k\\) has average value \\(k\\); a linear function \\(f(x)=mx+b\\) has average value equal to its midpoint value \\(f\\!\\left(\\dfrac{a+b}{2}\\right)\\) on \\([a,b]\\).",
      "平均值一般不等于中点函数值：例如 \\(f(x)=x^2\\) 在 \\([0,3]\\) 上 \\(f_{\\mathrm{avg}}=3\\)，而 \\(f(1.5)=2.25\\)。 · The average value is generally not the midpoint value: for \\(f(x)=x^2\\) on \\([0,3]\\), \\(f_{\\mathrm{avg}}=3\\) while \\(f(1.5)=2.25\\).",
      "函数 \\(f\\) 的平均值与 \\(f\\) 的平均变化率 \\(\\dfrac{f(b)-f(a)}{b-a}\\) 是两个不同的量；前者单位为 \\(f\\) 的单位，后者单位为 \\(f\\) 的单位除以 \\(x\\) 的单位。 · The average value of \\(f\\) and the average rate of change \\(\\dfrac{f(b)-f(a)}{b-a}\\) are different quantities; the former has units of \\(f\\), while the latter has units of \\(f\\) per unit of \\(x\\).",
      "若 \\(F\\) 是 \\(f\\) 的原函数，则 \\(f\\) 在 \\([a,b]\\) 上的平均值等于 \\(F\\) 的平均变化率：\\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x=\\dfrac{F(b)-F(a)}{b-a}\\)。 · If \\(F\\) is an antiderivative of \\(f\\), then the average value of \\(f\\) on \\([a,b]\\) equals the average rate of change of \\(F\\): \\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x=\\dfrac{F(b)-F(a)}{b-a}\\).",
      "相邻区间的平均值按区间长度加权合并：\\(f_{\\mathrm{avg}}^{[a,c]}=\\dfrac{(b-a)f_{\\mathrm{avg}}^{[a,b]}+(c-b)f_{\\mathrm{avg}}^{[b,c]}}{c-a}\\)。 · Averages over adjacent intervals combine by length weighting: \\(f_{\\mathrm{avg}}^{[a,c]}=\\dfrac{(b-a)f_{\\mathrm{avg}}^{[a,b]}+(c-b)f_{\\mathrm{avg}}^{[b,c]}}{c-a}\\).",
      "当 \\(f\\ge0\\) 时，平均值等于区域面积除以区间长度；当 \\(f\\) 变号时，定积分给出有向面积，平均值可能小于所有函数值甚至为负。 · When \\(f\\ge0\\), the average value equals area divided by interval length; when \\(f\\) changes sign, the integral gives signed area, so the average can be smaller than every function value, or negative.",
      "平均速率不是速度函数的平均值：平均速率等于总路程除以时间，即 \\(\\dfrac{1}{b-a}\\int_a^b |v(t)|\\,\\mathrm{d}t\\)；而速度的平均值是 \\(\\dfrac{1}{b-a}\\int_a^b v(t)\\,\\mathrm{d}t\\)，等于位移除以时间。 · Average speed is not the average value of the velocity function: average speed is total distance divided by time, \\(\\dfrac{1}{b-a}\\int_a^b |v(t)|\\,\\mathrm{d}t\\), while average velocity is \\(\\dfrac{1}{b-a}\\int_a^b v(t)\\,\\mathrm{d}t\\), displacement divided by time."
    ],
    "definition": "函数 \\(f\\) 在区间 \\([a,b]\\) 上的平均值是把区间上所有函数值按位置等权平均的结果，定义为 \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)。几何上，它是以 \\(b-a\\) 为宽、与曲线下区域同面积的矩形高度。若 \\(f\\) 连续，积分中值定理保证区间内至少存在一点 \\(c\\) 使 \\(f(c)=f_{\\mathrm{avg}}\\)；但 \\(c\\) 不一定是中点，也不一定唯一。 · The average value of a function \\(f\\) on an interval \\([a,b]\\) is the equal-weight average of all its values on the interval, defined by \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\). Geometrically, it is the height of a rectangle of width \\(b-a\\) whose area equals the area under the curve. If \\(f\\) is continuous, the Mean Value Theorem for Integrals guarantees at least one point \\(c\\) in the interval with \\(f(c)=f_{\\mathrm{avg}}\\); that point need not be the midpoint and need not be unique.",
    "intuition": "把曲线下的区域想成液体，倒进一个宽为 \\(b-a\\) 的长方体容器，液面高度就是平均值；高低起伏被“抹平”成一个等高矩形。 · Imagine pouring the region under the curve into a rectangular tank of width \\(b-a\\); the liquid level is the average value. The peaks and valleys are smoothed into one constant height.",
    "formulas": [
      {
        "latex": "f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x",
        "note": "函数在区间上的平均值。 · Average value of a function on an interval."
      },
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=f_{\\mathrm{avg}}(b-a)",
        "note": "同面积矩形：总面积等于平均高度乘区间长度。 · Equal-area rectangle: total signed area equals average height times interval length."
      },
      {
        "latex": "f(c)=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x",
        "note": "积分中值定理：连续函数必在某点取到平均值。 · Mean Value Theorem for Integrals: a continuous function attains its average value somewhere."
      },
      {
        "latex": "\\dfrac{f(b)-f(a)}{b-a}",
        "note": "函数 \\(f\\) 自身的平均变化率，不要与 \\(f\\) 的平均值混淆。 · The average rate of change of \\(f\\) itself, not to be confused with the average value of \\(f\\)."
      },
      {
        "latex": "f_{\\mathrm{avg}}^{[a,c]}=\\dfrac{(b-a)f_{\\mathrm{avg}}^{[a,b]}+(c-b)f_{\\mathrm{avg}}^{[b,c]}}{c-a}",
        "note": "相邻区间的平均值按区间长度加权合并。 · Averages over adjacent intervals combine with length weights."
      },
      {
        "latex": "\\text{average speed}=\\dfrac{1}{b-a}\\int_a^b |v(t)|\\,\\mathrm{d}t",
        "note": "平均速率用速度的绝对值；速度的平均值用 \\(v(t)\\) 本身。 · Average speed uses \\(|v(t)|\\); average velocity uses \\(v(t)\\) itself."
      }
    ],
    "derivationNotes": [
      {
        "from": "分割取样 · Partition and sample",
        "to": "算术平均 · Arithmetic mean",
        "note": "把 \\([a,b]\\) 等分成 \\(n\\) 份，取样本值 \\(f(x_i^*)\\)，平均值为 \\(\\dfrac{1}{n}\\sum_{i=1}^{n}f(x_i^*)\\)。 · Divide \\([a,b]\\) into \\(n\\) equal parts and sample \\(f(x_i^*)\\); the mean is \\(\\dfrac{1}{n}\\sum_{i=1}^{n}f(x_i^*)\\)."
      },
      {
        "from": "算术平均 · Arithmetic mean",
        "to": "黎曼和 · Riemann sum",
        "note": "因为 \\(\\dfrac{1}{n}=\\dfrac{\\Delta x}{b-a}\\)，所以平均值等于 \\(\\dfrac{1}{b-a}\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\)。 · Since \\(\\dfrac{1}{n}=\\dfrac{\\Delta x}{b-a}\\), the mean equals \\(\\dfrac{1}{b-a}\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\)."
      },
      {
        "from": "黎曼和 · Riemann sum",
        "to": "定积分 · Definite integral",
        "note": "令 \\(n\\to\\infty\\) 得 \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)。 · Let \\(n\\to\\infty\\) to obtain \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)."
      },
      {
        "from": "同面积矩形 · Equal-area rectangle",
        "to": "平均高度 · Average height",
        "note": "矩形面积 \\(f_{\\mathrm{avg}}(b-a)\\) 等于积分值，因此 \\(f_{\\mathrm{avg}}\\) 就是平均高度。 · The rectangle area \\(f_{\\mathrm{avg}}(b-a)\\) equals the integral, so \\(f_{\\mathrm{avg}}\\) is the average height."
      },
      {
        "from": "连续性与最值 · Continuity and extreme values",
        "to": "积分中值定理 · Mean Value Theorem for Integrals",
        "note": "\\(m\\le f_{\\mathrm{avg}}\\le M\\)，由介值定理存在 \\(c\\) 使 \\(f(c)=f_{\\mathrm{avg}}\\)。 · Since \\(m\\le f_{\\mathrm{avg}}\\le M\\), the Intermediate Value Theorem gives \\(c\\) with \\(f(c)=f_{\\mathrm{avg}}\\)."
      },
      {
        "from": "微积分基本定理 · Fundamental Theorem of Calculus",
        "to": "与平均变化率的关系 · Relation to average rate of change",
        "note": "\\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x=\\dfrac{F(b)-F(a)}{b-a}\\)，即 \\(f\\) 的平均值是原函数 \\(F\\) 的平均变化率。 · \\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x=\\dfrac{F(b)-F(a)}{b-a}\\), so the average value of \\(f\\) is the average rate of change of an antiderivative \\(F\\)."
      }
    ],
    "conditions": [
      "\\(f\\) 在 \\([a,b]\\) 上连续（积分中值定理的存在性需要连续；只求平均值时，可积即可）。 · \\(f\\) is continuous on \\([a,b]\\) (continuity is needed for the Mean Value Theorem for Integrals; integrability suffices for the average itself).",
      "区间长度 \\(b-a>0\\)；分母是区间长度，不是样本个数或 \\(b+a\\)。 · The interval length satisfies \\(b-a>0\\); the denominator is the interval length, not the number of samples or \\(b+a\\).",
      "平均值与函数同单位；不要把单位写成“每单位 \\(x\\)”。 · The average value has the same units as \\(f\\); do not write units of “per unit \\(x\\)”.",
      "定积分给出有向面积；\\(f\\) 变号时必须保留负号。 · The definite integral gives signed area; keep negative signs when \\(f\\) changes sign.",
      "积分中值定理只保证存在性，不保证唯一性，也不保证 \\(c\\) 是中点。 · The Mean Value Theorem for Integrals guarantees existence, not uniqueness, and does not place \\(c\\) at the midpoint.",
      "分段函数要在各段上分别积分，再除以整个区间长度。 · For a piecewise function, integrate over each piece and then divide by the full interval length.",
      "求平均速率时必须对 \\(|v(t)|\\) 积分；求速度的平均值才对 \\(v(t)\\) 积分。 · For average speed integrate \\(|v(t)|\\), while average velocity integrates \\(v(t)\\)."
    ],
    "keyPoints": [
      "先算定积分，再除以区间长度 \\(b-a\\)；顺序不能反。 · First evaluate the definite integral, then divide by the interval length \\(b-a\\); do not reverse the order.",
      "平均值的几何意义是同面积矩形的高度，可用于图像估算与合理性检查。 · The geometric meaning is the height of the equal-area rectangle, useful for graphical estimates and sanity checks.",
      "连续函数必在区间内取到平均值，这是积分中值定理的内容。 · A continuous function must attain its average value somewhere in the interval; this is the Mean Value Theorem for Integrals.",
      "平均值一般不等于中点函数值；线性函数是例外。 · The average value is generally not the midpoint value; linear functions are the exception.",
      "平均值与平均变化率不同：前者是函数值的高度，后者是函数值的变化速度。 · Average value and average rate of change differ: one is a height of function values, the other is how fast those values change.",
      "平均值必在区间最小值与最大值之间，可用 \\(m\\le f_{\\mathrm{avg}}\\le M\\) 检查答案。 · The average lies between the interval minimum and maximum, so check \\(m\\le f_{\\mathrm{avg}}\\le M\\).",
      "有向面积意味着平均值可能为负；不要对负值取绝对值。 · Signed area means the average can be negative; do not take absolute values of negative contributions.",
      "答案保留精确形式（含 \\(\\pi\\) 或根式）并按题目要求给出近似值。 · Keep exact forms (with \\(\\pi\\) or radicals) and give a decimal approximation when requested."
    ],
    "misconceptions": [
      "忘记除以区间长度 \\(b-a\\)，把定积分直接当作平均值。 · Forgetting to divide by the interval length \\(b-a\\) and treating the integral as the average.",
      "把中点函数值 \\(f\\!\\left(\\dfrac{a+b}{2}\\right)\\) 当作平均值；只有线性函数才总成立。 · Treating the midpoint value \\(f\\!\\left(\\dfrac{a+b}{2}\\right)\\) as the average; this holds for all linear functions only.",
      "把 \\(f\\) 的平均值与 \\(f\\) 的平均变化率 \\(\\dfrac{f(b)-f(a)}{b-a}\\) 混为一谈。 · Confusing the average value of \\(f\\) with its average rate of change \\(\\dfrac{f(b)-f(a)}{b-a}\\).",
      "把平均值当作总积累量；总积累量是 \\(\\int_a^b f(x)\\,\\mathrm{d}x\\)，平均值还要除以区间长度。 · Treating the average as the total accumulation; the total is \\(\\int_a^b f(x)\\,\\mathrm{d}x\\), and the average divides it by the interval length.",
      "用 \\(f(b)-f(a)\\) 代替定积分计算平均值。 · Using \\(f(b)-f(a)\\) instead of the definite integral.",
      "忽略函数变号造成的负面积，把有向面积当成几何面积。 · Ignoring sign changes and treating signed area as geometric area.",
      "认为积分中值定理给出的 \\(c\\) 一定是中点或唯一。 · Assuming the point \\(c\\) from the Mean Value Theorem for Integrals is the midpoint or unique.",
      "对不连续函数也断言一定存在 \\(c\\) 使 \\(f(c)=f_{\\mathrm{avg}}\\)；阶梯函数可能取不到平均值。 · Claiming \\(f(c)=f_{\\mathrm{avg}}\\) always for discontinuous functions; a step function may never attain its average."
    ],
    "examples": [
      {
        "title": "例 1 · 多项式 · Polynomial",
        "prompt": "求 \\(f(x)=x^2\\) 在 \\([0,3]\\) 上的平均值，并求区间内使 \\(f(c)=f_{\\mathrm{avg}}\\) 的 \\(c\\)。 · Find the average value of \\(f(x)=x^2\\) on \\([0,3]\\), and find \\(c\\) in the interval with \\(f(c)=f_{\\mathrm{avg}}\\).",
        "steps": [
          "写出公式：\\(f_{\\mathrm{avg}}=\\dfrac{1}{3-0}\\int_0^3 x^2\\,\\mathrm{d}x\\)。 · Write the formula: \\(f_{\\mathrm{avg}}=\\dfrac{1}{3-0}\\int_0^3 x^2\\,\\mathrm{d}x\\).",
          "计算积分：\\(\\int_0^3 x^2\\,\\mathrm{d}x=\\left[\\dfrac{x^3}{3}\\right]_0^3=9\\)，所以 \\(f_{\\mathrm{avg}}=\\dfrac{9}{3}=3\\)。 · Evaluate: \\(\\int_0^3 x^2\\,\\mathrm{d}x=9\\), so \\(f_{\\mathrm{avg}}=\\dfrac{9}{3}=3\\).",
          "解 \\(c^2=3\\) 得 \\(c=\\sqrt3\\approx1.732\\)，在 \\((0,3)\\) 内。 · Solve \\(c^2=3\\) to get \\(c=\\sqrt3\\approx1.732\\), which lies in \\((0,3)\\).",
          "检查：\\(0\\le3\\le9\\)，平均值在最小值和最大值之间。 · Check: \\(0\\le3\\le9\\), so the average lies between the minimum and maximum."
        ],
        "solution": "\\(f_{\\mathrm{avg}}=3\\)，且 \\(c=\\sqrt3\\approx1.732\\)。 · \\(f_{\\mathrm{avg}}=3\\), and \\(c=\\sqrt3\\approx1.732\\).",
        "solutionLatex": "f_{\\mathrm{avg}}=\\dfrac{1}{3}\\int_0^3 x^2\\,\\mathrm{d}x=3,\\qquad c=\\sqrt3"
      },
      {
        "title": "例 2 · 三角 · Trigonometric",
        "prompt": "求 \\(f(x)=\\sin x\\) 在 \\([0,\\pi]\\) 上的平均值，并求出所有使 \\(\\sin c=f_{\\mathrm{avg}}\\) 的 \\(c\\in[0,\\pi]\\)。 · Find the average value of \\(f(x)=\\sin x\\) on \\([0,\\pi]\\) and all \\(c\\in[0,\\pi]\\) with \\(\\sin c=f_{\\mathrm{avg}}\\).",
        "steps": [
          "\\(f_{\\mathrm{avg}}=\\dfrac{1}{\\pi-0}\\int_0^{\\pi}\\sin x\\,\\mathrm{d}x\\)。 · Set up \\(f_{\\mathrm{avg}}=\\dfrac{1}{\\pi}\\int_0^{\\pi}\\sin x\\,\\mathrm{d}x\\).",
          "\\(\\int_0^{\\pi}\\sin x\\,\\mathrm{d}x=[-\\cos x]_0^{\\pi}=1-(-1)=2\\)，故 \\(f_{\\mathrm{avg}}=\\dfrac{2}{\\pi}\\approx0.637\\)。 · \\(\\int_0^{\\pi}\\sin x\\,\\mathrm{d}x=2\\), so \\(f_{\\mathrm{avg}}=\\dfrac{2}{\\pi}\\approx0.637\\).",
          "解 \\(\\sin c=\\dfrac{2}{\\pi}\\)：\\(c_1=\\arcsin\\!\\left(\\dfrac{2}{\\pi}\\right)\\approx0.690\\)，由对称性 \\(c_2=\\pi-c_1\\approx2.452\\)。 · Solve \\(\\sin c=\\dfrac{2}{\\pi}\\): \\(c_1\\approx0.690\\) and, by symmetry, \\(c_2=\\pi-c_1\\approx2.452\\).",
          "两个点都在 \\((0,\\pi)\\) 内，说明积分中值定理的点可以不唯一。 · Both points lie in \\((0,\\pi)\\), showing that the point from the Mean Value Theorem for Integrals need not be unique."
        ],
        "solution": "\\(f_{\\mathrm{avg}}=\\dfrac{2}{\\pi}\\approx0.637\\)；\\(c\\approx0.690\\) 或 \\(c\\approx2.452\\)。 · \\(f_{\\mathrm{avg}}=\\dfrac{2}{\\pi}\\approx0.637\\); \\(c\\approx0.690\\) or \\(c\\approx2.452\\).",
        "solutionLatex": "f_{\\mathrm{avg}}=\\dfrac{1}{\\pi}\\int_0^{\\pi}\\sin x\\,\\mathrm{d}x=\\dfrac{2}{\\pi}\\approx0.637"
      },
      {
        "title": "例 3 · 温度情境 · Temperature Context",
        "prompt": "某地白天气温模型为 \\(T(t)=18+8\\sin\\!\\left(\\dfrac{\\pi t}{12}\\right)\\) °C，\\(0\\le t\\le12\\) 小时。求白天平均气温，并解释为什么它不等于 \\(T(6)\\)。 · A daytime temperature model is \\(T(t)=18+8\\sin\\!\\left(\\dfrac{\\pi t}{12}\\right)\\) °C for \\(0\\le t\\le12\\) hours. Find the average temperature and explain why it differs from \\(T(6)\\).",
        "steps": [
          "\\(T_{\\mathrm{avg}}=\\dfrac{1}{12}\\int_0^{12}\\left[18+8\\sin\\!\\left(\\dfrac{\\pi t}{12}\\right)\\right]\\mathrm{d}t\\)。 · Set up \\(T_{\\mathrm{avg}}=\\dfrac{1}{12}\\int_0^{12}\\left[18+8\\sin\\!\\left(\\dfrac{\\pi t}{12}\\right)\\right]\\mathrm{d}t\\).",
          "\\(\\int_0^{12}18\\,\\mathrm{d}t=216\\)，且 \\(\\int_0^{12}8\\sin\\!\\left(\\dfrac{\\pi t}{12}\\right)\\mathrm{d}t=\\dfrac{192}{\\pi}\\)。 · The constant part contributes \\(216\\), and the sine part contributes \\(\\dfrac{192}{\\pi}\\).",
          "\\(T_{\\mathrm{avg}}=18+\\dfrac{1}{12}\\cdot\\dfrac{192}{\\pi}=18+\\dfrac{16}{\\pi}\\approx23.09\\) °C。 · Thus \\(T_{\\mathrm{avg}}=18+\\dfrac{16}{\\pi}\\approx23.09\\) °C.",
          "\\(T(6)=18+8\\sin\\!\\left(\\dfrac{\\pi}{2}\\right)=26\\) °C。最高温出现在中点，但平均温度不是最高温；正弦曲线在上半段的“高低分布”并不关于中点对称。 · \\(T(6)=18+8=26\\) °C. The maximum occurs at the midpoint, but the average is not the maximum because the sine curve is not symmetric about the midpoint on this half-period."
        ],
        "solution": "平均气温为 \\(18+\\dfrac{16}{\\pi}\\approx23.09\\) °C，明显低于最高温 \\(26\\) °C。 · The average temperature is \\(18+\\dfrac{16}{\\pi}\\approx23.09\\) °C, clearly below the maximum \\(26\\) °C.",
        "solutionLatex": "T_{\\mathrm{avg}}=18+\\dfrac{16}{\\pi}\\approx23.09"
      },
      {
        "title": "例 4 · 三个量辨析 · Three Quantities Compared",
        "prompt": "对 \\(f(x)=x^2\\) 在 \\([1,3]\\) 上，分别求：函数平均值、区间中点函数值、函数平均变化率。 · For \\(f(x)=x^2\\) on \\([1,3]\\), find the average value, the midpoint value, and the average rate of change.",
        "steps": [
          "平均值：\\(f_{\\mathrm{avg}}=\\dfrac{1}{3-1}\\int_1^3 x^2\\,\\mathrm{d}x=\\dfrac{1}{2}\\cdot\\dfrac{26}{3}=\\dfrac{13}{3}\\approx4.333\\)。 · Average value: \\(f_{\\mathrm{avg}}=\\dfrac{1}{2}\\int_1^3 x^2\\,\\mathrm{d}x=\\dfrac{13}{3}\\approx4.333\\).",
          "中点函数值：\\(f(2)=4\\)。 · Midpoint value: \\(f(2)=4\\).",
          "平均变化率：\\(\\dfrac{f(3)-f(1)}{3-1}=\\dfrac{9-1}{2}=4\\)。 · Average rate of change: \\(\\dfrac{f(3)-f(1)}{3-1}=\\dfrac{9-1}{2}=4\\).",
          "三者数值接近但含义不同：\\(\\dfrac{13}{3}\\ne4\\)，且平均值的单位是函数值单位，平均变化率的单位是函数值单位每单位 \\(x\\)。 · The three numbers are close but distinct: \\(\\dfrac{13}{3}\\ne4\\), and the average value has units of \\(f\\), while the average rate of change has units of \\(f\\) per unit \\(x\\).",
          "检验：\\(1\\le\\dfrac{13}{3}\\le9\\)，且解 \\(c^2=\\dfrac{13}{3}\\) 得 \\(c=\\sqrt{\\dfrac{13}{3}}\\approx2.08\\in(1,3)\\)。 · Check: \\(1\\le\\dfrac{13}{3}\\le9\\), and \\(c=\\sqrt{\\dfrac{13}{3}}\\approx2.08\\in(1,3)\\)."
        ],
        "solution": "平均值 \\(\\dfrac{13}{3}\\approx4.333\\)，中点值 \\(4\\)，平均变化率 \\(4\\)；三者不可混用。 · Average value \\(\\dfrac{13}{3}\\approx4.333\\), midpoint value \\(4\\), average rate of change \\(4\\); they are not interchangeable.",
        "solutionLatex": "f_{\\mathrm{avg}}=\\dfrac{13}{3}\\approx4.333,\\qquad f(2)=4,\\qquad \\dfrac{f(3)-f(1)}{3-1}=4"
      },
      {
        "title": "例 5 · 反求区间 · Find the Interval",
        "prompt": "已知 \\(f(x)=4-x^2\\) 在 \\([0,a]\\) 上的平均值为 \\(\\dfrac{8}{3}\\)，且 \\(a>0\\)，求 \\(a\\) 并验证积分中值定理。 · The average value of \\(f(x)=4-x^2\\) on \\([0,a]\\) is \\(\\dfrac{8}{3}\\) with \\(a>0\\). Find \\(a\\) and verify the Mean Value Theorem for Integrals.",
        "steps": [
          "列方程：\\(\\dfrac{1}{a}\\int_0^a(4-x^2)\\,\\mathrm{d}x=\\dfrac{8}{3}\\)。 · Set up \\(\\dfrac{1}{a}\\int_0^a(4-x^2)\\,\\mathrm{d}x=\\dfrac{8}{3}\\).",
          "积分得 \\(\\dfrac{1}{a}\\left(4a-\\dfrac{a^3}{3}\\right)=4-\\dfrac{a^2}{3}\\)。 · The integral gives \\(\\dfrac{1}{a}\\left(4a-\\dfrac{a^3}{3}\\right)=4-\\dfrac{a^2}{3}\\).",
          "解 \\(4-\\dfrac{a^2}{3}=\\dfrac{8}{3}\\) 得 \\(a^2=4\\)，故 \\(a=2\\)。 · Solve to get \\(a^2=4\\), so \\(a=2\\).",
          "在 \\([0,2]\\) 上解 \\(4-c^2=\\dfrac{8}{3}\\)，得 \\(c^2=\\dfrac{4}{3}\\)，\\(c=\\dfrac{2}{\\sqrt3}\\approx1.155\\in(0,2)\\)。 · On \\([0,2]\\), solve \\(4-c^2=\\dfrac{8}{3}\\) to get \\(c=\\dfrac{2}{\\sqrt3}\\approx1.155\\in(0,2)\\)."
        ],
        "solution": "\\(a=2\\)；积分中值点 \\(c=\\dfrac{2}{\\sqrt3}\\approx1.155\\)。 · \\(a=2\\); the Mean Value point is \\(c=\\dfrac{2}{\\sqrt3}\\approx1.155\\).",
        "solutionLatex": "4-\\dfrac{a^2}{3}=\\dfrac{8}{3}\\Rightarrow a=2,\\qquad c=\\dfrac{2}{\\sqrt3}"
      }
    ],
    "examTips": [
      "先写 \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)，明确标出 \\(a\\)、\\(b\\) 与区间长度。 · Start by writing \\(f_{\\mathrm{avg}}=\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\) and label \\(a\\), \\(b\\), and the interval length.",
      "分母是 \\(b-a\\)，不是样本个数、\\(b+a\\) 或函数值的个数。 · The denominator is \\(b-a\\), not the number of samples, \\(b+a\\), or the number of function values.",
      "题目问 average value 时求函数值的高度；问 average rate of change 时求 \\(\\dfrac{f(b)-f(a)}{b-a}\\)。 · If the question asks for average value, find a height of function values; if it asks for average rate of change, compute \\(\\dfrac{f(b)-f(a)}{b-a}\\).",
      "积分中值定理要先声明连续性，再说明 \\(m\\le f_{\\mathrm{avg}}\\le M\\)，最后用介值定理。 · For the Mean Value Theorem for Integrals, state continuity, then \\(m\\le f_{\\mathrm{avg}}\\le M\\), then apply the Intermediate Value Theorem.",
      "求 \\(c\\) 时注意区间内可能有多个解；按题目要求给出全部解或一个解。 · When solving for \\(c\\), note that multiple solutions may lie in the interval; give all or one as requested.",
      "遇到三角函数的整周期，可先用对称性判断平均值，再用积分验证。 · For a full period of a trigonometric function, use symmetry to predict the average, then verify by integration.",
      "答案用 \\(m\\le f_{\\mathrm{avg}}\\le M\\) 与单位检查；平均值不可能超出函数值范围。 · Check with \\(m\\le f_{\\mathrm{avg}}\\le M\\) and units; the average cannot lie outside the range of function values.",
      "计算题要展示原函数与上下限代入，不要只写最终数值。 · Show the antiderivative and the limit substitution, not just the final number."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.2",
        "title": "位置速度加速度",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.3",
        "title": "累积变化率",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：定积分与黎曼和提供“无限细分再求和”的工具，平均值就是把总和按区间长度平均。 · Upstream: definite integrals and Riemann sums provide the “subdivide and add” tool; the average divides the total by the interval length.",
      "同单元：8.3 的净变化除以区间长度就是平均变化率；8.1 的平均值是函数值的高度，两者通过原函数联系。 · Within the unit: net change in 8.3 divided by the interval length is an average rate; the average value in 8.1 is a height of function values, and the two are linked through an antiderivative.",
      "应用：平均温度、平均浓度、平均速度都可用积分平均表示；平均速率则要对速度的绝对值积分。 · Applications: average temperature, average concentration, and average velocity are integral averages; average speed integrates the absolute value of velocity."
    ],
    "intuitionDetailed": "把区间 \\([a,b]\\) 切成许多等宽小条，每一条的高度近似为 \\(f(x_i^*)\\)。把所有小条的高度做算术平均，就得到 \\(\\dfrac{1}{n}\\sum f(x_i^*)\\)；当小条越来越窄，这个平均变成 \\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)。因此平均值不是“端点值的平均”，而是按位置等权地平均所有函数值。几何上，把曲线下的面积重新铺成一个等宽矩形，矩形的高就是平均值。 · Cut \\([a,b]\\) into many equal-width strips, each with height approximately \\(f(x_i^*)\\). Averaging these heights gives \\(\\dfrac{1}{n}\\sum f(x_i^*)\\); as the strips narrow, the average becomes \\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\). The average is therefore not the average of endpoint values but an equal-weight average of all function values over position. Geometrically, reshape the area under the curve into a rectangle of width \\(b-a\\); the rectangle's height is the average value.",
    "development": [
      "回顾先修：用黎曼和表示面积，并复习定积分的求值与微积分基本定理。 · Review prerequisites: express area with Riemann sums and review evaluating definite integrals with the Fundamental Theorem of Calculus.",
      "建立定义：从等宽小条的高度平均出发，取极限得到积分平均公式。 · Build the definition: start from the mean of equal-width strip heights and take the limit to obtain the integral average.",
      "几何解释：画同面积矩形，说明平均高度与有向面积的关系。 · Geometric interpretation: draw the equal-area rectangle and relate the average height to signed area.",
      "存在性：用连续函数的最值加介值定理证明积分中值定理，并讨论非唯一性。 · Existence: prove the Mean Value Theorem for Integrals using extreme values and the Intermediate Value Theorem, and discuss non-uniqueness.",
      "辨析：把平均值、平均变化率、中点函数值放在同一题中比较，检查单位。 · Distinguish: compare average value, average rate of change, and midpoint value in one problem, checking units.",
      "迁移：把同一方法用于温度、浓度与速度情境，并区分平均速度与平均速率。 · Transfer: apply the same method to temperature, concentration, and velocity, distinguishing average velocity from average speed."
    ],
    "checks": [
      "不看书能否写出平均值公式并解释为什么除以 \\(b-a\\)？ · Can you write the average-value formula and explain why it divides by \\(b-a\\) without notes?",
      "给定 \\(f(x)=x^3\\) 在 \\([-1,1]\\) 上，能否先用对称性判断平均值为 \\(0\\)，再用积分验证？ · For \\(f(x)=x^3\\) on \\([-1,1]\\), can you use symmetry to predict average value \\(0\\) and then verify by integration?",
      "能否说明积分中值定理为什么需要连续性，并构造一个取不到平均值的阶梯函数反例？ · Can you explain why the Mean Value Theorem for Integrals needs continuity and construct a step-function counterexample that never attains its average?",
      "给定图像，能否画出同面积矩形并估计平均值？ · Given a graph, can you draw the equal-area rectangle and estimate the average value?",
      "能否把平均值与平均变化率的单位分别写对，并用一个具体函数说明两者不相等？ · Can you state the units of average value and average rate of change correctly, and use a specific function to show they differ?",
      "若 \\(f\\) 在区间上变号，平均值是否一定为负？能否举例说明？ · If \\(f\\) changes sign on an interval, must the average be negative? Can you give an example?"
    ],
    "vocabulary": [
      {
        "termZh": "平均值",
        "termEn": "average value",
        "defZh": "函数在区间上的平均高度，\\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)。",
        "defEn": "The average height of a function on an interval, \\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,\\mathrm{d}x\\)."
      },
      {
        "termZh": "同面积矩形",
        "termEn": "equal-area rectangle",
        "defZh": "高为 \\(f_{\\mathrm{avg}}\\)、宽为 \\(b-a\\)，且面积等于曲线下区域的矩形。",
        "defEn": "A rectangle of height \\(f_{\\mathrm{avg}}\\) and width \\(b-a\\) whose area equals the region under the curve."
      },
      {
        "termZh": "积分中值定理",
        "termEn": "Mean Value Theorem for Integrals",
        "defZh": "连续函数在区间内至少取到一次其平均值。",
        "defEn": "A continuous function attains its average value at least once on the interval."
      },
      {
        "termZh": "连续函数",
        "termEn": "continuous function",
        "defZh": "图像不断裂的函数；保证积分中值定理成立的前提。",
        "defEn": "A function whose graph has no breaks; the hypothesis that guarantees the Mean Value Theorem for Integrals."
      },
      {
        "termZh": "平均变化率",
        "termEn": "average rate of change",
        "defZh": "\\(\\dfrac{f(b)-f(a)}{b-a}\\)，单位为函数值单位每单位自变量。",
        "defEn": "\\(\\dfrac{f(b)-f(a)}{b-a}\\), with units of function value per unit of the independent variable."
      },
      {
        "termZh": "区间长度",
        "termEn": "interval length",
        "defZh": "\\(b-a\\)，平均值公式中的分母。",
        "defEn": "The length \\(b-a\\), the denominator in the average-value formula."
      },
      {
        "termZh": "有向面积",
        "termEn": "signed area",
        "defZh": "定积分给出的面积，曲线在轴下方时取负值。",
        "defEn": "The area given by a definite integral, negative where the curve lies below the axis."
      },
      {
        "termZh": "平均速率",
        "termEn": "average speed",
        "defZh": "总路程除以时间，\\(\\dfrac{1}{b-a}\\int_a^b |v(t)|\\,\\mathrm{d}t\\)。",
        "defEn": "Total distance divided by time, \\(\\dfrac{1}{b-a}\\int_a^b |v(t)|\\,\\mathrm{d}t\\)."
      }
    ]
  },
  "8.2": {
    "id": "math/calc-u8/8.2",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.2",
    "titleZh": "位置速度加速度",
    "titleEn": "Connecting Position, Velocity, and Acceleration Using Integrals",
    "layer": "ap",
    "summary": "位置速度加速度 · Connecting Position, Velocity, and Acceleration Using Integrals",
    "learningObjectives": [
      "能陈述「位置速度加速度」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Connecting Position, Velocity, and Acceleration Using Integrals：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「位置速度加速度」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "位置速度加速度（Connecting Position, Velocity, and Acceleration Using Integrals）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「位置速度加速度」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "s(b)-s(a)=\\int_a^b v(t)\\,\\mathrm{d}t,\\quad v(b)-v(a)=\\int_a^b a(t)\\,\\mathrm{d}t",
        "note": "位移是速度的积分；速度变化是加速度的积分。 · Displacement integrates velocity; velocity change integrates acceleration."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「位置速度加速度」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 8.2「位置速度加速度」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「位置速度加速度」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「位置速度加速度」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「位置速度加速度」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「位置速度加速度」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「位置速度加速度」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.1",
        "title": "积分求平均",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.3",
        "title": "累积变化率",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「位置速度加速度」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「位置速度加速度」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「位置速度加速度」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "位移",
        "termEn": "displacement",
        "defZh": "\\(\\int_a^b v(t)\\,\\mathrm{d}t\\)，位置的总改变量。",
        "defEn": "\\(\\int_a^b v(t)\\,\\mathrm{d}t\\), the total change in position."
      },
      {
        "termZh": "位置",
        "termEn": "position",
        "defZh": "\\(s(t)=s(a)+\\int_a^t v(u)\\,\\mathrm{d}u\\)。",
        "defEn": "\\(s(t)=s(a)+\\int_a^t v(u)\\,\\mathrm{d}u\\)."
      },
      {
        "termZh": "速度",
        "termEn": "velocity",
        "defZh": "位置的变化率，可为负。",
        "defEn": "The rate of change of position, which may be negative."
      },
      {
        "termZh": "加速度",
        "termEn": "acceleration",
        "defZh": "速度的变化率，积分后得到速度改变量。",
        "defEn": "The rate of change of velocity; integrating it gives the change in velocity."
      },
      {
        "termZh": "初速度",
        "termEn": "initial velocity",
        "defZh": "\\(t=a\\) 时的速度 \\(v(a)\\)。",
        "defEn": "The velocity \\(v(a)\\) at time \\(t=a\\)."
      },
      {
        "termZh": "净变化",
        "termEn": "net change",
        "defZh": "积分得到的带符号总改变量。",
        "defEn": "The signed total change obtained by integration."
      }
    ]
  },
  "8.3": {
    "id": "math/calc-u8/8.3",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.3",
    "titleZh": "累积变化率",
    "titleEn": "Using Accumulation Functions and Definite Integrals in Applied Contexts",
    "layer": "ap",
    "summary": "累积变化率：变化率的积分给出净变化，把上限视为变量就得到累积函数；初始量加累积变化等于当前量。 · Accumulation: integrating a rate gives net change, and treating the upper limit as a variable defines an accumulation function; initial amount plus accumulated change equals the current amount.",
    "learningObjectives": [
      "能把 \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\) 解释为“初始量加累积变化”，并说明每一项的含义。 · Interpret \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\) as “initial amount plus accumulated change” and explain each term.",
      "能用微积分基本定理对累积函数求导，并由 \\(A'(x)=r(x)\\) 判断增减性与极值。 · Differentiate an accumulation function using the Fundamental Theorem of Calculus and use \\(A'(x)=r(x)\\) to determine monotonicity and extrema.",
      "能应用净变化定理 \\(\\int_a^b F'(x)\\,\\mathrm{d}x=F(b)-F(a)\\) 计算净变化。 · Apply the net change theorem \\(\\int_a^b F'(x)\\,\\mathrm{d}x=F(b)-F(a)\\) to compute net change.",
      "能从文字情境中识别变化率、初始量与时间区间，建立定积分并核对单位。 · Identify the rate, initial amount, and time interval in a verbal context, set up the definite integral, and check units.",
      "能区分净变化与总变化：前者用 \\(\\int r\\)，后者用 \\(\\int |r|\\)。 · Distinguish net change from total change: the former uses \\(\\int r\\), the latter \\(\\int |r|\\).",
      "能利用流入/流出、速度、边际成本、人口等情境解释积分结果，并求出累积量达到最大或指定值的时刻。 · Interpret integral results in inflow/outflow, velocity, marginal cost, and population contexts, and find when an accumulation is maximal or reaches a target value."
    ],
    "essentialKnowledge": [
      "累积函数定义为 \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\)，其中 \\(r(t)\\) 是变化率，\\(A(a)\\) 是初始量。 · An accumulation function is \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\), where \\(r(t)\\) is the rate of change and \\(A(a)\\) is the initial amount.",
      "对累积函数求导得 \\(A'(x)=r(x)\\)：累积量的瞬时变化率就是被积的变化率。 · Differentiating an accumulation function gives \\(A'(x)=r(x)\\): the instantaneous rate of the accumulated quantity is the integrand.",
      "净变化定理：若 \\(F'(x)=r(x)\\)，则 \\(\\int_a^b r(x)\\,\\mathrm{d}x=F(b)-F(a)\\)，即变化率的积分给出净变化。 · Net change theorem: if \\(F'(x)=r(x)\\), then \\(\\int_a^b r(x)\\,\\mathrm{d}x=F(b)-F(a)\\); integrating a rate gives the net change.",
      "若 \\(r(x)\\ge0\\)，累积函数单调不减；若 \\(r(x)\\le0\\)，单调不增；\\(r(x)=0\\) 处累积函数有水平切线。 · If \\(r(x)\\ge0\\), the accumulation is nondecreasing; if \\(r(x)\\le0\\), it is nonincreasing; where \\(r(x)=0\\) the accumulation has a horizontal tangent.",
      "累积函数的局部极大出现在 \\(r\\) 由正变负处；局部极小出现在 \\(r\\) 由负变正处；端点和 \\(r\\) 不存在的点也要检查。 · A local maximum of the accumulation occurs where \\(r\\) changes from positive to negative; a local minimum where \\(r\\) changes from negative to positive; also check endpoints and points where \\(r\\) is undefined.",
      "净变化是 \\(\\int_a^b r(x)\\,\\mathrm{d}x\\)，可以为负；总变化是 \\(\\int_a^b |r(x)|\\,\\mathrm{d}x\\)，非负。两者只在 \\(r\\) 不变号时相等。 · Net change is \\(\\int_a^b r(x)\\,\\mathrm{d}x\\), which can be negative; total change is \\(\\int_a^b |r(x)|\\,\\mathrm{d}x\\), which is nonnegative. They agree only when \\(r\\) does not change sign.",
      "流入/流出模型：\\(Q(t)=Q(0)+\\int_0^t [R(u)-D(u)]\\,\\mathrm{d}u\\)；当 \\(R=D\\) 时 \\(Q\\) 有水平切线，且 \\(R\\) 由大于 \\(D\\) 变为小于 \\(D\\) 时 \\(Q\\) 达到局部最大。 · Inflow/outflow model: \\(Q(t)=Q(0)+\\int_0^t [R(u)-D(u)]\\,\\mathrm{d}u\\); \\(Q\\) has a horizontal tangent when \\(R=D\\), and a local maximum when \\(R\\) changes from greater than \\(D\\) to less than \\(D\\).",
      "速度模型：位置 \\(s(t)=s(0)+\\int_0^t v(u)\\,\\mathrm{d}u\\)；位移是 \\(\\int_a^b v\\,\\mathrm{d}t\\)，总路程是 \\(\\int_a^b |v|\\,\\mathrm{d}t\\)。 · Velocity model: position \\(s(t)=s(0)+\\int_0^t v(u)\\,\\mathrm{d}u\\); displacement is \\(\\int_a^b v\\,\\mathrm{d}t\\), and total distance is \\(\\int_a^b |v|\\,\\mathrm{d}t\\).",
      "边际成本模型：\\(C(x)=C(0)+\\int_0^x C'(u)\\,\\mathrm{d}u\\)；已知固定成本与边际成本即可恢复总成本。 · Marginal cost model: \\(C(x)=C(0)+\\int_0^x C'(u)\\,\\mathrm{d}u\\); fixed cost plus accumulated marginal cost gives total cost.",
      "人口模型：\\(P(t)=P(0)+\\int_0^t P'(u)\\,\\mathrm{d}u\\)；若 \\(P'\\) 由出生率减死亡率得到，积分给出净人口变化。 · Population model: \\(P(t)=P(0)+\\int_0^t P'(u)\\,\\mathrm{d}u\\); if \\(P'\\) is births minus deaths, the integral gives net population change.",
      "单位检查：变化率的单位是“量每时间”，乘以时间微元后得到“量”；定积分的单位等于被积函数单位乘自变量的单位。 · Unit check: a rate has units of “amount per time”; multiplying by a time element gives “amount.” The integral's units are the integrand's units times the variable's units.",
      "累积函数可以用变下限定义，如 \\(A(x)=\\int_b^x r(t)\\,\\mathrm{d}t\\)；求导仍有 \\(A'(x)=r(x)\\)，只是常数项不同。 · An accumulation function can use a variable lower limit, such as \\(A(x)=\\int_b^x r(t)\\,\\mathrm{d}t\\); its derivative is still \\(A'(x)=r(x)\\), only the constant term differs.",
      "只知道变化率只能求变化量，必须再给初始条件才能确定当前总量；这是应用题最常见的失分点。 · Knowing only a rate determines change, not the current total; an initial condition is required to recover the amount, the most common error in applied problems.",
      "平均值联系：\\(\\dfrac{1}{b-a}\\int_a^b r(t)\\,\\mathrm{d}t\\) 是区间上的平均变化率，也等于净变化除以区间长度。 · Average-value link: \\(\\dfrac{1}{b-a}\\int_a^b r(t)\\,\\mathrm{d}t\\) is the average rate of change on the interval, equal to net change divided by the interval length."
    ],
    "definition": "若 \\(r(t)\\) 表示某量 \\(Q\\) 的瞬时变化率，则 \\(Q\\) 从 \\(t=a\\) 到 \\(t=b\\) 的净变化为 \\(\\int_a^b r(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\)。把上限看成变量，得到累积函数 \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\)：它表示初始量加上从 \\(a\\) 到 \\(x\\) 的全部有向累积。由微积分基本定理，\\(A'(x)=r(x)\\)，所以“积分累积”和“求导还原变化率”是一对互逆操作。 · If \\(r(t)\\) is the instantaneous rate of change of a quantity \\(Q\\), then the net change of \\(Q\\) from \\(t=a\\) to \\(t=b\\) is \\(\\int_a^b r(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\). Treating the upper limit as a variable gives the accumulation function \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\): the initial amount plus all signed accumulation from \\(a\\) to \\(x\\). By the Fundamental Theorem of Calculus, \\(A'(x)=r(x)\\), so integration (accumulation) and differentiation (recovering the rate) are inverse operations.",
    "intuition": "把变化率想成水龙头的水流速率：读数是“每分钟多少升”，积分就是“从开始到现在共流进多少升”；如果水箱原本有 30 升，最终水量还要加上这 30 升。 · Think of a rate as the flow rate from a faucet: the reading is “liters per minute,” and its integral is “total liters added since the start.” If the tank already held 30 liters, add that initial 30 liters to get the final amount.",
    "formulas": [
      {
        "latex": "A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t",
        "note": "累积函数：初始量加变化率的积分。 · Accumulation function: initial amount plus the integral of the rate."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\int_a^x r(t)\\,\\mathrm{d}t=r(x)",
        "note": "微积分基本定理：累积函数的导数等于变化率。 · Fundamental Theorem of Calculus: the derivative of the accumulation function is the rate."
      },
      {
        "latex": "\\int_a^b F'(x)\\,\\mathrm{d}x=F(b)-F(a)",
        "note": "净变化定理：变化率的积分给出净变化。 · Net change theorem: integrating a rate gives net change."
      },
      {
        "latex": "Q(t)=Q(0)+\\int_0^t [R(u)-D(u)]\\,\\mathrm{d}u",
        "note": "流入流出模型：净速率为流入减流出。 · Inflow/outflow model: the net rate is inflow minus outflow."
      },
      {
        "latex": "s(t)=s(0)+\\int_0^t v(u)\\,\\mathrm{d}u",
        "note": "位置等于初始位置加速度的积分。 · Position equals initial position plus the integral of velocity."
      },
      {
        "latex": "\\text{displacement}=\\int_a^b v(t)\\,\\mathrm{d}t,\\qquad \\text{distance}=\\int_a^b |v(t)|\\,\\mathrm{d}t",
        "note": "位移与总路程的区别。 · The difference between displacement and total distance."
      },
      {
        "latex": "C(x)=C(0)+\\int_0^x C'(u)\\,\\mathrm{d}u",
        "note": "总成本等于固定成本加边际成本的累积。 · Total cost equals fixed cost plus accumulated marginal cost."
      },
      {
        "latex": "\\text{net change}=Q(b)-Q(a)=\\int_a^b Q'(t)\\,\\mathrm{d}t",
        "note": "净变化可由端点值或变化率的积分得到。 · Net change can be found from endpoint values or by integrating the rate."
      }
    ],
    "derivationNotes": [
      {
        "from": "变化率与短时间 · Rate and short time",
        "to": "微小变化量 · Small change",
        "note": "在很短的时间 \\(\\Delta t\\) 内，变化量约为 \\(r(t_i^*)\\Delta t\\)。 · Over a short time \\(\\Delta t\\), the change is approximately \\(r(t_i^*)\\Delta t\\)."
      },
      {
        "from": "微小变化量 · Small changes",
        "to": "黎曼和 · Riemann sum",
        "note": "把各小段的变化量相加得 \\(\\sum_{i=1}^{n}r(t_i^*)\\Delta t\\)。 · Add the changes over the subintervals to get \\(\\sum_{i=1}^{n}r(t_i^*)\\Delta t\\)."
      },
      {
        "from": "黎曼和 · Riemann sum",
        "to": "净变化 · Net change",
        "note": "令 \\(n\\to\\infty\\) 得 \\(\\int_a^b r(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\)。 · Let \\(n\\to\\infty\\) to obtain \\(\\int_a^b r(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\)."
      },
      {
        "from": "累积函数 · Accumulation function",
        "to": "导数 · Derivative",
        "note": "由微积分基本定理，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\int_a^x r(t)\\,\\mathrm{d}t=r(x)\\)。 · By the Fundamental Theorem of Calculus, \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\int_a^x r(t)\\,\\mathrm{d}t=r(x)\\)."
      },
      {
        "from": "导数符号 · Sign of the derivative",
        "to": "极值 · Extrema",
        "note": "\\(A'(x)=r(x)\\)；由 \\(r\\) 的符号变化判断 \\(A\\) 的增减与极值。 · Since \\(A'(x)=r(x)\\), the sign changes of \\(r\\) determine the monotonicity and extrema of \\(A\\)."
      },
      {
        "from": "净变化与总变化 · Net and total change",
        "to": "绝对值积分 · Absolute-value integral",
        "note": "对 \\(r\\) 变号的区间分段，净变化保留负号，总变化取绝对值后积分。 · Split at sign changes of \\(r\\): net change keeps signs, while total change integrates absolute values."
      }
    ],
    "conditions": [
      "\\(r(t)\\) 在积分区间上连续（或分段连续），否则要在间断点处分段积分。 · \\(r(t)\\) is continuous (or piecewise continuous) on the interval; otherwise split the integral at discontinuities.",
      "变化率与时间的单位必须匹配；积分前统一为同一时间单位。 · The rate and time units must match; convert to a common time unit before integrating.",
      "只有变化率不足以确定总量，必须给出初始条件 \\(Q(a)\\) 或一个时刻的总量。 · A rate alone does not determine the total; an initial condition \\(Q(a)\\) or the amount at one time is required.",
      "净变化可以为负，表示总量减少；总变化非负，表示“经过的总量”。 · Net change can be negative, meaning a decrease; total change is nonnegative and measures the total amount processed.",
      "求累积量极值时，候选点包括 \\(r=0\\) 的点、\\(r\\) 不存在的点和区间端点。 · For extrema of an accumulation, check points where \\(r=0\\), points where \\(r\\) is undefined, and endpoints.",
      "\\(r\\) 由正变负给出局部极大，由负变正给出局部极小；仅 \\(r=0\\) 而不变号时不是极值。 · A sign change of \\(r\\) from positive to negative gives a local maximum, and negative to positive gives a local minimum; \\(r=0\\) without a sign change is not an extremum.",
      "流入量与流出量本身非负，但净速率 \\(R-D\\) 可正可负；不要把 \\(D-R\\) 与 \\(R-D\\) 写反。 · Inflow and outflow are nonnegative, but the net rate \\(R-D\\) can have either sign; do not reverse \\(R-D\\) and \\(D-R\\).",
      "平均变化率用区间总净变化除以区间长度；它不是瞬时变化率。 · Average rate of change divides total net change by the interval length; it is not an instantaneous rate."
    ],
    "keyPoints": [
      "核心句式：当前量 = 初始量 + 变化率的积分。 · Core sentence: current amount = initial amount + integral of the rate.",
      "累积函数求导就还原变化率：\\(A'(x)=r(x)\\)。 · Differentiating an accumulation restores the rate: \\(A'(x)=r(x)\\).",
      "净变化定理是微积分基本定理的应用形式：\\(\\int_a^b Q'(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\)。 · The net change theorem is the applied form of the Fundamental Theorem: \\(\\int_a^b Q'(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\).",
      "累积量在净速率为零且由正变负处达到局部最大；由负变正处达到局部最小。 · An accumulation reaches a local maximum where the net rate is zero and changes from positive to negative; a local minimum where it changes from negative to positive.",
      "位移用 \\(\\int v\\)，总路程用 \\(\\int |v|\\)；两者只在速度不变号时相等。 · Displacement uses \\(\\int v\\), total distance uses \\(\\int |v|\\); they agree only when velocity does not change sign.",
      "积分结果要加初始量，才是题目问的“当前总量”。 · Add the initial amount to the integral to answer “current total.”",
      "单位检查：速率单位乘时间单位必须得到量的单位。 · Unit check: rate units times time units must give the amount's units.",
      "图像上，累积函数的值是有向面积；其斜率是速率曲线的高度。 · Graphically, the accumulation is signed area; its slope is the height of the rate curve."
    ],
    "misconceptions": [
      "把 \\(\\int_a^b r(t)\\,\\mathrm{d}t\\) 直接当作最终总量，忘记加初始量。 · Treating \\(\\int_a^b r(t)\\,\\mathrm{d}t\\) as the final total and forgetting the initial amount.",
      "认为 \\(A'(x)=r(x)\\) 只在积分下限为 \\(0\\) 时成立；实际上下限可以是任意常数。 · Believing \\(A'(x)=r(x)\\) only when the lower limit is \\(0\\); the lower limit can be any constant.",
      "把总路程与位移混为一谈，对速度直接积分得到路程。 · Confusing total distance with displacement and integrating velocity without absolute value for distance.",
      "认为净变化一定为正；净变化可以为负，表示总量下降。 · Assuming net change is always positive; it can be negative when the quantity decreases.",
      "看到 \\(r(x_0)=0\\) 就断言 \\(A\\) 在 \\(x_0\\) 取得极值，而不检查 \\(r\\) 是否变号。 · Concluding that \\(A\\) has an extremum at \\(x_0\\) merely because \\(r(x_0)=0\\), without checking whether \\(r\\) changes sign.",
      "把流入流出模型写成 \\(D-R\\)，导致“流入增加时水量反而减少”的错误。 · Writing the inflow/outflow model as \\(D-R\\), which makes the amount decrease when inflow increases.",
      "忽略时间单位换算，例如把“每小时”代入以“分钟”为单位的区间。 · Ignoring time-unit conversions, such as using an hourly rate over an interval measured in minutes.",
      "把平均变化率当作瞬时变化率，或把累积函数在某点的值当作该点的速率。 · Confusing average and instantaneous rates, or treating the value of an accumulation at a point as the rate at that point."
    ],
    "examples": [
      {
        "title": "例 1 · 速度与路程 · Velocity and Distance",
        "prompt": "质点速度 \\(v(t)=3t^2-6t\\) m/s，\\(0\\le t\\le3\\)，初始位置 \\(s(0)=5\\) m。求位移、总路程与 \\(s(3)\\)。 · A particle has velocity \\(v(t)=3t^2-6t\\) m/s for \\(0\\le t\\le3\\) and initial position \\(s(0)=5\\) m. Find the displacement, total distance, and \\(s(3)\\).",
        "steps": [
          "位移：\\(\\int_0^3(3t^2-6t)\\,\\mathrm{d}t=[t^3-3t^2]_0^3=27-27=0\\) m。 · Displacement: \\(\\int_0^3(3t^2-6t)\\,\\mathrm{d}t=[t^3-3t^2]_0^3=0\\) m.",
          "因式分解 \\(v(t)=3t(t-2)\\)：在 \\((0,2)\\) 上 \\(v<0\\)，在 \\((2,3)\\) 上 \\(v>0\\)。 · Factor \\(v(t)=3t(t-2)\\): \\(v<0\\) on \\((0,2)\\) and \\(v>0\\) on \\((2,3)\\).",
          "分段求总路程：\\(\\int_0^2 v\\,\\mathrm{d}t=[t^3-3t^2]_0^2=-4\\)，\\(\\int_2^3 v\\,\\mathrm{d}t=0-(-4)=4\\)，故总路程为 \\(|-4|+|4|=8\\) m。 · Split for total distance: \\(\\int_0^2 v\\,\\mathrm{d}t=-4\\) and \\(\\int_2^3 v\\,\\mathrm{d}t=4\\), so total distance is \\(8\\) m.",
          "\\(s(3)=s(0)+\\int_0^3 v\\,\\mathrm{d}t=5+0=5\\) m；尽管走了 8 m，净位移为 0。 · \\(s(3)=5+0=5\\) m; although the particle travels 8 m, its net displacement is 0."
        ],
        "solution": "位移 \\(0\\) m，总路程 \\(8\\) m，\\(s(3)=5\\) m。 · Displacement \\(0\\) m, total distance \\(8\\) m, and \\(s(3)=5\\) m.",
        "solutionLatex": "\\int_0^3 v\\,\\mathrm{d}t=0,\\qquad \\int_0^3 |v|\\,\\mathrm{d}t=8,\\qquad s(3)=5"
      },
      {
        "title": "例 2 · 水箱累积 · Water Tank",
        "prompt": "水箱以 \\(R(t)=10+5\\sin\\!\\left(\\dfrac{t}{2}\\right)\\) L/h 流入，以 \\(D(t)=2+t\\) L/h 流出，初始水量 30 L。写出水量 \\(A(t)\\)，求水量最大时刻与最大水量。 · Water enters at \\(R(t)=10+5\\sin\\!\\left(\\dfrac{t}{2}\\right)\\) L/h and leaves at \\(D(t)=2+t\\) L/h; the tank starts with 30 L. Write \\(A(t)\\) and find when the amount is maximal and its maximum value.",
        "steps": [
          "\\(A(t)=30+\\int_0^t\\left[8+5\\sin\\!\\left(\\dfrac{u}{2}\\right)-u\\right]\\mathrm{d}u\\)，且 \\(A'(t)=R(t)-D(t)\\)。 · \\(A(t)=30+\\int_0^t\\left[8+5\\sin\\!\\left(\\dfrac{u}{2}\\right)-u\\right]\\mathrm{d}u\\), with \\(A'(t)=R(t)-D(t)\\).",
          "最大值出现在 \\(R=D\\)，即 \\(8+5\\sin\\!\\left(\\dfrac{t}{2}\\right)=t\\)。数值解 \\(t^*\\approx6.777\\) h。 · The maximum occurs when \\(R=D\\), that is, \\(8+5\\sin\\!\\left(\\dfrac{t}{2}\\right)=t\\). Numerically, \\(t^*\\approx6.777\\) h.",
          "在 \\(t<t^*\\) 时 \\(R>D\\)，水量增加；在 \\(t>t^*\\) 时 \\(R<D\\)，水量减少，所以 \\(t^*\\) 给出局部最大。 · For \\(t<t^*\\), \\(R>D\\) and the amount increases; for \\(t>t^*\\), \\(R<D\\) and it decreases, so \\(t^*\\) gives a local maximum.",
          "积分得 \\(\\int_0^{t^*}(R-D)\\,\\mathrm{d}t\\approx50.95\\) L，故最大水量约为 \\(30+50.95=80.95\\) L。 · The integral is about \\(50.95\\) L, so the maximum amount is about \\(30+50.95=80.95\\) L."
        ],
        "solution": "\\(A(t)=30+\\int_0^t(R-D)\\,\\mathrm{d}u\\)；最大水量约 \\(80.95\\) L，出现在 \\(t\\approx6.777\\) h。 · \\(A(t)=30+\\int_0^t(R-D)\\,\\mathrm{d}u\\); the maximum is about \\(80.95\\) L at \\(t\\approx6.777\\) h.",
        "solutionLatex": "A(t)=30+\\int_0^t\\left[8+5\\sin\\dfrac{u}{2}-u\\right]\\mathrm{d}u,\\qquad A_{\\max}\\approx80.95\\ \\text{L}"
      },
      {
        "title": "例 3 · 边际成本 · Marginal Cost",
        "prompt": "某产品的边际成本为 \\(C'(x)=0.02x+3\\) 元/件，固定成本 \\(C(0)=500\\) 元。求生产 100 件的总成本与可变成本。 · A product has marginal cost \\(C'(x)=0.02x+3\\) dollars per unit and fixed cost \\(C(0)=500\\) dollars. Find the total and variable costs for 100 units.",
        "steps": [
          "总成本：\\(C(100)=500+\\int_0^{100}(0.02x+3)\\,\\mathrm{d}x\\)。 · Total cost: \\(C(100)=500+\\int_0^{100}(0.02x+3)\\,\\mathrm{d}x\\).",
          "积分：\\(\\int_0^{100}(0.02x+3)\\,\\mathrm{d}x=[0.01x^2+3x]_0^{100}=100+300=400\\)。 · Evaluate: \\(\\int_0^{100}(0.02x+3)\\,\\mathrm{d}x=[0.01x^2+3x]_0^{100}=400\\).",
          "所以 \\(C(100)=500+400=900\\) 元；其中可变成本为 400 元。 · Thus \\(C(100)=500+400=900\\) dollars; the variable cost is 400 dollars.",
          "单位检查：元/件乘以件得到元；固定成本与可变成本可以直接相加。 · Unit check: dollars per unit times units gives dollars; fixed and variable costs add directly."
        ],
        "solution": "总成本 900 元，可变成本 400 元。 · Total cost 900 dollars; variable cost 400 dollars.",
        "solutionLatex": "C(100)=500+\\int_0^{100}(0.02x+3)\\,\\mathrm{d}x=900"
      },
      {
        "title": "例 4 · 累积函数分析 · Analyzing an Accumulation Function",
        "prompt": "设 \\(A(x)=\\int_1^x(t^2-4)\\,\\mathrm{d}t\\)，\\(0\\le x\\le3\\)。求 \\(A\\) 的增减区间、极值与最大最小值。 · Let \\(A(x)=\\int_1^x(t^2-4)\\,\\mathrm{d}t\\) for \\(0\\le x\\le3\\). Find the intervals of increase/decrease, extrema, and absolute maximum/minimum.",
        "steps": [
          "\\(A'(x)=x^2-4=(x-2)(x+2)\\)；在 \\([0,3]\\) 上临界点为 \\(x=2\\)。 · \\(A'(x)=x^2-4=(x-2)(x+2)\\); the only critical point in \\([0,3]\\) is \\(x=2\\).",
          "当 \\(0<x<2\\) 时 \\(A'<0\\)，\\(A\\) 递减；当 \\(2<x<3\\) 时 \\(A'>0\\)，\\(A\\) 递增。 · \\(A'<0\\) on \\((0,2)\\), so \\(A\\) decreases; \\(A'>0\\) on \\((2,3)\\), so \\(A\\) increases.",
          "端点与临界点值：\\(A(0)=\\int_1^0(t^2-4)\\,\\mathrm{d}t=\\dfrac{11}{3}\\approx3.667\\)，\\(A(2)=\\int_1^2(t^2-4)\\,\\mathrm{d}t=-\\dfrac{5}{3}\\approx-1.667\\)，\\(A(3)=\\int_1^3(t^2-4)\\,\\mathrm{d}t=\\dfrac{2}{3}\\approx0.667\\)。 · Values: \\(A(0)=\\dfrac{11}{3}\\), \\(A(2)=-\\dfrac{5}{3}\\), and \\(A(3)=\\dfrac{2}{3}\\).",
          "比较得绝对最大值 \\(A(0)=\\dfrac{11}{3}\\)（端点），绝对最小值 \\(A(2)=-\\dfrac{5}{3}\\)（局部极小）。 · Comparing gives absolute maximum \\(A(0)=\\dfrac{11}{3}\\) at an endpoint and absolute minimum \\(A(2)=-\\dfrac{5}{3}\\) at the local minimum."
        ],
        "solution": "递减区间 \\((0,2)\\)，递增区间 \\((2,3)\\)；最大值 \\(\\dfrac{11}{3}\\)，最小值 \\(-\\dfrac{5}{3}\\)。 · Decreasing on \\((0,2)\\), increasing on \\((2,3)\\); maximum \\(\\dfrac{11}{3}\\), minimum \\(-\\dfrac{5}{3}\\).",
        "solutionLatex": "A(0)=\\dfrac{11}{3},\\qquad A(2)=-\\dfrac{5}{3},\\qquad A(3)=\\dfrac{2}{3}"
      },
      {
        "title": "例 5 · 净变化与总变化 · Net versus Total Change",
        "prompt": "某量的变化率为 \\(r(t)=t-3\\)，\\(0\\le t\\le4\\)。求净变化与总变化，并解释符号含义。 · A quantity has rate of change \\(r(t)=t-3\\) for \\(0\\le t\\le4\\). Find the net change and the total change, and explain the signs.",
        "steps": [
          "净变化：\\(\\int_0^4(t-3)\\,\\mathrm{d}t=\\left[\\dfrac{t^2}{2}-3t\\right]_0^4=8-12=-4\\)。 · Net change: \\(\\int_0^4(t-3)\\,\\mathrm{d}t=-4\\).",
          "分界点 \\(t=3\\)：\\(\\int_0^3(t-3)\\,\\mathrm{d}t=-\\dfrac{9}{2}\\)，\\(\\int_3^4(t-3)\\,\\mathrm{d}t=\\dfrac{1}{2}\\)。 · Split at \\(t=3\\): \\(\\int_0^3(t-3)\\,\\mathrm{d}t=-\\dfrac{9}{2}\\) and \\(\\int_3^4(t-3)\\,\\mathrm{d}t=\\dfrac{1}{2}\\).",
          "总变化：\\(\\int_0^4|t-3|\\,\\mathrm{d}t=\\dfrac{9}{2}+\\dfrac{1}{2}=5\\)。 · Total change: \\(\\int_0^4|t-3|\\,\\mathrm{d}t=\\dfrac{9}{2}+\\dfrac{1}{2}=5\\).",
          "净变化为负表示最终总量比初始少 4；总变化为 5 表示过程中“先减少 4.5、再增加 0.5”，总活动量为 5。 · A net change of \\(-4\\) means the final amount is 4 less than the initial amount; a total change of 5 means the quantity first decreased by \\(4.5\\) and then increased by \\(0.5\\), for 5 units of total activity."
        ],
        "solution": "净变化 \\(-4\\)，总变化 \\(5\\)；两者不等因为 \\(r\\) 在 \\(t=3\\) 变号。 · Net change \\(-4\\), total change \\(5\\); they differ because \\(r\\) changes sign at \\(t=3\\).",
        "solutionLatex": "\\int_0^4(t-3)\\,\\mathrm{d}t=-4,\\qquad \\int_0^4|t-3|\\,\\mathrm{d}t=5"
      }
    ],
    "examTips": [
      "先写“当前量 = 初始量 + 积分”的框架，再代入具体函数；不要漏掉初始条件。 · Write the framework “current amount = initial amount + integral” before substituting functions; never omit the initial condition.",
      "看到 rate、per hour、per unit 等词，先确定被积函数与积分变量，再写上下限。 · When you see “rate,” “per hour,” or “per unit,” identify the integrand and integration variable before writing limits.",
      "求最大/最小时，先解净速率等于零，再用符号变化确认极大或极小；端点也要比较。 · For maxima/minima, solve net rate equals zero, confirm with a sign change, and also compare endpoints.",
      "位移与总路程要分清：题目说 total distance 时对 \\(|v|\\) 积分并分段。 · Distinguish displacement from total distance: for total distance, integrate \\(|v|\\) and split at sign changes.",
      "净变化可以为负，答案不必为正；总变化一定非负。 · Net change can be negative; total change is always nonnegative.",
      "应用题最后一句要带单位，并检查单位是否由“速率单位 × 时间单位”得到。 · End applied answers with units and check that rate units times time units produce the amount's units.",
      "用图像题时，累积量是曲线下的有向面积，斜率是速率曲线的高度。 · In graph problems, the accumulation is signed area under the rate curve, and its slope is the height of the rate curve.",
      "若题目给出 \\(A(x)=\\int_a^x r(t)\\,\\mathrm{d}t\\)，先用微积分基本定理求 \\(A'\\)，再讨论单调性。 · If given \\(A(x)=\\int_a^x r(t)\\,\\mathrm{d}t\\), first differentiate with the Fundamental Theorem, then discuss monotonicity."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.2",
        "title": "位置速度加速度",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.1",
        "title": "积分求平均",
        "relation": "related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.4",
        "title": "曲线间面积",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：微积分基本定理把求导与积分联系起来，净变化定理是它在应用情境中的直接形式。 · Upstream: the Fundamental Theorem of Calculus links differentiation and integration; the net change theorem is its direct applied form.",
      "同单元：8.1 的平均值是净变化除以区间长度；8.2 的位移与路程分别是 \\(\\int v\\) 与 \\(\\int |v|\\)。 · Within the unit: the average value in 8.1 is net change divided by the interval length; displacement and distance in 8.2 are \\(\\int v\\) and \\(\\int |v|\\).",
      "应用：水量、人口、成本、能量等只要给出变化率与初始量，都可以用同一“初始量 + 累积”框架建模。 · Applications: water, population, cost, and energy all fit the same “initial amount + accumulation” framework once a rate and an initial amount are given."
    ],
    "intuitionDetailed": "累积函数的关键是“把变化率沿时间加起来”。在很短的时间 \\(\\Delta t\\) 内，量变化约为 \\(r(t)\\Delta t\\)；把所有小段相加并取极限，就得到 \\(\\int_a^b r(t)\\,\\mathrm{d}t\\)。这个积分只告诉你“变了多少”，不告诉你“原来有多少”，所以必须加初始量。若把上限 \\(b\\) 换成变量 \\(x\\)，就得到累积函数 \\(A(x)\\)；它的图像每一点的斜率等于速率曲线在该点的高度，因此速率变号的地方就是累积量的峰或谷。 · The key to accumulation is “adding the rate over time.” Over a short interval \\(\\Delta t\\), the quantity changes by about \\(r(t)\\Delta t\\); adding all small changes and taking the limit gives \\(\\int_a^b r(t)\\,\\mathrm{d}t\\). This integral tells only how much the quantity changed, not how much there was initially, so the initial amount must be added. Replacing the upper limit \\(b\\) with a variable \\(x\\) gives the accumulation function \\(A(x)\\); its graph has slope equal to the height of the rate curve, so sign changes of the rate locate peaks and valleys of the accumulation.",
    "development": [
      "回顾先修：复习微积分基本定理与黎曼和，明确“积分是累积”的含义。 · Review prerequisites: revisit the Fundamental Theorem of Calculus and Riemann sums to clarify that integration accumulates.",
      "建立模型：从“速率 × 短时间”的微小变化出发，写出黎曼和并取极限得到净变化公式。 · Build the model: start from “rate times short time” small changes, write a Riemann sum, and take the limit to obtain net change.",
      "引入初始量：用 \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\) 区分“变化量”与“当前总量”。 · Add the initial amount: use \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\) to separate “change” from “current total.”",
      "分析形状：对 \\(A\\) 求导得 \\(A'=r\\)，用 \\(r\\) 的符号与零点判断 \\(A\\) 的增减和极值。 · Analyze shape: differentiate to get \\(A'=r\\), then use the sign and zeros of \\(r\\) to determine monotonicity and extrema.",
      "区分净与总：在 \\(r\\) 变号的情境中分别计算 \\(\\int r\\) 与 \\(\\int |r|\\)，解释两者的实际意义。 · Distinguish net and total: where \\(r\\) changes sign, compute both \\(\\int r\\) and \\(\\int |r|\\) and interpret each.",
      "迁移应用：把同一框架用于水箱、速度、成本与人口，并检查单位与初始条件。 · Transfer: apply the same framework to tanks, velocity, cost, and population, checking units and initial conditions."
    ],
    "checks": [
      "能否用一句话说出“当前量、初始量、变化率积分”三者的关系？ · Can you state the relationship among current amount, initial amount, and the integral of the rate in one sentence?",
      "给定 \\(A(x)=\\int_2^x(t^2-1)\\,\\mathrm{d}t\\)，能否不展开积分就写出 \\(A'(x)\\) 并判断增减区间？ · Given \\(A(x)=\\int_2^x(t^2-1)\\,\\mathrm{d}t\\), can you write \\(A'(x)\\) and determine the intervals of increase/decrease without expanding the integral?",
      "水箱问题中，为什么水量最大时 \\(R=D\\)？如果 \\(R\\) 和 \\(D\\) 相等但不相交变号，还是最大值吗？ · In a tank problem, why is the amount maximal when \\(R=D\\)? If \\(R=D\\) without a sign change, is it still a maximum?",
      "位移与总路程的区别是什么？能否各举一个速度变号的例子？ · What is the difference between displacement and total distance? Can you give an example of each when velocity changes sign?",
      "给定边际成本与固定成本，能否写出总成本函数并解释积分项的 units？ · Given marginal cost and fixed cost, can you write the total cost function and explain the units of the integral term?",
      "净变化为负时，总变化是否也为负？请用 \\(r(t)=t-3\\) 在 \\([0,4]\\) 上说明。 · If net change is negative, must total change be negative? Explain with \\(r(t)=t-3\\) on \\([0,4]\\)."
    ],
    "vocabulary": [
      {
        "termZh": "累积函数",
        "termEn": "accumulation function",
        "defZh": "用变上限积分表示从起点到当前时刻的总量，\\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\)。",
        "defEn": "A variable-upper-limit integral giving the total from a starting point to the current time, \\(A(x)=A(a)+\\int_a^x r(t)\\,\\mathrm{d}t\\)."
      },
      {
        "termZh": "净变化",
        "termEn": "net change",
        "defZh": "\\(\\int_a^b r(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\)，可以为负。",
        "defEn": "\\(\\int_a^b r(t)\\,\\mathrm{d}t=Q(b)-Q(a)\\), which can be negative."
      },
      {
        "termZh": "总变化",
        "termEn": "total change",
        "defZh": "\\(\\int_a^b |r(t)|\\,\\mathrm{d}t\\)，表示过程中累积的总活动量，非负。",
        "defEn": "\\(\\int_a^b |r(t)|\\,\\mathrm{d}t\\), the total activity accumulated, which is nonnegative."
      },
      {
        "termZh": "变化率",
        "termEn": "rate of change",
        "defZh": "被积分的瞬时变化速度，单位是“量每时间”。",
        "defEn": "The instantaneous speed of change being integrated, with units of amount per time."
      },
      {
        "termZh": "初始条件",
        "termEn": "initial condition",
        "defZh": "某一时刻的已知总量，用来把变化量恢复为当前总量。",
        "defEn": "A known amount at one time, used to recover the current total from a change."
      },
      {
        "termZh": "净速率",
        "termEn": "net rate",
        "defZh": "流入速率减流出速率，\\(R(t)-D(t)\\)。",
        "defEn": "Inflow rate minus outflow rate, \\(R(t)-D(t)\\)."
      },
      {
        "termZh": "位移",
        "termEn": "displacement",
        "defZh": "速度的定积分，表示位置的有向变化。",
        "defEn": "The definite integral of velocity, giving the signed change in position."
      },
      {
        "termZh": "边际成本",
        "termEn": "marginal cost",
        "defZh": "多生产一单位所增加的成本，积分后得到可变成本。",
        "defEn": "The added cost of producing one more unit; its integral gives variable cost."
      }
    ]
  },
  "8.4": {
    "id": "math/calc-u8/8.4",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.4",
    "titleZh": "曲线间面积",
    "titleEn": "Finding the Area Between Curves Expressed as Functions of x",
    "layer": "ap",
    "summary": "曲线间面积 · Finding the Area Between Curves Expressed as Functions of x",
    "learningObjectives": [
      "能陈述「曲线间面积」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding the Area Between Curves Expressed as Functions of x：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「曲线间面积」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "曲线间面积（Finding the Area Between Curves Expressed as Functions of x）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「曲线间面积」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "A=\\int_a^b\\left[f(x)-g(x)\\right]\\mathrm{d}x",
        "note": "曲线间面积：f 在上、g 在下。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「曲线间面积」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 8.4「曲线间面积」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「曲线间面积」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「曲线间面积」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「曲线间面积」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「曲线间面积」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「曲线间面积」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.3",
        "title": "累积变化率",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.5",
        "title": "曲线间面积 y",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「曲线间面积」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「曲线间面积」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「曲线间面积」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "曲线间面积",
        "termEn": "area between curves",
        "defZh": "在区间 \\([a,b]\\) 上，上函数减下函数的定积分。",
        "defEn": "The definite integral of the upper function minus the lower function on \\([a,b]\\)."
      },
      {
        "termZh": "上函数 \\(f(x)\\)",
        "termEn": "upper function",
        "defZh": "区间内位于另一条曲线上方的函数。",
        "defEn": "The function that lies above the other curve on the interval."
      },
      {
        "termZh": "下函数 \\(g(x)\\)",
        "termEn": "lower function",
        "defZh": "区间内位于另一条曲线下方的函数。",
        "defEn": "The function that lies below the other curve on the interval."
      },
      {
        "termZh": "交点",
        "termEn": "intersection point",
        "defZh": "两条曲线相交、用于确定积分限的点。",
        "defEn": "A point where the curves meet, used to determine the limits of integration."
      },
      {
        "termZh": "面积元",
        "termEn": "area element",
        "defZh": "\\([f(x)-g(x)]\\,\\mathrm{d}x\\) 表示宽度为 \\(\\mathrm{d}x\\) 的竖直条面积。",
        "defEn": "The element \\([f(x)-g(x)]\\,\\mathrm{d}x\\), the area of a vertical strip of width \\(\\mathrm{d}x\\)."
      },
      {
        "termZh": "绝对值面积",
        "termEn": "absolute-value area",
        "defZh": "曲线多次交叉时，用 \\(\\int_a^b|f(x)-g(x)|\\,\\mathrm{d}x\\) 保证面积非负。",
        "defEn": "When the curves cross repeatedly, \\(\\int_a^b|f(x)-g(x)|\\,\\mathrm{d}x\\) keeps the total area nonnegative."
      }
    ]
  },
  "8.5": {
    "id": "math/calc-u8/8.5",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.5",
    "titleZh": "曲线间面积 y",
    "titleEn": "Finding the Area Between Curves Expressed as Functions of y",
    "layer": "ap",
    "summary": "曲线间面积 y · Finding the Area Between Curves Expressed as Functions of y",
    "learningObjectives": [
      "能陈述「曲线间面积 y」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding the Area Between Curves Expressed as Functions of y：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「曲线间面积 y」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "曲线间面积 y（Finding the Area Between Curves Expressed as Functions of y）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「曲线间面积 y」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "A=\\int_c^d\\left[x_{\\mathrm{right}}(y)-x_{\\mathrm{left}}(y)\\right]\\mathrm{d}y",
        "note": "对 y 积分求曲线间面积。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「曲线间面积 y」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 8.5「曲线间面积 y」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「曲线间面积 y」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「曲线间面积 y」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「曲线间面积 y」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「曲线间面积 y」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「曲线间面积 y」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.4",
        "title": "曲线间面积",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.6",
        "title": "曲线间面积其他",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「曲线间面积 y」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「曲线间面积 y」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「曲线间面积 y」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "关于 \\(y\\) 的函数",
        "termEn": "function of \\(y\\)",
        "defZh": "以 \\(x=g(y)\\) 形式表示的曲线。",
        "defEn": "A curve expressed in the form \\(x=g(y)\\)."
      },
      {
        "termZh": "右曲线",
        "termEn": "right curve",
        "defZh": "在水平条上 \\(x\\) 较大的边界 \\(x_{\\mathrm{right}}(y)\\)。",
        "defEn": "The boundary \\(x_{\\mathrm{right}}(y)\\) with the larger \\(x\\) on a horizontal strip."
      },
      {
        "termZh": "左曲线",
        "termEn": "left curve",
        "defZh": "在水平条上 \\(x\\) 较小的边界 \\(x_{\\mathrm{left}}(y)\\)。",
        "defEn": "The boundary \\(x_{\\mathrm{left}}(y)\\) with the smaller \\(x\\) on a horizontal strip."
      },
      {
        "termZh": "水平条",
        "termEn": "horizontal strip",
        "defZh": "沿 \\(y\\) 方向积分时宽度为 \\(x_{\\mathrm{right}}-x_{\\mathrm{left}}\\) 的条带。",
        "defEn": "A strip of width \\(x_{\\mathrm{right}}-x_{\\mathrm{left}}\\) used when integrating along \\(y\\)."
      },
      {
        "termZh": "曲线间面积",
        "termEn": "area between curves",
        "defZh": "\\(A=\\int_c^d[x_{\\mathrm{right}}(y)-x_{\\mathrm{left}}(y)]\\,\\mathrm{d}y\\)。",
        "defEn": "\\(A=\\int_c^d[x_{\\mathrm{right}}(y)-x_{\\mathrm{left}}(y)]\\,\\mathrm{d}y\\)."
      },
      {
        "termZh": "交点",
        "termEn": "intersection",
        "defZh": "两曲线相交处，常作为积分限。",
        "defEn": "A point where two curves meet, often used as a limit of integration."
      }
    ]
  },
  "8.6": {
    "id": "math/calc-u8/8.6",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.6",
    "titleZh": "曲线间面积其他",
    "titleEn": "Finding Area Between Curves That Intersect at More Than Two Points",
    "layer": "ap",
    "summary": "曲线间面积其他 · Finding Area Between Curves That Intersect at More Than Two Points",
    "learningObjectives": [
      "能陈述「曲线间面积其他」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding Area Between Curves That Intersect at More Than Two Points：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「曲线间面积其他」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "曲线间面积其他（Finding Area Between Curves That Intersect at More Than Two Points）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「曲线间面积其他」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "A=\\int_a^b\\left|f(x)-g(x)\\right|\\mathrm{d}x",
        "note": "上下关系变化时取绝对值。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「曲线间面积其他」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 8.6「曲线间面积其他」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「曲线间面积其他」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「曲线间面积其他」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「曲线间面积其他」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「曲线间面积其他」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「曲线间面积其他」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.5",
        "title": "曲线间面积 y",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.7",
        "title": "截面法：正方形与矩形",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「曲线间面积其他」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「曲线间面积其他」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「曲线间面积其他」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "交点",
        "termEn": "intersection point",
        "defZh": "两曲线相交、上下位置可能交换的点。",
        "defEn": "A point where two curves meet and their upper-lower order may switch."
      },
      {
        "termZh": "区间划分",
        "termEn": "partition",
        "defZh": "按交点把积分区间分成若干段。",
        "defEn": "Dividing the integration interval into pieces at intersection points."
      },
      {
        "termZh": "上曲线",
        "termEn": "upper curve",
        "defZh": "在给定子区间上函数值较大的曲线。",
        "defEn": "The curve with the larger function value on a given subinterval."
      },
      {
        "termZh": "绝对值积分",
        "termEn": "absolute value integral",
        "defZh": "\\(A=\\int_a^b|f(x)-g(x)|\\,\\mathrm{d}x\\)，自动处理上下交换。",
        "defEn": "\\(A=\\int_a^b|f(x)-g(x)|\\,\\mathrm{d}x\\), automatically handling order changes."
      },
      {
        "termZh": "曲线间面积",
        "termEn": "area between curves",
        "defZh": "各子区间上上曲线减下曲线积分之和。",
        "defEn": "The sum of integrals of upper minus lower curves over the subintervals."
      }
    ]
  },
  "8.7": {
    "id": "math/calc-u8/8.7",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.7",
    "titleZh": "截面法：正方形与矩形",
    "titleEn": "Volumes with Cross Sections: Squares and Rectangles",
    "layer": "ap",
    "summary": "截面法：把立体切成正方形或矩形薄片，边长由底面两曲线之间的距离给出，再对截面面积积分。 · Volumes by slicing: cut the solid into square or rectangular slices whose side is the distance between two curves in the base, then integrate the slice area.",
    "learningObjectives": [
      "能从底面区域与切片方向确定截面边长 \\(s\\)，并写出 \\(s\\) 关于积分变量的表达式。 · Determine the cross-section side length \\(s\\) from the base region and slicing direction, and express \\(s\\) in terms of the integration variable.",
      "能对正方形截面写出 \\(A(x)=[f(x)-g(x)]^2\\)，并建立体积积分。 · Write \\(A(x)=[f(x)-g(x)]^2\\) for square cross sections and set up the volume integral.",
      "能处理固定高度的矩形截面 \\(A=h s\\)，以及高度与底边成比例的矩形截面 \\(A=k s^2\\)。 · Handle rectangular cross sections of fixed height \\(A=h s\\) and rectangles whose height is proportional to the base, \\(A=k s^2\\).",
      "能根据切片垂直于 \\(x\\) 轴或 \\(y\\) 轴选择 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\)，并写出正确的上下限。 · Choose \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\) according to whether slices are perpendicular to the \\(x\\)-axis or \\(y\\)-axis, and write the correct limits.",
      "能利用对称底面 \\(y=\\pm f(x)\\) 得到边长 \\(s=2f(x)\\)，并避免把坐标值误当边长。 · Use a symmetric base \\(y=\\pm f(x)\\) to get side length \\(s=2f(x)\\), avoiding the mistake of using a coordinate value as the side length.",
      "能用单位、特例与图像检查体积结果是否合理。 · Check volume results with units, special cases, and graphs."
    ],
    "essentialKnowledge": [
      "截面法把立体沿某轴切成厚度为 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\) 的薄片，体积微元为 \\(\\mathrm{d}V=A(x)\\,\\mathrm{d}x\\)，总体积为 \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\)。 · The cross-section method cuts a solid into slices of thickness \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\), with volume element \\(\\mathrm{d}V=A(x)\\,\\mathrm{d}x\\) and total volume \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\).",
      "正方形截面：若切片垂直于 \\(x\\) 轴，边长是底面上下曲线之差 \\(s=f(x)-g(x)\\)，则 \\(A(x)=[f(x)-g(x)]^2\\)。 · Square cross sections: for slices perpendicular to the \\(x\\)-axis, the side is the difference between the upper and lower base curves, \\(s=f(x)-g(x)\\), so \\(A(x)=[f(x)-g(x)]^2\\).",
      "对称底面 \\(y=\\pm f(x)\\)：在位置 \\(x\\) 处上下边界相距 \\(2f(x)\\)，正方形边长为 \\(2f(x)\\)，不是 \\(f(x)\\)。 · Symmetric base \\(y=\\pm f(x)\\): at position \\(x\\) the vertical extent is \\(2f(x)\\), so the square side is \\(2f(x)\\), not \\(f(x)\\).",
      "固定高度的矩形截面：若矩形高为常数 \\(h\\)，底边为 \\(s=f(x)-g(x)\\)，则 \\(A(x)=h[f(x)-g(x)]\\)，体积为 \\(V=h\\int_a^b[f(x)-g(x)]\\,\\mathrm{d}x\\)。 · Rectangular cross sections of fixed height: if the rectangle has constant height \\(h\\) and base \\(s=f(x)-g(x)\\), then \\(A(x)=h[f(x)-g(x)]\\) and \\(V=h\\int_a^b[f(x)-g(x)]\\,\\mathrm{d}x\\).",
      "矩形高度与底边成比例：若高为 \\(k s\\)，则 \\(A(x)=k[f(x)-g(x)]^2\\)，体积为 \\(V=k\\int_a^b[f(x)-g(x)]^2\\,\\mathrm{d}x\\)。 · Rectangle height proportional to the base: if the height is \\(k s\\), then \\(A(x)=k[f(x)-g(x)]^2\\) and \\(V=k\\int_a^b[f(x)-g(x)]^2\\,\\mathrm{d}x\\).",
      "若底面由 \\(x=u(y)\\) 与 \\(x=v(y)\\) 围成，切片垂直于 \\(y\\) 轴，则正方形边长为 \\(v(y)-u(y)\\)，体积为 \\(V=\\int_c^d[v(y)-u(y)]^2\\,\\mathrm{d}y\\)。 · If the base is bounded by \\(x=u(y)\\) and \\(x=v(y)\\) and slices are perpendicular to the \\(y\\)-axis, the square side is \\(v(y)-u(y)\\) and \\(V=\\int_c^d[v(y)-u(y)]^2\\,\\mathrm{d}y\\).",
      "截平面垂直于积分轴，并且截面的底边完全落在底面区域内；边长就是该底边的长度。 · The slicing plane is perpendicular to the integration axis, and the base edge of each cross section lies entirely in the base region; the side length is the length of that base edge.",
      "正方形面积公式为 \\(s^2\\)，矩形面积公式为 \\(bh\\)；若矩形的“高等于底边”则退化为正方形。 · The area of a square is \\(s^2\\), and the area of a rectangle is \\(bh\\); a rectangle whose height equals its base reduces to a square.",
      "积分上下限是底面在积分轴上的投影范围，由曲线交点或题目给定边界确定；曲线在区间内交叉时要分段。 · The limits are the projection of the base onto the integration axis, determined by intersection points or given boundaries; split the interval where curves cross.",
      "单位检查：截面面积单位为长度平方，乘以厚度长度后体积单位为长度立方；不要遗漏长度因子。 · Unit check: cross-sectional area has units of length squared; multiplying by a length element gives volume in cubic length. Do not omit the length factor.",
      "圆锥、圆柱、棱柱等也可用截面法验证：若 \\(A\\) 为常数，\\(V=A(b-a)\\)，与柱体体积公式一致。 · Cones, cylinders, and prisms can be checked by slicing: if \\(A\\) is constant, \\(V=A(b-a)\\), matching the prism volume formula.",
      "三角形与半圆截面的面积公式不同（见 8.8）；圆盘法与垫圈法（见 8.9–8.12）是旋转体的特殊截面。 · Triangular and semicircular cross sections use different area formulas (see 8.8); the disk and washer methods (8.9–8.12) are special cross sections for solids of revolution."
    ],
    "definition": "截面法用一族垂直于某条轴的平面把立体切成薄片，每一薄片近似为一个柱体，其体积等于截面面积乘以厚度。若切片垂直于 \\(x\\) 轴，位置 \\(x\\) 处的截面面积为 \\(A(x)\\)，则 \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\)。当截面是正方形时，边长由底面上下曲线之间的距离给出，\\(A(x)=s(x)^2\\)；当截面是矩形时，\\(A(x)=s(x)h(x)\\)。 · The cross-section method cuts a solid into thin slabs by planes perpendicular to an axis; each slab is approximately a prism whose volume is cross-sectional area times thickness. For slices perpendicular to the \\(x\\)-axis with cross-sectional area \\(A(x)\\) at position \\(x\\), \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\). For square cross sections the side is the distance between the upper and lower base curves, so \\(A(x)=s(x)^2\\); for rectangular cross sections, \\(A(x)=s(x)h(x)\\).",
    "intuition": "把立体想成一叠切好的面包片：每片是正方形或矩形，厚度是 \\(\\mathrm{d}x\\)；把所有片的面积乘以厚度再相加，就是积分。 · Think of the solid as a stack of sliced bread: each slice is a square or rectangle of thickness \\(\\mathrm{d}x\\); adding area times thickness over all slices gives the integral.",
    "formulas": [
      {
        "latex": "V=\\int_a^b A(x)\\,\\mathrm{d}x",
        "note": "截面法：\\(A(x)\\) 为垂直于 \\(x\\) 轴的截面面积。 · Cross-section method: \\(A(x)\\) is the slice area perpendicular to the \\(x\\)-axis."
      },
      {
        "latex": "V=\\int_c^d A(y)\\,\\mathrm{d}y",
        "note": "切片垂直于 \\(y\\) 轴时对 \\(y\\) 积分。 · Integrate with respect to \\(y\\) when slices are perpendicular to the \\(y\\)-axis."
      },
      {
        "latex": "s(x)=f(x)-g(x)",
        "note": "底面上下曲线之间的距离，即正方形边长或矩形底边。 · The distance between the upper and lower base curves, the square side or rectangle base."
      },
      {
        "latex": "A_{\\text{square}}(x)=[f(x)-g(x)]^{2}",
        "note": "正方形截面的面积。 · Area of a square cross section."
      },
      {
        "latex": "A_{\\text{rect}}(x)=h[f(x)-g(x)]",
        "note": "固定高度 \\(h\\) 的矩形截面面积。 · Area of a rectangular cross section with fixed height \\(h\\)."
      },
      {
        "latex": "A_{\\text{rect}}(x)=k[f(x)-g(x)]^{2}",
        "note": "高度为 \\(k s\\) 的矩形截面面积。 · Area of a rectangular cross section whose height is \\(k s\\)."
      },
      {
        "latex": "V=\\int_a^b[f(x)-g(x)]^{2}\\,\\mathrm{d}x",
        "note": "正方形截面体积。 · Volume with square cross sections."
      },
      {
        "latex": "V=h\\int_a^b[f(x)-g(x)]\\,\\mathrm{d}x",
        "note": "固定高度矩形截面体积。 · Volume with rectangular cross sections of fixed height."
      }
    ],
    "derivationNotes": [
      {
        "from": "立体与切片 · Solid and slices",
        "to": "薄片体积 · Slab volume",
        "note": "厚度为 \\(\\Delta x\\) 的薄片体积约为 \\(A(x_i^*)\\Delta x\\)。 · A slab of thickness \\(\\Delta x\\) has volume approximately \\(A(x_i^*)\\Delta x\\)."
      },
      {
        "from": "底面边界 · Base boundaries",
        "to": "截面边长 · Side length",
        "note": "在位置 \\(x\\) 处，上下曲线之间的距离就是截面底边 \\(s=f(x)-g(x)\\)。 · At position \\(x\\), the distance between the upper and lower curves is the base edge \\(s=f(x)-g(x)\\)."
      },
      {
        "from": "边长 · Side length",
        "to": "正方形面积 · Square area",
        "note": "正方形面积 \\(A=s^2=[f(x)-g(x)]^2\\)。 · A square has area \\(A=s^2=[f(x)-g(x)]^2\\)."
      },
      {
        "from": "边长与高度 · Side and height",
        "to": "矩形面积 · Rectangle area",
        "note": "矩形面积 \\(A=hs\\)；若 \\(h=ks\\)，则 \\(A=ks^2\\)。 · A rectangle has area \\(A=hs\\); if \\(h=ks\\), then \\(A=ks^2\\)."
      },
      {
        "from": "黎曼和 · Riemann sum",
        "to": "体积积分 · Volume integral",
        "note": "\\(\\sum A(x_i^*)\\Delta x\\to\\int_a^b A(x)\\,\\mathrm{d}x\\)。 · \\(\\sum A(x_i^*)\\Delta x\\to\\int_a^b A(x)\\,\\mathrm{d}x\\)."
      }
    ],
    "conditions": [
      "底面区域由两条曲线与左右（或上下）边界围成，且在积分区间内边界函数连续。 · The base region is bounded by two curves and side boundaries, and the boundary functions are continuous on the interval.",
      "切片方向必须与积分变量对应：垂直于 \\(x\\) 轴用 \\(\\mathrm{d}x\\)，垂直于 \\(y\\) 轴用 \\(\\mathrm{d}y\\)。 · The slicing direction must match the integration variable: perpendicular to the \\(x\\)-axis uses \\(\\mathrm{d}x\\); perpendicular to the \\(y\\)-axis uses \\(\\mathrm{d}y\\).",
      "边长必须非负；若两条曲线在区间内交叉，要在交点处拆分并取上减下。 · The side length must be nonnegative; if the curves cross, split at the intersection and use upper minus lower on each piece.",
      "截面形状在切片过程中保持为正方形或矩形；若形状改变，面积公式要随之改变。 · The cross-section shape remains a square or rectangle through the slicing; if the shape changes, the area formula must change accordingly.",
      "矩形截面要明确高度是常数还是随位置变化；固定高度与“高度等于底边”是两种不同模型。 · For rectangular cross sections, specify whether the height is constant or varies with position; constant height and “height equals base” are different models.",
      "上下限是底面在积分轴上的投影，不是曲线的高度；不要把 \\(y\\) 的范围误写进 \\(x\\) 积分。 · The limits are the base's projection on the integration axis, not function heights; do not put a \\(y\\)-range into an \\(x\\)-integral.",
      "单位必须一致：曲线坐标、厚度与截面面积使用同一长度单位。 · Units must be consistent: curve coordinates, thickness, and cross-sectional area use the same length unit."
    ],
    "keyPoints": [
      "先画底面，再画一片截面，标出边长 \\(s\\)；不要直接套公式。 · Sketch the base, then one slice, and label the side \\(s\\); do not plug into a formula blindly.",
      "正方形截面面积是边长的平方，边长是两曲线之差，而不是某一条曲线的函数值。 · A square cross section has area equal to the side squared, and the side is the difference of the two curves, not one curve value.",
      "对称底面 \\(y=\\pm f(x)\\) 的边长是 \\(2f(x)\\)，因为上下边界都要算。 · A symmetric base \\(y=\\pm f(x)\\) has side \\(2f(x)\\), since both upper and lower boundaries count.",
      "固定高度矩形用 \\(A=hs\\)，高度与底边成比例用 \\(A=ks^2\\)；先判断高度类型再积分。 · Use \\(A=hs\\) for a fixed-height rectangle and \\(A=ks^2\\) when height is proportional to the base; identify the type before integrating.",
      "切片垂直于 \\(y\\) 轴时，把所有曲线解成 \\(x=\\cdot\\) 的形式，积分变量与上下限都换成 \\(y\\)。 · For slices perpendicular to the \\(y\\)-axis, solve all curves as \\(x=\\cdot\\) and switch both the variable and limits to \\(y\\).",
      "体积单位是长度立方，结果必须为正；若积分为负，检查上下限或边长顺序。 · Volume has cubic length units and must be positive; a negative result signals wrong limits or side order.",
      "用常截面特例检查：若 \\(A\\) 为常数，\\(V=A(b-a)\\)。 · Check with a constant cross section: if \\(A\\) is constant, \\(V=A(b-a)\\).",
      "曲线交叉时一定要分段，否则“上减下”会在某段变号，面积被抵消。 · Always split at curve crossings; otherwise “upper minus lower” changes sign and areas cancel."
    ],
    "misconceptions": [
      "把 \\(f(x)\\) 直接当作正方形边长，忘记减去下边界 \\(g(x)\\)。 · Using \\(f(x)\\) as the square side and forgetting to subtract the lower boundary \\(g(x)\\).",
      "正方形截面忘记平方，把 \\(s\\) 当作面积。 · Forgetting to square the side and treating \\(s\\) as the area of a square.",
      "把底面区域的面积当作每个截面的面积；底面面积是二维的，截面面积还要由截面形状决定。 · Confusing the area of the base region with the area of each cross section; the base is two-dimensional, and the slice area depends on the cross-section shape.",
      "固定高度矩形中，把高度也随 \\(x\\) 平方或错误地写成 \\(h^2s\\)。 · In a fixed-height rectangle, squaring the height or writing \\(h^2s\\) incorrectly.",
      "切片垂直于 \\(y\\) 轴却仍对 \\(x\\) 积分，或把 \\(x\\) 的上下限用于 \\(y\\) 积分。 · Integrating with respect to \\(x\\) while slices are perpendicular to the \\(y\\)-axis, or using \\(x\\)-limits in a \\(y\\)-integral.",
      "对称底面只取上半支 \\(f(x)\\) 作为边长，漏掉下半支。 · Using only the upper branch \\(f(x)\\) as the side of a symmetric base and missing the lower branch.",
      "两条曲线交叉时不分段，导致边长出现负值并抵消体积。 · Not splitting where curves cross, so negative side lengths cancel volume.",
      "在正方形/矩形截面题中误用 \\(\\pi\\)（那是圆盘或半圆截面）。 · Inserting a factor of \\(\\pi\\) in square/rectangle problems (that belongs to disk or semicircular sections)."
    ],
    "examples": [
      {
        "title": "例 1 · 单曲线正方形 · Square Sections above a Curve",
        "prompt": "底面由 \\(y=\\sqrt{x}\\) 与 \\(y=0\\) 在 \\(0\\le x\\le4\\) 围成。垂直于 \\(x\\) 轴的截面是正方形，求体积。 · The base is bounded by \\(y=\\sqrt{x}\\) and \\(y=0\\) on \\(0\\le x\\le4\\). Cross sections perpendicular to the \\(x\\)-axis are squares. Find the volume.",
        "steps": [
          "边长 \\(s(x)=\\sqrt{x}-0=\\sqrt{x}\\)。 · Side length \\(s(x)=\\sqrt{x}-0=\\sqrt{x}\\).",
          "截面面积 \\(A(x)=s^2=x\\)。 · Cross-sectional area \\(A(x)=s^2=x\\).",
          "\\(V=\\int_0^4 x\\,\\mathrm{d}x=\\left[\\dfrac{x^2}{2}\\right]_0^4=8\\)。 · \\(V=\\int_0^4 x\\,\\mathrm{d}x=8\\).",
          "检查：边长从 0 增到 2，截面面积从 0 增到 4，体积为正且单位是长度立方。 · Check: the side grows from 0 to 2 and the area from 0 to 4; the volume is positive with cubic length units."
        ],
        "solution": "\\(V=8\\) 立方单位。 · \\(V=8\\) cubic units.",
        "solutionLatex": "V=\\int_0^4(\\sqrt{x})^{2}\\,\\mathrm{d}x=\\int_0^4 x\\,\\mathrm{d}x=8"
      },
      {
        "title": "例 2 · 对称底面 · Symmetric Base",
        "prompt": "底面由 \\(y=\\sqrt{x}\\) 与 \\(y=-\\sqrt{x}\\) 在 \\(0\\le x\\le4\\) 围成。垂直于 \\(x\\) 轴的截面是正方形，求体积。 · The base is bounded by \\(y=\\sqrt{x}\\) and \\(y=-\\sqrt{x}\\) on \\(0\\le x\\le4\\). Cross sections perpendicular to the \\(x\\)-axis are squares. Find the volume.",
        "steps": [
          "在位置 \\(x\\) 处，上下边界的距离为 \\(s(x)=\\sqrt{x}-(-\\sqrt{x})=2\\sqrt{x}\\)。 · At position \\(x\\), the distance between the boundaries is \\(s(x)=2\\sqrt{x}\\).",
          "\\(A(x)=s^2=(2\\sqrt{x})^2=4x\\)。 · \\(A(x)=s^2=4x\\).",
          "\\(V=\\int_0^4 4x\\,\\mathrm{d}x=2\\left[x^2\\right]_0^4=32\\)。 · \\(V=\\int_0^4 4x\\,\\mathrm{d}x=32\\).",
          "与例 1 比较：底面高度翻倍，正方形边长翻倍，面积变为 4 倍，体积从 8 变为 32。 · Compare with Example 1: doubling the base height doubles the square side, quadruples the area, and changes the volume from 8 to 32."
        ],
        "solution": "\\(V=32\\) 立方单位。 · \\(V=32\\) cubic units.",
        "solutionLatex": "V=\\int_0^4(2\\sqrt{x})^{2}\\,\\mathrm{d}x=\\int_0^4 4x\\,\\mathrm{d}x=32"
      },
      {
        "title": "例 3 · 两曲线之间 · Between Two Curves",
        "prompt": "底面由 \\(y=x\\) 与 \\(y=x^2\\) 在 \\(0\\le x\\le1\\) 围成。垂直于 \\(x\\) 轴的截面是正方形，求体积。 · The base is bounded by \\(y=x\\) and \\(y=x^2\\) on \\(0\\le x\\le1\\). Cross sections perpendicular to the \\(x\\)-axis are squares. Find the volume.",
        "steps": [
          "在 \\((0,1)\\) 上 \\(x>x^2\\)，所以 \\(s(x)=x-x^2\\)。 · On \\((0,1)\\), \\(x>x^2\\), so \\(s(x)=x-x^2\\).",
          "\\(A(x)=(x-x^2)^2=x^2-2x^3+x^4\\)。 · \\(A(x)=(x-x^2)^2=x^2-2x^3+x^4\\).",
          "\\(V=\\int_0^1(x^2-2x^3+x^4)\\,\\mathrm{d}x=\\dfrac{1}{3}-\\dfrac{1}{2}+\\dfrac{1}{5}\\)。 · \\(V=\\int_0^1(x^2-2x^3+x^4)\\,\\mathrm{d}x=\\dfrac{1}{3}-\\dfrac{1}{2}+\\dfrac{1}{5}\\).",
          "通分得 \\(\\dfrac{10-15+6}{30}=\\dfrac{1}{30}\\approx0.0333\\)。 · Combining gives \\(\\dfrac{1}{30}\\approx0.0333\\)."
        ],
        "solution": "\\(V=\\dfrac{1}{30}\\approx0.0333\\) 立方单位。 · \\(V=\\dfrac{1}{30}\\approx0.0333\\) cubic units.",
        "solutionLatex": "V=\\int_0^1(x-x^2)^{2}\\,\\mathrm{d}x=\\dfrac{1}{30}"
      },
      {
        "title": "例 4 · 矩形截面的两种模型 · Two Rectangle Models",
        "prompt": "仍取例 3 的底面。分别求：(a) 截面是高度固定为 3 的矩形；(b) 截面是高度为底边 2 倍的矩形。 · Use the base from Example 3. Find the volume when (a) each cross section is a rectangle of fixed height 3, and (b) each rectangle has height twice its base.",
        "steps": [
          "(a) \\(A(x)=3(x-x^2)\\)，所以 \\(V=3\\int_0^1(x-x^2)\\,\\mathrm{d}x=3\\left(\\dfrac{1}{2}-\\dfrac{1}{3}\\right)=\\dfrac{1}{2}\\)。 · (a) \\(A(x)=3(x-x^2)\\), so \\(V=3\\int_0^1(x-x^2)\\,\\mathrm{d}x=3\\left(\\dfrac{1}{6}\\right)=\\dfrac{1}{2}\\).",
          "(b) 高度为 \\(2s=2(x-x^2)\\)，所以 \\(A(x)=2(x-x^2)^2\\)。 · (b) The height is \\(2s=2(x-x^2)\\), so \\(A(x)=2(x-x^2)^2\\).",
          "\\(V=2\\int_0^1(x-x^2)^2\\,\\mathrm{d}x=2\\cdot\\dfrac{1}{30}=\\dfrac{1}{15}\\approx0.0667\\)。 · \\(V=2\\cdot\\dfrac{1}{30}=\\dfrac{1}{15}\\approx0.0667\\).",
          "对比：固定高度时面积随 \\(s\\) 一次变化；高度与底边成比例时面积随 \\(s^2\\) 变化，所以体积是正方形结果的 2 倍。 · Compare: fixed height makes area linear in \\(s\\), while proportional height makes area proportional to \\(s^2\\), so the volume is twice the square-section result."
        ],
        "solution": "(a) \\(\\dfrac{1}{2}\\)；(b) \\(\\dfrac{1}{15}\\) 立方单位。 · (a) \\(\\dfrac{1}{2}\\); (b) \\(\\dfrac{1}{15}\\) cubic units.",
        "solutionLatex": "V_a=3\\int_0^1(x-x^2)\\,\\mathrm{d}x=\\dfrac{1}{2},\\qquad V_b=2\\int_0^1(x-x^2)^{2}\\,\\mathrm{d}x=\\dfrac{1}{15}"
      },
      {
        "title": "例 5 · 对 y 积分 · Integrating with Respect to y",
        "prompt": "底面由 \\(x=y^2\\) 与 \\(x=4\\) 在 \\(0\\le y\\le2\\) 围成。垂直于 \\(y\\) 轴的截面是正方形，求体积。 · The base is bounded by \\(x=y^2\\) and \\(x=4\\) on \\(0\\le y\\le2\\). Cross sections perpendicular to the \\(y\\)-axis are squares. Find the volume.",
        "steps": [
          "在高度 \\(y\\) 处，水平宽度为 \\(s(y)=4-y^2\\)。 · At height \\(y\\), the horizontal width is \\(s(y)=4-y^2\\).",
          "\\(A(y)=s^2=(4-y^2)^2=16-8y^2+y^4\\)。 · \\(A(y)=(4-y^2)^2=16-8y^2+y^4\\).",
          "\\(V=\\int_0^2(16-8y^2+y^4)\\,\\mathrm{d}y=32-\\dfrac{64}{3}+\\dfrac{32}{5}\\)。 · \\(V=\\int_0^2(16-8y^2+y^4)\\,\\mathrm{d}y=32-\\dfrac{64}{3}+\\dfrac{32}{5}\\).",
          "通分得 \\(\\dfrac{480-320+96}{15}=\\dfrac{256}{15}\\approx17.067\\)。 · Combining gives \\(\\dfrac{256}{15}\\approx17.067\\)."
        ],
        "solution": "\\(V=\\dfrac{256}{15}\\approx17.067\\) 立方单位。 · \\(V=\\dfrac{256}{15}\\approx17.067\\) cubic units.",
        "solutionLatex": "V=\\int_0^2(4-y^2)^{2}\\,\\mathrm{d}y=\\dfrac{256}{15}"
      }
    ],
    "examTips": [
      "先画底面与一片截面，标出积分变量、厚度和边长 \\(s\\)，再写积分。 · First sketch the base and one slice, labeling the integration variable, thickness, and side \\(s\\), then write the integral.",
      "正方形题的关键是 \\(s=f-g\\)，矩形题的关键是判断高度是常数还是与 \\(s\\) 成比例。 · For squares the key is \\(s=f-g\\); for rectangles the key is whether the height is constant or proportional to \\(s\\).",
      "对称底面 \\(y=\\pm f(x)\\) 的边长是 \\(2f(x)\\)，不是 \\(f(x)\\)。 · A symmetric base \\(y=\\pm f(x)\\) has side \\(2f(x)\\), not \\(f(x)\\).",
      "切片垂直于 \\(y\\) 轴时，把边界解成 \\(x=\\cdot\\)，并同时更换积分变量与上下限。 · For slices perpendicular to the \\(y\\)-axis, solve boundaries as \\(x=\\cdot\\) and change both the variable and limits.",
      "体积答案保留精确值（分数或根式），需要时再给近似值。 · Keep exact volume values (fractions or radicals) and give approximations only when needed.",
      "用单位检查：若题目长度单位是 cm，体积单位应为 cm³。 · Check units: if lengths are in cm, the volume unit is cm³.",
      "若曲线在区间内交叉，先求交点并分段，保证每段边长为正。 · If curves cross inside the interval, find intersections and split so each side length is positive.",
      "最后用“常截面”或“底面面积 × 平均高度”做量级检查。 · Finish with an order-of-magnitude check using a constant cross section or “base area times average height.”"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.6",
        "title": "曲线间面积其他",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.8",
        "title": "已知截面体积",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：8.4–8.6 的曲线间面积提供底面宽度 \\(f-g\\)，截面法把它平方或乘以高度后沿轴累积。 · Upstream: area between curves in 8.4–8.6 supplies the base width \\(f-g\\); the cross-section method squares it or multiplies by a height and accumulates along the axis.",
      "同单元：8.8 把正方形/矩形换成三角形与半圆，体积公式的结构仍是 \\(V=\\int A\\,\\mathrm{d}x\\)。 · Within the unit: 8.8 replaces squares and rectangles with triangles and semicircles, but the structure remains \\(V=\\int A\\,\\mathrm{d}x\\).",
      "后续：8.9–8.12 的圆盘法与垫圈法是旋转体的特殊截面，半径相当于这里的边长。 · Follow-up: the disk and washer methods in 8.9–8.12 are special cross sections for solids of revolution, with radius playing the role of the side length."
    ],
    "intuitionDetailed": "截面法的全部难点在于“把三维体积化成二维面积的一维累积”。先看底面：在固定 \\(x\\) 处，底面是一条竖直线段，长度 \\(s=f(x)-g(x)\\)。切片把这个线段“立起来”成正方形或矩形；正方形面积 \\(s^2\\)，矩形面积 \\(hs\\)。然后把薄片沿 \\(x\\) 方向摞起来，每一片体积 \\(A(x)\\Delta x\\)，求和取极限就是 \\(\\int A\\,\\mathrm{d}x\\)。如果切片垂直于 \\(y\\) 轴，只是把“上下”换成“左右”，把 \\(s\\) 写成 \\(v(y)-u(y)\\)，积分变量换成 \\(y\\)。 · The whole difficulty of the cross-section method is reducing a three-dimensional volume to a one-dimensional accumulation of two-dimensional areas. Look at the base first: at a fixed \\(x\\), the base is a vertical segment of length \\(s=f(x)-g(x)\\). The slice stands this segment up as a square or rectangle; a square has area \\(s^2\\), a rectangle \\(hs\\). Stack the slabs along the \\(x\\)-direction: each slab has volume \\(A(x)\\Delta x\\), and summing and taking the limit gives \\(\\int A\\,\\mathrm{d}x\\). For slices perpendicular to the \\(y\\)-axis, replace “upper and lower” by “right and left,” write \\(s=v(y)-u(y)\\), and switch the integration variable to \\(y\\).",
    "development": [
      "回顾先修：复习曲线间面积，确认能熟练写出 \\(f(x)-g(x)\\) 与交点。 · Review prerequisites: revisit area between curves and practice writing \\(f(x)-g(x)\\) and finding intersections.",
      "画出底面：标出积分轴、边界曲线与投影区间，确定切片方向。 · Draw the base: mark the integration axis, boundary curves, and projection interval, and choose the slicing direction.",
      "画一片截面：在一般位置 \\(x\\)（或 \\(y\\)）画出正方形或矩形，标出边长 \\(s\\) 与高度。 · Draw one slice: at a general position \\(x\\) (or \\(y\\)), sketch the square or rectangle and label the side \\(s\\) and height.",
      "写出面积：根据形状写 \\(A=s^2\\)、\\(A=hs\\) 或 \\(A=ks^2\\)，再代入 \\(s=f-g\\)。 · Write the area: use \\(A=s^2\\), \\(A=hs\\), or \\(A=ks^2\\) according to the shape, then substitute \\(s=f-g\\).",
      "建立并求值：写出 \\(V=\\int A\\,\\mathrm{d}x\\)，检查上下限与单位，完成积分。 · Set up and evaluate: write \\(V=\\int A\\,\\mathrm{d}x\\), check limits and units, and integrate.",
      "检验：用对称性、常截面特例或数值估算检查结果数量级。 · Verify: use symmetry, a constant-section special case, or a numerical estimate to check the order of magnitude."
    ],
    "checks": [
      "给定底面与“正方形截面”，能否在图上标出边长并写出 \\(A(x)\\)？ · Given a base and “square cross sections,” can you label the side on the figure and write \\(A(x)\\)?",
      "对称底面 \\(y=\\pm f(x)\\) 的边长为什么是 \\(2f(x)\\)？如果只取上半支会得到什么错误？ · Why is the side of a symmetric base \\(y=\\pm f(x)\\) equal to \\(2f(x)\\)? What error results from using only the upper branch?",
      "固定高度矩形与“高度等于底边”的矩形，面积公式分别是什么？ · What are the area formulas for a fixed-height rectangle and a rectangle whose height equals its base?",
      "切片垂直于 \\(y\\) 轴时，哪些量需要改写？能否把 \\(y=x^2\\) 改写成 \\(x=\\sqrt{y}\\)？ · Which quantities must be rewritten when slices are perpendicular to the \\(y\\)-axis? Can you rewrite \\(y=x^2\\) as \\(x=\\sqrt{y}\\)?",
      "若算出的体积为负，最可能错在哪里？ · If a computed volume is negative, where is the error most likely?",
      "能否用 \\(V=A(b-a)\\) 检查常截面情形，并说明单位为什么是长度立方？ · Can you check a constant-section case with \\(V=A(b-a)\\) and explain why the units are cubic length?"
    ],
    "vocabulary": [
      {
        "termZh": "截面",
        "termEn": "cross section",
        "defZh": "用垂直于某轴的平面截立体所得的平面图形。",
        "defEn": "The plane figure cut from a solid by a plane perpendicular to an axis."
      },
      {
        "termZh": "正方形截面",
        "termEn": "square cross section",
        "defZh": "截面为正方形，边长等于底面两曲线之间的距离。",
        "defEn": "A square cross section whose side equals the distance between two base curves."
      },
      {
        "termZh": "矩形截面",
        "termEn": "rectangular cross section",
        "defZh": "截面为矩形，面积等于底边乘高度。",
        "defEn": "A rectangular cross section whose area equals base times height."
      },
      {
        "termZh": "边长",
        "termEn": "side length",
        "defZh": "底面在切片位置处两边界之间的距离 \\(s\\)。",
        "defEn": "The distance \\(s\\) between the two base boundaries at the slice position."
      },
      {
        "termZh": "底面区域",
        "termEn": "base region",
        "defZh": "立体在切片方向上的投影区域，由边界曲线围成。",
        "defEn": "The projection region of the solid along the slicing direction, bounded by the given curves."
      },
      {
        "termZh": "垂直薄片",
        "termEn": "perpendicular slice",
        "defZh": "垂直于积分轴、厚度为 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\) 的薄片。",
        "defEn": "A thin slab perpendicular to the integration axis with thickness \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\)."
      },
      {
        "termZh": "截面面积",
        "termEn": "cross-sectional area",
        "defZh": "\\(A(x)\\)，随位置变化的正方形或矩形面积。",
        "defEn": "\\(A(x)\\), the square or rectangle area varying with position."
      },
      {
        "termZh": "体积",
        "termEn": "volume",
        "defZh": "\\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\)，截面面积沿轴的累积。",
        "defEn": "\\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\), the accumulation of cross-sectional area along the axis."
      }
    ]
  },
  "8.8": {
    "id": "math/calc-u8/8.8",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.8",
    "titleZh": "已知截面体积",
    "titleEn": "Volumes with Cross Sections: Triangles and Semicircles",
    "layer": "ap",
    "summary": "已知截面体积：三角形与半圆截面的面积由底面边长决定，再用 \\(V=\\int A\\,\\mathrm{d}x\\) 沿轴累积。 · Known cross sections: triangular and semicircular slice areas are determined by the base side length and accumulated along the axis with \\(V=\\int A\\,\\mathrm{d}x\\).",
    "learningObjectives": [
      "能由底面两曲线之间的距离确定三角形或半圆截面的边长 \\(s\\)。 · Determine the side or diameter \\(s\\) of a triangular or semicircular cross section from the distance between two base curves.",
      "能正确使用等边三角形、等腰直角三角形与半圆的面积公式。 · Correctly use the area formulas for equilateral triangles, isosceles right triangles, and semicircles.",
      "能区分等腰直角三角形的“直角边为 \\(s\\)”与“斜边为 \\(s\\)”两种情形。 · Distinguish the two isosceles-right-triangle cases: a leg of length \\(s\\) versus a hypotenuse of length \\(s\\).",
      "能处理半圆以 \\(s\\) 为直径的面积 \\(\\dfrac{\\pi s^2}{8}\\)，并与整圆面积 \\(\\dfrac{\\pi s^2}{4}\\) 区分。 · Handle a semicircle with diameter \\(s\\), area \\(\\dfrac{\\pi s^2}{8}\\), and distinguish it from a full circle of area \\(\\dfrac{\\pi s^2}{4}\\).",
      "能对其他几何截面（正六边形、圆等）提取面积系数 \\(k\\)，写成 \\(A=ks^2\\) 并积分。 · For other geometric sections (regular hexagons, circles, etc.), extract the area coefficient \\(k\\), write \\(A=ks^2\\), and integrate.",
      "能用单位、对称性与极限情形检查体积结果，并解释常见系数错误。 · Check volumes with units, symmetry, and limiting cases, and explain common coefficient errors."
    ],
    "essentialKnowledge": [
      "截面法仍为 \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\)；三角形与半圆题的核心是写出正确的 \\(A(x)\\)。 · The cross-section method remains \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\); the key in triangle and semicircle problems is writing the correct \\(A(x)\\).",
      "等边三角形边长为 \\(s\\)：高为 \\(\\dfrac{\\sqrt3}{2}s\\)，面积为 \\(A=\\dfrac{1}{2}\\cdot s\\cdot\\dfrac{\\sqrt3}{2}s=\\dfrac{\\sqrt3}{4}s^2\\)。 · For an equilateral triangle of side \\(s\\): the altitude is \\(\\dfrac{\\sqrt3}{2}s\\), so \\(A=\\dfrac{\\sqrt3}{4}s^2\\).",
      "等腰直角三角形若两条直角边长为 \\(s\\)，则 \\(A=\\dfrac{1}{2}s^2\\)。 · An isosceles right triangle with both legs of length \\(s\\) has \\(A=\\dfrac{1}{2}s^2\\).",
      "等腰直角三角形若斜边长为 \\(s\\)，则每条直角边为 \\(\\dfrac{s}{\\sqrt2}\\)，\\(A=\\dfrac{1}{2}\\left(\\dfrac{s}{\\sqrt2}\\right)^2=\\dfrac{1}{4}s^2\\)。 · An isosceles right triangle with hypotenuse \\(s\\) has legs \\(\\dfrac{s}{\\sqrt2}\\) and area \\(A=\\dfrac{1}{4}s^2\\).",
      "一般三角形面积 \\(A=\\dfrac{1}{2}bh\\)；若题目只给底边，必须由几何关系（如等边、等腰直角、相似三角形）先求高。 · A general triangle has area \\(A=\\dfrac{1}{2}bh\\); if only the base is given, find the height from the geometry (equilateral, isosceles right, similar triangles).",
      "半圆以 \\(s\\) 为直径：半径为 \\(\\dfrac{s}{2}\\)，面积 \\(A=\\dfrac{1}{2}\\pi\\left(\\dfrac{s}{2}\\right)^2=\\dfrac{\\pi s^2}{8}\\)。 · A semicircle with diameter \\(s\\) has radius \\(\\dfrac{s}{2}\\) and area \\(A=\\dfrac{\\pi s^2}{8}\\).",
      "整圆以 \\(s\\) 为直径：面积 \\(A=\\pi\\left(\\dfrac{s}{2}\\right)^2=\\dfrac{\\pi s^2}{4}\\)；半圆是其一半。 · A full circle with diameter \\(s\\) has area \\(\\dfrac{\\pi s^2}{4}\\); a semicircle is half of that.",
      "许多截面面积都可写成 \\(A=ks^2\\)：正方形 \\(k=1\\)，等边三角形 \\(k=\\dfrac{\\sqrt3}{4}\\)，半圆 \\(k=\\dfrac{\\pi}{8}\\)，等腰直角三角形（直角边 \\(s\\)）\\(k=\\dfrac{1}{2}\\)，正六边形 \\(k=\\dfrac{3\\sqrt3}{2}\\)。 · Many cross-section areas have the form \\(A=ks^2\\): square \\(k=1\\), equilateral triangle \\(k=\\dfrac{\\sqrt3}{4}\\), semicircle \\(k=\\dfrac{\\pi}{8}\\), isosceles right triangle with leg \\(s\\) \\(k=\\dfrac{1}{2}\\), regular hexagon \\(k=\\dfrac{3\\sqrt3}{2}\\).",
      "边长 \\(s\\) 是切片位置处底面两边界之间的距离：若边界为 \\(f(x)\\) 与 \\(g(x)\\)，则 \\(s=f(x)-g(x)\\)；对称底面 \\(y=\\pm f(x)\\) 则 \\(s=2f(x)\\)。 · The side \\(s\\) is the distance between the base boundaries at the slice position: for \\(f(x)\\) and \\(g(x)\\), \\(s=f(x)-g(x)\\); for a symmetric base \\(y=\\pm f(x)\\), \\(s=2f(x)\\).",
      "截面平面垂直于积分轴，截面的底边落在底面区域内；若截面形状的朝向改变，面积系数可能随位置改变。 · The slicing plane is perpendicular to the integration axis and the base edge lies in the base region; if the orientation of the shape changes, the area coefficient may vary with position.",
      "若 \\(A(x)=k(x)s(x)^2\\) 且 \\(k\\) 为常数，则 \\(V=k\\int_a^b s(x)^2\\,\\mathrm{d}x\\)；先把常数系数提到积分外可减少错误。 · If \\(A(x)=k\\,s(x)^2\\) with constant \\(k\\), then \\(V=k\\int_a^b s(x)^2\\,\\mathrm{d}x\\); factoring the constant out reduces errors.",
      "单位检查：\\(s^2\\) 是长度平方，积分后再乘长度得到长度立方；\\(\\pi\\) 与 \\(\\sqrt3\\) 无量纲。 · Unit check: \\(s^2\\) is length squared; integrating adds one length to give cubic length; \\(\\pi\\) and \\(\\sqrt3\\) are dimensionless.",
      "曲线在区间内交叉时要分段，确保每一段 \\(s\\ge0\\)；否则面积会因符号错误而被抵消。 · Split at curve crossings so that \\(s\\ge0\\) on each piece; otherwise sign errors can cancel area."
    ],
    "definition": "当立体的截面是三角形或半圆等几何图形时，仍用截面法：先由底面两曲线之间的距离确定截面边长 \\(s(x)\\)，再用该图形的面积公式写出 \\(A(x)\\)，最后计算 \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\)。三角形与半圆题的关键不是积分本身，而是面积公式中的系数：等边三角形为 \\(\\dfrac{\\sqrt3}{4}s^2\\)，等腰直角三角形按“直角边”或“斜边”分别为 \\(\\dfrac{1}{2}s^2\\) 或 \\(\\dfrac{1}{4}s^2\\)，半圆以 \\(s\\) 为直径时为 \\(\\dfrac{\\pi s^2}{8}\\)。 · When the cross sections of a solid are triangles, semicircles, or other geometric shapes, the cross-section method still applies: determine the side \\(s(x)\\) from the distance between the base curves, write \\(A(x)\\) with that shape's area formula, and compute \\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\). The challenge is not the integration but the coefficient in the area formula: \\(\\dfrac{\\sqrt3}{4}s^2\\) for an equilateral triangle, \\(\\dfrac{1}{2}s^2\\) or \\(\\dfrac{1}{4}s^2\\) for an isosceles right triangle depending on whether \\(s\\) is a leg or the hypotenuse, and \\(\\dfrac{\\pi s^2}{8}\\) for a semicircle with diameter \\(s\\).",
    "intuition": "先看底面上的一条线段，它像一个“模具”：三角形截面把这条线段作为一条边或底边，半圆截面把它作为直径。边长确定后，截面面积只差一个固定系数，积分就是把所有薄片加起来。 · Look at a segment in the base; it acts like a mold. A triangular section uses it as a side or base, and a semicircular section uses it as a diameter. Once the side is known, the slice area differs only by a fixed coefficient, and the integral adds all slices.",
    "formulas": [
      {
        "latex": "V=\\int_a^b A(x)\\,\\mathrm{d}x",
        "note": "截面法的一般体积公式。 · General volume formula for the cross-section method."
      },
      {
        "latex": "A_{\\text{equilateral}}=\\dfrac{\\sqrt3}{4}s^{2}",
        "note": "边长为 \\(s\\) 的等边三角形面积。 · Area of an equilateral triangle with side \\(s\\)."
      },
      {
        "latex": "A_{\\text{iso, leg}}=\\dfrac{1}{2}s^{2}",
        "note": "直角边长为 \\(s\\) 的等腰直角三角形面积。 · Area of an isosceles right triangle with leg \\(s\\)."
      },
      {
        "latex": "A_{\\text{iso, hyp}}=\\dfrac{1}{4}s^{2}",
        "note": "斜边长为 \\(s\\) 的等腰直角三角形面积。 · Area of an isosceles right triangle with hypotenuse \\(s\\)."
      },
      {
        "latex": "A_{\\text{semicircle}}=\\dfrac{\\pi s^{2}}{8}",
        "note": "以 \\(s\\) 为直径的半圆面积。 · Area of a semicircle with diameter \\(s\\)."
      },
      {
        "latex": "A_{\\text{circle}}=\\dfrac{\\pi s^{2}}{4}",
        "note": "以 \\(s\\) 为直径的整圆面积，是半圆的两倍。 · Area of a full circle with diameter \\(s\\), twice the semicircle."
      },
      {
        "latex": "A=ks^{2}\\quad\\Longrightarrow\\quad V=k\\int_a^b s(x)^{2}\\,\\mathrm{d}x",
        "note": "把几何形状的面积系数 \\(k\\) 提到积分外。 · Factor the geometric area coefficient \\(k\\) out of the integral."
      },
      {
        "latex": "s(x)=f(x)-g(x)",
        "note": "截面底边等于底面上下边界之差。 · The base edge of a slice equals the difference of the base boundaries."
      }
    ],
    "derivationNotes": [
      {
        "from": "底面边界 · Base boundaries",
        "to": "截面边长 · Side length",
        "note": "在位置 \\(x\\) 处，两曲线之间的距离给出 \\(s(x)\\)。 · At position \\(x\\), the distance between the two curves gives \\(s(x)\\)."
      },
      {
        "from": "等边三角形 · Equilateral triangle",
        "to": "面积公式 · Area formula",
        "note": "高 \\(h=\\dfrac{\\sqrt3}{2}s\\)，故 \\(A=\\dfrac{1}{2}sh=\\dfrac{\\sqrt3}{4}s^2\\)。 · The altitude is \\(\\dfrac{\\sqrt3}{2}s\\), so \\(A=\\dfrac{\\sqrt3}{4}s^2\\)."
      },
      {
        "from": "半圆 · Semicircle",
        "to": "面积公式 · Area formula",
        "note": "半径 \\(r=\\dfrac{s}{2}\\)，半圆面积 \\(\\dfrac{1}{2}\\pi r^2=\\dfrac{\\pi s^2}{8}\\)。 · The radius is \\(\\dfrac{s}{2}\\), so the semicircle area is \\(\\dfrac{\\pi s^2}{8}\\)."
      },
      {
        "from": "截面面积 · Cross-sectional area",
        "to": "体积微元 · Volume element",
        "note": "\\(\\mathrm{d}V=A(x)\\,\\mathrm{d}x\\)，薄片厚度为 \\(\\mathrm{d}x\\)。 · \\(\\mathrm{d}V=A(x)\\,\\mathrm{d}x\\) for a slab of thickness \\(\\mathrm{d}x\\)."
      },
      {
        "from": "黎曼和 · Riemann sum",
        "to": "体积积分 · Volume integral",
        "note": "\\(\\sum A(x_i^*)\\Delta x\\to\\int_a^b A(x)\\,\\mathrm{d}x\\)。 · \\(\\sum A(x_i^*)\\Delta x\\to\\int_a^b A(x)\\,\\mathrm{d}x\\)."
      }
    ],
    "conditions": [
      "截面形状必须明确：等边三角形、等腰直角三角形（说明 \\(s\\) 是直角边还是斜边）、半圆（说明 \\(s\\) 是直径还是半径）。 · The shape must be specified: equilateral triangle, isosceles right triangle (state whether \\(s\\) is a leg or the hypotenuse), or semicircle (state whether \\(s\\) is the diameter or radius).",
      "边长 \\(s\\) 必须非负；曲线交叉时在交点处分段，取上减下或右减左。 · The side \\(s\\) must be nonnegative; split at intersections and use upper minus lower or right minus left.",
      "截面平面垂直于积分轴，且截面底边完全落在底面区域内。 · The slicing plane is perpendicular to the integration axis, and the base edge lies entirely in the base region.",
      "面积系数 \\(k\\) 只在形状与朝向固定时为常数；若截面相似但比例改变，\\(k\\) 仍可能为常数，但 \\(s\\) 随位置改变。 · The area coefficient \\(k\\) is constant only when the shape and orientation are fixed; if the shape remains similar, \\(k\\) may still be constant while \\(s\\) varies with position.",
      "半圆题中，“以 \\(s\\) 为直径”与“以 \\(s\\) 为半径”相差因子 4，必须按题意选择。 · In semicircle problems, “diameter \\(s\\)” and “radius \\(s\\)” differ by a factor of 4; choose according to the wording.",
      "三角形题中，若给的是底边与高，直接用 \\(\\dfrac{1}{2}bh\\)；若给的是边长，先由几何关系求高。 · For triangles, use \\(\\dfrac{1}{2}bh\\) directly when base and height are given; if a side is given, first find the height from the geometry.",
      "单位一致：\\(s\\) 与厚度使用同一长度单位，最终体积为长度立方。 · Units must match: \\(s\\) and the thickness use the same length unit, and the final volume is cubic length."
    ],
    "keyPoints": [
      "先写 \\(s=f-g\\)，再选面积公式；不要跳过边长直接套积分。 · Write \\(s=f-g\\) first, then choose the area formula; do not jump straight to an integral.",
      "等边三角形面积是 \\(\\dfrac{\\sqrt3}{4}s^2\\)，不是 \\(\\dfrac{1}{2}s^2\\)。 · The area of an equilateral triangle is \\(\\dfrac{\\sqrt3}{4}s^2\\), not \\(\\dfrac{1}{2}s^2\\).",
      "等腰直角三角形要看清 \\(s\\) 是直角边还是斜边：前者系数 \\(\\dfrac{1}{2}\\)，后者系数 \\(\\dfrac{1}{4}\\)。 · For an isosceles right triangle, check whether \\(s\\) is a leg or the hypotenuse: the coefficients are \\(\\dfrac{1}{2}\\) and \\(\\dfrac{1}{4}\\), respectively.",
      "半圆以 \\(s\\) 为直径时面积是 \\(\\dfrac{\\pi s^2}{8}\\)；整圆才是 \\(\\dfrac{\\pi s^2}{4}\\)。 · A semicircle with diameter \\(s\\) has area \\(\\dfrac{\\pi s^2}{8}\\); a full circle has \\(\\dfrac{\\pi s^2}{4}\\).",
      "把 \\(A=ks^2\\) 中的 \\(k\\) 提到积分外，能显著减少系数错误。 · Factor \\(k\\) out of \\(A=ks^2\\) to reduce coefficient errors.",
      "对称底面 \\(y=\\pm f(x)\\) 的 \\(s=2f(x)\\)，不是 \\(f(x)\\)。 · A symmetric base \\(y=\\pm f(x)\\) has \\(s=2f(x)\\), not \\(f(x)\\).",
      "曲线交叉时分段，保证每段 \\(s\\ge0\\)。 · Split at curve crossings to keep \\(s\\ge0\\) on each piece.",
      "最后用单位与“半圆是整圆一半”等关系检查数值。 · Check the result with units and relations such as “a semicircle is half a circle.”"
    ],
    "misconceptions": [
      "半圆以 \\(s\\) 为直径却用半径 \\(s\\)，得到 \\(\\dfrac{\\pi s^2}{2}\\)，比正确值大 4 倍。 · Using radius \\(s\\) for a semicircle whose diameter is \\(s\\), giving \\(\\dfrac{\\pi s^2}{2}\\), four times too large.",
      "把半圆面积写成 \\(\\dfrac{\\pi s^2}{4}\\)（那是整圆）或 \\(\\dfrac{\\pi s^2}{2}\\)（半径当作 \\(s\\)）。 · Writing \\(\\dfrac{\\pi s^2}{4}\\) (a full circle) or \\(\\dfrac{\\pi s^2}{2}\\) (radius taken as \\(s\\)) for a semicircle.",
      "等边三角形面积漏掉 \\(\\dfrac{\\sqrt3}{4}\\) 中的 \\(\\sqrt3\\)，写成 \\(\\dfrac{1}{2}s^2\\) 或 \\(\\dfrac{1}{4}s^2\\)。 · Omitting \\(\\sqrt3\\) from \\(\\dfrac{\\sqrt3}{4}s^2\\) and writing \\(\\dfrac{1}{2}s^2\\) or \\(\\dfrac{1}{4}s^2\\).",
      "等腰直角三角形不区分直角边与斜边，统一用 \\(\\dfrac{1}{2}s^2\\)。 · Not distinguishing leg from hypotenuse for an isosceles right triangle and always using \\(\\dfrac{1}{2}s^2\\).",
      "三角形面积忘记 \\(\\dfrac{1}{2}\\) 因子。 · Forgetting the factor \\(\\dfrac{1}{2}\\) in a triangle area.",
      "把 \\(s\\) 当作面积，忘记平方。 · Treating \\(s\\) as an area and forgetting to square it.",
      "切片垂直于 \\(y\\) 轴却仍对 \\(x\\) 积分，或把 \\(x\\) 的上下限用于 \\(y\\) 积分。 · Integrating with respect to \\(x\\) while slices are perpendicular to the \\(y\\)-axis, or using \\(x\\)-limits in a \\(y\\)-integral.",
      "曲线交叉时不分段，导致某段 \\(s<0\\) 并抵消体积。 · Not splitting where curves cross, so a negative \\(s\\) on one piece cancels volume."
    ],
    "examples": [
      {
        "title": "例 1 · 等边三角形 · Equilateral Triangles",
        "prompt": "底面由 \\(y=\\sqrt{x}\\) 与 \\(y=-\\sqrt{x}\\) 在 \\(0\\le x\\le4\\) 围成。垂直于 \\(x\\) 轴的截面是等边三角形，求体积。 · The base is bounded by \\(y=\\sqrt{x}\\) and \\(y=-\\sqrt{x}\\) on \\(0\\le x\\le4\\). Cross sections perpendicular to the \\(x\\)-axis are equilateral triangles. Find the volume.",
        "steps": [
          "边长 \\(s(x)=2\\sqrt{x}\\)。 · The side is \\(s(x)=2\\sqrt{x}\\).",
          "面积 \\(A(x)=\\dfrac{\\sqrt3}{4}s^2=\\dfrac{\\sqrt3}{4}\\cdot4x=\\sqrt3\\,x\\)。 · Area \\(A(x)=\\dfrac{\\sqrt3}{4}(2\\sqrt{x})^2=\\sqrt3\\,x\\).",
          "\\(V=\\int_0^4\\sqrt3\\,x\\,\\mathrm{d}x=\\sqrt3\\left[\\dfrac{x^2}{2}\\right]_0^4=8\\sqrt3\\approx13.856\\)。 · \\(V=\\int_0^4\\sqrt3\\,x\\,\\mathrm{d}x=8\\sqrt3\\approx13.856\\).",
          "单位检查：\\(s\\) 从 0 增到 4，面积随 \\(s^2\\) 增长，体积为正。 · Unit check: \\(s\\) grows from 0 to 4, the area grows like \\(s^2\\), and the volume is positive."
        ],
        "solution": "\\(V=8\\sqrt3\\approx13.856\\) 立方单位。 · \\(V=8\\sqrt3\\approx13.856\\) cubic units.",
        "solutionLatex": "V=\\int_0^4\\dfrac{\\sqrt3}{4}(2\\sqrt{x})^{2}\\,\\mathrm{d}x=8\\sqrt3"
      },
      {
        "title": "例 2 · 半圆与整圆 · Semicircles and Circles",
        "prompt": "取与例 1 相同的底面。分别求：(a) 截面是以 \\(s\\) 为直径的半圆；(b) 截面是以 \\(s\\) 为直径的整圆。 · Use the same base as Example 1. Find the volume when (a) each cross section is a semicircle with diameter \\(s\\); (b) each is a full circle with diameter \\(s\\).",
        "steps": [
          "(a) \\(A(x)=\\dfrac{\\pi}{8}s^2=\\dfrac{\\pi}{8}\\cdot4x=\\dfrac{\\pi x}{2}\\)。 · (a) \\(A(x)=\\dfrac{\\pi}{8}(2\\sqrt{x})^2=\\dfrac{\\pi x}{2}\\).",
          "\\(V=\\int_0^4\\dfrac{\\pi x}{2}\\,\\mathrm{d}x=\\dfrac{\\pi}{2}\\cdot8=4\\pi\\approx12.566\\)。 · \\(V=\\int_0^4\\dfrac{\\pi x}{2}\\,\\mathrm{d}x=4\\pi\\approx12.566\\).",
          "(b) 整圆面积是半圆的两倍：\\(A(x)=\\dfrac{\\pi}{4}s^2=\\pi x\\)，故 \\(V=8\\pi\\approx25.133\\)。 · (b) A full circle has twice the semicircle area: \\(A(x)=\\dfrac{\\pi}{4}s^2=\\pi x\\), so \\(V=8\\pi\\approx25.133\\).",
          "对比：同一底面下，整圆体积正好是半圆体积的 2 倍，符合“半圆是整圆一半”的几何事实。 · Comparison: for the same base, the full-circle volume is exactly twice the semicircle volume, consistent with “a semicircle is half a circle.”"
        ],
        "solution": "(a) \\(4\\pi\\approx12.566\\)；(b) \\(8\\pi\\approx25.133\\) 立方单位。 · (a) \\(4\\pi\\); (b) \\(8\\pi\\) cubic units.",
        "solutionLatex": "V_{\\text{semi}}=4\\pi,\\qquad V_{\\text{circle}}=8\\pi"
      },
      {
        "title": "例 3 · 直角边与斜边 · Leg versus Hypotenuse",
        "prompt": "底面由 \\(y=\\sqrt{x}\\) 与 \\(y=0\\) 在 \\(0\\le x\\le4\\) 围成。截面是等腰直角三角形，底边 \\(s\\) 落在底面内。分别求 \\(s\\) 为直角边与 \\(s\\) 为斜边时的体积。 · The base is bounded by \\(y=\\sqrt{x}\\) and \\(y=0\\) on \\(0\\le x\\le4\\). Cross sections are isosceles right triangles with base edge \\(s\\) in the base region. Find the volume when \\(s\\) is a leg and when \\(s\\) is the hypotenuse.",
        "steps": [
          "边长 \\(s(x)=\\sqrt{x}\\)。 · The side is \\(s(x)=\\sqrt{x}\\).",
          "若 \\(s\\) 是直角边：\\(A=\\dfrac{1}{2}s^2=\\dfrac{x}{2}\\)，\\(V=\\int_0^4\\dfrac{x}{2}\\,\\mathrm{d}x=4\\)。 · If \\(s\\) is a leg: \\(A=\\dfrac{1}{2}x\\), so \\(V=\\int_0^4\\dfrac{x}{2}\\,\\mathrm{d}x=4\\).",
          "若 \\(s\\) 是斜边：\\(A=\\dfrac{1}{4}s^2=\\dfrac{x}{4}\\)，\\(V=\\int_0^4\\dfrac{x}{4}\\,\\mathrm{d}x=2\\)。 · If \\(s\\) is the hypotenuse: \\(A=\\dfrac{1}{4}x\\), so \\(V=\\int_0^4\\dfrac{x}{4}\\,\\mathrm{d}x=2\\).",
          "两者相差因子 2；读题时必须确认 \\(s\\) 的角色，不能默认。 · The volumes differ by a factor of 2; confirm the role of \\(s\\) from the wording instead of assuming."
        ],
        "solution": "直角边情形 \\(V=4\\)；斜边情形 \\(V=2\\) 立方单位。 · Leg case \\(V=4\\); hypotenuse case \\(V=2\\) cubic units.",
        "solutionLatex": "V_{\\text{leg}}=\\int_0^4\\dfrac{x}{2}\\,\\mathrm{d}x=4,\\qquad V_{\\text{hyp}}=\\int_0^4\\dfrac{x}{4}\\,\\mathrm{d}x=2"
      },
      {
        "title": "例 4 · 两曲线之间的半圆 · Semicircles between Curves",
        "prompt": "底面由 \\(y=x\\) 与 \\(y=x^2\\) 在 \\(0\\le x\\le1\\) 围成。垂直于 \\(x\\) 轴的截面是以两曲线间线段为直径的半圆，求体积。 · The base is bounded by \\(y=x\\) and \\(y=x^2\\) on \\(0\\le x\\le1\\). Cross sections perpendicular to the \\(x\\)-axis are semicircles with diameters equal to the segment between the curves. Find the volume.",
        "steps": [
          "在 \\((0,1)\\) 上 \\(x>x^2\\)，所以 \\(s(x)=x-x^2\\)。 · On \\((0,1)\\), \\(x>x^2\\), so \\(s(x)=x-x^2\\).",
          "\\(A(x)=\\dfrac{\\pi}{8}(x-x^2)^2\\)。 · \\(A(x)=\\dfrac{\\pi}{8}(x-x^2)^2\\).",
          "\\(\\int_0^1(x-x^2)^2\\,\\mathrm{d}x=\\dfrac{1}{30}\\)，所以 \\(V=\\dfrac{\\pi}{8}\\cdot\\dfrac{1}{30}=\\dfrac{\\pi}{240}\\approx0.01309\\)。 · \\(\\int_0^1(x-x^2)^2\\,\\mathrm{d}x=\\dfrac{1}{30}\\), so \\(V=\\dfrac{\\pi}{240}\\approx0.01309\\).",
          "同底面的正方形截面体积为 \\(\\dfrac{1}{30}\\approx0.0333\\)；半圆系数 \\(\\dfrac{\\pi}{8}\\approx0.393\\)，体积约为正方形的 39%。 · The square-section volume on the same base is \\(\\dfrac{1}{30}\\approx0.0333\\); the semicircle coefficient is \\(\\dfrac{\\pi}{8}\\approx0.393\\), so the volume is about 39% of the square-section volume."
        ],
        "solution": "\\(V=\\dfrac{\\pi}{240}\\approx0.01309\\) 立方单位。 · \\(V=\\dfrac{\\pi}{240}\\approx0.01309\\) cubic units.",
        "solutionLatex": "V=\\dfrac{\\pi}{8}\\int_0^1(x-x^2)^{2}\\,\\mathrm{d}x=\\dfrac{\\pi}{240}"
      },
      {
        "title": "例 5 · 正六边形截面 · Regular Hexagon Sections",
        "prompt": "底面仍为 \\(y=x\\) 与 \\(y=x^2\\) 在 \\(0\\le x\\le1\\)。截面是边长为 \\(s\\) 的正六边形，求体积，并与正方形、半圆结果比较。 · Use the base bounded by \\(y=x\\) and \\(y=x^2\\) on \\(0\\le x\\le1\\). Cross sections are regular hexagons of side \\(s\\). Find the volume and compare with the square and semicircle results.",
        "steps": [
          "正六边形可分成 6 个边长为 \\(s\\) 的等边三角形，面积 \\(A=6\\cdot\\dfrac{\\sqrt3}{4}s^2=\\dfrac{3\\sqrt3}{2}s^2\\)。 · A regular hexagon splits into 6 equilateral triangles of side \\(s\\), so \\(A=6\\cdot\\dfrac{\\sqrt3}{4}s^2=\\dfrac{3\\sqrt3}{2}s^2\\).",
          "代入 \\(s=x-x^2\\)：\\(A(x)=\\dfrac{3\\sqrt3}{2}(x-x^2)^2\\)。 · Substitute \\(s=x-x^2\\): \\(A(x)=\\dfrac{3\\sqrt3}{2}(x-x^2)^2\\).",
          "\\(V=\\dfrac{3\\sqrt3}{2}\\int_0^1(x-x^2)^2\\,\\mathrm{d}x=\\dfrac{3\\sqrt3}{2}\\cdot\\dfrac{1}{30}=\\dfrac{\\sqrt3}{20}\\approx0.0866\\)。 · \\(V=\\dfrac{3\\sqrt3}{2}\\cdot\\dfrac{1}{30}=\\dfrac{\\sqrt3}{20}\\approx0.0866\\).",
          "比较：正方形 \\(\\dfrac{1}{30}\\approx0.0333\\)，半圆 \\(\\dfrac{\\pi}{240}\\approx0.0131\\)，正六边形 \\(\\dfrac{\\sqrt3}{20}\\approx0.0866\\)；系数越大，同底面下体积越大。 · Comparison: square \\(\\approx0.0333\\), semicircle \\(\\approx0.0131\\), hexagon \\(\\approx0.0866\\); a larger coefficient gives a larger volume for the same base."
        ],
        "solution": "\\(V=\\dfrac{\\sqrt3}{20}\\approx0.0866\\) 立方单位。 · \\(V=\\dfrac{\\sqrt3}{20}\\approx0.0866\\) cubic units.",
        "solutionLatex": "V=\\dfrac{3\\sqrt3}{2}\\int_0^1(x-x^2)^{2}\\,\\mathrm{d}x=\\dfrac{\\sqrt3}{20}"
      }
    ],
    "examTips": [
      "先写 \\(s=f-g\\)，再写面积公式；把 \\(k\\) 提到积分外。 · Write \\(s=f-g\\) first, then the area formula; factor \\(k\\) out of the integral.",
      "读题时圈出截面形状与 \\(s\\) 的角色：直径、直角边、斜边还是底边。 · Circle the shape and the role of \\(s\\): diameter, leg, hypotenuse, or base.",
      "半圆以 \\(s\\) 为直径用 \\(\\dfrac{\\pi s^2}{8}\\)；若题目说半径为 \\(s\\)，则用 \\(\\dfrac{\\pi s^2}{2}\\)。 · For a semicircle with diameter \\(s\\), use \\(\\dfrac{\\pi s^2}{8}\\); if the radius is \\(s\\), use \\(\\dfrac{\\pi s^2}{2}\\).",
      "等边三角形用 \\(\\dfrac{\\sqrt3}{4}s^2\\)，并记住高为 \\(\\dfrac{\\sqrt3}{2}s\\)，可现场推导。 · Use \\(\\dfrac{\\sqrt3}{4}s^2\\) for an equilateral triangle and remember the altitude \\(\\dfrac{\\sqrt3}{2}s\\) so you can derive it on the spot.",
      "等腰直角三角形先确认 \\(s\\) 是直角边还是斜边，系数分别为 \\(\\dfrac{1}{2}\\) 与 \\(\\dfrac{1}{4}\\)。 · For an isosceles right triangle, confirm whether \\(s\\) is a leg or the hypotenuse; the coefficients are \\(\\dfrac{1}{2}\\) and \\(\\dfrac{1}{4}\\).",
      "曲线交叉时分段，保证每段 \\(s\\ge0\\)；否则体积可能被抵消。 · Split at curve crossings to keep \\(s\\ge0\\); otherwise volumes can cancel.",
      "最后用单位与“同底面下不同形状体积比例”检查答案量级。 · Check the order of magnitude with units and with volume ratios for different shapes on the same base."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.7",
        "title": "截面法：正方形与矩形",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.9",
        "title": "圆盘法",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：8.7 把截面面积写成 \\(s^2\\) 或 \\(hs\\)；本节只是换用三角形与半圆的面积公式。 · Upstream: 8.7 writes slice areas as \\(s^2\\) or \\(hs\\); this topic simply replaces them with triangle and semicircle formulas.",
      "同单元：8.9–8.12 的圆盘与垫圈截面是圆形或环形，半圆截面的 \\(\\dfrac{\\pi s^2}{8}\\) 是理解圆面积的桥梁。 · Within the unit: disk and washer sections in 8.9–8.12 are circles or rings; the semicircle formula \\(\\dfrac{\\pi s^2}{8}\\) bridges to circle areas.",
      "应用：建筑中的三角形梁、半圆拱与正多边形柱都可视为已知截面立体，体积由截面面积沿长度累积。 · Applications: triangular beams, semicircular arches, and regular-polygon columns are solids with known cross sections whose volumes accumulate slice area along a length."
    ],
    "intuitionDetailed": "把底面想成一条条“线段”的集合。取其中一条线段，三角形截面把它当作一边并向上“长”成三角形，半圆截面把它当作直径并向上“鼓”成半圆。因为所有截面形状相同，面积总是 \\(k s^2\\)，只是 \\(s\\) 随位置变化。于是体积就是 \\(k\\int s^2\\,\\mathrm{d}x\\)。半圆最容易错：\\(s\\) 是直径，半径只有 \\(\\dfrac{s}{2}\\)，所以面积是 \\(\\dfrac{1}{2}\\pi\\left(\\dfrac{s}{2}\\right)^2=\\dfrac{\\pi s^2}{8}\\)，而不是 \\(\\dfrac{\\pi s^2}{2}\\)。 · Think of the base as a collection of segments. Pick one segment: a triangular section uses it as a side and grows upward into a triangle, while a semicircular section uses it as a diameter and bulges upward into a semicircle. Because all sections have the same shape, the area is always \\(k s^2\\), with only \\(s\\) varying. The volume is therefore \\(k\\int s^2\\,\\mathrm{d}x\\). Semicircles are the easiest place to err: \\(s\\) is the diameter, so the radius is only \\(\\dfrac{s}{2}\\), and the area is \\(\\dfrac{1}{2}\\pi\\left(\\dfrac{s}{2}\\right)^2=\\dfrac{\\pi s^2}{8}\\), not \\(\\dfrac{\\pi s^2}{2}\\).",
    "development": [
      "回顾先修：复习 8.7 截面法，确认 \\(V=\\int A\\,\\mathrm{d}x\\) 与边长 \\(s=f-g\\)。 · Review 8.7: confirm \\(V=\\int A\\,\\mathrm{d}x\\) and the side \\(s=f-g\\).",
      "识别形状：把题目中的截面形状、\\(s\\) 的角色与朝向写清楚。 · Identify the shape: state the cross-section shape, the role of \\(s\\), and its orientation.",
      "推导面积：从基本几何（三角形高、半圆半径）推导 \\(A=ks^2\\)，而不是死记。 · Derive the area: obtain \\(A=ks^2\\) from basic geometry (triangle altitude, semicircle radius) rather than memorizing blindly.",
      "建立积分：代入 \\(s(x)\\)，把 \\(k\\) 提到积分外，写出上下限。 · Set up the integral: substitute \\(s(x)\\), factor \\(k\\) out, and write the limits.",
      "求值与检验：完成积分，用单位、同底面形状比例与极限情形检查。 · Evaluate and check: complete the integral and verify with units, shape ratios on the same base, and limiting cases.",
      "迁移：换成正六边形或圆等“其他几何截面”，重复“求边长—求面积—积分”的流程。 · Transfer: switch to regular hexagons, circles, or other geometric sections and repeat “side—area—integrate.”"
    ],
    "checks": [
      "能否不看笔记写出等边三角形、半圆（直径 \\(s\\)）与等腰直角三角形（直角边 \\(s\\)）的面积？ · Can you write the areas of an equilateral triangle, a semicircle with diameter \\(s\\), and an isosceles right triangle with leg \\(s\\) without notes?",
      "若半圆题把直径误当半径，体积会变成正确值的几倍？ · If a semicircle problem mistakes the diameter for the radius, by what factor does the volume change?",
      "等腰直角三角形的 \\(s\\) 从直角边改成斜边，面积系数如何变化？ · How does the area coefficient change when \\(s\\) switches from a leg to the hypotenuse in an isosceles right triangle?",
      "给定底面 \\(y=f(x)\\) 与 \\(y=g(x)\\)，能否在图上标出半圆的直径并写出 \\(s\\)？ · Given a base between \\(y=f(x)\\) and \\(y=g(x)\\), can you label the semicircle's diameter on the figure and write \\(s\\)?",
      "正六边形截面的面积系数是多少？能否由 6 个等边三角形推出？ · What is the area coefficient for a regular hexagon, and can you derive it from 6 equilateral triangles?",
      "同底面下，正方形、半圆、正六边形截面的体积大小顺序是什么？为什么？ · For the same base, what is the order of volumes for square, semicircle, and regular-hexagon sections, and why?"
    ],
    "vocabulary": [
      {
        "termZh": "等边三角形截面",
        "termEn": "equilateral triangle cross section",
        "defZh": "边长均为 \\(s\\) 的三角形截面，面积 \\(\\dfrac{\\sqrt3}{4}s^2\\)。",
        "defEn": "A triangular cross section with all sides \\(s\\), area \\(\\dfrac{\\sqrt3}{4}s^2\\)."
      },
      {
        "termZh": "等腰直角三角形截面",
        "termEn": "isosceles right triangle cross section",
        "defZh": "两直角边相等或斜边给定的三角形截面；面积系数取决于 \\(s\\) 的角色。",
        "defEn": "A triangular cross section with equal legs or a given hypotenuse; the area coefficient depends on the role of \\(s\\)."
      },
      {
        "termZh": "半圆截面",
        "termEn": "semicircular cross section",
        "defZh": "以 \\(s\\) 为直径的半圆，面积 \\(\\dfrac{\\pi s^2}{8}\\)。",
        "defEn": "A semicircle with diameter \\(s\\), area \\(\\dfrac{\\pi s^2}{8}\\)."
      },
      {
        "termZh": "直径",
        "termEn": "diameter",
        "defZh": "过圆心且两端在圆上的线段；半圆题中常作为 \\(s\\)。",
        "defEn": "A segment through the center with endpoints on the circle; often the \\(s\\) in semicircle problems."
      },
      {
        "termZh": "高",
        "termEn": "altitude",
        "defZh": "三角形从顶点到底边的垂直距离，用于 \\(A=\\dfrac{1}{2}bh\\)。",
        "defEn": "The perpendicular distance from a vertex to the base of a triangle, used in \\(A=\\dfrac{1}{2}bh\\)."
      },
      {
        "termZh": "截面面积",
        "termEn": "cross-sectional area",
        "defZh": "\\(A(x)=k s(x)^2\\)，由截面形状与边长共同决定。",
        "defEn": "\\(A(x)=k s(x)^2\\), determined by the shape and the side length."
      },
      {
        "termZh": "面积系数",
        "termEn": "area coefficient",
        "defZh": "\\(A=ks^2\\) 中的常数 \\(k\\)，如 \\(\\dfrac{\\sqrt3}{4}\\) 或 \\(\\dfrac{\\pi}{8}\\)。",
        "defEn": "The constant \\(k\\) in \\(A=ks^2\\), such as \\(\\dfrac{\\sqrt3}{4}\\) or \\(\\dfrac{\\pi}{8}\\)."
      },
      {
        "termZh": "体积",
        "termEn": "volume",
        "defZh": "\\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\)，截面面积沿轴的累积。",
        "defEn": "\\(V=\\int_a^b A(x)\\,\\mathrm{d}x\\), the accumulation of cross-sectional area along the axis."
      }
    ]
  },
  "8.9": {
    "id": "math/calc-u8/8.9",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.9",
    "titleZh": "圆盘法",
    "titleEn": "Volume with Disc Method: Revolving Around the x- or y-Axis",
    "layer": "ap",
    "summary": "圆盘法 · Volume with Disc Method: Revolving Around the x- or y-Axis",
    "learningObjectives": [
      "能陈述「圆盘法」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Volume with Disc Method: Revolving Around the x- or y-Axis：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「圆盘法」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "圆盘法（Volume with Disc Method: Revolving Around the x- or y-Axis）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「圆盘法」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "V=\\pi\\int_a^b[R(x)]^{2}\\,\\mathrm{d}x",
        "note": "圆盘法：截面是半径为 R(x) 的圆。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「圆盘法」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 8.9「圆盘法」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「圆盘法」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「圆盘法」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「圆盘法」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「圆盘法」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「圆盘法」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.8",
        "title": "已知截面体积",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.10",
        "title": "圆盘法其他轴",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "solid-revolution",
        "title": "旋转体体积"
      }
    ],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「圆盘法」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「圆盘法」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「圆盘法」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "圆盘法",
        "termEn": "disc method",
        "defZh": "把旋转体切成垂直于转轴的圆盘，再对圆盘体积积分。",
        "defEn": "Slicing a solid of revolution into discs perpendicular to the axis, then integrating their volumes."
      },
      {
        "termZh": "旋转体",
        "termEn": "solid of revolution",
        "defZh": "平面区域绕一条轴旋转形成的立体。",
        "defEn": "A solid formed by revolving a plane region about an axis."
      },
      {
        "termZh": "半径函数 \\(R(x)\\)",
        "termEn": "radius function",
        "defZh": "圆盘半径等于曲线到转轴的距离。",
        "defEn": "The disc radius, equal to the distance from the curve to the axis of revolution."
      },
      {
        "termZh": "圆盘体积元",
        "termEn": "disc volume element",
        "defZh": "\\(\\pi[R(x)]^{2}\\,\\mathrm{d}x\\) 是一个薄圆盘的体积。",
        "defEn": "The volume \\(\\pi[R(x)]^{2}\\,\\mathrm{d}x\\) of one thin disc."
      },
      {
        "termZh": "转轴",
        "termEn": "axis of revolution",
        "defZh": "区域绕其旋转的直线。",
        "defEn": "The line about which the region is revolved."
      },
      {
        "termZh": "垂直切片",
        "termEn": "perpendicular slice",
        "defZh": "切片方向垂直于转轴，厚度为 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\)。",
        "defEn": "A slice perpendicular to the axis, with thickness \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\)."
      }
    ]
  },
  "8.10": {
    "id": "math/calc-u8/8.10",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.10",
    "titleZh": "圆盘法其他轴",
    "titleEn": "Volume with Disc Method: Revolving Around Other Axes",
    "layer": "ap",
    "summary": "圆盘法其他轴：半径是曲线到任意水平或垂直旋转轴的垂直距离，而不是曲线到坐标轴的距离。 · Disc method about other axes: the radius is the perpendicular distance from the curve to any horizontal or vertical axis of rotation, not the distance to a coordinate axis.",
    "learningObjectives": [
      "能识别旋转轴 \\(y=k\\) 或 \\(x=h\\)，并写出圆盘半径 \\(R=|f(x)-k|\\) 或 \\(R=|g(y)-h|\\)。 · Identify an axis \\(y=k\\) or \\(x=h\\) and write the disk radius \\(R=|f(x)-k|\\) or \\(R=|g(y)-h|\\).",
      "能根据旋转轴是水平还是垂直选择 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\)，并确定积分上下限。 · Choose \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\) according to whether the axis is horizontal or vertical, and determine the limits.",
      "能把曲线解成 \\(x=g(y)\\) 以处理绕竖直线 \\(x=h\\) 的旋转。 · Solve the curve as \\(x=g(y)\\) to handle revolution about a vertical line \\(x=h\\).",
      "能判断何时圆盘法适用、何时需要改用垫圈法。 · Decide when the disk method applies and when the washer method is required.",
      "能处理旋转轴在区域上方、下方、左侧或右侧的各种位置，并用 \\(k=0\\) 或 \\(h=0\\) 检查公式。 · Handle axes above, below, left, or right of the region, and check formulas by setting \\(k=0\\) or \\(h=0\\).",
      "能用图像、单位与特例估算旋转体体积并检查答案合理性。 · Estimate and check volumes of revolution using graphs, units, and special cases."
    ],
    "essentialKnowledge": [
      "圆盘法把旋转体切成垂直于旋转轴的薄圆盘，体积微元为 \\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\)（水平轴）或 \\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}y\\)（垂直轴）。 · The disk method cuts a solid of revolution into thin disks perpendicular to the axis, with volume element \\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\) for a horizontal axis or \\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}y\\) for a vertical axis.",
      "绕水平线 \\(y=k\\) 旋转：在位置 \\(x\\) 处，半径是曲线到直线的垂直距离 \\(R(x)=|f(x)-k|\\)，体积 \\(V=\\pi\\int_a^b[f(x)-k]^2\\,\\mathrm{d}x\\)。 · About a horizontal line \\(y=k\\): at position \\(x\\), the radius is the perpendicular distance \\(R(x)=|f(x)-k|\\), and \\(V=\\pi\\int_a^b[f(x)-k]^2\\,\\mathrm{d}x\\).",
      "绕竖直线 \\(x=h\\) 旋转：把边界解成 \\(x=g(y)\\)，半径为 \\(R(y)=|g(y)-h|\\)，体积 \\(V=\\pi\\int_c^d[g(y)-h]^2\\,\\mathrm{d}y\\)。 · About a vertical line \\(x=h\\): solve the boundary as \\(x=g(y)\\), so \\(R(y)=|g(y)-h|\\) and \\(V=\\pi\\int_c^d[g(y)-h]^2\\,\\mathrm{d}y\\).",
      "半径必须量到旋转轴，而不是量到 \\(x\\) 轴或 \\(y\\) 轴；轴平移多少，半径就平移多少。 · The radius must be measured to the axis of rotation, not to the \\(x\\)- or \\(y\\)-axis; shifting the axis shifts the radius by the same amount.",
      "若区域完全在轴的上方且 \\(f(x)\\ge k\\)，可写 \\(R=f(x)-k\\)；若在下方，写 \\(R=k-f(x)\\)。平方后符号无关，但半径表达式必须非负。 · If the region lies above the axis and \\(f(x)\\ge k\\), write \\(R=f(x)-k\\); if below, write \\(R=k-f(x)\\). The square removes the sign, but the radius expression must be nonnegative.",
      "圆盘法要求旋转体截面是实心圆盘，即区域紧贴旋转轴或旋转轴是区域边界；若区域与轴之间有间隙，截面是圆环，应改用垫圈法。 · The disk method requires solid disk cross sections, meaning the region touches the axis or the axis is a boundary; if a gap separates the region from the axis, the cross section is a ring and the washer method is required.",
      "绕水平轴用 \\(x\\) 作为积分变量，上下限是区域在 \\(x\\) 轴上的投影；绕垂直轴用 \\(y\\) 作为积分变量，上下限是区域在 \\(y\\) 轴上的投影。 · About a horizontal axis, integrate with respect to \\(x\\) and use the region's projection on the \\(x\\)-axis; about a vertical axis, integrate with respect to \\(y\\) and use its projection on the \\(y\\)-axis.",
      "当 \\(k=0\\) 时，\\(V=\\pi\\int[f(x)]^2\\,\\mathrm{d}x\\)，回到绕 \\(x\\) 轴的标准圆盘法；这可用于检查公式是否写对。 · When \\(k=0\\), \\(V=\\pi\\int[f(x)]^2\\,\\mathrm{d}x\\), recovering the standard disk method about the \\(x\\)-axis; use this to check the formula.",
      "旋转轴可以在区域上方、下方、左侧或右侧，只要区域与轴不相交且截面为实心圆盘即可。 · The axis may lie above, below, left, or right of the region, as long as it does not pass through the region and the cross sections are solid disks.",
      "单位检查：\\(R^2\\) 是长度平方，\\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\) 是长度，体积单位为长度立方；\\(\\pi\\) 无量纲。 · Unit check: \\(R^2\\) is length squared and \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\) is length, so volume is cubic length; \\(\\pi\\) is dimensionless.",
      "对称性可简化计算，但轴平移后对称中心也随之平移；不要直接把原点对称性套到 \\(y=k\\) 或 \\(x=h\\)。 · Symmetry can simplify computation, but shifting the axis shifts the center of symmetry; do not apply origin symmetry directly to \\(y=k\\) or \\(x=h\\).",
      "旋转体体积为正；若积分为负，通常是半径表达式或上下限写错，而不是体积本身为负。 · A volume of revolution is positive; a negative integral usually signals a wrong radius expression or wrong limits, not a negative volume."
    ],
    "definition": "圆盘法把平面区域绕一条直线旋转，所得立体用垂直于旋转轴的平面切成薄圆盘。若旋转轴是水平线 \\(y=k\\)，在位置 \\(x\\) 处圆盘半径为曲线到该直线的垂直距离 \\(R(x)=|f(x)-k|\\)，则 \\(V=\\pi\\int_a^b[f(x)-k]^2\\,\\mathrm{d}x\\)。若旋转轴是竖直线 \\(x=h\\)，先把边界解成 \\(x=g(y)\\)，半径为 \\(R(y)=|g(y)-h|\\)，则 \\(V=\\pi\\int_c^d[g(y)-h]^2\\,\\mathrm{d}y\\)。圆盘法只适用于截面为实心圆盘的情形；若区域与轴之间有间隙，应改用垫圈法。 · The disk method revolves a planar region about a line and slices the resulting solid into thin disks perpendicular to the axis. For a horizontal axis \\(y=k\\), the disk radius at position \\(x\\) is the perpendicular distance from the curve to the line, \\(R(x)=|f(x)-k|\\), so \\(V=\\pi\\int_a^b[f(x)-k]^2\\,\\mathrm{d}x\\). For a vertical axis \\(x=h\\), first solve the boundary as \\(x=g(y)\\), giving \\(R(y)=|g(y)-h|\\) and \\(V=\\pi\\int_c^d[g(y)-h]^2\\,\\mathrm{d}y\\). The disk method applies only when cross sections are solid disks; if a gap separates the region from the axis, use the washer method.",
    "intuition": "把旋转轴想成烤肉叉：区域绕叉旋转，每一片垂直于叉的截面都是一个圆盘；圆盘半径就是区域边界到叉的垂直距离，而不是到地面的距离。 · Think of the axis as a rotisserie skewer: as the region turns around it, each slice perpendicular to the skewer is a disk. The radius is the perpendicular distance from the region's boundary to the skewer, not the distance to the ground.",
    "formulas": [
      {
        "latex": "V=\\pi\\int_a^b[f(x)-k]^{2}\\,\\mathrm{d}x",
        "note": "绕水平线 \\(y=k\\) 的圆盘法。 · Disk method about the horizontal line \\(y=k\\)."
      },
      {
        "latex": "V=\\pi\\int_c^d[g(y)-h]^{2}\\,\\mathrm{d}y",
        "note": "绕竖直线 \\(x=h\\) 的圆盘法，需把边界解成 \\(x=g(y)\\)。 · Disk method about the vertical line \\(x=h\\), with the boundary solved as \\(x=g(y)\\)."
      },
      {
        "latex": "R(x)=|f(x)-k|",
        "note": "水平轴情形：半径是曲线到 \\(y=k\\) 的垂直距离。 · Horizontal axis: the radius is the perpendicular distance from the curve to \\(y=k\\)."
      },
      {
        "latex": "R(y)=|g(y)-h|",
        "note": "垂直轴情形：半径是曲线到 \\(x=h\\) 的水平距离。 · Vertical axis: the radius is the horizontal distance from the curve to \\(x=h\\)."
      },
      {
        "latex": "\\mathrm{d}V=\\pi R^{2}\\,\\mathrm{d}x",
        "note": "水平轴薄圆盘的体积微元。 · Volume element of a thin disk for a horizontal axis."
      },
      {
        "latex": "\\mathrm{d}V=\\pi R^{2}\\,\\mathrm{d}y",
        "note": "垂直轴薄圆盘的体积微元。 · Volume element of a thin disk for a vertical axis."
      },
      {
        "latex": "V=\\pi\\int_a^b[f(x)]^{2}\\,\\mathrm{d}x",
        "note": "当 \\(k=0\\) 时退化为绕 \\(x\\) 轴的标准圆盘法。 · When \\(k=0\\), this reduces to the standard disk method about the \\(x\\)-axis."
      }
    ],
    "derivationNotes": [
      {
        "from": "区域与旋转轴 · Region and axis",
        "to": "半径 · Radius",
        "note": "在切片位置，半径是边界曲线到旋转轴的垂直距离 \\(R=|f-k|\\)。 · At the slice position, the radius is the perpendicular distance \\(R=|f-k|\\) from the boundary curve to the axis."
      },
      {
        "from": "半径 · Radius",
        "to": "圆盘面积 · Disk area",
        "note": "圆盘面积为 \\(\\pi R^2\\)，其中 \\(R\\) 要整体平方。 · The disk area is \\(\\pi R^2\\), with the whole radius squared."
      },
      {
        "from": "圆盘面积 · Disk area",
        "to": "体积微元 · Volume element",
        "note": "\\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\) 或 \\(\\pi R^2\\,\\mathrm{d}y\\)。 · \\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\) or \\(\\pi R^2\\,\\mathrm{d}y\\)."
      },
      {
        "from": "薄圆盘叠加 · Stacked disks",
        "to": "定积分 · Definite integral",
        "note": "把所有圆盘体积相加并取极限得 \\(V=\\pi\\int R^2\\,\\mathrm{d}x\\)。 · Add all disk volumes and take the limit to get \\(V=\\pi\\int R^2\\,\\mathrm{d}x\\)."
      },
      {
        "from": "旋转轴位置 · Axis position",
        "to": "积分变量 · Integration variable",
        "note": "水平轴用 \\(\\mathrm{d}x\\)；垂直轴用 \\(\\mathrm{d}y\\)，并把曲线解成 \\(x=g(y)\\)。 · A horizontal axis uses \\(\\mathrm{d}x\\); a vertical axis uses \\(\\mathrm{d}y\\) and requires solving \\(x=g(y)\\)."
      },
      {
        "from": "平移检查 · Shift check",
        "to": "标准情形 · Standard case",
        "note": "令 \\(k=0\\) 或 \\(h=0\\)，公式应回到绕坐标轴的标准圆盘法。 · Set \\(k=0\\) or \\(h=0\\); the formula should return to the standard coordinate-axis disk method."
      }
    ],
    "conditions": [
      "旋转轴是水平线 \\(y=k\\) 或竖直线 \\(x=h\\)，且区域不穿过旋转轴。 · The axis is a horizontal line \\(y=k\\) or a vertical line \\(x=h\\), and the region does not cross the axis.",
      "圆盘法要求截面为实心圆盘：区域必须紧贴旋转轴，或旋转轴是区域的边界；否则用垫圈法。 · The disk method requires solid disk cross sections: the region must touch the axis or have the axis as a boundary; otherwise use the washer method.",
      "绕水平轴时用 \\(x\\) 积分，上下限是区域在 \\(x\\) 方向的投影；绕垂直轴时用 \\(y\\) 积分。 · For a horizontal axis integrate in \\(x\\), with limits from the region's \\(x\\)-projection; for a vertical axis integrate in \\(y\\).",
      "半径表达式必须非负；可写绝对值或先判断曲线在轴的上方/下方。 · The radius expression must be nonnegative; write an absolute value or determine whether the curve lies above or below the axis.",
      "曲线在积分区间内不自交；若自交，需拆分区域并分别旋转。 · The curve does not self-intersect on the interval; if it does, split the region and revolve each piece separately.",
      "\\(k\\) 或 \\(h\\) 是常数，不能随积分变量变化；若旋转轴本身是曲线，则不是本节的圆盘法。 · \\(k\\) or \\(h\\) is a constant, not a function of the integration variable; an axis that is itself a curve is not the disk method of this topic.",
      "单位一致：半径与厚度使用同一长度单位，最终体积为长度立方。 · Units must match: radius and thickness use the same length unit, and the final volume is cubic length."
    ],
    "keyPoints": [
      "半径是“曲线到旋转轴”的距离，先做减法再平方；不要直接用 \\(f(x)\\) 除非轴就是 \\(x\\) 轴。 · The radius is the distance from the curve to the axis: subtract first, then square; do not use \\(f(x)\\) unless the axis is the \\(x\\)-axis.",
      "绕 \\(y=k\\) 时 \\(R=f(x)-k\\)（或 \\(k-f(x)\\)）；绕 \\(x=h\\) 时 \\(R=g(y)-h\\)。 · About \\(y=k\\), \\(R=f(x)-k\\) (or \\(k-f(x)\\)); about \\(x=h\\), \\(R=g(y)-h\\).",
      "垂直轴必须把曲线解成 \\(x=g(y)\\)，并把积分变量与上下限都换成 \\(y\\)。 · A vertical axis requires solving the curve as \\(x=g(y)\\) and switching both the variable and limits to \\(y\\).",
      "区域与轴之间有间隙时，截面是圆环，不能直接用圆盘法。 · If a gap separates the region from the axis, the cross section is a ring, so the disk method does not apply directly.",
      "把 \\(\\pi\\) 提到积分外，最后再乘；不要漏掉 \\(\\pi\\)。 · Factor \\(\\pi\\) out of the integral and multiply at the end; do not omit \\(\\pi\\).",
      "整个半径要平方，不能只平方曲线部分再加减常数。 · Square the entire radius; do not square only the curve part and then add or subtract constants.",
      "用 \\(k=0\\) 或 \\(h=0\\) 检查公式是否退化为标准圆盘法。 · Check that the formula reduces to the standard disk method when \\(k=0\\) or \\(h=0\\).",
      "体积为正；用单位与图像检查数量级。 · Volume is positive; check the order of magnitude with units and a graph."
    ],
    "misconceptions": [
      "绕 \\(y=-1\\) 旋转却仍用 \\(R=f(x)\\)，忘记加 1。 · Revolving about \\(y=-1\\) while still using \\(R=f(x)\\) and forgetting to add 1.",
      "绕 \\(x=2\\) 旋转却仍对 \\(x\\) 积分，或没有把曲线解成 \\(x=g(y)\\)。 · Revolving about \\(x=2\\) while still integrating in \\(x\\), or failing to solve the curve as \\(x=g(y)\\).",
      "把半径写成曲线到原点的距离，而不是到旋转轴的垂直距离。 · Using the distance to the origin instead of the perpendicular distance to the axis of rotation.",
      "先积分再平方，或把 \\(\\pi R^2\\) 写成 \\(\\pi R\\)。 · Squaring after integrating, or writing \\(\\pi R\\) instead of \\(\\pi R^2\\).",
      "区域与轴之间有间隙仍用圆盘法，忽略内部的空洞。 · Using the disk method despite a gap between the region and the axis, ignoring the hole.",
      "上下限用错：水平轴用了 \\(y\\) 的范围，垂直轴用了 \\(x\\) 的范围。 · Using the wrong limits: a \\(y\\)-range for a horizontal axis or an \\(x\\)-range for a vertical axis.",
      "把轴平移后的半径写成 \\(f(x)+k\\) 而符号判断错误；虽然平方后可能正确，但中间步骤会误导。 · Writing \\(f(x)+k\\) with the wrong sign after shifting the axis; the square may hide the error, but the intermediate step is misleading.",
      "忘记 \\(\\pi\\) 或把 \\(\\pi\\) 也平方。 · Forgetting \\(\\pi\\) or squaring \\(\\pi\\) as well."
    ],
    "examples": [
      {
        "title": "例 1 · 绕水平线 \\(y=-1\\) · About \\(y=-1\\)",
        "prompt": "区域由 \\(y=x^2\\)、\\(y=-1\\)、\\(x=0\\)、\\(x=1\\) 围成，绕 \\(y=-1\\) 旋转。求体积。 · The region bounded by \\(y=x^2\\), \\(y=-1\\), \\(x=0\\), and \\(x=1\\) is revolved about \\(y=-1\\). Find the volume.",
        "steps": [
          "半径 \\(R(x)=x^2-(-1)=x^2+1\\)。 · Radius \\(R(x)=x^2+1\\).",
          "\\(V=\\pi\\int_0^1(x^2+1)^2\\,\\mathrm{d}x=\\pi\\int_0^1(x^4+2x^2+1)\\,\\mathrm{d}x\\)。 · \\(V=\\pi\\int_0^1(x^2+1)^2\\,\\mathrm{d}x\\).",
          "积分得 \\(\\pi\\left(\\dfrac{1}{5}+\\dfrac{2}{3}+1\\right)=\\pi\\cdot\\dfrac{28}{15}\\)。 · Integrate: \\(\\pi\\left(\\dfrac{1}{5}+\\dfrac{2}{3}+1\\right)=\\dfrac{28\\pi}{15}\\).",
          "\\(V=\\dfrac{28\\pi}{15}\\approx5.864\\) 立方单位。 · \\(V=\\dfrac{28\\pi}{15}\\approx5.864\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{28\\pi}{15}\\approx5.864\\)。 · \\(V=\\dfrac{28\\pi}{15}\\approx5.864\\).",
        "solutionLatex": "V=\\pi\\int_0^1(x^2+1)^{2}\\,\\mathrm{d}x=\\dfrac{28\\pi}{15}"
      },
      {
        "title": "例 2 · 绕区域上边界 · About the Top Boundary",
        "prompt": "区域由 \\(y=x^2\\) 与 \\(y=2\\) 在 \\(0\\le x\\le1\\) 围成，绕 \\(y=2\\) 旋转。求体积。 · The region bounded by \\(y=x^2\\) and \\(y=2\\) on \\(0\\le x\\le1\\) is revolved about \\(y=2\\). Find the volume.",
        "steps": [
          "区域在 \\(y=2\\) 下方，半径 \\(R(x)=2-x^2\\)。 · The region lies below \\(y=2\\), so \\(R(x)=2-x^2\\).",
          "\\(V=\\pi\\int_0^1(2-x^2)^2\\,\\mathrm{d}x=\\pi\\int_0^1(4-4x^2+x^4)\\,\\mathrm{d}x\\)。 · \\(V=\\pi\\int_0^1(2-x^2)^2\\,\\mathrm{d}x\\).",
          "积分得 \\(\\pi\\left(4-\\dfrac{4}{3}+\\dfrac{1}{5}\\right)=\\pi\\cdot\\dfrac{43}{15}\\)。 · Integrate: \\(\\pi\\left(4-\\dfrac{4}{3}+\\dfrac{1}{5}\\right)=\\dfrac{43\\pi}{15}\\).",
          "\\(V=\\dfrac{43\\pi}{15}\\approx9.006\\) 立方单位。 · \\(V=\\dfrac{43\\pi}{15}\\approx9.006\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{43\\pi}{15}\\approx9.006\\)。 · \\(V=\\dfrac{43\\pi}{15}\\approx9.006\\).",
        "solutionLatex": "V=\\pi\\int_0^1(2-x^2)^{2}\\,\\mathrm{d}x=\\dfrac{43\\pi}{15}"
      },
      {
        "title": "例 3 · 绕竖直线 \\(x=4\\) · About \\(x=4\\)",
        "prompt": "区域由 \\(y=\\sqrt{x}\\)、\\(y=0\\)、\\(x=4\\) 围成，绕 \\(x=4\\) 旋转。求体积。 · The region bounded by \\(y=\\sqrt{x}\\), \\(y=0\\), and \\(x=4\\) is revolved about \\(x=4\\). Find the volume.",
        "steps": [
          "把 \\(y=\\sqrt{x}\\) 解成 \\(x=y^2\\)，\\(y\\) 从 0 到 2。 · Solve \\(y=\\sqrt{x}\\) as \\(x=y^2\\), with \\(y\\) from 0 to 2.",
          "半径 \\(R(y)=4-y^2\\)。 · Radius \\(R(y)=4-y^2\\).",
          "\\(V=\\pi\\int_0^2(4-y^2)^2\\,\\mathrm{d}y=\\pi\\int_0^2(16-8y^2+y^4)\\,\\mathrm{d}y\\)。 · \\(V=\\pi\\int_0^2(4-y^2)^2\\,\\mathrm{d}y\\).",
          "积分得 \\(\\pi\\left(32-\\dfrac{64}{3}+\\dfrac{32}{5}\\right)=\\pi\\cdot\\dfrac{256}{15}\\)。 · Integrate: \\(\\pi\\left(32-\\dfrac{64}{3}+\\dfrac{32}{5}\\right)=\\dfrac{256\\pi}{15}\\).",
          "\\(V=\\dfrac{256\\pi}{15}\\approx53.617\\) 立方单位。 · \\(V=\\dfrac{256\\pi}{15}\\approx53.617\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{256\\pi}{15}\\approx53.617\\)。 · \\(V=\\dfrac{256\\pi}{15}\\approx53.617\\).",
        "solutionLatex": "V=\\pi\\int_0^2(4-y^2)^{2}\\,\\mathrm{d}y=\\dfrac{256\\pi}{15}"
      },
      {
        "title": "例 4 · 轴在区域下方 · Axis below the Region",
        "prompt": "区域由 \\(y=\\sqrt{x}\\)、\\(y=0\\)、\\(x=0\\)、\\(x=4\\) 围成，绕 \\(y=-2\\) 旋转。求体积。 · The region bounded by \\(y=\\sqrt{x}\\), \\(y=0\\), \\(x=0\\), and \\(x=4\\) is revolved about \\(y=-2\\). Find the volume.",
        "steps": [
          "半径 \\(R(x)=\\sqrt{x}-(-2)=\\sqrt{x}+2\\)。 · Radius \\(R(x)=\\sqrt{x}+2\\).",
          "\\(V=\\pi\\int_0^4(\\sqrt{x}+2)^2\\,\\mathrm{d}x=\\pi\\int_0^4(x+4\\sqrt{x}+4)\\,\\mathrm{d}x\\)。 · \\(V=\\pi\\int_0^4(\\sqrt{x}+2)^2\\,\\mathrm{d}x\\).",
          "积分：\\(\\int_0^4x\\,\\mathrm{d}x=8\\)，\\(\\int_0^44\\sqrt{x}\\,\\mathrm{d}x=\\dfrac{64}{3}\\)，\\(\\int_0^44\\,\\mathrm{d}x=16\\)。 · The pieces are \\(8\\), \\(\\dfrac{64}{3}\\), and \\(16\\).",
          "\\(V=\\pi\\left(8+\\dfrac{64}{3}+16\\right)=\\pi\\cdot\\dfrac{136}{3}\\)。 · \\(V=\\pi\\left(24+\\dfrac{64}{3}\\right)=\\dfrac{136\\pi}{3}\\).",
          "\\(V=\\dfrac{136\\pi}{3}\\approx142.4\\) 立方单位。 · \\(V=\\dfrac{136\\pi}{3}\\approx142.4\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{136\\pi}{3}\\approx142.4\\)。 · \\(V=\\dfrac{136\\pi}{3}\\approx142.4\\).",
        "solutionLatex": "V=\\pi\\int_0^4(\\sqrt{x}+2)^{2}\\,\\mathrm{d}x=\\dfrac{136\\pi}{3}"
      },
      {
        "title": "例 5 · 绕竖直线 \\(x=1\\) · About \\(x=1\\)",
        "prompt": "区域由 \\(x=y^2\\) 与 \\(x=1\\) 围成，绕 \\(x=1\\) 旋转。求体积。 · The region bounded by \\(x=y^2\\) and \\(x=1\\) is revolved about \\(x=1\\). Find the volume.",
        "steps": [
          "交点：\\(y^2=1\\)，故 \\(y\\in[-1,1]\\)。 · Intersections: \\(y^2=1\\), so \\(y\\in[-1,1]\\).",
          "半径 \\(R(y)=1-y^2\\)。 · Radius \\(R(y)=1-y^2\\).",
          "利用偶函数对称性：\\(V=2\\pi\\int_0^1(1-y^2)^2\\,\\mathrm{d}y\\)。 · Use even symmetry: \\(V=2\\pi\\int_0^1(1-y^2)^2\\,\\mathrm{d}y\\).",
          "\\(\\int_0^1(1-2y^2+y^4)\\,\\mathrm{d}y=1-\\dfrac{2}{3}+\\dfrac{1}{5}=\\dfrac{8}{15}\\)，故 \\(V=\\dfrac{16\\pi}{15}\\)。 · The integral is \\(\\dfrac{8}{15}\\), so \\(V=\\dfrac{16\\pi}{15}\\).",
          "\\(V=\\dfrac{16\\pi}{15}\\approx3.351\\) 立方单位。 · \\(V=\\dfrac{16\\pi}{15}\\approx3.351\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{16\\pi}{15}\\approx3.351\\)。 · \\(V=\\dfrac{16\\pi}{15}\\approx3.351\\).",
        "solutionLatex": "V=\\pi\\int_{-1}^{1}(1-y^2)^{2}\\,\\mathrm{d}y=\\dfrac{16\\pi}{15}"
      }
    ],
    "examTips": [
      "先在图上画出旋转轴与半径，明确半径是“到轴”的距离，不是函数值。 · Draw the axis and radius on the figure; the radius is the distance to the axis, not the function value.",
      "绕水平线 \\(y=k\\) 用 \\(\\mathrm{d}x\\)；绕竖直线 \\(x=h\\) 用 \\(\\mathrm{d}y\\) 并解出 \\(x=g(y)\\)。 · Use \\(\\mathrm{d}x\\) about \\(y=k\\); use \\(\\mathrm{d}y\\) about \\(x=h\\) and solve for \\(x=g(y)\\).",
      "写出 \\(R\\) 后立刻平方，再展开积分；不要把 \\(\\pi\\) 漏掉。 · Square \\(R\\) immediately, then expand and integrate; do not omit \\(\\pi\\).",
      "用 \\(k=0\\) 或 \\(h=0\\) 检查公式；若退化不正确，说明半径写错。 · Check with \\(k=0\\) or \\(h=0\\); if the reduction is wrong, the radius is wrong.",
      "区域与轴有间隙时改用垫圈法；圆盘法只处理实心圆盘。 · Use the washer method when a gap separates the region from the axis; the disk method handles solid disks only.",
      "旋转轴可以在区域上方或下方，半径取正值；先判断哪一边再写表达式。 · The axis may be above or below the region; choose the positive radius by determining which side first.",
      "答案保留 \\(\\pi\\) 的精确形式，并按题目要求给近似值。 · Keep the exact form with \\(\\pi\\) and give a decimal approximation when requested.",
      "最后用单位与图像检查：半径增大时体积应增大，轴平移后体积通常也增大。 · Check with units and graphs: volume should increase with radius, and shifting the axis usually increases volume."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.9",
        "title": "圆盘法",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.11",
        "title": "垫圈法",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：8.9 绕坐标轴的圆盘法；本节把轴从 \\(y=0\\) 或 \\(x=0\\) 平移到任意 \\(y=k\\) 或 \\(x=h\\)。 · Upstream: 8.9 covers the disk method about coordinate axes; this topic shifts the axis from \\(y=0\\) or \\(x=0\\) to any \\(y=k\\) or \\(x=h\\).",
      "同单元：8.11–8.12 的垫圈法在半径表达式中再减去内半径；圆盘法是内半径为 0 的特殊情形。 · Within the unit: washer methods in 8.11–8.12 subtract an inner radius; the disk method is the special case with inner radius 0.",
      "应用：工程设计中的旋转零件、容器与光学元件常用绕任意轴的旋转体体积估算。 · Applications: rotated machine parts, containers, and optical components are often modeled as solids of revolution about arbitrary axes."
    ],
    "intuitionDetailed": "圆盘法的“其他轴”并不改变方法，只改变半径的写法。先问：切片位置到旋转轴的垂直距离是多少？若轴是 \\(y=k\\)，这个距离是 \\(|f(x)-k|\\)；若轴是 \\(x=h\\)，这个距离是 \\(|g(y)-h|\\)。把这个距离平方、乘 \\(\\pi\\)、再乘厚度，就是一片圆盘的体积。把所有片沿轴叠加，得到积分。最容易犯的错是“看见 \\(f(x)\\) 就当半径”；其实只有轴恰好是 \\(x\\) 轴时，半径才等于 \\(f(x)\\)。 · The “other axes” version of the disk method does not change the method, only how the radius is written. Ask first: what is the perpendicular distance from the slice position to the axis? For \\(y=k\\), it is \\(|f(x)-k|\\); for \\(x=h\\), it is \\(|g(y)-h|\\). Square that distance, multiply by \\(\\pi\\), and multiply by the thickness to get one disk's volume. Stack all disks along the axis and integrate. The most common error is treating \\(f(x)\\) as the radius automatically; the radius equals \\(f(x)\\) only when the axis is exactly the \\(x\\)-axis.",
    "development": [
      "回顾先修：复习 8.9 绕坐标轴的圆盘法，确认 \\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\)。 · Review 8.9 and confirm \\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\) for the coordinate-axis disk method.",
      "画轴与半径：在图上画出旋转轴，标出一条从曲线垂直到轴的半径。 · Draw the axis and radius: sketch the axis and a perpendicular segment from the curve to the axis.",
      "写半径：水平轴用 \\(R=|f(x)-k|\\)，垂直轴用 \\(R=|g(y)-h|\\)。 · Write the radius: \\(R=|f(x)-k|\\) for a horizontal axis and \\(R=|g(y)-h|\\) for a vertical axis.",
      "选变量与上下限：水平轴用 \\(x\\)，垂直轴用 \\(y\\)，并确定区域投影范围。 · Choose the variable and limits: \\(x\\) for a horizontal axis, \\(y\\) for a vertical axis, using the region's projection.",
      "建立积分并求值：\\(V=\\pi\\int R^2\\,\\mathrm{d}x\\) 或 \\(\\pi\\int R^2\\,\\mathrm{d}y\\)，展开后逐项积分。 · Set up and evaluate: \\(V=\\pi\\int R^2\\,\\mathrm{d}x\\) or \\(\\pi\\int R^2\\,\\mathrm{d}y\\), expand, and integrate term by term.",
      "检查：用 \\(k=0\\) 或 \\(h=0\\) 退化、单位与图像检查结果。 · Check by reducing to \\(k=0\\) or \\(h=0\\) and by using units and a graph."
    ],
    "checks": [
      "绕 \\(y=-1\\) 旋转时，半径为什么是 \\(f(x)+1\\) 而不是 \\(f(x)\\)？ · When revolving about \\(y=-1\\), why is the radius \\(f(x)+1\\) rather than \\(f(x)\\)?",
      "绕 \\(x=3\\) 旋转时，积分变量应是什么？曲线 \\(y=x^2\\) 需要怎样改写？ · When revolving about \\(x=3\\), what is the integration variable, and how must \\(y=x^2\\) be rewritten?",
      "圆盘法与垫圈法的分界条件是什么？能否画出一个有间隙的反例？ · What distinguishes the disk method from the washer method? Can you draw a counterexample with a gap?",
      "若把 \\(k=0\\) 代入绕 \\(y=k\\) 的公式，是否回到绕 \\(x\\) 轴的标准公式？ · Does substituting \\(k=0\\) into the formula for \\(y=k\\) recover the standard formula about the \\(x\\)-axis?",
      "半径为 \\(R\\) 的圆盘面积是 \\(\\pi R^2\\)；为什么不能写成 \\(\\pi R\\) 或 \\(2\\pi R\\)？ · The area of a disk of radius \\(R\\) is \\(\\pi R^2\\); why not \\(\\pi R\\) or \\(2\\pi R\\)?",
      "旋转轴从 \\(y=0\\) 平移到 \\(y=-2\\)，同一区域的体积会变大还是变小？为什么？ · If the axis shifts from \\(y=0\\) to \\(y=-2\\), does the volume increase or decrease, and why?"
    ],
    "vocabulary": [
      {
        "termZh": "圆盘法",
        "termEn": "disc method",
        "defZh": "把旋转体切成薄圆盘，用 \\(\\pi R^2\\) 沿轴积分求体积。",
        "defEn": "Slicing a solid of revolution into thin disks and integrating \\(\\pi R^2\\) along the axis."
      },
      {
        "termZh": "旋转轴",
        "termEn": "axis of rotation",
        "defZh": "区域绕其旋转的直线，如 \\(y=-1\\) 或 \\(x=4\\)。",
        "defEn": "The line about which the region is revolved, such as \\(y=-1\\) or \\(x=4\\)."
      },
      {
        "termZh": "旋转半径",
        "termEn": "radius of rotation",
        "defZh": "曲线到旋转轴的垂直距离 \\(R\\)，不是到坐标轴的距离。",
        "defEn": "The perpendicular distance \\(R\\) from the curve to the axis of rotation, not to a coordinate axis."
      },
      {
        "termZh": "水平轴",
        "termEn": "horizontal axis",
        "defZh": "形如 \\(y=k\\) 的旋转轴，切片厚度为 \\(\\mathrm{d}x\\)。",
        "defEn": "An axis of the form \\(y=k\\), with slice thickness \\(\\mathrm{d}x\\)."
      },
      {
        "termZh": "垂直轴",
        "termEn": "vertical axis",
        "defZh": "形如 \\(x=h\\) 的旋转轴，切片厚度为 \\(\\mathrm{d}y\\)。",
        "defEn": "An axis of the form \\(x=h\\), with slice thickness \\(\\mathrm{d}y\\)."
      },
      {
        "termZh": "垂直距离",
        "termEn": "perpendicular distance",
        "defZh": "从点到直线的垂线长度，是半径的定义。",
        "defEn": "The length of the perpendicular from a point to a line, which defines the radius."
      },
      {
        "termZh": "旋转体",
        "termEn": "solid of revolution",
        "defZh": "平面区域绕一条轴旋转所得的三维立体。",
        "defEn": "The three-dimensional solid obtained by revolving a planar region about an axis."
      },
      {
        "termZh": "体积微元",
        "termEn": "volume element",
        "defZh": "\\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\) 或 \\(\\pi R^2\\,\\mathrm{d}y\\)，一片薄圆盘的体积。",
        "defEn": "\\(\\mathrm{d}V=\\pi R^2\\,\\mathrm{d}x\\) or \\(\\pi R^2\\,\\mathrm{d}y\\), the volume of one thin disk."
      }
    ]
  },
  "8.11": {
    "id": "math/calc-u8/8.11",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.11",
    "titleZh": "垫圈法",
    "titleEn": "Volume with Washer Method: Revolving Around the x- or y-Axis",
    "layer": "ap",
    "summary": "垫圈法 · Volume with Washer Method: Revolving Around the x- or y-Axis",
    "learningObjectives": [
      "能陈述「垫圈法」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Volume with Washer Method: Revolving Around the x- or y-Axis：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「垫圈法」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "垫圈法（Volume with Washer Method: Revolving Around the x- or y-Axis）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「垫圈法」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "V=\\pi\\int_a^b\\left([R_{\\mathrm{out}}(x)]^{2}-[R_{\\mathrm{in}}(x)]^{2}\\right)\\mathrm{d}x",
        "note": "垫圈法：外半径平方减内半径平方。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「垫圈法」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 8.11「垫圈法」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「垫圈法」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「垫圈法」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「垫圈法」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「垫圈法」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「垫圈法」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.10",
        "title": "圆盘法其他轴",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.12",
        "title": "垫圈法其他轴",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "solid-revolution",
        "title": "旋转体体积"
      }
    ],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「垫圈法」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「垫圈法」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「垫圈法」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "垫圈法",
        "termEn": "washer method",
        "defZh": "区域与转轴之间有间隙时，用外圆减内圆的环形截面求体积。",
        "defEn": "When a gap separates the region from the axis, use annular cross sections: outer circle minus inner circle."
      },
      {
        "termZh": "外半径 \\(R_{\\mathrm{out}}\\)",
        "termEn": "outer radius",
        "defZh": "离转轴较远的边界到转轴的距离。",
        "defEn": "The distance from the axis to the farther boundary."
      },
      {
        "termZh": "内半径 \\(R_{\\mathrm{in}}\\)",
        "termEn": "inner radius",
        "defZh": "离转轴较近的边界到转轴的距离。",
        "defEn": "The distance from the axis to the nearer boundary."
      },
      {
        "termZh": "环形截面",
        "termEn": "washer cross-section",
        "defZh": "外圆面积减内圆面积得到的截面。",
        "defEn": "A cross section equal to the outer circle area minus the inner circle area."
      },
      {
        "termZh": "垫圈体积元",
        "termEn": "washer volume element",
        "defZh": "\\(\\pi\\left([R_{\\mathrm{out}}]^{2}-[R_{\\mathrm{in}}]^{2}\\right)\\mathrm{d}x\\) 是一个薄垫圈的体积。",
        "defEn": "The volume \\(\\pi\\left([R_{\\mathrm{out}}]^{2}-[R_{\\mathrm{in}}]^{2}\\right)\\mathrm{d}x\\) of one thin washer."
      },
      {
        "termZh": "转轴",
        "termEn": "axis of revolution",
        "defZh": "区域旋转所绕的直线。",
        "defEn": "The line about which the region is revolved."
      }
    ]
  },
  "8.12": {
    "id": "math/calc-u8/8.12",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.12",
    "titleZh": "垫圈法其他轴",
    "titleEn": "Volume with Washer Method: Revolving Around Other Axes",
    "layer": "ap",
    "summary": "垫圈法其他轴：外半径与内半径都量到同一条旋转轴，截面为圆环，体积等于外圆减内圆。 · Washer method about other axes: both outer and inner radii are measured to the same axis, cross sections are rings, and volume is outer disk minus inner disk.",
    "learningObjectives": [
      "能识别圆环截面，确定外半径 \\(R_{\\mathrm{out}}\\) 与内半径 \\(R_{\\mathrm{in}}\\)，并写出 \\(V=\\pi\\int(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\,\\mathrm{d}x\\)。 · Identify ring cross sections, determine the outer radius \\(R_{\\mathrm{out}}\\) and inner radius \\(R_{\\mathrm{in}}\\), and write \\(V=\\pi\\int(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\,\\mathrm{d}x\\).",
      "能处理绕 \\(y=k\\) 与 \\(x=h\\) 的旋转，并把两个半径都写成到该轴的垂直距离。 · Handle revolution about \\(y=k\\) and \\(x=h\\), writing both radii as perpendicular distances to that axis.",
      "能判断哪条曲线离轴更远，必要时在曲线交叉处分段并交换内外半径。 · Decide which curve is farther from the axis, splitting at crossings and swapping inner and outer radii when needed.",
      "能判断何时退化为圆盘法（内半径为 0），何时必须使用垫圈法。 · Decide when the method reduces to the disk method (inner radius zero) and when the washer method is required.",
      "能处理轴在区域上方、下方、左侧或右侧，以及轴与区域之间有常值间隙的情形。 · Handle axes above, below, left, or right of the region, including a constant gap between the axis and the region.",
      "能用图像、单位与特例检查体积结果，并避免把半径差平方的常见错误。 · Check volumes with graphs, units, and special cases, avoiding the common error of squaring the difference of radii."
    ],
    "essentialKnowledge": [
      "垫圈法把旋转体切成垂直于旋转轴的薄圆环，圆环面积等于外圆面积减内圆面积：\\(A=\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\)。 · The washer method cuts a solid of revolution into thin rings perpendicular to the axis; the ring area is outer disk minus inner disk: \\(A=\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\).",
      "绕水平线 \\(y=k\\) 旋转：\\(V=\\pi\\int_a^b\\left([R_{\\mathrm{out}}(x)]^2-[R_{\\mathrm{in}}(x)]^2\\right)\\mathrm{d}x\\)，其中两个半径都是到 \\(y=k\\) 的垂直距离。 · About a horizontal line \\(y=k\\): \\(V=\\pi\\int_a^b\\left(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2\\right)\\mathrm{d}x\\), where both radii are perpendicular distances to \\(y=k\\).",
      "绕竖直线 \\(x=h\\) 旋转：把边界解成 \\(x=g(y)\\)，\\(V=\\pi\\int_c^d\\left([R_{\\mathrm{out}}(y)]^2-[R_{\\mathrm{in}}(y)]^2\\right)\\mathrm{d}y\\)。 · About a vertical line \\(x=h\\): solve boundaries as \\(x=g(y)\\) and use \\(V=\\pi\\int_c^d\\left(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2\\right)\\mathrm{d}y\\).",
      "外半径是离轴较远的边界到轴的距离，内半径是离轴较近的边界到轴的距离；在水平轴情形，\\(R_{\\mathrm{out}}=\\max(|f-k|,|g-k|)\\)，\\(R_{\\mathrm{in}}=\\min(|f-k|,|g-k|)\\)。 · The outer radius is the distance from the farther boundary to the axis, and the inner radius is the distance from the nearer boundary; for a horizontal axis, \\(R_{\\mathrm{out}}=\\max(|f-k|,|g-k|)\\) and \\(R_{\\mathrm{in}}=\\min(|f-k|,|g-k|)\\).",
      "先平方再相减：\\(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2\\)；不等于 \\((R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\)。 · Square first, then subtract: \\(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2\\), which is not \\((R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\).",
      "当内半径为 0 时，圆环退化为圆盘，垫圈法回到圆盘法；因此圆盘法是垫圈法的特殊情形。 · When the inner radius is zero, the ring reduces to a disk and the washer method returns to the disk method; the disk method is a special case of the washer method.",
      "区域与轴之间有间隙时，间隙宽度会成为内半径；例如区域下边界为 \\(y=0\\)、轴为 \\(y=-1\\) 时，内半径为 1。 · When a gap separates the region from the axis, the gap width becomes the inner radius; for example, with lower boundary \\(y=0\\) and axis \\(y=-1\\), the inner radius is 1.",
      "旋转轴不能穿过区域内部；若轴穿过区域，旋转所得截面不是简单圆环，应拆分区域或改用其他方法。 · The axis must not pass through the interior of the region; if it does, the resulting cross sections are not simple rings, so split the region or use another method.",
      "曲线在区间内交叉时，外半径与内半径可能互换；必须在交点处分段，逐段判断哪个边界离轴更远。 · If curves cross inside the interval, the outer and inner radii may swap; split at the intersection and determine which boundary is farther from the axis on each piece.",
      "轴可以在区域上方或下方（水平轴）以及左侧或右侧（垂直轴）；半径表达式中的减法顺序由“到轴的距离”决定。 · The axis may be above or below the region (horizontal axis) or to its left or right (vertical axis); the order of subtraction in the radii is determined by the distance to the axis.",
      "单位检查：两个半径平方之差是长度平方，乘以 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\) 后为长度立方；\\(\\pi\\) 无量纲。 · Unit check: the difference of squared radii is length squared; multiplying by \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\) gives cubic length; \\(\\pi\\) is dimensionless.",
      "答案为正；若积分为负，通常是外半径与内半径写反或上下限错误，而不是体积本身为负。 · The answer is positive; a negative integral usually means the outer and inner radii are reversed or the limits are wrong, not a negative volume."
    ],
    "definition": "垫圈法处理这样的旋转体：平面区域与旋转轴之间有一条空隙，旋转后每个垂直于轴的截面都是圆环（垫圈）。若绕水平线 \\(y=k\\) 旋转，在位置 \\(x\\) 处外半径 \\(R_{\\mathrm{out}}(x)\\) 是离轴较远边界到 \\(y=k\\) 的距离，内半径 \\(R_{\\mathrm{in}}(x)\\) 是较近边界到 \\(y=k\\) 的距离，则 \\(V=\\pi\\int_a^b\\left([R_{\\mathrm{out}}]^2-[R_{\\mathrm{in}}]^2\\right)\\mathrm{d}x\\)。绕竖直线 \\(x=h\\) 时，把边界解成 \\(x=g(y)\\)，对 \\(y\\) 积分。内半径为 0 时退化为圆盘法。 · The washer method handles a solid of revolution in which a gap separates the planar region from the axis, so every cross section perpendicular to the axis is a ring (washer). For revolution about a horizontal line \\(y=k\\), the outer radius \\(R_{\\mathrm{out}}(x)\\) is the distance from the farther boundary to \\(y=k\\), and the inner radius \\(R_{\\mathrm{in}}(x)\\) is the distance from the nearer boundary, giving \\(V=\\pi\\int_a^b\\left(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2\\right)\\mathrm{d}x\\). For a vertical line \\(x=h\\), solve boundaries as \\(x=g(y)\\) and integrate in \\(y\\). When the inner radius is zero, the method reduces to the disk method.",
    "intuition": "把旋转体想成一摞垫圈：每一片的外圆由离轴远的边界扫出，内圆由离轴近的边界扫出；一片的体积就是“大圆盘减小圆盘”。 · Think of the solid as a stack of washers: each washer's outer circle is swept by the boundary farther from the axis, and its inner circle by the nearer boundary. One washer's volume is “large disk minus small disk.”",
    "formulas": [
      {
        "latex": "V=\\pi\\int_a^b\\left([R_{\\mathrm{out}}(x)]^{2}-[R_{\\mathrm{in}}(x)]^{2}\\right)\\mathrm{d}x",
        "note": "绕水平线 \\(y=k\\) 的垫圈法。 · Washer method about a horizontal line \\(y=k\\)."
      },
      {
        "latex": "V=\\pi\\int_c^d\\left([R_{\\mathrm{out}}(y)]^{2}-[R_{\\mathrm{in}}(y)]^{2}\\right)\\mathrm{d}y",
        "note": "绕竖直线 \\(x=h\\) 的垫圈法，需把边界解成 \\(x=g(y)\\)。 · Washer method about a vertical line \\(x=h\\), with boundaries solved as \\(x=g(y)\\)."
      },
      {
        "latex": "A_{\\text{ring}}=\\pi\\left(R_{\\mathrm{out}}^{2}-R_{\\mathrm{in}}^{2}\\right)",
        "note": "圆环面积：外圆面积减内圆面积。 · Ring area: outer disk area minus inner disk area."
      },
      {
        "latex": "R_{\\mathrm{out}}=\\max\\left(|f(x)-k|,\\,|g(x)-k|\\right)",
        "note": "水平轴情形：外半径取离轴较远的距离。 · Horizontal axis: the outer radius is the larger distance to the axis."
      },
      {
        "latex": "R_{\\mathrm{in}}=\\min\\left(|f(x)-k|,\\,|g(x)-k|\\right)",
        "note": "水平轴情形：内半径取离轴较近的距离。 · Horizontal axis: the inner radius is the smaller distance to the axis."
      },
      {
        "latex": "V=\\pi\\int_a^b\\left([f(x)-k]^{2}-[g(x)-k]^{2}\\right)\\mathrm{d}x",
        "note": "当 \\(f\\) 比 \\(g\\) 离轴更远时可直接用此式。 · Use this directly when \\(f\\) is farther from the axis than \\(g\\)."
      },
      {
        "latex": "R_{\\mathrm{in}}=0\\quad\\Longrightarrow\\quad V=\\pi\\int_a^b[R_{\\mathrm{out}}]^{2}\\,\\mathrm{d}x",
        "note": "内半径为 0 时退化为圆盘法。 · When the inner radius is zero, the method reduces to the disk method."
      }
    ],
    "derivationNotes": [
      {
        "from": "区域与轴之间的空隙 · Gap between region and axis",
        "to": "圆环截面 · Ring cross section",
        "note": "区域不紧贴轴，旋转后截面中间有洞，形成圆环。 · The region does not touch the axis, so revolution leaves a hole and produces a ring."
      },
      {
        "from": "外圆与内圆 · Outer and inner disks",
        "to": "圆环面积 · Ring area",
        "note": "\\(A=\\pi R_{\\mathrm{out}}^2-\\pi R_{\\mathrm{in}}^2=\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\)。 · \\(A=\\pi R_{\\mathrm{out}}^2-\\pi R_{\\mathrm{in}}^2=\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\)."
      },
      {
        "from": "半径 · Radii",
        "to": "到轴的距离 · Distance to the axis",
        "note": "两个半径都必须量到同一条旋转轴；轴平移时两个半径同时改变。 · Both radii are measured to the same axis; shifting the axis changes both radii."
      },
      {
        "from": "圆环面积 · Ring area",
        "to": "体积微元 · Volume element",
        "note": "\\(\\mathrm{d}V=\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\,\\mathrm{d}x\\)。 · \\(\\mathrm{d}V=\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\,\\mathrm{d}x\\)."
      },
      {
        "from": "薄圆环叠加 · Stacked rings",
        "to": "定积分 · Definite integral",
        "note": "把所有圆环体积相加并取极限得体积积分。 · Add all ring volumes and take the limit to obtain the volume integral."
      },
      {
        "from": "内半径为 0 · Zero inner radius",
        "to": "圆盘法 · Disk method",
        "note": "洞消失时圆环退化为圆盘，垫圈公式回到圆盘公式。 · When the hole disappears, the ring becomes a disk and the washer formula reduces to the disk formula."
      }
    ],
    "conditions": [
      "旋转轴是水平线 \\(y=k\\) 或竖直线 \\(x=h\\)，且轴不穿过区域内部；否则截面不是简单圆环。 · The axis is a horizontal line \\(y=k\\) or a vertical line \\(x=h\\), and it does not pass through the region's interior; otherwise the cross sections are not simple rings.",
      "区域与轴之间必须存在间隙（内半径大于 0），否则直接用圆盘法。 · A gap must exist between the region and the axis (inner radius greater than 0); otherwise use the disk method directly.",
      "两个半径都量到同一条旋转轴，且外半径不小于内半径。 · Both radii are measured to the same axis, and the outer radius is at least the inner radius.",
      "绕水平轴用 \\(x\\) 积分，绕垂直轴用 \\(y\\) 积分；上下限是区域在对应轴上的投影。 · Integrate in \\(x\\) for a horizontal axis and in \\(y\\) for a vertical axis; limits come from the region's projection onto that axis.",
      "曲线在区间内交叉时分段，并在每段重新判断内外半径，不能全区间套同一个“上减下”。 · Split where curves cross and reassign inner and outer radii on each piece; do not use one “upper minus lower” rule over the whole interval.",
      "外半径与内半径的表达式都必须非负；可用绝对值或先判断边界在轴的哪一侧。 · Both radius expressions must be nonnegative; use absolute values or determine which side of the axis each boundary lies on.",
      "单位一致：半径与厚度使用同一长度单位，最终体积为长度立方。 · Units must match: radii and thickness use the same length unit, and the final volume is cubic length."
    ],
    "keyPoints": [
      "先画轴与两个半径，确认外半径是“离轴远”的那条边界。 · Draw the axis and both radii; confirm the outer radius belongs to the boundary farther from the axis.",
      "公式是外半径平方减内半径平方，再乘 \\(\\pi\\)；不是半径差平方。 · The formula is outer radius squared minus inner radius squared, then times \\(\\pi\\); it is not the square of the radius difference.",
      "轴平移会同时改变两个半径：例如轴从 \\(y=0\\) 移到 \\(y=2\\)，两个半径都要用 \\(2-\\)边界。 · Shifting the axis changes both radii: moving from \\(y=0\\) to \\(y=2\\) requires \\(2-\\)boundary for both.",
      "绕竖直线必须把曲线解成 \\(x=g(y)\\)，并改用 \\(\\mathrm{d}y\\)。 · About a vertical line, solve curves as \\(x=g(y)\\) and switch to \\(\\mathrm{d}y\\).",
      "内半径为 0 时退化为圆盘法；圆盘法是垫圈法的特例。 · When the inner radius is zero, the method reduces to the disk method; the disk method is a special case.",
      "曲线交叉时内外半径可能互换，必须分段处理。 · When curves cross, inner and outer radii may swap, so split the interval.",
      "用“区域越远离轴，体积越大”做合理性检查。 · Use “the farther the region from the axis, the larger the volume” as a sanity check.",
      "答案为正；负值通常意味着半径顺序或上下限写错。 · The answer is positive; a negative value usually means the radii are ordered incorrectly or the limits are wrong."
    ],
    "misconceptions": [
      "把圆环面积写成 \\(\\pi(R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\)，这是把半径差当成半径。 · Writing the ring area as \\(\\pi(R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\), which treats the radius difference as a radius.",
      "只对一条曲线减去轴，另一条仍用原函数，导致内半径没有平移。 · Shifting only one curve relative to the axis and leaving the other unshifted, so the inner radius is wrong.",
      "把“上曲线”直接当外半径；若轴在区域上方，离轴更远的可能是下曲线。 · Treating the “upper curve” as the outer radius automatically; if the axis is above the region, the lower curve may be farther from the axis.",
      "区域与轴有间隙却仍用圆盘法，忽略内半径。 · Using the disk method despite a gap and ignoring the inner radius.",
      "绕竖直线仍对 \\(x\\) 积分，或没有把曲线解成 \\(x=g(y)\\)。 · Integrating in \\(x\\) about a vertical line, or failing to solve curves as \\(x=g(y)\\).",
      "曲线交叉时不分区段，导致某段外半径小于内半径。 · Not splitting at curve crossings, so the outer radius becomes smaller than the inner radius on some piece.",
      "忘记 \\(\\pi\\)，或把 \\(\\pi\\) 也平方。 · Forgetting \\(\\pi\\), or squaring \\(\\pi\\) as well.",
      "旋转轴穿过区域内部仍套用垫圈公式；此时截面不是简单圆环。 · Applying the washer formula when the axis passes through the region's interior; the cross sections are not simple rings."
    ],
    "examples": [
      {
        "title": "例 1 · 绕 \\(y=2\\) · About \\(y=2\\)",
        "prompt": "区域由 \\(y=x\\) 与 \\(y=x^2\\) 在 \\(0\\le x\\le1\\) 围成，绕 \\(y=2\\) 旋转。求体积。 · The region bounded by \\(y=x\\) and \\(y=x^2\\) on \\(0\\le x\\le1\\) is revolved about \\(y=2\\). Find the volume.",
        "steps": [
          "轴 \\(y=2\\) 在区域上方；到轴的距离分别为 \\(2-x^2\\) 与 \\(2-x\\)。 · The axis \\(y=2\\) is above the region; the distances are \\(2-x^2\\) and \\(2-x\\).",
          "在 \\((0,1)\\) 上 \\(x^2<x\\)，所以 \\(2-x^2>2-x\\)：外半径 \\(2-x^2\\)，内半径 \\(2-x\\)。 · On \\((0,1)\\), \\(x^2<x\\), so \\(2-x^2>2-x\\): outer radius \\(2-x^2\\), inner radius \\(2-x\\).",
          "\\(V=\\pi\\int_0^1\\left[(2-x^2)^2-(2-x)^2\\right]\\mathrm{d}x\\)。 · \\(V=\\pi\\int_0^1\\left[(2-x^2)^2-(2-x)^2\\right]\\mathrm{d}x\\).",
          "展开：\\((4-4x^2+x^4)-(4-4x+x^2)=-5x^2+x^4+4x\\)。 · Expand: the integrand is \\(-5x^2+x^4+4x\\).",
          "\\(\\int_0^1(-5x^2+x^4+4x)\\,\\mathrm{d}x=-\\dfrac{5}{3}+\\dfrac{1}{5}+2=\\dfrac{8}{15}\\)。 · The integral is \\(\\dfrac{8}{15}\\).",
          "\\(V=\\dfrac{8\\pi}{15}\\approx1.676\\) 立方单位。 · \\(V=\\dfrac{8\\pi}{15}\\approx1.676\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{8\\pi}{15}\\approx1.676\\)。 · \\(V=\\dfrac{8\\pi}{15}\\approx1.676\\).",
        "solutionLatex": "V=\\pi\\int_0^1\\left[(2-x^2)^{2}-(2-x)^{2}\\right]\\mathrm{d}x=\\dfrac{8\\pi}{15}"
      },
      {
        "title": "例 2 · 绕 \\(x=-1\\) · About \\(x=-1\\)",
        "prompt": "同一区域绕 \\(x=-1\\) 旋转。求体积。 · Revolve the same region about \\(x=-1\\). Find the volume.",
        "steps": [
          "把边界写成 \\(x=y\\)（左）与 \\(x=\\sqrt{y}\\)（右），\\(0\\le y\\le1\\)。 · Write the boundaries as \\(x=y\\) (left) and \\(x=\\sqrt{y}\\) (right), \\(0\\le y\\le1\\).",
          "到轴 \\(x=-1\\) 的距离：外半径 \\(\\sqrt{y}+1\\)，内半径 \\(y+1\\)。 · Distances to \\(x=-1\\): outer \\(\\sqrt{y}+1\\), inner \\(y+1\\).",
          "\\(V=\\pi\\int_0^1\\left[(\\sqrt{y}+1)^2-(y+1)^2\\right]\\mathrm{d}y\\)。 · \\(V=\\pi\\int_0^1\\left[(\\sqrt{y}+1)^2-(y+1)^2\\right]\\mathrm{d}y\\).",
          "展开：\\((y+2\\sqrt{y}+1)-(y^2+2y+1)=-y^2-y+2\\sqrt{y}\\)。 · Expand: the integrand is \\(-y^2-y+2\\sqrt{y}\\).",
          "\\(\\int_0^1(-y^2-y+2\\sqrt{y})\\,\\mathrm{d}y=-\\dfrac{1}{3}-\\dfrac{1}{2}+\\dfrac{4}{3}=\\dfrac{1}{2}\\)。 · The integral is \\(\\dfrac{1}{2}\\).",
          "\\(V=\\dfrac{\\pi}{2}\\approx1.571\\) 立方单位。 · \\(V=\\dfrac{\\pi}{2}\\approx1.571\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{\\pi}{2}\\approx1.571\\)。 · \\(V=\\dfrac{\\pi}{2}\\approx1.571\\).",
        "solutionLatex": "V=\\pi\\int_0^1\\left[(\\sqrt{y}+1)^{2}-(y+1)^{2}\\right]\\mathrm{d}y=\\dfrac{\\pi}{2}"
      },
      {
        "title": "例 3 · 轴在区域下方 · Axis below the Region",
        "prompt": "区域由 \\(y=x^2\\) 与 \\(y=2x\\) 在 \\(0\\le x\\le2\\) 围成，绕 \\(y=-1\\) 旋转。求体积。 · The region bounded by \\(y=x^2\\) and \\(y=2x\\) on \\(0\\le x\\le2\\) is revolved about \\(y=-1\\). Find the volume.",
        "steps": [
          "轴 \\(y=-1\\) 在区域下方；到轴的距离为 \\(2x+1\\) 与 \\(x^2+1\\)。 · The axis \\(y=-1\\) is below the region; distances are \\(2x+1\\) and \\(x^2+1\\).",
          "在 \\((0,2)\\) 上 \\(2x>x^2\\)，所以外半径 \\(2x+1\\)，内半径 \\(x^2+1\\)。 · On \\((0,2)\\), \\(2x>x^2\\), so outer radius \\(2x+1\\) and inner radius \\(x^2+1\\).",
          "\\(V=\\pi\\int_0^2\\left[(2x+1)^2-(x^2+1)^2\\right]\\mathrm{d}x\\)。 · \\(V=\\pi\\int_0^2\\left[(2x+1)^2-(x^2+1)^2\\right]\\mathrm{d}x\\).",
          "展开：\\((4x^2+4x+1)-(x^4+2x^2+1)=2x^2+4x-x^4\\)。 · Expand: the integrand is \\(2x^2+4x-x^4\\).",
          "\\(\\int_0^2(2x^2+4x-x^4)\\,\\mathrm{d}x=\\dfrac{16}{3}+8-\\dfrac{32}{5}=\\dfrac{104}{15}\\)。 · The integral is \\(\\dfrac{104}{15}\\).",
          "\\(V=\\dfrac{104\\pi}{15}\\approx21.78\\) 立方单位。 · \\(V=\\dfrac{104\\pi}{15}\\approx21.78\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{104\\pi}{15}\\approx21.78\\)。 · \\(V=\\dfrac{104\\pi}{15}\\approx21.78\\).",
        "solutionLatex": "V=\\pi\\int_0^2\\left[(2x+1)^{2}-(x^2+1)^{2}\\right]\\mathrm{d}x=\\dfrac{104\\pi}{15}"
      },
      {
        "title": "例 4 · 绕 \\(x=3\\) · About \\(x=3\\)",
        "prompt": "区域由 \\(x=y^2\\) 与 \\(x=2-y^2\\) 围成，绕 \\(x=3\\) 旋转。求体积。 · The region bounded by \\(x=y^2\\) and \\(x=2-y^2\\) is revolved about \\(x=3\\). Find the volume.",
        "steps": [
          "交点：\\(y^2=2-y^2\\)，故 \\(y=\\pm1\\)。 · Intersections: \\(y^2=2-y^2\\), so \\(y=\\pm1\\).",
          "轴 \\(x=3\\) 在区域右侧；到轴的距离：\\(3-y^2\\)（右边界 \\(x=2-y^2\\) 对应 \\(3-(2-y^2)=1+y^2\\)，左边界 \\(x=y^2\\) 对应 \\(3-y^2\\)）。 · The axis \\(x=3\\) is to the right; distances are \\(3-y^2\\) (left boundary) and \\(1+y^2\\) (right boundary).",
          "在 \\([-1,1]\\) 上 \\(3-y^2>1+y^2\\)，所以外半径 \\(3-y^2\\)，内半径 \\(1+y^2\\)。 · On \\([-1,1]\\), \\(3-y^2>1+y^2\\), so outer radius \\(3-y^2\\) and inner radius \\(1+y^2\\).",
          "\\(V=\\pi\\int_{-1}^1\\left[(3-y^2)^2-(1+y^2)^2\\right]\\mathrm{d}y\\)。 · \\(V=\\pi\\int_{-1}^1\\left[(3-y^2)^2-(1+y^2)^2\\right]\\mathrm{d}y\\).",
          "展开：\\((9-6y^2+y^4)-(1+2y^2+y^4)=8-8y^2\\)，由偶函数对称性 \\(V=2\\pi\\int_0^1(8-8y^2)\\,\\mathrm{d}y\\)。 · Expand: \\((9-6y^2+y^4)-(1+2y^2+y^4)=8-8y^2\\); by even symmetry \\(V=2\\pi\\int_0^1(8-8y^2)\\,\\mathrm{d}y\\).",
          "\\(V=2\\pi\\left(8-\\dfrac{8}{3}\\right)=2\\pi\\cdot\\dfrac{16}{3}=\\dfrac{32\\pi}{3}\\approx33.51\\)。 · \\(V=\\dfrac{32\\pi}{3}\\approx33.51\\)."
        ],
        "solution": "\\(V=\\dfrac{32\\pi}{3}\\approx33.51\\) 立方单位。 · \\(V=\\dfrac{32\\pi}{3}\\approx33.51\\) cubic units.",
        "solutionLatex": "V=\\pi\\int_{-1}^{1}\\left[(3-y^2)^{2}-(1+y^2)^{2}\\right]\\mathrm{d}y=\\dfrac{32\\pi}{3}"
      },
      {
        "title": "例 5 · 常值间隙 · Constant Gap",
        "prompt": "区域由 \\(y=\\sqrt{x}\\)、\\(y=0\\)、\\(x=0\\)、\\(x=4\\) 围成，绕 \\(y=-1\\) 旋转。求体积，并解释内半径。 · The region bounded by \\(y=\\sqrt{x}\\), \\(y=0\\), \\(x=0\\), and \\(x=4\\) is revolved about \\(y=-1\\). Find the volume and explain the inner radius.",
        "steps": [
          "轴 \\(y=-1\\) 在区域下方；上边界 \\(y=\\sqrt{x}\\) 到轴的距离为 \\(\\sqrt{x}+1\\)，下边界 \\(y=0\\) 到轴的距离为 1。 · The axis \\(y=-1\\) is below the region; the upper boundary is \\(\\sqrt{x}+1\\) from the axis and the lower boundary is 1 away.",
          "外半径 \\(R_{\\mathrm{out}}=\\sqrt{x}+1\\)，内半径 \\(R_{\\mathrm{in}}=1\\)；内半径来自区域与轴之间的常值间隙。 · Outer radius \\(\\sqrt{x}+1\\), inner radius \\(1\\); the inner radius comes from the constant gap between the region and the axis.",
          "\\(V=\\pi\\int_0^4\\left[(\\sqrt{x}+1)^2-1^2\\right]\\mathrm{d}x=\\pi\\int_0^4(x+2\\sqrt{x})\\,\\mathrm{d}x\\)。 · \\(V=\\pi\\int_0^4\\left[(\\sqrt{x}+1)^2-1\\right]\\mathrm{d}x=\\pi\\int_0^4(x+2\\sqrt{x})\\,\\mathrm{d}x\\).",
          "\\(\\int_0^4x\\,\\mathrm{d}x=8\\)，\\(\\int_0^4 2\\sqrt{x}\\,\\mathrm{d}x=\\dfrac{32}{3}\\)，故 \\(V=\\pi\\left(8+\\dfrac{32}{3}\\right)=\\dfrac{56\\pi}{3}\\)。 · The pieces are \\(8\\) and \\(\\dfrac{32}{3}\\), so \\(V=\\dfrac{56\\pi}{3}\\).",
          "\\(V=\\dfrac{56\\pi}{3}\\approx58.64\\) 立方单位。 · \\(V=\\dfrac{56\\pi}{3}\\approx58.64\\) cubic units."
        ],
        "solution": "\\(V=\\dfrac{56\\pi}{3}\\approx58.64\\)。 · \\(V=\\dfrac{56\\pi}{3}\\approx58.64\\).",
        "solutionLatex": "V=\\pi\\int_0^4\\left[(\\sqrt{x}+1)^{2}-1\\right]\\mathrm{d}x=\\dfrac{56\\pi}{3}"
      }
    ],
    "examTips": [
      "先画轴和两个半径，确认外半径是离轴较远的边界；不要默认上曲线就是外半径。 · Draw the axis and both radii; confirm the outer radius belongs to the boundary farther from the axis. Do not assume the upper curve is outer.",
      "写公式时先写 \\(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2\\)，再代入；不要写成 \\((R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\)。 · Write \\(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2\\) before substituting; do not write \\((R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\).",
      "绕水平轴用 \\(\\mathrm{d}x\\)，绕垂直轴用 \\(\\mathrm{d}y\\) 并把曲线解成 \\(x=g(y)\\)。 · Use \\(\\mathrm{d}x\\) for a horizontal axis and \\(\\mathrm{d}y\\) for a vertical axis, solving curves as \\(x=g(y)\\).",
      "区域与轴之间有常值间隙时，内半径就是间隙宽度，不要忽略。 · When a constant gap separates the region from the axis, the inner radius is the gap width; do not ignore it.",
      "曲线交叉时分段，并在每段重新判断内外半径。 · Split at curve crossings and reassign inner and outer radii on each piece.",
      "用 \\(R_{\\mathrm{in}}=0\\) 检查是否能退化为圆盘法；若不能，说明确实需要垫圈法。 · Check whether \\(R_{\\mathrm{in}}=0\\) reduces the problem to the disk method; if not, the washer method is genuinely needed.",
      "答案保留 \\(\\pi\\) 的精确形式，并按题目要求给近似值。 · Keep the exact form with \\(\\pi\\) and give an approximation when requested.",
      "最后用单位与“离轴越远体积越大”检查结果。 · Check the result with units and the principle that a region farther from the axis gives a larger volume."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.11",
        "title": "垫圈法",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.13",
        "title": "弧长",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：8.11 的垫圈法绕坐标轴；本节把旋转轴平移到任意 \\(y=k\\) 或 \\(x=h\\)，两个半径都要重新量。 · Upstream: 8.11 covers the washer method about coordinate axes; this topic shifts the axis to any \\(y=k\\) or \\(x=h\\), so both radii must be remeasured.",
      "同单元：8.10 的圆盘法是内半径为 0 的垫圈法；8.9 的圆盘法又是 8.10 在 \\(k=0\\) 或 \\(h=0\\) 时的特例。 · Within the unit: the disk method in 8.10 is the washer method with inner radius 0; the disk method in 8.9 is the special case of 8.10 with \\(k=0\\) or \\(h=0\\).",
      "应用：管道、轴承、垫圈与空心旋转零件的体积都可用垫圈法估算，内半径对应孔径。 · Applications: pipes, bearings, washers, and hollow rotated parts can be modeled with the washer method, where the inner radius corresponds to the bore."
    ],
    "intuitionDetailed": "垫圈法的核心是“两个半径，同一条轴”。先画旋转轴，再画两条从边界垂直到轴的线段：较长的是外半径，较短的是内半径。旋转后，外半径扫出大圆盘，内半径扫出被挖掉的小圆盘；一片垫圈的体积就是两者之差。轴平移时，两个半径都要减去同一个轴的坐标，所以不能只改一条曲线。若内半径为 0，小圆盘消失，垫圈法就变成圆盘法。 · The core of the washer method is “two radii, one axis.” Draw the axis first, then two perpendicular segments from the boundaries to the axis: the longer is the outer radius and the shorter is the inner radius. After revolution, the outer radius sweeps a large disk and the inner radius sweeps a small disk that is removed; one washer's volume is the difference. When the axis shifts, both radii subtract the same axis coordinate, so changing only one curve is wrong. If the inner radius is zero, the small disk disappears and the washer method becomes the disk method.",
    "development": [
      "回顾先修：复习 8.11 绕坐标轴的垫圈法与 8.10 其他轴的圆盘法。 · Review 8.11 for the coordinate-axis washer method and 8.10 for the disk method about other axes.",
      "画轴与两半径：在图上标出外半径与内半径，确认它们都垂直于同一条轴。 · Draw the axis and both radii: label outer and inner radii, confirming both are perpendicular to the same axis.",
      "写半径表达式：水平轴用 \\(|f-k|\\) 与 \\(|g-k|\\)；垂直轴先解出 \\(x=g(y)\\)，再用 \\(|g-h|\\)。 · Write the radii: use \\(|f-k|\\) and \\(|g-k|\\) for a horizontal axis; for a vertical axis, solve \\(x=g(y)\\) and use \\(|g-h|\\).",
      "判断内外：比较两个距离，较大者为外半径；若曲线交叉，分段判断。 · Decide inner versus outer by comparing the distances; split at crossings if necessary.",
      "建立并求值：写出 \\(V=\\pi\\int(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\)，展开后逐项积分。 · Set up and evaluate: write \\(V=\\pi\\int(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\), expand, and integrate term by term.",
      "检验：用 \\(R_{\\mathrm{in}}=0\\) 退化、单位与“离轴越远体积越大”检查结果。 · Check by reducing to \\(R_{\\mathrm{in}}=0\\), by units, and by the principle that farther regions give larger volumes."
    ],
    "checks": [
      "圆环面积为什么是 \\(\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\)，而不是 \\(\\pi(R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\)？ · Why is the ring area \\(\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\) rather than \\(\\pi(R_{\\mathrm{out}}-R_{\\mathrm{in}})^2\\)?",
      "绕 \\(y=2\\) 旋转时，若区域在轴下方，哪条曲线给出外半径？ · When revolving about \\(y=2\\) with the region below the axis, which curve gives the outer radius?",
      "绕 \\(x=-1\\) 旋转时，为什么两个半径都要加 1？ · When revolving about \\(x=-1\\), why must both radii add 1?",
      "什么情况下垫圈法退化为圆盘法？能否举一个内半径为常数的例子？ · When does the washer method reduce to the disk method? Can you give an example with a constant inner radius?",
      "曲线在区间内交叉时，为什么必须分段？如果不分段会发生什么？ · Why must the interval be split when curves cross? What goes wrong otherwise?",
      "若算出的体积为负，最可能错在哪里？如何用图像检查？ · If a computed volume is negative, where is the error most likely? How can a graph help?"
    ],
    "vocabulary": [
      {
        "termZh": "垫圈法",
        "termEn": "washer method",
        "defZh": "旋转区域与轴之间有间隙时，用外圆面积减内圆面积积分求体积。",
        "defEn": "Integrating outer disk area minus inner disk area when a gap separates the region from the axis."
      },
      {
        "termZh": "外半径",
        "termEn": "outer radius",
        "defZh": "离旋转轴较远的边界到轴的垂直距离 \\(R_{\\mathrm{out}}\\)。",
        "defEn": "The perpendicular distance \\(R_{\\mathrm{out}}\\) from the farther boundary to the axis."
      },
      {
        "termZh": "内半径",
        "termEn": "inner radius",
        "defZh": "离旋转轴较近的边界到轴的垂直距离 \\(R_{\\mathrm{in}}\\)。",
        "defEn": "The perpendicular distance \\(R_{\\mathrm{in}}\\) from the nearer boundary to the axis."
      },
      {
        "termZh": "圆环",
        "termEn": "annulus",
        "defZh": "两个同心圆之间的区域，面积 \\(\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\)。",
        "defEn": "The region between two concentric circles, with area \\(\\pi(R_{\\mathrm{out}}^2-R_{\\mathrm{in}}^2)\\)."
      },
      {
        "termZh": "旋转轴",
        "termEn": "axis of rotation",
        "defZh": "决定内外半径与积分变量的直线。",
        "defEn": "The line that determines the inner and outer radii and the integration variable."
      },
      {
        "termZh": "环形截面",
        "termEn": "ring cross section",
        "defZh": "垂直于旋转轴的截面，形状为圆环。",
        "defEn": "A cross section perpendicular to the axis, shaped as a ring."
      },
      {
        "termZh": "旋转体",
        "termEn": "solid of revolution",
        "defZh": "平面区域绕一条轴旋转所得的三维立体。",
        "defEn": "The three-dimensional solid obtained by revolving a planar region about an axis."
      },
      {
        "termZh": "垂直距离",
        "termEn": "perpendicular distance",
        "defZh": "从边界到旋转轴的垂线长度，外半径与内半径都按此定义。",
        "defEn": "The perpendicular length from a boundary to the axis; both outer and inner radii are defined this way."
      }
    ]
  },
  "8.13": {
    "id": "math/calc-u8/8.13",
    "subject": "math",
    "chapterId": "calc-u8",
    "unitCode": "8",
    "unitTitleZh": "积分的应用",
    "unitTitleEn": "Applications of Integration",
    "code": "8.13",
    "titleZh": "弧长",
    "titleEn": "The Arc Length of a Smooth, Planar Curve and Distance Traveled",
    "layer": "ap",
    "summary": "弧长 · The Arc Length of a Smooth, Planar Curve and Distance Traveled",
    "learningObjectives": [
      "能陈述「弧长」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Arc Length of a Smooth, Planar Curve and Distance Traveled：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「弧长」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "弧长（The Arc Length of a Smooth, Planar Curve and Distance Traveled）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「弧长」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "L=\\int_a^b\\sqrt{1+(y')^{2}}\\,\\mathrm{d}x",
        "note": "光滑曲线 y=f(x) 的弧长。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「弧长」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "f 在 [a,b] 上连续可导，y' 连续",
      "曲线不自交；a<b",
      "对参数曲线应改用 ∫√((dx/dt)²+(dy/dt)²) dt"
    ],
    "keyPoints": [
      "掌握 8.13「弧长」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「弧长」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「弧长」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "L=\\int_a^b\\sqrt{1+(y')^{2}}\\,\\mathrm{d}x"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「弧长」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「弧长」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「弧长」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u8",
        "code": "8.12",
        "title": "垫圈法其他轴",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「弧长」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「弧长」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「弧长」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "弧长",
        "termEn": "arc length",
        "defZh": "平面曲线从 \\(a\\) 到 \\(b\\) 的实际长度。",
        "defEn": "The actual length of a plane curve from \\(a\\) to \\(b\\)."
      },
      {
        "termZh": "弧长公式",
        "termEn": "arc length formula",
        "defZh": "\\(L=\\int_a^b\\sqrt{1+[f'(x)]^{2}}\\,\\mathrm{d}x\\)。",
        "defEn": "The length is \\(L=\\int_a^b\\sqrt{1+[f'(x)]^{2}}\\,\\mathrm{d}x\\)."
      },
      {
        "termZh": "弧长元",
        "termEn": "arc length element",
        "defZh": "\\(\\mathrm{d}s=\\sqrt{1+[f'(x)]^{2}}\\,\\mathrm{d}x\\) 是一小段曲线的长度。",
        "defEn": "The element \\(\\mathrm{d}s=\\sqrt{1+[f'(x)]^{2}}\\,\\mathrm{d}x\\), the length of a small piece of curve."
      },
      {
        "termZh": "光滑曲线",
        "termEn": "smooth curve",
        "defZh": "导数连续的曲线。",
        "defEn": "A curve whose derivative is continuous."
      },
      {
        "termZh": "行驶距离",
        "termEn": "distance traveled",
        "defZh": "沿路径累积的弧长，等于速率对时间的积分。",
        "defEn": "Arc length accumulated along a path, equal to the integral of speed over time."
      },
      {
        "termZh": "勾股近似",
        "termEn": "Pythagorean approximation",
        "defZh": "用 \\(\\sqrt{(\\Delta x)^{2}+(\\Delta y)^{2}}\\) 近似一小段弧长。",
        "defEn": "Approximating a small arc length by \\(\\sqrt{(\\Delta x)^{2}+(\\Delta y)^{2}}\\)."
      }
    ]
  }
};
