/** Practice bank for calc-u4 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u4",
  "code": "4",
  "titleZh": "导数的情境应用",
  "titleEn": "Contextual Applications of Differentiation",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u4-extra1",
    "title": "相关变化率：圆锥水箱",
    "stimulus": {
      "title": "倒圆锥水箱",
      "text": "倒圆锥水箱高 6 m、顶部半径 2 m。水面高度为 h(t)，体积为 V(t)，水以 2 m³/min 注入。",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "水箱高 H",
            "6 m"
          ],
          [
            "顶部半径 R",
            "2 m"
          ],
          [
            "注入速率 dV/dt",
            "2 m³/min"
          ],
          [
            "目标水深 h",
            "3 m"
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
        "id": "calc-u4-q001",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "相似三角形",
        "check": "symbolic",
        "stemLatex": "\\text{由相似三角形，用 }h\\text{ 表示水面半径 }r",
        "expected": "h/3",
        "answerLatex": "r=\\dfrac{h}{3}",
        "solution": "由相似三角形，半径与水深之比等于顶部半径与水箱高之比。",
        "solutionLatex": "\\dfrac{r}{h}=\\dfrac{R}{H}=\\dfrac{2}{6}=\\dfrac{1}{3}"
      },
      {
        "id": "calc-u4-q002",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "体积关系",
        "check": "symbolic",
        "stemLatex": "\\text{用 }h\\text{ 表示体积 }V",
        "expected": "pi*h^3/27",
        "answerLatex": "V=\\dfrac{\\pi h^{3}}{27}",
        "solution": "把 r 用水深 h 表示后代入圆锥体积公式。",
        "solutionLatex": "V=\\dfrac{1}{3}\\pi r^{2}h=\\dfrac{1}{3}\\pi\\left(\\dfrac{h}{3}\\right)^{2}h=\\dfrac{\\pi h^{3}}{27}"
      },
      {
        "id": "calc-u4-q003",
        "type": "frq",
        "difficulty": "难",
        "calculator": true,
        "title": "求 dh/dt",
        "check": "numeric",
        "stem": "当 h=3 m 时，求 dh/dt（单位：m/min）。",
        "expected": 0.6366197723675814,
        "tol": 0.005,
        "answerLatex": "\\dfrac{2}{\\pi}",
        "solution": "对体积关系求导，再代入 h=3 与注入速率。",
        "solutionLatex": "\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}=\\dfrac{\\pi h^{2}}{9}\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}\\Rightarrow \\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=\\dfrac{2}{\\pi}"
      },
      {
        "id": "calc-u4-q004",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "单位与符号",
        "stem": "解释 dh/dt 的单位与正负号在此情境中的含义。",
        "answer": "单位是 m/min；因为水在注入，h 增大，所以 dh/dt 为正。",
        "solution": "变化率的单位是“输出单位每输入单位”。"
      }
    ]
  },
  {
    "id": "calc-u4-q005",
    "title": "4.1 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q006",
    "title": "4.2 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u4-q007",
    "title": "4.3 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q008",
    "title": "4.4 论述 · 相关变化率",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「相关变化率」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q009",
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
    "id": "calc-u4-q010",
    "title": "4.6 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u4-q011",
    "title": "4.7 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q012",
    "title": "4.1 论述 · 变化率情境",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「变化率情境」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q013",
    "title": "4.2 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q014",
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
    "id": "calc-u4-q015",
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
    "id": "calc-u4-q016",
    "title": "4.5 论述 · 相关变化率求解",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「相关变化率求解」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q017",
    "title": "4.6 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q018",
    "title": "4.7 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u4-q019",
    "title": "4.1 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q020",
    "title": "4.2 论述 · 直线运动",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「直线运动」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q021",
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
    "id": "calc-u4-q022",
    "title": "4.4 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u4-q023",
    "title": "4.5 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q024",
    "title": "4.6 论述 · 局部线性近似",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「局部线性近似」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q025",
    "title": "4.7 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q026",
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
    "id": "calc-u4-q027",
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
    "id": "calc-u4-q028",
    "title": "4.3 论述 · 变化率与单位",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「变化率与单位」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q029",
    "title": "4.4 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q030",
    "title": "4.5 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u4-q031",
    "title": "4.6 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q032",
    "title": "4.7 论述 · 洛必达法则",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「洛必达法则」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q033",
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
    "id": "calc-u4-q034",
    "title": "4.2 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u4-q035",
    "title": "4.3 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q036",
    "title": "4.4 论述 · 相关变化率",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「相关变化率」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q037",
    "title": "4.5 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q038",
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
    "id": "calc-u4-q039",
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
    "id": "calc-u4-q040",
    "title": "4.1 论述 · 变化率情境",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「变化率情境」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q041",
    "title": "4.2 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q042",
    "title": "4.3 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u4-q043",
    "title": "4.4 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q044",
    "title": "4.5 论述 · 相关变化率求解",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「相关变化率求解」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q045",
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
    "id": "calc-u4-q046",
    "title": "4.7 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u4-q047",
    "title": "4.1 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q048",
    "title": "4.2 论述 · 直线运动",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「直线运动」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q049",
    "title": "4.3 符号",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q050",
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
    "id": "calc-u4-q051",
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
    "id": "calc-u4-q052",
    "title": "4.6 论述 · 局部线性近似",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「局部线性近似」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q053",
    "title": "4.7 符号",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q054",
    "title": "4.1 概念",
    "type": "mcq",
    "difficulty": "中",
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
    "id": "calc-u4-q055",
    "title": "4.2 计算",
    "type": "frq",
    "difficulty": "难",
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
    "id": "calc-u4-q056",
    "title": "4.3 论述 · 变化率与单位",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「变化率与单位」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u4-q057",
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
    "id": "calc-u4-q058",
    "title": "4.5 概念",
    "type": "mcq",
    "difficulty": "难",
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
    "id": "calc-u4-q059",
    "title": "4.6 计算",
    "type": "frq",
    "difficulty": "易",
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
    "id": "calc-u4-q060",
    "title": "4.7 论述 · 洛必达法则",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「洛必达法则」：举一个相关变化率的实际例子并写出等式。",
    "answerLatex": "A=\\pi r^{2}\\Rightarrow\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
    "answer": "例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。",
    "solution": "先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u4-frq1",
    "title": "相关变化率：梯子",
    "stimulus": {
      "title": "靠墙的梯子",
      "text": "长 10 ft 的梯子斜靠在竖直墙面上。梯子底端离墙的距离为 x(t)，顶端离地高度为 y(t)。底端以 2 ft/s 的速度离墙滑动。",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "梯子长度",
            "10 ft"
          ],
          [
            "底端速度 dx/dt",
            "2 ft/s"
          ],
          [
            "目标位置 x",
            "6 ft"
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
        "id": "calc-u4-frq1-q1",
        "type": "frq",
        "difficulty": "易",
        "calculator": false,
        "title": "约束等式",
        "stem": "写出 x 与 y 满足的等式。",
        "answerLatex": "x^{2}+y^{2}=10^{2}",
        "answer": "由勾股定理，x²+y²=10²，即 x²+y²=100。",
        "solution": "梯子、墙与地面构成直角三角形，斜边恒为 10 ft。"
      },
      {
        "id": "calc-u4-frq1-q2",
        "type": "frq",
        "difficulty": "中",
        "calculator": false,
        "title": "顶端速度",
        "check": "numeric",
        "stem": "当 x=6 ft 时，求 dy/dt（单位：ft/s，带符号）。",
        "expected": -1.5,
        "tol": 0.01,
        "answerLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=-\\dfrac{3}{2}",
        "solution": "两边对 t 求导；x=6 时 y=8，代入底端速度。",
        "solutionLatex": "2x\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}+2y\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\Rightarrow \\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=-\\dfrac{x}{y}\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=-\\dfrac{6}{8}\\cdot2=-\\dfrac{3}{2}"
      },
      {
        "id": "calc-u4-frq1-q3",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "面积变化率",
        "check": "numeric",
        "stem": "在同一时刻 x=6 ft，求三角形面积 A（等于 x 与 y 乘积的一半）的变化率 dA/dt（单位：ft² 每秒）。",
        "expected": 3.5,
        "tol": 0.01,
        "answerLatex": "\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=\\dfrac{7}{2}",
        "solution": "对面积关系求导，再代入同一时刻的 x、y 与两个速度。",
        "solutionLatex": "\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=\\dfrac{1}{2}\\left(x\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}+y\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\right)=\\dfrac{1}{2}\\left(6\\cdot\\left(-\\dfrac{3}{2}\\right)+8\\cdot2\\right)=\\dfrac{7}{2}"
      }
    ]
  },
  {
    "id": "calc-u4-b08-q1",
    "title": "4.1 导数的情境含义 · Meaning of a derivative in context",
    "type": "mcq",
    "difficulty": "易",
    "calculator": false,
    "stem": "设 C(x) 是生产 x 件产品的总成本（美元），且 C′(200)=15。下列哪项正确？ · Let C(x) be the total cost in dollars of producing x items, with C′(200)=15. Which statement is correct?",
    "choices": [
      {
        "text": "生产 200 件产品的总成本是 15 美元 · The total cost of 200 items is $15",
        "correct": false
      },
      {
        "text": "当产量为 200 件时，成本约以每多生产 1 件 15 美元的速度增加 · At a production level of 200 items, cost is increasing at about $15 per additional item",
        "correct": true
      },
      {
        "text": "生产 200 件产品时的平均成本是每件 15 美元 · The average cost at 200 items is $15 per item",
        "correct": false
      },
      {
        "text": "再生产的下一件产品一定恰好增加 15 美元成本 · The next item will increase cost by exactly $15",
        "correct": false
      }
    ],
    "solution": "导数是瞬时变化率，不是函数值，也不是平均变化率。C′(200)=15 表示在 x=200 附近，每多生产 1 件，成本约增加 15 美元；单位是“美元/件”。 · A derivative is an instantaneous rate, not a function value or an average rate. C′(200)=15 means that near x=200, each additional item raises cost by about $15; the unit is dollars per item.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 4.1 导数取值与变化率的区别。",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u4/4.1",
        "label": "4.1 变化率情境",
        "topicId": "calc-u4:4.1"
      }
    ]
  },
  {
    "id": "calc-u4-b08-q2",
    "title": "4.2 直线运动的速度 · Velocity in straight-line motion",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "质点沿直线运动，位置 s(t)=t³−6t²+9t（米，秒）。求 t=2 时的速度 v(2)（m/s，带符号）。 · A particle moves along a line with position s(t)=t³−6t²+9t (meters, seconds). Find its velocity v(2) at t=2 (m/s, with sign).",
    "expected": -3,
    "tol": 0.01,
    "answerLatex": "v(2)=-3\\,\\mathrm{m/s}",
    "solution": "v(t)=s′(t)=3t²−12t+9，所以 v(2)=12−24+9=−3 m/s。负号表示质点在 t=2 时沿负方向运动。 · v(t)=s′(t)=3t²−12t+9, so v(2)=12−24+9=−3 m/s. The negative sign means the particle moves in the negative direction at t=2.",
    "solutionLatex": "v(t)=3t^{2}-12t+9,\\qquad v(2)=3(2)^{2}-12(2)+9=-3\\,\\mathrm{m/s}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 4.2 位置—速度—加速度。",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u4/4.2",
        "label": "4.2 直线运动",
        "topicId": "calc-u4:4.2"
      }
    ]
  },
  {
    "id": "calc-u4-b08-q3",
    "title": "4.3 边际成本 · Marginal cost",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "某产品的总成本为 C(x)=0.01x³−0.6x²+13x（美元，x 为件数）。求 x=20 时的边际成本 C′(20)（美元/件）。 · A product's total cost is C(x)=0.01x³−0.6x²+13x (dollars, x in items). Find the marginal cost C′(20) at x=20 (dollars per item).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "C'(20)=1",
    "solution": "C′(x)=0.03x²−1.2x+13，代入 x=20 得 C′(20)=12−24+13=1。即产量约为 20 件时，每多生产 1 件成本约增加 1 美元。 · C′(x)=0.03x²−1.2x+13; at x=20, C′(20)=12−24+13=1. At a production level near 20 items, cost rises by about $1 per additional item.",
    "solutionLatex": "C'(x)=0.03x^{2}-1.2x+13,\\qquad C'(20)=0.03(20)^{2}-1.2(20)+13=1",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 4.3 应用情境中的变化率与单位。",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u4/4.3",
        "label": "4.3 变化率与单位",
        "topicId": "calc-u4:4.3"
      }
    ]
  },
  {
    "id": "calc-u4-b08-q4",
    "title": "4.6 局部线性近似 · Local linear approximation",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "设 f(x)=√x，在 a=4 处取切线 L(x)=f(4)+f′(4)(x−4)。用 L(4.41) 估计 √4.41。 · Let f(x)=√x and use the tangent line at a=4, L(x)=f(4)+f′(4)(x−4), to estimate √4.41 via L(4.41).",
    "expected": 2.1025,
    "tol": 0.001,
    "answerLatex": "L(4.41)=2.1025",
    "solution": "f(4)=2，f′(x)=1/(2√x)，f′(4)=1/4，所以 L(x)=2+0.25(x−4)。L(4.41)=2+0.25(0.41)=2.1025。由于 √x 在 x=4 附近上凸（concave down），切线在曲线上方，故这是高估；实际 √4.41=2.1。 · f(4)=2, f′(x)=1/(2√x), f′(4)=1/4, so L(x)=2+0.25(x−4). Thus L(4.41)=2+0.25(0.41)=2.1025. Because √x is concave down near x=4, the tangent lies above the curve, so this overestimates; actually √4.41=2.1.",
    "solutionLatex": "L(x)=2+\\dfrac{1}{4}(x-4),\\qquad L(4.41)=2+\\dfrac{0.41}{4}=2.1025",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 4.6 切线近似与凹凸性判断。",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u4/4.6",
        "label": "4.6 局部线性近似",
        "topicId": "calc-u4:4.6"
      }
    ]
  },
  {
    "id": "calc-u4-b09-q1",
    "title": "4.6 切线近似的过高或过低估计 · Over- or under-estimate from concavity",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "设 f 在 a=2 附近二阶可导，且 f′(x) 在 a 附近严格递增。用 a=2 处的切线 L(x) 近似 f(2.1)。下列哪项正确？ · Let f be twice differentiable near a=2 and suppose f′(x) is strictly increasing near a. Use the tangent line L(x) at a=2 to approximate f(2.1). Which statement is correct?",
    "choices": [
      {
        "text": "L(2.1) 是低估，因为 f″(2)>0，曲线在切线之上 · L(2.1) is an underestimate because f″(2)>0 and the curve lies above the tangent",
        "correct": true
      },
      {
        "text": "L(2.1) 是高估，因为 f′ 递增 · L(2.1) is an overestimate because f′ is increasing",
        "correct": false
      },
      {
        "text": "无法判断，必须知道 f(2) 的值 · Cannot decide without knowing f(2)",
        "correct": false
      },
      {
        "text": "L(2.1)=f(2.1)，因为切线在 a 处与曲线相切 · L(2.1)=f(2.1) because the tangent touches the curve at a",
        "correct": false
      }
    ],
    "solution": "f′ 递增意味着 f″>0，曲线在 a 附近凹向上，切线位于曲线下方，所以 L(2.1)≤f(2.1)，是低估。f(2) 只影响切线的高度，不改变凹凸性判断。 · f′ increasing means f″>0, so the curve is concave up near a and the tangent lies below it; hence L(2.1)≤f(2.1), an underestimate. The value f(2) shifts the tangent but does not change the concavity conclusion.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 4.6 局部线性近似与凹凸性判定。",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u4/4.6",
        "label": "4.6 局部线性近似",
        "topicId": "calc-u4:4.6"
      }
    ]
  }
];
