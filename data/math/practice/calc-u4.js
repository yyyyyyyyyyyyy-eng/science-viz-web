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
        "solution": "r÷h=R÷H=2÷6=⅓。"
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
        "solution": "V=⅓πr²h=⅓π(h÷3)²h=πh³÷27。"
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
        "solution": "dV/dt=(πh²÷9)dh/dt；h=3 时 π·dh/dt=2，所以 dh/dt=2÷π。"
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
        "solution": "x²+y²=100 两边对 t 求导：2x·dx/dt+2y·dy/dt=0。x=6 时 y=8，故 dy/dt=−6·2÷8=−3÷2。"
      },
      {
        "id": "calc-u4-frq1-q3",
        "type": "frq",
        "difficulty": "难",
        "calculator": false,
        "title": "面积变化率",
        "check": "numeric",
        "stem": "在同一时刻 x=6 ft，求三角形面积 A=xy÷2 的变化率 dA/dt（单位：ft²/s）。",
        "expected": 3.5,
        "tol": 0.01,
        "answerLatex": "\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=\\dfrac{7}{2}",
        "solution": "dA/dt=(x·dy/dt+y·dx/dt)÷2=(6·(−3÷2)+8·2)÷2=7÷2。"
      }
    ]
  }
];
