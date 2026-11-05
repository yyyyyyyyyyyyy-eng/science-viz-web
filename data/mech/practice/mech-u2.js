/** Practice bank for mech-u2 */
export const UNIT_REF = {
  "id": "mech-u2",
  "code": "2",
  "titleZh": "力与平动动力学",
  "titleEn": "Force and Translational Dynamics",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u2-1": {
    "title": "质心 · 物理情境",
    "text": "结合图示与数据回答。数值已取整以便演算（改编自公开教材风格，非照抄）。",
    "diagram": {
      "kind": "fbd",
      "surface": true,
      "massLabel": "m",
      "forces": [
        {
          "label": "N",
          "dx": 0,
          "dy": -50
        },
        {
          "label": "mg",
          "dx": 0,
          "dy": 55
        },
        {
          "label": "F",
          "dx": 55,
          "dy": 0
        },
        {
          "label": "f",
          "dx": -40,
          "dy": 0
        }
      ]
    },
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "m",
          "2.0 kg"
        ],
        [
          "μ_k",
          "0.20"
        ],
        [
          "θ",
          "30°"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  },
  "stim-mech-u2-2": {
    "title": "系统 · 物理情境",
    "text": "结合图示与数据回答。数值已取整以便演算（改编自公开教材风格，非照抄）。",
    "diagram": {
      "kind": "pulley",
      "m1": "m₁",
      "m2": "m₂",
      "R": true
    },
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "m",
          "2.0 kg"
        ],
        [
          "μ_k",
          "0.20"
        ],
        [
          "θ",
          "30°"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  },
  "stim-mech-u2-3": {
    "title": "牛顿第一与第二定律 · 物理情境",
    "text": "结合图示与数据回答。数值已取整以便演算（改编自公开教材风格，非照抄）。",
    "diagram": {
      "kind": "motionGraph",
      "points": [
        [
          0,
          0
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          4,
          -1
        ]
      ],
      "xLabel": "t",
      "yLabel": "v"
    },
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "m",
          "2.0 kg"
        ],
        [
          "μ_k",
          "0.20"
        ],
        [
          "θ",
          "30°"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording.",
    "graph": {
      "points": [
        [
          0,
          0
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          4,
          -1
        ]
      ],
      "xLabel": "t / s",
      "yLabel": "v"
    }
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "mech-u2-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-mech-u2-1",
    "stimulus": {
      "title": "质心 · 物理情境",
      "text": "结合图示与数据回答。数值已取整以便演算（改编自公开教材风格，非照抄）。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -50
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 55
          },
          {
            "label": "F",
            "dx": 55,
            "dy": 0
          },
          {
            "label": "f",
            "dx": -40,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "θ",
            "30°"
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
        "id": "mech-u2-q001",
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "\\sum \\vec F=m\\vec a",
        "solution": "先定律、后代数。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.1",
            "label": "2.1 质心",
            "topicId": "mech-u2:2.1"
          }
        ]
      },
      {
        "id": "mech-u2-q002",
        "title": "定量/概念 (2)",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "代入表中数据求一个目标量（取合理目标）。",
        "expected": 3,
        "tol": 0.15,
        "answer": "例如水平面 a=(F−μmg)/m ≈ 3 m/s²",
        "solution": "定量计算并检查单位。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.2",
            "label": "2.2 系统",
            "topicId": "mech-u2:2.2"
          }
        ]
      },
      {
        "id": "mech-u2-q003",
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
            "href": "#/t/mech/mech-u2/2.3",
            "label": "2.3 牛顿第一与第二定律",
            "topicId": "mech-u2:2.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u2-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-mech-u2-2",
    "stimulus": {
      "title": "系统 · 物理情境",
      "text": "结合图示与数据回答。数值已取整以便演算（改编自公开教材风格，非照抄）。",
      "diagram": {
        "kind": "pulley",
        "m1": "m₁",
        "m2": "m₂",
        "R": true
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "θ",
            "30°"
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
        "id": "mech-u2-q004",
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "\\sum \\vec F=m\\vec a",
        "solution": "先定律、后代数。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.4",
            "label": "2.4 圆周运动",
            "topicId": "mech-u2:2.4"
          }
        ]
      },
      {
        "id": "mech-u2-q005",
        "title": "定量/概念 (2)",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "代入表中数据求一个目标量（取合理目标）。",
        "expected": 3,
        "tol": 0.15,
        "answer": "例如水平面 a=(F−μmg)/m ≈ 3 m/s²",
        "solution": "定量计算并检查单位。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.5",
            "label": "2.5 牛顿第三定律",
            "topicId": "mech-u2:2.5"
          }
        ]
      },
      {
        "id": "mech-u2-q006",
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
            "href": "#/t/mech/mech-u2/2.6",
            "label": "2.6 万有引力",
            "topicId": "mech-u2:2.6"
          }
        ]
      },
      {
        "id": "mech-u2-q007",
        "title": "定量/概念 (4)",
        "difficulty": "易",
        "type": "frq",
        "stem": "说明若某一参数加倍，目标量如何变化（定性+比例）。",
        "answer": "用公式做比例推理，例如 R↑⇒I↓ 成反比（欧姆情形）。",
        "solution": "AP Physics C 强调比例推理。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.1",
            "label": "2.1 质心",
            "topicId": "mech-u2:2.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u2-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-mech-u2-3",
    "stimulus": {
      "title": "牛顿第一与第二定律 · 物理情境",
      "text": "结合图示与数据回答。数值已取整以便演算（改编自公开教材风格，非照抄）。",
      "diagram": {
        "kind": "motionGraph",
        "points": [
          [
            0,
            0
          ],
          [
            1,
            3
          ],
          [
            2,
            3
          ],
          [
            4,
            -1
          ]
        ],
        "xLabel": "t",
        "yLabel": "v"
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "θ",
            "30°"
          ]
        ]
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording.",
      "graph": {
        "points": [
          [
            0,
            0
          ],
          [
            1,
            3
          ],
          [
            2,
            3
          ],
          [
            4,
            -1
          ]
        ],
        "xLabel": "t / s",
        "yLabel": "v"
      }
    },
    "questions": [
      {
        "id": "mech-u2-q008",
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "\\sum \\vec F=m\\vec a",
        "solution": "先定律、后代数。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.2",
            "label": "2.2 系统",
            "topicId": "mech-u2:2.2"
          }
        ]
      },
      {
        "id": "mech-u2-q009",
        "title": "定量/概念 (2)",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "代入表中数据求一个目标量（取合理目标）。",
        "expected": 3,
        "tol": 0.15,
        "answer": "例如水平面 a=(F−μmg)/m ≈ 3 m/s²",
        "solution": "定量计算并检查单位。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.3",
            "label": "2.3 牛顿第一与第二定律",
            "topicId": "mech-u2:2.3"
          }
        ]
      },
      {
        "id": "mech-u2-q010",
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
            "href": "#/t/mech/mech-u2/2.4",
            "label": "2.4 圆周运动",
            "topicId": "mech-u2:2.4"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u2-q011",
    "title": "2.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质心",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.5",
        "label": "2.5 牛顿第三定律",
        "topicId": "mech-u2:2.5"
      }
    ]
  },
  {
    "id": "mech-u2-q012",
    "title": "2.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「系统」，下列正确的是？",
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
        "href": "#/t/mech/mech-u2/2.6",
        "label": "2.6 万有引力",
        "topicId": "mech-u2:2.6"
      }
    ]
  },
  {
    "id": "mech-u2-q013",
    "title": "2.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
      }
    ]
  },
  {
    "id": "mech-u2-q014",
    "title": "2.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "圆周运动",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q015",
    "title": "2.5 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a=F/m=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q016",
    "title": "2.6 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.4",
        "label": "2.4 圆周运动",
        "topicId": "mech-u2:2.4"
      }
    ]
  },
  {
    "id": "mech-u2-q017",
    "title": "2.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质心",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.5",
        "label": "2.5 牛顿第三定律",
        "topicId": "mech-u2:2.5"
      }
    ]
  },
  {
    "id": "mech-u2-q018",
    "title": "2.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「系统」，下列正确的是？",
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
        "href": "#/t/mech/mech-u2/2.6",
        "label": "2.6 万有引力",
        "topicId": "mech-u2:2.6"
      }
    ]
  },
  {
    "id": "mech-u2-q019",
    "title": "2.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
      }
    ]
  },
  {
    "id": "mech-u2-q020",
    "title": "2.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "圆周运动",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q021",
    "title": "2.5 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a=F/m=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q022",
    "title": "2.6 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.4",
        "label": "2.4 圆周运动",
        "topicId": "mech-u2:2.4"
      }
    ]
  },
  {
    "id": "mech-u2-q023",
    "title": "2.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质心",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.5",
        "label": "2.5 牛顿第三定律",
        "topicId": "mech-u2:2.5"
      }
    ]
  },
  {
    "id": "mech-u2-q024",
    "title": "2.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「系统」，下列正确的是？",
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
        "href": "#/t/mech/mech-u2/2.6",
        "label": "2.6 万有引力",
        "topicId": "mech-u2:2.6"
      }
    ]
  },
  {
    "id": "mech-u2-q025",
    "title": "2.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
      }
    ]
  },
  {
    "id": "mech-u2-q026",
    "title": "2.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "圆周运动",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q027",
    "title": "2.5 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a=F/m=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q028",
    "title": "2.6 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.4",
        "label": "2.4 圆周运动",
        "topicId": "mech-u2:2.4"
      }
    ]
  },
  {
    "id": "mech-u2-q029",
    "title": "2.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质心",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.5",
        "label": "2.5 牛顿第三定律",
        "topicId": "mech-u2:2.5"
      }
    ]
  },
  {
    "id": "mech-u2-q030",
    "title": "2.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「系统」，下列正确的是？",
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
        "href": "#/t/mech/mech-u2/2.6",
        "label": "2.6 万有引力",
        "topicId": "mech-u2:2.6"
      }
    ]
  },
  {
    "id": "mech-u2-q031",
    "title": "2.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
      }
    ]
  },
  {
    "id": "mech-u2-q032",
    "title": "2.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "圆周运动",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q033",
    "title": "2.5 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a=F/m=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q034",
    "title": "2.6 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.4",
        "label": "2.4 圆周运动",
        "topicId": "mech-u2:2.4"
      }
    ]
  },
  {
    "id": "mech-u2-q035",
    "title": "2.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质心",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.5",
        "label": "2.5 牛顿第三定律",
        "topicId": "mech-u2:2.5"
      }
    ]
  },
  {
    "id": "mech-u2-q036",
    "title": "2.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「系统」，下列正确的是？",
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
        "href": "#/t/mech/mech-u2/2.6",
        "label": "2.6 万有引力",
        "topicId": "mech-u2:2.6"
      }
    ]
  },
  {
    "id": "mech-u2-q037",
    "title": "2.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
      }
    ]
  },
  {
    "id": "mech-u2-q038",
    "title": "2.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "圆周运动",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q039",
    "title": "2.5 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a=F/m=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q040",
    "title": "2.6 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.4",
        "label": "2.4 圆周运动",
        "topicId": "mech-u2:2.4"
      }
    ]
  },
  {
    "id": "mech-u2-q041",
    "title": "2.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质心",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.5",
        "label": "2.5 牛顿第三定律",
        "topicId": "mech-u2:2.5"
      }
    ]
  },
  {
    "id": "mech-u2-q042",
    "title": "2.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「系统」，下列正确的是？",
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
        "href": "#/t/mech/mech-u2/2.6",
        "label": "2.6 万有引力",
        "topicId": "mech-u2:2.6"
      }
    ]
  },
  {
    "id": "mech-u2-q043",
    "title": "2.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
      }
    ]
  },
  {
    "id": "mech-u2-q044",
    "title": "2.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "圆周运动",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q045",
    "title": "2.5 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a=F/m=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q046",
    "title": "2.6 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.4",
        "label": "2.4 圆周运动",
        "topicId": "mech-u2:2.4"
      }
    ]
  },
  {
    "id": "mech-u2-q047",
    "title": "2.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "质心",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.5",
        "label": "2.5 牛顿第三定律",
        "topicId": "mech-u2:2.5"
      }
    ]
  },
  {
    "id": "mech-u2-q048",
    "title": "2.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「系统」，下列正确的是？",
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
        "href": "#/t/mech/mech-u2/2.6",
        "label": "2.6 万有引力",
        "topicId": "mech-u2:2.6"
      }
    ]
  },
  {
    "id": "mech-u2-q049",
    "title": "2.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
      }
    ]
  },
  {
    "id": "mech-u2-q050",
    "title": "2.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "圆周运动",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
      "diagram": {
        "kind": "fbd",
        "surface": true,
        "massLabel": "m",
        "forces": [
          {
            "label": "N",
            "dx": 0,
            "dy": -78
          },
          {
            "label": "mg",
            "dx": 0,
            "dy": 78
          },
          {
            "label": "F",
            "dx": 40,
            "dy": 0
          },
          {
            "label": "f_k",
            "dx": -16,
            "dy": 0
          }
        ]
      },
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "m",
            "2.0 kg"
          ],
          [
            "F",
            "10 N"
          ],
          [
            "μ_k",
            "0.20"
          ],
          [
            "g",
            "9.8 m/s²"
          ]
        ]
      }
    },
    "parts": [
      {
        "stem": "沿水平方向写出牛顿第二定律。",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动能摩擦与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q051",
    "title": "2.5 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "a=F/m=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q052",
    "title": "2.6 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "K=½·2·16=16 J.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.4",
        "label": "2.4 圆周运动",
        "topicId": "mech-u2:2.4"
      }
    ]
  }
];
