/** Practice bank for calc-u2 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u2",
  "code": "2",
  "titleZh": "导数：定义与基本性质 · derivatives: definition and basic properties",
  "titleEn": "Differentiation: Definition and Fundamental Properties",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u2-extra1",
    "title": "导数定义与积商法则 · the derivative definition and the product and quotient rules",
    "stimulus": {
      "title": "可微函数 f、g 的局部数据 · Local data for the differentiable functions f and g",
      "text": "下表给出可微函数 f、g 在 x=1 附近的取值与导数。 · The table gives values and derivatives of the differentiable functions f and g near x=1.",
      "table": {
        "headers": [
          "x",
          "f(x)",
          "g(x)",
          "f'(x)",
          "g'(x)"
        ],
        "rows": [
          [
            "1",
            "−2",
            "2",
            "0",
            "2"
          ],
          [
            "1.1",
            "−1.969",
            "2.21",
            "—",
            "—"
          ]
        ]
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u2-q001",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": true,
        "title": "差分商估计 · difference-quotient estimate",
        "check": "numeric",
        "stem": "用 x=1 与 x=1.1 的差分商估计 f′(1)。 · Use the difference quotient from x=1 to x=1.1 to estimate f′(1).",
        "expected": 0.31,
        "tol": 0.01,
        "answerLatex": "0.31",
        "solution": "函数值增量与横坐标增量之比为 0.31，即割线斜率。 · The ratio of the change in function value to the change in x is 0.31, the secant slope.",
        "solutionLatex": "\\dfrac{-1.969-(-2)}{0.1}=0.31"
      },
      {
        "id": "calc-u2-q002",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "乘积法则 · product rule",
        "check": "numeric",
        "stem": "求 (fg)′(1)。 · Find (fg)′(1).",
        "expected": -4,
        "tol": 0.01,
        "answerLatex": "-4",
        "solution": "f′(1)g(1)+f(1)g′(1)=0·2+(−2)·2=−4。"
      },
      {
        "id": "calc-u2-q003",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "商法则 · quotient rule",
        "check": "numeric",
        "stem": "求 (f/g)′(1)。 · Find (f/g)′(1).",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "商法则：分子为 0·2−(−2)·2=4，分母为 2²=4，故为 1。 · Quotient rule: the numerator is 0·2−(−2)·2=4 and the denominator is 2²=4, so the derivative is 1."
      },
      {
        "id": "calc-u2-q004",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "切线方程 · tangent-line equation",
        "check": "symbolic",
        "stem": "求曲线 y=g(x) 在 x=1 处的切线方程，写成 y=… 右侧的表达式。 · Find the tangent line to y=g(x) at x=1, and write the expression to the right of y=….",
        "expected": "2*x",
        "answerLatex": "y=2x",
        "solution": "g(1)=2，g′(1)=2，所以 y−2=2(x−1)，即 y=2x。 · g(1)=2 and g′(1)=2, so y−2=2(x−1), that is y=2x."
      }
    ]
  },
  {
    "id": "calc-u2-q005",
    "title": "2.1 瞬时变化率 · 变式 · Variant: Defining Average and Instantaneous Rates of Change",
    "difficulty": "易 · Easy",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q006",
    "title": "2.2 符号 · 2.2 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q007",
    "title": "2.3 概念 · 2.3 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「估计函数在某点处的导数」，下列正确的是？ · Which of the following is correct about “Estimating Derivatives of a Function at a Point”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q008",
    "title": "2.4 计算 · 2.4 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q009",
    "title": "2.5 论述 · 幂函数导数 · 2.5 Argument: Applying the Power Rule",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「幂函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Applying the Power Rule”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q010",
    "title": "2.6 常数倍与和差 · 变式 · Variant: Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "difficulty": "难 · Hard",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q011",
    "title": "2.7 符号 · 2.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q012",
    "title": "2.8 概念 · 2.8 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「乘积法则」，下列正确的是？ · Which of the following is correct about “The Product Rule”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q013",
    "title": "2.9 计算 · 2.9 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q014",
    "title": "2.10 论述 · 三角函数导数 · 2.10 Argument: Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q015",
    "title": "2.1 瞬时变化率 · 变式 · Variant: Defining Average and Instantaneous Rates of Change",
    "difficulty": "中 · Medium",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q016",
    "title": "2.2 符号 · 2.2 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q017",
    "title": "2.3 概念 · 2.3 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「估计函数在某点处的导数」，下列正确的是？ · Which of the following is correct about “Estimating Derivatives of a Function at a Point”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q018",
    "title": "2.4 计算 · 2.4 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q019",
    "title": "2.5 论述 · 幂函数导数 · 2.5 Argument: Applying the Power Rule",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「幂函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Applying the Power Rule”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q020",
    "title": "2.6 常数倍与和差 · 变式 · Variant: Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "difficulty": "易 · Easy",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q021",
    "title": "2.7 符号 · 2.7 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q022",
    "title": "2.8 概念 · 2.8 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「乘积法则」，下列正确的是？ · Which of the following is correct about “The Product Rule”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q023",
    "title": "2.9 计算 · 2.9 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q024",
    "title": "2.10 论述 · 三角函数导数 · 2.10 Argument: Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q025",
    "title": "2.1 瞬时变化率 · 变式 · Variant: Defining Average and Instantaneous Rates of Change",
    "difficulty": "难 · Hard",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q026",
    "title": "2.2 符号 · 2.2 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q027",
    "title": "2.3 概念 · 2.3 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「估计函数在某点处的导数」，下列正确的是？ · Which of the following is correct about “Estimating Derivatives of a Function at a Point”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q028",
    "title": "2.4 计算 · 2.4 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q029",
    "title": "2.5 论述 · 幂函数导数 · 2.5 Argument: Applying the Power Rule",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「幂函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Applying the Power Rule”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q030",
    "title": "2.6 常数倍与和差 · 变式 · Variant: Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "difficulty": "中 · Medium",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q031",
    "title": "2.7 符号 · 2.7 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q032",
    "title": "2.8 概念 · 2.8 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「乘积法则」，下列正确的是？ · Which of the following is correct about “The Product Rule”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q033",
    "title": "2.9 计算 · 2.9 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q034",
    "title": "2.10 论述 · 三角函数导数 · 2.10 Argument: Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q035",
    "title": "2.1 瞬时变化率 · 变式 · Variant: Defining Average and Instantaneous Rates of Change",
    "difficulty": "易 · Easy",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q036",
    "title": "2.2 符号 · 2.2 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q037",
    "title": "2.3 概念 · 2.3 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「估计函数在某点处的导数」，下列正确的是？ · Which of the following is correct about “Estimating Derivatives of a Function at a Point”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q038",
    "title": "2.4 计算 · 2.4 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q039",
    "title": "2.5 论述 · 幂函数导数 · 2.5 Argument: Applying the Power Rule",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「幂函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Applying the Power Rule”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q040",
    "title": "2.6 常数倍与和差 · 变式 · Variant: Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "difficulty": "难 · Hard",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q041",
    "title": "2.7 符号 · 2.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q042",
    "title": "2.8 概念 · 2.8 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「乘积法则」，下列正确的是？ · Which of the following is correct about “The Product Rule”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q043",
    "title": "2.9 计算 · 2.9 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q044",
    "title": "2.10 论述 · 三角函数导数 · 2.10 Argument: Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q045",
    "title": "2.1 瞬时变化率 · 变式 · Variant: Defining Average and Instantaneous Rates of Change",
    "difficulty": "中 · Medium",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q046",
    "title": "2.2 符号 · 2.2 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q047",
    "title": "2.3 概念 · 2.3 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「估计函数在某点处的导数」，下列正确的是？ · Which of the following is correct about “Estimating Derivatives of a Function at a Point”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q048",
    "title": "2.4 计算 · 2.4 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q049",
    "title": "2.5 论述 · 幂函数导数 · 2.5 Argument: Applying the Power Rule",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「幂函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Applying the Power Rule”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q050",
    "title": "2.6 常数倍与和差 · 变式 · Variant: Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "difficulty": "易 · Easy",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q051",
    "title": "2.7 符号 · 2.7 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q052",
    "title": "2.8 概念 · 2.8 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「乘积法则」，下列正确的是？ · Which of the following is correct about “The Product Rule”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q053",
    "title": "2.9 计算 · 2.9 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q054",
    "title": "2.10 论述 · 三角函数导数 · 2.10 Argument: Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q055",
    "title": "2.1 瞬时变化率 · 变式 · Variant: Defining Average and Instantaneous Rates of Change",
    "difficulty": "难 · Hard",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q056",
    "title": "2.2 符号 · 2.2 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q057",
    "title": "2.3 概念 · 2.3 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「估计函数在某点处的导数」，下列正确的是？ · Which of the following is correct about “Estimating Derivatives of a Function at a Point”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q058",
    "title": "2.4 计算 · 2.4 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q059",
    "title": "2.5 论述 · 幂函数导数 · 2.5 Argument: Applying the Power Rule",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「幂函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Applying the Power Rule”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q060",
    "title": "2.6 常数倍与和差 · 变式 · Variant: Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "difficulty": "中 · Medium",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q061",
    "title": "2.7 符号 · 2.7 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q062",
    "title": "2.8 概念 · 2.8 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「乘积法则」，下列正确的是？ · Which of the following is correct about “The Product Rule”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q063",
    "title": "2.9 计算 · 2.9 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q064",
    "title": "2.10 论述 · 三角函数导数 · 2.10 Argument: Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q065",
    "title": "2.1 瞬时变化率 · 变式 · Variant: Defining Average and Instantaneous Rates of Change",
    "difficulty": "易 · Easy",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q066",
    "title": "2.2 符号 · 2.2 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q067",
    "title": "2.3 概念 · 2.3 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「估计函数在某点处的导数」，下列正确的是？ · Which of the following is correct about “Estimating Derivatives of a Function at a Point”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "id": "calc-u2-q068",
    "title": "2.4 计算 · 2.4 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q069",
    "title": "2.5 论述 · 幂函数导数 · 2.5 Argument: Applying the Power Rule",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「幂函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。 · For “Applying the Power Rule”, explain how the limit of a difference quotient turns an average rate of change into an instantaneous rate",
    "answerLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
    "answer": "平均变化率是区间上的割线斜率，即函数增量与自变量增量之比；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商化简为 2a+h，取极限得 f′(a)=2a。 · An average rate of change is the secant slope on an interval, the ratio of the change in the function to the change in the input. Letting h→0, the secant approaches the tangent, and the limit of the difference quotient is the instantaneous rate f′(a). For f(x)=x² the difference quotient simplifies to 2a+h, and the limit is f′(a)=2a.",
    "solution": "先从两点割线求平均变化率，再令两点间距趋于零取极限。 · Start with the secant through two points, then take the limit as the spacing goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q070",
    "title": "2.6 常数倍与和差 · 变式 · Variant: Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "difficulty": "难 · Hard",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q071",
    "title": "2.7 符号 · 2.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x*(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。 · Product rule.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q072",
    "title": "2.8 概念 · 2.8 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「乘积法则」，下列正确的是？ · Which of the following is correct about “The Product Rule”?",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导 · Differentiable implies continuous; continuous does not imply differentiable",
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
    "kind": "set",
    "id": "calc-u2-frq1",
    "title": "切线与法线 · tangent and normal",
    "stimulus": {
      "title": "三次函数 · cubic function",
      "text": "设 f(x)=x³−3x²+2。回答以下问题。 · Let f(x)=x³−3x²+2. Answer the following.",
      "textLatex": "f(x)=x^{3}-3x^{2}+2",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u2-frq1-q1",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "求导函数 · differentiate the function",
        "check": "symbolic",
        "stemLatex": "f'(x)=",
        "expected": "3*x^2-6*x",
        "answerLatex": "f'(x)=3x^{2}-6x",
        "solution": "逐项使用幂法则：3x²−6x。 · Power rule term by term: 3x²−6x."
      },
      {
        "id": "calc-u2-frq1-q2",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "水平切线 · horizontal tangent",
        "check": "symbolic",
        "stem": "求曲线 y=f(x) 在 x=2 处的切线方程，写成 y=… 右侧的表达式。 · Find the tangent line to y=f(x) at x=2, and write the expression to the right of y=….",
        "expected": "-2",
        "answerLatex": "y=-2",
        "solution": "f(2)=−2，f′(2)=12−12=0，切线水平，故 y=−2。 · f(2)=−2 and f′(2)=12−12=0, so the tangent is horizontal and y=−2."
      },
      {
        "id": "calc-u2-frq1-q3",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "平行切线 · parallel tangent",
        "check": "symbolic",
        "stem": "求 f′(x)=6 的较小解 x（此时切线与 y=6x−1 平行）。 · Find the smaller solution of f′(x)=6 (the tangent is then parallel to y=6x−1).",
        "expected": "1-sqrt(3)",
        "answerLatex": "x=1-\\sqrt{3}",
        "solution": "3x²−6x=6 ⇒ x²−2x−2=0 ⇒ x=1±√3；较小者为 1−√3。 · 3x²−6x=6, so x²−2x−2=0, so x=1±√3; the smaller one is 1−√3."
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u2-b08-q1",
    "title": "2.3 三种差商估计 · Three difference-quotient estimates",
    "stimulus": {
      "title": "f(x)=2^x 的数值表 · Table of f(x)=2^x",
      "text": "下表给出 f(x)=2^x 在 x=2 附近的取值。用前向、后向与中心差商分别估计 f′(2)，并与精确值 4ln2≈2.7726 比较。 · The table gives f(x)=2^x near x=2. Estimate f′(2) with forward, backward, and central difference quotients, then compare with the exact value 4ln2≈2.7726.",
      "table": {
        "headers": [
          "x",
          "f(x)"
        ],
        "rows": [
          [
            "1.8",
            "3.4822"
          ],
          [
            "1.9",
            "3.7321"
          ],
          [
            "2.0",
            "4.0000"
          ],
          [
            "2.1",
            "4.2871"
          ],
          [
            "2.2",
            "4.5948"
          ]
        ]
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方题；用于 2.3 三种差商估计。 · Original AP-style item, not an official item; for 2.3, three difference-quotient estimates."
    },
    "questions": [
      {
        "id": "calc-u2-b08-q1a",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": true,
        "title": "中心差商 · Central difference",
        "check": "numeric",
        "stem": "用 x=1.9 与 x=2.1 的中心差商估计 f′(2)。 · Estimate f′(2) with the central difference using x=1.9 and x=2.1.",
        "expected": 2.775,
        "tol": 0.01,
        "answerLatex": "f'(2)\\approx\\dfrac{f(2.1)-f(1.9)}{0.2}=2.775",
        "solution": "中心差商为 (4.2871−3.7321)/0.2=2.775，与 4ln2≈2.7726 很接近。前向差商为 2.871，后向差商为 2.679。 · The central quotient is (4.2871−3.7321)/0.2=2.775, close to 4ln2≈2.7726. The forward quotient is 2.871 and the backward quotient is 2.679.",
        "solutionLatex": "\\dfrac{f(2.1)-f(1.9)}{2.1-1.9}=\\dfrac{4.2871-3.7321}{0.2}=2.775",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u2/2.3",
            "label": "2.3 估计函数在某点处的导数 · 2.3 Estimating Derivatives of a Function at a Point",
            "topicId": "calc-u2:2.3"
          }
        ]
      },
      {
        "id": "calc-u2-b08-q1b",
        "type": "mcq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "哪种估计最接近 · Closest estimate",
        "stem": "在前向、后向与中心三种估计中，哪一种通常最接近精确值 4ln2≈2.7726？ · Among the forward, backward, and central estimates, which is usually closest to the exact value 4ln2≈2.7726?",
        "choices": [
          {
            "text": "中心差商，因为它取两侧对称点，一阶误差相消 · The central difference, because it uses symmetric points and cancels the first-order error",
            "correct": true
          },
          {
            "text": "前向差商，因为它只用到右侧的点 · The forward difference, because it uses only the point on the right",
            "correct": false
          },
          {
            "text": "后向差商，因为它只用到左侧的点 · The backward difference, because it uses only the point on the left",
            "correct": false
          },
          {
            "text": "三者误差完全相同 · All three have exactly the same error",
            "correct": false
          }
        ],
        "solution": "中心差商取 a−h 与 a+h 的对称点，两侧的一阶偏差部分抵消，误差通常为 O(h²)，小于前向或后向差商的 O(h)。本例中心 2.775 最接近 2.7726。 · The central difference uses symmetric points a−h and a+h, so first-order deviations cancel and the error is usually O(h²), smaller than the O(h) error of one-sided quotients. Here 2.775 is closest to 2.7726.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u2/2.3",
            "label": "2.3 估计函数在某点处的导数 · 2.3 Estimating Derivatives of a Function at a Point",
            "topicId": "calc-u2:2.3"
          }
        ]
      }
    ],
    "topicLinks": [
      {
        "href": "#/t/math/calc-u2/2.3",
        "label": "2.3 估计函数在某点处的导数 · 2.3 Estimating Derivatives of a Function at a Point",
        "topicId": "calc-u2:2.3"
      }
    ]
  },
  {
    "id": "calc-u2-b08-q2",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "calculator": true,
    "title": "2.3 技术：精确与近似 · Technology: exact versus approximate",
    "stem": "用计算器的 nDeriv 以 h=0.1 估计 ln x 在 x=2 处的导数，得到约 0.5004；CAS 符号求导得到 1/x，在 x=2 处为 0.5。下列哪项正确？ · A calculator's nDeriv with h=0.1 estimates the derivative of ln x at x=2 as about 0.5004, while a CAS symbolic derivative gives 1/x, which equals 0.5 at x=2. Which statement is correct?",
    "choices": [
      {
        "text": "0.5 是精确值；0.5004 是有限差商近似，误差随 h 减小而减小 · 0.5 is exact; 0.5004 is a finite-difference approximation whose error shrinks as h decreases",
        "correct": true
      },
      {
        "text": "0.5004 是精确值，0.5 是四舍五入后的近似 · 0.5004 is exact, and 0.5 is a rounded approximation",
        "correct": false
      },
      {
        "text": "两者都精确，因为计算器与 CAS 不会出错 · Both are exact because calculators and CAS never make errors",
        "correct": false
      },
      {
        "text": "两者都错误，因为 ln x 在 x=2 处不可导 · Both are wrong because ln x is not differentiable at x=2",
        "correct": false
      }
    ],
    "solution": "符号求导给出精确表达式 1/x，在 x=2 处恰为 0.5。nDeriv 用有限 h 的差商近似导数，结果含截断与舍入误差；h=0.1 时约为 0.5004，减小 h 通常会更接近 0.5。 · Symbolic differentiation gives the exact expression 1/x, exactly 0.5 at x=2. nDeriv approximates with a finite h, so its output carries truncation and rounding error; with h=0.1 it is about 0.5004, and decreasing h usually brings it closer to 0.5.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 2.3 技术估计与精确求导的对比。 · Original AP-style item, not an official item; for 2.3, comparing a technology estimate with an exact derivative.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u2/2.3",
        "label": "2.3 估计函数在某点处的导数 · 2.3 Estimating Derivatives of a Function at a Point",
        "topicId": "calc-u2:2.3"
      }
    ]
  }
];
