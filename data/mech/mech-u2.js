export const UNIT = {
  "id": "mech-u2",
  "code": "2",
  "titleZh": "力与平动动力学",
  "titleEn": "Force and Translational Dynamics",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "2.1": {
    "id": "mech/mech-u2/2.1",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.1",
    "titleZh": "质心",
    "titleEn": "Center of Mass",
    "layer": "ap",
    "summary": "质心 · Center of Mass",
    "learningObjectives": [
      "能陈述「质心」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Center of Mass：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "质心（Center of Mass）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「质心」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\vec r_i}{\\sum m_i}",
        "note": "离散质点系的质心。"
      },
      {
        "latex": "\\vec v_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\vec v_i}{M}",
        "note": "质心速度。"
      },
      {
        "latex": "\\sum\\vec F_{\\mathrm{ext}}=M\\vec a_{\\mathrm{cm}}",
        "note": "质心运动定理。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「质心」的工作方程或机制链。"
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
      "离散质点系求和；连续体改为积分",
      "外力指系统外物体对系统的力；内力不影响质心运动",
      "质心位置与坐标系选择有关，但相对位置无关"
    ],
    "keyPoints": [
      "掌握 2.1「质心」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「质心」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「质心」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\vec r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\vec r_i}{\\sum m_i}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「质心」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「质心」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「质心」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u2",
        "code": "2.2",
        "title": "系统",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「质心」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「质心」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「质心」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "2.2": {
    "id": "mech/mech-u2/2.2",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.2",
    "titleZh": "系统",
    "titleEn": "Systems",
    "layer": "ap",
    "summary": "系统 · Systems",
    "learningObjectives": [
      "能陈述「系统」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Systems：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "系统（Systems）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「系统」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum\\vec F_{\\mathrm{ext}}=M\\vec a_{\\mathrm{cm}}",
        "note": "系统质心运动定理。"
      },
      {
        "latex": "\\Delta\\vec p_{\\mathrm{sys}}=\\vec J_{\\mathrm{ext}}",
        "note": "系统动量变化等于外力冲量。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「系统」的工作方程或机制链。"
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
      "先明确系统边界；只计跨边界的力",
      "内力成对抵消，不改变系统总动量",
      "质心运动与系统内部相对运动无关"
    ],
    "keyPoints": [
      "掌握 2.2「系统」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「系统」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「系统」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\sum\\vec F_{\\mathrm{ext}}=M\\vec a_{\\mathrm{cm}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「系统」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「系统」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「系统」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u2",
        "code": "2.1",
        "title": "质心",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「系统」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「系统」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「系统」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "2.3": {
    "id": "mech/mech-u2/2.3",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.3",
    "titleZh": "牛顿第一与第二定律",
    "titleEn": "Newton's Laws of Motion: First and Second Law",
    "layer": "ap",
    "summary": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
    "learningObjectives": [
      "能陈述「牛顿第一与第二定律」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Newton's Laws of Motion: First and Second Law：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "牛顿第一与第二定律（Newton's Laws of Motion: First and Second Law）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「牛顿第一与第二定律」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\sum\\vec F=m\\vec a",
        "note": "牛顿第二定律。"
      },
      {
        "latex": "\\sum\\vec F=0\\iff\\vec v=\\text{const}",
        "note": "牛顿第一定律的平衡表述。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「牛顿第一与第二定律」的工作方程或机制链。"
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
      "惯性参考系；m 恒定",
      "F 为合外力；加速度与合外力同向",
      "第一定律描述惯性，第二定律给出瞬时关系"
    ],
    "keyPoints": [
      "掌握 2.3「牛顿第一与第二定律」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「牛顿第一与第二定律」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「牛顿第一与第二定律」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\sum\\vec F=m\\vec a"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「牛顿第一与第二定律」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「牛顿第一与第二定律」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「牛顿第一与第二定律」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u2",
        "code": "2.2",
        "title": "系统",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「牛顿第一与第二定律」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「牛顿第一与第二定律」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「牛顿第一与第二定律」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "2.4": {
    "id": "mech/mech-u2/2.4",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.4",
    "titleZh": "圆周运动",
    "titleEn": "Circular Motion",
    "layer": "ap",
    "summary": "圆周运动 · Circular Motion",
    "learningObjectives": [
      "能陈述「圆周运动」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Circular Motion：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "圆周运动（Circular Motion）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「圆周运动」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r",
        "note": "向心加速度。"
      },
      {
        "latex": "\\sum F_r=ma_c",
        "note": "径向合力提供向心力。"
      },
      {
        "latex": "v=\\dfrac{2\\pi r}{T}",
        "note": "匀速圆周运动的速率与周期。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「圆周运动」的工作方程或机制链。"
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
      "r 为曲率半径；向心方向为正",
      "合外力径向分量提供向心力",
      "非匀速圆周运动还有切向加速度（速率的变化率）"
    ],
    "keyPoints": [
      "掌握 2.4「圆周运动」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「圆周运动」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「圆周运动」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "a_c=\\dfrac{v^{2}}{r}=\\omega^{2}r"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「圆周运动」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「圆周运动」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「圆周运动」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.5",
        "title": "牛顿第三定律",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面"
      },
      {
        "id": "gravity-orbit",
        "title": "万有引力轨道"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「圆周运动」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「圆周运动」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「圆周运动」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "2.5": {
    "id": "mech/mech-u2/2.5",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.5",
    "titleZh": "牛顿第三定律",
    "titleEn": "Newton's Laws of Motion: Third Law",
    "layer": "ap",
    "summary": "接触力是物体相互接触时产生的宏观力，其微观根源是原子间的电磁作用；自由体图只画作用在一个物体上的外力，第三定律力对分别作用在不同物体上。 · Contact forces arise when objects touch and are macroscopic effects of interatomic electric forces; a free-body diagram shows only the external forces on one object, and third-law pairs act on different objects.",
    "learningObjectives": [
      "能把接触力解释为原子间电磁作用的宏观表现，并列举法向力、摩擦力、张力等例子。 · Explain contact forces as macroscopic effects of interatomic electric forces and give examples such as normal force, friction, and tension.",
      "能为单个物体或多物体系统画出正确的自由体图，只画环境作用在该物体上的力，并从质心位置画矢量。 · Draw correct free-body diagrams for a single object or a multi-body system, showing only forces exerted on that object by the environment and drawing vectors from the center of mass.",
      "能区分作用力—反作用力对与同一物体上的平衡力，并说明第三定律力对为什么不能相互抵消。 · Distinguish action–reaction pairs from balanced forces on the same object and explain why third-law pairs cannot cancel.",
      "能选择沿加速度方向的坐标轴，分解力并写出牛顿第二定律的分量方程。 · Choose coordinate axes with one axis along the acceleration, resolve forces, and write the component equations of Newton's second law.",
      "能用自由体图与第三定律分析两物体接触处的力，例如推两个相互接触的物块或阿特伍德机。 · Use free-body diagrams and the third law to analyze contact forces between two bodies, such as two pushed blocks or an Atwood machine."
    ],
    "essentialKnowledge": [
      "力是物体或系统之间的相互作用，是矢量；接触力只在物体或系统相互接触时出现。 · A force is an interaction between objects or systems and is a vector; a contact force appears only when the objects or systems touch.",
      "接触力是原子间电磁作用的宏观表现，不是一种新的基本力。宏观上“接触”时，表面原子靠得很近，电子云相互排斥，原子间还可能有吸引与成键作用；这些微观电磁作用的合力表现为法向力、摩擦力、张力等。 · Contact forces are macroscopic effects of interatomic electric forces, not a new fundamental force. When surfaces “touch” macroscopically, their atoms are very close, electron clouds repel, and atoms may also attract or bond; the net effect of these microscopic electromagnetic interactions appears as normal force, friction, tension, and similar forces.",
      "法向力垂直于接触面，摩擦力平行于接触面，张力沿绳或杆的方向；它们都是接触力，只是方向与微观机制的不同表现。 · The normal force is perpendicular to the contact surface, friction is parallel to it, and tension is along a string or rod; all are contact forces, differing in direction and microscopic mechanism.",
      "牛顿第三定律：两物体相互作用时，作用力与反作用力大小相等、方向相反、沿同一直线，分别作用在两个不同物体上，同时产生、同时消失。 · Newton's third law: when two objects interact, the action and reaction forces are equal in magnitude, opposite in direction, collinear, act on two different objects, and arise and vanish together.",
      "自由体图把一个物体或系统从环境中“隔离”出来：用点表示物体或质心，只画环境作用在该物体上的力，不画该物体对环境的力，不画内力，也不把 \\(m\\vec a\\) 当成一个力。 · A free-body diagram isolates an object or system from its environment: represent the object or its center of mass by a dot, draw only the forces exerted on it by the environment, and do not draw forces it exerts on the environment, internal forces, or \\(m\\vec a\\) as if it were a force.",
      "多物体问题要为每个物体分别画自由体图；一对第三定律力分别出现在两张图上，不能画在同一张图上相互抵消；若把几个物体选为一个系统，则只画系统外的力。 · For multi-body problems, draw a separate free-body diagram for each object; a third-law pair appears once on each diagram and cannot be drawn on the same diagram to cancel; if several objects are chosen as one system, draw only external forces on the system.",
      "坐标轴的选择应使方程最简单：通常取一个轴沿加速度方向，另一个轴垂直于它；沿斜面运动时取沿斜面和垂直斜面两个轴，沿绳运动时取沿绳方向。 · Choose axes that make the equations simplest: usually one axis along the acceleration and the other perpendicular to it; for motion on an incline use axes along and perpendicular to the incline, and for motion along a string use the direction of the string.",
      "在惯性系中，合外力决定加速度；支持力、张力或秤的读数不一定等于重力，它们由运动状态和其他力共同决定，这为 2.6 的视重与等效原理埋下伏笔。 · In an inertial frame the net force determines the acceleration; a normal force, tension, or scale reading is not necessarily equal to weight, because it also depends on the motion and other forces, which prepares the way for apparent weight and the equivalence principle in 2.6."
    ],
    "definition": "接触力（contact force）是物体或系统相互接触时产生的力，是原子间电磁作用的宏观表现；法向力、摩擦力、张力和弹簧力都属于接触力。自由体图（free-body diagram, FBD）把一个物体或系统从环境中隔离出来，用点表示物体或质心，只画环境作用在该物体上的力。牛顿第三定律指出，两物体相互作用时 \\(\\vec F_{AB}=-\\vec F_{BA}\\)：作用力与反作用力等大、反向、共线、异体、同时存在。 · A contact force is a force that arises when objects or systems touch and is a macroscopic effect of interatomic electric forces; normal force, friction, tension, and spring force are all contact forces. A free-body diagram (FBD) isolates an object or system from its environment, represents it or its center of mass by a dot, and shows only the forces exerted on it by the environment. Newton's third law states that for two interacting objects, \\(\\vec F_{AB}=-\\vec F_{BA}\\): the action and reaction forces are equal in magnitude, opposite in direction, collinear, act on different objects, and exist simultaneously.",
    "intuition": "你推墙时，手与墙的原子靠得极近，电子云相互排斥，墙对手的力就是这种微观电磁作用的宏观合力；你并没有“创造”一种新的推力。画自由体图时，把自己想象成那个物体：只感受别人对你的力，不感受你对别人的力。 · When you push a wall, the atoms of your hand and the wall come very close and their electron clouds repel; the force of the wall on your hand is the macroscopic net of those microscopic electromagnetic interactions, not a new kind of push. When drawing a free-body diagram, imagine being the object: you feel only the forces others exert on you, not the forces you exert on them.",
    "formulas": [
      {
        "latex": "\\vec F_{AB}=-\\vec F_{BA}",
        "note": "牛顿第三定律：作用力与反作用力等大、反向、共线、作用在不同物体上。 · Newton's third law: action and reaction are equal in magnitude, opposite in direction, collinear, and act on different objects."
      },
      {
        "latex": "\\sum\\vec F=m\\vec a",
        "note": "牛顿第二定律；\\(\\sum\\vec F\\) 是作用在该物体上的合外力。 · Newton's second law; \\(\\sum\\vec F\\) is the net external force on that object."
      },
      {
        "latex": "\\sum F_x=ma_x,\\qquad \\sum F_y=ma_y",
        "note": "自由体图沿坐标轴分解后的分量方程。 · Component equations obtained by resolving the free-body diagram along the chosen axes."
      },
      {
        "latex": "\\vec F_{\\mathrm{net}}=\\sum_i\\vec F_i",
        "note": "合外力是各外力的矢量和；内力在系统内部成对抵消。 · The net force is the vector sum of the external forces; internal forces cancel in pairs inside a system."
      }
    ],
    "derivationNotes": [
      {
        "from": "原子间电磁作用 · Interatomic electromagnetic interaction",
        "to": "宏观接触力 · Macroscopic contact force",
        "note": "两表面靠近时，原子间距减小，电子云重叠产生强烈排斥，同时可能有分子间吸引与化学键作用；大量原子作用的统计合力表现为法向力与摩擦力。 · As two surfaces approach, atomic separations decrease, electron clouds overlap and repel strongly, and intermolecular attraction or bonding may also act; the statistical net of many atomic interactions appears as normal force and friction."
      },
      {
        "from": "第三定律 · Third law",
        "to": "系统动量守恒 · Conservation of system momentum",
        "note": "系统内每对内力都等大反向，矢量和为零，因此内力不改变系统总动量；只有外力能改变系统动量。 · Every pair of internal forces is equal and opposite, so their vector sum is zero; internal forces do not change the system's total momentum, and only external forces can."
      },
      {
        "from": "自由体图 · Free-body diagram",
        "to": "分量方程 · Component equations",
        "note": "先选一个轴沿加速度，把每个力分解到坐标轴上，再分别写 \\(\\sum F_x=ma_x\\) 与 \\(\\sum F_y=ma_y\\)；垂直于加速度的方向常用于求支持力或张力。 · First choose one axis along the acceleration, resolve every force onto the axes, and then write \\(\\sum F_x=ma_x\\) and \\(\\sum F_y=ma_y\\); the direction perpendicular to the acceleration often determines the normal force or tension."
      },
      {
        "from": "多物体隔离 · Isolating multiple bodies",
        "to": "接触处的力 · Contact force at an interface",
        "note": "先把它当作一个系统求共同加速度，再隔离其中一个物体，用它的自由体图求接触力；两物体之间的接触力是一对第三定律力，大小相等、方向相反。 · First treat the bodies as one system to find the common acceleration, then isolate one body and use its free-body diagram to find the contact force; the contact forces between the two bodies are a third-law pair, equal in magnitude and opposite in direction."
      }
    ],
    "conditions": [
      "接触力要求物体宏观接触，微观上表面间距达到原子尺度；理想“刚体”和“无摩擦表面”都是模型，实际接触面会发生微小形变。 · A contact force requires macroscopic contact, with surface separations at the atomic scale; the ideal “rigid body” and “frictionless surface” are models, and real surfaces deform slightly.",
      "法向力垂直于接触面，摩擦力平行于接触面；绳的张力沿绳方向，理想绳质量可忽略且不可伸长。 · The normal force is perpendicular to the contact surface, friction is parallel to it, and tension is along the string; an ideal string has negligible mass and is inextensible.",
      "第三定律适用于两个物体之间的任何相互作用，包括接触力与场力；分析时要把每个力明确归到受力物体上。 · The third law applies to any interaction between two objects, including contact and field forces; in analysis, assign every force to the object that feels it.",
      "牛顿第一、第二定律在惯性参考系中成立；在非惯性系中分析时需引入惯性力，并把接触力与惯性力区分开。 · Newton's first and second laws hold in inertial reference frames; in a noninertial frame, introduce a fictitious force and distinguish it from contact forces.",
      "静摩擦力可以在零到最大值之间取值，方向由防止相对滑动的需要决定；不要默认摩擦力总与运动方向相反。 · Static friction can take any value from zero to its maximum, with the direction needed to prevent relative sliding; do not assume friction always opposes motion."
    ],
    "keyPoints": [
      "接触力是原子间电磁作用的宏观表现，不是新的基本力；法向力、摩擦力、张力都是接触力。 · Contact forces are macroscopic effects of interatomic electric forces, not a new fundamental force; normal force, friction, and tension are all contact forces.",
      "自由体图只画作用在被隔离物体上的外力，不画反作用力、内力或 \\(m\\vec a\\)。 · A free-body diagram shows only external forces on the isolated object, not reaction forces, internal forces, or \\(m\\vec a\\).",
      "第三定律力对等大、反向、共线、异体、同时，永远不能在同一物体的受力分析中抵消。 · Third-law pairs are equal in magnitude, opposite in direction, collinear, on different bodies, and simultaneous; they never cancel in the force analysis of one object.",
      "平衡力作用在同一物体上，可以抵消；作用力—反作用力作用在不同物体上，不能抵消。 · Balanced forces act on the same object and can cancel; action–reaction forces act on different objects and cannot.",
      "多物体问题先整体求加速度，再隔离求接触力；每个物体都有自己的自由体图。 · For multi-body problems, first find the acceleration of the whole system, then isolate a body to find the contact force; each body has its own free-body diagram.",
      "坐标轴通常取一个沿加速度、一个垂直于加速度，这样可以把矢量方程变成两个标量方程。 · Choose one axis along the acceleration and one perpendicular to it, turning the vector equation into two scalar equations.",
      "支持力、张力或秤的读数由运动状态决定，不一定等于重力。 · A normal force, tension, or scale reading depends on the motion and is not necessarily equal to weight."
    ],
    "misconceptions": [
      "认为接触力是一种独立的基本力；实际上它是原子间电磁作用的宏观表现，法向力、摩擦力、张力都源于电磁作用。 · Thinking a contact force is an independent fundamental force; it is a macroscopic effect of interatomic electric forces, and normal force, friction, and tension all have electromagnetic origins.",
      "把物体对环境的力画进该物体的自由体图，或把一对作用力—反作用力画在同一张图上试图抵消。 · Drawing the force the object exerts on the environment in that object's free-body diagram, or putting an action–reaction pair on the same diagram and trying to cancel them.",
      "认为“物体静止就没有力”或“支持力总等于重力”；静止只说明合力为零，支持力还取决于加速度、斜面和其它外力。 · Thinking “no motion means no force” or “the normal force always equals weight”; rest only means zero net force, and the normal force also depends on acceleration, inclines, and other forces.",
      "把 \\(m\\vec a\\) 当成一个力画进自由体图；\\(m\\vec a\\) 是合力产生的效果，不是环境施加的力。 · Treating \\(m\\vec a\\) as a force in the free-body diagram; \\(m\\vec a\\) is the effect of the net force, not a force exerted by the environment.",
      "认为摩擦力总与运动方向相反；静摩擦力的方向由防止相对滑动的需要决定，可以与运动方向相同。 · Thinking friction always opposes motion; the direction of static friction is set by the need to prevent relative sliding and may be the same as the motion.",
      "认为两物体接触就一定有摩擦力；没有相对滑动趋势或相对运动时，静摩擦力可以为零。 · Thinking contact always produces friction; static friction can be zero when there is no tendency for relative sliding or relative motion.",
      "把第三定律与平衡混淆：等大反向不一定是一对作用力—反作用力，还要看是否作用在不同物体上、是否同时产生。 · Confusing the third law with equilibrium: equal and opposite forces are not necessarily an action–reaction pair; check whether they act on different objects and arise together.",
      "在非惯性系中漏掉惯性力，或把惯性力误认为真实的接触力。 · Omitting the fictitious force in a noninertial frame, or mistaking it for a real contact force."
    ],
    "examples": [
      {
        "title": "例 1 · 桌面支持力的微观来源 · Example 1: Microscopic origin of the normal force",
        "prompt": "书静止在桌面上。用原子间电磁作用解释桌面对书的支持力，并说明为什么不能说“支持力就是书的重力”。 · A book rests on a table. Explain the normal force of the table on the book in terms of interatomic electric forces, and explain why the normal force is not simply “the weight of the book.”",
        "steps": [
          "书与桌面的原子靠得很近，电子云重叠并相互排斥；桌面发生微小形变，大量原子间的电磁作用形成一个向上的宏观合力，这就是支持力。 · The atoms of the book and table are very close, their electron clouds overlap and repel; the table deforms slightly, and the electromagnetic interactions of many atoms produce an upward macroscopic net force, the normal force.",
          "支持力作用在书上，重力也作用在书上；二者大小相等、方向相反，是同一物体上的平衡力。 · The normal force acts on the book, and so does gravity; they are equal and opposite balanced forces on the same object.",
          "重力的反作用力是书对地球的引力，支持力的反作用力是书对桌面的压力；它们分别作用在地球和桌面上，不是支持力本身。 · The reaction to gravity is the book's gravitational pull on Earth, and the reaction to the normal force is the book's push on the table; they act on Earth and the table, respectively, not on the book.",
          "若电梯竖直加速或桌面倾斜，支持力不再等于重力，但“原子间电磁作用”这一微观来源不变。 · If the elevator accelerates vertically or the table is tilted, the normal force is no longer equal to weight, but its microscopic origin in interatomic electromagnetic interactions is unchanged."
        ],
        "solution": "支持力是桌面原子与书原子间电磁排斥的宏观合力；它和重力只是恰好平衡，并不是重力的反作用力。 · The normal force is the macroscopic net of electromagnetic repulsion between table and book atoms; it merely balances gravity in this case and is not gravity's reaction force.",
        "solutionLatex": "N=-F_{\\text{book on table}},\\qquad W=-F_{\\text{book on Earth}}"
      },
      {
        "title": "例 2 · 斜面上物块受力图 · Example 2: Free-body diagram on an incline",
        "prompt": "质量 \\(m=5.0\\,\\mathrm{kg}\\) 的物块在倾角 \\(30^\\circ\\) 的光滑斜面上，受沿斜面向上的绳子拉力 \\(T=30\\,\\mathrm{N}\\)。画出物块受力图，取沿斜面向上的轴为 \\(x\\) 轴，求支持力与加速度。取 \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)。 · A block of mass \\(m=5.0\\,\\mathrm{kg}\\) is on a frictionless \\(30^\\circ\\) incline and is pulled by a rope with tension \\(T=30\\,\\mathrm{N}\\) up the incline. Draw the free-body diagram, take the up-incline direction as the \\(x\\) axis, and find the normal force and acceleration. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
        "steps": [
          "受力图：重力 \\(mg\\) 竖直向下，支持力 \\(N\\) 垂直斜面向上，张力 \\(T\\) 沿斜面向上；不要画物块对斜面或对绳的力。 · Free-body diagram: weight \\(mg\\) downward, normal force \\(N\\) perpendicular to the incline, and tension \\(T\\) up the incline; do not draw the forces the block exerts on the incline or rope.",
          "取 \\(x\\) 轴沿斜面向上、\\(y\\) 轴垂直斜面向上。重力分解为沿斜面向下的 \\(mg\\sin30^\\circ\\) 和垂直斜面向里的 \\(mg\\cos30^\\circ\\)。 · Take \\(x\\) up the incline and \\(y\\) perpendicular to the incline. Resolve gravity into \\(mg\\sin30^\\circ\\) down the incline and \\(mg\\cos30^\\circ\\) into the incline.",
          "\\(y\\) 方向无加速度：\\(N-mg\\cos30^\\circ=0\\)，所以 \\(N=mg\\cos30^\\circ=(5.0)(9.8)(0.866)=42\\,\\mathrm{N}\\)。 · No acceleration in \\(y\\): \\(N-mg\\cos30^\\circ=0\\), so \\(N=mg\\cos30^\\circ=(5.0)(9.8)(0.866)=42\\,\\mathrm{N}\\).",
          "\\(x\\) 方向：\\(T-mg\\sin30^\\circ=ma\\)，所以 \\(a=\\dfrac{30-24.5}{5.0}=1.1\\,\\mathrm{m\\,s^{-2}}\\)，沿斜面向上。 · In \\(x\\): \\(T-mg\\sin30^\\circ=ma\\), so \\(a=\\dfrac{30-24.5}{5.0}=1.1\\,\\mathrm{m\\,s^{-2}}\\) up the incline."
        ],
        "solution": "\\(N\\approx42\\,\\mathrm{N}\\)，\\(a\\approx1.1\\,\\mathrm{m\\,s^{-2}}\\) 沿斜面向上。 · \\(N\\approx42\\,\\mathrm{N}\\) and \\(a\\approx1.1\\,\\mathrm{m\\,s^{-2}}\\) up the incline.",
        "solutionLatex": "N=mg\\cos30^\\circ=42\\,\\mathrm{N},\\qquad a=\\dfrac{T-mg\\sin30^\\circ}{m}=\\dfrac{30-24.5}{5.0}=1.1\\,\\mathrm{m\\,s^{-2}}"
      },
      {
        "title": "例 3 · 两个相互接触的物块 · Example 3: Two blocks in contact",
        "prompt": "光滑水平面上有两个相互接触的物块，\\(m_1=2.0\\,\\mathrm{kg}\\)、\\(m_2=3.0\\,\\mathrm{kg}\\)。水平力 \\(F=10\\,\\mathrm{N}\\) 推 \\(m_1\\)，方向指向 \\(m_2\\)。求系统的加速度以及两物块之间的接触力。 · Two blocks in contact rest on a frictionless horizontal surface, with \\(m_1=2.0\\,\\mathrm{kg}\\) and \\(m_2=3.0\\,\\mathrm{kg}\\). A horizontal force \\(F=10\\,\\mathrm{N}\\) pushes \\(m_1\\) toward \\(m_2\\). Find the acceleration and the contact force between the blocks.",
        "steps": [
          "先把两物块看成一个系统：水平方向只有外力 \\(F\\)，所以 \\(a=\\dfrac{F}{m_1+m_2}=\\dfrac{10}{5.0}=2.0\\,\\mathrm{m\\,s^{-2}}\\)。 · First treat the two blocks as one system: the only horizontal external force is \\(F\\), so \\(a=\\dfrac{F}{m_1+m_2}=\\dfrac{10}{5.0}=2.0\\,\\mathrm{m\\,s^{-2}}\\).",
          "隔离 \\(m_2\\)：水平方向只受 \\(m_1\\) 对它的接触力 \\(F_{12}\\)，所以 \\(F_{12}=m_2a=(3.0)(2.0)=6.0\\,\\mathrm{N}\\)，方向向右。 · Isolate \\(m_2\\): the only horizontal force is the contact force \\(F_{12}\\) from \\(m_1\\), so \\(F_{12}=m_2a=(3.0)(2.0)=6.0\\,\\mathrm{N}\\) to the right.",
          "隔离 \\(m_1\\)：水平方向受 \\(F=10\\,\\mathrm{N}\\) 向右和 \\(m_2\\) 对它的接触力 \\(F_{21}\\) 向左；\\(10-6.0=(2.0)(2.0)=4.0\\,\\mathrm{N}\\)，符合。 · Isolate \\(m_1\\): it feels \\(F=10\\,\\mathrm{N}\\) to the right and the contact force \\(F_{21}\\) from \\(m_2\\) to the left; \\(10-6.0=(2.0)(2.0)=4.0\\,\\mathrm{N}\\), which checks.",
          "两接触力是一对第三定律力：\\(F_{12}\\) 与 \\(F_{21}\\) 等大反向，分别作用在 \\(m_2\\) 与 \\(m_1\\) 上，不能在同一张受力图上抵消。 · The two contact forces are a third-law pair: \\(F_{12}\\) and \\(F_{21}\\) are equal and opposite, act on \\(m_2\\) and \\(m_1\\), respectively, and cannot cancel on the same free-body diagram."
        ],
        "solution": "\\(a=2.0\\,\\mathrm{m\\,s^{-2}}\\)，接触力大小为 \\(6.0\\,\\mathrm{N}\\)。 · \\(a=2.0\\,\\mathrm{m\\,s^{-2}}\\), and the contact force has magnitude \\(6.0\\,\\mathrm{N}\\).",
        "solutionLatex": "a=\\dfrac{F}{m_1+m_2}=2.0\\,\\mathrm{m\\,s^{-2}},\\qquad F_{12}=m_2a=6.0\\,\\mathrm{N}"
      },
      {
        "title": "例 4 · 桌面—滑轮连接体 · Example 4: Table–pulley system",
        "prompt": "质量 \\(m_1=4.0\\,\\mathrm{kg}\\) 的物块在光滑水平桌面上，通过轻绳绕过理想滑轮与悬挂的 \\(m_2=2.0\\,\\mathrm{kg}\\) 物块相连。求加速度与绳中张力。取 \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)。 · A block of mass \\(m_1=4.0\\,\\mathrm{kg}\\) on a frictionless table is connected by a light string over an ideal pulley to a hanging block of mass \\(m_2=2.0\\,\\mathrm{kg}\\). Find the acceleration and the tension. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
        "steps": [
          "分别画两张受力图：桌面物块受重力、支持力、绳的拉力 \\(T\\)；悬挂物块受重力 \\(m_2g\\) 与绳的拉力 \\(T\\)。理想绳与理想滑轮使两端张力大小相同。 · Draw two free-body diagrams: the table block feels weight, normal force, and tension \\(T\\); the hanging block feels weight \\(m_2g\\) and tension \\(T\\). An ideal string and pulley make the tension magnitude the same at both ends.",
          "取桌面物块运动方向为正：\\(T=m_1a\\)。悬挂物块向下运动：\\(m_2g-T=m_2a\\)。 · Take the table block's direction of motion as positive: \\(T=m_1a\\). The hanging block moves downward: \\(m_2g-T=m_2a\\).",
          "两式相加消去 \\(T\\)：\\(m_2g=(m_1+m_2)a\\)，所以 \\(a=\\dfrac{(2.0)(9.8)}{4.0+2.0}=3.3\\,\\mathrm{m\\,s^{-2}}\\)。 · Add the equations to eliminate \\(T\\): \\(m_2g=(m_1+m_2)a\\), so \\(a=\\dfrac{(2.0)(9.8)}{4.0+2.0}=3.3\\,\\mathrm{m\\,s^{-2}}\\).",
          "代回 \\(T=m_1a=(4.0)(3.3)=13\\,\\mathrm{N}\\)。绳对两物块的拉力大小相同，但不要把它们误称为一对第三定律力：绳对物块的力的反作用力是物块对绳的力。 · Substitute back: \\(T=m_1a=(4.0)(3.3)=13\\,\\mathrm{N}\\). The tension forces on the two blocks have the same magnitude, but they are not a third-law pair: the reaction to the rope's force on a block is the block's force on the rope."
        ],
        "solution": "\\(a\\approx3.3\\,\\mathrm{m\\,s^{-2}}\\)，\\(T\\approx13\\,\\mathrm{N}\\)。 · \\(a\\approx3.3\\,\\mathrm{m\\,s^{-2}}\\) and \\(T\\approx13\\,\\mathrm{N}\\).",
        "solutionLatex": "a=\\dfrac{m_2g}{m_1+m_2}=3.3\\,\\mathrm{m\\,s^{-2}},\\qquad T=m_1a=13\\,\\mathrm{N}"
      },
      {
        "title": "例 5 · 平衡力还是第三定律力对？ · Example 5: Balanced forces or a third-law pair?",
        "prompt": "书静止在桌面上。有人把“书受的重力”和“桌面对书的支持力”称为一对作用力—反作用力。这个说法对吗？请用第三定律和自由体图说明。 · A book rests on a table. Someone calls “gravity on the book” and “the normal force of the table on the book” an action–reaction pair. Is this correct? Explain using the third law and a free-body diagram.",
        "steps": [
          "重力（地球对书）的反作用力是书对地球的引力，作用在地球上；支持力（桌对书）的反作用力是书对桌面的压力，作用在桌面上。 · The reaction to gravity (Earth on book) is the book's gravitational pull on Earth, which acts on Earth; the reaction to the normal force (table on book) is the book's push on the table, which acts on the table.",
          "重力和支持力都作用在书上，大小相等、方向相反，所以它们是同一物体上的平衡力，不是第三定律力对。 · Gravity and the normal force both act on the book and are equal and opposite, so they are balanced forces on the same object, not a third-law pair.",
          "若把书隔离，自由体图上只画重力与支持力；书对地球、书对桌面的力不出现在这张图上。 · Isolating the book, the free-body diagram shows only gravity and the normal force; the forces of the book on Earth and on the table do not appear on this diagram.",
          "判断第三定律力对的关键：是否作用在两个不同物体上、是否同时产生、是否属于同一种相互作用。 · The key tests for a third-law pair: do the forces act on two different objects, arise simultaneously, and belong to the same interaction?"
        ],
        "solution": "说法错误。重力与支持力是书上的平衡力；它们的反作用力分别作用在地球和桌面上。 · The statement is wrong. Gravity and the normal force are balanced forces on the book; their reaction forces act on Earth and the table, respectively.",
        "solutionLatex": "W_{\\text{Earth on book}}=-W_{\\text{book on Earth}},\\qquad N_{\\text{table on book}}=-N_{\\text{book on table}}"
      }
    ],
    "examTips": [
      "先判断力属于哪个物体：自由体图只画“作用在该物体上的力”，反作用力和内力都不画。 · First decide which object feels each force: a free-body diagram shows only forces on that object, never reaction forces or internal forces.",
      "涉及接触力时，先找接触面：法向力垂直面，摩擦力沿面，张力沿绳；不要凭空多画一个“推力”。 · For contact forces, identify the contact surface first: normal force perpendicular to it, friction along it, tension along the string; do not invent an extra “push.”",
      "第三定律题要明确指出“哪两个物体相互作用”；等大反向但作用在同一物体上的力是平衡力，不是第三定律力对。 · On third-law questions, name the two interacting objects; equal and opposite forces on the same object are balanced forces, not a third-law pair.",
      "多物体问题先整体求加速度，再隔离求接触力；两张受力图上的第三定律力方向相反。 · For multi-body problems, find the acceleration of the whole system first, then isolate a body to find the contact force; the third-law forces point in opposite directions on the two diagrams.",
      "坐标轴取一个沿加速度、一个垂直于加速度；斜面问题取沿斜面和垂直斜面，避免把重力分解错。 · Choose one axis along the acceleration and one perpendicular to it; on inclines use axes along and perpendicular to the incline to avoid misresolving gravity.",
      "若题目问“支持力/秤的读数”，不要直接写 \\(mg\\)；先看加速度方向，再写牛顿第二定律。 · If a question asks for a normal force or scale reading, do not write \\(mg\\) automatically; determine the acceleration direction first, then write Newton's second law."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.2",
        "title": "系统 · Systems",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动 · Circular Motion",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.6",
        "title": "万有引力 · Gravitation",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.8",
        "title": "弹簧力与非理想弹簧 · Spring Forces and Nonideal Springs",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面 · Newton's second law and incline"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：2.2 的系统边界决定哪些力是内力、哪些是外力；2.3 的牛顿第二定律把自由体图上的合力与加速度联系起来。 · Upstream: the system boundary in 2.2 determines which forces are internal or external, and Newton's second law in 2.3 connects the net force on a free-body diagram to acceleration.",
      "数学：把力分解到坐标轴，得到两个标量方程；多物体问题得到联立方程，消元时注意第三定律力对的大小相等。 · Mathematics: resolve forces onto axes to obtain two scalar equations; multi-body problems give simultaneous equations, and third-law pairs have equal magnitudes when eliminating variables.",
      "下游：2.6 的视重与等效原理、2.7 的摩擦力与阻力、2.8 的弹簧力都要先画自由体图；接触力的微观解释也帮助理解法向力与摩擦力。 · Downstream: apparent weight and the equivalence principle in 2.6, friction and drag in 2.7, and spring forces in 2.8 all begin with a free-body diagram; the microscopic picture of contact forces also clarifies normal force and friction.",
      "跨学科：生物力学中的地面反作用力、工程中的接触应力与摩擦、材料科学中的原子间作用，都可以追溯到接触力的电磁本质。 · Cross-disciplinary: ground reaction forces in biomechanics, contact stress and friction in engineering, and interatomic interactions in materials science all trace back to the electromagnetic nature of contact forces."
    ],
    "intuitionDetailed": "接触力的关键是“宏观接触、微观电磁”。两个表面看起来光滑，微观上仍有大量凸起；真正接触的是少数原子，原子靠得太近时电子云强烈排斥，靠得稍远时又可能有分子间吸引。法向力就是这些排斥与吸引的合力在垂直表面方向的分量，摩擦力则是沿表面方向的分量。你推墙越用力，墙的原子被挤得越近，排斥越强，所以墙对你的力也越大；这不是“墙主动反抗”，而是电磁作用随距离变化的自然结果。 · The key to contact forces is “macroscopic contact, microscopic electromagnetism.” Surfaces that look smooth are rough at the atomic scale; only some atoms actually touch. When atoms are too close, their electron clouds repel strongly; at slightly larger separations they may attract. The normal force is the component of this net interaction perpendicular to the surface, and friction is the component along the surface. The harder you push a wall, the closer its atoms are pressed and the stronger the repulsion, so the wall pushes back harder; the wall is not “actively resisting,” it is simply responding through the distance dependence of electromagnetic interactions. 画自由体图时，先选定研究对象，再问“谁在接触它或隔空吸引它？”只把环境对它的力画成从质心出发的箭头；然后把每个力分解到沿加速度和垂直加速度的轴上。 · When drawing a free-body diagram, choose the object first, then ask “who touches it or pulls it from a distance?” Draw only the forces of the environment on it as arrows from the center of mass, then resolve each force onto axes along and perpendicular to the acceleration.",
    "development": [
      "明确研究对象与系统边界，列出环境对它的所有力。 · Identify the object and the system boundary, and list every force the environment exerts on it.",
      "区分接触力与场力，并指出接触力的微观电磁来源。 · Distinguish contact forces from field forces and identify the microscopic electromagnetic origin of contact forces.",
      "画自由体图：点表示质心，箭头表示力；不画反作用力、内力或 \\(m\\vec a\\)。 · Draw the free-body diagram: a dot for the center of mass and arrows for forces; do not draw reaction forces, internal forces, or \\(m\\vec a\\).",
      "选坐标轴，通常一个沿加速度、一个垂直于加速度；分解力并写分量方程。 · Choose axes, usually one along the acceleration and one perpendicular to it; resolve forces and write component equations.",
      "若有多个物体，先整体求加速度，再隔离求接触力，并用第三定律检查两图上的力对。 · For multiple bodies, find the acceleration of the whole system first, then isolate a body to find the contact force, and use the third law to check the pair on the two diagrams."
    ],
    "checks": [
      "为什么说接触力是原子间电磁作用的宏观表现？请以支持力和摩擦力各举一例。 · Why are contact forces macroscopic effects of interatomic electric forces? Give one example each for normal force and friction.",
      "自由体图上为什么不能画 \\(m\\vec a\\)？它和合力有什么区别？ · Why can't \\(m\\vec a\\) be drawn on a free-body diagram? How does it differ from the net force?",
      "书静止在桌面上，重力与支持力是第三定律力对吗？它们的反作用力分别作用在谁上？ · A book rests on a table. Are gravity and the normal force a third-law pair? On what objects do their reaction forces act?",
      "两个相互接触的物块被推动时，如何求它们之间的接触力？为什么要先整体后隔离？ · When two blocks in contact are pushed, how do you find the contact force? Why first treat them as a whole and then isolate one?",
      "斜面上的物块加速下滑时，支持力还等于 \\(mg\\cos\\theta\\) 吗？什么情况下不等于？ · For a block accelerating down an incline, is the normal force still equal to \\(mg\\cos\\theta\\)? When is it not?",
      "若电梯向上加速，秤的读数比体重大还是小？这个读数对应哪个力？ · If an elevator accelerates upward, is the scale reading larger or smaller than the person's weight? Which force does the reading represent?"
    ],
    "vocabulary": [
      {
        "termZh": "接触力",
        "termEn": "contact force",
        "defZh": "物体或系统相互接触时产生的力，是原子间电磁作用的宏观表现。",
        "defEn": "A force that arises when objects or systems touch; it is a macroscopic effect of interatomic electric forces."
      },
      {
        "termZh": "原子间电磁作用",
        "termEn": "interatomic electric interaction",
        "defZh": "原子或分子之间由于电荷分布产生的吸引或排斥，是接触力的微观根源。",
        "defEn": "Attraction or repulsion between atoms or molecules due to their charge distributions; the microscopic origin of contact forces."
      },
      {
        "termZh": "自由体图",
        "termEn": "free-body diagram",
        "defZh": "用点表示物体或质心、只画环境作用在该物体上的力的受力图。",
        "defEn": "A force diagram that represents an object or its center of mass by a dot and shows only the forces exerted on it by the environment."
      },
      {
        "termZh": "法向力",
        "termEn": "normal force",
        "defZh": "接触面垂直作用于物体的力，方向垂直于接触面。",
        "defEn": "The force exerted by a contact surface perpendicular to itself."
      },
      {
        "termZh": "张力",
        "termEn": "tension",
        "defZh": "绳、线或杆因被拉伸而对物体施加的沿绳方向的接触力。",
        "defEn": "The contact force along a string, cable, or rod due to its being stretched."
      },
      {
        "termZh": "作用力—反作用力对",
        "termEn": "action–reaction pair",
        "defZh": "两物体相互作用时产生的一对力，等大、反向、共线、作用在不同物体上、同时存在。",
        "defEn": "A pair of forces from an interaction between two objects: equal in magnitude, opposite in direction, collinear, acting on different objects, and simultaneous."
      },
      {
        "termZh": "内力",
        "termEn": "internal force",
        "defZh": "系统内部物体之间的力；在系统内部成对抵消，不改变系统总动量。",
        "defEn": "A force between objects inside a system; internal forces cancel in pairs and do not change the system's total momentum."
      },
      {
        "termZh": "平衡力",
        "termEn": "balanced forces",
        "defZh": "作用在同一物体上、矢量和为零的一组力，可以使物体保持静止或匀速运动。",
        "defEn": "A set of forces on the same object whose vector sum is zero, allowing the object to remain at rest or move at constant velocity."
      }
    ]
  },
  "2.6": {
    "id": "mech/mech-u2/2.6",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.6",
    "titleZh": "万有引力",
    "titleEn": "Gravitation",
    "layer": "ap",
    "summary": "牛顿万有引力给出质点与球对称质量间的平方反比力；在加速参考系中视重可与引力局部不可区分（等效原理）；惯性质量与引力质量实验上相等；均匀实心球内部引力与到球心的距离成正比。 · Newton's law of universal gravitation gives an inverse-square force between point masses and spherically symmetric bodies; in a noninertial frame apparent weight can be locally indistinguishable from gravitational force (the equivalence principle); inertial and gravitational mass are experimentally equal; inside a uniform solid sphere the gravitational force is proportional to the distance from the center.",
    "learningObjectives": [
      "能应用万有引力定律与引力场强度，计算 \\(g\\)、重量、引力势能与逃逸速度。 · Apply Newton's law of universal gravitation and gravitational field strength to calculate \\(g\\), weight, gravitational potential energy, and escape speed.",
      "能区分重量、视重与秤的读数，分析电梯加速、自由落体等情形，并陈述等效原理。 · Distinguish weight, apparent weight, and scale readings; analyze accelerating elevators and free fall; and state the equivalence principle.",
      "能区分惯性质量与引力质量，说明两者在实验上等效，并解释为什么所有物体在真空中下落一样快。 · Distinguish inertial mass from gravitational mass, state their experimental equivalence, and explain why all objects fall at the same rate in vacuum.",
      "能应用球壳定理：球外等效为质点、球壳内部净引力为零、均匀实心球内部 \\(F\\propto r\\)，并推导 \\(M(r)\\propto r^{3}\\)。 · Apply the shell theorem: outside a sphere it acts like a point mass, inside a shell the net force is zero, and inside a uniform solid sphere \\(F\\propto r\\); derive \\(M(r)\\propto r^{3}\\).",
      "能读懂 \\(F\\)–\\(r\\) 与 \\(g\\)–\\(r\\) 图像，说明球内线性、球外平方反比、表面处连续，并用它分析穿过地球的隧道运动。 · Interpret \\(F\\)–\\(r\\) and \\(g\\)–\\(r\\) graphs, explaining the linear interior, inverse-square exterior, continuity at the surface, and use them to analyze motion through a tunnel through Earth."
    ],
    "essentialKnowledge": [
      "牛顿万有引力定律：两质点间引力大小 \\(F=G\\dfrac{m_1m_2}{r^{2}}\\)，方向沿连线相互吸引；\\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\)，\\(r\\) 从质心算起。 · Newton's law of universal gravitation: the force between two point masses has magnitude \\(F=G\\dfrac{m_1m_2}{r^{2}}\\), points along the line joining them and is attractive; \\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\), and \\(r\\) is measured center to center.",
      "引力场模型：把其中一个质量看作场源，另一个物体在每点受到的引力为 \\(\\vec F_g=m\\vec g\\)，其中 \\(\\vec g=\\dfrac{\\vec F_g}{m}\\)；球对称场源外部的场强 \\(g=\\dfrac{GM}{r^{2}}\\)，方向指向场源。 · Field model: treat one mass as the source; another object at a point feels \\(\\vec F_g=m\\vec g\\), where \\(\\vec g=\\dfrac{\\vec F_g}{m}\\). Outside a spherically symmetric source, \\(g=\\dfrac{GM}{r^{2}}\\) and the field points toward the source.",
      "重量是引力对物体的作用，\\(w=m_g g\\)；视重是支持物或秤对物体的作用力大小，通常等于法向力或张力。视重可以大于、小于或等于重量，取决于物体的加速度。 · Weight is the gravitational force on an object, \\(w=m_g g\\); apparent weight is the magnitude of the supporting force or scale reading, usually the normal force or tension. Apparent weight can be larger than, smaller than, or equal to weight, depending on the acceleration.",
      "电梯中取向上为正：若加速度向上为 \\(a\\)，则 \\(N-mg=ma\\)，所以 \\(N=m(g+a)\\)；若加速度向下为 \\(a\\)，则 \\(mg-N=ma\\)，所以 \\(N=m(g-a)\\)。自由落体时 \\(N=0\\)，出现“失重”；若向下加速度大于 \\(g\\)，支持物无法拉物体，物体离开支持面。 · In an elevator with upward positive, an upward acceleration \\(a\\) gives \\(N-mg=ma\\), so \\(N=m(g+a)\\); a downward acceleration \\(a\\) gives \\(mg-N=ma\\), so \\(N=m(g-a)\\). In free fall \\(N=0\\), giving “weightlessness”; if the downward acceleration exceeds \\(g\\), the support cannot pull the object and contact is lost.",
      "等效原理：在非惯性参考系中，观察者无法在局部区分物体的视重与引力场对物体的引力。一个以 \\(a\\) 向上加速的无窗电梯，与一个静止在重力场强为 \\(g=a\\) 的行星表面的电梯，局部力学实验给出相同结果；自由落体电梯则局部等效于远离任何质量的惯性系。 · Equivalence principle: in a noninertial reference frame, an observer cannot locally distinguish an object's apparent weight from the gravitational force exerted by a gravitational field. A windowless elevator accelerating upward at \\(a\\) gives the same local mechanical results as one at rest on a planet with field strength \\(g=a\\); a freely falling elevator is locally equivalent to an inertial frame far from any mass.",
      "等效原理是局部的：只在足够小的空间范围和足够短的时间内成立。真实引力场不均匀，不同位置的 \\(g\\) 大小或方向略有不同，潮汐力（tidal force）会让自由下落的粒子相互靠近或远离，从而暴露出引力的存在；强引力场还需要广义相对论。 · The equivalence principle is local: it holds only over a sufficiently small region and a sufficiently short time. A real gravitational field is nonuniform, so \\(g\\) varies slightly in magnitude or direction; tidal forces make freely falling particles approach or separate, revealing the gravitational field. Strong fields require general relativity.",
      "惯性质量 \\(m_i\\) 衡量物体抵抗加速的能力，出现在 \\(\\sum\\vec F=m_i\\vec a\\) 中；引力质量 \\(m_g\\) 衡量物体与引力场耦合的强弱，出现在 \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) 与 \\(w=m_g g\\) 中。二者概念不同，不能由定义直接等同。 · Inertial mass \\(m_i\\) measures an object's resistance to acceleration in \\(\\sum\\vec F=m_i\\vec a\\); gravitational mass \\(m_g\\) measures the strength of its coupling to a gravitational field in \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) and \\(w=m_g g\\). They are conceptually different and are not equal by definition.",
      "实验表明惯性质量与引力质量等效：厄特弗什扭秤、自由落体与落塔实验、月球激光测距和 MICROSCOPE 卫星等把 \\(\\dfrac{m_i}{m_g}\\) 与 1 的偏差限制在约 \\(10^{-15}\\) 以内。因此自由落体加速度 \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\) 与物体的质量、组成无关；在真空中所有物体下落一样快。 · Experiments show that inertial and gravitational mass are equivalent: the Eötvös torsion balance, free-fall and drop-tower tests, lunar laser ranging, and the MICROSCOPE satellite constrain the deviation of \\(\\dfrac{m_i}{m_g}\\) from 1 to about \\(10^{-15}\\). Hence free-fall acceleration \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\) is independent of the object's mass and composition; in vacuum all objects fall at the same rate.",
      "球壳定理：均匀球壳对壳外一点的引力等效于把壳的全部质量集中在球心；对壳内任意一点，球壳各部分的引力矢量和为零。证明思路：从内点向球壳张两个相对的小立体角，对应面积元质量正比于距离平方，而引力按距离平方反比，两个面积元的引力恰好抵消。 · Shell theorem: a uniform spherical shell attracts an external point as if all its mass were at the center; at any point inside the shell, the vector sum of gravitational forces from all parts of the shell is zero. Proof idea: from an interior point, draw two opposite small solid angles; the corresponding area elements have masses proportional to the square of the distance, while gravity falls as the inverse square, so the two contributions cancel exactly.",
      "均匀实心球可看成许多同心球壳：球外等效为质量集中在球心的质点；球内半径 \\(r\\) 处只有半径 \\(r\\) 以内的质量有贡献，外壳层的净引力为零。均匀密度下 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\)，所以 \\(F=\\dfrac{GM(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\)，即 \\(F\\propto r\\)，方向指向球心；球心处为零，表面处回到 \\(\\dfrac{GMm}{R^{2}}\\)。 · A uniform solid sphere can be viewed as many concentric shells: outside it acts like a point mass at the center; at radius \\(r\\) inside, only the mass within radius \\(r\\) contributes, while the outer shells exert zero net force. For uniform density, \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\), so \\(F=\\dfrac{GM(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\), meaning \\(F\\propto r\\) toward the center; it is zero at the center and returns to \\(\\dfrac{GMm}{R^{2}}\\) at the surface.",
      "引力势能取无穷远为零：\\(U=-\\dfrac{GMm}{r}\\)，越远越大并趋近零；引力做正功时势能减少。逃逸速度由 \\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\) 得 \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)。在均匀实心球内部，势能函数不同（见推导拓展），但力仍由 \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) 给出。 · Gravitational potential energy is zero at infinity: \\(U=-\\dfrac{GMm}{r}\\), which increases toward zero with distance; it decreases when gravity does positive work. Escape speed follows from \\(\\dfrac{1}{2}mv_{\\mathrm{esc}}^{2}-\\dfrac{GMm}{r}=0\\), giving \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\). Inside a uniform solid sphere the potential-energy function is different (see the derivation extension), but the force is still given by \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\)."
    ],
    "definition": "牛顿万有引力定律：两质点间引力大小 \\(F=G\\dfrac{m_1m_2}{r^{2}}\\)，方向沿连线相互吸引，\\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\)；球对称质量分布可视为质量集中在球心（球壳定理）。重量是引力对物体的作用 \\(w=m_g g\\)，视重是支持力或秤的读数；在加速参考系中二者可以不同，但等效原理指出观察者无法在局部区分视重与引力场的作用。惯性质量 \\(m_i\\) 与引力质量 \\(m_g\\) 概念不同，实验却验证它们相等。均匀实心球内部的引力与到球心的距离成正比：\\(F_{g,\\mathrm{partial}}=-kr\\)，其中 \\(k=\\dfrac{GMm}{R^{3}}\\)。 · Newton's law of universal gravitation: the force between two point masses has magnitude \\(F=G\\dfrac{m_1m_2}{r^{2}}\\), points along the line joining them and is attractive, with \\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\); a spherically symmetric mass distribution acts as if its mass were at the center (shell theorem). Weight is the gravitational force on an object, \\(w=m_g g\\), while apparent weight is the supporting force or scale reading; they can differ in an accelerating frame, but the equivalence principle states that an observer cannot locally distinguish apparent weight from the effect of a gravitational field. Inertial mass \\(m_i\\) and gravitational mass \\(m_g\\) are conceptually different, yet experiments show they are equal. Inside a uniform solid sphere the gravitational force is proportional to the distance from the center: \\(F_{g,\\mathrm{partial}}=-kr\\), with \\(k=\\dfrac{GMm}{R^{3}}\\).",
    "intuition": "万有引力像一盏“随距离变暗的灯”：距离加倍，亮度变成四分之一。到了均匀实心球内部，情况反而变得“越靠里越暗、球心全黑”，因为球心处外壳层从四面八方拉你，恰好抵消；离球心越远，包围的质量按 \\(r^{3}\\) 增长，而平方反比只按 \\(r^{2}\\) 衰减，两者相抵后净引力与 \\(r\\) 成正比。等效原理则像“关掉窗户的电梯”：你感觉到的“重量”可能来自引力，也可能来自电梯在加速，单靠局部实验无法区分。 · Universal gravitation is like a lamp that dims with distance: double the distance and the brightness falls to one quarter. Inside a uniform solid sphere the situation reverses: it gets “darker” toward the center, and at the center it is completely dark, because shells pull from all directions and cancel. Farther from the center the enclosed mass grows as \\(r^{3}\\) while the inverse square falls as \\(r^{2}\\), so the net force grows in proportion to \\(r\\). The equivalence principle is like a windowless elevator: the “weight” you feel may come from gravity or from the elevator's acceleration, and local experiments alone cannot tell which.",
    "formulas": [
      {
        "latex": "F_g=G\\dfrac{m_1m_2}{r^{2}}",
        "note": "万有引力定律；\\(r\\) 为质心距离，力沿连线相互吸引。 · Universal gravitation; \\(r\\) is the center-to-center distance and the force is attractive along the line joining the masses."
      },
      {
        "latex": "g=\\dfrac{GM}{r^{2}}",
        "note": "球对称场源外部的引力场强度；近地面可近似为常量。 · Gravitational field strength outside a spherically symmetric source; approximately constant near Earth's surface."
      },
      {
        "latex": "w=m_g g",
        "note": "重量是引力对物体的作用；与视重（支持力或秤的读数）不同。 · Weight is the gravitational force on an object; it differs from apparent weight (the supporting force or scale reading)."
      },
      {
        "latex": "N=m(g+a)\\quad\\text{or}\\quad N=m(g-a)",
        "note": "电梯视重：向上加速取 \\(+\\)，向下加速取 \\(-\\)；自由落体时 \\(N=0\\)。 · Apparent weight in an elevator: use \\(+\\) for upward acceleration and \\(-\\) for downward acceleration; in free fall \\(N=0\\)."
      },
      {
        "latex": "m_i a=m_g g\\;\\Rightarrow\\;a=\\left(\\dfrac{m_g}{m_i}\\right)g",
        "note": "自由落体加速度；实验上 \\(m_i=m_g\\)，所以 \\(a=g\\) 与物体质量无关。 · Free-fall acceleration; experimentally \\(m_i=m_g\\), so \\(a=g\\) independent of the object's mass."
      },
      {
        "latex": "M(r)=M\\dfrac{r^{3}}{R^{3}}",
        "note": "均匀实心球内半径 \\(r\\) 以内包围的质量；密度均匀时成立。 · Enclosed mass within radius \\(r\\) inside a uniform solid sphere; valid for uniform density."
      },
      {
        "latex": "F_{g,\\mathrm{partial}}=-\\dfrac{GMm}{R^{3}}r=-kr",
        "note": "均匀实心球内部引力与 \\(r\\) 成正比，方向指向球心；\\(k=\\dfrac{GMm}{R^{3}}\\)。 · Inside a uniform solid sphere the force is proportional to \\(r\\) toward the center; \\(k=\\dfrac{GMm}{R^{3}}\\)."
      },
      {
        "latex": "g(r)=\\dfrac{GMr}{R^{3}}",
        "note": "均匀实心球内部的场强；球心为零，表面为 \\(\\dfrac{GM}{R^{2}}\\)。 · Field strength inside a uniform solid sphere; zero at the center and \\(\\dfrac{GM}{R^{2}}\\) at the surface."
      },
      {
        "latex": "U=-\\dfrac{GMm}{r},\\qquad v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}",
        "note": "球外引力势能与逃逸速度；零势能取在无穷远。 · Gravitational potential energy outside a sphere and escape speed; zero potential energy at infinity."
      }
    ],
    "derivationNotes": [
      {
        "from": "万有引力定律 · Law of universal gravitation",
        "to": "表面重力加速度 · Surface gravitational acceleration",
        "note": "在半径 \\(R\\) 的球面上，重量等于万有引力：\\(mg=\\dfrac{GMm}{R^{2}}\\)，所以 \\(g=\\dfrac{GM}{R^{2}}\\)。 · On the surface of a sphere of radius \\(R\\), weight equals gravitational force: \\(mg=\\dfrac{GMm}{R^{2}}\\), so \\(g=\\dfrac{GM}{R^{2}}\\)."
      },
      {
        "from": "加速参考系 · Accelerating reference frame",
        "to": "视重与等效原理 · Apparent weight and equivalence principle",
        "note": "在向上加速 \\(a\\) 的电梯中，物体相对电梯的加速度为零，但合外力为 \\(N-mg\\)；由 \\(N-mg=ma\\) 得 \\(N=m(g+a)\\)。在电梯参考系中可引入向下的惯性力 \\(ma\\)，等效重力场强为 \\(g+a\\)；局部无法区分“引力更强”与“电梯在加速”。 · In an elevator accelerating upward at \\(a\\), the object has zero acceleration relative to the elevator, but the net force is \\(N-mg\\); \\(N-mg=ma\\) gives \\(N=m(g+a)\\). In the elevator frame one may introduce a downward fictitious force \\(ma\\), giving an effective field \\(g+a\\); locally, “stronger gravity” and “acceleration of the elevator” are indistinguishable."
      },
      {
        "from": "惯性质量与引力质量 · Inertial and gravitational mass",
        "to": "自由落体普适性 · Universality of free fall",
        "note": "自由落体只受重力：\\(m_i a=m_g g\\)，所以 \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\)。实验上 \\(m_i=m_g\\)，因此 \\(a=g\\) 与质量、组成无关；这不是“质量在方程两边约掉”的数学巧合，而是实验事实。 · A freely falling object feels only gravity: \\(m_i a=m_g g\\), so \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\). Experimentally \\(m_i=m_g\\), so \\(a=g\\) independent of mass and composition; this is not a mathematical accident of canceling mass, but an experimental fact."
      },
      {
        "from": "球壳定理 · Shell theorem",
        "to": "均匀实心球内部 · Inside a uniform solid sphere",
        "note": "球内半径 \\(r\\) 处，外部球壳的净引力为零，只有 \\(M(r)=\\rho\\dfrac{4}{3}\\pi r^{3}=M\\dfrac{r^{3}}{R^{3}}\\) 有贡献；所以 \\(F=\\dfrac{G M(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\)，与 \\(r\\) 成正比，方向指向球心。 · At radius \\(r\\) inside the sphere, the outer shells exert zero net force, and only \\(M(r)=\\rho\\dfrac{4}{3}\\pi r^{3}=M\\dfrac{r^{3}}{R^{3}}\\) contributes; hence \\(F=\\dfrac{G M(r)m}{r^{2}}=\\dfrac{GMm}{R^{3}}r\\), proportional to \\(r\\) toward the center."
      },
      {
        "from": "内部引力 · Interior force",
        "to": "内部势能（拓展） · Interior potential energy (extension)",
        "note": "由 \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) 积分并令表面与 \\(U=-\\dfrac{GMm}{R}\\) 连续，得 \\(U(r)=-\\dfrac{GMm}{2R^{3}}\\left(3R^{2}-r^{2}\\right)\\)；球心处为 \\(-\\dfrac{3GMm}{2R}\\)。 · Integrate \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) and match \\(U=-\\dfrac{GMm}{R}\\) at the surface to obtain \\(U(r)=-\\dfrac{GMm}{2R^{3}}\\left(3R^{2}-r^{2}\\right)\\); at the center it is \\(-\\dfrac{3GMm}{2R}\\)."
      },
      {
        "from": "引力做功 · Work by gravity",
        "to": "引力势能与逃逸速度 · Potential energy and escape speed",
        "note": "\\(U=-\\int_{\\infty}^{r}\\vec F_g\\cdot\\mathrm{d}\\vec r=-\\dfrac{GMm}{r}\\)；令总能量 \\(E=0\\) 可得 \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)。 · \\(U=-\\int_{\\infty}^{r}\\vec F_g\\cdot\\mathrm{d}\\vec r=-\\dfrac{GMm}{r}\\); setting the total energy \\(E=0\\) gives \\(v_{\\mathrm{esc}}=\\sqrt{\\dfrac{2GM}{r}}\\)."
      }
    ],
    "conditions": [
      "万有引力定律适用于质点，或球对称质量分布的外部；\\(r\\) 必须从质心算起，不是从表面或高度算起。 · The law applies to point masses or outside spherically symmetric distributions; \\(r\\) is measured from the center, not from the surface or an altitude.",
      "球壳定理要求球壳质量分布均匀；均匀实心球的线性内部场还要求密度均匀。真实行星分层，密度随深度变化，内部 \\(g(r)\\) 不是严格线性。 · The shell theorem assumes a uniform spherical shell; the linear interior field also assumes uniform density. Real planets are layered, so \\(g(r)\\) inside is not strictly linear.",
      "等效原理是局部原理：只在足够小的空间区域和足够短的时间内成立；非均匀引力场会产生潮汐力，强场需要广义相对论。 · The equivalence principle is local: it holds over a sufficiently small region and short time; a nonuniform field produces tidal forces, and strong fields require general relativity.",
      "视重由支持力或秤的读数定义，要求秤与物体相对静止；若物体与支持面分离，视重为零。 · Apparent weight is defined by the supporting force or scale reading when the scale is at rest relative to the object; if contact is lost, apparent weight is zero.",
      "牛顿定律在惯性系中成立；在加速参考系中可引入惯性力，把等效引力场与真实引力场相加。 · Newton's laws hold in inertial frames; in an accelerating frame, introduce a fictitious force and add it to the real gravitational field.",
      "近地面 \\(g\\) 近似常量只在高度变化远小于地球半径时成立；忽略地球自转、其他天体和空气阻力。 · The approximation of constant \\(g\\) near Earth holds only when the height change is much smaller than Earth's radius; Earth's rotation, other bodies, and air resistance are neglected."
    ],
    "keyPoints": [
      "万有引力总是吸引，成对出现（第三定律），大小与两质量乘积成正比、与质心距离平方成反比。 · Gravitation is always attractive, occurs in third-law pairs, and is proportional to the product of the masses and inversely proportional to the square of the center-to-center distance.",
      "球外 \\(g=\\dfrac{GM}{r^{2}}\\)；均匀实心球内 \\(g(r)=\\dfrac{GMr}{R^{3}}\\propto r\\)；球壳内部净引力为零。 · Outside a sphere \\(g=\\dfrac{GM}{r^{2}}\\); inside a uniform solid sphere \\(g(r)=\\dfrac{GMr}{R^{3}}\\propto r\\); inside a shell the net force is zero.",
      "重量是引力，视重是支持力或秤的读数；加速电梯中视重可以大于、小于或等于重量。 · Weight is gravitational force, while apparent weight is the supporting force or scale reading; in an accelerating elevator apparent weight can be larger than, smaller than, or equal to weight.",
      "等效原理：非惯性系中的观察者无法局部区分视重与引力场的作用；向上加速等效于更强的引力，自由落体等效于失重。 · Equivalence principle: an observer in a noninertial frame cannot locally distinguish apparent weight from the effect of a gravitational field; upward acceleration mimics stronger gravity, and free fall mimics weightlessness.",
      "惯性质量与引力质量概念不同，但实验验证它们等效；因此真空中所有物体以同样加速度下落。 · Inertial and gravitational mass are conceptually different, but experiments show they are equivalent; therefore all objects fall with the same acceleration in vacuum.",
      "均匀实心球内部只有包围质量 \\(M(r)\\propto r^{3}\\) 有贡献，平方反比与 \\(r^{3}\\) 相抵，得到 \\(F\\propto r\\)。 · Inside a uniform solid sphere only the enclosed mass \\(M(r)\\propto r^{3}\\) contributes; the inverse square and the \\(r^{3}\\) growth combine to give \\(F\\propto r\\).",
      "\\(F\\)–\\(r\\) 图：球内为过原点的直线，球外按 \\(\\dfrac{1}{r^{2}}\\) 衰减，表面处连续；球心处为零。 · \\(F\\)–\\(r\\) graph: a straight line through the origin inside, an inverse-square decrease outside, continuous at the surface, and zero at the center.",
      "球内线性回复力 \\(F=-kr\\) 会导致穿过地球隧道的简谐运动，周期只由星球质量和半径决定。 · The linear restoring force \\(F=-kr\\) inside a sphere leads to simple harmonic motion through a tunnel through Earth, with a period set only by the planet's mass and radius."
    ],
    "misconceptions": [
      "认为太空中没有引力；实际上引力场延伸到很远，卫星在轨道上仍受地球引力，只是处于自由落体状态，视重为零。 · Thinking there is no gravity in space; the field extends far, and a satellite still feels Earth's gravity, but it is in free fall, so its apparent weight is zero.",
      "认为质量大的物体下落更快；在真空中 \\(m_i=m_g\\) 使所有物体加速度相同，空气阻力才导致差异。 · Thinking heavier objects fall faster; in vacuum \\(m_i=m_g\\) makes the acceleration the same for all objects, and only air resistance causes differences.",
      "把视重等同于重量，或认为秤的读数总等于 \\(mg\\)；秤读的是支持力，电梯加速时读数会改变。 · Equating apparent weight with weight, or assuming a scale always reads \\(mg\\); a scale reads the normal force, which changes when the elevator accelerates.",
      "把等效原理理解为“引力和加速度在任何地方都完全相同”；它只是局部等效，非均匀场中的潮汐力可以区分二者。 · Interpreting the equivalence principle as “gravity and acceleration are everywhere identical”; it is only locally valid, and tidal forces in a nonuniform field can distinguish them.",
      "认为均匀实心球内部引力为零；只有球壳内部才是零，实心球内部引力随 \\(r\\) 线性增大。 · Thinking the gravitational force inside a uniform solid sphere is zero; only inside a shell is it zero, while inside a solid sphere it grows linearly with \\(r\\).",
      "把球内引力写成 \\(\\dfrac{1}{r^{2}}\\)；球内只有包围质量有贡献，\\(M(r)\\propto r^{3}\\)，所以 \\(F\\propto r\\)，不是 \\(\\dfrac{1}{r^{2}}\\)。 · Writing an inverse-square force inside the sphere; only the enclosed mass contributes, and \\(M(r)\\propto r^{3}\\), so \\(F\\propto r\\), not \\(\\dfrac{1}{r^{2}}\\).",
      "认为惯性质量与引力质量“本来就是同一个量”；它们是不同的概念，数值相等是实验事实，也是广义相对论的基石之一。 · Thinking inertial and gravitational mass are “the same quantity by definition”; they are distinct concepts, and their numerical equality is an experimental fact and a foundation of general relativity.",
      "认为球心处引力最大；球心处各方向引力抵消，\\(g=0\\)，最大场强在星球表面。 · Thinking gravity is strongest at the center; contributions cancel there, so \\(g=0\\), and the maximum field strength is at the surface.",
      "忽略地球自转和分层，把真实地球当作均匀球体；线性内部场只是模型，真实 \\(g(r)\\) 需要密度分布数据。 · Ignoring Earth's rotation and layering and treating Earth as a uniform sphere; the linear interior field is only a model, and the real \\(g(r)\\) requires the density distribution."
    ],
    "examples": [
      {
        "title": "例 1 · 电梯中的视重 · Example 1: Apparent weight in an elevator",
        "prompt": "质量 \\(m=60\\,\\mathrm{kg}\\) 的人站在电梯里的秤上。分别求电梯以 \\(2.0\\,\\mathrm{m\\,s^{-2}}\\) 向上加速、以 \\(2.0\\,\\mathrm{m\\,s^{-2}}\\) 向下加速、以及自由落体时秤的读数。取 \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)。 · A person of mass \\(m=60\\,\\mathrm{kg}\\) stands on a scale in an elevator. Find the scale reading when the elevator accelerates upward at \\(2.0\\,\\mathrm{m\\,s^{-2}}\\), downward at \\(2.0\\,\\mathrm{m\\,s^{-2}}\\), and in free fall. Use \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
        "steps": [
          "秤的读数等于支持力 \\(N\\)，不是重力。取向上为正，人的加速度与电梯相同。 · The scale reads the normal force \\(N\\), not the weight. Take upward as positive; the person's acceleration equals the elevator's.",
          "向上加速：\\(N-mg=ma\\)，所以 \\(N=m(g+a)=60(9.8+2.0)=708\\,\\mathrm{N}\\)，比重力 \\(588\\,\\mathrm{N}\\) 大。 · Upward acceleration: \\(N-mg=ma\\), so \\(N=m(g+a)=60(9.8+2.0)=708\\,\\mathrm{N}\\), larger than the weight \\(588\\,\\mathrm{N}\\).",
          "向下加速：\\(mg-N=ma\\)，所以 \\(N=m(g-a)=60(9.8-2.0)=468\\,\\mathrm{N}\\)，比重力小。 · Downward acceleration: \\(mg-N=ma\\), so \\(N=m(g-a)=60(9.8-2.0)=468\\,\\mathrm{N}\\), smaller than the weight.",
          "自由落体：\\(a=g\\)，\\(N=m(g-g)=0\\)，人处于失重状态；此时重力仍为 \\(588\\,\\mathrm{N}\\)，只是没有支持力。 · Free fall: \\(a=g\\), so \\(N=m(g-g)=0\\), and the person is apparently weightless; gravity is still \\(588\\,\\mathrm{N}\\), but there is no supporting force."
        ],
        "solution": "向上加速 \\(708\\,\\mathrm{N}\\)；向下加速 \\(468\\,\\mathrm{N}\\)；自由落体 \\(0\\)。 · Upward acceleration \\(708\\,\\mathrm{N}\\); downward acceleration \\(468\\,\\mathrm{N}\\); free fall \\(0\\).",
        "solutionLatex": "N_{\\text{up}}=m(g+a)=708\\,\\mathrm{N},\\qquad N_{\\text{down}}=m(g-a)=468\\,\\mathrm{N},\\qquad N_{\\text{free fall}}=0"
      },
      {
        "title": "例 2 · 等效原理：无窗电梯 · Example 2: Equivalence principle in a windowless elevator",
        "prompt": "你在一部没有窗户的电梯里，站在秤上，秤的读数等于你在地球表面的体重。你能仅凭电梯内部的局部力学实验判断自己是在地球上静止，还是在远离任何星球的太空中以 \\(9.8\\,\\mathrm{m\\,s^{-2}}\\) 向上加速吗？请用主张—证据—推理作答，并说明什么情况下可以区分。 · You are in a windowless elevator standing on a scale whose reading equals your weight on Earth. Can local mechanical experiments inside the elevator tell whether you are at rest on Earth or accelerating upward at \\(9.8\\,\\mathrm{m\\,s^{-2}}\\) far from any planet? Answer with a claim, evidence, and reasoning, and state when the two situations could be distinguished.",
        "steps": [
          "主张：仅靠电梯内部的局部力学实验不能区分这两种情况。 · Claim: local mechanical experiments entirely inside the elevator cannot distinguish the two situations.",
          "证据：在这两种情况下，电梯内所有物体都受到相同的等效重力场；释放物体后它以 \\(9.8\\,\\mathrm{m\\,s^{-2}}\\) 相对电梯下落，秤的读数都是 \\(mg\\)，单摆周期、抛体轨迹也相同。 · Evidence: in both cases every object inside feels the same effective gravitational field; a released object falls relative to the elevator at \\(9.8\\,\\mathrm{m\\,s^{-2}}\\), the scale reads \\(mg\\), and pendulum periods and projectile trajectories are identical.",
          "推理：等效原理说非惯性系中的观察者无法局部区分视重与引力场的作用；向上加速 \\(a\\) 的参考系等效于一个大小为 \\(a\\)、方向向下的附加引力场。 · Reasoning: the equivalence principle says an observer in a noninertial frame cannot locally distinguish apparent weight from the effect of a gravitational field; a frame accelerating upward at \\(a\\) is equivalent to an additional downward field of magnitude \\(a\\).",
          "可区分的情形：若电梯足够大或实验持续时间足够长，你可以测量不同高度的 \\(g\\) 是否略有不同，或观察两个自由下落的粒子是否相互靠近（潮汐力）；真实引力场不均匀，而匀加速参考系的等效场是均匀的。 · When they can be distinguished: if the elevator is large enough or the experiment lasts long enough, you can measure whether \\(g\\) varies slightly with height or observe two freely falling particles approach each other (tidal forces); a real gravitational field is nonuniform, while the effective field of a uniformly accelerating frame is uniform."
        ],
        "solution": "局部无法区分；只有利用引力场的不均匀性（潮汐力）或借助外部信息才能区分。 · They cannot be distinguished locally; only the nonuniformity of the gravitational field (tidal forces) or external information can tell them apart.",
        "solutionLatex": "\\vec g_{\\text{eff}}=\\vec g-\\vec a,\\qquad \\text{local equivalence: }\\vec g_{\\text{eff}}\\text{ is indistinguishable from a real field}"
      },
      {
        "title": "例 3 · 惯性质量与引力质量 · Example 3: Inertial and gravitational mass",
        "prompt": "两个物体在真空中从同一高度由静止释放，一个由铁制成，一个由木材制成。若惯性质量与引力质量的比值分别为 \\(1\\) 和 \\(1.01\\)，它们的下落加速度相差多少？实验对 \\(\\dfrac{m_i}{m_g}\\) 的偏差给出了什么限制？ · Two objects are released from rest at the same height in vacuum, one made of iron and one of wood. If their ratios of inertial to gravitational mass were \\(1\\) and \\(1.01\\), by what fraction would their free-fall accelerations differ? What limit do experiments place on the deviation of \\(\\dfrac{m_i}{m_g}\\) from 1?",
        "steps": [
          "自由落体只受重力：\\(m_i a=m_g g\\)，所以 \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\)。比值 \\(\\dfrac{m_g}{m_i}\\) 越大，加速度越大；等价地，\\(\\dfrac{m_i}{m_g}\\) 越大，加速度越小。 · A freely falling object feels only gravity: \\(m_i a=m_g g\\), so \\(a=\\left(\\dfrac{m_g}{m_i}\\right)g\\). A larger \\(\\dfrac{m_g}{m_i}\\) gives a larger acceleration; equivalently, a larger \\(\\dfrac{m_i}{m_g}\\) gives a smaller acceleration.",
          "若 \\(\\dfrac{m_i}{m_g}=1\\)，则 \\(a=g\\)；若 \\(\\dfrac{m_i}{m_g}=1.01\\)，则 \\(a=\\dfrac{g}{1.01}\\approx0.990g\\)，比前者小约 \\(1\\%\\)。 · If \\(\\dfrac{m_i}{m_g}=1\\), then \\(a=g\\); if \\(\\dfrac{m_i}{m_g}=1.01\\), then \\(a=\\dfrac{g}{1.01}\\approx0.990g\\), about \\(1\\%\\) smaller.",
          "实验（厄特弗什扭秤、落塔、月球激光测距、MICROSCOPE 卫星）没有发现这样的差异，把 \\(\\dfrac{m_i}{m_g}\\) 与 1 的偏差限制在约 \\(10^{-15}\\) 以内。 · Experiments (Eötvös torsion balance, drop towers, lunar laser ranging, and the MICROSCOPE satellite) find no such difference, constraining the deviation of \\(\\dfrac{m_i}{m_g}\\) from 1 to about \\(10^{-15}\\).",
          "因此“所有物体下落一样快”不是把质量“约掉”的数学结果，而是惯性质量与引力质量实验等效的物理结论；在真空中，铁、木、羽毛的加速度相同。 · Therefore “all objects fall at the same rate” is not a mathematical result of canceling mass, but the physical consequence of the experimental equivalence of inertial and gravitational mass; in vacuum, iron, wood, and feathers have the same acceleration."
        ],
        "solution": "若比值相差 \\(1\\%\\)，加速度约相差 \\(1\\%\\)；实验把偏差限制在约 \\(10^{-15}\\)，故真空中所有物体下落一样快。 · A \\(1\\%\\) difference in the ratio would give about a \\(1\\%\\) difference in acceleration; experiments limit the deviation to about \\(10^{-15}\\), so all objects fall at the same rate in vacuum.",
        "solutionLatex": "a=\\left(\\dfrac{m_g}{m_i}\\right)g,\\qquad \\left|\\dfrac{m_i}{m_g}-1\\right|<10^{-15}"
      },
      {
        "title": "例 4 · 均匀实心球内部的引力 · Example 4: Gravity inside a uniform solid sphere",
        "prompt": "把地球近似为质量 \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\)、半径 \\(R=6.37\\times10^{6}\\,\\mathrm{m}\\) 的均匀实心球。求距地心 \\(r=\\dfrac{R}{2}\\) 处的重力加速度，以及 \\(1.0\\,\\mathrm{kg}\\) 物体受到的引力；再与距地面高度 \\(\\dfrac{R}{2}\\) 处的 \\(g\\) 比较。 · Model Earth as a uniform solid sphere of mass \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\) and radius \\(R=6.37\\times10^{6}\\,\\mathrm{m}\\). Find the gravitational acceleration at \\(r=\\dfrac{R}{2}\\) from the center and the force on a \\(1.0\\,\\mathrm{kg}\\) object; compare with \\(g\\) at a height \\(\\dfrac{R}{2}\\) above the surface.",
        "steps": [
          "球内半径 \\(r\\) 处只有包围质量 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\) 有贡献；外部球壳的净引力为零。 · At radius \\(r\\) inside, only the enclosed mass \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\) contributes; the outer shells exert zero net force.",
          "\\(g(r)=\\dfrac{GM(r)}{r^{2}}=\\dfrac{GM}{R^{3}}r\\)，所以 \\(g\\left(\\dfrac{R}{2}\\right)=\\dfrac{GM}{2R^{2}}=\\dfrac{g_{\\text{surface}}}{2}\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\)。 · \\(g(r)=\\dfrac{GM(r)}{r^{2}}=\\dfrac{GM}{R^{3}}r\\), so \\(g\\left(\\dfrac{R}{2}\\right)=\\dfrac{GM}{2R^{2}}=\\dfrac{g_{\\text{surface}}}{2}\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\).",
          "对 \\(1.0\\,\\mathrm{kg}\\) 物体：\\(F=mg=(1.0)(4.9)=4.9\\,\\mathrm{N}\\)，方向指向地心。 · For the \\(1.0\\,\\mathrm{kg}\\) object: \\(F=mg=(1.0)(4.9)=4.9\\,\\mathrm{N}\\) toward the center.",
          "高度 \\(\\dfrac{R}{2}\\) 处到地心距离为 \\(\\dfrac{3R}{2}\\)，球外平方反比：\\(g=\\dfrac{GM}{\\left(\\dfrac{3R}{2}\\right)^{2}}=\\dfrac{4}{9}g_{\\text{surface}}\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\)。 · At height \\(\\dfrac{R}{2}\\), the distance to the center is \\(\\dfrac{3R}{2}\\), and the exterior inverse square gives \\(g=\\dfrac{GM}{\\left(\\dfrac{3R}{2}\\right)^{2}}=\\dfrac{4}{9}g_{\\text{surface}}\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\).",
          "比较：同样离表面“半个地球半径”的尺度，向内 \\(g\\) 减半，向外只降到约 \\(\\dfrac{4}{9}\\)；这是因为内部包围质量随 \\(r^{3}\\) 减少，而外部距离按 \\(r^{2}\\) 增加。 · Comparison: at the same “half-Earth-radius” scale, inward \\(g\\) halves while outward \\(g\\) falls only to about \\(\\dfrac{4}{9}\\); inside, the enclosed mass decreases as \\(r^{3}\\), while outside the distance grows as \\(r^{2}\\)."
        ],
        "solution": "\\(g\\left(\\dfrac{R}{2}\\right)\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\)，\\(F\\approx4.9\\,\\mathrm{N}\\)；高度 \\(\\dfrac{R}{2}\\) 处 \\(g\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\)。 · \\(g\\left(\\dfrac{R}{2}\\right)\\approx4.9\\,\\mathrm{m\\,s^{-2}}\\), \\(F\\approx4.9\\,\\mathrm{N}\\); at height \\(\\dfrac{R}{2}\\), \\(g\\approx4.4\\,\\mathrm{m\\,s^{-2}}\\).",
        "solutionLatex": "g\\left(\\dfrac{R}{2}\\right)=\\dfrac{GM}{2R^{2}}=4.9\\,\\mathrm{m\\,s^{-2}},\\qquad F=4.9\\,\\mathrm{N},\\qquad g\\left(\\dfrac{3R}{2}\\right)=\\dfrac{4GM}{9R^{2}}=4.4\\,\\mathrm{m\\,s^{-2}}"
      },
      {
        "title": "例 5 · 穿过地球的隧道（拓展） · Example 5: Tunnel through Earth (extension)",
        "prompt": "在均匀地球模型中挖一条穿过地心的直隧道，物体在隧道内无摩擦运动。证明物体做简谐运动，并求周期。取 \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\)、\\(R=6.37\\times10^{6}\\,\\mathrm{m}\\)。 · In a uniform-Earth model, a straight frictionless tunnel passes through the center. Show that an object in the tunnel undergoes simple harmonic motion and find the period. Use \\(M=5.97\\times10^{24}\\,\\mathrm{kg}\\) and \\(R=6.37\\times10^{6}\\,\\mathrm{m}\\).",
        "steps": [
          "取地心为原点，物体在半径 \\(r\\) 处受到的引力为 \\(F_r=-\\dfrac{GMm}{R^{3}}r=-kr\\)，其中 \\(k=\\dfrac{GMm}{R^{3}}\\)。 · Take the center as the origin; at radius \\(r\\) the force is \\(F_r=-\\dfrac{GMm}{R^{3}}r=-kr\\), with \\(k=\\dfrac{GMm}{R^{3}}\\).",
          "这是线性回复力，形式与胡克定律相同，所以物体做简谐运动，角频率 \\(\\omega=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{GM}{R^{3}}}\\)。 · This is a linear restoring force of the same form as Hooke's law, so the motion is simple harmonic with angular frequency \\(\\omega=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{GM}{R^{3}}}\\).",
          "周期 \\(T=\\dfrac{2\\pi}{\\omega}=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\)。 · The period is \\(T=\\dfrac{2\\pi}{\\omega}=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\).",
          "代入数据：\\(\\dfrac{R^{3}}{GM}=\\dfrac{(6.37\\times10^{6})^{3}}{(6.67\\times10^{-11})(5.97\\times10^{24})}\\approx6.49\\times10^{5}\\,\\mathrm{s^{2}}\\)，\\(T\\approx2\\pi(806\\,\\mathrm{s})\\approx5.1\\times10^{3}\\,\\mathrm{s}\\approx84\\,\\mathrm{min}\\)。 · Substituting: \\(\\dfrac{R^{3}}{GM}=\\dfrac{(6.37\\times10^{6})^{3}}{(6.67\\times10^{-11})(5.97\\times10^{24})}\\approx6.49\\times10^{5}\\,\\mathrm{s^{2}}\\), so \\(T\\approx2\\pi(806\\,\\mathrm{s})\\approx5.1\\times10^{3}\\,\\mathrm{s}\\approx84\\,\\mathrm{min}\\).",
          "注意：这个结果只在均匀地球模型中成立；真实地球密度分层，周期会略有不同，而且隧道需要承受高温高压。 · Note: this result holds only in the uniform-Earth model; the real Earth is layered, so the period differs slightly, and such a tunnel would face extreme temperature and pressure."
        ],
        "solution": "\\(F=-kr\\)，故为简谐运动；\\(T=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\approx84\\,\\mathrm{min}\\)。 · \\(F=-kr\\), so the motion is simple harmonic; \\(T=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}\\approx84\\,\\mathrm{min}\\).",
        "solutionLatex": "T=2\\pi\\sqrt{\\dfrac{R^{3}}{GM}}=2\\pi\\sqrt{\\dfrac{(6.37\\times10^{6})^{3}}{(6.67\\times10^{-11})(5.97\\times10^{24})}}\\approx5.1\\times10^{3}\\,\\mathrm{s}\\approx84\\,\\mathrm{min}"
      }
    ],
    "examTips": [
      "先统一 \\(r\\) 为质心距离：球外是表面高度加半径，球内是到球心的距离；不要把 \\(r\\) 当成高度。 · First make \\(r\\) the center-to-center distance: outside it is altitude plus radius, inside it is the distance to the center; never treat \\(r\\) as height.",
      "看到“秤的读数”“视重”先写法向力方程，不要直接写 \\(mg\\)；电梯向上加速 \\(N=m(g+a)\\)，向下加速 \\(N=m(g-a)\\)。 · For a scale reading or apparent weight, write the normal-force equation instead of writing \\(mg\\); an elevator accelerating upward gives \\(N=m(g+a)\\), and downward gives \\(N=m(g-a)\\).",
      "等效原理题要强调“局部”：无窗电梯内无法区分，但潮汐力、引力场不均匀性或外部信息可以区分。 · On equivalence-principle questions, emphasize “local”: inside a windowless elevator the two cases are indistinguishable, but tidal forces, field nonuniformity, or external information can distinguish them.",
      "惯性质量与引力质量：先写 \\(m_i a=m_g g\\)，再说明实验上 \\(m_i=m_g\\)，所以 \\(a=g\\)；不要只说“质量约掉”。 · Inertial and gravitational mass: write \\(m_i a=m_g g\\), then state that experiments give \\(m_i=m_g\\), so \\(a=g\\); do not simply say “mass cancels.”",
      "球壳定理三句话：球外等效为质点，球壳内部净引力为零，均匀实心球内部 \\(F\\propto r\\)；推导时先写 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\)。 · Three statements of the shell theorem: outside it acts like a point mass, inside a shell the net force is zero, and inside a uniform solid sphere \\(F\\propto r\\); begin the derivation with \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\).",
      "画 \\(F\\)–\\(r\\) 或 \\(g\\)–\\(r\\) 图时标出球心为零、表面连续且最大、球外按 \\(\\dfrac{1}{r^{2}}\\) 衰减；注意表面处斜率不连续。 · When drawing an \\(F\\)–\\(r\\) or \\(g\\)–\\(r\\) graph, mark zero at the center, continuity and maximum at the surface, and inverse-square decrease outside; note that the slope is discontinuous at the surface."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.4",
        "title": "圆周运动 · Circular Motion",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.5",
        "title": "牛顿第三定律 · Newton's Laws of Motion: Third Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能 · Forces and Potential Energy",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u6",
        "code": "6.4",
        "title": "轨道 · Orbits",
        "relation": "后续 · follow-up"
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
        "id": "gravity-orbit",
        "title": "万有引力轨道 · Gravitational orbits"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：2.3 的牛顿第二定律与 2.4 的圆周运动提供动力学工具；2.5 的第三定律说明引力也是成对的作用力—反作用力。 · Upstream: Newton's second law in 2.3 and circular motion in 2.4 provide the dynamical tools; the third law in 2.5 shows that gravitation also comes in action–reaction pairs.",
      "数学：平方反比、球壳定理的对称性论证、\\(M(r)\\propto r^{3}\\) 的比例推理，以及 \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\) 的微积分联系。 · Mathematics: inverse-square reasoning, symmetry arguments for the shell theorem, proportionality \\(M(r)\\propto r^{3}\\), and the calculus link \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}r}\\).",
      "下游：6.4 的轨道运动把引力作为向心力；3.2 与 3.3 用引力势能分析能量；7.1 的简谐运动与穿过地球隧道的线性回复力相通。 · Downstream: orbits in 6.4 use gravity as the centripetal force; 3.2 and 3.3 analyze energy with gravitational potential energy; simple harmonic motion in 7.1 connects to the linear restoring force in a tunnel through Earth.",
      "跨学科：地球物理用 \\(g(r)\\) 推断行星内部密度；卫星导航与航天依赖精确的引力场模型；等效原理是广义相对论的实验基础之一。 · Cross-disciplinary: geophysics infers planetary interior density from \\(g(r)\\); satellite navigation and spaceflight rely on precise gravitational field models; the equivalence principle is one of the experimental foundations of general relativity."
    ],
    "intuitionDetailed": "先抓住“球外”和“球内”的分界。球外，所有质量的效果像集中在球心，距离从球心算起，力按 \\(\\dfrac{1}{r^{2}}\\) 衰减；球内，外面的球壳从四面八方拉你，净效果为零，只有半径 \\(r\\) 以内的质量在拉你。均匀球体的包围质量按体积 \\(r^{3}\\) 增长，而引力按 \\(r^{2}\\) 衰减，所以净力与 \\(r\\) 成正比：越靠近球心，能拉你的质量越少，力越小，球心处正好为零。 · First fix the boundary between “outside” and “inside.” Outside, the entire mass acts as if concentrated at the center, distance is measured from the center, and the force falls as \\(\\dfrac{1}{r^{2}}\\); inside, the outer shells pull from all directions with zero net effect, and only the mass within radius \\(r\\) pulls you. For a uniform sphere the enclosed mass grows with volume as \\(r^{3}\\), while gravity falls as \\(r^{2}\\), so the net force is proportional to \\(r\\): closer to the center, less mass pulls you, the force is smaller, and at the center it is exactly zero. 等效原理则把“视重”与“引力”放在一起：秤读的是支持力，电梯加速时支持力会变；但在没有窗户的电梯里，你无法局部判断这个支持力是因为地球引力还是因为电梯在加速。 · The equivalence principle then places “apparent weight” and “gravity” side by side: a scale reads the supporting force, which changes when the elevator accelerates; but in a windowless elevator you cannot locally tell whether that support comes from Earth's gravity or from the elevator's acceleration.",
    "development": [
      "先判断研究点在球外、球壳内部还是均匀实心球内部，选择对应的 \\(g(r)\\) 表达式。 · Decide whether the point is outside the sphere, inside a shell, or inside a uniform solid sphere, and choose the corresponding \\(g(r)\\).",
      "球外直接用 \\(g=\\dfrac{GM}{r^{2}}\\)；球内先写包围质量 \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\)，再用 \\(F=\\dfrac{GM(r)m}{r^{2}}\\)。 · Outside use \\(g=\\dfrac{GM}{r^{2}}\\); inside first write the enclosed mass \\(M(r)=M\\dfrac{r^{3}}{R^{3}}\\), then use \\(F=\\dfrac{GM(r)m}{r^{2}}\\).",
      "涉及视重时画受力图，写 \\(N\\) 与 \\(mg\\) 的方程；明确加速度方向与正方向。 · For apparent weight, draw a free-body diagram and write the equation relating \\(N\\) and \\(mg\\); specify the acceleration direction and positive direction.",
      "涉及等效原理时先说明“局部”，再举无窗电梯或自由落体电梯的例子，最后指出潮汐力可以区分。 · For the equivalence principle, first state “local,” then use a windowless or freely falling elevator, and finally note that tidal forces can distinguish the cases.",
      "涉及惯性质量与引力质量时，先区分两个定义，再写 \\(m_i a=m_g g\\)，最后引用实验限制。 · For inertial and gravitational mass, distinguish the two definitions, write \\(m_i a=m_g g\\), and cite the experimental bound.",
      "画 \\(F\\)–\\(r\\) 图：球内过原点的直线、球外 \\(\\dfrac{1}{r^{2}}\\) 曲线、表面连续；用图检查极限与量纲。 · Draw the \\(F\\)–\\(r\\) graph: a straight line through the origin inside, an inverse-square curve outside, continuous at the surface; use it to check limits and units."
    ],
    "checks": [
      "为什么说视重不一定等于重量？电梯向上加速、向下加速和自由落体时，秤的读数分别如何变化？ · Why is apparent weight not always equal to weight? How does a scale reading change when an elevator accelerates upward, downward, and in free fall?",
      "等效原理为什么是“局部”的？在什么实验中最容易暴露出引力场的不均匀性？ · Why is the equivalence principle “local”? In what experiment is the nonuniformity of a gravitational field most likely to show up?",
      "惯性质量与引力质量的定义分别是什么？为什么“所有物体下落一样快”是实验结论而不是定义？ · What are the definitions of inertial and gravitational mass? Why is “all objects fall at the same rate” an experimental conclusion rather than a definition?",
      "均匀实心球内部为什么是 \\(F\\propto r\\) 而不是 \\(F\\propto\\dfrac{1}{r^{2}}\\)？请用 \\(M(r)\\) 说明。 · Why is \\(F\\propto r\\) inside a uniform solid sphere rather than \\(F\\propto\\dfrac{1}{r^{2}}\\)? Explain using \\(M(r)\\).",
      "球壳内部的净引力为什么为零？球外为什么可以看成质量集中在球心？ · Why is the net gravitational force inside a shell zero? Why can the outside be treated as if all mass were at the center?",
      "在 \\(F\\)–\\(r\\) 图上，球心、表面和远处的斜率与数值各有什么特征？ · On an \\(F\\)–\\(r\\) graph, what are the values and slopes at the center, at the surface, and far away?",
      "若把地球视为均匀球体，穿过地心的隧道运动周期与什么量有关？为什么与振幅无关？ · If Earth is modeled as a uniform sphere, what determines the period of motion in a tunnel through the center? Why is it independent of amplitude?"
    ],
    "vocabulary": [
      {
        "termZh": "万有引力",
        "termEn": "universal gravitation",
        "defZh": "任何两个有质量的物体之间的相互吸引，大小与质量乘积成正比、与质心距离平方成反比。",
        "defEn": "The mutual attraction between any two objects with mass, proportional to the product of the masses and inversely proportional to the square of the center-to-center distance."
      },
      {
        "termZh": "引力场",
        "termEn": "gravitational field",
        "defZh": "描述引力作用的场，某点的场强等于单位质量物体所受的引力。",
        "defEn": "A field describing gravitational effects; the field strength at a point is the gravitational force per unit mass."
      },
      {
        "termZh": "视重",
        "termEn": "apparent weight",
        "defZh": "支持物或秤对物体的作用力大小，通常等于法向力或张力，可以与重量不同。",
        "defEn": "The magnitude of the supporting force or scale reading, usually the normal force or tension, which may differ from weight."
      },
      {
        "termZh": "等效原理",
        "termEn": "equivalence principle",
        "defZh": "非惯性系中的观察者无法局部区分视重与引力场对物体的引力作用。",
        "defEn": "An observer in a noninertial frame cannot locally distinguish apparent weight from the gravitational force exerted by a gravitational field."
      },
      {
        "termZh": "惯性质量",
        "termEn": "inertial mass",
        "defZh": "物体抵抗加速的性质，出现在 \\(\\sum\\vec F=m_i\\vec a\\) 中。",
        "defEn": "The property that measures an object's resistance to acceleration, appearing in \\(\\sum\\vec F=m_i\\vec a\\)."
      },
      {
        "termZh": "引力质量",
        "termEn": "gravitational mass",
        "defZh": "物体与引力场耦合的强弱，出现在 \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) 与 \\(w=m_g g\\) 中。",
        "defEn": "The strength of an object's coupling to a gravitational field, appearing in \\(F_g=G\\dfrac{Mm_g}{r^{2}}\\) and \\(w=m_g g\\)."
      },
      {
        "termZh": "球壳定理",
        "termEn": "shell theorem",
        "defZh": "均匀球壳对壳外一点的引力等效于质量集中在球心，对壳内任意一点的净引力为零。",
        "defEn": "A uniform spherical shell attracts an external point as if its mass were at the center, and exerts zero net force at any point inside."
      },
      {
        "termZh": "潮汐力",
        "termEn": "tidal force",
        "defZh": "由于引力场在不同位置不均匀而产生的相对加速度，可使自由下落的物体相互靠近或远离。",
        "defEn": "A relative acceleration caused by the nonuniformity of a gravitational field at different positions, making freely falling objects approach or separate."
      }
    ]
  },
  "2.7": {
    "id": "mech/mech-u2/2.7",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.7",
    "titleZh": "阻力与终端速度",
    "titleEn": "Resistive Forces and Terminal Velocity",
    "layer": "ap",
    "summary": "阻力与速度反向且随速度增大；用分离变量解出 \\(v(t)\\)，终端速度是合力为零时的渐近速度。 · Resistive force opposes velocity and grows with speed; separation of variables gives \\(v(t)\\), and terminal velocity is the asymptotic speed when the net force is zero.",
    "learningObjectives": [
      "能区分线性阻力 \\(F_r=-bv\\) 与二次阻力 \\(F_r=-c|v|v\\)，并说明各自的适用速度范围。 · Distinguish linear drag \\(F_r=-bv\\) from quadratic drag \\(F_r=-c|v|v\\) and state the speed regime in which each model is used.",
      "能对下落物体写出 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\) 或 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\)，并用分离变量求解。 · Set up \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\) or \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\) for a falling object and solve it by separation of variables.",
      "能求终端速度，并用 \\(v\\)–\\(t\\) 图的渐近线、初始条件和极限行为检验结果。 · Find terminal velocity and check the result with the asymptote of the \\(v\\)–\\(t\\) graph, initial conditions, and limiting behavior."
    ],
    "essentialKnowledge": [
      "阻力是速度依赖力，方向总与速度相反；一维中可写为 \\(F_r=-bv\\)（线性）或 \\(F_r=-c|v|v\\)（二次）。 · A resistive force is velocity-dependent and always opposite the velocity; in one dimension it is \\(F_r=-bv\\) (linear) or \\(F_r=-c|v|v\\) (quadratic).",
      "线性模型多用于低速、黏性阻力或简化模型；二次模型多用于较高速度、惯性阻力，例如空气中快速下落的雨滴或跳伞者。 · The linear model is used at low speed, for viscous drag, or as a simplification; the quadratic model is used at higher speed where inertial drag dominates, such as a fast raindrop or skydiver in air.",
      "竖直下落取向下为正：线性模型 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\)，二次模型 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\)。 · With downward positive for vertical fall, the linear model is \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\) and the quadratic model is \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}\\).",
      "终端速度由合力为零定义，即 \\(a=0\\)：线性 \\(v_t=\\dfrac{mg}{b}\\)，二次 \\(v_t=\\sqrt{\\dfrac{mg}{c}}\\)。 · Terminal velocity is defined by zero net force, \\(a=0\\): \\(v_t=\\dfrac{mg}{b}\\) for linear drag and \\(v_t=\\sqrt{\\dfrac{mg}{c}}\\) for quadratic drag.",
      "线性情形从静止释放：\\(v(t)=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\)，时间常数 \\(\\tau=\\dfrac{m}{b}\\)；二次情形从静止释放：\\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\)。 · Released from rest, the linear case gives \\(v(t)=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\) with time constant \\(\\tau=\\dfrac{m}{b}\\); the quadratic case gives \\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\).",
      "初始条件会改变解：从静止下落、向下抛出、向上抛出再下落对应不同的积分常数；向上运动时阻力向下，速度过零后阻力随之换向。 · Initial conditions change the solution: dropped from rest, thrown downward, or thrown upward and then falling give different constants of integration; while moving upward the drag points down, and after the velocity reverses the drag reverses too.",
      "\\(v\\)–\\(t\\) 图有一条水平渐近线 \\(v=v_t\\)，初始斜率等于 \\(g\\)；线性模型以指数方式趋近，二次模型以 \\(\\tanh\\) 方式更快趋近。 · The \\(v\\)–\\(t\\) graph has a horizontal asymptote \\(v=v_t\\) and initial slope \\(g\\); the linear model approaches exponentially while the quadratic model approaches faster with a \\(\\tanh\\) shape.",
      "由 \\(v(t)\\) 再积分可得 \\(x(t)\\)；AP 题更常要求速度、终端条件和图像特征，但位移可由面积或积分得到。 · Integrating \\(v(t)\\) once more gives \\(x(t)\\); AP questions more often ask for velocity, terminal conditions, and graph features, but displacement follows from the area or the integral."
    ],
    "definition": "阻力（drag，resistive force）是大小随速度变化、方向总与物体速度相反的力。线性模型写作 \\(F_r=-bv\\)，二次模型写作 \\(F_r=-c|v|v\\)，其中 \\(b\\) 的单位是 kg/s，\\(c\\) 的单位是 kg/m。对竖直下落取向下为正，牛顿第二定律给出速度的一阶微分方程；当阻力增大到与重力等大反向时，合力为零，速度不再增加，这个最大速度就是终端速度（terminal velocity）。 · A resistive force (drag) depends on speed and always points opposite the velocity. The linear model is \\(F_r=-bv\\) and the quadratic model is \\(F_r=-c|v|v\\), where \\(b\\) has units of kg/s and \\(c\\) has units of kg/m. For vertical fall with downward positive, Newton's second law gives a first-order differential equation for velocity. When drag grows to balance weight, the net force is zero, the speed stops increasing, and that maximum speed is the terminal velocity.",
    "intuition": "把阻力想成“速度越大，刹车越强”。开始时物体几乎只受重力，斜率接近 \\(g\\)；随着速度增大，阻力追上重力，加速度变小，\\(v\\)–\\(t\\) 曲线逐渐变平。终端速度不是“突然出现”的开关，而是 \\(t\\to\\infty\\) 的渐近值；经过几个时间常数后，实际速度已经非常接近它。 · Think of drag as a brake that gets stronger with speed. At the start the object feels almost only gravity, so the slope is close to \\(g\\); as speed grows, drag catches up with weight, acceleration shrinks, and the \\(v\\)–\\(t\\) curve flattens. Terminal velocity is not a switch that suddenly turns on; it is the \\(t\\to\\infty\\) asymptote, and after a few time constants the actual speed is already very close to it.",
    "formulas": [
      {
        "latex": "\\vec F_r=-b\\vec v",
        "note": "线性阻力：低速、黏性阻力或简化模型；一维分量形式为 \\(F=-bv\\)，方向自动随速度反向。 · Linear drag: low speed, viscous drag, or a simplified model; in one dimension \\(F=-bv\\), with the sign automatically reversing with velocity."
      },
      {
        "latex": "\\vec F_r=-c|\\vec v|\\vec v",
        "note": "二次阻力：较高速度的惯性阻力；一维分量形式为 \\(F=-cv^{2}\\)，但符号必须随速度反向。 · Quadratic drag: inertial drag at higher speed; in one dimension \\(F=-cv^{2}\\), but the sign must follow the velocity."
      },
      {
        "latex": "m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv",
        "note": "线性阻力下的竖直下落方程，取向下为正。 · Vertical-fall equation with linear drag, downward positive."
      },
      {
        "latex": "v(t)=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)",
        "note": "线性阻力、从静止释放的解；\\(\\tau=\\dfrac{m}{b}\\) 是时间常数。 · Linear-drag solution released from rest; \\(\\tau=\\dfrac{m}{b}\\) is the time constant."
      },
      {
        "latex": "v_t=\\dfrac{mg}{b}",
        "note": "线性阻力的终端速度。 · Terminal speed for linear drag."
      },
      {
        "latex": "m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-cv^{2}",
        "note": "二次阻力下的竖直下落方程，取向下为正且 \\(v\\ge 0\\)。 · Vertical-fall equation with quadratic drag, downward positive and \\(v\\ge 0\\)."
      },
      {
        "latex": "v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)",
        "note": "二次阻力、从静止释放的解；也可写成 \\(\\tanh\\left(\\dfrac{\\sqrt{cg}\\,t}{\\sqrt{m}}\\right)\\) 的等价形式。 · Quadratic-drag solution released from rest; equivalently \\(\\tanh\\left(\\dfrac{\\sqrt{cg}\\,t}{\\sqrt{m}}\\right)\\)."
      },
      {
        "latex": "v_t=\\sqrt{\\dfrac{mg}{c}}",
        "note": "二次阻力的终端速度。 · Terminal speed for quadratic drag."
      }
    ],
    "derivationNotes": [
      {
        "from": "牛顿第二定律 + 阻力模型 · Newton's second law + drag model",
        "to": "一阶微分方程 · First-order differential equation",
        "note": "取向下为正，合力为 \\(mg-bv\\)（或 \\(mg-cv^{2}\\)），得到 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\)。 · With downward positive, the net force is \\(mg-bv\\) (or \\(mg-cv^{2}\\)), so \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=mg-bv\\)."
      },
      {
        "from": "分离变量 · Separation of variables",
        "to": "积分 · Integrate",
        "note": "线性情形写成 \\(\\dfrac{\\mathrm{d}v}{v_t-v}=\\dfrac{b}{m}\\mathrm{d}t\\)，从 \\(v(0)=0\\) 积到 \\(v(t)\\)。 · For the linear case write \\(\\dfrac{\\mathrm{d}v}{v_t-v}=\\dfrac{b}{m}\\mathrm{d}t\\) and integrate from \\(v(0)=0\\) to \\(v(t)\\)."
      },
      {
        "from": "积分结果 · Integrated result",
        "to": "指数解 · Exponential solution",
        "note": "\\(\\ln\\dfrac{v_t}{v_t-v}=\\dfrac{b}{m}t\\)，解得 \\(v=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\)。 · \\(\\ln\\dfrac{v_t}{v_t-v}=\\dfrac{b}{m}t\\), hence \\(v=v_t\\left(1-e^{-\\dfrac{b}{m}t}\\right)\\)."
      },
      {
        "from": "终端条件 · Terminal condition",
        "to": "终端速度 · Terminal speed",
        "note": "令 \\(a=0\\) 得 \\(mg=bv_t\\) 或 \\(mg=cv_t^{2}\\)；不要令 \\(v=0\\)。 · Set \\(a=0\\) to get \\(mg=bv_t\\) or \\(mg=cv_t^{2}\\); do not set \\(v=0\\)."
      },
      {
        "from": "二次情形 · Quadratic case",
        "to": "双曲正切解 · Hyperbolic-tangent solution",
        "note": "对 \\(\\dfrac{\\mathrm{d}v}{v_t^{2}-v^{2}}=\\dfrac{c}{m}\\mathrm{d}t\\) 积分，利用 \\(\\int\\dfrac{\\mathrm{d}u}{a^{2}-u^{2}}\\) 得 \\(\\tanh\\) 形式。 · Integrate \\(\\dfrac{\\mathrm{d}v}{v_t^{2}-v^{2}}=\\dfrac{c}{m}\\mathrm{d}t\\) with the standard integral \\(\\int\\dfrac{\\mathrm{d}u}{a^{2}-u^{2}}\\) to obtain the \\(\\tanh\\) form."
      }
    ],
    "conditions": [
      "阻力模型是经验模型；线性与二次之间没有尖锐分界，具体问题会指定用哪一个。 · Drag laws are empirical; there is no sharp boundary between linear and quadratic, and each problem states which model to use.",
      "物体质量恒定，重力近似恒定（近地面），流体性质和物体形状不变。 · The mass is constant, gravity is approximately constant near Earth's surface, and the fluid properties and object shape do not change.",
      "一维竖直运动，正方向一旦选定就保持不变；速度反向时阻力项要随 \\(v\\) 的符号换向。 · The motion is one-dimensional and vertical with a fixed positive direction; when velocity reverses, the drag term must reverse with the sign of \\(v\\).",
      "\\(b\\) 或 \\(c\\) 不是普适常数：它们依赖流体密度、黏度、物体形状、截面和表面性质。 · \\(b\\) and \\(c\\) are not universal constants: they depend on fluid density, viscosity, object shape, cross-section, and surface properties.",
      "终端速度要求存在与阻力反向的恒定驱动力；自由落体在 \\(g\\) 恒定时满足这一条件。 · Terminal speed requires a constant driving force opposite the drag; free fall with constant \\(g\\) satisfies this condition."
    ],
    "keyPoints": [
      "阻力方向永远与速度相反，不是永远与坐标轴负方向相反。 · Drag always opposes velocity, not necessarily the negative coordinate direction.",
      "终端速度由 \\(a=0\\) 得到，不是由 \\(v=0\\) 得到。 · Terminal speed follows from \\(a=0\\), not from \\(v=0\\).",
      "线性与二次模型的 \\(v_t\\) 公式不同，单位检查可防止 \\(b\\)、\\(c\\) 混用。 · The linear and quadratic \\(v_t\\) formulas differ; a unit check prevents mixing \\(b\\) and \\(c\\).",
      "分离变量时把含 \\(v\\) 的项放一边，积分限对应初始时刻和任意时刻。 · In separation of variables, put all \\(v\\)-terms on one side and use limits for the initial and arbitrary times.",
      "用 \\(t=0\\)、\\(t\\to\\infty\\) 和初始斜率 \\(g\\) 检验解与图像。 · Check the solution and graph with \\(t=0\\), \\(t\\to\\infty\\), and the initial slope \\(g\\).",
      "速度反向时，阻力方向改变，但“与速度相反”这一条始终成立。 · When velocity reverses, drag reverses too; the rule “opposite velocity” always holds."
    ],
    "misconceptions": [
      "把 \\(F_r=-cv^{2}\\) 当成总沿坐标轴负方向；物体向上运动时阻力应向下，必须用 \\(F_r=-c|v|v\\) 或分段换号。 · Treating \\(F_r=-cv^{2}\\) as always along the negative axis; for upward motion the drag is downward, so use \\(F_r=-c|v|v\\) or switch signs piecewise.",
      "认为终端速度与抛出速度有关；终端速度只由 \\(m\\)、\\(g\\) 和阻力系数决定。 · Thinking terminal speed depends on launch speed; it is set only by \\(m\\), \\(g\\), and the drag coefficient.",
      "把 \\(v_t\\) 写成 \\(mg\\)，或把线性模型的 \\(b\\) 与二次模型的 \\(c\\) 混用。 · Writing \\(v_t=mg\\), or mixing the linear coefficient \\(b\\) with the quadratic coefficient \\(c\\).",
      "有阻力时仍使用 \\(v=at\\)；阻力使加速度随时间变化，必须解微分方程或读 \\(v\\)–\\(t\\) 图。 · Using \\(v=at\\) when drag is present; drag makes acceleration nonconstant, so solve the differential equation or read the \\(v\\)–\\(t\\) graph.",
      "认为“渐近”意味着永远达不到，因此终端速度没有实际意义；经过几个时间常数后速度已与 \\(v_t\\) 几乎不可区分。 · Thinking “asymptotic” means never reached, so terminal speed is meaningless; after a few time constants the speed is practically indistinguishable from \\(v_t\\).",
      "速度反向时忘记让阻力换向，导致上升和下降阶段用错符号。 · Forgetting to reverse the drag when velocity reverses, so the upward and downward stages use the wrong sign.",
      "把线性情形的指数解直接套到二次阻力上；二次情形应得到 \\(\\tanh\\) 解。 · Applying the linear exponential solution to quadratic drag; the quadratic case gives a \\(\\tanh\\) solution."
    ],
    "examples": [
      {
        "title": "例 1 · 由终端速度求阻力系数 · Example 1: Drag coefficient from terminal speed",
        "prompt": "质量 \\(m=0.20\\,\\mathrm{kg}\\) 的雨滴在空气中下落，观测到终端速度 \\(v_t=4.0\\,\\mathrm{m/s}\\)。取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)，按线性阻力模型求 \\(b\\)，并求时间常数 \\(\\tau=\\dfrac{m}{b}\\)。 · A raindrop of mass \\(m=0.20\\,\\mathrm{kg}\\) falls with an observed terminal speed \\(v_t=4.0\\,\\mathrm{m/s}\\). Taking \\(g=9.8\\,\\mathrm{m/s^{2}}\\), find \\(b\\) in the linear-drag model and the time constant \\(\\tau=\\dfrac{m}{b}\\).",
        "steps": [
          "终端时 \\(a=0\\)，合力为零：\\(mg=bv_t\\)。 · At terminal speed \\(a=0\\), so the net force is zero: \\(mg=bv_t\\).",
          "\\(b=\\dfrac{mg}{v_t}=\\dfrac{(0.20)(9.8)}{4.0}=0.49\\,\\mathrm{kg/s}\\)。 · \\(b=\\dfrac{mg}{v_t}=\\dfrac{(0.20)(9.8)}{4.0}=0.49\\,\\mathrm{kg/s}\\).",
          "\\(\\tau=\\dfrac{m}{b}=\\dfrac{0.20}{0.49}=0.41\\,\\mathrm{s}\\)。 · \\(\\tau=\\dfrac{m}{b}=\\dfrac{0.20}{0.49}=0.41\\,\\mathrm{s}\\)."
        ],
        "solution": "\\(b\\approx 0.49\\,\\mathrm{kg/s}\\)，\\(\\tau\\approx 0.41\\,\\mathrm{s}\\)。 · \\(b\\approx 0.49\\,\\mathrm{kg/s}\\) and \\(\\tau\\approx 0.41\\,\\mathrm{s}\\).",
        "solutionLatex": "b=\\dfrac{mg}{v_t}=\\dfrac{(0.20)(9.8)}{4.0}=0.49\\,\\mathrm{kg\\,s^{-1}},\\qquad \\tau=\\dfrac{m}{b}=\\dfrac{0.20}{0.49}=0.41\\,\\mathrm{s}"
      },
      {
        "title": "例 2 · 线性阻力的 v(t) · Example 2: v(t) with linear drag",
        "prompt": "同一雨滴从静止释放，\\(v_t=4.0\\,\\mathrm{m/s}\\)，\\(\\tau=0.41\\,\\mathrm{s}\\)。求 \\(t=0.50\\,\\mathrm{s}\\) 时的速度，以及达到 \\(0.90v_t\\) 所需的时间。 · The same raindrop is released from rest with \\(v_t=4.0\\,\\mathrm{m/s}\\) and \\(\\tau=0.41\\,\\mathrm{s}\\). Find its speed at \\(t=0.50\\,\\mathrm{s}\\) and the time needed to reach \\(0.90v_t\\).",
        "steps": [
          "线性解：\\(v(t)=v_t\\left(1-e^{-t/\\tau}\\right)\\)。 · Linear solution: \\(v(t)=v_t\\left(1-e^{-t/\\tau}\\right)\\).",
          "\\(v(0.50)=4.0\\left(1-e^{-\\dfrac{0.50}{0.41}}\\right)=4.0(1-0.295)=2.8\\,\\mathrm{m/s}\\)。 · \\(v(0.50)=4.0\\left(1-e^{-\\dfrac{0.50}{0.41}}\\right)=4.0(1-0.295)=2.8\\,\\mathrm{m/s}\\).",
          "令 \\(v=0.90v_t\\)：\\(1-e^{-t/\\tau}=0.90\\)，所以 \\(t=-\\tau\\ln 0.10=0.41(2.30)=0.94\\,\\mathrm{s}\\)。 · Set \\(v=0.90v_t\\): \\(1-e^{-t/\\tau}=0.90\\), so \\(t=-\\tau\\ln 0.10=0.41(2.30)=0.94\\,\\mathrm{s}\\)."
        ],
        "solution": "\\(v(0.50\\,\\mathrm{s})\\approx 2.8\\,\\mathrm{m/s}\\)；达到 \\(0.90v_t\\) 约需 \\(0.94\\,\\mathrm{s}\\)。 · \\(v(0.50\\,\\mathrm{s})\\approx 2.8\\,\\mathrm{m/s}\\); reaching \\(0.90v_t\\) takes about \\(0.94\\,\\mathrm{s}\\).",
        "solutionLatex": "v(0.50)=4.0\\left(1-e^{-\\dfrac{0.50}{0.41}}\\right)=2.8\\,\\mathrm{m\\,s^{-1}},\\qquad t=-\\tau\\ln(0.10)=0.94\\,\\mathrm{s}"
      },
      {
        "title": "例 3 · 二次阻力的 v(t) · Example 3: v(t) with quadratic drag",
        "prompt": "质量 \\(m=0.50\\,\\mathrm{kg}\\) 的物体在空气中从静止下落，二次阻力系数 \\(c=0.20\\,\\mathrm{kg/m}\\)，取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)。求终端速度与 \\(v(t)\\)，并求 \\(t=0.50\\,\\mathrm{s}\\) 时的速度。 · An object of mass \\(m=0.50\\,\\mathrm{kg}\\) falls from rest in air with quadratic drag coefficient \\(c=0.20\\,\\mathrm{kg/m}\\) and \\(g=9.8\\,\\mathrm{m/s^{2}}\\). Find the terminal speed, \\(v(t)\\), and the speed at \\(t=0.50\\,\\mathrm{s}\\).",
        "steps": [
          "终端速度：\\(v_t=\\sqrt{\\dfrac{mg}{c}}=\\sqrt{\\dfrac{(0.50)(9.8)}{0.20}}=\\sqrt{24.5}=4.95\\,\\mathrm{m/s}\\)。 · Terminal speed: \\(v_t=\\sqrt{\\dfrac{mg}{c}}=\\sqrt{\\dfrac{(0.50)(9.8)}{0.20}}=\\sqrt{24.5}=4.95\\,\\mathrm{m/s}\\).",
          "从静止释放：\\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\)。 · Released from rest: \\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\).",
          "\\(t=0.50\\,\\mathrm{s}\\)：\\(\\dfrac{gt}{v_t}=\\dfrac{(9.8)(0.50)}{4.95}=0.990\\)，\\(v=4.95\\tanh(0.990)=4.95(0.757)=3.75\\,\\mathrm{m/s}\\)。 · At \\(t=0.50\\,\\mathrm{s}\\): \\(\\dfrac{gt}{v_t}=\\dfrac{(9.8)(0.50)}{4.95}=0.990\\), so \\(v=4.95\\tanh(0.990)=4.95(0.757)=3.75\\,\\mathrm{m/s}\\)."
        ],
        "solution": "\\(v_t\\approx 5.0\\,\\mathrm{m/s}\\)，\\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\)，\\(v(0.50\\,\\mathrm{s})\\approx 3.8\\,\\mathrm{m/s}\\)。 · \\(v_t\\approx 5.0\\,\\mathrm{m/s}\\), \\(v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right)\\), and \\(v(0.50\\,\\mathrm{s})\\approx 3.8\\,\\mathrm{m/s}\\).",
        "solutionLatex": "v_t=\\sqrt{\\dfrac{mg}{c}}=4.95\\,\\mathrm{m\\,s^{-1}},\\qquad v(t)=v_t\\tanh\\left(\\dfrac{gt}{v_t}\\right),\\qquad v(0.50)=3.75\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 4 · 上抛后下落：阻力换向 · Example 4: Thrown upward, then falling: drag reverses",
        "prompt": "小球以初速度 \\(v_0\\) 竖直向上抛出，取向上为正，线性阻力系数为 \\(b\\)。写出上升阶段与下降阶段的运动方程，并说明为什么不能把阻力项始终写成同一个方向的恒力。 · A ball is thrown vertically upward with initial speed \\(v_0\\), with upward positive and linear drag coefficient \\(b\\). Write the equations for the upward and downward stages and explain why the drag cannot be treated as a constant force in one fixed direction.",
        "steps": [
          "上升阶段 \\(v>0\\)：重力向下，阻力也向下，\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\)。 · Going up, \\(v>0\\): gravity and drag both point down, so \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\).",
          "下降阶段 \\(v<0\\)：重力向下，阻力向上，但同一表达式仍给出 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\)，因为此时 \\(-bv>0\\)。 · Coming down, \\(v<0\\): gravity is down and drag is up, yet the same expression \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\) still works because \\(-bv>0\\).",
          "最高点 \\(v=0\\) 时阻力为零，只剩重力；若用大小 \\(b|v|\\) 写阻力，则必须显式加上与 \\(v\\) 相反的符号。 · At the top \\(v=0\\), drag is zero and only gravity acts; if drag is written with magnitude \\(b|v|\\), its direction opposite to \\(v\\) must be inserted explicitly."
        ],
        "solution": "用带符号速度时，一个方程 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\) 可贯穿全程；用阻力大小时必须分段换向。下降的终端速度为向下的 \\(\\dfrac{mg}{b}\\)。 · With signed velocity, one equation \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv\\) covers the whole motion; with drag magnitude, the direction must be switched piecewise. The downward terminal speed is \\(\\dfrac{mg}{b}\\).",
        "solutionLatex": "m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-mg-bv,\\qquad v<0:\\ -bv>0,\\qquad v_t=\\dfrac{mg}{b}\\ \\text{(downward)}"
      }
    ],
    "examTips": [
      "先定正方向，再写阻力符号；速度反向时重新检查每一项。 · Choose the positive direction first, then write the drag sign; recheck every term when velocity reverses.",
      "终端条件是 \\(a=0\\)，不是 \\(v=0\\)；令合力为零再解 \\(v_t\\)。 · The terminal condition is \\(a=0\\), not \\(v=0\\); set the net force to zero and solve for \\(v_t\\).",
      "线性与二次的 \\(v_t\\) 公式不同，用单位检查 \\(b\\)（kg/s）与 \\(c\\)（kg/m）。 · The linear and quadratic \\(v_t\\) formulas differ; use units of \\(b\\) (kg/s) and \\(c\\) (kg/m) to check.",
      "分离变量时把含 \\(v\\) 的项集中到一边，积分限从 \\(0\\) 到 \\(t\\)、从 \\(0\\) 到 \\(v\\)。 · In separation of variables, collect \\(v\\)-terms on one side and integrate from \\(0\\) to \\(t\\) and from \\(0\\) to \\(v\\).",
      "用 \\(t=0\\)、\\(t\\to\\infty\\) 和初始斜率 \\(g\\) 检验解；图像题要标出渐近线。 · Check the solution with \\(t=0\\), \\(t\\to\\infty\\), and initial slope \\(g\\); on graph questions, mark the asymptote.",
      "题目给出“达到 \\(0.90v_t\\)”这类条件时，先解指数或 \\(\\tanh\\) 方程，再代入时间常数。 · When a question gives a condition such as “reaches \\(0.90v_t\\),” solve the exponential or \\(\\tanh\\) equation first, then substitute the time constant."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-prep-math",
        "code": "P3.4",
        "title": "微分方程直觉 · Differential Equation Intuition",
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
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒 · Conservation of Energy",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "newton-incline",
        "title": "牛顿第二定律与斜面（阻力建模基础） · Newton's second law and incline (foundation for drag modeling)"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：牛顿第二定律给出 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{net}}\\)，阻力模型把它变成一阶微分方程。 · Upstream: Newton's second law gives \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{net}}\\), and a drag model turns it into a first-order differential equation.",
      "数学：分离变量、指数函数与双曲正切函数；终端速度对应 \\(t\\to\\infty\\) 的渐近线。 · Mathematics: separation of variables, exponentials, and hyperbolic tangent; terminal speed is the \\(t\\to\\infty\\) asymptote.",
      "下游：阻力做负功，机械能不守恒；终端速度用于雨滴、跳伞、沉降和黏性流体问题。 · Downstream: drag does negative work, so mechanical energy is not conserved; terminal speed appears in raindrop, skydiving, sedimentation, and viscous-fluid problems.",
      "跨学科：足球、自行车和降落伞的空气阻力常用二次模型；微小颗粒在液体中的沉降常用线性模型。 · Cross-disciplinary: air drag on balls, bicycles, and parachutes is often quadratic; tiny particles settling in a liquid are often modeled linearly."
    ],
    "intuitionDetailed": "先画受力图：重力向下，阻力向上，且阻力随速度增大。刚开始阻力很小，加速度接近 \\(g\\)；速度增大后阻力变大，加速度减小；当阻力等于重力时加速度为零，速度达到终端速度。线性模型的数学是“指数趋近”，二次模型是“双曲正切趋近”；两者都有水平渐近线，但二次模型在早期上升得更快。若物体被向上抛出，阻力先向下，过最高点后阻力向上，因此必须让阻力方向跟随速度，而不是固定不变。 · Start with a free-body diagram: weight down, drag up, with drag growing with speed. Initially drag is small and acceleration is close to \\(g\\); as speed grows, drag increases and acceleration decreases; when drag equals weight, acceleration is zero and speed reaches terminal velocity. The linear model approaches exponentially and the quadratic model approaches as a hyperbolic tangent; both have a horizontal asymptote, but the quadratic curve rises faster early on. If the object is thrown upward, drag first points down and then up after the top, so drag must follow the velocity direction rather than stay fixed.",
    "development": [
      "选择阻力模型并说明适用速度范围。 · Choose the drag model and state its speed range.",
      "画受力图，定正方向，写合外力与牛顿第二定律。 · Draw the free-body diagram, choose the positive direction, and write the net force and Newton's second law.",
      "把方程整理成一阶微分方程，判断能否分离变量。 · Rearrange into a first-order differential equation and decide whether it is separable.",
      "分离变量、积分并代入初始条件，得到 \\(v(t)\\)。 · Separate, integrate, and apply the initial condition to obtain \\(v(t)\\).",
      "令 \\(a=0\\) 求 \\(v_t\\)，再用图像、极限和初始斜率检验。 · Set \\(a=0\\) to find \\(v_t\\), then check with the graph, limits, and initial slope."
    ],
    "checks": [
      "终端速度对应 \\(a=0\\) 还是 \\(v=0\\)？为什么？ · Does terminal speed correspond to \\(a=0\\) or \\(v=0\\)? Why?",
      "若物体向上运动，二次阻力应写成 \\(-cv^{2}\\) 还是 \\(-c|v|v\\)？ · If the object moves upward, should quadratic drag be written \\(-cv^{2}\\) or \\(-c|v|v\\)?",
      "从 \\(v(t)\\) 的图像上，如何读出 \\(v_t\\) 和初始加速度？ · How do you read \\(v_t\\) and the initial acceleration from a \\(v(t)\\) graph?",
      "为什么线性解中的时间常数越大，趋近终端速度越慢？ · Why does a larger time constant in the linear solution mean a slower approach to terminal speed?"
    ],
    "vocabulary": [
      {
        "termZh": "阻力",
        "termEn": "resistive force / drag",
        "defZh": "方向与速度相反、大小通常随速度增大的力。",
        "defEn": "A force opposite the velocity whose magnitude usually grows with speed."
      },
      {
        "termZh": "线性阻力",
        "termEn": "linear drag",
        "defZh": "与速度一次方成正比的阻力，\\(F_r=-bv\\)。",
        "defEn": "Drag proportional to the first power of speed, \\(F_r=-bv\\)."
      },
      {
        "termZh": "二次阻力",
        "termEn": "quadratic drag",
        "defZh": "与速度平方成正比的阻力，一维中写作 \\(F_r=-c|v|v\\)。",
        "defEn": "Drag proportional to the square of speed, written \\(F_r=-c|v|v\\) in one dimension."
      },
      {
        "termZh": "终端速度",
        "termEn": "terminal velocity",
        "defZh": "恒定驱动力与阻力等大反向时达到的最大速度。",
        "defEn": "The maximum speed reached when a constant driving force is balanced by drag."
      },
      {
        "termZh": "时间常数",
        "termEn": "time constant",
        "defZh": "线性阻力下 \\(\\tau=\\dfrac{m}{b}\\)，描述速度趋近终端速度的快慢。",
        "defEn": "For linear drag, \\(\\tau=\\dfrac{m}{b}\\), describing how quickly the speed approaches terminal velocity."
      },
      {
        "termZh": "分离变量",
        "termEn": "separation of variables",
        "defZh": "把微分方程两边的变量分开后分别积分的方法。",
        "defEn": "A method that separates the variables on the two sides of a differential equation before integrating."
      },
      {
        "termZh": "渐近线",
        "termEn": "asymptote",
        "defZh": "曲线无限接近但一般不相交的直线；\\(v\\)–\\(t\\) 图中的 \\(v=v_t\\) 就是水平渐近线。",
        "defEn": "A line that a curve approaches without generally crossing; \\(v=v_t\\) is the horizontal asymptote of the \\(v\\)–\\(t\\) graph."
      }
    ]
  },
  "2.8": {
    "id": "mech/mech-u2/2.8",
    "subject": "mech",
    "chapterId": "mech-u2",
    "unitCode": "2",
    "unitTitleZh": "力与平动动力学",
    "unitTitleEn": "Force and Translational Dynamics",
    "code": "2.8",
    "titleZh": "弹簧力与非理想弹簧",
    "titleEn": "Spring Forces and Nonideal Springs",
    "layer": "ap",
    "summary": "理想弹簧服从胡克定律且力总指向平衡位置；非理想弹簧的 \\(F(x)\\) 不线性，必须读图或积分，不能盲目套用 \\(F=-kx\\) 与 \\(U=\\dfrac{1}{2}kx^{2}\\)。 · An ideal spring obeys Hooke's law with a force always toward equilibrium; a nonideal spring has a nonlinear \\(F(x)\\), so read the graph or integrate instead of blindly using \\(F=-kx\\) and \\(U=\\dfrac{1}{2}kx^{2}\\).",
    "learningObjectives": [
      "能描述理想弹簧的力：大小与形变成正比，方向总指向平衡位置。 · Describe the force of an ideal spring: magnitude proportional to deformation and direction always toward equilibrium.",
      "能计算串联与并联弹簧的等效劲度系数，并判断等效劲度变大还是变小。 · Calculate the equivalent spring constant for series and parallel combinations and decide whether it increases or decreases.",
      "能从非线性 \\(F\\)–\\(x\\) 图像读出给定形变下的力，并说明为什么不能用 \\(F=-kx\\) 或 \\(\\dfrac{1}{2}kx^{2}\\)。 · Read the force at a given deformation from a nonlinear \\(F\\)–\\(x\\) graph and explain why \\(F=-kx\\) or \\(\\dfrac{1}{2}kx^{2}\\) no longer applies.",
      "能画拉伸与压缩时的弹簧受力图，并正确标出弹簧对物体的力。 · Draw free-body diagrams for stretched and compressed springs and correctly show the force exerted on the object."
    ],
    "essentialKnowledge": [
      "理想弹簧质量可忽略，力与“相对自然长度的形变”成正比，且总指向平衡位置。 · An ideal spring has negligible mass, exerts a force proportional to the change from its relaxed length, and always points toward equilibrium.",
      "胡克定律：\\(F_s=-k\\Delta x\\)（或 \\(F=-kx\\)，\\(x\\) 从平衡位置量起）；大小 \\(F_s=k|\\Delta x|\\)。 · Hooke's law: \\(F_s=-k\\Delta x\\) (or \\(F=-kx\\) with \\(x\\) measured from equilibrium); magnitude \\(F_s=k|\\Delta x|\\).",
      "非理想弹簧要么质量不可忽略，要么力不与形变成正比；例如 \\(F_x=-(kx+\\beta x^{3})\\)。 · A nonideal spring either has nonnegligible mass or a force not proportional to deformation; for example \\(F_x=-(kx+\\beta x^{3})\\).",
      "对非理想弹簧，\\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) 一般不是势能；势能必须由 \\(F(x)\\) 积分得到。 · For a nonideal spring, \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) is generally not the potential energy; the potential energy must be obtained by integrating \\(F(x)\\).",
      "串联：\\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}\\)，等效劲度小于最小的单个劲度；并联：\\(k_{\\mathrm{eq}}=k_1+k_2\\)。 · Series: \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}\\), so the equivalent constant is smaller than the smallest individual constant; parallel: \\(k_{\\mathrm{eq}}=k_1+k_2\\).",
      "串联时各弹簧受力大小相同、形变相加；并联时各弹簧形变相同、力相加。 · In series, each spring feels the same force and the deformations add; in parallel, each spring has the same deformation and the forces add.",
      "弹簧对物体的力总指向平衡位置；拉伸时拉回，压缩时推回。 · The spring force on the object always points toward equilibrium: it pulls back when stretched and pushes back when compressed.",
      "在 \\(F\\)–\\(x\\) 图上，理想弹簧是一条过原点的直线，斜率 \\(-k\\)；非线性弹簧是曲线，给定 \\(x\\) 处的力要读纵坐标，局部劲度要读切线斜率。 · On an \\(F\\)–\\(x\\) graph, an ideal spring is a straight line through the origin with slope \\(-k\\); a nonlinear spring is curved, so read the force from the vertical coordinate and the local stiffness from the tangent slope."
    ],
    "definition": "弹簧力是弹簧因形变而对物体施加的接触力。理想弹簧模型要求弹簧质量可忽略、形变在弹性范围内，并且力与相对自然长度的形变成正比：\\(F_s=-k\\Delta x\\)，负号表示力总指向平衡位置。非理想弹簧（nonideal spring，亦写作 non-ideal spring）则要么质量不可忽略，要么力与形变不成正比，例如 \\(F_x=-(kx+\\beta x^{3})\\)；这时胡克定律和 \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) 都不能直接套用。 · A spring force is the contact force a spring exerts on an object because of its deformation. The ideal-spring model assumes negligible spring mass, deformation within the elastic range, and a force proportional to the change from the relaxed length: \\(F_s=-k\\Delta x\\), where the minus sign means the force points toward equilibrium. A nonideal spring either has nonnegligible mass or a force not proportional to deformation, such as \\(F_x=-(kx+\\beta x^{3})\\); then Hooke's law and \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) cannot be used directly.",
    "intuition": "把弹簧想成一根“记得自己自然长度”的弹簧：你拉长它，它往回拉；你压缩它，它往回推；形变越大，力越大。理想弹簧的 \\(F\\)–\\(x\\) 图是一条直线，所以“斜率”就是劲度；非理想弹簧的图是弯的，同样的形变可能对应更大的力，局部斜率也会随位置改变。 · Think of a spring as remembering its relaxed length: stretch it and it pulls back; compress it and it pushes back; the larger the deformation, the larger the force. An ideal spring has a straight \\(F\\)–\\(x\\) graph, so its slope is the spring constant; a nonideal spring has a curved graph, so the same deformation may give a larger force and the local slope changes with position.",
    "formulas": [
      {
        "latex": "\\vec F_s=-k\\Delta\\vec x",
        "note": "胡克定律；\\(\\Delta x\\) 从自然长度量起，负号表示指向平衡位置。 · Hooke's law; \\(\\Delta x\\) is measured from the relaxed length and the minus sign points toward equilibrium."
      },
      {
        "latex": "F_s=k|\\Delta x|",
        "note": "弹簧力的大小；拉伸与压缩都取形变大小。 · Magnitude of the spring force; use the magnitude of deformation for both stretch and compression."
      },
      {
        "latex": "\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}",
        "note": "两个弹簧串联；等效劲度小于任一单个劲度。 · Two springs in series; the equivalent constant is smaller than either individual constant."
      },
      {
        "latex": "k_{\\mathrm{eq}}=k_1+k_2",
        "note": "两个弹簧并联；等效劲度为两者之和。 · Two springs in parallel; the equivalent constant is the sum."
      },
      {
        "latex": "k_{\\mathrm{eq}}=\\dfrac{k_1k_2}{k_1+k_2}",
        "note": "两个弹簧串联的等价写法（仅两个弹簧）。 · Equivalent two-spring series form (two springs only)."
      },
      {
        "latex": "F_x=-(kx+\\beta x^{3})",
        "note": "非理想弹簧的一个具体模型；\\(\\beta\\) 项破坏线性。 · A concrete nonideal-spring model; the \\(\\beta\\) term breaks linearity."
      },
      {
        "latex": "U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
        "note": "上述非理想弹簧的势能（取 \\(U(0)=0\\)）；不能只用 \\(\\dfrac{1}{2}kx^{2}\\)。 · Potential energy for the nonideal spring above with \\(U(0)=0\\); \\(\\dfrac{1}{2}kx^{2}\\) alone is not enough."
      }
    ],
    "derivationNotes": [
      {
        "from": "胡克定律 · Hooke's law",
        "to": "受力图 · Free-body diagram",
        "note": "弹簧对物体的力沿弹簧方向指向平衡位置；拉伸与压缩时方向相反。 · The spring force on the object points along the spring toward equilibrium; its direction reverses between stretch and compression."
      },
      {
        "from": "串联：同一力、形变相加 · Series: same force, deformations add",
        "to": "等效劲度 · Equivalent constant",
        "note": "\\(\\Delta x=\\Delta x_1+\\Delta x_2=\\dfrac{F}{k_1}+\\dfrac{F}{k_2}\\)，故 \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}\\)。 · \\(\\Delta x=\\Delta x_1+\\Delta x_2=\\dfrac{F}{k_1}+\\dfrac{F}{k_2}\\), hence \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{k_1}+\\dfrac{1}{k_2}\\)."
      },
      {
        "from": "并联：同一形变、力相加 · Parallel: same deformation, forces add",
        "to": "等效劲度 · Equivalent constant",
        "note": "\\(F=F_1+F_2=(k_1+k_2)\\Delta x\\)，故 \\(k_{\\mathrm{eq}}=k_1+k_2\\)。 · \\(F=F_1+F_2=(k_1+k_2)\\Delta x\\), hence \\(k_{\\mathrm{eq}}=k_1+k_2\\)."
      },
      {
        "from": "非理想力 \\(F(x)\\) · Nonideal force \\(F(x)\\)",
        "to": "势能 · Potential energy",
        "note": "\\(U(x)=-\\int F_x\\,\\mathrm{d}x\\)；对 \\(F_x=-(kx+\\beta x^{3})\\) 积分得 \\(\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}\\)。 · \\(U(x)=-\\int F_x\\,\\mathrm{d}x\\); integrating \\(F_x=-(kx+\\beta x^{3})\\) gives \\(\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}\\)."
      }
    ],
    "conditions": [
      "理想弹簧：质量可忽略、线性弹性、无形变滞后，且形变在弹性限度内。 · Ideal spring: negligible mass, linear elasticity, no hysteresis, and deformation within the elastic limit.",
      "\\(\\Delta x\\) 必须从自然长度量起，不是弹簧的总长度。 · \\(\\Delta x\\) must be measured from the relaxed length, not the total length of the spring.",
      "串并联公式假设弹簧理想、质量可忽略，并且系统只由纯串联或纯并联组成；AP C 不要求混合串并联。 · The series/parallel formulas assume ideal, massless springs and a purely series or purely parallel arrangement; AP C does not require mixed series-parallel combinations.",
      "非理想弹簧的 \\(F(x)\\) 必须由题目给出或实验测得；\\(\\beta\\) 可正可负，模型只在给定范围内有效。 · The nonideal \\(F(x)\\) must be given or measured; \\(\\beta\\) may be positive or negative, and the model is valid only over the stated range.",
      "弹簧力方向始终指向平衡位置；若弹簧有质量，弹簧内部各点的力不再相同。 · The spring force always points toward equilibrium; if the spring has mass, the force is no longer the same at every point along it."
    ],
    "keyPoints": [
      "胡克定律只适用于理想弹簧，且 \\(x\\) 从平衡位置量起。 · Hooke's law applies only to an ideal spring, with \\(x\\) measured from equilibrium.",
      "弹簧力总指向平衡位置：拉伸时拉回，压缩时推回。 · The spring force always points toward equilibrium: pull back when stretched, push back when compressed.",
      "串联等效劲度变小，并联等效劲度变大。 · Series lowers the equivalent spring constant; parallel raises it.",
      "非线性弹簧的力要读 \\(F\\)–\\(x\\) 图，局部劲度是切线斜率的绝对值。 · For a nonlinear spring, read the force from the \\(F\\)–\\(x\\) graph and take the local stiffness as the absolute value of the tangent slope.",
      "非理想弹簧的势能不能直接用 \\(\\dfrac{1}{2}kx^{2}\\)，必须积分 \\(F(x)\\)。 · The potential energy of a nonideal spring cannot be taken as \\(\\dfrac{1}{2}kx^{2}\\); integrate \\(F(x)\\) instead.",
      "弹簧对物体的力与物体对弹簧的力是一对作用力—反作用力，作用在不同物体上。 · The force of the spring on the object and the force of the object on the spring are an action–reaction pair acting on different objects."
    ],
    "misconceptions": [
      "把 \\(\\Delta x\\) 当成弹簧的总长度，而不是相对自然长度的变化。 · Treating \\(\\Delta x\\) as the total length of the spring rather than the change from its relaxed length.",
      "认为弹簧力总与运动方向相反；实际上它总指向平衡位置，可以与运动方向相同或相反。 · Thinking the spring force always opposes motion; it actually points toward equilibrium and may be with or against the motion.",
      "拉伸和压缩时忘记弹簧力的方向会反转。 · Forgetting that the spring force reverses direction between stretch and compression.",
      "对非线性弹簧继续使用 \\(F=-kx\\) 或 \\(U=\\dfrac{1}{2}kx^{2}\\)。 · Continuing to use \\(F=-kx\\) or \\(U=\\dfrac{1}{2}kx^{2}\\) for a nonlinear spring.",
      "串联时把劲度直接相加，或并联时把劲度取倒数相加。 · Adding spring constants directly for series, or adding reciprocals for parallel.",
      "认为并联后的等效劲度小于单个弹簧；并联是“共同分担形变”，等效劲度变大。 · Thinking a parallel combination has a smaller equivalent constant; parallel springs share the same deformation, so the equivalent constant is larger.",
      "忽略弹簧质量却同时使用非理想弹簧模型，导致模型自相矛盾。 · Ignoring spring mass while also invoking a nonideal-spring model, which makes the model inconsistent."
    ],
    "examples": [
      {
        "title": "例 1 · 串联与并联的等效劲度 · Example 1: Equivalent constant in series and parallel",
        "prompt": "两个理想弹簧 \\(k_1=200\\,\\mathrm{N/m}\\)、\\(k_2=300\\,\\mathrm{N/m}\\)。分别求串联与并联时的等效劲度。 · Two ideal springs have \\(k_1=200\\,\\mathrm{N/m}\\) and \\(k_2=300\\,\\mathrm{N/m}\\). Find the equivalent spring constant in series and in parallel.",
        "steps": [
          "串联：\\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{200}+\\dfrac{1}{300}=\\dfrac{5}{600}\\)，所以 \\(k_{\\mathrm{eq}}=120\\,\\mathrm{N/m}\\)。 · Series: \\(\\dfrac{1}{k_{\\mathrm{eq}}}=\\dfrac{1}{200}+\\dfrac{1}{300}=\\dfrac{5}{600}\\), so \\(k_{\\mathrm{eq}}=120\\,\\mathrm{N/m}\\).",
          "并联：\\(k_{\\mathrm{eq}}=200+300=500\\,\\mathrm{N/m}\\)。 · Parallel: \\(k_{\\mathrm{eq}}=200+300=500\\,\\mathrm{N/m}\\).",
          "检查：串联结果 \\(120<200\\)，并联结果 \\(500>300\\)，符合“串联变小、并联变大”。 · Check: the series result \\(120<200\\) and the parallel result \\(500>300\\), consistent with “series smaller, parallel larger.”"
        ],
        "solution": "串联 \\(120\\,\\mathrm{N/m}\\)，并联 \\(500\\,\\mathrm{N/m}\\)。 · Series \\(120\\,\\mathrm{N/m}\\), parallel \\(500\\,\\mathrm{N/m}\\).",
        "solutionLatex": "k_{\\mathrm{eq,series}}=\\dfrac{(200)(300)}{200+300}=120\\,\\mathrm{N\\,m^{-1}},\\qquad k_{\\mathrm{eq,parallel}}=200+300=500\\,\\mathrm{N\\,m^{-1}}"
      },
      {
        "title": "例 2 · 非线性弹簧的力与势能 · Example 2: Force and potential energy of a nonlinear spring",
        "prompt": "某非理想弹簧的力为 \\(F_x=-(800x+2000x^{3})\\,\\mathrm{N}\\)，\\(x\\) 以 m 为单位。求 \\(x=0.10\\,\\mathrm{m}\\) 时的弹簧力，并求从 \\(0\\) 到 \\(0.10\\,\\mathrm{m}\\) 弹簧势能的变化。 · A nonideal spring exerts \\(F_x=-(800x+2000x^{3})\\,\\mathrm{N}\\) with \\(x\\) in meters. Find the spring force at \\(x=0.10\\,\\mathrm{m}\\) and the change in spring potential energy from \\(0\\) to \\(0.10\\,\\mathrm{m}\\).",
        "steps": [
          "代入 \\(x=0.10\\)：\\(F_x=-[800(0.10)+2000(0.10)^{3}]=-(80+2.0)=-82\\,\\mathrm{N}\\)。 · Substitute \\(x=0.10\\): \\(F_x=-[800(0.10)+2000(0.10)^{3}]=-(80+2.0)=-82\\,\\mathrm{N}\\).",
          "势能变化 \\(\\Delta U=-\\int_0^{0.10}F_x\\,\\mathrm{d}x=\\int_0^{0.10}(800x+2000x^{3})\\,\\mathrm{d}x\\)。 · Potential-energy change \\(\\Delta U=-\\int_0^{0.10}F_x\\,\\mathrm{d}x=\\int_0^{0.10}(800x+2000x^{3})\\,\\mathrm{d}x\\).",
          "\\(\\Delta U=\\left[400x^{2}+500x^{4}\\right]_0^{0.10}=4.0+0.050=4.05\\,\\mathrm{J}\\)。 · \\(\\Delta U=\\left[400x^{2}+500x^{4}\\right]_0^{0.10}=4.0+0.050=4.05\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(F_x(0.10)=-82\\,\\mathrm{N}\\)（指向平衡位置），\\(\\Delta U=4.05\\,\\mathrm{J}\\)。 · \\(F_x(0.10)=-82\\,\\mathrm{N}\\) (toward equilibrium) and \\(\\Delta U=4.05\\,\\mathrm{J}\\).",
        "solutionLatex": "F_x(0.10)=-82\\,\\mathrm{N},\\qquad \\Delta U=\\int_0^{0.10}(800x+2000x^{3})\\,\\mathrm{d}x=4.05\\,\\mathrm{J}"
      },
      {
        "title": "例 3 · 拉伸与压缩的受力图 · Example 3: Free-body diagrams for stretch and compression",
        "prompt": "水平弹簧左端固定，右端连接物块，弹簧劲度 \\(k=500\\,\\mathrm{N/m}\\)。分别讨论弹簧被拉伸 \\(0.040\\,\\mathrm{m}\\) 与被压缩 \\(0.040\\,\\mathrm{m}\\) 时，弹簧对物块的力。 · A horizontal spring is fixed at its left end and attached to a block at its right end, with \\(k=500\\,\\mathrm{N/m}\\). Discuss the force on the block when the spring is stretched by \\(0.040\\,\\mathrm{m}\\) and when it is compressed by \\(0.040\\,\\mathrm{m}\\).",
        "steps": [
          "拉伸时，物块离平衡位置更远，弹簧把物块拉回平衡位置（向左），大小 \\(F=k(0.040)=20\\,\\mathrm{N}\\)。 · When stretched, the block is farther from equilibrium and the spring pulls it back toward equilibrium (to the left) with magnitude \\(F=k(0.040)=20\\,\\mathrm{N}\\).",
          "压缩时，物块在平衡位置另一侧，弹簧把物块推回平衡位置（向右），大小仍为 \\(20\\,\\mathrm{N}\\)。 · When compressed, the block is on the other side of equilibrium and the spring pushes it back toward equilibrium (to the right), again with magnitude \\(20\\,\\mathrm{N}\\).",
          "两种情况下力的方向都指向平衡位置，而不是“总与速度相反”。 · In both cases the force points toward equilibrium, not necessarily opposite the velocity."
        ],
        "solution": "拉伸：\\(20\\,\\mathrm{N}\\) 向左；压缩：\\(20\\,\\mathrm{N}\\) 向右。 · Stretched: \\(20\\,\\mathrm{N}\\) to the left; compressed: \\(20\\,\\mathrm{N}\\) to the right.",
        "solutionLatex": "|F_s|=k|\\Delta x|=(500)(0.040)=20\\,\\mathrm{N},\\qquad \\vec F_s\\ \\text{toward equilibrium}"
      },
      {
        "title": "例 4 · 由斜率求局部劲度 · Example 4: Local stiffness from the tangent slope",
        "prompt": "对例 2 的非线性弹簧，求 \\(x=0.10\\,\\mathrm{m}\\) 处的局部劲度 \\(k_{\\mathrm{loc}}=-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}\\)，并与理想弹簧的 \\(800\\,\\mathrm{N/m}\\) 比较。 · For the nonlinear spring of Example 2, find the local stiffness \\(k_{\\mathrm{loc}}=-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}\\) at \\(x=0.10\\,\\mathrm{m}\\) and compare it with the ideal-spring value \\(800\\,\\mathrm{N/m}\\).",
        "steps": [
          "\\(F_x=-(800x+2000x^{3})\\)，所以 \\(-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}=800+6000x^{2}\\)。 · \\(F_x=-(800x+2000x^{3})\\), so \\(-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}=800+6000x^{2}\\).",
          "在 \\(x=0.10\\)：\\(k_{\\mathrm{loc}}=800+6000(0.010)=860\\,\\mathrm{N/m}\\)。 · At \\(x=0.10\\): \\(k_{\\mathrm{loc}}=800+6000(0.010)=860\\,\\mathrm{N/m}\\).",
          "局部劲度比线性项大约 \\(7.5\\%\\)，说明 \\(F\\)–\\(x\\) 曲线在该处已经明显偏离直线。 · The local stiffness is about \\(7.5\\%\\) larger than the linear term, so the \\(F\\)–\\(x\\) curve has visibly departed from a straight line there."
        ],
        "solution": "\\(k_{\\mathrm{loc}}(0.10)=860\\,\\mathrm{N/m}\\)，大于 \\(800\\,\\mathrm{N/m}\\)。 · \\(k_{\\mathrm{loc}}(0.10)=860\\,\\mathrm{N/m}\\), larger than \\(800\\,\\mathrm{N/m}\\).",
        "solutionLatex": "k_{\\mathrm{loc}}=-\\dfrac{\\mathrm{d}F_x}{\\mathrm{d}x}=800+6000x^{2}\\Big|_{x=0.10}=860\\,\\mathrm{N\\,m^{-1}}"
      }
    ],
    "examTips": [
      "先判断是不是理想弹簧；题目给出非线性 \\(F(x)\\) 时，胡克定律不再自动成立。 · First decide whether the spring is ideal; if a nonlinear \\(F(x)\\) is given, Hooke's law no longer applies automatically.",
      "受力图只画“弹簧对物体”的力，方向指向平衡位置；不要把它和物体对弹簧的力画在同一物体上。 · On a free-body diagram, draw only the force of the spring on the object, toward equilibrium; do not put the object-on-spring force on the same object.",
      "串联“同一力、形变相加”，并联“同一形变、力相加”，用这两句话代替死记公式。 · Use “series: same force, deformations add” and “parallel: same deformation, forces add” instead of memorizing blindly.",
      "非理想弹簧的势能要用积分，不能用 \\(\\dfrac{1}{2}kx^{2}\\)；若只求功，可用 \\(F\\)–\\(x\\) 图面积。 · For a nonideal spring, integrate to get potential energy; do not use \\(\\dfrac{1}{2}kx^{2}\\). If only work is asked, use the area under the \\(F\\)–\\(x\\) graph.",
      "读图题先看坐标轴单位与曲线是否过原点；局部劲度是切线斜率的绝对值。 · On graph questions, check axis units and whether the curve passes through the origin; local stiffness is the absolute value of the tangent slope."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.3",
        "title": "牛顿第一与第二定律 · Newton's Laws of Motion: First and Second Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.5",
        "title": "变力做功与势能函数 · Work by Variable Forces and Potential Energy Functions",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u7",
        "code": "7.1",
        "title": "周期运动 · Periodic Motion",
        "relation": "相关 · related"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能 · Forces and Potential Energy",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "shm",
        "title": "简谐振动（理想弹簧） · Simple harmonic motion (ideal spring)"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u2",
    "connections": [
      "上游：牛顿第三定律说明弹簧与物体之间的力成对出现；受力图只画弹簧对物体的力。 · Upstream: Newton's third law pairs the forces between spring and object; a free-body diagram shows only the force of the spring on the object.",
      "下游：弹簧势能与变力做功把 \\(F(x)\\) 与 \\(U(x)\\) 连接起来，见 3.5；理想弹簧的线性回复力导致简谐振动。 · Downstream: spring potential energy and variable-force work connect \\(F(x)\\) to \\(U(x)\\), as in 3.5; the linear restoring force of an ideal spring leads to simple harmonic motion.",
      "工程：串联弹簧用于减震与悬挂，并联弹簧用于增加刚度；非理想弹簧常见于橡胶、泡沫和超弹性材料。 · Engineering: series springs appear in suspension and shock absorption, parallel springs increase stiffness, and nonideal springs appear in rubber, foam, and hyperelastic materials.",
      "跨学科：生物组织、肌腱和血管壁的力—伸长曲线通常是非线性的，不能只用单一 \\(k\\) 描述。 · Cross-disciplinary: force–extension curves of biological tissues, tendons, and blood-vessel walls are usually nonlinear and cannot be described by a single \\(k\\)."
    ],
    "intuitionDetailed": "先抓住“平衡位置”这个基准：弹簧的力不是由它有多长决定，而是由它比自然长度长了或短了多少决定。理想弹簧的 \\(F\\)–\\(x\\) 图是直线，所以 \\(k\\) 是常数；非理想弹簧的图弯了，同样的形变可能产生更大的力，曲线越陡表示局部越硬。串联时两个弹簧分担同一个力，形变却相加，所以整体更“软”；并联时两个弹簧被迫有相同形变，力相加，所以整体更“硬”。 · Anchor everything to the equilibrium position: the spring force depends not on how long the spring is, but on how much longer or shorter it is than its relaxed length. An ideal spring has a straight \\(F\\)–\\(x\\) graph, so \\(k\\) is constant; a nonideal spring has a curved graph, the same deformation may produce a larger force, and a steeper curve means greater local stiffness. In series the springs share the same force while their deformations add, so the combination is softer; in parallel they share the same deformation while their forces add, so the combination is stiffer.",
    "development": [
      "先判断弹簧是否理想，并明确自然长度与平衡位置。 · Decide whether the spring is ideal and identify the relaxed length and equilibrium position.",
      "画受力图：只看弹簧对物体的力，标出方向与形变。 · Draw the free-body diagram: only the spring force on the object, with its direction and deformation.",
      "理想弹簧用 \\(F=-kx\\)；非理想弹簧读图或使用给定的 \\(F(x)\\)。 · Use \\(F=-kx\\) for an ideal spring; read the graph or use the given \\(F(x)\\) for a nonideal spring.",
      "串并联先判断“同一力”还是“同一形变”，再写等效劲度。 · For series and parallel, decide “same force” or “same deformation” before writing the equivalent constant.",
      "若要求能量，对 \\(F(x)\\) 积分；不要对非理想弹簧直接套用 \\(\\dfrac{1}{2}kx^{2}\\)。 · If energy is needed, integrate \\(F(x)\\); do not apply \\(\\dfrac{1}{2}kx^{2}\\) directly to a nonideal spring."
    ],
    "checks": [
      "弹簧被压缩时，弹簧对物体的力指向哪边？为什么？ · When the spring is compressed, which way does the spring force on the object point? Why?",
      "两个弹簧串联后，等效劲度比最小的那个大还是小？ · After two springs are connected in series, is the equivalent constant larger or smaller than the smallest one?",
      "非线性弹簧的 \\(F\\)–\\(x\\) 图不过原点或不是直线时，哪些公式不能直接使用？ · If a nonlinear spring's \\(F\\)–\\(x\\) graph is not a straight line through the origin, which formulas can no longer be used directly?",
      "如何从 \\(F\\)–\\(x\\) 图的切线求某一点的局部劲度？ · How do you find the local stiffness at a point from the tangent to an \\(F\\)–\\(x\\) graph?"
    ],
    "vocabulary": [
      {
        "termZh": "理想弹簧",
        "termEn": "ideal spring",
        "defZh": "质量可忽略、力与形变成正比且无滞后的弹簧模型。",
        "defEn": "A spring model with negligible mass, force proportional to deformation, and no hysteresis."
      },
      {
        "termZh": "胡克定律",
        "termEn": "Hooke's law",
        "defZh": "理想弹簧的力与相对自然长度的形变成正比：\\(F_s=-k\\Delta x\\)。",
        "defEn": "For an ideal spring, force is proportional to the change from the relaxed length: \\(F_s=-k\\Delta x\\)."
      },
      {
        "termZh": "劲度系数",
        "termEn": "spring constant",
        "defZh": "描述弹簧软硬的量，单位 N/m；越大表示同样形变需要越大的力。",
        "defEn": "A measure of spring stiffness in N/m; a larger value means a larger force for the same deformation."
      },
      {
        "termZh": "非理想弹簧",
        "termEn": "nonideal spring",
        "defZh": "质量不可忽略，或力与形变不成正比的弹簧。",
        "defEn": "A spring with nonnegligible mass or a force not proportional to deformation."
      },
      {
        "termZh": "非线性弹簧",
        "termEn": "nonlinear spring",
        "defZh": "\\(F\\)–\\(x\\) 图像不是过原点直线的弹簧，例如 \\(F_x=-(kx+\\beta x^{3})\\)。",
        "defEn": "A spring whose \\(F\\)–\\(x\\) graph is not a straight line through the origin, such as \\(F_x=-(kx+\\beta x^{3})\\)."
      },
      {
        "termZh": "等效劲度系数",
        "termEn": "equivalent spring constant",
        "defZh": "把弹簧组合看成一个弹簧时，具有相同力—形变关系的劲度。",
        "defEn": "The single spring constant that gives the same force–deformation relation as a combination of springs."
      },
      {
        "termZh": "串联",
        "termEn": "series",
        "defZh": "弹簧首尾相接，各弹簧受力相同、形变相加。",
        "defEn": "Springs end to end, so each feels the same force and their deformations add."
      },
      {
        "termZh": "并联",
        "termEn": "parallel",
        "defZh": "弹簧并排连接，各弹簧形变相同、力相加。",
        "defEn": "Springs side by side, so each has the same deformation and their forces add."
      }
    ]
  }
};
