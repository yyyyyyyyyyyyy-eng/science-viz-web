/** Practice bank for calc-u7 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u7",
  "code": "7",
  "titleZh": "微分方程",
  "titleEn": "Differential Equations",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u7-1": {
    "title": "微分方程建模 · 斜率场要点",
    "text": "微分方程 dy/dx = y − x 的斜率场在若干格点给出方向。",
    "table": {
      "headers": [
        "点",
        "斜率"
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
    "title": "Logistic 模型",
    "stimulus": {
      "title": "种群增长",
      "text": "某种群数量 P(t) 满足右侧微分方程，初始 P(0)=200。下表与图像给出部分时刻的数量。",
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
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u7-q001",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "求解模型",
        "check": "symbolic",
        "stem": "求 P(t) 的表达式。",
        "expected": "1200/(1+5*e^(-0.4*t))",
        "answerLatex": "P(t)=\\dfrac{1200}{1+5e^{-0.4t}}",
        "solution": "分离变量后积分，得到 logistic 通式；再由初值确定常数。",
        "solutionLatex": "P(t)=\\dfrac{L}{1+Ce^{-kt}}"
      },
      {
        "id": "calc-u7-q002",
        "type": "frq",
        "difficulty": "中",
        "calculator": true,
        "title": "模型求值",
        "check": "numeric",
        "stem": "用模型求 P(2)（保留到个位附近即可）。",
        "expected": 369.6123433001111,
        "tol": 0.001,
        "answerLatex": "≈370",
        "solution": "把 t=2 代入模型计算。",
        "solutionLatex": "P(2)=\\dfrac{1200}{1+5e^{-0.8}}\\approx370"
      },
      {
        "id": "calc-u7-q003",
        "type": "frq",
        "difficulty": "难",
        "calculator": true,
        "title": "最快增长时刻",
        "check": "numeric",
        "stem": "种群增长最快时 P=600。求对应的 t（精确到 0.01）。",
        "expected": 4.023594781085251,
        "tol": 0.005,
        "answerLatex": "t=\\dfrac{\\ln 5}{0.4}\\approx 4.02",
        "solution": "令 P=600，解指数方程。",
        "solutionLatex": "1+5e^{-0.4t}=2\\Rightarrow t=\\dfrac{\\ln 5}{0.4}\\approx4.02"
      },
      {
        "id": "calc-u7-q004",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "长期行为",
        "stem": "求 t→∞ 时 P(t) 的极限，并解释 1200 在该模型中的意义。",
        "answer": "极限为 1200；它是环境容纳量（carrying capacity），即长期可维持的最大种群数量。",
        "solution": "Logistic 模型的平衡解为 P=0 与 P=L；初值大于 0 时趋于 L。"
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u7-set1",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u7-1",
    "stimulus": {
      "title": "微分方程建模 · 斜率场要点",
      "text": "微分方程 dy/dx = y − x 的斜率场在若干格点给出方向。",
      "table": {
        "headers": [
          "点",
          "斜率"
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
        "difficulty": "易",
        "calculator": true,
        "title": "斜率读取",
        "type": "frq",
        "check": "numeric",
        "stem": "在点 (1,0) 处 dy/dx = y−x 的斜率是？",
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
        "difficulty": "中",
        "calculator": false,
        "title": "特解检验",
        "type": "frq",
        "stemLatex": "\\text{验证 }y=x+1\\text{ 是否满足 }\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=y-x",
        "answerLatex": "y'=1=y-x",
        "solution": "两边同为 1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u7-q007",
        "difficulty": "难",
        "calculator": false,
        "title": "分离变量",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=ky\\text{ 的通解（C 任意）}",
        "expected": "C*e^(k*x)",
        "answerLatex": "y=Ce^{kx}",
        "solution": "分离变量。",
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
    "title": "7.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q009",
    "title": "7.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「斜率场」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q010",
    "title": "7.3 计算",
    "type": "frq",
    "difficulty": "难",
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
    "title": "7.4 论述 · 斜率场推理",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「斜率场推理」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q012",
    "title": "7.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q013",
    "title": "7.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「可分离变量」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q014",
    "title": "7.7 计算",
    "type": "frq",
    "difficulty": "易",
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
    "title": "7.8 论述 · 指数模型",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「指数模型」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q016",
    "title": "7.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q017",
    "title": "7.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「微分方程建模」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q018",
    "title": "7.2 计算",
    "type": "frq",
    "difficulty": "中",
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
    "title": "7.3 论述 · 斜率场草图",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「斜率场草图」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q020",
    "title": "7.4 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q021",
    "title": "7.5 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「欧拉法」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q022",
    "title": "7.6 计算",
    "type": "frq",
    "difficulty": "难",
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
    "title": "7.7 论述 · 特解",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「特解」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q024",
    "title": "7.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q025",
    "title": "7.9 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「Logistic 模型」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q026",
    "title": "7.1 计算",
    "type": "frq",
    "difficulty": "易",
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
    "title": "7.2 论述 · 验证微分方程的解",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「斜率场」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q028",
    "title": "7.3 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q029",
    "title": "7.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「斜率场推理」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q030",
    "title": "7.5 计算",
    "type": "frq",
    "difficulty": "中",
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
    "title": "7.6 论述 · 可分离变量",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「可分离变量」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q032",
    "title": "7.7 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q033",
    "title": "7.8 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「指数模型」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q034",
    "title": "7.9 计算",
    "type": "frq",
    "difficulty": "难",
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
    "title": "7.1 论述 · 微分方程建模",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「微分方程建模」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q036",
    "title": "7.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q037",
    "title": "7.3 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「斜率场草图」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q038",
    "title": "7.4 计算",
    "type": "frq",
    "difficulty": "易",
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
    "title": "7.5 论述 · 欧拉法",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「欧拉法」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q040",
    "title": "7.6 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q041",
    "title": "7.7 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「特解」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q042",
    "title": "7.8 计算",
    "type": "frq",
    "difficulty": "中",
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
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「Logistic 模型」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q044",
    "title": "7.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q045",
    "title": "7.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「斜率场」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q046",
    "title": "7.3 计算",
    "type": "frq",
    "difficulty": "难",
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
    "title": "7.4 论述 · 斜率场推理",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「斜率场推理」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q048",
    "title": "7.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q049",
    "title": "7.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「可分离变量」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q050",
    "title": "7.7 计算",
    "type": "frq",
    "difficulty": "易",
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
    "title": "7.8 论述 · 指数模型",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「指数模型」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q052",
    "title": "7.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q053",
    "title": "7.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「微分方程建模」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q054",
    "title": "7.2 计算",
    "type": "frq",
    "difficulty": "中",
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
    "title": "7.3 论述 · 斜率场草图",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「斜率场草图」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q056",
    "title": "7.4 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q057",
    "title": "7.5 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「欧拉法」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q058",
    "title": "7.6 计算",
    "type": "frq",
    "difficulty": "难",
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
    "title": "7.7 论述 · 特解",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「特解」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q060",
    "title": "7.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q061",
    "title": "7.9 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「Logistic 模型」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q062",
    "title": "7.1 计算",
    "type": "frq",
    "difficulty": "易",
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
    "title": "7.2 论述 · 验证微分方程的解",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「斜率场」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q064",
    "title": "7.3 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q065",
    "title": "7.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「斜率场推理」，下列正确的是？",
    "choices": [
      {
        "text": "斜率场给出每个点的解曲线切线方向",
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
    "id": "calc-u7-q066",
    "title": "7.5 计算",
    "type": "frq",
    "difficulty": "中",
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
    "title": "7.6 论述 · 可分离变量",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「可分离变量」：解释欧拉法一步如何用斜率推进近似解。",
    "answerLatex": "y_{n+1}=y_n+h\\,y'(x_n,y_n),\\qquad x_{n+1}=x_n+h",
    "answer": "欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。",
    "solution": "一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u7-q068",
    "title": "7.7 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2y\\Rightarrow y=",
    "expected": "C*e^(2*x)",
    "answerLatex": "Ce^{2x}",
    "solution": "分离变量。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u7-frq1",
    "title": "分离变量：指数增长",
    "stimulus": {
      "title": "种群模型",
      "text": "种群数量 P(t) 满足 dP/dt=0.05P，初始数量 P(0)=200（t 以年计）。",
      "textLatex": "\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.05P,\\qquad P(0)=200",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u7-frq1-q1",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "通解",
        "check": "symbolic",
        "stem": "求微分方程的通解（C 为任意常数）。",
        "expected": "C*e^(0.05*t)",
        "answerLatex": "P(t)=Ce^{0.05t}",
        "solution": "分离变量后两边积分，再取指数。",
        "solutionLatex": "\\dfrac{\\mathrm{d}P}{P}=0.05\\,\\mathrm{d}t\\Rightarrow \\ln P=0.05t+C\\Rightarrow P=Ce^{0.05t}"
      },
      {
        "id": "calc-u7-frq1-q2",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "特解",
        "check": "symbolic",
        "stem": "利用 P(0)=200 求特解。",
        "expected": "200*e^(0.05*t)",
        "answerLatex": "P(t)=200e^{0.05t}",
        "solution": "代入 t=0：200=Ce⁰，故 C=200。"
      },
      {
        "id": "calc-u7-frq1-q3",
        "type": "frq",
        "difficulty": "中",
        "calculator": true,
        "title": "倍增时间",
        "check": "numeric",
        "stem": "求种群数量翻倍所需时间（年，保留两位小数）。",
        "expected": 13.862943611198906,
        "tol": 0.01,
        "answerLatex": "t=20\\ln 2\\approx13.86",
        "solution": "令种群数量为 400，解指数方程。",
        "solutionLatex": "200e^{0.05t}=400\\Rightarrow e^{0.05t}=2\\Rightarrow t=\\dfrac{\\ln 2}{0.05}=20\\ln 2\\approx13.86"
      }
    ]
  }
];
