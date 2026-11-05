/** Practice bank for calc-u8 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u8",
  "code": "8",
  "titleZh": "积分的应用",
  "titleEn": "Applications of Integration",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u8-1": {
    "title": "积分求平均 · 速率表与黎曼和",
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
  "stim-calc-u8-2": {
    "title": "位置速度加速度 · 速率表与黎曼和",
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
    "id": "calc-u8-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u8-1",
    "stimulus": {
      "title": "积分求平均 · 速率表与黎曼和",
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
        "id": "calc-u8-q001",
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
        "id": "calc-u8-q002",
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
        "id": "calc-u8-q003",
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
    "id": "calc-u8-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u8-2",
    "stimulus": {
      "title": "位置速度加速度 · 速率表与黎曼和",
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
        "id": "calc-u8-q004",
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
        "id": "calc-u8-q005",
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
        "id": "calc-u8-q006",
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
        "id": "calc-u8-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "累积解释",
        "type": "frq",
        "stem": "结合「曲线间面积」，说明定积分在本题中的单位与意义。",
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
    "id": "calc-u8-q008",
    "title": "8.1 论述 · 积分求平均",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分求平均」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q009",
    "title": "8.2 符号",
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
    "id": "calc-u8-q010",
    "title": "8.3 因式化简",
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
    "id": "calc-u8-q011",
    "title": "8.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「曲线间面积」，下列正确的是？",
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
    "id": "calc-u8-q012",
    "title": "8.5 计算",
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
    "id": "calc-u8-q013",
    "title": "8.6 论述 · 曲线间面积其他",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「曲线间面积其他」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q014",
    "title": "8.7 论述 · 旋转体体积盘法",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「旋转体体积盘法」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q015",
    "title": "8.8 符号",
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
    "id": "calc-u8-q016",
    "title": "8.9 因式化简",
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
    "id": "calc-u8-q017",
    "title": "8.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「圆盘法其他轴」，下列正确的是？",
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
    "id": "calc-u8-q018",
    "title": "8.11 计算",
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
    "id": "calc-u8-q019",
    "title": "8.12 论述 · 垫圈法其他轴",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「垫圈法其他轴」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q020",
    "title": "8.13 论述 · 弧长",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「弧长」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q021",
    "title": "8.1 符号",
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
    "id": "calc-u8-q022",
    "title": "8.2 因式化简",
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
    "id": "calc-u8-q023",
    "title": "8.3 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「累积变化率」，下列正确的是？",
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
    "id": "calc-u8-q024",
    "title": "8.4 计算",
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
    "id": "calc-u8-q025",
    "title": "8.5 论述 · 曲线间面积 y",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「曲线间面积 y」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q026",
    "title": "8.6 论述 · 曲线间面积其他",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「曲线间面积其他」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q027",
    "title": "8.7 符号",
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
    "id": "calc-u8-q028",
    "title": "8.8 因式化简",
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
    "id": "calc-u8-q029",
    "title": "8.9 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「圆盘法」，下列正确的是？",
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
    "id": "calc-u8-q030",
    "title": "8.10 计算",
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
    "id": "calc-u8-q031",
    "title": "8.11 论述 · 垫圈法",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「垫圈法」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q032",
    "title": "8.12 论述 · 垫圈法其他轴",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「垫圈法其他轴」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q033",
    "title": "8.13 符号",
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
    "id": "calc-u8-q034",
    "title": "8.1 因式化简",
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
    "id": "calc-u8-q035",
    "title": "8.2 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「位置速度加速度」，下列正确的是？",
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
    "id": "calc-u8-q036",
    "title": "8.3 计算",
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
    "id": "calc-u8-q037",
    "title": "8.4 论述 · 曲线间面积",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「曲线间面积」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q038",
    "title": "8.5 论述 · 曲线间面积 y",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「曲线间面积 y」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q039",
    "title": "8.6 符号",
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
    "id": "calc-u8-q040",
    "title": "8.7 因式化简",
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
    "id": "calc-u8-q041",
    "title": "8.8 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「已知截面体积」，下列正确的是？",
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
    "id": "calc-u8-q042",
    "title": "8.9 计算",
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
    "id": "calc-u8-q043",
    "title": "8.10 论述 · 圆盘法其他轴",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「圆盘法其他轴」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q044",
    "title": "8.11 论述 · 垫圈法",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「垫圈法」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q045",
    "title": "8.12 符号",
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
    "id": "calc-u8-q046",
    "title": "8.13 因式化简",
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
    "id": "calc-u8-q047",
    "title": "8.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「积分求平均」，下列正确的是？",
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
    "id": "calc-u8-q048",
    "title": "8.2 计算",
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
    "id": "calc-u8-q049",
    "title": "8.3 论述 · 累积变化率",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「累积变化率」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q050",
    "title": "8.4 论述 · 曲线间面积",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「曲线间面积」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q051",
    "title": "8.5 符号",
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
    "id": "calc-u8-q052",
    "title": "8.6 因式化简",
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
    "id": "calc-u8-q053",
    "title": "8.7 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「旋转体体积盘法」，下列正确的是？",
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
    "id": "calc-u8-q054",
    "title": "8.8 计算",
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
    "id": "calc-u8-q055",
    "title": "8.9 论述 · 圆盘法",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「圆盘法」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q056",
    "title": "8.10 论述 · 圆盘法其他轴",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「圆盘法其他轴」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q057",
    "title": "8.11 符号",
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
    "id": "calc-u8-q058",
    "title": "8.12 因式化简",
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
    "id": "calc-u8-q059",
    "title": "8.13 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「弧长」，下列正确的是？",
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
    "id": "calc-u8-q060",
    "title": "8.1 计算",
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
    "id": "calc-u8-q061",
    "title": "8.2 论述 · 位置速度加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「位置速度加速度」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q062",
    "title": "8.3 论述 · 累积变化率",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「累积变化率」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q063",
    "title": "8.4 符号",
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
    "id": "calc-u8-q064",
    "title": "8.5 因式化简",
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
    "id": "calc-u8-q065",
    "title": "8.6 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「曲线间面积其他」，下列正确的是？",
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
    "id": "calc-u8-q066",
    "title": "8.7 计算",
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
    "id": "calc-u8-q067",
    "title": "8.8 论述 · 已知截面体积",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「已知截面体积」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q068",
    "title": "8.9 论述 · 圆盘法",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「圆盘法」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q069",
    "title": "8.10 符号",
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
    "id": "calc-u8-q070",
    "title": "8.11 因式化简",
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
    "id": "calc-u8-q071",
    "title": "8.12 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「垫圈法其他轴」，下列正确的是？",
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
    "id": "calc-u8-q072",
    "title": "8.13 计算",
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
    "id": "calc-u8-q073",
    "title": "8.1 论述 · 积分求平均",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「积分求平均」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q074",
    "title": "8.2 论述 · 位置速度加速度",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「位置速度加速度」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q075",
    "title": "8.3 符号",
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
    "id": "calc-u8-q076",
    "title": "8.4 因式化简",
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
    "id": "calc-u8-q077",
    "title": "8.5 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「曲线间面积 y」，下列正确的是？",
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
    "id": "calc-u8-q078",
    "title": "8.6 计算",
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
    "id": "calc-u8-q079",
    "title": "8.7 论述 · 旋转体体积盘法",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「旋转体体积盘法」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q080",
    "title": "8.8 论述 · 已知截面体积",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「已知截面体积」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
