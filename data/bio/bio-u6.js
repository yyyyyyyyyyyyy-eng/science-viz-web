export const UNIT = {
  "id": "bio-u6",
  "code": "6",
  "titleZh": "基因表达与调控",
  "titleEn": "Gene Expression and Regulation",
  "subject": "bio",
  "layer": "ap"
};
export const TOPICS = {
  "6.1": {
    "id": "bio/bio-u6/6.1",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.1",
    "titleZh": "DNA 与 RNA 结构",
    "titleEn": "DNA and RNA Structure",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "双螺旋",
        "termEn": "double helix",
        "defZh": "DNA 两条反向平行链靠碱基对之间的氢键缠绕成螺旋。",
        "defEn": "Two antiparallel DNA strands wound into a helix and held by hydrogen bonds between base pairs."
      },
      {
        "termZh": "查加夫规则",
        "termEn": "Chargaff’s rules",
        "defZh": "双链 DNA 中 A 的量等于 T、G 的量等于 C。",
        "defEn": "In double-stranded DNA the amount of A equals T and the amount of G equals C."
      },
      {
        "termZh": "嘌呤",
        "termEn": "purine",
        "defZh": "双环含氮碱基，A 和 G。",
        "defEn": "A double-ring nitrogenous base, A or G."
      },
      {
        "termZh": "嘧啶",
        "termEn": "pyrimidine",
        "defZh": "单环含氮碱基，DNA 中为 C 和 T，RNA 中为 C 和 U。",
        "defEn": "A single-ring nitrogenous base: C and T in DNA, C and U in RNA."
      },
      {
        "termZh": "氢键",
        "termEn": "hydrogen bond",
        "defZh": "连接互补碱基的弱键，A–T 两个、G–C 三个，使双链可以解开。",
        "defEn": "The weak bonds between complementary bases, two for A–T and three for G–C, so the strands can be separated."
      }
    ],
    "summary": "DNA 与 RNA 结构 · DNA and RNA Structure",
    "learningObjectives": [
      "能陈述「DNA 与 RNA 结构」的准确定义与适用对象 · State the precise definition of DNA and RNA Structure and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "DNA and RNA Structure：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「DNA 与 RNA 结构」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "DNA 与 RNA 结构（DNA and RNA Structure）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「DNA 与 RNA 结构」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「DNA 与 RNA 结构」的工作方程或机制链。"
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
      "掌握 6.1「DNA 与 RNA 结构」准确定义 · State the precise definition of 6.1 DNA and RNA Structure.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「DNA 与 RNA 结构」的结论 · Applying the conclusion of DNA and RNA Structure when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「DNA 与 RNA 结构」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「DNA 与 RNA 结构」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「DNA 与 RNA 结构」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「DNA 与 RNA 结构」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.2",
        "title": "复制",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "dna-replication",
        "title": "DNA 复制"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「DNA 与 RNA 结构」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「DNA 与 RNA 结构」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「DNA 与 RNA 结构」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.2": {
    "id": "bio/bio-u6/6.2",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.2",
    "titleZh": "复制",
    "titleEn": "Replication",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "半保留复制",
        "termEn": "semiconservative replication",
        "defZh": "每个子代 DNA 保留一条亲代链和一条新链。",
        "defEn": "Each daughter DNA molecule keeps one parental strand and one new strand."
      },
      {
        "termZh": "复制叉",
        "termEn": "replication fork",
        "defZh": "双链解开、新链合成的 Y 形区域。",
        "defEn": "The Y-shaped region where the helix is unwound and new strands are made."
      },
      {
        "termZh": "前导链",
        "termEn": "leading strand",
        "defZh": "沿复制叉移动方向连续合成的新链。",
        "defEn": "The new strand synthesized continuously in the direction the fork moves."
      },
      {
        "termZh": "滞后链",
        "termEn": "lagging strand",
        "defZh": "以冈崎片段不连续合成、总体方向与叉移动相反的新链。",
        "defEn": "The new strand made discontinuously as Okazaki fragments, overall opposite the fork’s movement."
      },
      {
        "termZh": "引物酶",
        "termEn": "primase",
        "defZh": "合成 RNA 引物、为 DNA 聚合酶提供 3′ 羟基的酶。",
        "defEn": "The enzyme that makes an RNA primer, giving DNA polymerase a 3′ hydroxyl."
      },
      {
        "termZh": "DNA 聚合酶",
        "termEn": "DNA polymerase",
        "defZh": "只能在 5′→3′ 方向把核苷酸加到已有链上的酶。",
        "defEn": "An enzyme that can add nucleotides only to an existing strand, in the 5′→3′ direction."
      }
    ],
    "summary": "复制 · Replication",
    "learningObjectives": [
      "能陈述「复制」的准确定义与适用对象 · State the precise definition of Replication and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Replication：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「复制」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "复制（Replication）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「复制」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「复制」的工作方程或机制链。"
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
      "掌握 6.2「复制」准确定义 · State the precise definition of 6.2 Replication.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「复制」的结论 · Applying the conclusion of Replication when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「复制」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「复制」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「复制」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「复制」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.1",
        "title": "DNA 与 RNA 结构",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u6",
        "code": "6.3",
        "title": "转录与 RNA 加工",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "dna-replication",
        "title": "DNA 复制"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「复制」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「复制」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「复制」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.3": {
    "id": "bio/bio-u6/6.3",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.3",
    "titleZh": "转录与 RNA 加工",
    "titleEn": "Transcription and RNA Processing",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "转录",
        "termEn": "transcription",
        "defZh": "以 DNA 为模板合成 RNA。",
        "defEn": "Synthesis of RNA using DNA as a template."
      },
      {
        "termZh": "模板链",
        "termEn": "template strand",
        "defZh": "被 RNA 聚合酶按 3′→5′ 读取的 DNA 链。",
        "defEn": "The DNA strand RNA polymerase reads 3′→5′."
      },
      {
        "termZh": "编码链",
        "termEn": "coding strand",
        "defZh": "与 mRNA 序列相同（T 换成 U）的 DNA 链，不被直接读取。",
        "defEn": "The DNA strand with the same sequence as the mRNA, with T in place of U. It is not read directly."
      },
      {
        "termZh": "RNA 加工",
        "termEn": "RNA processing",
        "defZh": "真核前体 mRNA 的加帽、加尾和剪接。",
        "defEn": "Capping, tailing, and splicing of eukaryotic pre-mRNA."
      },
      {
        "termZh": "外显子",
        "termEn": "exon",
        "defZh": "剪接后保留在成熟 mRNA 中的区段。",
        "defEn": "A segment kept in mature mRNA after splicing."
      },
      {
        "termZh": "内含子",
        "termEn": "intron",
        "defZh": "从前体 mRNA 中被剪掉的区段，仍可参与调控或可变剪接。",
        "defEn": "A segment removed from pre-mRNA. It can still take part in regulation or alternative splicing."
      }
    ],
    "summary": "转录与 RNA 加工 · Transcription and RNA Processing",
    "learningObjectives": [
      "能陈述「转录与 RNA 加工」的准确定义与适用对象 · State the precise definition of Transcription and RNA Processing and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Transcription and RNA Processing：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「转录与 RNA 加工」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "转录与 RNA 加工（Transcription and RNA Processing）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「转录与 RNA 加工」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「转录与 RNA 加工」的工作方程或机制链。"
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
      "掌握 6.3「转录与 RNA 加工」准确定义 · State the precise definition of 6.3 Transcription and RNA Processing.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「转录与 RNA 加工」的结论 · Applying the conclusion of Transcription and RNA Processing when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「转录与 RNA 加工」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「转录与 RNA 加工」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「转录与 RNA 加工」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「转录与 RNA 加工」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.2",
        "title": "复制",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u6",
        "code": "6.4",
        "title": "翻译",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「转录与 RNA 加工」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「转录与 RNA 加工」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「转录与 RNA 加工」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.4": {
    "id": "bio/bio-u6/6.4",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.4",
    "titleZh": "翻译",
    "titleEn": "Translation",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "翻译",
        "termEn": "translation",
        "defZh": "核糖体按 mRNA 密码子合成多肽。",
        "defEn": "A ribosome builds a polypeptide according to the mRNA codons."
      },
      {
        "termZh": "密码子",
        "termEn": "codon",
        "defZh": "mRNA 上连续三个核苷酸，编码一个氨基酸或终止信号。",
        "defEn": "Three consecutive nucleotides on mRNA that code for one amino acid or a stop signal."
      },
      {
        "termZh": "反密码子",
        "termEn": "anticodon",
        "defZh": "tRNA 上与密码子反向平行配对的三个核苷酸。",
        "defEn": "Three nucleotides on a tRNA that pair antiparallel to a codon."
      },
      {
        "termZh": "阅读框",
        "termEn": "reading frame",
        "defZh": "从起始密码子开始、按三个核苷酸一组划分 mRNA 的方式。",
        "defEn": "The grouping of mRNA into threes, beginning at the start codon."
      },
      {
        "termZh": "多聚核糖体",
        "termEn": "polyribosome",
        "defZh": "同时翻译同一条 mRNA 的多个核糖体。",
        "defEn": "Several ribosomes translating one mRNA at the same time."
      }
    ],
    "summary": "翻译 · Translation",
    "learningObjectives": [
      "能陈述「翻译」的准确定义与适用对象 · State the precise definition of Translation and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Translation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「翻译」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "翻译（Translation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「翻译」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「翻译」的工作方程或机制链。"
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
      "掌握 6.4「翻译」准确定义 · State the precise definition of 6.4 Translation.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「翻译」的结论 · Applying the conclusion of Translation when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「翻译」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「翻译」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「翻译」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「翻译」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.3",
        "title": "转录与 RNA 加工",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u6",
        "code": "6.5",
        "title": "基因表达调控",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「翻译」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「翻译」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「翻译」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.5": {
    "id": "bio/bio-u6/6.5",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.5",
    "titleZh": "基因表达调控",
    "titleEn": "Regulation of Gene Expression",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "操纵子",
        "termEn": "operon",
        "defZh": "原核生物中由一个启动子控制、一起转录的一组基因。",
        "defEn": "In prokaryotes, a set of genes transcribed together under one promoter."
      },
      {
        "termZh": "阻遏蛋白",
        "termEn": "repressor",
        "defZh": "结合操纵基因、阻止转录的蛋白质。",
        "defEn": "A protein that binds the operator and blocks transcription."
      },
      {
        "termZh": "启动子",
        "termEn": "promoter",
        "defZh": "RNA 聚合酶结合并开始转录的 DNA 序列。",
        "defEn": "The DNA sequence where RNA polymerase binds and starts transcription."
      },
      {
        "termZh": "转录因子",
        "termEn": "transcription factor",
        "defZh": "结合 DNA 并促进或抑制转录的蛋白质。",
        "defEn": "A protein that binds DNA and increases or decreases transcription."
      },
      {
        "termZh": "增强子",
        "termEn": "enhancer",
        "defZh": "可远离基因、通过结合激活蛋白提高转录的 DNA 序列。",
        "defEn": "A DNA sequence, which may be far from the gene, that raises transcription when an activator binds."
      },
      {
        "termZh": "DNA 甲基化",
        "termEn": "DNA methylation",
        "defZh": "在碱基上加甲基，不改变序列，但常降低转录。",
        "defEn": "Addition of a methyl group to a base. It does not change the sequence but often reduces transcription."
      }
    ],
    "summary": "基因表达调控 · Regulation of Gene Expression",
    "learningObjectives": [
      "能陈述「基因表达调控」的准确定义与适用对象 · State the precise definition of Regulation of Gene Expression and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Regulation of Gene Expression：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「基因表达调控」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "基因表达调控（Regulation of Gene Expression）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「基因表达调控」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「基因表达调控」的工作方程或机制链。"
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
      "掌握 6.5「基因表达调控」准确定义 · State the precise definition of 6.5 Regulation of Gene Expression.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「基因表达调控」的结论 · Applying the conclusion of Regulation of Gene Expression when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「基因表达调控」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「基因表达调控」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「基因表达调控」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「基因表达调控」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.4",
        "title": "翻译",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u6",
        "code": "6.6",
        "title": "基因表达与细胞特化 · Gene Expression and Cell Specialization",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「基因表达调控」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「基因表达调控」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「基因表达调控」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.6": {
    "id": "bio/bio-u6/6.6",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.6",
    "titleZh": "基因表达与细胞特化",
    "titleEn": "Gene Expression and Cell Specialization",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "细胞分化",
        "termEn": "cell differentiation",
        "defZh": "细胞获得特化结构与功能，通常由不同基因表达造成。",
        "defEn": "A cell acquires a specialized structure and function, usually because different genes are expressed."
      },
      {
        "termZh": "管家基因",
        "termEn": "housekeeping gene",
        "defZh": "多数细胞持续表达、维持基本功能的基因。",
        "defEn": "A gene expressed in most cells to maintain basic functions."
      },
      {
        "termZh": "组织特异基因",
        "termEn": "tissue-specific gene",
        "defZh": "只在特定细胞类型中表达的基因。",
        "defEn": "A gene expressed only in a particular cell type."
      },
      {
        "termZh": "表观遗传",
        "termEn": "epigenetic regulation",
        "defZh": "不改变 DNA 序列而改变表达的调控，如甲基化和染色质状态。",
        "defEn": "Regulation that changes expression without changing the DNA sequence, such as methylation and chromatin state."
      },
      {
        "termZh": "干细胞",
        "termEn": "stem cell",
        "defZh": "能自我更新并产生特化细胞的未完全分化细胞。",
        "defEn": "An incompletely differentiated cell that can renew itself and produce specialized cells."
      }
    ],
    "summary": "基因表达与细胞特化 · Gene Expression and Cell Specialization",
    "learningObjectives": [
      "能陈述「基因表达与细胞特化」的准确定义与适用对象 · State the precise definition of Gene Expression and Cell Specialization and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Gene Expression and Cell Specialization：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「基因表达与细胞特化」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "基因表达与细胞特化（Gene Expression and Cell Specialization）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「基因表达与细胞特化」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「基因表达与细胞特化」的工作方程或机制链。"
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
      "掌握 6.6「基因表达与细胞特化」准确定义 · State the precise definition of 6.6 Gene Expression and Cell Specialization.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「基因表达与细胞特化」的结论 · Applying the conclusion of Gene Expression and Cell Specialization when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「基因表达与细胞特化」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「基因表达与细胞特化」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「基因表达与细胞特化」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「基因表达与细胞特化」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.5",
        "title": "基因表达调控",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u6",
        "code": "6.7",
        "title": "突变",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「基因表达与细胞特化」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「基因表达与细胞特化」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「基因表达与细胞特化」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.7": {
    "id": "bio/bio-u6/6.7",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.7",
    "titleZh": "突变",
    "titleEn": "Mutations",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "点突变",
        "termEn": "point mutation",
        "defZh": "单个核苷酸被替换。",
        "defEn": "Replacement of a single nucleotide."
      },
      {
        "termZh": "错义突变",
        "termEn": "missense mutation",
        "defZh": "密码子改变后编码另一种氨基酸。",
        "defEn": "A codon change that codes for a different amino acid."
      },
      {
        "termZh": "无义突变",
        "termEn": "nonsense mutation",
        "defZh": "密码子变为终止密码子，多肽提前结束。",
        "defEn": "A codon becomes a stop codon, so the polypeptide ends early."
      },
      {
        "termZh": "移码突变",
        "termEn": "frameshift mutation",
        "defZh": "插入或缺失不是 3 的倍数的核苷酸，改变下游阅读框。",
        "defEn": "Insertion or deletion of a number of nucleotides that is not a multiple of 3, changing the downstream reading frame."
      },
      {
        "termZh": "沉默突变",
        "termEn": "silent mutation",
        "defZh": "核苷酸改变但密码子仍编码同一氨基酸。",
        "defEn": "A nucleotide change that still codes for the same amino acid."
      }
    ],
    "summary": "突变 · Mutations",
    "learningObjectives": [
      "能陈述「突变」的准确定义与适用对象 · State the precise definition of Mutations and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Mutations：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「突变」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "突变（Mutations）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「突变」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「突变」的工作方程或机制链。"
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
      "掌握 6.7「突变」准确定义 · State the precise definition of 6.7 Mutations.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「突变」的结论 · Applying the conclusion of Mutations when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「突变」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「突变」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「突变」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「突变」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.6",
        "title": "基因表达与细胞特化 · Gene Expression and Cell Specialization",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u6",
        "code": "6.8",
        "title": "生物技术",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「突变」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「突变」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「突变」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "6.8": {
    "id": "bio/bio-u6/6.8",
    "subject": "bio",
    "chapterId": "bio-u6",
    "unitCode": "6",
    "unitTitleZh": "基因表达与调控",
    "unitTitleEn": "Gene Expression and Regulation",
    "code": "6.8",
    "titleZh": "生物技术",
    "titleEn": "Biotechnology",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "限制酶",
        "termEn": "restriction enzyme",
        "defZh": "在特定 DNA 序列切割双链 DNA 的酶。",
        "defEn": "An enzyme that cuts double-stranded DNA at a specific sequence."
      },
      {
        "termZh": "PCR",
        "termEn": "PCR",
        "defZh": "用温度循环和引物指数扩增特定 DNA 片段。",
        "defEn": "Exponential amplification of a specific DNA segment by temperature cycles and primers."
      },
      {
        "termZh": "凝胶电泳",
        "termEn": "gel electrophoresis",
        "defZh": "在电场中按大小、电荷和构象分离核酸或蛋白质。",
        "defEn": "Separation of nucleic acids or proteins in an electric field by size, charge, and conformation."
      },
      {
        "termZh": "重组 DNA",
        "termEn": "recombinant DNA",
        "defZh": "来自不同来源的 DNA 被连接在一起。",
        "defEn": "DNA from different sources joined together."
      },
      {
        "termZh": "CRISPR-Cas9",
        "termEn": "CRISPR-Cas9",
        "defZh": "由向导 RNA 把 Cas9 带到目标 DNA 并切割的基因编辑系统。",
        "defEn": "A gene-editing system in which a guide RNA brings Cas9 to a target DNA sequence to cut it."
      }
    ],
    "summary": "生物技术 · Biotechnology",
    "learningObjectives": [
      "能陈述「生物技术」的准确定义与适用对象 · State the precise definition of Biotechnology and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Biotechnology：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「生物技术」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "生物技术（Biotechnology）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「生物技术」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「生物技术」的工作方程或机制链。"
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
      "掌握 6.8「生物技术」准确定义 · State the precise definition of 6.8 Biotechnology.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「生物技术」的结论 · Applying the conclusion of Biotechnology when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「生物技术」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「生物技术」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「生物技术」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「生物技术」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u6",
        "code": "6.7",
        "title": "突变",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u6",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「生物技术」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「生物技术」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「生物技术」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
