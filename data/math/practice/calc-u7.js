/** Practice bank for calc-u7 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u7",
  "code": "7",
  "titleZh": "微分方程 · differential equations",
  "titleEn": "Differential Equations",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u7-1": {
    "title": "微分方程建模 · 斜率场要点 · Modeling Situations with Differential Equations: slope-field ideas",
    "text": "微分方程 dy/dx = y − x 的斜率场在若干格点给出方向。 · A slope field for the differential equation dy/dx = y − x gives directions at selected grid points.",
    "table": {
      "headers": [
        "点 · point",
        "斜率 · slope"
      ],
      "rows": [
        [
          "(0,0)",
          "0"
        ],
        [
          "(1,0)",
          "−1"
        ],
        [
          "(0,1)",
          "1"
        ],
        [
          "(1,1)",
          "0"
        ]
      ]
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
    "id": "calc-u7-extra1",
    "title": "Logistic 模型 · logistic model",
    "stimulus": {
      "title": "种群增长 · population growth",
      "text": "某种群数量 P(t) 满足右侧微分方程，初始 P(0)=200。下表与图像给出部分时刻的数量。 · A population P(t) satisfies the differential equation at the right, with P(0)=200. The table and graph give the size at some times.",
      "textLatex": "\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.4P\\left(1-\\dfrac{P}{1200}\\right)",
      "table": {
        "headers": [
          "t",
          "0",
          "2",
          "4",
          "6"
        ],
        "rows": [
          [
            "P(t)",
            "200",
            "370",
            "597",
            "826"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            0,
            200
          ],
          [
            2,
            370
          ],
          [
            4,
            597
          ],
          [
            6,
            826
          ]
        ],
        "xLabel": "t",
        "yLabel": "P"
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u7-q001",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "求解模型 · solve the model",
        "check": "symbolic",
        "stem": "求 P(t) 的表达式。 · Find an expression for P(t).",
        "expected": "1200/(1+5*e^(-0.4*t))",
        "answerLatex": "P(t)=\\dfrac{1200}{1+5e^{-0.4t}}",
        "solution": "分离变量后积分，得到 logistic 通式；再由初值确定常数。 · Separate variables and integrate to get the logistic formula, then use the initial value to fix the constant.",
        "solutionLatex": "P(t)=\\dfrac{L}{1+Ce^{-kt}}"
      },
      {
        "id": "calc-u7-q002",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": true,
        "title": "模型求值 · evaluate the model",
        "check": "numeric",
        "stem": "用模型求 P(2)（保留到个位附近即可）。 · Use the model to find P(2), to about the nearest unit.",
        "expected": 369.6123433001111,
        "tol": 0.001,
        "answerLatex": "≈370",
        "solution": "把 t=2 代入模型计算。 · Substitute t=2 into the model.",
        "solutionLatex": "P(2)=\\dfrac{1200}{1+5e^{-0.8}}\\approx370"
      },
      {
        "id": "calc-u7-q003",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": true,
        "title": "最快增长时刻 · time of fastest growth",
        "check": "numeric",
        "stem": "种群增长最快时 P=600。求对应的 t（精确到 0.01）。 · The population grows fastest when P=600. Find the corresponding t, to 0.01.",
        "expected": 4.023594781085251,
        "tol": 0.005,
        "answerLatex": "t=\\dfrac{\\ln 5}{0.4}\\approx 4.02",
        "solution": "令 P=600，解指数方程。 · Set P=600 and solve the exponential equation.",
        "solutionLatex": "1+5e^{-0.4t}=2\\Rightarrow t=\\dfrac{\\ln 5}{0.4}\\approx4.02"
      },
      {
        "id": "calc-u7-q004",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "长期行为 · long-run behavior",
        "stem": "求 t→∞ 时 P(t) 的极限，并解释 1200 在该模型中的意义。 · Find the limit of P(t) as t→∞, and explain what 1200 means in this model.",
        "answer": "极限为 1200；它是环境容纳量（carrying capacity），即长期可维持的最大种群数量。 · The limit is 1200. It is the carrying capacity, the largest population the environment can sustain in the long run.",
        "solution": "Logistic 模型的平衡解为 P=0 与 P=L；初值大于 0 时趋于 L。 · For the logistic model the equilibrium solutions are P=0 and P=L; if the initial value is greater than 0, P tends to L."
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u7-set1",
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-calc-u7-1",
    "stimulus": {
      "title": "微分方程建模 · 斜率场要点 · Modeling Situations with Differential Equations: slope-field ideas",
      "text": "微分方程 dy/dx = y − x 的斜率场在若干格点给出方向。 · A slope field for the differential equation dy/dx = y − x gives directions at selected grid points.",
      "table": {
        "headers": [
          "点 · point",
          "斜率 · slope"
        ],
        "rows": [
          [
            "(0,0)",
            "0"
          ],
          [
            "(1,0)",
            "−1"
          ],
          [
            "(0,1)",
            "1"
          ],
          [
            "(1,1)",
            "0"
          ]
        ]
      },
      "sourceId": "openstax-calculus",
      "source": "OpenStax Calculus Volumes 1–3",
      "license": "CC BY-NC-SA 4.0",
      "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
      "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
    },
    "questions": [
      {
        "id": "calc-u7-q005",
        "difficulty": "易 · Easy",
        "calculator": true,
        "title": "斜率读取 · reading a slope",
        "type": "frq",
        "check": "numeric",
        "stem": "在点 (1,0) 处 dy/dx = y−x 的斜率是？ · What is the slope dy/dx = y−x at the point (1,0)?",
        "expected": -1,
        "tol": 0.01,
        "answerLatex": "-1",
        "solution": "0−1=−1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u7-q006",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "特解检验 · check a particular solution",
        "type": "frq",
        "stemLatex": "\\text{验证  · verify }y=x+1\\text{ 是否满足  ·  whether it satisfies }\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=y-x",
        "answerLatex": "y'=1=y-x",
        "solution": "两边同为 1。 · Both sides equal 1.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u7-q007",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "分离变量 · separation of variables",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=ky\\text{ 的通解（C 任意） ·  general solution (C arbitrary)}",
        "expected": "C*e^(k*x)",
        "answerLatex": "y=Ce^{kx}",
        "solution": "分离变量。 · Separate variables.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u7-q008",
    "title": "7.1 符号 · 7.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q009",
    "title": "7.2 概念 · 7.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「斜率场」，下列正确的是？ · Which of the following is correct about “slope field”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q010",
    "title": "7.3 计算 · 7.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q011",
    "title": "7.4 论述 · 斜率场推理 · 7.4 Argument: Reasoning Using Slope Fields",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「斜率场推理」：解释欧拉法一步如何用斜率推进近似解。 · For “Reasoning Using Slope Fields”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q012",
    "title": "7.5 符号 · 7.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q013",
    "title": "7.6 概念 · 7.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「可分离变量」，下列正确的是？ · Which of the following is correct about “Finding General Solutions Using Separation of Variables”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q014",
    "title": "7.7 计算 · 7.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q015",
    "title": "7.8 论述 · 指数模型 · 7.8 Argument: Exponential Models with Differential Equations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「指数模型」：解释欧拉法一步如何用斜率推进近似解。 · For “Exponential Models with Differential Equations”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q016",
    "title": "7.9 符号 · 7.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q017",
    "title": "7.1 概念 · 7.1 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「微分方程建模」，下列正确的是？ · Which of the following is correct about “Modeling Situations with Differential Equations”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q018",
    "title": "7.2 计算 · 7.2 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q019",
    "title": "7.3 论述 · 斜率场草图 · 7.3 Argument: Sketching Slope Fields",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「斜率场草图」：解释欧拉法一步如何用斜率推进近似解。 · For “Sketching Slope Fields”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q020",
    "title": "7.4 符号 · 7.4 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q021",
    "title": "7.5 概念 · 7.5 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「欧拉法」，下列正确的是？ · Which of the following is correct about “Approximating Solutions Using Euler's Method”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q022",
    "title": "7.6 计算 · 7.6 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q023",
    "title": "7.7 论述 · 特解 · 7.7 Argument: Finding Particular Solutions Using Initial Conditions and Separation of Variables",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「特解」：解释欧拉法一步如何用斜率推进近似解。 · For “Finding Particular Solutions Using Initial Conditions and Separation of Variables”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q024",
    "title": "7.8 符号 · 7.8 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q025",
    "title": "7.9 概念 · 7.9 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「Logistic 模型」，下列正确的是？ · Which of the following is correct about “Logistic Models with Differential Equations”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q026",
    "title": "7.1 计算 · 7.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q027",
    "title": "7.2 论述 · 验证微分方程的解 · 7.2 Argument: Verifying Solutions for Differential Equations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「斜率场」：解释欧拉法一步如何用斜率推进近似解。 · For “slope field”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q028",
    "title": "7.3 符号 · 7.3 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q029",
    "title": "7.4 概念 · 7.4 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「斜率场推理」，下列正确的是？ · Which of the following is correct about “Reasoning Using Slope Fields”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q030",
    "title": "7.5 计算 · 7.5 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q031",
    "title": "7.6 论述 · 可分离变量 · 7.6 Argument: Finding General Solutions Using Separation of Variables",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「可分离变量」：解释欧拉法一步如何用斜率推进近似解。 · For “Finding General Solutions Using Separation of Variables”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q032",
    "title": "7.7 符号 · 7.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q033",
    "title": "7.8 概念 · 7.8 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「指数模型」，下列正确的是？ · Which of the following is correct about “Exponential Models with Differential Equations”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q034",
    "title": "7.9 计算 · 7.9 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q035",
    "title": "7.1 论述 · 微分方程建模 · 7.1 Argument: Modeling Situations with Differential Equations",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「微分方程建模」：解释欧拉法一步如何用斜率推进近似解。 · For “Modeling Situations with Differential Equations”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q036",
    "title": "7.2 符号 · 7.2 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q037",
    "title": "7.3 概念 · 7.3 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「斜率场草图」，下列正确的是？ · Which of the following is correct about “Sketching Slope Fields”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q038",
    "title": "7.4 计算 · 7.4 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q039",
    "title": "7.5 论述 · 欧拉法 · 7.5 Argument: Approximating Solutions Using Euler's Method",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「欧拉法」：解释欧拉法一步如何用斜率推进近似解。 · For “Approximating Solutions Using Euler's Method”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q040",
    "title": "7.6 符号 · 7.6 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q041",
    "title": "7.7 概念 · 7.7 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「特解」，下列正确的是？ · Which of the following is correct about “Finding Particular Solutions Using Initial Conditions and Separation of Variables”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q042",
    "title": "7.8 计算 · 7.8 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q043",
    "title": "7.9 论述 · Logistic 模型",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「Logistic 模型」：解释欧拉法一步如何用斜率推进近似解。 · For “Logistic Models with Differential Equations”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q044",
    "title": "7.1 符号 · 7.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q045",
    "title": "7.2 概念 · 7.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「斜率场」，下列正确的是？ · Which of the following is correct about “slope field”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q046",
    "title": "7.3 计算 · 7.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q047",
    "title": "7.4 论述 · 斜率场推理 · 7.4 Argument: Reasoning Using Slope Fields",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「斜率场推理」：解释欧拉法一步如何用斜率推进近似解。 · For “Reasoning Using Slope Fields”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q048",
    "title": "7.5 符号 · 7.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q049",
    "title": "7.6 概念 · 7.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「可分离变量」，下列正确的是？ · Which of the following is correct about “Finding General Solutions Using Separation of Variables”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q050",
    "title": "7.7 计算 · 7.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q051",
    "title": "7.8 论述 · 指数模型 · 7.8 Argument: Exponential Models with Differential Equations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「指数模型」：解释欧拉法一步如何用斜率推进近似解。 · For “Exponential Models with Differential Equations”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q052",
    "title": "7.9 符号 · 7.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q053",
    "title": "7.1 概念 · 7.1 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「微分方程建模」，下列正确的是？ · Which of the following is correct about “Modeling Situations with Differential Equations”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q054",
    "title": "7.2 计算 · 7.2 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q055",
    "title": "7.3 论述 · 斜率场草图 · 7.3 Argument: Sketching Slope Fields",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「斜率场草图」：解释欧拉法一步如何用斜率推进近似解。 · For “Sketching Slope Fields”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q056",
    "title": "7.4 符号 · 7.4 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q057",
    "title": "7.5 概念 · 7.5 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「欧拉法」，下列正确的是？ · Which of the following is correct about “Approximating Solutions Using Euler's Method”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q058",
    "title": "7.6 计算 · 7.6 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q059",
    "title": "7.7 论述 · 特解 · 7.7 Argument: Finding Particular Solutions Using Initial Conditions and Separation of Variables",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「特解」：解释欧拉法一步如何用斜率推进近似解。 · For “Finding Particular Solutions Using Initial Conditions and Separation of Variables”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q060",
    "title": "7.8 符号 · 7.8 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q061",
    "title": "7.9 概念 · 7.9 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「Logistic 模型」，下列正确的是？ · Which of the following is correct about “Logistic Models with Differential Equations”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q062",
    "title": "7.1 计算 · 7.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q063",
    "title": "7.2 论述 · 验证微分方程的解 · 7.2 Argument: Verifying Solutions for Differential Equations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「斜率场」：解释欧拉法一步如何用斜率推进近似解。 · For “slope field”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q064",
    "title": "7.3 符号 · 7.3 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q065",
    "title": "7.4 概念 · 7.4 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「斜率场推理」，下列正确的是？ · Which of the following is correct about “Reasoning Using Slope Fields”?",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向 · A slope field gives the tangent direction of a solution curve at each point",
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
    "id": "calc-u7-q066",
    "title": "7.5 计算 · 7.5 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "y'=2y,\\;y(0)=3\\Rightarrow y(1)=",
    "expected": 22.167168,
    "tol": 0.02,
    "answerLatex": "3e^{2}",
    "solution": "y=3e^{2t}。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q067",
    "title": "7.6 论述 · 可分离变量 · 7.6 Argument: Finding General Solutions Using Separation of Variables",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「可分离变量」：解释欧拉法一步如何用斜率推进近似解。 · For “Finding General Solutions Using Separation of Variables”, explain how one Euler step uses the slope to advance an approximate solution",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。 · Euler’s method starts at a known point (x_n,y_n), reads the slope m=y′(x_n,y_n) from the slope field, and steps a distance h along that tangent: y_{n+1}=y_n+h·m and x_{n+1}=x_n+h. One linear step stands in for the true solution curve, and a smaller step is usually closer.",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。 · One Euler step treats the local tangent as the solution curve; each step reads the slope again at the new point.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q068",
    "title": "7.7 符号 · 7.7 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。 · Separate variables.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u7-frq1",
    "title": "分离变量：指数增长 · separation of variables: exponential growth",
    "stimulus": {
      "title": "种群模型 · population model",
      "text": "种群数量 P(t) 满足 dP/dt=0.05P，初始数量 P(0)=200（t 以年计）。 · The population P(t) satisfies dP/dt=0.05P, with P(0)=200, and t is in years.",
      "textLatex": "\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.05P,\\qquad P(0)=200",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u7-frq1-q1",
        "type": "frq",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "通解 · general solution",
        "check": "symbolic",
        "stem": "求微分方程的通解（C 为任意常数）。 · Find the general solution of the differential equation, with C an arbitrary constant.",
        "expected": "C*e^(0.05*t)",
        "answerLatex": "P(t)=Ce^{0.05t}",
        "solution": "分离变量后两边积分，再取指数。 · Separate variables, integrate both sides, then exponentiate.",
        "solutionLatex": "\\dfrac{\\mathrm{d}P}{P}=0.05\\,\\mathrm{d}t\\Rightarrow \\ln P=0.05t+C\\Rightarrow P=Ce^{0.05t}"
      },
      {
        "id": "calc-u7-frq1-q2",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "特解 · particular solution",
        "check": "symbolic",
        "stem": "利用 P(0)=200 求特解。 · Use P(0)=200 to find the particular solution.",
        "expected": "200*e^(0.05*t)",
        "answerLatex": "P(t)=200e^{0.05t}",
        "solution": "代入 t=0：200=Ce⁰，故 C=200。 · Substitute t=0: 200=Ce⁰, so C=200."
      },
      {
        "id": "calc-u7-frq1-q3",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": true,
        "title": "倍增时间 · doubling time",
        "check": "numeric",
        "stem": "求种群数量翻倍所需时间（年，保留两位小数）。 · Find the time, in years to two decimal places, for the population to double.",
        "expected": 13.862943611198906,
        "tol": 0.01,
        "answerLatex": "t=20\\ln 2\\approx13.86",
        "solution": "令种群数量为 400，解指数方程。 · Set the population equal to 400 and solve the exponential equation.",
        "solutionLatex": "200e^{0.05t}=400\\Rightarrow e^{0.05t}=2\\Rightarrow t=\\dfrac{\\ln 2}{0.05}=20\\ln 2\\approx13.86"
      }
    ]
  }
];
