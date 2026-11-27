/** Practice bank for em-u13 */
export const UNIT_REF = {
  "id": "em-u13",
  "code": "13",
  "titleZh": "电磁感应",
  "titleEn": "Electromagnetic Induction",
  "layer": "ap",
  "subject": "em"
};
export const stimuli = {
  "stim-em-u13-1": {
    "title": "导体棒切割磁感线 · A rod cutting field lines",
    "text": "B=0.40 T，棒长 0.50 m，垂直于磁场和棒的速度为 5.0 m/s。 · B=0.40 T, the rod is 0.50 m long, and the speed perpendicular to both the field and the rod is 5.0 m/s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "B",
          "0.40 T"
        ],
        [
          "ℓ",
          "0.50 m"
        ],
        [
          "v",
          "5.0 m/s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u13-2": {
    "title": "通量变化 · A change in flux",
    "text": "单匝回路的磁通量在 0.15 s 内变化 0.30 Wb。 · The flux through a single-turn loop changes by 0.30 Wb in 0.15 s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "ΔΦ",
          "0.30 Wb"
        ],
        [
          "Δt",
          "0.15 s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u13-3": {
    "title": "N 匝线圈 · An N-turn coil",
    "text": "100 匝线圈，每匝磁通量在 0.25 s 内变化 0.050 Wb。 · A 100-turn coil. The flux through each turn changes by 0.050 Wb in 0.25 s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "N",
          "100"
        ],
        [
          "ΔΦ",
          "0.050 Wb"
        ],
        [
          "Δt",
          "0.25 s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u13-4": {
    "title": "滑棒与磁阻力 · 物理情境",
    "text": "长 0.40 m 的导体棒在相距 0.40 m 的平行导轨上以 2.0 m/s 向右匀速滑动；B = 0.50 T 垂直纸面向里，回路总电阻 R = 0.20 Ω。 · A 0.40 m bar slides at 2.0 m/s to the right on parallel rails 0.40 m apart in a uniform 0.50 T field into the page; the loop resistance is 0.20 Ω.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "B",
          "0.50 T"
        ],
        [
          "L",
          "0.40 m"
        ],
        [
          "v",
          "2.0 m/s"
        ],
        [
          "R",
          "0.20 Ω"
        ]
      ]
    },
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 13.3 感应电流与磁力练习。"
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "em-u13-set1",
    "title": "动生电动势 · Motional emf",
    "sharedStimulus": "stim-em-u13-1",
    "stimulus": {
      "title": "导体棒切割磁感线 · A rod cutting field lines",
      "text": "B=0.40 T，棒长 0.50 m，垂直于磁场和棒的速度为 5.0 m/s。 · B=0.40 T, the rod is 0.50 m long, and the speed perpendicular to both the field and the rod is 5.0 m/s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "B",
            "0.40 T"
          ],
          [
            "ℓ",
            "0.50 m"
          ],
          [
            "v",
            "5.0 m/s"
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
        "id": "em-u13-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "动生电动势 · Motional emf",
        "type": "frq",
        "stem": "写出这段导体的动生电动势大小。 · Write the motional emf magnitude of this rod.",
        "answerLatex": "\\varepsilon=B\\ell v",
        "solution": "它来自电荷所受的磁力，等效于通量变化。 · It comes from the magnetic force on charges and is equivalent to a changing flux.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      },
      {
        "id": "em-u13-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "动生电动势 · Motional emf",
        "type": "frq",
        "check": "numeric",
        "stem": "求感应电动势大小（V）。 · Find the induced emf magnitude (V).",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1.0\\,\\mathrm{V}",
        "solution": "ε = 1.0 V。 · ε = 1.0 V.",
        "solutionLatex": "\\varepsilon=(0.40)(0.50)(5.0)=1.0\\,\\mathrm{V}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      },
      {
        "id": "em-u13-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "速度平行于磁场 · Velocity parallel to the field",
        "type": "mcq",
        "stem": "若速度改为与磁场平行，动生电动势是多少？ · If the velocity is redirected parallel to the field, what is the motional emf?",
        "choices": [
          {
            "text": "0 · 0",
            "correct": true
          },
          {
            "text": "仍是 1.0 V · It is still 1.0 V",
            "correct": false
          },
          {
            "text": "2.0 V · 2.0 V",
            "correct": false
          },
          {
            "text": "电动势反向但大小仍是 1.0 V · The emf reverses but its magnitude is still 1.0 V",
            "correct": false
          }
        ],
        "solution": "没有切割，电动势为零。 · The rod does not cut field lines, so the emf is zero.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u13-set2",
    "title": "平均感应电动势 · Average induced emf",
    "sharedStimulus": "stim-em-u13-2",
    "stimulus": {
      "title": "通量变化 · A change in flux",
      "text": "单匝回路的磁通量在 0.15 s 内变化 0.30 Wb。 · The flux through a single-turn loop changes by 0.30 Wb in 0.15 s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "ΔΦ",
            "0.30 Wb"
          ],
          [
            "Δt",
            "0.15 s"
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
        "id": "em-u13-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "法拉第定律 · Faraday's law",
        "type": "frq",
        "stem": "写出单匝回路平均感应电动势的大小。 · Write the magnitude of the average induced emf in a single-turn loop.",
        "answerLatex": "|\\varepsilon|=\\dfrac{|\\Delta\\Phi|}{\\Delta t}",
        "solution": "方向由楞次定律决定。 · The direction is fixed by Lenz's law.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      },
      {
        "id": "em-u13-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "通量变化率 · Rate of change of flux",
        "type": "frq",
        "check": "numeric",
        "stem": "求平均感应电动势的大小（V）。 · Find the magnitude of the average induced emf (V).",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2.0\\,\\mathrm{V}",
        "solution": "0.30/0.15 = 2.0 V。 · 0.30/0.15 = 2.0 V.",
        "solutionLatex": "|\\varepsilon|=\\dfrac{0.30}{0.15}=2.0\\,\\mathrm{V}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      },
      {
        "id": "em-u13-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "恒定通量 · Constant flux",
        "type": "mcq",
        "stem": "若此后通量保持 0.30 Wb 不再变化，感应电动势是多少？ · If the flux then stays at 0.30 Wb, what is the induced emf?",
        "choices": [
          {
            "text": "0 · 0",
            "correct": true
          },
          {
            "text": "仍是 2.0 V · It is still 2.0 V",
            "correct": false
          },
          {
            "text": "0.30 V · 0.30 V",
            "correct": false
          },
          {
            "text": "电动势与通量本身成正比，所以更大 · The emf is proportional to the flux itself, so it is larger",
            "correct": false
          }
        ],
        "solution": "通量不变就没有感应电动势。 · A constant flux induces no emf.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      },
      {
        "id": "em-u13-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "时间加倍后的平均电动势 · Average emf after the time doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "磁通量变化仍是 0.30 Wb，所用时间改为 0.30 s。求平均感应电动势大小（V）。 · The flux change is still 0.30 Wb and the time is now 0.30 s. Find the magnitude of the average induced emf (V).",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1.0\\,\\mathrm{V}",
        "solution": "平均电动势等于通量变化率。 · The average emf equals the rate of change of flux.",
        "solutionLatex": "|\\varepsilon|=\\dfrac{0.30}{0.30}=1.0\\,\\mathrm{V}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u13-set3",
    "title": "多匝线圈 · A coil of many turns",
    "sharedStimulus": "stim-em-u13-3",
    "stimulus": {
      "title": "N 匝线圈 · An N-turn coil",
      "text": "100 匝线圈，每匝磁通量在 0.25 s 内变化 0.050 Wb。 · A 100-turn coil. The flux through each turn changes by 0.050 Wb in 0.25 s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "N",
            "100"
          ],
          [
            "ΔΦ",
            "0.050 Wb"
          ],
          [
            "Δt",
            "0.25 s"
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
        "id": "em-u13-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "多匝法拉第定律 · Faraday's law for N turns",
        "type": "frq",
        "stem": "写出 N 匝线圈平均感应电动势的大小。 · Write the magnitude of the average induced emf of an N-turn coil.",
        "answerLatex": "|\\varepsilon|=N\\dfrac{|\\Delta\\Phi|}{\\Delta t}",
        "solution": "每匝的电动势相加。 · The emf of each turn adds.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      },
      {
        "id": "em-u13-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "多匝电动势 · Emf of many turns",
        "type": "frq",
        "check": "numeric",
        "stem": "求感应电动势大小（V）。 · Find the induced emf magnitude (V).",
        "expected": 20,
        "tol": 0.01,
        "answerLatex": "20\\,\\mathrm{V}",
        "solution": "100×0.20 = 20 V。 · 100×0.20 = 20 V.",
        "solutionLatex": "|\\varepsilon|=100\\times\\dfrac{0.050}{0.25}=20\\,\\mathrm{V}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      },
      {
        "id": "em-u13-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "楞次定律 · Lenz's law",
        "type": "mcq",
        "stem": "感应电流的磁场会怎样对待原来的通量变化？ · What does the field of the induced current do to the original change in flux?",
        "choices": [
          {
            "text": "反抗该通量变化 · It opposes that change in flux",
            "correct": true
          },
          {
            "text": "加强该通量变化 · It increases that change in flux",
            "correct": false
          },
          {
            "text": "与匝数无关，所以没有感应电流 · It is independent of the number of turns, so there is no induced current",
            "correct": false
          },
          {
            "text": "使通量立刻变为零 · It makes the flux immediately zero",
            "correct": false
          }
        ],
        "solution": "感应电流反抗引起它的通量变化。 · The induced current opposes the change in flux that produces it.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u13-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "法拉第电磁感应 · Faraday's law",
    "type": "mcq",
    "stem": "一个闭合回路放在磁场中。哪项正确？ · A closed loop sits in a magnetic field. Which statement is correct?",
    "choices": [
      {
        "text": "只有磁通量变化时才有感应电动势 · There is an induced emf only while the magnetic flux is changing",
        "correct": true
      },
      {
        "text": "很强的恒定磁场一定产生感应电动势 · A strong constant magnetic field must induce an emf",
        "correct": false
      },
      {
        "text": "感应电动势只由电阻决定 · The induced emf is fixed by the resistance alone",
        "correct": false
      },
      {
        "text": "楞次定律说感应电流会加强磁通量的变化 · Lenz's law says the induced current increases the change in flux",
        "correct": false
      }
    ],
    "solution": "感应电动势等于磁通量变化率的负值。恒定的通量不产生感应电动势。 · The induced emf equals the negative rate of change of flux. A constant flux induces no emf.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q013",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q016",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q019",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q022",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q025",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q028",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q031",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q034",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q037",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q040",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q041",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q043",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q044",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q045",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q046",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q047",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q048",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q049",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 4.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 4.0 m/s. Find the motional emf (V).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.8 V。 · ε = Bℓv = 0.8 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(4.0)=0.8\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q050",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 5.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 5.0 m/s. Find the motional emf (V).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1 V。 · ε = Bℓv = 1 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(5.0)=1\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q051",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 8.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 8.0 m/s. Find the motional emf (V).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 1.6 V。 · ε = Bℓv = 1.6 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(8.0)=1.6\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q052",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动生电动势 · Motional emf",
    "type": "frq",
    "check": "numeric",
    "stem": "B=0.25 T，棒长 0.80 m，垂直切割速度 2.0 m/s。求动生电动势大小（V）。 · B=0.25 T, the rod is 0.80 m long, and the perpendicular speed is 2.0 m/s. Find the motional emf (V).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{V}",
    "solution": "ε = Bℓv = 0.4 V。 · ε = Bℓv = 0.4 V.",
    "solutionLatex": "\\varepsilon=(0.25)(0.80)(2.0)=0.4\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q053",
    "title": "13.7 位移电流与电场变化率",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "平行板电容器以恒定电流 2.0 A 充电。求极板间电通量的变化率 dΦ_E/dt（V·m/s），取 ε₀=8.85×10⁻¹² C²/(N·m²)。",
    "expected": 230000000000,
    "tol": 0.03,
    "answerLatex": "2.3\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}",
    "solution": "I_d=ε₀dΦ_E/dt，充电时 I_d=I，故 dΦ_E/dt=I/ε₀≈2.3×10¹¹ V·m/s。",
    "solutionLatex": "\\dfrac{d\\Phi_E}{dt}=\\dfrac{I}{\\varepsilon_0}=\\dfrac{2.0}{8.85\\times10^{-12}}\\approx2.3\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.7",
        "label": "13.7 麦克斯韦方程与电磁波",
        "topicId": "em-u13:13.7"
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u13-set4",
    "title": "题组 4 · 滑棒上的感应电流与磁阻力 · Sliding bar: induced current and magnetic drag",
    "sharedStimulus": "stim-em-u13-4",
    "stimulus": {
      "title": "滑棒与磁阻力 · 物理情境",
      "text": "长 0.40 m 的导体棒在相距 0.40 m 的平行导轨上以 2.0 m/s 向右匀速滑动；B = 0.50 T 垂直纸面向里，回路总电阻 R = 0.20 Ω。 · A 0.40 m bar slides at 2.0 m/s to the right on parallel rails 0.40 m apart in a uniform 0.50 T field into the page; the loop resistance is 0.20 Ω.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "B",
            "0.50 T"
          ],
          [
            "L",
            "0.40 m"
          ],
          [
            "v",
            "2.0 m/s"
          ],
          [
            "R",
            "0.20 Ω"
          ]
        ]
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方题；用于 13.3 感应电流与磁力练习。"
    },
    "questions": [
      {
        "id": "em-u13-q054",
        "title": "滑棒的感应电流 · Induced current in the sliding bar",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求滑棒的感应电流 I（A）。 · Find the induced current I in the sliding bar (A).",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2.0\\,\\mathrm{A}",
        "solution": "ε=BLv=(0.50)(0.40)(2.0)=0.40 V，故 I=ε/R=2.0 A。 · ε=0.40 V, so I=2.0 A.",
        "solutionLatex": "I=\\dfrac{BLv}{R}=\\dfrac{(0.50)(0.40)(2.0)}{0.20}=2.0\\,\\mathrm{A}",
        "sourceId": "original",
        "source": "Original AP-style item (this project)",
        "license": "Project",
        "sourceUrl": "",
        "sourceNote": "原创 AP 风格题，非官方题；用于 13.3。",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.3",
            "label": "13.3 感应电流与磁力",
            "topicId": "em-u13:13.3"
          }
        ]
      },
      {
        "id": "em-u13-q055",
        "title": "磁阻力 · Magnetic drag",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求导体棒所受磁阻力的大小 F_B（N）。 · Find the magnitude of the magnetic drag F_B on the bar (N).",
        "expected": 0.4,
        "tol": 0.01,
        "answerLatex": "0.40\\,\\mathrm{N}",
        "solution": "F_B=BIL=(0.50)(2.0)(0.40)=0.40 N，方向与速度相反。 · F_B=0.40 N, opposite to the velocity.",
        "solutionLatex": "F_B=BIL=\\dfrac{B^2L^2v}{R}=\\dfrac{(0.50)^2(0.40)^2(2.0)}{0.20}=0.40\\,\\mathrm{N}",
        "sourceId": "original",
        "source": "Original AP-style item (this project)",
        "license": "Project",
        "sourceUrl": "",
        "sourceNote": "原创 AP 风格题，非官方题；用于 13.3。",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.3",
            "label": "13.3 感应电流与磁力",
            "topicId": "em-u13:13.3"
          }
        ]
      },
      {
        "id": "em-u13-q056",
        "title": "磁阻力方向 · Direction of the magnetic drag",
        "difficulty": "易",
        "type": "mcq",
        "stem": "B 垂直纸面向里，导体棒向右运动。导体棒所受磁阻力的方向是？ · B points into the page and the bar moves to the right. What is the direction of the magnetic drag on the bar?",
        "choices": [
          {
            "text": "向左 · to the left",
            "correct": true
          },
          {
            "text": "向右 · to the right",
            "correct": false
          },
          {
            "text": "向上 · upward",
            "correct": false
          },
          {
            "text": "向下 · downward",
            "correct": false
          }
        ],
        "solution": "磁通量向里增大，感应电流逆时针，棒中电流向上；L×B 向左，故磁力阻碍向右运动。 · The flux into the page increases, the current is counterclockwise, and the current in the bar is upward; L×B points left, so the drag opposes the rightward motion.",
        "sourceId": "original",
        "source": "Original AP-style item (this project)",
        "license": "Project",
        "sourceUrl": "",
        "sourceNote": "原创 AP 风格题，非官方题；用于 13.3。",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.3",
            "label": "13.3 感应电流与磁力",
            "topicId": "em-u13:13.3"
          }
        ]
      },
      {
        "id": "em-u13-q057",
        "title": "外力功率与焦耳热 · External power and Joule heating",
        "difficulty": "难",
        "type": "frq",
        "check": "numeric",
        "stem": "棒匀速滑动时，求外力为维持运动所需的功率 P（W）。 · While the bar moves at constant speed, find the external power P needed to maintain the motion (W).",
        "expected": 0.8,
        "tol": 0.01,
        "answerLatex": "0.80\\,\\mathrm{W}",
        "solution": "匀速时 F_app=F_B=0.40 N，P=F_app v=(0.40)(2.0)=0.80 W；也等于 I²R=(2.0)²(0.20)=0.80 W。 · At constant speed F_app=F_B=0.40 N, so P=0.80 W, equal to I²R=0.80 W.",
        "solutionLatex": "P=F_{\\mathrm{app}}v=I^2R=(2.0)^2(0.20)=0.80\\,\\mathrm{W}",
        "sourceId": "original",
        "source": "Original AP-style item (this project)",
        "license": "Project",
        "sourceUrl": "",
        "sourceNote": "原创 AP 风格题，非官方题；用于 13.3。",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.3",
            "label": "13.3 感应电流与磁力",
            "topicId": "em-u13:13.3"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u13-q058",
    "title": "13.7 变化磁场诱导的电场",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "半径 R=0.20 m 的圆形区域内磁场均匀且垂直纸面向里，dB/dt=0.50 T/s。求 r=0.10 m 处感应电场的大小（V/m）。 · A uniform magnetic field inside a 0.20 m radius region points into the page and increases at 0.50 T/s. Find the induced electric field at r=0.10 m (V/m).",
    "expected": 0.025,
    "tol": 0.03,
    "answerLatex": "2.5\\times10^{-2}\\,\\mathrm{V/m}",
    "solution": "r<R 时 E=(r/2)|dB/dt|=(0.10/2)(0.50)=0.025 V/m。感应电场沿同心圆切向，逆时针；即使没有导线也存在。 · For r<R, E=(r/2)|dB/dt|=0.025 V/m, tangent to the circle and counterclockwise; it exists even without a wire.",
    "solutionLatex": "E=\\dfrac{r}{2}\\left|\\dfrac{dB}{dt}\\right|=\\dfrac{0.10}{2}(0.50)=2.5\\times10^{-2}\\,\\mathrm{V/m}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 13.7 第三麦克斯韦方程。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.7",
        "label": "13.7 麦克斯韦方程与电磁波",
        "topicId": "em-u13:13.7"
      }
    ]
  },
  {
    "id": "em-u13-q059",
    "title": "13.7 静电场与感应电场辨析",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "关于静电场与变化磁场诱导的电场，下列哪项正确？ · Which statement about electrostatic and induced electric fields is correct?",
    "choices": [
      {
        "text": "感应电场线闭合，∮E·dl=−dΦ_B/dt≠0 · Induced field lines are closed and ∮E·dl=−dΦ_B/dt≠0",
        "correct": true
      },
      {
        "text": "感应电场是保守场，存在全局标量势 · The induced field is conservative and has a global scalar potential",
        "correct": false
      },
      {
        "text": "静电场绕任意闭合路径的环流不为零 · The electrostatic circulation around any closed path is nonzero",
        "correct": false
      },
      {
        "text": "只有存在导线时才会产生感应电场 · An induced field exists only when a wire is present",
        "correct": false
      }
    ],
    "solution": "感应电场由变化磁通量产生，场线闭合，环流等于磁通量变化率的负值，因此不是保守场、没有全局标量势；即使没有导线也存在。静电场由电荷产生，场线起止于电荷，环流为零。 · The induced field comes from changing flux, has closed field lines and nonzero circulation, and is nonconservative; it exists without a wire. The electrostatic field comes from charge, has field lines that start and end on charge, and has zero circulation.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 13.7 感应电场与静电场比较。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.7",
        "label": "13.7 麦克斯韦方程与电磁波",
        "topicId": "em-u13:13.7"
      }
    ]
  },
  {
    "id": "em-u13-q060",
    "title": "13.8 滑杆的终端速度 · Terminal speed of a sliding bar",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "水平滑杆质量 m=0.10 kg、长度 L=0.40 m、回路总电阻 R=0.20 Ω，处在垂直纸面向里的匀强磁场 B=0.50 T 中。恒定外力 F_app=0.20 N 向右拉动滑杆。求终端速度 v_t（m/s）。 · A horizontal bar of mass 0.10 kg and length 0.40 m moves on rails with total resistance 0.20 Ω in a uniform 0.50 T field into the page. A constant 0.20 N force pulls it to the right. Find its terminal speed (m/s).",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "v_t=1.0\\,\\mathrm{m/s}",
    "solution": "终端时 a=0，F_app=B²L²v_t/R，所以 v_t=F_app R/(B²L²)=1.0 m/s；时间常数 τ=mR/(B²L²)=0.50 s。 · At terminal speed a=0, so F_app=B²L²v_t/R and v_t=1.0 m/s; the time constant is τ=mR/(B²L²)=0.50 s.",
    "solutionLatex": "v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}=\\dfrac{(0.20)(0.20)}{(0.50)^{2}(0.40)^{2}}=1.0\\,\\mathrm{m/s}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 13.8 滑杆终端速度。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.8",
        "label": "13.8 感应回路受力与运动",
        "topicId": "em-u13:13.8"
      }
    ]
  },
  {
    "id": "em-u13-q061",
    "title": "13.8 受力段与完全进入场区 · Force-bearing segment and fully inside the field",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "矩形线框以恒定速度穿过有限匀强磁场区域。关于磁力，下列哪项正确？ · A rectangular loop moves at constant speed through a finite uniform magnetic field region. Which statement about the magnetic force is correct?",
    "choices": [
      {
        "text": "只有位于场区内的线段受力；完全进入恒定匀强场区后 I=0、F=0。 · Only in-field segments feel force; fully inside a steady uniform field, I=0 and F=0.",
        "correct": true
      },
      {
        "text": "整个线框处处受力，因为线框处于磁场附近。 · The whole loop feels force everywhere because it is near the field.",
        "correct": false
      },
      {
        "text": "完全进入场区后磁力最大，因为穿过线框的磁通量最大。 · The force is largest when fully inside because the flux through the loop is largest.",
        "correct": false
      },
      {
        "text": "进入和离开场区时磁力都向前，帮助线框运动。 · Entering and leaving, the magnetic force points forward and helps the motion.",
        "correct": false
      }
    ],
    "solution": "磁力只作用在场区内的载流线段上。完全进入恒定匀强场区后磁通量不变，感应电动势、电流与磁力均为零；进入和离开时磁力都阻碍相对运动（向后）。 · Magnetic force acts only on current-carrying segments inside the field. Once fully inside a steady uniform region the flux is constant, so the emf, current, and magnetic force are all zero; entering and leaving, the force opposes the motion (backward).",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 13.8 受力段识别与三阶段运动。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.8",
        "label": "13.8 感应回路受力与运动",
        "topicId": "em-u13:13.8"
      }
    ]
  },
  {
    "id": "em-u13-q062",
    "title": "13.8 磁体与回路的作用力 · Forces between a magnet and a loop",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "stem": "学生声称：“只有回路受到磁力，磁体不受力。”用楞次定律、牛顿第三定律与能量守恒评价该说法。 · A student claims: “Only the loop feels a magnetic force; the magnet feels none.” Evaluate this claim using Lenz's law, Newton's third law, and energy conservation.",
    "answer": "说法错误。感应电流产生的磁场阻碍磁体与回路的相对运动：磁体靠近时回路排斥磁体，远离时吸引磁体；磁体与回路之间的力是等大反向的作用—反作用对。外力移动磁体做的机械功转化为回路中的焦耳热。 · The claim is false. The induced current's field opposes the relative motion: the loop repels an approaching magnet and attracts a receding one. The forces on magnet and loop are equal and opposite action–reaction pairs, and mechanical work done by the external agent becomes Joule heat in the loop.",
    "solution": "楞次定律给出感应电流方向，使回路磁矩反抗磁通量变化；因此磁体也受到回路磁场的反作用力。牛顿第三定律要求两者受力等大反向；能量守恒要求维持相对运动的外力做功等于 I²R 焦耳热（忽略动能变化时）。 · Lenz's law sets the induced current so the loop's magnetic moment opposes the flux change, so the magnet also feels a reaction force from the loop's field. Newton's third law makes the two forces equal and opposite; energy conservation equates the external work needed to maintain the relative motion with the Joule heating I²R (when kinetic energy is unchanged).",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格 CER 题，非官方题；用于 13.8 磁体—回路作用力。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.8",
        "label": "13.8 感应回路受力与运动",
        "topicId": "em-u13:13.8"
      }
    ]
  }
];
