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
    "text": "考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(1/2)^{n-1}）。",
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
          "1/2",
          "3/2"
        ],
        [
          "3",
          "1/4",
          "7/4"
        ],
        [
          "4",
          "1/8",
          "15/8"
        ]
      ]
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  },
  "stim-calc-u10-2": {
    "title": "几何级数 · 部分和",
    "text": "考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(1/2)^{n-1}）。",
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
          "1/2",
          "3/2"
        ],
        [
          "3",
          "1/4",
          "7/4"
        ],
        [
          "4",
          "1/8",
          "15/8"
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
    "id": "calc-u10-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u10-1",
    "stimulus": {
      "title": "序列收敛 · 部分和",
      "text": "考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(1/2)^{n-1}）。",
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
            "1/2",
            "3/2"
          ],
          [
            "3",
            "1/4",
            "7/4"
          ],
          [
            "4",
            "1/8",
            "15/8"
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
        "id": "calc-u10-q001",
        "difficulty": "易",
        "calculator": false,
        "title": "几何级数",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sum_{n=0}^{\\infty}\\left(\\dfrac{1}{2}\\right)^{n}\\text{ 的和}",
        "expected": "2",
        "answerLatex": "2",
        "solution": "1/(1-1/2)=2",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u10-q002",
        "difficulty": "中",
        "calculator": false,
        "title": "比值审敛",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "a_n=\\dfrac{n!}{n^{n}}\\text{：}\\lim\\dfrac{|a_{n+1}|}{|a_n|}",
        "expected": "0",
        "answerLatex": "0",
        "solution": "→0，绝对收敛。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u10-q003",
        "difficulty": "难",
        "calculator": true,
        "title": "部分和",
        "type": "frq",
        "check": "numeric",
        "stem": "几何级数首项 1、公比 1/2：S_4=？",
        "expected": 1.875,
        "tol": 0.01,
        "answerLatex": "\\dfrac{15}{8}",
        "solution": "1+1/2+1/4+1/8=15/8。",
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
    "id": "calc-u10-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u10-2",
    "stimulus": {
      "title": "几何级数 · 部分和",
      "text": "考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(1/2)^{n-1}）。",
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
            "1/2",
            "3/2"
          ],
          [
            "3",
            "1/4",
            "7/4"
          ],
          [
            "4",
            "1/8",
            "15/8"
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
        "id": "calc-u10-q004",
        "difficulty": "易",
        "calculator": false,
        "title": "几何级数",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\sum_{n=0}^{\\infty}\\left(\\dfrac{1}{2}\\right)^{n}\\text{ 的和}",
        "expected": "2",
        "answerLatex": "2",
        "solution": "1/(1-1/2)=2",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u10-q005",
        "difficulty": "中",
        "calculator": false,
        "title": "比值审敛",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "a_n=\\dfrac{n!}{n^{n}}\\text{：}\\lim\\dfrac{|a_{n+1}|}{|a_n|}",
        "expected": "0",
        "answerLatex": "0",
        "solution": "→0，绝对收敛。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u10-q006",
        "difficulty": "难",
        "calculator": true,
        "title": "部分和",
        "type": "frq",
        "check": "numeric",
        "stem": "几何级数首项 1、公比 1/2：S_4=？",
        "expected": 1.875,
        "tol": 0.01,
        "answerLatex": "\\dfrac{15}{8}",
        "solution": "1+1/2+1/4+1/8=15/8。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u10-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "收敛叙述",
        "type": "frq",
        "stem": "就「积分检验」区分序列收敛与级数收敛。",
        "answer": "序列看 a_n→L；级数看部分和 S_n→S。",
        "solution": "必要条件 a_n→0。",
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
    "title": "10.1 论述 · 序列收敛",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「序列收敛」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q009",
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
    "id": "calc-u10-q010",
    "title": "10.3 因式化简",
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
    "id": "calc-u10-q011",
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
    "id": "calc-u10-q012",
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
    "id": "calc-u10-q013",
    "title": "10.6 论述 · 比较检验",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「比较检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q014",
    "title": "10.7 论述 · 交替级数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「交替级数」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q015",
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
    "id": "calc-u10-q016",
    "title": "10.9 因式化简",
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
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q020",
    "title": "10.13 论述 · 半径与区间",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「半径与区间」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q021",
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
    "id": "calc-u10-q022",
    "title": "10.15 因式化简",
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
    "id": "calc-u10-q023",
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
    "id": "calc-u10-q024",
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
    "id": "calc-u10-q025",
    "title": "10.3 论述 · n 项检验",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「n 项检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q026",
    "title": "10.4 论述 · 积分检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q027",
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
    "id": "calc-u10-q028",
    "title": "10.6 因式化简",
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
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q032",
    "title": "10.10 论述 · 交替级数误差",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「交替级数误差」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q033",
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
    "id": "calc-u10-q034",
    "title": "10.12 因式化简",
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
    "id": "calc-u10-q035",
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
    "id": "calc-u10-q036",
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
    "id": "calc-u10-q037",
    "title": "10.15 论述 · 幂级数运算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「幂级数运算」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q038",
    "title": "10.1 论述 · 序列收敛",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「序列收敛」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q039",
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
    "id": "calc-u10-q040",
    "title": "10.3 因式化简",
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
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q044",
    "title": "10.7 论述 · 交替级数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「交替级数」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q045",
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
    "id": "calc-u10-q046",
    "title": "10.9 因式化简",
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
    "id": "calc-u10-q047",
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
    "id": "calc-u10-q048",
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
    "id": "calc-u10-q049",
    "title": "10.12 论述 · 拉格朗日误差界",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「拉格朗日误差界」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q050",
    "title": "10.13 论述 · 半径与区间",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「半径与区间」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q051",
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
    "id": "calc-u10-q052",
    "title": "10.15 因式化简",
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
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q056",
    "title": "10.4 论述 · 积分检验",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「积分检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q057",
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
    "id": "calc-u10-q058",
    "title": "10.6 因式化简",
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
    "id": "calc-u10-q059",
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
    "id": "calc-u10-q060",
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
    "id": "calc-u10-q061",
    "title": "10.9 论述 · 绝对与条件收敛",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「绝对与条件收敛」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q062",
    "title": "10.10 论述 · 交替级数误差",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「交替级数误差」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q063",
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
    "id": "calc-u10-q064",
    "title": "10.12 因式化简",
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
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q068",
    "title": "10.1 论述 · 序列收敛",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「序列收敛」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q069",
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
    "id": "calc-u10-q070",
    "title": "10.3 因式化简",
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
    "id": "calc-u10-q071",
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
    "id": "calc-u10-q072",
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
    "id": "calc-u10-q073",
    "title": "10.6 论述 · 比较检验",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「比较检验」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q074",
    "title": "10.7 论述 · 交替级数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「交替级数」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q075",
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
    "id": "calc-u10-q076",
    "title": "10.9 因式化简",
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
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u10-q080",
    "title": "10.13 论述 · 半径与区间",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「半径与区间」：举一个条件收敛但不绝对收敛的级数例子（名称即可）。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
