export const UNIT = {
  "id": "bio-u1",
  "code": "1",
  "titleZh": "生命化学",
  "titleEn": "Chemistry of Life",
  "subject": "bio",
  "layer": "ap"
};
export const TOPICS = {
  "1.1": {
    "id": "bio/bio-u1/1.1",
    "subject": "bio",
    "chapterId": "bio-u1",
    "unitCode": "1",
    "unitTitleZh": "生命化学",
    "unitTitleEn": "Chemistry of Life",
    "code": "1.1",
    "titleZh": "水与生命",
    "titleEn": "Structure of Water and Hydrogen Bonding",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "极性",
        "termEn": "polarity",
        "defZh": "分子内电荷分布不均，形成部分正电与部分负电的区域。",
        "defEn": "An uneven charge distribution that creates partial positive and partial negative regions."
      },
      {
        "termZh": "氢键",
        "termEn": "hydrogen bond",
        "defZh": "一个分子中与强电负性原子相连的氢，与另一分子的电负性原子之间的弱吸引。",
        "defEn": "A weak attraction between a hydrogen bonded to a strongly electronegative atom and an electronegative atom on another molecule."
      },
      {
        "termZh": "内聚",
        "termEn": "cohesion",
        "defZh": "同种分子因氢键等作用互相吸引，如水分子彼此粘连。",
        "defEn": "Attraction between like molecules, such as water molecules clinging to one another by hydrogen bonds."
      },
      {
        "termZh": "黏附",
        "termEn": "adhesion",
        "defZh": "不同物质的分子互相吸引，如水附着在极性表面。",
        "defEn": "Attraction between molecules of different substances, such as water clinging to a polar surface."
      },
      {
        "termZh": "比热",
        "termEn": "specific heat",
        "defZh": "使单位质量物质升高单位温度所需的热量；水的比热高，温度变化较慢。",
        "defEn": "The heat needed to raise the temperature of a unit mass by one degree; water’s high specific heat makes its temperature change slowly."
      },
      {
        "termZh": "溶剂",
        "termEn": "solvent",
        "defZh": "能溶解其他物质的液体；水因极性可溶解许多离子和极性分子。",
        "defEn": "A liquid that dissolves other substances; polar water dissolves many ions and polar molecules."
      }
    ],
    "summary": "水与生命 · Structure of Water and Hydrogen Bonding",
    "learningObjectives": [
      "能陈述「水与生命」的准确定义与适用对象 · State the precise definition of Structure of Water and Hydrogen Bonding and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Structure of Water and Hydrogen Bonding：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「水与生命」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "水与生命（Structure of Water and Hydrogen Bonding）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「水与生命」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「水与生命」的工作方程或机制链。"
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
      "掌握 1.1「水与生命」准确定义 · State the precise definition of 1.1 Structure of Water and Hydrogen Bonding.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「水与生命」的结论 · Applying the conclusion of Structure of Water and Hydrogen Bonding when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「水与生命」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「水与生命」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「水与生命」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「水与生命」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u1",
        "code": "1.2",
        "title": "元素与大分子",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「水与生命」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「水与生命」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「水与生命」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "1.2": {
    "id": "bio/bio-u1/1.2",
    "subject": "bio",
    "chapterId": "bio-u1",
    "unitCode": "1",
    "unitTitleZh": "生命化学",
    "unitTitleEn": "Chemistry of Life",
    "code": "1.2",
    "titleZh": "元素与大分子",
    "titleEn": "Elements of Life",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "CHNOPS",
        "termEn": "CHNOPS",
        "defZh": "碳、氢、氮、氧、磷、硫，是生物大分子中最常见的六种元素。",
        "defEn": "Carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur, the six elements most common in biological macromolecules."
      },
      {
        "termZh": "碳骨架",
        "termEn": "carbon skeleton",
        "defZh": "由碳—碳键构成的分子骨架，可成链、分支或成环。",
        "defEn": "The framework of carbon–carbon bonds in a molecule, which may be a chain, branched, or a ring."
      },
      {
        "termZh": "官能团",
        "termEn": "functional group",
        "defZh": "连在碳骨架上、决定分子化学反应性的原子团，如羟基和羧基。",
        "defEn": "A group of atoms attached to a carbon skeleton that sets the molecule’s chemical reactivity, such as hydroxyl or carboxyl."
      },
      {
        "termZh": "单体",
        "termEn": "monomer",
        "defZh": "可重复连接成聚合物的小分子亚基。",
        "defEn": "A small molecular subunit that can be linked repeatedly to form a polymer."
      },
      {
        "termZh": "聚合物",
        "termEn": "polymer",
        "defZh": "由许多单体通过共价键连接而成的大分子。",
        "defEn": "A large molecule made of many monomers joined by covalent bonds."
      }
    ],
    "summary": "元素与大分子 · Elements of Life",
    "learningObjectives": [
      "能陈述「元素与大分子」的准确定义与适用对象 · State the precise definition of Elements of Life and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Elements of Life：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「元素与大分子」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "元素与大分子（Elements of Life）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「元素与大分子」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「元素与大分子」的工作方程或机制链。"
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
      "掌握 1.2「元素与大分子」准确定义 · State the precise definition of 1.2 Elements of Life.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「元素与大分子」的结论 · Applying the conclusion of Elements of Life when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「元素与大分子」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「元素与大分子」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「元素与大分子」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「元素与大分子」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u1",
        "code": "1.1",
        "title": "水与生命",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u1",
        "code": "1.3",
        "title": "生物大分子导论",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「元素与大分子」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「元素与大分子」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「元素与大分子」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "1.3": {
    "id": "bio/bio-u1/1.3",
    "subject": "bio",
    "chapterId": "bio-u1",
    "unitCode": "1",
    "unitTitleZh": "生命化学",
    "unitTitleEn": "Chemistry of Life",
    "code": "1.3",
    "titleZh": "生物大分子导论",
    "titleEn": "Introduction to Biological Macromolecules",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "脱水缩合",
        "termEn": "dehydration synthesis",
        "defZh": "两个单体连接时脱去一分子水并形成共价键的反应。",
        "defEn": "A reaction that joins two monomers by removing a molecule of water and forming a covalent bond."
      },
      {
        "termZh": "水解",
        "termEn": "hydrolysis",
        "defZh": "加水使聚合物中的共价键断裂、释放单体的反应，是消化的化学基础。",
        "defEn": "A reaction that adds water to break a covalent bond in a polymer and release monomers; the chemical basis of digestion."
      },
      {
        "termZh": "糖类",
        "termEn": "carbohydrate",
        "defZh": "由碳、氢、氧组成的糖及其聚合物，可储能或构成结构。",
        "defEn": "Sugars and their polymers, made of carbon, hydrogen, and oxygen, used for energy storage or structure."
      },
      {
        "termZh": "脂质",
        "termEn": "lipid",
        "defZh": "疏水的生物分子，包括脂肪、磷脂和类固醇；并非都是聚合物。",
        "defEn": "Hydrophobic biological molecules, including fats, phospholipids, and steroids; not all are polymers."
      },
      {
        "termZh": "蛋白质",
        "termEn": "protein",
        "defZh": "由氨基酸经肽键连接而成的聚合物，结构决定功能。",
        "defEn": "A polymer of amino acids joined by peptide bonds, whose structure determines its function."
      },
      {
        "termZh": "核酸",
        "termEn": "nucleic acid",
        "defZh": "由核苷酸组成的聚合物，DNA 与 RNA 储存或传递遗传信息。",
        "defEn": "A polymer of nucleotides; DNA and RNA store or transmit genetic information."
      }
    ],
    "summary": "生物大分子导论 · Introduction to Biological Macromolecules",
    "learningObjectives": [
      "能陈述「生物大分子导论」的准确定义与适用对象 · State the precise definition of Introduction to Biological Macromolecules and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Introduction to Biological Macromolecules：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「生物大分子导论」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "生物大分子导论（Introduction to Biological Macromolecules）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「生物大分子导论」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「生物大分子导论」的工作方程或机制链。"
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
      "掌握 1.3「生物大分子导论」准确定义 · State the precise definition of 1.3 Introduction to Biological Macromolecules.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「生物大分子导论」的结论 · Applying the conclusion of Introduction to Biological Macromolecules when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「生物大分子导论」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「生物大分子导论」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「生物大分子导论」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「生物大分子导论」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u1",
        "code": "1.2",
        "title": "元素与大分子",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u1",
        "code": "1.4",
        "title": "蛋白质性质",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「生物大分子导论」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「生物大分子导论」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「生物大分子导论」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "1.4": {
    "id": "bio/bio-u1/1.4",
    "subject": "bio",
    "chapterId": "bio-u1",
    "unitCode": "1",
    "unitTitleZh": "生命化学",
    "unitTitleEn": "Chemistry of Life",
    "code": "1.4",
    "titleZh": "蛋白质性质",
    "titleEn": "Properties of Biological Macromolecules",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "氨基酸",
        "termEn": "amino acid",
        "defZh": "同时含氨基和羧基的单体，R 基团决定其性质；标准氨基酸有 20 种。",
        "defEn": "A monomer with both an amino group and a carboxyl group; the R group sets its properties. There are 20 standard amino acids."
      },
      {
        "termZh": "肽键",
        "termEn": "peptide bond",
        "defZh": "一个氨基酸的羧基与另一个的氨基脱水缩合形成的共价键。",
        "defEn": "The covalent bond formed by dehydration synthesis between one amino acid’s carboxyl group and another’s amino group."
      },
      {
        "termZh": "一级结构",
        "termEn": "primary structure",
        "defZh": "蛋白质中氨基酸的线性序列，按 N 端到 C 端书写。",
        "defEn": "The linear sequence of amino acids in a protein, written from the N terminus to the C terminus."
      },
      {
        "termZh": "二级结构",
        "termEn": "secondary structure",
        "defZh": "主链氢键稳定的局部折叠，如 α 螺旋和 β 折叠。",
        "defEn": "Local folding stabilized by hydrogen bonds in the backbone, such as the alpha helix and beta sheet."
      },
      {
        "termZh": "三级结构",
        "termEn": "tertiary structure",
        "defZh": "整条多肽的三维构象，常由疏水作用、离子键、氢键和二硫键稳定。",
        "defEn": "The three-dimensional conformation of a whole polypeptide, often stabilized by the hydrophobic effect, ionic bonds, hydrogen bonds, and disulfide bonds."
      },
      {
        "termZh": "变性",
        "termEn": "denaturation",
        "defZh": "非共价相互作用被破坏，高级结构展开，但肽键通常不断裂。",
        "defEn": "Disruption of noncovalent interactions so that higher-order structure unfolds, while peptide bonds usually remain intact."
      }
    ],
    "summary": "蛋白质性质 · Properties of Biological Macromolecules",
    "learningObjectives": [
      "能陈述「蛋白质性质」的准确定义与适用对象 · State the precise definition of Properties of Biological Macromolecules and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Properties of Biological Macromolecules：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「蛋白质性质」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "蛋白质性质（Properties of Biological Macromolecules）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「蛋白质性质」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「蛋白质性质」的工作方程或机制链。"
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
      "掌握 1.4「蛋白质性质」准确定义 · State the precise definition of 1.4 Properties of Biological Macromolecules.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「蛋白质性质」的结论 · Applying the conclusion of Properties of Biological Macromolecules when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「蛋白质性质」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「蛋白质性质」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「蛋白质性质」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「蛋白质性质」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u1",
        "code": "1.3",
        "title": "生物大分子导论",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u1",
        "code": "1.5",
        "title": "核酸",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「蛋白质性质」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「蛋白质性质」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「蛋白质性质」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "1.5": {
    "id": "bio/bio-u1/1.5",
    "subject": "bio",
    "chapterId": "bio-u1",
    "unitCode": "1",
    "unitTitleZh": "生命化学",
    "unitTitleEn": "Chemistry of Life",
    "code": "1.5",
    "titleZh": "核酸",
    "titleEn": "Nucleic Acids",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "核苷酸",
        "termEn": "nucleotide",
        "defZh": "核酸的单体，由磷酸、五碳糖和含氮碱基组成。",
        "defEn": "The monomer of a nucleic acid, made of a phosphate, a five-carbon sugar, and a nitrogenous base."
      },
      {
        "termZh": "磷酸二酯键",
        "termEn": "phosphodiester bond",
        "defZh": "连接一个核苷酸的 5′ 磷酸与下一个核苷酸 3′ 羟基的共价键。",
        "defEn": "The covalent bond joining the 5′ phosphate of one nucleotide to the 3′ hydroxyl of the next."
      },
      {
        "termZh": "反向平行",
        "termEn": "antiparallel",
        "defZh": "DNA 双链方向相反，一条为 5′→3′，另一条为 3′→5′。",
        "defEn": "The two DNA strands run in opposite directions, one 5′→3′ and the other 3′→5′."
      },
      {
        "termZh": "碱基互补配对",
        "termEn": "complementary base pairing",
        "defZh": "A 与 T（RNA 中为 U）配对，G 与 C 配对。",
        "defEn": "A pairs with T (or U in RNA) and G pairs with C."
      },
      {
        "termZh": "脱氧核糖",
        "termEn": "deoxyribose",
        "defZh": "DNA 中的五碳糖，2′ 碳上没有羟基；RNA 的核糖在该处有羟基。",
        "defEn": "The five-carbon sugar in DNA, which lacks a hydroxyl on the 2′ carbon; RNA’s ribose has that hydroxyl."
      }
    ],
    "summary": "核酸 · Nucleic Acids",
    "learningObjectives": [
      "能陈述「核酸」的准确定义与适用对象 · State the precise definition of Nucleic Acids and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Nucleic Acids：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「核酸」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "核酸（Nucleic Acids）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「核酸」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「核酸」的工作方程或机制链。"
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
      "掌握 1.5「核酸」准确定义 · State the precise definition of 1.5 Nucleic Acids.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「核酸」的结论 · Applying the conclusion of Nucleic Acids when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「核酸」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「核酸」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「核酸」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「核酸」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u1",
        "code": "1.4",
        "title": "蛋白质性质",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u1",
        "code": "1.6",
        "title": "酶结构与功能",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「核酸」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「核酸」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「核酸」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "1.6": {
    "id": "bio/bio-u1/1.6",
    "subject": "bio",
    "chapterId": "bio-u1",
    "unitCode": "1",
    "unitTitleZh": "生命化学",
    "unitTitleEn": "Chemistry of Life",
    "code": "1.6",
    "titleZh": "酶结构与功能",
    "titleEn": "Structure and Function of Enzymes",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "活性位点",
        "termEn": "active site",
        "defZh": "酶上与底物结合并发生催化的区域，其形状和电荷决定特异性。",
        "defEn": "The region of an enzyme that binds substrate and carries out catalysis; its shape and charge set the specificity."
      },
      {
        "termZh": "底物",
        "termEn": "substrate",
        "defZh": "被酶结合并转化的反应物。",
        "defEn": "The reactant that an enzyme binds and converts."
      },
      {
        "termZh": "活化能",
        "termEn": "activation energy",
        "defZh": "反应物达到过渡态所需的能量；酶降低活化能但不改变 \\(\\Delta G\\)。",
        "defEn": "The energy reactants need to reach the transition state. An enzyme lowers it and does not change \\(\\Delta G\\)."
      },
      {
        "termZh": "诱导契合",
        "termEn": "induced fit",
        "defZh": "底物结合后活性位点构象微调，使催化基团就位。",
        "defEn": "A small change in active-site shape after substrate binds, which positions the catalytic groups."
      },
      {
        "termZh": "变性",
        "termEn": "denaturation",
        "defZh": "高温或极端 pH 破坏酶的构象，使活性位点不再能结合底物。",
        "defEn": "Heat or extreme pH disrupts enzyme conformation so the active site can no longer bind substrate."
      }
    ],
    "summary": "酶结构与功能 · Structure and Function of Enzymes",
    "learningObjectives": [
      "能陈述「酶结构与功能」的准确定义与适用对象 · State the precise definition of Structure and Function of Enzymes and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Structure and Function of Enzymes：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「酶结构与功能」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "酶结构与功能（Structure and Function of Enzymes）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「酶结构与功能」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "E+S\\rightleftharpoons ES\\rightarrow E+P",
        "note": "酶—底物复合物；活性位点决定特异性。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「酶结构与功能」的工作方程或机制链。"
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
      "活性位点与底物形状/化学性质互补（诱导契合）",
      "适宜温度与 pH；过酸、过碱或高温可使酶变性",
      "酶降低活化能，不改变 ΔG 与平衡点"
    ],
    "keyPoints": [
      "掌握 1.6「酶结构与功能」准确定义 · State the precise definition of 1.6 Structure and Function of Enzymes.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「酶结构与功能」的结论 · Applying the conclusion of Structure and Function of Enzymes when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「酶结构与功能」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "E+S\\rightleftharpoons ES\\rightarrow E+P"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「酶结构与功能」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「酶结构与功能」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「酶结构与功能」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u1",
        "code": "1.5",
        "title": "核酸",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "enzyme-activity",
        "title": "酶活性与温度/pH"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「酶结构与功能」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「酶结构与功能」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「酶结构与功能」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
