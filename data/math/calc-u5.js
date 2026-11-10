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
    "summary": "二阶导数检验用 \\(f''(c)\\) 的符号把临界点分类为局部极大、局部极小或无法判定；若连续函数在区间上只有一个临界点且该点为局部极值，则该点也是同类型的绝对极值。 · The second derivative test uses the sign of \\(f''(c)\\) to classify a critical point as a local maximum, a local minimum, or inconclusive; if a continuous function has exactly one critical point on an interval and that point is a local extremum, then it is also the absolute extremum of the same type.",
    "learningObjectives": [
      "能用 \\(f'(c)=0\\) 与 \\(f''(c)\\) 的符号执行二阶导数检验，并说明 \\(f''(c)=0\\) 时检验失效。 · Apply the second derivative test with \\(f'(c)=0\\) and the sign of \\(f''(c)\\), and explain why the test is inconclusive when \\(f''(c)=0\\).",
      "能陈述并证明 FUN-4.A.8：连续函数在区间上只有一个临界点且该点为局部极值时，该点也是同类型的绝对极值。 · State and prove FUN-4.A.8: if a continuous function has exactly one critical point on an interval and that point is a local extremum, then it is also the absolute extremum of the same type.",
      "能区分局部极值与绝对极值，并在有多个临界点或闭区间端点时改用候选点检验。 · Distinguish local from absolute extrema and use the candidates test when there are multiple critical points or endpoints.",
      "能读懂 \\(f\\)、\\(f'\\)、\\(f''\\) 的符号图，并用图像、代数与文字三种证据支持结论。 · Interpret sign charts for \\(f\\), \\(f'\\), and \\(f''\\), and support conclusions with graphical, algebraic, and verbal evidence."
    ],
    "essentialKnowledge": [
      "二阶导数检验：设 \\(c\\) 是区间内部的临界点且 \\(f'(c)=0\\)。若 \\(f''(c)>0\\)，则 \\(f\\) 在 \\(c\\) 处取得局部极小；若 \\(f''(c)<0\\)，则取得局部极大；若 \\(f''(c)=0\\)，检验无法判定。 · Second derivative test: let \\(c\\) be an interior critical point with \\(f'(c)=0\\). If \\(f''(c)>0\\), then \\(f\\) has a local minimum at \\(c\\); if \\(f''(c)<0\\), then \\(f\\) has a local maximum at \\(c\\); if \\(f''(c)=0\\), the test is inconclusive.",
      "\\(f''(c)=0\\) 不代表没有极值：\\(x^{4}\\) 在 \\(0\\) 处为局部极小，\\(-x^{4}\\) 在 \\(0\\) 处为局部极大，\\(x^{3}\\) 在 \\(0\\) 处既非极大也非极小；此时应改用一阶导数符号表。 · \\(f''(c)=0\\) does not mean there is no extremum: \\(x^{4}\\) has a local minimum at \\(0\\), \\(-x^{4}\\) has a local maximum at \\(0\\), and \\(x^{3}\\) has neither; use a first-derivative sign chart instead.",
      "二阶导数检验只给出局部结论，不比较端点，也不比较其他临界点；局部极大值不一定是绝对极大值。 · The second derivative test gives only a local conclusion; it compares neither endpoints nor other critical points, so a local maximum need not be an absolute maximum.",
      "唯一临界点定理（FUN-4.A.8）：若 \\(f\\) 在区间 \\(I\\) 上连续，\\(I\\) 内只有一个临界点 \\(c\\)，且 \\(f(c)\\) 是 \\(f\\) 在 \\(I\\) 上的局部极值，则 \\(f(c)\\) 也是 \\(f\\) 在 \\(I\\) 上的同类型绝对极值。 · Unique critical point theorem (FUN-4.A.8): if \\(f\\) is continuous on an interval \\(I\\), \\(c\\) is the only critical point of \\(f\\) in \\(I\\), and \\(f(c)\\) is a local extremum of \\(f\\) on \\(I\\), then \\(f(c)\\) is also the absolute extremum of the same type on \\(I\\).",
      "唯一临界点定理的证明思路：若局部极大值不是绝对极大值，则区间内存在 \\(d\\) 使 \\(f(d)>f(c)\\)。在 \\(c\\) 与 \\(d\\) 之间的闭子区间上，\\(f\\) 连续，必有最小值；若最小值在 \\(c\\) 取得，则 \\(c\\) 一侧附近函数值不小于 \\(f(c)\\)，而局部极大又要求不大于 \\(f(c)\\)，于是这段函数恒等于 \\(f(c)\\)，其中每个点都是临界点，与唯一性矛盾。因此最小值在内部某点 \\(m\\ne c\\) 取得；\\(m\\) 是局部极小，从而是第二个临界点，矛盾。 · Proof idea for the unique critical point theorem: if a local maximum were not absolute, some \\(d\\) in the interval would satisfy \\(f(d)>f(c)\\). On the closed subinterval between \\(c\\) and \\(d\\), continuity gives a minimum. If the minimum occurred at \\(c\\), then on one side of \\(c\\) the values would be at least \\(f(c)\\), while the local maximum requires them to be at most \\(f(c)\\); that side would be constant, making every point a critical point and contradicting uniqueness. Hence the minimum occurs at some interior \\(m\\ne c\\), which is a local minimum and therefore a second critical point, a contradiction.",
      "等价看法：在 \\(c\\) 的左右两侧，\\(f'\\) 不能变号而不经过零；因此 \\(f\\) 在每一侧都单调。若 \\(c\\) 是局部极大，则两侧都递减，故 \\(c\\) 是绝对极大；局部极小同理。 · Equivalent view: on each side of \\(c\\), \\(f'\\) cannot change sign without passing through zero, so \\(f\\) is monotone on each side. If \\(c\\) is a local maximum, \\(f\\) decreases on both sides, making \\(c\\) the absolute maximum; the local-minimum case is analogous.",
      "连续性不能省：在 \\((0,2)\\) 上令 \\(f(x)=x\\)（\\(x\\ne1\\)）且 \\(f(1)=0.5\\)。\\(x=1\\) 是唯一临界点且为局部极小，但 \\(f\\) 没有绝对极小值，因为 \\(x\\to0^{+}\\) 时 \\(f(x)\\to0\\) 而 \\(0\\) 取不到。 · Continuity cannot be dropped: on \\((0,2)\\), let \\(f(x)=x\\) for \\(x\\ne1\\) and \\(f(1)=0.5\\). Then \\(x=1\\) is the only critical point and is a local minimum, but \\(f\\) has no absolute minimum because \\(f(x)\\to0\\) as \\(x\\to0^{+}\\) and \\(0\\) is not attained.",
      "唯一临界点定理只保证同类型的绝对极值：局部极大只保证绝对极大，局部极小只保证绝对极小；另一个极值可能出现在端点，甚至不存在。 · The unique critical point theorem guarantees only the same type of absolute extremum: a local maximum guarantees an absolute maximum, and a local minimum guarantees an absolute minimum; the other extremum may occur at an endpoint or may not exist.",
      "若 \\(f'\\) 在 \\(c\\) 处不存在，二阶导数检验不适用；但 \\(c\\) 仍是临界点，唯一临界点定理仍可能在 \\(c\\) 为局部极值时适用。 · If \\(f'\\) does not exist at \\(c\\), the second derivative test does not apply; \\(c\\) is still a critical point, and the unique critical point theorem may still apply when \\(c\\) is a local extremum."
    ],
    "definition": "二阶导数检验（second derivative test）是判定可微函数临界点类型的工具：设 \\(c\\) 是区间内部的点且 \\(f'(c)=0\\)。若 \\(f''(c)>0\\)，\\(f'\\) 在 \\(c\\) 附近递增（曲线在 \\(c\\) 处凹向上），\\(f(c)\\) 是局部极小值；若 \\(f''(c)<0\\)，\\(f'\\) 在 \\(c\\) 附近递减（曲线在 \\(c\\) 处凹向下），\\(f(c)\\) 是局部极大值；若 \\(f''(c)=0\\)，检验无法判定，必须改用一阶导数检验或直接分析定义。二阶导数检验只回答“这个临界点是哪一类局部极值”，不回答“它是不是整个区间上的绝对极值”。要把局部结论升级为绝对结论，可用唯一临界点定理（FUN-4.A.8）：若 \\(f\\) 在区间 \\(I\\) 上连续，\\(I\\) 内只有一个临界点 \\(c\\)，且 \\(f(c)\\) 是 \\(f\\) 在 \\(I\\) 上的局部极值，则 \\(f(c)\\) 也是 \\(f\\) 在 \\(I\\) 上的同类型绝对极值。注意“同类型”：局部极大推出绝对极大，局部极小推出绝对极小；另一个极值仍可能在端点。 · The second derivative test is a tool for classifying critical points of differentiable functions: let \\(c\\) be an interior point with \\(f'(c)=0\\). If \\(f''(c)>0\\), \\(f'\\) is increasing near \\(c\\) (the curve is concave up at \\(c\\)) and \\(f(c)\\) is a local minimum; if \\(f''(c)<0\\), \\(f'\\) is decreasing near \\(c\\) (the curve is concave down at \\(c\\)) and \\(f(c)\\) is a local maximum; if \\(f''(c)=0\\), the test is inconclusive and one must use the first derivative test or the definition. The second derivative test answers only “which type of local extremum is this critical point,” not “is it the absolute extremum on the whole interval.” To upgrade a local conclusion to an absolute one, use the unique critical point theorem (FUN-4.A.8): if \\(f\\) is continuous on an interval \\(I\\), \\(c\\) is the only critical point in \\(I\\), and \\(f(c)\\) is a local extremum of \\(f\\) on \\(I\\), then \\(f(c)\\) is also the absolute extremum of the same type on \\(I\\). Note “same type”: a local maximum gives an absolute maximum, and a local minimum gives an absolute minimum; the other extremum may still occur at an endpoint.",
    "intuition": "把二阶导数想成“弯曲方向”。在临界点处，\\(f'\\) 已经为零；若曲线向上弯（\\(f''>0\\)），临界点就是谷底；若向下弯（\\(f''<0\\)），就是山顶；若 \\(f''=0\\)，曲线在这一点可能是平坦的谷底、平坦的山顶，也可能只是穿过水平切线的拐点，单看 \\(f''\\) 分不出来。唯一临界点定理像“整个区间只有一座山或一个谷”：没有第二个临界点可以抢走最高或最低的位置，所以局部的那座山/谷就是全区的最高/最低。但“只有一座山”不等于“只有一条水平切线”：还要确认这个唯一临界点确实是局部极值；\\(x^{3}\\) 在 \\(0\\) 处只有一个临界点，却不是极值。 · Think of the second derivative as the “direction of bending.” At a critical point, \\(f'\\) is already zero; if the curve bends upward (\\(f''>0\\)), the critical point is a valley; if it bends downward (\\(f''<0\\)), it is a hilltop; if \\(f''=0\\), the point could be a flat valley, a flat hilltop, or merely an inflection point crossing a horizontal tangent, and \\(f''\\) alone cannot distinguish them. The unique critical point theorem is like having only one hill or one valley on the whole interval: there is no second critical point that could take the highest or lowest position, so the local hill or valley is the global one. But “only one hill” is not the same as “only one horizontal tangent”: the unique critical point must actually be a local extremum; \\(x^{3}\\) has only one critical point at \\(0\\), yet it is not an extremum.",
    "formulas": [
      {
        "latex": "f'(c)=0,\\ f''(c)>0\\Rightarrow f(c)\\text{ is a local minimum}",
        "note": "二阶导数检验：临界点处二阶导数为正，曲线在该点凹向上，取得局部极小。 · Second derivative test: a positive second derivative at a critical point means the curve is concave up there and the point is a local minimum."
      },
      {
        "latex": "f'(c)=0,\\ f''(c)<0\\Rightarrow f(c)\\text{ is a local maximum}",
        "note": "临界点处二阶导数为负，曲线在该点凹向下，取得局部极大。 · A negative second derivative at a critical point means the curve is concave down there and the point is a local maximum."
      },
      {
        "latex": "f'(c)=0,\\ f''(c)=0\\Rightarrow\\text{the second derivative test is inconclusive}",
        "note": "此时不能判定极值类型；改用一阶导数符号表。 · The test cannot classify the point; use a first-derivative sign chart."
      },
      {
        "latex": "f\\text{ continuous on }I,\\ c\\text{ only critical point on }I,\\ f(c)\\text{ local minimum}\\Rightarrow f(c)\\text{ absolute minimum on }I",
        "note": "唯一临界点定理的极小情形；\\(f''(c)>0\\) 只是验证“局部极小”的一种方式，定理本身只要求局部极值。 · Minimum case of the unique critical point theorem; \\(f''(c)>0\\) is only one way to verify the local-minimum hypothesis, while the theorem itself requires only a local extremum."
      },
      {
        "latex": "f\\text{ continuous on }I,\\ c\\text{ only critical point on }I,\\ f(c)\\text{ local maximum}\\Rightarrow f(c)\\text{ absolute maximum on }I",
        "note": "唯一临界点定理的极大情形；局部极大可由二阶导数检验、一阶导数检验或定义验证。 · Maximum case of the unique critical point theorem; the local-maximum hypothesis may be verified by the second derivative test, the first derivative test, or the definition."
      },
      {
        "latex": "f''(x)>0\\Rightarrow\\text{concave up};\\qquad f''(x)<0\\Rightarrow\\text{concave down}",
        "note": "二阶导数的符号决定凹凸性；凹凸性改变的点是拐点。 · The sign of the second derivative determines concavity; a point where concavity changes is an inflection point."
      },
      {
        "latex": "f(c+h)=f(c)+f'(c)h+\\dfrac{1}{2}f''(c)h^{2}+o(h^{2})",
        "note": "用 Taylor 展开看二阶导数检验：\\(f'(c)=0\\) 时，附近函数值之差由 \\(\\dfrac{1}{2}f''(c)h^{2}\\) 主导。 · Taylor expansion behind the test: when \\(f'(c)=0\\), the change in nearby values is dominated by \\(\\dfrac{1}{2}f''(c)h^{2}\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "二阶导数与 \\(f'\\) 的单调性 · Second derivative and monotonicity of \\(f'\\)",
        "to": "局部极小 · Local minimum",
        "note": "若 \\(f''(c)>0\\)，则 \\(f'\\) 在 \\(c\\) 附近递增；结合 \\(f'(c)=0\\)，得 \\(f'<0\\)（\\(c\\) 左侧）与 \\(f'>0\\)（\\(c\\) 右侧），所以 \\(f\\) 先减后增，\\(f(c)\\) 为局部极小。 · If \\(f''(c)>0\\), then \\(f'\\) is increasing near \\(c\\); with \\(f'(c)=0\\), \\(f'<0\\) to the left and \\(f'>0\\) to the right, so \\(f\\) decreases then increases and \\(f(c)\\) is a local minimum."
      },
      {
        "from": "Taylor 展开 · Taylor expansion",
        "to": "符号判定 · Sign determination",
        "note": "由 \\(f(c+h)=f(c)+f'(c)h+\\dfrac{1}{2}f''(c)h^{2}+o(h^{2})\\)，当 \\(f'(c)=0\\) 时，\\(f(c+h)-f(c)\\) 的符号由 \\(\\dfrac{1}{2}f''(c)h^{2}\\) 决定；\\(f''(c)>0\\) 时附近函数值更大。 · From the expansion, when \\(f'(c)=0\\), the sign of \\(f(c+h)-f(c)\\) is controlled by \\(\\dfrac{1}{2}f''(c)h^{2}\\); if \\(f''(c)>0\\), nearby values are larger."
      },
      {
        "from": "唯一临界点 + 反证 · Unique critical point + contradiction",
        "to": "绝对极大 · Absolute maximum",
        "note": "设 \\(c\\) 为局部极大但不是绝对极大。取 \\(d\\) 使 \\(f(d)>f(c)\\)。在 \\(c\\) 与 \\(d\\) 之间的闭子区间上，\\(f\\) 连续，必有最小值；它不等于 \\(f(d)\\)，也不可能是 \\(f(c)\\)（否则 \\(c\\) 一侧附近函数恒等于 \\(f(c)\\)，产生无穷多临界点），故在内部某点 \\(m\\ne c\\) 取得。\\(m\\) 是局部极小，从而是第二个临界点，与唯一性矛盾。 · Suppose \\(c\\) is a local but not absolute maximum. Choose \\(d\\) with \\(f(d)>f(c)\\). On the closed subinterval between \\(c\\) and \\(d\\), continuity gives a minimum; it is not \\(f(d)\\), and it cannot be \\(f(c)\\) (otherwise one side near \\(c\\) would be constant at \\(f(c)\\), producing infinitely many critical points), so it occurs at some interior \\(m\\ne c\\). That \\(m\\) is a local minimum and hence a second critical point, contradicting uniqueness."
      },
      {
        "from": "导数介值性 · Darboux property",
        "to": "两侧单调 · Monotone on each side",
        "note": "在 \\(c\\) 的任一侧，若 \\(f'\\) 变号，则必在某点为零，产生第二个临界点；因此 \\(f'\\) 在每侧保持同号，\\(f\\) 在每侧单调。局部极大迫使两侧都递减，故 \\(c\\) 为绝对极大。 · On either side of \\(c\\), if \\(f'\\) changed sign it would vanish somewhere, creating a second critical point; hence \\(f'\\) keeps one sign on each side and \\(f\\) is monotone there. A local maximum forces decreasing behavior on both sides, so \\(c\\) is the absolute maximum."
      },
      {
        "from": "\\(f''(c)=0\\) · Zero second derivative",
        "to": "检验失效 · Inconclusive test",
        "note": "\\(x^{4}\\)、\\(-x^{4}\\)、\\(x^{3}\\) 都满足 \\(f'(0)=f''(0)=0\\)，但分别为局部极小、局部极大、非极值；因此 \\(f''(c)=0\\) 不能提供结论。 · \\(x^{4}\\), \\(-x^{4}\\), and \\(x^{3}\\) all satisfy \\(f'(0)=f''(0)=0\\) but are respectively a local minimum, a local maximum, and neither; thus \\(f''(c)=0\\) gives no conclusion."
      }
    ],
    "conditions": [
      "二阶导数检验要求 \\(c\\) 是区间内部的临界点且 \\(f'(c)=0\\)，并且 \\(f''(c)\\) 存在。 · The second derivative test requires an interior critical point \\(c\\) with \\(f'(c)=0\\) and \\(f''(c)\\) existing.",
      "若 \\(f''(c)=0\\)，检验无法判定；改用一阶导数符号表或定义。 · If \\(f''(c)=0\\), the test is inconclusive; use a first-derivative sign chart or the definition.",
      "若 \\(f'\\) 在 \\(c\\) 处不存在，二阶导数检验不适用；但 \\(c\\) 仍是临界点，可用一阶导数检验。 · If \\(f'\\) does not exist at \\(c\\), the second derivative test does not apply; \\(c\\) is still a critical point and the first derivative test may be used.",
      "唯一临界点定理要求 \\(f\\) 在区间 \\(I\\) 上连续，且 \\(I\\) 内恰好只有一个临界点 \\(c\\)。 · The unique critical point theorem requires \\(f\\) continuous on the interval \\(I\\) and exactly one critical point \\(c\\) in \\(I\\).",
      "唯一临界点定理还要求 \\(f(c)\\) 是 \\(f\\) 在 \\(I\\) 上的局部极值；只有唯一临界点还不够（例如 \\(x^{3}\\) 在 \\(0\\) 处）。 · The theorem also requires \\(f(c)\\) to be a local extremum on \\(I\\); having only one critical point is not enough (for example, \\(x^{3}\\) at \\(0\\)).",
      "区间可以是开区间、闭区间或无穷区间；端点不是临界点，但可以是绝对极值点，必须单独比较。 · The interval may be open, closed, or unbounded; endpoints are not critical points but can be absolute extrema and must be checked separately.",
      "唯一临界点定理只保证同类型的绝对极值；局部极大不保证绝对极小，局部极小也不保证绝对极大。 · The theorem guarantees only the same type of absolute extremum; a local maximum does not guarantee an absolute minimum, and a local minimum does not guarantee an absolute maximum.",
      "有多个临界点时，局部极值仍可能是绝对极值，但必须用候选点检验比较所有临界点与端点后才能断言。 · With multiple critical points, a local extremum may still be absolute, but the candidates test must compare all critical points and endpoints before making that claim."
    ],
    "keyPoints": [
      "二阶导数检验：\\(f''(c)>0\\) 得局部极小，\\(f''(c)<0\\) 得局部极大，\\(f''(c)=0\\) 无法判定。 · Second derivative test: \\(f''(c)>0\\) gives a local minimum, \\(f''(c)<0\\) gives a local maximum, and \\(f''(c)=0\\) is inconclusive.",
      "\\(f''(c)=0\\) 不是“无极值”的同义词；\\(x^{4}\\)、\\(-x^{4}\\)、\\(x^{3}\\) 是三个标准反例。 · \\(f''(c)=0\\) is not synonymous with “no extremum”; \\(x^{4}\\), \\(-x^{4}\\), and \\(x^{3}\\) are the three standard counterexamples.",
      "局部极值不等于绝对极值；二阶导数检验本身不能给出绝对极值。 · A local extremum is not necessarily absolute; the second derivative test alone cannot establish absolute extrema.",
      "唯一临界点定理：连续 + 区间内只有一个临界点 + 该点为局部极值 ⇒ 同类型绝对极值。 · Unique critical point theorem: continuity + exactly one critical point in the interval + a local extremum there implies an absolute extremum of the same type.",
      "唯一临界点定理的结论只覆盖同一种极值；另一个极值要在端点或通过极限行为寻找。 · The theorem covers only one type of extremum; look for the other at endpoints or through limiting behavior.",
      "闭区间上即使只有一个临界点，也要比较端点；端点不是临界点。 · On a closed interval, compare endpoints even when there is only one critical point; endpoints are not critical points.",
      "有多个临界点时，用候选点检验比较所有临界点与端点。 · With multiple critical points, use the candidates test to compare all critical points and endpoints.",
      "图像题把 \\(f'\\) 的符号（增减）与 \\(f''\\) 的符号（凹凸）画在同一张符号表上，再标出极值与拐点。 · For graph questions, put the sign of \\(f'\\) (increase or decrease) and the sign of \\(f''\\) (concavity) on one sign chart, then mark extrema and inflection points.",
      "AP 论证按“主张—证据—推理”写：先说要证明的极值类型，再给 \\(f'\\)、\\(f''\\) 的值，最后引用检验或定理。 · Write AP justifications as claim-evidence-reasoning: state the type of extremum, give the values of \\(f'\\) and \\(f''\\), and cite the test or theorem."
    ],
    "misconceptions": [
      "\\(f''(c)>0\\) 就断言 \\(f(c)\\) 是绝对极小值。纠正：二阶导数检验只给局部极小；要有唯一临界点或候选点检验才能升级为绝对极小。 · Claiming that \\(f''(c)>0\\) makes \\(f(c)\\) the absolute minimum. Correction: the second derivative test gives only a local minimum; uniqueness of the critical point or the candidates test is needed to upgrade it.",
      "\\(f''(c)=0\\) 就断言没有极值或一定是拐点。纠正：\\(x^{4}\\) 在 \\(0\\) 处是局部极小，\\(-x^{4}\\) 是局部极大，\\(x^{3}\\) 才是非极值；需看 \\(f'\\) 的符号变化。 · Claiming that \\(f''(c)=0\\) means no extremum or an inflection point. Correction: \\(x^{4}\\) has a local minimum at \\(0\\), \\(-x^{4}\\) has a local maximum, and \\(x^{3}\\) has neither; check the sign change of \\(f'\\).",
      "只有一个临界点就断言它一定是绝对极值。纠正：\\(x^{3}\\) 只有一个临界点 \\(0\\)，但 \\(0\\) 不是极值；还必须确认该点是局部极值。 · Claiming that a single critical point must be an absolute extremum. Correction: \\(x^{3}\\) has only the critical point \\(0\\), but \\(0\\) is not an extremum; the point must also be a local extremum.",
      "把唯一临界点定理理解成同时给出绝对极大和绝对极小。纠正：定理只给同类型；局部极大只保证绝对极大。 · Misreading the unique critical point theorem as giving both absolute maximum and minimum. Correction: it gives only the same type; a local maximum guarantees only an absolute maximum.",
      "把端点当作临界点。纠正：临界点定义在区间内部；端点要作为候选点单独比较。 · Treating endpoints as critical points. Correction: critical points are interior; endpoints are separate candidates.",
      "在 \\(f'\\) 不存在的点套用二阶导数检验。纠正：该检验要求 \\(f''(c)\\) 存在；此时用一阶导数检验。 · Applying the second derivative test where \\(f'\\) does not exist. Correction: the test requires \\(f''(c)\\) to exist; use the first derivative test instead.",
      "忽略连续性，直接使用唯一临界点定理。纠正：不连续时结论可能失败，例如 \\((0,2)\\) 上 \\(f(x)=x\\)（\\(x\\ne1\\)）、\\(f(1)=0.5\\)。 · Ignoring continuity when using the unique critical point theorem. Correction: the conclusion can fail without continuity, for example \\(f(x)=x\\) for \\(x\\ne1\\) and \\(f(1)=0.5\\) on \\((0,2)\\).",
      "有多个临界点时，认为局部极值一定不是绝对极值。纠正：局部极值仍可能是绝对极值，但必须用候选点检验比较后才能下结论。 · Assuming that with multiple critical points a local extremum cannot be absolute. Correction: it may still be absolute, but the candidates test must compare all candidates first."
    ],
    "examples": [
      {
        "title": "例 1 · 二次函数：局部检验升级为绝对极值 · Example 1: From local test to absolute extremum",
        "prompt": "设 \\(f(x)=x^{2}-4x+1\\)。求 \\(f'\\) 的零点，用二阶导数检验分类，并说明为什么该点也是 \\(f\\) 在 \\(\\mathbb{R}\\) 上的绝对极小值。再求 \\(f\\) 在 \\([0,5]\\) 上的绝对最大值。 · Let \\(f(x)=x^{2}-4x+1\\). Find the zero of \\(f'\\), classify it with the second derivative test, and explain why it is also the absolute minimum of \\(f\\) on \\(\\mathbb{R}\\). Then find the absolute maximum of \\(f\\) on \\([0,5]\\).",
        "steps": [
          "\\(f'(x)=2x-4=2(x-2)\\)，所以 \\(f'(x)=0\\) 仅在 \\(x=2\\) 处成立。 · \\(f'(x)=2x-4=2(x-2)\\), so \\(f'(x)=0\\) only at \\(x=2\\).",
          "\\(f''(x)=2\\)，故 \\(f''(2)=2>0\\)。二阶导数检验给出 \\(f(2)=4-8+1=-3\\) 是局部极小值。 · \\(f''(x)=2\\), so \\(f''(2)=2>0\\). The second derivative test gives a local minimum \\(f(2)=4-8+1=-3\\).",
          "\\(f\\) 在 \\(\\mathbb{R}\\) 上连续，\\(x=2\\) 是唯一的临界点，且该点为局部极小；由唯一临界点定理，\\(f(2)=-3\\) 也是 \\(f\\) 在 \\(\\mathbb{R}\\) 上的绝对极小值。 · \\(f\\) is continuous on \\(\\mathbb{R}\\), \\(x=2\\) is the only critical point, and it is a local minimum; by the unique critical point theorem, \\(f(2)=-3\\) is also the absolute minimum of \\(f\\) on \\(\\mathbb{R}\\).",
          "在 \\([0,5]\\) 上比较候选点：\\(f(0)=1\\)，\\(f(2)=-3\\)，\\(f(5)=25-20+1=6\\)。绝对最大值为 \\(6\\)，在 \\(x=5\\) 处取得；定理只保证极小值，最大值来自端点比较。 · On \\([0,5]\\), compare candidates: \\(f(0)=1\\), \\(f(2)=-3\\), and \\(f(5)=25-20+1=6\\). The absolute maximum is \\(6\\) at \\(x=5\\); the theorem guarantees only the minimum, and the maximum comes from comparing endpoints."
        ],
        "solution": "\\(x=2\\) 是唯一临界点，\\(f''(2)=2>0\\)，故 \\(f(2)=-3\\) 为局部极小；由唯一临界点定理，它也是 \\(\\mathbb{R}\\) 上的绝对极小值。在 \\([0,5]\\) 上，绝对最大值为 \\(f(5)=6\\)。 · \\(x=2\\) is the only critical point and \\(f''(2)=2>0\\), so \\(f(2)=-3\\) is a local minimum; by the unique critical point theorem it is also the absolute minimum on \\(\\mathbb{R}\\). On \\([0,5]\\), the absolute maximum is \\(f(5)=6\\).",
        "solutionLatex": "f'(x)=2x-4=0\\Rightarrow x=2,\\qquad f''(2)=2>0,\\qquad f(2)=-3,\\qquad \\max_{[0,5]}f=f(5)=6"
      },
      {
        "title": "例 2 · 四次函数：唯一临界点与全局最小值 · Example 2: A quartic with one critical point",
        "prompt": "设 \\(f(x)=x^{4}-4x\\)。用二阶导数检验求局部极值，并判断 \\(f\\) 在 \\(\\mathbb{R}\\) 上是否有绝对最大值或绝对最小值。 · Let \\(f(x)=x^{4}-4x\\). Use the second derivative test to find local extrema and decide whether \\(f\\) has an absolute maximum or minimum on \\(\\mathbb{R}\\).",
        "steps": [
          "\\(f'(x)=4x^{3}-4=4(x^{3}-1)\\)，所以 \\(f'(x)=0\\) 仅在 \\(x=1\\) 处成立。 · \\(f'(x)=4x^{3}-4=4(x^{3}-1)\\), so \\(f'(x)=0\\) only at \\(x=1\\).",
          "\\(f''(x)=12x^{2}\\)，故 \\(f''(1)=12>0\\)。因此 \\(f(1)=1-4=-3\\) 是局部极小值。 · \\(f''(x)=12x^{2}\\), so \\(f''(1)=12>0\\). Thus \\(f(1)=1-4=-3\\) is a local minimum.",
          "\\(f\\) 在 \\(\\mathbb{R}\\) 上连续，且 \\(x=1\\) 是唯一临界点；由唯一临界点定理，\\(f(1)=-3\\) 是 \\(\\mathbb{R}\\) 上的绝对极小值。 · \\(f\\) is continuous on \\(\\mathbb{R}\\) and \\(x=1\\) is the only critical point; by the unique critical point theorem, \\(f(1)=-3\\) is the absolute minimum on \\(\\mathbb{R}\\).",
          "当 \\(x\\to\\pm\\infty\\) 时 \\(x^{4}\\) 主导，\\(f(x)\\to+\\infty\\)，所以没有绝对最大值。可用 \\(f(0)=0\\) 与 \\(f(2)=8\\) 验证它们都大于 \\(-3\\)。 · As \\(x\\to\\pm\\infty\\), \\(x^{4}\\) dominates and \\(f(x)\\to+\\infty\\), so there is no absolute maximum. Check that \\(f(0)=0\\) and \\(f(2)=8\\) are both greater than \\(-3\\)."
        ],
        "solution": "唯一临界点 \\(x=1\\) 给出局部极小值 \\(f(1)=-3\\)；由唯一临界点定理，它是 \\(\\mathbb{R}\\) 上的绝对极小值。由于 \\(f(x)\\to+\\infty\\)，\\(f\\) 没有绝对最大值。 · The only critical point \\(x=1\\) gives a local minimum \\(f(1)=-3\\); by the unique critical point theorem, it is the absolute minimum on \\(\\mathbb{R}\\). Since \\(f(x)\\to+\\infty\\), \\(f\\) has no absolute maximum.",
        "solutionLatex": "f'(x)=4x^{3}-4=0\\Rightarrow x=1,\\qquad f''(1)=12>0,\\qquad f(1)=-3,\\qquad \\lim_{x\\to\\pm\\infty}f(x)=+\\infty"
      },
      {
        "title": "例 3 · 两个临界点：局部极值不一定是绝对极值 · Example 3: Two critical points, local is not absolute",
        "prompt": "设 \\(f(x)=x^{3}-3x\\) 在 \\([-3,3]\\) 上。求所有临界点并用二阶导数检验分类，再用候选点检验求绝对极值。说明为什么不能把局部极大值直接当作绝对极大值。 · Let \\(f(x)=x^{3}-3x\\) on \\([-3,3]\\). Find and classify all critical points with the second derivative test, then use the candidates test to find the absolute extrema. Explain why a local maximum cannot be assumed to be the absolute maximum.",
        "steps": [
          "\\(f'(x)=3x^{2}-3=3(x-1)(x+1)\\)，临界点为 \\(x=-1\\) 与 \\(x=1\\)。 · \\(f'(x)=3x^{2}-3=3(x-1)(x+1)\\), so the critical points are \\(x=-1\\) and \\(x=1\\).",
          "\\(f''(x)=6x\\)。\\(f''(-1)=-6<0\\)，故 \\(f(-1)=-1+3=2\\) 是局部极大值；\\(f''(1)=6>0\\)，故 \\(f(1)=1-3=-2\\) 是局部极小值。 · \\(f''(x)=6x\\). \\(f''(-1)=-6<0\\), so \\(f(-1)=-1+3=2\\) is a local maximum; \\(f''(1)=6>0\\), so \\(f(1)=1-3=-2\\) is a local minimum.",
          "区间内有两个临界点，不满足唯一临界点定理的“只有一个临界点”条件，不能把局部极值直接升级为绝对极值。 · There are two critical points in the interval, so the “exactly one critical point” hypothesis of the unique critical point theorem fails; local extrema cannot be upgraded directly.",
          "候选点检验：\\(f(-3)=-27+9=-18\\)，\\(f(-1)=2\\)，\\(f(1)=-2\\)，\\(f(3)=27-9=18\\)。绝对最大值为 \\(18\\)（\\(x=3\\)），绝对最小值为 \\(-18\\)（\\(x=-3\\)）。 · Candidates test: \\(f(-3)=-27+9=-18\\), \\(f(-1)=2\\), \\(f(1)=-2\\), and \\(f(3)=27-9=18\\). The absolute maximum is \\(18\\) at \\(x=3\\), and the absolute minimum is \\(-18\\) at \\(x=-3\\).",
          "局部极大值 \\(2\\) 不是绝对最大值，因为端点 \\(x=3\\) 给出更大的 \\(18\\)；局部极小值 \\(-2\\) 也不是绝对最小值，因为端点 \\(x=-3\\) 给出更小的 \\(-18\\)。 · The local maximum \\(2\\) is not the absolute maximum because the endpoint \\(x=3\\) gives the larger value \\(18\\); the local minimum \\(-2\\) is not the absolute minimum because the endpoint \\(x=-3\\) gives the smaller value \\(-18\\)."
        ],
        "solution": "临界点 \\(x=-1\\)（局部极大，\\(2\\)）与 \\(x=1\\)（局部极小，\\(-2\\)）。候选点比较得绝对最大值 \\(f(3)=18\\)，绝对最小值 \\(f(-3)=-18\\)。局部极值不是绝对极值。 · Critical points \\(x=-1\\) (local maximum, \\(2\\)) and \\(x=1\\) (local minimum, \\(-2\\)). Comparing candidates gives the absolute maximum \\(f(3)=18\\) and the absolute minimum \\(f(-3)=-18\\). The local extrema are not the absolute extrema.",
        "solutionLatex": "f(-3)=-18,\\qquad f(-1)=2,\\qquad f(1)=-2,\\qquad f(3)=18"
      },
      {
        "title": "例 4 · 二阶导数为零：检验失效 · Example 4: When the second derivative is zero",
        "prompt": "对 \\(f(x)=x^{4}\\)、\\(g(x)=-x^{4}\\)、\\(h(x)=x^{3}\\)，在 \\(x=0\\) 处都有 \\(f'(0)=f''(0)=0\\)。分别判断 \\(x=0\\) 是局部极大、局部极小还是都不是，并说明二阶导数检验为什么不能直接下结论。 · For \\(f(x)=x^{4}\\), \\(g(x)=-x^{4}\\), and \\(h(x)=x^{3}\\), all have \\(f'(0)=f''(0)=0\\) at \\(x=0\\). Decide whether \\(x=0\\) is a local maximum, a local minimum, or neither, and explain why the second derivative test is inconclusive.",
        "steps": [
          "对 \\(f(x)=x^{4}\\)：\\(x^{4}\\ge0=f(0)\\) 对所有 \\(x\\) 成立，所以 \\(x=0\\) 是局部（也是绝对）极小值；但 \\(f''(0)=0\\)。 · For \\(f(x)=x^{4}\\): \\(x^{4}\\ge0=f(0)\\) for all \\(x\\), so \\(x=0\\) is a local (and absolute) minimum, yet \\(f''(0)=0\\).",
          "对 \\(g(x)=-x^{4}\\)：\\(-x^{4}\\le0=g(0)\\) 对所有 \\(x\\) 成立，所以 \\(x=0\\) 是局部（也是绝对）极大值；但 \\(g''(0)=0\\)。 · For \\(g(x)=-x^{4}\\): \\(-x^{4}\\le0=g(0)\\) for all \\(x\\), so \\(x=0\\) is a local (and absolute) maximum, yet \\(g''(0)=0\\).",
          "对 \\(h(x)=x^{3}\\)：当 \\(x<0\\) 时 \\(x^{3}<0\\)，当 \\(x>0\\) 时 \\(x^{3}>0\\)，所以 \\(x=0\\) 既不是局部极大也不是局部极小；同样 \\(h''(0)=0\\)。 · For \\(h(x)=x^{3}\\): \\(x^{3}<0\\) when \\(x<0\\) and \\(x^{3}>0\\) when \\(x>0\\), so \\(x=0\\) is neither a local maximum nor a local minimum; again \\(h''(0)=0\\).",
          "三种情形在 \\(x=0\\) 处都满足 \\(f'(0)=f''(0)=0\\)，但行为不同，所以二阶导数检验在 \\(f''(c)=0\\) 时无法判定；应改用一阶导数符号表。对 \\(x^{4}\\) 与 \\(-x^{4}\\)，唯一临界点加局部极值还可由唯一临界点定理得到绝对极值。 · All three cases satisfy \\(f'(0)=f''(0)=0\\) but behave differently, so the second derivative test is inconclusive when \\(f''(c)=0\\); use a first-derivative sign chart. For \\(x^{4}\\) and \\(-x^{4}\\), the unique critical point plus a local extremum also gives an absolute extremum by the unique critical point theorem."
        ],
        "solution": "\\(x^{4}\\) 在 \\(0\\) 处为局部极小（且绝对极小），\\(-x^{4}\\) 为局部极大（且绝对极大），\\(x^{3}\\) 既非极大也非极小。三者的 \\(f''(0)\\) 都为 \\(0\\)，故二阶导数检验无法判定，需看 \\(f'\\) 的符号变化。 · \\(x^{4}\\) has a local (and absolute) minimum at \\(0\\), \\(-x^{4}\\) has a local (and absolute) maximum, and \\(x^{3}\\) has neither. All three have \\(f''(0)=0\\), so the second derivative test is inconclusive; examine the sign change of \\(f'\\).",
        "solutionLatex": "f(x)=x^{4}:\\ \\text{local min at }0;\\qquad g(x)=-x^{4}:\\ \\text{local max at }0;\\qquad h(x)=x^{3}:\\ \\text{neither}"
      },
      {
        "title": "例 5 · 开放区间上的有理函数 · Example 5: A rational function on an open interval",
        "prompt": "设 \\(f(x)=x+\\dfrac{1}{x}\\)，定义域为 \\((0,\\infty)\\)。求临界点，用二阶导数检验分类，并判断绝对极值。 · Let \\(f(x)=x+\\dfrac{1}{x}\\) on \\((0,\\infty)\\). Find the critical point, classify it with the second derivative test, and determine the absolute extrema.",
        "steps": [
          "\\(f'(x)=1-\\dfrac{1}{x^{2}}=\\dfrac{x^{2}-1}{x^{2}}\\)。在 \\((0,\\infty)\\) 上 \\(f'(x)=0\\) 仅在 \\(x=1\\) 处成立（\\(x=-1\\) 不在定义域内）。 · \\(f'(x)=1-\\dfrac{1}{x^{2}}=\\dfrac{x^{2}-1}{x^{2}}\\). On \\((0,\\infty)\\), \\(f'(x)=0\\) only at \\(x=1\\) (\\(x=-1\\) is outside the domain).",
          "\\(f''(x)=\\dfrac{2}{x^{3}}>0\\) 在 \\((0,\\infty)\\) 上恒成立，故 \\(f''(1)=2>0\\)，\\(f(1)=1+1=2\\) 是局部极小值。 · \\(f''(x)=\\dfrac{2}{x^{3}}>0\\) on \\((0,\\infty)\\), so \\(f''(1)=2>0\\) and \\(f(1)=1+1=2\\) is a local minimum.",
          "\\(f\\) 在 \\((0,\\infty)\\) 上连续，\\(x=1\\) 是唯一临界点且为局部极小；由唯一临界点定理，\\(f(1)=2\\) 是 \\((0,\\infty)\\) 上的绝对极小值。 · \\(f\\) is continuous on \\((0,\\infty)\\), \\(x=1\\) is the only critical point and is a local minimum; by the unique critical point theorem, \\(f(1)=2\\) is the absolute minimum on \\((0,\\infty)\\).",
          "当 \\(x\\to0^{+}\\) 与 \\(x\\to\\infty\\) 时都有 \\(f(x)\\to\\infty\\)，所以没有绝对最大值。可用 \\(f(0.5)=2.5\\) 与 \\(f(2)=2.5\\) 验证它们都大于 \\(2\\)。 · As \\(x\\to0^{+}\\) and \\(x\\to\\infty\\), \\(f(x)\\to\\infty\\), so there is no absolute maximum. Check that \\(f(0.5)=2.5\\) and \\(f(2)=2.5\\) are both greater than \\(2\\)."
        ],
        "solution": "唯一临界点 \\(x=1\\) 给出局部极小值 \\(f(1)=2\\)；由唯一临界点定理，它是 \\((0,\\infty)\\) 上的绝对极小值。由于两端都趋于 \\(+\\infty\\)，没有绝对最大值。 · The only critical point \\(x=1\\) gives a local minimum \\(f(1)=2\\); by the unique critical point theorem, it is the absolute minimum on \\((0,\\infty)\\). Since both ends tend to \\(+\\infty\\), there is no absolute maximum.",
        "solutionLatex": "f'(x)=1-\\dfrac{1}{x^{2}}=0\\Rightarrow x=1,\\qquad f''(1)=2>0,\\qquad f(1)=2,\\qquad \\lim_{x\\to0^{+}}f(x)=\\lim_{x\\to\\infty}f(x)=\\infty"
      },
      {
        "title": "例 6 · 主张—证据—推理：唯一临界点与端点 · Example 6: Claim-evidence-reasoning with one critical point and endpoints",
        "prompt": "函数 \\(f\\) 在 \\([-2,4]\\) 上连续，在 \\((-2,4)\\) 内可微，\\(f'(x)=0\\) 仅在 \\(x=1\\) 处成立，且 \\(f(1)=-3\\) 是局部极小值；又知 \\(f(-2)=5\\)，\\(f(4)=2\\)。求 \\(f\\) 在 \\([-2,4]\\) 上的绝对极值，并写出完整论证。 · A function \\(f\\) is continuous on \\([-2,4]\\) and differentiable on \\((-2,4)\\), with \\(f'(x)=0\\) only at \\(x=1\\), and \\(f(1)=-3\\) is a local minimum; also \\(f(-2)=5\\) and \\(f(4)=2\\). Find the absolute extrema of \\(f\\) on \\([-2,4]\\) and justify your answer.",
        "steps": [
          "因为 \\(f'\\) 在 \\((-2,4)\\) 内存在且只在 \\(x=1\\) 处为零，所以 \\(x=1\\) 是区间内唯一的临界点。 · Because \\(f'\\) exists on \\((-2,4)\\) and is zero only at \\(x=1\\), \\(x=1\\) is the only critical point in the interval.",
          "\\(f\\) 在 \\([-2,4]\\) 上连续，区间内只有一个临界点，且 \\(f(1)=-3\\) 是局部极小；由唯一临界点定理，\\(f(1)=-3\\) 是 \\([-2,4]\\) 上的绝对极小值。 · \\(f\\) is continuous on \\([-2,4]\\), there is exactly one critical point in the interval, and \\(f(1)=-3\\) is a local minimum; by the unique critical point theorem, \\(f(1)=-3\\) is the absolute minimum on \\([-2,4]\\).",
          "为求绝对最大值，用候选点检验：候选值是临界点值 \\(f(1)=-3\\) 与端点值 \\(f(-2)=5\\)、\\(f(4)=2\\)。比较得最大值为 \\(5\\)，在 \\(x=-2\\) 处取得。 · To find the absolute maximum, use the candidates test: the candidates are the critical-point value \\(f(1)=-3\\) and the endpoint values \\(f(-2)=5\\) and \\(f(4)=2\\). The largest is \\(5\\) at \\(x=-2\\).",
          "唯一临界点定理只保证同类型的极小值；绝对最大值仍必须比较端点，不能由定理直接得到。 · The unique critical point theorem guarantees only the minimum of the same type; the absolute maximum still requires comparing endpoints and is not given directly by the theorem."
        ],
        "solution": "绝对最小值为 \\(f(1)=-3\\)（由唯一临界点定理）；绝对最大值为 \\(f(-2)=5\\)（由候选点检验比较临界点与端点）。 · The absolute minimum is \\(f(1)=-3\\) by the unique critical point theorem; the absolute maximum is \\(f(-2)=5\\) by the candidates test comparing the critical point and endpoints.",
        "solutionLatex": "\\min_{[-2,4]}f=f(1)=-3,\\qquad \\max_{[-2,4]}f=f(-2)=5"
      },
      {
        "title": "例 7 · 连续性为什么不能省 · Example 7: Why continuity cannot be dropped",
        "prompt": "在 \\((0,2)\\) 上定义 \\(f(x)=x\\)（当 \\(x\\ne1\\)），且 \\(f(1)=0.5\\)。验证 \\(x=1\\) 是唯一临界点且为局部极小值，但 \\(f\\) 没有绝对极小值。说明唯一临界点定理为什么要求连续性。 · On \\((0,2)\\), define \\(f(x)=x\\) for \\(x\\ne1\\) and \\(f(1)=0.5\\). Verify that \\(x=1\\) is the only critical point and is a local minimum, but \\(f\\) has no absolute minimum. Explain why the unique critical point theorem requires continuity.",
        "steps": [
          "当 \\(x\\ne1\\) 时 \\(f'(x)=1\\)，从不为零；在 \\(x=1\\) 处 \\(f'\\) 不存在，所以 \\(x=1\\) 是唯一临界点。 · For \\(x\\ne1\\), \\(f'(x)=1\\), which is never zero; at \\(x=1\\), \\(f'\\) does not exist, so \\(x=1\\) is the only critical point.",
          "在 \\(x=1\\) 附近且 \\(x\\ne1\\) 时，\\(f(x)=x\\) 接近 \\(1\\)，而 \\(f(1)=0.5\\)，所以 \\(f(1)\\) 是局部极小值。 · Near \\(x=1\\) with \\(x\\ne1\\), \\(f(x)=x\\) is close to \\(1\\), while \\(f(1)=0.5\\), so \\(f(1)\\) is a local minimum.",
          "但 \\(f(x)>0\\) 对所有 \\(x\\in(0,2)\\) 成立，且当 \\(x\\to0^{+}\\) 时 \\(f(x)\\to0\\)；\\(0\\) 不在值域中，所以 \\(f\\) 没有绝对极小值。 · However, \\(f(x)>0\\) for all \\(x\\in(0,2)\\), and \\(f(x)\\to0\\) as \\(x\\to0^{+}\\); \\(0\\) is not in the range, so \\(f\\) has no absolute minimum.",
          "这说明“唯一临界点 + 局部极小”本身不足以保证绝对极小；定理的证明用到连续函数在闭子区间上的极值定理，因此连续性是不可缺少的假设。 · This shows that “one critical point + local minimum” alone does not guarantee an absolute minimum; the proof uses the extreme value theorem for continuous functions on closed subintervals, so continuity is an essential hypothesis."
        ],
        "solution": "\\(x=1\\) 是唯一临界点且为局部极小，但 \\(f\\) 在 \\((0,2)\\) 上没有绝对极小值（下确界为 \\(0\\)，取不到）。缺少连续性时唯一临界点定理失效。 · \\(x=1\\) is the only critical point and is a local minimum, but \\(f\\) has no absolute minimum on \\((0,2)\\) (the infimum is \\(0\\), which is not attained). Without continuity, the unique critical point theorem fails.",
        "solutionLatex": "f(x)=x\\ (x\\ne1),\\ f(1)=0.5;\\qquad \\lim_{x\\to0^{+}}f(x)=0\\text{ is not attained}"
      }
    ],
    "examTips": [
      "先看 \\(f'(c)=0\\) 还是 \\(f'(c)\\) 不存在；二阶导数检验只适用于前者且 \\(f''(c)\\) 存在的内部点。 · First check whether \\(f'(c)=0\\) or \\(f'(c)\\) fails to exist; the second derivative test applies only to interior points with \\(f'(c)=0\\) and \\(f''(c)\\) existing.",
      "算 \\(f''(c)\\) 的符号：正→局部极小，负→局部极大，零→不能判定。 · Compute the sign of \\(f''(c)\\): positive gives a local minimum, negative gives a local maximum, and zero is inconclusive.",
      "\\(f''(c)=0\\) 时画 \\(f'\\) 的符号表；不要写“无极值”。 · When \\(f''(c)=0\\), draw a sign chart for \\(f'\\); do not write “no extremum.”",
      "二阶导数检验只给局部结论；要断言绝对极值，必须再用唯一临界点定理或候选点检验。 · The second derivative test gives only local information; to claim absolute extrema, use the unique critical point theorem or the candidates test.",
      "使用唯一临界点定理时逐条写清：连续、区间内只有一个临界点、该点是局部极值。 · When using the unique critical point theorem, state each hypothesis: continuity, exactly one critical point in the interval, and a local extremum there.",
      "唯一临界点定理只保证同类型；另一个极值要在端点或通过极限行为寻找。 · The theorem guarantees only the same type; find the other extremum at endpoints or through limiting behavior.",
      "闭区间上即使只有一个临界点，也要把端点加入候选；端点不是临界点。 · On a closed interval, include endpoints as candidates even with one critical point; endpoints are not critical points.",
      "图像题把 \\(f'\\) 与 \\(f''\\) 的符号画在同一张表上，标出局部极值、拐点和端点。 · For graph questions, put the signs of \\(f'\\) and \\(f''\\) on one chart and mark local extrema, inflection points, and endpoints.",
      "AP 论证按主张—证据—推理写：主张极值类型，证据是 \\(f'\\)、\\(f''\\) 的值，推理引用检验或定理。 · Write AP justifications as claim-evidence-reasoning: claim the type of extremum, give \\(f'\\) and \\(f''\\) values as evidence, and cite the test or theorem as reasoning."
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
        "relation": "prerequisite"
      },
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
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.9",
        "title": "函数与导数关联",
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
      "上游：5.2 的极值定理保证闭区间上连续函数取得绝对极值；5.4 的一阶导数检验提供 \\(f''(c)=0\\) 时的替代方法；5.5 的候选点检验比较临界点与端点。 · Upstream: the extreme value theorem in 5.2 guarantees absolute extrema for continuous functions on closed intervals; the first derivative test in 5.4 is the fallback when \\(f''(c)=0\\); the candidates test in 5.5 compares critical points and endpoints.",
      "下游：5.8 用 \\(f'\\)、\\(f''\\) 的符号草图；5.9 把函数、一阶导数和二阶导数的图像联系起来；5.10–5.11 的优化问题需要先判断局部极值再比较绝对极值。 · Downstream: 5.8 sketches graphs from signs of \\(f'\\) and \\(f''\\); 5.9 connects the graphs of a function and its first two derivatives; optimization in 5.10–5.11 requires classifying local extrema and then comparing absolute extrema.",
      "数学：唯一临界点定理把“局部”升级为“全局”，本质是导数介值性与单调性；它不能替代候选点检验，而是候选点检验在“只有一个临界点”时的 shortcut。 · Mathematics: the unique critical point theorem upgrades “local” to “global,” relying on the intermediate value property of derivatives and monotonicity; it is a shortcut within the candidates test when there is exactly one critical point.",
      "跨学科：优化模型（成本、面积、速度）常先求唯一临界点并用二阶导数判断它是最大还是最小；若模型区间有端点，还要比较端点。 · Cross-disciplinary: optimization models for cost, area, or speed often find a single critical point and use the second derivative to decide whether it is a maximum or minimum; if the model interval has endpoints, compare them too."
    ],
    "intuitionDetailed": "先画一条曲线：\\(f'\\) 的符号告诉你曲线在上升还是下降，\\(f''\\) 的符号告诉你曲线向上弯还是向下弯。临界点处 \\(f'=0\\)，曲线暂时水平；若此时 \\(f''>0\\)，曲线向上弯，水平切线落在谷底；若 \\(f''<0\\)，曲线向下弯，水平切线落在山顶；若 \\(f''=0\\)，曲线可能像 \\(x^{4}\\) 那样是平坦的谷底、像 \\(-x^{4}\\) 那样是平坦的山顶，也可能像 \\(x^{3}\\) 那样只是穿过水平切线的拐点。唯一临界点定理把“局部”变成“全局”：整个区间只有这一个临界点，就没有第二个山谷或山峰可以比它更高或更低；只要它是局部极值，它就是同类型的绝对极值。但要小心两个边界：第一，函数必须在整个区间上连续；第二，另一个类型的极值仍可能在端点，闭区间上必须比较端点。 · Draw a curve: the sign of \\(f'\\) tells you whether it rises or falls, and the sign of \\(f''\\) tells you whether it bends up or down. At a critical point \\(f'=0\\), so the curve is momentarily horizontal; if \\(f''>0\\), it bends upward and the horizontal tangent sits at a valley; if \\(f''<0\\), it bends downward and the horizontal tangent sits at a hilltop; if \\(f''=0\\), the curve could be a flat valley like \\(x^{4}\\), a flat hilltop like \\(-x^{4}\\), or merely an inflection point crossing a horizontal tangent like \\(x^{3}\\). The unique critical point theorem turns “local” into “global”: with only one critical point on the whole interval, there is no second valley or hill that could be higher or lower; if it is a local extremum, it is the absolute extremum of the same type. But watch two boundaries: first, the function must be continuous on the whole interval; second, the other type of extremum may still occur at an endpoint, so closed intervals require endpoint comparisons.",
    "development": [
      "确定定义域与区间，检查 \\(f\\) 在区间上连续、在内部可微。 · Determine the domain and interval, and check that \\(f\\) is continuous on the interval and differentiable inside.",
      "求 \\(f'\\)，解 \\(f'(x)=0\\)，并找出 \\(f'\\) 不存在的内部点，列出全部临界点。 · Compute \\(f'\\), solve \\(f'(x)=0\\), and include interior points where \\(f'\\) fails to exist to list all critical points.",
      "求 \\(f''\\)，在每个临界点计算 \\(f''(c)\\)：正→局部极小，负→局部极大，零→检验失效。 · Compute \\(f''\\) and evaluate \\(f''(c)\\) at each critical point: positive gives a local minimum, negative gives a local maximum, and zero is inconclusive.",
      "\\(f''(c)=0\\) 或 \\(f'\\) 不存在时，画 \\(f'\\) 的符号表，用一阶导数检验分类。 · When \\(f''(c)=0\\) or \\(f'\\) does not exist, draw a sign chart for \\(f'\\) and use the first derivative test.",
      "数一数区间内的临界点：若恰好一个且该点为局部极值，引用唯一临界点定理升级为同类型绝对极值。 · Count the critical points in the interval: if there is exactly one and it is a local extremum, cite the unique critical point theorem to upgrade it to an absolute extremum of the same type.",
      "若有多个临界点或要求另一类型的极值，用候选点检验比较所有临界点与端点。 · If there are multiple critical points or the other type of extremum is required, use the candidates test to compare all critical points and endpoints.",
      "用图像、符号表和极限行为自检：局部极值的位置、凹凸性、端点值是否与结论一致。 · Check with the graph, sign chart, and limiting behavior: do the locations of extrema, concavity, and endpoint values agree with the conclusion?"
    ],
    "checks": [
      "若 \\(f'(2)=0\\) 且 \\(f''(2)=-3\\)，你能得出什么结论？不能得出什么结论？ · If \\(f'(2)=0\\) and \\(f''(2)=-3\\), what can you conclude? What can you not conclude?",
      "若 \\(f'(0)=f''(0)=0\\)，\\(x=0\\) 一定是极值点吗？给出三个例子说明。 · If \\(f'(0)=f''(0)=0\\), must \\(x=0\\) be an extremum? Give three examples.",
      "连续函数 \\(f\\) 在 \\((0,5)\\) 内只有一个临界点 \\(x=2\\)，且 \\(f(2)\\) 是局部极小值。\\(f(2)\\) 一定是绝对极小值吗？若去掉连续性呢？ · A continuous function \\(f\\) on \\((0,5)\\) has exactly one critical point at \\(x=2\\), a local minimum. Must \\(f(2)\\) be the absolute minimum? What if continuity is dropped?",
      "\\(f\\) 在 \\([a,b]\\) 上只有一个临界点 \\(c\\)，且 \\(f(c)\\) 是局部极大值。哪个绝对极值被定理保证？另一个如何求？ · \\(f\\) on \\([a,b]\\) has exactly one critical point \\(c\\), a local maximum. Which absolute extremum is guaranteed by the theorem? How do you find the other?",
      "给出一张 \\(f'\\) 与 \\(f''\\) 的符号表，如何读出局部极大、局部极小与拐点？ · Given a sign chart for \\(f'\\) and \\(f''\\), how do you read off local maxima, local minima, and inflection points?",
      "为什么二阶导数检验不能在端点使用？端点处的“临界点”说法有什么问题？ · Why can the second derivative test not be used at an endpoint? What is wrong with calling an endpoint a critical point?",
      "构造一个连续函数，它在区间内只有一个临界点，但该点不是极值。 · Construct a continuous function with exactly one critical point in an interval, where that point is not an extremum.",
      "有多个临界点时，局部极大值可能是绝对极大值吗？说明判断步骤。 · With multiple critical points, can a local maximum be the absolute maximum? Explain the decision procedure."
    ],
    "vocabulary": [
      {
        "termZh": "二阶导数检验",
        "termEn": "second derivative test",
        "defZh": "在临界点用 \\(f''(c)\\) 的符号判断局部极小（正）、局部极大（负）或无法判定（零）。",
        "defEn": "Using the sign of \\(f''(c)\\) at a critical point to classify a local minimum (positive), a local maximum (negative), or an inconclusive case (zero)."
      },
      {
        "termZh": "局部极大值",
        "termEn": "local maximum",
        "defZh": "\\(f(c)\\ge f(x)\\) 对 \\(c\\) 附近某个开区间内所有 \\(x\\) 成立。",
        "defEn": "A value \\(f(c)\\) such that \\(f(c)\\ge f(x)\\) for all \\(x\\) in some open interval containing \\(c\\)."
      },
      {
        "termZh": "局部极小值",
        "termEn": "local minimum",
        "defZh": "\\(f(c)\\le f(x)\\) 对 \\(c\\) 附近某个开区间内所有 \\(x\\) 成立。",
        "defEn": "A value \\(f(c)\\) such that \\(f(c)\\le f(x)\\) for all \\(x\\) in some open interval containing \\(c\\)."
      },
      {
        "termZh": "绝对极值",
        "termEn": "absolute extremum",
        "defZh": "\\(f(c)\\) 是整个区间上的最大值或最小值，分别称为绝对极大值或绝对极小值。",
        "defEn": "A value \\(f(c)\\) that is the largest or smallest value of the function on the entire interval, called the absolute maximum or absolute minimum."
      },
      {
        "termZh": "临界点",
        "termEn": "critical point",
        "defZh": "区间内部使 \\(f'(c)=0\\) 或 \\(f'(c)\\) 不存在的点。",
        "defEn": "An interior point where \\(f'(c)=0\\) or \\(f'(c)\\) does not exist."
      },
      {
        "termZh": "唯一临界点定理",
        "termEn": "unique critical point theorem",
        "defZh": "连续函数在区间上只有一个临界点且该点为局部极值时，该点也是同类型的绝对极值（FUN-4.A.8）。",
        "defEn": "If a continuous function has exactly one critical point on an interval and that point is a local extremum, then it is also the absolute extremum of the same type (FUN-4.A.8)."
      },
      {
        "termZh": "凹性",
        "termEn": "concavity",
        "defZh": "\\(f''>0\\) 时曲线凹向上，\\(f''<0\\) 时曲线凹向下。",
        "defEn": "The curve is concave up when \\(f''>0\\) and concave down when \\(f''<0\\)."
      },
      {
        "termZh": "连续函数",
        "termEn": "continuous function",
        "defZh": "满足 \\(\\lim_{x\\to c}f(x)=f(c)\\) 的函数；唯一临界点定理的必要条件。",
        "defEn": "A function satisfying \\(\\lim_{x\\to c}f(x)=f(c)\\); a necessary hypothesis for the unique critical point theorem."
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
        "latex": "f'(x)>0\\Rightarrow f\\text{ 递增},\\quad f''(x)>0\\Rightarrow f\\text{ 凹向上}",
        "note": "一阶导数定增减，二阶导数定凹凸。 · First derivative gives increase/decrease; second gives concavity."
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
