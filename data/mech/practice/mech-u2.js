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
  "stim-mech-u2-2": {
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
  "stim-mech-u2-3": {
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
    "id": "mech-u2-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-mech-u2-1",
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
            "href": "#/t/mech/mech-u2/2.2",
            "label": "2.2 系统",
            "topicId": "mech-u2:2.2"
          }
        ],
        "answerLatex": "3.04\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
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
            "href": "#/t/mech/mech-u2/2.5",
            "label": "2.5 牛顿第三定律",
            "topicId": "mech-u2:2.5"
          }
        ],
        "answerLatex": "3.27\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}=\\dfrac{(2.0-1.0)(9.8)}{2.0+1.0}=3.27\\,\\mathrm{m\\,s^{-2}}."
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
        "answer": "a=F/m：m 不变时 F 加倍，a 加倍；F 不变时 m 加倍，a 减半。",
        "solution": "牛顿第二定律的比例关系。",
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
        "id": "mech-u2-q008",
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
            "href": "#/t/mech/mech-u2/2.2",
            "label": "2.2 系统",
            "topicId": "mech-u2:2.2"
          }
        ]
      },
      {
        "id": "mech-u2-q009",
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
            "href": "#/t/mech/mech-u2/2.3",
            "label": "2.3 牛顿第一与第二定律",
            "topicId": "mech-u2:2.3"
          }
        ],
        "answerLatex": "3.0\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{3.0-0}{1.0-0}=3.0\\,\\mathrm{m\\,s^{-2}}."
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
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "solution": "代入数据得 a=5.0 m/s²。",
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
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q016",
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "solution": "代入数据得 a=5.0 m/s²。",
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
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q022",
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "solution": "代入数据得 a=5.0 m/s²。",
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
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q028",
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "solution": "代入数据得 a=5.0 m/s²。",
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
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q034",
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "solution": "代入数据得 a=5.0 m/s²。",
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
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q040",
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "solution": "代入数据得 a=5.0 m/s²。",
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
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q046",
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
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
    "solution": "代入数据得 a=5.0 m/s²。",
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
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q052",
    "title": "2.4 圆周运动向心加速度",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。",
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
    ],
    "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\dfrac{(4.0)^{2}}{2.0}=8.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q060",
    "title": "2.7 阻力模型的选择 · 2.7 Choosing a drag model",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于线性阻力与二次阻力，下列哪一项正确？ · Which statement about linear and quadratic drag is correct?",
    "choices": [
      {
        "text": "线性阻力 F_r = −bv 与速度成正比，常用于低速或黏性阻力；二次阻力 F_r = −c|v|v 与速度平方成正比，常用于较高速度。 · Linear drag F_r = −bv is proportional to speed and is common at low speed or for viscous drag; quadratic drag F_r = −c|v|v is proportional to speed squared and is common at higher speed.",
        "correct": true
      },
      {
        "text": "二次阻力 F_r = −cv² 总是沿坐标轴负方向，与速度方向无关。 · Quadratic drag F_r = −cv² always points along the negative axis, independent of velocity.",
        "correct": false
      },
      {
        "text": "终端速度与物体被抛出时的初速度成正比。 · Terminal speed is proportional to the launch speed.",
        "correct": false
      },
      {
        "text": "有阻力时仍可用 v = at，因为加速度是常数。 · With drag, v = at still applies because acceleration is constant.",
        "correct": false
      }
    ],
    "solution": "线性模型写作 F_r = −bv，二次模型写作 F_r = −c|v|v，后者的符号必须随速度反向。终端速度由 m、g 和阻力系数决定，与抛出速度无关；有阻力时加速度不是常数。 · The linear model is F_r = −bv and the quadratic model is F_r = −c|v|v, whose sign must follow the velocity. Terminal speed depends on m, g, and the drag coefficient, not launch speed; with drag, acceleration is not constant.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.7",
        "label": "2.7 阻力与终端速度",
        "topicId": "mech-u2:2.7"
      }
    ]
  },
  {
    "id": "mech-u2-q061",
    "title": "2.7 线性阻力的终端速度 · 2.7 Terminal speed with linear drag",
    "type": "frq",
    "difficulty": "易",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "m=0.20\\,\\mathrm{kg},\\quad b=0.50\\,\\mathrm{kg\\,s^{-1}},\\quad g=9.8\\,\\mathrm{m\\,s^{-2}}",
    "stem": "雨滴在空气中下落，按线性阻力模型计算终端速度。 · A raindrop falls in air. Find its terminal speed in the linear-drag model.",
    "expected": 3.92,
    "tol": 0.02,
    "answerLatex": "3.92\\,\\mathrm{m\\,s^{-1}}",
    "solution": "终端时合力为零，mg = bv_t，所以 v_t ≈ 3.9 m/s。 · At terminal speed the net force is zero, mg = bv_t, so v_t ≈ 3.9 m/s.",
    "solutionLatex": "v_t=\\dfrac{mg}{b}=\\dfrac{(0.20)(9.8)}{0.50}=3.92\\,\\mathrm{m\\,s^{-1}}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.7",
        "label": "2.7 阻力与终端速度",
        "topicId": "mech-u2:2.7"
      }
    ]
  },
  {
    "id": "mech-u2-q062",
    "title": "2.7 线性阻力的 v(t) · 2.7 v(t) with linear drag",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "v_t=3.92\\,\\mathrm{m\\,s^{-1}},\\quad \\tau=0.40\\,\\mathrm{s},\\quad t=0.80\\,\\mathrm{s}",
    "stem": "雨滴从静止释放，速度按线性阻力模型增长。求 t = 0.80 s 时的速度。 · The raindrop is released from rest and speeds up with linear drag. Find its speed at t = 0.80 s.",
    "expected": 3.39,
    "tol": 0.02,
    "answerLatex": "3.39\\,\\mathrm{m\\,s^{-1}}",
    "solution": "用 v(t) = v_t[1 − e^(−t/τ)]，代入 t/τ = 2.0，得 v ≈ 3.39 m/s。 · Use v(t) = v_t[1 − e^(−t/τ)]. With t/τ = 2.0, v ≈ 3.39 m/s.",
    "solutionLatex": "v(t)=v_t\\left(1-e^{-t/\\tau}\\right)=3.92\\left(1-e^{-2.0}\\right)=3.39\\,\\mathrm{m\\,s^{-1}}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.7",
        "label": "2.7 阻力与终端速度",
        "topicId": "mech-u2:2.7"
      }
    ]
  },
  {
    "id": "mech-u2-q063",
    "title": "2.7 二次阻力的终端速度（符号） · 2.7 Terminal speed for quadratic drag (symbolic)",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "symbolic",
    "stem": "二次阻力下，质量 m、重力加速度 g、阻力系数 c 已知。写出终端速度 v_t 的表达式。 · For quadratic drag with mass m, gravitational acceleration g, and drag coefficient c, write the expression for terminal speed v_t.",
    "expected": "sqrt(m*g/c)",
    "answerLatex": "v_t=\\sqrt{\\dfrac{mg}{c}}",
    "solution": "令合力为零：mg = cv_t²，所以 v_t 等于 mg 除以 c 后的平方根。 · Set the net force to zero: mg = cv_t², so v_t is the square root of mg divided by c.",
    "solutionLatex": "mg=cv_t^{2}\\quad\\Rightarrow\\quad v_t=\\sqrt{\\dfrac{mg}{c}}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.7",
        "label": "2.7 阻力与终端速度",
        "topicId": "mech-u2:2.7"
      }
    ]
  },
  {
    "id": "mech-u2-q064",
    "title": "2.8 串联弹簧的等效劲度 · 2.8 Equivalent constant in series",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "k_1=200\\,\\mathrm{N\\,m^{-1}},\\quad k_2=300\\,\\mathrm{N\\,m^{-1}}",
    "stem": "两个理想弹簧串联。求等效劲度系数。 · Two ideal springs are connected in series. Find the equivalent spring constant.",
    "expected": 120,
    "tol": 0.01,
    "answerLatex": "120\\,\\mathrm{N\\,m^{-1}}",
    "solution": "串联时等效劲度的倒数等于各倒数之和，得 120 N/m。 · For series springs, the reciprocal of the equivalent constant is the sum of reciprocals, giving 120 N/m.",
    "solutionLatex": "\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{200}+\\dfrac{1}{300}\\quad\\Rightarrow\\quad k_{\\mathrm{eq}}=120\\,\\mathrm{N\\,m^{-1}}",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.8",
        "label": "2.8 弹簧力与非理想弹簧",
        "topicId": "mech-u2:2.8"
      }
    ]
  },
  {
    "id": "mech-u2-q065",
    "title": "2.8 非理想弹簧的判断 · 2.8 Identifying a nonideal spring",
    "type": "mcq",
    "difficulty": "中",
    "stem": "某弹簧的 F–x 图像是一条不经过原点的曲线。下列判断哪一项正确？ · The F–x graph of a spring is a curve that does not pass through the origin. Which conclusion is correct?",
    "choices": [
      {
        "text": "它可能是非理想弹簧，不能再无条件使用 F = −kx 与 U = ½kx²。 · It may be a nonideal spring, and F = −kx and U = ½kx² can no longer be used unconditionally.",
        "correct": true
      },
      {
        "text": "只要曲线连续，就仍然是理想弹簧。 · As long as the curve is continuous, it is still an ideal spring.",
        "correct": false
      },
      {
        "text": "弹簧力一定与速度反向。 · The spring force must oppose velocity.",
        "correct": false
      },
      {
        "text": "非理想弹簧一定没有平衡位置。 · A nonideal spring has no equilibrium position.",
        "correct": false
      }
    ],
    "solution": "非理想弹簧的力不与形变成正比，或质量不可忽略；胡克定律与 ½kx² 只对理想弹簧成立。弹簧力指向平衡位置，而不是总与速度反向。 · A nonideal spring has a force not proportional to deformation or nonnegligible mass; Hooke's law and ½kx² apply only to an ideal spring. The spring force points toward equilibrium, not necessarily opposite velocity.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.8",
        "label": "2.8 弹簧力与非理想弹簧",
        "topicId": "mech-u2:2.8"
      }
    ]
  },
  {
    "id": "mech-u2-q066",
    "title": "2.8 并联弹簧的等效劲度（符号） · 2.8 Equivalent constant in parallel (symbolic)",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "symbolic",
    "stem": "两个理想弹簧并联，劲度分别为 k1 与 k2。写出等效劲度系数的表达式。 · Two ideal springs with constants k1 and k2 are connected in parallel. Write the expression for the equivalent spring constant.",
    "expected": "k1+k2",
    "answerLatex": "k_{\\mathrm{eq}}=k_1+k_2",
    "solution": "并联时两弹簧形变相同，力相加，所以等效劲度等于两者之和。 · In parallel the springs share the same deformation and their forces add, so the equivalent constant is the sum.",
    "solutionLatex": "k_{\\mathrm{eq}}=k_1+k_2",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.8",
        "label": "2.8 弹簧力与非理想弹簧",
        "topicId": "mech-u2:2.8"
      }
    ]
  },
{
  "id": "mech-u2-q067",
  "title": "2.6 电梯视重",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "质量 60 kg 的人站在电梯内的秤上，电梯以 2.0 m/s² 加速上升。取 g=9.8 m/s²，求秤的读数（N）。",
  "expected": 708,
  "tol": 0.01,
  "answerLatex": "7.08\\times10^{2}\\,\\mathrm{N}",
  "solution": "N−mg=ma，故 N=m(g+a)=60(9.8+2.0)=708 N。",
  "solutionLatex": "N=m(g+a)=60(9.8+2.0)=7.08\\times10^{2}\\,\\mathrm{N}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/mech/mech-u2/2.6",
      "label": "2.6 万有引力",
      "topicId": "mech-u2:2.6"
    }
  ]
},
{
  "id": "mech-u2-q068",
  "title": "2.6 均匀球内部的重力加速度",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "地球质量 M=5.97×10²⁴ kg、半径 R=6.37×10⁶ m，假设密度均匀。求距地心 r=R/2 处的重力加速度（m/s²）。",
  "expected": 4.9,
  "tol": 0.01,
  "answerLatex": "4.9\\,\\mathrm{m\\,s^{-2}}",
  "solution": "内部 g(r)=GMr/R³；在 r=R/2 处 g=g_surface/2=4.9 m/s²。",
  "solutionLatex": "g(r)=\\dfrac{GM}{R^{3}}r=\\dfrac{g_{\\mathrm{surface}}}{2}=4.9\\,\\mathrm{m\\,s^{-2}}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/mech/mech-u2/2.6",
      "label": "2.6 万有引力",
      "topicId": "mech-u2:2.6"
    }
  ]
}
];
