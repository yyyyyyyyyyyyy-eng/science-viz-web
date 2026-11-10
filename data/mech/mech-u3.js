export const UNIT = {
  "id": "mech-u3",
  "code": "3",
  "titleZh": "功、能量与功率",
  "titleEn": "Work, Energy, and Power",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "3.1": {
    "id": "mech/mech-u3/3.1",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.1",
    "titleZh": "动能定理",
    "titleEn": "Work–Energy Theorem",
    "layer": "ap",
    "summary": "动能定理 · Work–Energy Theorem",
    "learningObjectives": [
      "能陈述「动能定理」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Work–Energy Theorem：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "动能定理（Work–Energy Theorem）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「动能定理」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "W_{\\mathrm{net}}=\\Delta K",
        "note": "动能定理。"
      },
      {
        "latex": "K=\\dfrac{1}{2}mv^{2}",
        "note": "平动动能。"
      },
      {
        "latex": "W=\\int\\vec F\\cdot\\mathrm{d}\\vec r",
        "note": "变力做功。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「动能定理」的工作方程或机制链。"
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
      "W_net 为合外力做功；动能按惯性系计算",
      "变力功用积分；恒力功 F·Δr",
      "定理对质点成立；刚体需考虑转动动能"
    ],
    "keyPoints": [
      "掌握 3.1「动能定理」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「动能定理」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「动能定理」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "W_{\\mathrm{net}}=\\Delta K"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「动能定理」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「动能定理」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「动能定理」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「动能定理」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「动能定理」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「动能定理」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.2": {
    "id": "mech/mech-u3/3.2",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.2",
    "titleZh": "力与势能",
    "titleEn": "Forces and Potential Energy",
    "layer": "ap",
    "summary": "力与势能 · Forces and Potential Energy",
    "learningObjectives": [
      "能陈述「力与势能」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Forces and Potential Energy：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "力与势能（Forces and Potential Energy）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「力与势能」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}",
        "note": "一维保守力与势能的关系。"
      },
      {
        "latex": "\\Delta U=-W_{\\mathrm{cons}}",
        "note": "势能变化与保守力做功。"
      },
      {
        "latex": "U_g=mgh,\\quad U_s=\\dfrac{1}{2}kx^{2}",
        "note": "重力势能与弹簧势能。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「力与势能」的工作方程或机制链。"
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
      "势能只对保守力定义；零势能点任选",
      "F=-dU/dx 是一维情形；三维用梯度",
      "U_g=mgh 仅在 g 常量时成立"
    ],
    "keyPoints": [
      "掌握 3.2「力与势能」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「力与势能」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「力与势能」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「力与势能」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「力与势能」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「力与势能」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.1",
        "title": "动能定理",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「力与势能」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「力与势能」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「力与势能」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.3": {
    "id": "mech/mech-u3/3.3",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.3",
    "titleZh": "机械能守恒",
    "titleEn": "Conservation of Energy",
    "layer": "ap",
    "summary": "机械能守恒 · Conservation of Energy",
    "learningObjectives": [
      "能陈述「机械能守恒」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Conservation of Energy：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "机械能守恒（Conservation of Energy）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「机械能守恒」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "E=K+U",
        "note": "机械能。"
      },
      {
        "latex": "K_i+U_i+W_{\\mathrm{nc}}=K_f+U_f",
        "note": "含非保守力做功的能量方程。"
      },
      {
        "latex": "\\Delta E=W_{\\mathrm{nc}}",
        "note": "机械能变化等于非保守力做功。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「机械能守恒」的工作方程或机制链。"
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
      "只有保守力做功时机械能守恒",
      "非保守力（摩擦等）做功改变机械能",
      "系统与势能零点需明确"
    ],
    "keyPoints": [
      "掌握 3.3「机械能守恒」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「机械能守恒」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「机械能守恒」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "E=K+U"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「机械能守恒」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「机械能守恒」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「机械能守恒」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.4",
        "title": "功率",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「机械能守恒」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「机械能守恒」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「机械能守恒」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.4": {
    "id": "mech/mech-u3/3.4",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.4",
    "titleZh": "功率",
    "titleEn": "Power",
    "layer": "ap",
    "summary": "功率 · Power",
    "learningObjectives": [
      "能陈述「功率」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Power：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "功率（Power）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「功率」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}",
        "note": "瞬时功率。"
      },
      {
        "latex": "P=\\vec F\\cdot\\vec v=Fv\\cos\\theta",
        "note": "力与速度的瞬时功率。"
      },
      {
        "latex": "P=\\dfrac{\\Delta E}{\\Delta t}",
        "note": "平均功率。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「功率」的工作方程或机制链。"
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
      "瞬时功率用导数；平均功率用 ΔW/Δt",
      "F 与 v 同向时 P=Fv；夹角 θ 时 P=Fv cosθ",
      "功率是标量，单位 W"
    ],
    "keyPoints": [
      "掌握 3.4「功率」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「功率」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「功率」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「功率」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「功率」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「功率」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「功率」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「功率」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「功率」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.5": {
    "id": "mech/mech-u3/3.5",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.5",
    "titleZh": "变力做功与势能函数",
    "titleEn": "Work by Variable Forces and Potential Energy Functions",
    "layer": "ap",
    "summary": "变力做功是 \\(F_x\\)–\\(x\\) 图下的有符号面积；一维保守力由势能斜率给出 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)，非线性弹簧的 \\(U(x)\\) 必须由积分得到。 · Work by a variable force is the signed area under the \\(F_x\\)–\\(x\\) graph; in one dimension a conservative force is the negative slope of potential energy, \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\), and a nonlinear spring's \\(U(x)\\) must be obtained by integration.",
    "learningObjectives": [
      "能用 \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\) 或 \\(F_x\\)–\\(x\\) 图面积计算变力做功，并正确处理正负号。 · Calculate work by a variable force using \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\) or the area under the \\(F_x\\)–\\(x\\) graph, with correct signs.",
      "能从 \\(U(x)\\) 的斜率求 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)，也能由 \\(F_x\\) 积分恢复 \\(U(x)\\)。 · Obtain \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) from the slope of \\(U(x)\\), and recover \\(U(x)\\) by integrating \\(F_x\\).",
      "能由 \\(U(x)\\) 的形状判断平衡位置、稳定与不稳定平衡，并用 \\(E=K+U\\) 求转折点。 · Use the shape of \\(U(x)\\) to identify equilibrium positions, stable versus unstable equilibrium, and turning points from \\(E=K+U\\).",
      "能对非线性弹簧计算变力做功与势能，而不盲目套用 \\(\\dfrac{1}{2}kx^{2}\\)。 · Calculate variable-force work and potential energy for a nonlinear spring without blindly using \\(\\dfrac{1}{2}kx^{2}\\)."
    ],
    "essentialKnowledge": [
      "变力沿 \\(x\\) 做的功是 \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\)，即 \\(F_x\\)–\\(x\\) 曲线与 \\(x\\) 轴之间的有符号面积。 · Work by a variable force along \\(x\\) is \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\), the signed area between the \\(F_x\\)–\\(x\\) curve and the \\(x\\)-axis.",
      "\\(W=F\\Delta x\\) 只适用于恒力；变力必须积分或分片求面积。 · \\(W=F\\Delta x\\) applies only to a constant force; a variable force requires integration or piecewise areas.",
      "一维保守力与势能的关系是 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)；力指向势能减小的方向。 · In one dimension, \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\); the force points toward decreasing potential energy.",
      "反过来，\\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\)；势能零点可任选，只有势能差有物理意义。 · Conversely, \\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\); the zero of potential energy is arbitrary and only differences are physical.",
      "平衡位置满足 \\(F_x=0\\)，即 \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\)；\\(U\\) 的局部极小是稳定平衡，局部极大是不稳定平衡。 · Equilibrium requires \\(F_x=0\\), i.e. \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\); a local minimum of \\(U\\) is stable equilibrium and a local maximum is unstable equilibrium.",
      "理想弹簧：\\(F_x=-kx\\)，\\(W_s=-\\dfrac{1}{2}k(x_b^{2}-x_a^{2})\\)，取 \\(U(0)=0\\) 时 \\(U_s=\\dfrac{1}{2}kx^{2}\\)。 · Ideal spring: \\(F_x=-kx\\), \\(W_s=-\\dfrac{1}{2}k(x_b^{2}-x_a^{2})\\), and with \\(U(0)=0\\), \\(U_s=\\dfrac{1}{2}kx^{2}\\).",
      "非线性弹簧：若 \\(F_x=-(kx+\\beta x^{3})\\)，则 \\(U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\)；不能只用 \\(\\dfrac{1}{2}kx^{2}\\)。 · Nonlinear spring: if \\(F_x=-(kx+\\beta x^{3})\\), then \\(U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\); \\(\\dfrac{1}{2}kx^{2}\\) alone is not enough.",
      "变力情形仍可用动能定理 \\(W_{\\mathrm{net}}=\\Delta K\\)；保守力做功可用 \\(-\\Delta U\\) 代替。 · The work–energy theorem \\(W_{\\mathrm{net}}=\\Delta K\\) still holds for variable forces; work by a conservative force can be replaced by \\(-\\Delta U\\).",
      "在 \\(E=K+U\\) 给定的情况下，转折点满足 \\(K=0\\)，即 \\(U(x)=E\\)；粒子只能出现在 \\(U(x)\\le E\\) 的区域。 · For a given \\(E=K+U\\), a turning point has \\(K=0\\), so \\(U(x)=E\\); the particle can only be where \\(U(x)\\le E\\)."
    ],
    "definition": "变力做功是力沿位移的累积：\\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\)，在 \\(F_x\\)–\\(x\\) 图上就是曲线与 \\(x\\) 轴之间的有符号面积。若力是保守力，它可以由一个势能函数 \\(U(x)\\) 描述，二者满足 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)；反之 \\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\)。势能的局部极小对应稳定平衡，局部极大对应不稳定平衡。 · Work by a variable force accumulates force along displacement: \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\), the signed area between the \\(F_x\\)–\\(x\\) curve and the \\(x\\)-axis. A conservative force can be described by a potential-energy function \\(U(x)\\) with \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\); conversely \\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\). A local minimum of potential energy is stable equilibrium, and a local maximum is unstable equilibrium.",
    "intuition": "把 \\(F_x\\)–\\(x\\) 图想成“力随位置变化的账本”：每一小段位移上，力做的功是 \\(F_x\\mathrm{d}x\\)，总面积就是总功；曲线在轴下方时面积为负。把 \\(U(x)\\) 想成“地形的海拔”：力总是指向海拔降低的方向，坡度越陡，力越大；谷底是稳定平衡，山顶是不稳定平衡。非线性弹簧只是把直线的“坡”换成了弯曲的“坡”，所以 \\(U\\) 也必须重新积分。 · Think of the \\(F_x\\)–\\(x\\) graph as a ledger of force versus position: over each small displacement the work is \\(F_x\\mathrm{d}x\\), and the total area is the total work; area below the axis is negative. Think of \\(U(x)\\) as terrain elevation: force always points downhill, and a steeper slope means a larger force; a valley is stable equilibrium and a hilltop is unstable. A nonlinear spring simply replaces a straight slope with a curved one, so \\(U\\) must be integrated again.",
    "formulas": [
      {
        "latex": "W=\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x",
        "note": "变力做功；面积在 \\(x\\) 轴下方时为负。 · Work by a variable force; area below the \\(x\\)-axis counts as negative."
      },
      {
        "latex": "W=F_x\\Delta x",
        "note": "仅恒力适用；变力不能直接用。 · Valid only for a constant force; do not use it for a variable force."
      },
      {
        "latex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}",
        "note": "一维保守力等于势能曲线斜率的相反数。 · In one dimension, the conservative force is the negative slope of the potential-energy curve."
      },
      {
        "latex": "U(x)=-\\int F_x\\,\\mathrm{d}x+U_0",
        "note": "由力恢复势能；\\(U_0\\) 由势能零点决定。 · Recover potential energy from force; \\(U_0\\) is set by the chosen zero."
      },
      {
        "latex": "U_s=\\dfrac{1}{2}kx^{2}",
        "note": "理想弹簧，取平衡位置 \\(U=0\\)。 · Ideal spring with \\(U=0\\) at equilibrium."
      },
      {
        "latex": "F_x=-(kx+\\beta x^{3})",
        "note": "非线性弹簧的一个具体力模型。 · A concrete force model for a nonlinear spring."
      },
      {
        "latex": "U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
        "note": "上述非线性弹簧的势能，取 \\(U(0)=0\\)；由积分得到。 · Potential energy for the nonlinear spring above with \\(U(0)=0\\), obtained by integration."
      },
      {
        "latex": "E=K+U,\\qquad K=0\\ \\text{at a turning point}",
        "note": "机械能与转折点条件；只在保守力作用下成立。 · Mechanical energy and the turning-point condition; valid when only conservative forces do work."
      }
    ],
    "derivationNotes": [
      {
        "from": "功的定义 · Definition of work",
        "to": "变力积分 · Variable-force integral",
        "note": "把路径分成小段，每段近似恒力，求和取极限得 \\(W=\\int F_x\\,\\mathrm{d}x\\)。 · Divide the path into small segments, approximate each by a constant force, and take the limit to get \\(W=\\int F_x\\,\\mathrm{d}x\\)."
      },
      {
        "from": "保守力与势能 · Conservative force and potential energy",
        "to": "势能定义 · Definition of potential energy",
        "note": "\\(\\Delta U=-W_{\\mathrm{cons}}=-\\int F_x\\,\\mathrm{d}x\\)，因此 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)。 · \\(\\Delta U=-W_{\\mathrm{cons}}=-\\int F_x\\,\\mathrm{d}x\\), hence \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)."
      },
      {
        "from": "势能斜率 · Slope of potential energy",
        "to": "力的方向 · Direction of force",
        "note": "斜率为正处力沿负方向，斜率为负处力沿正方向；力总指向势能降低的一侧。 · Where the slope is positive the force points in the negative direction, and where the slope is negative it points in the positive direction; force always points toward lower potential energy."
      },
      {
        "from": "平衡条件 · Equilibrium condition",
        "to": "稳定性 · Stability",
        "note": "\\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\) 给出平衡；\\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}>0\\) 为稳定，\\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}<0\\) 为不稳定。 · \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\) gives equilibrium; \\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}>0\\) is stable and \\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}<0\\) is unstable."
      },
      {
        "from": "非线性力 · Nonlinear force",
        "to": "非线性势能 · Nonlinear potential energy",
        "note": "对 \\(F_x=-(kx+\\beta x^{3})\\) 积分：\\(U=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\)。 · Integrate \\(F_x=-(kx+\\beta x^{3})\\): \\(U=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\)."
      }
    ],
    "conditions": [
      "\\(W=\\int F_x\\,\\mathrm{d}x\\) 是一维情形；三维要用 \\(\\int\\vec F\\cdot\\mathrm{d}\\vec r\\)。 · \\(W=\\int F_x\\,\\mathrm{d}x\\) is one-dimensional; in three dimensions use \\(\\int\\vec F\\cdot\\mathrm{d}\\vec r\\).",
      "势能只对保守力定义；摩擦力等非保守力没有只依赖位置的势能函数。 · Potential energy is defined only for conservative forces; friction and other nonconservative forces have no position-only potential-energy function.",
      "\\(F_x\\) 是沿位移方向的力分量，符号由所选正方向决定；面积在轴下方为负功。 · \\(F_x\\) is the force component along displacement with a sign set by the chosen positive direction; area below the axis is negative work.",
      "势能零点可任选，\\(U\\) 的绝对值没有物理意义；只有 \\(\\Delta U\\) 和 \\(F_x\\) 与零点无关。 · The zero of potential energy is arbitrary and the absolute value of \\(U\\) has no physical meaning; only \\(\\Delta U\\) and \\(F_x\\) are independent of the zero.",
      "非理想弹簧的 \\(F(x)\\) 只在给定范围内有效；分段力要分段积分，不能用一个多项式贯穿。 · A nonideal spring's \\(F(x)\\) is valid only over the stated range; integrate piecewise forces piecewise rather than with one polynomial everywhere."
    ],
    "keyPoints": [
      "变力做功看面积，不看单一时刻的力；面积有正负。 · Variable-force work is an area, not a single force value; the area carries a sign.",
      "\\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)：斜率越陡，力越大；负号不能丢。 · \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\): a steeper slope means a larger force; do not drop the minus sign.",
      "\\(U\\) 的极小点是稳定平衡，极大点是不稳定平衡。 · A minimum of \\(U\\) is stable equilibrium; a maximum is unstable equilibrium.",
      "理想弹簧的 \\(\\dfrac{1}{2}kx^{2}\\) 来自对 \\(-kx\\) 积分，不能无条件搬到非线性弹簧。 · The ideal-spring result \\(\\dfrac{1}{2}kx^{2}\\) comes from integrating \\(-kx\\) and does not transfer automatically to a nonlinear spring.",
      "转折点由 \\(U(x)=E\\) 给出，且必须满足 \\(U(x)\\le E\\)。 · Turning points satisfy \\(U(x)=E\\), and motion requires \\(U(x)\\le E\\).",
      "变力仍可用动能定理；保守力做功可写成 \\(-\\Delta U\\)。 · The work–energy theorem still holds for variable forces; conservative work can be written as \\(-\\Delta U\\)."
    ],
    "misconceptions": [
      "把 \\(F\\)–\\(x\\) 图的面积一律当成正功，忽略曲线在 \\(x\\) 轴下方的负面积。 · Treating every area under an \\(F\\)–\\(x\\) graph as positive work and ignoring negative area below the axis.",
      "对变力仍用 \\(W=F\\Delta x\\)，把某个位置的力当作全程恒力。 · Using \\(W=F\\Delta x\\) for a variable force and treating the force at one point as constant.",
      "由 \\(U(x)\\) 求 \\(F_x\\) 时忘记负号，导致力的方向反了。 · Dropping the minus sign when finding \\(F_x\\) from \\(U(x)\\), which reverses the force direction.",
      "认为 \\(F_x=0\\) 的地方 \\(U\\) 一定为零；平衡位置只要求斜率为零，不要求势能为零。 · Thinking \\(U\\) must be zero where \\(F_x=0\\); equilibrium only requires zero slope, not zero potential energy.",
      "把稳定平衡与不稳定平衡的凹凸关系弄反：谷底稳定，山顶不稳定。 · Reversing the curvature rule: valleys are stable and hilltops are unstable.",
      "对非线性弹簧直接使用 \\(\\dfrac{1}{2}kx^{2}\\)，忽略了 \\(\\beta x^{4}\\) 项。 · Applying \\(\\dfrac{1}{2}kx^{2}\\) directly to a nonlinear spring and ignoring the \\(\\beta x^{4}\\) term.",
      "认为势能的绝对值有物理意义；改变势能零点不改变力，也不改变物理结果。 · Thinking the absolute value of potential energy is physical; changing the zero does not change the force or any physical result."
    ],
    "examples": [
      {
        "title": "例 1 · 分段 F–x 图的面积 · Example 1: Area under a piecewise F–x graph",
        "prompt": "某物体沿 \\(x\\) 方向运动，\\(F_x\\) 在 \\(0\\) 到 \\(2.0\\,\\mathrm{m}\\) 内恒为 \\(6.0\\,\\mathrm{N}\\)，在 \\(2.0\\) 到 \\(4.0\\,\\mathrm{m}\\) 内从 \\(6.0\\,\\mathrm{N}\\) 线性减小到 \\(0\\)。求 \\(0\\) 到 \\(4.0\\,\\mathrm{m}\\) 内该力做的功。 · An object moves along \\(x\\). The force \\(F_x\\) is constant at \\(6.0\\,\\mathrm{N}\\) from \\(0\\) to \\(2.0\\,\\mathrm{m}\\), then decreases linearly from \\(6.0\\,\\mathrm{N}\\) to \\(0\\) between \\(2.0\\) and \\(4.0\\,\\mathrm{m}\\). Find the work done by this force from \\(0\\) to \\(4.0\\,\\mathrm{m}\\).",
        "steps": [
          "第一段是矩形：\\(W_1=(6.0)(2.0)=12\\,\\mathrm{J}\\)。 · The first segment is a rectangle: \\(W_1=(6.0)(2.0)=12\\,\\mathrm{J}\\).",
          "第二段是三角形：\\(W_2=\\dfrac{1}{2}(6.0)(2.0)=6.0\\,\\mathrm{J}\\)。 · The second segment is a triangle: \\(W_2=\\dfrac{1}{2}(6.0)(2.0)=6.0\\,\\mathrm{J}\\).",
          "总面积 \\(W=12+6.0=18\\,\\mathrm{J}\\)，因为两段都在 \\(x\\) 轴上方。 · Total area \\(W=12+6.0=18\\,\\mathrm{J}\\) because both segments lie above the \\(x\\)-axis."
        ],
        "solution": "\\(W=18\\,\\mathrm{J}\\)。 · \\(W=18\\,\\mathrm{J}\\).",
        "solutionLatex": "W=\\int_0^4F_x\\,\\mathrm{d}x=(6.0)(2.0)+\\dfrac{1}{2}(6.0)(2.0)=18\\,\\mathrm{J}"
      },
      {
        "title": "例 2 · 由 U(x) 求力与平衡 · Example 2: Force and equilibrium from U(x)",
        "prompt": "一维系统的势能为 \\(U(x)=3x^{2}-x^{3}\\,\\mathrm{J}\\)（\\(x\\) 以 m 为单位）。求 \\(x=1.0\\,\\mathrm{m}\\) 处的力，并找出平衡位置、判断其稳定性。 · A one-dimensional system has potential energy \\(U(x)=3x^{2}-x^{3}\\,\\mathrm{J}\\) with \\(x\\) in meters. Find the force at \\(x=1.0\\,\\mathrm{m}\\), locate the equilibrium positions, and determine their stability.",
        "steps": [
          "\\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=-(6x-3x^{2})=3x^{2}-6x\\)。 · \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=-(6x-3x^{2})=3x^{2}-6x\\).",
          "在 \\(x=1.0\\)：\\(F_x=3-6=-3.0\\,\\mathrm{N}\\)，方向沿负 \\(x\\)。 · At \\(x=1.0\\): \\(F_x=3-6=-3.0\\,\\mathrm{N}\\), directed along negative \\(x\\).",
          "平衡：\\(3x(x-2)=0\\)，所以 \\(x=0\\) 或 \\(x=2.0\\,\\mathrm{m}\\)。 · Equilibrium: \\(3x(x-2)=0\\), so \\(x=0\\) or \\(x=2.0\\,\\mathrm{m}\\).",
          "\\(U''(x)=6-6x\\)：\\(U''(0)=6>0\\) 为稳定；\\(U''(2)=-6<0\\) 为不稳定。 · \\(U''(x)=6-6x\\): \\(U''(0)=6>0\\) is stable; \\(U''(2)=-6<0\\) is unstable."
        ],
        "solution": "\\(F_x(1.0)=-3.0\\,\\mathrm{N}\\)；\\(x=0\\) 稳定，\\(x=2.0\\,\\mathrm{m}\\) 不稳定。 · \\(F_x(1.0)=-3.0\\,\\mathrm{N}\\); \\(x=0\\) is stable and \\(x=2.0\\,\\mathrm{m}\\) is unstable.",
        "solutionLatex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=3x^{2}-6x,\\qquad F_x(1.0)=-3.0\\,\\mathrm{N},\\qquad x=0\\ \\text{(stable)},\\ x=2.0\\,\\mathrm{m}\\ \\text{(unstable)}"
      },
      {
        "title": "例 3 · 非线性弹簧的功与势能 · Example 3: Work and potential energy of a nonlinear spring",
        "prompt": "非线性弹簧的力为 \\(F_x=-(250x+3000x^{3})\\,\\mathrm{N}\\)，\\(x\\) 以 m 为单位。求弹簧从 \\(x=0\\) 拉伸到 \\(x=0.20\\,\\mathrm{m}\\) 时弹簧力做的功，以及对应的势能变化。 · A nonlinear spring exerts \\(F_x=-(250x+3000x^{3})\\,\\mathrm{N}\\) with \\(x\\) in meters. Find the work done by the spring force as it is stretched from \\(x=0\\) to \\(x=0.20\\,\\mathrm{m}\\), and the corresponding change in potential energy.",
        "steps": [
          "\\(W_s=\\displaystyle\\int_0^{0.20}-(250x+3000x^{3})\\,\\mathrm{d}x=-\\left[125x^{2}+750x^{4}\\right]_0^{0.20}\\)。 · \\(W_s=\\displaystyle\\int_0^{0.20}-(250x+3000x^{3})\\,\\mathrm{d}x=-\\left[125x^{2}+750x^{4}\\right]_0^{0.20}\\).",
          "代入：\\(125(0.040)=5.0\\,\\mathrm{J}\\)，\\(750(0.0016)=1.2\\,\\mathrm{J}\\)，所以 \\(W_s=-(5.0+1.2)=-6.2\\,\\mathrm{J}\\)。 · Substitute: \\(125(0.040)=5.0\\,\\mathrm{J}\\) and \\(750(0.0016)=1.2\\,\\mathrm{J}\\), so \\(W_s=-(5.0+1.2)=-6.2\\,\\mathrm{J}\\).",
          "保守力：\\(\\Delta U=-W_s=6.2\\,\\mathrm{J}\\)；取 \\(U(0)=0\\)，则 \\(U(0.20)=6.2\\,\\mathrm{J}\\)。 · For a conservative force, \\(\\Delta U=-W_s=6.2\\,\\mathrm{J}\\); with \\(U(0)=0\\), \\(U(0.20)=6.2\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(W_s=-6.2\\,\\mathrm{J}\\)，\\(\\Delta U=+6.2\\,\\mathrm{J}\\)。若误用 \\(\\dfrac{1}{2}kx^{2}\\) 只得 \\(5.0\\,\\mathrm{J}\\)，会低估 \\(1.2\\,\\mathrm{J}\\)。 · \\(W_s=-6.2\\,\\mathrm{J}\\) and \\(\\Delta U=+6.2\\,\\mathrm{J}\\). Using \\(\\dfrac{1}{2}kx^{2}\\) by mistake would give only \\(5.0\\,\\mathrm{J}\\), underestimating by \\(1.2\\,\\mathrm{J}\\).",
        "solutionLatex": "W_s=\\int_0^{0.20}-(250x+3000x^{3})\\,\\mathrm{d}x=-6.2\\,\\mathrm{J},\\qquad \\Delta U=-W_s=6.2\\,\\mathrm{J}"
      },
      {
        "title": "例 4 · 转折点与能量 · Example 4: Turning points and energy",
        "prompt": "一维势能 \\(U(x)=2x^{2}\\,\\mathrm{J}\\)（\\(x\\) 以 m 为单位）。物体总机械能 \\(E=8.0\\,\\mathrm{J}\\)，质量 \\(m=3.0\\,\\mathrm{kg}\\)。求转折点，以及 \\(x=1.0\\,\\mathrm{m}\\) 处的动能与速率。 · A one-dimensional potential is \\(U(x)=2x^{2}\\,\\mathrm{J}\\) with \\(x\\) in meters. The object has total mechanical energy \\(E=8.0\\,\\mathrm{J}\\) and mass \\(m=3.0\\,\\mathrm{kg}\\). Find the turning points and the kinetic energy and speed at \\(x=1.0\\,\\mathrm{m}\\).",
        "steps": [
          "转折点 \\(K=0\\)：\\(U(x)=E\\)，即 \\(2x^{2}=8.0\\)，得 \\(x=\\pm 2.0\\,\\mathrm{m}\\)。 · Turning points have \\(K=0\\): \\(U(x)=E\\), so \\(2x^{2}=8.0\\) and \\(x=\\pm 2.0\\,\\mathrm{m}\\).",
          "在 \\(x=1.0\\)：\\(U=2(1.0)^{2}=2.0\\,\\mathrm{J}\\)，所以 \\(K=E-U=8.0-2.0=6.0\\,\\mathrm{J}\\)。 · At \\(x=1.0\\): \\(U=2(1.0)^{2}=2.0\\,\\mathrm{J}\\), so \\(K=E-U=8.0-2.0=6.0\\,\\mathrm{J}\\).",
          "\\(K=\\dfrac{1}{2}mv^{2}\\)：\\(6.0=\\dfrac{1}{2}(3.0)v^{2}\\)，得 \\(v=\\sqrt{4.0}=2.0\\,\\mathrm{m/s}\\)。 · \\(K=\\dfrac{1}{2}mv^{2}\\): \\(6.0=\\dfrac{1}{2}(3.0)v^{2}\\), so \\(v=\\sqrt{4.0}=2.0\\,\\mathrm{m/s}\\)."
        ],
        "solution": "转折点 \\(x=\\pm 2.0\\,\\mathrm{m}\\)；\\(x=1.0\\,\\mathrm{m}\\) 处 \\(K=6.0\\,\\mathrm{J}\\)，\\(v=2.0\\,\\mathrm{m/s}\\)。 · Turning points \\(x=\\pm 2.0\\,\\mathrm{m}\\); at \\(x=1.0\\,\\mathrm{m}\\), \\(K=6.0\\,\\mathrm{J}\\) and \\(v=2.0\\,\\mathrm{m/s}\\).",
        "solutionLatex": "U(\\pm 2.0)=8.0\\,\\mathrm{J},\\qquad K(1.0)=8.0-2.0=6.0\\,\\mathrm{J},\\qquad v=\\sqrt{\\dfrac{2K}{m}}=2.0\\,\\mathrm{m\\,s^{-1}}"
      }
    ],
    "examTips": [
      "先判断力是否恒定；变力一律用积分或面积，不要直接乘位移。 · Decide first whether the force is constant; for a variable force, integrate or use area rather than multiplying by displacement.",
      "面积题先标出 \\(x\\) 轴，再把轴上方与下方的面积分别求，最后带符号相加。 · On area questions, mark the \\(x\\)-axis, compute the areas above and below separately, then add them with signs.",
      "\\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) 的负号是高频失分点；可由“力指向势能降低方向”反查。 · The minus sign in \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) is a common lost point; check it with “force points toward lower potential energy.”",
      "平衡看斜率，稳定性看曲率：\\(U'=0\\) 且 \\(U''>0\\) 为稳定。 · Equilibrium uses the slope and stability uses the curvature: \\(U'=0\\) with \\(U''>0\\) is stable.",
      "非线性弹簧先写 \\(F(x)\\)，再积分求 \\(U\\)；不要凭记忆写 \\(\\dfrac{1}{2}kx^{2}\\)。 · For a nonlinear spring, write \\(F(x)\\) first and integrate to get \\(U\\); do not write \\(\\dfrac{1}{2}kx^{2}\\) from memory.",
      "能量题先写 \\(E=K+U\\)，转折点令 \\(K=0\\)，再用 \\(U(x)\\le E\\) 判断允许区域。 · In energy problems, write \\(E=K+U\\), set \\(K=0\\) for turning points, and use \\(U(x)\\le E\\) for the allowed region."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.1",
        "title": "动能定理 · Work–Energy Theorem",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能 · Forces and Potential Energy",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.8",
        "title": "弹簧力与非理想弹簧 · Spring Forces and Nonideal Springs",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.1",
        "title": "周期运动 · Periodic Motion",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能 · Work and mechanical energy"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：3.1 的动能定理与 3.2 的势能定义给出 \\(W=\\Delta K\\) 和 \\(\\Delta U=-W_{\\mathrm{cons}}\\)。 · Upstream: the work–energy theorem in 3.1 and the potential-energy definition in 3.2 give \\(W=\\Delta K\\) and \\(\\Delta U=-W_{\\mathrm{cons}}\\).",
      "下游：由 \\(U(x)\\) 的极小值可判断稳定平衡，并在平衡附近做小振动近似，连接到 7.1 的简谐振动。 · Downstream: minima of \\(U(x)\\) identify stable equilibrium and support small-oscillation approximations near equilibrium, connecting to simple harmonic motion in 7.1.",
      "与 2.8 的分工：2.8 关注弹簧力本身与串并联，3.5 关注该力做的功和对应的势能函数。 · Division of labor with 2.8: 2.8 focuses on the spring force itself and series/parallel combinations; 3.5 focuses on the work done by that force and the corresponding potential-energy function.",
      "工程与生物：非线性力—位移曲线普遍存在，势能函数是判断稳定性、断裂能和能量屏障的统一语言。 · Engineering and biology: nonlinear force–displacement curves are common, and potential-energy functions provide a unified language for stability, fracture energy, and energy barriers."
    ],
    "intuitionDetailed": "先看 \\(F_x\\)–\\(x\\) 图：力不是常数时，不能用一个矩形面积代替整段功；把曲线切成很多窄条，每条的面积为 \\(F_x\\mathrm{d}x\\)，负面积表示力与位移反向。再看 \\(U(x)\\)：它是“势能地形”，斜率告诉力的大小和方向，谷底是稳定平衡，山顶是不稳定平衡。理想弹簧的 \\(U\\) 是抛物线，所以力是线性的；非线性弹簧的 \\(U\\) 多了 \\(x^{4}\\) 项，曲线不再对称，力也不再与 \\(x\\) 成正比。能量图上的水平线 \\(E\\) 与 \\(U(x)\\) 的交点就是转折点，粒子只能在 \\(U\\le E\\) 的区域运动。 · Start with the \\(F_x\\)–\\(x\\) graph: when force is not constant, one rectangular area cannot represent the whole work; slice the curve into narrow strips, each with area \\(F_x\\mathrm{d}x\\), and negative area means force opposes displacement. Then read \\(U(x)\\) as potential-energy terrain: the slope gives the magnitude and direction of force, valleys are stable equilibrium, and hilltops are unstable. An ideal spring has a parabolic \\(U\\), so its force is linear; a nonlinear spring adds an \\(x^{4}\\) term, making \\(U\\) asymmetric and the force no longer proportional to \\(x\\). On an energy diagram, intersections of the horizontal line \\(E\\) with \\(U(x)\\) are turning points, and the particle can move only where \\(U\\le E\\).",
    "development": [
      "画出 \\(F_x\\)–\\(x\\) 或 \\(U(x)\\) 图，标出坐标轴、单位和零点。 · Draw the \\(F_x\\)–\\(x\\) or \\(U(x)\\) graph and mark axes, units, and the zero point.",
      "判断是否需要分段；每段内力是常数还是可以用一个函数表示。 · Decide whether the motion must be split into segments and whether the force is constant or described by one function in each.",
      "用面积或积分求功，注意 \\(x\\) 轴下方为负。 · Find work from area or integration, remembering that area below the \\(x\\)-axis is negative.",
      "若给出 \\(U(x)\\)，求导得 \\(F_x\\)；若给出 \\(F_x\\)，积分得 \\(U(x)\\)，并检查负号。 · If \\(U(x)\\) is given, differentiate to get \\(F_x\\); if \\(F_x\\) is given, integrate to get \\(U(x)\\), checking the minus sign.",
      "用 \\(U'=0\\) 找平衡、用 \\(U''\\) 判断稳定性，再用 \\(E=K+U\\) 求转折点。 · Use \\(U'=0\\) for equilibrium, \\(U''\\) for stability, and \\(E=K+U\\) for turning points."
    ],
    "checks": [
      "为什么 \\(F\\)–\\(x\\) 图中 \\(x\\) 轴下方的面积代表负功？ · Why does area below the \\(x\\)-axis in an \\(F\\)–\\(x\\) graph represent negative work?",
      "若 \\(U(x)\\) 在 \\(x_0\\) 处有局部极大值，\\(x_0\\) 是稳定还是不稳定平衡？ · If \\(U(x)\\) has a local maximum at \\(x_0\\), is \\(x_0\\) stable or unstable equilibrium?",
      "非线性弹簧的 \\(F(x)\\) 给定后，如何求 \\(U(x)\\)？为什么不能只用 \\(\\dfrac{1}{2}kx^{2}\\)？ · Given \\(F(x)\\) for a nonlinear spring, how do you find \\(U(x)\\), and why is \\(\\dfrac{1}{2}kx^{2}\\) not enough?",
      "在 \\(E=K+U\\) 图中，粒子不能进入哪一区域？ · On an \\(E=K+U\\) diagram, which region can the particle not enter?"
    ],
    "vocabulary": [
      {
        "termZh": "变力",
        "termEn": "variable force",
        "defZh": "大小或方向随位置改变的力；做功必须积分或求面积。",
        "defEn": "A force whose magnitude or direction changes with position; its work requires integration or area."
      },
      {
        "termZh": "元功",
        "termEn": "infinitesimal work",
        "defZh": "微小位移上做的功 \\(F_x\\,\\mathrm{d}x\\)，积分后得到总功。",
        "defEn": "The work \\(F_x\\,\\mathrm{d}x\\) over an infinitesimal displacement; integrating gives the total work."
      },
      {
        "termZh": "势能函数",
        "termEn": "potential-energy function",
        "defZh": "描述保守力做功能力的函数 \\(U(x)\\)，满足 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)。",
        "defEn": "A function \\(U(x)\\) describing the work available from a conservative force, with \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)."
      },
      {
        "termZh": "保守力",
        "termEn": "conservative force",
        "defZh": "做功只依赖初末位置、可以定义势能的力。",
        "defEn": "A force whose work depends only on initial and final positions and for which a potential energy can be defined."
      },
      {
        "termZh": "平衡位置",
        "termEn": "equilibrium position",
        "defZh": "合力为零的位置，即 \\(U'(x)=0\\)。",
        "defEn": "A position where the net force is zero, i.e. \\(U'(x)=0\\)."
      },
      {
        "termZh": "稳定平衡",
        "termEn": "stable equilibrium",
        "defZh": "势能的局部极小点；小位移后力把物体推回平衡位置。",
        "defEn": "A local minimum of potential energy; after a small displacement the force pushes the object back."
      },
      {
        "termZh": "不稳定平衡",
        "termEn": "unstable equilibrium",
        "defZh": "势能的局部极大点；小位移后力把物体推离平衡位置。",
        "defEn": "A local maximum of potential energy; after a small displacement the force pushes the object away."
      },
      {
        "termZh": "转折点",
        "termEn": "turning point",
        "defZh": "动能为零、运动方向反转的位置，满足 \\(U(x)=E\\)。",
        "defEn": "A position where kinetic energy is zero and motion reverses, satisfying \\(U(x)=E\\)."
      }
    ]
  }
};
