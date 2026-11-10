/** Practice bank for mech-u3 */
export const UNIT_REF = {
  "id": "mech-u3",
  "code": "3",
  "titleZh": "功、能量与功率",
  "titleEn": "Work, Energy, and Power",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u3-1": {
    "title": "水平面加速度 · 物理情境",
    "text": "水平面上一物块受水平拉力 F，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
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
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  },
  "stim-mech-u3-2": {
    "title": "滑轮系统 · 物理情境",
    "text": "m₁ 与 m₂ 由轻绳跨过理想定滑轮连接，且 m₁ > m₂。求系统加速度大小。",
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
          "m₁",
          "2.0 kg"
        ],
        [
          "m₂",
          "1.0 kg"
        ],
        [
          "g",
          "9.8 m/s²"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
  },
  "stim-mech-u3-3": {
    "title": "v–t 图像 · 物理情境",
    "text": "图为某物体的速度–时间图像。求 0–1 s 内的加速度。",
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
    "id": "mech-u3-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-mech-u3-1",
    "stimulus": {
      "title": "水平面加速度 · 物理情境",
      "text": "水平面上一物块受水平拉力 F，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。",
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
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Numbers/style inspired by OpenStax University Physics; original wording."
    },
    "questions": [
      {
        "id": "mech-u3-q001",
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
            "href": "#/t/mech/mech-u3/3.1",
            "label": "3.1 动能定理",
            "topicId": "mech-u3:3.1"
          }
        ]
      },
      {
        "id": "mech-u3-q002",
        "title": "水平面加速度",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求物块加速度 a（m/s²）。",
        "expected": 3.04,
        "tol": 0.01,
        "solution": "取 g=9.8 m/s²，代入得 a≈3.04 m/s²。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.2",
            "label": "3.2 力与势能",
            "topicId": "mech-u3:3.2"
          }
        ],
        "answerLatex": "3.04\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u3-q003",
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
            "href": "#/t/mech/mech-u3/3.3",
            "label": "3.3 机械能守恒",
            "topicId": "mech-u3:3.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u3-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-mech-u3-2",
    "stimulus": {
      "title": "滑轮系统 · 物理情境",
      "text": "m₁ 与 m₂ 由轻绳跨过理想定滑轮连接，且 m₁ > m₂。求系统加速度大小。",
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
            "m₁",
            "2.0 kg"
          ],
          [
            "m₂",
            "1.0 kg"
          ],
          [
            "g",
            "9.8 m/s²"
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
        "id": "mech-u3-q004",
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
            "href": "#/t/mech/mech-u3/3.4",
            "label": "3.4 功率",
            "topicId": "mech-u3:3.4"
          }
        ]
      },
      {
        "id": "mech-u3-q005",
        "title": "滑轮系统加速度",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求两物块加速度大小 a（m/s²）。",
        "expected": 3.27,
        "tol": 0.01,
        "solution": "系统整体受力 (m₁−m₂)g，总质量 m₁+m₂。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.1",
            "label": "3.1 动能定理",
            "topicId": "mech-u3:3.1"
          }
        ],
        "answerLatex": "3.27\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}=\\dfrac{(2.0-1.0)(9.8)}{2.0+1.0}=3.27\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u3-q006",
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
            "href": "#/t/mech/mech-u3/3.2",
            "label": "3.2 力与势能",
            "topicId": "mech-u3:3.2"
          }
        ]
      },
      {
        "id": "mech-u3-q007",
        "title": "定量/概念 (4)",
        "difficulty": "易",
        "type": "frq",
        "stem": "说明若某一参数加倍，目标量如何变化（定性+比例）。",
        "answer": "a=F/m：m 不变时 F 加倍，a 加倍；F 不变时 m 加倍，a 减半。",
        "solution": "牛顿第二定律的比例关系。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.3",
            "label": "3.3 机械能守恒",
            "topicId": "mech-u3:3.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u3-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-mech-u3-3",
    "stimulus": {
      "title": "v–t 图像 · 物理情境",
      "text": "图为某物体的速度–时间图像。求 0–1 s 内的加速度。",
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
        "id": "mech-u3-q008",
        "title": "定量/概念 (1)",
        "difficulty": "易",
        "type": "frq",
        "stem": "写出适用的核心定律（符号形式），并标明体系。",
        "answerLatex": "a=\\dfrac{\\Delta v}{\\Delta t}",
        "solution": "v–t 图像斜率即加速度。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.4",
            "label": "3.4 功率",
            "topicId": "mech-u3:3.4"
          }
        ]
      },
      {
        "id": "mech-u3-q009",
        "title": "v–t 图像斜率",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求 0–1 s 内的加速度 a（m/s²）。",
        "expected": 3,
        "tol": 0.01,
        "solution": "v–t 图斜率即加速度。",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u3/3.1",
            "label": "3.1 动能定理",
            "topicId": "mech-u3:3.1"
          }
        ],
        "answerLatex": "3.0\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{3.0-0}{1.0-0}=3.0\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u3-q010",
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
            "href": "#/t/mech/mech-u3/3.2",
            "label": "3.2 力与势能",
            "topicId": "mech-u3:3.2"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u3-q011",
    "title": "3.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "动能定理",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ]
  },
  {
    "id": "mech-u3-q012",
    "title": "3.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「力与势能」，下列正确的是？",
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
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ]
  },
  {
    "id": "mech-u3-q013",
    "title": "3.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q014",
    "title": "3.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "功率",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q015",
    "title": "3.1 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u3-q016",
    "title": "3.2 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q017",
    "title": "3.3 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "机械能守恒",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q018",
    "title": "3.4 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「功率」，下列正确的是？",
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
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q019",
    "title": "3.1 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q020",
    "title": "3.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力与势能",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ]
  },
  {
    "id": "mech-u3-q021",
    "title": "3.3 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u3-q022",
    "title": "3.4 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q023",
    "title": "3.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "动能定理",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ]
  },
  {
    "id": "mech-u3-q024",
    "title": "3.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「力与势能」，下列正确的是？",
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
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ]
  },
  {
    "id": "mech-u3-q025",
    "title": "3.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q026",
    "title": "3.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "功率",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q027",
    "title": "3.1 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u3-q028",
    "title": "3.2 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q029",
    "title": "3.3 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "机械能守恒",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q030",
    "title": "3.4 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「功率」，下列正确的是？",
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
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q031",
    "title": "3.1 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q032",
    "title": "3.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力与势能",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ]
  },
  {
    "id": "mech-u3-q033",
    "title": "3.3 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u3-q034",
    "title": "3.4 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q035",
    "title": "3.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "动能定理",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ]
  },
  {
    "id": "mech-u3-q036",
    "title": "3.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「力与势能」，下列正确的是？",
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
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ]
  },
  {
    "id": "mech-u3-q037",
    "title": "3.3 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q038",
    "title": "3.4 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "功率",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q039",
    "title": "3.1 定量练习",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u3-q040",
    "title": "3.2 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q041",
    "title": "3.3 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "机械能守恒",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.1",
        "label": "3.1 动能定理",
        "topicId": "mech-u3:3.1"
      }
    ]
  },
  {
    "id": "mech-u3-q042",
    "title": "3.4 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「功率」，下列正确的是？",
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
        "href": "#/t/mech/mech-u3/3.2",
        "label": "3.2 力与势能",
        "topicId": "mech-u3:3.2"
      }
    ]
  },
  {
    "id": "mech-u3-q043",
    "title": "3.1 动能",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.3",
        "label": "3.3 机械能守恒",
        "topicId": "mech-u3:3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-u3-q044",
    "title": "3.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力与势能",
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
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。"
      },
      {
        "stem": "求加速度 a（m/s²）。",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      }
    ],
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.4",
        "label": "3.4 功率",
        "topicId": "mech-u3:3.4"
      }
    ]
  },
  {
    "id": "mech-u3-q060",
    "title": "3.5 非线性弹簧的功 · 3.5 Work by a nonlinear spring",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "F_{\\mathrm{app},x}=kx+\\beta x^{3},\\quad k=200\\,\\mathrm{N\\,m^{-1}},\\quad \\beta=500\\,\\mathrm{N\\,m^{-3}},\\quad x:0\\to0.20\\,\\mathrm{m}",
    "stem": "外力把非线性弹簧从平衡位置拉伸 0.20 m。求外力做的功。 · An applied force stretches a nonlinear spring from equilibrium to 0.20 m. Find the work done by the applied force.",
    "expected": 4.2,
    "tol": 0.02,
    "answerLatex": "4.2\\,\\mathrm{J}",
    "solution": "对 F_app = kx + βx³ 积分，得 4.0 J + 0.20 J = 4.2 J。 · Integrate F_app = kx + βx³ to get 4.0 J + 0.20 J = 4.2 J.",
    "solutionLatex": "W=\\int_0^{0.20}(200x+500x^{3})\\,\\mathrm{d}x=\\left[100x^{2}+125x^{4}\\right]_0^{0.20}=4.2\\,\\mathrm{J}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q061",
    "title": "3.5 由 U(x) 判断力的方向 · 3.5 Force direction from U(x)",
    "type": "mcq",
    "difficulty": "中",
    "stem": "一维势能 U(x) 在 x = x0 处的斜率为正。该处的保守力 F_x 指向哪一侧？ · The one-dimensional potential energy U(x) has a positive slope at x = x0. Which way does the conservative force F_x point there?",
    "choices": [
      {
        "text": "沿负 x 方向，因为 F_x 等于势能斜率的相反数。 · Along negative x, because F_x is the negative of the potential-energy slope.",
        "correct": true
      },
      {
        "text": "沿正 x 方向，因为力总与斜率同向。 · Along positive x, because force always follows the slope.",
        "correct": false
      },
      {
        "text": "力为零，因为势能不为零。 · The force is zero because the potential energy is nonzero.",
        "correct": false
      },
      {
        "text": "无法判断，必须知道物体的速度。 · It cannot be determined without the object's velocity.",
        "correct": false
      }
    ],
    "solution": "F_x = −dU/dx。斜率为正，所以力沿负 x 方向，指向势能降低的一侧。 · F_x = −dU/dx. A positive slope gives a force along negative x, toward lower potential energy.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q062",
    "title": "3.5 由 U(x) 求力 · 3.5 Force from U(x)",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "U(x)=3x^{2}-x^{3}\\,\\mathrm{J}\\quad(x\\ \\text{in m})",
    "stem": "求 x = 1.0 m 处的保守力 F_x（带符号，单位 N）。 · Find the conservative force F_x at x = 1.0 m, with sign, in N.",
    "expected": -3,
    "tol": 0.01,
    "answerLatex": "-3.0\\,\\mathrm{N}",
    "solution": "F_x = −dU/dx = 3x² − 6x，在 x = 1.0 m 处得 −3.0 N，方向沿负 x。 · F_x = −dU/dx = 3x² − 6x. At x = 1.0 m this gives −3.0 N, along negative x.",
    "solutionLatex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=3x^{2}-6x,\\qquad F_x(1.0)=-3.0\\,\\mathrm{N}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q063",
    "title": "3.5 非线性弹簧的势能（符号） · 3.5 Potential energy of a nonlinear spring (symbolic)",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "symbolic",
    "stem": "非线性弹簧的力为 F_x = −(kx + βx³)，取 U(0) = 0。写出 U(x) 的表达式。 · A nonlinear spring has F_x = −(kx + βx³), with U(0) = 0. Write the expression for U(x).",
    "expected": "k*x^2/2+beta*x^4/4",
    "answerLatex": "U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
    "solution": "对 −F_x 积分：kx 积分得 ½kx²，βx³ 积分得 ¼βx⁴。 · Integrate −F_x: kx gives ½kx² and βx³ gives ¼βx⁴.",
    "solutionLatex": "U(x)=-\\int F_x\\,\\mathrm{d}x=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q064",
    "title": "3.5 变力做功的积分 · 3.5 Work by a variable force",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "F_x=4x-x^{2}\\,\\mathrm{N}\\quad(x\\ \\text{in m}),\\quad x:0\\to3.0\\,\\mathrm{m}",
    "stem": "物体沿 x 方向运动，力随位置变化。求该力在 0 到 3.0 m 内做的功。 · An object moves along x under a position-dependent force. Find the work done from 0 to 3.0 m.",
    "expected": 9,
    "tol": 0.02,
    "answerLatex": "9.0\\,\\mathrm{J}",
    "solution": "积分得 [2x² − x³/3]，代入 0 与 3.0 得 18 − 9 = 9.0 J。 · Integrating gives [2x² − x³/3]; substituting 0 and 3.0 gives 18 − 9 = 9.0 J.",
    "solutionLatex": "W=\\int_0^{3.0}(4x-x^{2})\\,\\mathrm{d}x=\\left[2x^{2}-\\dfrac{x^{3}}{3}\\right]_0^{3.0}=9.0\\,\\mathrm{J}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q065",
    "title": "3.5 稳定平衡与不稳定平衡 · 3.5 Stable and unstable equilibrium",
    "type": "mcq",
    "difficulty": "中",
    "stem": "一维势能 U(x) 在 x = x0 处有局部极大值。关于 x0 的平衡性质，下列哪项正确？ · A one-dimensional potential energy U(x) has a local maximum at x = x0. Which statement about the equilibrium at x0 is correct?",
    "choices": [
      {
        "text": "不稳定平衡，因为小位移后力把物体推离 x0。 · Unstable equilibrium, because after a small displacement the force pushes the object away from x0.",
        "correct": true
      },
      {
        "text": "稳定平衡，因为 U 在 x0 处最大。 · Stable equilibrium, because U is largest at x0.",
        "correct": false
      },
      {
        "text": "不是平衡位置，因为 U 不为零。 · It is not an equilibrium position because U is not zero.",
        "correct": false
      },
      {
        "text": "稳定性与 U 的曲率无关。 · Stability is unrelated to the curvature of U.",
        "correct": false
      }
    ],
    "solution": "U 的局部极大点对应不稳定平衡；局部极小点才对应稳定平衡。稳定性由 U″ 的符号决定。 · A local maximum of U is unstable equilibrium; only a local minimum is stable. Stability is set by the sign of U″.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  },
  {
    "id": "mech-u3-q066",
    "title": "3.5 转折点与机械能 · 3.5 Turning point and mechanical energy",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "U(x)=2x^{2}\\,\\mathrm{J},\\quad E=8.0\\,\\mathrm{J}\\quad(x\\ \\text{in m})",
    "stem": "物体在保守力场中运动，总机械能守恒。求正 x 方向的转折点位置。 · The object moves in a conservative field with constant mechanical energy. Find the turning point on the positive x side.",
    "expected": 2,
    "tol": 0.01,
    "answerLatex": "x=2.0\\,\\mathrm{m}",
    "solution": "转折点 K = 0，所以 U = E：2x² = 8.0，得正根 x = 2.0 m。 · At a turning point K = 0, so U = E: 2x² = 8.0, giving the positive root x = 2.0 m.",
    "solutionLatex": "K=0\\ \\Rightarrow\\ U(x)=E,\\qquad 2x^{2}=8.0\\quad\\Rightarrow\\quad x=2.0\\,\\mathrm{m}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u3/3.5",
        "label": "3.5 变力做功与势能函数",
        "topicId": "mech-u3:3.5"
      }
    ]
  }
];
