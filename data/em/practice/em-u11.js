/** Practice bank for em-u11 */
export const UNIT_REF = {
  "id": "em-u11",
  "code": "11",
  "titleZh": "电路",
  "titleEn": "Electric Circuits",
  "layer": "ap",
  "subject": "em"
};
export const stimuli = {
  "stim-em-u11-1": {
    "title": "纯电阻单回路 · Single resistive loop",
    "text": "理想电池与电阻串联。求回路电流；若回路含电容，注明直流稳态。 · An ideal battery is in series with one resistor.",
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
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  },
  "stim-em-u11-2": {
    "title": "两只电阻串联 · Two resistors in series",
    "text": "12 V 理想电源与 4.0 Ω、8.0 Ω 串联。 · A 12 V ideal source is in series with 4.0 Ω and 8.0 Ω.",
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
          "R1",
          "4.0 Ω"
        ],
        [
          "R2",
          "8.0 Ω"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u11-3": {
    "title": "两只电阻并联 · Two resistors in parallel",
    "text": "12 V 理想电源给两只 6.0 Ω 电阻并联供电。 · A 12 V ideal source feeds two 6.0 Ω resistors in parallel.",
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
          "6.0 Ω"
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
    "id": "em-u11-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-em-u11-1",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与电阻串联。求回路电流；若回路含电容，注明直流稳态。 · An ideal battery is in series with one resistor.",
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
        "id": "em-u11-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "欧姆定律 · Ohm's law",
        "type": "frq",
        "stem": "对图中的理想电池和单只电阻，写出电流的符号式。 · For the ideal battery and the single resistor in the figure, write the current symbolically.",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "回路只有一只电阻，电流处处相同。 · The loop has one resistor, and the current is the same everywhere.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.3",
            "label": "11.3 电阻与欧姆定律",
            "topicId": "em-u11:11.3"
          }
        ]
      },
      {
        "id": "em-u11-q002",
        "title": "纯电阻回路电流 · Current in a resistive loop",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求纯电阻回路的电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "expected": 2,
        "tol": 0.01,
        "solution": "纯电阻回路；若串联电容，直流稳态 I=0。 · For one resistor on an ideal battery, I = ε/R.",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.3",
            "label": "11.3 电阻与欧姆定律",
            "topicId": "em-u11:11.3"
          }
        ],
        "answerLatex": "2.00\\,\\mathrm{A}",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      },
      {
        "id": "em-u11-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "回路电流 · Loop current",
        "type": "mcq",
        "stem": "理想电池 ε 只与电阻 R 串联。电流是哪一项？ · An ideal battery ε is in series with only the resistor R. Which expression is the current?",
        "choices": [
          {
            "text": "ε/R · ε/R",
            "correct": true
          },
          {
            "text": "εR · εR",
            "correct": false
          },
          {
            "text": "0 · 0",
            "correct": false
          },
          {
            "text": "R/ε · R/ε",
            "correct": false
          }
        ],
        "solution": "欧姆定律给出 I = ε/R。图中没有电容，电流不是零。 · Ohm’s law gives I = ε/R. There is no capacitor in the figure, so the current is not zero.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.3",
            "label": "11.3 电阻与欧姆定律",
            "topicId": "em-u11:11.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u11-set2",
    "title": "串联电阻 · Resistors in series",
    "sharedStimulus": "stim-em-u11-2",
    "stimulus": {
      "title": "两只电阻串联 · Two resistors in series",
      "text": "12 V 理想电源与 4.0 Ω、8.0 Ω 串联。 · A 12 V ideal source is in series with 4.0 Ω and 8.0 Ω.",
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
            "R1",
            "4.0 Ω"
          ],
          [
            "R2",
            "8.0 Ω"
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
        "id": "em-u11-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "串联电流 · Series current",
        "type": "frq",
        "stem": "写出串联回路的电流。 · Write the current in the series loop.",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R_1+R_2}",
        "solution": "串联电阻相加，电流相同。 · Series resistances add, and the current is the same.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.5",
            "label": "11.5 复合直流电路",
            "topicId": "em-u11:11.5"
          }
        ]
      },
      {
        "id": "em-u11-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "串联电流 · Series current",
        "type": "frq",
        "check": "numeric",
        "stem": "求电流（A）。 · Find the current (A).",
        "expected": 1,
        "tol": 0.01,
        "answerLatex": "1.0\\,\\mathrm{A}",
        "solution": "I = 12/12 = 1.0 A。 · I = 12/12 = 1.0 A.",
        "solutionLatex": "I=\\dfrac{12}{4.0+8.0}=1.0\\,\\mathrm{A}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.5",
            "label": "11.5 复合直流电路",
            "topicId": "em-u11:11.5"
          }
        ]
      },
      {
        "id": "em-u11-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "谁的电压更大 · Which voltage is larger",
        "type": "mcq",
        "stem": "这两只电阻上的电压，哪项正确？ · Which statement about the voltages across these two resistors is correct?",
        "choices": [
          {
            "text": "8.0 Ω 上的电压更大 · The voltage is larger across the 8.0 Ω resistor",
            "correct": true
          },
          {
            "text": "两只电阻电压相同 · The voltages are equal",
            "correct": false
          },
          {
            "text": "4.0 Ω 上的电压更大 · The voltage is larger across the 4.0 Ω resistor",
            "correct": false
          },
          {
            "text": "电流在第二只电阻里减半 · The current is halved in the second resistor",
            "correct": false
          }
        ],
        "solution": "电流相同，电压与电阻成正比，8 Ω 上是 8 V，4 Ω 上是 4 V。 · The current is the same, so voltage is proportional to resistance: 8 V on 8 Ω and 4 V on 4 Ω.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.5",
            "label": "11.5 复合直流电路",
            "topicId": "em-u11:11.5"
          }
        ]
      },
      {
        "id": "em-u11-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电阻加倍后的串联电流 · Series current after both resistors double",
        "type": "frq",
        "check": "numeric",
        "stem": "电源仍是 12 V，两只串联电阻改为 8.0 Ω 与 16 Ω。求电流（A）。 · The source is still 12 V and the series resistors are now 8.0 Ω and 16 Ω. Find the current (A).",
        "expected": 0.5,
        "tol": 0.01,
        "answerLatex": "0.50\\,\\mathrm{A}",
        "solution": "总电阻 24 Ω，电流 0.50 A。 · The total resistance is 24 Ω, so the current is 0.50 A.",
        "solutionLatex": "I=\\dfrac{12}{8.0+16}=0.50\\,\\mathrm{A}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.5",
            "label": "11.5 复合直流电路",
            "topicId": "em-u11:11.5"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u11-set3",
    "title": "并联电阻 · Resistors in parallel",
    "sharedStimulus": "stim-em-u11-3",
    "stimulus": {
      "title": "两只电阻并联 · Two resistors in parallel",
      "text": "12 V 理想电源给两只 6.0 Ω 电阻并联供电。 · A 12 V ideal source feeds two 6.0 Ω resistors in parallel.",
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
            "6.0 Ω"
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
        "id": "em-u11-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "并联等效 · Parallel equivalent",
        "type": "frq",
        "stem": "写出两只相同电阻并联的等效电阻和总电流。 · Write the equivalent resistance and total current of two equal resistors in parallel.",
        "answerLatex": "R_{\\mathrm{eq}}=\\dfrac{R}{2},\\quad I=\\dfrac{\\varepsilon}{R_{\\mathrm{eq}}}",
        "solution": "并联电压相同。 · Parallel elements have the same voltage.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.5",
            "label": "11.5 复合直流电路",
            "topicId": "em-u11:11.5"
          }
        ]
      },
      {
        "id": "em-u11-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "并联总电流 · Total parallel current",
        "type": "frq",
        "check": "numeric",
        "stem": "求电源输出的总电流（A）。 · Find the total current delivered by the source (A).",
        "expected": 4,
        "tol": 0.01,
        "answerLatex": "4.0\\,\\mathrm{A}",
        "solution": "等效电阻 3 Ω，总电流 4.0 A。 · The equivalent is 3 Ω, so the total current is 4.0 A.",
        "solutionLatex": "R_{\\mathrm{eq}}=3.0\\,\\Omega,\\quad I=\\dfrac{12}{3.0}=4.0\\,\\mathrm{A}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.5",
            "label": "11.5 复合直流电路",
            "topicId": "em-u11:11.5"
          }
        ]
      },
      {
        "id": "em-u11-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "支路电流 · Branch current",
        "type": "mcq",
        "stem": "每一条支路的电流是多少？ · What is the current in each branch?",
        "choices": [
          {
            "text": "每条 2.0 A · 2.0 A in each branch",
            "correct": true
          },
          {
            "text": "每条 4.0 A · 4.0 A in each branch",
            "correct": false
          },
          {
            "text": "每条 1.0 A · 1.0 A in each branch",
            "correct": false
          },
          {
            "text": "一条有电流，另一条为零 · One branch carries current and the other carries none",
            "correct": false
          }
        ],
        "solution": "每条支路 12/6 = 2 A，总电流是两者之和。 · Each branch carries 12/6 = 2 A, and the total is the sum.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u11/11.5",
            "label": "11.5 复合直流电路",
            "topicId": "em-u11:11.5"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u11-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 4 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 4 Ω resistor. Find the current (A).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{A}",
    "solution": "I = 12/4 = 3 A。 · I = 12/4 = 3 A.",
    "solutionLatex": "I=\\dfrac{12}{4}=3\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "串联电流 · Series current",
    "type": "mcq",
    "stem": "两只电阻串联在一个单回路里，没有支路。哪项正确？ · Two resistors are in series in a single loop, with no branches. Which statement is correct?",
    "choices": [
      {
        "text": "两只电阻中的电流相同 · The two resistors carry the same current",
        "correct": true
      },
      {
        "text": "两只电阻的电压一定相同 · The two resistors must have the same voltage",
        "correct": false
      },
      {
        "text": "电流经过第一只电阻后变小 · The current is smaller after the first resistor",
        "correct": false
      },
      {
        "text": "断开的串联开关仍允许电流绕过它 · An open series switch still lets current go around it",
        "correct": false
      }
    ],
    "solution": "串联元件电流相同，电压按电阻分配。 · Series elements carry the same current. The voltage divides in proportion to resistance.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.2",
        "label": "11.2 简单电路",
        "topicId": "em-u11:11.2"
      }
    ]
  },
  {
    "id": "em-u11-q013",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 6 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 6 Ω resistor. Find the current (A).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{A}",
    "solution": "I = 12/6 = 2 A。 · I = 12/6 = 2 A.",
    "solutionLatex": "I=\\dfrac{12}{6}=2\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 8 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 8 Ω resistor. Find the current (A).",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{A}",
    "solution": "I = 12/8 = 1.5 A。 · I = 12/8 = 1.5 A.",
    "solutionLatex": "I=\\dfrac{12}{8}=1.5\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q016",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 12 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 12 Ω resistor. Find the current (A).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{A}",
    "solution": "I = 12/12 = 1 A。 · I = 12/12 = 1 A.",
    "solutionLatex": "I=\\dfrac{12}{12}=1\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "充电的稳态 · Steady state while charging",
    "type": "mcq",
    "stem": "电阻与未充电的电容串联后接通直流电源。哪项正确？ · An uncharged capacitor is connected in series with a resistor to a DC source. Which statement is correct?",
    "choices": [
      {
        "text": "电流随 e^{−t/(RC)} 衰减，直流稳态电流为零 · The current decays as e^{−t/(RC)}, and the DC steady current is zero",
        "correct": true
      },
      {
        "text": "很久以后电流仍是 ε/R · After a long time the current is still ε/R",
        "correct": false
      },
      {
        "text": "时间常数是 R/C · The time constant is R/C",
        "correct": false
      },
      {
        "text": "很久以后电容相当于一根导线 · After a long time the capacitor behaves as a wire",
        "correct": false
      }
    ],
    "solution": "电流从 ε/R 开始按 e^{−t/(RC)} 衰减，很久以后电容相当于开路，电流为零。 · The current starts at ε/R and decays as e^{−t/(RC)}. After a long time the capacitor is an open circuit and the current is zero.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.8",
        "label": "11.8 RC 电路",
        "topicId": "em-u11:11.8"
      }
    ]
  },
  {
    "id": "em-u11-q019",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 4 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 4 Ω resistor. Find the current (A).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{A}",
    "solution": "I = 12/4 = 3 A。 · I = 12/4 = 3 A.",
    "solutionLatex": "I=\\dfrac{12}{4}=3\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 6 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 6 Ω resistor. Find the current (A).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{A}",
    "solution": "I = 12/6 = 2 A。 · I = 12/6 = 2 A.",
    "solutionLatex": "I=\\dfrac{12}{6}=2\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q022",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 8 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 8 Ω resistor. Find the current (A).",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{A}",
    "solution": "I = 12/8 = 1.5 A。 · I = 12/8 = 1.5 A.",
    "solutionLatex": "I=\\dfrac{12}{8}=1.5\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "回路电势 · Loop potentials",
    "type": "mcq",
    "stem": "沿一个闭合回路走一圈。哪项正确？ · You walk once around a closed circuit loop. Which statement is correct?",
    "choices": [
      {
        "text": "沿闭合回路的电势变化之和为零 · The sum of potential changes around a closed loop is zero",
        "correct": true
      },
      {
        "text": "沿回路的电流之和为零 · The sum of the currents around the loop is zero",
        "correct": false
      },
      {
        "text": "顺着电流经过电阻时电势升高 · Potential rises when you cross a resistor in the direction of the current",
        "correct": false
      },
      {
        "text": "电池在任何绕行方向都使电势升高 · A battery raises the potential no matter which way you traverse it",
        "correct": false
      }
    ],
    "solution": "静电场保守，回路电势变化之和为零。电流之和为零是结点规则。 · The electrostatic field is conservative, so the sum of potential changes around a loop is zero. Summing currents is the junction rule.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.6",
        "label": "11.6 基尔霍夫环路",
        "topicId": "em-u11:11.6"
      }
    ]
  },
  {
    "id": "em-u11-q025",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 12 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 12 Ω resistor. Find the current (A).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{A}",
    "solution": "I = 12/12 = 1 A。 · I = 12/12 = 1 A.",
    "solutionLatex": "I=\\dfrac{12}{12}=1\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 4 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 4 Ω resistor. Find the current (A).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{A}",
    "solution": "I = 12/4 = 3 A。 · I = 12/4 = 3 A.",
    "solutionLatex": "I=\\dfrac{12}{4}=3\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q028",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q029",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · An ideal battery is in series with one resistor.",
      "diagram": {
        "kind": "field",
        "charges": [
          {
            "x": 140,
            "y": 90,
            "q": "+q"
          }
        ],
        "pointP": {
          "x": 200,
          "y": 50
        }
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "q",
            "2.0 μC"
          ],
          [
            "r",
            "0.10 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出点电荷电场公式（符号）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1.8\\times10^{6}\\,\\mathrm{N/C}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电阻发热 · Joule heating",
    "type": "mcq",
    "stem": "欧姆电阻 R 通过电流 I。哪项正确？ · An ohmic resistor R carries current I. Which statement is correct?",
    "choices": [
      {
        "text": "功率 P = I²R · The power is P = I²R",
        "correct": true
      },
      {
        "text": "功率与电流无关 · The power does not depend on the current",
        "correct": false
      },
      {
        "text": "P = I/R · P = I/R",
        "correct": false
      },
      {
        "text": "电阻在电路中创造能量 · The resistor creates energy in the circuit",
        "correct": false
      }
    ],
    "solution": "发热功率 P = I²R = IV = V²/R。电阻把电能转成热，不是凭空产生能量。 · The heating power is P = I²R = IV = V²/R. The resistor converts electric energy into heat.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.4",
        "label": "11.4 电功率",
        "topicId": "em-u11:11.4"
      }
    ]
  },
  {
    "id": "em-u11-q031",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 6 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 6 Ω resistor. Find the current (A).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{A}",
    "solution": "I = 12/6 = 2 A。 · I = 12/6 = 2 A.",
    "solutionLatex": "I=\\dfrac{12}{6}=2\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 8 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 8 Ω resistor. Find the current (A).",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{A}",
    "solution": "I = 12/8 = 1.5 A。 · I = 12/8 = 1.5 A.",
    "solutionLatex": "I=\\dfrac{12}{8}=1.5\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q034",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 12 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 12 Ω resistor. Find the current (A).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{A}",
    "solution": "I = 12/12 = 1 A。 · I = 12/12 = 1 A.",
    "solutionLatex": "I=\\dfrac{12}{12}=1\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 4 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 4 Ω resistor. Find the current (A).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{A}",
    "solution": "I = 12/4 = 3 A。 · I = 12/4 = 3 A.",
    "solutionLatex": "I=\\dfrac{12}{4}=3\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q037",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 6 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 6 Ω resistor. Find the current (A).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{A}",
    "solution": "I = 12/6 = 2 A。 · I = 12/6 = 2 A.",
    "solutionLatex": "I=\\dfrac{12}{6}=2\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 8 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 8 Ω resistor. Find the current (A).",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{A}",
    "solution": "I = 12/8 = 1.5 A。 · I = 12/8 = 1.5 A.",
    "solutionLatex": "I=\\dfrac{12}{8}=1.5\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q040",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q041",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 12 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 12 Ω resistor. Find the current (A).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{A}",
    "solution": "I = 12/12 = 1 A。 · I = 12/12 = 1 A.",
    "solutionLatex": "I=\\dfrac{12}{12}=1\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 4 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 4 Ω resistor. Find the current (A).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{A}",
    "solution": "I = 12/4 = 3 A。 · I = 12/4 = 3 A.",
    "solutionLatex": "I=\\dfrac{12}{4}=3\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q043",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q044",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 6 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 6 Ω resistor. Find the current (A).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{A}",
    "solution": "I = 12/6 = 2 A。 · I = 12/6 = 2 A.",
    "solutionLatex": "I=\\dfrac{12}{6}=2\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q045",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 8 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 8 Ω resistor. Find the current (A).",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{A}",
    "solution": "I = 12/8 = 1.5 A。 · I = 12/8 = 1.5 A.",
    "solutionLatex": "I=\\dfrac{12}{8}=1.5\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q046",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q047",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 12 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 12 Ω resistor. Find the current (A).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{A}",
    "solution": "I = 12/12 = 1 A。 · I = 12/12 = 1 A.",
    "solutionLatex": "I=\\dfrac{12}{12}=1\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q048",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 4 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 4 Ω resistor. Find the current (A).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{A}",
    "solution": "I = 12/4 = 3 A。 · I = 12/4 = 3 A.",
    "solutionLatex": "I=\\dfrac{12}{4}=3\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q049",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q050",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 6 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 6 Ω resistor. Find the current (A).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{A}",
    "solution": "I = 12/6 = 2 A。 · I = 12/6 = 2 A.",
    "solutionLatex": "I=\\dfrac{12}{6}=2\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q051",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 8 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 8 Ω resistor. Find the current (A).",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{A}",
    "solution": "I = 12/8 = 1.5 A。 · I = 12/8 = 1.5 A.",
    "solutionLatex": "I=\\dfrac{12}{8}=1.5\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q052",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q053",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · An ideal battery is in series with one resistor.",
      "diagram": {
        "kind": "field",
        "charges": [
          {
            "x": 140,
            "y": 90,
            "q": "+q"
          }
        ],
        "pointP": {
          "x": 200,
          "y": 50
        }
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "q",
            "2.0 μC"
          ],
          [
            "r",
            "0.10 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出点电荷电场公式（符号）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1.8\\times10^{6}\\,\\mathrm{N/C}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q054",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 12 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 12 Ω resistor. Find the current (A).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{A}",
    "solution": "I = 12/12 = 1 A。 · I = 12/12 = 1 A.",
    "solutionLatex": "I=\\dfrac{12}{12}=1\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q055",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q056",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 4 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 4 Ω resistor. Find the current (A).",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3\\,\\mathrm{A}",
    "solution": "I = 12/4 = 3 A。 · I = 12/4 = 3 A.",
    "solutionLatex": "I=\\dfrac{12}{4}=3\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q057",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 6 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 6 Ω resistor. Find the current (A).",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "2\\,\\mathrm{A}",
    "solution": "I = 12/6 = 2 A。 · I = 12/6 = 2 A.",
    "solutionLatex": "I=\\dfrac{12}{6}=2\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q058",
    "title": "纯电阻回路电流 · Current in a resistive loop",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "纯电阻单回路 · Single resistive loop",
      "text": "理想电池与单一电阻串联，求电流。 · An ideal battery is in series with one resistor.",
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
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出欧姆定律。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。 · For one resistor on an ideal battery, I = ε/R."
      },
      {
        "stem": "求电流 I（A）。 · For one resistor on an ideal battery, I = ε/R.",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。 · For one resistor on an ideal battery, I = ε/R.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q059",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 8 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 8 Ω resistor. Find the current (A).",
    "expected": 1.5,
    "tol": 0.01,
    "answerLatex": "1.5\\,\\mathrm{A}",
    "solution": "I = 12/8 = 1.5 A。 · I = 12/8 = 1.5 A.",
    "solutionLatex": "I=\\dfrac{12}{8}=1.5\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q060",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Single-loop current",
    "type": "frq",
    "check": "numeric",
    "stem": "理想电源 12 V 与 12 Ω 电阻串联。求电流（A）。 · An ideal 12 V source is in series with a 12 Ω resistor. Find the current (A).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{A}",
    "solution": "I = 12/12 = 1 A。 · I = 12/12 = 1 A.",
    "solutionLatex": "I=\\dfrac{12}{12}=1\\,\\mathrm{A}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.3",
        "label": "11.3 电阻与欧姆定律",
        "topicId": "em-u11:11.3"
      }
    ]
  },
  {
    "id": "em-u11-q061",
    "title": "11.9 非均匀电流密度的总电流",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "半径 R=1.0 mm 的导线截面内电流密度 J(r)=J₀(1−r/R)，J₀=1.2×10⁶ A/m²。求总电流（A）。",
    "expected": 1.3,
    "tol": 0.01,
    "answerLatex": "1.3\\,\\mathrm{A}",
    "solution": "I=∫₀ᴿJ₀(1−r/R)2πr dr=J₀πR²/3≈1.3 A。",
    "solutionLatex": "I=\\int_0^R J_0\\left(1-\\dfrac{r}{R}\\right)2\\pi r\\,dr=\\dfrac{J_0\\pi R^{2}}{3}\\approx1.3\\,\\mathrm{A}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.9",
        "label": "11.9 电流密度与截面积分",
        "topicId": "em-u11:11.9"
      }
    ]
  },
  {
    "id": "em-u11-q062",
    "title": "11.10 断路时断口电压",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "电池 ε=12 V、内阻 r=1 Ω，外接 R=5 Ω 与灯泡 6 Ω 串联，开关断开。理想电压表跨接在开关两端，读数是多少伏？ · A 12 V battery with 1 Ω internal resistance is in series with a 5 Ω resistor and a 6 Ω bulb; the switch is open. What does an ideal voltmeter across the switch read?",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mathrm{V}",
    "solution": "开路时 I=0，各电阻无电压降，断口两端电压等于电源电动势 12 V。零电流不等于零电压。 · With I=0 there is no voltage drop across the resistors, so the gap voltage equals the emf, 12 V. Zero current does not mean zero voltage.",
    "solutionLatex": "I=0,\\qquad V_{\\mathrm{gap}}=\\varepsilon-Ir=12-0=12\\,\\mathrm{V}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 11.10 开关与开路。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.10",
        "label": "11.10 电路元件、开闭与拓扑",
        "topicId": "em-u11:11.10"
      }
    ]
  },
  {
    "id": "em-u11-q063",
    "title": "11.10 共享支路电流",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stem": "两个相邻回路共用 R_s=2 Ω。左回路另有 ε=12 V 与 R₂=2 Ω，右回路另有 R₃=2 Ω。求共享支路中电流的大小（A）。 · Two adjacent loops share a 2 Ω resistor. The left loop also has a 12 V battery and a 2 Ω resistor; the right loop has another 2 Ω resistor. Find the current magnitude in the shared branch (A).",
    "expected": 2,
    "tol": 0.02,
    "answerLatex": "2.0\\,\\mathrm{A}",
    "solution": "设左、右回路电流分别为 I₁、I₂，均取顺时针。左：12−2I₁−2(I₁−I₂)=0；右：−2I₂−2(I₂−I₁)=0。解得 I₁=4 A、I₂=2 A，共享支路电流 I_s=I₁−I₂=2 A。 · Solving the two loop equations gives I₁=4 A and I₂=2 A, so the shared branch carries 2 A.",
    "solutionLatex": "I_1=4\\,\\mathrm{A},\\quad I_2=2\\,\\mathrm{A},\\quad I_s=I_1-I_2=2\\,\\mathrm{A}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 11.10 共享元件与多回路。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.10",
        "label": "11.10 电路元件、开闭与拓扑",
        "topicId": "em-u11:11.10"
      }
    ]
  },
  {
    "id": "em-u11-q064",
    "title": "11.11 串联电容的电荷",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "3 μF 与 6 μF 两个电容器串联接在 12 V 电源上。求 3 μF 电容器上的电荷量（μC）。 · A 3 μF and a 6 μF capacitor are in series across 12 V. Find the charge on the 3 μF capacitor in microcoulombs.",
    "expected": 24,
    "tol": 0.02,
    "answerLatex": "24\\,\\mu\\mathrm{C}",
    "solution": "C_eq=(1/3+1/6)⁻¹=2 μF；串联电荷相同，Q=C_eqV=2 μF×12 V=24 μC。电压分配 V₁=Q ÷ C₁=8 V，V₂=4 V。 · The series equivalent is 2 μF; both capacitors carry Q=24 μC, with V₁=8 V and V₂=4 V.",
    "solutionLatex": "C_{\\mathrm{eq}}=\\left(\\dfrac{1}{3}+\\dfrac{1}{6}\\right)^{-1}=2\\,\\mu\\mathrm{F},\\qquad Q=C_{\\mathrm{eq}}V=24\\,\\mu\\mathrm{C}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 11.11 串联电容电荷守恒。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.11",
        "label": "11.11 电容网络与电荷守恒",
        "topicId": "em-u11:11.11"
      }
    ]
  },
  {
    "id": "em-u11-q065",
    "title": "11.11 浮置岛电荷守恒辨析",
    "type": "mcq",
    "difficulty": "中",
    "calculator": false,
    "stem": "4 μF 与 12 μF 电容器串联接在 16 V 电源上。某学生说“小电容的电荷是大电容的三分之一”。正确判断是？ · A 4 μF and a 12 μF capacitor are in series across 16 V. A student claims the smaller capacitor has one third the charge. Which is correct?",
    "choices": [
      {
        "text": "错误：两电容电荷量相同，均为 48 μC · False: both carry the same 48 μC",
        "correct": true
      },
      {
        "text": "正确：小电容电荷为 16 μC · True: the smaller capacitor has 16 μC",
        "correct": false
      },
      {
        "text": "正确：电荷按电容反比分配 · True: charge divides inversely with capacitance",
        "correct": false
      },
      {
        "text": "无法判断，因为没有给出电阻 · Cannot tell without a resistor",
        "correct": false
      }
    ],
    "solution": "串联等效电容 C_eq=(1/4+1/12)⁻¹=3 μF，Q=C_eqV=3 μF×16 V=48 μC。中间浮置导体净电荷为零，但两侧极板分别带 +48 μC 与 −48 μC，因此每个电容的电荷量相同。电压按 1/C 分配：V₁=12 V，V₂=4 V。 · The series equivalent is 3 μF, so both capacitors carry 48 μC; the floating island has zero net charge while its two plates hold +48 μC and −48 μC. Voltages divide inversely with capacitance: 12 V and 4 V.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 11.11 浮置中间导体。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u11/11.11",
        "label": "11.11 电容网络与电荷守恒",
        "topicId": "em-u11:11.11"
      }
    ]
  }
];
