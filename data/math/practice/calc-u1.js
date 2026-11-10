/** Practice bank for calc-u1 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u1",
  "code": "1",
  "titleZh": "极限与连续",
  "titleEn": "Limits and Continuity",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u1-1": {
    "title": "瞬时变化导论 · 数值—图像—符号",
    "text": "下表给出 f 在若干点的值；图像为同一函数示意。用三种表征回答。",
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
    "title": "极限与可去间断",
    "stimulus": {
      "title": "有理函数在 x=2 附近",
      "text": "函数 f 在 x=2 处无定义；下表与图像给出其局部取值。",
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
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u1-q001",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "由表估极限",
        "check": "numeric",
        "stem": "根据表中左右两侧的取值，估计 f 在 x→2 时的极限。",
        "expected": 4,
        "tol": 0.01,
        "answerLatex": "4",
        "solution": "左右函数值都趋近 4。"
      },
      {
        "id": "calc-u1-q002",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "代数化简",
        "check": "symbolic",
        "stemLatex": "f(x)=\\dfrac{x^{2}-4}{x-2}\\ (x\\neq 2)\\text{，化简后 }f(x)=",
        "expected": "x+2",
        "answerLatex": "x+2",
        "solution": "平方差分解后约去 x−2。"
      },
      {
        "id": "calc-u1-q003",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "可去间断",
        "stem": "若补充定义 f(2)=4，判断 f 在 x=2 处是否连续，并说明理由。",
        "answer": "连续。因为补充后 f(2)=4，且 x→2 时 f(x)→4，极限值等于函数值。",
        "solution": "连续定义要求函数值、极限值存在且相等。"
      },
      {
        "id": "calc-u1-q004",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "极限与连续的区别",
        "stem": "“极限存在”与“在该点连续”有何区别？结合 f 在 x=2 处的原定义说明。",
        "answer": "原函数在 x=2 无定义，所以不连续；但极限存在且为 4。连续还要求该点函数值等于极限。",
        "solution": "极限只看去心邻域；连续还要看该点函数值。"
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u1-set1",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u1-1",
    "stimulus": {
      "title": "瞬时变化导论 · 数值—图像—符号",
      "text": "下表给出 f 在若干点的值；图像为同一函数示意。用三种表征回答。",
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
        "difficulty": "易",
        "calculator": true,
        "title": "平均变化率",
        "type": "frq",
        "check": "numeric",
        "stem": "根据表中数据，估计 f 在 x=1 与 x=2 之间的平均变化率。",
        "expected": 3,
        "tol": 0.05,
        "answerLatex": "3",
        "solution": "函数值增量与自变量增量之比为 3。",
        "solutionLatex": "\\dfrac{5-2}{2-1}=3",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u1-q006",
        "difficulty": "中",
        "calculator": false,
        "title": "符号极限",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\lim_{x\\to 1}\\dfrac{x^{2}-1}{x-1}",
        "expected": "2",
        "answerLatex": "2",
        "solution": "因式分解后约去公因子，极限为 2。",
        "solutionLatex": "\\dfrac{(x-1)(x+1)}{x-1}=x+1\\to2",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u1-q007",
        "difficulty": "难",
        "calculator": false,
        "title": "图像极限",
        "type": "frq",
        "stem": "说明图像上哪一段斜率最大，并与表中差分商对照。",
        "answer": "x∈[2,3] 差分商最大（约 5），与最陡段一致。",
        "solution": "多表征对齐。",
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
    "title": "1.1 瞬时变化导论 · 变式",
    "difficulty": "易",
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
    "title": "1.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q010",
    "title": "1.3 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「由图像估计极限」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.4 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q012",
    "title": "1.5 论述 · 极限的代数性质",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「极限的代数性质」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q013",
    "title": "1.6 代数操作求极限 · 变式",
    "difficulty": "难",
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
    "title": "1.7 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q015",
    "title": "1.8 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「挤压定理」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.9 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q017",
    "title": "1.10 论述 · 探索间断类型",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「探索间断类型」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q018",
    "title": "1.11 定义连续性 · 变式",
    "difficulty": "中",
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
    "title": "1.12 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q020",
    "title": "1.13 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「除去间断」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.14 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q022",
    "title": "1.15 论述 · 无穷远处极限与水平渐近",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「无穷远处极限与水平渐近」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q023",
    "title": "1.16 中间值定理 · 变式",
    "difficulty": "易",
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
    "title": "1.1 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q025",
    "title": "1.2 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「极限定义与记号」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.3 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q027",
    "title": "1.4 论述 · 由表估计极限",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「由表估计极限」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q028",
    "title": "1.5 极限的代数性质 · 变式",
    "difficulty": "难",
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
    "title": "1.6 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q030",
    "title": "1.7 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「选择求极限程序」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.8 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q032",
    "title": "1.9 论述 · 极限多种表示的联结",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「极限多种表示的联结」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q033",
    "title": "1.10 探索间断类型 · 变式",
    "difficulty": "中",
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
    "title": "1.11 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q035",
    "title": "1.12 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「确认区间连续」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.13 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q037",
    "title": "1.14 论述 · 无限极限与竖直渐近",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「无限极限与竖直渐近」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q038",
    "title": "1.15 无穷远处极限与水平渐近 · 变式",
    "difficulty": "易",
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
    "title": "1.16 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q040",
    "title": "1.1 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「瞬时变化导论」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.2 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q042",
    "title": "1.3 论述 · 由图像估计极限",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「由图像估计极限」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q043",
    "title": "1.4 由表估计极限 · 变式",
    "difficulty": "难",
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
    "title": "1.5 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q045",
    "title": "1.6 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「代数操作求极限」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.7 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q047",
    "title": "1.8 论述 · 挤压定理",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「挤压定理」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q048",
    "title": "1.9 极限多种表示的联结 · 变式",
    "difficulty": "中",
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
    "title": "1.10 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q050",
    "title": "1.11 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「定义连续性」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.12 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q052",
    "title": "1.13 论述 · 除去间断",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「除去间断」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q053",
    "title": "1.14 无限极限与竖直渐近 · 变式",
    "difficulty": "易",
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
    "title": "1.15 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q055",
    "title": "1.16 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「中间值定理」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.1 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q057",
    "title": "1.2 论述 · 极限定义与记号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「极限定义与记号」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q058",
    "title": "1.3 由图像估计极限 · 变式",
    "difficulty": "难",
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
    "title": "1.4 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q060",
    "title": "1.5 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极限的代数性质」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.6 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q062",
    "title": "1.7 论述 · 选择求极限程序",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「选择求极限程序」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q063",
    "title": "1.8 挤压定理 · 变式",
    "difficulty": "中",
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
    "title": "1.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q065",
    "title": "1.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「探索间断类型」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q067",
    "title": "1.12 论述 · 确认区间连续",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「确认区间连续」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q068",
    "title": "1.13 除去间断 · 变式",
    "difficulty": "易",
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
    "title": "1.14 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q070",
    "title": "1.15 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「无穷远处极限与水平渐近」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.16 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q072",
    "title": "1.1 论述 · 瞬时变化导论",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「瞬时变化导论」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q073",
    "title": "1.2 极限定义与记号 · 变式",
    "difficulty": "难",
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
    "title": "1.3 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q075",
    "title": "1.4 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「由表估计极限」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.5 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q077",
    "title": "1.6 论述 · 代数操作求极限",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「代数操作求极限」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q078",
    "title": "1.7 选择求极限程序 · 变式",
    "difficulty": "中",
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
    "title": "1.8 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q080",
    "title": "1.9 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「极限多种表示的联结」，下列正确的是？",
    "choices": [
      {
        "text": "极限存在不要求 f(a) 有定义，但连续要求三者一致",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略",
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
    "title": "1.10 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\lim_{x\\to 2}(3x+1)",
    "expected": 7,
    "tol": 0.02,
    "answerLatex": "7",
    "solution": "代入得 7。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q082",
    "title": "1.11 论述 · 定义连续性",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「定义连续性」：用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。",
    "answerLatex": "\\lim_{x\\to2}\\dfrac{x^{2}-4}{x-2}=4",
    "answer": "极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如题中 f 在 x=2 无定义，但在 x≠2 时可约简为 x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。",
    "solution": "可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u1-q083",
    "title": "1.12 确认区间连续 · 变式",
    "difficulty": "易",
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
    "title": "1.13 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
    "expected": "1",
    "answerLatex": "1",
    "solution": "标准极限。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
