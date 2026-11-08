export const UNIT = {
  "id": "calc-u3",
  "code": "3",
  "titleZh": "复合、隐函数与反函数导数",
  "titleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "3.1": {
    "id": "math/calc-u3/3.1",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "code": "3.1",
    "titleZh": "链式法则",
    "titleEn": "The Chain Rule",
    "layer": "ap",
    "summary": "链式法则 · The Chain Rule",
    "learningObjectives": [
      "能陈述「链式法则」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The Chain Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「链式法则」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "链式法则（The Chain Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「链式法则」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "(f\\circ g)'(x)=f'(g(x))\\cdot g'(x)",
        "note": "链式法则。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「链式法则」的工作方程或机制链。"
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
      "掌握 3.1「链式法则」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「链式法则」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「链式法则」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "(f\\circ g)'(x)=f'(g(x))\\cdot g'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「链式法则」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「链式法则」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「链式法则」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u3",
        "code": "3.2",
        "title": "隐函数求导",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "chain-rule",
        "title": "链式法则"
      }
    ],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「链式法则」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「链式法则」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「链式法则」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "\\((f\\circ g)'(x)=f'(g(x))\\,g'(x)\\)。",
        "defEn": "The rule \\((f\\circ g)'(x)=f'(g(x))\\,g'(x)\\)."
      },
      {
        "termZh": "复合函数",
        "termEn": "composite function",
        "defZh": "\\(f(g(x))\\)，一个函数套在另一个函数内部。",
        "defEn": "A function \\(f(g(x))\\) in which one function is nested inside another."
      },
      {
        "termZh": "内函数",
        "termEn": "inner function",
        "defZh": "先作用的函数 \\(g(x)\\)。",
        "defEn": "The function \\(g(x)\\) that is applied first."
      },
      {
        "termZh": "外函数",
        "termEn": "outer function",
        "defZh": "后作用的函数 \\(f(u)\\)。",
        "defEn": "The function \\(f(u)\\) that is applied second."
      },
      {
        "termZh": "外层导数",
        "termEn": "outer derivative",
        "defZh": "\\(f'(g(x))\\)，在外函数处求导并保留内函数。",
        "defEn": "\\(f'(g(x))\\), the derivative of the outer function evaluated at the inner function."
      },
      {
        "termZh": "内层导数",
        "termEn": "inner derivative",
        "defZh": "\\(g'(x)\\)，乘在外层导数之后。",
        "defEn": "\\(g'(x)\\), multiplied after the outer derivative."
      }
    ]
  },
  "3.2": {
    "id": "math/calc-u3/3.2",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "code": "3.2",
    "titleZh": "隐函数求导",
    "titleEn": "Implicit Differentiation",
    "layer": "ap",
    "summary": "隐函数求导 · Implicit Differentiation",
    "learningObjectives": [
      "能陈述「隐函数求导」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Implicit Differentiation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「隐函数求导」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "隐函数求导（Implicit Differentiation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「隐函数求导」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「隐函数求导」的工作方程或机制链。"
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
      "掌握 3.2「隐函数求导」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「隐函数求导」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「隐函数求导」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「隐函数求导」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「隐函数求导」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「隐函数求导」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u3",
        "code": "3.1",
        "title": "链式法则",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.3",
        "title": "反函数导数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「隐函数求导」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「隐函数求导」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「隐函数求导」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "隐函数",
        "termEn": "implicit function",
        "defZh": "由方程 \\(F(x,y)=0\\) 确定、未解出 \\(y\\) 的函数。",
        "defEn": "A function defined by an equation \\(F(x,y)=0\\) without solving for \\(y\\)."
      },
      {
        "termZh": "隐函数求导",
        "termEn": "implicit differentiation",
        "defZh": "方程两边同时对 \\(x\\) 求导，并把 \\(y\\) 看作 \\(x\\) 的函数。",
        "defEn": "Differentiating both sides with respect to \\(x\\) while treating \\(y\\) as a function of \\(x\\)."
      },
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "对含 \\(y\\) 的项求导时产生因子 \\(\\dfrac{dy}{dx}\\)。",
        "defEn": "Differentiating a term containing \\(y\\) produces the factor \\(\\dfrac{dy}{dx}\\)."
      },
      {
        "termZh": "乘积法则",
        "termEn": "product rule",
        "defZh": "对 \\(xy\\) 等混合项求导时使用。",
        "defEn": "Used when differentiating mixed terms such as \\(xy\\)."
      },
      {
        "termZh": "切线斜率",
        "termEn": "tangent slope",
        "defZh": "解出 \\(\\dfrac{dy}{dx}\\) 后代入点的坐标得到。",
        "defEn": "Found by solving for \\(\\dfrac{dy}{dx}\\) and substituting the point's coordinates."
      },
      {
        "termZh": "竖直切线",
        "termEn": "vertical tangent",
        "defZh": "分母为零而分子非零时出现。",
        "defEn": "Occurs where the denominator is zero while the numerator is nonzero."
      }
    ]
  },
  "3.3": {
    "id": "math/calc-u3/3.3",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "code": "3.3",
    "titleZh": "反函数导数",
    "titleEn": "Differentiating Inverse Functions",
    "layer": "ap",
    "summary": "反函数导数 · Differentiating Inverse Functions",
    "learningObjectives": [
      "能陈述「反函数导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Differentiating Inverse Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「反函数导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "反函数导数（Differentiating Inverse Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「反函数导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「反函数导数」的工作方程或机制链。"
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
      "掌握 3.3「反函数导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「反函数导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「反函数导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「反函数导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「反函数导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「反函数导数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u3",
        "code": "3.2",
        "title": "隐函数求导",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.4",
        "title": "反三角函数导数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「反函数导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「反函数导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「反函数导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.4": {
    "id": "math/calc-u3/3.4",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "code": "3.4",
    "titleZh": "反三角函数导数",
    "titleEn": "Differentiating Inverse Trigonometric Functions",
    "layer": "ap",
    "summary": "反三角函数导数 · Differentiating Inverse Trigonometric Functions",
    "learningObjectives": [
      "能陈述「反三角函数导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Differentiating Inverse Trigonometric Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「反三角函数导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "反三角函数导数（Differentiating Inverse Trigonometric Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「反三角函数导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「反三角函数导数」的工作方程或机制链。"
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
      "掌握 3.4「反三角函数导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「反三角函数导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「反三角函数导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「反三角函数导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「反三角函数导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「反三角函数导数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u3",
        "code": "3.3",
        "title": "反函数导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.5",
        "title": "高阶导数选讲",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「反三角函数导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「反三角函数导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「反三角函数导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.5": {
    "id": "math/calc-u3/3.5",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "code": "3.5",
    "titleZh": "高阶导数选讲",
    "titleEn": "Selecting Procedures for Calculating Derivatives",
    "layer": "ap",
    "summary": "高阶导数选讲 · Selecting Procedures for Calculating Derivatives",
    "learningObjectives": [
      "能陈述「高阶导数选讲」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Selecting Procedures for Calculating Derivatives：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「高阶导数选讲」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "高阶导数选讲（Selecting Procedures for Calculating Derivatives）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「高阶导数选讲」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「高阶导数选讲」的工作方程或机制链。"
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
      "掌握 3.5「高阶导数选讲」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「高阶导数选讲」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「高阶导数选讲」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「高阶导数选讲」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「高阶导数选讲」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「高阶导数选讲」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u3",
        "code": "3.4",
        "title": "反三角函数导数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.6",
        "title": "高阶导数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「高阶导数选讲」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「高阶导数选讲」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「高阶导数选讲」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.6": {
    "id": "math/calc-u3/3.6",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "code": "3.6",
    "titleZh": "高阶导数",
    "titleEn": "Calculating Higher-Order Derivatives",
    "layer": "ap",
    "summary": "高阶导数 · Calculating Higher-Order Derivatives",
    "learningObjectives": [
      "能陈述「高阶导数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Calculating Higher-Order Derivatives：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「高阶导数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "高阶导数（Calculating Higher-Order Derivatives）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「高阶导数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「高阶导数」的工作方程或机制链。"
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
      "掌握 3.6「高阶导数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「高阶导数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「高阶导数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「高阶导数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「高阶导数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「高阶导数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u3",
        "code": "3.5",
        "title": "高阶导数选讲",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「高阶导数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「高阶导数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「高阶导数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
