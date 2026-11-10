export const UNIT = {
  "id": "em-u11",
  "code": "11",
  "titleZh": "电路",
  "titleEn": "Electric Circuits",
  "subject": "em",
  "layer": "ap"
};
export const TOPICS = {
  "11.1": {
    "id": "em/em-u11/11.1",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.1",
    "titleZh": "电流",
    "titleEn": "Electric Current",
    "layer": "ap",
    "summary": "电流 · Electric Current",
    "learningObjectives": [
      "能陈述「电流」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Current：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电流（Electric Current）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电流」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "I=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}",
        "note": "瞬时电流。"
      },
      {
        "latex": "I=nqv_dA",
        "note": "电流的微观表达式。"
      },
      {
        "latex": "J=\\dfrac{I}{A}",
        "note": "电流密度。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电流」的工作方程或机制链。"
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
      "稳恒电流；串联各处 I 相同",
      "正电流方向约定为正电荷运动方向",
      "电子带负电，漂移方向与约定电流方向相反"
    ],
    "keyPoints": [
      "掌握 11.1「电流」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电流」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电流」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "I=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电流」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电流」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电流」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.2",
        "title": "简单电路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电流」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电流」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电流」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.2": {
    "id": "em/em-u11/11.2",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.2",
    "titleZh": "简单电路",
    "titleEn": "Simple Circuits",
    "layer": "ap",
    "summary": "简单电路 · Simple Circuits",
    "learningObjectives": [
      "能陈述「简单电路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Simple Circuits：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "简单电路（Simple Circuits）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「简单电路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\varepsilon=I(R+r)",
        "note": "含内阻的闭合电路。"
      },
      {
        "latex": "V_{\\mathrm{term}}=\\varepsilon-Ir",
        "note": "端电压。"
      },
      {
        "latex": "R_{\\mathrm{series}}=\\sum R_i,\\quad \\dfrac{1}{R_{\\mathrm{parallel}}}=\\sum\\dfrac{1}{R_i}",
        "note": "串并联等效电阻。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「简单电路」的工作方程或机制链。"
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
      "稳恒直流、集中参数电路",
      "实际电表有内阻；理想导线",
      "内阻不可忽略时端电压随电流下降"
    ],
    "keyPoints": [
      "掌握 11.2「简单电路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「简单电路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「简单电路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\varepsilon=I(R+r)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「简单电路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「简单电路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「简单电路」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.1",
        "title": "电流",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.3",
        "title": "电阻与欧姆定律",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「简单电路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「简单电路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「简单电路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.3": {
    "id": "em/em-u11/11.3",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.3",
    "titleZh": "电阻与欧姆定律",
    "titleEn": "Resistance, Resistivity, and Ohm’s Law",
    "layer": "ap",
    "summary": "电阻与欧姆定律 · Resistance, Resistivity, and Ohm’s Law",
    "learningObjectives": [
      "能陈述「电阻与欧姆定律」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Resistance, Resistivity, and Ohm’s Law：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电阻与欧姆定律（Resistance, Resistivity, and Ohm’s Law）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电阻与欧姆定律」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "R=\\rho\\dfrac{L}{A}",
        "note": "电阻与电阻率。"
      },
      {
        "latex": "V=IR",
        "note": "欧姆定律。"
      },
      {
        "latex": "\\rho=\\rho_0[1+\\alpha(T-T_0)]",
        "note": "电阻率的温度依赖（线性近似）。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电阻与欧姆定律」的工作方程或机制链。"
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
      "均匀截面、均匀材料；L 为长度、A 为截面积",
      "欧姆材料；温度稳定或线性温度系数",
      "电流方向沿导体长度"
    ],
    "keyPoints": [
      "掌握 11.3「电阻与欧姆定律」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电阻与欧姆定律」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电阻与欧姆定律」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "R=\\rho\\dfrac{L}{A}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电阻与欧姆定律」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电阻与欧姆定律」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电阻与欧姆定律」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.2",
        "title": "简单电路",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.4",
        "title": "电功率",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电阻与欧姆定律」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电阻与欧姆定律」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电阻与欧姆定律」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.4": {
    "id": "em/em-u11/11.4",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.4",
    "titleZh": "电功率",
    "titleEn": "Electric Power",
    "layer": "ap",
    "summary": "电功率 · Electric Power",
    "learningObjectives": [
      "能陈述「电功率」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Power：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电功率（Electric Power）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电功率」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "P=IV",
        "note": "电功率的一般式。"
      },
      {
        "latex": "P=I^{2}R=\\dfrac{V^{2}}{R}",
        "note": "纯电阻的功率。"
      },
      {
        "latex": "E=Pt",
        "note": "电能。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电功率」的工作方程或机制链。"
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
      "P=IV 对任意元件成立",
      "P=I²R=V²/R 只适用于纯电阻",
      "电动机等非纯电阻要区分输入功率与损耗"
    ],
    "keyPoints": [
      "掌握 11.4「电功率」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电功率」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电功率」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "P=IV"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电功率」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电功率」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电功率」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.3",
        "title": "电阻与欧姆定律",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.5",
        "title": "复合直流电路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电功率」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电功率」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电功率」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.5": {
    "id": "em/em-u11/11.5",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.5",
    "titleZh": "复合直流电路",
    "titleEn": "Compound Direct Current Circuits",
    "layer": "ap",
    "summary": "复合直流电路 · Compound Direct Current Circuits",
    "learningObjectives": [
      "能陈述「复合直流电路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Compound Direct Current Circuits：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "复合直流电路（Compound Direct Current Circuits）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「复合直流电路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}",
        "note": "结点电流守恒。"
      },
      {
        "latex": "\\sum \\Delta V=0",
        "note": "闭合回路电压降代数和为零。"
      },
      {
        "latex": "R_{\\mathrm{series}}=\\sum R_i,\\quad \\dfrac{1}{R_{\\mathrm{parallel}}}=\\sum\\dfrac{1}{R_i}",
        "note": "等效电阻。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「复合直流电路」的工作方程或机制链。"
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
      "稳恒直流、集中参数电路",
      "先标定电流方向与回路绕行方向",
      "理想导线；电表内阻按题意处理"
    ],
    "keyPoints": [
      "掌握 11.5「复合直流电路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「复合直流电路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「复合直流电路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\sum \\Delta V=0"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「复合直流电路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「复合直流电路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「复合直流电路」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.4",
        "title": "电功率",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.6",
        "title": "基尔霍夫环路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「复合直流电路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「复合直流电路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「复合直流电路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.6": {
    "id": "em/em-u11/11.6",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.6",
    "titleZh": "基尔霍夫环路",
    "titleEn": "Kirchhoff's Loop Rule",
    "layer": "ap",
    "summary": "基尔霍夫环路 · Kirchhoff's Loop Rule",
    "learningObjectives": [
      "能陈述「基尔霍夫环路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Kirchhoff's Loop Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "基尔霍夫环路（Kirchhoff's Loop Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「基尔霍夫环路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum \\Delta V=0",
        "note": "基尔霍夫环路定律。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「基尔霍夫环路」的工作方程或机制链。"
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
      "闭合回路；稳恒电流",
      "沿同一绕行方向取电压降的正负",
      "电源、电阻、电容的电压符号要统一"
    ],
    "keyPoints": [
      "掌握 11.6「基尔霍夫环路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「基尔霍夫环路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「基尔霍夫环路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\sum \\Delta V=0"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「基尔霍夫环路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「基尔霍夫环路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「基尔霍夫环路」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.5",
        "title": "复合直流电路",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.7",
        "title": "基尔霍夫结点",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「基尔霍夫环路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「基尔霍夫环路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「基尔霍夫环路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.7": {
    "id": "em/em-u11/11.7",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.7",
    "titleZh": "基尔霍夫结点",
    "titleEn": "Kirchhoff's Junction Rule",
    "layer": "ap",
    "summary": "基尔霍夫结点 · Kirchhoff's Junction Rule",
    "learningObjectives": [
      "能陈述「基尔霍夫结点」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Kirchhoff's Junction Rule：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "基尔霍夫结点（Kirchhoff's Junction Rule）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「基尔霍夫结点」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}",
        "note": "基尔霍夫结点定律（电荷守恒）。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「基尔霍夫结点」的工作方程或机制链。"
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
      "稳恒电流；结点无电荷积累",
      "流入为正、流出为负时也可写成 ΣI=0",
      "所有支路电流方向先假设，结果负号表示实际反向"
    ],
    "keyPoints": [
      "掌握 11.7「基尔霍夫结点」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「基尔霍夫结点」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「基尔霍夫结点」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「基尔霍夫结点」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「基尔霍夫结点」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「基尔霍夫结点」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.6",
        "title": "基尔霍夫环路",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.8",
        "title": "RC 电路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「基尔霍夫结点」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「基尔霍夫结点」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「基尔霍夫结点」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.8": {
    "id": "em/em-u11/11.8",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.8",
    "titleZh": "RC 电路",
    "titleEn": "Resistor–Capacitor (RC) Circuits",
    "layer": "ap",
    "summary": "RC 电路 · Resistor–Capacitor (RC) Circuits",
    "learningObjectives": [
      "能陈述「RC 电路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Resistor–Capacitor (RC) Circuits：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "RC 电路（Resistor–Capacitor (RC) Circuits）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「RC 电路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\tau=RC",
        "note": "RC 时间常数。"
      },
      {
        "latex": "q(t)=C\\varepsilon\\left(1-e^{-\\dfrac{t}{\\tau}}\\right)",
        "note": "充电；初始电荷为零。"
      },
      {
        "latex": "q(t)=Q_0e^{-\\dfrac{t}{\\tau}}",
        "note": "放电；初始电荷 Q₀。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「RC 电路」的工作方程或机制链。"
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
      "恒定 R、C；电源内阻可并入 R",
      "充电初始 q(0)=0；放电初始 q(0)=Q₀",
      "t=τ 时充至 63.2%；约 5τ 基本完成"
    ],
    "keyPoints": [
      "掌握 11.8「RC 电路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「RC 电路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「RC 电路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\tau=RC"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「RC 电路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「RC 电路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「RC 电路」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u11",
        "code": "11.7",
        "title": "基尔霍夫结点",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "rc-circuit",
        "title": "RC 电路"
      }
    ],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「RC 电路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「RC 电路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「RC 电路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "11.9": {
    "id": "em/em-u11/11.9",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.9",
    "titleZh": "电流密度与截面积分",
    "titleEn": "Current Density and Surface Integration",
    "layer": "ap",
    "summary": "电流密度是单位垂直面积上的电流，方向沿该点的约定电流方向；总电流是电流密度在截面上的通量积分 \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\)。若 \\(\\vec J\\) 不均匀，必须按面积元积分，不能简单用 \\(I=JA\\)。 · Current density is current per unit perpendicular area, pointing along the conventional current at each point; total current is the flux integral \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\). When \\(\\vec J\\) is nonuniform, integrate over area elements instead of using \\(I=JA\\).",
    "learningObjectives": [
      "能写出电流密度的定义 \\(J=\\dfrac{\\mathrm{d}I}{\\mathrm{d}A_{\\perp}}\\)，说明其方向、单位与微观来源。 · Define current density through \\(J=\\dfrac{\\mathrm{d}I}{\\mathrm{d}A_{\\perp}}\\) and explain its direction, units, and microscopic origin.",
      "能对均匀与非均匀电流密度分别使用 \\(I=JA\\) 与 \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\) 求总电流。 · Compute total current with \\(I=JA\\) for uniform current density and with \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\) for nonuniform current density.",
      "能在圆柱截面上使用面积元 \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\) 完成径向积分。 · Carry out a radial integration over a cylindrical cross-section using the area element \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\).",
      "能解释同一稳恒电流通过不同截面积时，\\(I\\) 不变而 \\(J\\) 与漂移速度如何变化。 · Explain why the same steady current gives different current densities and drift speeds when the cross-sectional area changes.",
      "能判断倾斜截面、法向选择与点积符号，并用单位和极限情形检验结果。 · Evaluate tilted surfaces, normal-vector choices, and dot-product signs, and check results with units and limiting cases."
    ],
    "essentialKnowledge": [
      "电流密度 \\(\\vec J\\) 是矢量场：大小等于单位垂直面积上通过的电流，方向为该点正电荷运动（约定电流）的方向；单位是 \\(\\mathrm{A\\,m^{-2}}\\)。 · Current density \\(\\vec J\\) is a vector field: its magnitude is the current per unit perpendicular area and its direction is the direction of positive-charge motion (conventional current) at that point; its unit is \\(\\mathrm{A\\,m^{-2}}\\).",
      "若电流密度在截面上均匀且处处与截面垂直，则 \\(I=JA\\)，等价地 \\(J=\\dfrac{I}{A}\\)；这是平均值关系，不是非均匀情形下的局部值。 · If the current density is uniform over a cross-section and everywhere perpendicular to it, then \\(I=JA\\), equivalently \\(J=\\dfrac{I}{A}\\); this is an average relation, not the local value when \\(J\\) varies.",
      "一般情形下，总电流等于电流密度在截面上的通量积分：\\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A=\\int_S J\\cos\\theta\\,\\mathrm{d}A\\)，其中 \\(\\theta\\) 是 \\(\\vec J\\) 与面积元法向的夹角。 · In general, total current is the flux integral of current density over the surface: \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A=\\int_S J\\cos\\theta\\,\\mathrm{d}A\\), where \\(\\theta\\) is the angle between \\(\\vec J\\) and the area-element normal.",
      "微观上 \\(\\vec J=nq\\vec v_d\\)：\\(n\\) 是载流子数密度，\\(q\\) 是每个载流子的电荷，\\(\\vec v_d\\) 是漂移速度。金属中电子带负电，电子漂移方向与 \\(\\vec J\\) 相反。 · Microscopically, \\(\\vec J=nq\\vec v_d\\), where \\(n\\) is the carrier number density, \\(q\\) is the charge per carrier, and \\(\\vec v_d\\) is the drift velocity. In a metal the electrons are negative, so their drift is opposite \\(\\vec J\\).",
      "稳恒电流下，通过同一导体每一个完整截面的总电流 \\(I\\) 相同，但截面上的 \\(J\\) 分布可以不同；导体变细时 \\(J\\) 变大。 · For steady current, the total current \\(I\\) through every complete cross-section of the same conductor is the same, but the distribution of \\(J\\) over a cross-section can differ; \\(J\\) increases where the conductor becomes narrower.",
      "若已知圆柱对称的 \\(J(r)\\)，取半径为 \\(r\\)、宽为 \\(\\mathrm{d}r\\) 的圆环面积元 \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\)，则 \\(I=\\int_0^R J(r)\\,2\\pi r\\,\\mathrm{d}r\\)。 · For cylindrically symmetric \\(J(r)\\), use the annular area element \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\) for a ring of radius \\(r\\), giving \\(I=\\int_0^R J(r)\\,2\\pi r\\,\\mathrm{d}r\\).",
      "若已知矩形截面上的 \\(J(x,y)\\)，且电流垂直于截面，则 \\(I=\\int_0^w\\int_0^h J(x,y)\\,\\mathrm{d}y\\,\\mathrm{d}x\\)；若 \\(J\\) 只随一个坐标变化，另一方向的积分只贡献宽度或高度因子。 · For \\(J(x,y)\\) on a rectangular cross-section with current perpendicular to it, \\(I=\\int_0^w\\int_0^h J(x,y)\\,\\mathrm{d}y\\,\\mathrm{d}x\\); if \\(J\\) depends on only one coordinate, the other integration contributes only a width or height factor.",
      "同一稳恒电流通过两个均匀截面时 \\(I=J_1A_1=J_2A_2\\)，所以面积越小，电流密度越大；若载流子密度 \\(n\\) 不变，漂移速度也按相同比例增大。 · For the same steady current through two uniform cross-sections, \\(I=J_1A_1=J_2A_2\\), so the smaller area has the larger current density; if the carrier density \\(n\\) is unchanged, the drift speed increases by the same factor.",
      "平均电流密度定义为 \\(J_{\\mathrm{avg}}=\\dfrac{I}{A}\\)；它可以小于或大于局部最大值，不能把 \\(J_{\\mathrm{avg}}\\) 当作截面上每一点的 \\(J\\)。 · Average current density is \\(J_{\\mathrm{avg}}=\\dfrac{I}{A}\\); it may be smaller or larger than a local value, and it must not be treated as the current density at every point.",
      "面积元法向的选取决定点积的正负；对开放截面，取法向与待求正电流方向一致。对闭合曲面取外法向时，净流出电流等于包围电荷的减少率。 · The choice of area-element normal sets the sign of the dot product; for an open cross-section, choose the normal along the positive current direction. For a closed surface with outward normal, the net outward current equals the rate of decrease of enclosed charge."
    ],
    "definition": "电流密度（current density）是描述电流在截面上分布情况的矢量场。它的方向是该点约定电流的方向，大小等于单位垂直面积上通过的电流：\n\\[\nI=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A,\\qquad J=\\dfrac{\\mathrm{d}I}{\\mathrm{d}A_{\\perp}}.\n\\]\n若 \\(\\vec J\\) 在截面上均匀且与截面垂直，则积分退化为 \\(I=JA\\)，即 \\(J=\\dfrac{I}{A}\\)。电流密度的单位是安培每平方米，\\(\\mathrm{A\\,m^{-2}}\\)；电流 \\(I\\) 是标量，而 \\(\\vec J\\) 是矢量。 · Current density is the vector field that describes how current is distributed across a cross-section. Its direction is the conventional current direction at that point, and its magnitude is the current per unit perpendicular area. The defining relation is the surface integral above. If \\(\\vec J\\) is uniform and perpendicular to the cross-section, the integral reduces to \\(I=JA\\), or \\(J=\\dfrac{I}{A}\\). The unit of current density is amperes per square metre, \\(\\mathrm{A\\,m^{-2}}\\); current \\(I\\) is a scalar, while \\(\\vec J\\) is a vector.",
    "intuition": "把电流密度想成“雨量密度”：单位时间落在单位面积上的雨量是雨强，落在整个窗口上的总雨量要把每个小面积的贡献加起来。雨斜着落下时，只有垂直于窗口的分量穿过窗口；各处雨强不同时，必须把窗口分成小片再求和。电流同理：\\(\\vec J\\) 是每一点的“电流雨强”，\\(I\\) 是整个截面收到的总电流；倾斜截面用 \\(\\cos\\theta\\)，非均匀分布用积分。 · Think of current density as a rainfall rate: the rain falling per unit time on a unit area is an intensity, and the total rain through a window is the sum of contributions from all small patches. If the rain falls at an angle, only the component perpendicular to the window passes through; if the intensity varies from place to place, divide the window into patches and add. Likewise, \\(\\vec J\\) is the local current intensity, \\(I\\) is the total current through the whole surface, a tilted surface brings in \\(\\cos\\theta\\), and a nonuniform distribution requires an integral.",
    "formulas": [
      {
        "latex": "\\vec J=\\dfrac{I}{A}\\hat n",
        "note": "均匀电流密度且垂直于截面时的平均值关系；\\(\\hat n\\) 为约定电流方向。 · Average relation for uniform current density perpendicular to the cross-section; \\(\\hat n\\) points along the conventional current."
      },
      {
        "latex": "I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A",
        "note": "总电流的普适定义：电流密度在截面上的通量积分。 · General definition of total current: the flux integral of current density over the surface."
      },
      {
        "latex": "I=\\int_S J\\cos\\theta\\,\\mathrm{d}A",
        "note": "只取电流密度垂直于面积元的分量；\\(\\theta\\) 是 \\(\\vec J\\) 与法向的夹角。 · Only the component of current density perpendicular to the area element contributes; \\(\\theta\\) is the angle between \\(\\vec J\\) and the normal."
      },
      {
        "latex": "\\vec J=nq\\vec v_d",
        "note": "微观表达式：载流子数密度 \\(\\times\\) 每个载流子电荷 \\(\\times\\) 漂移速度。 · Microscopic expression: carrier density times charge per carrier times drift velocity."
      },
      {
        "latex": "I=nqv_dA",
        "note": "均匀、单一载流子且 \\(\\vec v_d\\perp A\\) 时的微观电流。 · Microscopic current for one uniform carrier type with \\(\\vec v_d\\perp A\\)."
      },
      {
        "latex": "I=\\int_0^R J(r)\\,2\\pi r\\,\\mathrm{d}r",
        "note": "圆柱对称电流密度在半径 \\(R\\) 的圆截面上的总电流。 · Total current through a circular cross-section of radius \\(R\\) for a cylindrically symmetric current density."
      },
      {
        "latex": "I=\\int_0^w\\int_0^h J(x,y)\\,\\mathrm{d}y\\,\\mathrm{d}x",
        "note": "矩形截面 \\(w\\times h\\) 上电流密度垂直于截面时的总电流。 · Total current through a \\(w\\times h\\) rectangular cross-section when current density is perpendicular to it."
      },
      {
        "latex": "J_{\\mathrm{avg}}=\\dfrac{I}{A}",
        "note": "平均电流密度；只有在 \\(J\\) 均匀时才等于每一点的局部值。 · Average current density; it equals the local value everywhere only when \\(J\\) is uniform."
      }
    ],
    "derivationNotes": [
      {
        "from": "电荷穿过面积元 · Charge crossing an area element",
        "to": "电流密度的通量定义 · Flux definition of current density",
        "note": "在时间 \\(\\mathrm{d}t\\) 内，以漂移速度 \\(\\vec v_d\\) 穿过面积元 \\(\\mathrm{d}\\vec A\\) 的电荷为 \\(\\mathrm{d}Q=nq\\vec v_d\\cdot\\mathrm{d}\\vec A\\,\\mathrm{d}t\\)，故 \\(\\mathrm{d}I=\\vec J\\cdot\\mathrm{d}\\vec A\\)。 · In time \\(\\mathrm{d}t\\), the charge crossing \\(\\mathrm{d}\\vec A\\) with drift velocity \\(\\vec v_d\\) is \\(\\mathrm{d}Q=nq\\vec v_d\\cdot\\mathrm{d}\\vec A\\,\\mathrm{d}t\\), so \\(\\mathrm{d}I=\\vec J\\cdot\\mathrm{d}\\vec A\\)."
      },
      {
        "from": "叠加原理 · Superposition",
        "to": "总电流积分 · Total-current integral",
        "note": "把截面上所有面积元的贡献相加，取极限得到 \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\)。 · Sum the contributions of all area elements and take the limit to obtain \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\)."
      },
      {
        "from": "均匀特例 · Uniform special case",
        "to": "\\(I=JA\\) · \\(I=JA\\)",
        "note": "当 \\(\\vec J\\) 为常量且沿法向时，\\(\\vec J\\cdot\\mathrm{d}\\vec A=J\\,\\mathrm{d}A\\)，积分给出 \\(I=J\\int_S\\mathrm{d}A=JA\\)。 · When \\(\\vec J\\) is constant and along the normal, \\(\\vec J\\cdot\\mathrm{d}\\vec A=J\\,\\mathrm{d}A\\), so the integral gives \\(I=J\\int_S\\mathrm{d}A=JA\\)."
      },
      {
        "from": "圆柱面积元 · Cylindrical area element",
        "to": "径向积分 · Radial integral",
        "note": "半径为 \\(r\\)、宽为 \\(\\mathrm{d}r\\) 的圆环面积为 \\(2\\pi r\\,\\mathrm{d}r\\)；把 \\(J(r)\\) 乘以该面积元并从 \\(0\\) 积到 \\(R\\)。 · A ring of radius \\(r\\) and width \\(\\mathrm{d}r\\) has area \\(2\\pi r\\,\\mathrm{d}r\\); multiply \\(J(r)\\) by this element and integrate from \\(0\\) to \\(R\\)."
      },
      {
        "from": "稳恒连续性 · Steady continuity",
        "to": "截面间的电流关系 · Relation between cross-sections",
        "note": "稳恒时没有电荷在导体中累积，故 \\(I_1=I_2\\)；对均匀截面 \\(J_1A_1=J_2A_2\\)，面积减小则 \\(J\\) 增大。 · In steady state no charge accumulates in the conductor, so \\(I_1=I_2\\); for uniform cross-sections \\(J_1A_1=J_2A_2\\), and a smaller area gives a larger \\(J\\)."
      },
      {
        "from": "平均值定义 · Definition of average",
        "to": "一致性检验 · Consistency check",
        "note": "由 \\(J_{\\mathrm{avg}}=\\dfrac{I}{A}\\) 反推 \\(I=J_{\\mathrm{avg}}A\\)，应与面积分结果一致；用这个关系检查积分是否漏掉面积权重。 · Reconstructing \\(I=J_{\\mathrm{avg}}A\\) from \\(J_{\\mathrm{avg}}=\\dfrac{I}{A}\\) must agree with the surface integral; use this to check that the area weighting was not omitted."
      }
    ],
    "conditions": [
      "电流处于稳恒或准稳恒状态，导体中没有持续的电荷堆积；若电流随时间变化，仍需在给定时刻使用瞬时 \\(\\vec J\\)。 · The current is steady or quasisteady, with no continuing charge accumulation in the conductor; if the current varies with time, use the instantaneous \\(\\vec J\\) at the chosen instant.",
      "所选取的曲面必须完整截断待求电流；截面通常取垂直于导体轴线的横截面。 · The chosen surface must completely cut the current of interest; the usual choice is a cross-section perpendicular to the conductor axis.",
      "面积元的法向要事先约定；开放截面取正电流方向为正法向，点积为负表示实际电流与法向相反。 · Choose the area-element normal in advance; for an open cross-section take the positive current direction as the positive normal, and a negative dot product means the actual current is opposite the normal.",
      "\\(I=JA\\) 只在 \\(\\vec J\\) 均匀且垂直于截面时成立；一般情况下 \\(J\\) 是位置的函数，必须积分。 · \\(I=JA\\) holds only when \\(\\vec J\\) is uniform and perpendicular to the cross-section; in general \\(J\\) is a function of position and must be integrated.",
      "圆柱积分公式 \\(I=\\int_0^R J(r)\\,2\\pi r\\,\\mathrm{d}r\\) 要求电流密度只依赖于半径 \\(r\\)，即具有轴对称性。 · The cylindrical integral \\(I=\\int_0^R J(r)\\,2\\pi r\\,\\mathrm{d}r\\) requires the current density to depend only on the radius \\(r\\), i.e. axial symmetry.",
      "载流子密度和漂移速度可以随位置变化；\\(J=nqv_d\\) 是逐点关系，不能把整条导线的 \\(n\\) 或 \\(v_d\\) 当成一个常数。 · Carrier density and drift velocity can vary with position; \\(J=nqv_d\\) is a point-by-point relation, so \\(n\\) or \\(v_d\\) cannot be treated as one constant over the whole conductor."
    ],
    "keyPoints": [
      "\\(\\vec J\\) 是矢量场，\\(I\\) 是标量；电流密度描述“分布”，电流描述“总共通过多少”。 · \\(\\vec J\\) is a vector field and \\(I\\) is a scalar; current density describes the distribution, while current describes how much passes in total.",
      "普适式是 \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\)；\\(I=JA\\) 只是均匀垂直的特例。 · The general relation is \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\); \\(I=JA\\) is only the uniform, perpendicular special case.",
      "圆柱截面上的面积元是 \\(2\\pi r\\,\\mathrm{d}r\\)，不是 \\(\\mathrm{d}r\\)；\\(r\\) 越大，同一径向宽度对应的面积越大。 · On a circular cross-section the area element is \\(2\\pi r\\,\\mathrm{d}r\\), not \\(\\mathrm{d}r\\); a larger \\(r\\) gives more area for the same radial width.",
      "给定非均匀 \\(J(r)\\) 时，先写面积元，再积分；不要用中心值或最大值乘以总面积。 · Given a nonuniform \\(J(r)\\), write the area element first and then integrate; do not multiply the total area by a central or maximum value.",
      "稳恒电流下 \\(I\\) 沿导体不变，但 \\(J\\) 可以因截面积或载流子密度变化而改变。 · For steady current, \\(I\\) is constant along the conductor, but \\(J\\) can change with cross-sectional area or carrier density.",
      "倾斜截面只接收 \\(\\vec J\\) 的法向分量，\\(I=JA\\cos\\theta\\)；当 \\(\\vec J\\) 与截面平行时电流为零。 · A tilted surface receives only the normal component of \\(\\vec J\\), \\(I=JA\\cos\\theta\\); when \\(\\vec J\\) is parallel to the surface, the current is zero.",
      "用单位检查：\\(J\\) 的单位是 \\(\\mathrm{A\\,m^{-2}}\\)，乘以面积得到 \\(\\mathrm{A}\\)；用极限检查：\\(J\\) 为常量时积分应退回 \\(JA\\)。 · Check units: \\(J\\) in \\(\\mathrm{A\\,m^{-2}}\\) times area gives \\(\\mathrm{A}\\); check limits: a constant \\(J\\) must reduce the integral to \\(JA\\)."
    ],
    "misconceptions": [
      "把电流密度当成电流，认为两者单位相同；实际上 \\(J\\) 的单位是 \\(\\mathrm{A\\,m^{-2}}\\)，\\(I\\) 的单位是 \\(\\mathrm{A}\\)。 · Treating current density as current and assuming they share units; \\(J\\) has units \\(\\mathrm{A\\,m^{-2}}\\) while \\(I\\) has units \\(\\mathrm{A}\\).",
      "在 \\(J\\) 非均匀时仍用 \\(J=\\dfrac{I}{A}\\) 求局部电流密度；这个式子只给出平均值。 · Using \\(J=\\dfrac{I}{A}\\) for a local value when \\(J\\) is nonuniform; this relation gives only the average.",
      "把圆柱截面的面积元写成 \\(\\mathrm{d}A=\\mathrm{d}r\\)，漏掉 \\(2\\pi r\\) 的周长因子。 · Writing the cylindrical area element as \\(\\mathrm{d}A=\\mathrm{d}r\\) and omitting the \\(2\\pi r\\) circumference factor.",
      "用导线中心的 \\(J\\) 或最大 \\(J\\) 乘以整个面积来估算总电流，导致结果偏大。 · Multiplying the central or maximum \\(J\\) by the whole area, which overestimates the total current.",
      "认为电流通过电阻后“被消耗”，所以后面的电流更小；稳恒电路中串联各截面的 \\(I\\) 相同。 · Thinking current is “used up” in a resistor so later sections carry less; in a steady series circuit every cross-section carries the same \\(I\\).",
      "认为导线变细时电流也变小；实际上 \\(I\\) 不变，变细处 \\(J\\) 变大。 · Thinking a narrower wire carries less current; in fact \\(I\\) stays the same and \\(J\\) becomes larger in the narrow section.",
      "忽略面积元法向，直接把 \\(J\\) 与 \\(A\\) 相乘；倾斜截面必须乘 \\(\\cos\\theta\\)，并用点积处理方向。 · Ignoring the area-element normal and simply multiplying \\(J\\) by \\(A\\); a tilted surface requires \\(\\cos\\theta\\) and a dot product for direction.",
      "认为 \\(J=nqv_d\\) 中的 \\(v_d\\) 就是电子热运动的平均速率；漂移速度是电场引起的缓慢定向速度，通常远小于热运动速率。 · Confusing the drift speed \\(v_d\\) in \\(J=nqv_d\\) with the average speed of thermal motion; drift is the slow directed motion caused by the field and is usually much smaller."
    ],
    "examples": [
      {
        "title": "例 1 · 均匀电流密度 · Example 1: Uniform current density",
        "prompt": "一根半径 \\(r=0.40\\,\\mathrm{mm}\\) 的导线中，电流密度均匀且沿导线方向，\\(J=3.0\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\)。求导线中的总电流。 · A wire of radius \\(r=0.40\\,\\mathrm{mm}\\) carries a uniform current density along its length, \\(J=3.0\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\). Find the total current.",
        "steps": [
          "截面积 \\(A=\\pi r^{2}=\\pi(4.0\\times10^{-4})^{2}=5.03\\times10^{-7}\\,\\mathrm{m^{2}}\\)。 · Cross-sectional area \\(A=\\pi r^{2}=\\pi(4.0\\times10^{-4})^{2}=5.03\\times10^{-7}\\,\\mathrm{m^{2}}\\).",
          "均匀且垂直：\\(I=JA=(3.0\\times10^{5})(5.03\\times10^{-7})=0.151\\,\\mathrm{A}\\)。 · Uniform and perpendicular: \\(I=JA=(3.0\\times10^{5})(5.03\\times10^{-7})=0.151\\,\\mathrm{A}\\).",
          "结果约 \\(0.15\\,\\mathrm{A}\\)，即 \\(150\\,\\mathrm{mA}\\)，数量级合理。 · The result is about \\(0.15\\,\\mathrm{A}\\), or \\(150\\,\\mathrm{mA}\\), a reasonable order of magnitude."
        ],
        "solution": "总电流约为 \\(0.15\\,\\mathrm{A}\\)。 · The total current is about \\(0.15\\,\\mathrm{A}\\).",
        "solutionLatex": "I=JA=(3.0\\times10^{5})\\pi(4.0\\times10^{-4})^{2}=0.151\\,\\mathrm{A}"
      },
      {
        "title": "例 2 · 径向非均匀电流密度 · Example 2: Radially nonuniform current density",
        "prompt": "半径 \\(R=1.0\\,\\mathrm{mm}\\) 的圆柱导线中，电流密度沿轴线方向且只随半径变化：\\(J(r)=J_0\\left(1-\\dfrac{r}{R}\\right)\\)，\\(J_0=1.2\\times10^{6}\\,\\mathrm{A\\,m^{-2}}\\)。求总电流 \\(I\\) 与平均电流密度 \\(J_{\\mathrm{avg}}\\)。 · A cylindrical wire of radius \\(R=1.0\\,\\mathrm{mm}\\) carries current along its axis with \\(J(r)=J_0\\left(1-\\dfrac{r}{R}\\right)\\), where \\(J_0=1.2\\times10^{6}\\,\\mathrm{A\\,m^{-2}}\\). Find the total current and the average current density.",
        "steps": [
          "取圆环面积元 \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\)，则 \\(I=\\int_0^R J_0\\left(1-\\dfrac{r}{R}\\right)2\\pi r\\,\\mathrm{d}r\\)。 · Use the annular element \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\), so \\(I=\\int_0^R J_0\\left(1-\\dfrac{r}{R}\\right)2\\pi r\\,\\mathrm{d}r\\).",
          "计算积分：\\(\\int_0^R\\left(r-\\dfrac{r^{2}}{R}\\right)\\mathrm{d}r=\\dfrac{R^{2}}{2}-\\dfrac{R^{2}}{3}=\\dfrac{R^{2}}{6}\\)，故 \\(I=\\dfrac{J_0\\pi R^{2}}{3}\\)。 · Evaluate: \\(\\int_0^R\\left(r-\\dfrac{r^{2}}{R}\\right)\\mathrm{d}r=\\dfrac{R^{2}}{2}-\\dfrac{R^{2}}{3}=\\dfrac{R^{2}}{6}\\), so \\(I=\\dfrac{J_0\\pi R^{2}}{3}\\).",
          "代入数值：\\(I=\\dfrac{(1.2\\times10^{6})\\pi(1.0\\times10^{-3})^{2}}{3}=1.26\\,\\mathrm{A}\\)。 · Substitute: \\(I=\\dfrac{(1.2\\times10^{6})\\pi(1.0\\times10^{-3})^{2}}{3}=1.26\\,\\mathrm{A}\\).",
          "平均电流密度 \\(J_{\\mathrm{avg}}=\\dfrac{I}{\\pi R^{2}}=\\dfrac{J_0}{3}=4.0\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\)，小于中心值 \\(J_0\\)。 · The average current density is \\(J_{\\mathrm{avg}}=\\dfrac{I}{\\pi R^{2}}=\\dfrac{J_0}{3}=4.0\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\), less than the central value \\(J_0\\)."
        ],
        "solution": "\\(I\\approx1.3\\,\\mathrm{A}\\)，\\(J_{\\mathrm{avg}}\\approx4.0\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\)。 · \\(I\\approx1.3\\,\\mathrm{A}\\) and \\(J_{\\mathrm{avg}}\\approx4.0\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\).",
        "solutionLatex": "I=\\dfrac{J_0\\pi R^{2}}{3}=1.26\\,\\mathrm{A},\\qquad J_{\\mathrm{avg}}=\\dfrac{I}{\\pi R^{2}}=\\dfrac{J_0}{3}=4.0\\times10^{5}\\,\\mathrm{A\\,m^{-2}}"
      },
      {
        "title": "例 3 · 矩形截面的线性分布 · Example 3: Linear variation over a rectangular cross-section",
        "prompt": "矩形导体截面宽 \\(w=2.5\\,\\mathrm{cm}\\)、高 \\(h=4.0\\,\\mathrm{cm}\\)，电流垂直于截面，电流密度只随宽度方向变化：\\(J(x)=J_0\\left(1+\\dfrac{x}{w}\\right)\\)，\\(J_0=8.0\\times10^{3}\\,\\mathrm{A\\,m^{-2}}\\)，\\(0\\le x\\le w\\)。求总电流。 · A rectangular conductor has width \\(w=2.5\\,\\mathrm{cm}\\) and height \\(h=4.0\\,\\mathrm{cm}\\). Current is perpendicular to the cross-section, and the current density varies only across the width: \\(J(x)=J_0\\left(1+\\dfrac{x}{w}\\right)\\), with \\(J_0=8.0\\times10^{3}\\,\\mathrm{A\\,m^{-2}}\\) and \\(0\\le x\\le w\\). Find the total current.",
        "steps": [
          "在宽度 \\(x\\) 处取宽 \\(\\mathrm{d}x\\)、高 \\(h\\) 的窄条，面积元 \\(\\mathrm{d}A=h\\,\\mathrm{d}x\\)。 · At width position \\(x\\), take a strip of width \\(\\mathrm{d}x\\) and height \\(h\\), with area element \\(\\mathrm{d}A=h\\,\\mathrm{d}x\\).",
          "\\(I=\\int_0^w J_0\\left(1+\\dfrac{x}{w}\\right)h\\,\\mathrm{d}x=J_0h\\left(w+\\dfrac{w}{2}\\right)=\\dfrac{3}{2}J_0hw\\)。 · \\(I=\\int_0^w J_0\\left(1+\\dfrac{x}{w}\\right)h\\,\\mathrm{d}x=J_0h\\left(w+\\dfrac{w}{2}\\right)=\\dfrac{3}{2}J_0hw\\).",
          "代入 \\(J_0=8.0\\times10^{3}\\,\\mathrm{A\\,m^{-2}}\\)、\\(h=0.040\\,\\mathrm{m}\\)、\\(w=0.025\\,\\mathrm{m}\\)：\\(I=12\\,\\mathrm{A}\\)。 · Substitute \\(J_0=8.0\\times10^{3}\\,\\mathrm{A\\,m^{-2}}\\), \\(h=0.040\\,\\mathrm{m}\\), and \\(w=0.025\\,\\mathrm{m}\\): \\(I=12\\,\\mathrm{A}\\)."
        ],
        "solution": "总电流为 \\(12\\,\\mathrm{A}\\)。 · The total current is \\(12\\,\\mathrm{A}\\).",
        "solutionLatex": "I=\\dfrac{3}{2}J_0hw=\\dfrac{3}{2}(8.0\\times10^{3})(0.040)(0.025)=12\\,\\mathrm{A}"
      },
      {
        "title": "例 4 · 倾斜截面与法向分量 · Example 4: Tilted surface and normal component",
        "prompt": "一块面积 \\(A=0.25\\,\\mathrm{m^{2}}\\) 的平面传感器置于均匀电流密度 \\(J=6.0\\,\\mathrm{A\\,m^{-2}}\\) 中，\\(\\vec J\\) 与传感器法向成 \\(40^\\circ\\)。求穿过传感器的电流。若传感器转到与 \\(\\vec J\\) 平行，电流变为多少？ · A flat sensor of area \\(A=0.25\\,\\mathrm{m^{2}}\\) sits in a uniform current density \\(J=6.0\\,\\mathrm{A\\,m^{-2}}\\), with \\(\\vec J\\) at \\(40^\\circ\\) to the sensor normal. Find the current through the sensor. What is the current if the sensor is turned parallel to \\(\\vec J\\)?",
        "steps": [
          "只有法向分量贡献：\\(I=JA\\cos\\theta\\)。 · Only the normal component contributes: \\(I=JA\\cos\\theta\\).",
          "\\(I=(6.0)(0.25)\\cos40^\\circ=1.5(0.766)=1.15\\,\\mathrm{A}\\)。 · \\(I=(6.0)(0.25)\\cos40^\\circ=1.5(0.766)=1.15\\,\\mathrm{A}\\).",
          "当传感器与 \\(\\vec J\\) 平行时 \\(\\theta=90^\\circ\\)，\\(\\cos90^\\circ=0\\)，故 \\(I=0\\)。 · When the sensor is parallel to \\(\\vec J\\), \\(\\theta=90^\\circ\\) and \\(\\cos90^\\circ=0\\), so \\(I=0\\)."
        ],
        "solution": "\\(I\\approx1.1\\,\\mathrm{A}\\)；转到与 \\(\\vec J\\) 平行时 \\(I=0\\)。 · \\(I\\approx1.1\\,\\mathrm{A}\\); when parallel to \\(\\vec J\\), \\(I=0\\).",
        "solutionLatex": "I=JA\\cos\\theta=(6.0)(0.25)\\cos40^\\circ=1.15\\,\\mathrm{A};\\qquad \\theta=90^\\circ\\Rightarrow I=0"
      },
      {
        "title": "例 5 · 导线变细：主张—证据—推理 · Example 5: A narrower wire, claim-evidence-reasoning",
        "prompt": "一根导线从半径 \\(1.0\\,\\mathrm{mm}\\) 的粗段平滑过渡到半径 \\(0.50\\,\\mathrm{mm}\\) 的细段，稳恒电流 \\(I=2.0\\,\\mathrm{A}\\) 通过。某学生说：“细段的电流密度是粗段的 2 倍，因为半径变成一半。”请判断并给出定量论证。 · A wire tapers smoothly from radius \\(1.0\\,\\mathrm{mm}\\) to radius \\(0.50\\,\\mathrm{mm}\\) while carrying a steady current \\(I=2.0\\,\\mathrm{A}\\). A student claims, “The current density in the narrow section is twice that in the wide section because the radius is halved.” Evaluate the claim with a quantitative argument.",
        "steps": [
          "主张：错误。证据：稳恒时两段电流相同 \\(I_1=I_2=2.0\\,\\mathrm{A}\\)，而截面积 \\(A=\\pi r^{2}\\) 按半径的平方变化。 · Claim: incorrect. Evidence: in steady state both sections carry the same current \\(I_1=I_2=2.0\\,\\mathrm{A}\\), while the area \\(A=\\pi r^{2}\\) scales as the square of the radius.",
          "粗段 \\(A_1=\\pi(1.0\\times10^{-3})^{2}=3.14\\times10^{-6}\\,\\mathrm{m^{2}}\\)，\\(J_1=\\dfrac{I}{A_1}=6.37\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\)。 · Wide section: \\(A_1=\\pi(1.0\\times10^{-3})^{2}=3.14\\times10^{-6}\\,\\mathrm{m^{2}}\\), so \\(J_1=\\dfrac{I}{A_1}=6.37\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\).",
          "细段 \\(A_2=\\pi(0.50\\times10^{-3})^{2}=7.85\\times10^{-7}\\,\\mathrm{m^{2}}\\)，\\(J_2=\\dfrac{I}{A_2}=2.55\\times10^{6}\\,\\mathrm{A\\,m^{-2}}\\)。 · Narrow section: \\(A_2=\\pi(0.50\\times10^{-3})^{2}=7.85\\times10^{-7}\\,\\mathrm{m^{2}}\\), so \\(J_2=\\dfrac{I}{A_2}=2.55\\times10^{6}\\,\\mathrm{A\\,m^{-2}}\\).",
          "比较：\\(\\dfrac{J_2}{J_1}=\\dfrac{A_1}{A_2}=4\\)，所以细段电流密度是粗段的 4 倍，不是 2 倍。 · Compare: \\(\\dfrac{J_2}{J_1}=\\dfrac{A_1}{A_2}=4\\), so the narrow section has four times the current density, not twice.",
          "推理：若载流子密度 \\(n\\) 相同，则 \\(v_d=\\dfrac{J}{nq}\\) 也使细段漂移速度变为 4 倍；总电流仍为 \\(2.0\\,\\mathrm{A}\\)。 · Reasoning: if the carrier density \\(n\\) is the same, \\(v_d=\\dfrac{J}{nq}\\) makes the drift speed four times larger in the narrow section as well; the total current remains \\(2.0\\,\\mathrm{A}\\)."
        ],
        "solution": "学生把半径比误当成面积比。细段 \\(J_2\\approx2.6\\times10^{6}\\,\\mathrm{A\\,m^{-2}}\\)，粗段 \\(J_1\\approx6.4\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\)，比值为 4。 · The student confused the radius ratio with the area ratio. The narrow section has \\(J_2\\approx2.6\\times10^{6}\\,\\mathrm{A\\,m^{-2}}\\), the wide section \\(J_1\\approx6.4\\times10^{5}\\,\\mathrm{A\\,m^{-2}}\\), and the ratio is 4.",
        "solutionLatex": "J_1=\\dfrac{I}{\\pi r_1^{2}}=6.37\\times10^{5}\\,\\mathrm{A\\,m^{-2}},\\qquad J_2=\\dfrac{I}{\\pi r_2^{2}}=2.55\\times10^{6}\\,\\mathrm{A\\,m^{-2}},\\qquad \\dfrac{J_2}{J_1}=4"
      }
    ],
    "examTips": [
      "先判断 \\(J\\) 是否均匀：均匀且垂直才可直接用 \\(I=JA\\)，否则写面积分。 · First decide whether \\(J\\) is uniform: use \\(I=JA\\) directly only when it is uniform and perpendicular; otherwise write the surface integral.",
      "圆柱截面先写 \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\)，再代 \\(J(r)\\)；不要漏掉 \\(r\\) 的权重。 · For a circular cross-section, write \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\) before substituting \\(J(r)\\); do not omit the factor \\(r\\).",
      "检查单位：\\(\\mathrm{A\\,m^{-2}}\\times\\mathrm{m^{2}}=\\mathrm{A}\\)；若结果不是安培，通常漏了面积因子。 · Check units: \\(\\mathrm{A\\,m^{-2}}\\times\\mathrm{m^{2}}=\\mathrm{A}\\); a result that is not in amperes usually means a missing area factor.",
      "用极限检验积分：令 \\(J\\) 为常量，积分应化为 \\(JA\\)；令 \\(R\\to0\\)，总电流应趋于零。 · Test the integral with limits: a constant \\(J\\) must reduce it to \\(JA\\), and \\(R\\to0\\) must make the total current approach zero.",
      "涉及“电流是否相同”时先抓稳恒连续性：\\(I\\) 沿串联导体不变，变的是 \\(J\\) 和可能的 \\(v_d\\)。 · When asked whether currents are equal, use steady continuity first: \\(I\\) is constant along a series conductor, while \\(J\\) and possibly \\(v_d\\) change.",
      "论证题按“主张—证据—推理”组织：明确 \\(I\\) 不变，写出 \\(A\\) 的比例，再由 \\(J=\\dfrac{I}{A}\\) 推出 \\(J\\) 的比例。 · Organize a CER response: state that \\(I\\) is constant, write the area ratio, and then use \\(J=\\dfrac{I}{A}\\) to obtain the current-density ratio."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.1",
        "title": "电流 · Electric Current",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.3",
        "title": "电阻与欧姆定律 · Resistance, Resistivity, and Ohm's Law",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.7",
        "title": "基尔霍夫结点 · Kirchhoff's Junction Rule",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.4",
        "title": "电通量 · Electric Flux",
        "relation": "方法类比 · method analogy"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：11.1 的 \\(I=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}\\) 与 \\(I=nqv_dA\\) 给出电流的宏观、微观定义；本主题把它们推广为逐点的 \\(\\vec J\\) 与面积分。 · Upstream: the macroscopic \\(I=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}\\) and microscopic \\(I=nqv_dA\\) from 11.1 are generalized here into the point-by-point field \\(\\vec J\\) and a surface integral.",
      "下游：欧姆定律的局部形式 \\(\\vec J=\\sigma\\vec E\\)、基尔霍夫结点规则与电阻发热都建立在电流密度概念上。 · Downstream: the local form of Ohm's law \\(\\vec J=\\sigma\\vec E\\), Kirchhoff's junction rule, and resistive heating all build on current density.",
      "数学：面积分、通量与点积；圆柱坐标中的面积元 \\(2\\pi r\\,\\mathrm{d}r\\) 是本题型最常用的积分工具。 · Mathematics: surface integrals, flux, and dot products; the cylindrical area element \\(2\\pi r\\,\\mathrm{d}r\\) is the most common integration tool for this question type.",
      "跨学科：生物膜电流、电解液与半导体中的载流子输运，都用“电流密度 = 电荷密度 \\(\\times\\) 漂移速度”描述。 · Cross-disciplinary: membrane currents in biology and carrier transport in electrolytes and semiconductors are described by “current density = charge density times drift velocity.”"
    ],
    "intuitionDetailed": "先画一张截面图：在截面上画许多小箭头表示 \\(\\vec J\\)，箭头越长表示该处电流越密。总电流就是“有多少箭头穿过这张面”，所以要把 \\(\\vec J\\) 与每个面积元 \\(\\mathrm{d}\\vec A\\) 点乘后加起来。若所有箭头等长且都垂直穿过平面，积分就退化为 \\(JA\\)；若中心箭头长、边缘箭头短，就必须按圆环面积 \\(2\\pi r\\,\\mathrm{d}r\\) 加权，因为同样的径向宽度在外圈包含更多面积。若面是斜的，只有垂直于面的分量算数，相当于乘 \\(\\cos\\theta\\)。分析导线变细时，记住 \\(I\\) 是“总量”，沿导线不变；\\(J\\) 是“密集程度”，面积越小越密集。 · First draw a cross-section with many small arrows for \\(\\vec J\\), longer arrows where the current is denser. The total current is how many arrows pierce the surface, so take the dot product of \\(\\vec J\\) with every area element \\(\\mathrm{d}\\vec A\\) and add. If all arrows have equal length and cross perpendicularly, the integral reduces to \\(JA\\); if arrows are long at the centre and short at the edge, weight by the ring area \\(2\\pi r\\,\\mathrm{d}r\\), because the same radial width contains more area at larger \\(r\\). For a tilted surface, only the perpendicular component counts, which brings in \\(\\cos\\theta\\). When a wire narrows, remember that \\(I\\) is the total amount and stays constant along the wire, while \\(J\\) is the density and becomes larger where the area is smaller.",
    "development": [
      "从 11.1 的电流定义出发，把“单位时间通过截面的电荷”细化为“单位时间通过单位垂直面积的电荷”。 · Start from the current definition in 11.1 and refine “charge crossing a cross-section per unit time” into “charge crossing a unit perpendicular area per unit time.”",
      "写出普适定义 \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\)，并说明点积只取法向分量。 · Write the general definition \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\) and explain that the dot product selects the normal component.",
      "先做均匀特例 \\(I=JA\\)，确认它与 11.1 的 \\(I=nqv_dA\\) 在 \\(J=nqv_d\\) 时一致。 · Treat the uniform case \\(I=JA\\) first and confirm it agrees with \\(I=nqv_dA\\) from 11.1 when \\(J=nqv_d\\).",
      "对圆柱对称分布，画圆环、写 \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\)，完成径向积分。 · For cylindrical symmetry, draw a ring, write \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\), and carry out the radial integral.",
      "对矩形截面，先判断 \\(J\\) 依赖哪个坐标，再选择窄条或二重积分。 · For a rectangular cross-section, decide which coordinate \\(J\\) depends on and then choose a strip or a double integral.",
      "回到电路情境：用 \\(I\\) 沿导体不变解释导线变细处 \\(J\\) 与漂移速度的增大，并检查单位与极限。 · Return to the circuit context: use constant \\(I\\) along the conductor to explain the increase of \\(J\\) and drift speed in a narrow section, and check units and limits."
    ],
    "checks": [
      "不看书能否写出 \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\) 并解释每个符号与法向约定？ · Can you write \\(I=\\int_S \\vec J\\cdot\\mathrm{d}\\vec A\\) from memory and explain every symbol and the normal-direction convention?",
      "半径 \\(R\\) 的圆柱中 \\(J(r)=J_0\\left(1-\\dfrac{r}{R}\\right)\\)，总电流是 \\(J_0\\pi R^{2}\\) 还是 \\(\\dfrac{J_0\\pi R^{2}}{3}\\)？为什么？ · For \\(J(r)=J_0\\left(1-\\dfrac{r}{R}\\right)\\) in a cylinder of radius \\(R\\), is the total current \\(J_0\\pi R^{2}\\) or \\(\\dfrac{J_0\\pi R^{2}}{3}\\)? Why?",
      "为什么 \\(J=\\dfrac{I}{A}\\) 不能用于非均匀电流密度的局部值？它什么时候才是每一点的值？ · Why can \\(J=\\dfrac{I}{A}\\) not give a local value for nonuniform current density? When does it equal the value at every point?",
      "同一稳恒电流通过粗细两段导线，若细段半径是粗段的一半，\\(J\\) 和 \\(v_d\\) 各变为几倍？ · For the same steady current through wide and narrow sections, if the narrow radius is half the wide radius, by what factors do \\(J\\) and \\(v_d\\) change?",
      "倾斜截面与 \\(\\vec J\\) 平行时，为什么穿过它的电流为零？ · Why is the current through a tilted surface zero when the surface is parallel to \\(\\vec J\\)?",
      "如何用“令 \\(J\\) 为常量”的极限检查一个面积分结果是否漏掉面积权重？ · How can the limit of constant \\(J\\) reveal a missing area weight in a surface-integral result?"
    ],
    "vocabulary": [
      {
        "termZh": "电流密度",
        "termEn": "current density",
        "defZh": "单位垂直面积上通过的电流，方向沿该点约定电流方向，\\(\\vec J=nq\\vec v_d\\)。",
        "defEn": "Current per unit perpendicular area, directed along the conventional current at that point, \\(\\vec J=nq\\vec v_d\\)."
      },
      {
        "termZh": "面积分",
        "termEn": "surface integral",
        "defZh": "把场与面积元的点积在整个曲面上求和并取极限，本主题中 \\(I=\\int_S\\vec J\\cdot\\mathrm{d}\\vec A\\)。",
        "defEn": "The limit of a sum of a field dotted with area elements over a surface; here \\(I=\\int_S\\vec J\\cdot\\mathrm{d}\\vec A\\)."
      },
      {
        "termZh": "通量",
        "termEn": "flux",
        "defZh": "矢量场穿过曲面的总量；电流是电流密度的通量。",
        "defEn": "The total amount of a vector field crossing a surface; current is the flux of current density."
      },
      {
        "termZh": "截面积",
        "termEn": "cross-sectional area",
        "defZh": "导体被垂直于电流方向的平面切出的面积，圆柱为 \\(\\pi R^{2}\\)。",
        "defEn": "The area cut by a plane perpendicular to the current, equal to \\(\\pi R^{2}\\) for a cylinder."
      },
      {
        "termZh": "面积元",
        "termEn": "area element",
        "defZh": "曲面上一个小块的矢量面积 \\(\\mathrm{d}\\vec A\\)，方向沿该块的法向；圆柱圆环为 \\(2\\pi r\\,\\mathrm{d}r\\)。",
        "defEn": "The vector area \\(\\mathrm{d}\\vec A\\) of a small patch, directed along its normal; for a cylindrical ring it is \\(2\\pi r\\,\\mathrm{d}r\\)."
      },
      {
        "termZh": "漂移速度",
        "termEn": "drift velocity",
        "defZh": "载流子在电场作用下缓慢定向移动的平均速度，与电流密度满足 \\(\\vec J=nq\\vec v_d\\)。",
        "defEn": "The slow average directed speed of carriers under an electric field, related to current density by \\(\\vec J=nq\\vec v_d\\)."
      },
      {
        "termZh": "载流子数密度",
        "termEn": "carrier number density",
        "defZh": "单位体积内参与导电的载流子数目 \\(n\\)，与每个载流子的电荷 \\(q\\) 共同决定电流密度。",
        "defEn": "The number of charge carriers per unit volume, \\(n\\), which together with the charge per carrier \\(q\\) determines current density."
      },
      {
        "termZh": "平均电流密度",
        "termEn": "average current density",
        "defZh": "总电流除以总面积 \\(J_{\\mathrm{avg}}=\\dfrac{I}{A}\\)，只在均匀分布时等于局部值。",
        "defEn": "Total current divided by total area, \\(J_{\\mathrm{avg}}=\\dfrac{I}{A}\\); it equals the local value only for a uniform distribution."
      }
    ]
  }
};
