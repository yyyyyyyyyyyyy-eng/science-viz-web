export const UNIT = {
  "id": "em-u10",
  "code": "10",
  "titleZh": "导体与电容器",
  "titleEn": "Conductors and Capacitors",
  "subject": "em",
  "layer": "ap"
};
export const TOPICS = {
  "10.1": {
    "id": "em/em-u10/10.1",
    "subject": "em",
    "chapterId": "em-u10",
    "unitCode": "10",
    "unitTitleZh": "导体与电容器",
    "unitTitleEn": "Conductors and Capacitors",
    "code": "10.1",
    "titleZh": "导体静电",
    "titleEn": "Electrostatics with Conductors",
    "layer": "ap",
    "summary": "导体静电 · Electrostatics with Conductors",
    "learningObjectives": [
      "能陈述「导体静电」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electrostatics with Conductors：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "导体静电（Electrostatics with Conductors）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「导体静电」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec E_{\\mathrm{inside}}=0",
        "note": "静电平衡时导体内部场强为零。"
      },
      {
        "latex": "V_{\\mathrm{inside}}=V_{\\mathrm{surface}}",
        "note": "静电平衡时导体是等势体。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「导体静电」的工作方程或机制链。"
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
      "静电平衡（无宏观电流）",
      "导体内部无净电荷；多余电荷分布在表面",
      "外部电场会使表面电荷重新分布"
    ],
    "keyPoints": [
      "掌握 10.1「导体静电」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「导体静电」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「导体静电」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\vec E_{\\mathrm{inside}}=0"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「导体静电」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「导体静电」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「导体静电」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u10",
        "code": "10.2",
        "title": "电荷再分布",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "gauss-law",
        "title": "高斯定律"
      }
    ],
    "practiceHref": "#/em/practice/em-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「导体静电」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「导体静电」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「导体静电」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "10.2": {
    "id": "em/em-u10/10.2",
    "subject": "em",
    "chapterId": "em-u10",
    "unitCode": "10",
    "unitTitleZh": "导体与电容器",
    "unitTitleEn": "Conductors and Capacitors",
    "code": "10.2",
    "titleZh": "电荷再分布",
    "titleEn": "Redistribution of Charge between Conductors",
    "layer": "ap",
    "summary": "电荷再分布 · Redistribution of Charge between Conductors",
    "learningObjectives": [
      "能陈述「电荷再分布」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Redistribution of Charge between Conductors：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电荷再分布（Redistribution of Charge between Conductors）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电荷再分布」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "Q_1+Q_2=Q_{\\mathrm{total}}",
        "note": "孤立导体系统电荷守恒。"
      },
      {
        "latex": "V_1=V_2",
        "note": "用导线连接后达到同一电势。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电荷再分布」的工作方程或机制链。"
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
      "系统与外界绝缘；总电荷守恒",
      "连接后达到静电平衡",
      "导体形状/间距决定电荷分配；可用 C=Q/V 计算"
    ],
    "keyPoints": [
      "掌握 10.2「电荷再分布」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电荷再分布」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电荷再分布」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "Q_1+Q_2=Q_{\\mathrm{total}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电荷再分布」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电荷再分布」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电荷再分布」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u10",
        "code": "10.1",
        "title": "导体静电",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.3",
        "title": "电容器",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "gauss-law",
        "title": "高斯定律"
      }
    ],
    "practiceHref": "#/em/practice/em-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电荷再分布」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电荷再分布」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电荷再分布」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "10.3": {
    "id": "em/em-u10/10.3",
    "subject": "em",
    "chapterId": "em-u10",
    "unitCode": "10",
    "unitTitleZh": "导体与电容器",
    "unitTitleEn": "Conductors and Capacitors",
    "code": "10.3",
    "titleZh": "电容器",
    "titleEn": "Capacitors",
    "layer": "ap",
    "summary": "电容器 · Capacitors",
    "learningObjectives": [
      "能陈述「电容器」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Capacitors：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电容器（Capacitors）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电容器」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "C=\\dfrac{Q}{V}",
        "note": "电容定义式。"
      },
      {
        "latex": "C=\\kappa\\varepsilon_0\\dfrac{A}{d}",
        "note": "平行板电容器。"
      },
      {
        "latex": "U=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}",
        "note": "储存的电场能。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电容器」的工作方程或机制链。"
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
      "平行板近似；忽略边缘效应",
      "电介质填满极板间",
      "串联 1/C_eq=Σ1/C_i；并联 C_eq=ΣC_i"
    ],
    "keyPoints": [
      "掌握 10.3「电容器」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电容器」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电容器」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "C=\\dfrac{Q}{V}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电容器」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电容器」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电容器」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u10",
        "code": "10.2",
        "title": "电荷再分布",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.4",
        "title": "电介质",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "capacitor",
        "title": "平行板电容器"
      }
    ],
    "practiceHref": "#/em/practice/em-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电容器」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电容器」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电容器」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "10.4": {
    "id": "em/em-u10/10.4",
    "subject": "em",
    "chapterId": "em-u10",
    "unitCode": "10",
    "unitTitleZh": "导体与电容器",
    "unitTitleEn": "Conductors and Capacitors",
    "code": "10.4",
    "titleZh": "电介质",
    "titleEn": "Dielectrics",
    "layer": "ap",
    "summary": "电介质 · Dielectrics",
    "learningObjectives": [
      "能陈述「电介质」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Dielectrics：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电介质（Dielectrics）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电介质」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "C=\\kappa C_0",
        "note": "填充电介质后的电容。"
      },
      {
        "latex": "E=\\dfrac{E_0}{\\kappa}",
        "note": "介质内部场强减小。"
      },
      {
        "latex": "u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}",
        "note": "介质中的电场能量密度。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电介质」的工作方程或机制链。"
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
      "线性、均匀、各向同性介质；未击穿",
      "电池连接与否决定 Q 或 V 不变",
      "κ≥1；部分填充需按串并联模型处理"
    ],
    "keyPoints": [
      "掌握 10.4「电介质」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电介质」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电介质」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "C=\\kappa C_0"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电介质」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电介质」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电介质」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u10",
        "code": "10.3",
        "title": "电容器",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "capacitor",
        "title": "平行板电容器"
      }
    ],
    "practiceHref": "#/em/practice/em-u10",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电介质」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电介质」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电介质」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "10.5": {
    "id": "em/em-u10/10.5",
    "subject": "em",
    "chapterId": "em-u10",
    "unitCode": "10",
    "unitTitleZh": "导体与电容器",
    "unitTitleEn": "Conductors and Capacitors",
    "code": "10.5",
    "titleZh": "接触再分布与感应接地",
    "titleEn": "Charge Redistribution and Grounding",
    "layer": "ap",
    "summary": "两个导体直接接触或用导线连接后，自由电荷会在电势差驱动下重新分布，直到整个连通导体成为等势体；若系统与外界绝缘，总电荷守恒。接地把导体与一个电势为零、可吸收或提供大量电荷而电势几乎不变的大地电荷库相连；在外电场中按正确顺序接地、断开接地再撤去外场，可以使导体带上净感应电荷。 · When two conductors touch or are joined by a wire, free charge redistributes under the potential difference until the connected conductors become one equipotential body; if the system is insulated from its surroundings, total charge is conserved. Grounding connects a conductor to Earth, a huge charge reservoir at zero potential that can absorb or supply charge with almost no change in potential; in an external field, grounding, disconnecting the ground, and then removing the field in the correct order can leave the conductor with a net induced charge.",
    "learningObjectives": [
      "能描述两个导体接触或用导线连接后电荷如何移动，直到各导体表面处于同一电势，并用总电荷守恒求分配结果。 · Describe how charge moves when two conductors touch or are joined by a wire until their surfaces reach a common potential, and use conservation of total charge to find the resulting distribution.",
      "能把接地理解为 \\(V=0\\)、可吸收或提供大量电荷而电势几乎不变的大地电荷库，并判断接地后导体的净电荷是否改变。 · Treat ground as a \\(V=0\\) reservoir that can absorb or supply large amounts of charge with almost no potential change, and decide whether grounding changes a conductor's net charge.",
      "能按正确顺序分析“外电场中极化—接地—断开接地—撤去外场”的感应起电，并比较先断开接地与先撤去外场的不同结果。 · Analyze charging by induction in the correct sequence—polarize in an external field, ground, disconnect the ground, then remove the field—and compare disconnecting the ground before versus after removing the field.",
      "能计算两个不同半径导体球用细导线连接后的电荷、共同电势、面电荷密度与表面场强，并说明为什么小球表面场强更大。 · Calculate the charge, common potential, surface charge density, and surface field of two conducting spheres of different radii connected by a thin wire, and explain why the smaller sphere has the stronger surface field."
    ],
    "essentialKnowledge": [
      "接触后电荷移动的驱动力是电势差。正电荷受力指向电势降低的方向，自由电子受力方向相反；无论载流子是什么，净效果都是电荷重新分布，直到连通导体各处电势相同、内部电场为零，宏观电荷移动才停止。 · The driving force for charge movement after contact is a potential difference. Positive charge feels a force toward lower potential, while a free electron feels the opposite force; whatever the carrier, the net effect is charge redistribution until the connected conductors have the same potential and zero internal field, at which point macroscopic charge movement stops.",
      "若接触系统与外界绝缘，总电荷守恒：\\(Q_1+Q_2=Q_{\\mathrm{total}}\\)。接触、分开只是电荷在导体之间重新分配，并没有创造或消灭净电荷。 · If the contacting system is insulated from its surroundings, total charge is conserved: \\(Q_1+Q_2=Q_{\\mathrm{total}}\\). Touching and separating only redistribute charge among conductors; no net charge is created or destroyed.",
      "达到共同电势后，电荷按电容分配：\\(Q_i=C_iV\\)。电容大的导体分得更多电荷；电容由导体的大小、形状和周围环境决定，而不是由它原来带多少电荷决定。 · At the common potential, charge is distributed according to capacitance: \\(Q_i=C_iV\\). The conductor with larger capacitance receives more charge; capacitance is set by size, shape, and surroundings, not by the charge the conductor originally carried.",
      "接触后再分开，两个导体各自带着分配到的电荷；它们之间的相互作用仍由库仑定律描述：同号相斥、异号相吸。接触过程中电荷移动的方向由电势差决定，而不是由最终库仑力的方向决定。 · After contact and separation, each conductor carries its share of charge; their interaction is still described by Coulomb's law: like charges repel and opposite charges attract. The direction of charge movement during contact is set by the potential difference, not by the direction of the final Coulomb force.",
      "两个半径分别为 \\(R_1\\)、\\(R_2\\) 的孤立导体球用细导线连接，忽略导线电容与两球间的相互影响，则 \\(V=\\dfrac{kQ}{R}\\) 给出 \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\)。大球分得更多电荷。 · For two isolated conducting spheres of radii \\(R_1\\) and \\(R_2\\) joined by a thin wire, neglecting the wire's capacitance and their mutual influence, \\(V=\\dfrac{kQ}{R}\\) gives \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\). The larger sphere receives more charge.",
      "虽然大球分得更多电荷，但面电荷密度 \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}\\) 与半径成反比，因此 \\(\\dfrac{\\sigma_1}{\\sigma_2}=\\dfrac{R_2}{R_1}\\)。小球的面电荷密度更大，表面场强 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 也更强，尖端更容易放电。 · Although the larger sphere receives more charge, the surface charge density \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}\\) is inversely proportional to radius, so \\(\\dfrac{\\sigma_1}{\\sigma_2}=\\dfrac{R_2}{R_1}\\). The smaller sphere has the larger surface charge density and the stronger surface field \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\), so sharp points discharge more easily.",
      "接地是理想化模型：大地是一个比导体大得多、近似中性的系统；理想化后把它看作电势为零、电容极大的电荷库，可吸收或提供任意多（理想化地无限多）电荷而电势不变（实际大地近似不变）。接地导体与大地等势，通常取 \\(V_{\\mathrm{ground}}=0\\)。 · Grounding is an idealized model: Earth is a much larger, approximately neutral system; ideally it is treated as a charge reservoir at zero potential with enormous capacitance, able to absorb or supply arbitrary (ideally infinite) charge without changing its potential (in practice, nearly unchanged). A grounded conductor is at the same potential as ground, usually taken as \\(V_{\\mathrm{ground}}=0\\).",
      "接地不一定“放走所有电荷”。一个孤立带电导体接地后，净电荷通常变为零；但若导体处在外电场中，接地只把它的电势固定为零，导体仍可保留净感应电荷。 · Grounding does not always “remove all charge.” An isolated charged conductor usually loses its net charge when grounded, but in an external field grounding only fixes its potential at zero, and the conductor may retain a net induced charge.",
      "外电场中接地感应起电的标准顺序是：先把中性导体放入外场使其极化，再接地，再断开接地，最后撤去外场。这样导体留下与外场源异号的净电荷。若先撤去外场再断开接地，导体在接地状态下已经回到中性，最终不带净电荷；操作顺序决定结果。 · The standard sequence for charging by induction in an external field is: polarize a neutral conductor in the field, ground it, disconnect the ground, then remove the field. The conductor is left with net charge opposite to the external source. If the field is removed before the ground is disconnected, the conductor returns to neutral while still grounded and ends with no net charge; the order of operations determines the outcome."
    ],
    "definition": "接触再分布是指两个导体直接接触或用导线连接后，自由电荷在电势差驱动下移动，直到整个连通导体成为等势体；若系统与外界绝缘，总电荷守恒，电荷按各导体的电容分配。接地是把导体与大地相连，并把大地理想化为电势为零、电容极大、可吸收或提供任意电荷而电势几乎不变的电荷库；接地导体的电势被固定为零。外电场中的感应起电则利用“极化—接地—断开接地—撤去外场”的顺序，使导体留下净感应电荷。 · Charge redistribution by contact is the movement of free charge driven by a potential difference after two conductors touch or are joined by a wire, continuing until the connected conductors become one equipotential body; if the system is insulated, total charge is conserved and charge is distributed according to capacitance. Grounding connects a conductor to Earth, idealized as a charge reservoir at zero potential with enormous capacitance that can absorb or supply arbitrary charge with essentially no potential change; a grounded conductor's potential is fixed at zero. Charging by induction in an external field uses the sequence polarize, ground, disconnect the ground, and remove the field to leave the conductor with a net induced charge.",
    "intuition": "把电荷想成水，把电势想成水位。两个导体用导线连接，就像把两个水箱底部连通：水会从水位高的一侧流向低的一侧，直到两边水位相同。接地相当于接上一个无限大的水库，水库水位固定为零，可以吞下或倒出很多水而水位几乎不变。外电场中接地感应起电则像先把海绵放在水流中挤好形状，再封住出口，最后拿走水源，海绵就留下净电荷。 · Think of charge as water and potential as water level. Connecting two conductors with a wire is like connecting the bottoms of two tanks: water flows from the higher to the lower level until the levels match. Grounding is like connecting to an enormous reservoir whose level is fixed at zero; it can swallow or supply a lot of water with almost no level change. Charging by induction with grounding is like shaping a sponge in a flow, sealing its outlet, and then removing the source, so the sponge keeps a net charge.",
    "intuitionDetailed": "接触再分布的关键不是“电荷平均分”，而是“电势相等”。两个导体一相连，电荷就重新排队，直到导体内部电场为零、表面成为等势面。对两个用细导线连接的孤立导体球，电势相等给出 \\(\\dfrac{kQ_1}{R_1}=\\dfrac{kQ_2}{R_2}\\)，所以电荷与半径成正比；但面电荷密度与半径成反比，因此小球表面电场更强。接地时，大地像无限大的水库：把导体接到大地，导体的电势被拉到零，电荷会流入或流出大地，直到满足这一条件。若导体是孤立的带电球，接地后净电荷变为零；若导体旁边有带电体，接地后导体可以带净感应电荷，因为外场仍然存在。感应起电的顺序非常重要：先接地再撤外场，撤场时电荷会沿着接地线流回大地；先断接地再撤外场，净电荷被“锁”在导体上。 · The key to contact redistribution is not “charge divides equally” but “potentials become equal.” Once two conductors are connected, charge rearranges until the internal field is zero and the surface is an equipotential surface. For two isolated conducting spheres joined by a thin wire, equal potential gives \\(\\dfrac{kQ_1}{R_1}=\\dfrac{kQ_2}{R_2}\\), so charge is proportional to radius; surface charge density is inversely proportional to radius, so the smaller sphere has the stronger surface field. When grounding, Earth acts like an enormous reservoir: connecting the conductor to ground pulls its potential to zero, and charge flows into or out of Earth until that condition is met. An isolated charged sphere loses its net charge when grounded; a conductor near a charged object can retain net induced charge because the external field remains. The order of induction matters: if the ground is disconnected after the field is removed, charge flows back to Earth as the field is removed; if the ground is disconnected before the field is removed, the net charge is trapped on the conductor.",
    "formulas": [
      {
        "latex": "Q_1+Q_2=Q_{\\mathrm{total}}",
        "note": "孤立接触系统的总电荷守恒。 · Total charge of an insulated contacting system is conserved."
      },
      {
        "latex": "V_1=V_2",
        "note": "导体接触或用导线连接后达到共同电势。 · Conductors in contact or joined by a wire reach a common potential."
      },
      {
        "latex": "Q_i=C_iV",
        "note": "达到共同电势后，电荷按电容分配；电容大的导体分得更多电荷。 · At the common potential, charge is distributed according to capacitance; the larger capacitance receives more charge."
      },
      {
        "latex": "V=\\dfrac{kQ}{R}",
        "note": "半径 \\(R\\) 的孤立导体球表面及内部的电势。 · Potential at the surface and throughout an isolated conducting sphere of radius \\(R\\)."
      },
      {
        "latex": "\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}",
        "note": "两个用细导线连接的导体球，电荷与半径成正比。 · For two conducting spheres joined by a thin wire, charge is proportional to radius."
      },
      {
        "latex": "\\dfrac{\\sigma_1}{\\sigma_2}=\\dfrac{R_2}{R_1}",
        "note": "面电荷密度与半径成反比，小球表面电荷更密集。 · Surface charge density is inversely proportional to radius, so the smaller sphere has denser surface charge."
      },
      {
        "latex": "E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}",
        "note": "导体表面外侧场强；小球 \\(\\sigma\\) 更大，因此表面场强更大。 · Field just outside a conductor surface; the smaller sphere has larger \\(\\sigma\\) and therefore a stronger surface field."
      },
      {
        "latex": "V_{\\mathrm{ground}}=0,\\qquad \\Delta V_{\\mathrm{Earth}}=\\dfrac{\\Delta Q}{C_{\\mathrm{Earth}}}\\approx0",
        "note": "大地作为零电势、极大电容的电荷库，吸放电荷时电势几乎不变。 · Earth is a zero-potential, enormous-capacitance reservoir, so its potential changes negligibly when charge is exchanged."
      }
    ],
    "derivationNotes": [
      {
        "from": "两个导体接触 · Two conductors touch",
        "to": "电势差驱动电荷移动 · Potential difference drives charge motion",
        "note": "接触前两导体一般电势不同；接触后自由电荷受力移动，直到导体内部电场为零、表面等势。 · Before contact the conductors generally have different potentials; after contact, free charge moves until the internal field is zero and the surface is equipotential."
      },
      {
        "from": "总电荷守恒 · Conservation of total charge",
        "to": "电荷分配 · Charge distribution",
        "note": "孤立系统 \\(Q_1+Q_2=Q_{\\mathrm{total}}\\)；再用 \\(V_1=V_2\\) 与 \\(Q_i=C_iV\\) 解出各自电荷。 · For an insulated system, \\(Q_1+Q_2=Q_{\\mathrm{total}}\\); then use \\(V_1=V_2\\) and \\(Q_i=C_iV\\) to solve for each charge."
      },
      {
        "from": "导体球电势 · Potential of a conducting sphere",
        "to": "电荷比与面密度比 · Charge and surface-density ratios",
        "note": "由 \\(\\dfrac{kQ_1}{R_1}=\\dfrac{kQ_2}{R_2}\\) 得 \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\)；再由 \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}\\) 得 \\(\\dfrac{\\sigma_1}{\\sigma_2}=\\dfrac{R_2}{R_1}\\)。 · From \\(\\dfrac{kQ_1}{R_1}=\\dfrac{kQ_2}{R_2}\\), \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\); then \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}\\) gives \\(\\dfrac{\\sigma_1}{\\sigma_2}=\\dfrac{R_2}{R_1}\\)."
      },
      {
        "from": "接地 · Grounding",
        "to": "电势固定为零 · Potential fixed at zero",
        "note": "大地电容极大，少量电荷交换几乎不改变其电势；接地导体与大地等势，故 \\(V=0\\)。 · Earth's capacitance is enormous, so exchanging a finite charge barely changes its potential; a grounded conductor shares that potential, so \\(V=0\\)."
      },
      {
        "from": "外场中的导体 · Conductor in an external field",
        "to": "感应起电 · Charging by induction",
        "note": "外场使导体极化；接地允许电荷与大地交换；先断接地再撤外场，净电荷被保留。 · The external field polarizes the conductor; grounding allows charge exchange with Earth; disconnecting the ground before removing the field preserves the net charge."
      }
    ],
    "conditions": [
      "导体之间直接接触或用导线连接，连接期间系统与外界绝缘（接地情形除外）。 · The conductors touch directly or are joined by a wire, and the system is insulated from its surroundings during contact except when intentionally grounded.",
      "电荷分配在达到静电平衡后计算；平衡时连通导体内部 \\(E=0\\)、表面等势。 · Calculate the distribution after electrostatic equilibrium is reached; at equilibrium the connected conductors have \\(E=0\\) inside and equipotential surfaces.",
      "忽略导线本身的电容与电阻；两导体球之间的距离足够远，互不显著影响电势。 · Neglect the wire's capacitance and resistance; the spheres are far enough apart that they do not significantly affect each other's potential.",
      "大地被理想化为电势为零、电容极大的电荷库；接地线的电容和电阻忽略。 · Earth is idealized as a zero-potential, enormous-capacitance charge reservoir; the grounding wire's capacitance and resistance are neglected.",
      "外电场源在接地与断接过程中保持固定；若外场变化，必须重新分析电荷流动。 · The external field source remains fixed while grounding and disconnecting; if the field changes, the charge flow must be reanalyzed.",
      "表面场强用 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)，适用于导体表面外侧且表面附近无其他电荷的情形。 · The surface field \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) applies just outside the conductor when no other charge is very close to the surface."
    ],
    "keyPoints": [
      "接触后电荷移动的判据是电势差，不是电荷量大小；最终连通导体等势。 · The criterion for charge motion after contact is potential difference, not the amount of charge; the connected conductors end at a common potential.",
      "孤立接触系统总电荷守恒：\\(Q_1+Q_2=Q_{\\mathrm{total}}\\)。 · For an insulated contacting system, total charge is conserved.",
      "电荷按电容分配：\\(Q_i=C_iV\\)；电容大的导体分得更多电荷。 · Charge is distributed by capacitance: \\(Q_i=C_iV\\); the larger capacitance receives more charge.",
      "两个导体球用细导线连接时，\\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\)，但 \\(\\dfrac{\\sigma_1}{\\sigma_2}=\\dfrac{R_2}{R_1}\\)。 · For two spheres joined by a thin wire, charge is proportional to radius, but surface charge density is inversely proportional to radius.",
      "小球面电荷密度更大，表面场强 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 更强。 · The smaller sphere has denser surface charge and a stronger surface field.",
      "接地把导体电势固定为零，大地是可吸放大量电荷而电势几乎不变的电荷库。 · Grounding fixes the conductor's potential at zero; Earth is a reservoir that can absorb or supply large charge with almost no potential change.",
      "孤立带电导体接地后净电荷通常变为零；外场中的导体接地后仍可能带净感应电荷。 · An isolated charged conductor usually loses its net charge when grounded; a conductor in an external field may retain net induced charge after grounding.",
      "感应起电的顺序决定结果：先断接地再撤外场，导体留下净电荷；先撤外场再断接地，导体回到中性。 · The order of induction determines the result: disconnect the ground before removing the field to leave net charge; remove the field first to return the conductor to neutral."
    ],
    "misconceptions": [
      "认为两个导体接触后电荷一定平均分配；只有两个完全相同的孤立导体球才近似平均，一般情况下电荷按电容分配。 · Thinking charge always divides equally after contact; equal sharing is only a good approximation for two identical isolated spheres, while in general charge is distributed by capacitance.",
      "认为电荷从“电荷多”的导体流向“电荷少”的导体；实际驱动力是电势差，电荷可能从电荷少但电势高的一侧流出。 · Thinking charge flows from the conductor with more charge to the one with less; the actual driving force is potential difference, and charge can flow from a lower-charge but higher-potential conductor.",
      "认为接地一定把导体上的电荷全部放走；接地只把电势固定为零，外场中的导体仍可带净感应电荷。 · Thinking grounding always removes all charge; grounding only fixes the potential at zero, and a conductor in an external field can retain net induced charge.",
      "认为大地电势会因吸收电荷而明显改变；大地的电容极大，有限电荷交换引起的电势变化可以忽略。 · Thinking Earth's potential changes noticeably when it absorbs charge; Earth's capacitance is enormous, so the potential change from a finite charge exchange is negligible.",
      "认为接地后导体上各点电荷密度相同；即使等势，面电荷密度仍由曲率和几何决定，尖端处更大。 · Thinking surface charge density is uniform after grounding; even at a common potential, surface charge density is set by curvature and geometry and is larger at sharp points.",
      "认为外电场中中性导体接地后仍一定中性；接地允许电荷与大地交换，导体可以带上净感应电荷。 · Thinking a neutral conductor must remain neutral after grounding in an external field; grounding allows charge exchange with Earth, so the conductor can acquire net induced charge.",
      "认为感应起电的顺序无关紧要；先断接地与先撤外场会得到完全不同的最终电荷。 · Thinking the order of induction steps does not matter; disconnecting the ground before or after removing the field gives completely different final charges.",
      "认为接地线的电容和电阻总是可以忽略；在快速变化或高频情形下，接地线的电感与电容会影响结果。 · Thinking the grounding wire's capacitance and resistance are always negligible; for rapid or high-frequency changes, its inductance and capacitance can matter."
    ],
    "examples": [
      {
        "title": "例 1 · 两个不同半径的导体球用导线连接 · Example 1: Two conducting spheres of different radii joined by a wire",
        "prompt": "两个半径分别为 \\(R_1=2.0\\,\\mathrm{cm}\\)、\\(R_2=4.0\\,\\mathrm{cm}\\) 的孤立导体球，用细导线连接。总电荷为 \\(+12\\,\\mu\\mathrm{C}\\)。求每个球的电荷、共同电势、面电荷密度与表面场强。 · Two isolated conducting spheres of radii \\(R_1=2.0\\,\\mathrm{cm}\\) and \\(R_2=4.0\\,\\mathrm{cm}\\) are joined by a thin wire. The total charge is \\(+12\\,\\mu\\mathrm{C}\\). Find the charge on each sphere, the common potential, the surface charge densities, and the surface fields.",
        "steps": [
          "总电荷守恒：\\(Q_1+Q_2=+12\\,\\mu\\mathrm{C}\\)。 · Conservation of total charge: \\(Q_1+Q_2=+12\\,\\mu\\mathrm{C}\\)。",
          "共同电势给出 \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}=\\dfrac{2.0}{4.0}=\\dfrac{1}{2}\\)，所以 \\(Q_1=4.0\\,\\mu\\mathrm{C}\\)、\\(Q_2=8.0\\,\\mu\\mathrm{C}\\)。 · Equal potential gives \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}=\\dfrac{2.0}{4.0}=\\dfrac{1}{2}\\), so \\(Q_1=4.0\\,\\mu\\mathrm{C}\\) and \\(Q_2=8.0\\,\\mu\\mathrm{C}\\)。",
          "共同电势 \\(V=\\dfrac{kQ_1}{R_1}=\\dfrac{(9.0\\times10^{9})(4.0\\times10^{-6})}{0.020}=1.8\\times10^{6}\\,\\mathrm{V}\\)；用 \\(Q_2\\) 与 \\(R_2\\) 检查也得到同一值。 · The common potential is \\(V=\\dfrac{kQ_1}{R_1}=\\dfrac{(9.0\\times10^{9})(4.0\\times10^{-6})}{0.020}=1.8\\times10^{6}\\,\\mathrm{V}\\); using \\(Q_2\\) and \\(R_2\\) gives the same value.",
          "面电荷密度：\\(\\sigma_1=\\dfrac{Q_1}{4\\pi R_1^{2}}\\approx8.0\\times10^{-4}\\,\\mathrm{C\\,m^{-2}}\\)，\\(\\sigma_2=\\dfrac{Q_2}{4\\pi R_2^{2}}\\approx4.0\\times10^{-4}\\,\\mathrm{C\\,m^{-2}}\\)。 · Surface charge densities: \\(\\sigma_1=\\dfrac{Q_1}{4\\pi R_1^{2}}\\approx8.0\\times10^{-4}\\,\\mathrm{C\\,m^{-2}}\\) and \\(\\sigma_2=\\dfrac{Q_2}{4\\pi R_2^{2}}\\approx4.0\\times10^{-4}\\,\\mathrm{C\\,m^{-2}}\\)。",
          "表面场强：\\(E_1=\\dfrac{\\sigma_1}{\\varepsilon_0}\\approx9.0\\times10^{7}\\,\\mathrm{V\\,m^{-1}}\\)，\\(E_2=\\dfrac{\\sigma_2}{\\varepsilon_0}\\approx4.5\\times10^{7}\\,\\mathrm{V\\,m^{-1}}\\)。 · Surface fields: \\(E_1=\\dfrac{\\sigma_1}{\\varepsilon_0}\\approx9.0\\times10^{7}\\,\\mathrm{V\\,m^{-1}}\\) and \\(E_2=\\dfrac{\\sigma_2}{\\varepsilon_0}\\approx4.5\\times10^{7}\\,\\mathrm{V\\,m^{-1}}\\)。"
        ],
        "solution": "\\(Q_1=4.0\\,\\mu\\mathrm{C}\\)、\\(Q_2=8.0\\,\\mu\\mathrm{C}\\)，\\(V=1.8\\times10^{6}\\,\\mathrm{V}\\)；小球面电荷密度和表面场强都是大球的两倍。 · \\(Q_1=4.0\\,\\mu\\mathrm{C}\\), \\(Q_2=8.0\\,\\mu\\mathrm{C}\\), \\(V=1.8\\times10^{6}\\,\\mathrm{V}\\); the smaller sphere has twice the surface charge density and twice the surface field of the larger sphere.",
        "solutionLatex": "Q_1=4.0\\,\\mu\\mathrm{C},\\;Q_2=8.0\\,\\mu\\mathrm{C},\\;V=1.8\\times10^{6}\\,\\mathrm{V}"
      },
      {
        "title": "例 2 · 两个相同导体球接触 · Example 2: Two identical conducting spheres in contact",
        "prompt": "两个完全相同、半径均为 \\(R\\) 的导体球，原来分别带 \\(+6.0\\,\\mu\\mathrm{C}\\) 和 \\(-2.0\\,\\mu\\mathrm{C}\\)。让它们接触后再分开，求每个球的电荷。 · Two identical conducting spheres of radius \\(R\\) carry \\(+6.0\\,\\mu\\mathrm{C}\\) and \\(-2.0\\,\\mu\\mathrm{C}\\). They touch and then separate. Find the charge on each sphere.",
        "steps": [
          "把两球作为孤立系统：\\(Q_{\\mathrm{total}}=+6.0-2.0=+4.0\\,\\mu\\mathrm{C}\\)。 · Treat the two spheres as an insulated system: \\(Q_{\\mathrm{total}}=+6.0-2.0=+4.0\\,\\mu\\mathrm{C}\\)。",
          "两球完全相同，接触后电势相等，因此电荷平均分配：\\(Q_{\\mathrm{each}}=\\dfrac{+4.0}{2}=+2.0\\,\\mu\\mathrm{C}\\)。 · The spheres are identical, so equal potential means equal charge: \\(Q_{\\mathrm{each}}=\\dfrac{+4.0}{2}=+2.0\\,\\mu\\mathrm{C}\\)。"
        ],
        "solution": "每个球带 \\(+2.0\\,\\mu\\mathrm{C}\\)，总电荷仍为 \\(+4.0\\,\\mu\\mathrm{C}\\)。 · Each sphere carries \\(+2.0\\,\\mu\\mathrm{C}\\), and the total charge remains \\(+4.0\\,\\mu\\mathrm{C}\\)。",
        "solutionLatex": "Q_{\\mathrm{each}}=\\dfrac{+6.0+(-2.0)}{2}\\,\\mu\\mathrm{C}=+2.0\\,\\mu\\mathrm{C}"
      },
      {
        "title": "例 3 · 孤立带电导体球接地 · Example 3: Grounding an isolated charged conducting sphere",
        "prompt": "一个半径 \\(R=0.10\\,\\mathrm{m}\\) 的孤立导体球带 \\(+5.0\\,\\mu\\mathrm{C}\\) 的电荷，然后用导线接地。求最终电荷以及电荷如何流动。 · An isolated conducting sphere of radius \\(R=0.10\\,\\mathrm{m}\\) carries \\(+5.0\\,\\mu\\mathrm{C}\\). It is then grounded by a wire. Find the final charge and describe how charge flows.",
        "steps": [
          "接地后导体与大地等势，取大地电势为零，因此球体最终 \\(V=0\\)。 · After grounding, the conductor is at the same potential as Earth; taking Earth's potential as zero gives \\(V=0\\) for the sphere.",
          "孤立导体球的电势为 \\(V=\\dfrac{kQ}{R}\\)。要使其为零，必须 \\(Q=0\\)。 · The potential of an isolated conducting sphere is \\(V=\\dfrac{kQ}{R}\\). For this to be zero, \\(Q=0\\).",
          "球原来带正电，电子从大地经接地线流向球体，中和 \\(+5.0\\,\\mu\\mathrm{C}\\)；最终球不带净电荷。 · The sphere was positive, so electrons flow from Earth through the grounding wire to the sphere and neutralize \\(+5.0\\,\\mu\\mathrm{C}\\); the sphere ends with no net charge.",
          "大地获得等量异号电荷，但其电容极大，电势变化可以忽略。 · Earth gains an equal opposite charge, but its capacitance is enormous, so its potential change is negligible."
        ],
        "solution": "最终 \\(Q=0\\)；约 \\(5.0\\,\\mu\\mathrm{C}\\) 的电子从大地流向导体，大地电势几乎不变。 · Finally \\(Q=0\\); about \\(5.0\\,\\mu\\mathrm{C}\\) of electrons flow from Earth to the conductor, while Earth's potential remains essentially unchanged.",
        "solutionLatex": "V=\\dfrac{kQ}{R}=0\\;\\Rightarrow\\;Q=0"
      },
      {
        "title": "例 4 · 外电场中接地感应起电 · Example 4: Charging by induction with grounding in an external field",
        "prompt": "一个中性导体球放在带正电的棒附近。描述以下两种操作的最终结果：（a）先接地，再断开接地，最后移走棒；（b）先接地，再移走棒，最后断开接地。 · A neutral conducting sphere is placed near a positively charged rod. Describe the final result of two procedures: (a) ground the sphere, disconnect the ground, then remove the rod; (b) ground the sphere, remove the rod, then disconnect the ground.",
        "steps": [
          "棒带正电，使导体球极化：靠近棒的一侧感应负电荷，远离棒的一侧感应正电荷，净电荷仍为零。 · The positive rod polarizes the sphere: negative induced charge appears on the side near the rod and positive charge on the far side, while the net charge remains zero.",
          "接地时，大地与球等势；棒的正电荷会使球的电势趋于升高，接地后电子从大地流向球以维持 \\(V=0\\)，球带上净负电荷。 · When grounded, Earth and the sphere are at the same potential; the positive rod tends to raise the sphere's potential, so electrons flow from Earth to the sphere to maintain \\(V=0\\), leaving the sphere with net negative charge.",
          "（a）在棒仍存在时断开接地，净负电荷被“锁”在球上；再移走棒，负电荷重新分布到外表面，球最终带净负电。 · (a) Disconnecting the ground while the rod is still present traps the net negative charge; removing the rod then lets the negative charge redistribute over the outer surface, leaving the sphere net negative.",
          "（b）在接地仍连接时移走棒，接地线允许电荷持续流回大地，使球始终保持零电势；棒移走后球回到中性，断开接地也不会再改变净电荷。 · (b) Removing the rod while the ground is still connected lets charge continue to flow back to Earth and keeps the sphere at zero potential; after the rod is gone the sphere is neutral, and disconnecting the ground no longer changes its net charge."
        ],
        "solution": "（a）球最终带净负电；（b）球最终不带净电荷。顺序决定结果。 · (a) The sphere ends with net negative charge; (b) the sphere ends with no net charge. The order determines the outcome.",
        "solutionLatex": "\\text{(a) }Q_{\\mathrm{final}}<0;\\qquad \\text{(b) }Q_{\\mathrm{final}}=0"
      },
      {
        "title": "例 5 · 接地与大地电荷库 · Example 5: Grounding and the Earth as a charge reservoir",
        "prompt": "一个带 \\(-3.0\\,\\mu\\mathrm{C}\\) 的导体接地。多少电荷流向大地？大地的电势会明显改变吗？ · A conductor carrying \\(-3.0\\,\\mu\\mathrm{C}\\) is grounded. How much charge flows to Earth? Does Earth's potential change noticeably?",
        "steps": [
          "接地后导体电势为零；孤立导体要满足 \\(V=0\\)，净电荷必须为零。 · After grounding, the conductor's potential is zero; for an isolated conductor to have \\(V=0\\), its net charge must be zero.",
          "导体原来带负电，多余的电子从导体经接地线流向大地，流量为 \\(3.0\\,\\mu\\mathrm{C}\\) 的电子电荷。 · The conductor was negative, so excess electrons flow from the conductor to Earth through the grounding wire, carrying \\(3.0\\,\\mu\\mathrm{C}\\) of electron charge.",
          "大地电容极大，\\(\\Delta V_{\\mathrm{Earth}}=\\dfrac{\\Delta Q}{C_{\\mathrm{Earth}}}\\approx0\\)，因此大地电势几乎不变。 · Earth's capacitance is enormous, so \\(\\Delta V_{\\mathrm{Earth}}=\\dfrac{\\Delta Q}{C_{\\mathrm{Earth}}}\\approx0\\); Earth's potential is essentially unchanged."
        ],
        "solution": "约 \\(3.0\\,\\mu\\mathrm{C}\\) 的电子流向大地；大地电势几乎不变。 · About \\(3.0\\,\\mu\\mathrm{C}\\) of electrons flow to Earth; Earth's potential remains essentially unchanged.",
        "solutionLatex": "\\Delta Q=3.0\\,\\mu\\mathrm{C},\\qquad \\Delta V_{\\mathrm{Earth}}\\approx0"
      }
    ],
    "examTips": [
      "先判断导体是否接触或接地；接触问题用“等势 + 总电荷守恒”，接地问题用“\\(V=0\\) + 可与大地交换电荷”。 · First decide whether the conductors touch or are grounded; use “equal potential plus conservation of total charge” for contact, and “\\(V=0\\) plus charge exchange with Earth” for grounding.",
      "不要默认电荷平均分配；只有两个完全相同的孤立导体球才近似平均，一般情况下用 \\(Q_i=C_iV\\)。 · Do not assume charge divides equally; equal sharing is only approximate for two identical isolated spheres, and in general use \\(Q_i=C_iV\\).",
      "两个导体球用细导线连接时，先写 \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\)，再用总电荷守恒求各自电荷。 · For two spheres joined by a thin wire, first write \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\), then use conservation of total charge to find each charge.",
      "区分“电荷多”和“电势高”：电荷流向由电势差决定，不由电荷量决定。 · Distinguish “more charge” from “higher potential”: charge flow is driven by potential difference, not by the amount of charge.",
      "接地题先问“接地时外场还在不在”；外场存在时接地可能留下净感应电荷，外场撤去后电荷可能流回大地。 · For grounding questions, ask whether the external field is still present; with the field present, grounding can leave net induced charge, and removing the field can let charge flow back to Earth.",
      "感应起电的顺序题要逐步写清“谁还在、谁已断开”，再用等势与电荷守恒判断电荷流向。 · For induction-sequence questions, state step by step what is still present and what has been disconnected, then use equal potential and charge conservation to determine charge flow.",
      "检查单位与数量级：\\(\\mu\\mathrm{C}\\) 换成 \\(10^{-6}\\,\\mathrm{C}\\)，\\(\\mathrm{cm}\\) 换成 \\(\\mathrm{m}\\)，表面场强常用 \\(\\mathrm{V\\,m^{-1}}\\) 或 \\(\\mathrm{N\\,C^{-1}}\\)。 · Check units and orders of magnitude: convert \\(\\mu\\mathrm{C}\\) to \\(10^{-6}\\,\\mathrm{C}\\) and \\(\\mathrm{cm}\\) to \\(\\mathrm{m}\\); surface fields are commonly expressed in \\(\\mathrm{V\\,m^{-1}}\\) or \\(\\mathrm{N\\,C^{-1}}\\)."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.1",
        "title": "导体静电 · Electrostatics with Conductors",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.2",
        "title": "电荷再分布 · Redistribution of Charge between Conductors",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.3",
        "title": "电容器 · Capacitors",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.6",
        "title": "导体静电平衡的建立 · Establishing Electrostatic Equilibrium",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.2",
        "title": "电势 · Electric Potential",
        "relation": "先修 · prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u10",
    "connections": [
      "上游：10.1 的静电平衡条件与 9.2 的电势概念是本节的基础；先理解 \\(E_{\\mathrm{inside}}=0\\)、等势体和 \\(V=\\dfrac{kQ}{R}\\)，才能分析接触后的电荷分配。 · Upstream: the equilibrium conditions from 10.1 and the potential concept from 9.2 are the foundation; understanding \\(E_{\\mathrm{inside}}=0\\), equipotential bodies, and \\(V=\\dfrac{kQ}{R}\\) is needed to analyze charge sharing after contact.",
      "下游：10.3 电容器把“导体储存电荷”的思想定量化；10.6 进一步讨论平衡建立的时间尺度与外场中的导体极化。 · Downstream: 10.3 quantifies “a conductor stores charge” through capacitance; 10.6 goes further into the time scale for reaching equilibrium and polarization in an external field.",
      "应用：静电感应、接地放电、避雷针、法拉第笼和电子设备接地都依赖本节的概念。 · Applications: electrostatic induction, grounding and discharge, lightning rods, Faraday cages, and grounding of electronic equipment all rely on these ideas.",
      "跨学科：生物膜电位、化学中的离子分配和材料表面的电荷弛豫都可以用“电势相等 + 电荷守恒”的框架理解。 · Cross-disciplinary: membrane potentials in biology, ion partitioning in chemistry, and charge relaxation on material surfaces can all be understood with the “equal potential plus charge conservation” framework."
    ],
    "intuitionDetailed": "接触再分布最常见的错误是“电荷平均分”。更准确的图像是：电荷像水，电势像水位；两个导体一相连，水就流动，直到水位相同。水位相同并不意味着水量相同：底面积大的水箱（电容大的导体）会分到更多的水。对两个导体球，半径大的球电容大，所以分到的电荷多；但它的表面积也大，面电荷密度反而小，表面场强反而弱。接地则是把水箱接到一个无限大的水库，水库水位固定为零；导体接到水库后，水位被拉到零，多余的水会流入水库，或者水库的水会流入导体。若导体旁边有带电体，外场会持续把水位推高或压低，所以接地后导体仍可能带净电荷。感应起电的顺序题，关键是看“断开水箱”和“撤走外场”谁先发生：先断开水箱，外场撤走时电荷无处可去，就留在导体上；先撤走外场，水位回到零，电荷会沿接地线流回水库。 · The most common mistake about contact redistribution is “charge divides equally.” A better picture is: charge is water and potential is water level; connecting two conductors lets water flow until the levels match. Equal level does not mean equal amount: a tank with a larger bottom area (larger capacitance) receives more water. For two conducting spheres, the larger sphere has larger capacitance and receives more charge, but it also has larger surface area, so its surface charge density and surface field are smaller. Grounding connects the tank to an enormous reservoir whose level is fixed at zero; the conductor's level is pulled to zero, and excess water flows into the reservoir or water flows from it into the conductor. If a charged object is nearby, the external field keeps pushing the level up or down, so a grounded conductor can still carry net charge. For induction-sequence questions, the key is which happens first—disconnecting the reservoir or removing the external field. If the reservoir is disconnected first, charge has nowhere to go when the field is removed and stays on the conductor; if the field is removed first, the level returns to zero and charge flows back through the grounding wire.",
    "development": [
      "回顾静电平衡与电势：导体内 \\(E=0\\)、整体等势，\\(V=\\dfrac{kQ}{R}\\)。 · Review electrostatic equilibrium and potential: \\(E=0\\) inside a conductor, the whole conductor is equipotential, and \\(V=\\dfrac{kQ}{R}\\).",
      "分析两个导体接触：电势差驱动电荷移动，最终等势；写出总电荷守恒。 · Analyze two conductors in contact: potential difference drives charge motion until equal potential; write conservation of total charge.",
      "引入电容分配：\\(Q_i=C_iV\\)，并用两个导体球的例子得到 \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\)。 · Introduce distribution by capacitance, \\(Q_i=C_iV\\), and use two spheres to obtain \\(\\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2}\\).",
      "比较面电荷密度与表面场强：小球 \\(\\sigma\\) 更大、\\(E\\) 更强。 · Compare surface charge density and field: the smaller sphere has larger \\(\\sigma\\) and stronger \\(E\\).",
      "建立接地的理想化模型：\\(V=0\\)、极大电容、可吸放电荷；区分孤立接地与外场中接地。 · Build the idealized grounding model: \\(V=0\\), enormous capacitance, able to absorb or supply charge; distinguish isolated grounding from grounding in an external field.",
      "用“极化—接地—断接地—撤外场”的顺序分析感应起电，并做顺序对照。 · Analyze induction with the sequence polarize–ground–disconnect–remove field, and compare the reversed order."
    ],
    "checks": [
      "两个导体接触后，电荷移动停止的条件是什么？是电荷量相等还是电势相等？ · What condition stops charge movement after two conductors touch—equal charge or equal potential?",
      "两个不同半径的导体球用导线连接，哪个球分得更多电荷？哪个球表面场强更大？ · For two spheres of different radii joined by a wire, which receives more charge, and which has the stronger surface field?",
      "接地后导体一定不带电吗？请区分孤立带电导体与外场中的导体。 · Must a grounded conductor be uncharged? Distinguish an isolated charged conductor from one in an external field.",
      "为什么大地可以吸收或提供大量电荷而电势几乎不变？ · Why can Earth absorb or supply large amounts of charge with almost no potential change?",
      "外电场中接地感应起电的正确操作顺序是什么？ · What is the correct sequence for charging by induction with grounding in an external field?",
      "如果先撤去外场再断开接地，最终电荷与先断开接地再撤外场有什么不同？ · If the external field is removed before disconnecting the ground, how does the final charge differ from disconnecting the ground first?",
      "两个相同导体球接触后电荷平均分配，为什么这个结论不能随便推广到不同大小的导体？ · Two identical spheres share charge equally after contact; why can this result not be generalized to conductors of different sizes?"
    ],
    "vocabulary": [
      {
        "termZh": "电荷再分布",
        "termEn": "charge redistribution",
        "defZh": "导体接触或受到外场作用时，自由电荷重新排列，直到导体内部电场为零、表面等势的过程。",
        "defEn": "The process in which free charge rearranges when conductors touch or are exposed to an external field, until the internal field is zero and the surface is equipotential."
      },
      {
        "termZh": "接触起电",
        "termEn": "charging by contact",
        "defZh": "两个导体直接接触后电荷重新分配，分开时各自带上新的电荷；总电荷守恒。",
        "defEn": "Charge redistribution after two conductors touch directly, so that each carries a new charge when separated; total charge is conserved."
      },
      {
        "termZh": "共同电势",
        "termEn": "common potential",
        "defZh": "用导线连接或直接接触的导体在静电平衡时具有的同一电势。",
        "defEn": "The identical potential shared by conductors that are connected by a wire or in direct contact at electrostatic equilibrium."
      },
      {
        "termZh": "接地",
        "termEn": "grounding",
        "defZh": "把导体与大地相连，使导体电势等于大地电势（通常取为零），并允许电荷与大地交换。",
        "defEn": "Connecting a conductor to Earth so that its potential equals Earth's potential (usually taken as zero) and charge can be exchanged with Earth."
      },
      {
        "termZh": "感应起电",
        "termEn": "charging by induction",
        "defZh": "利用外电场使导体极化，再通过接地和断开接地，使导体留下净感应电荷的过程。",
        "defEn": "The process of polarizing a conductor in an external field and then grounding and disconnecting it so that it retains a net induced charge."
      },
      {
        "termZh": "零电势参考点",
        "termEn": "zero-potential reference",
        "defZh": "电势被规定为零的位置或导体；接地时通常把大地取作零电势参考点。",
        "defEn": "A location or conductor whose potential is defined as zero; when grounding, Earth is usually taken as the zero-potential reference."
      },
      {
        "termZh": "电荷库",
        "termEn": "charge reservoir",
        "defZh": "电容极大、可吸收或提供大量电荷而电势几乎不变的物体；大地是最常用的理想电荷库。",
        "defEn": "An object with enormous capacitance that can absorb or supply large amounts of charge with almost no potential change; Earth is the most common ideal charge reservoir."
      },
      {
        "termZh": "电容",
        "termEn": "capacitance",
        "defZh": "导体或电容器在给定电势下储存电荷的能力，\\(C=\\dfrac{Q}{V}\\)；导体球 \\(C=4\\pi\\varepsilon_0R\\)。",
        "defEn": "The ability of a conductor or capacitor to store charge at a given potential, \\(C=\\dfrac{Q}{V}\\); for a conducting sphere, \\(C=4\\pi\\varepsilon_0R\\)."
      }
    ]
  },
  "10.6": {
    "id": "em/em-u10/10.6",
    "subject": "em",
    "chapterId": "em-u10",
    "unitCode": "10",
    "unitTitleZh": "导体与电容器",
    "unitTitleEn": "Conductors and Capacitors",
    "code": "10.6",
    "titleZh": "导体静电平衡的建立",
    "titleEn": "Establishing Electrostatic Equilibrium",
    "layer": "ap",
    "summary": "导体中的自由电荷在外电场或额外电荷的作用下移动，表面出现感应电荷；感应电荷产生的场与外场反向，直到导体内部合场为零、整个导体等势，这就是静电平衡。平衡建立的时间极短，宏观上视为瞬时完成。外电场中的中性导体因此发生极化：两侧出现等量异号感应电荷，净电荷仍为零，导体保持等势，表面场线垂直于表面。 · Free charge in a conductor moves under an applied field or added charge, producing induced surface charge whose field opposes the applied field until the net internal field is zero and the whole conductor is equipotential—this is electrostatic equilibrium. Equilibrium is established in an extremely short time and is treated as instantaneous macroscopically. A neutral conductor in an external field therefore polarizes: equal and opposite induced charges appear on opposite sides, the net charge remains zero, the conductor stays equipotential, and field lines meet its surface perpendicularly.",
    "learningObjectives": [
      "能说明导体从非平衡到静电平衡的微观过程：自由电子在电场力作用下移动，表面出现感应电荷，直到导体内部净场为零。 · Explain the microscopic process by which a conductor reaches electrostatic equilibrium: free electrons move under the electric force, induced surface charge appears, and the net internal field becomes zero.",
      "能说明静电平衡建立的时间极短，数量级约为 \\(10^{-16}\\,\\mathrm{s}\\) 或更短，因此在宏观实验和 AP 题目中视为瞬时完成。 · Explain that electrostatic equilibrium is established in an extremely short time, on the order of \\(10^{-16}\\,\\mathrm{s}\\) or less, so it is treated as instantaneous in macroscopic experiments and AP problems.",
      "能分析外电场中中性导体的极化：两侧出现等量异号感应电荷，内部场被抵消，导体仍是等势体，表面场线垂直于表面。 · Analyze polarization of a neutral conductor in an external field: equal and opposite induced charges appear on opposite sides, the internal field is canceled, the conductor remains equipotential, and surface field lines are perpendicular to the surface.",
      "能用 \\(E_{\\mathrm{inside}}=0\\)、等势体和表面场垂直等条件判断导体上的电荷分布、场图与等势线。 · Use the conditions of zero internal field, equipotential body, and perpendicular surface field to determine charge distributions, field diagrams, and equipotential lines on conductors."
    ],
    "essentialKnowledge": [
      "静电平衡是指：导体内部没有宏观电荷的定向移动，自由电荷的宏观运动停止。平衡是一种动态的“净效果”：自由电子仍在微观上运动，但宏观上没有净电流。 · Electrostatic equilibrium means that inside the conductor there is no macroscopic directed motion of charge and the macroscopic motion of free charge has stopped. It is a dynamic net condition: free electrons still move microscopically, but there is no net macroscopic current.",
      "平衡时导体内部电场为零：\\(\\vec E_{\\mathrm{inside}}=0\\)。如果内部还有净电场，自由电子就会继续受力移动，因此平衡不可能维持。 · At equilibrium the internal field is zero: \\(\\vec E_{\\mathrm{inside}}=0\\). If a net internal field remained, free electrons would continue to move under it, so equilibrium could not persist.",
      "平衡时整个导体（包括表面）是等势体，表面是等势面。导体内部任意两点之间的电势差为零，因为 \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec l\\) 且内部 \\(\\vec E=0\\)。 · At equilibrium the entire conductor, including its surface, is an equipotential body, and the surface is an equipotential surface. The potential difference between any two interior points is zero because \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec l\\) and \\(\\vec E=0\\) inside.",
      "平衡时净电荷只能分布在导体表面。在导体内部取一个完全包含在导体材料中的高斯面，内部没有净电荷，因此 \\(Q_{\\mathrm{enc}}=0\\)；多余电荷只能“挤”到表面。 · At equilibrium net charge can reside only on the surface. A Gaussian surface entirely inside the conductor encloses no net charge, so \\(Q_{\\mathrm{enc}}=0\\); excess charge must reside on the surface.",
      "导体表面外侧的电场垂直于表面，大小由局部面电荷密度决定：\\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\)。若场有切向分量，表面电荷就会沿表面移动，破坏平衡。 · Just outside the conductor surface the field is perpendicular to the surface, with magnitude set by the local surface charge density: \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\). A tangential component would drive surface charge along the surface and break equilibrium.",
      "静电平衡的建立过程：外加电场或额外电荷使自由电子受力移动，导体两侧出现感应电荷；感应电荷产生的场与外场方向相反，二者在导体内部叠加，直到合场为零。 · Establishing equilibrium: an applied field or added charge drives free electrons to move, producing induced charge on opposite sides; the field of the induced charge opposes the applied field, and the two superpose inside the conductor until the net field is zero.",
      "平衡建立的时间极短。对良导体，电荷弛豫时间约为 \\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\)（\\(\\sigma_{\\mathrm{c}}\\) 为电导率，注意与面电荷密度 \\(\\sigma\\) 区分），金属中通常在 \\(10^{-19}\\,\\mathrm{s}\\) 到 \\(10^{-16}\\,\\mathrm{s}\\) 量级或更短；AP 题目把这一过程视为瞬时完成。 · Equilibrium is established in an extremely short time. For a good conductor the charge relaxation time is about \\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\) (\\(\\sigma_{\\mathrm{c}}\\) is conductivity, not to be confused with surface charge density \\(\\sigma\\)), typically on the order of \\(10^{-19}\\,\\mathrm{s}\\) to \\(10^{-16}\\,\\mathrm{s}\\) or less in metals; AP problems treat the process as instantaneous.",
      "外电场中的中性导体会极化：靠近正电荷源的一侧感应负电荷，远离正电荷源的一侧感应正电荷；两侧感应电荷等量异号，净电荷仍为零。 · A neutral conductor in an external field polarizes: the side nearer a positive source acquires induced negative charge, and the far side acquires induced positive charge; the two induced charges are equal and opposite, so the net charge remains zero.",
      "极化是导体保持等势的必然结果。若导体内部或表面出现电势差，自由电荷就会继续移动；感应电荷恰好重排到使整个导体等势、内部合场为零的分布。 · Polarization is a consequence of the conductor remaining equipotential. If a potential difference appeared inside or along the surface, free charge would continue to move; the induced charge rearranges precisely so that the whole conductor is equipotential and the internal net field is zero.",
      "导体表面的场线垂直于表面，等势面与场线处处垂直。外电场中的导体表面仍是等势面，因此场线在表面处“折”成法线方向；导体内部没有场线。 · Field lines meet a conductor surface perpendicularly, and equipotential surfaces are everywhere perpendicular to field lines. The surface of a conductor in an external field remains an equipotential surface, so field lines bend to the normal direction at the surface; there are no field lines inside the conductor.",
      "若导体有空腔，腔内无电荷时腔内场强为零（静电屏蔽）；腔内有电荷时，内表面感应出等量异号电荷，导体材料内部仍 \\(\\vec E=0\\)，外表面电荷由电荷守恒和外部条件决定。 · If a conductor has a cavity with no charge inside, the cavity field is zero (electrostatic shielding); if there is charge in the cavity, the inner surface carries an equal opposite induced charge, the conductor material still has \\(\\vec E=0\\), and the outer-surface charge is set by charge conservation and external conditions."
    ],
    "definition": "静电平衡是导体内部没有宏观电荷定向移动、自由电荷的宏观运动停止的状态。平衡时导体内部电场为零，整个导体是等势体，净电荷只分布在表面，表面外侧电场垂直于表面且大小 \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\)。平衡的建立过程是：外场或额外电荷驱动自由电子移动，表面出现感应电荷，感应电荷的场与外场反向叠加，直到导体内部合场为零；这一过程的时间极短，宏观上视为瞬时。外电场中的中性导体因此极化，两侧出现等量异号感应电荷，但净电荷仍为零。 · Electrostatic equilibrium is the state in which there is no macroscopic directed motion of charge inside a conductor and the macroscopic motion of free charge has stopped. At equilibrium the internal field is zero, the whole conductor is an equipotential body, net charge resides only on the surface, and just outside the surface the field is perpendicular to the surface with magnitude \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\). Equilibrium is established when an applied field or added charge drives free electrons to move, induced surface charge appears, and the field of the induced charge opposes the applied field until the net internal field is zero; this happens in an extremely short time and is treated as instantaneous macroscopically. A neutral conductor in an external field therefore polarizes, with equal and opposite induced charges on opposite sides while the net charge remains zero.",
    "intuition": "把导体中的自由电子想成一群可以在晶格间自由滑动的小球。外电场一推，它们就集体向一侧移动，直到自己产生的场把外场抵消；一旦内部合场为零，它们就不再受力，移动停止。这个过程非常快，肉眼和普通仪器都来不及记录。 · Think of the free electrons in a conductor as a group of small balls that can slide freely between the lattice ions. An external field pushes them to one side until the field they produce cancels the external field; once the net internal field is zero, they feel no force and stop moving. This happens so fast that the eye and ordinary instruments cannot record it.",
    "intuitionDetailed": "静电平衡不是“电荷被冻住”，而是“电荷已经找到不再受力的位置”。把一块中性导体放进外电场，自由电子会逆着外场方向移动，导体的一侧因此带负电、另一侧带正电；这些感应电荷产生的场在导体内部与外场方向相反，大小恰好抵消外场。结果是导体内部 \\(E=0\\)，整个导体等势，表面场线垂直于表面。若导体带净电荷，多余电荷也会在极短时间内分布到表面，使内部场为零；曲率大的地方面电荷密度更高，表面场更强。平衡建立的时间尺度由电荷弛豫决定，金属中约为 \\(10^{-19}\\,\\mathrm{s}\\) 到 \\(10^{-16}\\,\\mathrm{s}\\) 或更短，远小于任何宏观测量时间，所以在 AP 题目中可以直接写“达到静电平衡”而不再追踪瞬态过程。 · Electrostatic equilibrium is not “charge frozen in place” but “charge has found positions where it feels no further force.” Put a neutral conductor in an external field: free electrons move opposite the field, so one side becomes negative and the other positive; the field of these induced charges opposes the external field inside the conductor and cancels it. The result is \\(E=0\\) inside, the whole conductor is equipotential, and surface field lines are perpendicular to the surface. If the conductor carries net charge, the excess charge also spreads to the surface in an extremely short time so that the internal field is zero; where curvature is large, surface charge density and surface field are stronger. The time scale is set by charge relaxation, about \\(10^{-19}\\,\\mathrm{s}\\) to \\(10^{-16}\\,\\mathrm{s}\\) or less in metals, far shorter than any macroscopic measurement time, so AP problems can simply state “electrostatic equilibrium is reached” without tracking the transient.",
    "formulas": [
      {
        "latex": "\\vec E_{\\mathrm{inside}}=0",
        "note": "静电平衡时导体内部合场为零；否则自由电荷会继续移动。 · At electrostatic equilibrium the net internal field is zero; otherwise free charge would continue to move."
      },
      {
        "latex": "V=\\text{constant}",
        "note": "整个导体是等势体，表面是等势面。 · The whole conductor is an equipotential body, and its surface is an equipotential surface."
      },
      {
        "latex": "E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}",
        "note": "导体表面外侧场强，方向垂直于表面。 · Field just outside the conductor surface, directed perpendicular to the surface."
      },
      {
        "latex": "\\sigma=\\varepsilon_0E_{\\mathrm{surface}}",
        "note": "由表面场强反推局部面电荷密度。 · Local surface charge density inferred from the surface field."
      },
      {
        "latex": "\\vec E_{\\mathrm{net}}=\\vec E_{\\mathrm{external}}+\\vec E_{\\mathrm{induced}}=0\\quad\\text{(inside)}",
        "note": "平衡时外场与感应电荷的场在导体内部完全抵消。 · At equilibrium the external field and the induced-charge field cancel completely inside the conductor."
      },
      {
        "latex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "note": "在导体内部取高斯面，\\(Q_{\\mathrm{enc}}=0\\)，说明净电荷只能在表面。 · A Gaussian surface inside the conductor encloses zero net charge, showing that net charge must reside on the surface."
      },
      {
        "latex": "\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}",
        "note": "电荷弛豫时间，其中 \\(\\sigma_{\\mathrm{c}}\\) 为电导率；良导体中极短，因此平衡建立可视为瞬时。 · Charge relaxation time, where \\(\\sigma_{\\mathrm{c}}\\) is conductivity; it is extremely short in good conductors, so equilibrium is effectively instantaneous."
      },
      {
        "latex": "\\Delta t\\sim10^{-16}\\,\\mathrm{s}\\ \\text{or less}",
        "note": "平衡建立的时间尺度；AP 题目中视为瞬时完成。 · Time scale for establishing equilibrium; AP problems treat it as instantaneous."
      }
    ],
    "derivationNotes": [
      {
        "from": "外场或额外电荷 · External field or added charge",
        "to": "自由电子受力移动 · Free electrons move",
        "note": "导体中的自由电子受到电场力 \\(\\vec F=q\\vec E\\)，逆着外场方向移动，表面开始出现感应电荷。 · Free electrons in the conductor feel \\(\\vec F=q\\vec E\\) and move opposite the applied field, so induced charge begins to appear on the surface."
      },
      {
        "from": "感应电荷 · Induced charge",
        "to": "内部合场为零 · Zero net internal field",
        "note": "感应电荷产生的场与外场反向；当二者在导体内部大小相等、方向相反时，\\(\\vec E_{\\mathrm{inside}}=0\\)，电荷停止宏观移动。 · The induced-charge field opposes the applied field; when they are equal and opposite inside the conductor, \\(\\vec E_{\\mathrm{inside}}=0\\) and macroscopic charge motion stops."
      },
      {
        "from": "内部 \\(\\vec E=0\\) · Zero internal field",
        "to": "导体等势 · Conductor is equipotential",
        "note": "任意两点间 \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec l=0\\)，所以整个导体电势相同。 · For any two points, \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec l=0\\), so the whole conductor has the same potential."
      },
      {
        "from": "导体内高斯面 · Gaussian surface inside the conductor",
        "to": "净电荷在表面 · Net charge on the surface",
        "note": "高斯面完全在导体材料内，\\(\\vec E=0\\)，故 \\(Q_{\\mathrm{enc}}=0\\)；净电荷只能分布到表面。 · The Gaussian surface lies entirely inside the conductor material, where \\(\\vec E=0\\), so \\(Q_{\\mathrm{enc}}=0\\); net charge can reside only on the surface."
      },
      {
        "from": "表面高斯柱 · Pillbox at the surface",
        "to": "表面场强 · Surface field",
        "note": "取一个跨过表面的小高斯柱，侧面通量为零，得到 \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\)，方向垂直于表面。 · For a small pillbox crossing the surface, the side flux is zero, giving \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\) perpendicular to the surface."
      },
      {
        "from": "弛豫时间 · Relaxation time",
        "to": "平衡瞬时建立 · Equilibrium is effectively instantaneous",
        "note": "良导体的 \\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\) 极小（\\(\\sigma_{\\mathrm{c}}\\) 为电导率；金属中约 \\(10^{-19}\\,\\mathrm{s}\\) 到 \\(10^{-16}\\,\\mathrm{s}\\) 或更短），远小于宏观时间尺度。 · For a good conductor, \\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\) is tiny (\\(\\sigma_{\\mathrm{c}}\\) is conductivity; about \\(10^{-19}\\,\\mathrm{s}\\) to \\(10^{-16}\\,\\mathrm{s}\\) or less in metals), far shorter than macroscopic time scales."
      }
    ],
    "conditions": [
      "导体处于静电平衡：没有宏观电流，自由电荷的宏观定向移动已经停止。 · The conductor is in electrostatic equilibrium: there is no macroscopic current and no macroscopic directed motion of free charge.",
      "导体中有足够的自由电荷（金属中的自由电子、电解液中的离子等）。 · The conductor contains enough free charge (free electrons in metals, ions in electrolytes, and so on).",
      "外电场不随时间变化，或变化足够慢，使导体在每一时刻都近似处于平衡。 · The external field is constant in time, or changes slowly enough that the conductor is approximately in equilibrium at each instant.",
      "温度不过低，使导体仍具有可移动的自由电荷；理想绝缘体不适用。 · The temperature is not so low that free charge becomes immobile; ideal insulators do not satisfy these conditions.",
      "表面附近没有其他电荷紧贴，否则 \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\) 需修正为局部净场。 · No other charge is extremely close to the surface; otherwise \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\) must be corrected to the local net field.",
      "空腔导体中，腔内无电荷时腔内场为零；腔内有电荷时，内表面感应等量异号电荷，导体材料内部仍 \\(\\vec E=0\\)。 · For a hollow conductor, the cavity field is zero when the cavity contains no charge; if the cavity contains charge, the inner surface carries an equal opposite induced charge while the conductor material still has \\(\\vec E=0\\)."
    ],
    "keyPoints": [
      "静电平衡：导体内无宏观电荷移动，\\(\\vec E_{\\mathrm{inside}}=0\\)。 · Electrostatic equilibrium: no macroscopic charge motion inside the conductor, and \\(\\vec E_{\\mathrm{inside}}=0\\).",
      "平衡时整个导体是等势体，表面是等势面。 · At equilibrium the whole conductor is an equipotential body, and its surface is an equipotential surface.",
      "净电荷只能分布在导体表面；内部高斯面包围的净电荷为零。 · Net charge can reside only on the surface; a Gaussian surface inside the conductor encloses zero net charge.",
      "表面外侧场强垂直于表面，大小 \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\)。 · Just outside the surface the field is perpendicular to the surface, with magnitude \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\).",
      "平衡建立是自由电子在外场中移动、感应电荷反向抵消外场的过程。 · Equilibrium is established when free electrons move in the applied field and the induced charge cancels the applied field inside.",
      "平衡建立时间极短，约 \\(10^{-16}\\,\\mathrm{s}\\) 或更短，宏观上视为瞬时。 · Equilibrium is established in an extremely short time, about \\(10^{-16}\\,\\mathrm{s}\\) or less, and is treated as instantaneous macroscopically.",
      "外电场中的中性导体极化：两侧等量异号感应电荷，净电荷仍为零，导体保持等势。 · A neutral conductor in an external field polarizes: equal and opposite induced charges appear on opposite sides, the net charge remains zero, and the conductor stays equipotential.",
      "极化是导体保持等势的必然结果；表面场线垂直于表面，等势面与场线处处垂直。 · Polarization follows from the conductor remaining equipotential; surface field lines are perpendicular to the surface, and equipotential surfaces are everywhere perpendicular to field lines.",
      "空腔导体可静电屏蔽；腔内有电荷时内表面感应等量异号电荷。 · A hollow conductor can provide electrostatic shielding; if the cavity contains charge, the inner surface carries an equal opposite induced charge."
    ],
    "misconceptions": [
      "认为导体达到静电平衡需要可观测的时间；实际上良导体的弛豫时间极短，宏观上视为瞬时。 · Thinking a conductor needs an observable time to reach electrostatic equilibrium; in good conductors the relaxation time is extremely short, so it is effectively instantaneous.",
      "认为静电平衡时导体内部电场“很小但不为零”；平衡的定义就是内部合场严格为零。 · Thinking the internal field at equilibrium is “small but nonzero”; by definition the net internal field is exactly zero.",
      "认为平衡建立过程中导体内部也始终 \\(E=0\\)；在瞬态过程中内部可以有场，正是它驱动电荷移动。 · Thinking the internal field is always zero even during the transient; during the transient an internal field exists and drives the charge motion.",
      "认为外电场中的中性导体内部有净场；感应电荷的场恰好抵消外场，内部合场为零。 · Thinking a neutral conductor in an external field has a net internal field; the induced-charge field exactly cancels the external field, giving zero net internal field.",
      "认为极化创造了电荷；极化只是电荷重新分布，导体净电荷仍为零（除非接地或另有电荷输入）。 · Thinking polarization creates charge; it only redistributes charge, and the conductor's net charge remains zero unless it is grounded or charge is otherwise supplied.",
      "认为导体表面电场可以与表面平行；若有切向分量，表面电荷会继续移动，平衡无法维持。 · Thinking the surface field can have a component parallel to the surface; a tangential component would keep surface charge moving, so equilibrium could not persist.",
      "认为导体表面电荷密度处处相同；曲率大的地方面电荷密度更高、表面场更强。 · Thinking surface charge density is uniform; where curvature is larger, surface charge density and surface field are stronger.",
      "认为电子必须从导体一端跑到另一端才能建立平衡；实际是集体重排，电磁扰动以接近光速传播，平衡时间远短于电子漂移穿过导体的时间。 · Thinking electrons must travel from one end of the conductor to the other to establish equilibrium; the rearrangement is collective, and the electromagnetic disturbance propagates near light speed, so equilibrium is reached far faster than electron drift across the conductor.",
      "认为静电屏蔽意味着导体内部完全没有电场；屏蔽区是空腔内部，导体材料内部本来就没有场，但腔内若有电荷则腔内可以有场。 · Thinking electrostatic shielding means there is no field anywhere inside a conductor; the shielded region is the cavity, the conductor material itself has no field, and the cavity can have a field if it contains charge."
    ],
    "examples": [
      {
        "title": "例 1 · 孤立带电导体球的平衡分布 · Example 1: Equilibrium distribution on an isolated charged conducting sphere",
        "prompt": "一个半径 \\(R=0.10\\,\\mathrm{m}\\) 的孤立导体球带 \\(+2.0\\,\\mu\\mathrm{C}\\)。电荷分布在哪里？达到平衡需要多长时间？求表面面电荷密度、表面场强和电势。 · An isolated conducting sphere of radius \\(R=0.10\\,\\mathrm{m}\\) carries \\(+2.0\\,\\mu\\mathrm{C}\\). Where does the charge reside? How long does equilibrium take? Find the surface charge density, surface field, and potential.",
        "steps": [
          "平衡时净电荷全部分布在球的外表面，球内 \\(\\vec E=0\\)。 · At equilibrium all net charge resides on the outer surface, and \\(\\vec E=0\\) inside the sphere.",
          "平衡建立时间约为 \\(10^{-16}\\,\\mathrm{s}\\) 或更短，宏观上视为瞬时。 · Equilibrium is established in about \\(10^{-16}\\,\\mathrm{s}\\) or less, effectively instantaneous macroscopically.",
          "面电荷密度 \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}=\\dfrac{2.0\\times10^{-6}}{4\\pi(0.10)^{2}}\\approx1.6\\times10^{-5}\\,\\mathrm{C\\,m^{-2}}\\)。 · Surface charge density \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}=\\dfrac{2.0\\times10^{-6}}{4\\pi(0.10)^{2}}\\approx1.6\\times10^{-5}\\,\\mathrm{C\\,m^{-2}}\\)。",
          "表面场强 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\approx\\dfrac{1.6\\times10^{-5}}{8.85\\times10^{-12}}\\approx1.8\\times10^{6}\\,\\mathrm{V\\,m^{-1}}\\)；也可用 \\(E=\\dfrac{kQ}{R^{2}}\\) 检查。 · Surface field \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\approx\\dfrac{1.6\\times10^{-5}}{8.85\\times10^{-12}}\\approx1.8\\times10^{6}\\,\\mathrm{V\\,m^{-1}}\\); check with \\(E=\\dfrac{kQ}{R^{2}}\\)。",
          "电势 \\(V=\\dfrac{kQ}{R}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.10}=1.8\\times10^{5}\\,\\mathrm{V}\\)。 · Potential \\(V=\\dfrac{kQ}{R}=\\dfrac{(9.0\\times10^{9})(2.0\\times10^{-6})}{0.10}=1.8\\times10^{5}\\,\\mathrm{V}\\)。"
        ],
        "solution": "电荷在表面；平衡时间约 \\(10^{-16}\\,\\mathrm{s}\\) 或更短；\\(\\sigma\\approx1.6\\times10^{-5}\\,\\mathrm{C\\,m^{-2}}\\)，\\(E\\approx1.8\\times10^{6}\\,\\mathrm{V\\,m^{-1}}\\)，\\(V=1.8\\times10^{5}\\,\\mathrm{V}\\)。 · Charge is on the surface; equilibrium takes about \\(10^{-16}\\,\\mathrm{s}\\) or less; \\(\\sigma\\approx1.6\\times10^{-5}\\,\\mathrm{C\\,m^{-2}}\\), \\(E\\approx1.8\\times10^{6}\\,\\mathrm{V\\,m^{-1}}\\), and \\(V=1.8\\times10^{5}\\,\\mathrm{V}\\)。",
        "solutionLatex": "\\sigma\\approx1.6\\times10^{-5}\\,\\mathrm{C\\,m^{-2}},\\;E\\approx1.8\\times10^{6}\\,\\mathrm{V\\,m^{-1}},\\;V=1.8\\times10^{5}\\,\\mathrm{V}"
      },
      {
        "title": "例 2 · 外电场中的中性导体板 · Example 2: A neutral conducting slab in an external field",
        "prompt": "一块大中性导体板垂直放入均匀外电场 \\(E_0=1.0\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\) 中（忽略边缘效应）。描述两侧的感应电荷、板内合场与表面场，并求面电荷密度的大小。 · A large neutral conducting slab is placed perpendicular to a uniform external field \\(E_0=1.0\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\) (neglecting edge effects). Describe the induced charges on the two sides, the net field inside, and the surface field, and find the surface charge density.",
        "steps": [
          "外场使自由电子逆着场方向移动：靠近正电荷源的一侧带负电，另一侧带正电；两侧感应电荷等量异号，净电荷仍为零。 · The external field drives free electrons opposite the field: the side nearer the positive source becomes negative and the other side positive; the induced charges are equal and opposite, so the net charge remains zero.",
          "感应电荷在板内产生的场与外场反向；平衡时二者抵消，板内 \\(\\vec E_{\\mathrm{inside}}=0\\)。 · The induced-charge field inside the slab opposes the external field; at equilibrium they cancel, so \\(\\vec E_{\\mathrm{inside}}=0\\).",
          "板是等势体，表面场线垂直于板面。 · The slab is equipotential, and surface field lines are perpendicular to its faces.",
          "面电荷密度大小 \\(\\sigma=\\varepsilon_0E_0=(8.85\\times10^{-12})(1.0\\times10^{4})\\approx8.9\\times10^{-8}\\,\\mathrm{C\\,m^{-2}}\\)。 · The surface charge density magnitude is \\(\\sigma=\\varepsilon_0E_0=(8.85\\times10^{-12})(1.0\\times10^{4})\\approx8.9\\times10^{-8}\\,\\mathrm{C\\,m^{-2}}\\)。"
        ],
        "solution": "两侧带等量异号感应电荷，\\(\\sigma\\approx8.9\\times10^{-8}\\,\\mathrm{C\\,m^{-2}}\\)；板内 \\(E=0\\)，板是等势体，表面场垂直于板面。 · The two faces carry equal and opposite induced charge, \\(\\sigma\\approx8.9\\times10^{-8}\\,\\mathrm{C\\,m^{-2}}\\); inside \\(E=0\\), the slab is equipotential, and the surface field is perpendicular to its faces.",
        "solutionLatex": "\\sigma=\\varepsilon_0E_0\\approx8.9\\times10^{-8}\\,\\mathrm{C\\,m^{-2}}"
      },
      {
        "title": "例 3 · 空腔导体与腔内电荷 · Example 3: A hollow conductor with charge in its cavity",
        "prompt": "一个中性空腔导体，腔内放一个 \\(+q\\) 的点电荷。求内表面、外表面的感应电荷，导体材料内部与腔内的电场，并说明平衡建立的时间尺度。 · A neutral hollow conductor contains a point charge \\(+q\\) in its cavity. Find the induced charges on the inner and outer surfaces, the fields inside the conductor material and in the cavity, and the time scale for equilibrium.",
        "steps": [
          "在导体材料内部取高斯面：\\(\\vec E=0\\)，故 \\(Q_{\\mathrm{enc}}=0\\)。高斯面包围了腔内电荷 \\(+q\\) 和内表面电荷，因此内表面感应 \\(-q\\)。 · Take a Gaussian surface inside the conductor material: \\(\\vec E=0\\), so \\(Q_{\\mathrm{enc}}=0\\). The surface encloses the cavity charge \\(+q\\) and the inner-surface charge, so the inner surface carries \\(-q\\).",
          "导体本身中性，电荷守恒给出外表面 \\(+q\\)。 · The conductor is neutral, so charge conservation gives \\(+q\\) on the outer surface.",
          "导体材料内部 \\(\\vec E=0\\)；腔内场由腔内电荷与内表面感应电荷共同决定，一般不为零。 · Inside the conductor material \\(\\vec E=0\\); the cavity field is produced by the cavity charge and the inner-surface induced charge and is generally nonzero.",
          "平衡建立时间仍约为 \\(10^{-16}\\,\\mathrm{s}\\) 或更短；若腔内有电荷，内表面电荷的重新分布也在这个极短时间内完成。 · Equilibrium is still established in about \\(10^{-16}\\,\\mathrm{s}\\) or less; if the cavity contains charge, the inner-surface charge also redistributes within this extremely short time."
        ],
        "solution": "内表面 \\(-q\\)、外表面 \\(+q\\)；导体材料内 \\(E=0\\)，腔内有场；平衡时间约 \\(10^{-16}\\,\\mathrm{s}\\) 或更短。 · Inner surface \\(-q\\), outer surface \\(+q\\); \\(E=0\\) inside the conductor material, a field exists in the cavity, and equilibrium takes about \\(10^{-16}\\,\\mathrm{s}\\) or less.",
        "solutionLatex": "Q_{\\mathrm{inner}}=-q,\\qquad Q_{\\mathrm{outer}}=+q"
      },
      {
        "title": "例 4 · 极化与等势 · Example 4: Polarization and equipotential",
        "prompt": "一个中性导体球靠近带正电的棒。画出导体上的感应电荷与导体表面的电场方向，并解释为什么导体表面是等势面。 · A neutral conducting sphere is near a positively charged rod. Sketch the induced charges and the field direction at the conductor surface, and explain why the surface is an equipotential.",
        "steps": [
          "靠近棒的一侧感应负电荷，远离棒的一侧感应正电荷；净电荷为零。 · The side near the rod acquires induced negative charge and the far side positive charge; the net charge is zero.",
          "感应电荷的场在导体内部与外场反向，平衡时合场为零。 · The induced-charge field inside the conductor opposes the external field; at equilibrium the net field is zero.",
          "导体内部 \\(\\vec E=0\\)，任意两点间电势差为零，所以整个导体（包括表面）是等势体。 · Since \\(\\vec E=0\\) inside the conductor, the potential difference between any two points is zero, so the whole conductor, including its surface, is equipotential.",
          "表面场线垂直于表面；若场有切向分量，表面电荷会继续移动，破坏平衡。 · Surface field lines are perpendicular to the surface; a tangential component would keep surface charge moving and break equilibrium."
        ],
        "solution": "近端负、远端正，净电荷为零；导体内 \\(E=0\\)，整体等势，表面场线垂直于表面。 · Negative near side, positive far side, zero net charge; \\(E=0\\) inside, the conductor is equipotential, and surface field lines are perpendicular to the surface.",
        "solutionLatex": "\\vec E_{\\mathrm{inside}}=0\\;\\Rightarrow\\;V=\\text{constant}"
      },
      {
        "title": "例 5 · 时间尺度比较 · Example 5: Comparing time scales",
        "prompt": "一个实验的测量时间分辨率为 \\(1.0\\,\\mathrm{ns}\\)。导体静电平衡的建立时间约为 \\(10^{-16}\\,\\mathrm{s}\\)。平衡过程能否被这个实验分辨？ · An experiment has a time resolution of \\(1.0\\,\\mathrm{ns}\\). Electrostatic equilibrium in a conductor is established in about \\(10^{-16}\\,\\mathrm{s}\\). Can the experiment resolve the equilibration process?",
        "steps": [
          "\\(1.0\\,\\mathrm{ns}=1.0\\times10^{-9}\\,\\mathrm{s}\\)。 · \\(1.0\\,\\mathrm{ns}=1.0\\times10^{-9}\\,\\mathrm{s}\\)。",
          "比较：\\(\\dfrac{10^{-9}}{10^{-16}}=10^{7}\\)，测量时间比平衡时间长约 \\(10^{7}\\) 倍。 · Compare: \\(\\dfrac{10^{-9}}{10^{-16}}=10^{7}\\), so the measurement time is about \\(10^{7}\\) times longer than the equilibration time.",
          "因此实验只能看到平衡后的结果，无法分辨瞬态过程；AP 题目也把平衡视为瞬时完成。 · Therefore the experiment sees only the post-equilibrium result and cannot resolve the transient; AP problems also treat equilibrium as instantaneous."
        ],
        "solution": "不能分辨；平衡时间比测量分辨率短约 \\(10^{7}\\) 倍，宏观上视为瞬时。 · It cannot be resolved; the equilibration time is about \\(10^{7}\\) times shorter than the measurement resolution, so it is effectively instantaneous.",
        "solutionLatex": "\\dfrac{1.0\\times10^{-9}}{10^{-16}}=10^{7}"
      }
    ],
    "examTips": [
      "先判断导体是否处于静电平衡；平衡后立即写 \\(\\vec E_{\\mathrm{inside}}=0\\) 与“导体等势”。 · First decide whether the conductor is in electrostatic equilibrium; once it is, immediately write \\(\\vec E_{\\mathrm{inside}}=0\\) and “the conductor is equipotential.”",
      "不要把“内部场为零”误写成“表面场为零”；表面场通常不为零，方向垂直于表面。 · Do not mistake “zero internal field” for “zero surface field”; the surface field is generally nonzero and perpendicular to the surface.",
      "净电荷在表面；空腔题用导体内部的高斯面找内表面电荷，再用电荷守恒找外表面电荷。 · Net charge resides on the surface; for cavity problems, use a Gaussian surface inside the conductor to find the inner-surface charge, then use charge conservation for the outer surface.",
      "外场中的中性导体净电荷仍为零，但两侧有等量异号感应电荷；不要把它说成“带电”。 · A neutral conductor in an external field still has zero net charge, but equal and opposite induced charges appear on its two sides; do not call it “charged.”",
      "表面场强用 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)，并记住场线垂直于表面、等势面与场线垂直。 · Use \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) for the surface field, and remember that field lines are perpendicular to the surface and equipotential surfaces are perpendicular to field lines.",
      "平衡建立时间极短，AP 题中不需要计算瞬态过程；若题目问时间尺度，答“约 \\(10^{-16}\\,\\mathrm{s}\\) 或更短，视为瞬时”。 · Equilibrium is established in an extremely short time, so AP problems do not require the transient; if asked about the time scale, answer “about \\(10^{-16}\\,\\mathrm{s}\\) or less, effectively instantaneous.”",
      "极化是导体保持等势的结果；解释题要写“感应电荷的场与外场在导体内部抵消”，而不是“外场把电荷推到表面就结束”。 · Polarization follows from the conductor remaining equipotential; in explanations, write “the induced-charge field cancels the external field inside the conductor,” not merely “the external field pushes charge to the surface.”"
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.1",
        "title": "导体静电 · Electrostatics with Conductors",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.2",
        "title": "电荷再分布 · Redistribution of Charge between Conductors",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.5",
        "title": "接触再分布与感应接地 · Charge Redistribution and Grounding",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律 · Gauss's Law",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u9",
        "code": "9.2",
        "title": "电势 · Electric Potential",
        "relation": "先修 · prerequisite"
      }
    ],
    "modules": [
      {
        "id": "gauss-law",
        "title": "高斯定律"
      }
    ],
    "practiceHref": "#/em/practice/em-u10",
    "connections": [
      "上游：8.5 高斯定律给出“导体内部高斯面无净电荷”的论证；9.2 电势给出 \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec l\\)，两者共同推出 \\(E_{\\mathrm{inside}}=0\\)、导体等势与净电荷在表面。 · Upstream: Gauss's law (8.5) shows that a Gaussian surface inside a conductor encloses no net charge; electric potential (9.2) gives \\(\\Delta V=-\\int\\vec E\\cdot\\mathrm{d}\\vec l\\). Together they imply \\(E_{\\mathrm{inside}}=0\\), an equipotential conductor, and surface charge.",
      "下游：10.5 用“极化—接地—断接地—撤外场”的序列实现感应起电；10.3 电容器把导体表面储存电荷的能力定量化为 \\(C=\\dfrac{Q}{V}\\)。 · Downstream: 10.5 uses the sequence polarize–ground–disconnect–remove field for charging by induction; 10.3 quantifies a conductor's ability to store charge on its surface as \\(C=\\dfrac{Q}{V}\\).",
      "应用：静电屏蔽、法拉第笼、同轴电缆屏蔽层、避雷针和精密电子设备的接地都依赖静电平衡与极化。 · Applications: electrostatic shielding, Faraday cages, coaxial-cable shields, lightning rods, and grounding of sensitive electronics all rely on electrostatic equilibrium and polarization.",
      "跨学科：神经元的膜电位、胶体颗粒的双电层和半导体器件的表面态都涉及“电荷重排直到内部场为零”的平衡思想。 · Cross-disciplinary: membrane potentials in neurons, electric double layers around colloidal particles, and surface states in semiconductor devices all involve the same equilibrium idea of charge rearrangement until the internal field is zero."
    ],
    "intuitionDetailed": "静电平衡的核心不是“电荷不动”，而是“电荷不再有净受力”。把导体放进外场，自由电子会逆着场方向移动，表面因此出现一层感应电荷；这层电荷产生的场在导体内部与外场反向，恰好把外场抵消。抵消完成时，导体内部 \\(E=0\\)，整个导体等势，表面场线垂直于表面。若导体带净电荷，多余电荷也会在极短时间内分布到表面，使内部场为零；曲率大的地方面电荷密度更高、表面场更强，这就是尖端放电的原因。平衡建立的时间由电荷弛豫决定，金属中约为 \\(10^{-19}\\,\\mathrm{s}\\) 到 \\(10^{-16}\\,\\mathrm{s}\\) 或更短，远小于宏观测量时间，所以 AP 题目可以直接把“达到静电平衡”当作瞬时事件。外电场中的中性导体虽然净电荷为零，但两侧的感应电荷使它极化；这也是为什么带电棒能吸引中性纸屑、为什么导体表面附近的场线总是垂直于表面。 · The core of electrostatic equilibrium is not “charge does not move” but “charge feels no net force.” Put a conductor in an external field: free electrons move opposite the field, producing a layer of induced surface charge whose field opposes and cancels the external field inside the conductor. When cancellation is complete, \\(E=0\\) inside, the whole conductor is equipotential, and surface field lines are perpendicular to the surface. If the conductor carries net charge, the excess charge also spreads to the surface in an extremely short time so that the internal field is zero; where curvature is large, surface charge density and surface field are stronger, which is why sharp points discharge. The time scale is set by charge relaxation, about \\(10^{-19}\\,\\mathrm{s}\\) to \\(10^{-16}\\,\\mathrm{s}\\) or less in metals, far shorter than macroscopic measurement times, so AP problems can treat “reaching electrostatic equilibrium” as instantaneous. A neutral conductor in an external field has zero net charge but is polarized by induced charges on its two sides; this is why a charged rod attracts neutral bits of paper and why field lines near a conductor surface are always perpendicular to it.",
    "development": [
      "从自由电荷与电场力出发，说明导体内部若有净场，自由电荷就会继续移动。 · Start from free charge and electric force: if a net field exists inside a conductor, free charge will continue to move.",
      "定义静电平衡：无宏观电流、\\(\\vec E_{\\mathrm{inside}}=0\\)、整个导体等势。 · Define electrostatic equilibrium: no macroscopic current, \\(\\vec E_{\\mathrm{inside}}=0\\), and the whole conductor is equipotential.",
      "用高斯定律证明净电荷只能在表面，用表面高斯柱推出 \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\)。 · Use Gauss's law to show that net charge can reside only on the surface, and use a surface pillbox to derive \\(E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}\\).",
      "描述平衡的建立：外场驱动自由电子，感应电荷反向抵消外场，直到内部合场为零。 · Describe how equilibrium is established: the external field drives free electrons, induced charge opposes the external field, and the process stops when the internal net field is zero.",
      "给出时间尺度：\\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\)（\\(\\sigma_{\\mathrm{c}}\\) 为电导率），金属中约 \\(10^{-19}\\,\\mathrm{s}\\) 到 \\(10^{-16}\\,\\mathrm{s}\\) 或更短，宏观上视为瞬时。 · Give the time scale: \\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\) (\\(\\sigma_{\\mathrm{c}}\\) is conductivity), about \\(10^{-19}\\,\\mathrm{s}\\) to \\(10^{-16}\\,\\mathrm{s}\\) or less in metals, effectively instantaneous macroscopically.",
      "分析外场中的中性导体极化：两侧等量异号感应电荷、净电荷为零、导体等势、表面场线垂直。 · Analyze polarization of a neutral conductor in an external field: equal and opposite induced charges on the two sides, zero net charge, an equipotential conductor, and surface field lines perpendicular to the surface.",
      "推广到空腔导体与静电屏蔽：腔内无电荷时腔内场为零；腔内有电荷时内表面感应等量异号电荷。 · Extend to hollow conductors and electrostatic shielding: the cavity field is zero when the cavity is empty; if the cavity contains charge, the inner surface carries an equal opposite induced charge."
    ],
    "checks": [
      "静电平衡的四个基本性质是什么？ · What are the four basic properties of electrostatic equilibrium?",
      "为什么导体内部电场必须为零？如果内部还有场，会发生什么？ · Why must the internal field be zero? What would happen if a field remained inside?",
      "导体达到静电平衡需要多长时间？为什么 AP 题目可以把它视为瞬时？ · How long does a conductor take to reach electrostatic equilibrium, and why can AP problems treat it as instantaneous?",
      "外电场中的中性导体净电荷是否改变？两侧的感应电荷如何分布？ · Does a neutral conductor's net charge change in an external field, and how are the induced charges distributed on its two sides?",
      "为什么导体表面的电场线必须垂直于表面？ · Why must field lines be perpendicular to a conductor surface?",
      "空腔导体的内表面电荷如何确定？外表面电荷又如何确定？ · How are the inner- and outer-surface charges of a hollow conductor determined?",
      "极化是否创造了电荷？请用“电荷重排 + 净电荷守恒”解释。 · Does polarization create charge? Explain using “charge rearrangement plus conservation of net charge.”",
      "为什么尖端附近的面电荷密度和表面场强更大？ · Why are surface charge density and surface field larger near sharp points?"
    ],
    "vocabulary": [
      {
        "termZh": "静电平衡",
        "termEn": "electrostatic equilibrium",
        "defZh": "导体内部没有宏观电荷定向移动、\\(\\vec E_{\\mathrm{inside}}=0\\)、整个导体等势的状态。",
        "defEn": "The state in which there is no macroscopic directed charge motion inside a conductor, \\(\\vec E_{\\mathrm{inside}}=0\\), and the whole conductor is equipotential."
      },
      {
        "termZh": "自由电子",
        "termEn": "free electron",
        "defZh": "在金属中可以在晶格间相对自由移动的电子，是导体达到静电平衡时重新分布的主要载流子。",
        "defEn": "An electron in a metal that can move relatively freely between lattice ions; it is the main carrier redistributed when a conductor reaches electrostatic equilibrium."
      },
      {
        "termZh": "感应电荷",
        "termEn": "induced charge",
        "defZh": "导体在外电场或附近电荷作用下，表面出现的电荷重新分布；对于中性且未接地的导体，两侧感应电荷等量异号、代数和为零，接地或带净电荷时还会有净电荷。",
        "defEn": "The charge redistribution on a conductor surface under an external field or nearby charge; for a neutral, ungrounded conductor the two sides carry equal and opposite induced charges that sum to zero, while grounding or a net charge adds a net charge."
      },
      {
        "termZh": "导体极化",
        "termEn": "polarization of a conductor",
        "defZh": "外电场使中性导体两侧出现等量异号感应电荷、内部合场为零、整体保持等势的过程。",
        "defEn": "The process by which an external field produces equal and opposite induced charges on a neutral conductor, makes the internal net field zero, and keeps the whole conductor equipotential."
      },
      {
        "termZh": "等势体",
        "termEn": "equipotential body",
        "defZh": "所有点电势相同的导体；静电平衡时整个导体（包括表面）都是等势体。",
        "defEn": "A conductor whose points all have the same potential; at electrostatic equilibrium the entire conductor, including its surface, is an equipotential body."
      },
      {
        "termZh": "表面电荷密度",
        "termEn": "surface charge density",
        "defZh": "单位面积上的电荷量 \\(\\sigma=\\dfrac{Q}{A}\\)；导体表面曲率越大处通常越大。",
        "defEn": "Charge per unit area, \\(\\sigma=\\dfrac{Q}{A}\\); it is generally larger where the conductor surface has greater curvature."
      },
      {
        "termZh": "弛豫时间",
        "termEn": "relaxation time",
        "defZh": "导体中电荷重新分布到平衡分布所需的时间尺度，\\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\)，其中 \\(\\sigma_{\\mathrm{c}}\\) 为电导率；金属中极短。",
        "defEn": "The time scale for charge in a conductor to redistribute to equilibrium, \\(\\tau=\\dfrac{\\varepsilon}{\\sigma_{\\mathrm{c}}}\\), where \\(\\sigma_{\\mathrm{c}}\\) is conductivity; it is extremely short in metals."
      },
      {
        "termZh": "静电屏蔽",
        "termEn": "electrostatic shielding",
        "defZh": "空腔导体使腔内不受外电场影响（腔内无电荷时腔内场为零）的现象。",
        "defEn": "The phenomenon in which a hollow conductor shields its cavity from external fields (the cavity field is zero when the cavity contains no charge)."
      }
    ]
  },
  "10.7": {
    "id": "em/em-u10/10.7",
    "subject": "em",
    "chapterId": "em-u10",
    "unitCode": "10",
    "unitTitleZh": "导体与电容器",
    "unitTitleEn": "Conductors and Capacitors",
    "code": "10.7",
    "titleZh": "平行板电容的电场与充电功",
    "titleEn": "Parallel-Plate Fields and Charging Work",
    "layer": "ap",
    "summary": "平行板电容器由两块平行、分离的导体极板组成，两板带等量异号电荷 \\(+Q\\) 与 \\(-Q\\)，净电荷为零。忽略边缘效应时，板间是匀强电场，方向由正极板指向负极板，大小 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{\\varepsilon_0A}\\)；孤立（\\(Q\\) 不变）填入电介质后 \\(E=\\dfrac{Q}{\\kappa\\varepsilon_0A}\\)。充电时外力把电荷从一块极板搬到另一块，克服电势差做功 \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\)，这份功全部转化为储存的电场能 \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}\\)。 · A parallel-plate capacitor consists of two separated parallel conducting plates carrying equal and opposite charges \\(+Q\\) and \\(-Q\\), with zero net charge. Neglecting fringing, the field between the plates is uniform, directed from the positive to the negative plate, with magnitude \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{\\varepsilon_0A}\\); with a dielectric, \\(E=\\dfrac{Q}{\\kappa\\varepsilon_0A}\\). Charging moves charge from one plate to the other against a potential difference; the external work \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\) becomes the stored electric potential energy \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}\\).",
    "learningObjectives": [
      "能描述平行板电容器的构造与物理性质：两块平行、分离的导体极板，面积 \\(A\\)、间距 \\(d\\)，两板带等量异号电荷 \\(+Q\\) 与 \\(-Q\\)，净电荷为零；理解 \\(C\\) 只由几何与电介质决定。 · Describe the construction and physical properties of a parallel-plate capacitor: two parallel, separated conducting plates of area \\(A\\) and separation \\(d\\), carrying equal and opposite charges \\(+Q\\) and \\(-Q\\) with zero net charge; understand that \\(C\\) is set only by geometry and the dielectric.",
      "能用单层无限大带电面的场 \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\) 叠加，说明两板之间场强为 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\)、方向由正板指向负板，而板外场相互抵消为零。 · Use superposition of the field of a single infinite charged sheet, \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\), to show that between the plates the field is \\(\\dfrac{\\sigma}{\\varepsilon_0}\\) directed from the positive to the negative plate, while outside the plates the fields cancel to zero.",
      "能说明板间电场在大小和方向上都是常量（匀强场），并指出边缘效应使有限极板边缘处场线弯曲、公式 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) 在 \\(d\\) 远小于极板线度时才是好近似。 · Explain that the field between the plates is constant in both magnitude and direction (a uniform field), and that fringing makes field lines bend near the edges of finite plates, so \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) is a good approximation only when \\(d\\) is much smaller than the plate dimensions.",
      "能由 \\(\\sigma=\\dfrac{Q}{A}\\)、\\(E=\\dfrac{\\sigma}{\\varepsilon}\\) 与 \\(V=Ed\\) 推出 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\)，并区分孤立电容器（\\(Q\\) 不变）与接电源（\\(V\\) 不变）两种情形。 · Derive \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) from \\(\\sigma=\\dfrac{Q}{A}\\), \\(E=\\dfrac{\\sigma}{\\varepsilon}\\), and \\(V=Ed\\), and distinguish an isolated capacitor (fixed \\(Q\\)) from one connected to a battery (fixed \\(V\\)).",
      "能把充电功写成积分 \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\)，并说明它等于储存的电场能 \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}\\)；会用 \\(V\\)–\\(q\\) 图面积解释为什么不是 \\(QV\\)。 · Write the charging work as the integral \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\) and show that it equals the stored electric energy \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}\\); use the area under a \\(V\\)–\\(q\\) graph to explain why it is not \\(QV\\)."
    ],
    "essentialKnowledge": [
      "平行板电容器由两块平行、分离的导体极板组成：每块极板面积为 \\(A\\)，间距为 \\(d\\)，极板间充满真空、空气或相对介电常数为 \\(\\kappa\\) 的电介质。两板带等量异号电荷：一板 \\(+Q\\)，另一板 \\(-Q\\)，整个电容器净电荷为零。 · A parallel-plate capacitor consists of two parallel, separated conducting plates, each of area \\(A\\), separated by a distance \\(d\\), with vacuum, air, or a dielectric of relative permittivity \\(\\kappa\\) between them. The plates carry equal and opposite charges: \\(+Q\\) on one plate and \\(-Q\\) on the other, so the capacitor as a whole has zero net charge.",
      "等量异号不是近似，而是充电方式的结果：把电容器接上电源时，电源把电子从一块极板搬到另一块极板，一块极板失去 \\(Q\\) 的电子、另一块得到同样多的电子。若初始中性，最终两板电荷严格等量异号；若初始已有净电荷，则需把净电荷单独计入，标准平行板模型讨论的是等量异号部分。 · Equal and opposite charges are not an approximation but a consequence of how the capacitor is charged: a battery moves electrons from one plate to the other, so one plate loses charge \\(Q\\) and the other gains the same amount. Starting from neutral plates, the final charges are exactly equal and opposite; if the plates initially carry a net charge, that net charge must be tracked separately, while the standard parallel-plate model describes the equal-and-opposite part.",
      "在理想平行板模型中（\\(d\\) 远小于极板线度、忽略边缘效应），电荷可视为均匀分布在两块相对的内表面上，面电荷密度大小 \\(\\sigma=\\dfrac{Q}{A}\\)。两板的外表面没有净电荷，因为板外电场相互抵消。 · In the ideal parallel-plate model (\\(d\\) much smaller than the plate dimensions, fringing neglected), charge is uniformly distributed on the two facing inner surfaces with surface charge density magnitude \\(\\sigma=\\dfrac{Q}{A}\\). The outer surfaces carry no net charge because the fields outside the plates cancel.",
      "一块无限大、均匀带电的平面（面电荷密度 \\(\\sigma\\)）在两侧产生的电场大小都是 \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\)，方向背离正电荷面、指向负电荷面。这里把每块极板的内表面电荷看成这样一层带电面；不要把它与孤立导体板两个表面都带电荷的情形混淆。 · An infinite uniformly charged sheet with surface charge density \\(\\sigma\\) produces a field of magnitude \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\) on both sides, pointing away from a positive sheet and toward a negative sheet. Here each plate's inner-surface charge is modeled as such a sheet; do not confuse this with an isolated conducting plate, whose charge is shared by two surfaces.",
      "叠加：在两板之间，正极板产生的场与负极板产生的场方向相同（都由正板指向负板），大小相加，得 \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}+\\dfrac{\\sigma}{2\\varepsilon_0}=\\dfrac{\\sigma}{\\varepsilon_0}\\)。在两板外侧，两个场的方向相反、大小相等，合场为零。 · Superposition: between the plates the fields of the positive and negative plates point in the same direction (from the positive to the negative plate), so their magnitudes add: \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}+\\dfrac{\\sigma}{2\\varepsilon_0}=\\dfrac{\\sigma}{\\varepsilon_0}\\). Outside the plates the two fields point in opposite directions with equal magnitudes and cancel to zero.",
      "因此板间电场是匀强电场：在远离边缘的区域内，场的大小和方向都处处相同，场线是平行、等距的直线，从正极板垂直指向负极板；极板是导体等势面，场线与极板垂直。 · The field between the plates is therefore uniform: away from the edges its magnitude and direction are the same everywhere, the field lines are parallel, equally spaced straight lines running perpendicularly from the positive plate to the negative plate, and the conducting plates are equipotential surfaces perpendicular to the field lines.",
      "匀强场中电势差与场强的关系为 \\(V=Ed\\)，其中 \\(E\\) 是板间场强、\\(d\\) 是板间距。沿场线方向电势降低，因此正极板电势高、负极板电势低；等势面是平行于极板的一系列平面，电势随离正极板的距离线性变化。 · In a uniform field the potential difference is \\(V=Ed\\), where \\(E\\) is the field between the plates and \\(d\\) the separation. Potential decreases along the field direction, so the positive plate is at higher potential; equipotential surfaces are planes parallel to the plates, and the potential varies linearly with distance from the positive plate.",
      "电容定义 \\(C=\\dfrac{Q}{V}\\)；把 \\(\\sigma=\\dfrac{Q}{A}\\)、\\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)（真空）与 \\(V=Ed\\) 代入，得 \\(C=\\dfrac{\\varepsilon_0A}{d}\\)。有电介质时为 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\)。电容只由极板面积、间距和电介质决定，与所带电荷量、电压无关。电容器可以反复充电、放电，是储存电荷与电场能的元件。 · The capacitance is defined by \\(C=\\dfrac{Q}{V}\\); substituting \\(\\sigma=\\dfrac{Q}{A}\\), \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) (vacuum), and \\(V=Ed\\) gives \\(C=\\dfrac{\\varepsilon_0A}{d}\\). With a dielectric, \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\). Capacitance is set only by plate area, separation, and dielectric, not by the stored charge or voltage. A capacitor can be charged and discharged repeatedly and is a device for storing charge and electric-field energy.",
      "电介质的影响取决于连接方式。孤立电容器（\\(Q\\) 不变）填入 \\(\\kappa\\) 的介质后，板间场变为 \\(E=\\dfrac{Q}{\\kappa\\varepsilon_0A}\\)，电压变为 \\(V=\\dfrac{Qd}{\\kappa\\varepsilon_0A}\\)，都减小为原来的 \\(\\dfrac{1}{\\kappa}\\)。接在恒压电源上（\\(V\\) 不变）时，场仍为 \\(E=\\dfrac{V}{d}\\)，但自由电荷增加为 \\(Q=\\kappa C_0V\\)。 · The dielectric's effect depends on the connection. For an isolated capacitor (fixed \\(Q\\)), filling the gap with a dielectric of constant \\(\\kappa\\) changes the field to \\(E=\\dfrac{Q}{\\kappa\\varepsilon_0A}\\) and the voltage to \\(V=\\dfrac{Qd}{\\kappa\\varepsilon_0A}\\), both reduced by a factor \\(\\kappa\\). For a capacitor held at fixed voltage by a battery, the field remains \\(E=\\dfrac{V}{d}\\), but the free charge increases to \\(Q=\\kappa C_0V\\).",
      "有限极板有边缘效应：板间中心区域仍近似匀强，但边缘处场线向外弯曲（边缘场，fringing field），场强和方向都不再均匀；边缘效应使实际电容略大于 \\(\\dfrac{\\kappa\\varepsilon_0A}{d}\\)。当 \\(d\\) 远小于极板的最小线度、且观察点远离边缘时，理想公式才是好近似。 · Finite plates show fringing: the central region is still approximately uniform, but near the edges the field lines bulge outward (the fringing field), so the field is no longer uniform in magnitude or direction; fringing makes the actual capacitance slightly larger than \\(\\dfrac{\\kappa\\varepsilon_0A}{d}\\). The ideal formula is a good approximation when \\(d\\) is much smaller than the smallest plate dimension and the point of interest is far from the edges.",
      "充电功：设某时刻正极板电荷为 \\(q\\)、负极板为 \\(-q\\)，板间电势差为 \\(v=\\dfrac{q}{C}\\)。把少量正电荷 \\(\\mathrm{d}q\\) 从负极板搬到正极板，外力必须克服电势差做功 \\(\\mathrm{d}W_{\\mathrm{ext}}=v\\,\\mathrm{d}q=\\dfrac{q}{C}\\,\\mathrm{d}q\\)。从 0 积到 \\(Q\\)，得 \\(W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}\\)。 · Charging work: suppose at some instant the positive plate carries \\(q\\) and the negative plate \\(-q\\), so the potential difference is \\(v=\\dfrac{q}{C}\\). Moving a small positive charge \\(\\mathrm{d}q\\) from the negative to the positive plate requires external work \\(\\mathrm{d}W_{\\mathrm{ext}}=v\\,\\mathrm{d}q=\\dfrac{q}{C}\\,\\mathrm{d}q\\). Integrating from 0 to \\(Q\\) gives \\(W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}\\).",
      "这份外力做的功全部转化为电容器的电场势能：\\(U=W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}\\)。这就是“储存的电场能等于外力分离电荷所做的功”的定量含义。电场力在充电过程中做负功，电势能增加。 · This external work becomes the capacitor's stored electric potential energy: \\(U=W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}\\). This is the quantitative meaning of “the stored electric energy equals the work done by an external force to separate the charges.” The field does negative work during charging, so the potential energy increases.",
      "能量也可以写成电场能量密度的体积分：真空中 \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\)，线性电介质中 \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\)。板间体积为 \\(Ad\\)，故 \\(U=uAd=\\dfrac{1}{2}\\varepsilon_0E^{2}Ad=\\dfrac{1}{2}CV^{2}\\)，与充电功的结果一致。 · The energy can also be written as a volume integral of the electric-field energy density: \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\) in vacuum and \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\) in a linear dielectric. The field volume is \\(Ad\\), so \\(U=uAd=\\dfrac{1}{2}\\varepsilon_0E^{2}Ad=\\dfrac{1}{2}CV^{2}\\), consistent with the charging-work result.",
      "用恒压电源充电时，电源做的功是 \\(QV\\)，而电容器只储存 \\(\\dfrac{1}{2}QV\\)；其余 \\(\\dfrac{1}{2}QV\\) 在充电回路的电阻中以热耗散（理想无耗散情形下由电磁辐射等机制带走）。若用可逆的外接电源极缓慢充电，外力做的功才是 \\(\\dfrac{1}{2}QV\\)，没有这笔额外耗散。 · When charging from a constant-voltage source, the battery does work \\(QV\\), while the capacitor stores only \\(\\dfrac{1}{2}QV\\); the other \\(\\dfrac{1}{2}QV\\) is dissipated as heat in the charging circuit's resistance (or carried away by radiation in an idealized lossless case). Only for reversible, extremely slow charging by an adjustable external source is the external work exactly \\(\\dfrac{1}{2}QV\\), with no extra dissipation.",
      "插入电介质时能量变化也取决于约束。孤立（\\(Q\\) 不变）插入介质：\\(C\\) 增大为 \\(\\kappa C_0\\)，\\(V\\) 与 \\(U=\\dfrac{Q^{2}}{2C}\\) 都减小为 \\(\\dfrac{1}{\\kappa}\\)；减少的能量通过电场把介质拉入的机械功释放。接电源（\\(V\\) 不变）插入介质：\\(C\\) 与 \\(Q\\) 都增大为 \\(\\kappa\\) 倍，\\(U=\\dfrac{1}{2}CV^{2}\\) 增大为 \\(\\kappa\\) 倍，电源额外做功 \\(V\\Delta Q=2\\Delta U\\)，其中一半增加储能，另一半转化为机械功或耗散。 · Energy changes on inserting a dielectric also depend on the constraint. For an isolated capacitor (fixed \\(Q\\)), \\(C\\) increases to \\(\\kappa C_0\\) while \\(V\\) and \\(U=\\dfrac{Q^{2}}{2C}\\) decrease by a factor \\(\\kappa\\); the lost energy is released as mechanical work by the field pulling the dielectric in. For a battery-connected capacitor (fixed \\(V\\)), \\(C\\) and \\(Q\\) both increase by a factor \\(\\kappa\\), \\(U=\\dfrac{1}{2}CV^{2}\\) increases by \\(\\kappa\\), and the battery does extra work \\(V\\Delta Q=2\\Delta U\\), half of which raises the stored energy and half becomes mechanical work or dissipation.",
      "\\(V\\)–\\(q\\) 图是一条过原点的直线，斜率 \\(\\dfrac{1}{C}\\)；从 0 到 \\(Q\\) 曲线下的三角形面积为 \\(\\dfrac{1}{2}QV\\)，就是充电功和储存能量。矩形 \\(QV\\) 不是储能，而是恒压电源在整段充电中提供的总功。 · A \\(V\\)–\\(q\\) graph is a straight line through the origin with slope \\(\\dfrac{1}{C}\\); the triangular area under it from 0 to \\(Q\\) is \\(\\dfrac{1}{2}QV\\), the charging work and stored energy. The rectangle \\(QV\\) is not the stored energy; it is the total work supplied by a constant-voltage source over the whole charging process."
    ],
    "definition": "平行板电容器由两块平行、分离的导体极板组成，极板面积 \\(A\\)、间距 \\(d\\)，两板带等量异号电荷 \\(+Q\\) 与 \\(-Q\\)，净电荷为零。忽略边缘效应时，电荷均匀分布在相对的内表面上，\\(\\sigma=\\dfrac{Q}{A}\\)；每块极板的电荷可看成无限大带电面，板间场由两者的场叠加为 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{\\varepsilon_0A}\\)，方向由正板指向负板，大小和方向处处相同；板外两场相消为零。板间电势差 \\(V=Ed\\)，故 \\(C=\\dfrac{Q}{V}=\\dfrac{\\varepsilon_0A}{d}\\)，填满电介质时为 \\(\\dfrac{\\kappa\\varepsilon_0A}{d}\\)。充电时外力把电荷从一板搬到另一板，克服电势差做功 \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\)，这份功等于储存的电场能 \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}\\)。 · A parallel-plate capacitor consists of two parallel, separated conducting plates of area \\(A\\) and separation \\(d\\), carrying equal and opposite charges \\(+Q\\) and \\(-Q\\) with zero net charge. Neglecting fringing, charge is uniformly distributed on the facing inner surfaces with \\(\\sigma=\\dfrac{Q}{A}\\); each plate's charge acts like an infinite charged sheet, and their superposed field between the plates is \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{\\varepsilon_0A}\\), directed from the positive to the negative plate and constant in both magnitude and direction; outside the plates the two fields cancel to zero. The potential difference is \\(V=Ed\\), so \\(C=\\dfrac{Q}{V}=\\dfrac{\\varepsilon_0A}{d}\\), or \\(\\dfrac{\\kappa\\varepsilon_0A}{d}\\) when the gap is filled with a dielectric. Charging moves charge from one plate to the other; the external work against the potential difference is \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\), which equals the stored electric energy \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}\\).",
    "intuition": "把平行板电容器想成两个平行的浅水槽，中间只隔一层很薄的绝缘膜。充电就像用泵把水从一槽搬到另一槽：开始时两槽水位相同，很容易搬；随着水位差增大，每搬一点水都要克服更大的水位差，所以总功是“水位差–水量”图上的三角形面积，而不是最后的矩形。板间电场像被拉开的弹簧，储存的能量与场强的平方成正比；电介质像在弹簧之间插入一层会极化的材料，削弱板间场、增大电容。 · Think of a parallel-plate capacitor as two shallow water tanks separated by a thin insulating membrane. Charging is like pumping water from one tank to the other: at first the levels are equal and it is easy, but as the level difference grows, each additional bit of water requires more work, so the total work is the triangular area under the level-difference-versus-charge graph, not the final rectangle. The field between the plates is like a stretched spring, with stored energy proportional to the square of the field; a dielectric is like a polarizable layer inserted between the springs, weakening the field and increasing capacitance.",
    "intuitionDetailed": "先抓住“两板带等量异号电荷”这一点：电容器不是整体带电的物体，而是把 \\(+Q\\) 和 \\(-Q\\) 分开存放的装置，净电荷为零。把每块极板的内表面电荷看成一层无限大带电面，每层单独产生的场是 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)；在两板之间，两层场的箭头同向，叠加成 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\)，所以板间场比单层场强一倍；在两板外侧，两层场的箭头反向，正好抵消。因为每层场的强度与距离无关，叠加后的板间场在大小和方向上都恒定，直到靠近边缘才因场线向外弯曲而破坏。匀强场中电势沿场线线性下降，\\(V=Ed\\)，等势面是一组平行于极板的平面。电容公式不是新的实验定律，而是 \\(C=\\dfrac{Q}{V}\\)、\\(\\sigma=\\dfrac{Q}{A}\\)、\\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)、\\(V=Ed\\) 的合并结果。充电时，电压随已搬电荷 \\(q\\) 线性增大，所以每一小份 \\(\\mathrm{d}q\\) 要做的功 \\(v\\,\\mathrm{d}q\\) 越来越大；把 \\(\\dfrac{q}{C}\\) 从 0 积到 \\(Q\\) 得到 \\(\\dfrac{Q^{2}}{2C}\\)，这正是 \\(V\\)–\\(q\\) 直线下三角形的面积。若用恒压电池充电，电池提供 \\(QV\\) 的总功，但只有一半进入电容器，另一半在回路电阻中变成热；不要把电池的总功误当成储存能量。插入电介质时，先问“\\(Q\\) 不变还是 \\(V\\) 不变”：孤立时 \\(Q\\) 固定，\\(C\\) 增大使 \\(V\\)、\\(E\\)、\\(U\\) 都减小；接电源时 \\(V\\) 固定，\\(C\\) 增大使 \\(Q\\)、\\(U\\) 增大，而板间 \\(E=\\dfrac{V}{d}\\) 不变。 · Start with the key point that the plates carry equal and opposite charges: a capacitor is not a net-charged object but a device that stores \\(+Q\\) and \\(-Q\\) separately, with zero net charge. Treat each plate's inner-surface charge as an infinite charged sheet; one sheet alone produces \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\). Between the plates the two field arrows point the same way and add to \\(\\dfrac{\\sigma}{\\varepsilon_0}\\), so the field is twice that of a single sheet; outside the plates the arrows point in opposite directions and cancel. Because each sheet's field is independent of distance, the superposed field between the plates is constant in both magnitude and direction, until fringing bends the lines near the edges. In a uniform field the potential decreases linearly along the field lines, \\(V=Ed\\), and the equipotentials are planes parallel to the plates. The capacitance formula is not a new law; it combines \\(C=\\dfrac{Q}{V}\\), \\(\\sigma=\\dfrac{Q}{A}\\), \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\), and \\(V=Ed\\). During charging the voltage grows linearly with the charge \\(q\\) already moved, so each additional \\(\\mathrm{d}q\\) requires more work \\(v\\,\\mathrm{d}q\\); integrating \\(\\dfrac{q}{C}\\) from 0 to \\(Q\\) gives \\(\\dfrac{Q^{2}}{2C}\\), the triangular area under the \\(V\\)–\\(q\\) line. A constant-voltage battery supplies total work \\(QV\\), but only half enters the capacitor; the other half becomes heat in the circuit resistance, so do not mistake the battery's total work for the stored energy. When a dielectric is inserted, first ask whether \\(Q\\) or \\(V\\) is held fixed: at fixed \\(Q\\), increasing \\(C\\) lowers \\(V\\), \\(E\\), and \\(U\\); at fixed \\(V\\), increasing \\(C\\) raises \\(Q\\) and \\(U\\), while the field \\(E=\\dfrac{V}{d}\\) stays the same.",
    "formulas": [
      {
        "latex": "C=\\dfrac{Q}{V}",
        "note": "电容定义式，适用于任何电容器；\\(Q\\) 取一个极板电荷量的绝对值。 · Definition of capacitance, valid for any capacitor; \\(Q\\) is the magnitude of the charge on one plate."
      },
      {
        "latex": "C=\\dfrac{\\kappa\\varepsilon_0A}{d}",
        "note": "平行板电容器，极板面积 \\(A\\)、间距 \\(d\\)，电介质填满极板间。 · Parallel-plate capacitor with plate area \\(A\\), separation \\(d\\), and a dielectric filling the gap."
      },
      {
        "latex": "\\sigma=\\dfrac{Q}{A}",
        "note": "极板内表面的面电荷密度大小；忽略边缘效应时均匀分布。 · Magnitude of the surface charge density on a plate's inner surface; uniform when fringing is neglected."
      },
      {
        "latex": "E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}",
        "note": "单层无限大均匀带电面产生的场强；叠加时每块极板贡献这一项。 · Field of a single infinite uniformly charged sheet; each plate contributes this term in the superposition."
      },
      {
        "latex": "E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{\\varepsilon_0A}",
        "note": "真空中两板之间的合场强，方向由正板指向负板；孤立（\\(Q\\) 不变）填入 \\(\\kappa\\) 的介质后为 \\(\\dfrac{Q}{\\kappa\\varepsilon_0A}\\)。 · Net field between the plates in vacuum, directed from positive to negative; for an isolated capacitor (fixed \\(Q\\)) with a dielectric of constant \\(\\kappa\\), it becomes \\(\\dfrac{Q}{\\kappa\\varepsilon_0A}\\)."
      },
      {
        "latex": "V=Ed",
        "note": "匀强场中沿场线方向的电势差；正极板电势高、负极板电势低。 · Potential difference along the field in a uniform field; the positive plate is at higher potential."
      },
      {
        "latex": "W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}",
        "note": "外力缓慢分离电荷、给电容器充电所做的功；等于 \\(V\\)–\\(q\\) 图下的三角形面积。 · External work to slowly separate charge and charge the capacitor; equal to the triangular area under the \\(V\\)–\\(q\\) graph."
      },
      {
        "latex": "U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}=\\dfrac{Q^{2}}{2C}",
        "note": "电容器储存的电场势能；三种写法在相应变量已知时等价。 · Electric potential energy stored in the capacitor; the three forms are equivalent depending on which variables are known."
      },
      {
        "latex": "u=\\dfrac{1}{2}\\varepsilon_0E^{2},\\qquad U=uAd",
        "note": "真空中的电场能量密度；线性电介质中 \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\)，板间体积为 \\(Ad\\)。 · Electric-field energy density in vacuum; in a linear dielectric \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\), and the field volume is \\(Ad\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "充电转移电子 · Charging transfers electrons",
        "to": "两板等量异号 · Equal and opposite plate charges",
        "note": "电源把电子从一块极板搬到另一块；一块失去 \\(Q\\)、另一块得到 \\(Q\\)，所以两板电荷为 \\(+Q\\) 与 \\(-Q\\)，净电荷为零。 · A battery moves electrons from one plate to the other; one plate loses \\(Q\\) and the other gains \\(Q\\), so the plates carry \\(+Q\\) and \\(-Q\\) with zero net charge."
      },
      {
        "from": "单层带电面 · Single charged sheet",
        "to": "单层场强 · Field of one sheet",
        "note": "取跨过带电面的高斯柱，两侧对称，得到 \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\)，方向背离正电荷面。 · Take a Gaussian pillbox crossing the sheet; symmetry gives \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\), pointing away from a positive sheet."
      },
      {
        "from": "叠加 · Superposition",
        "to": "板间与板外 · Between and outside",
        "note": "板间两层场同向，\\(E=2\\times\\dfrac{\\sigma}{2\\varepsilon_0}=\\dfrac{\\sigma}{\\varepsilon_0}\\)；板外两层场反向，合场为零。 · Between the plates the two fields are parallel and add to \\(\\dfrac{\\sigma}{\\varepsilon_0}\\); outside they are antiparallel and cancel."
      },
      {
        "from": "匀强场 · Uniform field",
        "to": "电势差 · Potential difference",
        "note": "沿垂直于极板的路径积分 \\(V=\\int E\\,\\mathrm{d}x=Ed\\)；极板是等势面，等势面平行于极板。 · Integrating along a path perpendicular to the plates gives \\(V=\\int E\\,\\mathrm{d}x=Ed\\); the plates are equipotentials and the equipotential surfaces are parallel to them."
      },
      {
        "from": "定义式 · Definition",
        "to": "平行板公式 · Parallel-plate formula",
        "note": "由 \\(C=\\dfrac{Q}{V}\\)、\\(\\sigma=\\dfrac{Q}{A}\\)、\\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)、\\(V=Ed\\) 消去 \\(Q\\)、\\(\\sigma\\)、\\(E\\)、\\(V\\)，得 \\(C=\\dfrac{\\varepsilon_0A}{d}\\)；有介质时 \\(\\varepsilon_0\\to\\kappa\\varepsilon_0\\)。 · Eliminate \\(Q\\), \\(\\sigma\\), \\(E\\), and \\(V\\) from \\(C=\\dfrac{Q}{V}\\), \\(\\sigma=\\dfrac{Q}{A}\\), \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\), and \\(V=Ed\\) to obtain \\(C=\\dfrac{\\varepsilon_0A}{d}\\); with a dielectric replace \\(\\varepsilon_0\\) by \\(\\kappa\\varepsilon_0\\)."
      },
      {
        "from": "充电过程 · Charging process",
        "to": "功的积分 · Work integral",
        "note": "某时刻电压 \\(v=\\dfrac{q}{C}\\)，搬 \\(\\mathrm{d}q\\) 做功 \\(\\mathrm{d}W=v\\,\\mathrm{d}q\\)；积分得 \\(W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}\\)。 · At a given instant \\(v=\\dfrac{q}{C}\\); moving \\(\\mathrm{d}q\\) requires \\(\\mathrm{d}W=v\\,\\mathrm{d}q\\), and integration gives \\(W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}\\)."
      },
      {
        "from": "电场能量密度 · Field energy density",
        "to": "与储能一致 · Consistency with stored energy",
        "note": "把 \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\) 乘以体积 \\(Ad\\)，并用 \\(E=\\dfrac{V}{d}\\) 与 \\(C=\\dfrac{\\varepsilon_0A}{d}\\)，得 \\(U=\\dfrac{1}{2}CV^{2}\\)，与充电功一致。 · Multiply \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\) by the volume \\(Ad\\), then use \\(E=\\dfrac{V}{d}\\) and \\(C=\\dfrac{\\varepsilon_0A}{d}\\) to obtain \\(U=\\dfrac{1}{2}CV^{2}\\), consistent with the charging work."
      },
      {
        "from": "有限极板 · Finite plates",
        "to": "边缘效应与适用范围 · Fringing and validity",
        "note": "边缘处场线向外弯曲，中心区域才近似匀强；当 \\(d\\) 远小于极板线度时，边缘区域占比小，\\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) 是好近似，实际电容略大。 · Field lines bulge near the edges, so only the central region is approximately uniform; when \\(d\\) is much smaller than the plate dimensions, the edge region is a small fraction, \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) is a good approximation, and the actual capacitance is slightly larger."
      }
    ],
    "conditions": [
      "两块极板平行、平整，面积均为 \\(A\\)，间距为 \\(d\\)，且 \\(d\\) 远小于极板的最小线度；观察区域远离边缘，才可忽略边缘效应。 · The two plates are parallel and flat, each of area \\(A\\), separated by \\(d\\) much smaller than the smallest plate dimension; the region of interest is far from the edges so fringing can be neglected.",
      "电介质填满极板间，且为线性、均匀、各向同性介质，未发生击穿；真空或空气可近似取 \\(\\kappa=1\\)。 · The dielectric fills the gap and is linear, homogeneous, and isotropic, with no breakdown; vacuum or air can be approximated by \\(\\kappa=1\\).",
      "两板带等量异号电荷 \\(+Q\\) 与 \\(-Q\\)，净电荷为零；若系统还有净电荷，必须把它与等量异号部分分开处理。 · The plates carry equal and opposite charges \\(+Q\\) and \\(-Q\\) with zero net charge; if the system also has a net charge, it must be treated separately from the equal-and-opposite part.",
      "极板处于静电平衡：极板内部场强为零，整个极板是等势体，电荷分布在相对的内表面上。 · The plates are in electrostatic equilibrium: the field inside each plate is zero, each plate is an equipotential body, and charge resides on the facing inner surfaces.",
      "面电荷密度在远离边缘处均匀；若极板形状或间距使电荷分布明显不均匀，就不能把 \\(\\sigma\\) 当作常量。 · The surface charge density is uniform away from the edges; if the plate shape or spacing makes the distribution strongly nonuniform, \\(\\sigma\\) cannot be treated as constant.",
      "忽略外部电场和其他导体的影响（杂散电容可忽略）；否则板间场不再是两板电荷单独叠加的结果。 · External fields and nearby conductors are negligible (stray capacitance is negligible); otherwise the field is not simply the superposition of the two plates' charges.",
      "充电过程足够缓慢（准静态），以便用 \\(v=\\dfrac{q}{C}\\) 逐时刻计算功；若用恒压电源快速充电，还要把回路电阻中的焦耳热计入能量账。 · Charging is slow enough (quasistatic) to use \\(v=\\dfrac{q}{C}\\) at each instant; for fast charging from a constant-voltage source, include Joule heating in the circuit resistance in the energy account.",
      "讨论电场能量密度时，电介质应是线性介质，\\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\) 才成立；铁电体、非线性介质或存在滞回时需用更一般的 \\(u=\\int\\vec E\\cdot\\mathrm{d}\\vec D\\)。 · For the field-energy density \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\), the dielectric should be linear; for ferroelectrics, nonlinear media, or hysteresis, use the more general \\(u=\\int\\vec E\\cdot\\mathrm{d}\\vec D\\)."
    ],
    "keyPoints": [
      "平行板电容器是两块平行、分离的导体极板，两板带等量异号电荷 \\(+Q\\) 与 \\(-Q\\)，整体净电荷为零。 · A parallel-plate capacitor is two parallel, separated conducting plates carrying equal and opposite charges \\(+Q\\) and \\(-Q\\), with zero net charge overall.",
      "理想模型中电荷均匀分布在相对的内表面上，\\(\\sigma=\\dfrac{Q}{A}\\)；外表面没有净电荷。 · In the ideal model charge is uniform on the facing inner surfaces, \\(\\sigma=\\dfrac{Q}{A}\\); the outer surfaces carry no net charge.",
      "单层带电面产生 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)；板间两层场同向叠加为 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\)，板外两层场反向相消为零。 · One sheet produces \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\); between the plates the two fields add to \\(\\dfrac{\\sigma}{\\varepsilon_0}\\), while outside they cancel to zero.",
      "板间是匀强电场：大小和方向处处相同，场线平行、等距、垂直于极板，方向由正板指向负板。 · The field between the plates is uniform: same magnitude and direction everywhere, with parallel, equally spaced field lines perpendicular to the plates, directed from positive to negative.",
      "匀强场中 \\(V=Ed\\)；极板是等势面，等势面平行于极板，电势沿场线线性降低。 · In the uniform field \\(V=Ed\\); the plates are equipotentials, equipotential surfaces are parallel to the plates, and potential decreases linearly along the field.",
      "\\(C=\\dfrac{Q}{V}=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) 只由几何与电介质决定，与 \\(Q\\)、\\(V\\) 无关。 · \\(C=\\dfrac{Q}{V}=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) is set only by geometry and the dielectric, independent of \\(Q\\) and \\(V\\).",
      "充电功 \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\)，等于储存能量 \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}\\)。 · Charging work \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\) equals the stored energy \\(U=\\dfrac{1}{2}QV=\\dfrac{1}{2}CV^{2}\\).",
      "\\(V\\)–\\(q\\) 图是过原点的直线，面积 \\(\\dfrac{1}{2}QV\\) 是储能；矩形 \\(QV\\) 是恒压电源提供的总功，不是储能。 · The \\(V\\)–\\(q\\) graph is a straight line through the origin; the area \\(\\dfrac{1}{2}QV\\) is the stored energy, while the rectangle \\(QV\\) is the total work supplied by a constant-voltage source, not the stored energy.",
      "能量也可写成 \\(U=uAd\\)，真空中 \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\)，线性电介质中 \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\)。 · Energy can also be written \\(U=uAd\\), with \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\) in vacuum and \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\) in a linear dielectric.",
      "边缘效应使有限极板边缘处场线弯曲、场不再均匀，实际电容略大于理想公式；\\(d\\) 远小于极板线度时误差才小。 · Fringing bends the field lines near the edges of finite plates and makes the field nonuniform, so the actual capacitance is slightly larger than the ideal formula; the error is small only when \\(d\\) is much smaller than the plate dimensions.",
      "插入介质先问 \\(Q\\) 还是 \\(V\\) 不变：孤立时 \\(Q\\) 固定，\\(V\\)、\\(E\\)、\\(U\\) 减小；接电源时 \\(V\\) 固定，\\(Q\\)、\\(U\\) 增大而 \\(E=\\dfrac{V}{d}\\) 不变。 · When inserting a dielectric, first ask whether \\(Q\\) or \\(V\\) is fixed: at fixed \\(Q\\), \\(V\\), \\(E\\), and \\(U\\) decrease; at fixed \\(V\\), \\(Q\\) and \\(U\\) increase while \\(E=\\dfrac{V}{d}\\) stays the same."
    ],
    "misconceptions": [
      "说“电容器整体带电”；电容器储存的是等量异号的分离电荷，整体净电荷为零。 · Saying “the capacitor is charged as a whole”; a capacitor stores equal and opposite separated charges and has zero net charge overall.",
      "认为电容 \\(C\\) 随所带电荷 \\(Q\\) 或电压 \\(V\\) 改变；对于给定几何和电介质，\\(C\\) 是常量。 · Thinking \\(C\\) changes with the stored charge \\(Q\\) or voltage \\(V\\); for fixed geometry and dielectric, \\(C\\) is constant.",
      "把板间场强写成 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)，只算了一块极板的场；两块极板的场同向叠加，总场是 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\)。 · Writing the field between the plates as \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\) and counting only one plate; the two plates' fields add in the same direction to give \\(\\dfrac{\\sigma}{\\varepsilon_0}\\).",
      "认为板外场强与板间相同；理想等量异号平行板外侧两层场相消为零（有限极板边缘附近除外）。 · Thinking the field outside the plates equals the field inside; for ideal equal-and-opposite plates the two outside fields cancel to zero (except near the edges of finite plates).",
      "认为板间场在所有位置都严格匀强，包括边缘；边缘处场线弯曲，匀强场只是远离边缘的近似。 · Thinking the field is strictly uniform everywhere, including the edges; field lines bend there, and uniformity is only an approximation away from the edges.",
      "把储存能量写成 \\(QV\\)；正确的储能是 \\(\\dfrac{1}{2}QV\\)，\\(QV\\) 是恒压电源提供的总功。 · Writing the stored energy as \\(QV\\); the correct value is \\(\\dfrac{1}{2}QV\\), while \\(QV\\) is the total work supplied by a constant-voltage source.",
      "认为充电时电场力做正功；电场力阻碍电荷分离，做负功，外力做正功，电势能增加。 · Thinking the field does positive work during charging; the field opposes charge separation and does negative work, while the external agent does positive work and the potential energy increases.",
      "认为插入电介质一定使储能增加；只有接电源（\\(V\\) 不变）时才增加，孤立（\\(Q\\) 不变）时储能减小。 · Thinking inserting a dielectric always increases the stored energy; it increases only at fixed \\(V\\) (battery connected) and decreases at fixed \\(Q\\) (isolated).",
      "认为插入电介质一定使板间场强减小；孤立时 \\(E\\) 减小为 \\(\\dfrac{1}{\\kappa}\\)，接电源时 \\(E=\\dfrac{V}{d}\\) 不变。 · Thinking a dielectric always reduces the field between the plates; at fixed \\(Q\\) the field drops by \\(\\kappa\\), but at fixed \\(V\\) the field \\(E=\\dfrac{V}{d}\\) is unchanged.",
      "认为电荷平均分布在极板的内外两个表面；理想平行板模型中，等量异号电荷集中在相对的内表面，外表面没有净电荷。 · Thinking charge is spread equally over both the inner and outer surfaces; in the ideal parallel-plate model the equal-and-opposite charge resides on the facing inner surfaces, leaving no net charge outside.",
      "把 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) 当成所有电容器的公式；它只适用于平行板电容器，其他形状要用定义式或相应几何公式。 · Treating \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) as universal; it applies only to a parallel-plate capacitor, while other shapes need the definition or their own geometric formula.",
      "认为电池做的功全部变成电容器的储能；恒压充电时电池做功 \\(QV\\)，储能只有 \\(\\dfrac{1}{2}QV\\)，另一半在回路中耗散。 · Thinking all of a battery's work becomes stored energy; during constant-voltage charging the battery does \\(QV\\), only \\(\\dfrac{1}{2}QV\\) is stored, and the rest is dissipated in the circuit."
    ],
    "examples": [
      {
        "title": "例 1 · 平行板几何与等量异号电荷 · Example 1: Parallel-plate geometry and equal-and-opposite charge",
        "prompt": "一个平行板电容器极板面积 \\(A=0.020\\,\\mathrm{m^{2}}\\)、间距 \\(d=0.50\\,\\mathrm{mm}\\)，极板间为空气。接在 \\(V=12\\,\\mathrm{V}\\) 的电源上。求电容 \\(C\\)、每板电荷量 \\(Q\\)、面电荷密度 \\(\\sigma\\) 与板间场强 \\(E\\)，并说明两板电荷的关系。 · A parallel-plate capacitor has plate area \\(A=0.020\\,\\mathrm{m^{2}}\\), separation \\(d=0.50\\,\\mathrm{mm}\\), and air between the plates. It is connected to a \\(12\\,\\mathrm{V}\\) source. Find the capacitance, the charge magnitude on each plate, the surface charge density, and the field between the plates, and describe the relation between the two plate charges.",
        "steps": [
          "空气近似 \\(\\kappa=1\\)，\\(C=\\dfrac{\\varepsilon_0A}{d}=\\dfrac{(8.85\\times10^{-12})(0.020)}{5.0\\times10^{-4}}=3.54\\times10^{-10}\\,\\mathrm{F}\\)，约 \\(354\\,\\mathrm{pF}\\)。 · With air, \\(\\kappa\\approx1\\), so \\(C=\\dfrac{\\varepsilon_0A}{d}=\\dfrac{(8.85\\times10^{-12})(0.020)}{5.0\\times10^{-4}}=3.54\\times10^{-10}\\,\\mathrm{F}\\), about \\(354\\,\\mathrm{pF}\\).",
          "每板电荷量 \\(Q=CV=(3.54\\times10^{-10})(12)=4.25\\times10^{-9}\\,\\mathrm{C}\\)，约 \\(4.2\\,\\mathrm{nC}\\)。 · The charge magnitude on each plate is \\(Q=CV=(3.54\\times10^{-10})(12)=4.25\\times10^{-9}\\,\\mathrm{C}\\), about \\(4.2\\,\\mathrm{nC}\\).",
          "两板带等量异号电荷：一板 \\(+4.2\\,\\mathrm{nC}\\)，另一板 \\(-4.2\\,\\mathrm{nC}\\)，净电荷为零；充电时电源把 \\(4.2\\,\\mathrm{nC}\\) 的电子从正极板搬到负极板。 · The plates carry equal and opposite charges: \\(+4.2\\,\\mathrm{nC}\\) on one and \\(-4.2\\,\\mathrm{nC}\\) on the other, with zero net charge; charging moved \\(4.2\\,\\mathrm{nC}\\) of electron charge from the positive plate to the negative plate.",
          "面电荷密度 \\(\\sigma=\\dfrac{Q}{A}=\\dfrac{4.25\\times10^{-9}}{0.020}=2.12\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\)。 · The surface charge density is \\(\\sigma=\\dfrac{Q}{A}=\\dfrac{4.25\\times10^{-9}}{0.020}=2.12\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\).",
          "板间场强 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{2.12\\times10^{-7}}{8.85\\times10^{-12}}=2.4\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)；用 \\(E=\\dfrac{V}{d}=\\dfrac{12}{5.0\\times10^{-4}}\\) 检查，结果相同。 · The field is \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{2.12\\times10^{-7}}{8.85\\times10^{-12}}=2.4\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\); the check \\(E=\\dfrac{V}{d}=\\dfrac{12}{5.0\\times10^{-4}}\\) gives the same value."
        ],
        "solution": "\\(C\\approx3.5\\times10^{-10}\\,\\mathrm{F}\\)，\\(Q\\approx4.2\\,\\mathrm{nC}\\)，\\(\\sigma\\approx2.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\)，\\(E\\approx2.4\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)；两板带等量异号电荷，净电荷为零。 · \\(C\\approx3.5\\times10^{-10}\\,\\mathrm{F}\\), \\(Q\\approx4.2\\,\\mathrm{nC}\\), \\(\\sigma\\approx2.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\), and \\(E\\approx2.4\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\); the plates carry equal and opposite charges with zero net charge.",
        "solutionLatex": "C=\\dfrac{\\varepsilon_0A}{d}=3.54\\times10^{-10}\\,\\mathrm{F},\\qquad Q=CV=4.25\\times10^{-9}\\,\\mathrm{C},\\qquad E=\\dfrac{V}{d}=2.4\\times10^{4}\\,\\mathrm{V\\,m^{-1}}"
      },
      {
        "title": "例 2 · 两无限大带电面的场叠加 · Example 2: Superposition of two infinite charged sheets",
        "prompt": "两块无限大平行平板分别带面电荷密度 \\(+\\sigma\\) 和 \\(-\\sigma\\)，\\(\\sigma=2.0\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\)，间距 \\(d=1.0\\,\\mathrm{mm}\\)。求两板之间和两板外侧的合场强，并求两板间的电势差。 · Two infinite parallel sheets carry surface charge densities \\(+\\sigma\\) and \\(-\\sigma\\), with \\(\\sigma=2.0\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\), separated by \\(d=1.0\\,\\mathrm{mm}\\). Find the net field between the sheets, outside them, and the potential difference between them.",
        "steps": [
          "单层带电面的场强 \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}=\\dfrac{2.0\\times10^{-7}}{2(8.85\\times10^{-12})}=1.13\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)。 · Each sheet alone produces \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}=\\dfrac{2.0\\times10^{-7}}{2(8.85\\times10^{-12})}=1.13\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\).",
          "两板之间：正板场指向负板，负板场也指向负板，方向相同，故 \\(E=2E_{\\mathrm{sheet}}=2.26\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)，方向由正板指向负板。 · Between the plates both fields point toward the negative plate, so they add: \\(E=2E_{\\mathrm{sheet}}=2.26\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\), directed from positive to negative.",
          "两板外侧：正板场背离正板，负板场指向负板，两者方向相反、大小相等，合场为零。 · Outside the plates the positive sheet's field points away from it, while the negative sheet's field points toward it; the two are equal and opposite, so the net field is zero.",
          "电势差 \\(V=Ed=(2.26\\times10^{4})(1.0\\times10^{-3})=22.6\\,\\mathrm{V}\\)，正板电势高。 · The potential difference is \\(V=Ed=(2.26\\times10^{4})(1.0\\times10^{-3})=22.6\\,\\mathrm{V}\\), with the positive plate at higher potential."
        ],
        "solution": "板间 \\(E\\approx2.3\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)，方向由正板指向负板；板外 \\(E=0\\)；\\(V\\approx23\\,\\mathrm{V}\\)。 · Between the plates, \\(E\\approx2.3\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\) from positive to negative; outside, \\(E=0\\); \\(V\\approx23\\,\\mathrm{V}\\).",
        "solutionLatex": "E_{\\mathrm{between}}=2\\left(\\dfrac{\\sigma}{2\\varepsilon_0}\\right)=\\dfrac{\\sigma}{\\varepsilon_0}=2.26\\times10^{4}\\,\\mathrm{V\\,m^{-1}},\\qquad E_{\\mathrm{outside}}=0,\\qquad V=Ed=22.6\\,\\mathrm{V}"
      },
      {
        "title": "例 3 · 孤立电容器插入电介质 · Example 3: Inserting a dielectric into an isolated capacitor",
        "prompt": "一个 \\(C_0=100\\,\\mathrm{pF}\\) 的空气电容器充电到 \\(V_0=12\\,\\mathrm{V}\\) 后与电源断开，然后插入 \\(\\kappa=3.0\\) 的电介质填满极板间。求 \\(Q\\)、\\(C\\)、\\(V\\)、板间场强之比与储能 \\(U\\)。 · An air capacitor with \\(C_0=100\\,\\mathrm{pF}\\) is charged to \\(V_0=12\\,\\mathrm{V}\\), disconnected from the source, and then filled with a dielectric of \\(\\kappa=3.0\\). Find \\(Q\\), \\(C\\), \\(V\\), the field ratio, and the stored energy \\(U\\).",
        "steps": [
          "断开后 \\(Q\\) 不变：\\(Q=C_0V_0=(1.00\\times10^{-10})(12)=1.2\\times10^{-9}\\,\\mathrm{C}\\)。 · After disconnecting, \\(Q\\) is fixed: \\(Q=C_0V_0=(1.00\\times10^{-10})(12)=1.2\\times10^{-9}\\,\\mathrm{C}\\).",
          "插入介质后 \\(C=\\kappa C_0=3.0(100\\,\\mathrm{pF})=300\\,\\mathrm{pF}\\)。 · With the dielectric, \\(C=\\kappa C_0=3.0(100\\,\\mathrm{pF})=300\\,\\mathrm{pF}\\).",
          "电压 \\(V=\\dfrac{Q}{C}=\\dfrac{1.2\\times10^{-9}}{3.00\\times10^{-10}}=4.0\\,\\mathrm{V}\\)，是原来的 \\(\\dfrac{1}{3}\\)。 · The voltage is \\(V=\\dfrac{Q}{C}=\\dfrac{1.2\\times10^{-9}}{3.00\\times10^{-10}}=4.0\\,\\mathrm{V}\\), one third of the original.",
          "场强 \\(E=\\dfrac{V}{d}\\)，故 \\(\\dfrac{E}{E_0}=\\dfrac{1}{3}\\)；也可由 \\(E=\\dfrac{Q}{\\kappa\\varepsilon_0A}\\) 直接看出减小为 \\(\\dfrac{1}{\\kappa}\\)。 · Since \\(E=\\dfrac{V}{d}\\), the field ratio is \\(\\dfrac{1}{3}\\); equivalently \\(E=\\dfrac{Q}{\\kappa\\varepsilon_0A}\\) shows the reduction by \\(\\kappa\\).",
          "储能 \\(U=\\dfrac{Q^{2}}{2C}=\\dfrac{(1.2\\times10^{-9})^{2}}{2(3.00\\times10^{-10})}=2.4\\times10^{-9}\\,\\mathrm{J}\\)，是原来的 \\(\\dfrac{1}{3}\\)。 · The stored energy is \\(U=\\dfrac{Q^{2}}{2C}=\\dfrac{(1.2\\times10^{-9})^{2}}{2(3.00\\times10^{-10})}=2.4\\times10^{-9}\\,\\mathrm{J}\\), one third of the original."
        ],
        "solution": "\\(Q=1.2\\,\\mathrm{nC}\\) 不变，\\(C=300\\,\\mathrm{pF}\\)，\\(V=4.0\\,\\mathrm{V}\\)，\\(E\\) 与 \\(U\\) 都减小为原来的 \\(\\dfrac{1}{3}\\)。 · \\(Q=1.2\\,\\mathrm{nC}\\) stays fixed, \\(C=300\\,\\mathrm{pF}\\), \\(V=4.0\\,\\mathrm{V}\\), and both \\(E\\) and \\(U\\) drop to one third of their original values.",
        "solutionLatex": "Q=1.2\\times10^{-9}\\,\\mathrm{C},\\qquad C=300\\,\\mathrm{pF},\\qquad V=4.0\\,\\mathrm{V},\\qquad \\dfrac{U}{U_0}=\\dfrac{1}{3}"
      },
      {
        "title": "例 4 · 充电功与电池的能量账 · Example 4: Charging work and the battery energy account",
        "prompt": "一个 \\(C=470\\,\\mu\\mathrm{F}\\) 的电容器由 \\(V=9.0\\,\\mathrm{V}\\) 的恒压电源从零充到满。求电荷量 \\(Q\\)、储能 \\(U\\)、外力可逆分离电荷所做的功、电源做的总功，以及回路中耗散的能量。 · A \\(470\\,\\mu\\mathrm{F}\\) capacitor is charged from zero to \\(9.0\\,\\mathrm{V}\\) by a constant-voltage source. Find the charge \\(Q\\), the stored energy \\(U\\), the reversible work done by an external agent to separate the charge, the total work done by the source, and the energy dissipated in the circuit.",
        "steps": [
          "\\(Q=CV=(470\\times10^{-6})(9.0)=4.23\\times10^{-3}\\,\\mathrm{C}\\)。 · \\(Q=CV=(470\\times10^{-6})(9.0)=4.23\\times10^{-3}\\,\\mathrm{C}\\).",
          "储能 \\(U=\\dfrac{1}{2}CV^{2}=\\dfrac{1}{2}(470\\times10^{-6})(9.0)^{2}=1.90\\times10^{-2}\\,\\mathrm{J}\\)。 · Stored energy \\(U=\\dfrac{1}{2}CV^{2}=\\dfrac{1}{2}(470\\times10^{-6})(9.0)^{2}=1.90\\times10^{-2}\\,\\mathrm{J}\\).",
          "外力可逆地把电荷从一板搬到另一板，克服电势差做功 \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}=U=1.90\\times10^{-2}\\,\\mathrm{J}\\)。 · Reversibly moving charge from one plate to the other, the external agent does \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}=U=1.90\\times10^{-2}\\,\\mathrm{J}\\).",
          "恒压电源做的总功 \\(W_{\\mathrm{battery}}=QV=(4.23\\times10^{-3})(9.0)=3.81\\times10^{-2}\\,\\mathrm{J}\\)。 · The constant-voltage source does total work \\(W_{\\mathrm{battery}}=QV=(4.23\\times10^{-3})(9.0)=3.81\\times10^{-2}\\,\\mathrm{J}\\).",
          "耗散能量 \\(W_{\\mathrm{battery}}-U=1.90\\times10^{-2}\\,\\mathrm{J}\\)，正好是电源总功的一半，在充电回路的电阻中变为热。 · The dissipated energy is \\(W_{\\mathrm{battery}}-U=1.90\\times10^{-2}\\,\\mathrm{J}\\), exactly half the source's total work, appearing as heat in the circuit resistance."
        ],
        "solution": "\\(Q\\approx4.2\\times10^{-3}\\,\\mathrm{C}\\)，\\(U\\approx1.9\\times10^{-2}\\,\\mathrm{J}\\)；外力可逆做功也是 \\(1.9\\times10^{-2}\\,\\mathrm{J}\\)；电源总功 \\(3.8\\times10^{-2}\\,\\mathrm{J}\\)，其中一半储存、一半耗散。 · \\(Q\\approx4.2\\times10^{-3}\\,\\mathrm{C}\\), \\(U\\approx1.9\\times10^{-2}\\,\\mathrm{J}\\); the reversible external work is also \\(1.9\\times10^{-2}\\,\\mathrm{J}\\); the source does \\(3.8\\times10^{-2}\\,\\mathrm{J}\\), half stored and half dissipated.",
        "solutionLatex": "U=\\dfrac{1}{2}CV^{2}=1.90\\times10^{-2}\\,\\mathrm{J},\\qquad W_{\\mathrm{battery}}=QV=3.81\\times10^{-2}\\,\\mathrm{J},\\qquad W_{\\mathrm{diss}}=1.90\\times10^{-2}\\,\\mathrm{J}"
      },
      {
        "title": "例 5 · 几何变化、比例推理与边缘效应 · Example 5: Geometry change, proportional reasoning, and fringing",
        "prompt": "一个空气平行板电容器由边长 \\(L=0.10\\,\\mathrm{m}\\) 的正方形极板和间距 \\(d=2.0\\,\\mathrm{mm}\\) 组成。求 \\(C_0\\)。若把间距减半并填入 \\(\\kappa=4.0\\) 的介质，求新的 \\(C\\)。若电容器孤立且原电压为 \\(V_0\\)，求新电压与储能之比。最后判断 \\(d\\ll L\\) 的近似是否合理，并说明边缘效应使实际值偏大还是偏小。 · An air parallel-plate capacitor has square plates of side \\(L=0.10\\,\\mathrm{m}\\) separated by \\(d=2.0\\,\\mathrm{mm}\\). Find \\(C_0\\). If the separation is halved and a dielectric of \\(\\kappa=4.0\\) fills the gap, find the new \\(C\\). For an isolated capacitor initially at \\(V_0\\), find the new voltage and the energy ratio. Finally, judge whether \\(d\\ll L\\) is a reasonable approximation and state whether fringing makes the actual value larger or smaller.",
        "steps": [
          "\\(A=L^{2}=1.0\\times10^{-2}\\,\\mathrm{m^{2}}\\)，\\(C_0=\\dfrac{\\varepsilon_0A}{d}=\\dfrac{(8.85\\times10^{-12})(1.0\\times10^{-2})}{2.0\\times10^{-3}}=4.4\\times10^{-11}\\,\\mathrm{F}\\)，约 \\(44\\,\\mathrm{pF}\\)。 · \\(A=L^{2}=1.0\\times10^{-2}\\,\\mathrm{m^{2}}\\), so \\(C_0=\\dfrac{\\varepsilon_0A}{d}=\\dfrac{(8.85\\times10^{-12})(1.0\\times10^{-2})}{2.0\\times10^{-3}}=4.4\\times10^{-11}\\,\\mathrm{F}\\), about \\(44\\,\\mathrm{pF}\\).",
          "间距减半使 \\(C\\) 变为 2 倍，填入 \\(\\kappa=4.0\\) 再变为 4 倍，所以 \\(C=8C_0=3.5\\times10^{-10}\\,\\mathrm{F}\\)，约 \\(350\\,\\mathrm{pF}\\)。 · Halving the separation doubles \\(C\\), and the dielectric multiplies it by 4, so \\(C=8C_0=3.5\\times10^{-10}\\,\\mathrm{F}\\), about \\(350\\,\\mathrm{pF}\\).",
          "孤立时 \\(Q\\) 不变，\\(V=\\dfrac{Q}{C}\\)，故 \\(V=\\dfrac{V_0}{8}\\)；\\(U=\\dfrac{Q^{2}}{2C}\\)，故 \\(U=\\dfrac{U_0}{8}\\)。 · For an isolated capacitor \\(Q\\) is fixed, so \\(V=\\dfrac{Q}{C}=\\dfrac{V_0}{8}\\) and \\(U=\\dfrac{Q^{2}}{2C}=\\dfrac{U_0}{8}\\).",
          "\\(d=2.0\\,\\mathrm{mm}\\)，\\(L=0.10\\,\\mathrm{m}\\)，\\(\\dfrac{d}{L}=0.020\\ll1\\)，中心区域近似匀强，平行板公式合理；但边缘处场线外弯，实际电容略大于 \\(350\\,\\mathrm{pF}\\)。 · With \\(d=2.0\\,\\mathrm{mm}\\) and \\(L=0.10\\,\\mathrm{m}\\), \\(\\dfrac{d}{L}=0.020\\ll1\\), so the central field is approximately uniform and the parallel-plate formula is reasonable; near the edges, however, field lines bulge outward and the actual capacitance is slightly larger than \\(350\\,\\mathrm{pF}\\)."
        ],
        "solution": "\\(C_0\\approx44\\,\\mathrm{pF}\\)，\\(C\\approx3.5\\times10^{-10}\\,\\mathrm{F}=8C_0\\)；孤立时 \\(V=\\dfrac{V_0}{8}\\)、\\(U=\\dfrac{U_0}{8}\\)；\\(\\dfrac{d}{L}=0.020\\)，近似合理，边缘效应使实际电容略偏大。 · \\(C_0\\approx44\\,\\mathrm{pF}\\) and \\(C\\approx3.5\\times10^{-10}\\,\\mathrm{F}=8C_0\\); for the isolated capacitor \\(V=\\dfrac{V_0}{8}\\) and \\(U=\\dfrac{U_0}{8}\\); \\(\\dfrac{d}{L}=0.020\\), so the approximation is reasonable and fringing makes the actual capacitance slightly larger.",
        "solutionLatex": "C_0=\\dfrac{\\varepsilon_0L^{2}}{d}=4.4\\times10^{-11}\\,\\mathrm{F},\\qquad C=8C_0=3.5\\times10^{-10}\\,\\mathrm{F},\\qquad V=\\dfrac{V_0}{8},\\qquad U=\\dfrac{U_0}{8}"
      }
    ],
    "examTips": [
      "先写清两板带等量异号电荷 \\(+Q\\) 与 \\(-Q\\)、净电荷为零；不要把电容器说成“整体带电”。 · Start by stating that the plates carry equal and opposite charges \\(+Q\\) and \\(-Q\\) with zero net charge; never describe the capacitor as “charged as a whole.”",
      "求板间场强时用叠加：单层 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)，两层同向叠加为 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\)；不要漏掉另一块极板。 · For the field between the plates use superposition: one sheet gives \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\), and the two add to \\(\\dfrac{\\sigma}{\\varepsilon_0}\\); do not omit the other plate.",
      "板外场为零只对理想等量异号无限大平板成立；有限极板边缘有边缘场，远处接近偶极场。 · The zero field outside holds only for ideal equal-and-opposite infinite plates; finite plates have fringing near the edges and a dipole-like field far away.",
      "用 \\(E=\\dfrac{V}{d}\\) 时确认处于匀强区域；方向由正板指向负板，电势沿场线降低。 · Use \\(E=\\dfrac{V}{d}\\) only in the uniform region; the field points from positive to negative, and potential decreases along it.",
      "电容公式 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) 只适用于平行板；\\(C\\) 由几何与介质决定，与 \\(Q\\)、\\(V\\) 无关。 · The formula \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) applies only to a parallel-plate capacitor; \\(C\\) is set by geometry and dielectric, not by \\(Q\\) or \\(V\\).",
      "充电功是 \\(V\\)–\\(q\\) 图下的三角形面积 \\(\\dfrac{1}{2}QV\\)；恒压电池总功是矩形 \\(QV\\)，两者不要混淆。 · The charging work is the triangular area \\(\\dfrac{1}{2}QV\\) under the \\(V\\)–\\(q\\) graph; a constant-voltage battery supplies the rectangular work \\(QV\\). Do not confuse the two.",
      "插入介质先判断“孤立（\\(Q\\) 不变）”还是“接电源（\\(V\\) 不变）”，再决定 \\(E\\)、\\(V\\)、\\(U\\) 的变化方向。 · When a dielectric is inserted, first decide “isolated (fixed \\(Q\\))” or “battery-connected (fixed \\(V\\))”, then determine how \\(E\\), \\(V\\), and \\(U\\) change.",
      "检查单位与量纲：\\(\\mathrm{F}=\\mathrm{C\\,V^{-1}}\\)，\\(\\sigma\\) 用 \\(\\mathrm{C\\,m^{-2}}\\)，\\(E\\) 用 \\(\\mathrm{V\\,m^{-1}}\\) 或 \\(\\mathrm{N\\,C^{-1}}\\)，\\(U\\) 用 \\(\\mathrm{J}\\)。 · Check units and dimensions: \\(\\mathrm{F}=\\mathrm{C\\,V^{-1}}\\), \\(\\sigma\\) in \\(\\mathrm{C\\,m^{-2}}\\), \\(E\\) in \\(\\mathrm{V\\,m^{-1}}\\) or \\(\\mathrm{N\\,C^{-1}}\\), and \\(U\\) in \\(\\mathrm{J}\\)."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.3",
        "title": "电容器 · Capacitors",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.4",
        "title": "电介质 · Dielectrics",
        "relation": "相关 · related"
      },
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
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律 · Gauss's Law",
        "relation": "方法类比 · method analogy"
      }
    ],
    "modules": [
      {
        "id": "capacitor",
        "title": "平行板电容器"
      }
    ],
    "practiceHref": "#/em/practice/em-u10",
    "connections": [
      "上游：10.3 给出电容定义与平行板公式；9.1 的电势能和 9.2 的电势差给出“功—能”语言；8.5 的高斯定律用来求单层带电面的场。 · Upstream: 10.3 supplies the definition of capacitance and the parallel-plate formula; electric potential energy in 9.1 and potential difference in 9.2 provide the work–energy language; Gauss's law in 8.5 gives the field of a single charged sheet.",
      "下游：10.4 用电介质极化解释 \\(\\kappa\\) 与场强减弱；11.8 的 RC 电路用本节储能与电压关系描述充放电；13.x 的电场能量与电磁波也沿用 \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\)。 · Downstream: 10.4 explains \\(\\kappa\\) and field reduction through dielectric polarization; RC circuits in 11.8 use the stored energy and voltage relations from this topic; electric-field energy and electromagnetic waves later reuse \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\).",
      "数学：场的叠加、沿场线的线积分 \\(V=\\int E\\,\\mathrm{d}x\\)、\\(V\\)–\\(q\\) 图面积与能量密度的体积分 \\(U=\\int u\\,\\mathrm{d}V\\)。 · Mathematics: superposition of fields, the line integral \\(V=\\int E\\,\\mathrm{d}x\\) along a field line, the area under a \\(V\\)–\\(q\\) graph, and the volume integral \\(U=\\int u\\,\\mathrm{d}V\\) of energy density.",
      "跨学科与应用：相机闪光灯、除颤器、超级电容器和 MEMS 传感器都利用平行板电容储能；生物膜的薄绝缘层也可用平行板模型估算膜电容。 · Cross-disciplinary and applications: camera flashes, defibrillators, supercapacitors, and MEMS sensors all use parallel-plate energy storage; the thin insulating bilayer of a biological membrane can also be modeled as a parallel-plate capacitor to estimate membrane capacitance."
    ],
    "intuitionDetailed": "先抓住“两板带等量异号电荷”这一点：电容器不是整体带电的物体，而是把 \\(+Q\\) 和 \\(-Q\\) 分开存放的装置，净电荷为零。把每块极板的内表面电荷看成一层无限大带电面，每层单独产生的场是 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)；在两板之间，两层场的箭头同向，叠加成 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\)，所以板间场比单层场强一倍；在两板外侧，两层场的箭头反向，正好抵消。因为每层场的强度与距离无关，叠加后的板间场在大小和方向上都恒定，直到靠近边缘才因场线向外弯曲而破坏。匀强场中电势沿场线线性下降，\\(V=Ed\\)，等势面是一组平行于极板的平面。电容公式不是新的实验定律，而是 \\(C=\\dfrac{Q}{V}\\)、\\(\\sigma=\\dfrac{Q}{A}\\)、\\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)、\\(V=Ed\\) 的合并结果。充电时，电压随已搬电荷 \\(q\\) 线性增大，所以每一小份 \\(\\mathrm{d}q\\) 要做的功 \\(v\\,\\mathrm{d}q\\) 越来越大；把 \\(\\dfrac{q}{C}\\) 从 0 积到 \\(Q\\) 得到 \\(\\dfrac{Q^{2}}{2C}\\)，这正是 \\(V\\)–\\(q\\) 直线下三角形的面积。若用恒压电池充电，电池提供 \\(QV\\) 的总功，但只有一半进入电容器，另一半在回路电阻中变成热；不要把电池的总功误当成储存能量。插入电介质时，先问“\\(Q\\) 不变还是 \\(V\\) 不变”：孤立时 \\(Q\\) 固定，\\(C\\) 增大使 \\(V\\)、\\(E\\)、\\(U\\) 都减小；接电源时 \\(V\\) 固定，\\(C\\) 增大使 \\(Q\\)、\\(U\\) 增大，而板间 \\(E=\\dfrac{V}{d}\\) 不变。 · Start with the key point that the plates carry equal and opposite charges: a capacitor is not a net-charged object but a device that stores \\(+Q\\) and \\(-Q\\) separately, with zero net charge. Treat each plate's inner-surface charge as an infinite charged sheet; one sheet alone produces \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\). Between the plates the two field arrows point the same way and add to \\(\\dfrac{\\sigma}{\\varepsilon_0}\\), so the field is twice that of a single sheet; outside the plates the arrows point in opposite directions and cancel. Because each sheet's field is independent of distance, the superposed field between the plates is constant in both magnitude and direction, until fringing bends the lines near the edges. In a uniform field the potential decreases linearly along the field lines, \\(V=Ed\\), and the equipotentials are planes parallel to the plates. The capacitance formula is not a new law; it combines \\(C=\\dfrac{Q}{V}\\), \\(\\sigma=\\dfrac{Q}{A}\\), \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\), and \\(V=Ed\\). During charging the voltage grows linearly with the charge \\(q\\) already moved, so each additional \\(\\mathrm{d}q\\) requires more work \\(v\\,\\mathrm{d}q\\); integrating \\(\\dfrac{q}{C}\\) from 0 to \\(Q\\) gives \\(\\dfrac{Q^{2}}{2C}\\), the triangular area under the \\(V\\)–\\(q\\) line. A constant-voltage battery supplies total work \\(QV\\), but only half enters the capacitor; the other half becomes heat in the circuit resistance, so do not mistake the battery's total work for the stored energy. When a dielectric is inserted, first ask whether \\(Q\\) or \\(V\\) is held fixed: at fixed \\(Q\\), increasing \\(C\\) lowers \\(V\\), \\(E\\), and \\(U\\); at fixed \\(V\\), increasing \\(C\\) raises \\(Q\\) and \\(U\\), while the field \\(E=\\dfrac{V}{d}\\) stays the same.",
    "development": [
      "从两块中性极板开始，用电源把电子从一板搬到另一板，得到 \\(+Q\\) 与 \\(-Q\\)，强调净电荷为零。 · Start with two neutral plates and use a source to move electrons from one to the other, producing \\(+Q\\) and \\(-Q\\) while emphasizing zero net charge.",
      "把每块极板的内表面看成无限大带电面，用高斯定律得到 \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\)。 · Model each inner surface as an infinite charged sheet and use Gauss's law to obtain \\(E_{\\mathrm{sheet}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\).",
      "叠加两层场：板间同向相加得 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\)，板外反向相消为零；说明板间场是匀强场。 · Superpose the two fields: between the plates they add to \\(\\dfrac{\\sigma}{\\varepsilon_0}\\), while outside they cancel to zero; conclude that the field between the plates is uniform.",
      "沿垂直极板的路径积分得到 \\(V=Ed\\)，并画出平行于极板的等势面。 · Integrate along a path perpendicular to the plates to obtain \\(V=Ed\\), and sketch the equipotential surfaces parallel to the plates.",
      "由 \\(C=\\dfrac{Q}{V}\\)、\\(\\sigma=\\dfrac{Q}{A}\\)、\\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)、\\(V=Ed\\) 推出 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\)，并讨论 \\(d\\ll L\\) 与边缘效应。 · Derive \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) from the four relations, and discuss \\(d\\ll L\\) and fringing.",
      "从 \\(v=\\dfrac{q}{C}\\) 出发积分充电功，得到 \\(W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}\\)，用 \\(V\\)–\\(q\\) 图面积解释 \\(\\dfrac{1}{2}QV\\)。 · Integrate the charging work from \\(v=\\dfrac{q}{C}\\) to obtain \\(W_{\\mathrm{ext}}=\\dfrac{Q^{2}}{2C}\\), and explain the factor \\(\\dfrac{1}{2}\\) with the area of the \\(V\\)–\\(q\\) graph.",
      "用能量密度 \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\) 乘体积 \\(Ad\\) 检查储能公式，并区分恒压电源总功与可逆外力功。 · Check the stored-energy formula with the energy density times the volume \\(Ad\\), and distinguish the total work of a constant-voltage source from the reversible external work.",
      "讨论插入介质时孤立（\\(Q\\) 不变）与接电源（\\(V\\) 不变）的差异，并用能量守恒解释减少或增加的能量去向。 · Discuss the difference between isolated (fixed \\(Q\\)) and battery-connected (fixed \\(V\\)) dielectric insertion, and use energy conservation to explain where the energy goes."
    ],
    "checks": [
      "为什么平行板电容器的两板必须带等量异号电荷？如果两板还有净电荷，标准模型会怎样改变？ · Why must the two plates carry equal and opposite charges? How does the standard model change if the plates also have a net charge?",
      "单层带电面的场是 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)，为什么板间总场是 \\(\\dfrac{\\sigma}{\\varepsilon_0}\\) 而不是 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)？ · A single sheet produces \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\); why is the total field between the plates \\(\\dfrac{\\sigma}{\\varepsilon_0}\\) rather than \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)?",
      "为什么理想等量异号平行板外侧的合场为零？有限极板在哪些地方偏离这个结论？ · Why is the net field outside ideal equal-and-opposite plates zero? Where do finite plates deviate from this conclusion?",
      "板间场为什么在大小和方向上都恒定？什么条件下这个“匀强场”近似失效？ · Why is the field between the plates constant in both magnitude and direction? Under what conditions does the uniform-field approximation fail?",
      "不看书能否从 \\(\\sigma=\\dfrac{Q}{A}\\)、\\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 与 \\(V=Ed\\) 推出 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\)？ · Can you derive \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\) from \\(\\sigma=\\dfrac{Q}{A}\\), \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\), and \\(V=Ed\\) without looking?",
      "为什么储能是 \\(\\dfrac{1}{2}QV\\) 而不是 \\(QV\\)？请用 \\(V\\)–\\(q\\) 图的面积解释。 · Why is the stored energy \\(\\dfrac{1}{2}QV\\) rather than \\(QV\\)? Explain with the area under the \\(V\\)–\\(q\\) graph.",
      "恒压电池充电时，电池做的功与电容器储能相差多少？差额去了哪里？ · When charging from a constant-voltage battery, how much work does the battery do compared with the stored energy, and where does the difference go?",
      "插入电介质时，孤立电容器与接电源电容器的 \\(Q\\)、\\(V\\)、\\(E\\)、\\(U\\) 分别如何变化？ · When a dielectric is inserted, how do \\(Q\\), \\(V\\), \\(E\\), and \\(U\\) change for an isolated capacitor and for a battery-connected capacitor?",
      "为什么边缘效应使实际电容略大于 \\(\\dfrac{\\kappa\\varepsilon_0A}{d}\\)？\\(d\\) 与极板线度满足什么关系时近似最好？ · Why does fringing make the actual capacitance slightly larger than \\(\\dfrac{\\kappa\\varepsilon_0A}{d}\\)? What relation between \\(d\\) and the plate dimensions gives the best approximation?"
    ],
    "vocabulary": [
      {
        "termZh": "平行板电容器",
        "termEn": "parallel-plate capacitor",
        "defZh": "由两块平行、分离的导体极板组成的电容器，极板面积 \\(A\\)、间距 \\(d\\)，两板带等量异号电荷。",
        "defEn": "A capacitor made of two parallel, separated conducting plates of area \\(A\\) and separation \\(d\\), carrying equal and opposite charges."
      },
      {
        "termZh": "极板",
        "termEn": "plate",
        "defZh": "电容器中的导体表面；理想平行板模型中，等量异号电荷分布在两块相对的内表面上。",
        "defEn": "A conducting surface in a capacitor; in the ideal parallel-plate model, the equal and opposite charges reside on the two facing inner surfaces."
      },
      {
        "termZh": "面电荷密度",
        "termEn": "surface charge density",
        "defZh": "单位面积上的电荷量 \\(\\sigma=\\dfrac{Q}{A}\\)；板间场强由它决定。",
        "defEn": "Charge per unit area, \\(\\sigma=\\dfrac{Q}{A}\\); it determines the field between the plates."
      },
      {
        "termZh": "匀强电场",
        "termEn": "uniform electric field",
        "defZh": "大小和方向在区域内处处相同的电场；理想平行板之间（远离边缘）的场就是匀强场。",
        "defEn": "An electric field with the same magnitude and direction everywhere in a region; the field between ideal parallel plates away from the edges is uniform."
      },
      {
        "termZh": "边缘效应",
        "termEn": "fringing (edge) effect",
        "defZh": "有限极板边缘处场线向外弯曲、场不再均匀的现象；它使实际电容略大于理想平行板公式。",
        "defEn": "The bending of field lines and loss of uniformity near the edges of finite plates; it makes the actual capacitance slightly larger than the ideal parallel-plate formula."
      },
      {
        "termZh": "充电功",
        "termEn": "charging work",
        "defZh": "外力把电荷从一块极板搬到另一块、克服电势差所做的功，\\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\)。",
        "defEn": "The work done by an external agent moving charge from one plate to the other against the potential difference, \\(W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,\\mathrm{d}q=\\dfrac{Q^{2}}{2C}\\)."
      },
      {
        "termZh": "电场能量密度",
        "termEn": "electric-field energy density",
        "defZh": "单位体积储存的电场能，真空中 \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\)，线性电介质中 \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\)。",
        "defEn": "Electric-field energy per unit volume, \\(u=\\dfrac{1}{2}\\varepsilon_0E^{2}\\) in vacuum and \\(u=\\dfrac{1}{2}\\kappa\\varepsilon_0E^{2}\\) in a linear dielectric."
      },
      {
        "termZh": "相对介电常数",
        "termEn": "relative permittivity (dielectric constant)",
        "defZh": "描述电介质使电容增大倍数的无量纲量 \\(\\kappa\\)；填满极板间时 \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\)。",
        "defEn": "The dimensionless factor \\(\\kappa\\) by which a dielectric increases capacitance; when it fills the gap, \\(C=\\dfrac{\\kappa\\varepsilon_0A}{d}\\)."
      }
    ]
  }
};
