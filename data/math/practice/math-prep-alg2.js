/** Practice bank for math-prep-alg2 */
export const UNIT_REF = {
  "id": "math-prep-alg2",
  "code": "P3",
  "titleZh": "代数 II",
  "titleEn": "Algebra II",
  "layer": "prep",
  "subject": "math"
};
export const stimuli = {
  "stim-math-prep-alg2-1": {
    "title": "函数族回顾 · 多表征",
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
  "stim-math-prep-alg2-2": {
    "title": "二次函数深入 · 多表征",
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
    "id": "math-prep-alg2-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg2-1",
    "stimulus": {
      "title": "函数族回顾 · 多表征",
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
        "id": "math-prep-alg2-q001",
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
            "href": "#/t/math/math-prep-alg2/P3.1",
            "label": "P3.1 函数族回顾",
            "topicId": "math-prep-alg2:P3.1"
          }
        ]
      },
      {
        "id": "math-prep-alg2-q002",
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
            "href": "#/t/math/math-prep-alg2/P3.2",
            "label": "P3.2 二次函数深入",
            "topicId": "math-prep-alg2:P3.2"
          }
        ]
      },
      {
        "id": "math-prep-alg2-q003",
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
            "href": "#/t/math/math-prep-alg2/P3.3",
            "label": "P3.3 多项式函数",
            "topicId": "math-prep-alg2:P3.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "math-prep-alg2-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg2-2",
    "stimulus": {
      "title": "二次函数深入 · 多表征",
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
        "id": "math-prep-alg2-q004",
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
            "href": "#/t/math/math-prep-alg2/P3.4",
            "label": "P3.4 有理函数",
            "topicId": "math-prep-alg2:P3.4"
          }
        ]
      },
      {
        "id": "math-prep-alg2-q005",
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
            "href": "#/t/math/math-prep-alg2/P3.5",
            "label": "P3.5 根式与有理指数",
            "topicId": "math-prep-alg2:P3.5"
          }
        ]
      },
      {
        "id": "math-prep-alg2-q006",
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
            "href": "#/t/math/math-prep-alg2/P3.6",
            "label": "P3.6 指数函数",
            "topicId": "math-prep-alg2:P3.6"
          }
        ]
      },
      {
        "id": "math-prep-alg2-q007",
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
            "href": "#/t/math/math-prep-alg2/P3.7",
            "label": "P3.7 对数函数",
            "topicId": "math-prep-alg2:P3.7"
          }
        ]
      }
    ]
  },
  {
    "id": "math-prep-alg2-q008",
    "title": "P3.1 函数族回顾 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.8",
        "label": "P3.8 数列与级数入门",
        "topicId": "math-prep-alg2:P3.8"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q009",
    "title": "P3.2 二次函数深入 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.9",
        "label": "P3.9 概率与计数",
        "topicId": "math-prep-alg2:P3.9"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q010",
    "title": "P3.3 多项式函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.10",
        "label": "P3.10 矩阵入门",
        "topicId": "math-prep-alg2:P3.10"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q011",
    "title": "P3.4 有理函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.11",
        "label": "P3.11 圆锥曲线入门",
        "topicId": "math-prep-alg2:P3.11"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q012",
    "title": "P3.5 根式与有理指数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.12",
        "label": "P3.12 三角恒等式预备",
        "topicId": "math-prep-alg2:P3.12"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q013",
    "title": "P3.6 符号等价",
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
        "href": "#/t/math/math-prep-alg2/P3.1",
        "label": "P3.1 函数族回顾",
        "topicId": "math-prep-alg2:P3.1"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q014",
    "title": "P3.7 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「对数函数」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg2/P3.2",
        "label": "P3.2 二次函数深入",
        "topicId": "math-prep-alg2:P3.2"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q015",
    "title": "P3.8 数列与级数入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.3",
        "label": "P3.3 多项式函数",
        "topicId": "math-prep-alg2:P3.3"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q016",
    "title": "P3.9 概率与计数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.4",
        "label": "P3.4 有理函数",
        "topicId": "math-prep-alg2:P3.4"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q017",
    "title": "P3.10 矩阵入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.5",
        "label": "P3.5 根式与有理指数",
        "topicId": "math-prep-alg2:P3.5"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q018",
    "title": "P3.11 圆锥曲线入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.6",
        "label": "P3.6 指数函数",
        "topicId": "math-prep-alg2:P3.6"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q019",
    "title": "P3.12 三角恒等式预备 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.7",
        "label": "P3.7 对数函数",
        "topicId": "math-prep-alg2:P3.7"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q020",
    "title": "P3.1 符号等价",
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
        "href": "#/t/math/math-prep-alg2/P3.8",
        "label": "P3.8 数列与级数入门",
        "topicId": "math-prep-alg2:P3.8"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q021",
    "title": "P3.2 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「二次函数深入」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg2/P3.9",
        "label": "P3.9 概率与计数",
        "topicId": "math-prep-alg2:P3.9"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q022",
    "title": "P3.3 多项式函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.10",
        "label": "P3.10 矩阵入门",
        "topicId": "math-prep-alg2:P3.10"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q023",
    "title": "P3.4 有理函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.11",
        "label": "P3.11 圆锥曲线入门",
        "topicId": "math-prep-alg2:P3.11"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q024",
    "title": "P3.5 根式与有理指数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.12",
        "label": "P3.12 三角恒等式预备",
        "topicId": "math-prep-alg2:P3.12"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q025",
    "title": "P3.6 指数函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.1",
        "label": "P3.1 函数族回顾",
        "topicId": "math-prep-alg2:P3.1"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q026",
    "title": "P3.7 对数函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.2",
        "label": "P3.2 二次函数深入",
        "topicId": "math-prep-alg2:P3.2"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q027",
    "title": "P3.8 符号等价",
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
        "href": "#/t/math/math-prep-alg2/P3.3",
        "label": "P3.3 多项式函数",
        "topicId": "math-prep-alg2:P3.3"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q028",
    "title": "P3.9 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「概率与计数」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg2/P3.4",
        "label": "P3.4 有理函数",
        "topicId": "math-prep-alg2:P3.4"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q029",
    "title": "P3.10 矩阵入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.5",
        "label": "P3.5 根式与有理指数",
        "topicId": "math-prep-alg2:P3.5"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q030",
    "title": "P3.11 圆锥曲线入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.6",
        "label": "P3.6 指数函数",
        "topicId": "math-prep-alg2:P3.6"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q031",
    "title": "P3.12 三角恒等式预备 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.7",
        "label": "P3.7 对数函数",
        "topicId": "math-prep-alg2:P3.7"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q032",
    "title": "P3.1 函数族回顾 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.8",
        "label": "P3.8 数列与级数入门",
        "topicId": "math-prep-alg2:P3.8"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q033",
    "title": "P3.2 二次函数深入 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.9",
        "label": "P3.9 概率与计数",
        "topicId": "math-prep-alg2:P3.9"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q034",
    "title": "P3.3 符号等价",
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
        "href": "#/t/math/math-prep-alg2/P3.10",
        "label": "P3.10 矩阵入门",
        "topicId": "math-prep-alg2:P3.10"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q035",
    "title": "P3.4 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「有理函数」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg2/P3.11",
        "label": "P3.11 圆锥曲线入门",
        "topicId": "math-prep-alg2:P3.11"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q036",
    "title": "P3.5 根式与有理指数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.12",
        "label": "P3.12 三角恒等式预备",
        "topicId": "math-prep-alg2:P3.12"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q037",
    "title": "P3.6 指数函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.1",
        "label": "P3.1 函数族回顾",
        "topicId": "math-prep-alg2:P3.1"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q038",
    "title": "P3.7 对数函数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.2",
        "label": "P3.2 二次函数深入",
        "topicId": "math-prep-alg2:P3.2"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q039",
    "title": "P3.8 数列与级数入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.3",
        "label": "P3.3 多项式函数",
        "topicId": "math-prep-alg2:P3.3"
      }
    ]
  },
  {
    "id": "math-prep-alg2-q040",
    "title": "P3.9 概率与计数 · 参数化",
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
        "href": "#/t/math/math-prep-alg2/P3.4",
        "label": "P3.4 有理函数",
        "topicId": "math-prep-alg2:P3.4"
      }
    ]
  }
];
