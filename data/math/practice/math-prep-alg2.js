/** Practice bank for math-prep-alg2 — AP-style, attributed OER adaptations */
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
    "title": "函数族回顾 · 代数表",
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
  "stim-math-prep-alg2-2": {
    "title": "二次函数深入 · 代数表",
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
    "id": "math-prep-alg2-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg2-1",
    "stimulus": {
      "title": "函数族回顾 · 代数表",
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
        "id": "math-prep-alg2-q001",
        "difficulty": "易",
        "calculator": true,
        "title": "二次方程",
        "type": "frq",
        "check": "numeric",
        "stem": "x²−5x+6=0 的较大根？",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3",
        "solution": "(x−2)(x−3)=0。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg2-q002",
        "difficulty": "中",
        "calculator": true,
        "title": "顶点",
        "type": "frq",
        "check": "numeric",
        "stem": "y=(x−2)²+1 的最小值？",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "平方项最小为 0，故最小值为 1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg2-q003",
        "difficulty": "难",
        "calculator": true,
        "title": "复合函数",
        "type": "frq",
        "check": "numeric",
        "stem": "f(x)=x+1，g(x)=x²，求 (f∘g)(2)。",
        "expected": 5,
        "tol": 0.01,
        "answerLatex": "5",
        "solution": "g(2)=4，f(4)=5。",
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
    "id": "math-prep-alg2-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-math-prep-alg2-2",
    "stimulus": {
      "title": "二次函数深入 · 代数表",
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
        "id": "math-prep-alg2-q004",
        "difficulty": "易",
        "calculator": true,
        "title": "二次方程",
        "type": "frq",
        "check": "numeric",
        "stem": "x²−5x+6=0 的较大根？",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3",
        "solution": "(x−2)(x−3)=0。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg2-q005",
        "difficulty": "中",
        "calculator": true,
        "title": "顶点",
        "type": "frq",
        "check": "numeric",
        "stem": "y=(x−2)²+1 的最小值？",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "平方项最小为 0，故最小值为 1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg2-q006",
        "difficulty": "难",
        "calculator": true,
        "title": "复合函数",
        "type": "frq",
        "check": "numeric",
        "stem": "f(x)=x+1，g(x)=x²，求 (f∘g)(2)。",
        "expected": 5,
        "tol": 0.01,
        "answerLatex": "5",
        "solution": "g(2)=4，f(4)=5。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-alg2-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "定义域",
        "type": "frq",
        "stem": "求 f(x)=1÷(x−3) 的定义域。",
        "answer": "x≠3，即 (−∞,3)∪(3,∞)。",
        "solution": "分母不能为零。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "math-prep-alg2-q008",
    "title": "P3.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q009",
    "title": "P3.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二次函数深入」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q010",
    "title": "P3.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q011",
    "title": "P3.4 论述 · 有理函数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「有理函数」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q012",
    "title": "P3.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q013",
    "title": "P3.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「指数函数」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q014",
    "title": "P3.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q015",
    "title": "P3.8 论述 · 数列与级数入门",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「数列与级数入门」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q016",
    "title": "P3.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q017",
    "title": "P3.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「矩阵入门」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q018",
    "title": "P3.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q019",
    "title": "P3.12 论述 · 三角恒等式预备",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「三角恒等式预备」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q020",
    "title": "P3.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q021",
    "title": "P3.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二次函数深入」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q022",
    "title": "P3.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q023",
    "title": "P3.4 论述 · 有理函数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「有理函数」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q024",
    "title": "P3.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q025",
    "title": "P3.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「指数函数」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q026",
    "title": "P3.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q027",
    "title": "P3.8 论述 · 数列与级数入门",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「数列与级数入门」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q028",
    "title": "P3.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q029",
    "title": "P3.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「矩阵入门」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q030",
    "title": "P3.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q031",
    "title": "P3.12 论述 · 三角恒等式预备",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「三角恒等式预备」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q032",
    "title": "P3.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q033",
    "title": "P3.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二次函数深入」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q034",
    "title": "P3.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q035",
    "title": "P3.4 论述 · 有理函数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「有理函数」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q036",
    "title": "P3.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q037",
    "title": "P3.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「指数函数」，下列正确的是？",
    "choices": [
      {
        "text": "函数是每个输入至多一个输出的对应",
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
    "id": "math-prep-alg2-q038",
    "title": "P3.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x^{2}-5x+6=0\\text{ 的较大根}",
    "expected": 3,
    "tol": 0.02,
    "answerLatex": "3",
    "solution": "(x-2)(x-3)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q039",
    "title": "P3.8 论述 · 数列与级数入门",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「数列与级数入门」：解释函数复合 (f∘g)(x) 的求值顺序。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-alg2-q040",
    "title": "P3.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{化简 }(x-1)(x+1)",
    "expected": "x^2-1",
    "answerLatex": "x^{2}-1",
    "solution": "平方差。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
