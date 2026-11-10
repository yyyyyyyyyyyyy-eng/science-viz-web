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
    "title": "电容器稳态 · 物理情境",
    "text": "理想电池、电阻与电容串联，开关闭合足够长时间。求回路稳态电流。",
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
  "stim-em-u10-3": {
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
    "id": "em-u10-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-em-u10-1",
    "stimulus": {
      "title": "电容器稳态 · 物理情境",
      "text": "理想电池、电阻与电容串联，开关闭合足够长时间。求回路稳态电流。",
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
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "\\varepsilon=IR+\\dfrac{Q}{C},\\quad I=\\dfrac{dQ}{dt}",
        "solution": "基尔霍夫电压定律与电容定义；稳态时 I=0。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.1",
            "label": "10.1 导体静电",
            "topicId": "em-u10:10.1"
          }
        ]
      },
      {
        "id": "em-u10-q002",
        "title": "电容器稳态电流",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "开关闭合足够长时间后，求回路稳态电流 I（A）。",
        "expected": 0,
        "tol": 0.01,
        "solution": "直流稳态下电容器相当于开路。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u10/10.2",
            "label": "10.2 电荷再分布",
            "topicId": "em-u10:10.2"
          }
        ],
        "answerLatex": "0\\,\\mathrm{A}",
        "solutionLatex": "I_{\\infty}=0\\ \\text{（电容器相当于开路）}."
      },
      {
        "id": "em-u10-q003",
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
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-em-u10-2",
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
        "id": "em-u10-q004",
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
            "href": "#/t/em/em-u10/10.4",
            "label": "10.4 电介质",
            "topicId": "em-u10:10.4"
          }
        ]
      },
      {
        "id": "em-u10-q005",
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
            "href": "#/t/em/em-u10/10.1",
            "label": "10.1 导体静电",
            "topicId": "em-u10:10.1"
          }
        ],
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1.8\\times10^{6}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u10-q006",
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
            "href": "#/t/em/em-u10/10.2",
            "label": "10.2 电荷再分布",
            "topicId": "em-u10:10.2"
          }
        ]
      },
      {
        "id": "em-u10-q007",
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
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-em-u10-3",
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
        "id": "em-u10-q008",
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
            "href": "#/t/em/em-u10/10.4",
            "label": "10.4 电介质",
            "topicId": "em-u10:10.4"
          }
        ]
      },
      {
        "id": "em-u10-q009",
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
            "href": "#/t/em/em-u10/10.1",
            "label": "10.1 导体静电",
            "topicId": "em-u10:10.1"
          }
        ],
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u10-q010",
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
            "href": "#/t/em/em-u10/10.2",
            "label": "10.2 电荷再分布",
            "topicId": "em-u10:10.2"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u10-q011",
    "title": "10.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "导体静电",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q012",
    "title": "10.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电荷再分布」，下列正确的是？",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q013",
    "title": "10.3 串联电路电流",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q014",
    "title": "10.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电介质",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q015",
    "title": "10.1 高斯面",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q016",
    "title": "10.2 串联电路电流",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q017",
    "title": "10.3 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电容器",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q018",
    "title": "10.4 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电介质」，下列正确的是？",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q019",
    "title": "10.1 串联电路电流",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q020",
    "title": "10.2 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电荷再分布",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q021",
    "title": "10.3 高斯面",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q022",
    "title": "10.4 串联电路电流",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q023",
    "title": "10.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "导体静电",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q024",
    "title": "10.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电荷再分布」，下列正确的是？",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q025",
    "title": "10.3 串联电路电流",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q026",
    "title": "10.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电介质",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q027",
    "title": "10.1 高斯面",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q028",
    "title": "10.2 串联电路电流",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q029",
    "title": "10.3 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电容器",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q030",
    "title": "10.4 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电介质」，下列正确的是？",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q031",
    "title": "10.1 串联电路电流",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q032",
    "title": "10.2 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电荷再分布",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q033",
    "title": "10.3 高斯面",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q034",
    "title": "10.4 串联电路电流",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q035",
    "title": "10.1 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "导体静电",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q036",
    "title": "10.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电荷再分布」，下列正确的是？",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q037",
    "title": "10.3 串联电路电流",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q038",
    "title": "10.4 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电介质",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q039",
    "title": "10.1 高斯面",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q040",
    "title": "10.2 串联电路电流",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
      }
    ]
  },
  {
    "id": "em-u10-q041",
    "title": "10.3 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电容器",
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
        "href": "#/t/em/em-u10/10.1",
        "label": "10.1 导体静电",
        "topicId": "em-u10:10.1"
      }
    ]
  },
  {
    "id": "em-u10-q042",
    "title": "10.4 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「电介质」，下列正确的是？",
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
        "href": "#/t/em/em-u10/10.2",
        "label": "10.2 电荷再分布",
        "topicId": "em-u10:10.2"
      }
    ]
  },
  {
    "id": "em-u10-q043",
    "title": "10.1 串联电路电流",
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
        "href": "#/t/em/em-u10/10.3",
        "label": "10.3 电容器",
        "topicId": "em-u10:10.3"
      }
    ]
  },
  {
    "id": "em-u10-q044",
    "title": "10.2 点电荷电场",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "电荷再分布",
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
        "href": "#/t/em/em-u10/10.4",
        "label": "10.4 电介质",
        "topicId": "em-u10:10.4"
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
  "expected": 4.0,
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
  "expected": 1.0e7,
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
}
];
