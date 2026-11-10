/** Practice bank for mech-u1 */
export const UNIT_REF = {
  "id": "mech-u1",
  "code": "1",
  "titleZh": "运动学",
  "titleEn": "Kinematics",
  "layer": "ap",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-u1-1": {
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
  "stim-mech-u1-2": {
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
  "stim-mech-u1-3": {
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
    "id": "mech-u1-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-mech-u1-1",
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
        "id": "mech-u1-q001",
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
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ]
      },
      {
        "id": "mech-u1-q002",
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
            "href": "#/t/mech/mech-u1/1.2",
            "label": "1.2 二维运动学",
            "topicId": "mech-u1:1.2"
          }
        ],
        "answerLatex": "3.04\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u1-q003",
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
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u1-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-mech-u1-2",
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
        "id": "mech-u1-q004",
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
            "href": "#/t/mech/mech-u1/1.2",
            "label": "1.2 二维运动学",
            "topicId": "mech-u1:1.2"
          }
        ]
      },
      {
        "id": "mech-u1-q005",
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
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ],
        "answerLatex": "3.27\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}=\\dfrac{(2.0-1.0)(9.8)}{2.0+1.0}=3.27\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u1-q006",
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
            "href": "#/t/mech/mech-u1/1.2",
            "label": "1.2 二维运动学",
            "topicId": "mech-u1:1.2"
          }
        ]
      },
      {
        "id": "mech-u1-q007",
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
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u1-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-mech-u1-3",
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
        "id": "mech-u1-q008",
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
            "href": "#/t/mech/mech-u1/1.2",
            "label": "1.2 二维运动学",
            "topicId": "mech-u1:1.2"
          }
        ]
      },
      {
        "id": "mech-u1-q009",
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
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ],
        "answerLatex": "3.0\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{3.0-0}{1.0-0}=3.0\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u1-q010",
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
            "href": "#/t/mech/mech-u1/1.2",
            "label": "1.2 二维运动学",
            "topicId": "mech-u1:1.2"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u1-q011",
    "title": "1.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "一维运动学",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q012",
    "title": "1.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二维运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q013",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q014",
    "title": "1.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "二维运动学",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q015",
    "title": "1.1 定量练习",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u1-q016",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q017",
    "title": "1.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "一维运动学",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q018",
    "title": "1.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二维运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q019",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q020",
    "title": "1.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "二维运动学",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q021",
    "title": "1.1 定量练习",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u1-q022",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q023",
    "title": "1.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "一维运动学",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q024",
    "title": "1.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二维运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q025",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q026",
    "title": "1.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "二维运动学",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q027",
    "title": "1.1 定量练习",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u1-q028",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q029",
    "title": "1.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "一维运动学",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q030",
    "title": "1.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二维运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q031",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q032",
    "title": "1.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "二维运动学",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q033",
    "title": "1.1 定量练习",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u1-q034",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q035",
    "title": "1.1 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "一维运动学",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q036",
    "title": "1.2 概念 MCQ",
    "type": "mcq",
    "difficulty": "中",
    "stem": "关于「二维运动学」，下列正确的是？",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q037",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
  {
    "id": "mech-u1-q038",
    "title": "1.2 水平面滑动（有摩擦）",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "二维运动学",
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
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q039",
    "title": "1.1 定量练习",
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
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u1-q040",
    "title": "1.1 匀加速直线运动",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ],
    "solutionLatex": "v=v_0+at=0+(2.0)(3.0)=6.0\\,\\mathrm{m\\,s^{-1}}."
  },
{
  "id": "mech-u1-q041",
  "title": "1.2 标量与矢量分类",
  "type": "mcq",
  "difficulty": "易",
  "calculator": false,
  "stem": "下列哪一组量全部是标量？",
  "choices": [
    {
      "text": "路程、速率、质量、时间",
      "correct": true
    },
    {
      "text": "位移、速度、加速度、力",
      "correct": false
    },
    {
      "text": "力、速度、时间、能量",
      "correct": false
    },
    {
      "text": "位置、速率、位移、质量",
      "correct": false
    }
  ],
  "solution": "标量只有大小；位移、速度、加速度与力都带方向。",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/mech/mech-u1/1.2",
      "label": "1.2 二维运动学",
      "topicId": "mech-u1:1.2"
    }
  ]
},
{
  "id": "mech-u1-q042",
  "title": "1.2 船与河流的合速度",
  "type": "frq",
  "difficulty": "中",
  "calculator": false,
  "check": "numeric",
  "stem": "小船在静水中速度 4.0 m/s，船头正对北岸；河水以 3.0 m/s 向东流。求船相对地面的速度大小（m/s）。",
  "expected": 5.0,
  "tol": 0.01,
  "answerLatex": "5.0\\,\\mathrm{m\\,s^{-1}}",
  "solution": "两速度垂直，合速度大小为 √(4.0²+3.0²)=5.0 m/s。",
  "solutionLatex": "v=\\sqrt{4.0^{2}+3.0^{2}}=5.0\\,\\mathrm{m\\,s^{-1}}",
  "sourceId": "original",
  "source": "Original AP-style item (this project)",
  "license": "Project",
  "sourceUrl": "",
  "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
  "topicLinks": [
    {
      "href": "#/t/mech/mech-u1/1.2",
      "label": "1.2 二维运动学",
      "topicId": "mech-u1:1.2"
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
  "id": "mech-u1-q043",
  "title": "1.1 非匀加速的积分还原",
  "stem": "小车从静止出发，加速度 a(t)=(3.0 m/s³)t，0≤t≤2.0 s。求 t=2.0 s 时的速度（m/s）。",
  "expected": 6.0,
  "tol": 0.01,
  "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
  "solution": "v(t)=∫a dt=1.5t²；t=2.0 s 时 v=6.0 m/s。",
  "solutionLatex": "v=\\int_0^{2.0}(3.0t)\\,\\mathrm{d}t=1.5(2.0)^{2}=6.0\\,\\mathrm{m\\,s^{-1}}",
  "topicLinks": [
    {
      "href": "#/t/mech/mech-u1/1.1",
      "label": "1.1 一维运动学",
      "topicId": "mech-u1:1.1"
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
  "id": "mech-u1-q044",
  "title": "1.2 三维运动的投影距离",
  "stem": "无人机初速度 v₀=(1.0, 2.0, −1.0) m/s，恒定加速度 a=(0.50, −0.25, 0.75) m/s²。求 t=4.0 s 时到原点的距离（m）。",
  "expected": 10.2,
  "tol": 0.02,
  "answerLatex": "10.2\\,\\mathrm{m}",
  "solution": "r=(8.0, 6.0, 2.0) m；|r|=√(8²+6²+2²)=10.2 m。",
  "solutionLatex": "\\vec r=\\vec v_0t+\\dfrac12\\vec at^{2}=(8.0,6.0,2.0)\\,\\mathrm{m},\\quad |\\vec r|=10.2\\,\\mathrm{m}",
  "topicLinks": [
    {
      "href": "#/t/mech/mech-u1/1.2",
      "label": "1.2 二维运动学",
      "topicId": "mech-u1:1.2"
    }
  ]
}
];
