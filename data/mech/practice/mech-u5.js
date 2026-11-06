/** Practice bank for mech-u5 */
export const UNIT_REF = {
  "id": "mech-u5",
  "code": "5",
  "titleZh": "力矩与转动动力学",
  "titleEn": "Torque and Rotational Dynamics",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u5-1": {
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
  "stim-mech-u5-2": {
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
  "stim-mech-u5-3": {
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
    "id": "mech-u5-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-mech-u5-1",
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
        "id": "mech-u5-q001",
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
            "href": "#/t/mech/mech-u5/5.1",
            "label": "5.1 力矩与静力学",
            "topicId": "mech-u5:5.1"
          }
        ]
      },
      {
        "id": "mech-u5-q002",
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
            "href": "#/t/mech/mech-u5/5.2",
            "label": "5.2 转动运动学",
            "topicId": "mech-u5:5.2"
          }
        ],
        "answerLatex": "3.04\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u5-q003",
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
            "href": "#/t/mech/mech-u5/5.3",
            "label": "5.3 转动动力学",
            "topicId": "mech-u5:5.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u5-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-mech-u5-2",
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
        "id": "mech-u5-q004",
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
            "href": "#/t/mech/mech-u5/5.1",
            "label": "5.1 力矩与静力学",
            "topicId": "mech-u5:5.1"
          }
        ]
      },
      {
        "id": "mech-u5-q005",
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
            "href": "#/t/mech/mech-u5/5.2",
            "label": "5.2 转动运动学",
            "topicId": "mech-u5:5.2"
          }
        ],
        "answerLatex": "3.27\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}=\\dfrac{(2.0-1.0)(9.8)}{2.0+1.0}=3.27\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u5-q006",
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
            "href": "#/t/mech/mech-u5/5.3",
            "label": "5.3 转动动力学",
            "topicId": "mech-u5:5.3"
          }
        ]
      },
      {
        "id": "mech-u5-q007",
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
            "href": "#/t/mech/mech-u5/5.1",
            "label": "5.1 力矩与静力学",
            "topicId": "mech-u5:5.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u5-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-mech-u5-3",
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
        "id": "mech-u5-q008",
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
            "href": "#/t/mech/mech-u5/5.2",
            "label": "5.2 转动运动学",
            "topicId": "mech-u5:5.2"
          }
        ]
      },
      {
        "id": "mech-u5-q009",
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
            "href": "#/t/mech/mech-u5/5.3",
            "label": "5.3 转动动力学",
            "topicId": "mech-u5:5.3"
          }
        ],
        "answerLatex": "3.0\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{3.0-0}{1.0-0}=3.0\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u5-q010",
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
            "href": "#/t/mech/mech-u5/5.1",
            "label": "5.1 力矩与静力学",
            "topicId": "mech-u5:5.1"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u5-q011",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q012",
    "title": "5.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「转动运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ]
  },
  {
    "id": "mech-u5-q013",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q014",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q015",
    "title": "5.2 定量练习",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u5-q016",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q017",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q018",
    "title": "5.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「转动运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ]
  },
  {
    "id": "mech-u5-q019",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q020",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q021",
    "title": "5.2 定量练习",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u5-q022",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q023",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q024",
    "title": "5.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「转动运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ]
  },
  {
    "id": "mech-u5-q025",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q026",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q027",
    "title": "5.2 定量练习",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u5-q028",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q029",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q030",
    "title": "5.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「转动运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ]
  },
  {
    "id": "mech-u5-q031",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q032",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q033",
    "title": "5.2 定量练习",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u5-q034",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q035",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q036",
    "title": "5.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「转动运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ]
  },
  {
    "id": "mech-u5-q037",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  },
  {
    "id": "mech-u5-q038",
    "title": "5.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "力矩与静力学",
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
        "href": "#/t/mech/mech-u5/5.2",
        "label": "5.2 转动运动学",
        "topicId": "mech-u5:5.2"
      }
    ]
  },
  {
    "id": "mech-u5-q039",
    "title": "5.2 定量练习",
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
        "href": "#/t/mech/mech-u5/5.3",
        "label": "5.3 转动动力学",
        "topicId": "mech-u5:5.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u5-q040",
    "title": "5.1 力矩",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{力 }F=10\\,\\mathrm{N}\\text{ 垂直作用于距转轴 }r=0.50\\,\\mathrm{m}\\text{ 处，求力矩大小 }\\tau",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{N\\,m}",
    "solution": "由力矩定义得 τ=5.0 N·m。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u5/5.1",
        "label": "5.1 力矩与静力学",
        "topicId": "mech-u5:5.1"
      }
    ],
    "solutionLatex": "\\tau=rF=(0.50)(10)=5.0\\,\\mathrm{N\\,m}."
  }
];
