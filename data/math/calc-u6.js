export const UNIT = {
  "id": "calc-u6",
  "code": "6",
  "titleZh": "积分与累积变化",
  "titleEn": "Integration and Accumulation of Change",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "6.1": {
    "id": "math/calc-u6/6.1",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.1",
    "titleZh": "累积变化探查",
    "titleEn": "Exploring Accumulations of Change",
    "layer": "ap",
    "summary": "累积变化探查 · Exploring Accumulations of Change",
    "learningObjectives": [
      "能陈述「累积变化探查」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Exploring Accumulations of Change：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「累积变化探查」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "累积变化探查（Exploring Accumulations of Change）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「累积变化探查」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "A(x)=\\int_a^x f(t)\\,\\mathrm{d}t,\\quad A'(x)=f(x)",
        "note": "微积分基本定理：累积函数的导数是原函数。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「累积变化探查」的工作方程或机制链。"
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
      "掌握 6.1「累积变化探查」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「累积变化探查」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「累积变化探查」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「累积变化探查」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「累积变化探查」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「累积变化探查」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.2",
        "title": "黎曼和近似",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「累积变化探查」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「累积变化探查」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「累积变化探查」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "累积",
        "termEn": "accumulation",
        "defZh": "变化率在一段区间上不断累加得到的总量。",
        "defEn": "A total obtained by continually adding a rate of change over an interval."
      },
      {
        "termZh": "累积函数",
        "termEn": "accumulation function",
        "defZh": "\\(A(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\)，表示从 \\(a\\) 到 \\(x\\) 的累积量。",
        "defEn": "\\(A(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\), the accumulation from \\(a\\) to \\(x\\)."
      },
      {
        "termZh": "变化率",
        "termEn": "rate of change",
        "defZh": "被累积的量，如速度或功率。",
        "defEn": "The quantity being accumulated, such as velocity or power."
      },
      {
        "termZh": "面积",
        "termEn": "area",
        "defZh": "函数图像与横轴之间带符号的面积，表示累积量。",
        "defEn": "The signed area between a graph and the horizontal axis, representing accumulation."
      },
      {
        "termZh": "变上限",
        "termEn": "variable upper limit",
        "defZh": "累积函数中可变的积分上限 \\(x\\)。",
        "defEn": "The variable upper limit \\(x\\) in an accumulation function."
      },
      {
        "termZh": "微积分基本定理",
        "termEn": "Fundamental Theorem of Calculus",
        "defZh": "累积函数的导数等于被积函数，即 \\(A'(x)=f(x)\\)。",
        "defEn": "The derivative of an accumulation function equals the integrand, \\(A'(x)=f(x)\\)."
      }
    ]
  },
  "6.2": {
    "id": "math/calc-u6/6.2",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.2",
    "titleZh": "黎曼和近似",
    "titleEn": "Approximating Areas with Riemann Sums",
    "layer": "ap",
    "summary": "黎曼和近似 · Approximating Areas with Riemann Sums",
    "learningObjectives": [
      "能陈述「黎曼和近似」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Approximating Areas with Riemann Sums：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「黎曼和近似」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "黎曼和近似（Approximating Areas with Riemann Sums）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「黎曼和近似」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「黎曼和近似」的工作方程或机制链。"
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
      "掌握 6.2「黎曼和近似」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「黎曼和近似」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「黎曼和近似」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「黎曼和近似」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「黎曼和近似」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「黎曼和近似」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.1",
        "title": "累积变化探查",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.3",
        "title": "黎曼和、求和记号与定积分",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "riemann-sum",
        "title": "黎曼和与定积分"
      }
    ],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「黎曼和近似」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「黎曼和近似」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「黎曼和近似」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "黎曼和",
        "termEn": "Riemann sum",
        "defZh": "用有限个矩形面积之和近似定积分。",
        "defEn": "A sum of finitely many rectangle areas approximating a definite integral."
      },
      {
        "termZh": "左端点",
        "termEn": "left endpoint",
        "defZh": "用每个子区间的左端函数值作为矩形高度。",
        "defEn": "Using the function value at each subinterval's left endpoint as the rectangle height."
      },
      {
        "termZh": "右端点",
        "termEn": "right endpoint",
        "defZh": "用每个子区间的右端函数值作为矩形高度。",
        "defEn": "Using the function value at each subinterval's right endpoint as the rectangle height."
      },
      {
        "termZh": "中点",
        "termEn": "midpoint",
        "defZh": "用每个子区间中点的函数值作为矩形高度。",
        "defEn": "Using the function value at each subinterval's midpoint as the rectangle height."
      },
      {
        "termZh": "子区间",
        "termEn": "subinterval",
        "defZh": "把 \\([a,b]\\) 等分后得到的每个小区间。",
        "defEn": "Each small interval obtained by partitioning \\([a,b]\\)."
      },
      {
        "termZh": "样本点",
        "termEn": "sample point",
        "defZh": "子区间内用于计算矩形高度的 \\(x_i^{*}\\)。",
        "defEn": "The point \\(x_i^{*}\\) in a subinterval used to compute the rectangle height."
      }
    ]
  },
  "6.3": {
    "id": "math/calc-u6/6.3",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.3",
    "titleZh": "黎曼和、求和记号与定积分",
    "titleEn": "Riemann Sums, Summation Notation, and Definite Integral Notation",
    "layer": "ap",
    "summary": "黎曼和、求和记号与定积分 · Riemann Sums, Summation Notation, and Definite Integral Notation",
    "learningObjectives": [
      "能陈述「黎曼和、求和记号与定积分」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Riemann Sums, Summation Notation, and Definite Integral Notation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「黎曼和、求和记号与定积分」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "黎曼和、求和记号与定积分（Riemann Sums, Summation Notation, and Definite Integral Notation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「黎曼和、求和记号与定积分」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「黎曼和、求和记号与定积分」的工作方程或机制链。"
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
      "掌握 6.3「黎曼和、求和记号与定积分」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「黎曼和、求和记号与定积分」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「黎曼和、求和记号与定积分」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「黎曼和、求和记号与定积分」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「黎曼和、求和记号与定积分」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「黎曼和、求和记号与定积分」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.2",
        "title": "黎曼和近似",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.4",
        "title": "微积分基本定理",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "riemann-sum",
        "title": "黎曼和与定积分"
      }
    ],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「黎曼和、求和记号与定积分」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「黎曼和、求和记号与定积分」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「黎曼和、求和记号与定积分」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "求和记号",
        "termEn": "summation notation",
        "defZh": "用 \\(\\sum_{i=1}^{n}\\) 紧凑表示多项相加。",
        "defEn": "The symbol \\(\\sum_{i=1}^{n}\\) compactly denoting a sum."
      },
      {
        "termZh": "定积分",
        "termEn": "definite integral",
        "defZh": "\\(\\int_a^b f(x)\\,\\mathrm{d}x\\)，表示带符号的净面积。",
        "defEn": "\\(\\int_a^b f(x)\\,\\mathrm{d}x\\), representing signed net area."
      },
      {
        "termZh": "积分号",
        "termEn": "integral sign",
        "defZh": "记号 \\(\\int\\)，表示连续求和。",
        "defEn": "The symbol \\(\\int\\), denoting continuous summation."
      },
      {
        "termZh": "被积函数",
        "termEn": "integrand",
        "defZh": "积分号后的函数 \\(f(x)\\)。",
        "defEn": "The function \\(f(x)\\) following the integral sign."
      },
      {
        "termZh": "积分限",
        "termEn": "limits of integration",
        "defZh": "定积分的下限 \\(a\\) 与上限 \\(b\\)。",
        "defEn": "The lower limit \\(a\\) and upper limit \\(b\\) of a definite integral."
      },
      {
        "termZh": "极限定义",
        "termEn": "limit definition",
        "defZh": "把定积分定义为黎曼和当 \\(n\\to\\infty\\) 时的极限。",
        "defEn": "Defining a definite integral as the limit of Riemann sums as \\(n\\to\\infty\\)."
      }
    ]
  },
  "6.4": {
    "id": "math/calc-u6/6.4",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.4",
    "titleZh": "微积分基本定理",
    "titleEn": "The Fundamental Theorem of Calculus and Accumulation Functions",
    "layer": "ap",
    "summary": "微积分基本定理 · The Fundamental Theorem of Calculus and Accumulation Functions",
    "learningObjectives": [
      "能陈述「微积分基本定理」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Fundamental Theorem of Calculus and Accumulation Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「微积分基本定理」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "微积分基本定理（The Fundamental Theorem of Calculus and Accumulation Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「微积分基本定理」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「微积分基本定理」的工作方程或机制链。"
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
      "掌握 6.4「微积分基本定理」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「微积分基本定理」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「微积分基本定理」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「微积分基本定理」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「微积分基本定理」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「微积分基本定理」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.3",
        "title": "黎曼和、求和记号与定积分",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.5",
        "title": "定积分解释",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "riemann-sum",
        "title": "黎曼和与定积分"
      }
    ],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「微积分基本定理」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「微积分基本定理」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「微积分基本定理」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "微积分基本定理",
        "termEn": "Fundamental Theorem of Calculus",
        "defZh": "若 \\(F'=f\\)，则 \\(\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)\\)，把定积分与导数联系起来。",
        "defEn": "If \\(F'=f\\), then \\(\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)\\), linking definite integrals to derivatives."
      },
      {
        "termZh": "累积函数",
        "termEn": "accumulation function",
        "defZh": "\\(G(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\)，表示从 \\(a\\) 到 \\(x\\) 的累积量。",
        "defEn": "The function \\(G(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\), the accumulation from \\(a\\) to \\(x\\)."
      },
      {
        "termZh": "变上限积分",
        "termEn": "integral with variable upper limit",
        "defZh": "上限为变量 \\(x\\) 的定积分，其导数为 \\(f(x)\\)。",
        "defEn": "A definite integral whose upper limit is the variable \\(x\\); its derivative is \\(f(x)\\)."
      },
      {
        "termZh": "被积函数",
        "termEn": "integrand",
        "defZh": "积分号内被积分的函数 \\(f(t)\\)。",
        "defEn": "The function \\(f(t)\\) being integrated."
      },
      {
        "termZh": "积分下限",
        "termEn": "lower limit of integration",
        "defZh": "累积开始的固定点 \\(a\\)。",
        "defEn": "The fixed starting point \\(a\\) of the accumulation."
      },
      {
        "termZh": "累积速率",
        "termEn": "rate of accumulation",
        "defZh": "累积函数的变化率等于被积函数，即 \\(\\dfrac{d}{dx}\\int_a^x f(t)\\,\\mathrm{d}t=f(x)\\)。",
        "defEn": "The accumulation function changes at rate \\(\\dfrac{d}{dx}\\int_a^x f(t)\\,\\mathrm{d}t=f(x)\\)."
      }
    ]
  },
  "6.5": {
    "id": "math/calc-u6/6.5",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.5",
    "titleZh": "定积分解释",
    "titleEn": "Interpreting the Behavior of Accumulation Functions Involving Graphs",
    "layer": "ap",
    "summary": "定积分解释 · Interpreting the Behavior of Accumulation Functions Involving Graphs",
    "learningObjectives": [
      "能陈述「定积分解释」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Interpreting the Behavior of Accumulation Functions Involving Graphs：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「定积分解释」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "定积分解释（Interpreting the Behavior of Accumulation Functions Involving Graphs）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「定积分解释」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "A(x)=\\int_a^x f(t)\\,\\mathrm{d}t,\\quad A'(x)=f(x)",
        "note": "累积函数及其导数（FTC）。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「定积分解释」的工作方程或机制链。"
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
      "f 在含 a、x 的区间上连续",
      "A(x) 表示从 a 到 x 的有向面积",
      "对变上限求导时直接得 f(x)；变下限需加负号"
    ],
    "keyPoints": [
      "掌握 6.5「定积分解释」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「定积分解释」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「定积分解释」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "A(x)=\\int_a^x f(t)\\,\\mathrm{d}t,\\quad A'(x)=f(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「定积分解释」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「定积分解释」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「定积分解释」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.4",
        "title": "微积分基本定理",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.6",
        "title": "微积分基本定理应用",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「定积分解释」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「定积分解释」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「定积分解释」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "累积函数",
        "termEn": "accumulation function",
        "defZh": "由积分上限变化形成的函数 \\(A(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\)。",
        "defEn": "The function \\(A(x)=\\int_a^x f(t)\\,\\mathrm{d}t\\) formed as the upper limit varies."
      },
      {
        "termZh": "变化率",
        "termEn": "rate of change",
        "defZh": "累积函数的导数 \\(A'(x)=f(x)\\)。",
        "defEn": "The derivative \\(A'(x)=f(x)\\) of an accumulation function."
      },
      {
        "termZh": "符号变化",
        "termEn": "sign change",
        "defZh": "被积函数由正变负时，累积量由增转减。",
        "defEn": "When the integrand changes from positive to negative, accumulation turns from increasing to decreasing."
      },
      {
        "termZh": "局部极大值",
        "termEn": "local maximum",
        "defZh": "被积函数由正变负处，累积函数取得局部极大。",
        "defEn": "Where the integrand changes from positive to negative, the accumulation function has a local maximum."
      },
      {
        "termZh": "净面积",
        "termEn": "net area",
        "defZh": "横轴上方面积减去下方面积。",
        "defEn": "Area above the horizontal axis minus area below it."
      }
    ]
  },
  "6.6": {
    "id": "math/calc-u6/6.6",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.6",
    "titleZh": "微积分基本定理应用",
    "titleEn": "Applying Properties of Definite Integrals",
    "layer": "ap",
    "summary": "微积分基本定理应用 · Applying Properties of Definite Integrals",
    "learningObjectives": [
      "能陈述「微积分基本定理应用」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Applying Properties of Definite Integrals：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「微积分基本定理应用」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "微积分基本定理应用（Applying Properties of Definite Integrals）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「微积分基本定理应用」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「微积分基本定理应用」的工作方程或机制链。"
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
      "掌握 6.6「微积分基本定理应用」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「微积分基本定理应用」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「微积分基本定理应用」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「微积分基本定理应用」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「微积分基本定理应用」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「微积分基本定理应用」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.5",
        "title": "定积分解释",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.7",
        "title": "定积分求值",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「微积分基本定理应用」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「微积分基本定理应用」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「微积分基本定理应用」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "区间可加性",
        "termEn": "additivity of intervals",
        "defZh": "\\(\\int_a^b f+\\int_b^c f=\\int_a^c f\\)。",
        "defEn": "\\(\\int_a^b f+\\int_b^c f=\\int_a^c f\\)."
      },
      {
        "termZh": "反向积分",
        "termEn": "reversed limits",
        "defZh": "\\(\\int_a^b f=-\\int_b^a f\\)。",
        "defEn": "\\(\\int_a^b f=-\\int_b^a f\\)."
      },
      {
        "termZh": "零积分",
        "termEn": "zero integral",
        "defZh": "\\(\\int_a^a f(x)\\,\\mathrm{d}x=0\\)。",
        "defEn": "\\(\\int_a^a f(x)\\,\\mathrm{d}x=0\\)."
      },
      {
        "termZh": "线性性质",
        "termEn": "linearity",
        "defZh": "\\(\\int_a^b[cf(x)+g(x)]\\,\\mathrm{d}x=c\\int_a^b f+\\int_a^b g\\)。",
        "defEn": "\\(\\int_a^b[cf(x)+g(x)]\\,\\mathrm{d}x=c\\int_a^b f+\\int_a^b g\\)."
      },
      {
        "termZh": "奇函数",
        "termEn": "odd function",
        "defZh": "在对称区间上积分为零，因为正负面积相消。",
        "defEn": "Its integral over a symmetric interval is zero because signed areas cancel."
      },
      {
        "termZh": "偶函数",
        "termEn": "even function",
        "defZh": "在对称区间上的积分等于一侧积分的两倍。",
        "defEn": "Its integral over a symmetric interval equals twice the integral over one side."
      }
    ]
  },
  "6.7": {
    "id": "math/calc-u6/6.7",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.7",
    "titleZh": "定积分求值",
    "titleEn": "The Fundamental Theorem of Calculus and Definite Integrals",
    "layer": "ap",
    "summary": "定积分求值 · The Fundamental Theorem of Calculus and Definite Integrals",
    "learningObjectives": [
      "能陈述「定积分求值」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Fundamental Theorem of Calculus and Definite Integrals：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「定积分求值」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "定积分求值（The Fundamental Theorem of Calculus and Definite Integrals）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「定积分求值」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「定积分求值」的工作方程或机制链。"
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
      "掌握 6.7「定积分求值」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「定积分求值」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「定积分求值」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「定积分求值」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「定积分求值」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「定积分求值」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.6",
        "title": "微积分基本定理应用",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.8",
        "title": "求原函数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「定积分求值」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「定积分求值」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「定积分求值」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "微积分基本定理",
        "termEn": "Fundamental Theorem of Calculus",
        "defZh": "\\(\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)\\)，其中 \\(F'=f\\)。",
        "defEn": "\\(\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)\\), where \\(F'=f\\)."
      },
      {
        "termZh": "原函数",
        "termEn": "antiderivative",
        "defZh": "导数等于被积函数的函数 \\(F\\)。",
        "defEn": "A function \\(F\\) whose derivative is the integrand."
      },
      {
        "termZh": "求值",
        "termEn": "evaluate",
        "defZh": "把上下限代入原函数并作差。",
        "defEn": "Substituting the limits into an antiderivative and subtracting."
      },
      {
        "termZh": "上限",
        "termEn": "upper limit",
        "defZh": "定积分中的 \\(b\\)，求值时对应 \\(F(b)\\)。",
        "defEn": "The upper limit \\(b\\), corresponding to \\(F(b)\\)."
      },
      {
        "termZh": "下限",
        "termEn": "lower limit",
        "defZh": "定积分中的 \\(a\\)，求值时对应 \\(F(a)\\)。",
        "defEn": "The lower limit \\(a\\), corresponding to \\(F(a)\\)."
      },
      {
        "termZh": "净变化",
        "termEn": "net change",
        "defZh": "\\(F(b)-F(a)\\)，即变化率累积的总效果。",
        "defEn": "\\(F(b)-F(a)\\), the total effect of accumulating a rate of change."
      }
    ]
  },
  "6.8": {
    "id": "math/calc-u6/6.8",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.8",
    "titleZh": "求原函数",
    "titleEn": "Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation",
    "layer": "ap",
    "summary": "求原函数 · Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation",
    "learningObjectives": [
      "能陈述「求原函数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「求原函数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "求原函数（Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「求原函数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「求原函数」的工作方程或机制链。"
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
      "掌握 6.8「求原函数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「求原函数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「求原函数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「求原函数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「求原函数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「求原函数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.7",
        "title": "定积分求值",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.9",
        "title": "换元积分法",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「求原函数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「求原函数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「求原函数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "原函数",
        "termEn": "antiderivative",
        "defZh": "若 \\(F'(x)=f(x)\\)，则 \\(F\\) 是 \\(f\\) 的一个原函数。",
        "defEn": "If \\(F'(x)=f(x)\\), then \\(F\\) is an antiderivative of \\(f\\)."
      },
      {
        "termZh": "不定积分",
        "termEn": "indefinite integral",
        "defZh": "\\(\\int f(x)\\,\\mathrm{d}x=F(x)+C\\)，表示全体原函数。",
        "defEn": "\\(\\int f(x)\\,\\mathrm{d}x=F(x)+C\\), representing all antiderivatives."
      },
      {
        "termZh": "积分常数",
        "termEn": "constant of integration",
        "defZh": "不定积分中的任意常数 \\(C\\)。",
        "defEn": "The arbitrary constant \\(C\\) in an indefinite integral."
      },
      {
        "termZh": "幂法则",
        "termEn": "power rule",
        "defZh": "当 \\(n\\ne-1\\) 时，\\(\\int x^{n}\\,\\mathrm{d}x=\\dfrac{x^{n+1}}{n+1}+C\\)。",
        "defEn": "For \\(n\\ne-1\\), \\(\\int x^{n}\\,\\mathrm{d}x=\\dfrac{x^{n+1}}{n+1}+C\\)."
      },
      {
        "termZh": "线性性质",
        "termEn": "linearity",
        "defZh": "不定积分可以逐项积分并提取常数倍。",
        "defEn": "An indefinite integral can be taken term by term with constant multiples factored out."
      },
      {
        "termZh": "基本积分表",
        "termEn": "basic integration table",
        "defZh": "常用函数原函数的清单，如 \\(\\int\\cos x\\,\\mathrm{d}x=\\sin x+C\\)。",
        "defEn": "A list of common antiderivatives, such as \\(\\int\\cos x\\,\\mathrm{d}x=\\sin x+C\\)."
      }
    ]
  },
  "6.9": {
    "id": "math/calc-u6/6.9",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.9",
    "titleZh": "换元积分法",
    "titleEn": "Integrating Using Substitution",
    "layer": "ap",
    "summary": "换元积分法 · Integrating Using Substitution",
    "learningObjectives": [
      "能陈述「换元积分法」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Integrating Using Substitution：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「换元积分法」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "换元积分法（Integrating Using Substitution）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「换元积分法」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「换元积分法」的工作方程或机制链。"
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
      "掌握 6.9「换元积分法」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「换元积分法」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「换元积分法」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「换元积分法」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「换元积分法」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「换元积分法」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.8",
        "title": "求原函数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.10",
        "title": "分部积分",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「换元积分法」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「换元积分法」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「换元积分法」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "换元积分法",
        "termEn": "integration by substitution",
        "defZh": "令 \\(u=g(x)\\)，把积分化为 \\(\\int f(u)\\,\\mathrm{d}u\\) 的形式。",
        "defEn": "Setting \\(u=g(x)\\) to rewrite an integral in the form \\(\\int f(u)\\,\\mathrm{d}u\\)."
      },
      {
        "termZh": "换元 \\(u=g(x)\\)",
        "termEn": "substitution",
        "defZh": "用新变量 \\(u\\) 简化被积函数。",
        "defEn": "A new variable \\(u\\) that simplifies the integrand."
      },
      {
        "termZh": "微分替换",
        "termEn": "differential substitution",
        "defZh": "由 \\(\\mathrm{d}u=g'(x)\\,\\mathrm{d}x\\) 把 \\(\\mathrm{d}x\\) 一并替换。",
        "defEn": "Replacing \\(\\mathrm{d}x\\) using \\(\\mathrm{d}u=g'(x)\\,\\mathrm{d}x\\)."
      },
      {
        "termZh": "积分限变换",
        "termEn": "changing limits",
        "defZh": "定积分换元时，把 \\(x\\) 的上下限换成对应的 \\(u\\) 值。",
        "defEn": "For a definite integral, converting the \\(x\\)-limits into the corresponding \\(u\\)-values."
      },
      {
        "termZh": "回代",
        "termEn": "back-substitution",
        "defZh": "不定积分用 \\(u\\) 算出后，再把结果换回 \\(x\\)。",
        "defEn": "Rewriting an indefinite integral in terms of \\(x\\) after integrating in \\(u\\)."
      },
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "换元积分法是链式求导的逆过程。",
        "defEn": "Substitution is the reverse process of the chain rule."
      }
    ]
  },
  "6.10": {
    "id": "math/calc-u6/6.10",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.10",
    "titleZh": "分部积分",
    "titleEn": "Integrating Using Integration by Parts",
    "layer": "ap",
    "summary": "分部积分 · Integrating Using Integration by Parts",
    "learningObjectives": [
      "能陈述「分部积分」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Integrating Using Integration by Parts：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「分部积分」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "分部积分（Integrating Using Integration by Parts）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「分部积分」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「分部积分」的工作方程或机制链。"
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
      "掌握 6.10「分部积分」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「分部积分」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「分部积分」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「分部积分」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「分部积分」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「分部积分」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.9",
        "title": "换元积分法",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.11",
        "title": "部分分式",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「分部积分」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「分部积分」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「分部积分」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "分部积分",
        "termEn": "integration by parts",
        "defZh": "由 \\(\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u\\) 把积分转化为另一个积分。",
        "defEn": "The identity \\(\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u\\) converts one integral into another."
      },
      {
        "termZh": "选择 \\(u\\)",
        "termEn": "choosing u",
        "defZh": "优先选择求导后变简单的因子作为 \\(u\\)。",
        "defEn": "Choosing as \\(u\\) the factor that becomes simpler when differentiated."
      },
      {
        "termZh": "选择 \\(\\mathrm{d}v\\)",
        "termEn": "choosing dv",
        "defZh": "选择容易求原函数的因子作为 \\(\\mathrm{d}v\\)。",
        "defEn": "Choosing as \\(\\mathrm{d}v\\) the factor that is easy to antidifferentiate."
      },
      {
        "termZh": "定积分分部",
        "termEn": "definite integration by parts",
        "defZh": "\\(\\int_a^b u\\,\\mathrm{d}v=[uv]_a^b-\\int_a^b v\\,\\mathrm{d}u\\)。",
        "defEn": "The definite form \\(\\int_a^b u\\,\\mathrm{d}v=[uv]_a^b-\\int_a^b v\\,\\mathrm{d}u\\)."
      },
      {
        "termZh": "循环积分",
        "termEn": "cyclic integral",
        "defZh": "分部后出现与原积分相同的积分，移项后求解。",
        "defEn": "An integral that reappears after parts and is then solved algebraically."
      },
      {
        "termZh": "递推公式",
        "termEn": "reduction formula",
        "defZh": "重复分部得到的积分递推关系。",
        "defEn": "A recurrence relation obtained by repeated integration by parts."
      }
    ]
  },
  "6.11": {
    "id": "math/calc-u6/6.11",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.11",
    "titleZh": "部分分式",
    "titleEn": "Integrating Using Linear Partial Fractions",
    "layer": "ap",
    "summary": "部分分式 · Integrating Using Linear Partial Fractions",
    "learningObjectives": [
      "能陈述「部分分式」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Integrating Using Linear Partial Fractions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「部分分式」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "部分分式（Integrating Using Linear Partial Fractions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「部分分式」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「部分分式」的工作方程或机制链。"
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
      "掌握 6.11「部分分式」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「部分分式」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「部分分式」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「部分分式」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「部分分式」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「部分分式」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.10",
        "title": "分部积分",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.12",
        "title": "反常积分",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「部分分式」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「部分分式」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「部分分式」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "部分分式分解",
        "termEn": "partial fraction decomposition",
        "defZh": "把有理函数拆成若干个简单分式之和。",
        "defEn": "Writing a rational function as a sum of simpler fractions."
      },
      {
        "termZh": "有理函数",
        "termEn": "rational function",
        "defZh": "两个多项式之比。",
        "defEn": "A ratio of two polynomials."
      },
      {
        "termZh": "真分式",
        "termEn": "proper fraction",
        "defZh": "分子次数低于分母次数的有理函数。",
        "defEn": "A rational function whose numerator has lower degree than its denominator."
      },
      {
        "termZh": "线性因子",
        "termEn": "linear factor",
        "defZh": "分母中形如 \\((x-a)\\) 的一次因子。",
        "defEn": "A first-degree factor such as \\((x-a)\\) in the denominator."
      },
      {
        "termZh": "待定系数",
        "termEn": "undetermined coefficients",
        "defZh": "设出分解式后比较系数，求出未知常数。",
        "defEn": "Unknown constants found by comparing coefficients after writing the decomposition."
      },
      {
        "termZh": "重因子",
        "termEn": "repeated factor",
        "defZh": "分母中 \\((x-a)^k\\) 出现多次时，需要为每一级幂分别设项。",
        "defEn": "When \\((x-a)^k\\) appears, a separate term is needed for each power up to \\(k\\)."
      }
    ]
  },
  "6.12": {
    "id": "math/calc-u6/6.12",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.12",
    "titleZh": "反常积分",
    "titleEn": "Evaluating Improper Integrals",
    "layer": "ap",
    "summary": "反常积分 · Evaluating Improper Integrals",
    "learningObjectives": [
      "能陈述「反常积分」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Evaluating Improper Integrals：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「反常积分」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "反常积分（Evaluating Improper Integrals）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「反常积分」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「反常积分」的工作方程或机制链。"
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
      "掌握 6.12「反常积分」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「反常积分」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「反常积分」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「反常积分」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「反常积分」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「反常积分」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.11",
        "title": "部分分式",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.13",
        "title": "积分技巧选择",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「反常积分」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「反常积分」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「反常积分」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "反常积分",
        "termEn": "improper integral",
        "defZh": "积分区间无限或被积函数在区间内无界的积分。",
        "defEn": "An integral with an infinite interval or an unbounded integrand."
      },
      {
        "termZh": "无穷限积分",
        "termEn": "infinite-interval integral",
        "defZh": "\\(\\int_a^{\\infty}f(x)\\,\\mathrm{d}x=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,\\mathrm{d}x\\)。",
        "defEn": "An integral defined by \\(\\int_a^{\\infty}f(x)\\,\\mathrm{d}x=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,\\mathrm{d}x\\)."
      },
      {
        "termZh": "无界被积函数",
        "termEn": "unbounded integrand",
        "defZh": "被积函数在积分区间内某点趋于无穷。",
        "defEn": "An integrand that tends to infinity at some point in the interval."
      },
      {
        "termZh": "极限定义",
        "termEn": "limit definition",
        "defZh": "用极限把反常积分写成普通定积分的极限。",
        "defEn": "Writing an improper integral as the limit of ordinary definite integrals."
      },
      {
        "termZh": "收敛",
        "termEn": "convergence",
        "defZh": "极限存在且有限时，反常积分收敛。",
        "defEn": "An improper integral converges when its defining limit exists and is finite."
      },
      {
        "termZh": "发散",
        "termEn": "divergence",
        "defZh": "极限不存在或为无穷时，反常积分发散。",
        "defEn": "An improper integral diverges when its defining limit fails to exist or is infinite."
      },
      {
        "termZh": "p 积分",
        "termEn": "p-integral",
        "defZh": "\\(\\int_1^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) 在 \\(p>1\\) 时收敛，在 \\(p\\le 1\\) 时发散。",
        "defEn": "\\(\\int_1^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) converges for \\(p>1\\) and diverges for \\(p\\le 1\\)."
      }
    ]
  },
  "6.13": {
    "id": "math/calc-u6/6.13",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.13",
    "titleZh": "积分技巧选择",
    "titleEn": "Integrating Using Linear Partial Fractions and Other Techniques",
    "layer": "ap",
    "summary": "积分技巧选择 · Integrating Using Linear Partial Fractions and Other Techniques",
    "learningObjectives": [
      "能陈述「积分技巧选择」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Integrating Using Linear Partial Fractions and Other Techniques：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「积分技巧选择」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "积分技巧选择（Integrating Using Linear Partial Fractions and Other Techniques）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「积分技巧选择」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「积分技巧选择」的工作方程或机制链。"
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
      "掌握 6.13「积分技巧选择」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「积分技巧选择」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「积分技巧选择」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「积分技巧选择」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「积分技巧选择」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「积分技巧选择」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.12",
        "title": "反常积分",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.14",
        "title": "积分技巧综合",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「积分技巧选择」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「积分技巧选择」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「积分技巧选择」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "部分分式",
        "termEn": "partial fractions",
        "defZh": "把有理函数拆成简单分式之和再积分。",
        "defEn": "Decomposing a rational function into simpler fractions before integrating."
      },
      {
        "termZh": "线性因子",
        "termEn": "linear factor",
        "defZh": "分母中形如 \\((ax+b)\\) 的一次因式。",
        "defEn": "A first-degree factor such as \\((ax+b)\\) in the denominator."
      },
      {
        "termZh": "待定系数",
        "termEn": "undetermined coefficients",
        "defZh": "设出部分分式后比较系数求未知常数。",
        "defEn": "Setting up a partial-fraction form and comparing coefficients to find unknown constants."
      },
      {
        "termZh": "换元法",
        "termEn": "substitution",
        "defZh": "通过变量替换把积分化为基本形式。",
        "defEn": "Changing variables to reduce an integral to a basic form."
      },
      {
        "termZh": "有理函数",
        "termEn": "rational function",
        "defZh": "两个多项式之比，可用部分分式或长除法处理。",
        "defEn": "A ratio of two polynomials, handled by partial fractions or long division."
      }
    ]
  },
  "6.14": {
    "id": "math/calc-u6/6.14",
    "subject": "math",
    "chapterId": "calc-u6",
    "unitCode": "6",
    "unitTitleZh": "积分与累积变化",
    "unitTitleEn": "Integration and Accumulation of Change",
    "code": "6.14",
    "titleZh": "积分技巧综合",
    "titleEn": "Selecting Techniques for Antidifferentiation",
    "layer": "ap",
    "summary": "积分技巧综合 · Selecting Techniques for Antidifferentiation",
    "learningObjectives": [
      "能陈述「积分技巧综合」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Selecting Techniques for Antidifferentiation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「积分技巧综合」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "积分技巧综合（Selecting Techniques for Antidifferentiation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「积分技巧综合」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "导数定义使用叠式分式。"
      },
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「积分技巧综合」的工作方程或机制链。"
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
      "掌握 6.14「积分技巧综合」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「积分技巧综合」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「积分技巧综合」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「积分技巧综合」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「积分技巧综合」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「积分技巧综合」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u6",
        "code": "6.13",
        "title": "积分技巧选择",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「积分技巧综合」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「积分技巧综合」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「积分技巧综合」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "换元法",
        "termEn": "substitution",
        "defZh": "令 \\(u=g(x)\\)，把复合函数的积分化为 \\(\\int f(u)\\,\\mathrm{d}u\\)。",
        "defEn": "Setting \\(u=g(x)\\) to reduce a composite integral to \\(\\int f(u)\\,\\mathrm{d}u\\)."
      },
      {
        "termZh": "分部积分",
        "termEn": "integration by parts",
        "defZh": "\\(\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u\\)。",
        "defEn": "\\(\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u\\)."
      },
      {
        "termZh": "部分分式",
        "termEn": "partial fractions",
        "defZh": "把有理函数分解为可积的简单分式。",
        "defEn": "Decomposing a rational function into integrable simple fractions."
      },
      {
        "termZh": "长除法",
        "termEn": "long division",
        "defZh": "当分子次数不低于分母时，先做多项式除法。",
        "defEn": "Polynomial division first when the numerator's degree is at least the denominator's."
      },
      {
        "termZh": "配方",
        "termEn": "completing the square",
        "defZh": "把二次式写成完全平方，便于换元或套用公式。",
        "defEn": "Rewriting a quadratic as a perfect square to enable substitution or a standard formula."
      },
      {
        "termZh": "三角恒等式",
        "termEn": "trigonometric identity",
        "defZh": "用恒等式改写被积函数，如 \\(\\sin^{2}x=\\dfrac{1-\\cos 2x}{2}\\)。",
        "defEn": "Rewriting an integrand with identities such as \\(\\sin^{2}x=\\dfrac{1-\\cos 2x}{2}\\)."
      }
    ]
  }
};
