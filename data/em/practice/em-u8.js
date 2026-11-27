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
    "title": "两个点电荷 · Two point charges",
    "text": "真空中两个 2.0 μC 的点电荷相距 0.10 m。取 k=9.0×10⁹ N·m²/C²。 · Two 2.0 μC point charges in vacuum are 0.10 m apart. Take k=9.0×10⁹ N·m²/C².",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "q1",
          "2.0 μC"
        ],
        [
          "q2",
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
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u8-2": {
    "title": "点电荷电场 · Point-charge electric field",
    "text": "点电荷位于原点，求距原点 r 处的电场大小。 · A point charge is at the origin.",
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
    "title": "球形高斯面 · Spherical Gaussian surface",
    "text": "均匀球对称电荷 Q 外包半径 r 的高斯球面。求球面外电场大小。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
    "title": "库仑力 · Coulomb force",
    "sharedStimulus": "stim-em-u8-1",
    "stimulus": {
      "title": "两个点电荷 · Two point charges",
      "text": "真空中两个 2.0 μC 的点电荷相距 0.10 m。取 k=9.0×10⁹ N·m²/C²。 · Two 2.0 μC point charges in vacuum are 0.10 m apart. Take k=9.0×10⁹ N·m²/C².",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "q1",
            "2.0 μC"
          ],
          [
            "q2",
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
      },
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    },
    "questions": [
      {
        "id": "em-u8-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "库仑定律 · Coulomb's law",
        "type": "frq",
        "stem": "写出真空中两点电荷之间力的大小。 · Write the magnitude of the force between two point charges in vacuum.",
        "answerLatex": "F=\\dfrac{kq_1 q_2}{r^{2}}",
        "solution": "力沿连线，同号相斥。 · The force is along the joining line, and like charges repel.",
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
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "库仑力大小 · Coulomb-force magnitude",
        "type": "frq",
        "check": "numeric",
        "stem": "求库仑力的大小（N）。 · Find the magnitude of the Coulomb force (N).",
        "expected": 3.6,
        "tol": 0.01,
        "answerLatex": "3.6\\,\\mathrm{N}",
        "solution": "F = 3.6 N。 · F = 3.6 N.",
        "solutionLatex": "F=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})^{2}}{(0.10)^{2}}=3.6\\,\\mathrm{N}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u8/8.1",
            "label": "8.1 电荷与力",
            "topicId": "em-u8:8.1"
          }
        ]
      },
      {
        "id": "em-u8-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "同号还是异号 · Like or unlike",
        "type": "mcq",
        "stem": "这两个电荷之间的力是哪一种？ · What kind of force acts between these two charges?",
        "choices": [
          {
            "text": "斥力 · Repulsion",
            "correct": true
          },
          {
            "text": "引力 · Attraction",
            "correct": false
          },
          {
            "text": "力为零，因为距离太远 · Zero, because the distance is large",
            "correct": false
          },
          {
            "text": "力沿两电荷连线的垂直方向 · The force is perpendicular to the line joining the charges",
            "correct": false
          }
        ],
        "solution": "两者都为正，互相排斥。 · Both are positive, so they repel.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u8/8.1",
            "label": "8.1 电荷与力",
            "topicId": "em-u8:8.1"
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
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点，求距原点 r 处的电场大小。 · A point charge is at the origin.",
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
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "点电荷电场 · Point-charge field",
        "type": "frq",
        "stem": "写出点电荷电场大小的符号式，并指出方向沿径向。 · Write the magnitude of the point-charge field and state that the direction is radial.",
        "answerLatex": "E=\\dfrac{kq}{r^{2}}",
        "solution": "这是库仑定律除以试探电荷。 · This is Coulomb’s law divided by the test charge.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u8/8.2",
            "label": "8.2 电场",
            "topicId": "em-u8:8.2"
          }
        ]
      },
      {
        "id": "em-u8-q005",
        "title": "点电荷电场 · Point-charge electric field",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求距点电荷 0.10 m 处的电场大小 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "expected": 1800000,
        "tol": 0.01,
        "solution": "代入库仑常量与数据，得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1.8\\times10^{6}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u8-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "距离加倍 · Doubling the distance",
        "type": "mcq",
        "stem": "点电荷的距离变为原来的 2 倍。电场大小变为原来的多少？ · The distance from a point charge becomes twice as large. The field magnitude becomes what fraction of its original value?",
        "choices": [
          {
            "text": "1/4 · 1/4",
            "correct": true
          },
          {
            "text": "1/2 · 1/2",
            "correct": false
          },
          {
            "text": "2 · 2",
            "correct": false
          },
          {
            "text": "4 · 4",
            "correct": false
          }
        ],
        "solution": "E 与 r² 成反比，距离加倍则场强变为 1/4。 · E is inverse-square, so doubling the distance multiplies the field by 1/4.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u8/8.2",
            "label": "8.2 电场",
            "topicId": "em-u8:8.2"
          }
        ]
      },
      {
        "id": "em-u8-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "距离加倍 · Distance doubles",
        "type": "frq",
        "stem": "其他量不变，只把距离加倍。场强变为原来的几分之一？ · Everything else stays fixed and only the distance doubles. What fraction of the original field remains?",
        "answerLatex": "\\dfrac{1}{4}",
        "solution": "点电荷场强与距离平方成反比。 · A point-charge field is inverse-square in distance.",
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
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r 的高斯球面。求球面外电场大小。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "球外的高斯定律 · Gauss's law outside a sphere",
        "type": "frq",
        "stem": "对球对称电荷，写出高斯面外电场大小的符号式。 · For a spherically symmetric charge, write the field magnitude outside the Gaussian surface.",
        "answerLatex": "E=\\dfrac{kQ}{r^{2}}",
        "solution": "面外的场与全部电荷集中在球心时相同。 · Outside, the field matches a point charge at the center.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u8/8.5",
            "label": "8.5 高斯定律",
            "topicId": "em-u8:8.5"
          }
        ]
      },
      {
        "id": "em-u8-q009",
        "title": "球面外的电场 · Field outside a spherical charge",
        "difficulty": "中",
        "type": "frq",
        "check": "numeric",
        "stem": "求球面外电场大小 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "expected": 900000,
        "tol": 0.01,
        "solution": "球外场等效于全部电荷集中于球心。 · Outside a spherical charge the field is kQ/r².",
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
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solutionLatex": "E=\\dfrac{kQ}{r^{2}}=\\dfrac{(9.0\\times10^{9})(1.0\\times10^{-6})}{(0.10)^{2}}=9.0\\times10^{5}\\,\\mathrm{N/C}."
      },
      {
        "id": "em-u8-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "面外电荷 · Charge outside the surface",
        "type": "mcq",
        "stem": "高斯球面外再放一个点电荷，球面内的电荷不变。闭合面的净通量如何？ · A point charge is placed outside the Gaussian sphere, and the charge inside is unchanged. What happens to the net flux through the closed surface?",
        "choices": [
          {
            "text": "净通量不变 · The net flux is unchanged",
            "correct": true
          },
          {
            "text": "净通量一定加倍 · The net flux must double",
            "correct": false
          },
          {
            "text": "净通量变为零 · The net flux becomes zero",
            "correct": false
          },
          {
            "text": "通量不再能用高斯定律 · Flux can no longer be found with Gauss's law",
            "correct": false
          }
        ],
        "solution": "净通量只由包围电荷决定，面外电荷的净贡献为零。 · Net flux depends only on the enclosed charge. Charge outside contributes zero net flux.",
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
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "电场是矢量 · The electric field is a vector",
    "type": "mcq",
    "stem": "两个点电荷在 P 点都产生电场。哪项正确？ · Two point charges each produce a field at point P. Which statement is correct?",
    "choices": [
      {
        "text": "P 点的合电场是两个电场矢量之和 · The net field at P is the vector sum of the two fields",
        "correct": true
      },
      {
        "text": "电场的大小可以直接相加，不必管方向 · Field magnitudes add directly, with no attention to direction",
        "correct": false
      },
      {
        "text": "静电平衡的导体内部电场不为零 · The field inside a conductor in electrostatic equilibrium is not zero",
        "correct": false
      },
      {
        "text": "电场线可以交叉 · Electric field lines may cross",
        "correct": false
      }
    ],
    "solution": "电场按矢量叠加，必须分解后相加。电场线不相交。 · Fields superpose as vectors and must be added by components. Field lines do not cross.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.10 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.10 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 1799999.9999999995,
    "tol": 0.01,
    "answerLatex": "1799999.9999999995\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 1799999.9999999995 N/C。 · E = kq/r² = 1799999.9999999995 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1799999.9999999995\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.10 m。 · q=2.0 μC and r=0.10 m.",
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
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q014",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q015",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.20 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.20 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 449999.9999999999,
    "tol": 0.01,
    "answerLatex": "449999.9999999999\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 449999.9999999999 N/C。 · E = kq/r² = 449999.9999999999 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.20)^{2}}=449999.9999999999\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.20 m。 · q=2.0 μC and r=0.20 m.",
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
            "0.20 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q017",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "两个电荷的叠加 · Superposition of two charges",
    "type": "mcq",
    "stem": "等量异号的两个点电荷构成电偶极子。在中垂线上，哪项正确？ · Equal and opposite point charges form a dipole. On the perpendicular bisector, which statement is correct?",
    "choices": [
      {
        "text": "合电场由两个矢量相加，不能只保留较近的电荷 · The net field is a vector sum; the nearer charge is not the only one that counts",
        "correct": true
      },
      {
        "text": "只有离 P 点更近的电荷有贡献 · Only the charge closer to P contributes",
        "correct": false
      },
      {
        "text": "两个垂直的电场，大小可以直接相加得到合场 · Two perpendicular fields have magnitudes that add directly to give the net field",
        "correct": false
      },
      {
        "text": "异号电荷的电场在空间每一点都抵消 · Opposite charges cancel the field at every point in space",
        "correct": false
      }
    ],
    "solution": "两电荷到中垂线上一点等距，场强大小相等，平行于偶极轴的分量同向，垂直分量抵消。 · Both charges are equally far from a point on the bisector. The components parallel to the dipole axis add; the perpendicular components cancel.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.30 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.30 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 200000,
    "tol": 0.01,
    "answerLatex": "200000\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 200000 N/C。 · E = kq/r² = 200000 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.30)^{2}}=200000\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.30 m。 · q=2.0 μC and r=0.30 m.",
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
            "0.30 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q020",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q021",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
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
    "id": "em-u8-q022",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.10 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.10 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 1799999.9999999995,
    "tol": 0.01,
    "answerLatex": "1799999.9999999995\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 1799999.9999999995 N/C。 · E = kq/r² = 1799999.9999999995 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1799999.9999999995\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.10 m。 · q=2.0 μC and r=0.10 m.",
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
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q023",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "匀强电场中的平面 · A flat surface in a uniform field",
    "type": "mcq",
    "stem": "匀强电场 E 穿过平面，θ 是 E 与平面法线的夹角。哪项正确？ · A uniform field E crosses a flat surface, and θ is the angle between E and the normal. Which statement is correct?",
    "choices": [
      {
        "text": "通量 Φ = EA cosθ · The flux is Φ = EA cosθ",
        "correct": true
      },
      {
        "text": "通量总是 EA，与角度无关 · The flux is always EA, independent of angle",
        "correct": false
      },
      {
        "text": "通量是沿法线的矢量 · Flux is a vector along the normal",
        "correct": false
      },
      {
        "text": "法线与电场垂直时通量最大 · The flux is greatest when the normal is perpendicular to the field",
        "correct": false
      }
    ],
    "solution": "Φ = EA cosθ。θ = 90° 时通量为零。通量是标量。 · Φ = EA cosθ. The flux is zero at θ = 90°. Flux is a scalar.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.20 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.20 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 449999.9999999999,
    "tol": 0.01,
    "answerLatex": "449999.9999999999\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 449999.9999999999 N/C。 · E = kq/r² = 449999.9999999999 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.20)^{2}}=449999.9999999999\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.20 m。 · q=2.0 μC and r=0.20 m.",
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
            "0.20 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q026",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q027",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
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
    "id": "em-u8-q028",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.30 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.30 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 200000,
    "tol": 0.01,
    "answerLatex": "200000\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 200000 N/C。 · E = kq/r² = 200000 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.30)^{2}}=200000\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.30 m。 · q=2.0 μC and r=0.30 m.",
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
            "0.30 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q029",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "包围电荷 · Enclosed charge",
    "type": "mcq",
    "stem": "闭合高斯面外有一个点电荷，面内没有电荷。哪项正确？ · A point charge sits outside a closed Gaussian surface, and no charge is inside. Which statement is correct?",
    "choices": [
      {
        "text": "闭合面的净电通量等于包围电荷除以 ε0 · The net flux through a closed surface equals the enclosed charge divided by ε0",
        "correct": true
      },
      {
        "text": "面外电荷也计入净通量 · Charge outside the surface still counts in the net flux",
        "correct": false
      },
      {
        "text": "高斯定律只对立方体成立 · Gauss's law is true only for a cube",
        "correct": false
      },
      {
        "text": "净通量为零说明面上没有电场 · Zero net flux means there is no field on the surface",
        "correct": false
      }
    ],
    "solution": "净通量等于 Q_enc/ε0。面外电荷的净通量为零，但面上电场不必为零。 · The net flux equals Q_enc/ε0. A charge outside contributes zero net flux, but the field on the surface need not be zero.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.10 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.10 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 1799999.9999999995,
    "tol": 0.01,
    "answerLatex": "1799999.9999999995\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 1799999.9999999995 N/C。 · E = kq/r² = 1799999.9999999995 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1799999.9999999995\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.10 m。 · q=2.0 μC and r=0.10 m.",
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
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q032",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
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
    "id": "em-u8-q034",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.20 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.20 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 449999.9999999999,
    "tol": 0.01,
    "answerLatex": "449999.9999999999\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 449999.9999999999 N/C。 · E = kq/r² = 449999.9999999999 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.20)^{2}}=449999.9999999999\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.20 m。 · q=2.0 μC and r=0.20 m.",
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
            "0.20 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q035",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "库仑定律 · Coulomb's law",
    "type": "mcq",
    "stem": "真空中两个点电荷。哪项正确？ · Two point charges are in vacuum. Which statement is correct?",
    "choices": [
      {
        "text": "力沿连线，大小与距离平方成反比 · The force is along the joining line and its magnitude is inverse-square",
        "correct": true
      },
      {
        "text": "库仑力总是斥力 · The Coulomb force is always repulsive",
        "correct": false
      },
      {
        "text": "库仑力不满足牛顿第三定律 · The Coulomb force does not obey Newton's third law",
        "correct": false
      },
      {
        "text": "力与距离成正比 · The force is proportional to the distance",
        "correct": false
      }
    ],
    "solution": "力沿连线，与乘积成正比，与距离平方成反比，并满足牛顿第三定律。 · The force is along the joining line, proportional to the product of the charges, inverse-square, and it obeys Newton’s third law.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.30 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.30 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 200000,
    "tol": 0.01,
    "answerLatex": "200000\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 200000 N/C。 · E = kq/r² = 200000 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.30)^{2}}=200000\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.30 m。 · q=2.0 μC and r=0.30 m.",
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
            "0.30 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q038",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q039",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
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
    "id": "em-u8-q040",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.10 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.10 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 1799999.9999999995,
    "tol": 0.01,
    "answerLatex": "1799999.9999999995\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 1799999.9999999995 N/C。 · E = kq/r² = 1799999.9999999995 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1799999.9999999995\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.10 m。 · q=2.0 μC and r=0.10 m.",
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
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q041",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.20 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.20 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 449999.9999999999,
    "tol": 0.01,
    "answerLatex": "449999.9999999999\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 449999.9999999999 N/C。 · E = kq/r² = 449999.9999999999 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.20)^{2}}=449999.9999999999\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.20 m。 · q=2.0 μC and r=0.20 m.",
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
            "0.20 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q043",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.30 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.30 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 200000,
    "tol": 0.01,
    "answerLatex": "200000\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 200000 N/C。 · E = kq/r² = 200000 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.30)^{2}}=200000\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.30 m。 · q=2.0 μC and r=0.30 m.",
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
            "0.30 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q044",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "id": "em-u8-q045",
    "title": "球面外的电场 · Field outside a spherical charge",
    "type": "frq",
    "difficulty": "中",
    "stimulus": {
      "title": "球形高斯面 · Spherical Gaussian surface",
      "text": "均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。 · A spherically symmetric charge is inside a spherical Gaussian surface.",
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
        "stem": "写出高斯定律。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "answerLatex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "solution": "对称性 ⇒ E 常量。 · Outside a spherical charge the field is kQ/r²."
      },
      {
        "stem": "求球面外 E（N/C）。 · Outside a spherical charge the field is kQ/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 900000,
        "tol": 0.01,
        "answerLatex": "9.0\\times10^{5}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=9.0×10⁵ N/C。 · Outside a spherical charge the field is kQ/r².",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.10 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.10 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 1799999.9999999995,
    "tol": 0.01,
    "answerLatex": "1799999.9999999995\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 1799999.9999999995 N/C。 · E = kq/r² = 1799999.9999999995 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.10)^{2}}=1799999.9999999995\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.10 m。 · q=2.0 μC and r=0.10 m.",
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
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
  },
  {
    "id": "em-u8-q047",
    "title": "点电荷电场 · Point-charge electric field",
    "type": "frq",
    "difficulty": "易",
    "stimulus": {
      "title": "点电荷电场 · Point-charge electric field",
      "text": "点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。 · A point charge is at the origin.",
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
        "stem": "写出点电荷电场公式（符号）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "answerLatex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}",
        "solution": "库仑定律定义场。 · The point-charge field magnitude is kq/r²."
      },
      {
        "stem": "代入表中数据求 E（N/C）。 · The point-charge field magnitude is kq/r².",
        "type": "frq",
        "check": "numeric",
        "expected": 1800000,
        "tol": 0.01,
        "answerLatex": "1.8\\times10^{6}\\,\\mathrm{N/C}",
        "solution": "代入数据得 E=1.8×10⁶ N/C。 · The point-charge field magnitude is kq/r².",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "点电荷电场 · Point-charge field",
    "type": "frq",
    "check": "numeric",
    "stem": "点电荷 q=2.0 μC。求距它 0.20 m 处的电场大小（N/C）。取 k=9.0×10⁹ N·m²/C²。 · A point charge is q=2.0 μC. Find the electric field magnitude 0.20 m away (N/C). Take k=9.0×10⁹ N·m²/C².",
    "expected": 449999.9999999999,
    "tol": 0.01,
    "answerLatex": "449999.9999999999\\,\\mathrm{N/C}",
    "solution": "E = kq/r² = 449999.9999999999 N/C。 · E = kq/r² = 449999.9999999999 N/C.",
    "solutionLatex": "E=\\dfrac{kq}{r^{2}}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{(0.20)^{2}}=449999.9999999999\\,\\mathrm{N/C}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u8/8.2",
        "label": "8.2 电场",
        "topicId": "em-u8:8.2"
      }
    ],
    "stimulus": {
      "title": "点电荷电场 · Point-charge field",
      "text": "q=2.0 μC，r=0.20 m。 · q=2.0 μC and r=0.20 m.",
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
            "0.20 m"
          ],
          [
            "k",
            "9.0×10⁹"
          ]
        ]
      },
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
      "sourceId": "openstax-university-physics",
      "source": "OpenStax University Physics Volumes 1–3",
      "license": "CC BY 4.0",
      "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
      "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
    }
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
    "expected": 450000,
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
    "expected": 20000000000000,
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
    "expected": 2,
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
    "expected": 96000,
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
    "expected": 800000,
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
    "expected": 6900000,
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
    "expected": 4.2e+42,
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
    "expected": 48000,
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
