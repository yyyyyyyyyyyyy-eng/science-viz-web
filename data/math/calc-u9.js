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
        "defZh": "\\(\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}\\)，其中 \\(dx/dt\\ne 0\\)。",
        "defEn": "The slope \\(\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}\\), defined when \\(dx/dt\\ne 0\\)."
      },
      {
        "termZh": "水平切线",
        "termEn": "horizontal tangent",
        "defZh": "\\(dy/dt=0\\) 且 \\(dx/dt\\ne 0\\) 的点处切线水平。",
        "defEn": "The tangent is horizontal at a point where \\(dy/dt=0\\) and \\(dx/dt\\ne 0\\)."
      },
      {
        "termZh": "竖直切线",
        "termEn": "vertical tangent",
        "defZh": "\\(dx/dt=0\\) 且 \\(dy/dt\\ne 0\\) 的点处切线竖直。",
        "defEn": "The tangent is vertical at a point where \\(dx/dt=0\\) and \\(dy/dt\\ne 0\\)."
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
    "summary": "向量值函数 · Defining and Differentiating Vector-Valued Functions",
    "learningObjectives": [
      "能陈述「向量值函数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining and Differentiating Vector-Valued Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「向量值函数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "向量值函数（Defining and Differentiating Vector-Valued Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「向量值函数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec r'(t)=\\langle x'(t),y'(t)\\rangle,\\quad \\|\\vec r'(t)\\|=\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}",
        "note": "向量值函数的导数与速率。 · Derivative and speed of a vector-valued function."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「向量值函数」的工作方程或机制链。"
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
      "掌握 9.4「向量值函数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「向量值函数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「向量值函数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「向量值函数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「向量值函数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「向量值函数」；用斜线分式代替叠式分式导致歧义"
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
        "code": "9.3",
        "title": "参数弧长",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.5",
        "title": "向量值函数积分",
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
    "intuitionDetailed": "把「向量值函数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「向量值函数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「向量值函数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
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
        "defZh": "对每个分量分别求导。",
        "defEn": "Differentiating each component separately."
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
    "summary": "极坐标导数 · Defining Polar Coordinates and Differentiating in Polar Form",
    "learningObjectives": [
      "能陈述「极坐标导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining Polar Coordinates and Differentiating in Polar Form：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「极坐标导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "极坐标导数（Defining Polar Coordinates and Differentiating in Polar Form）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「极坐标导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「极坐标导数」的工作方程或机制链。"
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
      "掌握 9.7「极坐标导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「极坐标导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「极坐标导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「极坐标导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「极坐标导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「极坐标导数」；用斜线分式代替叠式分式导致歧义"
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
        "code": "9.6",
        "title": "向量运动解题",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u9",
        "code": "9.8",
        "title": "极坐标面积",
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
    "intuitionDetailed": "把「极坐标导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「极坐标导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「极坐标导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "极坐标",
        "termEn": "polar coordinates",
        "defZh": "用点到极点的距离 \\(r\\) 与相对极轴的角 \\(\\theta\\) 表示点的位置。",
        "defEn": "Coordinates \\((r,\\theta)\\) giving a point's distance from the pole and its angle from the polar axis."
      },
      {
        "termZh": "极点",
        "termEn": "pole",
        "defZh": "极坐标中的原点。",
        "defEn": "The origin in polar coordinates."
      },
      {
        "termZh": "极轴",
        "termEn": "polar axis",
        "defZh": "极坐标中 \\(\\theta=0\\) 的参考射线。",
        "defEn": "The reference ray where \\(\\theta=0\\)."
      },
      {
        "termZh": "极坐标导数",
        "termEn": "polar derivative",
        "defZh": "\\(\\dfrac{dy}{dx}=\\dfrac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}\\)。",
        "defEn": "The slope \\(\\dfrac{dy}{dx}=\\dfrac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}\\)."
      },
      {
        "termZh": "对称性",
        "termEn": "symmetry",
        "defZh": "利用曲线关于极轴、竖直轴或极点的对称性简化作图。",
        "defEn": "Using symmetry about the polar axis, the vertical axis, or the pole to simplify graphing."
      },
      {
        "termZh": "玫瑰线",
        "termEn": "rose curve",
        "defZh": "由 \\(r=a\\cos(n\\theta)\\) 或 \\(r=a\\sin(n\\theta)\\) 形成的花瓣状曲线。",
        "defEn": "A petal-shaped curve given by \\(r=a\\cos(n\\theta)\\) or \\(r=a\\sin(n\\theta)\\)."
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
