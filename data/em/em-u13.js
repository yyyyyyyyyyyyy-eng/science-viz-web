export const UNIT = {
  "id": "em-u13",
  "code": "13",
  "titleZh": "电磁感应",
  "titleEn": "Electromagnetic Induction",
  "subject": "em",
  "layer": "ap"
};
export const TOPICS = {
  "13.1": {
    "id": "em/em-u13/13.1",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.1",
    "titleZh": "磁通量",
    "titleEn": "Magnetic Flux",
    "layer": "ap",
    "summary": "磁通量 · Magnetic Flux",
    "learningObjectives": [
      "能陈述「磁通量」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Magnetic Flux：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "磁通量（Magnetic Flux）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「磁通量」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\Phi_B=\\int\\vec B\\cdot\\mathrm{d}\\vec A",
        "note": "磁通量定义。"
      },
      {
        "latex": "\\Phi_B=BA\\cos\\theta",
        "note": "匀强场穿过平面。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「磁通量」的工作方程或机制链。"
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
      "θ 为 B 与面法线的夹角",
      "面积矢量方向与回路绕向满足右手定则",
      "闭合曲面净磁通为零"
    ],
    "keyPoints": [
      "掌握 13.1「磁通量」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「磁通量」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「磁通量」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\Phi_B=BA\\cos\\theta"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「磁通量」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「磁通量」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「磁通量」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「磁通量」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「磁通量」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「磁通量」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.2": {
    "id": "em/em-u13/13.2",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.2",
    "titleZh": "电磁感应",
    "titleEn": "Electromagnetic Induction",
    "layer": "ap",
    "summary": "电磁感应 · Electromagnetic Induction",
    "learningObjectives": [
      "能陈述「电磁感应」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electromagnetic Induction：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电磁感应（Electromagnetic Induction）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电磁感应」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "法拉第电磁感应定律。"
      },
      {
        "latex": "\\varepsilon=-N\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "N 匝线圈。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电磁感应」的工作方程或机制链。"
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
      "闭合回路；磁通量随时间变化",
      "负号表示楞次定律：感应电流反抗磁通变化",
      "线圈电阻决定感应电流大小"
    ],
    "keyPoints": [
      "掌握 13.2「电磁感应」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电磁感应」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电磁感应」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电磁感应」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电磁感应」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电磁感应」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u13",
        "code": "13.1",
        "title": "磁通量",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.3",
        "title": "感应电流与磁力",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电磁感应」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电磁感应」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电磁感应」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.3": {
    "id": "em/em-u13/13.3",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.3",
    "titleZh": "感应电流与磁力",
    "titleEn": "Induced Currents and Magnetic Forces",
    "layer": "ap",
    "summary": "感应电流与磁力 · Induced Currents and Magnetic Forces",
    "learningObjectives": [
      "能陈述「感应电流与磁力」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Induced Currents and Magnetic Forces：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "感应电流与磁力（Induced Currents and Magnetic Forces）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「感应电流与磁力」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "感应电动势。"
      },
      {
        "latex": "I=\\dfrac{\\varepsilon}{R}",
        "note": "闭合回路的感应电流。"
      },
      {
        "latex": "\\vec F=I\\vec L\\times\\vec B",
        "note": "感应电流受到的磁力。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「感应电流与磁力」的工作方程或机制链。"
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
      "闭合导体回路；磁通量变化",
      "楞次定律判断感应电流方向",
      "磁力通常阻碍相对运动（能量守恒）"
    ],
    "keyPoints": [
      "掌握 13.3「感应电流与磁力」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「感应电流与磁力」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「感应电流与磁力」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「感应电流与磁力」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「感应电流与磁力」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「感应电流与磁力」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.4",
        "title": "电感",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「感应电流与磁力」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「感应电流与磁力」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「感应电流与磁力」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.4": {
    "id": "em/em-u13/13.4",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.4",
    "titleZh": "电感",
    "titleEn": "Inductance",
    "layer": "ap",
    "summary": "电感 · Inductance",
    "learningObjectives": [
      "能陈述「电感」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Inductance：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电感（Inductance）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电感」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "L=\\dfrac{N\\Phi_B}{I}",
        "note": "自感系数定义。"
      },
      {
        "latex": "\\varepsilon_L=-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}",
        "note": "自感电动势。"
      },
      {
        "latex": "U=\\dfrac{1}{2}LI^{2}",
        "note": "电感储存的磁能。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电感」的工作方程或机制链。"
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
      "线性电感；磁介质未饱和",
      "理想电感无电阻；实际线圈含电阻",
      "感应电动势方向由楞次定律判断"
    ],
    "keyPoints": [
      "掌握 13.4「电感」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电感」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电感」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "L=\\dfrac{N\\Phi_B}{I}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电感」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电感」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电感」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u13",
        "code": "13.3",
        "title": "感应电流与磁力",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.5",
        "title": "LR 电路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电感」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电感」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电感」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.5": {
    "id": "em/em-u13/13.5",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.5",
    "titleZh": "LR 电路",
    "titleEn": "Circuits with Resistors and Inductors (LR Circuits)",
    "layer": "ap",
    "summary": "LR 电路 · Circuits with Resistors and Inductors (LR Circuits)",
    "learningObjectives": [
      "能陈述「LR 电路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Circuits with Resistors and Inductors (LR Circuits)：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "LR 电路（Circuits with Resistors and Inductors (LR Circuits)）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「LR 电路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\tau=\\dfrac{L}{R}",
        "note": "LR 时间常数。"
      },
      {
        "latex": "I(t)=\\dfrac{\\varepsilon}{R}\\left(1-e^{-\\dfrac{t}{\\tau}}\\right)",
        "note": "接通电源后的电流上升。"
      },
      {
        "latex": "I(t)=I_0e^{-\\dfrac{t}{\\tau}}",
        "note": "断开电源后的电流衰减。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「LR 电路」的工作方程或机制链。"
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
      "恒定 L、R；理想电感",
      "接通初始 I(0)=0；断开初始 I(0)=I₀",
      "t=τ 时达到 63.2%；约 5τ 基本稳定"
    ],
    "keyPoints": [
      "掌握 13.5「LR 电路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「LR 电路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「LR 电路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\tau=\\dfrac{L}{R}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「LR 电路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「LR 电路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「LR 电路」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u13",
        "code": "13.4",
        "title": "电感",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.6",
        "title": "LC 电路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「LR 电路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「LR 电路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「LR 电路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.6": {
    "id": "em/em-u13/13.6",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.6",
    "titleZh": "LC 电路",
    "titleEn": "Circuits with Capacitors and Inductors (LC Circuits)",
    "layer": "ap",
    "summary": "LC 电路 · Circuits with Capacitors and Inductors (LC Circuits)",
    "learningObjectives": [
      "能陈述「LC 电路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Circuits with Capacitors and Inductors (LC Circuits)：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "LC 电路（Circuits with Capacitors and Inductors (LC Circuits)）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「LC 电路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\omega=\\dfrac{1}{\\sqrt{LC}}",
        "note": "LC 振荡角频率。"
      },
      {
        "latex": "T=2\\pi\\sqrt{LC}",
        "note": "LC 振荡周期。"
      },
      {
        "latex": "q(t)=Q_{\\max}\\cos(\\omega t+\\phi)",
        "note": "电荷随时间振荡。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「LC 电路」的工作方程或机制链。"
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
      "理想 L、C；无电阻损耗",
      "能量在电场与磁场间振荡，总能量守恒",
      "初始条件决定 Q_max 与 φ"
    ],
    "keyPoints": [
      "掌握 13.6「LC 电路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「LC 电路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「LC 电路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\omega=\\dfrac{1}{\\sqrt{LC}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「LC 电路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「LC 电路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「LC 电路」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u13",
        "code": "13.5",
        "title": "LR 电路",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「LC 电路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「LC 电路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「LC 电路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.7": {
    "id": "em/em-u13/13.7",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.7",
    "titleZh": "麦克斯韦方程与电磁波",
    "titleEn": "Maxwell Equations and Electromagnetic Waves",
    "layer": "ap",
    "summary": "麦克斯韦方程组用四个方程完整描述电与磁：电荷产生电场，变化的磁场产生电场，电流与变化的电场产生磁场。把麦克斯韦补充加入安培定律后，充电电容器间隙中的位移电流使总电流保持连续；在无源真空中，方程组给出电磁波方程，波速 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · Maxwell's equations fully describe electricity and magnetism in four laws: charges produce electric fields, changing magnetic fields produce electric fields, and currents plus changing electric fields produce magnetic fields. With Maxwell's addition to Ampère's law, the displacement current in a charging capacitor keeps the total current continuous; in source-free vacuum the equations yield electromagnetic wave equations with speed \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
    "learningObjectives": [
      "能写出麦克斯韦方程组的四个方程，说明每个方程描述的物理内容、积分形式与符号约定。 · Write the four Maxwell equations and state the physics, integral form, and sign conventions of each.",
      "能说明麦克斯韦第四方程是安培定律加上麦克斯韦补充，区分传导电流与位移电流，并用充电电容器解释总电流为什么连续。 · Explain that Maxwell's fourth equation is Ampère's law plus Maxwell's addition, distinguish conduction current from displacement current, and use a charging capacitor to explain why the total current is continuous.",
      "能由麦克斯韦方程组说明真空中电场与磁场满足波动方程，并推出 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)，用单位与数量级检验。 · Use Maxwell's equations to show that electric and magnetic fields obey wave equations in vacuum, derive \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\), and check with units and order of magnitude.",
      "能描述真空平面电磁波的结构：\\(\\vec E\\)、\\(\\vec B\\) 与传播方向两两垂直、同相位，且 \\(E=cB\\)；能区分场强剖面、相位关系与传播方向图。 · Describe the structure of a vacuum plane electromagnetic wave: \\(\\vec E\\), \\(\\vec B\\), and the propagation direction are mutually perpendicular, the fields are in phase, and \\(E=cB\\); distinguish field-profile, phase, and propagation-direction graphs."
    ],
    "essentialKnowledge": [
      "麦克斯韦方程组由四个方程组成：电高斯定律、磁高斯定律、法拉第定律与安培–麦克斯韦定律；它们合起来完整描述经典电磁现象。 · Maxwell's equations consist of four laws: Gauss's law for electricity, Gauss's law for magnetism, Faraday's law, and the Ampère–Maxwell law; together they fully describe classical electromagnetism.",
      "电高斯定律 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)：电荷是电场的源，穿过闭合曲面的净电通量只由曲面内部的净电荷决定。 · Gauss's law for electricity, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\): charge is the source of the electric field, and the net electric flux through a closed surface depends only on the net charge inside.",
      "磁高斯定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\)：不存在磁单极子，磁感线闭合，穿过任意闭合曲面的净磁通为零。 · Gauss's law for magnetism, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\): there are no magnetic monopoles, magnetic field lines close on themselves, and the net magnetic flux through any closed surface is zero.",
      "法拉第定律 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)：变化的磁通量产生环流电场，负号对应楞次定律。 · Faraday's law, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\): a changing magnetic flux produces a circulating electric field, with the minus sign expressing Lenz's law.",
      "安培–麦克斯韦定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)：磁场由传导电流和变化的电通量共同产生。 · The Ampère–Maxwell law, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\): magnetic fields are produced by conduction current and by a changing electric flux.",
      "麦克斯韦第四方程就是安培定律加上麦克斯韦补充；补充项 \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 在稳恒情形为零，但在充电电容器等非稳恒情形必不可少。 · Maxwell's fourth equation is Ampère's law plus Maxwell's addition; the extra term \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) vanishes in steady situations but is essential in non-steady situations such as a charging capacitor.",
      "位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 不是电荷的流动，而是变化电通量的等效电流；在充电平行板电容器中，\\(I_{\\mathrm{d}}\\) 等于导线中的传导电流，使总电流连续。 · Displacement current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) is not a flow of charge but the equivalent current of a changing electric flux; in a charging parallel-plate capacitor it equals the conduction current in the wires, making the total current continuous.",
      "在无源真空（\\(Q_{\\mathrm{enc}}=0\\)、\\(I_{\\mathrm{enc}}=0\\)）中，麦克斯韦方程组给出 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) 与 \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\)：电场与磁场都以波的形式传播。 · In source-free vacuum (\\(Q_{\\mathrm{enc}}=0\\), \\(I_{\\mathrm{enc}}=0\\)), Maxwell's equations give \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) and \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\): both fields propagate as waves.",
      "电磁波在真空中的速度 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，与频率、波长、场强及源的运动无关；这统一了电磁学与光学。 · The speed of electromagnetic waves in vacuum is \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), independent of frequency, wavelength, field strength, and the motion of the source; this unifies electromagnetism and optics.",
      "真空中的平面电磁波是横波：\\(\\vec E\\)、\\(\\vec B\\) 与传播方向 \\(\\vec k\\) 两两垂直，\\(\\vec E\\) 与 \\(\\vec B\\) 同相位，振幅满足 \\(E=cB\\)，传播方向为 \\(\\vec E\\times\\vec B\\)。 · A plane electromagnetic wave in vacuum is transverse: \\(\\vec E\\), \\(\\vec B\\), and the propagation direction \\(\\vec k\\) are mutually perpendicular, \\(\\vec E\\) and \\(\\vec B\\) are in phase, the amplitudes satisfy \\(E=cB\\), and the propagation direction is \\(\\vec E\\times\\vec B\\).",
      "介质中 \\(v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}}=\\dfrac{c}{n}\\)；频率由源决定、跨界面不变，波长变为真空波长的 \\(\\dfrac{1}{n}\\)。 · In a medium, \\(v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}}=\\dfrac{c}{n}\\); the frequency is set by the source and does not change across an interface, while the wavelength becomes \\(\\dfrac{1}{n}\\) of its vacuum value."
    ],
    "definition": "麦克斯韦方程组（Maxwell's equations）是完整描述经典电磁现象的四个方程：电高斯定律 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)，磁高斯定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\)，法拉第定律 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)，以及安培–麦克斯韦定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。麦克斯韦第四方程就是安培定律加上麦克斯韦补充：磁场不仅可以由传导电流产生，也可以由变化的电通量产生；后者的等效电流称为位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。在无源真空中，这四个方程给出 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) 与 \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\)，即电磁波方程；波速 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，在真空中对所有频率的电磁波都相同。 · Maxwell's equations are the four equations that fully describe classical electromagnetism: Gauss's law for electricity, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\); Gauss's law for magnetism, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\); Faraday's law, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\); and the Ampère–Maxwell law, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\). Maxwell's fourth equation is Ampère's law plus Maxwell's addition: magnetic fields can be produced not only by conduction current but also by a changing electric flux, whose equivalent current is the displacement current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\). In source-free vacuum these four equations give \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) and \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\), the electromagnetic wave equations; the wave speed is \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), the same for electromagnetic waves of every frequency in vacuum.",
    "intuition": "把四个方程想成四条规则：电荷是电场的源；磁感线没有起点和终点；变化的磁通量像旋涡一样驱动环流电场；电流和变化的电通量都能驱动环流磁场。 · Think of the four equations as four rules: charge is the source of the electric field; magnetic field lines have no beginning or end; a changing magnetic flux drives a circulating electric field like a vortex; and both current and changing electric flux drive a circulating magnetic field.",
    "formulas": [
      {
        "latex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "note": "电高斯定律：电荷是电场的源；闭合曲面取外法线。 · Gauss's law for electricity: charge is the source of the electric field; the outward normal is used on a closed surface."
      },
      {
        "latex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0",
        "note": "磁高斯定律：不存在磁单极子，磁感线闭合。 · Gauss's law for magnetism: there are no magnetic monopoles, so magnetic field lines close on themselves."
      },
      {
        "latex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "法拉第定律：变化的磁通量产生环流电场；负号体现楞次定律。 · Faraday's law: a changing magnetic flux produces a circulating electric field; the minus sign expresses Lenz's law."
      },
      {
        "latex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}",
        "note": "安培–麦克斯韦定律：传导电流与变化的电通量都产生磁场。 · Ampère–Maxwell law: both conduction current and changing electric flux produce a magnetic field."
      },
      {
        "latex": "I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}",
        "note": "位移电流的定义；它不是电荷的流动，而是变化电通量的等效电流。 · Definition of displacement current; it is not charge flow but the equivalent current of a changing electric flux."
      },
      {
        "latex": "\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2},\\quad \\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}",
        "note": "无源真空中的波动方程；每个笛卡尔分量都满足同一形式。 · Wave equations in source-free vacuum; every Cartesian component satisfies the same form."
      },
      {
        "latex": "c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}",
        "note": "真空中的电磁波速度；代入 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)、\\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\) 得 \\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · Speed of electromagnetic waves in vacuum; substituting \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\) and \\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\) gives \\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)."
      },
      {
        "latex": "E=cB",
        "note": "真空平面电磁波中电场与磁场振幅之比等于 \\(c\\)；二者同相位。 · In a vacuum plane electromagnetic wave, the ratio of the field amplitudes equals \\(c\\); the fields are in phase."
      },
      {
        "latex": "E(x,t)=E_{\\max}\\cos(kx-\\omega t),\\quad B(x,t)=B_{\\max}\\cos(kx-\\omega t)",
        "note": "沿 \\(+x\\) 传播的平面波；\\(c=\\dfrac{\\omega}{k}\\)。 · Plane wave propagating along \\(+x\\); \\(c=\\dfrac{\\omega}{k}\\)."
      },
      {
        "latex": "v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}}=\\dfrac{c}{n}",
        "note": "介质中的波速；\\(n\\) 为折射率。频率不变，波长变为 \\(\\dfrac{\\lambda_0}{n}\\)。 · Wave speed in a medium; \\(n\\) is the refractive index. Frequency is unchanged and the wavelength becomes \\(\\dfrac{\\lambda_0}{n}\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "安培定律用于充电电容器 · Ampère's law applied to a charging capacitor",
        "to": "曲面选择矛盾 · Surface-choice contradiction",
        "note": "以导线为边界的安培环路，取穿过导线的曲面得 \\(I_{\\mathrm{enc}}=I\\)，取穿过电容器间隙的曲面得 \\(I_{\\mathrm{enc}}=0\\)；稳恒安培定律对非稳恒情形不自洽。 · For an Ampèrian loop bounded by the wire, a surface through the wire gives \\(I_{\\mathrm{enc}}=I\\), while a surface through the capacitor gap gives \\(I_{\\mathrm{enc}}=0\\); steady Ampère's law is inconsistent for non-steady fields."
      },
      {
        "from": "电容器极板间的电场 · Electric field between the plates",
        "to": "位移电流 · Displacement current",
        "note": "\\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{A\\varepsilon_0}\\)，故 \\(\\Phi_E=EA=\\dfrac{Q}{\\varepsilon_0}\\)，从而 \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}=I\\)；位移电流等于传导电流。 · \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{A\\varepsilon_0}\\), so \\(\\Phi_E=EA=\\dfrac{Q}{\\varepsilon_0}\\) and \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}=I\\); the displacement current equals the conduction current."
      },
      {
        "from": "麦克斯韦补充 · Maxwell's addition",
        "to": "安培–麦克斯韦定律 · Ampère–Maxwell law",
        "note": "把 \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 加到安培定律右边，使总电流连续，方程对任意曲面给出同一个 \\(B\\)。 · Adding \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) to the right side of Ampère's law makes the total current continuous and gives the same \\(B\\) for any surface."
      },
      {
        "from": "无源真空中的麦克斯韦方程组 · Maxwell's equations in source-free vacuum",
        "to": "波动方程 · Wave equations",
        "note": "对法拉第定律取旋度，并用 \\(\\nabla\\times\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial\\vec E}{\\partial t}\\) 消去 \\(\\vec B\\)，得 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\)；磁场同理。 · Take the curl of Faraday's law and use \\(\\nabla\\times\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial\\vec E}{\\partial t}\\) to eliminate \\(\\vec B\\), obtaining \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\); the magnetic field satisfies the same form."
      },
      {
        "from": "波动方程 · Wave equation",
        "to": "波速 · Wave speed",
        "note": "与 \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\) 比较，得 \\(v=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\)。 · Compare with \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\) to identify \\(v=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\)."
      },
      {
        "from": "平面波解 · Plane-wave solution",
        "to": "电场与磁场的关系 · Relation between the fields",
        "note": "把 \\(\\vec E=E_{\\max}\\cos(kx-\\omega t)\\hat j\\) 代入法拉第定律，得 \\(\\vec B\\) 沿 \\(\\hat k\\) 且 \\(E_{\\max}=cB_{\\max}\\)；两场同相位。 · Substituting \\(\\vec E=E_{\\max}\\cos(kx-\\omega t)\\hat j\\) into Faraday's law gives \\(\\vec B\\) along \\(\\hat k\\) and \\(E_{\\max}=cB_{\\max}\\); the fields are in phase."
      },
      {
        "from": "量纲检验 · Dimensional check",
        "to": "光速 · Speed of light",
        "note": "\\(\\mu_0\\varepsilon_0\\) 的单位为 \\(\\mathrm{s^2\\,m^{-2}}\\)，故 \\(\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\) 的单位为 \\(\\mathrm{m\\,s^{-1}}\\)；数值与实测光速一致，说明光是电磁波。 · \\(\\mu_0\\varepsilon_0\\) has units of \\(\\mathrm{s^2\\,m^{-2}}\\), so \\(\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\) has units of \\(\\mathrm{m\\,s^{-1}}\\); the value agrees with the measured speed of light, showing that light is an electromagnetic wave."
      }
    ],
    "conditions": [
      "以下积分形式取真空（或近似真空）；介质中需把 \\(\\varepsilon_0\\)、\\(\\mu_0\\) 换成 \\(\\varepsilon\\)、\\(\\mu\\)，并考虑束缚电荷与磁化电流。 · The integral forms below use vacuum (or near-vacuum); in a medium replace \\(\\varepsilon_0\\) and \\(\\mu_0\\) by \\(\\varepsilon\\) and \\(\\mu\\) and account for bound charge and magnetization current.",
      "麦克斯韦补充项只在电通量变化时出现；稳恒电流情形 \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=0\\)，退化为安培定律。 · Maxwell's addition appears only when the electric flux changes; for steady currents \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=0\\) and the law reduces to Ampère's law.",
      "安培环路与所取曲面的法线方向用右手定则联系；法拉第定律的负号体现楞次定律。 · The Ampèrian loop and the surface normal are related by the right-hand rule; the minus sign in Faraday's law expresses Lenz's law.",
      "推导波动方程时取无源真空：\\(Q_{\\mathrm{enc}}=0\\)、\\(I_{\\mathrm{enc}}=0\\)，且远离源，局部可视为平面波。 · The wave equations are derived in source-free vacuum, \\(Q_{\\mathrm{enc}}=0\\) and \\(I_{\\mathrm{enc}}=0\\), far from sources where the wave is locally planar.",
      "\\(c\\) 是真空中的速度；介质中 \\(v=\\dfrac{c}{n}<c\\)，且可能随频率变化（色散）。 · \\(c\\) is the vacuum speed; in a medium \\(v=\\dfrac{c}{n}<c\\), and it may depend on frequency (dispersion).",
      "平面波中 \\(E=cB\\) 只在真空成立；介质中应为 \\(E=vB\\)。 · For a plane wave, \\(E=cB\\) holds only in vacuum; in a medium it becomes \\(E=vB\\).",
      "经典麦克斯韦方程组不包含量子效应；在单光子或强场情形需要量子电动力学。 · The classical Maxwell equations do not include quantum effects; single-photon or strong-field situations require quantum electrodynamics."
    ],
    "keyPoints": [
      "四个方程分别负责：电荷生电场、无磁单极、变化磁场生电场、电流与变化电场生磁场。 · The four equations cover, respectively: charge produces an electric field, no magnetic monopoles, a changing magnetic field produces an electric field, and current plus a changing electric field produces a magnetic field.",
      "麦克斯韦第四方程 = 安培定律 + 麦克斯韦补充；没有补充项就无法处理充电电容器等非稳恒情形。 · Maxwell's fourth equation = Ampère's law + Maxwell's addition; without the extra term it cannot handle non-steady situations such as a charging capacitor.",
      "位移电流不是电荷流，而是 \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；在充电电容器中它等于导线中的传导电流。 · Displacement current is not charge flow but \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); in a charging capacitor it equals the conduction current in the wires.",
      "变化的电场产生磁场，变化的磁场产生电场；两者互相激发形成电磁波。 · A changing electric field produces a magnetic field, and a changing magnetic field produces an electric field; the two sustain each other and form an electromagnetic wave.",
      "无源真空中 \\(\\vec E\\) 与 \\(\\vec B\\) 都满足波动方程，波速 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)。 · In source-free vacuum both \\(\\vec E\\) and \\(\\vec B\\) satisfy wave equations with speed \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\).",
      "\\(c\\) 是基本常数：真空中与频率、波长、场强及源的运动无关。 · \\(c\\) is a fundamental constant: in vacuum it is independent of frequency, wavelength, field strength, and the motion of the source.",
      "真空平面电磁波是横波：\\(\\vec E\\perp\\vec B\\perp\\vec k\\)，两场同相位，\\(E=cB\\)。 · A vacuum plane electromagnetic wave is transverse: \\(\\vec E\\perp\\vec B\\perp\\vec k\\), the fields are in phase, and \\(E=cB\\).",
      "传播方向由 \\(\\vec E\\times\\vec B\\) 给出；交换 \\(\\vec E\\) 与 \\(\\vec B\\) 的方向会得到相反结论。 · The propagation direction is given by \\(\\vec E\\times\\vec B\\); swapping the field directions reverses the conclusion.",
      "介质中 \\(v=\\dfrac{c}{n}\\)：频率不变、波长改变；真空中的 \\(c\\) 不能直接用于介质。 · In a medium \\(v=\\dfrac{c}{n}\\): frequency is unchanged and wavelength changes; the vacuum value \\(c\\) cannot be used directly in a medium.",
      "麦克斯韦方程组把电、磁与光统一起来；光就是电磁波。 · Maxwell's equations unify electricity, magnetism, and light; light is an electromagnetic wave."
    ],
    "misconceptions": [
      "把位移电流当成真实电荷流；它只是变化电通量的等效电流，间隙中并没有电荷穿过。 · Treating displacement current as a real flow of charge; it is only the equivalent current of a changing electric flux, and no charge crosses the gap.",
      "认为稳恒安培定律足以处理充电电容器；对非稳恒情形必须加 \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。 · Thinking steady Ampère's law is enough for a charging capacitor; for non-steady fields the term \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) must be included.",
      "认为变化电场产生电场、变化磁场产生磁场；正确的耦合是变化磁场产生电场（法拉第），变化电场产生磁场（麦克斯韦补充）。 · Thinking a changing electric field produces an electric field or a changing magnetic field produces a magnetic field; the correct couplings are changing magnetic flux → electric field (Faraday) and changing electric flux → magnetic field (Maxwell's addition).",
      "认为 \\(\\vec E\\) 与 \\(\\vec B\\) 平行，或传播方向沿 \\(\\vec E\\)；实际三者两两垂直，传播方向为 \\(\\vec E\\times\\vec B\\)。 · Thinking \\(\\vec E\\) and \\(\\vec B\\) are parallel or that propagation is along \\(\\vec E\\); actually the three directions are mutually perpendicular and propagation is along \\(\\vec E\\times\\vec B\\).",
      "把 \\(E=cB\\) 用于介质；介质中应为 \\(E=vB\\)。 · Applying \\(E=cB\\) in a medium; in a medium the relation is \\(E=vB\\).",
      "认为 \\(c\\) 依赖频率、波长或源的速度；真空中对所有电磁波都是同一个 \\(c\\)。 · Thinking \\(c\\) depends on frequency, wavelength, or the source speed; in vacuum every electromagnetic wave has the same \\(c\\).",
      "认为电磁波需要介质（“以太”）；电磁波可以在真空中传播。 · Thinking electromagnetic waves need a medium (“aether”); they can propagate through vacuum.",
      "把磁高斯定律理解为“磁场为零”；它只说净磁通为零、不存在磁单极。 · Reading Gauss's law for magnetism as “the magnetic field is zero”; it only says the net flux is zero and no magnetic monopoles exist.",
      "在法拉第定律中丢掉负号，导致感应电场方向错误。 · Dropping the minus sign in Faraday's law, which reverses the induced electric field."
    ],
    "examples": [
      {
        "title": "例 1 · 充电电容器的位移电流 · Example 1: Displacement current in a charging capacitor",
        "prompt": "半径为 \\(R=5.0\\,\\mathrm{cm}\\) 的圆形平行板电容器以 \\(I=3.0\\,\\mathrm{A}\\) 充电，忽略边缘效应。(a) 求极板间电通量的变化率 \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；(b) 求位移电流 \\(I_{\\mathrm{d}}\\)；(c) 求极板边缘 \\(r=R\\) 处、极板间的磁感应强度 \\(B\\)，并说明方向如何由 \\(\\vec E\\) 的变化决定。 · A circular parallel-plate capacitor of radius \\(R=5.0\\,\\mathrm{cm}\\) is charged with \\(I=3.0\\,\\mathrm{A}\\); ignore edge effects. (a) Find the rate of change of electric flux \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) between the plates; (b) find the displacement current \\(I_{\\mathrm{d}}\\); (c) find the magnetic field \\(B\\) between the plates at the plate edge \\(r=R\\), and explain how its direction is set by the change of \\(\\vec E\\).",
        "steps": [
          "位移电流定义：\\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；在理想电容器中它等于导线中的传导电流，故 \\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\)。 · Definition of displacement current: \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); in an ideal capacitor it equals the conduction current in the wires, so \\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\).",
          "\\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I_{\\mathrm{d}}}{\\varepsilon_0}=\\dfrac{3.0}{8.85\\times10^{-12}}=3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\)。 · \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I_{\\mathrm{d}}}{\\varepsilon_0}=\\dfrac{3.0}{8.85\\times10^{-12}}=3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\).",
          "取以轴线为圆心、半径 \\(r=R\\) 的圆为安培环路；极板间的位移电流全部穿过该圆，故 \\(B(2\\pi R)=\\mu_0I_{\\mathrm{d}}\\)。 · Take a circular Ampèrian loop of radius \\(r=R\\) centered on the axis; the whole displacement current between the plates passes through it, so \\(B(2\\pi R)=\\mu_0I_{\\mathrm{d}}\\).",
          "\\(B=\\dfrac{\\mu_0I_{\\mathrm{d}}}{2\\pi R}=\\dfrac{(4\\pi\\times10^{-7})(3.0)}{2\\pi(0.050)}=1.2\\times10^{-5}\\,\\mathrm{T}\\)。 · \\(B=\\dfrac{\\mu_0I_{\\mathrm{d}}}{2\\pi R}=\\dfrac{(4\\pi\\times10^{-7})(3.0)}{2\\pi(0.050)}=1.2\\times10^{-5}\\,\\mathrm{T}\\).",
          "方向：若 \\(\\vec E\\) 由正极板指向负极板且正在增大，则位移电流沿 \\(\\vec E\\) 方向；用右手定则，四指沿位移电流方向弯曲，拇指给出 \\(\\vec B\\) 的环绕方向。 · Direction: if \\(\\vec E\\) points from the positive plate to the negative plate and is increasing, the displacement current points along \\(\\vec E\\); by the right-hand rule, curl the fingers along the displacement current and the thumb gives the circulation direction of \\(\\vec B\\)."
        ],
        "solution": "\\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\approx3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\)，\\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\)，\\(B\\approx1.2\\times10^{-5}\\,\\mathrm{T}\\)。 · \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\approx3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\), \\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\), and \\(B\\approx1.2\\times10^{-5}\\,\\mathrm{T}\\).",
        "solutionLatex": "\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}},\\quad I_{\\mathrm{d}}=3.0\\,\\mathrm{A},\\quad B=1.2\\times10^{-5}\\,\\mathrm{T}"
      },
      {
        "title": "例 2 · 由真空常数计算光速 · Example 2: The speed of light from vacuum constants",
        "prompt": "取 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)，\\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\)。(a) 证明 \\(\\mu_0\\varepsilon_0\\) 的单位是 \\(\\mathrm{s^2\\,m^{-2}}\\)；(b) 计算 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)；(c) 说明为什么这个结果支持“光是电磁波”。 · Take \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\) and \\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\). (a) Show that \\(\\mu_0\\varepsilon_0\\) has units of \\(\\mathrm{s^2\\,m^{-2}}\\); (b) compute \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\); (c) explain why this result supports the statement that light is an electromagnetic wave.",
        "steps": [
          "单位：\\(\\mu_0\\) 可写成 \\(\\mathrm{N\\,A^{-2}}\\)，\\(\\varepsilon_0\\) 可写成 \\(\\mathrm{A^2\\,s^2\\,N^{-1}\\,m^{-2}}\\)，相乘得 \\(\\mathrm{s^2\\,m^{-2}}\\)。 · Units: \\(\\mu_0\\) can be written as \\(\\mathrm{N\\,A^{-2}}\\) and \\(\\varepsilon_0\\) as \\(\\mathrm{A^2\\,s^2\\,N^{-1}\\,m^{-2}}\\); their product has units \\(\\mathrm{s^2\\,m^{-2}}\\).",
          "\\(\\mu_0\\varepsilon_0=(4\\pi\\times10^{-7})(8.85\\times10^{-12})=1.11\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}}\\)。 · \\(\\mu_0\\varepsilon_0=(4\\pi\\times10^{-7})(8.85\\times10^{-12})=1.11\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}}\\).",
          "\\(c=\\dfrac{1}{\\sqrt{1.11\\times10^{-17}}}=3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(c=\\dfrac{1}{\\sqrt{1.11\\times10^{-17}}}=3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
          "该数值与已知光速一致，且与频率、波长无关；麦克斯韦由此提出光就是电磁波。后来赫兹实验直接探测到电磁波，验证了这一预言。 · This value agrees with the known speed of light and is independent of frequency and wavelength; Maxwell therefore proposed that light is an electromagnetic wave. Hertz later detected electromagnetic waves directly, confirming the prediction."
        ],
        "solution": "\\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，与实测光速一致。 · \\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), in agreement with the measured speed of light.",
        "solutionLatex": "c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 3 · 平面电磁波的 E、B 与传播方向 · Example 3: E, B, and propagation direction of a plane wave",
        "prompt": "真空中一平面电磁波沿 \\(+x\\) 方向传播，频率 \\(f=1.0\\times10^{8}\\,\\mathrm{Hz}\\)，电场振幅 \\(E_{\\max}=6.0\\times10^{2}\\,\\mathrm{V\\,m^{-1}}\\)，方向沿 \\(+y\\)。(a) 求磁场振幅与方向；(b) 写出 \\(E(x,t)\\) 与 \\(B(x,t)\\) 的表达式；(c) 某时刻某点 \\(E\\) 达到最大值时，该点 \\(B\\) 是否也达到最大值？ · A plane electromagnetic wave in vacuum propagates along \\(+x\\) with frequency \\(f=1.0\\times10^{8}\\,\\mathrm{Hz}\\); its electric field has amplitude \\(E_{\\max}=6.0\\times10^{2}\\,\\mathrm{V\\,m^{-1}}\\) along \\(+y\\). (a) Find the magnetic-field amplitude and direction; (b) write \\(E(x,t)\\) and \\(B(x,t)\\); (c) when \\(E\\) reaches its maximum at some point and time, does \\(B\\) also reach its maximum there?",
        "steps": [
          "\\(B_{\\max}=\\dfrac{E_{\\max}}{c}=\\dfrac{6.0\\times10^{2}}{3.00\\times10^{8}}=2.0\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B_{\\max}=\\dfrac{E_{\\max}}{c}=\\dfrac{6.0\\times10^{2}}{3.00\\times10^{8}}=2.0\\times10^{-6}\\,\\mathrm{T}\\).",
          "传播方向为 \\(\\vec E\\times\\vec B\\)：\\(\\hat j\\times\\hat k=\\hat i\\)，故 \\(\\vec B\\) 沿 \\(+z\\)。 · The propagation direction is \\(\\vec E\\times\\vec B\\): \\(\\hat j\\times\\hat k=\\hat i\\), so \\(\\vec B\\) is along \\(+z\\).",
          "\\(\\omega=2\\pi f=6.28\\times10^{8}\\,\\mathrm{rad\\,s^{-1}}\\)，\\(k=\\dfrac{\\omega}{c}=2.09\\,\\mathrm{rad\\,m^{-1}}\\)。 · \\(\\omega=2\\pi f=6.28\\times10^{8}\\,\\mathrm{rad\\,s^{-1}}\\) and \\(k=\\dfrac{\\omega}{c}=2.09\\,\\mathrm{rad\\,m^{-1}}\\).",
          "\\(E_y=6.0\\times10^{2}\\cos(2.09x-6.28\\times10^{8}t)\\)，\\(B_z=2.0\\times10^{-6}\\cos(2.09x-6.28\\times10^{8}t)\\)（SI 单位）。 · \\(E_y=6.0\\times10^{2}\\cos(2.09x-6.28\\times10^{8}t)\\) and \\(B_z=2.0\\times10^{-6}\\cos(2.09x-6.28\\times10^{8}t)\\) in SI units.",
          "因为 \\(E\\) 与 \\(B\\) 同相位，\\(E\\) 最大时 \\(B\\) 也最大；二者同时为零。 · Because \\(E\\) and \\(B\\) are in phase, \\(B\\) is also maximum when \\(E\\) is maximum, and both vanish together."
        ],
        "solution": "\\(B_{\\max}=2.0\\times10^{-6}\\,\\mathrm{T}\\)，沿 \\(+z\\)；两场同相位。 · \\(B_{\\max}=2.0\\times10^{-6}\\,\\mathrm{T}\\) along \\(+z\\); the fields are in phase.",
        "solutionLatex": "B_{\\max}=\\dfrac{E_{\\max}}{c}=2.0\\times10^{-6}\\,\\mathrm{T},\\quad \\vec E\\times\\vec B\\parallel+\\hat i"
      },
      {
        "title": "例 4 · 检验波动方程 · Example 4: Checking the wave equation",
        "prompt": "无源真空中沿 \\(+x\\) 传播的平面波写成 \\(E_y=E_0\\cos(kx-\\omega t)\\)。把它代入无源真空波动方程 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\)，求 \\(\\omega\\) 与 \\(k\\) 必须满足的关系；若 \\(\\omega=3.0\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\)、\\(k=1.0\\times10^{7}\\,\\mathrm{rad\\,m^{-1}}\\)，求波速。 · A plane wave propagating along \\(+x\\) in source-free vacuum is written \\(E_y=E_0\\cos(kx-\\omega t)\\). Substitute it into the source-free vacuum wave equation \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) to find the required relation between \\(\\omega\\) and \\(k\\); if \\(\\omega=3.0\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\) and \\(k=1.0\\times10^{7}\\,\\mathrm{rad\\,m^{-1}}\\), find the wave speed.",
        "steps": [
          "\\(\\dfrac{\\partial^2E_y}{\\partial x^2}=-k^2E_y\\)，\\(\\dfrac{\\partial^2E_y}{\\partial t^2}=-\\omega^2E_y\\)。 · \\(\\dfrac{\\partial^2E_y}{\\partial x^2}=-k^2E_y\\) and \\(\\dfrac{\\partial^2E_y}{\\partial t^2}=-\\omega^2E_y\\).",
          "代入得 \\(-k^2E_y=-\\mu_0\\varepsilon_0\\omega^2E_y\\)，故 \\(k^2=\\mu_0\\varepsilon_0\\omega^2\\)。 · Substitution gives \\(-k^2E_y=-\\mu_0\\varepsilon_0\\omega^2E_y\\), so \\(k^2=\\mu_0\\varepsilon_0\\omega^2\\).",
          "因此 \\(\\dfrac{\\omega}{k}=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\)；只有满足这个色散关系的波才能在真空中传播。 · Therefore \\(\\dfrac{\\omega}{k}=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\); only waves satisfying this dispersion relation can propagate in vacuum.",
          "\\(v=\\dfrac{\\omega}{k}=\\dfrac{3.0\\times10^{15}}{1.0\\times10^{7}}=3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v=\\dfrac{\\omega}{k}=\\dfrac{3.0\\times10^{15}}{1.0\\times10^{7}}=3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)."
        ],
        "solution": "\\(\\dfrac{\\omega}{k}=c\\)，波速 \\(3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(\\dfrac{\\omega}{k}=c\\), with wave speed \\(3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
        "solutionLatex": "\\dfrac{\\omega}{k}=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c"
      },
      {
        "title": "例 5 · 主张—证据—推理：安培定律失效了吗？ · Example 5: Claim–evidence–reasoning: does Ampère's law fail?",
        "prompt": "一名学生说：“充电电容器中间是断开的，所以电流不连续，安培定律在电容器处失效。”请用麦克斯韦补充评价这一说法，并说明极板间为什么仍有磁场。 · A student claims: “A charging capacitor is broken in the middle, so the current is not continuous and Ampère's law fails at the capacitor.” Evaluate this claim using Maxwell's addition, and explain why a magnetic field still exists between the plates.",
        "steps": [
          "主张：电流不连续，安培定律失效。 · Claim: the current is not continuous and Ampère's law fails.",
          "证据：取套住导线的安培环路。若以穿过导线的平面为曲面，\\(I_{\\mathrm{enc}}=I\\)；若以鼓过电容器间隙的曲面为曲面，\\(I_{\\mathrm{enc}}=0\\)。只用稳恒安培定律会对同一环路给出不同结果。 · Evidence: take an Ampèrian loop around the wire. A surface through the wire gives \\(I_{\\mathrm{enc}}=I\\), while a surface bulging through the capacitor gap gives \\(I_{\\mathrm{enc}}=0\\). Steady Ampère's law alone would give different results for the same loop.",
          "推理：间隙中电场 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 随极板电荷增加而增大，电通量变化率为 \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I}{\\varepsilon_0}\\)，故位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=I\\)。 · Reasoning: the field in the gap, \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\), grows as the plate charge increases; the electric flux changes at \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I}{\\varepsilon_0}\\), so the displacement current is \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=I\\).",
          "麦克斯韦补充把 \\(\\mu_0I_{\\mathrm{d}}\\) 加入安培定律，两个曲面给出相同的 \\(B\\)；因此安培定律没有被推翻，而是被补全为安培–麦克斯韦定律。 · Maxwell's addition inserts \\(\\mu_0I_{\\mathrm{d}}\\) into Ampère's law, so both surfaces give the same \\(B\\); Ampère's law is not overturned but completed into the Ampère–Maxwell law.",
          "极板间的 \\(B\\) 沿以轴线为圆心的圆环方向，大小由 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{d,enc}}\\) 给出；这正是一个变化的电场产生磁场的例子。 · The field between the plates circulates around the axis, with magnitude set by \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{d,enc}}\\); this is exactly a changing electric field producing a magnetic field."
        ],
        "solution": "说法错误；位移电流使总电流连续，安培–麦克斯韦定律在极板间仍成立，变化的电场产生环绕的磁场。 · The claim is false; the displacement current makes the total current continuous, the Ampère–Maxwell law still holds between the plates, and the changing electric field produces a circulating magnetic field.",
        "solutionLatex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}"
      }
    ],
    "examTips": [
      "先写四个方程的名称与积分形式，再代入具体情境；通量方程用闭合曲面，环流方程用闭合回路。 · Write the names and integral forms of the four equations first, then substitute the situation; flux equations use closed surfaces and circulation equations use closed loops.",
      "遇到充电或放电电容器，先判断电通量是否变化；若变化，必须保留位移电流项。 · For a charging or discharging capacitor, first decide whether the electric flux changes; if it does, the displacement-current term must be kept.",
      "位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 不是电荷流；它的方向沿 \\(\\dfrac{\\mathrm{d}\\vec E}{\\mathrm{d}t}\\)。 · Displacement current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) is not charge flow; its direction is along \\(\\dfrac{\\mathrm{d}\\vec E}{\\mathrm{d}t}\\).",
      "推导 \\(c\\) 时先写波动方程，再与标准形式比较；最后用单位与 \\(3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\) 检验。 · When deriving \\(c\\), write the wave equation, compare with the standard form, and check with units and the value \\(3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
      "平面波题先由 \\(\\vec E\\times\\vec B\\) 定传播方向，或由传播方向与 \\(\\vec E\\) 定 \\(\\vec B\\)；真空中有 \\(E=cB\\)。 · For plane-wave problems, use \\(\\vec E\\times\\vec B\\) to find the propagation direction, or use the propagation direction and \\(\\vec E\\) to find \\(\\vec B\\); in vacuum \\(E=cB\\).",
      "介质中不要再用 \\(c\\)：\\(v=\\dfrac{c}{n}\\)，频率不变、波长变为 \\(\\dfrac{\\lambda_0}{n}\\)。 · Do not use \\(c\\) in a medium: \\(v=\\dfrac{c}{n}\\), frequency is unchanged, and wavelength becomes \\(\\dfrac{\\lambda_0}{n}\\).",
      "AP 简答按“主张—证据—推理”组织：先写方程，再代入几何或对称性，最后说明方向与能量。 · Organize AP free response as claim–evidence–reasoning: write the equation, substitute the geometry or symmetry, and finish with direction and energy."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.4",
        "title": "安培定律 · Ampère's Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应 · Electromagnetic Induction",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.6",
        "title": "LC 电路 · Circuits with Capacitors and Inductors (LC Circuits)",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.1",
        "title": "磁场 · Magnetic Fields",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应 · Faraday electromagnetic induction"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：12.4 安培定律给出稳恒电流的磁场，13.2 法拉第定律给出变化磁场产生电场；麦克斯韦补充把两者推广到非稳恒情形。 · Upstream: 12.4 Ampère's law gives the magnetic field of steady currents, and 13.2 Faraday's law gives the electric field produced by a changing magnetic field; Maxwell's addition extends both to non-steady situations.",
      "数学：通量与环流、矢量微积分、偏导数与波动方程；推导 \\(c\\) 时要把方程与标准波动方程逐项比较。 · Mathematics: flux and circulation, vector calculus, partial derivatives, and the wave equation; deriving \\(c\\) requires matching the equation to the standard wave equation term by term.",
      "下游：电磁波谱、光的反射与折射、天线与无线电通信；LC 振荡电路可作为电磁辐射的入门模型。 · Downstream: the electromagnetic spectrum, reflection and refraction of light, antennas and radio communication; an LC oscillating circuit is an introductory model of electromagnetic radiation.",
      "跨学科：光学、通信工程、遥感与医学成像都建立在电磁波之上；赫兹实验是理论预言与实验验证结合的经典案例。 · Cross-disciplinary: optics, communications engineering, remote sensing, and medical imaging all rest on electromagnetic waves; Hertz's experiment is a classic case of a theoretical prediction confirmed by experiment."
    ],
    "intuitionDetailed": "先看充电中的平行板电容器。导线里有传导电流 \\(I\\)，但电荷并不穿过极板间的间隙；间隙中的电场随极板电荷增加而增大。取一个套住导线的安培环路：如果以穿过导线的平面作为曲面，包围的电流是 \\(I\\)；如果以鼓过间隙的曲面作为曲面，包围的传导电流是零。只用稳恒安培定律会对同一个环路给出两个不同的磁场，这就是矛盾。麦克斯韦指出，间隙中变化的电通量 \\(\\Phi_E\\) 等效于一股电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；在理想平行板电容器中它恰好等于 \\(I\\)。把 \\(\\mu_0I_{\\mathrm{d}}\\) 加入安培定律后，两个曲面给出同一个 \\(B\\)，总电流保持连续。再看电磁波：变化的磁场产生电场（法拉第定律），变化的电场又产生磁场（麦克斯韦补充）；两者互相“接力”，即使离开电荷和电流也能在真空中传播。取无源真空，把法拉第定律取旋度并用安培–麦克斯韦定律消去 \\(\\vec B\\)，就得到 \\(\\vec E\\) 的波动方程；\\(\\vec B\\) 也满足同一形式的方程。与标准波动方程比较，波速为 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)。在平面电磁波中，\\(\\vec E\\)、\\(\\vec B\\) 与传播方向 \\(\\vec k\\) 两两垂直，\\(\\vec E\\) 与 \\(\\vec B\\) 同相位；若 \\(\\vec E\\) 沿 \\(+y\\)、波沿 \\(+x\\)，则 \\(\\vec B\\) 沿 \\(+z\\)，因为 \\(\\hat j\\times\\hat k=\\hat i\\)。固定时刻看，场强沿传播方向呈正弦剖面；固定位置看，场随时间正弦振荡，两种图像描述的是同一个波。 · First consider a charging parallel-plate capacitor. There is a conduction current \\(I\\) in the wires, but charge does not cross the gap between the plates; the electric field in the gap grows as the plate charge increases. Take an Ampèrian loop around the wire: a surface through the wire encloses current \\(I\\), while a surface bulging through the gap encloses zero conduction current. Steady Ampère's law alone would give two different magnetic fields for the same loop, which is the contradiction. Maxwell pointed out that the changing electric flux \\(\\Phi_E\\) in the gap is equivalent to a current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); in an ideal parallel-plate capacitor it equals \\(I\\) exactly. Adding \\(\\mu_0I_{\\mathrm{d}}\\) to Ampère's law makes both surfaces give the same \\(B\\) and keeps the total current continuous. Now consider an electromagnetic wave: a changing magnetic field produces an electric field (Faraday's law), and a changing electric field produces a magnetic field (Maxwell's addition); the two sustain each other and can propagate through vacuum even away from charges and currents. In source-free vacuum, take the curl of Faraday's law and use the Ampère–Maxwell law to eliminate \\(\\vec B\\), obtaining the wave equation for \\(\\vec E\\); \\(\\vec B\\) satisfies the same form. Comparing with the standard wave equation identifies the speed as \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\). In a plane electromagnetic wave, \\(\\vec E\\), \\(\\vec B\\), and the propagation direction \\(\\vec k\\) are mutually perpendicular, and \\(\\vec E\\) and \\(\\vec B\\) are in phase; if \\(\\vec E\\) is along \\(+y\\) and the wave travels along \\(+x\\), then \\(\\vec B\\) is along \\(+z\\) because \\(\\hat j\\times\\hat k=\\hat i\\). At a fixed time the field magnitudes form a sinusoidal profile along the propagation direction; at a fixed position the fields oscillate sinusoidally in time. The two pictures describe the same wave.",
    "development": [
      "回顾静电与稳恒电流：电高斯定律、磁高斯定律与安培定律在稳恒情形成立。 · Review electrostatics and steady currents: Gauss's laws and Ampère's law hold in steady situations.",
      "发现矛盾：充电电容器使安培定律对不同曲面给出不同结果。 · Find the contradiction: a charging capacitor makes Ampère's law give different results for different surfaces.",
      "引入位移电流：\\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)，写入安培–麦克斯韦定律。 · Introduce displacement current, \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\), and write the Ampère–Maxwell law.",
      "用四个方程统一电与磁，并说明时变场如何互相激发。 · Use the four equations to unify electricity and magnetism and explain how time-varying fields excite each other.",
      "在无源真空中推导波动方程，得到 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)。 · Derive the wave equations in source-free vacuum and obtain \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\).",
      "分析平面波的结构与电场、磁场振幅的比值，并用单位、数量级和实验（赫兹实验、光速测量）检验。 · Analyze the structure of a plane wave and the ratio of the field amplitudes, and check with units, order of magnitude, and experiments (Hertz's experiment and measurements of the speed of light)."
    ],
    "checks": [
      "写出四个麦克斯韦方程，并说明哪一个含位移电流、哪一个体现没有磁单极。 · Write the four Maxwell equations and identify which one contains displacement current and which one expresses the absence of magnetic monopoles.",
      "充电电容器间隙中是否有电荷穿过？位移电流与导线中的传导电流有什么关系？ · Does charge cross the gap of a charging capacitor? How is the displacement current related to the conduction current in the wires?",
      "为什么说电磁波不需要介质？\\(c\\) 由哪些真空常数决定？ · Why do electromagnetic waves not need a medium? Which vacuum constants determine \\(c\\)?",
      "真空中平面电磁波的 \\(\\vec E\\)、\\(\\vec B\\) 与传播方向有什么关系？若 \\(\\vec E\\) 沿 \\(+y\\)、波沿 \\(+x\\)，\\(\\vec B\\) 沿什么方向？ · How are \\(\\vec E\\), \\(\\vec B\\), and the propagation direction related in a vacuum plane wave? If \\(\\vec E\\) is along \\(+y\\) and the wave travels along \\(+x\\), what is the direction of \\(\\vec B\\)?",
      "若频率加倍，真空中的 \\(c\\)、\\(\\lambda\\)、\\(T\\) 如何变化？进入介质后呢？ · If the frequency doubles, how do \\(c\\), \\(\\lambda\\), and \\(T\\) change in vacuum? What changes in a medium?",
      "如何用单位检验 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)？ · How can units be used to check \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)?"
    ],
    "vocabulary": [
      {
        "termZh": "麦克斯韦方程组",
        "termEn": "Maxwell's equations",
        "defZh": "完整描述经典电磁现象的四条方程：电高斯定律、磁高斯定律、法拉第定律与安培–麦克斯韦定律。",
        "defEn": "The four equations that fully describe classical electromagnetism: Gauss's law for electricity, Gauss's law for magnetism, Faraday's law, and the Ampère–Maxwell law."
      },
      {
        "termZh": "位移电流",
        "termEn": "displacement current",
        "defZh": "变化电通量的等效电流，\\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；不是电荷的流动。",
        "defEn": "The equivalent current of a changing electric flux, \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); it is not a flow of charge."
      },
      {
        "termZh": "安培–麦克斯韦定律",
        "termEn": "Ampère–Maxwell law",
        "defZh": "磁场环流等于传导电流与位移电流之和：\\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。",
        "defEn": "The circulation of the magnetic field equals the sum of conduction and displacement currents: \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)."
      },
      {
        "termZh": "电磁波",
        "termEn": "electromagnetic wave",
        "defZh": "相互垂直、同相位的振荡电场与振荡磁场在空间中传播形成的横波；真空中速度为 \\(c\\)。",
        "defEn": "A transverse wave formed by mutually perpendicular, in-phase oscillating electric and magnetic fields propagating through space; its vacuum speed is \\(c\\)."
      },
      {
        "termZh": "波动方程",
        "termEn": "wave equation",
        "defZh": "形如 \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\) 的偏微分方程；其解是以速度 \\(v\\) 传播的波。",
        "defEn": "A partial differential equation of the form \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\), whose solutions are waves traveling at speed \\(v\\)."
      },
      {
        "termZh": "真空光速",
        "termEn": "speed of light in vacuum",
        "defZh": "\\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，是真空中所有电磁波的速度。",
        "defEn": "\\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), the speed of every electromagnetic wave in vacuum."
      },
      {
        "termZh": "平面电磁波",
        "termEn": "plane electromagnetic wave",
        "defZh": "在垂直于传播方向的平面上，\\(\\vec E\\) 与 \\(\\vec B\\) 大小和方向都相同的电磁波；\\(\\vec E\\perp\\vec B\\perp\\vec k\\)，两场同相位。",
        "defEn": "An electromagnetic wave whose \\(\\vec E\\) and \\(\\vec B\\) have the same magnitude and direction everywhere on planes perpendicular to propagation; \\(\\vec E\\perp\\vec B\\perp\\vec k\\) and the fields are in phase."
      },
      {
        "termZh": "传导电流",
        "termEn": "conduction current",
        "defZh": "电荷定向流动形成的电流，例如导线中的电流；与位移电流相对。",
        "defEn": "Current due to the directed flow of charge, such as the current in a wire; contrasted with displacement current."
      }
    ]
  }
};
