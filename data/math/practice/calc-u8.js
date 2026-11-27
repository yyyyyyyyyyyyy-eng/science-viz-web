/** Practice bank for calc-u8 — AP-style, attributed OER adaptations */
export const UNIT_REF = {
  "id": "calc-u8",
  "code": "8",
  "titleZh": "积分的应用 · applications of integration",
  "titleEn": "Applications of Integration",
  "layer": "ap",
  "subject": "math"
};
export const stimuli = {};
export const problems = [
  {
    "kind": "set",
    "id": "calc-u8-extra1",
    "title": "两曲线间的面积与体积 · area and volume between curves",
    "stimulus": {
      "title": "区域 R · region R",
      "text": "区域 R 由 y=x² 与 y=2x 围成。下表给出若干 x 处的上下边界。 · Region R is bounded by y=x² and y=2x. The table gives the upper and lower boundaries at several x.",
      "table": {
        "headers": [
          "x",
          "y=x²",
          "y=2x"
        ],
        "rows": [
          [
            "0",
            "0",
            "0"
          ],
          [
            "0.5",
            "0.25",
            "1"
          ],
          [
            "1",
            "1",
            "2"
          ],
          [
            "1.5",
            "2.25",
            "3"
          ],
          [
            "2",
            "4",
            "4"
          ]
        ]
      },
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u8-q001",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "面积 · area",
        "check": "numeric",
        "stem": "求 R 的面积。 · Find the area of R.",
        "expected": 1.3333333333333333,
        "tol": 0.01,
        "answerLatex": "\\dfrac{4}{3}",
        "solution": "先求上下边界之差，再积分。 · First subtract the lower boundary from the upper one, then integrate.",
        "solutionLatex": "\\int_0^2(2x-x^2)\\,\\mathrm{d}x=\\left[x^2-\\dfrac{x^3}{3}\\right]_0^2=4-\\dfrac{8}{3}=\\dfrac{4}{3}"
      },
      {
        "id": "calc-u8-q002",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "绕 x 轴体积 · volume about the x-axis",
        "check": "symbolic",
        "stem": "将 R 绕 x 轴旋转，用垫圈法求体积（写成含 π 的精确值）。 · Rotate R about the x-axis and find the volume by the washer method, as an exact value that includes π.",
        "expected": "64*pi/15",
        "answerLatex": "\\dfrac{64\\pi}{15}",
        "solution": "垫圈法：外半径为 2x，内半径为 x²。 · Washer method: the outer radius is 2x and the inner radius is x².",
        "solutionLatex": "\\pi\\int_0^2\\left[(2x)^2-(x^2)^2\\right]\\mathrm{d}x=\\pi\\left(\\dfrac{32}{3}-\\dfrac{32}{5}\\right)=\\dfrac{64\\pi}{15}"
      },
      {
        "id": "calc-u8-q003",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "弧长被积函数 · arc-length integrand",
        "check": "symbolic",
        "stem": "写出 y=x² 在 [0,2] 上弧长积分的被积函数。 · Write the integrand of the arc-length integral for y=x² on [0,2].",
        "expected": "sqrt(1+4*x^2)",
        "answerLatex": "\\sqrt{1+4x^{2}}",
        "solution": "弧长元为 √(1+(y′)²)，y′=2x。 · The arc-length element is √(1+(y′)²), and y′=2x."
      },
      {
        "id": "calc-u8-q004",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "垫圈法理由 · why the washer method",
        "stem": "为什么绕 x 轴旋转 R 时要用垫圈法而不是圆盘法？ · Why use washers rather than disks when R is rotated about the x-axis?",
        "answer": "R 不贴 x 轴；旋转后截面是中空的环，外半径为 2x，内半径为 x²。 · R does not touch the x-axis. After rotation the cross section is a ring, with outer radius 2x and inner radius x².",
        "solution": "区域与旋转轴之间有间隙时用垫圈法。 · Use washers when there is a gap between the region and the axis of rotation."
      }
    ]
  },
  {
    "id": "calc-u8-q005",
    "title": "8.1 计算 · 8.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q006",
    "title": "8.2 概念 · 8.2 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「位置速度加速度」，下列正确的是？ · Which of the following is correct about “Connecting Position, Velocity, and Acceleration Using Integrals”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q007",
    "title": "8.3 计算 · 8.3 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q008",
    "title": "8.4 论述 · 曲线间面积 · 8.4 Argument: Finding the Area Between Curves Expressed as Functions of x",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「曲线间面积」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Finding the Area Between Curves Expressed as Functions of x”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q009",
    "title": "8.5 计算 · 8.5 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q010",
    "title": "8.6 概念 · 8.6 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「曲线间面积其他」，下列正确的是？ · Which of the following is correct about “Finding Area Between Curves That Intersect at More Than Two Points”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q011",
    "title": "8.7 计算 · 8.7 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q012",
    "title": "8.8 论述 · 已知截面体积 · 8.8 Argument: Volumes with Cross Sections: Triangles and Semicircles",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「已知截面体积」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volumes with Cross Sections: Triangles and Semicircles”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q013",
    "title": "8.9 计算 · 8.9 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q014",
    "title": "8.10 概念 · 8.10 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「圆盘法其他轴」，下列正确的是？ · Which of the following is correct about “Volume with Disc Method: Revolving Around Other Axes”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q015",
    "title": "8.11 计算 · 8.11 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q016",
    "title": "8.12 论述 · 垫圈法其他轴 · 8.12 Argument: Volume with Washer Method: Revolving Around Other Axes",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「垫圈法其他轴」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volume with Washer Method: Revolving Around Other Axes”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q017",
    "title": "8.13 计算 · 8.13 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q018",
    "title": "8.1 概念 · 8.1 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「积分求平均」，下列正确的是？ · Which of the following is correct about “Finding the Average Value of a Function on an Interval”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q019",
    "title": "8.2 计算 · 8.2 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q020",
    "title": "8.3 论述 · 累积变化率 · 8.3 Argument: Using Accumulation Functions and Definite Integrals in Applied Contexts",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「累积变化率」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Using Accumulation Functions and Definite Integrals in Applied Contexts”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q021",
    "title": "8.4 计算 · 8.4 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q022",
    "title": "8.5 概念 · 8.5 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「曲线间面积 y」，下列正确的是？ · Which of the following is correct about “Finding the Area Between Curves Expressed as Functions of y”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q023",
    "title": "8.6 计算 · 8.6 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q024",
    "title": "8.7 论述 · 截面法：正方形与矩形 · 8.7 Argument: Volumes with Cross Sections: Squares and Rectangles",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「截面法：正方形与矩形」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volumes with Cross Sections: Squares and Rectangles”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q025",
    "title": "8.8 计算 · 8.8 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q026",
    "title": "8.9 概念 · 8.9 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「圆盘法」，下列正确的是？ · Which of the following is correct about “Volume with Disc Method: Revolving Around the x- or y-Axis”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q027",
    "title": "8.10 计算 · 8.10 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q028",
    "title": "8.11 论述 · 垫圈法 · 8.11 Argument: Volume with Washer Method: Revolving Around the x- or y-Axis",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「垫圈法」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volume with Washer Method: Revolving Around the x- or y-Axis”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q029",
    "title": "8.12 计算 · 8.12 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q030",
    "title": "8.13 概念 · 8.13 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「弧长」，下列正确的是？ · Which of the following is correct about “The Arc Length of a Smooth, Planar Curve and Distance Traveled”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q031",
    "title": "8.1 计算 · 8.1 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q032",
    "title": "8.2 论述 · 位置速度加速度 · 8.2 Argument: Connecting Position, Velocity, and Acceleration Using Integrals",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「位置速度加速度」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Connecting Position, Velocity, and Acceleration Using Integrals”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q033",
    "title": "8.3 计算 · 8.3 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q034",
    "title": "8.4 概念 · 8.4 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「曲线间面积」，下列正确的是？ · Which of the following is correct about “Finding the Area Between Curves Expressed as Functions of x”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q035",
    "title": "8.5 计算 · 8.5 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q036",
    "title": "8.6 论述 · 曲线间面积其他 · 8.6 Argument: Finding Area Between Curves That Intersect at More Than Two Points",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「曲线间面积其他」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Finding Area Between Curves That Intersect at More Than Two Points”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q037",
    "title": "8.7 计算 · 8.7 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q038",
    "title": "8.8 概念 · 8.8 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「已知截面体积」，下列正确的是？ · Which of the following is correct about “Volumes with Cross Sections: Triangles and Semicircles”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q039",
    "title": "8.9 计算 · 8.9 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q040",
    "title": "8.10 论述 · 圆盘法其他轴 · 8.10 Argument: Volume with Disc Method: Revolving Around Other Axes",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「圆盘法其他轴」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volume with Disc Method: Revolving Around Other Axes”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q041",
    "title": "8.11 计算 · 8.11 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q042",
    "title": "8.12 概念 · 8.12 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「垫圈法其他轴」，下列正确的是？ · Which of the following is correct about “Volume with Washer Method: Revolving Around Other Axes”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q043",
    "title": "8.13 计算 · 8.13 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q044",
    "title": "8.1 论述 · 积分求平均 · 8.1 Argument: Finding the Average Value of a Function on an Interval",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「积分求平均」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Finding the Average Value of a Function on an Interval”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q045",
    "title": "8.2 计算 · 8.2 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q046",
    "title": "8.3 概念 · 8.3 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「累积变化率」，下列正确的是？ · Which of the following is correct about “Using Accumulation Functions and Definite Integrals in Applied Contexts”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q047",
    "title": "8.4 计算 · 8.4 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q048",
    "title": "8.5 论述 · 曲线间面积 y · 8.5 Argument: Finding the Area Between Curves Expressed as Functions of y",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「曲线间面积 y」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Finding the Area Between Curves Expressed as Functions of y”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q049",
    "title": "8.6 计算 · 8.6 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q050",
    "title": "8.7 概念 · 8.7 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「截面法：正方形与矩形」，下列正确的是？ · Which of the following is correct about “Volumes with Cross Sections: Squares and Rectangles”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q051",
    "title": "8.8 计算 · 8.8 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q052",
    "title": "8.9 论述 · 圆盘法 · 8.9 Argument: Volume with Disc Method: Revolving Around the x- or y-Axis",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「圆盘法」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volume with Disc Method: Revolving Around the x- or y-Axis”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q053",
    "title": "8.10 计算 · 8.10 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q054",
    "title": "8.11 概念 · 8.11 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「垫圈法」，下列正确的是？ · Which of the following is correct about “Volume with Washer Method: Revolving Around the x- or y-Axis”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q055",
    "title": "8.12 计算 · 8.12 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q056",
    "title": "8.13 论述 · 弧长 · 8.13 Argument: The Arc Length of a Smooth, Planar Curve and Distance Traveled",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「弧长」：说明净面积与总面积（绝对值）在应用中的区别。 · For “The Arc Length of a Smooth, Planar Curve and Distance Traveled”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q057",
    "title": "8.1 计算 · 8.1 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q058",
    "title": "8.2 概念 · 8.2 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「位置速度加速度」，下列正确的是？ · Which of the following is correct about “Connecting Position, Velocity, and Acceleration Using Integrals”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q059",
    "title": "8.3 计算 · 8.3 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q060",
    "title": "8.4 论述 · 曲线间面积 · 8.4 Argument: Finding the Area Between Curves Expressed as Functions of x",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「曲线间面积」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Finding the Area Between Curves Expressed as Functions of x”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q061",
    "title": "8.5 计算 · 8.5 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q062",
    "title": "8.6 概念 · 8.6 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「曲线间面积其他」，下列正确的是？ · Which of the following is correct about “Finding Area Between Curves That Intersect at More Than Two Points”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q063",
    "title": "8.7 计算 · 8.7 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q064",
    "title": "8.8 论述 · 已知截面体积 · 8.8 Argument: Volumes with Cross Sections: Triangles and Semicircles",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「已知截面体积」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volumes with Cross Sections: Triangles and Semicircles”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q065",
    "title": "8.9 计算 · 8.9 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q066",
    "title": "8.10 概念 · 8.10 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「圆盘法其他轴」，下列正确的是？ · Which of the following is correct about “Volume with Disc Method: Revolving Around Other Axes”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q067",
    "title": "8.11 计算 · 8.11 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q068",
    "title": "8.12 论述 · 垫圈法其他轴 · 8.12 Argument: Volume with Washer Method: Revolving Around Other Axes",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「垫圈法其他轴」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volume with Washer Method: Revolving Around Other Axes”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q069",
    "title": "8.13 计算 · 8.13 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q070",
    "title": "8.1 概念 · 8.1 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「积分求平均」，下列正确的是？ · Which of the following is correct about “Finding the Average Value of a Function on an Interval”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q071",
    "title": "8.2 计算 · 8.2 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q072",
    "title": "8.3 论述 · 累积变化率 · 8.3 Argument: Using Accumulation Functions and Definite Integrals in Applied Contexts",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「累积变化率」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Using Accumulation Functions and Definite Integrals in Applied Contexts”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q073",
    "title": "8.4 计算 · 8.4 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q074",
    "title": "8.5 概念 · 8.5 Concept",
    "type": "mcq",
    "difficulty": "易 · Easy",
    "stem": "关于「曲线间面积 y」，下列正确的是？ · Which of the following is correct about “Finding the Area Between Curves Expressed as Functions of y”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q075",
    "title": "8.6 计算 · 8.6 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q076",
    "title": "8.7 论述 · 截面法：正方形与矩形 · 8.7 Argument: Volumes with Cross Sections: Squares and Rectangles",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "stem": "关于「截面法：正方形与矩形」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volumes with Cross Sections: Squares and Rectangles”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q077",
    "title": "8.8 计算 · 8.8 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q078",
    "title": "8.9 概念 · 8.9 Concept",
    "type": "mcq",
    "difficulty": "中 · Medium",
    "stem": "关于「圆盘法」，下列正确的是？ · Which of the following is correct about “Volume with Disc Method: Revolving Around the x- or y-Axis”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q079",
    "title": "8.10 计算 · 8.10 Calculation",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q080",
    "title": "8.11 论述 · 垫圈法 · 8.11 Argument: Volume with Washer Method: Revolving Around the x- or y-Axis",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "stem": "关于「垫圈法」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Volume with Washer Method: Revolving Around the x- or y-Axis”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q081",
    "title": "8.12 计算 · 8.12 Calculation",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=",
    "expected": 0.16666666666666666,
    "tol": 0.01,
    "answerLatex": "\\dfrac{1}{6}",
    "solution": "两曲线间面积：积分结果为六分之一。 · Area between the curves: the integral equals one sixth.",
    "solutionLatex": "\\int_0^1\\left(x-x^{2}\\right)\\mathrm{d}x=\\dfrac{1}{6}",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q082",
    "title": "8.13 概念 · 8.13 Concept",
    "type": "mcq",
    "difficulty": "难 · Hard",
    "stem": "关于「弧长」，下列正确的是？ · Which of the following is correct about “The Arc Length of a Smooth, Planar Curve and Distance Traveled”?",
    "choices": [
      {
        "text": "定积分是黎曼和的极限，可表示净变化量 · A definite integral is a limit of Riemann sums and can represent a net change",
        "correct": true
      },
      {
        "text": "代数变形可以随意除以可能为零的因式而不作讨论 · Algebraic steps may divide by a factor that might be zero, with no discussion of that case",
        "correct": false
      },
      {
        "text": "图像与符号表达式可以互相矛盾仍都正确 · A graph and a symbolic expression may contradict each other and both still be correct",
        "correct": false
      },
      {
        "text": "单位与量纲在数学建模中可以忽略 · Units and dimensions may be ignored in a mathematical model",
        "correct": false
      }
    ],
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q083",
    "title": "8.1 计算 · 8.1 Calculation",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stemLatex": "\\pi\\int_0^1 x^{4}\\,\\mathrm{d}x=",
    "expected": 0.6283185307179586,
    "tol": 0.02,
    "answerLatex": "\\dfrac{\\pi}{5}",
    "solution": "圆盘法：π∫₀¹x⁴dx，结果为 π 的五分之一。 · Disk method: π times the integral from 0 to 1 of x⁴ dx equals one fifth of π.",
    "sourceId": "openstax-calculus",
    "source": "OpenStax Calculus Volumes 1–3",
    "license": "CC BY-NC-SA 4.0",
    "sourceUrl": "https://openstax.org/details/books/calculus-volume-1",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "id": "calc-u8-q084",
    "title": "8.2 论述 · 位置速度加速度 · 8.2 Argument: Connecting Position, Velocity, and Acceleration Using Integrals",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "stem": "关于「位置速度加速度」：说明净面积与总面积（绝对值）在应用中的区别。 · For “Connecting Position, Velocity, and Acceleration Using Integrals”, explain how net area differs from total area (absolute value) in applications",
    "answerLatex": "\\int_0^{2\\pi}\\sin x\\,\\mathrm{d}x=0,\\qquad \\int_0^{2\\pi}|\\sin x|\\,\\mathrm{d}x=4",
    "answer": "净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。 · Net area adds signed area, so the integral is negative where the curve is below the x-axis; total area integrates |f(x)| and is never negative. For example, the integral of sin x from 0 to 2π equals 0 and is the net area, while the integral of |sin x| from 0 to 2π equals 4 and is the total area.",
    "solution": "净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。 · Net area answers displacement and net change; total area answers the amount actually traversed. They are equal only when the function does not change sign.",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "Adapted for AP-style practice; not a verbatim copy."
  },
  {
    "kind": "set",
    "id": "calc-u8-frq1",
    "title": "已知截面体积 · volume from known cross sections",
    "stimulus": {
      "title": "区域与垂直截面 · region and vertical cross sections",
      "text": "底面区域由 y=√x、x=4 与 x 轴围成。垂直于 x 轴的截面分别取正方形、等边三角形和半圆。 · The base is bounded by y=√x, x=4, and the x-axis. Cross sections perpendicular to the x-axis are squares, equilateral triangles, or semicircles.",
      "textLatex": "0\\le x\\le4,\\qquad 0\\le y\\le\\sqrt{x}",
      "sourceId": "original",
      "source": "Original AP-style item (this project)",
      "license": "Project",
      "sourceUrl": "",
      "sourceNote": "原创 AP 风格题，非官方 FRQ。 · Original AP-style item, not an official free-response question."
    },
    "questions": [
      {
        "id": "calc-u8-frq1-q1",
        "type": "frq",
        "difficulty": "中 · Medium",
        "calculator": false,
        "title": "正方形截面 · square cross section",
        "check": "numeric",
        "stem": "若截面是边长为 √x 的正方形，求体积。 · If the cross section is a square of side √x, find the volume.",
        "expected": 8,
        "tol": 0.01,
        "answerLatex": "8",
        "solution": "正方形截面的边长为 √x，面积就是 x。 · The side of the square is √x, so its area is x.",
        "solutionLatex": "A(x)=(\\sqrt{x})^{2}=x,\\qquad V=\\int_0^4 x\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}\\right]_0^4=8"
      },
      {
        "id": "calc-u8-frq1-q2",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "等边三角形截面 · equilateral-triangle cross section",
        "check": "numeric",
        "stem": "若截面是边长为 √x 的等边三角形，求体积。 · If the cross section is an equilateral triangle of side √x, find the volume.",
        "expected": 3.4641016151377544,
        "tol": 0.01,
        "answerLatex": "2\\sqrt{3}",
        "solution": "等边三角形面积为四分之 √3 乘以边长平方，再对 x 积分。 · The area of an equilateral triangle is √3/4 times the side squared; then integrate in x.",
        "solutionLatex": "A(x)=\\dfrac{\\sqrt{3}}{4}(\\sqrt{x})^{2}=\\dfrac{\\sqrt{3}}{4}x,\\qquad V=\\dfrac{\\sqrt{3}}{4}\\int_0^4 x\\,\\mathrm{d}x=2\\sqrt{3}"
      },
      {
        "id": "calc-u8-frq1-q3",
        "type": "frq",
        "difficulty": "难 · Hard",
        "calculator": false,
        "title": "半圆截面 · semicircular cross section",
        "check": "numeric",
        "stem": "若截面是以 √x 为直径的半圆，求体积。 · If the cross section is a semicircle with diameter √x, find the volume.",
        "expected": 3.141592653589793,
        "tol": 0.01,
        "answerLatex": "\\pi",
        "solution": "直径为 √x，故半径为它的一半；半圆面积为半径平方的 π 倍的一半。 · The diameter is √x, so the radius is half of that; the semicircle’s area is half of π times the radius squared.",
        "solutionLatex": "r=\\dfrac{\\sqrt{x}}{2},\\qquad A(x)=\\dfrac{1}{2}\\pi\\left(\\dfrac{\\sqrt{x}}{2}\\right)^{2}=\\dfrac{\\pi}{8}x,\\qquad V=\\dfrac{\\pi}{8}\\cdot8=\\pi"
      }
    ]
  },
  {
    "id": "calc-u8-b09-q1",
    "title": "8.1 区间平均值 · Average value on an interval",
    "type": "frq",
    "difficulty": "易 · Easy",
    "calculator": false,
    "check": "numeric",
    "stem": "求 f(x)=x² 在 [0,3] 上的平均值。 · Find the average value of f(x)=x² on [0,3].",
    "expected": 3,
    "tol": 0.01,
    "answerLatex": "3",
    "solution": "平均值为区间长度分之定积分：1/(3−0)·∫₀³x²dx=1/3·9=3。它等于同面积矩形的高度，而不是函数在端点的平均值。 · The average value is the definite integral divided by the interval length: 1/(3−0)·∫₀³x² dx=1/3·9=3. It is the height of the equal-area rectangle, not the average of the endpoint values.",
    "solutionLatex": "f_{avg}=\\dfrac{1}{3-0}\\int_0^3x^2\\,dx=\\dfrac{1}{3}\\left[\\dfrac{x^3}{3}\\right]_0^3=\\dfrac{9}{3}=3",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 8.1 平均值与等面积矩形。 · Original AP-style item, not an official item; for 8.1, average value and a rectangle of equal area.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u8/8.1",
        "label": "8.1 积分求平均 · 8.1 Finding the Average Value of a Function on an Interval",
        "topicId": "calc-u8:8.1"
      }
    ]
  },
  {
    "id": "calc-u8-b09-q2",
    "title": "8.3 净变化与总变化 · Net change versus total change",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stem": "质点沿直线运动，速度 v(t)=t−3（m/s），0≤t≤4。求 0≤t≤4 内的位移（m，带符号）。 · A particle moves along a line with velocity v(t)=t−3 (m/s), 0≤t≤4. Find its displacement on 0≤t≤4 (m, with sign).",
    "expected": -4,
    "tol": 0.01,
    "answerLatex": "-4\\,\\mathrm{m}",
    "solution": "位移是速度的定积分：∫₀⁴(t−3)dt=[t²/2−3t]₀⁴=8−12=−4 m。若问总路程，则 ∫₀⁴|t−3|dt=4.5+0.5=5 m；净变化与总变化不同。 · Displacement is the definite integral of velocity: ∫₀⁴(t−3)dt=8−12=−4 m. Total distance would be ∫₀⁴|t−3|dt=4.5+0.5=5 m; net change differs from total change.",
    "solutionLatex": "\\int_0^4(t-3)\\,dt=\\left[\\dfrac{t^2}{2}-3t\\right]_0^4=8-12=-4\\,\\mathrm{m}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 8.3 净变化定理与总变化对比。 · Original AP-style item, not an official item; for 8.3, the net-change theorem compared with total change.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u8/8.3",
        "label": "8.3 累积变化率 · 8.3 Using Accumulation Functions and Definite Integrals in Applied Contexts",
        "topicId": "calc-u8:8.3"
      }
    ]
  },
  {
    "id": "calc-u8-b09-q3",
    "title": "8.7 正方形截面体积 · Volume with square cross sections",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stem": "区域由 y=√x 与 y=−√x 围成，0≤x≤4。垂直于 x 轴的截面是正方形，边长等于上下曲线的距离。求立体体积。 · The region is bounded by y=√x and y=−√x for 0≤x≤4. Cross sections perpendicular to the x-axis are squares whose side equals the distance between the curves. Find the volume.",
    "expected": 32,
    "tol": 0.01,
    "answerLatex": "32",
    "solution": "边长 s=2√x，截面积 A(x)=s²=4x，所以 V=∫₀⁴4x dx=[2x²]₀⁴=32。 · The side is s=2√x, so A(x)=s²=4x and V=∫₀⁴4x dx=[2x²]₀⁴=32.",
    "solutionLatex": "s(x)=2\\sqrt{x},\\qquad A(x)=s^2=4x,\\qquad V=\\int_0^4 4x\\,dx=\\left[2x^2\\right]_0^4=32",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 8.7 正方形截面与对称底面。 · Original AP-style item, not an official item; for 8.7, square cross sections and a symmetric base.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u8/8.7",
        "label": "8.7 截面法：正方形与矩形 · 8.7 Volumes with Cross Sections: Squares and Rectangles",
        "topicId": "calc-u8:8.7"
      }
    ]
  },
  {
    "id": "calc-u8-b09-q4",
    "title": "8.8 半圆截面体积 · Volume with semicircular cross sections",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stem": "区域由 y=√x 与 y=−√x 围成，0≤x≤4。垂直于 x 轴的截面是以上下曲线距离为直径的半圆。求体积（精确值）。 · The region is bounded by y=√x and y=−√x for 0≤x≤4. Cross sections perpendicular to the x-axis are semicircles with diameter equal to the distance between the curves. Find the volume (exact).",
    "expected": 12.566370614359172,
    "tol": 0.01,
    "answerLatex": "4\\pi",
    "solution": "直径 s=2√x，半径 s/2=√x，半圆面积 A=1/2·π(√x)²=πx/2，所以 V=∫₀⁴πx/2 dx=π/2·8=4π≈12.566。 · The diameter is s=2√x, so the radius is √x; the semicircle area is A=1/2·π(√x)²=πx/2, so V=∫₀⁴πx/2 dx=π/2·8=4π.",
    "solutionLatex": "A(x)=\\dfrac{1}{2}\\pi\\left(\\dfrac{s}{2}\\right)^2=\\dfrac{\\pi}{8}s^2=\\dfrac{\\pi}{2}x,\\qquad V=\\int_0^4\\dfrac{\\pi x}{2}\\,dx=4\\pi",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 8.8 半圆截面面积与体积。 · Original AP-style item, not an official item; for 8.8, area and volume for semicircular cross sections.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u8/8.8",
        "label": "8.8 已知截面体积 · 8.8 Volumes with Cross Sections: Triangles and Semicircles",
        "topicId": "calc-u8:8.8"
      }
    ]
  },
  {
    "id": "calc-u8-b09-q5",
    "title": "8.10 绕其他水平线的圆盘法 · Disc method about y=−1",
    "type": "frq",
    "difficulty": "中 · Medium",
    "calculator": false,
    "check": "numeric",
    "stem": "将区域 0≤x≤1、0≤y≤x² 绕水平线 y=−1 旋转。用圆盘法求体积（精确值）。 · Revolve the region 0≤x≤1, 0≤y≤x² about the horizontal line y=−1. Use the disc method to find the volume (exact).",
    "expected": 5.8643062867009474,
    "tol": 0.01,
    "answerLatex": "\\dfrac{28\\pi}{15}",
    "solution": "旋转半径等于曲线到旋转轴的距离：R=x²−(−1)=x²+1，所以 V=π∫₀¹(x²+1)²dx=π(1/5+2/3+1)=28π/15≈5.864。 · The radius is the distance from the curve to the axis: R=x²+1, so V=π∫₀¹(x²+1)²dx=28π/15.",
    "solutionLatex": "V=\\pi\\int_0^1(x^2+1)^2\\,dx=\\pi\\left[\\dfrac{x^5}{5}+\\dfrac{2x^3}{3}+x\\right]_0^1=\\dfrac{28\\pi}{15}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 8.10 绕其他水平线的圆盘法半径。 · Original AP-style item, not an official item; for 8.10, disk radii when rotating about another horizontal line.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u8/8.10",
        "label": "8.10 圆盘法其他轴 · 8.10 Volume with Disc Method: Revolving Around Other Axes",
        "topicId": "calc-u8:8.10"
      }
    ]
  },
  {
    "id": "calc-u8-b09-q6",
    "title": "8.12 绕其他水平线的垫圈法 · Washer method about y=2",
    "type": "frq",
    "difficulty": "难 · Hard",
    "calculator": false,
    "check": "numeric",
    "stem": "将区域 0≤x≤1、x²≤y≤x 绕水平线 y=2 旋转。用垫圈法求体积（精确值）。 · Revolve the region 0≤x≤1, x²≤y≤x about the horizontal line y=2. Use the washer method to find the volume (exact).",
    "expected": 1.6755160819145565,
    "tol": 0.01,
    "answerLatex": "\\dfrac{8\\pi}{15}",
    "solution": "外半径 R=2−x²，内半径 r=2−x，两者都是到同一条旋转轴的距离。V=π∫₀¹[(2−x²)²−(2−x)²]dx=π∫₀¹(x⁴−5x²+4x)dx=8π/15≈1.676。 · The outer radius is R=2−x² and the inner radius is r=2−x, both measured to the same axis. V=π∫₀¹(x⁴−5x²+4x)dx=8π/15.",
    "solutionLatex": "V=\\pi\\int_0^1\\left[(2-x^2)^2-(2-x)^2\\right]dx=\\pi\\int_0^1\\left(x^4-5x^2+4x\\right)dx=\\dfrac{8\\pi}{15}",
    "sourceId": "original",
    "source": "Original AP-style item (this project)",
    "license": "Project",
    "sourceUrl": "",
    "sourceNote": "原创 AP 风格题，非官方题；用于 8.12 垫圈法其他轴的内外半径。 · Original AP-style item, not an official item; for 8.12, inner and outer washer radii about another axis.",
    "topicLinks": [
      {
        "href": "#/t/math/calc-u8/8.12",
        "label": "8.12 垫圈法其他轴 · 8.12 Volume with Washer Method: Revolving Around Other Axes",
        "topicId": "calc-u8:8.12"
      }
    ]
  }
];
