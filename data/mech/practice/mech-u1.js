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
    "title": "由静止匀加速 · Constant acceleration from rest",
    "text": "物体由静止开始，加速度 2 m/s²，运动 4 s。 · An object starts from rest with acceleration 2 m/s² for 4 s.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "v0",
          "0"
        ],
        [
          "a",
          "2 m/s²"
        ],
        [
          "t",
          "4 s"
        ]
      ]
    },
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  "stim-mech-u1-2": {
    "title": "水平抛出 · Horizontal launch",
    "text": "物体从 4.9 m 高处以 12 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。 · An object is launched horizontally at 12 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance.",
    "table": {
      "headers": [
        "量",
        "值"
      ],
      "rows": [
        [
          "v_x",
          "12 m/s"
        ],
        [
          "h",
          "4.9 m"
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
  },
  "stim-mech-u1-3": {
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
    "id": "mech-u1-set1",
    "title": "一维匀加速 · Constant acceleration",
    "sharedStimulus": "stim-mech-u1-1",
    "stimulus": {
      "title": "由静止匀加速 · Constant acceleration from rest",
      "text": "物体由静止开始，加速度 2 m/s²，运动 4 s。 · An object starts from rest with acceleration 2 m/s² for 4 s.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "v0",
            "0"
          ],
          [
            "a",
            "2 m/s²"
          ],
          [
            "t",
            "4 s"
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
        "id": "mech-u1-q001",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "匀加速公式 · Constant-acceleration equations",
        "type": "frq",
        "stem": "写出由静止开始的速度和位移公式。 · Write the speed and displacement formulas for motion that starts from rest.",
        "answerLatex": "v=at,\\quad x=\\dfrac{1}{2}at^{2}",
        "solution": "初速度为零。 · The initial velocity is zero.",
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
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "末速度 · Final speed",
        "type": "frq",
        "check": "numeric",
        "stem": "求 4 s 时的速度大小（m/s）。 · Find the speed at 4 s (m/s).",
        "expected": 8,
        "tol": 0.01,
        "answerLatex": "8\\,\\mathrm{m/s}",
        "solution": "v = at。 · v = at.",
        "solutionLatex": "v=at=(2)(4)=8\\,\\mathrm{m/s}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ]
      },
      {
        "id": "mech-u1-q003",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "位移 · Displacement",
        "type": "mcq",
        "stem": "这段时间内的位移是多少？ · What is the displacement during this interval?",
        "choices": [
          {
            "text": "16 m · 16 m",
            "correct": true
          },
          {
            "text": "8 m · 8 m",
            "correct": false
          },
          {
            "text": "32 m · 32 m",
            "correct": false
          },
          {
            "text": "4 m · 4 m",
            "correct": false
          }
        ],
        "solution": "x = ½ a t² = 16 m。漏掉 ½ 会得到 32 m，只用 vt 会得到 8 m。 · x = ½ a t² = 16 m. Dropping the ½ gives 32 m, and using only the final speed gives 8 m.",
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
    "title": "平抛 · Horizontal projectile",
    "sharedStimulus": "stim-mech-u1-2",
    "stimulus": {
      "title": "水平抛出 · Horizontal launch",
      "text": "物体从 4.9 m 高处以 12 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。 · An object is launched horizontally at 12 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance.",
      "table": {
        "headers": [
          "量",
          "值"
        ],
        "rows": [
          [
            "v_x",
            "12 m/s"
          ],
          [
            "h",
            "4.9 m"
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
    },
    "questions": [
      {
        "id": "mech-u1-q004",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "分运动 · Component motions",
        "type": "frq",
        "stem": "写出竖直下落时间和水平射程的符号关系。 · Write the symbolic relations for the fall time and the horizontal range.",
        "answerLatex": "h=\\dfrac{1}{2}gt^{2},\\quad R=v_x t",
        "solution": "两个方向的加速度彼此独立。 · The accelerations in the two directions are independent.",
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
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "水平射程 · Horizontal range",
        "type": "frq",
        "check": "numeric",
        "stem": "求落地时的水平射程（m）。 · Find the horizontal range at landing (m).",
        "expected": 12,
        "tol": 0.01,
        "answerLatex": "12\\,\\mathrm{m}",
        "solution": "t = 1 s，射程等于水平速度。 · t = 1 s, so the range equals the horizontal speed.",
        "solutionLatex": "t=\\sqrt{\\dfrac{2h}{g}}=\\sqrt{\\dfrac{9.8}{9.8}}=1\\,\\mathrm{s},\\quad R=v_x t=12\\,\\mathrm{m}",
        "topicLinks": [
          {
            "href": "#/t/mech/mech-u1/1.2",
            "label": "1.2 二维运动学",
            "topicId": "mech-u1:1.2"
          }
        ]
      },
      {
        "id": "mech-u1-q006",
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "谁决定飞行时间 · What sets the flight time",
        "type": "mcq",
        "stem": "若水平速度改为 6 m/s，高度不变。哪项正确？ · The horizontal speed is changed to 6 m/s and the height stays the same. Which statement is correct?",
        "choices": [
          {
            "text": "飞行时间不变，射程变为 6 m · The flight time is unchanged and the range becomes 6 m",
            "correct": true
          },
          {
            "text": "飞行时间减半 · The flight time is halved",
            "correct": false
          },
          {
            "text": "落地竖直速度减半 · The vertical landing speed is halved",
            "correct": false
          },
          {
            "text": "水平加速度变为 6 m/s² · The horizontal acceleration becomes 6 m/s²",
            "correct": false
          }
        ],
        "solution": "飞行时间仍由高度决定，射程减半。 · The flight time is still fixed by the height, and the range is halved.",
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
        "difficulty": "中",
        "sourceId": "openstax-university-physics",
        "source": "OpenStax University Physics Volumes 1–3",
        "license": "CC BY 4.0",
        "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
        "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
        "title": "水平速度加倍后的射程 · Range after the horizontal speed doubles",
        "type": "frq",
        "check": "numeric",
        "stem": "高度仍是 4.9 m，水平速度改为 24 m/s。求射程（m）。 · The height is still 4.9 m and the horizontal speed is now 24 m/s. Find the range (m).",
        "expected": 24,
        "tol": 0.01,
        "answerLatex": "24\\,\\mathrm{m}",
        "solution": "飞行时间仍是 1 s，射程加倍。 · The flight time is still 1 s, so the range doubles.",
        "solutionLatex": "R=(24)(1)=24\\,\\mathrm{m}",
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
    "kind": "set",
    "id": "mech-u1-set3",
    "title": "题组 3 · 共享刺激",
    "sharedStimulus": "stim-mech-u1-3",
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
        "id": "mech-u1-q008",
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
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ]
      },
      {
        "id": "mech-u1-q009",
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
            "href": "#/t/mech/mech-u1/1.1",
            "label": "1.1 一维运动学",
            "topicId": "mech-u1:1.1"
          }
        ]
      }
    ]
  },
  {
    "id": "mech-u1-q011",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的末速度 · Final speed from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 3 s。求末速度（m/s）。 · An object starts from rest and accelerates at 2 m/s² for 3 s. Find the final speed (m/s).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v = at = 6 m/s。 · v = at = 6 m/s.",
    "solutionLatex": "v=at=(2)(3)=6\\,\\mathrm{m/s}",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "平抛的飞行时间 · Flight time of a horizontal launch",
    "type": "mcq",
    "stem": "忽略空气阻力，两个物体从同一高度以不同的水平初速度抛出。哪项正确？ · Neglecting air resistance, two objects are launched horizontally from the same height at different speeds. Which statement is correct?",
    "choices": [
      {
        "text": "同时落地；水平速度大的射程更大 · They land together; the larger horizontal speed travels farther",
        "correct": true
      },
      {
        "text": "水平速度大的在空中停留更久 · The larger horizontal speed stays in the air longer",
        "correct": false
      },
      {
        "text": "竖直加速度随水平速度增大 · The vertical acceleration grows with horizontal speed",
        "correct": false
      },
      {
        "text": "落地时的竖直速度与水平速度成正比 · The landing vertical speed is proportional to the horizontal speed",
        "correct": false
      }
    ],
    "solution": "竖直方向都是从静止下落，飞行时间只由高度决定；水平速度只改变射程。 · Both fall vertically from rest, so the flight time depends only on the height. Horizontal speed changes the range.",
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
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的位移 · Displacement from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求位移（m）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the displacement (m).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{m}",
    "solution": "x = ½at² = 36 m。 · x = ½at² = 36 m.",
    "solutionLatex": "x=\\dfrac{1}{2}(2)(6)^{2}=36\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q015",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "平抛射程 · Projectile range",
    "type": "frq",
    "check": "numeric",
    "stem": "物体从 4.9 m 高处以 10 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。求水平射程（m）。 · An object is launched horizontally at 10 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance. Find the horizontal range (m).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{m}",
    "solution": "下落时间是 1 s，射程等于水平速度。 · The fall time is 1 s, so the range equals the horizontal speed.",
    "solutionLatex": "t=\\sqrt{\\dfrac{2\\times 4.9}{9.8}}=1\\,\\mathrm{s},\\quad R=10\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q016",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的末速度 · Final speed from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求末速度（m/s）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the final speed (m/s).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mathrm{m/s}",
    "solution": "v = at = 12 m/s。 · v = at = 12 m/s.",
    "solutionLatex": "v=at=(2)(6)=12\\,\\mathrm{m/s}",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的位移 · Displacement from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求位移（m）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the displacement (m).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{m}",
    "solution": "x = ½at² = 36 m。 · x = ½at² = 36 m.",
    "solutionLatex": "x=\\dfrac{1}{2}(2)(6)^{2}=36\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q019",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "平抛射程 · Projectile range",
    "type": "frq",
    "check": "numeric",
    "stem": "物体从 4.9 m 高处以 8 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。求水平射程（m）。 · An object is launched horizontally at 8 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance. Find the horizontal range (m).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{m}",
    "solution": "下落时间是 1 s，射程等于水平速度。 · The fall time is 1 s, so the range equals the horizontal speed.",
    "solutionLatex": "t=\\sqrt{\\dfrac{2\\times 4.9}{9.8}}=1\\,\\mathrm{s},\\quad R=8\\,\\mathrm{m}",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的末速度 · Final speed from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 5 s。求末速度（m/s）。 · An object starts from rest and accelerates at 2 m/s² for 5 s. Find the final speed (m/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{m/s}",
    "solution": "v = at = 10 m/s。 · v = at = 10 m/s.",
    "solutionLatex": "v=at=(2)(5)=10\\,\\mathrm{m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q022",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的位移 · Displacement from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求位移（m）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the displacement (m).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{m}",
    "solution": "x = ½at² = 36 m。 · x = ½at² = 36 m.",
    "solutionLatex": "x=\\dfrac{1}{2}(2)(6)^{2}=36\\,\\mathrm{m}",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "平抛射程 · Projectile range",
    "type": "frq",
    "check": "numeric",
    "stem": "物体从 4.9 m 高处以 6 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。求水平射程（m）。 · An object is launched horizontally at 6 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance. Find the horizontal range (m).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{m}",
    "solution": "下落时间是 1 s，射程等于水平速度。 · The fall time is 1 s, so the range equals the horizontal speed.",
    "solutionLatex": "t=\\sqrt{\\dfrac{2\\times 4.9}{9.8}}=1\\,\\mathrm{s},\\quad R=6\\,\\mathrm{m}",
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
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的末速度 · Final speed from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 4 s。求末速度（m/s）。 · An object starts from rest and accelerates at 2 m/s² for 4 s. Find the final speed (m/s).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{m/s}",
    "solution": "v = at = 8 m/s。 · v = at = 8 m/s.",
    "solutionLatex": "v=at=(2)(4)=8\\,\\mathrm{m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q027",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的位移 · Displacement from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求位移（m）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the displacement (m).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{m}",
    "solution": "x = ½at² = 36 m。 · x = ½at² = 36 m.",
    "solutionLatex": "x=\\dfrac{1}{2}(2)(6)^{2}=36\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q028",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "平抛射程 · Projectile range",
    "type": "frq",
    "check": "numeric",
    "stem": "物体从 4.9 m 高处以 15 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。求水平射程（m）。 · An object is launched horizontally at 15 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance. Find the horizontal range (m).",
    "expected": 15,
    "tol": 0.01,
    "answerLatex": "15\\,\\mathrm{m}",
    "solution": "下落时间是 1 s，射程等于水平速度。 · The fall time is 1 s, so the range equals the horizontal speed.",
    "solutionLatex": "t=\\sqrt{\\dfrac{2\\times 4.9}{9.8}}=1\\,\\mathrm{s},\\quad R=15\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q030",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的末速度 · Final speed from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 3 s。求末速度（m/s）。 · An object starts from rest and accelerates at 2 m/s² for 3 s. Find the final speed (m/s).",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6\\,\\mathrm{m/s}",
    "solution": "v = at = 6 m/s。 · v = at = 6 m/s.",
    "solutionLatex": "v=at=(2)(3)=6\\,\\mathrm{m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q031",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的位移 · Displacement from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求位移（m）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the displacement (m).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{m}",
    "solution": "x = ½at² = 36 m。 · x = ½at² = 36 m.",
    "solutionLatex": "x=\\dfrac{1}{2}(2)(6)^{2}=36\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q033",
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "平抛射程 · Projectile range",
    "type": "frq",
    "check": "numeric",
    "stem": "物体从 4.9 m 高处以 10 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。求水平射程（m）。 · An object is launched horizontally at 10 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance. Find the horizontal range (m).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{m}",
    "solution": "下落时间是 1 s，射程等于水平速度。 · The fall time is 1 s, so the range equals the horizontal speed.",
    "solutionLatex": "t=\\sqrt{\\dfrac{2\\times 4.9}{9.8}}=1\\,\\mathrm{s},\\quad R=10\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  },
  {
    "id": "mech-u1-q034",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的末速度 · Final speed from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求末速度（m/s）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the final speed (m/s).",
    "expected": 12,
    "tol": 0.01,
    "answerLatex": "12\\,\\mathrm{m/s}",
    "solution": "v = at = 12 m/s。 · v = at = 12 m/s.",
    "solutionLatex": "v=at=(2)(6)=12\\,\\mathrm{m/s}",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的位移 · Displacement from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 6 s。求位移（m）。 · An object starts from rest and accelerates at 2 m/s² for 6 s. Find the displacement (m).",
    "expected": 36,
    "tol": 0.01,
    "answerLatex": "36\\,\\mathrm{m}",
    "solution": "x = ½at² = 36 m。 · x = ½at² = 36 m.",
    "solutionLatex": "x=\\dfrac{1}{2}(2)(6)^{2}=36\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q037",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "平抛射程 · Projectile range",
    "type": "frq",
    "check": "numeric",
    "stem": "物体从 4.9 m 高处以 8 m/s 水平抛出。取 g=9.8 m/s²，忽略空气阻力。求水平射程（m）。 · An object is launched horizontally at 8 m/s from a height of 4.9 m. Take g=9.8 m/s² and ignore air resistance. Find the horizontal range (m).",
    "expected": 8,
    "tol": 0.01,
    "answerLatex": "8\\,\\mathrm{m}",
    "solution": "下落时间是 1 s，射程等于水平速度。 · The fall time is 1 s, so the range equals the horizontal speed.",
    "solutionLatex": "t=\\sqrt{\\dfrac{2\\times 4.9}{9.8}}=1\\,\\mathrm{s},\\quad R=8\\,\\mathrm{m}",
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
    "difficulty": "中",
    "sourceId": "openstax-university-physics",
    "source": "OpenStax University Physics Volumes 1–3",
    "license": "CC BY 4.0",
    "sourceUrl": "https://openstax.org/details/books/university-physics-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy.",
    "title": "由静止的末速度 · Final speed from rest",
    "type": "frq",
    "check": "numeric",
    "stem": "物体由静止以 2 m/s² 匀加速 5 s。求末速度（m/s）。 · An object starts from rest and accelerates at 2 m/s² for 5 s. Find the final speed (m/s).",
    "expected": 10,
    "tol": 0.01,
    "answerLatex": "10\\,\\mathrm{m/s}",
    "solution": "v = at = 10 m/s。 · v = at = 10 m/s.",
    "solutionLatex": "v=at=(2)(5)=10\\,\\mathrm{m/s}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.1",
        "label": "1.1 一维运动学",
        "topicId": "mech-u1:1.1"
      }
    ]
  },
  {
    "id": "mech-u1-q040",
    "title": "匀加速直线运动 · Constant acceleration in one dimension",
    "type": "frq",
    "difficulty": "难",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\text{一物体从静止开始以 }a=2.0\\,\\mathrm{m/s^2}\\text{ 匀加速 }3.0\\,\\mathrm{s}\\text{，求末速度 }v",
    "expected": 6,
    "tol": 0.01,
    "answerLatex": "6.0\\,\\mathrm{m\\,s^{-1}}",
    "solution": "由匀加速公式得 v=6.0 m/s。 · Use the constant-acceleration equations.",
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
    "expected": 5,
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
    "expected": 6,
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
    "stem": "无人机从原点出发（r₀=(0, 0, 0) m），初速度 v₀=(1.0, 2.0, −1.0) m/s，恒定加速度 a=(0.50, −0.25, 0.75) m/s²。求 t=4.0 s 时到原点的距离（m）。 · A drone starts from the origin with initial position r₀=(0, 0, 0) m, initial velocity v₀=(1.0, 2.0, −1.0) m/s, and constant acceleration a=(0.50, −0.25, 0.75) m/s². Find its distance from the origin at t=4.0 s (m).",
    "expected": 10.2,
    "tol": 0.02,
    "answerLatex": "10.2\\,\\mathrm{m}",
    "solution": "从原点出发（r₀=0），r=(8.0, 6.0, 2.0) m；|r|=√(8²+6²+2²)=10.2 m。",
    "solutionLatex": "\\vec r_0=\\vec 0,\\quad \\vec r=\\vec v_0t+\\dfrac12\\vec at^{2}=(8.0,6.0,2.0)\\,\\mathrm{m},\\quad |\\vec r|=10.2\\,\\mathrm{m}",
    "topicLinks": [
      {
        "href": "#/t/mech/mech-u1/1.2",
        "label": "1.2 二维运动学",
        "topicId": "mech-u1:1.2"
      }
    ]
  }
];
