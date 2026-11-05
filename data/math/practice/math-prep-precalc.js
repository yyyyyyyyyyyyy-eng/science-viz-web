/** Practice bank for math-prep-precalc */
export const UNIT_REF = {
  "id": "math-prep-precalc",
  "code": "P4",
  "titleZh": "预备微积分",
  "titleEn": "Precalculus",
  "layer": "prep",
  "subject": "math"
};
export const stimuli = {
  "stim-math-prep-precalc-1": {
    "title": "多项式与有理函数分析 · 多表征",
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
  "stim-math-prep-precalc-2": {
    "title": "指数与对数模型 · 多表征",
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
    "id": "math-prep-precalc-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-math-prep-precalc-1",
    "stimulus": {
      "title": "多项式与有理函数分析 · 多表征",
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
        "id": "math-prep-precalc-q001",
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
            "href": "#/t/math/math-prep-precalc/P4.1",
            "label": "P4.1 多项式与有理函数分析",
            "topicId": "math-prep-precalc:P4.1"
          }
        ]
      },
      {
        "id": "math-prep-precalc-q002",
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
            "href": "#/t/math/math-prep-precalc/P4.2",
            "label": "P4.2 指数与对数模型",
            "topicId": "math-prep-precalc:P4.2"
          }
        ]
      },
      {
        "id": "math-prep-precalc-q003",
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
            "href": "#/t/math/math-prep-precalc/P4.3",
            "label": "P4.3 单位圆与三角函数",
            "topicId": "math-prep-precalc:P4.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "math-prep-precalc-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-math-prep-precalc-2",
    "stimulus": {
      "title": "指数与对数模型 · 多表征",
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
        "id": "math-prep-precalc-q004",
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
            "href": "#/t/math/math-prep-precalc/P4.4",
            "label": "P4.4 三角方程与恒等式",
            "topicId": "math-prep-precalc:P4.4"
          }
        ]
      },
      {
        "id": "math-prep-precalc-q005",
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
            "href": "#/t/math/math-prep-precalc/P4.5",
            "label": "P4.5 极坐标入门",
            "topicId": "math-prep-precalc:P4.5"
          }
        ]
      },
      {
        "id": "math-prep-precalc-q006",
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
            "href": "#/t/math/math-prep-precalc/P4.6",
            "label": "P4.6 参数方程入门",
            "topicId": "math-prep-precalc:P4.6"
          }
        ]
      },
      {
        "id": "math-prep-precalc-q007",
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
            "href": "#/t/math/math-prep-precalc/P4.7",
            "label": "P4.7 向量入门",
            "topicId": "math-prep-precalc:P4.7"
          }
        ]
      }
    ]
  },
  {
    "id": "math-prep-precalc-q008",
    "title": "P4.1 多项式与有理函数分析 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.8",
        "label": "P4.8 矩阵与变换",
        "topicId": "math-prep-precalc:P4.8"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q009",
    "title": "P4.2 指数与对数模型 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.9",
        "label": "P4.9 极限直觉",
        "topicId": "math-prep-precalc:P4.9"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q010",
    "title": "P4.3 单位圆与三角函数 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.10",
        "label": "P4.10 变化率直觉",
        "topicId": "math-prep-precalc:P4.10"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q011",
    "title": "P4.4 三角方程与恒等式 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.1",
        "label": "P4.1 多项式与有理函数分析",
        "topicId": "math-prep-precalc:P4.1"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q012",
    "title": "P4.5 极坐标入门 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.2",
        "label": "P4.2 指数与对数模型",
        "topicId": "math-prep-precalc:P4.2"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q013",
    "title": "P4.6 符号等价",
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
        "href": "#/t/math/math-prep-precalc/P4.3",
        "label": "P4.3 单位圆与三角函数",
        "topicId": "math-prep-precalc:P4.3"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q014",
    "title": "P4.7 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「向量入门」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-precalc/P4.4",
        "label": "P4.4 三角方程与恒等式",
        "topicId": "math-prep-precalc:P4.4"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q015",
    "title": "P4.8 矩阵与变换 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.5",
        "label": "P4.5 极坐标入门",
        "topicId": "math-prep-precalc:P4.5"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q016",
    "title": "P4.9 极限直觉 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.6",
        "label": "P4.6 参数方程入门",
        "topicId": "math-prep-precalc:P4.6"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q017",
    "title": "P4.10 变化率直觉 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.7",
        "label": "P4.7 向量入门",
        "topicId": "math-prep-precalc:P4.7"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q018",
    "title": "P4.1 多项式与有理函数分析 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.8",
        "label": "P4.8 矩阵与变换",
        "topicId": "math-prep-precalc:P4.8"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q019",
    "title": "P4.2 指数与对数模型 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.9",
        "label": "P4.9 极限直觉",
        "topicId": "math-prep-precalc:P4.9"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q020",
    "title": "P4.3 符号等价",
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
        "href": "#/t/math/math-prep-precalc/P4.10",
        "label": "P4.10 变化率直觉",
        "topicId": "math-prep-precalc:P4.10"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q021",
    "title": "P4.4 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「三角方程与恒等式」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-precalc/P4.1",
        "label": "P4.1 多项式与有理函数分析",
        "topicId": "math-prep-precalc:P4.1"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q022",
    "title": "P4.5 极坐标入门 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.2",
        "label": "P4.2 指数与对数模型",
        "topicId": "math-prep-precalc:P4.2"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q023",
    "title": "P4.6 参数方程入门 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.3",
        "label": "P4.3 单位圆与三角函数",
        "topicId": "math-prep-precalc:P4.3"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q024",
    "title": "P4.7 向量入门 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.4",
        "label": "P4.4 三角方程与恒等式",
        "topicId": "math-prep-precalc:P4.4"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q025",
    "title": "P4.8 矩阵与变换 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.5",
        "label": "P4.5 极坐标入门",
        "topicId": "math-prep-precalc:P4.5"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q026",
    "title": "P4.9 极限直觉 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.6",
        "label": "P4.6 参数方程入门",
        "topicId": "math-prep-precalc:P4.6"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q027",
    "title": "P4.10 符号等价",
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
        "href": "#/t/math/math-prep-precalc/P4.7",
        "label": "P4.7 向量入门",
        "topicId": "math-prep-precalc:P4.7"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q028",
    "title": "P4.1 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「多项式与有理函数分析」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-precalc/P4.8",
        "label": "P4.8 矩阵与变换",
        "topicId": "math-prep-precalc:P4.8"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q029",
    "title": "P4.2 指数与对数模型 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.9",
        "label": "P4.9 极限直觉",
        "topicId": "math-prep-precalc:P4.9"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q030",
    "title": "P4.3 单位圆与三角函数 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.10",
        "label": "P4.10 变化率直觉",
        "topicId": "math-prep-precalc:P4.10"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q031",
    "title": "P4.4 三角方程与恒等式 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.1",
        "label": "P4.1 多项式与有理函数分析",
        "topicId": "math-prep-precalc:P4.1"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q032",
    "title": "P4.5 极坐标入门 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.2",
        "label": "P4.2 指数与对数模型",
        "topicId": "math-prep-precalc:P4.2"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q033",
    "title": "P4.6 参数方程入门 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.3",
        "label": "P4.3 单位圆与三角函数",
        "topicId": "math-prep-precalc:P4.3"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q034",
    "title": "P4.7 符号等价",
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
        "href": "#/t/math/math-prep-precalc/P4.4",
        "label": "P4.4 三角方程与恒等式",
        "topicId": "math-prep-precalc:P4.4"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q035",
    "title": "P4.8 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「矩阵与变换」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-precalc/P4.5",
        "label": "P4.5 极坐标入门",
        "topicId": "math-prep-precalc:P4.5"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q036",
    "title": "P4.9 极限直觉 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.6",
        "label": "P4.6 参数方程入门",
        "topicId": "math-prep-precalc:P4.6"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q037",
    "title": "P4.10 变化率直觉 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.7",
        "label": "P4.7 向量入门",
        "topicId": "math-prep-precalc:P4.7"
      }
    ]
  },
  {
    "id": "math-prep-precalc-q038",
    "title": "P4.1 多项式与有理函数分析 · 参数化",
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
        "href": "#/t/math/math-prep-precalc/P4.8",
        "label": "P4.8 矩阵与变换",
        "topicId": "math-prep-precalc:P4.8"
      }
    ]
  }
];
