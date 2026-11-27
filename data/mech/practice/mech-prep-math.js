/** Practice bank for mech-prep-math */
export const UNIT_REF = {
  "id": "mech-prep-math",
  "code": "P3",
  "titleZh": "物理用数学",
  "titleEn": "Math for Physics",
  "layer": "prep",
  "subject": "mech"
};
export const stimuli = {
  "stim-mech-prep-math-1": {
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
  "stim-mech-prep-math-2": {
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
  "stim-mech-prep-math-3": {
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
    "id": "mech-prep-math-set1",
    "title": "题组 1 · 共享刺激",
    "sharedStimulus": "stim-mech-prep-math-1",
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
        "id": "mech-prep-math-q001",
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
            "href": "#/t/mech/mech-prep-math/P3.1",
            "label": "P3.1 矢量分解与点积",
            "topicId": "mech-prep-math:P3.1"
          }
        ]
      },
      {
        "id": "mech-prep-math-q002",
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
            "href": "#/t/mech/mech-prep-math/P3.1",
            "label": "P3.1 矢量分解与点积",
            "topicId": "mech-prep-math:P3.1"
          }
        ],
        "answerLatex": "3.04\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-prep-math-q003",
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
            "href": "#/t/mech/mech-prep-math/P3.1",
            "label": "P3.1 矢量分解与点积",
            "topicId": "mech-prep-math:P3.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-prep-math-set2",
    "title": "题组 2 · 共享刺激",
    "sharedStimulus": "stim-mech-prep-math-2",
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
        "id": "mech-prep-math-q004",
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
            "href": "#/t/mech/mech-prep-math/P3.1",
            "label": "P3.1 矢量分解与点积",
            "topicId": "mech-prep-math:P3.1"
          }
        ]
      },
      {
        "id": "mech-prep-math-q005",
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
            "href": "#/t/mech/mech-prep-math/P3.1",
            "label": "P3.1 矢量分解与点积",
            "topicId": "mech-prep-math:P3.1"
          }
        ],
        "answerLatex": "3.27\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{(m_1-m_2)g}{m_1+m_2}=\\dfrac{(2.0-1.0)(9.8)}{2.0+1.0}=3.27\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-prep-math-q006",
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
            "href": "#/t/mech/mech-prep-math/P3.1",
            "label": "P3.1 矢量分解与点积",
            "topicId": "mech-prep-math:P3.1"
          }
        ]
      },
      {
        "id": "mech-prep-math-q007",
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
            "href": "#/t/mech/mech-prep-math/P3.1",
            "label": "P3.1 矢量分解与点积",
            "topicId": "mech-prep-math:P3.1"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-prep-math-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-mech-prep-math-3",
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
        "id": "mech-prep-math-q008",
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
            "href": "#/t/mech/mech-prep-math/P3.2",
            "label": "P3.2 导数作为变化率",
            "topicId": "mech-prep-math:P3.2"
          }
        ]
      },
      {
        "id": "mech-prep-math-q009",
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
            "href": "#/t/mech/mech-prep-math/P3.2",
            "label": "P3.2 导数作为变化率",
            "topicId": "mech-prep-math:P3.2"
          }
        ],
        "answerLatex": "3.0\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{\\Delta v}{\\Delta t}=\\dfrac{3.0-0}{1.0-0}=3.0\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-prep-math-q010",
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
            "href": "#/t/mech/mech-prep-math/P3.2",
            "label": "P3.2 导数作为变化率",
            "topicId": "mech-prep-math:P3.2"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-prep-math-q011",
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
        "href": "#/t/mech/mech-prep-math/P3.1",
        "label": "P3.1 矢量分解与点积",
        "topicId": "mech-prep-math:P3.1"
      }
    ]
  },
  {
    "id": "mech-prep-math-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "瞬时变化率 · Instantaneous rate of change",
    "type": "mcq",
    "stem": "位置 x(t) 的图像在 t0 处有水平切线。哪项正确？ · A position graph x(t) has a horizontal tangent at t0. Which statement is correct?",
    "choices": [
      {
        "text": "x′(t0) = 0，这是瞬时速度而不是平均速度 · x′(t0) = 0, which is an instantaneous velocity, not an average velocity",
        "correct": true
      },
      {
        "text": "导数总是某一有限区间上的平均变化率 · A derivative is always an average rate over a finite interval",
        "correct": false
      },
      {
        "text": "水平切线表示 x(t) 在该点无定义 · A horizontal tangent means x(t) is undefined there",
        "correct": false
      },
      {
        "text": "位置的导数是加速度 · The derivative of position is acceleration",
        "correct": false
      }
    ],
    "solution": "导数是差商的极限。水平切线表示瞬时速度为零，不是函数无定义。 · The derivative is the limit of the difference quotient. A horizontal tangent means the instantaneous velocity is zero, not that the function is undefined.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-math/P3.2",
        "label": "P3.2 导数作为变化率",
        "topicId": "mech-prep-math:P3.2"
      }
    ]
  },
  {
    "id": "mech-prep-math-q013",
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
        "href": "#/t/mech/mech-prep-math/P3.3",
        "label": "P3.3 积分作为累积",
        "topicId": "mech-prep-math:P3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-math-q014",
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
        "href": "#/t/mech/mech-prep-math/P3.1",
        "label": "P3.1 矢量分解与点积",
        "topicId": "mech-prep-math:P3.1"
      }
    ]
  },
  {
    "id": "mech-prep-math-q015",
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
        "href": "#/t/mech/mech-prep-math/P3.2",
        "label": "P3.2 导数作为变化率",
        "topicId": "mech-prep-math:P3.2"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-math-q016",
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
        "href": "#/t/mech/mech-prep-math/P3.3",
        "label": "P3.3 积分作为累积",
        "topicId": "mech-prep-math:P3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-math-q017",
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
        "href": "#/t/mech/mech-prep-math/P3.1",
        "label": "P3.1 矢量分解与点积",
        "topicId": "mech-prep-math:P3.1"
      }
    ]
  },
  {
    "id": "mech-prep-math-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "速度的积分 · Integral of velocity",
    "type": "mcq",
    "stem": "速度 v(t) 在一段时间内有正有负。哪项正确？ · Velocity v(t) is positive in part of an interval and negative in the rest. Which statement is correct?",
    "choices": [
      {
        "text": "速度对时间的定积分是位移，不是路程 · The definite integral of velocity is displacement, not distance traveled",
        "correct": true
      },
      {
        "text": "速度的积分是加速度 · The integral of velocity is acceleration",
        "correct": false
      },
      {
        "text": "v–t 图的有符号面积总等于路程 · The signed area of a v–t graph is always the distance traveled",
        "correct": false
      },
      {
        "text": "被积函数必须为正，积分才有意义 · The integrand must be positive for the integral to mean anything",
        "correct": false
      }
    ],
    "solution": "∫v dt 是位移，负速度的面积要带符号。路程对应速度绝对值的积分。 · ∫v dt is displacement, so areas where v is negative count as negative. Distance uses the integral of speed.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-math/P3.3",
        "label": "P3.3 积分作为累积",
        "topicId": "mech-prep-math:P3.3"
      }
    ]
  },
  {
    "id": "mech-prep-math-q019",
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
        "href": "#/t/mech/mech-prep-math/P3.3",
        "label": "P3.3 积分作为累积",
        "topicId": "mech-prep-math:P3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-math-q020",
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
        "href": "#/t/mech/mech-prep-math/P3.1",
        "label": "P3.1 矢量分解与点积",
        "topicId": "mech-prep-math:P3.1"
      }
    ]
  },
  {
    "id": "mech-prep-math-q021",
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
        "href": "#/t/mech/mech-prep-math/P3.2",
        "label": "P3.2 导数作为变化率",
        "topicId": "mech-prep-math:P3.2"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-math-q022",
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
        "href": "#/t/mech/mech-prep-math/P3.3",
        "label": "P3.3 积分作为累积",
        "topicId": "mech-prep-math:P3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-math-q023",
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
        "href": "#/t/mech/mech-prep-math/P3.1",
        "label": "P3.1 矢量分解与点积",
        "topicId": "mech-prep-math:P3.1"
      }
    ]
  },
  {
    "id": "mech-prep-math-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "指数增长方程 · Exponential differential equation",
    "type": "mcq",
    "stem": "dy/dt = ky，且 k 为正常数。哪项正确？ · dy/dt = ky with k a positive constant. Which statement is correct?",
    "choices": [
      {
        "text": "解是指数函数 y = Ce^{kt} · The solution is the exponential y = Ce^{kt}",
        "correct": true
      },
      {
        "text": "解一定是多项式 · The solution must be a polynomial",
        "correct": false
      },
      {
        "text": "k 为负表示增长 · A negative k means growth",
        "correct": false
      },
      {
        "text": "平衡解是 y = k · The equilibrium solution is y = k",
        "correct": false
      }
    ],
    "solution": "分离变量得到 y = Ce^{kt}。k 为负时才是衰减。 · Separation of variables gives y = Ce^{kt}. A negative k is decay.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-prep-math/P3.4",
        "label": "P3.4 微分方程直觉",
        "topicId": "mech-prep-math:P3.4"
      }
    ]
  },
  {
    "id": "mech-prep-math-q025",
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
        "href": "#/t/mech/mech-prep-math/P3.3",
        "label": "P3.3 积分作为累积",
        "topicId": "mech-prep-math:P3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  },
  {
    "id": "mech-prep-math-q026",
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
        "href": "#/t/mech/mech-prep-math/P3.1",
        "label": "P3.1 矢量分解与点积",
        "topicId": "mech-prep-math:P3.1"
      }
    ]
  },
  {
    "id": "mech-prep-math-q027",
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
        "href": "#/t/mech/mech-prep-math/P3.2",
        "label": "P3.2 导数作为变化率",
        "topicId": "mech-prep-math:P3.2"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-prep-math-q028",
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
        "href": "#/t/mech/mech-prep-math/P3.3",
        "label": "P3.3 积分作为累积",
        "topicId": "mech-prep-math:P3.3"
      }
    ],
    "solutionLatex": "K=\\dfrac{1}{2}mv^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}."
  }
];
