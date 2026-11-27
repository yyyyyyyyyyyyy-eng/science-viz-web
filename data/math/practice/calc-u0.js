/** Practice bank for calc-u0 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u0",
  "code": "0",
  "titleZh": "预备 · preparation",
  "titleEn": "Prerequisite",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u0-1": {
    "title": "函数与图像 · 数值—图像—符号 · Functions and Graphs: numeric, graphical, and symbolic forms",
    "text": "下表给出 f 在若干点的值；图像为同一函数示意。用三种表征回答。 · The table gives values of f at several points; the graph is a sketch of the same function. Answer using all three representations.",
    "table": {
      "headers": [
        "x",
        "f(x)"
      ],
      "rows": [
        [
          "0",
          "1"
        ],
        [
          "1",
          "2"
        ],
        [
          "2",
          "5"
        ],
        [
          "3",
          "10"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          2,
          5
        ],
        [
          3,
          10
        ]
      ],
      "xLabel": "x",
      "yLabel": "f"
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
    "id": "calc-u0-set1",
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-calc-u0-1",
    "stimulus": {
      "title": "函数与图像 · 数值—图像—符号 · Functions and Graphs: numeric, graphical, and symbolic forms",
      "text": "下表给出 f 在若干点的值；图像为同一函数示意。用三种表征回答。 · The table gives values of f at several points; the graph is a sketch of the same function. Answer using all three representations.",
      "table": {
        "headers": [
          "x",
          "f(x)"
        ],
        "rows": [
          [
            "0",
            "1"
          ],
          [
            "1",
            "2"
          ],
          [
            "2",
            "5"
          ],
          [
            "3",
            "10"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            1
          ],
          [
            1,
            2
          ],
          [
            2,
            5
          ],
          [
            3,
            10
          ]
        ],
        "xLabel": "x",
        "yLabel": "f"
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "calc-u0-q001",
        "difficulty": "易 · Easy",
        "calculator": true,
        "title": "函数值 · function value",
        "type": "frq",
        "check": "numeric",
        "stem": "f(x)=x²−2x，求 f(3)。 · f(x)=x²−2x. Find f(3).",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3",
        "solution": "9−6=3。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u0-q002",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "图像平移 · graph translation",
        "type": "frq",
        "stem": "说明 y=(x−2)² 的图像与 y=x² 的图像之间的变换关系。 · Describe the transformation that takes the graph of y=x² to the graph of y=(x−2)².",
        "answer": "把 y=x² 的图像向右平移 2 个单位。 · Shift the graph of y=x² two units to the right.",
        "solution": "x 替换为 x−2 对应右移。 · Replacing x by x−2 corresponds to a shift right.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u0-q003",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "单位圆 · unit circle",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sin\\dfrac{\\pi}{3}=",
        "expected": "sqrt(3)/2",
        "answerLatex": "\\dfrac{\\sqrt{3}}{2}",
        "solution": "单位圆上对应角的纵坐标为正的 √3 的一半。 · On the unit circle the y-coordinate of the corresponding angle is the positive half of √3.",
        "solutionLatex": "\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u0-q004",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q005",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q006",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q007",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q008",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q009",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q010",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q011",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q012",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q013",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q014",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q015",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q016",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q017",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q018",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q019",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q020",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q021",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q022",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q023",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q024",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q025",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q026",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q027",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q028",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q029",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q030",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q031",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q032",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q033",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q034",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q035",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q036",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q037",
    "title": "0.2 概念 · 0.2 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「单位圆与三角」，下列正确的是？ · Which of the following is correct about “Unit Circle and Trigonometry”?",
    "choices": [
      {
        "text": "平均变化率是割线斜率，瞬时是切线斜率 · Average rate of change is a secant slope; instantaneous rate of change is a tangent slope",
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
    "id": "calc-u0-q038",
    "title": "0.1 计算 · 0.1 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\dfrac{f(2)-f(0)}{2-0},\\;f(x)=x^{2}",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2",
    "solution": "函数值增量与自变量增量之比为 2。 · The ratio of the change in output to the change in input is 2.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q039",
    "title": "0.2 论述 · 单位圆与三角 · 0.2 Argument: Unit Circle and Trigonometry",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「单位圆与三角」：对照说明平均变化率与瞬时变化率。 · For “Unit Circle and Trigonometry”, contrast average rate of change with instantaneous rate of change",
    "answerLatex": "\\text{平均变化率 · average rate of change}=\\dfrac{f(b)-f(a)}{b-a},\\qquad f'(a)=\\lim_{b\\to a}\\dfrac{f(b)-f(a)}{b-a}",
    "answer": "平均变化率是区间 [a,b] 上割线斜率，即函数值之差与自变量之差之比；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上的平均变化率为 4，而 f′(1)=2。 · On an interval [a,b] the average rate of change is the secant slope, the ratio of the change in function value to the change in input. The instantaneous rate is the limit of that secant slope as b→a, the tangent slope f′(a). For f(x)=x² on [1,3] the average rate is 4, while f′(1)=2.",
    "solution": "平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。 · An average rate describes an interval and an instantaneous rate describes a point; the second is the limit of the first as the interval length goes to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u0-q040",
    "title": "0.1 符号 · 0.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}",
    "expected": "f'(a)",
    "answerLatex": "f'(a)",
    "solution": "导数定义。 · Definition of the derivative.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
