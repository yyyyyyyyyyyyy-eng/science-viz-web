export const UNIT = {
  "id": "bio-u8",
  "code": "8",
  "titleZh": "生态学",
  "titleEn": "Ecology",
  "subject": "bio",
  "layer": "ap"
};
export const TOPICS = {
  "8.1": {
    "id": "bio/bio-u8/8.1",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.1",
    "titleZh": "环境响应",
    "titleEn": "Responses to the Environment",
    "layer": "ap",
    "summary": "环境响应 · Responses to the Environment",
    "learningObjectives": [
      "能陈述「环境响应」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Responses to the Environment：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「环境响应」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "环境响应（Responses to the Environment）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「环境响应」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「环境响应」的工作方程或机制链。"
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
      "掌握 8.1「环境响应」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「环境响应」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「环境响应」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「环境响应」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「环境响应」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「环境响应」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.2",
        "title": "能量流",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「环境响应」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「环境响应」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「环境响应」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.2": {
    "id": "bio/bio-u8/8.2",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.2",
    "titleZh": "能量流",
    "titleEn": "Energy Flow Through Ecosystems",
    "layer": "ap",
    "summary": "能量流 · Energy Flow Through Ecosystems",
    "learningObjectives": [
      "能陈述「能量流」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Energy Flow Through Ecosystems：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「能量流」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "能量流（Energy Flow Through Ecosystems）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「能量流」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「能量流」的工作方程或机制链。"
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
      "掌握 8.2「能量流」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「能量流」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「能量流」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「能量流」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「能量流」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「能量流」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.1",
        "title": "环境响应",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.3",
        "title": "种群生态",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「能量流」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「能量流」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「能量流」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.3": {
    "id": "bio/bio-u8/8.3",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.3",
    "titleZh": "种群生态",
    "titleEn": "Population Ecology",
    "layer": "ap",
    "summary": "种群生态 · Population Ecology",
    "learningObjectives": [
      "能陈述「种群生态」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Population Ecology：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「种群生态」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "种群生态（Population Ecology）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「种群生态」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「种群生态」的工作方程或机制链。"
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
      "掌握 8.3「种群生态」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「种群生态」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「种群生态」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「种群生态」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「种群生态」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「种群生态」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.2",
        "title": "能量流",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.4",
        "title": "密度效应",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "lotka-volterra",
        "title": "捕食者–猎物模型"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「种群生态」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「种群生态」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「种群生态」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.4": {
    "id": "bio/bio-u8/8.4",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.4",
    "titleZh": "密度效应",
    "titleEn": "Effect of Density on Populations",
    "layer": "ap",
    "summary": "密度效应 · Effect of Density on Populations",
    "learningObjectives": [
      "能陈述「密度效应」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Effect of Density on Populations：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「密度效应」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "密度效应（Effect of Density on Populations）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「密度效应」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「密度效应」的工作方程或机制链。"
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
      "掌握 8.4「密度效应」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「密度效应」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「密度效应」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「密度效应」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「密度效应」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「密度效应」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.3",
        "title": "种群生态",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.5",
        "title": "群落生态",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "lotka-volterra",
        "title": "捕食者–猎物模型"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「密度效应」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「密度效应」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「密度效应」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.5": {
    "id": "bio/bio-u8/8.5",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.5",
    "titleZh": "群落生态",
    "titleEn": "Community Ecology",
    "layer": "ap",
    "summary": "群落生态 · Community Ecology",
    "learningObjectives": [
      "能陈述「群落生态」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Community Ecology：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「群落生态」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "群落生态（Community Ecology）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「群落生态」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「群落生态」的工作方程或机制链。"
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
      "掌握 8.5「群落生态」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「群落生态」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「群落生态」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「群落生态」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「群落生态」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「群落生态」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.4",
        "title": "密度效应",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.6",
        "title": "生物多样性",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "lotka-volterra",
        "title": "捕食者–猎物模型"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「群落生态」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「群落生态」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「群落生态」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.6": {
    "id": "bio/bio-u8/8.6",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.6",
    "titleZh": "生物多样性",
    "titleEn": "Biodiversity",
    "layer": "ap",
    "summary": "生物多样性 · Biodiversity",
    "learningObjectives": [
      "能陈述「生物多样性」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Biodiversity：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「生物多样性」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "生物多样性（Biodiversity）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「生物多样性」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「生物多样性」的工作方程或机制链。"
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
      "掌握 8.6「生物多样性」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「生物多样性」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「生物多样性」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「生物多样性」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「生物多样性」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「生物多样性」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.5",
        "title": "群落生态",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.7",
        "title": "生态系统扰动",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「生物多样性」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「生物多样性」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「生物多样性」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.7": {
    "id": "bio/bio-u8/8.7",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.7",
    "titleZh": "生态系统扰动",
    "titleEn": "Disruptions to Ecosystems",
    "layer": "ap",
    "summary": "生态系统扰动 · Disruptions to Ecosystems",
    "learningObjectives": [
      "能陈述「生态系统扰动」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Disruptions to Ecosystems：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「生态系统扰动」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "生态系统扰动（Disruptions to Ecosystems）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「生态系统扰动」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「生态系统扰动」的工作方程或机制链。"
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
      "掌握 8.7「生态系统扰动」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「生态系统扰动」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「生态系统扰动」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「生态系统扰动」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「生态系统扰动」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「生态系统扰动」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.6",
        "title": "生物多样性",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「生态系统扰动」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「生态系统扰动」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「生态系统扰动」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.10": {
    "id": "bio/bio-u8/8.10",
    "subject": "bio",
    "chapterId": "bio-u8",
    "unitCode": "8",
    "unitTitleZh": "生态学",
    "unitTitleEn": "Ecology",
    "code": "8.10",
    "titleZh": "生态层级与物质循环",
    "titleEn": "Ecological Organization and Biogeochemical Cycles",
    "layer": "ap",
    "summary": "生态层级从种群、群落、生态系统到生物群系；物质在生物与非生物储库之间循环，能量则单向流动并以热散失。水、碳、氮、磷循环各有不同的储库、通量与关键过程。 · Ecological organization runs from populations and communities to ecosystems and biomes. Matter cycles between biotic and abiotic reservoirs while energy flows one way and is lost as heat; the water, carbon, nitrogen, and phosphorus cycles differ in their reservoirs, fluxes, and key processes.",
    "learningObjectives": [
      "能按个体、种群、群落、生态系统、生物群系、生物圈排列生态层级，并说明生态系统由生物群落与非生物环境组成。 · Order the levels of ecological organization from organism to population, community, ecosystem, biome, and biosphere, and explain that an ecosystem consists of a biological community plus its abiotic environment.",
      "能区分储库与通量，用物质守恒解释生物地球化学循环，并用 \\(\\tau=\\dfrac{R}{F}\\) 估算简单体系的驻留时间。 · Distinguish reservoirs from fluxes, use conservation of matter to explain biogeochemical cycles, and estimate residence time with \\(\\tau=\\dfrac{R}{F}\\).",
      "能说出水循环的四个主要储库以及蒸发、凝结、降水、蒸腾四个过程，并补充径流与下渗的作用。 · Name the four major reservoirs of the hydrologic cycle and the processes of evaporation, condensation, precipitation, and transpiration, and explain the roles of runoff and infiltration.",
      "能概述碳循环的光合作用、细胞呼吸、分解与燃烧四个部分，并说明化石燃料燃烧如何改变大气碳库。 · Outline the four parts of the carbon cycle—photosynthesis, cellular respiration, decomposition, and combustion—and explain how burning fossil fuels changes the atmospheric carbon reservoir.",
      "能按固氮、同化、氨化、硝化、反硝化的顺序说明氮循环，指出执行这些步骤的微生物以及好氧/厌氧条件。 · Sequence the nitrogen cycle as nitrogen fixation, assimilation, ammonification, nitrification, and denitrification, identifying the microorganisms and the aerobic or anaerobic conditions for each step.",
      "能解释磷循环的风化、同化、摄食传递、分解/排泄与沉积过程，并比较能量流动与物质循环在营养级间的差别。 · Explain weathering, assimilation, trophic transfer, decomposition/excretion, and sedimentation in the phosphorus cycle, and compare energy flow with matter cycling through trophic levels."
    ],
    "essentialKnowledge": [
      "（8.2.B.1）生态层级包括个体、种群、群落、生态系统、生物群系与生物圈；种群是同种个体，群落是同一区域所有物种的相互作用，生态系统还包括非生物环境。 · (8.2.B.1) Ecological levels include organism, population, community, ecosystem, biome, and biosphere; a population is one species, a community includes all interacting species in an area, and an ecosystem also includes the abiotic environment.",
      "（8.2.B.2）能量在生态系统中单向流动，而物质与养分通过生物地球化学循环在环境与生物体之间循环；每个循环都体现物质守恒，且水、碳、氮、磷循环彼此依赖。 · (8.2.B.2) Energy flows one way through ecosystems, while matter and nutrients cycle between the environment and organisms through biogeochemical cycles; each cycle demonstrates conservation of matter, and the water, carbon, nitrogen, and phosphorus cycles are interdependent.",
      "（8.2.B.3）生物地球化学循环包括非生物储库（大气、水体、土壤与岩石、沉积物）和生物储库（生产者、消费者、分解者、碎屑与化石燃料），以及在这些储库之间转移物质的过程。 · (8.2.B.3) Biogeochemical cycles include abiotic reservoirs (atmosphere, water, soil and rocks, sediments) and biotic reservoirs (producers, consumers, decomposers, detritus, and fossil fuels), plus the processes that move matter between them.",
      "（8.2.B.3）储库是物质暂时储存的场所，通量是单位时间内从一个储库进入另一个储库的量；稳态下平均驻留时间 \\(\\tau=\\dfrac{R}{F}\\)，其中 \\(R\\) 为储库量、\\(F\\) 为通量。 · (8.2.B.3) A reservoir is a place where matter is stored, and a flux is the amount entering another reservoir per unit time; at steady state the mean residence time is \\(\\tau=\\dfrac{R}{F}\\), where \\(R\\) is the reservoir amount and \\(F\\) is the flux.",
      "（8.2.B.4）水循环储库包括海洋（约占地球水量的 97%）、地表水、大气、地下水、冰川以及生物体；大气储库水量很小，但周转极快。 · (8.2.B.4) Hydrologic reservoirs include the oceans (about 97% of Earth’s water), surface water, the atmosphere, groundwater, glaciers, and living organisms; the atmospheric reservoir is small but turns over very rapidly.",
      "（8.2.B.4）水循环的关键过程是蒸发（液态水变为水汽）、蒸腾（植物通过气孔释放水汽）、凝结（水汽变为液滴或冰晶）与降水（雨雪回到地表）；径流把地表水送回海洋，下渗把水补给地下水。 · (8.2.B.4) Key processes are evaporation (liquid water to vapor), transpiration (water vapor loss through plant stomata), condensation (vapor to droplets or ice), and precipitation (rain or snow returning to the surface); runoff carries surface water back to the ocean, and infiltration recharges groundwater.",
      "（8.2.B.5）碳循环在最高组织层次可简化为四部分：光合作用把 \\(\\mathrm{CO_2}\\) 固定为有机物，细胞呼吸与分解把有机碳释放回 \\(\\mathrm{CO_2}\\)，燃烧把化石燃料与生物质中的碳快速释放到大气；沉积与风化在长时间尺度上调节碳。 · (8.2.B.5) At the highest level of organization the carbon cycle has four parts: photosynthesis fixes \\(\\mathrm{CO_2}\\) into organic matter, cellular respiration and decomposition release organic carbon back as \\(\\mathrm{CO_2}\\), and combustion rapidly releases carbon from fossil fuels and biomass; sedimentation and weathering regulate carbon over long timescales.",
      "（8.2.B.6）氮循环包括固氮、同化、氨化、硝化与反硝化：固氮把 \\(\\mathrm{N_2}\\) 变为 \\(\\mathrm{NH_3}\\)，并电离为 \\(\\mathrm{NH_4^+}\\)；同化把 \\(\\mathrm{NH_4^+}\\) 或 \\(\\mathrm{NO_3^-}\\) 纳入氨基酸、核酸等生物分子；氨化把有机氮转回 \\(\\mathrm{NH_4^+}\\)。 · (8.2.B.6) The nitrogen cycle includes fixation, assimilation, ammonification, nitrification, and denitrification: fixation converts \\(\\mathrm{N_2}\\) to \\(\\mathrm{NH_3}\\), which ionizes to \\(\\mathrm{NH_4^+}\\); assimilation incorporates \\(\\mathrm{NH_4^+}\\) or \\(\\mathrm{NO_3^-}\\) into amino acids, nucleic acids, and other biomolecules; ammonification returns organic nitrogen to \\(\\mathrm{NH_4^+}\\).",
      "（8.2.B.6）硝化在好氧条件下把 \\(\\mathrm{NH_4^+}\\) 氧化为 \\(\\mathrm{NO_2^-}\\) 再氧化为 \\(\\mathrm{NO_3^-}\\)；反硝化在厌氧条件下把 \\(\\mathrm{NO_3^-}\\) 还原为 \\(\\mathrm{N_2O}\\) 与 \\(\\mathrm{N_2}\\) 返回大气。大气是氮的最大储库，但多数生物不能直接利用 \\(\\mathrm{N_2}\\)。 · (8.2.B.6) Nitrification oxidizes \\(\\mathrm{NH_4^+}\\) to \\(\\mathrm{NO_2^-}\\) and then \\(\\mathrm{NO_3^-}\\) under aerobic conditions; denitrification reduces \\(\\mathrm{NO_3^-}\\) to \\(\\mathrm{N_2O}\\) and \\(\\mathrm{N_2}\\) under anaerobic conditions. The atmosphere is the largest nitrogen reservoir, but most organisms cannot use \\(\\mathrm{N_2}\\) directly.",
      "（8.2.B.6）固氮由根瘤菌、固氮菌与蓝细菌等微生物完成，硝化由亚硝化细菌与硝化细菌完成，反硝化由厌氧反硝化细菌完成；这些微生物把大气、土壤与生物体中的氮连接成循环。 · (8.2.B.6) Nitrogen fixation is performed by microorganisms such as rhizobia, Azotobacter, and cyanobacteria; nitrification by ammonia- and nitrite-oxidizing bacteria; and denitrification by anaerobic denitrifying bacteria. These microbes link the atmosphere, soil, and living organisms into a cycle.",
      "（8.2.B.7）磷循环没有显著的气态储库：岩石风化把磷酸盐 \\(\\mathrm{PO_4^{3-}}\\) 释放到土壤与地下水，生产者同化磷酸盐并纳入 ATP、核酸与磷脂，消费者通过摄食获得磷；分解与排泄把磷归还土壤。 · (8.2.B.7) The phosphorus cycle has no significant gaseous reservoir: weathering of rocks releases phosphate \\(\\mathrm{PO_4^{3-}}\\) into soil and groundwater, producers assimilate phosphate into ATP, nucleic acids, and phospholipids, consumers obtain phosphorus by eating producers, and decomposition and excretion return phosphorus to the soil.",
      "（8.2.B.7）磷可被土壤颗粒吸附、随侵蚀与径流进入水体并沉积，经过地质抬升再次暴露；因此磷循环主要由风化与沉积控制，时间尺度远长于水循环和碳循环。 · (8.2.B.7) Phosphate can adsorb to soil particles, enter water bodies by erosion and runoff, settle as sediment, and be exposed again by geological uplift; the phosphorus cycle is therefore controlled mainly by weathering and sedimentation on a timescale much longer than the water or carbon cycle.",
      "（8.2.B.7）能量沿营养级单向流动，每级约 10% 传递到下一级，其余在呼吸中以热散失；物质则以元素形式在营养级与储库之间反复循环，分解者是连接生物与非生物储库的关键。 · (8.2.B.7) Energy flows one way through trophic levels, with about 10% transferred to the next level and the rest lost as heat during respiration; matter cycles repeatedly among trophic levels and reservoirs as elements, and decomposers are the key link between biotic and abiotic reservoirs.",
      "人类活动通过燃烧化石燃料、施用氮磷肥、毁林、灌溉与污水排放改变储库大小和通量，导致大气 \\(\\mathrm{CO_2}\\) 升高、水体富营养化与缺氧死区等后果。 · Human activities change reservoir sizes and fluxes through fossil-fuel combustion, nitrogen and phosphorus fertilization, deforestation, irrigation, and wastewater discharge, raising atmospheric \\(\\mathrm{CO_2}\\) and causing eutrophication and hypoxic dead zones."
    ],
    "definition": "生物地球化学循环（biogeochemical cycle）是碳、氮、磷、水等元素或分子在非生物储库（大气、水体、土壤与岩石、沉积物）和生物储库（生产者、消费者、分解者及其碎屑）之间迁移与转化的过程。储库是物质暂时储存的场所，通量是单位时间内从一个储库流向另一个储库的量；物质在循环中守恒，只是在不同的化学形态与储库之间重新分配。水循环以蒸发、蒸腾、凝结与降水等物理过程为主；碳循环连接光合作用、细胞呼吸、分解与燃烧；氮循环依赖微生物的固氮、氨化、硝化与反硝化；磷循环主要靠岩石风化释放磷酸盐、生物同化与沉积，缺少显著的气态储库。与物质不同，能量沿食物链单向流动并在呼吸中以热散失，不能循环。 · A biogeochemical cycle is the movement and transformation of elements or molecules such as carbon, nitrogen, phosphorus, and water among abiotic reservoirs (atmosphere, water, soil and rocks, sediments) and biotic reservoirs (producers, consumers, decomposers, and detritus). A reservoir is a place where matter is stored, and a flux is the amount moving from one reservoir to another per unit time; matter is conserved and merely redistributed among chemical forms and reservoirs. The water cycle is dominated by physical processes such as evaporation, transpiration, condensation, and precipitation; the carbon cycle links photosynthesis, cellular respiration, decomposition, and combustion; the nitrogen cycle depends on microbial fixation, ammonification, nitrification, and denitrification; and the phosphorus cycle relies mainly on rock weathering, biological assimilation, and sedimentation, with no significant gaseous reservoir. Unlike matter, energy flows one way through food chains and is lost as heat during respiration, so it cannot cycle.",
    "intuition": "把物质循环想成一套共享单车的调度系统：储库是停车点，通量是骑行流量，元素就是那辆车，可以在不同停车点之间反复使用；能量则像一次性的燃料，烧完就变成热，不能回到油箱。水循环是物理搬运，碳循环是光合与呼吸的拉锯，氮循环像微生物经营的化工厂，磷循环则像慢慢风化的岩石银行。 · Think of matter cycling as a bike-sharing system: reservoirs are docking stations, fluxes are the rides between them, and the elements are the bikes, reused again and again; energy is more like one-time fuel that becomes heat and cannot return to the tank. The water cycle is physical transport, the carbon cycle is a tug-of-war between photosynthesis and respiration, the nitrogen cycle is a microbial chemical plant, and the phosphorus cycle is a slowly weathering rock bank.",
    "formulas": [
      {
        "latex": "\\tau=\\dfrac{R}{F}",
        "note": "驻留时间：稳态下储库量 \\(R\\) 除以通量 \\(F\\)；单位由 \\(R\\) 与 \\(F\\) 的单位决定。 · Residence time: at steady state, reservoir amount \\(R\\) divided by flux \\(F\\); the unit follows from the units of \\(R\\) and \\(F\\)."
      },
      {
        "latex": "\\text{NPP}=\\text{GPP}-R_{\\mathrm{resp}}",
        "note": "净初级生产力等于总初级生产力减去生产者呼吸消耗。 · Net primary production equals gross primary production minus producers’ respiration."
      },
      {
        "latex": "\\text{传递效率}=\\dfrac{\\text{下一级同化量}}{\\text{上一级同化量}}\\times100\\%",
        "note": "营养级间能量传递效率，通常约为 10%，但不是精确常数。 · Energy transfer efficiency between trophic levels, usually about 10% but not an exact constant."
      },
      {
        "latex": "\\mathrm{CO_2}\\rightleftharpoons\\mathrm{CH_2O}",
        "note": "碳循环的简化表示：光合作用向右固定碳，呼吸、分解与燃烧向左释放 \\(\\mathrm{CO_2}\\)；\\(\\mathrm{CH_2O}\\) 代表有机物。 · Simplified carbon cycle: photosynthesis fixes carbon to the right, while respiration, decomposition, and combustion release \\(\\mathrm{CO_2}\\) to the left; \\(\\mathrm{CH_2O}\\) represents organic matter."
      },
      {
        "latex": "\\mathrm{N_2}\\rightarrow\\mathrm{NH_3}\\rightleftharpoons\\mathrm{NH_4^+}",
        "note": "固氮把 \\(\\mathrm{N_2}\\) 还原为 \\(\\mathrm{NH_3}\\)，后者从土壤溶液获得 \\(\\mathrm{H^+}\\) 形成 \\(\\mathrm{NH_4^+}\\)。 · Nitrogen fixation reduces \\(\\mathrm{N_2}\\) to \\(\\mathrm{NH_3}\\), which acquires \\(\\mathrm{H^+}\\) from the soil solution to form \\(\\mathrm{NH_4^+}\\)."
      },
      {
        "latex": "\\mathrm{NH_4^+}\\rightarrow\\mathrm{NO_2^-}\\rightarrow\\mathrm{NO_3^-}",
        "note": "硝化作用：好氧微生物先把铵氧化为亚硝酸盐，再氧化为硝酸盐。 · Nitrification: aerobic microbes oxidize ammonium to nitrite and then to nitrate."
      },
      {
        "latex": "\\mathrm{NO_3^-}\\rightarrow\\mathrm{NO_2^-}\\rightarrow\\mathrm{N_2O}\\rightarrow\\mathrm{N_2}",
        "note": "反硝化作用：厌氧反硝化细菌把硝酸盐还原为 \\(\\mathrm{N_2O}\\) 与 \\(\\mathrm{N_2}\\)，把氮送回大气。 · Denitrification: anaerobic denitrifiers reduce nitrate to \\(\\mathrm{N_2O}\\) and \\(\\mathrm{N_2}\\), returning nitrogen to the atmosphere."
      },
      {
        "latex": "\\text{岩石}\\rightarrow\\mathrm{PO_4^{3-}}\\rightarrow\\text{生物体}\\rightarrow\\text{土壤或沉积物}",
        "note": "磷循环主线：风化释放磷酸盐，生产者与消费者同化，分解、排泄与沉积把磷归还环境。 · Main phosphorus pathway: weathering releases phosphate, producers and consumers assimilate it, and decomposition, excretion, and sedimentation return phosphorus to the environment."
      }
    ],
    "derivationNotes": [
      {
        "from": "储库与通量 · Reservoir and flux",
        "to": "驻留时间 · Residence time",
        "note": "稳态时进入与离开储库的通量相等，储库量不变；平均驻留时间 \\(\\tau=\\dfrac{R}{F}\\)。大气水量小、降水通量大，所以水在大气中只停留约十天。 · At steady state the influx and outflux are equal and the reservoir amount is constant; the mean residence time is \\(\\tau=\\dfrac{R}{F}\\). The atmospheric water reservoir is small but precipitation flux is large, so water stays in the air for only about ten days."
      },
      {
        "from": "光合作用与细胞呼吸 · Photosynthesis and cellular respiration",
        "to": "碳循环 · Carbon cycle",
        "note": "光合作用把 \\(\\mathrm{CO_2}\\) 固定为有机物，呼吸与分解把有机碳氧化回 \\(\\mathrm{CO_2}\\)；燃烧把长期封存的化石碳快速释放，打破原有的收支平衡。 · Photosynthesis fixes \\(\\mathrm{CO_2}\\) into organic matter, respiration and decomposition oxidize organic carbon back to \\(\\mathrm{CO_2}\\), and combustion rapidly releases long-stored fossil carbon, upsetting the prior balance."
      },
      {
        "from": "固氮 · Nitrogen fixation",
        "to": "同化 · Assimilation",
        "note": "固氮微生物把 \\(\\mathrm{N_2}\\) 变为 \\(\\mathrm{NH_3/NH_4^+}\\)，植物再把它纳入氨基酸与核酸；动物只能通过摄食获得有机氮。 · Nitrogen-fixing microbes convert \\(\\mathrm{N_2}\\) to \\(\\mathrm{NH_3/NH_4^+}\\), which plants incorporate into amino acids and nucleic acids; animals obtain organic nitrogen only by feeding."
      },
      {
        "from": "氨化与硝化 · Ammonification and nitrification",
        "to": "反硝化 · Denitrification",
        "note": "分解者把有机氮转为 \\(\\mathrm{NH_4^+}\\)，好氧微生物再硝化为 \\(\\mathrm{NO_3^-}\\)；厌氧条件下反硝化细菌把 \\(\\mathrm{NO_3^-}\\) 还原为 \\(\\mathrm{N_2O/N_2}\\)，完成氮的循环。 · Decomposers convert organic nitrogen to \\(\\mathrm{NH_4^+}\\), aerobic microbes nitrify it to \\(\\mathrm{NO_3^-}\\), and under anaerobic conditions denitrifiers reduce \\(\\mathrm{NO_3^-}\\) to \\(\\mathrm{N_2O/N_2}\\), closing the nitrogen cycle."
      },
      {
        "from": "岩石风化 · Rock weathering",
        "to": "磷的生物地球化学循环 · Phosphorus biogeochemistry",
        "note": "含磷矿物风化把 \\(\\mathrm{PO_4^{3-}}\\) 释放到土壤与地下水，生产者同化后沿食物链传递；分解、排泄、侵蚀与沉积把磷送回土壤或水体沉积物，地质抬升使其再次暴露。 · Weathering of phosphorus-bearing minerals releases \\(\\mathrm{PO_4^{3-}}\\) into soil and groundwater; producers assimilate it and pass it along food chains; decomposition, excretion, erosion, and sedimentation return it to soil or sediments, and geological uplift exposes it again."
      },
      {
        "from": "能量流与物质循环 · Energy flow and matter cycling",
        "to": "营养级耦合 · Coupling through trophic levels",
        "note": "能量以阳光形式进入、以热离开，物质以元素形式在营养级与储库间循环；分解者把遗体与排泄物中的元素矿化，使生产者再次利用。 · Energy enters as sunlight and leaves as heat, while matter cycles as elements among trophic levels and reservoirs; decomposers mineralize elements from dead matter and wastes so producers can reuse them."
      }
    ],
    "conditions": [
      "物质守恒适用于把地球视为整体时；局地生态系统是开放系统，既有输入（如降水、迁徙、施肥）也有输出（如径流、收获、气体释放）。 · Conservation of matter applies when Earth is treated as a whole; a local ecosystem is open, with inputs such as precipitation, migration, and fertilizer and outputs such as runoff, harvest, and gas release.",
      "驻留时间公式假设体系近似稳态，即储库量与通量在所考虑的时间尺度上大致恒定；非稳态时 \\(\\dfrac{R}{F}\\) 只是一个瞬时比值。 · The residence-time formula assumes approximate steady state, with reservoir size and flux roughly constant over the timescale considered; under non-steady conditions \\(\\dfrac{R}{F}\\) is only an instantaneous ratio.",
      "水循环过程受气候、植被、地形与人类活动影响；蒸腾要求气孔开放且有水分供应，干旱时蒸腾下降。 · Hydrologic processes depend on climate, vegetation, topography, and human activity; transpiration requires open stomata and water supply and declines during drought.",
      "固氮酶对氧敏感，固氮多发生在根瘤等低氧微环境；硝化需要好氧条件，反硝化需要厌氧条件，因此土壤含水量会改变氮的走向。 · Nitrogenase is oxygen-sensitive, so fixation occurs in low-oxygen microsites such as root nodules; nitrification requires aerobic conditions and denitrification requires anaerobic conditions, so soil water content shifts the nitrogen pathway.",
      "磷循环没有显著气态途径，风化与沉积是地质时间尺度；局地磷限制可被施肥、污水或侵蚀输入打破。 · The phosphorus cycle has no significant gaseous pathway, and weathering and sedimentation operate on geological timescales; local phosphorus limitation can be broken by fertilizer, wastewater, or erosion inputs.",
      "10% 传递效率是经验近似，实际值随生态系统、营养级和代谢方式变化；计算题应使用题目给定值。 · The 10% transfer efficiency is an empirical approximation that varies with ecosystem, trophic level, and metabolism; calculation questions should use the values given."
    ],
    "keyPoints": [
      "生态层级：个体 → 种群 → 群落 → 生态系统 → 生物群系 → 生物圈；生态系统 = 生物群落 + 非生物环境。 · Levels: organism → population → community → ecosystem → biome → biosphere; an ecosystem = biological community + abiotic environment.",
      "生物地球化学循环 = 非生物储库 + 生物储库 + 储库之间的通量；物质守恒并可循环，能量单向流动并以热散失。 · Biogeochemical cycle = abiotic reservoirs + biotic reservoirs + fluxes between them; matter is conserved and cycles, while energy flows one way and is lost as heat.",
      "水循环四过程：蒸发、蒸腾、凝结、降水；径流与下渗把水送回海洋与地下水。 · Four water-cycle processes: evaporation, transpiration, condensation, and precipitation; runoff and infiltration return water to the ocean and groundwater.",
      "碳循环四部分：光合作用、细胞呼吸、分解、燃烧；化石燃料燃烧把长期封存的碳快速释放。 · Four carbon-cycle parts: photosynthesis, cellular respiration, decomposition, and combustion; burning fossil fuels rapidly releases long-stored carbon.",
      "氮循环五步：固氮 → 同化 → 氨化 → 硝化 → 反硝化；大气是最大氮储库，微生物是循环的引擎。 · Five nitrogen-cycle steps: fixation → assimilation → ammonification → nitrification → denitrification; the atmosphere is the largest reservoir and microbes drive the cycle.",
      "磷循环没有显著气态储库：岩石风化释放 \\(\\mathrm{PO_4^{3-}}\\)，生物同化后经分解、排泄与沉积返回环境。 · The phosphorus cycle has no significant gaseous reservoir: rock weathering releases \\(\\mathrm{PO_4^{3-}}\\), organisms assimilate it, and decomposition, excretion, and sedimentation return it.",
      "能量单向流动、物质循环利用；分解者是连接生物与非生物储库的桥梁。 · Energy flows one way and matter is recycled; decomposers bridge biotic and abiotic reservoirs.",
      "人类活动改变储库与通量：化石燃料燃烧、氮磷施肥、毁林与污水排放会加速循环并造成富营养化与缺氧。 · Human activities alter reservoirs and fluxes: fossil-fuel combustion, N and P fertilization, deforestation, and wastewater discharge accelerate cycles and cause eutrophication and hypoxia."
    ],
    "misconceptions": [
      "认为能量可以像物质一样循环；能量在每次呼吸中都有一部分以热散失，无法回到食物链。 · Thinking energy cycles like matter; at every respiration step some energy is lost as heat and cannot return to the food chain.",
      "认为物质在食物链中“消失”或“变成能量”；物质只是转化为不同化合物并进入其他储库，能量才被转移和散失。 · Thinking matter disappears or turns into energy in a food chain; matter is converted into other compounds and enters other reservoirs, while energy is transferred and lost.",
      "认为植物能直接吸收大气中的 \\(\\mathrm{N_2}\\)；多数植物依赖固氮微生物或人为固定的氮。 · Thinking plants can directly absorb atmospheric \\(\\mathrm{N_2}\\); most plants depend on nitrogen-fixing microbes or industrially fixed nitrogen.",
      "认为固氮是植物自身完成的过程；固氮主要由细菌、蓝细菌等微生物完成，植物提供根瘤等共生场所。 · Thinking plants perform nitrogen fixation themselves; it is carried out mainly by bacteria and cyanobacteria, with plants providing symbiotic sites such as root nodules.",
      "认为磷主要来自大气；磷没有显著气态储库，主要来自含磷岩石的风化。 · Thinking phosphorus comes mainly from the atmosphere; phosphorus has no significant gaseous reservoir and comes mainly from weathering of phosphorus-bearing rocks.",
      "认为富营养化只与碳有关；淡水藻华通常由氮、磷输入触发，磷常是限制因子。 · Thinking eutrophication is only about carbon; freshwater algal blooms are usually triggered by nitrogen and phosphorus inputs, with phosphorus often limiting.",
      "把 10% 传递效率当成精确常数；实际传递效率随生态系统与营养级变化。 · Treating the 10% transfer efficiency as an exact constant; actual efficiency varies with ecosystem and trophic level.",
      "认为分解者只是“清理垃圾”；分解者把有机物中的元素矿化并归还非生物储库，是物质循环的必要环节。 · Thinking decomposers merely clean up waste; they mineralize elements from organic matter and return them to abiotic reservoirs, a necessary part of matter cycling.",
      "认为大气是水循环中最大的储库；海洋储存约 97% 的水，大气水量很小但周转最快。 · Thinking the atmosphere is the largest water reservoir; the ocean holds about 97% of Earth’s water, while the atmosphere is small but turns over fastest.",
      "认为硝化与反硝化可以在同一条件下同时旺盛进行；硝化需要好氧，反硝化需要厌氧，土壤含水量会改变两者相对速率。 · Thinking nitrification and denitrification both thrive under the same conditions; nitrification needs oxygen and denitrification needs anaerobiosis, so soil water content shifts their relative rates."
    ],
    "examples": [
      {
        "title": "例 1 · 储库、通量与生态层级 · Example 1: Reservoirs, fluxes, and ecological levels",
        "prompt": "把下列项目分类为储库或通量：大气中的 \\(\\mathrm{CO_2}\\)、海洋吸收 \\(\\mathrm{CO_2}\\) 的速率、土壤有机氮、根瘤菌固氮速率。再用生态层级说明“一片草原上的全部田鼠”与“这片草原生态系统”的区别。 · Classify each item as a reservoir or a flux: atmospheric \\(\\mathrm{CO_2}\\), the rate at which the ocean absorbs \\(\\mathrm{CO_2}\\), soil organic nitrogen, and the rate of nitrogen fixation by rhizobia. Then use ecological levels to distinguish “all the voles in a grassland” from “the grassland ecosystem.”",
        "steps": [
          "储库是某一时刻储存的物质量：大气中的 \\(\\mathrm{CO_2}\\) 与土壤有机氮是储库。 · A reservoir is an amount stored at a given time: atmospheric \\(\\mathrm{CO_2}\\) and soil organic nitrogen are reservoirs.",
          "通量是单位时间的转移量：海洋吸收速率与固氮速率是通量。 · A flux is an amount transferred per unit time: the ocean uptake rate and the fixation rate are fluxes.",
          "全部田鼠属于同一物种，是一个种群；草原生态系统还包括其他所有物种构成的群落以及土壤、气候等非生物环境。 · All the voles belong to one species and form a population; the grassland ecosystem also includes the community of all other species plus the abiotic environment such as soil and climate."
        ],
        "solution": "储库：大气 \\(\\mathrm{CO_2}\\)、土壤有机氮；通量：海洋吸收速率、固氮速率。田鼠 = 种群；草原生态系统 = 群落 + 非生物环境。 · Reservoirs: atmospheric \\(\\mathrm{CO_2}\\) and soil organic nitrogen; fluxes: ocean uptake rate and fixation rate. Voles = population; grassland ecosystem = community + abiotic environment."
      },
      {
        "title": "例 2 · 水在大气中的驻留时间 · Example 2: Residence time of water in the atmosphere",
        "prompt": "大气中的水量约为 \\(1.3\\times10^{4}\\,\\mathrm{km^{3}}\\)，全球降水通量约为 \\(4.9\\times10^{5}\\,\\mathrm{km^{3}\\,yr^{-1}}\\)。假设稳态，估算水在大气中的平均驻留时间（以天为单位）。 · The atmosphere holds about \\(1.3\\times10^{4}\\,\\mathrm{km^{3}}\\) of water, and global precipitation is about \\(4.9\\times10^{5}\\,\\mathrm{km^{3}\\,yr^{-1}}\\). Assuming steady state, estimate the mean residence time of water in the atmosphere in days.",
        "steps": [
          "用 \\(\\tau=\\dfrac{R}{F}\\)，其中 \\(R=1.3\\times10^{4}\\,\\mathrm{km^{3}}\\)，\\(F=4.9\\times10^{5}\\,\\mathrm{km^{3}\\,yr^{-1}}\\)。 · Use \\(\\tau=\\dfrac{R}{F}\\), with \\(R=1.3\\times10^{4}\\,\\mathrm{km^{3}}\\) and \\(F=4.9\\times10^{5}\\,\\mathrm{km^{3}\\,yr^{-1}}\\).",
          "\\(\\tau=\\dfrac{1.3\\times10^{4}}{4.9\\times10^{5}}\\approx2.7\\times10^{-2}\\,\\mathrm{yr}\\)。 · \\(\\tau=\\dfrac{1.3\\times10^{4}}{4.9\\times10^{5}}\\approx2.7\\times10^{-2}\\,\\mathrm{yr}\\).",
          "换算为天：\\(2.7\\times10^{-2}\\times365\\approx9.7\\,\\mathrm{d}\\)，约为 10 天。 · Convert to days: \\(2.7\\times10^{-2}\\times365\\approx9.7\\,\\mathrm{d}\\), about 10 days."
        ],
        "solution": "水在大气中的平均驻留时间约为 10 天，说明大气水虽然量少，但循环极快。 · The mean residence time is about 10 days, showing that atmospheric water is a small but very rapidly cycling reservoir.",
        "solutionLatex": "\\tau=\\dfrac{R}{F}=\\dfrac{1.3\\times10^{4}}{4.9\\times10^{5}}\\approx2.7\\times10^{-2}\\,\\mathrm{yr}\\approx10\\,\\mathrm{d}"
      },
      {
        "title": "例 3 · 氮循环的步骤与微生物 · Example 3: Nitrogen-cycle steps and microbes",
        "prompt": "某土壤中铵盐浓度升高后硝酸盐随后升高；在淹水厌氧条件下硝酸盐又下降并释放 \\(\\mathrm{N_2}\\)。写出涉及的步骤、反应与微生物类群，并解释为什么多数植物不能直接利用 \\(\\mathrm{N_2}\\)。 · In a soil, ammonium rises and is followed by a rise in nitrate; under waterlogged anaerobic conditions nitrate then declines and \\(\\mathrm{N_2}\\) is released. Identify the steps, reactions, and microbial groups involved, and explain why most plants cannot use \\(\\mathrm{N_2}\\) directly.",
        "steps": [
          "铵盐升高后硝酸盐升高是好氧硝化：\\(\\mathrm{NH_4^+}\\rightarrow\\mathrm{NO_2^-}\\rightarrow\\mathrm{NO_3^-}\\)，由亚硝化细菌与硝化细菌完成。 · The rise in nitrate after ammonium is aerobic nitrification: \\(\\mathrm{NH_4^+}\\rightarrow\\mathrm{NO_2^-}\\rightarrow\\mathrm{NO_3^-}\\), performed by ammonia- and nitrite-oxidizing bacteria.",
          "淹水后硝酸盐下降并释放 \\(\\mathrm{N_2}\\) 是厌氧反硝化：\\(\\mathrm{NO_3^-}\\rightarrow\\mathrm{NO_2^-}\\rightarrow\\mathrm{N_2O}\\rightarrow\\mathrm{N_2}\\)，由反硝化细菌完成。 · After waterlogging, the decline in nitrate with \\(\\mathrm{N_2}\\) release is anaerobic denitrification: \\(\\mathrm{NO_3^-}\\rightarrow\\mathrm{NO_2^-}\\rightarrow\\mathrm{N_2O}\\rightarrow\\mathrm{N_2}\\), performed by denitrifying bacteria.",
          "植物需要的是 \\(\\mathrm{NH_4^+}\\) 或 \\(\\mathrm{NO_3^-}\\) 形式的氮；\\(\\mathrm{N_2}\\) 的三键很稳定，植物没有固氮酶，必须先由固氮微生物把 \\(\\mathrm{N_2}\\) 还原为氨/铵。 · Plants need nitrogen as \\(\\mathrm{NH_4^+}\\) or \\(\\mathrm{NO_3^-}\\); the \\(\\mathrm{N_2}\\) triple bond is very stable, and plants lack nitrogenase, so nitrogen-fixing microbes must first reduce \\(\\mathrm{N_2}\\) to ammonia/ammonium."
        ],
        "solution": "好氧硝化把铵转为硝酸盐，厌氧反硝化把硝酸盐还原为 \\(\\mathrm{N_2}\\)；植物依赖固氮微生物提供的固定氮，不能直接利用 \\(\\mathrm{N_2}\\)。 · Aerobic nitrification converts ammonium to nitrate, and anaerobic denitrification reduces nitrate to \\(\\mathrm{N_2}\\); plants depend on fixed nitrogen supplied by nitrogen-fixing microbes and cannot use \\(\\mathrm{N_2}\\) directly."
      },
      {
        "title": "例 4 · 磷限制与富营养化（CER） · Example 4: Phosphorus limitation and eutrophication (CER)",
        "prompt": "某淡水湖总氮充足，但夏季藻华只在加入磷酸盐后爆发。用磷循环与限制养分概念提出主张，并给出证据与推理；预测如果只减少氮输入会怎样。 · A freshwater lake has abundant total nitrogen, but summer algal blooms erupt only after phosphate is added. Make a claim using the phosphorus cycle and limiting-nutrient concepts, support it with evidence and reasoning, and predict what happens if only nitrogen inputs are reduced.",
        "steps": [
          "主张：该湖的初级生产受磷限制，加入磷酸盐解除限制后藻类快速增殖。 · Claim: primary production in this lake is phosphorus-limited, and adding phosphate relieves the limitation, allowing rapid algal growth.",
          "证据：磷没有显著气态储库，主要靠岩石风化缓慢补充，且磷酸盐易被土壤颗粒吸附或沉积，因此淡水系统常缺磷；实验中只有加磷处理出现藻华。 · Evidence: phosphorus has no significant gaseous reservoir, is replenished slowly by rock weathering, and is readily adsorbed to soil particles or sediment, so fresh waters are often phosphorus-poor; only the phosphorus treatment produced a bloom.",
          "推理：氮充足而磷不足时，藻类生长受磷制约；额外磷使藻类固定更多碳，死亡后分解消耗氧气，导致缺氧与死区。只减少氮输入可能不足以抑制藻华，因为磷仍过量。 · Reasoning: when nitrogen is sufficient but phosphorus is scarce, algal growth is limited by phosphorus; extra phosphorus lets algae fix more carbon, and decomposition of dead algae consumes oxygen, causing hypoxia and dead zones. Reducing only nitrogen may not suppress blooms because phosphorus remains in excess."
        ],
        "solution": "磷是该湖的限制养分；控磷比单纯控氮更可能抑制藻华，并应同时减少氮磷输入以恢复溶解氧。 · Phosphorus is the limiting nutrient; controlling phosphorus is more likely than controlling nitrogen alone to suppress blooms, and both N and P inputs should be reduced to restore dissolved oxygen."
      },
      {
        "title": "例 5 · 能量传递与物质循环 · Example 5: Energy transfer versus matter cycling",
        "prompt": "某生态系统生产者同化 \\(50{,}000\\,\\mathrm{kJ\\,m^{-2}\\,yr^{-1}}\\)。按 10% 传递效率：(a) 计算第三营养级（次级消费者）可获得的能量；(b) 说明第三营养级生物量中的碳原子最终去向；(c) 解释为什么物质可以反复利用而能量不能。 · Producers in an ecosystem assimilate \\(50{,}000\\,\\mathrm{kJ\\,m^{-2}\\,yr^{-1}}\\). Using 10% transfer efficiency: (a) calculate the energy available to the third trophic level (secondary consumers); (b) describe the eventual fate of carbon atoms in third-level biomass; (c) explain why matter can be reused but energy cannot.",
        "steps": [
          "第一营养级到第二营养级：\\(50{,}000\\times0.10=5{,}000\\,\\mathrm{kJ}\\)；第二到第三：\\(5{,}000\\times0.10=500\\,\\mathrm{kJ}\\)。 · From the first to the second trophic level: \\(50{,}000\\times0.10=5{,}000\\,\\mathrm{kJ}\\); from the second to the third: \\(5{,}000\\times0.10=500\\,\\mathrm{kJ}\\).",
          "第三营养级生物量中的碳可被呼吸氧化为 \\(\\mathrm{CO_2}\\)、随排泄物进入环境、被分解者矿化，或被更高营养级摄食；碳原子最终回到大气、土壤或水体等非生物储库，并可被生产者再次固定。 · Carbon in third-level biomass can be oxidized to \\(\\mathrm{CO_2}\\) by respiration, excreted, mineralized by decomposers, or eaten by a higher trophic level; carbon atoms eventually return to abiotic reservoirs such as the atmosphere, soil, or water and can be fixed again by producers.",
          "能量在每一步都有约 90% 以热散失，无法被生物重新捕获；物质是元素，可在不同化合物与储库之间循环，因此能量限制食物链长度，而物质可以反复利用。 · About 90% of the energy is lost as heat at each step and cannot be recaptured; matter consists of elements that cycle among compounds and reservoirs, so energy limits food-chain length while matter can be reused."
        ],
        "solution": "第三营养级约获得 \\(500\\,\\mathrm{kJ\\,m^{-2}\\,yr^{-1}}\\)；碳原子经呼吸、排泄、分解与摄食回到非生物储库并可再循环；能量以热散失，不能循环。 · The third trophic level receives about \\(500\\,\\mathrm{kJ\\,m^{-2}\\,yr^{-1}}\\); carbon atoms return to abiotic reservoirs through respiration, excretion, decomposition, and feeding and can cycle again, whereas energy is lost as heat and cannot cycle.",
        "solutionLatex": "E_{3}=50{,}000\\times(0.10)^{2}=500\\,\\mathrm{kJ\\,m^{-2}\\,yr^{-1}}"
      },
      {
        "title": "例 6 · 检验磷限制的实验设计 · Example 6: Testing phosphorus limitation experimentally",
        "prompt": "设计一个中宇宙（mesocosm）实验，检验磷是否是某湖泊藻华的限制因子。写出处理组、对照组、因变量、需要控制的变量与预测结果。 · Design a mesocosm experiment to test whether phosphorus limits algal blooms in a lake. State the treatments, control, dependent variable, variables to control, and predicted results.",
        "steps": [
          "处理组：对照组不加养分、加氮、加磷、同时加氮和磷；每组设置多个重复。 · Treatments: control with no nutrients, nitrogen only, phosphorus only, and nitrogen plus phosphorus; include multiple replicates per group.",
          "因变量：叶绿素 a 浓度或藻类生物量，定期采样测定；同时监测溶解氧。 · Dependent variable: chlorophyll a concentration or algal biomass sampled regularly, with dissolved oxygen monitored as well.",
          "控制变量：光照、温度、水体体积、初始藻类群落、浮游动物与停留时间保持一致；随机分配处理位置。 · Controlled variables: keep light, temperature, water volume, initial algal community, grazers, and duration the same; randomize treatment positions.",
          "预测：若磷单独限制，加磷组与加氮加磷组藻类最多；若氮磷共同限制，只有同时加氮磷才出现最强藻华。 · Prediction: if phosphorus alone is limiting, the phosphorus and nitrogen-plus-phosphorus treatments will have the most algae; if nitrogen and phosphorus co-limit, only the combined treatment will produce the strongest bloom."
        ],
        "solution": "用多组重复的中宇宙比较加氮、加磷与加氮磷的藻类响应；若加磷显著提高叶绿素 a，则支持磷限制假说。 · Use replicated mesocosms to compare algal responses to nitrogen, phosphorus, and combined addition; a significant increase in chlorophyll a with phosphorus supports the phosphorus-limitation hypothesis."
      }
    ],
    "examTips": [
      "先判断题目问的是“储库”还是“通量”，再决定用 \\(\\tau=\\dfrac{R}{F}\\) 还是只做定性描述。 · First decide whether a question asks about a reservoir or a flux, then choose \\(\\tau=\\dfrac{R}{F}\\) or a qualitative description.",
      "氮循环按“固氮 → 同化 → 氨化 → 硝化 → 反硝化”顺序作答，并标注微生物与好氧/厌氧条件。 · Answer nitrogen-cycle questions in the order fixation → assimilation → ammonification → nitrification → denitrification, labeling microbes and aerobic or anaerobic conditions.",
      "磷循环要强调“无显著气态储库、岩石风化释放 \\(\\mathrm{PO_4^{3-}}\\)、沉积与地质抬升”，并联系限制养分与富营养化。 · For phosphorus, emphasize “no significant gaseous reservoir, rock weathering releases \\(\\mathrm{PO_4^{3-}}\\), sedimentation and geological uplift,” and connect it to limiting nutrients and eutrophication.",
      "能量与物质对比题要写出：能量单向流动并以热散失，物质守恒并可循环，分解者是桥梁。 · On energy-versus-matter questions, state that energy flows one way and is lost as heat, matter is conserved and cycles, and decomposers are the bridge.",
      "计算题写清单位与时间尺度；驻留时间用储库量除以通量，传递效率用下一级同化量除以上一级同化量。 · In calculations, state units and timescales; residence time is reservoir amount divided by flux, and transfer efficiency is next-level assimilation divided by previous-level assimilation.",
      "FRQ 用主张—证据—推理：每个过程都说明物质从哪个储库到哪个储库、能量在哪里散失。 · Use claim–evidence–reasoning in free response: for each process, state which reservoir matter moves from and to, and where energy is lost."
    ],
    "related": [
      {
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.2",
        "title": "能量流 · Energy Flow Through Ecosystems",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.4",
        "title": "光合作用 · Photosynthesis",
        "relation": "相关 · related"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.5",
        "title": "细胞呼吸 · Cellular Respiration",
        "relation": "相关 · related"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u8",
        "code": "8.7",
        "title": "生态系统扰动 · Disruptions to Ecosystems",
        "relation": "后续 · follow-up"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u8",
    "connections": [
      "上游：8.2 能量流给出 GPP/NPP、营养级与约 10% 的传递效率；本主题把“能量单向流动”与“物质循环”配对，解释同一食物网中的两套过程。 · Upstream: 8.2 energy flow supplies GPP/NPP, trophic levels, and about 10% transfer efficiency; this topic pairs one-way energy flow with matter cycling to explain two processes in the same food web.",
      "下游：8.7 生态系统扰动利用富营养化、缺氧死区、化石燃料燃烧与气候变化，分析人类活动如何改变储库大小与通量。 · Downstream: 8.7 disruptions to ecosystems uses eutrophication, hypoxic dead zones, fossil-fuel combustion, and climate change to analyze how human activities alter reservoir sizes and fluxes.",
      "化学：硝化与反硝化是氧化还原反应，磷的吸附与沉淀受 pH 和土壤矿物影响，\\(\\mathrm{CO_2}\\) 与 \\(\\mathrm{O_2}\\) 的溶解受温度控制。 · Chemistry: nitrification and denitrification are redox reactions, phosphorus adsorption and precipitation depend on pH and soil minerals, and the solubility of \\(\\mathrm{CO_2}\\) and \\(\\mathrm{O_2}\\) depends on temperature.",
      "现实应用：农业施肥、污水处理、湿地保护、碳汇管理与渔业管理都需要同时考虑能量限制与物质循环。 · Real-world applications: agricultural fertilization, wastewater treatment, wetland protection, carbon management, and fisheries all require considering both energy limitation and matter cycling."
    ],
    "intuitionDetailed": "追踪一个原子：碳原子从大气 \\(\\mathrm{CO_2}\\) 被光合作用固定，进入葡萄糖，沿食物链从生产者到消费者；呼吸把它变回 \\(\\mathrm{CO_2}\\)，分解者把遗体中的碳矿化，燃烧则把化石燃料中封存很久的碳快速送回大气。氮原子从 \\(\\mathrm{N_2}\\) 被固氮微生物还原为 \\(\\mathrm{NH_4^+}\\)，被植物同化为氨基酸，动物摄食后以排泄物或遗体形式被氨化，再经硝化变成 \\(\\mathrm{NO_3^-}\\)，最后在厌氧条件下反硝化回到 \\(\\mathrm{N_2}\\)。磷原子从岩石风化进入土壤溶液，被生产者同化为 ATP 与核酸，沿食物链传递，最终经分解、排泄、侵蚀与沉积回到土壤或水体沉积物，等待地质抬升再次暴露。每个原子都可能在不同储库中停留不同时间：水在大气中约十天，深海水中可达数千年，岩石中的磷可达数百万年。能量则不同：它从阳光进入，经过光合作用变成化学能，每经过一个营养级就有一大部分以热散失，最终离开生态系统，不能回到食物链。 · Follow one atom: a carbon atom is fixed from atmospheric \\(\\mathrm{CO_2}\\) by photosynthesis into glucose and passes from producers to consumers along a food chain; respiration returns it to \\(\\mathrm{CO_2}\\), decomposers mineralize carbon in detritus, and combustion rapidly returns long-stored fossil carbon to the atmosphere. A nitrogen atom is reduced from \\(\\mathrm{N_2}\\) to \\(\\mathrm{NH_4^+}\\) by nitrogen-fixing microbes, assimilated by plants into amino acids, ammonified from animal wastes or remains, nitrified to \\(\\mathrm{NO_3^-}\\), and finally denitrified back to \\(\\mathrm{N_2}\\) under anaerobic conditions. A phosphorus atom enters the soil solution from weathered rock, is assimilated by producers into ATP and nucleic acids, passes along the food chain, and eventually returns to soil or sediment through decomposition, excretion, erosion, and sedimentation, waiting for geological uplift to expose it again. Each atom may spend very different times in different reservoirs: about ten days for water in the atmosphere, thousands of years for deep ocean water, and millions of years for phosphorus in rock. Energy is different: it enters as sunlight, becomes chemical energy through photosynthesis, and loses a large fraction as heat at every trophic level, finally leaving the ecosystem and never returning to the food chain.",
    "development": [
      "先建立生态层级与系统边界：明确“生态系统”包含群落与非生物环境，并区分种群与群落。 · Establish ecological levels and system boundaries: make clear that an ecosystem includes the community plus the abiotic environment, and distinguish populations from communities.",
      "画储库—通量图：为水、碳、氮、磷各画一张草图，标出主要储库、通量方向与生物/地质/物理过程。 · Draw reservoir–flux diagrams: sketch water, carbon, nitrogen, and phosphorus cycles with major reservoirs, flux directions, and biological, geological, and physical processes.",
      "逐个循环学习关键步骤：水循环四过程、碳循环四部分、氮循环五步、磷循环的风化—同化—沉积主线。 · Learn the key steps cycle by cycle: the four water-cycle processes, four carbon-cycle parts, five nitrogen-cycle steps, and the weathering–assimilation–sedimentation pathway of phosphorus.",
      "把能量流与物质循环配对：用同一食物网说明能量如何单向散失、物质如何被分解者归还储库。 · Pair energy flow with matter cycling: use one food web to show how energy is lost one way and how matter is returned to reservoirs by decomposers.",
      "迁移到人类影响与定量题：计算驻留时间与传递效率，分析施肥、燃烧化石燃料与污水排放对储库和通量的改变。 · Transfer to human impacts and quantitative problems: calculate residence times and transfer efficiencies, and analyze how fertilization, fossil-fuel combustion, and wastewater change reservoirs and fluxes."
    ],
    "checks": [
      "不看书能否画出水、碳、氮、磷循环的储库—通量草图，并各标出至少两个生物过程与两个地质/物理过程？ · Can you sketch reservoir–flux diagrams for the water, carbon, nitrogen, and phosphorus cycles, labeling at least two biological and two geological or physical processes for each?",
      "给定储库量与年通量，能否用 \\(\\tau=\\dfrac{R}{F}\\) 计算驻留时间并检查单位？ · Given a reservoir amount and an annual flux, can you calculate residence time with \\(\\tau=\\dfrac{R}{F}\\) and check the units?",
      "能否按顺序说出氮循环五步、每步的反应物与产物，以及执行这些步骤的微生物和好氧/厌氧条件？ · Can you sequence the five nitrogen-cycle steps, their reactants and products, the microbes that perform them, and their aerobic or anaerobic conditions?",
      "为什么磷常是淡水生态系统的限制养分？过量氮磷输入如何导致藻华与缺氧死区？ · Why is phosphorus often the limiting nutrient in freshwater ecosystems? How do excess nitrogen and phosphorus inputs cause algal blooms and hypoxic dead zones?",
      "用一句话解释“能量流动、物质循环”，并说明分解者为什么是两者的桥梁。 · Explain “energy flows, matter cycles” in one sentence and why decomposers bridge the two.",
      "若某地大量燃烧化石燃料并施用氮肥，预测大气碳库、土壤氮库与下游水体会发生什么变化。 · If a region burns large amounts of fossil fuel and applies nitrogen fertilizer, predict what happens to the atmospheric carbon reservoir, soil nitrogen reservoir, and downstream waters."
    ],
    "vocabulary": [
      {
        "termZh": "储库",
        "termEn": "reservoir",
        "defZh": "物质在循环中暂时储存的场所，如大气、海洋、土壤、岩石与生物体。",
        "defEn": "A place where matter is temporarily stored during a cycle, such as the atmosphere, ocean, soil, rocks, or living organisms."
      },
      {
        "termZh": "通量",
        "termEn": "flux",
        "defZh": "单位时间内从一个储库转移到另一个储库的物质量。",
        "defEn": "The amount of matter transferred from one reservoir to another per unit time."
      },
      {
        "termZh": "蒸腾作用",
        "termEn": "transpiration",
        "defZh": "植物通过气孔把水以水汽形式释放到大气的过程。",
        "defEn": "The loss of water vapor from plants to the atmosphere through stomata."
      },
      {
        "termZh": "固氮作用",
        "termEn": "nitrogen fixation",
        "defZh": "把大气中的 \\(\\mathrm{N_2}\\) 转化为氨 \\(\\mathrm{NH_3}\\) 或铵 \\(\\mathrm{NH_4^+}\\) 的过程，由固氮微生物或工业过程完成。",
        "defEn": "The conversion of atmospheric \\(\\mathrm{N_2}\\) into ammonia \\(\\mathrm{NH_3}\\) or ammonium \\(\\mathrm{NH_4^+}\\), carried out by nitrogen-fixing microorganisms or industrial processes."
      },
      {
        "termZh": "同化作用",
        "termEn": "assimilation",
        "defZh": "生物把吸收的无机养分（如 \\(\\mathrm{NH_4^+}\\)、\\(\\mathrm{NO_3^-}\\)、\\(\\mathrm{PO_4^{3-}}\\)）纳入自身有机分子的过程。",
        "defEn": "The incorporation of absorbed inorganic nutrients such as \\(\\mathrm{NH_4^+}\\), \\(\\mathrm{NO_3^-}\\), or \\(\\mathrm{PO_4^{3-}}\\) into an organism’s own organic molecules."
      },
      {
        "termZh": "氨化作用",
        "termEn": "ammonification",
        "defZh": "分解者把动植物遗体与排泄物中的有机氮转化为 \\(\\mathrm{NH_4^+}\\) 的过程。",
        "defEn": "The conversion of organic nitrogen in dead organisms and wastes into \\(\\mathrm{NH_4^+}\\) by decomposers."
      },
      {
        "termZh": "硝化作用",
        "termEn": "nitrification",
        "defZh": "在好氧条件下，微生物把 \\(\\mathrm{NH_4^+}\\) 氧化为 \\(\\mathrm{NO_2^-}\\)、再氧化为 \\(\\mathrm{NO_3^-}\\) 的过程。",
        "defEn": "The aerobic microbial oxidation of \\(\\mathrm{NH_4^+}\\) to \\(\\mathrm{NO_2^-}\\) and then to \\(\\mathrm{NO_3^-}\\)."
      },
      {
        "termZh": "反硝化作用",
        "termEn": "denitrification",
        "defZh": "在厌氧条件下，反硝化细菌把 \\(\\mathrm{NO_3^-}\\) 还原为 \\(\\mathrm{N_2O}\\) 与 \\(\\mathrm{N_2}\\) 并返回大气的过程。",
        "defEn": "The anaerobic reduction of \\(\\mathrm{NO_3^-}\\) to \\(\\mathrm{N_2O}\\) and \\(\\mathrm{N_2}\\) by denitrifying bacteria, returning nitrogen to the atmosphere."
      }
    ]
  }
};
