/** Practice bank for em-prep-found */
export const UNIT_REF = {
  "id": "em-prep-found",
  "code": "P1",
  "titleZh": "电磁预备",
  "titleEn": "E&M Foundations",
  "layer": "prep",
  "subject": "em"
};
export const stimuli = {
  "stim-em-prep-found-1": {
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
  "stim-em-prep-found-2": {
    "title": "点电荷电场 · Point-charge electric field",
    "text": "点电荷位于原点，求距原点 r 处的电场大小。 · A point charge is at the origin.",
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
          "9.0×10⁹ N·m²/C²"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  },
  "stim-em-prep-found-3": {
    "title": "球形高斯面 · Spherical Gaussian surface",
    "text": "均匀球对称电荷 Q 外包半径 r 的高斯球面。求球面外电场大小。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
    "diagram": {
      "kind": "gauss",
      "kindSurface": "sphere"
    },
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "Q",
          "1.0 μC"
        ],
        [
          "r",
          "0.10 m"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "em-prep-found-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-em-prep-found-1",
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
        "id": "em-prep-found-q001",
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
            "href": "#/t/em/em-prep-found/P1.5",
            "label": "P1.5 欧姆定律与电路",
            "topicId": "em-prep-found:P1.5"
          }
        ]
      },
      {
        "id": "em-prep-found-q002",
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
            "href": "#/t/em/em-prep-found/P1.5",
            "label": "P1.5 欧姆定律与电路",
            "topicId": "em-prep-found:P1.5"
          }
        ],
        "answerLatex": "2.00\\,\\mathrm{A}",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      },
      {
        "id": "em-prep-found-q003",
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
            "href": "#/t/em/em-prep-found/P1.5",
            "label": "P1.5 欧姆定律与电路",
            "topicId": "em-prep-found:P1.5"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-prep-found-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-em-prep-found-2",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点，求距原点 r 处的电场大小。 · A point charge is at the origin.",
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
            "9.0×10⁹ N·m²/C²"
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
        "id": "em-prep-found-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "点电荷电场 · Point-charge field",
        "type": "frq",
        "stem": "写出点电荷电场大小的符号式，并指出方向沿径向。 · Write the magnitude of the point-charge field and state that the direction is radial.",
        "answerLatex": "E=\\dfrac{kq}{r^{2}}",
        "solution": "这是库仑定律除以试探电荷。 · This is Coulomb’s law divided by the test charge.",
        "topicLinks": [
          {
            "href": "#/t/em/em-prep-found/P1.2",
            "label": "P1.2 电场直觉",
            "topicId": "em-prep-found:P1.2"
          }
        ]
      },
      {
        "id": "em-prep-found-q005",
        "title": "点电荷电场 · Point-charge electric field",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求距点电荷 0.10 m 处的电场大小 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "expected": 1800000,
        "tol": 0.01,
        "solution": "代入库仑常量与数据，得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-prep-found/P1.2",
            "label": "P1.2 电场直觉",
            "topicId": "em-prep-found:P1.2"
          }
        ],
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1.8\\times10^{6}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-prep-found-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "距离加倍 · Doubling the distance",
        "type": "mcq",
        "stem": "点电荷的距离变为原来的 2 倍。电场大小变为原来的多少？ · The distance from a point charge becomes twice as large. The field magnitude becomes what fraction of its original value?",
        "choices": [
          {
            "text": "1/4 · 1/4",
            "correct": true
          },
          {
            "text": "1/2 · 1/2",
            "correct": false
          },
          {
            "text": "2 · 2",
            "correct": false
          },
          {
            "text": "4 · 4",
            "correct": false
          }
        ],
        "solution": "E 与 r² 成反比，距离加倍则场强变为 1/4。 · E is inverse-square, so doubling the distance multiplies the field by 1/4.",
        "topicLinks": [
          {
            "href": "#/t/em/em-prep-found/P1.2",
            "label": "P1.2 电场直觉",
            "topicId": "em-prep-found:P1.2"
          }
        ]
      },
      {
        "id": "em-prep-found-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "距离加倍 · Distance doubles",
        "type": "frq",
        "stem": "其他量不变，只把距离加倍。场强变为原来的几分之一？ · Everything else stays fixed and only the distance doubles. What fraction of the original field remains?",
        "answerLatex": "\\dfrac{1}{4}",
        "solution": "点电荷场强与距离平方成反比。 · A point-charge field is inverse-square in distance.",
        "topicLinks": [
          {
            "href": "#/t/em/em-prep-found/P1.2",
            "label": "P1.2 电场直觉",
            "topicId": "em-prep-found:P1.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-prep-found-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-em-prep-found-3",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r 的高斯球面。求球面外电场大小。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
      "diagram": {
        "kind": "gauss",
        "kindSurface": "sphere"
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "Q",
            "1.0 μC"
          ],
          [
            "r",
            "0.10 m"
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
        "id": "em-prep-found-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "球外的高斯定律 · Gauss's law outside a sphere",
        "type": "frq",
        "stem": "对球对称电荷，写出高斯面外电场大小的符号式。 · For a spherically symmetric charge, write the field magnitude outside the Gaussian surface.",
        "answerLatex": "E=\\dfrac{kQ}{r^{2}}",
        "solution": "面外的场与全部电荷集中在球心时相同。 · Outside, the field matches a point charge at the center.",
        "topicLinks": [
          {
            "href": "#/t/em/em-prep-found/P1.8",
            "label": "P1.8 矢量场与通量直觉",
            "topicId": "em-prep-found:P1.8"
          }
        ]
      },
      {
        "id": "em-prep-found-q009",
        "title": "球面外的电场 · Field outside a spherical charge",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求球面外电场大小 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "expected": 900000,
        "tol": 0.01,
        "solution": "球外场等效于全部电荷集中于球心。 · Outside a spherical charge the field is kQ/r².",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-prep-found/P1.8",
            "label": "P1.8 矢量场与通量直觉",
            "topicId": "em-prep-found:P1.8"
          }
        ],
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-prep-found-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "面外电荷 · Charge outside the surface",
        "type": "mcq",
        "stem": "高斯球面外再放一个点电荷，球面内的电荷不变。闭合面的净通量如何？ · A point charge is placed outside the Gaussian sphere, and the charge inside is unchanged. What happens to the net flux through the closed surface?",
        "choices": [
          {
            "text": "净通量不变 · The net flux is unchanged",
            "correct": true
          },
          {
            "text": "净通量一定加倍 · The net flux must double",
            "correct": false
          },
          {
            "text": "净通量变为零 · The net flux becomes zero",
            "correct": false
          },
          {
            "text": "通量不再能用高斯定律 · Flux can no longer be found with Gauss's law",
            "correct": false
          }
        ],
        "solution": "净通量只由包围电荷决定，面外电荷的净贡献为零。 · Net flux depends only on the enclosed charge. Charge outside contributes zero net flux.",
        "topicLinks": [
          {
            "href": "#/t/em/em-prep-found/P1.8",
            "label": "P1.8 矢量场与通量直觉",
            "topicId": "em-prep-found:P1.8"
          }
        ]
      }
    ]
  },
  {
    "id": "em-prep-found-q011",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电场方向 · Direction of an electric field",
    "type": "mcq",
    "stem": "空间中只有一个正点电荷。哪项正确？ · The only charge present is a positive point charge. Which statement is correct?",
    "choices": [
      {
        "text": "电场从该正电荷指向外 · The electric field points away from the positive charge",
        "correct": true
      },
      {
        "text": "电场线从负电荷出发 · Field lines start on negative charges",
        "correct": false
      },
      {
        "text": "电场是标量 · The electric field is a scalar",
        "correct": false
      },
      {
        "text": "任何电荷受力都与电场同向 · Every charge feels a force in the direction of the field",
        "correct": false
      }
    ],
    "solution": "电场从正电荷指出。电场是矢量。负试探电荷受力与场强反向。 · The field points away from a positive charge. The field is a vector. A negative test charge feels a force opposite the field.",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q013",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q014",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q015",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
      "diagram": {
        "kind": "gauss",
        "surface": "sphere"
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "Q",
            "1.0 μC"
          ],
          [
            "r",
            "0.10 m"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.8",
        "label": "P1.8 矢量场与通量直觉",
        "topicId": "em-prep-found:P1.8"
      }
    ]
  },
  {
    "id": "em-prep-found-q016",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q017",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "通量的意义 · Meaning of flux",
    "type": "mcq",
    "stem": "闭合曲面上计算电通量。哪项正确？ · Electric flux is computed on a closed surface. Which statement is correct?",
    "choices": [
      {
        "text": "电通量是 E 与面积元的点积在曲面上的积分 · Electric flux is the surface integral of E dot the area element",
        "correct": true
      },
      {
        "text": "通量是矢量，方向沿外法线 · Flux is a vector along the outward normal",
        "correct": false
      },
      {
        "text": "净通量为零说明面上电场处处为零 · Zero net flux means the field is zero everywhere on the surface",
        "correct": false
      },
      {
        "text": "通量只与面积有关，与场无关 · Flux depends only on the area, not on the field",
        "correct": false
      }
    ],
    "solution": "通量是 ∮E·dA，是标量。净通量为零不表示面上处处 E=0。 · Flux is ∮E·dA and is a scalar. Zero net flux does not mean E is zero everywhere on the surface.",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.8",
        "label": "P1.8 矢量场与通量直觉",
        "topicId": "em-prep-found:P1.8"
      }
    ]
  },
  {
    "id": "em-prep-found-q019",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q020",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q021",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
      "diagram": {
        "kind": "gauss",
        "surface": "sphere"
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "Q",
            "1.0 μC"
          ],
          [
            "r",
            "0.10 m"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.8",
        "label": "P1.8 矢量场与通量直觉",
        "topicId": "em-prep-found:P1.8"
      }
    ]
  },
  {
    "id": "em-prep-found-q022",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q023",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "单回路电流 · Current in a single loop",
    "type": "mcq",
    "stem": "理想电池 ε 与一只欧姆电阻 R 串联，没有电容。哪项正确？ · An ideal battery ε is in series with one ohmic resistor R, and there is no capacitor. Which statement is correct?",
    "choices": [
      {
        "text": "电流 I = ε/R · The current is I = ε/R",
        "correct": true
      },
      {
        "text": "电流 I = εR · The current is I = εR",
        "correct": false
      },
      {
        "text": "电流在电阻中被消耗掉，回流为零 · Current is used up in the resistor, so nothing returns",
        "correct": false
      },
      {
        "text": "再串联一只电阻会使电流增大 · Adding another series resistor increases the current",
        "correct": false
      }
    ],
    "solution": "I = ε/R。串联再加电阻会使电流减小。电流不是在电阻里被用完的。 · I = ε/R. Another series resistor decreases the current. Current is not used up in the resistor.",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q025",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q026",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q027",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
      "diagram": {
        "kind": "gauss",
        "surface": "sphere"
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "Q",
            "1.0 μC"
          ],
          [
            "r",
            "0.10 m"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.8",
        "label": "P1.8 矢量场与通量直觉",
        "topicId": "em-prep-found:P1.8"
      }
    ]
  },
  {
    "id": "em-prep-found-q028",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q029",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.10 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.10 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 1799999.9999999995,
    "tol": 0.01,
    "answerLatex": "1799999.9999999995\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 1799999.9999999995 N/C。 · E = kq/r² = 1799999.9999999995 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1799999.9999999995\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.10 m。 · q=2.0 μC and r=0.10 m.",
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-prep-found-q031",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q032",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q033",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
      "diagram": {
        "kind": "gauss",
        "surface": "sphere"
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "Q",
            "1.0 μC"
          ],
          [
            "r",
            "0.10 m"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.8",
        "label": "P1.8 矢量场与通量直觉",
        "topicId": "em-prep-found:P1.8"
      }
    ]
  },
  {
    "id": "em-prep-found-q034",
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
        "href": "#/t/em/em-prep-found/P1.5",
        "label": "P1.5 欧姆定律与电路",
        "topicId": "em-prep-found:P1.5"
      }
    ]
  },
  {
    "id": "em-prep-found-q035",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ]
  },
  {
    "id": "em-prep-found-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.20 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.20 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 449999.9999999999,
    "tol": 0.01,
    "answerLatex": "449999.9999999999\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 449999.9999999999 N/C。 · E = kq/r² = 449999.9999999999 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.20)^{2}}=449999.9999999999\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-prep-found/P1.2",
        "label": "P1.2 电场直觉",
        "topicId": "em-prep-found:P1.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.20 m。 · q=2.0 μC and r=0.20 m.",
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
            "0.20 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  }
];
