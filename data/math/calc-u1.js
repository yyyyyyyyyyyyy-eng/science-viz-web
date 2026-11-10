export const UNIT = {
  "id": "calc-u1",
  "code": "1",
  "titleZh": "极限与连续",
  "titleEn": "Limits and Continuity",
  "subject": "math",
  "layer": "ap"
};
export const TOPICS = {
  "1.1": {
    "id": "math/calc-u1/1.1",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.1",
    "titleZh": "瞬时变化导论",
    "titleEn": "Introducing Calculus: Can Change Occur at an Instant?",
    "layer": "ap",
    "summary": "瞬时变化导论 · Introducing Calculus: Can Change Occur at an Instant?",
    "learningObjectives": [
      "能陈述「瞬时变化导论」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Introducing Calculus: Can Change Occur at an Instant?：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「瞬时变化导论」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "瞬时变化导论（Introducing Calculus: Can Change Occur at an Instant?）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「瞬时变化导论」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}",
        "note": "导数定义：差商的极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「瞬时变化导论」的工作方程或机制链。"
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
      "掌握 1.1「瞬时变化导论」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「瞬时变化导论」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「瞬时变化导论」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「瞬时变化导论」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「瞬时变化导论」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「瞬时变化导论」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.2",
        "title": "极限定义与记号",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「瞬时变化导论」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「瞬时变化导论」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「瞬时变化导论」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "瞬时变化率",
        "termEn": "instantaneous rate of change",
        "defZh": "函数在某一点处的变化率，等于该点切线的斜率。",
        "defEn": "The rate at which a function changes at a single instant, equal to the slope of the tangent line there."
      },
      {
        "termZh": "平均变化率",
        "termEn": "average rate of change",
        "defZh": "在区间 \\([a,b]\\) 上等于 \\(\\dfrac{f(b)-f(a)}{b-a}\\)。",
        "defEn": "Over an interval \\([a,b]\\), the quantity \\(\\dfrac{f(b)-f(a)}{b-a}\\)."
      },
      {
        "termZh": "割线",
        "termEn": "secant line",
        "defZh": "通过曲线上两点的直线，其斜率为区间上的平均变化率。",
        "defEn": "A line through two points on a curve, whose slope is the average rate of change over the interval."
      },
      {
        "termZh": "切线",
        "termEn": "tangent line",
        "defZh": "在一点处与曲线局部相切、斜率等于该点导数的直线。",
        "defEn": "A line touching a curve locally at a point, with slope equal to the derivative there."
      },
      {
        "termZh": "差商",
        "termEn": "difference quotient",
        "defZh": "\\(\\dfrac{f(a+h)-f(a)}{h}\\)，用于估计瞬时变化率。",
        "defEn": "The quotient \\(\\dfrac{f(a+h)-f(a)}{h}\\), used to estimate an instantaneous rate of change."
      },
      {
        "termZh": "极限过程",
        "termEn": "limiting process",
        "defZh": "令时间间隔或 \\(h\\) 趋于零，把平均变化率转化为瞬时变化率。",
        "defEn": "Letting the time interval or \\(h\\) approach zero to turn an average rate into an instantaneous rate."
      }
    ]
  },
  "1.2": {
    "id": "math/calc-u1/1.2",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.2",
    "titleZh": "极限定义与记号",
    "titleEn": "Defining Limits and Using Limit Notation",
    "layer": "ap",
    "summary": "极限定义与记号 · Defining Limits and Using Limit Notation",
    "learningObjectives": [
      "能陈述「极限定义与记号」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining Limits and Using Limit Notation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「极限定义与记号」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "极限定义与记号（Defining Limits and Using Limit Notation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「极限定义与记号」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「极限定义与记号」的工作方程或机制链。"
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
      "掌握 1.2「极限定义与记号」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「极限定义与记号」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「极限定义与记号」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「极限定义与记号」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「极限定义与记号」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「极限定义与记号」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.1",
        "title": "瞬时变化导论",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.3",
        "title": "由图像估计极限",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "limit-epsilon",
        "title": "极限与 ε-δ"
      }
    ],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「极限定义与记号」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「极限定义与记号」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「极限定义与记号」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "极限",
        "termEn": "limit",
        "defZh": "当 \\(x\\) 充分接近 \\(a\\) 时，\\(f(x)\\) 可以任意接近的数 \\(L\\)。",
        "defEn": "The number \\(L\\) that \\(f(x)\\) can be made arbitrarily close to as \\(x\\) gets sufficiently close to \\(a\\)."
      },
      {
        "termZh": "极限记号",
        "termEn": "limit notation",
        "defZh": "\\(\\lim_{x\\to a}f(x)=L\\)，读作当 \\(x\\) 趋于 \\(a\\) 时 \\(f(x)\\) 的极限为 \\(L\\)。",
        "defEn": "The notation \\(\\lim_{x\\to a}f(x)=L\\), read as the limit of \\(f(x)\\) as \\(x\\) approaches \\(a\\) is \\(L\\)."
      },
      {
        "termZh": "左极限",
        "termEn": "left-hand limit",
        "defZh": "\\(x\\) 从小于 \\(a\\) 的一侧趋近 \\(a\\) 时的极限，记作 \\(\\lim_{x\\to a^{-}}f(x)\\)。",
        "defEn": "The limit as \\(x\\) approaches \\(a\\) from values less than \\(a\\), written \\(\\lim_{x\\to a^{-}}f(x)\\)."
      },
      {
        "termZh": "右极限",
        "termEn": "right-hand limit",
        "defZh": "\\(x\\) 从大于 \\(a\\) 的一侧趋近 \\(a\\) 时的极限，记作 \\(\\lim_{x\\to a^{+}}f(x)\\)。",
        "defEn": "The limit as \\(x\\) approaches \\(a\\) from values greater than \\(a\\), written \\(\\lim_{x\\to a^{+}}f(x)\\)."
      },
      {
        "termZh": "双侧极限",
        "termEn": "two-sided limit",
        "defZh": "左极限与右极限都存在且相等时的共同值。",
        "defEn": "The common value when both one-sided limits exist and are equal."
      },
      {
        "termZh": "去心邻域",
        "termEn": "punctured neighborhood",
        "defZh": "满足 \\(0<|x-a|<\\delta\\) 的点集，不包含 \\(a\\) 本身。",
        "defEn": "The set of points with \\(0<|x-a|<\\delta\\), which excludes \\(a\\) itself."
      }
    ]
  },
  "1.3": {
    "id": "math/calc-u1/1.3",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.3",
    "titleZh": "由图像估计极限",
    "titleEn": "Estimating Limit Values from Graphs",
    "layer": "ap",
    "summary": "由图像估计极限 · Estimating Limit Values from Graphs",
    "learningObjectives": [
      "能陈述「由图像估计极限」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Estimating Limit Values from Graphs：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「由图像估计极限」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "由图像估计极限（Estimating Limit Values from Graphs）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「由图像估计极限」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；左右极限相等才是双侧极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「由图像估计极限」的工作方程或机制链。"
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
      "极限存在不要求 f(a) 有定义",
      "图像上的空洞或跳跃要靠左右极限判断",
      "y 值趋近 L，与 f(a) 的实际取值无关"
    ],
    "keyPoints": [
      "掌握 1.3「由图像估计极限」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「由图像估计极限」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「由图像估计极限」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「由图像估计极限」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「由图像估计极限」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「由图像估计极限」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.2",
        "title": "极限定义与记号",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.4",
        "title": "由表估计极限",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "limit-epsilon",
        "title": "极限与 ε-δ"
      }
    ],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「由图像估计极限」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「由图像估计极限」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「由图像估计极限」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "极限值",
        "termEn": "limit value",
        "defZh": "当 \\(x\\) 趋近 \\(a\\) 时函数所趋近的数 \\(L\\)，与 \\(f(a)\\) 本身无关。",
        "defEn": "The number \\(L\\) approached by a function as \\(x\\) approaches \\(a\\), independent of \\(f(a)\\) itself."
      },
      {
        "termZh": "图像估计",
        "termEn": "graphical estimate",
        "defZh": "沿曲线两侧观察函数值趋势来估计极限。",
        "defEn": "Estimating a limit by observing the trend of function values along both sides of a graph."
      },
      {
        "termZh": "空心点",
        "termEn": "hole",
        "defZh": "图像上表示该点未定义或被重新定义的空缺。",
        "defEn": "A gap in a graph showing that a point is undefined or has been redefined."
      },
      {
        "termZh": "单侧极限",
        "termEn": "one-sided limit",
        "defZh": "只从 \\(a\\) 的一侧趋近时得到的极限。",
        "defEn": "A limit obtained by approaching \\(a\\) from only one side."
      },
      {
        "termZh": "函数值",
        "termEn": "function value",
        "defZh": "\\(f(a)\\)，可能等于极限值，也可能不存在或与之不同。",
        "defEn": "The value \\(f(a)\\), which may equal the limit, may be undefined, or may differ from it."
      }
    ]
  },
  "1.4": {
    "id": "math/calc-u1/1.4",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.4",
    "titleZh": "由表估计极限",
    "titleEn": "Estimating Limit Values from Tables",
    "layer": "ap",
    "summary": "由表估计极限 · Estimating Limit Values from Tables",
    "learningObjectives": [
      "能陈述「由表估计极限」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Estimating Limit Values from Tables：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「由表估计极限」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "由表估计极限（Estimating Limit Values from Tables）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「由表估计极限」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「由表估计极限」的工作方程或机制链。"
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
      "掌握 1.4「由表估计极限」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「由表估计极限」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「由表估计极限」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「由表估计极限」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「由表估计极限」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「由表估计极限」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.3",
        "title": "由图像估计极限",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.5",
        "title": "极限的代数性质",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「由表估计极限」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「由表估计极限」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「由表估计极限」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "数值表",
        "termEn": "table of values",
        "defZh": "列出 \\(x\\) 接近 \\(a\\) 时对应函数值的表格。",
        "defEn": "A table listing function values for inputs near \\(a\\)."
      },
      {
        "termZh": "左逼近",
        "termEn": "approach from the left",
        "defZh": "取小于 \\(a\\) 的 \\(x\\) 值逐步靠近 \\(a\\)。",
        "defEn": "Using values of \\(x\\) less than \\(a\\) that get progressively closer to \\(a\\)."
      },
      {
        "termZh": "右逼近",
        "termEn": "approach from the right",
        "defZh": "取大于 \\(a\\) 的 \\(x\\) 值逐步靠近 \\(a\\)。",
        "defEn": "Using values of \\(x\\) greater than \\(a\\) that get progressively closer to \\(a\\)."
      },
      {
        "termZh": "极限存在",
        "termEn": "existence of a limit",
        "defZh": "左右两侧的数值趋势趋于同一个有限值。",
        "defEn": "The numerical trends from both sides approach one common finite value."
      },
      {
        "termZh": "舍入误差",
        "termEn": "rounding error",
        "defZh": "表格数值经过舍入后造成的偏差，可能掩盖真实极限。",
        "defEn": "Deviation caused by rounding table entries, which can obscure the true limit."
      }
    ]
  },
  "1.5": {
    "id": "math/calc-u1/1.5",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.5",
    "titleZh": "极限的代数性质",
    "titleEn": "Determining Limits Using Algebraic Properties of Limits",
    "layer": "ap",
    "summary": "极限的代数性质 · Determining Limits Using Algebraic Properties of Limits",
    "learningObjectives": [
      "能陈述「极限的代数性质」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Determining Limits Using Algebraic Properties of Limits：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「极限的代数性质」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "极限的代数性质（Determining Limits Using Algebraic Properties of Limits）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「极限的代数性质」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「极限的代数性质」的工作方程或机制链。"
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
      "掌握 1.5「极限的代数性质」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「极限的代数性质」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「极限的代数性质」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「极限的代数性质」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「极限的代数性质」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「极限的代数性质」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.4",
        "title": "由表估计极限",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.6",
        "title": "代数操作求极限",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「极限的代数性质」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「极限的代数性质」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「极限的代数性质」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "和法则",
        "termEn": "sum law",
        "defZh": "若两个极限都存在，则 \\(\\lim_{x\\to a}[f(x)+g(x)]=\\lim f+\\lim g\\)。",
        "defEn": "If both limits exist, then \\(\\lim_{x\\to a}[f(x)+g(x)]=\\lim f+\\lim g\\)."
      },
      {
        "termZh": "差法则",
        "termEn": "difference law",
        "defZh": "若两个极限都存在，则 \\(\\lim_{x\\to a}[f(x)-g(x)]=\\lim f-\\lim g\\)。",
        "defEn": "If both limits exist, then \\(\\lim_{x\\to a}[f(x)-g(x)]=\\lim f-\\lim g\\)."
      },
      {
        "termZh": "积法则",
        "termEn": "product law",
        "defZh": "若两个极限都存在，则 \\(\\lim_{x\\to a}[f(x)g(x)]=(\\lim f)(\\lim g)\\)。",
        "defEn": "If both limits exist, then \\(\\lim_{x\\to a}[f(x)g(x)]=(\\lim f)(\\lim g)\\)."
      },
      {
        "termZh": "商法则",
        "termEn": "quotient law",
        "defZh": "当分母极限不为零时，商的极限等于极限之商。",
        "defEn": "When the denominator's limit is nonzero, the limit of a quotient is the quotient of the limits."
      },
      {
        "termZh": "常数倍法则",
        "termEn": "constant multiple law",
        "defZh": "\\(\\lim_{x\\to a}[c f(x)]=c\\lim_{x\\to a}f(x)\\)。",
        "defEn": "\\(\\lim_{x\\to a}[c f(x)]=c\\lim_{x\\to a}f(x)\\)."
      },
      {
        "termZh": "复合函数极限",
        "termEn": "limit of a composite function",
        "defZh": "在外层函数连续时，\\(\\lim f(g(x))=f(\\lim g(x))\\)。",
        "defEn": "When the outer function is continuous, \\(\\lim f(g(x))=f(\\lim g(x))\\)."
      }
    ]
  },
  "1.6": {
    "id": "math/calc-u1/1.6",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.6",
    "titleZh": "代数操作求极限",
    "titleEn": "Determining Limits Using Algebraic Manipulation",
    "layer": "ap",
    "summary": "代数操作求极限 · Determining Limits Using Algebraic Manipulation",
    "learningObjectives": [
      "能陈述「代数操作求极限」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Determining Limits Using Algebraic Manipulation：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「代数操作求极限」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "代数操作求极限（Determining Limits Using Algebraic Manipulation）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「代数操作求极限」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「代数操作求极限」的工作方程或机制链。"
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
      "掌握 1.6「代数操作求极限」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「代数操作求极限」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「代数操作求极限」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「代数操作求极限」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「代数操作求极限」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「代数操作求极限」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.5",
        "title": "极限的代数性质",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.7",
        "title": "选择求极限程序",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「代数操作求极限」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「代数操作求极限」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「代数操作求极限」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "直接代入",
        "termEn": "direct substitution",
        "defZh": "把 \\(x=a\\) 代入函数求极限；若得到有限值即可用。",
        "defEn": "Substituting \\(x=a\\) into the function; valid when it yields a finite value."
      },
      {
        "termZh": "因式分解",
        "termEn": "factoring",
        "defZh": "把分子或分母分解以约去导致零分母的公因子。",
        "defEn": "Factoring numerator or denominator to cancel the common factor that makes the denominator zero."
      },
      {
        "termZh": "有理化",
        "termEn": "rationalization",
        "defZh": "乘以共轭表达式以消除根式造成的不定式。",
        "defEn": "Multiplying by a conjugate to remove an indeterminate form caused by radicals."
      },
      {
        "termZh": "公因子",
        "termEn": "common factor",
        "defZh": "分子分母中相同的因式，可在 \\(x\\ne a\\) 时约去。",
        "defEn": "A shared factor in numerator and denominator that may be canceled for \\(x\\ne a\\)."
      },
      {
        "termZh": "不定式",
        "termEn": "indeterminate form",
        "defZh": "如 \\(\\dfrac{0}{0}\\) 的表达式，需要变形后才能判断极限。",
        "defEn": "An expression such as \\(\\dfrac{0}{0}\\) that requires rewriting before its limit can be determined."
      },
      {
        "termZh": "等价变形",
        "termEn": "equivalent transformation",
        "defZh": "在定义域内保持函数值不变的代数改写。",
        "defEn": "An algebraic rewrite that preserves function values on the domain."
      }
    ]
  },
  "1.7": {
    "id": "math/calc-u1/1.7",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.7",
    "titleZh": "选择求极限程序",
    "titleEn": "Selecting Procedures for Determining Limits",
    "layer": "ap",
    "summary": "选择求极限程序 · Selecting Procedures for Determining Limits",
    "learningObjectives": [
      "能陈述「选择求极限程序」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Selecting Procedures for Determining Limits：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「选择求极限程序」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "选择求极限程序（Selecting Procedures for Determining Limits）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「选择求极限程序」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「选择求极限程序」的工作方程或机制链。"
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
      "掌握 1.7「选择求极限程序」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「选择求极限程序」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「选择求极限程序」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「选择求极限程序」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「选择求极限程序」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「选择求极限程序」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.6",
        "title": "代数操作求极限",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.8",
        "title": "挤压定理",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "limit-epsilon",
        "title": "极限与 ε-δ"
      }
    ],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「选择求极限程序」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「选择求极限程序」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「选择求极限程序」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "求极限程序",
        "termEn": "limit-finding procedure",
        "defZh": "按代入、变形、图像或定理等顺序选择方法的流程。",
        "defEn": "A sequence of methods such as substitution, rewriting, graphs, or theorems for evaluating a limit."
      },
      {
        "termZh": "直接代入",
        "termEn": "direct substitution",
        "defZh": "首先尝试把趋近值代入；出现不定式时改用其他方法。",
        "defEn": "Substituting the approach value first; if an indeterminate form appears, another method is needed."
      },
      {
        "termZh": "代数变形",
        "termEn": "algebraic manipulation",
        "defZh": "通过因式分解、有理化或通分消去不定式。",
        "defEn": "Removing an indeterminate form by factoring, rationalizing, or finding common denominators."
      },
      {
        "termZh": "夹逼定理",
        "termEn": "squeeze theorem",
        "defZh": "用两个已知极限相同的函数夹住目标函数。",
        "defEn": "Bounding a function between two functions whose limits are known and equal."
      },
      {
        "termZh": "无穷极限",
        "termEn": "infinite limit",
        "defZh": "函数值无界增长时极限为 \\(\\infty\\) 或 \\(-\\infty\\)。",
        "defEn": "A limit of \\(\\infty\\) or \\(-\\infty\\) when function values grow without bound."
      },
      {
        "termZh": "分段讨论",
        "termEn": "case analysis",
        "defZh": "对左右极限、绝对值或分段定义分别计算。",
        "defEn": "Evaluating one-sided limits, absolute values, or piecewise definitions separately."
      }
    ]
  },
  "1.8": {
    "id": "math/calc-u1/1.8",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.8",
    "titleZh": "挤压定理",
    "titleEn": "Determining Limits Using the Squeeze Theorem",
    "layer": "ap",
    "summary": "挤压定理 · Determining Limits Using the Squeeze Theorem",
    "learningObjectives": [
      "能陈述「挤压定理」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Determining Limits Using the Squeeze Theorem：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「挤压定理」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "挤压定理（Determining Limits Using the Squeeze Theorem）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「挤压定理」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「挤压定理」的工作方程或机制链。"
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
      "掌握 1.8「挤压定理」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「挤压定理」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「挤压定理」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「挤压定理」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「挤压定理」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「挤压定理」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.7",
        "title": "选择求极限程序",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.9",
        "title": "极限多种表示的联结",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「挤压定理」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「挤压定理」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「挤压定理」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "夹逼定理",
        "termEn": "squeeze theorem",
        "defZh": "若 \\(g(x)\\le f(x)\\le h(x)\\) 且两端极限同为 \\(L\\)，则中间函数的极限也为 \\(L\\)。",
        "defEn": "If \\(g(x)\\le f(x)\\le h(x)\\) and both outer limits equal \\(L\\), then the middle limit also equals \\(L\\)."
      },
      {
        "termZh": "上界",
        "termEn": "upper bound",
        "defZh": "函数 \\(h(x)\\)，使 \\(f(x)\\le h(x)\\) 在附近成立。",
        "defEn": "A function \\(h(x)\\) such that \\(f(x)\\le h(x)\\) near the point."
      },
      {
        "termZh": "下界",
        "termEn": "lower bound",
        "defZh": "函数 \\(g(x)\\)，使 \\(g(x)\\le f(x)\\) 在附近成立。",
        "defEn": "A function \\(g(x)\\) such that \\(g(x)\\le f(x)\\) near the point."
      },
      {
        "termZh": "振荡函数",
        "termEn": "oscillating function",
        "defZh": "如 \\(\\sin\\left(\\dfrac{1}{x}\\right)\\)，在一点附近无限次来回取值。",
        "defEn": "A function such as \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) that oscillates infinitely often near a point."
      },
      {
        "termZh": "有界性",
        "termEn": "boundedness",
        "defZh": "函数值被某个常数限制在有限范围内。",
        "defEn": "The property that function values stay within a finite range bounded by some constant."
      }
    ]
  },
  "1.9": {
    "id": "math/calc-u1/1.9",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.9",
    "titleZh": "极限多种表示的联结",
    "titleEn": "Connecting Multiple Representations of Limits",
    "layer": "ap",
    "summary": "极限多种表示的联结 · Connecting Multiple Representations of Limits",
    "learningObjectives": [
      "能陈述「极限多种表示的联结」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Connecting Multiple Representations of Limits：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「极限多种表示的联结」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "极限多种表示的联结（Connecting Multiple Representations of Limits）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「极限多种表示的联结」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「极限多种表示的联结」的工作方程或机制链。"
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
      "掌握 1.9「极限多种表示的联结」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「极限多种表示的联结」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「极限多种表示的联结」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「极限多种表示的联结」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「极限多种表示的联结」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「极限多种表示的联结」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.8",
        "title": "挤压定理",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.10",
        "title": "探索间断类型",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「极限多种表示的联结」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「极限多种表示的联结」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「极限多种表示的联结」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "多重表征",
        "termEn": "multiple representations",
        "defZh": "图像、数值表、代数式与文字描述之间的对应。",
        "defEn": "Corresponding views of a limit through graphs, tables, algebraic expressions, and words."
      },
      {
        "termZh": "图像",
        "termEn": "graph",
        "defZh": "用曲线走势显示左右极限与函数值的关系。",
        "defEn": "A curve showing the relationship among one-sided limits and the function value."
      },
      {
        "termZh": "数值表",
        "termEn": "table",
        "defZh": "用靠近 \\(a\\) 的输入输出数值显示极限趋势。",
        "defEn": "A table of inputs and outputs near \\(a\\) showing the limiting trend."
      },
      {
        "termZh": "代数式",
        "termEn": "algebraic expression",
        "defZh": "通过化简或代入得到极限的解析形式。",
        "defEn": "An analytic form of the limit obtained by simplification or substitution."
      },
      {
        "termZh": "一致性",
        "termEn": "consistency",
        "defZh": "不同表征给出的极限值相同。",
        "defEn": "The agreement of the limit value across different representations."
      }
    ]
  },
  "1.10": {
    "id": "math/calc-u1/1.10",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.10",
    "titleZh": "探索间断类型",
    "titleEn": "Exploring Types of Discontinuities",
    "layer": "ap",
    "summary": "探索间断类型 · Exploring Types of Discontinuities",
    "learningObjectives": [
      "能陈述「探索间断类型」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Exploring Types of Discontinuities：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「探索间断类型」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "探索间断类型（Exploring Types of Discontinuities）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「探索间断类型」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a^-}f(x)\\ne\\lim_{x\\to a^+}f(x)\\Rightarrow\\text{跳跃间断}",
        "note": "间断类型：可去、跳跃、无穷与振荡。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「探索间断类型」的工作方程或机制链。"
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
      "掌握 1.10「探索间断类型」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「探索间断类型」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「探索间断类型」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「探索间断类型」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「探索间断类型」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「探索间断类型」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.9",
        "title": "极限多种表示的联结",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.11",
        "title": "定义连续性",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「探索间断类型」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「探索间断类型」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「探索间断类型」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "间断点",
        "termEn": "point of discontinuity",
        "defZh": "函数在 \\(a\\) 处不连续的点。",
        "defEn": "A point \\(a\\) where a function is not continuous."
      },
      {
        "termZh": "可去间断",
        "termEn": "removable discontinuity",
        "defZh": "极限存在但 \\(f(a)\\) 不存在或不等于该极限。",
        "defEn": "A discontinuity where the limit exists but \\(f(a)\\) is undefined or differs from the limit."
      },
      {
        "termZh": "跳跃间断",
        "termEn": "jump discontinuity",
        "defZh": "左右极限都存在但不相等。",
        "defEn": "A discontinuity where both one-sided limits exist but are unequal."
      },
      {
        "termZh": "无穷间断",
        "termEn": "infinite discontinuity",
        "defZh": "至少一侧极限为 \\(\\infty\\) 或 \\(-\\infty\\)。",
        "defEn": "A discontinuity where at least one one-sided limit is \\(\\infty\\) or \\(-\\infty\\)."
      },
      {
        "termZh": "振荡间断",
        "termEn": "oscillatory discontinuity",
        "defZh": "函数在 \\(a\\) 附近无限振荡，极限不存在。",
        "defEn": "A discontinuity where the function oscillates without settling, so the limit fails to exist."
      },
      {
        "termZh": "左右极限",
        "termEn": "one-sided limits",
        "defZh": "分别从左侧和右侧趋近得到的极限值。",
        "defEn": "Limits obtained by approaching from the left and from the right."
      }
    ]
  },
  "1.11": {
    "id": "math/calc-u1/1.11",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.11",
    "titleZh": "定义连续性",
    "titleEn": "Defining Continuity at a Point",
    "layer": "ap",
    "summary": "定义连续性 · Defining Continuity at a Point",
    "learningObjectives": [
      "能陈述「定义连续性」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Defining Continuity at a Point：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「定义连续性」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "定义连续性（Defining Continuity at a Point）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「定义连续性」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=f(a)",
        "note": "连续的三条件：f(a) 有定义、极限存在、二者相等。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「定义连续性」的工作方程或机制链。"
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
      "掌握 1.11「定义连续性」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「定义连续性」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「定义连续性」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「定义连续性」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「定义连续性」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「定义连续性」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.10",
        "title": "探索间断类型",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.12",
        "title": "确认区间连续",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「定义连续性」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「定义连续性」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「定义连续性」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "点连续",
        "termEn": "continuity at a point",
        "defZh": "函数在 \\(a\\) 处连续当且仅当 \\(\\lim_{x\\to a}f(x)=f(a)\\)。",
        "defEn": "A function is continuous at \\(a\\) exactly when \\(\\lim_{x\\to a}f(x)=f(a)\\)."
      },
      {
        "termZh": "三条件",
        "termEn": "three conditions",
        "defZh": "\\(f(a)\\) 有定义、极限存在、二者相等。",
        "defEn": "\\(f(a)\\) is defined, the limit exists, and the two are equal."
      },
      {
        "termZh": "函数值",
        "termEn": "function value",
        "defZh": "函数在 \\(a\\) 处的取值 \\(f(a)\\)。",
        "defEn": "The value \\(f(a)\\) of the function at \\(a\\)."
      },
      {
        "termZh": "极限值",
        "termEn": "limit value",
        "defZh": "当 \\(x\\) 趋近 \\(a\\) 时函数趋近的数。",
        "defEn": "The number the function approaches as \\(x\\) approaches \\(a\\)."
      },
      {
        "termZh": "连续点",
        "termEn": "continuity point",
        "defZh": "满足点连续定义的 \\(a\\)。",
        "defEn": "A point \\(a\\) satisfying the definition of continuity at a point."
      }
    ]
  },
  "1.12": {
    "id": "math/calc-u1/1.12",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.12",
    "titleZh": "确认区间连续",
    "titleEn": "Confirming Continuity over an Interval",
    "layer": "ap",
    "summary": "确认区间连续 · Confirming Continuity over an Interval",
    "learningObjectives": [
      "能陈述「确认区间连续」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Confirming Continuity over an Interval：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「确认区间连续」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "确认区间连续（Confirming Continuity over an Interval）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「确认区间连续」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a^+}f(x)=f(a),\\quad \\lim_{x\\to b^-}f(x)=f(b)",
        "note": "闭区间连续：内部每点连续，端点单侧连续。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「确认区间连续」的工作方程或机制链。"
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
      "掌握 1.12「确认区间连续」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「确认区间连续」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「确认区间连续」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「确认区间连续」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「确认区间连续」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「确认区间连续」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.11",
        "title": "定义连续性",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.13",
        "title": "除去间断",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「确认区间连续」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「确认区间连续」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「确认区间连续」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "开区间连续",
        "termEn": "continuity on an open interval",
        "defZh": "函数在区间内每一点都连续。",
        "defEn": "The function is continuous at every point of the open interval."
      },
      {
        "termZh": "闭区间连续",
        "termEn": "continuity on a closed interval",
        "defZh": "在开区间内连续，且端点处单侧连续。",
        "defEn": "Continuous inside the interval and one-sided continuous at each endpoint."
      },
      {
        "termZh": "端点连续",
        "termEn": "endpoint continuity",
        "defZh": "\\(\\lim_{x\\to a^{+}}f(x)=f(a)\\) 或 \\(\\lim_{x\\to b^{-}}f(x)=f(b)\\)。",
        "defEn": "\\(\\lim_{x\\to a^{+}}f(x)=f(a)\\) or \\(\\lim_{x\\to b^{-}}f(x)=f(b)\\)."
      },
      {
        "termZh": "初等函数",
        "termEn": "elementary function",
        "defZh": "多项式、有理、三角、指数、对数及其复合。",
        "defEn": "Polynomial, rational, trigonometric, exponential, and logarithmic functions and their compositions."
      },
      {
        "termZh": "连续延拓",
        "termEn": "continuous extension",
        "defZh": "通过补充或修改端点值使函数在该点连续。",
        "defEn": "Making a function continuous at a point by supplying or changing its value there."
      }
    ]
  },
  "1.13": {
    "id": "math/calc-u1/1.13",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.13",
    "titleZh": "除去间断",
    "titleEn": "Removing Discontinuities",
    "layer": "ap",
    "summary": "除去间断 · Removing Discontinuities",
    "learningObjectives": [
      "能陈述「除去间断」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Removing Discontinuities：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「除去间断」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "除去间断（Removing Discontinuities）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「除去间断」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f(a)=\\lim_{x\\to a}f(x)",
        "note": "可去间断：补充或修改函数值即可连续。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「除去间断」的工作方程或机制链。"
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
      "掌握 1.13「除去间断」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「除去间断」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「除去间断」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「除去间断」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「除去间断」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「除去间断」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.12",
        "title": "确认区间连续",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.14",
        "title": "无限极限与竖直渐近",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「除去间断」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「除去间断」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「除去间断」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "可去间断",
        "termEn": "removable discontinuity",
        "defZh": "极限存在但函数值缺失或不匹配的间断。",
        "defEn": "A discontinuity where the limit exists but the function value is missing or mismatched."
      },
      {
        "termZh": "连续延拓",
        "termEn": "continuous extension",
        "defZh": "令 \\(f(a)=\\lim_{x\\to a}f(x)\\) 后得到的连续函数。",
        "defEn": "The continuous function obtained by setting \\(f(a)=\\lim_{x\\to a}f(x)\\)."
      },
      {
        "termZh": "重新定义函数值",
        "termEn": "redefining a function value",
        "defZh": "改变或补充单点的值而不改变极限。",
        "defEn": "Changing or supplying a single value without changing the limit."
      },
      {
        "termZh": "洞",
        "termEn": "hole",
        "defZh": "图像上一点的空缺，可由极限值填补。",
        "defEn": "A missing point on a graph that can be filled using the limit value."
      },
      {
        "termZh": "极限值",
        "termEn": "limit value",
        "defZh": "用来填补可去间断的函数值。",
        "defEn": "The value used to fill a removable discontinuity."
      }
    ]
  },
  "1.14": {
    "id": "math/calc-u1/1.14",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.14",
    "titleZh": "无限极限与竖直渐近",
    "titleEn": "Connecting Infinite Limits and Vertical Asymptotes",
    "layer": "ap",
    "summary": "无限极限与竖直渐近 · Connecting Infinite Limits and Vertical Asymptotes",
    "learningObjectives": [
      "能陈述「无限极限与竖直渐近」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Connecting Infinite Limits and Vertical Asymptotes：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「无限极限与竖直渐近」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "无限极限与竖直渐近（Connecting Infinite Limits and Vertical Asymptotes）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「无限极限与竖直渐近」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「无限极限与竖直渐近」的工作方程或机制链。"
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
      "掌握 1.14「无限极限与竖直渐近」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「无限极限与竖直渐近」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「无限极限与竖直渐近」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「无限极限与竖直渐近」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「无限极限与竖直渐近」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「无限极限与竖直渐近」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.13",
        "title": "除去间断",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.15",
        "title": "无穷远处极限与水平渐近",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「无限极限与竖直渐近」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「无限极限与竖直渐近」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「无限极限与竖直渐近」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "无穷极限",
        "termEn": "infinite limit",
        "defZh": "当 \\(x\\) 趋近 \\(a\\) 时函数值无界增长，记作 \\(\\lim_{x\\to a}f(x)=\\infty\\)。",
        "defEn": "A limit in which function values grow without bound, written \\(\\lim_{x\\to a}f(x)=\\infty\\)."
      },
      {
        "termZh": "竖直渐近线",
        "termEn": "vertical asymptote",
        "defZh": "直线 \\(x=a\\)，函数在其一侧或两侧趋于 \\(\\pm\\infty\\)。",
        "defEn": "The line \\(x=a\\) where the function tends to \\(\\pm\\infty\\) on one or both sides."
      },
      {
        "termZh": "单侧无穷",
        "termEn": "one-sided infinity",
        "defZh": "仅从左侧或右侧趋近时函数值趋于无穷。",
        "defEn": "Function values tending to infinity as the point is approached from only one side."
      },
      {
        "termZh": "分母零点",
        "termEn": "zero of the denominator",
        "defZh": "使分母为零的 \\(x\\) 值，可能导致竖直渐近线。",
        "defEn": "An \\(x\\)-value making the denominator zero, possibly producing a vertical asymptote."
      },
      {
        "termZh": "符号分析",
        "termEn": "sign analysis",
        "defZh": "判断分母在 \\(a\\) 两侧的正负以确定趋于 \\(+\\infty\\) 还是 \\(-\\infty\\)。",
        "defEn": "Determining the sign of the denominator on each side of \\(a\\) to decide between \\(+\\infty\\) and \\(-\\infty\\)."
      },
      {
        "termZh": "无界行为",
        "termEn": "unbounded behavior",
        "defZh": "函数值超过任意给定的正数。",
        "defEn": "Function values exceeding any prescribed positive number."
      }
    ]
  },
  "1.15": {
    "id": "math/calc-u1/1.15",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.15",
    "titleZh": "无穷远处极限与水平渐近",
    "titleEn": "Connecting Limits at Infinity and Horizontal Asymptotes",
    "layer": "ap",
    "summary": "无穷远处极限与水平渐近 · Connecting Limits at Infinity and Horizontal Asymptotes",
    "learningObjectives": [
      "能陈述「无穷远处极限与水平渐近」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Connecting Limits at Infinity and Horizontal Asymptotes：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「无穷远处极限与水平渐近」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "无穷远处极限与水平渐近（Connecting Limits at Infinity and Horizontal Asymptotes）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「无穷远处极限与水平渐近」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a}f(x)=L",
        "note": "极限记号；勿写成 f(a)/ 形式代替极限。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「无穷远处极限与水平渐近」的工作方程或机制链。"
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
      "掌握 1.15「无穷远处极限与水平渐近」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「无穷远处极限与水平渐近」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「无穷远处极限与水平渐近」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\lim_{x\\to a}f(x)=L"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「无穷远处极限与水平渐近」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「无穷远处极限与水平渐近」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「无穷远处极限与水平渐近」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.14",
        "title": "无限极限与竖直渐近",
        "relation": "prerequisite"
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.16",
        "title": "中间值定理",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「无穷远处极限与水平渐近」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「无穷远处极限与水平渐近」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「无穷远处极限与水平渐近」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "无穷远处极限",
        "termEn": "limit at infinity",
        "defZh": "\\(\\lim_{x\\to\\infty}f(x)=L\\) 表示 \\(x\\) 增大时函数趋近 \\(L\\)。",
        "defEn": "\\(\\lim_{x\\to\\infty}f(x)=L\\) means the function approaches \\(L\\) as \\(x\\) grows."
      },
      {
        "termZh": "水平渐近线",
        "termEn": "horizontal asymptote",
        "defZh": "直线 \\(y=L\\)，函数在 \\(x\\to\\pm\\infty\\) 时趋近它。",
        "defEn": "The line \\(y=L\\) approached by the function as \\(x\\to\\pm\\infty\\)."
      },
      {
        "termZh": "末端行为",
        "termEn": "end behavior",
        "defZh": "自变量很大或很小时函数的趋势。",
        "defEn": "The behavior of a function for very large or very small inputs."
      },
      {
        "termZh": "主导项",
        "termEn": "leading term",
        "defZh": "多项式中次数最高的项，决定无穷远处的增长。",
        "defEn": "The highest-degree term of a polynomial, which controls growth at infinity."
      },
      {
        "termZh": "次数比较",
        "termEn": "degree comparison",
        "defZh": "比较分子分母最高次数以确定有理函数的极限。",
        "defEn": "Comparing the highest degrees of numerator and denominator to find a rational function's limit."
      },
      {
        "termZh": "有理函数",
        "termEn": "rational function",
        "defZh": "两个多项式之比的函数。",
        "defEn": "A function that is the ratio of two polynomials."
      }
    ]
  },
  "1.16": {
    "id": "math/calc-u1/1.16",
    "subject": "math",
    "chapterId": "calc-u1",
    "unitCode": "1",
    "unitTitleZh": "极限与连续",
    "unitTitleEn": "Limits and Continuity",
    "code": "1.16",
    "titleZh": "中间值定理",
    "titleEn": "Working with the Intermediate Value Theorem (IVT)",
    "layer": "ap",
    "summary": "中间值定理 · Working with the Intermediate Value Theorem (IVT)",
    "learningObjectives": [
      "能陈述「中间值定理」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Working with the Intermediate Value Theorem (IVT)：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用极限/导数/积分语言精确表述「中间值定理」，书写叠式分式。",
      "能检验特例（常函数、线性、对称性）与量纲一致性。"
    ],
    "definition": "中间值定理（Working with the Intermediate Value Theorem (IVT)）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「中间值定理」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "f(a)<k<f(b)\\Rightarrow\\exists c\\in(a,b),\\ f(c)=k",
        "note": "中间值定理要求 f 在闭区间连续。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「中间值定理」的工作方程或机制链。"
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
      "掌握 1.16「中间值定理」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「中间值定理」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "极限存在与函数在该点有定义混淆；随意约去可能为零的因子"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「中间值定理」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f'(x)"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「中间值定理」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「中间值定理」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「中间值定理」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.15",
        "title": "无穷远处极限与水平渐近",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/math/practice/calc-u1",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「中间值定理」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「中间值定理」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「中间值定理」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ],
    "vocabulary": [
      {
        "termZh": "中间值定理",
        "termEn": "Intermediate Value Theorem",
        "defZh": "若 \\(f\\) 在 \\([a,b]\\) 上连续且 \\(k\\) 介于 \\(f(a)\\) 与 \\(f(b)\\) 之间，则存在 \\(c\\in(a,b)\\) 使 \\(f(c)=k\\)。",
        "defEn": "If \\(f\\) is continuous on \\([a,b]\\) and \\(k\\) lies between \\(f(a)\\) and \\(f(b)\\), then some \\(c\\in(a,b)\\) satisfies \\(f(c)=k\\)."
      },
      {
        "termZh": "介值",
        "termEn": "intermediate value",
        "defZh": "位于两个函数值之间的数 \\(k\\)。",
        "defEn": "A number \\(k\\) lying between two function values."
      },
      {
        "termZh": "存在性",
        "termEn": "existence",
        "defZh": "定理只保证至少一个 \\(c\\) 存在，不给出具体位置。",
        "defEn": "The theorem guarantees at least one such \\(c\\) without locating it."
      },
      {
        "termZh": "闭区间",
        "termEn": "closed interval",
        "defZh": "包含端点的区间 \\([a,b]\\)，是定理的前提。",
        "defEn": "The interval \\([a,b]\\) including endpoints, required by the theorem."
      },
      {
        "termZh": "零点",
        "termEn": "root",
        "defZh": "使 \\(f(c)=0\\) 的点 \\(c\\)，常用介值定理证明其存在。",
        "defEn": "A point \\(c\\) with \\(f(c)=0\\), often shown to exist with the Intermediate Value Theorem."
      }
    ]
  }
};
