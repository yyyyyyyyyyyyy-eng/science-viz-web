/** Practice bank for calc-u5 */
export const UNIT_REF = {
  "id": "calc-u5",
  "code": "5",
  "titleZh": "导数的分析应用",
  "titleEn": "Analytical Applications of Differentiation",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u5-1": {
    "title": "中值定理 · 多表征",
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
  "stim-calc-u5-2": {
    "title": "极值定理 · 多表征",
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
    "id": "calc-u5-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u5-1",
    "stimulus": {
      "title": "中值定理 · 多表征",
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
        "id": "calc-u5-q001",
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
            "href": "#/t/math/calc-u5/5.1",
            "label": "5.1 中值定理",
            "topicId": "calc-u5:5.1"
          }
        ]
      },
      {
        "id": "calc-u5-q002",
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
            "href": "#/t/math/calc-u5/5.2",
            "label": "5.2 极值定理",
            "topicId": "calc-u5:5.2"
          }
        ]
      },
      {
        "id": "calc-u5-q003",
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
            "href": "#/t/math/calc-u5/5.3",
            "label": "5.3 增减性",
            "topicId": "calc-u5:5.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u5-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u5-2",
    "stimulus": {
      "title": "极值定理 · 多表征",
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
        "id": "calc-u5-q004",
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
            "href": "#/t/math/calc-u5/5.4",
            "label": "5.4 一阶导数检验",
            "topicId": "calc-u5:5.4"
          }
        ]
      },
      {
        "id": "calc-u5-q005",
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
            "href": "#/t/math/calc-u5/5.5",
            "label": "5.5 候选绝对极值",
            "topicId": "calc-u5:5.5"
          }
        ]
      },
      {
        "id": "calc-u5-q006",
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
            "href": "#/t/math/calc-u5/5.6",
            "label": "5.6 凹性与拐点",
            "topicId": "calc-u5:5.6"
          }
        ]
      },
      {
        "id": "calc-u5-q007",
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
            "href": "#/t/math/calc-u5/5.7",
            "label": "5.7 二阶导数检验",
            "topicId": "calc-u5:5.7"
          }
        ]
      }
    ]
  },
  {
    "id": "calc-u5-q008",
    "title": "5.1 中值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.8",
        "label": "5.8 函数草图",
        "topicId": "calc-u5:5.8"
      }
    ]
  },
  {
    "id": "calc-u5-q009",
    "title": "5.2 极值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.9",
        "label": "5.9 函数与导数关联",
        "topicId": "calc-u5:5.9"
      }
    ]
  },
  {
    "id": "calc-u5-q010",
    "title": "5.3 增减性 · 参数化",
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
        "href": "#/t/math/calc-u5/5.10",
        "label": "5.10 优化导论",
        "topicId": "calc-u5:5.10"
      }
    ]
  },
  {
    "id": "calc-u5-q011",
    "title": "5.4 一阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.11",
        "label": "5.11 优化求解",
        "topicId": "calc-u5:5.11"
      }
    ]
  },
  {
    "id": "calc-u5-q012",
    "title": "5.5 候选绝对极值 · 参数化",
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
        "href": "#/t/math/calc-u5/5.12",
        "label": "5.12 隐式关系行为",
        "topicId": "calc-u5:5.12"
      }
    ]
  },
  {
    "id": "calc-u5-q013",
    "title": "5.6 符号等价",
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
        "href": "#/t/math/calc-u5/5.1",
        "label": "5.1 中值定理",
        "topicId": "calc-u5:5.1"
      }
    ]
  },
  {
    "id": "calc-u5-q014",
    "title": "5.7 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「二阶导数检验」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.2",
        "label": "5.2 极值定理",
        "topicId": "calc-u5:5.2"
      }
    ]
  },
  {
    "id": "calc-u5-q015",
    "title": "5.8 函数草图 · 参数化",
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
        "href": "#/t/math/calc-u5/5.3",
        "label": "5.3 增减性",
        "topicId": "calc-u5:5.3"
      }
    ]
  },
  {
    "id": "calc-u5-q016",
    "title": "5.9 函数与导数关联 · 参数化",
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
        "href": "#/t/math/calc-u5/5.4",
        "label": "5.4 一阶导数检验",
        "topicId": "calc-u5:5.4"
      }
    ]
  },
  {
    "id": "calc-u5-q017",
    "title": "5.10 优化导论 · 参数化",
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
        "href": "#/t/math/calc-u5/5.5",
        "label": "5.5 候选绝对极值",
        "topicId": "calc-u5:5.5"
      }
    ]
  },
  {
    "id": "calc-u5-q018",
    "title": "5.11 优化求解 · 参数化",
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
        "href": "#/t/math/calc-u5/5.6",
        "label": "5.6 凹性与拐点",
        "topicId": "calc-u5:5.6"
      }
    ]
  },
  {
    "id": "calc-u5-q019",
    "title": "5.12 隐式关系行为 · 参数化",
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
        "href": "#/t/math/calc-u5/5.7",
        "label": "5.7 二阶导数检验",
        "topicId": "calc-u5:5.7"
      }
    ]
  },
  {
    "id": "calc-u5-q020",
    "title": "5.1 符号等价",
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
        "href": "#/t/math/calc-u5/5.8",
        "label": "5.8 函数草图",
        "topicId": "calc-u5:5.8"
      }
    ]
  },
  {
    "id": "calc-u5-q021",
    "title": "5.2 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「极值定理」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.9",
        "label": "5.9 函数与导数关联",
        "topicId": "calc-u5:5.9"
      }
    ]
  },
  {
    "id": "calc-u5-q022",
    "title": "5.3 增减性 · 参数化",
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
        "href": "#/t/math/calc-u5/5.10",
        "label": "5.10 优化导论",
        "topicId": "calc-u5:5.10"
      }
    ]
  },
  {
    "id": "calc-u5-q023",
    "title": "5.4 一阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.11",
        "label": "5.11 优化求解",
        "topicId": "calc-u5:5.11"
      }
    ]
  },
  {
    "id": "calc-u5-q024",
    "title": "5.5 候选绝对极值 · 参数化",
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
        "href": "#/t/math/calc-u5/5.12",
        "label": "5.12 隐式关系行为",
        "topicId": "calc-u5:5.12"
      }
    ]
  },
  {
    "id": "calc-u5-q025",
    "title": "5.6 凹性与拐点 · 参数化",
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
        "href": "#/t/math/calc-u5/5.1",
        "label": "5.1 中值定理",
        "topicId": "calc-u5:5.1"
      }
    ]
  },
  {
    "id": "calc-u5-q026",
    "title": "5.7 二阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.2",
        "label": "5.2 极值定理",
        "topicId": "calc-u5:5.2"
      }
    ]
  },
  {
    "id": "calc-u5-q027",
    "title": "5.8 符号等价",
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
        "href": "#/t/math/calc-u5/5.3",
        "label": "5.3 增减性",
        "topicId": "calc-u5:5.3"
      }
    ]
  },
  {
    "id": "calc-u5-q028",
    "title": "5.9 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「函数与导数关联」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.4",
        "label": "5.4 一阶导数检验",
        "topicId": "calc-u5:5.4"
      }
    ]
  },
  {
    "id": "calc-u5-q029",
    "title": "5.10 优化导论 · 参数化",
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
        "href": "#/t/math/calc-u5/5.5",
        "label": "5.5 候选绝对极值",
        "topicId": "calc-u5:5.5"
      }
    ]
  },
  {
    "id": "calc-u5-q030",
    "title": "5.11 优化求解 · 参数化",
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
        "href": "#/t/math/calc-u5/5.6",
        "label": "5.6 凹性与拐点",
        "topicId": "calc-u5:5.6"
      }
    ]
  },
  {
    "id": "calc-u5-q031",
    "title": "5.12 隐式关系行为 · 参数化",
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
        "href": "#/t/math/calc-u5/5.7",
        "label": "5.7 二阶导数检验",
        "topicId": "calc-u5:5.7"
      }
    ]
  },
  {
    "id": "calc-u5-q032",
    "title": "5.1 中值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.8",
        "label": "5.8 函数草图",
        "topicId": "calc-u5:5.8"
      }
    ]
  },
  {
    "id": "calc-u5-q033",
    "title": "5.2 极值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.9",
        "label": "5.9 函数与导数关联",
        "topicId": "calc-u5:5.9"
      }
    ]
  },
  {
    "id": "calc-u5-q034",
    "title": "5.3 符号等价",
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
        "href": "#/t/math/calc-u5/5.10",
        "label": "5.10 优化导论",
        "topicId": "calc-u5:5.10"
      }
    ]
  },
  {
    "id": "calc-u5-q035",
    "title": "5.4 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「一阶导数检验」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.11",
        "label": "5.11 优化求解",
        "topicId": "calc-u5:5.11"
      }
    ]
  },
  {
    "id": "calc-u5-q036",
    "title": "5.5 候选绝对极值 · 参数化",
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
        "href": "#/t/math/calc-u5/5.12",
        "label": "5.12 隐式关系行为",
        "topicId": "calc-u5:5.12"
      }
    ]
  },
  {
    "id": "calc-u5-q037",
    "title": "5.6 凹性与拐点 · 参数化",
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
        "href": "#/t/math/calc-u5/5.1",
        "label": "5.1 中值定理",
        "topicId": "calc-u5:5.1"
      }
    ]
  },
  {
    "id": "calc-u5-q038",
    "title": "5.7 二阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.2",
        "label": "5.2 极值定理",
        "topicId": "calc-u5:5.2"
      }
    ]
  },
  {
    "id": "calc-u5-q039",
    "title": "5.8 函数草图 · 参数化",
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
        "href": "#/t/math/calc-u5/5.3",
        "label": "5.3 增减性",
        "topicId": "calc-u5:5.3"
      }
    ]
  },
  {
    "id": "calc-u5-q040",
    "title": "5.9 函数与导数关联 · 参数化",
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
        "href": "#/t/math/calc-u5/5.4",
        "label": "5.4 一阶导数检验",
        "topicId": "calc-u5:5.4"
      }
    ]
  },
  {
    "id": "calc-u5-q041",
    "title": "5.10 符号等价",
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
        "href": "#/t/math/calc-u5/5.5",
        "label": "5.5 候选绝对极值",
        "topicId": "calc-u5:5.5"
      }
    ]
  },
  {
    "id": "calc-u5-q042",
    "title": "5.11 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「优化求解」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.6",
        "label": "5.6 凹性与拐点",
        "topicId": "calc-u5:5.6"
      }
    ]
  },
  {
    "id": "calc-u5-q043",
    "title": "5.12 隐式关系行为 · 参数化",
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
        "href": "#/t/math/calc-u5/5.7",
        "label": "5.7 二阶导数检验",
        "topicId": "calc-u5:5.7"
      }
    ]
  },
  {
    "id": "calc-u5-q044",
    "title": "5.1 中值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.8",
        "label": "5.8 函数草图",
        "topicId": "calc-u5:5.8"
      }
    ]
  },
  {
    "id": "calc-u5-q045",
    "title": "5.2 极值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.9",
        "label": "5.9 函数与导数关联",
        "topicId": "calc-u5:5.9"
      }
    ]
  },
  {
    "id": "calc-u5-q046",
    "title": "5.3 增减性 · 参数化",
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
        "href": "#/t/math/calc-u5/5.10",
        "label": "5.10 优化导论",
        "topicId": "calc-u5:5.10"
      }
    ]
  },
  {
    "id": "calc-u5-q047",
    "title": "5.4 一阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.11",
        "label": "5.11 优化求解",
        "topicId": "calc-u5:5.11"
      }
    ]
  },
  {
    "id": "calc-u5-q048",
    "title": "5.5 符号等价",
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
        "href": "#/t/math/calc-u5/5.12",
        "label": "5.12 隐式关系行为",
        "topicId": "calc-u5:5.12"
      }
    ]
  },
  {
    "id": "calc-u5-q049",
    "title": "5.6 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「凹性与拐点」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.1",
        "label": "5.1 中值定理",
        "topicId": "calc-u5:5.1"
      }
    ]
  },
  {
    "id": "calc-u5-q050",
    "title": "5.7 二阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.2",
        "label": "5.2 极值定理",
        "topicId": "calc-u5:5.2"
      }
    ]
  },
  {
    "id": "calc-u5-q051",
    "title": "5.8 函数草图 · 参数化",
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
        "href": "#/t/math/calc-u5/5.3",
        "label": "5.3 增减性",
        "topicId": "calc-u5:5.3"
      }
    ]
  },
  {
    "id": "calc-u5-q052",
    "title": "5.9 函数与导数关联 · 参数化",
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
        "href": "#/t/math/calc-u5/5.4",
        "label": "5.4 一阶导数检验",
        "topicId": "calc-u5:5.4"
      }
    ]
  },
  {
    "id": "calc-u5-q053",
    "title": "5.10 优化导论 · 参数化",
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
        "href": "#/t/math/calc-u5/5.5",
        "label": "5.5 候选绝对极值",
        "topicId": "calc-u5:5.5"
      }
    ]
  },
  {
    "id": "calc-u5-q054",
    "title": "5.11 优化求解 · 参数化",
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
        "href": "#/t/math/calc-u5/5.6",
        "label": "5.6 凹性与拐点",
        "topicId": "calc-u5:5.6"
      }
    ]
  },
  {
    "id": "calc-u5-q055",
    "title": "5.12 符号等价",
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
        "href": "#/t/math/calc-u5/5.7",
        "label": "5.7 二阶导数检验",
        "topicId": "calc-u5:5.7"
      }
    ]
  },
  {
    "id": "calc-u5-q056",
    "title": "5.1 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「中值定理」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.8",
        "label": "5.8 函数草图",
        "topicId": "calc-u5:5.8"
      }
    ]
  },
  {
    "id": "calc-u5-q057",
    "title": "5.2 极值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.9",
        "label": "5.9 函数与导数关联",
        "topicId": "calc-u5:5.9"
      }
    ]
  },
  {
    "id": "calc-u5-q058",
    "title": "5.3 增减性 · 参数化",
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
        "href": "#/t/math/calc-u5/5.10",
        "label": "5.10 优化导论",
        "topicId": "calc-u5:5.10"
      }
    ]
  },
  {
    "id": "calc-u5-q059",
    "title": "5.4 一阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.11",
        "label": "5.11 优化求解",
        "topicId": "calc-u5:5.11"
      }
    ]
  },
  {
    "id": "calc-u5-q060",
    "title": "5.5 候选绝对极值 · 参数化",
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
        "href": "#/t/math/calc-u5/5.12",
        "label": "5.12 隐式关系行为",
        "topicId": "calc-u5:5.12"
      }
    ]
  },
  {
    "id": "calc-u5-q061",
    "title": "5.6 凹性与拐点 · 参数化",
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
        "href": "#/t/math/calc-u5/5.1",
        "label": "5.1 中值定理",
        "topicId": "calc-u5:5.1"
      }
    ]
  },
  {
    "id": "calc-u5-q062",
    "title": "5.7 符号等价",
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
        "href": "#/t/math/calc-u5/5.2",
        "label": "5.2 极值定理",
        "topicId": "calc-u5:5.2"
      }
    ]
  },
  {
    "id": "calc-u5-q063",
    "title": "5.8 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「函数草图」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.3",
        "label": "5.3 增减性",
        "topicId": "calc-u5:5.3"
      }
    ]
  },
  {
    "id": "calc-u5-q064",
    "title": "5.9 函数与导数关联 · 参数化",
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
        "href": "#/t/math/calc-u5/5.4",
        "label": "5.4 一阶导数检验",
        "topicId": "calc-u5:5.4"
      }
    ]
  },
  {
    "id": "calc-u5-q065",
    "title": "5.10 优化导论 · 参数化",
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
        "href": "#/t/math/calc-u5/5.5",
        "label": "5.5 候选绝对极值",
        "topicId": "calc-u5:5.5"
      }
    ]
  },
  {
    "id": "calc-u5-q066",
    "title": "5.11 优化求解 · 参数化",
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
        "href": "#/t/math/calc-u5/5.6",
        "label": "5.6 凹性与拐点",
        "topicId": "calc-u5:5.6"
      }
    ]
  },
  {
    "id": "calc-u5-q067",
    "title": "5.12 隐式关系行为 · 参数化",
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
        "href": "#/t/math/calc-u5/5.7",
        "label": "5.7 二阶导数检验",
        "topicId": "calc-u5:5.7"
      }
    ]
  },
  {
    "id": "calc-u5-q068",
    "title": "5.1 中值定理 · 参数化",
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
        "href": "#/t/math/calc-u5/5.8",
        "label": "5.8 函数草图",
        "topicId": "calc-u5:5.8"
      }
    ]
  },
  {
    "id": "calc-u5-q069",
    "title": "5.2 符号等价",
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
        "href": "#/t/math/calc-u5/5.9",
        "label": "5.9 函数与导数关联",
        "topicId": "calc-u5:5.9"
      }
    ]
  },
  {
    "id": "calc-u5-q070",
    "title": "5.3 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「增减性」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/calc-u5/5.10",
        "label": "5.10 优化导论",
        "topicId": "calc-u5:5.10"
      }
    ]
  },
  {
    "id": "calc-u5-q071",
    "title": "5.4 一阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.11",
        "label": "5.11 优化求解",
        "topicId": "calc-u5:5.11"
      }
    ]
  },
  {
    "id": "calc-u5-q072",
    "title": "5.5 候选绝对极值 · 参数化",
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
        "href": "#/t/math/calc-u5/5.12",
        "label": "5.12 隐式关系行为",
        "topicId": "calc-u5:5.12"
      }
    ]
  },
  {
    "id": "calc-u5-q073",
    "title": "5.6 凹性与拐点 · 参数化",
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
        "href": "#/t/math/calc-u5/5.1",
        "label": "5.1 中值定理",
        "topicId": "calc-u5:5.1"
      }
    ]
  },
  {
    "id": "calc-u5-q074",
    "title": "5.7 二阶导数检验 · 参数化",
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
        "href": "#/t/math/calc-u5/5.2",
        "label": "5.2 极值定理",
        "topicId": "calc-u5:5.2"
      }
    ]
  },
  {
    "id": "calc-u5-q075",
    "title": "5.8 函数草图 · 参数化",
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
        "href": "#/t/math/calc-u5/5.3",
        "label": "5.3 增减性",
        "topicId": "calc-u5:5.3"
      }
    ]
  },
  {
    "id": "calc-u5-q076",
    "title": "5.9 符号等价",
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
        "href": "#/t/math/calc-u5/5.4",
        "label": "5.4 一阶导数检验",
        "topicId": "calc-u5:5.4"
      }
    ]
  }
];
