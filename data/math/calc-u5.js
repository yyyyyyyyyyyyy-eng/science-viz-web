export const UNIT = {
  "id": "calc-u5",
  "code": "5",
  "titleZh": "导数的分析应用",
  "titleEn": "Analytical Applications of Differentiation",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "5.1": {
    "id": "math/calc-u5/5.1",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.1",
    "titleZh": "中值定理",
    "titleEn": "Using the Mean Value Theorem",
    "layer": "ap",
    "summary": "中值定理 · Using the Mean Value Theorem",
    "learningObjectives": [
      "能陈述「中值定理」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Using the Mean Value Theorem：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「中值定理」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "中值定理（Using the Mean Value Theorem）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「中值定理」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(c)=\\dfrac{f(b)-f(a)}{b-a}",
        "note": "中值定理：存在 c 使瞬时变化率等于平均变化率。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「中值定理」的工作方程或机制链。"
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
      "掌握 5.1「中值定理」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「中值定理」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「中值定理」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「中值定理」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「中值定理」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「中值定理」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.2",
        "title": "极值定理",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「中值定理」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「中值定理」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「中值定理」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "中值定理",
        "termEn": "Mean Value Theorem",
        "defZh": "若 \\(f\\) 在 \\([a,b]\\) 连续、在 \\((a,b)\\) 可导，则存在 \\(c\\) 使 \\(f'(c)=\\dfrac{f(b)-f(a)}{b-a}\\)。",
        "defEn": "If \\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), then some \\(c\\) satisfies \\(f'(c)=\\dfrac{f(b)-f(a)}{b-a}\\)."
      },
      {
        "termZh": "割线斜率",
        "termEn": "secant slope",
        "defZh": "连接端点的直线斜率 \\(\\dfrac{f(b)-f(a)}{b-a}\\)。",
        "defEn": "The slope of the line through the endpoints, \\(\\dfrac{f(b)-f(a)}{b-a}\\)."
      },
      {
        "termZh": "瞬时变化率",
        "termEn": "instantaneous rate of change",
        "defZh": "\\(f'(c)\\)，即某点处切线的斜率。",
        "defEn": "\\(f'(c)\\), the slope of the tangent line at a point."
      },
      {
        "termZh": "开区间可导",
        "termEn": "differentiability on an open interval",
        "defZh": "定理要求 \\((a,b)\\) 内每一点都可导。",
        "defEn": "The theorem requires differentiability at every point of \\((a,b)\\)."
      },
      {
        "termZh": "闭区间连续",
        "termEn": "continuity on a closed interval",
        "defZh": "定理要求 \\(f\\) 在 \\([a,b]\\) 上连续。",
        "defEn": "The theorem requires \\(f\\) to be continuous on \\([a,b]\\)."
      },
      {
        "termZh": "罗尔定理",
        "termEn": "Rolle's Theorem",
        "defZh": "中值定理在 \\(f(a)=f(b)\\) 时的特例，此时存在 \\(c\\) 使 \\(f'(c)=0\\)。",
        "defEn": "The special case of the Mean Value Theorem when \\(f(a)=f(b)\\), giving some \\(c\\) with \\(f'(c)=0\\)."
      }
    ]
  },
  "5.2": {
    "id": "math/calc-u5/5.2",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.2",
    "titleZh": "极值定理",
    "titleEn": "Extreme Value Theorem, Global Versus Local Extrema, and Critical Points",
    "layer": "ap",
    "summary": "极值定理 · Extreme Value Theorem, Global Versus Local Extrema, and Critical Points",
    "learningObjectives": [
      "能陈述「极值定理」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Extreme Value Theorem, Global Versus Local Extrema, and Critical Points：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「极值定理」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "极值定理（Extreme Value Theorem, Global Versus Local Extrema, and Critical Points）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「极值定理」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f\\text{ 在 }[a,b]\\text{ 连续}\\Rightarrow\\exists c,d,\\ f(c)\\le f(x)\\le f(d)",
        "note": "极值定理：闭区间连续函数必取得最大值与最小值。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「极值定理」的工作方程或机制链。"
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
      "掌握 5.2「极值定理」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「极值定理」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「极值定理」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「极值定理」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「极值定理」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「极值定理」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.1",
        "title": "中值定理",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.3",
        "title": "增减性",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「极值定理」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「极值定理」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「极值定理」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "极值定理",
        "termEn": "Extreme Value Theorem",
        "defZh": "闭区间上的连续函数必取得全局最大值和最小值。",
        "defEn": "A continuous function on a closed interval attains both a global maximum and a global minimum."
      },
      {
        "termZh": "全局极大值",
        "termEn": "global maximum",
        "defZh": "在整个定义域上函数的最大取值。",
        "defEn": "The largest function value over the entire domain."
      },
      {
        "termZh": "全局极小值",
        "termEn": "global minimum",
        "defZh": "在整个定义域上函数的最小取值。",
        "defEn": "The smallest function value over the entire domain."
      },
      {
        "termZh": "局部极大值",
        "termEn": "local maximum",
        "defZh": "在某邻域内最大的函数值。",
        "defEn": "A function value that is largest within some neighborhood."
      },
      {
        "termZh": "局部极小值",
        "termEn": "local minimum",
        "defZh": "在某邻域内最小的函数值。",
        "defEn": "A function value that is smallest within some neighborhood."
      },
      {
        "termZh": "临界点",
        "termEn": "critical point",
        "defZh": "满足 \\(f'(c)=0\\) 或 \\(f'(c)\\) 不存在的内点 \\(c\\)。",
        "defEn": "An interior point \\(c\\) where \\(f'(c)=0\\) or \\(f'(c)\\) does not exist."
      }
    ]
  },
  "5.3": {
    "id": "math/calc-u5/5.3",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.3",
    "titleZh": "增减性",
    "titleEn": "Determining Intervals of Increase and Decrease",
    "layer": "ap",
    "summary": "增减性 · Determining Intervals of Increase and Decrease",
    "learningObjectives": [
      "能陈述「增减性」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Determining Intervals of Increase and Decrease：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「增减性」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "增减性（Determining Intervals of Increase and Decrease）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「增减性」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(x)>0\\Rightarrow f\\text{ 递增};\\quad f'(x)<0\\Rightarrow f\\text{ 递减}",
        "note": "一阶导数符号判断单调性。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「增减性」的工作方程或机制链。"
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
      "掌握 5.3「增减性」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「增减性」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「增减性」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「增减性」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「增减性」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「增减性」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.2",
        "title": "极值定理",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.4",
        "title": "一阶导数检验",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "extrema-concavity",
        "title": "极值与凹性"
      }
    ],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「增减性」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「增减性」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「增减性」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "递增",
        "termEn": "increasing",
        "defZh": "在区间上 \\(x_1<x_2\\) 时 \\(f(x_1)<f(x_2)\\)。",
        "defEn": "On an interval, \\(x_1<x_2\\) implies \\(f(x_1)<f(x_2)\\)."
      },
      {
        "termZh": "递减",
        "termEn": "decreasing",
        "defZh": "在区间上 \\(x_1<x_2\\) 时 \\(f(x_1)>f(x_2)\\)。",
        "defEn": "On an interval, \\(x_1<x_2\\) implies \\(f(x_1)>f(x_2)\\)."
      },
      {
        "termZh": "导数符号",
        "termEn": "sign of derivative",
        "defZh": "\\(f'(x)>0\\) 时递增，\\(f'(x)<0\\) 时递减。",
        "defEn": "\\(f'(x)>0\\) gives increase and \\(f'(x)<0\\) gives decrease."
      },
      {
        "termZh": "单调性",
        "termEn": "monotonicity",
        "defZh": "函数在区间上只增或只减的性质。",
        "defEn": "The property of a function that only increases or only decreases on an interval."
      },
      {
        "termZh": "临界点",
        "termEn": "critical point",
        "defZh": "把定义域分成增减区间的候选分界点。",
        "defEn": "A candidate boundary point that separates intervals of increase and decrease."
      }
    ]
  },
  "5.4": {
    "id": "math/calc-u5/5.4",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.4",
    "titleZh": "一阶导数检验",
    "titleEn": "Using the First Derivative Test to Determine Relative Local Extrema",
    "layer": "ap",
    "summary": "一阶导数检验 · Using the First Derivative Test to Determine Relative Local Extrema",
    "learningObjectives": [
      "能陈述「一阶导数检验」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Using the First Derivative Test to Determine Relative Local Extrema：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「一阶导数检验」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "一阶导数检验（Using the First Derivative Test to Determine Relative Local Extrema）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「一阶导数检验」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「一阶导数检验」的工作方程或机制链。"
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
      "掌握 5.4「一阶导数检验」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「一阶导数检验」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「一阶导数检验」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「一阶导数检验」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「一阶导数检验」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「一阶导数检验」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.3",
        "title": "增减性",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.5",
        "title": "候选绝对极值",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「一阶导数检验」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「一阶导数检验」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「一阶导数检验」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "一阶导数检验",
        "termEn": "first derivative test",
        "defZh": "用 \\(f'\\) 在临界点两侧的符号变化判断局部极值。",
        "defEn": "Using the sign change of \\(f'\\) around a critical point to classify a local extremum."
      },
      {
        "termZh": "临界点",
        "termEn": "critical point",
        "defZh": "\\(f'(x)=0\\) 或 \\(f'(x)\\) 不存在的内点。",
        "defEn": "An interior point where \\(f'(x)=0\\) or \\(f'(x)\\) does not exist."
      },
      {
        "termZh": "局部极大值",
        "termEn": "local maximum",
        "defZh": "\\(f'\\) 由正变负处的函数值。",
        "defEn": "A function value where \\(f'\\) changes from positive to negative."
      },
      {
        "termZh": "局部极小值",
        "termEn": "local minimum",
        "defZh": "\\(f'\\) 由负变正处的函数值。",
        "defEn": "A function value where \\(f'\\) changes from negative to positive."
      },
      {
        "termZh": "符号表",
        "termEn": "sign chart",
        "defZh": "标出 \\(f'\\) 在各区间正负的表格。",
        "defEn": "A table showing the sign of \\(f'\\) on each interval."
      },
      {
        "termZh": "驻点",
        "termEn": "stationary point",
        "defZh": "\\(f'(x)=0\\) 的点。",
        "defEn": "A point where \\(f'(x)=0\\)."
      }
    ]
  },
  "5.5": {
    "id": "math/calc-u5/5.5",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.5",
    "titleZh": "候选绝对极值",
    "titleEn": "Using the Candidates Test to Determine Absolute Extrema",
    "layer": "ap",
    "summary": "候选绝对极值 · Using the Candidates Test to Determine Absolute Extrema",
    "learningObjectives": [
      "能陈述「候选绝对极值」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Using the Candidates Test to Determine Absolute Extrema：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「候选绝对极值」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "候选绝对极值（Using the Candidates Test to Determine Absolute Extrema）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「候选绝对极值」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{绝对极值}\\in\\{f(\\text{临界点}),\\ f(a),\\ f(b)\\}",
        "note": "闭区间最值：比较临界点与端点函数值。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「候选绝对极值」的工作方程或机制链。"
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
      "掌握 5.5「候选绝对极值」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「候选绝对极值」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「候选绝对极值」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「候选绝对极值」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「候选绝对极值」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「候选绝对极值」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.4",
        "title": "一阶导数检验",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.6",
        "title": "凹性与拐点",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「候选绝对极值」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「候选绝对极值」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「候选绝对极值」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "候选点检验",
        "termEn": "candidates test",
        "defZh": "比较所有临界点与端点处的函数值以找绝对极值。",
        "defEn": "Comparing function values at all critical points and endpoints to find absolute extrema."
      },
      {
        "termZh": "绝对极大值",
        "termEn": "absolute maximum",
        "defZh": "闭区间上函数的最大值。",
        "defEn": "The largest value of a function on a closed interval."
      },
      {
        "termZh": "绝对极小值",
        "termEn": "absolute minimum",
        "defZh": "闭区间上函数的最小值。",
        "defEn": "The smallest value of a function on a closed interval."
      },
      {
        "termZh": "端点",
        "termEn": "endpoint",
        "defZh": "闭区间的两个边界点 \\(a\\) 与 \\(b\\)，必须参与比较。",
        "defEn": "The two boundary points \\(a\\) and \\(b\\) of a closed interval, which must be included in the comparison."
      },
      {
        "termZh": "临界点",
        "termEn": "critical point",
        "defZh": "区间内部导数为零或不存在的点。",
        "defEn": "An interior point where the derivative is zero or fails to exist."
      }
    ]
  },
  "5.6": {
    "id": "math/calc-u5/5.6",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.6",
    "titleZh": "凹性与拐点",
    "titleEn": "Determining Concavity of Functions over Their Domains",
    "layer": "ap",
    "summary": "凹性与拐点 · Determining Concavity of Functions over Their Domains",
    "learningObjectives": [
      "能陈述「凹性与拐点」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Determining Concavity of Functions over Their Domains：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「凹性与拐点」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "凹性与拐点（Determining Concavity of Functions over Their Domains）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「凹性与拐点」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f''(x)>0\\Rightarrow\\text{凹向上};\\quad f''(x)<0\\Rightarrow\\text{凹向下}",
        "note": "二阶导数符号判断凹凸；变号处为拐点。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「凹性与拐点」的工作方程或机制链。"
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
      "掌握 5.6「凹性与拐点」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「凹性与拐点」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「凹性与拐点」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「凹性与拐点」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「凹性与拐点」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「凹性与拐点」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.5",
        "title": "候选绝对极值",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.7",
        "title": "二阶导数检验",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "extrema-concavity",
        "title": "极值与凹性"
      }
    ],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「凹性与拐点」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「凹性与拐点」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「凹性与拐点」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "凹性",
        "termEn": "concavity",
        "defZh": "\\(f''>0\\) 时凹向上，\\(f''<0\\) 时凹向下。",
        "defEn": "The graph is concave up when \\(f''>0\\) and concave down when \\(f''<0\\)."
      },
      {
        "termZh": "凹向上",
        "termEn": "concave up",
        "defZh": "切线位于曲线下方、\\(f'\\) 递增的区间。",
        "defEn": "An interval where the tangent lies below the curve and \\(f'\\) is increasing."
      },
      {
        "termZh": "凹向下",
        "termEn": "concave down",
        "defZh": "切线位于曲线上方、\\(f'\\) 递减的区间。",
        "defEn": "An interval where the tangent lies above the curve and \\(f'\\) is decreasing."
      },
      {
        "termZh": "拐点",
        "termEn": "inflection point",
        "defZh": "曲线凹性发生改变的点。",
        "defEn": "A point where the concavity of the curve changes."
      },
      {
        "termZh": "二阶导数 \\(f''\\)",
        "termEn": "second derivative",
        "defZh": "变化率的变化率，用来判断凹性。",
        "defEn": "The rate of change of the rate of change, used to determine concavity."
      },
      {
        "termZh": "候选拐点",
        "termEn": "candidate inflection point",
        "defZh": "\\(f''=0\\) 或 \\(f''\\) 不存在的点，还需检验凹性是否真的改变。",
        "defEn": "A point where \\(f''=0\\) or fails to exist; it still must be checked for an actual change of concavity."
      }
    ]
  },
  "5.7": {
    "id": "math/calc-u5/5.7",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.7",
    "titleZh": "二阶导数检验",
    "titleEn": "Using the Second Derivative Test to Determine Extrema",
    "layer": "ap",
    "summary": "二阶导数检验 · Using the Second Derivative Test to Determine Extrema",
    "learningObjectives": [
      "能陈述「二阶导数检验」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Using the Second Derivative Test to Determine Extrema：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「二阶导数检验」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "二阶导数检验（Using the Second Derivative Test to Determine Extrema）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「二阶导数检验」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「二阶导数检验」的工作方程或机制链。"
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
      "掌握 5.7「二阶导数检验」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「二阶导数检验」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「二阶导数检验」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「二阶导数检验」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「二阶导数检验」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「二阶导数检验」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.6",
        "title": "凹性与拐点",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.8",
        "title": "函数草图",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "extrema-concavity",
        "title": "极值与凹性"
      }
    ],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「二阶导数检验」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「二阶导数检验」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「二阶导数检验」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "二阶导数检验",
        "termEn": "second derivative test",
        "defZh": "在临界点用 \\(f''\\) 的符号判断局部极大或极小。",
        "defEn": "Using the sign of \\(f''\\) at a critical point to classify a local maximum or minimum."
      },
      {
        "termZh": "局部极大值",
        "termEn": "local maximum",
        "defZh": "\\(f'(c)=0\\) 且 \\(f''(c)<0\\) 时取得。",
        "defEn": "Attained when \\(f'(c)=0\\) and \\(f''(c)<0\\)."
      },
      {
        "termZh": "局部极小值",
        "termEn": "local minimum",
        "defZh": "\\(f'(c)=0\\) 且 \\(f''(c)>0\\) 时取得。",
        "defEn": "Attained when \\(f'(c)=0\\) and \\(f''(c)>0\\)."
      },
      {
        "termZh": "凹性",
        "termEn": "concavity",
        "defZh": "由二阶导数符号描述的曲线弯曲方向。",
        "defEn": "The direction of bending described by the sign of the second derivative."
      },
      {
        "termZh": "拐点",
        "termEn": "inflection point",
        "defZh": "凹性发生改变的点。",
        "defEn": "A point where concavity changes."
      },
      {
        "termZh": "临界点",
        "termEn": "critical point",
        "defZh": "一阶导数为零或不存在、用于检验的点。",
        "defEn": "A point where the first derivative is zero or undefined, used in the test."
      }
    ]
  },
  "5.8": {
    "id": "math/calc-u5/5.8",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.8",
    "titleZh": "函数草图",
    "titleEn": "Sketching Graphs of Functions and Their Derivatives",
    "layer": "ap",
    "summary": "函数草图 · Sketching Graphs of Functions and Their Derivatives",
    "learningObjectives": [
      "能陈述「函数草图」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Sketching Graphs of Functions and Their Derivatives：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「函数草图」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "函数草图（Sketching Graphs of Functions and Their Derivatives）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「函数草图」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "导数定义；用 f′ 与 f″ 的符号描绘草图。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「函数草图」的工作方程或机制链。"
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
      "f 在讨论区间上可导",
      "f'>0 递增，f'<0 递减",
      "f''>0 凹向上，f''<0 凹向下"
    ],
    "keyPoints": [
      "掌握 5.8「函数草图」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「函数草图」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「函数草图」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「函数草图」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「函数草图」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「函数草图」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.7",
        "title": "二阶导数检验",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.9",
        "title": "函数与导数关联",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「函数草图」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「函数草图」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「函数草图」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "函数图像",
        "termEn": "graph of a function",
        "defZh": "以 \\(x\\) 为横轴、\\(f(x)\\) 为纵轴的曲线。",
        "defEn": "The curve with \\(x\\) on the horizontal axis and \\(f(x)\\) on the vertical axis."
      },
      {
        "termZh": "导数图像",
        "termEn": "graph of the derivative",
        "defZh": "显示各点斜率 \\(f'(x)\\) 的图像。",
        "defEn": "A graph showing the slope \\(f'(x)\\) at each point."
      },
      {
        "termZh": "零点",
        "termEn": "zero",
        "defZh": "函数值为零或导数符号改变的点。",
        "defEn": "A point where the function value is zero or the derivative changes sign."
      },
      {
        "termZh": "极值点",
        "termEn": "extremum point",
        "defZh": "函数由增转减或由减转增的位置。",
        "defEn": "A point where the function changes from increasing to decreasing or the reverse."
      },
      {
        "termZh": "拐点",
        "termEn": "inflection point",
        "defZh": "二阶导数为零且凹性改变的位置。",
        "defEn": "A point where the second derivative is zero and concavity changes."
      }
    ]
  },
  "5.9": {
    "id": "math/calc-u5/5.9",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.9",
    "titleZh": "函数与导数关联",
    "titleEn": "Connecting a Function, Its First Derivative, and Its Second Derivative",
    "layer": "ap",
    "summary": "函数与导数关联 · Connecting a Function, Its First Derivative, and Its Second Derivative",
    "learningObjectives": [
      "能陈述「函数与导数关联」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Connecting a Function, Its First Derivative, and Its Second Derivative：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「函数与导数关联」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "函数与导数关联（Connecting a Function, Its First Derivative, and Its Second Derivative）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「函数与导数关联」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「函数与导数关联」的工作方程或机制链。"
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
      "掌握 5.9「函数与导数关联」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「函数与导数关联」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「函数与导数关联」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「函数与导数关联」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「函数与导数关联」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「函数与导数关联」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.8",
        "title": "函数草图",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.10",
        "title": "优化导论",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「函数与导数关联」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「函数与导数关联」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「函数与导数关联」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "函数值",
        "termEn": "function value",
        "defZh": "\\(f(x)\\)，由函数图像直接读出。",
        "defEn": "\\(f(x)\\), read directly from the graph of the function."
      },
      {
        "termZh": "一阶导数",
        "termEn": "first derivative",
        "defZh": "\\(f'(x)\\)，表示函数图像的斜率。",
        "defEn": "\\(f'(x)\\), representing the slope of the function's graph."
      },
      {
        "termZh": "二阶导数",
        "termEn": "second derivative",
        "defZh": "\\(f''(x)\\)，表示一阶导数的变化率与凹性。",
        "defEn": "\\(f''(x)\\), the rate of change of the first derivative and the concavity."
      },
      {
        "termZh": "凹向上",
        "termEn": "concave up",
        "defZh": "\\(f''(x)>0\\)，曲线开口向上。",
        "defEn": "\\(f''(x)>0\\), so the curve opens upward."
      },
      {
        "termZh": "凹向下",
        "termEn": "concave down",
        "defZh": "\\(f''(x)<0\\)，曲线开口向下。",
        "defEn": "\\(f''(x)<0\\), so the curve opens downward."
      },
      {
        "termZh": "斜率",
        "termEn": "slope",
        "defZh": "函数图像的倾斜程度，由 \\(f'(x)\\) 给出。",
        "defEn": "The steepness of a graph, given by \\(f'(x)\\)."
      }
    ]
  },
  "5.10": {
    "id": "math/calc-u5/5.10",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.10",
    "titleZh": "优化导论",
    "titleEn": "Introduction to Optimization Problems",
    "layer": "ap",
    "summary": "优化导论 · Introduction to Optimization Problems",
    "learningObjectives": [
      "能陈述「优化导论」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Introduction to Optimization Problems：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「优化导论」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "优化导论（Introduction to Optimization Problems）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「优化导论」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(x)=0\\text{ 或不存在}\\Rightarrow x\\text{ 为候选极值点}",
        "note": "优化：先找临界点，再比较目标函数值。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「优化导论」的工作方程或机制链。"
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
      "掌握 5.10「优化导论」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「优化导论」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「优化导论」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「优化导论」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「优化导论」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「优化导论」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.9",
        "title": "函数与导数关联",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.11",
        "title": "优化求解",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「优化导论」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「优化导论」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「优化导论」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "优化",
        "termEn": "optimization",
        "defZh": "在约束条件下寻找最大或最小值的过程。",
        "defEn": "Finding a maximum or minimum subject to constraints."
      },
      {
        "termZh": "目标函数",
        "termEn": "objective function",
        "defZh": "需要最大化或最小化的量。",
        "defEn": "The quantity to be maximized or minimized."
      },
      {
        "termZh": "约束条件",
        "termEn": "constraint",
        "defZh": "变量之间必须满足的方程或不等式。",
        "defEn": "An equation or inequality that the variables must satisfy."
      },
      {
        "termZh": "可行域",
        "termEn": "feasible region",
        "defZh": "满足全部约束的变量取值范围。",
        "defEn": "The set of variable values satisfying all constraints."
      },
      {
        "termZh": "极值检验",
        "termEn": "extremum test",
        "defZh": "用一阶或二阶导数确认候选点是否为最优点。",
        "defEn": "Using first or second derivatives to confirm whether a candidate is optimal."
      }
    ]
  },
  "5.11": {
    "id": "math/calc-u5/5.11",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.11",
    "titleZh": "优化求解",
    "titleEn": "Solving Optimization Problems",
    "layer": "ap",
    "summary": "优化求解 · Solving Optimization Problems",
    "learningObjectives": [
      "能陈述「优化求解」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Solving Optimization Problems：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「优化求解」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "优化求解（Solving Optimization Problems）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「优化求解」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\max_{x\\in[a,b]}f(x)=\\max\\{f(\\text{临界点}),\\ f(a),\\ f(b)\\}",
        "note": "闭区间优化：临界点与端点一起比较。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「优化求解」的工作方程或机制链。"
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
      "掌握 5.11「优化求解」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「优化求解」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「优化求解」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「优化求解」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「优化求解」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「优化求解」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.10",
        "title": "优化导论",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.12",
        "title": "隐式关系行为",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「优化求解」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「优化求解」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「优化求解」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "优化",
        "termEn": "optimization",
        "defZh": "在约束条件下求目标量的最大值或最小值。",
        "defEn": "Finding the maximum or minimum of a target quantity under constraints."
      },
      {
        "termZh": "目标函数",
        "termEn": "objective function",
        "defZh": "需要最大化或最小化的函数。",
        "defEn": "The function to be maximized or minimized."
      },
      {
        "termZh": "约束条件",
        "termEn": "constraint",
        "defZh": "变量之间必须满足的关系。",
        "defEn": "A relationship that the variables must satisfy."
      },
      {
        "termZh": "候选点",
        "termEn": "candidate point",
        "defZh": "临界点与区间端点，需逐一比较函数值。",
        "defEn": "Critical points and interval endpoints, compared by their function values."
      },
      {
        "termZh": "绝对极值",
        "termEn": "absolute extremum",
        "defZh": "整个可行域上的最大值或最小值。",
        "defEn": "The largest or smallest value over the entire feasible region."
      },
      {
        "termZh": "可行域",
        "termEn": "feasible region",
        "defZh": "满足全部约束的变量取值集合。",
        "defEn": "The set of variable values satisfying all constraints."
      }
    ]
  },
  "5.12": {
    "id": "math/calc-u5/5.12",
    "subject": "math",
    "chapterId": "calc-u5",
    "unitCode": "5",
    "unitTitleZh": "导数的分析应用",
    "unitTitleEn": "Analytical Applications of Differentiation",
    "code": "5.12",
    "titleZh": "隐式关系行为",
    "titleEn": "Exploring Behaviors of Implicit Relations",
    "layer": "ap",
    "summary": "隐式关系行为 · Exploring Behaviors of Implicit Relations",
    "learningObjectives": [
      "能陈述「隐式关系行为」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Exploring Behaviors of Implicit Relations：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「隐式关系行为」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "隐式关系行为（Exploring Behaviors of Implicit Relations）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「隐式关系行为」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\dfrac{F_x}{F_y}",
        "note": "隐式关系求导：F(x,y)=0 且 F_y≠0。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「隐式关系行为」的工作方程或机制链。"
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
      "掌握 5.12「隐式关系行为」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「隐式关系行为」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「隐式关系行为」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「隐式关系行为」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「隐式关系行为」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「隐式关系行为」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u5",
        "code": "5.11",
        "title": "优化求解",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「隐式关系行为」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「隐式关系行为」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「隐式关系行为」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "隐式关系",
        "termEn": "implicit relation",
        "defZh": "以方程 \\(F(x,y)=0\\) 而非 \\(y=f(x)\\) 给出的关系。",
        "defEn": "A relation given by an equation \\(F(x,y)=0\\) rather than \\(y=f(x)\\)."
      },
      {
        "termZh": "隐函数求导",
        "termEn": "implicit differentiation",
        "defZh": "对方程两边关于 \\(x\\) 求导并解出 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。",
        "defEn": "Differentiating both sides with respect to \\(x\\) and solving for \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)."
      },
      {
        "termZh": "切线斜率",
        "termEn": "tangent slope",
        "defZh": "由隐函数导数在给定点处求得的斜率。",
        "defEn": "The slope found from the implicit derivative at a given point."
      },
      {
        "termZh": "水平切线",
        "termEn": "horizontal tangent",
        "defZh": "满足 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0\\) 的点处的切线。",
        "defEn": "A tangent at a point where \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0\\)."
      },
      {
        "termZh": "竖直切线",
        "termEn": "vertical tangent",
        "defZh": "分母为零、斜率无界的点处的切线。",
        "defEn": "A tangent at a point where the denominator is zero and the slope is unbounded."
      },
      {
        "termZh": "二阶导数",
        "termEn": "second derivative",
        "defZh": "对隐函数一阶导数再次求导，用于判断凹性。",
        "defEn": "Differentiating the implicit first derivative again to determine concavity."
      }
    ]
  }
};
