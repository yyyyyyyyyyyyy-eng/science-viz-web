/** Practice bank for mech-u3 */
export const UNIT_REF = {
  "id": "mech-u3",
  "code": "3",
  "titleZh": "功、能量与功率",
  "titleEn": "Work, Energy, and Power",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u3-1": {
    "title": "质点的动能 · Kinetic energy of a particle",
    "text": "质量 2.0 kg 的质点速率 4.0 m/s。 · A 2.0 kg particle moves at 4.0 m/s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "m",
          "2.0 kg"
        ],
        [
          "v",
          "4.0 m/s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u3-2": {
    "title": "抬高后的势能 · Potential after a lift",
    "text": "把 1.0 kg 的物体从 U=0 的高度匀速升高 5.0 m。取 g=9.8 m/s²。 · A 1.0 kg object is lifted at constant speed through 5.0 m from the height where U=0. Take g=9.8 m/s².",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "m",
          "1.0 kg"
        ],
        [
          "h",
          "5.0 m"
        ],
        [
          "g",
          "9.8 m/s²"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u3-3": {
    "title": "恒力的功率 · Power of a constant force",
    "text": "恒力 10 N 沿速度方向作用，瞬时速度 3.0 m/s。 · A constant 10 N force is parallel to the velocity, which is instantaneously 3.0 m/s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "F",
          "10 N"
        ],
        [
          "v",
          "3.0 m/s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "mech-u3-set1",
    "title": "动能 · Kinetic energy",
    "sharedStimulus": "stim-mech-u3-1",
    "stimulus": {
      "title": "质点的动能 · Kinetic energy of a particle",
      "text": "质量 2.0 kg 的质点速率 4.0 m/s。 · A 2.0 kg particle moves at 4.0 m/s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "v",
            "4.0 m/s"
          ]
        ]
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    },
    "questions": [
      {
        "id": "mech-u3-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "动能定义 · Definition of kinetic energy",
        "type": "frq",
        "stem": "写出动能的符号式。 · Write the symbolic expression for kinetic energy.",
        "answerLatex": "K=\\dfrac{1}{2}mv^{2}",
        "solution": "动能取决于速率的平方。 · Kinetic energy depends on the square of the speed.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.1",
            "label": "3.1 动能定理",
            "topicId": "mech-u3:3.1"
          }
        ]
      },
      {
        "id": "mech-u3-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "动能数值 · Kinetic-energy value",
        "type": "frq",
        "check": "numeric",
        "stem": "求动能（J）。 · Find the kinetic energy (J).",
        "expected": 16,
        "tol": 0.01,
        "answerLatex": "16\\,\\mathrm{J}",
        "solution": "½×2×16 = 16 J。 · ½×2×16 = 16 J.",
        "solutionLatex": "K=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.1",
            "label": "3.1 动能定理",
            "topicId": "mech-u3:3.1"
          }
        ]
      },
      {
        "id": "mech-u3-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "速率加倍 · Speed doubles",
        "type": "mcq",
        "stem": "若速率加倍、质量不变，动能变为原来的多少？ · If the speed doubles and the mass stays the same, the kinetic energy becomes what multiple of its original value?",
        "choices": [
          {
            "text": "4 倍 · 4 times",
            "correct": true
          },
          {
            "text": "2 倍 · 2 times",
            "correct": false
          },
          {
            "text": "不变 · unchanged",
            "correct": false
          },
          {
            "text": "8 倍 · 8 times",
            "correct": false
          }
        ],
        "solution": "动能与 v² 成正比，变为 4 倍。 · Kinetic energy is proportional to v², so it becomes 4 times as large.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.1",
            "label": "3.1 动能定理",
            "topicId": "mech-u3:3.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u3-set2",
    "title": "重力势能 · Gravitational potential",
    "sharedStimulus": "stim-mech-u3-2",
    "stimulus": {
      "title": "抬高后的势能 · Potential after a lift",
      "text": "把 1.0 kg 的物体从 U=0 的高度匀速升高 5.0 m。取 g=9.8 m/s²。 · A 1.0 kg object is lifted at constant speed through 5.0 m from the height where U=0. Take g=9.8 m/s².",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "1.0 kg"
          ],
          [
            "h",
            "5.0 m"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    },
    "questions": [
      {
        "id": "mech-u3-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "重力势能 · Gravitational potential energy",
        "type": "frq",
        "stem": "近地面、g 近似常量时，写出重力势能。 · Near the ground, with g approximately constant, write the gravitational potential energy.",
        "answerLatex": "U_g=mgh",
        "solution": "零点可以任取，这里取起点为零。 · The zero is arbitrary; here it is the starting height.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.2",
            "label": "3.2 力与势能",
            "topicId": "mech-u3:3.2"
          }
        ]
      },
      {
        "id": "mech-u3-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "势能增加 · Increase in potential",
        "type": "frq",
        "check": "numeric",
        "stem": "求势能的增加（J）。 · Find the increase in potential energy (J).",
        "expected": 49,
        "tol": 0.02,
        "answerLatex": "49\\,\\mathrm{J}",
        "solution": "mgh = 1×9.8×5 = 49 J。 · mgh = 1×9.8×5 = 49 J.",
        "solutionLatex": "U=mgh=(1.0)(9.8)(5.0)=49\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.2",
            "label": "3.2 力与势能",
            "topicId": "mech-u3:3.2"
          }
        ]
      },
      {
        "id": "mech-u3-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "由静止下落 · Released from rest",
        "type": "mcq",
        "stem": "若此后只有重力做功，物体回到 U=0 的高度时动能是多少？ · If only gravity does work after that, what is the kinetic energy when the object returns to the height where U=0?",
        "choices": [
          {
            "text": "49 J · 49 J",
            "correct": true
          },
          {
            "text": "9.8 J · 9.8 J",
            "correct": false
          },
          {
            "text": "0，因为回到了出发点的高度 · 0, because it is back at the original height",
            "correct": false
          },
          {
            "text": "98 J · 98 J",
            "correct": false
          }
        ],
        "solution": "机械能守恒，减少的势能变成动能。 · Mechanical energy is conserved, so the lost potential becomes kinetic energy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.2",
            "label": "3.2 力与势能",
            "topicId": "mech-u3:3.2"
          }
        ]
      },
      {
        "id": "mech-u3-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "高度加倍后的势能 · Potential after the height doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "质量仍是 1.0 kg，升高高度改为 10 m。取 g=9.8 m/s²。求势能增加（J）。 · The mass is still 1.0 kg and the lift is now 10 m. Take g=9.8 m/s². Find the potential-energy increase (J).",
        "expected": 98,
        "tol": 0.01,
        "answerLatex": "98\\,\\mathrm{J}",
        "solution": "U = mgh = 98 J。 · U = mgh = 98 J.",
        "solutionLatex": "U=(1.0)(9.8)(10)=98\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.2",
            "label": "3.2 力与势能",
            "topicId": "mech-u3:3.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u3-set3",
    "title": "功率 · Power",
    "sharedStimulus": "stim-mech-u3-3",
    "stimulus": {
      "title": "恒力的功率 · Power of a constant force",
      "text": "恒力 10 N 沿速度方向作用，瞬时速度 3.0 m/s。 · A constant 10 N force is parallel to the velocity, which is instantaneously 3.0 m/s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "F",
            "10 N"
          ],
          [
            "v",
            "3.0 m/s"
          ]
        ]
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    },
    "questions": [
      {
        "id": "mech-u3-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "瞬时功率 · Instantaneous power",
        "type": "frq",
        "stem": "力与速度同向时，写出瞬时功率。 · Write the instantaneous power when the force is parallel to the velocity.",
        "answerLatex": "P=Fv",
        "solution": "一般情形是点积 F·v。 · The general case is the dot product F·v.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.4",
            "label": "3.4 功率",
            "topicId": "mech-u3:3.4"
          }
        ]
      },
      {
        "id": "mech-u3-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "功率数值 · Power value",
        "type": "frq",
        "check": "numeric",
        "stem": "求这个力的瞬时功率（W）。 · Find the instantaneous power of this force (W).",
        "expected": 30,
        "tol": 0.01,
        "answerLatex": "30\\,\\mathrm{W}",
        "solution": "P = 10×3 = 30 W。 · P = 10×3 = 30 W.",
        "solutionLatex": "P=Fv=(10)(3.0)=30\\,\\mathrm{W}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.4",
            "label": "3.4 功率",
            "topicId": "mech-u3:3.4"
          }
        ]
      },
      {
        "id": "mech-u3-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "速度加倍 · Velocity doubles",
        "type": "mcq",
        "stem": "力不变，速度加倍且仍与力同向。功率如何？ · The force stays the same and the velocity doubles, still parallel to the force. What happens to the power?",
        "choices": [
          {
            "text": "变为 60 W · It becomes 60 W",
            "correct": true
          },
          {
            "text": "仍是 30 W · It stays 30 W",
            "correct": false
          },
          {
            "text": "变为 15 W · It becomes 15 W",
            "correct": false
          },
          {
            "text": "变为 120 W · It becomes 120 W",
            "correct": false
          }
        ],
        "solution": "P = Fv，功率加倍。 · P = Fv, so the power doubles.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.4",
            "label": "3.4 功率",
            "topicId": "mech-u3:3.4"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u3-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 3.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 3.0 m/s. Find the kinetic energy (J).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{J}",
    "solution": "K = 9 J。 · K = 9 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(3.0)^{2}=9\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "保守力与势能 · Conservative force and potential",
    "type": "mcq",
    "stem": "一维势能函数为 U(x)。哪项把保守力与 U 联系起来？ · A one-dimensional potential energy is U(x). Which statement relates the conservative force to U?",
    "choices": [
      {
        "text": "保守力满足 F_x = −dU/dx · A conservative force satisfies F_x = −dU/dx",
        "correct": true
      },
      {
        "text": "动摩擦是保守力，因为它始终与速度反向 · Kinetic friction is conservative because it always opposes velocity",
        "correct": false
      },
      {
        "text": "力的方向就是 U 增大的方向 · The force points in the direction of increasing U",
        "correct": false
      },
      {
        "text": "U 的零点一旦选定就不能再平移 · Once chosen, the zero of U can never be shifted",
        "correct": false
      }
    ],
    "solution": "保守力指向势能下降的方向，F_x = −dU/dx。动摩擦没有势能函数。 · A conservative force points toward decreasing potential, F_x = −dU/dx. Kinetic friction has no potential.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q013",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 4.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 4.0 m/s. Find the kinetic energy (J).",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K = 16 J。 · K = 16 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 5.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 5.0 m/s. Find the kinetic energy (J).",
    "expected": 25,
    "tol": 0.01,
    "answerLatex": "25\\,\\mathrm{J}",
    "solution": "K = 25 J。 · K = 25 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(5.0)^{2}=25\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q016",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 6.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 6.0 m/s. Find the kinetic energy (J).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{J}",
    "solution": "K = 36 J。 · K = 36 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(6.0)^{2}=36\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "瞬时功率 · Instantaneous power",
    "type": "mcq",
    "stem": "物体在某时刻速度为 v，所受合力为 F_net。哪项正确？ · At one instant an object has velocity v and net force F_net. Which statement is correct?",
    "choices": [
      {
        "text": "净力的瞬时功率等于 F_net·v，也等于 dK/dt · The net-force power is F_net·v and equals dK/dt",
        "correct": true
      },
      {
        "text": "任何一个分力的功率都等于 dK/dt · The power of every individual force equals dK/dt",
        "correct": false
      },
      {
        "text": "功率是矢量，方向与速度相同 · Power is a vector in the direction of the velocity",
        "correct": false
      },
      {
        "text": "P = F/v，所以速度越大功率越小 · P = F/v, so a larger speed means less power",
        "correct": false
      }
    ],
    "solution": "净力的瞬时功率是 F_net·v，也等于动能的变化率。单个非净力的功率不等于 dK/dt。 · The instantaneous power of the net force is F_net·v, which equals the rate of change of kinetic energy. The power of one non-net force is not dK/dt.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ]
  },
  {
    "id": "mech-u3-q019",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 3.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 3.0 m/s. Find the kinetic energy (J).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{J}",
    "solution": "K = 9 J。 · K = 9 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(3.0)^{2}=9\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 4.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 4.0 m/s. Find the kinetic energy (J).",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K = 16 J。 · K = 16 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q022",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 5.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 5.0 m/s. Find the kinetic energy (J).",
    "expected": 25,
    "tol": 0.01,
    "answerLatex": "25\\,\\mathrm{J}",
    "solution": "K = 25 J。 · K = 25 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(5.0)^{2}=25\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 6.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 6.0 m/s. Find the kinetic energy (J).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{J}",
    "solution": "K = 36 J。 · K = 36 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(6.0)^{2}=36\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q025",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 3.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 3.0 m/s. Find the kinetic energy (J).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{J}",
    "solution": "K = 9 J。 · K = 9 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(3.0)^{2}=9\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 4.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 4.0 m/s. Find the kinetic energy (J).",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K = 16 J。 · K = 16 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q028",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 5.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 5.0 m/s. Find the kinetic energy (J).",
    "expected": 25,
    "tol": 0.01,
    "answerLatex": "25\\,\\mathrm{J}",
    "solution": "K = 25 J。 · K = 25 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(5.0)^{2}=25\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 6.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 6.0 m/s. Find the kinetic energy (J).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{J}",
    "solution": "K = 36 J。 · K = 36 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(6.0)^{2}=36\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q031",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 3.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 3.0 m/s. Find the kinetic energy (J).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{J}",
    "solution": "K = 9 J。 · K = 9 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(3.0)^{2}=9\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 4.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 4.0 m/s. Find the kinetic energy (J).",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K = 16 J。 · K = 16 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q034",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 5.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 5.0 m/s. Find the kinetic energy (J).",
    "expected": 25,
    "tol": 0.01,
    "answerLatex": "25\\,\\mathrm{J}",
    "solution": "K = 25 J。 · K = 25 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(5.0)^{2}=25\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 6.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 6.0 m/s. Find the kinetic energy (J).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{J}",
    "solution": "K = 36 J。 · K = 36 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(6.0)^{2}=36\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q037",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 3.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 3.0 m/s. Find the kinetic energy (J).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{J}",
    "solution": "K = 9 J。 · K = 9 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(3.0)^{2}=9\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 4.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 4.0 m/s. Find the kinetic energy (J).",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K = 16 J。 · K = 16 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q040",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q041",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 5.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 5.0 m/s. Find the kinetic energy (J).",
    "expected": 25,
    "tol": 0.01,
    "answerLatex": "25\\,\\mathrm{J}",
    "solution": "K = 25 J。 · K = 25 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(5.0)^{2}=25\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 6.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 6.0 m/s. Find the kinetic energy (J).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{J}",
    "solution": "K = 36 J。 · K = 36 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(6.0)^{2}=36\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q043",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q044",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速率 3.0 m/s。求动能（J）。 · The mass is 2.0 kg and the speed is 3.0 m/s. Find the kinetic energy (J).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{J}",
    "solution": "K = 9 J。 · K = 9 J.",
    "solutionLatex": "K=\\dfrac{1}{2}(2.0)(3.0)^{2}=9\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q060",
    "title": "3.5 非线性弹簧的功 · 3.5 Work by a nonlinear spring",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "F_{\\mathrm{app},x}=kx+\\beta x^{3},\\quad k=200\\,\\mathrm{N\\,m^{-1}},\\quad \\beta=500\\,\\mathrm{N\\,m^{-3}},\\quad x:0\\to0.20\\,\\mathrm{m}",
    "stem": "外力把非线性弹簧从平衡位置拉伸 0.20 m。求外力做的功。 · An applied force stretches a nonlinear spring from equilibrium to 0.20 m. Find the work done by the applied force.",
    "expected": 4.2,
    "tol": 0.02,
    "answerLatex": "4.2\\,\\mathrm{J}",
    "solution": "对 F_app = kx + βx³ 积分，得 4.0 J + 0.20 J = 4.2 J。 · Integrate F_app = kx + βx³ to get 4.0 J + 0.20 J = 4.2 J.",
    "solutionLatex": "W=\\int_0^{0.20}(200x+500x^{3})\\,\\mathrm{d}x=\\left[100x^{2}+125x^{4}\\right]_0^{0.20}=4.2\\,\\mathrm{J}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q061",
    "title": "3.5 由 U(x) 判断力的方向 · 3.5 Force direction from U(x)",
    "type": "mcq",
    "difficulty": "中",
    "stem": "一维势能 U(x) 在 x = x0 处的斜率为正。该处的保守力 F_x 指向哪一侧？ · The one-dimensional potential energy U(x) has a positive slope at x = x0. Which way does the conservative force F_x point there?",
    "choices": [
      {
        "text": "沿负 x 方向，因为 F_x 等于势能斜率的相反数。 · Along negative x, because F_x is the negative of the potential-energy slope.",
        "correct": true
      },
      {
        "text": "沿正 x 方向，因为力总与斜率同向。 · Along positive x, because force always follows the slope.",
        "correct": false
      },
      {
        "text": "力为零，因为势能不为零。 · The force is zero because the potential energy is nonzero.",
        "correct": false
      },
      {
        "text": "无法判断，必须知道物体的速度。 · It cannot be determined without the object's velocity.",
        "correct": false
      }
    ],
    "solution": "F_x = −dU/dx。斜率为正，所以力沿负 x 方向，指向势能降低的一侧。 · F_x = −dU/dx. A positive slope gives a force along negative x, toward lower potential energy.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q062",
    "title": "3.5 由 U(x) 求力 · 3.5 Force from U(x)",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "U(x)=3x^{2}-x^{3}\\,\\mathrm{J}\\quad(x\\ \\text{in m})",
    "stem": "求 x = 1.0 m 处的保守力 F_x（带符号，单位 N）。 · Find the conservative force F_x at x = 1.0 m, with sign, in N.",
    "expected": -3,
    "tol": 0.01,
    "answerLatex": "-3.0\\,\\mathrm{N}",
    "solution": "F_x = −dU/dx = 3x² − 6x，在 x = 1.0 m 处得 −3.0 N，方向沿负 x。 · F_x = −dU/dx = 3x² − 6x. At x = 1.0 m this gives −3.0 N, along negative x.",
    "solutionLatex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=3x^{2}-6x,\\qquad F_x(1.0)=-3.0\\,\\mathrm{N}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q063",
    "title": "3.5 非线性弹簧的势能（符号） · 3.5 Potential energy of a nonlinear spring (symbolic)",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stem": "非线性弹簧的力为 F_x = −(kx + βx³)，取 U(0) = 0。写出 U(x) 的表达式。 · A nonlinear spring has F_x = −(kx + βx³), with U(0) = 0. Write the expression for U(x).",
    "expected": "k*x^2/2+beta*x^4/4",
    "answerLatex": "U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
    "solution": "对 −F_x 积分：kx 积分得 ½kx²，βx³ 积分得 ¼βx⁴。 · Integrate −F_x: kx gives ½kx² and βx³ gives ¼βx⁴.",
    "solutionLatex": "U(x)=-\\int F_x\\,\\mathrm{d}x=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q064",
    "title": "3.5 变力做功的积分 · 3.5 Work by a variable force",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "F_x=4x-x^{2}\\,\\mathrm{N}\\quad(x\\ \\text{in m}),\\quad x:0\\to3.0\\,\\mathrm{m}",
    "stem": "物体沿 x 方向运动，力随位置变化。求该力在 0 到 3.0 m 内做的功。 · An object moves along x under a position-dependent force. Find the work done from 0 to 3.0 m.",
    "expected": 9,
    "tol": 0.02,
    "answerLatex": "9.0\\,\\mathrm{J}",
    "solution": "积分得 [2x² − x³/3]，代入 0 与 3.0 得 18 − 9 = 9.0 J。 · Integrating gives [2x² − x³/3]; substituting 0 and 3.0 gives 18 − 9 = 9.0 J.",
    "solutionLatex": "W=\\int_0^{3.0}(4x-x^{2})\\,\\mathrm{d}x=\\left[2x^{2}-\\dfrac{x^{3}}{3}\\right]_0^{3.0}=9.0\\,\\mathrm{J}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q065",
    "title": "3.5 稳定平衡与不稳定平衡 · 3.5 Stable and unstable equilibrium",
    "type": "mcq",
    "difficulty": "中",
    "stem": "一维势能 U(x) 在 x = x0 处有局部极大值。关于 x0 的平衡性质，下列哪项正确？ · A one-dimensional potential energy U(x) has a local maximum at x = x0. Which statement about the equilibrium at x0 is correct?",
    "choices": [
      {
        "text": "不稳定平衡，因为小位移后力把物体推离 x0。 · Unstable equilibrium, because after a small displacement the force pushes the object away from x0.",
        "correct": true
      },
      {
        "text": "稳定平衡，因为 U 在 x0 处最大。 · Stable equilibrium, because U is largest at x0.",
        "correct": false
      },
      {
        "text": "不是平衡位置，因为 U 不为零。 · It is not an equilibrium position because U is not zero.",
        "correct": false
      },
      {
        "text": "稳定性与 U 的曲率无关。 · Stability is unrelated to the curvature of U.",
        "correct": false
      }
    ],
    "solution": "U 的局部极大点对应不稳定平衡；局部极小点才对应稳定平衡。稳定性由 U″ 的符号决定。 · A local maximum of U is unstable equilibrium; only a local minimum is stable. Stability is set by the sign of U″.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q066",
    "title": "3.5 转折点与机械能 · 3.5 Turning point and mechanical energy",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "U(x)=2x^{2}\\,\\mathrm{J},\\quad E=8.0\\,\\mathrm{J}\\quad(x\\ \\text{in m})",
    "stem": "物体在保守力场中运动，总机械能守恒。求正 x 方向的转折点位置。 · The object moves in a conservative field with constant mechanical energy. Find the turning point on the positive x side.",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "x=2.0\\,\\mathrm{m}",
    "solution": "转折点 K = 0，所以 U = E：2x² = 8.0，得正根 x = 2.0 m。 · At a turning point K = 0, so U = E: 2x² = 8.0, giving the positive root x = 2.0 m.",
    "solutionLatex": "K=0\\ \\Rightarrow\\ U(x)=E,\\qquad 2x^{2}=8.0\\quad\\Rightarrow\\quad x=2.0\\,\\mathrm{m}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q067",
    "title": "3.2 多物体系统的势能对数",
    "type": "mcq",
    "difficulty": "易",
    "calculator": false,
    "stem": "三个物体两两之间存在引力势能。系统的总势能包含多少个不同的 pair 项？",
    "choices": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "9",
        "correct": false
      },
      {
        "text": "12",
        "correct": false
      }
    ],
    "solution": "无序对数为 N(N−1)/2=3；把 U₁₂ 与 U₂₁ 都算入会重复计数。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q068",
    "title": "3.2 单对象系统只有动能",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "若系统只包含一个质点（点模型），下列关于该系统能量的说法正确的是？",
    "choices": [
      {
        "text": "它只能具有动能；势能属于相互作用的系统",
        "correct": true
      },
      {
        "text": "它可以同时具有动能和重力势能",
        "correct": false
      },
      {
        "text": "它一定没有机械能",
        "correct": false
      },
      {
        "text": "它的内能一定不为零",
        "correct": false
      }
    ],
    "solution": "CED 3.4.A.1：只含单个对象的系统只能有动能；重力势能属于物块–地球系统，内能需要内部结构。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  }
];
