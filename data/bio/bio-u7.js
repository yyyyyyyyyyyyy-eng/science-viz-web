export const UNIT = {
  "id": "bio-u7",
  "code": "7",
  "titleZh": "自然选择",
  "titleEn": "Natural Selection",
  "subject": "bio",
  "layer": "ap"
};
export const TOPICS = {
  "7.1": {
    "id": "bio/bio-u7/7.1",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.1",
    "titleZh": "自然选择导论",
    "titleEn": "Introduction to Natural Selection",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "自然选择",
        "termEn": "natural selection",
        "defZh": "可遗传的有利表型使个体留下更多后代，从而改变种群基因频率。",
        "defEn": "Heritable advantageous phenotypes leave more offspring, changing allele frequencies in the population."
      },
      {
        "termZh": "可遗传变异",
        "termEn": "heritable variation",
        "defZh": "能传给后代的性状差异，是选择产生进化的前提。",
        "defEn": "Trait differences that can be passed to offspring, a requirement for selection to cause evolution."
      },
      {
        "termZh": "差异繁殖",
        "termEn": "differential reproduction",
        "defZh": "不同表型的个体留下的后代数量不同。",
        "defEn": "Individuals of different phenotypes leave different numbers of offspring."
      },
      {
        "termZh": "种群",
        "termEn": "population",
        "defZh": "同一时间、同一地点、能相互交配的同种个体集合。",
        "defEn": "A group of individuals of one species that can interbreed, in one place at one time."
      }
    ],
    "summary": "自然选择导论 · Introduction to Natural Selection",
    "learningObjectives": [
      "能陈述「自然选择导论」的准确定义与适用对象 · State the precise definition of Introduction to Natural Selection and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Introduction to Natural Selection：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「自然选择导论」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "自然选择导论（Introduction to Natural Selection）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「自然选择导论」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「自然选择导论」的工作方程或机制链。"
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
      "掌握 7.1「自然选择导论」准确定义 · State the precise definition of 7.1 Introduction to Natural Selection.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「自然选择导论」的结论 · Applying the conclusion of Introduction to Natural Selection when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「自然选择导论」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「自然选择导论」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「自然选择导论」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「自然选择导论」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.2",
        "title": "自然选择",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「自然选择导论」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「自然选择导论」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「自然选择导论」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.2": {
    "id": "bio/bio-u7/7.2",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.2",
    "titleZh": "自然选择",
    "titleEn": "Natural Selection",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "方向性选择",
        "termEn": "directional selection",
        "defZh": "利于分布一端的表型，使种群平均值移动。",
        "defEn": "Favors phenotypes at one end of the distribution and shifts the population mean."
      },
      {
        "termZh": "稳定化选择",
        "termEn": "stabilizing selection",
        "defZh": "利于中间表型，减少两端的极端类型。",
        "defEn": "Favors intermediate phenotypes and reduces the extremes."
      },
      {
        "termZh": "分裂性选择",
        "termEn": "disruptive selection",
        "defZh": "利于两端表型、不利于中间型，可能增加变异。",
        "defEn": "Favors both extremes and selects against the intermediate, which can increase variation."
      },
      {
        "termZh": "适合度",
        "termEn": "fitness",
        "defZh": "相对的繁殖成功，不是身体强弱本身。",
        "defEn": "Relative reproductive success, not physical strength by itself."
      },
      {
        "termZh": "选择压力",
        "termEn": "selective pressure",
        "defZh": "使某些表型留下更多后代的环境因素。",
        "defEn": "An environmental factor that causes some phenotypes to leave more offspring."
      }
    ],
    "summary": "自然选择 · Natural Selection",
    "learningObjectives": [
      "能陈述「自然选择」的准确定义与适用对象 · State the precise definition of Natural Selection and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Natural Selection：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「自然选择」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "自然选择（Natural Selection）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「自然选择」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「自然选择」的工作方程或机制链。"
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
      "掌握 7.2「自然选择」准确定义 · State the precise definition of 7.2 Natural Selection.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「自然选择」的结论 · Applying the conclusion of Natural Selection when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「自然选择」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「自然选择」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「自然选择」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「自然选择」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.1",
        "title": "自然选择导论",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.3",
        "title": "人工选择",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "hardy-weinberg",
        "title": "哈代–温伯格与选择"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「自然选择」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「自然选择」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「自然选择」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.3": {
    "id": "bio/bio-u7/7.3",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.3",
    "titleZh": "人工选择",
    "titleEn": "Artificial Selection",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "人工选择",
        "termEn": "artificial selection",
        "defZh": "人类按偏好留种，使种群基因频率改变。",
        "defEn": "Humans choose which individuals breed, changing allele frequencies."
      },
      {
        "termZh": "选择响应",
        "termEn": "response to selection",
        "defZh": "选择后下一代性状平均值的改变，依赖于可遗传性。",
        "defEn": "The change in the next generation’s mean trait after selection. It depends on heritability."
      },
      {
        "termZh": "近交",
        "termEn": "inbreeding",
        "defZh": "亲缘个体交配，可降低遗传多样性并暴露有害隐性等位基因。",
        "defEn": "Mating of relatives, which can reduce genetic diversity and expose harmful recessive alleles."
      },
      {
        "termZh": "育种",
        "termEn": "breeding",
        "defZh": "通过选择亲本改变家养种群性状的实践。",
        "defEn": "The practice of choosing parents to change traits in a domesticated population."
      }
    ],
    "summary": "人工选择 · Artificial Selection",
    "learningObjectives": [
      "能陈述「人工选择」的准确定义与适用对象 · State the precise definition of Artificial Selection and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Artificial Selection：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「人工选择」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "人工选择（Artificial Selection）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「人工选择」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「人工选择」的工作方程或机制链。"
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
      "掌握 7.3「人工选择」准确定义 · State the precise definition of 7.3 Artificial Selection.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「人工选择」的结论 · Applying the conclusion of Artificial Selection when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「人工选择」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「人工选择」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「人工选择」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「人工选择」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.2",
        "title": "自然选择",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.4",
        "title": "群体遗传",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「人工选择」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「人工选择」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「人工选择」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.4": {
    "id": "bio/bio-u7/7.4",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.4",
    "titleZh": "群体遗传",
    "titleEn": "Population Genetics",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "等位基因频率",
        "termEn": "allele frequency",
        "defZh": "某等位基因在种群基因库中所占的比例。",
        "defEn": "The proportion of a given allele in the population’s gene pool."
      },
      {
        "termZh": "基因型频率",
        "termEn": "genotype frequency",
        "defZh": "某基因型在种群个体中所占的比例。",
        "defEn": "The proportion of individuals with a given genotype."
      },
      {
        "termZh": "基因库",
        "termEn": "gene pool",
        "defZh": "种群中全部个体的全部等位基因。",
        "defEn": "All the alleles in all the individuals of a population."
      },
      {
        "termZh": "遗传漂变",
        "termEn": "genetic drift",
        "defZh": "由随机抽样引起的等位基因频率变化，小种群中更强。",
        "defEn": "Change in allele frequency caused by random sampling, stronger in a small population."
      },
      {
        "termZh": "基因流",
        "termEn": "gene flow",
        "defZh": "个体或配子迁移使等位基因在种群间移动。",
        "defEn": "Movement of alleles between populations by migrating individuals or gametes."
      },
      {
        "termZh": "突变",
        "termEn": "mutation",
        "defZh": "DNA 序列的可遗传改变，是新等位基因的来源。",
        "defEn": "A heritable change in DNA sequence, the source of new alleles."
      }
    ],
    "summary": "群体遗传 · Population Genetics",
    "learningObjectives": [
      "能陈述「群体遗传」的准确定义与适用对象 · State the precise definition of Population Genetics and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Population Genetics：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「群体遗传」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "群体遗传（Population Genetics）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「群体遗传」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「群体遗传」的工作方程或机制链。"
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
      "掌握 7.4「群体遗传」准确定义 · State the precise definition of 7.4 Population Genetics.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「群体遗传」的结论 · Applying the conclusion of Population Genetics when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「群体遗传」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「群体遗传」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「群体遗传」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「群体遗传」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.3",
        "title": "人工选择",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.5",
        "title": "哈代–温伯格",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "hardy-weinberg",
        "title": "哈代–温伯格与选择"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「群体遗传」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「群体遗传」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「群体遗传」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.5": {
    "id": "bio/bio-u7/7.5",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.5",
    "titleZh": "哈代–温伯格",
    "titleEn": "Hardy-Weinberg Equilibrium",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "哈代–温伯格平衡",
        "termEn": "Hardy–Weinberg equilibrium",
        "defZh": "在没有进化力量和非随机交配时，等位基因和基因型频率保持不变的零模型。",
        "defEn": "A null model in which allele and genotype frequencies stay constant when evolutionary forces and nonrandom mating are absent."
      },
      {
        "termZh": "\\(p\\) 与 \\(q\\)",
        "termEn": "\\(p\\) and \\(q\\)",
        "defZh": "两个等位基因的频率，满足 \\(p+q=1\\)。",
        "defEn": "The frequencies of two alleles, with \\(p+q=1\\)."
      },
      {
        "termZh": "杂合子",
        "termEn": "heterozygote",
        "defZh": "两个等位基因不同的个体。在哈代–温伯格平衡的二等位模型中，其频率为 \\(2pq\\)。",
        "defEn": "An individual with two different alleles. Under Hardy–Weinberg equilibrium with two alleles, its frequency is \\(2pq\\)."
      },
      {
        "termZh": "零模型",
        "termEn": "null model",
        "defZh": "用来比较真实数据、本身不声称描述所有真实种群的基准。",
        "defEn": "A baseline used to compare real data. It does not claim to describe every real population."
      }
    ],
    "summary": "哈代–温伯格 · Hardy-Weinberg Equilibrium",
    "learningObjectives": [
      "能陈述「哈代–温伯格」的准确定义与适用对象 · State the precise definition of Hardy-Weinberg Equilibrium and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Hardy-Weinberg Equilibrium：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「哈代–温伯格」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "哈代–温伯格（Hardy-Weinberg Equilibrium）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「哈代–温伯格」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "p^2+2pq+q^2=1",
        "note": "哈代–温伯格。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「哈代–温伯格」的工作方程或机制链。"
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
      "种群足够大、随机交配、无突变、无选择、无迁移",
      "p+q=1；p²+2pq+q²=1（一对等位基因）",
      "偏离 HW 平衡提示选择、漂变、迁移或非随机交配"
    ],
    "keyPoints": [
      "掌握 7.5「哈代–温伯格」准确定义 · State the precise definition of 7.5 Hardy-Weinberg Equilibrium.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「哈代–温伯格」的结论 · Applying the conclusion of Hardy-Weinberg Equilibrium when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「哈代–温伯格」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "p^2+2pq+q^2=1"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「哈代–温伯格」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「哈代–温伯格」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「哈代–温伯格」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.4",
        "title": "群体遗传",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.6",
        "title": "进化证据",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "hardy-weinberg",
        "title": "哈代–温伯格与选择"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「哈代–温伯格」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「哈代–温伯格」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「哈代–温伯格」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.6": {
    "id": "bio/bio-u7/7.6",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.6",
    "titleZh": "进化证据",
    "titleEn": "Evidence of Evolution",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "同源结构",
        "termEn": "homologous structure",
        "defZh": "因共同祖先而相似的结构，功能可以不同。",
        "defEn": "A structure similar because of common ancestry; the functions may differ."
      },
      {
        "termZh": "趋同结构",
        "termEn": "analogous structure",
        "defZh": "因相似环境独立演化出的相似结构，不表示近亲。",
        "defEn": "A structure similar because of independent evolution in similar environments, not close relationship."
      },
      {
        "termZh": "痕迹结构",
        "termEn": "vestigial structure",
        "defZh": "祖先有功能、现存物种中已缩小或失去原功能的结构。",
        "defEn": "A reduced structure that had a function in an ancestor and has lost that function."
      },
      {
        "termZh": "化石",
        "termEn": "fossil",
        "defZh": "过去生命的保存遗存，可显示随时间的变化。",
        "defEn": "A preserved remain of past life that can show change over time."
      },
      {
        "termZh": "分子证据",
        "termEn": "molecular evidence",
        "defZh": "DNA、RNA 或蛋白质序列的相似，用于推断亲缘。",
        "defEn": "Similarity of DNA, RNA, or protein sequences used to infer relationship."
      }
    ],
    "summary": "进化证据 · Evidence of Evolution",
    "learningObjectives": [
      "能陈述「进化证据」的准确定义与适用对象 · State the precise definition of Evidence of Evolution and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Evidence of Evolution：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「进化证据」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "进化证据（Evidence of Evolution）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「进化证据」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「进化证据」的工作方程或机制链。"
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
      "掌握 7.6「进化证据」准确定义 · State the precise definition of 7.6 Evidence of Evolution.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「进化证据」的结论 · Applying the conclusion of Evidence of Evolution when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「进化证据」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「进化证据」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「进化证据」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「进化证据」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.5",
        "title": "哈代–温伯格",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.7",
        "title": "共同祖先",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「进化证据」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「进化证据」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「进化证据」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.7": {
    "id": "bio/bio-u7/7.7",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.7",
    "titleZh": "共同祖先",
    "titleEn": "Common Ancestry",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "共同祖先",
        "termEn": "common ancestor",
        "defZh": "两个或多个类群由其演化而来的祖先种群。",
        "defEn": "An ancestral population from which two or more groups descended."
      },
      {
        "termZh": "LUCA",
        "termEn": "LUCA",
        "defZh": "现存生命的最近共同祖先，不是地球上最早的生命。",
        "defEn": "The last universal common ancestor of living organisms, not the earliest life on Earth."
      },
      {
        "termZh": "通用遗传密码",
        "termEn": "universal genetic code",
        "defZh": "几乎所有生物使用同一套密码子，支持共同起源。",
        "defEn": "Nearly all organisms use the same codon assignments, supporting a common origin."
      },
      {
        "termZh": "保守序列",
        "termEn": "conserved sequence",
        "defZh": "在远缘生物中仍相似的 DNA 或蛋白质序列。",
        "defEn": "A DNA or protein sequence that remains similar in distantly related organisms."
      }
    ],
    "summary": "共同祖先 · Common Ancestry",
    "learningObjectives": [
      "能陈述「共同祖先」的准确定义与适用对象 · State the precise definition of Common Ancestry and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Common Ancestry：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「共同祖先」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "共同祖先（Common Ancestry）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「共同祖先」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「共同祖先」的工作方程或机制链。"
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
      "掌握 7.7「共同祖先」准确定义 · State the precise definition of 7.7 Common Ancestry.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「共同祖先」的结论 · Applying the conclusion of Common Ancestry when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「共同祖先」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「共同祖先」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「共同祖先」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「共同祖先」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.6",
        "title": "进化证据",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.8",
        "title": "延续与变化",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「共同祖先」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「共同祖先」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「共同祖先」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.8": {
    "id": "bio/bio-u7/7.8",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.8",
    "titleZh": "延续与变化",
    "titleEn": "Continuing Evolution",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "微进化",
        "termEn": "microevolution",
        "defZh": "种群等位基因频率在世代间的改变。",
        "defEn": "A change in allele frequencies of a population from generation to generation."
      },
      {
        "termZh": "持续进化",
        "termEn": "continuing evolution",
        "defZh": "进化并未停止，病原体耐药和观测到的性状变化都是例子。",
        "defEn": "Evolution has not stopped. Drug resistance and observed trait changes are examples."
      },
      {
        "termZh": "选择",
        "termEn": "selection",
        "defZh": "非随机的差异繁殖改变等位基因频率。",
        "defEn": "Nonrandom differential reproduction that changes allele frequencies."
      },
      {
        "termZh": "适应辐射",
        "termEn": "adaptive radiation",
        "defZh": "一个谱系在相对短的时间里分化出许多生态类型。",
        "defEn": "One lineage splits into many ecological forms in a relatively short time."
      }
    ],
    "summary": "延续与变化 · Continuing Evolution",
    "learningObjectives": [
      "能陈述「延续与变化」的准确定义与适用对象 · State the precise definition of Continuing Evolution and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Continuing Evolution：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「延续与变化」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "延续与变化（Continuing Evolution）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「延续与变化」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「延续与变化」的工作方程或机制链。"
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
      "掌握 7.8「延续与变化」准确定义 · State the precise definition of 7.8 Continuing Evolution.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「延续与变化」的结论 · Applying the conclusion of Continuing Evolution when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「延续与变化」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「延续与变化」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「延续与变化」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「延续与变化」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.7",
        "title": "共同祖先",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.9",
        "title": "系统发生",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「延续与变化」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「延续与变化」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「延续与变化」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.9": {
    "id": "bio/bio-u7/7.9",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.9",
    "titleZh": "系统发生",
    "titleEn": "Phylogeny",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "系统发生树",
        "termEn": "phylogenetic tree",
        "defZh": "表示类群演化关系的分支图。",
        "defEn": "A branching diagram of evolutionary relationships."
      },
      {
        "termZh": "节点",
        "termEn": "node",
        "defZh": "树上的分支点，代表一个最近共同祖先，不是某个现存物种。",
        "defEn": "A branch point on a tree. It represents a most recent common ancestor, not a living species."
      },
      {
        "termZh": "单系群",
        "termEn": "monophyletic group",
        "defZh": "包含一个祖先及其全部后代的类群。",
        "defEn": "A group that includes an ancestor and all of its descendants."
      },
      {
        "termZh": "外类群",
        "termEn": "outgroup",
        "defZh": "与所研究类群亲缘较远、用来为树定根的类群。",
        "defEn": "A more distant group used to root the tree."
      },
      {
        "termZh": "共享派生性状",
        "termEn": "shared derived character",
        "defZh": "某祖先新出现、并为其后代共有的性状，用于支持一个分支。",
        "defEn": "A trait that arose in an ancestor and is shared by its descendants, used to support a branch."
      }
    ],
    "summary": "系统发生 · Phylogeny",
    "learningObjectives": [
      "能陈述「系统发生」的准确定义与适用对象 · State the precise definition of Phylogeny and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Phylogeny：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「系统发生」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "系统发生（Phylogeny）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「系统发生」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\text{共同祖先越近}\\Rightarrow\\text{亲缘关系越近}",
        "note": "系统树由同源性状或分子序列推断；节点为最近共同祖先。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「系统发生」的工作方程或机制链。"
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
      "使用同源性状，不以趋同为亲缘证据",
      "系统树是基于数据的假说；不同基因可能给出不同树",
      "水平基因转移与不完全谱系分选可造成基因树冲突"
    ],
    "keyPoints": [
      "掌握 7.9「系统发生」准确定义 · State the precise definition of 7.9 Phylogeny.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「系统发生」的结论 · Applying the conclusion of Phylogeny when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「系统发生」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\text{共同祖先越近}\\Rightarrow\\text{亲缘关系越近}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「系统发生」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「系统发生」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「系统发生」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.8",
        "title": "延续与变化",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.10",
        "title": "物种形成",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「系统发生」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「系统发生」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「系统发生」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.10": {
    "id": "bio/bio-u7/7.10",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.10",
    "titleZh": "物种形成",
    "titleEn": "Speciation",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "物种形成",
        "termEn": "speciation",
        "defZh": "一个谱系分裂成两个或多个不能在自然条件下合并的物种。",
        "defEn": "A lineage splits into two or more species that do not merge under natural conditions."
      },
      {
        "termZh": "异域物种形成",
        "termEn": "allopatric speciation",
        "defZh": "种群被地理障碍分开后发生的物种形成。",
        "defEn": "Speciation after populations are separated by a geographic barrier."
      },
      {
        "termZh": "同域物种形成",
        "termEn": "sympatric speciation",
        "defZh": "没有地理隔离时发生的物种形成，如多倍化。",
        "defEn": "Speciation without geographic isolation, for example by polyploidy."
      },
      {
        "termZh": "合子前隔离",
        "termEn": "prezygotic isolation",
        "defZh": "阻止受精的生殖障碍，如行为或时间差异。",
        "defEn": "A reproductive barrier that prevents fertilization, such as a difference in behavior or timing."
      },
      {
        "termZh": "合子后隔离",
        "termEn": "postzygotic isolation",
        "defZh": "受精后降低杂种存活或生育力的障碍。",
        "defEn": "A barrier after fertilization that reduces hybrid survival or fertility."
      }
    ],
    "summary": "物种形成 · Speciation",
    "learningObjectives": [
      "能陈述「物种形成」的准确定义与适用对象 · State the precise definition of Speciation and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Speciation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「物种形成」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "物种形成（Speciation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「物种形成」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「物种形成」的工作方程或机制链。"
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
      "掌握 7.10「物种形成」准确定义 · State the precise definition of 7.10 Speciation.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「物种形成」的结论 · Applying the conclusion of Speciation when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「物种形成」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「物种形成」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「物种形成」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「物种形成」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.9",
        "title": "系统发生",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.11",
        "title": "灭绝",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「物种形成」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「物种形成」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「物种形成」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.11": {
    "id": "bio/bio-u7/7.11",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.11",
    "titleZh": "灭绝",
    "titleEn": "Extinction",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "灭绝",
        "termEn": "extinction",
        "defZh": "一个物种或类群不再有存活个体。",
        "defEn": "A species or group no longer has living individuals."
      },
      {
        "termZh": "背景灭绝",
        "termEn": "background extinction",
        "defZh": "在地质时间中持续发生的普通灭绝速率。",
        "defEn": "The ordinary rate of extinction across geologic time."
      },
      {
        "termZh": "大灭绝",
        "termEn": "mass extinction",
        "defZh": "相对短的地质时间内大量类群消失。",
        "defEn": "Loss of many groups in a relatively short geologic interval."
      },
      {
        "termZh": "生态位空缺",
        "termEn": "vacant niche",
        "defZh": "灭绝后留下的资源利用机会，可被幸存谱系占据。",
        "defEn": "A way of using resources left open after extinction, which surviving lineages may occupy."
      }
    ],
    "summary": "灭绝 · Extinction",
    "learningObjectives": [
      "能陈述「灭绝」的准确定义与适用对象 · State the precise definition of Extinction and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Extinction：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「灭绝」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "灭绝（Extinction）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「灭绝」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「灭绝」的工作方程或机制链。"
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
      "掌握 7.11「灭绝」准确定义 · State the precise definition of 7.11 Extinction.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「灭绝」的结论 · Applying the conclusion of Extinction when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「灭绝」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「灭绝」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「灭绝」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「灭绝」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.10",
        "title": "物种形成",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.12",
        "title": "种群变异 · Variations in Populations",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「灭绝」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「灭绝」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「灭绝」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.12": {
    "id": "bio/bio-u7/7.12",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.12",
    "titleZh": "种群变异",
    "titleEn": "Variations in Populations",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "种群变异",
        "termEn": "population variation",
        "defZh": "种群内个体在可遗传性状上的差异。",
        "defEn": "Differences in heritable traits among individuals in a population."
      },
      {
        "termZh": "遗传多样性",
        "termEn": "genetic diversity",
        "defZh": "种群基因库中等位基因和基因型的丰富程度。",
        "defEn": "The richness of alleles and genotypes in a population’s gene pool."
      },
      {
        "termZh": "多态性",
        "termEn": "polymorphism",
        "defZh": "一个基因在种群中有两种以上较常见的等位基因。",
        "defEn": "A gene has two or more fairly common alleles in a population."
      },
      {
        "termZh": "瓶颈效应",
        "termEn": "bottleneck effect",
        "defZh": "种群数量骤降后，漂变使遗传多样性下降。",
        "defEn": "After a sharp drop in population size, drift reduces genetic diversity."
      }
    ],
    "summary": "种群变异 · Variations in Populations",
    "learningObjectives": [
      "能陈述「种群变异」的准确定义与适用对象 · State the precise definition of Variations in Populations and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Variations in Populations：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「种群变异」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "种群变异（Variations in Populations）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「种群变异」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「种群变异」的工作方程或机制链。"
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
      "掌握 7.12「种群变异」准确定义 · State the precise definition of 7.12 Variations in Populations.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「种群变异」的结论 · Applying the conclusion of Variations in Populations when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「种群变异」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「种群变异」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「种群变异」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「种群变异」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.11",
        "title": "灭绝",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u7",
        "code": "7.13",
        "title": "生命起源",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「种群变异」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「种群变异」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「种群变异」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "7.13": {
    "id": "bio/bio-u7/7.13",
    "subject": "bio",
    "chapterId": "bio-u7",
    "unitCode": "7",
    "unitTitleZh": "自然选择",
    "unitTitleEn": "Natural Selection",
    "code": "7.13",
    "titleZh": "生命起源",
    "titleEn": "Origins of Life on Earth",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "生命起源",
        "termEn": "origin of life",
        "defZh": "从非生命化学系统产生能复制并进化的实体。",
        "defEn": "The appearance of entities that can replicate and evolve from nonliving chemical systems."
      },
      {
        "termZh": "RNA 世界",
        "termEn": "RNA world",
        "defZh": "早期生命可能以 RNA 同时承担遗传和催化的假说。",
        "defEn": "The hypothesis that early life used RNA for both heredity and catalysis."
      },
      {
        "termZh": "原核生物",
        "termEn": "prokaryote",
        "defZh": "没有核膜的细胞生命，是化石记录中较早的细胞形式。",
        "defEn": "Cellular life without a nuclear envelope, the earlier cellular form in the fossil record."
      },
      {
        "termZh": "氧气革命",
        "termEn": "oxygen revolution",
        "defZh": "光合产氧使大气含氧量上升，改变了后续进化。",
        "defEn": "Photosynthetic oxygen production raised atmospheric oxygen and changed later evolution."
      }
    ],
    "summary": "生命起源 · Origins of Life on Earth",
    "learningObjectives": [
      "能陈述「生命起源」的准确定义与适用对象 · State the precise definition of Origins of Life on Earth and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Origins of Life on Earth：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「生命起源」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "生命起源（Origins of Life on Earth）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「生命起源」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「生命起源」的工作方程或机制链。"
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
      "掌握 7.13「生命起源」准确定义 · State the precise definition of 7.13 Origins of Life on Earth.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「生命起源」的结论 · Applying the conclusion of Origins of Life on Earth when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「生命起源」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「生命起源」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「生命起源」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「生命起源」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u7",
        "code": "7.12",
        "title": "种群变异 · Variations in Populations",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u7",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「生命起源」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「生命起源」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「生命起源」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
