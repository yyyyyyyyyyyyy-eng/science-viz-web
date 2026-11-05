/** Practice bank for calc-u5 — AP-style, attributed OER adaptations */
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
    "title": "中值定理 · 直线运动数据",
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
  "stim-calc-u5-2": {
    "title": "极值定理 · 直线运动数据",
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
    "id": "calc-u5-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u5-1",
    "stimulus": {
      "title": "中值定理 · 直线运动数据",
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
        "id": "calc-u5-q001",
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
        "id": "calc-u5-q002",
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
        "id": "calc-u5-q003",
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
    "id": "calc-u5-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u5-2",
    "stimulus": {
      "title": "极值定理 · 直线运动数据",
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
        "id": "calc-u5-q004",
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
        "id": "calc-u5-q005",
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
        "id": "calc-u5-q006",
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
        "id": "calc-u5-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "单位",
        "type": "frq",
        "stem": "在「一阶导数检验」中说明 ds/dt 的单位。",
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
    "id": "calc-u5-q008",
    "title": "5.1 中值定理 · 参数化",
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
    "id": "calc-u5-q009",
    "title": "5.2 符号",
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
    "id": "calc-u5-q010",
    "title": "5.3 因式化简",
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
    "id": "calc-u5-q011",
    "title": "5.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「一阶导数检验」，下列正确的是？",
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
    "id": "calc-u5-q012",
    "title": "5.5 计算",
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
    "id": "calc-u5-q013",
    "title": "5.6 论述 · 凹性与拐点",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「凹性与拐点」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q014",
    "title": "5.7 二阶导数检验 · 参数化",
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
    "id": "calc-u5-q015",
    "title": "5.8 符号",
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
    "id": "calc-u5-q016",
    "title": "5.9 因式化简",
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
    "id": "calc-u5-q017",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
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
    "id": "calc-u5-q018",
    "title": "5.11 计算",
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
    "id": "calc-u5-q019",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q020",
    "title": "5.1 中值定理 · 参数化",
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
    "id": "calc-u5-q021",
    "title": "5.2 符号",
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
    "id": "calc-u5-q022",
    "title": "5.3 因式化简",
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
    "id": "calc-u5-q023",
    "title": "5.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「一阶导数检验」，下列正确的是？",
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
    "id": "calc-u5-q024",
    "title": "5.5 计算",
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
    "id": "calc-u5-q025",
    "title": "5.6 论述 · 凹性与拐点",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「凹性与拐点」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q026",
    "title": "5.7 二阶导数检验 · 参数化",
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
    "id": "calc-u5-q027",
    "title": "5.8 符号",
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
    "id": "calc-u5-q028",
    "title": "5.9 因式化简",
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
    "id": "calc-u5-q029",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
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
    "id": "calc-u5-q030",
    "title": "5.11 计算",
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
    "id": "calc-u5-q031",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q032",
    "title": "5.1 中值定理 · 参数化",
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
    "id": "calc-u5-q033",
    "title": "5.2 符号",
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
    "id": "calc-u5-q034",
    "title": "5.3 因式化简",
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
    "id": "calc-u5-q035",
    "title": "5.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「一阶导数检验」，下列正确的是？",
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
    "id": "calc-u5-q036",
    "title": "5.5 计算",
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
    "id": "calc-u5-q037",
    "title": "5.6 论述 · 凹性与拐点",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「凹性与拐点」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q038",
    "title": "5.7 二阶导数检验 · 参数化",
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
    "id": "calc-u5-q039",
    "title": "5.8 符号",
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
    "id": "calc-u5-q040",
    "title": "5.9 因式化简",
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
    "id": "calc-u5-q041",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
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
    "id": "calc-u5-q042",
    "title": "5.11 计算",
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
    "id": "calc-u5-q043",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q044",
    "title": "5.1 中值定理 · 参数化",
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
    "id": "calc-u5-q045",
    "title": "5.2 符号",
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
    "id": "calc-u5-q046",
    "title": "5.3 因式化简",
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
    "id": "calc-u5-q047",
    "title": "5.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「一阶导数检验」，下列正确的是？",
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
    "id": "calc-u5-q048",
    "title": "5.5 计算",
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
    "id": "calc-u5-q049",
    "title": "5.6 论述 · 凹性与拐点",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「凹性与拐点」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
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
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q051",
    "title": "5.8 符号",
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
    "id": "calc-u5-q052",
    "title": "5.9 因式化简",
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
    "id": "calc-u5-q053",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
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
    "id": "calc-u5-q054",
    "title": "5.11 计算",
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
    "id": "calc-u5-q055",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q056",
    "title": "5.1 中值定理 · 参数化",
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
    "id": "calc-u5-q057",
    "title": "5.2 符号",
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
    "id": "calc-u5-q058",
    "title": "5.3 因式化简",
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
    "id": "calc-u5-q059",
    "title": "5.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「一阶导数检验」，下列正确的是？",
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
    "id": "calc-u5-q060",
    "title": "5.5 计算",
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
    "id": "calc-u5-q061",
    "title": "5.6 论述 · 凹性与拐点",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「凹性与拐点」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q062",
    "title": "5.7 二阶导数检验 · 参数化",
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
    "id": "calc-u5-q063",
    "title": "5.8 符号",
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
    "id": "calc-u5-q064",
    "title": "5.9 因式化简",
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
    "id": "calc-u5-q065",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
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
    "id": "calc-u5-q066",
    "title": "5.11 计算",
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
    "id": "calc-u5-q067",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q068",
    "title": "5.1 中值定理 · 参数化",
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
    "id": "calc-u5-q069",
    "title": "5.2 符号",
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
    "id": "calc-u5-q070",
    "title": "5.3 因式化简",
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
    "id": "calc-u5-q071",
    "title": "5.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「一阶导数检验」，下列正确的是？",
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
    "id": "calc-u5-q072",
    "title": "5.5 计算",
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
    "id": "calc-u5-q073",
    "title": "5.6 论述 · 凹性与拐点",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「凹性与拐点」：举一个相关变化率的实际例子并写出等式。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q074",
    "title": "5.7 二阶导数检验 · 参数化",
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
    "id": "calc-u5-q075",
    "title": "5.8 符号",
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
    "id": "calc-u5-q076",
    "title": "5.9 因式化简",
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
  }
];
