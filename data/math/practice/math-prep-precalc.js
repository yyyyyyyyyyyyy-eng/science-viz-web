/** Practice bank for math-prep-precalc — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "math-prep-precalc",
  "code": "P4",
  "titleZh": "预备微积分 · precalculus",
  "titleEn": "Precalculus",
  "layer": "prep",
  "subject": "math"
};
export const stimuli = {
  "stim-math-prep-precalc-1": {
    "title": "多项式与有理函数分析 · 三角/函数值 · Polynomial and Rational Analysis: trigonometric and function values",
    "text": "单位圆上角 θ 的坐标与三角值。 · Coordinates and trigonometric values of an angle θ on the unit circle.",
    "table": {
      "headers": [
        "θ",
        "cos θ",
        "sin θ"
      ],
      "rows": [
        [
          "0",
          "1",
          "0"
        ],
        [
          "π/6",
          "0.866",
          "0.5"
        ],
        [
          "π/4",
          "0.707",
          "0.707"
        ],
        [
          "π/3",
          "0.5",
          "0.866"
        ]
      ]
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  },
  "stim-math-prep-precalc-2": {
    "title": "指数与对数模型 · 三角/函数值 · Exponential and Log Models: trigonometric and function values",
    "text": "单位圆上角 θ 的坐标与三角值。 · Coordinates and trigonometric values of an angle θ on the unit circle.",
    "table": {
      "headers": [
        "θ",
        "cos θ",
        "sin θ"
      ],
      "rows": [
        [
          "0",
          "1",
          "0"
        ],
        [
          "π/6",
          "0.866",
          "0.5"
        ],
        [
          "π/4",
          "0.707",
          "0.707"
        ],
        [
          "π/3",
          "0.5",
          "0.866"
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
    "id": "math-prep-precalc-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-math-prep-precalc-1",
    "stimulus": {
      "title": "多项式与有理函数分析 · 三角/函数值 · Polynomial and Rational Analysis: trigonometric and function values",
      "text": "单位圆上角 θ 的坐标与三角值。 · Coordinates and trigonometric values of an angle θ on the unit circle.",
      "table": {
        "headers": [
          "θ",
          "cos θ",
          "sin θ"
        ],
        "rows": [
          [
            "0",
            "1",
            "0"
          ],
          [
            "π/6",
            "0.866",
            "0.5"
          ],
          [
            "π/4",
            "0.707",
            "0.707"
          ],
          [
            "π/3",
            "0.5",
            "0.866"
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
        "id": "math-prep-precalc-q001",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "特殊角 · special angles",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sin\\dfrac{\\pi}{6}=",
        "expected": "1/2",
        "answerLatex": "\\dfrac{1}{2}",
        "solution": "单位圆。 · Unit circle.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-precalc-q002",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "恒等式 · identity",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sin^{2}\\theta+\\cos^{2}\\theta=",
        "expected": "1",
        "answerLatex": "1",
        "solution": "毕达哥拉斯恒等式。 · Pythagorean identity.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-precalc-q003",
        "difficulty": "难 · Hard",
        "calculator": true,
        "title": "对数 · logarithm",
        "type": "frq",
        "check": "numeric",
        "stem": "log₂ 8 =？",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3",
        "solution": "2³=8。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "kind": "set",
    "id": "math-prep-precalc-set2",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-math-prep-precalc-2",
    "stimulus": {
      "title": "指数与对数模型 · 三角/函数值 · Exponential and Log Models: trigonometric and function values",
      "text": "单位圆上角 θ 的坐标与三角值。 · Coordinates and trigonometric values of an angle θ on the unit circle.",
      "table": {
        "headers": [
          "θ",
          "cos θ",
          "sin θ"
        ],
        "rows": [
          [
            "0",
            "1",
            "0"
          ],
          [
            "π/6",
            "0.866",
            "0.5"
          ],
          [
            "π/4",
            "0.707",
            "0.707"
          ],
          [
            "π/3",
            "0.5",
            "0.866"
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
        "id": "math-prep-precalc-q004",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "特殊角 · special angles",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sin\\dfrac{\\pi}{6}=",
        "expected": "1/2",
        "answerLatex": "\\dfrac{1}{2}",
        "solution": "单位圆。 · Unit circle.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-precalc-q005",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "恒等式 · identity",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sin^{2}\\theta+\\cos^{2}\\theta=",
        "expected": "1",
        "answerLatex": "1",
        "solution": "毕达哥拉斯恒等式。 · Pythagorean identity.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-precalc-q006",
        "difficulty": "难 · Hard",
        "calculator": true,
        "title": "对数 · logarithm",
        "type": "frq",
        "check": "numeric",
        "stem": "log₂ 8 =？",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3",
        "solution": "2³=8。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-precalc-q007",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "概念 · concept",
        "type": "frq",
        "stem": "说明「三角方程与恒等式」中单位圆如何定义三角值。 · Explain how the unit circle in “Trigonometric equations and identities” defines the trigonometric values.",
        "answer": "终边与单位圆交点 (x,y)=(cos θ, sin θ)。 · The terminal side meets the unit circle at (x,y)=(cos θ, sin θ).",
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
    "id": "math-prep-precalc-q008",
    "title": "P4.1 符号 · P4.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q009",
    "title": "P4.2 概念 · P4.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「指数与对数模型」，下列正确的是？ · Which of the following is correct about “Exponential and Log Models”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q010",
    "title": "P4.3 计算 · P4.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q011",
    "title": "P4.4 论述 · 三角方程与恒等式 · P4.4 Argument: Trig Equations and Identities",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「三角方程与恒等式」：说明弧度制下单位圆弧长与圆心角的关系。 · For “Trig Equations and Identities”, explain how arc length on the unit circle relates to the central angle in radians",
    "answerLatex": "\\theta=\\dfrac{s}{r}",
    "answer": "弧度制用弧长与半径之比定义圆心角：θ 等于弧长 s 与半径 r 之比（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。 · Radian measure defines the central angle by the ratio of arc length to radius: θ equals s/r, with θ in radians. On the unit circle r=1, θ equals the arc length s; one full turn is 2π radians.",
    "solution": "弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。 · A radian is the dimensionless ratio of arc length to radius; on the unit circle the arc length and the angle are the same number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q012",
    "title": "P4.5 符号 · P4.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q013",
    "title": "P4.6 概念 · P4.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「参数方程入门」，下列正确的是？ · Which of the following is correct about “Intro Parametric Equations”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q014",
    "title": "P4.7 计算 · P4.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q015",
    "title": "P4.8 论述 · 矩阵与变换 · P4.8 Argument: Matrices and Transformations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「矩阵与变换」：说明弧度制下单位圆弧长与圆心角的关系。 · For “Matrices and Transformations”, explain how arc length on the unit circle relates to the central angle in radians",
    "answerLatex": "\\theta=\\dfrac{s}{r}",
    "answer": "弧度制用弧长与半径之比定义圆心角：θ 等于弧长 s 与半径 r 之比（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。 · Radian measure defines the central angle by the ratio of arc length to radius: θ equals s/r, with θ in radians. On the unit circle r=1, θ equals the arc length s; one full turn is 2π radians.",
    "solution": "弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。 · A radian is the dimensionless ratio of arc length to radius; on the unit circle the arc length and the angle are the same number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q016",
    "title": "P4.9 符号 · P4.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q017",
    "title": "P4.10 概念 · P4.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「变化率直觉」，下列正确的是？ · Which of the following is correct about “Rate of Change Intuition”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q018",
    "title": "P4.1 计算 · P4.1 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q019",
    "title": "P4.2 论述 · 指数与对数模型 · P4.2 Argument: Exponential and Log Models",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「指数与对数模型」：说明弧度制下单位圆弧长与圆心角的关系。 · For “Exponential and Log Models”, explain how arc length on the unit circle relates to the central angle in radians",
    "answerLatex": "\\theta=\\dfrac{s}{r}",
    "answer": "弧度制用弧长与半径之比定义圆心角：θ 等于弧长 s 与半径 r 之比（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。 · Radian measure defines the central angle by the ratio of arc length to radius: θ equals s/r, with θ in radians. On the unit circle r=1, θ equals the arc length s; one full turn is 2π radians.",
    "solution": "弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。 · A radian is the dimensionless ratio of arc length to radius; on the unit circle the arc length and the angle are the same number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q020",
    "title": "P4.3 符号 · P4.3 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q021",
    "title": "P4.4 概念 · P4.4 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「三角方程与恒等式」，下列正确的是？ · Which of the following is correct about “Trig Equations and Identities”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q022",
    "title": "P4.5 计算 · P4.5 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q023",
    "title": "P4.6 论述 · 参数方程入门 · P4.6 Argument: Intro Parametric Equations",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「参数方程入门」：说明弧度制下单位圆弧长与圆心角的关系。 · For “Intro Parametric Equations”, explain how arc length on the unit circle relates to the central angle in radians",
    "answerLatex": "\\theta=\\dfrac{s}{r}",
    "answer": "弧度制用弧长与半径之比定义圆心角：θ 等于弧长 s 与半径 r 之比（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。 · Radian measure defines the central angle by the ratio of arc length to radius: θ equals s/r, with θ in radians. On the unit circle r=1, θ equals the arc length s; one full turn is 2π radians.",
    "solution": "弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。 · A radian is the dimensionless ratio of arc length to radius; on the unit circle the arc length and the angle are the same number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q024",
    "title": "P4.7 符号 · P4.7 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q025",
    "title": "P4.8 概念 · P4.8 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「矩阵与变换」，下列正确的是？ · Which of the following is correct about “Matrices and Transformations”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q026",
    "title": "P4.9 计算 · P4.9 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q027",
    "title": "P4.10 论述 · 变化率直觉 · P4.10 Argument: Rate of Change Intuition",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「变化率直觉」：说明弧度制下单位圆弧长与圆心角的关系。 · For “Rate of Change Intuition”, explain how arc length on the unit circle relates to the central angle in radians",
    "answerLatex": "\\theta=\\dfrac{s}{r}",
    "answer": "弧度制用弧长与半径之比定义圆心角：θ 等于弧长 s 与半径 r 之比（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。 · Radian measure defines the central angle by the ratio of arc length to radius: θ equals s/r, with θ in radians. On the unit circle r=1, θ equals the arc length s; one full turn is 2π radians.",
    "solution": "弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。 · A radian is the dimensionless ratio of arc length to radius; on the unit circle the arc length and the angle are the same number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q028",
    "title": "P4.1 符号 · P4.1 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q029",
    "title": "P4.2 概念 · P4.2 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「指数与对数模型」，下列正确的是？ · Which of the following is correct about “Exponential and Log Models”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q030",
    "title": "P4.3 计算 · P4.3 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q031",
    "title": "P4.4 论述 · 三角方程与恒等式 · P4.4 Argument: Trig Equations and Identities",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「三角方程与恒等式」：说明弧度制下单位圆弧长与圆心角的关系。 · For “Trig Equations and Identities”, explain how arc length on the unit circle relates to the central angle in radians",
    "answerLatex": "\\theta=\\dfrac{s}{r}",
    "answer": "弧度制用弧长与半径之比定义圆心角：θ 等于弧长 s 与半径 r 之比（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。 · Radian measure defines the central angle by the ratio of arc length to radius: θ equals s/r, with θ in radians. On the unit circle r=1, θ equals the arc length s; one full turn is 2π radians.",
    "solution": "弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。 · A radian is the dimensionless ratio of arc length to radius; on the unit circle the arc length and the angle are the same number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q032",
    "title": "P4.5 符号 · P4.5 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q033",
    "title": "P4.6 概念 · P4.6 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「参数方程入门」，下列正确的是？ · Which of the following is correct about “Intro Parametric Equations”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q034",
    "title": "P4.7 计算 · P4.7 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q035",
    "title": "P4.8 论述 · 矩阵与变换 · P4.8 Argument: Matrices and Transformations",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「矩阵与变换」：说明弧度制下单位圆弧长与圆心角的关系。 · For “Matrices and Transformations”, explain how arc length on the unit circle relates to the central angle in radians",
    "answerLatex": "\\theta=\\dfrac{s}{r}",
    "answer": "弧度制用弧长与半径之比定义圆心角：θ 等于弧长 s 与半径 r 之比（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。 · Radian measure defines the central angle by the ratio of arc length to radius: θ equals s/r, with θ in radians. On the unit circle r=1, θ equals the arc length s; one full turn is 2π radians.",
    "solution": "弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。 · A radian is the dimensionless ratio of arc length to radius; on the unit circle the arc length and the angle are the same number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q036",
    "title": "P4.9 符号 · P4.9 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\cos\\dfrac{\\pi}{3}=",
    "expected": "1/2",
    "answerLatex": "\\dfrac{1}{2}",
    "solution": "特殊角。 · Special angles.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-precalc-q037",
    "title": "P4.10 概念 · P4.10 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「变化率直觉」，下列正确的是？ · Which of the following is correct about “Rate of Change Intuition”?",
    "choices": [
      {
        "text": "单位圆定义使三角函数对任意实角有意义 · The unit-circle definition gives the trigonometric functions a meaning for every real angle",
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
    "id": "math-prep-precalc-q038",
    "title": "P4.1 计算 · P4.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\log_{10} 1000",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "10³=1000。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
