/** Practice bank for calc-u6 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u6",
  "code": "6",
  "titleZh": "积分与累积变化",
  "titleEn": "Integration and Accumulation of Change",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u6-1": {
    "title": "累积变化探查 · 速率表与黎曼和",
    "text": "下表给出速率 v(t)（m/s）。用左/右端点或梯形估计位移。",
    "table": {
      "headers": [
        "t",
        "v(t)"
      ],
      "rows": [
        [
          "0",
          "2"
        ],
        [
          "1",
          "3"
        ],
        [
          "2",
          "5"
        ],
        [
          "3",
          "4"
        ],
        [
          "4",
          "6"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          0,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          6
        ]
      ],
      "xLabel": "t",
      "yLabel": "v"
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  },
  "stim-calc-u6-2": {
    "title": "黎曼和近似 · 速率表与黎曼和",
    "text": "下表给出速率 v(t)（m/s）。用左/右端点或梯形估计位移。",
    "table": {
      "headers": [
        "t",
        "v(t)"
      ],
      "rows": [
        [
          "0",
          "2"
        ],
        [
          "1",
          "3"
        ],
        [
          "2",
          "5"
        ],
        [
          "3",
          "4"
        ],
        [
          "4",
          "6"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          0,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          5
        ],
        [
          3,
          4
        ],
        [
          4,
          6
        ]
      ],
      "xLabel": "t",
      "yLabel": "v"
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
    "id": "calc-u6-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u6-1",
    "stimulus": {
      "title": "累积变化探查 · 速率表与黎曼和",
      "text": "下表给出速率 v(t)（m/s）。用左/右端点或梯形估计位移。",
      "table": {
        "headers": [
          "t",
          "v(t)"
        ],
        "rows": [
          [
            "0",
            "2"
          ],
          [
            "1",
            "3"
          ],
          [
            "2",
            "5"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "6"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            2
          ],
          [
            1,
            3
          ],
          [
            2,
            5
          ],
          [
            3,
            4
          ],
          [
            4,
            6
          ]
        ],
        "xLabel": "t",
        "yLabel": "v"
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "calc-u6-q001",
        "difficulty": "易",
        "calculator": true,
        "title": "左黎曼和",
        "type": "frq",
        "check": "numeric",
        "stem": "用左端点、Δt=1，估计 ∫₀⁴ v(t) dt。",
        "expected": 14,
        "tol": 0.05,
        "answerLatex": "14",
        "solution": "v(0)+v(1)+v(2)+v(3)=2+3+5+4=14。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u6-q002",
        "difficulty": "中",
        "calculator": true,
        "title": "平均速率",
        "type": "frq",
        "check": "numeric",
        "stem": "若位移近似 14，求 [0,4] 上平均速率。",
        "expected": 3.5,
        "tol": 0.05,
        "answerLatex": "\\dfrac{14}{4}=3.5",
        "solution": "位移/时间。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u6-q003",
        "difficulty": "难",
        "calculator": false,
        "title": "定积分符号",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{写出 }\\int_0^4 v(t)\\,\\mathrm{d}t\\text{ 的黎曼和极限定义（符号）}",
        "expected": "lim n->inf sum v(t_i*) Delta t",
        "answerLatex": "\\lim_{n\\to\\infty}\\sum_{i=1}^{n}v(t_i^{*})\\Delta t",
        "solution": "定积分定义。",
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
    "id": "calc-u6-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u6-2",
    "stimulus": {
      "title": "黎曼和近似 · 速率表与黎曼和",
      "text": "下表给出速率 v(t)（m/s）。用左/右端点或梯形估计位移。",
      "table": {
        "headers": [
          "t",
          "v(t)"
        ],
        "rows": [
          [
            "0",
            "2"
          ],
          [
            "1",
            "3"
          ],
          [
            "2",
            "5"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "6"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            2
          ],
          [
            1,
            3
          ],
          [
            2,
            5
          ],
          [
            3,
            4
          ],
          [
            4,
            6
          ]
        ],
        "xLabel": "t",
        "yLabel": "v"
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "calc-u6-q004",
        "difficulty": "易",
        "calculator": true,
        "title": "左黎曼和",
        "type": "frq",
        "check": "numeric",
        "stem": "用左端点、Δt=1，估计 ∫₀⁴ v(t) dt。",
        "expected": 14,
        "tol": 0.05,
        "answerLatex": "14",
        "solution": "v(0)+v(1)+v(2)+v(3)=2+3+5+4=14。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u6-q005",
        "difficulty": "中",
        "calculator": true,
        "title": "平均速率",
        "type": "frq",
        "check": "numeric",
        "stem": "若位移近似 14，求 [0,4] 上平均速率。",
        "expected": 3.5,
        "tol": 0.05,
        "answerLatex": "\\dfrac{14}{4}=3.5",
        "solution": "位移/时间。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u6-q006",
        "difficulty": "难",
        "calculator": false,
        "title": "定积分符号",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{写出 }\\int_0^4 v(t)\\,\\mathrm{d}t\\text{ 的黎曼和极限定义（符号）}",
        "expected": "lim n->inf sum v(t_i*) Delta t",
        "answerLatex": "\\lim_{n\\to\\infty}\\sum_{i=1}^{n}v(t_i^{*})\\Delta t",
        "solution": "定积分定义。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u6-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "累积解释",
        "type": "frq",
        "stem": "结合「微积分基本定理」，说明定积分在本题中的单位与意义。",
        "answer": "∫v dt 的单位是米，表示净位移（有向）。",
        "solution": "单位分析。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u6-q008",
    "title": "6.1 论述 · 累积变化探查",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「累积变化探查」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q009",
    "title": "6.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q010",
    "title": "6.3 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q011",
    "title": "6.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「微积分基本定理」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q012",
    "title": "6.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q013",
    "title": "6.6 论述 · 微积分基本定理应用",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「微积分基本定理应用」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q014",
    "title": "6.7 论述 · 定积分求值",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「定积分求值」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q015",
    "title": "6.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q016",
    "title": "6.9 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q017",
    "title": "6.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「分部积分」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q018",
    "title": "6.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q019",
    "title": "6.12 论述 · 反常积分",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「反常积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q020",
    "title": "6.13 论述 · 积分技巧选择",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分技巧选择」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q021",
    "title": "6.14 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q022",
    "title": "6.1 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q023",
    "title": "6.2 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「黎曼和近似」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q024",
    "title": "6.3 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q025",
    "title": "6.4 论述 · 微积分基本定理",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「微积分基本定理」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q026",
    "title": "6.5 论述 · 定积分解释",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「定积分解释」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q027",
    "title": "6.6 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q028",
    "title": "6.7 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q029",
    "title": "6.8 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「求原函数」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q030",
    "title": "6.9 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q031",
    "title": "6.10 论述 · 分部积分",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「分部积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q032",
    "title": "6.11 论述 · 部分分式",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「部分分式」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q033",
    "title": "6.12 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q034",
    "title": "6.13 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q035",
    "title": "6.14 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「积分技巧综合」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q036",
    "title": "6.1 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q037",
    "title": "6.2 论述 · 黎曼和近似",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「黎曼和近似」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q038",
    "title": "6.3 论述 · 黎曼和、求和记号与定积分",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「黎曼和、求和记号与定积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q039",
    "title": "6.4 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q040",
    "title": "6.5 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q041",
    "title": "6.6 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「微积分基本定理应用」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q042",
    "title": "6.7 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q043",
    "title": "6.8 论述 · 求原函数",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「求原函数」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q044",
    "title": "6.9 论述 · 换元积分法",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「换元积分法」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q045",
    "title": "6.10 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q046",
    "title": "6.11 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q047",
    "title": "6.12 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「反常积分」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q048",
    "title": "6.13 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q049",
    "title": "6.14 论述 · 积分技巧综合",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「积分技巧综合」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q050",
    "title": "6.1 论述 · 累积变化探查",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「累积变化探查」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q051",
    "title": "6.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q052",
    "title": "6.3 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q053",
    "title": "6.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「微积分基本定理」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q054",
    "title": "6.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q055",
    "title": "6.6 论述 · 微积分基本定理应用",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「微积分基本定理应用」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q056",
    "title": "6.7 论述 · 定积分求值",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「定积分求值」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q057",
    "title": "6.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q058",
    "title": "6.9 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q059",
    "title": "6.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「分部积分」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q060",
    "title": "6.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q061",
    "title": "6.12 论述 · 反常积分",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「反常积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q062",
    "title": "6.13 论述 · 积分技巧选择",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分技巧选择」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q063",
    "title": "6.14 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q064",
    "title": "6.1 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q065",
    "title": "6.2 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「黎曼和近似」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q066",
    "title": "6.3 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q067",
    "title": "6.4 论述 · 微积分基本定理",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「微积分基本定理」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q068",
    "title": "6.5 论述 · 定积分解释",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「定积分解释」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q069",
    "title": "6.6 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q070",
    "title": "6.7 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q071",
    "title": "6.8 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「求原函数」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q072",
    "title": "6.9 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q073",
    "title": "6.10 论述 · 分部积分",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「分部积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q074",
    "title": "6.11 论述 · 部分分式",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「部分分式」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q075",
    "title": "6.12 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\int 3x^{2}\\,\\mathrm{d}x",
    "expected": "x^3+C",
    "answerLatex": "x^{3}+C",
    "solution": "幂法则逆运算。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q076",
    "title": "6.13 因式化简",
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q077",
    "title": "6.14 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「积分技巧综合」，下列正确的是？",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量",
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
    "id": "calc-u6-q078",
    "title": "6.1 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^{2} 3x^{2}\\,\\mathrm{d}x",
    "expected": 8,
    "tol": 0.02,
    "answerLatex": "8",
    "solution": "[x³]_0^2=8。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q079",
    "title": "6.2 论述 · 黎曼和近似",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「黎曼和近似」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q080",
    "title": "6.3 论述 · 黎曼和、求和记号与定积分",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「黎曼和、求和记号与定积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
