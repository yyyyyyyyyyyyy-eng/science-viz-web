export const UNIT = {
  "id": "calc-u9",
  "code": "9",
  "titleZh": "参数、极坐标与向量",
  "titleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "9.1": {
    "id": "math/calc-u9/9.1",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.1",
    "titleZh": "参数运动导数",
    "titleEn": "Defining and Differentiating Parametric Equations",
    "layer": "ap",
    "summary": "参数运动导数 · Defining and Differentiating Parametric Equations",
    "learningObjectives": [
      "能陈述「参数运动导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining and Differentiating Parametric Equations：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「参数运动导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "参数运动导数（Defining and Differentiating Parametric Equations）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「参数运动导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "导数定义使用叠式分式。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「参数运动导数」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 9.1「参数运动导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「参数运动导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「参数运动导数」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「参数运动导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「参数运动导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「参数运动导数」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.2",
        "title": "参数二阶导数",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "polar-parametric",
        "title": "极坐标与参数曲线"
      }
    ],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「参数运动导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「参数运动导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「参数运动导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "参数方程",
        "termEn": "parametric equations",
        "defZh": "用参数 \\(t\\) 分别表示 \\(x(t)\\) 与 \\(y(t)\\) 的方程，用来描述平面曲线。",
        "defEn": "Equations that express \\(x(t)\\) and \\(y(t)\\) separately in terms of a parameter \\(t\\) to describe a plane curve."
      },
      {
        "termZh": "参数 \\(t\\)",
        "termEn": "parameter",
        "defZh": "控制曲线上点位置的自变量。",
        "defEn": "The independent variable that locates a point on the curve."
      },
      {
        "termZh": "参数导数",
        "termEn": "parametric derivative",
        "defZh": "\\(\\dfrac{dy}{dx}=\\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}\\)，其中 \\(\\dfrac{dx}{dt}\\ne 0\\)。",
        "defEn": "The slope \\(\\dfrac{dy}{dx}=\\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}\\), defined when \\(\\dfrac{dx}{dt}\\ne 0\\)."
      },
      {
        "termZh": "水平切线",
        "termEn": "horizontal tangent",
        "defZh": "\\(\\dfrac{dy}{dt}=0\\) 且 \\(\\dfrac{dx}{dt}\\ne 0\\) 的点处切线水平。",
        "defEn": "The tangent is horizontal at a point where \\(\\dfrac{dy}{dt}=0\\) and \\(\\dfrac{dx}{dt}\\ne 0\\)."
      },
      {
        "termZh": "竖直切线",
        "termEn": "vertical tangent",
        "defZh": "\\(\\dfrac{dx}{dt}=0\\) 且 \\(\\dfrac{dy}{dt}\\ne 0\\) 的点处切线竖直。",
        "defEn": "The tangent is vertical at a point where \\(\\dfrac{dx}{dt}=0\\) and \\(\\dfrac{dy}{dt}\\ne 0\\)."
      },
      {
        "termZh": "消参",
        "termEn": "eliminating the parameter",
        "defZh": "消去 \\(t\\)，得到 \\(x\\) 与 \\(y\\) 的直接关系。",
        "defEn": "Removing \\(t\\) to obtain a direct relationship between \\(x\\) and \\(y\\)."
      }
    ]
  },
  "9.2": {
    "id": "math/calc-u9/9.2",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.2",
    "titleZh": "参数二阶导数",
    "titleEn": "Second Derivatives of Parametric Equations",
    "layer": "ap",
    "summary": "参数二阶导数 · Second Derivatives of Parametric Equations",
    "learningObjectives": [
      "能陈述「参数二阶导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Second Derivatives of Parametric Equations：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「参数二阶导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "参数二阶导数（Second Derivatives of Parametric Equations）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「参数二阶导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}},\\quad \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}}",
        "note": "参数方程二阶导数：先求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)，再对 t 求导并除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)。 · Parametric second derivative: differentiate \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) with respect to t, then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「参数二阶导数」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 9.2「参数二阶导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「参数二阶导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「参数二阶导数」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「参数二阶导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「参数二阶导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「参数二阶导数」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.1",
        "title": "参数运动导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.3",
        "title": "参数弧长",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「参数二阶导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「参数二阶导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「参数二阶导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "参数方程",
        "termEn": "parametric equations",
        "defZh": "用 \\(x(t)\\) 与 \\(y(t)\\) 分别表示坐标的方程。",
        "defEn": "Equations giving coordinates separately as \\(x(t)\\) and \\(y(t)\\)."
      },
      {
        "termZh": "参数",
        "termEn": "parameter",
        "defZh": "同时控制 \\(x\\) 与 \\(y\\) 的自变量 \\(t\\)。",
        "defEn": "The independent variable \\(t\\) that controls both \\(x\\) and \\(y\\)."
      },
      {
        "termZh": "一阶导数",
        "termEn": "first derivative",
        "defZh": "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}}\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}}\\)."
      },
      {
        "termZh": "二阶导数",
        "termEn": "second derivative",
        "defZh": "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left[\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right]}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}}\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left[\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right]}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}}\\)."
      },
      {
        "termZh": "凹性",
        "termEn": "concavity",
        "defZh": "由参数曲线二阶导数的符号判断。",
        "defEn": "Determined by the sign of the second derivative of a parametric curve."
      },
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "把对 \\(t\\) 的导数转换为对 \\(x\\) 的导数。",
        "defEn": "Converts derivatives with respect to \\(t\\) into derivatives with respect to \\(x\\)."
      }
    ]
  },
  "9.3": {
    "id": "math/calc-u9/9.3",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.3",
    "titleZh": "参数弧长",
    "titleEn": "Finding Arc Lengths of Curves Given by Parametric Equations",
    "layer": "ap",
    "summary": "参数弧长 · Finding Arc Lengths of Curves Given by Parametric Equations",
    "learningObjectives": [
      "能陈述「参数弧长」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding Arc Lengths of Curves Given by Parametric Equations：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「参数弧长」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "参数弧长（Finding Arc Lengths of Curves Given by Parametric Equations）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「参数弧长」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "L=\\int_{t_1}^{t_2}\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\,\\mathrm{d}t",
        "note": "参数曲线弧长；对参数 t 积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「参数弧长」的工作方程或机制链。"
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
      "x(t)、y(t) 在 [t_1,t_2] 上连续可导，且不同时为零",
      "曲线光滑、不自我重叠；t_1<t_2",
      "弧长微元为 √((dx/dt)²+(dy/dt)²) dt，不是 √(1+(dy/dx)²) dx"
    ],
    "keyPoints": [
      "掌握 9.3「参数弧长」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「参数弧长」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「参数弧长」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "L=\\int_{t_1}^{t_2}\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\,\\mathrm{d}t"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「参数弧长」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「参数弧长」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「参数弧长」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.2",
        "title": "参数二阶导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.4",
        "title": "向量值函数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「参数弧长」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「参数弧长」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「参数弧长」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "弧长",
        "termEn": "arc length",
        "defZh": "参数曲线从 \\(t_1\\) 到 \\(t_2\\) 的实际长度。",
        "defEn": "The actual length of a parametric curve from \\(t_1\\) to \\(t_2\\)."
      },
      {
        "termZh": "弧长积分",
        "termEn": "arc length integral",
        "defZh": "\\(L=\\int_{t_1}^{t_2}\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\,\\mathrm{d}t\\)。",
        "defEn": "The length is \\(L=\\int_{t_1}^{t_2}\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\,\\mathrm{d}t\\)."
      },
      {
        "termZh": "速度分量",
        "termEn": "velocity components",
        "defZh": "\\(x'(t)\\) 与 \\(y'(t)\\) 分别是水平与竖直方向的速度分量。",
        "defEn": "\\(x'(t)\\) and \\(y'(t)\\) are the horizontal and vertical velocity components."
      },
      {
        "termZh": "速率",
        "termEn": "speed",
        "defZh": "\\(\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\)，是速度向量的长度。",
        "defEn": "The quantity \\(\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\), the length of the velocity vector."
      },
      {
        "termZh": "光滑曲线",
        "termEn": "smooth curve",
        "defZh": "导数连续且不同时为零的参数曲线。",
        "defEn": "A parametric curve whose derivatives are continuous and never simultaneously zero."
      },
      {
        "termZh": "积分上限",
        "termEn": "upper limit of integration",
        "defZh": "弧长累加终止的参数值 \\(t_2\\)。",
        "defEn": "The parameter value \\(t_2\\) at which arc length accumulation stops."
      }
    ]
  },
  "9.4": {
    "id": "math/calc-u9/9.4",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.4",
    "titleZh": "向量值函数",
    "titleEn": "Defining and Differentiating Vector-Valued Functions",
    "layer": "ap",
    "summary": "向量值函数的定义、逐分量求导与运动学解释。 · Defining vector-valued functions, differentiating them componentwise, and interpreting derivatives as velocity and acceleration.",
    "learningObjectives": [
      "能写出二维或三维向量值函数 \\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\)，并说明定义域、连续性与可导性由各分量决定。 · Write a two- or three-dimensional vector-valued function \\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\) and explain that its domain, continuity, and differentiability are determined component by component.",
      "能用极限定义证明 \\(\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\)，并把和、数乘、乘积与链式法则推广到向量值函数。 · Use the limit definition to justify \\(\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\), and extend the sum, scalar-multiple, product, and chain rules to vector-valued functions.",
      "能由位置向量求速度、速率、加速度、单位切向量与切线方程，并用图像和分量运算检验结果。 · Find velocity, speed, acceleration, the unit tangent vector, and tangent lines from a position vector, and check the result with graphs and component computations."
    ],
    "essentialKnowledge": [
      "向量值函数把参数映到向量：\\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\)，三维情形为 \\(\\vec r(t)=\\langle x(t),y(t),z(t)\\rangle\\)；其图像是平面或空间曲线。 · A vector-valued function maps a parameter to a vector: \\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\), or \\(\\vec r(t)=\\langle x(t),y(t),z(t)\\rangle\\) in three dimensions; its graph is a plane or space curve.",
      "导数用向量极限定义：\\(\\vec r'(t)=\\displaystyle\\lim_{h\\to0}\\dfrac{\\vec r(t+h)-\\vec r(t)}{h}\\)，极限存在当且仅当每个分量的极限存在。 · The derivative is defined by the vector limit \\(\\vec r'(t)=\\displaystyle\\lim_{h\\to0}\\dfrac{\\vec r(t+h)-\\vec r(t)}{h}\\), which exists exactly when every component limit exists.",
      "因此求导可以逐分量进行：\\(\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\)；实值函数的求导法则（和、数乘、乘积、标量商与链式法则）可以逐分量搬过来。 · Differentiation is therefore componentwise: \\(\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\); the rules for real-valued functions (sum, scalar multiple, product, scalar quotient, and chain) carry over component by component.",
      "\\(\\vec r'(t)\\) 是曲线在 \\(\\vec r(t)\\) 处的切向量，指向参数增大的方向；若 \\(\\vec r'(t)\\neq\\vec{0}\\)，单位切向量为 \\(\\vec T(t)=\\dfrac{\\vec r'(t)}{\\|\\vec r'(t)\\|}\\)。 · \\(\\vec r'(t)\\) is a tangent vector to the curve at \\(\\vec r(t)\\), pointing in the direction of increasing parameter; if \\(\\vec r'(t)\\neq\\vec{0}\\), the unit tangent vector is \\(\\vec T(t)=\\dfrac{\\vec r'(t)}{\\|\\vec r'(t)\\|}\\).",
      "在运动学中，位置向量求导得速度向量 \\(\\vec v(t)=\\vec r'(t)\\)，速度的模是速率 \\(\\|\\vec v(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\)；再求导得加速度 \\(\\vec a(t)=\\vec v'(t)=\\vec r''(t)\\)。 · In kinematics, differentiating the position vector gives velocity \\(\\vec v(t)=\\vec r'(t)\\); the magnitude of velocity is speed, \\(\\|\\vec v(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\), and one more derivative gives acceleration \\(\\vec a(t)=\\vec v'(t)=\\vec r''(t)\\).",
      "\\(\\vec r\\) 在 \\(t\\) 可导当且仅当 \\(x,y\\)（及 \\(z\\)）都在 \\(t\\) 可导；可导必连续，但连续不一定可导，例如 \\(\\vec r(t)=\\langle t,|t|\\rangle\\) 在 \\(t=0\\) 连续却不可导。 · \\(\\vec r\\) is differentiable at \\(t\\) exactly when \\(x,y\\) (and \\(z\\)) are differentiable there; differentiability implies continuity, but continuity does not imply differentiability—for example, \\(\\vec r(t)=\\langle t,|t|\\rangle\\) is continuous but not differentiable at \\(t=0\\).",
      "同一曲线换参数化后切向量会按链式法则改变长度和方向：若 \\(t=f(s)\\)，则 \\(\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}s}=f'(s)\\,\\vec r'(f(s))\\)；曲线的几何切线不变，但速度与速率依赖参数化。 · Reparameterizing a curve changes the tangent vector by the chain rule: if \\(t=f(s)\\), then \\(\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}s}=f'(s)\\,\\vec r'(f(s))\\); the geometric tangent line is unchanged, but velocity and speed depend on the parameterization.",
      "向量值函数的乘积法则还包括标量函数乘向量函数与点积：\\((f\\vec r)'=f'\\vec r+f\\vec r'\\)，\\((\\vec r\\cdot\\vec s)'=\\vec r'\\cdot\\vec s+\\vec r\\cdot\\vec s'\\)；这些都可以逐分量验证。 · Product rules for vector-valued functions include scalar-times-vector and dot products: \\((f\\vec r)'=f'\\vec r+f\\vec r'\\) and \\((\\vec r\\cdot\\vec s)'=\\vec r'\\cdot\\vec s+\\vec r\\cdot\\vec s'\\), both verified componentwise."
    ],
    "definition": "向量值函数是输出为向量的函数，平面情形写成 \\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\)，空间情形写成 \\(\\vec r(t)=\\langle x(t),y(t),z(t)\\rangle\\)。若分量函数都在 \\(t\\) 可导，则 \\(\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\)（空间情形再加 \\(z'(t)\\)），也就是把实值函数的求导法则逐分量使用。导数 \\(\\vec r'(t)\\) 是曲线在 \\(\\vec r(t)\\) 处的切向量；在运动中它是速度向量，模 \\(\\|\\vec r'(t)\\|\\) 是速率，二阶导数 \\(\\vec r''(t)\\) 是加速度向量。 · A vector-valued function is a function whose output is a vector, written \\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\) in the plane and \\(\\vec r(t)=\\langle x(t),y(t),z(t)\\rangle\\) in space. If the component functions are differentiable at \\(t\\), then \\(\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\) (plus \\(z'(t)\\) in space): the differentiation rules for real-valued functions are applied component by component. The derivative \\(\\vec r'(t)\\) is a tangent vector to the curve at \\(\\vec r(t)\\); for motion it is the velocity vector, its magnitude \\(\\|\\vec r'(t)\\|\\) is speed, and the second derivative \\(\\vec r''(t)\\) is the acceleration vector.",
    "intuition": "把 \\(t\\) 想成时间，\\(\\vec r(t)\\) 是质点的位置。位置随时间的瞬时变化率就是速度向量 \\(\\vec r'(t)\\)：它既告诉我们运动有多快（模长），也告诉我们往哪个方向走（方向）。对每个坐标分别求导，再把结果重新组装成向量即可。 · Think of \\(t\\) as time and \\(\\vec r(t)\\) as the position of a particle. The instantaneous rate of change of position is the velocity vector \\(\\vec r'(t)\\): its magnitude says how fast the particle moves, and its direction says where it goes. Differentiate each coordinate separately, then reassemble the results into a vector.",
    "formulas": [
      {
        "latex": "\\vec r'(t)=\\lim_{h\\to0}\\dfrac{\\vec r(t+h)-\\vec r(t)}{h}=\\left\\langle\\lim_{h\\to0}\\dfrac{x(t+h)-x(t)}{h},\\ \\lim_{h\\to0}\\dfrac{y(t+h)-y(t)}{h}\\right\\rangle",
        "note": "向量值函数的极限定义；极限按分量计算。 · Limit definition of the derivative; the limit is computed componentwise."
      },
      {
        "latex": "\\vec r'(t)=\\langle x'(t),y'(t)\\rangle,\\qquad \\vec r''(t)=\\langle x''(t),y''(t)\\rangle",
        "note": "逐分量求导；空间曲线再加 \\(z'(t)\\) 与 \\(z''(t)\\)。 · Componentwise differentiation; add \\(z'(t)\\) and \\(z''(t)\\) for a space curve."
      },
      {
        "latex": "(\\vec r+\\vec s)'=\\vec r'+\\vec s',\\quad (c\\vec r)'=c\\vec r',\\quad (f\\vec r)'=f'\\vec r+f\\vec r'",
        "note": "和、数乘与标量函数乘向量函数的求导法则；逐分量验证。 · Sum, scalar-multiple, and scalar-function-times-vector rules; verify component by component."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\vec r(f(t))=f'(t)\\,\\vec r'(f(t))",
        "note": "向量值函数的链式法则；内层导数不能漏。 · Chain rule for vector-valued functions; do not omit the inner derivative."
      },
      {
        "latex": "\\vec v(t)=\\vec r'(t),\\qquad \\|\\vec v(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}",
        "note": "速度向量与速率；速率是标量。 · Velocity vector and speed; speed is a scalar."
      },
      {
        "latex": "\\vec T(t)=\\dfrac{\\vec r'(t)}{\\|\\vec r'(t)\\|}\\quad (\\vec r'(t)\\neq\\vec{0}),\\qquad \\vec a(t)=\\vec r''(t)",
        "note": "单位切向量与加速度向量。 · Unit tangent vector and acceleration vector."
      }
    ],
    "derivationNotes": [
      {
        "from": "向量极限 · Vector limit",
        "to": "逐分量求导 · Componentwise differentiation",
        "note": "向量减法与数乘按分量进行，因此 \\(\\dfrac{\\vec r(t+h)-\\vec r(t)}{h}=\\left\\langle\\dfrac{x(t+h)-x(t)}{h},\\ \\dfrac{y(t+h)-y(t)}{h}\\right\\rangle\\)；取极限即得 \\(\\vec r'=\\langle x',y'\\rangle\\)。 · Vector subtraction and scalar multiplication are componentwise, so the difference quotient splits into component difference quotients; taking the limit gives the componentwise derivative."
      },
      {
        "from": "实值函数求导法则 · Real-valued differentiation rules",
        "to": "向量值函数求导法则 · Vector-valued differentiation rules",
        "note": "对每个分量分别使用和、数乘、乘积与链式法则，再把结果组装回向量；不需要新的向量专用法则。 · Apply the sum, scalar-multiple, product, and chain rules to each component, then reassemble the vector; no separate vector-only rule is needed."
      },
      {
        "from": "割线向量 · Secant vector",
        "to": "切向量 · Tangent vector",
        "note": "\\(\\dfrac{\\vec r(t+h)-\\vec r(t)}{h}\\) 是沿曲线的割线方向；当 \\(h\\to0\\) 时其极限 \\(\\vec r'(t)\\) 与曲线相切，并指向参数增大的方向。 · The difference quotient is the direction of a secant line along the curve; as \\(h\\to0\\), its limit \\(\\vec r'(t)\\) is tangent to the curve and points in the direction of increasing parameter."
      },
      {
        "from": "位置向量 · Position vector",
        "to": "速度、速率与加速度 · Velocity, speed, and acceleration",
        "note": "对 \\(\\vec r(t)\\) 求导得速度 \\(\\vec v=\\vec r'\\)；速率是 \\(\\|\\vec v\\|\\)；再对速度求导得加速度 \\(\\vec a=\\vec v'=\\vec r''\\)。 · Differentiate the position vector to get velocity; speed is the magnitude of velocity; differentiating velocity gives acceleration."
      },
      {
        "from": "参数化 · Parameterization",
        "to": "链式法则 · Chain rule",
        "note": "若 \\(t=f(s)\\)，则复合函数 \\(\\vec r(f(s))\\) 的导数为 \\(f'(s)\\,\\vec r'(f(s))\\)；同一几何曲线的速度大小会随参数化改变。 · If \\(t=f(s)\\), the derivative of the composition is \\(f'(s)\\vec r'(f(s))\\); the speed along the same geometric curve changes with the parameterization."
      }
    ],
    "conditions": [
      "各分量在讨论的区间内可导；在端点处用单侧导数。 · Each component must be differentiable on the interval under discussion; use one-sided derivatives at endpoints.",
      "\\(\\vec r'(t)\\) 存在当且仅当 \\(x'(t)\\)、\\(y'(t)\\)（及 \\(z'(t)\\)）都存在；一个分量不可导就足以使向量函数不可导。 · \\(\\vec r'(t)\\) exists exactly when the component derivatives all exist; one nondifferentiable component makes the vector function nondifferentiable.",
      "使用单位切向量或由导数写切线时要求 \\(\\vec r'(t)\\neq\\vec{0}\\)；导数为零只说明瞬时速度为零，不说明曲线不存在。 · A unit tangent vector or a tangent line written from the derivative requires \\(\\vec r'(t)\\neq\\vec{0}\\); a zero derivative only means the instantaneous velocity is zero, not that the curve fails to exist.",
      "速率 \\(\\|\\vec r'(t)\\|\\) 是标量且非负；速度 \\(\\vec r'(t)\\) 是向量，两者不能混写。 · Speed is a nonnegative scalar; velocity is a vector, and the two must not be conflated.",
      "乘积法则要求标量因子与向量因子都可导；链式法则要求内层函数可导。 · The product rule requires both the scalar and vector factors to be differentiable; the chain rule requires the inner function to be differentiable.",
      "高阶导数要求分量具有相应阶数的导数；\\(\\vec r''\\) 一般不是切向量，除非速度方向不变。 · Higher derivatives require components with the corresponding order of differentiability; \\(\\vec r''\\) is generally not a tangent vector unless the direction of velocity is constant.",
      "三维情形逐分量推广，不能漏掉 \\(z\\) 分量。 · The three-dimensional case extends componentwise; do not omit the \\(z\\)-component."
    ],
    "keyPoints": [
      "向量值函数逐分量定义、逐分量连续、逐分量可导。 · Vector-valued functions are defined, continuous, and differentiable component by component.",
      "\\(\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\) 来自向量极限；实值函数的求导法则全部可以逐分量使用。 · The componentwise derivative comes from the vector limit; all real-valued differentiation rules apply componentwise.",
      "导数 \\(\\vec r'(t)\\) 是切向量；\\(\\vec r'(t)\\neq\\vec{0}\\) 时单位切向量为 \\(\\vec T=\\dfrac{\\vec r'}{\\|\\vec r'\\|}\\)。 · The derivative is a tangent vector; when it is nonzero, the unit tangent vector is the derivative divided by its magnitude.",
      "运动中 \\(\\vec v=\\vec r'\\)、速率 \\(=\\|\\vec v\\|\\)、\\(\\vec a=\\vec r''\\)；速率不是向量。 · In motion, velocity is the derivative of position, speed is the magnitude of velocity, and acceleration is the derivative of velocity; speed is not a vector.",
      "可导必连续，连续不一定可导；检查每个分量，尤其是分段函数与绝对值。 · Differentiability implies continuity, but not conversely; check every component, especially piecewise functions and absolute values.",
      "换参数化时用链式法则，速度与速率改变，但几何切线不变。 · Reparameterization uses the chain rule; velocity and speed change, but the geometric tangent line does not."
    ],
    "misconceptions": [
      "把速率 \\(\\|\\vec r'(t)\\|\\) 写成速度向量，或把速度的模当成加速度 \\(\\vec r''(t)\\)。 · Writing speed as a velocity vector, or mistaking the magnitude of velocity for acceleration.",
      "认为 \\(\\vec r'(t)=\\vec{0}\\) 时函数不可导；实际上导数存在且为零向量，只是单位切向量没有定义。 · Thinking the function is not differentiable when the derivative is the zero vector; the derivative exists and equals zero, but the unit tangent vector is undefined.",
      "把 \\(\\vec r''(t)\\) 当作切向量；加速度一般有法向分量。 · Treating acceleration as a tangent vector; acceleration generally has a normal component.",
      "只对 \\(x\\) 或 \\(y\\) 求导就写答案，漏掉其他分量；三维时漏掉 \\(z\\)。 · Differentiating only one component and omitting the others, or omitting \\(z\\) in three dimensions.",
      "把连续当成可导，例如误以为 \\(\\langle t,|t|\\rangle\\) 在 \\(t=0\\) 可导。 · Confusing continuity with differentiability, for example assuming \\(\\langle t,|t|\\rangle\\) is differentiable at \\(t=0\\).",
      "链式法则漏乘内层导数，或乘积法则只写一项。 · Omitting the inner derivative in the chain rule, or writing only one term in the product rule.",
      "把参数 \\(t\\) 与坐标 \\(x\\) 混为一谈，直接用 \\(y'(t)\\) 当曲线斜率；斜率应为 \\(\\dfrac{y'(t)}{x'(t)}\\)（\\(x'(t)\\neq0\\)）。 · Confusing the parameter with the coordinate and using \\(y'(t)\\) directly as the slope; the slope is the ratio of the component derivatives when the denominator is nonzero."
    ],
    "examples": [
      {
        "title": "例 1 · 逐分量求导 · Example 1: Componentwise differentiation",
        "prompt": "已知 \\(\\vec r(t)=\\langle t^{2},\\sin t\\rangle\\)，求 \\(\\vec r'(t)\\)、\\(\\vec r''(t)\\)，并求 \\(t=0\\) 时的速度与加速度。 · Given \\(\\vec r(t)=\\langle t^{2},\\sin t\\rangle\\), find \\(\\vec r'(t)\\) and \\(\\vec r''(t)\\), and find the velocity and acceleration at \\(t=0\\).",
        "steps": [
          "分别对两个分量求导：\\(x'(t)=2t\\)，\\(y'(t)=\\cos t\\)。 · Differentiate each component: \\(x'(t)=2t\\) and \\(y'(t)=\\cos t\\).",
          "组装成向量：\\(\\vec r'(t)=\\langle2t,\\cos t\\rangle\\)。 · Assemble the vector: \\(\\vec r'(t)=\\langle2t,\\cos t\\rangle\\).",
          "再逐分量求导：\\(\\vec r''(t)=\\langle2,-\\sin t\\rangle\\)。 · Differentiate again componentwise: \\(\\vec r''(t)=\\langle2,-\\sin t\\rangle\\).",
          "代入 \\(t=0\\)：\\(\\vec r'(0)=\\langle0,1\\rangle\\)，\\(\\vec r''(0)=\\langle2,0\\rangle\\)。 · At \\(t=0\\), \\(\\vec r'(0)=\\langle0,1\\rangle\\) and \\(\\vec r''(0)=\\langle2,0\\rangle\\)."
        ],
        "solution": "\\(\\vec r'(t)=\\langle2t,\\cos t\\rangle\\)，\\(\\vec r''(t)=\\langle2,-\\sin t\\rangle\\)；\\(t=0\\) 时速度为 \\(\\langle0,1\\rangle\\)，加速度为 \\(\\langle2,0\\rangle\\)。 · \\(\\vec r'(t)=\\langle2t,\\cos t\\rangle\\) and \\(\\vec r''(t)=\\langle2,-\\sin t\\rangle\\); at \\(t=0\\) the velocity is \\(\\langle0,1\\rangle\\) and the acceleration is \\(\\langle2,0\\rangle\\).",
        "solutionLatex": "\\vec r'(t)=\\langle2t,\\cos t\\rangle,\\qquad \\vec r''(t)=\\langle2,-\\sin t\\rangle"
      },
      {
        "title": "例 2 · 速率与加速度 · Example 2: Speed and acceleration",
        "prompt": "质点位置 \\(\\vec r(t)=\\langle2\\cos t,\\sin2t\\rangle\\)。求 \\(t=\\dfrac{\\pi}{6}\\) 时的速度、速率、加速度和单位切向量。 · A particle has position \\(\\vec r(t)=\\langle2\\cos t,\\sin2t\\rangle\\). Find its velocity, speed, acceleration, and unit tangent vector at \\(t=\\dfrac{\\pi}{6}\\).",
        "steps": [
          "对位置向量求导得 \\(\\vec v(t)=\\vec r'(t)=\\langle-2\\sin t,2\\cos2t\\rangle\\)。 · Differentiate the position vector: \\(\\vec v(t)=\\vec r'(t)=\\langle-2\\sin t,2\\cos2t\\rangle\\).",
          "在 \\(t=\\dfrac{\\pi}{6}\\)：\\(\\vec v=\\left\\langle-2\\cdot\\dfrac{1}{2},2\\cdot\\dfrac{1}{2}\\right\\rangle=\\langle-1,1\\rangle\\)。 · At \\(t=\\dfrac{\\pi}{6}\\): \\(\\vec v=\\left\\langle-2\\cdot\\dfrac{1}{2},2\\cdot\\dfrac{1}{2}\\right\\rangle=\\langle-1,1\\rangle\\).",
          "速率 \\(\\|\\vec v\\|=\\sqrt{(-1)^{2}+1^{2}}=\\sqrt{2}\\approx1.41\\)。 · Speed: \\(\\|\\vec v\\|=\\sqrt{(-1)^{2}+1^{2}}=\\sqrt{2}\\approx1.41\\).",
          "\\(\\vec a(t)=\\langle-2\\cos t,-4\\sin2t\\rangle\\)，故 \\(\\vec a=\\langle-\\sqrt{3},-2\\sqrt{3}\\rangle\\approx\\langle-1.73,-3.46\\rangle\\)。 · \\(\\vec a(t)=\\langle-2\\cos t,-4\\sin2t\\rangle\\), so \\(\\vec a=\\langle-\\sqrt{3},-2\\sqrt{3}\\rangle\\approx\\langle-1.73,-3.46\\rangle\\).",
          "单位切向量 \\(\\vec T=\\dfrac{\\vec v}{\\|\\vec v\\|}=\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\)。 · Unit tangent vector: \\(\\vec T=\\dfrac{\\vec v}{\\|\\vec v\\|}=\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\)."
        ],
        "solution": "速度 \\(\\langle-1,1\\rangle\\)，速率 \\(\\sqrt{2}\\)，加速度 \\(\\langle-\\sqrt{3},-2\\sqrt{3}\\rangle\\)，单位切向量 \\(\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\)。 · Velocity is \\(\\langle-1,1\\rangle\\), speed is \\(\\sqrt{2}\\), acceleration is \\(\\langle-\\sqrt{3},-2\\sqrt{3}\\rangle\\), and the unit tangent vector is \\(\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\).",
        "solutionLatex": "\\vec v=\\langle-1,1\\rangle,\\quad \\|\\vec v\\|=\\sqrt{2},\\quad \\vec a=\\langle-\\sqrt{3},-2\\sqrt{3}\\rangle"
      },
      {
        "title": "例 3 · 切线与单位切向量 · Example 3: Tangent line and unit tangent",
        "prompt": "曲线 \\(\\vec r(t)=\\langle\\cos t,\\sin t\\rangle\\)。求 \\(t=\\dfrac{\\pi}{4}\\) 处的单位切向量与切线方程。 · For the curve \\(\\vec r(t)=\\langle\\cos t,\\sin t\\rangle\\), find the unit tangent vector and the tangent line at \\(t=\\dfrac{\\pi}{4}\\).",
        "steps": [
          "\\(\\vec r'(t)=\\langle-\\sin t,\\cos t\\rangle\\)，故 \\(\\vec r'\\left(\\dfrac{\\pi}{4}\\right)=\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\)。 · \\(\\vec r'(t)=\\langle-\\sin t,\\cos t\\rangle\\), so \\(\\vec r'\\left(\\dfrac{\\pi}{4}\\right)=\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\).",
          "该向量模为 \\(1\\)，所以单位切向量 \\(\\vec T=\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\)。 · This vector has magnitude \\(1\\), so the unit tangent vector is \\(\\vec T=\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\).",
          "切点 \\(\\vec r\\left(\\dfrac{\\pi}{4}\\right)=\\left\\langle\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\)，切线斜率 \\(\\dfrac{y'}{x'}=-1\\)。 · The point of tangency is \\(\\vec r\\left(\\dfrac{\\pi}{4}\\right)=\\left\\langle\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\), and the tangent slope is \\(\\dfrac{y'}{x'}=-1\\).",
          "切线：\\(y-\\dfrac{\\sqrt{2}}{2}=-\\left(x-\\dfrac{\\sqrt{2}}{2}\\right)\\)，即 \\(x+y=\\sqrt{2}\\)。 · Tangent line: \\(y-\\dfrac{\\sqrt{2}}{2}=-\\left(x-\\dfrac{\\sqrt{2}}{2}\\right)\\), that is, \\(x+y=\\sqrt{2}\\)."
        ],
        "solution": "单位切向量 \\(\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\)，切线方程 \\(x+y=\\sqrt{2}\\)。 · The unit tangent vector is \\(\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle\\) and the tangent line is \\(x+y=\\sqrt{2}\\).",
        "solutionLatex": "\\vec T=\\left\\langle-\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{2}}{2}\\right\\rangle,\\qquad x+y=\\sqrt{2}"
      },
      {
        "title": "例 4 · 乘积与链式法则 · Example 4: Product and chain rules",
        "prompt": "求 \\(\\vec r(t)=\\langle t\\cos t,\\ e^{t^{2}}\\rangle\\) 的导数，并求 \\(t=0\\) 处的切向量。 · Find the derivative of \\(\\vec r(t)=\\langle t\\cos t,\\ e^{t^{2}}\\rangle\\) and the tangent vector at \\(t=0\\).",
        "steps": [
          "第一个分量用乘积法则：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t\\cos t)=\\cos t-t\\sin t\\)。 · The first component uses the product rule: \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t\\cos t)=\\cos t-t\\sin t\\).",
          "第二个分量用链式法则：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}t}e^{t^{2}}=2t e^{t^{2}}\\)。 · The second component uses the chain rule: \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}t}e^{t^{2}}=2t e^{t^{2}}\\).",
          "所以 \\(\\vec r'(t)=\\langle\\cos t-t\\sin t,\\ 2t e^{t^{2}}\\rangle\\)。 · Therefore \\(\\vec r'(t)=\\langle\\cos t-t\\sin t,\\ 2t e^{t^{2}}\\rangle\\).",
          "在 \\(t=0\\)：\\(\\vec r'(0)=\\langle1,0\\rangle\\)。 · At \\(t=0\\), \\(\\vec r'(0)=\\langle1,0\\rangle\\)."
        ],
        "solution": "导数为 \\(\\vec r'(t)=\\langle\\cos t-t\\sin t,\\ 2t e^{t^{2}}\\rangle\\)，且 \\(\\vec r'(0)=\\langle1,0\\rangle\\)。 · \\(\\vec r'(t)=\\langle\\cos t-t\\sin t,\\ 2t e^{t^{2}}\\rangle\\) and \\(\\vec r'(0)=\\langle1,0\\rangle\\).",
        "solutionLatex": "\\vec r'(t)=\\langle\\cos t-t\\sin t,\\ 2t e^{t^{2}}\\rangle,\\qquad \\vec r'(0)=\\langle1,0\\rangle"
      },
      {
        "title": "例 5 · 连续但不可导 · Example 5: Continuous but not differentiable",
        "prompt": "\\(\\vec r(t)=\\langle t^{2},|t|\\rangle\\)。说明它在 \\(t=0\\) 连续但不可导。 · For \\(\\vec r(t)=\\langle t^{2},|t|\\rangle\\), show that it is continuous but not differentiable at \\(t=0\\).",
        "steps": [
          "两个分量在 \\(t=0\\) 都连续，因此 \\(\\vec r\\) 在 \\(t=0\\) 连续。 · Both components are continuous at \\(t=0\\), so \\(\\vec r\\) is continuous there.",
          "\\(x'(0)=0\\)，但 \\(y(t)=|t|\\) 在 \\(0\\) 的差商为 \\(\\dfrac{|h|-0}{h}=\\dfrac{|h|}{h}\\)：当 \\(h>0\\) 时为 \\(1\\)，当 \\(h<0\\) 时为 \\(-1\\)。 · \\(x'(0)=0\\), but the difference quotient of \\(y(t)=|t|\\) at \\(0\\) is \\(\\dfrac{|h|-0}{h}=\\dfrac{|h|}{h}\\): it equals \\(1\\) for \\(h>0\\) and \\(-1\\) for \\(h<0\\).",
          "左右极限不同，故 \\(y'(0)\\) 不存在，从而 \\(\\vec r'(0)\\) 不存在。 · The one-sided limits differ, so \\(y'(0)\\) does not exist, and therefore \\(\\vec r'(0)\\) does not exist.",
          "这说明向量值函数的可导性要求每个分量都可导，连续不足以保证可导。 · Thus differentiability of a vector-valued function requires every component to be differentiable; continuity alone is not enough."
        ],
        "solution": "\\(\\vec r\\) 在 \\(t=0\\) 连续；但 \\(y=|t|\\) 的左右差商极限分别为 \\(1\\) 与 \\(-1\\)，所以 \\(\\vec r'(0)\\) 不存在。 · \\(\\vec r\\) is continuous at \\(t=0\\), but the left and right difference-quotient limits of \\(y=|t|\\) are \\(1\\) and \\(-1\\), so \\(\\vec r'(0)\\) does not exist.",
        "solutionLatex": "\\lim_{h\\to0^{+}}\\dfrac{|h|}{h}=1,\\qquad \\lim_{h\\to0^{-}}\\dfrac{|h|}{h}=-1"
      },
      {
        "title": "例 6 · 点积恒等式与垂直速度 · Example 6: Dot-product identity and perpendicular velocity",
        "prompt": "\\(\\vec r(t)=\\langle\\cos t,\\sin t\\rangle\\)。验证 \\(\\vec r\\cdot\\vec r=1\\)，并用求导法则说明 \\(\\vec r\\cdot\\vec r'=0\\)。 · For \\(\\vec r(t)=\\langle\\cos t,\\sin t\\rangle\\), verify \\(\\vec r\\cdot\\vec r=1\\) and use differentiation rules to show \\(\\vec r\\cdot\\vec r'=0\\).",
        "steps": [
          "先验证 \\(\\vec r\\cdot\\vec r=\\cos^{2}t+\\sin^{2}t=1\\)。 · \\(\\vec r\\cdot\\vec r=\\cos^{2}t+\\sin^{2}t=1\\).",
          "两边对 \\(t\\) 求导，左边用点积乘积法则：\\(2\\vec r\\cdot\\vec r'=0\\)。 · Differentiate both sides with respect to \\(t\\); the left side uses the dot-product rule: \\(2\\vec r\\cdot\\vec r'=0\\).",
          "\\(\\vec r'=\\langle-\\sin t,\\cos t\\rangle\\)，直接计算也得 \\(\\vec r\\cdot\\vec r'=-\\sin t\\cos t+\\sin t\\cos t=0\\)。 · Since \\(\\vec r'=\\langle-\\sin t,\\cos t\\rangle\\), direct computation also gives \\(\\vec r\\cdot\\vec r'=-\\sin t\\cos t+\\sin t\\cos t=0\\).",
          "所以速度与位置向量垂直；这正对应匀速圆周运动，且 \\(\\|\\vec r'\\|=1\\)。 · Therefore velocity is perpendicular to the position vector; this describes uniform circular motion, and \\(\\|\\vec r'\\|=1\\)."
        ],
        "solution": "\\(\\vec r\\cdot\\vec r=1\\)，求导得 \\(2\\vec r\\cdot\\vec r'=0\\)，故 \\(\\vec r\\cdot\\vec r'=0\\)。 · \\(\\vec r\\cdot\\vec r=1\\); differentiating gives \\(2\\vec r\\cdot\\vec r'=0\\), so \\(\\vec r\\cdot\\vec r'=0\\).",
        "solutionLatex": "\\vec r\\cdot\\vec r=1\\ \\Longrightarrow\\ 2\\vec r\\cdot\\vec r'=0"
      },
      {
        "title": "例 7 · 三维向量值函数 · Example 7: A three-dimensional vector-valued function",
        "prompt": "\\(\\vec r(t)=\\langle t,\\ t^{2},\\ t^{3}\\rangle\\)。求 \\(\\vec r'(t)\\) 以及 \\(t=1\\) 处的单位切向量。 · For \\(\\vec r(t)=\\langle t,\\ t^{2},\\ t^{3}\\rangle\\), find \\(\\vec r'(t)\\) and the unit tangent vector at \\(t=1\\).",
        "steps": [
          "逐分量求导：\\(\\vec r'(t)=\\langle1,\\ 2t,\\ 3t^{2}\\rangle\\)。 · Differentiate componentwise: \\(\\vec r'(t)=\\langle1,\\ 2t,\\ 3t^{2}\\rangle\\).",
          "在 \\(t=1\\)：\\(\\vec r'(1)=\\langle1,2,3\\rangle\\)，模为 \\(\\sqrt{1+4+9}=\\sqrt{14}\\)。 · At \\(t=1\\), \\(\\vec r'(1)=\\langle1,2,3\\rangle\\), whose magnitude is \\(\\sqrt{1+4+9}=\\sqrt{14}\\).",
          "单位切向量 \\(\\vec T(1)=\\dfrac{1}{\\sqrt{14}}\\langle1,2,3\\rangle=\\left\\langle\\dfrac{1}{\\sqrt{14}},\\dfrac{2}{\\sqrt{14}},\\dfrac{3}{\\sqrt{14}}\\right\\rangle\\)。 · Unit tangent vector: \\(\\vec T(1)=\\dfrac{1}{\\sqrt{14}}\\langle1,2,3\\rangle=\\left\\langle\\dfrac{1}{\\sqrt{14}},\\dfrac{2}{\\sqrt{14}},\\dfrac{3}{\\sqrt{14}}\\right\\rangle\\)."
        ],
        "solution": "逐分量求导得 \\(\\vec r'(t)=\\langle1,2t,3t^{2}\\rangle\\)，单位切向量为 \\(\\vec T(1)=\\dfrac{1}{\\sqrt{14}}\\langle1,2,3\\rangle\\)。 · \\(\\vec r'(t)=\\langle1,2t,3t^{2}\\rangle\\) and \\(\\vec T(1)=\\dfrac{1}{\\sqrt{14}}\\langle1,2,3\\rangle\\).",
        "solutionLatex": "\\vec r'(t)=\\langle1,2t,3t^{2}\\rangle,\\qquad \\vec T(1)=\\dfrac{1}{\\sqrt{14}}\\langle1,2,3\\rangle"
      }
    ],
    "examTips": [
      "先分别求 \\(x'(t)\\)、\\(y'(t)\\)（及 \\(z'(t)\\)），再组装成向量；每一步都用实值函数求导法则。 · Find the component derivatives separately, then assemble the vector; use the real-valued differentiation rules at every step.",
      "区分速度、速率与加速度：速度是向量，速率是非负标量，加速度是速度的导数。 · Distinguish velocity, speed, and acceleration: velocity is a vector, speed is a nonnegative scalar, and acceleration is the derivative of velocity.",
      "切线题先求切点 \\(\\vec r(t_0)\\) 与方向 \\(\\vec r'(t_0)\\)；写单位切向量前确认 \\(\\vec r'(t_0)\\neq\\vec{0}\\)。 · For tangent-line problems, first find the point and the direction; before writing a unit tangent vector, confirm the derivative is nonzero.",
      "检查可导性时逐个分量看，遇到绝对值、分段点或尖点要算左右差商。 · Check differentiability component by component; at absolute values, piecewise breakpoints, or cusps, compute one-sided difference quotients.",
      "链式法则与乘积法则不要漏项；向量值函数没有“新”法则，全部逐分量验证。 · Do not omit terms in the chain and product rules; there is no separate vector-only rule—verify everything componentwise.",
      "AP 简答按主张—证据—推理：写定义或法则，代入分量，解释方向与大小并做合理性检查。 · Organize AP free response as claim–evidence–reasoning: state the definition or rule, substitute the components, interpret direction and magnitude, and check plausibility."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.1",
        "title": "参数运动导数 · Defining and Differentiating Parametric Equations",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.5",
        "title": "向量值函数积分 · Integrating Vector-Valued Functions",
        "relation": "后续 · Follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.6",
        "title": "向量运动解题 · Solving Motion Problems Using Parametric and Vector-Valued Functions",
        "relation": "应用 · Application"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.2",
        "title": "导数定义 · Definition of the Derivative",
        "relation": "先修 · Prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：9.1 参数方程给出参数曲线与 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 的参数求导；2.2 的导数极限定义是向量导数的直接来源。 · Upstream: parametric equations in 9.1 give parametric curves and parametric slopes; the limit definition of the derivative in 2.2 is the direct source of the vector derivative.",
      "数学：向量代数、极限与逐分量运算；求导法则与实值函数完全平行，只是结果重新组装为向量。 · Mathematics: vector algebra, limits, and componentwise operations; the differentiation rules parallel the real-valued case exactly, with the results reassembled into a vector.",
      "下游：9.5 逐分量积分还原位置向量；9.6 用 \\(\\vec r,\\vec v,\\vec a\\) 解决运动、位移与路程问题。 · Downstream: componentwise integration in 9.5 recovers position vectors; 9.6 uses position, velocity, and acceleration to solve motion, displacement, and distance problems.",
      "跨学科：物理中的抛体、圆周运动与三维轨迹都用位置、速度、加速度向量描述；工程中的路径规划也使用参数曲线。 · Cross-disciplinary: projectile motion, circular motion, and three-dimensional trajectories in physics are described by position, velocity, and acceleration vectors; path planning in engineering also uses parametric curves."
    ],
    "intuitionDetailed": "把向量值函数看成“每个时刻的位置箭头”。从 \\(t\\) 到 \\(t+h\\)，位置改变了一个小向量 \\(\\vec r(t+h)-\\vec r(t)\\)；除以时间间隔 \\(h\\) 得到平均速度向量，再让 \\(h\\to0\\) 得到瞬时速度向量。这个极限按分量计算，所以只需分别求 \\(x'(t)\\)、\\(y'(t)\\)，再把它们放回同一个尖括号。几何上，割线方向在极限中变成切线方向，因此 \\(\\vec r'(t)\\) 是切向量；它的模长是速率，方向是运动方向。求导法则也不需要重新发明：和、数乘、乘积与链式法则对每个分量成立，组合起来就对向量成立。要注意的是，单位切向量要求 \\(\\vec r'(t)\\neq\\vec{0}\\)；导数为零只表示瞬时速度为零。最后用图像检查方向、用分量检查符号，并用 \\(\\|\\vec v\\|\\) 检验速率是否为非负标量。 · Think of a vector-valued function as a position arrow at each instant. From \\(t\\) to \\(t+h\\), the position changes by a small vector \\(\\vec r(t+h)-\\vec r(t)\\); dividing by the time interval \\(h\\) gives an average velocity vector, and letting \\(h\\to0\\) gives the instantaneous velocity vector. This limit is computed componentwise, so only \\(x'(t)\\) and \\(y'(t)\\) need to be found separately and then placed back into the same angle brackets. Geometrically, the secant direction becomes the tangent direction in the limit, so \\(\\vec r'(t)\\) is a tangent vector; its magnitude is speed, and its direction is the direction of motion. The differentiation rules do not need to be reinvented: the sum, scalar-multiple, product, and chain rules hold for each component, and combining them gives the vector rule. Note that a unit tangent vector requires \\(\\vec r'(t)\\neq\\vec{0}\\); a zero derivative only means the instantaneous velocity is zero. Finally, use the graph to check direction, use components to check signs, and use \\(\\|\\vec v\\|\\) to confirm that speed is a nonnegative scalar.",
    "development": [
      "回顾参数方程与实值函数求导：\\(x(t)\\)、\\(y(t)\\) 分别可导时，曲线才有光滑的参数化。 · Review parametric equations and real-valued differentiation: a smooth parametrization requires \\(x(t)\\) and \\(y(t)\\) to be differentiable.",
      "用向量极限定义 \\(\\vec r'(t)\\)，并说明极限按分量计算。 · Define the vector derivative by the vector limit and explain that the limit is computed componentwise.",
      "把和、数乘、乘积与链式法则逐分量搬到向量值函数。 · Extend the sum, scalar-multiple, product, and chain rules componentwise to vector-valued functions.",
      "解释导数的几何意义（切向量）与运动学意义（速度、速率、加速度）。 · Interpret the derivative geometrically as a tangent vector and kinematically as velocity, speed, and acceleration.",
      "用单位切向量、切线方程和可导性判定做综合练习。 · Practice unit tangent vectors, tangent lines, and differentiability tests in combined exercises.",
      "检查：分量是否齐全、速率是否为标量、\\(\\vec r'(t)\\neq\\vec{0}\\) 是否满足。 · Check that all components are present, that speed is a scalar, and that the nonzero-derivative condition holds when needed."
    ],
    "checks": [
      "为什么 \\(\\vec r'(t)\\) 可以逐分量求导？用向量极限说明。 · Why can the derivative be computed componentwise? Explain using the vector limit.",
      "\\(\\vec r'(t)=\\vec{0}\\) 时，函数是否可导？单位切向量是否定义？ · If the derivative is the zero vector, is the function differentiable? Is the unit tangent vector defined?",
      "速度、速率、加速度三者有什么区别与联系？ · What are the differences and connections among velocity, speed, and acceleration?",
      "\\(\\vec r(t)=\\langle t,|t|\\rangle\\) 在 \\(t=0\\) 连续吗？可导吗？为什么？ · Is \\(\\vec r(t)=\\langle t,|t|\\rangle\\) continuous at \\(t=0\\)? Is it differentiable there? Why?",
      "换参数化 \\(t=f(s)\\) 后，\\(\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}s}\\) 与 \\(\\vec r'(t)\\) 有什么关系？ · After reparameterizing with \\(t=f(s)\\), how is \\(\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}s}\\) related to \\(\\vec r'(t)\\)?",
      "三维情形求导时最容易漏掉什么？ · What is most easily omitted when differentiating in three dimensions?"
    ],
    "vocabulary": [
      {
        "termZh": "向量值函数",
        "termEn": "vector-valued function",
        "defZh": "输出为向量的函数 \\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\)。",
        "defEn": "A function with vector outputs, \\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\)."
      },
      {
        "termZh": "分量",
        "termEn": "component",
        "defZh": "向量中的每个坐标函数，如 \\(x(t)\\) 与 \\(y(t)\\)。",
        "defEn": "Each coordinate function in a vector, such as \\(x(t)\\) and \\(y(t)\\)."
      },
      {
        "termZh": "位置向量",
        "termEn": "position vector",
        "defZh": "从原点指向点的向量 \\(\\vec r(t)\\)。",
        "defEn": "The vector \\(\\vec r(t)\\) from the origin to a point."
      },
      {
        "termZh": "速度向量",
        "termEn": "velocity vector",
        "defZh": "\\(\\vec v(t)=\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\)。",
        "defEn": "\\(\\vec v(t)=\\vec r'(t)=\\langle x'(t),y'(t)\\rangle\\)."
      },
      {
        "termZh": "加速度向量",
        "termEn": "acceleration vector",
        "defZh": "\\(\\vec a(t)=\\vec v'(t)=\\vec r''(t)\\)。",
        "defEn": "\\(\\vec a(t)=\\vec v'(t)=\\vec r''(t)\\)."
      },
      {
        "termZh": "逐分量求导",
        "termEn": "componentwise differentiation",
        "defZh": "对每个分量分别求导，再组合成向量。",
        "defEn": "Differentiate each component separately, then combine the results into a vector."
      },
      {
        "termZh": "速率",
        "termEn": "speed",
        "defZh": "速度向量的模 \\(\\|\\vec v(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\)，是非负标量。",
        "defEn": "The magnitude of the velocity vector, \\(\\|\\vec v(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\), a nonnegative scalar."
      },
      {
        "termZh": "单位切向量",
        "termEn": "unit tangent vector",
        "defZh": "\\(\\vec T(t)=\\dfrac{\\vec r'(t)}{\\|\\vec r'(t)\\|}\\)，要求 \\(\\vec r'(t)\\neq\\vec{0}\\)。",
        "defEn": "\\(\\vec T(t)=\\dfrac{\\vec r'(t)}{\\|\\vec r'(t)\\|}\\), defined when \\(\\vec r'(t)\\neq\\vec{0}\\)."
      }
    ]
  },
  "9.5": {
    "id": "math/calc-u9/9.5",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.5",
    "titleZh": "向量值函数积分",
    "titleEn": "Integrating Vector-Valued Functions",
    "layer": "ap",
    "summary": "向量值函数积分 · Integrating Vector-Valued Functions",
    "learningObjectives": [
      "能陈述「向量值函数积分」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Integrating Vector-Valued Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「向量值函数积分」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "向量值函数积分（Integrating Vector-Valued Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「向量值函数积分」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b \\vec r(t)\\,\\mathrm{d}t=\\left\\langle\\int_a^b x(t)\\,\\mathrm{d}t,\\ \\int_a^b y(t)\\,\\mathrm{d}t\\right\\rangle",
        "note": "向量值函数积分：各分量分别积分。 · Integrate a vector-valued function component by component."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「向量值函数积分」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 9.5「向量值函数积分」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「向量值函数积分」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「向量值函数积分」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「向量值函数积分」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「向量值函数积分」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「向量值函数积分」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.4",
        "title": "向量值函数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.6",
        "title": "向量运动解题",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「向量值函数积分」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「向量值函数积分」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「向量值函数积分」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "向量值函数积分",
        "termEn": "integral of a vector-valued function",
        "defZh": "对每个分量分别积分。",
        "defEn": "Integrating each component separately."
      },
      {
        "termZh": "逐分量积分",
        "termEn": "componentwise integration",
        "defZh": "\\(\\int\\langle x(t),y(t)\\rangle\\,\\mathrm{d}t=\\left\\langle\\int x(t)\\,\\mathrm{d}t,\\int y(t)\\,\\mathrm{d}t\\right\\rangle\\)。",
        "defEn": "\\(\\int\\langle x(t),y(t)\\rangle\\,\\mathrm{d}t=\\left\\langle\\int x(t)\\,\\mathrm{d}t,\\int y(t)\\,\\mathrm{d}t\\right\\rangle\\)."
      },
      {
        "termZh": "初始位置",
        "termEn": "initial position",
        "defZh": "由 \\(\\vec r(0)\\) 给出的积分常数向量。",
        "defEn": "The constant vector supplied by \\(\\vec r(0)\\)."
      },
      {
        "termZh": "速度向量",
        "termEn": "velocity vector",
        "defZh": "积分后得到位置向量。",
        "defEn": "Its integral gives the position vector."
      },
      {
        "termZh": "定积分",
        "termEn": "definite integral",
        "defZh": "对向量函数在区间上逐分量求定积分。",
        "defEn": "A definite integral of a vector function taken component by component."
      },
      {
        "termZh": "积分常数向量",
        "termEn": "constant vector of integration",
        "defZh": "不定积分中每个分量各自的常数组成的向量。",
        "defEn": "A vector whose components are the separate constants of integration."
      }
    ]
  },
  "9.6": {
    "id": "math/calc-u9/9.6",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.6",
    "titleZh": "向量运动解题",
    "titleEn": "Solving Motion Problems Using Parametric and Vector-Valued Functions",
    "layer": "ap",
    "summary": "向量运动解题 · Solving Motion Problems Using Parametric and Vector-Valued Functions",
    "learningObjectives": [
      "能陈述「向量运动解题」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Solving Motion Problems Using Parametric and Vector-Valued Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「向量运动解题」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "向量运动解题（Solving Motion Problems Using Parametric and Vector-Valued Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「向量运动解题」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec r(t)=\\langle x(t),y(t)\\rangle,\\quad \\vec v=\\vec r'(t),\\quad \\vec a=\\vec r''(t)",
        "note": "向量运动：逐分量求导得到速度与加速度。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「向量运动解题」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 9.6「向量运动解题」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「向量运动解题」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「向量运动解题」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「向量运动解题」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「向量运动解题」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「向量运动解题」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.5",
        "title": "向量值函数积分",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.7",
        "title": "极坐标导数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「向量运动解题」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「向量运动解题」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「向量运动解题」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "位置向量",
        "termEn": "position vector",
        "defZh": "\\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\)，描述运动质点位置。",
        "defEn": "\\(\\vec r(t)=\\langle x(t),y(t)\\rangle\\), describing a moving particle's position."
      },
      {
        "termZh": "速度向量",
        "termEn": "velocity vector",
        "defZh": "\\(\\vec v(t)=\\vec r'(t)\\)，切线方向。",
        "defEn": "\\(\\vec v(t)=\\vec r'(t)\\), tangent to the path."
      },
      {
        "termZh": "加速度向量",
        "termEn": "acceleration vector",
        "defZh": "\\(\\vec a(t)=\\vec v'(t)\\)，速度的变化率。",
        "defEn": "\\(\\vec a(t)=\\vec v'(t)\\), the rate of change of velocity."
      },
      {
        "termZh": "速率",
        "termEn": "speed",
        "defZh": "\\(\\|\\vec v(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\)。",
        "defEn": "\\(\\|\\vec v(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\)."
      },
      {
        "termZh": "位移",
        "termEn": "displacement",
        "defZh": "位置向量的改变量 \\(\\vec r(b)-\\vec r(a)\\)。",
        "defEn": "The change in position vector, \\(\\vec r(b)-\\vec r(a)\\)."
      },
      {
        "termZh": "路程",
        "termEn": "distance traveled",
        "defZh": "速率在时间区间上的积分 \\(\\int_a^b\\|\\vec v(t)\\|\\,\\mathrm{d}t\\)。",
        "defEn": "The integral of speed over a time interval, \\(\\int_a^b\\|\\vec v(t)\\|\\,\\mathrm{d}t\\)."
      }
    ]
  },
  "9.7": {
    "id": "math/calc-u9/9.7",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.7",
    "titleZh": "极坐标导数",
    "titleEn": "Defining Polar Coordinates and Differentiating in Polar Form",
    "layer": "ap",
    "summary": "极坐标曲线的切线斜率来自参数方程 \\(x=r\\cos\\theta\\)、\\(y=r\\sin\\theta\\) 的导数之比；水平切线看 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)，竖直切线看 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)；二阶导数由 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\) 除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) 得到，其符号给出凹凸性，极点单独处理。 · The tangent slope of a polar curve comes from the ratio of derivatives of the parametric equations \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\); horizontal tangents use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\), vertical tangents use \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\); the second derivative is obtained by dividing \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\) by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\), its sign gives concavity, and the pole is handled separately.",
    "learningObjectives": [
      "能在极坐标 \\((r,\\theta)\\) 与直角坐标 \\((x,y)\\) 之间转换，并处理负半径与多值角。 · Convert between polar coordinates \\((r,\\theta)\\) and rectangular coordinates \\((x,y)\\), including negative radii and multiple angles.",
      "能对 \\(r=f(\\theta)\\) 分别求 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\)、\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)、\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)，并用 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\) 求切线斜率。 · Differentiate \\(r=f(\\theta)\\) to find \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\), \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\), and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\), and use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\) to find the tangent slope.",
      "能由 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) 与 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) 判断水平切线与竖直切线，并单独处理极点。 · Use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) and \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) to identify horizontal and vertical tangents, treating the pole separately.",
      "能用 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\) 求极坐标曲线的二阶导数，并用其符号判断凹凸性。 · Use \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\) to find the second derivative of a polar curve and use its sign to determine concavity.",
    ],
    "essentialKnowledge": [
      "极坐标与直角坐标的关系为 \\(x=r\\cos\\theta\\)、\\(y=r\\sin\\theta\\)；反过来 \\(r^{2}=x^{2}+y^{2}\\)，\\(\\tan\\theta=\\dfrac{y}{x}\\)（要按象限修正）。 · Polar and rectangular coordinates satisfy \\(x=r\\cos\\theta\\) and \\(y=r\\sin\\theta\\); conversely, \\(r^{2}=x^{2}+y^{2}\\) and \\(\\tan\\theta=\\dfrac{y}{x}\\) (with quadrant correction).",
      "极坐标表示不唯一：\\((r,\\theta)\\) 与 \\((-r,\\theta+\\pi)\\) 表示同一点；负半径和周期性都要考虑。 · Polar representation is not unique: \\((r,\\theta)\\) and \\((-r,\\theta+\\pi)\\) represent the same point; negative radii and periodicity must be considered.",
      "把 \\(r=f(\\theta)\\) 代入得参数方程 \\(x(\\theta)=f(\\theta)\\cos\\theta\\)、\\(y(\\theta)=f(\\theta)\\sin\\theta\\)；用乘积法则对 \\(\\theta\\) 求导得 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta\\)、\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta\\)。 · Substituting \\(r=f(\\theta)\\) gives the parametric equations \\(x(\\theta)=f(\\theta)\\cos\\theta\\) and \\(y(\\theta)=f(\\theta)\\sin\\theta\\); the product rule gives \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta\\).",
      "一阶导数是两个对 \\(\\theta\\) 的导数之比：\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\)，要求 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\)。 · The first derivative is the ratio of the two \\(\\theta\\)-derivatives: \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\), defined when \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\).",
      "\\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}=f'(\\theta)\\) 只描述半径随角度的变化率，不是切线斜率；切线方向由 \\(x\\) 与 \\(y\\) 同时随 \\(\\theta\\) 的变化决定。 · \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}=f'(\\theta)\\) only describes how the radius changes with angle; it is not the tangent slope. The tangent direction is determined by how both \\(x\\) and \\(y\\) change with \\(\\theta\\).",
      "水平切线要求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) 且 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\)；竖直切线要求 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) 且 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\)。 · A horizontal tangent requires \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) and \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\); a vertical tangent requires \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\).",
      "二阶导数用链式法则：\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\)，即先把切线斜率看作 \\(\\theta\\) 的函数求导，再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)；它描述斜率随 \\(x\\) 的变化率。 · The second derivative uses the chain rule: \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\), that is, differentiate the slope as a function of \\(\\theta\\), then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\); it describes how the slope changes with \\(x\\).",
      "在 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\) 的区间上，\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}>0\\) 表示曲线凹向上，\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}<0\\) 表示凹向下；结合一阶导数可判断极值、拐点与曲线弯曲方向。 · On an interval where \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\), \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}>0\\) means the curve is concave up and \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}<0\\) means concave down; together with the first derivative this identifies extrema, inflection points, and the direction of bending.",
      "在极点 \\(r=0\\) 处两个一阶导数可能同时为零，切线要用极限或转回直角坐标判断；二阶导数公式在 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) 处不适用。 · At the pole \\(r=0\\), both first derivatives may vanish; the tangent must be found by a limit or by converting to rectangular coordinates. The second-derivative formula does not apply where \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\).",
    ],
    "definition": "极坐标用有序对 \\((r,\\theta)\\) 描述点：\\(r\\) 是到极点的有向距离，\\(\\theta\\) 是与正 \\(x\\) 轴的夹角。曲线 \\(r=f(\\theta)\\) 可化为参数方程 \\(x=f(\\theta)\\cos\\theta\\)、\\(y=f(\\theta)\\sin\\theta\\)。对 \\(\\theta\\) 求导得到 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\)、\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)、\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)；一阶导数 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\) 给出切线斜率，二阶导数 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\) 给出斜率随 \\(x\\) 的变化率与凹凸性。 · Polar coordinates describe a point by an ordered pair \\((r,\\theta)\\): \\(r\\) is the directed distance from the pole, and \\(\\theta\\) is the angle from the positive \\(x\\)-axis. A curve \\(r=f(\\theta)\\) becomes the parametric equations \\(x=f(\\theta)\\cos\\theta\\) and \\(y=f(\\theta)\\sin\\theta\\). Differentiating with respect to \\(\\theta\\) gives \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\), \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\), and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\); the first derivative \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\) gives the tangent slope, and the second derivative \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\) gives the rate at which the slope changes with \\(x\\) and the concavity.",
    "intuition": "极坐标曲线像一根从极点伸出的“雷达臂”：角度转动时，臂的长度 \\(r\\) 随之伸缩。一阶导数给出端点实际移动的方向，也就是切线斜率；二阶导数则告诉我们这个方向转得多快、曲线向哪边弯。 · A polar curve is like a radar arm extending from the pole: as the angle turns, the arm length \\(r\\) expands or contracts. The first derivative gives the direction in which the endpoint actually moves, which is the tangent slope; the second derivative tells how quickly that direction turns and which way the curve bends.",
    "formulas": [
      {
        "latex": "x=r\\cos\\theta,\\quad y=r\\sin\\theta",
        "note": "极坐标到直角坐标。 · Polar to rectangular."
      },
      {
        "latex": "r^{2}=x^{2}+y^{2},\\quad \\tan\\theta=\\dfrac{y}{x}",
        "note": "直角坐标到极坐标；角度要按象限修正。 · Rectangular to polar; correct the angle by quadrant."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}=f'(\\theta),\\qquad \\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta,\\qquad \\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta",
        "note": "对 \\(r\\) 直接求导，对参数方程 \\(x\\)、\\(y\\) 使用乘积法则；后两式都含 \\(f\\) 与 \\(f'\\)。 · Differentiate \\(r\\) directly and apply the product rule to the parametric equations for \\(x\\) and \\(y\\); the latter two contain both \\(f\\) and \\(f'\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}",
        "note": "极坐标曲线的切线斜率；要求 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\)。 · Tangent slope of a polar curve; requires \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}",
        "note": "极坐标曲线的二阶导数：先对 \\(\\theta\\) 求斜率的导数，再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)。 · Second derivative of a polar curve: differentiate the slope with respect to \\(\\theta\\), then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{r^{2}+2\\left(r'\\right)^{2}-r\\,r''}{\\left(r'\\cos\\theta-r\\sin\\theta\\right)^{3}}",
        "note": "闭式验算公式（分母是 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) 的三次方）；考试时通常用上一式逐次求导。 · Closed-form check (the denominator is the cube of \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)); in practice, differentiate successively with the preceding formula."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0,\\;\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\;\\Rightarrow\\;\\text{水平切线}",
        "note": "水平切线的条件。 · Condition for a horizontal tangent."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0,\\;\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\;\\Rightarrow\\;\\text{竖直切线}",
        "note": "竖直切线的条件。 · Condition for a vertical tangent."
      }
    ],
    "derivationNotes": [
      {
        "from": "极坐标定义 · Polar definition",
        "to": "参数方程 · Parametric equations",
        "note": "把 \\(r=f(\\theta)\\) 代入 \\(x=r\\cos\\theta\\)、\\(y=r\\sin\\theta\\)，得到以 \\(\\theta\\) 为参数的曲线。 · Substitute \\(r=f(\\theta)\\) into \\(x=r\\cos\\theta\\) and \\(y=r\\sin\\theta\\) to obtain a curve parametrized by \\(\\theta\\)."
      },
      {
        "from": "参数方程 · Parametric equations",
        "to": "对 \\(\\theta\\) 的导数 · Derivatives with respect to \\(\\theta\\)",
        "note": "对 \\(x=f(\\theta)\\cos\\theta\\) 与 \\(y=f(\\theta)\\sin\\theta\\) 使用乘积法则，得到 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) 与 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)；\\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}=f'(\\theta)\\) 只是其中的一部分信息。 · Apply the product rule to \\(x=f(\\theta)\\cos\\theta\\) and \\(y=f(\\theta)\\sin\\theta\\) to obtain \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\); \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}=f'(\\theta)\\) is only part of the information."
      },
      {
        "from": "对 \\(\\theta\\) 的导数 · Derivatives with respect to \\(\\theta\\)",
        "to": "一阶导数 · First derivative",
        "note": "由参数方程求导公式 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\)，两式相除即得切线斜率。 · By the parametric derivative formula \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\), dividing the two derivatives gives the tangent slope."
      },
      {
        "from": "一阶导数 · First derivative",
        "to": "二阶导数 · Second derivative",
        "note": "把 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 看成 \\(\\theta\\) 的函数，先对 \\(\\theta\\) 求导，再用链式法则除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\cdot\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}x}\\)。 · Treat \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) as a function of \\(\\theta\\), differentiate it with respect to \\(\\theta\\), then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) by the chain rule: \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\cdot\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}x}\\)."
      },
      {
        "from": "二阶导数 · Second derivative",
        "to": "曲线信息 · Information about the curve",
        "note": "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 的符号给出凹凸性；与 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 的符号联合，可判断递增/递减、极值候选与拐点候选。 · The sign of \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) gives concavity; combined with the sign of \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\), it identifies increasing/decreasing behavior, extrema candidates, and inflection candidates."
      },
      {
        "from": "导数之比 · Ratio of derivatives",
        "to": "切线分类 · Tangent classification",
        "note": "分子 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) 而分母不为零给水平切线；分母 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) 而分子不为零给竖直切线。 · A zero numerator \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) with a nonzero denominator gives a horizontal tangent; a zero denominator \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) with a nonzero numerator gives a vertical tangent."
      }
    ],
    "conditions": [
      "一阶导数要求 \\(f\\) 在讨论区间内可导；二阶导数还要求 \\(f\\) 二阶可导（即 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 对 \\(\\theta\\) 可导）。 · The first derivative requires \\(f\\) to be differentiable on the interval; the second derivative also requires \\(f\\) to be twice differentiable (so that \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) is differentiable with respect to \\(\\theta\\)).",
      "切线斜率与二阶导数公式都要求 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\)；分母为零时不能直接相除。 · Both the tangent slope and the second-derivative formula require \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\); do not divide when the denominator is zero.",
      "\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) 且 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\) 时是竖直切线，应单独写出，而不是说“斜率不存在”就结束。 · When \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\), the tangent is vertical; state that separately instead of stopping at “the slope is undefined.”",
      "在极点 \\(r=0\\) 处两个一阶导数可能同时为零，切线要用极限或转回直角坐标判断。 · At the pole \\(r=0\\), both first derivatives may vanish; determine the tangent by a limit or by converting to rectangular coordinates.",
      "转换角度时要按点所在象限修正，不能只用 \\(\\arctan\\left(\\dfrac{y}{x}\\right)\\)；负半径是合法的。 · Correct the angle by quadrant; do not rely only on \\(\\arctan\\left(\\dfrac{y}{x}\\right)\\). Negative radii are allowed.",
      "同一条极坐标曲线可能被重复描过；求切线或判断凹凸性时要注意所选角度范围只描过一次。 · A polar curve may be traced more than once; when finding tangents or concavity, choose an angle range that traces the curve once.",
      "三角函数的求导公式要求角度以弧度为单位。 · The trigonometric derivative formulas require angles measured in radians."
    ],
    "keyPoints": [
      "先写 \\(x(\\theta)=f(\\theta)\\cos\\theta\\)、\\(y(\\theta)=f(\\theta)\\sin\\theta\\)，再对 \\(\\theta\\) 求导。 · Write \\(x(\\theta)=f(\\theta)\\cos\\theta\\) and \\(y(\\theta)=f(\\theta)\\sin\\theta\\) first, then differentiate with respect to \\(\\theta\\).",
      "\\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) 不是切线斜率；切线斜率是 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。 · \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) is not the tangent slope; the tangent slope is \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\).",
      "水平切线看分子 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)，竖直切线看分母 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)。 · Horizontal tangents use the numerator \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\); vertical tangents use the denominator \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\).",
      "二阶导数必须“先对 \\(\\theta\\) 求斜率的导数，再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)”，不能把两个二阶导数直接相除。 · For the second derivative, differentiate the slope with respect to \\(\\theta\\) and then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\); do not divide the two second derivatives directly.",
      "二阶导数的符号给出凹凸性：正凹向上，负凹向下。 · The sign of the second derivative gives concavity: positive is concave up, negative is concave down.",
      "极点处两个一阶导数可能同时为零，要单独判断切线。 · At the pole both first derivatives may vanish; determine the tangent separately."
    ],
    "misconceptions": [
      "把 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) 当作切线斜率。 · Treating \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) as the tangent slope.",
      "把 \\(\\dfrac{y}{x}\\) 当作曲线在极坐标下的斜率。 · Treating \\(\\dfrac{y}{x}\\) as the slope of a polar curve.",
      "忘记对 \\(r\\cos\\theta\\) 与 \\(r\\sin\\theta\\) 使用乘积法则。 · Forgetting the product rule for \\(r\\cos\\theta\\) and \\(r\\sin\\theta\\).",
      "把水平与竖直切线的条件弄反。 · Swapping the conditions for horizontal and vertical tangents.",
      "把 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 写成 \\(\\dfrac{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}\\theta^{2}}}{\\frac{\\mathrm{d}^{2}x}{\\mathrm{d}\\theta^{2}}}\\)。 · Writing \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) as \\(\\dfrac{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}\\theta^{2}}}{\\frac{\\mathrm{d}^{2}x}{\\mathrm{d}\\theta^{2}}}\\).",
      "对 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 求导后忘记再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)。 · Differentiating \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) but forgetting to divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\).",
      "在极点两个导数都为零时直接写“斜率不存在”而不判断切线。 · Declaring “no slope” at the pole when both derivatives vanish without determining the tangent."
    ],
    "examples": [
      {
        "title": "例 1 · 心形线的一阶与二阶导数 · Example 1: First and Second Derivatives of a Cardioid",
        "prompt": "求 \\(r=1+\\cos\\theta\\) 在 \\(\\theta=\\dfrac{\\pi}{2}\\) 处的切线斜率与 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)，并判断凹凸性。 · Find the tangent slope and \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) for \\(r=1+\\cos\\theta\\) at \\(\\theta=\\dfrac{\\pi}{2}\\), and determine concavity.",
        "steps": [
          "\\(f(\\theta)=1+\\cos\\theta\\)，\\(f'(\\theta)=-\\sin\\theta\\)，\\(f''(\\theta)=-\\cos\\theta\\)。 · \\(f(\\theta)=1+\\cos\\theta\\), \\(f'(\\theta)=-\\sin\\theta\\), and \\(f''(\\theta)=-\\cos\\theta\\).",
          "在 \\(\\theta=\\dfrac{\\pi}{2}\\)：\\(f=1\\)，\\(f'=-1\\)，\\(f''=0\\)。 · At \\(\\theta=\\dfrac{\\pi}{2}\\): \\(f=1\\), \\(f'=-1\\), and \\(f''=0\\).",
          "记 \\(N=\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)、\\(D=\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)。分子 \\(N=f'\\sin\\theta+f\\cos\\theta=(-1)(1)+1\\cdot0=-1\\)；分母 \\(D=f'\\cos\\theta-f\\sin\\theta=(-1)(0)-1\\cdot1=-1\\)。 · Let \\(N=\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) and \\(D=\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\). Numerator \\(N=f'\\sin\\theta+f\\cos\\theta=(-1)(1)+1\\cdot0=-1\\); denominator \\(D=f'\\cos\\theta-f\\sin\\theta=(-1)(0)-1\\cdot1=-1\\).",
          "所以 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{-1}{-1}=1\\)。 · Thus \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{-1}{-1}=1\\).",
          "对斜率求 \\(\\theta\\) 的导数：\\(N'=f''\\sin\\theta+2f'\\cos\\theta-f\\sin\\theta=0+0-1=-1\\)，\\(D'=f''\\cos\\theta-2f'\\sin\\theta-f\\cos\\theta=0-2(-1)(1)-0=2\\)，故 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)=\\dfrac{N'D-ND'}{D^{2}}=\\dfrac{(-1)(-1)-(-1)(2)}{1}=3\\)。 · Differentiate the slope with respect to \\(\\theta\\): \\(N'=f''\\sin\\theta+2f'\\cos\\theta-f\\sin\\theta=0+0-1=-1\\) and \\(D'=f''\\cos\\theta-2f'\\sin\\theta-f\\cos\\theta=0-2(-1)(1)-0=2\\), so \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)=\\dfrac{N'D-ND'}{D^{2}}=\\dfrac{(-1)(-1)-(-1)(2)}{1}=3\\).",
          "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{3}{-1}=-3<0\\)，所以曲线在该点凹向下。 · \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{3}{-1}=-3<0\\), so the curve is concave down at that point."
        ],
        "solution": "切线斜率为 \\(1\\)，\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=-3\\)，曲线凹向下。 · The tangent slope is \\(1\\), \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=-3\\), and the curve is concave down.",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1,\\qquad \\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=-3"
      },
      {
        "title": "例 2 · 圆的水平与竖直切线 · Example 2: Horizontal and Vertical Tangents of a Circle",
        "prompt": "对 \\(r=2\\cos\\theta\\)（\\(0\\le\\theta\\le\\pi\\)），求水平切线与竖直切线的角度。 · For \\(r=2\\cos\\theta\\) with \\(0\\le\\theta\\le\\pi\\), find the angles of the horizontal and vertical tangents.",
        "steps": [
          "\\(f=2\\cos\\theta\\)，\\(f'=-2\\sin\\theta\\)。 · \\(f=2\\cos\\theta\\) and \\(f'=-2\\sin\\theta\\).",
          "分子 \\(f'\\sin\\theta+f\\cos\\theta=2(\\cos^{2}\\theta-\\sin^{2}\\theta)=2\\cos2\\theta\\)。 · Numerator: \\(f'\\sin\\theta+f\\cos\\theta=2(\\cos^{2}\\theta-\\sin^{2}\\theta)=2\\cos2\\theta\\).",
          "分母 \\(f'\\cos\\theta-f\\sin\\theta=-4\\sin\\theta\\cos\\theta=-2\\sin2\\theta\\)。 · Denominator: \\(f'\\cos\\theta-f\\sin\\theta=-4\\sin\\theta\\cos\\theta=-2\\sin2\\theta\\).",
          "水平：\\(\\cos2\\theta=0\\)，得 \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\)。竖直：\\(\\sin2\\theta=0\\)，得 \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\)。 · Horizontal: \\(\\cos2\\theta=0\\), so \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\). Vertical: \\(\\sin2\\theta=0\\), so \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\).",
          "检查分母：在 \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\) 处分母 \\(-2\\sin2\\theta\\neq0\\)；在 \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\) 处分子 \\(2\\cos2\\theta\\neq0\\)，所以分类成立。 · Check the denominators: at \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\), \\(-2\\sin2\\theta\\neq0\\); at \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\), the numerator \\(2\\cos2\\theta\\neq0\\), so the classification is valid."
        ],
        "solution": "水平切线在 \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\)；竖直切线在 \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\)。 · Horizontal tangents at \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\); vertical tangents at \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\).",
        "solutionLatex": "\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\quad\\text{水平};\\qquad \\theta=0,\\dfrac{\\pi}{2},\\pi\\quad\\text{竖直}"
      },
      {
        "title": "例 3 · 转回直角坐标 · Example 3: Convert to Rectangular Coordinates",
        "prompt": "把 \\(r=2\\sin\\theta\\) 化为直角坐标方程，并求 \\(\\theta=\\dfrac{\\pi}{6}\\) 处的切线斜率。 · Convert \\(r=2\\sin\\theta\\) to a rectangular equation and find the tangent slope at \\(\\theta=\\dfrac{\\pi}{6}\\).",
        "steps": [
          "两边乘以 \\(r\\)：\\(r^{2}=2r\\sin\\theta\\)，即 \\(x^{2}+y^{2}=2y\\)。 · Multiply by \\(r\\): \\(r^{2}=2r\\sin\\theta\\), so \\(x^{2}+y^{2}=2y\\).",
          "配方得 \\(x^{2}+(y-1)^{2}=1\\)，是以 \\((0,1)\\) 为圆心、半径为 \\(1\\) 的圆。 · Complete the square: \\(x^{2}+(y-1)^{2}=1\\), a circle centered at \\((0,1)\\) with radius \\(1\\).",
          "隐式求导：\\(2x+2(y-1)y'=0\\)，所以 \\(y'=-\\dfrac{x}{y-1}\\)。 · Implicit differentiation: \\(2x+2(y-1)y'=0\\), so \\(y'=-\\dfrac{x}{y-1}\\).",
          "在 \\(\\theta=\\dfrac{\\pi}{6}\\)：\\(r=1\\)，\\(x=\\dfrac{\\sqrt3}{2}\\)，\\(y=\\dfrac{1}{2}\\)，所以 \\(y'=\\dfrac{\\sqrt3}{1}=\\sqrt3\\)。 · At \\(\\theta=\\dfrac{\\pi}{6}\\): \\(r=1\\), \\(x=\\dfrac{\\sqrt3}{2}\\), \\(y=\\dfrac{1}{2}\\), so \\(y'=\\dfrac{\\sqrt3}{1}=\\sqrt3\\)."
        ],
        "solution": "\\(x^{2}+(y-1)^{2}=1\\)，切线斜率为 \\(\\sqrt3\\)。 · \\(x^{2}+(y-1)^{2}=1\\), and the tangent slope is \\(\\sqrt3\\).",
        "solutionLatex": "y'=\\sqrt3"
      },
      {
        "title": "例 4 · 水平切线与凹凸性 · Example 4: Horizontal Tangent and Concavity",
        "prompt": "证明 \\(r=1+\\cos\\theta\\) 在 \\(\\theta=\\dfrac{\\pi}{3}\\) 处有水平切线，并判断该点附近的凹凸性。 · Show that \\(r=1+\\cos\\theta\\) has a horizontal tangent at \\(\\theta=\\dfrac{\\pi}{3}\\), and determine the concavity near that point.",
        "steps": [
          "\\(f=1+\\cos\\theta\\)，\\(f'=-\\sin\\theta\\)，\\(f''=-\\cos\\theta\\)；在 \\(\\theta=\\dfrac{\\pi}{3}\\)：\\(f=\\dfrac{3}{2}\\)，\\(f'=-\\dfrac{\\sqrt3}{2}\\)，\\(f''=-\\dfrac{1}{2}\\)。 · \\(f=1+\\cos\\theta\\), \\(f'=-\\sin\\theta\\), and \\(f''=-\\cos\\theta\\); at \\(\\theta=\\dfrac{\\pi}{3}\\): \\(f=\\dfrac{3}{2}\\), \\(f'=-\\dfrac{\\sqrt3}{2}\\), and \\(f''=-\\dfrac{1}{2}\\).",
          "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'\\sin\\theta+f\\cos\\theta=\\left(-\\dfrac{\\sqrt3}{2}\\right)\\left(\\dfrac{\\sqrt3}{2}\\right)+\\dfrac{3}{2}\\cdot\\dfrac{1}{2}=-\\dfrac{3}{4}+\\dfrac{3}{4}=0\\)。 · \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'\\sin\\theta+f\\cos\\theta=\\left(-\\dfrac{\\sqrt3}{2}\\right)\\left(\\dfrac{\\sqrt3}{2}\\right)+\\dfrac{3}{2}\\cdot\\dfrac{1}{2}=-\\dfrac{3}{4}+\\dfrac{3}{4}=0\\).",
          "\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'\\cos\\theta-f\\sin\\theta=\\left(-\\dfrac{\\sqrt3}{2}\\right)\\dfrac{1}{2}-\\dfrac{3}{2}\\cdot\\dfrac{\\sqrt3}{2}=-\\dfrac{\\sqrt3}{4}-\\dfrac{3\\sqrt3}{4}=-\\sqrt3\\neq0\\)，所以切线水平。 · \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'\\cos\\theta-f\\sin\\theta=\\left(-\\dfrac{\\sqrt3}{2}\\right)\\dfrac{1}{2}-\\dfrac{3}{2}\\cdot\\dfrac{\\sqrt3}{2}=-\\dfrac{\\sqrt3}{4}-\\dfrac{3\\sqrt3}{4}=-\\sqrt3\\neq0\\), so the tangent is horizontal.",
          "记 \\(N=\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)、\\(D=\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)，则斜率为 \\(\\dfrac{N}{D}\\)。对斜率求 \\(\\theta\\) 的导数：\\(N'=f''\\sin\\theta+2f'\\cos\\theta-f\\sin\\theta=-\\dfrac{\\sqrt3}{4}-\\dfrac{\\sqrt3}{2}-\\dfrac{3\\sqrt3}{4}=-\\dfrac{3\\sqrt3}{2}\\)，\\(D'=f''\\cos\\theta-2f'\\sin\\theta-f\\cos\\theta=-\\dfrac{1}{4}+\\dfrac{3}{2}-\\dfrac{3}{4}=\\dfrac{1}{2}\\)。 · Let \\(N=\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) and \\(D=\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\), so the slope is \\(\\dfrac{N}{D}\\). Differentiate the slope with respect to \\(\\theta\\): \\(N'=f''\\sin\\theta+2f'\\cos\\theta-f\\sin\\theta=-\\dfrac{\\sqrt3}{4}-\\dfrac{\\sqrt3}{2}-\\dfrac{3\\sqrt3}{4}=-\\dfrac{3\\sqrt3}{2}\\) and \\(D'=f''\\cos\\theta-2f'\\sin\\theta-f\\cos\\theta=-\\dfrac{1}{4}+\\dfrac{3}{2}-\\dfrac{3}{4}=\\dfrac{1}{2}\\).",
          "此时 \\(N=0\\)，故 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)=\\dfrac{N'D-ND'}{D^{2}}=\\dfrac{N'}{D}=\\dfrac{-\\dfrac{3\\sqrt3}{2}}{-\\sqrt3}=\\dfrac{3}{2}\\)。 · Here \\(N=0\\), so \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)=\\dfrac{N'D-ND'}{D^{2}}=\\dfrac{N'}{D}=\\dfrac{-\\dfrac{3\\sqrt3}{2}}{-\\sqrt3}=\\dfrac{3}{2}\\).",
          "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{3}{2}}{-\\sqrt3}=-\\dfrac{\\sqrt3}{2}<0\\)，所以曲线在该点凹向下。 · \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{3}{2}}{-\\sqrt3}=-\\dfrac{\\sqrt3}{2}<0\\), so the curve is concave down at that point."
        ],
        "solution": "因为 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) 且 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=-\\sqrt3\\neq0\\)，切线水平；又 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=-\\dfrac{\\sqrt3}{2}<0\\)，曲线凹向下。 · Because \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) and \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=-\\sqrt3\\neq0\\), the tangent is horizontal; also \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=-\\dfrac{\\sqrt3}{2}<0\\), so the curve is concave down.",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0,\\qquad \\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=-\\dfrac{\\sqrt3}{2}"
      },
      {
        "title": "例 5 · 对数螺线的二阶导数 · Example 5: Second Derivative of a Logarithmic Spiral",
        "prompt": "对 \\(r=e^{\\theta}\\)，求 \\(\\theta=0\\) 处的 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 与 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)。 · For \\(r=e^{\\theta}\\), find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) and \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) at \\(\\theta=0\\).",
        "steps": [
          "\\(f=f'=f''=e^{\\theta}\\)；在 \\(\\theta=0\\)：\\(f=f'=f''=1\\)。 · \\(f=f'=f''=e^{\\theta}\\); at \\(\\theta=0\\): \\(f=f'=f''=1\\).",
          "\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'\\cos\\theta-f\\sin\\theta=1\\cdot1-1\\cdot0=1\\)，\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'\\sin\\theta+f\\cos\\theta=1\\cdot0+1\\cdot1=1\\)，所以 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1\\)。 · \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'\\cos\\theta-f\\sin\\theta=1\\cdot1-1\\cdot0=1\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'\\sin\\theta+f\\cos\\theta=1\\cdot0+1\\cdot1=1\\), so \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1\\).",
          "\\(N'=f''\\sin\\theta+2f'\\cos\\theta-f\\sin\\theta=0+2-0=2\\)，\\(D'=f''\\cos\\theta-2f'\\sin\\theta-f\\cos\\theta=1-0-1=0\\)。 · \\(N'=f''\\sin\\theta+2f'\\cos\\theta-f\\sin\\theta=0+2-0=2\\) and \\(D'=f''\\cos\\theta-2f'\\sin\\theta-f\\cos\\theta=1-0-1=0\\).",
          "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)=\\dfrac{N'D-ND'}{D^{2}}=\\dfrac{2\\cdot1-1\\cdot0}{1}=2\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)=\\dfrac{N'D-ND'}{D^{2}}=\\dfrac{2\\cdot1-1\\cdot0}{1}=2\\).",
          "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{2}{1}=2>0\\)，所以曲线在 \\(\\theta=0\\) 处凹向上。 · \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{2}{1}=2>0\\), so the curve is concave up at \\(\\theta=0\\)."
        ],
        "solution": "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1\\)，\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=2\\)，曲线凹向上。 · \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1\\), \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=2\\), and the curve is concave up.",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1,\\qquad \\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=2"
      }
    ],
    "examTips": [
      "CED Unit 9（BC）：极坐标导数常与切线、水平/竖直切线、凹凸性一起考。 · CED Unit 9 (BC): polar derivatives often appear with tangent lines, horizontal and vertical tangents, and concavity.",
      "先写 \\(x(\\theta)\\)、\\(y(\\theta)\\)，再用参数方程求导，避免公式记错。 · Write \\(x(\\theta)\\) and \\(y(\\theta)\\), then differentiate parametrically to avoid misremembering the formula.",
      "水平切线看分子 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)，竖直切线看分母 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)，并分别检查另一个不为零。 · Horizontal tangents use the numerator \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\); vertical tangents use the denominator \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\); check that the other one is nonzero.",
      "求 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 时，先对 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 关于 \\(\\theta\\) 求导，再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)；不要漏掉最后一步。 · For \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\), differentiate \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) with respect to \\(\\theta\\), then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\); do not omit the final division.",
      "用 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 的符号写凹凸性，并用圆或已知图形检查结果是否合理。 · Use the sign of \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) to state concavity, and check the result against a circle or a known graph.",
      "极点处不要直接代入斜率公式，先看极限或转成直角坐标。 · At the pole, do not substitute directly into the slope formula; use a limit or convert to rectangular coordinates."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.1",
        "title": "参数运动导数 · Defining and Differentiating Parametric Equations",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.8",
        "title": "极坐标面积 · Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve",
        "relation": "后续 · Follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.9",
        "title": "两极曲线间面积 · Finding the Area of the Region Bounded by Two Polar Curves",
        "relation": "后续 · Follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.2",
        "title": "隐函数求导 · Implicit Differentiation",
        "relation": "工具 · Tool"
      }
    ],
    "modules": [
      {
        "id": "polar-parametric",
        "title": "极坐标与参数曲线 · Polar and Parametric Curves"
      }
    ],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：参数方程求导（9.1）与链式法则提供 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 和二阶导数的计算框架。 · Upstream: parametric differentiation (9.1) and the chain rule provide the framework for \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) and the second derivative.",
      "下游：极坐标面积（9.8、9.9）需要先确定曲线走向、切线与角度范围，才能正确设置积分。 · Downstream: polar area (9.8 and 9.9) requires knowing the curve's direction, tangents, and angle range before setting up the integral.",
      "跨学科：极坐标描述行星轨道、雷达扫描与螺旋结构；一阶导数对应运动方向，二阶导数对应弯曲程度。 · Cross-disciplinary: polar coordinates describe planetary orbits, radar sweeps, and spiral structures; the first derivative gives the direction of motion and the second derivative gives the degree of bending."
    ],
    "intuitionDetailed": "从 \\(x=f(\\theta)\\cos\\theta\\)、\\(y=f(\\theta)\\sin\\theta\\) 出发，对 \\(\\theta\\) 求导：\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta\\)，\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta\\)。两者相除就是 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。若分子为零而分母不为零，切线水平；若分母为零而分子不为零，切线竖直。要求二阶导数时，把 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 看作 \\(\\theta\\) 的函数，先对 \\(\\theta\\) 求导，再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)，因为 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\cdot\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}x}\\)。二阶导数的符号告诉你曲线向哪边弯；若两个一阶导数同时为零，曲线可能在极点或出现尖点，需要看极限。 · Starting from \\(x=f(\\theta)\\cos\\theta\\) and \\(y=f(\\theta)\\sin\\theta\\), differentiate with respect to \\(\\theta\\): \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta\\). Their quotient is \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\). If the numerator is zero and the denominator is not, the tangent is horizontal; if the denominator is zero and the numerator is not, the tangent is vertical. For the second derivative, treat \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) as a function of \\(\\theta\\), differentiate it with respect to \\(\\theta\\), then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\), because \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\cdot\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}x}\\). The sign of the second derivative tells which way the curve bends; if both first derivatives vanish, the curve may pass through the pole or have a cusp, and a limit is needed.",
    "development": [
      "极坐标与直角坐标 · Polar and rectangular coordinates",
      "非唯一表示与负半径 · Nonunique representation and negative radii",
      "参数化与对 \\(\\theta\\) 求导 · Parametrization and differentiation with respect to \\(\\theta\\)",
      "一阶导数与切线斜率 · First derivative and tangent slope",
      "水平与竖直切线 · Horizontal and vertical tangents",
      "二阶导数与凹凸性 · Second derivative and concavity",
      "极点处的切线 · Tangents at the pole"
    ],
    "checks": [
      "为什么 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) 不是切线斜率？ · Why is \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) not the tangent slope?",
      "如何由 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) 与 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) 判断水平切线和竖直切线？ · How do \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) and \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) determine horizontal and vertical tangents?",
      "求 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 时为什么要再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)？ · Why must you divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) when finding \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)?",
      "二阶导数的符号如何告诉你曲线的凹凸性？ · How does the sign of the second derivative tell you the concavity?",
      "极点处两个一阶导数都为零时如何处理？ · What should be done when both first derivatives vanish at the pole?"
    ],
    "vocabulary": [
      {
        "termZh": "极坐标",
        "termEn": "polar coordinates",
        "defZh": "用点到极点的有向距离 \\(r\\) 与相对极轴的角 \\(\\theta\\) 表示点的位置。",
        "defEn": "Coordinates \\((r,\\theta)\\) giving a point's directed distance from the pole and its angle from the polar axis."
      },
      {
        "termZh": "极点",
        "termEn": "pole",
        "defZh": "极坐标中的原点，即 \\(r=0\\) 的点。",
        "defEn": "The origin in polar coordinates, the point where \\(r=0\\)."
      },
      {
        "termZh": "极轴",
        "termEn": "polar axis",
        "defZh": "极坐标中 \\(\\theta=0\\) 的参考射线，通常取正 \\(x\\) 轴。",
        "defEn": "The reference ray where \\(\\theta=0\\), usually the positive \\(x\\)-axis."
      },
      {
        "termZh": "极坐标一阶导数",
        "termEn": "first derivative in polar form",
        "defZh": "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\)，给出切线斜率。",
        "defEn": "The tangent slope \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\)."
      },
      {
        "termZh": "极坐标二阶导数",
        "termEn": "second derivative in polar form",
        "defZh": "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\)，描述斜率随 \\(x\\) 的变化率。",
        "defEn": "The quantity \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\), the rate at which the slope changes with \\(x\\)."
      },
      {
        "termZh": "对称性",
        "termEn": "symmetry",
        "defZh": "利用曲线关于极轴、竖直轴或极点的对称性简化作图；也可用来减少求切线与凹凸性的重复计算。",
        "defEn": "Using symmetry about the polar axis, the vertical axis, or the pole to simplify graphing; it can also reduce repeated work when finding tangents and concavity."
      },
      {
        "termZh": "玫瑰线",
        "termEn": "rose curve",
        "defZh": "由 \\(r=a\\cos(n\\theta)\\) 或 \\(r=a\\sin(n\\theta)\\) 形成的花瓣状曲线；其切线方向随 \\(\\theta\\) 周期变化。",
        "defEn": "A petal-shaped curve given by \\(r=a\\cos(n\\theta)\\) or \\(r=a\\sin(n\\theta)\\); its tangent direction changes periodically with \\(\\theta\\)."
      },
      {
        "termZh": "凹性",
        "termEn": "concavity",
        "defZh": "由 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 的符号判断：正为凹向上，负为凹向下。",
        "defEn": "Determined by the sign of \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\): positive is concave up, negative is concave down."
      }
    ]
  },
  "9.8": {
    "id": "math/calc-u9/9.8",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.8",
    "titleZh": "极坐标面积",
    "titleEn": "Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve",
    "layer": "ap",
    "summary": "极坐标面积 · Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve",
    "learningObjectives": [
      "能陈述「极坐标面积」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「极坐标面积」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "极坐标面积（Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「极坐标面积」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}[r(\\theta)]^{2}\\,\\mathrm{d}\\theta",
        "note": "极坐标曲线 r(θ) 与两条射线围成的面积。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「极坐标面积」的工作方程或机制链。"
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
      "r(θ) 在 [α,β] 上连续；区域由 θ=α、θ=β 与曲线围成",
      "角度用弧度；曲线不自我重叠（否则分段）",
      "被积函数是 r²，不要漏掉 1/2"
    ],
    "keyPoints": [
      "掌握 9.8「极坐标面积」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「极坐标面积」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「极坐标面积」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}[r(\\theta)]^{2}\\,\\mathrm{d}\\theta"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「极坐标面积」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「极坐标面积」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「极坐标面积」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.7",
        "title": "极坐标导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.9",
        "title": "两极曲线间面积",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "polar-parametric",
        "title": "极坐标与参数曲线"
      }
    ],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「极坐标面积」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「极坐标面积」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「极坐标面积」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "极坐标面积",
        "termEn": "polar area",
        "defZh": "由极坐标曲线 \\(r(\\theta)\\) 围成的区域面积。",
        "defEn": "The area of a region enclosed by a polar curve \\(r(\\theta)\\)."
      },
      {
        "termZh": "扇形面积元",
        "termEn": "sector area element",
        "defZh": "\\(\\dfrac{1}{2}[r(\\theta)]^{2}\\,\\mathrm{d}\\theta\\)，是一小段角度扫过的面积。",
        "defEn": "The element \\(\\dfrac{1}{2}[r(\\theta)]^{2}\\,\\mathrm{d}\\theta\\) swept out by a small angle."
      },
      {
        "termZh": "极坐标面积积分",
        "termEn": "polar area integral",
        "defZh": "\\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}[r(\\theta)]^{2}\\,\\mathrm{d}\\theta\\)。",
        "defEn": "The area is \\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}[r(\\theta)]^{2}\\,\\mathrm{d}\\theta\\)."
      },
      {
        "termZh": "积分限",
        "termEn": "limits of integration",
        "defZh": "扫过区域的起始角 \\(\\alpha\\) 与终止角 \\(\\beta\\)。",
        "defEn": "The starting angle \\(\\alpha\\) and ending angle \\(\\beta\\) that sweep out the region."
      },
      {
        "termZh": "交点",
        "termEn": "intersection point",
        "defZh": "两条极坐标曲线共享的点，用于确定区域边界和积分限。",
        "defEn": "A point shared by two polar curves, used to determine boundaries and limits."
      },
      {
        "termZh": "对称区域",
        "termEn": "symmetric region",
        "defZh": "关于极轴或极点对称、可只算一部分再倍增的区域。",
        "defEn": "A region symmetric about the polar axis or pole, so one part can be computed and doubled."
      }
    ]
  },
  "9.9": {
    "id": "math/calc-u9/9.9",
    "subject": "math",
    "chapterId": "calc-u9",
    "unitCode": "9",
    "unitTitleZh": "参数、极坐标与向量",
    "unitTitleEn": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "code": "9.9",
    "titleZh": "两极曲线间面积",
    "titleEn": "Finding the Area of the Region Bounded by Two Polar Curves",
    "layer": "ap",
    "summary": "两极曲线间面积 · Finding the Area of the Region Bounded by Two Polar Curves",
    "learningObjectives": [
      "能陈述「两极曲线间面积」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding the Area of the Region Bounded by Two Polar Curves：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「两极曲线间面积」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "两极曲线间面积（Finding the Area of the Region Bounded by Two Polar Curves）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「两极曲线间面积」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\left([r_{\\mathrm{outer}}(\\theta)]^{2}-[r_{\\mathrm{inner}}(\\theta)]^{2}\\right)\\mathrm{d}\\theta",
        "note": "两条极坐标曲线之间的面积；外曲线减内曲线。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「两极曲线间面积」的工作方程或机制链。"
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
      "在 [α,β] 上 r_outer(θ) ≥ r_inner(θ) ≥ 0",
      "角度用弧度；积分限由交点确定",
      "曲线交叉时需分段积分"
    ],
    "keyPoints": [
      "掌握 9.9「两极曲线间面积」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「两极曲线间面积」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「两极曲线间面积」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\left([r_{\\mathrm{outer}}(\\theta)]^{2}-[r_{\\mathrm{inner}}(\\theta)]^{2}\\right)\\mathrm{d}\\theta"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「两极曲线间面积」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「两极曲线间面积」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「两极曲线间面积」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件",
      "分数一律叠式书写",
      "检查单位、方向与特殊值",
      "多问共享刺激时保持符号一致",
      "论证题每句对应证据"
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.8",
        "title": "极坐标面积",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「两极曲线间面积」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「两极曲线间面积」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「两极曲线间面积」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "极坐标",
        "termEn": "polar coordinates",
        "defZh": "用半径 \\(r\\) 与极角 \\(\\theta\\) 表示点的坐标。",
        "defEn": "Coordinates using radius \\(r\\) and polar angle \\(\\theta\\)."
      },
      {
        "termZh": "极曲线",
        "termEn": "polar curve",
        "defZh": "由 \\(r=f(\\theta)\\) 给出的曲线。",
        "defEn": "A curve given by \\(r=f(\\theta)\\)."
      },
      {
        "termZh": "外曲线",
        "termEn": "outer curve",
        "defZh": "在给定角度上 \\(r\\) 较大的边界。",
        "defEn": "The boundary with the larger \\(r\\) at a given angle."
      },
      {
        "termZh": "内曲线",
        "termEn": "inner curve",
        "defZh": "在给定角度上 \\(r\\) 较小的边界。",
        "defEn": "The boundary with the smaller \\(r\\) at a given angle."
      },
      {
        "termZh": "极角",
        "termEn": "polar angle",
        "defZh": "从极轴按逆时针方向量出的角 \\(\\theta\\)。",
        "defEn": "The angle \\(\\theta\\) measured counterclockwise from the polar axis."
      },
      {
        "termZh": "扇形面积",
        "termEn": "sector area",
        "defZh": "极坐标面积元素 \\(\\dfrac{1}{2}r^{2}\\,\\mathrm{d}\\theta\\) 的来源。",
        "defEn": "The source of the polar area element \\(\\dfrac{1}{2}r^{2}\\,\\mathrm{d}\\theta\\)."
      }
    ]
  }
};
