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
  "stim-mech-u2-2": {
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
  "stim-mech-u2-3": {
    "title": "由 v–t 图求净力 · Net force from a v–t graph",
    "text": "图为质点的速度–时间图像，折点为 (0,0)、(1,3)、(2,3)、(4,−1)。质量 m=2.0 kg。 · The velocity–time graph has corners (0,0), (1,3), (2,3), and (4,−1). The mass is m=2.0 kg.",
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
        ]
      ]
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
        "id": "mech-u2-q001",
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
            "href": "#/t/mech/mech-u2/2.3",
            "label": "2.3 牛顿第一与第二定律",
            "topicId": "mech-u2:2.3"
          }
        ]
      },
      {
        "id": "mech-u2-q002",
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
            "href": "#/t/mech/mech-u2/2.3",
            "label": "2.3 牛顿第一与第二定律",
            "topicId": "mech-u2:2.3"
          }
        ],
        "answerLatex": "3.04\\,\\mathrm{m\\,s^{-2}}",
        "solutionLatex": "a=\\dfrac{F-\\mu_k mg}{m}=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m\\,s^{-2}}."
      },
      {
        "id": "mech-u2-q003",
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
        "id": "mech-u2-q004",
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
            "href": "#/t/mech/mech-u2/2.5",
            "label": "2.5 牛顿第三定律",
            "topicId": "mech-u2:2.5"
          }
        ]
      },
      {
        "id": "mech-u2-q005",
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
            "href": "#/t/mech/mech-u2/2.5",
            "label": "2.5 牛顿第三定律",
            "topicId": "mech-u2:2.5"
          }
        ]
      },
      {
        "id": "mech-u2-q007",
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
            "href": "#/t/mech/mech-u2/2.5",
            "label": "2.5 牛顿第三定律",
            "topicId": "mech-u2:2.5"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "mech-u2-set3",
    "title": "由图像求合力 · Net force from a graph",
    "sharedStimulus": "stim-mech-u2-3",
    "stimulus": {
      "title": "由 v–t 图求净力 · Net force from a v–t graph",
      "text": "图为质点的速度–时间图像，折点为 (0,0)、(1,3)、(2,3)、(4,−1)。质量 m=2.0 kg。 · The velocity–time graph has corners (0,0), (1,3), (2,3), and (4,−1). The mass is m=2.0 kg.",
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
          ]
        ]
      }
    },
    "questions": [
      {
        "id": "mech-u2-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "斜率与牛顿第二定律 · Slope and Newton’s second law",
        "type": "frq",
        "stem": "已知质量 m，写出用 v–t 图斜率表示净力的符号式。 · The mass m is known. Write the net force in terms of the slope of the v–t graph.",
        "answerLatex": "F_{\\mathrm{net}}=m\\dfrac{\\Delta v}{\\Delta t}",
        "solution": "斜率是加速度。 · The slope is the acceleration.",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u2/2.3",
            "label": "2.3 牛顿第一与第二定律",
            "topicId": "mech-u2:2.3"
          }
        ]
      },
      {
        "id": "mech-u2-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "0–1 s 的净力 · Net force during 0–1 s",
        "type": "frq",
        "check": "numeric",
        "stem": "质量为 2.0 kg。求 0–1 s 内净力的大小（N）。 · The mass is 2.0 kg. Find the magnitude of the net force during 0–1 s (N).",
        "expected": 6,
        "tol": 0.01,
        "answerLatex": "6.0\\,\\mathrm{N}",
        "solution": "斜率是 3 m/s²，净力为 6.0 N。 · The slope is 3 m/s², so the net force is 6.0 N.",
        "solutionLatex": "a=\\dfrac{3-0}{1-0}=3\\,\\mathrm{m/s^{2}},\\quad F_{\\mathrm{net}}=ma=6.0\\,\\mathrm{N}",
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
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "哪一段合力为零 · Where the net force is zero",
        "type": "mcq",
        "stem": "质量不变。哪一段时间净力为零？ · The mass is constant. During which interval is the net force zero?",
        "choices": [
          {
            "text": "1–2 s · 1–2 s",
            "correct": true
          },
          {
            "text": "0–1 s · 0–1 s",
            "correct": false
          },
          {
            "text": "2–4 s · 2–4 s",
            "correct": false
          },
          {
            "text": "全程都不为零 · It is nonzero over the whole graph",
            "correct": false
          }
        ],
        "solution": "1–2 s 速度不变，斜率为零。 · From 1 to 2 s the velocity is constant, so the slope is zero.",
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
    "id": "mech-u2-q011",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "系统的内力 · Internal forces of a system",
    "type": "mcq",
    "stem": "两物块用轻绳相连，一起被外力拉动。分析系统质心的加速度时，哪项正确？ · Two blocks joined by a light string are pulled by an external force. Which statement is correct for the acceleration of the system center of mass?",
    "choices": [
      {
        "text": "成对内力抵消，质心加速度由合外力决定 · Internal pairs cancel; the center-of-mass acceleration is fixed by the net external force",
        "correct": true
      },
      {
        "text": "必须把绳上的一对力都计入合外力 · Both members of the string pair must be counted in the external force",
        "correct": false
      },
      {
        "text": "内力永远不能改变系统的动能 · Internal forces can never change the kinetic energy of the system",
        "correct": false
      },
      {
        "text": "质心加速度等于每个物块加速度的算术平均，与质量无关 · The center-of-mass acceleration is the unweighted average of the block accelerations",
        "correct": false
      }
    ],
    "solution": "牛顿第三定律的成对内力等大反向，求质心加速度时只需外力。 · Third-law internal pairs are equal and opposite, so the center-of-mass acceleration depends only on the external force.",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.2",
        "label": "2.2 系统",
        "topicId": "mech-u2:2.2"
      }
    ]
  },
  {
    "id": "mech-u2-q013",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q015",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q016",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "有摩擦的加速度 · Acceleration with friction",
    "type": "frq",
    "check": "numeric",
    "stem": "水平面上 2.0 kg 的物块受 6 N 水平拉力，动摩擦因数 0.20。取 g=9.8 m/s²。求加速度（m/s²）。 · A 2.0 kg block on a horizontal surface is pulled by 6 N. The kinetic friction coefficient is 0.20. Take g=9.8 m/s². Find the acceleration (m/s²).",
    "expected": 1.04,
    "tol": 0.01,
    "answerLatex": "1.04\\,\\mathrm{m/s^{2}}",
    "solution": "a = (F − μmg)/m = 1.04 m/s²。 · a = (F − μmg)/m = 1.04 m/s².",
    "solutionLatex": "a=\\dfrac{6-(0.20)(2.0)(9.8)}{2.0}=1.04\\,\\mathrm{m/s^{2}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上质量 2 kg 的物块受水平拉力 6 N，动摩擦因数 0.2。取 g=9.8 m/s²。 · A 2 kg block on a horizontal surface is pulled by 6 N. The kinetic friction coefficient is 0.2. Take g=9.8 m/s².",
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
            "2 kg"
          ],
          [
            "F",
            "6 N"
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
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "mech-u2-q019",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q021",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q022",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "有摩擦的加速度 · Acceleration with friction",
    "type": "frq",
    "check": "numeric",
    "stem": "水平面上 2.0 kg 的物块受 10 N 水平拉力，动摩擦因数 0.20。取 g=9.8 m/s²。求加速度（m/s²）。 · A 2.0 kg block on a horizontal surface is pulled by 10 N. The kinetic friction coefficient is 0.20. Take g=9.8 m/s². Find the acceleration (m/s²).",
    "expected": 3.04,
    "tol": 0.01,
    "answerLatex": "3.04\\,\\mathrm{m/s^{2}}",
    "solution": "a = (F − μmg)/m = 3.04 m/s²。 · a = (F − μmg)/m = 3.04 m/s².",
    "solutionLatex": "a=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m/s^{2}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上质量 2 kg 的物块受水平拉力 10 N，动摩擦因数 0.2。取 g=9.8 m/s²。 · A 2 kg block on a horizontal surface is pulled by 10 N. The kinetic friction coefficient is 0.2. Take g=9.8 m/s².",
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
            "2 kg"
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
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "mech-u2-q025",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q027",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q028",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "有摩擦的加速度 · Acceleration with friction",
    "type": "frq",
    "check": "numeric",
    "stem": "水平面上 2.0 kg 的物块受 14 N 水平拉力，动摩擦因数 0.20。取 g=9.8 m/s²。求加速度（m/s²）。 · A 2.0 kg block on a horizontal surface is pulled by 14 N. The kinetic friction coefficient is 0.20. Take g=9.8 m/s². Find the acceleration (m/s²).",
    "expected": 5.04,
    "tol": 0.01,
    "answerLatex": "5.04\\,\\mathrm{m/s^{2}}",
    "solution": "a = (F − μmg)/m = 5.04 m/s²。 · a = (F − μmg)/m = 5.04 m/s².",
    "solutionLatex": "a=\\dfrac{14-(0.20)(2.0)(9.8)}{2.0}=5.04\\,\\mathrm{m/s^{2}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上质量 2 kg 的物块受水平拉力 14 N，动摩擦因数 0.2。取 g=9.8 m/s²。 · A 2 kg block on a horizontal surface is pulled by 14 N. The kinetic friction coefficient is 0.2. Take g=9.8 m/s².",
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
            "2 kg"
          ],
          [
            "F",
            "14 N"
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
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "mech-u2-q031",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q033",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q034",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "有摩擦的加速度 · Acceleration with friction",
    "type": "frq",
    "check": "numeric",
    "stem": "水平面上 2.0 kg 的物块受 18 N 水平拉力，动摩擦因数 0.20。取 g=9.8 m/s²。求加速度（m/s²）。 · A 2.0 kg block on a horizontal surface is pulled by 18 N. The kinetic friction coefficient is 0.20. Take g=9.8 m/s². Find the acceleration (m/s²).",
    "expected": 7.04,
    "tol": 0.01,
    "answerLatex": "7.04\\,\\mathrm{m/s^{2}}",
    "solution": "a = (F − μmg)/m = 7.04 m/s²。 · a = (F − μmg)/m = 7.04 m/s².",
    "solutionLatex": "a=\\dfrac{18-(0.20)(2.0)(9.8)}{2.0}=7.04\\,\\mathrm{m/s^{2}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上质量 2 kg 的物块受水平拉力 18 N，动摩擦因数 0.2。取 g=9.8 m/s²。 · A 2 kg block on a horizontal surface is pulled by 18 N. The kinetic friction coefficient is 0.2. Take g=9.8 m/s².",
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
            "2 kg"
          ],
          [
            "F",
            "18 N"
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
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "mech-u2-q037",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q039",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q040",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "有摩擦的加速度 · Acceleration with friction",
    "type": "frq",
    "check": "numeric",
    "stem": "水平面上 2.0 kg 的物块受 6 N 水平拉力，动摩擦因数 0.20。取 g=9.8 m/s²。求加速度（m/s²）。 · A 2.0 kg block on a horizontal surface is pulled by 6 N. The kinetic friction coefficient is 0.20. Take g=9.8 m/s². Find the acceleration (m/s²).",
    "expected": 1.04,
    "tol": 0.01,
    "answerLatex": "1.04\\,\\mathrm{m/s^{2}}",
    "solution": "a = (F − μmg)/m = 1.04 m/s²。 · a = (F − μmg)/m = 1.04 m/s².",
    "solutionLatex": "a=\\dfrac{6-(0.20)(2.0)(9.8)}{2.0}=1.04\\,\\mathrm{m/s^{2}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上质量 2 kg 的物块受水平拉力 6 N，动摩擦因数 0.2。取 g=9.8 m/s²。 · A 2 kg block on a horizontal surface is pulled by 6 N. The kinetic friction coefficient is 0.2. Take g=9.8 m/s².",
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
            "2 kg"
          ],
          [
            "F",
            "6 N"
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
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "mech-u2-q043",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q045",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q046",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q048",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "有摩擦的加速度 · Acceleration with friction",
    "type": "frq",
    "check": "numeric",
    "stem": "水平面上 2.0 kg 的物块受 10 N 水平拉力，动摩擦因数 0.20。取 g=9.8 m/s²。求加速度（m/s²）。 · A 2.0 kg block on a horizontal surface is pulled by 10 N. The kinetic friction coefficient is 0.20. Take g=9.8 m/s². Find the acceleration (m/s²).",
    "expected": 3.04,
    "tol": 0.01,
    "answerLatex": "3.04\\,\\mathrm{m/s^{2}}",
    "solution": "a = (F − μmg)/m = 3.04 m/s²。 · a = (F − μmg)/m = 3.04 m/s².",
    "solutionLatex": "a=\\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\\,\\mathrm{m/s^{2}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "stimulus": {
      "title": "水平面滑动（有摩擦） · Kinetic friction on a horizontal surface",
      "text": "水平面上质量 2 kg 的物块受水平拉力 10 N，动摩擦因数 0.2。取 g=9.8 m/s²。 · A 2 kg block on a horizontal surface is pulled by 10 N. The kinetic friction coefficient is 0.2. Take g=9.8 m/s².",
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
            "2 kg"
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
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "mech-u2-q049",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  },
  {
    "id": "mech-u2-q051",
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
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ],
    "solutionLatex": "a=\\dfrac{F}{m}=\\dfrac{10}{2.0}=5.0\\,\\mathrm{m\\,s^{-2}}."
  },
  {
    "id": "mech-u2-q052",
    "title": "向心加速度 · Centripetal acceleration",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{半径 }r=2.0\\,\\mathrm{m}\\text{ 的圆周运动，速率 }v=4.0\\,\\mathrm{m/s}\\text{，求向心加速度 }a_c",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8.0\\,\\mathrm{m\\,s^{-2}}",
    "solution": "由向心加速度公式得 8.0 m/s²。 · Centripetal acceleration is v²/r.",
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
    "solutionLatex": "v(t)=v_t\\left(1-e^{-\\frac{t}{\\tau}}\\right)=3.92\\left(1-e^{-2.0}\\right)=3.39\\,\\mathrm{m\\,s^{-1}}",
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
    "id": "mech-u2-q069",
    "title": "2.1 非均匀杆的质心",
    "stem": "长 L=1.8 m 的杆，线密度 λ(x)=λ₀(1+x/L)。求质心坐标 x_cm（m，从 x=0 端量起）。",
    "expected": 1,
    "tol": 0.02,
    "answerLatex": "1.0\\,\\mathrm{m}",
    "solution": "x_cm=5L/9=5(1.8)/9=1.0 m；密度向右增大，质心在 L/2 右侧。",
    "solutionLatex": "x_{cm}=\\dfrac{\\int x\\lambda\\,\\mathrm{d}x}{\\int\\lambda\\,\\mathrm{d}x}=\\dfrac{5L}{9}=1.0\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.1",
        "label": "2.1 质心",
        "topicId": "mech-u2:2.1"
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
    "id": "mech-u2-q070",
    "title": "2.8 串联弹簧的等效劲度系数",
    "stem": "两根弹簧 k₁=200 N/m、k₂=300 N/m 串联。求等效劲度系数（N/m）。",
    "expected": 120,
    "tol": 0.01,
    "answerLatex": "120\\,\\mathrm{N\\,m^{-1}}",
    "solution": "串联同力、形变相加：1/k_eq=1/200+1/300=1/120，故 k_eq=120 N/m。",
    "solutionLatex": "\\dfrac{1}{k_{eq}}=\\dfrac{1}{200}+\\dfrac{1}{300}=\\dfrac{1}{120}\\Rightarrow k_{eq}=120\\,\\mathrm{N\\,m^{-1}}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.8",
        "label": "2.8 弹簧力与非理想弹簧",
        "topicId": "mech-u2:2.8"
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
    "id": "mech-u2-q071",
    "title": "2.3 两物块间的接触力",
    "stem": "光滑水平面上 m₁=2.0 kg 与 m₂=3.0 kg 接触，水平力 F=10 N 作用在 m₁ 上。求两物块间的接触力大小（N）。",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{N}",
    "solution": "整体 a=F/(m₁+m₂)=2.0 m/s²；对 m₂，接触力 = m₂a = 6.0 N。",
    "solutionLatex": "a=\\dfrac{F}{m_1+m_2}=2.0\\,\\mathrm{m\\,s^{-2}},\\quad F_{12}=m_2a=6.0\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u2/2.3",
        "label": "2.3 牛顿第一与第二定律",
        "topicId": "mech-u2:2.3"
      }
    ]
  }
];
