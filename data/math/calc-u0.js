export const UNIT = {
  "id": "calc-u0",
  "code": "0",
  "titleZh": "预备",
  "titleEn": "Prerequisite",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "0.1": {
    "id": "math/calc-u0/0.1",
    "subject": "math",
    "chapterId": "calc-u0",
    "unitCode": "0",
    "unitTitleZh": "预备",
    "unitTitleEn": "Prerequisite",
    "code": "0.1",
    "titleZh": "函数与图像",
    "titleEn": "Functions and Graphs",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "函数",
        "termEn": "function",
        "defZh": "每个输入恰好对应一个输出的对应规则。",
        "defEn": "A rule that assigns exactly one output to each input."
      },
      {
        "termZh": "定义域",
        "termEn": "domain",
        "defZh": "函数允许的输入集合。",
        "defEn": "The set of inputs a function allows."
      },
      {
        "termZh": "值域",
        "termEn": "range",
        "defZh": "函数实际取到的输出集合。",
        "defEn": "The set of outputs a function actually attains."
      },
      {
        "termZh": "自变量",
        "termEn": "independent variable",
        "defZh": "通常记为 \\(x\\) 的输入。",
        "defEn": "The input, usually written \\(x\\)."
      },
      {
        "termZh": "图像",
        "termEn": "graph",
        "defZh": "满足 \\(y=f(x)\\) 的点 \\((x,y)\\) 的集合。",
        "defEn": "The set of points \\((x,y)\\) that satisfy \\(y=f(x)\\)."
      },
      {
        "termZh": "截距",
        "termEn": "intercept",
        "defZh": "图像与坐标轴的交点。",
        "defEn": "A point where the graph meets a coordinate axis."
      }
    ],
    "summary": "函数与图像 · Functions and Graphs",
    "learningObjectives": [
      "能陈述「函数与图像」的准确定义与适用对象 · State the precise definition of Functions and Graphs and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Functions and Graphs：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「函数与图像」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "函数与图像（Functions and Graphs）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「函数与图像」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "y=f(x)",
        "note": "函数图像：每个 x 对应唯一 y。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「函数与图像」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "定义域内每个 x 只对应一个 y",
      "读图关注零点、增减、对称性与渐近行为",
      "垂直线检验判断是否为函数"
    ],
    "keyPoints": [
      "掌握 0.1「函数与图像」准确定义 · State the precise definition of 0.1 Functions and Graphs.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「函数与图像」的结论 · Applying the conclusion of Functions and Graphs when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子 · Confusing existence of a limit with the function being defined at that point, or canceling a factor that might be zero"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「函数与图像」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "y=f(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「函数与图像」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「函数与图像」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「函数与图像」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件 · First name the law or definition and its conditions of use.",
      "分数一律叠式书写 · Write every fraction as a stacked fraction.",
      "检查单位、方向与特殊值 · Check units, direction, and special values.",
      "多问共享刺激时保持符号一致 · Keep symbols consistent across parts that share a stimulus.",
      "论证题每句对应证据 · In an argument, pair every claim with evidence."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u0",
        "code": "0.2",
        "title": "单位圆与三角",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "function-graph",
        "title": "函数图像"
      }
    ],
    "practiceHref": "#/math/practice/calc-u0",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「函数与图像」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「函数与图像」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「函数与图像」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "0.2": {
    "id": "math/calc-u0/0.2",
    "subject": "math",
    "chapterId": "calc-u0",
    "unitCode": "0",
    "unitTitleZh": "预备",
    "unitTitleEn": "Prerequisite",
    "code": "0.2",
    "titleZh": "单位圆与三角",
    "titleEn": "Unit Circle and Trigonometry",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "弧度",
        "termEn": "radian",
        "defZh": "弧长等于半径时所对的圆心角；一周是 \\(2\\pi\\) 弧度。",
        "defEn": "The central angle whose arc length equals the radius. One full turn is \\(2\\pi\\) radians."
      },
      {
        "termZh": "单位圆",
        "termEn": "unit circle",
        "defZh": "圆心在原点、半径为 1 的圆。",
        "defEn": "The circle centered at the origin with radius 1."
      },
      {
        "termZh": "正弦",
        "termEn": "sine",
        "defZh": "单位圆上点的 \\(y\\) 坐标，或对边与斜边之比。",
        "defEn": "The \\(y\\)-coordinate of a point on the unit circle, or opposite over hypotenuse."
      },
      {
        "termZh": "余弦",
        "termEn": "cosine",
        "defZh": "单位圆上点的 \\(x\\) 坐标，或邻边与斜边之比。",
        "defEn": "The \\(x\\)-coordinate of a point on the unit circle, or adjacent over hypotenuse."
      },
      {
        "termZh": "正切",
        "termEn": "tangent",
        "defZh": "\\(\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}\\)，在余弦为零处无定义。",
        "defEn": "\\(\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}\\), undefined where cosine is zero."
      },
      {
        "termZh": "周期",
        "termEn": "period",
        "defZh": "函数重复一次所需的自变量增量；正弦和余弦的周期是 \\(2\\pi\\)。",
        "defEn": "The change in the input after which a function repeats. Sine and cosine have period \\(2\\pi\\)."
      }
    ],
    "summary": "单位圆与三角 · Unit Circle and Trigonometry",
    "learningObjectives": [
      "能陈述「单位圆与三角」的准确定义与适用对象 · State the precise definition of Unit Circle and Trigonometry and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Unit Circle and Trigonometry：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「单位圆与三角」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "单位圆与三角（Unit Circle and Trigonometry）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「单位圆与三角」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\cos^{2}\\theta+\\sin^{2}\\theta=1",
        "note": "单位圆基本恒等式。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「单位圆与三角」的工作方程或机制链。"
      },
      {
        "from": "核心关系",
        "to": "特例",
        "note": "取线性、稳态、均匀或对称特例检验。"
      },
      {
        "from": "特例",
        "to": "一般情形",
        "note": "恢复完整条件；注明误差来源。"
      }
    ],
    "conditions": [
      "θ 用弧度",
      "单位圆上的点为 (cosθ, sinθ)",
      "周期性：sin(θ+2π)=sinθ，cos(θ+2π)=cosθ"
    ],
    "keyPoints": [
      "掌握 0.2「单位圆与三角」准确定义 · State the precise definition of 0.2 Unit Circle and Trigonometry.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「单位圆与三角」的结论 · Applying the conclusion of Unit Circle and Trigonometry when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子 · Confusing existence of a limit with the function being defined at that point, or canceling a factor that might be zero"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「单位圆与三角」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\cos^{2}\\theta+\\sin^{2}\\theta=1"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「单位圆与三角」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「单位圆与三角」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「单位圆与三角」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件 · First name the law or definition and its conditions of use.",
      "分数一律叠式书写 · Write every fraction as a stacked fraction.",
      "检查单位、方向与特殊值 · Check units, direction, and special values.",
      "多问共享刺激时保持符号一致 · Keep symbols consistent across parts that share a stimulus.",
      "论证题每句对应证据 · In an argument, pair every claim with evidence."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u0",
        "code": "0.1",
        "title": "函数与图像",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "unit-circle",
        "title": "单位圆"
      }
    ],
    "practiceHref": "#/math/practice/calc-u0",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「单位圆与三角」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「单位圆与三角」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「单位圆与三角」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
