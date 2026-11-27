/** Practice bank for calc-u1 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u1",
  "code": "1",
  "titleZh": "极限与连续 · limits and continuity",
  "titleEn": "Limits and Continuity",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u1-1": {
    "title": "瞬时变化导论 · 数值—图像—符号 · Introducing Calculus: Can Change Occur at an Instant?: numeric, graphical, and symbolic forms",
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
    "id": "calc-u1-extra1",
    "title": "极限与可去间断 · limits and a removable discontinuity",
    "stimulus": {
      "title": "有理函数在 x=2 附近 · a rational function near x=2",
      "text": "函数 f 在 x=2 处无定义；下表与图像给出其局部取值。 · f is undefined at x=2; the table and graph give nearby values.",
      "textLatex": "f(x)=\\dfrac{x^{2}-4}{x-2}\\quad(x\\neq 2)",
      "table": {
        "headers": [
          "x",
          "f(x)"
        ],
        "rows": [
          [
            "1.9",
            "3.9"
          ],
          [
            "1.99",
            "3.99"
          ],
          [
            "1.999",
            "3.999"
          ],
          [
            "2.001",
            "4.001"
          ],
          [
            "2.01",
            "4.01"
          ],
          [
            "2.1",
            "4.1"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            1.9,
            3.9
          ],
          [
            1.99,
            3.99
          ],
          [
            1.999,
            3.999
          ],
          [
            2.001,
            4.001
          ],
          [
            2.01,
            4.01
          ],
          [
            2.1,
            4.1
          ]
        ],
        "xLabel": "x",
        "yLabel": "f",
        "holes": [[2, 4]]
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u1-q001",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "由表估极限 · estimate a limit from a table",
        "check": "numeric",
        "stem": "根据表中左右两侧的取值，估计 f 在 x→2 时的极限。 · Using the values on both sides of the table, estimate the limit of f as x→2.",
        "expected": 4,
        "tol": 0.01,
        "answerLatex": "4",
        "solution": "左右函数值都趋近 4。 · The function values from both sides approach 4."
      },
      {
        "id": "calc-u1-q002",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "代数化简 · algebraic simplification",
        "check": "symbolic",
        "stemLatex": "f(x)=\\dfrac{x^{2}-4}{x-2}\\ (x\\neq 2)\\text{，化简后  · , and after simplifying }f(x)=",
        "expected": "x+2",
        "answerLatex": "x+2",
        "solution": "平方差分解后约去 x−2。 · After factoring a difference of squares, cancel x−2."
      },
      {
        "id": "calc-u1-q003",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "可去间断 · removable discontinuity",
        "stem": "若补充定义 f(2)=4，判断 f 在 x=2 处是否连续，并说明理由。 · If f(2) is defined to be 4, decide whether f is continuous at x=2 and explain.",
        "answer": "连续。因为补充后 f(2)=4，且 x→2 时 f(x)→4，极限值等于函数值。 · It is continuous: after the definition, f(2)=4, and f(x)→4 as x→2, so the function value equals the limit.",
        "solution": "连续定义要求函数值、极限值存在且相等。 · Continuity requires that the function value and the limit both exist and are equal."
      },
      {
        "id": "calc-u1-q004",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "极限与连续的区别 · how a limit differs from continuity",
        "stem": "“极限存在”与“在该点连续”有何区别？结合 f 在 x=2 处的原定义说明。 · How does “the limit exists” differ from “continuous at that point”? Use the original definition of f at x=2.",
        "answer": "原函数在 x=2 无定义，所以不连续；但极限存在且为 4。连续还要求该点函数值等于极限。 · The original function is undefined at x=2, so it is not continuous there, but the limit exists and equals 4. Continuity also requires the function value to equal the limit.",
        "solution": "极限只看去心邻域；连续还要看该点函数值。 · A limit looks only at a punctured neighborhood; continuity also looks at the function value at the point."
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u1-set1",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-calc-u1-1",
    "stimulus": {
      "title": "瞬时变化导论 · 数值—图像—符号 · Introducing Calculus: Can Change Occur at an Instant?: numeric, graphical, and symbolic forms",
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
        "id": "calc-u1-q005",
        "difficulty": "易 · Easy",
        "calculator": true,
        "title": "平均变化率 · average rate of change",
        "type": "frq",
        "check": "numeric",
        "stem": "根据表中数据，估计 f 在 x=1 与 x=2 之间的平均变化率。 · Using the table, estimate the average rate of change of f between x=1 and x=2.",
        "expected": 3,
        "tol": 0.05,
        "answerLatex": "3",
        "solution": "函数值增量与自变量增量之比为 3。 · The ratio of the change in output to the change in input is 3.",
        "solutionLatex": "\\dfrac{5-2}{2-1}=3",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u1-q006",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "符号极限 · limit from symbols",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\lim_{x\\to 1}\\dfrac{x^{2}-1}{x-1}",
        "expected": "2",
        "answerLatex": "2",
        "solution": "因式分解后约去公因子，极限为 2。 · After factoring, cancel the common factor; the limit is 2.",
        "solutionLatex": "\\dfrac{(x-1)(x+1)}{x-1}=x+1\\to2",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u1-q007",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "图像极限 · limit from a graph",
        "type": "frq",
        "stem": "说明图像上哪一段斜率最大，并与表中差分商对照。 · Say which part of the graph has the greatest slope, and compare it with the difference quotients in the table.",
        "answer": "x∈[2,3] 差分商最大（约 5），与最陡段一致。 · The difference quotient is largest on [2,3] (about 5), matching the steepest part.",
        "solution": "多表征对齐。 · The representations agree.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u1-q008",
    "title": "1.1 瞬时变化导论 · 变式 · Variant: Introducing Calculus: Can Change Occur at an Instant?",
    "difficulty": "易 · Easy",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q009",
    "title": "1.2 符号 · 1.2 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q010",
    "title": "1.3 概念 · 1.3 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「由图像估计极限」，下列正确的是？ · Which of the following is correct about “Estimating Limit Values from Graphs”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q011",
    "title": "1.4 计算 · 1.4 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q012",
    "title": "1.5 论述 · 极限的代数性质 · 1.5 Argument: Determining Limits Using Algebraic Properties of Limits",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「极限的代数性质」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Determining Limits Using Algebraic Properties of Limits”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q013",
    "title": "1.6 代数操作求极限 · 变式 · Variant: Determining Limits Using Algebraic Manipulation",
    "difficulty": "难 · Hard",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q014",
    "title": "1.7 符号 · 1.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q015",
    "title": "1.8 概念 · 1.8 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「挤压定理」，下列正确的是？ · Which of the following is correct about “Determining Limits Using the Squeeze Theorem”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q016",
    "title": "1.9 计算 · 1.9 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q017",
    "title": "1.10 论述 · 探索间断类型 · 1.10 Argument: Exploring Types of Discontinuities",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「探索间断类型」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Exploring Types of Discontinuities”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q018",
    "title": "1.11 定义连续性 · 变式 · Variant: Defining Continuity at a Point",
    "difficulty": "中 · Medium",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q019",
    "title": "1.12 符号 · 1.12 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q020",
    "title": "1.13 概念 · 1.13 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「除去间断」，下列正确的是？ · Which of the following is correct about “Removing Discontinuities”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q021",
    "title": "1.14 计算 · 1.14 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q022",
    "title": "1.15 论述 · 无穷远处极限与水平渐近 · 1.15 Argument: Connecting Limits at Infinity and Horizontal Asymptotes",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「无穷远处极限与水平渐近」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Connecting Limits at Infinity and Horizontal Asymptotes”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q023",
    "title": "1.16 中间值定理 · 变式 · Variant: Working with the Intermediate Value Theorem (IVT)",
    "difficulty": "易 · Easy",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q024",
    "title": "1.1 符号 · 1.1 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q025",
    "title": "1.2 概念 · 1.2 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「极限定义与记号」，下列正确的是？ · Which of the following is correct about “Defining Limits and Using Limit Notation”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q026",
    "title": "1.3 计算 · 1.3 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q027",
    "title": "1.4 论述 · 由表估计极限 · 1.4 Argument: Estimating Limit Values from Tables",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「由表估计极限」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Estimating Limit Values from Tables”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q028",
    "title": "1.5 极限的代数性质 · 变式 · Variant: Determining Limits Using Algebraic Properties of Limits",
    "difficulty": "难 · Hard",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q029",
    "title": "1.6 符号 · 1.6 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q030",
    "title": "1.7 概念 · 1.7 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「选择求极限程序」，下列正确的是？ · Which of the following is correct about “Selecting Procedures for Determining Limits”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q031",
    "title": "1.8 计算 · 1.8 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q032",
    "title": "1.9 论述 · 极限多种表示的联结 · 1.9 Argument: Connecting Multiple Representations of Limits",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「极限多种表示的联结」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Connecting Multiple Representations of Limits”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q033",
    "title": "1.10 探索间断类型 · 变式 · Variant: Exploring Types of Discontinuities",
    "difficulty": "中 · Medium",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q034",
    "title": "1.11 符号 · 1.11 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q035",
    "title": "1.12 概念 · 1.12 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「确认区间连续」，下列正确的是？ · Which of the following is correct about “Confirming Continuity over an Interval”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q036",
    "title": "1.13 计算 · 1.13 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q037",
    "title": "1.14 论述 · 无限极限与竖直渐近 · 1.14 Argument: Connecting Infinite Limits and Vertical Asymptotes",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「无限极限与竖直渐近」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Connecting Infinite Limits and Vertical Asymptotes”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q038",
    "title": "1.15 无穷远处极限与水平渐近 · 变式 · Variant: Connecting Limits at Infinity and Horizontal Asymptotes",
    "difficulty": "易 · Easy",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q039",
    "title": "1.16 符号 · 1.16 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q040",
    "title": "1.1 概念 · 1.1 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「瞬时变化导论」，下列正确的是？ · Which of the following is correct about “Introducing Calculus: Can Change Occur at an Instant?”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q041",
    "title": "1.2 计算 · 1.2 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q042",
    "title": "1.3 论述 · 由图像估计极限 · 1.3 Argument: Estimating Limit Values from Graphs",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「由图像估计极限」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Estimating Limit Values from Graphs”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q043",
    "title": "1.4 由表估计极限 · 变式 · Variant: Estimating Limit Values from Tables",
    "difficulty": "难 · Hard",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q044",
    "title": "1.5 符号 · 1.5 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q045",
    "title": "1.6 概念 · 1.6 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「代数操作求极限」，下列正确的是？ · Which of the following is correct about “Determining Limits Using Algebraic Manipulation”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q046",
    "title": "1.7 计算 · 1.7 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q047",
    "title": "1.8 论述 · 挤压定理 · 1.8 Argument: Determining Limits Using the Squeeze Theorem",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「挤压定理」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Determining Limits Using the Squeeze Theorem”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q048",
    "title": "1.9 极限多种表示的联结 · 变式 · Variant: Connecting Multiple Representations of Limits",
    "difficulty": "中 · Medium",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q049",
    "title": "1.10 符号 · 1.10 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q050",
    "title": "1.11 概念 · 1.11 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「定义连续性」，下列正确的是？ · Which of the following is correct about “Defining Continuity at a Point”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q051",
    "title": "1.12 计算 · 1.12 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q052",
    "title": "1.13 论述 · 除去间断 · 1.13 Argument: Removing Discontinuities",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「除去间断」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Removing Discontinuities”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q053",
    "title": "1.14 无限极限与竖直渐近 · 变式 · Variant: Connecting Infinite Limits and Vertical Asymptotes",
    "difficulty": "易 · Easy",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q054",
    "title": "1.15 符号 · 1.15 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q055",
    "title": "1.16 概念 · 1.16 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「中间值定理」，下列正确的是？ · Which of the following is correct about “Working with the Intermediate Value Theorem (IVT)”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q056",
    "title": "1.1 计算 · 1.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q057",
    "title": "1.2 论述 · 极限定义与记号 · 1.2 Argument: Defining Limits and Using Limit Notation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「极限定义与记号」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Defining Limits and Using Limit Notation”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q058",
    "title": "1.3 由图像估计极限 · 变式 · Variant: Estimating Limit Values from Graphs",
    "difficulty": "难 · Hard",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q059",
    "title": "1.4 符号 · 1.4 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q060",
    "title": "1.5 概念 · 1.5 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极限的代数性质」，下列正确的是？ · Which of the following is correct about “Determining Limits Using Algebraic Properties of Limits”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q061",
    "title": "1.6 计算 · 1.6 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q062",
    "title": "1.7 论述 · 选择求极限程序 · 1.7 Argument: Selecting Procedures for Determining Limits",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「选择求极限程序」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Selecting Procedures for Determining Limits”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q063",
    "title": "1.8 挤压定理 · 变式 · Variant: Determining Limits Using the Squeeze Theorem",
    "difficulty": "中 · Medium",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q064",
    "title": "1.9 符号 · 1.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q065",
    "title": "1.10 概念 · 1.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「探索间断类型」，下列正确的是？ · Which of the following is correct about “Exploring Types of Discontinuities”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q066",
    "title": "1.11 计算 · 1.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q067",
    "title": "1.12 论述 · 确认区间连续 · 1.12 Argument: Confirming Continuity over an Interval",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「确认区间连续」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Confirming Continuity over an Interval”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q068",
    "title": "1.13 除去间断 · 变式 · Variant: Removing Discontinuities",
    "difficulty": "易 · Easy",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q069",
    "title": "1.14 符号 · 1.14 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q070",
    "title": "1.15 概念 · 1.15 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「无穷远处极限与水平渐近」，下列正确的是？ · Which of the following is correct about “Connecting Limits at Infinity and Horizontal Asymptotes”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q071",
    "title": "1.16 计算 · 1.16 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q072",
    "title": "1.1 论述 · 瞬时变化导论 · 1.1 Argument: Introducing Calculus: Can Change Occur at an Instant?",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「瞬时变化导论」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Introducing Calculus: Can Change Occur at an Instant?”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q073",
    "title": "1.2 极限定义与记号 · 变式 · Variant: Defining Limits and Using Limit Notation",
    "difficulty": "难 · Hard",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q074",
    "title": "1.3 符号 · 1.3 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q075",
    "title": "1.4 概念 · 1.4 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「由表估计极限」，下列正确的是？ · Which of the following is correct about “Estimating Limit Values from Tables”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q076",
    "title": "1.5 计算 · 1.5 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q077",
    "title": "1.6 论述 · 代数操作求极限 · 1.6 Argument: Determining Limits Using Algebraic Manipulation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「代数操作求极限」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Determining Limits Using Algebraic Manipulation”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q078",
    "title": "1.7 选择求极限程序 · 变式 · Variant: Selecting Procedures for Determining Limits",
    "difficulty": "中 · Medium",
    "generator": "limit",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q079",
    "title": "1.8 符号 · 1.8 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q080",
    "title": "1.9 概念 · 1.9 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「极限多种表示的联结」，下列正确的是？ · Which of the following is correct about “Connecting Multiple Representations of Limits”?",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致 · A limit does not require f(a) to be defined, but continuity requires the value, the limit, and their equality",
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
    "id": "calc-u1-q081",
    "title": "1.10 计算 · 1.10 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。 · Substitution gives 7.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q082",
    "title": "1.11 论述 · 定义连续性 · 1.11 Argument: Defining Continuity at a Point",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「定义连续性」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。 · For “Defining Continuity at a Point”, use an ε–δ idea or a graph to explain why a limit can exist after one point is removed",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。 · A limit is decided only by the values of x near a (but x≠a), not by whether f(a) is defined. Here f is undefined at x=2, but for x≠2 it simplifies to x+2, so the limit is 4. In ε–δ form: for every ε>0 take δ=ε; when 0<|x−2|<δ, |f(x)−4|=|x−2|<ε.",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。 · At a removable discontinuity the function value may be missing or rewritten. The limit exists as long as the values in the punctured neighborhood approach one number.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q083",
    "title": "1.12 确认区间连续 · 变式 · Variant: Confirming Continuity over an Interval",
    "difficulty": "易 · Easy",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q084",
    "title": "1.13 符号 · 1.13 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。 · A standard limit.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
{
  "id": "calc-u1-q085",
  "title": "1.3 图像尺度隐藏的空心点 · 1.3 a hollow point hidden by the scale of the graph",
  "type": "frq",
  "difficulty": "中 · Medium",
  "calculator": false,
  "check": "numeric",
  "stem": "设 f(x)=(x²−4)/(x−2)（x≠2），且 f(2)=1。求 lim_{x→2} f(x)。 · Let f(x)=(x²−4)/(x−2) for x≠2, and f(2)=1. Find lim_{x→2} f(x).",
  "expected": 4,
  "tol": 0.01,
  "answerLatex": "4",
  "solution": "约分后 f(x)=x+2（x≠2），极限为 4；f(2)=1 不影响极限。 · After canceling, f(x)=x+2 for x≠2, so the limit is 4; f(2)=1 does not affect the limit.",
  "solutionLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=\\lim_{x\\to2}(x+2)=4",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。 · Original AP-style item, not an official item; used for CED coverage in this round.",
  "topicLinks": [
    {
      "href": "#/t/math/calc-u1/1.3",
      "label": "1.3 由图像估计极限 · 1.3 Estimating Limit Values from Graphs",
      "topicId": "calc-u1:1.3"
    }
  ]
},
{
  "id": "calc-u1-q086",
  "title": "1.12 初等函数的连续区间 · 1.12 intervals of continuity of elementary functions",
  "type": "mcq",
  "difficulty": "中 · Medium",
  "calculator": false,
  "stem": "函数 f(x)=√(x−3)/(x−5) 在其定义域上的连续区间是： · The intervals on which f(x)=√(x−3)/(x−5) is continuous, inside its domain, are:",
  "choices": [
    {
      "text": "[3,5) ∪ (5,∞)",
      "correct": true
    },
    {
      "text": "(3,5) ∪ (5,∞)",
      "correct": false
    },
    {
      "text": "[3,∞)",
      "correct": false
    },
    {
      "text": "(3,∞)",
      "correct": false
    }
  ],
  "solution": "根号要求 x≥3，分母要求 x≠5；端点 3 处右连续，故包含 3。 · The square root requires x≥3 and the denominator requires x≠5. The endpoint 3 is included because the function is right-continuous there.",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。 · Original AP-style item, not an official item; used for CED coverage in this round.",
  "topicLinks": [
    {
      "href": "#/t/math/calc-u1/1.12",
      "label": "1.12 确认区间连续 · 1.12 Confirming Continuity over an Interval",
      "topicId": "calc-u1:1.12"
    }
  ]
},
{
  "id": "calc-u1-q087",
  "title": "1.1 某点处的平均变化率 · Average rate at a point",
  "type": "mcq",
  "difficulty": "易 · Easy",
  "calculator": false,
  "stem": "关于函数 f 在 x=a 处的平均变化率，下列哪项正确？ · Which statement about the average rate of change of f at x=a is correct?",
  "choices": [
    {
      "text": "无定义，因为自变量的改变量为 0 · Undefined, because the change in the independent variable is zero",
      "correct": true
    },
    {
      "text": "等于 0 · Equal to 0",
      "correct": false
    },
    {
      "text": "等于 f′(a) · Equal to f′(a)",
      "correct": false
    },
    {
      "text": "一定趋于无穷 · Always tends to infinity",
      "correct": false
    }
  ],
  "solution": "平均变化率是 \\(\\dfrac{f(b)-f(a)}{b-a}\\)，需要 b≠a；在单点处 b=a，分母为 0，因此无定义（不是 0，也不一定是无穷）。瞬时变化率才由差商的极限定义。 · The average rate is \\(\\dfrac{f(b)-f(a)}{b-a}\\) with b≠a; at a single point b=a makes the denominator zero, so it is undefined (not 0, and not necessarily infinite). The instantaneous rate is defined by the limit of the difference quotient.",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于 1.1 平均变化率与瞬时变化率。 · Original AP-style item, not an official item; for 1.1, average and instantaneous rates of change.",
  "topicLinks": [
    {
      "href": "#/t/math/calc-u1/1.1",
      "label": "1.1 瞬时变化导论 · 1.1 Introducing Calculus: Can Change Occur at an Instant?",
      "topicId": "calc-u1:1.1"
    }
  ]
},
{
  "id": "calc-u1-q088",
  "title": "1.1 由差商求导数 · Derivative from the difference quotient",
  "type": "frq",
  "difficulty": "中 · Medium",
  "calculator": false,
  "check": "numeric",
  "stem": "设 f(x)=x²。先化简差商 \\(\\dfrac{f(3+h)-f(3)}{h}\\)（h≠0），再令 h→0 求 f′(3)。 · For f(x)=x², simplify \\(\\dfrac{f(3+h)-f(3)}{h}\\) (h≠0), then let h→0 to find f′(3).",
  "expected": 6,
  "tol": 0.01,
  "answerLatex": "f'(3)=6",
  "solution": "\\(\\dfrac{(3+h)^2-9}{h}=\\dfrac{6h+h^2}{h}=6+h\\)，所以 \\(\\lim_{h\\to0}(6+h)=6\\)。 · The quotient simplifies to 6+h, whose limit is 6.",
  "solutionLatex": "\\dfrac{(3+h)^{2}-3^{2}}{h}=\\dfrac{6h+h^{2}}{h}=6+h\\;\\longrightarrow\\;6",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于 1.1 差商极限。 · Original AP-style item, not an official item; for 1.1, the limit of a difference quotient.",
  "topicLinks": [
    {
      "href": "#/t/math/calc-u1/1.1",
      "label": "1.1 瞬时变化导论 · 1.1 Introducing Calculus: Can Change Occur at an Instant?",
      "topicId": "calc-u1:1.1"
    }
  ]
}
];
