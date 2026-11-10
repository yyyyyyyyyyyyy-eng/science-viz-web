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
    "summary": "掌握 \\(\\sin x\\)、\\(\\cos x\\)、\\(e^{x}\\) 与 \\(\\ln x\\) 四条基本导数规则，理解它们来自图像斜率与极限定义，并能与常数倍、和差法则组合求导。 · Master the four basic derivative rules for \\(\\sin x\\), \\(\\cos x\\), \\(e^{x}\\), and \\(\\ln x\\), understand how they come from graph slopes and the limit definition, and combine them with constant-multiple and sum/difference rules.",
    "learningObjectives": [
      "能写出并直接使用 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\) 与 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\)，并说明负号来自余弦图像的斜率。 · State and use \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\) and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\), and explain that the negative sign comes from the slope of the cosine graph.",
      "能写出并直接使用 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x}\\) 与 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\)（\\(x>0\\)），并说明各自的定义域。 · State and use \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x}\\) and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\) for \\(x>0\\), and state their domains.",
      "能说明三角函数的导数公式只在弧度制下成立；若角度以度为单位，会出现因子 \\(\\dfrac{\\pi}{180}\\)。 · Explain that the trigonometric derivative formulas hold only in radians; if the angle is measured in degrees, a factor \\(\\dfrac{\\pi}{180}\\) appears.",
      "能用常数倍与和差法则求 \\(3\\sin x-2\\cos x+5e^{x}-4\\ln x\\) 这类组合的导数。 · Use the constant-multiple and sum/difference rules to differentiate combinations such as \\(3\\sin x-2\\cos x+5e^{x}-4\\ln x\\).",
      "能从极限定义出发，用和角公式与基本极限推导 \\(\\sin x\\)、\\(\\cos x\\)、\\(e^{x}\\) 与 \\(\\ln x\\) 的导数公式。 · Derive the derivative formulas for \\(\\sin x\\), \\(\\cos x\\), \\(e^{x}\\), and \\(\\ln x\\) from the limit definition, using angle-addition formulas and basic limits.",
      "能在给定点求切线斜率，把导数解释为瞬时变化率，并用符号、大小、单位与图像检查结果。 · Find a tangent slope at a given point, interpret the derivative as an instantaneous rate, and check the result with sign, size, units, and a graph."
    ],
    "essentialKnowledge": [
      "FUN-3.A.4：可以用特定法则求 sine、cosine、exponential 与 logarithmic functions 的导数。 · FUN-3.A.4: Specific rules can be used to find the derivatives for sine, cosine, exponential, and logarithmic functions.",
      "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\)。在 \\(x=0\\) 处 \\(\\sin\\) 的切线斜率为 1，在 \\(x=\\dfrac{\\pi}{2}\\) 处为 0，与 \\(\\cos\\) 的函数值一致。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\). At \\(x=0\\) the tangent slope of \\(\\sin\\) is 1, and at \\(x=\\dfrac{\\pi}{2}\\) it is 0, matching the values of \\(\\cos\\).",
      "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\)。负号不能丢：\\(\\cos\\) 在 \\(x=\\dfrac{\\pi}{2}\\) 处下降最陡，斜率为 \\(-1\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\). The negative sign is essential: at \\(x=\\dfrac{\\pi}{2}\\), \\(\\cos\\) is decreasing most steeply with slope \\(-1\\).",
      "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x}\\)：自然指数函数的高度等于斜率，因此它是自己的导数。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x}\\): the natural exponential equals its own slope, so it is its own derivative.",
      "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\)，定义域为 \\(x>0\\)。在 \\(x=1\\) 处斜率为 1，在 \\(x=e\\) 处斜率为 \\(\\dfrac{1}{e}\\)，体现对数增长越来越慢。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\) for \\(x>0\\). The slope is 1 at \\(x=1\\) and \\(\\dfrac{1}{e}\\) at \\(x=e\\), showing that logarithmic growth slows down.",
      "三角导数公式要求 \\(x\\) 用弧度制。若 \\(x\\) 以度为单位，则 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin(x^{\\circ})]=\\dfrac{\\pi}{180}\\cos(x^{\\circ})\\)。 · The trigonometric derivative formulas require radians. If \\(x\\) is in degrees, then \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin(x^{\\circ})]=\\dfrac{\\pi}{180}\\cos(x^{\\circ})\\).",
      "一般指数与对数（\\(a>0\\)，\\(a\\neq1\\)）：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[a^{x}]=a^{x}\\ln a\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\log_{a}x]=\\dfrac{1}{x\\ln a}\\)。 · General exponential and logarithm (\\(a>0\\), \\(a\\neq1\\)): \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[a^{x}]=a^{x}\\ln a\\) and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\log_{a}x]=\\dfrac{1}{x\\ln a}\\).",
      "常数倍与和差法则把四条基本规则扩展到线性组合：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[cf(x)\\pm g(x)]=cf'(x)\\pm g'(x)\\)。 · The constant-multiple and sum/difference rules extend the four basic rules to linear combinations: \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[cf(x)\\pm g(x)]=cf'(x)\\pm g'(x)\\).",
      "\\(\\sin\\) 与 \\(\\cos\\) 的导数循环为 \\(\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\)；\\(e^{x}\\) 的所有阶导数仍是 \\(e^{x}\\)，而 \\(\\ln x\\) 的二阶导数为 \\(-\\dfrac{1}{x^{2}}\\)。 · The derivatives of \\(\\sin\\) and \\(\\cos\\) cycle as \\(\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\); every derivative of \\(e^{x}\\) is \\(e^{x}\\), and the second derivative of \\(\\ln x\\) is \\(-\\dfrac{1}{x^{2}}\\).",
      "导数在某点给出切线斜率与瞬时变化率；AP 题常用「求切线或法线」「解释正负与单位」「比较图像斜率」来考查这四条规则。 · The derivative gives the tangent slope and instantaneous rate at a point; AP questions often ask for a tangent or normal line, an interpretation of sign and units, or a comparison of graph slopes."
    ],
    "definition": "在弧度制下，四个基本函数的导数由以下规则给出：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x}\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\)（\\(x>0\\)）。这些规则在各自的定义域内逐点成立：\\(\\sin\\)、\\(\\cos\\)、\\(e^{x}\\) 对所有实数可导，\\(\\ln x\\) 只在 \\(x>0\\) 可导。它们不是相互独立的记忆项，而是导数极限定义在四类基本函数上的结果。 · In radians, the derivatives of the four basic functions are \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\), \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\), \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x}\\), and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\) for \\(x>0\\). These rules hold pointwise on their domains: \\(\\sin\\), \\(\\cos\\), and \\(e^{x}\\) are differentiable for all real numbers, while \\(\\ln x\\) is differentiable only for \\(x>0\\). They are not independent facts to memorize but consequences of the limit definition of the derivative for four families of basic functions.",
    "intuition": "把 \\(\\sin\\) 的图像在 \\(x=0\\) 附近放大：曲线穿过原点，切线斜率正好是 1，而 \\(\\cos 0=1\\)；在 \\(x=\\dfrac{\\pi}{2}\\) 处 \\(\\sin\\) 到达峰顶、切线水平，而 \\(\\cos\\dfrac{\\pi}{2}=0\\)。整条 \\(\\cos\\) 曲线正好记录 \\(\\sin\\) 每一点的斜率，所以 \\((\\sin x)'=\\cos x\\)。\\(\\cos\\) 在 \\(x=0\\) 处切线水平、在 \\(x=\\dfrac{\\pi}{2}\\) 处下降最陡（斜率 \\(-1\\)），所以 \\((\\cos x)'=-\\sin x\\)。\\(e^{x}\\) 的特别之处是「高度等于斜率」：每一点的增长速率都等于当前函数值，所以它是自己的导数。\\(\\ln x\\) 增长越来越慢：在 \\(x=1\\) 处斜率为 1，在 \\(x=e\\) 处只有 \\(\\dfrac{1}{e}\\)，正好由 \\(\\dfrac{1}{x}\\) 描述。 · Zoom in on the graph of \\(\\sin\\) near \\(x=0\\): the curve passes through the origin with tangent slope exactly 1, and \\(\\cos 0=1\\); at \\(x=\\dfrac{\\pi}{2}\\), \\(\\sin\\) reaches a peak with a horizontal tangent, and \\(\\cos\\dfrac{\\pi}{2}=0\\). The entire cosine curve records the slope of sine at every point, so \\((\\sin x)'=\\cos x\\). Cosine has a horizontal tangent at \\(x=0\\) and decreases most steeply at \\(x=\\dfrac{\\pi}{2}\\) with slope \\(-1\\), so \\((\\cos x)'=-\\sin x\\). The special feature of \\(e^{x}\\) is that its height equals its slope: the growth rate at every point equals the current value, so it is its own derivative. \\(\\ln x\\) grows more and more slowly: its slope is 1 at \\(x=1\\) and only \\(\\dfrac{1}{e}\\) at \\(x=e\\), exactly as \\(\\dfrac{1}{x}\\) describes.",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x",
        "note": "正弦的导数；\\(x\\) 用弧度制。 · Derivative of sine; \\(x\\) is in radians."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x",
        "note": "余弦的导数；负号不能漏。 · Derivative of cosine; do not drop the negative sign."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[e^{x}]=e^{x}",
        "note": "自然指数函数是自己的导数。 · The natural exponential is its own derivative."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\quad(x>0)",
        "note": "自然对数的导数；定义域为 \\(x>0\\)。 · Derivative of the natural logarithm; the domain is \\(x>0\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[a^{x}]=a^{x}\\ln a,\\qquad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\log_{a}x]=\\dfrac{1}{x\\ln a}",
        "note": "一般指数与对数（\\(a>0\\)，\\(a\\neq1\\)）；对数还要求 \\(x>0\\)。 · General exponential and logarithm (\\(a>0\\), \\(a\\neq1\\)); the logarithm also requires \\(x>0\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[cf(x)\\pm g(x)]=cf'(x)\\pm g'(x)",
        "note": "常数倍与和差法则：可以逐项求导。 · Constant-multiple and sum/difference rules: differentiate term by term."
      },
      {
        "latex": "\\lim_{h\\to0}\\dfrac{\\sin h}{h}=1,\\qquad \\lim_{h\\to0}\\dfrac{\\cos h-1}{h}=0",
        "note": "推导正弦、余弦导数的两个基本极限（弧度制）。 · Two basic limits for deriving the sine and cosine derivatives (radians)."
      },
      {
        "latex": "\\lim_{h\\to0}\\dfrac{e^{h}-1}{h}=1,\\qquad \\lim_{u\\to0}\\dfrac{\\ln(1+u)}{u}=1",
        "note": "推导 \\(e^{x}\\) 与 \\(\\ln x\\) 导数的基本极限。 · Basic limits for deriving the derivatives of \\(e^{x}\\) and \\(\\ln x\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "正弦的和角公式 · Angle-addition for sine",
        "to": "正弦的导数 · Derivative of sine",
        "note": "\\(\\sin(x+h)=\\sin x\\cos h+\\cos x\\sin h\\)，所以差商为 \\(\\sin x\\cdot\\dfrac{\\cos h-1}{h}+\\cos x\\cdot\\dfrac{\\sin h}{h}\\)；令 \\(h\\to0\\)，用两个基本极限得 \\(\\cos x\\)。 · \\(\\sin(x+h)=\\sin x\\cos h+\\cos x\\sin h\\), so the difference quotient is \\(\\sin x\\cdot\\dfrac{\\cos h-1}{h}+\\cos x\\cdot\\dfrac{\\sin h}{h}\\); letting \\(h\\to0\\) and using the two basic limits gives \\(\\cos x\\)."
      },
      {
        "from": "余弦的和角公式 · Angle-addition for cosine",
        "to": "余弦的导数 · Derivative of cosine",
        "note": "\\(\\cos(x+h)=\\cos x\\cos h-\\sin x\\sin h\\)，差商为 \\(\\cos x\\cdot\\dfrac{\\cos h-1}{h}-\\sin x\\cdot\\dfrac{\\sin h}{h}\\)，极限为 \\(-\\sin x\\)。 · \\(\\cos(x+h)=\\cos x\\cos h-\\sin x\\sin h\\), so the difference quotient is \\(\\cos x\\cdot\\dfrac{\\cos h-1}{h}-\\sin x\\cdot\\dfrac{\\sin h}{h}\\), whose limit is \\(-\\sin x\\)."
      },
      {
        "from": "自然指数的定义 · Definition of the natural exponential",
        "to": "\\(e^{x}\\) 的导数 · Derivative of \\(e^{x}\\)",
        "note": "\\(\\dfrac{e^{x+h}-e^{x}}{h}=e^{x}\\cdot\\dfrac{e^{h}-1}{h}\\)；由 \\(e\\) 的定义，第二个因子趋于 1，所以导数为 \\(e^{x}\\)。 · \\(\\dfrac{e^{x+h}-e^{x}}{h}=e^{x}\\cdot\\dfrac{e^{h}-1}{h}\\); by the definition of \\(e\\), the second factor tends to 1, so the derivative is \\(e^{x}\\)."
      },
      {
        "from": "对数的性质 · Properties of logarithms",
        "to": "\\(\\ln x\\) 的导数 · Derivative of \\(\\ln x\\)",
        "note": "\\(\\dfrac{\\ln(x+h)-\\ln x}{h}=\\dfrac{1}{h}\\ln\\left(1+\\dfrac{h}{x}\\right)\\)。令 \\(u=\\dfrac{h}{x}\\)，得 \\(\\dfrac{1}{x}\\cdot\\dfrac{\\ln(1+u)}{u}\\to\\dfrac{1}{x}\\)，因为 \\(\\lim_{u\\to0}(1+u)^{1/u}=e\\)。 · \\(\\dfrac{\\ln(x+h)-\\ln x}{h}=\\dfrac{1}{h}\\ln\\left(1+\\dfrac{h}{x}\\right)\\). Let \\(u=\\dfrac{h}{x}\\); then \\(\\dfrac{1}{x}\\cdot\\dfrac{\\ln(1+u)}{u}\\to\\dfrac{1}{x}\\), because \\(\\lim_{u\\to0}(1+u)^{1/u}=e\\)."
      },
      {
        "from": "指数函数的极限 · Limit of an exponential",
        "to": "一般指数与对数 · General exponential and logarithm",
        "note": "\\(\\dfrac{a^{h}-1}{h}\\to\\ln a\\)，所以 \\(\\dfrac{a^{x+h}-a^{x}}{h}=a^{x}\\cdot\\dfrac{a^{h}-1}{h}\\to a^{x}\\ln a\\)；又 \\(\\log_{a}x=\\dfrac{\\ln x}{\\ln a}\\)，故其导数为 \\(\\dfrac{1}{x\\ln a}\\)。 · \\(\\dfrac{a^{h}-1}{h}\\to\\ln a\\), so \\(\\dfrac{a^{x+h}-a^{x}}{h}=a^{x}\\cdot\\dfrac{a^{h}-1}{h}\\to a^{x}\\ln a\\); also \\(\\log_{a}x=\\dfrac{\\ln x}{\\ln a}\\), so its derivative is \\(\\dfrac{1}{x\\ln a}\\)."
      },
      {
        "from": "角度制与弧度制 · Degrees versus radians",
        "to": "三角导数公式的适用范围 · Scope of the trigonometric derivative formulas",
        "note": "\\(x^{\\circ}=\\dfrac{\\pi}{180}x\\) 弧度；对 \\(\\sin(x^{\\circ})\\) 用极限定义会多出因子 \\(\\dfrac{\\pi}{180}\\)，所以微积分中一律使用弧度。 · \\(x^{\\circ}=\\dfrac{\\pi}{180}x\\) radians; applying the limit definition to \\(\\sin(x^{\\circ})\\) produces an extra factor \\(\\dfrac{\\pi}{180}\\), so calculus always uses radians."
      },
      {
        "from": "导数的线性性 · Linearity of the derivative",
        "to": "线性组合的导数 · Derivative of a linear combination",
        "note": "导数是极限，极限保持加法与常数倍，所以可以逐项求导；但它不保持乘积，乘积需要 2.8 的乘积法则。 · The derivative is a limit, and limits preserve sums and constant multiples, so we can differentiate term by term; the derivative does not preserve products, which require the product rule in 2.8."
      }
    ],
    "conditions": [
      "三角函数求导必须使用弧度制；计算器或 CAS 要设为 radian 模式。 · Trigonometric differentiation requires radians; set calculators or CAS to radian mode.",
      "\\(\\ln x\\) 只在 \\(x>0\\) 有定义，因此 \\(\\dfrac{1}{x}\\) 也只在 \\(x>0\\) 作为 \\(\\ln x\\) 的导数使用。 · \\(\\ln x\\) is defined only for \\(x>0\\), so \\(\\dfrac{1}{x}\\) is used as its derivative only for \\(x>0\\).",
      "\\(\\sin\\)、\\(\\cos\\)、\\(e^{x}\\) 对所有实数可导。 · \\(\\sin\\), \\(\\cos\\), and \\(e^{x}\\) are differentiable for all real numbers.",
      "对 \\(a^{x}\\) 与 \\(\\log_{a}x\\)，要求 \\(a>0\\) 且 \\(a\\neq1\\)；\\(\\log_{a}x\\) 还要求 \\(x>0\\)。 · For \\(a^{x}\\) and \\(\\log_{a}x\\), require \\(a>0\\) and \\(a\\neq1\\); \\(\\log_{a}x\\) also requires \\(x>0\\).",
      "和差、常数倍法则要求每一项在讨论点可导；组合的导数定义域是各项定义域的交集。 · The sum/difference and constant-multiple rules require each term to be differentiable at the point; the domain of the combination is the intersection of the domains.",
      "求切线或法线时，先确认点在该函数图像上（或按要求取点），再用导数值作斜率。 · For a tangent or normal line, first confirm the point is on the graph (or use the specified point), then use the derivative value as the slope.",
      "在特殊角处使用精确值（如 \\(\\sin\\dfrac{\\pi}{6}=\\dfrac12\\)），不要提前四舍五入。 · Use exact values at special angles (such as \\(\\sin\\dfrac{\\pi}{6}=\\dfrac12\\)) and do not round prematurely.",
      "导数公式给出的是瞬时变化率；若用有限差商近似，需说明步长与误差。 · The formulas give instantaneous rates; if a finite difference is used, state the step size and error."
    ],
    "keyPoints": [
      "四条基本公式：\\((\\sin x)'=\\cos x\\)，\\((\\cos x)'=-\\sin x\\)，\\((e^{x})'=e^{x}\\)，\\((\\ln x)'=\\dfrac{1}{x}\\)。 · Four basic formulas: \\((\\sin x)'=\\cos x\\), \\((\\cos x)'=-\\sin x\\), \\((e^{x})'=e^{x}\\), and \\((\\ln x)'=\\dfrac{1}{x}\\).",
      "余弦的导数是负正弦；负号是最常见的失分点。 · The derivative of cosine is negative sine; the sign is the most common lost point.",
      "\\(e^{x}\\) 是（在常数倍意义下）唯一等于自身导数的函数；不要把幂法则用在 \\(e^{x}\\) 上。 · \\(e^{x}\\) is, up to constant multiples, the only function equal to its own derivative; do not apply the power rule to \\(e^{x}\\).",
      "\\(\\ln x\\) 的导数是 \\(\\dfrac{1}{x}\\)，不是 \\(\\ln x\\)；定义域 \\(x>0\\)。 · The derivative of \\(\\ln x\\) is \\(\\dfrac{1}{x}\\), not \\(\\ln x\\); the domain is \\(x>0\\).",
      "三角公式只在弧度制下成立；角度制会产生 \\(\\dfrac{\\pi}{180}\\) 因子。 · The trigonometric formulas hold only in radians; degrees produce a factor \\(\\dfrac{\\pi}{180}\\).",
      "用和差与常数倍逐项求导；乘积与商分别用 2.8、2.9 的法则。 · Differentiate term by term with the sum/difference and constant-multiple rules; use the product and quotient rules from 2.8 and 2.9 for products and quotients.",
      "图像检查：\\((\\sin x)'\\) 在 \\(x=0\\) 应为 1，\\((\\cos x)'\\) 在 \\(x=\\dfrac{\\pi}{2}\\) 应为 \\(-1\\)。 · Graph check: \\((\\sin x)'\\) should be 1 at \\(x=0\\), and \\((\\cos x)'\\) should be \\(-1\\) at \\(x=\\dfrac{\\pi}{2}\\).",
      "AP 作答要写公式、代点、化简，并在切线或变化率题中给出单位与解释。 · AP responses should state the formula, substitute the point, simplify, and give units and an interpretation in tangent or rate problems."
    ],
    "misconceptions": [
      "\\((\\cos x)'=\\sin x\\)——漏掉负号；正确结果是 \\(-\\sin x\\)。 · \\((\\cos x)'=\\sin x\\) is wrong because it drops the negative sign; the correct result is \\(-\\sin x\\).",
      "\\((e^{x})'=xe^{x-1}\\)——把幂法则误用到指数函数；\\(e^{x}\\) 的导数仍是 \\(e^{x}\\)。 · \\((e^{x})'=xe^{x-1}\\) wrongly applies the power rule to an exponential function; the derivative of \\(e^{x}\\) is still \\(e^{x}\\).",
      "\\((\\ln x)'=\\ln x\\) 或 \\(\\dfrac{1}{\\ln x}\\)——正确结果是 \\(\\dfrac{1}{x}\\)。 · \\((\\ln x)'=\\ln x\\) or \\(\\dfrac{1}{\\ln x}\\) is wrong; the correct result is \\(\\dfrac{1}{x}\\).",
      "把 \\(x^{e}\\) 与 \\(e^{x}\\) 混为一谈：前者用幂法则，后者用指数法则。 · Confusing \\(x^{e}\\) with \\(e^{x}\\): the former uses the power rule, the latter the exponential rule.",
      "在角度制下直接套用 \\((\\sin x)'=\\cos x\\)——会漏掉 \\(\\dfrac{\\pi}{180}\\)。 · Applying \\((\\sin x)'=\\cos x\\) in degree mode drops the factor \\(\\dfrac{\\pi}{180}\\).",
      "在 \\(x\\le0\\) 处使用 \\((\\ln x)'=\\dfrac{1}{x}\\)——\\(\\ln x\\) 在那里没有定义。 · Using \\((\\ln x)'=\\dfrac{1}{x}\\) for \\(x\\le0\\) is invalid because \\(\\ln x\\) is not defined there.",
      "把导数的和法则误当成积法则：\\((fg)'\\neq f'g'\\)。 · Mistaking the sum rule for a product rule: \\((fg)'\\neq f'g'\\).",
      "\\((a^{x})'=a^{x}\\)——只对 \\(a=e\\) 成立；一般 \\(a\\) 需乘 \\(\\ln a\\)。 · \\((a^{x})'=a^{x}\\) holds only for \\(a=e\\); a general base requires the factor \\(\\ln a\\)."
    ],
    "examples": [
      {
        "title": "例 1 · 四项基本规则组合 · Example 1: A combination of all four rules",
        "prompt": "求 \\(f(x)=3\\sin x-2\\cos x+5e^{x}-4\\ln x\\) 的导数，并写出定义域。 · Differentiate \\(f(x)=3\\sin x-2\\cos x+5e^{x}-4\\ln x\\) and state the domain.",
        "steps": [
          "逐项使用常数倍与和差法则。 · Differentiate term by term using the constant-multiple and sum/difference rules.",
          "\\((3\\sin x)'=3\\cos x\\)，\\((-2\\cos x)'=2\\sin x\\)。 · \\((3\\sin x)'=3\\cos x\\) and \\((-2\\cos x)'=2\\sin x\\).",
          "\\((5e^{x})'=5e^{x}\\)，\\((-4\\ln x)'=-\\dfrac{4}{x}\\)。 · \\((5e^{x})'=5e^{x}\\) and \\((-4\\ln x)'=-\\dfrac{4}{x}\\).",
          "合并：\\(f'(x)=3\\cos x+2\\sin x+5e^{x}-\\dfrac{4}{x}\\)。 · Combine: \\(f'(x)=3\\cos x+2\\sin x+5e^{x}-\\dfrac{4}{x}\\).",
          "因为含 \\(\\ln x\\)，定义域为 \\(x>0\\)。 · Because of \\(\\ln x\\), the domain is \\(x>0\\)."
        ],
        "solution": "\\(f'(x)=3\\cos x+2\\sin x+5e^{x}-\\dfrac{4}{x}\\)，定义域 \\(x>0\\)。 · \\(f'(x)=3\\cos x+2\\sin x+5e^{x}-\\dfrac{4}{x}\\), domain \\(x>0\\).",
        "solutionLatex": "f'(x)=3\\cos x+2\\sin x+5e^{x}-\\dfrac{4}{x},\\qquad x>0"
      },
      {
        "title": "例 2 · 在 \\(x=0\\) 处的切线 · Example 2: Tangent line at \\(x=0\\)",
        "prompt": "求曲线 \\(y=e^{x}+\\sin x\\) 在 \\(x=0\\) 处的切线方程。 · Find the tangent line to \\(y=e^{x}+\\sin x\\) at \\(x=0\\).",
        "steps": [
          "点：\\(x=0\\) 时 \\(y=e^{0}+\\sin0=1+0=1\\)，切点为 \\((0,1)\\)。 · Point: at \\(x=0\\), \\(y=e^{0}+\\sin0=1+0=1\\), so the point of tangency is \\((0,1)\\).",
          "斜率：\\(y'=e^{x}+\\cos x\\)，所以 \\(y'(0)=e^{0}+\\cos0=1+1=2\\)。 · Slope: \\(y'=e^{x}+\\cos x\\), so \\(y'(0)=e^{0}+\\cos0=1+1=2\\).",
          "点斜式：\\(y-1=2(x-0)\\)，即 \\(y=2x+1\\)。 · Point-slope form: \\(y-1=2(x-0)\\), so \\(y=2x+1\\).",
          "检查：在 \\(x=0\\) 右侧函数上升，斜率 2 为正；\\(e^{x}\\) 与 \\(\\sin x\\) 的斜率都为 1，相加得 2。 · Check: the function rises to the right of \\(x=0\\), and the slope 2 is positive; the slopes of \\(e^{x}\\) and \\(\\sin x\\) are both 1, and their sum is 2."
        ],
        "solution": "切线为 y=2x+1。 · The tangent line is y=2x+1.",
        "solutionLatex": "y=1+2x"
      },
      {
        "title": "例 3 · 用极限定义推导正弦导数 · Example 3: Deriving the sine derivative from the limit definition",
        "prompt": "用导数定义证明 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\)，并指出哪里用到了弧度制。 · Use the definition of the derivative to prove \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\), and identify where radians are used.",
        "steps": [
          "写出差商：\\(\\dfrac{\\sin(x+h)-\\sin x}{h}\\)。 · Write the difference quotient: \\(\\dfrac{\\sin(x+h)-\\sin x}{h}\\).",
          "用和角公式：\\(\\sin(x+h)=\\sin x\\cos h+\\cos x\\sin h\\)。 · Use the angle-addition formula: \\(\\sin(x+h)=\\sin x\\cos h+\\cos x\\sin h\\).",
          "整理：\\(\\sin x\\cdot\\dfrac{\\cos h-1}{h}+\\cos x\\cdot\\dfrac{\\sin h}{h}\\)。 · Rearrange: \\(\\sin x\\cdot\\dfrac{\\cos h-1}{h}+\\cos x\\cdot\\dfrac{\\sin h}{h}\\).",
          "令 \\(h\\to0\\)，用 \\(\\lim_{h\\to0}\\dfrac{\\sin h}{h}=1\\) 与 \\(\\lim_{h\\to0}\\dfrac{\\cos h-1}{h}=0\\)，得 \\(\\sin x\\cdot0+\\cos x\\cdot1=\\cos x\\)。 · Let \\(h\\to0\\) and use \\(\\lim_{h\\to0}\\dfrac{\\sin h}{h}=1\\) and \\(\\lim_{h\\to0}\\dfrac{\\cos h-1}{h}=0\\) to get \\(\\sin x\\cdot0+\\cos x\\cdot1=\\cos x\\).",
          "这两个极限只在 \\(h\\) 以弧度计时成立；若用角度制，\\(\\dfrac{\\sin h}{h}\\) 的极限会变成 \\(\\dfrac{\\pi}{180}\\)。 · These limits hold only when \\(h\\) is measured in radians; in degrees, the limit of \\(\\dfrac{\\sin h}{h}\\) becomes \\(\\dfrac{\\pi}{180}\\)."
        ],
        "solution": "推导得 \\(\\cos x\\)；关键极限 \\(\\lim_{h\\to0}\\dfrac{\\sin h}{h}=1\\) 与 \\(\\lim_{h\\to0}\\dfrac{\\cos h-1}{h}=0\\) 要求弧度制。 · The derivation gives \\(\\cos x\\); the key limits \\(\\lim_{h\\to0}\\dfrac{\\sin h}{h}=1\\) and \\(\\lim_{h\\to0}\\dfrac{\\cos h-1}{h}=0\\) require radians.",
        "solutionLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\sin x\\cdot0+\\cos x\\cdot1=\\cos x"
      },
      {
        "title": "例 4 · 法线与精确值 · Example 4: Normal line with exact values",
        "prompt": "曲线 \\(y=\\ln x\\) 在 \\(x=2\\) 处的切线斜率为 \\(\\dfrac12\\)。求该点处的法线方程，并用精确值表示。 · The tangent slope of \\(y=\\ln x\\) at \\(x=2\\) is \\(\\dfrac12\\). Find the normal line at that point, using exact values.",
        "steps": [
          "切点：\\((2,\\ln2)\\)。 · Point of tangency: \\((2,\\ln2)\\).",
          "切线斜率 \\(m=\\dfrac{1}{2}\\)；法线斜率 \\(m_{\\perp}=-\\dfrac{1}{m}=-2\\)。 · Tangent slope \\(m=\\dfrac{1}{2}\\); normal slope \\(m_{\\perp}=-\\dfrac{1}{m}=-2\\).",
          "点斜式：\\(y-\\ln2=-2(x-2)\\)。 · Point-slope form: \\(y-\\ln2=-2(x-2)\\).",
          "化简：\\(y=-2x+4+\\ln2\\)。 · Simplify: \\(y=-2x+4+\\ln2\\).",
          "检查：\\(\\ln x\\) 递增，切线斜率为正；法线斜率为负且更陡。 · Check: \\(\\ln x\\) is increasing, so the tangent slope is positive; the normal slope is negative and steeper."
        ],
        "solution": "法线：y=-2x+4+ln2。 · The normal line is y=-2x+4+ln2.",
        "solutionLatex": "y-\\ln2=-2(x-2)\\quad\\Longrightarrow\\quad y=-2x+4+\\ln2"
      },
      {
        "title": "例 5 · 由函数值确定系数 · Example 5: Determining coefficients from values",
        "prompt": "设 \\(f(x)=a\\sin x+b\\cos x\\)。已知 \\(f(0)=2\\)、\\(f'(0)=3\\)，求 \\(a,b\\)，并求 \\(f\\) 在 \\([0,2\\pi]\\) 上所有水平切线的横坐标。 · Let \\(f(x)=a\\sin x+b\\cos x\\). Given \\(f(0)=2\\) and \\(f'(0)=3\\), find \\(a,b\\) and all \\(x\\) in \\([0,2\\pi]\\) where \\(f\\) has a horizontal tangent.",
        "steps": [
          "\\(f(0)=a\\sin0+b\\cos0=b=2\\)。 · \\(f(0)=a\\sin0+b\\cos0=b=2\\).",
          "\\(f'(x)=a\\cos x-b\\sin x\\)，所以 \\(f'(0)=a=3\\)。 · \\(f'(x)=a\\cos x-b\\sin x\\), so \\(f'(0)=a=3\\).",
          "因此 \\(f(x)=3\\sin x+2\\cos x\\)，\\(f'(x)=3\\cos x-2\\sin x\\)。 · Thus \\(f(x)=3\\sin x+2\\cos x\\) and \\(f'(x)=3\\cos x-2\\sin x\\).",
          "水平切线要求 \\(f'(x)=0\\)：\\(3\\cos x=2\\sin x\\)，即 \\(\\tan x=\\dfrac{3}{2}\\)（\\(\\cos x\\neq0\\)）。 · A horizontal tangent requires \\(f'(x)=0\\): \\(3\\cos x=2\\sin x\\), so \\(\\tan x=\\dfrac{3}{2}\\) (with \\(\\cos x\\neq0\\)).",
          "在 \\([0,2\\pi]\\) 内，解为 \\(x=\\arctan\\dfrac{3}{2}\\) 与 \\(x=\\arctan\\dfrac{3}{2}+\\pi\\)。 · In \\([0,2\\pi]\\), the solutions are \\(x=\\arctan\\dfrac{3}{2}\\) and \\(x=\\arctan\\dfrac{3}{2}+\\pi\\)."
        ],
        "solution": "\\(a=3\\)，\\(b=2\\)；\\(x=\\arctan\\dfrac{3}{2}\\) 与 \\(x=\\arctan\\dfrac{3}{2}+\\pi\\)。 · \\(a=3\\), \\(b=2\\); \\(x=\\arctan\\dfrac{3}{2}\\) and \\(x=\\arctan\\dfrac{3}{2}+\\pi\\).",
        "solutionLatex": "a=3,\\quad b=2;\\qquad x=\\arctan\\dfrac{3}{2},\\ \\arctan\\dfrac{3}{2}+\\pi"
      }
    ],
    "examTips": [
      "先写四条基本公式，再逐项求导；不要在脑中跳步。 · Write the four basic formulas first, then differentiate term by term; do not skip steps mentally.",
      "看到 \\(\\cos\\) 就检查负号；看到 \\(e^{x}\\) 不要用幂法则。 · Check the negative sign whenever cosine appears, and never apply the power rule to \\(e^{x}\\).",
      "确认 \\(\\ln x\\) 的定义域；答案中保留 \\(x>0\\)。 · Confirm the domain of \\(\\ln x\\) and keep \\(x>0\\) in the answer.",
      "三角函数题先确认弧度模式。 · For trigonometric problems, confirm radian mode first.",
      "切线题：先算点，再算斜率，最后写点斜式并化简。 · Tangent-line problems: compute the point, then the slope, then write point-slope form and simplify.",
      "用特殊角的精确值，最后才按需近似。 · Use exact values at special angles and approximate only at the end if needed.",
      "AP 解释题要说明导数的符号、大小和单位；图像题要比较斜率。 · In AP explanation questions, state the sign, size, and units of the derivative; in graph questions, compare slopes.",
      "组合函数只可用和差与常数倍；乘积与商留到 2.8、2.9。 · For combinations, use only the sum/difference and constant-multiple rules; leave products and quotients to 2.8 and 2.9."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.5",
        "title": "幂法则 · The Power Rule",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.6",
        "title": "常数倍与和差 · Constant Multiples and Sums and Differences",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.8",
        "title": "乘积法则 · The Product Rule",
        "relation": "相关 · related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.9",
        "title": "商法则 · The Quotient Rule",
        "relation": "相关 · related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.10",
        "title": "三角函数导数 · Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.1",
        "title": "链式法则 · The Chain Rule",
        "relation": "后续 · follow-up"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：2.5 幂法则与 2.6 线性法则提供逐项求导的工具；2.7 增加四类基本函数的导数。 · Upstream: the power rule in 2.5 and the linearity rules in 2.6 provide tools for term-by-term differentiation; 2.7 adds the derivatives of four basic families.",
      "下游：2.8 与 2.9 把基本规则组合成乘积、商的求导；2.10 用 \\(\\sin\\)、\\(\\cos\\) 的导数推出 tan、cot、sec、csc 的导数。 · Downstream: 2.8 and 2.9 combine basic rules into product and quotient differentiation; 2.10 uses the sine and cosine derivatives to derive the derivatives of tan, cot, sec, and csc.",
      "后续：3.1 链式法则把 \\(\\sin(2x)\\)、\\(e^{3x}\\)、\\(\\ln(5x)\\) 化为基本规则与内层导数的乘积。 · Later: the chain rule in 3.1 reduces \\(\\sin(2x)\\), \\(e^{3x}\\), and \\(\\ln(5x)\\) to basic rules multiplied by the inner derivative.",
      "应用：4.1 把导数解释为带单位的变化率；切线、法线题把导数值转化为几何斜率。 · Applications: 4.1 interprets the derivative as a rate with units; tangent and normal problems turn derivative values into geometric slopes.",
      "图像：\\(\\cos\\) 是 \\(\\sin\\) 的斜率曲线；\\(e^{x}\\) 的斜率等于高度；\\(\\ln x\\) 的斜率随 \\(x\\) 增大而减小。 · Graphs: \\(\\cos\\) is the slope curve of \\(\\sin\\); the slope of \\(e^{x}\\) equals its height; the slope of \\(\\ln x\\) decreases as \\(x\\) increases."
    ],
    "intuitionDetailed": "先抓住四个「斜率画像」。\\(\\sin\\) 在原点附近几乎就是直线 \\(y=x\\)，所以原点斜率为 1；到峰顶切线变平，斜率降为 0，这条斜率曲线正是 \\(\\cos\\)。\\(\\cos\\) 从峰顶出发，切线一开始水平，随后向下倾斜，在 \\(x=\\dfrac{\\pi}{2}\\) 处达到最陡的 \\(-1\\)，所以它的导数是 \\(-\\sin\\)。\\(e^{x}\\) 每一点的切线斜率都等于该点的高度，这种「斜率=函数值」的性质使它成为微分方程 \\(y'=y\\) 的基本解。\\(\\ln x\\) 是 \\(e^{x}\\) 的反函数：\\(e^{x}\\) 增长越来越快，反过来 \\(\\ln x\\) 增长越来越慢，斜率 \\(\\dfrac{1}{x}\\) 正好随 \\(x\\) 增大而减小。把这四个画像与极限推导对照，就能在忘记公式时快速重建。 · First build four slope pictures. Near the origin, \\(\\sin\\) is almost the line \\(y=x\\), so its slope at the origin is 1; at the peak the tangent flattens to slope 0, and this slope curve is exactly \\(\\cos\\). Cosine starts at a peak with a horizontal tangent, then tilts downward and reaches its steepest slope \\(-1\\) at \\(x=\\dfrac{\\pi}{2}\\), so its derivative is \\(-\\sin\\). Every tangent slope of \\(e^{x}\\) equals its height, the property that makes it the basic solution of \\(y'=y\\). \\(\\ln x\\) is the inverse of \\(e^{x}\\): as \\(e^{x}\\) grows faster and faster, \\(\\ln x\\) grows more and more slowly, with slope \\(\\dfrac{1}{x}\\) decreasing as \\(x\\) increases. Compare these pictures with the limit derivations, and you can rebuild the formulas if you forget them.",
    "development": [
      "回顾导数定义与弧度制：确认差商、极限以及 \\(180^{\\circ}=\\pi\\) 弧度。 · Review the derivative definition and radians: confirm the difference quotient, the limit, and \\(180^{\\circ}=\\pi\\) radians.",
      "用和角公式与两个基本极限推导 \\(\\sin\\)、\\(\\cos\\) 的导数。 · Derive the derivatives of \\(\\sin\\) and \\(\\cos\\) with angle-addition formulas and the two basic limits.",
      "用 \\(e\\) 的定义推导 \\(e^{x}\\) 的导数。 · Derive the derivative of \\(e^{x}\\) from the definition of \\(e\\).",
      "用对数性质与 \\(e\\) 的极限推导 \\(\\ln x\\) 的导数。 · Derive the derivative of \\(\\ln x\\) from logarithm properties and the limit defining \\(e\\).",
      "整理公式表，并用常数倍、和差法则练习线性组合。 · Organize the formula table and practice linear combinations with the constant-multiple and sum/difference rules.",
      "把导数用于切线、法线与带单位的变化率，检查符号、大小和单位。 · Apply derivatives to tangent lines, normal lines, and rates with units, checking sign, size, and units.",
      "扩展到一般指数、对数与高阶导数，观察 \\(\\sin\\)、\\(\\cos\\) 的导数循环。 · Extend to general exponentials, logarithms, and higher derivatives, observing the derivative cycle of \\(\\sin\\) and \\(\\cos\\)."
    ],
    "checks": [
      "不看书，写出四条基本导数公式，并说明每条的定义域。 · Without notes, write the four basic derivative formulas and state each domain.",
      "为什么 \\((\\cos x)'=-\\sin x\\) 而不是 \\(\\sin x\\)？用 \\(x=\\dfrac{\\pi}{2}\\) 处的斜率解释。 · Why is \\((\\cos x)'=-\\sin x\\) rather than \\(\\sin x\\)? Explain using the slope at \\(x=\\dfrac{\\pi}{2}\\).",
      "若 \\(x\\) 用角度制，\\((\\sin x)'\\) 会多出什么因子？为什么？ · If \\(x\\) is measured in degrees, what factor appears in \\((\\sin x)'\\), and why?",
      "求 \\(f(x)=2\\sin x+3e^{x}-\\ln x\\) 的导数。 · Differentiate \\(f(x)=2\\sin x+3e^{x}-\\ln x\\).",
      "求 \\(y=e^{x}+\\cos x\\) 在 \\(x=0\\) 处的切线方程。 · Find the tangent line to \\(y=e^{x}+\\cos x\\) at \\(x=0\\).",
      "解释为什么 \\(e^{x}\\) 是自己的导数，而 \\(x^{e}\\) 不是。 · Explain why \\(e^{x}\\) is its own derivative but \\(x^{e}\\) is not.",
      "写出 \\(\\sin x\\) 的前四阶导数，并说明循环规律。 · Write the first four derivatives of \\(\\sin x\\) and describe the cycle.",
      "已知 \\(f(x)=\\ln x\\)，求 \\(f''(x)\\) 并说明 \\(f'\\) 的增减性。 · Given \\(f(x)=\\ln x\\), find \\(f''(x)\\) and describe whether \\(f'\\) is increasing or decreasing."
    ],
    "vocabulary": [
      {
        "termZh": "正弦的导数",
        "termEn": "derivative of sine",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\)，在弧度制下成立。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin x]=\\cos x\\), valid in radians."
      },
      {
        "termZh": "余弦的导数",
        "termEn": "derivative of cosine",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\)，负号不能漏。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cos x]=-\\sin x\\); the negative sign is essential."
      },
      {
        "termZh": "自然指数函数",
        "termEn": "natural exponential function",
        "defZh": "\\(e^{x}\\)，其导数仍为 \\(e^{x}\\)。",
        "defEn": "\\(e^{x}\\), whose derivative is again \\(e^{x}\\)."
      },
      {
        "termZh": "自然对数函数",
        "termEn": "natural logarithm function",
        "defZh": "\\(\\ln x\\)，定义域 \\(x>0\\)，导数为 \\(\\dfrac{1}{x}\\)。",
        "defEn": "\\(\\ln x\\), defined for \\(x>0\\), with derivative \\(\\dfrac{1}{x}\\)."
      },
      {
        "termZh": "弧度制",
        "termEn": "radian measure",
        "defZh": "以 \\(2\\pi\\) 为一整圈的角度制；三角函数的导数公式只在此制下成立。",
        "defEn": "Angle measure with a full turn equal to \\(2\\pi\\); the trigonometric derivative formulas hold only in this measure."
      },
      {
        "termZh": "一般指数函数",
        "termEn": "general exponential function",
        "defZh": "\\(a^{x}\\)（\\(a>0\\)，\\(a\\neq1\\)），导数为 \\(a^{x}\\ln a\\)。",
        "defEn": "\\(a^{x}\\) for \\(a>0\\), \\(a\\neq1\\), with derivative \\(a^{x}\\ln a\\)."
      },
      {
        "termZh": "一般对数函数",
        "termEn": "general logarithmic function",
        "defZh": "\\(\\log_{a}x\\)（\\(a>0\\)，\\(a\\neq1\\)），导数为 \\(\\dfrac{1}{x\\ln a}\\)。",
        "defEn": "\\(\\log_{a}x\\) for \\(a>0\\), \\(a\\neq1\\), with derivative \\(\\dfrac{1}{x\\ln a}\\)."
      },
      {
        "termZh": "导数循环",
        "termEn": "derivative cycle",
        "defZh": "\\(\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\) 的四步循环。",
        "defEn": "The four-step cycle \\(\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\)."
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
    "summary": "先利用商的关系或倒数关系把 \\(\\tan x\\)、\\(\\cot x\\)、\\(\\sec x\\)、\\(\\csc x\\) 改写成 \\(\\sin x\\) 与 \\(\\cos x\\) 的表达式，再用商法则或倒数法则求导，并用三角恒等式化简。 · Rewrite \\(\\tan x\\), \\(\\cot x\\), \\(\\sec x\\), and \\(\\csc x\\) as quotients or reciprocals of \\(\\sin x\\) and \\(\\cos x\\), differentiate with the quotient or reciprocal rule, and simplify with trigonometric identities.",
    "learningObjectives": [
      "能写出 \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\)、\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\)、\\(\\sec x=\\dfrac{1}{\\cos x}\\)、\\(\\csc x=\\dfrac{1}{\\sin x}\\)，并说明各自的定义域。 · Write the four quotient or reciprocal identities and state their domains.",
      "能用商法则从 \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\) 与 \\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\) 推导出 \\(\\sec^{2}x\\) 与 \\(-\\csc^{2}x\\)。 · Use the quotient rule on the sine and cosine quotients to derive \\(\\sec^{2}x\\) and \\(-\\csc^{2}x\\).",
      "能用倒数法则或商法则推导 \\((\\sec x)'=\\sec x\\tan x\\) 与 \\((\\csc x)'=-\\csc x\\cot x\\)。 · Use the reciprocal or quotient rule to derive \\((\\sec x)'=\\sec x\\tan x\\) and \\((\\csc x)'=-\\csc x\\cot x\\).",
      "能用 \\(\\sin^{2}x+\\cos^{2}x=1\\) 及其变形 \\(1+\\tan^{2}x=\\sec^{2}x\\)、\\(1+\\cot^{2}x=\\csc^{2}x\\) 化简导数。 · Simplify derivatives with \\(\\sin^{2}x+\\cos^{2}x=1\\) and its forms \\(1+\\tan^{2}x=\\sec^{2}x\\) and \\(1+\\cot^{2}x=\\csc^{2}x\\).",
      "能在特殊角处求导数值，求切线方程，并判断水平或竖直切线。 · Evaluate derivatives at special angles, find tangent lines, and identify horizontal or vertical tangents.",
      "能指出各函数的定义域限制，并说明在渐近线处导数不存在。 · State the domain restrictions and explain that derivatives do not exist at the asymptotes.",
      "能把三角导数与乘积法则、商法则及其他基本导数组合使用。 · Combine trigonometric derivatives with the product rule, quotient rule, and other basic derivatives.",
      "能检查公式的符号与结构，避免把 \\(\\tan\\) 与 \\(\\sec\\) 的导数混淆。 · Check the signs and structure of the formulas and avoid confusing the derivatives of \\(\\tan\\) and \\(\\sec\\)."
    ],
    "essentialKnowledge": [
      "FUN-3.B.3：利用恒等式把 tangent、cotangent、secant 与 cosecant 改写后，就可以用求导法则求导。 · FUN-3.B.3: Rearranging tangent, cotangent, secant, and cosecant functions using identities allows differentiation using derivative rules.",
      "\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\)，用商法则得 \\(\\dfrac{\\cos^{2}x+\\sin^{2}x}{\\cos^{2}x}=\\dfrac{1}{\\cos^{2}x}=\\sec^{2}x\\)。 · \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\); the quotient rule gives \\(\\dfrac{\\cos^{2}x+\\sin^{2}x}{\\cos^{2}x}=\\dfrac{1}{\\cos^{2}x}=\\sec^{2}x\\).",
      "\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\)，用商法则得 \\(\\dfrac{-\\sin^{2}x-\\cos^{2}x}{\\sin^{2}x}=-\\dfrac{1}{\\sin^{2}x}=-\\csc^{2}x\\)。 · \\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\); the quotient rule gives \\(\\dfrac{-\\sin^{2}x-\\cos^{2}x}{\\sin^{2}x}=-\\dfrac{1}{\\sin^{2}x}=-\\csc^{2}x\\).",
      "\\(\\sec x=\\dfrac{1}{\\cos x}\\)，用倒数法则得 \\(\\dfrac{\\sin x}{\\cos^{2}x}=\\sec x\\tan x\\)。 · \\(\\sec x=\\dfrac{1}{\\cos x}\\); the reciprocal rule gives \\(\\dfrac{\\sin x}{\\cos^{2}x}=\\sec x\\tan x\\).",
      "\\(\\csc x=\\dfrac{1}{\\sin x}\\)，用倒数法则得 \\(-\\dfrac{\\cos x}{\\sin^{2}x}=-\\csc x\\cot x\\)。 · \\(\\csc x=\\dfrac{1}{\\sin x}\\); the reciprocal rule gives \\(-\\dfrac{\\cos x}{\\sin^{2}x}=-\\csc x\\cot x\\).",
      "定义域：\\(\\tan\\) 与 \\(\\sec\\) 要求 \\(\\cos x\\neq0\\)，即 \\(x\\neq\\dfrac{\\pi}{2}+k\\pi\\)；\\(\\cot\\) 与 \\(\\csc\\) 要求 \\(\\sin x\\neq0\\)，即 \\(x\\neq k\\pi\\)。 · Domains: \\(\\tan\\) and \\(\\sec\\) require \\(\\cos x\\neq0\\), so \\(x\\neq\\dfrac{\\pi}{2}+k\\pi\\); \\(\\cot\\) and \\(\\csc\\) require \\(\\sin x\\neq0\\), so \\(x\\neq k\\pi\\).",
      "毕达哥拉斯恒等式：\\(1+\\tan^{2}x=\\sec^{2}x\\)，\\(1+\\cot^{2}x=\\csc^{2}x\\)；因此 \\((\\tan x)'=\\sec^{2}x\\ge1\\)，\\((\\cot x)'=-\\csc^{2}x\\le-1\\)。 · Pythagorean identities: \\(1+\\tan^{2}x=\\sec^{2}x\\) and \\(1+\\cot^{2}x=\\csc^{2}x\\); hence \\((\\tan x)'=\\sec^{2}x\\ge1\\) and \\((\\cot x)'=-\\csc^{2}x\\le-1\\).",
      "符号规律：\\(\\tan\\) 的导数 \\(\\sec^{2}x\\) 恒为正；\\(\\cot\\) 的导数 \\(-\\csc^{2}x\\) 恒为负；\\(\\sec\\) 与 \\(\\csc\\) 的导数分别是 \\(\\sec x\\tan x=\\dfrac{\\sin x}{\\cos^{2}x}\\) 与 \\(-\\csc x\\cot x=-\\dfrac{\\cos x}{\\sin^{2}x}\\)，其符号随区间变化。 · Sign pattern: \\((\\tan x)'=\\sec^{2}x\\) is always positive and \\((\\cot x)'=-\\csc^{2}x\\) is always negative; the derivatives of \\(\\sec\\) and \\(\\csc\\) are \\(\\sec x\\tan x=\\dfrac{\\sin x}{\\cos^{2}x}\\) and \\(-\\csc x\\cot x=-\\dfrac{\\cos x}{\\sin^{2}x}\\), whose signs vary by interval.",
      "三角导数公式只在弧度制下成立；角度制会引入因子 \\(\\dfrac{\\pi}{180}\\)。 · The trigonometric derivative formulas hold only in radians; degrees introduce a factor \\(\\dfrac{\\pi}{180}\\).",
      "先化简再求导往往更快：例如 \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\)（在 \\(\\cos x\\neq0\\) 上），所以其导数为 \\(\\cos x\\)。 · Simplifying before differentiating is often faster: for example, \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\) where \\(\\cos x\\neq0\\), so its derivative is \\(\\cos x\\).",
      "与乘积、商法则组合：如 \\((e^{x}\\sec x)'=e^{x}\\sec x(1+\\tan x)\\)，\\((x\\tan x)'=\\tan x+x\\sec^{2}x\\)。 · Combine with the product and quotient rules: for example, \\((e^{x}\\sec x)'=e^{x}\\sec x(1+\\tan x)\\) and \\((x\\tan x)'=\\tan x+x\\sec^{2}x\\).",
      "\\((\\tan x)'=\\sec^{2}x=1+\\tan^{2}x\\ge1>0\\)，所以 \\(\\tan\\) 在每个连续分支上严格递增，没有水平切线。 · \\((\\tan x)'=\\sec^{2}x=1+\\tan^{2}x\\ge1>0\\), so \\(\\tan\\) is strictly increasing on each continuous branch and has no horizontal tangent."
    ],
    "definition": "在弧度制下，且在各函数有定义的点：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\tan x]=\\sec^{2}x\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=-\\csc^{2}x\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sec x]=\\sec x\\tan x\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\csc x]=-\\csc x\\cot x\\)。这些公式不是新的独立规则，而是把 \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\)、\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\)、\\(\\sec x=\\dfrac{1}{\\cos x}\\)、\\(\\csc x=\\dfrac{1}{\\sin x}\\) 代入商法则或倒数法则，再用 \\(\\sin^{2}x+\\cos^{2}x=1\\) 化简得到的。 · In radians, at points where the functions are defined, \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\tan x]=\\sec^{2}x\\), \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=-\\csc^{2}x\\), \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sec x]=\\sec x\\tan x\\), and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\csc x]=-\\csc x\\cot x\\). These formulas are not new independent rules: they come from substituting the quotient or reciprocal identities into the quotient or reciprocal rule and simplifying with \\(\\sin^{2}x+\\cos^{2}x=1\\).",
    "intuition": "\\(\\tan\\) 是 \\(\\sin\\) 与 \\(\\cos\\) 的商。在 \\(\\cos x\\) 从正侧接近 0 的地方，\\(\\tan\\) 急剧上升，斜率也急剧增大，所以 \\(\\tan\\) 的导数是 \\(\\sec^{2}x\\)，且 \\(\\sec^{2}x=1+\\tan^{2}x\\ge1\\)。\\(\\cot\\) 是 \\(\\cos\\) 与 \\(\\sin\\) 的商，在每个连续分支上递减，所以导数为负的 \\(\\csc^{2}x\\)。\\(\\sec\\) 是 \\(\\cos\\) 的倒数，\\(\\csc\\) 是 \\(\\sin\\) 的倒数：它们的导数分别为 \\(\\sec x\\tan x\\) 与 \\(-\\csc x\\cot x\\)，符号随所在区间变化。所有公式都可以由「改写—求导—化简」三步得到，不需要死记硬背。 · \\(\\tan\\) is the quotient of \\(\\sin\\) and \\(\\cos\\). Where \\(\\cos x\\) approaches 0 from the positive side, \\(\\tan\\) rises steeply and its slope grows rapidly, so its derivative is \\(\\sec^{2}x\\), with \\(\\sec^{2}x=1+\\tan^{2}x\\ge1\\). \\(\\cot\\) is the quotient of \\(\\cos\\) and \\(\\sin\\); it decreases on each continuous branch, so its derivative is negative, \\(-\\csc^{2}x\\). \\(\\sec\\) is the reciprocal of \\(\\cos\\), and \\(\\csc\\) is the reciprocal of \\(\\sin\\): their derivatives are \\(\\sec x\\tan x\\) and \\(-\\csc x\\cot x\\), whose signs vary by interval. Every formula can be obtained in three steps—rewrite, differentiate, simplify—so there is no need to memorize blindly.",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\tan x]=\\sec^{2}x",
        "note": "正切的导数；在 \\(\\cos x\\neq0\\) 处成立。 · Derivative of tangent; valid where \\(\\cos x\\neq0\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=-\\csc^{2}x",
        "note": "余切的导数；负号不能漏。 · Derivative of cotangent; do not drop the negative sign."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sec x]=\\sec x\\tan x",
        "note": "正割的导数；不是 \\(\\sec^{2}x\\)。 · Derivative of secant; it is not \\(\\sec^{2}x\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\csc x]=-\\csc x\\cot x",
        "note": "余割的导数；负号不能漏。 · Derivative of cosecant; do not drop the negative sign."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\tan x]=1+\\tan^{2}x,\\qquad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=-(1+\\cot^{2}x)",
        "note": "用毕达哥拉斯恒等式写出的等价形式。 · Equivalent forms using Pythagorean identities."
      },
      {
        "latex": "\\tan x=\\dfrac{\\sin x}{\\cos x},\\quad \\cot x=\\dfrac{\\cos x}{\\sin x},\\quad \\sec x=\\dfrac{1}{\\cos x},\\quad \\csc x=\\dfrac{1}{\\sin x}",
        "note": "求导前先把四个函数改写成 \\(\\sin\\)、\\(\\cos\\) 的商或倒数。 · Rewrite the four functions as quotients or reciprocals of \\(\\sin\\) and \\(\\cos\\) before differentiating."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\dfrac{u}{v}\\right]=\\dfrac{u'v-uv'}{v^{2}},\\qquad \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\dfrac{1}{v}\\right]=-\\dfrac{v'}{v^{2}}",
        "note": "商法则与倒数法则；分母必须非零。 · Quotient and reciprocal rules; the denominator must be nonzero."
      }
    ],
    "derivationNotes": [
      {
        "from": "\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\)",
        "to": "\\((\\tan x)'=\\sec^{2}x\\)",
        "note": "商法则：\\(\\dfrac{(\\sin x)'\\cos x-\\sin x(\\cos x)'}{\\cos^{2}x}=\\dfrac{\\cos^{2}x+\\sin^{2}x}{\\cos^{2}x}=\\dfrac{1}{\\cos^{2}x}=\\sec^{2}x\\)。 · Quotient rule: \\(\\dfrac{(\\sin x)'\\cos x-\\sin x(\\cos x)'}{\\cos^{2}x}=\\dfrac{\\cos^{2}x+\\sin^{2}x}{\\cos^{2}x}=\\dfrac{1}{\\cos^{2}x}=\\sec^{2}x\\)."
      },
      {
        "from": "\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\)",
        "to": "\\((\\cot x)'=-\\csc^{2}x\\)",
        "note": "商法则：\\(\\dfrac{-\\sin^{2}x-\\cos^{2}x}{\\sin^{2}x}=-\\dfrac{1}{\\sin^{2}x}=-\\csc^{2}x\\)。 · Quotient rule: \\(\\dfrac{-\\sin^{2}x-\\cos^{2}x}{\\sin^{2}x}=-\\dfrac{1}{\\sin^{2}x}=-\\csc^{2}x\\)."
      },
      {
        "from": "\\(\\sec x=\\dfrac{1}{\\cos x}\\)",
        "to": "\\((\\sec x)'=\\sec x\\tan x\\)",
        "note": "倒数法则：\\(-\\dfrac{(\\cos x)'}{\\cos^{2}x}=\\dfrac{\\sin x}{\\cos^{2}x}=\\dfrac{1}{\\cos x}\\cdot\\dfrac{\\sin x}{\\cos x}=\\sec x\\tan x\\)。 · Reciprocal rule: \\(-\\dfrac{(\\cos x)'}{\\cos^{2}x}=\\dfrac{\\sin x}{\\cos^{2}x}=\\dfrac{1}{\\cos x}\\cdot\\dfrac{\\sin x}{\\cos x}=\\sec x\\tan x\\)."
      },
      {
        "from": "\\(\\csc x=\\dfrac{1}{\\sin x}\\)",
        "to": "\\((\\csc x)'=-\\csc x\\cot x\\)",
        "note": "倒数法则：\\(-\\dfrac{(\\sin x)'}{\\sin^{2}x}=-\\dfrac{\\cos x}{\\sin^{2}x}=-\\dfrac{1}{\\sin x}\\cdot\\dfrac{\\cos x}{\\sin x}=-\\csc x\\cot x\\)。 · Reciprocal rule: \\(-\\dfrac{(\\sin x)'}{\\sin^{2}x}=-\\dfrac{\\cos x}{\\sin^{2}x}=-\\dfrac{1}{\\sin x}\\cdot\\dfrac{\\cos x}{\\sin x}=-\\csc x\\cot x\\)."
      },
      {
        "from": "毕达哥拉斯恒等式 · Pythagorean identity",
        "to": "等价导数形式 · Equivalent derivative forms",
        "note": "由 \\(\\sin^{2}x+\\cos^{2}x=1\\) 两边除以 \\(\\cos^{2}x\\) 得 \\(1+\\tan^{2}x=\\sec^{2}x\\)；除以 \\(\\sin^{2}x\\) 得 \\(1+\\cot^{2}x=\\csc^{2}x\\)。 · Dividing \\(\\sin^{2}x+\\cos^{2}x=1\\) by \\(\\cos^{2}x\\) gives \\(1+\\tan^{2}x=\\sec^{2}x\\); dividing by \\(\\sin^{2}x\\) gives \\(1+\\cot^{2}x=\\csc^{2}x\\)."
      },
      {
        "from": "先化简再求导 · Simplify before differentiating",
        "to": "更短的解法 · A shorter solution",
        "note": "例如 \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\)（在 \\(\\cos x\\neq0\\) 上），导数直接为 \\(\\cos x\\)；若用商法则也能得到同样结果，但计算更长。 · For example, \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\) where \\(\\cos x\\neq0\\), so the derivative is directly \\(\\cos x\\); the quotient rule gives the same result with more work."
      },
      {
        "from": "定义域限制 · Domain restrictions",
        "to": "可导区间 · Differentiability intervals",
        "note": "原函数无定义的点（\\(\\cos x=0\\) 或 \\(\\sin x=0\\)）不可能是可导点；导数公式只在原函数的定义域内使用。 · Points where the original function is undefined (\\(\\cos x=0\\) or \\(\\sin x=0\\)) cannot be differentiable points; the derivative formulas apply only on the original domain."
      }
    ],
    "conditions": [
      "所有公式都要求 \\(x\\) 用弧度制；角度制会引入因子 \\(\\dfrac{\\pi}{180}\\)。 · All formulas require \\(x\\) in radians; degrees introduce a factor \\(\\dfrac{\\pi}{180}\\).",
      "\\(\\tan\\) 与 \\(\\sec\\) 在 \\(\\cos x=0\\) 处无定义；\\(\\cot\\) 与 \\(\\csc\\) 在 \\(\\sin x=0\\) 处无定义，因此这些点也没有导数。 · \\(\\tan\\) and \\(\\sec\\) are undefined where \\(\\cos x=0\\); \\(\\cot\\) and \\(\\csc\\) are undefined where \\(\\sin x=0\\), so they have no derivative there.",
      "使用商法则或倒数法则时，分母必须非零；这正是定义域限制的来源。 · When using the quotient or reciprocal rule, the denominator must be nonzero; this is the source of the domain restrictions.",
      "化简前后定义域可能看起来不同：例如 \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\)，但原式仍要求 \\(\\cos x\\neq0\\)。 · The domain may look different after simplification: for example, \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\), but the original expression still requires \\(\\cos x\\neq0\\).",
      "特殊角要使用精确值（如 \\(\\sec\\dfrac{\\pi}{4}=\\sqrt2\\)、\\(\\tan\\dfrac{\\pi}{4}=1\\)），不要提前舍入。 · Use exact values at special angles (such as \\(\\sec\\dfrac{\\pi}{4}=\\sqrt2\\) and \\(\\tan\\dfrac{\\pi}{4}=1\\)) and do not round early.",
      "\\((\\tan x)'=\\sec^{2}x\\ge1\\)，所以 \\(\\tan\\) 在每个连续分支上严格递增；\\((\\cot x)'=-\\csc^{2}x\\le-1\\)，所以 \\(\\cot\\) 在每个连续分支上严格递减。 · \\((\\tan x)'=\\sec^{2}x\\ge1\\), so \\(\\tan\\) is strictly increasing on each continuous branch; \\((\\cot x)'=-\\csc^{2}x\\le-1\\), so \\(\\cot\\) is strictly decreasing on each continuous branch.",
      "与乘积、商法则组合时，每个因子都要在讨论点可导。 · When combining with the product or quotient rule, every factor must be differentiable at the point.",
      "求切线或法线时，先确认点在原函数图像上，并保留原函数的定义域限制。 · For a tangent or normal line, first confirm the point is on the original graph and keep the original domain restrictions."
    ],
    "keyPoints": [
      "三步法：先把 \\(\\tan\\)、\\(\\cot\\)、\\(\\sec\\)、\\(\\csc\\) 改写成 \\(\\sin\\)、\\(\\cos\\) 的商或倒数，再用商法则或倒数法则，最后用恒等式化简。 · Three-step method: rewrite the four functions as quotients or reciprocals of \\(\\sin\\) and \\(\\cos\\), apply the quotient or reciprocal rule, then simplify with identities.",
      "四个公式：\\((\\tan x)'=\\sec^{2}x\\)，\\((\\cot x)'=-\\csc^{2}x\\)，\\((\\sec x)'=\\sec x\\tan x\\)，\\((\\csc x)'=-\\csc x\\cot x\\)。 · Four formulas: \\((\\tan x)'=\\sec^{2}x\\), \\((\\cot x)'=-\\csc^{2}x\\), \\((\\sec x)'=\\sec x\\tan x\\), and \\((\\csc x)'=-\\csc x\\cot x\\).",
      "符号：\\((\\tan x)'=\\sec^{2}x>0\\)；\\((\\cot x)'=-\\csc^{2}x<0\\)；\\((\\sec x)'=\\sec x\\tan x\\) 与 \\((\\csc x)'=-\\csc x\\cot x\\) 的符号随区间变化，不要把它们简单记成恒正或恒负。 · Signs: \\((\\tan x)'=\\sec^{2}x>0\\) and \\((\\cot x)'=-\\csc^{2}x<0\\); the signs of \\((\\sec x)'=\\sec x\\tan x\\) and \\((\\csc x)'=-\\csc x\\cot x\\) vary by interval, so do not memorize them as always positive or always negative.",
      "\\((\\tan x)'=\\sec^{2}x=1+\\tan^{2}x\\)；\\((\\cot x)'=-\\csc^{2}x=-(1+\\cot^{2}x)\\)。 · \\((\\tan x)'=\\sec^{2}x=1+\\tan^{2}x\\); \\((\\cot x)'=-\\csc^{2}x=-(1+\\cot^{2}x)\\).",
      "定义域：\\(\\tan\\)、\\(\\sec\\) 排除 \\(x=\\dfrac{\\pi}{2}+k\\pi\\)；\\(\\cot\\)、\\(\\csc\\) 排除 \\(x=k\\pi\\)。 · Domains: \\(\\tan\\) and \\(\\sec\\) exclude \\(x=\\dfrac{\\pi}{2}+k\\pi\\); \\(\\cot\\) and \\(\\csc\\) exclude \\(x=k\\pi\\).",
      "\\(\\tan\\) 在各分支上严格递增，没有水平切线；\\(\\sec^{2}x\\) 永远取不到 0。 · \\(\\tan\\) is strictly increasing on each branch and has no horizontal tangent; \\(\\sec^{2}x\\) is never 0.",
      "遇到混合表达式先用恒等式化简；例如 \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\)。 · Simplify mixed expressions with identities first; for example, \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\).",
      "AP 切线题要用精确值，并写出原函数的定义域限制。 · AP tangent-line problems require exact values and the original domain restrictions."
    ],
    "misconceptions": [
      "\\((\\tan x)'=\\sec x\\tan x\\)——把 \\(\\tan\\) 与 \\(\\sec\\) 的导数混淆；正确结果是 \\(\\sec^{2}x\\)。 · \\((\\tan x)'=\\sec x\\tan x\\) confuses the derivatives of \\(\\tan\\) and \\(\\sec\\); the correct result is \\(\\sec^{2}x\\).",
      "\\((\\sec x)'=\\sec^{2}x\\)——这是 \\(\\tan\\) 的导数；\\(\\sec\\) 的导数是 \\(\\sec x\\tan x\\)。 · \\((\\sec x)'=\\sec^{2}x\\) is the derivative of \\(\\tan\\); the derivative of \\(\\sec\\) is \\(\\sec x\\tan x\\).",
      "\\((\\cot x)'=\\csc^{2}x\\)——漏掉负号；正确结果是 \\(-\\csc^{2}x\\)。 · \\((\\cot x)'=\\csc^{2}x\\) drops the negative sign; the correct result is \\(-\\csc^{2}x\\).",
      "\\((\\csc x)'=\\csc x\\cot x\\)——漏掉负号；正确结果是 \\(-\\csc x\\cot x\\)。 · \\((\\csc x)'=\\csc x\\cot x\\) drops the negative sign; the correct result is \\(-\\csc x\\cot x\\).",
      "在 \\(x=\\dfrac{\\pi}{2}\\) 处使用 \\((\\tan x)'=\\sec^{2}x\\)——\\(\\tan\\) 与 \\(\\sec\\) 在那里无定义。 · Using \\((\\tan x)'=\\sec^{2}x\\) at \\(x=\\dfrac{\\pi}{2}\\) is invalid because \\(\\tan\\) and \\(\\sec\\) are undefined there.",
      "在角度制下套用这些公式——会漏掉 \\(\\dfrac{\\pi}{180}\\) 因子。 · Applying these formulas in degree mode drops the factor \\(\\dfrac{\\pi}{180}\\).",
      "化简时忽略原定义域：\\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\) 只在 \\(\\cos x\\neq0\\) 时成立。 · Ignoring the original domain during simplification: \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\) only where \\(\\cos x\\neq0\\).",
      "把 \\(\\sec^{2}x\\) 读成 \\(\\sec(x^{2})\\)；前者是 \\((\\sec x)^{2}\\)。 · Reading \\(\\sec^{2}x\\) as \\(\\sec(x^{2})\\); the former means \\((\\sec x)^{2}\\)."
    ],
    "examples": [
      {
        "title": "例 1 · 四个公式组合 · Example 1: A combination of all four formulas",
        "prompt": "求 \\(f(x)=\\tan x-2\\cot x+3\\sec x-\\csc x\\) 的导数。 · Differentiate \\(f(x)=\\tan x-2\\cot x+3\\sec x-\\csc x\\).",
        "steps": [
          "逐项求导：\\((\\tan x)'=\\sec^{2}x\\)，\\((-2\\cot x)'=2\\csc^{2}x\\)。 · Differentiate term by term: \\((\\tan x)'=\\sec^{2}x\\) and \\((-2\\cot x)'=2\\csc^{2}x\\).",
          "\\((3\\sec x)'=3\\sec x\\tan x\\)，\\((-\\csc x)'=\\csc x\\cot x\\)。 · \\((3\\sec x)'=3\\sec x\\tan x\\) and \\((-\\csc x)'=\\csc x\\cot x\\).",
          "合并：\\(f'(x)=\\sec^{2}x+2\\csc^{2}x+3\\sec x\\tan x+\\csc x\\cot x\\)。 · Combine: \\(f'(x)=\\sec^{2}x+2\\csc^{2}x+3\\sec x\\tan x+\\csc x\\cot x\\).",
          "定义域：\\(\\sin x\\neq0\\) 且 \\(\\cos x\\neq0\\)，即 \\(x\\neq\\dfrac{k\\pi}{2}\\)。 · Domain: \\(\\sin x\\neq0\\) and \\(\\cos x\\neq0\\), so \\(x\\neq\\dfrac{k\\pi}{2}\\)."
        ],
        "solution": "\\(f'(x)=\\sec^{2}x+2\\csc^{2}x+3\\sec x\\tan x+\\csc x\\cot x\\)，\\(x\\neq\\dfrac{k\\pi}{2}\\)。 · \\(f'(x)=\\sec^{2}x+2\\csc^{2}x+3\\sec x\\tan x+\\csc x\\cot x\\), \\(x\\neq\\dfrac{k\\pi}{2}\\).",
        "solutionLatex": "f'(x)=\\sec^{2}x+2\\csc^{2}x+3\\sec x\\tan x+\\csc x\\cot x"
      },
      {
        "title": "例 2 · 用商法则证明余切导数 · Example 2: Proving the cotangent derivative with the quotient rule",
        "prompt": "用商法则证明 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=-\\csc^{2}x\\)，并指出定义域限制。 · Use the quotient rule to prove \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=-\\csc^{2}x\\), and state the domain restriction.",
        "steps": [
          "改写：\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\)。 · Rewrite: \\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\).",
          "商法则：\\(\\dfrac{(-\\sin x)(\\sin x)-(\\cos x)(\\cos x)}{\\sin^{2}x}\\)。 · Quotient rule: \\(\\dfrac{(-\\sin x)(\\sin x)-(\\cos x)(\\cos x)}{\\sin^{2}x}\\).",
          "分子：\\(-\\sin^{2}x-\\cos^{2}x=-(\\sin^{2}x+\\cos^{2}x)=-1\\)。 · Numerator: \\(-\\sin^{2}x-\\cos^{2}x=-(\\sin^{2}x+\\cos^{2}x)=-1\\).",
          "所以导数为 \\(-\\dfrac{1}{\\sin^{2}x}=-\\csc^{2}x\\)。 · So the derivative is \\(-\\dfrac{1}{\\sin^{2}x}=-\\csc^{2}x\\).",
          "要求 \\(\\sin x\\neq0\\)，即 \\(x\\neq k\\pi\\)；在这些点 \\(\\cot x\\) 本身无定义。 · Require \\(\\sin x\\neq0\\), so \\(x\\neq k\\pi\\); at those points \\(\\cot x\\) itself is undefined."
        ],
        "solution": "cot'=-csc²x，x≠kπ。 · cot'=-csc²x, x≠kπ.",
        "solutionLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\cot x]=\\dfrac{-\\sin^{2}x-\\cos^{2}x}{\\sin^{2}x}=-\\csc^{2}x"
      },
      {
        "title": "例 3 · 先化简再求导 · Example 3: Simplify before differentiating",
        "prompt": "求 \\(g(x)=\\dfrac{\\tan x}{\\sec x}\\) 的导数，并说明化简前后定义域是否相同。 · Differentiate \\(g(x)=\\dfrac{\\tan x}{\\sec x}\\) and explain whether simplifying changes the domain.",
        "steps": [
          "先化简：\\(\\dfrac{\\tan x}{\\sec x}=\\dfrac{\\dfrac{\\sin x}{\\cos x}}{\\dfrac{1}{\\cos x}}=\\sin x\\)，其中 \\(\\cos x\\neq0\\)。 · Simplify first: \\(\\dfrac{\\tan x}{\\sec x}=\\dfrac{\\dfrac{\\sin x}{\\cos x}}{\\dfrac{1}{\\cos x}}=\\sin x\\), where \\(\\cos x\\neq0\\).",
          "因此 \\(g'(x)=\\cos x\\)（在 \\(\\cos x\\neq0\\) 的区间上）。 · Thus \\(g'(x)=\\cos x\\) on intervals where \\(\\cos x\\neq0\\).",
          "用商法则核对：\\(\\dfrac{\\sec^{2}x\\cdot\\sec x-\\tan x\\cdot\\sec x\\tan x}{\\sec^{2}x}\\)。 · Check with the quotient rule: \\(\\dfrac{\\sec^{2}x\\cdot\\sec x-\\tan x\\cdot\\sec x\\tan x}{\\sec^{2}x}\\).",
          "化简：\\(\\dfrac{\\sec^{2}x-\\tan^{2}x}{\\sec x}=\\dfrac{1}{\\sec x}=\\cos x\\)。 · Simplify: \\(\\dfrac{\\sec^{2}x-\\tan^{2}x}{\\sec x}=\\dfrac{1}{\\sec x}=\\cos x\\).",
          "化简后 \\(\\sin x\\) 对所有 \\(x\\) 有定义，但原式 \\(g\\) 在 \\(\\cos x=0\\) 处无定义，所以导数也只在原定义域上成立。 · After simplification, \\(\\sin x\\) is defined for all \\(x\\), but the original \\(g\\) is undefined where \\(\\cos x=0\\), so the derivative holds only on the original domain."
        ],
        "solution": "g(x)=sin x（cos x≠0），g'(x)=cos x。 · g(x)=sin x where cos x≠0, and g'(x)=cos x.",
        "solutionLatex": "g(x)=\\sin x\\ (x\\neq\\dfrac{\\pi}{2}+k\\pi),\\qquad g'(x)=\\cos x"
      },
      {
        "title": "例 4 · 正割曲线的切线 · Example 4: Tangent line to the secant curve",
        "prompt": "求曲线 \\(y=\\sec x\\) 在 \\(x=\\dfrac{\\pi}{4}\\) 处的切线方程。 · Find the tangent line to \\(y=\\sec x\\) at \\(x=\\dfrac{\\pi}{4}\\).",
        "steps": [
          "\\(y\\left(\\dfrac{\\pi}{4}\\right)=\\sec\\dfrac{\\pi}{4}=\\sqrt2\\)。 · \\(y\\left(\\dfrac{\\pi}{4}\\right)=\\sec\\dfrac{\\pi}{4}=\\sqrt2\\).",
          "\\(y'=\\sec x\\tan x\\)，所以 \\(y'\\left(\\dfrac{\\pi}{4}\\right)=\\sqrt2\\cdot1=\\sqrt2\\)。 · \\(y'=\\sec x\\tan x\\), so \\(y'\\left(\\dfrac{\\pi}{4}\\right)=\\sqrt2\\cdot1=\\sqrt2\\).",
          "点斜式：\\(y-\\sqrt2=\\sqrt2\\left(x-\\dfrac{\\pi}{4}\\right)\\)。 · Point-slope form: \\(y-\\sqrt2=\\sqrt2\\left(x-\\dfrac{\\pi}{4}\\right)\\).",
          "化简：\\(y=\\sqrt2 x+\\sqrt2\\left(1-\\dfrac{\\pi}{4}\\right)\\)。 · Simplify: \\(y=\\sqrt2 x+\\sqrt2\\left(1-\\dfrac{\\pi}{4}\\right)\\).",
          "检查：\\(\\sec\\) 在 \\(\\left(0,\\dfrac{\\pi}{2}\\right)\\) 上递增，切线斜率为正。 · Check: \\(\\sec\\) is increasing on \\(\\left(0,\\dfrac{\\pi}{2}\\right)\\), so the tangent slope is positive."
        ],
        "solution": "切线：\\(y-\\sqrt2=\\sqrt2\\left(x-\\dfrac{\\pi}{4}\\right)\\)。 · Tangent: \\(y-\\sqrt2=\\sqrt2\\left(x-\\dfrac{\\pi}{4}\\right)\\).",
        "solutionLatex": "y-\\sqrt2=\\sqrt2\\left(x-\\dfrac{\\pi}{4}\\right)"
      },
      {
        "title": "例 5 · 与指数函数组合 · Example 5: Combined with an exponential",
        "prompt": "求 \\(h(x)=e^{x}\\sec x\\) 的导数，并计算 \\(h'(0)\\)。 · Differentiate \\(h(x)=e^{x}\\sec x\\) and evaluate \\(h'(0)\\).",
        "steps": [
          "乘积法则：\\(h'=(e^{x})'\\sec x+e^{x}(\\sec x)'\\)。 · Product rule: \\(h'=(e^{x})'\\sec x+e^{x}(\\sec x)'\\).",
          "\\(=e^{x}\\sec x+e^{x}\\sec x\\tan x\\)。 · \\(=e^{x}\\sec x+e^{x}\\sec x\\tan x\\).",
          "提取公因子：\\(h'=e^{x}\\sec x(1+\\tan x)\\)。 · Factor: \\(h'=e^{x}\\sec x(1+\\tan x)\\).",
          "在 \\(x=0\\)：\\(e^{0}=1\\)，\\(\\sec0=1\\)，\\(\\tan0=0\\)，所以 \\(h'(0)=1\\cdot1\\cdot1=1\\)。 · At \\(x=0\\): \\(e^{0}=1\\), \\(\\sec0=1\\), and \\(\\tan0=0\\), so \\(h'(0)=1\\cdot1\\cdot1=1\\)."
        ],
        "solution": "h'(x)=eˣ sec x(1+tan x)，h'(0)=1。 · h'(x)=eˣ sec x(1+tan x), h'(0)=1.",
        "solutionLatex": "h'(x)=e^{x}\\sec x(1+\\tan x),\\qquad h'(0)=1"
      },
      {
        "title": "例 6 · 解方程求指定斜率 · Example 6: Solving for a prescribed slope",
        "prompt": "求 \\(f(x)=\\cot x\\) 在 \\([0,2\\pi]\\) 上所有使 \\(f'(x)=-2\\) 的 \\(x\\)。 · Find all \\(x\\) in \\([0,2\\pi]\\) where \\(f(x)=\\cot x\\) has \\(f'(x)=-2\\).",
        "steps": [
          "\\(f'(x)=-\\csc^{2}x\\)，令 \\(-\\csc^{2}x=-2\\)，得 \\(\\csc^{2}x=2\\)。 · \\(f'(x)=-\\csc^{2}x\\); setting \\(-\\csc^{2}x=-2\\) gives \\(\\csc^{2}x=2\\).",
          "因此 \\(\\sin^{2}x=\\dfrac12\\)，\\(\\sin x=\\pm\\dfrac{1}{\\sqrt2}\\)。 · Thus \\(\\sin^{2}x=\\dfrac12\\), so \\(\\sin x=\\pm\\dfrac{1}{\\sqrt2}\\).",
          "在 \\([0,2\\pi]\\) 内，\\(\\sin x=\\dfrac{1}{\\sqrt2}\\) 给出 \\(x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\)；\\(\\sin x=-\\dfrac{1}{\\sqrt2}\\) 给出 \\(x=\\dfrac{5\\pi}{4},\\dfrac{7\\pi}{4}\\)。 · In \\([0,2\\pi]\\), \\(\\sin x=\\dfrac{1}{\\sqrt2}\\) gives \\(x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\); \\(\\sin x=-\\dfrac{1}{\\sqrt2}\\) gives \\(x=\\dfrac{5\\pi}{4},\\dfrac{7\\pi}{4}\\).",
          "这些点都不在 \\(\\sin x=0\\) 的排除点，故都有效。 · None of these points is excluded by \\(\\sin x=0\\), so all are valid.",
          "检查：\\(\\csc^{2}x=2\\) 时 \\(\\cot x=\\pm1\\)，原函数有定义。 · Check: when \\(\\csc^{2}x=2\\), \\(\\cot x=\\pm1\\), so the original function is defined."
        ],
        "solution": "\\(x=\\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4}\\)。 · \\(x=\\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4}\\).",
        "solutionLatex": "x=\\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4}"
      }
    ],
    "examTips": [
      "先改写为 \\(\\sin\\)、\\(\\cos\\) 的商或倒数，再用商法则或倒数法则；不要硬背四个公式。 · Rewrite as quotients or reciprocals of \\(\\sin\\) and \\(\\cos\\) first, then use the quotient or reciprocal rule; do not memorize the four formulas blindly.",
      "公式中的负号：\\(\\cot\\) 与 \\(\\csc\\) 的导数带负号；\\(\\tan\\) 与 \\(\\sec\\) 的公式不带负号，但 \\((\\sec x)'=\\sec x\\tan x\\) 的值仍可能为负。 · Negative signs in the formulas: the derivatives of \\(\\cot\\) and \\(\\csc\\) carry a minus sign; the formulas for \\(\\tan\\) and \\(\\sec\\) do not, but the value of \\((\\sec x)'=\\sec x\\tan x\\) can still be negative.",
      "\\((\\tan x)'=\\sec^{2}x\\)，\\((\\sec x)'=\\sec x\\tan x\\)；两者不要混淆。 · \\((\\tan x)'=\\sec^{2}x\\) and \\((\\sec x)'=\\sec x\\tan x\\); do not confuse them.",
      "\\((\\cot x)'=-\\csc^{2}x\\)，\\((\\csc x)'=-\\csc x\\cot x\\)；两个负号都要保留。 · \\((\\cot x)'=-\\csc^{2}x\\) and \\((\\csc x)'=-\\csc x\\cot x\\); keep both negative signs.",
      "写出定义域限制；在渐近线处没有导数。 · State the domain restrictions; there is no derivative at the asymptotes.",
      "遇到混合表达式，先用恒等式化简（如 \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\)）。 · For mixed expressions, simplify with identities first (such as \\(\\dfrac{\\tan x}{\\sec x}=\\sin x\\)).",
      "特殊角用精确值；切线题先算点再算斜率。 · Use exact values at special angles; in tangent-line problems compute the point first, then the slope.",
      "弧度制；计算器角度模式会引入 \\(\\dfrac{\\pi}{180}\\)。 · Use radians; degree mode introduces a factor \\(\\dfrac{\\pi}{180}\\)."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.7",
        "title": "sin x、cos x、eˣ 与 ln x 的导数 · Derivatives of cos x, sin x, eˣ, and ln x",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.8",
        "title": "乘积法则 · The Product Rule",
        "relation": "相关 · related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.9",
        "title": "商法则 · The Quotient Rule",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.1",
        "title": "链式法则 · The Chain Rule",
        "relation": "后续 · follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.3",
        "title": "增减性 · Determining Intervals of Increase and Decrease",
        "relation": "应用 · application"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u2",
    "connections": [
      "上游：2.7 给出 \\(\\sin\\)、\\(\\cos\\) 的导数，2.9 给出商法则；2.10 把两者结合，推出其余四个三角函数的导数。 · Upstream: 2.7 supplies the sine and cosine derivatives, and 2.9 supplies the quotient rule; 2.10 combines them to derive the remaining four trigonometric derivatives.",
      "下游：3.1 链式法则把 \\(\\tan(2x)\\)、\\(\\sec(x^{2})\\) 等复合函数化为外层导数与内层导数的乘积。 · Downstream: the chain rule in 3.1 reduces composites such as \\(\\tan(2x)\\) and \\(\\sec(x^{2})\\) to an outer derivative times an inner derivative.",
      "工具：2.8 的乘积法则用于 \\(e^{x}\\sec x\\)、\\(x\\tan x\\) 这类组合；2.9 的商法则可用于直接验证化简结果。 · Tools: the product rule in 2.8 handles combinations such as \\(e^{x}\\sec x\\) and \\(x\\tan x\\); the quotient rule in 2.9 can verify simplification results.",
      "图像：\\(\\tan\\) 与 \\(\\sec\\) 在 \\(x=\\dfrac{\\pi}{2}+k\\pi\\) 处有竖直渐近线；\\(\\cot\\) 与 \\(\\csc\\) 在 \\(x=k\\pi\\) 处有竖直渐近线；导数公式只在这些点之外成立。 · Graphs: \\(\\tan\\) and \\(\\sec\\) have vertical asymptotes at \\(x=\\dfrac{\\pi}{2}+k\\pi\\); \\(\\cot\\) and \\(\\csc\\) have vertical asymptotes at \\(x=k\\pi\\); the derivative formulas hold only away from these points.",
      "应用：周期运动、斜率与变化率问题常出现 \\(\\tan\\)、\\(\\sec\\) 等函数；5.3 用导数符号判断增减区间。 · Applications: periodic motion, slope, and rate problems often involve \\(\\tan\\), \\(\\sec\\), and related functions; 5.3 uses derivative signs to determine intervals of increase and decrease."
    ],
    "intuitionDetailed": "把四个函数都看成 \\(\\sin\\)、\\(\\cos\\) 的组合，而不是四个孤立的公式。\\(\\tan=\\dfrac{\\sin x}{\\cos x}\\) 用商法则求导，分子化简为 \\(\\cos^{2}x+\\sin^{2}x=1\\)，因此斜率为 \\(\\sec^{2}x\\)，总为正且至少为 1，所以 \\(\\tan\\) 在每个连续分支上严格递增。\\(\\cot\\) 是「余弦除以正弦」：用商法则得到 \\(-\\csc^{2}x\\)，它总为负，所以 \\(\\cot\\) 在每个连续分支上严格递减。\\(\\sec\\) 是 \\(\\cos\\) 的倒数，\\(\\csc\\) 是 \\(\\sin\\) 的倒数：用倒数法则分别得到 \\(\\sec x\\tan x\\) 与 \\(-\\csc x\\cot x\\)，它们的符号随区间变化。真正需要记住的是「先改写、再求导、后化简」这条流程，以及 \\(\\sin^{2}x+\\cos^{2}x=1\\) 这个化简工具。 · View the four functions as combinations of \\(\\sin\\) and \\(\\cos\\), not as four isolated formulas. Differentiating \\(\\tan=\\dfrac{\\sin x}{\\cos x}\\) with the quotient rule gives numerator \\(\\cos^{2}x+\\sin^{2}x=1\\), so the slope is \\(\\sec^{2}x\\), always positive and at least 1; hence \\(\\tan\\) is strictly increasing on each continuous branch. \\(\\cot\\) is cosine divided by sine: the quotient rule gives \\(-\\csc^{2}x\\), which is always negative, so \\(\\cot\\) is strictly decreasing on each continuous branch. \\(\\sec\\) is the reciprocal of \\(\\cos\\), and \\(\\csc\\) is the reciprocal of \\(\\sin\\): the reciprocal rule gives \\(\\sec x\\tan x\\) and \\(-\\csc x\\cot x\\), whose signs vary by interval. What really matters is the procedure “rewrite, differentiate, simplify” and the identity \\(\\sin^{2}x+\\cos^{2}x=1\\) as the simplification tool.",
    "development": [
      "回顾 \\(\\sin\\)、\\(\\cos\\) 的导数与商法则：确认 \\((\\sin x)'=\\cos x\\)、\\((\\cos x)'=-\\sin x\\) 以及 \\(\\dfrac{u'v-uv'}{v^{2}}\\)。 · Review the sine and cosine derivatives and the quotient rule: confirm \\((\\sin x)'=\\cos x\\), \\((\\cos x)'=-\\sin x\\), and \\(\\dfrac{u'v-uv'}{v^{2}}\\).",
      "把 \\(\\tan\\)、\\(\\cot\\)、\\(\\sec\\)、\\(\\csc\\) 改写成 \\(\\sin\\)、\\(\\cos\\) 的商或倒数。 · Rewrite \\(\\tan\\), \\(\\cot\\), \\(\\sec\\), and \\(\\csc\\) as quotients or reciprocals of \\(\\sin\\) and \\(\\cos\\).",
      "用商法则推导 \\(\\tan\\) 与 \\(\\cot\\) 的导数，并用 \\(\\sin^{2}x+\\cos^{2}x=1\\) 化简。 · Use the quotient rule to derive the derivatives of \\(\\tan\\) and \\(\\cot\\), and simplify with \\(\\sin^{2}x+\\cos^{2}x=1\\).",
      "用倒数法则推导 \\(\\sec\\) 与 \\(\\csc\\) 的导数。 · Use the reciprocal rule to derive the derivatives of \\(\\sec\\) and \\(\\csc\\).",
      "整理四个公式与等价形式，记住符号规律与定义域。 · Organize the four formulas and equivalent forms, and memorize the sign pattern and domains.",
      "在特殊角处求值、求切线，并用图像检查斜率与渐近线。 · Evaluate at special angles, find tangent lines, and check slopes and asymptotes on a graph.",
      "与乘积、商法则及其他基本导数组合，解决综合求导问题。 · Combine with the product and quotient rules and other basic derivatives to solve composite differentiation problems."
    ],
    "checks": [
      "不看书，写出四个三角函数的导数公式，并标出每个公式的符号。 · Without notes, write the derivative formulas for the four trigonometric functions and mark the sign in each.",
      "用商法则从 \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\) 推导 \\((\\tan x)'=\\sec^{2}x\\)。 · Use the quotient rule to derive \\((\\tan x)'=\\sec^{2}x\\) from \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\).",
      "为什么 \\((\\tan x)'=\\sec^{2}x\\ge1\\)？这说明了 \\(\\tan\\) 的什么图像性质？ · Why is \\((\\tan x)'=\\sec^{2}x\\ge1\\)? What graph property of \\(\\tan\\) does this imply?",
      "求 \\(f(x)=\\tan x-2\\cot x+3\\sec x-\\csc x\\) 的导数。 · Differentiate \\(f(x)=\\tan x-2\\cot x+3\\sec x-\\csc x\\).",
      "求 \\(y=\\sec x\\) 在 \\(x=\\dfrac{\\pi}{4}\\) 处的切线斜率。 · Find the tangent slope of \\(y=\\sec x\\) at \\(x=\\dfrac{\\pi}{4}\\).",
      "\\(\\tan x\\) 与 \\(\\csc x\\) 的定义域分别排除了哪些点？ · Which points are excluded from the domains of \\(\\tan x\\) and \\(\\csc x\\)?",
      "化简 \\(\\dfrac{\\tan x}{\\sec x}\\) 并求导，说明原式的定义域限制。 · Simplify \\(\\dfrac{\\tan x}{\\sec x}\\), differentiate it, and state the original domain restriction.",
      "解方程 \\(-\\csc^{2}x=-2\\) 在 \\([0,2\\pi]\\) 上的所有解。 · Solve \\(-\\csc^{2}x=-2\\) on \\([0,2\\pi]\\)."
    ],
    "vocabulary": [
      {
        "termZh": "正切",
        "termEn": "tangent",
        "defZh": "\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\)，导数为 \\(\\sec^{2}x\\)（\\(\\cos x\\neq0\\)）。",
        "defEn": "\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\), whose derivative is \\(\\sec^{2}x\\) where \\(\\cos x\\neq0\\)."
      },
      {
        "termZh": "余切",
        "termEn": "cotangent",
        "defZh": "\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\)，导数为 \\(-\\csc^{2}x\\)（\\(\\sin x\\neq0\\)）。",
        "defEn": "\\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\), whose derivative is \\(-\\csc^{2}x\\) where \\(\\sin x\\neq0\\)."
      },
      {
        "termZh": "正割",
        "termEn": "secant",
        "defZh": "\\(\\sec x=\\dfrac{1}{\\cos x}\\)，导数为 \\(\\sec x\\tan x\\)（\\(\\cos x\\neq0\\)）。",
        "defEn": "\\(\\sec x=\\dfrac{1}{\\cos x}\\), whose derivative is \\(\\sec x\\tan x\\) where \\(\\cos x\\neq0\\)."
      },
      {
        "termZh": "余割",
        "termEn": "cosecant",
        "defZh": "\\(\\csc x=\\dfrac{1}{\\sin x}\\)，导数为 \\(-\\csc x\\cot x\\)（\\(\\sin x\\neq0\\)）。",
        "defEn": "\\(\\csc x=\\dfrac{1}{\\sin x}\\), whose derivative is \\(-\\csc x\\cot x\\) where \\(\\sin x\\neq0\\)."
      },
      {
        "termZh": "商法则",
        "termEn": "quotient rule",
        "defZh": "对 \\(\\dfrac{u}{v}\\) 求导得 \\(\\dfrac{u'v-uv'}{v^{2}}\\)，要求 \\(v\\neq0\\)。",
        "defEn": "Differentiating \\(\\dfrac{u}{v}\\) gives \\(\\dfrac{u'v-uv'}{v^{2}}\\), requiring \\(v\\neq0\\)."
      },
      {
        "termZh": "倒数法则",
        "termEn": "reciprocal rule",
        "defZh": "对 \\(\\dfrac{1}{v}\\) 求导得 \\(-\\dfrac{v'}{v^{2}}\\)，要求 \\(v\\neq0\\)。",
        "defEn": "Differentiating \\(\\dfrac{1}{v}\\) gives \\(-\\dfrac{v'}{v^{2}}\\), requiring \\(v\\neq0\\)."
      },
      {
        "termZh": "毕达哥拉斯恒等式",
        "termEn": "Pythagorean identity",
        "defZh": "\\(\\sin^{2}x+\\cos^{2}x=1\\)，以及 \\(1+\\tan^{2}x=\\sec^{2}x\\)、\\(1+\\cot^{2}x=\\csc^{2}x\\)。",
        "defEn": "\\(\\sin^{2}x+\\cos^{2}x=1\\), together with \\(1+\\tan^{2}x=\\sec^{2}x\\) and \\(1+\\cot^{2}x=\\csc^{2}x\\)."
      },
      {
        "termZh": "定义域限制",
        "termEn": "domain restriction",
        "defZh": "使原函数有定义的自变量范围；\\(\\tan\\)、\\(\\sec\\) 排除 \\(\\cos x=0\\)，\\(\\cot\\)、\\(\\csc\\) 排除 \\(\\sin x=0\\)。",
        "defEn": "The set of inputs where the original function is defined; \\(\\tan\\) and \\(\\sec\\) exclude \\(\\cos x=0\\), while \\(\\cot\\) and \\(\\csc\\) exclude \\(\\sin x=0\\)."
      }
    ]
  }
};
