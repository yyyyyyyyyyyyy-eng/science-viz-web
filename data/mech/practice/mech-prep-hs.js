/** Practice bank for mech-prep-hs */
export const UNIT_REF = {
  "id": "mech-prep-hs",
  "code": "P1",
  "titleZh": "高中物理",
  "titleEn": "High School Physics",
  "layer": "prep",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-prep-hs-1": {
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "text": "水平面上一物块受水平拉力 F，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
  "stim-mech-prep-hs-2": {
    "title": "阿特伍德机 · Atwood machine",
    "text": "m₁ 与 m₂ 由轻绳跨过理想定滑轮连接，且 m₁ > m₂。求系统加速度大小。 · Two masses hang from a light string over an ideal pulley.",
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
  "stim-mech-prep-hs-3": {
    "title": "v–t 图像 · Velocity–time graph",
    "text": "图为某物体的速度–时间图像。求 0–1 s 内的加速度。 · The graph is velocity versus time.",
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
    "id": "mech-prep-hs-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-mech-prep-hs-1",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力 F，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "id": "mech-prep-hs-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "水平方向的牛顿第二定律 · Newton’s second law horizontally",
        "type": "frq",
        "stem": "对图中物块，沿运动方向写出牛顿第二定律，并把动摩擦写成 μ_k N。水平面无竖直加速度，N = mg。 · For the block in the figure, write Newton’s second law along the motion and write kinetic friction as μ_k N. There is no vertical acceleration, so N = mg.",
        "answerLatex": "F-\\mu_k mg=ma",
        "solution": "动摩擦与拉力反向，支持力等于重力。 · Kinetic friction opposes the pull, and the normal force equals the weight.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.5",
            "label": "P1.5 应用力与摩擦",
            "topicId": "mech-prep-hs:P1.5"
          }
        ]
      },
      {
        "id": "mech-prep-hs-q002",
        "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求物块加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "expected": 3.04,
        "tol": 0.01,
        "solution": "取 g=9.8 m/s²，代入得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.5",
            "label": "P1.5 应用力与摩擦",
            "topicId": "mech-prep-hs:P1.5"
          }
        ],
        "answerLatex": "3.04\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-prep-hs-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "水平合力 · Horizontal net force",
        "type": "mcq",
        "stem": "图中物块在水平面上运动。水平方向的合力是哪一项？支持力与重力等大。 · The block in the figure moves on a horizontal surface. Which expression is the horizontal net force? The normal force equals the weight.",
        "choices": [
          {
            "text": "F − μ_k mg · F − μ_k mg",
            "correct": true
          },
          {
            "text": "F + μ_k mg · F + μ_k mg",
            "correct": false
          },
          {
            "text": "mg − N · mg − N",
            "correct": false
          },
          {
            "text": "只有 μ_k mg，拉力不算合力 · μ_k mg alone; the pull is not part of the net force",
            "correct": false
          }
        ],
        "solution": "N = mg，动摩擦 μ_k N 与拉力反向，所以合力是 F − μ_k mg。 · N = mg, and kinetic friction μ_k N opposes the pull, so the net force is F − μ_k mg.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.5",
            "label": "P1.5 应用力与摩擦",
            "topicId": "mech-prep-hs:P1.5"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-prep-hs-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-mech-prep-hs-2",
    "stimulus": {
      "title": "阿特伍德机 · Atwood machine",
      "text": "m₁ 与 m₂ 由轻绳跨过理想定滑轮连接，且 m₁ > m₂。求系统加速度大小。 · Two masses hang from a light string over an ideal pulley.",
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
        "id": "mech-prep-hs-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "系统的牛顿第二定律 · Newton’s second law for the system",
        "type": "frq",
        "stem": "把两物块和轻绳当作系统，写出加速度大小的符号式。设 m₁ > m₂，m₁ 下降。 · Treat the two masses and the light string as a system and write the magnitude of the acceleration. Take m₁ > m₂, with m₁ descending.",
        "answerLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}",
        "solution": "绳中张力是内力。合外力是两重力之差。 · The string tension is internal. The net external force along the motion is the difference of the weights.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.4",
            "label": "P1.4 牛顿定律",
            "topicId": "mech-prep-hs:P1.4"
          }
        ]
      },
      {
        "id": "mech-prep-hs-q005",
        "title": "滑轮系统的加速度 · Atwood acceleration",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求两物块加速度大小 a（m/s²）。 · The system acceleration follows from Newton’s second law on both masses.",
        "expected": 3.27,
        "tol": 0.01,
        "solution": "系统整体受力 (m₁−m₂)g，总质量 m₁+m₂。 · The system acceleration follows from Newton’s second law on both masses.",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.4",
            "label": "P1.4 牛顿定律",
            "topicId": "mech-prep-hs:P1.4"
          }
        ],
        "answerLatex": "3.27\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}=\\dfrac{(2.0-1.0)(9.8)}{2.0+1.0}=3.27\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-prep-hs-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "系统加速度 · System acceleration",
        "type": "mcq",
        "stem": "理想滑轮、轻绳，且 m₁ > m₂。系统加速度的大小是哪一项？ · The pulley is ideal, the string is light, and m₁ > m₂. Which expression is the magnitude of the system acceleration?",
        "choices": [
          {
            "text": "(m₁ − m₂)g / (m₁ + m₂) · (m₁ − m₂)g / (m₁ + m₂)",
            "correct": true
          },
          {
            "text": "(m₁ + m₂)g / (m₁ − m₂) · (m₁ + m₂)g / (m₁ − m₂)",
            "correct": false
          },
          {
            "text": "g · g",
            "correct": false
          },
          {
            "text": "m₁ g / m₂ · m₁ g / m₂",
            "correct": false
          }
        ],
        "solution": "合外力 (m₁ − m₂)g 加速总质量 m₁ + m₂。 · The net external force (m₁ − m₂)g accelerates the total mass m₁ + m₂.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.4",
            "label": "P1.4 牛顿定律",
            "topicId": "mech-prep-hs:P1.4"
          }
        ]
      },
      {
        "id": "mech-prep-hs-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "质量同时加倍 · Both masses double",
        "type": "frq",
        "stem": "若 m₁ 与 m₂ 同时加倍，g 不变，加速度大小如何变化？说明理由。 · If m₁ and m₂ both double and g is unchanged, what happens to the acceleration? Explain.",
        "answerLatex": "a'=a",
        "solution": "a = (m₁ − m₂)g / (m₁ + m₂)。分子和分母同时加倍，a 不变。 · a = (m₁ − m₂)g / (m₁ + m₂). The numerator and the denominator both double, so a is unchanged.",
        "solutionLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.4",
            "label": "P1.4 牛顿定律",
            "topicId": "mech-prep-hs:P1.4"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-prep-hs-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-mech-prep-hs-3",
    "stimulus": {
      "title": "v–t 图像 · Velocity–time graph",
      "text": "图为某物体的速度–时间图像。求 0–1 s 内的加速度。 · The graph is velocity versus time.",
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
        "id": "mech-prep-hs-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "斜率就是加速度 · The slope is the acceleration",
        "type": "frq",
        "stem": "写出用速度变化和时间间隔表示加速度的符号式，并说明它是 v–t 图的斜率。 · Write acceleration in terms of the velocity change and the time interval, and state that it is the slope of the v–t graph.",
        "answerLatex": "a=\\dfrac{\\Delta v}{\\Delta t}",
        "solution": "0–1 s 内速度从 0 增到 3 m/s。 · From 0 to 1 s the velocity rises from 0 to 3 m/s.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.2",
            "label": "P1.2 一维运动学",
            "topicId": "mech-prep-hs:P1.2"
          }
        ]
      },
      {
        "id": "mech-prep-hs-q009",
        "title": "v–t 图像的斜率 · Slope of a v–t graph",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求 0–1 s 内的加速度 a（m/s²）。 · Acceleration is the slope of the velocity–time graph.",
        "expected": 3,
        "tol": 0.01,
        "solution": "v–t 图斜率即加速度。 · Acceleration is the slope of the velocity–time graph.",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.2",
            "label": "P1.2 一维运动学",
            "topicId": "mech-prep-hs:P1.2"
          }
        ],
        "answerLatex": "3.0\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{3.0-0}{1.0-0}=3.0\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-prep-hs-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "0–1 s 的加速度 · Acceleration during 0–1 s",
        "type": "mcq",
        "stem": "折点为 (0,0)、(1,3)、(2,3)、(4,−1)。0–1 s 的加速度是哪一项？ · The corners are (0,0), (1,3), (2,3), and (4,−1). Which value is the acceleration during 0–1 s?",
        "choices": [
          {
            "text": "3 m/s² · 3 m/s²",
            "correct": true
          },
          {
            "text": "0 · 0",
            "correct": false
          },
          {
            "text": "−2 m/s² · −2 m/s²",
            "correct": false
          },
          {
            "text": "1 m/s² · 1 m/s²",
            "correct": false
          }
        ],
        "solution": "斜率 (3 − 0)/(1 − 0) = 3 m/s²。1–2 s 的斜率为 0，2–4 s 的斜率为 −2 m/s²。 · The slope is (3 − 0)/(1 − 0) = 3 m/s². From 1 to 2 s the slope is 0, and from 2 to 4 s it is −2 m/s².",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-prep-hs/P1.2",
            "label": "P1.2 一维运动学",
            "topicId": "mech-prep-hs:P1.2"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-prep-hs-q011",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "位移与路程 · Displacement and distance",
    "type": "mcq",
    "stem": "质点沿直线先向东 4 m，再向西 4 m。哪项正确？ · A particle moves 4 m east and then 4 m west along a line. Which statement is correct?",
    "choices": [
      {
        "text": "位移为零，路程为 8 m · The displacement is zero and the distance traveled is 8 m",
        "correct": true
      },
      {
        "text": "位移和路程都是 8 m · Displacement and distance are both 8 m",
        "correct": false
      },
      {
        "text": "平均速度等于路程除以时间 · Average velocity equals distance divided by time",
        "correct": false
      },
      {
        "text": "加速度是标量 · Acceleration is a scalar",
        "correct": false
      }
    ],
    "solution": "位移是矢量，往返后为零；路程是标量，为 8 m。 · Displacement is a vector and is zero after the round trip. Distance traveled is the scalar 8 m.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.2",
        "label": "P1.2 一维运动学",
        "topicId": "mech-prep-hs:P1.2"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q013",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q014",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q015",
    "title": "无摩擦加速度 · Acceleration without friction",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。 · Without friction, a = F/m.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.4",
        "label": "P1.4 牛顿定律",
        "topicId": "mech-prep-hs:P1.4"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-hs-q016",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q017",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "动能定理 · Work–energy theorem",
    "type": "mcq",
    "stem": "几个力同时作用在一个质点上。哪项正确？ · Several forces act on one particle at the same time. Which statement is correct?",
    "choices": [
      {
        "text": "合力的功等于动能的变化 · The net work equals the change in kinetic energy",
        "correct": true
      },
      {
        "text": "合力的功等于势能的变化 · The net work equals the change in potential energy",
        "correct": false
      },
      {
        "text": "摩擦力永远不做功 · Friction never does work",
        "correct": false
      },
      {
        "text": "功是矢量，方向与位移相同 · Work is a vector in the direction of the displacement",
        "correct": false
      }
    ],
    "solution": "合力做的功等于动能变化。单个力的功可以改变势能或变成热。 · The work of the net force equals the change in kinetic energy. The work of one force need not.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q019",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q020",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q021",
    "title": "无摩擦加速度 · Acceleration without friction",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。 · Without friction, a = F/m.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.4",
        "label": "P1.4 牛顿定律",
        "topicId": "mech-prep-hs:P1.4"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-hs-q022",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q023",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "库仑力 · Coulomb's force",
    "type": "mcq",
    "stem": "两个点电荷相距 r。哪项正确？ · Two point charges are a distance r apart. Which statement is correct?",
    "choices": [
      {
        "text": "同种电荷相斥，力的大小与距离平方成反比 · Like charges repel, and the force magnitude is inverse-square",
        "correct": true
      },
      {
        "text": "库仑力与距离成正比 · The Coulomb force is proportional to distance",
        "correct": false
      },
      {
        "text": "电荷可以取任意实数，没有最小单位 · Charge may be any real number; there is no smallest unit",
        "correct": false
      },
      {
        "text": "两个电子之间的引力大于电力 · The gravitational force between two electrons is larger than the electric force",
        "correct": false
      }
    ],
    "solution": "同号相斥，库仑力大小与 r² 成反比，并且沿连线。 · Like charges repel. The magnitude is inverse-square and the force is along the line joining the charges.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.14",
        "label": "P1.14 静电入门",
        "topicId": "mech-prep-hs:P1.14"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q025",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q026",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q027",
    "title": "无摩擦加速度 · Acceleration without friction",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。 · Without friction, a = F/m.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.4",
        "label": "P1.4 牛顿定律",
        "topicId": "mech-prep-hs:P1.4"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-hs-q028",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q029",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "合力为零 · Zero net force",
    "type": "mcq",
    "stem": "电梯以恒定速度上升。对电梯里的乘客，哪项正确？ · An elevator rises at constant velocity. For a passenger in the elevator, which statement is correct?",
    "choices": [
      {
        "text": "合力为零，乘客可以匀速运动 · The net force is zero, and the passenger can move at constant velocity",
        "correct": true
      },
      {
        "text": "合力为零意味着乘客相对地面静止 · Zero net force means the passenger is at rest relative to the ground",
        "correct": false
      },
      {
        "text": "加速度与速度成正比 · Acceleration is proportional to velocity",
        "correct": false
      },
      {
        "text": "第三定律的一对力会在乘客身上抵消 · A third-law pair cancels on the passenger",
        "correct": false
      }
    ],
    "solution": "加速度为零，合力为零，但速度不必为零。支持力与重力等大反向，它们不是作用在同一对物体上的第三定律配对。 · The acceleration is zero, so the net force is zero, but the velocity need not be. The normal force balances the weight.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.4",
        "label": "P1.4 牛顿定律",
        "topicId": "mech-prep-hs:P1.4"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q031",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q032",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q033",
    "title": "无摩擦加速度 · Acceleration without friction",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。 · Without friction, a = F/m.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.4",
        "label": "P1.4 牛顿定律",
        "topicId": "mech-prep-hs:P1.4"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-hs-q034",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q035",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "冲量 · Impulse",
    "type": "mcq",
    "stem": "球撞墙后原速弹回。哪项正确？ · A ball hits a wall and rebounds at its incoming speed. Which statement is correct?",
    "choices": [
      {
        "text": "墙对球的冲量等于球的动量变化，大小为 2mv · The impulse from the wall equals the ball’s change in momentum, with magnitude 2mv",
        "correct": true
      },
      {
        "text": "速率不变，所以冲量为零 · The speed is unchanged, so the impulse is zero",
        "correct": false
      },
      {
        "text": "冲量等于动能的变化 · Impulse equals the change in kinetic energy",
        "correct": false
      },
      {
        "text": "同样的动量变化，碰撞时间越长平均力越大 · For the same change in momentum, a longer collision means a larger average force",
        "correct": false
      }
    ],
    "solution": "冲量等于动量变化。速度反向时 Δp 的大小是 2mv，不是零。 · Impulse equals the change in momentum. When the velocity reverses, the magnitude of Δp is 2mv, not zero.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.10",
        "label": "P1.10 动量与碰撞",
        "topicId": "mech-prep-hs:P1.10"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q037",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-hs-q038",
    "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。 · A block is pulled on a horizontal surface with kinetic friction.",
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
        "stem": "沿水平方向写出牛顿第二定律。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "answerLatex": "F-f_k=ma,\\quad f_k=\\mu_k mg",
        "solution": "N=mg，动摩擦（kinetic friction）与运动反向。 · The horizontal net force is the pull minus kinetic friction."
      },
      {
        "stem": "求加速度 a（m/s²）。 · The horizontal net force is the pull minus kinetic friction.",
        "type": "frq",
        "check": "numeric",
        "expected": 3.04,
        "tol": 0.02,
        "answerLatex": "3.04",
        "solution": "代入数据得 a≈3.04 m/s²。 · The horizontal net force is the pull minus kinetic friction.",
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
        "href": "#/t/mech/mech-prep-hs/P1.5",
        "label": "P1.5 应用力与摩擦",
        "topicId": "mech-prep-hs:P1.5"
      }
    ]
  },
  {
    "id": "mech-prep-hs-q039",
    "title": "无摩擦加速度 · Acceleration without friction",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{ 的物体受恒力 }F=10\\mathrm{N}\\text{，忽略摩擦，求加速度 }a",
    "expected": 5,
    "tol": 0.01,
    "answerLatex": "5.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "代入数据得 a=5.0 m/s²。 · Without friction, a = F/m.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.4",
        "label": "P1.4 牛顿定律",
        "topicId": "mech-prep-hs:P1.4"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-hs-q040",
    "title": "动能 · Kinetic energy",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{质量 }m=2.0\\mathrm{kg}\\text{，速率 }v=4.0\\mathrm{m/s}\\text{，求动能 }K=\\dfrac{1}{2}mv^{2}",
    "expected": 16,
    "tol": 0.01,
    "answerLatex": "16\\,\\mathrm{J}",
    "solution": "代入数据得 K=16 J。 · Kinetic energy is one-half m v squared.",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-hs/P1.8",
        "label": "P1.8 功与动能",
        "topicId": "mech-prep-hs:P1.8"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  }
];
