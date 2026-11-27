export const UNIT = {
  "id": "bio-u5",
  "code": "5",
  "titleZh": "遗传",
  "titleEn": "Heredity",
  "subject": "bio",
  "layer": "ap"
};
export const TOPICS = {
  "5.1": {
    "id": "bio/bio-u5/5.1",
    "subject": "bio",
    "chapterId": "bio-u5",
    "unitCode": "5",
    "unitTitleZh": "遗传",
    "unitTitleEn": "Heredity",
    "code": "5.1",
    "titleZh": "减数分裂",
    "titleEn": "Meiosis",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "减数分裂",
        "termEn": "meiosis",
        "defZh": "产生配子的两次分裂，DNA 只复制一次，染色体数减半。",
        "defEn": "Two divisions that produce gametes. DNA is replicated once and the chromosome number is halved."
      },
      {
        "termZh": "减数第一次分裂",
        "termEn": "meiosis I",
        "defZh": "同源染色体分离，染色体数减半的分裂。",
        "defEn": "The division in which homologous chromosomes separate and the chromosome number is halved."
      },
      {
        "termZh": "减数第二次分裂",
        "termEn": "meiosis II",
        "defZh": "姐妹染色单体分离，类似一次没有再次复制 DNA 的有丝分裂。",
        "defEn": "The division in which sister chromatids separate, like a mitosis without another round of DNA replication."
      },
      {
        "termZh": "联会",
        "termEn": "synapsis",
        "defZh": "减数第一次分裂前期同源染色体配对。",
        "defEn": "Pairing of homologous chromosomes in prophase I."
      },
      {
        "termZh": "交叉互换",
        "termEn": "crossing over",
        "defZh": "非姐妹染色单体交换对应片段，产生重组染色单体。",
        "defEn": "Non-sister chromatids exchange corresponding segments, producing recombinant chromatids."
      }
    ],
    "summary": "减数分裂 · Meiosis",
    "learningObjectives": [
      "能陈述「减数分裂」的准确定义与适用对象 · State the precise definition of Meiosis and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Meiosis：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「减数分裂」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "减数分裂（Meiosis）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「减数分裂」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「减数分裂」的工作方程或机制链。"
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
      "掌握 5.1「减数分裂」准确定义 · State the precise definition of 5.1 Meiosis.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「减数分裂」的结论 · Applying the conclusion of Meiosis when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「减数分裂」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「减数分裂」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「减数分裂」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「减数分裂」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u5",
        "code": "5.2",
        "title": "减数分裂与遗传多样性",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「减数分裂」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「减数分裂」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「减数分裂」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "5.2": {
    "id": "bio/bio-u5/5.2",
    "subject": "bio",
    "chapterId": "bio-u5",
    "unitCode": "5",
    "unitTitleZh": "遗传",
    "unitTitleEn": "Heredity",
    "code": "5.2",
    "titleZh": "减数分裂与遗传多样性",
    "titleEn": "Meiosis and Genetic Diversity",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "独立分配",
        "termEn": "independent assortment",
        "defZh": "不同对同源染色体在减数第一次分裂中随机走向两极。",
        "defEn": "Different homologous pairs orient randomly toward the poles in meiosis I."
      },
      {
        "termZh": "重组",
        "termEn": "recombination",
        "defZh": "交叉互换使一条染色单体同时带有双亲的等位基因。",
        "defEn": "Crossing over puts alleles from both parents on one chromatid."
      },
      {
        "termZh": "单倍体",
        "termEn": "haploid",
        "defZh": "只含一套染色体的细胞，如配子。",
        "defEn": "A cell with one set of chromosomes, such as a gamete."
      },
      {
        "termZh": "二倍体",
        "termEn": "diploid",
        "defZh": "含两套染色体的细胞。",
        "defEn": "A cell with two sets of chromosomes."
      },
      {
        "termZh": "受精",
        "termEn": "fertilization",
        "defZh": "两个单倍体配子融合，恢复二倍体。",
        "defEn": "Fusion of two haploid gametes, restoring the diploid number."
      }
    ],
    "summary": "减数分裂与遗传多样性 · Meiosis and Genetic Diversity",
    "learningObjectives": [
      "能陈述「减数分裂与遗传多样性」的准确定义与适用对象 · State the precise definition of Meiosis and Genetic Diversity and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Meiosis and Genetic Diversity：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「减数分裂与遗传多样性」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "减数分裂与遗传多样性（Meiosis and Genetic Diversity）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「减数分裂与遗传多样性」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「减数分裂与遗传多样性」的工作方程或机制链。"
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
      "掌握 5.2「减数分裂与遗传多样性」准确定义 · State the precise definition of 5.2 Meiosis and Genetic Diversity.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「减数分裂与遗传多样性」的结论 · Applying the conclusion of Meiosis and Genetic Diversity when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「减数分裂与遗传多样性」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「减数分裂与遗传多样性」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「减数分裂与遗传多样性」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「减数分裂与遗传多样性」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u5",
        "code": "5.1",
        "title": "减数分裂",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u5",
        "code": "5.3",
        "title": "孟德尔遗传",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「减数分裂与遗传多样性」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「减数分裂与遗传多样性」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「减数分裂与遗传多样性」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "5.3": {
    "id": "bio/bio-u5/5.3",
    "subject": "bio",
    "chapterId": "bio-u5",
    "unitCode": "5",
    "unitTitleZh": "遗传",
    "unitTitleEn": "Heredity",
    "code": "5.3",
    "titleZh": "孟德尔遗传",
    "titleEn": "Mendelian Genetics",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "等位基因",
        "termEn": "allele",
        "defZh": "同一基因的不同版本。",
        "defEn": "A different version of the same gene."
      },
      {
        "termZh": "分离定律",
        "termEn": "law of segregation",
        "defZh": "形成配子时，一对等位基因彼此分开，每个配子只得其中一个。",
        "defEn": "When gametes form, the two alleles of a gene separate, and each gamete receives one."
      },
      {
        "termZh": "自由组合定律",
        "termEn": "law of independent assortment",
        "defZh": "非同源染色体上的基因在配子中独立组合。",
        "defEn": "Genes on different chromosomes assort independently into gametes."
      },
      {
        "termZh": "测交",
        "termEn": "testcross",
        "defZh": "把显性表型个体与隐性纯合子杂交，以判断前者的基因型。",
        "defEn": "Crossing an individual with the dominant phenotype to a homozygous recessive individual to determine the former’s genotype."
      },
      {
        "termZh": "基因型",
        "termEn": "genotype",
        "defZh": "生物的等位基因组成。",
        "defEn": "An organism’s allele composition."
      },
      {
        "termZh": "表型",
        "termEn": "phenotype",
        "defZh": "可观察的性状，由基因型与环境共同决定。",
        "defEn": "An observable trait, set by genotype and environment together."
      }
    ],
    "summary": "孟德尔遗传 · Mendelian Genetics",
    "learningObjectives": [
      "能陈述「孟德尔遗传」的准确定义与适用对象 · State the precise definition of Mendelian Genetics and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Mendelian Genetics：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「孟德尔遗传」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "孟德尔遗传（Mendelian Genetics）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「孟德尔遗传」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「孟德尔遗传」的工作方程或机制链。"
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
      "掌握 5.3「孟德尔遗传」准确定义 · State the precise definition of 5.3 Mendelian Genetics.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「孟德尔遗传」的结论 · Applying the conclusion of Mendelian Genetics when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「孟德尔遗传」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「孟德尔遗传」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「孟德尔遗传」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「孟德尔遗传」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u5",
        "code": "5.2",
        "title": "减数分裂与遗传多样性",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u5",
        "code": "5.4",
        "title": "非孟德尔遗传",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "mendel-punnett",
        "title": "孟德尔遗传与庞纳特方格"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「孟德尔遗传」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「孟德尔遗传」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「孟德尔遗传」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "5.4": {
    "id": "bio/bio-u5/5.4",
    "subject": "bio",
    "chapterId": "bio-u5",
    "unitCode": "5",
    "unitTitleZh": "遗传",
    "unitTitleEn": "Heredity",
    "code": "5.4",
    "titleZh": "非孟德尔遗传",
    "titleEn": "Non-Mendelian Genetics",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "不完全显性",
        "termEn": "incomplete dominance",
        "defZh": "杂合子表型介于两种纯合子之间。",
        "defEn": "The heterozygote’s phenotype is intermediate between the two homozygotes."
      },
      {
        "termZh": "共显性",
        "termEn": "codominance",
        "defZh": "两个等位基因在杂合子中同时充分表达，如 AB 血型。",
        "defEn": "Both alleles are fully expressed in the heterozygote, as in blood type AB."
      },
      {
        "termZh": "复等位基因",
        "termEn": "multiple alleles",
        "defZh": "群体中一个基因有两种以上等位基因，但一个个体通常只有两个。",
        "defEn": "A population has more than two alleles of a gene, but one individual usually has only two."
      },
      {
        "termZh": "上位性",
        "termEn": "epistasis",
        "defZh": "一个基因的表达掩盖或改变另一个基因的表型效应。",
        "defEn": "Expression of one gene masks or changes the phenotypic effect of another gene."
      },
      {
        "termZh": "多基因遗传",
        "termEn": "polygenic inheritance",
        "defZh": "一个性状由多个基因共同决定，常呈连续分布。",
        "defEn": "One trait is set by many genes and often shows a continuous distribution."
      },
      {
        "termZh": "多效性",
        "termEn": "pleiotropy",
        "defZh": "一个基因影响多个性状。",
        "defEn": "One gene affects several traits."
      }
    ],
    "summary": "非孟德尔遗传 · Non-Mendelian Genetics",
    "learningObjectives": [
      "能陈述「非孟德尔遗传」的准确定义与适用对象 · State the precise definition of Non-Mendelian Genetics and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Non-Mendelian Genetics：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「非孟德尔遗传」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "非孟德尔遗传（Non-Mendelian Genetics）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「非孟德尔遗传」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「非孟德尔遗传」的工作方程或机制链。"
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
      "掌握 5.4「非孟德尔遗传」准确定义 · State the precise definition of 5.4 Non-Mendelian Genetics.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「非孟德尔遗传」的结论 · Applying the conclusion of Non-Mendelian Genetics when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「非孟德尔遗传」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「非孟德尔遗传」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「非孟德尔遗传」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「非孟德尔遗传」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u5",
        "code": "5.3",
        "title": "孟德尔遗传",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u5",
        "code": "5.5",
        "title": "环境影响表型",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "mendel-punnett",
        "title": "孟德尔遗传与庞纳特方格"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「非孟德尔遗传」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「非孟德尔遗传」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「非孟德尔遗传」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "5.5": {
    "id": "bio/bio-u5/5.5",
    "subject": "bio",
    "chapterId": "bio-u5",
    "unitCode": "5",
    "unitTitleZh": "遗传",
    "unitTitleEn": "Heredity",
    "code": "5.5",
    "titleZh": "环境影响表型",
    "titleEn": "Environmental Effects on Phenotype",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "表型可塑性",
        "termEn": "phenotypic plasticity",
        "defZh": "同一基因型在不同环境中产生不同表型。",
        "defEn": "The same genotype produces different phenotypes in different environments."
      },
      {
        "termZh": "反应规范",
        "termEn": "norm of reaction",
        "defZh": "一个基因型在一系列环境中可能表现的表型范围。",
        "defEn": "The range of phenotypes a genotype can produce across a set of environments."
      },
      {
        "termZh": "环境因子",
        "termEn": "environmental factor",
        "defZh": "温度、营养或光照等影响性状表现的非遗传条件。",
        "defEn": "A non-genetic condition such as temperature, nutrition, or light that affects how a trait is expressed."
      },
      {
        "termZh": "遗传率",
        "termEn": "heritability",
        "defZh": "群体中表型变异里可归因于遗传差异的比例，不是个体性状被遗传的比例。",
        "defEn": "In a population, the fraction of phenotypic variation attributable to genetic differences. It is not the fraction of an individual’s trait that is inherited."
      }
    ],
    "summary": "环境影响表型 · Environmental Effects on Phenotype",
    "learningObjectives": [
      "能陈述「环境影响表型」的准确定义与适用对象 · State the precise definition of Environmental Effects on Phenotype and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Environmental Effects on Phenotype：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「环境影响表型」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "环境影响表型（Environmental Effects on Phenotype）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「环境影响表型」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "P=G+E",
        "note": "数量性状表型的简化分解：P 表型、G 遗传、E 环境。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「环境影响表型」的工作方程或机制链。"
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
      "适用于多基因/数量性状的简化模型",
      "环境可改变基因表达与表型；实际常含 G×E 互作",
      "P=G+E 不是所有性状的完整模型"
    ],
    "keyPoints": [
      "掌握 5.5「环境影响表型」准确定义 · State the precise definition of 5.5 Environmental Effects on Phenotype.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「环境影响表型」的结论 · Applying the conclusion of Environmental Effects on Phenotype when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「环境影响表型」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "P=G+E"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「环境影响表型」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「环境影响表型」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「环境影响表型」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u5",
        "code": "5.4",
        "title": "非孟德尔遗传",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u5",
        "code": "5.6",
        "title": "染色体遗传",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「环境影响表型」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「环境影响表型」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「环境影响表型」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "5.6": {
    "id": "bio/bio-u5/5.6",
    "subject": "bio",
    "chapterId": "bio-u5",
    "unitCode": "5",
    "unitTitleZh": "遗传",
    "unitTitleEn": "Heredity",
    "code": "5.6",
    "titleZh": "染色体遗传",
    "titleEn": "Chromosomal Inheritance",
    "layer": "ap",
    "vocabulary":     [
      {
        "termZh": "性染色体",
        "termEn": "sex chromosome",
        "defZh": "决定性别的染色体，人类为 X 和 Y。",
        "defEn": "A chromosome that determines sex. In humans these are X and Y."
      },
      {
        "termZh": "常染色体",
        "termEn": "autosome",
        "defZh": "不是性染色体的染色体。",
        "defEn": "A chromosome that is not a sex chromosome."
      },
      {
        "termZh": "伴性遗传",
        "termEn": "sex-linked inheritance",
        "defZh": "基因位于性染色体上，雌雄的遗传模式常常不同。",
        "defEn": "Inheritance of a gene on a sex chromosome. The inheritance pattern often differs between females and males."
      },
      {
        "termZh": "连锁",
        "termEn": "linkage",
        "defZh": "同一条染色体上的基因倾向于一起遗传，除非被交换分开。",
        "defEn": "Genes on the same chromosome tend to be inherited together unless crossing over separates them."
      },
      {
        "termZh": "非整倍体",
        "termEn": "aneuploidy",
        "defZh": "染色体数目不是整套的整数倍，常由不分离引起。",
        "defEn": "A chromosome number that is not an integer multiple of the haploid set, often caused by nondisjunction."
      }
    ],
    "summary": "染色体遗传 · Chromosomal Inheritance",
    "learningObjectives": [
      "能陈述「染色体遗传」的准确定义与适用对象 · State the precise definition of Chromosomal Inheritance and what it applies to.",
      "能在符号、图像、数值三种表征间转换 · Move among symbolic, graphical, and numerical representations.",
      "能完成一道计算/论证题并检查合理性 · Complete one calculation or argument and check that it is reasonable."
    ],
    "essentialKnowledge": [
      "Chromosomal Inheritance：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「染色体遗传」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "染色体遗传（Chromosomal Inheritance）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「染色体遗传」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「染色体遗传」的工作方程或机制链。"
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
      "掌握 5.6「染色体遗传」准确定义 · State the precise definition of 5.6 Chromosomal Inheritance.",
      "四种表征互译（符号/图像/数值/文字） · Translate among symbolic, graphical, numerical, and verbal representations.",
      "适用条件、反例与边界 · State the conditions of use, counterexamples, and boundaries.",
      "AP 简答：主张—证据—推理或完整推导 · On an AP free-response item, use claim–evidence–reasoning or a complete derivation.",
      "与相邻知识点的联系 · Connect the idea to neighboring topics."
    ],
    "misconceptions": [
      "在不满足假设时直接套用「染色体遗传」的结论 · Applying the conclusion of Chromosomal Inheritance when its assumptions are not met.",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式） · A slash fraction makes the order of operations ambiguous; use a stacked fraction.",
      "混淆符号含义或遗漏矢量方向/场方向 · Mixing up what a symbol means, or omitting a vector or field direction.",
      "把平均变化率当作瞬时变化率（或反之） · Treating an average rate of change as an instantaneous rate, or the reverse.",
      "忽略单位换算与有效数字 · Ignoring unit conversions and significant figures.",
      "把相关当作因果；缺少对照却下机制结论 · Treating correlation as causation, or drawing a mechanism conclusion without a control"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「染色体遗传」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「染色体遗传」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「染色体遗传」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「染色体遗传」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u5",
        "code": "5.5",
        "title": "环境影响表型",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u5",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「染色体遗传」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「染色体遗传」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「染色体遗传」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  }
};
