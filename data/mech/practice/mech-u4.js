/** Practice bank for mech-u4 */
export const UNIT_REF = {
  "id": "mech-u4",
  "code": "4",
  "titleZh": "线动量",
  "titleEn": "Linear Momentum",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u4-1": {
    "title": "质点动量 · Momentum of a particle",
    "text": "质量 2.0 kg，速度 4.0 m/s。 · The mass is 2.0 kg and the velocity is 4.0 m/s.",
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
  "stim-mech-u4-2": {
    "title": "恒力的冲量 · Impulse of a constant force",
    "text": "平均力 6.0 N 作用 0.50 s，物体质量 2.0 kg。 · An average force of 6.0 N acts for 0.50 s on a 2.0 kg object.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "F",
          "6.0 N"
        ],
        [
          "Δt",
          "0.50 s"
        ],
        [
          "m",
          "2.0 kg"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u4-3": {
    "title": "粘在一起 · They stick together",
    "text": "3.0 kg 以 4.0 m/s 运动，与静止的 1.0 kg 相撞后粘在一起。外力可忽略。 · A 3.0 kg object at 4.0 m/s hits a 1.0 kg object at rest and they stick. External forces are negligible.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "m1",
          "3.0 kg"
        ],
        [
          "v1",
          "4.0 m/s"
        ],
        [
          "m2",
          "1.0 kg"
        ],
        [
          "v2",
          "0"
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
    "id": "mech-u4-set1",
    "title": "动量 · Momentum",
    "sharedStimulus": "stim-mech-u4-1",
    "stimulus": {
      "title": "质点动量 · Momentum of a particle",
      "text": "质量 2.0 kg，速度 4.0 m/s。 · The mass is 2.0 kg and the velocity is 4.0 m/s.",
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
        "id": "mech-u4-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "动量定义 · Definition of momentum",
        "type": "frq",
        "stem": "写出动量的符号式，并说明它是矢量。 · Write the symbolic expression for momentum and state that it is a vector.",
        "answerLatex": "\\vec p=m\\vec v",
        "solution": "方向与速度相同。 · The direction is the direction of the velocity.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.1",
            "label": "4.1 冲量与动量",
            "topicId": "mech-u4:4.1"
          }
        ]
      },
      {
        "id": "mech-u4-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "动量大小 · Momentum magnitude",
        "type": "frq",
        "check": "numeric",
        "stem": "求动量大小（kg·m/s）。 · Find the magnitude of the momentum (kg·m/s).",
        "expected": 8,
        "tol": 0.01,
        "answerLatex": "8.0\\,\\mathrm{kg\\,m/s}",
        "solution": "p = mv = 8.0。 · p = mv = 8.0.",
        "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.1",
            "label": "4.1 冲量与动量",
            "topicId": "mech-u4:4.1"
          }
        ]
      },
      {
        "id": "mech-u4-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "速度反向 · Velocity reverses",
        "type": "mcq",
        "stem": "速率不变但速度反向。动量变化的大小是多少？ · The speed is unchanged but the velocity reverses. What is the magnitude of the change in momentum?",
        "choices": [
          {
            "text": "16 kg·m/s · 16 kg·m/s",
            "correct": true
          },
          {
            "text": "0，因为速率没变 · 0, because the speed did not change",
            "correct": false
          },
          {
            "text": "8 kg·m/s · 8 kg·m/s",
            "correct": false
          },
          {
            "text": "4 kg·m/s · 4 kg·m/s",
            "correct": false
          }
        ],
        "solution": "Δp = −8 − 8 = −16，大小是 16。 · Δp = −8 − 8 = −16, so the magnitude is 16.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.1",
            "label": "4.1 冲量与动量",
            "topicId": "mech-u4:4.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u4-set2",
    "title": "冲量 · Impulse",
    "sharedStimulus": "stim-mech-u4-2",
    "stimulus": {
      "title": "恒力的冲量 · Impulse of a constant force",
      "text": "平均力 6.0 N 作用 0.50 s，物体质量 2.0 kg。 · An average force of 6.0 N acts for 0.50 s on a 2.0 kg object.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "F",
            "6.0 N"
          ],
          [
            "Δt",
            "0.50 s"
          ],
          [
            "m",
            "2.0 kg"
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
        "id": "mech-u4-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "冲量–动量定理 · Impulse–momentum theorem",
        "type": "frq",
        "stem": "写出恒力冲量与动量变化的关系。 · Write the relation between a constant-force impulse and the change in momentum.",
        "answerLatex": "F\\Delta t=\\Delta p",
        "solution": "这是牛顿第二定律对时间积分。 · This is Newton’s second law integrated over time.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.1",
            "label": "4.1 冲量与动量",
            "topicId": "mech-u4:4.1"
          }
        ]
      },
      {
        "id": "mech-u4-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "冲量大小 · Impulse magnitude",
        "type": "frq",
        "check": "numeric",
        "stem": "求冲量大小（N·s）。 · Find the magnitude of the impulse (N·s).",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3.0\\,\\mathrm{N\\,s}",
        "solution": "J = 6×0.5 = 3.0 N·s。 · J = 6×0.5 = 3.0 N·s.",
        "solutionLatex": "J=F\\Delta t=(6.0)(0.50)=3.0\\,\\mathrm{N\\,s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.1",
            "label": "4.1 冲量与动量",
            "topicId": "mech-u4:4.1"
          }
        ]
      },
      {
        "id": "mech-u4-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "速度增量 · Change in velocity",
        "type": "mcq",
        "stem": "若物体原来静止，这个冲量使速度变为多少？ · If the object starts at rest, what speed does this impulse produce?",
        "choices": [
          {
            "text": "1.5 m/s · 1.5 m/s",
            "correct": true
          },
          {
            "text": "3.0 m/s · 3.0 m/s",
            "correct": false
          },
          {
            "text": "12 m/s · 12 m/s",
            "correct": false
          },
          {
            "text": "0.50 m/s · 0.50 m/s",
            "correct": false
          }
        ],
        "solution": "Δv = J/m = 1.5 m/s。 · Δv = J/m = 1.5 m/s.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.1",
            "label": "4.1 冲量与动量",
            "topicId": "mech-u4:4.1"
          }
        ]
      },
      {
        "id": "mech-u4-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "作用时间加倍后的冲量 · Impulse after the time doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "平均力仍是 6.0 N，作用时间改为 1.0 s。求冲量大小（N·s）。 · The average force is still 6.0 N and it acts for 1.0 s. Find the impulse magnitude (N·s).",
        "expected": 6,
        "tol": 0.01,
        "answerLatex": "6.0\\,\\mathrm{N\\,s}",
        "solution": "J = FΔt = 6.0 N·s。 · J = FΔt = 6.0 N·s.",
        "solutionLatex": "J=(6.0)(1.0)=6.0\\,\\mathrm{N\\,s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.1",
            "label": "4.1 冲量与动量",
            "topicId": "mech-u4:4.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u4-set3",
    "title": "完全非弹性碰撞 · Perfectly inelastic collision",
    "sharedStimulus": "stim-mech-u4-3",
    "stimulus": {
      "title": "粘在一起 · They stick together",
      "text": "3.0 kg 以 4.0 m/s 运动，与静止的 1.0 kg 相撞后粘在一起。外力可忽略。 · A 3.0 kg object at 4.0 m/s hits a 1.0 kg object at rest and they stick. External forces are negligible.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m1",
            "3.0 kg"
          ],
          [
            "v1",
            "4.0 m/s"
          ],
          [
            "m2",
            "1.0 kg"
          ],
          [
            "v2",
            "0"
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
        "id": "mech-u4-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "守恒量 · What is conserved",
        "type": "frq",
        "stem": "写出碰撞后共同速度的符号式，并说明动能是否守恒。 · Write the common speed after the collision and state whether kinetic energy is conserved.",
        "answerLatex": "v=\\dfrac{m_1 v_1}{m_1+m_2}",
        "solution": "动量守恒，完全非弹性碰撞动能不守恒。 · Momentum is conserved. Kinetic energy is not conserved in a perfectly inelastic collision.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.2",
            "label": "4.2 动量守恒与碰撞",
            "topicId": "mech-u4:4.2"
          }
        ]
      },
      {
        "id": "mech-u4-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "共同速度 · Common speed",
        "type": "frq",
        "check": "numeric",
        "stem": "求粘在一起后的速度（m/s）。 · Find the speed after they stick (m/s).",
        "expected": 3,
        "tol": 0.01,
        "answerLatex": "3.0\\,\\mathrm{m/s}",
        "solution": "12/4 = 3.0 m/s。 · 12/4 = 3.0 m/s.",
        "solutionLatex": "v=\\dfrac{(3.0)(4.0)}{4.0}=3.0\\,\\mathrm{m/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.2",
            "label": "4.2 动量守恒与碰撞",
            "topicId": "mech-u4:4.2"
          }
        ]
      },
      {
        "id": "mech-u4-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "动能 · Kinetic energy",
        "type": "mcq",
        "stem": "碰撞后系统动能与碰撞前相比，哪项正确？ · Compared with before the collision, which statement about the kinetic energy is correct?",
        "choices": [
          {
            "text": "动能减少 · Kinetic energy decreases",
            "correct": true
          },
          {
            "text": "动能守恒 · Kinetic energy is conserved",
            "correct": false
          },
          {
            "text": "动能增加 · Kinetic energy increases",
            "correct": false
          },
          {
            "text": "动量也不守恒 · Momentum is not conserved either",
            "correct": false
          }
        ],
        "solution": "碰前 K=24 J，碰后 K=½×4×9=18 J，动能减少。 · Before, K=24 J. After, K=½×4×9=18 J, so kinetic energy decreases.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u4/4.2",
            "label": "4.2 动量守恒与碰撞",
            "topicId": "mech-u4:4.2"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u4-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 3.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 3.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 6 kg·m/s。 · p = 6 kg·m/s.",
    "solutionLatex": "p=(2.0)(3.0)=6\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量守恒的条件 · When momentum is conserved",
    "type": "mcq",
    "stem": "两辆小车在水平气垫导轨上碰撞，导轨摩擦可忽略。哪项正确？ · Two carts collide on a horizontal air track, and friction is negligible. Which statement is correct?",
    "choices": [
      {
        "text": "碰撞前后系统总动量守恒，动能不一定守恒 · Total momentum is conserved; kinetic energy need not be",
        "correct": true
      },
      {
        "text": "只有弹性碰撞动量才守恒 · Momentum is conserved only in an elastic collision",
        "correct": false
      },
      {
        "text": "动能在任何碰撞中都守恒 · Kinetic energy is conserved in every collision",
        "correct": false
      },
      {
        "text": "内力不能改变任何一个物体的动量 · Internal forces cannot change the momentum of either object",
        "correct": false
      }
    ],
    "solution": "合外力冲量为零时系统动量守恒。动能只在弹性碰撞中守恒。 · System momentum is conserved when the net external impulse is zero. Kinetic energy is conserved only in an elastic collision.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.2",
        "label": "4.2 动量守恒与碰撞",
        "topicId": "mech-u4:4.2"
      }
    ]
  },
  {
    "id": "mech-u4-q013",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 4.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 4.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 8 kg·m/s。 · p = 8 kg·m/s.",
    "solutionLatex": "p=(2.0)(4.0)=8\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 5.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 5.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 10 kg·m/s。 · p = 10 kg·m/s.",
    "solutionLatex": "p=(2.0)(5.0)=10\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q016",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 6.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 6.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 12 kg·m/s。 · p = 12 kg·m/s.",
    "solutionLatex": "p=(2.0)(6.0)=12\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 7.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 7.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 14,
    "tol": 0.01,
    "answerLatex": "14\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 14 kg·m/s。 · p = 14 kg·m/s.",
    "solutionLatex": "p=(2.0)(7.0)=14\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q019",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 3.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 3.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 6 kg·m/s。 · p = 6 kg·m/s.",
    "solutionLatex": "p=(2.0)(3.0)=6\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 4.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 4.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 8 kg·m/s。 · p = 8 kg·m/s.",
    "solutionLatex": "p=(2.0)(4.0)=8\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q022",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 5.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 5.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 10 kg·m/s。 · p = 10 kg·m/s.",
    "solutionLatex": "p=(2.0)(5.0)=10\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 6.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 6.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 12 kg·m/s。 · p = 12 kg·m/s.",
    "solutionLatex": "p=(2.0)(6.0)=12\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q025",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 7.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 7.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 14,
    "tol": 0.01,
    "answerLatex": "14\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 14 kg·m/s。 · p = 14 kg·m/s.",
    "solutionLatex": "p=(2.0)(7.0)=14\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 3.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 3.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 6 kg·m/s。 · p = 6 kg·m/s.",
    "solutionLatex": "p=(2.0)(3.0)=6\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q028",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 4.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 4.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 8 kg·m/s。 · p = 8 kg·m/s.",
    "solutionLatex": "p=(2.0)(4.0)=8\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 5.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 5.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 10 kg·m/s。 · p = 10 kg·m/s.",
    "solutionLatex": "p=(2.0)(5.0)=10\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q031",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 6.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 6.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 12 kg·m/s。 · p = 12 kg·m/s.",
    "solutionLatex": "p=(2.0)(6.0)=12\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 7.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 7.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 14,
    "tol": 0.01,
    "answerLatex": "14\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 14 kg·m/s。 · p = 14 kg·m/s.",
    "solutionLatex": "p=(2.0)(7.0)=14\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q034",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 3.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 3.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 6 kg·m/s。 · p = 6 kg·m/s.",
    "solutionLatex": "p=(2.0)(3.0)=6\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 4.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 4.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 8 kg·m/s。 · p = 8 kg·m/s.",
    "solutionLatex": "p=(2.0)(4.0)=8\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q037",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  },
  {
    "id": "mech-u4-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 5.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 5.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 10 kg·m/s。 · p = 10 kg·m/s.",
    "solutionLatex": "p=(2.0)(5.0)=10\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动量 · Momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "质量 2.0 kg，速度 6.0 m/s。求动量大小（kg·m/s）。 · The mass is 2.0 kg and the velocity is 6.0 m/s. Find the momentum magnitude (kg·m/s).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mathrm{kg\\,m/s}",
    "solution": "p = 12 kg·m/s。 · p = 12 kg·m/s.",
    "solutionLatex": "p=(2.0)(6.0)=12\\,\\mathrm{kg\\,m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ]
  },
  {
    "id": "mech-u4-q040",
    "title": "动量 · Momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\,\\mathrm{kg}\\text{ 的物体以 }v=4.0\\,\\mathrm{m/s}\\text{ 运动，求动量大小 }p",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{kg\\,m\\,s^{-1}}",
    "solution": "由动量定义得 p=8.0 kg·m/s。 · Momentum is m v.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u4/4.1",
        "label": "4.1 冲量与动量",
        "topicId": "mech-u4:4.1"
      }
    ],
    "solutionLatex": "p=mv=(2.0)(4.0)=8.0\\,\\mathrm{kg\\,m\\,s^{-1}}."
  }
];
