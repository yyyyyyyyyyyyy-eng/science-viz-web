/** Practice bank for calc-u9 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u9",
  "code": "9",
  "titleZh": "参数、极坐标与向量",
  "titleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {
  "stim-calc-u9-1": {
    "title": "参数运动导数 · 参数路径",
    "text": "粒子路径 x(t)=t², y(t)=t³ − 3t（t≥0）。",
    "table": {
      "headers": [
        "t",
        "x",
        "y"
      ],
      "rows": [
        [
          "0",
          "0",
          "0"
        ],
        [
          "1",
          "1",
          "−2"
        ],
        [
          "2",
          "4",
          "2"
        ]
      ]
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  },
  "stim-calc-u9-2": {
    "title": "参数二阶导数 · 参数路径",
    "text": "粒子路径 x(t)=t², y(t)=t³ − 3t（t≥0）。",
    "table": {
      "headers": [
        "t",
        "x",
        "y"
      ],
      "rows": [
        [
          "0",
          "0",
          "0"
        ],
        [
          "1",
          "1",
          "−2"
        ],
        [
          "2",
          "4",
          "2"
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
    "id": "calc-u9-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-calc-u9-1",
    "stimulus": {
      "title": "参数运动导数 · 参数路径",
      "text": "粒子路径 x(t)=t², y(t)=t³ − 3t（t≥0）。",
      "table": {
        "headers": [
          "t",
          "x",
          "y"
        ],
        "rows": [
          [
            "0",
            "0",
            "0"
          ],
          [
            "1",
            "1",
            "−2"
          ],
          [
            "2",
            "4",
            "2"
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
        "id": "calc-u9-q001",
        "difficulty": "易",
        "calculator": false,
        "title": "速度分量",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "x=t^{2},\\;y=t^{3}-3t\\text{：求 }\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\text{（用 }t\\text{ 表示）}",
        "expected": "(3t^2-3)/(2t)",
        "answerLatex": "\\dfrac{3t^{2}-3}{2t}",
        "solution": "(dy/dt)/(dx/dt)。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u9-q002",
        "difficulty": "中",
        "calculator": true,
        "title": "水平切线",
        "type": "frq",
        "check": "numeric",
        "stem": "dy/dt=0 且 dx/dt≠0 时 t 的一个正解？",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "3t²−3=0 ⇒ t=±1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u9-q003",
        "difficulty": "难",
        "calculator": false,
        "title": "弧长被积",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{弧长元 }\\sqrt{(x')^{2}+(y')^{2}}\\text{（}x=t^{2},y=t^{3}-3t\\text{）}",
        "expected": "sqrt(4t^2+(3t^2-3)^2)",
        "answerLatex": "\\sqrt{4t^{2}+(3t^{2}-3)^{2}}",
        "solution": "定义。",
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
    "id": "calc-u9-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-calc-u9-2",
    "stimulus": {
      "title": "参数二阶导数 · 参数路径",
      "text": "粒子路径 x(t)=t², y(t)=t³ − 3t（t≥0）。",
      "table": {
        "headers": [
          "t",
          "x",
          "y"
        ],
        "rows": [
          [
            "0",
            "0",
            "0"
          ],
          [
            "1",
            "1",
            "−2"
          ],
          [
            "2",
            "4",
            "2"
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
        "id": "calc-u9-q004",
        "difficulty": "易",
        "calculator": false,
        "title": "速度分量",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "x=t^{2},\\;y=t^{3}-3t\\text{：求 }\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\text{（用 }t\\text{ 表示）}",
        "expected": "(3t^2-3)/(2t)",
        "answerLatex": "\\dfrac{3t^{2}-3}{2t}",
        "solution": "(dy/dt)/(dx/dt)。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u9-q005",
        "difficulty": "中",
        "calculator": true,
        "title": "水平切线",
        "type": "frq",
        "check": "numeric",
        "stem": "dy/dt=0 且 dx/dt≠0 时 t 的一个正解？",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1",
        "solution": "3t²−3=0 ⇒ t=±1。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u9-q006",
        "difficulty": "难",
        "calculator": false,
        "title": "弧长被积",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{弧长元 }\\sqrt{(x')^{2}+(y')^{2}}\\text{（}x=t^{2},y=t^{3}-3t\\text{）}",
        "expected": "sqrt(4t^2+(3t^2-3)^2)",
        "answerLatex": "\\sqrt{4t^{2}+(3t^{2}-3)^{2}}",
        "solution": "定义。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "calc-u9-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "概念",
        "type": "frq",
        "stem": "说明「向量值函数」中参数 t 与轨迹几何的关系。",
        "answer": "同一轨迹可不同参数化；速度沿切向。",
        "solution": "参数化。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "calc-u9-q008",
    "title": "9.1 论述 · 参数运动导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「参数运动导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q009",
    "title": "9.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q010",
    "title": "9.3 因式化简",
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
    "id": "calc-u9-q011",
    "title": "9.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「向量值函数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q012",
    "title": "9.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q013",
    "title": "9.6 论述 · 向量运动解题",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「向量运动解题」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q014",
    "title": "9.7 论述 · 极坐标导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「极坐标导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q015",
    "title": "9.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q016",
    "title": "9.9 因式化简",
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
    "id": "calc-u9-q017",
    "title": "9.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「参数运动导数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q018",
    "title": "9.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q019",
    "title": "9.3 论述 · 参数弧长",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「参数弧长」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q020",
    "title": "9.4 论述 · 向量值函数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「向量值函数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q021",
    "title": "9.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q022",
    "title": "9.6 因式化简",
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
    "id": "calc-u9-q023",
    "title": "9.7 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「极坐标导数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q024",
    "title": "9.8 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q025",
    "title": "9.9 论述 · 两极曲线间面积",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「两极曲线间面积」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q026",
    "title": "9.1 论述 · 参数运动导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「参数运动导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q027",
    "title": "9.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q028",
    "title": "9.3 因式化简",
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
    "id": "calc-u9-q029",
    "title": "9.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「向量值函数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q030",
    "title": "9.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q031",
    "title": "9.6 论述 · 向量运动解题",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「向量运动解题」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q032",
    "title": "9.7 论述 · 极坐标导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「极坐标导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q033",
    "title": "9.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q034",
    "title": "9.9 因式化简",
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
    "id": "calc-u9-q035",
    "title": "9.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「参数运动导数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q036",
    "title": "9.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q037",
    "title": "9.3 论述 · 参数弧长",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「参数弧长」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q038",
    "title": "9.4 论述 · 向量值函数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「向量值函数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q039",
    "title": "9.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q040",
    "title": "9.6 因式化简",
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
    "id": "calc-u9-q041",
    "title": "9.7 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「极坐标导数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q042",
    "title": "9.8 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q043",
    "title": "9.9 论述 · 两极曲线间面积",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「两极曲线间面积」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q044",
    "title": "9.1 论述 · 参数运动导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「参数运动导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q045",
    "title": "9.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q046",
    "title": "9.3 因式化简",
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
    "id": "calc-u9-q047",
    "title": "9.4 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「向量值函数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q048",
    "title": "9.5 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q049",
    "title": "9.6 论述 · 向量运动解题",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「向量运动解题」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q050",
    "title": "9.7 论述 · 极坐标导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「极坐标导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q051",
    "title": "9.8 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q052",
    "title": "9.9 因式化简",
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
    "id": "calc-u9-q053",
    "title": "9.1 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「参数运动导数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q054",
    "title": "9.2 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q055",
    "title": "9.3 论述 · 参数弧长",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「参数弧长」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q056",
    "title": "9.4 论述 · 向量值函数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「向量值函数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q057",
    "title": "9.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q058",
    "title": "9.6 因式化简",
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
    "id": "calc-u9-q059",
    "title": "9.7 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「极坐标导数」，下列正确的是？",
    "choices": [
      {
        "text": "dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）",
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
    "id": "calc-u9-q060",
    "title": "9.8 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "x=t^{2},y=t^{3}\\text{ 在 }t=1\\text{ 的 }\\dfrac{dy}{dx}",
    "expected": 1.5,
    "tol": 0.02,
    "answerLatex": "\\dfrac{3}{2}",
    "solution": "(3t²)/(2t)=3/2。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q061",
    "title": "9.9 论述 · 两极曲线间面积",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「两极曲线间面积」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q062",
    "title": "9.1 论述 · 参数运动导数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「参数运动导数」：说明同一曲线不同参数化时 dy/dx 不变的原因。",
    "answer": "结合本单元定义与定理作答；写出关键公式时使用堆叠分式。",
    "solution": "评分看定义准确性与推理链。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q063",
    "title": "9.2 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "x=\\cos t,\\;y=\\sin t:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=",
    "expected": "-cot t",
    "answerLatex": "-\\cot t",
    "solution": "(cos t)/(-sin t)。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u9-q064",
    "title": "9.3 因式化简",
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
  }
];
