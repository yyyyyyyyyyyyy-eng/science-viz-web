/** Practice bank for calc-u2 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u2",
  "code": "2",
  "titleZh": "导数：定义与基本性质",
  "titleEn": "Differentiation: Definition and Fundamental Properties",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u2-1": {
    "title": "瞬时变化率 · 数值—图像—符号",
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
  "stim-calc-u2-2": {
    "title": "导数定义 · 数值—图像—符号",
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
    "id": "calc-u2-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u2-1",
    "stimulus": {
      "title": "瞬时变化率 · 数值—图像—符号",
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
        "id": "calc-u2-q001",
        "difficulty": "易",
        "calculator": false,
        "title": "幂法则",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}x^{4}=",
        "expected": "4x^3",
        "answerLatex": "4x^{3}",
        "solution": "幂法则。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u2-q002",
        "difficulty": "中",
        "calculator": false,
        "title": "差分商",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "f(x)=x^{2}+1:\\ \\dfrac{f(x)-f(1)}{x-1}\\ (x\\neq 1)",
        "expected": "x+1",
        "answerLatex": "x+1",
        "solution": "因式分解。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u2-q003",
        "difficulty": "难",
        "calculator": false,
        "title": "链式",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin(3x)=",
        "expected": "3cos(3x)",
        "answerLatex": "3\\cos(3x)",
        "solution": "链式法则。",
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
    "id": "calc-u2-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u2-2",
    "stimulus": {
      "title": "导数定义 · 数值—图像—符号",
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
        "id": "calc-u2-q004",
        "difficulty": "易",
        "calculator": false,
        "title": "幂法则",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}x^{4}=",
        "expected": "4x^3",
        "answerLatex": "4x^{3}",
        "solution": "幂法则。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u2-q005",
        "difficulty": "中",
        "calculator": false,
        "title": "差分商",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "f(x)=x^{2}+1:\\ \\dfrac{f(x)-f(1)}{x-1}\\ (x\\neq 1)",
        "expected": "x+1",
        "answerLatex": "x+1",
        "solution": "因式分解。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u2-q006",
        "difficulty": "难",
        "calculator": false,
        "title": "链式",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin(3x)=",
        "expected": "3cos(3x)",
        "answerLatex": "3\\cos(3x)",
        "solution": "链式法则。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u2-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "可微性",
        "type": "frq",
        "stem": "结合「导数与连续」，说明尖点处为何不可导。",
        "answer": "左右导数不相等（或差分商极限不存在）。",
        "solution": "定义。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u2-q008",
    "title": "2.1 瞬时变化率 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q009",
    "title": "2.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q010",
    "title": "2.3 因式化简",
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
    "id": "calc-u2-q011",
    "title": "2.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「导数与连续」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q012",
    "title": "2.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q013",
    "title": "2.6 论述 · 常数倍与和差",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「常数倍与和差」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q014",
    "title": "2.7 eˣ 与 aˣ 导数 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q015",
    "title": "2.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q016",
    "title": "2.9 因式化简",
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
    "id": "calc-u2-q017",
    "title": "2.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「三角函数导数」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q018",
    "title": "2.1 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q019",
    "title": "2.2 论述 · 导数定义",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「导数定义」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q020",
    "title": "2.3 可微性估计 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q021",
    "title": "2.4 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q022",
    "title": "2.5 因式化简",
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
    "id": "calc-u2-q023",
    "title": "2.6 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「常数倍与和差」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q024",
    "title": "2.7 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q025",
    "title": "2.8 论述 · 积商法则",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「积商法则」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q026",
    "title": "2.9 积商法则续 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q027",
    "title": "2.10 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q028",
    "title": "2.1 因式化简",
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
    "id": "calc-u2-q029",
    "title": "2.2 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「导数定义」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q030",
    "title": "2.3 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q031",
    "title": "2.4 论述 · 导数与连续",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「导数与连续」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q032",
    "title": "2.5 幂函数导数 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q033",
    "title": "2.6 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q034",
    "title": "2.7 因式化简",
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
    "id": "calc-u2-q035",
    "title": "2.8 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「积商法则」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q036",
    "title": "2.9 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q037",
    "title": "2.10 论述 · 三角函数导数",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q038",
    "title": "2.1 瞬时变化率 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q039",
    "title": "2.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q040",
    "title": "2.3 因式化简",
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
    "id": "calc-u2-q041",
    "title": "2.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「导数与连续」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q042",
    "title": "2.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q043",
    "title": "2.6 论述 · 常数倍与和差",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「常数倍与和差」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q044",
    "title": "2.7 eˣ 与 aˣ 导数 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q045",
    "title": "2.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q046",
    "title": "2.9 因式化简",
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
    "id": "calc-u2-q047",
    "title": "2.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「三角函数导数」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q048",
    "title": "2.1 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q049",
    "title": "2.2 论述 · 导数定义",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「导数定义」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q050",
    "title": "2.3 可微性估计 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q051",
    "title": "2.4 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q052",
    "title": "2.5 因式化简",
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
    "id": "calc-u2-q053",
    "title": "2.6 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「常数倍与和差」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q054",
    "title": "2.7 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q055",
    "title": "2.8 论述 · 积商法则",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「积商法则」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q056",
    "title": "2.9 积商法则续 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q057",
    "title": "2.10 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q058",
    "title": "2.1 因式化简",
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
    "id": "calc-u2-q059",
    "title": "2.2 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「导数定义」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q060",
    "title": "2.3 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q061",
    "title": "2.4 论述 · 导数与连续",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「导数与连续」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q062",
    "title": "2.5 幂函数导数 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q063",
    "title": "2.6 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(x^{3}e^{x}\\right)",
    "expected": "e^x(3x^2+x^3)",
    "answerLatex": "e^{x}(3x^{2}+x^{3})",
    "solution": "乘积法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q064",
    "title": "2.7 因式化简",
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
    "id": "calc-u2-q065",
    "title": "2.8 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「积商法则」，下列正确的是？",
    "choices": [
      {
        "text": "可导 ⇒ 连续；连续 ⇏ 可导",
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
    "id": "calc-u2-q066",
    "title": "2.9 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3},\\;f'(2)=",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3x² ⇒ 12。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q067",
    "title": "2.10 论述 · 三角函数导数",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「三角函数导数」：解释差分商极限如何从平均变化率过渡到瞬时变化率。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u2-q068",
    "title": "2.1 瞬时变化率 · 参数化",
    "difficulty": "易",
    "generator": "power",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
