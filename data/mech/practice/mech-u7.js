/** Practice bank for mech-u7 */
export const UNIT_REF = {
  "id": "mech-u7",
  "code": "7",
  "titleZh": "振动",
  "titleEn": "Oscillations",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u7-1": {
    "title": "理想弹簧 · Ideal spring",
    "text": "质量 0.50 kg，劲度系数 200 N/m，在光滑水平面上振动。 · A 0.50 kg mass and a 200 N/m spring oscillate on a smooth horizontal surface.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "m",
          "0.50 kg"
        ],
        [
          "k",
          "200 N/m"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u7-2": {
    "title": "小角单摆 · Small-angle pendulum",
    "text": "摆长 2.45 m，小角摆动。取 g=9.8 m/s²。 · The length is 2.45 m and the angle stays small. Take g=9.8 m/s².",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "L",
          "2.45 m"
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
  "stim-mech-u7-3": {
    "title": "简谐运动的最大值 · Maxima in SHM",
    "text": "x = A cos(ωt)，A=0.10 m，ω=10 rad/s。 · x = A cos(ωt), with A=0.10 m and ω=10 rad/s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "A",
          "0.10 m"
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
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "mech-u7-set1",
    "title": "弹簧振子 · Spring oscillator",
    "sharedStimulus": "stim-mech-u7-1",
    "stimulus": {
      "title": "理想弹簧 · Ideal spring",
      "text": "质量 0.50 kg，劲度系数 200 N/m，在光滑水平面上振动。 · A 0.50 kg mass and a 200 N/m spring oscillate on a smooth horizontal surface.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "0.50 kg"
          ],
          [
            "k",
            "200 N/m"
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
        "id": "mech-u7-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "角频率 · Angular frequency",
        "type": "frq",
        "stem": "写出弹簧振子的角频率。 · Write the angular frequency of a spring oscillator.",
        "answerLatex": "\\omega=\\sqrt{\\dfrac{k}{m}}",
        "solution": "周期 T = 2π/ω。 · The period is T = 2π/ω.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.1",
            "label": "7.1 周期运动",
            "topicId": "mech-u7:7.1"
          }
        ]
      },
      {
        "id": "mech-u7-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "角频率数值 · Angular-frequency value",
        "type": "frq",
        "check": "numeric",
        "stem": "求角频率（rad/s）。 · Find the angular frequency (rad/s).",
        "expected": 20,
        "tol": 0.01,
        "answerLatex": "20\\,\\mathrm{rad/s}",
        "solution": "ω = √(200/0.50) = 20。 · ω = √(200/0.50) = 20.",
        "solutionLatex": "\\omega=\\sqrt{\\dfrac{200}{0.50}}=\\sqrt{400}=20\\,\\mathrm{rad/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.1",
            "label": "7.1 周期运动",
            "topicId": "mech-u7:7.1"
          }
        ]
      },
      {
        "id": "mech-u7-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "质量加倍 · Mass doubles",
        "type": "mcq",
        "stem": "k 不变，质量加倍。角频率变为多少？ · k stays the same and the mass doubles. What is the new angular frequency?",
        "choices": [
          {
            "text": "10√2 rad/s · 10√2 rad/s",
            "correct": true
          },
          {
            "text": "40 rad/s · 40 rad/s",
            "correct": false
          },
          {
            "text": "20 rad/s · 20 rad/s",
            "correct": false
          },
          {
            "text": "10 rad/s · 10 rad/s",
            "correct": false
          }
        ],
        "solution": "ω 与 √m 成反比，变为 20/√2 ≈ 14 rad/s。选项给的是准确关系。 · ω is proportional to 1/√m, so it becomes 20/√2.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.1",
            "label": "7.1 周期运动",
            "topicId": "mech-u7:7.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u7-set2",
    "title": "单摆 · Simple pendulum",
    "sharedStimulus": "stim-mech-u7-2",
    "stimulus": {
      "title": "小角单摆 · Small-angle pendulum",
      "text": "摆长 2.45 m，小角摆动。取 g=9.8 m/s²。 · The length is 2.45 m and the angle stays small. Take g=9.8 m/s².",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "L",
            "2.45 m"
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
        "id": "mech-u7-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "单摆周期 · Pendulum period",
        "type": "frq",
        "stem": "写出小角单摆的周期。 · Write the period of a simple pendulum at small amplitude.",
        "answerLatex": "T=2\\pi\\sqrt{\\dfrac{L}{g}}",
        "solution": "小角时 sinθ≈θ。 · For a small angle, sinθ≈θ.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.2",
            "label": "7.2 单摆",
            "topicId": "mech-u7:7.2"
          }
        ]
      },
      {
        "id": "mech-u7-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "周期数值 · Period value",
        "type": "frq",
        "check": "numeric",
        "stem": "求周期（s）。可用 π=3.14。 · Find the period (s). You may use π=3.14.",
        "expected": 3.14,
        "tol": 0.02,
        "answerLatex": "3.14\\,\\mathrm{s}",
        "solution": "√(L/g)=0.500，T=π。 · √(L/g)=0.500, so T=π.",
        "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{2.45}{9.8}}=2\\pi\\times 0.500=\\pi\\,\\mathrm{s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.2",
            "label": "7.2 单摆",
            "topicId": "mech-u7:7.2"
          }
        ]
      },
      {
        "id": "mech-u7-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "摆球质量 · Bob mass",
        "type": "mcq",
        "stem": "摆球质量加倍，摆长不变。小角周期如何？ · The bob mass doubles and the length stays the same. What happens to the small-angle period?",
        "choices": [
          {
            "text": "不变 · It is unchanged",
            "correct": true
          },
          {
            "text": "加倍 · It doubles",
            "correct": false
          },
          {
            "text": "减半 · It is halved",
            "correct": false
          },
          {
            "text": "变为 √2 倍 · It becomes √2 times as large",
            "correct": false
          }
        ],
        "solution": "周期与质量无关。 · The period does not depend on the mass.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.2",
            "label": "7.2 单摆",
            "topicId": "mech-u7:7.2"
          }
        ]
      },
      {
        "id": "mech-u7-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "摆长变为四倍后的周期 · Period after the length becomes four times larger",
        "type": "frq",
        "check": "numeric",
        "stem": "小角单摆的摆长改为 9.80 m。取 g=9.8 m/s²，π=3.14。求周期（s）。 · The small-angle pendulum length is now 9.80 m. Take g=9.8 m/s² and π=3.14. Find the period (s).",
        "expected": 6.28,
        "tol": 0.02,
        "answerLatex": "6.28\\,\\mathrm{s}",
        "solution": "摆长四倍，周期加倍。 · Four times the length doubles the period.",
        "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{9.80}{9.8}}=2\\pi\\,\\mathrm{s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.2",
            "label": "7.2 单摆",
            "topicId": "mech-u7:7.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u7-set3",
    "title": "振幅与最大速度 · Amplitude and maximum speed",
    "sharedStimulus": "stim-mech-u7-3",
    "stimulus": {
      "title": "简谐运动的最大值 · Maxima in SHM",
      "text": "x = A cos(ωt)，A=0.10 m，ω=10 rad/s。 · x = A cos(ωt), with A=0.10 m and ω=10 rad/s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "A",
            "0.10 m"
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
        "id": "mech-u7-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "最大速率 · Maximum speed",
        "type": "frq",
        "stem": "写出最大速率和最大加速度的大小。 · Write the maximum speed and the magnitude of the maximum acceleration.",
        "answerLatex": "v_{\\max}=\\omega A,\\quad a_{\\max}=\\omega^{2} A",
        "solution": "速度在平衡位置最大，加速度在端点最大。 · Speed is greatest at equilibrium and acceleration is greatest at the endpoints.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.1",
            "label": "7.1 周期运动",
            "topicId": "mech-u7:7.1"
          }
        ]
      },
      {
        "id": "mech-u7-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "最大速率数值 · Maximum-speed value",
        "type": "frq",
        "check": "numeric",
        "stem": "求最大速率（m/s）。 · Find the maximum speed (m/s).",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1.0\\,\\mathrm{m/s}",
        "solution": "v_max = 10×0.10 = 1.0 m/s。 · v_max = 10×0.10 = 1.0 m/s.",
        "solutionLatex": "v_{\\max}=\\omega A=(10)(0.10)=1.0\\,\\mathrm{m/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.1",
            "label": "7.1 周期运动",
            "topicId": "mech-u7:7.1"
          }
        ]
      },
      {
        "id": "mech-u7-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "最大加速度 · Maximum acceleration",
        "type": "mcq",
        "stem": "最大加速度的大小是多少？ · What is the magnitude of the maximum acceleration?",
        "choices": [
          {
            "text": "10 m/s² · 10 m/s²",
            "correct": true
          },
          {
            "text": "1.0 m/s² · 1.0 m/s²",
            "correct": false
          },
          {
            "text": "0.10 m/s² · 0.10 m/s²",
            "correct": false
          },
          {
            "text": "100 m/s² · 100 m/s²",
            "correct": false
          }
        ],
        "solution": "a_max = ω²A = 10 m/s²。 · a_max = ω²A = 10 m/s².",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u7/7.1",
            "label": "7.1 周期运动",
            "topicId": "mech-u7:7.1"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u7-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{rad/s}",
    "solution": "ω = 10 rad/s。 · ω = 10 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{1}}=10\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "小角单摆 · Small-angle pendulum",
    "type": "mcq",
    "stem": "单摆摆角始终很小。哪项正确？ · A simple pendulum stays at a small angle. Which statement is correct?",
    "choices": [
      {
        "text": "周期与质量和小振幅都无关，并随摆长增大 · The period is independent of mass and of a small amplitude, and it grows with length",
        "correct": true
      },
      {
        "text": "摆球质量加倍则周期加倍 · Doubling the bob mass doubles the period",
        "correct": false
      },
      {
        "text": "振幅加倍则周期加倍 · Doubling the amplitude doubles the period",
        "correct": false
      },
      {
        "text": "T = 2π√(g/L) · T = 2π√(g/L)",
        "correct": false
      }
    ],
    "solution": "小角时 T = 2π√(L/g)，与质量和振幅无关。 · For a small angle, T = 2π√(L/g), independent of mass and amplitude.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.2",
        "label": "7.2 单摆",
        "topicId": "mech-u7:7.2"
      }
    ]
  },
  {
    "id": "mech-u7-q013",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 400 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 400 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 20,
    "tol": 0.01,
    "answerLatex": "20\\,\\mathrm{rad/s}",
    "solution": "ω = 20 rad/s。 · ω = 20 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{400}{1}}=20\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 4.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 4.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{rad/s}",
    "solution": "ω = 5 rad/s。 · ω = 5 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{4}}=5\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q016",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 900 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 900 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mathrm{rad/s}",
    "solution": "ω = 30 rad/s。 · ω = 30 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{900}{1}}=30\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{rad/s}",
    "solution": "ω = 10 rad/s。 · ω = 10 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{1}}=10\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q019",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 400 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 400 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 20,
    "tol": 0.01,
    "answerLatex": "20\\,\\mathrm{rad/s}",
    "solution": "ω = 20 rad/s。 · ω = 20 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{400}{1}}=20\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 4.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 4.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{rad/s}",
    "solution": "ω = 5 rad/s。 · ω = 5 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{4}}=5\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q022",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 900 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 900 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mathrm{rad/s}",
    "solution": "ω = 30 rad/s。 · ω = 30 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{900}{1}}=30\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{rad/s}",
    "solution": "ω = 10 rad/s。 · ω = 10 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{1}}=10\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q025",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 400 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 400 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 20,
    "tol": 0.01,
    "answerLatex": "20\\,\\mathrm{rad/s}",
    "solution": "ω = 20 rad/s。 · ω = 20 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{400}{1}}=20\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 4.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 4.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{rad/s}",
    "solution": "ω = 5 rad/s。 · ω = 5 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{4}}=5\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q028",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 900 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 900 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mathrm{rad/s}",
    "solution": "ω = 30 rad/s。 · ω = 30 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{900}{1}}=30\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{rad/s}",
    "solution": "ω = 10 rad/s。 · ω = 10 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{1}}=10\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q031",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 400 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 400 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 20,
    "tol": 0.01,
    "answerLatex": "20\\,\\mathrm{rad/s}",
    "solution": "ω = 20 rad/s。 · ω = 20 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{400}{1}}=20\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 4.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 4.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{rad/s}",
    "solution": "ω = 5 rad/s。 · ω = 5 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{4}}=5\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q034",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 900 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 900 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mathrm{rad/s}",
    "solution": "ω = 30 rad/s。 · ω = 30 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{900}{1}}=30\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{rad/s}",
    "solution": "ω = 10 rad/s。 · ω = 10 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{1}}=10\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q037",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 400 N/m，质量 1.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 400 N/m and the mass is 1.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 20,
    "tol": 0.01,
    "answerLatex": "20\\,\\mathrm{rad/s}",
    "solution": "ω = 20 rad/s。 · ω = 20 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{400}{1}}=20\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "弹簧角频率 · Spring angular frequency",
    "type": "frq",
    "check": "numeric",
    "stem": "劲度系数 100 N/m，质量 4.0 kg，在光滑水平面上振动。求角频率（rad/s）。 · The spring constant is 100 N/m and the mass is 4.0 kg. The oscillator is on a smooth horizontal surface. Find the angular frequency (rad/s).",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5\\,\\mathrm{rad/s}",
    "solution": "ω = 5 rad/s。 · ω = 5 rad/s.",
    "solutionLatex": "\\omega=\\sqrt{\\dfrac{100}{4}}=5\\,\\mathrm{rad/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q040",
    "title": "简谐运动的周期 · Period of SHM",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{弹簧振子质量 }m=0.50\\,\\mathrm{kg}\\text{，劲度系数 }k=50\\,\\mathrm{N/m}\\text{，求周期 }T",
    "expected": 0.628,
    "tol": 0.02,
    "answerLatex": "0.628\\,\\mathrm{s}",
    "solution": "由弹簧振子周期公式得 T≈0.628 s。 · The period depends on the restoring constant and the inertia.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ],
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{m}{k}}=2\\pi\\sqrt{\\dfrac{0.50}{50}}\\approx0.628\\,\\mathrm{s}."
  },
  {
    "id": "mech-u7-q041",
    "title": "7.1 受迫振动与共振",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "弹簧振子的固有频率为 f₀=2.0 Hz，受到频率为 f_d 的正弦驱动力。下列哪项正确？",
    "choices": [
      {
        "text": "稳态振动频率等于 f_d；当 f_d≈f₀ 时振幅最大",
        "correct": true
      },
      {
        "text": "稳态振动频率等于 f₀；振幅与 f_d 无关",
        "correct": false
      },
      {
        "text": "共振时振幅无限大，与阻尼无关",
        "correct": false
      },
      {
        "text": "增大阻尼会使共振峰更高、更窄",
        "correct": false
      }
    ],
    "solution": "稳态频率由驱动频率决定；共振发生在驱动频率接近固有频率时，阻尼使峰有限并变宽。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  },
  {
    "id": "mech-u7-q042",
    "title": "7.3 圆盘扭摆的周期",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "均匀圆盘质量 0.50 kg、半径 0.10 m，绕通过中心的垂直轴扭转，金属丝扭转常数 κ=2.0×10⁻³ N·m/rad。求扭摆周期（s）。",
    "expected": 7,
    "tol": 0.01,
    "answerLatex": "7.0\\,\\mathrm{s}",
    "solution": "I=½mR²=2.5×10⁻³ kg·m²；T=2π√(I/κ)=2π√1.25≈7.0 s。",
    "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}=2\\pi\\sqrt{\\dfrac{2.5\\times10^{-3}}{2.0\\times10^{-3}}}\\approx7.0\\,\\mathrm{s}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.3",
        "label": "7.3 复摆",
        "topicId": "mech-u7:7.3"
      }
    ]
  },
  {
    "id": "mech-u7-q043",
    "title": "7.1 SHM 二阶方程的解",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "哪一族函数满足 x'' + (k/m)x = 0？",
    "choices": [
      {
        "text": "x=A cos(ωt+φ)，且 ω²=k/m",
        "correct": true
      },
      {
        "text": "x=At+B",
        "correct": false
      },
      {
        "text": "x = A e^(kt/m)",
        "correct": false
      },
      {
        "text": "x=A cos(kt/m)",
        "correct": false
      }
    ],
    "solution": "把 x = A cos(ωt+φ) 代入得 x'' = −ω²x，故需 ω² = k/m；另外两个常数 A、φ 由初始条件确定。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u7/7.1",
        "label": "7.1 周期运动",
        "topicId": "mech-u7:7.1"
      }
    ]
  }
];
