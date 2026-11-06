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
  }
];
