/** Practice bank for calc-u3 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u3",
  "code": "3",
  "titleZh": "复合、隐函数与反函数导数",
  "titleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u3-extra1",
    "title": "链式、反函数与隐函数导数",
    "stimulus": {
      "title": "函数数据与隐式曲线",
      "text": "可微函数 f 满足下表数据；另有一条隐式曲线 C。",
      "table": {
        "headers": [
          "x",
          "f(x)",
          "f'(x)"
        ],
        "rows": [
          [
            "2",
            "5",
            "−3"
          ],
          [
            "4",
            "1",
            "2"
          ]
        ]
      },
      "graph": {
        "points": [
          [
            2,
            5
          ],
          [
            4,
            1
          ]
        ],
        "xLabel": "x",
        "yLabel": "f"
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。"
    },
    "questions": [
      {
        "id": "calc-u3-q001",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "链式法则",
        "check": "numeric",
        "stemLatex": "\\text{求 }\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f\\left(x^{2}\\right)\\right]\\text{ 在 }x=2\\text{ 处的值}",
        "expected": 8,
        "tol": 0.01,
        "answerLatex": "8",
        "solution": "f′(x²)·2x，在 x=2 时为 f′(4)·4=2·4=8。"
      },
      {
        "id": "calc-u3-q002",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "反函数导数",
        "check": "numeric",
        "stemLatex": "\\text{求 }\\left(f^{-1}\\right)'(5)",
        "expected": -0.3333333333333333,
        "tol": 0.01,
        "answerLatex": "-\\dfrac{1}{3}",
        "solution": "由反函数定理，导数为原函数导数的倒数。",
        "solutionLatex": "\\left(f^{-1}\\right)'(5)=\\dfrac{1}{f'(2)}=-\\dfrac{1}{3}"
      },
      {
        "id": "calc-u3-q003",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "隐函数求导",
        "check": "numeric",
        "stem": "曲线 C 由 x²+xy+y²=7 给出。求 C 在点 (1,2) 处的 dy/dx。",
        "expected": -0.8,
        "tol": 0.01,
        "answerLatex": "-\\dfrac{4}{5}",
        "solution": "隐式求导后代入点 (1,2)。",
        "solutionLatex": "2x+y+(x+2y)y'=0\\Rightarrow y'=-\\dfrac{4}{5}"
      },
      {
        "id": "calc-u3-q004",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "隐式切线",
        "check": "symbolic",
        "stem": "求曲线 C 在点 (1,2) 处的切线方程，写成 y=… 右侧的表达式。",
        "expected": "-4/5*x+14/5",
        "answerLatex": "y=-\\dfrac{4}{5}x+\\dfrac{14}{5}",
        "solution": "由点斜式得切线方程。",
        "solutionLatex": "y-2=-\\dfrac{4}{5}(x-1)\\Rightarrow y=-\\dfrac{4}{5}x+\\dfrac{14}{5}"
      }
    ]
  },
  {
    "id": "calc-u3-q005",
    "title": "3.1 链式法则 · 变式",
    "difficulty": "易",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q006",
    "title": "3.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q007",
    "title": "3.3 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「反函数导数」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q008",
    "title": "3.4 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q009",
    "title": "3.5 论述 · 高阶导数选讲",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「高阶导数选讲」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q010",
    "title": "3.6 高阶导数 · 变式",
    "difficulty": "难",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q011",
    "title": "3.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q012",
    "title": "3.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「隐函数求导」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q013",
    "title": "3.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q014",
    "title": "3.4 论述 · 反三角函数导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「反三角函数导数」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q015",
    "title": "3.5 高阶导数选讲 · 变式",
    "difficulty": "中",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q016",
    "title": "3.6 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q017",
    "title": "3.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「链式法则」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q018",
    "title": "3.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q019",
    "title": "3.3 论述 · 反函数导数",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「反函数导数」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q020",
    "title": "3.4 反三角函数导数 · 变式",
    "difficulty": "易",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q021",
    "title": "3.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q022",
    "title": "3.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「高阶导数」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q023",
    "title": "3.1 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q024",
    "title": "3.2 论述 · 隐函数求导",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「隐函数求导」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q025",
    "title": "3.3 反函数导数 · 变式",
    "difficulty": "难",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q026",
    "title": "3.4 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q027",
    "title": "3.5 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「高阶导数选讲」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q028",
    "title": "3.6 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q029",
    "title": "3.1 论述 · 链式法则",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「链式法则」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q030",
    "title": "3.2 隐函数求导 · 变式",
    "difficulty": "中",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q031",
    "title": "3.3 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q032",
    "title": "3.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「反三角函数导数」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q033",
    "title": "3.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q034",
    "title": "3.6 论述 · 高阶导数",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「高阶导数」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q035",
    "title": "3.1 链式法则 · 变式",
    "difficulty": "易",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q036",
    "title": "3.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q037",
    "title": "3.3 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「反函数导数」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q038",
    "title": "3.4 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q039",
    "title": "3.5 论述 · 高阶导数选讲",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「高阶导数选讲」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q040",
    "title": "3.6 高阶导数 · 变式",
    "difficulty": "难",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q041",
    "title": "3.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q042",
    "title": "3.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「隐函数求导」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q043",
    "title": "3.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q044",
    "title": "3.4 论述 · 反三角函数导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「反三角函数导数」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q045",
    "title": "3.5 高阶导数选讲 · 变式",
    "difficulty": "中",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q046",
    "title": "3.6 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q047",
    "title": "3.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「链式法则」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q048",
    "title": "3.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q049",
    "title": "3.3 论述 · 反函数导数",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「反函数导数」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q050",
    "title": "3.4 反三角函数导数 · 变式",
    "difficulty": "易",
    "generator": "chain",
    "calculator": false,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q051",
    "title": "3.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q052",
    "title": "3.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「高阶导数」，下列正确的是？",
    "choices": [
      {
        "text": "链式法则把复合函数的导数分解为外层导数与内层导数之积",
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
    "id": "calc-u3-q053",
    "title": "3.1 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "f(x)=\\left(x^{2}+1\\right)^{3},\\;f'(1)=",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24",
    "solution": "链式法则：3(x²+1)²·2x，在 x=1 得 24。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q054",
    "title": "3.2 论述 · 隐函数求导",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「隐函数求导」：用链式法则解释复合函数求导的顺序，并举一个例子。",
    "answerLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(g(x))=f'(g(x))g'(x)",
    "answer": "复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。",
    "solution": "由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q055",
    "title": "3.3 反函数导数 · 变式",
    "difficulty": "难",
    "generator": "chain",
    "calculator": true,
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u3-q056",
    "title": "3.4 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\sin\\left(x^{2}\\right)=",
    "expected": "2x cos(x^2)",
    "answerLatex": "2x\\cos\\left(x^{2}\\right)",
    "solution": "链式法则：外层余弦乘以内层导数 2x。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
