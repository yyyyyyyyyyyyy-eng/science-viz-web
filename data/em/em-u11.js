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
      "电流密度是电荷流动的面密度：每单位时间通过单位垂直面积的电荷为 \\(J=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t\\,\\mathrm{d}A_{\\perp}}\\)，所以 \\(\\mathrm{A\\,m^{-2}}=\\mathrm{C\\,s^{-1}\\,m^{-2}}\\)；\\(\\vec J\\) 的方向逐点定义，不必与导体几何轴线平行，只有均匀直导线中才处处沿导线。 · Current density is the areal density of charge flow: the charge crossing unit perpendicular area per unit time is \\(J=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t\\,\\mathrm{d}A_{\\perp}}\\), hence \\(\\mathrm{A\\,m^{-2}}=\\mathrm{C\\,s^{-1}\\,m^{-2}}\\); the direction of \\(\\vec J\\) is defined point by point and need not be parallel to the conductor's geometric axis—only in a uniform straight wire is it everywhere along the wire.",
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
      "题目说“单位面积上的电荷流量”时，先写 \\(J=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t\\,\\mathrm{d}A_{\\perp}}\\)，再过渡到 \\(I=\\int_S\\vec J\\cdot\\mathrm{d}\\vec A\\)，不要直接跳到 \\(J=\\dfrac{I}{A}\\)。 · When a prompt says “charge flow per unit area,” start from \\(J=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t\\,\\mathrm{d}A_{\\perp}}\\) and then pass to \\(I=\\int_S\\vec J\\cdot\\mathrm{d}\\vec A\\); do not jump straight to \\(J=\\dfrac{I}{A}\\).",
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
      "如何用“令 \\(J\\) 为常量”的极限检查一个面积分结果是否漏掉面积权重？ · How can the limit of constant \\(J\\) reveal a missing area weight in a surface-integral result?",
      "从 \\(J=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t\\,\\mathrm{d}A_{\\perp}}\\) 出发，如何说明 \\(\\vec J\\) 的单位必须是 \\(\\mathrm{A\\,m^{-2}}\\)，并与 \\(I=\\int_S\\vec J\\cdot\\mathrm{d}\\vec A\\) 的量纲一致？ · Starting from \\(J=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t\\,\\mathrm{d}A_{\\perp}}\\), explain why the unit of \\(\\vec J\\) must be \\(\\mathrm{A\\,m^{-2}}\\) and why this is dimensionally consistent with \\(I=\\int_S\\vec J\\cdot\\mathrm{d}\\vec A\\)."
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
  },
  "11.10": {
    "id": "em/em-u11/11.10",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.10",
    "titleZh": "电路元件、开闭与拓扑",
    "titleEn": "Circuit Elements, Open Circuits, and Topology",
    "layer": "ap",
    "summary": "电路由电气回路组成，可含导线、电池、电阻、灯泡、电容、电感、开关、电流表与电压表；闭路提供连续导电路径，开路中断路径。分析时先看拓扑（节点、支路、共享元件），再选欧姆定律、基尔霍夫定律或元件微分关系；电路图用标准符号表示连接关系，物理布局不改变拓扑。 · A circuit is composed of electrical loops that may contain wires, batteries, resistors, lightbulbs, capacitors, inductors, switches, ammeters, and voltmeters. A closed circuit provides a continuous conducting path, while an open circuit breaks it. Analyze the topology first (nodes, branches, shared elements), then choose Ohm’s law, Kirchhoff’s laws, or element differential relations; schematics use standard symbols for connections, and physical layout does not change topology.",
    "learningObjectives": [
      "能识别电路中的导线、电池、电阻、灯泡、电容、电感、开关、电流表与电压表，并说出各自的理想模型与电路图符号。 · Identify wires, batteries, resistors, lightbulbs, capacitors, inductors, switches, ammeters, and voltmeters in a circuit, and state each element’s ideal model and schematic symbol.",
      "能区分闭路与开路，解释开路支路电流为零、开关改变拓扑，以及开路间隙仍可有电势差。 · Distinguish closed and open circuits, and explain why an open branch has zero current, how a switch changes topology, and why an open gap can still have a potential difference.",
      "能用节点、支路、回路与共享元件描述电路拓扑，识别串联、并联与多回路连接。 · Describe circuit topology with nodes, branches, loops, and shared elements, and identify series, parallel, and multiloop connections.",
      "能针对给定电路选择合适的定律或元件关系（欧姆定律、基尔霍夫环路/结点定律、电容与电感微分关系），并说明选择理由。 · Choose an appropriate law or element relation for a given circuit—Ohm’s law, Kirchhoff’s loop/junction rules, or capacitor/inductor differential relations—and justify the choice.",
      "能读、画并等价改写电路图，区分物理布局与电气连接，用拓扑保持的变换化简电路。 · Read, draw, and equivalently redraw circuit schematics, distinguish physical layout from electrical connection, and simplify circuits with topology-preserving transformations."
    ],
    "essentialKnowledge": [
      "电路由电气回路组成；一个回路是可沿导线绕行回到起点的闭合路径。回路中可包含导线、电池、电阻、灯泡、电容、电感、开关、电流表与电压表；每种元件用标准符号表示，并有其理想模型。 · A circuit is composed of electrical loops; a loop is a closed path along wires that returns to its starting point. Loops may contain wires, batteries, resistors, lightbulbs, capacitors, inductors, switches, ammeters, and voltmeters; each element has a standard symbol and an ideal model.",
      "理想导线电阻为零，同一导线上的各点等电势；实际导线有小电阻。导线可以任意弯折或改画，只要连接关系不变，电路的电学性质就不变。 · An ideal wire has zero resistance, so all points on it are at the same potential; a real wire has small resistance. A wire may be bent or redrawn arbitrarily—electrical behavior depends on connectivity, not geometry.",
      "电池提供电动势 \\(\\varepsilon\\)，可模型化为理想电压源串联内阻 \\(r\\)；端电压 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)，放电时小于 \\(\\varepsilon\\)。 · A battery provides emf \\(\\varepsilon\\) and is modeled as an ideal voltage source in series with internal resistance \\(r\\); its terminal voltage is \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\), less than \\(\\varepsilon\\) while discharging.",
      "电阻和灯泡都是电阻性元件：欧姆元件满足 \\(V=IR\\)；灯泡的电阻随温度变化，通常按额定电压与功率给出的等效电阻处理。 · Resistors and lightbulbs are resistive elements: an ohmic element obeys \\(V=IR\\); a bulb’s resistance changes with temperature and is often modeled by the equivalent resistance implied by its rated voltage and power.",
      "电容满足 \\(q=CV\\) 与 \\(i=C\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\)；直流稳态下理想电容相当于开路，但开关刚闭合或电压变化时可以有充电电流。 · A capacitor obeys \\(q=CV\\) and \\(i=C\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\); in DC steady state an ideal capacitor acts as an open circuit, but charging current can flow just after a switch closes or when the voltage changes.",
      "电感满足 \\(V=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}\\)；直流稳态下理想电感相当于短路，但它会阻碍电流突变，开关断开的瞬间可能产生很大的感应电动势。 · An inductor obeys \\(V=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}\\); in DC steady state an ideal inductor acts as a short circuit, but it opposes sudden current changes and can produce a large induced emf at the instant a switch opens.",
      "开关是可控的二态元件：闭合时近似为零电阻的连接，断开时近似为无限大电阻；切换开关会改变电路的拓扑，因此必须重新识别节点、支路与回路。 · A switch is a controllable two-state element: closed, it acts as a near-zero-resistance connection; open, it acts as a near-infinite resistance. Toggling a switch changes circuit topology, so nodes, branches, and loops must be re-identified.",
      "理想电流表内阻为零，必须串联；理想电压表内阻无穷大，必须并联。实际电表有有限内阻，接入后会改变电路：电压表并联会分流，电流表串联会分压。 · An ideal ammeter has zero resistance and must be connected in series; an ideal voltmeter has infinite resistance and must be connected in parallel. Real meters have finite resistance and load the circuit: a voltmeter shunts current, and an ammeter drops voltage.",
      "闭路（闭合电路）存在连续导电路径，电荷能够在电源驱动下持续流动；开路（断开电路）在某处断开，稳态下该支路电流为零。开路间隙两端可以有电势差，不能因为电流为零就认为电压为零。 · A closed circuit has a continuous conducting path, so charge can flow continuously under an emf; an open circuit has a break, and the steady current in that branch is zero. The open gap can still sustain a potential difference—zero current does not imply zero voltage.",
      "一个元件可以同时属于多个回路（共享支路）。它的物理电流只有一个，但在每个回路的方程中都要按该回路的绕行方向计入，符号可能相反；结点定律保证共享支路与各回路之间的电荷守恒。 · One element can belong to several loops at once (a shared branch). It has only one physical current, and that current appears in each loop equation with the sign set by that loop’s traversal direction; the junction rule enforces charge conservation between the shared branch and the loops.",
      "分析电路时先识别拓扑：哪些节点由理想导线相连、哪些元件串联（同一电流）、哪些并联（同一电压）、哪些支路被多个回路共享；再选择欧姆定律、基尔霍夫环路/结点定律或电容与电感的微分关系。 · When analyzing a circuit, identify the topology first: which nodes are joined by ideal wires, which elements are in series (same current), which are in parallel (same voltage), and which branches are shared by several loops; then choose Ohm’s law, Kirchhoff’s loop/junction rules, or the differential relations for capacitors and inductors.",
      "电路图是电路的标准表示：用统一符号画出元件与连接关系，而不是元件的真实形状或位置。电路的性质由元件参数与连接拓扑决定；把导线画长、画短或弯折，只要不改变连接关系，性质就不变。 · A circuit schematic is the standard representation of a circuit: it uses standardized symbols for elements and connections, not the elements’ physical shapes or positions. Circuit properties depend on element values and connection topology; lengthening, shortening, or bending wires without changing connections does not change the behavior."
    ],
    "definition": "电路是由若干电气回路组成的系统，回路中可包含导线、电池、电阻、灯泡、电容、电感、开关、电流表与电压表。闭路提供连续导电路径，电荷可在电源驱动下流动；开路在某处断开，稳态下该处电流为零。电路图用标准符号表示元件和连接关系；电路行为由元件参数与连接拓扑共同决定，而不是由导线的物理位置决定。分析时先辨认节点、支路、串联/并联与共享元件，再选择欧姆定律、基尔霍夫定律或元件微分关系。 · A circuit is a system of electrical loops that may contain wires, batteries, resistors, lightbulbs, capacitors, inductors, switches, ammeters, and voltmeters. A closed circuit provides a continuous conducting path so charge can flow under an emf; an open circuit has a break, and the steady current there is zero. A schematic uses standard symbols for elements and connections; circuit behavior is set by element values and connection topology, not by the physical placement of wires. Begin by identifying nodes, branches, series/parallel relations, and shared elements, then choose Ohm’s law, Kirchhoff’s laws, or element differential relations.",
    "intuition": "把电路想成城市道路网：导线是道路，节点是路口，开关是吊桥，电池提供“高度差”，电阻是限流路段。闭路时车辆（电荷）能绕行一圈；开路时吊桥升起，若必经之路被切断，整条路径都没有持续车流。一个元件被两条路线共用，就像一座桥同时属于两个街区环路：桥上的车流只有一份，但在两条环路的账本里都要登记。电路图是道路网的地图，不是城市的卫星照片：道路画成直线还是曲线不重要，重要的是哪些路口相连。 · Think of a circuit as a road network: wires are roads, nodes are intersections, switches are drawbridges, batteries provide a “height difference,” and resistors are limiting segments. In a closed circuit, cars (charge) can complete a loop; in an open circuit the drawbridge is up, and if a necessary link is cut, no steady traffic flows anywhere along that path. An element shared by two routes is like a bridge belonging to two neighborhood loops: there is only one traffic flow on the bridge, but it is recorded in both loop ledgers. A schematic is a road map, not a satellite photo: whether roads are drawn straight or curved matters less than which intersections are connected.",
    "formulas": [
      {
        "latex": "\\varepsilon=I(R+r)",
        "note": "单回路闭合电路：电动势等于外电阻与内阻上的电压降之和。 · Single closed loop: the emf equals the sum of the voltage drops across the external and internal resistances."
      },
      {
        "latex": "V_{\\mathrm{term}}=\\varepsilon-Ir",
        "note": "电池端电压；放电时小于电动势。 · Battery terminal voltage; it is less than the emf while discharging."
      },
      {
        "latex": "R_{\\mathrm{series}}=\\sum_i R_i,\\qquad \\dfrac{1}{R_{\\mathrm{parallel}}}=\\sum_i\\dfrac{1}{R_i}",
        "note": "电阻串联与并联的等效电阻。 · Equivalent resistance for series and parallel resistors."
      },
      {
        "latex": "q_C=CV_C,\\qquad i_C=C\\dfrac{\\mathrm{d}V_C}{\\mathrm{d}t}",
        "note": "电容的电荷—电压关系与瞬时电流；直流稳态时 \\(i_C=0\\)。 · Capacitor charge–voltage relation and instantaneous current; in DC steady state \\(i_C=0\\)."
      },
      {
        "latex": "V_L=L\\dfrac{\\mathrm{d}i_L}{\\mathrm{d}t}",
        "note": "电感的电压—电流关系；直流稳态时 \\(V_L=0\\)。 · Inductor voltage–current relation; in DC steady state \\(V_L=0\\)."
      },
      {
        "latex": "\\sum_{\\mathrm{loop}}\\Delta V=0",
        "note": "基尔霍夫环路定律：闭合回路电势差代数和为零。 · Kirchhoff’s loop rule: the algebraic sum of potential differences around a closed loop is zero."
      },
      {
        "latex": "\\sum_{\\mathrm{node}}I_{\\mathrm{in}}=\\sum_{\\mathrm{node}}I_{\\mathrm{out}}",
        "note": "基尔霍夫结点定律：流入节点的电流等于流出节点的电流。 · Kirchhoff’s junction rule: current into a node equals current out of it."
      },
      {
        "latex": "I_{\\mathrm{open}}=0",
        "note": "理想开路支路的稳态电流为零；间隙电压由其余电路决定。 · The steady current in an ideal open branch is zero; the gap voltage is set by the rest of the circuit."
      }
    ],
    "derivationNotes": [
      {
        "from": "元件理想模型 · Ideal element models",
        "to": "电路方程 · Circuit equations",
        "note": "把导线、电池、电阻、电容、电感、开关和电表分别用零电阻、电动势加内阻、电阻、\\(q=CV\\)、\\(V=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}\\)、二态电阻和理想电表模型代替，再对节点与回路写方程。 · Replace wires, batteries, resistors, capacitors, inductors, switches, and meters by zero resistance, emf plus internal resistance, resistance, \\(q=CV\\), \\(V=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}\\), a two-state resistance, and ideal-meter models, then write node and loop equations."
      },
      {
        "from": "能量守恒 · Energy conservation",
        "to": "环路定律 · Loop rule",
        "note": "电荷沿闭合回路绕行一周回到原电势，各元件电势差代数和为零；这是基尔霍夫环路定律。 · A charge that travels around a closed loop returns to its original potential, so the algebraic sum of potential differences is zero; this is Kirchhoff’s loop rule."
      },
      {
        "from": "电荷守恒 · Charge conservation",
        "to": "结点定律 · Junction rule",
        "note": "稳态下节点不能积累电荷，流入电流必须等于流出电流；共享支路的电流因此在各回路之间守恒。 · In steady state a node cannot accumulate charge, so current in must equal current out; the current in a shared branch is therefore conserved among the loops."
      },
      {
        "from": "开关断开 · Switch opened",
        "to": "拓扑改变 · Topology change",
        "note": "断开开关把一条支路变为开路：该支路稳态电流为零，但断点两端可承担其余电路剩余的电势差，通常等于电源电动势减去其他元件的电压降。 · Opening a switch turns a branch into an open circuit: its steady current is zero, but the gap can sustain the potential difference left by the rest of the circuit, usually the source emf minus the drops across the other elements."
      },
      {
        "from": "电路图 · Schematic",
        "to": "拓扑等价 · Topological equivalence",
        "note": "电路图只保留节点与支路的连接关系；保持节点和支路不变地重画导线，不会改变任何电流或电压。 · A schematic keeps only the node-and-branch connectivity; redrawing wires while preserving nodes and branches changes no current or voltage."
      },
      {
        "from": "直流稳态 · DC steady state",
        "to": "元件极限 · Element limits",
        "note": "恒定电压下电容电流为零，等效为开路；恒定电流下电感电压为零，等效为短路。含电容或电感的暂态过程必须用微分关系，不能直接用这两个极限。 · At constant voltage a capacitor carries zero current and acts as an open circuit; at constant current an inductor has zero voltage and acts as a short circuit. Transients involving capacitors or inductors require the differential relations, not these limits."
      }
    ],
    "conditions": [
      "集中参数近似：电路尺寸远小于电磁波波长，导线上的传播延迟可忽略。 · Lumped-parameter approximation: circuit size is much smaller than the electromagnetic wavelength, so propagation delay along wires is negligible.",
      "直流或准静态条件：用代数欧姆定律与基尔霍夫定律时，电流和电压在关注的时间尺度内近似不变。 · DC or quasistatic conditions: algebraic Ohm’s law and Kirchhoff’s laws apply when currents and voltages are approximately constant on the time scale of interest.",
      "理想导线与理想电表；实际导线、电表、开关和电源都有非零内阻，必要时需把它们计入电路。 · Ideal wires and meters; real wires, meters, switches, and sources have nonzero resistance and must be included when significant.",
      "直流稳态下理想电容视为开路、理想电感视为短路；开关切换后的暂态必须用 \\(i=C\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\) 与 \\(V=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}\\) 分析。 · In DC steady state an ideal capacitor is an open circuit and an ideal inductor is a short circuit; after a switch changes, transients must be analyzed with \\(i=C\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\) and \\(V=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}\\).",
      "开关视为理想二态元件；实际开关在切换瞬间可能有电弧、弹跳和有限过渡时间。 · Switches are treated as ideal two-state elements; real switches may arc, bounce, and have a finite transition time.",
      "开路支路的稳态电流为零，但间隙电压由其余电路决定；不能用“电流为零”直接推出“电压为零”。 · The steady current in an open branch is zero, but the gap voltage is determined by the rest of the circuit; zero current does not imply zero voltage.",
      "电路图只编码拓扑与元件参数，忽略导线电阻、寄生电容、寄生电感与接触电阻；高频或长线电路需要更完整的模型。 · A schematic encodes only topology and element values, ignoring wire resistance, stray capacitance, stray inductance, and contact resistance; high-frequency or long-line circuits need a fuller model."
    ],
    "keyPoints": [
      "先看拓扑再选定律：节点、支路、串联/并联、共享元件决定用哪条方程。 · Read topology before choosing a law: nodes, branches, series/parallel relations, and shared elements determine which equation to use.",
      "闭路提供连续导电路径；开路在某处断开，稳态下该支路电流为零。 · A closed circuit provides a continuous conducting path; an open circuit has a break, and the steady current in that branch is zero.",
      "开路间隙可以有电势差，其大小由其余电路决定；零电流不等于零电压。 · An open gap can have a potential difference set by the rest of the circuit; zero current does not mean zero voltage.",
      "开关切换会改变拓扑，必须重新画图、重新识别节点与回路。 · Toggling a switch changes topology, so redraw the circuit and re-identify nodes and loops.",
      "共享元件的物理电流只有一份，但在每个回路方程中按绕行方向取符号。 · A shared element has only one physical current, but it enters each loop equation with the sign required by that loop’s traversal.",
      "理想电流表串联、内阻为零；理想电压表并联、内阻无穷大；实际电表会加载电路。 · An ideal ammeter is in series with zero resistance; an ideal voltmeter is in parallel with infinite resistance; real meters load the circuit.",
      "直流稳态下电容开路、电感短路；暂态过程必须用元件微分关系。 · In DC steady state a capacitor is an open circuit and an inductor is a short circuit; transients require the element differential relations.",
      "电路图用标准符号表示连接关系；物理布局、导线长短和弯折不改变拓扑与电学性质。 · Schematics use standard symbols for connections; physical layout, wire length, and bending do not change topology or electrical behavior."
    ],
    "misconceptions": [
      "认为开路时电池仍在“推”电荷，所以电路中还有电流；实际上开路支路的稳态电流为零，电池只维持断点两端的电势差。 · Thinking the battery still “pushes” charge through an open circuit, so current continues; in fact the steady current in an open branch is zero, and the battery only maintains a potential difference across the gap.",
      "认为只要电路闭合就一定有电流；若没有电动势，闭合导线中的电荷很快达到静电平衡，稳态电流为零。 · Thinking any closed circuit must carry current; without an emf, charge in a closed wire reaches electrostatic equilibrium and the steady current is zero.",
      "认为开关断开后断点两端电压一定为零；实际上断点常承担电源电动势减去其他元件电压降后的剩余电压。 · Assuming the voltage across an open switch is zero; the gap often sustains the source emf minus the drops across the other elements.",
      "认为电容在任何情况下都完全断路；电容只在直流稳态下电流为零，电压变化时仍有充电电流。 · Treating a capacitor as a perfect open circuit at all times; its current is zero only in DC steady state, and charging current flows when the voltage changes.",
      "认为电感在任何情况下都完全短路；电感只在直流稳态下电压为零，电流变化时会产生感应电动势。 · Treating an inductor as a perfect short at all times; its voltage is zero only in DC steady state, and a changing current produces an induced emf.",
      "把电流表并联、电压表串联；理想电流表应串联测电流，理想电压表应并联测电压。 · Connecting an ammeter in parallel or a voltmeter in series; an ideal ammeter belongs in series and an ideal voltmeter in parallel.",
      "认为共享元件在不同回路中有不同的电流；共享支路只有一个物理电流，各回路方程只是用不同符号记录它。 · Thinking a shared element carries different currents in different loops; the shared branch has one physical current, and the loop equations only record it with different signs.",
      "认为导线画得越长、越弯，电阻就越大；在理想电路图中导线电阻为零，长度和形状不进入模型，实际导线才需另计电阻。 · Thinking longer or more bent wires always mean more resistance; in an ideal schematic wire resistance is zero and length or shape does not enter the model, while real wires require a separate resistance.",
      "认为开关的位置只是物理摆放，不影响电路；开关的断开/闭合直接改变拓扑，位置与状态决定哪些支路导通。 · Treating switch placement as mere physical arrangement; opening or closing a switch changes topology, and its position and state determine which branches conduct."
    ],
    "examples": [
      {
        "title": "例 1 · 识别元件并选择定律 · Example 1: Identify elements and choose laws",
        "prompt": "一个闭合电路由 \\(12\\,\\mathrm{V}\\) 电池（内阻 \\(1.0\\,\\Omega\\)）、\\(5.0\\,\\Omega\\) 电阻、额定 \\(6.0\\,\\mathrm{V}\\)、\\(6.0\\,\\mathrm{W}\\) 的灯泡、开关、电流表和电压表组成。开关闭合，灯泡正常发光。指出各元件的作用与电表接法，并求电流、灯泡电压和电池端电压。 · A closed circuit contains a \\(12\\,\\mathrm{V}\\) battery with internal resistance \\(1.0\\,\\Omega\\), a \\(5.0\\,\\Omega\\) resistor, a bulb rated \\(6.0\\,\\mathrm{V}\\), \\(6.0\\,\\mathrm{W}\\), a switch, an ammeter, and a voltmeter. The switch is closed and the bulb glows normally. Identify each element’s role and the meter connections, then find the current, bulb voltage, and battery terminal voltage.",
        "steps": [
          "灯泡额定电阻 \\(R_{\\mathrm{bulb}}=\\dfrac{V^{2}}{P}=\\dfrac{(6.0)^{2}}{6.0}=6.0\\,\\Omega\\)。 · The bulb’s rated resistance is \\(R_{\\mathrm{bulb}}=\\dfrac{V^{2}}{P}=\\dfrac{(6.0)^{2}}{6.0}=6.0\\,\\Omega\\).",
          "开关闭合后形成单回路：电池、\\(5.0\\,\\Omega\\) 电阻、灯泡、开关和电流表串联；电压表并联在灯泡两端。 · Closing the switch forms a single loop: battery, \\(5.0\\,\\Omega\\) resistor, bulb, switch, and ammeter in series; the voltmeter is connected in parallel across the bulb.",
          "总外电阻 \\(R=5.0+6.0=11\\,\\Omega\\)，用含内阻的闭合电路关系 \\(\\varepsilon=I(R+r)\\)：\\(I=\\dfrac{12}{11+1.0}=1.0\\,\\mathrm{A}\\)。 · Total external resistance is \\(R=5.0+6.0=11\\,\\Omega\\). Use \\(\\varepsilon=I(R+r)\\): \\(I=\\dfrac{12}{11+1.0}=1.0\\,\\mathrm{A}\\).",
          "灯泡电压 \\(V_{\\mathrm{bulb}}=IR_{\\mathrm{bulb}}=(1.0)(6.0)=6.0\\,\\mathrm{V}\\)，正好等于额定电压；电阻电压为 \\(5.0\\,\\mathrm{V}\\)。 · Bulb voltage is \\(V_{\\mathrm{bulb}}=IR_{\\mathrm{bulb}}=(1.0)(6.0)=6.0\\,\\mathrm{V}\\), its rated voltage; the resistor drops \\(5.0\\,\\mathrm{V}\\).",
          "电池端电压 \\(V_{\\mathrm{term}}=\\varepsilon-Ir=12-(1.0)(1.0)=11\\,\\mathrm{V}\\)；电流表读数 \\(1.0\\,\\mathrm{A}\\)，电压表读数 \\(6.0\\,\\mathrm{V}\\)。 · Terminal voltage is \\(V_{\\mathrm{term}}=\\varepsilon-Ir=12-(1.0)(1.0)=11\\,\\mathrm{V}\\); the ammeter reads \\(1.0\\,\\mathrm{A}\\) and the voltmeter reads \\(6.0\\,\\mathrm{V}\\)."
        ],
        "solution": "电流 \\(1.0\\,\\mathrm{A}\\)，灯泡电压 \\(6.0\\,\\mathrm{V}\\)，端电压 \\(11\\,\\mathrm{V}\\)；电流表串联、电压表并联。 · Current \\(1.0\\,\\mathrm{A}\\), bulb voltage \\(6.0\\,\\mathrm{V}\\), terminal voltage \\(11\\,\\mathrm{V}\\); ammeter in series, voltmeter in parallel.",
        "solutionLatex": "I=\\dfrac{\\varepsilon}{R+r}=\\dfrac{12}{5.0+6.0+1.0}=1.0\\,\\mathrm{A},\\qquad V_{\\mathrm{bulb}}=6.0\\,\\mathrm{V},\\qquad V_{\\mathrm{term}}=11\\,\\mathrm{V}"
      },
      {
        "title": "例 2 · 开关断开：开路电流与间隙电压 · Example 2: Open switch—zero current, nonzero gap voltage",
        "prompt": "在例 1 的电路中把开关断开，电压表改接在开关两端。求电路电流、开关两端电压和电压表读数。假设电压表理想。 · Open the switch in Example 1 and connect the voltmeter across the switch. Find the circuit current, the voltage across the switch, and the voltmeter reading. Assume an ideal voltmeter.",
        "steps": [
          "开关断开后，主回路上出现断点，成为开路；稳态下没有电荷能够跨过断点，故 \\(I=0\\)。 · Opening the switch creates a break in the main loop, so it is an open circuit; in steady state no charge crosses the gap, hence \\(I=0\\).",
          "因为没有电流，\\(5.0\\,\\Omega\\) 电阻和灯泡上的电压降都为零：\\(V_R=IR=0\\)，\\(V_{\\mathrm{bulb}}=0\\)。 · With no current, the voltage drops across the \\(5.0\\,\\Omega\\) resistor and the bulb are both zero: \\(V_R=IR=0\\) and \\(V_{\\mathrm{bulb}}=0\\).",
          "电池内阻上也没有电压降，所以电池端电压等于电动势 \\(12\\,\\mathrm{V}\\)。 · There is also no drop across the battery’s internal resistance, so the terminal voltage equals the emf, \\(12\\,\\mathrm{V}\\).",
          "沿回路写电压代数和：断点两端必须承担全部 \\(12\\,\\mathrm{V}\\)，即 \\(V_{\\mathrm{switch}}=12\\,\\mathrm{V}\\)。 · Summing voltages around the loop, the gap must sustain the full \\(12\\,\\mathrm{V}\\), so \\(V_{\\mathrm{switch}}=12\\,\\mathrm{V}\\).",
          "理想电压表内阻无穷大，不取电流，因此读数就是 \\(12\\,\\mathrm{V}\\)，而电流仍为零。 · An ideal voltmeter has infinite resistance and draws no current, so it reads \\(12\\,\\mathrm{V}\\) while the current remains zero."
        ],
        "solution": "\\(I=0\\)，开关两端电压和电压表读数均为 \\(12\\,\\mathrm{V}\\)。 · \\(I=0\\); the voltage across the switch and the voltmeter reading are both \\(12\\,\\mathrm{V}\\).",
        "solutionLatex": "I_{\\mathrm{open}}=0,\\qquad V_{\\mathrm{switch}}=\\varepsilon-I(R+r)=12\\,\\mathrm{V},\\qquad V_{\\mathrm{voltmeter}}=12\\,\\mathrm{V}"
      },
      {
        "title": "例 3 · 共享支路属于两个回路 · Example 3: A shared branch in two loops",
        "prompt": "两个相邻回路共用中间电阻 \\(R_1=2.0\\,\\Omega\\)。左回路还有 \\(\\varepsilon=12\\,\\mathrm{V}\\) 的理想电池和 \\(R_2=2.0\\,\\Omega\\)，右回路还有 \\(R_3=2.0\\,\\Omega\\)。设左、右回路的顺时针电流分别为 \\(I_1\\)、\\(I_2\\)，求三个电流并说明共享元件的处理。 · Two adjacent loops share a central resistor \\(R_1=2.0\\,\\Omega\\). The left loop also contains an ideal \\(12\\,\\mathrm{V}\\) battery and \\(R_2=2.0\\,\\Omega\\); the right loop contains \\(R_3=2.0\\,\\Omega\\). Let \\(I_1\\) and \\(I_2\\) be the clockwise currents in the left and right loops. Find all three currents and explain how the shared element is handled.",
        "steps": [
          "识别拓扑：\\(R_1\\) 是共享支路，同时属于左、右两个回路；它的物理电流只有一份，设向下为 \\(I_s=I_1-I_2\\)。 · Identify the topology: \\(R_1\\) is shared by the left and right loops. It has one physical current; take downward as \\(I_s=I_1-I_2\\).",
          "左回路顺时针：\\(12-2.0I_1-2.0(I_1-I_2)=0\\)。 · Clockwise left loop: \\(12-2.0I_1-2.0(I_1-I_2)=0\\).",
          "右回路顺时针：共享支路被向上绕行，与向下的 \\(I_s\\) 相反，所以电势变化为 \\(+2.0(I_1-I_2)\\)；再减去 \\(R_3\\) 上的电压降：\\(+2.0(I_1-I_2)-2.0I_2=0\\)。 · Clockwise right loop: the shared branch is traversed upward, opposite to the downward \\(I_s\\), so its potential change is \\(+2.0(I_1-I_2)\\); subtracting the drop across \\(R_3\\) gives \\(+2.0(I_1-I_2)-2.0I_2=0\\).",
          "由右回路方程得 \\(I_1=2I_2\\)；代入左回路得 \\(12-2(2I_2)-2(2I_2-I_2)=0\\)，即 \\(12-4I_2-2I_2=0\\)，所以 \\(I_2=2.0\\,\\mathrm{A}\\)、\\(I_1=4.0\\,\\mathrm{A}\\)。 · The right-loop equation gives \\(I_1=2I_2\\); substituting into the left loop gives \\(12-2(2I_2)-2(2I_2-I_2)=0\\), or \\(12-4I_2-2I_2=0\\), so \\(I_2=2.0\\,\\mathrm{A}\\) and \\(I_1=4.0\\,\\mathrm{A}\\).",
          "共享支路电流 \\(I_s=I_1-I_2=4.0-2.0=2.0\\,\\mathrm{A}\\)，方向向下；两个回路电流都为正，实际方向与假设的顺时针方向一致。 · The shared current is \\(I_s=I_1-I_2=4.0-2.0=2.0\\,\\mathrm{A}\\) downward; both loop currents are positive, so their actual directions match the assumed clockwise directions.",
          "检查：共享电阻的 \\(I_s\\) 在左回路方程中以 \\(-2.0I_s\\) 出现（绕行方向与 \\(I_s\\) 相同），在右回路方程中以 \\(+2.0I_s\\) 出现（绕行方向与 \\(I_s\\) 相反）；同一个物理电流，符号由各回路的绕行方向决定。 · Check: \\(I_s\\) appears as \\(-2.0I_s\\) in the left-loop equation (traversal along \\(I_s\\)) and \\(+2.0I_s\\) in the right-loop equation (traversal opposite \\(I_s\\))—the same physical current with signs set by each loop’s direction."
        ],
        "solution": "\\(I_1=4.0\\,\\mathrm{A}\\)，\\(I_2=2.0\\,\\mathrm{A}\\)，共享支路向下 \\(2.0\\,\\mathrm{A}\\)。 · \\(I_1=4.0\\,\\mathrm{A}\\), \\(I_2=2.0\\,\\mathrm{A}\\), and the shared branch carries \\(2.0\\,\\mathrm{A}\\) downward.",
        "solutionLatex": "I_1=4.0\\,\\mathrm{A},\\qquad I_2=2.0\\,\\mathrm{A},\\qquad I_s=I_1-I_2=2.0\\,\\mathrm{A}"
      },
      {
        "title": "例 4 · 电路图与拓扑等价 · Example 4: Schematic and topological equivalence",
        "prompt": "某电路图中 \\(R_1=6.0\\,\\Omega\\) 与 \\(R_2=3.0\\,\\Omega\\) 的两端分别接在同一对节点上，它们的并联组合再与 \\(R_3=4.0\\,\\Omega\\) 串联，接在 \\(12\\,\\mathrm{V}\\) 理想电池两端。求等效电阻与总电流，并说明把导线改画成长方形是否改变结果。 · In a schematic, \\(R_1=6.0\\,\\Omega\\) and \\(R_2=3.0\\,\\Omega\\) have both ends connected to the same pair of nodes; their parallel combination is in series with \\(R_3=4.0\\,\\Omega\\) across an ideal \\(12\\,\\mathrm{V}\\) battery. Find the equivalent resistance and total current, and explain whether redrawing the wires as rectangles changes the result.",
        "steps": [
          "识别节点：\\(R_1\\) 与 \\(R_2\\) 的两端分别接同一对节点，所以它们并联；并联组合与 \\(R_3\\) 串联。 · Identify nodes: \\(R_1\\) and \\(R_2\\) share both end nodes, so they are in parallel; the combination is in series with \\(R_3\\).",
          "\\(\\dfrac{1}{R_{12}}=\\dfrac{1}{6.0}+\\dfrac{1}{3.0}=\\dfrac{1}{2.0}\\)，故 \\(R_{12}=2.0\\,\\Omega\\)。 · \\(\\dfrac{1}{R_{12}}=\\dfrac{1}{6.0}+\\dfrac{1}{3.0}=\\dfrac{1}{2.0}\\), so \\(R_{12}=2.0\\,\\Omega\\).",
          "串联：\\(R_{\\mathrm{eq}}=2.0+4.0=6.0\\,\\Omega\\)。 · Series: \\(R_{\\mathrm{eq}}=2.0+4.0=6.0\\,\\Omega\\).",
          "总电流 \\(I=\\dfrac{12}{6.0}=2.0\\,\\mathrm{A}\\)。 · Total current \\(I=\\dfrac{12}{6.0}=2.0\\,\\mathrm{A}\\).",
          "把导线改画成长方形、缩短或拉长，只要 \\(R_1\\)、\\(R_2\\) 仍接同一对节点、\\(R_3\\) 仍与并联块串联，节点与支路关系不变，等效电阻和电流都不变。 · Redrawing wires as rectangles, shortening them, or lengthening them changes nothing as long as \\(R_1\\) and \\(R_2\\) still share the same two nodes and \\(R_3\\) remains in series with the parallel block—the node-and-branch relations are unchanged."
        ],
        "solution": "\\(R_{\\mathrm{eq}}=6.0\\,\\Omega\\)，\\(I=2.0\\,\\mathrm{A}\\)；改画导线不改变拓扑，因此结果不变。 · \\(R_{\\mathrm{eq}}=6.0\\,\\Omega\\) and \\(I=2.0\\,\\mathrm{A}\\); redrawing wires does not change topology, so the result is unchanged.",
        "solutionLatex": "R_{12}=\\dfrac{(6.0)(3.0)}{6.0+3.0}=2.0\\,\\Omega,\\qquad R_{\\mathrm{eq}}=2.0+4.0=6.0\\,\\Omega,\\qquad I=\\dfrac{12}{6.0}=2.0\\,\\mathrm{A}"
      },
      {
        "title": "例 5 · 电容与电感的直流稳态 · Example 5: Capacitor and inductor in DC steady state",
        "prompt": "一个串联电路含 \\(12\\,\\mathrm{V}\\) 理想电池、\\(6.0\\,\\Omega\\) 电阻、电容 \\(C\\) 和电感 \\(L\\)，开关闭合很长时间。某学生说：“电容相当于开路、电感相当于短路，电路既断路又短路，无法判断。”请判断并求稳态电流、电阻电压、电感电压和电容电压。 · A series circuit contains an ideal \\(12\\,\\mathrm{V}\\) battery, a \\(6.0\\,\\Omega\\) resistor, a capacitor \\(C\\), and an inductor \\(L\\). The switch has been closed for a long time. A student says, “The capacitor is an open circuit and the inductor is a short circuit, so the circuit is both open and shorted; it cannot be analyzed.” Evaluate this statement and find the steady current, resistor voltage, inductor voltage, and capacitor voltage.",
        "steps": [
          "直流稳态下电流恒定，电容电流 \\(i_C=C\\dfrac{\\mathrm{d}V_C}{\\mathrm{d}t}=0\\)，所以电容相当于开路；电感电压 \\(V_L=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}=0\\)，所以电感相当于理想导线。 · In DC steady state the current is constant, so the capacitor current \\(i_C=C\\dfrac{\\mathrm{d}V_C}{\\mathrm{d}t}=0\\) and the capacitor acts as an open circuit; the inductor voltage \\(V_L=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}=0\\), so the inductor acts as an ideal wire.",
          "串联路径被电容断开，稳态电流为零：\\(I=0\\)。 · The series path is broken by the capacitor, so the steady current is zero: \\(I=0\\).",
          "电阻电压 \\(V_R=IR=0\\)；电感电压 \\(V_L=0\\)。 · Resistor voltage \\(V_R=IR=0\\); inductor voltage \\(V_L=0\\).",
          "电容承担全部电源电压：\\(V_C=12\\,\\mathrm{V}\\)。 · The capacitor sustains the full source voltage: \\(V_C=12\\,\\mathrm{V}\\).",
          "两个极限并不矛盾：电容“开路”决定串联路径无电流，电感“短路”只说明它两端没有电压降，并不表示它把电源短路。 · The two limits are not contradictory: the capacitor’s “open” sets the zero current in the series path, while the inductor’s “short” only means zero voltage across it, not that it shorts the source.",
          "注意：开关刚闭合的暂态中，电容电压不能突变、电感电流不能突变，必须用微分关系分析，不能直接套用稳态极限。 · Note: just after the switch closes, the capacitor voltage and inductor current cannot change abruptly, so the transient must be analyzed with the differential relations rather than these steady-state limits."
        ],
        "solution": "\\(I=0\\)，\\(V_R=0\\)，\\(V_L=0\\)，\\(V_C=12\\,\\mathrm{V}\\)；两个极限分别描述不同元件，并不矛盾。 · \\(I=0\\), \\(V_R=0\\), \\(V_L=0\\), and \\(V_C=12\\,\\mathrm{V}\\); the two limits describe different elements and are not contradictory.",
        "solutionLatex": "I=0,\\qquad V_R=IR=0,\\qquad V_L=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}=0,\\qquad V_C=12\\,\\mathrm{V}"
      }
    ],
    "examTips": [
      "先读电路图、标节点与支路，再判断串联、并联和共享元件；不要一上来就套公式。 · Read the schematic and label nodes and branches first, then identify series, parallel, and shared elements; do not plug into formulas immediately.",
      "开关状态一变就重画电路：断开处是开路，闭合处是理想导线，拓扑可能完全不同。 · Redraw the circuit whenever a switch changes state: an open switch is a break and a closed switch is an ideal wire, so the topology may be completely different.",
      "开路支路先写 \\(I=0\\)，再用环路定律求断点电压；零电流不等于零电压。 · For an open branch, write \\(I=0\\) first and then use the loop rule to find the gap voltage; zero current does not mean zero voltage.",
      "共享元件只有一个物理电流；在每个回路方程中按绕行方向取正负，不要重复计算成两个独立电流。 · A shared element has only one physical current; give it a sign in each loop equation according to the traversal direction, and do not count it as two independent currents.",
      "理想电流表串联、电压表并联；若题目给出电表内阻，就把它们当作电路中的电阻重新分析。 · Ideal ammeters go in series and voltmeters in parallel; if meter resistance is given, treat the meters as resistors and re-analyze the circuit.",
      "直流稳态先判断电容开路、电感短路；涉及“刚闭合”“刚断开”时改用 \\(i=C\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\) 与 \\(V=L\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}\\)。 · In DC steady state, first apply the capacitor-open and inductor-short limits; for “just closed” or “just opened,” switch to the differential relations.",
      "电路图只表达拓扑；导线画法、长度和物理位置不改变理想电路的性质，除非题目明确给出导线电阻。 · A schematic expresses topology only; wire drawing, length, and physical position do not change an ideal circuit unless the problem explicitly gives wire resistance."
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
        "code": "11.2",
        "title": "简单电路 · Simple Circuits",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.5",
        "title": "复合直流电路 · Compound Direct Current Circuits",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.6",
        "title": "基尔霍夫环路 · Kirchhoff's Loop Rule",
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
        "chapterId": "em-u11",
        "code": "11.8",
        "title": "RC 电路 · Resistor–Capacitor (RC) Circuits",
        "relation": "应用 · application"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.11",
        "title": "电容网络与电荷守恒 · Capacitor Networks and Charge Conservation",
        "relation": "相关 · related"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：11.1 的电流定义与 11.2 的串并联、电表接法给出基本语言；本主题把它们组织成“元件—节点—支路—回路”的拓扑分析框架。 · Upstream: the current definition in 11.1 and the series/parallel and meter conventions in 11.2 provide the basic language; this topic organizes them into a “element–node–branch–loop” topological framework.",
      "下游：11.5 的复合直流电路、11.6 的环路定律与 11.7 的结点定律都建立在本主题的节点、支路和共享元件识别之上。 · Downstream: compound DC circuits in 11.5, the loop rule in 11.6, and the junction rule in 11.7 all build on the node, branch, and shared-element identification taught here.",
      "元件暂态：11.8 的 RC 电路与 13.5、13.6 的 LR/LC 电路把本主题的电容、电感、开关模型扩展为时间相关过程。 · Element transients: the RC circuit in 11.8 and the LR/LC circuits in 13.5 and 13.6 extend this topic’s capacitor, inductor, and switch models to time-dependent processes.",
      "实际应用：电路图是实验接线、故障排查与电子设计的通用语言；电表接法、开关状态和共享支路识别直接决定测量与诊断是否正确。 · Practical use: schematics are the common language of breadboarding, troubleshooting, and electronic design; meter connections, switch states, and shared-branch identification determine whether measurements and diagnoses are correct."
    ],
    "intuitionDetailed": "先画一张“拓扑地图”：把由理想导线直接相连的点合并成一个节点，把每个元件画成节点之间的一条支路，把回路画成支路围成的闭合路径。然后问三个问题：哪些支路串联（同一电流）？哪些并联（同一电压）？哪些支路被两个以上回路共用？串联像单行道，电流处处相同；并联像多条并行车道，电压相同而电流分配；共享支路像一座同时属于两个街区的桥，桥上的车流只有一份，但在两个街区的交通账本中都要出现，方向按各自的绕行方向取正负。开关是吊桥：断开时支路变成开路，稳态电流为零，但桥两端仍可能有高度差（电势差）；闭合时支路变成理想导线，拓扑随之改变。分析时先定拓扑，再选定律：单回路可用 \\(\\varepsilon=I(R+r)\\)，多回路用基尔霍夫环路与结点定律，含电容/电感且涉及“刚切换”时用微分关系。最后用极限检查：开路电流应为零，短路电压应为零，电容稳态电流应为零，电感稳态电压应为零。 · First draw a “topology map”: merge points joined directly by ideal wires into one node, draw each element as a branch between nodes, and draw each loop as a closed path of branches. Then ask three questions: which branches are in series (same current), which are in parallel (same voltage), and which branches are shared by two or more loops? Series is like a single-lane road with the same current everywhere; parallel is like several lanes with the same voltage and divided current; a shared branch is like a bridge belonging to two neighborhoods—there is one traffic flow, but it appears in both ledgers with signs set by each loop’s direction. A switch is a drawbridge: open, the branch becomes an open circuit with zero steady current but possibly a potential difference across the gap; closed, it becomes an ideal wire and the topology changes. Read topology first, then choose a law: a single loop may use \\(\\varepsilon=I(R+r)\\), multiloop circuits use Kirchhoff’s loop and junction rules, and “just switched” situations with capacitors or inductors require the differential relations. Check limits at the end: open-circuit current is zero, short-circuit voltage is zero, capacitor steady current is zero, and inductor steady voltage is zero.",
    "development": [
      "认识元件：把导线、电池、电阻、灯泡、电容、电感、开关、电流表、电压表与它们的标准符号、理想模型一一对应。 · Learn the elements: match wires, batteries, resistors, bulbs, capacitors, inductors, switches, ammeters, and voltmeters to their standard symbols and ideal models.",
      "建立拓扑语言：把电路化成节点与支路，识别串联、并联、回路与共享支路。 · Build the topological language: reduce the circuit to nodes and branches, and identify series, parallel, loops, and shared branches.",
      "分析开闭：用开关断开/闭合改变拓扑，写出开路支路的零电流与断点电压。 · Analyze open and closed states: change topology with the switch, and write the zero current and gap voltage for an open branch.",
      "选择定律：单回路用欧姆定律与环路关系；多回路用基尔霍夫方程组；含电容/电感时区分稳态与暂态。 · Choose laws: use Ohm’s law and the loop relation for a single loop, Kirchhoff equations for multiple loops, and separate steady state from transients when capacitors or inductors are present.",
      "读画电路图：用标准符号画图，做保持节点与支路不变的等价重画，再化简串并联。 · Read and draw schematics: use standard symbols, redraw equivalently while preserving nodes and branches, and then reduce series/parallel combinations.",
      "检验与迁移：用极限、单位、电表读数和能量/电荷守恒检查结果，并迁移到含灯泡、开关或多回路的实际电路。 · Check and transfer: use limits, units, meter readings, and energy/charge conservation to check results, then transfer to real circuits with bulbs, switches, or multiple loops."
    ],
    "checks": [
      "闭路与开路的区别是什么？为什么开路支路的稳态电流为零？ · What is the difference between a closed and an open circuit? Why is the steady current in an open branch zero?",
      "开关断开时，断点两端电压是否一定为零？请用 \\(12\\,\\mathrm{V}\\) 电池、电阻和灯泡的例子说明。 · Is the voltage across an open switch necessarily zero? Explain with a \\(12\\,\\mathrm{V}\\) battery, a resistor, and a bulb.",
      "一个电阻被两个回路共享，它的电流在两个回路方程中应如何写？为什么不是两个不同的电流？ · A resistor is shared by two loops. How should its current be written in the two loop equations, and why is it not two different currents?",
      "理想电流表和理想电压表应如何接入？若电表有有限内阻，测量结果会如何改变？ · How are ideal ammeters and voltmeters connected? How do finite meter resistances change the measurement?",
      "电容和电感在直流稳态分别相当于什么？为什么“刚闭合”时不能直接套用这两个极限？ · What do capacitors and inductors become in DC steady state, and why can those limits not be applied immediately after a switch closes?",
      "把电路图中的导线改画成长方形或缩短，电路性质是否改变？什么情况下导线长度会影响结果？ · Does redrawing wires as rectangles or shortening them change circuit behavior? When does wire length matter?",
      "给定一个含两个回路和一个共享电阻的电路图，如何判断哪些元件串联、哪些并联，并选择定律？ · Given a schematic with two loops and a shared resistor, how do you identify series and parallel elements and choose the appropriate law?"
    ],
    "vocabulary": [
      {
        "termZh": "电路元件",
        "termEn": "circuit element",
        "defZh": "电路中具有确定端电压—电流关系的部件，如电阻、电容、电感、电池、开关和电表。",
        "defEn": "A component with a definite voltage–current relation, such as a resistor, capacitor, inductor, battery, switch, or meter."
      },
      {
        "termZh": "电气回路",
        "termEn": "electrical loop",
        "defZh": "沿导线与元件绕行并回到起点的闭合路径；回路是基尔霍夫环路定律的应用对象。",
        "defEn": "A closed path along wires and elements that returns to its starting point; a loop is the object to which Kirchhoff’s loop rule applies."
      },
      {
        "termZh": "闭路",
        "termEn": "closed circuit",
        "defZh": "存在连续导电路径、电荷能够在电源驱动下流动的电路。",
        "defEn": "A circuit with a continuous conducting path, so charge can flow under an emf."
      },
      {
        "termZh": "开路",
        "termEn": "open circuit",
        "defZh": "在某处断开的电路；稳态下断开支路的电流为零，但断点两端可以有电势差。",
        "defEn": "A circuit with a break; the steady current in the broken branch is zero, but a potential difference can exist across the gap."
      },
      {
        "termZh": "节点",
        "termEn": "node",
        "defZh": "由理想导线直接相连、因而等电势的整个区域；节点定律在此应用。",
        "defEn": "A whole region joined by ideal wires and therefore at one potential; the junction rule applies at a node."
      },
      {
        "termZh": "电路图",
        "termEn": "circuit schematic",
        "defZh": "用标准符号表示元件与连接关系的电路表示；它编码拓扑，不表示真实物理布局。",
        "defEn": "A representation of a circuit using standard symbols for elements and connections; it encodes topology, not physical layout."
      },
      {
        "termZh": "开关",
        "termEn": "switch",
        "defZh": "可控的二态元件：闭合时近似为零电阻连接，断开时近似为无限大电阻，从而改变电路拓扑。",
        "defEn": "A controllable two-state element: closed, it acts as a near-zero-resistance connection; open, it acts as a near-infinite resistance, thereby changing circuit topology."
      },
      {
        "termZh": "理想电表",
        "termEn": "ideal meter",
        "defZh": "理想电流表内阻为零并串联；理想电压表内阻无穷大并并联，接入后不改变原电路。",
        "defEn": "An ideal ammeter has zero resistance and is in series; an ideal voltmeter has infinite resistance and is in parallel, so neither changes the original circuit."
      }
    ]
  },
  "11.11": {
    "id": "em/em-u11/11.11",
    "subject": "em",
    "chapterId": "em-u11",
    "unitCode": "11",
    "unitTitleZh": "电路",
    "unitTitleEn": "Electric Circuits",
    "code": "11.11",
    "titleZh": "电容网络与电荷守恒",
    "titleEn": "Capacitor Networks and Charge Conservation",
    "layer": "ap",
    "summary": "串联电容因电荷守恒而带等量电荷：每个电容极板电荷量大小相同，电压按 \\(V_i=\\dfrac{Q}{C_i}\\) 分配；并联电容电压相同，电荷按 \\(Q_i=C_iV\\) 分配。等效电容满足串联 \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\)、并联 \\(C_{\\mathrm{eq}}=\\sum_i C_i\\)。关键图像是浮置中间导体：它与外界绝缘，净电荷不变（初始中性则为零），但相对两板可分别带 \\(+Q\\) 与 \\(-Q\\)。 · Series capacitors carry equal charge because of charge conservation: each capacitor has the same charge magnitude, and voltage divides as \\(V_i=\\dfrac{Q}{C_i}\\). Parallel capacitors share the same voltage, and charge divides as \\(Q_i=C_iV\\). Equivalent capacitance obeys \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\) for series and \\(C_{\\mathrm{eq}}=\\sum_i C_i\\) for parallel. The key picture is the floating intermediate conductor: isolated from the rest of the circuit, its net charge stays fixed (zero if initially neutral), yet its two facing plates can carry \\(+Q\\) and \\(-Q\\).",
    "learningObjectives": [
      "能用电荷守恒解释串联电容每个极板电荷量大小相等，并区分极板电荷与中间导体的净电荷。 · Use charge conservation to explain why every plate in a series capacitor network has the same charge magnitude, and distinguish plate charge from the net charge of the intermediate conductor.",
      "能推导串联与并联的等效电容公式，并用极限检查结果。 · Derive the equivalent-capacitance formulas for series and parallel networks, and check the results with limiting cases.",
      "能分析浮置中间导体：净电荷为零时，两个相对极板仍可分别带 \\(+Q\\) 与 \\(-Q\\)。 · Analyze a floating intermediate conductor: even when its net charge is zero, its two facing plates can carry \\(+Q\\) and \\(-Q\\).",
      "能计算串并联网络中的电荷、电压、能量与分压，并处理初始带电电容连接后的电荷再分配。 · Compute charge, voltage, energy, and voltage division in series/parallel networks, and handle charge redistribution when initially charged capacitors are connected.",
      "能比较电容网络与电阻网络的串并联公式，说明对偶关系并避免混用。 · Compare capacitor and resistor series/parallel formulas, explain the duality, and avoid mixing them up."
    ],
    "essentialKnowledge": [
      "电容定义 \\(C=\\dfrac{Q}{V}\\)；\\(Q\\) 是一个极板电荷量的绝对值，两个极板分别带 \\(+Q\\) 与 \\(-Q\\)。给定电压下能储存的电荷量由几何与电介质决定。 · The capacitance is \\(C=\\dfrac{Q}{V}\\); \\(Q\\) is the magnitude of the charge on one plate, and the two plates carry \\(+Q\\) and \\(-Q\\). The charge stored at a given voltage is set by geometry and dielectric.",
      "串联连接：电容器依次相连、中间没有分支，充电时同一电流依次通过各电容，因此每个电容极板电荷量大小相同：\\(Q_1=Q_2=\\cdots=Q\\)。 · Series connection: capacitors are connected one after another with no branch between them. During charging the same current passes through each, so every capacitor has the same plate charge magnitude: \\(Q_1=Q_2=\\cdots=Q\\).",
      "串联等量电荷的根本原因是电荷守恒。连接两个电容的中间导体（浮置岛）与外界绝缘，净电荷保持不变；若初始中性，则净电荷为零。左电容右板得到 \\(-Q\\)（获得 \\(Q\\) 个电子）时，这些电子只能来自中间导体另一侧的右电容左板，使右电容左板带 \\(+Q\\)；于是每个电容都带等量异号电荷。 · The root cause of equal series charge is charge conservation. The intermediate conductor (floating island) between two capacitors is isolated, so its net charge stays constant—zero if initially neutral. When the right plate of the left capacitor acquires \\(-Q\\) (gains \\(Q\\) electrons), those electrons can only come from the left plate of the right capacitor on the other side of the island, leaving that plate with \\(+Q\\); thus every capacitor ends up with equal and opposite plate charges.",
      "串联电压相加：\\(V=V_1+V_2+\\cdots\\)；由 \\(V_i=\\dfrac{Q}{C_i}\\) 得 \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\)。串联等效电容小于任一个串联电容，也小于其中最小的电容。 · Series voltages add: \\(V=V_1+V_2+\\cdots\\). With \\(V_i=\\dfrac{Q}{C_i}\\), this gives \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\). The series equivalent capacitance is smaller than any individual capacitor and smaller than the smallest one.",
      "并联连接：各电容的两端分别接在同一对节点上，所以电压相同：\\(V_1=V_2=\\cdots=V\\)。总电荷为各电容电荷之和：\\(Q_{\\mathrm{total}}=\\sum_i Q_i\\)，故 \\(C_{\\mathrm{eq}}=\\sum_i C_i\\)。并联等效电容大于任一支路电容。 · Parallel connection: each capacitor’s two ends connect to the same pair of nodes, so the voltages are equal: \\(V_1=V_2=\\cdots=V\\). Total charge is the sum \\(Q_{\\mathrm{total}}=\\sum_i Q_i\\), so \\(C_{\\mathrm{eq}}=\\sum_i C_i\\). The parallel equivalent capacitance is larger than any individual branch capacitance.",
      "串联分压：\\(V_i=\\dfrac{Q}{C_i}\\)，所以电容越小分到的电压越大；两个电容满足 \\(\\dfrac{V_1}{V_2}=\\dfrac{C_2}{C_1}\\)。串联网络中最小电容承受最大电压，可能先达到击穿电压。 · Series voltage division: \\(V_i=\\dfrac{Q}{C_i}\\), so a smaller capacitance receives a larger voltage; for two capacitors \\(\\dfrac{V_1}{V_2}=\\dfrac{C_2}{C_1}\\). The smallest capacitor in a series string carries the largest voltage and may reach breakdown first.",
      "并联电荷分配：\\(Q_i=C_iV\\)，所以电容越大储存的电荷越多；总电荷按电容比例分配。 · Parallel charge division: \\(Q_i=C_iV\\), so a larger capacitance stores more charge; total charge divides in proportion to capacitance.",
      "电荷守恒适用于任何孤立导体系统：若几个电容连接前分别带电，连接后总电荷在孤立节点上守恒。求最终状态时，先写总电荷守恒，再结合“并联共同电压”或“串联共同电荷”求解。 · Charge conservation applies to any isolated conductor system: if capacitors carry initial charges before connection, the total charge on an isolated node is conserved after connection. To find the final state, write total-charge conservation first, then impose the common voltage for parallel or the common charge for series.",
      "电容网络储存的能量为 \\(U=\\dfrac{1}{2}C_{\\mathrm{eq}}V^{2}=\\dfrac{Q^{2}}{2C_{\\mathrm{eq}}}\\)；对理想电容网络，它等于各电容能量之和。重新连接带电电容时，部分能量会以热、火花或电磁辐射形式耗散，不能假设能量守恒。 · The energy stored in a capacitor network is \\(U=\\dfrac{1}{2}C_{\\mathrm{eq}}V^{2}=\\dfrac{Q^{2}}{2C_{\\mathrm{eq}}}\\); for an ideal network it equals the sum of the individual energies. When charged capacitors are reconnected, some energy is dissipated as heat, sparks, or radiation, so energy is not necessarily conserved.",
      "与电阻网络对比：电阻串联 \\(R_{\\mathrm{eq}}=\\sum R_i\\)、并联 \\(\\dfrac{1}{R_{\\mathrm{eq}}}=\\sum\\dfrac{1}{R_i}\\)；电容恰好相反——串联取倒数和、并联直接相加。电阻串联分压正比于 \\(R\\)，电容串联分压反比于 \\(C\\)。 · Contrast with resistor networks: resistors add directly in series and reciprocally in parallel, while capacitors do the opposite—reciprocal sum in series and direct sum in parallel. Series resistors divide voltage in proportion to \\(R\\), whereas series capacitors divide voltage inversely with \\(C\\)."
    ],
    "definition": "电容网络由多个电容器以串联、并联或混合方式连接。串联时，各电容依次相连，中间导体与外界绝缘；电荷守恒要求每个电容极板电荷量大小相同，\\(Q_1=Q_2=\\cdots=Q\\)，总电压为各电容电压之和。并联时，各电容接在同一对节点之间，电压相同，总电荷为各电容电荷之和。等效电容把整个网络化为一个电容：串联 \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\)，并联 \\(C_{\\mathrm{eq}}=\\sum_i C_i\\)。 · A capacitor network connects several capacitors in series, parallel, or a mixture. In series, the capacitors are connected one after another and the intermediate conductors are isolated; charge conservation requires the same charge magnitude on every capacitor, and the total voltage is the sum of the capacitor voltages. In parallel, the capacitors share the same pair of nodes, so they have the same voltage and their charges add. The equivalent capacitance replaces the whole network by one capacitor: reciprocal sum for series, direct sum for parallel.",
    "intuition": "串联电容像管道中串联的两块弹性膜：同样多的水（电荷）必须通过每一块膜，所以每块膜的形变（电荷）相同；但两块膜的劲度（电容倒数）不同，压力降（电压）就不同。中间那段封闭的水（浮置导体）总量不变：左边膜推走多少水，右边膜就得到多少水。并联电容像并排的多个气球接在同一根管上：每个气球承受相同压力（电压），大气球（大电容）存更多气（电荷）。 · Series capacitors are like two elastic membranes in series in a pipe: the same amount of water (charge) must pass through each membrane, so each membrane deflects by the same amount (charge); but membranes with different stiffness (reciprocal capacitance) produce different pressure drops (voltages). The sealed water between them (the floating conductor) has a fixed total amount: whatever the left membrane pushes out, the right membrane takes in. Parallel capacitors are like balloons connected side by side to the same pipe: each feels the same pressure (voltage), and a larger balloon (larger capacitance) stores more air (charge).",
    "formulas": [
      {
        "latex": "C=\\dfrac{Q}{V}",
        "note": "电容定义式；\\(Q\\) 为一个极板电荷量的绝对值。 · Capacitance definition; \\(Q\\) is the magnitude of the charge on one plate."
      },
      {
        "latex": "Q_1=Q_2=\\cdots=Q",
        "note": "串联电容的电荷约束，来源于浮置中间导体的电荷守恒。 · Charge constraint for series capacitors, from charge conservation on the floating intermediate conductors."
      },
      {
        "latex": "\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}",
        "note": "串联等效电容；结果小于最小电容。 · Series equivalent capacitance; the result is smaller than the smallest capacitor."
      },
      {
        "latex": "V=V_1+V_2+\\cdots",
        "note": "串联电压相加。 · Series voltages add."
      },
      {
        "latex": "V_1=V_2=\\cdots=V",
        "note": "并联电容的电压约束。 · Voltage constraint for parallel capacitors."
      },
      {
        "latex": "C_{\\mathrm{eq}}=\\sum_i C_i",
        "note": "并联等效电容；结果大于最大电容。 · Parallel equivalent capacitance; the result is larger than the largest capacitor."
      },
      {
        "latex": "Q_{\\mathrm{total}}=\\sum_i Q_i",
        "note": "并联总电荷为各电容电荷之和。 · Total parallel charge is the sum of the individual capacitor charges."
      },
      {
        "latex": "V_i=\\dfrac{Q}{C_i}",
        "note": "串联分压：电容越小，分到的电压越大。 · Series voltage division: a smaller capacitance receives a larger voltage."
      },
      {
        "latex": "Q_i=C_iV",
        "note": "并联电荷分配：电容越大，储存的电荷越多。 · Parallel charge division: a larger capacitance stores more charge."
      },
      {
        "latex": "U=\\dfrac{1}{2}C_{\\mathrm{eq}}V^{2}=\\dfrac{Q^{2}}{2C_{\\mathrm{eq}}}",
        "note": "等效电容储存的电场能；理想网络等于各电容能量之和。 · Electric energy stored in the equivalent capacitance; for an ideal network it equals the sum of the individual capacitor energies."
      }
    ],
    "derivationNotes": [
      {
        "from": "电荷守恒 · Charge conservation",
        "to": "串联等量电荷 · Equal series charge",
        "note": "串联中间导体与外界绝缘，净电荷不变；左电容右板的 \\(-Q\\) 必须在中间导体另一侧留下 \\(+Q\\)，于是右电容左板带 \\(+Q\\)，逐级传递得到 \\(Q_1=Q_2=\\cdots=Q\\)。 · The intermediate conductor in a series string is isolated, so its net charge is fixed. The \\(-Q\\) on the right plate of one capacitor forces \\(+Q\\) on the other side of the island, so the next capacitor’s left plate carries \\(+Q\\); propagating this gives \\(Q_1=Q_2=\\cdots=Q\\)."
      },
      {
        "from": "串联电压相加 · Series voltages add",
        "to": "等效电容公式 · Equivalent-capacitance formula",
        "note": "由 \\(V_i=\\dfrac{Q}{C_i}\\) 与 \\(V=\\sum_i V_i\\) 得 \\(V=Q\\sum_i\\dfrac{1}{C_i}\\)，与 \\(V=\\dfrac{Q}{C_{\\mathrm{eq}}}\\) 比较即得 \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\)。 · From \\(V_i=\\dfrac{Q}{C_i}\\) and \\(V=\\sum_i V_i\\), \\(V=Q\\sum_i\\dfrac{1}{C_i}\\). Comparing with \\(V=\\dfrac{Q}{C_{\\mathrm{eq}}}\\) gives \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\)."
      },
      {
        "from": "并联共同电压 · Common parallel voltage",
        "to": "并联等效电容 · Parallel equivalent capacitance",
        "note": "各电容电压相同，总电荷 \\(Q_{\\mathrm{total}}=\\sum_i Q_i=\\sum_i C_iV\\)，与 \\(Q_{\\mathrm{total}}=C_{\\mathrm{eq}}V\\) 比较得 \\(C_{\\mathrm{eq}}=\\sum_i C_i\\)。 · All parallel capacitors have the same voltage, so \\(Q_{\\mathrm{total}}=\\sum_i Q_i=\\sum_i C_iV\\); comparing with \\(Q_{\\mathrm{total}}=C_{\\mathrm{eq}}V\\) gives \\(C_{\\mathrm{eq}}=\\sum_i C_i\\)."
      },
      {
        "from": "电荷再分配 · Charge redistribution",
        "to": "初始带电网络 · Initially charged network",
        "note": "把孤立节点上的初始电荷相加，得到总电荷；再令最终状态满足并联共同电压或串联共同电荷，解出最终电压与各电容电荷。 · Add the initial charges on an isolated node to get the total charge; then impose the final common voltage (parallel) or common charge (series) to solve for the final voltage and individual charges."
      },
      {
        "from": "能量定义 · Energy definition",
        "to": "网络能量 · Network energy",
        "note": "把等效电容代入 \\(U=\\dfrac{1}{2}CV^{2}\\) 即得 \\(U=\\dfrac{Q^{2}}{2C_{\\mathrm{eq}}}\\)；检查时可用各电容能量之和验证理想网络。 · Substitute the equivalent capacitance into \\(U=\\dfrac{1}{2}CV^{2}\\) to obtain \\(U=\\dfrac{Q^{2}}{2C_{\\mathrm{eq}}}\\); for an ideal network, verify by summing the individual capacitor energies."
      },
      {
        "from": "电阻—电容对偶 · Resistor–capacitor duality",
        "to": "公式对照 · Formula comparison",
        "note": "电阻串联相加、并联取倒数和；电容串联取倒数和、并联相加。把 \\(R\\) 换成 \\(\\dfrac{1}{C}\\) 即可看出对偶关系。 · Resistors add in series and add reciprocals in parallel; capacitors add reciprocals in series and add directly in parallel. Replacing \\(R\\) by \\(\\dfrac{1}{C}\\) reveals the duality."
      }
    ],
    "conditions": [
      "理想电容、无漏电；电介质线性且未击穿，电容值不随电压改变。 · Ideal capacitors with no leakage; the dielectric is linear and not broken down, so capacitance does not change with voltage.",
      "串联等量电荷要求相邻电容之间的中间导体与外界绝缘；若中间节点接地、漏电或另有支路，等量电荷结论不再直接成立。 · Equal series charge requires the intermediate conductors between adjacent capacitors to be isolated; if an intermediate node is grounded, leaks, or has another branch, the equal-charge conclusion no longer applies directly.",
      "并联共同电压要求各电容两端由理想导线连接在同一对节点上；导线电阻可忽略。 · Common parallel voltage requires ideal wires connecting both ends of every capacitor to the same pair of nodes; wire resistance is negligible.",
      "讨论静电平衡或直流稳态；若电压随时间变化，需用 \\(i=C\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\) 分析暂态。 · The analysis assumes electrostatic equilibrium or DC steady state; if voltages vary with time, use \\(i=C\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}\\) for the transient.",
      "忽略导线电容、寄生电容与边缘效应；这些在精密或高频电路中可能不可忽略。 · Ignore wire capacitance, stray capacitance, and fringing fields; these may matter in precision or high-frequency circuits.",
      "初始电荷必须已知；题目未说明时默认所有电容初始不带电。 · Initial charges must be specified; if the problem does not state them, all capacitors are assumed initially uncharged.",
      "重新连接带电电容时，电荷守恒仍成立，但机械功、火花与辐射可能带走能量；能量不一定守恒。 · When charged capacitors are reconnected, charge conservation still holds, but mechanical work, sparks, and radiation may remove energy; energy is not necessarily conserved."
    ],
    "keyPoints": [
      "串联电容电荷量大小相同：\\(Q_1=Q_2=\\cdots=Q\\)；电压按 \\(V_i=\\dfrac{Q}{C_i}\\) 分配，电容越小分压越大。 · Series capacitors have the same charge magnitude, \\(Q_1=Q_2=\\cdots=Q\\); voltage divides as \\(V_i=\\dfrac{Q}{C_i}\\), so a smaller capacitance receives a larger voltage.",
      "并联电容电压相同：\\(V_1=V_2=\\cdots=V\\)；电荷按 \\(Q_i=C_iV\\) 分配，电容越大储存电荷越多。 · Parallel capacitors have the same voltage, \\(V_1=V_2=\\cdots=V\\); charge divides as \\(Q_i=C_iV\\), so a larger capacitance stores more charge.",
      "浮置中间导体净电荷为零，不等于两个极板没有电荷；两个相对极板可分别带 \\(+Q\\) 与 \\(-Q\\)。 · A floating intermediate conductor with zero net charge does not have chargeless plates; its two facing plates can carry \\(+Q\\) and \\(-Q\\).",
      "串联等效电容小于最小电容；并联等效电容大于最大电容；用这两个极限快速检查答案。 · The series equivalent capacitance is smaller than the smallest capacitor, and the parallel equivalent capacitance is larger than the largest; use these limits as a quick check.",
      "串联公式取倒数和、并联公式直接相加，恰好与电阻网络相反；不要混用。 · Series uses a reciprocal sum and parallel uses a direct sum—the opposite of resistor networks; do not mix them up.",
      "初始带电电容连接时，先对孤立节点写总电荷守恒，再结合共同电压或共同电荷求最终状态。 · For initially charged capacitors, first write total-charge conservation on the isolated node, then use the common voltage or common charge to find the final state.",
      "电容网络能量用等效电容计算；重新连接时机械功、火花和辐射可能耗散能量，不能盲目使用能量守恒。 · Compute network energy with the equivalent capacitance; reconnection can dissipate energy through work, sparks, and radiation, so do not apply energy conservation blindly.",
      "与电阻对比：电阻串联分压正比于 \\(R\\)，电容串联分压反比于 \\(C\\)；电阻并联分流，电容并联分电荷。 · Contrast with resistors: series resistors divide voltage in proportion to \\(R\\), while series capacitors divide voltage inversely with \\(C\\); parallel resistors divide current, and parallel capacitors divide charge."
    ],
    "misconceptions": [
      "认为串联电容的电荷量不同，因为电容值不同；实际上串联各电容的 \\(Q\\) 相同，不同的是电压 \\(V_i=\\dfrac{Q}{C_i}\\)。 · Thinking series capacitors carry different charges because their capacitances differ; in fact the series charge \\(Q\\) is the same, and the voltages \\(V_i=\\dfrac{Q}{C_i}\\) differ.",
      "把浮置中间导体的“净电荷为零”误认为“两个极板都没有电荷”；净电荷是代数和，两个相对极板可以分别带 \\(+Q\\) 与 \\(-Q\\)。 · Confusing “zero net charge” on a floating conductor with “no charge on either plate”; net charge is an algebraic sum, and the two facing plates can carry \\(+Q\\) and \\(-Q\\).",
      "把电阻的串联公式用于电容：\\(C_{\\mathrm{eq}}=\\sum C_i\\) 只适用于并联，串联必须取倒数和。 · Using the resistor series formula for capacitors: \\(C_{\\mathrm{eq}}=\\sum C_i\\) applies only to parallel capacitors; series requires a reciprocal sum.",
      "把电阻的并联公式用于电容：\\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum\\dfrac{1}{C_i}\\) 只适用于串联，并联必须直接相加。 · Using the resistor parallel formula for capacitors: \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum\\dfrac{1}{C_i}\\) applies only to series; parallel capacitors add directly.",
      "认为串联各电容电压相同；串联电压相加，且电容越小分压越大。 · Thinking series capacitors share the same voltage; series voltages add, and the smallest capacitance receives the largest voltage.",
      "认为并联各电容电荷相同；并联电压相同，电荷按 \\(Q_i=C_iV\\) 分配，大电容带更多电荷。 · Thinking parallel capacitors store equal charge; they share the same voltage, and charge divides as \\(Q_i=C_iV\\), so the larger capacitance stores more.",
      "认为串联等效电容大于最小电容，或并联等效电容小于最大电容；这两个结论都与极限检查矛盾。 · Thinking a series equivalent capacitance exceeds the smallest capacitor, or a parallel equivalent is smaller than the largest; both contradict the limiting checks.",
      "忽略初始电荷，直接把所有电容当作从零开始充电；连接带电电容时必须把初始电荷计入总电荷守恒。 · Ignoring initial charges and treating every capacitor as starting from zero; when charged capacitors are connected, initial charges must be included in total-charge conservation.",
      "认为电荷守恒意味着每个极板上的电荷固定不变；电荷守恒约束的是孤立导体的总电荷，电荷可以在相连的极板之间重新分配。 · Thinking charge conservation means each plate’s charge is fixed; conservation constrains the total charge on an isolated conductor, and charge can redistribute among connected plates."
    ],
    "examples": [
      {
        "title": "例 1 · 两个电容串联 · Example 1: Two capacitors in series",
        "prompt": "\\(C_1=3.0\\,\\mu\\mathrm{F}\\) 与 \\(C_2=6.0\\,\\mu\\mathrm{F}\\) 串联接在 \\(12\\,\\mathrm{V}\\) 电源两端。求等效电容、每个电容的电荷量以及各自的电压。 · \\(C_1=3.0\\,\\mu\\mathrm{F}\\) and \\(C_2=6.0\\,\\mu\\mathrm{F}\\) are in series across a \\(12\\,\\mathrm{V}\\) source. Find the equivalent capacitance, the charge on each capacitor, and each voltage.",
        "steps": [
          "串联等效电容：\\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\dfrac{1}{3.0}+\\dfrac{1}{6.0}=\\dfrac{1}{2.0}\\)，所以 \\(C_{\\mathrm{eq}}=2.0\\,\\mu\\mathrm{F}\\)。 · Series equivalent: \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\dfrac{1}{3.0}+\\dfrac{1}{6.0}=\\dfrac{1}{2.0}\\), so \\(C_{\\mathrm{eq}}=2.0\\,\\mu\\mathrm{F}\\).",
          "串联电荷相同：\\(Q=C_{\\mathrm{eq}}V=(2.0\\,\\mu\\mathrm{F})(12\\,\\mathrm{V})=24\\,\\mu\\mathrm{C}\\)，所以 \\(Q_1=Q_2=24\\,\\mu\\mathrm{C}\\)。 · Series charge is common: \\(Q=C_{\\mathrm{eq}}V=(2.0\\,\\mu\\mathrm{F})(12\\,\\mathrm{V})=24\\,\\mu\\mathrm{C}\\), so \\(Q_1=Q_2=24\\,\\mu\\mathrm{C}\\).",
          "分压：\\(V_1=\\dfrac{Q}{C_1}=\\dfrac{24\\,\\mu\\mathrm{C}}{3.0\\,\\mu\\mathrm{F}}=8.0\\,\\mathrm{V}\\)，\\(V_2=\\dfrac{24\\,\\mu\\mathrm{C}}{6.0\\,\\mu\\mathrm{F}}=4.0\\,\\mathrm{V}\\)。 · Voltage division: \\(V_1=\\dfrac{Q}{C_1}=\\dfrac{24\\,\\mu\\mathrm{C}}{3.0\\,\\mu\\mathrm{F}}=8.0\\,\\mathrm{V}\\) and \\(V_2=\\dfrac{24\\,\\mu\\mathrm{C}}{6.0\\,\\mu\\mathrm{F}}=4.0\\,\\mathrm{V}\\).",
          "检查：\\(V_1+V_2=12\\,\\mathrm{V}\\)，且小电容 \\(C_1\\) 分到更大电压，符合 \\(V\\propto\\dfrac{1}{C}\\)。 · Check: \\(V_1+V_2=12\\,\\mathrm{V}\\), and the smaller capacitor \\(C_1\\) takes the larger voltage, consistent with \\(V\\propto\\dfrac{1}{C}\\)."
        ],
        "solution": "\\(C_{\\mathrm{eq}}=2.0\\,\\mu\\mathrm{F}\\)，\\(Q_1=Q_2=24\\,\\mu\\mathrm{C}\\)，\\(V_1=8.0\\,\\mathrm{V}\\)，\\(V_2=4.0\\,\\mathrm{V}\\)。 · \\(C_{\\mathrm{eq}}=2.0\\,\\mu\\mathrm{F}\\), \\(Q_1=Q_2=24\\,\\mu\\mathrm{C}\\), \\(V_1=8.0\\,\\mathrm{V}\\), \\(V_2=4.0\\,\\mathrm{V}\\).",
        "solutionLatex": "C_{\\mathrm{eq}}=2.0\\,\\mu\\mathrm{F},\\qquad Q_1=Q_2=24\\,\\mu\\mathrm{C},\\qquad V_1=8.0\\,\\mathrm{V},\\qquad V_2=4.0\\,\\mathrm{V}"
      },
      {
        "title": "例 2 · 三个电容串联 · Example 2: Three capacitors in series",
        "prompt": "\\(C_1=2.0\\,\\mu\\mathrm{F}\\)、\\(C_2=3.0\\,\\mu\\mathrm{F}\\)、\\(C_3=6.0\\,\\mu\\mathrm{F}\\) 串联接在 \\(6.0\\,\\mathrm{V}\\) 电源两端。求等效电容、公共电荷和各电容电压。 · \\(C_1=2.0\\,\\mu\\mathrm{F}\\), \\(C_2=3.0\\,\\mu\\mathrm{F}\\), and \\(C_3=6.0\\,\\mu\\mathrm{F}\\) are in series across a \\(6.0\\,\\mathrm{V}\\) source. Find the equivalent capacitance, the common charge, and each voltage.",
        "steps": [
          "\\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\dfrac{1}{2.0}+\\dfrac{1}{3.0}+\\dfrac{1}{6.0}=1.0\\,\\mu\\mathrm{F}^{-1}\\)，所以 \\(C_{\\mathrm{eq}}=1.0\\,\\mu\\mathrm{F}\\)。 · \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\dfrac{1}{2.0}+\\dfrac{1}{3.0}+\\dfrac{1}{6.0}=1.0\\,\\mu\\mathrm{F}^{-1}\\), so \\(C_{\\mathrm{eq}}=1.0\\,\\mu\\mathrm{F}\\).",
          "串联公共电荷 \\(Q=C_{\\mathrm{eq}}V=(1.0\\,\\mu\\mathrm{F})(6.0\\,\\mathrm{V})=6.0\\,\\mu\\mathrm{C}\\)。 · The common series charge is \\(Q=C_{\\mathrm{eq}}V=(1.0\\,\\mu\\mathrm{F})(6.0\\,\\mathrm{V})=6.0\\,\\mu\\mathrm{C}\\).",
          "\\(V_1=\\dfrac{6.0\\,\\mu\\mathrm{C}}{2.0\\,\\mu\\mathrm{F}}=3.0\\,\\mathrm{V}\\)，\\(V_2=\\dfrac{6.0\\,\\mu\\mathrm{C}}{3.0\\,\\mu\\mathrm{F}}=2.0\\,\\mathrm{V}\\)，\\(V_3=\\dfrac{6.0\\,\\mu\\mathrm{C}}{6.0\\,\\mu\\mathrm{F}}=1.0\\,\\mathrm{V}\\)。 · \\(V_1=3.0\\,\\mathrm{V}\\), \\(V_2=2.0\\,\\mathrm{V}\\), and \\(V_3=1.0\\,\\mathrm{V}\\).",
          "检查：\\(3.0+2.0+1.0=6.0\\,\\mathrm{V}\\)；最小电容 \\(C_1\\) 分到最大电压，符合串联分压规律。 · Check: \\(3.0+2.0+1.0=6.0\\,\\mathrm{V}\\); the smallest capacitor \\(C_1\\) takes the largest voltage, consistent with series voltage division."
        ],
        "solution": "\\(C_{\\mathrm{eq}}=1.0\\,\\mu\\mathrm{F}\\)，\\(Q=6.0\\,\\mu\\mathrm{C}\\)，\\(V_1=3.0\\,\\mathrm{V}\\)，\\(V_2=2.0\\,\\mathrm{V}\\)，\\(V_3=1.0\\,\\mathrm{V}\\)。 · \\(C_{\\mathrm{eq}}=1.0\\,\\mu\\mathrm{F}\\), \\(Q=6.0\\,\\mu\\mathrm{C}\\), \\(V_1=3.0\\,\\mathrm{V}\\), \\(V_2=2.0\\,\\mathrm{V}\\), \\(V_3=1.0\\,\\mathrm{V}\\).",
        "solutionLatex": "C_{\\mathrm{eq}}=1.0\\,\\mu\\mathrm{F},\\qquad Q=6.0\\,\\mu\\mathrm{C},\\qquad V_1=3.0\\,\\mathrm{V},\\qquad V_2=2.0\\,\\mathrm{V},\\qquad V_3=1.0\\,\\mathrm{V}"
      },
      {
        "title": "例 3 · 两个电容并联 · Example 3: Two capacitors in parallel",
        "prompt": "\\(C_1=3.0\\,\\mu\\mathrm{F}\\) 与 \\(C_2=6.0\\,\\mu\\mathrm{F}\\) 并联接在 \\(12\\,\\mathrm{V}\\) 电源两端。求等效电容、各电容电荷和总电荷。 · \\(C_1=3.0\\,\\mu\\mathrm{F}\\) and \\(C_2=6.0\\,\\mu\\mathrm{F}\\) are in parallel across a \\(12\\,\\mathrm{V}\\) source. Find the equivalent capacitance, each charge, and the total charge.",
        "steps": [
          "并联等效电容：\\(C_{\\mathrm{eq}}=3.0+6.0=9.0\\,\\mu\\mathrm{F}\\)。 · Parallel equivalent: \\(C_{\\mathrm{eq}}=3.0+6.0=9.0\\,\\mu\\mathrm{F}\\).",
          "并联电压相同，均为 \\(12\\,\\mathrm{V}\\)。 · Parallel voltages are equal, both \\(12\\,\\mathrm{V}\\).",
          "\\(Q_1=C_1V=(3.0\\,\\mu\\mathrm{F})(12\\,\\mathrm{V})=36\\,\\mu\\mathrm{C}\\)，\\(Q_2=C_2V=(6.0\\,\\mu\\mathrm{F})(12\\,\\mathrm{V})=72\\,\\mu\\mathrm{C}\\)。 · \\(Q_1=36\\,\\mu\\mathrm{C}\\) and \\(Q_2=72\\,\\mu\\mathrm{C}\\).",
          "总电荷 \\(Q_{\\mathrm{total}}=36+72=108\\,\\mu\\mathrm{C}\\)，也等于 \\(C_{\\mathrm{eq}}V=(9.0)(12)=108\\,\\mu\\mathrm{C}\\)。 · Total charge \\(Q_{\\mathrm{total}}=36+72=108\\,\\mu\\mathrm{C}\\), also \\(C_{\\mathrm{eq}}V=(9.0)(12)=108\\,\\mu\\mathrm{C}\\).",
          "检查：\\(C_{\\mathrm{eq}}=9.0\\,\\mu\\mathrm{F}\\) 大于任一支路，大电容 \\(C_2\\) 带更多电荷，符合并联规律。 · Check: \\(C_{\\mathrm{eq}}=9.0\\,\\mu\\mathrm{F}\\) exceeds either branch, and the larger capacitor \\(C_2\\) carries more charge, consistent with parallel behavior."
        ],
        "solution": "\\(C_{\\mathrm{eq}}=9.0\\,\\mu\\mathrm{F}\\)，\\(Q_1=36\\,\\mu\\mathrm{C}\\)，\\(Q_2=72\\,\\mu\\mathrm{C}\\)，\\(Q_{\\mathrm{total}}=108\\,\\mu\\mathrm{C}\\)。 · \\(C_{\\mathrm{eq}}=9.0\\,\\mu\\mathrm{F}\\), \\(Q_1=36\\,\\mu\\mathrm{C}\\), \\(Q_2=72\\,\\mu\\mathrm{C}\\), \\(Q_{\\mathrm{total}}=108\\,\\mu\\mathrm{C}\\).",
        "solutionLatex": "C_{\\mathrm{eq}}=9.0\\,\\mu\\mathrm{F},\\qquad Q_1=36\\,\\mu\\mathrm{C},\\qquad Q_2=72\\,\\mu\\mathrm{C},\\qquad Q_{\\mathrm{total}}=108\\,\\mu\\mathrm{C}"
      },
      {
        "title": "例 4 · 串联等量电荷的主张—证据—推理 · Example 4: Equal series charge, claim–evidence–reasoning",
        "prompt": "\\(C_1=4.0\\,\\mu\\mathrm{F}\\) 与 \\(C_2=12\\,\\mu\\mathrm{F}\\) 串联接在 \\(16\\,\\mathrm{V}\\) 电源两端。某学生说：“\\(C_1\\) 的电容是 \\(C_2\\) 的三分之一，所以 \\(C_1\\) 的电荷也是 \\(C_2\\) 的三分之一。”请判断并给出定量论证，说明浮置中间导体的作用。 · \\(C_1=4.0\\,\\mu\\mathrm{F}\\) and \\(C_2=12\\,\\mu\\mathrm{F}\\) are in series across a \\(16\\,\\mathrm{V}\\) source. A student claims, “\\(C_1\\) has one-third the capacitance of \\(C_2\\), so it also has one-third the charge.” Evaluate the claim quantitatively and explain the role of the floating intermediate conductor.",
        "steps": [
          "主张错误。串联等效电容 \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\dfrac{1}{4.0}+\\dfrac{1}{12}=\\dfrac{1}{3.0}\\)，所以 \\(C_{\\mathrm{eq}}=3.0\\,\\mu\\mathrm{F}\\)。 · The claim is wrong. The series equivalent is \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\dfrac{1}{4.0}+\\dfrac{1}{12}=\\dfrac{1}{3.0}\\), so \\(C_{\\mathrm{eq}}=3.0\\,\\mu\\mathrm{F}\\).",
          "公共电荷 \\(Q=C_{\\mathrm{eq}}V=(3.0\\,\\mu\\mathrm{F})(16\\,\\mathrm{V})=48\\,\\mu\\mathrm{C}\\)，因此 \\(Q_1=Q_2=48\\,\\mu\\mathrm{C}\\)，并非三分之一关系。 · The common charge is \\(Q=C_{\\mathrm{eq}}V=(3.0\\,\\mu\\mathrm{F})(16\\,\\mathrm{V})=48\\,\\mu\\mathrm{C}\\), so \\(Q_1=Q_2=48\\,\\mu\\mathrm{C}\\), not a one-third relation.",
          "电压才按电容反比分配：\\(V_1=\\dfrac{48\\,\\mu\\mathrm{C}}{4.0\\,\\mu\\mathrm{F}}=12\\,\\mathrm{V}\\)，\\(V_2=\\dfrac{48\\,\\mu\\mathrm{C}}{12\\,\\mu\\mathrm{F}}=4.0\\,\\mathrm{V}\\)。 · Voltage, not charge, divides inversely with capacitance: \\(V_1=12\\,\\mathrm{V}\\) and \\(V_2=4.0\\,\\mathrm{V}\\).",
          "证据：两个电容之间的中间导体由 \\(C_1\\) 的右板和 \\(C_2\\) 的左板通过导线相连构成，整体与外界绝缘，净电荷为零。\\(C_1\\) 右板带 \\(-48\\,\\mu\\mathrm{C}\\)；为保持中间导体净电荷为零，\\(C_2\\) 左板必须带 \\(+48\\,\\mu\\mathrm{C}\\)（电子从 \\(C_2\\) 左板转移到 \\(C_1\\) 右板）。 · Evidence: the intermediate conductor between the capacitors consists of the right plate of \\(C_1\\) and the left plate of \\(C_2\\) joined by a wire; it is isolated and has zero net charge. The right plate of \\(C_1\\) carries \\(-48\\,\\mu\\mathrm{C}\\); to keep the island neutral, the left plate of \\(C_2\\) must carry \\(+48\\,\\mu\\mathrm{C}\\) (electrons move from the left plate of \\(C_2\\) to the right plate of \\(C_1\\)).",
          "推理：电荷守恒把每个电容的电荷“锁”成同一大小；电容值只决定同样电荷下产生多大电压，不决定电荷多少。串联最小电容承受最大电压，因此更容易先击穿。 · Reasoning: charge conservation locks every capacitor to the same charge magnitude; capacitance only sets the voltage produced by that charge. The smallest series capacitor takes the largest voltage and is therefore the first at risk of breakdown."
        ],
        "solution": "学生把电容比误当成电荷比。\\(Q_1=Q_2=48\\,\\mu\\mathrm{C}\\)，\\(V_1=12\\,\\mathrm{V}\\)，\\(V_2=4.0\\,\\mathrm{V}\\)；浮置中间导体净电荷为零，但两侧极板分别带 \\(+48\\,\\mu\\mathrm{C}\\) 与 \\(-48\\,\\mu\\mathrm{C}\\)。 · The student confused the capacitance ratio with a charge ratio. \\(Q_1=Q_2=48\\,\\mu\\mathrm{C}\\), \\(V_1=12\\,\\mathrm{V}\\), and \\(V_2=4.0\\,\\mathrm{V}\\); the floating island has zero net charge but its two plates carry \\(+48\\,\\mu\\mathrm{C}\\) and \\(-48\\,\\mu\\mathrm{C}\\).",
        "solutionLatex": "C_{\\mathrm{eq}}=3.0\\,\\mu\\mathrm{F},\\qquad Q_1=Q_2=48\\,\\mu\\mathrm{C},\\qquad V_1=12\\,\\mathrm{V},\\qquad V_2=4.0\\,\\mathrm{V}"
      },
      {
        "title": "例 5 · 初始带电电容并联后的电荷再分配 · Example 5: Charge redistribution after connecting charged capacitors",
        "prompt": "\\(C_1=2.0\\,\\mu\\mathrm{F}\\) 先充电到 \\(10\\,\\mathrm{V}\\)，\\(C_2=3.0\\,\\mu\\mathrm{F}\\) 初始不带电。把 \\(C_1\\) 的正极板接到 \\(C_2\\) 的一个极板、负极板接到另一个极板，形成并联。求最终共同电压与各电容电荷。 · \\(C_1=2.0\\,\\mu\\mathrm{F}\\) is charged to \\(10\\,\\mathrm{V}\\), and \\(C_2=3.0\\,\\mu\\mathrm{F}\\) is initially uncharged. Connect the positive plate of \\(C_1\\) to one plate of \\(C_2\\) and the negative plate to the other, forming a parallel combination. Find the final common voltage and each charge.",
        "steps": [
          "初始总电荷在孤立节点上守恒：\\(Q_{\\mathrm{total}}=C_1V_0=(2.0\\,\\mu\\mathrm{F})(10\\,\\mathrm{V})=20\\,\\mu\\mathrm{C}\\)；\\(C_2\\) 初始电荷为零。 · Total charge on the isolated node is conserved: \\(Q_{\\mathrm{total}}=C_1V_0=(2.0\\,\\mu\\mathrm{F})(10\\,\\mathrm{V})=20\\,\\mu\\mathrm{C}\\); \\(C_2\\) starts with zero charge.",
          "并联后两电容电压相同，设为 \\(V_f\\)；总电容 \\(C_{\\mathrm{eq}}=2.0+3.0=5.0\\,\\mu\\mathrm{F}\\)。 · After connection the capacitors share the same voltage \\(V_f\\), and the total capacitance is \\(C_{\\mathrm{eq}}=2.0+3.0=5.0\\,\\mu\\mathrm{F}\\).",
          "由 \\(Q_{\\mathrm{total}}=C_{\\mathrm{eq}}V_f\\) 得 \\(V_f=\\dfrac{20\\,\\mu\\mathrm{C}}{5.0\\,\\mu\\mathrm{F}}=4.0\\,\\mathrm{V}\\)。 · From \\(Q_{\\mathrm{total}}=C_{\\mathrm{eq}}V_f\\), \\(V_f=\\dfrac{20\\,\\mu\\mathrm{C}}{5.0\\,\\mu\\mathrm{F}}=4.0\\,\\mathrm{V}\\).",
          "最终电荷：\\(Q_1=C_1V_f=(2.0)(4.0)=8.0\\,\\mu\\mathrm{C}\\)，\\(Q_2=C_2V_f=(3.0)(4.0)=12\\,\\mu\\mathrm{C}\\)。 · Final charges: \\(Q_1=8.0\\,\\mu\\mathrm{C}\\) and \\(Q_2=12\\,\\mu\\mathrm{C}\\).",
          "检查电荷守恒：\\(8.0+12=20\\,\\mu\\mathrm{C}\\)，与初始总电荷一致。能量从初始 \\(\\dfrac{1}{2}C_1V_0^{2}=100\\,\\mu\\mathrm{J}\\) 降为最终 \\(\\dfrac{1}{2}C_{\\mathrm{eq}}V_f^{2}=40\\,\\mu\\mathrm{J}\\)，差值在连接过程中以热、火花或辐射耗散。 · Check charge conservation: \\(8.0+12=20\\,\\mu\\mathrm{C}\\), matching the initial total. Energy drops from \\(100\\,\\mu\\mathrm{J}\\) initially to \\(40\\,\\mu\\mathrm{J}\\) finally; the difference is dissipated as heat, sparks, or radiation during connection."
        ],
        "solution": "\\(V_f=4.0\\,\\mathrm{V}\\)，\\(Q_1=8.0\\,\\mu\\mathrm{C}\\)，\\(Q_2=12.0\\,\\mu\\mathrm{C}\\)；总电荷 \\(20\\,\\mu\\mathrm{C}\\) 守恒。 · \\(V_f=4.0\\,\\mathrm{V}\\), \\(Q_1=8.0\\,\\mu\\mathrm{C}\\), \\(Q_2=12.0\\,\\mu\\mathrm{C}\\); the total charge \\(20\\,\\mu\\mathrm{C}\\) is conserved.",
        "solutionLatex": "Q_{\\mathrm{total}}=20\\,\\mu\\mathrm{C},\\qquad C_{\\mathrm{eq}}=5.0\\,\\mu\\mathrm{F},\\qquad V_f=4.0\\,\\mathrm{V},\\qquad Q_1=8.0\\,\\mu\\mathrm{C},\\qquad Q_2=12\\,\\mu\\mathrm{C}"
      }
    ],
    "examTips": [
      "先判断串联还是并联：串联看“同一路径、同一电荷”，并联看“同一对节点、同一电压”。 · First decide series versus parallel: series means one path and one common charge; parallel means one pair of nodes and one common voltage.",
      "串联先写 \\(Q_1=Q_2=\\cdots=Q\\)，再用 \\(V_i=\\dfrac{Q}{C_i}\\) 求分压；不要先假设电压相同。 · For series, write \\(Q_1=Q_2=\\cdots=Q\\) first, then use \\(V_i=\\dfrac{Q}{C_i}\\) for voltage division; do not assume equal voltages.",
      "并联先写 \\(V_1=V_2=\\cdots=V\\)，再用 \\(Q_i=C_iV\\) 求电荷；不要先假设电荷相同。 · For parallel, write \\(V_1=V_2=\\cdots=V\\) first, then use \\(Q_i=C_iV\\) for charge; do not assume equal charges.",
      "串联等效电容用倒数和，结果应小于最小电容；并联直接相加，结果应大于最大电容。用这两个极限检查。 · Series equivalent uses a reciprocal sum and must be smaller than the smallest capacitor; parallel adds directly and must exceed the largest. Use these limits as checks.",
      "浮置中间导体的净电荷为零，但两个极板可带 \\(+Q\\) 与 \\(-Q\\)；论证题要把这一点写成电荷守恒的证据。 · A floating intermediate conductor has zero net charge, but its two plates can carry \\(+Q\\) and \\(-Q\\); in a CER response, use this as the evidence for charge conservation.",
      "遇到“先充电再连接”的题，先算孤立节点上的初始总电荷，再令最终状态满足并联共同电压或串联共同电荷。 · For “charge first, connect later” problems, compute the initial total charge on the isolated node, then impose the final common voltage (parallel) or common charge (series).",
      "能量在重新连接时不一定守恒；电荷守恒仍成立，但部分能量会以热、火花或辐射耗散。 · Energy is not necessarily conserved on reconnection; charge conservation still holds, but some energy is dissipated as heat, sparks, or radiation.",
      "不要把电阻的串并联公式直接搬到电容：两者恰好对偶，串联/并联的倒数和位置相反。 · Do not copy resistor series/parallel formulas onto capacitors: the two are dual, with reciprocal sums in opposite positions."
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
        "chapterId": "em-u11",
        "code": "11.2",
        "title": "简单电路 · Simple Circuits",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.8",
        "title": "RC 电路 · Resistor–Capacitor (RC) Circuits",
        "relation": "应用 · application"
      },
      {
        "subject": "em",
        "chapterId": "em-u11",
        "code": "11.10",
        "title": "电路元件、开闭与拓扑 · Circuit Elements, Open Circuits, and Topology",
        "relation": "相关 · related"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u11",
    "connections": [
      "上游：10.3 的 \\(C=\\dfrac{Q}{V}\\) 与极板电荷图像给出单个电容的定义；本主题把它推广到串联、并联与混合网络。 · Upstream: \\(C=\\dfrac{Q}{V}\\) and the plate-charge picture from 10.3 define a single capacitor; this topic extends them to series, parallel, and mixed networks.",
      "下游：11.8 的 RC 充放电与 13.6 的 LC 振荡都要用等效电容、串联等量电荷和电荷守恒；本主题为这些暂态过程提供静电学基础。 · Downstream: RC charging/discharging in 11.8 and LC oscillations in 13.6 use equivalent capacitance, equal series charge, and charge conservation; this topic provides their electrostatic foundation.",
      "方法：电荷守恒、节点电压约束与能量计算是解决电容网络的三把钥匙；与电阻网络的串并联公式对偶，可用于快速检查。 · Methods: charge conservation, node-voltage constraints, and energy accounting are the three keys to capacitor networks; the duality with resistor series/parallel formulas provides quick checks.",
      "应用：相机闪光灯、除颤器、滤波与储能电容组都涉及串并联电容的电荷分配、分压与击穿风险。 · Applications: camera flashes, defibrillators, filters, and energy-storage banks all involve charge division, voltage sharing, and breakdown risk in series/parallel capacitor networks."
    ],
    "intuitionDetailed": "先画“电荷账本”。对串联网络，把两个电容之间的中间导体圈成一个孤岛：它不与外界交换电荷，所以净电荷固定；若初始中性，净电荷就是零。左电容的右板带 \\(-Q\\)，孤岛左板就带 \\(+Q\\)；孤岛右板必须带 \\(-Q\\) 才能保持净零，于是右电容左板带 \\(+Q\\)。这样一路推下去，每个电容的电荷量都相同。电压则像“压力降”：\\(V_i=\\dfrac{Q}{C_i}\\)，电容越小，同样的电荷产生越大的电压。对并联网络，把每个电容想象成接在同一对节点上的气球：电压相同，电荷按 \\(Q_i=C_iV\\) 分配，大电容存更多电荷。混合网络先化简并联块或串联块，再重复“先电荷、后电压”或“先电压、后电荷”的步骤。最后用两个极限检查：串联 \\(C_{\\mathrm{eq}}\\) 应小于最小电容，并联 \\(C_{\\mathrm{eq}}\\) 应大于最大电容；再用总电荷守恒和能量耗散解释“先充电再连接”的题目。 · First draw a “charge ledger.” For a series network, circle the intermediate conductor between two capacitors as an isolated island: it exchanges no charge with the outside, so its net charge is fixed—zero if initially neutral. The right plate of the left capacitor carries \\(-Q\\), so the island’s left plate carries \\(+Q\\); the island’s right plate must carry \\(-Q\\) to keep zero net charge, so the right capacitor’s left plate carries \\(+Q\\). Propagating this gives every capacitor the same charge magnitude. Voltage behaves like a pressure drop: \\(V_i=\\dfrac{Q}{C_i}\\), so a smaller capacitance produces a larger voltage for the same charge. For a parallel network, imagine each capacitor as a balloon connected to the same pair of nodes: the voltage is the same, charge divides as \\(Q_i=C_iV\\), and the larger capacitance stores more charge. For mixed networks, reduce parallel or series blocks first, then repeat “charge first, voltage second” or “voltage first, charge second.” Finish with two limit checks: the series \\(C_{\\mathrm{eq}}\\) should be smaller than the smallest capacitor, and the parallel \\(C_{\\mathrm{eq}}\\) should be larger than the largest; then use total-charge conservation and energy dissipation to explain “charge first, connect later” problems.",
    "development": [
      "复习单个电容：\\(C=\\dfrac{Q}{V}\\)，两个极板带等量异号电荷，\\(Q\\) 取一个极板的绝对值。 · Review a single capacitor: \\(C=\\dfrac{Q}{V}\\), the two plates carry equal and opposite charges, and \\(Q\\) is the magnitude on one plate.",
      "建立串联电荷守恒图像：圈出浮置中间导体，追踪 \\(+Q\\) 与 \\(-Q\\) 的传递，得到 \\(Q_1=Q_2=\\cdots=Q\\)。 · Build the series charge-conservation picture: circle the floating intermediate conductor, track the transfer of \\(+Q\\) and \\(-Q\\), and obtain \\(Q_1=Q_2=\\cdots=Q\\).",
      "推导串联等效电容：由 \\(V=\\sum_i V_i\\) 与 \\(V_i=\\dfrac{Q}{C_i}\\) 得倒数和公式，并检查 \\(C_{\\mathrm{eq}}<C_{\\min}\\)。 · Derive the series equivalent: from \\(V=\\sum_i V_i\\) and \\(V_i=\\dfrac{Q}{C_i}\\), obtain the reciprocal-sum formula and check \\(C_{\\mathrm{eq}}<C_{\\min}\\).",
      "推导并联等效电容：由共同电压与 \\(Q_{\\mathrm{total}}=\\sum_i Q_i\\) 得直接相加公式，并检查 \\(C_{\\mathrm{eq}}>C_{\\max}\\)。 · Derive the parallel equivalent: from the common voltage and \\(Q_{\\mathrm{total}}=\\sum_i Q_i\\), obtain the direct-sum formula and check \\(C_{\\mathrm{eq}}>C_{\\max}\\).",
      "处理混合网络：先化简明显的串联或并联块，再计算总电荷、分压与各电容电荷；用 \\(Q=CV\\) 和电荷守恒交叉检查。 · Handle mixed networks: reduce obvious series or parallel blocks, then compute total charge, voltage division, and individual charges; cross-check with \\(Q=CV\\) and charge conservation.",
      "迁移到初始带电与能量：对孤立节点写总电荷守恒，求连接后的共同状态，并比较初末能量以识别耗散。 · Transfer to initially charged systems and energy: write total-charge conservation on the isolated node, find the common final state, and compare initial and final energies to identify dissipation."
    ],
    "checks": [
      "为什么串联电容的电荷量大小相同？请用浮置中间导体的电荷守恒解释，而不是只背公式。 · Why do series capacitors have the same charge magnitude? Explain with charge conservation on the floating intermediate conductor, not just the formula.",
      "浮置中间导体的净电荷为零，为什么它的两个极板还能分别带 \\(+Q\\) 与 \\(-Q\\)？ · Why can a floating intermediate conductor with zero net charge still have \\(+Q\\) on one plate and \\(-Q\\) on the other?",
      "串联等效电容为什么小于最小电容？用 \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\) 说明。 · Why is a series equivalent capacitance smaller than the smallest capacitor? Explain with \\(\\dfrac{1}{C_{\\mathrm{eq}}}=\\sum_i\\dfrac{1}{C_i}\\).",
      "并联等效电容为什么大于最大电容？用 \\(C_{\\mathrm{eq}}=\\sum_i C_i\\) 说明。 · Why is a parallel equivalent capacitance larger than the largest capacitor? Explain with \\(C_{\\mathrm{eq}}=\\sum_i C_i\\).",
      "\\(C_1=2.0\\,\\mu\\mathrm{F}\\) 与 \\(C_2=8.0\\,\\mu\\mathrm{F}\\) 串联接在 \\(10\\,\\mathrm{V}\\) 电源上，各电容的电荷与电压是多少？ · \\(C_1=2.0\\,\\mu\\mathrm{F}\\) and \\(C_2=8.0\\,\\mu\\mathrm{F}\\) are in series across \\(10\\,\\mathrm{V}\\). What are the charges and voltages?",
      "两个初始带电的电容并联后，总电荷如何守恒？最终共同电压如何求？ · When two initially charged capacitors are connected in parallel, how is total charge conserved, and how do you find the final common voltage?",
      "电容串并联公式与电阻串并联公式有什么对偶关系？为什么不能直接套用电阻公式？ · What is the duality between capacitor and resistor series/parallel formulas, and why can you not simply reuse the resistor formulas?"
    ],
    "vocabulary": [
      {
        "termZh": "串联",
        "termEn": "series connection",
        "defZh": "电容依次相连、中间无分支的连接方式；各电容电荷量大小相同，电压相加。",
        "defEn": "A connection in which capacitors are joined one after another with no branch between them; the charge magnitude is common and the voltages add."
      },
      {
        "termZh": "并联",
        "termEn": "parallel connection",
        "defZh": "各电容两端接在同一对节点上的连接方式；各电容电压相同，电荷相加。",
        "defEn": "A connection in which both ends of every capacitor attach to the same pair of nodes; the voltage is common and the charges add."
      },
      {
        "termZh": "等效电容",
        "termEn": "equivalent capacitance",
        "defZh": "把整个电容网络化为一个电容后的电容值；串联取倒数和，并联直接相加。",
        "defEn": "The single capacitance that replaces a whole capacitor network; reciprocal sum for series and direct sum for parallel."
      },
      {
        "termZh": "电荷守恒",
        "termEn": "conservation of charge",
        "defZh": "孤立导体系统的总电荷保持不变；串联等量电荷和初始带电电容的再分配都由它决定。",
        "defEn": "The total charge of an isolated conductor system stays constant; it governs equal series charge and the redistribution of initially charged capacitors."
      },
      {
        "termZh": "浮置导体",
        "termEn": "floating conductor",
        "defZh": "与外界没有导电路径、净电荷保持不变的中间导体；串联电容之间常见的孤立岛。",
        "defEn": "An intermediate conductor with no conducting path to the outside, so its net charge stays constant; the isolated island commonly found between series capacitors."
      },
      {
        "termZh": "分压",
        "termEn": "voltage division",
        "defZh": "串联网络中总电压按各元件分配；电容串联时 \\(V_i=\\dfrac{Q}{C_i}\\)，电容越小分压越大。",
        "defEn": "The division of a total voltage among series elements; for series capacitors \\(V_i=\\dfrac{Q}{C_i}\\), so a smaller capacitance takes a larger voltage."
      },
      {
        "termZh": "节点",
        "termEn": "node",
        "defZh": "由理想导线相连、电势相同的区域；并联电容的两端分别接在同一对节点上。",
        "defEn": "A region joined by ideal wires and therefore at one potential; parallel capacitors connect both ends to the same pair of nodes."
      },
      {
        "termZh": "电荷再分配",
        "termEn": "charge redistribution",
        "defZh": "带电电容连接后，电荷在相连极板之间重新分配，但孤立节点的总电荷守恒。",
        "defEn": "After charged capacitors are connected, charge redistributes among connected plates while the total charge on an isolated node is conserved."
      }
    ]
  }
};
