/** Practice bank for mech-u6 */
export const UNIT_REF = {
  "id": "mech-u6",
  "code": "6",
  "titleZh": "转动系统的能量与动量",
  "titleEn": "Energy and Momentum of Rotating Systems",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u6-1": {
    "title": "定轴刚体 · Rigid body on a fixed axis",
    "text": "I=0.20 kg·m²，ω=10 rad/s。 · I=0.20 kg·m² and ω=10 rad/s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "I",
          "0.20 kg·m²"
        ],
        [
          "ω",
          "10 rad/s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u6-2": {
    "title": "纯滚动条件 · No-slip condition",
    "text": "轮半径 0.25 m，角速度 8.0 rad/s，相对地面纯滚动。 · A wheel of radius 0.25 m has angular speed 8.0 rad/s and rolls without slipping on the ground.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "R",
          "0.25 m"
        ],
        [
          "ω",
          "8.0 rad/s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u6-3": {
    "title": "圆轨道速率 · Circular-orbit speed",
    "text": "给定 GM = 4.0×10^7 m³/s²，轨道半径 r = 1.0×10^3 m。 · Given GM = 4.0×10^7 m³/s² and orbital radius r = 1.0×10^3 m.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "GM",
          "4.0×10^7 m³/s²"
        ],
        [
          "r",
          "1.0×10^3 m"
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
    "id": "mech-u6-set1",
    "title": "角动量与转动动能 · Angular momentum and rotational energy",
    "sharedStimulus": "stim-mech-u6-1",
    "stimulus": {
      "title": "定轴刚体 · Rigid body on a fixed axis",
      "text": "I=0.20 kg·m²，ω=10 rad/s。 · I=0.20 kg·m² and ω=10 rad/s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "I",
            "0.20 kg·m²"
          ],
          [
            "ω",
            "10 rad/s"
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
        "id": "mech-u6-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "角动量 · Angular momentum",
        "type": "frq",
        "stem": "写出定轴刚体的角动量和转动动能。 · Write the angular momentum and rotational kinetic energy of a rigid body on a fixed axis.",
        "answerLatex": "L=I\\omega,\\quad K=\\dfrac{1}{2}I\\omega^{2}",
        "solution": "两者都用同一个 I 和 ω。 · Both use the same I and ω.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.2",
            "label": "6.2 角动量",
            "topicId": "mech-u6:6.2"
          }
        ]
      },
      {
        "id": "mech-u6-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "转动动能 · Rotational kinetic energy",
        "type": "frq",
        "check": "numeric",
        "stem": "求转动动能（J）。 · Find the rotational kinetic energy (J).",
        "expected": 10,
        "tol": 0.01,
        "answerLatex": "10\\,\\mathrm{J}",
        "solution": "½×0.20×100 = 10 J。 · ½×0.20×100 = 10 J.",
        "solutionLatex": "K=\\dfrac{1}{2}(0.20)(10)^{2}=10\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.1",
            "label": "6.1 转动动能",
            "topicId": "mech-u6:6.1"
          }
        ]
      },
      {
        "id": "mech-u6-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "角动量大小 · Angular-momentum magnitude",
        "type": "mcq",
        "stem": "角动量大小是多少？ · What is the magnitude of the angular momentum?",
        "choices": [
          {
            "text": "2.0 kg·m²/s · 2.0 kg·m²/s",
            "correct": true
          },
          {
            "text": "10 kg·m²/s · 10 kg·m²/s",
            "correct": false
          },
          {
            "text": "0.20 kg·m²/s · 0.20 kg·m²/s",
            "correct": false
          },
          {
            "text": "20 kg·m²/s · 20 kg·m²/s",
            "correct": false
          }
        ],
        "solution": "L = Iω = 2.0。 · L = Iω = 2.0.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.2",
            "label": "6.2 角动量",
            "topicId": "mech-u6:6.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u6-set2",
    "title": "纯滚动 · Rolling without slipping",
    "sharedStimulus": "stim-mech-u6-2",
    "stimulus": {
      "title": "纯滚动条件 · No-slip condition",
      "text": "轮半径 0.25 m，角速度 8.0 rad/s，相对地面纯滚动。 · A wheel of radius 0.25 m has angular speed 8.0 rad/s and rolls without slipping on the ground.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "R",
            "0.25 m"
          ],
          [
            "ω",
            "8.0 rad/s"
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
        "id": "mech-u6-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "纯滚动 · Rolling without slipping",
        "type": "frq",
        "stem": "写出质心速度与角速度的关系。 · Write the relation between the center-of-mass speed and the angular speed.",
        "answerLatex": "v=\\omega R",
        "solution": "接触点相对地面瞬时静止。 · The contact point is instantaneously at rest relative to the ground.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.3",
            "label": "6.3 滚动",
            "topicId": "mech-u6:6.3"
          }
        ]
      },
      {
        "id": "mech-u6-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "质心速率 · Center-of-mass speed",
        "type": "frq",
        "check": "numeric",
        "stem": "求质心速率（m/s）。 · Find the center-of-mass speed (m/s).",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2.0\\,\\mathrm{m/s}",
        "solution": "v = 8×0.25 = 2.0 m/s。 · v = 8×0.25 = 2.0 m/s.",
        "solutionLatex": "v=\\omega R=(8.0)(0.25)=2.0\\,\\mathrm{m/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.3",
            "label": "6.3 滚动",
            "topicId": "mech-u6:6.3"
          }
        ]
      },
      {
        "id": "mech-u6-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "接触点 · Contact point",
        "type": "mcq",
        "stem": "纯滚动时，轮与地面接触点相对地面的速度是多少？ · During rolling without slipping, what is the velocity of the contact point relative to the ground?",
        "choices": [
          {
            "text": "0 · 0",
            "correct": true
          },
          {
            "text": "等于质心速度 · Equal to the center-of-mass velocity",
            "correct": false
          },
          {
            "text": "等于 2ωR · Equal to 2ωR",
            "correct": false
          },
          {
            "text": "竖直向上 · Vertically upward",
            "correct": false
          }
        ],
        "solution": "接触点瞬时静止。 · The contact point is instantaneously at rest.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.3",
            "label": "6.3 滚动",
            "topicId": "mech-u6:6.3"
          }
        ]
      },
      {
        "id": "mech-u6-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "角速度加倍后的质心速率 · Center-of-mass speed after ω doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "半径仍是 0.25 m，纯滚动，角速度改为 16 rad/s。求质心速率（m/s）。 · The radius is still 0.25 m, the wheel still rolls without slipping, and ω is now 16 rad/s. Find the center-of-mass speed (m/s).",
        "expected": 4,
        "tol": 0.01,
        "answerLatex": "4.0\\,\\mathrm{m/s}",
        "solution": "v = ωR = 4.0 m/s。 · v = ωR = 4.0 m/s.",
        "solutionLatex": "v=(16)(0.25)=4.0\\,\\mathrm{m/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.3",
            "label": "6.3 滚动",
            "topicId": "mech-u6:6.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u6-set3",
    "title": "圆轨道 · Circular orbit",
    "sharedStimulus": "stim-mech-u6-3",
    "stimulus": {
      "title": "圆轨道速率 · Circular-orbit speed",
      "text": "给定 GM = 4.0×10^7 m³/s²，轨道半径 r = 1.0×10^3 m。 · Given GM = 4.0×10^7 m³/s² and orbital radius r = 1.0×10^3 m.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "GM",
            "4.0×10^7 m³/s²"
          ],
          [
            "r",
            "1.0×10^3 m"
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
        "id": "mech-u6-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "圆轨道 · Circular orbit",
        "type": "frq",
        "stem": "写出圆轨道速率。引力提供向心力。 · Write the circular-orbit speed. Gravity supplies the centripetal force.",
        "answerLatex": "v=\\sqrt{\\dfrac{GM}{r}}",
        "solution": "GMm/r² = mv²/r。 · GMm/r² = mv²/r.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.4",
            "label": "6.4 轨道",
            "topicId": "mech-u6:6.4"
          }
        ]
      },
      {
        "id": "mech-u6-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "轨道速率 · Orbital speed",
        "type": "frq",
        "check": "numeric",
        "stem": "求轨道速率（m/s）。 · Find the orbital speed (m/s).",
        "expected": 200,
        "tol": 0.01,
        "answerLatex": "200\\,\\mathrm{m/s}",
        "solution": "v = √(4.0×10^4) = 200 m/s。 · v = √(4.0×10^4) = 200 m/s.",
        "solutionLatex": "v=\\sqrt{\\dfrac{4.0\\times10^{7}}{1.0\\times10^{3}}}=\\sqrt{4.0\\times10^{4}}=200\\,\\mathrm{m/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.4",
            "label": "6.4 轨道",
            "topicId": "mech-u6:6.4"
          }
        ]
      },
      {
        "id": "mech-u6-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "半径加倍 · Radius doubles",
        "type": "mcq",
        "stem": "同一中心天体，圆轨道半径加倍。速率变为原来的多少？ · For the same central body, the circular-orbit radius doubles. The speed becomes what multiple of its original value?",
        "choices": [
          {
            "text": "1/√2 倍 · 1/√2 times",
            "correct": true
          },
          {
            "text": "2 倍 · 2 times",
            "correct": false
          },
          {
            "text": "1/2 倍 · 1/2 times",
            "correct": false
          },
          {
            "text": "不变 · unchanged",
            "correct": false
          }
        ],
        "solution": "v 与 √r 成反比，变为 1/√2。 · v is proportional to 1/√r, so it becomes 1/√2.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u6/6.4",
            "label": "6.4 轨道",
            "topicId": "mech-u6:6.4"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u6-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=4.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=4.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2。 · L = 2.",
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量守恒 · Conservation of angular momentum",
    "type": "mcq",
    "stem": "花样滑冰运动员收拢双臂。冰面摩擦可忽略。哪项正确？ · A skater pulls both arms inward. Ice friction is negligible. Which statement is correct?",
    "choices": [
      {
        "text": "角动量近似守恒，收臂后转得更快 · Angular momentum is approximately conserved, so the skater spins faster",
        "correct": true
      },
      {
        "text": "线动量守恒，所以角速度不变 · Linear momentum is conserved, so the angular speed stays the same",
        "correct": false
      },
      {
        "text": "收臂使角动量增大 · Pulling the arms in increases the angular momentum",
        "correct": false
      },
      {
        "text": "通过转轴的力也会产生力矩 · A force through the axis still produces a torque",
        "correct": false
      }
    ],
    "solution": "外力矩约为零，角动量 Iω 守恒，转动惯量减小则角速度增大。 · The external torque is about zero, so Iω is conserved. A smaller moment of inertia means a larger angular speed.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q013",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=5.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=5.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2.5,
    "tol": 0.01,
    "answerLatex": "2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2.5。 · L = 2.5.",
    "solutionLatex": "L=I\\omega=(0.50)(5.0)=2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=6.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=6.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3。 · L = 3.",
    "solutionLatex": "L=I\\omega=(0.50)(6.0)=3\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q016",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=7.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=7.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3.5,
    "tol": 0.01,
    "answerLatex": "3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3.5。 · L = 3.5.",
    "solutionLatex": "L=I\\omega=(0.50)(7.0)=3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "圆轨道能量 · Energy of a circular orbit",
    "type": "mcq",
    "stem": "卫星绕行星做圆轨道运动，引力势能为 U = −GMm/r。哪项正确？ · A satellite is in a circular orbit with gravitational potential U = −GMm/r. Which statement is correct?",
    "choices": [
      {
        "text": "动能等于势能绝对值的一半，总能量为负 · Kinetic energy is half the absolute value of the potential, and the total energy is negative",
        "correct": true
      },
      {
        "text": "轨道越高，线速率越大 · A higher orbit has a larger orbital speed",
        "correct": false
      },
      {
        "text": "宇航员漂浮是因为该处引力为零 · Astronauts float because gravity is zero there",
        "correct": false
      },
      {
        "text": "圆轨道的速率与轨道半径无关 · Circular-orbit speed does not depend on radius",
        "correct": false
      }
    ],
    "solution": "由 v² = GM/r 得 K = GMm/(2r) = −U/2，总机械能 E = −K。 · From v² = GM/r, K = GMm/(2r) = −U/2, so the total mechanical energy is E = −K.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.4",
        "label": "6.4 轨道",
        "topicId": "mech-u6:6.4"
      }
    ]
  },
  {
    "id": "mech-u6-q019",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=4.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=4.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2。 · L = 2.",
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=5.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=5.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2.5,
    "tol": 0.01,
    "answerLatex": "2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2.5。 · L = 2.5.",
    "solutionLatex": "L=I\\omega=(0.50)(5.0)=2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q022",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=6.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=6.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3。 · L = 3.",
    "solutionLatex": "L=I\\omega=(0.50)(6.0)=3\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=7.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=7.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3.5,
    "tol": 0.01,
    "answerLatex": "3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3.5。 · L = 3.5.",
    "solutionLatex": "L=I\\omega=(0.50)(7.0)=3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q025",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=4.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=4.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2。 · L = 2.",
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=5.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=5.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2.5,
    "tol": 0.01,
    "answerLatex": "2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2.5。 · L = 2.5.",
    "solutionLatex": "L=I\\omega=(0.50)(5.0)=2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q028",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=6.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=6.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3。 · L = 3.",
    "solutionLatex": "L=I\\omega=(0.50)(6.0)=3\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=7.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=7.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3.5,
    "tol": 0.01,
    "answerLatex": "3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3.5。 · L = 3.5.",
    "solutionLatex": "L=I\\omega=(0.50)(7.0)=3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q031",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=4.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=4.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2。 · L = 2.",
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=5.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=5.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2.5,
    "tol": 0.01,
    "answerLatex": "2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2.5。 · L = 2.5.",
    "solutionLatex": "L=I\\omega=(0.50)(5.0)=2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q034",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=6.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=6.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3。 · L = 3.",
    "solutionLatex": "L=I\\omega=(0.50)(6.0)=3\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=7.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=7.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3.5,
    "tol": 0.01,
    "answerLatex": "3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3.5。 · L = 3.5.",
    "solutionLatex": "L=I\\omega=(0.50)(7.0)=3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q037",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=4.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=4.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2。 · L = 2.",
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=5.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=5.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2.5,
    "tol": 0.01,
    "answerLatex": "2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2.5。 · L = 2.5.",
    "solutionLatex": "L=I\\omega=(0.50)(5.0)=2.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q040",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q041",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=6.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=6.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3。 · L = 3.",
    "solutionLatex": "L=I\\omega=(0.50)(6.0)=3\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=7.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=7.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 3.5,
    "tol": 0.01,
    "answerLatex": "3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 3.5。 · L = 3.5.",
    "solutionLatex": "L=I\\omega=(0.50)(7.0)=3.5\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ]
  },
  {
    "id": "mech-u6-q043",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{转动惯量 }I=0.50\\,\\mathrm{kg\\,m^2}\\text{ 的刚体以 }\\omega=4.0\\,\\mathrm{rad/s}\\text{ 转动，求角动量大小 }L",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}",
    "solution": "由角动量定义得 L=2.0 kg·m²/s。 · Angular momentum is Iω for a rigid body about a fixed axis.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
      }
    ],
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2.0\\,\\mathrm{kg\\,m^2\\,s^{-1}}."
  },
  {
    "id": "mech-u6-q044",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "角动量 · Angular momentum",
    "type": "frq",
    "check": "numeric",
    "stem": "定轴刚体 I=0.50 kg·m²，ω=4.0 rad/s。求角动量大小（kg·m²/s）。 · A rigid body on a fixed axis has I=0.50 kg·m² and ω=4.0 rad/s. Find the angular-momentum magnitude (kg·m²/s).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{kg\\,m^{2}/s}",
    "solution": "L = 2。 · L = 2.",
    "solutionLatex": "L=I\\omega=(0.50)(4.0)=2\\,\\mathrm{kg\\,m^{2}/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
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
    "id": "mech-u6-q045",
    "title": "6.2 力矩–时间图面积",
    "stem": "净力矩在 0–0.50 s 内恒为 4.0 N·m，随后在 0.50–1.0 s 内线性减小到零。求 0–1.0 s 的角冲量（N·m·s）。",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3.0\\,\\mathrm{N\\,m\\,s}",
    "solution": "矩形面积 4.0×0.50=2.0；三角面积 ½×4.0×0.50=1.0；总角冲量 3.0 N·m·s。",
    "solutionLatex": "J_{\\rm ang}=4.0(0.50)+\\dfrac12(4.0)(0.50)=3.0\\,\\mathrm{N\\,m\\,s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.2",
        "label": "6.2 角动量",
        "topicId": "mech-u6:6.2"
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
    "id": "mech-u6-q046",
    "title": "6.1 质心静止的转动动能",
    "stem": "薄圆环绕固定轴转动，I=0.50 kg·m²，ω=6.0 rad/s，质心保持静止。求转动动能（J）。",
    "expected": 9,
    "tol": 0.01,
    "answerLatex": "9.0\\,\\mathrm{J}",
    "solution": "K_rot=½Iω²=½(0.50)(6.0)²=9.0 J；能量来自各质元的线速度。",
    "solutionLatex": "K_{\\rm rot}=\\dfrac12I\\omega^{2}=\\dfrac12(0.50)(6.0)^{2}=9.0\\,\\mathrm{J}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.1",
        "label": "6.1 转动动能",
        "topicId": "mech-u6:6.1"
      }
    ]
  },
  {
    "id": "mech-u6-q047",
    "title": "6.4 圆轨道的 K/U/L",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "卫星在圆轨道上运动。关于其动能 K、引力势能 U、总机械能 E 与角动量 L，下列哪项正确？",
    "choices": [
      {
        "text": "K、U、E、L 都各自恒定",
        "correct": true
      },
      {
        "text": "只有 E 恒定，K 与 U 随时间交换",
        "correct": false
      },
      {
        "text": "K 恒定、U 随时间变化",
        "correct": false
      },
      {
        "text": "L 随时间周期性变化",
        "correct": false
      }
    ],
    "solution": "圆轨道 r 恒定，v 恒定，故 K、U、E、L 都恒定；椭圆轨道才是 K 与 U 交换而 E、L 恒定。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u6/6.4",
        "label": "6.4 轨道",
        "topicId": "mech-u6:6.4"
      }
    ]
  }
];
