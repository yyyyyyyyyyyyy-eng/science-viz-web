/** Practice bank for em-u9 */
export const UNIT_REF = {
  "id": "em-u9",
  "code": "9",
  "titleZh": "电势",
  "titleEn": "Electric Potential",
  "layer": "ap",
  "subject": "em"
};
export const stimuli = {
  "stim-em-u9-1": {
    "title": "点电荷的电势 · Potential of a point charge",
    "text": "点电荷 2.0 μC，无穷远处电势为零。取 k=9.0×10⁹ N·m²/C²。 · A 2.0 μC point charge, with potential zero at infinity. Take k=9.0×10⁹ N·m²/C².",
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
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u9-2": {
    "title": "电势能的变化 · Change in potential energy",
    "text": "电荷 2.0 μC 从电势低处移到高出 100 V 的位置。 · A 2.0 μC charge moves to a point where the potential is 100 V higher.",
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
          "ΔV",
          "100 V"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u9-3": {
    "title": "从高电势到低电势 · From higher potential to lower potential",
    "text": "电荷 1.0 μC 只在静电力作用下从 20 V 移到 5 V。 · A 1.0 μC charge moves from 20 V to 5 V under the electrostatic force alone.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "q",
          "1.0 μC"
        ],
        [
          "Vi",
          "20 V"
        ],
        [
          "Vf",
          "5 V"
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
    "id": "em-u9-set1",
    "title": "点电荷电势 · Point-charge potential",
    "sharedStimulus": "stim-em-u9-1",
    "stimulus": {
      "title": "点电荷的电势 · Potential of a point charge",
      "text": "点电荷 2.0 μC，无穷远处电势为零。取 k=9.0×10⁹ N·m²/C²。 · A 2.0 μC point charge, with potential zero at infinity. Take k=9.0×10⁹ N·m²/C².",
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
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    },
    "questions": [
      {
        "id": "em-u9-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电势公式 · Potential formula",
        "type": "frq",
        "stem": "写出点电荷电势的符号式。 · Write the potential of a point charge.",
        "answerLatex": "V=\\dfrac{kq}{r}",
        "solution": "电势是标量。 · Potential is a scalar.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.2",
            "label": "9.2 电势",
            "topicId": "em-u9:9.2"
          }
        ]
      },
      {
        "id": "em-u9-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电势数值 · Potential value",
        "type": "frq",
        "check": "numeric",
        "stem": "求距电荷 0.10 m 处的电势（V）。 · Find the potential 0.10 m from the charge (V).",
        "expected": 180000,
        "tol": 0.02,
        "answerLatex": "1.80\\times10^{5}\\,\\mathrm{V}",
        "solution": "V = kq/r = 1.80×10⁵ V。 · V = kq/r = 1.80×10⁵ V.",
        "solutionLatex": "V=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.10}=1.80\\times10^{5}\\,\\mathrm{V}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.2",
            "label": "9.2 电势",
            "topicId": "em-u9:9.2"
          }
        ]
      },
      {
        "id": "em-u9-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "距离与电势 · Distance and potential",
        "type": "mcq",
        "stem": "只把距离加倍。电势变为原来的多少？ · Only the distance doubles. The potential becomes what fraction of its original value?",
        "choices": [
          {
            "text": "1/2 · 1/2",
            "correct": true
          },
          {
            "text": "1/4 · 1/4",
            "correct": false
          },
          {
            "text": "2 · 2",
            "correct": false
          },
          {
            "text": "不变 · unchanged",
            "correct": false
          }
        ],
        "solution": "V 与 r 成反比，变为 1/2。场强才会变为 1/4。 · V is inverse in r, so it becomes 1/2. The field would become 1/4.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.2",
            "label": "9.2 电势",
            "topicId": "em-u9:9.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u9-set2",
    "title": "电势能 · Potential energy",
    "sharedStimulus": "stim-em-u9-2",
    "stimulus": {
      "title": "电势能的变化 · Change in potential energy",
      "text": "电荷 2.0 μC 从电势低处移到高出 100 V 的位置。 · A 2.0 μC charge moves to a point where the potential is 100 V higher.",
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
            "ΔV",
            "100 V"
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
        "id": "em-u9-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电势能 · Potential energy",
        "type": "frq",
        "stem": "写出电荷移动时电势能的变化。 · Write the change in potential energy when a charge moves.",
        "answerLatex": "\\Delta U=q\\Delta V",
        "solution": "ΔV 是末电势减初电势。 · ΔV is the final potential minus the initial potential.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.1",
            "label": "9.1 电势能",
            "topicId": "em-u9:9.1"
          }
        ]
      },
      {
        "id": "em-u9-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电势能变化 · Potential-energy change",
        "type": "frq",
        "check": "numeric",
        "stem": "求电势能的增加（J）。 · Find the increase in potential energy (J).",
        "expected": 0.0002,
        "tol": 0.02,
        "answerLatex": "2.0\\times10^{-4}\\,\\mathrm{J}",
        "solution": "ΔU = 2.0×10⁻⁴ J。 · ΔU = 2.0×10⁻⁴ J.",
        "solutionLatex": "\\Delta U=(2.0\\times10^{-6})(100)=2.0\\times10^{-4}\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.1",
            "label": "9.1 电势能",
            "topicId": "em-u9:9.1"
          }
        ]
      },
      {
        "id": "em-u9-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "谁做正功 · Who does positive work",
        "type": "mcq",
        "stem": "正电荷移向更高电势。哪项正确？ · A positive charge moves toward higher potential. Which statement is correct?",
        "choices": [
          {
            "text": "电势能增加，静电力做负功 · Potential energy increases and the electrostatic force does negative work",
            "correct": true
          },
          {
            "text": "电势能减少 · Potential energy decreases",
            "correct": false
          },
          {
            "text": "静电力做正功 · The electrostatic force does positive work",
            "correct": false
          },
          {
            "text": "电势能与电荷的符号无关 · The potential-energy change does not depend on the sign of the charge",
            "correct": false
          }
        ],
        "solution": "电势能增加，静电力做负功，外力至少要做正功。 · Potential energy increases, so the electrostatic force does negative work.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.1",
            "label": "9.1 电势能",
            "topicId": "em-u9:9.1"
          }
        ]
      },
      {
        "id": "em-u9-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "电势差加倍后的势能变化 · Potential-energy change after ΔV doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "电荷仍是 2.0 μC，电势升高改为 200 V。求电势能的增加（J）。 · The charge is still 2.0 μC and the potential rise is now 200 V. Find the increase in potential energy (J).",
        "expected": 0.0004,
        "tol": 0.01,
        "answerLatex": "4.0\\times10^{-4}\\,\\mathrm{J}",
        "solution": "ΔU = qΔV = 4.0×10⁻⁴ J。 · ΔU = qΔV = 4.0×10⁻⁴ J.",
        "solutionLatex": "\\Delta U=q\\Delta V=(2.0\\times10^{-6})(200)=4.0\\times10^{-4}\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.1",
            "label": "9.1 电势能",
            "topicId": "em-u9:9.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u9-set3",
    "title": "静电力的功 · Work by the electrostatic force",
    "sharedStimulus": "stim-em-u9-3",
    "stimulus": {
      "title": "从高电势到低电势 · From higher potential to lower potential",
      "text": "电荷 1.0 μC 只在静电力作用下从 20 V 移到 5 V。 · A 1.0 μC charge moves from 20 V to 5 V under the electrostatic force alone.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "q",
            "1.0 μC"
          ],
          [
            "Vi",
            "20 V"
          ],
          [
            "Vf",
            "5 V"
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
        "id": "em-u9-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "功与电势差 · Work and potential difference",
        "type": "frq",
        "stem": "写出静电力做的功。 · Write the work done by the electrostatic force.",
        "answerLatex": "W=q(V_i-V_f)",
        "solution": "这等于电势能的减少。 · This equals the decrease in potential energy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.2",
            "label": "9.2 电势",
            "topicId": "em-u9:9.2"
          }
        ]
      },
      {
        "id": "em-u9-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "静电力做功 · Electrostatic work",
        "type": "frq",
        "check": "numeric",
        "stem": "求静电力做的功（J）。 · Find the work done by the electrostatic force (J).",
        "expected": 0.000015,
        "tol": 0.02,
        "answerLatex": "1.5\\times10^{-5}\\,\\mathrm{J}",
        "solution": "W = 1.5×10⁻⁵ J。 · W = 1.5×10⁻⁵ J.",
        "solutionLatex": "W=(1.0\\times10^{-6})(20-5)=1.5\\times10^{-5}\\,\\mathrm{J}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.2",
            "label": "9.2 电势",
            "topicId": "em-u9:9.2"
          }
        ]
      },
      {
        "id": "em-u9-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "等势面 · Equipotential",
        "type": "mcq",
        "stem": "若电荷改为沿等势面移动，静电力做功是多少？ · If the charge instead moves along an equipotential, what work does the electrostatic force do?",
        "choices": [
          {
            "text": "0 · 0",
            "correct": true
          },
          {
            "text": "仍是 1.5×10⁻⁵ J · It is still 1.5×10⁻⁵ J",
            "correct": false
          },
          {
            "text": "等于 qV · It equals qV",
            "correct": false
          },
          {
            "text": "无法确定，因为等势面上没有电场 · It cannot be found, because an equipotential has no electric field",
            "correct": false
          }
        ],
        "solution": "电势不变，功为零。 · The potential does not change, so the work is zero.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u9/9.2",
            "label": "9.2 电势",
            "topicId": "em-u9:9.2"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u9-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷的电势 · Potential of a point charge",
    "type": "mcq",
    "stem": "取无穷远处电势为零。哪项正确？ · Potential is defined to be zero at infinity. Which statement is correct?",
    "choices": [
      {
        "text": "电势是标量，正点电荷附近的电势为正 · Potential is a scalar, and it is positive near a positive point charge",
        "correct": true
      },
      {
        "text": "电势是矢量 · Potential is a vector",
        "correct": false
      },
      {
        "text": "负点电荷的电势为正 · A negative point charge has positive potential",
        "correct": false
      },
      {
        "text": "等势面与电场线平行 · Equipotential surfaces are parallel to the field lines",
        "correct": false
      }
    ],
    "solution": "电势是标量。孤立正点电荷的电势为正，V = kq/r。 · Potential is a scalar. An isolated positive point charge has positive potential, V = kq/r.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q013",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q016",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "静电力做功 · Work by the electrostatic force",
    "type": "mcq",
    "stem": "试探电荷 q 从电势 Vi 缓慢移到 Vf，只受静电力。哪项正确？ · A test charge q moves slowly from potential Vi to Vf under the electrostatic force alone. Which statement is correct?",
    "choices": [
      {
        "text": "静电力做功 W = q(Vi − Vf) · The electrostatic force does work W = q(Vi − Vf)",
        "correct": true
      },
      {
        "text": "静电力做功 W = q(Vf − Vi)，并且这就是电势能的减少 · The electrostatic work is q(Vf − Vi), and that quantity is the decrease in potential energy",
        "correct": false
      },
      {
        "text": "电势差是矢量 · Potential difference is a vector",
        "correct": false
      },
      {
        "text": "电荷沿等势面移动时静电力做功不为零 · The electrostatic force does nonzero work when a charge moves on an equipotential",
        "correct": false
      }
    ],
    "solution": "静电力做的功是 q(Vi − Vf)，等于电势能的减少。沿等势面移动时这份功为零。 · The work by the electrostatic force is q(Vi − Vf), the decrease in potential energy. That work is zero along an equipotential.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.4",
        "label": "9.4 电势差与功",
        "topicId": "em-u9:9.4"
      }
    ]
  },
  {
    "id": "em-u9-q019",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q022",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q025",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q028",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q031",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q034",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q037",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q040",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q041",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.25 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.25 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 72000,
    "tol": 0.01,
    "answerLatex": "72000\\,\\mathrm{V}",
    "solution": "V = kq/r = 72000 V。 · V = kq/r = 72000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.25}=72000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q043",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.1 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.1 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 180000,
    "tol": 0.01,
    "answerLatex": "180000\\,\\mathrm{V}",
    "solution": "V = kq/r = 180000 V。 · V = kq/r = 180000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.1}=180000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q044",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电势 · Point-charge potential",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC，无穷远处电势为零。求 0.2 m 处的电势（V）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC and potential is zero at infinity. Find the potential at 0.2 m (V). Take k=9.0×10⁹ N·m²/C².",
    "expected": 90000,
    "tol": 0.01,
    "answerLatex": "90000\\,\\mathrm{V}",
    "solution": "V = kq/r = 90000 V。 · V = kq/r = 90000 V.",
    "solutionLatex": "V=\\dfrac{kq}{r}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.2}=90000\\,\\mathrm{V}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.2",
        "label": "9.2 电势",
        "topicId": "em-u9:9.2"
      }
    ]
  },
  {
    "id": "em-u9-q045",
    "title": "9.5 逆着电场移动电荷的电势差",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "匀强电场 E=250 V/m 沿 +x 方向。把 q=+2.0 μC 的电荷沿 −x 方向移动 4.0 cm。求始末位置的电势差 ΔV（V）。",
    "expected": 10,
    "tol": 0.02,
    "answerLatex": "10\\,\\mathrm{V}",
    "solution": "ΔV=−E·Δx=−(250)(−0.040)=+10 V；逆着电场移动时电势升高。",
    "solutionLatex": "\\Delta V=-E\\,\\Delta x=-(250)(-0.040)=+10\\,\\mathrm{V}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.5",
        "label": "9.5 电势能积分与多电荷系统",
        "topicId": "em-u9:9.5"
      }
    ]
  },
  {
    "id": "em-u9-q046",
    "title": "9.5 四个电荷的独立相互作用对数",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stem": "四个点电荷组成一个系统。计算总电势能时，需要计入多少个独立的电荷对？",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6",
    "solution": "独立对数 n(n−1) ÷ 2=4×3 ÷ 2=6；每对只算一次。",
    "solutionLatex": "N_{\\mathrm{pairs}}=\\dfrac{n(n-1)}{2}=\\dfrac{4\\cdot3}{2}=6",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.5",
        "label": "9.5 电势能积分与多电荷系统",
        "topicId": "em-u9:9.5"
      }
    ]
  },
  {
    "id": "em-u9-q047",
    "title": "9.6 含内阻电池的端电压",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "电池电动势 ε=9.0 V，内阻 r=1.5 Ω，外接电阻 R=3.0 Ω。求端电压 V_term（V）。",
    "expected": 6,
    "tol": 0.02,
    "answerLatex": "6.0\\,\\mathrm{V}",
    "solution": "I=ε ÷ (R+r)=9.0 ÷ 4.5=2.0 A；V_term=ε−Ir=9.0−3.0=6.0 V。",
    "solutionLatex": "I=\\dfrac{\\varepsilon}{R+r}=2.0\\,\\mathrm{A},\\qquad V_{\\mathrm{term}}=\\varepsilon-Ir=6.0\\,\\mathrm{V}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.6",
        "label": "9.6 电池与化学电势差",
        "topicId": "em-u9:9.6"
      }
    ]
  },
  {
    "id": "em-u9-q048",
    "title": "9.6 由化学功求电动势",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stem": "电池中的化学过程把 2.0 C 的正电荷从负极搬到正极，做非静电力功 18 J。求电池的电动势 ε（V）。",
    "expected": 9,
    "tol": 0.02,
    "answerLatex": "9.0\\,\\mathrm{V}",
    "solution": "ε=W_ne ÷ q=18 J ÷ 2.0 C=9.0 V。",
    "solutionLatex": "\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}=\\dfrac{18\\,\\mathrm{J}}{2.0\\,\\mathrm{C}}=9.0\\,\\mathrm{V}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u9/9.6",
        "label": "9.6 电池与化学电势差",
        "topicId": "em-u9:9.6"
      }
    ]
  }
];
