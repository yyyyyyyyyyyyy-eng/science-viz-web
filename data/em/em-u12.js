export const UNIT = {
  "id": "em-u12",
  "code": "12",
  "titleZh": "磁场与电磁学",
  "titleEn": "Magnetic Fields and Electromagnetism",
  "subject": "em",
  "layer": "ap"
};
export const TOPICS = {
  "12.1": {
    "id": "em/em-u12/12.1",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.1",
    "titleZh": "磁场",
    "titleEn": "Magnetic Fields",
    "layer": "ap",
    "summary": "磁场 · Magnetic Fields",
    "learningObjectives": [
      "能陈述「磁场」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Magnetic Fields：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "磁场（Magnetic Fields）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「磁场」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec F=q\\vec v\\times\\vec B",
        "note": "运动电荷受到的磁力。"
      },
      {
        "latex": "\\vec F=I\\vec L\\times\\vec B",
        "note": "电流元受到的磁力。"
      },
      {
        "latex": "\\Phi_B=BA\\cos\\theta",
        "note": "磁通量（匀强场、平面）。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「磁场」的工作方程或机制链。"
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
      "电荷运动或存在电流；静止电荷不受磁力",
      "磁力垂直于 v 与 B，不做功",
      "磁感线闭合；无磁单极子"
    ],
    "keyPoints": [
      "掌握 12.1「磁场」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「磁场」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「磁场」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\vec F=q\\vec v\\times\\vec B"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「磁场」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「磁场」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「磁场」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「磁场」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「磁场」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「磁场」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "12.2": {
    "id": "em/em-u12/12.2",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.2",
    "titleZh": "运动电荷与磁场",
    "titleEn": "Magnetism and Moving Charges",
    "layer": "ap",
    "summary": "运动电荷与磁场 · Magnetism and Moving Charges",
    "learningObjectives": [
      "能陈述「运动电荷与磁场」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Magnetism and Moving Charges：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "运动电荷与磁场（Magnetism and Moving Charges）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「运动电荷与磁场」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec F=q\\vec v\\times\\vec B",
        "note": "洛伦兹力。"
      },
      {
        "latex": "r=\\dfrac{mv}{|q|B}",
        "note": "垂直于匀强 B 运动的圆周半径。"
      },
      {
        "latex": "T=\\dfrac{2\\pi m}{|q|B}",
        "note": "回旋周期，与速率无关（非相对论）。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「运动电荷与磁场」的工作方程或机制链。"
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
      "匀强磁场；v 垂直于 B 时做圆周运动",
      "非相对论；忽略辐射损失",
      "磁力提供向心力，速率不变"
    ],
    "keyPoints": [
      "掌握 12.2「运动电荷与磁场」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「运动电荷与磁场」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「运动电荷与磁场」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\vec F=q\\vec v\\times\\vec B"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「运动电荷与磁场」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「运动电荷与磁场」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「运动电荷与磁场」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u12",
        "code": "12.1",
        "title": "磁场",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.3",
        "title": "毕奥–萨伐尔定律",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「运动电荷与磁场」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「运动电荷与磁场」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「运动电荷与磁场」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "12.3": {
    "id": "em/em-u12/12.3",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.3",
    "titleZh": "毕奥–萨伐尔定律",
    "titleEn": "Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law",
    "layer": "ap",
    "summary": "毕奥–萨伐尔定律 · Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law",
    "learningObjectives": [
      "能陈述「毕奥–萨伐尔定律」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "毕奥–萨伐尔定律（Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「毕奥–萨伐尔定律」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}",
        "note": "毕奥–萨伐尔定律。"
      },
      {
        "latex": "B=\\dfrac{\\mu_0 I}{2\\pi r}",
        "note": "长直载流导线。"
      },
      {
        "latex": "B=\\mu_0 nI",
        "note": "长直螺线管内部。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「毕奥–萨伐尔定律」的工作方程或机制链。"
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
      "稳恒电流；真空或线性磁介质",
      "长直导线/长螺线管近似；忽略端点效应",
      "方向由右手定则；叠加原理"
    ],
    "keyPoints": [
      "掌握 12.3「毕奥–萨伐尔定律」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「毕奥–萨伐尔定律」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「毕奥–萨伐尔定律」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「毕奥–萨伐尔定律」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「毕奥–萨伐尔定律」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「毕奥–萨伐尔定律」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.4",
        "title": "安培定律",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「毕奥–萨伐尔定律」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「毕奥–萨伐尔定律」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「毕奥–萨伐尔定律」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "12.4": {
    "id": "em/em-u12/12.4",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.4",
    "titleZh": "安培定律",
    "titleEn": "Ampère's Law",
    "layer": "ap",
    "summary": "安培定律 · Ampère's Law",
    "learningObjectives": [
      "能陈述「安培定律」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Ampère's Law：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "安培定律（Ampère's Law）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「安培定律」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec\\ell=\\mu_0 I_{\\mathrm{enc}}",
        "note": "安培环路定律。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「安培定律」的工作方程或机制链。"
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
      "稳恒电流；闭合安培环路",
      "I_enc 为穿过环路所围曲面的净电流",
      "高对称性（长直导线、螺线管、螺绕环）才能直接求 B"
    ],
    "keyPoints": [
      "掌握 12.4「安培定律」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「安培定律」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「安培定律」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec\\ell=\\mu_0 I_{\\mathrm{enc}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「安培定律」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「安培定律」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「安培定律」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u12",
        "code": "12.3",
        "title": "毕奥–萨伐尔定律",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「安培定律」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「安培定律」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「安培定律」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "12.5": {
    "id": "em/em-u12/12.5",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.5",
    "titleZh": "磁偶极与磁性材料",
    "titleEn": "Magnetic Dipoles and Magnetic Materials",
    "layer": "ap",
    "summary": "磁偶极由电流环或电荷的圆周/自旋运动形成；材料内偶极的有序排列决定铁磁、顺磁、抗磁行为，地球磁场可近似为磁偶极；外磁场中的磁偶极（如指南针）受力矩作用，趋向与 \\(\\vec B\\) 对齐。 · A magnetic dipole arises from a current loop or from circular/rotational motion of charge; the ordering of dipoles in a material produces ferromagnetic, paramagnetic, and diamagnetic behavior, and Earth's field is approximately a magnetic dipole; in an external field a magnetic dipole such as a compass feels a torque and tends to align with \\(\\vec B\\).",
    "learningObjectives": [
      "能说明磁偶极来自电流环或电荷的圆周/自旋运动，并用右手定则确定磁偶极矩 \\(\\vec\\mu=I\\vec A\\) 的方向。 · Explain that a magnetic dipole arises from a current loop or from circular/rotational motion of charge, and determine the direction of the magnetic dipole moment \\(\\vec\\mu=I\\vec A\\) with the right-hand rule.",
      "能比较铁磁、顺磁、抗磁材料在成分、磁畴/偶极排列、对外磁场的响应以及撤场后是否保留磁性方面的差异。 · Compare ferromagnetic, paramagnetic, and diamagnetic materials in composition, domain/dipole arrangement, response to an external field, and whether magnetization survives removal of the field.",
      "能用磁畴对齐解释铁磁材料的永久磁化、充磁与退磁，并说明居里温度的作用。 · Use domain alignment to explain permanent magnetization, magnetization, and demagnetization of ferromagnetic materials, including the role of the Curie temperature.",
      "能把地球磁场近似为磁偶极，区分地理极与地磁极，并解释指南针指向与磁偏角。 · Model Earth's magnetic field as a magnetic dipole, distinguish geographic poles from magnetic poles, and explain compass direction and magnetic declination.",
      "能定性或定量使用 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) 与 \\(U=-\\vec\\mu\\cdot\\vec B\\) 分析磁偶极在匀强磁场中的转动与能量。 · Use \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) and \\(U=-\\vec\\mu\\cdot\\vec B\\) qualitatively or quantitatively to analyze the rotation and energy of a magnetic dipole in a uniform field.",
      "能解释指南针等磁偶极在外磁场中因力矩而转向 \\(\\vec B\\)、趋向对齐，并区分 \\(\\theta=0\\) 的稳定平衡与 \\(\\theta=180^\\circ\\) 的不稳定平衡。 · Explain how a compass or other magnetic dipole turns toward \\(\\vec B\\) because of the magnetic torque and tends to align with the field, distinguishing stable equilibrium at \\(\\theta=0\\) from unstable equilibrium at \\(\\theta=180^\\circ\\)."
    ],
    "essentialKnowledge": [
      "磁偶极可看作一个微小的电流环：它有两个磁极，但不存在孤立的磁单极子，外部磁感线从 N 极附近回到 S 极附近，内部闭合。 · A magnetic dipole can be modeled as a tiny current loop: it has two magnetic poles, but no isolated magnetic monopole exists, and external field lines return from near the N pole to near the S pole while remaining closed inside.",
      "磁偶极矩定义为 \\(\\vec\\mu=I\\vec A\\)，大小 \\(\\mu=IA\\)，方向沿环面法线，由右手定则确定；\\(N\\) 匝线圈为 \\(\\mu=NIA\\)。 · The magnetic dipole moment is \\(\\vec\\mu=I\\vec A\\), with magnitude \\(\\mu=IA\\) and direction along the loop normal given by the right-hand rule; for \\(N\\) turns, \\(\\mu=NIA\\).",
      "在材料内部，电子的轨道运动和自旋运动形成微观磁偶极；铁磁材料中相邻偶极因交换相互作用而自发平行排列，形成磁畴（magnetic domain）。 · Inside matter, electron orbital motion and spin produce microscopic magnetic dipoles; in ferromagnetic materials, neighboring dipoles spontaneously align parallel because of exchange interactions, forming magnetic domains.",
      "未磁化的铁磁材料中磁畴方向随机，宏观磁矩相消；外磁场使磁畴逐渐转向或长大，材料被磁化；撤去外场后部分磁畴仍保持对齐，于是成为永久磁铁。 · In an unmagnetized ferromagnetic material the domains point randomly and their macroscopic moments cancel; an external field rotates or grows domains and magnetizes the material; after the field is removed some alignment remains, producing a permanent magnet.",
      "材料的成分和微观排列决定磁畴结构，因此同一外场下不同材料可表现为铁磁、顺磁或抗磁；材料在外场中的磁性行为是这些微观偶极配置的宏观结果。 · A material's composition and microscopic arrangement determine its domain structure, so different materials can behave as ferromagnetic, paramagnetic, or diamagnetic in the same external field; the magnetic behavior of a material is the macroscopic result of these microscopic dipole configurations.",
      "（i）铁磁材料包括铁、镍、钴及其合金；它们被外磁场强烈吸引，可永久磁化。超过居里温度后，热运动破坏磁畴有序，铁磁体转变为顺磁体。 · (i) Ferromagnetic materials include iron, nickel, cobalt, and their alloys; they are strongly attracted to an external field and can be permanently magnetized. Above the Curie temperature, thermal motion destroys domain order and the ferromagnet becomes paramagnetic.",
      "（ii）顺磁材料（如铝、铂）的微观偶极在外场中部分转向外场方向，表现为弱吸引；热运动使排列很快随机化，撤场后几乎不保留磁性，相对磁导率仅略大于 1。 · (ii) In paramagnetic materials (such as aluminum and platinum) microscopic dipoles partially align with an external field, producing weak attraction; thermal motion quickly randomizes them, almost no magnetization remains after the field is removed, and the relative permeability is only slightly greater than 1.",
      "（iii）抗磁材料（如铜、水、铋）没有永久微观偶极；外磁场感生出与外场方向相反的偶极矩，表现为弱排斥，撤场后磁性消失，相对磁导率略小于 1。 · (iii) Diamagnetic materials (such as copper, water, and bismuth) have no permanent microscopic dipoles; an external field induces dipole moments opposite the field, producing weak repulsion, the magnetism disappears when the field is removed, and the relative permeability is slightly less than 1.",
      "地球磁场可近似为一个倾斜的磁偶极，其偶极轴与地球自转轴约有 11° 的夹角；靠近地理北极的磁极在物理上是磁南极，因此指南针的 N 极指向地理北方。 · Earth's magnetic field is approximately a tilted magnetic dipole whose axis makes an angle of about 11° with Earth's rotation axis; the magnetic pole near the geographic North Pole is physically a magnetic south pole, so a compass needle's N pole points toward geographic north.",
      "磁偶极在匀强磁场中受到力矩 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\)，趋向于使 \\(\\vec\\mu\\) 与 \\(\\vec B\\) 平行；势能 \\(U=-\\vec\\mu\\cdot\\vec B\\) 在平行时最小，在反平行时最大。 · A magnetic dipole in a uniform field experiences a torque \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) that tends to align \\(\\vec\\mu\\) with \\(\\vec B\\); the potential energy \\(U=-\\vec\\mu\\cdot\\vec B\\) is minimum when they are parallel and maximum when they are antiparallel.",
      "指南针可看作磁偶极：把它放在外磁场中，若 \\(\\vec\\mu\\) 与 \\(\\vec B\\) 有夹角，力矩 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) 使它转向 \\(\\vec B\\)；\\(\\theta=0\\) 时势能最低、力矩为零，是稳定平衡；\\(\\theta=180^\\circ\\) 时势能最高、任何微小扰动都会使它转走，是不稳定平衡。 · A compass can be modeled as a magnetic dipole: when it is placed in an external field and \\(\\vec\\mu\\) makes an angle with \\(\\vec B\\), the torque \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) turns it toward \\(\\vec B\\). At \\(\\theta=0\\) the potential energy is lowest and the torque is zero, so this is stable equilibrium; at \\(\\theta=180^\\circ\\) the potential energy is highest and any small disturbance turns it away, so this is unstable equilibrium.",
      "实际指南针释放后会围绕 \\(\\vec B\\) 方向阻尼振荡：力矩使它加速转向平衡，惯性使它越过平衡位置，空气阻力和轴承摩擦最终耗散能量，使它停在 \\(\\vec\\mu\\parallel\\vec B\\)。 · A real compass released from rest oscillates about the \\(\\vec B\\) direction with damping: the torque accelerates it toward equilibrium, inertia carries it past, and air drag and pivot friction eventually dissipate the energy so that it rests at \\(\\vec\\mu\\parallel\\vec B\\)."
    ],
    "definition": "磁偶极（magnetic dipole）是一个具有磁偶极矩的电流环或电荷运动系统，其远场与一根微小条形磁铁相同。磁偶极矩 \\(\\vec\\mu=I\\vec A\\) 的大小等于电流乘环面积，方向沿环面法线并由右手定则确定；\\(N\\) 匝线圈的磁偶极矩为 \\(\\vec\\mu=NIA\\hat n\\)。材料中的磁性来自电子轨道运动与自旋形成的微观磁偶极，以及这些偶极在磁畴中的排列方式。铁磁材料（如铁、镍、钴）的磁畴可被外场强烈对齐并保留部分排列，因而能永久磁化；顺磁材料只有微弱、暂时的同向排列；抗磁材料则感生出与外场反向的微弱磁矩。地球磁场在远离地表处可近似为一个磁偶极。 · A magnetic dipole is a current loop or charge-motion system with a magnetic dipole moment whose far field is the same as that of a tiny bar magnet. The magnetic dipole moment \\(\\vec\\mu=I\\vec A\\) has magnitude equal to current times loop area and direction along the loop normal fixed by the right-hand rule; for \\(N\\) turns, \\(\\vec\\mu=NIA\\hat n\\). Magnetism in matter comes from microscopic dipoles produced by electron orbital motion and spin, and from the way those dipoles are arranged in magnetic domains. Ferromagnetic materials (such as iron, nickel, and cobalt) have domains that can be strongly aligned by an external field and partly retain that alignment, so they can be permanently magnetized; paramagnetic materials show only a weak, temporary alignment with the field; diamagnetic materials acquire a weak induced moment opposite the field. Earth's magnetic field is approximately a magnetic dipole far from its surface.",
    "intuition": "把一个通电小线圈想成一根微型条形磁铁：线圈正面看电流逆时针时，磁场从纸面射出，那一面就是 N 极。材料里的电子轨道和自旋就是无数这样的微型磁铁；外磁场像一只看不见的手，把这些小磁针转向同一方向。铁磁材料的小磁针会“记住”这个方向，顺磁材料转身后又散开，抗磁材料则被外场推着产生相反的小磁针。 · Think of a small current loop as a tiny bar magnet: if the current looks counterclockwise, the field comes out of the page and that face is the N pole. Electron orbits and spins inside matter are countless such tiny magnets; an external field is an invisible hand that turns them toward one direction. Ferromagnetic tiny magnets “remember” that direction, paramagnetic ones scatter again after the field is removed, and diamagnetic ones are pushed to create tiny magnets pointing opposite the field.",
    "formulas": [
      {
        "latex": "\\vec\\mu=I\\vec A",
        "note": "单匝平面电流环的磁偶极矩；方向沿环面法线，由右手定则确定。 · Magnetic dipole moment of a single planar current loop; the direction is along the loop normal, given by the right-hand rule."
      },
      {
        "latex": "\\mu=NIA",
        "note": "\\(N\\) 匝线圈的磁偶极矩大小；面积 \\(A\\) 为每匝面积。 · Magnitude of the dipole moment for an \\(N\\)-turn coil; \\(A\\) is the area of one turn."
      },
      {
        "latex": "\\vec\\tau=\\vec\\mu\\times\\vec B",
        "note": "匀强磁场对磁偶极的力矩；力矩试图让 \\(\\vec\\mu\\) 与 \\(\\vec B\\) 平行。 · Torque exerted by a uniform field on a magnetic dipole; it tends to align \\(\\vec\\mu\\) with \\(\\vec B\\)."
      },
      {
        "latex": "\\tau=\\mu B\\sin\\theta",
        "note": "力矩大小；\\(\\theta\\) 为 \\(\\vec\\mu\\) 与 \\(\\vec B\\) 的夹角。 · Magnitude of the torque; \\(\\theta\\) is the angle between \\(\\vec\\mu\\) and \\(\\vec B\\)."
      },
      {
        "latex": "U=-\\vec\\mu\\cdot\\vec B=-\\mu B\\cos\\theta",
        "note": "磁偶极在磁场中的势能；平行时最小，反平行时最大。 · Potential energy of a magnetic dipole in a field; minimum when parallel and maximum when antiparallel."
      },
      {
        "latex": "B_{\\mathrm{axis}}\\approx\\dfrac{\\mu_0}{4\\pi}\\dfrac{2\\mu}{z^{3}}",
        "note": "远场（\\(z\\gg R\\)）偶极轴上的磁场大小。 · Far-field magnitude on the dipole axis (\\(z\\gg R\\))."
      },
      {
        "latex": "B_{\\mathrm{equator}}\\approx\\dfrac{\\mu_0}{4\\pi}\\dfrac{\\mu}{z^{3}}",
        "note": "远场偶极赤道面上的磁场大小，方向与 \\(\\vec\\mu\\) 相反。 · Far-field magnitude in the equatorial plane, opposite to \\(\\vec\\mu\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "电流环的对称性 · Symmetry of a current loop",
        "to": "磁偶极矩 · Magnetic dipole moment",
        "note": "环上各电流元产生的磁场在轴线上同向叠加；把环面积矢量 \\(\\vec A\\) 的方向定为右手四指沿电流弯曲时的拇指方向，定义 \\(\\vec\\mu=I\\vec A\\)。 · The fields of all current elements add in the same direction on the axis; define the loop-area vector \\(\\vec A\\) along the right thumb when the fingers curl with the current, and set \\(\\vec\\mu=I\\vec A\\)."
      },
      {
        "from": "安培力 · Magnetic force on current",
        "to": "磁偶极的力矩 · Torque on a dipole",
        "note": "矩形线圈一对边受力大小相等、方向相反，形成力偶；力臂为 \\(\\dfrac{w}{2}\\sin\\theta\\)，合力矩 \\(\\tau=IAB\\sin\\theta=\\mu B\\sin\\theta\\)，写成矢量即 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\)。 · Opposite sides of a rectangular loop feel equal and opposite forces that form a couple; the lever arm is \\(\\dfrac{w}{2}\\sin\\theta\\), so the net torque is \\(\\tau=IAB\\sin\\theta=\\mu B\\sin\\theta\\), or \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) in vector form."
      },
      {
        "from": "力矩做功 · Work done by torque",
        "to": "势能 · Potential energy",
        "note": "\\(W=\\int\\tau\\,\\mathrm{d}\\theta\\) 给出 \\(U=-\\mu B\\cos\\theta\\)；取无穷远处为零势能参考时，\\(U=-\\vec\\mu\\cdot\\vec B\\)。 · \\(W=\\int\\tau\\,\\mathrm{d}\\theta\\) gives \\(U=-\\mu B\\cos\\theta\\); with zero at infinity, \\(U=-\\vec\\mu\\cdot\\vec B\\)."
      },
      {
        "from": "微观电流 · Microscopic currents",
        "to": "材料磁性 · Magnetism of matter",
        "note": "电子绕核的轨道运动等效于微小电流环，电子自旋也具有磁偶极矩；大量偶极的排列程度决定材料的宏观磁化强度。 · An electron's orbital motion around a nucleus is equivalent to a tiny current loop, and electron spin also carries a magnetic dipole moment; the degree of alignment of many dipoles determines the material's macroscopic magnetization."
      },
      {
        "from": "磁畴 · Magnetic domains",
        "to": "铁磁磁化 · Ferromagnetic magnetization",
        "note": "交换相互作用使相邻偶极在磁畴内平行；外场使磁畴长大或转向，撤场后畴壁钉扎使部分排列保留，形成剩磁。 · Exchange interactions align neighboring dipoles within a domain; an external field grows or rotates domains, and after the field is removed domain-wall pinning preserves part of the alignment as remanence."
      }
    ],
    "conditions": [
      "磁偶极近似要求观察距离远大于电流环尺寸（\\(z\\gg R\\)）；近场必须用毕奥–萨伐尔定律逐元积分。 · The dipole approximation requires the observation distance to be much larger than the loop size (\\(z\\gg R\\)); near fields must be integrated element by element with the Biot–Savart law.",
      "\\(\\vec\\mu=I\\vec A\\) 适用于平面闭合电流环；线圈有多匝时乘以匝数 \\(N\\)。 · \\(\\vec\\mu=I\\vec A\\) applies to a planar closed current loop; for a coil with multiple turns, multiply by the number of turns \\(N\\).",
      "材料分类不是绝对的：同一材料在不同温度、不同外场强度下可能表现出不同响应；铁磁体超过居里温度后变为顺磁体。 · Material classification is not absolute: the same material can respond differently at different temperatures and field strengths; a ferromagnet becomes paramagnetic above its Curie temperature.",
      "磁畴模型主要适用于铁磁材料，并假设材料温度低于居里温度、外场不足以使所有畴壁消失。 · The domain model applies mainly to ferromagnetic materials and assumes the temperature is below the Curie temperature and the field is not strong enough to eliminate all domain walls.",
      "地球磁场只是偶极近似：太阳风会扭曲磁层，地表不同位置的磁场大小和方向并不完全符合理想偶极。 · Earth's field is only a dipole approximation: the solar wind distorts the magnetosphere, and the field magnitude and direction at different surface locations do not exactly match an ideal dipole.",
      "力矩与势能公式假设外磁场在偶极范围内均匀；若磁场随位置显著变化，还要考虑偶极受到的合力。 · The torque and potential-energy formulas assume the external field is uniform over the dipole; if the field varies significantly with position, the net force on the dipole must also be considered."
    ],
    "keyPoints": [
      "磁偶极的本质是电流或电荷运动，不是“磁荷”；切割磁铁不会得到磁单极子。 · The origin of a magnetic dipole is current or charge motion, not “magnetic charge”; cutting a magnet never produces a magnetic monopole.",
      "磁偶极矩方向沿环面法线：右手四指沿电流方向弯曲，拇指指向 \\(\\vec\\mu\\)。 · The dipole moment points along the loop normal: curl the right fingers with the current and the thumb gives \\(\\vec\\mu\\).",
      "力矩使 \\(\\vec\\mu\\) 转向 \\(\\vec B\\)；平行时势能最低，反平行时势能最高。 · The torque turns \\(\\vec\\mu\\) toward \\(\\vec B\\); potential energy is lowest when parallel and highest when antiparallel.",
      "铁磁：强吸引、可永久磁化、磁畴有序；顺磁：弱吸引、暂时；抗磁：弱排斥、感生反向。 · Ferromagnetic: strong attraction, permanent magnetization, ordered domains; paramagnetic: weak attraction, temporary; diamagnetic: weak repulsion, induced opposite moment.",
      "铁磁材料的磁化不是“创造磁荷”，而是磁畴排列程度的改变。 · Magnetizing a ferromagnet does not “create magnetic charge”; it changes the degree of domain alignment.",
      "居里温度以上热运动破坏磁畴有序，铁磁体失去永久磁性。 · Above the Curie temperature, thermal motion destroys domain order and the ferromagnet loses permanent magnetism.",
      "地球的“北磁极”在物理上是磁南极，指南针 N 极被它吸引。 · Earth's “north magnetic pole” is physically a magnetic south pole, which attracts the N pole of a compass.",
      "磁感线始终闭合；偶极外部的 N→S 与内部的 S→N 共同构成闭合回路。 · Magnetic field lines are always closed; the external N-to-S pattern and the internal S-to-N pattern together form closed loops.",
      "指南针的 N 极沿当地 \\(\\vec B\\) 方向，不是被“拉”向地理北；外场力矩使它转到 \\(\\vec\\mu\\parallel\\vec B\\)，磁偏角再使磁北偏离地理北。 · A compass N pole points along the local \\(\\vec B\\), not “pulled” toward geographic north; the external torque turns it to \\(\\vec\\mu\\parallel\\vec B\\), and magnetic declination then makes magnetic north differ from geographic north.",
      "力矩在 \\(\\theta=90^\\circ\\) 时最大、在 \\(\\theta=0\\) 或 \\(180^\\circ\\) 时为零；因此指南针在平衡位置附近有恢复力矩，偏角越大（到 \\(90^\\circ\\) 前）恢复力矩越大。 · The torque is maximum at \\(\\theta=90^\\circ\\) and zero at \\(\\theta=0\\) or \\(180^\\circ\\), so a compass near equilibrium has a restoring torque that grows with angular displacement up to \\(90^\\circ\\)."
    ],
    "misconceptions": [
      "认为磁性材料里存在独立的“磁荷”或磁单极子；实际上磁偶极由电流或电荷运动产生。 · Believing that magnetic materials contain isolated “magnetic charge” or monopoles; in fact magnetic dipoles arise from currents or charge motion.",
      "认为铁磁材料在任何时候都是磁铁；未磁化时磁畴随机排列，宏观磁矩可以为零。 · Believing a ferromagnet is always a magnet; when unmagnetized, its domains are random and the macroscopic moment can be zero.",
      "认为顺磁材料撤去外场后仍保留明显磁性；顺磁排列由热运动迅速打乱。 · Believing a paramagnet keeps noticeable magnetism after the field is removed; thermal motion quickly randomizes the alignment.",
      "认为抗磁材料“没有磁性”；抗磁材料有与外场反向的微弱感生磁矩。 · Believing diamagnetic materials have “no magnetism”; they have a weak induced moment opposite the field.",
      "把地球的北磁极当作磁北极；物理上它是磁南极，否则指南针的 N 极不会指向北方。 · Treating Earth's north magnetic pole as a magnetic north pole; physically it is a magnetic south pole, otherwise a compass N pole would not point north.",
      "把磁偶极矩 \\(\\mu\\) 与磁导率 \\(\\mu\\) 混为一谈；前者描述电流环的磁性强弱，后者描述材料对外场的磁化响应。 · Confusing the magnetic dipole moment \\(\\mu\\) with magnetic permeability \\(\\mu\\); the former describes the strength of a current-loop magnet, the latter a material's response to an external field.",
      "认为磁偶极在磁场中一定受到合力；在匀强磁场中合力为零，只有力矩。 · Believing a magnetic dipole always feels a net force; in a uniform field the net force is zero and only a torque acts.",
      "认为指南针的 N 极总是指向地理北方；它实际沿当地 \\(\\vec B\\) 方向，磁偏角使磁北与地理北有夹角。 · Believing a compass N pole always points to geographic north; it actually points along the local \\(\\vec B\\), and magnetic declination makes magnetic north differ from geographic north.",
      "认为指南针一到平衡位置就立刻静止；它通常围绕平衡位置阻尼振荡，需要摩擦力或阻尼才能最终停下。 · Believing a compass stops instantly on reaching equilibrium; it usually oscillates about equilibrium with damping and needs friction or another damping mechanism to come to rest."
    ],
    "examples": [
      {
        "title": "例 1 · 电流环的磁偶极矩与力矩 · Example 1: Dipole moment and torque of a current loop",
        "prompt": "半径 \\(R=0.050\\,\\mathrm{m}\\) 的单匝圆环通有 \\(I=2.0\\,\\mathrm{A}\\) 的电流，置于 \\(B=0.30\\,\\mathrm{T}\\) 的匀强磁场中。环面与磁场平行。求磁偶极矩大小和环所受的力矩大小。 · A single circular loop of radius \\(R=0.050\\,\\mathrm{m}\\) carries \\(I=2.0\\,\\mathrm{A}\\) and lies in a uniform field \\(B=0.30\\,\\mathrm{T}\\). The plane of the loop is parallel to the field. Find the dipole moment and the torque on the loop.",
        "steps": [
          "面积 \\(A=\\pi R^{2}=\\pi(0.050)^{2}=7.85\\times10^{-3}\\,\\mathrm{m^{2}}\\)。 · Area \\(A=\\pi R^{2}=\\pi(0.050)^{2}=7.85\\times10^{-3}\\,\\mathrm{m^{2}}\\).",
          "\\(\\mu=IA=(2.0)(7.85\\times10^{-3})=1.57\\times10^{-2}\\,\\mathrm{A\\,m^{2}}\\)。 · \\(\\mu=IA=(2.0)(7.85\\times10^{-3})=1.57\\times10^{-2}\\,\\mathrm{A\\,m^{2}}\\).",
          "环面与 \\(\\vec B\\) 平行，因此法线与 \\(\\vec B\\) 垂直，\\(\\theta=90^\\circ\\)：\\(\\tau=\\mu B\\sin90^\\circ=(1.57\\times10^{-2})(0.30)=4.7\\times10^{-3}\\,\\mathrm{N\\,m}\\)。 · The loop plane is parallel to \\(\\vec B\\), so the normal is perpendicular to \\(\\vec B\\) and \\(\\theta=90^\\circ\\): \\(\\tau=\\mu B\\sin90^\\circ=(1.57\\times10^{-2})(0.30)=4.7\\times10^{-3}\\,\\mathrm{N\\,m}\\)."
        ],
        "solution": "\\(\\mu\\approx1.6\\times10^{-2}\\,\\mathrm{A\\,m^{2}}\\)，\\(\\tau\\approx4.7\\times10^{-3}\\,\\mathrm{N\\,m}\\)。 · \\(\\mu\\approx1.6\\times10^{-2}\\,\\mathrm{A\\,m^{2}}\\) and \\(\\tau\\approx4.7\\times10^{-3}\\,\\mathrm{N\\,m}\\).",
        "solutionLatex": "\\mu=IA=1.57\\times10^{-2}\\,\\mathrm{A\\,m^{2}},\\qquad \\tau=\\mu B\\sin90^\\circ=4.7\\times10^{-3}\\,\\mathrm{N\\,m}"
      },
      {
        "title": "例 2 · 铁钉被磁化与退磁 · Example 2: Magnetizing and demagnetizing an iron nail",
        "prompt": "用磁铁的一端沿同一方向摩擦铁钉几次后，铁钉能吸起回形针；把铁钉加热到约 \\(800^\\circ\\mathrm{C}\\) 后冷却，它不再吸起回形针。用磁畴和居里温度解释这两个现象。 · After stroking an iron nail several times in one direction with a magnet, the nail can pick up paper clips; after the nail is heated to about \\(800^\\circ\\mathrm{C}\\) and cooled, it no longer picks up paper clips. Explain both observations using magnetic domains and the Curie temperature.",
        "steps": [
          "摩擦时外磁场使铁钉内的磁畴逐渐转向外场方向，畴壁移动使与外场同向的磁畴长大。 · While stroking, the external field gradually turns the nail's domains toward the field, and domain walls move so that domains aligned with the field grow.",
          "撤去磁铁后，部分磁畴排列被畴壁钉扎保留下来，铁钉具有剩磁，因此能吸起回形针。 · After the magnet is removed, some domain alignment remains pinned by domain walls, so the nail has remanence and can pick up paper clips.",
          "加热到约 \\(800^\\circ\\mathrm{C}\\) 已超过铁的居里温度（约 \\(770^\\circ\\mathrm{C}\\)），热运动破坏磁畴的有序排列；冷却后磁畴重新随机化，宏观磁性消失。 · Heating to about \\(800^\\circ\\mathrm{C}\\) exceeds iron's Curie temperature (about \\(770^\\circ\\mathrm{C}\\)), and thermal motion destroys the ordered domain arrangement; after cooling the domains randomize again and the macroscopic magnetism disappears."
        ],
        "solution": "铁钉被磁化是磁畴沿外场排列并被部分“冻结”的结果；超过居里温度后热运动打乱磁畴，冷却后不再保留宏观磁化。 · The nail is magnetized because domains align with the external field and are partly “frozen” in place; above the Curie temperature thermal motion randomizes the domains, so no macroscopic magnetization survives cooling.",
        "solutionLatex": "T>T_{\\mathrm{C}}\\approx770^\\circ\\mathrm{C}\\;\\Rightarrow\\;\\text{domains randomize}"
      },
      {
        "title": "例 3 · 地球磁偶极的磁矩 · Example 3: Magnetic moment of Earth's dipole",
        "prompt": "把地球磁场近似为偶极，取地球半径 \\(R_E=6.37\\times10^{6}\\,\\mathrm{m}\\)，赤道表面磁场约 \\(B=3.0\\times10^{-5}\\,\\mathrm{T}\\)。用 \\(B_{\\mathrm{equator}}=\\dfrac{\\mu_0}{4\\pi}\\dfrac{\\mu}{R_E^{3}}\\) 估算地球磁偶极矩。 · Model Earth's field as a dipole with radius \\(R_E=6.37\\times10^{6}\\,\\mathrm{m}\\) and equatorial surface field about \\(B=3.0\\times10^{-5}\\,\\mathrm{T}\\). Use \\(B_{\\mathrm{equator}}=\\dfrac{\\mu_0}{4\\pi}\\dfrac{\\mu}{R_E^{3}}\\) to estimate Earth's magnetic dipole moment.",
        "steps": [
          "由公式解出 \\(\\mu=\\dfrac{4\\pi R_E^{3}B}{\\mu_0}\\)。 · Solve for \\(\\mu=\\dfrac{4\\pi R_E^{3}B}{\\mu_0}\\).",
          "\\(R_E^{3}=(6.37\\times10^{6})^{3}=2.59\\times10^{20}\\,\\mathrm{m^{3}}\\)。 · \\(R_E^{3}=(6.37\\times10^{6})^{3}=2.59\\times10^{20}\\,\\mathrm{m^{3}}\\).",
          "\\(\\mu=\\dfrac{(4\\pi)(2.59\\times10^{20})(3.0\\times10^{-5})}{4\\pi\\times10^{-7}}=7.8\\times10^{22}\\,\\mathrm{A\\,m^{2}}\\)。 · \\(\\mu=\\dfrac{(4\\pi)(2.59\\times10^{20})(3.0\\times10^{-5})}{4\\pi\\times10^{-7}}=7.8\\times10^{22}\\,\\mathrm{A\\,m^{2}}\\)."
        ],
        "solution": "\\(\\mu\\approx7.8\\times10^{22}\\,\\mathrm{A\\,m^{2}}\\)，与地核中大规模电流体系产生的磁矩量级一致。 · \\(\\mu\\approx7.8\\times10^{22}\\,\\mathrm{A\\,m^{2}}\\), consistent with the order of magnitude produced by large-scale currents in Earth's core.",
        "solutionLatex": "\\mu=\\dfrac{4\\pi R_E^{3}B}{\\mu_0}=7.8\\times10^{22}\\,\\mathrm{A\\,m^{2}}"
      },
      {
        "title": "例 4 · 三种材料响应的图像判断 · Example 4: Identifying materials from response graphs",
        "prompt": "三种材料在相同外磁场中的磁化强度 \\(M\\) 随外场 \\(H\\) 的变化如图所示：A 的曲线很陡并在较小 \\(H\\) 处饱和，撤场后有明显剩磁；B 的曲线是斜率略大于零的直线；C 的曲线是斜率略小于零的直线。判断 A、B、C 分别属于哪类磁性材料，并说明理由。 · The graph shows magnetization \\(M\\) versus applied field \\(H\\) for three materials: A rises steeply and saturates at small \\(H\\), with clear remanence after the field is removed; B is a straight line with a small positive slope; C is a straight line with a small negative slope. Identify A, B, and C and justify your answer.",
        "steps": [
          "A 的磁化强、容易饱和且撤场后保留磁性，说明磁畴可被外场强烈对齐并被钉扎：A 是铁磁材料。 · A magnetizes strongly, saturates easily, and retains magnetization after the field is removed, so its domains are strongly aligned and pinned: A is ferromagnetic.",
          "B 的磁化与外场同向但非常弱，撤场后回到零：B 是顺磁材料。 · B magnetizes weakly in the same direction as the field and returns to zero when the field is removed: B is paramagnetic.",
          "C 的磁化为负（与外场反向）且非常弱：C 是抗磁材料。 · C has a negative magnetization (opposite the field) and it is very weak: C is diamagnetic."
        ],
        "solution": "A：铁磁；B：顺磁；C：抗磁。判断依据是磁化强度大小、是否饱和、撤场后是否保留磁性，以及磁化方向与外场相同还是相反。 · A: ferromagnetic; B: paramagnetic; C: diamagnetic. The evidence is the size of the magnetization, whether it saturates, whether it survives removal of the field, and whether it is parallel or antiparallel to the field.",
        "solutionLatex": "\\text{A: ferro},\\qquad \\text{B: para},\\qquad \\text{C: dia}"
      },
      {
        "title": "例 5 · 指南针的力矩与对齐 · Example 5: Torque and alignment of a compass needle",
        "prompt": "某指南针的磁偶极矩大小为 \\(\\mu=0.080\\,\\mathrm{A\\,m^{2}}\\)，放在 \\(B=5.0\\times10^{-5}\\,\\mathrm{T}\\) 的地磁场中，指针与 \\(\\vec B\\) 的夹角为 \\(60^\\circ\\)。求磁场对指针的力矩大小和势能；释放后指针如何运动，最终停在什么方向？ · A compass needle has magnetic moment \\(\\mu=0.080\\,\\mathrm{A\\,m^{2}}\\) in Earth's field \\(B=5.0\\times10^{-5}\\,\\mathrm{T}\\), with the needle at \\(60^\\circ\\) to \\(\\vec B\\). Find the torque magnitude and potential energy, and describe its motion after release and its final direction.",
        "steps": [
          "\\(\\tau=\\mu B\\sin\\theta=(0.080)(5.0\\times10^{-5})\\sin60^\\circ=3.5\\times10^{-6}\\,\\mathrm{N\\,m}\\)。 · \\(\\tau=\\mu B\\sin\\theta=(0.080)(5.0\\times10^{-5})\\sin60^\\circ=3.5\\times10^{-6}\\,\\mathrm{N\\,m}\\).",
          "\\(U=-\\mu B\\cos\\theta=-(0.080)(5.0\\times10^{-5})\\cos60^\\circ=-2.0\\times10^{-6}\\,\\mathrm{J}\\)。 · \\(U=-\\mu B\\cos\\theta=-(0.080)(5.0\\times10^{-5})\\cos60^\\circ=-2.0\\times10^{-6}\\,\\mathrm{J}\\).",
          "力矩方向由 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) 给出，使 \\(\\vec\\mu\\) 转向 \\(\\vec B\\)；指针获得角速度后越过平衡位置，在阻尼作用下围绕 \\(\\vec B\\) 摆动，最终停在 \\(\\vec\\mu\\parallel\\vec B\\)（\\(\\theta=0\\)，势能最小）。 · The torque direction from \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) turns \\(\\vec\\mu\\) toward \\(\\vec B\\); after gaining angular speed the needle overshoots and oscillates about \\(\\vec B\\) with damping, finally resting at \\(\\vec\\mu\\parallel\\vec B\\) (\\(\\theta=0\\), minimum potential energy)."
        ],
        "solution": "\\(\\tau\\approx3.5\\times10^{-6}\\,\\mathrm{N\\,m}\\)，\\(U\\approx-2.0\\times10^{-6}\\,\\mathrm{J}\\)；指针阻尼振荡后沿 \\(\\vec B\\) 对齐，N 极指向 \\(\\vec B\\) 方向。 · \\(\\tau\\approx3.5\\times10^{-6}\\,\\mathrm{N\\,m}\\), \\(U\\approx-2.0\\times10^{-6}\\,\\mathrm{J}\\); the needle oscillates with damping and finally aligns with \\(\\vec B\\), with its N pole along \\(\\vec B\\).",
        "solutionLatex": "\\tau=\\mu B\\sin60^\\circ=3.5\\times10^{-6}\\,\\mathrm{N\\,m},\\qquad U=-\\mu B\\cos60^\\circ=-2.0\\times10^{-6}\\,\\mathrm{J}"
      }
    ],
    "examTips": [
      "先区分 \\(\\mu\\)（磁偶极矩）与 \\(\\mu\\)（磁导率）：前者单位 \\(\\mathrm{A\\,m^{2}}\\)，后者单位 \\(\\mathrm{T\\,m\\,A^{-1}}\\)。 · First distinguish the magnetic dipole moment \\(\\mu\\) (unit \\(\\mathrm{A\\,m^{2}}\\)) from magnetic permeability \\(\\mu\\) (unit \\(\\mathrm{T\\,m\\,A^{-1}}\\)).",
      "画电流环时先标电流方向，再用右手定则标 \\(\\vec\\mu\\)；不要把 \\(\\vec\\mu\\) 沿环面方向画。 · When drawing a current loop, mark the current direction first, then use the right-hand rule to mark \\(\\vec\\mu\\); never draw \\(\\vec\\mu\\) along the loop plane.",
      "材料分类题用“是否强吸引、是否可永久磁化、撤场后是否保留、\\(\\mu_r\\) 略大于/略小于 1”四条证据组织答案。 · For material-classification questions, organize the answer around four pieces of evidence: strong versus weak attraction, permanent versus temporary magnetization, whether magnetism survives removal of the field, and whether \\(\\mu_r\\) is slightly greater or less than 1.",
      "解释铁磁现象时把“磁畴转向/长大”和“畴壁钉扎”写进因果链，不要只说“材料有磁性”。 · When explaining ferromagnetism, include “domain rotation/growth” and “domain-wall pinning” in the causal chain; do not merely say “the material is magnetic.”",
      "地球磁场题注意“地理北极附近是磁南极”，并说明磁偏角是地理北与磁北之间的夹角。 · In Earth's-field questions, remember that the magnetic pole near geographic north is a magnetic south pole, and that magnetic declination is the angle between geographic north and magnetic north.",
      "力矩题先判断 \\(\\vec\\mu\\) 与 \\(\\vec B\\) 的夹角，再用 \\(\\tau=\\mu B\\sin\\theta\\)；势能题用 \\(U=-\\mu B\\cos\\theta\\)。 · For torque, find the angle between \\(\\vec\\mu\\) and \\(\\vec B\\), then use \\(\\tau=\\mu B\\sin\\theta\\); for energy, use \\(U=-\\mu B\\cos\\theta\\).",
      "指南针题先画 \\(\\vec\\mu\\) 与 \\(\\vec B\\)，用右手定则判断力矩方向；稳定平衡 \\(\\theta=0\\)，不稳定平衡 \\(\\theta=180^\\circ\\)。 · For compass questions, draw \\(\\vec\\mu\\) and \\(\\vec B\\) and use the right-hand rule for the torque direction; stable equilibrium is \\(\\theta=0\\) and unstable equilibrium is \\(\\theta=180^\\circ\\).",
      "若题目问“最终指向”，答沿当地 \\(\\vec B\\)（N 极沿 \\(\\vec B\\)），不要答地理北；地理北只是地磁场近似偶极的结果。 · If a question asks for the final direction, answer along the local \\(\\vec B\\) (N pole along \\(\\vec B\\)), not geographic north; geographic north is only a consequence of Earth's approximately dipolar field."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.1",
        "title": "磁场 · Magnetic Fields",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场 · Magnetism and Moving Charges",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.6",
        "title": "磁导率与材料响应 · Magnetic Permeability and Material Response",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.9",
        "title": "毕奥–萨伐尔积分与电流几何 · Biot–Savart Integration and Current Geometry",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应 · Electromagnetic Induction",
        "relation": "后续 · downstream"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子 · Charged particles in magnetic fields"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：12.1 的磁场与磁感线给出描述语言；12.2 的 \\(q\\vec v\\times\\vec B\\) 说明电流环为何受力并产生力矩。 · Upstream: 12.1 provides the language of magnetic fields and field lines; 12.2's \\(q\\vec v\\times\\vec B\\) explains why a current loop feels forces and a torque.",
      "下游：12.6 用磁导率描述材料对磁化的响应；13.2 的电磁感应与磁畴翻转、磁滞损耗相联系。 · Downstream: 12.6 uses permeability to describe a material's magnetization response; 13.2's electromagnetic induction connects to domain reversal and hysteresis loss.",
      "跨学科：MRI 利用核自旋磁矩成像，硬盘利用磁畴存储信息，地质学利用岩石剩磁研究古地磁场。 · Cross-disciplinary: MRI uses nuclear-spin magnetic moments, hard drives store information in magnetic domains, and geology uses rock remanence to study ancient fields."
    ],
    "intuitionDetailed": "先从一个电流环建立图像：环上每小段电流都受到磁场力，合起来使环像小磁针一样转动。环的磁偶极矩方向垂直于环面，右手四指沿电流弯曲时拇指所指就是 N 极方向。材料内部有大量这样的“小磁针”：电子轨道运动和自旋贡献微观磁矩。铁磁材料中交换相互作用让相邻小磁针在磁畴内平行；未磁化时各磁畴方向随机，宏观效果互相抵消。外磁场使磁畴转向或长大，材料表现出强吸引并可保留剩磁；加热到居里温度以上，热运动压过交换相互作用，磁畴有序被破坏，铁磁体变成顺磁体。顺磁材料的小磁针只在外场中部分转向，热运动使排列很弱且撤场即散；抗磁材料没有永久小磁针，外场感生出反向小磁针，因此被弱排斥。地球磁场像一个巨大的倾斜偶极：指南针 N 极指向地理北方，说明地理北极附近实际上是磁南极。 · Start with a current loop: every current element feels a magnetic force, and together they make the loop rotate like a compass needle. The dipole moment is perpendicular to the loop plane; when the right fingers curl with the current, the thumb points toward the N pole. Inside matter there are countless such “tiny needles”: electron orbital motion and spin produce microscopic moments. In a ferromagnet, exchange interactions align neighboring needles within domains; when unmagnetized, the domains point randomly and cancel macroscopically. An external field rotates or grows domains, producing strong attraction and possible remanence; above the Curie temperature, thermal motion overwhelms exchange interactions, domain order is destroyed, and the ferromagnet becomes paramagnetic. In a paramagnet the tiny needles only partially align, thermal motion keeps the alignment weak, and it disappears when the field is removed; a diamagnet has no permanent needles and the field induces opposite moments, so it is weakly repelled. Earth's field is like a giant tilted dipole: a compass N pole points toward geographic north, which means the pole near geographic north is actually a magnetic south pole.",
    "development": [
      "先复习 12.2 的磁力与右手定则，明确电流环每一小段受到的力。 · Review the magnetic force and right-hand rule from 12.2, identifying the force on each current element of a loop.",
      "定义磁偶极矩 \\(\\vec\\mu=I\\vec A\\)，用矩形环推导力矩，再推广到任意平面环。 · Define \\(\\vec\\mu=I\\vec A\\), derive the torque for a rectangular loop, and generalize to any planar loop.",
      "由力矩做功引入势能 \\(U=-\\vec\\mu\\cdot\\vec B\\)，用平行/反平行检查符号。 · Introduce \\(U=-\\vec\\mu\\cdot\\vec B\\) from the work done by torque, and check signs with parallel and antiparallel orientations.",
      "把微观电子轨道与自旋磁矩和磁畴模型连接起来，解释铁磁、顺磁、抗磁的差异。 · Connect microscopic orbital and spin moments to the domain model, and use it to explain ferromagnetic, paramagnetic, and diamagnetic differences.",
      "用地球偶极模型解释指南针、磁偏角和地磁极反转，并用“地理北极附近是磁南极”做自检。 · Use the Earth-dipole model to explain compasses, declination, and magnetic pole reversals, and self-check with “the pole near geographic north is a magnetic south pole.”",
      "用指南针演示偶极对齐：画 \\(\\vec\\mu\\)、\\(\\vec B\\) 与 \\(\\vec\\tau\\)，说明 \\(\\theta=0\\) 的稳定平衡、\\(\\theta=180^\\circ\\) 的不稳定平衡，以及阻尼振荡如何耗散能量。 · Use a compass to demonstrate dipole alignment: draw \\(\\vec\\mu\\), \\(\\vec B\\), and \\(\\vec\\tau\\), and explain stable equilibrium at \\(\\theta=0\\), unstable equilibrium at \\(\\theta=180^\\circ\\), and how damped oscillation dissipates energy."
    ],
    "checks": [
      "一个电流环的磁偶极矩方向如何确定？如果从纸面外看电流是顺时针，\\(\\vec\\mu\\) 指向纸面内还是纸面外？ · How is the direction of a current loop's magnetic dipole moment determined? If the current looks clockwise when viewed from outside the page, does \\(\\vec\\mu\\) point into or out of the page?",
      "为什么铁磁材料能被永久磁化，而顺磁材料不能？请用磁畴和热运动解释。 · Why can a ferromagnet be permanently magnetized while a paramagnet cannot? Explain using domains and thermal motion.",
      "一块铁磁体被加热到居里温度以上后，它的 \\(\\mu_r\\) 会怎样变化？为什么？ · What happens to the relative permeability of a ferromagnet when it is heated above its Curie temperature? Why?",
      "地球的“北磁极”为什么在物理上是磁南极？用指南针受力说明。 · Why is Earth's “north magnetic pole” physically a magnetic south pole? Explain using the force on a compass needle.",
      "在匀强磁场中，磁偶极受到的合力为零，为什么它还会转动？ · In a uniform field the net force on a magnetic dipole is zero; why can it still rotate?",
      "把一块条形磁铁切成两半，能否得到单独的 N 极或 S 极？用磁偶极模型解释。 · If a bar magnet is cut in half, can you obtain an isolated N pole or S pole? Explain with the magnetic-dipole model.",
      "把指南针从 \\(\\theta=60^\\circ\\) 释放，为什么它会来回摆动而不是立刻停住？什么效应使它最终停下？ · Why does a compass released at \\(\\theta=60^\\circ\\) oscillate instead of stopping immediately, and what eventually damps it?",
      "指南针的 N 极指向 \\(\\vec B\\) 还是指向地理北？在什么情况下两者不一致？ · Does a compass N pole point along \\(\\vec B\\) or toward geographic north? When do the two differ?",
      "在 \\(\\theta=0\\) 与 \\(\\theta=180^\\circ\\) 两个位置，力矩和势能分别是多少？哪个是稳定平衡？ · What are the torque and potential energy at \\(\\theta=0\\) and \\(\\theta=180^\\circ\\), and which is stable equilibrium?"
    ],
    "vocabulary": [
      {
        "termZh": "磁偶极",
        "termEn": "magnetic dipole",
        "defZh": "具有磁偶极矩的电流环或电荷运动系统，其远场与微小条形磁铁相同。",
        "defEn": "A current loop or charge-motion system with a magnetic dipole moment whose far field is the same as that of a tiny bar magnet."
      },
      {
        "termZh": "磁偶极矩",
        "termEn": "magnetic dipole moment",
        "defZh": "矢量 \\(\\vec\\mu=I\\vec A\\)，大小为电流乘环面积，方向沿环面法线并由右手定则确定。",
        "defEn": "The vector \\(\\vec\\mu=I\\vec A\\), with magnitude current times loop area and direction along the loop normal given by the right-hand rule."
      },
      {
        "termZh": "磁畴",
        "termEn": "magnetic domain",
        "defZh": "铁磁材料中微观磁偶极自发平行排列的小区域。",
        "defEn": "A small region in a ferromagnetic material where microscopic magnetic dipoles spontaneously align parallel to one another."
      },
      {
        "termZh": "铁磁材料",
        "termEn": "ferromagnetic material",
        "defZh": "磁畴可被外场强烈对齐并可保留部分排列的材料，如铁、镍、钴。",
        "defEn": "A material whose domains can be strongly aligned by an external field and partly retain that alignment, such as iron, nickel, and cobalt."
      },
      {
        "termZh": "顺磁材料",
        "termEn": "paramagnetic material",
        "defZh": "微观偶极在外场中微弱同向排列、撤场后几乎不保留磁性的材料，如铝、铂。",
        "defEn": "A material whose microscopic dipoles align weakly with an external field and retain almost no magnetization after removal, such as aluminum and platinum."
      },
      {
        "termZh": "抗磁材料",
        "termEn": "diamagnetic material",
        "defZh": "外场感生出反向微弱磁矩、表现为弱排斥的材料，如铜、水、铋。",
        "defEn": "A material in which an external field induces a weak opposite moment, producing weak repulsion, such as copper, water, and bismuth."
      },
      {
        "termZh": "居里温度",
        "termEn": "Curie temperature",
        "defZh": "铁磁材料失去磁畴有序排列、转变为顺磁体的临界温度。",
        "defEn": "The critical temperature above which a ferromagnetic material loses domain order and becomes paramagnetic."
      },
      {
        "termZh": "磁偏角",
        "termEn": "magnetic declination",
        "defZh": "某地地理北方向与地磁北方向之间的夹角。",
        "defEn": "The angle at a location between geographic north and magnetic north."
      }
    ]
  },
  "12.6": {
    "id": "em/em-u12/12.6",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.6",
    "titleZh": "磁导率与材料响应",
    "titleEn": "Magnetic Permeability and Material Response",
    "layer": "ap",
    "summary": "磁导率 \\(\\mu\\) 描述材料对外磁场的磁化响应；\\(\\mu=\\mu_r\\mu_0\\)，并随成分、温度、方向、场强和历史而变化，铁磁材料还会饱和并出现磁滞。 · Magnetic permeability \\(\\mu\\) measures a material's magnetization response to an external field; \\(\\mu=\\mu_r\\mu_0\\), and it varies with composition, temperature, orientation, field strength, and history, with saturation and hysteresis in ferromagnets.",
    "learningObjectives": [
      "能定义磁导率 \\(\\mu\\)、相对磁导率 \\(\\mu_r\\) 与磁化率 \\(\\chi_m\\)，并说明它们与 \\(\\mu_0\\) 的关系。 · Define magnetic permeability \\(\\mu\\), relative permeability \\(\\mu_r\\), and magnetic susceptibility \\(\\chi_m\\), and relate them to \\(\\mu_0\\).",
      "能说明磁导率为何不同于真空磁导率，以及它如何由材料的成分与微观排列决定。 · Explain why a material's permeability differs from that of free space and how composition and microscopic arrangement determine it.",
      "能解释磁导率随温度、晶体方向、外加磁场强度和历史变化，并区分铁磁、顺磁、抗磁材料的 \\(\\mu_r\\) 数量级。 · Explain how permeability varies with temperature, crystal orientation, applied field strength, and history, and distinguish the orders of magnitude of \\(\\mu_r\\) for ferromagnetic, paramagnetic, and diamagnetic materials.",
      "能读 \\(B\\)–\\(H\\) 曲线，识别初始斜率、饱和与磁滞，并区分软磁与硬磁材料。 · Read a \\(B\\)–\\(H\\) curve, identify initial slope, saturation, and hysteresis, and distinguish soft from hard magnetic materials.",
      "能在理想螺线管等线性近似下用 \\(B=\\mu_r\\mu_0 nI\\) 计算有磁芯时的磁场，并检查饱和限制。 · Use \\(B=\\mu_r\\mu_0 nI\\) for an ideal solenoid with a core in the linear approximation, and check saturation limits."
    ],
    "essentialKnowledge": [
      "磁导率定义为 \\(\\mu=\\dfrac{B}{H}\\)（线性、各向同性材料），描述材料在给定外场 \\(H\\) 下产生多大磁感应强度 \\(B\\)；真空磁导率 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)。 · Magnetic permeability is defined by \\(\\mu=\\dfrac{B}{H}\\) for a linear, isotropic material; it describes how much magnetic field \\(B\\) a material produces for a given applied field \\(H\\). The permeability of free space is \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\).",
      "相对磁导率 \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\) 是无量纲量，真空 \\(\\mu_r=1\\)；磁化率 \\(\\chi_m=\\mu_r-1\\)，描述材料被磁化的难易程度。 · Relative permeability \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\) is dimensionless, with \\(\\mu_r=1\\) in vacuum; magnetic susceptibility \\(\\chi_m=\\mu_r-1\\) describes how easily a material is magnetized.",
      "微观上 \\(\\vec B=\\mu_0(\\vec H+\\vec M)\\)，其中 \\(\\vec M\\) 是单位体积的磁偶极矩（磁化强度）；线性材料中 \\(\\vec M=\\chi_m\\vec H\\)，所以 \\(\\vec B=\\mu_0(1+\\chi_m)\\vec H\\)。 · Microscopically, \\(\\vec B=\\mu_0(\\vec H+\\vec M)\\), where \\(\\vec M\\) is the magnetic dipole moment per unit volume (magnetization); for a linear material \\(\\vec M=\\chi_m\\vec H\\), so \\(\\vec B=\\mu_0(1+\\chi_m)\\vec H\\).",
      "顺磁材料 \\(\\mu_r\\) 略大于 1（如铝约 1.00002），抗磁材料 \\(\\mu_r\\) 略小于 1（如铜约 0.99999），铁磁材料 \\(\\mu_r\\) 可达数百到数千甚至更高。 · Paramagnetic materials have \\(\\mu_r\\) slightly greater than 1 (for example, aluminum is about 1.00002); diamagnetic materials have \\(\\mu_r\\) slightly less than 1 (for example, copper is about 0.99999); ferromagnetic materials can have \\(\\mu_r\\) from hundreds to thousands or more.",
      "磁导率不是材料的普适常数：它取决于成分、晶体结构、杂质、温度、晶体方向（磁各向异性）、外加磁场强度、频率以及机械应力。 · Permeability is not a universal constant of a material: it depends on composition, crystal structure, impurities, temperature, crystal orientation (magnetic anisotropy), applied field strength, frequency, and mechanical stress.",
      "铁磁材料的 \\(B\\)–\\(H\\) 曲线是非线性的：弱场下磁畴壁移动使 \\(\\mu\\) 很大；强场下磁畴逐渐全部对齐，材料达到磁饱和，\\(\\mu_r\\) 明显下降。 · The \\(B\\)–\\(H\\) curve of a ferromagnet is nonlinear: at weak fields domain-wall motion makes \\(\\mu\\) large; at strong fields the domains become fully aligned, the material saturates, and \\(\\mu_r\\) drops noticeably.",
      "磁滞表示 \\(B\\) 落后于 \\(H\\)：撤去外场后仍有剩磁 \\(B_r\\)，要使 \\(B\\) 归零需加反向矫顽场 \\(H_c\\)；磁滞回线面积代表每个周期单位体积的磁能耗散。 · Hysteresis means \\(B\\) lags \\(H\\): after the field is removed a remanence \\(B_r\\) remains, and a reverse coercive field \\(H_c\\) is needed to bring \\(B\\) to zero; the area of the hysteresis loop is the magnetic energy dissipated per unit volume per cycle.",
      "温度升高加剧热运动，削弱偶极排列，使 \\(\\mu_r\\) 下降；超过居里温度后铁磁体变为顺磁体，磁畴消失，\\(\\mu_r\\) 骤降到接近 1。 · Increasing temperature strengthens thermal motion and weakens dipole alignment, lowering \\(\\mu_r\\); above the Curie temperature a ferromagnet becomes paramagnetic, domains disappear, and \\(\\mu_r\\) collapses toward 1.",
      "磁各向异性使同一晶体在不同方向上的磁化难易不同，因此 \\(\\mu\\) 可以随方向变化；轧制硅钢等材料会形成易磁化方向。 · Magnetic anisotropy makes magnetization easier along some crystal directions than others, so \\(\\mu\\) can depend on direction; rolled silicon steel, for example, develops an easy magnetization direction.",
      "理想螺线管中 \\(H=nI\\)，插入相对磁导率为 \\(\\mu_r\\) 的线性磁芯后 \\(B=\\mu_r\\mu_0 nI\\)；磁芯能放大磁场，但饱和后不再按比例增大。 · In an ideal solenoid \\(H=nI\\); inserting a linear core of relative permeability \\(\\mu_r\\) gives \\(B=\\mu_r\\mu_0 nI\\). The core amplifies the field, but after saturation the field no longer grows proportionally."
    ],
    "definition": "磁导率（magnetic permeability）\\(\\mu\\) 是描述材料对外加磁场产生磁化响应强弱的物理量，在线性各向同性材料中定义为 \\(\\mu=\\dfrac{B}{H}\\)，其中 \\(B\\) 是材料内部的磁感应强度，\\(H\\) 是外加磁场强度。真空磁导率 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)；相对磁导率 \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\) 无量纲，真空为 1。材料的磁导率由其成分和微观排列决定：顺磁材料略大于 \\(\\mu_0\\)，抗磁材料略小于 \\(\\mu_0\\)，铁磁材料可远大于 \\(\\mu_0\\)。磁导率不是固定常数，会随温度、晶体方向、外场强度、频率、应力和磁化历史改变；铁磁材料还会出现饱和与磁滞。 · Magnetic permeability \\(\\mu\\) describes how strongly a material magnetizes in response to an applied magnetic field. For a linear, isotropic material it is defined by \\(\\mu=\\dfrac{B}{H}\\), where \\(B\\) is the magnetic field inside the material and \\(H\\) is the applied field strength. The permeability of free space is \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\); relative permeability \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\) is dimensionless and equals 1 in vacuum. A material's permeability is determined by its composition and microscopic arrangement: paramagnetic materials are slightly greater than \\(\\mu_0\\), diamagnetic materials slightly less, and ferromagnetic materials can be far greater. Permeability is not a fixed constant: it changes with temperature, crystal orientation, field strength, frequency, stress, and magnetic history, and ferromagnets also exhibit saturation and hysteresis.",
    "intuition": "把材料想成一个“磁场放大器”：外场 \\(H\\) 是输入，材料内部的 \\(B\\) 是输出，\\(\\mu\\) 就是放大倍数（再乘上 \\(\\mu_0\\)）。铁磁材料像一群很容易被说服的小磁针，外场一喊就排齐，放大倍数很大；但所有小磁针都排齐后，再喊也没有更多可以转向的，于是饱和。温度像噪声，越热小磁针越难保持整齐，放大倍数下降；晶体方向像“顺纹/逆纹”，沿易磁化方向更容易放大。 · Think of a material as a magnetic amplifier: the applied field \\(H\\) is the input, the internal field \\(B\\) is the output, and \\(\\mu\\) is the amplification factor (multiplied by \\(\\mu_0\\)). A ferromagnet is like a crowd of tiny magnets that are easy to persuade: an external field lines them up and the amplification is large; but once all are aligned, there is nothing left to turn, so the material saturates. Temperature is like noise: the hotter it is, the harder it is to keep the tiny magnets aligned, so the amplification drops; crystal orientation is like grain direction, making amplification easier along an easy axis.",
    "formulas": [
      {
        "latex": "\\mu=\\dfrac{B}{H}",
        "note": "线性各向同性材料的磁导率定义；\\(H\\) 的单位为 \\(\\mathrm{A\\,m^{-1}}\\)，\\(\\mu\\) 的单位为 \\(\\mathrm{T\\,m\\,A^{-1}}\\)。 · Definition of permeability for a linear isotropic material; \\(H\\) has units \\(\\mathrm{A\\,m^{-1}}\\) and \\(\\mu\\) has units \\(\\mathrm{T\\,m\\,A^{-1}}\\)."
      },
      {
        "latex": "\\mu_r=\\dfrac{\\mu}{\\mu_0}",
        "note": "相对磁导率，无量纲；真空为 1。 · Relative permeability, dimensionless; equal to 1 in vacuum."
      },
      {
        "latex": "\\chi_m=\\mu_r-1",
        "note": "磁化率；正值为顺磁/铁磁响应，负值为抗磁响应。 · Magnetic susceptibility; positive for paramagnetic/ferromagnetic response, negative for diamagnetic response."
      },
      {
        "latex": "\\vec B=\\mu_0(\\vec H+\\vec M)",
        "note": "材料内部磁感应强度与外加场、磁化强度的关系。 · Relation among the internal field, applied field, and magnetization."
      },
      {
        "latex": "\\vec B=\\mu\\vec H=\\mu_r\\mu_0\\vec H",
        "note": "线性材料的本构关系；铁磁材料只在局部线性近似下成立。 · Constitutive relation for a linear material; for ferromagnets it holds only in a local linear approximation."
      },
      {
        "latex": "B=\\mu_r\\mu_0 nI",
        "note": "理想螺线管插入线性磁芯后的内部磁场；\\(n\\) 为单位长度匝数。 · Internal field of an ideal solenoid with a linear core; \\(n\\) is the number of turns per unit length."
      },
      {
        "latex": "\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}",
        "note": "真空磁导率；也等于 \\(4\\pi\\times10^{-7}\\,\\mathrm{N\\,A^{-2}}\\)。 · Permeability of free space; also \\(4\\pi\\times10^{-7}\\,\\mathrm{N\\,A^{-2}}\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "安培环路定律 · Ampère's law",
        "to": "磁场强度 \\(H\\) · Magnetic field strength",
        "note": "对自由电流写 \\(\\oint\\vec H\\cdot\\mathrm{d}\\vec\\ell=I_{\\mathrm{free}}\\)；理想螺线管取矩形环路得 \\(H=nI\\)。 · Write \\(\\oint\\vec H\\cdot\\mathrm{d}\\vec\\ell=I_{\\mathrm{free}}\\) for free current; a rectangular loop in an ideal solenoid gives \\(H=nI\\)."
      },
      {
        "from": "磁化强度 · Magnetization",
        "to": "本构关系 · Constitutive relation",
        "note": "把材料看成许多磁偶极，\\(\\vec M\\) 为单位体积的磁偶极矩；总场 \\(\\vec B=\\mu_0(\\vec H+\\vec M)\\)，线性材料 \\(\\vec M=\\chi_m\\vec H\\)。 · Treat the material as many magnetic dipoles, with \\(\\vec M\\) the dipole moment per unit volume; the total field is \\(\\vec B=\\mu_0(\\vec H+\\vec M)\\), and for a linear material \\(\\vec M=\\chi_m\\vec H\\)."
      },
      {
        "from": "定义 · Definition",
        "to": "相对磁导率 · Relative permeability",
        "note": "由 \\(\\vec B=\\mu_0(1+\\chi_m)\\vec H\\) 得 \\(\\mu=\\mu_0(1+\\chi_m)\\)，所以 \\(\\mu_r=1+\\chi_m\\)。 · From \\(\\vec B=\\mu_0(1+\\chi_m)\\vec H\\), \\(\\mu=\\mu_0(1+\\chi_m)\\), so \\(\\mu_r=1+\\chi_m\\)."
      },
      {
        "from": "磁畴转动 · Domain rotation",
        "to": "非线性 \\(B\\)–\\(H\\) 曲线 · Nonlinear \\(B\\)–\\(H\\) curve",
        "note": "弱场时畴壁移动使 \\(B\\) 快速增大，曲线陡；强场时磁畴全部对齐，\\(M\\) 达到饱和，之后 \\(B\\) 只随 \\(\\mu_0H\\) 缓慢增加。 · At weak fields domain-wall motion makes \\(B\\) rise steeply; at strong fields all domains align, \\(M\\) saturates, and afterward \\(B\\) grows only slowly as \\(\\mu_0H\\)."
      },
      {
        "from": "热运动 · Thermal motion",
        "to": "温度依赖 · Temperature dependence",
        "note": "偶极排列能 \\(\\mu B\\) 与热能量 \\(k_BT\\) 竞争；温度升高使排列减弱，\\(\\mu_r\\) 下降；超过居里温度后交换相互作用失效。 · Dipole alignment energy \\(\\mu B\\) competes with thermal energy \\(k_BT\\); higher temperature weakens alignment and lowers \\(\\mu_r\\), and above the Curie temperature exchange interactions fail."
      }
    ],
    "conditions": [
      "线性近似要求材料未饱和、磁滞可忽略；铁磁材料的 \\(\\mu\\) 只在给定工作点附近可视为常数。 · The linear approximation requires the material to be unsaturated and hysteresis negligible; a ferromagnet's \\(\\mu\\) can be treated as constant only near a given operating point.",
      "\\(\\mu=\\dfrac{B}{H}\\) 主要适用于各向同性材料；各向异性晶体的 \\(\\mu\\) 可能随方向改变，需用张量描述。 · \\(\\mu=\\dfrac{B}{H}\\) applies mainly to isotropic materials; in anisotropic crystals \\(\\mu\\) can depend on direction and requires a tensor description.",
      "磁导率随温度变化；靠近或超过居里温度时，铁磁材料的 \\(\\mu_r\\) 会急剧下降。 · Permeability varies with temperature; near or above the Curie temperature, a ferromagnet's \\(\\mu_r\\) drops sharply.",
      "磁导率随外加场强变化；强场下铁磁材料饱和，不能再用固定的 \\(\\mu_r\\) 计算。 · Permeability varies with applied field strength; under strong fields a ferromagnet saturates and a fixed \\(\\mu_r\\) can no longer be used.",
      "磁滞意味着 \\(B\\) 不是 \\(H\\) 的单值函数；撤场后可能有剩磁，计算时要说明磁化历史。 · Hysteresis means \\(B\\) is not a single-valued function of \\(H\\); remanence may remain after the field is removed, so the magnetic history must be specified.",
      "理想螺线管近似要求螺线管足够长、绕组均匀、边缘效应可忽略；\\(B=\\mu_r\\mu_0 nI\\) 假设磁芯均匀且未饱和。 · The ideal-solenoid approximation requires a long, uniformly wound solenoid with negligible edge effects; \\(B=\\mu_r\\mu_0 nI\\) assumes a uniform, unsaturated core.",
      "频率较高时涡流、畴壁运动和磁滞会使有效磁导率随频率变化，甚至出现损耗。 · At higher frequencies, eddy currents, domain-wall motion, and hysteresis make the effective permeability frequency-dependent and cause losses."
    ],
    "keyPoints": [
      "\\(\\mu\\) 描述材料响应，\\(\\mu_0\\) 描述真空；\\(\\mu_r\\) 是无量纲比值。 · \\(\\mu\\) describes the material response, \\(\\mu_0\\) describes vacuum, and \\(\\mu_r\\) is a dimensionless ratio.",
      "顺磁 \\(\\mu_r\\gtrsim1\\)，抗磁 \\(\\mu_r\\lesssim1\\)，铁磁 \\(\\mu_r\\gg1\\) 且非线性。 · Paramagnetic \\(\\mu_r\\gtrsim1\\), diamagnetic \\(\\mu_r\\lesssim1\\), ferromagnetic \\(\\mu_r\\gg1\\) and nonlinear.",
      "铁磁材料的 \\(\\mu_r\\) 不是常数：随 \\(H\\)、温度、方向、频率和历史变化。 · A ferromagnet's \\(\\mu_r\\) is not constant: it varies with \\(H\\), temperature, orientation, frequency, and history.",
      "\\(B\\)–\\(H\\) 曲线的初始斜率对应小信号磁导率；曲线弯曲并趋于水平表示饱和。 · The initial slope of the \\(B\\)–\\(H\\) curve is the small-signal permeability; bending toward horizontal indicates saturation.",
      "磁滞回线的宽度反映矫顽力；软磁材料回线窄、损耗小，硬磁材料回线宽、适合做永磁体。 · The width of the hysteresis loop reflects coercivity; soft magnets have narrow loops and low loss, while hard magnets have wide loops and are suited for permanent magnets.",
      "居里温度以上铁磁体变顺磁体，磁畴消失，\\(\\mu_r\\) 接近 1。 · Above the Curie temperature a ferromagnet becomes paramagnetic, domains disappear, and \\(\\mu_r\\) approaches 1.",
      "磁芯能放大螺线管磁场，但饱和后放大失效；设计电磁铁要同时考虑 \\(\\mu_r\\) 和饱和磁感应强度。 · A core amplifies a solenoid's field, but the amplification fails at saturation; electromagnet design must consider both \\(\\mu_r\\) and the saturation field.",
      "\\(\\mu\\) 的单位是 \\(\\mathrm{T\\,m\\,A^{-1}}\\)，与 \\(\\mu_0\\) 相同；\\(\\mu_r\\) 没有单位。 · \\(\\mu\\) has units \\(\\mathrm{T\\,m\\,A^{-1}}\\), the same as \\(\\mu_0\\); \\(\\mu_r\\) has no units."
    ],
    "misconceptions": [
      "认为磁导率是材料的固定常数；实际上它随温度、方向、场强、频率和历史改变。 · Believing permeability is a fixed constant of a material; in fact it varies with temperature, orientation, field strength, frequency, and history.",
      "认为抗磁材料的 \\(\\mu_r=0\\)；抗磁材料的 \\(\\mu_r\\) 只是略小于 1。 · Believing a diamagnetic material has \\(\\mu_r=0\\); its \\(\\mu_r\\) is only slightly less than 1.",
      "把磁导率 \\(\\mu\\) 与介电常数 \\(\\varepsilon\\) 混淆；前者描述磁响应，后者描述电响应。 · Confusing magnetic permeability \\(\\mu\\) with permittivity \\(\\varepsilon\\); the former describes magnetic response, the latter electric response.",
      "认为插入铁芯会改变 \\(\\mu_0\\)；\\(\\mu_0\\) 是真空常数，改变的是材料的有效磁导率 \\(\\mu=\\mu_r\\mu_0\\)。 · Believing an iron core changes \\(\\mu_0\\); \\(\\mu_0\\) is a vacuum constant, and what changes is the material's effective permeability \\(\\mu=\\mu_r\\mu_0\\).",
      "认为铁磁材料一旦磁化就永远不会退磁；加热、敲击或交变磁场都可以使磁畴重新随机化。 · Believing a magnetized ferromagnet never loses its magnetism; heating, hammering, or an alternating field can randomize the domains again.",
      "把 \\(B\\) 与 \\(H\\) 当作同一个量；它们单位不同，\\(B\\) 包含材料磁化的贡献，\\(H\\) 由自由电流和磁荷（等效）决定。 · Treating \\(B\\) and \\(H\\) as the same quantity; they have different units, \\(B\\) includes the material's magnetization, and \\(H\\) is set by free current (and equivalent magnetic poles).",
      "认为磁导率越大越好；过大的 \\(\\mu_r\\) 可能伴随较大的磁滞损耗或较低的饱和场，需按应用权衡。 · Believing larger permeability is always better; a very large \\(\\mu_r\\) may come with higher hysteresis loss or a lower saturation field, so applications require trade-offs.",
      "忽略磁芯饱和，仍用 \\(B=\\mu_r\\mu_0 nI\\) 外推强场；饱和后 \\(B\\) 增长变慢。 · Ignoring core saturation and extrapolating \\(B=\\mu_r\\mu_0 nI\\) to strong fields; after saturation \\(B\\) grows more slowly."
    ],
    "examples": [
      {
        "title": "例 1 · 空气芯与铁芯螺线管 · Example 1: Air-core versus iron-core solenoid",
        "prompt": "理想螺线管每米 \\(1200\\) 匝，通 \\(2.0\\,\\mathrm{A}\\) 电流。先求空气芯时的 \\(B\\)；再求插入 \\(\\mu_r=500\\) 的线性铁芯时的 \\(B\\)。 · An ideal solenoid has \\(1200\\) turns per meter and carries \\(2.0\\,\\mathrm{A}\\). Find \\(B\\) with an air core, then with a linear iron core of \\(\\mu_r=500\\).",
        "steps": [
          "空气芯：\\(B_0=\\mu_0nI=(4\\pi\\times10^{-7})(1200)(2.0)=3.0\\times10^{-3}\\,\\mathrm{T}\\)。 · Air core: \\(B_0=\\mu_0nI=(4\\pi\\times10^{-7})(1200)(2.0)=3.0\\times10^{-3}\\,\\mathrm{T}\\).",
          "铁芯：\\(B=\\mu_rB_0=500(3.0\\times10^{-3})=1.5\\,\\mathrm{T}\\)。 · Iron core: \\(B=\\mu_rB_0=500(3.0\\times10^{-3})=1.5\\,\\mathrm{T}\\).",
          "检查饱和：若铁芯饱和磁感应强度约 \\(2\\,\\mathrm{T}\\)，\\(1.5\\,\\mathrm{T}\\) 尚未饱和，线性近似可用；若计算结果超过饱和值，实际 \\(B\\) 会被限制。 · Check saturation: if the core's saturation field is about \\(2\\,\\mathrm{T}\\), then \\(1.5\\,\\mathrm{T}\\) is below saturation and the linear approximation is acceptable; if the calculation exceeds the saturation value, the actual \\(B\\) is limited."
        ],
        "solution": "\\(B_0=3.0\\times10^{-3}\\,\\mathrm{T}\\)，有铁芯时 \\(B=1.5\\,\\mathrm{T}\\)（假设未饱和）。 · \\(B_0=3.0\\times10^{-3}\\,\\mathrm{T}\\), and with the core \\(B=1.5\\,\\mathrm{T}\\) (assuming no saturation).",
        "solutionLatex": "B_0=\\mu_0nI=3.0\\times10^{-3}\\,\\mathrm{T},\\qquad B=\\mu_rB_0=1.5\\,\\mathrm{T}"
      },
      {
        "title": "例 2 · 由 B 与 H 求相对磁导率 · Example 2: Relative permeability from B and H",
        "prompt": "某线性磁介质中，\\(H=2.0\\times10^{5}\\,\\mathrm{A\\,m^{-1}}\\)，\\(B=0.80\\,\\mathrm{T}\\)。求 \\(\\mu\\)、\\(\\mu_r\\) 与 \\(\\chi_m\\)，并判断它更可能是顺磁、抗磁还是铁磁材料。 · In a linear magnetic medium, \\(H=2.0\\times10^{5}\\,\\mathrm{A\\,m^{-1}}\\) and \\(B=0.80\\,\\mathrm{T}\\). Find \\(\\mu\\), \\(\\mu_r\\), and \\(\\chi_m\\), and decide whether it is more likely paramagnetic, diamagnetic, or ferromagnetic.",
        "steps": [
          "\\(\\mu=\\dfrac{B}{H}=\\dfrac{0.80}{2.0\\times10^{5}}=4.0\\times10^{-6}\\,\\mathrm{T\\,m\\,A^{-1}}\\)。 · \\(\\mu=\\dfrac{B}{H}=\\dfrac{0.80}{2.0\\times10^{5}}=4.0\\times10^{-6}\\,\\mathrm{T\\,m\\,A^{-1}}\\).",
          "\\(\\mu_r=\\dfrac{\\mu}{\\mu_0}=\\dfrac{4.0\\times10^{-6}}{4\\pi\\times10^{-7}}\\approx3.2\\)。 · \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}=\\dfrac{4.0\\times10^{-6}}{4\\pi\\times10^{-7}}\\approx3.2\\).",
          "\\(\\chi_m=\\mu_r-1\\approx2.2>0\\)，且 \\(\\mu_r\\) 远大于 1 但又不是特别大，符合某些铁氧体（软磁铁氧体）的响应；普通顺磁材料的 \\(\\mu_r\\) 只比 1 大百万分之几。 · \\(\\chi_m=\\mu_r-1\\approx2.2>0\\), and \\(\\mu_r\\) is much greater than 1 but not extremely large, consistent with some ferrites (soft magnetic ferrites); an ordinary paramagnet has \\(\\mu_r\\) only a few parts per million above 1."
        ],
        "solution": "\\(\\mu\\approx4.0\\times10^{-6}\\,\\mathrm{T\\,m\\,A^{-1}}\\)，\\(\\mu_r\\approx3.2\\)，\\(\\chi_m\\approx2.2\\)；更可能是铁氧体等铁磁/亚铁磁材料，而不是普通顺磁或抗磁材料。 · \\(\\mu\\approx4.0\\times10^{-6}\\,\\mathrm{T\\,m\\,A^{-1}}\\), \\(\\mu_r\\approx3.2\\), and \\(\\chi_m\\approx2.2\\); it is more likely a ferrite or similar ferromagnetic/ferrimagnetic material rather than an ordinary paramagnet or diamagnet.",
        "solutionLatex": "\\mu=\\dfrac{B}{H}=4.0\\times10^{-6}\\,\\mathrm{T\\,m\\,A^{-1}},\\qquad \\mu_r=\\dfrac{\\mu}{\\mu_0}\\approx3.2"
      },
      {
        "title": "例 3 · 居里温度与磁导率 · Example 3: Curie temperature and permeability",
        "prompt": "一块铁氧体磁芯在室温下 \\(\\mu_r=2000\\)，加热到居里温度以上后 \\(\\mu_r\\) 降到约 1。解释原因，并说明这对高温下工作的电磁铁有什么影响。 · A ferrite core has \\(\\mu_r=2000\\) at room temperature; after heating above its Curie temperature, \\(\\mu_r\\) falls to about 1. Explain why and describe the effect on an electromagnet operating at high temperature.",
        "steps": [
          "室温下磁畴有序，外场可使磁畴壁移动和磁畴转向，材料强烈放大磁场，所以 \\(\\mu_r\\) 很大。 · At room temperature the domains are ordered, and an external field can move domain walls and rotate domains, so the material strongly amplifies the field and \\(\\mu_r\\) is large.",
          "超过居里温度后，热运动能量超过交换相互作用，磁畴结构消失，偶极只能像顺磁体一样微弱排列，因此 \\(\\mu_r\\) 接近 1。 · Above the Curie temperature, thermal energy exceeds the exchange interaction, the domain structure disappears, and the dipoles can only align weakly like a paramagnet, so \\(\\mu_r\\) approaches 1.",
          "电磁铁的磁场 \\(B=\\mu_r\\mu_0nI\\) 会大幅下降；若设计依赖高 \\(\\mu_r\\)，高温下可能无法达到所需磁场，需要更大电流或改用高居里温度材料。 · The electromagnet's field \\(B=\\mu_r\\mu_0nI\\) drops sharply; if the design relies on a high \\(\\mu_r\\), it may fail to reach the required field at high temperature, so a larger current or a higher-Curie-temperature material is needed."
        ],
        "solution": "居里温度以上磁畴有序被热运动破坏，铁磁体变为顺磁体，\\(\\mu_r\\) 从约 2000 降到约 1；电磁铁的磁芯放大作用几乎消失。 · Above the Curie temperature thermal motion destroys domain order, the ferromagnet becomes paramagnetic, and \\(\\mu_r\\) falls from about 2000 to about 1; the core's amplification nearly disappears.",
        "solutionLatex": "T>T_{\\mathrm{C}}\\;\\Rightarrow\\;\\mu_r\\to1,\\qquad B=\\mu_r\\mu_0nI\\;\\text{drops sharply}"
      },
      {
        "title": "例 4 · B–H 曲线与软磁/硬磁 · Example 4: B–H curves and soft versus hard magnets",
        "prompt": "两条 \\(B\\)–\\(H\\) 磁滞回线：材料 X 的回线很窄，矫顽力约 \\(50\\,\\mathrm{A\\,m^{-1}}\\)；材料 Y 的回线很宽，矫顽力约 \\(5\\times10^{5}\\,\\mathrm{A\\,m^{-1}}\\)，剩磁也很大。分别说明它们适合做变压器铁芯还是永磁体，并解释理由。 · Two \\(B\\)–\\(H\\) hysteresis loops: material X has a narrow loop with coercivity about \\(50\\,\\mathrm{A\\,m^{-1}}\\); material Y has a wide loop with coercivity about \\(5\\times10^{5}\\,\\mathrm{A\\,m^{-1}}\\) and large remanence. Decide which is better for a transformer core and which for a permanent magnet, and explain why.",
        "steps": [
          "变压器铁芯需要反复磁化和退磁，磁滞回线面积越小，每周期能量损耗越低；X 的回线窄、矫顽力小，适合做软磁铁芯。 · A transformer core is magnetized and demagnetized repeatedly, and a smaller hysteresis-loop area means lower energy loss per cycle; X has a narrow loop and small coercivity, so it is suitable as a soft magnetic core.",
          "永磁体需要撤去外场后仍保留强磁性，并能抵抗退磁；Y 的剩磁大、矫顽力大，适合做硬磁材料/永磁体。 · A permanent magnet must retain strong magnetization after the field is removed and resist demagnetization; Y has large remanence and large coercivity, so it is suitable as a hard magnetic material/permanent magnet.",
          "磁滞回线面积等于每个周期单位体积的磁能耗散，因此宽回线的 Y 不适合频繁磁化的变压器铁芯。 · The area of the hysteresis loop equals the magnetic energy dissipated per unit volume per cycle, so the wide-loop material Y is unsuitable for a frequently cycled transformer core."
        ],
        "solution": "X 适合变压器铁芯（软磁，低损耗）；Y 适合永磁体（硬磁，高剩磁、高矫顽力）。 · X is suitable for a transformer core (soft magnetic, low loss); Y is suitable for a permanent magnet (hard magnetic, high remanence and coercivity).",
        "solutionLatex": "\\text{X: soft, small }H_c;\\qquad \\text{Y: hard, large }H_c,\\ B_r"
      }
    ],
    "examTips": [
      "先写 \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\) 再代值；\\(\\mu_r\\) 无量纲，\\(\\mu\\) 有单位。 · Write \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\) before substituting; \\(\\mu_r\\) is dimensionless while \\(\\mu\\) has units.",
      "题目说“线性磁芯”才能用 \\(B=\\mu_r\\mu_0nI\\)；若给出 \\(B\\)–\\(H\\) 曲线或提到饱和，必须读图或分段处理。 · Only use \\(B=\\mu_r\\mu_0nI\\) when the problem states a linear core; if a \\(B\\)–\\(H\\) curve or saturation is mentioned, read the graph or treat the curve piecewise.",
      "判断材料类型时用 \\(\\mu_r\\) 的数量级：略大于 1 是顺磁，略小于 1 是抗磁，远大于 1 是铁磁/亚铁磁。 · Classify materials by the order of magnitude of \\(\\mu_r\\): slightly above 1 is paramagnetic, slightly below 1 is diamagnetic, and far above 1 is ferromagnetic/ferrimagnetic.",
      "解释温度影响时写“热运动破坏偶极/磁畴排列”，不要只说“温度升高磁性变弱”。 · When explaining temperature effects, write “thermal motion disrupts dipole/domain alignment,” not merely “higher temperature weakens magnetism.”",
      "磁滞题抓住三个量：剩磁 \\(B_r\\)、矫顽力 \\(H_c\\)、回线面积（损耗）；软磁要窄，硬磁要宽。 · For hysteresis questions, focus on three quantities: remanence \\(B_r\\), coercivity \\(H_c\\), and loop area (loss); soft magnets need narrow loops, hard magnets wide loops.",
      "单位检查：\\(\\mu_0\\) 与 \\(\\mu\\) 的单位是 \\(\\mathrm{T\\,m\\,A^{-1}}\\)，\\(H\\) 的单位是 \\(\\mathrm{A\\,m^{-1}}\\)，乘起来才是 \\(\\mathrm{T}\\)。 · Check units: \\(\\mu_0\\) and \\(\\mu\\) have units \\(\\mathrm{T\\,m\\,A^{-1}}\\), \\(H\\) has units \\(\\mathrm{A\\,m^{-1}}\\), and their product gives \\(\\mathrm{T}\\)."
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
        "chapterId": "em-u12",
        "code": "12.5",
        "title": "磁偶极与磁性材料 · Magnetic Dipoles and Magnetic Materials",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.1",
        "title": "磁场 · Magnetic Fields",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.4",
        "title": "电感 · Inductance",
        "relation": "后续 · downstream"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子 · Charged particles in magnetic fields"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：12.4 的安培定律给出 \\(H=nI\\) 等外场；12.5 的磁偶极与磁畴解释材料为何能被磁化。 · Upstream: 12.4's Ampère law gives applied fields such as \\(H=nI\\); 12.5's dipoles and domains explain why a material can be magnetized.",
      "下游：13.4 的电感与磁能存储依赖磁芯的 \\(\\mu\\)；变压器和电磁铁设计要同时考虑 \\(\\mu_r\\)、饱和与磁滞损耗。 · Downstream: 13.4's inductance and magnetic energy storage depend on the core's \\(\\mu\\); transformer and electromagnet design must consider \\(\\mu_r\\), saturation, and hysteresis loss together.",
      "跨学科：磁记录材料利用磁滞保存信息；磁屏蔽利用高 \\(\\mu\\) 材料引导磁通；地质学家用岩石磁化研究古地磁场。 · Cross-disciplinary: magnetic recording media use hysteresis to store information, magnetic shielding uses high-\\(\\mu\\) materials to guide flux, and geologists study rock magnetization to reconstruct ancient fields."
    ],
    "intuitionDetailed": "磁导率是“材料把外场变成内部磁场的效率”。真空里 \\(B=\\mu_0H\\)；材料里电子轨道和自旋形成小磁偶极，外场使它们部分或全部转向，额外贡献磁化强度 \\(M\\)，于是 \\(B=\\mu_0(H+M)\\)。线性材料中 \\(M\\) 与 \\(H\\) 成正比，比例系数是 \\(\\chi_m\\)，所以 \\(\\mu_r=1+\\chi_m\\)。顺磁材料只有极弱的同向排列，\\(\\mu_r\\) 只比 1 大一点点；抗磁材料感生出反向磁矩，\\(\\mu_r\\) 只比 1 小一点点；铁磁材料中磁畴可以被外场强烈对齐，\\(\\mu_r\\) 可以很大，但磁畴不可能无限转向：当所有磁畴都对齐时，材料饱和，\\(\\mu_r\\) 下降。温度升高使热运动与偶极排列竞争，超过居里温度后磁畴消失，铁磁体退化为顺磁体。晶体方向决定“容易磁化”的方向，因此同一材料沿不同方向测得的 \\(\\mu\\) 可能不同。磁滞则说明 \\(B\\) 不仅取决于当前的 \\(H\\)，还取决于材料之前经历了什么。 · Permeability is the efficiency with which a material turns an applied field into an internal field. In vacuum \\(B=\\mu_0H\\); in matter, electron orbits and spins form tiny dipoles, and the applied field turns them partly or fully, adding a magnetization \\(M\\), so \\(B=\\mu_0(H+M)\\). In a linear material \\(M\\) is proportional to \\(H\\) with coefficient \\(\\chi_m\\), so \\(\\mu_r=1+\\chi_m\\). A paramagnet has only a very weak parallel alignment, so \\(\\mu_r\\) is only slightly above 1; a diamagnet acquires an opposite induced moment, so \\(\\mu_r\\) is only slightly below 1; a ferromagnet's domains can be strongly aligned, so \\(\\mu_r\\) can be large, but the domains cannot turn forever: when all are aligned the material saturates and \\(\\mu_r\\) drops. Higher temperature makes thermal motion compete with dipole alignment, and above the Curie temperature the domains disappear and the ferromagnet becomes paramagnetic. Crystal orientation determines “easy” magnetization directions, so the same material can have different \\(\\mu\\) along different directions. Hysteresis means \\(B\\) depends not only on the present \\(H\\) but also on what the material experienced before.",
    "development": [
      "从安培定律引入 \\(H\\)，并用理想螺线管得到 \\(H=nI\\)。 · Introduce \\(H\\) from Ampère's law and obtain \\(H=nI\\) for an ideal solenoid.",
      "把材料看成磁偶极集合，定义磁化强度 \\(M\\)，写出 \\(B=\\mu_0(H+M)\\)。 · Treat the material as a collection of magnetic dipoles, define the magnetization \\(M\\), and write \\(B=\\mu_0(H+M)\\).",
      "对线性材料引入 \\(\\chi_m\\) 与 \\(\\mu_r\\)，得到 \\(B=\\mu_r\\mu_0H\\)。 · For a linear material introduce \\(\\chi_m\\) and \\(\\mu_r\\), obtaining \\(B=\\mu_r\\mu_0H\\).",
      "用磁畴模型解释铁磁材料的非线性、饱和与磁滞，并画 \\(B\\)–\\(H\\) 草图。 · Use the domain model to explain nonlinearity, saturation, and hysteresis in ferromagnets, and sketch a \\(B\\)–\\(H\\) curve.",
      "讨论温度、方向、频率和应力对 \\(\\mu\\) 的影响，并用居里温度解释铁磁—顺磁转变。 · Discuss how temperature, orientation, frequency, and stress affect \\(\\mu\\), and use the Curie temperature to explain the ferromagnetic-to-paramagnetic transition.",
      "把 \\(\\mu\\) 应用到螺线管磁芯、变压器和磁屏蔽，比较空气芯与磁芯的 \\(B\\)。 · Apply \\(\\mu\\) to solenoid cores, transformers, and magnetic shielding, comparing air-core and magnetic-core fields."
    ],
    "checks": [
      "为什么 \\(\\mu_r\\) 没有单位而 \\(\\mu\\) 有单位？它们的单位关系是什么？ · Why is \\(\\mu_r\\) dimensionless while \\(\\mu\\) has units? What is the unit relation?",
      "顺磁、抗磁、铁磁材料的 \\(\\mu_r\\) 分别略大于 1、略小于 1 还是远大于 1？ · For paramagnetic, diamagnetic, and ferromagnetic materials, is \\(\\mu_r\\) slightly above 1, slightly below 1, or far above 1?",
      "为什么铁磁材料的 \\(B\\)–\\(H\\) 曲线会弯曲并最终变平？ · Why does a ferromagnet's \\(B\\)–\\(H\\) curve bend and eventually flatten?",
      "一块磁铁被加热到居里温度以上，它的磁导率和磁性会怎样变化？ · What happens to a magnet's permeability and magnetism when it is heated above the Curie temperature?",
      "软磁和硬磁材料的磁滞回线有什么不同？各自适合什么应用？ · How do the hysteresis loops of soft and hard magnetic materials differ, and what applications suit each?",
      "如果磁芯已经饱和，继续增大螺线管电流，\\(B\\) 会怎样变化？还能用 \\(B=\\mu_r\\mu_0nI\\) 吗？ · If the core is already saturated, how does \\(B\\) change as the solenoid current continues to increase? Can \\(B=\\mu_r\\mu_0nI\\) still be used?"
    ],
    "vocabulary": [
      {
        "termZh": "磁导率",
        "termEn": "magnetic permeability",
        "defZh": "描述材料对外加磁场产生磁化响应强弱的物理量，线性材料中 \\(\\mu=\\dfrac{B}{H}\\)。",
        "defEn": "A quantity describing how strongly a material magnetizes in response to an applied field; for a linear material, \\(\\mu=\\dfrac{B}{H}\\)."
      },
      {
        "termZh": "真空磁导率",
        "termEn": "permeability of free space",
        "defZh": "真空中的磁导率 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)。",
        "defEn": "The permeability of vacuum, \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)."
      },
      {
        "termZh": "相对磁导率",
        "termEn": "relative permeability",
        "defZh": "无量纲比值 \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\)，真空为 1。",
        "defEn": "The dimensionless ratio \\(\\mu_r=\\dfrac{\\mu}{\\mu_0}\\), equal to 1 in vacuum."
      },
      {
        "termZh": "磁化强度",
        "termEn": "magnetization",
        "defZh": "单位体积内的磁偶极矩，记作 \\(\\vec M\\)。",
        "defEn": "The magnetic dipole moment per unit volume, denoted \\(\\vec M\\)."
      },
      {
        "termZh": "磁化率",
        "termEn": "magnetic susceptibility",
        "defZh": "线性材料中 \\(\\vec M=\\chi_m\\vec H\\) 的比例系数，且 \\(\\chi_m=\\mu_r-1\\)。",
        "defEn": "The proportionality constant in \\(\\vec M=\\chi_m\\vec H\\) for a linear material; \\(\\chi_m=\\mu_r-1\\)."
      },
      {
        "termZh": "磁饱和",
        "termEn": "magnetic saturation",
        "defZh": "铁磁材料中磁畴几乎全部对齐、磁化强度不再随外场显著增加的状态。",
        "defEn": "The state in a ferromagnet where nearly all domains are aligned and the magnetization no longer increases significantly with the applied field."
      },
      {
        "termZh": "磁滞",
        "termEn": "magnetic hysteresis",
        "defZh": "磁感应强度 \\(B\\) 落后于外加场 \\(H\\)、其值依赖磁化历史的现象。",
        "defEn": "The phenomenon in which the magnetic field \\(B\\) lags the applied field \\(H\\) and depends on the magnetization history."
      },
      {
        "termZh": "居里温度",
        "termEn": "Curie temperature",
        "defZh": "铁磁材料失去磁畴有序、转变为顺磁体的临界温度。",
        "defEn": "The critical temperature above which a ferromagnetic material loses domain order and becomes paramagnetic."
      }
    ]
  },
  "12.7": {
    "id": "em/em-u12/12.7",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.7",
    "titleZh": "运动电荷产生的磁场",
    "titleEn": "Magnetic Field of a Moving Charge",
    "layer": "ap",
    "summary": "单个运动电荷在空间产生磁场 \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\)：大小与 \\(|q|\\)、\\(v\\)、\\(\\sin\\theta\\) 成正比，与 \\(r^{2}\\) 成反比；方向由 \\(q\\vec v\\times\\hat r\\) 的右手定则确定；场线是绕速度轴的同心圆，多个电荷的磁场按矢量叠加。 · A single moving charge produces \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\): the magnitude scales with \\(|q|\\), \\(v\\), and \\(\\sin\\theta\\) and falls as \\(r^{2}\\); the direction follows the right-hand rule for \\(q\\vec v\\times\\hat r\\); the field lines are circles about the velocity axis; and the fields of multiple charges add as vectors.",
    "learningObjectives": [
      "能写出单个运动电荷产生磁场的矢量式，并说明 \\(\\hat r\\) 从源电荷指向场点。 · Write the vector expression for the magnetic field of a single moving charge and explain that \\(\\hat r\\) points from the source charge to the field point.",
      "能计算 \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}\\) 并判断方向：正电荷沿 \\(\\vec v\\times\\hat r\\)，负电荷反向。 · Calculate \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}\\) and determine the direction: along \\(\\vec v\\times\\hat r\\) for a positive charge and opposite for a negative charge.",
      "能说明 \\(B\\) 对 \\(q\\)、\\(v\\)、\\(r\\)、\\(\\theta\\) 的依赖，并做比例推理（如 \\(r\\) 加倍则 \\(B\\) 变为四分之一）。 · Explain how \\(B\\) depends on \\(q\\), \\(v\\), \\(r\\), and \\(\\theta\\), and do proportional reasoning such as quartering \\(B\\) when \\(r\\) doubles.",
      "能说明运动电荷的磁感线是绕速度轴的同心圆，磁场没有沿速度方向或径向的分量。 · Explain that the field lines of a moving charge are circles about the velocity axis, with no component along the velocity or along the radial direction.",
      "能把多个运动电荷的磁场矢量叠加，并说明电流的磁场是大量运动电荷磁场的宏观结果。 · Superpose the fields of multiple moving charges and explain that the field of a current is the macroscopic result of many moving charges.",
      "能区分运动电荷的电场与磁场，并说明公式在 \\(v\\ll c\\) 时适用。 · Distinguish the electric and magnetic fields of a moving charge and state that the formula applies for \\(v\\ll c\\)."
    ],
    "essentialKnowledge": [
      "静止电荷只产生电场；运动电荷同时产生电场和磁场。单个运动电荷的磁场由 \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\) 给出，其中 \\(\\hat r\\) 从电荷指向场点。 · A charge at rest produces only an electric field; a moving charge produces both an electric and a magnetic field. The field of a single moving charge is \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\), where \\(\\hat r\\) points from the charge to the field point.",
      "磁场大小 \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}\\)，\\(\\theta\\) 是 \\(\\vec v\\) 与 \\(\\hat r\\) 的夹角；\\(\\dfrac{\\mu_0}{4\\pi}=1.0\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)。 · The magnitude is \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}\\), where \\(\\theta\\) is the angle between \\(\\vec v\\) and \\(\\hat r\\), and \\(\\dfrac{\\mu_0}{4\\pi}=1.0\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\).",
      "方向：正电荷的 \\(\\vec B\\) 沿 \\(\\vec v\\times\\hat r\\)；负电荷反向。右手四指从 \\(\\vec v\\) 转向 \\(\\hat r\\)，拇指给出正电荷的 \\(\\vec B\\) 方向。 · Direction: for a positive charge \\(\\vec B\\) is along \\(\\vec v\\times\\hat r\\); for a negative charge it is reversed. Curl the right fingers from \\(\\vec v\\) toward \\(\\hat r\\), and the thumb gives the direction for a positive charge.",
      "因为 \\(\\vec B\\) 同时垂直于 \\(\\vec v\\) 和 \\(\\hat r\\)，磁感线是绕速度轴的同心圆；在包含速度轴的平面内没有磁场分量，\\(\\vec B\\) 也没有沿 \\(\\vec v\\) 的分量。 · Because \\(\\vec B\\) is perpendicular to both \\(\\vec v\\) and \\(\\hat r\\), the field lines are circles about the velocity axis; there is no field component in any plane containing the velocity axis and no component along \\(\\vec v\\).",
      "当场点位于速度轴上（\\(\\theta=0\\) 或 \\(180^\\circ\\)）时 \\(\\sin\\theta=0\\)，该点的磁场为零；\\(\\theta=90^\\circ\\) 时磁场最大。 · On the velocity axis (\\(\\theta=0\\) or \\(180^\\circ\\)), \\(\\sin\\theta=0\\) and the field is zero; the field is maximum at \\(\\theta=90^\\circ\\).",
      "比例关系：\\(B\\propto|q|\\)、\\(B\\propto v\\)、\\(B\\propto\\sin\\theta\\)、\\(B\\propto\\dfrac{1}{r^{2}}\\)。电荷或速率加倍则 \\(B\\) 加倍；距离加倍则 \\(B\\) 变为四分之一。 · Proportionality: \\(B\\propto|q|\\), \\(B\\propto v\\), \\(B\\propto\\sin\\theta\\), and \\(B\\propto\\dfrac{1}{r^{2}}\\). Doubling the charge or speed doubles \\(B\\); doubling the distance quarters \\(B\\).",
      "多个运动电荷同时存在时，总磁场是各电荷磁场的矢量和 \\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\)；每个电荷的场按上式独立计算。 · With several moving charges, the total field is the vector sum \\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\); each charge's field is computed independently from the expression above.",
      "导线中的电流是大量电荷的定向运动；把每个运动电荷的磁场叠加，就得到电流元的毕奥–萨伐尔定律和长直导线的 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)。 · A current in a wire is the directed motion of many charges; superposing their fields gives the Biot–Savart law for a current element and the long-wire result \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\).",
      "运动电荷同时有电场 \\(\\vec E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q\\hat r}{r^{2}}\\)；在非相对论极限下，磁场与电场的大小之比约为 \\(\\dfrac{v\\sin\\theta}{c^{2}}\\)（\\(c\\) 为光速），所以低速时磁场通常比电场弱得多。 · A moving charge also has an electric field \\(\\vec E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q\\hat r}{r^{2}}\\); in the nonrelativistic limit the ratio of the magnetic to electric field is about \\(\\dfrac{v\\sin\\theta}{c^{2}}\\) (with \\(c\\) the speed of light), so at low speed the magnetic field is usually much weaker than the electric field.",
      "公式适用于匀速运动的点电荷且 \\(v\\ll c\\)；加速电荷会辐射电磁波，磁场还包含辐射场，不能只用该式。 · The formula applies to a uniformly moving point charge with \\(v\\ll c\\); an accelerating charge radiates electromagnetic waves, and its field includes a radiation part not captured by this expression."
    ],
    "definition": "单个运动电荷产生的磁场由 \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\) 给出：\\(q\\) 为源电荷，\\(\\vec v\\) 为它的速度，\\(\\hat r\\) 从电荷指向场点，\\(r\\) 为两者距离。大小 \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}\\)，其中 \\(\\theta\\) 是 \\(\\vec v\\) 与 \\(\\hat r\\) 的夹角；方向由 \\(q\\vec v\\times\\hat r\\) 的右手定则确定，负电荷反向。磁场与电场同时存在，磁场是电荷运动产生的相对论效应；在低速极限下，场线是绕速度轴的同心圆。多个运动电荷的总磁场按矢量叠加。 · The magnetic field of a single moving charge is \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\), where \\(q\\) is the source charge, \\(\\vec v\\) its velocity, \\(\\hat r\\) the unit vector from the charge to the field point, and \\(r\\) their separation. The magnitude is \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}\\), where \\(\\theta\\) is the angle between \\(\\vec v\\) and \\(\\hat r\\); the direction follows the right-hand rule for \\(q\\vec v\\times\\hat r\\) and reverses for a negative charge. The magnetic field coexists with the electric field and is a relativistic effect of charge motion; in the low-speed limit its field lines are circles about the velocity axis. The total field of several moving charges is a vector sum.",
    "intuition": "把运动电荷想成一支“会扫出磁场的小箭头”：它跑得越快、电荷越大，扫出的磁场越强；场点越远，磁场按平方反比迅速减弱。磁场不沿速度方向，也不沿连线方向，而是同时垂直于两者，像围绕速度轴的一圈圈同心圆。正电荷和负电荷扫出的圆圈绕行方向相反。 · Think of a moving charge as a little arrow that sweeps out a magnetic field: the faster it moves and the larger its charge, the stronger the field; the farther the field point, the faster the field falls off as an inverse square. The field is neither along the velocity nor along the line of sight but perpendicular to both, like concentric circles around the velocity axis. Positive and negative charges sweep the circles in opposite senses.",
    "formulas": [
      {
        "latex": "\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}",
        "note": "单个运动电荷的磁场矢量式；\\(\\hat r\\) 从源电荷指向场点。 · Vector magnetic field of a single moving charge; \\(\\hat r\\) points from the source charge to the field point."
      },
      {
        "latex": "B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}",
        "note": "磁场大小；\\(\\theta\\) 为 \\(\\vec v\\) 与 \\(\\hat r\\) 的夹角。 · Field magnitude; \\(\\theta\\) is the angle between \\(\\vec v\\) and \\(\\hat r\\)."
      },
      {
        "latex": "\\dfrac{\\mu_0}{4\\pi}=1.0\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}",
        "note": "真空中的比例常数。 · Proportionality constant in vacuum."
      },
      {
        "latex": "\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i",
        "note": "多个运动电荷的磁场按矢量叠加。 · Fields of multiple moving charges add as vectors."
      },
      {
        "latex": "\\vec E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q\\hat r}{r^{2}}",
        "note": "同一运动电荷的电场；方向沿 \\(\\hat r\\)（正电荷）。 · Electric field of the same moving charge; along \\(\\hat r\\) for a positive charge."
      },
      {
        "latex": "\\dfrac{B}{E}=\\dfrac{v\\sin\\theta}{c^{2}}",
        "note": "非相对论极限下磁场与电场的大小之比。 · Ratio of the magnetic to electric field in the nonrelativistic limit."
      },
      {
        "latex": "B=\\dfrac{\\mu_0I}{2\\pi r}",
        "note": "大量运动电荷沿长直导线定向运动时的宏观结果。 · Macroscopic result when many moving charges drift along a long straight wire."
      }
    ],
    "derivationNotes": [
      {
        "from": "实验事实 · Experimental facts",
        "to": "磁场大小 · Field magnitude",
        "note": "运动电荷的磁场与 \\(q\\)、\\(v\\)、\\(\\sin\\theta\\) 成正比、与 \\(r^{2}\\) 成反比；方向垂直于 \\(\\vec v\\) 与 \\(\\hat r\\)。 · The field of a moving charge is proportional to \\(q\\), \\(v\\), and \\(\\sin\\theta\\) and inversely proportional to \\(r^{2}\\); its direction is perpendicular to \\(\\vec v\\) and \\(\\hat r\\)."
      },
      {
        "from": "叉积 · Cross product",
        "to": "方向 · Direction",
        "note": "\\(\\vec v\\times\\hat r\\) 同时垂直于速度和连线；右手四指从 \\(\\vec v\\) 转向 \\(\\hat r\\)，拇指给出正电荷的 \\(\\vec B\\)。 · \\(\\vec v\\times\\hat r\\) is perpendicular to both the velocity and the line of sight; curl the right fingers from \\(\\vec v\\) to \\(\\hat r\\) and the thumb gives \\(\\vec B\\) for a positive charge."
      },
      {
        "from": "单个运动电荷 · Single moving charge",
        "to": "电流元 · Current element",
        "note": "把 \\(q\\vec v\\) 换成 \\(I\\,\\mathrm{d}\\vec\\ell\\)，对导线中大量载流子求和，得到毕奥–萨伐尔定律。 · Replace \\(q\\vec v\\) by \\(I\\,\\mathrm{d}\\vec\\ell\\) and sum over the many carriers in a wire to obtain the Biot–Savart law."
      },
      {
        "from": "叠加原理 · Superposition",
        "to": "多电荷/电流 · Multiple charges or currents",
        "note": "各电荷的磁场独立计算后矢量相加；电流的磁场是这些微观磁场的宏观平均。 · Compute each charge's field independently and add the vectors; the magnetic field of a current is the macroscopic average of these microscopic fields."
      },
      {
        "from": "匀速运动 · Uniform motion",
        "to": "同心圆场线 · Concentric field lines",
        "note": "\\(\\vec B\\) 同时垂直于 \\(\\vec v\\) 与 \\(\\hat r\\)，所以场线绕速度轴闭合，没有径向或沿速度的分量。 · Because \\(\\vec B\\) is perpendicular to both \\(\\vec v\\) and \\(\\hat r\\), the field lines close around the velocity axis and have no radial or along-velocity component."
      },
      {
        "from": "非相对论极限 · Nonrelativistic limit",
        "to": "适用条件 · Validity",
        "note": "\\(v\\ll c\\) 时可忽略辐射场；加速电荷会辐射电磁波，磁场还包含辐射项。 · For \\(v\\ll c\\) the radiation field is negligible; an accelerating charge radiates electromagnetic waves and its field includes a radiation term."
      }
    ],
    "conditions": [
      "源电荷可视为点电荷，观察点不在电荷上（\\(r>0\\)）。 · The source charge can be treated as a point charge, and the observation point is not on the charge (\\(r>0\\)).",
      "源电荷匀速运动，且 \\(v\\ll c\\)；加速电荷需包含辐射场。 · The source charge moves uniformly with \\(v\\ll c\\); an accelerating charge requires the radiation field.",
      "真空或线性磁介质；介质中把 \\(\\mu_0\\) 换成 \\(\\mu=\\mu_r\\mu_0\\)。 · Vacuum or a linear magnetic medium; in a medium replace \\(\\mu_0\\) by \\(\\mu=\\mu_r\\mu_0\\).",
      "多个电荷同时存在时，各磁场按矢量叠加；非线性介质中叠加失效。 · With several charges, their fields add as vectors; superposition fails in a nonlinear medium.",
      "\\(\\theta\\) 是 \\(\\vec v\\) 与 \\(\\hat r\\) 的夹角，\\(\\hat r\\) 必须从源电荷指向场点。 · \\(\\theta\\) is the angle between \\(\\vec v\\) and \\(\\hat r\\), and \\(\\hat r\\) must point from the source charge to the field point.",
      "磁场方向按正电荷判断；负电荷取反。 · Determine the direction for a positive charge; reverse it for a negative charge."
    ],
    "keyPoints": [
      "静止电荷只有电场；运动电荷同时有电场和磁场。 · A charge at rest has only an electric field; a moving charge has both an electric and a magnetic field.",
      "单个运动电荷的磁场 \\(B\\propto\\dfrac{|q|v\\sin\\theta}{r^{2}}\\)。 · The field of a single moving charge is \\(B\\propto\\dfrac{|q|v\\sin\\theta}{r^{2}}\\).",
      "方向沿 \\(q\\vec v\\times\\hat r\\)：正电荷用右手定则，负电荷反向。 · The direction is along \\(q\\vec v\\times\\hat r\\): right-hand rule for a positive charge, reversed for a negative charge.",
      "场线是绕速度轴的同心圆，没有沿速度或径向的分量。 · The field lines are circles about the velocity axis, with no along-velocity or radial component.",
      "轴线上（\\(\\theta=0\\) 或 \\(180^\\circ\\)）磁场为零；\\(\\theta=90^\\circ\\) 时最大。 · The field is zero on the velocity axis (\\(\\theta=0\\) or \\(180^\\circ\\)) and maximum at \\(\\theta=90^\\circ\\).",
      "距离加倍，\\(B\\) 变为四分之一；电荷或速率加倍，\\(B\\) 加倍。 · Doubling the distance quarters \\(B\\); doubling the charge or speed doubles \\(B\\).",
      "多个运动电荷的磁场按矢量叠加；电流的磁场是大量载流子磁场的宏观结果。 · Fields of multiple moving charges add as vectors; a current's field is the macroscopic result of many carriers.",
      "低速条件 \\(v\\ll c\\)；加速电荷辐射电磁波。 · The low-speed condition is \\(v\\ll c\\); an accelerating charge radiates electromagnetic waves."
    ],
    "misconceptions": [
      "认为静止电荷也产生磁场；静止电荷只有电场。 · Believing a charge at rest produces a magnetic field; a charge at rest has only an electric field.",
      "把 \\(\\vec B\\) 画成沿 \\(\\vec v\\) 或沿 \\(\\hat r\\) 的方向；\\(\\vec B\\) 同时垂直于两者。 · Drawing \\(\\vec B\\) along \\(\\vec v\\) or along \\(\\hat r\\); \\(\\vec B\\) is perpendicular to both.",
      "误以为单个运动电荷的磁场按 \\(\\dfrac{1}{r}\\) 衰减；点电荷磁场按 \\(\\dfrac{1}{r^{2}}\\) 衰减（长直导线的 \\(\\dfrac{1}{r}\\) 是许多电荷叠加的结果）。 · Mistaking the point-charge field to fall as \\(\\dfrac{1}{r}\\); it falls as \\(\\dfrac{1}{r^{2}}\\) (the \\(\\dfrac{1}{r}\\) of a long wire comes from superposing many charges).",
      "距离加倍时把 \\(B\\) 减半；正确结果是变为四分之一。 · Halving \\(B\\) when the distance doubles; the correct factor is one quarter.",
      "对负电荷用完右手定则后忘记反向。 · Forgetting to reverse the right-hand-rule result for a negative charge.",
      "把 \\(\\theta\\) 当成 \\(\\vec v\\) 与 \\(\\vec B\\) 的夹角；\\(\\theta\\) 是 \\(\\vec v\\) 与 \\(\\hat r\\) 的夹角。 · Treating \\(\\theta\\) as the angle between \\(\\vec v\\) and \\(\\vec B\\); it is the angle between \\(\\vec v\\) and \\(\\hat r\\).",
      "认为运动电荷只有磁场、没有电场；运动电荷同时带有电场。 · Believing a moving charge has only a magnetic field and no electric field; it has both.",
      "把多个电荷的磁场大小直接相加而不看方向；叠加是矢量叠加。 · Adding the magnitudes of several charges' fields without regard to direction; superposition is vector addition.",
      "把单个匀速电荷的公式用于任意加速运动；加速电荷的场还包含辐射项。 · Applying the uniform-motion formula to arbitrary acceleration; an accelerating charge's field also includes radiation."
    ],
    "examples": [
      {
        "title": "例 1 · 质子的磁场 · Example 1: Field of a proton",
        "prompt": "一个质子沿 \\(+x\\) 方向以 \\(v=2.0\\times10^{6}\\,\\mathrm{m\\,s^{-1}}\\) 运动。求在质子上方 \\(r=0.010\\,\\mathrm{m}\\) 处（\\(+y\\) 方向）的磁场大小和方向。 · A proton moves along \\(+x\\) with \\(v=2.0\\times10^{6}\\,\\mathrm{m\\,s^{-1}}\\). Find the magnetic field magnitude and direction \\(r=0.010\\,\\mathrm{m}\\) above it (along \\(+y\\)).",
        "steps": [
          "质子电荷 \\(q=1.6\\times10^{-19}\\,\\mathrm{C}\\)，\\(\\theta=90^\\circ\\)。 · For a proton \\(q=1.6\\times10^{-19}\\,\\mathrm{C}\\) and \\(\\theta=90^\\circ\\).",
          "\\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{qv}{r^{2}}=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(2.0\\times10^{6})}{(0.010)^{2}}\\)。 · \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{qv}{r^{2}}=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(2.0\\times10^{6})}{(0.010)^{2}}\\).",
          "\\(B=3.2\\times10^{-16}\\,\\mathrm{T}\\)。 · \\(B=3.2\\times10^{-16}\\,\\mathrm{T}\\).",
          "\\(\\vec v=+x\\)，\\(\\hat r=+y\\)，\\(\\vec v\\times\\hat r=+z\\)，所以 \\(\\vec B\\) 沿 \\(+z\\)（垂直纸面向外）。 · \\(\\vec v=+x\\), \\(\\hat r=+y\\), \\(\\vec v\\times\\hat r=+z\\), so \\(\\vec B\\) points along \\(+z\\) (out of the page)."
        ],
        "solution": "\\(B\\approx3.2\\times10^{-16}\\,\\mathrm{T}\\)，沿 \\(+z\\) 方向。 · \\(B\\approx3.2\\times10^{-16}\\,\\mathrm{T}\\), along \\(+z\\).",
        "solutionLatex": "B=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(2.0\\times10^{6})}{(0.010)^{2}}=3.2\\times10^{-16}\\,\\mathrm{T}"
      },
      {
        "title": "例 2 · 电子的磁场 · Example 2: Field of an electron",
        "prompt": "一个电子沿 \\(+x\\) 方向以 \\(v=1.5\\times10^{7}\\,\\mathrm{m\\,s^{-1}}\\) 运动。场点 \\(P\\) 到电子的距离为 \\(r=0.020\\,\\mathrm{m}\\)，\\(\\vec v\\) 与 \\(\\hat r\\) 的夹角为 \\(60^\\circ\\)，且 \\(\\hat r\\) 在 \\(xy\\) 平面内。求 \\(P\\) 点磁场的大小和方向。 · An electron moves along \\(+x\\) with \\(v=1.5\\times10^{7}\\,\\mathrm{m\\,s^{-1}}\\). Field point \\(P\\) is a distance \\(r=0.020\\,\\mathrm{m}\\) away, the angle between \\(\\vec v\\) and \\(\\hat r\\) is \\(60^\\circ\\), and \\(\\hat r\\) lies in the \\(xy\\) plane. Find the field magnitude and direction at \\(P\\).",
        "steps": [
          "\\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(1.5\\times10^{7})(0.866)}{(0.020)^{2}}\\)。 · \\(B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{|q|v\\sin\\theta}{r^{2}}=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(1.5\\times10^{7})(0.866)}{(0.020)^{2}}\\).",
          "\\(B=5.2\\times10^{-16}\\,\\mathrm{T}\\)。 · \\(B=5.2\\times10^{-16}\\,\\mathrm{T}\\).",
          "\\(\\vec v=+x\\)，\\(\\hat r\\) 在 \\(xy\\) 平面内从 \\(+x\\) 向上转 \\(60^\\circ\\)，所以 \\(\\vec v\\times\\hat r\\) 沿 \\(+z\\)。 · \\(\\vec v=+x\\) and \\(\\hat r\\) is rotated \\(60^\\circ\\) upward from \\(+x\\) in the \\(xy\\) plane, so \\(\\vec v\\times\\hat r\\) points along \\(+z\\).",
          "电子带负电，磁场方向与 \\(\\vec v\\times\\hat r\\) 相反，即沿 \\(-z\\)（垂直纸面向里）。 · The electron is negative, so the field is opposite to \\(\\vec v\\times\\hat r\\), i.e., along \\(-z\\) (into the page)."
        ],
        "solution": "\\(B\\approx5.2\\times10^{-16}\\,\\mathrm{T}\\)，沿 \\(-z\\) 方向。 · \\(B\\approx5.2\\times10^{-16}\\,\\mathrm{T}\\), along \\(-z\\).",
        "solutionLatex": "B=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(1.5\\times10^{7})(0.866)}{(0.020)^{2}}=5.2\\times10^{-16}\\,\\mathrm{T}"
      },
      {
        "title": "例 3 · 比例推理 · Example 3: Proportional reasoning",
        "prompt": "某运动电荷在 \\(\\theta=90^\\circ\\) 的场点产生 \\(B=8.0\\times10^{-6}\\,\\mathrm{T}\\)。求下列改变后的磁场：(a) 速率变为 2 倍；(b) 距离变为 2 倍；(c) 电荷变为 2 倍且距离变为 3 倍；(d) \\(\\theta\\) 从 \\(90^\\circ\\) 变为 \\(30^\\circ\\)。 · A moving charge produces \\(B=8.0\\times10^{-6}\\,\\mathrm{T}\\) at a field point with \\(\\theta=90^\\circ\\). Find the new field when (a) the speed doubles; (b) the distance doubles; (c) the charge doubles and the distance triples; (d) \\(\\theta\\) changes from \\(90^\\circ\\) to \\(30^\\circ\\).",
        "steps": [
          "\\(B\\propto\\dfrac{|q|v\\sin\\theta}{r^{2}}\\)。 · \\(B\\propto\\dfrac{|q|v\\sin\\theta}{r^{2}}\\).",
          "(a) \\(B'=2B=1.6\\times10^{-5}\\,\\mathrm{T}\\)。 · (a) \\(B'=2B=1.6\\times10^{-5}\\,\\mathrm{T}\\).",
          "(b) \\(B'=\\dfrac{B}{4}=2.0\\times10^{-6}\\,\\mathrm{T}\\)。 · (b) \\(B'=\\dfrac{B}{4}=2.0\\times10^{-6}\\,\\mathrm{T}\\).",
          "(c) \\(B'=B\\times\\dfrac{2}{9}=1.8\\times10^{-6}\\,\\mathrm{T}\\)。 · (c) \\(B'=B\\times\\dfrac{2}{9}=1.8\\times10^{-6}\\,\\mathrm{T}\\).",
          "(d) \\(\\sin30^\\circ=0.5\\)，所以 \\(B'=0.5B=4.0\\times10^{-6}\\,\\mathrm{T}\\)。 · (d) \\(\\sin30^\\circ=0.5\\), so \\(B'=0.5B=4.0\\times10^{-6}\\,\\mathrm{T}\\)."
        ],
        "solution": "(a) \\(1.6\\times10^{-5}\\,\\mathrm{T}\\)；(b) \\(2.0\\times10^{-6}\\,\\mathrm{T}\\)；(c) \\(1.8\\times10^{-6}\\,\\mathrm{T}\\)；(d) \\(4.0\\times10^{-6}\\,\\mathrm{T}\\)。 · (a) \\(1.6\\times10^{-5}\\,\\mathrm{T}\\); (b) \\(2.0\\times10^{-6}\\,\\mathrm{T}\\); (c) \\(1.8\\times10^{-6}\\,\\mathrm{T}\\); (d) \\(4.0\\times10^{-6}\\,\\mathrm{T}\\).",
        "solutionLatex": "B'=B\\times\\dfrac{2}{9}=1.8\\times10^{-6}\\,\\mathrm{T}\\quad\\text{(part c)}"
      },
      {
        "title": "例 4 · 两个运动电荷的叠加 · Example 4: Superposition of two moving charges",
        "prompt": "两个质子都沿 \\(+x\\) 方向以 \\(v=1.0\\times10^{6}\\,\\mathrm{m\\,s^{-1}}\\) 运动，它们沿 \\(y\\) 方向相距 \\(0.020\\,\\mathrm{m}\\)。求两质子连线中点处的合磁场。若把其中一个质子换成沿同一方向运动的电子，合磁场变为多少？ · Two protons move along \\(+x\\) with \\(v=1.0\\times10^{6}\\,\\mathrm{m\\,s^{-1}}\\) and are separated by \\(0.020\\,\\mathrm{m}\\) along \\(y\\). Find the net field at the midpoint of the line joining them. If one proton is replaced by an electron moving in the same direction, what is the net field?",
        "steps": [
          "中点到每个电荷的距离都是 \\(r=0.010\\,\\mathrm{m}\\)，且 \\(\\theta=90^\\circ\\)。 · The midpoint is \\(r=0.010\\,\\mathrm{m}\\) from each charge, with \\(\\theta=90^\\circ\\).",
          "每个质子在两质子中点产生的磁场大小 \\(B_1=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(1.0\\times10^{6})}{(0.010)^{2}}=1.6\\times10^{-16}\\,\\mathrm{T}\\)。 · Each proton produces \\(B_1=(1.0\\times10^{-7})\\dfrac{(1.6\\times10^{-19})(1.0\\times10^{6})}{(0.010)^{2}}=1.6\\times10^{-16}\\,\\mathrm{T}\\) at the midpoint.",
          "上方质子的 \\(\\hat r\\) 指向 \\(-y\\)，\\(\\vec v\\times\\hat r=+x\\times(-y)=-z\\)；下方质子的 \\(\\hat r\\) 指向 \\(+y\\)，\\(\\vec v\\times\\hat r=+x\\times(+y)=+z\\)。两场等大反向，所以中点合磁场为零。 · For the upper proton \\(\\hat r\\) points along \\(-y\\), so \\(\\vec v\\times\\hat r=+x\\times(-y)=-z\\); for the lower proton \\(\\hat r\\) points along \\(+y\\), so \\(\\vec v\\times\\hat r=+x\\times(+y)=+z\\). The fields are equal and opposite, so the net field at the midpoint is zero.",
          "若把下方质子换成电子，电子沿 \\(+x\\) 运动但带负电，其磁场方向与 \\(\\vec v\\times\\hat r\\) 相反，即沿 \\(-z\\)；与上方质子的 \\(-z\\) 场同向叠加，合磁场为 \\(2B_1=3.2\\times10^{-16}\\,\\mathrm{T}\\)，沿 \\(-z\\)。 · If the lower proton is replaced by an electron moving along \\(+x\\), its negative charge reverses the field relative to \\(\\vec v\\times\\hat r\\), giving \\(-z\\); this adds to the upper proton's \\(-z\\) field, so the net field is \\(2B_1=3.2\\times10^{-16}\\,\\mathrm{T}\\) along \\(-z\\)."
        ],
        "solution": "两质子：中点合磁场为零。一质子一电子：\\(3.2\\times10^{-16}\\,\\mathrm{T}\\)，沿 \\(-z\\)。 · Two protons: the net field at the midpoint is zero. One proton and one electron: \\(3.2\\times10^{-16}\\,\\mathrm{T}\\) along \\(-z\\).",
        "solutionLatex": "B_{\\mathrm{net}}=2(1.6\\times10^{-16})=3.2\\times10^{-16}\\,\\mathrm{T}\\quad\\text{(proton + electron)}"
      }
    ],
    "examTips": [
      "先画 \\(\\vec v\\) 和 \\(\\hat r\\)，并确认 \\(\\hat r\\) 从源电荷指向场点；不要画反。 · First draw \\(\\vec v\\) and \\(\\hat r\\), and confirm that \\(\\hat r\\) points from the source charge to the field point; do not reverse it.",
      "用右手从 \\(\\vec v\\) 转向 \\(\\hat r\\)，拇指给出正电荷的 \\(\\vec B\\)；负电荷再把方向反过来。 · Curl the right hand from \\(\\vec v\\) toward \\(\\hat r\\); the thumb gives \\(\\vec B\\) for a positive charge, and reverse it for a negative charge.",
      "\\(\\theta\\) 是 \\(\\vec v\\) 与 \\(\\hat r\\) 的夹角，不是 \\(\\vec v\\) 与 \\(\\vec B\\) 的夹角（\\(\\vec B\\) 与两者都垂直）。 · \\(\\theta\\) is the angle between \\(\\vec v\\) and \\(\\hat r\\), not between \\(\\vec v\\) and \\(\\vec B\\) (\\(\\vec B\\) is perpendicular to both).",
      "\\(B\\propto\\dfrac{1}{r^{2}}\\)：距离加倍，\\(B\\) 变为四分之一；不要把点电荷的平方反比与长直导线的 \\(\\dfrac{1}{r}\\) 混淆。 · \\(B\\propto\\dfrac{1}{r^{2}}\\): doubling the distance quarters \\(B\\); do not confuse the point-charge inverse square with the \\(\\dfrac{1}{r}\\) of a long wire.",
      "速度轴线上 \\(\\theta=0\\) 或 \\(180^\\circ\\)，\\(B=0\\)；垂直于速度的方向上 \\(B\\) 最大。 · On the velocity axis \\(\\theta=0\\) or \\(180^\\circ\\) and \\(B=0\\); perpendicular to the velocity, \\(B\\) is maximum.",
      "多个电荷先分别算 \\(\\vec B_i\\)，再矢量相加；不要直接加大小。 · For several charges, compute each \\(\\vec B_i\\) separately, then add vectors; do not add magnitudes directly.",
      "检查 \\(v\\ll c\\)；若题目涉及加速电荷或辐射，不能只用单个匀速电荷的公式。 · Check \\(v\\ll c\\); if the problem involves an accelerating charge or radiation, the single uniform-motion formula is not enough."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.1",
        "title": "磁场 · Magnetic Fields",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场 · Magnetism and Moving Charges",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.3",
        "title": "毕奥–萨伐尔定律 · Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.9",
        "title": "毕奥–萨伐尔积分与电流几何 · Biot–Savart Integration and Current Geometry",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.10",
        "title": "多电流磁场叠加 · Superposition of Magnetic Fields",
        "relation": "后续 · downstream"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子 · Charged particles in magnetic fields"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：12.1 的磁场定义与 12.2 的洛伦兹力给出描述语言；运动电荷的磁场是电流磁场的微观来源。 · Upstream: 12.1's field definition and 12.2's Lorentz force provide the language; the field of a moving charge is the microscopic origin of current magnetic fields.",
      "下游：把大量运动电荷叠加得到 12.3 的毕奥–萨伐尔定律和 12.9 的积分结果；12.10 用叠加原理处理多电流。 · Downstream: superposing many moving charges gives 12.3's Biot–Savart law and 12.9's integrated results; 12.10 applies superposition to multiple currents.",
      "跨学科：同步辐射、粒子加速器和等离子体中的磁场都源于运动电荷；阴极射线管用磁场偏转电子。 · Cross-disciplinary: synchrotron radiation, particle accelerators, and plasma magnetic fields all originate from moving charges; cathode-ray tubes deflect electrons with magnetic fields."
    ],
    "intuitionDetailed": "先抓住三件事：源、速度、场点。源电荷 \\(q\\) 和速度 \\(\\vec v\\) 决定“磁场源”的强弱和方向，场点相对源的位置 \\(\\hat r\\) 决定距离和夹角。把 \\(\\vec v\\) 与 \\(\\hat r\\) 画出来，右手四指从 \\(\\vec v\\) 转向 \\(\\hat r\\)，拇指就是正电荷的 \\(\\vec B\\)；负电荷反向。因为 \\(\\vec B\\) 同时垂直于 \\(\\vec v\\) 和 \\(\\hat r\\)，它绕着速度轴转圈，既不指向电荷也不沿着运动方向，所以场线是同心圆。距离加倍时，平方反比使 \\(B\\) 只剩四分之一；在速度轴上 \\(\\sin\\theta=0\\)，磁场为零；垂直于速度的方向上磁场最大。把许多运动电荷的磁场矢量相加，就得到导线电流的磁场；这也是毕奥–萨伐尔定律的微观来源。 · Focus on three things: the source, its velocity, and the field point. The source charge \\(q\\) and velocity \\(\\vec v\\) set the strength and orientation of the “magnetic source,” while the position \\(\\hat r\\) of the field point sets the distance and angle. Draw \\(\\vec v\\) and \\(\\hat r\\), curl the right fingers from \\(\\vec v\\) toward \\(\\hat r\\), and the thumb gives \\(\\vec B\\) for a positive charge; reverse it for a negative charge. Because \\(\\vec B\\) is perpendicular to both \\(\\vec v\\) and \\(\\hat r\\), it circles the velocity axis: it points neither toward the charge nor along the motion, so the field lines are concentric circles. Doubling the distance leaves only one quarter of \\(B\\) because of the inverse-square law; on the velocity axis \\(\\sin\\theta=0\\) and the field vanishes; perpendicular to the velocity the field is maximum. Adding the field vectors of many moving charges gives the field of a current, which is the microscopic origin of the Biot–Savart law.",
    "development": [
      "复习 12.1 的磁场定义与 12.2 的洛伦兹力，确认静止电荷只有电场、运动电荷才有磁场。 · Review the field definition in 12.1 and the Lorentz force in 12.2, confirming that a charge at rest has only an electric field while a moving charge has a magnetic field.",
      "写出 \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\)，在图上标出 \\(\\vec v\\)、\\(\\hat r\\) 和 \\(\\vec B\\) 三个矢量。 · Write \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\) and mark \\(\\vec v\\), \\(\\hat r\\), and \\(\\vec B\\) on a diagram.",
      "讨论 \\(B\\) 对 \\(q\\)、\\(v\\)、\\(r\\)、\\(\\theta\\) 的依赖，检查 \\(\\theta=0\\)、\\(90^\\circ\\)、\\(180^\\circ\\) 三个极限。 · Discuss how \\(B\\) depends on \\(q\\), \\(v\\), \\(r\\), and \\(\\theta\\), and check the limits \\(\\theta=0\\), \\(90^\\circ\\), and \\(180^\\circ\\).",
      "画出绕速度轴的同心圆场线，说明为什么没有径向和沿速度的分量。 · Draw the concentric field lines about the velocity axis and explain why there is no radial or along-velocity component.",
      "把多个运动电荷的磁场矢量相加，再过渡到电流元与毕奥–萨伐尔定律。 · Add the fields of several moving charges as vectors, then transition to the current element and the Biot–Savart law.",
      "说明 \\(v\\ll c\\) 的适用条件，并指出加速电荷会辐射。 · State the \\(v\\ll c\\) condition and note that an accelerating charge radiates."
    ],
    "checks": [
      "静止电荷产生磁场吗？运动电荷呢？ · Does a charge at rest produce a magnetic field? What about a moving charge?",
      "在 \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\) 中，\\(\\hat r\\) 从哪指向哪？ · In \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\), from where to where does \\(\\hat r\\) point?",
      "距离加倍时 \\(B\\) 如何变化？速度加倍呢？ · How does \\(B\\) change when the distance doubles? When the speed doubles?",
      "为什么速度轴上的磁场为零？ · Why is the field zero on the velocity axis?",
      "两个同向平行运动的正电荷在中点产生的磁场为什么可能相消？ · Why can the fields of two parallel positive charges moving in the same direction cancel at the midpoint?",
      "公式在什么速度条件下适用？加速电荷的磁场还缺什么？ · Under what speed condition does the formula apply? What is missing from the field of an accelerating charge?"
    ],
    "vocabulary": [
      {
        "termZh": "运动电荷的磁场",
        "termEn": "magnetic field of a moving charge",
        "defZh": "运动电荷在空间产生的磁场，由 \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\) 描述。",
        "defEn": "The magnetic field produced by a moving charge, described by \\(\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}\\)."
      },
      {
        "termZh": "源电荷",
        "termEn": "source charge",
        "defZh": "产生磁场的运动电荷，记作 \\(q\\)。",
        "defEn": "The moving charge that produces the field, denoted \\(q\\)."
      },
      {
        "termZh": "场点",
        "termEn": "field point",
        "defZh": "要计算磁场的空间位置；\\(\\hat r\\) 从源电荷指向场点。",
        "defEn": "The point in space where the field is evaluated; \\(\\hat r\\) points from the source charge to the field point."
      },
      {
        "termZh": "位置单位矢量",
        "termEn": "unit position vector",
        "defZh": "从源电荷指向场点的单位矢量 \\(\\hat r\\)。",
        "defEn": "The unit vector \\(\\hat r\\) from the source charge to the field point."
      },
      {
        "termZh": "右手定则",
        "termEn": "right-hand rule",
        "defZh": "四指从 \\(\\vec v\\) 转向 \\(\\hat r\\)，拇指给出正电荷的 \\(\\vec B\\) 方向。",
        "defEn": "Curl the right fingers from \\(\\vec v\\) toward \\(\\hat r\\); the thumb gives the direction of \\(\\vec B\\) for a positive charge."
      },
      {
        "termZh": "叠加原理",
        "termEn": "superposition principle",
        "defZh": "多个运动电荷的磁场按矢量相加得到总磁场。",
        "defEn": "The total field is the vector sum of the fields produced by individual moving charges."
      },
      {
        "termZh": "非相对论极限",
        "termEn": "nonrelativistic limit",
        "defZh": "源电荷速度远小于光速 \\(v\\ll c\\) 的近似。",
        "defEn": "The approximation in which the source speed is much less than the speed of light, \\(v\\ll c\\)."
      },
      {
        "termZh": "辐射场",
        "termEn": "radiation field",
        "defZh": "加速电荷发出的、随距离按 \\(\\dfrac{1}{r}\\) 衰减的磁场部分。",
        "defEn": "The part of the field emitted by an accelerating charge that falls off as \\(\\dfrac{1}{r}\\)."
      }
    ]
  },
  "12.8": {
    "id": "em/em-u12/12.8",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.8",
    "titleZh": "复合场与霍尔效应",
    "titleEn": "Crossed Fields and the Hall Effect",
    "layer": "ap",
    "summary": "电场与磁场同时存在时，电荷受相互独立的电场力 \\(q\\vec E\\) 与磁场力 \\(q\\vec v\\times\\vec B\\)，总洛伦兹力为两者矢量和；霍尔效应由磁场使载流子横向偏转、建立横向电场平衡，霍尔电压可判断载流子符号与密度。 · When electric and magnetic fields coexist, a charge experiences independent forces \\(q\\vec E\\) and \\(q\\vec v\\times\\vec B\\) whose vector sum is the Lorentz force; the Hall effect arises when a magnetic field deflects charge carriers sideways until a transverse electric field balances the magnetic force, and the Hall voltage reveals carrier sign and density.",
    "learningObjectives": [
      "能写出总洛伦兹力 \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\)，并说明电场力与磁场力为何相互独立、如何矢量叠加。 · Write the total Lorentz force \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\) and explain why the electric and magnetic forces are independent and how they add as vectors.",
      "能分析速度选择器：当 \\(qE=qvB\\) 时 \\(v=\\dfrac{E}{B}\\)，并说明该结果与电荷符号、质量无关。 · Analyze a velocity selector: when \\(qE=qvB\\), \\(v=\\dfrac{E}{B}\\), and explain why the result is independent of charge sign and mass.",
      "能描述霍尔效应的机制：磁场使载流子横向偏转、电荷积累、横向电场建立并最终与磁力平衡。 · Describe the Hall-effect mechanism: the magnetic field deflects carriers sideways, charge accumulates, a transverse field builds, and it eventually balances the magnetic force.",
      "能推导并使用 \\(V_H=\\dfrac{IB}{nqt}\\)，理解各量的几何意义，并用霍尔电压的符号判断载流子类型。 · Derive and use \\(V_H=\\dfrac{IB}{nqt}\\), understand the geometry of each quantity, and use the sign of the Hall voltage to identify the carrier type.",
      "能区分“磁场力不做功”与“霍尔电场力做功”的不同角色，并解释为什么稳定时横向没有净电流。 · Distinguish the roles of the magnetic force (which does no work) and the Hall electric force (which does work), and explain why there is no net transverse current in steady state."
    ],
    "essentialKnowledge": [
      "电场力 \\(\\vec F_E=q\\vec E\\) 与电荷速度无关，方向沿电场（正电荷）或逆电场（负电荷）；磁场力 \\(\\vec F_B=q\\vec v\\times\\vec B\\) 与速度有关，方向同时垂直于 \\(\\vec v\\) 与 \\(\\vec B\\)。 · The electric force \\(\\vec F_E=q\\vec E\\) is independent of speed and points along the field (positive charge) or opposite it (negative charge); the magnetic force \\(\\vec F_B=q\\vec v\\times\\vec B\\) depends on velocity and is perpendicular to both \\(\\vec v\\) and \\(\\vec B\\).",
      "在同一区域同时存在 \\(\\vec E\\) 与 \\(\\vec B\\) 时，两个场各自独立地作用于电荷，总力是矢量和 \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\)；一个场不会“抵消”另一个场本身，只会使合力在某条件下为零。 · When \\(\\vec E\\) and \\(\\vec B\\) exist in the same region, each field acts independently and the total force is the vector sum \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\); one field does not “cancel” the other, but the net force can be zero under a specific condition.",
      "速度选择器中 \\(\\vec E\\)、\\(\\vec B\\)、\\(\\vec v\\) 两两垂直，电场力与磁场力方向相反；当 \\(qE=qvB\\) 时 \\(v=\\dfrac{E}{B}\\)，只有该速率的粒子直线通过。 · In a velocity selector, \\(\\vec E\\), \\(\\vec B\\), and \\(\\vec v\\) are mutually perpendicular and the electric and magnetic forces are opposite; when \\(qE=qvB\\), \\(v=\\dfrac{E}{B}\\), and only particles with that speed pass straight through.",
      "速度选择器的平衡条件与电荷符号无关：正电荷的两个力同时反向，负电荷也一样；也与质量无关，因为电场力和磁场力都与 \\(q\\) 成正比。 · The velocity-selector balance is independent of charge sign: both forces reverse for a negative charge, and it is also independent of mass because both forces are proportional to \\(q\\).",
      "若 \\(v\\ne\\dfrac{E}{B}\\)，合力不为零：\\(v\\) 较小时电场力占优，\\(v\\) 较大时磁场力占优；粒子会向合力方向偏转。 · If \\(v\\ne\\dfrac{E}{B}\\), the net force is nonzero: the electric force dominates at smaller \\(v\\) and the magnetic force dominates at larger \\(v\\), so the particle deflects along the net force.",
      "霍尔效应：当导体中的电流方向与外磁场有垂直分量时，载流子受到横向磁力，向导体一侧偏转并积累，形成横向电场 \\(E_H\\)；当 \\(qE_H=qv_dB\\) 时达到平衡，横向净力为零。 · Hall effect: when a current in a conductor has a component perpendicular to an external magnetic field, carriers are deflected sideways by the magnetic force and accumulate on one side, creating a transverse field \\(E_H\\); equilibrium is reached when \\(qE_H=qv_dB\\) and the net transverse force is zero.",
      "平衡时 \\(E_H=v_dB\\)，横向电压 \\(V_H=E_Hw=v_dBw\\)，其中 \\(w\\) 是电压测量方向上的宽度；结合 \\(I=nqv_d(wt)\\) 得 \\(V_H=\\dfrac{IB}{nqt}\\)，其中 \\(t\\) 是沿磁场方向的厚度。 · At equilibrium \\(E_H=v_dB\\) and the transverse voltage is \\(V_H=E_Hw=v_dBw\\), where \\(w\\) is the width across which the voltage is measured; combining with \\(I=nqv_d(wt)\\) gives \\(V_H=\\dfrac{IB}{nqt}\\), where \\(t\\) is the thickness along the magnetic field.",
      "霍尔电压的符号由载流子符号决定：在相同的电流和磁场下，正载流子与负载流子积累到同一侧时会使该侧带相反电荷，因此霍尔电压极性相反。 · The sign of the Hall voltage is set by the carrier sign: for the same current and field, positive and negative carriers are deflected toward the same side but leave opposite charge there, so the Hall voltage has opposite polarity.",
      "霍尔系数定义为 \\(R_H=\\dfrac{1}{nq}\\)；负号对应电子导电，正号对应空穴导电，因此霍尔测量可以判断半导体是 n 型还是 p 型。 · The Hall coefficient is \\(R_H=\\dfrac{1}{nq}\\); a negative sign indicates electron conduction and a positive sign indicates hole conduction, so Hall measurements identify n-type versus p-type semiconductors.",
      "只有磁场垂直于电流的分量才产生霍尔效应；若 \\(\\vec B\\) 与电流平行，磁场力为零，不产生横向电压。 · Only the component of \\(\\vec B\\) perpendicular to the current produces the Hall effect; if \\(\\vec B\\) is parallel to the current, the magnetic force is zero and no transverse voltage appears."
    ],
    "definition": "复合场（crossed fields）指同一区域内同时存在电场与磁场的情形。运动电荷受到的总洛伦兹力为 \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\)：电场力 \\(q\\vec E\\) 与速度无关，磁场力 \\(q\\vec v\\times\\vec B\\) 垂直于速度。霍尔效应（Hall effect）是导体或半导体中电流方向与外磁场垂直时，载流子受磁力横向偏转、在导体两侧积累电荷，从而产生横向电势差的现象；稳定时横向电场力与磁场力平衡，\\(qE_H=qv_dB\\)，霍尔电压 \\(V_H=\\dfrac{IB}{nqt}\\)。霍尔电压的极性可以判断载流子的符号，大小可以求载流子数密度。 · Crossed fields means that electric and magnetic fields exist together in the same region. A moving charge feels the total Lorentz force \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\): the electric force \\(q\\vec E\\) is independent of velocity, while the magnetic force \\(q\\vec v\\times\\vec B\\) is perpendicular to velocity. The Hall effect is the appearance of a transverse potential difference when a current in a conductor or semiconductor is perpendicular to an external magnetic field: carriers are deflected sideways, charge accumulates on the two sides, and in steady state the transverse electric force balances the magnetic force, \\(qE_H=qv_dB\\), giving a Hall voltage \\(V_H=\\dfrac{IB}{nqt}\\). The polarity of the Hall voltage identifies the carrier sign, and its magnitude gives the carrier number density.",
    "intuition": "把复合场想成两条互相独立的“力通道”：电场力只看电荷和 \\(\\vec E\\)，磁场力只看电荷、速度和 \\(\\vec B\\)，两者同时作用时直接做矢量加法。速度选择器就是让两条通道的力刚好等大反向，像把粒子夹在两股相反的风中，只有“体重/速度”刚好合适的粒子能走直线。霍尔效应像一条走廊：电流沿走廊方向，磁场把行人往一侧推，人越挤越靠边，直到侧壁的“电斥力”把人推回中间；两侧的“拥挤程度差”就是霍尔电压。 · Think of crossed fields as two independent force channels: the electric force depends only on charge and \\(\\vec E\\), the magnetic force depends only on charge, velocity, and \\(\\vec B\\), and when both act you simply add the vectors. A velocity selector makes the two forces equal and opposite, like holding a particle between two opposing winds, so only particles with the right speed go straight. The Hall effect is like a corridor: current flows along the corridor and the magnetic field pushes pedestrians to one side; they crowd against the wall until the wall's “electric push” holds them back, and the difference in crowding between the two sides is the Hall voltage.",
    "formulas": [
      {
        "latex": "\\vec F=q(\\vec E+\\vec v\\times\\vec B)",
        "note": "总洛伦兹力：电场力与磁场力的矢量和。 · Total Lorentz force: the vector sum of electric and magnetic forces."
      },
      {
        "latex": "F_E=qE,\\qquad F_B=qvB\\sin\\theta",
        "note": "电场力大小与磁场力大小；\\(\\theta\\) 为 \\(\\vec v\\) 与 \\(\\vec B\\) 的夹角。 · Magnitudes of the electric and magnetic forces; \\(\\theta\\) is the angle between \\(\\vec v\\) and \\(\\vec B\\)."
      },
      {
        "latex": "qE=qvB\\;\\Rightarrow\\;v=\\dfrac{E}{B}",
        "note": "速度选择器的平衡条件；与电荷符号和质量无关。 · Velocity-selector balance condition; independent of charge sign and mass."
      },
      {
        "latex": "E_H=v_dB",
        "note": "霍尔电场与漂移速度、磁场的关系（稳定平衡时）。 · Relation among the Hall field, drift speed, and magnetic field at steady equilibrium."
      },
      {
        "latex": "V_H=E_Hw=v_dBw",
        "note": "霍尔电压；\\(w\\) 是横向电压测量方向上的宽度。 · Hall voltage; \\(w\\) is the width along which the transverse voltage is measured."
      },
      {
        "latex": "V_H=\\dfrac{IB}{nqt}",
        "note": "用宏观电流表示的霍尔电压；\\(n\\) 为载流子数密度，\\(t\\) 为沿磁场方向的厚度，\\(q\\) 为载流子电荷大小。 · Hall voltage in terms of macroscopic current; \\(n\\) is the carrier number density, \\(t\\) the thickness along the field, and \\(q\\) the magnitude of the carrier charge."
      },
      {
        "latex": "R_H=\\dfrac{1}{nq}",
        "note": "霍尔系数；符号由载流子电荷符号决定，大小与载流子数密度成反比。 · Hall coefficient; its sign is set by the carrier charge sign and its magnitude is inversely proportional to carrier density."
      },
      {
        "latex": "r=\\dfrac{mv}{qB}",
        "note": "速度选择后进入匀强磁场区的带电粒子圆周半径（质谱仪）。 · Radius of the circular path after velocity selection in a uniform magnetic field (mass spectrometer)."
      }
    ],
    "derivationNotes": [
      {
        "from": "叠加原理 · Superposition",
        "to": "总洛伦兹力 · Total Lorentz force",
        "note": "电场与磁场在同一空间点独立存在，对电荷的力分别计算后矢量相加：\\(\\vec F=\\vec F_E+\\vec F_B=q\\vec E+q\\vec v\\times\\vec B\\)。 · Electric and magnetic fields exist independently at the same point in space; calculate each force and add them as vectors: \\(\\vec F=\\vec F_E+\\vec F_B=q\\vec E+q\\vec v\\times\\vec B\\)."
      },
      {
        "from": "速度选择器几何 · Velocity-selector geometry",
        "to": "平衡速度 · Balance speed",
        "note": "取 \\(\\vec v\\perp\\vec B\\) 且 \\(\\vec E\\perp\\vec v\\)，电场力与磁场力反向；令大小相等 \\(qE=qvB\\)，得 \\(v=\\dfrac{E}{B}\\)。 · Take \\(\\vec v\\perp\\vec B\\) and \\(\\vec E\\perp\\vec v\\) so the electric and magnetic forces are opposite; setting their magnitudes equal, \\(qE=qvB\\), gives \\(v=\\dfrac{E}{B}\\)."
      },
      {
        "from": "霍尔偏转 · Hall deflection",
        "to": "横向电场 · Transverse field",
        "note": "载流子速度 \\(\\vec v_d\\) 与 \\(\\vec B\\) 垂直时，磁力 \\(qv_dB\\) 指向导体一侧；电荷积累产生横向电场 \\(E_H\\)，其电场力方向与磁力相反。 · When the drift velocity \\(\\vec v_d\\) is perpendicular to \\(\\vec B\\), the magnetic force \\(qv_dB\\) points toward one side of the conductor; accumulated charge creates a transverse field \\(E_H\\) whose electric force opposes the magnetic force."
      },
      {
        "from": "平衡条件 · Equilibrium",
        "to": "霍尔电压 · Hall voltage",
        "note": "令 \\(qE_H=qv_dB\\) 得 \\(E_H=v_dB\\)；沿宽度 \\(w\\) 积分得 \\(V_H=E_Hw=v_dBw\\)。 · Set \\(qE_H=qv_dB\\) to get \\(E_H=v_dB\\); integrating across the width \\(w\\) gives \\(V_H=E_Hw=v_dBw\\)."
      },
      {
        "from": "电流的微观表达 · Microscopic current",
        "to": "霍尔公式 · Hall formula",
        "note": "\\(I=nqv_dA=nqv_d(wt)\\)，所以 \\(v_d=\\dfrac{I}{nqwt}\\)；代入 \\(V_H=v_dBw\\) 得 \\(V_H=\\dfrac{IB}{nqt}\\)。 · \\(I=nqv_dA=nqv_d(wt)\\), so \\(v_d=\\dfrac{I}{nqwt}\\); substituting into \\(V_H=v_dBw\\) gives \\(V_H=\\dfrac{IB}{nqt}\\)."
      },
      {
        "from": "载流子符号 · Carrier sign",
        "to": "霍尔电压极性 · Hall-voltage polarity",
        "note": "正、负载流子在相同电流和磁场下向同一侧偏转，但积累的电荷符号相反，因此横向电场和霍尔电压的极性相反。 · Positive and negative carriers deflect toward the same side for the same current and field, but the accumulated charge has opposite sign, so the transverse field and Hall voltage have opposite polarity."
      }
    ],
    "conditions": [
      "电场与磁场在同一区域叠加，且可视为匀强场；粒子速度远小于光速，忽略相对论效应。 · The electric and magnetic fields overlap in the same region and can be treated as uniform; the particle speed is much less than light speed, so relativistic effects are neglected.",
      "速度选择器要求 \\(\\vec E\\perp\\vec B\\perp\\vec v\\)；若角度不是 90°，平衡条件需改为分量形式。 · A velocity selector requires \\(\\vec E\\perp\\vec B\\perp\\vec v\\); if the angles are not 90°, the balance condition must be written in components.",
      "霍尔效应要求磁场有垂直于电流的分量；平行分量不产生横向磁力。 · The Hall effect requires a magnetic-field component perpendicular to the current; a parallel component produces no transverse magnetic force.",
      "霍尔公式 \\(V_H=\\dfrac{IB}{nqt}\\) 假设单一载流子类型、载流子数密度均匀、导体为矩形薄片且 \\(\\vec B\\) 垂直于薄片。 · The Hall formula \\(V_H=\\dfrac{IB}{nqt}\\) assumes a single carrier type, uniform carrier density, a rectangular slab, and \\(\\vec B\\) perpendicular to the slab.",
      "半导体中可能同时存在电子和空穴，两种载流子的霍尔电压会部分抵消；简单公式只在一种载流子占主导时适用。 · Semiconductors can contain both electrons and holes, and their Hall voltages partly cancel; the simple formula applies only when one carrier type dominates.",
      "稳定霍尔状态要求横向没有净电流，载流子只沿纵向漂移；达到平衡前短暂的横向电流负责建立电荷积累。 · The steady Hall state requires no net transverse current, with carriers drifting only longitudinally; a brief transverse current before equilibrium builds up the charge accumulation.",
      "霍尔电压通常很小，测量时需要高输入阻抗电压表，并注意接触电阻、温度漂移和寄生电动势。 · Hall voltages are usually small, so measurements need a high-impedance voltmeter and care with contact resistance, temperature drift, and parasitic emfs."
    ],
    "keyPoints": [
      "电场力与磁场力独立计算，再矢量相加；不要先把 \\(E\\) 与 \\(B\\) 合并成一个“等效场”。 · Calculate the electric and magnetic forces independently, then add them as vectors; do not first combine \\(E\\) and \\(B\\) into one “effective field.”",
      "电场力与速度无关；磁场力垂直于速度，不做功，只改变方向。 · The electric force is independent of speed; the magnetic force is perpendicular to velocity, does no work, and only changes direction.",
      "速度选择器的 \\(v=\\dfrac{E}{B}\\) 与电荷符号、质量都无关，只筛选速率。 · The velocity selector's \\(v=\\dfrac{E}{B}\\) is independent of charge sign and mass and selects speed only.",
      "霍尔电压来自横向电荷积累，不是磁场直接“产生电压”；磁场只负责偏转载流子。 · The Hall voltage comes from transverse charge accumulation, not directly from the magnetic field “creating a voltage”; the field only deflects carriers.",
      "\\(V_H\\propto B\\)、\\(V_H\\propto I\\)，但 \\(V_H\\propto\\dfrac{1}{n}\\)、\\(V_H\\propto\\dfrac{1}{t}\\)：载流子越少、导体越薄，霍尔电压越大。 · \\(V_H\\propto B\\) and \\(V_H\\propto I\\), but \\(V_H\\propto\\dfrac{1}{n}\\) and \\(V_H\\propto\\dfrac{1}{t}\\): fewer carriers or a thinner conductor gives a larger Hall voltage.",
      "霍尔电压的极性是判断载流子符号的关键证据；同一电流和磁场下，电子与空穴给出相反极性。 · The polarity of the Hall voltage is key evidence for the carrier sign; for the same current and field, electrons and holes give opposite polarity.",
      "只有 \\(\\vec B\\) 的垂直分量有效；\\(\\vec B\\) 与电流平行时没有霍尔效应。 · Only the perpendicular component of \\(\\vec B\\) matters; there is no Hall effect when \\(\\vec B\\) is parallel to the current.",
      "磁力不做功，但霍尔电场对横向偏转的载流子做功；稳定后横向净电流为零，能量耗散主要来自电阻。 · The magnetic force does no work, but the Hall field does work on transversely deflected carriers; in steady state the net transverse current is zero, and energy dissipation comes mainly from resistance."
    ],
    "misconceptions": [
      "认为电场力和磁场力对所有速度都抵消；只有 \\(v=\\dfrac{E}{B}\\) 时合力才为零。 · Believing the electric and magnetic forces cancel at all speeds; the net force is zero only when \\(v=\\dfrac{E}{B}\\).",
      "认为速度选择器只让正电荷通过；正、负电荷的平衡速度相同，符号只改变偏转方向。 · Believing a velocity selector passes only positive charges; positive and negative charges have the same balance speed, and the sign only changes the deflection direction.",
      "认为磁场在霍尔效应中做功；磁场力始终垂直于速度，不做功；建立霍尔电压的能量来自电源。 · Believing the magnetic field does work in the Hall effect; the magnetic force is always perpendicular to velocity and does no work, and the energy for the Hall voltage comes from the power supply.",
      "认为霍尔电压与载流子数密度成正比；实际上 \\(V_H\\propto\\dfrac{1}{n}\\)，载流子越少电压越大。 · Believing the Hall voltage is proportional to carrier density; in fact \\(V_H\\propto\\dfrac{1}{n}\\), so fewer carriers give a larger voltage.",
      "认为只要存在磁场就有霍尔电压；必须存在垂直于电流的磁场分量。 · Believing any magnetic field produces a Hall voltage; a field component perpendicular to the current is required.",
      "认为霍尔电压为正就一定表示正载流子；极性还取决于电压表的接线约定，必须结合电流、磁场方向和探头接法判断。 · Believing a positive Hall voltage always means positive carriers; the polarity also depends on the voltmeter connection convention, so current, field direction, and probe wiring must all be specified.",
      "把霍尔电压公式中的厚度 \\(t\\) 与宽度 \\(w\\) 混淆；\\(w\\) 是电压测量方向的宽度，\\(t\\) 是沿磁场方向的厚度。 · Confusing the thickness \\(t\\) with the width \\(w\\) in the Hall formula; \\(w\\) is the width along the voltage measurement direction and \\(t\\) is the thickness along the field.",
      "认为电场力会随速度增大而增大；电场力 \\(qE\\) 与速度无关，只有磁场力随速度增大。 · Believing the electric force grows with speed; \\(qE\\) is independent of speed, and only the magnetic force grows with speed."
    ],
    "examples": [
      {
        "title": "例 1 · 速度选择器 · Example 1: Velocity selector",
        "prompt": "速度选择器中 \\(E=2.0\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)，\\(B=0.10\\,\\mathrm{T}\\)，两场互相垂直。求能直线通过的粒子速率。若电子以该速率进入，电场力和磁场力分别向哪个方向？ · A velocity selector has \\(E=2.0\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\) and \\(B=0.10\\,\\mathrm{T}\\), with the fields perpendicular. Find the speed of particles that pass straight through. If an electron enters at this speed, which way do the electric and magnetic forces point?",
        "steps": [
          "平衡条件 \\(qE=qvB\\)，所以 \\(v=\\dfrac{E}{B}=\\dfrac{2.0\\times10^{4}}{0.10}=2.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\)。 · Balance condition \\(qE=qvB\\), so \\(v=\\dfrac{E}{B}=\\dfrac{2.0\\times10^{4}}{0.10}=2.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\).",
          "该结果与电荷符号和质量无关；电子只是两个力的方向都与正电荷相反，大小仍相等。 · The result is independent of charge sign and mass; for an electron both force directions are opposite to those for a positive charge, but their magnitudes are still equal.",
          "速度方向应沿 \\(\\vec E\\times\\vec B\\)；电子与正电荷的受力方向都反向，但仍沿同一直线通过。 · The velocity should point along \\(\\vec E\\times\\vec B\\); for an electron both force directions reverse, but it still passes along the same straight line."
        ],
        "solution": "\\(v=2.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\)；电子受到的电场力与磁场力等大反向，合力为零。 · \\(v=2.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\); the electric and magnetic forces on the electron are equal and opposite, so the net force is zero.",
        "solutionLatex": "v=\\dfrac{E}{B}=\\dfrac{2.0\\times10^{4}}{0.10}=2.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 2 · 复合场中的偏转 · Example 2: Deflection in crossed fields",
        "prompt": "同一速度选择器中，一个质子以 \\(v=1.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\) 进入，小于平衡速率 \\(2.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\)。忽略重力，判断合力方向并描述轨迹。 · In the same velocity selector, a proton enters at \\(v=1.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\), less than the balance speed \\(2.0\\times10^{5}\\,\\mathrm{m\\,s^{-1}}\\). Ignoring gravity, determine the direction of the net force and describe the path.",
        "steps": [
          "电场力大小 \\(F_E=qE\\) 与速度无关；磁场力大小 \\(F_B=qvB\\) 随速度减小而减小。 · The electric force \\(F_E=qE\\) is independent of speed, while the magnetic force \\(F_B=qvB\\) decreases with speed.",
          "因为 \\(v<\\dfrac{E}{B}\\)，有 \\(qvB<qE\\)，所以电场力占优，合力沿电场力方向。 · Because \\(v<\\dfrac{E}{B}\\), \\(qvB<qE\\), so the electric force dominates and the net force points along the electric force.",
          "合力不再垂直于速度，质子向电场力方向偏转，轨迹弯曲；速度的纵向分量也会改变。 · The net force is no longer perpendicular to velocity, so the proton deflects toward the electric force and its path curves; the longitudinal velocity component also changes."
        ],
        "solution": "合力沿电场力方向，质子向该方向偏转；只有 \\(v=\\dfrac{E}{B}\\) 时才不偏转。 · The net force points along the electric force and the proton deflects that way; only \\(v=\\dfrac{E}{B}\\) gives no deflection.",
        "solutionLatex": "v<\\dfrac{E}{B}\\;\\Rightarrow\\;qE>qvB\\;\\Rightarrow\\;\\text{net force along }\\vec E"
      },
      {
        "title": "例 3 · 铜条的霍尔电压 · Example 3: Hall voltage in a copper strip",
        "prompt": "铜条宽 \\(w=5.0\\,\\mathrm{mm}\\)、厚 \\(t=0.10\\,\\mathrm{mm}\\)，沿长度方向通 \\(I=2.0\\,\\mathrm{A}\\) 电流，垂直穿过铜条的 \\(B=0.50\\,\\mathrm{T}\\)。取铜的载流子数密度 \\(n=8.5\\times10^{28}\\,\\mathrm{m^{-3}}\\)，电子电荷大小 \\(e=1.6\\times10^{-19}\\,\\mathrm{C}\\)。求霍尔电压大小。 · A copper strip is \\(w=5.0\\,\\mathrm{mm}\\) wide and \\(t=0.10\\,\\mathrm{mm}\\) thick, carries \\(I=2.0\\,\\mathrm{A}\\) along its length, and is penetrated by \\(B=0.50\\,\\mathrm{T}\\) perpendicular to the strip. Taking the carrier density \\(n=8.5\\times10^{28}\\,\\mathrm{m^{-3}}\\) and \\(e=1.6\\times10^{-19}\\,\\mathrm{C}\\), find the Hall voltage.",
        "steps": [
          "用 \\(V_H=\\dfrac{IB}{nqt}\\)，其中 \\(t=0.10\\,\\mathrm{mm}=1.0\\times10^{-4}\\,\\mathrm{m}\\)。 · Use \\(V_H=\\dfrac{IB}{nqt}\\), with \\(t=0.10\\,\\mathrm{mm}=1.0\\times10^{-4}\\,\\mathrm{m}\\).",
          "分母 \\(nqt=(8.5\\times10^{28})(1.6\\times10^{-19})(1.0\\times10^{-4})=1.36\\times10^{6}\\,\\mathrm{C\\,m^{-2}}\\)。 · Denominator \\(nqt=(8.5\\times10^{28})(1.6\\times10^{-19})(1.0\\times10^{-4})=1.36\\times10^{6}\\,\\mathrm{C\\,m^{-2}}\\).",
          "\\(V_H=\\dfrac{(2.0)(0.50)}{1.36\\times10^{6}}=7.4\\times10^{-7}\\,\\mathrm{V}\\)。 · \\(V_H=\\dfrac{(2.0)(0.50)}{1.36\\times10^{6}}=7.4\\times10^{-7}\\,\\mathrm{V}\\).",
          "铜的载流子是电子，霍尔电压极性由电子积累的一侧决定；宽度 \\(w\\) 不进入最终公式，但它决定横向电场 \\(E_H=\\dfrac{V_H}{w}\\)。 · Copper's carriers are electrons, so the Hall-voltage polarity is set by the side where electrons accumulate; the width \\(w\\) cancels in the final formula but sets the transverse field \\(E_H=\\dfrac{V_H}{w}\\)."
        ],
        "solution": "\\(V_H\\approx7.4\\times10^{-7}\\,\\mathrm{V}\\)（约 \\(0.74\\,\\mathrm{\\mu V}\\)），是很小的电压，需要精密测量。 · \\(V_H\\approx7.4\\times10^{-7}\\,\\mathrm{V}\\) (about \\(0.74\\,\\mathrm{\\mu V}\\)), a very small voltage requiring precise measurement.",
        "solutionLatex": "V_H=\\dfrac{IB}{nqt}=\\dfrac{(2.0)(0.50)}{(8.5\\times10^{28})(1.6\\times10^{-19})(1.0\\times10^{-4})}=7.4\\times10^{-7}\\,\\mathrm{V}"
      },
      {
        "title": "例 4 · 由霍尔极性判断载流子 · Example 4: Identifying carriers from Hall polarity",
        "prompt": "一块矩形半导体通有沿 \\(+x\\) 方向的电流，磁场沿 \\(+z\\) 方向（垂直纸面向外）。电压表测得 \\(-y\\) 侧电势高于 \\(+y\\) 侧。判断多数载流子是正电荷还是负电荷，并说明理由。 · A rectangular semiconductor carries current in the \\(+x\\) direction and is in a magnetic field along \\(+z\\) (out of the page). A voltmeter finds that the \\(-y\\) side is at a higher potential than the \\(+y\\) side. Decide whether the majority carriers are positive or negative, and justify your answer.",
        "steps": [
          "若载流子为正，漂移速度沿 \\(+x\\)；\\(\\vec v\\times\\vec B=(+x)\\times(+z)=-y\\)，正电荷受 magnetic force 向 \\(-y\\) 侧，故 \\(-y\\) 侧积累正电荷、电势升高。 · If the carriers are positive, their drift is along \\(+x\\); \\(\\vec v\\times\\vec B=(+x)\\times(+z)=-y\\), so positive charges are pushed toward the \\(-y\\) side, making that side positive and raising its potential.",
          "若载流子为负，漂移速度沿 \\(-x\\)；\\(\\vec v\\times\\vec B=(-x)\\times(+z)=+y\\)，但电荷为负，磁力仍指向 \\(-y\\) 侧；负电荷积累在 \\(-y\\) 侧，使该侧电势降低。 · If the carriers are negative, their drift is along \\(-x\\); \\(\\vec v\\times\\vec B=(-x)\\times(+z)=+y\\), but because the charge is negative the magnetic force still points toward the \\(-y\\) side; negative charge accumulates there and lowers that side's potential.",
          "测得 \\(-y\\) 侧电势更高，与正载流子的结果一致，因此多数载流子为正电荷（空穴导电）。 · The measurement says the \\(-y\\) side is at higher potential, matching the positive-carrier case, so the majority carriers are positive (hole conduction)."
        ],
        "solution": "多数载流子为正电荷（p 型半导体）；若为电子，\\(-y\\) 侧应带负电、电势更低。 · The majority carriers are positive (p-type semiconductor); for electrons, the \\(-y\\) side would be negative and at lower potential.",
        "solutionLatex": "\\text{positive carriers: }V(-y)>V(+y);\\qquad \\text{negative carriers: }V(-y)<V(+y)"
      }
    ],
    "examTips": [
      "先画 \\(\\vec E\\)、\\(\\vec B\\)、\\(\\vec v\\) 三个箭头，再分别判断 \\(q\\vec E\\) 与 \\(q\\vec v\\times\\vec B\\) 的方向，最后矢量相加。 · First draw arrows for \\(\\vec E\\), \\(\\vec B\\), and \\(\\vec v\\), then find the directions of \\(q\\vec E\\) and \\(q\\vec v\\times\\vec B\\), and finally add them as vectors.",
      "速度选择器题先写 \\(qE=qvB\\)，再约去 \\(q\\)；不要漏掉“与电荷符号、质量无关”的结论。 · For velocity-selector questions, write \\(qE=qvB\\) first and cancel \\(q\\); do not omit the conclusion that the result is independent of charge sign and mass.",
      "霍尔效应题明确几何：电流方向、磁场方向、电压测量方向；\\(w\\) 是测电压的宽度，\\(t\\) 是沿 \\(B\\) 的厚度。 · For Hall-effect questions, specify the geometry: current direction, field direction, and voltage-measurement direction; \\(w\\) is the width across the voltage and \\(t\\) is the thickness along \\(B\\).",
      "判断载流子符号时，先假设正载流子，画出偏转侧和电势高低，再与测量比较；不要凭“正电压=正电荷”直接下结论。 · To identify carrier sign, first assume positive carriers, find the deflection side and potential, then compare with the measurement; do not conclude directly from “positive voltage = positive charge.”",
      "单位检查：\\(V_H=\\dfrac{IB}{nqt}\\) 中 \\(n\\) 用 \\(\\mathrm{m^{-3}}\\)，\\(q\\) 用 \\(\\mathrm{C}\\)，\\(t\\) 用 \\(\\mathrm{m}\\)，结果才是伏特。 · Check units: in \\(V_H=\\dfrac{IB}{nqt}\\), use \\(n\\) in \\(\\mathrm{m^{-3}}\\), \\(q\\) in \\(\\mathrm{C}\\), and \\(t\\) in \\(\\mathrm{m}\\) to get volts.",
      "区分“磁力不做功”和“霍尔电场做功”：磁力只改变方向；横向电场建立过程中对载流子做功，稳定后横向净电流为零。 · Distinguish “the magnetic force does no work” from “the Hall field does work”: the magnetic force only changes direction; the transverse field does work while it builds up, and in steady state the net transverse current is zero."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场 · Magnetism and Moving Charges",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.1",
        "title": "磁场 · Magnetic Fields",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.3",
        "title": "毕奥–萨伐尔定律 · Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.9",
        "title": "毕奥–萨伐尔积分与电流几何 · Biot–Savart Integration and Current Geometry",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.3",
        "title": "感应电流与磁力 · Induced Currents and Magnetic Forces",
        "relation": "后续 · downstream"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子 · Charged particles in magnetic fields"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：12.1 的磁场与 12.2 的 \\(q\\vec v\\times\\vec B\\) 提供磁场力；11.1 的电流微观模型 \\(I=nqv_dA\\) 用于霍尔公式。 · Upstream: 12.1's magnetic field and 12.2's \\(q\\vec v\\times\\vec B\\) provide the magnetic force; 11.1's microscopic current model \\(I=nqv_dA\\) feeds the Hall formula.",
      "下游：质谱仪和速度选择器用于粒子鉴别；霍尔传感器用于测磁场、判断半导体类型和测量载流子密度。 · Downstream: velocity selectors and mass spectrometers identify particles; Hall sensors measure magnetic fields, identify semiconductor type, and determine carrier density.",
      "跨学科：霍尔效应是凝聚态物理中判断载流子符号的经典实验；量子霍尔效应还提供电阻标准。 · Cross-disciplinary: the Hall effect is a classic experiment for identifying carrier sign in condensed-matter physics, and the quantum Hall effect provides resistance standards."
    ],
    "intuitionDetailed": "复合场问题的关键是“分开算、再相加”。电场力像重力一样只与电荷和场强有关，不管电荷跑多快；磁场力像侧风，只与速度有关，而且永远垂直于速度。速度选择器把这两股力安排成相反方向：速度小的粒子被电场力推走，速度大的粒子被磁场力推走，只有 \\(v=\\dfrac{E}{B}\\) 的粒子走直线。霍尔效应把同样的“侧向偏转”放进导体内部：载流子沿导体漂移，磁场把它们推向一侧，电荷在侧面积累，直到横向电场力与磁力平衡。此时横向不再有净电流，但两侧出现了电势差。载流子越少，同样的电流需要越大的漂移速度，磁场力越强，霍尔电压越大；导体越薄，同样的横向电场只需更小的电压，因此霍尔电压也越大。霍尔电压的符号则像“指纹”：正、负载流子被推向同一侧，却在那一侧留下相反符号的电荷。 · The key to crossed-field problems is “calculate separately, then add.” The electric force, like gravity, depends only on charge and field strength, not on how fast the charge moves; the magnetic force is like a crosswind, depends on velocity, and is always perpendicular to velocity. A velocity selector arranges these two forces in opposite directions: slow particles are pushed away by the electric force, fast particles by the magnetic force, and only particles with \\(v=\\dfrac{E}{B}\\) go straight. The Hall effect puts the same sideways deflection inside a conductor: carriers drift along the conductor, the magnetic field pushes them to one side, charge accumulates, and the transverse electric force rises until it balances the magnetic force. At that point there is no net transverse current, but a potential difference appears across the conductor. Fewer carriers mean a larger drift speed for the same current, a stronger magnetic force, and a larger Hall voltage; a thinner conductor needs a smaller voltage for the same transverse field, so the Hall voltage is also larger. The sign of the Hall voltage is like a fingerprint: positive and negative carriers are pushed to the same side but leave opposite charge there.",
    "development": [
      "先复习 12.2：分别写出电场力与磁场力，确认电场力与速度无关、磁场力垂直于速度。 · Review 12.2: write the electric and magnetic forces separately, confirming that the electric force is speed-independent and the magnetic force is perpendicular to velocity.",
      "把两个力矢量相加，得到总洛伦兹力；用正、负电荷各画一次受力图。 · Add the two force vectors to get the total Lorentz force; draw the force diagram once for a positive and once for a negative charge.",
      "令合力为零，推导速度选择器的 \\(v=\\dfrac{E}{B}\\)，并讨论 \\(v\\) 偏大/偏小时的偏转方向。 · Set the net force to zero, derive the velocity selector's \\(v=\\dfrac{E}{B}\\), and discuss the deflection direction when \\(v\\) is too large or too small.",
      "在导体中分析载流子的横向磁力、电荷积累和横向电场，写出平衡条件 \\(qE_H=qv_dB\\)。 · In the conductor, analyze the transverse magnetic force on carriers, charge accumulation, and the transverse field, and write the equilibrium condition \\(qE_H=qv_dB\\).",
      "用 \\(I=nqv_dA\\) 消去 \\(v_d\\)，得到 \\(V_H=\\dfrac{IB}{nqt}\\)，并用几何图标注 \\(w\\) 与 \\(t\\)。 · Eliminate \\(v_d\\) using \\(I=nqv_dA\\) to obtain \\(V_H=\\dfrac{IB}{nqt}\\), and label \\(w\\) and \\(t\\) on a geometry diagram.",
      "用霍尔电压符号判断载流子类型，并讨论温度、掺杂和双载流子对测量的影响。 · Use the sign of the Hall voltage to identify the carrier type, and discuss how temperature, doping, and two-carrier conduction affect the measurement."
    ],
    "checks": [
      "为什么电场力与速度无关，而磁场力与速度有关？ · Why is the electric force independent of speed while the magnetic force depends on speed?",
      "速度选择器的平衡速度为什么与电荷符号和质量无关？ · Why is a velocity selector's balance speed independent of charge sign and mass?",
      "若粒子速度小于 \\(\\dfrac{E}{B}\\)，它会向哪个方向偏转？若大于呢？ · If a particle's speed is less than \\(\\dfrac{E}{B}\\), which way does it deflect? What if it is greater?",
      "霍尔效应中，磁场力与霍尔电场力如何达到平衡？稳定后横向还有净电流吗？ · In the Hall effect, how do the magnetic force and the Hall-field force reach balance? Is there still a net transverse current in steady state?",
      "为什么霍尔电压与载流子数密度成反比？ · Why is the Hall voltage inversely proportional to carrier density?",
      "霍尔电压的极性如何帮助判断半导体是 n 型还是 p 型？ · How does the polarity of the Hall voltage help identify whether a semiconductor is n-type or p-type?",
      "如果磁场与电流平行，为什么没有霍尔电压？ · Why is there no Hall voltage when the magnetic field is parallel to the current?"
    ],
    "vocabulary": [
      {
        "termZh": "复合场",
        "termEn": "crossed fields",
        "defZh": "同一区域内同时存在电场与磁场的情形。",
        "defEn": "A region in which electric and magnetic fields exist simultaneously."
      },
      {
        "termZh": "洛伦兹力",
        "termEn": "Lorentz force",
        "defZh": "运动电荷受到的总电磁力 \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\)。",
        "defEn": "The total electromagnetic force on a moving charge, \\(\\vec F=q(\\vec E+\\vec v\\times\\vec B)\\)."
      },
      {
        "termZh": "速度选择器",
        "termEn": "velocity selector",
        "defZh": "利用正交电场和磁场使特定速率 \\(v=\\dfrac{E}{B}\\) 的粒子直线通过的装置。",
        "defEn": "A device using perpendicular electric and magnetic fields to let particles of a specific speed \\(v=\\dfrac{E}{B}\\) pass straight through."
      },
      {
        "termZh": "霍尔效应",
        "termEn": "Hall effect",
        "defZh": "电流与外磁场垂直时，载流子横向偏转并在导体两侧产生电势差的现象。",
        "defEn": "The phenomenon in which a current perpendicular to an external magnetic field causes carriers to deflect sideways and produces a potential difference across a conductor."
      },
      {
        "termZh": "霍尔电压",
        "termEn": "Hall voltage",
        "defZh": "霍尔效应中导体两侧建立的横向电势差，\\(V_H=\\dfrac{IB}{nqt}\\)。",
        "defEn": "The transverse potential difference developed across a conductor in the Hall effect, \\(V_H=\\dfrac{IB}{nqt}\\)."
      },
      {
        "termZh": "载流子",
        "termEn": "charge carrier",
        "defZh": "在材料中携带电流的带电粒子，如金属中的电子或半导体中的电子与空穴。",
        "defEn": "A charged particle that carries current in a material, such as electrons in metals or electrons and holes in semiconductors."
      },
      {
        "termZh": "漂移速度",
        "termEn": "drift velocity",
        "defZh": "载流子在电场作用下沿导体的平均定向运动速度，记作 \\(v_d\\)。",
        "defEn": "The average directed speed of carriers along a conductor under an electric field, denoted \\(v_d\\)."
      },
      {
        "termZh": "载流子数密度",
        "termEn": "carrier number density",
        "defZh": "单位体积内的载流子数目，记作 \\(n\\)，单位 \\(\\mathrm{m^{-3}}\\)。",
        "defEn": "The number of carriers per unit volume, denoted \\(n\\), with units \\(\\mathrm{m^{-3}}\\)."
      }
    ]
  },
  "12.9": {
    "id": "em/em-u12/12.9",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.9",
    "titleZh": "毕奥–萨伐尔积分与电流几何",
    "titleEn": "Biot–Savart Integration and Current Geometry",
    "layer": "ap",
    "summary": "把毕奥–萨伐尔定律对电流元积分，可求任意电流几何的磁场：圆环中心 \\(B=\\dfrac{\\mu_0I}{2R}\\)，圆弧 \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)，有限直导线 \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\)；电流元磁场按 \\(\\mathrm{d}B\\propto\\dfrac{I\\sin\\theta}{r^{2}}\\) 变化，场线为绕电流元轴的同心圆。 · Integrating the Biot–Savart law over current elements gives the magnetic field of any current geometry: \\(B=\\dfrac{\\mu_0I}{2R}\\) at the center of a loop, \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\) at the center of an arc, and \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\) beside a finite straight wire; the current-element field scales as \\(\\mathrm{d}B\\propto\\dfrac{I\\sin\\theta}{r^{2}}\\), and its field lines are concentric circles about the element axis.",
    "learningObjectives": [
      "能写出毕奥–萨伐尔定律的矢量形式，并说明 \\(\\mathrm{d}\\vec B\\) 的方向由 \\(\\mathrm{d}\\vec\\ell\\times\\hat r\\) 决定。 · Write the vector Biot–Savart law and explain that the direction of \\(\\mathrm{d}\\vec B\\) is set by \\(\\mathrm{d}\\vec\\ell\\times\\hat r\\).",
      "能对圆环中心、圆弧中心和有限直导线建立积分，得到相应磁场公式。 · Set up and evaluate the integrals for the center of a circular loop, the center of a circular arc, and a finite straight wire.",
      "能说明角度、半径和积分限的几何意义，并在无限长导线等极限下检查结果。 · Explain the geometric meaning of the angles, radius, and integration limits, and check results in limits such as the infinitely long wire.",
      "能用叠加原理求由直线段、圆弧和径向段组合而成的电流分布的磁场。 · Use superposition to find the magnetic field of current distributions made of straight segments, arcs, and radial segments.",
      "能判断磁场方向并避免把 \\(R\\)、\\(r\\)、\\(\\theta\\) 的角色混淆。 · Determine the field direction and avoid confusing the roles of \\(R\\), \\(r\\), and \\(\\theta\\).",
      "能用 \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\) 做比例推理，预测电流、距离或夹角改变时磁场如何变化。 · Use \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\) for proportional reasoning and predict how the field changes when the current, distance, or angle changes.",
      "能说明电流元周围的磁场矢量与以导线为轴的同心圆相切，且没有指向导线、背离导线或沿导线方向的分量。 · Explain that the magnetic field vectors around a current element are tangent to concentric circles about the wire axis and have no component toward the wire, away from it, or along the wire."
    ],
    "essentialKnowledge": [
      "毕奥–萨伐尔定律：\\(\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}\\)，其中 \\(\\mathrm{d}\\vec\\ell\\) 沿电流方向，\\(\\hat r\\) 从电流元指向观察点；总场是各电流元贡献的矢量和。 · Biot–Savart law: \\(\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}\\), where \\(\\mathrm{d}\\vec\\ell\\) points along the current and \\(\\hat r\\) points from the current element to the observation point; the total field is the vector sum of all element contributions.",
      "\\(\\mathrm{d}\\vec B\\) 同时垂直于 \\(\\mathrm{d}\\vec\\ell\\) 与 \\(\\hat r\\)；方向由右手定则确定。 · \\(\\mathrm{d}\\vec B\\) is perpendicular to both \\(\\mathrm{d}\\vec\\ell\\) and \\(\\hat r\\); its direction follows from the right-hand rule.",
      "圆环中心：每个电流元到中心的距离都是 \\(R\\)，且 \\(\\mathrm{d}\\vec\\ell\\perp\\hat r\\)，所以 \\(B=\\dfrac{\\mu_0I}{4\\pi R^{2}}\\int\\mathrm{d}\\ell=\\dfrac{\\mu_0I}{2R}\\)。 · At the center of a circular loop, every current element is a distance \\(R\\) from the center and \\(\\mathrm{d}\\vec\\ell\\perp\\hat r\\), so \\(B=\\dfrac{\\mu_0I}{4\\pi R^{2}}\\int\\mathrm{d}\\ell=\\dfrac{\\mu_0I}{2R}\\).",
      "\\(N\\) 匝圆环中心的磁场为 \\(B=\\dfrac{\\mu_0NI}{2R}\\)；各匝的磁场同向叠加。 · The field at the center of an \\(N\\)-turn loop is \\(B=\\dfrac{\\mu_0NI}{2R}\\); the fields of all turns add in the same direction.",
      "半径为 \\(R\\)、圆心角为 \\(\\theta\\)（弧度）的圆弧在圆心产生的磁场为 \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)；半圆 \\(\\theta=\\pi\\) 给出 \\(B=\\dfrac{\\mu_0I}{4R}\\)。 · A circular arc of radius \\(R\\) and central angle \\(\\theta\\) (in radians) produces \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\) at its center; a semicircle with \\(\\theta=\\pi\\) gives \\(B=\\dfrac{\\mu_0I}{4R}\\).",
      "有限直导线在距导线垂直距离 \\(r\\) 处产生的磁场为 \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\)，其中 \\(\\theta_1\\)、\\(\\theta_2\\) 是观察点与导线两端连线同垂线之间的夹角，两端位于垂足两侧。 · A finite straight wire produces \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\) at perpendicular distance \\(r\\), where \\(\\theta_1\\) and \\(\\theta_2\\) are the angles between the perpendicular and the lines from the observation point to the two ends, with the ends on opposite sides of the perpendicular foot.",
      "当两端都趋于无穷远时 \\(\\theta_1=\\theta_2=90^\\circ\\)，有限直导线公式化为无限长导线 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)；半无限长导线给出 \\(B=\\dfrac{\\mu_0I}{4\\pi r}\\)。 · When both ends recede to infinity, \\(\\theta_1=\\theta_2=90^\\circ\\) and the finite-wire formula becomes the infinite-wire result \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\); a semi-infinite wire gives \\(B=\\dfrac{\\mu_0I}{4\\pi r}\\).",
      "若观察点与直导线两端在同一侧，两个角度应使用带符号形式或把导线分成两段叠加，不能盲目相加。 · If the observation point and both ends lie on the same side of the perpendicular foot, use signed angles or split the wire into segments and superpose; do not add the angles blindly.",
      "对组合电流分布，先分别求每段的磁场，再按矢量叠加；径向段（电流沿半径方向）在圆心产生的磁场为零，因为 \\(\\mathrm{d}\\vec\\ell\\) 与 \\(\\hat r\\) 平行。 · For a composite current distribution, find the field of each segment separately and add vectorially; a radial segment (current along the radius) produces zero field at the center because \\(\\mathrm{d}\\vec\\ell\\) is parallel to \\(\\hat r\\).",
      "在磁介质中，若材料线性且未饱和，可把 \\(\\mu_0\\) 换成 \\(\\mu=\\mu_r\\mu_0\\)；方向仍由电流几何决定。 · In a linear, unsaturated magnetic medium, replace \\(\\mu_0\\) by \\(\\mu=\\mu_r\\mu_0\\); the direction is still set by the current geometry.",
      "电流元磁场的标量形式：\\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\)，所以 \\(\\mathrm{d}B\\propto I\\)、\\(\\mathrm{d}B\\propto\\mathrm{d}\\ell\\)、\\(\\mathrm{d}B\\propto\\sin\\theta\\)、\\(\\mathrm{d}B\\propto\\dfrac{1}{r^{2}}\\)。 · Scalar form of the current-element field: \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\), so \\(\\mathrm{d}B\\propto I\\), \\(\\mathrm{d}B\\propto\\mathrm{d}\\ell\\), \\(\\mathrm{d}B\\propto\\sin\\theta\\), and \\(\\mathrm{d}B\\propto\\dfrac{1}{r^{2}}\\).",
      "比例推理：电流加倍则 \\(B\\) 加倍；距离加倍则 \\(B\\) 变为四分之一；\\(\\theta\\) 从 \\(90^\\circ\\) 变为 \\(30^\\circ\\) 时 \\(B\\) 减半；对圆环中心 \\(B\\propto\\dfrac{I}{R}\\)，对圆弧中心 \\(B\\propto\\dfrac{I\\theta}{R}\\)。 · Proportional reasoning: doubling the current doubles \\(B\\); doubling the distance quarters \\(B\\); changing \\(\\theta\\) from \\(90^\\circ\\) to \\(30^\\circ\\) halves \\(B\\); at a loop center \\(B\\propto\\dfrac{I}{R}\\), and at an arc center \\(B\\propto\\dfrac{I\\theta}{R}\\).",
      "电流元周围的磁场矢量与以导线为中心的同心圆相切：\\(\\mathrm{d}\\vec B\\) 同时垂直于 \\(\\mathrm{d}\\vec\\ell\\) 和 \\(\\hat r\\)，因此没有指向导线或背离导线的径向分量，也没有沿导线方向的分量。 · The field vectors around a current element are tangent to concentric circles centered on the wire: \\(\\mathrm{d}\\vec B\\) is perpendicular to both \\(\\mathrm{d}\\vec\\ell\\) and \\(\\hat r\\), so it has no radial component toward or away from the wire and no component along the wire.",
      "在垂直于导线的平面内，磁感线是同心圆，圆上各点的 \\(\\mathrm{d}B\\) 大小相同、方向沿切线；电流反向时，圆的绕行方向也反向。 · In a plane perpendicular to the wire, the field lines are concentric circles; every point on a circle has the same \\(\\mathrm{d}B\\) magnitude with a tangent direction, and reversing the current reverses the sense around the circles."
    ],
    "definition": "毕奥–萨伐尔定律（Biot–Savart law）给出电流元 \\(I\\,\\mathrm{d}\\vec\\ell\\) 在空间某点产生的磁场：\\(\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}\\)，其中 \\(\\hat r\\) 是从电流元指向观察点的单位矢量，\\(r\\) 是两者距离。对有限电流分布积分 \\(\\vec B=\\int\\mathrm{d}\\vec B\\) 即可求总磁场。对圆环中心，积分给出 \\(B=\\dfrac{\\mu_0I}{2R}\\)；对圆心角为 \\(\\theta\\) 的圆弧，\\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)；对有限直导线，\\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\)。这些结果都体现了“电流元贡献按距离平方衰减、方向由右手定则决定、总场按矢量叠加”的统一结构。 · The Biot–Savart law gives the magnetic field produced by a current element \\(I\\,\\mathrm{d}\\vec\\ell\\) at a point in space: \\(\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}\\), where \\(\\hat r\\) is the unit vector from the element to the observation point and \\(r\\) is the distance. Integrating over a finite current distribution, \\(\\vec B=\\int\\mathrm{d}\\vec B\\), gives the total field. For the center of a circular loop the integral gives \\(B=\\dfrac{\\mu_0I}{2R}\\); for an arc of central angle \\(\\theta\\), \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\); for a finite straight wire, \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\). These results share the same structure: each current element contributes with an inverse-square distance factor, the direction follows the right-hand rule, and the total field is a vector superposition.",
    "intuition": "把导线想成由无数小箭头 \\(I\\,\\mathrm{d}\\vec\\ell\\) 组成，每个小箭头都在观察点放出一支垂直于“小箭头—观察点”连线的小磁针。圆环中心很特殊：所有小箭头到中心的距离相同，方向又都与连线垂直，所以每支小磁针都指向同一方向，积分只剩“把弧长加起来”。圆弧只是圆环的一部分，磁场按角度比例缩小。有限直导线则要看两端张开的角：两端越接近无限远，角度越接近 \\(90^\\circ\\)，磁场越接近无限长导线的值。 · Think of a wire as countless little arrows \\(I\\,\\mathrm{d}\\vec\\ell\\), each contributing a tiny magnetic field perpendicular to the line joining it to the observation point. The center of a circular loop is special: every element is the same distance away and perpendicular to its radius, so all contributions point the same way and the integral reduces to adding up the arc length. An arc is just part of a loop, so its field scales with angle. For a finite straight wire, look at the angles subtended by the ends: the closer they are to infinity, the closer the angles are to \\(90^\\circ\\), and the field approaches the infinite-wire value.",
    "formulas": [
      {
        "latex": "\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}",
        "note": "毕奥–萨伐尔定律的矢量形式；\\(\\hat r\\) 从电流元指向观察点。 · Vector Biot–Savart law; \\(\\hat r\\) points from the current element to the observation point."
      },
      {
        "latex": "B_{\\mathrm{loop}}=\\dfrac{\\mu_0I}{2R}",
        "note": "单匝圆环中心的磁场大小；方向沿环轴，由右手定则确定。 · Field magnitude at the center of a single circular loop; the direction is along the axis, given by the right-hand rule."
      },
      {
        "latex": "B_{\\mathrm{loop},N}=\\dfrac{\\mu_0NI}{2R}",
        "note": "\\(N\\) 匝圆环中心的磁场；各匝同向叠加。 · Field at the center of an \\(N\\)-turn loop; all turns add in the same direction."
      },
      {
        "latex": "B_{\\mathrm{arc}}=\\dfrac{\\mu_0I\\theta}{4\\pi R}",
        "note": "半径为 \\(R\\)、圆心角为 \\(\\theta\\)（弧度）的圆弧在圆心处的磁场。 · Field at the center of an arc of radius \\(R\\) and central angle \\(\\theta\\) in radians."
      },
      {
        "latex": "B_{\\mathrm{finite}}=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)",
        "note": "有限直导线在垂直距离 \\(r\\) 处的磁场；\\(\\theta_1,\\theta_2\\) 为两端对观察点张角（相对垂线）。 · Field of a finite straight wire at perpendicular distance \\(r\\); \\(\\theta_1,\\theta_2\\) are the end angles measured from the perpendicular."
      },
      {
        "latex": "B_{\\mathrm{infinite}}=\\dfrac{\\mu_0I}{2\\pi r}",
        "note": "无限长直导线的磁场，是有限直导线在两端趋于无穷远时的极限。 · Field of an infinite straight wire, the limit of the finite wire as both ends recede to infinity."
      }
    ],
    "derivationNotes": [
      {
        "from": "毕奥–萨伐尔定律 · Biot–Savart law",
        "to": "圆环中心 · Center of a circular loop",
        "note": "取圆心为观察点，每个电流元到圆心距离均为 \\(R\\)，且 \\(\\mathrm{d}\\vec\\ell\\perp\\hat r\\)，故 \\(\\mathrm{d}B=\\dfrac{\\mu_0I\\,\\mathrm{d}\\ell}{4\\pi R^{2}}\\)；积分 \\(\\int\\mathrm{d}\\ell=2\\pi R\\) 得 \\(B=\\dfrac{\\mu_0I}{2R}\\)。 · Take the center as the observation point; every element is a distance \\(R\\) away and \\(\\mathrm{d}\\vec\\ell\\perp\\hat r\\), so \\(\\mathrm{d}B=\\dfrac{\\mu_0I\\,\\mathrm{d}\\ell}{4\\pi R^{2}}\\); integrating \\(\\int\\mathrm{d}\\ell=2\\pi R\\) gives \\(B=\\dfrac{\\mu_0I}{2R}\\)."
      },
      {
        "from": "圆环结果 · Loop result",
        "to": "圆弧结果 · Arc result",
        "note": "圆弧只是圆环的一部分，积分 \\(\\int\\mathrm{d}\\ell=R\\theta\\)，所以 \\(B=\\dfrac{\\mu_0IR\\theta}{4\\pi R^{2}}=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)。 · An arc is part of a loop with \\(\\int\\mathrm{d}\\ell=R\\theta\\), so \\(B=\\dfrac{\\mu_0IR\\theta}{4\\pi R^{2}}=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)."
      },
      {
        "from": "电流元场 · Element field",
        "to": "有限直导线积分 · Finite-wire integral",
        "note": "设观察点到导线的垂足为原点，导线沿 \\(x\\) 轴，\\(\\mathrm{d}\\ell=\\mathrm{d}x\\)；由几何关系把 \\(x\\) 换成角度，积分 \\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\frac{3}{2}}}\\) 得 \\(\\dfrac{1}{r}(\\sin\\theta_1+\\sin\\theta_2)\\)。 · Put the foot of the perpendicular at the origin and the wire along the \\(x\\)-axis, with \\(\\mathrm{d}\\ell=\\mathrm{d}x\\); change variables from \\(x\\) to angle and integrate \\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\frac{3}{2}}}\\) to obtain \\(\\dfrac{1}{r}(\\sin\\theta_1+\\sin\\theta_2)\\)."
      },
      {
        "from": "有限直导线 · Finite wire",
        "to": "无限长导线 · Infinite wire",
        "note": "令 \\(\\theta_1=\\theta_2=90^\\circ\\)，\\(\\sin90^\\circ=1\\)，得 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)；半无限长时一个角为 \\(0^\\circ\\)，得 \\(B=\\dfrac{\\mu_0I}{4\\pi r}\\)。 · Set \\(\\theta_1=\\theta_2=90^\\circ\\) with \\(\\sin90^\\circ=1\\) to get \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\); for a semi-infinite wire one angle is \\(0^\\circ\\), giving \\(B=\\dfrac{\\mu_0I}{4\\pi r}\\)."
      },
      {
        "from": "叠加原理 · Superposition",
        "to": "组合电流分布 · Composite current distribution",
        "note": "把组合导线拆成直线段、圆弧和径向段，分别求 \\(\\vec B\\) 后矢量相加；径向段的 \\(\\mathrm{d}\\vec\\ell\\parallel\\hat r\\)，对圆心磁场贡献为零。 · Split a composite wire into straight segments, arcs, and radial segments, find each \\(\\vec B\\), and add vectorially; for a radial segment \\(\\mathrm{d}\\vec\\ell\\parallel\\hat r\\), so its contribution at the center is zero."
      },
      {
        "from": "真空结果 · Vacuum result",
        "to": "磁介质 · Magnetic medium",
        "note": "线性未饱和介质中，用 \\(\\mu=\\mu_r\\mu_0\\) 替换 \\(\\mu_0\\)；若材料非线性，则需用 \\(B\\)–\\(H\\) 关系或数值方法。 · In a linear, unsaturated medium, replace \\(\\mu_0\\) by \\(\\mu=\\mu_r\\mu_0\\); for a nonlinear material, use the \\(B\\)–\\(H\\) relation or numerical methods."
      }
    ],
    "conditions": [
      "电流必须稳恒（或准稳态），这样各电流元的磁场方向固定、可直接积分。 · The current must be steady (or quasi-steady) so that each element's field direction is fixed and the integral is well defined.",
      "观察点不能落在导线上；\\(r=0\\) 时点电流元的场发散，实际导线需用有限截面处理。 · The observation point cannot lie on the wire; the field of a point current element diverges at \\(r=0\\), and a real wire requires a finite cross-section treatment.",
      "圆环和圆弧公式要求观察点位于圆心，且导线为平面圆弧；\\(N\\) 匝线圈要求各匝紧密、同向。 · The loop and arc formulas require the observation point to be at the center and the wire to be a planar arc; an \\(N\\)-turn coil requires closely wound, same-direction turns.",
      "有限直导线公式要求导线是直线段，\\(r\\) 是观察点到导线的垂直距离，\\(\\theta_1,\\theta_2\\) 按“相对垂线、两端在垂足两侧”定义。 · The finite-wire formula requires a straight segment, \\(r\\) the perpendicular distance from the observation point to the wire, and \\(\\theta_1,\\theta_2\\) defined from the perpendicular with the ends on opposite sides of the foot.",
      "叠加原理要求各段电流的磁场在同一介质中线性叠加；若存在磁介质，需先确认未饱和且 \\(\\mu\\) 可视为常数。 · Superposition requires the fields of all segments to add linearly in the same medium; with a magnetic medium, first confirm it is unsaturated and \\(\\mu\\) can be treated as constant.",
      "公式给出的是真空（或线性介质）中的磁场；高磁导率磁芯会改变 \\(B\\)，并可能因饱和而破坏线性。 · The formulas give the field in vacuum (or a linear medium); a high-permeability core changes \\(B\\) and may break linearity through saturation.",
      "角度必须用弧度制代入圆弧公式；有限直导线公式中的正弦角可以用角度或弧度，但计算器模式要一致。 · Angles must be in radians in the arc formula; the sine in the finite-wire formula accepts either degrees or radians as long as the calculator mode is consistent."
    ],
    "keyPoints": [
      "毕奥–萨伐尔定律是“电流元→磁场”的平方反比定律，总场按矢量积分。 · The Biot–Savart law is an inverse-square “current element to field” law, and the total field is a vector integral.",
      "圆环中心 \\(B=\\dfrac{\\mu_0I}{2R}\\)，注意分母是 \\(2R\\) 而不是 \\(2\\pi R\\)。 · At a loop center \\(B=\\dfrac{\\mu_0I}{2R}\\); the denominator is \\(2R\\), not \\(2\\pi R\\).",
      "圆弧中心 \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)，\\(\\theta\\) 用弧度；半圆是 \\(\\dfrac{\\mu_0I}{4R}\\)。 · At an arc center \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\) with \\(\\theta\\) in radians; a semicircle gives \\(\\dfrac{\\mu_0I}{4R}\\).",
      "有限直导线 \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\)，两端在垂足两侧时角度相加。 · For a finite wire \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\); add the angles when the ends are on opposite sides of the foot.",
      "\\(\\theta_1=\\theta_2=90^\\circ\\) 还原无限长导线 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)，这是最好的自检。 · Setting \\(\\theta_1=\\theta_2=90^\\circ\\) recovers the infinite-wire result \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\), the best self-check.",
      "径向段对圆心磁场贡献为零；组合图形先拆段、再矢量叠加。 · Radial segments contribute zero at the center; split composite shapes into segments and add vectorially.",
      "\\(N\\) 匝线圈的磁场是单匝的 \\(N\\) 倍（同向、紧密时）。 · An \\(N\\)-turn coil's field is \\(N\\) times the single-turn field when the turns are close and same-direction.",
      "方向永远由右手定则决定：四指沿电流弯曲，拇指指向环内/环轴磁场方向。 · Direction always follows the right-hand rule: curl the fingers along the current and the thumb gives the field direction inside the loop/along the axis.",
      "电流元磁场按 \\(\\mathrm{d}B\\propto\\dfrac{I\\sin\\theta}{r^{2}}\\) 变化：平方反比、正弦角依赖；比例题先写这条式子。 · The current-element field scales as \\(\\mathrm{d}B\\propto\\dfrac{I\\sin\\theta}{r^{2}}\\): inverse-square in distance and sinusoidal in angle; write this relation first in proportional-reasoning problems.",
      "电流元周围的场线是同心圆：\\(\\mathrm{d}\\vec B\\) 与圆相切，没有径向分量，也没有沿导线方向的分量。 · The field lines around a current element are concentric circles: \\(\\mathrm{d}\\vec B\\) is tangent, with no radial component and no component along the wire."
    ],
    "misconceptions": [
      "把圆环中心公式写成 \\(B=\\dfrac{\\mu_0I}{2\\pi R}\\)；正确结果是 \\(B=\\dfrac{\\mu_0I}{2R}\\)。 · Writing the loop-center field as \\(B=\\dfrac{\\mu_0I}{2\\pi R}\\); the correct result is \\(B=\\dfrac{\\mu_0I}{2R}\\).",
      "在圆弧公式中使用角度制；\\(\\theta\\) 必须用弧度，否则结果会差 \\(\\dfrac{180}{\\pi}\\) 倍。 · Using degrees in the arc formula; \\(\\theta\\) must be in radians, otherwise the result is off by a factor of \\(\\dfrac{180}{\\pi}\\).",
      "把有限直导线公式中的 \\(r\\) 当成导线长度；\\(r\\) 是观察点到导线的垂直距离。 · Treating \\(r\\) in the finite-wire formula as the wire length; \\(r\\) is the perpendicular distance from the observation point to the wire.",
      "在两端位于垂足同一侧时仍把两个正弦相加；应使用带符号角度或分段叠加。 · Adding the two sines when both ends are on the same side of the foot; use signed angles or split the wire into segments.",
      "认为径向段也会在圆心产生磁场；径向段 \\(\\mathrm{d}\\vec\\ell\\parallel\\hat r\\)，贡献为零。 · Believing radial segments produce a field at the center; for a radial segment \\(\\mathrm{d}\\vec\\ell\\parallel\\hat r\\), so the contribution is zero.",
      "把各段的磁场大小直接相加而不考虑方向；叠加是矢量叠加，方向相反时要相减。 · Adding the magnitudes of segment fields without considering direction; superposition is vector addition, so opposite directions subtract.",
      "认为 \\(B\\) 沿导线方向；\\(\\mathrm{d}\\vec B\\) 垂直于 \\(\\mathrm{d}\\vec\\ell\\) 与 \\(\\hat r\\)，圆环中心的 \\(\\vec B\\) 沿环轴。 · Believing \\(B\\) points along the wire; \\(\\mathrm{d}\\vec B\\) is perpendicular to both \\(\\mathrm{d}\\vec\\ell\\) and \\(\\hat r\\), and the field at a loop center points along the axis.",
      "在磁介质中直接把 \\(\\mu_0\\) 换成 \\(\\mu\\) 而不检查饱和；铁磁材料非线性时不能这样简单替换。 · Replacing \\(\\mu_0\\) by \\(\\mu\\) in a magnetic medium without checking saturation; for a nonlinear ferromagnet this simple replacement fails.",
      "认为电流元的磁场有指向导线、背离导线或沿导线的分量；\\(\\mathrm{d}\\vec B\\) 垂直于 \\(\\mathrm{d}\\vec\\ell\\) 与 \\(\\hat r\\)，只有切向分量。 · Believing the field of a current element has a component toward the wire, away from it, or along the wire; \\(\\mathrm{d}\\vec B\\) is perpendicular to both \\(\\mathrm{d}\\vec\\ell\\) and \\(\\hat r\\), so only the tangential component exists.",
      "把 \\(\\theta\\) 当作电流方向与磁场方向的夹角；\\(\\theta\\) 是 \\(\\mathrm{d}\\vec\\ell\\) 与 \\(\\hat r\\) 的夹角，而 \\(\\mathrm{d}\\vec B\\) 又与两者都垂直。 · Treating \\(\\theta\\) as the angle between the current and the field; \\(\\theta\\) is the angle between \\(\\mathrm{d}\\vec\\ell\\) and \\(\\hat r\\), while \\(\\mathrm{d}\\vec B\\) is perpendicular to both.",
      "认为电流加倍而距离不变时 \\(B\\) 不变，或距离加倍时 \\(B\\) 只减半；\\(B\\propto I\\) 且 \\(B\\propto\\dfrac{1}{r^{2}}\\)。 · Believing \\(B\\) is unchanged when the current doubles at fixed distance, or that doubling the distance only halves \\(B\\); in fact \\(B\\propto I\\) and \\(B\\propto\\dfrac{1}{r^{2}}\\)."
    ],
    "examples": [
      {
        "title": "例 1 · 多匝圆环中心 · Example 1: Center of a multi-turn loop",
        "prompt": "半径 \\(R=0.12\\,\\mathrm{m}\\) 的圆环有 \\(N=20\\) 匝，通有 \\(I=3.0\\,\\mathrm{A}\\) 的电流。求环中心的磁感应强度大小。 · A circular loop of radius \\(R=0.12\\,\\mathrm{m}\\) has \\(N=20\\) turns and carries \\(I=3.0\\,\\mathrm{A}\\). Find the magnetic field magnitude at its center.",
        "steps": [
          "用 \\(B=\\dfrac{\\mu_0NI}{2R}\\)。 · Use \\(B=\\dfrac{\\mu_0NI}{2R}\\).",
          "代入 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)：\\(B=\\dfrac{(4\\pi\\times10^{-7})(20)(3.0)}{2(0.12)}\\)。 · Substitute \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\): \\(B=\\dfrac{(4\\pi\\times10^{-7})(20)(3.0)}{2(0.12)}\\).",
          "\\(B=\\dfrac{7.54\\times10^{-5}}{0.24}=3.14\\times10^{-4}\\,\\mathrm{T}\\)。 · \\(B=\\dfrac{7.54\\times10^{-5}}{0.24}=3.14\\times10^{-4}\\,\\mathrm{T}\\)."
        ],
        "solution": "\\(B\\approx3.1\\times10^{-4}\\,\\mathrm{T}\\)，方向沿环轴，由右手定则确定。 · \\(B\\approx3.1\\times10^{-4}\\,\\mathrm{T}\\), along the loop axis according to the right-hand rule.",
        "solutionLatex": "B=\\dfrac{\\mu_0NI}{2R}=\\dfrac{(4\\pi\\times10^{-7})(20)(3.0)}{2(0.12)}=3.14\\times10^{-4}\\,\\mathrm{T}"
      },
      {
        "title": "例 2 · 圆弧中心的磁场 · Example 2: Field at the center of an arc",
        "prompt": "半径 \\(R=0.20\\,\\mathrm{m}\\) 的圆弧通有 \\(I=4.0\\,\\mathrm{A}\\) 的电流，圆心角为 \\(120^\\circ\\)。求圆心处的磁感应强度大小。 · A circular arc of radius \\(R=0.20\\,\\mathrm{m}\\) carries \\(I=4.0\\,\\mathrm{A}\\) and subtends \\(120^\\circ\\). Find the magnetic field magnitude at its center.",
        "steps": [
          "把角度换成弧度：\\(\\theta=120^\\circ\\times\\dfrac{\\pi}{180^\\circ}=\\dfrac{2\\pi}{3}\\,\\mathrm{rad}\\)。 · Convert to radians: \\(\\theta=120^\\circ\\times\\dfrac{\\pi}{180^\\circ}=\\dfrac{2\\pi}{3}\\,\\mathrm{rad}\\).",
          "用 \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)：\\(B=\\dfrac{(4\\pi\\times10^{-7})(4.0)(2.094)}{4\\pi(0.20)}\\)。 · Use \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\): \\(B=\\dfrac{(4\\pi\\times10^{-7})(4.0)(2.094)}{4\\pi(0.20)}\\).",
          "化简得 \\(B=1.0\\times10^{-7}\\times\\dfrac{(4.0)(2.094)}{0.20}=4.19\\times10^{-6}\\,\\mathrm{T}\\)。 · Simplify to \\(B=1.0\\times10^{-7}\\times\\dfrac{(4.0)(2.094)}{0.20}=4.19\\times10^{-6}\\,\\mathrm{T}\\)."
        ],
        "solution": "\\(B\\approx4.2\\times10^{-6}\\,\\mathrm{T}\\)，方向垂直于圆弧所在平面，由右手定则确定。 · \\(B\\approx4.2\\times10^{-6}\\,\\mathrm{T}\\), perpendicular to the plane of the arc according to the right-hand rule.",
        "solutionLatex": "B=\\dfrac{\\mu_0I\\theta}{4\\pi R}=\\dfrac{(4\\pi\\times10^{-7})(4.0)(2.094)}{4\\pi(0.20)}=4.19\\times10^{-6}\\,\\mathrm{T}"
      },
      {
        "title": "例 3 · 有限直导线 · Example 3: Finite straight wire",
        "prompt": "一段直导线通有 \\(I=5.0\\,\\mathrm{A}\\) 的电流。观察点到导线的垂直距离为 \\(r=0.10\\,\\mathrm{m}\\)，导线两端对观察点的张角分别为 \\(\\theta_1=45^\\circ\\) 和 \\(\\theta_2=30^\\circ\\)，两端位于垂足两侧。求该点的磁感应强度大小。 · A straight wire carries \\(I=5.0\\,\\mathrm{A}\\). The observation point is a perpendicular distance \\(r=0.10\\,\\mathrm{m}\\) from the wire, and the ends subtend angles \\(\\theta_1=45^\\circ\\) and \\(\\theta_2=30^\\circ\\), with the ends on opposite sides of the foot. Find the field magnitude.",
        "steps": [
          "用 \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\)。 · Use \\(B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\theta_1+\\sin\\theta_2)\\).",
          "\\(\\sin45^\\circ=0.707\\)，\\(\\sin30^\\circ=0.500\\)，所以括号内为 \\(1.207\\)。 · \\(\\sin45^\\circ=0.707\\) and \\(\\sin30^\\circ=0.500\\), so the bracket is \\(1.207\\).",
          "\\(B=\\dfrac{(4\\pi\\times10^{-7})(5.0)}{4\\pi(0.10)}(1.207)=1.0\\times10^{-7}\\times50\\times1.207=6.0\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B=\\dfrac{(4\\pi\\times10^{-7})(5.0)}{4\\pi(0.10)}(1.207)=1.0\\times10^{-7}\\times50\\times1.207=6.0\\times10^{-6}\\,\\mathrm{T}\\)."
        ],
        "solution": "\\(B\\approx6.0\\times10^{-6}\\,\\mathrm{T}\\)。若两端都趋于无穷远，\\(B\\) 会增大到 \\(\\dfrac{\\mu_0I}{2\\pi r}=1.0\\times10^{-5}\\,\\mathrm{T}\\)。 · \\(B\\approx6.0\\times10^{-6}\\,\\mathrm{T}\\). If both ends receded to infinity, \\(B\\) would increase to \\(\\dfrac{\\mu_0I}{2\\pi r}=1.0\\times10^{-5}\\,\\mathrm{T}\\).",
        "solutionLatex": "B=\\dfrac{\\mu_0I}{4\\pi r}(\\sin45^\\circ+\\sin30^\\circ)=6.0\\times10^{-6}\\,\\mathrm{T}"
      },
      {
        "title": "例 4 · 半圆加直径的叠加 · Example 4: Semicircle plus diameter",
        "prompt": "一根导线由半径 \\(R=0.15\\,\\mathrm{m}\\) 的半圆和沿直径的直导线组成，电流 \\(I=2.0\\,\\mathrm{A}\\) 沿半圆从一端流到另一端，再沿直径返回。求圆心处的磁感应强度。 · A wire consists of a semicircle of radius \\(R=0.15\\,\\mathrm{m}\\) and a straight diameter; a current \\(I=2.0\\,\\mathrm{A}\\) flows along the semicircle from one end to the other and returns along the diameter. Find the field at the center.",
        "steps": [
          "直径段沿半径方向穿过圆心，电流元 \\(\\mathrm{d}\\vec\\ell\\) 与 \\(\\hat r\\) 平行，\\(\\mathrm{d}\\vec\\ell\\times\\hat r=0\\)，所以直径段对圆心磁场贡献为零。 · The diameter passes through the center along a radial direction, so \\(\\mathrm{d}\\vec\\ell\\) is parallel to \\(\\hat r\\), \\(\\mathrm{d}\\vec\\ell\\times\\hat r=0\\), and the diameter contributes zero field at the center.",
          "半圆的圆心角 \\(\\theta=\\pi\\)，所以 \\(B=\\dfrac{\\mu_0I\\pi}{4\\pi R}=\\dfrac{\\mu_0I}{4R}\\)。 · The semicircle has \\(\\theta=\\pi\\), so \\(B=\\dfrac{\\mu_0I\\pi}{4\\pi R}=\\dfrac{\\mu_0I}{4R}\\).",
          "\\(B=\\dfrac{(4\\pi\\times10^{-7})(2.0)}{4(0.15)}=4.19\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B=\\dfrac{(4\\pi\\times10^{-7})(2.0)}{4(0.15)}=4.19\\times10^{-6}\\,\\mathrm{T}\\)."
        ],
        "solution": "\\(B\\approx4.2\\times10^{-6}\\,\\mathrm{T}\\)，方向垂直于半圆平面，由右手定则确定；直径段不贡献。 · \\(B\\approx4.2\\times10^{-6}\\,\\mathrm{T}\\), perpendicular to the semicircle plane according to the right-hand rule; the diameter contributes nothing.",
        "solutionLatex": "B=\\dfrac{\\mu_0I}{4R}=\\dfrac{(4\\pi\\times10^{-7})(2.0)}{4(0.15)}=4.19\\times10^{-6}\\,\\mathrm{T}"
      },
      {
        "title": "例 5 · 电流元磁场的比例推理 · Example 5: Proportional reasoning for a current element",
        "prompt": "某电流元在 \\(\\theta=90^\\circ\\)、\\(r=0.20\\,\\mathrm{m}\\) 的场点产生 \\(B=6.0\\times10^{-7}\\,\\mathrm{T}\\)。分别求下列改变后的磁场：(a) 电流变为 3 倍；(b) 距离变为 2 倍；(c) \\(\\theta\\) 变为 \\(30^\\circ\\)；(d) 电流变为 3 倍且距离变为 2 倍。 · A current element produces \\(B=6.0\\times10^{-7}\\,\\mathrm{T}\\) at a field point with \\(\\theta=90^\\circ\\) and \\(r=0.20\\,\\mathrm{m}\\). Find the new field when (a) the current triples; (b) the distance doubles; (c) \\(\\theta\\) becomes \\(30^\\circ\\); (d) the current triples and the distance doubles.",
        "steps": [
          "由 \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\)，\\(\\mathrm{d}B\\propto I\\)、\\(\\mathrm{d}B\\propto\\sin\\theta\\)、\\(\\mathrm{d}B\\propto\\dfrac{1}{r^{2}}\\)。 · From \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\), \\(\\mathrm{d}B\\propto I\\), \\(\\mathrm{d}B\\propto\\sin\\theta\\), and \\(\\mathrm{d}B\\propto\\dfrac{1}{r^{2}}\\).",
          "(a) \\(B'=3B=1.8\\times10^{-6}\\,\\mathrm{T}\\)。 · (a) \\(B'=3B=1.8\\times10^{-6}\\,\\mathrm{T}\\).",
          "(b) \\(B'=\\dfrac{B}{4}=1.5\\times10^{-7}\\,\\mathrm{T}\\)。 · (b) \\(B'=\\dfrac{B}{4}=1.5\\times10^{-7}\\,\\mathrm{T}\\).",
          "(c) \\(\\sin30^\\circ=0.5\\)，所以 \\(B'=0.5B=3.0\\times10^{-7}\\,\\mathrm{T}\\)。 · (c) \\(\\sin30^\\circ=0.5\\), so \\(B'=0.5B=3.0\\times10^{-7}\\,\\mathrm{T}\\).",
          "(d) \\(B'=3\\times\\dfrac{B}{4}=4.5\\times10^{-7}\\,\\mathrm{T}\\)。 · (d) \\(B'=3\\times\\dfrac{B}{4}=4.5\\times10^{-7}\\,\\mathrm{T}\\)."
        ],
        "solution": "(a) \\(1.8\\times10^{-6}\\,\\mathrm{T}\\)；(b) \\(1.5\\times10^{-7}\\,\\mathrm{T}\\)；(c) \\(3.0\\times10^{-7}\\,\\mathrm{T}\\)；(d) \\(4.5\\times10^{-7}\\,\\mathrm{T}\\)。 · (a) \\(1.8\\times10^{-6}\\,\\mathrm{T}\\); (b) \\(1.5\\times10^{-7}\\,\\mathrm{T}\\); (c) \\(3.0\\times10^{-7}\\,\\mathrm{T}\\); (d) \\(4.5\\times10^{-7}\\,\\mathrm{T}\\).",
        "solutionLatex": "B'=3\\times\\dfrac{6.0\\times10^{-7}}{4}=4.5\\times10^{-7}\\,\\mathrm{T}\\quad\\text{(part d)}"
      },
      {
        "title": "例 6 · 电流元周围的同心圆场 · Example 6: Concentric field around a current element",
        "prompt": "一短电流元沿 \\(+z\\) 方向放置在原点，电流为 \\(I\\)。分别判断场点 \\(P_1\\) 在 \\(+x\\) 轴、\\(P_2\\) 在 \\(-x\\) 轴、\\(P_3\\) 在 \\(+z\\) 轴（电流元正前方）处的磁场方向；并说明这些点附近磁感线的形状。 · A short current element at the origin points along \\(+z\\) and carries current \\(I\\). Determine the field direction at \\(P_1\\) on the \\(+x\\) axis, \\(P_2\\) on the \\(-x\\) axis, and \\(P_3\\) on the \\(+z\\) axis (directly ahead of the element), and describe the shape of the field lines near these points.",
        "steps": [
          "规定 \\(\\mathrm{d}\\vec\\ell\\) 沿 \\(+z\\)。在 \\(P_1\\)，\\(\\hat r=+x\\)，\\(\\mathrm{d}\\vec\\ell\\times\\hat r=z\\times x=+y\\)，所以 \\(\\mathrm{d}\\vec B\\) 沿 \\(+y\\)。 · Take \\(\\mathrm{d}\\vec\\ell\\) along \\(+z\\). At \\(P_1\\), \\(\\hat r=+x\\), so \\(\\mathrm{d}\\vec\\ell\\times\\hat r=z\\times x=+y\\) and \\(\\mathrm{d}\\vec B\\) points along \\(+y\\).",
          "在 \\(P_2\\)，\\(\\hat r=-x\\)，\\(z\\times(-x)=-y\\)，所以 \\(\\mathrm{d}\\vec B\\) 沿 \\(-y\\)。 · At \\(P_2\\), \\(\\hat r=-x\\), \\(z\\times(-x)=-y\\), so \\(\\mathrm{d}\\vec B\\) points along \\(-y\\).",
          "在 \\(P_3\\)，\\(\\hat r=+z\\) 与 \\(\\mathrm{d}\\vec\\ell\\) 平行，\\(\\mathrm{d}\\vec\\ell\\times\\hat r=0\\)，所以 \\(\\mathrm{d}\\vec B=0\\)。 · At \\(P_3\\), \\(\\hat r=+z\\) is parallel to \\(\\mathrm{d}\\vec\\ell\\), so \\(\\mathrm{d}\\vec\\ell\\times\\hat r=0\\) and \\(\\mathrm{d}\\vec B=0\\).",
          "在垂直于 \\(z\\) 轴的平面内，磁感线是以 \\(z\\) 轴为圆心的同心圆；\\(P_1\\)、\\(P_2\\) 处的场沿圆的切线，没有沿 \\(x\\) 轴的径向分量，也没有沿 \\(z\\) 轴的分量。 · In a plane perpendicular to the \\(z\\) axis, the field lines are concentric circles centered on the \\(z\\) axis; at \\(P_1\\) and \\(P_2\\) the field is tangent to the circle, with no radial component along \\(x\\) and no component along \\(z\\)."
        ],
        "solution": "\\(P_1\\)：\\(+y\\)；\\(P_2\\)：\\(-y\\)；\\(P_3\\)：\\(0\\)。磁感线为绕 \\(z\\) 轴的同心圆，方向由右手定则确定。 · \\(P_1\\): \\(+y\\); \\(P_2\\): \\(-y\\); \\(P_3\\): \\(0\\). The field lines are concentric circles about the \\(z\\) axis, with the sense given by the right-hand rule.",
        "solutionLatex": "P_1:\\,+y,\\qquad P_2:\\,-y,\\qquad P_3:\\,0"
      }
    ],
    "examTips": [
      "先画电流方向、观察点和从电流元指向观察点的 \\(\\hat r\\)，再用右手定则判断 \\(\\mathrm{d}\\vec B\\) 的方向。 · First draw the current direction, the observation point, and \\(\\hat r\\) from the element to the point, then use the right-hand rule to find the direction of \\(\\mathrm{d}\\vec B\\).",
      "圆环中心用 \\(B=\\dfrac{\\mu_0I}{2R}\\)，圆弧用 \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)；不要把 \\(2R\\) 与 \\(2\\pi R\\) 混淆。 · Use \\(B=\\dfrac{\\mu_0I}{2R}\\) for a loop center and \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\) for an arc; do not confuse \\(2R\\) with \\(2\\pi R\\).",
      "有限直导线题先在图上标出 \\(r\\) 和两个角 \\(\\theta_1,\\theta_2\\)，确认两端在垂足两侧，再代公式。 · For a finite-wire problem, mark \\(r\\) and the two angles \\(\\theta_1,\\theta_2\\) on the diagram, confirm the ends are on opposite sides of the foot, then substitute.",
      "用无限长导线的极限检查有限直导线结果：\\(\\theta_1=\\theta_2=90^\\circ\\) 时应得到 \\(\\dfrac{\\mu_0I}{2\\pi r}\\)。 · Check a finite-wire result with the infinite-wire limit: setting \\(\\theta_1=\\theta_2=90^\\circ\\) should give \\(\\dfrac{\\mu_0I}{2\\pi r}\\).",
      "组合图形先拆成直线段、圆弧和径向段；径向段在圆心贡献为零，其余段按矢量叠加。 · Split composite shapes into straight segments, arcs, and radial segments; radial segments contribute zero at the center, and the rest add vectorially.",
      "角度用弧度制代入圆弧公式；计算器模式要与题目单位一致。 · Use radians in the arc formula and keep the calculator mode consistent with the units in the problem.",
      "比例题先写 \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\)，再按因子相乘；不要只记结论。 · For proportional reasoning, write \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\) first, then multiply the factors; do not rely on memorized conclusions.",
      "画电流元磁场时先画以导线为轴的同心圆，再在圆上画切线箭头；不要画径向箭头或沿导线的箭头。 · When drawing the field of a current element, first draw concentric circles about the wire axis, then tangent arrows on the circles; never draw radial or along-wire arrows."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.3",
        "title": "毕奥–萨伐尔定律 · Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场 · Magnetism and Moving Charges",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.4",
        "title": "安培定律 · Ampère's Law",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.5",
        "title": "磁偶极与磁性材料 · Magnetic Dipoles and Magnetic Materials",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.8",
        "title": "复合场与霍尔效应 · Crossed Fields and the Hall Effect",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子 · Charged particles in magnetic fields"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：12.2 的磁场力与右手定则、12.3 的毕奥–萨伐尔定律给出电流元磁场的基本语言。 · Upstream: 12.2's magnetic force and right-hand rule and 12.3's Biot–Savart law provide the basic language of current-element fields.",
      "下游：12.4 的安培定律处理高对称电流；12.9 的积分结果可用于圆环磁偶极矩、霍尔元件和磁传感器设计。 · Downstream: 12.4's Ampère law handles highly symmetric currents; 12.9's integral results feed loop dipole moments, Hall devices, and magnetic sensor design.",
      "跨学科：圆环磁场是电磁铁、MRI 梯度线圈和无线充电线圈设计的基础；有限直导线模型用于估算母线、雷击通道和 PCB 走线附近的磁场。 · Cross-disciplinary: loop fields underlie electromagnets, MRI gradient coils, and wireless-charging coils; finite-wire models estimate fields near busbars, lightning channels, and PCB traces."
    ],
    "intuitionDetailed": "毕奥–萨伐尔积分的关键不是背公式，而是看清几何。先问三个问题：电流元到观察点多远？电流元与连线夹角多大？所有电流元的贡献方向是否一致？圆环中心之所以简单，是因为距离都是 \\(R\\)、夹角都是 \\(90^\\circ\\)、方向都相同，积分退化为“弧长”。圆弧只是把总弧长从 \\(2\\pi R\\) 换成 \\(R\\theta\\)，所以磁场按 \\(\\theta\\) 线性缩小。有限直导线则不同：不同位置的电流元到观察点距离不同、夹角也不同，必须把 \\(x\\) 换成角度积分；结果是两个正弦之和。两端越远，角度越接近 \\(90^\\circ\\)，磁场越接近无限长导线的 \\(\\dfrac{\\mu_0I}{2\\pi r}\\)。组合图形先用叠加原理拆段：径向段在圆心没有贡献，圆弧和直线段分别计算后再按方向相加。 · The key to Biot–Savart integration is geometry, not memorization. Ask three questions: how far is the current element from the observation point, what is the angle between the element and the line to the point, and do all contributions point the same way? A loop center is simple because every element is a distance \\(R\\) away, perpendicular to its radius, and contributes in the same direction, so the integral reduces to arc length. An arc simply changes the total length from \\(2\\pi R\\) to \\(R\\theta\\), so the field scales linearly with \\(\\theta\\). A finite straight wire is different: elements at different positions have different distances and angles, so change variables from \\(x\\) to angle; the result is a sum of two sines. The farther the ends, the closer the angles to \\(90^\\circ\\), and the closer the field to the infinite-wire value \\(\\dfrac{\\mu_0I}{2\\pi r}\\). For composite shapes, split the wire by superposition: radial segments contribute nothing at the center, and arcs and straight segments are calculated separately and added with directions.",
    "development": [
      "先复习 12.3 的毕奥–萨伐尔定律，明确 \\(\\mathrm{d}\\vec B\\) 的大小、方向和叠加方式。 · Review the Biot–Savart law from 12.3, clarifying the magnitude, direction, and superposition of \\(\\mathrm{d}\\vec B\\).",
      "对圆环中心写出 \\(\\mathrm{d}B\\)，确认 \\(r=R\\)、\\(\\mathrm{d}\\vec\\ell\\perp\\hat r\\)，完成积分得到 \\(B=\\dfrac{\\mu_0I}{2R}\\)。 · Write \\(\\mathrm{d}B\\) for a loop center, confirm \\(r=R\\) and \\(\\mathrm{d}\\vec\\ell\\perp\\hat r\\), and integrate to obtain \\(B=\\dfrac{\\mu_0I}{2R}\\).",
      "把圆环结果按弧长比例推广到圆弧，得到 \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)，并用半圆和整圆检查。 · Generalize the loop result to an arc by arc-length scaling, obtaining \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\), and check with a semicircle and a full circle.",
      "对有限直导线建立坐标，把 \\(x\\) 换成角度，完成积分并定义 \\(\\theta_1,\\theta_2\\)。 · Set up coordinates for a finite straight wire, change variables from \\(x\\) to angle, complete the integral, and define \\(\\theta_1,\\theta_2\\).",
      "用无限长、半无限长极限检查有限直导线公式，讨论两端同侧时的符号处理。 · Check the finite-wire formula with infinite and semi-infinite limits, and discuss sign handling when both ends are on the same side.",
      "用叠加原理分析半圆加直径、两段圆弧加径向段等组合图形，画方向图并求矢量和。 · Use superposition to analyze composites such as a semicircle plus diameter or two arcs plus radial segments, draw the direction diagram, and find the vector sum.",
      "用 \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\) 做比例推理：分别改变 \\(I\\)、\\(r\\)、\\(\\theta\\)，预测 \\(B\\) 的倍数并代入数值检验。 · Use \\(\\mathrm{d}B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\ell\\sin\\theta}{r^{2}}\\) for proportional reasoning: change \\(I\\), \\(r\\), and \\(\\theta\\) one at a time, predict the factor for \\(B\\), and check numerically.",
      "画电流元周围的同心圆场线，标出切向 \\(\\mathrm{d}\\vec B\\)，并说明为什么不存在径向和沿导线分量。 · Draw the concentric field lines around a current element, mark the tangent \\(\\mathrm{d}\\vec B\\), and explain why there is no radial or along-wire component."
    ],
    "checks": [
      "毕奥–萨伐尔定律中 \\(\\hat r\\) 的方向是从电流元指向观察点，还是反过来？ · In the Biot–Savart law, does \\(\\hat r\\) point from the current element to the observation point or the other way?",
      "为什么圆环中心的磁场可以只用 \\(\\int\\mathrm{d}\\ell\\) 计算？ · Why can the field at a loop center be calculated using only \\(\\int\\mathrm{d}\\ell\\)?",
      "圆弧公式中 \\(\\theta\\) 为什么必须用弧度？半圆的磁场是多少？ · Why must \\(\\theta\\) be in radians in the arc formula? What is the field of a semicircle?",
      "有限直导线公式在什么极限下变成无限长导线公式？请写出极限过程。 · In what limit does the finite-wire formula become the infinite-wire formula? Describe the limit.",
      "如果观察点与直导线两端在同一侧，两个角度应相加还是相减？ · If the observation point and both ends of a straight wire are on the same side, should the two angles be added or subtracted?",
      "为什么径向段对圆心磁场没有贡献？ · Why does a radial segment contribute no field at the center?",
      "两个同半径的半圆反向通电，圆心磁场是相加还是相消？ · If two semicircles of the same radius carry current in opposite directions, do their center fields add or cancel?",
      "把电流加倍、距离加倍，电流元的 \\(B\\) 变为原来的几倍？ · If the current doubles and the distance doubles, by what factor does the current element's \\(B\\) change?",
      "在电流元正前方（沿电流方向）的场点，\\(B\\) 是多少？为什么？ · What is \\(B\\) at a field point directly ahead of the current element (along the current), and why?",
      "电流元周围的磁场为什么没有径向分量和沿导线分量？ · Why does the field around a current element have no radial or along-wire component?",
      "\\(\\theta\\) 是哪两个矢量的夹角？为什么 \\(\\theta=90^\\circ\\) 时 \\(B\\) 最大？ · Which two vectors define \\(\\theta\\), and why is \\(B\\) maximum at \\(\\theta=90^\\circ\\)?"
    ],
    "vocabulary": [
      {
        "termZh": "毕奥–萨伐尔定律",
        "termEn": "Biot–Savart law",
        "defZh": "给出电流元产生磁场的平方反比定律，\\(\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}\\)。",
        "defEn": "The inverse-square law giving the magnetic field of a current element, \\(\\mathrm{d}\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,\\mathrm{d}\\vec\\ell\\times\\hat r}{r^{2}}\\)."
      },
      {
        "termZh": "电流元",
        "termEn": "current element",
        "defZh": "一段无限短的电流 \\(I\\,\\mathrm{d}\\vec\\ell\\)，是毕奥–萨伐尔定律的基本单元。",
        "defEn": "An infinitesimally short current segment \\(I\\,\\mathrm{d}\\vec\\ell\\), the basic element in the Biot–Savart law."
      },
      {
        "termZh": "叠加原理",
        "termEn": "superposition principle",
        "defZh": "多个电流元或电流段产生的磁场按矢量相加得到总磁场。",
        "defEn": "The total magnetic field is the vector sum of the fields produced by individual current elements or segments."
      },
      {
        "termZh": "圆环中心磁场",
        "termEn": "magnetic field at the center of a circular loop",
        "defZh": "单匝圆环中心的磁场大小 \\(B=\\dfrac{\\mu_0I}{2R}\\)。",
        "defEn": "The field magnitude at the center of a single circular loop, \\(B=\\dfrac{\\mu_0I}{2R}\\)."
      },
      {
        "termZh": "圆弧",
        "termEn": "circular arc",
        "defZh": "圆周的一段；圆心角为 \\(\\theta\\) 的圆弧在圆心产生 \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\)。",
        "defEn": "A segment of a circle; an arc with central angle \\(\\theta\\) produces \\(B=\\dfrac{\\mu_0I\\theta}{4\\pi R}\\) at its center."
      },
      {
        "termZh": "有限直导线",
        "termEn": "finite straight wire",
        "defZh": "长度有限的直线电流段；其磁场由两端张角的正弦和给出。",
        "defEn": "A straight current segment of finite length; its field is given by the sum of the sines of the end angles."
      },
      {
        "termZh": "真空磁导率",
        "termEn": "permeability of free space",
        "defZh": "真空中的磁导率 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)。",
        "defEn": "The permeability of vacuum, \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)."
      },
      {
        "termZh": "右手定则",
        "termEn": "right-hand rule",
        "defZh": "用右手四指沿电流方向弯曲、拇指指向磁场方向的方向判定方法。",
        "defEn": "A direction rule in which the right fingers curl along the current and the thumb points along the magnetic field."
      }
    ]
  },
  "12.10": {
    "id": "em/em-u12/12.10",
    "subject": "em",
    "chapterId": "em-u12",
    "unitCode": "12",
    "unitTitleZh": "磁场与电磁学",
    "unitTitleEn": "Magnetic Fields and Electromagnetism",
    "code": "12.10",
    "titleZh": "多电流磁场叠加",
    "titleEn": "Superposition of Magnetic Fields",
    "layer": "ap",
    "summary": "多个电流产生的磁场按矢量叠加：\\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\)。每根长直导线贡献 \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\)，方向沿以该导线为轴的圆的切线；同向平行电流之间的磁场相消，反向平行电流之间的磁场相加，适当位置可出现零场点。 · Magnetic fields from several currents add as vectors, \\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\). Each long straight wire contributes \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\) tangent to circles centered on that wire; between parallel currents in the same direction the fields cancel, between opposite currents they add, and a zero-field point can occur at an appropriate location.",
    "learningObjectives": [
      "能陈述磁场叠加原理，并把多个电流的磁场按矢量相加。 · State the superposition principle for magnetic fields and add the fields of several currents as vectors.",
      "能用安培定律求每根长直导线的 \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\)，再判断各场方向。 · Use Ampère's law to find \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\) for each long straight wire, then determine each field direction.",
      "能分析两根平行同向/反向电流的场叠加，判断两导线之间及外侧磁场是相加还是相消。 · Analyze the superposition of two parallel currents in the same or opposite directions and decide whether the fields between the wires and outside add or cancel.",
      "能求两导线之间或外侧的零场点位置，并用 \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\) 检查。 · Locate the zero-field point between or outside two wires and check it with \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\).",
      "能把磁场分解为分量，求非共线电流（如垂直导线）在一点产生的合磁场。 · Resolve magnetic fields into components to find the net field at a point from noncollinear currents such as perpendicular wires.",
      "能区分“大小相加”和“矢量相加”，并说明叠加原理在线性介质中的适用条件。 · Distinguish adding magnitudes from vector addition and state the conditions under which superposition holds in a linear medium."
    ],
    "essentialKnowledge": [
      "磁场叠加原理：空间某点的总磁场等于各电流（或运动电荷）单独存在时在该点产生的磁场的矢量和，\\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\)。 · Superposition: the total magnetic field at a point equals the vector sum of the fields that each current (or moving charge) would produce there if it alone were present, \\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\).",
      "每根长直导线在距离 \\(r_i\\) 处产生 \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\)，方向沿以该导线为轴的圆的切线，由右手定则确定。 · Each long straight wire produces \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\) at distance \\(r_i\\), tangent to a circle about that wire, with the sense given by the right-hand rule.",
      "安培定律描述大量运动载流子的集体磁场：穿过环路的净电流 \\(I_{\\mathrm{encl}}\\) 等于载流子的电荷通量，环流 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec\\ell=\\mu_0I_{\\mathrm{encl}}\\) 只依赖净电流，不必逐个追踪载流子。 · Ampère's law describes the collective field of many moving charge carriers: the net current through the loop, \\(I_{\\mathrm{encl}}\\), is the charge flux of the carriers, and the circulation \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec\\ell=\\mu_0I_{\\mathrm{encl}}\\) depends only on the net current without tracking individual carriers.",
      "两根平行导线电流同向时，两导线之间的磁场方向相反、相互减弱；两导线外侧的磁场方向相同、相互增强。 · For two parallel wires carrying current in the same direction, the fields between the wires point opposite ways and partly cancel; outside the pair the fields point the same way and add.",
      "两根平行导线电流反向时，两导线之间的磁场方向相同、相互增强；两导线外侧的磁场方向相反、相互减弱。 · For two parallel wires carrying opposite currents, the fields between the wires point the same way and add; outside the pair they point opposite ways and partly cancel.",
      "零场点：同向平行电流的零场点只能在两导线之间（位置由两电流大小决定），条件为 \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\)；反向平行电流（大小不等时）的零场点在两导线外侧、靠近电流较小的一侧，大小相等时没有有限零场点。 · Zero-field point: for same-direction parallel currents it lies between the wires (its position set by the current magnitudes) and satisfies \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\); for opposite currents of unequal magnitude it lies outside the pair on the side of the smaller current, and for equal opposite currents there is no finite zero-field point.",
      "在两导线连线的中点：同向平行电流的磁场方向相反、互相抵消（等大时为零）；反向平行电流的磁场方向相同、互相加强。 · At the midpoint of the line joining two parallel wires: for same-direction currents the fields point opposite ways and cancel (zero when equal); for opposite currents they point the same way and reinforce.",
      "非共线电流的叠加要分解为 \\(x\\)、\\(y\\)、\\(z\\) 分量：\\(B_x=\\sum_i B_{ix}\\)，\\(B_y=\\sum_i B_{iy}\\)，\\(B_z=\\sum_i B_{iz}\\)，再合成 \\(B=\\sqrt{B_x^{2}+B_y^{2}+B_z^{2}}\\)。 · For noncollinear currents, resolve into \\(x\\), \\(y\\), and \\(z\\) components: \\(B_x=\\sum_i B_{ix}\\), \\(B_y=\\sum_i B_{iy}\\), \\(B_z=\\sum_i B_{iz}\\), then combine \\(B=\\sqrt{B_x^{2}+B_y^{2}+B_z^{2}}\\).",
      "安培定律给出每个高对称电流的磁场（长直导线、螺线管、环面），叠加原理再把它们组合；对不具备高对称性的电流分布，需用毕奥–萨伐尔定律逐元积分。 · Ampère's law gives the field of each highly symmetric current (long wire, solenoid, toroid), and superposition combines them; for distributions without high symmetry, integrate element by element with the Biot–Savart law.",
      "电流是大量运动电荷的定向运动；把每个载流子的磁场叠加，宏观上得到导线电流的磁场。 · A current is the directed motion of many charge carriers; superposing the fields of the individual carriers gives the macroscopic field of the current-carrying wire.",
      "叠加原理只适用于线性介质：\\(\\vec B=\\mu\\vec H\\) 且 \\(\\mu\\) 为常数时，各电流的场可以独立相加；铁磁材料饱和后 \\(\\mu\\) 依赖 \\(H\\)，叠加不再成立。 · Superposition holds only in a linear medium: when \\(\\vec B=\\mu\\vec H\\) with constant \\(\\mu\\), the fields of separate currents add independently; after a ferromagnet saturates, \\(\\mu\\) depends on \\(H\\) and superposition fails.",
      "零场点只是该点 \\(\\vec B=0\\)，并不表示电流为零；导线中的电流和附近其他点的磁场一般不为零，场线在该点附近改变方向。 · A zero-field point means only that \\(\\vec B=0\\) at that point; it does not mean the current vanishes, and the currents and the fields at nearby points are generally nonzero, with field lines changing direction around that point."
    ],
    "definition": "磁场叠加原理指出：空间某点的总磁场是各电流（或运动电荷）单独存在时在该点产生的磁场的矢量和，\\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\)。对长直导线，每根导线贡献 \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\)，方向沿以该导线为轴的圆的切线。两根平行导线电流同向时，两导线之间的场相消、外侧的场增强；电流反向时，两导线之间的场增强、外侧的场相消。零场点要求各场矢量之和为零；对共线场，条件化为 \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\)。叠加原理只在线性、未饱和介质中成立。 · The superposition principle states that the total magnetic field at a point is the vector sum of the fields that each current (or moving charge) would produce there alone, \\(\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i\\). For long straight wires, each wire contributes \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\), tangent to a circle about that wire. For two parallel wires with currents in the same direction, the fields between the wires cancel and the fields outside reinforce; for opposite currents, the fields between reinforce and those outside cancel. A zero-field point requires the vector sum to vanish; for collinear fields the condition reduces to \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\). Superposition holds only in a linear, unsaturated medium.",
    "intuition": "把每根导线想成一个独立的“磁场源”，它只按自己的电流和距离产生 \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\)，方向沿以它为轴的圆的切线。叠加原理说：先把每个源单独算清楚，再在观察点把箭头首尾相接。两导线电流同向时，中间点的两个箭头方向相反，互相抵消；外侧两个箭头方向相同，互相加强。反向电流则相反。零场点就是两个箭头恰好等大反向的位置。 · Think of each wire as an independent “field source” that produces \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\) according to its own current and distance, tangent to a circle about that wire. Superposition says: compute each source separately, then place the arrows tip to tail at the observation point. For same-direction currents, the two arrows between the wires point opposite ways and cancel, while outside they point the same way and reinforce; opposite currents reverse this pattern. A zero-field point is where the two arrows are equal and opposite.",
    "formulas": [
      {
        "latex": "\\vec B_{\\mathrm{net}}=\\sum_i\\vec B_i",
        "note": "磁场叠加原理：总磁场是各电流磁场的矢量和。 · Superposition: the net field is the vector sum of the individual fields."
      },
      {
        "latex": "B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}",
        "note": "第 \\(i\\) 根长直导线在距离 \\(r_i\\) 处的磁场大小。 · Field magnitude of the \\(i\\)-th long straight wire at distance \\(r_i\\)."
      },
      {
        "latex": "\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}",
        "note": "两共线磁场大小相等、方向相反时的零场点条件。 · Zero-field condition when two collinear fields have equal magnitudes and opposite directions."
      },
      {
        "latex": "B_x=\\sum_i B_{ix},\\qquad B_y=\\sum_i B_{iy}",
        "note": "非共线电流先分别求分量，再求和。 · For noncollinear currents, sum the components separately."
      },
      {
        "latex": "B=\\sqrt{B_x^{2}+B_y^{2}}",
        "note": "由分量合成合磁场大小（平面情形）。 · Magnitude of the net field from its components (planar case)."
      },
      {
        "latex": "B_{\\mathrm{mid}}=\\dfrac{\\mu_0}{\\pi d}|I_1-I_2|",
        "note": "两根同向平行导线（间距 \\(d\\)）中点处的合磁场大小。 · Net field magnitude at the midpoint of two same-direction parallel wires separated by \\(d\\)."
      },
      {
        "latex": "B_{\\mathrm{mid}}=\\dfrac{\\mu_0}{\\pi d}(I_1+I_2)",
        "note": "两根反向平行导线（间距 \\(d\\)）中点处的合磁场大小。 · Net field magnitude at the midpoint of two opposite parallel wires separated by \\(d\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "线性叠加 · Linear superposition",
        "to": "总磁场 · Net field",
        "note": "磁场满足叠加原理；各电流的贡献独立计算后矢量相加。 · Magnetic fields obey superposition; compute each current's contribution independently and add the vectors."
      },
      {
        "from": "安培定律 · Ampère's law",
        "to": "单根长直导线 · Single long wire",
        "note": "取半径为 \\(r\\) 的同心圆环路，\\(B(2\\pi r)=\\mu_0I\\)，得 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)。 · Take a circular Ampere loop of radius \\(r\\): \\(B(2\\pi r)=\\mu_0I\\), so \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)."
      },
      {
        "from": "右手定则 · Right-hand rule",
        "to": "每根导线的方向 · Direction of each wire",
        "note": "四指沿电流弯曲，拇指给出磁场绕行方向；两导线在同一点的场方向可能相同或相反。 · Curl the right fingers along the current and the thumb gives the circulation sense of the field; at a given point the two wires' fields may point the same way or opposite ways."
      },
      {
        "from": "两平行导线 · Two parallel wires",
        "to": "场叠加 · Field superposition",
        "note": "同向电流之间两场反向、外侧同向；反向电流之间两场同向、外侧反向。 · For same-direction currents the fields are opposite between the wires and same outside; for opposite currents they are same between and opposite outside."
      },
      {
        "from": "零场条件 · Zero-field condition",
        "to": "零场点 · Zero-field point",
        "note": "令 \\(\\vec B_1+\\vec B_2=0\\)；共线时要求 \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\)，再结合几何判断位置。 · Set \\(\\vec B_1+\\vec B_2=0\\); for collinear fields this requires \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\), and the geometry fixes the location."
      },
      {
        "from": "非共线电流 · Noncollinear currents",
        "to": "分量叠加 · Component superposition",
        "note": "把每个 \\(\\vec B_i\\) 分解为 \\(x\\)、\\(y\\)、\\(z\\) 分量，分别求和后再合成。 · Resolve each \\(\\vec B_i\\) into \\(x\\), \\(y\\), and \\(z\\) components, sum each component, then recombine."
      },
      {
        "from": "电流的微观图像 · Microscopic current",
        "to": "宏观叠加 · Macroscopic superposition",
        "note": "每个载流子的磁场叠加，宏观上等于导线电流的磁场。 · Superposing the fields of individual carriers gives the macroscopic field of the wire current."
      },
      {
        "from": "线性介质 · Linear medium",
        "to": "适用条件 · Validity",
        "note": "只有 \\(\\mu\\) 为常数时才能独立叠加；铁磁饱和后 \\(\\mu\\) 依赖 \\(H\\)，叠加失效。 · Independent superposition requires constant \\(\\mu\\); after a ferromagnet saturates, \\(\\mu\\) depends on \\(H\\) and superposition fails."
      }
    ],
    "conditions": [
      "各电流稳恒或准稳态，磁场不随时间变化。 · Each current is steady or quasi-steady, so the field does not change with time.",
      "观察点不在任何导线上；长直导线公式要求导线长度远大于到观察点的距离。 · The observation point is not on any wire; the long-wire formula requires the wire length to be much greater than the distance to the point.",
      "真空或线性、各向同性、未饱和介质；铁磁材料饱和后叠加失效。 · Vacuum or a linear, isotropic, unsaturated medium; superposition fails after a ferromagnet saturates.",
      "各电流的磁场在同一时刻、同一点计算，再按矢量相加。 · Compute each current's field at the same point and time, then add vectors.",
      "忽略导线间磁相互作用对电流分布的影响（理想电流源）。 · Neglect the effect of magnetic interactions between wires on the current distribution (ideal current sources).",
      "多个运动电荷叠加时采用准静态近似，忽略相对论延迟效应。 · When superposing several moving charges, use the quasi-static approximation and neglect relativistic retardation.",
      "方向由每根导线的右手定则独立判断；电流反向时磁场反向。 · Determine each wire's field direction independently with the right-hand rule; reversing a current reverses its field."
    ],
    "keyPoints": [
      "总磁场是矢量和，不是各磁场大小的和。 · The net field is a vector sum, not a sum of magnitudes.",
      "同向平行电流：两导线之间相消、外侧增强；反向平行电流：两导线之间增强、外侧相消。 · Same-direction parallel currents: cancel between the wires and reinforce outside; opposite currents: reinforce between and cancel outside.",
      "零场点条件 \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\)：同向电流在中间，反向电流在外侧靠近小电流的一边（反向电流大小相等时无有限零场点）。 · The zero-field condition is \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\): between the wires for same-direction currents and outside near the smaller current for opposite currents (no finite zero-field point when the opposite currents are equal).",
      "长直导线 \\(B\\propto\\dfrac{I}{r}\\)；离导线越近，贡献越大。 · For a long wire \\(B\\propto\\dfrac{I}{r}\\); the closer the wire, the larger its contribution.",
      "非共线电流先分解为分量，再合成；不要直接加大小。 · For noncollinear currents, resolve into components first, then combine; do not add magnitudes directly.",
      "安培定律求单根/高对称电流的场，叠加原理求组合；无对称性时用毕奥–萨伐尔积分。 · Ampère's law gives the field of a single highly symmetric current, superposition combines them, and the Biot–Savart integral is needed without symmetry.",
      "零场点只是该点 \\(\\vec B=0\\)，导线中的电流和附近其他点的磁场并不为零。 · A zero-field point means only \\(\\vec B=0\\) there; the currents and the fields at nearby points are not zero.",
      "叠加只在 \\(\\mu\\) 为常数的线性介质中成立；饱和铁磁体不满足。 · Superposition holds only in a linear medium with constant \\(\\mu\\); a saturated ferromagnet does not satisfy it."
    ],
    "misconceptions": [
      "把各导线磁场的大小直接相加；应先判断方向，再矢量相加。 · Adding the magnitudes of the wires' fields directly; determine directions first, then add vectors.",
      "认为同向平行电流之间的磁场一定加强；实际上两场方向相反、相互减弱。 · Believing the field between same-direction parallel currents is always stronger; the two fields point opposite ways and weaken each other.",
      "认为反向平行电流之间没有零场点；零场点在两导线外侧、靠近电流较小的一侧。 · Believing opposite parallel currents have no zero-field point; it lies outside the pair, on the side of the smaller current.",
      "认为零场点处没有电流；电流仍在，只是该点的合磁场为零。 · Believing there is no current at a zero-field point; the currents are still there, but the net field at that point is zero.",
      "把安培定律直接用于不对称的多导线系统求某点磁场；安培定律给的是环流，求场需叠加或用毕奥–萨伐尔。 · Using Ampère's law directly to find the field at a point in an asymmetric multi-wire system; Ampère's law gives the circulation, so superposition or Biot–Savart is needed for the field.",
      "忽略两导线到观察点距离不同，误以为电流大的导线贡献一定大；\\(B\\propto\\dfrac{I}{r}\\)，距离也重要。 · Ignoring that the wires are at different distances and assuming the larger current always dominates; \\(B\\propto\\dfrac{I}{r}\\), so distance matters too.",
      "在铁磁材料饱和后仍把各电流的磁场简单相加；\\(\\mu\\) 非常数时叠加失效。 · Adding the fields of separate currents in a saturated ferromagnet; superposition fails when \\(\\mu\\) is not constant.",
      "把电流方向与电子漂移方向混淆，导致右手定则方向判断错误。 · Confusing current direction with electron drift direction, which reverses the right-hand-rule result."
    ],
    "examples": [
      {
        "title": "例 1 · 同向平行电流的零场点 · Example 1: Zero-field point of same-direction parallel currents",
        "prompt": "两根长直平行导线相距 \\(d=0.30\\,\\mathrm{m}\\)，电流同向，分别为 \\(I_1=2.0\\,\\mathrm{A}\\) 和 \\(I_2=4.0\\,\\mathrm{A}\\)。求两导线之间的零场点位置。 · Two long parallel wires are \\(d=0.30\\,\\mathrm{m}\\) apart and carry same-direction currents \\(I_1=2.0\\,\\mathrm{A}\\) and \\(I_2=4.0\\,\\mathrm{A}\\). Find the zero-field point between them.",
        "steps": [
          "同向电流在两导线之间产生的磁场方向相反，所以零场点只能在两导线之间。 · Same-direction currents produce opposite fields between the wires, so the zero-field point must lie between them.",
          "设零场点到 \\(I_1\\) 的距离为 \\(x\\)，到 \\(I_2\\) 的距离为 \\(0.30-x\\)。 · Let the distance from the point to \\(I_1\\) be \\(x\\) and to \\(I_2\\) be \\(0.30-x\\).",
          "令 \\(\\dfrac{I_1}{x}=\\dfrac{I_2}{0.30-x}\\)：\\(\\dfrac{2.0}{x}=\\dfrac{4.0}{0.30-x}\\)。 · Set \\(\\dfrac{I_1}{x}=\\dfrac{I_2}{0.30-x}\\): \\(\\dfrac{2.0}{x}=\\dfrac{4.0}{0.30-x}\\).",
          "解得 \\(2.0(0.30-x)=4.0x\\)，即 \\(0.60-2.0x=4.0x\\)，所以 \\(x=0.10\\,\\mathrm{m}\\)。 · Solve \\(2.0(0.30-x)=4.0x\\), so \\(0.60-2.0x=4.0x\\) and \\(x=0.10\\,\\mathrm{m}\\)."
        ],
        "solution": "零场点在两导线之间，距 \\(I_1\\) 为 \\(0.10\\,\\mathrm{m}\\)、距 \\(I_2\\) 为 \\(0.20\\,\\mathrm{m}\\)。 · The zero-field point is between the wires, \\(0.10\\,\\mathrm{m}\\) from \\(I_1\\) and \\(0.20\\,\\mathrm{m}\\) from \\(I_2\\).",
        "solutionLatex": "\\dfrac{2.0}{0.10}=\\dfrac{4.0}{0.20}=20\\,\\mathrm{A\\,m^{-1}}"
      },
      {
        "title": "例 2 · 反向平行电流的零场点 · Example 2: Zero-field point of opposite parallel currents",
        "prompt": "两根长直平行导线相距 \\(d=0.20\\,\\mathrm{m}\\)，电流反向，\\(I_1=3.0\\,\\mathrm{A}\\)，\\(I_2=1.0\\,\\mathrm{A}\\)。求零场点的位置。 · Two long parallel wires are \\(d=0.20\\,\\mathrm{m}\\) apart and carry opposite currents \\(I_1=3.0\\,\\mathrm{A}\\) and \\(I_2=1.0\\,\\mathrm{A}\\). Find the zero-field point.",
        "steps": [
          "反向电流在两导线之间产生的磁场方向相同、相互加强，所以零场点不在两导线之间，而在两导线外侧。 · Opposite currents produce same-direction fields between the wires, so the zero-field point is not between them but outside the pair.",
          "零场点靠近电流较小的一侧（\\(I_2\\) 一侧）。设它到 \\(I_2\\) 的距离为 \\(x\\)，到 \\(I_1\\) 的距离为 \\(0.20+x\\)。 · The point lies on the side of the smaller current (\\(I_2\\)). Let its distance to \\(I_2\\) be \\(x\\) and to \\(I_1\\) be \\(0.20+x\\).",
          "令 \\(\\dfrac{I_1}{0.20+x}=\\dfrac{I_2}{x}\\)：\\(\\dfrac{3.0}{0.20+x}=\\dfrac{1.0}{x}\\)。 · Set \\(\\dfrac{I_1}{0.20+x}=\\dfrac{I_2}{x}\\): \\(\\dfrac{3.0}{0.20+x}=\\dfrac{1.0}{x}\\).",
          "解得 \\(3.0x=0.20+x\\)，即 \\(2.0x=0.20\\)，所以 \\(x=0.10\\,\\mathrm{m}\\)。 · Solve \\(3.0x=0.20+x\\), so \\(2.0x=0.20\\) and \\(x=0.10\\,\\mathrm{m}\\)."
        ],
        "solution": "零场点在 \\(I_2\\) 外侧，距 \\(I_2\\) 为 \\(0.10\\,\\mathrm{m}\\)、距 \\(I_1\\) 为 \\(0.30\\,\\mathrm{m}\\)。 · The zero-field point is outside \\(I_2\\), \\(0.10\\,\\mathrm{m}\\) from \\(I_2\\) and \\(0.30\\,\\mathrm{m}\\) from \\(I_1\\).",
        "solutionLatex": "\\dfrac{3.0}{0.30}=\\dfrac{1.0}{0.10}=10\\,\\mathrm{A\\,m^{-1}}"
      },
      {
        "title": "例 3 · 同向平行电流中点的合磁场 · Example 3: Net field at the midpoint of same-direction parallel currents",
        "prompt": "两根长直平行导线相距 \\(d=0.30\\,\\mathrm{m}\\)，电流同向，\\(I_1=2.0\\,\\mathrm{A}\\)，\\(I_2=4.0\\,\\mathrm{A}\\)。求两导线中点处的合磁场大小和方向。 · Two long parallel wires are \\(d=0.30\\,\\mathrm{m}\\) apart and carry same-direction currents \\(I_1=2.0\\,\\mathrm{A}\\) and \\(I_2=4.0\\,\\mathrm{A}\\). Find the magnitude and direction of the net field at their midpoint.",
        "steps": [
          "中点距每根导线 \\(r=0.15\\,\\mathrm{m}\\)。 · The midpoint is \\(r=0.15\\,\\mathrm{m}\\) from each wire.",
          "\\(B_1=\\dfrac{\\mu_0I_1}{2\\pi r}=(2.0\\times10^{-7})\\dfrac{2.0}{0.15}=2.67\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B_1=\\dfrac{\\mu_0I_1}{2\\pi r}=(2.0\\times10^{-7})\\dfrac{2.0}{0.15}=2.67\\times10^{-6}\\,\\mathrm{T}\\).",
          "\\(B_2=\\dfrac{\\mu_0I_2}{2\\pi r}=(2.0\\times10^{-7})\\dfrac{4.0}{0.15}=5.33\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B_2=\\dfrac{\\mu_0I_2}{2\\pi r}=(2.0\\times10^{-7})\\dfrac{4.0}{0.15}=5.33\\times10^{-6}\\,\\mathrm{T}\\).",
          "同向电流在两导线之间产生的两场方向相反，所以合磁场为 \\(B_2-B_1=2.67\\times10^{-6}\\,\\mathrm{T}\\)，方向与较大电流 \\(I_2\\) 的磁场方向相同。 · Same-direction currents produce opposite fields between the wires, so the net field is \\(B_2-B_1=2.67\\times10^{-6}\\,\\mathrm{T}\\), in the direction of the larger current \\(I_2\\)'s field."
        ],
        "solution": "\\(B_{\\mathrm{net}}\\approx2.7\\times10^{-6}\\,\\mathrm{T}\\)，方向与 \\(I_2\\) 在该点产生的磁场方向相同。 · \\(B_{\\mathrm{net}}\\approx2.7\\times10^{-6}\\,\\mathrm{T}\\), in the direction of the field produced by \\(I_2\\) at that point.",
        "solutionLatex": "B_{\\mathrm{net}}=\\dfrac{\\mu_0}{\\pi d}|I_2-I_1|=\\dfrac{4\\pi\\times10^{-7}}{\\pi(0.30)}(2.0)=2.67\\times10^{-6}\\,\\mathrm{T}"
      },
      {
        "title": "例 4 · 垂直导线的分量叠加 · Example 4: Component superposition of perpendicular wires",
        "prompt": "一根长直导线沿 \\(x\\) 轴放置，电流 \\(I_1=2.0\\,\\mathrm{A}\\) 沿 \\(+x\\) 方向；另一根沿 \\(y\\) 轴放置，电流 \\(I_2=3.0\\,\\mathrm{A}\\) 沿 \\(+y\\) 方向。求点 \\(P(0.10\\,\\mathrm{m},0.20\\,\\mathrm{m})\\) 处的合磁场大小和方向。 · A long wire lies along the \\(x\\)-axis with current \\(I_1=2.0\\,\\mathrm{A}\\) in the \\(+x\\) direction; another lies along the \\(y\\)-axis with current \\(I_2=3.0\\,\\mathrm{A}\\) in the \\(+y\\) direction. Find the net field magnitude and direction at \\(P(0.10\\,\\mathrm{m},0.20\\,\\mathrm{m})\\).",
        "steps": [
          "对 \\(x\\) 轴导线，\\(P\\) 到导线的垂直距离为 \\(0.20\\,\\mathrm{m}\\)，\\(\\hat r=+y\\)，\\(\\vec v\\times\\hat r\\) 对应 \\(+x\\times+y=+z\\)，所以 \\(\\vec B_1\\) 沿 \\(+z\\)。 · For the \\(x\\)-axis wire, the perpendicular distance from \\(P\\) is \\(0.20\\,\\mathrm{m}\\), \\(\\hat r=+y\\), and the current direction cross \\(\\hat r\\) gives \\(+x\\times+y=+z\\), so \\(\\vec B_1\\) is along \\(+z\\).",
          "\\(B_1=(2.0\\times10^{-7})\\dfrac{2.0}{0.20}=2.0\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B_1=(2.0\\times10^{-7})\\dfrac{2.0}{0.20}=2.0\\times10^{-6}\\,\\mathrm{T}\\).",
          "对 \\(y\\) 轴导线，\\(P\\) 到导线的垂直距离为 \\(0.10\\,\\mathrm{m}\\)，\\(\\hat r=+x\\)，\\(+y\\times+x=-z\\)，所以 \\(\\vec B_2\\) 沿 \\(-z\\)。 · For the \\(y\\)-axis wire, the perpendicular distance from \\(P\\) is \\(0.10\\,\\mathrm{m}\\), \\(\\hat r=+x\\), and \\(+y\\times+x=-z\\), so \\(\\vec B_2\\) is along \\(-z\\).",
          "\\(B_2=(2.0\\times10^{-7})\\dfrac{3.0}{0.10}=6.0\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B_2=(2.0\\times10^{-7})\\dfrac{3.0}{0.10}=6.0\\times10^{-6}\\,\\mathrm{T}\\).",
          "两场都沿 \\(z\\) 轴，方向相反：\\(B_{\\mathrm{net}}=B_2-B_1=4.0\\times10^{-6}\\,\\mathrm{T}\\)，沿 \\(-z\\)。 · Both fields lie along the \\(z\\)-axis but point opposite ways: \\(B_{\\mathrm{net}}=B_2-B_1=4.0\\times10^{-6}\\,\\mathrm{T}\\), along \\(-z\\)."
        ],
        "solution": "\\(B_{\\mathrm{net}}=4.0\\times10^{-6}\\,\\mathrm{T}\\)，沿 \\(-z\\) 方向。 · \\(B_{\\mathrm{net}}=4.0\\times10^{-6}\\,\\mathrm{T}\\), along \\(-z\\).",
        "solutionLatex": "B_{\\mathrm{net}}=6.0\\times10^{-6}-2.0\\times10^{-6}=4.0\\times10^{-6}\\,\\mathrm{T}\\quad(-z)"
      }
    ],
    "examTips": [
      "先标每根导线的电流方向，再画以该导线为轴的圆和切线方向；不要凭直觉画箭头。 · Mark each wire's current direction first, then draw circles about that wire and their tangent directions; do not guess the arrows.",
      "同向平行电流：中间相消、外侧增强；反向：中间增强、外侧相消。 · Same-direction parallel currents cancel between and reinforce outside; opposite currents reinforce between and cancel outside.",
      "零场点先判断在哪一区域（同向在中间，反向在外侧），再列 \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\) 解几何。 · First decide the region of the zero-field point (between for same direction, outside for opposite), then solve the geometry with \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\).",
      "非共线时先分解为 \\(x\\)、\\(y\\) 分量，再合成；不要直接加大小。 · For noncollinear wires, resolve into \\(x\\) and \\(y\\) components, then combine; never add magnitudes directly.",
      "检查零场点结果：同向电流的零场点应在两导线之间，反向电流的零场点应在小电流外侧。 · Check the zero-field result: it should lie between the wires for same-direction currents and outside the smaller current for opposite currents.",
      "只有线性、未饱和介质才能叠加；铁磁材料饱和后不能简单相加。 · Superposition requires a linear, unsaturated medium; do not simply add fields in a saturated ferromagnet."
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
        "chapterId": "em-u12",
        "code": "12.3",
        "title": "毕奥–萨伐尔定律 · Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.7",
        "title": "运动电荷产生的磁场 · Magnetic Field of a Moving Charge",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.9",
        "title": "毕奥–萨伐尔积分与电流几何 · Biot–Savart Integration and Current Geometry",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.5",
        "title": "磁偶极与磁性材料 · Magnetic Dipoles and Magnetic Materials",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "charged-particle-B",
        "title": "磁场中的带电粒子 · Charged particles in magnetic fields"
      }
    ],
    "practiceHref": "#/em/practice/em-u12",
    "connections": [
      "上游：12.3 的毕奥–萨伐尔定律与 12.4 的安培定律给出单根导线或对称电流的磁场，12.7 给出单个运动电荷的磁场。 · Upstream: 12.3's Biot–Savart law and 12.4's Ampère law give the field of a single wire or symmetric current, and 12.7 gives the field of a single moving charge.",
      "下游：12.5 的磁偶极、12.9 的电流几何积分和 13.x 的线圈磁场都依赖叠加；多导线与线圈的磁场设计是电磁铁和传感器的基础。 · Downstream: 12.5's magnetic dipoles, 12.9's current-geometry integrals, and 13.x coil fields all rely on superposition; multi-wire and coil field design underlies electromagnets and sensors.",
      "跨学科：双绞线、母线、PCB 走线和 MRI 梯度线圈都需计算多电流叠加场；磁屏蔽利用反向电流或高磁导率材料抵消外场。 · Cross-disciplinary: twisted pairs, busbars, PCB traces, and MRI gradient coils all require multi-current field superposition; magnetic shielding uses opposing currents or high-permeability materials to cancel external fields."
    ],
    "intuitionDetailed": "把每根导线想成一个独立的“磁场源”，它只按自己的电流和距离产生 \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\)，方向沿以它为轴的圆的切线。叠加原理说：先把每个源单独算清楚，再在观察点把箭头首尾相接。两导线电流同向时，中间点的两个箭头方向相反，互相抵消；外侧两个箭头方向相同，互相加强。反向电流则相反。零场点就是两个箭头恰好等大反向的位置：同向电流只能在两导线之间找到，反向电流只能在两导线外侧、靠近小电流的一侧找到。非共线时，箭头不在同一直线上，要先把每个箭头分解成 \\(x\\)、\\(y\\) 分量，分别求和后再合成。注意叠加只对 \\(\\vec B\\) 成立，不能把大小直接相加；在铁磁材料饱和后，\\(\\mu\\) 不再是常数，叠加也会失效。 · Think of each wire as an independent “field source” that produces \\(B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}\\) according to its own current and distance, tangent to a circle about that wire. Superposition says: compute each source separately, then place the arrows tip to tail at the observation point. For same-direction currents, the two arrows between the wires point opposite ways and cancel, while outside they point the same way and reinforce; opposite currents reverse this pattern. A zero-field point is where the two arrows are equal and opposite: between the wires for same-direction currents, and outside the pair near the smaller current for opposite currents. When the wires are not collinear, the arrows are not on one line, so resolve each into \\(x\\) and \\(y\\) components, sum them, and recombine. Remember that superposition applies to \\(\\vec B\\), not to magnitudes; in a saturated ferromagnet \\(\\mu\\) is no longer constant and superposition fails.",
    "development": [
      "复习 12.4 的安培定律与右手定则，写出单根长直导线的 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)。 · Review Ampère's law and the right-hand rule from 12.4, and write the single-wire result \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\).",
      "对每根导线分别计算观察点的 \\(B_i\\)，画出方向箭头。 · Compute \\(B_i\\) at the observation point for each wire and draw its direction arrow.",
      "把箭头按矢量相加；先讨论同向/反向平行电流的中间与外侧区域。 · Add the arrows as vectors; first discuss the between and outside regions for same-direction and opposite currents.",
      "令合磁场为零，推导零场点条件 \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\)，并判断零场点所在区域。 · Set the net field to zero, derive the zero-field condition \\(\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\), and determine the region where the point lies.",
      "对非共线电流分解为 \\(x\\)、\\(y\\) 分量，求和后合成，检查方向与大小。 · Resolve noncollinear currents into \\(x\\) and \\(y\\) components, sum, recombine, and check magnitude and direction.",
      "讨论线性介质、未饱和条件和零场点的物理意义。 · Discuss the linear-medium and unsaturated conditions and the physical meaning of a zero-field point."
    ],
    "checks": [
      "两根同向平行导线之间的磁场为什么减弱？反向时为什么增强？ · Why is the field between two same-direction parallel wires weakened? Why is it strengthened for opposite currents?",
      "两根反向平行导线的零场点在哪一侧？为什么不在两导线之间？ · On which side does the zero-field point of two opposite parallel currents lie? Why is it not between the wires?",
      "两根电流相等、方向相同的平行导线，中点磁场是多少？ · What is the field at the midpoint of two equal parallel currents in the same direction?",
      "为什么不能把 \\(B_1\\) 与 \\(B_2\\) 的大小直接相加？ · Why can't you simply add the magnitudes of \\(B_1\\) and \\(B_2\\)?",
      "零场点是否意味着导线中没有电流？ · Does a zero-field point mean there is no current in the wires?",
      "叠加原理在什么条件下失效？ · Under what conditions does superposition fail?"
    ],
    "vocabulary": [
      {
        "termZh": "叠加原理",
        "termEn": "superposition principle",
        "defZh": "多个电流或运动电荷的磁场按矢量相加得到总磁场。",
        "defEn": "The total magnetic field is the vector sum of the fields produced by individual currents or moving charges."
      },
      {
        "termZh": "合磁场",
        "termEn": "net magnetic field",
        "defZh": "某点各电流磁场矢量叠加后的总磁场 \\(\\vec B_{\\mathrm{net}}\\)。",
        "defEn": "The total field \\(\\vec B_{\\mathrm{net}}\\) at a point after vector addition of the fields from all currents."
      },
      {
        "termZh": "零场点",
        "termEn": "zero-field point",
        "defZh": "合磁场为零的空间点；不代表电流为零。",
        "defEn": "A point in space where the net magnetic field is zero; it does not mean the current is zero."
      },
      {
        "termZh": "平行电流",
        "termEn": "parallel currents",
        "defZh": "方向相同或相反的两根平行导线中的电流。",
        "defEn": "Currents in two parallel wires that flow in the same or opposite directions."
      },
      {
        "termZh": "分量",
        "termEn": "vector component",
        "defZh": "把磁场沿 \\(x\\)、\\(y\\)、\\(z\\) 方向分解得到的标量分量。",
        "defEn": "A scalar component obtained by resolving the magnetic field along the \\(x\\), \\(y\\), or \\(z\\) direction."
      },
      {
        "termZh": "磁感线",
        "termEn": "magnetic field line",
        "defZh": "处处与合磁场方向相切的曲线。",
        "defEn": "A curve that is everywhere tangent to the net magnetic field."
      },
      {
        "termZh": "线性介质",
        "termEn": "linear medium",
        "defZh": "\\(\\vec B=\\mu\\vec H\\) 且 \\(\\mu\\) 为常数的介质；只有这种介质中磁场可独立叠加。",
        "defEn": "A medium in which \\(\\vec B=\\mu\\vec H\\) with constant \\(\\mu\\); only in such a medium can fields be superposed independently."
      },
      {
        "termZh": "安培环路",
        "termEn": "Ampère loop",
        "defZh": "用于应用安培定律的闭合路径；对称时可由环流求磁场。",
        "defEn": "A closed path used to apply Ampère's law; with symmetry, the circulation gives the field."
      }
    ]
  }
};
