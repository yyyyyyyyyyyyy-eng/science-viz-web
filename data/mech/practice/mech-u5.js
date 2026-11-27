/** Practice bank for mech-u5 */
export const UNIT_REF = {
  "id": "mech-u5",
  "code": "5",
  "titleZh": "力矩与转动动力学",
  "titleEn": "Torque and Rotational Dynamics",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u5-1": {
    "title": "垂直力的力矩 · Torque of a perpendicular force",
    "text": "力 15 N 垂直作用于距转轴 0.40 m 处。 · A 15 N force is applied perpendicular to the position vector, 0.40 m from the axis.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "r",
          "0.40 m"
        ],
        [
          "F",
          "15 N"
        ],
        [
          "θ",
          "90°"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u5-2": {
    "title": "定轴转动 · Rotation about a fixed axis",
    "text": "转动惯量 I=0.50 kg·m²，合外力矩 2.0 N·m。 · The moment of inertia is I=0.50 kg·m² and the net torque is 2.0 N·m.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "I",
          "0.50 kg·m²"
        ],
        [
          "τ",
          "2.0 N·m"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u5-3": {
    "title": "恒定角加速度 · Constant angular acceleration",
    "text": "轮子由静止开始，α=3.0 rad/s²，转了 4.0 s。 · A wheel starts from rest with α=3.0 rad/s² for 4.0 s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "ω0",
          "0"
        ],
        [
          "α",
          "3.0 rad/s²"
        ],
        [
          "t",
          "4.0 s"
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
    "id": "mech-u5-set1",
    "title": "力矩 · Torque",
    "sharedStimulus": "stim-mech-u5-1",
    "stimulus": {
      "title": "垂直力的力矩 · Torque of a perpendicular force",
      "text": "力 15 N 垂直作用于距转轴 0.40 m 处。 · A 15 N force is applied perpendicular to the position vector, 0.40 m from the axis.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "r",
            "0.40 m"
          ],
          [
            "F",
            "15 N"
          ],
          [
            "θ",
            "90°"
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
        "id": "mech-u5-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "力矩 · Torque",
        "type": "frq",
        "stem": "写出力矩大小的符号式。 · Write the magnitude of the torque.",
        "answerLatex": "\\tau=rF\\sin\\theta",
        "solution": "θ 是 r 与 F 的夹角。 · θ is the angle between r and F.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.1",
            "label": "5.1 力矩与静力学",
            "topicId": "mech-u5:5.1"
          }
        ]
      },
      {
        "id": "mech-u5-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "力矩大小 · Torque magnitude",
        "type": "frq",
        "check": "numeric",
        "stem": "求力矩大小（N·m）。 · Find the torque magnitude (N·m).",
        "expected": 6,
        "tol": 0.01,
        "answerLatex": "6.0\\,\\mathrm{N\\,m}",
        "solution": "sin90°=1，τ=0.40×15=6.0。 · sin90°=1, so τ=0.40×15=6.0.",
        "solutionLatex": "\\tau=rF=(0.40)(15)=6.0\\,\\mathrm{N\\,m}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.1",
            "label": "5.1 力矩与静力学",
            "topicId": "mech-u5:5.1"
          }
        ]
      },
      {
        "id": "mech-u5-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "力通过转轴 · Force through the axis",
        "type": "mcq",
        "stem": "若同样大小的力改为通过转轴，力矩是多少？ · If a force of the same magnitude is redirected through the axis, what is the torque?",
        "choices": [
          {
            "text": "0 · 0",
            "correct": true
          },
          {
            "text": "仍是 6.0 N·m · It is still 6.0 N·m",
            "correct": false
          },
          {
            "text": "15 N·m · 15 N·m",
            "correct": false
          },
          {
            "text": "0.40 N·m · 0.40 N·m",
            "correct": false
          }
        ],
        "solution": "力臂为零，力矩为零。 · The moment arm is zero, so the torque is zero.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.1",
            "label": "5.1 力矩与静力学",
            "topicId": "mech-u5:5.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u5-set2",
    "title": "转动动力学 · Rotational dynamics",
    "sharedStimulus": "stim-mech-u5-2",
    "stimulus": {
      "title": "定轴转动 · Rotation about a fixed axis",
      "text": "转动惯量 I=0.50 kg·m²，合外力矩 2.0 N·m。 · The moment of inertia is I=0.50 kg·m² and the net torque is 2.0 N·m.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "I",
            "0.50 kg·m²"
          ],
          [
            "τ",
            "2.0 N·m"
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
        "id": "mech-u5-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "转动定律 · Rotational law",
        "type": "frq",
        "stem": "写出定轴转动的牛顿第二定律。 · Write Newton’s second law for rotation about a fixed axis.",
        "answerLatex": "\\tau_{\\mathrm{net}}=I\\alpha",
        "solution": "与 F=ma 同构。 · It has the same structure as F=ma.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.3",
            "label": "5.3 转动动力学",
            "topicId": "mech-u5:5.3"
          }
        ]
      },
      {
        "id": "mech-u5-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "角加速度 · Angular acceleration",
        "type": "frq",
        "check": "numeric",
        "stem": "求角加速度大小（rad/s²）。 · Find the magnitude of the angular acceleration (rad/s²).",
        "expected": 4,
        "tol": 0.01,
        "answerLatex": "4.0\\,\\mathrm{rad/s^{2}}",
        "solution": "α = τ/I = 4.0。 · α = τ/I = 4.0.",
        "solutionLatex": "\\alpha=\\dfrac{\\tau}{I}=\\dfrac{2.0}{0.50}=4.0\\,\\mathrm{rad/s^{2}}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.3",
            "label": "5.3 转动动力学",
            "topicId": "mech-u5:5.3"
          }
        ]
      },
      {
        "id": "mech-u5-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "转动惯量加倍 · Moment of inertia doubles",
        "type": "mcq",
        "stem": "力矩不变，转动惯量加倍。角加速度如何？ · The torque stays the same and the moment of inertia doubles. What happens to the angular acceleration?",
        "choices": [
          {
            "text": "变为 2.0 rad/s² · It becomes 2.0 rad/s²",
            "correct": true
          },
          {
            "text": "变为 8.0 rad/s² · It becomes 8.0 rad/s²",
            "correct": false
          },
          {
            "text": "不变 · It is unchanged",
            "correct": false
          },
          {
            "text": "变为 0 · It becomes 0",
            "correct": false
          }
        ],
        "solution": "α 与 I 成反比，变为 2.0 rad/s²。 · α is inversely proportional to I, so it becomes 2.0 rad/s².",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.3",
            "label": "5.3 转动动力学",
            "topicId": "mech-u5:5.3"
          }
        ]
      },
      {
        "id": "mech-u5-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "力矩加倍后的角加速度 · Angular acceleration after the torque doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "转动惯量仍是 0.50 kg·m²，合外力矩改为 4.0 N·m。求角加速度（rad/s²）。 · The moment of inertia is still 0.50 kg·m² and the net torque is now 4.0 N·m. Find the angular acceleration (rad/s²).",
        "expected": 8,
        "tol": 0.01,
        "answerLatex": "8.0\\,\\mathrm{rad/s^{2}}",
        "solution": "α = 4/0.50 = 8.0 rad/s²。 · α = 4/0.50 = 8.0 rad/s².",
        "solutionLatex": "\\alpha=\\dfrac{4.0}{0.50}=8.0\\,\\mathrm{rad/s^{2}}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.3",
            "label": "5.3 转动动力学",
            "topicId": "mech-u5:5.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u5-set3",
    "title": "转动运动学 · Rotational kinematics",
    "sharedStimulus": "stim-mech-u5-3",
    "stimulus": {
      "title": "恒定角加速度 · Constant angular acceleration",
      "text": "轮子由静止开始，α=3.0 rad/s²，转了 4.0 s。 · A wheel starts from rest with α=3.0 rad/s² for 4.0 s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "ω0",
            "0"
          ],
          [
            "α",
            "3.0 rad/s²"
          ],
          [
            "t",
            "4.0 s"
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
        "id": "mech-u5-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "角运动公式 · Angular kinematic equations",
        "type": "frq",
        "stem": "由静止、角加速度恒定时，写出 ω 和 θ。 · Starting from rest at constant angular acceleration, write ω and θ.",
        "answerLatex": "\\omega=\\alpha t,\\quad \\theta=\\dfrac{1}{2}\\alpha t^{2}",
        "solution": "与线运动的公式一一对应。 · The formulas match linear constant-acceleration kinematics.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.2",
            "label": "5.2 转动运动学",
            "topicId": "mech-u5:5.2"
          }
        ]
      },
      {
        "id": "mech-u5-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "转过的角度 · Angle turned",
        "type": "frq",
        "check": "numeric",
        "stem": "求转过的角度（rad）。 · Find the angle turned through (rad).",
        "expected": 24,
        "tol": 0.01,
        "answerLatex": "24\\,\\mathrm{rad}",
        "solution": "θ = ½×3×16 = 24 rad。 · θ = ½×3×16 = 24 rad.",
        "solutionLatex": "\\theta=\\dfrac{1}{2}(3.0)(4.0)^{2}=24\\,\\mathrm{rad}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.2",
            "label": "5.2 转动运动学",
            "topicId": "mech-u5:5.2"
          }
        ]
      },
      {
        "id": "mech-u5-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "末角速度 · Final angular speed",
        "type": "mcq",
        "stem": "4.0 s 时的角速度是多少？ · What is the angular speed at 4.0 s?",
        "choices": [
          {
            "text": "12 rad/s · 12 rad/s",
            "correct": true
          },
          {
            "text": "24 rad/s · 24 rad/s",
            "correct": false
          },
          {
            "text": "3.0 rad/s · 3.0 rad/s",
            "correct": false
          },
          {
            "text": "48 rad/s · 48 rad/s",
            "correct": false
          }
        ],
        "solution": "ω = αt = 12 rad/s。 · ω = αt = 12 rad/s.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u5/5.2",
            "label": "5.2 转动运动学",
            "topicId": "mech-u5:5.2"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u5-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 10 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 10 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{N\\,m}",
    "solution": "τ = 5 N·m。 · τ = 5 N·m.",
    "solutionLatex": "\\tau=(0.50)(10)=5\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "恒定角加速度 · Constant angular acceleration",
    "type": "mcq",
    "stem": "轮子以恒定角加速度 α 转动。哪项正确？ · A wheel rotates with constant angular acceleration α. Which statement is correct?",
    "choices": [
      {
        "text": "ω = ω0 + αt，θ 的公式与匀加速直线运动同构 · ω = ω0 + αt, and the θ formulas mirror constant-acceleration kinematics",
        "correct": true
      },
      {
        "text": "由静止开始时 θ = ωt 对恒定 α 仍然成立 · From rest, θ = ωt still holds for constant α",
        "correct": false
      },
      {
        "text": "α 的单位是 m/s² · The unit of α is m/s²",
        "correct": false
      },
      {
        "text": "α 与 ω 同号时轮子一定在减速 · The wheel slows whenever α and ω have the same sign",
        "correct": false
      }
    ],
    "solution": "与 v = v0 + at 对应，ω = ω0 + αt。角加速度为正不一定表示速率在增加。 · The analog of v = v0 + at is ω = ω0 + αt. A positive α does not by itself mean the rotation is speeding up.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q013",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 12 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 12 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{N\\,m}",
    "solution": "τ = 6 N·m。 · τ = 6 N·m.",
    "solutionLatex": "\\tau=(0.50)(12)=6\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 14 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 14 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 7,
    "tol": 0.01,
    "answerLatex": "7\\,\\mathrm{N\\,m}",
    "solution": "τ = 7 N·m。 · τ = 7 N·m.",
    "solutionLatex": "\\tau=(0.50)(14)=7\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q016",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 16 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 16 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{N\\,m}",
    "solution": "τ = 8 N·m。 · τ = 8 N·m.",
    "solutionLatex": "\\tau=(0.50)(16)=8\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 18 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 18 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{N\\,m}",
    "solution": "τ = 9 N·m。 · τ = 9 N·m.",
    "solutionLatex": "\\tau=(0.50)(18)=9\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q019",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 10 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 10 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{N\\,m}",
    "solution": "τ = 5 N·m。 · τ = 5 N·m.",
    "solutionLatex": "\\tau=(0.50)(10)=5\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 12 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 12 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{N\\,m}",
    "solution": "τ = 6 N·m。 · τ = 6 N·m.",
    "solutionLatex": "\\tau=(0.50)(12)=6\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q022",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 14 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 14 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 7,
    "tol": 0.01,
    "answerLatex": "7\\,\\mathrm{N\\,m}",
    "solution": "τ = 7 N·m。 · τ = 7 N·m.",
    "solutionLatex": "\\tau=(0.50)(14)=7\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 16 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 16 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{N\\,m}",
    "solution": "τ = 8 N·m。 · τ = 8 N·m.",
    "solutionLatex": "\\tau=(0.50)(16)=8\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q025",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 18 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 18 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{N\\,m}",
    "solution": "τ = 9 N·m。 · τ = 9 N·m.",
    "solutionLatex": "\\tau=(0.50)(18)=9\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 10 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 10 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{N\\,m}",
    "solution": "τ = 5 N·m。 · τ = 5 N·m.",
    "solutionLatex": "\\tau=(0.50)(10)=5\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q028",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 12 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 12 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{N\\,m}",
    "solution": "τ = 6 N·m。 · τ = 6 N·m.",
    "solutionLatex": "\\tau=(0.50)(12)=6\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 14 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 14 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 7,
    "tol": 0.01,
    "answerLatex": "7\\,\\mathrm{N\\,m}",
    "solution": "τ = 7 N·m。 · τ = 7 N·m.",
    "solutionLatex": "\\tau=(0.50)(14)=7\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q031",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 16 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 16 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{N\\,m}",
    "solution": "τ = 8 N·m。 · τ = 8 N·m.",
    "solutionLatex": "\\tau=(0.50)(16)=8\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 18 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 18 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9\\,\\mathrm{N\\,m}",
    "solution": "τ = 9 N·m。 · τ = 9 N·m.",
    "solutionLatex": "\\tau=(0.50)(18)=9\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q034",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 10 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 10 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{N\\,m}",
    "solution": "τ = 5 N·m。 · τ = 5 N·m.",
    "solutionLatex": "\\tau=(0.50)(10)=5\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 12 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 12 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{N\\,m}",
    "solution": "τ = 6 N·m。 · τ = 6 N·m.",
    "solutionLatex": "\\tau=(0.50)(12)=6\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q037",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 14 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 14 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 7,
    "tol": 0.01,
    "answerLatex": "7\\,\\mathrm{N\\,m}",
    "solution": "τ = 7 N·m。 · τ = 7 N·m.",
    "solutionLatex": "\\tau=(0.50)(14)=7\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "力矩 · Torque",
    "type": "frq",
    "check": "numeric",
    "stem": "力 16 N 垂直作用在距转轴 0.50 m 处。求力矩大小（N·m）。 · A 16 N force is applied perpendicular to the axis at a distance of 0.50 m. Find the torque magnitude (N·m).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{N\\,m}",
    "solution": "τ = 8 N·m。 · τ = 8 N·m.",
    "solutionLatex": "\\tau=(0.50)(16)=8\\,\\mathrm{N\\,m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ]
  },
  {
    "id": "mech-u5-q040",
    "title": "力矩 · Torque",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。 · Torque is r F sinθ.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "id": "mech-u5-q041",
    "title": "5.3 力矩–转角图面积",
    "stem": "刚体受到恒力矩 τ=25 N·m，从 θ=0 转到 θ=0.80 rad。求力矩做的功（J）。",
    "expected": 20,
    "tol": 0.01,
    "answerLatex": "20\\,\\mathrm{J}",
    "solution": "恒力矩做功 W=τΔθ=25×0.80=20 J；也等于 τ–θ 图矩形面积。",
    "solutionLatex": "W=\\int\\tau\\,\\mathrm{d}\\theta=\\tau\\Delta\\theta=25(0.80)=20\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ]
  },
  {
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "id": "mech-u5-q042",
    "title": "5.2 切向与径向加速度合成",
    "stem": "半径 0.30 m 的转盘上一点，ω=2.0 rad/s、α=3.0 rad/s²。求该点总加速度大小（m/s²）。",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a_t=rα=0.90 m/s²，a_c=ω²r=1.2 m/s²，a=√(0.90²+1.2²)=1.5 m/s²。",
    "solutionLatex": "a_t=r\\alpha=0.90,\\quad a_c=\\omega^{2}r=1.2,\\quad a=\\sqrt{a_t^{2}+a_c^{2}}=1.5\\,\\mathrm{m\\,s^{-2}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  }
];
