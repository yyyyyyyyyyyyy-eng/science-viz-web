/** Practice bank for math-prep-alg1 */
export const UNIT_REF = {
  "id": "math-prep-alg1",
  "code": "P1",
  "titleZh": "代数 I",
  "titleEn": "Algebra I",
  "layer": "prep",
  "subject": "math"
};
export const stimuli = {
  "stim-math-prep-alg1-1": {
    "title": "表达式与实数性质 · 多表征",
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
  "stim-math-prep-alg1-2": {
    "title": "线性方程 · 多表征",
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
    "id": "math-prep-alg1-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg1-1",
    "stimulus": {
      "title": "表达式与实数性质 · 多表征",
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
        "id": "math-prep-alg1-q001",
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
            "href": "#/t/math/math-prep-alg1/P1.1",
            "label": "P1.1 表达式与实数性质",
            "topicId": "math-prep-alg1:P1.1"
          }
        ]
      },
      {
        "id": "math-prep-alg1-q002",
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
            "href": "#/t/math/math-prep-alg1/P1.2",
            "label": "P1.2 线性方程",
            "topicId": "math-prep-alg1:P1.2"
          }
        ]
      },
      {
        "id": "math-prep-alg1-q003",
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
            "href": "#/t/math/math-prep-alg1/P1.3",
            "label": "P1.3 线性不等式",
            "topicId": "math-prep-alg1:P1.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "math-prep-alg1-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg1-2",
    "stimulus": {
      "title": "线性方程 · 多表征",
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
        "id": "math-prep-alg1-q004",
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
            "href": "#/t/math/math-prep-alg1/P1.4",
            "label": "P1.4 函数与图像入门",
            "topicId": "math-prep-alg1:P1.4"
          }
        ]
      },
      {
        "id": "math-prep-alg1-q005",
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
            "href": "#/t/math/math-prep-alg1/P1.5",
            "label": "P1.5 斜率与直线方程",
            "topicId": "math-prep-alg1:P1.5"
          }
        ]
      },
      {
        "id": "math-prep-alg1-q006",
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
            "href": "#/t/math/math-prep-alg1/P1.6",
            "label": "P1.6 线性方程组",
            "topicId": "math-prep-alg1:P1.6"
          }
        ]
      },
      {
        "id": "math-prep-alg1-q007",
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
            "href": "#/t/math/math-prep-alg1/P1.7",
            "label": "P1.7 指数运算",
            "topicId": "math-prep-alg1:P1.7"
          }
        ]
      }
    ]
  },
  {
    "id": "math-prep-alg1-q008",
    "title": "P1.1 表达式与实数性质 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.8",
        "label": "P1.8 多项式运算",
        "topicId": "math-prep-alg1:P1.8"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q009",
    "title": "P1.2 线性方程 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.9",
        "label": "P1.9 因式分解",
        "topicId": "math-prep-alg1:P1.9"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q010",
    "title": "P1.3 线性不等式 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.10",
        "label": "P1.10 二次方程入门",
        "topicId": "math-prep-alg1:P1.10"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q011",
    "title": "P1.4 函数与图像入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.11",
        "label": "P1.11 指数增长入门",
        "topicId": "math-prep-alg1:P1.11"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q012",
    "title": "P1.5 斜率与直线方程 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.12",
        "label": "P1.12 数据与线性模型",
        "topicId": "math-prep-alg1:P1.12"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q013",
    "title": "P1.6 符号等价",
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
        "href": "#/t/math/math-prep-alg1/P1.1",
        "label": "P1.1 表达式与实数性质",
        "topicId": "math-prep-alg1:P1.1"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q014",
    "title": "P1.7 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「指数运算」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg1/P1.2",
        "label": "P1.2 线性方程",
        "topicId": "math-prep-alg1:P1.2"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q015",
    "title": "P1.8 多项式运算 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.3",
        "label": "P1.3 线性不等式",
        "topicId": "math-prep-alg1:P1.3"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q016",
    "title": "P1.9 因式分解 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.4",
        "label": "P1.4 函数与图像入门",
        "topicId": "math-prep-alg1:P1.4"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q017",
    "title": "P1.10 二次方程入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.5",
        "label": "P1.5 斜率与直线方程",
        "topicId": "math-prep-alg1:P1.5"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q018",
    "title": "P1.11 指数增长入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.6",
        "label": "P1.6 线性方程组",
        "topicId": "math-prep-alg1:P1.6"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q019",
    "title": "P1.12 数据与线性模型 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.7",
        "label": "P1.7 指数运算",
        "topicId": "math-prep-alg1:P1.7"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q020",
    "title": "P1.1 符号等价",
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
        "href": "#/t/math/math-prep-alg1/P1.8",
        "label": "P1.8 多项式运算",
        "topicId": "math-prep-alg1:P1.8"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q021",
    "title": "P1.2 多表征 FRQ",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "stem": "关于「线性方程」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg1/P1.9",
        "label": "P1.9 因式分解",
        "topicId": "math-prep-alg1:P1.9"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q022",
    "title": "P1.3 线性不等式 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.10",
        "label": "P1.10 二次方程入门",
        "topicId": "math-prep-alg1:P1.10"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q023",
    "title": "P1.4 函数与图像入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.11",
        "label": "P1.11 指数增长入门",
        "topicId": "math-prep-alg1:P1.11"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q024",
    "title": "P1.5 斜率与直线方程 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.12",
        "label": "P1.12 数据与线性模型",
        "topicId": "math-prep-alg1:P1.12"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q025",
    "title": "P1.6 线性方程组 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.1",
        "label": "P1.1 表达式与实数性质",
        "topicId": "math-prep-alg1:P1.1"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q026",
    "title": "P1.7 指数运算 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.2",
        "label": "P1.2 线性方程",
        "topicId": "math-prep-alg1:P1.2"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q027",
    "title": "P1.8 符号等价",
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
        "href": "#/t/math/math-prep-alg1/P1.3",
        "label": "P1.3 线性不等式",
        "topicId": "math-prep-alg1:P1.3"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q028",
    "title": "P1.9 多表征 FRQ",
    "type": "frq",
    "difficulty": "难",
    "calculator": true,
    "stem": "关于「因式分解」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg1/P1.4",
        "label": "P1.4 函数与图像入门",
        "topicId": "math-prep-alg1:P1.4"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q029",
    "title": "P1.10 二次方程入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.5",
        "label": "P1.5 斜率与直线方程",
        "topicId": "math-prep-alg1:P1.5"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q030",
    "title": "P1.11 指数增长入门 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.6",
        "label": "P1.6 线性方程组",
        "topicId": "math-prep-alg1:P1.6"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q031",
    "title": "P1.12 数据与线性模型 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.7",
        "label": "P1.7 指数运算",
        "topicId": "math-prep-alg1:P1.7"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q032",
    "title": "P1.1 表达式与实数性质 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.8",
        "label": "P1.8 多项式运算",
        "topicId": "math-prep-alg1:P1.8"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q033",
    "title": "P1.2 线性方程 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.9",
        "label": "P1.9 因式分解",
        "topicId": "math-prep-alg1:P1.9"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q034",
    "title": "P1.3 符号等价",
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
        "href": "#/t/math/math-prep-alg1/P1.10",
        "label": "P1.10 二次方程入门",
        "topicId": "math-prep-alg1:P1.10"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q035",
    "title": "P1.4 多表征 FRQ",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "stem": "关于「函数与图像入门」：用图像、数值表与符号表达式各给一种合理表示，并说明瞬时与平均变化率的区别。",
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
        "href": "#/t/math/math-prep-alg1/P1.11",
        "label": "P1.11 指数增长入门",
        "topicId": "math-prep-alg1:P1.11"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q036",
    "title": "P1.5 斜率与直线方程 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.12",
        "label": "P1.12 数据与线性模型",
        "topicId": "math-prep-alg1:P1.12"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q037",
    "title": "P1.6 线性方程组 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.1",
        "label": "P1.1 表达式与实数性质",
        "topicId": "math-prep-alg1:P1.1"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q038",
    "title": "P1.7 指数运算 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.2",
        "label": "P1.2 线性方程",
        "topicId": "math-prep-alg1:P1.2"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q039",
    "title": "P1.8 多项式运算 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.3",
        "label": "P1.3 线性不等式",
        "topicId": "math-prep-alg1:P1.3"
      }
    ]
  },
  {
    "id": "math-prep-alg1-q040",
    "title": "P1.9 因式分解 · 参数化",
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
        "href": "#/t/math/math-prep-alg1/P1.4",
        "label": "P1.4 函数与图像入门",
        "topicId": "math-prep-alg1:P1.4"
      }
    ]
  }
];
