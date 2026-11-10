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
    "title": "单回路 · 物理情境",
    "text": "理想电池与电阻串联。求回路电流；若回路含电容，注明直流稳态。",
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
  "stim-em-u13-2": {
    "title": "点电荷电场 · 物理情境",
    "text": "点电荷位于原点，求距原点 r 处的电场大小。",
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
  "stim-em-u13-3": {
    "title": "球形高斯面 · 物理情境",
    "text": "均匀球对称电荷 Q 外包半径 r 的高斯球面。求球面外电场大小。",
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
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-em-u13-1",
    "stimulus": {
      "title": "单回路 · 物理情境",
      "text": "理想电池与电阻串联。求回路电流；若回路含电容，注明直流稳态。",
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
        "id": "em-u13-q001",
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "单回路欧姆定律（仅电阻）。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.1",
            "label": "13.1 磁通量",
            "topicId": "em-u13:13.1"
          }
        ]
      },
      {
        "id": "em-u13-q002",
        "title": "纯电阻回路电流",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求纯电阻回路的电流 I（A）。",
        "expected": 2,
        "tol": 0.01,
        "solution": "纯电阻回路；若串联电容，直流稳态 I=0。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.2",
            "label": "13.2 电磁感应",
            "topicId": "em-u13:13.2"
          }
        ],
        "answerLatex": "2.00\\,\\mathrm{A}",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      },
      {
        "id": "em-u13-q003",
        "title": "定量/概念 (3)",
        "difficulty": "难",
        "type": "mcq",
        "stem": "下列哪项正确描述图示关系？",
        "choices": [
          {
            "text": "需用矢量/场线或回路规则一致地分析",
            "correct": true
          },
          {
            "text": "可忽略所有方向信息",
            "correct": false
          },
          {
            "text": "能量守恒在此情境永远不适用",
            "correct": false
          },
          {
            "text": "图示与方程无关",
            "correct": false
          }
        ],
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
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
    "kind": "set",
    "id": "em-u13-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-em-u13-2",
    "stimulus": {
      "title": "点电荷电场 · 物理情境",
      "text": "点电荷位于原点，求距原点 r 处的电场大小。",
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
        "id": "em-u13-q004",
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "\\vec E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q}{r^{2}}\\hat r",
        "solution": "点电荷场强由库仑定律定义。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.4",
            "label": "13.4 电感",
            "topicId": "em-u13:13.4"
          }
        ]
      },
      {
        "id": "em-u13-q005",
        "title": "点电荷电场大小",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求距点电荷 0.10 m 处的电场大小 E（N/C）。",
        "expected": 1800000,
        "tol": 0.01,
        "solution": "代入库仑常量与数据，得 E=1.8×10⁶ N/C。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.5",
            "label": "13.5 LR 电路",
            "topicId": "em-u13:13.5"
          }
        ],
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1.8\\times10^{6}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u13-q006",
        "title": "定量/概念 (3)",
        "difficulty": "难",
        "type": "mcq",
        "stem": "下列哪项正确描述图示关系？",
        "choices": [
          {
            "text": "需用矢量/场线或回路规则一致地分析",
            "correct": true
          },
          {
            "text": "可忽略所有方向信息",
            "correct": false
          },
          {
            "text": "能量守恒在此情境永远不适用",
            "correct": false
          },
          {
            "text": "图示与方程无关",
            "correct": false
          }
        ],
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.6",
            "label": "13.6 LC 电路",
            "topicId": "em-u13:13.6"
          }
        ]
      },
      {
        "id": "em-u13-q007",
        "title": "定量/概念 (4)",
        "difficulty": "易",
        "type": "frq",
        "stem": "说明若某一参数加倍，目标量如何变化（定性+比例）。",
        "answer": "E=kq/r²：q 加倍时 E 加倍；r 加倍时 E 变为原来的四分之一。",
        "solution": "点电荷场强 E∝q/r²。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.1",
            "label": "13.1 磁通量",
            "topicId": "em-u13:13.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u13-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-em-u13-3",
    "stimulus": {
      "title": "球形高斯面 · 物理情境",
      "text": "均匀球对称电荷 Q 外包半径 r 的高斯球面。求球面外电场大小。",
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
        "id": "em-u13-q008",
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "取球对称高斯面，E 在面上为常量。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
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
        "title": "球面外电场大小",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求球面外电场大小 E（N/C）。",
        "expected": 900000,
        "tol": 0.01,
        "solution": "球外场等效于全部电荷集中于球心。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.3",
            "label": "13.3 感应电流与磁力",
            "topicId": "em-u13:13.3"
          }
        ],
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u13-q010",
        "title": "定量/概念 (3)",
        "difficulty": "难",
        "type": "mcq",
        "stem": "下列哪项正确描述图示关系？",
        "choices": [
          {
            "text": "需用矢量/场线或回路规则一致地分析",
            "correct": true
          },
          {
            "text": "可忽略所有方向信息",
            "correct": false
          },
          {
            "text": "能量守恒在此情境永远不适用",
            "correct": false
          },
          {
            "text": "图示与方程无关",
            "correct": false
          }
        ],
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u13/13.4",
            "label": "13.4 电感",
            "topicId": "em-u13:13.4"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u13-q011",
    "title": "13.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "磁通量",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.5",
        "label": "13.5 LR 电路",
        "topicId": "em-u13:13.5"
      }
    ]
  },
  {
    "id": "em-u13-q012",
    "title": "13.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电磁感应」，下列正确的是？",
    "choices": [
      {
        "text": "适用定律有明确条件，矢量/符号必须一致",
        "correct": true
      },
      {
        "text": "可随意忽略惯性系要求",
        "correct": false
      },
      {
        "text": "能量与动量在任何过程中同型守恒且无条件",
        "correct": false
      },
      {
        "text": "场线密度与物理强度无关",
        "correct": false
      }
    ],
    "sourceId": "openstax-college-physics-2e",
    "source": "OpenStax College Physics 2e",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/college-physics-2e",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.6",
        "label": "13.6 LC 电路",
        "topicId": "em-u13:13.6"
      }
    ]
  },
  {
    "id": "em-u13-q013",
    "title": "13.3 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.1",
        "label": "13.1 磁通量",
        "topicId": "em-u13:13.1"
      }
    ]
  },
  {
    "id": "em-u13-q014",
    "title": "13.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电感",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q015",
    "title": "13.5 高斯面",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。",
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
        "stem": "写出高斯定律。",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。"
      },
      {
        "stem": "求球面外 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。",
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
        "href": "#/t/em/em-u13/13.3",
        "label": "13.3 感应电流与磁力",
        "topicId": "em-u13:13.3"
      }
    ]
  },
  {
    "id": "em-u13-q016",
    "title": "13.6 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.4",
        "label": "13.4 电感",
        "topicId": "em-u13:13.4"
      }
    ]
  },
  {
    "id": "em-u13-q017",
    "title": "13.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "磁通量",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.5",
        "label": "13.5 LR 电路",
        "topicId": "em-u13:13.5"
      }
    ]
  },
  {
    "id": "em-u13-q018",
    "title": "13.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电磁感应」，下列正确的是？",
    "choices": [
      {
        "text": "适用定律有明确条件，矢量/符号必须一致",
        "correct": true
      },
      {
        "text": "可随意忽略惯性系要求",
        "correct": false
      },
      {
        "text": "能量与动量在任何过程中同型守恒且无条件",
        "correct": false
      },
      {
        "text": "场线密度与物理强度无关",
        "correct": false
      }
    ],
    "sourceId": "openstax-college-physics-2e",
    "source": "OpenStax College Physics 2e",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/college-physics-2e",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.6",
        "label": "13.6 LC 电路",
        "topicId": "em-u13:13.6"
      }
    ]
  },
  {
    "id": "em-u13-q019",
    "title": "13.3 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.1",
        "label": "13.1 磁通量",
        "topicId": "em-u13:13.1"
      }
    ]
  },
  {
    "id": "em-u13-q020",
    "title": "13.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电感",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q021",
    "title": "13.5 高斯面",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。",
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
        "stem": "写出高斯定律。",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。"
      },
      {
        "stem": "求球面外 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。",
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
        "href": "#/t/em/em-u13/13.3",
        "label": "13.3 感应电流与磁力",
        "topicId": "em-u13:13.3"
      }
    ]
  },
  {
    "id": "em-u13-q022",
    "title": "13.6 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.4",
        "label": "13.4 电感",
        "topicId": "em-u13:13.4"
      }
    ]
  },
  {
    "id": "em-u13-q023",
    "title": "13.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "磁通量",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.5",
        "label": "13.5 LR 电路",
        "topicId": "em-u13:13.5"
      }
    ]
  },
  {
    "id": "em-u13-q024",
    "title": "13.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电磁感应」，下列正确的是？",
    "choices": [
      {
        "text": "适用定律有明确条件，矢量/符号必须一致",
        "correct": true
      },
      {
        "text": "可随意忽略惯性系要求",
        "correct": false
      },
      {
        "text": "能量与动量在任何过程中同型守恒且无条件",
        "correct": false
      },
      {
        "text": "场线密度与物理强度无关",
        "correct": false
      }
    ],
    "sourceId": "openstax-college-physics-2e",
    "source": "OpenStax College Physics 2e",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/college-physics-2e",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.6",
        "label": "13.6 LC 电路",
        "topicId": "em-u13:13.6"
      }
    ]
  },
  {
    "id": "em-u13-q025",
    "title": "13.3 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.1",
        "label": "13.1 磁通量",
        "topicId": "em-u13:13.1"
      }
    ]
  },
  {
    "id": "em-u13-q026",
    "title": "13.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电感",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q027",
    "title": "13.5 高斯面",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。",
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
        "stem": "写出高斯定律。",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。"
      },
      {
        "stem": "求球面外 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。",
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
        "href": "#/t/em/em-u13/13.3",
        "label": "13.3 感应电流与磁力",
        "topicId": "em-u13:13.3"
      }
    ]
  },
  {
    "id": "em-u13-q028",
    "title": "13.6 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.4",
        "label": "13.4 电感",
        "topicId": "em-u13:13.4"
      }
    ]
  },
  {
    "id": "em-u13-q029",
    "title": "13.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "磁通量",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.5",
        "label": "13.5 LR 电路",
        "topicId": "em-u13:13.5"
      }
    ]
  },
  {
    "id": "em-u13-q030",
    "title": "13.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电磁感应」，下列正确的是？",
    "choices": [
      {
        "text": "适用定律有明确条件，矢量/符号必须一致",
        "correct": true
      },
      {
        "text": "可随意忽略惯性系要求",
        "correct": false
      },
      {
        "text": "能量与动量在任何过程中同型守恒且无条件",
        "correct": false
      },
      {
        "text": "场线密度与物理强度无关",
        "correct": false
      }
    ],
    "sourceId": "openstax-college-physics-2e",
    "source": "OpenStax College Physics 2e",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/college-physics-2e",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.6",
        "label": "13.6 LC 电路",
        "topicId": "em-u13:13.6"
      }
    ]
  },
  {
    "id": "em-u13-q031",
    "title": "13.3 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.1",
        "label": "13.1 磁通量",
        "topicId": "em-u13:13.1"
      }
    ]
  },
  {
    "id": "em-u13-q032",
    "title": "13.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电感",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q033",
    "title": "13.5 高斯面",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。",
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
        "stem": "写出高斯定律。",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。"
      },
      {
        "stem": "求球面外 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。",
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
        "href": "#/t/em/em-u13/13.3",
        "label": "13.3 感应电流与磁力",
        "topicId": "em-u13:13.3"
      }
    ]
  },
  {
    "id": "em-u13-q034",
    "title": "13.6 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.4",
        "label": "13.4 电感",
        "topicId": "em-u13:13.4"
      }
    ]
  },
  {
    "id": "em-u13-q035",
    "title": "13.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "磁通量",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.5",
        "label": "13.5 LR 电路",
        "topicId": "em-u13:13.5"
      }
    ]
  },
  {
    "id": "em-u13-q036",
    "title": "13.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电磁感应」，下列正确的是？",
    "choices": [
      {
        "text": "适用定律有明确条件，矢量/符号必须一致",
        "correct": true
      },
      {
        "text": "可随意忽略惯性系要求",
        "correct": false
      },
      {
        "text": "能量与动量在任何过程中同型守恒且无条件",
        "correct": false
      },
      {
        "text": "场线密度与物理强度无关",
        "correct": false
      }
    ],
    "sourceId": "openstax-college-physics-2e",
    "source": "OpenStax College Physics 2e",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/college-physics-2e",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.6",
        "label": "13.6 LC 电路",
        "topicId": "em-u13:13.6"
      }
    ]
  },
  {
    "id": "em-u13-q037",
    "title": "13.3 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.1",
        "label": "13.1 磁通量",
        "topicId": "em-u13:13.1"
      }
    ]
  },
  {
    "id": "em-u13-q038",
    "title": "13.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电感",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q039",
    "title": "13.5 高斯面",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。",
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
        "stem": "写出高斯定律。",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。"
      },
      {
        "stem": "求球面外 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。",
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
        "href": "#/t/em/em-u13/13.3",
        "label": "13.3 感应电流与磁力",
        "topicId": "em-u13:13.3"
      }
    ]
  },
  {
    "id": "em-u13-q040",
    "title": "13.6 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.4",
        "label": "13.4 电感",
        "topicId": "em-u13:13.4"
      }
    ]
  },
  {
    "id": "em-u13-q041",
    "title": "13.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "磁通量",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.5",
        "label": "13.5 LR 电路",
        "topicId": "em-u13:13.5"
      }
    ]
  },
  {
    "id": "em-u13-q042",
    "title": "13.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电磁感应」，下列正确的是？",
    "choices": [
      {
        "text": "适用定律有明确条件，矢量/符号必须一致",
        "correct": true
      },
      {
        "text": "可随意忽略惯性系要求",
        "correct": false
      },
      {
        "text": "能量与动量在任何过程中同型守恒且无条件",
        "correct": false
      },
      {
        "text": "场线密度与物理强度无关",
        "correct": false
      }
    ],
    "sourceId": "openstax-college-physics-2e",
    "source": "OpenStax College Physics 2e",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/college-physics-2e",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.6",
        "label": "13.6 LC 电路",
        "topicId": "em-u13:13.6"
      }
    ]
  },
  {
    "id": "em-u13-q043",
    "title": "13.3 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.1",
        "label": "13.1 磁通量",
        "topicId": "em-u13:13.1"
      }
    ]
  },
  {
    "id": "em-u13-q044",
    "title": "13.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电感",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q045",
    "title": "13.5 高斯面",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。",
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
        "stem": "写出高斯定律。",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。"
      },
      {
        "stem": "求球面外 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。",
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
        "href": "#/t/em/em-u13/13.3",
        "label": "13.3 感应电流与磁力",
        "topicId": "em-u13:13.3"
      }
    ]
  },
  {
    "id": "em-u13-q046",
    "title": "13.6 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.4",
        "label": "13.4 电感",
        "topicId": "em-u13:13.4"
      }
    ]
  },
  {
    "id": "em-u13-q047",
    "title": "13.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "磁通量",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.5",
        "label": "13.5 LR 电路",
        "topicId": "em-u13:13.5"
      }
    ]
  },
  {
    "id": "em-u13-q048",
    "title": "13.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电磁感应」，下列正确的是？",
    "choices": [
      {
        "text": "适用定律有明确条件，矢量/符号必须一致",
        "correct": true
      },
      {
        "text": "可随意忽略惯性系要求",
        "correct": false
      },
      {
        "text": "能量与动量在任何过程中同型守恒且无条件",
        "correct": false
      },
      {
        "text": "场线密度与物理强度无关",
        "correct": false
      }
    ],
    "sourceId": "openstax-college-physics-2e",
    "source": "OpenStax College Physics 2e",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/college-physics-2e",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u13/13.6",
        "label": "13.6 LC 电路",
        "topicId": "em-u13:13.6"
      }
    ]
  },
  {
    "id": "em-u13-q049",
    "title": "13.3 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.1",
        "label": "13.1 磁通量",
        "topicId": "em-u13:13.1"
      }
    ]
  },
  {
    "id": "em-u13-q050",
    "title": "13.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电感",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。",
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
        "stem": "写出点电荷电场公式（符号）。",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。"
      },
      {
        "stem": "代入表中数据求 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。",
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
        "href": "#/t/em/em-u13/13.2",
        "label": "13.2 电磁感应",
        "topicId": "em-u13:13.2"
      }
    ]
  },
  {
    "id": "em-u13-q051",
    "title": "13.5 高斯面",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。",
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
        "stem": "写出高斯定律。",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。"
      },
      {
        "stem": "求球面外 E（N/C）。",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。",
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
        "href": "#/t/em/em-u13/13.3",
        "label": "13.3 感应电流与磁力",
        "topicId": "em-u13:13.3"
      }
    ]
  },
  {
    "id": "em-u13-q052",
    "title": "13.6 串联电路电流",
    "type": "frq",
    "difficulty": "难",
    "stimulus": {
      "title": "单回路",
      "text": "理想电池与单一电阻串联，求电流。",
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
        "stem": "写出欧姆定律。",
        "type": "frq",
        "answerLatex": "I=\\dfrac{\\varepsilon}{R}",
        "solution": "理想串联。"
      },
      {
        "stem": "求电流 I（A）。",
        "type": "frq",
        "check": "numeric",
        "expected": 2,
        "tol": 0.01,
        "answerLatex": "2",
        "solution": "代入数据得 I=2.00 A。",
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
        "href": "#/t/em/em-u13/13.4",
        "label": "13.4 电感",
        "topicId": "em-u13:13.4"
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
  "expected": 230000000000.0,
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
