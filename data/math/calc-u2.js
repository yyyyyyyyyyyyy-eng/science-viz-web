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
        "title": "估计函数在某点处的导数",
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
    "titleZh": "估计函数在某点处的导数",
    "titleEn": "Estimating Derivatives of a Function at a Point",
    "layer": "ap",
    "summary": "从表格用前向、后向或中心差商，从图像用切线或邻近割线的斜率，估计函数在某点的导数；也可用图形计算器、CAS 或电子表格等技术的数值或符号求导功能计算、估计并复核结果。 · Estimate a derivative at a point from a table with forward, backward, or central difference quotients, from a graph with the slope of a tangent or nearby secant, or with the numerical or symbolic differentiation features of technology such as a graphing calculator, CAS, or spreadsheet.",
    "learningObjectives": [
      "能从表格数据用前向、后向或中心差商估计 \\(f'(a)\\)，并说明步长 \\(h\\) 与取点方向对估计的影响。 · Estimate \\(f'(a)\\) from tabulated data with forward, backward, or central difference quotients, and explain how the step size \\(h\\) and the direction of the chosen points affect the estimate.",
      "能从图像读出切线或邻近割线的斜率来估计 \\(f'(a)\\)，并用符号、量级和单位检查结果。 · Estimate \\(f'(a)\\) from a graph by reading the slope of a tangent or nearby secant line, and check the sign, size, and units of the result.",
      "能使用图形计算器、CAS、电子表格或绘图应用的数值或符号求导功能计算或估计某点导数，并说明输出是精确值还是近似值。 · Use the numerical or symbolic differentiation features of a graphing calculator, CAS, spreadsheet, or graphing app to calculate or estimate a derivative at a point, and state whether the output is exact or approximate.",
      "能比较多种估计（不同 \\(h\\)、不同方向、图像与表格、技术与手算），选择更可靠者并解释误差来源。 · Compare several estimates (different \\(h\\), directions, graph versus table, technology versus hand calculation), choose the more reliable one, and explain the sources of error.",
      "能在应用情境中把导数估计解释为带单位的瞬时变化率。 · Interpret a derivative estimate as an instantaneous rate of change with units in an applied context."
    ],
    "essentialKnowledge": [
      "表格估计的核心是差商：用两点间的平均变化率近似一点处的瞬时变化率。 · The core of a table estimate is the difference quotient: approximate an instantaneous rate at one point by an average rate between two points.",
      "前向差商 \\(f'(a)\\approx\\dfrac{f(a+h)-f(a)}{h}\\) 使用 \\(a\\) 右侧的点。 · The forward difference \\(f'(a)\\approx\\dfrac{f(a+h)-f(a)}{h}\\) uses a point to the right of \\(a\\)。",
      "后向差商 \\(f'(a)\\approx\\dfrac{f(a)-f(a-h)}{h}\\) 使用 \\(a\\) 左侧的点。 · The backward difference \\(f'(a)\\approx\\dfrac{f(a)-f(a-h)}{h}\\) uses a point to the left of \\(a\\)。",
      "中心差商 \\(f'(a)\\approx\\dfrac{f(a+h)-f(a-h)}{2h}\\) 使用 \\(a\\) 两侧对称的点，对光滑函数通常比单侧差商更准确。 · The central difference \\(f'(a)\\approx\\dfrac{f(a+h)-f(a-h)}{2h}\\) uses symmetric points on both sides of \\(a\\); for smooth functions it is usually more accurate than a one-sided quotient.",
      "表格中的 \\(h\\) 必须取实际的自变量间距；若表格步长不均匀，就用所选两点的 \\(x\\) 差作分母。 · The \\(h\\) in a table estimate must be the actual input spacing; with uneven spacing, use the \\(x\\)-difference of the two chosen points as the denominator.",
      "图像估计：导数就是曲线在 \\(a\\) 处切线的斜率；在切线上取两点算 \\(\\dfrac{\\Delta y}{\\Delta x}\\)，并注意坐标轴单位与刻度。 · Graph estimate: the derivative is the slope of the tangent at \\(a\\); take two points on the tangent and compute \\(\\dfrac{\\Delta y}{\\Delta x}\\), paying attention to axis units and scale.",
      "没有画好的切线时，用 \\(a\\) 两侧邻近点的割线斜率估计；割线上的点越靠近 \\(a\\)，割线越接近切线，估计通常越好。 · When no tangent is drawn, estimate with a secant through points near \\(a\\) on both sides; the closer the secant points are to \\(a\\), the closer the secant is to the tangent, and usually the better the estimate.",
      "技术（CHA-2.D.2）：图形计算器的 nDeriv、CAS 的求导命令、电子表格的差商公式或在线绘图应用都能计算或估计某点导数；要分清符号求导的精确结果与数值求导的近似结果。 · Technology (CHA-2.D.2): a graphing calculator's nDeriv, a CAS differentiation command, a spreadsheet difference formula, or an online graphing app can calculate or estimate a derivative at a point; distinguish exact symbolic results from numerical approximations.",
      "数值求导要选合适的 \\(h\\)：太大时截断误差大，太小时浮点舍入误差会被放大；中心差商通常在两者之间取得较好平衡。 · For numerical differentiation, choose a moderate \\(h\\): too large gives truncation error, too small amplifies floating-point roundoff; the central difference usually balances the two well.",
      "技术输出必须与图形或表格的独立估计交叉验证；报告结果时按数据精度舍入，并带上 \\(y\\) 单位每 \\(x\\) 单位。 · Cross-check technology output against an independent graph or table estimate; round the reported result to the precision of the data and attach \\(y\\)-units per \\(x\\)-unit."
    ],
    "definition": "函数 \\(f\\) 在 \\(a\\) 处的导数 \\(f'(a)\\) 是差商 \\(\\dfrac{f(a+h)-f(a)}{h}\\) 当 \\(h\\to0\\) 时的极限。估计导数，就是在不能或不必求极限时，用表格中邻近两点的差商、图像上切线（或邻近割线）的斜率，或技术的数值或符号求导功能，给出 \\(f'(a)\\) 的近似值；若技术能符号求导，则先求 \\(f'(x)\\) 再代入 \\(x=a\\)，得到的是精确值，而数值求导给出的仍是近似值。 · The derivative of \\(f\\) at \\(a\\) is the limit of the difference quotient \\(\\dfrac{f(a+h)-f(a)}{h}\\) as \\(h\\to0\\)。 Estimating the derivative means approximating \\(f'(a)\\) when the limit is unavailable or unnecessary, using a difference quotient from two nearby table points, the slope of a tangent (or nearby secant) on a graph, or the numerical or symbolic differentiation feature of technology. If technology can differentiate symbolically, evaluate \\(f'(x)\\) at \\(x=a\\) for an exact value; numerical differentiation still returns an approximation.",
    "intuition": "把图像在 \\(a\\) 附近不断放大：曲线越来越像一条直线，割线也逐渐转到切线的位置。表格估计做的就是这件事——用 \\(a\\) 附近两点的 \\(\\dfrac{\\Delta y}{\\Delta x}\\) 代替 \\(a\\) 点切线的斜率。技术只是把「取邻近点、做除法」或「按求导法则」自动化：它算得快，但输入错、模式错或 \\(h\\) 选得不当，输出就会骗人，所以要用图像或另一组数据核对。 · Zoom in on the graph near \\(a\\): the curve looks more and more like a line, and secants rotate toward the tangent. A table estimate does exactly this—replace the tangent slope at \\(a\\) with \\(\\dfrac{\\Delta y}{\\Delta x}\\) from two nearby points. Technology merely automates either “take nearby points and divide” or “apply differentiation rules”: it is fast, but a wrong input, the wrong mode, or a poor \\(h\\) can produce a misleading output, so check it against a graph or another data set.",
    "formulas": [
      {
        "latex": "f'(a)\\approx\\dfrac{f(a+h)-f(a)}{h}",
        "note": "前向差商：用 \\(a\\) 右侧的点估计导数。 · Forward difference: estimate the derivative with a point to the right of \\(a\\)。"
      },
      {
        "latex": "f'(a)\\approx\\dfrac{f(a)-f(a-h)}{h}",
        "note": "后向差商：用 \\(a\\) 左侧的点估计导数。 · Backward difference: estimate the derivative with a point to the left of \\(a\\)。"
      },
      {
        "latex": "f'(a)\\approx\\dfrac{f(a+h)-f(a-h)}{2h}",
        "note": "中心差商：两侧对称，通常更准确。 · Central difference: symmetric on both sides, usually more accurate."
      },
      {
        "latex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "精确值由极限定义；所有估计都是对这个极限的近似。 · The exact value is defined by the limit; every estimate approximates this limit."
      },
      {
        "latex": "m_{\\text{割线 secant}}=\\dfrac{f(x_2)-f(x_1)}{x_2-x_1}=\\dfrac{\\Delta y}{\\Delta x}",
        "note": "图像上两点连线的斜率；当两点向 \\(a\\) 靠拢时，割线斜率趋于切线斜率 \\(f'(a)\\)。 · Slope through two graph points; as the points move toward \\(a\\), the secant slope approaches the tangent slope \\(f'(a)\\)。"
      },
      {
        "latex": "D_h f(a)=\\dfrac{f(a+h)-f(a-h)}{2h}",
        "note": "中心差商算子；数值求导常直接调用它。 · Central-difference operator; numerical differentiation often evaluates it directly."
      },
      {
        "latex": "\\texttt{nDeriv}(f(x),\\,x,\\,a)\\quad\\text{或 or}\\quad\\left.\\dfrac{\\mathrm{d}}{\\mathrm{d}x}f(x)\\right|_{x=a}",
        "note": "技术写法：前者是数值求导，后者是符号求导后代入 \\(x=a\\)。 · Technology notation: the first is numerical differentiation; the second differentiates symbolically and then evaluates at \\(x=a\\)。"
      }
    ],
    "derivationNotes": [
      {
        "from": "导数定义 · Definition of the derivative",
        "to": "前向差商 · Forward difference",
        "note": "在 \\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\) 中取一个很小的正 \\(h\\) 而不取极限，就得到前向差商。 · Keep a small positive \\(h\\) instead of taking the limit in \\(f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\) to obtain the forward difference."
      },
      {
        "from": "前向与后向差商 · Forward and backward differences",
        "to": "中心差商 · Central difference",
        "note": "把前向差商与后向差商相加再除以 2：\\(\\dfrac12\\left[\\dfrac{f(a+h)-f(a)}{h}+\\dfrac{f(a)-f(a-h)}{h}\\right]=\\dfrac{f(a+h)-f(a-h)}{2h}\\)。 · Add the forward and backward quotients and divide by 2: \\(\\dfrac12\\left[\\dfrac{f(a+h)-f(a)}{h}+\\dfrac{f(a)-f(a-h)}{h}\\right]=\\dfrac{f(a+h)-f(a-h)}{2h}\\)。"
      },
      {
        "from": "图像上的割线 · Secant on a graph",
        "to": "切线 · Tangent",
        "note": "让割线的两个点沿曲线同时向 \\(a\\) 靠拢；若曲线在 \\(a\\) 处光滑，割线斜率的极限就是切线斜率。 · Let both secant points move along the curve toward \\(a\\); if the curve is smooth at \\(a\\), the limit of the secant slopes is the tangent slope."
      },
      {
        "from": "表格数据 · Table data",
        "to": "差商 · Difference quotient",
        "note": "在表中找 \\(a\\) 两侧最近的 \\(x\\) 值；分母用这两个 \\(x\\) 的实际差，而不是固定的 1。 · Find the nearest \\(x\\)-values on both sides of \\(a\\) in the table; use their actual \\(x\\)-difference as the denominator, not a fixed 1."
      },
      {
        "from": "技术输入 · Technology input",
        "to": "导数输出 · Derivative output",
        "note": "数值求导：输入函数、点和步长，技术内部算差商；符号求导：技术按求导法则给出 \\(f'(x)\\)，再代入 \\(a\\)。 · Numerical differentiation: input the function, point, and step size, and the technology evaluates a difference quotient internally. Symbolic differentiation: the technology applies differentiation rules to produce \\(f'(x)\\), then evaluates at \\(a\\)。"
      },
      {
        "from": "误差来源 · Sources of error",
        "to": "步长选择 · Choice of step size",
        "note": "\\(h\\) 大时截断误差大（割线离切线远）；\\(h\\) 太小时舍入误差被差商的分母放大。中心差商的主误差通常按 \\(h^2\\) 缩小，所以常比单侧差商更稳。 · A large \\(h\\) gives truncation error because the secant is far from the tangent; a very small \\(h\\) amplifies rounding error through the small denominator. The leading error of the central difference usually shrinks like \\(h^2\\), so it is often more stable than a one-sided quotient."
      }
    ],
    "conditions": [
      "函数在 \\(a\\) 附近应足够光滑（最好在 \\(a\\) 处可导），否则差商可能没有稳定的趋势，估计值也失去意义。 · The function should be smooth enough near \\(a\\) (ideally differentiable at \\(a\\)); otherwise the difference quotients may not settle down and the estimate is not meaningful.",
      "表格必须包含 \\(a\\) 附近的数据点；不要用离 \\(a\\) 很远的点外推，否则割线斜率可能偏离切线斜率很多。 · The table must contain data near \\(a\\); do not extrapolate from points far away, or the secant slope may differ greatly from the tangent slope.",
      "使用表格时，分母必须是所选两点的实际 \\(x\\) 差；表格步长不均匀时尤其容易出错。 · With a table, the denominator must be the actual \\(x\\)-difference of the chosen points; uneven spacing makes this especially error-prone.",
      "图像要有可读的坐标刻度；读切线斜率时要在切线上取两个尽量远的点以减少读数误差，并保持坐标轴单位一致。 · The graph needs readable axis scales; when reading a tangent slope, use two points on the tangent that are far apart to reduce reading error, and keep axis units consistent.",
      "技术求导要确认函数输入正确、变量与点正确、角度模式正确（三角函数用弧度），并确认该点是定义域内的点。 · For technology, confirm the function, variable, point, and angle mode (use radians for trigonometric functions), and check that the point lies in the domain.",
      "要区分符号求导与数值求导：符号求导给出精确表达式后可代入；数值求导给出近似值，必须用图形、表格或第二种方法复核。 · Distinguish symbolic from numerical differentiation: symbolic differentiation gives an exact expression that can be evaluated; numerical differentiation gives an approximation that must be checked against a graph, table, or second method.",
      "单侧差商对弯曲的函数有系统偏差：递增且上凸（concave down）时前向差商常低估、后向差商常高估；需要更可靠估计时优先用中心差商或两侧数据。 · One-sided quotients are systematically biased for curved functions: for an increasing, concave-down graph the forward difference often underestimates and the backward difference often overestimates; prefer the central difference or data on both sides when a more reliable estimate is needed."
    ],
    "keyPoints": [
      "CHA-2.D.1：表格用差商，图像用切线或邻近割线的斜率，二者都是把平均变化率收缩到一点。 · CHA-2.D.1: use difference quotients for tables and tangent or nearby secant slopes for graphs; both shrink an average rate down to a single point.",
      "前向、后向、中心差商的分母分别是 \\(h\\)、\\(h\\)、\\(2h\\)；中心差商最容易被漏掉因子 2。 · The denominators for forward, backward, and central differences are \\(h\\), \\(h\\), and \\(2h\\); the factor 2 in the central difference is the most commonly missed.",
      "中心差商通常比单侧差商更准确；若只能取一侧数据，就明确说明估计偏向哪边。 · The central difference is usually more accurate than a one-sided quotient; if only one side is available, state which way the estimate is biased.",
      "从图像读斜率要同时看符号、大小和单位：上升为正、下降为负，单位是 \\(y\\) 单位每 \\(x\\) 单位。 · When reading a slope from a graph, check the sign, size, and units: increasing is positive, decreasing is negative, and the units are \\(y\\)-units per \\(x\\)-unit.",
      "CHA-2.D.2：技术能计算或估计导数，但要知道它给的是精确值还是近似值，并检查输入与模式。 · CHA-2.D.2: technology can calculate or estimate derivatives, but know whether the output is exact or approximate and check the input and mode.",
      "数值求导的步长不是越小越好：太小会被浮点舍入误差放大，太大则截断误差明显。 · For numerical differentiation, smaller is not always better: too small amplifies floating-point roundoff, while too large leaves noticeable truncation error.",
      "AP 作答要写出所用公式、代入的数字和单位，再用图像或第二种方法说明估计合理。 · In AP responses, write the formula used, the substituted numbers, and the units, then justify the estimate with a graph or a second method."
    ],
    "misconceptions": [
      "「导数就是函数值」——导数是在该点的瞬时变化率或切线斜率，不是 \\(f(a)\\) 本身。 · “The derivative is the function value” is false: the derivative is the instantaneous rate or tangent slope at the point, not \\(f(a)\\) itself.",
      "「任何表格都用 \\(h=1\\)」——分母必须用所选两点的实际 \\(x\\) 差；步长不均匀时更不能套用 1。 · “Use \\(h=1\\) for every table” is false: the denominator must be the actual \\(x\\)-difference of the chosen points, especially when spacing is uneven.",
      "「中心差商的分母是 \\(h\\)」——应为 \\(2h\\)，因为分子跨越了从 \\(a-h\\) 到 \\(a+h\\) 的两倍步长。 · “The central difference has denominator \\(h\\)” is false: it is \\(2h\\), because the numerator spans from \\(a-h\\) to \\(a+h\\)。",
      "「\\(h\\) 越小一定越准」——数值计算中 \\(h\\) 太小会让舍入误差主导；应选与数据精度匹配的步长。 · “Smaller \\(h\\) is always more accurate” is false in numerical computation: too small an \\(h\\) lets roundoff dominate; match the step size to the data precision.",
      "「从图像读斜率就是读 \\(y\\) 值」——斜率是 \\(\\dfrac{\\Delta y}{\\Delta x}\\)，必须同时读横向和纵向变化并考虑刻度。 · “Reading a slope from a graph means reading the \\(y\\)-value” is false: slope is \\(\\dfrac{\\Delta y}{\\Delta x}\\), so read both changes and account for the axis scales.",
      "「计算器给出的就是精确导数」——数值求导只是近似；只有符号求导并代入才给出精确值。 · “The calculator gives the exact derivative” is false: numerical differentiation is only an approximation; only symbolic differentiation followed by evaluation gives an exact value.",
      "「用技术就不必检查」——输入错误、角度模式错误或步长不当都会产生看似合理的错误结果，必须交叉验证。 · “Technology removes the need to check” is false: wrong input, the wrong angle mode, or a poor step size can produce plausible-looking wrong results, so cross-check.",
      "「导数的单位与 \\(y\\) 相同」——导数的单位是 \\(y\\) 单位每 \\(x\\) 单位，例如 °C/min 或 m/s。 · “The derivative has the same units as \\(y\\)” is false: its units are \\(y\\)-units per \\(x\\)-unit, such as °C/min or m/s."
    ],
    "examples": [
      {
        "title": "例 1 · 表格三种差商 · Example 1: Three difference quotients from a table",
        "prompt": "已知 \\(f(x)=2^x\\) 的表格：\\(x=1.8,1.9,2.0,2.1,2.2\\) 时 \\(f(x)=3.4822,3.7321,4.0000,4.2871,4.5948\\)。取 \\(h=0.1\\)，分别用前向、后向与中心差商估计 \\(f'(2)\\)，并与精确值 \\(4\\ln2\\approx2.7726\\) 比较。 · The table gives \\(f(x)=2^x\\) at \\(x=1.8,1.9,2.0,2.1,2.2\\) as \\(3.4822,3.7321,4.0000,4.2871,4.5948\\). With \\(h=0.1\\), estimate \\(f'(2)\\) by forward, backward, and central differences, and compare with the exact value \\(4\\ln2\\approx2.7726\\)。",
        "steps": [
          "前向：\\(f'(2)\\approx\\dfrac{f(2.1)-f(2.0)}{0.1}=\\dfrac{4.2871-4.0000}{0.1}=2.871\\)。 · Forward: \\(f'(2)\\approx\\dfrac{f(2.1)-f(2.0)}{0.1}=\\dfrac{4.2871-4.0000}{0.1}=2.871\\)。",
          "后向：\\(f'(2)\\approx\\dfrac{f(2.0)-f(1.9)}{0.1}=\\dfrac{4.0000-3.7321}{0.1}=2.679\\)。 · Backward: \\(f'(2)\\approx\\dfrac{f(2.0)-f(1.9)}{0.1}=\\dfrac{4.0000-3.7321}{0.1}=2.679\\)。",
          "中心：\\(f'(2)\\approx\\dfrac{f(2.1)-f(1.9)}{0.2}=\\dfrac{4.2871-3.7321}{0.2}=2.775\\)。 · Central: \\(f'(2)\\approx\\dfrac{f(2.1)-f(1.9)}{0.2}=\\dfrac{4.2871-3.7321}{0.2}=2.775\\)。",
          "与精确值比较：前向误差约 \\(0.098\\)，后向约 \\(0.094\\)，中心约 \\(0.002\\)；中心差商明显最接近。 · Compare with the exact value: the forward error is about \\(0.098\\), the backward about \\(0.094\\), and the central about \\(0.002\\); the central difference is clearly closest."
        ],
        "solution": "前向 2.871，后向 2.679，中心 2.775；中心差商最接近精确值 2.7726。 · Forward 2.871, backward 2.679, central 2.775; the central difference is closest to the exact value 2.7726.",
        "solutionLatex": "f'(2)\\approx\\dfrac{f(2.1)-f(1.9)}{2(0.1)}\\approx2.775\\quad(\\text{精确值 exact }4\\ln2\\approx2.7726)"
      },
      {
        "title": "例 2 · 割线趋近切线 · Example 2: Secants approach the tangent",
        "prompt": "对 \\(f(x)=x^2\\) 在 \\(a=2\\) 处，割线从 \\((2,4)\\) 到 \\((2+h,f(2+h))\\) 的斜率为 \\(4+h\\)。取 \\(h=1,0.5,0.1\\) 计算割线斜率，并用图像说明它们如何趋近切线斜率 \\(f'(2)=4\\)。 · For \\(f(x)=x^2\\) at \\(a=2\\), the secant from \\((2,4)\\) to \\((2+h,f(2+h))\\) has slope \\(4+h\\). Compute the secant slopes for \\(h=1,0.5,0.1\\) and explain graphically how they approach the tangent slope \\(f'(2)=4\\)。",
        "steps": [
          "\\(h=1\\)：割线过 \\((2,4)\\) 与 \\((3,9)\\)，斜率 \\(\\dfrac{9-4}{3-2}=5\\)。 · \\(h=1\\): the secant through \\((2,4)\\) and \\((3,9)\\) has slope \\(\\dfrac{9-4}{3-2}=5\\)。",
          "\\(h=0.5\\)：割线过 \\((2,4)\\) 与 \\((2.5,6.25)\\)，斜率 \\(\\dfrac{6.25-4}{0.5}=4.5\\)。 · \\(h=0.5\\): the secant through \\((2,4)\\) and \\((2.5,6.25)\\) has slope \\(\\dfrac{6.25-4}{0.5}=4.5\\)。",
          "\\(h=0.1\\)：割线过 \\((2,4)\\) 与 \\((2.1,4.41)\\)，斜率 \\(\\dfrac{4.41-4}{0.1}=4.1\\)。 · \\(h=0.1\\): the secant through \\((2,4)\\) and \\((2.1,4.41)\\) has slope \\(\\dfrac{4.41-4}{0.1}=4.1\\)。",
          "图像上，随着右侧点沿抛物线滑向 \\((2,4)\\)，割线绕该点旋转并趋近切线；斜率序列 \\(5,4.5,4.1,\\dots\\) 趋近 4。若图上已画切线，可在切线上取 \\((2,4)\\) 与 \\((3,8)\\)，斜率同样是 \\(\\dfrac{8-4}{3-2}=4\\)。 · On the graph, as the right-hand point slides along the parabola toward \\((2,4)\\), the secant rotates about that point toward the tangent; the slopes \\(5,4.5,4.1,\\dots\\) approach 4. If the tangent is already drawn, take \\((2,4)\\) and \\((3,8)\\) on it; the slope is again \\(\\dfrac{8-4}{3-2}=4\\)。"
        ],
        "solution": "割线斜率 5、4.5、4.1 随 \\(h\\to0\\) 趋近切线斜率 4；图像上表现为割线绕 \\((2,4)\\) 旋转到切线位置。 · The secant slopes 5, 4.5, 4.1 approach the tangent slope 4 as \\(h\\to0\\); graphically, the secant rotates about \\((2,4)\\) into the tangent position.",
        "solutionLatex": "m_{\\text{割线 secant}}=4+h\\;\\longrightarrow\\;4=f'(2)"
      },
      {
        "title": "例 3 · 用技术求导并核对 · Example 3: Differentiate with technology and check",
        "prompt": "用图形计算器的 nDeriv 与 CAS 分别处理 \\(f(x)=\\ln x\\) 在 \\(x=2\\) 处的导数：（i）取 \\(h=0.1\\) 用中心差商手算或表格计算；（ii）用 CAS 符号求导 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\ln x\\) 后代入 \\(x=2\\)；（iii）比较两者并说明哪个是精确值。 · Use a graphing calculator's nDeriv and a CAS on \\(f(x)=\\ln x\\) at \\(x=2\\): (i) compute a central difference with \\(h=0.1\\) by hand or with a table; (ii) use the CAS to differentiate \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\ln x\\) symbolically and evaluate at \\(x=2\\)； (iii) compare and state which is exact.",
        "steps": [
          "中心差商：\\(\\dfrac{\\ln2.1-\\ln1.9}{0.2}=\\dfrac{0.741937-0.641854}{0.2}\\approx0.500417\\)。 · Central difference: \\(\\dfrac{\\ln2.1-\\ln1.9}{0.2}=\\dfrac{0.741937-0.641854}{0.2}\\approx0.500417\\)。",
          "CAS 符号求导：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\ln x=\\dfrac1x\\)，在 \\(x=2\\) 处为 \\(\\dfrac12=0.5\\)，这是精确值。 · CAS symbolic differentiation: \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\ln x=\\dfrac1x\\), which equals \\(\\dfrac12=0.5\\) at \\(x=2\\); this is exact.",
          "误差约 \\(0.000417\\)，与中心差商的主误差量级 \\(\\dfrac{h^2}{6}\\left|f'''(\\xi)\\right|\\) 一致（此处 \\(f'''(x)=\\dfrac{2}{x^3}\\)，在 2 附近约 0.25，故 \\(\\dfrac{0.01}{6}\\cdot0.25\\approx0.000417\\)）。 · The error is about \\(0.000417\\), matching the leading central-difference error \\(\\dfrac{h^2}{6}\\left|f'''(\\xi)\\right|\\) (here \\(f'''(x)=\\dfrac{2}{x^3}\\approx0.25\\) near 2, so \\(\\dfrac{0.01}{6}\\cdot0.25\\approx0.000417\\))。",
          "nDeriv 的数值输出与中心差商很接近，但它仍是近似值；符号求导结果 0.5 才是精确值。技术输出必须检查函数、点与角度模式是否正确。 · The numerical nDeriv output is close to the central difference but still an approximation; the symbolic result 0.5 is exact. Technology output must be checked for the correct function, point, and angle mode."
        ],
        "solution": "中心差商约 0.500417；CAS 符号求导给出精确值 0.5。两者相差约 0.0004，说明数值估计合理。 · The central difference is about 0.500417; the CAS symbolic derivative gives the exact value 0.5. They differ by about 0.0004, so the numerical estimate is reasonable.",
        "solutionLatex": "\\dfrac{\\ln2.1-\\ln1.9}{0.2}\\approx0.500417,\\qquad\\left.\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\ln x\\right|_{x=2}=0.5"
      },
      {
        "title": "例 4 · 带单位的表格估计 · Example 4: A table estimate with units",
        "prompt": "某地气温 \\(T(t)\\)（°C）随时间 \\(t\\)（min）变化：\\(t=0,5,10\\) 时 \\(T=20,24,27\\)。分别用后向、前向与中心差商估计 \\(T'(5)\\)，写出单位，并说明哪个估计最合理。 · The temperature \\(T(t)\\) in °C changes with time \\(t\\) in minutes: \\(T=20,24,27\\) at \\(t=0,5,10\\). Estimate \\(T'(5)\\) by backward, forward, and central differences, give the units, and state which estimate is most defensible.",
        "steps": [
          "后向：\\(T'(5)\\approx\\dfrac{T(5)-T(0)}{5}=\\dfrac{24-20}{5}=0.8\\) °C/min。 · Backward: \\(T'(5)\\approx\\dfrac{T(5)-T(0)}{5}=\\dfrac{24-20}{5}=0.8\\) °C/min.",
          "前向：\\(T'(5)\\approx\\dfrac{T(10)-T(5)}{5}=\\dfrac{27-24}{5}=0.6\\) °C/min。 · Forward: \\(T'(5)\\approx\\dfrac{T(10)-T(5)}{5}=\\dfrac{27-24}{5}=0.6\\) °C/min.",
          "中心：\\(T'(5)\\approx\\dfrac{T(10)-T(0)}{10}=\\dfrac{27-20}{10}=0.7\\) °C/min。 · Central: \\(T'(5)\\approx\\dfrac{T(10)-T(0)}{10}=\\dfrac{27-20}{10}=0.7\\) °C/min.",
          "三个值都为正，说明 5 min 时气温在上升；单位是 °C 每 min。中心差商利用了 5 min 两侧的数据，通常最合理；若只有 t≤5 的数据，则只能用后向估计 0.8 °C/min。 · All three values are positive, so the temperature is rising at 5 min; the units are °C per min. The central difference uses data on both sides of 5 min and is usually most defensible; if only data with t≤5 were available, only the backward estimate 0.8 °C/min could be used."
        ],
        "solution": "后向 0.8、前向 0.6、中心 0.7 °C/min；中心估计 0.7 °C/min 最合理。 · Backward 0.8, forward 0.6, central 0.7 °C/min; the central estimate 0.7 °C/min is most defensible.",
        "solutionLatex": "T'(5)\\approx\\dfrac{T(10)-T(0)}{10}=\\dfrac{27-20}{10}=0.7\\ \\text{°C/min}"
      },
      {
        "title": "例 5 · 凹凸性与单侧偏差 · Example 5: Concavity and one-sided bias",
        "prompt": "设 \\(f(x)=\\sqrt{x}\\)。已知 \\(f\\) 在 \\(x=2\\) 附近递增且上凸（concave down），\\(f'(2)=\\dfrac{1}{2\\sqrt2}\\approx0.3536\\)。（i）用 \\(h=0.5\\) 的前向差商估计 \\(f'(2)\\)，判断是低估还是高估，并用割线解释；（ii）用后向差商对比；（iii）用 CAS 或 nDeriv 核对。 · Let \\(f(x)=\\sqrt{x}\\). Near \\(x=2\\), \\(f\\) is increasing and concave down, and \\(f'(2)=\\dfrac{1}{2\\sqrt2}\\approx0.3536\\)。 (i) Estimate \\(f'(2)\\) with the forward difference and \\(h=0.5\\), decide whether it under- or overestimates, and explain with a secant. (ii) Compare with the backward difference. (iii) Check with a CAS or nDeriv.",
        "steps": [
          "精确值：\\(f'(x)=\\dfrac{1}{2\\sqrt x}\\)，所以 \\(f'(2)=\\dfrac{1}{2\\sqrt2}\\approx0.353553\\)。 · Exact value: \\(f'(x)=\\dfrac{1}{2\\sqrt x}\\), so \\(f'(2)=\\dfrac{1}{2\\sqrt2}\\approx0.353553\\)。",
          "前向：\\(\\dfrac{\\sqrt{2.5}-\\sqrt2}{0.5}=\\dfrac{1.581139-1.414214}{0.5}\\approx0.333851\\)，低于精确值，是低估。 · Forward: \\(\\dfrac{\\sqrt{2.5}-\\sqrt2}{0.5}=\\dfrac{1.581139-1.414214}{0.5}\\approx0.333851\\), below the exact value, so it underestimates.",
          "后向：\\(\\dfrac{\\sqrt2-\\sqrt{1.5}}{0.5}=\\dfrac{1.414214-1.224745}{0.5}\\approx0.378937\\)，高于精确值，是高估。 · Backward: \\(\\dfrac{\\sqrt2-\\sqrt{1.5}}{0.5}=\\dfrac{1.414214-1.224745}{0.5}\\approx0.378937\\), above the exact value, so it overestimates.",
          "图像解释：递增且上凸的曲线上，切线斜率大于右侧割线斜率、小于左侧割线斜率；因此前向差商偏低、后向差商偏高。 · Graphical explanation: on an increasing, concave-down curve, the tangent slope is larger than a right-hand secant slope and smaller than a left-hand secant slope; hence the forward difference is low and the backward difference is high.",
          "技术核对：CAS 对 \\(\\sqrt{x}\\) 求导得 \\(\\dfrac{1}{2\\sqrt x}\\)，在 2 处为 0.353553；nDeriv 取很小的 \\(h\\) 也给出接近值。 · Technology check: the CAS differentiates \\(\\sqrt{x}\\) to \\(\\dfrac{1}{2\\sqrt x}\\), which is 0.353553 at 2; nDeriv with a very small \\(h\\) also gives a close value."
        ],
        "solution": "前向估计约 0.334（低估），后向约 0.379（高估），精确值约 0.354；单侧差商的偏差方向由凹凸性决定，中心差商更可靠。 · The forward estimate is about 0.334 (underestimate), the backward about 0.379 (overestimate), and the exact value about 0.354; concavity determines the direction of one-sided bias, and the central difference is more reliable.",
        "solutionLatex": "\\dfrac{\\sqrt{2.5}-\\sqrt2}{0.5}\\approx0.334<0.354<0.379\\approx\\dfrac{\\sqrt2-\\sqrt{1.5}}{0.5}"
      }
    ],
    "examTips": [
      "先写清用的是哪种差商：前向、后向还是中心；分母分别是 \\(h\\)、\\(h\\)、\\(2h\\)。 · State which difference quotient you use—forward, backward, or central—and remember the denominators \\(h\\), \\(h\\), and \\(2h\\)。",
      "表格题要读出实际 \\(x\\) 间距；不要默认 \\(h=1\\)，也不要用表格中不存在的点。 · For table problems, read the actual \\(x\\)-spacing; do not assume \\(h=1\\) or use points not in the table.",
      "图像题要先标出切点，再在切线上取两个易读的点算斜率；同时检查坐标轴刻度与单位。 · For graph problems, mark the point of tangency, then use two easy-to-read points on the tangent; check axis scales and units.",
      "技术题要写明输入（函数、点、步长或模式），并说明结果是精确值还是近似值。 · For technology problems, state the input (function, point, step size, or mode) and whether the result is exact or approximate.",
      "估计题通常要求「解释合理性」：与图像趋势、另一侧差商或精确值比较，说明误差方向和量级。 · Estimation problems usually require a reasonableness argument: compare with the graph, the other one-sided quotient, or the exact value, and state the direction and size of the error.",
      "应用情境题不要漏单位：导数的单位是 \\(y\\) 单位每 \\(x\\) 单位，并解释正负号的现实含义。 · In applied problems, do not omit units: the derivative has \\(y\\)-units per \\(x\\)-unit, and explain what the sign means in context.",
      "所有分式用叠式分式 \\(\\dfrac{a}{b}\\) 书写；代入时保留足够位数，最后再按数据精度舍入。 · Write all fractions in stacked form, such as \\(\\dfrac{a}{b}\\); keep enough digits during substitution and round only at the end to the precision of the data."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.1",
        "title": "瞬时变化率 · Defining Average and Instantaneous Rates of Change",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.2",
        "title": "导数定义 · Defining the Derivative of a Function and Using Derivative Notation",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.4",
        "title": "导数与连续 · Connecting Differentiability and Continuity",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.1",
        "title": "变化率情境 · Interpreting the Meaning of the Derivative in Context",
        "relation": "应用 · application"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.6",
        "title": "局部线性近似 · Approximating Values of a Function Using Local Linearity and Linearization",
        "relation": "相关 · related"
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
      "上游：2.1 的平均变化率与 2.2 的导数定义提供 \\(\\dfrac{f(a+h)-f(a)}{h}\\) 这一共同工具；估计只是把极限换成有限步长。 · Upstream: the average rate in 2.1 and the derivative definition in 2.2 supply the common tool \\(\\dfrac{f(a+h)-f(a)}{h}\\); estimation replaces the limit with a finite step.",
      "下游：2.4 用差商讨论可导与连续；后续求导法则给出精确导数，使估计值有了比较标准。 · Downstream: 2.4 uses difference quotients to discuss differentiability and continuity; later differentiation rules give exact derivatives against which estimates can be compared.",
      "应用：4.1 把导数解释为带单位的变化率，4.6 用切线做局部线性近似；两者都依赖「切线斜率就是导数」这一图像估计。 · Applications: 4.1 interprets the derivative as a rate with units, and 4.6 uses the tangent for local linear approximation; both rely on the graph estimate that the tangent slope is the derivative.",
      "技术：图形计算器、CAS 与电子表格把差商或求导法则自动化；估计的可靠性仍取决于步长、输入、模式与交叉验证。 · Technology: graphing calculators, CAS, and spreadsheets automate either difference quotients or differentiation rules; reliability still depends on step size, input, mode, and cross-checking."
    ],
    "intuitionDetailed": "先从图像建立画面：在 \\(a\\) 处画一条切线，切线的倾斜程度就是 \\(f'(a)\\)。如果只拿到表格，就把表中 \\(a\\) 左右最近的两点连成割线，用 \\(\\dfrac{\\Delta y}{\\Delta x}\\) 近似切线的倾斜程度；两点离 \\(a\\) 越近，割线越贴近切线。中心差商相当于在 \\(a\\) 两侧各取一步再平均，因而抵消了不少单侧偏差，通常最准。技术求导则把这件事交给机器：nDeriv 在内部取很小的 \\(h\\) 算差商，CAS 则按求导法则先得到 \\(f'(x)\\) 再代入。机器不会替你判断 \\(h\\) 是否合适、角度模式是否正确、表格间距是否均匀，所以估计题的最后一步永远是用图像、另一侧差商或精确值做合理性检查，并带上单位。 · Start with the graph: draw the tangent at \\(a\\), and its steepness is \\(f'(a)\\). If only a table is available, connect the nearest points on both sides of \\(a\\) with a secant and approximate the tangent's steepness by \\(\\dfrac{\\Delta y}{\\Delta x}\\); the closer the points are to \\(a\\), the closer the secant is to the tangent. The central difference takes one step on each side and averages, canceling much of the one-sided bias, so it is usually most accurate. Technology hands the work to a machine: nDeriv evaluates a difference quotient with a tiny \\(h\\), while a CAS applies differentiation rules to get \\(f'(x)\\) and then evaluates. The machine does not judge whether \\(h\\) is appropriate, whether the angle mode is correct, or whether the table spacing is even; so the final step of every estimation problem is a reasonableness check against a graph, the other one-sided quotient, or the exact value—with units attached.",
    "development": [
      "先判断题目给的是表格、图像还是技术工具；表格找邻近点，图像找切线或割线，技术确认输入格式。 · First identify whether the problem gives a table, a graph, or a technology tool; for a table find nearby points, for a graph find a tangent or secant, and for technology confirm the input format.",
      "表格题：确定 \\(a\\) 与步长 \\(h\\)，写出前向、后向或中心差商的公式，再代入表中数值。 · Table problems: identify \\(a\\) and the step \\(h\\), write the forward, backward, or central formula, and substitute the table values.",
      "图像题：标出切点，画或识别切线；在切线上取两个易读点算 \\(\\dfrac{\\Delta y}{\\Delta x}\\)，并检查坐标轴刻度。 · Graph problems: mark the point of tangency, draw or identify the tangent, use two easy-to-read points to compute \\(\\dfrac{\\Delta y}{\\Delta x}\\), and check the axis scales.",
      "技术题：输入函数、点与步长（或使用符号求导），记录输出并判断它是精确值还是近似值。 · Technology problems: enter the function, point, and step size (or use symbolic differentiation), record the output, and decide whether it is exact or approximate.",
      "比较与选择：用中心差商或两侧数据检验单侧估计，说明误差方向；必要时减小 \\(h\\) 观察估计是否稳定。 · Compare and choose: check a one-sided estimate with the central difference or two-sided data and state the error direction; if needed, reduce \\(h\\) and see whether the estimate stabilizes.",
      "解释与报告：把结果写成带单位的瞬时变化率，按数据精度舍入，并用一句话说明估计的合理性。 · Interpret and report: write the result as an instantaneous rate with units, round to the data precision, and justify the estimate in one sentence."
    ],
    "checks": [
      "不看笔记，写出前向、后向与中心差商三个公式，并说明分母为什么分别是 \\(h\\)、\\(h\\)、\\(2h\\)。 · Without notes, write the forward, backward, and central difference formulas and explain why the denominators are \\(h\\), \\(h\\), and \\(2h\\)。",
      "给定一张表格，能否用两种不同方法估计同一点的导数，并比较哪一个更可信？ · Given a table, can you estimate the derivative at a point in two different ways and compare which is more reliable?",
      "给定一条曲线和一点，能否画出切线并用两个点读出它的斜率？ · Given a curve and a point, can you draw the tangent and read its slope from two points?",
      "计算器显示 nDeriv 的结果时，能否说明它是精确值还是近似值，并用另一种方法核对？ · When a calculator displays an nDeriv result, can you state whether it is exact or approximate and check it another way?",
      "为什么数值求导的 \\(h\\) 不能无限小？截断误差与舍入误差如何随 \\(h\\) 变化？ · Why can't the step \\(h\\) in numerical differentiation be arbitrarily small? How do truncation error and roundoff error change with \\(h\\)?",
      "若函数上凸且递增，前向差商估计偏高还是偏低？用割线图说明。 · If a function is increasing and concave down, does the forward difference overestimate or underestimate? Explain with a secant graph.",
      "把 \\(f'(2)=3.4\\) 放回应用情境，它的单位是什么？正号代表什么？ · If \\(f'(2)=3.4\\) in an applied context, what are its units, and what does the positive sign mean?"
    ],
    "vocabulary": [
      {
        "termZh": "导数估计",
        "termEn": "derivative estimate",
        "defZh": "用差商、切线斜率或技术数值求导得到的 \\(f'(a)\\) 的近似值。",
        "defEn": "An approximation of \\(f'(a)\\) obtained from a difference quotient, a tangent slope, or numerical differentiation."
      },
      {
        "termZh": "差商",
        "termEn": "difference quotient",
        "defZh": "两点间函数值之差与自变量之差的比 \\(\\dfrac{f(b)-f(a)}{b-a}\\)，是割线斜率。",
        "defEn": "The ratio \\(\\dfrac{f(b)-f(a)}{b-a}\\) of the change in the function to the change in the input; it is a secant slope."
      },
      {
        "termZh": "前向差分",
        "termEn": "forward difference",
        "defZh": "\\(\\dfrac{f(a+h)-f(a)}{h}\\)，用 \\(a\\) 右侧的点估计导数。",
        "defEn": "\\(\\dfrac{f(a+h)-f(a)}{h}\\), estimating the derivative with a point to the right of \\(a\\)。"
      },
      {
        "termZh": "后向差分",
        "termEn": "backward difference",
        "defZh": "\\(\\dfrac{f(a)-f(a-h)}{h}\\)，用 \\(a\\) 左侧的点估计导数。",
        "defEn": "\\(\\dfrac{f(a)-f(a-h)}{h}\\), estimating the derivative with a point to the left of \\(a\\)。"
      },
      {
        "termZh": "中心差分",
        "termEn": "central difference",
        "defZh": "\\(\\dfrac{f(a+h)-f(a-h)}{2h}\\)，用两侧对称点估计，通常更准确。",
        "defEn": "\\(\\dfrac{f(a+h)-f(a-h)}{2h}\\), a symmetric two-sided estimate that is usually more accurate."
      },
      {
        "termZh": "步长",
        "termEn": "step size",
        "defZh": "估计中自变量改变量 \\(h\\)；太大有截断误差，太小会放大舍入误差。",
        "defEn": "The input increment \\(h\\) in an estimate; too large gives truncation error, while too small amplifies roundoff."
      },
      {
        "termZh": "割线",
        "termEn": "secant line",
        "defZh": "曲线上两点间的连线，其斜率是这两点间的平均变化率。",
        "defEn": "A line through two points on a curve; its slope is the average rate of change between those points."
      },
      {
        "termZh": "数值导数",
        "termEn": "numerical derivative",
        "defZh": "用有限步长的差商近似导数，通常由计算器、CAS 或软件完成。",
        "defEn": "A derivative approximated by a difference quotient with a finite step, usually computed by a calculator, CAS, or software."
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
        "title": "估计函数在某点处的导数",
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
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[cf(x)]=c f'(x),\\quad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[f(x)\\pm g(x)]=f'(x)\\pm g'(x)",
        "note": "常数倍、和差法则：逐项求导。 · Constant-multiple, sum, and difference rules: differentiate term by term."
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
        "title": "cos x、sin x、eˣ 与 ln x 的导数",
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
    "titleZh": "cos x、sin x、eˣ 与 ln x 的导数",
    "titleEn": "Derivatives of cos x, sin x, eˣ, and ln x",
    "layer": "ap",
    "summary": "cos x、sin x、eˣ 与 ln x 的导数 · Derivatives of cos x, sin x, eˣ, and ln x",
    "learningObjectives": [
      "能陈述「cos x、sin x、eˣ 与 ln x 的导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Derivatives of cos x, sin x, eˣ, and ln x：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「cos x、sin x、eˣ 与 ln x 的导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "cos x、sin x、eˣ 与 ln x 的导数（Derivatives of cos x, sin x, eˣ, and ln x）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「cos x、sin x、eˣ 与 ln x 的导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x,\\quad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x,\\quad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x},\\quad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}",
        "note": "sin x、cos x、eˣ 与 ln x 的导数。 · Derivatives of sin x, cos x, eˣ, and ln x."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「cos x、sin x、eˣ 与 ln x 的导数」的工作方程或机制链。"
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
      "掌握 2.7「cos x、sin x、eˣ 与 ln x 的导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「cos x、sin x、eˣ 与 ln x 的导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「cos x、sin x、eˣ 与 ln x 的导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「cos x、sin x、eˣ 与 ln x 的导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「cos x、sin x、eˣ 与 ln x 的导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「cos x、sin x、eˣ 与 ln x 的导数」；用斜线分式代替叠式分式导致歧义"
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
        "title": "乘积法则",
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
    "intuitionDetailed": "把「cos x、sin x、eˣ 与 ln x 的导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「cos x、sin x、eˣ 与 ln x 的导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「cos x、sin x、eˣ 与 ln x 的导数」的定义与两条适用条件？",
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
    "titleZh": "乘积法则",
    "titleEn": "The Product Rule",
    "layer": "ap",
    "summary": "乘积法则 · The Product Rule",
    "learningObjectives": [
      "能陈述「乘积法则」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Product Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「乘积法则」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "乘积法则（The Product Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「乘积法则」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「乘积法则」的工作方程或机制链。"
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
      "掌握 2.8「乘积法则」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「乘积法则」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「乘积法则」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「乘积法则」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「乘积法则」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「乘积法则」；用斜线分式代替叠式分式导致歧义"
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
        "title": "cos x、sin x、eˣ 与 ln x 的导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.9",
        "title": "商法则",
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
    "intuitionDetailed": "把「乘积法则」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「乘积法则」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「乘积法则」的定义与两条适用条件？",
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
    "titleZh": "商法则",
    "titleEn": "The Quotient Rule",
    "layer": "ap",
    "summary": "商法则 · The Quotient Rule",
    "learningObjectives": [
      "能陈述「商法则」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Quotient Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「商法则」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "商法则（The Quotient Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「商法则」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}},\\quad v\\ne 0",
        "note": "商法则：分子顺序不能反。 · Quotient rule: keep the numerator order."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「商法则」的工作方程或机制链。"
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
      "掌握 2.9「商法则」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「商法则」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「商法则」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「商法则」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「商法则」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「商法则」；用斜线分式代替叠式分式导致歧义"
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
        "title": "乘积法则",
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
    "intuitionDetailed": "把「商法则」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「商法则」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「商法则」的定义与两条适用条件？",
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
        "defZh": "由分子导数乘分母减去分子乘分母导数，再除以分母的平方：\\(\\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^{2}}\\)。",
        "defEn": "Obtained from numerator derivative times denominator minus numerator times denominator derivative, then divided by the square of the denominator: \\(\\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^{2}}\\)."
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
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\tan x]=\\sec^{2}x,\\quad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=-\\csc^{2}x,\\quad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sec x]=\\sec x\\tan x,\\quad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\csc x]=-\\csc x\\cot x",
        "note": "tan x、cot x、sec x 与 csc x 的导数。 · Derivatives of tan x, cot x, sec x, and csc x."
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
        "title": "商法则",
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
