/** Practice bank for em-u10 */
export const UNIT_REF = {
  "id": "em-u10",
  "code": "10",
  "titleZh": "导体与电容器",
  "titleEn": "Conductors and Capacitors",
  "layer": "ap",
  "subject": "em"
};
export const stimuli = {
  "stim-em-u10-1": {
    "title": "电容器直流稳态 · DC steady state with a capacitor",
    "text": "理想电池、电阻与电容串联，开关闭合足够长时间。求回路稳态电流。 · A battery, resistor, and capacitor have been connected for a long time.",
    "diagram": {
      "kind": "circuit",
      "elements": [
        {
          "type": "battery",
          "label": "ε"
        },
        {
          "type": "resistor",
          "label": "R"
        },
        {
          "type": "capacitor",
          "label": "C"
        }
      ],
      "ammeter": true
    },
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "ε",
          "12 V"
        ],
        [
          "R",
          "6 Ω"
        ],
        [
          "C",
          "50 μF"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  },
  "stim-em-u10-2": {
    "title": "电容器的电荷 · Charge on a capacitor",
    "text": "电容 4.0 μF 接在 12 V 电压上。 · A 4.0 μF capacitor is connected across 12 V.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "C",
          "4.0 μF"
        ],
        [
          "V",
          "12 V"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u10-3": {
    "title": "储存的电能 · Stored electric energy",
    "text": "电容 2.0 μF，电压 10 V。 · The capacitance is 2.0 μF and the voltage is 10 V.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "C",
          "2.0 μF"
        ],
        [
          "V",
          "10 V"
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
    "id": "em-u10-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-em-u10-1",
    "stimulus": {
      "title": "电容器直流稳态 · DC steady state with a capacitor",
      "text": "理想电池、电阻与电容串联，开关闭合足够长时间。求回路稳态电流。 · A battery, resistor, and capacitor have been connected for a long time.",
      "diagram": {
        "kind": "circuit",
        "elements": [
          {
            "type": "battery",
            "label": "ε"
          },
          {
            "type": "resistor",
            "label": "R"
          },
          {
            "type": "capacitor",
            "label": "C"
          }
        ],
        "ammeter": true
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "ε",
            "12 V"
          ],
          [
            "R",
            "6 Ω"
          ],
          [
            "C",
            "50 μF"
          ]
        ]
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
    },
    "questions": [
      {
        "id": "em-u10-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电容的直流稳态 · DC steady state of a capacitor",
        "type": "frq",
        "stem": "开关闭合很久以后，写出回路电流，并说明电容的作用。 · A long time after the switch closes, write the loop current and say what the capacitor does.",
        "answerLatex": "I=0",
        "solution": "直流稳态下电容相当于开路。 · In DC steady state the capacitor is an open circuit.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      },
      {
        "id": "em-u10-q002",
        "title": "电容器稳态电流 · Steady capacitor current",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "开关闭合足够长时间后，求回路稳态电流 I（A）。 · A long time after the switch closes, the capacitor current is zero.",
        "expected": 0,
        "tol": 0.01,
        "solution": "直流稳态下电容器相当于开路。 · A long time after the switch closes, the capacitor current is zero.",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ],
        "answerLatex": "0\\,\\mathrm{A}",
        "solutionLatex": "I_{\\infty}=0\\ \\text{（电容器相当于开路）}."
      },
      {
        "id": "em-u10-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "稳态电流 · Steady current",
        "type": "mcq",
        "stem": "电池、电阻和电容串联，开关闭合已经很久。回路电流是哪一项？ · A battery, resistor, and capacitor are in series, and the switch has been closed for a long time. Which value is the loop current?",
        "choices": [
          {
            "text": "0 · 0",
            "correct": true
          },
          {
            "text": "ε/R · ε/R",
            "correct": false
          },
          {
            "text": "εR · εR",
            "correct": false
          },
          {
            "text": "ε/(2R) · ε/(2R)",
            "correct": false
          }
        ],
        "solution": "电容充满后支路开路，直流电流为零，不是 ε/R。 · Once the capacitor is charged the branch is open, so the DC current is zero, not ε/R.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u10-set2",
    "title": "电容的电荷 · Charge on a capacitor",
    "sharedStimulus": "stim-em-u10-2",
    "stimulus": {
      "title": "电容器的电荷 · Charge on a capacitor",
      "text": "电容 4.0 μF 接在 12 V 电压上。 · A 4.0 μF capacitor is connected across 12 V.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "C",
            "4.0 μF"
          ],
          [
            "V",
            "12 V"
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
        "id": "em-u10-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电容定义 · Definition of capacitance",
        "type": "frq",
        "stem": "写出电荷、电容和电压的关系。 · Write the relation among charge, capacitance, and voltage.",
        "answerLatex": "Q=CV",
        "solution": "C 与 Q、V 的比值在线性电容器上是常量。 · For a linear capacitor, C is the constant ratio Q/V.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      },
      {
        "id": "em-u10-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电荷量 · Charge",
        "type": "frq",
        "check": "numeric",
        "stem": "求电荷量（μC）。 · Find the charge (μC).",
        "expected": 48,
        "tol": 0.01,
        "answerLatex": "48\\,\\mu\\mathrm{C}",
        "solution": "Q = 48 μC。 · Q = 48 μC.",
        "solutionLatex": "Q=CV=(4.0\\times10^{-6})(12)=4.8\\times10^{-5}\\,\\mathrm{C}=48\\,\\mu\\mathrm{C}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      },
      {
        "id": "em-u10-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电压与电荷 · Voltage and charge",
        "type": "mcq",
        "stem": "同一只电容器，电压加倍。电荷如何？ · For the same capacitor, the voltage doubles. What happens to the charge?",
        "choices": [
          {
            "text": "电荷加倍 · The charge doubles",
            "correct": true
          },
          {
            "text": "电荷不变 · The charge is unchanged",
            "correct": false
          },
          {
            "text": "电荷减半 · The charge is halved",
            "correct": false
          },
          {
            "text": "电容加倍 · The capacitance doubles",
            "correct": false
          }
        ],
        "solution": "Q 与 V 成正比。 · Q is proportional to V.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      },
      {
        "id": "em-u10-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电压加倍后的电荷 · Charge after the voltage doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "电容仍是 4.0 μF，电压改为 24 V。求电荷量（μC）。 · The capacitance is still 4.0 μF and the voltage is now 24 V. Find the charge (μC).",
        "expected": 96,
        "tol": 0.01,
        "answerLatex": "96\\,\\mu\\mathrm{C}",
        "solution": "Q = CV = 96 μC。 · Q = CV = 96 μC.",
        "solutionLatex": "Q=(4.0\\times10^{-6})(24)=9.6\\times10^{-5}\\,\\mathrm{C}=96\\,\\mu\\mathrm{C}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u10-set3",
    "title": "电容器储能 · Energy stored in a capacitor",
    "sharedStimulus": "stim-em-u10-3",
    "stimulus": {
      "title": "储存的电能 · Stored electric energy",
      "text": "电容 2.0 μF，电压 10 V。 · The capacitance is 2.0 μF and the voltage is 10 V.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "C",
            "2.0 μF"
          ],
          [
            "V",
            "10 V"
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
        "id": "em-u10-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "储能公式 · Stored-energy formula",
        "type": "frq",
        "stem": "写出用 C 和 V 表示的储能。 · Write the stored energy in terms of C and V.",
        "answerLatex": "U=\\dfrac{1}{2}CV^{2}",
        "solution": "也等于 Q²/(2C) 或 QV/2。 · It also equals Q²/(2C) or QV/2.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      },
      {
        "id": "em-u10-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "储能 · Stored energy",
        "type": "frq",
        "check": "numeric",
        "stem": "求储存的能量（J）。 · Find the stored energy (J).",
        "expected": 0.0001,
        "tol": 0.02,
        "answerLatex": "1.0\\times10^{-4}\\,\\mathrm{J}",
        "solution": "U = 1.0×10⁻⁴ J。 · U = 1.0×10⁻⁴ J.",
        "solutionLatex": "U=\\dfrac{1}{2}(2.0\\times10^{-6})(10)^{2}=1.0\\times10^{-4}\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      },
      {
        "id": "em-u10-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "能量与电压 · Energy and voltage",
        "type": "mcq",
        "stem": "电容不变，电压加倍。储能变为原来的多少？ · The capacitance is fixed and the voltage doubles. The stored energy becomes what multiple of its original value?",
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
            "text": "1/2 · 1/2",
            "correct": false
          }
        ],
        "solution": "U 与 V² 成正比，变为 4 倍。 · U is proportional to V², so it becomes 4 times as large.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.3",
            "label": "10.3 电容器",
            "topicId": "em-u10:10.3"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u10-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "相同导体接触 · Identical conductors touching",
    "type": "mcq",
    "stem": "两个相同的导体球分别带 +6 μC 和 −2 μC，接触后再分开。哪项正确？ · Two identical conducting spheres carry +6 μC and −2 μC, touch, and are separated. Which statement is correct?",
    "choices": [
      {
        "text": "每个球最后带 +2 μC · Each sphere ends with +2 μC",
        "correct": true
      },
      {
        "text": "两球保持原来的电荷 · Each sphere keeps its original charge",
        "correct": false
      },
      {
        "text": "电荷在接触时被中和为零 · Contact destroys the charge, so both end at zero",
        "correct": false
      },
      {
        "text": "带正电更多的球把电荷全部交给另一个球 · The more positive sphere gives all of its charge to the other",
        "correct": false
      }
    ],
    "solution": "净电荷 +4 μC 守恒，并在相同导体上平分，各为 +2 μC。 · The net charge +4 μC is conserved and shared equally by identical conductors, so each has +2 μC.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q013",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q016",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "介电常数 · Dielectric constant",
    "type": "mcq",
    "stem": "在平行板电容器的真空间隙中填满均匀电介质，κ > 1。哪项正确？ · A uniform dielectric with κ > 1 fills the vacuum gap of a parallel-plate capacitor. Which statement is correct?",
    "choices": [
      {
        "text": "电容变为 κC0，大于原来的真空电容 · The capacitance becomes κC0, larger than the vacuum value",
        "correct": true
      },
      {
        "text": "电介质使电容减小 · A dielectric decreases the capacitance",
        "correct": false
      },
      {
        "text": "κ 总是小于 1 · κ is always less than 1",
        "correct": false
      },
      {
        "text": "理想电介质像金属一样自由导电 · An ideal dielectric conducts freely, like a metal",
        "correct": false
      }
    ],
    "solution": "电容变为 κC0。孤立电容器的电势差下降；接在电池上时电荷增加。 · The capacitance becomes κC0. An isolated capacitor’s potential difference falls; on a battery the charge rises.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q019",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q022",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q025",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q028",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q031",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q034",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q037",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q040",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q041",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 6 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 6 V. Find the charge (μC).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mu\\mathrm{C}",
    "solution": "Q = 12 μC。 · Q = 12 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(6)=12\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 12 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 12 V. Find the charge (μC).",
    "expected": 24,
    "tol": 0.01,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "Q = 24 μC。 · Q = 24 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(12)=24\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q043",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 15 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 15 V. Find the charge (μC).",
    "expected": 30,
    "tol": 0.01,
    "answerLatex": "30\\,\\mu\\mathrm{C}",
    "solution": "Q = 30 μC。 · Q = 30 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(15)=30\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q044",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电容器电荷 · Capacitor charge",
    "type": "frq",
    "check": "numeric",
    "stem": "电容 2.0 μF 的电压是 20 V。求电荷量（μC）。 · A 2.0 μF capacitor is at 20 V. Find the charge (μC).",
    "expected": 40,
    "tol": 0.01,
    "answerLatex": "40\\,\\mu\\mathrm{C}",
    "solution": "Q = 40 μC。 · Q = 40 μC.",
    "solutionLatex": "Q=CV=(2.0\\times10^{-6})(20)=40\\times10^{-6}\\,\\mathrm{C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q045",
    "title": "10.5 两导体球接触后的电荷分配",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "两个半径分别为 R₁=2.0 cm、R₂=4.0 cm 的导体球用细导线连接，系统总电荷 +12 μC。求半径较小的球所带电荷 Q₁（μC）。",
    "expected": 4,
    "tol": 0.02,
    "answerLatex": "4.0\\,\\mathrm{\\mu C}",
    "solution": "连接后同电势，Q₁ ÷ Q₂=R₁ ÷ R₂=1 ÷ 2；总电荷 12 μC，故 Q₁=4.0 μC、Q₂=8.0 μC。",
    "solutionLatex": "Q_1=\\dfrac{R_1}{R_1+R_2}Q_{\\mathrm{total}}=\\dfrac{2.0}{6.0}(12\\,\\mathrm{\\mu C})=4.0\\,\\mathrm{\\mu C}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.5",
        "label": "10.5 接触再分布与感应接地",
        "topicId": "em-u10:10.5"
      }
    ]
  },
  {
    "id": "em-u10-q046",
    "title": "10.5 孤立导体球接地后的电荷",
    "type": "mcq",
    "difficulty": "易",
    "calculator": false,
    "stem": "一个带 +5.0 μC 的孤立导体球通过导线接地，达到静电平衡后它的净电荷变为多少？",
    "choices": [
      {
        "text": "0 μC，电子从地球流入中和正电荷",
        "correct": true
      },
      {
        "text": "+5.0 μC 保持不变，因为地球不导电荷",
        "correct": false
      },
      {
        "text": "−5.0 μC，正电荷被地球吸走",
        "correct": false
      },
      {
        "text": "无法判断，取决于导体半径",
        "correct": false
      }
    ],
    "solution": "接地使导体与地球同电势（V=0）；孤立球最终净电荷为零，电子从地球流入。",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.5",
        "label": "10.5 接触再分布与感应接地",
        "topicId": "em-u10:10.5"
      }
    ]
  },
  {
    "id": "em-u10-q047",
    "title": "10.6 外场中导体表面的感应电荷密度",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "一块大面积中性导体板置于 E₀=1.0×10⁴ V/m 的匀强外场中，达到静电平衡。求导体两面的感应面电荷密度大小（C/m²），取 ε₀=8.85×10⁻¹² C²/(N·m²)。",
    "expected": 8.85e-8,
    "tol": 0.03,
    "answerLatex": "8.9\\times10^{-8}\\,\\mathrm{C/m^{2}}",
    "solution": "导体内部 E=0；表面外侧场强 E_surface=σ ÷ ε₀。取 σ=ε₀E₀=8.85×10⁻⁸ C/m²。",
    "solutionLatex": "\\sigma=\\varepsilon_0E_0=(8.85\\times10^{-12})(1.0\\times10^{4})=8.85\\times10^{-8}\\,\\mathrm{C/m^{2}}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.6",
        "label": "10.6 导体静电平衡的建立",
        "topicId": "em-u10:10.6"
      }
    ]
  },
  {
    "id": "em-u10-q048",
    "title": "10.6 平衡时间与测量分辨率的数量级",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stem": "某实验的时间分辨率为 1.0 ns，导体达到静电平衡的时间约为 10⁻¹⁶ s。求测量分辨率与平衡时间的比值（填科学计数法系数，如 1.0e7）。",
    "expected": 10000000,
    "tol": 0.02,
    "answerLatex": "1.0\\times10^{7}",
    "solution": "比值=1.0×10⁻⁹ s ÷ 1.0×10⁻¹⁶ s=1.0×10⁷，因此瞬态过程无法被分辨。",
    "solutionLatex": "\\dfrac{1.0\\times10^{-9}}{1.0\\times10^{-16}}=1.0\\times10^{7}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.6",
        "label": "10.6 导体静电平衡的建立",
        "topicId": "em-u10:10.6"
      }
    ]
  },
  {
    "id": "em-u10-q055",
    "title": "10.7 平行板电容器的电荷特征",
    "type": "mcq",
    "difficulty": "易",
    "calculator": false,
    "stem": "下列哪项最准确地描述平行板电容器？ · Which statement best describes a parallel-plate capacitor?",
    "choices": [
      {
        "text": "两片分离的平行导体板带等量异号电荷，净电荷为零 · Two separated parallel conducting plates carry equal and opposite charges, with zero net charge",
        "correct": true
      },
      {
        "text": "两片导体板带同号等量电荷 · The two plates carry equal same-sign charges",
        "correct": false
      },
      {
        "text": "只有一片导体板储存电荷 · Only one conducting plate stores charge",
        "correct": false
      },
      {
        "text": "电荷只能分布在极板外表面 · Charge resides only on the outer surfaces",
        "correct": false
      }
    ],
    "solution": "电容器由两片分离的平行导体板组成，充电时两板带等量异号电荷，整个电容器净电荷为零；电荷主要分布在相对的内表面。 · A capacitor has two separated parallel conductors with equal and opposite charges; the net charge is zero and charge resides mainly on the facing inner surfaces.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 10.7 平行板电容器。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.7",
        "label": "10.7 平行板电容的电场与充电功",
        "topicId": "em-u10:10.7"
      }
    ]
  },
  {
    "id": "em-u10-q056",
    "title": "10.7 两无限大带电面的合场",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "两片无限大平行导体板分别带 +σ 与 −σ。板间与板外的合电场分别是？ · Two infinite parallel sheets carry +σ and −σ. What are the fields between and outside the plates?",
    "choices": [
      {
        "text": "板间 σ ÷ ε₀，板外 0 · σ/ε₀ between, 0 outside",
        "correct": true
      },
      {
        "text": "板间 σ ÷ (2ε₀)，板外 0 · σ/(2ε₀) between, 0 outside",
        "correct": false
      },
      {
        "text": "板间 0，板外 σ ÷ ε₀ · 0 between, σ/ε₀ outside",
        "correct": false
      },
      {
        "text": "板间 σ ÷ ε₀，板外 2σ ÷ ε₀ · σ/ε₀ between, 2σ/ε₀ outside",
        "correct": false
      }
    ],
    "solution": "单层带电面产生 σ ÷ (2ε₀)。板间两场同向叠加为 σ ÷ ε₀；板外两场反向相消为零。 · Each sheet gives σ/(2ε₀); between the plates the fields add to σ/ε₀, while outside they cancel to zero.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 10.7 平行板电场。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.7",
        "label": "10.7 平行板电容的电场与充电功",
        "topicId": "em-u10:10.7"
      }
    ]
  },
  {
    "id": "em-u10-q057",
    "title": "10.7 电容储能与充电功",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stem": "C=470 μF 的电容器充电到 V=9.0 V。求储存的电场能 U（J）。 · A 470 μF capacitor is charged to 9.0 V. Find the stored energy U in joules.",
    "expected": 0.019,
    "tol": 0.03,
    "answerLatex": "1.9\\times10^{-2}\\,\\mathrm{J}",
    "solution": "U=½CV²=½(470×10⁻⁶)(9.0)²=1.90×10⁻² J。可逆外力充电功等于储能；恒压电源总功 QV=3.81×10⁻² J，另一半耗散或转化为机械功。 · U=½CV²=1.90×10⁻² J. The reversible charging work equals the stored energy; a constant-voltage source supplies QV=3.81×10⁻² J, with half dissipated or converted to mechanical work.",
    "solutionLatex": "U=\\dfrac{1}{2}CV^{2}=\\dfrac{1}{2}(470\\times10^{-6})(9.0)^{2}=1.9\\times10^{-2}\\,\\mathrm{J}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 10.7 充电功与储能。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.7",
        "label": "10.7 平行板电容的电场与充电功",
        "topicId": "em-u10:10.7"
      }
    ]
  },
  {
    "id": "em-u10-q058",
    "title": "10.7 孤立电容器插入电介质",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "C₀=100 pF 的电容器充电到 12 V 后断开电源，再插入 κ=3.0 的电介质。求插入后的电压 V（V）。 · A 100 pF capacitor is charged to 12 V, disconnected, then filled with a dielectric of κ=3.0. Find the final voltage V in volts.",
    "expected": 4,
    "tol": 0.02,
    "answerLatex": "4.0\\,\\mathrm{V}",
    "solution": "孤立时 Q 不变，C→κC=300 pF，故 V=Q ÷ C 变为原来的 1/κ=4.0 V；E 与 U 也降为原来的 1/3。 · With Q fixed, C→κC=300 pF, so V drops to 1/κ=4.0 V; E and U also fall to one third.",
    "solutionLatex": "Q=C_0V_0=(100\\times10^{-12})(12)=1.2\\times10^{-9}\\,\\mathrm{C},\\qquad V=\\dfrac{Q}{\\kappa C_0}=\\dfrac{12}{3.0}=4.0\\,\\mathrm{V}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 10.7 电介质与孤立约束。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u10/10.7",
        "label": "10.7 平行板电容的电场与充电功",
        "topicId": "em-u10:10.7"
      }
    ]
  }
];
