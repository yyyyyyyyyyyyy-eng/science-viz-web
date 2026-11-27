export const UNIT = {
  "id": "bio-u4",
  "code": "4",
  "titleZh": "细胞通讯与细胞周期",
  "titleEn": "Cell Communication and Cell Cycle",
  "subject": "bio",
  "layer": "ap"
};
export const TOPICS = {
  "4.1": {
    "id": "bio/bio-u4/4.1",
    "subject": "bio",
    "chapterId": "bio-u4",
    "unitCode": "4",
    "unitTitleZh": "细胞通讯与细胞周期",
    "unitTitleEn": "Cell Communication and Cell Cycle",
    "code": "4.1",
    "titleZh": "细胞通讯",
    "titleEn": "Cell Communication",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "配体",
        "termEn": "ligand",
        "defZh": "与受体特异性结合的信号分子。",
        "defEn": "A signaling molecule that binds a receptor specifically."
      },
      {
        "termZh": "受体",
        "termEn": "receptor",
        "defZh": "识别配体并启动细胞响应的蛋白质。",
        "defEn": "A protein that recognizes a ligand and starts a cellular response."
      },
      {
        "termZh": "自分泌",
        "termEn": "autocrine signaling",
        "defZh": "细胞释放的信号作用于自身。",
        "defEn": "A cell releases a signal that acts on itself."
      },
      {
        "termZh": "旁分泌",
        "termEn": "paracrine signaling",
        "defZh": "信号作用于附近细胞，不经血液长距离运输。",
        "defEn": "A signal acts on nearby cells and is not carried a long distance in the blood."
      },
      {
        "termZh": "内分泌",
        "termEn": "endocrine signaling",
        "defZh": "激素经血液到达远处靶细胞。",
        "defEn": "A hormone travels in the blood to distant target cells."
      }
    ],
    "summary": "细胞通讯 · Cell Communication",
    "learningObjectives": [
      "能陈述「细胞通讯」的准确定义与适用对象 · State the precise definition of Cell Communication and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Cell Communication：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「细胞通讯」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "细胞通讯（Cell Communication）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「细胞通讯」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}",
        "note": "生物题以机制链条为主。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「细胞通讯」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.1「细胞通讯」准确定义 · State the precise definition of 4.1 Cell Communication.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「细胞通讯」的结论 · Applying the conclusion of Cell Communication when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「细胞通讯」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「细胞通讯」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「细胞通讯」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「细胞通讯」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.2",
        "title": "信号转导导论",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「细胞通讯」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「细胞通讯」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「细胞通讯」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "4.2": {
    "id": "bio/bio-u4/4.2",
    "subject": "bio",
    "chapterId": "bio-u4",
    "unitCode": "4",
    "unitTitleZh": "细胞通讯与细胞周期",
    "unitTitleEn": "Cell Communication and Cell Cycle",
    "code": "4.2",
    "titleZh": "信号转导导论",
    "titleEn": "Introduction to Signal Transduction",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "信号接收",
        "termEn": "reception",
        "defZh": "配体与受体结合，是信号通路的第一步。",
        "defEn": "Ligand binding to a receptor, the first step of a signaling pathway."
      },
      {
        "termZh": "信号转导",
        "termEn": "transduction",
        "defZh": "受体激活后，细胞内把信号转换为一系列分子变化。",
        "defEn": "After the receptor is activated, the cell converts the signal into a series of molecular changes."
      },
      {
        "termZh": "细胞响应",
        "termEn": "response",
        "defZh": "信号通路最终改变的细胞活动，如基因表达或酶活性。",
        "defEn": "The cellular activity finally changed by the pathway, such as gene expression or enzyme activity."
      },
      {
        "termZh": "第二信使",
        "termEn": "second messenger",
        "defZh": "受体激活后在细胞内产生或释放的小分子，如 cAMP 或 Ca²⁺。",
        "defEn": "A small molecule produced or released inside the cell after receptor activation, such as cAMP or Ca²⁺."
      },
      {
        "termZh": "G 蛋白偶联受体",
        "termEn": "G-protein-coupled receptor",
        "defZh": "跨膜受体，激活后通过 G 蛋白把信号传给效应酶。",
        "defEn": "A transmembrane receptor that, once activated, passes the signal to an effector enzyme through a G protein."
      }
    ],
    "summary": "信号转导导论 · Introduction to Signal Transduction",
    "learningObjectives": [
      "能陈述「信号转导导论」的准确定义与适用对象 · State the precise definition of Introduction to Signal Transduction and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Introduction to Signal Transduction：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「信号转导导论」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "信号转导导论（Introduction to Signal Transduction）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「信号转导导论」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}",
        "note": "生物题以机制链条为主。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「信号转导导论」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.2「信号转导导论」准确定义 · State the precise definition of 4.2 Introduction to Signal Transduction.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「信号转导导论」的结论 · Applying the conclusion of Introduction to Signal Transduction when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「信号转导导论」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「信号转导导论」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「信号转导导论」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「信号转导导论」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.1",
        "title": "细胞通讯",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.3",
        "title": "信号转导",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「信号转导导论」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「信号转导导论」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「信号转导导论」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "4.3": {
    "id": "bio/bio-u4/4.3",
    "subject": "bio",
    "chapterId": "bio-u4",
    "unitCode": "4",
    "unitTitleZh": "细胞通讯与细胞周期",
    "unitTitleEn": "Cell Communication and Cell Cycle",
    "code": "4.3",
    "titleZh": "信号转导",
    "titleEn": "Signal Transduction",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "磷酸化级联",
        "termEn": "phosphorylation cascade",
        "defZh": "一系列激酶依次磷酸化下游蛋白，从而放大信号。",
        "defEn": "A series of kinases that phosphorylate one another in turn and amplify the signal."
      },
      {
        "termZh": "蛋白激酶",
        "termEn": "protein kinase",
        "defZh": "把磷酸基团转移到蛋白质上的酶。",
        "defEn": "An enzyme that transfers a phosphate group onto a protein."
      },
      {
        "termZh": "磷酸酶",
        "termEn": "phosphatase",
        "defZh": "从蛋白质上除去磷酸基团、常用于终止信号的酶。",
        "defEn": "An enzyme that removes a phosphate from a protein, often used to end a signal."
      },
      {
        "termZh": "信号放大",
        "termEn": "signal amplification",
        "defZh": "一级配体结合引起许多下游分子被激活。",
        "defEn": "One ligand-binding event causes many downstream molecules to be activated."
      },
      {
        "termZh": "信号终止",
        "termEn": "signal termination",
        "defZh": "通过磷酸酶、降解或受体失敏使通路关闭。",
        "defEn": "Shutting the pathway off by phosphatases, degradation, or receptor desensitization."
      }
    ],
    "summary": "信号转导 · Signal Transduction",
    "learningObjectives": [
      "能陈述「信号转导」的准确定义与适用对象 · State the precise definition of Signal Transduction and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Signal Transduction：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「信号转导」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "信号转导（Signal Transduction）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「信号转导」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}",
        "note": "生物题以机制链条为主。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「信号转导」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.3「信号转导」准确定义 · State the precise definition of 4.3 Signal Transduction.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「信号转导」的结论 · Applying the conclusion of Signal Transduction when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「信号转导」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「信号转导」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「信号转导」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「信号转导」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.2",
        "title": "信号转导导论",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.4",
        "title": "反馈",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「信号转导」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「信号转导」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「信号转导」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "4.4": {
    "id": "bio/bio-u4/4.4",
    "subject": "bio",
    "chapterId": "bio-u4",
    "unitCode": "4",
    "unitTitleZh": "细胞通讯与细胞周期",
    "unitTitleEn": "Cell Communication and Cell Cycle",
    "code": "4.4",
    "titleZh": "反馈",
    "titleEn": "Feedback",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "负反馈",
        "termEn": "negative feedback",
        "defZh": "响应抵消最初的变化，使变量回到设定范围。",
        "defEn": "The response opposes the original change and returns a variable toward its set range."
      },
      {
        "termZh": "正反馈",
        "termEn": "positive feedback",
        "defZh": "响应加强最初的变化，直到某个事件结束，如分娩和凝血。",
        "defEn": "The response reinforces the original change until some event ends it, as in childbirth and clotting."
      },
      {
        "termZh": "稳态",
        "termEn": "homeostasis",
        "defZh": "生物维持内部条件相对稳定的状态。",
        "defEn": "The relatively steady internal conditions an organism maintains."
      },
      {
        "termZh": "感受器",
        "termEn": "sensor",
        "defZh": "检测变量是否偏离设定值的结构。",
        "defEn": "A structure that detects whether a variable has left its set point."
      },
      {
        "termZh": "效应器",
        "termEn": "effector",
        "defZh": "执行响应、把变量拉回或推离设定值的结构。",
        "defEn": "A structure that carries out the response, moving the variable back toward or farther from the set point."
      }
    ],
    "summary": "反馈 · Feedback",
    "learningObjectives": [
      "能陈述「反馈」的准确定义与适用对象 · State the precise definition of Feedback and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Feedback：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「反馈」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "反馈（Feedback）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「反馈」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}",
        "note": "生物题以机制链条为主。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「反馈」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.4「反馈」准确定义 · State the precise definition of 4.4 Feedback.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「反馈」的结论 · Applying the conclusion of Feedback when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「反馈」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「反馈」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「反馈」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「反馈」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.3",
        "title": "信号转导",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.5",
        "title": "细胞周期",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「反馈」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「反馈」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「反馈」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "4.5": {
    "id": "bio/bio-u4/4.5",
    "subject": "bio",
    "chapterId": "bio-u4",
    "unitCode": "4",
    "unitTitleZh": "细胞通讯与细胞周期",
    "unitTitleEn": "Cell Communication and Cell Cycle",
    "code": "4.5",
    "titleZh": "细胞周期",
    "titleEn": "Cell Cycle",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "间期",
        "termEn": "interphase",
        "defZh": "包括 G1、S 和 G2，细胞生长并复制 DNA，占周期的大部分时间。",
        "defEn": "G1, S, and G2, when the cell grows and replicates DNA. It occupies most of the cycle."
      },
      {
        "termZh": "S 期",
        "termEn": "S phase",
        "defZh": "DNA 复制发生的时期。",
        "defEn": "The phase in which DNA is replicated."
      },
      {
        "termZh": "G0",
        "termEn": "G0",
        "defZh": "细胞暂时或永久退出分裂周期的状态。",
        "defEn": "A state in which a cell has temporarily or permanently left the division cycle."
      },
      {
        "termZh": "有丝分裂",
        "termEn": "mitosis",
        "defZh": "细胞核分裂，姐妹染色单体分开，染色体数保持不变。",
        "defEn": "Division of the nucleus in which sister chromatids separate and the chromosome number stays the same."
      },
      {
        "termZh": "胞质分裂",
        "termEn": "cytokinesis",
        "defZh": "细胞质分裂，形成两个子细胞。",
        "defEn": "Division of the cytoplasm, producing two daughter cells."
      }
    ],
    "summary": "细胞周期 · Cell Cycle",
    "learningObjectives": [
      "能陈述「细胞周期」的准确定义与适用对象 · State the precise definition of Cell Cycle and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Cell Cycle：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「细胞周期」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "细胞周期（Cell Cycle）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「细胞周期」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}",
        "note": "生物题以机制链条为主。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「细胞周期」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.5「细胞周期」准确定义 · State the precise definition of 4.5 Cell Cycle.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「细胞周期」的结论 · Applying the conclusion of Cell Cycle when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「细胞周期」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「细胞周期」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「细胞周期」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「细胞周期」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.4",
        "title": "反馈",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.6",
        "title": "细胞周期调控",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "mitosis",
        "title": "有丝分裂"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「细胞周期」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「细胞周期」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「细胞周期」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "4.6": {
    "id": "bio/bio-u4/4.6",
    "subject": "bio",
    "chapterId": "bio-u4",
    "unitCode": "4",
    "unitTitleZh": "细胞通讯与细胞周期",
    "unitTitleEn": "Cell Communication and Cell Cycle",
    "code": "4.6",
    "titleZh": "细胞周期调控",
    "titleEn": "Regulation of Cell Cycle",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "周期蛋白",
        "termEn": "cyclin",
        "defZh": "浓度随周期变化、激活 CDK 的蛋白质。",
        "defEn": "A protein whose concentration changes through the cycle and activates a CDK."
      },
      {
        "termZh": "周期蛋白依赖性激酶",
        "termEn": "cyclin-dependent kinase",
        "defZh": "必须结合周期蛋白才有活性、驱动周期前进的激酶。",
        "defEn": "A kinase that is active only when bound to a cyclin and that drives the cycle forward."
      },
      {
        "termZh": "检查点",
        "termEn": "checkpoint",
        "defZh": "周期中评估 DNA 损伤或纺锤体连接、决定是否继续的控制点。",
        "defEn": "A control point that assesses DNA damage or spindle attachment and decides whether to proceed."
      },
      {
        "termZh": "原癌基因",
        "termEn": "proto-oncogene",
        "defZh": "正常促进细胞分裂的基因；过度激活后可成为癌基因。",
        "defEn": "A gene that normally promotes cell division. When overactivated it can become an oncogene."
      },
      {
        "termZh": "肿瘤抑制基因",
        "termEn": "tumor-suppressor gene",
        "defZh": "正常抑制不当分裂的基因，功能丧失会提高癌症风险。",
        "defEn": "A gene that normally restrains inappropriate division. Loss of its function raises cancer risk."
      }
    ],
    "summary": "细胞周期调控 · Regulation of Cell Cycle",
    "learningObjectives": [
      "能陈述「细胞周期调控」的准确定义与适用对象 · State the precise definition of Regulation of Cell Cycle and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Regulation of Cell Cycle：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「细胞周期调控」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "细胞周期调控（Regulation of Cell Cycle）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「细胞周期调控」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}",
        "note": "生物题以机制链条为主。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「细胞周期调控」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.6「细胞周期调控」准确定义 · State the precise definition of 4.6 Regulation of Cell Cycle.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「细胞周期调控」的结论 · Applying the conclusion of Regulation of Cell Cycle when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「细胞周期调控」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「细胞周期调控」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「细胞周期调控」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「细胞周期调控」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.5",
        "title": "细胞周期",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.7",
        "title": "有丝分裂",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "mitosis",
        "title": "有丝分裂"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「细胞周期调控」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「细胞周期调控」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「细胞周期调控」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "4.7": {
    "id": "bio/bio-u4/4.7",
    "subject": "bio",
    "chapterId": "bio-u4",
    "unitCode": "4",
    "unitTitleZh": "细胞通讯与细胞周期",
    "unitTitleEn": "Cell Communication and Cell Cycle",
    "code": "4.7",
    "titleZh": "有丝分裂",
    "titleEn": "Mitosis",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "姐妹染色单体",
        "termEn": "sister chromatids",
        "defZh": "复制后由着丝粒连在一起的两条相同 DNA 分子。",
        "defEn": "The two identical DNA molecules joined at the centromere after replication."
      },
      {
        "termZh": "着丝粒",
        "termEn": "centromere",
        "defZh": "姐妹染色单体相连、动粒组装的染色体区域。",
        "defEn": "The chromosomal region where sister chromatids are joined and the kinetochore assembles."
      },
      {
        "termZh": "纺锤体",
        "termEn": "spindle",
        "defZh": "由微管组成、把染色体拉开的结构。",
        "defEn": "The microtubule structure that pulls chromosomes apart."
      },
      {
        "termZh": "赤道板",
        "termEn": "metaphase plate",
        "defZh": "中期染色体排列的细胞赤道平面。",
        "defEn": "The equatorial plane where chromosomes line up at metaphase."
      },
      {
        "termZh": "同源染色体",
        "termEn": "homologous chromosomes",
        "defZh": "分别来自双亲、携带相同基因座位的一对染色体；有丝分裂中它们不配对分离。",
        "defEn": "A pair of chromosomes, one from each parent, with the same gene loci. They do not pair and separate in mitosis."
      }
    ],
    "summary": "有丝分裂 · Mitosis",
    "learningObjectives": [
      "能陈述「有丝分裂」的准确定义与适用对象 · State the precise definition of Mitosis and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Mitosis：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「有丝分裂」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "有丝分裂（Mitosis）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「有丝分裂」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}",
        "note": "生物题以机制链条为主。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「有丝分裂」的工作方程或机制链。"
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
      "满足定理/定律条件",
      "注意理想化假设"
    ],
    "keyPoints": [
      "掌握 4.7「有丝分裂」准确定义 · State the precise definition of 4.7 Mitosis.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「有丝分裂」的结论 · Applying the conclusion of Mitosis when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「有丝分裂」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{定性关系：输入}\\to\\text{机制}\\to\\text{输出}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「有丝分裂」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「有丝分裂」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「有丝分裂」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u4",
        "code": "4.6",
        "title": "细胞周期调控",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "mitosis",
        "title": "有丝分裂"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u4",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「有丝分裂」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「有丝分裂」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「有丝分裂」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
