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
    "summary": "牛顿第三定律 · Newton's Laws of Motion: Third Law",
    "learningObjectives": [
      "能陈述「牛顿第三定律」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Newton's Laws of Motion: Third Law：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "牛顿第三定律（Newton's Laws of Motion: Third Law）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「牛顿第三定律」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec F_{AB}=-\\vec F_{BA}",
        "note": "牛顿第三定律：作用力与反作用力。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「牛顿第三定律」的工作方程或机制链。"
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
      "作用力与反作用力作用在不同物体上",
      "同时产生、同时消失，不能相互抵消",
      "适用于接触力与场力"
    ],
    "keyPoints": [
      "掌握 2.5「牛顿第三定律」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「牛顿第三定律」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「牛顿第三定律」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\vec F_{AB}=-\\vec F_{BA}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「牛顿第三定律」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「牛顿第三定律」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「牛顿第三定律」；用斜线分式代替叠式分式导致歧义"
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
        "code": "2.4",
        "title": "圆周运动",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u2",
        "code": "2.6",
        "title": "万有引力",
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
    "intuitionDetailed": "把「牛顿第三定律」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「牛顿第三定律」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「牛顿第三定律」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
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
    "summary": "万有引力 · Gravitation",
    "learningObjectives": [
      "能陈述「万有引力」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Gravitation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "万有引力（Gravitation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「万有引力」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "F=G\\dfrac{m_1m_2}{r^{2}}",
        "note": "万有引力定律。"
      },
      {
        "latex": "g=\\dfrac{GM}{r^{2}}",
        "note": "引力场强度或重力加速度。"
      },
      {
        "latex": "U=-\\dfrac{GMm}{r}",
        "note": "引力势能；零势能取在无穷远。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「万有引力」的工作方程或机制链。"
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
      "质点或球对称质量分布；r 为质心距离",
      "G = 6.67×10⁻¹¹ N·m²/kg²",
      "零势能取无穷远；负号表示引力"
    ],
    "keyPoints": [
      "掌握 2.6「万有引力」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「万有引力」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「万有引力」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "F=G\\dfrac{m_1m_2}{r^{2}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「万有引力」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「万有引力」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「万有引力」；用斜线分式代替叠式分式导致歧义"
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
        "code": "2.5",
        "title": "牛顿第三定律",
        "relation": "prerequisite"
      }
    ],
    "modules": [
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
    "intuitionDetailed": "把「万有引力」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「万有引力」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「万有引力」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
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
