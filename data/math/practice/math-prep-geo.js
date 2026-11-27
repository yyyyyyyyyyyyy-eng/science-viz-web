/** Practice bank for math-prep-geo — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "math-prep-geo",
  "code": "P2",
  "titleZh": "几何 · geometry",
  "titleEn": "Geometry",
  "layer": "prep",
  "subject": "math"
};
export const stimuli = {
  "stim-math-prep-geo-1": {
    "title": "点线面与角 · 几何量 · Points, Lines, Planes, Angles: geometric measures",
    "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。 · A right triangle has legs 3 and 4; later parts use the hypotenuse and the trigonometric ratios.",
    "table": {
      "headers": [
        "量 · quantity",
        "值 · value"
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
    "title": "平行与三角形全等 · 几何量 · Parallel Lines and Triangle Congruence: geometric measures",
    "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。 · A right triangle has legs 3 and 4; later parts use the hypotenuse and the trigonometric ratios.",
    "table": {
      "headers": [
        "量 · quantity",
        "值 · value"
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
    "title": "题组 1 · 共享刺激 · Set 1, shared stimulus",
    "sharedStimulus": "stim-math-prep-geo-1",
    "stimulus": {
      "title": "点线面与角 · 几何量 · Points, Lines, Planes, Angles: geometric measures",
      "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。 · A right triangle has legs 3 and 4; later parts use the hypotenuse and the trigonometric ratios.",
      "table": {
        "headers": [
          "量 · quantity",
          "值 · value"
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
        "difficulty": "易 · Easy",
        "calculator": true,
        "title": "勾股 · Pythagorean relation",
        "type": "frq",
        "check": "numeric",
        "stem": "腿 3、4 的直角三角形斜边？ · What is the hypotenuse of a right triangle with legs 3 and 4?",
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
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "三角比 · trigonometric ratios",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{对边  · opposite side }3\\text{、邻边  · , adjacent side }4\\text{：}\\tan\\theta=",
        "expected": "3/4",
        "answerLatex": "\\dfrac{3}{4}",
        "solution": "定义。 · Definition.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q003",
        "difficulty": "难 · Hard",
        "calculator": true,
        "title": "面积 · area",
        "type": "frq",
        "check": "numeric",
        "stem": "直角三角形腿 3、4 的面积？ · What is the area of a right triangle with legs 3 and 4?",
        "expected": 6,
        "tol": 0.01,
        "answerLatex": "6",
        "solution": "3 与 4 乘积的一半为 6。 · Half the product of 3 and 4 is 6.",
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
    "title": "题组 2 · 共享刺激 · Set 2, shared stimulus",
    "sharedStimulus": "stim-math-prep-geo-2",
    "stimulus": {
      "title": "平行与三角形全等 · 几何量 · Parallel Lines and Triangle Congruence: geometric measures",
      "text": "直角三角形腿长 3、4；斜边与三角比如下文小题所用。 · A right triangle has legs 3 and 4; later parts use the hypotenuse and the trigonometric ratios.",
      "table": {
        "headers": [
          "量 · quantity",
          "值 · value"
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
        "difficulty": "易 · Easy",
        "calculator": true,
        "title": "勾股 · Pythagorean relation",
        "type": "frq",
        "check": "numeric",
        "stem": "腿 3、4 的直角三角形斜边？ · What is the hypotenuse of a right triangle with legs 3 and 4?",
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
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "三角比 · trigonometric ratios",
        "type": "frq",
        "check": "symbolic",
        "stemLatex": "\\text{对边  · opposite side }3\\text{、邻边  · , adjacent side }4\\text{：}\\tan\\theta=",
        "expected": "3/4",
        "answerLatex": "\\dfrac{3}{4}",
        "solution": "定义。 · Definition.",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q006",
        "difficulty": "难 · Hard",
        "calculator": true,
        "title": "面积 · area",
        "type": "frq",
        "check": "numeric",
        "stem": "直角三角形腿 3、4 的面积？ · What is the area of a right triangle with legs 3 and 4?",
        "expected": 6,
        "tol": 0.01,
        "answerLatex": "6",
        "solution": "3 与 4 乘积的一半为 6。 · Half the product of 3 and 4 is 6.",
        "solutionLatex": "\\dfrac{1}{2}\\cdot3\\cdot4=6",
        "sourceId": "openstax-calculus",
        "source": "OpenStax Calculus Volumes 1–3",
        "license": "CC BY-NC-SA 4.0",
        "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
      },
      {
        "id": "math-prep-geo-q007",
        "difficulty": "易 · Easy",
        "calculator": false,
        "title": "相似 · similarity",
        "type": "frq",
        "stem": "说明「直角三角与毕达哥拉斯」中相似比如何缩放面积。 · Explain how a similarity ratio in “Right triangles and Pythagoras” scales area.",
        "answer": "长度比 k ⇒ 面积比 k²。 · A length ratio k gives an area ratio k².",
        "solution": "二维缩放。 · Two-dimensional scaling.",
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
    "title": "P2.1 符号 · P2.1 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.2 概念 · P2.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「平行与三角形全等」，下列正确的是？ · Which of the following is correct about “Parallel Lines and Triangle Congruence”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q010",
    "title": "P2.3 计算 · P2.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.4 论述 · 直角三角与毕达哥拉斯 · P2.4 Argument: Right Triangles and Pythagorean Theorem",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「直角三角与毕达哥拉斯」：说明为何 AAA 相似但不能推出全等。 · For “Right Triangles and Pythagorean Theorem”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q012",
    "title": "P2.5 符号 · P2.5 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.6 概念 · P2.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「圆的性质」，下列正确的是？ · Which of the following is correct about “Properties of Circles”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q014",
    "title": "P2.7 计算 · P2.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.8 论述 · 表面积与体积 · P2.8 Argument: Surface Area and Volume",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「表面积与体积」：说明为何 AAA 相似但不能推出全等。 · For “Surface Area and Volume”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q016",
    "title": "P2.9 符号 · P2.9 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.10 概念 · P2.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「变换」，下列正确的是？ · Which of the following is correct about “Transformations”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q018",
    "title": "P2.11 计算 · P2.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.1 论述 · 点线面与角 · P2.1 Argument: Points, Lines, Planes, Angles",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「点线面与角」：说明为何 AAA 相似但不能推出全等。 · For “Points, Lines, Planes, Angles”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q020",
    "title": "P2.2 符号 · P2.2 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.3 概念 · P2.3 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「相似三角形」，下列正确的是？ · Which of the following is correct about “Similar Triangles”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q022",
    "title": "P2.4 计算 · P2.4 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.5 论述 · 三角比入门 · P2.5 Argument: Intro Trigonometric Ratios",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「三角比入门」：说明为何 AAA 相似但不能推出全等。 · For “Intro Trigonometric Ratios”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q024",
    "title": "P2.6 符号 · P2.6 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.7 概念 · P2.7 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「面积与周长」，下列正确的是？ · Which of the following is correct about “Area and Perimeter”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q026",
    "title": "P2.8 计算 · P2.8 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.9 论述 · 坐标几何 · P2.9 Argument: Coordinate Geometry",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「坐标几何」：说明为何 AAA 相似但不能推出全等。 · For “Coordinate Geometry”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q028",
    "title": "P2.10 符号 · P2.10 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.11 概念 · P2.11 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「证明基础」，下列正确的是？ · Which of the following is correct about “Basics of Proof”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q030",
    "title": "P2.1 计算 · P2.1 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.2 论述 · 平行与三角形全等 · P2.2 Argument: Parallel Lines and Triangle Congruence",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「平行与三角形全等」：说明为何 AAA 相似但不能推出全等。 · For “Parallel Lines and Triangle Congruence”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q032",
    "title": "P2.3 符号 · P2.3 Symbolic form",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.4 概念 · P2.4 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「直角三角与毕达哥拉斯」，下列正确的是？ · Which of the following is correct about “Right Triangles and Pythagorean Theorem”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q034",
    "title": "P2.5 计算 · P2.5 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.6 论述 · 圆的性质 · P2.6 Argument: Properties of Circles",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「圆的性质」：说明为何 AAA 相似但不能推出全等。 · For “Properties of Circles”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q036",
    "title": "P2.7 符号 · P2.7 Symbolic form",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
    "title": "P2.8 概念 · P2.8 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「表面积与体积」，下列正确的是？ · Which of the following is correct about “Surface Area and Volume”?",
    "choices": [
      {
        "text": "全等保留长度与角度；相似保留角度与比例 · Congruence keeps lengths and angles; similarity keeps angles and ratios",
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
    "id": "math-prep-geo-q038",
    "title": "P2.9 计算 · P2.9 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{周长：边  · perimeter: side }3,4,5",
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
    "title": "P2.10 论述 · 变换 · P2.10 Argument: Transformations",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「变换」：说明为何 AAA 相似但不能推出全等。 · For “Transformations”, explain why AAA gives similarity but not congruence",
    "answer": "AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。 · AAA only makes the three pairs of angles equal, so the triangles have the same shape and proportional sides: they are similar. Congruence also requires equal corresponding sides (scale factor 1). The triangles with sides 3, 4, 5 and 6, 8, 10 are similar by AAA but not congruent.",
    "solution": "角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。 · Angles fix the shape and side lengths fix the size; AAA has no side-length information, so it does not give congruence.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "math-prep-geo-q040",
    "title": "P2.11 符号 · P2.11 Symbolic form",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "symbolic",
    "stemLatex": "\\text{圆面积  · area of the circle }r=2:\\ A=",
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
