/** Practice bank for em-u8 */
export const UNIT_REF = {
  "id": "em-u8",
  "code": "8",
  "titleZh": "电荷、电场与高斯定律",
  "titleEn": "Electric Charges, Fields, and Gauss's Law",
  "layer": "ap",
  "subject": "em"
};
export const stimuli = {
  "stim-em-u8-1": {
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
  "stim-em-u8-2": {
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
  "stim-em-u8-3": {
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
    "id": "em-u8-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-em-u8-1",
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
        "id": "em-u8-q001",
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
            "href": "#/t/em/em-u8/8.1",
            "label": "8.1 电荷与力",
            "topicId": "em-u8:8.1"
          }
        ]
      },
      {
        "id": "em-u8-q002",
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
            "href": "#/t/em/em-u8/8.2",
            "label": "8.2 电场",
            "topicId": "em-u8:8.2"
          }
        ],
        "answerLatex": "2.00\\,\\mathrm{A}",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{6}=2.00\\,\\mathrm{A}."
      },
      {
        "id": "em-u8-q003",
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
            "href": "#/t/em/em-u8/8.3",
            "label": "8.3 电场叠加",
            "topicId": "em-u8:8.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u8-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-em-u8-2",
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
        "id": "em-u8-q004",
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
            "href": "#/t/em/em-u8/8.4",
            "label": "8.4 电通量",
            "topicId": "em-u8:8.4"
          }
        ]
      },
      {
        "id": "em-u8-q005",
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
            "href": "#/t/em/em-u8/8.5",
            "label": "8.5 高斯定律",
            "topicId": "em-u8:8.5"
          }
        ],
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1.8\\times10^{6}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u8-q006",
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
            "href": "#/t/em/em-u8/8.1",
            "label": "8.1 电荷与力",
            "topicId": "em-u8:8.1"
          }
        ]
      },
      {
        "id": "em-u8-q007",
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
            "href": "#/t/em/em-u8/8.2",
            "label": "8.2 电场",
            "topicId": "em-u8:8.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u8-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-em-u8-3",
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
        "id": "em-u8-q008",
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
            "href": "#/t/em/em-u8/8.3",
            "label": "8.3 电场叠加",
            "topicId": "em-u8:8.3"
          }
        ]
      },
      {
        "id": "em-u8-q009",
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
            "href": "#/t/em/em-u8/8.4",
            "label": "8.4 电通量",
            "topicId": "em-u8:8.4"
          }
        ],
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u8-q010",
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
            "href": "#/t/em/em-u8/8.5",
            "label": "8.5 高斯定律",
            "topicId": "em-u8:8.5"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u8-q011",
    "title": "8.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电荷与力",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q012",
    "title": "8.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电场」，下列正确的是？",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q013",
    "title": "8.3 串联电路电流",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
  {
    "id": "em-u8-q014",
    "title": "8.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电通量",
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
        "href": "#/t/em/em-u8/8.4",
        "label": "8.4 电通量",
        "topicId": "em-u8:8.4"
      }
    ]
  },
  {
    "id": "em-u8-q015",
    "title": "8.5 高斯面",
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
        "href": "#/t/em/em-u8/8.5",
        "label": "8.5 高斯定律",
        "topicId": "em-u8:8.5"
      }
    ]
  },
  {
    "id": "em-u8-q016",
    "title": "8.1 串联电路电流",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q017",
    "title": "8.2 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电场",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q018",
    "title": "8.3 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电场叠加」，下列正确的是？",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
  {
    "id": "em-u8-q019",
    "title": "8.4 串联电路电流",
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
        "href": "#/t/em/em-u8/8.4",
        "label": "8.4 电通量",
        "topicId": "em-u8:8.4"
      }
    ]
  },
  {
    "id": "em-u8-q020",
    "title": "8.5 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "高斯定律",
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
        "href": "#/t/em/em-u8/8.5",
        "label": "8.5 高斯定律",
        "topicId": "em-u8:8.5"
      }
    ]
  },
  {
    "id": "em-u8-q021",
    "title": "8.1 高斯面",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q022",
    "title": "8.2 串联电路电流",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q023",
    "title": "8.3 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电场叠加",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
  {
    "id": "em-u8-q024",
    "title": "8.4 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电通量」，下列正确的是？",
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
        "href": "#/t/em/em-u8/8.4",
        "label": "8.4 电通量",
        "topicId": "em-u8:8.4"
      }
    ]
  },
  {
    "id": "em-u8-q025",
    "title": "8.5 串联电路电流",
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
        "href": "#/t/em/em-u8/8.5",
        "label": "8.5 高斯定律",
        "topicId": "em-u8:8.5"
      }
    ]
  },
  {
    "id": "em-u8-q026",
    "title": "8.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电荷与力",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q027",
    "title": "8.2 高斯面",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q028",
    "title": "8.3 串联电路电流",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
  {
    "id": "em-u8-q029",
    "title": "8.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电通量",
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
        "href": "#/t/em/em-u8/8.4",
        "label": "8.4 电通量",
        "topicId": "em-u8:8.4"
      }
    ]
  },
  {
    "id": "em-u8-q030",
    "title": "8.5 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「高斯定律」，下列正确的是？",
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
        "href": "#/t/em/em-u8/8.5",
        "label": "8.5 高斯定律",
        "topicId": "em-u8:8.5"
      }
    ]
  },
  {
    "id": "em-u8-q031",
    "title": "8.1 串联电路电流",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q032",
    "title": "8.2 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电场",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q033",
    "title": "8.3 高斯面",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
  {
    "id": "em-u8-q034",
    "title": "8.4 串联电路电流",
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
        "href": "#/t/em/em-u8/8.4",
        "label": "8.4 电通量",
        "topicId": "em-u8:8.4"
      }
    ]
  },
  {
    "id": "em-u8-q035",
    "title": "8.5 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "高斯定律",
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
        "href": "#/t/em/em-u8/8.5",
        "label": "8.5 高斯定律",
        "topicId": "em-u8:8.5"
      }
    ]
  },
  {
    "id": "em-u8-q036",
    "title": "8.1 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电荷与力」，下列正确的是？",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q037",
    "title": "8.2 串联电路电流",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q038",
    "title": "8.3 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电场叠加",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
  {
    "id": "em-u8-q039",
    "title": "8.4 高斯面",
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
        "href": "#/t/em/em-u8/8.4",
        "label": "8.4 电通量",
        "topicId": "em-u8:8.4"
      }
    ]
  },
  {
    "id": "em-u8-q040",
    "title": "8.5 串联电路电流",
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
        "href": "#/t/em/em-u8/8.5",
        "label": "8.5 高斯定律",
        "topicId": "em-u8:8.5"
      }
    ]
  },
  {
    "id": "em-u8-q041",
    "title": "8.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电荷与力",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q042",
    "title": "8.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电场」，下列正确的是？",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q043",
    "title": "8.3 串联电路电流",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
  {
    "id": "em-u8-q044",
    "title": "8.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电通量",
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
        "href": "#/t/em/em-u8/8.4",
        "label": "8.4 电通量",
        "topicId": "em-u8:8.4"
      }
    ]
  },
  {
    "id": "em-u8-q045",
    "title": "8.5 高斯面",
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
        "href": "#/t/em/em-u8/8.5",
        "label": "8.5 高斯定律",
        "topicId": "em-u8:8.5"
      }
    ]
  },
  {
    "id": "em-u8-q046",
    "title": "8.1 串联电路电流",
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
        "href": "#/t/em/em-u8/8.1",
        "label": "8.1 电荷与力",
        "topicId": "em-u8:8.1"
      }
    ]
  },
  {
    "id": "em-u8-q047",
    "title": "8.2 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电场",
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
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ]
  },
  {
    "id": "em-u8-q048",
    "title": "8.3 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电场叠加」，下列正确的是？",
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
        "href": "#/t/em/em-u8/8.3",
        "label": "8.3 电场叠加",
        "topicId": "em-u8:8.3"
      }
    ]
  },
{
  "id": "em-u8-q049",
  "title": "8.8 电子与质子的电力/引力比",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "电子与质子相距 r。求电力与引力的比值 F_e/F_g（数量级即可，填 10 的幂对应的系数，如 2.3×10³⁹ 填 2.3e39）。",
  "expected": 2.3e+39,
  "tol": 0.05,
  "answerLatex": "2.3\\times10^{39}",
  "solution": "F_e/F_g=k e²/(G m_e m_p)≈2.3×10³⁹；电力远强于引力。",
  "solutionLatex": "\\dfrac{F_e}{F_g}=\\dfrac{ke^{2}}{Gm_em_p}\\approx2.3\\times10^{39}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.8",
      "label": "8.8 电力、引力与宏观物性",
      "topicId": "em-u8:8.8"
    }
  ]
},
{
  "id": "em-u8-q050",
  "title": "8.10 均匀带电绝缘球内部电场",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "半径 R=0.20 m 的均匀带电绝缘球带总电荷 Q=4.0 μC。求 r=R/2 处的电场大小（N/C），取 k=9.0×10⁹ N·m²/C²。",
  "expected": 450000.0,
  "tol": 0.02,
  "answerLatex": "4.5\\times10^{5}\\,\\mathrm{N/C}",
  "solution": "绝缘球内部 E=kQr/R³；代入 r=0.10 m 得 4.5×10⁵ N/C。",
  "solutionLatex": "E=\\dfrac{kQr}{R^{3}}=\\dfrac{(9.0\\times10^{9})(4.0\\times10^{-6})(0.10)}{(0.20)^{3}}=4.5\\times10^{5}\\,\\mathrm{N/C}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.10",
      "label": "8.10 绝缘体电荷与内部电场",
      "topicId": "em-u8:8.10"
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
  "id": "em-u8-q051",
  "title": "8.6 电荷量子化与多余电子数",
  "stem": "一个物体带净电荷 q=−3.2 μC。求多余电子数（个，用科学计数法，如 2.0e13 填 2.0e13）。",
  "expected": 20000000000000.0,
  "tol": 0.02,
  "answerLatex": "2.0\\times10^{13}",
  "solution": "N=|q|/e=(3.2×10⁻⁶)/(1.60×10⁻¹⁹)=2.0×10¹³。",
  "solutionLatex": "N=\\dfrac{|q|}{e}=\\dfrac{3.2\\times10^{-6}}{1.60\\times10^{-19}}=2.0\\times10^{13}",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.6",
      "label": "8.6 电荷性质与电荷守恒",
      "topicId": "em-u8:8.6"
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
  "id": "em-u8-q052",
  "title": "8.6 接触后的电荷守恒",
  "stem": "两个相同的导体球分别带 +7.0 μC 与 −3.0 μC，接触后分开。求每个球的最终电荷（μC）。",
  "expected": 2.0,
  "tol": 0.01,
  "answerLatex": "2.0\\,\\mathrm{\\mu C}",
  "solution": "总电荷守恒：Q_total=+4.0 μC；两球相同，均分后各为 +2.0 μC。",
  "solutionLatex": "Q_{\\rm total}=+7.0-3.0=+4.0\\,\\mathrm{\\mu C},\\quad q_{\\rm each}=\\dfrac{Q_{\\rm total}}{2}=+2.0\\,\\mathrm{\\mu C}",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.6",
      "label": "8.6 电荷性质与电荷守恒",
      "topicId": "em-u8:8.6"
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
  "id": "em-u8-q053",
  "title": "8.6 库仑力的比例推理",
  "stem": "两固定点电荷间库仑力为 F₀。若一个电荷变为 3 倍、另一个变为 2 倍，距离变为 2 倍，求新力与 F₀ 的比值。",
  "expected": 1.5,
  "tol": 0.01,
  "answerLatex": "1.5F_0",
  "solution": "F∝q₁q₂/r²；因子为 (3×2)/2²=6/4=1.5。",
  "solutionLatex": "F_{\\rm new}=F_0\\dfrac{(3q_1)(2q_2)}{(2r)^{2}}=F_0\\dfrac{6}{4}=1.5F_0",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.6",
      "label": "8.6 电荷性质与电荷守恒",
      "topicId": "em-u8:8.6"
    }
  ]
},
{
  "id": "em-u8-q054",
  "title": "8.6 系统边界与电荷转移",
  "type": "mcq",
  "difficulty": "易",
  "calculator": false,
  "stem": "下列哪种过程一定会改变所选系统的净电荷？",
  "choices": [
    {
      "text": "电子从系统外转移到系统内",
      "correct": true
    },
    {
      "text": "系统内正负电荷重新分布，但没有电荷穿过边界",
      "correct": false
    },
    {
      "text": "导体内部自由电子移动直到内部电场为零",
      "correct": false
    },
    {
      "text": "中性导体在外场中极化，两端出现等量异号电荷",
      "correct": false
    }
  ],
  "solution": "净电荷只能因电荷跨过系统边界而改变；内部重分布与极化不改变净电荷。",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.6",
      "label": "8.6 电荷性质与电荷守恒",
      "topicId": "em-u8:8.6"
    }
  ]
},
{
  "id": "em-u8-q055",
  "title": "8.7 有限带电棒垂直平分线上的电场",
  "type": "frq",
  "difficulty": "难",
  "calculator": false,
  "check": "numeric",
  "stem": "一均匀带电细棒长 L=0.80 m，线电荷密度 λ=2.0 μC/m。求距棒中点 d=0.30 m 的垂直平分线上的电场大小（N/C），取 k=9.0×10⁹ N·m²/C²。",
  "expected": 96000.0,
  "tol": 0.03,
  "answerLatex": "9.6\\times10^{4}\\,\\mathrm{N/C}",
  "solution": "对称性使平行棒方向分量抵消；E=2kλL ÷ [d√(4d²+L²)]，代入得 9.6×10⁴ N/C。",
  "solutionLatex": "E_{\\perp}=\\dfrac{2k\\lambda L}{d\\sqrt{4d^{2}+L^{2}}}=\\dfrac{2(9.0\\times10^{9})(2.0\\times10^{-6})(0.80)}{0.30\\sqrt{4(0.30)^{2}+(0.80)^{2}}}=9.6\\times10^{4}\\,\\mathrm{N/C}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.7",
      "label": "8.7 连续电荷分布的电场积分",
      "topicId": "em-u8:8.7"
    }
  ]
},
{
  "id": "em-u8-q056",
  "title": "8.7 均匀带电圆环轴线上的电场",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "半径 R=0.10 m 的均匀带电圆环带总电荷 Q=5.0 μC。求轴线上距环心 z=0.20 m 处的电场大小（N/C），取 k=9.0×10⁹ N·m²/C²。",
  "expected": 800000.0,
  "tol": 0.03,
  "answerLatex": "8.0\\times10^{5}\\,\\mathrm{N/C}",
  "solution": "E=kQz ÷ (z²+R²)^(3÷2)；代入 Q、z、R 得约 8.0×10⁵ N/C，方向沿轴线。",
  "solutionLatex": "E=\\dfrac{kQz}{\\sqrt{(z^{2}+R^{2})^{3}}}=\\dfrac{(9.0\\times10^{9})(5.0\\times10^{-6})(0.20)}{\\sqrt{[(0.20)^{2}+(0.10)^{2}]^{3}}}\\approx8.0\\times10^{5}\\,\\mathrm{N/C}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.7",
      "label": "8.7 连续电荷分布的电场积分",
      "topicId": "em-u8:8.7"
    }
  ]
},
{
  "id": "em-u8-q057",
  "title": "8.7 半圆弧圆心处的电场",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "半径 R=0.050 m 的半圆弧均匀带总电荷 Q=3.0 μC。求圆心处的电场大小（N/C），取 k=9.0×10⁹ N·m²/C²。",
  "expected": 6900000.0,
  "tol": 0.03,
  "answerLatex": "6.9\\times10^{6}\\,\\mathrm{N/C}",
  "solution": "半圆弧 λ=Q ÷ (πR)，圆心处 E=2kλ ÷ R=2kQ ÷ (πR²)，代入得约 6.9×10⁶ N/C。",
  "solutionLatex": "E=\\dfrac{2kQ}{\\pi R^{2}}=\\dfrac{2(9.0\\times10^{9})(3.0\\times10^{-6})}{\\pi(0.050)^{2}}\\approx6.9\\times10^{6}\\,\\mathrm{N/C}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.7",
      "label": "8.7 连续电荷分布的电场积分",
      "topicId": "em-u8:8.7"
    }
  ]
},
{
  "id": "em-u8-q058",
  "title": "8.8 两个电子的电力与引力之比",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "两个电子相距 1.0 nm。求它们之间电力与引力之比（填科学计数法系数，如 4.2e42）。取 k=9.0×10⁹ N·m²/C²，G=6.67×10⁻¹¹ N·m²/kg²，e=1.60×10⁻¹⁹ C，m_e=9.11×10⁻³¹ kg。",
  "expected": 4.2e42,
  "tol": 0.05,
  "answerLatex": "4.2\\times10^{42}",
  "solution": "比值为 ke² ÷ (Gm_e²)，与距离无关；代入得约 4.2×10⁴²，电力远强于引力。",
  "solutionLatex": "\\dfrac{F_e}{F_g}=\\dfrac{ke^{2}}{Gm_e^{2}}\\approx\\dfrac{(9.0\\times10^{9})(1.60\\times10^{-19})^{2}}{(6.67\\times10^{-11})(9.11\\times10^{-31})^{2}}\\approx4.2\\times10^{42}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.8",
      "label": "8.8 电力、引力与宏观物性",
      "topicId": "em-u8:8.8"
    }
  ]
},
{
  "id": "em-u8-q059",
  "title": "8.8 为什么宏观物体近中性仍有力",
  "type": "mcq",
  "difficulty": "中",
  "calculator": false,
  "stem": "桌面上的书受到支持力。下列哪项解释最符合微观电磁作用的观点？",
  "choices": [
    {
      "text": "书与桌面的电子云相互排斥，大量微观电磁作用的宏观平均表现为支持力",
      "correct": true
    },
    {
      "text": "书与桌面都近中性，所以它们之间没有任何电磁作用",
      "correct": false
    },
    {
      "text": "支持力是一种与电磁力无关的新基本相互作用",
      "correct": false
    },
    {
      "text": "引力是支持力的主要来源",
      "correct": false
    }
  ],
  "solution": "宏观物体整体近中性，但内部有大量正负电荷；接触力是微观电磁相互作用的宏观平均。",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.8",
      "label": "8.8 电力、引力与宏观物性",
      "topicId": "em-u8:8.8"
    }
  ]
},
{
  "id": "em-u8-q060",
  "title": "8.9 由电容比求相对介电常数",
  "type": "frq",
  "difficulty": "易",
  "calculator": false,
  "check": "numeric",
  "stem": "平行板电容器在真空中的电容 C₀=2.0 pF；填满某均匀介质后电容 C=7.0 pF。求该介质的相对介电常数 κ。",
  "expected": 3.5,
  "tol": 0.02,
  "answerLatex": "3.5",
  "solution": "填满介质时 C=κC₀，故 κ=C ÷ C₀=7.0 ÷ 2.0=3.5。",
  "solutionLatex": "\\kappa=\\dfrac{C}{C_0}=\\dfrac{7.0\\,\\mathrm{pF}}{2.0\\,\\mathrm{pF}}=3.5",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.9",
      "label": "8.9 介电率与电极化",
      "topicId": "em-u8:8.9"
    }
  ]
},
{
  "id": "em-u8-q061",
  "title": "8.9 介质内部场强的削弱",
  "type": "frq",
  "difficulty": "易",
  "calculator": false,
  "check": "numeric",
  "stem": "平行板电容器极板间原本的场强 E₀=1.2×10⁵ V/m；填满相对介电常数 κ=2.5 的均匀介质。求介质内部的净场强大小（V/m）。",
  "expected": 48000.0,
  "tol": 0.02,
  "answerLatex": "4.8\\times10^{4}\\,\\mathrm{V/m}",
  "solution": "线性均匀介质内部 E=E₀ ÷ κ=1.2×10⁵ ÷ 2.5=4.8×10⁴ V/m。",
  "solutionLatex": "E=\\dfrac{E_0}{\\kappa}=\\dfrac{1.2\\times10^{5}}{2.5}=4.8\\times10^{4}\\,\\mathrm{V/m}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/em/em-u8/8.9",
      "label": "8.9 介电率与电极化",
      "topicId": "em-u8:8.9"
    }
  ]
}
];
