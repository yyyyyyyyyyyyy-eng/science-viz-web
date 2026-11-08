export const UNIT = {
  "id": "calc-u2",
  "code": "2",
  "titleZh": "导数：定义与基本性质",
  "titleEn": "Differentiation: Definition and Fundamental Properties",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "2.1": {
    "id": "math/calc-u2/2.1",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.1",
    "titleZh": "瞬时变化率",
    "titleEn": "Defining Average and Instantaneous Rates of Change",
    "layer": "ap",
    "summary": "瞬时变化率 · Defining Average and Instantaneous Rates of Change",
    "learningObjectives": [
      "能陈述「瞬时变化率」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining Average and Instantaneous Rates of Change：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「瞬时变化率」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "瞬时变化率（Defining Average and Instantaneous Rates of Change）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「瞬时变化率」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「瞬时变化率」的工作方程或机制链。"
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
      "掌握 2.1「瞬时变化率」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「瞬时变化率」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「瞬时变化率」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「瞬时变化率」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「瞬时变化率」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「瞬时变化率」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.2",
        "title": "导数定义",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "derivative-tangent",
        "title": "导数与切线"
      }
    ],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「瞬时变化率」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「瞬时变化率」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「瞬时变化率」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "平均变化率",
        "termEn": "average rate of change",
        "defZh": "区间上函数值改变量与自变量改变量之比 \\(\\dfrac{f(b)-f(a)}{b-a}\\)。",
        "defEn": "The ratio \\(\\dfrac{f(b)-f(a)}{b-a}\\) of output change to input change over an interval."
      },
      {
        "termZh": "瞬时变化率",
        "termEn": "instantaneous rate of change",
        "defZh": "某一时刻的导数，即平均变化率在区间长度趋于零时的极限。",
        "defEn": "The derivative at an instant, the limit of average rates as the interval length approaches zero."
      },
      {
        "termZh": "差商",
        "termEn": "difference quotient",
        "defZh": "\\(\\dfrac{f(a+h)-f(a)}{h}\\)，表示相邻两点的平均变化率。",
        "defEn": "\\(\\dfrac{f(a+h)-f(a)}{h}\\), the average rate between two nearby points."
      },
      {
        "termZh": "割线斜率",
        "termEn": "secant slope",
        "defZh": "曲线上两点连线的斜率。",
        "defEn": "The slope of the line joining two points on a curve."
      },
      {
        "termZh": "切线斜率",
        "termEn": "tangent slope",
        "defZh": "曲线在一点处切线的斜率，等于该点导数。",
        "defEn": "The slope of the tangent at a point, equal to the derivative there."
      },
      {
        "termZh": "时间间隔",
        "termEn": "time interval",
        "defZh": "计算平均变化率所用的 \\(\\Delta t\\)。",
        "defEn": "The interval \\(\\Delta t\\) used to compute an average rate."
      }
    ]
  },
  "2.2": {
    "id": "math/calc-u2/2.2",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.2",
    "titleZh": "导数定义",
    "titleEn": "Defining the Derivative of a Function and Using Derivative Notation",
    "layer": "ap",
    "summary": "导数定义 · Defining the Derivative of a Function and Using Derivative Notation",
    "learningObjectives": [
      "能陈述「导数定义」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining the Derivative of a Function and Using Derivative Notation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「导数定义」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "导数定义（Defining the Derivative of a Function and Using Derivative Notation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「导数定义」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「导数定义」的工作方程或机制链。"
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
      "掌握 2.2「导数定义」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「导数定义」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「导数定义」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「导数定义」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「导数定义」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「导数定义」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.1",
        "title": "瞬时变化率",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.3",
        "title": "可微性估计",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "derivative-tangent",
        "title": "导数与切线"
      }
    ],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「导数定义」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「导数定义」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「导数定义」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "导数",
        "termEn": "derivative",
        "defZh": "\\(f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}\\)，表示函数在 \\(a\\) 处的瞬时变化率。",
        "defEn": "The instantaneous rate of change at \\(a\\), defined by \\(f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}\\)."
      },
      {
        "termZh": "差商",
        "termEn": "difference quotient",
        "defZh": "\\(\\dfrac{f(a+h)-f(a)}{h}\\)，是割线的斜率。",
        "defEn": "The quotient \\(\\dfrac{f(a+h)-f(a)}{h}\\), the slope of a secant line."
      },
      {
        "termZh": "导数记号",
        "termEn": "derivative notation",
        "defZh": "\\(f'(a)\\)、\\(\\dfrac{dy}{dx}\\bigg|_{x=a}\\) 等记号都表示同一点处的导数。",
        "defEn": "Notations such as \\(f'(a)\\) and \\(\\dfrac{dy}{dx}\\bigg|_{x=a}\\) all denote the derivative at the same point."
      },
      {
        "termZh": "切线斜率",
        "termEn": "tangent slope",
        "defZh": "导数在几何上就是曲线在 \\(a\\) 处切线的斜率。",
        "defEn": "Geometrically, the derivative is the slope of the tangent line to the curve at \\(a\\)."
      },
      {
        "termZh": "可导",
        "termEn": "differentiability",
        "defZh": "差商的极限存在且有限时，函数在该点可导。",
        "defEn": "A function is differentiable at a point when the limit of the difference quotient exists and is finite."
      },
      {
        "termZh": "增量 \\(h\\)",
        "termEn": "increment",
        "defZh": "自变量从 \\(a\\) 到 \\(a+h\\) 的改变量。",
        "defEn": "The change in the input from \\(a\\) to \\(a+h\\)."
      }
    ]
  },
  "2.3": {
    "id": "math/calc-u2/2.3",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.3",
    "titleZh": "可微性估计",
    "titleEn": "Estimating Derivatives of a Function at a Point",
    "layer": "ap",
    "summary": "可微性估计 · Estimating Derivatives of a Function at a Point",
    "learningObjectives": [
      "能陈述「可微性估计」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Estimating Derivatives of a Function at a Point：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「可微性估计」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "可微性估计（Estimating Derivatives of a Function at a Point）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「可微性估计」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(a)\\approx\\dfrac{f(a+h)-f(a)}{h}",
        "note": "用小时距的差商估计导数。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「可微性估计」的工作方程或机制链。"
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
      "掌握 2.3「可微性估计」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「可微性估计」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「可微性估计」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「可微性估计」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「可微性估计」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「可微性估计」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.2",
        "title": "导数定义",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.4",
        "title": "导数与连续",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "derivative-tangent",
        "title": "导数与切线"
      }
    ],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「可微性估计」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「可微性估计」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「可微性估计」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "导数估计",
        "termEn": "derivative estimate",
        "defZh": "用差商近似某点的导数值。",
        "defEn": "Approximating a derivative at a point with a difference quotient."
      },
      {
        "termZh": "前向差分",
        "termEn": "forward difference",
        "defZh": "\\(\\dfrac{f(a+h)-f(a)}{h}\\)，用右侧点估计导数。",
        "defEn": "\\(\\dfrac{f(a+h)-f(a)}{h}\\), estimating the derivative with a point to the right."
      },
      {
        "termZh": "后向差分",
        "termEn": "backward difference",
        "defZh": "\\(\\dfrac{f(a)-f(a-h)}{h}\\)，用左侧点估计导数。",
        "defEn": "\\(\\dfrac{f(a)-f(a-h)}{h}\\), estimating the derivative with a point to the left."
      },
      {
        "termZh": "中心差分",
        "termEn": "symmetric difference quotient",
        "defZh": "\\(\\dfrac{f(a+h)-f(a-h)}{2h}\\)，通常给出更准确的估计。",
        "defEn": "\\(\\dfrac{f(a+h)-f(a-h)}{2h}\\), usually a more accurate estimate."
      },
      {
        "termZh": "步长",
        "termEn": "step size",
        "defZh": "估计中使用的 \\(h\\)，越小通常越接近真实导数。",
        "defEn": "The increment \\(h\\) used in the estimate; smaller values usually give closer approximations."
      },
      {
        "termZh": "切线斜率",
        "termEn": "tangent slope",
        "defZh": "导数估计所逼近的几何量。",
        "defEn": "The geometric quantity that a derivative estimate approximates."
      }
    ]
  },
  "2.4": {
    "id": "math/calc-u2/2.4",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.4",
    "titleZh": "导数与连续",
    "titleEn": "Connecting Differentiability and Continuity",
    "layer": "ap",
    "summary": "导数与连续 · Connecting Differentiability and Continuity",
    "learningObjectives": [
      "能陈述「导数与连续」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Connecting Differentiability and Continuity：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「导数与连续」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "导数与连续（Connecting Differentiability and Continuity）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「导数与连续」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「导数与连续」的工作方程或机制链。"
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
      "掌握 2.4「导数与连续」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「导数与连续」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「导数与连续」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「导数与连续」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「导数与连续」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「导数与连续」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.3",
        "title": "可微性估计",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.5",
        "title": "幂函数导数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「导数与连续」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「导数与连续」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「导数与连续」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "可微",
        "termEn": "differentiability",
        "defZh": "\\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\) 存在且有限。",
        "defEn": "The property that \\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\) exists and is finite."
      },
      {
        "termZh": "连续",
        "termEn": "continuity",
        "defZh": "可微的必要条件；可微必连续，连续不一定可微。",
        "defEn": "A necessary condition for differentiability: differentiability implies continuity, but not conversely."
      },
      {
        "termZh": "尖点",
        "termEn": "cusp",
        "defZh": "曲线出现尖锐转折、左右斜率不相等的点。",
        "defEn": "A sharp corner where the left and right slopes differ."
      },
      {
        "termZh": "竖直切线",
        "termEn": "vertical tangent",
        "defZh": "斜率趋于无穷，函数连续但不可微。",
        "defEn": "A tangent with infinite slope, where the function is continuous but not differentiable."
      },
      {
        "termZh": "分段函数",
        "termEn": "piecewise function",
        "defZh": "在不同区间由不同表达式定义的函数，需检查连接点。",
        "defEn": "A function defined by different expressions on different intervals, requiring checks at join points."
      }
    ]
  },
  "2.5": {
    "id": "math/calc-u2/2.5",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.5",
    "titleZh": "幂函数导数",
    "titleEn": "Applying the Power Rule",
    "layer": "ap",
    "summary": "幂函数导数 · Applying the Power Rule",
    "learningObjectives": [
      "能陈述「幂函数导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Applying the Power Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「幂函数导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "幂函数导数（Applying the Power Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「幂函数导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「幂函数导数」的工作方程或机制链。"
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
      "掌握 2.5「幂函数导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「幂函数导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「幂函数导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「幂函数导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「幂函数导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「幂函数导数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.4",
        "title": "导数与连续",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.6",
        "title": "常数倍与和差",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「幂函数导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「幂函数导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「幂函数导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "幂法则",
        "termEn": "power rule",
        "defZh": "\\(\\dfrac{d}{dx}x^{n}=nx^{n-1}\\)，其中 \\(n\\) 为任意实数。",
        "defEn": "The rule \\(\\dfrac{d}{dx}x^{n}=nx^{n-1}\\) for any real exponent \\(n\\)."
      },
      {
        "termZh": "指数 \\(n\\)",
        "termEn": "exponent",
        "defZh": "幂函数 \\(x^{n}\\) 中的指数。",
        "defEn": "The exponent in the power function \\(x^{n}\\)."
      },
      {
        "termZh": "系数",
        "termEn": "coefficient",
        "defZh": "求导后乘在幂前面的因子 \\(n\\)。",
        "defEn": "The factor \\(n\\) that multiplies the power after differentiation."
      },
      {
        "termZh": "常数倍法则",
        "termEn": "constant multiple rule",
        "defZh": "\\(\\dfrac{d}{dx}[cf(x)]=cf'(x)\\)。",
        "defEn": "The rule \\(\\dfrac{d}{dx}[cf(x)]=cf'(x)\\)."
      },
      {
        "termZh": "和差法则",
        "termEn": "sum and difference rule",
        "defZh": "多个函数相加减时，逐项求导后再相加减。",
        "defEn": "Differentiate each term separately, then add or subtract the results."
      },
      {
        "termZh": "常数函数",
        "termEn": "constant function",
        "defZh": "函数值不随自变量改变，其导数为 0。",
        "defEn": "A function whose value does not change; its derivative is 0."
      }
    ]
  },
  "2.6": {
    "id": "math/calc-u2/2.6",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.6",
    "titleZh": "常数倍与和差",
    "titleEn": "Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "layer": "ap",
    "summary": "常数倍与和差 · Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "learningObjectives": [
      "能陈述「常数倍与和差」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Derivative Rules: Constant, Sum, Difference, and Constant Multiple：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「常数倍与和差」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "常数倍与和差（Derivative Rules: Constant, Sum, Difference, and Constant Multiple）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「常数倍与和差」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「常数倍与和差」的工作方程或机制链。"
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
      "掌握 2.6「常数倍与和差」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「常数倍与和差」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「常数倍与和差」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「常数倍与和差」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「常数倍与和差」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「常数倍与和差」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.5",
        "title": "幂函数导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.7",
        "title": "eˣ 与 aˣ 导数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「常数倍与和差」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「常数倍与和差」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「常数倍与和差」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "常数法则",
        "termEn": "constant rule",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[c]=0\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[c]=0\\)."
      },
      {
        "termZh": "和法则",
        "termEn": "sum rule",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[f(x)+g(x)]=f'(x)+g'(x)\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[f(x)+g(x)]=f'(x)+g'(x)\\)."
      },
      {
        "termZh": "差法则",
        "termEn": "difference rule",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[f(x)-g(x)]=f'(x)-g'(x)\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[f(x)-g(x)]=f'(x)-g'(x)\\)."
      },
      {
        "termZh": "常数倍法则",
        "termEn": "constant multiple rule",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[c f(x)]=c f'(x)\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[c f(x)]=c f'(x)\\)."
      },
      {
        "termZh": "幂法则",
        "termEn": "power rule",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[x^{n}]=nx^{n-1}\\)（\\(n\\) 为实数）。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[x^{n}]=nx^{n-1}\\) for real \\(n\\)."
      },
      {
        "termZh": "线性性",
        "termEn": "linearity",
        "defZh": "求导运算保持函数加法与常数倍。",
        "defEn": "Differentiation preserves sums and constant multiples."
      }
    ]
  },
  "2.7": {
    "id": "math/calc-u2/2.7",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.7",
    "titleZh": "eˣ 与 aˣ 导数",
    "titleEn": "Derivatives of cos x, sin x, eˣ, and ln x",
    "layer": "ap",
    "summary": "eˣ 与 aˣ 导数 · Derivatives of cos x, sin x, eˣ, and ln x",
    "learningObjectives": [
      "能陈述「eˣ 与 aˣ 导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Derivatives of cos x, sin x, eˣ, and ln x：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「eˣ 与 aˣ 导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "eˣ 与 aˣ 导数（Derivatives of cos x, sin x, eˣ, and ln x）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「eˣ 与 aˣ 导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「eˣ 与 aˣ 导数」的工作方程或机制链。"
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
      "掌握 2.7「eˣ 与 aˣ 导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「eˣ 与 aˣ 导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「eˣ 与 aˣ 导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「eˣ 与 aˣ 导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「eˣ 与 aˣ 导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「eˣ 与 aˣ 导数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.6",
        "title": "常数倍与和差",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.8",
        "title": "积商法则",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「eˣ 与 aˣ 导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「eˣ 与 aˣ 导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「eˣ 与 aˣ 导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "正弦导数",
        "termEn": "derivative of sine",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\)."
      },
      {
        "termZh": "余弦导数",
        "termEn": "derivative of cosine",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\)."
      },
      {
        "termZh": "自然指数",
        "termEn": "natural exponential",
        "defZh": "\\(e^{x}\\)，其导数仍为 \\(e^{x}\\)。",
        "defEn": "\\(e^{x}\\), whose derivative is again \\(e^{x}\\)."
      },
      {
        "termZh": "自然对数",
        "termEn": "natural logarithm",
        "defZh": "\\(\\ln x\\)，其导数为 \\(\\dfrac{1}{x}\\)（\\(x>0\\)）。",
        "defEn": "\\(\\ln x\\), whose derivative is \\(\\dfrac{1}{x}\\) for \\(x>0\\)."
      },
      {
        "termZh": "一般指数",
        "termEn": "general exponential",
        "defZh": "\\(a^{x}\\)，导数为 \\(a^{x}\\ln a\\)。",
        "defEn": "\\(a^{x}\\), whose derivative is \\(a^{x}\\ln a\\)."
      },
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "复合函数求导时乘以内层函数的导数。",
        "defEn": "Differentiating a composition by multiplying by the derivative of the inner function."
      }
    ]
  },
  "2.8": {
    "id": "math/calc-u2/2.8",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.8",
    "titleZh": "积商法则",
    "titleEn": "The Product Rule",
    "layer": "ap",
    "summary": "积商法则 · The Product Rule",
    "learningObjectives": [
      "能陈述「积商法则」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Product Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「积商法则」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "积商法则（The Product Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「积商法则」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "(uv)'=u'v+uv',\\quad \\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}",
        "note": "积法则与商法则；商法则分子顺序不能反。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「积商法则」的工作方程或机制链。"
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
      "掌握 2.8「积商法则」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「积商法则」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「积商法则」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「积商法则」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「积商法则」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「积商法则」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.7",
        "title": "eˣ 与 aˣ 导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.9",
        "title": "积商法则续",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「积商法则」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「积商法则」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「积商法则」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "乘积法则",
        "termEn": "product rule",
        "defZh": "\\((uv)'=u'v+uv'\\)。",
        "defEn": "The rule \\((uv)'=u'v+uv'\\)."
      },
      {
        "termZh": "商法则",
        "termEn": "quotient rule",
        "defZh": "\\(\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}\\)，要求 \\(v\\ne 0\\)。",
        "defEn": "The rule \\(\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}\\), valid when \\(v\\ne 0\\)."
      },
      {
        "termZh": "因子",
        "termEn": "factor",
        "defZh": "乘积中相乘的每个函数。",
        "defEn": "Each function being multiplied in a product."
      },
      {
        "termZh": "分子 \\(u\\)",
        "termEn": "numerator",
        "defZh": "商法则中位于分数线上方的函数。",
        "defEn": "The function above the fraction bar in the quotient rule."
      },
      {
        "termZh": "分母 \\(v\\)",
        "termEn": "denominator",
        "defZh": "商法则中位于分数线下方的函数，必须非零。",
        "defEn": "The function below the fraction bar in the quotient rule; it must be nonzero."
      },
      {
        "termZh": "展开两项",
        "termEn": "two-term expansion",
        "defZh": "把乘积的导数写成两项之和，避免只对一个因子求导。",
        "defEn": "Writing the derivative of a product as the sum of two terms so that neither factor is ignored."
      }
    ]
  },
  "2.9": {
    "id": "math/calc-u2/2.9",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.9",
    "titleZh": "积商法则续",
    "titleEn": "The Quotient Rule",
    "layer": "ap",
    "summary": "积商法则续 · The Quotient Rule",
    "learningObjectives": [
      "能陈述「积商法则续」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Quotient Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「积商法则续」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "积商法则续（The Quotient Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「积商法则续」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[x^{n}\\right]=nx^{n-1}",
        "note": "幂法则与积商法则结合使用。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「积商法则续」的工作方程或机制链。"
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
      "掌握 2.9「积商法则续」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「积商法则续」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「积商法则续」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「积商法则续」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「积商法则续」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「积商法则续」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.8",
        "title": "积商法则",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.10",
        "title": "三角函数导数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「积商法则续」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「积商法则续」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「积商法则续」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "商法则",
        "termEn": "quotient rule",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\dfrac{f(x)}{g(x)}\\right]=\\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^{2}}\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\dfrac{f(x)}{g(x)}\\right]=\\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^{2}}\\)."
      },
      {
        "termZh": "分子",
        "termEn": "numerator",
        "defZh": "商法则中位于分数线上方的函数 \\(f(x)\\)。",
        "defEn": "The function \\(f(x)\\) above the fraction bar in the quotient rule."
      },
      {
        "termZh": "分母",
        "termEn": "denominator",
        "defZh": "商法则中位于分数线下方的函数 \\(g(x)\\)，需非零。",
        "defEn": "The function \\(g(x)\\) below the fraction bar, required to be nonzero."
      },
      {
        "termZh": "商的导数",
        "termEn": "derivative of a quotient",
        "defZh": "由分子导数乘分母减去分子乘分母导数得到。",
        "defEn": "Obtained from numerator derivative times denominator minus numerator times denominator derivative."
      },
      {
        "termZh": "化简",
        "termEn": "simplify",
        "defZh": "展开并合并同类项，使导数表达式更简洁。",
        "defEn": "Expanding and combining like terms to make the derivative expression simpler."
      }
    ]
  },
  "2.10": {
    "id": "math/calc-u2/2.10",
    "subject": "math",
    "chapterId": "calc-u2",
    "unitCode": "2",
    "unitTitleZh": "导数：定义与基本性质",
    "unitTitleEn": "Differentiation: Definition and Fundamental Properties",
    "code": "2.10",
    "titleZh": "三角函数导数",
    "titleEn": "Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "layer": "ap",
    "summary": "三角函数导数 · Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
    "learningObjectives": [
      "能陈述「三角函数导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「三角函数导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "三角函数导数（Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「三角函数导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「三角函数导数」的工作方程或机制链。"
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
      "掌握 2.10「三角函数导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「三角函数导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「三角函数导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「三角函数导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「三角函数导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「三角函数导数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u2",
        "code": "2.9",
        "title": "积商法则续",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「三角函数导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「三角函数导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「三角函数导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "正切",
        "termEn": "tangent",
        "defZh": "\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\)，导数为 \\(\\sec^{2}x\\)。",
        "defEn": "\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\), whose derivative is \\(\\sec^{2}x\\)."
      },
      {
        "termZh": "余切",
        "termEn": "cotangent",
        "defZh": "\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\)，导数为 \\(-\\csc^{2}x\\)。",
        "defEn": "\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\), whose derivative is \\(-\\csc^{2}x\\)."
      },
      {
        "termZh": "正割",
        "termEn": "secant",
        "defZh": "\\(\\sec x=\\dfrac{1}{\\cos x}\\)，导数为 \\(\\sec x\\tan x\\)。",
        "defEn": "\\(\\sec x=\\dfrac{1}{\\cos x}\\), whose derivative is \\(\\sec x\\tan x\\)."
      },
      {
        "termZh": "余割",
        "termEn": "cosecant",
        "defZh": "\\(\\csc x=\\dfrac{1}{\\sin x}\\)，导数为 \\(-\\csc x\\cot x\\)。",
        "defEn": "\\(\\csc x=\\dfrac{1}{\\sin x}\\), whose derivative is \\(-\\csc x\\cot x\\)."
      },
      {
        "termZh": "平方正割",
        "termEn": "secant squared",
        "defZh": "\\(\\sec^{2}x=1+\\tan^{2}x\\)，是正切的导数。",
        "defEn": "\\(\\sec^{2}x=1+\\tan^{2}x\\), the derivative of tangent."
      },
      {
        "termZh": "三角恒等式",
        "termEn": "trigonometric identity",
        "defZh": "用于改写三角表达式并化简导数。",
        "defEn": "An identity used to rewrite trigonometric expressions and simplify derivatives."
      }
    ]
  }
};
