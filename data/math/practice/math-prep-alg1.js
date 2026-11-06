/** Practice bank for math-prep-alg1 — AP-style, attributed OER adaptations */
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
    "title": "表达式与实数性质 · 代数表",
    "text": "根据表中输入—输出关系，建立并检验代数模型。",
    "table": {
      "headers": [
        "x",
        "y"
      ],
      "rows": [
        [
          "−1",
          "1"
        ],
        [
          "0",
          "3"
        ],
        [
          "1",
          "5"
        ],
        [
          "2",
          "7"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          -1,
          1
        ],
        [
          0,
          3
        ],
        [
          1,
          5
        ],
        [
          2,
          7
        ]
      ],
      "xLabel": "x",
      "yLabel": "y"
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  },
  "stim-math-prep-alg1-2": {
    "title": "线性方程 · 代数表",
    "text": "根据表中输入—输出关系，建立并检验代数模型。",
    "table": {
      "headers": [
        "x",
        "y"
      ],
      "rows": [
        [
          "−1",
          "1"
        ],
        [
          "0",
          "3"
        ],
        [
          "1",
          "5"
        ],
        [
          "2",
          "7"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          -1,
          1
        ],
        [
          0,
          3
        ],
        [
          1,
          5
        ],
        [
          2,
          7
        ]
      ],
      "xLabel": "x",
      "yLabel": "y"
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
    "id": "math-prep-alg1-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg1-1",
    "stimulus": {
      "title": "表达式与实数性质 · 代数表",
      "text": "根据表中输入—输出关系，建立并检验代数模型。",
      "table": {
        "headers": [
          "x",
          "y"
        ],
        "rows": [
          [
            "−1",
            "1"
          ],
          [
            "0",
            "3"
          ],
          [
            "1",
            "5"
          ],
          [
            "2",
            "7"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            -1,
            1
          ],
          [
            0,
            3
          ],
          [
            1,
            5
          ],
          [
            2,
            7
          ]
        ],
        "xLabel": "x",
        "yLabel": "y"
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "math-prep-alg1-q001",
        "difficulty": "易",
        "calculator": true,
        "title": "斜率",
        "type": "frq",
        "check": "numeric",
        "stem": "过 (0,3)、(2,7) 的直线斜率？",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "纵向差与横向差之比为 2。",
        "solutionLatex": "\\dfrac{7-3}{2-0}=2",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg1-q002",
        "difficulty": "中",
        "calculator": false,
        "title": "线性模型",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{斜率 }2\\text{、过 }(0,3)\\text{：}y=",
        "expected": "2x+3",
        "answerLatex": "2x+3",
        "solution": "斜截式。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg1-q003",
        "difficulty": "难",
        "calculator": true,
        "title": "求根",
        "type": "frq",
        "check": "numeric",
        "stem": "2x+3=0 的根？",
        "expected": -1.5,
        "tol": 0.01,
        "answerLatex": "-\\dfrac{3}{2}",
        "solution": "x=−1.5。",
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
    "id": "math-prep-alg1-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg1-2",
    "stimulus": {
      "title": "线性方程 · 代数表",
      "text": "根据表中输入—输出关系，建立并检验代数模型。",
      "table": {
        "headers": [
          "x",
          "y"
        ],
        "rows": [
          [
            "−1",
            "1"
          ],
          [
            "0",
            "3"
          ],
          [
            "1",
            "5"
          ],
          [
            "2",
            "7"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            -1,
            1
          ],
          [
            0,
            3
          ],
          [
            1,
            5
          ],
          [
            2,
            7
          ]
        ],
        "xLabel": "x",
        "yLabel": "y"
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "math-prep-alg1-q004",
        "difficulty": "易",
        "calculator": true,
        "title": "斜率",
        "type": "frq",
        "check": "numeric",
        "stem": "过 (0,3)、(2,7) 的直线斜率？",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "纵向差与横向差之比为 2。",
        "solutionLatex": "\\dfrac{7-3}{2-0}=2",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg1-q005",
        "difficulty": "中",
        "calculator": false,
        "title": "线性模型",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{斜率 }2\\text{、过 }(0,3)\\text{：}y=",
        "expected": "2x+3",
        "answerLatex": "2x+3",
        "solution": "斜截式。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg1-q006",
        "difficulty": "难",
        "calculator": true,
        "title": "求根",
        "type": "frq",
        "check": "numeric",
        "stem": "2x+3=0 的根？",
        "expected": -1.5,
        "tol": 0.01,
        "answerLatex": "-\\dfrac{3}{2}",
        "solution": "x=−1.5。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg1-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "表征",
        "type": "frq",
        "stem": "用「函数与图像入门」语言解释表、式、图像三者一致性。",
        "answer": "同一线性关系的三种表示；差分商恒为斜率。",
        "solution": "多表征。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "math-prep-alg1-q008",
    "title": "P1.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{解 }3x-6=0",
    "expected": "2",
    "answerLatex": "2",
    "solution": "x=2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q009",
    "title": "P1.2 因式化简",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{3}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^2+x+1",
    "answerLatex": "x^{2}+x+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q010",
    "title": "P1.3 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「线性不等式」，下列正确的是？",
    "choices": [
      {
        "text": "线性方程的解使左右两边相等",
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
    "id": "math-prep-alg1-q011",
    "title": "P1.4 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }2(x-3)+4",
    "expected": "2x-2",
    "tol": 0.02,
    "answerLatex": "2x-2",
    "solution": "分配。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q012",
    "title": "P1.5 论述 · 斜率与直线方程",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「斜率与直线方程」：说明为何解方程时移项与两边同加是等价变形。",
    "answer": "等式两边同加（或同减）同一个数仍相等；移项本质是两边同加该项的相反数。例如由 x+3=7 两边同加 −3 得 x=4，所以移项与两边同加是同一等价变形，不会改变解集。",
    "solution": "等式性质保证同加同一个数后解集不变；移项只是把这一步写成更快的简写。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q013",
    "title": "P1.6 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{解 }3x-6=0",
    "expected": "2",
    "answerLatex": "2",
    "solution": "x=2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q014",
    "title": "P1.7 因式化简",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{4}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^3+x^2+x+1",
    "answerLatex": "x^{3}+x^{2}+x+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q015",
    "title": "P1.8 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「多项式运算」，下列正确的是？",
    "choices": [
      {
        "text": "线性方程的解使左右两边相等",
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
    "id": "math-prep-alg1-q016",
    "title": "P1.9 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }2(x-3)+4",
    "expected": "2x-2",
    "tol": 0.02,
    "answerLatex": "2x-2",
    "solution": "分配。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q017",
    "title": "P1.10 论述 · 二次方程入门",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「二次方程入门」：说明为何解方程时移项与两边同加是等价变形。",
    "answer": "等式两边同加（或同减）同一个数仍相等；移项本质是两边同加该项的相反数。例如由 x+3=7 两边同加 −3 得 x=4，所以移项与两边同加是同一等价变形，不会改变解集。",
    "solution": "等式性质保证同加同一个数后解集不变；移项只是把这一步写成更快的简写。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q018",
    "title": "P1.11 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{解 }3x-6=0",
    "expected": "2",
    "answerLatex": "2",
    "solution": "x=2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q019",
    "title": "P1.12 因式化简",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{5}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^4+x^3+x^2+x+1",
    "answerLatex": "x^{4}+x^{3}+x^{2}+x+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q020",
    "title": "P1.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「表达式与实数性质」，下列正确的是？",
    "choices": [
      {
        "text": "线性方程的解使左右两边相等",
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
    "id": "math-prep-alg1-q021",
    "title": "P1.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }2(x-3)+4",
    "expected": "2x-2",
    "tol": 0.02,
    "answerLatex": "2x-2",
    "solution": "分配。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q022",
    "title": "P1.3 论述 · 线性不等式",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「线性不等式」：说明为何解方程时移项与两边同加是等价变形。",
    "answer": "等式两边同加（或同减）同一个数仍相等；移项本质是两边同加该项的相反数。例如由 x+3=7 两边同加 −3 得 x=4，所以移项与两边同加是同一等价变形，不会改变解集。",
    "solution": "等式性质保证同加同一个数后解集不变；移项只是把这一步写成更快的简写。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q023",
    "title": "P1.4 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{解 }3x-6=0",
    "expected": "2",
    "answerLatex": "2",
    "solution": "x=2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q024",
    "title": "P1.5 因式化简",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{2}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x+1",
    "answerLatex": "x+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q025",
    "title": "P1.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「线性方程组」，下列正确的是？",
    "choices": [
      {
        "text": "线性方程的解使左右两边相等",
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
    "id": "math-prep-alg1-q026",
    "title": "P1.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }2(x-3)+4",
    "expected": "2x-2",
    "tol": 0.02,
    "answerLatex": "2x-2",
    "solution": "分配。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q027",
    "title": "P1.8 论述 · 多项式运算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「多项式运算」：说明为何解方程时移项与两边同加是等价变形。",
    "answer": "等式两边同加（或同减）同一个数仍相等；移项本质是两边同加该项的相反数。例如由 x+3=7 两边同加 −3 得 x=4，所以移项与两边同加是同一等价变形，不会改变解集。",
    "solution": "等式性质保证同加同一个数后解集不变；移项只是把这一步写成更快的简写。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q028",
    "title": "P1.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{解 }3x-6=0",
    "expected": "2",
    "answerLatex": "2",
    "solution": "x=2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q029",
    "title": "P1.10 因式化简",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{3}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^2+x+1",
    "answerLatex": "x^{2}+x+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q030",
    "title": "P1.11 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「指数增长入门」，下列正确的是？",
    "choices": [
      {
        "text": "线性方程的解使左右两边相等",
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
    "id": "math-prep-alg1-q031",
    "title": "P1.12 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }2(x-3)+4",
    "expected": "2x-2",
    "tol": 0.02,
    "answerLatex": "2x-2",
    "solution": "分配。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q032",
    "title": "P1.1 论述 · 表达式与实数性质",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「表达式与实数性质」：说明为何解方程时移项与两边同加是等价变形。",
    "answer": "等式两边同加（或同减）同一个数仍相等；移项本质是两边同加该项的相反数。例如由 x+3=7 两边同加 −3 得 x=4，所以移项与两边同加是同一等价变形，不会改变解集。",
    "solution": "等式性质保证同加同一个数后解集不变；移项只是把这一步写成更快的简写。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q033",
    "title": "P1.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{解 }3x-6=0",
    "expected": "2",
    "answerLatex": "2",
    "solution": "x=2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q034",
    "title": "P1.3 因式化简",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{4}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^3+x^2+x+1",
    "answerLatex": "x^{3}+x^{2}+x+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q035",
    "title": "P1.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「函数与图像入门」，下列正确的是？",
    "choices": [
      {
        "text": "线性方程的解使左右两边相等",
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
    "id": "math-prep-alg1-q036",
    "title": "P1.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }2(x-3)+4",
    "expected": "2x-2",
    "tol": 0.02,
    "answerLatex": "2x-2",
    "solution": "分配。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q037",
    "title": "P1.6 论述 · 线性方程组",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「线性方程组」：说明为何解方程时移项与两边同加是等价变形。",
    "answer": "等式两边同加（或同减）同一个数仍相等；移项本质是两边同加该项的相反数。例如由 x+3=7 两边同加 −3 得 x=4，所以移项与两边同加是同一等价变形，不会改变解集。",
    "solution": "等式性质保证同加同一个数后解集不变；移项只是把这一步写成更快的简写。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q038",
    "title": "P1.7 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{解 }3x-6=0",
    "expected": "2",
    "answerLatex": "2",
    "solution": "x=2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q039",
    "title": "P1.8 因式化简",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }\\dfrac{x^{5}-1}{x-1}\\ (x\\neq 1)",
    "expected": "x^4+x^3+x^2+x+1",
    "answerLatex": "x^{4}+x^{3}+x^{2}+x+1",
    "solution": "几何级数求和或因式分解。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg1-q040",
    "title": "P1.9 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「因式分解」，下列正确的是？",
    "choices": [
      {
        "text": "线性方程的解使左右两边相等",
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
  }
];
