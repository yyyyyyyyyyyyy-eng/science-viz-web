/** Practice bank for calc-u5 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u5",
  "code": "5",
  "titleZh": "导数的分析应用 · analytical applications of derivatives",
  "titleEn": "Analytical Applications of Differentiation",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u5-extra1",
    "title": "中值定理与导数符号 · the mean value theorem and the sign of the derivative",
    "stimulus": {
      "title": "f′ 的部分取值 · selected values of f′",
      "text": "f 在 [0,4] 上可微，f(0)=2，f(4)=10；f′ 连续，且在 [0,4] 上仅在 x=2 处为零。下表给出 f′ 的部分值。 · f is differentiable on [0,4], with f(0)=2 and f(4)=10. f′ is continuous and is zero on [0,4] only at x=2. The table gives some values of f′.",
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
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u5-q001",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "平均变化率 · average rate of change",
        "check": "numeric",
        "stem": "求 f 在 [0,4] 上的平均变化率。 · Find the average rate of change of f on [0,4].",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "函数值增量与区间长度之比为 2。 · The ratio of the change in function value to the length of the interval is 2.",
        "solutionLatex": "\\dfrac{f(4)-f(0)}{4-0}=\\dfrac{10-2}{4}=2"
      },
      {
        "id": "calc-u5-q002",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "中值定理 · mean value theorem",
        "check": "numeric",
        "stem": "由中值定理，存在 c∈(0,4) 使 f′(c) 等于平均变化率。表中哪个 x 可作为这样的 c？ · By the mean value theorem there is a c in (0,4) at which f′(c) equals the average rate of change. Which x in the table can be such a c?",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "表中 f′(1)=2，等于平均变化率。 · In the table f′(1)=2, equal to the average rate of change."
      },
      {
        "id": "calc-u5-q003",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "单调性与极值 · monotonicity and extrema",
        "stem": "确定 f 的单调区间与局部极值，并说明理由。 · Determine the intervals where f is monotonic and any local extrema, and justify.",
        "answer": "f′>0 于 [0,2)，f′<0 于 (2,4]，所以 f 在 (0,2) 上递增、在 (2,4) 上递减；x=2 为局部极大值点。 · f′>0 on [0,2) and f′<0 on (2,4], so f is increasing on (0,2) and decreasing on (2,4); x=2 is a local maximum.",
        "solution": "f′ 连续且仅在 x=2 处为零，符号由正变负。 · f′ is continuous and zero only at x=2, and it changes from positive to negative."
      },
      {
        "id": "calc-u5-q004",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "MVT 的结论 · conclusion of the MVT",
        "stem": "中值定理保证存在 c 使 f′(c)=2。这是否意味着 f 在 [0,4] 上处处以斜率 2 增长？解释。 · The mean value theorem guarantees a c with f′(c)=2. Does that mean f increases with slope 2 everywhere on [0,4]? Explain.",
        "answer": "不是。中值定理只保证至少一个内点的瞬时变化率等于平均变化率；表中其他点的 f′ 并不都等于 2。 · No. The mean value theorem guarantees only that the instantaneous rate equals the average rate at at least one interior point; the other tabulated values of f′ are not all 2.",
        "solution": "区分“存在一点”与“处处成立”。 · Distinguish “there exists a point” from “true everywhere.”"
      }
    ]
  },
  {
    "id": "calc-u5-q005",
    "title": "5.1 符号 · 5.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q006",
    "title": "5.2 概念 · 5.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极值定理」，下列正确的是？ · Which of the following is correct about “Extreme Value Theorem, Global Versus Local Extrema, and Critical Points”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.3 计算 · 5.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q008",
    "title": "5.4 论述 · 一阶导数检验 · 5.4 Argument: Using the First Derivative Test to Determine Relative Local Extrema",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Using the First Derivative Test to Determine Relative Local Extrema”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q009",
    "title": "5.5 符号 · 5.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q010",
    "title": "5.6 概念 · 5.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「凹性与拐点」，下列正确的是？ · Which of the following is correct about “Determining Concavity of Functions over Their Domains”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.7 计算 · 5.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q012",
    "title": "5.8 论述 · 函数草图 · 5.8 Argument: Sketching Graphs of Functions and Their Derivatives",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Sketching Graphs of Functions and Their Derivatives”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q013",
    "title": "5.9 符号 · 5.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q014",
    "title": "5.10 概念 · 5.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「优化导论」，下列正确的是？ · Which of the following is correct about “Introduction to Optimization Problems”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.11 计算 · 5.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q016",
    "title": "5.12 论述 · 隐式关系行为 · 5.12 Argument: Exploring Behaviors of Implicit Relations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Exploring Behaviors of Implicit Relations”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q017",
    "title": "5.1 符号 · 5.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q018",
    "title": "5.2 概念 · 5.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极值定理」，下列正确的是？ · Which of the following is correct about “Extreme Value Theorem, Global Versus Local Extrema, and Critical Points”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.3 计算 · 5.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q020",
    "title": "5.4 论述 · 一阶导数检验 · 5.4 Argument: Using the First Derivative Test to Determine Relative Local Extrema",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Using the First Derivative Test to Determine Relative Local Extrema”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q021",
    "title": "5.5 符号 · 5.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q022",
    "title": "5.6 概念 · 5.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「凹性与拐点」，下列正确的是？ · Which of the following is correct about “Determining Concavity of Functions over Their Domains”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.7 计算 · 5.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q024",
    "title": "5.8 论述 · 函数草图 · 5.8 Argument: Sketching Graphs of Functions and Their Derivatives",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Sketching Graphs of Functions and Their Derivatives”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q025",
    "title": "5.9 符号 · 5.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q026",
    "title": "5.10 概念 · 5.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「优化导论」，下列正确的是？ · Which of the following is correct about “Introduction to Optimization Problems”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.11 计算 · 5.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q028",
    "title": "5.12 论述 · 隐式关系行为 · 5.12 Argument: Exploring Behaviors of Implicit Relations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Exploring Behaviors of Implicit Relations”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q029",
    "title": "5.1 符号 · 5.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q030",
    "title": "5.2 概念 · 5.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极值定理」，下列正确的是？ · Which of the following is correct about “Extreme Value Theorem, Global Versus Local Extrema, and Critical Points”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.3 计算 · 5.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q032",
    "title": "5.4 论述 · 一阶导数检验 · 5.4 Argument: Using the First Derivative Test to Determine Relative Local Extrema",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Using the First Derivative Test to Determine Relative Local Extrema”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q033",
    "title": "5.5 符号 · 5.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q034",
    "title": "5.6 概念 · 5.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「凹性与拐点」，下列正确的是？ · Which of the following is correct about “Determining Concavity of Functions over Their Domains”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.7 计算 · 5.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q036",
    "title": "5.8 论述 · 函数草图 · 5.8 Argument: Sketching Graphs of Functions and Their Derivatives",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Sketching Graphs of Functions and Their Derivatives”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q037",
    "title": "5.9 符号 · 5.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q038",
    "title": "5.10 概念 · 5.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「优化导论」，下列正确的是？ · Which of the following is correct about “Introduction to Optimization Problems”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.11 计算 · 5.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q040",
    "title": "5.12 论述 · 隐式关系行为 · 5.12 Argument: Exploring Behaviors of Implicit Relations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Exploring Behaviors of Implicit Relations”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q041",
    "title": "5.1 符号 · 5.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q042",
    "title": "5.2 概念 · 5.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极值定理」，下列正确的是？ · Which of the following is correct about “Extreme Value Theorem, Global Versus Local Extrema, and Critical Points”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.3 计算 · 5.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q044",
    "title": "5.4 论述 · 一阶导数检验 · 5.4 Argument: Using the First Derivative Test to Determine Relative Local Extrema",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Using the First Derivative Test to Determine Relative Local Extrema”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q045",
    "title": "5.5 符号 · 5.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q046",
    "title": "5.6 概念 · 5.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「凹性与拐点」，下列正确的是？ · Which of the following is correct about “Determining Concavity of Functions over Their Domains”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.7 计算 · 5.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q048",
    "title": "5.8 论述 · 函数草图 · 5.8 Argument: Sketching Graphs of Functions and Their Derivatives",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Sketching Graphs of Functions and Their Derivatives”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q049",
    "title": "5.9 符号 · 5.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q050",
    "title": "5.10 概念 · 5.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「优化导论」，下列正确的是？ · Which of the following is correct about “Introduction to Optimization Problems”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.11 计算 · 5.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q052",
    "title": "5.12 论述 · 隐式关系行为 · 5.12 Argument: Exploring Behaviors of Implicit Relations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Exploring Behaviors of Implicit Relations”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q053",
    "title": "5.1 符号 · 5.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q054",
    "title": "5.2 概念 · 5.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极值定理」，下列正确的是？ · Which of the following is correct about “Extreme Value Theorem, Global Versus Local Extrema, and Critical Points”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.3 计算 · 5.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q056",
    "title": "5.4 论述 · 一阶导数检验 · 5.4 Argument: Using the First Derivative Test to Determine Relative Local Extrema",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Using the First Derivative Test to Determine Relative Local Extrema”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q057",
    "title": "5.5 符号 · 5.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q058",
    "title": "5.6 概念 · 5.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「凹性与拐点」，下列正确的是？ · Which of the following is correct about “Determining Concavity of Functions over Their Domains”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.7 计算 · 5.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q060",
    "title": "5.8 论述 · 函数草图 · 5.8 Argument: Sketching Graphs of Functions and Their Derivatives",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Sketching Graphs of Functions and Their Derivatives”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q061",
    "title": "5.9 符号 · 5.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q062",
    "title": "5.10 概念 · 5.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「优化导论」，下列正确的是？ · Which of the following is correct about “Introduction to Optimization Problems”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.11 计算 · 5.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q064",
    "title": "5.12 论述 · 隐式关系行为 · 5.12 Argument: Exploring Behaviors of Implicit Relations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Exploring Behaviors of Implicit Relations”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q065",
    "title": "5.1 符号 · 5.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q066",
    "title": "5.2 概念 · 5.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极值定理」，下列正确的是？ · Which of the following is correct about “Extreme Value Theorem, Global Versus Local Extrema, and Critical Points”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.3 计算 · 5.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q068",
    "title": "5.4 论述 · 一阶导数检验 · 5.4 Argument: Using the First Derivative Test to Determine Relative Local Extrema",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Using the First Derivative Test to Determine Relative Local Extrema”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q069",
    "title": "5.5 符号 · 5.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q070",
    "title": "5.6 概念 · 5.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「凹性与拐点」，下列正确的是？ · Which of the following is correct about “Determining Concavity of Functions over Their Domains”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.7 计算 · 5.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q072",
    "title": "5.8 论述 · 函数草图 · 5.8 Argument: Sketching Graphs of Functions and Their Derivatives",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「函数草图」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Sketching Graphs of Functions and Their Derivatives”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q073",
    "title": "5.9 符号 · 5.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q074",
    "title": "5.10 概念 · 5.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「优化导论」，下列正确的是？ · Which of the following is correct about “Introduction to Optimization Problems”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.11 计算 · 5.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q076",
    "title": "5.12 论述 · 隐式关系行为 · 5.12 Argument: Exploring Behaviors of Implicit Relations",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「隐式关系行为」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Exploring Behaviors of Implicit Relations”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q077",
    "title": "5.1 符号 · 5.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "f(x)=x^{3}-3x\\text{：}f'(x)=",
    "expected": "3x^2-3",
    "answerLatex": "3x^{2}-3",
    "solution": "逐项使用幂法则。 · Apply the power rule term by term.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q078",
    "title": "5.2 概念 · 5.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「极值定理」，下列正确的是？ · Which of the following is correct about “Extreme Value Theorem, Global Versus Local Extrema, and Critical Points”?",
    "choices": [
      {
        "text": "一阶导数符号决定增减，二阶导数符号决定凹凸 · The sign of the first derivative sets increase or decrease; the sign of the second sets concavity",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
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
    "title": "5.3 计算 · 5.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=x^{3}-3x\\text{ 在  ·  at }(0,2)\\text{ 内的临界点  ·  a critical point in }x=",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1",
    "solution": "f′(x)=3x²−3=0，取 (0,2) 内的 x=1。 · f′(x)=3x²−3=0, and the root inside (0,2) is x=1.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u5-q080",
    "title": "5.4 论述 · 一阶导数检验 · 5.4 Argument: Using the First Derivative Test to Determine Relative Local Extrema",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「一阶导数检验」：说明一阶导数与二阶导数的符号分别能提供什么图像信息。 · For “Using the First Derivative Test to Determine Relative Local Extrema”, state what the signs of the first and second derivatives tell you about the graph",
    "answer": "f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。 · The function increases where f′>0 and decreases where f′<0; a zero of f′ that changes sign is a local extremum. The graph is concave up where f″>0 and concave down where f″<0; a zero of f″ that changes sign is an inflection point.",
    "solution": "一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。 · The first derivative controls increase, decrease, and local extrema; the second controls concavity and inflection points. Together they sketch the graph.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u5-frq1",
    "title": "优化：抛物线下内接矩形 · optimization: a rectangle inscribed under a parabola",
    "stimulus": {
      "title": "内接矩形 · inscribed rectangle",
      "text": "矩形的一边在 x 轴上，另外两个顶点在抛物线 y=12−x² 上，且关于 y 轴对称。设右上顶点横坐标为 x（0<x<√12）。 · One side of a rectangle lies on the x-axis, and the other two vertices lie on the parabola y=12−x², symmetric about the y-axis. Let the right-hand x-coordinate be x, with 0<x<√12.",
      "textLatex": "y=12-x^{2}",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u5-frq1-q1",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "面积函数 · area function",
        "check": "symbolic",
        "stemLatex": "\\text{用  · use }x\\text{ 表示矩形面积  ·  for the rectangle’s area }A(x)",
        "expected": "24*x-2*x^3",
        "answerLatex": "A(x)=2x\\left(12-x^{2}\\right)=24x-2x^{3}",
        "solution": "宽为 2x，高为 12−x²，故 A=2x(12−x²)。 · The width is 2x and the height is 12−x², so A=2x(12−x²)."
      },
      {
        "id": "calc-u5-frq1-q2",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "临界点 · critical point",
        "check": "numeric",
        "stem": "求使面积最大的 x（0<x<√12）。 · Find the x in (0, √12) that maximizes the area.",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "x=2",
        "solution": "A′(x)=24−6x²=0 ⇒ x=2（取正根）。 · A′(x)=24−6x²=0, so x=2 (take the positive root)."
      },
      {
        "id": "calc-u5-frq1-q3",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "最大面积 · maximum area",
        "check": "numeric",
        "stem": "求矩形的最大面积。 · Find the maximum area of the rectangle.",
        "expected": 32,
        "tol": 0.01,
        "answerLatex": "32",
        "solution": "A(2)=2·2·(12−4)=32；A″=−12x<0，故为最大值。 · A(2)=2·2·(12−4)=32, and A″=−12x<0, so this is a maximum."
      }
    ]
  },
{
  "id": "calc-u5-q085",
  "title": "5.7 唯一临界点与绝对极值 · 5.7 a unique critical point and absolute extrema",
  "type": "mcq",
  "difficulty": "中 · Medium",
  "calculator": false,
  "stem": "f 在区间 I 上连续，I 内只有一个临界点 x=2，且 f(2) 是局部极小值。下列哪项一定成立？ · f is continuous on an interval I, the only critical point in I is x=2, and f(2) is a local minimum. Which statement must be true?",
  "choices": [
    {
      "text": "f(2) 是 I 上的绝对最小值 · f(2) is the absolute minimum on I",
      "correct": true
    },
    {
      "text": "f(2) 是 I 上的绝对最大值 · f(2) is the absolute maximum on I",
      "correct": false
    },
    {
      "text": "f(2) 既是绝对最小值也是绝对最大值 · f(2) is both the absolute minimum and the absolute maximum",
      "correct": false
    },
    {
      "text": "无法判断任何绝对极值 · no absolute extremum can be decided",
      "correct": false
    }
  ],
  "solution": "FUN-4.A.8：连续、唯一临界点且为局部极值 ⇒ 同类型的绝对极值。 · FUN-4.A.8: if a function is continuous and its only critical point is a local extremum, that point is an absolute extremum of the same type.",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。 · Original AP-style item, not an official item; used for CED coverage in this round.",
  "topicLinks": [
    {
      "href": "#/t/math/calc-u5/5.7",
      "label": "5.7 二阶导数检验 · 5.7 Using the Second Derivative Test to Determine Extrema",
      "topicId": "calc-u5:5.7"
    }
  ]
}
];
