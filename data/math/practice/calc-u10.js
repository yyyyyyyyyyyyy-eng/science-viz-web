/** Practice bank for calc-u10 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u10",
  "code": "10",
  "titleZh": "无穷序列与级数",
  "titleEn": "Infinite Sequences and Series",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u10-1": {
    "title": "序列收敛 · 部分和",
    "text": "考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(0.5)^{n−1}）。",
    "table": {
      "headers": [
        "n",
        "a_n",
        "S_n"
      ],
      "rows": [
        [
          "1",
          "1",
          "1"
        ],
        [
          "2",
          "0.5",
          "1.5"
        ],
        [
          "3",
          "0.25",
          "1.75"
        ],
        [
          "4",
          "0.125",
          "1.875"
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
    "id": "calc-u10-extra1",
    "title": "交替级数与泰勒误差",
    "stimulus": {
      "title": "部分和与指数函数",
      "text": "考虑右侧交替级数，部分和为 S_N；另设 f(x)=eˣ。下表给出部分和的数值。",
      "textLatex": "S=\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n^{3}}",
      "table": {
        "headers": [
          "N",
          "S_N"
        ],
        "rows": [
          [
            "1",
            "1"
          ],
          [
            "2",
            "0.875"
          ],
          [
            "3",
            "0.9120"
          ],
          [
            "4",
            "0.8964"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            1,
            1
          ],
          [
            2,
            0.875
          ],
          [
            3,
            0.912
          ],
          [
            4,
            0.8964
          ]
        ],
        "xLabel": "N",
        "yLabel": "S_N"
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u10-q001",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "绝对收敛",
        "stem": "判断 S 是否绝对收敛，并说明理由。",
        "answer": "绝对收敛。取绝对值后得到 p=3 的 p 级数，而 p=3>1，所以收敛。",
        "solution": "绝对收敛看 ∑|a_n|；p 级数在 p>1 时收敛。"
      },
      {
        "id": "calc-u10-q002",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "交替级数误差",
        "check": "numeric",
        "stem": "用交替级数误差界估计 |S−S₃| 的上界。",
        "expected": 0.015625,
        "tol": 0.01,
        "answerLatex": "\\dfrac{1}{64}",
        "solution": "误差不超过下一个被舍去项的绝对值。",
        "solutionLatex": "|S-S_3|\\le|a_4|=\\dfrac{1}{4^{3}}=\\dfrac{1}{64}"
      },
      {
        "id": "calc-u10-q003",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "三阶泰勒多项式",
        "check": "symbolic",
        "stemLatex": "\\text{写出 }e^{x}\\text{ 在 }x=0\\text{ 处的三阶泰勒多项式 }P_3(x)",
        "expected": "1+x+x^2/2+x^3/6",
        "answerLatex": "P_3(x)=1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}",
        "solution": "逐阶求导并在 0 处取值。"
      },
      {
        "id": "calc-u10-q004",
        "type": "frq",
        "difficulty": "难",
        "calculator": true,
        "title": "拉格朗日误差界",
        "check": "numeric",
        "stem": "用拉格朗日误差界估计 |e^{0.2}−P₃(0.2)| 的上界（用科学计数法，保留三位有效数字）。",
        "expected": 0.00008142685054401135,
        "tol": 0.02,
        "answerLatex": "8.14\\times 10^{-5}",
        "solution": "用拉格朗日余项公式估计。",
        "solutionLatex": "|R_3|\\le e^{0.2}\\cdot\\dfrac{0.2^{4}}{4!}\\approx8.14\\times10^{-5}"
      }
    ]
  },
  {
    "kind": "set",
    "id": "calc-u10-set1",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u10-1",
    "stimulus": {
      "title": "序列收敛 · 部分和",
      "text": "考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(0.5)^{n−1}）。",
      "table": {
        "headers": [
          "n",
          "a_n",
          "S_n"
        ],
        "rows": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "0.5",
            "1.5"
          ],
          [
            "3",
            "0.25",
            "1.75"
          ],
          [
            "4",
            "0.125",
            "1.875"
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
        "id": "calc-u10-q005",
        "difficulty": "易",
        "calculator": false,
        "title": "几何级数",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sum_{n=0}^{\\infty}\\left(\\dfrac{1}{2}\\right)^{n}\\text{ 的和}",
        "expected": "2",
        "answerLatex": "2",
        "solution": "几何级数求和：首项为 1，公比为二分之一。",
        "solutionLatex": "\\sum_{n=0}^{\\infty}\\left(\\dfrac{1}{2}\\right)^{n}=\\dfrac{1}{1-\\dfrac{1}{2}}=2",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u10-q006",
        "difficulty": "中",
        "calculator": false,
        "title": "比值审敛",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "a_n=\\dfrac{n!}{n^{n}}\\text{：}\\lim\\dfrac{|a_{n+1}|}{|a_n|}",
        "expected": "1/E",
        "answerLatex": "\\dfrac{1}{e}",
        "solution": "比值极限为 e 的倒数（约 0.368），小于 1，故绝对收敛。",
        "solutionLatex": "\\lim_{n\\to\\infty}\\dfrac{|a_{n+1}|}{|a_n|}=\\dfrac{1}{e}<1\\Rightarrow\\text{绝对收敛}",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u10-q007",
        "difficulty": "难",
        "calculator": true,
        "title": "部分和",
        "type": "frq",
        "check": "numeric",
        "stem": "几何级数首项 1、公比为二分之一：S_4=？",
        "expected": 1.875,
        "tol": 0.01,
        "answerLatex": "\\dfrac{15}{8}",
        "solution": "逐项相加得 1.875。",
        "solutionLatex": "1+\\dfrac{1}{2}+\\dfrac{1}{4}+\\dfrac{1}{8}=\\dfrac{15}{8}=1.875",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u10-q008",
    "title": "10.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q009",
    "title": "10.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「几何级数」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q010",
    "title": "10.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q011",
    "title": "10.4 论述 · 积分检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q012",
    "title": "10.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q013",
    "title": "10.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「比较检验」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q014",
    "title": "10.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q015",
    "title": "10.8 论述 · 比值检验",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「比值检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q016",
    "title": "10.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q017",
    "title": "10.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「交替级数误差」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q018",
    "title": "10.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q019",
    "title": "10.12 论述 · 拉格朗日误差界",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「拉格朗日误差界」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q020",
    "title": "10.13 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q021",
    "title": "10.14 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「函数表示为幂级数」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q022",
    "title": "10.15 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q023",
    "title": "10.1 论述 · 序列收敛",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「序列收敛」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q024",
    "title": "10.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q025",
    "title": "10.3 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「n 项检验」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q026",
    "title": "10.4 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q027",
    "title": "10.5 论述 · 调和级数与 p 级数",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「调和级数与 p 级数」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q028",
    "title": "10.6 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q029",
    "title": "10.7 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「交替级数」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q030",
    "title": "10.8 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q031",
    "title": "10.9 论述 · 绝对与条件收敛",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「绝对与条件收敛」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q032",
    "title": "10.10 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q033",
    "title": "10.11 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「泰勒多项式导论」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q034",
    "title": "10.12 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q035",
    "title": "10.13 论述 · 半径与区间",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「半径与区间」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q036",
    "title": "10.14 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q037",
    "title": "10.15 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「幂级数运算」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q038",
    "title": "10.1 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q039",
    "title": "10.2 论述 · 几何级数",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「几何级数」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q040",
    "title": "10.3 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q041",
    "title": "10.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「积分检验」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q042",
    "title": "10.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q043",
    "title": "10.6 论述 · 比较检验",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「比较检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q044",
    "title": "10.7 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q045",
    "title": "10.8 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「比值检验」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q046",
    "title": "10.9 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q047",
    "title": "10.10 论述 · 交替级数误差",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「交替级数误差」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q048",
    "title": "10.11 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q049",
    "title": "10.12 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「拉格朗日误差界」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q050",
    "title": "10.13 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q051",
    "title": "10.14 论述 · 函数表示为幂级数",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「函数表示为幂级数」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q052",
    "title": "10.15 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q053",
    "title": "10.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「序列收敛」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q054",
    "title": "10.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q055",
    "title": "10.3 论述 · n 项检验",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「n 项检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q056",
    "title": "10.4 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q057",
    "title": "10.5 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「调和级数与 p 级数」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q058",
    "title": "10.6 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q059",
    "title": "10.7 论述 · 交替级数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「交替级数」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q060",
    "title": "10.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q061",
    "title": "10.9 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「绝对与条件收敛」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q062",
    "title": "10.10 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q063",
    "title": "10.11 论述 · 泰勒多项式导论",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「泰勒多项式导论」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q064",
    "title": "10.12 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q065",
    "title": "10.13 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「半径与区间」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q066",
    "title": "10.14 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q067",
    "title": "10.15 论述 · 幂级数运算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「幂级数运算」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q068",
    "title": "10.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q069",
    "title": "10.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「几何级数」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q070",
    "title": "10.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q071",
    "title": "10.4 论述 · 积分检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q072",
    "title": "10.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q073",
    "title": "10.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「比较检验」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q074",
    "title": "10.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q075",
    "title": "10.8 论述 · 比值检验",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「比值检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q076",
    "title": "10.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q077",
    "title": "10.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「交替级数误差」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q078",
    "title": "10.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q079",
    "title": "10.12 论述 · 拉格朗日误差界",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「拉格朗日误差界」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q080",
    "title": "10.13 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q081",
    "title": "10.14 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「函数表示为幂级数」，下列正确的是？",
    "choices": [
      {
        "text": "a_n→0 是级数收敛的必要条件而非充分条件",
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
    "id": "calc-u10-q082",
    "title": "10.15 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\sum_{n=0}^{3}\\left(\\dfrac{1}{2}\\right)^{n}",
    "expected": 1.875,
    "tol": 0.02,
    "answerLatex": "\\dfrac{15}{8}",
    "solution": "几何部分和。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q083",
    "title": "10.1 论述 · 序列收敛",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「序列收敛」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answerLatex": "\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{n}",
    "answer": "交错调和级数：第 n 项为 (−1)ⁿ 乘以 n 的倒数。它按交错级数判别法收敛，但取绝对值后就是调和级数（各项为 n 的倒数），发散，所以条件收敛而不绝对收敛。",
    "solution": "条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q084",
    "title": "10.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\sum_{n=0}^{\\infty}x^{n}\\ (|x|<1)",
    "expected": "1/(1-x)",
    "answerLatex": "\\dfrac{1}{1-x}",
    "solution": "几何级数。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u10-frq1",
    "title": "ln(1+x) 的级数与收敛区间",
    "stimulus": {
      "title": "对数函数的麦克劳林级数",
      "text": "已知 ln(1+x) 在 |x|<1 上可展开为交错幂级数。",
      "textLatex": "\\ln(1+x)=\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}x^{n}}{n}\\quad(|x|<1)",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u10-frq1-q1",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "前三项",
        "check": "symbolic",
        "stem": "写出 ln(1+x) 的麦克劳林级数从 x 的一次项开始的前三项。",
        "expected": "x-x^2/2+x^3/3",
        "answerLatex": "x-\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{3}",
        "solution": "代入 n=1,2,3，见下式。",
        "solutionLatex": "\\ln(1+x)=x-\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{3}-\\cdots"
      },
      {
        "id": "calc-u10-frq1-q2",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "数值估计",
        "check": "numeric",
        "stem": "用前三项估计 ln(1.2)（保留四位小数）。",
        "expected": 0.18266666666666667,
        "tol": 0.001,
        "answerLatex": "\\approx0.1827",
        "solution": "用前三项计算；下一项的绝对值给出误差上界。",
        "solutionLatex": "0.2-\\dfrac{0.2^{2}}{2}+\\dfrac{0.2^{3}}{3}\\approx0.1827,\\qquad \\dfrac{0.2^{4}}{4}=0.0004"
      },
      {
        "id": "calc-u10-frq1-q3",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "收敛区间",
        "stemLatex": "\\text{求 }\\sum_{n=1}^{\\infty}\\dfrac{(x-1)^{n}}{n\\,3^{n}}\\text{ 的收敛区间}",
        "answerLatex": "x\\in[-2,4)",
        "answer": "由比值审敛法得半径 R=3 与开区间 (−2,4)。端点 x=−2 时化为交错调和级数，条件收敛；x=4 时为调和级数，发散。故收敛区间为 [−2,4)。",
        "solution": "先求半径，再分别检验两个端点。",
        "solutionLatex": "\\dfrac{|x-1|}{3}<1\\Rightarrow -2<x<4"
      }
    ]
  }
];
