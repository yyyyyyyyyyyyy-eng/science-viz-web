export const UNIT = {
  "id": "mech-u4",
  "code": "4",
  "titleZh": "线动量",
  "titleEn": "Linear Momentum",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "4.1": {
    "id": "mech/mech-u4/4.1",
    "subject": "mech",
    "chapterId": "mech-u4",
    "unitCode": "4",
    "unitTitleZh": "线动量",
    "unitTitleEn": "Linear Momentum",
    "code": "4.1",
    "titleZh": "冲量与动量",
    "titleEn": "Impulse and Momentum",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "动量",
        "termEn": "momentum",
        "defZh": "质量与速度的乘积，\\(\\vec p=m\\vec v\\)，是矢量。",
        "defEn": "Mass times velocity, \\(\\vec p=m\\vec v\\). It is a vector."
      },
      {
        "termZh": "冲量",
        "termEn": "impulse",
        "defZh": "力对时间的积分，等于动量变化，\\(\\vec J=\\int\\vec F\\,\\mathrm{d}t=\\Delta\\vec p\\)。恒力时才写成 \\(\\vec F\\Delta t\\)。",
        "defEn": "The integral of force over time, equal to the change in momentum, \\(\\vec J=\\int\\vec F\\,\\mathrm{d}t=\\Delta\\vec p\\). It equals \\(\\vec F\\Delta t\\) only for a constant force."
      },
      {
        "termZh": "冲量–动量定理",
        "termEn": "impulse–momentum theorem",
        "defZh": "合外力的冲量等于物体动量的变化。",
        "defEn": "The impulse of the net external force equals the change in momentum of the object."
      },
      {
        "termZh": "平均力",
        "termEn": "average force",
        "defZh": "变力在作用时间内的等效恒力，由冲量除以时间得到。",
        "defEn": "The constant force that would give the same impulse over the interaction time."
      }
    ],
    "summary": "冲量与动量 · Impulse and Momentum",
    "learningObjectives": [
      "能陈述「冲量与动量」的准确定义与适用对象 · State the precise definition of Impulse and Momentum and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Impulse and Momentum：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "冲量与动量（Impulse and Momentum）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「冲量与动量」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec p=m\\vec v",
        "note": "动量。"
      },
      {
        "latex": "\\vec J=\\int\\vec F\\,\\mathrm{d}t=\\Delta\\vec p",
        "note": "冲量—动量定理。"
      },
      {
        "latex": "\\vec J=\\vec F_{\\mathrm{avg}}\\Delta t",
        "note": "恒力或平均力冲量。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「冲量与动量」的工作方程或机制链。"
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
      "动量与冲量均为矢量，按方向取正负",
      "变力冲量用积分；恒力冲量 FΔt",
      "合外力的冲量等于动量变化"
    ],
    "keyPoints": [
      "掌握 4.1「冲量与动量」准确定义 · State the precise definition of 4.1 Impulse and Momentum.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「冲量与动量」的结论 · Applying the conclusion of Impulse and Momentum when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "受力图漏力或把内力当作外力 · Omitting a force on a free-body diagram, or treating an internal force as external"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「冲量与动量」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\vec p=m\\vec v"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「冲量与动量」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「冲量与动量」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「冲量与动量」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件 · First name the law or definition and its conditions of use.",
      "分数一律叠式书写 · Write every fraction as a stacked fraction.",
      "检查单位、方向与特殊值 · Check units, direction, and special values.",
      "多问共享刺激时保持符号一致 · Keep symbols consistent across parts that share a stimulus.",
      "论证题每句对应证据 · In an argument, pair every claim with evidence."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u4",
        "code": "4.2",
        "title": "动量守恒与碰撞",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "collision-momentum",
        "title": "动量守恒碰撞"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「冲量与动量」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「冲量与动量」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「冲量与动量」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "4.2": {
    "id": "mech/mech-u4/4.2",
    "subject": "mech",
    "chapterId": "mech-u4",
    "unitCode": "4",
    "unitTitleZh": "线动量",
    "unitTitleEn": "Linear Momentum",
    "code": "4.2",
    "titleZh": "动量守恒与碰撞",
    "titleEn": "Conservation of Linear Momentum, Collisions",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "动量守恒",
        "termEn": "conservation of momentum",
        "defZh": "合外力冲量为零时，系统总动量保持不变。",
        "defEn": "When the net external impulse is zero, the total momentum of the system stays constant."
      },
      {
        "termZh": "弹性碰撞",
        "termEn": "elastic collision",
        "defZh": "动量和动能都守恒的碰撞。",
        "defEn": "A collision in which both momentum and kinetic energy are conserved."
      },
      {
        "termZh": "非弹性碰撞",
        "termEn": "inelastic collision",
        "defZh": "动量守恒但动能不守恒的碰撞。",
        "defEn": "A collision in which momentum is conserved and kinetic energy is not."
      },
      {
        "termZh": "完全非弹性碰撞",
        "termEn": "perfectly inelastic collision",
        "defZh": "碰撞后物体粘在一起、以共同速度运动。",
        "defEn": "A collision after which the objects stick and move at one common velocity."
      },
      {
        "termZh": "系统",
        "termEn": "system",
        "defZh": "被选来分析的物体集合；内力成对抵消，不改变总动量。",
        "defEn": "The objects chosen for analysis. Internal forces come in pairs and do not change the total momentum."
      }
    ],
    "summary": "动量守恒与碰撞 · Conservation of Linear Momentum, Collisions",
    "learningObjectives": [
      "能陈述「动量守恒与碰撞」的准确定义与适用对象 · State the precise definition of Conservation of Linear Momentum, Collisions and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Conservation of Linear Momentum, Collisions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "动量守恒与碰撞（Conservation of Linear Momentum, Collisions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「动量守恒与碰撞」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum\\vec p_i=\\sum\\vec p_f",
        "note": "动量守恒。"
      },
      {
        "latex": "m_1v_{1i}+m_2v_{2i}=m_1v_{1f}+m_2v_{2f}",
        "note": "一维两体碰撞的动量守恒。"
      },
      {
        "latex": "K_i=K_f",
        "note": "弹性碰撞的动能守恒。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「动量守恒与碰撞」的工作方程或机制链。"
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
      "系统合外力冲量为零（或远小于内力冲量）",
      "动量按方向守恒；碰撞中内力远大于外力",
      "弹性碰撞动能守恒；完全非弹性碰撞两物体同速"
    ],
    "keyPoints": [
      "掌握 4.2「动量守恒与碰撞」准确定义 · State the precise definition of 4.2 Conservation of Linear Momentum, Collisions.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「动量守恒与碰撞」的结论 · Applying the conclusion of Conservation of Linear Momentum, Collisions when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "受力图漏力或把内力当作外力 · Omitting a force on a free-body diagram, or treating an internal force as external"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「动量守恒与碰撞」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\sum\\vec p_i=\\sum\\vec p_f"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「动量守恒与碰撞」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「动量守恒与碰撞」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「动量守恒与碰撞」；用斜线分式代替叠式分式导致歧义"
      }
    ],
    "examTips": [
      "先写定律/定义名称与适用条件 · First name the law or definition and its conditions of use.",
      "分数一律叠式书写 · Write every fraction as a stacked fraction.",
      "检查单位、方向与特殊值 · Check units, direction, and special values.",
      "多问共享刺激时保持符号一致 · Keep symbols consistent across parts that share a stimulus.",
      "论证题每句对应证据 · In an argument, pair every claim with evidence."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u4",
        "code": "4.1",
        "title": "冲量与动量",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "collision-momentum",
        "title": "动量守恒碰撞"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「动量守恒与碰撞」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「动量守恒与碰撞」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「动量守恒与碰撞」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
