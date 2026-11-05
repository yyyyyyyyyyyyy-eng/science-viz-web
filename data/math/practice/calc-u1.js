/** Practice bank for calc-u1 */
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
    "title": "瞬时变化导论 · 多表征",
    "text": "下表给出 f 在若干点的值；图像为同一函数的示意。用数值、图像与符号三种方式作答。",
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
    "sourceNote": "Multi-rep style aligned with OpenStax Calculus pedagogy; data original."
  },
  "stim-calc-u1-2": {
    "title": "极限定义与记号 · 多表征",
    "text": "下表给出 f 在若干点的值；图像为同一函数的示意。用数值、图像与符号三种方式作答。",
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
    "sourceNote": "Multi-rep style aligned with OpenStax Calculus pedagogy; data original."
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u1-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u1-1",
    "stimulus": {
      "title": "瞬时变化导论 · 多表征",
      "text": "下表给出 f 在若干点的值；图像为同一函数的示意。用数值、图像与符号三种方式作答。",
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
      "sourceNote": "Multi-rep style aligned with OpenStax Calculus pedagogy; data original."
    },
    "questions": [
      {
        "id": "calc-u1-q001",
        "title": "估计变化率",
        "type": "frq",
        "difficulty": "易",
        "calculator": true,
        "stem": "根据表中数据，估计 f 在 x=1 与 x=2 之间的平均变化率。",
        "check": "numeric",
        "expected": 3,
        "tol": 0.05,
        "answerLatex": "3",
        "solution": "平均变化率 (f(2)-f(1))/(2-1)=(5-2)/1=3。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u1/1.1",
            "label": "1.1 瞬时变化导论",
            "topicId": "calc-u1:1.1"
          }
        ]
      },
      {
        "id": "calc-u1-q002",
        "title": "符号极限",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "check": "symbolic",
        "stemLatex": "\\text{若 }f(x)=x^{2}+1\\text{，化简 }\\dfrac{f(x)-f(1)}{x-1}\\ (x\\neq 1)",
        "expected": "x+1",
        "answerLatex": "x+1",
        "solution": "因式分解 (x-1)(x+1)/(x-1)=x+1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u1/1.2",
            "label": "1.2 极限定义与记号",
            "topicId": "calc-u1:1.2"
          }
        ]
      },
      {
        "id": "calc-u1-q003",
        "title": "图像论证",
        "type": "frq",
        "difficulty": "中",
        "stem": "说明图像上哪一段斜率最大，并与表中差分商对照。",
        "answer": "x∈[2,3] 段差分商最大（约 5），与图像最陡段一致。",
        "solution": "多表征对齐是 AP Calc 核心技能。",
        "sourceId": "original",
        "source": "Original AP-style item (this project)",
        "license": "Project",
        "sourceUrl": "",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u1/1.3",
            "label": "1.3 由图像估计极限",
            "topicId": "calc-u1:1.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u1-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u1-2",
    "stimulus": {
      "title": "极限定义与记号 · 多表征",
      "text": "下表给出 f 在若干点的值；图像为同一函数的示意。用数值、图像与符号三种方式作答。",
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
      "sourceNote": "Multi-rep style aligned with OpenStax Calculus pedagogy; data original."
    },
    "questions": [
      {
        "id": "calc-u1-q004",
        "title": "估计变化率",
        "type": "frq",
        "difficulty": "易",
        "calculator": true,
        "stem": "根据表中数据，估计 f 在 x=1 与 x=2 之间的平均变化率。",
        "check": "numeric",
        "expected": 3,
        "tol": 0.05,
        "answerLatex": "3",
        "solution": "平均变化率 (f(2)-f(1))/(2-1)=(5-2)/1=3。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u1/1.4",
            "label": "1.4 由表估计极限",
            "topicId": "calc-u1:1.4"
          }
        ]
      },
      {
        "id": "calc-u1-q005",
        "title": "符号极限",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "check": "symbolic",
        "stemLatex": "\\text{若 }f(x)=x^{2}+1\\text{，化简 }\\dfrac{f(x)-f(1)}{x-1}\\ (x\\neq 1)",
        "expected": "x+1",
        "answerLatex": "x+1",
        "solution": "因式分解 (x-1)(x+1)/(x-1)=x+1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u1/1.5",
            "label": "1.5 极限的代数性质",
            "topicId": "calc-u1:1.5"
          }
        ]
      },
      {
        "id": "calc-u1-q006",
        "title": "图像论证",
        "type": "frq",
        "difficulty": "中",
        "stem": "说明图像上哪一段斜率最大，并与表中差分商对照。",
        "answer": "x∈[2,3] 段差分商最大（约 5），与图像最陡段一致。",
        "solution": "多表征对齐是 AP Calc 核心技能。",
        "sourceId": "original",
        "source": "Original AP-style item (this project)",
        "license": "Project",
        "sourceUrl": "",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u1/1.6",
            "label": "1.6 代数操作求极限",
            "topicId": "calc-u1:1.6"
          }
        ]
      },
      {
        "id": "calc-u1-q007",
        "title": "图像论证",
        "type": "frq",
        "difficulty": "中",
        "stem": "说明图像上哪一段斜率最大，并与表中差分商对照。",
        "answer": "x∈[2,3] 段差分商最大（约 5），与图像最陡段一致。",
        "solution": "多表征对齐是 AP Calc 核心技能。",
        "sourceId": "original",
        "source": "Original AP-style item (this project)",
        "license": "Project",
        "sourceUrl": "",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/math/calc-u1/1.7",
            "label": "1.7 选择求极限程序",
            "topicId": "calc-u1:1.7"
          }
        ]
      }
    ]
  },
  {
    "id": "calc-u1-q008",
    "title": "1.1 瞬时变化导论 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.8",
        "label": "1.8 挤压定理",
        "topicId": "calc-u1:1.8"
      }
    ]
  },
  {
    "id": "calc-u1-q009",
    "title": "1.2 极限定义与记号 · 参数化",
    "difficulty": "中",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.9",
        "label": "1.9 连通间断类型",
        "topicId": "calc-u1:1.9"
      }
    ]
  },
  {
    "id": "calc-u1-q010",
    "title": "1.3 由图像估计极限 · 参数化",
    "difficulty": "难",
    "generator": "product",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.10",
        "label": "1.10 探索间断类型",
        "topicId": "calc-u1:1.10"
      }
    ]
  },
  {
    "id": "calc-u1-q011",
    "title": "1.4 由表估计极限 · 参数化",
    "difficulty": "易",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.11",
        "label": "1.11 定义连续性",
        "topicId": "calc-u1:1.11"
      }
    ]
  },
  {
    "id": "calc-u1-q012",
    "title": "1.5 极限的代数性质 · 参数化",
    "difficulty": "中",
    "generator": "integral",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.12",
        "label": "1.12 确认区间连续",
        "topicId": "calc-u1:1.12"
      }
    ]
  },
  {
    "id": "calc-u1-q013",
    "title": "1.6 符号等价",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{3}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^2+x^1+1",
    "answerLatex": "x^{2}+x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.13",
        "label": "1.13 除去间断",
        "topicId": "calc-u1:1.13"
      }
    ]
  },
  {
    "id": "calc-u1-q014",
    "title": "1.7 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「选择求极限程序」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.14",
        "label": "1.14 无限极限与竖直渐近",
        "topicId": "calc-u1:1.14"
      }
    ]
  },
  {
    "id": "calc-u1-q015",
    "title": "1.8 挤压定理 · 参数化",
    "difficulty": "中",
    "generator": "power",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.15",
        "label": "1.15 无穷远处极限与水平渐近",
        "topicId": "calc-u1:1.15"
      }
    ]
  },
  {
    "id": "calc-u1-q016",
    "title": "1.9 连通间断类型 · 参数化",
    "difficulty": "难",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.16",
        "label": "1.16 中间值定理",
        "topicId": "calc-u1:1.16"
      }
    ]
  },
  {
    "id": "calc-u1-q017",
    "title": "1.10 探索间断类型 · 参数化",
    "difficulty": "易",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.1",
        "label": "1.1 瞬时变化导论",
        "topicId": "calc-u1:1.1"
      }
    ]
  },
  {
    "id": "calc-u1-q018",
    "title": "1.11 定义连续性 · 参数化",
    "difficulty": "中",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.2",
        "label": "1.2 极限定义与记号",
        "topicId": "calc-u1:1.2"
      }
    ]
  },
  {
    "id": "calc-u1-q019",
    "title": "1.12 确认区间连续 · 参数化",
    "difficulty": "难",
    "generator": "integral",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.3",
        "label": "1.3 由图像估计极限",
        "topicId": "calc-u1:1.3"
      }
    ]
  },
  {
    "id": "calc-u1-q020",
    "title": "1.13 符号等价",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{2}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^1+1",
    "answerLatex": "x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.4",
        "label": "1.4 由表估计极限",
        "topicId": "calc-u1:1.4"
      }
    ]
  },
  {
    "id": "calc-u1-q021",
    "title": "1.14 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「无限极限与竖直渐近」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.5",
        "label": "1.5 极限的代数性质",
        "topicId": "calc-u1:1.5"
      }
    ]
  },
  {
    "id": "calc-u1-q022",
    "title": "1.15 无穷远处极限与水平渐近 · 参数化",
    "difficulty": "难",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.6",
        "label": "1.6 代数操作求极限",
        "topicId": "calc-u1:1.6"
      }
    ]
  },
  {
    "id": "calc-u1-q023",
    "title": "1.16 中间值定理 · 参数化",
    "difficulty": "易",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.7",
        "label": "1.7 选择求极限程序",
        "topicId": "calc-u1:1.7"
      }
    ]
  },
  {
    "id": "calc-u1-q024",
    "title": "1.1 瞬时变化导论 · 参数化",
    "difficulty": "中",
    "generator": "product",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.8",
        "label": "1.8 挤压定理",
        "topicId": "calc-u1:1.8"
      }
    ]
  },
  {
    "id": "calc-u1-q025",
    "title": "1.2 极限定义与记号 · 参数化",
    "difficulty": "难",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.9",
        "label": "1.9 连通间断类型",
        "topicId": "calc-u1:1.9"
      }
    ]
  },
  {
    "id": "calc-u1-q026",
    "title": "1.3 由图像估计极限 · 参数化",
    "difficulty": "易",
    "generator": "integral",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.10",
        "label": "1.10 探索间断类型",
        "topicId": "calc-u1:1.10"
      }
    ]
  },
  {
    "id": "calc-u1-q027",
    "title": "1.4 符号等价",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{5}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^4+x^3+x^2+x^1+1",
    "answerLatex": "x^{4}+x^{3}+x^{2}+x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.11",
        "label": "1.11 定义连续性",
        "topicId": "calc-u1:1.11"
      }
    ]
  },
  {
    "id": "calc-u1-q028",
    "title": "1.5 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「极限的代数性质」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.12",
        "label": "1.12 确认区间连续",
        "topicId": "calc-u1:1.12"
      }
    ]
  },
  {
    "id": "calc-u1-q029",
    "title": "1.6 代数操作求极限 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.13",
        "label": "1.13 除去间断",
        "topicId": "calc-u1:1.13"
      }
    ]
  },
  {
    "id": "calc-u1-q030",
    "title": "1.7 选择求极限程序 · 参数化",
    "difficulty": "中",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.14",
        "label": "1.14 无限极限与竖直渐近",
        "topicId": "calc-u1:1.14"
      }
    ]
  },
  {
    "id": "calc-u1-q031",
    "title": "1.8 挤压定理 · 参数化",
    "difficulty": "难",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.15",
        "label": "1.15 无穷远处极限与水平渐近",
        "topicId": "calc-u1:1.15"
      }
    ]
  },
  {
    "id": "calc-u1-q032",
    "title": "1.9 连通间断类型 · 参数化",
    "difficulty": "易",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.16",
        "label": "1.16 中间值定理",
        "topicId": "calc-u1:1.16"
      }
    ]
  },
  {
    "id": "calc-u1-q033",
    "title": "1.10 探索间断类型 · 参数化",
    "difficulty": "中",
    "generator": "integral",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.1",
        "label": "1.1 瞬时变化导论",
        "topicId": "calc-u1:1.1"
      }
    ]
  },
  {
    "id": "calc-u1-q034",
    "title": "1.11 符号等价",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{4}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^3+x^2+x^1+1",
    "answerLatex": "x^{3}+x^{2}+x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.2",
        "label": "1.2 极限定义与记号",
        "topicId": "calc-u1:1.2"
      }
    ]
  },
  {
    "id": "calc-u1-q035",
    "title": "1.12 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「确认区间连续」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.3",
        "label": "1.3 由图像估计极限",
        "topicId": "calc-u1:1.3"
      }
    ]
  },
  {
    "id": "calc-u1-q036",
    "title": "1.13 除去间断 · 参数化",
    "difficulty": "中",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.4",
        "label": "1.4 由表估计极限",
        "topicId": "calc-u1:1.4"
      }
    ]
  },
  {
    "id": "calc-u1-q037",
    "title": "1.14 无限极限与竖直渐近 · 参数化",
    "difficulty": "难",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.5",
        "label": "1.5 极限的代数性质",
        "topicId": "calc-u1:1.5"
      }
    ]
  },
  {
    "id": "calc-u1-q038",
    "title": "1.15 无穷远处极限与水平渐近 · 参数化",
    "difficulty": "易",
    "generator": "product",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.6",
        "label": "1.6 代数操作求极限",
        "topicId": "calc-u1:1.6"
      }
    ]
  },
  {
    "id": "calc-u1-q039",
    "title": "1.16 中间值定理 · 参数化",
    "difficulty": "中",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.7",
        "label": "1.7 选择求极限程序",
        "topicId": "calc-u1:1.7"
      }
    ]
  },
  {
    "id": "calc-u1-q040",
    "title": "1.1 瞬时变化导论 · 参数化",
    "difficulty": "难",
    "generator": "integral",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.8",
        "label": "1.8 挤压定理",
        "topicId": "calc-u1:1.8"
      }
    ]
  },
  {
    "id": "calc-u1-q041",
    "title": "1.2 符号等价",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{3}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^2+x^1+1",
    "answerLatex": "x^{2}+x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.9",
        "label": "1.9 连通间断类型",
        "topicId": "calc-u1:1.9"
      }
    ]
  },
  {
    "id": "calc-u1-q042",
    "title": "1.3 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「由图像估计极限」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.10",
        "label": "1.10 探索间断类型",
        "topicId": "calc-u1:1.10"
      }
    ]
  },
  {
    "id": "calc-u1-q043",
    "title": "1.4 由表估计极限 · 参数化",
    "difficulty": "难",
    "generator": "power",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.11",
        "label": "1.11 定义连续性",
        "topicId": "calc-u1:1.11"
      }
    ]
  },
  {
    "id": "calc-u1-q044",
    "title": "1.5 极限的代数性质 · 参数化",
    "difficulty": "易",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.12",
        "label": "1.12 确认区间连续",
        "topicId": "calc-u1:1.12"
      }
    ]
  },
  {
    "id": "calc-u1-q045",
    "title": "1.6 代数操作求极限 · 参数化",
    "difficulty": "中",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.13",
        "label": "1.13 除去间断",
        "topicId": "calc-u1:1.13"
      }
    ]
  },
  {
    "id": "calc-u1-q046",
    "title": "1.7 选择求极限程序 · 参数化",
    "difficulty": "难",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.14",
        "label": "1.14 无限极限与竖直渐近",
        "topicId": "calc-u1:1.14"
      }
    ]
  },
  {
    "id": "calc-u1-q047",
    "title": "1.8 挤压定理 · 参数化",
    "difficulty": "易",
    "generator": "integral",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.15",
        "label": "1.15 无穷远处极限与水平渐近",
        "topicId": "calc-u1:1.15"
      }
    ]
  },
  {
    "id": "calc-u1-q048",
    "title": "1.9 符号等价",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{2}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^1+1",
    "answerLatex": "x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.16",
        "label": "1.16 中间值定理",
        "topicId": "calc-u1:1.16"
      }
    ]
  },
  {
    "id": "calc-u1-q049",
    "title": "1.10 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「探索间断类型」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.1",
        "label": "1.1 瞬时变化导论",
        "topicId": "calc-u1:1.1"
      }
    ]
  },
  {
    "id": "calc-u1-q050",
    "title": "1.11 定义连续性 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.2",
        "label": "1.2 极限定义与记号",
        "topicId": "calc-u1:1.2"
      }
    ]
  },
  {
    "id": "calc-u1-q051",
    "title": "1.12 确认区间连续 · 参数化",
    "difficulty": "中",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.3",
        "label": "1.3 由图像估计极限",
        "topicId": "calc-u1:1.3"
      }
    ]
  },
  {
    "id": "calc-u1-q052",
    "title": "1.13 除去间断 · 参数化",
    "difficulty": "难",
    "generator": "product",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.4",
        "label": "1.4 由表估计极限",
        "topicId": "calc-u1:1.4"
      }
    ]
  },
  {
    "id": "calc-u1-q053",
    "title": "1.14 无限极限与竖直渐近 · 参数化",
    "difficulty": "易",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.5",
        "label": "1.5 极限的代数性质",
        "topicId": "calc-u1:1.5"
      }
    ]
  },
  {
    "id": "calc-u1-q054",
    "title": "1.15 无穷远处极限与水平渐近 · 参数化",
    "difficulty": "中",
    "generator": "integral",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.6",
        "label": "1.6 代数操作求极限",
        "topicId": "calc-u1:1.6"
      }
    ]
  },
  {
    "id": "calc-u1-q055",
    "title": "1.16 符号等价",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{5}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^4+x^3+x^2+x^1+1",
    "answerLatex": "x^{4}+x^{3}+x^{2}+x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.7",
        "label": "1.7 选择求极限程序",
        "topicId": "calc-u1:1.7"
      }
    ]
  },
  {
    "id": "calc-u1-q056",
    "title": "1.1 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「瞬时变化导论」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.8",
        "label": "1.8 挤压定理",
        "topicId": "calc-u1:1.8"
      }
    ]
  },
  {
    "id": "calc-u1-q057",
    "title": "1.2 极限定义与记号 · 参数化",
    "difficulty": "中",
    "generator": "power",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.9",
        "label": "1.9 连通间断类型",
        "topicId": "calc-u1:1.9"
      }
    ]
  },
  {
    "id": "calc-u1-q058",
    "title": "1.3 由图像估计极限 · 参数化",
    "difficulty": "难",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.10",
        "label": "1.10 探索间断类型",
        "topicId": "calc-u1:1.10"
      }
    ]
  },
  {
    "id": "calc-u1-q059",
    "title": "1.4 由表估计极限 · 参数化",
    "difficulty": "易",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.11",
        "label": "1.11 定义连续性",
        "topicId": "calc-u1:1.11"
      }
    ]
  },
  {
    "id": "calc-u1-q060",
    "title": "1.5 极限的代数性质 · 参数化",
    "difficulty": "中",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.12",
        "label": "1.12 确认区间连续",
        "topicId": "calc-u1:1.12"
      }
    ]
  },
  {
    "id": "calc-u1-q061",
    "title": "1.6 代数操作求极限 · 参数化",
    "difficulty": "难",
    "generator": "integral",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.13",
        "label": "1.13 除去间断",
        "topicId": "calc-u1:1.13"
      }
    ]
  },
  {
    "id": "calc-u1-q062",
    "title": "1.7 符号等价",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{4}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^3+x^2+x^1+1",
    "answerLatex": "x^{3}+x^{2}+x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.14",
        "label": "1.14 无限极限与竖直渐近",
        "topicId": "calc-u1:1.14"
      }
    ]
  },
  {
    "id": "calc-u1-q063",
    "title": "1.8 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「挤压定理」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.15",
        "label": "1.15 无穷远处极限与水平渐近",
        "topicId": "calc-u1:1.15"
      }
    ]
  },
  {
    "id": "calc-u1-q064",
    "title": "1.9 连通间断类型 · 参数化",
    "difficulty": "难",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.16",
        "label": "1.16 中间值定理",
        "topicId": "calc-u1:1.16"
      }
    ]
  },
  {
    "id": "calc-u1-q065",
    "title": "1.10 探索间断类型 · 参数化",
    "difficulty": "易",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.1",
        "label": "1.1 瞬时变化导论",
        "topicId": "calc-u1:1.1"
      }
    ]
  },
  {
    "id": "calc-u1-q066",
    "title": "1.11 定义连续性 · 参数化",
    "difficulty": "中",
    "generator": "product",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.2",
        "label": "1.2 极限定义与记号",
        "topicId": "calc-u1:1.2"
      }
    ]
  },
  {
    "id": "calc-u1-q067",
    "title": "1.12 确认区间连续 · 参数化",
    "difficulty": "难",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.3",
        "label": "1.3 由图像估计极限",
        "topicId": "calc-u1:1.3"
      }
    ]
  },
  {
    "id": "calc-u1-q068",
    "title": "1.13 除去间断 · 参数化",
    "difficulty": "易",
    "generator": "integral",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.4",
        "label": "1.4 由表估计极限",
        "topicId": "calc-u1:1.4"
      }
    ]
  },
  {
    "id": "calc-u1-q069",
    "title": "1.14 符号等价",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{3}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^2+x^1+1",
    "answerLatex": "x^{2}+x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.5",
        "label": "1.5 极限的代数性质",
        "topicId": "calc-u1:1.5"
      }
    ]
  },
  {
    "id": "calc-u1-q070",
    "title": "1.15 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「无穷远处极限与水平渐近」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.6",
        "label": "1.6 代数操作求极限",
        "topicId": "calc-u1:1.6"
      }
    ]
  },
  {
    "id": "calc-u1-q071",
    "title": "1.16 中间值定理 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.7",
        "label": "1.7 选择求极限程序",
        "topicId": "calc-u1:1.7"
      }
    ]
  },
  {
    "id": "calc-u1-q072",
    "title": "1.1 瞬时变化导论 · 参数化",
    "difficulty": "中",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.8",
        "label": "1.8 挤压定理",
        "topicId": "calc-u1:1.8"
      }
    ]
  },
  {
    "id": "calc-u1-q073",
    "title": "1.2 极限定义与记号 · 参数化",
    "difficulty": "难",
    "generator": "product",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.9",
        "label": "1.9 连通间断类型",
        "topicId": "calc-u1:1.9"
      }
    ]
  },
  {
    "id": "calc-u1-q074",
    "title": "1.3 由图像估计极限 · 参数化",
    "difficulty": "易",
    "generator": "limit",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.10",
        "label": "1.10 探索间断类型",
        "topicId": "calc-u1:1.10"
      }
    ]
  },
  {
    "id": "calc-u1-q075",
    "title": "1.4 由表估计极限 · 参数化",
    "difficulty": "中",
    "generator": "integral",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.11",
        "label": "1.11 定义连续性",
        "topicId": "calc-u1:1.11"
      }
    ]
  },
  {
    "id": "calc-u1-q076",
    "title": "1.5 符号等价",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{2}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^1+1",
    "answerLatex": "x^{1}+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.12",
        "label": "1.12 确认区间连续",
        "topicId": "calc-u1:1.12"
      }
    ]
  },
  {
    "id": "calc-u1-q077",
    "title": "1.6 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「代数操作求极限」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
    "parts": [
      {
        "stem": "写出区间 [a,b] 上平均变化率。",
        "type": "frq",
        "answerLatex": "\\dfrac{f(b)-f(a)}{b-a}",
        "solution": "割线斜率。"
      },
      {
        "stem": "说明如何用极限得到瞬时变化率。",
        "type": "frq",
        "answer": "令 h→0，差分商极限即 f′(a)。",
        "solution": "定义。"
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.13",
        "label": "1.13 除去间断",
        "topicId": "calc-u1:1.13"
      }
    ]
  },
  {
    "id": "calc-u1-q078",
    "title": "1.7 选择求极限程序 · 参数化",
    "difficulty": "中",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.14",
        "label": "1.14 无限极限与竖直渐近",
        "topicId": "calc-u1:1.14"
      }
    ]
  },
  {
    "id": "calc-u1-q079",
    "title": "1.8 挤压定理 · 参数化",
    "difficulty": "难",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.15",
        "label": "1.15 无穷远处极限与水平渐近",
        "topicId": "calc-u1:1.15"
      }
    ]
  },
  {
    "id": "calc-u1-q080",
    "title": "1.9 连通间断类型 · 参数化",
    "difficulty": "易",
    "generator": "product",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u1/1.16",
        "label": "1.16 中间值定理",
        "topicId": "calc-u1:1.16"
      }
    ]
  }
];
