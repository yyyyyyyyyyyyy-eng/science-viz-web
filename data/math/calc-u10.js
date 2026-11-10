export const UNIT = {
  "id": "calc-u10",
  "code": "10",
  "titleZh": "无穷序列与级数",
  "titleEn": "Infinite Sequences and Series",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "10.1": {
    "id": "math/calc-u10/10.1",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.1",
    "titleZh": "无穷级数的收敛与发散",
    "titleEn": "Defining Convergent and Divergent Infinite Series",
    "layer": "ap",
    "summary": "无穷级数的收敛与发散 · Defining Convergent and Divergent Infinite Series",
    "learningObjectives": [
      "能陈述「无穷级数的收敛与发散」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining Convergent and Divergent Infinite Series：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「无穷级数的收敛与发散」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "无穷级数的收敛与发散（Defining Convergent and Divergent Infinite Series）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「无穷级数的收敛与发散」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum_{k=1}^{\\infty}a_k=L\\iff \\lim_{n\\to\\infty}S_n=L,\\quad S_n=\\sum_{k=1}^{n}a_k",
        "note": "无穷级数收敛：部分和数列有极限。 · An infinite series converges when its partial sums have a limit."
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「无穷级数的收敛与发散」的工作方程或机制链。"
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
      "掌握 10.1「无穷级数的收敛与发散」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「无穷级数的收敛与发散」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「无穷级数的收敛与发散」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「无穷级数的收敛与发散」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「无穷级数的收敛与发散」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「无穷级数的收敛与发散」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.2",
        "title": "几何级数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「无穷级数的收敛与发散」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「无穷级数的收敛与发散」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「无穷级数的收敛与发散」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "无穷级数",
        "termEn": "infinite series",
        "defZh": "无穷多项之和 \\(\\sum_{n=1}^{\\infty}a_n\\)。",
        "defEn": "The sum of infinitely many terms, \\(\\sum_{n=1}^{\\infty}a_n\\)."
      },
      {
        "termZh": "部分和",
        "termEn": "partial sum",
        "defZh": "\\(S_N=\\sum_{n=1}^{N}a_n\\)，前 \\(N\\) 项之和。",
        "defEn": "\\(S_N=\\sum_{n=1}^{N}a_n\\), the sum of the first \\(N\\) terms."
      },
      {
        "termZh": "收敛",
        "termEn": "convergence",
        "defZh": "部分和序列趋于有限极限 \\(S\\)。",
        "defEn": "The partial sums approach a finite limit \\(S\\)."
      },
      {
        "termZh": "发散",
        "termEn": "divergence",
        "defZh": "部分和序列没有有限极限。",
        "defEn": "The partial sums fail to approach a finite limit."
      },
      {
        "termZh": "序列",
        "termEn": "sequence",
        "defZh": "按整数编号排列的数列 \\(a_n\\)。",
        "defEn": "An ordered list of numbers \\(a_n\\) indexed by integers."
      },
      {
        "termZh": "部分和序列",
        "termEn": "sequence of partial sums",
        "defZh": "\\(\\{S_N\\}\\)，其收敛性定义级数收敛。",
        "defEn": "\\(\\{S_N\\}\\), whose convergence defines convergence of the series."
      }
    ]
  },
  "10.2": {
    "id": "math/calc-u10/10.2",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.2",
    "titleZh": "几何级数",
    "titleEn": "Working with Geometric Series",
    "layer": "ap",
    "summary": "几何级数 · Working with Geometric Series",
    "learningObjectives": [
      "能陈述「几何级数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Working with Geometric Series：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「几何级数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "几何级数（Working with Geometric Series）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「几何级数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum_{n=0}^{\\infty}ar^{n}=\\dfrac{a}{1-r}\\quad(|r|<1)",
        "note": "几何级数在公比绝对值小于 1 时收敛。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「几何级数」的工作方程或机制链。"
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
      "掌握 10.2「几何级数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「几何级数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「几何级数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「几何级数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「几何级数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「几何级数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.1",
        "title": "无穷级数的收敛与发散",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.3",
        "title": "n 项检验",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "series-convergence",
        "title": "级数收敛"
      }
    ],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「几何级数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「几何级数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「几何级数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "几何级数",
        "termEn": "geometric series",
        "defZh": "相邻两项之比恒为常数 \\(r\\) 的级数，形如 \\(\\sum_{n=0}^{\\infty}ar^{n}\\)。",
        "defEn": "A series whose consecutive terms have a constant ratio \\(r\\), written \\(\\sum_{n=0}^{\\infty}ar^{n}\\)."
      },
      {
        "termZh": "公比 \\(r\\)",
        "termEn": "common ratio",
        "defZh": "后一项与前一项的比值，决定几何级数是否收敛。",
        "defEn": "The ratio of each term to the preceding term; it determines whether the series converges."
      },
      {
        "termZh": "首项 \\(a\\)",
        "termEn": "initial term",
        "defZh": "求和从 \\(n=0\\) 开始时对应的第一项。",
        "defEn": "The first term of the series when the sum starts at \\(n=0\\)."
      },
      {
        "termZh": "收敛条件 \\(|r|<1\\)",
        "termEn": "convergence condition",
        "defZh": "公比的绝对值小于 1 时，几何级数收敛。",
        "defEn": "A geometric series converges exactly when the absolute value of its ratio is less than 1."
      },
      {
        "termZh": "几何级数和",
        "termEn": "sum of a geometric series",
        "defZh": "收敛时 \\(\\sum_{n=0}^{\\infty}ar^{n}=\\dfrac{a}{1-r}\\)。",
        "defEn": "When the series converges, its sum is \\(\\sum_{n=0}^{\\infty}ar^{n}=\\dfrac{a}{1-r}\\)."
      },
      {
        "termZh": "发散",
        "termEn": "divergence",
        "defZh": "当 \\(|r|\\ge 1\\) 时，部分和没有有限极限。",
        "defEn": "When \\(|r|\\ge 1\\), the partial sums have no finite limit."
      }
    ]
  },
  "10.3": {
    "id": "math/calc-u10/10.3",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.3",
    "titleZh": "n 项检验",
    "titleEn": "The nth Term Test for Divergence",
    "layer": "ap",
    "summary": "n 项检验 · The nth Term Test for Divergence",
    "learningObjectives": [
      "能陈述「n 项检验」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "The nth Term Test for Divergence：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「n 项检验」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "n 项检验（The nth Term Test for Divergence）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「n 项检验」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum a_n\\text{ 收敛}\\Rightarrow\\lim_{n\\to\\infty}a_n=0",
        "note": "n 项检验：通项不趋于零则级数发散。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「n 项检验」的工作方程或机制链。"
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
      "掌握 10.3「n 项检验」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「n 项检验」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「n 项检验」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「n 项检验」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「n 项检验」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「n 项检验」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.2",
        "title": "几何级数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.4",
        "title": "积分检验",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「n 项检验」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「n 项检验」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「n 项检验」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "第 \\(n\\) 项检验",
        "termEn": "\\(n\\)th-term test",
        "defZh": "若 \\(\\lim_{n\\to\\infty}a_n\\ne0\\) 或不存在，则 \\(\\sum a_n\\) 发散。",
        "defEn": "If \\(\\lim_{n\\to\\infty}a_n\\ne0\\) or fails to exist, then \\(\\sum a_n\\) diverges."
      },
      {
        "termZh": "通项",
        "termEn": "general term",
        "defZh": "级数中的第 \\(n\\) 项 \\(a_n\\)。",
        "defEn": "The \\(n\\)th term \\(a_n\\) of a series."
      },
      {
        "termZh": "必要条件",
        "termEn": "necessary condition",
        "defZh": "级数收敛要求 \\(\\lim_{n\\to\\infty}a_n=0\\)。",
        "defEn": "Convergence requires \\(\\lim_{n\\to\\infty}a_n=0\\)."
      },
      {
        "termZh": "逆否命题",
        "termEn": "contrapositive",
        "defZh": "由通项不趋于零推出级数发散。",
        "defEn": "Concluding divergence when the terms do not tend to zero."
      },
      {
        "termZh": "发散",
        "termEn": "divergence",
        "defZh": "通项检验只能判定发散，不能判定收敛。",
        "defEn": "The test can establish divergence but never convergence."
      },
      {
        "termZh": "极限为零",
        "termEn": "limit zero",
        "defZh": "通项趋于零是必要但非充分条件。",
        "defEn": "Terms tending to zero is necessary but not sufficient."
      }
    ]
  },
  "10.4": {
    "id": "math/calc-u10/10.4",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.4",
    "titleZh": "积分检验",
    "titleEn": "Integral Test for Convergence",
    "layer": "ap",
    "summary": "积分检验 · Integral Test for Convergence",
    "learningObjectives": [
      "能陈述「积分检验」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Integral Test for Convergence：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「积分检验」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "积分检验（Integral Test for Convergence）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「积分检验」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum_{n=N}^{\\infty}f(n)\\ \\text{与}\\ \\int_N^{\\infty}f(x)\\,\\mathrm{d}x\\ \\text{同敛散}",
        "note": "积分检验：f 为正、连续、递减。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「积分检验」的工作方程或机制链。"
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
      "掌握 10.4「积分检验」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「积分检验」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「积分检验」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「积分检验」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「积分检验」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「积分检验」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.3",
        "title": "n 项检验",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.5",
        "title": "调和级数与 p 级数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「积分检验」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「积分检验」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「积分检验」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "积分检验",
        "termEn": "integral test",
        "defZh": "对正项、连续、递减函数，用 \\(\\int_N^{\\infty}f(x)\\,\\mathrm{d}x\\) 与级数比较敛散。",
        "defEn": "For positive, continuous, decreasing \\(f\\), compare \\(\\sum f(n)\\) with \\(\\int_N^{\\infty}f(x)\\,\\mathrm{d}x\\)."
      },
      {
        "termZh": "正项级数",
        "termEn": "positive-term series",
        "defZh": "所有项都为正的级数。",
        "defEn": "A series whose terms are all positive."
      },
      {
        "termZh": "单调递减",
        "termEn": "decreasing",
        "defZh": "函数随 \\(x\\) 增大而不增，是积分检验的条件之一。",
        "defEn": "A function that does not increase as \\(x\\) grows, one hypothesis of the integral test."
      },
      {
        "termZh": "反常积分",
        "termEn": "improper integral",
        "defZh": "用于比较的无穷限积分。",
        "defEn": "The infinite-interval integral used for comparison."
      },
      {
        "termZh": "同敛散",
        "termEn": "same convergence",
        "defZh": "级数与积分同时收敛或同时发散。",
        "defEn": "The series and integral either both converge or both diverge."
      },
      {
        "termZh": "连续函数",
        "termEn": "continuous function",
        "defZh": "积分检验要求 \\(f\\) 在 \\([N,\\infty)\\) 上连续。",
        "defEn": "The integral test requires \\(f\\) to be continuous on \\([N,\\infty)\\)."
      }
    ]
  },
  "10.5": {
    "id": "math/calc-u10/10.5",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.5",
    "titleZh": "调和级数与 p 级数",
    "titleEn": "Harmonic Series and p-Series",
    "layer": "ap",
    "summary": "调和级数与 p 级数 · Harmonic Series and p-Series",
    "learningObjectives": [
      "能陈述「调和级数与 p 级数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Harmonic Series and p-Series：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「调和级数与 p 级数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "调和级数与 p 级数（Harmonic Series and p-Series）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「调和级数与 p 级数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{p}}\\ \\text{收敛}\\iff p>1",
        "note": "p 级数；p=1 时为调和级数，发散。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「调和级数与 p 级数」的工作方程或机制链。"
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
      "掌握 10.5「调和级数与 p 级数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「调和级数与 p 级数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「调和级数与 p 级数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「调和级数与 p 级数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「调和级数与 p 级数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「调和级数与 p 级数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.4",
        "title": "积分检验",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.6",
        "title": "比较检验",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "series-convergence",
        "title": "级数收敛"
      }
    ],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「调和级数与 p 级数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「调和级数与 p 级数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「调和级数与 p 级数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "调和级数",
        "termEn": "harmonic series",
        "defZh": "\\(\\sum_{n=1}^{\\infty}\\dfrac{1}{n}\\)，即 \\(p=1\\) 的 p 级数，它是发散的。",
        "defEn": "The series \\(\\sum_{n=1}^{\\infty}\\dfrac{1}{n}\\), the p-series with \\(p=1\\), which diverges."
      },
      {
        "termZh": "p 级数",
        "termEn": "p-series",
        "defZh": "形如 \\(\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{p}}\\) 的级数，其中 \\(p>0\\)。",
        "defEn": "A series of the form \\(\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{p}}\\) with \\(p>0\\)."
      },
      {
        "termZh": "p 检验",
        "termEn": "p-test",
        "defZh": "p 级数在 \\(p>1\\) 时收敛，在 \\(p\\le 1\\) 时发散。",
        "defEn": "A p-series converges when \\(p>1\\) and diverges when \\(p\\le 1\\)."
      },
      {
        "termZh": "部分和 \\(S_n\\)",
        "termEn": "partial sum",
        "defZh": "级数前 \\(n\\) 项相加所得的和。",
        "defEn": "The sum of the first \\(n\\) terms of a series."
      },
      {
        "termZh": "收敛",
        "termEn": "convergence",
        "defZh": "部分和序列 \\(S_n\\) 趋于一个有限极限。",
        "defEn": "The sequence of partial sums \\(S_n\\) approaches a finite limit."
      },
      {
        "termZh": "积分检验",
        "termEn": "integral test",
        "defZh": "用 \\(\\int_{1}^{\\infty}f(x)\\,\\mathrm{d}x\\) 的敛散性判断正项级数 \\(\\sum f(n)\\) 的敛散性。",
        "defEn": "Uses the convergence of \\(\\int_{1}^{\\infty}f(x)\\,\\mathrm{d}x\\) to decide the convergence of the positive-term series \\(\\sum f(n)\\)."
      }
    ]
  },
  "10.6": {
    "id": "math/calc-u10/10.6",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.6",
    "titleZh": "比较检验",
    "titleEn": "Comparison Tests for Convergence",
    "layer": "ap",
    "summary": "比较检验 · Comparison Tests for Convergence",
    "learningObjectives": [
      "能陈述「比较检验」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Comparison Tests for Convergence：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「比较检验」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "比较检验（Comparison Tests for Convergence）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「比较检验」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "0\\le a_n\\le b_n,\\ \\sum b_n\\text{ 收敛}\\Rightarrow\\sum a_n\\text{ 收敛}",
        "note": "比较检验；反向用于发散。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「比较检验」的工作方程或机制链。"
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
      "掌握 10.6「比较检验」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「比较检验」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「比较检验」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「比较检验」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「比较检验」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「比较检验」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.5",
        "title": "调和级数与 p 级数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.7",
        "title": "交替级数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「比较检验」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「比较检验」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「比较检验」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "比较检验",
        "termEn": "comparison test",
        "defZh": "用已知敛散的正项级数夹住或控制未知级数。",
        "defEn": "Bounding an unknown positive-term series by a series with known convergence."
      },
      {
        "termZh": "极限比较检验",
        "termEn": "limit comparison test",
        "defZh": "比较 \\(\\dfrac{a_n}{b_n}\\) 的极限来判断同敛散。",
        "defEn": "Comparing the limit of \\(\\dfrac{a_n}{b_n}\\) to establish the same convergence behavior."
      },
      {
        "termZh": "正项级数",
        "termEn": "positive-term series",
        "defZh": "各项非负，比较检验的适用对象。",
        "defEn": "A series with nonnegative terms, the setting for comparison tests."
      },
      {
        "termZh": "上界",
        "termEn": "upper bound",
        "defZh": "若 \\(a_n\\le b_n\\) 且 \\(\\sum b_n\\) 收敛，则 \\(\\sum a_n\\) 收敛。",
        "defEn": "If \\(a_n\\le b_n\\) and \\(\\sum b_n\\) converges, then \\(\\sum a_n\\) converges."
      },
      {
        "termZh": "下界",
        "termEn": "lower bound",
        "defZh": "若 \\(a_n\\ge b_n\\) 且 \\(\\sum b_n\\) 发散，则 \\(\\sum a_n\\) 发散。",
        "defEn": "If \\(a_n\\ge b_n\\) and \\(\\sum b_n\\) diverges, then \\(\\sum a_n\\) diverges."
      },
      {
        "termZh": "收敛级数",
        "termEn": "convergent series",
        "defZh": "部分和有有限极限的级数。",
        "defEn": "A series whose partial sums have a finite limit."
      }
    ]
  },
  "10.7": {
    "id": "math/calc-u10/10.7",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.7",
    "titleZh": "交替级数",
    "titleEn": "Alternating Series Test for Convergence",
    "layer": "ap",
    "summary": "交替级数 · Alternating Series Test for Convergence",
    "learningObjectives": [
      "能陈述「交替级数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Alternating Series Test for Convergence：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「交替级数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "交替级数（Alternating Series Test for Convergence）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「交替级数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum_{n=1}^{\\infty}(-1)^{n-1}b_n,\\ b_n\\downarrow0\\Rightarrow\\text{收敛}",
        "note": "交替级数检验：b_n 递减且趋于零。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「交替级数」的工作方程或机制链。"
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
      "掌握 10.7「交替级数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「交替级数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「交替级数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「交替级数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「交替级数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「交替级数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.6",
        "title": "比较检验",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.8",
        "title": "比值检验",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「交替级数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「交替级数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「交替级数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "交替级数",
        "termEn": "alternating series",
        "defZh": "各项符号正负交替的级数，例如 \\(\\sum_{n=1}^{\\infty}(-1)^{n-1}b_n\\)。",
        "defEn": "A series whose terms alternate in sign, such as \\(\\sum_{n=1}^{\\infty}(-1)^{n-1}b_n\\)."
      },
      {
        "termZh": "交替级数检验",
        "termEn": "alternating series test",
        "defZh": "若 \\(b_n\\) 单调递减且趋于 0，则交替级数 \\(\\sum(-1)^{n-1}b_n\\) 收敛。",
        "defEn": "If \\(b_n\\) decreases monotonically to 0, then \\(\\sum(-1)^{n-1}b_n\\) converges."
      },
      {
        "termZh": "单调递减",
        "termEn": "monotone decreasing",
        "defZh": "\\(b_{n+1}\\le b_n\\) 对所有足够大的 \\(n\\) 成立。",
        "defEn": "\\(b_{n+1}\\le b_n\\) for all sufficiently large \\(n\\)."
      },
      {
        "termZh": "通项趋于零",
        "termEn": "terms tend to zero",
        "defZh": "\\(\\lim_{n\\to\\infty}b_n=0\\) 是交替级数检验的必要条件之一。",
        "defEn": "The condition \\(\\lim_{n\\to\\infty}b_n=0\\) is one of the requirements of the test."
      },
      {
        "termZh": "绝对收敛",
        "termEn": "absolute convergence",
        "defZh": "取绝对值后的级数 \\(\\sum b_n\\) 也收敛。",
        "defEn": "The series of absolute values \\(\\sum b_n\\) also converges."
      },
      {
        "termZh": "条件收敛",
        "termEn": "conditional convergence",
        "defZh": "原级数收敛，但取绝对值后的级数发散。",
        "defEn": "The original series converges, but the series of absolute values diverges."
      }
    ]
  },
  "10.8": {
    "id": "math/calc-u10/10.8",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.8",
    "titleZh": "比值检验",
    "titleEn": "Ratio Test for Convergence",
    "layer": "ap",
    "summary": "比值检验 · Ratio Test for Convergence",
    "learningObjectives": [
      "能陈述「比值检验」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Ratio Test for Convergence：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「比值检验」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "比值检验（Ratio Test for Convergence）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「比值检验」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|",
        "note": "比值检验：L<1 绝对收敛，L>1 发散，L=1 失效。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「比值检验」的工作方程或机制链。"
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
      "掌握 10.8「比值检验」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「比值检验」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「比值检验」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「比值检验」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「比值检验」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「比值检验」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.7",
        "title": "交替级数",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.9",
        "title": "绝对与条件收敛",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "series-convergence",
        "title": "级数收敛"
      }
    ],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「比值检验」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「比值检验」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「比值检验」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "比值检验",
        "termEn": "ratio test",
        "defZh": "用 \\(L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|\\) 判断级数的敛散性。",
        "defEn": "Uses \\(L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|\\) to decide convergence."
      },
      {
        "termZh": "比值极限 \\(L\\)",
        "termEn": "ratio limit",
        "defZh": "相邻两项绝对值之比的极限。",
        "defEn": "The limit of the absolute ratio of consecutive terms."
      },
      {
        "termZh": "收敛情形 \\(L<1\\)",
        "termEn": "convergence case",
        "defZh": "比值极限小于 1 时，级数绝对收敛。",
        "defEn": "When the ratio limit is less than 1, the series converges absolutely."
      },
      {
        "termZh": "发散情形 \\(L>1\\)",
        "termEn": "divergence case",
        "defZh": "比值极限大于 1 时，级数发散。",
        "defEn": "When the ratio limit is greater than 1, the series diverges."
      },
      {
        "termZh": "无结论情形 \\(L=1\\)",
        "termEn": "inconclusive case",
        "defZh": "比值极限等于 1 时，比值检验不能判定敛散性。",
        "defEn": "When the ratio limit equals 1, the ratio test gives no conclusion."
      },
      {
        "termZh": "阶乘 \\(n!\\)",
        "termEn": "factorial",
        "defZh": "\\(n!=n(n-1)\\cdots 1\\)，在含阶乘的比值检验中常被约去。",
        "defEn": "\\(n!=n(n-1)\\cdots 1\\), often canceled in ratio-test computations."
      }
    ]
  },
  "10.9": {
    "id": "math/calc-u10/10.9",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.9",
    "titleZh": "绝对与条件收敛",
    "titleEn": "Determining Absolute or Conditional Convergence",
    "layer": "ap",
    "summary": "绝对收敛是「取绝对值后仍收敛」，条件收敛是「原级数收敛但绝对值级数发散」；绝对收敛级数任意重排或有限分组都不改变和。 · Absolute convergence means the series of absolute values converges; conditional convergence means the original series converges while the absolute series diverges. An absolutely convergent series keeps the same sum under any rearrangement or finite regrouping.",
    "learningObjectives": [
      "能区分绝对收敛、条件收敛与发散，并写出各自的定义与判据。 · Distinguish absolute convergence, conditional convergence, and divergence, and state the definition and test for each.",
      "能先用 \\(\\sum|a_n|\\) 的敛散性判断绝对收敛；若绝对值级数发散，再用交替级数检验等判断原级数是否条件收敛。 · First test \\(\\sum|a_n|\\); if the absolute series diverges, use the alternating series test or another test to decide whether the original series converges conditionally.",
      "能陈述并应用 LIM-7.A.14：绝对收敛级数经重排或有限分组后仍收敛到同一个和。 · State and apply LIM-7.A.14: an absolutely convergent series converges to the same sum after any rearrangement or finite regrouping.",
      "能用反例说明条件收敛级数重排后可能改变和，并能解释部分和与误差界图。 · Use a counterexample to show that rearranging a conditionally convergent series can change its sum, and interpret partial-sum and error-bound graphs."
    ],
    "essentialKnowledge": [
      "级数只有三种收敛状态：绝对收敛、条件收敛、发散；三者互斥且覆盖所有情形。 · A series has exactly three convergence states: absolutely convergent, conditionally convergent, or divergent; they are mutually exclusive and exhaustive.",
      "绝对收敛：\\(\\sum|a_n|\\) 收敛。此时 \\(\\sum a_n\\) 必收敛（LIM-7.A.13）。 · Absolute convergence: \\(\\sum|a_n|\\) converges. Then \\(\\sum a_n\\) must converge (LIM-7.A.13).",
      "条件收敛：\\(\\sum a_n\\) 收敛，但 \\(\\sum|a_n|\\) 发散。 · Conditional convergence: \\(\\sum a_n\\) converges, but \\(\\sum|a_n|\\) diverges.",
      "绝对收敛蕴涵收敛；反之不成立。反例：\\(\\sum\\dfrac{(-1)^{n+1}}{n}=\\ln 2\\) 收敛，但 \\(\\sum\\dfrac1n\\) 发散。 · Absolute convergence implies convergence, but not conversely. Counterexample: \\(\\sum\\dfrac{(-1)^{n+1}}{n}=\\ln 2\\) converges while \\(\\sum\\dfrac1n\\) diverges.",
      "LIM-7.A.14：若 \\(\\sum a_n\\) 绝对收敛，则任意重排 \\(\\sum a_{\\sigma(n)}\\) 与任意有限分组都收敛到同一个和。 · LIM-7.A.14: if \\(\\sum a_n\\) converges absolutely, then every rearrangement \\(\\sum a_{\\sigma(n)}\\) and every grouping into finite blocks converges to the same sum.",
      "条件收敛级数没有这种稳定性：重排可能改变和，甚至使级数发散（黎曼重排定理）。 · Conditionally convergent series lack this stability: a rearrangement can change the sum or even make the series diverge (Riemann rearrangement theorem).",
      "连续分组（只插入括号、不改变顺序，每组含有限项）对任何收敛级数都保持和，因为分组后的部分和是原部分和的子序列；危险的是重排或先重排再分组。 · Grouping consecutive terms (inserting parentheses without changing order, with finitely many terms per group) preserves the sum of any convergent series, because the grouped partial sums form a subsequence of the original partial sums; the danger is rearranging, or rearranging before grouping.",
      "判断流程：先对 \\(|a_n|\\) 用 p 级数、几何级数、比值、根值、比较或积分检验；若 \\(\\sum|a_n|\\) 收敛则绝对收敛；若发散，再对原级数用交替级数检验等判断条件收敛或发散。 · Procedure: test \\(\\sum|a_n|\\) with p-series, geometric, ratio, root, comparison, or integral tests. If it converges, the series is absolutely convergent; if it diverges, test the original series (for example with the alternating series test) to decide conditional convergence or divergence.",
      "比值/根值检验作用在 \\(|a_n|\\) 上：\\(L<1\\) 给出绝对收敛，\\(L>1\\) 给出发散，\\(L=1\\) 无结论。 · Apply the ratio or root test to \\(|a_n|\\): \\(L<1\\) gives absolute convergence, \\(L>1\\) gives divergence, and \\(L=1\\) is inconclusive.",
      "绝对收敛级数的部分和误差可用绝对值尾项控制：\\(\\left|S-S_n\\right|\\le\\sum_{k=n+1}^{\\infty}|a_k|\\)；条件收敛级数没有这个绝对值尾项界，常用交替级数误差界。 · For an absolutely convergent series, the partial-sum error is controlled by the absolute tail: \\(\\left|S-S_n\\right|\\le\\sum_{k=n+1}^{\\infty}|a_k|\\). A conditionally convergent series has no such absolute-tail bound; use the alternating-series error bound instead."
    ],
    "definition": "设 \\(\\sum a_n\\) 为实数项无穷级数。若 \\(\\sum|a_n|\\) 收敛，则称 \\(\\sum a_n\\) 绝对收敛（absolutely convergent）；若 \\(\\sum a_n\\) 收敛但 \\(\\sum|a_n|\\) 发散，则称它条件收敛（conditionally convergent）；若 \\(\\sum a_n\\) 本身发散，则称它发散。绝对收敛蕴涵收敛（LIM-7.A.13），并且绝对收敛级数在任意重排或有限分组下保持同一个和（LIM-7.A.14）。条件收敛没有这种稳定性：重排可能改变和。 · Let \\(\\sum a_n\\) be a series of real terms. It is absolutely convergent if \\(\\sum|a_n|\\) converges; it is conditionally convergent if \\(\\sum a_n\\) converges but \\(\\sum|a_n|\\) diverges; it is divergent if \\(\\sum a_n\\) itself diverges. Absolute convergence implies convergence (LIM-7.A.13), and an absolutely convergent series keeps the same sum under any regrouping or rearrangement (LIM-7.A.14). Conditional convergence lacks this stability: a rearrangement can change the sum.",
    "intuition": "把级数想成很多正负项在「排队抵消」。绝对收敛时，所有项的绝对值总和有限，正负两边都没有无限大的“储备”，所以无论怎样换顺序、加括号，总和都被同一个有限的绝对值总额控制住。条件收敛时，正项之和与负项之和都发散，收敛完全靠精心安排的抵消；换一个顺序就可能改变抵消方式，从而改变和。 · Think of a series as positive and negative terms canceling in a queue. With absolute convergence, the total absolute size is finite, so neither sign has an infinite reserve; no matter how you reorder or group the terms, the sum is controlled by the same finite total. With conditional convergence, the positive and negative parts both diverge, and convergence depends on a delicate cancellation pattern; changing the order can change that pattern and therefore the sum.",
    "formulas": [
      {
        "latex": "\\sum_{n=1}^{\\infty}|a_n|<\\infty\\;\\Longrightarrow\\;\\sum_{n=1}^{\\infty}a_n\\ \\text{收敛}",
        "note": "绝对收敛蕴涵收敛（LIM-7.A.13）。 · Absolute convergence implies convergence (LIM-7.A.13)."
      },
      {
        "latex": "\\sum_{n=1}^{\\infty}a_n\\ \\text{绝对收敛}\\iff\\sum_{n=1}^{\\infty}|a_n|\\ \\text{收敛}",
        "note": "绝对收敛的定义。 · Definition of absolute convergence."
      },
      {
        "latex": "\\sum_{n=1}^{\\infty}a_n\\ \\text{条件收敛}\\iff\\sum_{n=1}^{\\infty}a_n\\ \\text{收敛且}\\sum_{n=1}^{\\infty}|a_n|=\\infty",
        "note": "条件收敛的定义。 · Definition of conditional convergence."
      },
      {
        "latex": "\\sum_{n=1}^{\\infty}a_n=\\sum_{n=1}^{\\infty}a_{\\sigma(n)}\\quad(\\sigma\\ \\text{为任意重排})",
        "note": "绝对收敛时任意重排保持和（LIM-7.A.14）。 · Every rearrangement preserves the sum when the series is absolutely convergent (LIM-7.A.14)."
      },
      {
        "latex": "\\sum_{k=1}^{\\infty}\\left(\\sum_{j=n_{k-1}+1}^{n_k}a_j\\right)=\\sum_{n=1}^{\\infty}a_n",
        "note": "绝对收敛时按有限连续块分组也保持和；对一般收敛级数，连续分组同样安全。 · Grouping into finite consecutive blocks also preserves the sum under absolute convergence; for any convergent series, consecutive grouping is safe."
      },
      {
        "latex": "1-\\dfrac12-\\dfrac14+\\dfrac13-\\dfrac16-\\dfrac18+\\cdots=\\dfrac12\\ln 2",
        "note": "交替调和级数的一个重排；原级数和为 \\(\\ln 2\\)，说明条件收敛级数重排可改变和。 · A rearrangement of the alternating harmonic series; the original sum is \\(\\ln 2\\), showing that rearranging a conditionally convergent series can change the sum."
      },
      {
        "latex": "\\left|S-S_n\\right|\\le\\sum_{k=n+1}^{\\infty}|a_k|",
        "note": "绝对收敛级数的部分和误差界。 · Partial-sum error bound for an absolutely convergent series."
      }
    ],
    "derivationNotes": [
      {
        "from": "绝对收敛的定义 · Definition of absolute convergence",
        "to": "正部与负部 · Positive and negative parts",
        "note": "令 \\(b_n=\\dfrac{|a_n|+a_n}{2}\\)，\\(c_n=\\dfrac{|a_n|-a_n}{2}\\)，则 \\(b_n,c_n\\ge0\\) 且 \\(b_n,c_n\\le|a_n|\\)。 · Let \\(b_n=\\dfrac{|a_n|+a_n}{2}\\) and \\(c_n=\\dfrac{|a_n|-a_n}{2}\\); then \\(b_n,c_n\\ge0\\) and \\(b_n,c_n\\le|a_n|\\)。"
      },
      {
        "from": "比较检验 · Comparison test",
        "to": "两个正项级数收敛 · Both nonnegative series converge",
        "note": "由 \\(\\sum|a_n|\\) 收敛及比较检验，\\(\\sum b_n\\) 与 \\(\\sum c_n\\) 都收敛。 · Since \\(\\sum|a_n|\\) converges, the comparison test gives convergence of both \\(\\sum b_n\\) and \\(\\sum c_n\\)."
      },
      {
        "from": "正部减负部 · Difference of positive and negative parts",
        "to": "绝对收敛蕴涵收敛 · Absolute convergence implies convergence",
        "note": "\\(a_n=b_n-c_n\\)，两个收敛级数相减仍收敛，所以 \\(\\sum a_n\\) 收敛。 · Since \\(a_n=b_n-c_n\\) and the difference of two convergent series converges, \\(\\sum a_n\\) converges."
      },
      {
        "from": "尾项控制 · Tail control",
        "to": "重排保持和 · Rearrangement preserves the sum",
        "note": "取 \\(N\\) 使 \\(\\sum_{n>N}|a_n|<\\dfrac{\\varepsilon}{2}\\)；再取 \\(M\\) 使 \\(1,\\dots,N\\) 都出现在 \\(\\sigma(1),\\dots,\\sigma(M)\\) 中。则 \\(m\\ge M\\) 时，重排部分和与原部分和只差若干个下标大于 \\(N\\) 的项，误差小于 \\(\\varepsilon\\)。 · Choose \\(N\\) with \\(\\sum_{n>N}|a_n|<\\dfrac{\\varepsilon}{2}\\), then choose \\(M\\) so that \\(1,\\dots,N\\) all appear among \\(\\sigma(1),\\dots,\\sigma(M)\\). For \\(m\\ge M\\), the rearranged partial sum differs from the original partial sum only by terms with index greater than \\(N\\), so the error is less than \\(\\varepsilon\\)."
      },
      {
        "from": "分组 · Grouping",
        "to": "子序列 · Subsequence",
        "note": "把连续若干项括成一组后，分组级数的部分和是原级数部分和的一个子序列；收敛数列的子序列收敛到同一极限。 · After grouping consecutive terms, the partial sums of the grouped series form a subsequence of the original partial sums; a subsequence of a convergent sequence converges to the same limit."
      },
      {
        "from": "条件收敛 · Conditional convergence",
        "to": "黎曼重排 · Riemann rearrangement",
        "note": "条件收敛时 \\(\\sum b_n\\) 与 \\(\\sum c_n\\) 都发散；可以贪心地选取正项使部分和超过目标、再选负项使其低于目标，从而把重排后的和推向任意指定值（或使其发散）。 · Under conditional convergence both \\(\\sum b_n\\) and \\(\\sum c_n\\) diverge; one can greedily choose positive terms to overshoot a target and negative terms to undershoot it, driving the rearranged sum to any prescribed value (or to divergence)."
      }
    ],
    "conditions": [
      "绝对收敛是收敛的充分条件，不是必要条件；条件收敛级数同样收敛。 · Absolute convergence is sufficient but not necessary for convergence; conditionally convergent series also converge.",
      "重排/分组保持和的结论只对绝对收敛级数无条件成立；对条件收敛级数，重排可能改变和或导致发散。 · The rearrangement/regrouping invariance holds unconditionally only for absolutely convergent series; for conditionally convergent series, a rearrangement may change the sum or diverge.",
      "连续分组必须保持原顺序，每组只含有限项；不能把发散级数随意加括号后宣称它收敛。 · Consecutive grouping must preserve the original order and use finitely many terms per group; never insert parentheses into a divergent series and claim convergence.",
      "对 \\(\\sum|a_n|\\) 使用比值/根值检验时，\\(L=1\\) 不能判定；此时改用 p 级数、比较、积分或交替级数检验。 · When the ratio or root test on \\(\\sum|a_n|\\) gives \\(L=1\\), it is inconclusive; switch to a p-series, comparison, integral, or alternating-series test.",
      "若 \\(\\sum|a_n|\\) 发散，不能直接推出 \\(\\sum a_n\\) 发散；必须再检验原级数。 · If \\(\\sum|a_n|\\) diverges, you cannot conclude that \\(\\sum a_n\\) diverges; test the original series separately.",
      "若级数从某一项起所有项同号（或非负），则收敛即绝对收敛；条件收敛必然需要正负项都出现无限多次。 · If all terms are eventually of one sign (or nonnegative), convergence implies absolute convergence; conditional convergence requires infinitely many positive and infinitely many negative terms.",
      "AP 范围讨论实数项级数；重排定理的完整证明与黎曼重排定理不要求掌握，但结论要能用于判断。 · The AP context uses real-term series; full proofs of the rearrangement theorem and the Riemann rearrangement theorem are not required, but the conclusions must be usable."
    ],
    "keyPoints": [
      "先看 \\(\\sum|a_n|\\)：收敛就是绝对收敛；发散再查原级数是否条件收敛。 · Test \\(\\sum|a_n|\\) first: convergence means absolute convergence; if it diverges, check whether the original series converges conditionally.",
      "绝对收敛蕴涵收敛；收敛不蕴涵绝对收敛。 · Absolute convergence implies convergence; convergence does not imply absolute convergence.",
      "绝对收敛级数任意重排、任意有限分组都不改变和（LIM-7.A.14）。 · Absolutely convergent series keep the same sum under any rearrangement and any finite grouping (LIM-7.A.14).",
      "条件收敛级数重排可能改变和；经典例子是交替调和级数重排得到 \\(\\dfrac12\\ln 2\\)。 · Rearranging a conditionally convergent series can change the sum; the classic example is a rearrangement of the alternating harmonic series that sums to \\(\\dfrac12\\ln 2\\).",
      "连续加括号对任何收敛级数都安全，因为分组部分和是原部分和的子序列。 · Consecutive grouping is safe for any convergent series because the grouped partial sums form a subsequence of the original partial sums.",
      "判断三选一时要同时给出「绝对值级数」和「原级数」两方面的证据。 · When classifying into one of the three states, provide evidence for both the absolute series and the original series.",
      "绝对收敛的部分和误差可由绝对值尾项控制；条件收敛常用交替级数误差界。 · The partial-sum error of an absolutely convergent series is controlled by its absolute tail; conditionally convergent series often use the alternating-series error bound."
    ],
    "misconceptions": [
      "「收敛就一定绝对收敛」——反例：\\(\\sum\\dfrac{(-1)^{n+1}}{n}\\) 收敛但 \\(\\sum\\dfrac1n\\) 发散。 · “Convergent means absolutely convergent” is false: \\(\\sum\\dfrac{(-1)^{n+1}}{n}\\) converges while \\(\\sum\\dfrac1n\\) diverges.",
      "「\\(\\sum|a_n|\\) 发散就说明 \\(\\sum a_n\\) 发散」——不一定，交替调和级数就是条件收敛。 · “If \\(\\sum|a_n|\\) diverges, then \\(\\sum a_n\\) diverges” is false; the alternating harmonic series is conditionally convergent.",
      "「任何级数都可以随意重排」——只有绝对收敛级数保证重排后和不变；条件收敛级数可能改变和。 · “Any series can be rearranged freely” is false; only absolute convergence guarantees the same sum, and rearranging a conditionally convergent series can change it.",
      "「加括号总是安全」——对收敛级数连续加括号安全，但把发散级数加括号可能制造出收敛的假象，例如 \\((1-1)+(1-1)+\\cdots=0\\) 不能说明 \\(1-1+1-1+\\cdots\\) 收敛。 · “Parentheses are always safe” is false: consecutive grouping is safe for a convergent series, but grouping a divergent series can create a false appearance of convergence; \\((1-1)+(1-1)+\\cdots=0\\) does not prove that \\(1-1+1-1+\\cdots\\) converges.",
      "「比值检验 \\(L=1\\) 就是发散」——\\(L=1\\) 只是无结论，需换检验。 · “Ratio test \\(L=1\\) means divergence” is false; \\(L=1\\) is merely inconclusive, so use another test.",
      "「条件收敛级数的和与顺序无关，只要把正负项配好」——条件收敛的和依赖顺序；不同重排可得不同和。 · “A conditionally convergent sum is independent of order once positives and negatives are paired” is false; the sum depends on the order, and different rearrangements can give different sums.",
      "「绝对收敛只对正项级数有意义」——绝对收敛正是对变号级数取绝对值后仍收敛的刻画。 · “Absolute convergence only matters for positive-term series” is false; it characterizes sign-changing series whose absolute series still converges.",
      "「重排后的级数如果收敛，就一定与原级数同和」——条件收敛时不一定。 · “If a rearrangement converges, it must have the same sum as the original” is false for conditionally convergent series."
    ],
    "examples": [
      {
        "title": "例 1 · 绝对还是条件？ · Example 1: Absolute or conditional?",
        "prompt": "判断 \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}\\) 与 \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n^{2}}\\) 是绝对收敛、条件收敛还是发散。 · Determine whether \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}\\) and \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n^{2}}\\) are absolutely convergent, conditionally convergent, or divergent.",
        "steps": [
          "对第一个级数取绝对值：\\(\\sum\\dfrac1n\\) 是 \\(p=1\\) 的 p 级数，发散，所以不是绝对收敛。 · For the first series, take absolute values: \\(\\sum\\dfrac1n\\) is the \\(p=1\\) p-series, which diverges, so it is not absolutely convergent.",
          "\\(b_n=\\dfrac1n\\) 单调递减且趋于 0，由交替级数检验，原级数收敛。 · \\(b_n=\\dfrac1n\\) decreases monotonically to 0, so the alternating series test gives convergence of the original series.",
          "对第二个级数取绝对值：\\(\\sum\\dfrac1{n^{2}}\\) 是 \\(p=2>1\\) 的 p 级数，收敛，所以绝对收敛；由绝对收敛蕴涵收敛，原级数也收敛。 · For the second series, \\(\\sum\\dfrac1{n^{2}}\\) is a \\(p=2>1\\) p-series, which converges, so the series is absolutely convergent; absolute convergence implies convergence of the original series."
        ],
        "solution": "第一个条件收敛，第二个绝对收敛。 · The first is conditionally convergent; the second is absolutely convergent.",
        "solutionLatex": "\\sum\\dfrac{(-1)^{n+1}}{n}:\\ \\text{条件收敛 (conditional)},\\qquad \\sum\\dfrac{(-1)^{n+1}}{n^{2}}:\\ \\text{绝对收敛 (absolute)}"
      },
      {
        "title": "例 2 · 三选一：绝对、条件或发散 · Example 2: Absolute, conditional, or divergent?",
        "prompt": "判断 \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{\\sqrt n}\\) 与 \\(\\sum_{n=1}^{\\infty}(-1)^{n+1}\\dfrac{n}{n+1}\\)。 · Classify \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{\\sqrt n}\\) and \\(\\sum_{n=1}^{\\infty}(-1)^{n+1}\\dfrac{n}{n+1}\\).",
        "steps": [
          "第一个：\\(\\sum\\dfrac1{\\sqrt n}\\) 是 \\(p=\\dfrac12\\le1\\) 的 p 级数，发散，所以不绝对收敛。 · First series: \\(\\sum\\dfrac1{\\sqrt n}\\) is a p-series with \\(p=\\dfrac12\\le1\\), which diverges, so it is not absolutely convergent.",
          "\\(b_n=\\dfrac1{\\sqrt n}\\) 单调递减且趋于 0，由交替级数检验原级数收敛，因此条件收敛。 · \\(b_n=\\dfrac1{\\sqrt n}\\) decreases monotonically to 0, so the alternating series test gives convergence; hence the series is conditionally convergent.",
          "第二个：通项 \\(a_n=(-1)^{n+1}\\dfrac{n}{n+1}\\) 不趋于 0（绝对值趋于 1），由 n 项检验发散。 · Second series: the terms \\(a_n=(-1)^{n+1}\\dfrac{n}{n+1}\\) do not tend to 0 (their absolute value tends to 1), so the nth-term test gives divergence."
        ],
        "solution": "第一个条件收敛；第二个发散。 · The first is conditionally convergent; the second diverges.",
        "solutionLatex": "\\sum\\dfrac{(-1)^{n+1}}{\\sqrt n}:\\ \\text{条件收敛 (conditional)},\\qquad \\sum(-1)^{n+1}\\dfrac{n}{n+1}:\\ \\text{发散 (divergent)}"
      },
      {
        "title": "例 3 · 比值检验判绝对收敛 · Example 3: Ratio test for absolute convergence",
        "prompt": "判断 \\(\\sum_{n=1}^{\\infty}(-1)^{n}\\dfrac{n^{2}}{2^{n}}\\) 是否绝对收敛，并说明原级数是否收敛。 · Determine whether \\(\\sum_{n=1}^{\\infty}(-1)^{n}\\dfrac{n^{2}}{2^{n}}\\) converges absolutely, and explain whether the original series converges.",
        "steps": [
          "对绝对值级数用比值检验：\\(\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{(n+1)^{2}}{2^{n+1}}\\cdot\\dfrac{2^{n}}{n^{2}}=\\dfrac12\\left(\\dfrac{n+1}{n}\\right)^{2}\\)。 · Apply the ratio test to the absolute series: \\(\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{(n+1)^{2}}{2^{n+1}}\\cdot\\dfrac{2^{n}}{n^{2}}=\\dfrac12\\left(\\dfrac{n+1}{n}\\right)^{2}\\).",
          "取极限：\\(L=\\dfrac12<1\\)。 · Take the limit: \\(L=\\dfrac12<1\\).",
          "比值检验给出 \\(\\sum|a_n|\\) 收敛，所以原级数绝对收敛；由绝对收敛蕴涵收敛，原级数收敛。 · The ratio test gives convergence of \\(\\sum|a_n|\\), so the original series is absolutely convergent; absolute convergence implies convergence."
        ],
        "solution": "绝对收敛（从而收敛）。 · Absolutely convergent (hence convergent).",
        "solutionLatex": "L=\\lim_{n\\to\\infty}\\dfrac12\\left(\\dfrac{n+1}{n}\\right)^{2}=\\dfrac12<1\\ \\Rightarrow\\ \\text{绝对收敛 (absolute convergence)}"
      },
      {
        "title": "例 4 · 重排改变和 · Example 4: A rearrangement changes the sum",
        "prompt": "交替调和级数 \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}=\\ln 2\\) 条件收敛。把它的项重排为 \\(1-\\dfrac12-\\dfrac14+\\dfrac13-\\dfrac16-\\dfrac18+\\dfrac15-\\cdots\\)，求新级数的和，并说明这为什么不违反 LIM-7.A.14。 · The alternating harmonic series \\(\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}=\\ln 2\\) is conditionally convergent. Rearrange its terms as \\(1-\\dfrac12-\\dfrac14+\\dfrac13-\\dfrac16-\\dfrac18+\\dfrac15-\\cdots\\), find the sum of the new series, and explain why this does not contradict LIM-7.A.14.",
        "steps": [
          "原级数条件收敛：\\(\\sum\\dfrac1n\\) 发散，而 \\(b_n=\\dfrac1n\\) 递减趋于 0，所以原级数收敛但不绝对收敛。 · The original series is conditionally convergent: \\(\\sum\\dfrac1n\\) diverges, while \\(b_n=\\dfrac1n\\) decreases to 0, so the original series converges but not absolutely.",
          "把重排级数按三项一组：第 \\(k\\) 组为 \\(\\dfrac1{2k-1}-\\dfrac1{4k-2}-\\dfrac1{4k}\\)。 · Group the rearranged series in blocks of three: the \\(k\\)-th block is \\(\\dfrac1{2k-1}-\\dfrac1{4k-2}-\\dfrac1{4k}\\).",
          "化简：\\(\\dfrac1{2k-1}-\\dfrac1{2(2k-1)}-\\dfrac1{4k}=\\dfrac1{2(2k-1)}-\\dfrac1{4k}=\\dfrac1{4k(2k-1)}\\)。 · Simplify: \\(\\dfrac1{2k-1}-\\dfrac1{2(2k-1)}-\\dfrac1{4k}=\\dfrac1{2(2k-1)}-\\dfrac1{4k}=\\dfrac1{4k(2k-1)}\\).",
          "求和：\\(\\sum_{k=1}^{\\infty}\\dfrac1{4k(2k-1)}=\\dfrac12\\sum_{k=1}^{\\infty}\\left(\\dfrac1{2k-1}-\\dfrac1{2k}\\right)=\\dfrac12\\ln 2\\)。 · Sum: \\(\\sum_{k=1}^{\\infty}\\dfrac1{4k(2k-1)}=\\dfrac12\\sum_{k=1}^{\\infty}\\left(\\dfrac1{2k-1}-\\dfrac1{2k}\\right)=\\dfrac12\\ln 2\\).",
          "每个正奇倒数项和每个负偶倒数项都恰好使用一次，所以这是原级数的一个重排；和却从 \\(\\ln 2\\) 变成 \\(\\dfrac12\\ln 2\\)。 · Every positive odd reciprocal and every negative even reciprocal is used exactly once, so this is a rearrangement of the original series; yet the sum changes from \\(\\ln 2\\) to \\(\\dfrac12\\ln 2\\).",
          "LIM-7.A.14 只对绝对收敛级数断言重排保和；本例如原级数条件收敛，所以不矛盾。 · LIM-7.A.14 guarantees rearrangement invariance only for absolutely convergent series; this example is conditionally convergent, so there is no contradiction."
        ],
        "solution": "新级数和为 \\(\\dfrac12\\ln 2\\)；条件收敛级数不满足重排保和，因此与 LIM-7.A.14 不矛盾。 · The rearranged series sums to \\(\\dfrac12\\ln 2\\); a conditionally convergent series need not preserve its sum under rearrangement, so this does not contradict LIM-7.A.14.",
        "solutionLatex": "1-\\dfrac12-\\dfrac14+\\dfrac13-\\dfrac16-\\dfrac18+\\cdots=\\dfrac12\\ln 2\\ne\\ln 2"
      },
      {
        "title": "例 5 · 分组与部分和误差 · Example 5: Grouping and partial-sum error",
        "prompt": "（i）说明为什么对绝对收敛级数 \\(\\sum\\dfrac{(-1)^{n+1}}{n^{2}}\\) 连续加括号不改变和；（ii）解释为什么不能把 \\(1-1+1-1+\\cdots\\) 写成 \\((1-1)+(1-1)+\\cdots\\) 来证明它收敛；（iii）写出绝对收敛时部分和误差的绝对值尾项界。 · (i) Explain why consecutive grouping does not change the sum of the absolutely convergent series \\(\\sum\\dfrac{(-1)^{n+1}}{n^{2}}\\). (ii) Explain why \\(1-1+1-1+\\cdots\\) cannot be written as \\((1-1)+(1-1)+\\cdots\\) to prove convergence. (iii) State the absolute-tail error bound for an absolutely convergent series.",
        "steps": [
          "（i）分组后的部分和是原级数部分和的子序列，收敛数列的子序列收敛到同一极限；而且 \\(\\sum\\dfrac1{n^{2}}\\) 收敛，绝对收敛还保证任意重排也不改变和。 · (i) The grouped partial sums are a subsequence of the original partial sums, and a subsequence of a convergent sequence converges to the same limit; moreover \\(\\sum\\dfrac1{n^{2}}\\) converges, and absolute convergence also guarantees that any rearrangement preserves the sum.",
          "（ii）原级数 \\(1-1+1-1+\\cdots\\) 的部分和在 1 与 0 之间振荡，不收敛；加括号后的级数只是取了其中一个子序列，不能代表原级数收敛。 · (ii) The partial sums of \\(1-1+1-1+\\cdots\\) oscillate between 1 and 0 and do not converge; the grouped series only selects one subsequence and cannot prove that the original series converges.",
          "（iii）若 \\(S=\\sum a_n\\) 绝对收敛，则 \\(\\left|S-S_n\\right|=\\left|\\sum_{k=n+1}^{\\infty}a_k\\right|\\le\\sum_{k=n+1}^{\\infty}|a_k|\\)。 · (iii) If \\(S=\\sum a_n\\) converges absolutely, then \\(\\left|S-S_n\\right|=\\left|\\sum_{k=n+1}^{\\infty}a_k\\right|\\le\\sum_{k=n+1}^{\\infty}|a_k|\\)。"
        ],
        "solution": "连续分组对收敛级数安全；发散级数加括号可能制造假收敛；绝对收敛的误差由绝对值尾项控制。 · Consecutive grouping is safe for convergent series; grouping a divergent series can create false convergence; the error of an absolutely convergent series is controlled by its absolute tail.",
        "solutionLatex": "\\left|S-S_n\\right|\\le\\sum_{k=n+1}^{\\infty}|a_k|"
      }
    ],
    "examTips": [
      "三选一题必须写两步：先判断 \\(\\sum|a_n|\\)，再判断原级数；只写「收敛」不够。 · For a three-way classification, write two steps: first test \\(\\sum|a_n|\\), then test the original series; “converges” alone is not enough.",
      "比值/根值检验若给出 \\(L<1\\)，结论是绝对收敛；若 \\(L>1\\)，级数发散；\\(L=1\\) 必须换检验。 · If the ratio or root test gives \\(L<1\\), conclude absolute convergence; if \\(L>1\\), the series diverges; if \\(L=1\\), switch tests.",
      "遇到「重排/分组后和是否不变」先检查绝对收敛；条件收敛时不能直接套用 LIM-7.A.14。 · When asked whether regrouping or rearrangement preserves the sum, check absolute convergence first; do not apply LIM-7.A.14 to a conditionally convergent series.",
      "说明条件收敛时，要同时给出「原级数收敛」和「绝对值级数发散」的证据。 · To justify conditional convergence, give evidence for both “the original series converges” and “the absolute series diverges.”",
      "重排反例可以引用交替调和级数：原和为 \\(\\ln 2\\)，某个重排和为 \\(\\dfrac12\\ln 2\\)。 · For a rearrangement counterexample, cite the alternating harmonic series: the original sum is \\(\\ln 2\\), while one rearrangement sums to \\(\\dfrac12\\ln 2\\).",
      "部分和误差图：绝对收敛看绝对值尾项带；条件收敛看交替级数的下一项误差界。 · Partial-sum error graphs: for absolute convergence use the absolute-tail band; for conditional convergence use the next-term error bound of the alternating series.",
      "所有分式用叠式分式 \\(\\dfrac{a}{b}\\) 书写，并在换元/约分时标明极限依据。 · Write all fractions in stacked form, such as \\(\\dfrac{a}{b}\\), and cite the limit justification when canceling or substituting."
    ],
    "related": [
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.7",
        "title": "交替级数 · Alternating Series Test for Convergence",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.8",
        "title": "比值检验 · Ratio Test for Convergence",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.5",
        "title": "调和级数与 p 级数 · Harmonic Series and p-Series",
        "relation": "相关 · related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.10",
        "title": "交替级数误差 · Alternating Series Error Bound",
        "relation": "相关 · related"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.13",
        "title": "半径与区间 · Radius and Interval of Convergence of Power Series",
        "relation": "后续 · follow-up"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：10.5 的 p 级数与调和级数提供绝对值级数的比较对象；10.7 的交替级数检验用来判定条件收敛；10.8 的比值检验作用在 \\(|a_n|\\) 上给出绝对收敛。 · Upstream: the p-series and harmonic series in 10.5 provide comparison models for the absolute series; the alternating series test in 10.7 decides conditional convergence; the ratio test in 10.8 applied to \\(|a_n|\\) gives absolute convergence.",
      "下游：10.10 的交替级数误差界用于条件收敛级数的部分和误差；10.13 中幂级数在收敛半径内部绝对收敛，端点可能条件收敛。 · Downstream: the alternating-series error bound in 10.10 controls partial-sum error for conditionally convergent series; in 10.13 a power series converges absolutely inside its radius and may converge conditionally at endpoints.",
      "跨主题：绝对收敛是「无条件收敛」的原型；黎曼重排定理说明条件收敛依赖顺序。 · Cross-topic: absolute convergence is the prototype of unconditional convergence; the Riemann rearrangement theorem shows that conditional convergence depends on order.",
      "图像：绝对值级数的部分和单调递增且有上界，给出尾项误差带；条件收敛的部分和在极限两侧振荡。 · Graphs: partial sums of the absolute series increase monotonically and are bounded, giving a tail-error band; partial sums of a conditionally convergent series oscillate around the limit."
    ],
    "intuitionDetailed": "先看「绝对值级数」\\(T_n=\\sum_{k=1}^{n}|a_k|\\)。如果 \\(T_n\\) 收敛，说明所有项的总“长度”有限，原级数的部分和 \\(S_n\\) 被同一个有限总长控制，因此不仅收敛，而且换顺序、加括号都不会改变极限：重排只是把同一堆有限总长的项换个次序相加。几何上，\\(T_n\\) 是一条单调递增、有水平渐近线的曲线，\\(S_n\\) 在极限附近摆动但摆动幅度不超过尾项 \\(\\sum_{k>n}|a_k|\\)，这就是「部分和与误差界图」要表达的内容。若 \\(T_n\\) 发散，原级数仍可能靠正负抵消收敛，但这时正部和负部都发散，抵消方式对顺序非常敏感；交替调和级数重排后从 \\(\\ln 2\\) 变成 \\(\\dfrac12\\ln 2\\) 就是证据。 · Start with the absolute series \\(T_n=\\sum_{k=1}^{n}|a_k|\\). If \\(T_n\\) converges, the total “length” of all terms is finite, so the partial sums \\(S_n\\) are controlled by that finite total; not only does the series converge, but reordering or grouping cannot change the limit, because a rearrangement only adds the same finite collection of terms in a different order. Graphically, \\(T_n\\) is increasing with a horizontal asymptote, while \\(S_n\\) oscillates near the limit with amplitude bounded by the tail \\(\\sum_{k>n}|a_k|\\); this is what the partial-sum and error-bound graph should show. If \\(T_n\\) diverges, the original series may still converge by cancellation, but now both the positive and negative parts diverge, so the cancellation is order-sensitive; the alternating harmonic series changing from \\(\\ln 2\\) to \\(\\dfrac12\\ln 2\\) under rearrangement is the evidence.",
    "development": [
      "先对 \\(|a_n|\\) 做初步判断：是 p 级数、几何级数，还是适合比值/根值/比较/积分检验？ · First inspect \\(|a_n|\\): is it a p-series, a geometric series, or suited to the ratio, root, comparison, or integral test?",
      "若 \\(\\sum|a_n|\\) 收敛，直接判定绝对收敛，并引用「绝对收敛蕴涵收敛」得到原级数收敛。 · If \\(\\sum|a_n|\\) converges, declare absolute convergence and use “absolute convergence implies convergence” to conclude the original series converges.",
      "若 \\(\\sum|a_n|\\) 发散，转向原级数：变号级数用交替级数检验；通项不趋于 0 用 n 项检验；其他情形用合适的检验。 · If \\(\\sum|a_n|\\) diverges, turn to the original series: use the alternating series test for sign-changing series, the nth-term test if terms do not tend to 0, and other tests as appropriate.",
      "若原级数收敛而绝对值级数发散，判定条件收敛，并明确说明「收敛」与「不绝对收敛」两方面。 · If the original series converges while the absolute series diverges, declare conditional convergence and state both “converges” and “not absolutely convergent.”",
      "遇到重排/分组问题：绝对收敛才可直接引用 LIM-7.A.14；条件收敛要给出反例或说明不能保证。 · For rearrangement/grouping questions, cite LIM-7.A.14 directly only under absolute convergence; for conditional convergence, give a counterexample or state that invariance is not guaranteed.",
      "用部分和图和误差界检验结论：绝对收敛看绝对值尾项，条件收敛看交替级数下一项。 · Check the conclusion with partial-sum graphs and error bounds: use the absolute tail for absolute convergence and the next term for conditional convergence."
    ],
    "checks": [
      "写出绝对收敛与条件收敛的定义，并各举一个例子。 · State the definitions of absolute and conditional convergence and give one example of each.",
      "判断真假：若 \\(\\sum a_n\\) 收敛，则 \\(\\sum|a_n|\\) 收敛；若 \\(\\sum|a_n|\\) 发散，则 \\(\\sum a_n\\) 发散。 · True or false: if \\(\\sum a_n\\) converges, then \\(\\sum|a_n|\\) converges; if \\(\\sum|a_n|\\) diverges, then \\(\\sum a_n\\) diverges.",
      "用比值检验判断 \\(\\sum(-1)^{n}\\dfrac{n^{2}}{2^{n}}\\) 是否绝对收敛。 · Use the ratio test to decide whether \\(\\sum(-1)^{n}\\dfrac{n^{2}}{2^{n}}\\) converges absolutely.",
      "陈述 LIM-7.A.14，并解释为什么条件收敛级数不能直接使用它。 · State LIM-7.A.14 and explain why it cannot be applied directly to a conditionally convergent series.",
      "交替调和级数的重排 \\(1-\\dfrac12-\\dfrac14+\\dfrac13-\\dfrac16-\\dfrac18+\\cdots\\) 的和是多少？这说明什么？ · What is the sum of the rearrangement \\(1-\\dfrac12-\\dfrac14+\\dfrac13-\\dfrac16-\\dfrac18+\\cdots\\) of the alternating harmonic series, and what does it show?",
      "为什么 \\((1-1)+(1-1)+\\cdots=0\\) 不能用来证明 \\(1-1+1-1+\\cdots\\) 收敛？ · Why can \\((1-1)+(1-1)+\\cdots=0\\) not be used to prove that \\(1-1+1-1+\\cdots\\) converges?",
      "绝对收敛级数的部分和误差如何用绝对值尾项估计？ · How is the partial-sum error of an absolutely convergent series estimated by its absolute tail?"
    ],
    "vocabulary": [
      {
        "termZh": "绝对收敛",
        "termEn": "absolute convergence",
        "defZh": "\\(\\sum|a_n|\\) 收敛；此时 \\(\\sum a_n\\) 必收敛。",
        "defEn": "\\(\\sum|a_n|\\) converges; then \\(\\sum a_n\\) must converge."
      },
      {
        "termZh": "条件收敛",
        "termEn": "conditional convergence",
        "defZh": "\\(\\sum a_n\\) 收敛但 \\(\\sum|a_n|\\) 发散。",
        "defEn": "\\(\\sum a_n\\) converges while \\(\\sum|a_n|\\) diverges."
      },
      {
        "termZh": "发散",
        "termEn": "divergence",
        "defZh": "\\(\\sum a_n\\) 的部分和没有有限极限。",
        "defEn": "The partial sums of \\(\\sum a_n\\) have no finite limit."
      },
      {
        "termZh": "绝对值级数",
        "termEn": "absolute series",
        "defZh": "对原级数各项取绝对值得到的 \\(\\sum|a_n|\\)。",
        "defEn": "The series \\(\\sum|a_n|\\) obtained by taking absolute values of the terms."
      },
      {
        "termZh": "重排",
        "termEn": "rearrangement",
        "defZh": "把原级数的项按一个双射重新排列，得到 \\(\\sum a_{\\sigma(n)}\\)。",
        "defEn": "A new ordering of the terms via a bijection \\(\\sigma\\), giving \\(\\sum a_{\\sigma(n)}\\)."
      },
      {
        "termZh": "分组/加括号",
        "termEn": "regrouping",
        "defZh": "在不改变顺序的前提下把连续若干项括成一组。",
        "defEn": "Inserting parentheses around finite consecutive blocks without changing the order."
      },
      {
        "termZh": "黎曼重排定理",
        "termEn": "Riemann rearrangement theorem",
        "defZh": "条件收敛的实数级数可以重排成任意指定的和，或重排成发散级数。",
        "defEn": "A conditionally convergent real series can be rearranged to any prescribed sum, or to diverge."
      },
      {
        "termZh": "部分和",
        "termEn": "partial sum",
        "defZh": "\\(S_n=\\sum_{k=1}^{n}a_k\\)；其极限定义级数的和。",
        "defEn": "\\(S_n=\\sum_{k=1}^{n}a_k\\); its limit defines the sum of the series."
      }
    ]
  },
  "10.10": {
    "id": "math/calc-u10/10.10",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.10",
    "titleZh": "交替级数误差",
    "titleEn": "Alternating Series Error Bound",
    "layer": "ap",
    "summary": "交替级数误差 · Alternating Series Error Bound",
    "learningObjectives": [
      "能陈述「交替级数误差」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Alternating Series Error Bound：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「交替级数误差」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "交替级数误差（Alternating Series Error Bound）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「交替级数误差」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "|S-S_N|\\le b_{N+1}",
        "note": "交替级数误差界：余项不超过第一个被舍去项的绝对值。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「交替级数误差」的工作方程或机制链。"
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
      "掌握 10.10「交替级数误差」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「交替级数误差」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「交替级数误差」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「交替级数误差」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「交替级数误差」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「交替级数误差」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.9",
        "title": "绝对与条件收敛",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.11",
        "title": "泰勒多项式导论",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「交替级数误差」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「交替级数误差」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「交替级数误差」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "交替级数",
        "termEn": "alternating series",
        "defZh": "形如 \\(\\sum(-1)^{n}b_n\\) 且 \\(b_n>0\\) 的级数。",
        "defEn": "A series of the form \\(\\sum(-1)^{n}b_n\\) with \\(b_n>0\\)."
      },
      {
        "termZh": "误差界",
        "termEn": "error bound",
        "defZh": "\\(|S-S_N|\\le b_{N+1}\\)，截断后的最大误差。",
        "defEn": "\\(|S-S_N|\\le b_{N+1}\\), the maximum error after truncation."
      },
      {
        "termZh": "截断误差",
        "termEn": "truncation error",
        "defZh": "用前 \\(N\\) 项和代替无穷和产生的误差。",
        "defEn": "The error from replacing an infinite sum by its first \\(N\\) terms."
      },
      {
        "termZh": "部分和",
        "termEn": "partial sum",
        "defZh": "\\(S_N=\\sum_{n=1}^{N}a_n\\)，用于近似总和。",
        "defEn": "\\(S_N=\\sum_{n=1}^{N}a_n\\), used to approximate the total."
      },
      {
        "termZh": "下一项",
        "termEn": "next term",
        "defZh": "\\(b_{N+1}\\)，给出误差界的大小。",
        "defEn": "\\(b_{N+1}\\), which bounds the error."
      },
      {
        "termZh": "余项",
        "termEn": "remainder",
        "defZh": "\\(S-S_N\\)，即被截去的所有项之和。",
        "defEn": "\\(S-S_N\\), the sum of all discarded terms."
      }
    ]
  },
  "10.11": {
    "id": "math/calc-u10/10.11",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.11",
    "titleZh": "泰勒多项式导论",
    "titleEn": "Finding Taylor Polynomial Approximations of Functions",
    "layer": "ap",
    "summary": "泰勒多项式导论 · Finding Taylor Polynomial Approximations of Functions",
    "learningObjectives": [
      "能陈述「泰勒多项式导论」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding Taylor Polynomial Approximations of Functions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「泰勒多项式导论」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "泰勒多项式导论（Finding Taylor Polynomial Approximations of Functions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「泰勒多项式导论」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "P_n(x)=\\sum_{k=0}^{n}\\dfrac{f^{(k)}(a)}{k!}(x-a)^{k}",
        "note": "函数在 x=a 处的 n 阶泰勒多项式。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「泰勒多项式导论」的工作方程或机制链。"
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
      "掌握 10.11「泰勒多项式导论」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「泰勒多项式导论」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「泰勒多项式导论」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「泰勒多项式导论」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「泰勒多项式导论」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「泰勒多项式导论」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.10",
        "title": "交替级数误差",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.12",
        "title": "拉格朗日误差界",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "taylor-series",
        "title": "泰勒级数"
      }
    ],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「泰勒多项式导论」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「泰勒多项式导论」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「泰勒多项式导论」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "泰勒多项式",
        "termEn": "Taylor polynomial",
        "defZh": "在 \\(x=a\\) 处截取泰勒级数前 \\(n+1\\) 项得到的近似多项式。",
        "defEn": "The polynomial obtained by truncating the Taylor series at \\(x=a\\) after \\(n+1\\) terms."
      },
      {
        "termZh": "展开中心 \\(a\\)",
        "termEn": "center of expansion",
        "defZh": "泰勒多项式所围绕的点，各阶导数都在此处取值。",
        "defEn": "The point about which the polynomial is expanded; all derivatives are evaluated there."
      },
      {
        "termZh": "导数系数",
        "termEn": "derivative coefficient",
        "defZh": "\\(\\dfrac{f^{(k)}(a)}{k!}\\)，由函数在中心的 \\(k\\) 阶导数确定。",
        "defEn": "The coefficient \\(\\dfrac{f^{(k)}(a)}{k!}\\), determined by the \\(k\\)-th derivative at the center."
      },
      {
        "termZh": "阶乘 \\(k!\\)",
        "termEn": "factorial",
        "defZh": "泰勒系数分母中的 \\(k!\\)，用于抵消高阶导数的重复计数。",
        "defEn": "The \\(k!\\) in the denominator of each Taylor coefficient."
      },
      {
        "termZh": "逼近误差",
        "termEn": "approximation error",
        "defZh": "函数值与泰勒多项式值之差 \\(f(x)-P_n(x)\\)。",
        "defEn": "The difference \\(f(x)-P_n(x)\\) between the function and its Taylor polynomial."
      },
      {
        "termZh": "麦克劳林多项式",
        "termEn": "Maclaurin polynomial",
        "defZh": "中心为 \\(a=0\\) 的泰勒多项式。",
        "defEn": "A Taylor polynomial centered at \\(a=0\\)."
      }
    ]
  },
  "10.12": {
    "id": "math/calc-u10/10.12",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.12",
    "titleZh": "拉格朗日误差界",
    "titleEn": "Lagrange Error Bound",
    "layer": "ap",
    "summary": "拉格朗日误差界 · Lagrange Error Bound",
    "learningObjectives": [
      "能陈述「拉格朗日误差界」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Lagrange Error Bound：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「拉格朗日误差界」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "拉格朗日误差界（Lagrange Error Bound）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「拉格朗日误差界」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "|R_n(x)|\\le\\dfrac{M}{(n+1)!}|x-a|^{n+1}",
        "note": "拉格朗日误差界：|f^{(n+1)}|≤M。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「拉格朗日误差界」的工作方程或机制链。"
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
      "掌握 10.12「拉格朗日误差界」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「拉格朗日误差界」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「拉格朗日误差界」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「拉格朗日误差界」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「拉格朗日误差界」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「拉格朗日误差界」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.11",
        "title": "泰勒多项式导论",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.13",
        "title": "半径与区间",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「拉格朗日误差界」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「拉格朗日误差界」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「拉格朗日误差界」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "拉格朗日误差界",
        "termEn": "Lagrange error bound",
        "defZh": "用 \\(|R_n(x)|\\le\\dfrac{M}{(n+1)!}|x-a|^{n+1}\\) 控制泰勒多项式的误差。",
        "defEn": "Bounds the Taylor polynomial error by \\(|R_n(x)|\\le\\dfrac{M}{(n+1)!}|x-a|^{n+1}\\)."
      },
      {
        "termZh": "余项 \\(R_n(x)\\)",
        "termEn": "remainder",
        "defZh": "函数与 \\(n\\) 次泰勒多项式之差。",
        "defEn": "The difference between the function and its degree-\\(n\\) Taylor polynomial."
      },
      {
        "termZh": "导数上界 \\(M\\)",
        "termEn": "derivative bound",
        "defZh": "在包含 \\(a\\) 与 \\(x\\) 的区间上，\\(|f^{(n+1)}|\\) 的一个上界。",
        "defEn": "An upper bound for \\(|f^{(n+1)}|\\) on an interval containing \\(a\\) and \\(x\\)."
      },
      {
        "termZh": "误差界",
        "termEn": "error bound",
        "defZh": "允许的近似误差上限，用来确定所需的多项式次数。",
        "defEn": "The maximum acceptable approximation error, used to choose the needed polynomial degree."
      },
      {
        "termZh": "区间约束",
        "termEn": "interval constraint",
        "defZh": "\\(M\\) 必须在同时包含展开中心与目标点的区间上估计。",
        "defEn": "The bound \\(M\\) must be estimated on an interval containing both the center and the target point."
      },
      {
        "termZh": "交替级数误差界",
        "termEn": "alternating series error bound",
        "defZh": "交替级数用首个被舍去的项来界定截断误差。",
        "defEn": "For an alternating series, the first omitted term bounds the truncation error."
      }
    ]
  },
  "10.13": {
    "id": "math/calc-u10/10.13",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.13",
    "titleZh": "半径与区间",
    "titleEn": "Radius and Interval of Convergence of Power Series",
    "layer": "ap",
    "summary": "半径与区间 · Radius and Interval of Convergence of Power Series",
    "learningObjectives": [
      "能陈述「半径与区间」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Radius and Interval of Convergence of Power Series：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「半径与区间」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "半径与区间（Radius and Interval of Convergence of Power Series）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「半径与区间」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "R=\\lim_{n\\to\\infty}\\left|\\dfrac{a_n}{a_{n+1}}\\right|",
        "note": "幂级数收敛半径（比值法）；再检查端点的收敛性。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「半径与区间」的工作方程或机制链。"
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
      "掌握 10.13「半径与区间」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「半径与区间」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「半径与区间」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「半径与区间」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「半径与区间」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「半径与区间」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.12",
        "title": "拉格朗日误差界",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.14",
        "title": "求函数的泰勒或麦克劳林级数",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「半径与区间」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「半径与区间」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「半径与区间」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "幂级数",
        "termEn": "power series",
        "defZh": "形如 \\(\\sum_{n=0}^{\\infty}a_n(x-c)^{n}\\) 的级数。",
        "defEn": "A series of the form \\(\\sum_{n=0}^{\\infty}a_n(x-c)^{n}\\)."
      },
      {
        "termZh": "收敛半径 \\(R\\)",
        "termEn": "radius of convergence",
        "defZh": "使幂级数在 \\(|x-c|<R\\) 内绝对收敛的距离。",
        "defEn": "The distance from the center within which the power series converges absolutely."
      },
      {
        "termZh": "收敛区间",
        "termEn": "interval of convergence",
        "defZh": "使幂级数收敛的全部 \\(x\\) 值组成的区间。",
        "defEn": "The interval of all \\(x\\) values for which the power series converges."
      },
      {
        "termZh": "收敛中心 \\(c\\)",
        "termEn": "center of convergence",
        "defZh": "幂级数展开所围绕的点。",
        "defEn": "The point about which the power series is centered."
      },
      {
        "termZh": "端点检验",
        "termEn": "endpoint check",
        "defZh": "对收敛区间的两个端点分别使用其他检验判断敛散性。",
        "defEn": "Testing each endpoint of the interval separately with another convergence test."
      },
      {
        "termZh": "比值检验",
        "termEn": "ratio test",
        "defZh": "求收敛半径时最常用的检验。",
        "defEn": "The test most often used to find the radius of convergence."
      }
    ]
  },
  "10.14": {
    "id": "math/calc-u10/10.14",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.14",
    "titleZh": "求函数的泰勒或麦克劳林级数",
    "titleEn": "Finding Taylor or Maclaurin Series for a Function",
    "layer": "ap",
    "summary": "求函数的泰勒或麦克劳林级数 · Finding Taylor or Maclaurin Series for a Function",
    "learningObjectives": [
      "能陈述「求函数的泰勒或麦克劳林级数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Finding Taylor or Maclaurin Series for a Function：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「求函数的泰勒或麦克劳林级数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "求函数的泰勒或麦克劳林级数（Finding Taylor or Maclaurin Series for a Function）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「求函数的泰勒或麦克劳林级数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f(x)=\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}",
        "note": "泰勒级数在收敛区间内表示函数。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「求函数的泰勒或麦克劳林级数」的工作方程或机制链。"
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
      "掌握 10.14「求函数的泰勒或麦克劳林级数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「求函数的泰勒或麦克劳林级数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「求函数的泰勒或麦克劳林级数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「求函数的泰勒或麦克劳林级数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「求函数的泰勒或麦克劳林级数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「求函数的泰勒或麦克劳林级数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.13",
        "title": "半径与区间",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u10",
        "code": "10.15",
        "title": "函数表示为幂级数",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "taylor-series",
        "title": "泰勒级数"
      }
    ],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「求函数的泰勒或麦克劳林级数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「求函数的泰勒或麦克劳林级数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「求函数的泰勒或麦克劳林级数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "泰勒级数",
        "termEn": "Taylor series",
        "defZh": "以 \\(x=a\\) 为中心、由各阶导数构成的幂级数 \\(\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}\\)。",
        "defEn": "The power series \\(\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}\\) built from the derivatives at \\(x=a\\)."
      },
      {
        "termZh": "麦克劳林级数",
        "termEn": "Maclaurin series",
        "defZh": "中心为 \\(a=0\\) 的泰勒级数。",
        "defEn": "A Taylor series centered at \\(a=0\\)."
      },
      {
        "termZh": "收敛半径",
        "termEn": "radius of convergence",
        "defZh": "泰勒级数有效表示函数的区间半径。",
        "defEn": "The radius of the interval on which the Taylor series represents the function."
      },
      {
        "termZh": "已知展开式",
        "termEn": "known series expansion",
        "defZh": "如 \\(e^{x}\\)、\\(\\sin x\\)、\\(\\dfrac{1}{1-x}\\) 的标准麦克劳林级数，可用于代换和求导。",
        "defEn": "Standard Maclaurin series such as those for \\(e^{x}\\), \\(\\sin x\\), and \\(\\dfrac{1}{1-x}\\), used by substitution and differentiation."
      },
      {
        "termZh": "逐项求导",
        "termEn": "term-by-term differentiation",
        "defZh": "在收敛区间内部对幂级数逐项求导得到新级数。",
        "defEn": "Differentiating a power series term by term inside its interval of convergence."
      },
      {
        "termZh": "逐项积分",
        "termEn": "term-by-term integration",
        "defZh": "在收敛区间内部对幂级数逐项积分得到新级数。",
        "defEn": "Integrating a power series term by term inside its interval of convergence."
      }
    ]
  },
  "10.15": {
    "id": "math/calc-u10/10.15",
    "subject": "math",
    "chapterId": "calc-u10",
    "unitCode": "10",
    "unitTitleZh": "无穷序列与级数",
    "unitTitleEn": "Infinite Sequences and Series",
    "code": "10.15",
    "titleZh": "函数表示为幂级数",
    "titleEn": "Representing Functions as Power Series",
    "layer": "ap",
    "summary": "函数表示为幂级数 · Representing Functions as Power Series",
    "learningObjectives": [
      "能陈述「函数表示为幂级数」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Representing Functions as Power Series：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「函数表示为幂级数」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "函数表示为幂级数（Representing Functions as Power Series）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「函数表示为幂级数」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\left(\\sum a_nx^{n}\\right)^{\\prime}=\\sum na_nx^{n-1}",
        "note": "幂级数可逐项求导与积分，收敛半径不变。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「函数表示为幂级数」的工作方程或机制链。"
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
      "掌握 10.15「函数表示为幂级数」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「函数表示为幂级数」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「函数表示为幂级数」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「函数表示为幂级数」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「函数表示为幂级数」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「函数表示为幂级数」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "calc-u10",
        "code": "10.14",
        "title": "函数表示为幂级数",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "taylor-series",
        "title": "泰勒级数"
      }
    ],
    "practiceHref": "#/math/practice/calc-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「函数表示为幂级数」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「函数表示为幂级数」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「函数表示为幂级数」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "幂级数",
        "termEn": "power series",
        "defZh": "形如 \\(\\sum_{n=0}^{\\infty}a_n(x-c)^{n}\\) 的级数。",
        "defEn": "A series of the form \\(\\sum_{n=0}^{\\infty}a_n(x-c)^{n}\\)."
      },
      {
        "termZh": "收敛半径",
        "termEn": "radius of convergence",
        "defZh": "幂级数在 \\(|x-c|<R\\) 内收敛的半径 \\(R\\)。",
        "defEn": "The radius \\(R\\) such that the series converges for \\(|x-c|<R\\)."
      },
      {
        "termZh": "收敛区间",
        "termEn": "interval of convergence",
        "defZh": "所有使幂级数收敛的 \\(x\\) 组成的区间。",
        "defEn": "The interval of all \\(x\\) for which the power series converges."
      },
      {
        "termZh": "逐项求导",
        "termEn": "term-by-term differentiation",
        "defZh": "在收敛区间内部对幂级数逐项求导。",
        "defEn": "Differentiating a power series term by term inside its interval of convergence."
      },
      {
        "termZh": "逐项积分",
        "termEn": "term-by-term integration",
        "defZh": "在收敛区间内部对幂级数逐项积分。",
        "defEn": "Integrating a power series term by term inside its interval of convergence."
      },
      {
        "termZh": "几何级数",
        "termEn": "geometric series",
        "defZh": "\\(\\sum_{n=0}^{\\infty}x^{n}=\\dfrac{1}{1-x}\\)（\\(|x|<1\\)），常用作展开基础。",
        "defEn": "\\(\\sum_{n=0}^{\\infty}x^{n}=\\dfrac{1}{1-x}\\) for \\(|x|<1\\), a common base for expansions."
      }
    ]
  }
};
