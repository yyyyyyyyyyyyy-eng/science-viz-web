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
    "layer": "ap",
    "code": "3.3",
    "titleZh": "反函数导数",
    "titleEn": "Differentiating Inverse Functions",
    "summary": "反函数导数把原函数与反函数在对应点处的斜率联系起来：若 \\(y=f(x)\\) 在 \\(x=a\\) 处可导且 \\(f'(a)\\ne0\\)，则反函数在 \\(b=f(a)\\) 处可导，且 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)；等价地，\\(\\left(f^{-1}\\right)'(x)=\\dfrac{1}{f'\\left(f^{-1}(x)\\right)}\\)。倒数公式来自对复合恒等式 \\(f\\left(f^{-1}(y)\\right)=y\\) 两边关于 \\(y\\) 使用链式法则求导，而不是新的记忆规则。几何上，\\(y=f^{-1}(x)\\) 的图像是 \\(y=f(x)\\) 关于直线 \\(y=x\\) 的反射；反射把水平变化与竖直变化互换，所以两条曲线在对应点处的斜率互为倒数。若 \\(f'(a)=0\\)，原函数在该点有水平切线，反函数在对应点有竖直切线，反函数在该点不可导，公式失效。 · The derivative of an inverse function relates the slopes of a function and its inverse at corresponding points: if \\(y=f(x)\\) is differentiable at \\(x=a\\) and \\(f'(a)\\ne0\\), then the inverse is differentiable at \\(b=f(a)\\) and \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\); equivalently, \\(\\left(f^{-1}\\right)'(x)=\\dfrac{1}{f'\\left(f^{-1}(x)\\right)}\\). The reciprocal formula comes from differentiating the composition identity \\(f\\left(f^{-1}(y)\\right)=y\\) with respect to \\(y\\) by the chain rule; it is not a separate memorized rule. Geometrically, the graph of \\(y=f^{-1}(x)\\) is the reflection of \\(y=f(x)\\) across the line \\(y=x\\). The reflection interchanges horizontal and vertical changes, so the slopes at corresponding points are reciprocals. If \\(f'(a)=0\\), the original graph has a horizontal tangent, the inverse graph has a vertical tangent, and the inverse is not differentiable there, so the formula fails.",
    "learningObjectives": [
      "能由复合恒等式 \\(f\\left(f^{-1}(y)\\right)=y\\) 出发，用链式法则推导 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)，并说明 \\(b=f(a)\\)。 · Derive \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\) from the composition identity \\(f\\left(f^{-1}(y)\\right)=y\\) using the chain rule, and explain that \\(b=f(a)\\).",
      "能判断反函数在给定点是否可导：要求 \\(f\\) 在对应点可导、\\(f'(a)\\ne0\\)，并能处理 \\(f'(a)=0\\) 的失败情形。 · Decide whether an inverse function is differentiable at a given point: require \\(f\\) differentiable at the corresponding point and \\(f'(a)\\ne0\\), and handle the failure case \\(f'(a)=0\\).",
      "能从图像读出关于 \\(y=x\\) 的反射关系，用斜率互为倒数解释并求反函数在对应点处的切线。 · Read the reflection across \\(y=x\\) from a graph, explain reciprocal slopes, and find the tangent to an inverse function at a corresponding point.",
      "能在符号、图像、数值表格三种表征间转换，并正确区分 \\(f'(a)\\)、\\(f'(b)\\) 与 \\(\\dfrac{1}{f'(a)}\\)。 · Translate among symbolic, graphical, and tabular representations, and distinguish \\(f'(a)\\), \\(f'(b)\\), and \\(\\dfrac{1}{f'(a)}\\).",
      "能用单位解释反函数斜率：若 \\(f'\\) 的单位是“\\(y\\) 单位每 \\(x\\) 单位”，则反函数斜率的单位相反。 · Interpret inverse slopes with units: if \\(f'\\) has units of \\(y\\)-units per \\(x\\)-unit, the inverse slope has the reciprocal units."
    ],
    "essentialKnowledge": [
      "反函数定义：\\(f^{-1}(b)=a\\) 当且仅当 \\(f(a)=b\\)；复合恒等式为 \\(f\\left(f^{-1}(y)\\right)=y\\) 与 \\(f^{-1}\\left(f(x)\\right)=x\\)。 · Definition of an inverse function: \\(f^{-1}(b)=a\\) exactly when \\(f(a)=b\\); the composition identities are \\(f\\left(f^{-1}(y)\\right)=y\\) and \\(f^{-1}\\left(f(x)\\right)=x\\).",
      "链式法则推导：对 \\(f\\left(f^{-1}(y)\\right)=y\\) 两边关于 \\(y\\) 求导，得 \\(f'\\left(f^{-1}(y)\\right)\\left(f^{-1}\\right)'(y)=1\\)，所以 \\(\\left(f^{-1}\\right)'(y)=\\dfrac{1}{f'\\left(f^{-1}(y)\\right)}\\)。 · Chain-rule derivation: differentiate both sides of \\(f\\left(f^{-1}(y)\\right)=y\\) with respect to \\(y\\) to get \\(f'\\left(f^{-1}(y)\\right)\\left(f^{-1}\\right)'(y)=1\\), hence \\(\\left(f^{-1}\\right)'(y)=\\dfrac{1}{f'\\left(f^{-1}(y)\\right)}\\).",
      "在对应点 \\(b=f(a)\\) 处写成 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)；分母是原函数在 \\(a\\) 处的导数，不是 \\(b\\) 处的导数。 · At corresponding points \\(b=f(a)\\), write \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\); the denominator is the original derivative at \\(a\\), not at \\(b\\).",
      "存在条件：\\(f\\) 在 \\(a\\) 附近严格单调（一一对应）且在 \\(a\\) 处可导，\\(f'(a)\\ne0\\)；这些条件保证反函数在 \\(b=f(a)\\) 处可导。 · Existence conditions: \\(f\\) is strictly monotone (one-to-one) near \\(a\\), differentiable at \\(a\\), and \\(f'(a)\\ne0\\); these guarantee that the inverse is differentiable at \\(b=f(a)\\).",
      "几何意义：\\(y=f^{-1}(x)\\) 与 \\(y=f(x)\\) 关于 \\(y=x\\) 对称；原图斜率 \\(m\\) 对应反函数斜率 \\(\\dfrac{1}{m}\\)。 · Geometric meaning: \\(y=f^{-1}(x)\\) and \\(y=f(x)\\) are symmetric about \\(y=x\\); a slope \\(m\\) on the original graph corresponds to slope \\(\\dfrac{1}{m}\\) on the inverse graph.",
      "水平切线与竖直切线：\\(f'(a)=0\\) 时原图切线水平，反函数在 \\(b=f(a)\\) 处切线竖直，导数不存在。 · Horizontal and vertical tangents: when \\(f'(a)=0\\) the original tangent is horizontal, the inverse tangent at \\(b=f(a)\\) is vertical, and the inverse derivative does not exist.",
      "验证方法：若能显式求出反函数，可直接对反函数求导，再与倒数公式比较。 · Verification: if the inverse can be found explicitly, differentiate it directly and compare with the reciprocal formula.",
      "表格方法：先在表中找满足 \\(f(a)=b\\) 的 \\(a\\)，再取 \\(f'(a)\\) 的倒数，得到 \\(\\left(f^{-1}\\right)'(b)\\)。 · Table method: first find \\(a\\) with \\(f(a)=b\\), then take the reciprocal of \\(f'(a)\\) to obtain \\(\\left(f^{-1}\\right)'(b)\\).",
      "反函数与其原函数单调性相同；反射不改变递增或递减，只把斜率取倒数。 · An inverse function has the same monotonicity as the original function; reflection preserves increasing or decreasing behavior and only reciprocates the slope.",
      "该公式是 3.4 反三角函数导数的基础：把 \\(f=\\sin\\)、\\(\\cos\\)、\\(\\tan\\) 代入即可得到 \\(\\arcsin\\)、\\(\\arccos\\)、\\(\\arctan\\) 的导数。 · This formula underlies the inverse trigonometric derivatives in 3.4: substituting \\(f=\\sin\\), \\(\\cos\\), or \\(\\tan\\) gives the derivatives of \\(\\arcsin\\), \\(\\arccos\\), and \\(\\arctan\\)."
    ],
    "definition": "设 \\(f\\) 在包含 \\(a\\) 的区间上严格单调且可导，\\(b=f(a)\\)。若 \\(f'(a)\\ne0\\)，则反函数 \\(f^{-1}\\) 在 \\(b\\) 处可导，且 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)。推导时从 \\(f\\left(f^{-1}(y)\\right)=y\\) 出发，两边关于 \\(y\\) 求导：左边用链式法则得到 \\(f'\\left(f^{-1}(y)\\right)\\left(f^{-1}\\right)'(y)=1\\)，因此 \\(\\left(f^{-1}\\right)'(y)=\\dfrac{1}{f'\\left(f^{-1}(y)\\right)}\\)；令 \\(y=b=f(a)\\)，即得 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)。条件 \\(f'(a)\\ne0\\) 不可省略：它保证原图在该点不是水平切线，从而反函数在该点不是竖直切线。若 \\(f'(a)=0\\)，倒数公式无定义，反函数在对应点可能不可导。 · Let \\(f\\) be strictly monotone and differentiable on an interval containing \\(a\\), and let \\(b=f(a)\\). If \\(f'(a)\\ne0\\), then the inverse \\(f^{-1}\\) is differentiable at \\(b\\), and \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\). To derive it, start from \\(f\\left(f^{-1}(y)\\right)=y\\) and differentiate both sides with respect to \\(y\\): the chain rule gives \\(f'\\left(f^{-1}(y)\\right)\\left(f^{-1}\\right)'(y)=1\\), so \\(\\left(f^{-1}\\right)'(y)=\\dfrac{1}{f'\\left(f^{-1}(y)\\right)}\\). Setting \\(y=b=f(a)\\) gives \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\). The condition \\(f'(a)\\ne0\\) cannot be omitted: it ensures the original tangent is not horizontal, so the inverse tangent is not vertical. If \\(f'(a)=0\\), the reciprocal formula is undefined, and the inverse may fail to be differentiable at the corresponding point.",
    "intuition": "把图像沿 \\(y=x\\) 翻折：原图上“向右走 \\(1\\)、向上走 \\(m\\)”的小三角形，翻折后变成“向右走 \\(m\\)、向上走 \\(1\\)”的三角形，所以新斜率是 \\(\\dfrac{1}{m}\\)。若原图切线水平（\\(m=0\\)），翻折后就是竖直切线，斜率不存在。反过来，原图越陡，反函数越平；原图越平，反函数越陡。 · Reflect the graph across \\(y=x\\): a small triangle that moves \\(1\\) unit right and \\(m\\) units up on the original graph becomes a triangle that moves \\(m\\) units right and \\(1\\) unit up on the inverse graph, so the new slope is \\(\\dfrac{1}{m}\\). If the original tangent is horizontal (\\(m=0\\)), the reflected tangent is vertical and has no slope. Conversely, the steeper the original graph, the flatter the inverse; the flatter the original, the steeper the inverse.",
    "formulas": [
      {
        "latex": "f\\left(f^{-1}(y)\\right)=y,\\quad f^{-1}\\left(f(x)\\right)=x",
        "note": "反函数的复合恒等式，是推导反函数导数的起点。 · The composition identities for inverse functions; they are the starting point for deriving the inverse derivative."
      },
      {
        "latex": "\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)},\\quad b=f(a)",
        "note": "反函数在对应点处的导数等于原函数导数的倒数。 · The inverse derivative at a corresponding point is the reciprocal of the original derivative."
      },
      {
        "latex": "\\left(f^{-1}\\right)'(x)=\\dfrac{1}{f'\\left(f^{-1}(x)\\right)}",
        "note": "以 \\(x\\) 为反函数输入时的等价写法。 · Equivalent form when \\(x\\) is the input to the inverse function."
      },
      {
        "latex": "\\left(f^{-1}\\right)'(f(a))=\\dfrac{1}{f'(a)}",
        "note": "在 \\(b=f(a)\\) 处求值的紧凑写法。 · Compact form evaluated at \\(b=f(a)\\)."
      },
      {
        "latex": "m_{f^{-1}}=\\dfrac{1}{m_f}",
        "note": "对应点处两条曲线的斜率互为倒数。 · At corresponding points the two slopes are reciprocals."
      },
      {
        "latex": "f'(a)=0\\ \\Rightarrow\\ f^{-1}\\ \\text{在}\\ b=f(a)\\ \\text{处不可导（竖直切线）}",
        "note": "零导数使倒数公式失效；反函数出现竖直切线。 · A zero derivative makes the reciprocal formula fail; the inverse has a vertical tangent."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}y}\\left[f\\left(f^{-1}(y)\\right)\\right]=f'\\left(f^{-1}(y)\\right)\\left(f^{-1}\\right)'(y)",
        "note": "链式法则作用在复合恒等式左边的结果。 · The chain rule applied to the left side of the composition identity."
      },
      {
        "latex": "\\left(f^{-1}\\right)'(b)=\\left.\\dfrac{1}{f'(x)}\\right|_{x=a}",
        "note": "先求 \\(f'(x)\\)，再把 \\(x=a\\) 代入后取倒数。 · Find \\(f'(x)\\), substitute \\(x=a\\), then take the reciprocal."
      }
    ],
    "derivationNotes": [
      {
        "from": "复合恒等式 · composition identity",
        "to": "链式法则求导 · differentiate by the chain rule",
        "note": "对 \\(f\\left(f^{-1}(y)\\right)=y\\) 两边关于 \\(y\\) 求导；左边外层 \\(f\\) 在内层 \\(f^{-1}(y)\\) 处求导，再乘内层导数 \\(\\left(f^{-1}\\right)'(y)\\)。 · Differentiate both sides of \\(f\\left(f^{-1}(y)\\right)=y\\) with respect to \\(y\\); the outer function \\(f\\) is differentiated at the inner value \\(f^{-1}(y)\\), then multiplied by the inner derivative \\(\\left(f^{-1}\\right)'(y)\\)."
      },
      {
        "from": "链式法则方程 · chain-rule equation",
        "to": "倒数公式 · reciprocal formula",
        "note": "得到 \\(f'\\left(f^{-1}(y)\\right)\\left(f^{-1}\\right)'(y)=1\\)；因为 \\(f'\\left(f^{-1}(y)\\right)\\ne0\\)，两边相除得 \\(\\left(f^{-1}\\right)'(y)=\\dfrac{1}{f'\\left(f^{-1}(y)\\right)}\\)。 · Obtain \\(f'\\left(f^{-1}(y)\\right)\\left(f^{-1}\\right)'(y)=1\\); since \\(f'\\left(f^{-1}(y)\\right)\\ne0\\), divide both sides to get \\(\\left(f^{-1}\\right)'(y)=\\dfrac{1}{f'\\left(f^{-1}(y)\\right)}\\)."
      },
      {
        "from": "一般点 · general point",
        "to": "对应点记号 · corresponding-point notation",
        "note": "令 \\(y=b=f(a)\\)，则 \\(f^{-1}(b)=a\\)，公式写成 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)；这就是 AP 题最常用的形式。 · Let \\(y=b=f(a)\\); then \\(f^{-1}(b)=a\\), and the formula becomes \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\), the form most often used in AP problems."
      },
      {
        "from": "几何反射 · geometric reflection",
        "to": "斜率倒数 · reciprocal slopes",
        "note": "关于 \\(y=x\\) 的反射交换横纵坐标，也交换“水平变化”与“竖直变化”；原斜率 \\(m=\\dfrac{\\Delta y}{\\Delta x}\\) 变成 \\(\\dfrac{\\Delta x}{\\Delta y}=\\dfrac{1}{m}\\)。 · Reflection across \\(y=x\\) interchanges horizontal and vertical coordinates, hence horizontal and vertical changes; an original slope \\(m=\\dfrac{\\Delta y}{\\Delta x}\\) becomes \\(\\dfrac{\\Delta x}{\\Delta y}=\\dfrac{1}{m}\\)."
      },
      {
        "from": "显式反函数 · explicit inverse",
        "to": "公式验证 · formula check",
        "note": "例如 \\(f(x)=2x+3\\) 的反函数为 \\(f^{-1}(x)=\\dfrac{x-3}{2}\\)，直接求导得 \\(\\dfrac{1}{2}\\)，与 \\(\\dfrac{1}{f'(x)}=\\dfrac{1}{2}\\) 一致。 · For example, the inverse of \\(f(x)=2x+3\\) is \\(f^{-1}(x)=\\dfrac{x-3}{2}\\); direct differentiation gives \\(\\dfrac{1}{2}\\), matching \\(\\dfrac{1}{f'(x)}=\\dfrac{1}{2}\\)."
      },
      {
        "from": "零导数 · zero derivative",
        "to": "竖直切线 · vertical tangent",
        "note": "\\(f(x)=x^{3}\\) 在 \\(a=0\\) 处 \\(f'(0)=0\\)，反函数 \\(f^{-1}(y)=\\sqrt[3]{y}\\) 在 \\(0\\) 处的差商为 \\(\\dfrac{\\sqrt[3]{h}}{h}=\\dfrac{1}{\\sqrt[3]{h^{2}}}\\to\\infty\\)，所以反函数在 \\(0\\) 处不可导。 · For \\(f(x)=x^{3}\\) at \\(a=0\\), \\(f'(0)=0\\); the difference quotient of the inverse \\(f^{-1}(y)=\\sqrt[3]{y}\\) at \\(0\\) is \\(\\dfrac{\\sqrt[3]{h}}{h}=\\dfrac{1}{\\sqrt[3]{h^{2}}}\\to\\infty\\), so the inverse is not differentiable at \\(0\\)."
      },
      {
        "from": "单位 · units",
        "to": "斜率单位 · slope units",
        "note": "若 \\(f\\) 把 \\(x\\) 的单位映射为 \\(y\\) 的单位，则 \\(f'\\) 的单位是 \\(y\\) 单位每 \\(x\\) 单位，\\(\\left(f^{-1}\\right)'\\) 的单位是 \\(x\\) 单位每 \\(y\\) 单位。 · If \\(f\\) maps \\(x\\)-units to \\(y\\)-units, then \\(f'\\) has units of \\(y\\)-units per \\(x\\)-unit, and \\(\\left(f^{-1}\\right)'\\) has units of \\(x\\)-units per \\(y\\)-unit."
      }
    ],
    "conditions": [
      "\\(f\\) 在包含 \\(a\\) 的某区间上严格单调（一一对应），以保证反函数存在。 · \\(f\\) is strictly monotone (one-to-one) on an interval containing \\(a\\), ensuring the inverse exists.",
      "\\(f\\) 在 \\(a\\) 处可导，且 \\(a\\) 在定义域内。 · \\(f\\) is differentiable at \\(a\\), and \\(a\\) lies in the domain.",
      "\\(f'(a)\\ne0\\)；否则倒数无定义，反函数在 \\(b=f(a)\\) 处可能有竖直切线。 · \\(f'(a)\\ne0\\); otherwise the reciprocal is undefined and the inverse may have a vertical tangent at \\(b=f(a)\\).",
      "\\(b=f(a)\\) 必须在反函数的定义域（即 \\(f\\) 的值域）内。 · \\(b=f(a)\\) must lie in the domain of the inverse, which is the range of \\(f\\).",
      "反函数在 \\(b\\) 处可导的充分条件还包括 \\(f'\\) 在 \\(a\\) 附近连续且非零；AP 题通常直接给出可导与非零导数。 · A sufficient condition for the inverse to be differentiable at \\(b\\) also includes \\(f'\\) continuous and nonzero near \\(a\\); AP problems usually state differentiability and a nonzero derivative directly.",
      "先由 \\(b\\) 求 \\(a=f^{-1}(b)\\)，再计算 \\(f'(a)\\)；不要直接把 \\(b\\) 代入 \\(f'\\)。 · First find \\(a=f^{-1}(b)\\) from \\(b\\), then compute \\(f'(a)\\); do not substitute \\(b\\) directly into \\(f'\\).",
      "若 \\(f\\) 只在限制定义域上可逆，必须使用该限制分支的导数与对应点。 · If \\(f\\) is invertible only on a restricted domain, use the derivative and corresponding point of that branch.",
      "端点或不可导点不能机械套公式；应先检查 \\(f'\\) 是否存在且非零。 · Do not apply the formula mechanically at endpoints or nondifferentiable points; first check that \\(f'\\) exists and is nonzero.",
      "单位要随变量互换：原函数斜率的单位与反函数斜率的单位互为倒数。 · Units interchange with the variables: the units of the original slope and the inverse slope are reciprocals."
    ],
    "keyPoints": [
      "反函数导数公式：\\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)，其中 \\(b=f(a)\\)。 · Inverse derivative formula: \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\), where \\(b=f(a)\\).",
      "公式由 \\(f\\left(f^{-1}(y)\\right)=y\\) 与链式法则推出，不是独立公理。 · The formula follows from \\(f\\left(f^{-1}(y)\\right)=y\\) and the chain rule; it is not an independent axiom.",
      "分母在 \\(a=f^{-1}(b)\\) 处取值，而不是在 \\(b\\) 处取值。 · The denominator is evaluated at \\(a=f^{-1}(b)\\), not at \\(b\\).",
      "条件 \\(f'(a)\\ne0\\) 不可省略。 · The condition \\(f'(a)\\ne0\\) cannot be omitted.",
      "图像关于 \\(y=x\\) 对称，对应点斜率互为倒数。 · The graphs are symmetric about \\(y=x\\), and slopes at corresponding points are reciprocals.",
      "原图水平切线对应反函数竖直切线。 · A horizontal tangent on the original graph corresponds to a vertical tangent on the inverse graph.",
      "反函数与原函数单调性相同。 · An inverse function has the same monotonicity as the original function.",
      "表格题先找 \\(f(a)=b\\)，再取 \\(f'(a)\\) 的倒数。 · In table problems, first find \\(f(a)=b\\), then take the reciprocal of \\(f'(a)\\).",
      "显式反函数可用于验证倒数公式。 · An explicit inverse can be used to verify the reciprocal formula.",
      "单位随变量互换，斜率的单位也取倒数。 · Units interchange with the variables, so slope units are also reciprocated."
    ],
    "misconceptions": [
      "把 \\(\\left(f^{-1}\\right)'(b)\\) 写成 \\(\\dfrac{1}{f'(b)}\\)；应使用 \\(a=f^{-1}(b)\\)，即 \\(\\dfrac{1}{f'(a)}\\)。 · Writing \\(\\left(f^{-1}\\right)'(b)\\) as \\(\\dfrac{1}{f'(b)}\\); instead use \\(a=f^{-1}(b)\\), so the value is \\(\\dfrac{1}{f'(a)}\\).",
      "把 \\(f^{-1}(x)\\) 误读为 \\(\\dfrac{1}{f(x)}\\)；\\(f^{-1}\\) 表示反函数，不是倒数。 · Misreading \\(f^{-1}(x)\\) as \\(\\dfrac{1}{f(x)}\\); \\(f^{-1}\\) denotes the inverse function, not a reciprocal.",
      "认为 \\(f'(a)=0\\) 时反函数导数仍为无穷；导数不存在，不能写成有限数。 · Assuming the inverse derivative is infinite when \\(f'(a)=0\\); the derivative does not exist and is not a finite number.",
      "忽略一一对应或定义域限制，对不可逆函数直接套公式。 · Ignoring one-to-one or domain restrictions and applying the formula to a non-invertible function.",
      "把原函数与反函数图像当成同一条曲线，或忘记关于 \\(y=x\\) 的反射关系。 · Treating the original and inverse graphs as the same curve, or forgetting the reflection across \\(y=x\\).",
      "求导时漏掉链式法则，把 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}y}\\left[f\\left(f^{-1}(y)\\right)\\right]\\) 直接写成 \\(f'\\left(f^{-1}(y)\\right)\\)。 · Omitting the chain rule and writing \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}y}\\left[f\\left(f^{-1}(y)\\right)\\right]\\) as \\(f'\\left(f^{-1}(y)\\right)\\).",
      "先代入 \\(b\\) 再求 \\(f'\\)，导致分母取错点。 · Substituting \\(b\\) before differentiating \\(f'\\), so the denominator is evaluated at the wrong point.",
      "把反函数的斜率单位与原函数相同；两者应互为倒数。 · Using the same slope units for the inverse as for the original; they should be reciprocals.",
      "在端点或尖点处机械使用公式，而不检查可导性。 · Applying the formula mechanically at endpoints or cusps without checking differentiability.",
      "认为反函数一定改变单调性；实际上反射保持递增或递减。 · Assuming the inverse must reverse monotonicity; reflection actually preserves increasing or decreasing behavior."
    ],
    "examples": [
      {
        "title": "例 1 · 线性函数 · Linear Function · Example 1 · Linear Function",
        "prompt": "设 \\(f(x)=2x+3\\)。求 \\(\\left(f^{-1}\\right)'(5)\\)，并用显式反函数验证。 · Let \\(f(x)=2x+3\\). Find \\(\\left(f^{-1}\\right)'(5)\\) and verify it using the explicit inverse.",
        "steps": [
          "由 \\(f(1)=5\\) 得 \\(a=1\\)，\\(b=5\\)。 · Since \\(f(1)=5\\), \\(a=1\\) and \\(b=5\\).",
          "\\(f'(x)=2\\)，所以 \\(f'(1)=2\\)。 · \\(f'(x)=2\\), so \\(f'(1)=2\\).",
          "\\(\\left(f^{-1}\\right)'(5)=\\dfrac{1}{f'(1)}=\\dfrac{1}{2}\\)。 · \\(\\left(f^{-1}\\right)'(5)=\\dfrac{1}{f'(1)}=\\dfrac{1}{2}\\).",
          "显式反函数 \\(f^{-1}(x)=\\dfrac{x-3}{2}\\)，其导数恒为 \\(\\dfrac{1}{2}\\)，与公式一致。 · The explicit inverse is \\(f^{-1}(x)=\\dfrac{x-3}{2}\\), whose derivative is always \\(\\dfrac{1}{2}\\), matching the formula."
        ],
        "solution": "\\(\\left(f^{-1}\\right)'(5)=\\dfrac{1}{2}\\)。 · \\(\\left(f^{-1}\\right)'(5)=\\dfrac{1}{2}\\).",
        "solutionLatex": "\\left(f^{-1}\\right)'(5)=\\dfrac{1}{2}"
      },
      {
        "title": "例 2 · 三次多项式 · Cubic Polynomial · Example 2 · Cubic Polynomial",
        "prompt": "设 \\(f(x)=x^{3}+2x\\)。求 \\(\\left(f^{-1}\\right)'(3)\\)。 · Let \\(f(x)=x^{3}+2x\\). Find \\(\\left(f^{-1}\\right)'(3)\\).",
        "steps": [
          "观察 \\(f(1)=1+2=3\\)，所以 \\(a=1\\)，\\(b=3\\)。 · Observe that \\(f(1)=1+2=3\\), so \\(a=1\\) and \\(b=3\\).",
          "\\(f'(x)=3x^{2}+2\\)，所以 \\(f'(1)=5\\)。 · \\(f'(x)=3x^{2}+2\\), so \\(f'(1)=5\\).",
          "\\(\\left(f^{-1}\\right)'(3)=\\dfrac{1}{f'(1)}=\\dfrac{1}{5}\\)。 · \\(\\left(f^{-1}\\right)'(3)=\\dfrac{1}{f'(1)}=\\dfrac{1}{5}\\).",
          "检查：\\(f'(x)>0\\) 对所有 \\(x\\) 成立，\\(f\\) 严格递增，反函数存在且斜率为正，\\(\\dfrac{1}{5}\\) 合理。 · Check: \\(f'(x)>0\\) for all \\(x\\), so \\(f\\) is strictly increasing, the inverse exists, and its positive slope \\(\\dfrac{1}{5}\\) is reasonable."
        ],
        "solution": "\\(\\left(f^{-1}\\right)'(3)=\\dfrac{1}{5}\\)。 · \\(\\left(f^{-1}\\right)'(3)=\\dfrac{1}{5}\\).",
        "solutionLatex": "\\left(f^{-1}\\right)'(3)=\\dfrac{1}{5}"
      },
      {
        "title": "例 3 · 指数与对数 · Exponential and Logarithm · Example 3 · Exponential and Logarithm",
        "prompt": "设 \\(f(x)=e^{x}\\)。求 \\(\\left(f^{-1}\\right)'(e)\\)，并与 \\(f^{-1}(x)=\\ln x\\) 的导数比较。 · Let \\(f(x)=e^{x}\\). Find \\(\\left(f^{-1}\\right)'(e)\\) and compare it with the derivative of \\(f^{-1}(x)=\\ln x\\).",
        "steps": [
          "\\(f(1)=e\\)，所以 \\(a=1\\)，\\(b=e\\)。 · Since \\(f(1)=e\\), \\(a=1\\) and \\(b=e\\).",
          "\\(f'(x)=e^{x}\\)，所以 \\(f'(1)=e\\)。 · \\(f'(x)=e^{x}\\), so \\(f'(1)=e\\).",
          "\\(\\left(f^{-1}\\right)'(e)=\\dfrac{1}{f'(1)}=\\dfrac{1}{e}\\)。 · \\(\\left(f^{-1}\\right)'(e)=\\dfrac{1}{f'(1)}=\\dfrac{1}{e}\\).",
          "直接求导：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\)，在 \\(x=e\\) 处也是 \\(\\dfrac{1}{e}\\)，两者一致。 · Directly, \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\ln x]=\\dfrac{1}{x}\\), which at \\(x=e\\) is also \\(\\dfrac{1}{e}\\), so the results agree."
        ],
        "solution": "\\(\\left(f^{-1}\\right)'(e)=\\dfrac{1}{e}\\)，与 \\(\\ln x\\) 在 \\(e\\) 处的导数相同。 · \\(\\left(f^{-1}\\right)'(e)=\\dfrac{1}{e}\\), the same as the derivative of \\(\\ln x\\) at \\(e\\).",
        "solutionLatex": "\\left(f^{-1}\\right)'(e)=\\dfrac{1}{e}"
      },
      {
        "title": "例 4 · 平方根 · Square Root · Example 4 · Square Root",
        "prompt": "设 \\(f(x)=\\sqrt{x}\\)（\\(x>0\\)）。求 \\(\\left(f^{-1}\\right)'(2)\\)，并用 \\(f^{-1}(x)=x^{2}\\) 验证。 · Let \\(f(x)=\\sqrt{x}\\) for \\(x>0\\). Find \\(\\left(f^{-1}\\right)'(2)\\) and verify with \\(f^{-1}(x)=x^{2}\\).",
        "steps": [
          "\\(f(4)=2\\)，所以 \\(a=4\\)，\\(b=2\\)。 · Since \\(f(4)=2\\), \\(a=4\\) and \\(b=2\\).",
          "\\(f'(x)=\\dfrac{1}{2\\sqrt{x}}\\)，所以 \\(f'(4)=\\dfrac{1}{4}\\)。 · \\(f'(x)=\\dfrac{1}{2\\sqrt{x}}\\), so \\(f'(4)=\\dfrac{1}{4}\\).",
          "\\(\\left(f^{-1}\\right)'(2)=\\dfrac{1}{f'(4)}=4\\)。 · \\(\\left(f^{-1}\\right)'(2)=\\dfrac{1}{f'(4)}=4\\).",
          "验证：\\(f^{-1}(x)=x^{2}\\)（\\(x>0\\)），其导数为 \\(2x\\)，在 \\(x=2\\) 处为 \\(4\\)。 · Verify: \\(f^{-1}(x)=x^{2}\\) for \\(x>0\\), whose derivative is \\(2x\\), equal to \\(4\\) at \\(x=2\\)."
        ],
        "solution": "\\(\\left(f^{-1}\\right)'(2)=4\\)。 · \\(\\left(f^{-1}\\right)'(2)=4\\).",
        "solutionLatex": "\\left(f^{-1}\\right)'(2)=4"
      },
      {
        "title": "例 5 · 表格数据 · Table Data · Example 5 · Table Data",
        "prompt": "已知 \\(f(2)=5\\)、\\(f'(2)=-3\\)，且 \\(f\\) 在 \\(2\\) 附近一一对应。求 \\(\\left(f^{-1}\\right)'(5)\\)，并判断反函数在 \\(5\\) 附近是递增还是递减。 · Given \\(f(2)=5\\) and \\(f'(2)=-3\\), and that \\(f\\) is one-to-one near \\(2\\), find \\(\\left(f^{-1}\\right)'(5)\\) and decide whether the inverse is increasing or decreasing near \\(5\\).",
        "steps": [
          "由 \\(f(2)=5\\) 得 \\(a=2\\)，\\(b=5\\)。 · From \\(f(2)=5\\), \\(a=2\\) and \\(b=5\\).",
          "\\(\\left(f^{-1}\\right)'(5)=\\dfrac{1}{f'(2)}=\\dfrac{1}{-3}=-\\dfrac{1}{3}\\)。 · \\(\\left(f^{-1}\\right)'(5)=\\dfrac{1}{f'(2)}=\\dfrac{1}{-3}=-\\dfrac{1}{3}\\).",
          "\\(f'(2)<0\\) 说明 \\(f\\) 在 \\(2\\) 附近递减；反函数保持相同的单调性，所以在 \\(5\\) 附近也递减。 · \\(f'(2)<0\\) means \\(f\\) is decreasing near \\(2\\); the inverse has the same monotonicity, so it is also decreasing near \\(5\\)."
        ],
        "solution": "\\(\\left(f^{-1}\\right)'(5)=-\\dfrac{1}{3}\\)，反函数在 \\(5\\) 附近递减。 · \\(\\left(f^{-1}\\right)'(5)=-\\dfrac{1}{3}\\), and the inverse is decreasing near \\(5\\).",
        "solutionLatex": "\\left(f^{-1}\\right)'(5)=-\\dfrac{1}{3}"
      },
      {
        "title": "例 6 · 三角函数预览 · Trigonometric Preview · Example 6 · Trigonometric Preview",
        "prompt": "设 \\(f(x)=\\sin x\\)，限制在 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\) 上。求反函数在 \\(b=\\dfrac{1}{2}\\) 处的导数，其中 \\(a=\\dfrac{\\pi}{6}\\)。 · Let \\(f(x)=\\sin x\\) on \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\). Find the derivative of the inverse at \\(b=\\dfrac{1}{2}\\), where \\(a=\\dfrac{\\pi}{6}\\).",
        "steps": [
          "\\(f\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{1}{2}\\)，所以 \\(a=\\dfrac{\\pi}{6}\\)，\\(b=\\dfrac{1}{2}\\)。 · \\(f\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{1}{2}\\), so \\(a=\\dfrac{\\pi}{6}\\) and \\(b=\\dfrac{1}{2}\\).",
          "\\(f'(x)=\\cos x\\)，所以 \\(f'\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt{3}}{2}\\)。 · \\(f'(x)=\\cos x\\), so \\(f'\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt{3}}{2}\\).",
          "\\(\\left(f^{-1}\\right)'\\left(\\dfrac{1}{2}\\right)=\\dfrac{1}{f'\\left(\\dfrac{\\pi}{6}\\right)}=\\dfrac{2}{\\sqrt{3}}\\)。 · \\(\\left(f^{-1}\\right)'\\left(\\dfrac{1}{2}\\right)=\\dfrac{1}{f'\\left(\\dfrac{\\pi}{6}\\right)}=\\dfrac{2}{\\sqrt{3}}\\).",
          "这与 3.4 中 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin x]=\\dfrac{1}{\\sqrt{1-x^{2}}}\\) 在 \\(x=\\dfrac{1}{2}\\) 处的值 \\(\\dfrac{2}{\\sqrt{3}}\\) 一致。 · This agrees with \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin x]=\\dfrac{1}{\\sqrt{1-x^{2}}}\\) from 3.4 evaluated at \\(x=\\dfrac{1}{2}\\), which is \\(\\dfrac{2}{\\sqrt{3}}\\)."
        ],
        "solution": "\\(\\left(f^{-1}\\right)'\\left(\\dfrac{1}{2}\\right)=\\dfrac{2}{\\sqrt{3}}\\)。 · \\(\\left(f^{-1}\\right)'\\left(\\dfrac{1}{2}\\right)=\\dfrac{2}{\\sqrt{3}}\\).",
        "solutionLatex": "\\left(f^{-1}\\right)'\\left(\\dfrac{1}{2}\\right)=\\dfrac{2}{\\sqrt{3}}"
      },
      {
        "title": "例 7 · 零导数的失败 · Failure When the Derivative Is Zero · Example 7 · Failure When the Derivative Is Zero",
        "prompt": "设 \\(f(x)=x^{3}\\)。说明为什么在 \\(b=0\\) 处不能使用 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)，并用差商证明反函数在 \\(0\\) 处不可导。 · Let \\(f(x)=x^{3}\\). Explain why \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\) cannot be used at \\(b=0\\), and use a difference quotient to show that the inverse is not differentiable at \\(0\\).",
        "steps": [
          "\\(f(0)=0\\)，所以 \\(a=0\\)，\\(b=0\\)；\\(f'(x)=3x^{2}\\)，故 \\(f'(0)=0\\)。 · \\(f(0)=0\\), so \\(a=0\\) and \\(b=0\\); \\(f'(x)=3x^{2}\\), so \\(f'(0)=0\\).",
          "倒数公式要求分母非零，而这里 \\(f'(0)=0\\)，所以公式失效。 · The reciprocal formula requires a nonzero denominator, but here \\(f'(0)=0\\), so the formula fails.",
          "反函数为 \\(f^{-1}(y)=\\sqrt[3]{y}\\)。在 \\(0\\) 处的差商为 \\(\\dfrac{\\sqrt[3]{h}-0}{h}=\\dfrac{1}{\\sqrt[3]{h^{2}}}\\)，当 \\(h\\to0\\) 时趋于无穷。 · The inverse is \\(f^{-1}(y)=\\sqrt[3]{y}\\). Its difference quotient at \\(0\\) is \\(\\dfrac{\\sqrt[3]{h}-0}{h}=\\dfrac{1}{\\sqrt[3]{h^{2}}}\\), which tends to infinity as \\(h\\to0\\).",
          "因此反函数在 \\(0\\) 处不可导，图像在原点有竖直切线；这正是原函数水平切线的反射结果。 · Therefore the inverse is not differentiable at \\(0\\), and its graph has a vertical tangent at the origin; this is exactly the reflection of the original horizontal tangent."
        ],
        "solution": "因为 \\(f'(0)=0\\)，倒数公式无定义；反函数 \\(\\sqrt[3]{y}\\) 在 \\(0\\) 处的差商趋于无穷，故不可导。 · Because \\(f'(0)=0\\), the reciprocal formula is undefined; the difference quotient of the inverse \\(\\sqrt[3]{y}\\) tends to infinity at \\(0\\), so it is not differentiable there.",
        "solutionLatex": "\\left(f^{-1}\\right)'(0)\\ \\text{不存在}"
      }
    ],
    "examTips": [
      "先写 \\(b=f(a)\\) 并找出 \\(a\\)，再写 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)。 · First write \\(b=f(a)\\) and identify \\(a\\), then write \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\).",
      "分母在 \\(a\\) 处取值；在答案中明确标出 \\(a=f^{-1}(b)\\)。 · Evaluate the denominator at \\(a\\); state explicitly that \\(a=f^{-1}(b)\\).",
      "先检查 \\(f'(a)\\ne0\\)；若为零，说明反函数不可导或公式不适用。 · Check \\(f'(a)\\ne0\\) first; if it is zero, explain that the inverse is not differentiable or the formula does not apply.",
      "图像题用关于 \\(y=x\\) 的反射和斜率倒数解释，不要只写代数公式。 · For graph problems, explain with reflection across \\(y=x\\) and reciprocal slopes, not only the algebraic formula.",
      "表格题先找函数值对应的输入，再取导数倒数。 · For table problems, first find the input matching the function value, then take the reciprocal of the derivative.",
      "若能显式求反函数，用它检验答案。 · If the inverse can be found explicitly, use it to check the answer.",
      "答案要带单位；反函数斜率单位与原函数斜率单位互为倒数。 · Include units; inverse slope units are the reciprocals of the original slope units.",
      "AP 简答要写出“为什么”：复合恒等式、链式法则、非零导数。 · In an AP free response, explain “why”: the composition identity, the chain rule, and the nonzero derivative."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.1",
        "title": "链式法则 · The Chain Rule",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.2",
        "title": "隐函数求导 · Implicit Differentiation",
        "relation": "相关 · Related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.4",
        "title": "反三角函数导数 · Differentiating Inverse Trigonometric Functions",
        "relation": "后续 · Follow-up"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.7",
        "title": "cos x、sin x、eˣ 与 ln x 的导数 · Derivatives of cos x, sin x, eˣ, and ln x",
        "relation": "先修 · Prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "先修：3.1 链式法则提供推导工具，2.7 提供 \\(e^{x}\\)、\\(\\ln x\\)、\\(\\sin x\\) 等基本导数。 · Prerequisite: 3.1 supplies the chain rule, and 2.7 supplies basic derivatives such as those of \\(e^{x}\\), \\(\\ln x\\), and \\(\\sin x\\).",
      "相关：3.2 隐函数求导与反函数求导都使用链式法则，只是一个解 \\(y'\\)，一个解 \\(\\left(f^{-1}\\right)'\\)。 · Related: 3.2 implicit differentiation and inverse differentiation both use the chain rule; one solves for \\(y'\\), the other for \\(\\left(f^{-1}\\right)'\\).",
      "后续：3.4 把反函数公式用于 \\(\\sin\\)、\\(\\cos\\)、\\(\\tan\\)，得到反三角函数导数。 · Follow-up: 3.4 applies the inverse formula to \\(\\sin\\), \\(\\cos\\), and \\(\\tan\\) to obtain inverse trigonometric derivatives.",
      "应用：反函数斜率用于求解“已知原函数在某点的变化率，求反函数在对应点的变化率”的实际问题。 · Application: inverse slopes answer practical questions that give the original rate at a point and ask for the inverse rate at the corresponding point."
    ],
    "intuitionDetailed": "把反函数想成“倒着读同一张关系表”：原函数把 \\(x\\) 送到 \\(y\\)，反函数把 \\(y\\) 送回 \\(x\\)。在对应点附近，原函数每向右 \\(1\\) 个单位上升 \\(m\\) 个单位；把图像沿 \\(y=x\\) 翻折后，横向与纵向互换，反函数每向右 \\(1\\) 个单位只上升 \\(\\dfrac{1}{m}\\) 个单位。因此反函数斜率是原函数斜率的倒数。链条推导也很直接：\\(f\\) 与 \\(f^{-1}\\) 复合后是恒等函数 \\(y\\mapsto y\\)，恒等函数的斜率是 \\(1\\)；链式法则把这两个斜率相乘，乘积必须为 \\(1\\)，所以一个斜率是另一个的倒数。若原函数在某点变平（\\(m=0\\)），反函数在该点就变竖直，斜率不存在；这就是为什么 \\(f'(a)\\ne0\\) 是公式成立的必要条件。 · Think of an inverse function as reading the same relation table backwards: the original sends \\(x\\) to \\(y\\), and the inverse sends \\(y\\) back to \\(x\\). Near corresponding points, if the original rises \\(m\\) units for every \\(1\\) unit to the right, then after reflecting across \\(y=x\\), horizontal and vertical changes swap, so the inverse rises \\(\\dfrac{1}{m}\\) units for every \\(1\\) unit to the right. Thus the inverse slope is the reciprocal of the original slope. The chain derivation is equally direct: composing \\(f\\) with \\(f^{-1}\\) gives the identity map \\(y\\mapsto y\\), whose slope is \\(1\\); the chain rule multiplies the two slopes, so the product must be \\(1\\), making one slope the reciprocal of the other. If the original flattens at a point (\\(m=0\\)), the inverse becomes vertical there and has no slope; this is why \\(f'(a)\\ne0\\) is necessary for the formula.",
    "development": [
      "回顾反函数定义与复合恒等式。 · Review the definition of an inverse function and the composition identities.",
      "对复合恒等式使用链式法则，推导倒数公式。 · Apply the chain rule to the composition identity to derive the reciprocal formula.",
      "用关于 \\(y=x\\) 的反射解释斜率互为倒数。 · Explain reciprocal slopes using reflection across \\(y=x\\).",
      "检查 \\(f'(a)\\ne0\\) 与一一对应条件，讨论竖直切线。 · Check \\(f'(a)\\ne0\\) and one-to-one conditions, and discuss vertical tangents.",
      "在符号、图像、表格与实际问题中练习。 · Practice with symbolic, graphical, tabular, and applied representations."
    ],
    "checks": [
      "能否从 \\(f\\left(f^{-1}(y)\\right)=y\\) 推出 \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\)？ · Can you derive \\(\\left(f^{-1}\\right)'(b)=\\dfrac{1}{f'(a)}\\) from \\(f\\left(f^{-1}(y)\\right)=y\\)?",
      "若 \\(f'(a)=0\\)，反函数在对应点会发生什么？ · What happens to the inverse at the corresponding point if \\(f'(a)=0\\)?",
      "给定表格中的 \\(f(a)=b\\) 与 \\(f'(a)\\)，能否求 \\(\\left(f^{-1}\\right)'(b)\\)？ · Given \\(f(a)=b\\) and \\(f'(a)\\) in a table, can you find \\(\\left(f^{-1}\\right)'(b)\\)?",
      "能否用图像解释为什么反函数斜率是原函数斜率的倒数？ · Can you explain graphically why the inverse slope is the reciprocal of the original slope?",
      "能否区分 \\(\\dfrac{1}{f'(a)}\\) 与 \\(\\dfrac{1}{f'(b)}\\)？ · Can you distinguish \\(\\dfrac{1}{f'(a)}\\) from \\(\\dfrac{1}{f'(b)}\\)?",
      "能否用显式反函数检验倒数公式？ · Can you verify the reciprocal formula with an explicit inverse?"
    ],
    "vocabulary": [
      {
        "termZh": "反函数",
        "termEn": "inverse function",
        "defZh": "满足 \\(f\\left(f^{-1}(y)\\right)=y\\) 与 \\(f^{-1}\\left(f(x)\\right)=x\\) 的函数 \\(f^{-1}\\)。",
        "defEn": "The function \\(f^{-1}\\) satisfying \\(f\\left(f^{-1}(y)\\right)=y\\) and \\(f^{-1}\\left(f(x)\\right)=x\\)."
      },
      {
        "termZh": "一一对应",
        "termEn": "one-to-one",
        "defZh": "不同的输入对应不同的输出，从而反函数存在；在区间上通常由严格单调保证。",
        "defEn": "Distinct inputs give distinct outputs, so an inverse exists; on an interval this is usually ensured by strict monotonicity."
      },
      {
        "termZh": "反函数定理",
        "termEn": "inverse function theorem",
        "defZh": "若 \\(f'(a)\\ne0\\) 且 \\(f'\\) 在 \\(a\\) 附近连续，则 \\(\\left(f^{-1}\\right)'(f(a))=\\dfrac{1}{f'(a)}\\)。",
        "defEn": "If \\(f'(a)\\ne0\\) and \\(f'\\) is continuous near \\(a\\), then \\(\\left(f^{-1}\\right)'(f(a))=\\dfrac{1}{f'(a)}\\)."
      },
      {
        "termZh": "斜率倒数",
        "termEn": "reciprocal slope",
        "defZh": "反函数在对应点的斜率等于原函数斜率的倒数 \\(\\dfrac{1}{m}\\)。",
        "defEn": "The inverse slope at a corresponding point is the reciprocal \\(\\dfrac{1}{m}\\) of the original slope."
      },
      {
        "termZh": "复合恒等式",
        "termEn": "composition identity",
        "defZh": "\\(f\\left(f^{-1}(y)\\right)=y\\) 与 \\(f^{-1}\\left(f(x)\\right)=x\\)，是推导反函数导数的出发点。",
        "defEn": "\\(f\\left(f^{-1}(y)\\right)=y\\) and \\(f^{-1}\\left(f(x)\\right)=x\\), the starting point for deriving the inverse derivative."
      },
      {
        "termZh": "对应点",
        "termEn": "corresponding point",
        "defZh": "满足 \\(b=f(a)\\) 的点对 \\(\\left(a,b\\right)\\)；反函数在 \\(b\\) 处的导数用 \\(f'(a)\\)。",
        "defEn": "The point pair \\(\\left(a,b\\right)\\) with \\(b=f(a)\\); the inverse derivative at \\(b\\) uses \\(f'(a)\\)."
      },
      {
        "termZh": "定义域限制",
        "termEn": "domain restriction",
        "defZh": "为使函数一一对应而限制的输入范围，反函数必须使用同一限制分支。",
        "defEn": "A restricted input range that makes a function one-to-one; the inverse must use the same branch."
      },
      {
        "termZh": "可导性",
        "termEn": "differentiability",
        "defZh": "反函数在 \\(b\\) 处可导需要 \\(f\\) 在 \\(a\\) 处可导且 \\(f'(a)\\ne0\\)。",
        "defEn": "The inverse is differentiable at \\(b\\) only when \\(f\\) is differentiable at \\(a\\) and \\(f'(a)\\ne0\\)."
      }
    ]
  },
  "3.4": {
    "id": "math/calc-u3/3.4",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "layer": "ap",
    "code": "3.4",
    "titleZh": "反三角函数导数",
    "titleEn": "Differentiating Inverse Trigonometric Functions",
    "summary": "反三角函数的导数可以由反函数公式或链式法则推出。以 \\(y=\\arcsin x\\) 为例，\\(\\sin y=x\\) 且 \\(y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)；两边对 \\(x\\) 求导得 \\(\\cos y\\cdot y'=1\\)，所以 \\(y'=\\dfrac{1}{\\cos y}\\)。在主值区间上 \\(\\cos y\\ge0\\)，于是 \\(\\cos y=\\sqrt{1-\\sin^{2}y}=\\sqrt{1-x^{2}}\\)，得到 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin x]=\\dfrac{1}{\\sqrt{1-x^{2}}}\\)。同理可得 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos x]=-\\dfrac{1}{\\sqrt{1-x^{2}}}\\) 与 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan x]=\\dfrac{1}{1+x^{2}}\\)。反三角函数只有在主值区间上才单值可导；\\(\\arcsin\\) 与 \\(\\arccos\\) 在 \\(x=\\pm1\\) 处有竖直切线，导数不存在；\\(\\arctan\\) 在整个实数轴上可导且导数恒正。 · The derivatives of inverse trigonometric functions follow from the inverse-function formula or the chain rule. For \\(y=\\arcsin x\\), we have \\(\\sin y=x\\) with \\(y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\). Differentiating both sides with respect to \\(x\\) gives \\(\\cos y\\cdot y'=1\\), so \\(y'=\\dfrac{1}{\\cos y}\\). On the principal range \\(\\cos y\\ge0\\), hence \\(\\cos y=\\sqrt{1-\\sin^{2}y}=\\sqrt{1-x^{2}}\\), and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin x]=\\dfrac{1}{\\sqrt{1-x^{2}}}\\). Similarly, \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos x]=-\\dfrac{1}{\\sqrt{1-x^{2}}}\\) and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan x]=\\dfrac{1}{1+x^{2}}\\). Inverse trigonometric functions are single-valued and differentiable on their principal ranges; \\(\\arcsin\\) and \\(\\arccos\\) have vertical tangents at \\(x=\\pm1\\), where their derivatives do not exist, while \\(\\arctan\\) is differentiable on the whole real line with a positive derivative.",
    "learningObjectives": [
      "能由 \\(\\sin y=x\\)、\\(\\cos y=x\\)、\\(\\tan y=x\\) 出发，用链式法则或反函数公式推导 \\(\\arcsin\\)、\\(\\arccos\\)、\\(\\arctan\\) 的导数。 · Derive the derivatives of \\(\\arcsin\\), \\(\\arccos\\), and \\(\\arctan\\) from \\(\\sin y=x\\), \\(\\cos y=x\\), and \\(\\tan y=x\\) using the chain rule or the inverse-function formula.",
      "能对复合函数使用链式法则，例如 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(g(x))]=\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}\\)。 · Apply the chain rule to composite functions, for example \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(g(x))]=\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}\\).",
      "能说明各反三角函数的定义域、值域与可导区间，并解释端点处的竖直切线。 · State the domain, range, and differentiability interval of each inverse trigonometric function, and explain the vertical tangents at endpoints.",
      "能检查导数的符号与特殊值，并用 \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) 验证两个导数互为相反数。 · Check derivative signs and special values, and use \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) to verify that the two derivatives are opposites.",
      "能求反三角函数曲线的切线，并在图像、符号与数值表征间转换。 · Find tangent lines to inverse trigonometric curves and translate among graphical, symbolic, and numerical representations."
    ],
    "essentialKnowledge": [
      "\\(\\arcsin x\\) 的定义域为 \\([-1,1]\\)，值域为 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)；\\(\\arccos x\\) 的定义域为 \\([-1,1]\\)，值域为 \\([0,\\pi]\\)。 · \\(\\arcsin x\\) has domain \\([-1,1]\\) and range \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\); \\(\\arccos x\\) has domain \\([-1,1]\\) and range \\([0,\\pi]\\).",
      "\\(\\arctan x\\) 的定义域为全体实数，值域为 \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\)，并有水平渐近线 \\(y=\\pm\\dfrac{\\pi}{2}\\)。 · \\(\\arctan x\\) has domain all real numbers, range \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\), and horizontal asymptotes \\(y=\\pm\\dfrac{\\pi}{2}\\).",
      "\\(\\arcsin\\) 的推导：\\(y=\\arcsin x\\Rightarrow\\sin y=x\\Rightarrow\\cos y\\cdot y'=1\\Rightarrow y'=\\dfrac{1}{\\cos y}=\\dfrac{1}{\\sqrt{1-x^{2}}}\\)，其中 \\(\\cos y\\ge0\\)。 · Derivation for \\(\\arcsin\\): \\(y=\\arcsin x\\Rightarrow\\sin y=x\\Rightarrow\\cos y\\cdot y'=1\\Rightarrow y'=\\dfrac{1}{\\cos y}=\\dfrac{1}{\\sqrt{1-x^{2}}}\\), where \\(\\cos y\\ge0\\).",
      "\\(\\arccos\\) 的推导：\\(y=\\arccos x\\Rightarrow\\cos y=x\\Rightarrow-\\sin y\\cdot y'=1\\Rightarrow y'=-\\dfrac{1}{\\sin y}=-\\dfrac{1}{\\sqrt{1-x^{2}}}\\)，其中 \\(\\sin y\\ge0\\)。 · Derivation for \\(\\arccos\\): \\(y=\\arccos x\\Rightarrow\\cos y=x\\Rightarrow-\\sin y\\cdot y'=1\\Rightarrow y'=-\\dfrac{1}{\\sin y}=-\\dfrac{1}{\\sqrt{1-x^{2}}}\\), where \\(\\sin y\\ge0\\).",
      "\\(\\arctan\\) 的推导：\\(y=\\arctan x\\Rightarrow\\tan y=x\\Rightarrow\\sec^{2}y\\cdot y'=1\\Rightarrow y'=\\dfrac{1}{\\sec^{2}y}=\\dfrac{1}{1+\\tan^{2}y}=\\dfrac{1}{1+x^{2}}\\)。 · Derivation for \\(\\arctan\\): \\(y=\\arctan x\\Rightarrow\\tan y=x\\Rightarrow\\sec^{2}y\\cdot y'=1\\Rightarrow y'=\\dfrac{1}{\\sec^{2}y}=\\dfrac{1}{1+\\tan^{2}y}=\\dfrac{1}{1+x^{2}}\\).",
      "链式法则形式：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(g(x))]=\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(g(x))]=-\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}\\)，\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(g(x))]=\\dfrac{g'(x)}{1+\\left(g(x)\\right)^{2}}\\)。 · Chain-rule forms: \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(g(x))]=\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}\\), \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(g(x))]=-\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}\\), and \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(g(x))]=\\dfrac{g'(x)}{1+\\left(g(x)\\right)^{2}}\\).",
      "符号规律：\\(\\arcsin\\) 与 \\(\\arctan\\) 的导数恒正，\\(\\arccos\\) 的导数恒负；这与三条曲线的单调性一致。 · Sign pattern: the derivatives of \\(\\arcsin\\) and \\(\\arctan\\) are always positive, while the derivative of \\(\\arccos\\) is always negative; this matches the monotonicity of the three curves.",
      "可导区间：\\(\\arcsin\\) 与 \\(\\arccos\\) 在 \\(|x|<1\\) 内可导，在 \\(x=\\pm1\\) 处有竖直切线、导数不存在；\\(\\arctan\\) 对所有实数可导。 · Differentiability intervals: \\(\\arcsin\\) and \\(\\arccos\\) are differentiable for \\(|x|<1\\) and have vertical tangents at \\(x=\\pm1\\), where their derivatives do not exist; \\(\\arctan\\) is differentiable for all real numbers.",
      "恒等式验证：\\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) 两边求导得 \\(\\dfrac{1}{\\sqrt{1-x^{2}}}-\\dfrac{1}{\\sqrt{1-x^{2}}}=0\\)。 · Identity check: differentiating \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) gives \\(\\dfrac{1}{\\sqrt{1-x^{2}}}-\\dfrac{1}{\\sqrt{1-x^{2}}}=0\\).",
      "记号提醒：\\(\\sin^{-1}x\\) 在部分教材中表示 \\(\\arcsin x\\)，但容易与 \\(\\dfrac{1}{\\sin x}\\) 混淆；本课程统一使用 \\(\\arcsin x\\)。 · Notation caution: some texts write \\(\\sin^{-1}x\\) for \\(\\arcsin x\\), but this can be confused with \\(\\dfrac{1}{\\sin x}\\); this course uses \\(\\arcsin x\\).",
      "反函数公式视角：\\(\\left(\\arcsin\\right)'(x)=\\dfrac{1}{\\cos\\left(\\arcsin x\\right)}=\\dfrac{1}{\\sqrt{1-x^{2}}}\\)，与链式法则推导一致。 · Inverse-function viewpoint: \\(\\left(\\arcsin\\right)'(x)=\\dfrac{1}{\\cos\\left(\\arcsin x\\right)}=\\dfrac{1}{\\sqrt{1-x^{2}}}\\), matching the chain-rule derivation.",
      "应用：反三角函数导数用于求切线、相关变化率以及积分公式；在 AP 中常与乘积法则、商法则和链式法则组合。 · Applications: inverse trigonometric derivatives are used for tangent lines, related rates, and integration formulas; AP problems often combine them with the product, quotient, and chain rules."
    ],
    "definition": "反三角函数是三角函数的反函数，但必须限制三角函数的定义域才能一一对应。\\(\\arcsin x\\) 是 \\(\\sin y=x\\) 在 \\(y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\) 上的唯一解；\\(\\arccos x\\) 是 \\(\\cos y=x\\) 在 \\(y\\in[0,\\pi]\\) 上的唯一解；\\(\\arctan x\\) 是 \\(\\tan y=x\\) 在 \\(y\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\) 上的唯一解。对 \\(y=\\arcsin x\\) 两边用链式法则求导，得到 \\(\\cos y\\cdot y'=1\\)，所以 \\(y'=\\dfrac{1}{\\cos y}\\)。因为主值区间上 \\(\\cos y\\ge0\\)，可用 \\(\\cos y=\\sqrt{1-\\sin^{2}y}=\\sqrt{1-x^{2}}\\)，因此 \\(\\left(\\arcsin x\\right)'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\)。\\(\\arccos\\) 与 \\(\\arctan\\) 的推导同理，只是 \\(\\arccos\\) 求导时出现负号，而 \\(\\arctan\\) 用 \\(\\sec^{2}y=1+\\tan^{2}y\\) 化简。 · An inverse trigonometric function is the inverse of a trigonometric function after restricting the trigonometric domain to make it one-to-one. \\(\\arcsin x\\) is the unique solution of \\(\\sin y=x\\) with \\(y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\); \\(\\arccos x\\) is the unique solution of \\(\\cos y=x\\) with \\(y\\in[0,\\pi]\\); \\(\\arctan x\\) is the unique solution of \\(\\tan y=x\\) with \\(y\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\). Differentiating \\(y=\\arcsin x\\) by the chain rule gives \\(\\cos y\\cdot y'=1\\), so \\(y'=\\dfrac{1}{\\cos y}\\). On the principal range \\(\\cos y\\ge0\\), so \\(\\cos y=\\sqrt{1-\\sin^{2}y}=\\sqrt{1-x^{2}}\\), giving \\(\\left(\\arcsin x\\right)'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\). The derivations for \\(\\arccos\\) and \\(\\arctan\\) are analogous, except that \\(\\arccos\\) introduces a negative sign and \\(\\arctan\\) uses \\(\\sec^{2}y=1+\\tan^{2}y\\) to simplify.",
    "intuition": "反三角函数的导数描述“角度对正弦值、余弦值或正切值的变化率”。以 \\(\\arcsin\\) 为例：当 \\(x\\) 接近 \\(1\\) 时，正弦值只再增加一点点，角度却要急剧增大到 \\(\\dfrac{\\pi}{2}\\)，所以图像越来越陡，导数 \\(\\dfrac{1}{\\sqrt{1-x^{2}}}\\) 越来越大；在 \\(x=1\\) 处切线竖直。相反，\\(\\arctan\\) 在 \\(x=0\\) 附近斜率最大（等于 \\(1\\)），向两侧逐渐变平，导数 \\(\\dfrac{1}{1+x^{2}}\\) 趋于 \\(0\\)，对应水平渐近线。\\(\\arccos\\) 是 \\(\\arcsin\\) 关于水平线的镜像，因此导数只差一个负号。 · The derivative of an inverse trigonometric function measures how fast the angle changes with the sine, cosine, or tangent value. For \\(\\arcsin\\), as \\(x\\) approaches \\(1\\), the sine value increases only slightly while the angle must race to \\(\\dfrac{\\pi}{2}\\), so the graph becomes steeper and the derivative \\(\\dfrac{1}{\\sqrt{1-x^{2}}}\\) grows; at \\(x=1\\) the tangent is vertical. By contrast, \\(\\arctan\\) is steepest near \\(x=0\\) (slope \\(1\\)) and flattens toward both sides, with derivative \\(\\dfrac{1}{1+x^{2}}\\) tending to \\(0\\), matching the horizontal asymptotes. \\(\\arccos\\) is a mirror image of \\(\\arcsin\\), so its derivative differs only by a minus sign.",
    "formulas": [
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin x]=\\dfrac{1}{\\sqrt{1-x^{2}}},\\quad |x|<1",
        "note": "反正弦的导数；端点 \\(x=\\pm1\\) 处不可导。 · Derivative of arcsine; not differentiable at the endpoints \\(x=\\pm1\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos x]=-\\dfrac{1}{\\sqrt{1-x^{2}}},\\quad |x|<1",
        "note": "反余弦的导数；负号来自 \\(\\cos y\\) 求导产生的 \\(-\\sin y\\)。 · Derivative of arccosine; the negative sign comes from the \\(-\\sin y\\) produced when differentiating \\(\\cos y\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan x]=\\dfrac{1}{1+x^{2}},\\quad x\\in\\mathbb{R}",
        "note": "反正切的导数；对所有实数有定义且恒正。 · Derivative of arctangent; defined and positive for every real number."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(g(x))]=\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}",
        "note": "复合反正弦：外层导数乘内层导数 \\(g'(x)\\)。 · Composite arcsine: the outer derivative times the inner derivative \\(g'(x)\\)."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(g(x))]=-\\dfrac{g'(x)}{\\sqrt{1-\\left(g(x)\\right)^{2}}}",
        "note": "复合反余弦；不要漏掉负号。 · Composite arccosine; do not omit the negative sign."
      },
      {
        "latex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(g(x))]=\\dfrac{g'(x)}{1+\\left(g(x)\\right)^{2}}",
        "note": "复合反正切；分母是 \\(1\\) 加内层函数的平方。 · Composite arctangent; the denominator is \\(1\\) plus the square of the inner function."
      },
      {
        "latex": "\\arcsin x+\\arccos x=\\dfrac{\\pi}{2},\\quad |x|\\le1",
        "note": "两函数之和为常数，因此导数互为相反数。 · Their sum is constant, so their derivatives are opposites."
      },
      {
        "latex": "\\left(\\arcsin\\right)'(x)=\\dfrac{1}{\\cos\\left(\\arcsin x\\right)}=\\dfrac{1}{\\sqrt{1-x^{2}}}",
        "note": "用反函数公式验证：分母是 \\(\\cos\\) 在对应角度处的值。 · Verified by the inverse-function formula: the denominator is \\(\\cos\\) evaluated at the corresponding angle."
      }
    ],
    "derivationNotes": [
      {
        "from": "反函数定义 · definition of the inverse",
        "to": "隐式方程 · implicit equation",
        "note": "\\(y=\\arcsin x\\) 等价于 \\(\\sin y=x\\)，且 \\(y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)；这个范围保证解唯一。 · \\(y=\\arcsin x\\) is equivalent to \\(\\sin y=x\\) with \\(y\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\); this range makes the solution unique."
      },
      {
        "from": "隐式方程 · implicit equation",
        "to": "链式法则 · chain rule",
        "note": "两边对 \\(x\\) 求导：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin y]=\\cos y\\cdot y'\\)，右边为 \\(1\\)，所以 \\(\\cos y\\cdot y'=1\\)。 · Differentiate both sides with respect to \\(x\\): \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\sin y]=\\cos y\\cdot y'\\), while the right side is \\(1\\), so \\(\\cos y\\cdot y'=1\\)."
      },
      {
        "from": "链式法则 · chain rule",
        "to": "平方根化简 · square-root simplification",
        "note": "在主值区间上 \\(\\cos y\\ge0\\)，所以 \\(\\cos y=\\sqrt{1-\\sin^{2}y}=\\sqrt{1-x^{2}}\\)；负号不能随意添加。 · On the principal range \\(\\cos y\\ge0\\), so \\(\\cos y=\\sqrt{1-\\sin^{2}y}=\\sqrt{1-x^{2}}\\); a negative sign must not be added arbitrarily."
      },
      {
        "from": "反余弦 · arccosine",
        "to": "负号来源 · origin of the negative sign",
        "note": "\\(y=\\arccos x\\Rightarrow\\cos y=x\\)；求导得 \\(-\\sin y\\cdot y'=1\\)，所以 \\(y'=-\\dfrac{1}{\\sin y}\\)。在 \\([0,\\pi]\\) 上 \\(\\sin y\\ge0\\)，故 \\(\\sin y=\\sqrt{1-x^{2}}\\)。 · \\(y=\\arccos x\\Rightarrow\\cos y=x\\); differentiating gives \\(-\\sin y\\cdot y'=1\\), so \\(y'=-\\dfrac{1}{\\sin y}\\). On \\([0,\\pi]\\), \\(\\sin y\\ge0\\), so \\(\\sin y=\\sqrt{1-x^{2}}\\)."
      },
      {
        "from": "反正切 · arctangent",
        "to": "割平方恒等式 · secant-square identity",
        "note": "\\(y=\\arctan x\\Rightarrow\\tan y=x\\)；求导得 \\(\\sec^{2}y\\cdot y'=1\\)。再用 \\(\\sec^{2}y=1+\\tan^{2}y=1+x^{2}\\)，得到 \\(y'=\\dfrac{1}{1+x^{2}}\\)。 · \\(y=\\arctan x\\Rightarrow\\tan y=x\\); differentiating gives \\(\\sec^{2}y\\cdot y'=1\\). Then \\(\\sec^{2}y=1+\\tan^{2}y=1+x^{2}\\), so \\(y'=\\dfrac{1}{1+x^{2}}\\)."
      },
      {
        "from": "反函数公式 · inverse-function formula",
        "to": "三角导数 · trigonometric derivatives",
        "note": "也可用 \\(\\left(f^{-1}\\right)'(x)=\\dfrac{1}{f'\\left(f^{-1}(x)\\right)}\\)：对 \\(f=\\sin\\) 得 \\(\\dfrac{1}{\\cos\\left(\\arcsin x\\right)}\\)，对 \\(f=\\tan\\) 得 \\(\\dfrac{1}{\\sec^{2}\\left(\\arctan x\\right)}\\)。 · One may also use \\(\\left(f^{-1}\\right)'(x)=\\dfrac{1}{f'\\left(f^{-1}(x)\\right)}\\): for \\(f=\\sin\\) this gives \\(\\dfrac{1}{\\cos\\left(\\arcsin x\\right)}\\), and for \\(f=\\tan\\) it gives \\(\\dfrac{1}{\\sec^{2}\\left(\\arctan x\\right)}\\)."
      },
      {
        "from": "复合函数 · composite function",
        "to": "链式法则形式 · chain-rule form",
        "note": "把 \\(g(x)\\) 代入反三角函数，外层导数在 \\(g(x)\\) 处取值，再乘内层导数 \\(g'(x)\\)。 · Substitute \\(g(x)\\) into the inverse trigonometric function, evaluate the outer derivative at \\(g(x)\\), then multiply by the inner derivative \\(g'(x)\\)."
      },
      {
        "from": "主值区间端点 · endpoints of the principal range",
        "to": "竖直切线 · vertical tangent",
        "note": "当 \\(x\\to1^{-}\\) 时 \\(\\dfrac{1}{\\sqrt{1-x^{2}}}\\to\\infty\\)，所以 \\(\\arcsin\\) 与 \\(\\arccos\\) 的图像在 \\(x=1\\) 处竖直；在 \\(x=-1\\) 处同理。 · As \\(x\\to1^{-}\\), \\(\\dfrac{1}{\\sqrt{1-x^{2}}}\\to\\infty\\), so the graphs of \\(\\arcsin\\) and \\(\\arccos\\) are vertical at \\(x=1\\); the same happens at \\(x=-1\\)."
      }
    ],
    "conditions": [
      "\\(\\arcsin x\\) 与 \\(\\arccos x\\) 在 \\(|x|<1\\) 内可导；在 \\(x=\\pm1\\) 处导数不存在（竖直切线）。 · \\(\\arcsin x\\) and \\(\\arccos x\\) are differentiable for \\(|x|<1\\); at \\(x=\\pm1\\) their derivatives do not exist (vertical tangents).",
      "\\(\\arctan x\\) 对所有实数可导，且导数恒正。 · \\(\\arctan x\\) is differentiable for all real numbers, and its derivative is always positive.",
      "复合函数 \\(\\arcsin(g(x))\\)、\\(\\arccos(g(x))\\) 要求 \\(g\\) 可导且 \\(|g(x)|<1\\)；\\(\\arctan(g(x))\\) 只要求 \\(g\\) 可导。 · For \\(\\arcsin(g(x))\\) and \\(\\arccos(g(x))\\), \\(g\\) must be differentiable with \\(|g(x)|<1\\); for \\(\\arctan(g(x))\\), only differentiability of \\(g\\) is required.",
      "主值区间的选择决定平方根的符号：\\(\\arcsin\\) 的 \\(\\cos y\\ge0\\)，\\(\\arccos\\) 的 \\(\\sin y\\ge0\\)。 · The choice of principal range determines the square-root sign: \\(\\cos y\\ge0\\) for \\(\\arcsin\\), and \\(\\sin y\\ge0\\) for \\(\\arccos\\).",
      "使用链式法则时不要漏掉内层导数 \\(g'(x)\\)，也不要漏掉 \\(\\arccos\\) 的负号。 · When using the chain rule, do not omit the inner derivative \\(g'(x)\\) or the negative sign for \\(\\arccos\\).",
      "\\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) 只在 \\(|x|\\le1\\) 上成立；求导验证只在 \\(|x|<1\\) 内进行。 · \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) holds only for \\(|x|\\le1\\); the derivative check is valid only for \\(|x|<1\\).",
      "反三角函数导数公式不能推广到端点；端点处应回到差商或图像判断。 · The derivative formulas do not extend to endpoints; at endpoints, return to the difference quotient or the graph.",
      "若题目以角度为单位，链式法则会引入角度与弧度换算因子；AP 默认使用弧度。 · If a problem uses degrees, the chain rule introduces a degree-to-radian conversion factor; AP calculus uses radians by default."
    ],
    "keyPoints": [
      "\\(\\left(\\arcsin x\\right)'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\)，定义域内 \\(|x|<1\\)。 · \\(\\left(\\arcsin x\\right)'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\) for \\(|x|<1\\) in the domain.",
      "\\(\\left(\\arccos x\\right)'=-\\dfrac{1}{\\sqrt{1-x^{2}}}\\)，负号不可漏。 · \\(\\left(\\arccos x\\right)'=-\\dfrac{1}{\\sqrt{1-x^{2}}}\\); the negative sign is essential.",
      "\\(\\left(\\arctan x\\right)'=\\dfrac{1}{1+x^{2}}\\)，对所有实数成立。 · \\(\\left(\\arctan x\\right)'=\\dfrac{1}{1+x^{2}}\\) for all real numbers.",
      "三条公式都可由反函数公式或链式法则推出，不需要死记。 · All three formulas follow from the inverse-function formula or the chain rule; they need not be memorized blindly.",
      "复合形式：外层导数在 \\(g(x)\\) 处取值，再乘 \\(g'(x)\\)。 · Composite form: evaluate the outer derivative at \\(g(x)\\), then multiply by \\(g'(x)\\).",
      "\\(\\arcsin\\) 与 \\(\\arctan\\) 递增，\\(\\arccos\\) 递减。 · \\(\\arcsin\\) and \\(\\arctan\\) are increasing, while \\(\\arccos\\) is decreasing.",
      "\\(\\arcsin\\) 与 \\(\\arccos\\) 在 \\(x=\\pm1\\) 处有竖直切线。 · \\(\\arcsin\\) and \\(\\arccos\\) have vertical tangents at \\(x=\\pm1\\).",
      "\\(\\arctan\\) 有水平渐近线 \\(y=\\pm\\dfrac{\\pi}{2}\\)，导数趋于 \\(0\\)。 · \\(\\arctan\\) has horizontal asymptotes \\(y=\\pm\\dfrac{\\pi}{2}\\), and its derivative tends to \\(0\\).",
      "用 \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) 检查两个导数互为相反数。 · Use \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) to check that the two derivatives are opposites.",
      "主值区间的符号决定平方根取正号。 · The principal range determines that the square root is taken positive."
    ],
    "misconceptions": [
      "漏掉 \\(\\arccos\\) 的负号，把它的导数写成 \\(\\dfrac{1}{\\sqrt{1-x^{2}}}\\)。 · Omitting the negative sign for \\(\\arccos\\) and writing its derivative as \\(\\dfrac{1}{\\sqrt{1-x^{2}}}\\).",
      "在 \\(x=\\pm1\\) 处仍代入 \\(\\arcsin\\) 或 \\(\\arccos\\) 的导数公式；端点处导数不存在。 · Substituting \\(x=\\pm1\\) into the derivative formulas for \\(\\arcsin\\) or \\(\\arccos\\); the derivatives do not exist at the endpoints.",
      "把 \\(\\arcsin x\\) 与 \\(\\dfrac{1}{\\sin x}\\) 混为一谈。 · Confusing \\(\\arcsin x\\) with \\(\\dfrac{1}{\\sin x}\\).",
      "复合函数漏乘内层导数 \\(g'(x)\\)。 · Forgetting the inner derivative \\(g'(x)\\) for composite functions.",
      "把 \\(\\arctan\\) 的导数写成 \\(\\dfrac{1}{1+x}\\) 或 \\(\\dfrac{1}{1+x^{2}}\\) 的倒数。 · Writing the derivative of \\(\\arctan\\) as \\(\\dfrac{1}{1+x}\\) or as the reciprocal of \\(\\dfrac{1}{1+x^{2}}\\).",
      "忽略主值区间，随意给平方根加负号。 · Ignoring the principal range and adding a negative sign to the square root arbitrarily.",
      "把 \\(\\arcsin\\) 的导数当成 \\(\\dfrac{1}{\\sqrt{1+x^{2}}}\\)，混淆加减号。 · Writing the derivative of \\(\\arcsin\\) as \\(\\dfrac{1}{\\sqrt{1+x^{2}}}\\), confusing the sign inside the root.",
      "认为 \\(\\arctan x\\) 在 \\(x=\\pm\\dfrac{\\pi}{2}\\) 处有定义；它的值域是开区间。 · Thinking \\(\\arctan x\\) is defined at \\(x=\\pm\\dfrac{\\pi}{2}\\); its range is an open interval.",
      "在复合函数中把 \\(g'(x)\\) 放到分母或平方内。 · Placing \\(g'(x)\\) in the denominator or inside the square for a composite function.",
      "用度数求导却忘记弧度换算。 · Differentiating in degrees without converting to radians."
    ],
    "examples": [
      {
        "title": "例 1 · 复合反正弦 · Composite Arcsine · Example 1 · Composite Arcsine",
        "prompt": "求 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(3x)]\\)，并写出使公式成立的 \\(x\\) 范围。 · Find \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(3x)]\\) and state the \\(x\\)-interval on which the formula applies.",
        "steps": [
          "外层为 \\(\\arcsin u\\)，内层 \\(u=3x\\)。 · The outer function is \\(\\arcsin u\\), and the inner function is \\(u=3x\\).",
          "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}u}[\\arcsin u]=\\dfrac{1}{\\sqrt{1-u^{2}}}\\)，且 \\(u'=3\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}u}[\\arcsin u]=\\dfrac{1}{\\sqrt{1-u^{2}}}\\), and \\(u'=3\\).",
          "所以 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(3x)]=\\dfrac{3}{\\sqrt{1-9x^{2}}}\\)。 · Therefore \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(3x)]=\\dfrac{3}{\\sqrt{1-9x^{2}}}\\).",
          "需要 \\(|3x|<1\\)，即 \\(|x|<\\dfrac{1}{3}\\)。 · Require \\(|3x|<1\\), that is, \\(|x|<\\dfrac{1}{3}\\)."
        ],
        "solution": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(3x)]=\\dfrac{3}{\\sqrt{1-9x^{2}}}\\)，\\(|x|<\\dfrac{1}{3}\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(3x)]=\\dfrac{3}{\\sqrt{1-9x^{2}}}\\) for \\(|x|<\\dfrac{1}{3}\\).",
        "solutionLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arcsin(3x)]=\\dfrac{3}{\\sqrt{1-9x^{2}}}"
      },
      {
        "title": "例 2 · 复合反余弦 · Composite Arccosine · Example 2 · Composite Arccosine",
        "prompt": "求 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(x^{2})]\\)，并说明定义域限制。 · Find \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(x^{2})]\\) and state the domain restriction.",
        "steps": [
          "外层为 \\(\\arccos u\\)，内层 \\(u=x^{2}\\)，\\(u'=2x\\)。 · The outer function is \\(\\arccos u\\), and the inner function is \\(u=x^{2}\\) with \\(u'=2x\\).",
          "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(x^{2})]=-\\dfrac{2x}{\\sqrt{1-\\left(x^{2}\\right)^{2}}}\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(x^{2})]=-\\dfrac{2x}{\\sqrt{1-\\left(x^{2}\\right)^{2}}}\\).",
          "化简分母：\\(\\sqrt{1-x^{4}}\\)。 · Simplify the denominator: \\(\\sqrt{1-x^{4}}\\).",
          "需要 \\(|x^{2}|<1\\)，即 \\(|x|<1\\)。 · Require \\(|x^{2}|<1\\), that is, \\(|x|<1\\)."
        ],
        "solution": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(x^{2})]=-\\dfrac{2x}{\\sqrt{1-x^{4}}}\\)，\\(|x|<1\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(x^{2})]=-\\dfrac{2x}{\\sqrt{1-x^{4}}}\\) for \\(|x|<1\\).",
        "solutionLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arccos(x^{2})]=-\\dfrac{2x}{\\sqrt{1-x^{4}}}"
      },
      {
        "title": "例 3 · 复合反正切 · Composite Arctangent · Example 3 · Composite Arctangent",
        "prompt": "求 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(e^{x})]\\)。 · Find \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(e^{x})]\\).",
        "steps": [
          "外层为 \\(\\arctan u\\)，内层 \\(u=e^{x}\\)，\\(u'=e^{x}\\)。 · The outer function is \\(\\arctan u\\), and the inner function is \\(u=e^{x}\\) with \\(u'=e^{x}\\).",
          "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(e^{x})]=\\dfrac{e^{x}}{1+\\left(e^{x}\\right)^{2}}\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(e^{x})]=\\dfrac{e^{x}}{1+\\left(e^{x}\\right)^{2}}\\).",
          "化简为 \\(\\dfrac{e^{x}}{1+e^{2x}}\\)。 · Simplify to \\(\\dfrac{e^{x}}{1+e^{2x}}\\).",
          "因为 \\(e^{x}>0\\)，导数恒正，与 \\(\\arctan\\) 递增一致。 · Since \\(e^{x}>0\\), the derivative is always positive, consistent with \\(\\arctan\\) being increasing."
        ],
        "solution": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(e^{x})]=\\dfrac{e^{x}}{1+e^{2x}}\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(e^{x})]=\\dfrac{e^{x}}{1+e^{2x}}\\).",
        "solutionLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(e^{x})]=\\dfrac{e^{x}}{1+e^{2x}}"
      },
      {
        "title": "例 4 · 乘积法则 · Product Rule · Example 4 · Product Rule",
        "prompt": "设 \\(y=x\\arctan x\\)，求 \\(y'\\)。 · Let \\(y=x\\arctan x\\). Find \\(y'\\).",
        "steps": [
          "用乘积法则：\\(y'=1\\cdot\\arctan x+x\\cdot\\dfrac{1}{1+x^{2}}\\)。 · Use the product rule: \\(y'=1\\cdot\\arctan x+x\\cdot\\dfrac{1}{1+x^{2}}\\).",
          "所以 \\(y'=\\arctan x+\\dfrac{x}{1+x^{2}}\\)。 · Thus \\(y'=\\arctan x+\\dfrac{x}{1+x^{2}}\\).",
          "在 \\(x=0\\) 处，\\(y'=0+0=0\\)，与 \\(x\\arctan x\\) 在原点附近从负到正的变化一致。 · At \\(x=0\\), \\(y'=0+0=0\\), consistent with \\(x\\arctan x\\) changing from negative to positive near the origin."
        ],
        "solution": "\\(y'=\\arctan x+\\dfrac{x}{1+x^{2}}\\)。 · \\(y'=\\arctan x+\\dfrac{x}{1+x^{2}}\\).",
        "solutionLatex": "y'=\\arctan x+\\dfrac{x}{1+x^{2}}"
      },
      {
        "title": "例 5 · 切线 · Tangent Line · Example 5 · Tangent Line",
        "prompt": "求 \\(y=\\arcsin x\\) 在 \\(x=\\dfrac{1}{2}\\) 处的切线方程。 · Find the tangent line to \\(y=\\arcsin x\\) at \\(x=\\dfrac{1}{2}\\).",
        "steps": [
          "函数值：\\(y\\left(\\dfrac{1}{2}\\right)=\\arcsin\\left(\\dfrac{1}{2}\\right)=\\dfrac{\\pi}{6}\\)。 · Function value: \\(y\\left(\\dfrac{1}{2}\\right)=\\arcsin\\left(\\dfrac{1}{2}\\right)=\\dfrac{\\pi}{6}\\).",
          "斜率：\\(y'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\)，在 \\(x=\\dfrac{1}{2}\\) 处为 \\(\\dfrac{1}{\\sqrt{1-\\dfrac{1}{4}}}=\\dfrac{2}{\\sqrt{3}}\\)。 · Slope: \\(y'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\), which at \\(x=\\dfrac{1}{2}\\) equals \\(\\dfrac{1}{\\sqrt{1-\\dfrac{1}{4}}}=\\dfrac{2}{\\sqrt{3}}\\).",
          "点斜式：\\(y-\\dfrac{\\pi}{6}=\\dfrac{2}{\\sqrt{3}}\\left(x-\\dfrac{1}{2}\\right)\\)。 · Point-slope form: \\(y-\\dfrac{\\pi}{6}=\\dfrac{2}{\\sqrt{3}}\\left(x-\\dfrac{1}{2}\\right)\\)."
        ],
        "solution": "切线为 \\(y-\\dfrac{\\pi}{6}=\\dfrac{2}{\\sqrt{3}}\\left(x-\\dfrac{1}{2}\\right)\\)。 · The tangent line is \\(y-\\dfrac{\\pi}{6}=\\dfrac{2}{\\sqrt{3}}\\left(x-\\dfrac{1}{2}\\right)\\).",
        "solutionLatex": "y-\\dfrac{\\pi}{6}=\\dfrac{2}{\\sqrt{3}}\\left(x-\\dfrac{1}{2}\\right)"
      },
      {
        "title": "例 6 · 恒等式验证 · Identity Check · Example 6 · Identity Check",
        "prompt": "用 \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) 验证两个导数互为相反数，并解释为什么它们的和是常数。 · Use \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) to verify that the two derivatives are opposites, and explain why their sum is constant.",
        "steps": [
          "设 \\(S(x)=\\arcsin x+\\arccos x\\)。 · Let \\(S(x)=\\arcsin x+\\arccos x\\).",
          "求导：\\(S'(x)=\\dfrac{1}{\\sqrt{1-x^{2}}}-\\dfrac{1}{\\sqrt{1-x^{2}}}=0\\)，所以 \\(S\\) 为常数。 · Differentiate: \\(S'(x)=\\dfrac{1}{\\sqrt{1-x^{2}}}-\\dfrac{1}{\\sqrt{1-x^{2}}}=0\\), so \\(S\\) is constant.",
          "代入 \\(x=0\\)：\\(S(0)=\\arcsin0+\\arccos0=0+\\dfrac{\\pi}{2}=\\dfrac{\\pi}{2}\\)。 · Substitute \\(x=0\\): \\(S(0)=\\arcsin0+\\arccos0=0+\\dfrac{\\pi}{2}=\\dfrac{\\pi}{2}\\).",
          "因此恒等式成立，两个导数也确实互为相反数。 · Thus the identity holds, and the two derivatives are indeed opposites."
        ],
        "solution": "\\(S'(x)=0\\) 且 \\(S(0)=\\dfrac{\\pi}{2}\\)，所以 \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\)，两导数互为相反数。 · \\(S'(x)=0\\) and \\(S(0)=\\dfrac{\\pi}{2}\\), so \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\), and the two derivatives are opposites.",
        "solutionLatex": "S'(x)=\\dfrac{1}{\\sqrt{1-x^{2}}}-\\dfrac{1}{\\sqrt{1-x^{2}}}=0"
      },
      {
        "title": "例 7 · 数值与图像 · Numerical and Graphical · Example 7 · Numerical and Graphical",
        "prompt": "设 \\(f(x)=\\arctan(x^{2})\\)。求 \\(f'(1)\\) 与 \\(f'(0)\\)，并解释为什么 \\(f'\\) 在 \\(0\\) 处为 \\(0\\)。 · Let \\(f(x)=\\arctan(x^{2})\\). Find \\(f'(1)\\) and \\(f'(0)\\), and explain why \\(f'\\) is \\(0\\) at \\(0\\).",
        "steps": [
          "\\(f'(x)=\\dfrac{2x}{1+x^{4}}\\)。 · \\(f'(x)=\\dfrac{2x}{1+x^{4}}\\).",
          "\\(f'(1)=\\dfrac{2}{1+1}=1\\)。 · \\(f'(1)=\\dfrac{2}{1+1}=1\\).",
          "\\(f'(0)=\\dfrac{0}{1}=0\\)。 · \\(f'(0)=\\dfrac{0}{1}=0\\).",
          "图像上 \\(f(x)=\\arctan(x^{2})\\) 在 \\(x=0\\) 处有水平切线，因为 \\(x^{2}\\) 在 \\(0\\) 处瞬时变化率为 \\(0\\)，链式法则把这一因子带出。 · On the graph, \\(f(x)=\\arctan(x^{2})\\) has a horizontal tangent at \\(x=0\\), because the instantaneous rate of \\(x^{2}\\) at \\(0\\) is \\(0\\), and the chain rule carries that factor through."
        ],
        "solution": "\\(f'(1)=1\\)，\\(f'(0)=0\\)；\\(x=0\\) 处内层导数为 \\(0\\)，所以切线水平。 · \\(f'(1)=1\\) and \\(f'(0)=0\\); the inner derivative is \\(0\\) at \\(x=0\\), so the tangent is horizontal.",
        "solutionLatex": "f'(1)=1,\\quad f'(0)=0"
      }
    ],
    "examTips": [
      "先判断用哪条公式：\\(\\arcsin\\) 正、\\(\\arccos\\) 负、\\(\\arctan\\) 分母为 \\(1+x^{2}\\)。 · First identify the formula: \\(\\arcsin\\) is positive, \\(\\arccos\\) is negative, and \\(\\arctan\\) has denominator \\(1+x^{2}\\).",
      "复合函数一定要乘内层导数 \\(g'(x)\\)。 · For composite functions, always multiply by the inner derivative \\(g'(x)\\).",
      "写出定义域限制；\\(\\arcsin\\) 与 \\(\\arccos\\) 要求 \\(|x|<1\\)。 · State domain restrictions; \\(\\arcsin\\) and \\(\\arccos\\) require \\(|x|<1\\).",
      "先化简再代入，例如 \\(\\sqrt{1-\\left(x^{2}\\right)^{2}}=\\sqrt{1-x^{4}}\\)。 · Simplify before substituting, for example \\(\\sqrt{1-\\left(x^{2}\\right)^{2}}=\\sqrt{1-x^{4}}\\).",
      "切线题先求函数值与斜率，再用点斜式。 · For tangent-line problems, find the function value and slope first, then use point-slope form.",
      "用 \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) 检查负号与符号。 · Use \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) to check signs and the negative sign.",
      "图像题注意端点竖直切线与 \\(\\arctan\\) 的水平渐近线。 · For graph problems, note the vertical tangents at endpoints and the horizontal asymptotes of \\(\\arctan\\).",
      "AP 默认弧度；若题目给角度，要先换算。 · AP calculus uses radians by default; convert first if a problem gives degrees."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.3",
        "title": "反函数导数 · Differentiating Inverse Functions",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.1",
        "title": "链式法则 · The Chain Rule",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u2",
        "code": "2.10",
        "title": "三角函数导数 · Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.5",
        "title": "求导程序的选择 · Selecting Procedures for Calculating Derivatives",
        "relation": "后续 · Follow-up"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "先修：3.3 的反函数公式与 3.1 的链式法则共同提供推导工具。 · Prerequisite: the inverse-function formula from 3.3 and the chain rule from 3.1 supply the derivation tools.",
      "先修：2.10 的三角函数导数用于化简 \\(\\cos y\\)、\\(\\sin y\\)、\\(\\sec^{2}y\\)。 · Prerequisite: trigonometric derivatives from 2.10 simplify \\(\\cos y\\), \\(\\sin y\\), and \\(\\sec^{2}y\\).",
      "后续：3.5 求导程序的选择要求在乘积、商、复合与反三角函数之间选对法则。 · Follow-up: 3.5 Selecting Procedures requires choosing correctly among product, quotient, composite, and inverse trigonometric rules.",
      "应用：反三角函数导数出现在切线、相关变化率与积分公式中。 · Application: inverse trigonometric derivatives appear in tangent lines, related rates, and integration formulas."
    ],
    "intuitionDetailed": "反三角函数把“比值”还原成“角度”，所以它的导数衡量“比值变化一点，角度变化多少”。以 \\(\\arcsin x\\) 为例，在 \\(x=0\\) 附近，\\(\\sin y\\approx y\\)，比值与角度几乎相等，导数接近 \\(1\\)；当 \\(x\\) 接近 \\(1\\) 时，正弦曲线变平，比值再增加一点就需要角度大幅变化，因此导数急剧增大并在端点发散。\\(\\arccos\\) 与 \\(\\arcsin\\) 的和恒为 \\(\\dfrac{\\pi}{2}\\)，所以一个增加多少，另一个就减少多少，导数只差负号。\\(\\arctan\\) 把整个实数轴压缩到 \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\)，在 \\(0\\) 处最陡（斜率 \\(1\\)），越往两端越平，导数 \\(\\dfrac{1}{1+x^{2}}\\) 趋于 \\(0\\)。这些图像特征与公式中的分母完全对应：分母越小，图像越陡；分母越大，图像越平。 · Inverse trigonometric functions turn a ratio back into an angle, so their derivatives measure how much the angle changes when the ratio changes slightly. For \\(\\arcsin x\\) near \\(x=0\\), \\(\\sin y\\approx y\\), so the ratio and angle are nearly equal and the derivative is close to \\(1\\); as \\(x\\) approaches \\(1\\), the sine curve flattens, and a tiny increase in the ratio requires a large increase in angle, so the derivative grows rapidly and blows up at the endpoint. Since \\(\\arccos\\) and \\(\\arcsin\\) add to \\(\\dfrac{\\pi}{2}\\), whatever one gains the other loses, so their derivatives differ only by a minus sign. \\(\\arctan\\) compresses the entire real line into \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\); it is steepest at \\(0\\) (slope \\(1\\)) and flattens toward both ends, with derivative \\(\\dfrac{1}{1+x^{2}}\\) tending to \\(0\\). These graph features match the denominators in the formulas: a smaller denominator means a steeper graph, and a larger denominator means a flatter graph.",
    "development": [
      "回顾 \\(\\arcsin\\)、\\(\\arccos\\)、\\(\\arctan\\) 的定义域、值域与主值区间。 · Review the domains, ranges, and principal intervals of \\(\\arcsin\\), \\(\\arccos\\), and \\(\\arctan\\).",
      "把 \\(y=\\arcsin x\\) 改写成 \\(\\sin y=x\\)，用链式法则推导导数。 · Rewrite \\(y=\\arcsin x\\) as \\(\\sin y=x\\) and derive the derivative with the chain rule.",
      "用同样的方法推导 \\(\\arccos\\) 与 \\(\\arctan\\)，注意负号与 \\(\\sec^{2}y\\) 恒等式。 · Derive \\(\\arccos\\) and \\(\\arctan\\) similarly, paying attention to the negative sign and the \\(\\sec^{2}y\\) identity.",
      "把公式推广到复合函数，练习链式法则。 · Extend the formulas to composite functions and practice the chain rule.",
      "用图像、切线、恒等式与数值检查结果。 · Check results with graphs, tangent lines, identities, and numerical values."
    ],
    "checks": [
      "能否从 \\(\\sin y=x\\) 推出 \\(\\left(\\arcsin x\\right)'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\)？ · Can you derive \\(\\left(\\arcsin x\\right)'=\\dfrac{1}{\\sqrt{1-x^{2}}}\\) from \\(\\sin y=x\\)?",
      "为什么 \\(\\arccos\\) 的导数是负的？ · Why is the derivative of \\(\\arccos\\) negative?",
      "\\(\\arcsin\\) 与 \\(\\arccos\\) 在哪些点不可导？图像上表现为什么？ · Where are \\(\\arcsin\\) and \\(\\arccos\\) not differentiable, and how does this appear on their graphs?",
      "能否对 \\(\\arctan(x^{2})\\) 正确使用链式法则？ · Can you apply the chain rule correctly to \\(\\arctan(x^{2})\\)?",
      "能否用 \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) 检查导数符号？ · Can you use \\(\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}\\) to check derivative signs?",
      "能否写出 \\(\\arctan\\) 的水平渐近线并解释导数趋于 \\(0\\)？ · Can you state the horizontal asymptotes of \\(\\arctan\\) and explain why its derivative tends to \\(0\\)?"
    ],
    "vocabulary": [
      {
        "termZh": "反正弦",
        "termEn": "arcsine",
        "defZh": "\\(\\arcsin x\\)，定义域 \\([-1,1]\\)，值域 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)。",
        "defEn": "\\(\\arcsin x\\), with domain \\([-1,1]\\) and range \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)."
      },
      {
        "termZh": "反余弦",
        "termEn": "arccosine",
        "defZh": "\\(\\arccos x\\)，定义域 \\([-1,1]\\)，值域 \\([0,\\pi]\\)。",
        "defEn": "\\(\\arccos x\\), with domain \\([-1,1]\\) and range \\([0,\\pi]\\)."
      },
      {
        "termZh": "反正切",
        "termEn": "arctangent",
        "defZh": "\\(\\arctan x\\)，定义域为全体实数，值域 \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\)。",
        "defEn": "\\(\\arctan x\\), defined for all real \\(x\\), with range \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\)."
      },
      {
        "termZh": "主值",
        "termEn": "principal value",
        "defZh": "反三角函数取定的单值输出范围，例如 \\(\\arcsin\\) 的主值区间为 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)。",
        "defEn": "The single-valued output range chosen for an inverse trigonometric function; for example, the principal interval of \\(\\arcsin\\) is \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)."
      },
      {
        "termZh": "定义域",
        "termEn": "domain",
        "defZh": "使反三角函数有定义的输入集合；\\(\\arcsin\\) 与 \\(\\arccos\\) 的定义域都是 \\([-1,1]\\)。",
        "defEn": "The set of inputs for which an inverse trigonometric function is defined; both \\(\\arcsin\\) and \\(\\arccos\\) have domain \\([-1,1]\\)."
      },
      {
        "termZh": "值域",
        "termEn": "range",
        "defZh": "反三角函数的所有可能输出；主值区间就是其值域。",
        "defEn": "The set of all possible outputs of an inverse trigonometric function; its principal interval is its range."
      },
      {
        "termZh": "链式法则形式",
        "termEn": "chain-rule form",
        "defZh": "复合反三角函数的导数，如 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(g(x))]=\\dfrac{g'(x)}{1+\\left(g(x)\\right)^{2}}\\)。",
        "defEn": "The derivative of a composite inverse trigonometric function, such as \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[\\arctan(g(x))]=\\dfrac{g'(x)}{1+\\left(g(x)\\right)^{2}}\\)."
      },
      {
        "termZh": "竖直切线",
        "termEn": "vertical tangent",
        "defZh": "\\(\\arcsin\\) 与 \\(\\arccos\\) 在 \\(x=\\pm1\\) 处的切线竖直，导数不存在。",
        "defEn": "The tangent is vertical at \\(x=\\pm1\\) for \\(\\arcsin\\) and \\(\\arccos\\), where the derivative does not exist."
      }
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
    "titleZh": "求导程序的选择",
    "titleEn": "Selecting Procedures for Calculating Derivatives",
    "layer": "ap",
    "summary": "求导程序的选择 · Selecting Procedures for Calculating Derivatives",
    "learningObjectives": [
      "能陈述「求导程序的选择」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Selecting Procedures for Calculating Derivatives：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「求导程序的选择」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "求导程序的选择（Selecting Procedures for Calculating Derivatives）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「求导程序的选择」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「求导程序的选择」的工作方程或机制链。"
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
      "掌握 3.5「求导程序的选择」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「求导程序的选择」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「求导程序的选择」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「求导程序的选择」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「求导程序的选择」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「求导程序的选择」；用斜线分式代替叠式分式导致歧义"
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
    "intuitionDetailed": "把「求导程序的选择」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「求导程序的选择」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「求导程序的选择」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "乘积法则",
        "termEn": "product rule",
        "defZh": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[f g]=f'g+fg'\\)。",
        "defEn": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}[f g]=f'g+fg'\\)."
      },
      {
        "termZh": "商法则",
        "termEn": "quotient rule",
        "defZh": "对两个函数之商求导的法则。",
        "defEn": "The rule for differentiating a quotient of two functions."
      },
      {
        "termZh": "链式法则",
        "termEn": "chain rule",
        "defZh": "对复合函数 \\(f(g(x))\\) 求导，得 \\(f'(g(x))g'(x)\\)。",
        "defEn": "Differentiating \\(f(g(x))\\) gives \\(f'(g(x))g'(x)\\)."
      },
      {
        "termZh": "隐函数求导",
        "termEn": "implicit differentiation",
        "defZh": "对方程两边关于 \\(x\\) 求导并解出 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。",
        "defEn": "Differentiating both sides of an equation with respect to \\(x\\) and solving for \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)."
      },
      {
        "termZh": "对数求导",
        "termEn": "logarithmic differentiation",
        "defZh": "先取对数再求导，适用于幂指函数或复杂乘积。",
        "defEn": "Taking logarithms before differentiating, useful for functions with variable exponents or long products."
      },
      {
        "termZh": "方法选择",
        "termEn": "method selection",
        "defZh": "根据函数结构选择最直接的求导法则。",
        "defEn": "Choosing the most direct differentiation rule based on the structure of the function."
      }
    ]
  },
  "3.6": {
    "id": "math/calc-u3/3.6",
    "subject": "math",
    "chapterId": "calc-u3",
    "unitCode": "3",
    "unitTitleZh": "复合、隐函数与反函数导数",
    "unitTitleEn": "Differentiation: Composite, Implicit, and Inverse Functions",
    "layer": "ap",
    "code": "3.6",
    "titleZh": "高阶导数",
    "titleEn": "Calculating Higher-Order Derivatives",
    "summary": "高阶导数是对导数继续求导的结果。若 \\(f'\\) 在 \\(x\\) 处可导，则 \\(f''(x)=\\left(f'\\right)'(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\)，称为二阶导数；再对 \\(f''\\) 求导得 \\(f'''\\)，依此类推得到 \\(n\\) 阶导数 \\(f^{(n)}\\)。每求一阶都要求上一阶导数在该点可导，所以高阶导数的存在性是逐阶的，定义域也可能逐阶缩小。记号方面：一阶导数为 \\(f'(x)\\)、\\(y'\\)、\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)；二阶导数为 \\(f''(x)\\)、\\(y''\\)、\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)；\\(n\\) 阶导数为 \\(f^{(n)}(x)\\)、\\(y^{(n)}\\)、\\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\)。\\(f^{(n)}\\) 的括号表示求导次数，不是 \\(n\\) 次幂；\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 表示对 \\(x\\) 求导两次，不是把一阶导数平方。高阶导数用于描述加速度、加加速度、凹凸性与泰勒系数。 · Higher-order derivatives come from differentiating derivatives repeatedly. If \\(f'\\) is differentiable at \\(x\\), then \\(f''(x)=\\left(f'\\right)'(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\) is the second derivative; differentiating \\(f''\\) gives \\(f'''\\), and continuing produces the \\(n\\)th derivative \\(f^{(n)}\\). Each step requires the previous derivative to be differentiable at the point, so higher-order derivatives exist one order at a time, and their domains may shrink. Notation: the first derivative is written \\(f'(x)\\), \\(y'\\), or \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\); the second derivative is written \\(f''(x)\\), \\(y''\\), or \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\); the \\(n\\)th derivative is written \\(f^{(n)}(x)\\), \\(y^{(n)}\\), or \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\). The parentheses in \\(f^{(n)}\\) indicate the number of derivatives, not an \\(n\\)th power; \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) means differentiating twice with respect to \\(x\\), not squaring the first derivative. Higher-order derivatives describe acceleration, jerk, concavity, and Taylor coefficients.",
    "learningObjectives": [
      "能递归定义二阶导数与 \\(n\\) 阶导数，并说明每一阶存在都以低一阶导数可导为前提。 · Define the second derivative and the \\(n\\)th derivative recursively, and explain that each order requires the previous derivative to be differentiable.",
      "能计算多项式、指数函数、三角函数、对数函数与有理函数的高阶导数，并归纳一般公式。 · Compute higher-order derivatives of polynomials, exponentials, trigonometric functions, logarithms, and rational functions, and generalize to formulas.",
      "能在 \\(f'(x)\\)、\\(y'\\)、\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)、\\(f''(x)\\)、\\(y''\\)、\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)、\\(f^{(n)}(x)\\)、\\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\) 之间正确转换。 · Convert correctly among \\(f'(x)\\), \\(y'\\), \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\), \\(f''(x)\\), \\(y''\\), \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\), \\(f^{(n)}(x)\\), and \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\).",
      "能把二阶导数解释为变化率的变化率、运动的加速度或图像的凹凸性。 · Interpret the second derivative as the rate of change of a rate, the acceleration of motion, or the concavity of a graph.",
      "能对隐式关系连续求导两次，并处理 \\(y'\\) 的代入与化简。 · Differentiate an implicit relation twice and handle the substitution and simplification of \\(y'\\)."
    ],
    "essentialKnowledge": [
      "二阶导数定义：\\(f''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\)，前提是 \\(f'\\) 在 \\(x\\) 处可导。 · Definition of the second derivative: \\(f''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\), provided \\(f'\\) is differentiable at \\(x\\).",
      "\\(n\\) 阶导数递归定义：\\(f^{(1)}=f'\\)，\\(f^{(n)}=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f^{(n-1)}\\right]\\)，其中 \\(n\\ge2\\)。 · Recursive definition of the \\(n\\)th derivative: \\(f^{(1)}=f'\\) and \\(f^{(n)}=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f^{(n-1)}\\right]\\) for \\(n\\ge2\\).",
      "存在性逐阶提高：有 \\(f''\\) 需要 \\(f'\\) 可导；有 \\(f'''\\) 需要 \\(f''\\) 可导；某一阶不存在时更高阶也不存在。 · Existence is order by order: \\(f''\\) requires \\(f'\\) to be differentiable; \\(f'''\\) requires \\(f''\\) to be differentiable; if one order fails, higher orders also fail.",
      "二阶导数记号：\\(f''(x)\\)、\\(y''\\)、\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)、\\(\\dfrac{\\mathrm{d}^{2}}{\\mathrm{d}x^{2}}\\left[f(x)\\right]\\) 表示同一个量。 · Second-derivative notation: \\(f''(x)\\), \\(y''\\), \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\), and \\(\\dfrac{\\mathrm{d}^{2}}{\\mathrm{d}x^{2}}\\left[f(x)\\right]\\) all denote the same quantity.",
      "\\(n\\) 阶导数记号：\\(f^{(n)}(x)\\)、\\(y^{(n)}\\)、\\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\)；括号中的 \\(n\\) 是求导次数，不是指数。 · \\(n\\)th-derivative notation: \\(f^{(n)}(x)\\), \\(y^{(n)}\\), and \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\); the \\(n\\) in parentheses is the number of derivatives, not an exponent.",
      "多项式：若 \\(p(x)\\) 的次数为 \\(m\\)，则 \\(p^{(n)}(x)=0\\) 对所有 \\(n>m\\) 成立；\\(m\\) 阶导数为常数 \\(m!\\) 乘以首项系数。 · Polynomials: if \\(p(x)\\) has degree \\(m\\), then \\(p^{(n)}(x)=0\\) for all \\(n>m\\); the \\(m\\)th derivative is the leading coefficient times \\(m!\\).",
      "指数函数：\\(\\left(e^{ax}\\right)^{(n)}=a^{n}e^{ax}\\)；特别地，\\(\\left(e^{x}\\right)^{(n)}=e^{x}\\)。 · Exponentials: \\(\\left(e^{ax}\\right)^{(n)}=a^{n}e^{ax}\\); in particular, \\(\\left(e^{x}\\right)^{(n)}=e^{x}\\).",
      "三角函数：\\(\\sin x\\) 的导数以 \\(4\\) 为周期循环：\\(\\sin x\\to\\cos x\\to-\\sin x\\to-\\cos x\\to\\sin x\\)；\\(\\cos x\\) 同理。 · Trigonometric functions: the derivatives of \\(\\sin x\\) cycle with period \\(4\\): \\(\\sin x\\to\\cos x\\to-\\sin x\\to-\\cos x\\to\\sin x\\); the same holds for \\(\\cos x\\).",
      "对数函数：\\(\\left(\\ln x\\right)^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}}\\)，\\(x>0\\)。 · Logarithms: \\(\\left(\\ln x\\right)^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}}\\) for \\(x>0\\).",
      "倒数幂：\\(\\left(\\dfrac{1}{x}\\right)^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}}\\)，\\(x\\ne0\\)。 · Reciprocal powers: \\(\\left(\\dfrac{1}{x}\\right)^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}}\\) for \\(x\\ne0\\).",
      "运动学：位置 \\(s(t)\\) 的一阶导数是速度 \\(v(t)\\)，二阶导数是加速度 \\(a(t)\\)，三阶导数是加加速度 \\(j(t)\\)；单位逐阶变为“每单位时间”多一次。 · Kinematics: the first derivative of position \\(s(t)\\) is velocity \\(v(t)\\), the second is acceleration \\(a(t)\\), and the third is jerk \\(j(t)\\); units gain one “per time” factor at each order.",
      "图像意义：\\(f''>0\\) 时 \\(f'\\) 递增、\\(f\\) 凹向上；\\(f''<0\\) 时 \\(f'\\) 递减、\\(f\\) 凹向下；\\(f''=0\\) 且两侧变号对应拐点。 · Graphical meaning: \\(f''>0\\) means \\(f'\\) is increasing and \\(f\\) is concave up; \\(f''<0\\) means \\(f'\\) is decreasing and \\(f\\) is concave down; \\(f''=0\\) with a sign change across the point corresponds to an inflection point.",
      "隐函数高阶导数：先求 \\(y'\\)，再对 \\(y'\\) 的表达式关于 \\(x\\) 求导，遇到 \\(y\\) 时乘 \\(y'\\)，最后把 \\(y'\\) 代回。 · Higher implicit derivatives: find \\(y'\\) first, then differentiate the expression for \\(y'\\) with respect to \\(x\\), multiplying by \\(y'\\) whenever \\(y\\) is differentiated, and finally substitute \\(y'\\) back.",
      "并非所有可导函数都有二阶导数；例如 \\(f(x)=x|x|\\) 在 \\(0\\) 处可导，但 \\(f'\\) 在 \\(0\\) 处不可导，所以 \\(f''(0)\\) 不存在。 · Not every differentiable function has a second derivative; for example, \\(f(x)=x|x|\\) is differentiable at \\(0\\), but \\(f'\\) is not differentiable there, so \\(f''(0)\\) does not exist."
    ],
    "definition": "设 \\(f\\) 在包含 \\(x\\) 的开区间上可导。若 \\(f'\\) 在 \\(x\\) 处可导，则定义 \\(f''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\)，称为 \\(f\\) 的二阶导数。重复这一过程：若 \\(f''\\) 在 \\(x\\) 处可导，则 \\(f'''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f''(x)\\right]\\)；一般地，对整数 \\(n\\ge2\\)，\\(f^{(n)}(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f^{(n-1)}(x)\\right]\\)。因此 \\(f^{(n)}\\) 表示对 \\(f\\) 连续求导 \\(n\\) 次，且只有当 \\(f,f',\\ldots,f^{(n-1)}\\) 都在讨论点可导时，\\(f^{(n)}\\) 才存在。若 \\(y=f(x)\\)，二阶导数也写作 \\(y''\\) 或 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)，\\(n\\) 阶导数写作 \\(y^{(n)}\\) 或 \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\)。括号记号 \\(f^{(n)}\\) 中的 \\(n\\) 是求导次数，不能与幂 \\(f^{n}\\) 混淆。 · Let \\(f\\) be differentiable on an open interval containing \\(x\\). If \\(f'\\) is differentiable at \\(x\\), define \\(f''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\), the second derivative of \\(f\\). Repeat: if \\(f''\\) is differentiable at \\(x\\), then \\(f'''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f''(x)\\right]\\); in general, for an integer \\(n\\ge2\\), \\(f^{(n)}(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f^{(n-1)}(x)\\right]\\). Thus \\(f^{(n)}\\) means differentiating \\(f\\) \\(n\\) times in succession, and \\(f^{(n)}\\) exists only when \\(f,f',\\ldots,f^{(n-1)}\\) are all differentiable at the point in question. If \\(y=f(x)\\), the second derivative is also written \\(y''\\) or \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\), and the \\(n\\)th derivative is written \\(y^{(n)}\\) or \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\). The \\(n\\) in the parenthetical notation \\(f^{(n)}\\) is the number of derivatives and must not be confused with the power \\(f^{n}\\).",
    "intuition": "一阶导数描述“变化有多快”，二阶导数描述“变化率本身变化有多快”。开车时，位置的一阶导数是速度，二阶导数是加速度：速度不变时加速度为零，速度增加时加速度为正，速度减少时加速度为负。三阶导数（加加速度）描述加速度的变化，常见于舒适度与冲击分析。图像上，一阶导数看增减，二阶导数看弯曲方向：\\(f''>0\\) 像碗口向上，\\(f''<0\\) 像碗口向下。 · The first derivative describes how fast something changes; the second derivative describes how fast the rate itself changes. While driving, the first derivative of position is velocity and the second is acceleration: acceleration is zero at constant velocity, positive when speeding up, and negative when slowing down. The third derivative, jerk, describes how acceleration changes and appears in comfort and impact analysis. On a graph, the first derivative determines increase or decrease, while the second determines the direction of bending: \\(f''>0\\) looks like a cup opening upward, and \\(f''<0\\) like a cup opening downward.",
    "formulas": [
      {
        "latex": "f''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]=\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}",
        "note": "二阶导数：对一阶导数再求导一次。 · Second derivative: differentiate the first derivative once more."
      },
      {
        "latex": "f^{(n)}(x)=\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f^{(n-1)}(x)\\right]",
        "note": "\\(n\\) 阶导数的递归定义与莱布尼茨记号。 · Recursive definition and Leibniz notation for the \\(n\\)th derivative."
      },
      {
        "latex": "\\left(x^{m}\\right)^{(n)}=\\dfrac{m!}{(m-n)!}x^{m-n},\\quad 0\\le n\\le m",
        "note": "幂函数的高阶导数；当 \\(n>m\\) 时导数为 \\(0\\)。 · Higher derivative of a power function; the derivative is \\(0\\) when \\(n>m\\)."
      },
      {
        "latex": "\\left(e^{ax}\\right)^{(n)}=a^{n}e^{ax}",
        "note": "指数函数每求导一次就乘一个 \\(a\\)。 · Each differentiation of an exponential multiplies by one factor of \\(a\\)."
      },
      {
        "latex": "\\left(\\sin x\\right)^{(n)}=\\sin\\left(x+\\dfrac{n\\pi}{2}\\right),\\quad \\left(\\cos x\\right)^{(n)}=\\cos\\left(x+\\dfrac{n\\pi}{2}\\right)",
        "note": "正弦与余弦的高阶导数按四步循环，可用相位移动表示。 · Higher derivatives of sine and cosine cycle every four steps and can be written as phase shifts."
      },
      {
        "latex": "\\left(\\ln x\\right)^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}},\\quad x>0",
        "note": "对数函数的高阶导数；符号按 \\(n\\) 交替。 · Higher derivative of the logarithm; the sign alternates with \\(n\\)."
      },
      {
        "latex": "\\left(\\dfrac{1}{x}\\right)^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}},\\quad x\\ne0",
        "note": "倒数幂的高阶导数；与对数公式的符号规律相差一个负号。 · Higher derivative of a reciprocal power; its sign pattern differs from the logarithm by one minus sign."
      },
      {
        "latex": "s''(t)=a(t),\\quad s'''(t)=j(t)",
        "note": "位置、速度、加速度与加加速度的关系。 · Relations among position, velocity, acceleration, and jerk."
      },
      {
        "latex": "f''>0\\ \\Rightarrow\\ f'\\ \\text{递增，}f\\ \\text{凹向上};\\quad f''<0\\ \\Rightarrow\\ f'\\ \\text{递减，}f\\ \\text{凹向下}",
        "note": "二阶导数的符号决定一阶导数的单调性与图像的凹凸性。 · The sign of the second derivative determines the monotonicity of \\(f'\\) and the concavity of \\(f\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "一阶导数 · first derivative",
        "to": "二阶导数 · second derivative",
        "note": "把 \\(f'\\) 当作新函数，再对它求导：\\(f''=\\left(f'\\right)'\\)。这就是“对导数继续求导”的字面含义。 · Treat \\(f'\\) as a new function and differentiate it: \\(f''=\\left(f'\\right)'\\). This is the literal meaning of “differentiate the derivative.”"
      },
      {
        "from": "二阶导数 · second derivative",
        "to": "\\(n\\) 阶导数 · \\(n\\)th derivative",
        "note": "重复同一操作：\\(f'''=\\left(f''\\right)'\\)，\\(f^{(4)}=\\left(f'''\\right)'\\)，一般地 \\(f^{(n)}=\\left(f^{(n-1)}\\right)'\\)。 · Repeat the same operation: \\(f'''=\\left(f''\\right)'\\), \\(f^{(4)}=\\left(f'''\\right)'\\), and in general \\(f^{(n)}=\\left(f^{(n-1)}\\right)'\\)."
      },
      {
        "from": "莱布尼茨记号 · Leibniz notation",
        "to": "二阶导数记号 · second-derivative notation",
        "note": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\) 是求导算子；连续作用两次记作 \\(\\dfrac{\\mathrm{d}^{2}}{\\mathrm{d}x^{2}}\\)，作用在 \\(y\\) 上得到 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\) is the differentiation operator; applying it twice is written \\(\\dfrac{\\mathrm{d}^{2}}{\\mathrm{d}x^{2}}\\), and applying it to \\(y\\) gives \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)."
      },
      {
        "from": "多项式 · polynomial",
        "to": "阶乘规律 · factorial pattern",
        "note": "每求导一次，次数降低 \\(1\\)，并依次乘上 \\(m,m-1,m-2,\\ldots\\)；求导 \\(n\\) 次后系数为 \\(m(m-1)\\cdots(m-n+1)=\\dfrac{m!}{(m-n)!}\\)。 · Each differentiation lowers the degree by \\(1\\) and multiplies successively by \\(m,m-1,m-2,\\ldots\\); after \\(n\\) derivatives the coefficient is \\(m(m-1)\\cdots(m-n+1)=\\dfrac{m!}{(m-n)!}\\)."
      },
      {
        "from": "指数函数 · exponential",
        "to": "指数规律 · exponential pattern",
        "note": "\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[e^{ax}\\right]=ae^{ax}\\)，所以每求导一次就多乘一个 \\(a\\)，\\(n\\) 次后为 \\(a^{n}e^{ax}\\)。 · \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[e^{ax}\\right]=ae^{ax}\\), so each differentiation adds one factor of \\(a\\); after \\(n\\) derivatives the result is \\(a^{n}e^{ax}\\)."
      },
      {
        "from": "三角函数 · trigonometric functions",
        "to": "四步循环 · four-step cycle",
        "note": "\\(\\sin x\\to\\cos x\\to-\\sin x\\to-\\cos x\\to\\sin x\\)，周期为 \\(4\\)；所以只需看 \\(n\\) 除以 \\(4\\) 的余数。 · \\(\\sin x\\to\\cos x\\to-\\sin x\\to-\\cos x\\to\\sin x\\) has period \\(4\\), so only the remainder of \\(n\\) modulo \\(4\\) matters."
      },
      {
        "from": "对数与倒数幂 · logarithm and reciprocal powers",
        "to": "交替符号 · alternating signs",
        "note": "\\(\\ln x\\) 每求导一次增加一个 \\(x\\) 的分母并产生交替符号；\\(\\dfrac{1}{x}=x^{-1}\\) 也可用幂函数规律得到。 · Each derivative of \\(\\ln x\\) adds one factor of \\(x\\) in the denominator and produces an alternating sign; \\(\\dfrac{1}{x}=x^{-1}\\) can also be handled by the power rule."
      },
      {
        "from": "隐函数 · implicit relation",
        "to": "二阶隐导数 · second implicit derivative",
        "note": "先求 \\(y'\\)，再对 \\(y'\\) 关于 \\(x\\) 求导；遇到 \\(y\\) 时乘 \\(y'\\)，最后把已知的 \\(y'\\) 表达式代入，得到只含 \\(x,y\\) 的 \\(y''\\)。 · Find \\(y'\\) first, then differentiate \\(y'\\) with respect to \\(x\\); multiply by \\(y'\\) whenever \\(y\\) is differentiated, then substitute the known expression for \\(y'\\) to obtain \\(y''\\) in terms of \\(x\\) and \\(y\\) only."
      },
      {
        "from": "运动 · motion",
        "to": "加速度与加加速度 · acceleration and jerk",
        "note": "若 \\(s(t)\\) 的单位为米，则 \\(s'(t)\\) 的单位为米每秒，\\(s''(t)\\) 的单位为米每二次方秒，\\(s'''(t)\\) 的单位为米每三次方秒。 · If \\(s(t)\\) is measured in meters, then \\(s'(t)\\) is in meters per second, \\(s''(t)\\) is in meters per second squared, and \\(s'''(t)\\) is in meters per second cubed."
      },
      {
        "from": "可导但不可二阶导 · differentiable but not twice differentiable",
        "to": "存在性边界 · existence boundary",
        "note": "\\(f(x)=x|x|\\) 的 \\(f'(x)=2|x|\\) 在 \\(0\\) 处有尖点，所以 \\(f''(0)\\) 不存在；这提醒我们“可导”不自动保证“二阶可导”。 · For \\(f(x)=x|x|\\), \\(f'(x)=2|x|\\) has a corner at \\(0\\), so \\(f''(0)\\) does not exist; this shows that differentiability does not automatically guarantee second differentiability."
      }
    ],
    "conditions": [
      "\\(f'\\) 必须在 \\(x\\) 处可导，\\(f''(x)\\) 才存在。 · \\(f'\\) must be differentiable at \\(x\\) for \\(f''(x)\\) to exist.",
      "求 \\(f^{(n)}\\) 需要 \\(f,f',\\ldots,f^{(n-1)}\\) 都在讨论点可导；任何一阶失败都会阻止更高阶存在。 · Finding \\(f^{(n)}\\) requires \\(f,f',\\ldots,f^{(n-1)}\\) to be differentiable at the point; failure at any order prevents higher orders from existing.",
      "\\(n\\) 是正整数；约定 \\(f^{(0)}=f\\)，\\(f^{(1)}=f'\\)。 · \\(n\\) is a positive integer; by convention \\(f^{(0)}=f\\) and \\(f^{(1)}=f'\\).",
      "定义域可能逐阶缩小；求高阶导数后要重新检查分母、根号与对数的限制。 · The domain may shrink order by order; after computing higher derivatives, recheck denominators, radicals, and logarithm restrictions.",
      "分段函数在分界点求高阶导数时，要分别检查左右导数是否相等。 · For piecewise functions, check whether the left- and right-hand derivatives agree at the break point.",
      "隐函数求二阶导数时，必须先求 \\(y'\\)，再对 \\(y'\\) 求导，最后把 \\(y'\\) 代回。 · For a second implicit derivative, first find \\(y'\\), then differentiate \\(y'\\), and finally substitute \\(y'\\) back.",
      "\\(f^{(n)}\\) 中的括号不可省略；\\(f^{n}\\) 表示幂，\\(f^{(n)}\\) 表示第 \\(n\\) 阶导数。 · The parentheses in \\(f^{(n)}\\) cannot be omitted; \\(f^{n}\\) is a power, while \\(f^{(n)}\\) is the \\(n\\)th derivative.",
      "高阶导数的单位要逐阶检查；每求导一次，单位就多一个“每单位自变量”。 · Check units at each order; each differentiation adds one “per unit of the independent variable.”",
      "多项式次数为 \\(m\\) 时，\\(n>m\\) 的 \\(n\\) 阶导数为 \\(0\\)，这是检验计算的有力工具。 · For a polynomial of degree \\(m\\), the \\(n\\)th derivative is \\(0\\) for \\(n>m\\), a useful check on computations."
    ],
    "keyPoints": [
      "\\(f''=\\left(f'\\right)'\\)，\\(f^{(n)}=\\left(f^{(n-1)}\\right)'\\)。 · \\(f''=\\left(f'\\right)'\\) and \\(f^{(n)}=\\left(f^{(n-1)}\\right)'\\).",
      "高阶导数逐阶存在；可导不等于二阶可导。 · Higher derivatives exist one order at a time; differentiable does not imply twice differentiable.",
      "\\(f''(x)\\)、\\(y''\\)、\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 表示同一个量。 · \\(f''(x)\\), \\(y''\\), and \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) denote the same quantity.",
      "\\(f^{(n)}\\) 的括号表示求导次数，不是幂。 · The parentheses in \\(f^{(n)}\\) indicate the number of derivatives, not a power.",
      "多项式求导足够多次后变为 \\(0\\)。 · A polynomial becomes \\(0\\) after enough differentiations.",
      "\\(e^{ax}\\) 的高阶导数每次乘 \\(a\\)。 · Each higher derivative of \\(e^{ax}\\) multiplies by \\(a\\).",
      "\\(\\sin x\\) 与 \\(\\cos x\\) 的高阶导数按四步循环。 · Higher derivatives of \\(\\sin x\\) and \\(\\cos x\\) cycle every four steps.",
      "\\(\\ln x\\) 与 \\(\\dfrac{1}{x}\\) 的高阶导数有交替符号与阶乘系数。 · Higher derivatives of \\(\\ln x\\) and \\(\\dfrac{1}{x}\\) have alternating signs and factorial coefficients.",
      "二阶导数描述变化率的变化率；运动中是加速度。 · The second derivative describes the rate of change of a rate; in motion it is acceleration.",
      "\\(f''>0\\) 凹向上，\\(f''<0\\) 凹向下，\\(f''\\) 变号处可能是拐点。 · \\(f''>0\\) means concave up, \\(f''<0\\) means concave down, and a sign change in \\(f''\\) may indicate an inflection point.",
      "隐函数求二阶导数时要把 \\(y'\\) 代回并化简。 · When finding a second implicit derivative, substitute \\(y'\\) back and simplify.",
      "先化简再求导通常比直接反复求导更省力。 · Simplifying before differentiating is often easier than differentiating repeatedly without simplification."
    ],
    "misconceptions": [
      "把 \\(f''\\) 理解为 \\(f\\) 的平方或 \\(\\left(f'\\right)^{2}\\)；它是对 \\(f'\\) 再求导。 · Interpreting \\(f''\\) as the square of \\(f\\) or as \\(\\left(f'\\right)^{2}\\); it is the derivative of \\(f'\\).",
      "把 \\(f^{(2)}\\) 当成 \\(f^{2}\\)；括号中的 \\(2\\) 是求导次数。 · Treating \\(f^{(2)}\\) as \\(f^{2}\\); the \\(2\\) in parentheses is the number of derivatives.",
      "把 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 理解为 \\(\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{2}\\)；它是二阶导数。 · Reading \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) as \\(\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{2}\\); it is the second derivative.",
      "只求导一次就写成二阶导数。 · Differentiating only once and calling the result a second derivative.",
      "认为函数可导就一定二阶可导；\\(x|x|\\) 是反例。 · Assuming differentiability implies second differentiability; \\(x|x|\\) is a counterexample.",
      "求高阶导数时漏掉乘积法则、商法则或链式法则。 · Omitting the product, quotient, or chain rule when computing higher derivatives.",
      "把加速度与速度混淆；加速度是位置对时间的二阶导数。 · Confusing acceleration with velocity; acceleration is the second derivative of position with respect to time.",
      "把 \\(f''>0\\) 说成“函数递增”；它表示 \\(f'\\) 递增、图像凹向上。 · Saying \\(f''>0\\) means “the function is increasing”; it means \\(f'\\) is increasing and the graph is concave up.",
      "隐函数求二阶导数时忘记把 \\(y'\\) 代回，答案仍含 \\(y'\\)。 · Forgetting to substitute \\(y'\\) back when finding a second implicit derivative, leaving \\(y'\\) in the answer.",
      "对隐函数第二次求导时漏掉 \\(y\\) 项产生的 \\(y'\\)。 · Omitting the \\(y'\\) produced by differentiating a \\(y\\) term in the second implicit differentiation.",
      "认为多项式无论求导多少次都不会变成 \\(0\\)。 · Thinking a polynomial never becomes \\(0\\) no matter how many times it is differentiated.",
      "忽略高阶导数的单位变化，或把不同阶导数直接相加。 · Ignoring unit changes in higher derivatives, or adding derivatives of different orders directly."
    ],
    "examples": [
      {
        "title": "例 1 · 多项式 · Polynomial · Example 1 · Polynomial",
        "prompt": "设 \\(f(x)=x^{4}-3x^{2}+2x\\)。求 \\(f'(x)\\)、\\(f''(x)\\)、\\(f'''(x)\\)、\\(f^{(4)}(x)\\) 与 \\(f^{(5)}(x)\\)，并验证次数规律。 · Let \\(f(x)=x^{4}-3x^{2}+2x\\). Find \\(f'(x)\\), \\(f''(x)\\), \\(f'''(x)\\), \\(f^{(4)}(x)\\), and \\(f^{(5)}(x)\\), and verify the degree pattern.",
        "steps": [
          "\\(f'(x)=4x^{3}-6x+2\\)。 · \\(f'(x)=4x^{3}-6x+2\\).",
          "\\(f''(x)=12x^{2}-6\\)。 · \\(f''(x)=12x^{2}-6\\).",
          "\\(f'''(x)=24x\\)，\\(f^{(4)}(x)=24\\)。 · \\(f'''(x)=24x\\), and \\(f^{(4)}(x)=24\\).",
          "\\(f^{(5)}(x)=0\\)；原函数是四次多项式，求导超过四次后必为零。 · \\(f^{(5)}(x)=0\\); the original function is a quartic, so derivatives beyond the fourth must vanish."
        ],
        "solution": "\\(f''(x)=12x^{2}-6\\)，\\(f'''(x)=24x\\)，\\(f^{(4)}(x)=24\\)，\\(f^{(5)}(x)=0\\)。 · \\(f''(x)=12x^{2}-6\\), \\(f'''(x)=24x\\), \\(f^{(4)}(x)=24\\), and \\(f^{(5)}(x)=0\\).",
        "solutionLatex": "f''(x)=12x^{2}-6,\\quad f^{(5)}(x)=0"
      },
      {
        "title": "例 2 · 指数函数 · Exponential · Example 2 · Exponential",
        "prompt": "设 \\(y=e^{2x}\\)。求 \\(y'\\)、\\(y''\\)、\\(y'''\\)，并写出 \\(y^{(n)}\\) 的一般公式。 · Let \\(y=e^{2x}\\). Find \\(y'\\), \\(y''\\), and \\(y'''\\), and write a general formula for \\(y^{(n)}\\).",
        "steps": [
          "\\(y'=2e^{2x}\\)。 · \\(y'=2e^{2x}\\).",
          "\\(y''=2\\cdot2e^{2x}=4e^{2x}\\)。 · \\(y''=2\\cdot2e^{2x}=4e^{2x}\\).",
          "\\(y'''=2\\cdot4e^{2x}=8e^{2x}\\)。 · \\(y'''=2\\cdot4e^{2x}=8e^{2x}\\).",
          "每求导一次乘一个 \\(2\\)，所以 \\(y^{(n)}=2^{n}e^{2x}\\)。 · Each derivative multiplies by \\(2\\), so \\(y^{(n)}=2^{n}e^{2x}\\)."
        ],
        "solution": "\\(y''=4e^{2x}\\)，\\(y'''=8e^{2x}\\)，\\(y^{(n)}=2^{n}e^{2x}\\)。 · \\(y''=4e^{2x}\\), \\(y'''=8e^{2x}\\), and \\(y^{(n)}=2^{n}e^{2x}\\).",
        "solutionLatex": "y^{(n)}=2^{n}e^{2x}"
      },
      {
        "title": "例 3 · 三角函数循环 · Trigonometric Cycle · Example 3 · Trigonometric Cycle",
        "prompt": "设 \\(y=\\sin x\\)。写出前四阶导数，并求 \\(y^{(2026)}\\)。 · Let \\(y=\\sin x\\). Write the first four derivatives and find \\(y^{(2026)}\\).",
        "steps": [
          "\\(y'=\\cos x\\)。 · \\(y'=\\cos x\\).",
          "\\(y''=-\\sin x\\)，\\(y'''=-\\cos x\\)，\\(y^{(4)}=\\sin x\\)。 · \\(y''=-\\sin x\\), \\(y'''=-\\cos x\\), and \\(y^{(4)}=\\sin x\\).",
          "导数以 \\(4\\) 为周期循环；计算 \\(2026=4\\cdot506+2\\)，余数为 \\(2\\)。 · The derivatives cycle with period \\(4\\); \\(2026=4\\cdot506+2\\), so the remainder is \\(2\\).",
          "余数 \\(2\\) 对应 \\(y''=-\\sin x\\)，所以 \\(y^{(2026)}=-\\sin x\\)。 · Remainder \\(2\\) corresponds to \\(y''=-\\sin x\\), so \\(y^{(2026)}=-\\sin x\\)."
        ],
        "solution": "\\(y^{(2026)}=-\\sin x\\)。 · \\(y^{(2026)}=-\\sin x\\).",
        "solutionLatex": "y^{(2026)}=-\\sin x"
      },
      {
        "title": "例 4 · 对数函数 · Logarithm · Example 4 · Logarithm",
        "prompt": "设 \\(y=\\ln x\\)（\\(x>0\\)）。求前四阶导数，并归纳 \\(y^{(n)}\\)。 · Let \\(y=\\ln x\\) for \\(x>0\\). Find the first four derivatives and generalize to \\(y^{(n)}\\).",
        "steps": [
          "\\(y'=\\dfrac{1}{x}\\)。 · \\(y'=\\dfrac{1}{x}\\).",
          "\\(y''=-\\dfrac{1}{x^{2}}\\)，\\(y'''=\\dfrac{2}{x^{3}}\\)，\\(y^{(4)}=-\\dfrac{6}{x^{4}}\\)。 · \\(y''=-\\dfrac{1}{x^{2}}\\), \\(y'''=\\dfrac{2}{x^{3}}\\), and \\(y^{(4)}=-\\dfrac{6}{x^{4}}\\).",
          "符号交替，系数为阶乘：\\(1,1,2,6\\)，对应 \\((n-1)!\\)。 · The signs alternate and the coefficients are factorials: \\(1,1,2,6\\), corresponding to \\((n-1)!\\).",
          "所以 \\(y^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}}\\)。 · Therefore \\(y^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}}\\)."
        ],
        "solution": "\\(y^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}}\\)。 · \\(y^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}}\\).",
        "solutionLatex": "y^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{x^{n}}"
      },
      {
        "title": "例 5 · 倒数幂 · Reciprocal Power · Example 5 · Reciprocal Power",
        "prompt": "设 \\(y=\\dfrac{1}{x}\\)（\\(x\\ne0\\)）。求 \\(y'\\)、\\(y''\\)、\\(y'''\\)，并写出 \\(y^{(n)}\\)。 · Let \\(y=\\dfrac{1}{x}\\) for \\(x\\ne0\\). Find \\(y'\\), \\(y''\\), and \\(y'''\\), and write \\(y^{(n)}\\).",
        "steps": [
          "\\(y'=-x^{-2}=-\\dfrac{1}{x^{2}}\\)。 · \\(y'=-x^{-2}=-\\dfrac{1}{x^{2}}\\).",
          "\\(y''=2x^{-3}=\\dfrac{2}{x^{3}}\\)，\\(y'''=-6x^{-4}=-\\dfrac{6}{x^{4}}\\)。 · \\(y''=2x^{-3}=\\dfrac{2}{x^{3}}\\), and \\(y'''=-6x^{-4}=-\\dfrac{6}{x^{4}}\\).",
          "符号为 \\((-1)^{n}\\)，系数为 \\(n!\\)，分母为 \\(x^{n+1}\\)。 · The sign is \\((-1)^{n}\\), the coefficient is \\(n!\\), and the denominator is \\(x^{n+1}\\).",
          "所以 \\(y^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}}\\)。 · Therefore \\(y^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}}\\)."
        ],
        "solution": "\\(y^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}}\\)。 · \\(y^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}}\\).",
        "solutionLatex": "y^{(n)}=(-1)^{n}\\dfrac{n!}{x^{n+1}}"
      },
      {
        "title": "例 6 · 隐函数二阶导数 · Second Implicit Derivative · Example 6 · Second Implicit Derivative",
        "prompt": "设 \\(x^{2}+y^{2}=25\\)。求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 与 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)，并求在 \\((3,4)\\) 处的二阶导数。 · Let \\(x^{2}+y^{2}=25\\). Find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) and \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\), and evaluate the second derivative at \\((3,4)\\).",
        "steps": [
          "两边对 \\(x\\) 求导：\\(2x+2yy'=0\\)，所以 \\(y'=-\\dfrac{x}{y}\\)。 · Differentiate both sides with respect to \\(x\\): \\(2x+2yy'=0\\), so \\(y'=-\\dfrac{x}{y}\\).",
          "对 \\(y'=-\\dfrac{x}{y}\\) 再求导：\\(y''=-\\dfrac{y-xy'}{y^{2}}\\)。 · Differentiate \\(y'=-\\dfrac{x}{y}\\) again: \\(y''=-\\dfrac{y-xy'}{y^{2}}\\).",
          "把 \\(y'=-\\dfrac{x}{y}\\) 代入：\\(y''=-\\dfrac{y+\\dfrac{x^{2}}{y}}{y^{2}}=-\\dfrac{x^{2}+y^{2}}{y^{3}}\\)。 · Substitute \\(y'=-\\dfrac{x}{y}\\): \\(y''=-\\dfrac{y+\\dfrac{x^{2}}{y}}{y^{2}}=-\\dfrac{x^{2}+y^{2}}{y^{3}}\\).",
          "利用 \\(x^{2}+y^{2}=25\\)，得 \\(y''=-\\dfrac{25}{y^{3}}\\)；在 \\((3,4)\\) 处为 \\(-\\dfrac{25}{64}\\)。 · Using \\(x^{2}+y^{2}=25\\), \\(y''=-\\dfrac{25}{y^{3}}\\); at \\((3,4)\\) this is \\(-\\dfrac{25}{64}\\)."
        ],
        "solution": "\\(y''=-\\dfrac{25}{y^{3}}\\)，在 \\((3,4)\\) 处为 \\(-\\dfrac{25}{64}\\)。 · \\(y''=-\\dfrac{25}{y^{3}}\\), which equals \\(-\\dfrac{25}{64}\\) at \\((3,4)\\).",
        "solutionLatex": "y''=-\\dfrac{25}{y^{3}},\\quad y''(3,4)=-\\dfrac{25}{64}"
      },
      {
        "title": "例 7 · 运动学 · Kinematics · Example 7 · Kinematics",
        "prompt": "质点的位置为 \\(s(t)=t^{3}-6t^{2}+9t\\)（米，秒）。求速度、加速度与加加速度，并求 \\(t=1\\) 与 \\(t=2\\) 时的加速度。 · A particle has position \\(s(t)=t^{3}-6t^{2}+9t\\) in meters and seconds. Find velocity, acceleration, and jerk, and evaluate acceleration at \\(t=1\\) and \\(t=2\\).",
        "steps": [
          "速度 \\(v(t)=s'(t)=3t^{2}-12t+9\\)。 · Velocity \\(v(t)=s'(t)=3t^{2}-12t+9\\).",
          "加速度 \\(a(t)=s''(t)=6t-12\\)。 · Acceleration \\(a(t)=s''(t)=6t-12\\).",
          "加加速度 \\(j(t)=s'''(t)=6\\)（恒定）。 · Jerk \\(j(t)=s'''(t)=6\\) (constant).",
          "\\(a(1)=6-12=-6\\ \\mathrm{m/s^{2}}\\)，\\(a(2)=12-12=0\\ \\mathrm{m/s^{2}}\\)。 · \\(a(1)=6-12=-6\\ \\mathrm{m/s^{2}}\\) and \\(a(2)=12-12=0\\ \\mathrm{m/s^{2}}\\)."
        ],
        "solution": "\\(v(t)=3t^{2}-12t+9\\)，\\(a(t)=6t-12\\)，\\(j(t)=6\\)；\\(a(1)=-6\\ \\mathrm{m/s^{2}}\\)，\\(a(2)=0\\)。 · \\(v(t)=3t^{2}-12t+9\\), \\(a(t)=6t-12\\), and \\(j(t)=6\\); \\(a(1)=-6\\ \\mathrm{m/s^{2}}\\) and \\(a(2)=0\\).",
        "solutionLatex": "a(t)=6t-12,\\quad a(1)=-6\\ \\mathrm{m/s^{2}},\\quad a(2)=0"
      },
      {
        "title": "例 8 · 二阶导数不存在 · Second Derivative Fails · Example 8 · Second Derivative Fails",
        "prompt": "设 \\(f(x)=x|x|\\)。证明 \\(f'(0)=0\\)，但 \\(f''(0)\\) 不存在。 · Let \\(f(x)=x|x|\\). Show that \\(f'(0)=0\\) but \\(f''(0)\\) does not exist.",
        "steps": [
          "当 \\(x>0\\) 时 \\(f(x)=x^{2}\\)，\\(f'(x)=2x\\)；当 \\(x<0\\) 时 \\(f(x)=-x^{2}\\)，\\(f'(x)=-2x\\)。 · For \\(x>0\\), \\(f(x)=x^{2}\\) and \\(f'(x)=2x\\); for \\(x<0\\), \\(f(x)=-x^{2}\\) and \\(f'(x)=-2x\\).",
          "在 \\(0\\) 处：\\(\\dfrac{f(h)-f(0)}{h}=\\dfrac{h|h|}{h}=|h|\\to0\\)，所以 \\(f'(0)=0\\)。 · At \\(0\\): \\(\\dfrac{f(h)-f(0)}{h}=\\dfrac{h|h|}{h}=|h|\\to0\\), so \\(f'(0)=0\\).",
          "因此 \\(f'(x)=2|x|\\)。它在 \\(0\\) 处的左导数为 \\(-2\\)，右导数为 \\(2\\)。 · Thus \\(f'(x)=2|x|\\). Its left derivative at \\(0\\) is \\(-2\\), and its right derivative is \\(2\\).",
          "左右导数不相等，所以 \\(f'\\) 在 \\(0\\) 处不可导，\\(f''(0)\\) 不存在；尽管 \\(f\\) 本身在 \\(0\\) 处可导。 · The left and right derivatives are unequal, so \\(f'\\) is not differentiable at \\(0\\) and \\(f''(0)\\) does not exist, even though \\(f\\) itself is differentiable at \\(0\\)."
        ],
        "solution": "\\(f'(0)=0\\)，但 \\(f'(x)=2|x|\\) 在 \\(0\\) 处不可导，所以 \\(f''(0)\\) 不存在。 · \\(f'(0)=0\\), but \\(f'(x)=2|x|\\) is not differentiable at \\(0\\), so \\(f''(0)\\) does not exist.",
        "solutionLatex": "f'(x)=2|x|,\\quad f''(0)\\ \\text{不存在}"
      },
      {
        "title": "例 9 · 图像与二阶导数 · Graph and Second Derivative · Example 9 · Graph and Second Derivative",
        "prompt": "设 \\(f(x)=x^{3}-3x\\)。求 \\(f'(x)\\) 与 \\(f''(x)\\)，找出 \\(f''=0\\) 的点，并说明凹凸性与拐点。 · Let \\(f(x)=x^{3}-3x\\). Find \\(f'(x)\\) and \\(f''(x)\\), locate where \\(f''=0\\), and describe concavity and the inflection point.",
        "steps": [
          "\\(f'(x)=3x^{2}-3=3(x-1)(x+1)\\)。 · \\(f'(x)=3x^{2}-3=3(x-1)(x+1)\\).",
          "\\(f''(x)=6x\\)，所以 \\(f''=0\\) 当且仅当 \\(x=0\\)。 · \\(f''(x)=6x\\), so \\(f''=0\\) exactly when \\(x=0\\).",
          "\\(x<0\\) 时 \\(f''<0\\)，图像凹向下；\\(x>0\\) 时 \\(f''>0\\)，图像凹向上。 · For \\(x<0\\), \\(f''<0\\) and the graph is concave down; for \\(x>0\\), \\(f''>0\\) and the graph is concave up.",
          "\\(f''\\) 在 \\(0\\) 两侧变号，所以 \\((0,0)\\) 是拐点。 · \\(f''\\) changes sign across \\(0\\), so \\((0,0)\\) is an inflection point."
        ],
        "solution": "\\(f''(x)=6x\\)，在 \\(x=0\\) 处变号；\\(x<0\\) 凹向下，\\(x>0\\) 凹向上，拐点为 \\((0,0)\\)。 · \\(f''(x)=6x\\), which changes sign at \\(x=0\\); the graph is concave down for \\(x<0\\), concave up for \\(x>0\\), and the inflection point is \\((0,0)\\).",
        "solutionLatex": "f''(x)=6x,\\quad f''(0)=0"
      }
    ],
    "examTips": [
      "先写清楚要求的是第几阶导数，再逐阶求导；不要跳步。 · State which order is required, then differentiate one order at a time; do not skip steps.",
      "每求导一次都检查是否可以化简，化简后再求下一阶。 · After each differentiation, check whether the result can be simplified before taking the next derivative.",
      "多项式先看次数；求导次数超过次数时直接写 \\(0\\)。 · For polynomials, check the degree first; once the number of derivatives exceeds the degree, write \\(0\\).",
      "指数函数用 \\(a^{n}e^{ax}\\)，三角函数看 \\(n\\) 除以 \\(4\\) 的余数。 · Use \\(a^{n}e^{ax}\\) for exponentials and the remainder of \\(n\\) modulo \\(4\\) for trigonometric functions.",
      "对数与倒数幂注意交替符号和阶乘系数。 · Watch the alternating signs and factorial coefficients for logarithms and reciprocal powers.",
      "记号题要明确 \\(f^{(n)}\\) 的括号不是幂；\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) 也不是一阶导数的平方。 · In notation problems, make clear that the parentheses in \\(f^{(n)}\\) are not a power, and that \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) is not the square of the first derivative.",
      "隐函数二阶导数先把 \\(y'\\) 解出，再对 \\(y'\\) 求导并代回。 · For a second implicit derivative, solve for \\(y'\\) first, then differentiate \\(y'\\) and substitute back.",
      "运动题写清单位：位置、速度、加速度、加加速度的单位逐阶变化。 · In motion problems, state units clearly: position, velocity, acceleration, and jerk change units at each order.",
      "图像题把 \\(f''\\) 的符号与凹凸性、拐点对应起来。 · In graph problems, connect the sign of \\(f''\\) to concavity and inflection points.",
      "答案要标明定义域限制，尤其是对数与分母。 · State domain restrictions, especially for logarithms and denominators."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.5",
        "title": "求导程序的选择 · Selecting Procedures for Calculating Derivatives",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.1",
        "title": "链式法则 · The Chain Rule",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u3",
        "code": "3.2",
        "title": "隐函数求导 · Implicit Differentiation",
        "relation": "先修 · Prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u4",
        "code": "4.2",
        "title": "直线运动 · Straight-Line Motion: Connecting Position, Velocity, and Acceleration",
        "relation": "应用 · Application"
      },
      {
        "subject": "math",
        "chapterId": "calc-u5",
        "code": "5.6",
        "title": "凹性与拐点 · Determining Concavity of Functions over Their Domains",
        "relation": "后续 · Follow-up"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u3",
    "connections": [
      "先修：3.1 链式法则与 3.2 隐函数求导提供逐阶求导的工具。 · Prerequisite: the chain rule from 3.1 and implicit differentiation from 3.2 supply the tools for repeated differentiation.",
      "后续：5.6 用 \\(f''\\) 的符号判断凹凸性与拐点。 · Follow-up: 5.6 uses the sign of \\(f''\\) to determine concavity and inflection points.",
      "应用：4.2 直线运动中位置、速度、加速度与加加速度的关系。 · Application: 4.2 straight-line motion relates position, velocity, acceleration, and jerk.",
      "拓展：高阶导数出现在泰勒多项式、微分方程与数值近似中。 · Extension: higher derivatives appear in Taylor polynomials, differential equations, and numerical approximation."
    ],
    "intuitionDetailed": "把求导想成一台“变化率机器”：输入一个函数，输出它的瞬时变化率。把输出再送回机器，就得到变化率的变化率，也就是二阶导数；反复送回就得到更高阶导数。每送一次，函数必须仍然可导，否则机器在这一阶就停住。多项式的次数会逐阶降低，最终变成零；指数函数在求导下保持形状，只改变倍数；正弦与余弦每求导四次回到原函数；对数与倒数幂则产生交替符号和阶乘系数。图像上，二阶导数的符号告诉你曲线向哪边弯：正号像碗口向上，负号像碗口向下，变号处可能是拐点。运动上，位置、速度、加速度、加加速度就是逐阶导数的链条，单位也逐阶多一个“每秒”。 · Think of differentiation as a “rate machine”: it takes a function and returns its instantaneous rate of change. Feeding the output back into the machine gives the rate of change of the rate, the second derivative; repeating gives higher derivatives. At each pass the function must still be differentiable, or the machine stops at that order. Polynomials lose one degree per pass and eventually become zero; exponentials keep their shape and only change by a factor; sine and cosine return to themselves after four derivatives; logarithms and reciprocal powers produce alternating signs and factorial coefficients. On a graph, the sign of the second derivative tells which way the curve bends: positive looks like a cup opening upward, negative like a cup opening downward, and a sign change may mark an inflection point. In motion, position, velocity, acceleration, and jerk form a chain of successive derivatives, with one more “per second” in the units at each order.",
    "development": [
      "从一阶导数出发，定义二阶导数与 \\(n\\) 阶导数。 · Start from the first derivative and define the second and \\(n\\)th derivatives.",
      "整理 \\(f'\\)、\\(y'\\)、\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)、\\(f''\\)、\\(y''\\)、\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)、\\(f^{(n)}\\)、\\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\) 的对应关系。 · Organize the correspondence among \\(f'\\), \\(y'\\), \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\), \\(f''\\), \\(y''\\), \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\), \\(f^{(n)}\\), and \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\).",
      "练习多项式、指数、三角、对数与有理函数的高阶导数规律。 · Practice higher-derivative patterns for polynomials, exponentials, trigonometric functions, logarithms, and rational functions.",
      "用隐函数求导求二阶导数，并用原方程化简。 · Use implicit differentiation to find second derivatives and simplify with the original equation.",
      "把二阶导数应用到运动学与图像凹凸性。 · Apply second derivatives to kinematics and graphical concavity."
    ],
    "checks": [
      "能否用一句话说清 \\(f''\\) 与 \\(f^{(n)}\\) 的递归定义？ · Can you state the recursive definitions of \\(f''\\) and \\(f^{(n)}\\) in one sentence?",
      "\\(f^{(2)}\\) 与 \\(f^{2}\\) 有什么区别？ · What is the difference between \\(f^{(2)}\\) and \\(f^{2}\\)?",
      "为什么 \\(f(x)=x|x|\\) 在 \\(0\\) 处没有二阶导数？ · Why does \\(f(x)=x|x|\\) fail to have a second derivative at \\(0\\)?",
      "能否写出 \\(\\sin x\\) 与 \\(\\cos x\\) 的高阶导数循环？ · Can you write the higher-derivative cycles for \\(\\sin x\\) and \\(\\cos x\\)?",
      "能否由 \\(f''\\) 的符号判断凹凸性与拐点？ · Can you use the sign of \\(f''\\) to determine concavity and inflection points?",
      "隐函数求二阶导数时，为什么要把 \\(y'\\) 代回？ · Why must \\(y'\\) be substituted back when finding a second implicit derivative?",
      "位置、速度、加速度与加加速度分别对应几阶导数？单位如何变化？ · Which derivatives correspond to position, velocity, acceleration, and jerk, and how do the units change?"
    ],
    "vocabulary": [
      {
        "termZh": "高阶导数",
        "termEn": "higher-order derivative",
        "defZh": "对导数继续求导得到的二阶、三阶及更高阶导数。",
        "defEn": "Derivatives beyond the first, obtained by differentiating derivatives repeatedly."
      },
      {
        "termZh": "二阶导数",
        "termEn": "second derivative",
        "defZh": "\\(f''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\)，表示变化率的变化率。",
        "defEn": "\\(f''(x)=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[f'(x)\\right]\\), the rate of change of the rate of change."
      },
      {
        "termZh": "阶",
        "termEn": "order",
        "defZh": "求导次数；三阶导数记作 \\(f'''\\) 或 \\(f^{(3)}\\)。",
        "defEn": "The number of differentiation steps; a third derivative is written \\(f'''\\) or \\(f^{(3)}\\)."
      },
      {
        "termZh": "素数记号",
        "termEn": "prime notation",
        "defZh": "用撇号表示导数，如 \\(f'\\)、\\(f''\\)、\\(f'''\\)。",
        "defEn": "Notation using primes, such as \\(f'\\), \\(f''\\), and \\(f'''\\)."
      },
      {
        "termZh": "莱布尼茨记号",
        "termEn": "Leibniz notation",
        "defZh": "用 \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\) 表示 \\(n\\) 阶导数。",
        "defEn": "Notation writing the \\(n\\)th derivative as \\(\\dfrac{\\mathrm{d}^{n}y}{\\mathrm{d}x^{n}}\\)."
      },
      {
        "termZh": "加速度",
        "termEn": "acceleration",
        "defZh": "位置对时间的二阶导数，也是速度的导数。",
        "defEn": "The second derivative of position with respect to time, or the derivative of velocity."
      },
      {
        "termZh": "加加速度",
        "termEn": "jerk",
        "defZh": "位置对时间的三阶导数，描述加速度的变化率。",
        "defEn": "The third derivative of position with respect to time, describing the rate of change of acceleration."
      },
      {
        "termZh": "反复求导",
        "termEn": "repeated differentiation",
        "defZh": "连续应用求导法则得到更高阶导数。",
        "defEn": "Applying differentiation rules repeatedly to obtain higher derivatives."
      }
    ]
  }
};
