export const UNIT = {
  "id": "em-u9",
  "code": "9",
  "titleZh": "电势",
  "titleEn": "Electric Potential",
  "subject": "em",
  "layer": "ap"
};
export const TOPICS = {
  "9.1": {
    "id": "em/em-u9/9.1",
    "subject": "em",
    "chapterId": "em-u9",
    "unitCode": "9",
    "unitTitleZh": "电势",
    "unitTitleEn": "Electric Potential",
    "code": "9.1",
    "titleZh": "电势能",
    "titleEn": "Electric Potential Energy",
    "layer": "ap",
    "summary": "电势能 · Electric Potential Energy",
    "learningObjectives": [
      "能陈述「电势能」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Potential Energy：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电势能（Electric Potential Energy）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电势能」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "U=k\\dfrac{q_1q_2}{r}",
        "note": "两点电荷的电势能；无穷远为零。"
      },
      {
        "latex": "U=qV",
        "note": "电荷在电势 V 处的电势能。"
      },
      {
        "latex": "W_{\\mathrm{field}}=-\\Delta U",
        "note": "电场力做功与电势能变化。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电势能」的工作方程或机制链。"
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
      "点电荷或球对称分布；r 为球心距离",
      "零势能点通常取无穷远",
      "电势能是系统量，符号由电荷正负决定"
    ],
    "keyPoints": [
      "掌握 9.1「电势能」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电势能」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电势能」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "U=k\\dfrac{q_1q_2}{r}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电势能」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电势能」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电势能」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.2",
        "title": "电势",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "electric-potential",
        "title": "电势与电势能"
      }
    ],
    "practiceHref": "#/em/practice/em-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电势能」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电势能」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电势能」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "9.2": {
    "id": "em/em-u9/9.2",
    "subject": "em",
    "chapterId": "em-u9",
    "unitCode": "9",
    "unitTitleZh": "电势",
    "unitTitleEn": "Electric Potential",
    "code": "9.2",
    "titleZh": "电势",
    "titleEn": "Electric Potential",
    "layer": "ap",
    "summary": "电势 · Electric Potential",
    "learningObjectives": [
      "能陈述「电势」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Potential：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电势（Electric Potential）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电势」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "V=\\dfrac{U}{q}",
        "note": "电势定义。"
      },
      {
        "latex": "V=k\\dfrac{q}{r}",
        "note": "点电荷电势；无穷远为零。"
      },
      {
        "latex": "E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}",
        "note": "电场是电势的负梯度（一维）。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电势」的工作方程或机制链。"
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
      "零势点可任选；点电荷通常取无穷远为零",
      "电势是标量，叠加不带方向",
      "梯度关系适用于静电场（无旋场）"
    ],
    "keyPoints": [
      "掌握 9.2「电势」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电势」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电势」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "V=\\dfrac{U}{q}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电势」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电势」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电势」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.1",
        "title": "电势能",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.3",
        "title": "电势与场",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "electric-potential",
        "title": "电势与电势能"
      }
    ],
    "practiceHref": "#/em/practice/em-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电势」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电势」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电势」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "9.3": {
    "id": "em/em-u9/9.3",
    "subject": "em",
    "chapterId": "em-u9",
    "unitCode": "9",
    "unitTitleZh": "电势",
    "unitTitleEn": "Electric Potential",
    "code": "9.3",
    "titleZh": "电势与场",
    "titleEn": "Electric Potential Due to Charge Distributions",
    "layer": "ap",
    "summary": "电势与场 · Electric Potential Due to Charge Distributions",
    "learningObjectives": [
      "能陈述「电势与场」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Potential Due to Charge Distributions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电势与场（Electric Potential Due to Charge Distributions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电势与场」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "V=k\\int\\dfrac{\\mathrm{d}q}{r}",
        "note": "连续电荷分布的电势。"
      },
      {
        "latex": "V_{\\mathrm{total}}=\\sum V_i",
        "note": "离散电荷的电势代数和。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电势与场」的工作方程或机制链。"
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
      "电势是标量，直接代数相加",
      "r 为电荷元到场点距离；零势点需统一",
      "电荷分布连续或离散；积分可能需分段"
    ],
    "keyPoints": [
      "掌握 9.3「电势与场」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电势与场」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电势与场」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "V=k\\int\\dfrac{\\mathrm{d}q}{r}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电势与场」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电势与场」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电势与场」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.2",
        "title": "电势",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.4",
        "title": "电势差与功",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "electric-potential",
        "title": "电势与电势能"
      }
    ],
    "practiceHref": "#/em/practice/em-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电势与场」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电势与场」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电势与场」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "9.4": {
    "id": "em/em-u9/9.4",
    "subject": "em",
    "chapterId": "em-u9",
    "unitCode": "9",
    "unitTitleZh": "电势",
    "unitTitleEn": "Electric Potential",
    "code": "9.4",
    "titleZh": "电势差与功",
    "titleEn": "Conservation of Electric Energy",
    "layer": "ap",
    "summary": "电势差与功 · Conservation of Electric Energy",
    "learningObjectives": [
      "能陈述「电势差与功」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Conservation of Electric Energy：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电势差与功（Conservation of Electric Energy）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电势差与功」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "K_i+U_i=K_f+U_f",
        "note": "只有电场力做功时的能量守恒。"
      },
      {
        "latex": "\\Delta K=-\\Delta U",
        "note": "动能变化等于电势能变化的负值。"
      },
      {
        "latex": "U=qV",
        "note": "电荷在电势中的势能。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电势差与功」的工作方程或机制链。"
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
      "只有静电力做功；无摩擦/辐射等非保守力",
      "非相对论；电荷在真空中运动",
      "零势点统一；系统与电荷分布明确"
    ],
    "keyPoints": [
      "掌握 9.4「电势差与功」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电势差与功」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电势差与功」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "K_i+U_i=K_f+U_f"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电势差与功」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电势差与功」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电势差与功」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.3",
        "title": "电势与场",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "electric-potential",
        "title": "电势与电势能"
      }
    ],
    "practiceHref": "#/em/practice/em-u9",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电势差与功」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电势差与功」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电势差与功」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "9.5": {
    "id": "em/em-u9/9.5",
    "subject": "em",
    "chapterId": "em-u9",
    "unitCode": "9",
    "unitTitleZh": "电势",
    "unitTitleEn": "Electric Potential",
    "code": "9.5",
    "titleZh": "电势能积分与多电荷系统",
    "titleEn": "Potential Energy Integrals and Charge Systems",
    "layer": "ap",
    "summary": "电势能可由电场力沿路径的积分定义：\\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r=q\\Delta V\\)，结果与路径无关；电荷在给定电势中 \\(U=qV\\)，两个点电荷 \\(U=k\\dfrac{q_1q_2}{r}\\)。多电荷系统的总电势能等于每一对相互作用之和，每对只算一次：\\(U_{\\mathrm{total}}=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}=\\dfrac12\\sum_i q_iV_i\\)。把电荷从无穷远组装成系统时，外力做功等于总电势能；电势-位置图像的斜率给出电场 \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)，等势线与粒子能量守恒把 \\(U\\) 和 \\(K\\) 联系起来。 · Electric potential energy can be defined by the line integral of the electric force: \\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r=q\\Delta V\\), independent of path; a charge in a given potential has \\(U=qV\\), and two point charges have \\(U=k\\dfrac{q_1q_2}{r}\\). The total potential energy of a multi-charge system is the sum over each pair, counted once: \\(U_{\\mathrm{total}}=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}=\\dfrac12\\sum_i q_iV_i\\). Assembling the system from infinity requires external work equal to the total potential energy; the slope of a \\(V\\)-versus-\\(x\\) graph gives the field \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\), and equipotentials plus energy conservation connect \\(U\\) and \\(K\\).",
    "learningObjectives": [
      "能用 \\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r=q\\Delta V\\) 计算静电场中电荷移动的电势能变化，并说明静电场是保守场、结果与路径无关。 · Use \\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r=q\\Delta V\\) to calculate the change in electric potential energy when a charge moves in an electrostatic field, and explain that the electrostatic field is conservative so the result is path-independent.",
      "能用 \\(U=qV\\) 与 \\(U=k\\dfrac{q_1q_2}{r}\\) 计算单个电荷、两个点电荷及球对称带电体的电势能，正确判断符号与零势点。 · Use \\(U=qV\\) and \\(U=k\\dfrac{q_1q_2}{r}\\) to calculate the potential energy of a single charge, two point charges, and a spherically symmetric charged body, with correct signs and zero reference.",
      "能对三个及以上电荷逐对求总电势能，每对只算一次，并用 \\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\) 校验，避免双计数。 · Compute the total potential energy of three or more charges pairwise, counting each pair once, and check with \\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\) to avoid double counting.",
      "能读 \\(V(x)\\) 图像、等势线与粒子能量图，用 \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\) 与 \\(K+U=\\text{常数}\\) 解决 AP 风格问题。 · Read a \\(V(x)\\) graph, equipotential map, and particle-energy diagram, and use \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\) and \\(K+U=\\text{constant}\\) to solve AP-style problems."
    ],
    "essentialKnowledge": [
      "一般定义：把电荷 \\(q\\) 从 A 移到 B，电场力做功 \\(W_{\\mathrm{field}}=\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)，电势能变化 \\(\\Delta U=-W_{\\mathrm{field}}=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)。这是比 \\(U=k\\dfrac{q_1q_2}{r}\\) 更一般的“力线积分”表达。 · General definition: when charge \\(q\\) moves from A to B, the electric force does work \\(W_{\\mathrm{field}}=\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\), so the potential-energy change is \\(\\Delta U=-W_{\\mathrm{field}}=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\). This line-integral form is more general than \\(U=k\\dfrac{q_1q_2}{r}\\).",
      "静电场是保守场：\\(\\Delta U\\) 只取决于起点和终点的电势差，与路径无关；沿任意闭合路径一周，电场力做功为零。 · The electrostatic field is conservative: \\(\\Delta U\\) depends only on the potential difference between the endpoints, not on the path; the work done by the electric force around any closed path is zero.",
      "若电势 \\(V\\) 由其他电荷产生，则电荷 \\(q\\) 在该点的电势能为 \\(U=qV\\)；这里 \\(V\\) 不包括 \\(q\\) 自己产生的电势。正电荷在高电势处 \\(U>0\\)，负电荷在高电势处 \\(U<0\\)。 · If the potential \\(V\\) is produced by other charges, the potential energy of charge \\(q\\) at that point is \\(U=qV\\); \\(V\\) does not include the potential produced by \\(q\\) itself. A positive charge has \\(U>0\\) at high \\(V\\), while a negative charge has \\(U<0\\) at high \\(V\\).",
      "两个点电荷取无穷远为零时 \\(U=k\\dfrac{q_1q_2}{r}\\)，\\(r\\) 为球心距离。同号电荷 \\(U>0\\)，异号电荷 \\(U<0\\)；该式也适用于球对称带电体外部。 · For two point charges with zero at infinity, \\(U=k\\dfrac{q_1q_2}{r}\\), where \\(r\\) is the center-to-center distance. Like charges give \\(U>0\\), opposite charges give \\(U<0\\); the same form applies outside a spherically symmetric charged body.",
      "多电荷系统的总电势能是每一对相互作用电势能之和，每对只算一次：\\(U_{\\mathrm{total}}=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}\\)。\\(n\\) 个电荷共有 \\(\\dfrac{n(n-1)}{2}\\) 对，而不是 \\(n(n-1)\\) 对。 · The total potential energy of a multi-charge system is the sum of the potential energy of each interacting pair, counted once: \\(U_{\\mathrm{total}}=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}\\). For \\(n\\) charges there are \\(\\dfrac{n(n-1)}{2}\\) pairs, not \\(n(n-1)\\).",
      "等价写法 \\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\)，其中 \\(V_i\\) 是所有其他电荷在 \\(q_i\\) 处产生的电势。求和时每一对会出现两次，所以因子 \\(\\dfrac12\\) 正好抵消双计数；电荷与自身场的“自能”不在其中。 · Equivalent form: \\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\), where \\(V_i\\) is the potential at \\(q_i\\) due to all the other charges. Each pair appears twice in the sum, so the factor \\(\\dfrac12\\) cancels the double counting; the self-energy of a charge with its own field is not included.",
      "把电荷从无穷远缓慢组装成系统时，外力做功 \\(W_{\\mathrm{ext}}=\\Delta U=U_{\\mathrm{final}}\\)；电场力做功 \\(W_{\\mathrm{field}}=-U_{\\mathrm{final}}\\)。若总电势能为负，系统是束缚的，拆散它需要外界做正功。 · When charges are slowly assembled from infinity, the external work is \\(W_{\\mathrm{ext}}=\\Delta U=U_{\\mathrm{final}}\\), while the electric force does \\(W_{\\mathrm{field}}=-U_{\\mathrm{final}}\\). A negative total potential energy means the system is bound, and positive external work is required to separate it.",
      "连续电荷分布是逐对求和的极限：\\(U=\\dfrac12 k\\int\\int\\dfrac{\\mathrm{d}q_1\\,\\mathrm{d}q_2}{r_{12}}\\)，也可写成 \\(U=\\dfrac12\\int V\\,\\mathrm{d}q\\)（\\(V\\) 为其余电荷产生的电势）。这是本章的拓展表达，AP 题通常以离散点电荷为主。 · A continuous charge distribution is the limit of pairwise summation: \\(U=\\dfrac12 k\\int\\int\\dfrac{\\mathrm{d}q_1\\,\\mathrm{d}q_2}{r_{12}}\\), or equivalently \\(U=\\dfrac12\\int V\\,\\mathrm{d}q\\), where \\(V\\) is the potential due to the remaining charge. This is an extension; AP problems usually use discrete point charges.",
      "电势-位置图像：\\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)，斜率越陡电场越强；电场指向电势降低最快的方向。等势面与电场垂直，沿等势面移动电荷电场力不做功。 · Potential-versus-position graph: \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\); a steeper slope means a stronger field, and the field points toward decreasing potential. Equipotential surfaces are perpendicular to the field, and no work is done by the electric force when a charge moves along an equipotential.",
      "只有电场力做功时，粒子总能量守恒：\\(K_i+U_i=K_f+U_f\\)。电势能增加多少，动能就减少多少；粒子在 \\(K=0\\) 的转折点不能继续进入更高势能的区域。 · When only the electric force does work, the particle's total energy is conserved: \\(K_i+U_i=K_f+U_f\\). Whatever the potential energy gains, the kinetic energy loses; a particle cannot pass a turning point where \\(K=0\\) into a region of higher potential energy."
    ],
    "definition": "电势能是电荷与电场组成的系统因相对位置而具有的能量。一般情况下，把电荷 \\(q\\) 从 A 移到 B，电场力做功 \\(W_{\\mathrm{field}}=\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)，电势能变化为 \\(\\Delta U=-W_{\\mathrm{field}}=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)；由于静电场是保守场，这个变化只取决于 A、B 两点的电势差，与路径无关。若 A 点选为势能零点，则 \\(U=qV\\)，其中 \\(V\\) 是其他电荷在该点产生的电势。对两个点电荷，取无穷远为零时 \\(U=k\\dfrac{q_1q_2}{r}\\)。对多电荷系统，总电势能是每一对相互作用之和，每对只计一次：\\(U_{\\mathrm{total}}=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}=\\dfrac12\\sum_i q_iV_i\\)。 · Electric potential energy is the energy of the system of charges and field due to their relative positions. In general, when charge \\(q\\) moves from A to B, the electric force does work \\(W_{\\mathrm{field}}=\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\), so the potential-energy change is \\(\\Delta U=-W_{\\mathrm{field}}=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\). Because the electrostatic field is conservative, this change depends only on the potential difference between A and B, not on the path. If A is chosen as the zero of potential energy, then \\(U=qV\\), where \\(V\\) is the potential at that point due to the other charges. For two point charges with zero at infinity, \\(U=k\\dfrac{q_1q_2}{r}\\). For a multi-charge system, the total potential energy is the sum over each interacting pair, counted once: \\(U_{\\mathrm{total}}=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}=\\dfrac12\\sum_i q_iV_i\\).",
    "intuition": "把电势能想成一本“把电荷从无穷远搬到目标位置，外力需要做多少功”的账本。电场力是保守力，走哪条路都一样，所以只需看起点和终点的电势差。单个电荷在别人产生的电势里，电势能就是 \\(qV\\)；多个电荷时，每一对之间都有一笔相互作用账，总账是所有这些两两账目之和。因为每一对只发生一次相互作用，所以不能把 \\(i\\) 对 \\(j\\) 和 \\(j\\) 对 \\(i\\) 都加一遍；写成 \\(\\dfrac12\\sum_i q_iV_i\\) 时，那个 \\(\\dfrac12\\) 正是为了抵消双计数。 · Think of potential energy as a ledger of the work an external agent must do to bring charges from infinity to their positions. The electric force is conservative, so the path does not matter; only the potential difference between the endpoints matters. For a single charge in the potential of others, the potential energy is \\(qV\\); for several charges, every pair has one interaction entry, and the total is the sum of all these pairwise entries. Since each pair interacts once, you must not add both \\(i\\)-on-\\(j\\) and \\(j\\)-on-\\(i\\); the factor \\(\\dfrac12\\) in \\(\\dfrac12\\sum_i q_iV_i\\) corrects exactly this double counting.",
    "formulas": [
      {
        "latex": "\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r",
        "note": "电势能变化的一般力线积分定义；静电场中与路径无关。 · General line-integral definition of the change in potential energy; path-independent in an electrostatic field."
      },
      {
        "latex": "\\Delta U=q\\Delta V=q(V_B-V_A)",
        "note": "电势能变化与电势差的关系。 · Relation between the change in potential energy and the potential difference."
      },
      {
        "latex": "U=qV",
        "note": "电荷在给定电势中的电势能；\\(V\\) 由其他电荷产生。 · Potential energy of a charge in a given potential; \\(V\\) is produced by other charges."
      },
      {
        "latex": "U=k\\dfrac{q_1q_2}{r}",
        "note": "两个点电荷的电势能；通常取无穷远为零。 · Potential energy of two point charges; zero is usually taken at infinity."
      },
      {
        "latex": "U_{\\mathrm{total}}=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}",
        "note": "多电荷系统的总电势能；每对只计一次。 · Total potential energy of a multi-charge system; each pair is counted once."
      },
      {
        "latex": "U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i",
        "note": "等价写法；\\(V_i\\) 为其他电荷在 \\(q_i\\) 处产生的电势。 · Equivalent form; \\(V_i\\) is the potential at \\(q_i\\) due to the other charges."
      },
      {
        "latex": "W_{\\mathrm{ext}}=\\Delta U,\\qquad W_{\\mathrm{field}}=-\\Delta U",
        "note": "外力缓慢移动电荷与电场力做功的关系。 · Work by an external agent moving charge slowly versus work by the electric field."
      },
      {
        "latex": "E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}",
        "note": "一维电势-位置图像的斜率给出电场分量。 · The slope of a one-dimensional potential-versus-position graph gives the field component."
      },
      {
        "latex": "K_i+U_i=K_f+U_f",
        "note": "只有电场力做功时的能量守恒。 · Energy conservation when only the electric force does work."
      },
      {
        "latex": "U=\\dfrac12 k\\int\\int\\dfrac{\\mathrm{d}q_1\\,\\mathrm{d}q_2}{r_{12}}=\\dfrac12\\int V\\,\\mathrm{d}q",
        "note": "连续电荷分布的拓展表达。 · Extension to a continuous charge distribution."
      }
    ],
    "derivationNotes": [
      {
        "from": "功的定义 · Definition of work",
        "to": "电势能积分 · Potential-energy integral",
        "note": "\\(W_{\\mathrm{field}}=\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)。静电场力是保守力，定义 \\(\\Delta U=-W_{\\mathrm{field}}\\)，于是得到 \\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)。 · \\(W_{\\mathrm{field}}=\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\). The electrostatic force is conservative; defining \\(\\Delta U=-W_{\\mathrm{field}}\\) gives \\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)."
      },
      {
        "from": "电势差 · Potential difference",
        "to": "U=qV · U=qV",
        "note": "电势定义 \\(V=\\dfrac{U}{q}\\)，故 \\(U=qV\\)；沿路径写 \\(\\Delta V=-\\int_A^B\\vec E\\cdot\\mathrm{d}\\vec r\\)，两边乘 \\(q\\) 即得 \\(\\Delta U=q\\Delta V\\)。 · The definition \\(V=\\dfrac{U}{q}\\) gives \\(U=qV\\); along a path, \\(\\Delta V=-\\int_A^B\\vec E\\cdot\\mathrm{d}\\vec r\\), and multiplying by \\(q\\) gives \\(\\Delta U=q\\Delta V\\)."
      },
      {
        "from": "库仑力 · Coulomb force",
        "to": "两点电荷电势能 · Two-point-charge potential energy",
        "note": "把 \\(q_2\\) 从无穷远缓慢移到距 \\(q_1\\) 为 \\(r\\) 处，外力做功 \\(W_{\\mathrm{ext}}=-\\int_\\infty^r k\\dfrac{q_1q_2}{r'^2}\\,\\mathrm{d}r'=k\\dfrac{q_1q_2}{r}\\)，故 \\(U=k\\dfrac{q_1q_2}{r}\\)。 · Moving \\(q_2\\) slowly from infinity to a distance \\(r\\) from \\(q_1\\), the external work is \\(W_{\\mathrm{ext}}=-\\int_\\infty^r k\\dfrac{q_1q_2}{r'^2}\\,\\mathrm{d}r'=k\\dfrac{q_1q_2}{r}\\), so \\(U=k\\dfrac{q_1q_2}{r}\\)."
      },
      {
        "from": "逐对组装 · Pairwise assembly",
        "to": "多电荷求和 · Multi-charge sum",
        "note": "先放 \\(q_1\\) 不做功；再放 \\(q_2\\) 需 \\(U_{12}\\)；再放 \\(q_3\\) 需 \\(U_{13}+U_{23}\\)。总组装功与放置顺序无关，等于所有对之和。 · Placing \\(q_1\\) first costs no work; placing \\(q_2\\) costs \\(U_{12}\\); placing \\(q_3\\) costs \\(U_{13}+U_{23}\\). The total assembly work is independent of order and equals the sum over all pairs."
      },
      {
        "from": "有序对求和 · Ordered-pair sum",
        "to": "1/2 求和公式 · One-half sum formula",
        "note": "若对每个 \\(i\\) 都加 \\(q_iV_i\\)，则每一对 \\((i,j)\\) 会被算两次（\\(i\\) 的式子中一次、\\(j\\) 的式子中一次），所以必须乘 \\(\\dfrac12\\)；自能项 \\(i=j\\) 不计。 · If \\(q_iV_i\\) is summed over every \\(i\\), each pair \\((i,j)\\) is counted twice—once in the term for \\(i\\) and once in the term for \\(j\\)—so the sum must be multiplied by \\(\\dfrac12\\); the self term \\(i=j\\) is excluded."
      },
      {
        "from": "电势-位置图像 · Potential-versus-position graph",
        "to": "电场分量 · Field component",
        "note": "把 \\(V(x+\\Delta x)-V(x)\\approx\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\Delta x\\) 与 \\(\\Delta V=-E_x\\Delta x\\) 比较，得到 \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)。斜率越负，电场沿 \\(+x\\) 越大。 · Comparing \\(V(x+\\Delta x)-V(x)\\approx\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\Delta x\\) with \\(\\Delta V=-E_x\\Delta x\\) gives \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\). A more negative slope means a larger field in the \\(+x\\) direction."
      },
      {
        "from": "等势线 · Equipotential",
        "to": "粒子能量变化 · Particle energy change",
        "note": "沿等势线移动时 \\(\\Delta V=0\\)，电场力不做功，\\(K\\) 不变。跨越等势线时 \\(\\Delta U=q\\Delta V\\)，再由 \\(K_i+U_i=K_f+U_f\\) 求速度或转折点。 · Along an equipotential, \\(\\Delta V=0\\), so the electric force does no work and \\(K\\) is unchanged. Crossing equipotentials gives \\(\\Delta U=q\\Delta V\\), and \\(K_i+U_i=K_f+U_f\\) then gives the speed or turning point."
      }
    ],
    "conditions": [
      "静电场（保守场）；电荷缓慢移动，忽略辐射、摩擦和其他非静电力。 · Electrostatic field (conservative); charges move slowly, with radiation, friction, and other non-electrostatic forces negligible.",
      "零势能点必须统一；点电荷和有限带电体通常取无穷远为零，也可另选但全程不能改变。 · The zero of potential energy must be consistent; for point charges and finite bodies it is usually at infinity, and any other choice must be kept throughout.",
      "点电荷公式要求点电荷或球对称分布的外部；\\(r\\) 为球心距离，电荷不能重叠（\\(r\\to0\\) 时公式发散）。 · The point-charge formula requires point charges or the exterior of a spherically symmetric distribution; \\(r\\) is the center-to-center distance, and charges cannot overlap (\\(r\\to0\\) makes the formula diverge).",
      "多电荷求和时每对只算一次；不把电荷与自身场的自能算进去。 · In a multi-charge sum each pair is counted once; the self-energy of a charge with its own field is excluded.",
      "若 \\(q\\) 会显著改变其他电荷的分布（导体、介质、可移动电荷），\\(V\\) 不是固定的，需先求平衡后的电势，或直接用电荷-电荷逐对求和。 · If \\(q\\) significantly redistributes other charges (conductors, dielectrics, mobile charge), \\(V\\) is not fixed; find the equilibrium potential first or use pairwise charge-charge summation directly.",
      "连续分布需用积分；离散求和是其近似或极限，积分时注意电荷元之间的距离。 · Continuous distributions require integration; discrete sums are approximations or limits, and the distance between charge elements must be handled carefully.",
      "只有电场力做功时才能直接用 \\(K+U=\\text{常数}\\)；有外力时用 \\(W_{\\mathrm{ext}}=\\Delta U+\\Delta K\\)。 · Use \\(K+U=\\text{constant}\\) only when the electric force is the only work-doing force; with external work, use \\(W_{\\mathrm{ext}}=\\Delta U+\\Delta K\\).",
      "\\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\) 是一维或沿某方向的分量关系；一般情形电场是电势的负梯度。 · \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\) is a one-dimensional or directional component relation; in general the field is the negative gradient of the potential.",
      "非相对论、宏观静止电荷分布；运动电荷的磁场效应和辐射不在本章讨论。 · Nonrelativistic, macroscopically stationary charge distributions; magnetic effects and radiation from moving charges are outside this chapter."
    ],
    "keyPoints": [
      "一般定义是力线积分：\\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\)，不是只对点电荷成立。 · The general definition is a line integral: \\(\\Delta U=-\\int_A^B\\vec F_e\\cdot\\mathrm{d}\\vec r\\), valid beyond point charges.",
      "静电场保守，电势能变化与路径无关；闭合路径做功为零。 · The electrostatic field is conservative, so potential-energy change is path-independent; the work around a closed path is zero.",
      "电荷在给定电势中 \\(U=qV\\)，\\(V\\) 必须由其他电荷产生。 · A charge in a given potential has \\(U=qV\\), where \\(V\\) must be produced by other charges.",
      "两个点电荷 \\(U=k\\dfrac{q_1q_2}{r}\\)；同号为正，异号为负。 · Two point charges have \\(U=k\\dfrac{q_1q_2}{r}\\); like signs give positive and opposite signs give negative.",
      "多电荷总电势能逐对求和，\\(n\\) 个电荷有 \\(\\dfrac{n(n-1)}{2}\\) 对，每对只算一次。 · Total potential energy sums over pairs; \\(n\\) charges have \\(\\dfrac{n(n-1)}{2}\\) pairs, each counted once.",
      "\\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\) 是防双计数的校验式。 · \\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\) is the double-counting-safe check.",
      "组装功等于总电势能；负的总电势能表示束缚系统。 · Assembly work equals the total potential energy; negative total potential energy indicates a bound system.",
      "\\(V(x)\\) 斜率的负值是 \\(E_x\\)；等势线与电场垂直，沿等势线移动不做功。 · The negative slope of \\(V(x)\\) is \\(E_x\\); equipotentials are perpendicular to the field, and moving along one does no work.",
      "只有电场力做功时 \\(K+U\\) 守恒，可用转折点判断粒子能否进入某区域。 · When only the electric force does work, \\(K+U\\) is conserved, and turning points determine whether a particle can enter a region."
    ],
    "misconceptions": [
      "认为电势能属于单个电荷；电势能属于电荷与电场组成的系统。 · Thinking potential energy belongs to a single charge; it belongs to the system of charges and field.",
      "把 \\(U=qV\\) 中的 \\(V\\) 当成电荷自己产生的电势；\\(V\\) 必须来自其他电荷。 · Treating the \\(V\\) in \\(U=qV\\) as the charge's own potential; \\(V\\) must come from other charges.",
      "多电荷时把所有有序对都相加，导致每对算两次；应按 \\(i<j\\) 求和或乘 \\(\\dfrac12\\)。 · Adding all ordered pairs for multiple charges, double counting each pair; sum over \\(i<j\\) or multiply by \\(\\dfrac12\\).",
      "把 \\(n\\) 个电荷的配对数当成 \\(n(n-1)\\)；正确的配对数只有 \\(\\dfrac{n(n-1)}{2}\\)。 · Taking the number of pairs among \\(n\\) charges as \\(n(n-1)\\); the correct number is \\(\\dfrac{n(n-1)}{2}\\).",
      "认为电场力做正功时电势能增加；实际上 \\(W_{\\mathrm{field}}=-\\Delta U\\)，电场力做正功电势能减少。 · Thinking potential energy increases when the electric force does positive work; actually \\(W_{\\mathrm{field}}=-\\Delta U\\), so positive field work decreases potential energy.",
      "认为沿不同路径移动电荷电势能变化不同；静电场保守，结果与路径无关。 · Thinking different paths give different potential-energy changes; the electrostatic field is conservative, so the result is path-independent.",
      "认为电势为零处电场一定为零；\\(V=0\\) 只是各贡献的代数和为零，电场是斜率或梯度，可能不为零。 · Thinking the field must be zero where the potential is zero; \\(V=0\\) only means the algebraic sum of contributions vanishes, while the field is a slope/gradient and may be nonzero.",
      "把电势能与电势混淆；电势是单位电荷的势能，电势能还要乘电荷量并带符号。 · Confusing potential energy with potential; potential is energy per unit charge, while potential energy also includes the charge magnitude and sign.",
      "认为零势能点只能取无穷远；可以另选，但同一题中必须保持一致。 · Thinking the zero of potential energy must be at infinity; another choice is allowed but must be consistent within a problem."
    ],
    "examples": [
      {
        "title": "例 1 · 两点电荷的电势能 · Example 1: Potential energy of two point charges",
        "prompt": "\\(q_1=+3.0\\,\\mu\\mathrm{C}\\)，\\(q_2=-5.0\\,\\mu\\mathrm{C}\\)，相距 \\(0.20\\,\\mathrm{m}\\)。以无穷远为零，求系统电势能，并说明把两电荷分开到无穷远时外力与电场力各做多少功。 · \\(q_1=+3.0\\,\\mu\\mathrm{C}\\) and \\(q_2=-5.0\\,\\mu\\mathrm{C}\\) are \\(0.20\\,\\mathrm{m}\\) apart. With zero at infinity, find the potential energy of the system and state the work done by an external agent and by the electric force when the charges are separated to infinity.",
        "steps": [
          "\\(U=k\\dfrac{q_1q_2}{r}=\\dfrac{(9.0\\times10^{9})(3.0\\times10^{-6})(-5.0\\times10^{-6})}{0.20}\\)。 · \\(U=k\\dfrac{q_1q_2}{r}=\\dfrac{(9.0\\times10^{9})(3.0\\times10^{-6})(-5.0\\times10^{-6})}{0.20}\\).",
          "\\(U=-0.675\\,\\mathrm{J}\\approx-0.68\\,\\mathrm{J}\\)，负号表示异号电荷相互吸引，系统比无穷远时能量低。 · \\(U=-0.675\\,\\mathrm{J}\\approx-0.68\\,\\mathrm{J}\\); the negative sign means the opposite charges attract and the system has less energy than at infinity.",
          "分开到无穷远：\\(\\Delta U=0-(-0.675)=+0.675\\,\\mathrm{J}\\)，外力做正功 \\(0.675\\,\\mathrm{J}\\)；电场力做负功 \\(-0.675\\,\\mathrm{J}\\)。 · Separating to infinity: \\(\\Delta U=0-(-0.675)=+0.675\\,\\mathrm{J}\\), so the external agent does \\(+0.675\\,\\mathrm{J}\\) and the electric force does \\(-0.675\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(U\\approx-0.68\\,\\mathrm{J}\\)；外力做功 \\(+0.68\\,\\mathrm{J}\\)，电场力做功 \\(-0.68\\,\\mathrm{J}\\)。 · \\(U\\approx-0.68\\,\\mathrm{J}\\); the external work is \\(+0.68\\,\\mathrm{J}\\) and the electric-force work is \\(-0.68\\,\\mathrm{J}\\).",
        "solutionLatex": "U=k\\dfrac{q_1q_2}{r}\\approx-0.68\\,\\mathrm{J}"
      },
      {
        "title": "例 2 · 由电势求电势能 · Example 2: Potential energy from potential",
        "prompt": "一个点电荷 \\(q=+2.0\\,\\mu\\mathrm{C}\\) 放在某配置在 P 点产生的电势 \\(V=+450\\,\\mathrm{V}\\) 处。求它的电势能。若换成 \\(q=-2.0\\,\\mu\\mathrm{C}\\)，结果如何？ · A point charge \\(q=+2.0\\,\\mu\\mathrm{C}\\) is placed at a point P where a configuration produces \\(V=+450\\,\\mathrm{V}\\). Find its potential energy. What if \\(q=-2.0\\,\\mu\\mathrm{C}\\) instead?",
        "steps": [
          "\\(U=qV=(2.0\\times10^{-6})(450)=9.0\\times10^{-4}\\,\\mathrm{J}\\)。 · \\(U=qV=(2.0\\times10^{-6})(450)=9.0\\times10^{-4}\\,\\mathrm{J}\\).",
          "换成负电荷：\\(U=(-2.0\\times10^{-6})(450)=-9.0\\times10^{-4}\\,\\mathrm{J}\\)。 · For the negative charge: \\(U=(-2.0\\times10^{-6})(450)=-9.0\\times10^{-4}\\,\\mathrm{J}\\).",
          "这里 \\(V\\) 是其他电荷在 P 点产生的电势，不应把 \\(q\\) 自己产生的电势算进去；若 \\(q\\) 大到会改变其他电荷分布，应改用逐对求和。 · Here \\(V\\) is the potential at P due to the other charges; do not include the potential produced by \\(q\\) itself. If \\(q\\) is large enough to redistribute the other charges, use pairwise summation instead."
        ],
        "solution": "正电荷 \\(U=+9.0\\times10^{-4}\\,\\mathrm{J}\\)；负电荷 \\(U=-9.0\\times10^{-4}\\,\\mathrm{J}\\)。 · The positive charge has \\(U=+9.0\\times10^{-4}\\,\\mathrm{J}\\); the negative charge has \\(U=-9.0\\times10^{-4}\\,\\mathrm{J}\\).",
        "solutionLatex": "U=qV=\\pm9.0\\times10^{-4}\\,\\mathrm{J}"
      },
      {
        "title": "例 3 · 三电荷逐对求和 · Example 3: Pairwise sum for three charges",
        "prompt": "三个点电荷位于直角三角形顶点：\\(q_1=+2.0\\,\\mu\\mathrm{C}\\) 在 \\((0,0)\\)，\\(q_2=-3.0\\,\\mu\\mathrm{C}\\) 在 \\((0.30\\,\\mathrm{m},0)\\)，\\(q_3=+1.0\\,\\mu\\mathrm{C}\\) 在 \\((0,0.40\\,\\mathrm{m})\\)。求系统总电势能。 · Three point charges sit at the vertices of a right triangle: \\(q_1=+2.0\\,\\mu\\mathrm{C}\\) at \\((0,0)\\), \\(q_2=-3.0\\,\\mu\\mathrm{C}\\) at \\((0.30\\,\\mathrm{m},0)\\), and \\(q_3=+1.0\\,\\mu\\mathrm{C}\\) at \\((0,0.40\\,\\mathrm{m})\\). Find the total potential energy of the system.",
        "steps": [
          "三对距离：\\(r_{12}=0.30\\,\\mathrm{m}\\)，\\(r_{13}=0.40\\,\\mathrm{m}\\)，\\(r_{23}=\\sqrt{0.30^{2}+0.40^{2}}=0.50\\,\\mathrm{m}\\)。 · The three pair distances are \\(r_{12}=0.30\\,\\mathrm{m}\\), \\(r_{13}=0.40\\,\\mathrm{m}\\), and \\(r_{23}=\\sqrt{0.30^{2}+0.40^{2}}=0.50\\,\\mathrm{m}\\).",
          "\\(U_{12}=k\\dfrac{q_1q_2}{r_{12}}=(9.0\\times10^{9})\\dfrac{(2.0\\times10^{-6})(-3.0\\times10^{-6})}{0.30}=-0.18\\,\\mathrm{J}\\)。 · \\(U_{12}=k\\dfrac{q_1q_2}{r_{12}}=(9.0\\times10^{9})\\dfrac{(2.0\\times10^{-6})(-3.0\\times10^{-6})}{0.30}=-0.18\\,\\mathrm{J}\\).",
          "\\(U_{13}=k\\dfrac{(2.0\\times10^{-6})(1.0\\times10^{-6})}{0.40}=+0.045\\,\\mathrm{J}\\)；\\(U_{23}=k\\dfrac{(-3.0\\times10^{-6})(1.0\\times10^{-6})}{0.50}=-0.054\\,\\mathrm{J}\\)。 · \\(U_{13}=k\\dfrac{(2.0\\times10^{-6})(1.0\\times10^{-6})}{0.40}=+0.045\\,\\mathrm{J}\\); \\(U_{23}=k\\dfrac{(-3.0\\times10^{-6})(1.0\\times10^{-6})}{0.50}=-0.054\\,\\mathrm{J}\\).",
          "\\(U_{\\mathrm{total}}=U_{12}+U_{13}+U_{23}=-0.18+0.045-0.054=-0.189\\,\\mathrm{J}\\approx-0.19\\,\\mathrm{J}\\)。 · \\(U_{\\mathrm{total}}=U_{12}+U_{13}+U_{23}=-0.18+0.045-0.054=-0.189\\,\\mathrm{J}\\approx-0.19\\,\\mathrm{J}\\).",
          "三个电荷共有 \\(3\\) 对，不是 \\(6\\) 对；若把 \\(U_{12}\\) 和 \\(U_{21}\\) 都加，就会双计数。 · Three charges have \\(3\\) pairs, not \\(6\\); adding both \\(U_{12}\\) and \\(U_{21}\\) would double count."
        ],
        "solution": "\\(U_{\\mathrm{total}}\\approx-0.19\\,\\mathrm{J}\\)，系统是束缚的。 · \\(U_{\\mathrm{total}}\\approx-0.19\\,\\mathrm{J}\\), so the system is bound.",
        "solutionLatex": "U_{\\mathrm{total}}\\approx-0.19\\,\\mathrm{J}"
      },
      {
        "title": "例 4 · 组装功与路径无关 · Example 4: Assembly work and path independence",
        "prompt": "固定 \\(q_1=+2.0\\,\\mu\\mathrm{C}\\)，把 \\(q_2=+5.0\\,\\mu\\mathrm{C}\\) 从无穷远缓慢移到距 \\(q_1\\) \\(0.20\\,\\mathrm{m}\\) 处。求外力做功、电场力做功和系统电势能变化。若沿不同路径移动，结果是否改变？ · With \\(q_1=+2.0\\,\\mu\\mathrm{C}\\) fixed, \\(q_2=+5.0\\,\\mu\\mathrm{C}\\) is moved slowly from infinity to \\(0.20\\,\\mathrm{m}\\) from \\(q_1\\). Find the external work, the electric-force work, and the change in potential energy. Does a different path change the result?",
        "steps": [
          "以无穷远为零，末态 \\(U=k\\dfrac{q_1q_2}{r}=(9.0\\times10^{9})\\dfrac{(2.0\\times10^{-6})(5.0\\times10^{-6})}{0.20}=+0.45\\,\\mathrm{J}\\)。 · With zero at infinity, the final state has \\(U=k\\dfrac{q_1q_2}{r}=(9.0\\times10^{9})\\dfrac{(2.0\\times10^{-6})(5.0\\times10^{-6})}{0.20}=+0.45\\,\\mathrm{J}\\).",
          "\\(\\Delta U=U_f-U_i=+0.45\\,\\mathrm{J}\\)。 · \\(\\Delta U=U_f-U_i=+0.45\\,\\mathrm{J}\\).",
          "缓慢移动时动能不变，外力做功 \\(W_{\\mathrm{ext}}=\\Delta U=+0.45\\,\\mathrm{J}\\)；电场力做功 \\(W_{\\mathrm{field}}=-\\Delta U=-0.45\\,\\mathrm{J}\\)。 · Slow motion keeps the kinetic energy unchanged, so the external work is \\(W_{\\mathrm{ext}}=\\Delta U=+0.45\\,\\mathrm{J}\\), while the electric-force work is \\(W_{\\mathrm{field}}=-\\Delta U=-0.45\\,\\mathrm{J}\\).",
          "静电场是保守场，电势能变化只取决于起点和终点，与路径无关；沿任意路径结果相同。 · The electrostatic field is conservative, so the potential-energy change depends only on the endpoints, not the path; any path gives the same result."
        ],
        "solution": "\\(\\Delta U=+0.45\\,\\mathrm{J}\\)，外力做功 \\(+0.45\\,\\mathrm{J}\\)，电场力做功 \\(-0.45\\,\\mathrm{J}\\)；与路径无关。 · \\(\\Delta U=+0.45\\,\\mathrm{J}\\), external work \\(+0.45\\,\\mathrm{J}\\), electric-force work \\(-0.45\\,\\mathrm{J}\\); the result is path-independent.",
        "solutionLatex": "W_{\\mathrm{ext}}=\\Delta U=k\\dfrac{q_1q_2}{r}=+0.45\\,\\mathrm{J}"
      },
      {
        "title": "例 5 · V(x) 斜率、电场与粒子能量 · Example 5: Slope of V(x), field, and particle energy",
        "prompt": "某区域电势 \\(V(x)=600-400x\\)，其中 \\(V\\) 以伏特为单位、\\(x\\) 以米为单位。一个 \\(q=-2.0\\,\\mu\\mathrm{C}\\) 的粒子从 \\(x=0.20\\,\\mathrm{m}\\) 由静止释放，只在电场力作用下运动。求电场 \\(E_x\\)；若粒子从 \\(x=0.20\\) 移到 \\(x=0.50\\)，求 \\(\\Delta U\\) 与 \\(\\Delta K\\)；并判断由静止释放时它实际向哪边运动。 · In a region the potential is \\(V(x)=600-400x\\), with \\(V\\) in volts and \\(x\\) in meters. A particle with \\(q=-2.0\\,\\mu\\mathrm{C}\\) is released from rest at \\(x=0.20\\,\\mathrm{m}\\) and moves only under the electric force. Find \\(E_x\\); if the particle moves from \\(x=0.20\\) to \\(x=0.50\\), find \\(\\Delta U\\) and \\(\\Delta K\\); and determine which way it actually moves when released from rest.",
        "steps": [
          "\\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}=-(-400)=+400\\,\\mathrm{V/m}\\)，电场沿 \\(+x\\) 方向。 · \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}=-(-400)=+400\\,\\mathrm{V/m}\\), so the field points in the \\(+x\\) direction.",
          "\\(V(0.20)=600-400(0.20)=520\\,\\mathrm{V}\\)，\\(V(0.50)=600-400(0.50)=400\\,\\mathrm{V}\\)。 · \\(V(0.20)=600-400(0.20)=520\\,\\mathrm{V}\\) and \\(V(0.50)=600-400(0.50)=400\\,\\mathrm{V}\\).",
          "\\(U(0.20)=qV=(-2.0\\times10^{-6})(520)=-1.04\\times10^{-3}\\,\\mathrm{J}\\)；\\(U(0.50)=(-2.0\\times10^{-6})(400)=-8.0\\times10^{-4}\\,\\mathrm{J}\\)。 · \\(U(0.20)=qV=(-2.0\\times10^{-6})(520)=-1.04\\times10^{-3}\\,\\mathrm{J}\\); \\(U(0.50)=(-2.0\\times10^{-6})(400)=-8.0\\times10^{-4}\\,\\mathrm{J}\\).",
          "从 \\(x=0.20\\) 到 \\(0.50\\)，\\(\\Delta U=+2.4\\times10^{-4}\\,\\mathrm{J}\\)；只有电场力做功时 \\(\\Delta K=-\\Delta U=-2.4\\times10^{-4}\\,\\mathrm{J}\\)，动能减少。 · From \\(x=0.20\\) to \\(0.50\\), \\(\\Delta U=+2.4\\times10^{-4}\\,\\mathrm{J}\\); with only the electric force doing work, \\(\\Delta K=-\\Delta U=-2.4\\times10^{-4}\\,\\mathrm{J}\\), so the kinetic energy decreases.",
          "负电荷受力方向与电场相反，即沿 \\(-x\\)；所以由静止释放时粒子向左加速，向电势更高处运动，电势能减小、动能增加。 · A negative charge feels a force opposite to the field, i.e., in the \\(-x\\) direction; released from rest, it accelerates left toward higher potential, so its potential energy decreases and its kinetic energy increases."
        ],
        "solution": "\\(E_x=+400\\,\\mathrm{V/m}\\)；向右移动时 \\(\\Delta U=+2.4\\times10^{-4}\\,\\mathrm{J}\\)、\\(\\Delta K=-2.4\\times10^{-4}\\,\\mathrm{J}\\)；由静止释放时粒子向左加速。 · \\(E_x=+400\\,\\mathrm{V/m}\\); moving right gives \\(\\Delta U=+2.4\\times10^{-4}\\,\\mathrm{J}\\) and \\(\\Delta K=-2.4\\times10^{-4}\\,\\mathrm{J}\\); released from rest, the particle accelerates left.",
        "solutionLatex": "E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}=+400\\,\\mathrm{V/m}"
      },
      {
        "title": "例 6 · 多点电荷的电势叠加 · Example 6: Superposition of potential from multiple charges",
        "prompt": "\\(q_1=+2.0\\,\\mu\\mathrm{C}\\) 在 \\(x=0\\)，\\(q_2=-2.0\\,\\mu\\mathrm{C}\\) 在 \\(x=0.40\\,\\mathrm{m}\\)。求 \\(x=0.20\\,\\mathrm{m}\\) 与 \\(x=0.60\\,\\mathrm{m}\\) 处的电势；把 \\(q_3=+1.0\\,\\mu\\mathrm{C}\\) 放在这两点时，电势能分别是多少？\\(V=0\\) 是否意味着电场为零？ · \\(q_1=+2.0\\,\\mu\\mathrm{C}\\) is at \\(x=0\\) and \\(q_2=-2.0\\,\\mu\\mathrm{C}\\) is at \\(x=0.40\\,\\mathrm{m}\\). Find the potential at \\(x=0.20\\,\\mathrm{m}\\) and \\(x=0.60\\,\\mathrm{m}\\). What is the potential energy of \\(q_3=+1.0\\,\\mu\\mathrm{C}\\) at each point? Does \\(V=0\\) mean the field is zero?",
        "steps": [
          "\\(V=k\\left(\\dfrac{q_1}{r_1}+\\dfrac{q_2}{r_2}\\right)\\)，电势是标量，直接取代数和。 · \\(V=k\\left(\\dfrac{q_1}{r_1}+\\dfrac{q_2}{r_2}\\right)\\); potential is a scalar, so the contributions add algebraically.",
          "在 \\(x=0.20\\,\\mathrm{m}\\)：\\(r_1=r_2=0.20\\,\\mathrm{m}\\)，\\(V=(9.0\\times10^{9})\\left(\\dfrac{2.0\\times10^{-6}}{0.20}+\\dfrac{-2.0\\times10^{-6}}{0.20}\\right)=0\\)。 · At \\(x=0.20\\,\\mathrm{m}\\): \\(r_1=r_2=0.20\\,\\mathrm{m}\\), so \\(V=(9.0\\times10^{9})\\left(\\dfrac{2.0\\times10^{-6}}{0.20}+\\dfrac{-2.0\\times10^{-6}}{0.20}\\right)=0\\).",
          "在 \\(x=0.60\\,\\mathrm{m}\\)：\\(r_1=0.60\\,\\mathrm{m}\\)，\\(r_2=0.20\\,\\mathrm{m}\\)，\\(V=(9.0\\times10^{9})\\left(\\dfrac{2.0\\times10^{-6}}{0.60}-\\dfrac{2.0\\times10^{-6}}{0.20}\\right)=-6.0\\times10^{4}\\,\\mathrm{V}\\)。 · At \\(x=0.60\\,\\mathrm{m}\\): \\(r_1=0.60\\,\\mathrm{m}\\) and \\(r_2=0.20\\,\\mathrm{m}\\), so \\(V=(9.0\\times10^{9})\\left(\\dfrac{2.0\\times10^{-6}}{0.60}-\\dfrac{2.0\\times10^{-6}}{0.20}\\right)=-6.0\\times10^{4}\\,\\mathrm{V}\\).",
          "\\(U=q_3V\\)：在中点 \\(U=0\\)；在 \\(x=0.60\\,\\mathrm{m}\\)，\\(U=(1.0\\times10^{-6})(-6.0\\times10^{4})=-0.060\\,\\mathrm{J}\\)。 · \\(U=q_3V\\): at the midpoint \\(U=0\\); at \\(x=0.60\\,\\mathrm{m}\\), \\(U=(1.0\\times10^{-6})(-6.0\\times10^{4})=-0.060\\,\\mathrm{J}\\).",
          "中点 \\(V=0\\) 只是两个贡献抵消，电场并不为零：正电荷在左、负电荷在右，中点电场指向右（由正指向负）。 · The midpoint \\(V=0\\) only means the two contributions cancel; the field is not zero: with positive charge on the left and negative on the right, the midpoint field points right (from positive toward negative)."
        ],
        "solution": "\\(V(0.20)=0\\)，\\(U=0\\)；\\(V(0.60)=-6.0\\times10^{4}\\,\\mathrm{V}\\)，\\(U=-0.060\\,\\mathrm{J}\\)；\\(V=0\\) 处电场不为零。 · \\(V(0.20)=0\\) and \\(U=0\\); \\(V(0.60)=-6.0\\times10^{4}\\,\\mathrm{V}\\) and \\(U=-0.060\\,\\mathrm{J}\\); the field is nonzero where \\(V=0\\).",
        "solutionLatex": "V(0.20)=0,\\qquad V(0.60)=-6.0\\times10^{4}\\,\\mathrm{V}"
      }
    ],
    "examTips": [
      "先定零势能点，再写 \\(U\\)；点电荷和有限带电体通常取无穷远为零。 · Choose the zero of potential energy first; for point charges and finite bodies it is usually at infinity.",
      "看到“一般形式”或非点电荷，先想 \\(U=qV\\) 或力线积分，不要直接套 \\(k\\dfrac{q_1q_2}{r}\\)。 · When a problem says “general” or involves non-point charges, start from \\(U=qV\\) or the line integral instead of applying \\(k\\dfrac{q_1q_2}{r}\\) directly.",
      "多电荷先画配对表，标出每一对距离，按 \\(i<j\\) 求和；用 \\(\\dfrac12\\sum q_iV_i\\) 检查。 · For multiple charges, make a pair table, label each pair distance, sum over \\(i<j\\), and check with \\(\\dfrac12\\sum q_iV_i\\).",
      "符号：同号 \\(U>0\\)，异号 \\(U<0\\)；电场力做正功时 \\(U\\) 减小。 · Signs: like charges give \\(U>0\\), opposite charges give \\(U<0\\); positive electric-force work decreases \\(U\\).",
      "\\(V(x)\\) 图斜率取负得 \\(E_x\\)；等势线越密电场越强，沿等势线移动不做功。 · The negative slope of a \\(V(x)\\) graph gives \\(E_x\\); closer equipotentials mean a stronger field, and moving along an equipotential does no work.",
      "能量题写 \\(K_i+U_i=K_f+U_f\\)，先判断是否有非电场力做功。 · For energy problems write \\(K_i+U_i=K_f+U_f\\), and first check whether non-electric forces do work.",
      "单位：\\(1\\,\\mathrm{V}=1\\,\\mathrm{J/C}\\)，\\(1\\,\\mathrm{eV}=1.6\\times10^{-19}\\,\\mathrm{J}\\)。 · Units: \\(1\\,\\mathrm{V}=1\\,\\mathrm{J/C}\\) and \\(1\\,\\mathrm{eV}=1.6\\times10^{-19}\\,\\mathrm{J}\\)."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.1",
        "title": "电势能 · Electric Potential Energy",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.2",
        "title": "电势 · Electric Potential",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.3",
        "title": "电势与场 · Electric Potential Due to Charge Distributions",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.4",
        "title": "电势差与功 · Conservation of Electric Energy",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.6",
        "title": "电池与化学电势差 · Batteries and Chemical Potential Difference",
        "relation": "相关 · related"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u9",
    "connections": [
      "上游：9.1 建立电势能、点电荷公式与功能关系；9.2 建立电势 \\(V\\) 与 \\(U=qV\\)，本节把它们推广到积分形式和任意多电荷系统。 · Upstream: 9.1 establishes potential energy, the point-charge formula, and work–energy relations; 9.2 establishes potential \\(V\\) and \\(U=qV\\). This topic extends them to the integral form and arbitrary multi-charge systems.",
      "下游：9.4 用能量守恒处理粒子运动，9.6 用化学过程产生电势差；后续导体、电容器和电路问题都用到逐对求和与电势叠加。 · Downstream: 9.4 applies energy conservation to particle motion, and 9.6 uses chemical processes to produce potential differences; later conductor, capacitor, and circuit problems use pairwise summation and potential superposition.",
      "跨主题：电势叠加与场叠加平行但不同——电势是标量直接相加，电场是矢量按分量相加；\\(V=0\\) 不代表 \\(E=0\\)。 · Cross-topic: potential superposition parallels field superposition but differs—potential is a scalar added directly, while field is a vector added by components; \\(V=0\\) does not imply \\(E=0\\).",
      "科学本质：保守场与势能是等价的描述；势能属于系统，选择零点是建模约定，不改变物理结果。 · Nature of science: conservative fields and potential energy are equivalent descriptions; potential energy belongs to the system, and the zero reference is a modeling convention that does not change physical results."
    ],
    "intuitionDetailed": "电势能最容易错的地方，是把它当成“某个电荷自己拥有的能量”。更准确的图像是：电荷和它周围的电场共同组成系统，相对位置改变时系统能量改变。把电荷从 A 搬到 B，电场力做多少功，系统的电势能就减少多少，所以 \\(\\Delta U=-W_{\\mathrm{field}}\\)。静电场是保守场，路径可以任意选；实际计算时常选一条最方便的路径，例如沿电场线或沿等势线分段。若场由其他电荷产生，且其他电荷固定，则 \\(U=qV\\) 最方便：\\(V\\) 是“单位电荷的势能”，乘上 \\(q\\) 就是该电荷的势能；负电荷乘上正电势会得到负电势能，表示它在该处能量更低。对多个电荷，每一对之间都有一笔相互作用能，系统总能量是所有这些两两账目之和；因为每一对只发生一次，所以按 \\(i<j\\) 求和，或者用 \\(\\dfrac12\\sum q_iV_i\\) 并理解 \\(\\dfrac12\\) 的来源。组装系统时，外力做功等于总电势能；如果总电势能为负，说明系统被束缚，拆散它要外界输入能量。图像上，\\(V(x)\\) 的斜率给出电场，等势线是“电势相同的地形线”，粒子在等势线间运动时 \\(K+U\\) 守恒；这些图像工具能把代数结果和物理直觉连接起来。 · The most common mistake about potential energy is to treat it as energy owned by a single charge. A better picture is that the charge and the surrounding field together form a system, and their energy changes when their relative positions change. Moving a charge from A to B, the electric force does work, and the system's potential energy decreases by that amount, so \\(\\Delta U=-W_{\\mathrm{field}}\\). The electrostatic field is conservative, so any path may be used; in practice choose the most convenient one, such as segments along field lines or equipotentials. If the field is produced by other fixed charges, \\(U=qV\\) is most convenient: \\(V\\) is the potential energy per unit charge, and multiplying by \\(q\\) gives the charge's potential energy; a negative charge times a positive potential gives negative potential energy, meaning it is lower in energy there. For several charges, every pair has one interaction-energy entry, and the total is the sum of all pairwise entries; since each pair interacts once, sum over \\(i<j\\), or use \\(\\dfrac12\\sum q_iV_i\\) with an understanding of where the \\(\\dfrac12\\) comes from. When assembling a system, the external work equals the total potential energy; a negative total means the system is bound and requires external energy to break apart. Graphically, the slope of \\(V(x)\\) gives the field, equipotentials are “contour lines” of constant potential, and \\(K+U\\) is conserved as a particle moves between them; these graphical tools connect algebra with physical intuition.",
    "development": [
      "从功的定义与保守力出发，写出 \\(\\Delta U=-\\int\\vec F_e\\cdot\\mathrm{d}\\vec r\\)，并说明路径无关。 · Start from the definition of work and conservative forces, write \\(\\Delta U=-\\int\\vec F_e\\cdot\\mathrm{d}\\vec r\\), and explain path independence.",
      "由 \\(V=\\dfrac{U}{q}\\) 得到 \\(U=qV\\)，区分“电荷自己的电势”和“其他电荷产生的电势”。 · Obtain \\(U=qV\\) from \\(V=\\dfrac{U}{q}\\), and distinguish a charge's own potential from the potential produced by other charges.",
      "把库仑力从无穷远积分到 \\(r\\)，得到两点电荷的 \\(U=k\\dfrac{q_1q_2}{r}\\)。 · Integrate the Coulomb force from infinity to \\(r\\) to obtain \\(U=k\\dfrac{q_1q_2}{r}\\) for two point charges.",
      "用逐对组装法处理三个电荷，写出每一对的距离和贡献，强调每对只算一次。 · Use pairwise assembly for three charges, write each pair distance and contribution, and emphasize counting each pair once.",
      "用 \\(\\dfrac12\\sum q_iV_i\\) 校验逐对求和，解释因子 \\(\\dfrac12\\) 与自能排除。 · Check the pairwise sum with \\(\\dfrac12\\sum q_iV_i\\), explaining the factor \\(\\dfrac12\\) and the exclusion of self-energy.",
      "把 \\(V(x)\\) 斜率、等势线和 \\(K+U\\) 守恒用于粒子运动问题，完成图像与代数的互译。 · Apply the \\(V(x)\\) slope, equipotentials, and \\(K+U\\) conservation to particle motion, translating between graphs and algebra."
    ],
    "checks": [
      "为什么电势能变化可以用 \\(\\Delta U=q\\Delta V\\) 计算，而不必知道具体路径？ · Why can the potential-energy change be calculated with \\(\\Delta U=q\\Delta V\\) without knowing the path?",
      "\\(U=qV\\) 中的 \\(V\\) 是否包括电荷 \\(q\\) 自己产生的电势？为什么？ · Does the \\(V\\) in \\(U=qV\\) include the potential produced by \\(q\\) itself? Why or why not?",
      "三个点电荷共有几对相互作用？把六个有序对都相加会得到什么错误结果？ · How many interacting pairs do three point charges have? What goes wrong if all six ordered pairs are added?",
      "\\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\) 中的 \\(\\dfrac12\\) 从何而来？ · Where does the \\(\\dfrac12\\) in \\(U_{\\mathrm{total}}=\\dfrac12\\sum_i q_iV_i\\) come from?",
      "两个同号电荷靠近时电势能如何变化？异号电荷靠近时呢？ · How does the potential energy change as two like charges approach? What about two opposite charges?",
      "\\(V(x)\\) 图像的斜率如何给出电场？斜率正负分别对应什么方向？ · How does the slope of a \\(V(x)\\) graph give the field? What do positive and negative slopes mean for its direction?",
      "沿等势线移动电荷时，电场力做功多少？动能是否改变？ · How much work does the electric force do when a charge moves along an equipotential? Does its kinetic energy change?",
      "为什么 \\(V=0\\) 的点电场不一定为零？举一个例子。 · Why can the field be nonzero at a point where \\(V=0\\)? Give an example."
    ],
    "vocabulary": [
      {
        "termZh": "电势能",
        "termEn": "electric potential energy",
        "defZh": "电荷与电场组成的系统因相对位置而具有的能量，变化由电场力做功决定：\\(\\Delta U=-W_{\\mathrm{field}}\\)。",
        "defEn": "The energy of a system of charges and field due to their relative positions; its change is set by the work done by the electric force: \\(\\Delta U=-W_{\\mathrm{field}}\\)."
      },
      {
        "termZh": "保守力",
        "termEn": "conservative force",
        "defZh": "做功只取决于起点和终点、与路径无关的力；静电场力是保守力。",
        "defEn": "A force whose work depends only on the endpoints, not the path; the electrostatic force is conservative."
      },
      {
        "termZh": "力线积分",
        "termEn": "line integral of force",
        "defZh": "沿路径累加力与位移点积的积分 \\(\\int\\vec F\\cdot\\mathrm{d}\\vec r\\)，用于定义一般电势能变化。",
        "defEn": "The integral \\(\\int\\vec F\\cdot\\mathrm{d}\\vec r\\) that accumulates the force–displacement dot product along a path, used to define the general potential-energy change."
      },
      {
        "termZh": "电势",
        "termEn": "electric potential",
        "defZh": "单位电荷的电势能，\\(V=\\dfrac{U}{q}\\)；由其他电荷产生，是标量。",
        "defEn": "Potential energy per unit charge, \\(V=\\dfrac{U}{q}\\); produced by other charges and a scalar."
      },
      {
        "termZh": "逐对求和",
        "termEn": "pairwise summation",
        "defZh": "多电荷系统总电势能等于每一对相互作用之和，按 \\(i<j\\) 只计一次。",
        "defEn": "The total potential energy of a multi-charge system equals the sum over each interacting pair, counted once with \\(i<j\\)."
      },
      {
        "termZh": "双计数",
        "termEn": "double counting",
        "defZh": "把同一对电荷的相互作用在 \\(i\\) 对 \\(j\\) 和 \\(j\\) 对 \\(i\\) 中各算一次的错误。",
        "defEn": "The error of counting the same pair interaction once as \\(i\\)-on-\\(j\\) and again as \\(j\\)-on-\\(i\\)."
      },
      {
        "termZh": "组装功",
        "termEn": "assembly work",
        "defZh": "把电荷从无穷远缓慢搬到目标位置时外力所做的功，等于系统总电势能。",
        "defEn": "The external work needed to bring charges slowly from infinity to their final positions; it equals the total potential energy."
      },
      {
        "termZh": "等势线",
        "termEn": "equipotential line",
        "defZh": "电势相同的点的连线或曲面；与电场垂直，沿其移动电场力不做功。",
        "defEn": "A line or surface on which the potential is the same; it is perpendicular to the field, and no electric work is done along it."
      }
    ]
  },
  "9.6": {
    "id": "em/em-u9/9.6",
    "subject": "em",
    "chapterId": "em-u9",
    "unitCode": "9",
    "unitTitleZh": "电势",
    "unitTitleEn": "Electric Potential",
    "code": "9.6",
    "titleZh": "电池与化学电势差",
    "titleEn": "Batteries and Chemical Potential Difference",
    "layer": "ap",
    "summary": "电势差不仅可以由电荷分布产生，也可以由化学过程把正负电荷分开而产生。电池内部，电极上的氧化还原反应把电子从一端转移到另一端，电解质中的离子定向移动完成内部电荷输运；化学作用提供非静电力，把正电荷从低电势的负极搬到高电势的正极，从而在两端维持电势差。单位电荷获得的化学能定义为电动势 \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)；开路时端电压等于电动势，有电流时 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)。电池不是电荷仓库，而是把化学能转换为电能的“电荷泵”；AP CED 只要求定性解释化学分离电荷，不要求具体半反应、标准电极电势或 Nernst 方程。 · A potential difference can arise not only from a charge distribution but also from chemical processes that separate positive and negative charge. Inside a battery, oxidation–reduction reactions at the electrodes transfer electrons from one side to the other, and ions in the electrolyte move to complete internal charge transport; the chemical interaction provides a non-electrostatic force that moves positive charge from the low-potential negative terminal to the high-potential positive terminal, maintaining a potential difference. The chemical energy per unit charge is the emf \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\); open-circuit terminal voltage equals the emf, and under current \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\). A battery is not a charge reservoir but a charge pump converting chemical energy into electric energy; the AP CED requires only a qualitative explanation of chemical charge separation, not specific half-reactions, standard electrode potentials, or the Nernst equation.",
    "learningObjectives": [
      "能用 \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\) 描述多个带电体配置产生的电势，说明电势是标量、\\(V=0\\) 不代表 \\(E=0\\)，并用 \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\) 与等势线分析电场。 · Use \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\) to describe the potential due to a configuration of charged objects, explain that potential is a scalar and \\(V=0\\) does not imply \\(E=0\\), and analyze the field with \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\) and equipotentials.",
      "能解释电池中的化学过程如何把正负电荷分开、产生电势差，并说明非静电力、电极、电解质和离子流的作用。 · Explain how chemical processes in a battery separate positive and negative charge to produce a potential difference, and describe the roles of the non-electrostatic force, electrodes, electrolyte, and ion flow.",
      "能用 \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)、\\(V_{\\mathrm{term}}=\\varepsilon-Ir\\) 与功率关系计算电动势、端电压、内阻损耗和效率，并区分电动势与端电压。 · Use \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\), \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\), and power relations to calculate emf, terminal voltage, internal dissipation, and efficiency, and distinguish emf from terminal voltage.",
      "能区分电池与电容器，说明电池维持近似恒定电动势而电容器电压随电荷改变，并在 AP CED 边界内只做定性化学解释。 · Distinguish a battery from a capacitor, explain that a battery maintains a nearly constant emf while a capacitor's voltage changes with charge, and keep the chemical explanation qualitative within the AP CED boundary."
    ],
    "essentialKnowledge": [
      "多个带电体配置产生的电势是各点电荷电势的标量和：\\(V=\\sum_i k\\dfrac{q_i}{r_i}\\)，也可写成连续分布的 \\(V=k\\int\\dfrac{\\mathrm{d}q}{r}\\)。电势是标量，直接取代数和；零势点可任选，通常取无穷远。 · The potential due to a configuration of charged objects is the scalar sum of the point-charge potentials: \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\), or \\(V=k\\int\\dfrac{\\mathrm{d}q}{r}\\) for a continuous distribution. Potential is a scalar, so contributions add algebraically; the zero reference is arbitrary but usually taken at infinity.",
      "\\(V=0\\) 只表示各电荷贡献的代数和为零，不表示电场为零。电场是电势的负梯度：\\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)；等势线越密，电场越强，等势线与电场垂直。沿等势线移动电荷时电场力不做功；只有电场力做功时粒子的 \\(K+U\\) 守恒。 · \\(V=0\\) only means the algebraic sum of the charge contributions is zero; it does not mean the field is zero. The field is the negative gradient of the potential: \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\); closer equipotentials mean a stronger field, and equipotentials are perpendicular to the field. Moving a charge along an equipotential does no electric work, and when only the electric force does work, the particle's \\(K+U\\) is conserved.",
      "电势差也可以由化学过程产生：电池内部两种不同电极浸在电解质中，电极表面的氧化还原反应使电子从负极（阳极）转移到正极（阴极）；电子经外电路流动，正负离子在电解质中定向移动，完成内部电荷输运。 · A potential difference can also be produced by chemical processes: inside a battery, two different electrodes are immersed in an electrolyte, and oxidation–reduction reactions at the electrode surfaces transfer electrons from the negative electrode (anode) to the positive electrode (cathode); electrons flow through the external circuit while positive and negative ions move through the electrolyte, completing internal charge transport.",
      "化学反应提供非静电力，把正电荷从低电势的负极搬到高电势的正极，克服电场力做功，使正负电荷分开。开路时，化学驱动力与已建立的电场的阻力平衡，两端电势差达到稳定值。 · The chemical reaction provides a non-electrostatic force that moves positive charge from the low-potential negative terminal to the high-potential positive terminal, doing work against the electric field and separating charge. Open-circuit, the chemical driving force balances the opposing field, and the potential difference reaches a steady value.",
      "电动势定义为单位正电荷从负极经电源内部移到正极时非静电力所做的功：\\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)。单位是伏特，\\(1\\,\\mathrm{V}=1\\,\\mathrm{J/C}\\)。电动势由电源本身决定，不是作用在电荷上的“力”。 · The emf is the work done by the non-electrostatic force per unit positive charge moved from the negative to the positive terminal inside the source: \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\). Its unit is the volt, \\(1\\,\\mathrm{V}=1\\,\\mathrm{J/C}\\). The emf is a property of the source, not a “force” acting on charge.",
      "端电压是电源两端实际可测的电压。闭合电路中 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)，其中 \\(r\\) 为内阻。开路时 \\(I=0\\)，\\(V_{\\mathrm{term}}=\\varepsilon\\)；有电流时 \\(V_{\\mathrm{term}}<\\varepsilon\\)；短路时 \\(V_{\\mathrm{term}}=0\\)，\\(I=\\dfrac{\\varepsilon}{r}\\)。 · Terminal voltage is the voltage actually measured across the source. In a closed circuit, \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\), where \\(r\\) is the internal resistance. Open-circuit, \\(I=0\\) and \\(V_{\\mathrm{term}}=\\varepsilon\\); under current, \\(V_{\\mathrm{term}}<\\varepsilon\\); short-circuit, \\(V_{\\mathrm{term}}=0\\) and \\(I=\\dfrac{\\varepsilon}{r}\\).",
      "能量账：化学能转化功率 \\(P_{\\mathrm{chem}}=\\varepsilon I\\)；外电路得到 \\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I\\)；内阻发热 \\(P_r=I^{2}r\\)。效率 \\(\\eta=\\dfrac{P_{\\mathrm{ext}}}{P_{\\mathrm{chem}}}=\\dfrac{V_{\\mathrm{term}}}{\\varepsilon}\\)。 · Energy accounting: the chemical conversion rate is \\(P_{\\mathrm{chem}}=\\varepsilon I\\); the external circuit receives \\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I\\); internal heating is \\(P_r=I^{2}r\\). The efficiency is \\(\\eta=\\dfrac{P_{\\mathrm{ext}}}{P_{\\mathrm{chem}}}=\\dfrac{V_{\\mathrm{term}}}{\\varepsilon}\\).",
      "电池与电容器不同：电池靠持续化学反应维持近似恒定的电动势，不是“储存电荷”的容器；电容器把分开的电荷储存在极板上，电压随电荷改变 \\(V=\\dfrac{Q}{C}\\)，能量为 \\(U=\\dfrac12QV\\)。 · A battery differs from a capacitor: a battery maintains a nearly constant emf through ongoing chemical reactions and is not a “charge storage” container; a capacitor stores separated charge on its plates, its voltage changes with charge \\(V=\\dfrac{Q}{C}\\), and its energy is \\(U=\\dfrac12QV\\).",
      "电池可以串联或并联：串联时电动势按极性相加，内阻也相加；并联时电动势相同（理想情况下），可提供的总电流增大、等效内阻减小。连接时必须注意极性，反向电池会抵消电动势。 · Cells can be connected in series or parallel: in series, emfs add according to polarity and internal resistances add; in parallel, the emf is the same (ideally), the available total current increases, and the equivalent internal resistance decreases. Polarity matters—a reversed cell subtracts from the emf.",
      "AP CED 边界：只需定性解释化学过程分离正负电荷、产生电势差；不需要写具体半反应、标准电极电势、能斯特方程或计算化学反应热。 · AP CED boundary: only a qualitative explanation of how chemical processes separate charge and produce a potential difference is required; specific half-reactions, standard electrode potentials, the Nernst equation, and reaction-heat calculations are not required."
    ],
    "definition": "电池是一种把化学能转化为电能的电源。电池内部两种不同的电极浸在电解质中，电极表面的氧化还原反应使电子从负极（阳极）转移到正极（阴极）；电子经外电路流动，电解质中的正负离子定向移动，完成内部电荷输运。化学反应提供一种非静电力，把正电荷从低电势的负极搬到高电势的正极，克服电场力做功，把正负电荷分开，从而在两端维持电势差。电动势定义为单位正电荷从负极经电源内部移到正极时非静电力所做的功：\\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)。开路时两端电压等于电动势；有电流时端电压 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)，其中 \\(r\\) 为内阻。电池不是电荷的制造者或仓库：它只分离已有的正负电荷，总电荷守恒，化学能耗尽后就不能继续维持电动势。 · A battery is a source that converts chemical energy into electric energy. Inside, two different electrodes are immersed in an electrolyte, and oxidation–reduction reactions at the electrode surfaces transfer electrons from the negative electrode (anode) to the positive electrode (cathode); electrons flow through the external circuit while positive and negative ions move through the electrolyte, completing internal charge transport. The chemical reaction provides a non-electrostatic force that moves positive charge from the low-potential negative terminal to the high-potential positive terminal, doing work against the electric field and separating charge, thereby maintaining a potential difference. The emf is the work done by the non-electrostatic force per unit positive charge moved from the negative to the positive terminal inside the source: \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\). Open-circuit, the terminal voltage equals the emf; under current, \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\), where \\(r\\) is the internal resistance. A battery neither creates nor stores charge: it only separates existing positive and negative charge, total charge is conserved, and once the chemical reactants are depleted it can no longer maintain the emf.",
    "intuition": "把电池想成“电荷泵”：它不制造电荷，而是把已经存在的正负电荷分开，像水泵把水从低处搬到高处。化学反应用能量把正电荷推到正极、把电子留在负极；分开的电荷产生电场，这个电场反过来阻止继续分离，直到化学驱动力与电场力平衡。开路时两边电势差正好等于化学泵每单位电荷能提供的能量，即电动势。接上外电路后，正电荷从正极经外电路流向负极，内部化学泵继续补充，维持电流；内阻使一部分能量在电池内部变成热，所以端电压比电动势小。 · Think of a battery as a charge pump: it does not create charge but separates existing positive and negative charge, like a water pump lifting water. The chemical reaction spends energy to push positive charge to the positive terminal and leave electrons at the negative terminal; the separated charge creates an electric field that opposes further separation until the chemical driving force balances the electric force. Open-circuit, the potential difference equals the energy the chemical pump can provide per unit charge—the emf. When an external circuit is connected, positive charge flows from the positive terminal through the circuit to the negative terminal, while the internal pump keeps replenishing it; internal resistance turns some energy into heat inside the battery, so the terminal voltage is less than the emf.",
    "formulas": [
      {
        "latex": "V=\\sum_i k\\dfrac{q_i}{r_i}",
        "note": "多个点电荷配置产生的电势；标量和。 · Potential due to a configuration of point charges; a scalar sum."
      },
      {
        "latex": "V=k\\int\\dfrac{\\mathrm{d}q}{r}",
        "note": "连续电荷分布的电势。 · Potential of a continuous charge distribution."
      },
      {
        "latex": "\\Delta V=-\\int_A^B\\vec E\\cdot\\mathrm{d}\\vec r",
        "note": "电势差与电场的积分关系；等势线与电场垂直。 · Integral relation between potential difference and field; equipotentials are perpendicular to the field."
      },
      {
        "latex": "E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}",
        "note": "一维电势-位置图像的斜率给出电场分量。 · The slope of a one-dimensional potential-versus-position graph gives the field component."
      },
      {
        "latex": "\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}",
        "note": "电动势：单位电荷获得的化学能（非静电力做功）。 · Emf: chemical energy per unit charge (work by the non-electrostatic force)."
      },
      {
        "latex": "V_{\\mathrm{term}}=\\varepsilon-Ir",
        "note": "有电流时的端电压；\\(r\\) 为内阻。 · Terminal voltage under current; \\(r\\) is the internal resistance."
      },
      {
        "latex": "I=\\dfrac{\\varepsilon}{R+r}",
        "note": "含内阻的闭合电路电流。 · Current in a closed circuit with internal resistance."
      },
      {
        "latex": "P_{\\mathrm{chem}}=\\varepsilon I,\\qquad P_{\\mathrm{ext}}=V_{\\mathrm{term}}I,\\qquad P_r=I^{2}r",
        "note": "化学能转化功率、外电路功率与内阻热功率。 · Chemical conversion power, external power, and internal heating power."
      },
      {
        "latex": "\\eta=\\dfrac{P_{\\mathrm{ext}}}{P_{\\mathrm{chem}}}=\\dfrac{V_{\\mathrm{term}}}{\\varepsilon}",
        "note": "电池的能量效率。 · Energy efficiency of the battery."
      },
      {
        "latex": "\\varepsilon_{\\mathrm{series}}=\\varepsilon_1+\\varepsilon_2+\\cdots",
        "note": "串联电池的电动势按极性相加。 · Emfs of series cells add according to polarity."
      }
    ],
    "derivationNotes": [
      {
        "from": "点电荷电势 · Point-charge potential",
        "to": "配置电势 · Configuration potential",
        "note": "单个点电荷 \\(V=k\\dfrac{q}{r}\\)；电势是标量，多个电荷的贡献直接相加，得到 \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\)。连续分布把求和换成积分 \\(V=k\\int\\dfrac{\\mathrm{d}q}{r}\\)。 · A single point charge has \\(V=k\\dfrac{q}{r}\\); potential is a scalar, so contributions from several charges add directly to give \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\). A continuous distribution replaces the sum with \\(V=k\\int\\dfrac{\\mathrm{d}q}{r}\\)."
      },
      {
        "from": "电场 · Electric field",
        "to": "电势差 · Potential difference",
        "note": "沿路径把 \\(\\vec E\\cdot\\mathrm{d}\\vec r\\) 积分，得到 \\(\\Delta V=-\\int_A^B\\vec E\\cdot\\mathrm{d}\\vec r\\)。静电场保守，结果与路径无关；沿等势线 \\(\\Delta V=0\\)。 · Integrating \\(\\vec E\\cdot\\mathrm{d}\\vec r\\) along a path gives \\(\\Delta V=-\\int_A^B\\vec E\\cdot\\mathrm{d}\\vec r\\). The electrostatic field is conservative, so the result is path-independent; along an equipotential, \\(\\Delta V=0\\)."
      },
      {
        "from": "电极反应 · Electrode reactions",
        "to": "电荷分离 · Charge separation",
        "note": "负极（阳极）发生氧化，释放电子；正极（阴极）发生还原，消耗电子。电子经外电路从负极到正极，电解质中的正负离子定向移动，使内部电路闭合；电荷分离在电池内部建立从正极指向负极的电场。 · Oxidation at the negative electrode (anode) releases electrons, while reduction at the positive electrode (cathode) consumes them. Electrons travel through the external circuit from negative to positive, and ions in the electrolyte move to close the internal circuit; the charge separation establishes an electric field inside the battery pointing from positive to negative."
      },
      {
        "from": "化学驱动力 · Chemical driving force",
        "to": "电动势 · Emf",
        "note": "化学反应用非静电力把正电荷从负极推到正极，克服电场力做功 \\(W_{\\mathrm{ne}}\\)。单位电荷的功定义为电动势 \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)；开路时电场力与化学驱动力平衡，端电压等于 \\(\\varepsilon\\)。 · The chemical reaction uses a non-electrostatic force to push positive charge from the negative to the positive terminal, doing work \\(W_{\\mathrm{ne}}\\) against the electric field. The work per unit charge defines the emf \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\); open-circuit, the electric force balances the chemical driving force and the terminal voltage equals \\(\\varepsilon\\)."
      },
      {
        "from": "闭合电路能量守恒 · Closed-circuit energy conservation",
        "to": "端电压 · Terminal voltage",
        "note": "每单位电荷在电源内部获得 \\(\\varepsilon\\) 的能量，在外电阻消耗 \\(V_{\\mathrm{term}}\\)，在内阻消耗 \\(Ir\\)，故 \\(\\varepsilon=V_{\\mathrm{term}}+Ir\\)，即 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)。 · Each unit charge gains \\(\\varepsilon\\) inside the source, spends \\(V_{\\mathrm{term}}\\) in the external resistor and \\(Ir\\) in the internal resistance, so \\(\\varepsilon=V_{\\mathrm{term}}+Ir\\), or \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)."
      },
      {
        "from": "功率 · Power",
        "to": "效率 · Efficiency",
        "note": "把 \\(\\varepsilon=V_{\\mathrm{term}}+Ir\\) 乘以电流 \\(I\\)，得到 \\(\\varepsilon I=V_{\\mathrm{term}}I+I^{2}r\\)。化学能转化功率为 \\(\\varepsilon I\\)，外电路功率为 \\(V_{\\mathrm{term}}I\\)，内阻热功率为 \\(I^{2}r\\)，效率为两者之比。 · Multiplying \\(\\varepsilon=V_{\\mathrm{term}}+Ir\\) by the current \\(I\\) gives \\(\\varepsilon I=V_{\\mathrm{term}}I+I^{2}r\\). The chemical conversion power is \\(\\varepsilon I\\), the external power is \\(V_{\\mathrm{term}}I\\), the internal heating is \\(I^{2}r\\), and the efficiency is their ratio."
      },
      {
        "from": "电容器 · Capacitor",
        "to": "电池对比 · Battery comparison",
        "note": "电容器满足 \\(V=\\dfrac{Q}{C}\\)，电压随电荷线性变化，储能 \\(U=\\dfrac12QV\\)；电池靠持续化学反应维持近似恒定的 \\(\\varepsilon\\)，单位电荷获得的能量近似固定，因此不能用 \\(U=\\dfrac12QV\\) 描述电池的化学能。 · A capacitor satisfies \\(V=\\dfrac{Q}{C}\\), its voltage changes linearly with charge, and it stores \\(U=\\dfrac12QV\\); a battery maintains a nearly constant \\(\\varepsilon\\) through ongoing chemistry, so the energy gained per unit charge is nearly fixed and \\(U=\\dfrac12QV\\) does not describe the battery's chemical energy."
      }
    ],
    "conditions": [
      "电池须有两种不同电极和电解质；电极反应能自发进行（原电池）或由外电源驱动（充电）。 · A battery requires two different electrodes and an electrolyte; the electrode reactions must proceed spontaneously (galvanic cell) or be driven by an external source (charging).",
      "电解质靠离子导电，不能有显著的电子导电；否则电池会自放电或短路。 · The electrolyte conducts ions, not electrons; significant electronic conduction would cause self-discharge or a short circuit.",
      "开路时 \\(I=0\\)，\\(V_{\\mathrm{term}}=\\varepsilon\\)；闭路时 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)；理想电压表内阻无穷大。 · Open-circuit, \\(I=0\\) and \\(V_{\\mathrm{term}}=\\varepsilon\\); closed-circuit, \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\); an ideal voltmeter has infinite resistance.",
      "常规电流在外部电路从正极到负极，在电源内部从负极到正极；电子流方向与常规电流相反。 · Conventional current flows from positive to negative in the external circuit and from negative to positive inside the source; electron flow is opposite to conventional current.",
      "电动势近似恒定，直到反应物明显耗尽；实际电池还有极化、温度依赖、老化和内阻变化。 · The emf is approximately constant until the reactants are significantly depleted; real batteries also show polarization, temperature dependence, aging, and changing internal resistance.",
      "电势叠加 \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\) 要求各电荷分布固定；若电荷移动或导体重新分布电荷，\\(V\\) 会改变，需重新求平衡。 · Potential superposition \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\) assumes fixed charge distributions; if charges move or conductors redistribute charge, \\(V\\) changes and equilibrium must be found again.",
      "能量守恒成立；化学能转化为电能，再在外电路转化为内能、机械能或化学能（充电）。 · Energy is conserved: chemical energy becomes electric energy, then external-circuit energy such as thermal, mechanical, or chemical energy (charging).",
      "AP CED 边界：定性解释化学分离电荷即可；具体半反应、标准电极电势、能斯特方程不在要求内。 · AP CED boundary: a qualitative explanation of chemical charge separation is sufficient; specific half-reactions, standard electrode potentials, and the Nernst equation are not required.",
      "非相对论、集中参数电路；导线理想，忽略导线电阻和接触电阻（除非题目另有说明）。 · Nonrelativistic, lumped-parameter circuits; wires are ideal, and wire and contact resistances are neglected unless stated otherwise.",
      "电池不是电荷仓库：总电荷守恒，电池只分离电荷；化学能耗尽后不能继续维持电动势。 · A battery is not a charge reservoir: total charge is conserved and the battery only separates charge; once the chemical energy is depleted, it cannot maintain the emf."
    ],
    "keyPoints": [
      "配置电势 \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\) 是标量和；\\(V=0\\) 不代表 \\(E=0\\)。 · The configuration potential \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\) is a scalar sum; \\(V=0\\) does not imply \\(E=0\\).",
      "电势差可由电荷分布产生，也可由化学过程分离正负电荷产生。 · A potential difference can arise from a charge distribution or from chemical processes that separate positive and negative charge.",
      "电池内部：负极（阳极）氧化释放电子，正极（阴极）还原消耗电子；离子在电解质中导电。 · Inside a battery: oxidation at the negative electrode (anode) releases electrons, reduction at the positive electrode (cathode) consumes them, and ions carry current through the electrolyte.",
      "化学非静电力把正电荷从负极搬到正极；单位电荷的功是电动势 \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)。 · The chemical non-electrostatic force moves positive charge from the negative to the positive terminal; the work per unit charge is the emf \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\).",
      "电动势是电源属性，单位伏特；不是力，也不等于任意情况下的端电压。 · The emf is a property of the source, measured in volts; it is not a force and does not equal the terminal voltage in every situation.",
      "有电流时 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)；开路时 \\(V_{\\mathrm{term}}=\\varepsilon\\)；短路时 \\(V_{\\mathrm{term}}=0\\)。 · Under current, \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\); open-circuit, \\(V_{\\mathrm{term}}=\\varepsilon\\); short-circuit, \\(V_{\\mathrm{term}}=0\\).",
      "能量账：\\(P_{\\mathrm{chem}}=\\varepsilon I\\)，\\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I\\)，\\(P_r=I^{2}r\\)，效率 \\(\\eta=\\dfrac{V_{\\mathrm{term}}}{\\varepsilon}\\)。 · Energy accounting: \\(P_{\\mathrm{chem}}=\\varepsilon I\\), \\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I\\), \\(P_r=I^{2}r\\), and efficiency \\(\\eta=\\dfrac{V_{\\mathrm{term}}}{\\varepsilon}\\).",
      "电池不是电容器：电池维持近似恒定电动势，电容器电压随电荷改变 \\(V=\\dfrac{Q}{C}\\)。 · A battery is not a capacitor: a battery maintains a nearly constant emf, while a capacitor's voltage changes with charge \\(V=\\dfrac{Q}{C}\\).",
      "串联电池电动势按极性相加，内阻相加；反向连接会抵消电动势。 · Series cells add emfs according to polarity and add internal resistances; a reversed connection subtracts from the emf."
    ],
    "misconceptions": [
      "认为电池“储存电荷”；电池储存的是化学能，电荷在电路中流动，电池只分离电荷。 · Thinking a battery “stores charge”; it stores chemical energy, charge flows through the circuit, and the battery only separates charge.",
      "把电动势当成力；电动势是单位电荷的能量，单位是伏特。 · Treating emf as a force; emf is energy per unit charge, measured in volts.",
      "认为端电压总等于电动势；只有开路或理想无内阻时才相等。 · Thinking terminal voltage always equals emf; they are equal only open-circuit or for an ideal source with zero internal resistance.",
      "认为电池内部电流方向与外部相同；常规电流在内部从负极到正极，在外部从正极到负极。 · Thinking current inside the battery flows the same way as outside; conventional current goes from negative to positive inside and from positive to negative outside.",
      "认为化学能直接变成电子的动能；化学能先转化为电势能，再在外电路转化为动能或内能。 · Thinking chemical energy becomes electron kinetic energy directly; it first becomes electric potential energy, then kinetic or thermal energy in the external circuit.",
      "认为电池创造了电荷；电池只把已有的正负电荷分开，总电荷守恒。 · Thinking a battery creates charge; it only separates existing positive and negative charge, and total charge is conserved.",
      "认为电动势随外电阻改变；电动势是电源属性，端电压才随负载改变。 · Thinking emf changes with the external resistance; emf is a source property, while terminal voltage changes with the load.",
      "认为电解质靠电子导电；电解质靠离子导电，电子主要经外电路流动。 · Thinking the electrolyte conducts electrons; it conducts ions, while electrons flow mainly through the external circuit.",
      "认为电池可以无限提供电荷；反应物耗尽后电动势下降，电池需要更换或充电。 · Thinking a battery can supply charge forever; when the reactants are depleted the emf falls, and the battery must be replaced or recharged."
    ],
    "examples": [
      {
        "title": "例 1 · 配置电势与电势能 · Example 1: Configuration potential and potential energy",
        "prompt": "\\(q_1=+4.0\\,\\mu\\mathrm{C}\\) 在 \\(x=0\\)，\\(q_2=-2.0\\,\\mu\\mathrm{C}\\) 在 \\(x=0.30\\,\\mathrm{m}\\)。求 \\(x=0.20\\,\\mathrm{m}\\) 与 \\(x=0.40\\,\\mathrm{m}\\) 处的电势；把 \\(q_3=+1.0\\,\\mu\\mathrm{C}\\) 放在 \\(x=0.40\\,\\mathrm{m}\\) 时，它的电势能是多少？ · \\(q_1=+4.0\\,\\mu\\mathrm{C}\\) is at \\(x=0\\) and \\(q_2=-2.0\\,\\mu\\mathrm{C}\\) is at \\(x=0.30\\,\\mathrm{m}\\). Find the potential at \\(x=0.20\\,\\mathrm{m}\\) and \\(x=0.40\\,\\mathrm{m}\\). What is the potential energy of \\(q_3=+1.0\\,\\mu\\mathrm{C}\\) placed at \\(x=0.40\\,\\mathrm{m}\\)?",
        "steps": [
          "在 \\(x=0.20\\,\\mathrm{m}\\)：\\(r_1=0.20\\,\\mathrm{m}\\)，\\(r_2=0.10\\,\\mathrm{m}\\)，\\(V=(9.0\\times10^{9})\\left(\\dfrac{4.0\\times10^{-6}}{0.20}+\\dfrac{-2.0\\times10^{-6}}{0.10}\\right)=0\\)。 · At \\(x=0.20\\,\\mathrm{m}\\): \\(r_1=0.20\\,\\mathrm{m}\\) and \\(r_2=0.10\\,\\mathrm{m}\\), so \\(V=(9.0\\times10^{9})\\left(\\dfrac{4.0\\times10^{-6}}{0.20}+\\dfrac{-2.0\\times10^{-6}}{0.10}\\right)=0\\).",
          "在 \\(x=0.40\\,\\mathrm{m}\\)：\\(r_1=0.40\\,\\mathrm{m}\\)，\\(r_2=0.10\\,\\mathrm{m}\\)，\\(V=(9.0\\times10^{9})\\left(\\dfrac{4.0\\times10^{-6}}{0.40}-\\dfrac{2.0\\times10^{-6}}{0.10}\\right)=-9.0\\times10^{4}\\,\\mathrm{V}\\)。 · At \\(x=0.40\\,\\mathrm{m}\\): \\(r_1=0.40\\,\\mathrm{m}\\) and \\(r_2=0.10\\,\\mathrm{m}\\), so \\(V=(9.0\\times10^{9})\\left(\\dfrac{4.0\\times10^{-6}}{0.40}-\\dfrac{2.0\\times10^{-6}}{0.10}\\right)=-9.0\\times10^{4}\\,\\mathrm{V}\\).",
          "\\(q_3\\) 在 \\(x=0.40\\,\\mathrm{m}\\) 的电势能 \\(U=q_3V=(1.0\\times10^{-6})(-9.0\\times10^{4})=-0.090\\,\\mathrm{J}\\)。 · The potential energy of \\(q_3\\) at \\(x=0.40\\,\\mathrm{m}\\) is \\(U=q_3V=(1.0\\times10^{-6})(-9.0\\times10^{4})=-0.090\\,\\mathrm{J}\\).",
          "\\(x=0.20\\,\\mathrm{m}\\) 处 \\(V=0\\) 只是两个贡献抵消；该处电场并不为零，方向由正电荷指向负电荷（沿 \\(+x\\)）。 · At \\(x=0.20\\,\\mathrm{m}\\), \\(V=0\\) only because the two contributions cancel; the field there is not zero and points from the positive toward the negative charge (in the \\(+x\\) direction)."
        ],
        "solution": "\\(V(0.20)=0\\)，\\(V(0.40)=-9.0\\times10^{4}\\,\\mathrm{V}\\)；\\(U(q_3)=-0.090\\,\\mathrm{J}\\)。 · \\(V(0.20)=0\\), \\(V(0.40)=-9.0\\times10^{4}\\,\\mathrm{V}\\), and \\(U(q_3)=-0.090\\,\\mathrm{J}\\).",
        "solutionLatex": "V(0.40)=-9.0\\times10^{4}\\,\\mathrm{V},\\qquad U=q_3V=-0.090\\,\\mathrm{J}"
      },
      {
        "title": "例 2 · 电动势、端电压与能量 · Example 2: Emf, terminal voltage, and energy",
        "prompt": "一电池的电动势 \\(\\varepsilon=12\\,\\mathrm{V}\\)，内阻 \\(r=0.80\\,\\Omega\\)，对外提供 \\(I=0.50\\,\\mathrm{A}\\) 的电流，持续 \\(2.0\\,\\mathrm{min}\\)。求端电压、化学能转化功率、外电路功率、内阻热功率，以及这段时间内的能量分配。 · A battery has emf \\(\\varepsilon=12\\,\\mathrm{V}\\) and internal resistance \\(r=0.80\\,\\Omega\\). It supplies \\(I=0.50\\,\\mathrm{A}\\) for \\(2.0\\,\\mathrm{min}\\). Find the terminal voltage, chemical conversion power, external power, internal heating power, and the energy distribution over this time.",
        "steps": [
          "\\(V_{\\mathrm{term}}=\\varepsilon-Ir=12-(0.50)(0.80)=11.6\\,\\mathrm{V}\\)。 · \\(V_{\\mathrm{term}}=\\varepsilon-Ir=12-(0.50)(0.80)=11.6\\,\\mathrm{V}\\).",
          "\\(P_{\\mathrm{chem}}=\\varepsilon I=(12)(0.50)=6.0\\,\\mathrm{W}\\)；\\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I=(11.6)(0.50)=5.8\\,\\mathrm{W}\\)；\\(P_r=I^{2}r=(0.50)^{2}(0.80)=0.20\\,\\mathrm{W}\\)。 · \\(P_{\\mathrm{chem}}=\\varepsilon I=(12)(0.50)=6.0\\,\\mathrm{W}\\); \\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I=(11.6)(0.50)=5.8\\,\\mathrm{W}\\); \\(P_r=I^{2}r=(0.50)^{2}(0.80)=0.20\\,\\mathrm{W}\\).",
          "\\(t=2.0\\,\\mathrm{min}=120\\,\\mathrm{s}\\)。化学能 \\(E_{\\mathrm{chem}}=P_{\\mathrm{chem}}t=(6.0)(120)=720\\,\\mathrm{J}\\)；外电路 \\(E_{\\mathrm{ext}}=(5.8)(120)=696\\,\\mathrm{J}\\)；内阻热 \\(E_r=(0.20)(120)=24\\,\\mathrm{J}\\)。 · \\(t=2.0\\,\\mathrm{min}=120\\,\\mathrm{s}\\). The chemical energy is \\(E_{\\mathrm{chem}}=P_{\\mathrm{chem}}t=(6.0)(120)=720\\,\\mathrm{J}\\); the external energy is \\(E_{\\mathrm{ext}}=(5.8)(120)=696\\,\\mathrm{J}\\); the internal heat is \\(E_r=(0.20)(120)=24\\,\\mathrm{J}\\).",
          "检查：\\(696+24=720\\,\\mathrm{J}\\)，能量守恒；效率 \\(\\eta=\\dfrac{696}{720}\\approx0.967\\)，即约 \\(96.7\\%\\)。 · Check: \\(696+24=720\\,\\mathrm{J}\\), so energy is conserved; the efficiency is \\(\\eta=\\dfrac{696}{720}\\approx0.967\\), about \\(96.7\\%\\)."
        ],
        "solution": "\\(V_{\\mathrm{term}}=11.6\\,\\mathrm{V}\\)，\\(P_{\\mathrm{chem}}=6.0\\,\\mathrm{W}\\)，\\(P_{\\mathrm{ext}}=5.8\\,\\mathrm{W}\\)，\\(P_r=0.20\\,\\mathrm{W}\\)；\\(720\\,\\mathrm{J}\\) 中 \\(696\\,\\mathrm{J}\\) 进入外电路、\\(24\\,\\mathrm{J}\\) 变为内热。 · \\(V_{\\mathrm{term}}=11.6\\,\\mathrm{V}\\), \\(P_{\\mathrm{chem}}=6.0\\,\\mathrm{W}\\), \\(P_{\\mathrm{ext}}=5.8\\,\\mathrm{W}\\), \\(P_r=0.20\\,\\mathrm{W}\\); of the \\(720\\,\\mathrm{J}\\), \\(696\\,\\mathrm{J}\\) reaches the external circuit and \\(24\\,\\mathrm{J}\\) becomes internal heat.",
        "solutionLatex": "V_{\\mathrm{term}}=\\varepsilon-Ir=11.6\\,\\mathrm{V}"
      },
      {
        "title": "例 3 · 端电压与效率 · Example 3: Terminal voltage and efficiency",
        "prompt": "电池电动势 \\(\\varepsilon=9.0\\,\\mathrm{V}\\)，内阻 \\(r=1.5\\,\\Omega\\)，外接 \\(R=3.0\\,\\Omega\\)。求电流、端电压、外电路功率、内阻热功率和效率。 · A battery has emf \\(\\varepsilon=9.0\\,\\mathrm{V}\\) and internal resistance \\(r=1.5\\,\\Omega\\), connected to \\(R=3.0\\,\\Omega\\). Find the current, terminal voltage, external power, internal heating power, and efficiency.",
        "steps": [
          "\\(I=\\dfrac{\\varepsilon}{R+r}=\\dfrac{9.0}{3.0+1.5}=2.0\\,\\mathrm{A}\\)。 · \\(I=\\dfrac{\\varepsilon}{R+r}=\\dfrac{9.0}{3.0+1.5}=2.0\\,\\mathrm{A}\\).",
          "\\(V_{\\mathrm{term}}=\\varepsilon-Ir=9.0-(2.0)(1.5)=6.0\\,\\mathrm{V}\\)，也等于 \\(IR=(2.0)(3.0)=6.0\\,\\mathrm{V}\\)。 · \\(V_{\\mathrm{term}}=\\varepsilon-Ir=9.0-(2.0)(1.5)=6.0\\,\\mathrm{V}\\), which also equals \\(IR=(2.0)(3.0)=6.0\\,\\mathrm{V}\\).",
          "\\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I=(6.0)(2.0)=12\\,\\mathrm{W}\\)；\\(P_r=I^{2}r=(2.0)^{2}(1.5)=6.0\\,\\mathrm{W}\\)；\\(P_{\\mathrm{chem}}=\\varepsilon I=(9.0)(2.0)=18\\,\\mathrm{W}\\)。 · \\(P_{\\mathrm{ext}}=V_{\\mathrm{term}}I=(6.0)(2.0)=12\\,\\mathrm{W}\\); \\(P_r=I^{2}r=(2.0)^{2}(1.5)=6.0\\,\\mathrm{W}\\); \\(P_{\\mathrm{chem}}=\\varepsilon I=(9.0)(2.0)=18\\,\\mathrm{W}\\).",
          "效率 \\(\\eta=\\dfrac{P_{\\mathrm{ext}}}{P_{\\mathrm{chem}}}=\\dfrac{12}{18}=\\dfrac23\\approx0.67\\)；内阻越大，效率越低。 · The efficiency is \\(\\eta=\\dfrac{P_{\\mathrm{ext}}}{P_{\\mathrm{chem}}}=\\dfrac{12}{18}=\\dfrac23\\approx0.67\\); a larger internal resistance gives lower efficiency."
        ],
        "solution": "\\(I=2.0\\,\\mathrm{A}\\)，\\(V_{\\mathrm{term}}=6.0\\,\\mathrm{V}\\)，\\(P_{\\mathrm{ext}}=12\\,\\mathrm{W}\\)，\\(P_r=6.0\\,\\mathrm{W}\\)，效率约 \\(67\\%\\)。 · \\(I=2.0\\,\\mathrm{A}\\), \\(V_{\\mathrm{term}}=6.0\\,\\mathrm{V}\\), \\(P_{\\mathrm{ext}}=12\\,\\mathrm{W}\\), \\(P_r=6.0\\,\\mathrm{W}\\), and efficiency about \\(67\\%\\).",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R+r}=2.0\\,\\mathrm{A}"
      },
      {
        "title": "例 4 · 电池与电容器的能量对比 · Example 4: Energy comparison of battery and capacitor",
        "prompt": "一个 \\(12\\,\\mathrm{V}\\) 的电容器储存 \\(1.0\\,\\mathrm{C}\\) 的电荷；一个 \\(12\\,\\mathrm{V}\\) 的电池也让 \\(1.0\\,\\mathrm{C}\\) 的电荷通过外电路。分别求电容器储能和电池转化的化学能，并解释为什么不同。 · A \\(12\\,\\mathrm{V}\\) capacitor stores \\(1.0\\,\\mathrm{C}\\) of charge; a \\(12\\,\\mathrm{V}\\) battery also passes \\(1.0\\,\\mathrm{C}\\) through an external circuit. Find the capacitor's stored energy and the battery's converted chemical energy, and explain why they differ.",
        "steps": [
          "电容器：\\(U=\\dfrac12QV=\\dfrac12(1.0)(12)=6.0\\,\\mathrm{J}\\)。 · Capacitor: \\(U=\\dfrac12QV=\\dfrac12(1.0)(12)=6.0\\,\\mathrm{J}\\).",
          "电池：电动势近似恒定，\\(1.0\\,\\mathrm{C}\\) 每单位电荷获得 \\(12\\,\\mathrm{J/C}\\)，所以化学能 \\(E_{\\mathrm{chem}}=\\varepsilon Q=(12)(1.0)=12\\,\\mathrm{J}\\)。 · Battery: the emf is nearly constant, so each coulomb gains \\(12\\,\\mathrm{J/C}\\); the chemical energy is \\(E_{\\mathrm{chem}}=\\varepsilon Q=(12)(1.0)=12\\,\\mathrm{J}\\).",
          "电容器放电时电压从 \\(12\\,\\mathrm{V}\\) 逐渐降到 \\(0\\)，平均电压只有 \\(6\\,\\mathrm{V}\\)，所以释放 \\(6.0\\,\\mathrm{J}\\)；电池在大部分时间内维持约 \\(12\\,\\mathrm{V}\\)，每库仑提供的能量近似固定。 · As a capacitor discharges, its voltage falls from \\(12\\,\\mathrm{V}\\) to \\(0\\), so the average voltage is only \\(6\\,\\mathrm{V}\\) and it releases \\(6.0\\,\\mathrm{J}\\); a battery maintains about \\(12\\,\\mathrm{V}\\) for most of its life, so the energy per coulomb is nearly fixed.",
          "这说明电池不是电容器：不能用 \\(U=\\dfrac12QV\\) 计算电池的化学能；电池的“容量”通常用电荷量或能量标称，而不是电容。 · This shows that a battery is not a capacitor: \\(U=\\dfrac12QV\\) does not give a battery's chemical energy; battery capacity is rated in charge or energy, not capacitance."
        ],
        "solution": "电容器 \\(6.0\\,\\mathrm{J}\\)；电池 \\(12\\,\\mathrm{J}\\)。电容器电压随放电下降，电池电动势近似恒定。 · Capacitor: \\(6.0\\,\\mathrm{J}\\); battery: \\(12\\,\\mathrm{J}\\). A capacitor's voltage falls during discharge, while a battery's emf is nearly constant.",
        "solutionLatex": "U_{\\mathrm{cap}}=\\dfrac12QV=6.0\\,\\mathrm{J},\\qquad E_{\\mathrm{chem}}=\\varepsilon Q=12\\,\\mathrm{J}"
      },
      {
        "title": "例 5 · 串联电池 · Example 5: Cells in series",
        "prompt": "两个电动势均为 \\(1.5\\,\\mathrm{V}\\)、内阻均为 \\(0.50\\,\\Omega\\) 的电池串联，给 \\(R=2.0\\,\\Omega\\) 的外电阻供电。求总电动势、总内阻、电流和端电压。 · Two cells, each with emf \\(1.5\\,\\mathrm{V}\\) and internal resistance \\(0.50\\,\\Omega\\), are connected in series to an external resistor \\(R=2.0\\,\\Omega\\). Find the total emf, total internal resistance, current, and terminal voltage.",
        "steps": [
          "串联且极性一致：\\(\\varepsilon_{\\mathrm{total}}=1.5+1.5=3.0\\,\\mathrm{V}\\)。 · In series with the same polarity: \\(\\varepsilon_{\\mathrm{total}}=1.5+1.5=3.0\\,\\mathrm{V}\\).",
          "内阻串联相加：\\(r_{\\mathrm{total}}=0.50+0.50=1.0\\,\\Omega\\)。 · Internal resistances add in series: \\(r_{\\mathrm{total}}=0.50+0.50=1.0\\,\\Omega\\).",
          "\\(I=\\dfrac{\\varepsilon_{\\mathrm{total}}}{R+r_{\\mathrm{total}}}=\\dfrac{3.0}{2.0+1.0}=1.0\\,\\mathrm{A}\\)。 · \\(I=\\dfrac{\\varepsilon_{\\mathrm{total}}}{R+r_{\\mathrm{total}}}=\\dfrac{3.0}{2.0+1.0}=1.0\\,\\mathrm{A}\\).",
          "\\(V_{\\mathrm{term}}=\\varepsilon_{\\mathrm{total}}-Ir_{\\mathrm{total}}=3.0-(1.0)(1.0)=2.0\\,\\mathrm{V}\\)。 · \\(V_{\\mathrm{term}}=\\varepsilon_{\\mathrm{total}}-Ir_{\\mathrm{total}}=3.0-(1.0)(1.0)=2.0\\,\\mathrm{V}\\)."
        ],
        "solution": "\\(\\varepsilon_{\\mathrm{total}}=3.0\\,\\mathrm{V}\\)，\\(r_{\\mathrm{total}}=1.0\\,\\Omega\\)，\\(I=1.0\\,\\mathrm{A}\\)，\\(V_{\\mathrm{term}}=2.0\\,\\mathrm{V}\\)。 · \\(\\varepsilon_{\\mathrm{total}}=3.0\\,\\mathrm{V}\\), \\(r_{\\mathrm{total}}=1.0\\,\\Omega\\), \\(I=1.0\\,\\mathrm{A}\\), and \\(V_{\\mathrm{term}}=2.0\\,\\mathrm{V}\\).",
        "solutionLatex": "I=\\dfrac{\\varepsilon_{\\mathrm{total}}}{R+r_{\\mathrm{total}}}=1.0\\,\\mathrm{A}"
      }
    ],
    "examTips": [
      "先问“电势差从哪里来”：电荷分布用 \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\)，化学过程用电池的非静电力。 · First ask where the potential difference comes from: a charge distribution uses \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\), while a chemical process uses the battery's non-electrostatic force.",
      "电动势不是力：写 \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)，单位是 \\(\\mathrm{J/C}\\) 或 \\(\\mathrm{V}\\)。 · Emf is not a force: write \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\), with units \\(\\mathrm{J/C}\\) or \\(\\mathrm{V}\\).",
      "区分电动势与端电压：开路 \\(V_{\\mathrm{term}}=\\varepsilon\\)，有电流 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)。 · Distinguish emf from terminal voltage: open-circuit \\(V_{\\mathrm{term}}=\\varepsilon\\); under current \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\).",
      "先算电流 \\(I=\\dfrac{\\varepsilon}{R+r}\\)，再算端电压和功率；不要直接用 \\(\\varepsilon\\) 代替外电阻上的电压。 · Compute the current \\(I=\\dfrac{\\varepsilon}{R+r}\\) first, then the terminal voltage and power; do not replace the voltage across the external resistor with \\(\\varepsilon\\).",
      "能量题先写 \\(P_{\\mathrm{chem}}=\\varepsilon I\\)，再分配到 \\(P_{\\mathrm{ext}}\\) 和 \\(P_r\\)，最后检查总和与效率。 · For energy problems, write \\(P_{\\mathrm{chem}}=\\varepsilon I\\), distribute it into \\(P_{\\mathrm{ext}}\\) and \\(P_r\\), and check the total and efficiency.",
      "电池串联时注意极性：反向电池的电动势要减去，不能盲目相加。 · Watch polarity for series cells: a reversed cell subtracts from the emf; do not add blindly.",
      "AP 边界：化学部分只需定性解释“反应分离正负电荷”；不要写具体半反应、标准电极电势或能斯特方程。 · AP boundary: the chemistry needs only a qualitative explanation that reactions separate positive and negative charge; do not write specific half-reactions, standard electrode potentials, or the Nernst equation."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.2",
        "title": "电势 · Electric Potential",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.4",
        "title": "电势差与功 · Conservation of Electric Energy",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.5",
        "title": "电势能积分与多电荷系统 · Potential Energy Integrals and Charge Systems",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.2",
        "title": "简单电路 · Simple Circuits",
        "relation": "应用于 · applies-to"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.3",
        "title": "电容器 · Capacitors",
        "relation": "相关 · related"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u9",
    "connections": [
      "上游：9.2 建立电势与电势差，9.5 建立电势能与多电荷系统；本节用这些概念解释化学过程如何产生电势差。 · Upstream: 9.2 establishes potential and potential difference, and 9.5 establishes potential energy and multi-charge systems; this topic uses them to explain how chemical processes produce a potential difference.",
      "下游：11.2 简单电路把电池作为电源，11.4 电功率计算化学能转化与内阻损耗；后续 RC 电路和电动机也用到电动势与端电压的区别。 · Downstream: 11.2 treats the battery as a source in simple circuits, and 11.4 calculates chemical energy conversion and internal losses; later RC circuits and motors also use the distinction between emf and terminal voltage.",
      "跨主题：电池与电容器都涉及分开的电荷，但电池靠化学能维持近似恒定电动势，电容器靠极板电荷储存能量且电压随电荷变化。 · Cross-topic: batteries and capacitors both involve separated charge, but a battery uses chemical energy to maintain a nearly constant emf, while a capacitor stores energy on its plates and its voltage changes with charge.",
      "科学本质：电动势是描述非静电力做功的模型量；电池不是电荷源，而是能量转换器；AP CED 把化学细节列为边界，只要求定性机制。 · Nature of science: emf is a model quantity describing non-electrostatic work; a battery is an energy converter, not a charge source; the AP CED treats chemical details as a boundary and requires only a qualitative mechanism."
    ],
    "intuitionDetailed": "电池的难点在于把“化学”和“电路”接起来。可以把它想成一座水泵：水（电荷）本来就在系统里，泵（化学反应）把水从低处（负极）抬到高处（正极），形成水位差（电势差）。泵做的功不是凭空产生的，而是来自化学能；单位水量的功就是电动势。开路时，泵把水抬到一定高度后，往下的压力（电场力）与泵的推力平衡，水位差达到最大，等于电动势。接上水管（外电路）后，水从高处流向低处，推动涡轮（电阻）做功；泵继续工作，维持水位差。管子越细或外电阻越小，流量（电流）越大，泵内部的摩擦（内阻）造成的能量损失也越大，所以出水口的水位差（端电压）比泵的额定扬程（电动势）小。电池不是“装电荷的桶”：它不制造水，只是把水从低处搬到高处；化学燃料耗尽，泵就停了。电容器则像一个真正的水箱：充水时水位（电压）随水量（电荷）上升，放水时水位下降，所以它的能量是 \\(\\dfrac12QV\\)，而电池在大部分工作时间内水位近似不变。理解了这一点，就不会把电池当成电容器，也不会把电动势当成力。 · The difficulty with batteries is connecting chemistry to circuits. Think of a water pump: the water (charge) is already in the system, and the pump (chemical reaction) lifts it from a low level (negative terminal) to a high level (positive terminal), creating a height difference (potential difference). The pump's work does not appear from nowhere; it comes from chemical energy, and the work per unit amount of water is the emf. Open-circuit, after the pump raises the water to a certain height, the downward pressure (electric force) balances the pump's push, the height difference reaches its maximum, and it equals the emf. When a pipe (external circuit) is connected, water flows from high to low and drives a turbine (resistor); the pump keeps working to maintain the height difference. A narrower pipe or smaller external resistance gives a larger flow (current), and the friction inside the pump (internal resistance) wastes more energy, so the outlet height difference (terminal voltage) is smaller than the pump's rated lift (emf). A battery is not a “bucket of charge”: it does not create water, it only lifts it; when the chemical fuel is exhausted, the pump stops. A capacitor is more like a real water tank: as it fills, the water level (voltage) rises with the amount of water (charge), and as it discharges the level falls, so its energy is \\(\\dfrac12QV\\), while a battery's level stays nearly constant during most of its life. With this picture, you will not mistake a battery for a capacitor or an emf for a force.",
    "development": [
      "从多个点电荷的电势叠加 \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\) 出发，说明电势是标量、零势点可任选。 · Start from potential superposition for several point charges, \\(V=\\sum_i k\\dfrac{q_i}{r_i}\\), and explain that potential is a scalar with an arbitrary zero reference.",
      "用 \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec r\\) 与 \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\) 连接电势、电场和等势线。 · Connect potential, field, and equipotentials with \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec r\\) and \\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\).",
      "分析电池的电极反应、电子外流和离子内流，说明化学过程如何分离正负电荷并建立电场。 · Analyze the electrode reactions, external electron flow, and internal ion flow to explain how chemistry separates charge and establishes an electric field.",
      "定义电动势 \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)，说明它是单位电荷的化学能，不是力。 · Define the emf \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\) and explain that it is chemical energy per unit charge, not a force.",
      "由闭合电路能量守恒推出 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)，再乘电流得到功率与效率关系。 · Derive \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\) from closed-circuit energy conservation, then multiply by current to obtain power and efficiency relations.",
      "对比电池与电容器，解释 \\(U=\\dfrac12QV\\) 不适用于电池，并用串联电池练习极性与内阻。 · Compare a battery with a capacitor, explain why \\(U=\\dfrac12QV\\) does not apply to a battery, and practice polarity and internal resistance with series cells."
    ],
    "checks": [
      "为什么 \\(V=0\\) 的点电场不一定为零？用两个异号电荷的例子说明。 · Why can the field be nonzero at a point where \\(V=0\\)? Explain with two opposite charges.",
      "电池内部的正负电荷是怎样被分开的？电子和离子各走哪条路径？ · How are positive and negative charges separated inside a battery? Which paths do electrons and ions take?",
      "电动势的定义是什么？为什么它的单位是伏特而不是牛顿？ · What is the definition of emf? Why is its unit the volt rather than the newton?",
      "开路和闭路时端电压分别等于什么？为什么有电流时 \\(V_{\\mathrm{term}}<\\varepsilon\\)？ · What is the terminal voltage open-circuit and closed-circuit? Why is \\(V_{\\mathrm{term}}<\\varepsilon\\) when current flows?",
      "电池内部和外部的常规电流方向分别是什么？电子流方向呢？ · What are the directions of conventional current inside and outside a battery? What about electron flow?",
      "为什么不能用 \\(U=\\dfrac12QV\\) 计算电池的化学能？电池与电容器的能量来源有何不同？ · Why can \\(U=\\dfrac12QV\\) not be used for a battery's chemical energy? How do the energy sources of a battery and a capacitor differ?",
      "两个电池反向串联时总电动势如何计算？内阻如何处理？ · How is the total emf calculated when two cells are connected in series with opposite polarity? How are the internal resistances handled?",
      "AP CED 对电池化学细节的要求边界是什么？哪些内容不需要写？ · What is the AP CED boundary for battery chemistry? Which details are not required?"
    ],
    "vocabulary": [
      {
        "termZh": "电动势",
        "termEn": "electromotive force (emf)",
        "defZh": "单位正电荷从负极经电源内部移到正极时非静电力做的功，\\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\)，单位伏特。",
        "defEn": "The work done by the non-electrostatic force per unit positive charge moved from the negative to the positive terminal inside a source, \\(\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q}\\), measured in volts."
      },
      {
        "termZh": "端电压",
        "termEn": "terminal voltage",
        "defZh": "电源两端实际测得的电压；有电流时 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)。",
        "defEn": "The voltage actually measured across a source; under current, \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)."
      },
      {
        "termZh": "化学电势差",
        "termEn": "chemical potential difference",
        "defZh": "由化学过程分离正负电荷而产生的电势差，例如电池两端之间的电压。",
        "defEn": "A potential difference produced by chemical processes that separate positive and negative charge, such as the voltage across a battery."
      },
      {
        "termZh": "电极",
        "termEn": "electrode",
        "defZh": "电池中与电解质接触、发生氧化或还原反应的导体；分为负极（阳极）和正极（阴极）。",
        "defEn": "A conductor in a battery that contacts the electrolyte and undergoes oxidation or reduction; it can be the negative electrode (anode) or positive electrode (cathode)."
      },
      {
        "termZh": "电解质",
        "termEn": "electrolyte",
        "defZh": "含有可移动离子、能导电的介质；在电池中靠离子迁移完成内部电荷输运。",
        "defEn": "A medium containing mobile ions that conducts electricity; in a battery, ion migration completes internal charge transport."
      },
      {
        "termZh": "内阻",
        "termEn": "internal resistance",
        "defZh": "电源内部对电流的阻碍，导致端电压低于电动势并在内部产生热量。",
        "defEn": "The resistance inside a source that makes the terminal voltage lower than the emf and produces internal heating."
      },
      {
        "termZh": "电荷分离",
        "termEn": "charge separation",
        "defZh": "把正负电荷分开、形成电势差的过程；电池通过化学反应实现这一点。",
        "defEn": "The process of separating positive and negative charge to create a potential difference; a battery does this through chemical reactions."
      },
      {
        "termZh": "非静电力",
        "termEn": "non-electrostatic force",
        "defZh": "不是由静电场产生的力，能把正电荷从低电势搬到高电势；在电池中来源于化学反应。",
        "defEn": "A force not produced by the electrostatic field that can move positive charge from low to high potential; in a battery it originates from chemical reactions."
      }
    ]
  }
};
