/** Practice bank for calc-u5 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u5",
  "code": "5",
  "titleZh": "导数的分析应用",
  "titleEn": "Analytical Applications of Differentiation",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u5-extra1",
    "title": "中值定理与导数符号",
    "stimulus": {
      "title": "f′ 的部分取值",
      "text": "f 在 [0,4] 上可微，f(0)=2，f(4)=10；f′ 连续，且在 [0,4] 上仅在 x=2 处为零。下表给出 f′ 的部分值。",
      "table": {
        "headers": [
          "x",
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "rows": [
          [
            "f'(x)",
            "3",
            "2",
            "0",
            "−2",
            "−1"
          ]
        ]
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u5-q001",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "平均变化率",
        "check": "numeric",
        "stem": "求 f 在 [0,4] 上的平均变化率。",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "函数值增量与区间长度之比为 2。",
        "solutionLatex": "\\dfrac{f(4)-f(0)}{4-0}=\\dfrac{10-2}{4}=2"
      },
      {
        "id": "calc-u5-q002",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "中值定理",
        "check": "numeric",
        "stem": "由中值定理，存在 c∈(0,4) 使 f′(c) 等于平均变化率。表中哪个 x 可作为这样的 c？",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "表中 f′(1)=2，等于平均变化率。"
      },
      {
        "id": "calc-u5-q003",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "单调性与极值",
        "stem": "确定 f 的单调区间与局部极值，并说明理由。",
        "answer": "f′>0 于 [0,2)，f′<0 于 (2,4]，所以 f 在 (0,2) 上递增、在 (2,4) 上递减；x=2 为局部极大值点。",
        "solution": "f′ 连续且仅在 x=2 处为零，符号由正变负。"
      },
      {
        "id": "calc-u5-q004",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "MVT 的结论",
        "stem": "中值定理保证存在 c 使 f′(c)=2。这是否意味着 f 在 [0,4] 上处处以斜率 2 增长？解释。",
        "answer": "不是。中值定理只保证至少一个内点的瞬时变化率等于平均变化率；表中其他点的 f′ 并不都等于 2。",
        "solution": "区分“存在一点”与“处处成立”。"
      }
    ]
  },
  {
    "id": "calc-u5-q005",
    "title": "5.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q006",
    "title": "5.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极值定理」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q007",
    "title": "5.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q008",
    "title": "5.4 论述 · 一阶导数检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q009",
    "title": "5.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q010",
    "title": "5.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「凹性与拐点」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q011",
    "title": "5.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q012",
    "title": "5.8 论述 · 函数草图",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q013",
    "title": "5.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q014",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q015",
    "title": "5.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q016",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q017",
    "title": "5.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q018",
    "title": "5.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极值定理」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q019",
    "title": "5.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q020",
    "title": "5.4 论述 · 一阶导数检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q021",
    "title": "5.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q022",
    "title": "5.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「凹性与拐点」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q023",
    "title": "5.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q024",
    "title": "5.8 论述 · 函数草图",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q025",
    "title": "5.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q026",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q027",
    "title": "5.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q028",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q029",
    "title": "5.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q030",
    "title": "5.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极值定理」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q031",
    "title": "5.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q032",
    "title": "5.4 论述 · 一阶导数检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q033",
    "title": "5.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q034",
    "title": "5.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「凹性与拐点」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q035",
    "title": "5.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q036",
    "title": "5.8 论述 · 函数草图",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q037",
    "title": "5.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q038",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q039",
    "title": "5.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q040",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q041",
    "title": "5.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q042",
    "title": "5.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极值定理」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q043",
    "title": "5.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q044",
    "title": "5.4 论述 · 一阶导数检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q045",
    "title": "5.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q046",
    "title": "5.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「凹性与拐点」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q047",
    "title": "5.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q048",
    "title": "5.8 论述 · 函数草图",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q049",
    "title": "5.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q050",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q051",
    "title": "5.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q052",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q053",
    "title": "5.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q054",
    "title": "5.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极值定理」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q055",
    "title": "5.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q056",
    "title": "5.4 论述 · 一阶导数检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q057",
    "title": "5.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q058",
    "title": "5.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「凹性与拐点」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q059",
    "title": "5.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q060",
    "title": "5.8 论述 · 函数草图",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q061",
    "title": "5.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q062",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q063",
    "title": "5.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q064",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q065",
    "title": "5.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q066",
    "title": "5.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极值定理」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q067",
    "title": "5.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q068",
    "title": "5.4 论述 · 一阶导数检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q069",
    "title": "5.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q070",
    "title": "5.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「凹性与拐点」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q071",
    "title": "5.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q072",
    "title": "5.8 论述 · 函数草图",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q073",
    "title": "5.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q074",
    "title": "5.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「优化导论」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q075",
    "title": "5.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q076",
    "title": "5.12 论述 · 隐式关系行为",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q077",
    "title": "5.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q078",
    "title": "5.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「极值定理」，下列正确的是？",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸",
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
    "id": "calc-u5-q079",
    "title": "5.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在 }(0,2)\\text{ 内的临界点 }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q080",
    "title": "5.4 论述 · 一阶导数检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u5-frq1",
    "title": "优化：抛物线下内接矩形",
    "stimulus": {
      "title": "内接矩形",
      "text": "矩形的一边在 x 轴上，另外两个顶点在抛物线 y=12−x² 上，且关于 y 轴对称。设右上顶点横坐标为 x（0<x<√12）。",
      "textLatex": "y=12-x^{2}",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u5-frq1-q1",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "面积函数",
        "check": "symbolic",
        "stemLatex": "\\text{用 }x\\text{ 表示矩形面积 }A(x)",
        "expected": "24*x-2*x^3",
        "answerLatex": "A(x)=2x\\left(12-x^{2}\\right)=24x-2x^{3}",
        "solution": "宽为 2x，高为 12−x²，故 A=2x(12−x²)。"
      },
      {
        "id": "calc-u5-frq1-q2",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "临界点",
        "check": "numeric",
        "stem": "求使面积最大的 x（0<x<√12）。",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "x=2",
        "solution": "A′(x)=24−6x²=0 ⇒ x=2（取正根）。"
      },
      {
        "id": "calc-u5-frq1-q3",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "最大面积",
        "check": "numeric",
        "stem": "求矩形的最大面积。",
        "expected": 32,
        "tol": 0.01,
        "answerLatex": "32",
        "solution": "A(2)=2·2·(12−4)=32；A″=−12x<0，故为最大值。"
      }
    ]
  }
];
