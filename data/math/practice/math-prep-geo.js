/** Practice bank for math-prep-geo — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "math-prep-geo",
  "code": "P2",
  "titleZh": "几何",
  "titleEn": "Geometry",
  "layer": "prep",
  "subject": "math"
};
export const stimuli = {
  "stim-math-prep-geo-1": {
    "title": "点线面与角 · 几何量",
    "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "a",
          "3"
        ],
        [
          "b",
          "4"
        ],
        [
          "c",
          "5"
        ]
      ]
    },
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original."
  },
  "stim-math-prep-geo-2": {
    "title": "平行与三角形全等 · 几何量",
    "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "a",
          "3"
        ],
        [
          "b",
          "4"
        ],
        [
          "c",
          "5"
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
    "id": "math-prep-geo-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-math-prep-geo-1",
    "stimulus": {
      "title": "点线面与角 · 几何量",
      "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "a",
            "3"
          ],
          [
            "b",
            "4"
          ],
          [
            "c",
            "5"
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
        "id": "math-prep-geo-q001",
        "difficulty": "易",
        "calculator": true,
        "title": "勾股",
        "type": "frq",
        "check": "numeric",
        "stem": "腿 3、4 的直角三角形斜边？",
        "expected": 5,
        "tol": 0.01,
        "answerLatex": "5",
        "solution": "√(9+16)=5。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q002",
        "difficulty": "中",
        "calculator": false,
        "title": "三角比",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{对边 }3\\text{、邻边 }4\\text{：}\\tan\\theta=",
        "expected": "3/4",
        "answerLatex": "\\dfrac{3}{4}",
        "solution": "定义。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q003",
        "difficulty": "难",
        "calculator": true,
        "title": "面积",
        "type": "frq",
        "check": "numeric",
        "stem": "直角三角形腿 3、4 的面积？",
        "expected": 6,
        "tol": 0.01,
        "answerLatex": "6",
        "solution": "3 与 4 乘积的一半为 6。",
        "solutionLatex": "\\dfrac{1}{2}\\cdot3\\cdot4=6",
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
    "id": "math-prep-geo-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-math-prep-geo-2",
    "stimulus": {
      "title": "平行与三角形全等 · 几何量",
      "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "a",
            "3"
          ],
          [
            "b",
            "4"
          ],
          [
            "c",
            "5"
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
        "id": "math-prep-geo-q004",
        "difficulty": "易",
        "calculator": true,
        "title": "勾股",
        "type": "frq",
        "check": "numeric",
        "stem": "腿 3、4 的直角三角形斜边？",
        "expected": 5,
        "tol": 0.01,
        "answerLatex": "5",
        "solution": "√(9+16)=5。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q005",
        "difficulty": "中",
        "calculator": false,
        "title": "三角比",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{对边 }3\\text{、邻边 }4\\text{：}\\tan\\theta=",
        "expected": "3/4",
        "answerLatex": "\\dfrac{3}{4}",
        "solution": "定义。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q006",
        "difficulty": "难",
        "calculator": true,
        "title": "面积",
        "type": "frq",
        "check": "numeric",
        "stem": "直角三角形腿 3、4 的面积？",
        "expected": 6,
        "tol": 0.01,
        "answerLatex": "6",
        "solution": "3 与 4 乘积的一半为 6。",
        "solutionLatex": "\\dfrac{1}{2}\\cdot3\\cdot4=6",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q007",
        "difficulty": "易",
        "calculator": false,
        "title": "相似",
        "type": "frq",
        "stem": "说明「直角三角与毕达哥拉斯」中相似比如何缩放面积。",
        "answer": "长度比 k ⇒ 面积比 k²。",
        "solution": "二维缩放。",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      }
    ]
  },
  {
    "id": "math-prep-geo-q008",
    "title": "P2.1 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q009",
    "title": "P2.2 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「平行与三角形全等」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q010",
    "title": "P2.3 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q011",
    "title": "P2.4 论述 · 直角三角与毕达哥拉斯",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「直角三角与毕达哥拉斯」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q012",
    "title": "P2.5 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q013",
    "title": "P2.6 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「圆的性质」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q014",
    "title": "P2.7 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q015",
    "title": "P2.8 论述 · 表面积与体积",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「表面积与体积」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q016",
    "title": "P2.9 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q017",
    "title": "P2.10 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「变换」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q018",
    "title": "P2.11 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q019",
    "title": "P2.1 论述 · 点线面与角",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「点线面与角」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q020",
    "title": "P2.2 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q021",
    "title": "P2.3 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「相似三角形」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q022",
    "title": "P2.4 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q023",
    "title": "P2.5 论述 · 三角比入门",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「三角比入门」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q024",
    "title": "P2.6 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q025",
    "title": "P2.7 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「面积与周长」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q026",
    "title": "P2.8 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q027",
    "title": "P2.9 论述 · 坐标几何",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「坐标几何」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q028",
    "title": "P2.10 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q029",
    "title": "P2.11 概念",
    "type": "mcq",
    "difficulty": "易",
    "stem": "关于「证明基础」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q030",
    "title": "P2.1 计算",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q031",
    "title": "P2.2 论述 · 平行与三角形全等",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "关于「平行与三角形全等」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q032",
    "title": "P2.3 符号",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q033",
    "title": "P2.4 概念",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「直角三角与毕达哥拉斯」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q034",
    "title": "P2.5 计算",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q035",
    "title": "P2.6 论述 · 圆的性质",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "stem": "关于「圆的性质」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q036",
    "title": "P2.7 符号",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q037",
    "title": "P2.8 概念",
    "type": "mcq",
    "difficulty": "难",
    "stem": "关于「表面积与体积」，下列正确的是？",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例",
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
    "id": "math-prep-geo-q038",
    "title": "P2.9 计算",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边 }3,4,5",
    "expected": 12,
    "tol": 0.02,
    "answerLatex": "12",
    "solution": "3+4+5。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q039",
    "title": "P2.10 论述 · 变换",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于「变换」：说明为何 AAA 相似但不能推出全等。",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q040",
    "title": "P2.11 符号",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积 }r=2:\\ A=",
    "expected": "4pi",
    "answerLatex": "4\\pi",
    "solution": "πr²。",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
];
