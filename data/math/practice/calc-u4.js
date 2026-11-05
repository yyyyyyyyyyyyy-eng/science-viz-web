/** Practice bank for calc-u4 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u4",
  "code": "4",
  "titleZh": "导数的情境应用",
  "titleEn": "Contextual Applications of Differentiation",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u4-1": {
    "title": "变化率情境 · 直线运动数据",
    "text": "质点沿直线运动；表给出位置 s(t)（米），t 以秒计。",
    "table": {
      "headers": [
        "t",
        "s(t)"
      ],
      "rows": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "3"
        ],
        [
          "2",
          "8"
        ],
        [
          "3",
          "15"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          0,
          0
        ],
        [
          1,
          3
        ],
        [
          2,
          8
        ],
        [
          3,
          15
        ]
      ],
      "xLabel": "t",
      "yLabel": "s"
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  },
  "stim-calc-u4-2": {
    "title": "直线运动 · 直线运动数据",
    "text": "质点沿直线运动；表给出位置 s(t)（米），t 以秒计。",
    "table": {
      "headers": [
        "t",
        "s(t)"
      ],
      "rows": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "3"
        ],
        [
          "2",
          "8"
        ],
        [
          "3",
          "15"
        ]
      ]
    },
    "graph": {
      "points": [
        [
          0,
          0
        ],
        [
          1,
          3
        ],
        [
          2,
          8
        ],
        [
          3,
          15
        ]
      ],
      "xLabel": "t",
      "yLabel": "s"
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
    "id": "calc-u4-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u4-1",
    "stimulus": {
      "title": "变化率情境 · 直线运动数据",
      "text": "质点沿直线运动；表给出位置 s(t)（米），t 以秒计。",
      "table": {
        "headers": [
          "t",
          "s(t)"
        ],
        "rows": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "3"
          ],
          [
            "2",
            "8"
          ],
          [
            "3",
            "15"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            0
          ],
          [
            1,
            3
          ],
          [
            2,
            8
          ],
          [
            3,
            15
          ]
        ],
        "xLabel": "t",
        "yLabel": "s"
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "calc-u4-q001",
        "difficulty": "易",
        "calculator": true,
        "title": "平均速度",
        "type": "frq",
        "check": "numeric",
        "stem": "用表估计 t∈[1,2] 的平均速度。",
        "expected": 5,
        "tol": 0.05,
        "answerLatex": "5",
        "solution": "(8-3)/(2-1)=5 m/s。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u4-q002",
        "difficulty": "中",
        "calculator": false,
        "title": "瞬时速度符号",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "v(t)=s'(t)=\\lim_{h\\to 0}\\dfrac{s(t+h)-s(t)}{h}",
        "expected": "s'(t)",
        "answerLatex": "s'(t)",
        "solution": "定义。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u4-q003",
        "difficulty": "难",
        "calculator": false,
        "title": "相关变化率",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=",
        "expected": "2*pi*r*dr/dt",
        "answerLatex": "2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
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
    "id": "calc-u4-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u4-2",
    "stimulus": {
      "title": "直线运动 · 直线运动数据",
      "text": "质点沿直线运动；表给出位置 s(t)（米），t 以秒计。",
      "table": {
        "headers": [
          "t",
          "s(t)"
        ],
        "rows": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "3"
          ],
          [
            "2",
            "8"
          ],
          [
            "3",
            "15"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            0
          ],
          [
            1,
            3
          ],
          [
            2,
            8
          ],
          [
            3,
            15
          ]
        ],
        "xLabel": "t",
        "yLabel": "s"
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "calc-u4-q004",
        "difficulty": "易",
        "calculator": true,
        "title": "平均速度",
        "type": "frq",
        "check": "numeric",
        "stem": "用表估计 t∈[1,2] 的平均速度。",
        "expected": 5,
        "tol": 0.05,
        "answerLatex": "5",
        "solution": "(8-3)/(2-1)=5 m/s。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u4-q005",
        "difficulty": "中",
        "calculator": false,
        "title": "瞬时速度符号",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "v(t)=s'(t)=\\lim_{h\\to 0}\\dfrac{s(t+h)-s(t)}{h}",
        "expected": "s'(t)",
        "answerLatex": "s'(t)",
        "solution": "定义。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u4-q006",
        "difficulty": "难",
        "calculator": false,
        "title": "相关变化率",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=",
        "expected": "2*pi*r*dr/dt",
        "answerLatex": "2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
        "solution": "链式法则。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u4-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "单位",
        "type": "frq",
        "stem": "在「相关变化率」中说明 ds/dt 的单位。",
        "answer": "若 s 为米、t 为秒，则 m/s。",
        "solution": "单位随情境。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u4-q008",
    "title": "4.1 变化率情境 · 参数化",
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
    "id": "calc-u4-q009",
    "title": "4.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q010",
    "title": "4.3 因式化简",
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
    "id": "calc-u4-q011",
    "title": "4.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「相关变化率」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q012",
    "title": "4.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q013",
    "title": "4.6 论述 · 局部线性近似",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「局部线性近似」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q014",
    "title": "4.7 洛必达法则 · 参数化",
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
    "id": "calc-u4-q015",
    "title": "4.1 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q016",
    "title": "4.2 因式化简",
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
    "id": "calc-u4-q017",
    "title": "4.3 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「变化率与单位」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q018",
    "title": "4.4 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q019",
    "title": "4.5 论述 · 相关变化率求解",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「相关变化率求解」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q020",
    "title": "4.6 局部线性近似 · 参数化",
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
    "id": "calc-u4-q021",
    "title": "4.7 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q022",
    "title": "4.1 因式化简",
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
    "id": "calc-u4-q023",
    "title": "4.2 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「直线运动」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q024",
    "title": "4.3 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q025",
    "title": "4.4 论述 · 相关变化率",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「相关变化率」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q026",
    "title": "4.5 相关变化率求解 · 参数化",
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
    "id": "calc-u4-q027",
    "title": "4.6 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q028",
    "title": "4.7 因式化简",
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
    "id": "calc-u4-q029",
    "title": "4.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「变化率情境」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q030",
    "title": "4.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q031",
    "title": "4.3 论述 · 变化率与单位",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「变化率与单位」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q032",
    "title": "4.4 相关变化率 · 参数化",
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
    "id": "calc-u4-q033",
    "title": "4.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q034",
    "title": "4.6 因式化简",
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
    "id": "calc-u4-q035",
    "title": "4.7 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「洛必达法则」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q036",
    "title": "4.1 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q037",
    "title": "4.2 论述 · 直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「直线运动」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q038",
    "title": "4.3 变化率与单位 · 参数化",
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
    "id": "calc-u4-q039",
    "title": "4.4 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q040",
    "title": "4.5 因式化简",
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
    "id": "calc-u4-q041",
    "title": "4.6 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「局部线性近似」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q042",
    "title": "4.7 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q043",
    "title": "4.1 论述 · 变化率情境",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「变化率情境」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q044",
    "title": "4.2 直线运动 · 参数化",
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
    "id": "calc-u4-q045",
    "title": "4.3 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q046",
    "title": "4.4 因式化简",
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
    "id": "calc-u4-q047",
    "title": "4.5 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「相关变化率求解」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q048",
    "title": "4.6 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q049",
    "title": "4.7 论述 · 洛必达法则",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「洛必达法则」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q050",
    "title": "4.1 变化率情境 · 参数化",
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
    "id": "calc-u4-q051",
    "title": "4.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{若 }v(t)=3t^{2}\\text{，}a(t)=",
    "expected": "6t",
    "answerLatex": "6t",
    "solution": "a=v′。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q052",
    "title": "4.3 因式化简",
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
    "id": "calc-u4-q053",
    "title": "4.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「相关变化率」，下列正确的是？",
    "choices": [
      {
        "text": "相关变化率必须用链式把各变量对同一自变量求导",
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
    "id": "calc-u4-q054",
    "title": "4.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "s=t^{2}\\text{（米）},\\;v(3)=",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v=2t。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q055",
    "title": "4.6 论述 · 局部线性近似",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「局部线性近似」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q056",
    "title": "4.7 洛必达法则 · 参数化",
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
