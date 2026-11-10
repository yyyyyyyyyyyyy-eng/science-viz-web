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
        "title": "定积分性质的应用",
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
    "titleZh": "定积分性质的应用",
    "titleEn": "Applying Properties of Definite Integrals",
    "layer": "ap",
    "summary": "定积分由黎曼和定义；有界且只有有限个可去或跳跃间断的函数仍可积，并可用线性、区间可加、反向与零区间性质拆分计算。 · The definite integral is defined by a limit of Riemann sums; a bounded function with finitely many removable or jump discontinuities is still integrable and can be split using linearity, additivity, reversed limits, and zero-width intervals.",
    "learningObjectives": [
      "能陈述定积分作为黎曼和极限的定义，并说明为何有限个可去或跳跃间断点不影响可积性。 · State the definite integral as a limit of Riemann sums and explain why finitely many removable or jump discontinuities do not destroy integrability.",
      "能用线性、区间可加、反向上下限与零区间性质拆分并计算定积分，包括分段函数与含跳跃点的函数。 · Use linearity, additivity, reversed limits, and zero-width intervals to split and evaluate definite integrals, including piecewise functions and functions with jumps.",
      "能在图像上把跨间断点的积分解释为各连续段有向面积之和，并用面积或累积图像检验结果。 · Interpret an integral across a discontinuity as the sum of signed areas over the continuous pieces, and check the result with an area or accumulation graph.",
      "能区分可去间断、跳跃间断与无穷间断，判断哪些情形仍属普通定积分、哪些需要反常积分。 · Distinguish removable, jump, and infinite discontinuities and decide which cases remain ordinary definite integrals and which require improper integrals."
    ],
    "essentialKnowledge": [
      "定积分定义为黎曼和的极限：\\(\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\)；当极限存在且与样本点 \\(x_i^*\\) 的选择无关时，称 \\(f\\) 在 \\([a,b]\\) 上可积。 · The definite integral is the limit of Riemann sums, \\(\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\); when the limit exists and is independent of the sample points \\(x_i^*\\), \\(f\\) is integrable on \\([a,b]\\).",
      "若 \\(f\\) 在 \\([a,b]\\) 上有界，且只有有限个可去间断点或跳跃间断点，则 \\(f\\) 在 \\([a,b]\\) 上黎曼可积；定积分的定义可以直接推广到这类函数。 · If \\(f\\) is bounded on \\([a,b]\\) and has only finitely many removable or jump discontinuities there, then \\(f\\) is Riemann integrable on \\([a,b]\\); the definition of the definite integral extends directly to such functions.",
      "可去间断点处极限存在，只是函数值未定义或与极限不同；改变该点的函数值不影响积分，积分等于其连续延拓在 \\([a,b]\\) 上的积分。 · At a removable discontinuity the limit exists, but the value is undefined or differs from the limit; changing the value at that point does not change the integral, which equals the integral of the continuous extension on \\([a,b]\\).",
      "跳跃间断点处左右单侧极限都存在但不等；在跳跃点 \\(c\\) 拆区间，\\(\\int_a^b f=\\int_a^c f+\\int_c^b f\\)，两段分别积分后相加。 · At a jump discontinuity both one-sided limits exist but are unequal; split at the jump \\(c\\) and add the two pieces: \\(\\int_a^b f=\\int_a^c f+\\int_c^b f\\).",
      "有限个间断点不占面积，对黎曼和的极限没有贡献；积分只对函数在“绝大多数点”上的取值敏感，单个点的函数值可以任意改变。 · Finitely many discontinuities occupy no area and contribute nothing to the limit of Riemann sums; the integral depends on the function's values at “almost every” point, while values at isolated points may be changed arbitrarily.",
      "线性、区间可加、反向上下限与零区间等性质对分段连续函数仍成立，因此可以跨间断点拆分计算。 · Linearity, additivity, reversed limits, and zero-width intervals remain valid for piecewise continuous functions, so calculations may be split across discontinuities.",
      "若 \\(F\\) 在 \\([a,b]\\) 上连续，且除有限个点外 \\(F'(x)=f(x)\\)，则 \\(\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)\\)：在每个可导段上用微积分基本定理，再把结果相加。 · If \\(F\\) is continuous on \\([a,b]\\) and \\(F'(x)=f(x)\\) except at finitely many points, then \\(\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)\\): apply the Fundamental Theorem of Calculus on each differentiable piece and add.",
      "无穷间断（竖直渐近）不是可去或跳跃间断；函数在间断点附近无界，属于反常积分，可能收敛也可能发散，不能直接套用普通定积分的结论。 · An infinite discontinuity (vertical asymptote) is neither removable nor a jump; the function is unbounded near the point, so the integral is improper and may converge or diverge. The ordinary definite-integral results do not apply directly."
    ],
    "definition": "定积分从黎曼和定义：把区间 \\([a,b]\\) 分成 \\(n\\) 个子区间，在第 \\(i\\) 个子区间取样本点 \\(x_i^*\\)，作和 \\(\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\)；当最大子区间长度趋于零时，若这些和的极限存在且与样本点的选择无关，就记 \\(\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\)。这个定义可以推广到在 \\([a,b]\\) 上有界、只有有限个可去间断点或跳跃间断点的函数：可去间断点可以通过重新定义该点的值补成连续函数；跳跃间断点则把区间在该点拆开，在两侧分别积分再相加。这样得到的积分仍满足线性、区间可加、反向上下限与零区间性质。 · The definite integral is defined from Riemann sums: divide \\([a,b]\\) into \\(n\\) subintervals, choose a sample point \\(x_i^*\\) in the \\(i\\)th subinterval, and form \\(\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\). As the largest subinterval length tends to zero, if the limit of these sums exists and is independent of the choice of sample points, write \\(\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x\\). The definition extends to functions that are bounded on \\([a,b]\\) and have only finitely many removable or jump discontinuities: a removable discontinuity can be repaired by redefining the value there, while at a jump the interval is split and the two sides are integrated separately and added. The resulting integral still satisfies linearity, additivity, reversed limits, and the zero-width interval property.",
    "intuition": "积分是“有向面积”，而单个点没有宽度、跳跃只是一条竖直的台阶边，都不占面积。把洞补上，或在台阶处把区间切开，面积不变。 · An integral is a “signed area,” and a single point has no width while a jump is just a vertical step edge; neither occupies area. Patch the hole, or cut the interval at the step, and the area is unchanged.",
    "formulas": [
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x",
        "note": "定积分的黎曼和定义；极限存在且与样本点选择无关时函数可积。 · Riemann-sum definition of the definite integral; the function is integrable when the limit exists independently of the sample points."
      },
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=\\int_a^c f(x)\\,\\mathrm{d}x+\\int_c^b f(x)\\,\\mathrm{d}x",
        "note": "区间可加性；\\(c\\) 可以是跳跃间断点，两侧分别积分后相加。 · Additivity over intervals; \\(c\\) may be a jump discontinuity, and the two sides are integrated separately and added."
      },
      {
        "latex": "\\int_a^b [cf(x)\\pm g(x)]\\,\\mathrm{d}x=c\\int_a^b f(x)\\,\\mathrm{d}x\\pm\\int_a^b g(x)\\,\\mathrm{d}x",
        "note": "线性性质：常数倍与和差可以逐项积分。 · Linearity: constant multiples and sums or differences may be integrated term by term."
      },
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=-\\int_b^a f(x)\\,\\mathrm{d}x,\\qquad \\int_a^a f(x)\\,\\mathrm{d}x=0",
        "note": "反向上下限改变符号；零宽区间积分为零。 · Reversing the limits changes the sign; a zero-width interval has integral zero."
      },
      {
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)",
        "note": "若 \\(F\\) 在 \\([a,b]\\) 上连续，且除有限个点外 \\(F'=f\\)，则可在每个可导段上分别使用微积分基本定理再相加。 · If \\(F\\) is continuous on \\([a,b]\\) and \\(F'=f\\) except at finitely many points, apply the Fundamental Theorem of Calculus on each differentiable piece and add."
      }
    ],
    "derivationNotes": [
      {
        "from": "黎曼和定义 · Riemann-sum definition",
        "to": "可去间断不影响积分 · Removable discontinuity does not affect the integral",
        "note": "改变 \\(f(c)\\) 的值最多改变一个样本项；该项含因子 \\(\\Delta x\\)，当 \\(\\Delta x\\to 0\\) 时被压为零，极限不变。 · Changing \\(f(c)\\) changes at most one sample term; that term carries a factor \\(\\Delta x\\), which is crushed to zero as \\(\\Delta x\\to 0\\), so the limit is unchanged."
      },
      {
        "from": "跳跃间断 · Jump discontinuity",
        "to": "区间可加 · Additivity",
        "note": "在跳跃点 \\(c\\) 把 \\([a,b]\\) 拆成 \\([a,c]\\) 与 \\([c,b]\\)；每一段上函数连续或只有端点单侧极限，分别可积，再由区间可加性相加。 · Split \\([a,b]\\) at the jump \\(c\\) into \\([a,c]\\) and \\([c,b]\\); on each piece the function is continuous or has only endpoint one-sided limits, so each piece is integrable and additivity gives the total."
      },
      {
        "from": "有限个间断点 · Finitely many discontinuities",
        "to": "黎曼可积 · Riemann integrability",
        "note": "有限个点组成零面积集合；把这些点附近的小区间总长度取得任意小，就能把振幅对黎曼和的贡献压到任意小，故极限存在。 · Finitely many points form a set of zero area; by making the total length of small intervals around them arbitrarily small, their oscillation contributes arbitrarily little to the Riemann sums, so the limit exists."
      },
      {
        "from": "分段原函数 · Piecewise antiderivative",
        "to": "微积分基本定理 · Fundamental Theorem of Calculus",
        "note": "若 \\(F\\) 连续且除有限点外 \\(F'=f\\)，在每个可导段上用微积分基本定理，再相加；\\(F\\) 在断点处的连续性使中间项相消。 · If \\(F\\) is continuous and \\(F'=f\\) except at finitely many points, apply the Fundamental Theorem of Calculus on each differentiable piece and add; continuity of \\(F\\) at the breakpoints cancels the intermediate terms."
      },
      {
        "from": "无穷间断 · Infinite discontinuity",
        "to": "反常积分 · Improper integral",
        "note": "若函数在 \\(c\\) 附近无界，例如 \\(\\dfrac{1}{x^{2}}\\) 在 \\(0\\) 附近，黎曼和可能无界；这需要另行定义反常积分，不属于本主题的推广。 · If the function is unbounded near \\(c\\), for example \\(\\dfrac{1}{x^{2}}\\) near \\(0\\), Riemann sums may be unbounded; this requires a separate improper-integral definition and is not part of this extension."
      }
    ],
    "conditions": [
      "被积函数在 \\([a,b]\\) 上有界；无界函数可能属于反常积分。 · The integrand is bounded on \\([a,b]\\); an unbounded function may require an improper integral.",
      "间断点只能是可去间断或跳跃间断，且在 AP 范围内为有限个。 · Discontinuities are only removable or jump discontinuities, and in AP scope there are finitely many of them.",
      "在每个跳跃点处把区间拆开，分别计算两侧的定积分，再用区间可加性相加。 · At each jump, split the interval, evaluate the definite integral on each side, and add using additivity.",
      "可去间断点可以先补成连续延拓；该点的函数值无论取多少都不影响积分。 · A removable discontinuity may be repaired by a continuous extension; the assigned value at that point does not affect the integral.",
      "使用分段微积分基本定理时，要求原函数 \\(F\\) 在整个 \\([a,b]\\) 上连续，并且除有限个点外 \\(F'=f\\)。 · When using a piecewise Fundamental Theorem of Calculus, the antiderivative \\(F\\) must be continuous on all of \\([a,b]\\) and satisfy \\(F'=f\\) except at finitely many points.",
      "无穷间断、竖直渐近或无限区间不属于普通定积分的推广，必须用反常积分处理。 · Infinite discontinuities, vertical asymptotes, and infinite intervals are not covered by the ordinary definite-integral extension; they require improper integrals."
    ],
    "keyPoints": [
      "定积分是黎曼和的极限；函数不必处处连续，只要在区间上有界且只有有限个可去或跳跃间断即可积。 · A definite integral is a limit of Riemann sums; the function need not be continuous everywhere—boundedness plus finitely many removable or jump discontinuities is enough for integrability.",
      "单个点的函数值不影响定积分；可去间断点可以直接用连续延拓替代。 · The value at a single point does not affect the definite integral; a removable discontinuity may be replaced by its continuous extension.",
      "跳跃间断点把区间分成两段，积分等于两段积分之和；不要用两端函数值的平均乘以区间长度。 · A jump divides the interval into two pieces, and the integral is the sum of the two piecewise integrals; do not average the endpoint values and multiply by the interval length.",
      "线性、区间可加、反向上下限与零区间性质对分段连续函数仍然成立。 · Linearity, additivity, reversed limits, and the zero-width property remain valid for piecewise continuous functions.",
      "图像上有向面积按段相加；跳跃处的竖直边没有宽度，不贡献面积。 · On a graph, add the signed areas piece by piece; the vertical edge at a jump has no width and contributes no area.",
      "无穷间断不是跳跃；若函数在间断点附近无界，应识别为反常积分。 · An infinite discontinuity is not a jump; if the function is unbounded near the point, recognize it as an improper integral.",
      "用分段原函数时，先保证原函数连续，再逐段使用微积分基本定理。 · With a piecewise antiderivative, first ensure it is continuous, then apply the Fundamental Theorem of Calculus piece by piece."
    ],
    "misconceptions": [
      "认为函数必须在整个区间上连续才能积分；有界且只有有限个可去或跳跃间断的函数仍然可积。 · Thinking a function must be continuous on the whole interval to be integrable; bounded functions with finitely many removable or jump discontinuities are still integrable.",
      "认为改变 \\(f(c)\\) 的值会改变积分；单个点的函数值对黎曼和的极限没有贡献。 · Thinking changing \\(f(c)\\) changes the integral; a single point's value contributes nothing to the limit of Riemann sums.",
      "把跳跃间断当成无穷间断，误以为积分一定发散；跳跃间断两侧都有有限单侧极限，积分仍然存在。 · Mistaking a jump for an infinite discontinuity and concluding the integral diverges; both one-sided limits at a jump are finite, so the integral still exists.",
      "在跳跃点处忘记拆区间，直接用某一个分支的公式算遍整个区间。 · Forgetting to split at a jump and using one branch's formula across the whole interval.",
      "对可去间断直接代入原式得到未定义值，忘记先化简或用连续延拓。 · Substituting directly into a removable discontinuity and getting an undefined value, instead of simplifying or using the continuous extension.",
      "认为微积分基本定理要求原函数在每个点都可导；只要 \\(F\\) 连续且除有限点外 \\(F'=f\\)，就可以分段使用。 · Thinking the Fundamental Theorem of Calculus requires the antiderivative to be differentiable everywhere; it is enough that \\(F\\) is continuous and \\(F'=f\\) except at finitely many points.",
      "把有限个间断点与无限个间断点混为一谈；AP 范围要求的是有限个可去或跳跃间断。 · Confusing finitely many discontinuities with infinitely many; AP scope requires finitely many removable or jump discontinuities."
    ],
    "examples": [
      {
        "title": "例 1 · 可去间断 · Example 1: Removable discontinuity",
        "prompt": "设 \\(f(x)=\\dfrac{x^{2}-4}{x-2}\\)（\\(x\\ne 2\\)），且 \\(f(2)=5\\)。求 \\(\\displaystyle\\int_1^3 f(x)\\,\\mathrm{d}x\\)。 · Let \\(f(x)=\\dfrac{x^{2}-4}{x-2}\\) for \\(x\\ne 2\\), with \\(f(2)=5\\). Find \\(\\displaystyle\\int_1^3 f(x)\\,\\mathrm{d}x\\).",
        "steps": [
          "识别 \\(x=2\\) 是可去间断点：\\(\\lim_{x\\to 2}f(x)=4\\)，但 \\(f(2)=5\\)。 · Identify \\(x=2\\) as a removable discontinuity: \\(\\lim_{x\\to 2}f(x)=4\\), but \\(f(2)=5\\).",
          "在积分中可用连续延拓 \\(x+2\\) 替代 \\(f\\)，因为只改变一个点的值不影响定积分。 · Replace \\(f\\) by its continuous extension \\(x+2\\) in the integral, since changing one point's value does not affect the definite integral.",
          "\\(\\displaystyle\\int_1^3(x+2)\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}+2x\\right]_{1}^{3}=\\dfrac{21}{2}-\\dfrac{5}{2}=8\\)。 · Evaluate: \\(\\displaystyle\\int_1^3(x+2)\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}+2x\\right]_{1}^{3}=\\dfrac{21}{2}-\\dfrac{5}{2}=8\\)."
        ],
        "solution": "积分为 \\(8\\)；\\(f(2)=5\\) 这个值不参与积分。 · The integral is \\(8\\); the assigned value \\(f(2)=5\\) does not enter the integral.",
        "solutionLatex": "\\int_1^3 f(x)\\,\\mathrm{d}x=\\int_1^3(x+2)\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}+2x\\right]_{1}^{3}=8"
      },
      {
        "title": "例 2 · 跳跃间断 · Example 2: Jump discontinuity",
        "prompt": "设 \\(f(x)=x+1\\)（\\(0\\le x<2\\)），\\(f(x)=x^{2}+1\\)（\\(2\\le x\\le 3\\)）。求 \\(\\displaystyle\\int_0^3 f(x)\\,\\mathrm{d}x\\)。 · Let \\(f(x)=x+1\\) for \\(0\\le x<2\\) and \\(f(x)=x^{2}+1\\) for \\(2\\le x\\le 3\\). Find \\(\\displaystyle\\int_0^3 f(x)\\,\\mathrm{d}x\\).",
        "steps": [
          "\\(x=2\\) 是跳跃间断点：左极限为 \\(3\\)，右极限与右值为 \\(5\\)，两侧不相等。 · \\(x=2\\) is a jump discontinuity: the left limit is \\(3\\), while the right limit and value are \\(5\\), so the two sides do not match.",
          "\\(\\displaystyle\\int_0^2(x+1)\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}+x\\right]_{0}^{2}=4\\)。 · \\(\\displaystyle\\int_0^2(x+1)\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}+x\\right]_{0}^{2}=4\\).",
          "\\(\\displaystyle\\int_2^3(x^{2}+1)\\,\\mathrm{d}x=\\left[\\dfrac{x^{3}}{3}+x\\right]_{2}^{3}=12-\\dfrac{14}{3}=\\dfrac{22}{3}\\)。 · \\(\\displaystyle\\int_2^3(x^{2}+1)\\,\\mathrm{d}x=\\left[\\dfrac{x^{3}}{3}+x\\right]_{2}^{3}=12-\\dfrac{14}{3}=\\dfrac{22}{3}\\).",
          "相加：\\(4+\\dfrac{22}{3}=\\dfrac{34}{3}\\)。 · Add: \\(4+\\dfrac{22}{3}=\\dfrac{34}{3}\\)."
        ],
        "solution": "积分为 \\(\\dfrac{34}{3}\\approx 11.33\\)。 · The integral is \\(\\dfrac{34}{3}\\approx 11.33\\).",
        "solutionLatex": "\\int_0^3 f(x)\\,\\mathrm{d}x=\\int_0^2(x+1)\\,\\mathrm{d}x+\\int_2^3(x^{2}+1)\\,\\mathrm{d}x=4+\\dfrac{22}{3}=\\dfrac{34}{3}"
      },
      {
        "title": "例 3 · 性质与反向上下限 · Example 3: Properties and reversed limits",
        "prompt": "已知 \\(\\displaystyle\\int_0^2 f(x)\\,\\mathrm{d}x=5\\)，\\(\\displaystyle\\int_2^5 f(x)\\,\\mathrm{d}x=-2\\)，\\(\\displaystyle\\int_0^5 g(x)\\,\\mathrm{d}x=7\\)。设 \\(f\\) 可以在 \\(x=2\\) 处有跳跃间断，求 \\(\\displaystyle\\int_0^5[3f(x)+2g(x)]\\,\\mathrm{d}x\\) 与 \\(\\displaystyle\\int_5^0 f(x)\\,\\mathrm{d}x\\)。 · Given \\(\\displaystyle\\int_0^2 f(x)\\,\\mathrm{d}x=5\\), \\(\\displaystyle\\int_2^5 f(x)\\,\\mathrm{d}x=-2\\), and \\(\\displaystyle\\int_0^5 g(x)\\,\\mathrm{d}x=7\\). Suppose \\(f\\) may have a jump at \\(x=2\\). Find \\(\\displaystyle\\int_0^5[3f(x)+2g(x)]\\,\\mathrm{d}x\\) and \\(\\displaystyle\\int_5^0 f(x)\\,\\mathrm{d}x\\).",
        "steps": [
          "区间可加：\\(\\displaystyle\\int_0^5 f=\\int_0^2 f+\\int_2^5 f=5+(-2)=3\\)。即使 \\(f\\) 在 \\(2\\) 处跳跃，这一步仍然成立。 · Additivity: \\(\\displaystyle\\int_0^5 f=\\int_0^2 f+\\int_2^5 f=5+(-2)=3\\). This remains valid even if \\(f\\) jumps at \\(2\\).",
          "线性：\\(\\displaystyle\\int_0^5[3f+2g]=3\\int_0^5 f+2\\int_0^5 g=3(3)+2(7)=23\\)。 · Linearity: \\(\\displaystyle\\int_0^5[3f+2g]=3\\int_0^5 f+2\\int_0^5 g=3(3)+2(7)=23\\).",
          "反向上下限：\\(\\displaystyle\\int_5^0 f=-\\int_0^5 f=-3\\)。 · Reversed limits: \\(\\displaystyle\\int_5^0 f=-\\int_0^5 f=-3\\)."
        ],
        "solution": "\\(\\displaystyle\\int_0^5[3f+2g]\\,\\mathrm{d}x=23\\)，\\(\\displaystyle\\int_5^0 f\\,\\mathrm{d}x=-3\\)。 · The values are \\(23\\) and \\(-3\\).",
        "solutionLatex": "\\int_0^5[3f(x)+2g(x)]\\,\\mathrm{d}x=3(3)+2(7)=23,\\qquad \\int_5^0 f(x)\\,\\mathrm{d}x=-3"
      },
      {
        "title": "例 4 · 分段原函数与论证 · Example 4: Piecewise antiderivative and justification",
        "prompt": "设 \\(f(x)=x\\)（\\(0\\le x<1\\)），\\(f(x)=x+2\\)（\\(1\\le x\\le 2\\)）。某学生写 \\(\\displaystyle\\int_0^2 f(x)\\,\\mathrm{d}x=\\int_0^2(x+2)\\,\\mathrm{d}x=6\\)。指出错误，并用分段积分与连续分段原函数两种方法求正确值。 · Let \\(f(x)=x\\) for \\(0\\le x<1\\) and \\(f(x)=x+2\\) for \\(1\\le x\\le 2\\). A student writes \\(\\displaystyle\\int_0^2 f(x)\\,\\mathrm{d}x=\\int_0^2(x+2)\\,\\mathrm{d}x=6\\). Identify the error and find the correct value both by splitting the integral and by using a continuous piecewise antiderivative.",
        "steps": [
          "\\(x=1\\) 是跳跃间断点：左极限为 \\(1\\)，右值为 \\(3\\)；必须拆区间。 · \\(x=1\\) is a jump: the left limit is \\(1\\) and the right value is \\(3\\); the interval must be split.",
          "分段积分：\\(\\displaystyle\\int_0^1 x\\,\\mathrm{d}x=\\dfrac{1}{2}\\)，\\(\\displaystyle\\int_1^2(x+2)\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}+2x\\right]_{1}^{2}=6-\\dfrac{5}{2}=\\dfrac{7}{2}\\)。 · Split: \\(\\displaystyle\\int_0^1 x\\,\\mathrm{d}x=\\dfrac{1}{2}\\) and \\(\\displaystyle\\int_1^2(x+2)\\,\\mathrm{d}x=\\left[\\dfrac{x^{2}}{2}+2x\\right]_{1}^{2}=6-\\dfrac{5}{2}=\\dfrac{7}{2}\\).",
          "相加得 \\(\\dfrac{1}{2}+\\dfrac{7}{2}=4\\)。学生的 \\(6\\) 来自把右分支公式 \\(x+2\\) 用到了整个 \\([0,2]\\)，忽略了左分支。 · Add to get \\(\\dfrac{1}{2}+\\dfrac{7}{2}=4\\). The student's \\(6\\) comes from using the right branch \\(x+2\\) on all of \\([0,2]\\) and ignoring the left branch.",
          "连续分段原函数：取 \\(F(x)=\\dfrac{x^{2}}{2}\\)（\\(0\\le x\\le 1\\)），\\(F(x)=\\dfrac{x^{2}}{2}+2x-2\\)（\\(1\\le x\\le 2\\)）。在 \\(x=1\\) 处两式都等于 \\(\\dfrac{1}{2}\\)，故 \\(F\\) 连续；除 \\(x=1\\) 外 \\(F'=f\\)。 · Continuous piecewise antiderivative: take \\(F(x)=\\dfrac{x^{2}}{2}\\) for \\(0\\le x\\le 1\\), and \\(F(x)=\\dfrac{x^{2}}{2}+2x-2\\) for \\(1\\le x\\le 2\\). Both formulas equal \\(\\dfrac{1}{2}\\) at \\(x=1\\), so \\(F\\) is continuous; \\(F'=f\\) except at \\(x=1\\).",
          "\\(F(2)-F(0)=(2+4-2)-0=4\\)，与分段积分一致。 · Then \\(F(2)-F(0)=(2+4-2)-0=4\\), matching the split integral."
        ],
        "solution": "正确值为 \\(4\\)。论证要点：跳跃点必须拆区间；分段原函数只要连续，就可以逐段使用微积分基本定理。 · The correct value is \\(4\\). The key justification: split at the jump, and a continuous piecewise antiderivative may be used piece by piece in the Fundamental Theorem of Calculus.",
        "solutionLatex": "\\int_0^2 f(x)\\,\\mathrm{d}x=\\dfrac{1}{2}+\\dfrac{7}{2}=4,\\qquad F(x)=\\begin{cases}\\dfrac{x^{2}}{2},&0\\le x\\le 1,\\\\ \\dfrac{x^{2}}{2}+2x-2,&1\\le x\\le 2,\\end{cases}\\quad F(2)-F(0)=4"
      }
    ],
    "examTips": [
      "先判断间断类型：可去间断用连续延拓，跳跃间断在间断点拆区间，无穷间断则要改用反常积分。 · First classify the discontinuity: use a continuous extension for a removable one, split at a jump, and switch to an improper integral for an infinite discontinuity.",
      "单个点的函数值永远不影响定积分；不要因为 \\(f(c)\\) 未定义就判定不可积。 · A single point's value never affects a definite integral; do not declare the function nonintegrable just because \\(f(c)\\) is undefined.",
      "分段函数先写分段积分，再把各段结果相加；区间可加性可以跨间断点使用。 · For a piecewise function, write the integral piece by piece and add the results; additivity may be used across a discontinuity.",
      "反向上下限提出负号，零宽区间积分为零；这两条常与线性性质一起出现在选择题中。 · Reversing the limits introduces a minus sign, and a zero-width interval has integral zero; these often appear with linearity in multiple-choice questions.",
      "图像题把每段的有向面积相加；跳跃处的竖直边没有宽度，不贡献面积。 · On graph questions, add the signed areas of each piece; the vertical edge at a jump has no width and contributes no area.",
      "用分段原函数时，先检查 \\(F\\) 在断点处连续，再逐段使用微积分基本定理；不要要求 \\(F\\) 在断点处可导。 · With a piecewise antiderivative, check that \\(F\\) is continuous at the breakpoints, then apply the Fundamental Theorem of Calculus piece by piece; do not require \\(F\\) to be differentiable at the breakpoints."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.2",
        "title": "黎曼和近似 · Approximating Areas with Riemann Sums",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.5",
        "title": "定积分解释 · Interpreting the Behavior of Accumulation Functions Involving Graphs",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.7",
        "title": "定积分求值 · The Fundamental Theorem of Calculus and Definite Integrals",
        "relation": "related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u6",
        "code": "6.12",
        "title": "反常积分 · Evaluating Improper Integrals",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u6",
    "connections": [
      "上游：6.2 黎曼和与 6.3 定积分记号给出定义；6.5 把定积分解释为有向面积。 · Upstream: 6.2 Riemann sums and 6.3 definite-integral notation supply the definition; 6.5 interprets the definite integral as signed area.",
      "本主题：把定义推广到有限个可去或跳跃间断的函数，并用线性、区间可加、反向与零区间性质拆分计算。 · This topic: extend the definition to functions with finitely many removable or jump discontinuities, and split calculations with linearity, additivity, reversed limits, and zero-width intervals.",
      "下游：6.7 用微积分基本定理求值，分段函数要逐段使用；6.12 处理无穷间断与无限区间，属于反常积分。 · Downstream: 6.7 evaluates with the Fundamental Theorem of Calculus, piece by piece for piecewise functions; 6.12 treats infinite discontinuities and infinite intervals as improper integrals.",
      "跨学科：分段速率、阶梯电价、分段密度等实际情境仍可用定积分求累积量；间断只影响拆分方式，不影响可积性。 · Cross-disciplinary: piecewise rates, tiered pricing, and piecewise densities still use definite integrals for accumulation; discontinuities affect how the integral is split, not whether it exists.",
      "AP 对应：FUN-6.A.3 要求说明定积分的定义可以推广到有可去或跳跃间断的函数，并能据此计算分段函数的积分。 · AP alignment: FUN-6.A.3 asks students to explain that the definition of the definite integral extends to functions with removable or jump discontinuities and to use that extension for piecewise functions."
    ],
    "intuitionDetailed": "把黎曼和想成一排细长矩形。可去间断只是一个点上的洞：无论矩形是否取到那个点，它的宽度都趋于零，贡献随之消失。跳跃间断是一道台阶：在台阶两侧分别数有向面积，再把两段相加；台阶本身的竖直边没有宽度，不产生面积。因此“有界 + 有限个可去或跳跃间断”足以保证积分存在。无穷间断则不同：函数在点附近无界，矩形高度可以无限增大，面积可能发散，必须另行定义反常积分。图像上，先找间断点，再在间断点处把区间切开；每一段都按普通定积分处理，最后相加。 · Think of a Riemann sum as a row of thin rectangles. A removable discontinuity is just a hole at one point: whether or not a rectangle samples that point, its width tends to zero, so its contribution vanishes. A jump discontinuity is a step: count signed area on each side and add the two pieces; the vertical edge itself has no width and produces no area. Thus “bounded plus finitely many removable or jump discontinuities” is enough to guarantee that the integral exists. An infinite discontinuity is different: the function is unbounded near the point, rectangle heights can grow without bound, and the area may diverge, so an improper integral must be defined separately. On a graph, locate the discontinuities first, cut the interval there, treat each piece as an ordinary definite integral, and add the results.",
    "development": [
      "回顾黎曼和定义与可积性：积分是和的极限，而不是“函数必须连续”。 · Review the Riemann-sum definition and integrability: the integral is a limit of sums, not a requirement that the function be continuous.",
      "分类间断点：可去、跳跃、无穷；只有前两类在有限个时可由本主题处理。 · Classify discontinuities as removable, jump, or infinite; only the first two, in finite number, are handled by this extension.",
      "可去间断：写出连续延拓，说明改一个点不改变积分。 · For a removable discontinuity, write the continuous extension and explain why changing one point does not change the integral.",
      "跳跃间断：在跳跃点拆区间，分别积分后相加，并用图像核对有向面积。 · For a jump, split the interval at the jump, integrate each piece, add, and check against signed areas on the graph.",
      "分段原函数：构造连续的分段 \\(F\\)，逐段验证 \\(F'=f\\)，再用 \\(F(b)-F(a)\\) 求值。 · For a piecewise antiderivative, construct a continuous piecewise \\(F\\), verify \\(F'=f\\) on each piece, then evaluate \\(F(b)-F(a)\\).",
      "边界检查：若出现无界或竖直渐近，停止使用普通定积分，改判为反常积分。 · Boundary check: if the function is unbounded or has a vertical asymptote, stop using the ordinary definite integral and reclassify the problem as improper."
    ],
    "checks": [
      "为什么改变 \\(f(c)\\) 的值不改变 \\(\\int_a^b f(x)\\,\\mathrm{d}x\\)？请用黎曼和说明。 · Why does changing \\(f(c)\\) not change \\(\\int_a^b f(x)\\,\\mathrm{d}x\\)? Explain with Riemann sums.",
      "在跳跃间断点 \\(c\\) 处，为什么 \\(\\int_a^b f=\\int_a^c f+\\int_c^b f\\) 仍然成立？ · Why does \\(\\int_a^b f=\\int_a^c f+\\int_c^b f\\) still hold at a jump discontinuity \\(c\\)?",
      "\\(f(x)=\\dfrac{1}{x^{2}}\\) 在 \\([-1,1]\\) 上的积分是否属于本主题的推广？如果不是，它属于哪类问题？ · Is the integral of \\(f(x)=\\dfrac{1}{x^{2}}\\) on \\([-1,1]\\) covered by this extension? If not, what type of problem is it?",
      "给定一个含跳跃点的分段函数图像，如何用有向面积写出它的定积分？ · Given the graph of a piecewise function with a jump, how do you write its definite integral using signed areas?",
      "若 \\(F\\) 在 \\([a,b]\\) 上连续，且除 \\(x=1\\) 外 \\(F'(x)=f(x)\\)，如何用微积分基本定理求 \\(\\int_a^b f\\)？ · If \\(F\\) is continuous on \\([a,b]\\) and \\(F'(x)=f(x)\\) except at \\(x=1\\), how do you use the Fundamental Theorem of Calculus to find \\(\\int_a^b f\\)?"
    ],
    "vocabulary": [
      {
        "termZh": "可去间断点",
        "termEn": "removable discontinuity",
        "defZh": "极限存在但函数值未定义或与极限不同；补定义后成为连续函数。",
        "defEn": "A discontinuity where the limit exists but the value is undefined or differs from the limit; redefining the point makes the function continuous."
      },
      {
        "termZh": "跳跃间断点",
        "termEn": "jump discontinuity",
        "defZh": "左右单侧极限都存在但不等；图像出现台阶。",
        "defEn": "A discontinuity where both one-sided limits exist but are unequal; the graph has a step."
      },
      {
        "termZh": "黎曼可积",
        "termEn": "Riemann integrable",
        "defZh": "黎曼和的极限存在且与样本点选择无关。",
        "defEn": "The limit of Riemann sums exists and is independent of the choice of sample points."
      },
      {
        "termZh": "连续延拓",
        "termEn": "continuous extension",
        "defZh": "在可去间断点补上极限值后得到的连续函数。",
        "defEn": "The continuous function obtained by assigning the limit value at a removable discontinuity."
      },
      {
        "termZh": "零面积集合",
        "termEn": "measure-zero set",
        "defZh": "不贡献面积的集合，例如有限个点；改变这些点上的函数值不影响积分。",
        "defEn": "A set that contributes no area, such as finitely many points; changing function values there does not affect the integral."
      },
      {
        "termZh": "分段连续",
        "termEn": "piecewise continuous",
        "defZh": "函数在有限个点外连续，且在这些点只有可去或跳跃间断。",
        "defEn": "A function continuous except at finitely many points, where it has only removable or jump discontinuities."
      },
      {
        "termZh": "区间可加性",
        "termEn": "additivity over intervals",
        "defZh": "\\(\\int_a^b f=\\int_a^c f+\\int_c^b f\\)；\\(c\\) 可以是间断点。",
        "defEn": "\\(\\int_a^b f=\\int_a^c f+\\int_c^b f\\); the point \\(c\\) may be a discontinuity."
      },
      {
        "termZh": "反常积分",
        "termEn": "improper integral",
        "defZh": "对无界函数或无限区间的积分，用极限另行定义；不属于普通定积分的间断推广。",
        "defEn": "An integral over an unbounded function or an infinite interval, defined by a limit; it is not the same as extending the ordinary integral across a jump."
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
        "latex": "\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a),\\quad F'(x)=f(x)",
        "note": "微积分基本定理：用原函数求定积分。 · Fundamental Theorem of Calculus: evaluate with an antiderivative."
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
        "title": "定积分性质的应用",
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
        "latex": "\\int f(x)\\,\\mathrm{d}x=F(x)+C,\\quad F'(x)=f(x);\\qquad \\int x^{n}\\,\\mathrm{d}x=\\dfrac{x^{n+1}}{n+1}+C\\ (n\\ne -1)",
        "note": "不定积分表示原函数族；别忘积分常数。 · Indefinite integrals give a family of antiderivatives; include the constant."
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
        "latex": "\\dfrac{P(x)}{(x-a)(x-b)}=\\dfrac{A}{x-a}+\\dfrac{B}{x-b},\\quad \\int\\dfrac{1}{x-a}\\,\\mathrm{d}x=\\ln|x-a|+C",
        "note": "线性部分分式与其他积分技巧。 · Linear partial fractions and other integration techniques."
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
    "formulas": [],
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
