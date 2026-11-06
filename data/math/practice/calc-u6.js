/** Practice bank for calc-u6 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u6",
  "code": "6",
  "titleZh": "积分与累积变化",
  "titleEn": "Integration and Accumulation of Change",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u6-extra1",
    "title": "微积分基本定理与累积",
    "stimulus": {
      "title": "速度 v(t) 的部分数据",
      "text": "质点沿直线运动，速度 v(t)（m/s）如下表。定义累积函数 F(x)=∫₀ˣ v(t)dt。",
      "table": {
        "headers": [
          "t",
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "rows": [
          [
            "v(t)",
            "2",
            "4",
            "3",
            "5",
            "1"
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
            4
          ],
          [
            2,
            3
          ],
          [
            3,
            5
          ],
          [
            4,
            1
          ]
        ],
        "xLabel": "t",
        "yLabel": "v"
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u6-q001",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "梯形法估累积",
        "check": "numeric",
        "stem": "用梯形法估计 F(2)。",
        "expected": 6.5,
        "tol": 0.01,
        "answerLatex": "6.5",
        "solution": "(2+4)÷2+(4+3)÷2=3+3.5=6.5。"
      },
      {
        "id": "calc-u6-q002",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "FTC 求导",
        "check": "numeric",
        "stem": "求 F′(3)。",
        "expected": 5,
        "tol": 0.01,
        "answerLatex": "5",
        "solution": "由微积分基本定理，F′(t)=v(t)，所以 F′(3)=v(3)=5。"
      },
      {
        "id": "calc-u6-q003",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "二阶导数",
        "check": "numeric",
        "stem": "用 t=1 与 t=3 的中心差商估计 F″(2)。",
        "expected": 0.5,
        "tol": 0.01,
        "answerLatex": "0.5",
        "solution": "F″=v′，中心差商为 (v(3)−v(1))÷(3−1)=(5−4)÷2=0.5。"
      },
      {
        "id": "calc-u6-q004",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "累积的解释",
        "stem": "解释 F(4)−F(0) 的物理意义与单位。",
        "answer": "它等于 ∫₀⁴v(t)dt，表示 0 到 4 秒内的净位移，单位为米。",
        "solution": "速度对时间积分给出位移；注意“净”位移。"
      }
    ]
  },
  {
    "id": "calc-u6-q005",
    "title": "6.1 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q006",
    "title": "6.2 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u6-q007",
    "title": "6.3 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q008",
    "title": "6.4 论述 · 微积分基本定理",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「微积分基本定理」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q009",
    "title": "6.5 符号",
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
    "title": "6.6 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u6-q011",
    "title": "6.7 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q012",
    "title": "6.8 论述 · 求原函数",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「求原函数」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q013",
    "title": "6.9 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q014",
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
    "id": "calc-u6-q015",
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
    "id": "calc-u6-q016",
    "title": "6.12 论述 · 反常积分",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「反常积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q017",
    "title": "6.13 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q018",
    "title": "6.14 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u6-q019",
    "title": "6.1 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q020",
    "title": "6.2 论述 · 黎曼和近似",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「黎曼和近似」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q021",
    "title": "6.3 符号",
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
    "title": "6.4 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u6-q023",
    "title": "6.5 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q024",
    "title": "6.6 论述 · 微积分基本定理应用",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「微积分基本定理应用」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q025",
    "title": "6.7 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q026",
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
    "id": "calc-u6-q027",
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
    "id": "calc-u6-q028",
    "title": "6.10 论述 · 分部积分",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「分部积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q029",
    "title": "6.11 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q030",
    "title": "6.12 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u6-q031",
    "title": "6.13 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q032",
    "title": "6.14 论述 · 积分技巧综合",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分技巧综合」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q033",
    "title": "6.1 符号",
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
    "title": "6.2 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u6-q035",
    "title": "6.3 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q036",
    "title": "6.4 论述 · 微积分基本定理",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「微积分基本定理」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q037",
    "title": "6.5 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q038",
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
    "id": "calc-u6-q039",
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
    "id": "calc-u6-q040",
    "title": "6.8 论述 · 求原函数",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「求原函数」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q041",
    "title": "6.9 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q042",
    "title": "6.10 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u6-q043",
    "title": "6.11 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q044",
    "title": "6.12 论述 · 反常积分",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「反常积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q045",
    "title": "6.13 符号",
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
    "title": "6.14 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u6-q047",
    "title": "6.1 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q048",
    "title": "6.2 论述 · 黎曼和近似",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「黎曼和近似」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q049",
    "title": "6.3 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q050",
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
    "id": "calc-u6-q051",
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
    "id": "calc-u6-q052",
    "title": "6.6 论述 · 微积分基本定理应用",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「微积分基本定理应用」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q053",
    "title": "6.7 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q054",
    "title": "6.8 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u6-q055",
    "title": "6.9 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q056",
    "title": "6.10 论述 · 分部积分",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「分部积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q057",
    "title": "6.11 符号",
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
    "title": "6.12 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u6-q059",
    "title": "6.13 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q060",
    "title": "6.14 论述 · 积分技巧综合",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「积分技巧综合」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q061",
    "title": "6.1 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q062",
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
    "id": "calc-u6-q063",
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
    "id": "calc-u6-q064",
    "title": "6.4 论述 · 微积分基本定理",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「微积分基本定理」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q065",
    "title": "6.5 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q066",
    "title": "6.6 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u6-q067",
    "title": "6.7 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q068",
    "title": "6.8 论述 · 求原函数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「求原函数」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q069",
    "title": "6.9 符号",
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
    "title": "6.10 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u6-q071",
    "title": "6.11 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q072",
    "title": "6.12 论述 · 反常积分",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「反常积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q073",
    "title": "6.13 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q074",
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
    "id": "calc-u6-q075",
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
    "id": "calc-u6-q076",
    "title": "6.2 论述 · 黎曼和近似",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「黎曼和近似」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q077",
    "title": "6.3 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q078",
    "title": "6.4 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u6-q079",
    "title": "6.5 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u6-q080",
    "title": "6.6 论述 · 微积分基本定理应用",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「微积分基本定理应用」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u6-q081",
    "title": "6.7 符号",
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
    "id": "calc-u6-q082",
    "title": "6.8 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u6-q083",
    "title": "6.9 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u6-q084",
    "title": "6.10 论述 · 分部积分",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「分部积分」：说明净面积与总面积（绝对值）在应用中的区别。",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
