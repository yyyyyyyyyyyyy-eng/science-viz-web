/** Practice bank for em-u12 */
export const UNIT_REF = {
  "id": "em-u12",
  "code": "12",
  "titleZh": "磁场与电磁学",
  "titleEn": "Magnetic Fields and Electromagnetism",
  "layer": "ap",
  "subject": "em"
};
export const stimuli = {
  "stim-em-u12-1": {
    "title": "垂直进入磁场 · Entering a field at a right angle",
    "text": "电荷 1.6×10⁻¹⁹ C 以 2.0×10⁶ m/s 垂直进入 0.50 T 的磁场。 · A charge of 1.6×10⁻¹⁹ C enters a 0.50 T field at 2.0×10⁶ m/s, perpendicular to the field.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "q",
          "1.6×10⁻¹⁹ C"
        ],
        [
          "v",
          "2.0×10⁶ m/s"
        ],
        [
          "B",
          "0.50 T"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u12-2": {
    "title": "无限长直导线 · Infinite straight wire",
    "text": "长直导线电流 10 A，求距导线 0.050 m 处的磁感应强度。μ0/(2π)=2.0×10⁻⁷ T·m/A。 · A long straight wire carries 10 A. Find the field 0.050 m away. μ0/(2π)=2.0×10⁻⁷ T·m/A.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "I",
          "10 A"
        ],
        [
          "r",
          "0.050 m"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-em-u12-3": {
    "title": "磁场中的直导线 · A straight wire in a magnetic field",
    "text": "电流 4.0 A，导线在磁场中的长度 0.25 m，B=0.20 T 且与导线垂直。 · The current is 4.0 A, the length in the field is 0.25 m, and B=0.20 T is perpendicular to the wire.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "I",
          "4.0 A"
        ],
        [
          "L",
          "0.25 m"
        ],
        [
          "B",
          "0.20 T"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  }
};
export const problems = [
  {
    "kind": "set",
    "id": "em-u12-set1",
    "title": "洛伦兹力 · Lorentz force",
    "sharedStimulus": "stim-em-u12-1",
    "stimulus": {
      "title": "垂直进入磁场 · Entering a field at a right angle",
      "text": "电荷 1.6×10⁻¹⁹ C 以 2.0×10⁶ m/s 垂直进入 0.50 T 的磁场。 · A charge of 1.6×10⁻¹⁹ C enters a 0.50 T field at 2.0×10⁶ m/s, perpendicular to the field.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "q",
            "1.6×10⁻¹⁹ C"
          ],
          [
            "v",
            "2.0×10⁶ m/s"
          ],
          [
            "B",
            "0.50 T"
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
        "id": "em-u12-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "磁力大小 · Magnetic-force magnitude",
        "type": "frq",
        "stem": "写出速度与磁场垂直时的磁力大小。 · Write the magnetic force when the velocity is perpendicular to the field.",
        "answerLatex": "F=qvB",
        "solution": "一般情形是 qvB sinθ。磁力不做功。 · The general magnitude is qvB sinθ. The magnetic force does no work.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.2",
            "label": "12.2 运动电荷与磁场",
            "topicId": "em-u12:12.2"
          }
        ]
      },
      {
        "id": "em-u12-q002",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "洛伦兹力 · Lorentz force",
        "type": "frq",
        "check": "numeric",
        "stem": "求磁力大小（N）。 · Find the magnetic force (N).",
        "expected": 1.6e-13,
        "tol": 0.02,
        "answerLatex": "1.6\\times10^{-13}\\,\\mathrm{N}",
        "solution": "F = 1.6×10⁻¹³ N。 · F = 1.6×10⁻¹³ N.",
        "solutionLatex": "F=(1.6\\times10^{-19})(2.0\\times10^{6})(0.50)=1.6\\times10^{-13}\\,\\mathrm{N}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.2",
            "label": "12.2 运动电荷与磁场",
            "topicId": "em-u12:12.2"
          }
        ]
      },
      {
        "id": "em-u12-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "速率会不会变 · Does the speed change",
        "type": "mcq",
        "stem": "只有这个均匀磁场施力。电荷的速率如何？ · Only this uniform magnetic field exerts a force. What happens to the speed?",
        "choices": [
          {
            "text": "速率不变 · The speed stays the same",
            "correct": true
          },
          {
            "text": "速率一直增大 · The speed keeps increasing",
            "correct": false
          },
          {
            "text": "速率很快变为零 · The speed quickly becomes zero",
            "correct": false
          },
          {
            "text": "磁力沿速度方向 · The magnetic force is along the velocity",
            "correct": false
          }
        ],
        "solution": "磁力垂直于速度，功率为零，速率不变。 · The magnetic force is perpendicular to the velocity, so its power is zero and the speed is constant.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.2",
            "label": "12.2 运动电荷与磁场",
            "topicId": "em-u12:12.2"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u12-set2",
    "title": "长直导线 · Long straight wire",
    "sharedStimulus": "stim-em-u12-2",
    "stimulus": {
      "title": "无限长直导线 · Infinite straight wire",
      "text": "长直导线电流 10 A，求距导线 0.050 m 处的磁感应强度。μ0/(2π)=2.0×10⁻⁷ T·m/A。 · A long straight wire carries 10 A. Find the field 0.050 m away. μ0/(2π)=2.0×10⁻⁷ T·m/A.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "I",
            "10 A"
          ],
          [
            "r",
            "0.050 m"
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
        "id": "em-u12-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "直导线磁场 · Field of a straight wire",
        "type": "frq",
        "stem": "写出无限长直导线周围磁感应强度的大小。 · Write the magnetic field magnitude around an infinite straight wire.",
        "answerLatex": "B=\\dfrac{\\mu_0 I}{2\\pi r}",
        "solution": "方向由右手定则给出。 · The direction comes from the right-hand rule.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.3",
            "label": "12.3 毕奥–萨伐尔定律",
            "topicId": "em-u12:12.3"
          }
        ]
      },
      {
        "id": "em-u12-q005",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "长直导线磁场 · Field of a long wire",
        "type": "frq",
        "check": "numeric",
        "stem": "求磁感应强度大小（T）。 · Find the magnetic field magnitude (T).",
        "expected": 0.00004,
        "tol": 0.02,
        "answerLatex": "4.0\\times10^{-5}\\,\\mathrm{T}",
        "solution": "B = 4.0×10⁻⁵ T。 · B = 4.0×10⁻⁵ T.",
        "solutionLatex": "B=(2.0\\times10^{-7})\\dfrac{10}{0.050}=4.0\\times10^{-5}\\,\\mathrm{T}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.3",
            "label": "12.3 毕奥–萨伐尔定律",
            "topicId": "em-u12:12.3"
          }
        ]
      },
      {
        "id": "em-u12-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "方向 · Direction",
        "type": "mcq",
        "stem": "长直导线周围的磁感线是什么形状？ · What is the shape of the field lines around a long straight wire?",
        "choices": [
          {
            "text": "以导线为轴的圆 · Circles centered on the wire",
            "correct": true
          },
          {
            "text": "从导线径向向外的直线 · Straight lines radiating from the wire",
            "correct": false
          },
          {
            "text": "与导线平行的直线 · Straight lines parallel to the wire",
            "correct": false
          },
          {
            "text": "导线周围没有磁场 · There is no field around the wire",
            "correct": false
          }
        ],
        "solution": "磁感线是以导线为轴的同心圆。 · The field lines are circles centered on the wire.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.3",
            "label": "12.3 毕奥–萨伐尔定律",
            "topicId": "em-u12:12.3"
          }
        ]
      },
      {
        "id": "em-u12-q007",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "距离加倍后的磁感应强度 · Field after the distance doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "电流仍是 10 A，距离改为 0.10 m。求磁感应强度大小（T）。 · The current is still 10 A and the distance is now 0.10 m. Find the magnetic field magnitude (T).",
        "expected": 0.00002,
        "tol": 0.01,
        "answerLatex": "2.0\\times10^{-5}\\,\\mathrm{T}",
        "solution": "无限长直导线的 B 与 r 成反比。 · The field of a long straight wire is inverse in r.",
        "solutionLatex": "B=\\dfrac{\\mu_0 I}{2\\pi r}=\\dfrac{(2.0\\times10^{-7})(10)}{0.10}=2.0\\times10^{-5}\\,\\mathrm{T}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.3",
            "label": "12.3 毕奥–萨伐尔定律",
            "topicId": "em-u12:12.3"
          }
        ]
      }
    ]
  },
  {
    "kind": "set",
    "id": "em-u12-set3",
    "title": "安培力 · Force on a current",
    "sharedStimulus": "stim-em-u12-3",
    "stimulus": {
      "title": "磁场中的直导线 · A straight wire in a magnetic field",
      "text": "电流 4.0 A，导线在磁场中的长度 0.25 m，B=0.20 T 且与导线垂直。 · The current is 4.0 A, the length in the field is 0.25 m, and B=0.20 T is perpendicular to the wire.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "I",
            "4.0 A"
          ],
          [
            "L",
            "0.25 m"
          ],
          [
            "B",
            "0.20 T"
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
        "id": "em-u12-q008",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "安培力 · Ampère force",
        "type": "frq",
        "stem": "写出电流与磁场垂直时导线受力的大小。 · Write the force on a wire when the current is perpendicular to the field.",
        "answerLatex": "F=ILB",
        "solution": "一般情形乘 sinθ。 · The general case multiplies by sinθ.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.2",
            "label": "12.2 运动电荷与磁场",
            "topicId": "em-u12:12.2"
          }
        ]
      },
      {
        "id": "em-u12-q009",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "导线受力 · Force on the wire",
        "type": "frq",
        "check": "numeric",
        "stem": "求力的大小（N）。 · Find the force magnitude (N).",
        "expected": 0.2,
        "tol": 0.02,
        "answerLatex": "0.20\\,\\mathrm{N}",
        "solution": "F = 0.20 N。 · F = 0.20 N.",
        "solutionLatex": "F=ILB=(4.0)(0.25)(0.20)=0.20\\,\\mathrm{N}",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.2",
            "label": "12.2 运动电荷与磁场",
            "topicId": "em-u12:12.2"
          }
        ]
      },
      {
        "id": "em-u12-q010",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "平行时 · When they are parallel",
        "type": "mcq",
        "stem": "若电流改为与磁场平行，力的大小是多少？ · If the current is redirected parallel to the field, what is the force magnitude?",
        "choices": [
          {
            "text": "0 · 0",
            "correct": true
          },
          {
            "text": "仍是 0.20 N · It is still 0.20 N",
            "correct": false
          },
          {
            "text": "0.40 N · 0.40 N",
            "correct": false
          },
          {
            "text": "力沿电流方向且大小为 IB · The force is along the current and has magnitude IB",
            "correct": false
          }
        ],
        "solution": "sin0°=0，力为零。 · sin0°=0, so the force is zero.",
        "topicLinks": [
          {
            "href": "#/t/em/em-u12/12.2",
            "label": "12.2 运动电荷与磁场",
            "topicId": "em-u12:12.2"
          }
        ]
      }
    ]
  },
  {
    "id": "em-u12-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q012",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "洛伦兹力何时为零 · When the magnetic force is zero",
    "type": "mcq",
    "stem": "电荷 q 以速度 v 进入均匀磁场 B。哪项正确？ · A charge q enters a uniform magnetic field B with velocity v. Which statement is correct?",
    "choices": [
      {
        "text": "速度与磁场平行时，磁力为零 · The magnetic force is zero when the velocity is parallel to the field",
        "correct": true
      },
      {
        "text": "静止电荷在磁场中也受力 · A charge at rest in a magnetic field also feels a force",
        "correct": false
      },
      {
        "text": "磁力做功并改变电荷的速率 · The magnetic force does work and changes the speed",
        "correct": false
      },
      {
        "text": "磁力沿 B 的方向 · The magnetic force is along B",
        "correct": false
      }
    ],
    "solution": "F = q v × B。v 与 B 平行时力为零。磁场力不对电荷做功，不改变速率。 · F = q v × B. The force is zero when v is parallel to B. The magnetic force does no work and does not change the speed.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q013",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q014",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q016",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q017",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q018",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "安培环路 · Ampère's law",
    "type": "mcq",
    "stem": "在静磁情况下沿一条闭合曲线积分。哪项正确？ · In magnetostatics you integrate along a closed curve. Which statement is correct?",
    "choices": [
      {
        "text": "∮B·dl 等于 μ0 乘以环路包围的电流 · ∮B·dl equals μ0 times the current enclosed by the loop",
        "correct": true
      },
      {
        "text": "它等于 μ0 乘以空间中所有电流 · It equals μ0 times every current in space",
        "correct": false
      },
      {
        "text": "它只对无限长直导线成立 · It is true only for an infinite straight wire",
        "correct": false
      },
      {
        "text": "B 处处与电流平行 · B is parallel to the current everywhere",
        "correct": false
      }
    ],
    "solution": "∮B·dl = μ0 I_enc，I_enc 是穿过以该曲线为边界的曲面的电流。 · ∮B·dl = μ0 I_enc, where I_enc is the current through a surface bounded by the curve.",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.4",
        "label": "12.4 安培定律",
        "topicId": "em-u12:12.4"
      }
    ]
  },
  {
    "id": "em-u12-q019",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q020",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q021",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q022",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q023",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q024",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q025",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q026",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q028",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q029",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q031",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q032",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q034",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q035",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q036",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q037",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q038",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q039",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q040",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q041",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 2.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 2.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.4,
    "tol": 0.01,
    "answerLatex": "0.4\\,\\mathrm{N}",
    "solution": "F = ILB = 0.4 N。 · F = ILB = 0.4 N.",
    "solutionLatex": "F=(2.0)(0.50)(0.40)=0.4\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q042",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 4.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 4.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 0.8,
    "tol": 0.01,
    "answerLatex": "0.8\\,\\mathrm{N}",
    "solution": "F = ILB = 0.8 N。 · F = ILB = 0.8 N.",
    "solutionLatex": "F=(4.0)(0.50)(0.40)=0.8\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q043",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 5.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 5.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1,
    "tol": 0.01,
    "answerLatex": "1\\,\\mathrm{N}",
    "solution": "F = ILB = 1 N。 · F = ILB = 1 N.",
    "solutionLatex": "F=(5.0)(0.50)(0.40)=1\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q044",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "导线所受磁力 · Magnetic force on a wire",
    "type": "frq",
    "check": "numeric",
    "stem": "电流 8.0 A，磁场中的导线长 0.50 m，B=0.40 T 且与导线垂直。求力的大小（N）。 · The current is 8.0 A, the length in the field is 0.50 m, and B=0.40 T is perpendicular to the wire. Find the force (N).",
    "expected": 1.6,
    "tol": 0.01,
    "answerLatex": "1.6\\,\\mathrm{N}",
    "solution": "F = ILB = 1.6 N。 · F = ILB = 1.6 N.",
    "solutionLatex": "F=(8.0)(0.50)(0.40)=1.6\\,\\mathrm{N}",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.2",
        "label": "12.2 运动电荷与磁场",
        "topicId": "em-u12:12.2"
      }
    ]
  },
  {
    "id": "em-u12-q045",
    "title": "12.5 电流环的磁偶极矩",
    "type": "frq",
    "difficulty": "易",
    "calculator": false,
    "check": "numeric",
    "stem": "半径 0.040 m 的圆环有 200 匝，通 0.50 A 电流。求磁偶极矩大小（A·m²）。",
    "expected": 0.5,
    "tol": 0.01,
    "answerLatex": "5.0\\times10^{-1}\\,\\mathrm{A\\,m^{2}}",
    "solution": "A=πR²=5.03×10⁻³ m²；μ=NIA=200(0.50)(5.03×10⁻³)≈0.50 A·m²。",
    "solutionLatex": "\\mu=NIA=200(0.50)\\pi(0.040)^{2}\\approx0.50\\,\\mathrm{A\\,m^{2}}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.5",
        "label": "12.5 磁偶极与磁性材料",
        "topicId": "em-u12:12.5"
      }
    ]
  },
  {
    "id": "em-u12-q046",
    "title": "12.6 铁芯螺线管的磁场",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "理想螺线管每米 1000 匝，电流 2.0 A，铁芯相对磁导率 μ_r=500。求内部磁感应强度（T），取 μ₀=4π×10⁻⁷ T·m/A。",
    "expected": 1.26,
    "tol": 0.01,
    "answerLatex": "1.26\\,\\mathrm{T}",
    "solution": "B=μ_rμ₀nI=500(4π×10⁻⁷)(1000)(2.0)≈1.26 T。",
    "solutionLatex": "B=\\mu_r\\mu_0nI=500(4\\pi\\times10^{-7})(1000)(2.0)\\approx1.26\\,\\mathrm{T}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.6",
        "label": "12.6 磁导率与材料响应",
        "topicId": "em-u12:12.6"
      }
    ]
  },
  {
    "id": "em-u12-q047",
    "title": "12.8 霍尔电压",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stem": "厚度 t=1.0 mm 的金属条通电流 I=2.0 A，置于 B=0.50 T 的垂直磁场中。载流子数密度 n=8.5×10²⁸ m⁻³，q=1.6×10⁻¹⁹ C。求霍尔电压大小（V）。",
    "expected": 7.4e-8,
    "tol": 0.03,
    "answerLatex": "7.4\\times10^{-8}\\,\\mathrm{V}",
    "solution": "V_H=IB/(nqt)=1.0/(8.5×10²⁸·1.6×10⁻¹⁹·1.0×10⁻³)≈7.4×10⁻⁸ V。",
    "solutionLatex": "V_H=\\dfrac{IB}{nqt}=\\dfrac{(2.0)(0.50)}{(8.5\\times10^{28})(1.6\\times10^{-19})(1.0\\times10^{-3})}\\approx7.4\\times10^{-8}\\,\\mathrm{V}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.8",
        "label": "12.8 复合场与霍尔效应",
        "topicId": "em-u12:12.8"
      }
    ]
  },
  {
    "id": "em-u12-q048",
    "title": "12.9 四分之一圆弧中心的磁场",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "半径 R=0.050 m 的四分之一圆弧通电流 I=3.0 A。求圆心处磁感应强度大小（T），取 μ₀=4π×10⁻⁷ T·m/A。",
    "expected": 0.0000094,
    "tol": 0.03,
    "answerLatex": "9.4\\times10^{-6}\\,\\mathrm{T}",
    "solution": "B=μ₀Iθ/(4πR)，θ=π/2，代入得 ≈9.4×10⁻⁶ T。",
    "solutionLatex": "B=\\dfrac{\\mu_0I\\theta}{4\\pi R}=\\dfrac{(4\\pi\\times10^{-7})(3.0)(\\frac{\\pi}{2})}{4\\pi(0.050)}\\approx9.4\\times10^{-6}\\,\\mathrm{T}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于本轮 CED 覆盖。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.9",
        "label": "12.9 毕奥–萨伐尔积分与电流几何",
        "topicId": "em-u12:12.9"
      }
    ]
  },
  {
    "id": "em-u12-q049",
    "title": "12.7 运动质子的磁场",
    "type": "frq",
    "difficulty": "中",
    "calculator": true,
    "check": "numeric",
    "stem": "质子以 v=2.0×10⁶ m/s 沿 +x 方向运动。求其正上方 r=0.10 m 处的磁感应强度大小（T）。 · A proton moves at 2.0×10⁶ m/s along +x. Find the magnetic field magnitude at a point 0.10 m directly above it (T).",
    "expected": 3.2e-18,
    "tol": 0.03,
    "answerLatex": "3.2\\times10^{-18}\\,\\mathrm{T}",
    "solution": "该点 r 与 v 垂直，sinθ=1。B=(μ₀/4π)|q|v/r²=(1.0×10⁻⁷)(1.6×10⁻¹⁹)(2.0×10⁶) ÷ (0.10)²=3.2×10⁻¹⁸ T，方向出纸面。 · With r perpendicular to v, B=3.2×10⁻¹⁸ T out of the page.",
    "solutionLatex": "B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v}{r^{2}}=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(2.0\\times10^{6})}{(0.10)^{2}}=3.2\\times10^{-18}\\,\\mathrm{T}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 12.7 单运动电荷磁场。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.7",
        "label": "12.7 运动电荷产生的磁场",
        "topicId": "em-u12:12.7"
      }
    ]
  },
  {
    "id": "em-u12-q050",
    "title": "12.7 运动电荷磁场的比例推理",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "某运动电荷在观察点产生 B₀。若速度加倍、距离加倍、夹角由 90° 变为 30°，新磁场是 B₀ 的多少倍？ · A moving charge produces B₀ at a point. If v doubles, r doubles, and the angle changes from 90° to 30°, by what factor does B change?",
    "expected": 0.25,
    "tol": 0.02,
    "answerLatex": "0.25\\,B_0",
    "solution": "B∝v sinθ ÷ r²。速度因子 2，距离因子 1/4，角度因子 sin30°=0.5，故总因子 2×1/4×0.5=0.25。 · The factors are 2 for v, 1/4 for r², and 0.5 for sinθ, giving 0.25.",
    "solutionLatex": "\\dfrac{B}{B_0}=2\\cdot\\dfrac{1}{2^{2}}\\cdot\\sin30^{\\circ}=2\\cdot\\dfrac{1}{4}\\cdot\\dfrac{1}{2}=0.25",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 12.7 比例推理。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.7",
        "label": "12.7 运动电荷产生的磁场",
        "topicId": "em-u12:12.7"
      }
    ]
  },
  {
    "id": "em-u12-q051",
    "title": "12.10 同向双导线的零点",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "两根平行长直导线相距 d=0.40 m，电流同向，I₁=3.0 A、I₂=1.0 A。求零点到 I₁ 的距离（m）。 · Two long parallel wires 0.40 m apart carry same-direction currents I₁=3.0 A and I₂=1.0 A. Find the distance from I₁ to the zero-field point (m).",
    "expected": 0.3,
    "tol": 0.02,
    "answerLatex": "0.30\\,\\mathrm{m}",
    "solution": "同向电流的零点在两线之间，满足 I₁ ÷ r₁=I₂ ÷ r₂，且 r₁+r₂=0.40 m。代入得 3 ÷ r₁=1 ÷ (0.40−r₁)，解得 r₁=0.30 m。 · The zero point lies between the wires, where 3/r₁=1/(0.40−r₁), giving r₁=0.30 m.",
    "solutionLatex": "\\dfrac{3.0}{r_1}=\\dfrac{1.0}{0.40-r_1}\\;\\Longrightarrow\\;r_1=0.30\\,\\mathrm{m}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 12.10 同向双导线。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.10",
        "label": "12.10 多电流磁场叠加",
        "topicId": "em-u12:12.10"
      }
    ]
  },
  {
    "id": "em-u12-q052",
    "title": "12.10 反向双导线的零点",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stem": "两根平行长直导线相距 d=0.30 m，电流反向，I₁=4.0 A、I₂=1.0 A。求零点到较小电流 I₂ 的距离（m）。 · Two long parallel wires 0.30 m apart carry opposite currents I₁=4.0 A and I₂=1.0 A. Find the distance from the smaller current I₂ to the zero-field point (m).",
    "expected": 0.1,
    "tol": 0.03,
    "answerLatex": "0.10\\,\\mathrm{m}",
    "solution": "反向电流的零点在较小电流外侧。设到 I₂ 外侧距离为 x，则 r₂=x，r₁=0.30+x。由 4 ÷ (0.30+x)=1 ÷ x 得 x=0.10 m。 · The zero point is outside the smaller current. Solving 4/(0.30+x)=1/x gives x=0.10 m.",
    "solutionLatex": "\\dfrac{4.0}{0.30+x}=\\dfrac{1.0}{x}\\;\\Longrightarrow\\;x=0.10\\,\\mathrm{m}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 12.10 反向双导线。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.10",
        "label": "12.10 多电流磁场叠加",
        "topicId": "em-u12:12.10"
      }
    ]
  },
  {
    "id": "em-u12-q053",
    "title": "12.5 小磁针的磁力矩",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "磁偶极矩 μ=0.80 A·m² 的小磁针与匀强磁场 B=0.25 T 成 30°。求磁力矩大小（N·m）。 · A compass with magnetic moment 0.80 A·m² sits at 30° to a 0.25 T field. Find the torque magnitude (N·m).",
    "expected": 0.1,
    "tol": 0.02,
    "answerLatex": "0.10\\,\\mathrm{N\\,m}",
    "solution": "τ=μB sinθ=(0.80)(0.25)(0.50)=0.10 N·m，力矩使 μ 转向 B；阻尼后小磁针沿 B 停下。 · τ=0.10 N·m turns μ toward B; damping settles the needle along B.",
    "solutionLatex": "\\tau=\\mu B\\sin\\theta=(0.80)(0.25)\\sin30^{\\circ}=0.10\\,\\mathrm{N\\,m}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 12.5 磁偶极对齐。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.5",
        "label": "12.5 磁偶极与磁性材料",
        "topicId": "em-u12:12.5"
      }
    ]
  },
  {
    "id": "em-u12-q054",
    "title": "12.9 电流元磁场的比例推理",
    "type": "frq",
    "difficulty": "中",
    "calculator": false,
    "check": "numeric",
    "stem": "某电流元在 θ=90° 处产生 dB₀。若电流加倍、距离加倍、θ 变为 30°，新磁场是 dB₀ 的多少倍？ · A current element produces dB₀ at θ=90°. If I doubles, r doubles, and θ becomes 30°, by what factor does dB change?",
    "expected": 0.25,
    "tol": 0.02,
    "answerLatex": "0.25\\,dB_0",
    "solution": "dB∝I sinθ ÷ r²。因子为 2×0.5×1/4=0.25。场线仍与以导线为中心的圆相切，无径向或沿导线分量。 · The factors are 2×0.5×1/4=0.25; the field remains tangent to circles centered on the wire, with no radial or along-wire component.",
    "solutionLatex": "\\dfrac{dB}{dB_0}=2\\cdot\\sin30^{\\circ}\\cdot\\dfrac{1}{2^{2}}=2\\cdot\\dfrac{1}{2}\\cdot\\dfrac{1}{4}=0.25",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 12.9 电流元比例推理。",
    "topicLinks": [
      {
        "href": "#/t/em/em-u12/12.9",
        "label": "12.9 毕奥–萨伐尔积分与电流几何",
        "topicId": "em-u12:12.9"
      }
    ]
  }
];
