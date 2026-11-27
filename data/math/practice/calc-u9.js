/** Practice bank for calc-u9 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u9",
  "code": "9",
  "titleZh": "参数、极坐标与向量 · parametric, polar, and vector-valued functions",
  "titleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u9-1": {
    "title": "参数运动导数 · 参数路径 · Defining and Differentiating Parametric Equations: parametric path",
    "text": "粒子路径 x(t)=t², y(t)=t³ − 3t（t≥0）。 · The particle’s path is x(t)=t², y(t)=t³ − 3t (t≥0).",
    "table": {
      "headers": [
        "t",
        "x",
        "y"
      ],
      "rows": [
        [
          "0",
          "0",
          "0"
        ],
        [
          "1",
          "1",
          "−2"
        ],
        [
          "2",
          "4",
          "2"
        ]
      ]
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u9-extra1",
    "title": "参数方程的运动与二阶导数 · motion and the second derivative for parametric equations",
    "stimulus": {
      "title": "参数路径 · parametric path",
      "text": "粒子路径为 x(t)=t²+t，y(t)=t³−3t（t≥0）。 · The path is x(t)=t²+t, y(t)=t³−3t, with t≥0.",
      "table": {
        "headers": [
          "t",
          "x",
          "y"
        ],
        "rows": [
          [
            "0",
            "0",
            "0"
          ],
          [
            "1",
            "2",
            "−2"
          ],
          [
            "2",
            "6",
            "2"
          ],
          [
            "3",
            "12",
            "18"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            0
          ],
          [
            2,
            -2
          ],
          [
            6,
            2
          ],
          [
            12,
            18
          ]
        ],
        "xLabel": "x",
        "yLabel": "y"
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u9-q001",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "参数求导 · parametric derivative",
        "check": "symbolic",
        "stemLatex": "\\text{用  · use }t\\text{ 表示  ·  in terms of }\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}",
        "expected": "(3*t^2-3)/(2*t+1)",
        "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3t^{2}-3}{2t+1}",
        "solution": "分别对 t 求导，再取商。 · Differentiate each with respect to t, then divide.",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}"
      },
      {
        "id": "calc-u9-q002",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "二阶导数 · second derivative",
        "check": "numeric",
        "stem": "求 t=1 处的 d²y/dx²。 · Find d²y/dx² at t=1.",
        "expected": 0.6666666666666666,
        "tol": 0.01,
        "answerLatex": "\\dfrac{2}{3}",
        "solution": "先对一阶导数再对 t 求导，最后与 x 对 t 的导数相除；在 t=1 得三分之二。 · Differentiate the first derivative again with respect to t, then divide by dx/dt; at t=1 the result is two thirds.",
        "solutionLatex": "\\left.\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{t=1}=\\dfrac{2}{3}"
      },
      {
        "id": "calc-u9-q003",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "水平切线 · horizontal tangent",
        "check": "numeric",
        "stem": "求 t≥0 时使切线水平的 t。 · Find a t≥0 at which the tangent is horizontal.",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "y′=3t²−3=0 得 t=±1；取 t=1，此时 x′=3≠0。 · y′=3t²−3=0 gives t=±1. Take t=1; then x′=3≠0."
      },
      {
        "id": "calc-u9-q004",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "速率 · speed",
        "check": "numeric",
        "stem": "求 t=1 时粒子的速率。 · Find the particle’s speed at t=1.",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3",
        "solution": "x′=2t+1，y′=3t²−3；t=1 时速度为 (3,0)，速率为 3。 · x′=2t+1 and y′=3t²−3. At t=1 the velocity is (3,0) and the speed is 3."
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u9-set1",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-calc-u9-1",
    "stimulus": {
      "title": "参数运动导数 · 参数路径 · Defining and Differentiating Parametric Equations: parametric path",
      "text": "粒子路径 x(t)=t², y(t)=t³ − 3t（t≥0）。 · The particle’s path is x(t)=t², y(t)=t³ − 3t (t≥0).",
      "table": {
        "headers": [
          "t",
          "x",
          "y"
        ],
        "rows": [
          [
            "0",
            "0",
            "0"
          ],
          [
            "1",
            "1",
            "−2"
          ],
          [
            "2",
            "4",
            "2"
          ]
        ]
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "calc-u9-q005",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "速度分量 · velocity components",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "x=t^{2},\\;y=t^{3}-3t\\text{：求  · : find }\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\text{（用  · (in terms of }t\\text{ 表示） ·  in terms of)}",
        "expected": "(3t^2-3)/(2t)",
        "answerLatex": "\\dfrac{3t^{2}-3}{2t}",
        "solution": "分别对 t 求导，再取商。 · Differentiate each with respect to t, then divide.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u9-q006",
        "difficulty": "中 · Medium",
        "calculator": true,
        "title": "水平切线 · horizontal tangent",
        "type": "frq",
        "check": "numeric",
        "stem": "dy/dt=0 且 dx/dt≠0 时 t 的一个正解？ · What is one positive t for which dy/dt=0 and dx/dt≠0?",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "3t²−3=0 ⇒ t=±1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u9-q007",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "弧长被积 · arc-length integrand",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{弧长元  · arc-length element }\\sqrt{(x')^{2}+(y')^{2}}\\text{（}x=t^{2},y=t^{3}-3t\\text{）}",
        "expected": "sqrt(4t^2+(3t^2-3)^2)",
        "answerLatex": "\\sqrt{4t^{2}+(3t^{2}-3)^{2}}",
        "solution": "定义。 · Definition.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u9-q008",
    "title": "9.1 符号 · 9.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q009",
    "title": "9.2 概念 · 9.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「参数二阶导数」，下列正确的是？ · Which of the following is correct about “Second Derivatives of Parametric Equations”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q010",
    "title": "9.3 计算 · 9.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q011",
    "title": "9.4 论述 · 向量值函数 · 9.4 Argument: Defining and Differentiating Vector-Valued Functions",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「向量值函数」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Defining and Differentiating Vector-Valued Functions”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q012",
    "title": "9.5 符号 · 9.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q013",
    "title": "9.6 概念 · 9.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「向量运动解题」，下列正确的是？ · Which of the following is correct about “Solving Motion Problems Using Parametric and Vector-Valued Functions”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q014",
    "title": "9.7 计算 · 9.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q015",
    "title": "9.8 论述 · 极坐标面积 · 9.8 Argument: Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「极坐标面积」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q016",
    "title": "9.9 符号 · 9.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q017",
    "title": "9.1 概念 · 9.1 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「参数运动导数」，下列正确的是？ · Which of the following is correct about “Defining and Differentiating Parametric Equations”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q018",
    "title": "9.2 计算 · 9.2 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q019",
    "title": "9.3 论述 · 参数弧长 · 9.3 Argument: Finding Arc Lengths of Curves Given by Parametric Equations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「参数弧长」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Finding Arc Lengths of Curves Given by Parametric Equations”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q020",
    "title": "9.4 符号 · 9.4 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q021",
    "title": "9.5 概念 · 9.5 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「向量值函数积分」，下列正确的是？ · Which of the following is correct about “Integrating Vector-Valued Functions”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q022",
    "title": "9.6 计算 · 9.6 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q023",
    "title": "9.7 论述 · 极坐标导数 · 9.7 Argument: Defining Polar Coordinates and Differentiating in Polar Form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「极坐标导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Defining Polar Coordinates and Differentiating in Polar Form”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q024",
    "title": "9.8 符号 · 9.8 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q025",
    "title": "9.9 概念 · 9.9 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「两极曲线间面积」，下列正确的是？ · Which of the following is correct about “Finding the Area of the Region Bounded by Two Polar Curves”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q026",
    "title": "9.1 计算 · 9.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q027",
    "title": "9.2 论述 · 参数二阶导数 · 9.2 Argument: Second Derivatives of Parametric Equations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「参数二阶导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Second Derivatives of Parametric Equations”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q028",
    "title": "9.3 符号 · 9.3 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q029",
    "title": "9.4 概念 · 9.4 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「向量值函数」，下列正确的是？ · Which of the following is correct about “Defining and Differentiating Vector-Valued Functions”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q030",
    "title": "9.5 计算 · 9.5 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q031",
    "title": "9.6 论述 · 向量运动解题 · 9.6 Argument: Solving Motion Problems Using Parametric and Vector-Valued Functions",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「向量运动解题」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Solving Motion Problems Using Parametric and Vector-Valued Functions”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q032",
    "title": "9.7 符号 · 9.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q033",
    "title": "9.8 概念 · 9.8 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极坐标面积」，下列正确的是？ · Which of the following is correct about “Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q034",
    "title": "9.9 计算 · 9.9 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q035",
    "title": "9.1 论述 · 参数运动导数 · 9.1 Argument: Defining and Differentiating Parametric Equations",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「参数运动导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Defining and Differentiating Parametric Equations”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q036",
    "title": "9.2 符号 · 9.2 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q037",
    "title": "9.3 概念 · 9.3 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「参数弧长」，下列正确的是？ · Which of the following is correct about “Finding Arc Lengths of Curves Given by Parametric Equations”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q038",
    "title": "9.4 计算 · 9.4 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q039",
    "title": "9.5 论述 · 向量值函数积分 · 9.5 Argument: Integrating Vector-Valued Functions",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「向量值函数积分」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Integrating Vector-Valued Functions”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q040",
    "title": "9.6 符号 · 9.6 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q041",
    "title": "9.7 概念 · 9.7 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「极坐标导数」，下列正确的是？ · Which of the following is correct about “Defining Polar Coordinates and Differentiating in Polar Form”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q042",
    "title": "9.8 计算 · 9.8 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q043",
    "title": "9.9 论述 · 两极曲线间面积 · 9.9 Argument: Finding the Area of the Region Bounded by Two Polar Curves",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「两极曲线间面积」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Finding the Area of the Region Bounded by Two Polar Curves”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q044",
    "title": "9.1 符号 · 9.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q045",
    "title": "9.2 概念 · 9.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「参数二阶导数」，下列正确的是？ · Which of the following is correct about “Second Derivatives of Parametric Equations”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q046",
    "title": "9.3 计算 · 9.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q047",
    "title": "9.4 论述 · 向量值函数 · 9.4 Argument: Defining and Differentiating Vector-Valued Functions",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「向量值函数」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Defining and Differentiating Vector-Valued Functions”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q048",
    "title": "9.5 符号 · 9.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q049",
    "title": "9.6 概念 · 9.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「向量运动解题」，下列正确的是？ · Which of the following is correct about “Solving Motion Problems Using Parametric and Vector-Valued Functions”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q050",
    "title": "9.7 计算 · 9.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q051",
    "title": "9.8 论述 · 极坐标面积 · 9.8 Argument: Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「极坐标面积」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q052",
    "title": "9.9 符号 · 9.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q053",
    "title": "9.1 概念 · 9.1 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「参数运动导数」，下列正确的是？ · Which of the following is correct about “Defining and Differentiating Parametric Equations”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q054",
    "title": "9.2 计算 · 9.2 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q055",
    "title": "9.3 论述 · 参数弧长 · 9.3 Argument: Finding Arc Lengths of Curves Given by Parametric Equations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「参数弧长」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Finding Arc Lengths of Curves Given by Parametric Equations”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q056",
    "title": "9.4 符号 · 9.4 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q057",
    "title": "9.5 概念 · 9.5 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「向量值函数积分」，下列正确的是？ · Which of the following is correct about “Integrating Vector-Valued Functions”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q058",
    "title": "9.6 计算 · 9.6 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q059",
    "title": "9.7 论述 · 极坐标导数 · 9.7 Argument: Defining Polar Coordinates and Differentiating in Polar Form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「极坐标导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Defining Polar Coordinates and Differentiating in Polar Form”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q060",
    "title": "9.8 符号 · 9.8 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q061",
    "title": "9.9 概念 · 9.9 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「两极曲线间面积」，下列正确的是？ · Which of the following is correct about “Finding the Area of the Region Bounded by Two Polar Curves”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q062",
    "title": "9.1 计算 · 9.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q063",
    "title": "9.2 论述 · 参数二阶导数 · 9.2 Argument: Second Derivatives of Parametric Equations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「参数二阶导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Second Derivatives of Parametric Equations”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q064",
    "title": "9.3 符号 · 9.3 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q065",
    "title": "9.4 概念 · 9.4 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「向量值函数」，下列正确的是？ · Which of the following is correct about “Defining and Differentiating Vector-Valued Functions”?",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q066",
    "title": "9.5 计算 · 9.5 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在  ·  at }t=1\\text{ 的  ·  of }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "分别对 t 求导后取商，在 t=1 处得到 1.5。 · Differentiate each with respect to t and divide; at t=1 the quotient is 1.5.",
    "solutionLatex": "\\left.\\dfrac{3t^{2}}{2t}\\right|_{t=1}=\\dfrac{3}{2}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q067",
    "title": "9.6 论述 · 向量运动解题 · 9.6 Argument: Solving Motion Problems Using Parametric and Vector-Valued Functions",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「向量运动解题」：说明同一曲线不同参数化时 dy/dx 不变的原因。 · For “Solving Motion Problems Using Parametric and Vector-Valued Functions”, explain why dy/dx stays the same when the same curve is parameterized differently",
    "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\cdot\\dfrac{\\mathrm{d}t}{\\mathrm{d}x}",
    "answer": "因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s)，链式法则把 y 对 x 的导数写成 y、x 分别对 t 的导数之比，参数变化率在约分中抵消；只要 x 对 t 的导数不为零，商就保持不变。 · The slope of the tangent is a geometric quantity, independent of the parameter. If the parameter changes to t=t(s), the chain rule writes dy/dx as the ratio of dy/dt and dx/dt, and the parameter’s rate cancels. The quotient is unchanged as long as dx/dt is not zero.",
    "solution": "参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。 · A parameterization is only a way of traveling along the curve; the chain rule cancels the parameter’s rate in the quotient.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q068",
    "title": "9.7 符号 · 9.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot(t)",
    "answerLatex": "-\\cot t",
    "solution": "参数导数之比为 −cot t。 · The ratio of the parametric derivatives is −cot t.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u9-frq1",
    "title": "极坐标面积 · polar area",
    "stimulus": {
      "title": "心脏线 · cardioid",
      "text": "极坐标曲线 r=1+cos θ（0≤θ≤2π）。 · The polar curve r=1+cos θ, for 0≤θ≤2π.",
      "textLatex": "r=1+\\cos\\theta",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u9-frq1-q1",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "曲线特征 · features of the curve",
        "stem": "指出该曲线在极轴上的最远点与在 θ=π 处的位置，并说明它关于哪条轴对称。 · Name the farthest point of the curve on the polar axis and its position at θ=π, and say which axis it is symmetric about.",
        "answer": "θ=0 时 r=2，是最远点 (2,0)；θ=π 时 r=0，回到极点。曲线关于极轴（x 轴）对称，因为 cos(−θ)=cos θ。 · At θ=0, r=2, the farthest point (2,0); at θ=π, r=0, back at the pole. The curve is symmetric about the polar axis (the x-axis) because cos(−θ)=cos θ.",
        "solution": "心脏线 r=a(1+cos θ) 关于极轴对称，尖点在极点。 · The cardioid r=a(1+cos θ) is symmetric about the polar axis, with a cusp at the pole."
      },
      {
        "id": "calc-u9-frq1-q2",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "面积积分 · area integral",
        "stemLatex": "\\text{写出该曲线所围面积的积分表达式 · write the integral for the area enclosed by this curve}",
        "answerLatex": "A=\\dfrac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^{2}\\,\\mathrm{d}\\theta",
        "answer": "面积元为 r²dθ 的一半，故 A 等于 (1+cosθ)² 对 θ 从 0 到 2π 积分后取一半。 · The area element is half of r² dθ, so A is half the integral of (1+cos θ)² in θ from 0 to 2π.",
        "solution": "极坐标面积公式：先对 r² 积分，再取一半。 · Polar area: integrate r² first, then take half."
      },
      {
        "id": "calc-u9-frq1-q3",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "面积值 · area value",
        "check": "numeric",
        "stem": "求该曲线所围面积。 · Find the area enclosed by the curve.",
        "expected": 4.71238898038469,
        "tol": 0.01,
        "answerLatex": "\\dfrac{3\\pi}{2}",
        "solution": "展开被积函数，利用 cos²θ 在一个周期上的积分为 π。 · Expand the integrand and use the fact that the integral of cos²θ over one period is π.",
        "solutionLatex": "A=\\dfrac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^{2}\\,\\mathrm{d}\\theta=\\dfrac{1}{2}(2\\pi+\\pi)=\\dfrac{3\\pi}{2}"
      }
    ]
  },
  {
    "id": "calc-u9-b09-q1",
    "title": "9.4 向量值函数的速率 · Speed of a vector-valued function",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stem": "向量值函数 r(t)=⟨2cos t, sin 2t⟩。求 t=π/6 时的速率 ‖r′(t)‖。 · For the vector-valued function r(t)=⟨2cos t, sin 2t⟩, find the speed ‖r′(t)‖ at t=π/6.",
    "expected": 1.4142135623730951,
    "tol": 0.01,
    "answerLatex": "\\sqrt{2}",
    "solution": "逐分量求导：r′(t)=⟨−2sin t, 2cos 2t⟩。在 t=π/6，r′(π/6)=⟨−1, 1⟩，速率是速度向量的大小 ‖r′‖=√(1+1)=√2≈1.414。速度是向量，速率是非负标量。 · Differentiate componentwise: r′(t)=⟨−2sin t, 2cos 2t⟩. At t=π/6, r′(π/6)=⟨−1, 1⟩, so the speed is √(1²+1²)=√2. Velocity is a vector; speed is a nonnegative scalar.",
    "solutionLatex": "\\vec r'(t)=\\langle-2\\sin t,\\ 2\\cos 2t\\rangle,\\qquad \\vec r'\\!\\left(\\dfrac{\\pi}{6}\\right)=\\langle-1,\\ 1\\rangle,\\qquad \\|\\vec r'\\|=\\sqrt{2}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 9.4 向量值函数逐分量求导与速率。 · Original AP-style item, not an official item; for 9.4, differentiating a vector-valued function componentwise and finding speed.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u9/9.4",
        "label": "9.4 向量值函数 · 9.4 Defining and Differentiating Vector-Valued Functions",
        "topicId": "calc-u9:9.4"
      }
    ]
  }
];
