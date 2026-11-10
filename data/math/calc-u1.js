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
    "summary": "图像只呈现有限视窗与有限分辨率下的趋势：先分别读出左右极限，再判断双侧极限，并警惕被尺度掩盖的振荡、空洞、跳跃与无界行为。 · A graph shows trends only within a chosen window and at finite resolution: read the one-sided limits first, then decide the two-sided limit, and watch for oscillation, holes, jumps, and unbounded behavior hidden by scale.",
    "learningObjectives": [
      "能从图像读出 \\(\\lim_{x\\to a^-}f(x)\\)、\\(\\lim_{x\\to a^+}f(x)\\) 与 \\(f(a)\\)，并据此判断 \\(\\lim_{x\\to a}f(x)\\) 是否存在。 · Read \\(\\lim_{x\\to a^-}f(x)\\), \\(\\lim_{x\\to a^+}f(x)\\), and \\(f(a)\\) from a graph, then decide whether \\(\\lim_{x\\to a}f(x)\\) exists.",
      "能解释图像尺度、视窗与采样为什么可能掩盖函数在 \\(x=a\\) 附近的行为，并主动缩放、换窗或改用数值表核查。 · Explain why graph scale, viewing window, and sampling can hide behavior near \\(x=a\\), and check by zooming, changing the window, or using a table.",
      "能识别极限不存在的三类图像证据：无界、振荡、左右极限不相等。 · Identify three graphical signatures of a nonexistent limit: unbounded behavior, oscillation, and unequal one-sided limits.",
      "能用主张—证据—推理说明“图上看起来”与“极限定义”之间的差距。 · Use claim-evidence-reasoning to distinguish what a graph appears to show from what the limit definition requires."
    ],
    "essentialKnowledge": [
      "极限 \\(\\lim_{x\\to a}f(x)=L\\) 只约束 \\(x\\) 充分接近 \\(a\\)（但 \\(x\\ne a\\)）时的函数值，与 \\(f(a)\\) 是否有定义、等于多少无关。 · \\(\\lim_{x\\to a}f(x)=L\\) constrains only values for \\(x\\) sufficiently close to \\(a\\) with \\(x\\ne a\\); whether \\(f(a)\\) is defined, or what it equals, is irrelevant.",
      "单侧极限 \\(\\lim_{x\\to a^-}f(x)\\) 与 \\(\\lim_{x\\to a^+}f(x)\\) 分别描述从左侧、右侧趋近时的趋势；双侧极限存在当且仅当两个单侧极限都存在且相等。 · The one-sided limits describe the trend from the left and from the right; the two-sided limit exists exactly when both one-sided limits exist and agree.",
      "由图像估计极限：沿曲线从 \\(a\\) 的左右两侧追踪纵坐标，读出它们共同趋近的 \\(y\\) 值；空心点只说明 \\(f(a)\\) 未定义或被重新定义，不改变极限。 · To estimate a limit from a graph, trace the vertical coordinate along the curve from both sides of \\(a\\) and read the common \\(y\\)-value; an open dot only says that \\(f(a)\\) is undefined or redefined and does not change the limit.",
      "图像是有限视窗、有限像素与有限采样点的表示；因为尺度问题，图形可能漏掉窄而高的尖峰、细小的跳跃、空心点、快速振荡或视窗外的行为。 · A graph is a representation with a finite window, finite pixels, and finitely many sample points; because of issues of scale, graphical representations of functions may miss important function behavior such as narrow spikes, small jumps, holes, rapid oscillation, or behavior outside the window.",
      "缩放时要分别调整 \\(x\\) 与 \\(y\\) 方向：只放大 \\(x\\) 可能仍看不见纵向的小跳跃，只放大 \\(y\\) 可能错过横向的快速振荡。 · Zoom the \\(x\\) and \\(y\\) directions independently: zooming only \\(x\\) may still hide a small vertical jump, and zooming only \\(y\\) may miss rapid horizontal oscillation.",
      "极限不存在的常见图像证据：函数无界（竖直渐近线）、在 \\(a\\) 附近无限振荡、左右极限不相等。 · Common graphical evidence that a limit does not exist: the function is unbounded (vertical asymptote), oscillates infinitely often near \\(a\\), or has unequal one-sided limits.",
      "振荡但有界不等于极限存在：\\(\\sin\\left(\\dfrac{1}{x}\\right)\\) 在 0 附近反复取到 1 与 −1；必须用定义或两侧序列说明不存在，而不能因为图像像一条“带子”就猜极限为 0。 · Bounded oscillation does not imply a limit: \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) repeatedly takes the values 1 and −1 near 0; use the definition or two sequences to show that no limit exists instead of guessing 0 from a band-like picture.",
      "图像只给出估计；AP 论证要把图像证据转成单侧极限或序列的陈述，并在可能时用数值表或解析式核对。过度放大后的像素抖动、抗锯齿灰阶或数值噪声不是函数本身的行为。 · A graph gives only an estimate; AP justification converts graphical evidence into one-sided limit or sequence statements and checks with a table or formula when possible. Pixel jitter, antialiasing shades, or numerical noise after over-zooming are not behavior of the function itself."
    ],
    "definition": "由图像估计极限，是指观察函数图像在 \\(x\\) 趋近 \\(a\\) 时纵坐标的趋势，分别读出左极限与右极限，再判断它们是否相等。若从两侧都趋近同一个实数 \\(L\\)，则 \\(\\lim_{x\\to a}f(x)=L\\)；若两侧趋近不同的值、函数无界，或在 \\(a\\) 附近无限振荡而没有单一趋近值，则双侧极限不存在。图像只是有限视窗与有限分辨率下的采样，尺度可能隐藏 \\(x=a\\) 附近的重要行为，因此读图得到的只是估计，需要用缩放、数值表或解析形式核查。 · Estimating a limit from a graph means observing the trend of the vertical coordinate as \\(x\\) approaches \\(a\\), reading the left-hand and right-hand limits separately, and deciding whether they agree. If both sides approach the same real number \\(L\\), then \\(\\lim_{x\\to a}f(x)=L\\); if the two sides approach different values, the function is unbounded, or it oscillates infinitely often near \\(a\\) without a single approach value, then the two-sided limit does not exist. A graph is only a sampling within a finite window and finite resolution, so scale can hide important behavior near \\(x=a\\); a graphical reading is therefore an estimate that should be checked by zooming, a table, or the algebraic form.",
    "intuition": "把图像想成一张地图：地图有边界、有比例尺，也有画不下的细节。粗尺度下，空心点会被线宽吞掉，0.01 的跳跃看起来像连续，快速振荡会被涂成一条实心带，竖直渐近线会被视窗裁成“断头路”。反过来，放大过头时，像素锯齿和计算误差又会伪装成新的“细节”。可靠的做法是：先看坐标轴与视窗，再从左右两侧读趋势，最后用数值表或解析式确认。极限是函数的性质，不会因为换窗口而改变；改变的只是我们能否看见它。 · Think of a graph as a map: it has borders, a scale, and details too small to draw. At a coarse scale, a hole disappears into the line width, a 0.01 jump looks continuous, rapid oscillation is painted as a solid band, and a vertical asymptote is clipped into a dead end. Zoom in too far, and pixel jaggedness or numerical error masquerades as new detail. The reliable routine is to check the axes and window, read the trend from both sides, and then confirm with a table or the formula. The limit is a property of the function and does not change when the window changes; only our ability to see it does.",
    "formulas": [
      {
        "latex": "\\lim_{x\\to a^-}f(x)=L,\\quad \\lim_{x\\to a^+}f(x)=M",
        "note": "左极限与右极限可以不同；此时双侧极限不存在。 · The one-sided limits may differ; then the two-sided limit does not exist."
      },
      {
        "latex": "\\lim_{x\\to a}f(x)=L\\iff \\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L",
        "note": "双侧极限存在的判据：两个单侧极限都存在且相等。 · Criterion for a two-sided limit: both one-sided limits exist and agree."
      },
      {
        "latex": "\\lim_{x\\to a}f(x)=f(a)",
        "note": "只有当 \\(f\\) 在 \\(a\\) 连续时才能直接代入；不能由图像“看起来连着”反推连续。 · Direct substitution is valid only when \\(f\\) is continuous at \\(a\\); a graph that “looks connected” does not prove continuity."
      }
    ],
    "derivationNotes": [
      {
        "from": "左右追踪图像 · Tracing the graph from both sides",
        "to": "单侧极限 · One-sided limits",
        "note": "从 \\(a\\) 左侧取一系列趋近 \\(a\\) 的 \\(x\\)，记录对应 \\(y\\)；若这些 \\(y\\) 任意接近 \\(L\\)，左极限为 \\(L\\)。右侧同理。 · Take \\(x\\)-values approaching \\(a\\) from the left and record the corresponding \\(y\\)-values; if they become arbitrarily close to \\(L\\), the left limit is \\(L\\). Repeat from the right."
      },
      {
        "from": "单侧极限 · One-sided limits",
        "to": "双侧极限 · Two-sided limit",
        "note": "两侧都存在且相等时才写 \\(\\lim_{x\\to a}f(x)=L\\)；只要有一侧不存在或两侧不等，双侧极限就不存在。 · Write the two-sided limit only when both one-sided limits exist and agree; if either fails or they differ, the two-sided limit does not exist."
      },
      {
        "from": "有限视窗与采样 · Finite window and sampling",
        "to": "尺度可能漏掉行为 · Scale may hide behavior",
        "note": "绘图窗口裁掉了视窗外的值，像素与采样点又把窄特征平均掉；因此“看不见”不等于“没有”。 · The window clips values outside it, and pixels and samples average out narrow features; “not visible” does not mean “not there.”"
      },
      {
        "from": "缩放与数值表 · Zoom and table",
        "to": "可靠估计 · Reliable estimate",
        "note": "分别放大 \\(x\\)、\\(y\\)，再看 \\(a\\) 两侧的数值表；若图像与表格冲突，以定义和解析式为准。 · Zoom \\(x\\) and \\(y\\) separately, inspect a table on both sides of \\(a\\), and let the definition and formula decide if graph and table conflict."
      }
    ],
    "conditions": [
      "先确认坐标轴刻度、视窗范围以及 \\(x\\)、\\(y\\) 是否同比例；不同比例会改变视觉斜率，但不改变极限值。 · Check the axis ticks, the window, and whether \\(x\\) and \\(y\\) use the same scale; unequal scales change apparent steepness, not the limit.",
      "\\(x=a\\) 附近的行为必须在当前视窗和分辨率下可见；否则先缩放、换窗或改用数值表。 · The behavior near \\(x=a\\) must be visible at the current window and resolution; otherwise zoom, change the window, or use a table first.",
      "空心点与实心点只决定 \\(f(a)\\)，不决定极限；不要把点本身的高度当作极限值。 · Open and closed dots determine \\(f(a)\\), not the limit; do not read the dot's height as the limit.",
      "图像只能给出估计；严格结论需要单侧极限、定义、数值表或解析式支持。 · A graph gives only an estimate; a rigorous conclusion needs one-sided limits, the definition, a table, or the algebraic form.",
      "\\(\\infty\\) 与 \\(-\\infty\\) 不是实数；写 \\(\\lim f=\\infty\\) 是描述无界行为，双侧极限作为实数仍不存在。 · \\(\\infty\\) and \\(-\\infty\\) are not real numbers; \\(\\lim f=\\infty\\) describes unbounded behavior, and the two-sided limit still does not exist as a real number."
    ],
    "keyPoints": [
      "极限看的是 \\(y\\) 值趋近，不是 \\(x\\) 值，也不是 \\(f(a)\\) 的高度。 · A limit is about the \\(y\\)-values approached, not the \\(x\\)-value and not the height of \\(f(a)\\).",
      "先写左、右极限，再下结论；两侧相等才是双侧极限。 · Write the left and right limits first; only equal one-sided limits give a two-sided limit.",
      "空心点、跳跃、竖直渐近线、振荡分别对应不同的图像证据。 · Holes, jumps, vertical asymptotes, and oscillation each give different graphical evidence.",
      "尺度会骗人：粗尺度藏细节，过度放大出噪声；换窗口不改变极限。 · Scale can mislead: coarse scales hide detail and over-zooming creates noise; changing the window does not change the limit.",
      "小跳跃、空心点、快速振荡可能比线宽还窄；必须缩放并用数值表核对。 · Small jumps, holes, and rapid oscillation may be narrower than the line width; zoom and check a table.",
      "有界振荡（如 \\(\\sin\\left(\\dfrac{1}{x}\\right)\\)）仍可能没有极限；无界（如 \\(\\dfrac{1}{x}\\)）也不是实数极限。 · Bounded oscillation such as \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) may still have no limit, and unbounded behavior such as \\(\\dfrac{1}{x}\\) is not a real limit.",
      "AP 简答要把“图上看到”翻译成 \\(\\lim_{x\\to a^-}\\)、\\(\\lim_{x\\to a^+}\\) 或序列的陈述。 · AP free response must translate “the graph shows” into statements about \\(\\lim_{x\\to a^-}\\), \\(\\lim_{x\\to a^+}\\), or sequences.",
      "图像估计与解析结果冲突时，优先相信定义与代数。 · When a graphical estimate conflicts with an analytic result, trust the definition and the algebra."
    ],
    "misconceptions": [
      "把图像上 \\(x=a\\) 处空心点的高度当作极限；空心点只说明 \\(f(a)\\) 未定义或被重新定义。 · Treating the height of an open dot at \\(x=a\\) as the limit; the open dot only says that \\(f(a)\\) is undefined or redefined.",
      "看到曲线在 \\(a\\) 处“连在一起”就断定极限存在；线宽可能掩盖了空洞或小跳跃。 · Concluding that a limit exists because the curve “looks connected” at \\(a\\); line width can hide a hole or a small jump.",
      "把 \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) 在粗尺度下的实心带读成极限 0；振荡没有单一趋近值。 · Reading a solid band for \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) at a coarse scale as a limit of 0; the oscillation has no single approach value.",
      "把视窗裁掉的图像端点当作函数定义域的端点；曲线离开视窗不等于函数在此终止。 · Treating the edge where a curve leaves the window as an endpoint of the domain; leaving the window does not mean the function ends there.",
      "认为换一个更“好看”的窗口会改变极限；极限是函数性质。 · Thinking a nicer window changes the limit; the limit is a property of the function.",
      "把 \\(\\lim f=\\infty\\) 当作极限等于某个实数 \\(\\infty\\)；它只描述无界趋势。 · Treating \\(\\lim f=\\infty\\) as a real limit equal to \\(\\infty\\); it only describes unbounded behavior.",
      "只从一侧读图就写双侧极限；漏掉另一侧可能不同。 · Writing a two-sided limit after reading only one side; the other side may differ.",
      "过度放大后把像素锯齿、抗锯齿灰阶或数值抖动当成函数振荡。 · Mistaking pixel jaggedness, antialiasing shades, or numerical jitter for genuine oscillation after over-zooming."
    ],
    "examples": [
      {
        "title": "例 1 · 读左右极限与函数值 · Example 1: One-sided limits and the function value",
        "prompt": "某函数 \\(f\\) 的图像在 \\(x=1\\) 附近：从左侧沿曲线趋于 \\((1,2)\\) 的空心点；从右侧沿曲线趋于 \\((1,3)\\) 的空心点；在 \\(x=1\\) 处另有实心点 \\((1,1)\\)。求 \\(\\lim_{x\\to1^-}f(x)\\)、\\(\\lim_{x\\to1^+}f(x)\\)、\\(\\lim_{x\\to1}f(x)\\) 与 \\(f(1)\\)。 · Near \\(x=1\\), the graph of \\(f\\) approaches the open point \\((1,2)\\) from the left, approaches the open point \\((1,3)\\) from the right, and has a closed point at \\((1,1)\\). Find \\(\\lim_{x\\to1^-}f(x)\\), \\(\\lim_{x\\to1^+}f(x)\\), \\(\\lim_{x\\to1}f(x)\\), and \\(f(1)\\).",
        "steps": [
          "左极限读左侧分支趋近的纵坐标：\\(\\lim_{x\\to1^-}f(x)=2\\)。 · The left limit is the \\(y\\)-value approached from the left: \\(\\lim_{x\\to1^-}f(x)=2\\).",
          "右极限读右侧分支：\\(\\lim_{x\\to1^+}f(x)=3\\)。 · The right limit is read from the right branch: \\(\\lim_{x\\to1^+}f(x)=3\\).",
          "两侧极限不相等，所以双侧极限不存在；实心点给出 \\(f(1)=1\\)，与极限无关。 · The one-sided limits differ, so the two-sided limit does not exist; the closed dot gives \\(f(1)=1\\), which is irrelevant to the limit."
        ],
        "solution": "左极限为 2，右极限为 3，\\(\\lim_{x\\to1}f(x)\\) 不存在，\\(f(1)=1\\)。 · The left limit is 2, the right limit is 3, \\(\\lim_{x\\to1}f(x)\\) does not exist, and \\(f(1)=1\\).",
        "solutionLatex": "\\lim_{x\\to1^-}f(x)=2,\\quad \\lim_{x\\to1^+}f(x)=3,\\quad \\lim_{x\\to1}f(x)\\ \\text{DNE},\\quad f(1)=1"
      },
      {
        "title": "例 2 · 尺度掩盖振荡 · Example 2: Oscillation hidden by scale",
        "prompt": "某绘图工具在 \\([-0.5,0.5]\\) 上画出 \\(f(x)=\\sin\\left(\\dfrac{1}{x}\\right)\\)，图像看起来像一条介于 \\(-1\\) 与 \\(1\\) 之间的实心带；在更窄的窗口 \\([-0.01,0.01]\\) 上，由于采样点有限，曲线又像一条光滑的波浪线经过原点。学生据此断言 \\(\\lim_{x\\to0}f(x)=0\\)。判断该断言并给出证据。 · A graphing tool plots \\(f(x)=\\sin\\left(\\dfrac{1}{x}\\right)\\) on \\([-0.5,0.5]\\); the picture looks like a solid band between \\(-1\\) and \\(1\\). In the narrower window \\([-0.01,0.01]\\), finite sampling makes the curve look like a smooth wave through the origin. A student concludes that \\(\\lim_{x\\to0}f(x)=0\\). Evaluate the claim and give evidence.",
        "steps": [
          "取 \\(x_n=\\dfrac{1}{\\dfrac{\\pi}{2}+2\\pi n}\\to0^+\\)，则 \\(f(x_n)=\\sin\\left(\\dfrac{\\pi}{2}+2\\pi n\\right)=1\\)。 · Take \\(x_n=\\dfrac{1}{\\dfrac{\\pi}{2}+2\\pi n}\\to0^+\\); then \\(f(x_n)=\\sin\\left(\\dfrac{\\pi}{2}+2\\pi n\\right)=1\\).",
          "取 \\(y_n=\\dfrac{1}{\\dfrac{3\\pi}{2}+2\\pi n}\\to0^+\\)，则 \\(f(y_n)=\\sin\\left(\\dfrac{3\\pi}{2}+2\\pi n\\right)=-1\\)。 · Take \\(y_n=\\dfrac{1}{\\dfrac{3\\pi}{2}+2\\pi n}\\to0^+\\); then \\(f(y_n)=\\sin\\left(\\dfrac{3\\pi}{2}+2\\pi n\\right)=-1\\).",
          "两列自变量都趋于 0，但函数值分别恒为 1 与 −1，不可能同时任意接近同一个 \\(L\\)；因此极限不存在。图像中的“实心带”或“光滑波浪”只是有限采样与线宽的产物。 · Both sequences of inputs tend to 0, yet the function values are constantly 1 and −1; they cannot both become arbitrarily close to one \\(L\\), so the limit does not exist. The “solid band” or “smooth wave” is an artifact of finite sampling and line width."
        ],
        "solution": "断言错误；\\(\\lim_{x\\to0}\\sin\\left(\\dfrac{1}{x}\\right)\\) 不存在。 · The claim is false; \\(\\lim_{x\\to0}\\sin\\left(\\dfrac{1}{x}\\right)\\) does not exist.",
        "solutionLatex": "x_n=\\dfrac{1}{\\dfrac{\\pi}{2}+2\\pi n}\\to0^+,\\ f(x_n)=1;\\qquad y_n=\\dfrac{1}{\\dfrac{3\\pi}{2}+2\\pi n}\\to0^+,\\ f(y_n)=-1"
      },
      {
        "title": "例 3 · 尺度掩盖空心点 · Example 3: A hole hidden by scale",
        "prompt": "\\(f(x)=\\dfrac{x^{2}-4}{x-2}\\) 在 \\([-6,6]\\) 上的图像看起来是一条直线 \\(y=x+2\\)。(a) 用代数式说明 \\(x=2\\) 处发生了什么；(b) 求 \\(\\lim_{x\\to2}f(x)\\)；(c) 若定义 \\(f(2)=1\\)，极限是否改变？ · The graph of \\(f(x)=\\dfrac{x^{2}-4}{x-2}\\) on \\([-6,6]\\) looks like the line \\(y=x+2\\). (a) Use the formula to explain what happens at \\(x=2\\). (b) Find \\(\\lim_{x\\to2}f(x)\\). (c) If \\(f(2)=1\\) is defined, does the limit change?",
        "steps": [
          "(a) 分子 \\(x^{2}-4=(x-2)(x+2)\\)，当 \\(x\\ne2\\) 时 \\(f(x)=x+2\\)；\\(x=2\\) 使分母为零，故 \\(f(2)\\) 未定义。图像上的空心点在粗尺度下被线宽遮住。 · (a) The numerator factors as \\(x^{2}-4=(x-2)(x+2)\\), so \\(f(x)=x+2\\) for \\(x\\ne2\\); at \\(x=2\\) the denominator is zero, so \\(f(2)\\) is undefined. The hole is hidden by the line width at a coarse scale.",
          "(b) \\(x\\to2\\) 时 \\(x+2\\to4\\)，所以 \\(\\lim_{x\\to2}f(x)=4\\)。可用表核对：\\(f(1.9)=3.9\\)、\\(f(1.99)=3.99\\)、\\(f(2.01)=4.01\\)。 · (b) As \\(x\\to2\\), \\(x+2\\to4\\), so \\(\\lim_{x\\to2}f(x)=4\\). A table confirms it: \\(f(1.9)=3.9\\), \\(f(1.99)=3.99\\), and \\(f(2.01)=4.01\\).",
          "(c) 重新定义 \\(f(2)=1\\) 只改变函数值，不改变 \\(x\\ne2\\) 时的取值，所以极限仍为 4；但此时 \\(f\\) 在 2 处不连续。 · (c) Redefining \\(f(2)=1\\) changes only the function value, not the values for \\(x\\ne2\\), so the limit is still 4; however, \\(f\\) is then not continuous at 2."
        ],
        "solution": "\\(f(2)\\) 原本未定义，\\(\\lim_{x\\to2}f(x)=4\\)；令 \\(f(2)=1\\) 后极限仍为 4，但函数在 2 处不连续。 · \\(f(2)\\) is originally undefined and \\(\\lim_{x\\to2}f(x)=4\\); after setting \\(f(2)=1\\), the limit is still 4 but the function is not continuous at 2.",
        "solutionLatex": "f(x)=x+2\\ (x\\ne2),\\qquad \\lim_{x\\to2}f(x)=4,\\qquad f(2)\\ \\text{undefined (or redefined to }1\\text{)}"
      },
      {
        "title": "例 4 · 被线宽吞掉的小跳跃与裁切 · Example 4: A small jump swallowed by line width, and clipping",
        "prompt": "\\(f(x)=\\begin{cases}x,&x<1,\\\\ x+0.01,&x\\ge1.\\end{cases}\\) (a) 在视窗 \\([0,2]\\times[0,2]\\) 上，图像看起来像一条连续的直线；解释为什么。(b) 把 \\(y\\) 视窗改为 \\([0.98,1.02]\\) 后能看到什么？求两侧极限并判断 \\(\\lim_{x\\to1}f(x)\\)。(c) 另有 \\(g(x)=\\dfrac{1}{(x-1)^{2}}\\)，在 \\(y\\) 上限为 10 的视窗中图像像两条在 \\(x=1\\) 处“断掉”的曲线；这能否说明 \\(g\\) 在 1 附近有有限极限？ · \\(f(x)=\\begin{cases}x,&x<1,\\\\ x+0.01,&x\\ge1.\\end{cases}\\) (a) In the window \\([0,2]\\times[0,2]\\) the graph looks like one continuous line; explain why. (b) What appears when the \\(y\\)-window is changed to \\([0.98,1.02]\\)? Find both one-sided limits and decide whether \\(\\lim_{x\\to1}f(x)\\) exists. (c) For \\(g(x)=\\dfrac{1}{(x-1)^{2}}\\), a window with \\(y\\)-maximum 10 shows two curves that look “cut off” at \\(x=1\\). Does this show that \\(g\\) has a finite limit near 1?",
        "steps": [
          "(a) 跳跃高度只有 0.01，而视窗纵向跨度为 2；在常见显示尺寸下，线宽与 0.01 的偏移同量级甚至更宽，两段几乎重合，看起来连续。 · (a) The jump is only 0.01 high while the window spans 2 vertically; at common display sizes, the line width is comparable to or wider than a 0.01 offset, so the two pieces almost coincide and look continuous.",
          "(b) 放大 \\(y\\) 后可见右段整体高 0.01：\\(\\lim_{x\\to1^-}f(x)=1\\)，\\(\\lim_{x\\to1^+}f(x)=1.01\\)；两侧不等，\\(\\lim_{x\\to1}f(x)\\) 不存在，而 \\(f(1)=1.01\\)。 · (b) Zooming \\(y\\) reveals that the right piece is 0.01 higher: \\(\\lim_{x\\to1^-}f(x)=1\\) and \\(\\lim_{x\\to1^+}f(x)=1.01\\). The sides differ, so \\(\\lim_{x\\to1}f(x)\\) does not exist, while \\(f(1)=1.01\\).",
          "(c) 不能。曲线在 \\(x=1\\) 两侧向上无限增大，视窗只是把 \\(y>10\\) 的部分裁掉；\\(\\lim_{x\\to1}g(x)=\\infty\\)，作为实数极限不存在（无界），而不是“断掉处有有限极限”。 · (c) No. The curve grows without bound on both sides of \\(x=1\\), and the window merely clips the part with \\(y>10\\); \\(\\lim_{x\\to1}g(x)=\\infty\\), so the limit does not exist as a real number (it is unbounded), rather than being finite where the graph is “cut off.”"
        ],
        "solution": "小跳跃被线宽隐藏；左右极限为 1 与 1.01，双侧极限不存在。\\(g\\) 在 1 附近无界，裁切不等于极限有限。 · The small jump is hidden by line width; the one-sided limits are 1 and 1.01, so the two-sided limit does not exist. \\(g\\) is unbounded near 1, and clipping does not make the limit finite.",
        "solutionLatex": "\\lim_{x\\to1^-}f(x)=1,\\quad \\lim_{x\\to1^+}f(x)=1.01,\\quad \\lim_{x\\to1}f(x)\\ \\text{DNE};\\qquad \\lim_{x\\to1}g(x)=\\infty"
      }
    ],
    "examTips": [
      "先读坐标轴与视窗，再动笔；标出 \\(x\\)、\\(y\\) 的刻度以及两轴是否等比例。 · Read the axes and window before writing; note the \\(x\\) and \\(y\\) tick marks and whether the axes use equal scales.",
      "任何“求极限”先写左右两个单侧极限，再判断是否相等。 · For any limit question, write both one-sided limits first, then decide whether they agree.",
      "空心点只回答 \\(f(a)\\)；不要把点的高度写进极限。 · An open dot answers only the \\(f(a)\\) question; do not put the dot's height into the limit.",
      "曲线在视窗边缘消失时，先缩小视野判断是否无界，而不是假定函数终止。 · When a curve disappears at the edge of the window, zoom out to decide whether it is unbounded instead of assuming the function ends.",
      "图像像实心带、锯齿或光滑波浪时，怀疑振荡或采样伪影，改用特殊序列或数值表。 · If the graph looks like a solid band, jagged sawtooth, or smooth wave, suspect oscillation or sampling artifacts and switch to special sequences or a table.",
      "小跳跃或小空洞比线宽还窄时，分别放大 \\(x\\)、\\(y\\) 并做数值表。 · When a small jump or hole is narrower than the line width, zoom \\(x\\) and \\(y\\) separately and make a table.",
      "论证题按“主张—证据—推理”写：证据要引用具体单侧极限或序列，不要只说“图上看得见”。 · In a justification, use claim-evidence-reasoning: cite specific one-sided limits or sequences rather than saying “the graph shows it.”",
      "\\(\\infty\\) 只描述无界趋势，不是实数极限值。 · \\(\\infty\\) describes an unbounded trend and is not a real limit value."
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
      },
      {
        "subject": "math",
        "chapterId": "calc-u1",
        "code": "1.10",
        "title": "探索间断类型",
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
      "上游：1.2 的极限记号与定义给出“任意接近”的精确含义；1.3 把定义转成图像读法。 · Upstream: the notation and definition in 1.2 give precise meaning to “arbitrarily close,” and 1.3 turns the definition into a graphical reading procedure.",
      "下游：1.4 用数值表估计极限，1.10–1.13 用单侧极限分类间断并判断连续性。 · Downstream: 1.4 estimates limits from tables, and 1.10–1.13 use one-sided limits to classify discontinuities and decide continuity.",
      "数学内部：图像估计要与代数化简、夹逼定理和定义互相校验；图像不能替代证明。 · Within mathematics, graphical estimates should be checked against algebra, the squeeze theorem, and the definition; a graph cannot replace a proof.",
      "跨学科：实验图像的分辨率与采样率同样会隐藏快速变化；报告读图结果时必须说明尺度与误差。 · Across disciplines, the resolution and sampling rate of experimental images can also hide rapid change; reporting a graphical reading requires stating the scale and uncertainty."
    ],
    "intuitionDetailed": "读图求极限的核心不是“看曲线在哪里”，而是“看 \\(x\\) 从两侧靠近 \\(a\\) 时 \\(y\\) 往哪里去”。先用手指沿曲线从左边滑向 \\(a\\)，记住纵坐标的趋势；再从右边滑一次。两次到达的高度相同，才写双侧极限；不同就写“不存在”，并说明是左右不等、无界还是振荡。尺度是第二个核心：图像是有限视窗里的有限采样，粗尺度会把空心点、0.01 的跳跃和快速振荡压进线宽，细尺度又可能把像素噪声放大成假细节。因此，任何“图上看起来”都要经过“换窗—缩放—数值表—解析式”四步核查。极限本身不随窗口改变，改变的只是我们看见它的能力。 · The core of reading a limit from a graph is not “where is the curve” but “where do the \\(y\\)-values go as \\(x\\) approaches \\(a\\) from both sides.” Slide a finger along the curve toward \\(a\\) from the left and note the trend of the vertical coordinate; repeat from the right. Only equal heights give a two-sided limit; otherwise write “does not exist” and state whether the sides differ, the function is unbounded, or it oscillates. Scale is the second core idea: a graph is a finite sampling in a finite window; a coarse scale presses holes, 0.01 jumps, and rapid oscillation into the line width, while a very fine scale can magnify pixel noise into fake detail. Every “the graph shows” should therefore pass through four checks: change the window, zoom, make a table, and inspect the formula. The limit itself does not change with the window; only our ability to see it does.",
    "development": [
      "确认视窗、坐标轴刻度与 \\(x\\)、\\(y\\) 比例；标出 \\(x=a\\) 的位置。 · Confirm the window, tick marks, and \\(x\\)/\\(y\\) scales; mark the location of \\(x=a\\).",
      "从左侧沿曲线取点，读出 \\(y\\) 的趋势；再从右侧重复。 · Read the trend of \\(y\\) while approaching from the left, then repeat from the right.",
      "比较两个单侧极限：都存在且相等才写双侧极限；否则说明是哪一类失败。 · Compare the one-sided limits: write a two-sided limit only if both exist and agree; otherwise state which type of failure occurred.",
      "检查尺度：若特征比线宽还窄、曲线在边缘消失或出现实心带，分别放大 \\(x\\)、\\(y\\) 或缩小视野。 · Check the scale: if a feature is narrower than the line width, the curve vanishes at an edge, or a solid band appears, zoom \\(x\\), zoom \\(y\\), or zoom out.",
      "用 \\(a\\) 两侧的数值表或解析式核对；把图像证据翻译成极限记号。 · Check with a table on both sides of \\(a\\) or with the formula; translate the graphical evidence into limit notation.",
      "最后用定义或特殊序列检验振荡情形，确认“看起来趋近”不是采样伪影。 · Finally, test oscillatory cases with the definition or special sequences to confirm that “looks like it approaches” is not a sampling artifact."
    ],
    "checks": [
      "图像在 \\(x=a\\) 处有一个空心点，但两侧曲线都趋于同一高度；极限是多少？\\(f(a)\\) 是多少？ · A graph has an open dot at \\(x=a\\), but both sides approach the same height. What is the limit? What is \\(f(a)\\)?",
      "把 \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) 画在 \\([-1,1]\\) 上像一条实心带，能否据此说极限存在？应补做什么检验？ · \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) plotted on \\([-1,1]\\) looks like a solid band. Can you conclude that the limit exists? What check is needed?",
      "为什么把 \\(y\\) 视窗从 \\([0,2]\\) 改成 \\([0.98,1.02]\\) 可能揭示一个此前看不见的跳跃？ · Why can changing the \\(y\\)-window from \\([0,2]\\) to \\([0.98,1.02]\\) reveal a jump that was previously invisible?",
      "若图像在 \\(x=a\\) 处被视窗上边缘截断，如何区分“函数无界”与“只是窗口太小”？ · If the graph is cut off by the top of the window at \\(x=a\\), how do you distinguish “unbounded” from “the window is too small”?",
      "两条曲线在图上看起来相交或相接，为什么不能直接断定极限存在或函数连续？ · Why can't you conclude that a limit exists or that a function is continuous just because two curves appear to meet on a graph?"
    ],
    "vocabulary": [
      {
        "termZh": "极限值",
        "termEn": "limit value",
        "defZh": "当 \\(x\\) 趋近 \\(a\\) 时函数所趋近的实数 \\(L\\)，与 \\(f(a)\\) 本身无关。",
        "defEn": "The real number \\(L\\) approached by a function as \\(x\\) approaches \\(a\\), independent of \\(f(a)\\) itself."
      },
      {
        "termZh": "单侧极限",
        "termEn": "one-sided limit",
        "defZh": "只从 \\(a\\) 的左侧或右侧趋近时得到的极限。",
        "defEn": "A limit obtained by approaching \\(a\\) from only the left or only the right."
      },
      {
        "termZh": "图像估计",
        "termEn": "graphical estimate",
        "defZh": "通过观察图像上函数值的趋势来估计极限，必须说明视窗与尺度。",
        "defEn": "Estimating a limit by observing the trend of function values on a graph, with the window and scale stated."
      },
      {
        "termZh": "尺度",
        "termEn": "scale",
        "defZh": "坐标轴单位长度与视窗范围的组合；尺度决定图像上哪些细节可见。",
        "defEn": "The combination of axis units and window range; scale determines which details are visible on a graph."
      },
      {
        "termZh": "视窗",
        "termEn": "viewing window",
        "defZh": "绘图时选取的 \\(x\\)、\\(y\\) 范围；窗口外的行为不会显示。",
        "defEn": "The chosen \\(x\\)- and \\(y\\)-ranges in a plot; behavior outside the window is not shown."
      },
      {
        "termZh": "振荡",
        "termEn": "oscillation",
        "defZh": "函数值在 \\(a\\) 附近反复上下，不趋近单一值，例如 \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) 在 0 附近。",
        "defEn": "Function values repeatedly swing up and down near \\(a\\) without approaching a single value, as with \\(\\sin\\left(\\dfrac{1}{x}\\right)\\) near 0."
      },
      {
        "termZh": "无界",
        "termEn": "unbounded",
        "defZh": "函数值在 \\(a\\) 附近可超过任意大的正数或低于任意小的负数，常伴竖直渐近线。",
        "defEn": "Function values exceed any positive bound or fall below any negative bound near \\(a\\), often with a vertical asymptote."
      },
      {
        "termZh": "采样",
        "termEn": "sampling",
        "defZh": "绘图工具只计算有限个 \\(x\\) 处的函数值并用线段连接；窄特征可能被漏掉。",
        "defEn": "A plotting tool evaluates finitely many \\(x\\)-values and connects them with segments; narrow features can be missed."
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
    "summary": "函数在区间上连续，指区间内每一点都连续；闭区间端点只要求单侧连续。多项式、有理、幂、指数、对数与三角函数都在各自定义域上连续，因此先求定义域、排除分母零点与对数/偶次根号的不合法输入，再写出最大连续区间。 · A function is continuous on an interval when it is continuous at every point of the interval; at closed endpoints only one-sided continuity is required. Polynomial, rational, power, exponential, logarithmic, and trigonometric functions are continuous on their domains, so find the domain first, exclude zeros of denominators and invalid logarithmic or even-root inputs, then state the maximal intervals.",
    "learningObjectives": [
      "能区分开区间、闭区间与半开区间上的连续，并在端点使用单侧极限。 · Distinguish continuity on open, closed, and half-open intervals and use one-sided limits at endpoints.",
      "能引用“多项式、有理、幂、指数、对数与三角函数在定义域上连续”判断连续区间。 · Use the theorem that polynomial, rational, power, exponential, logarithmic, and trigonometric functions are continuous on their domains.",
      "能求定义域并排除分母零点、对数参数非正、偶次根号被开方数为负以及 \\(\\tan x\\) 的渐近线，写出最大连续区间。 · Find the domain and exclude zeros of denominators, nonpositive logarithmic arguments, negative even-root radicands, and \\(\\tan x\\) asymptotes, then state the maximal intervals.",
      "能用单侧极限检验分段函数在分界点的连续性，并用主张—证据—推理反驳错误论断。 · Check continuity of a piecewise function at its boundary with one-sided limits and refute incorrect claims with claim-evidence-reasoning."
    ],
    "essentialKnowledge": [
      "LIM-2.B.1：函数在区间上连续，当且仅当它在区间内每一点连续。 · LIM-2.B.1: A function is continuous on an interval if (and only if) the function is continuous at each point in the interval.",
      "开区间 \\((a,b)\\) 上连续：对每个 \\(c\\in(a,b)\\)，都有 \\(\\lim_{x\\to c}f(x)=f(c)\\)。 · Continuity on an open interval \\((a,b)\\): for every \\(c\\in(a,b)\\), \\(\\lim_{x\\to c}f(x)=f(c)\\).",
      "闭区间 \\([a,b]\\) 上连续：在 \\((a,b)\\) 内每点连续，且 \\(\\lim_{x\\to a^+}f(x)=f(a)\\)、\\(\\lim_{x\\to b^-}f(x)=f(b)\\)。端点外侧没有定义，双侧极限不存在，只能用单侧极限。 · Continuity on a closed interval \\([a,b]\\): continuous at every interior point, with \\(\\lim_{x\\to a^+}f(x)=f(a)\\) and \\(\\lim_{x\\to b^-}f(x)=f(b)\\). Outside an endpoint the function is undefined, so only one-sided limits are available.",
      "半开区间类似：在 \\((a,b]\\) 上，\\(a\\) 处不要求连续，\\(b\\) 处要求左连续；在 \\([a,b)\\) 上，\\(a\\) 处要求右连续。 · Half-open intervals work analogously: on \\((a,b]\\), continuity is not required at \\(a\\) but left-continuity is required at \\(b\\); on \\([a,b)\\), right-continuity is required at \\(a\\).",
      "LIM-2.B.2：多项式、有理、幂、指数、对数与三角函数都在其定义域上连续。 · LIM-2.B.2: Polynomial, rational, power, exponential, logarithmic, and trigonometric functions are continuous on all points in their domains.",
      "多项式在 \\(\\mathbb{R}\\) 上连续；有理函数在分母不为零处连续，因此在每个分母零点之间的区间上连续。 · Polynomials are continuous on \\(\\mathbb{R}\\); rational functions are continuous where the denominator is nonzero, hence on each interval between consecutive denominator zeros.",
      "幂函数 \\(x^{r}\\) 的连续区间由定义域决定：整数幂在 \\(\\mathbb{R}\\) 上连续；\\(x^{\\frac{1}{n}}\\) 在 \\(n\\) 为偶数时于 \\([0,\\infty)\\) 上连续，\\(n\\) 为奇数时于 \\(\\mathbb{R}\\) 上连续；负指数排除 0；无理指数 \\(x^{r}\\)（\\(r\\) 为无理数）在 \\((0,\\infty)\\) 上定义且连续。 · The interval of continuity of a power function \\(x^{r}\\) is determined by its domain: integer powers are continuous on \\(\\mathbb{R}\\); \\(x^{\\frac{1}{n}}\\) is continuous on \\([0,\\infty)\\) for even \\(n\\) and on \\(\\mathbb{R}\\) for odd \\(n\\); negative exponents exclude 0; an irrational power \\(x^{r}\\) is defined and continuous on \\((0,\\infty)\\).",
      "指数函数 \\(a^{x}\\)（\\(a>0\\)，\\(a\\ne1\\)）在 \\(\\mathbb{R}\\) 上连续；对数函数 \\(\\log_a x\\) 在 \\((0,\\infty)\\) 上连续。 · Exponential functions \\(a^{x}\\) with \\(a>0\\) and \\(a\\ne1\\) are continuous on \\(\\mathbb{R}\\); logarithmic functions \\(\\log_a x\\) are continuous on \\((0,\\infty)\\).",
      "三角函数：\\(\\sin x\\)、\\(\\cos x\\) 在 \\(\\mathbb{R}\\) 上连续；\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\) 在 \\(\\cos x\\ne0\\) 处连续，即 \\(x\\ne\\dfrac{\\pi}{2}+k\\pi\\)，\\(k\\in\\mathbb{Z}\\)；\\(\\sec x\\)、\\(\\csc x\\)、\\(\\cot x\\) 也分别在各自定义域上连续（分母 \\(\\cos x\\) 或 \\(\\sin x\\) 不为零）。 · Trigonometric functions: \\(\\sin x\\) and \\(\\cos x\\) are continuous on \\(\\mathbb{R}\\); \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\) is continuous where \\(\\cos x\\ne0\\), that is, \\(x\\ne\\dfrac{\\pi}{2}+k\\pi\\) for integers \\(k\\); \\(\\sec x\\), \\(\\csc x\\), and \\(\\cot x\\) are also continuous on their domains, where the denominators \\(\\cos x\\) or \\(\\sin x\\) are nonzero.",
      "在定义域内由这些函数经过四则运算与复合得到的函数保持连续；分段函数在分界点必须另用单侧极限与函数值检验。 · Combinations and compositions of these functions are continuous on their domains; piecewise functions require a separate boundary check with one-sided limits and the function value.",
      "连续区间必须排除不在定义域内的点；不能把 \\((-\\infty,1)\\cup(1,\\infty)\\) 写成 \\((-\\infty,\\infty)\\)。 · Intervals of continuity must exclude points outside the domain; do not merge \\((-\\infty,1)\\cup(1,\\infty)\\) into \\((-\\infty,\\infty)\\)."
    ],
    "definition": "函数 \\(f\\) 在区间 \\(I\\) 上连续，是指对 \\(I\\) 内的每一点 \\(c\\)，都有 \\(\\lim_{x\\to c}f(x)=f(c)\\)。若 \\(I\\) 是开区间，每点都可以从两侧趋近；若 \\(I\\) 包含端点，端点处只要求单侧连续：在左端点 \\(a\\) 要求 \\(\\lim_{x\\to a^+}f(x)=f(a)\\)，在右端点 \\(b\\) 要求 \\(\\lim_{x\\to b^-}f(x)=f(b)\\)。多项式、有理、幂、指数、对数与三角函数都在其定义域上连续，因此求连续区间的标准做法是先求定义域、排除分母零点与不合法输入，再在每个连通区间上引用该结论。 · A function \\(f\\) is continuous on an interval \\(I\\) if \\(\\lim_{x\\to c}f(x)=f(c)\\) for every \\(c\\) in \\(I\\). If \\(I\\) is open, every point can be approached from both sides; if \\(I\\) includes endpoints, only one-sided continuity is required there: at the left endpoint \\(a\\), \\(\\lim_{x\\to a^+}f(x)=f(a)\\), and at the right endpoint \\(b\\), \\(\\lim_{x\\to b^-}f(x)=f(b)\\). Polynomial, rational, power, exponential, logarithmic, and trigonometric functions are continuous on their domains, so the standard procedure is to find the domain, exclude zeros of denominators and invalid inputs, then apply the theorem on each connected interval.",
    "intuition": "把“在区间上连续”想成“在这段路上不用抬笔”：区间内每个点都不能断。端点是路的尽头，只有一侧可走，所以只问单侧连续，不要求双侧极限。初等函数像“天生连续”的材料：多项式到处都连续；有理函数只在分母为零处断裂；对数只在正数上有定义；\\(\\tan x\\) 在 \\(\\cos x=0\\) 处有竖直渐近线。求连续区间时，先找“哪里不能去”（定义域），再把剩下的部分写成一个个区间；不要跨过被排除的点把区间粘起来。 · Think of continuity on an interval as drawing the graph without lifting the pen anywhere inside. An endpoint is the end of the road, so only one side exists and only one-sided continuity is required. Elementary functions are “born continuous” on their domains: polynomials everywhere; rational functions break only at denominator zeros; logarithms exist only for positive inputs; \\(\\tan x\\) has vertical asymptotes where \\(\\cos x=0\\). To find intervals of continuity, first find where the function cannot go (the domain), then write the remaining pieces as separate intervals; never glue intervals across an excluded point.",
    "formulas": [
      {
        "latex": "\\lim_{x\\to c}f(x)=f(c),\\quad c\\in(a,b)",
        "note": "开区间内每点连续。 · Continuity at every interior point."
      },
      {
        "latex": "\\lim_{x\\to a^+}f(x)=f(a),\\quad \\lim_{x\\to b^-}f(x)=f(b)",
        "note": "闭区间端点：只要求单侧连续。 · Closed-interval endpoints: only one-sided continuity is required."
      },
      {
        "latex": "\\dfrac{p(x)}{q(x)}\\ \\text{continuous where}\\ q(x)\\ne0",
        "note": "有理函数在分母非零处连续；分母零点把定义域分成若干区间。 · A rational function is continuous where its denominator is nonzero; denominator zeros split the domain into intervals."
      },
      {
        "latex": "\\log_a x\\ \\text{continuous on}\\ (0,\\infty);\\qquad a^{x}\\ \\text{continuous on}\\ \\mathbb{R}",
        "note": "对数函数与指数函数的连续区间。 · Intervals of continuity for logarithmic and exponential functions."
      }
    ],
    "derivationNotes": [
      {
        "from": "区间上逐点连续 · Pointwise continuity on an interval",
        "to": "区间连续 · Continuity on an interval",
        "note": "把区间内每一点都按 1.11 的三条件检验；只要有一个点不连续，整个区间上就不连续。 · Check the three conditions at every point as in 1.11; a single failure means the function is not continuous on the whole interval."
      },
      {
        "from": "端点 · Endpoints",
        "to": "单侧连续 · One-sided continuity",
        "note": "端点外侧没有定义，双侧极限不存在；因此用 \\(x\\to a^+\\) 或 \\(x\\to b^-\\) 代替。 · Outside an endpoint the function is undefined, so a two-sided limit does not exist; replace it with \\(x\\to a^+\\) or \\(x\\to b^-\\)."
      },
      {
        "from": "初等函数 · Elementary functions",
        "to": "定义域上连续 · Continuous on the domain",
        "note": "多项式由幂与加法构成；有理函数是多项式之商；指数、对数与三角函数的连续性在其定义域上已知。 · Polynomials are built from powers and sums; rational functions are quotients of polynomials; exponential, logarithmic, and trigonometric continuity is known on their domains."
      },
      {
        "from": "分母、对数与根号条件 · Denominator, logarithm, and root conditions",
        "to": "最大连续区间 · Maximal intervals",
        "note": "解 \\(q(x)\\ne0\\)、对数参数 \\(>0\\)、偶次根号被开方数 \\(\\ge0\\)、\\(\\cos x\\ne0\\)，把定义域写成区间的并。 · Solve \\(q(x)\\ne0\\), positive logarithmic arguments, nonnegative even-root radicands, and \\(\\cos x\\ne0\\), then write the domain as a union of intervals."
      },
      {
        "from": "分段函数 · Piecewise function",
        "to": "分界点检验 · Boundary check",
        "note": "分别算左极限、右极限与函数值；三者相等才连续。 · Compute the left limit, the right limit, and the function value; continuity requires all three to agree."
      }
    ],
    "conditions": [
      "区间必须包含在定义域内；连续性是相对于定义域讨论的。 · The interval must lie within the domain; continuity is discussed relative to the domain.",
      "闭区间端点要求单侧连续；端点不在定义域内时，不能写包含该端点的闭区间。 · Closed endpoints require one-sided continuity; if an endpoint is not in the domain, do not use a closed interval that includes it.",
      "有理函数排除分母零点；对数排除参数 \\(\\le0\\)；偶次根号要求被开方数 \\(\\ge0\\)；\\(\\tan x\\) 排除 \\(\\cos x=0\\)。 · Rational functions exclude denominator zeros; logarithms exclude arguments \\(\\le0\\); even roots require a nonnegative radicand; \\(\\tan x\\) excludes \\(\\cos x=0\\).",
      "分段函数在分界点必须同时检查左极限、右极限与函数值，不能只看两段表达式是否相同。 · For a piecewise function, check the left limit, right limit, and function value at the boundary; do not merely compare the two expressions.",
      "连续区间的并集要按连通区间分别写出，不要跨过不在定义域内的点。 · Write a union as separate connected intervals; never cross a point outside the domain.",
      "初等函数在定义域上连续，但定义域可能不是单个区间；例如 \\(\\dfrac{1}{x^{2}-1}\\) 的定义域是三个区间。 · An elementary function is continuous on its domain, but the domain may not be a single interval; for example, the domain of \\(\\dfrac{1}{x^{2}-1}\\) is three intervals."
    ],
    "keyPoints": [
      "区间连续 = 区间内每点连续，不是“大部分点连续”。 · Continuity on an interval means continuity at every point, not at most points.",
      "闭区间端点用单侧极限：左端点右连续，右端点左连续。 · Closed endpoints use one-sided limits: right-continuity at the left endpoint and left-continuity at the right endpoint.",
      "六类初等函数在各自定义域上连续；先求定义域。 · The six families of elementary functions are continuous on their domains; find the domain first.",
      "分母零点、对数参数非正、偶次根号被开方数为负、\\(\\tan x\\) 的 \\(\\cos x=0\\) 都是“断点候选”。 · Denominator zeros, nonpositive logarithm arguments, negative even-root radicands, and \\(\\cos x=0\\) for \\(\\tan x\\) are all candidates for breaks.",
      "有理函数在相邻分母零点之间的每个开区间上连续。 · A rational function is continuous on each open interval between consecutive denominator zeros.",
      "分段函数在分界点：左极限 = 右极限 = 函数值，三者缺一不可。 · At a piecewise boundary, left limit = right limit = function value; all three must agree.",
      "不要把被排除的点包进区间；用并集时每个区间单独写。 · Do not include an excluded point in an interval; when using a union, write each interval separately.",
      "AP 答题要引用定理名称或理由，并写出完整的最大区间。 · AP answers should cite the theorem or reason and state the complete maximal intervals."
    ],
    "misconceptions": [
      "“有理函数是初等函数，所以在整个 \\(\\mathbb{R}\\) 上连续。”错误；分母零点不在定义域内。 · “A rational function is elementary, so it is continuous on all of \\(\\mathbb{R}\\).” False; denominator zeros are not in the domain.",
      "“\\(f\\) 在 \\((-\\infty,1)\\) 和 \\((1,\\infty)\\) 上连续，所以在 \\(\\mathbb{R}\\) 上连续。”错误；\\(x=1\\) 处不连续。 · “\\(f\\) is continuous on \\((-\\infty,1)\\) and \\((1,\\infty)\\), so it is continuous on \\(\\mathbb{R}\\).” False; it is not continuous at \\(x=1\\).",
      "“\\(f(1)\\) 有定义就连续。”错误；还要极限存在且等于函数值。 · “\\(f(1)\\) is defined, so \\(f\\) is continuous.” False; the limit must also exist and equal the function value.",
      "“\\(\\sqrt{x}\\) 在 0 处双侧连续。”错误；它只在 \\([0,\\infty)\\) 上连续，在 0 处是右连续。 · “\\(\\sqrt{x}\\) is continuous from both sides at 0.” False; it is continuous on \\([0,\\infty)\\) and only right-continuous at 0.",
      "“\\(\\tan x\\) 在 \\(\\mathbb{R}\\) 上连续。”错误；\\(\\cos x=0\\) 处无定义且有竖直渐近线。 · “\\(\\tan x\\) is continuous on \\(\\mathbb{R}\\).” False; it is undefined where \\(\\cos x=0\\) and has vertical asymptotes there.",
      "“\\(\\ln x\\) 在 \\([0,\\infty)\\) 上连续。”错误；定义域是 \\((0,\\infty)\\)。 · “\\(\\ln x\\) is continuous on \\([0,\\infty)\\).” False; its domain is \\((0,\\infty)\\).",
      "“分段函数两段都是多项式，所以分界点自动连续。”错误；必须检查分界点的单侧极限与函数值。 · “Both pieces of a piecewise function are polynomials, so it is automatically continuous at the boundary.” False; the one-sided limits and the function value must be checked.",
      "“连续区间可以跨过可去间断点。”错误；即使极限存在，该点不在定义域或函数值不匹配时仍不连续。 · “An interval of continuity may cross a removable discontinuity.” False; even if the limit exists, the function is still discontinuous there if the point is missing from the domain or the value does not match."
    ],
    "examples": [
      {
        "title": "例 1 · 有理函数的连续区间 · Example 1: Intervals of continuity for a rational function",
        "prompt": "求 \\(f(x)=\\dfrac{x^{2}-9}{x^{2}-4}\\) 的定义域与连续区间。 · Find the domain and intervals of continuity of \\(f(x)=\\dfrac{x^{2}-9}{x^{2}-4}\\).",
        "steps": [
          "分母 \\(x^{2}-4=(x-2)(x+2)\\)，所以 \\(x\\ne\\pm2\\)；定义域为 \\((-\\infty,-2)\\cup(-2,2)\\cup(2,\\infty)\\)。 · The denominator factors as \\(x^{2}-4=(x-2)(x+2)\\), so \\(x\\ne\\pm2\\); the domain is \\((-\\infty,-2)\\cup(-2,2)\\cup(2,\\infty)\\).",
          "有理函数在分母非零处连续，因此 \\(f\\) 在上述每个区间上连续。 · A rational function is continuous where its denominator is nonzero, so \\(f\\) is continuous on each of these intervals.",
          "在任何包含 \\(-2\\) 或 \\(2\\) 的区间上，\\(f\\) 不连续，因为它在这些点无定义；例如不能在 \\([-2,2]\\) 上说 \\(f\\) 连续。 · On any interval containing \\(-2\\) or \\(2\\), \\(f\\) is not continuous, because it is undefined at those points; for example, \\(f\\) is not continuous on \\([-2,2]\\)."
        ],
        "solution": "连续区间为 \\((-\\infty,-2)\\)、\\((-2,2)\\)、\\((2,\\infty)\\)。 · The intervals of continuity are \\((-\\infty,-2)\\), \\((-2,2)\\), and \\((2,\\infty)\\).",
        "solutionLatex": "(-\\infty,-2),\\quad (-2,2),\\quad (2,\\infty)"
      },
      {
        "title": "例 2 · 端点与半开区间 · Example 2: Endpoints and a half-open interval",
        "prompt": "\\(f(x)=\\dfrac{\\sqrt{x-3}}{x-5}\\)。求定义域，并说明 \\(f\\) 在哪些区间上连续；特别检查 \\(x=3\\) 与 \\(x=5\\)。 · \\(f(x)=\\dfrac{\\sqrt{x-3}}{x-5}\\). Find the domain and the intervals on which \\(f\\) is continuous; check \\(x=3\\) and \\(x=5\\) in particular.",
        "steps": [
          "根号要求 \\(x-3\\ge0\\)，分母要求 \\(x\\ne5\\)，所以定义域为 \\([3,5)\\cup(5,\\infty)\\)。 · The square root requires \\(x-3\\ge0\\) and the denominator requires \\(x\\ne5\\), so the domain is \\([3,5)\\cup(5,\\infty)\\).",
          "在 \\((3,5)\\) 与 \\((5,\\infty)\\) 内，\\(\\sqrt{x-3}\\) 与 \\(x-5\\) 都连续且分母非零，故 \\(f\\) 连续。 · On \\((3,5)\\) and \\((5,\\infty)\\), both \\(\\sqrt{x-3}\\) and \\(x-5\\) are continuous and the denominator is nonzero, so \\(f\\) is continuous.",
          "在 \\(x=3\\)：\\(f(3)=0\\)，且 \\(\\lim_{x\\to3^+}\\dfrac{\\sqrt{x-3}}{x-5}=0\\)，所以 \\(f\\) 在 3 处右连续；因此 \\(f\\) 在 \\([3,5)\\) 上连续。 · At \\(x=3\\): \\(f(3)=0\\) and \\(\\lim_{x\\to3^+}\\dfrac{\\sqrt{x-3}}{x-5}=0\\), so \\(f\\) is right-continuous at 3; hence \\(f\\) is continuous on \\([3,5)\\).",
          "在 \\(x=5\\)：\\(f(5)\\) 未定义，且分子趋于 \\(\\sqrt2\\ne0\\)、分母趋于 0，函数无界；因此不能把 \\(x=5\\) 并入连续区间。 · At \\(x=5\\): \\(f(5)\\) is undefined, the numerator tends to \\(\\sqrt2\\ne0\\), and the denominator tends to 0, so the function is unbounded; therefore \\(x=5\\) cannot be included in an interval of continuity."
        ],
        "solution": "连续区间为 \\([3,5)\\) 与 \\((5,\\infty)\\)。 · The intervals of continuity are \\([3,5)\\) and \\((5,\\infty)\\).",
        "solutionLatex": "[3,5),\\qquad (5,\\infty)"
      },
      {
        "title": "例 3 · 三角函数与周期 · Example 3: A trigonometric function and periodicity",
        "prompt": "说明 \\(f(x)=\\tan x\\) 的连续区间，并判断它能否在 \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\) 与 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\) 上连续。 · Describe the intervals of continuity of \\(f(x)=\\tan x\\) and decide whether it is continuous on \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\) and on \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\).",
        "steps": [
          "\\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\)，在 \\(\\cos x\\ne0\\) 处连续；\\(\\cos x=0\\) 当 \\(x=\\dfrac{\\pi}{2}+k\\pi\\)，\\(k\\in\\mathbb{Z}\\)。 · \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\) is continuous where \\(\\cos x\\ne0\\); \\(\\cos x=0\\) when \\(x=\\dfrac{\\pi}{2}+k\\pi\\) for integers \\(k\\).",
          "因此连续区间为 \\(\\left(-\\dfrac{\\pi}{2}+k\\pi,\\dfrac{\\pi}{2}+k\\pi\\right)\\)，\\(k\\in\\mathbb{Z}\\)。 · Hence the intervals of continuity are \\(\\left(-\\dfrac{\\pi}{2}+k\\pi,\\dfrac{\\pi}{2}+k\\pi\\right)\\) for integers \\(k\\).",
          "在 \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\) 上，\\(\\tan x\\) 有定义且连续，端点单侧连续，所以连续。 · On \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\), \\(\\tan x\\) is defined and continuous, with one-sided continuity at the endpoints, so it is continuous there.",
          "在 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\) 上，端点 \\(\\pm\\dfrac{\\pi}{2}\\) 不在定义域内，因此不能在该闭区间上连续；它只在开区间 \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\) 上连续。 · On \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\), the endpoints \\(\\pm\\dfrac{\\pi}{2}\\) are not in the domain, so \\(\\tan x\\) cannot be continuous on that closed interval; it is continuous only on the open interval \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\)."
        ],
        "solution": "连续区间为 \\(\\left(-\\dfrac{\\pi}{2}+k\\pi,\\dfrac{\\pi}{2}+k\\pi\\right)\\)；在 \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\) 上连续，在 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\) 上不连续（端点无定义）。 · The intervals are \\(\\left(-\\dfrac{\\pi}{2}+k\\pi,\\dfrac{\\pi}{2}+k\\pi\\right)\\); \\(\\tan x\\) is continuous on \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\) but not on \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\) because the endpoints are undefined.",
        "solutionLatex": "\\left(-\\dfrac{\\pi}{2}+k\\pi,\\ \\dfrac{\\pi}{2}+k\\pi\\right),\\quad k\\in\\mathbb{Z}"
      },
      {
        "title": "例 4 · 分段函数与错误论断 · Example 4: A piecewise function and a flawed claim",
        "prompt": "设 \\(f(x)=\\begin{cases}x^{2},&x<1,\\\\ 2x-1,&x\\ge1.\\end{cases}\\) (a) 判断 \\(f\\) 在 \\(x=1\\) 处是否连续；(b) 写出 \\(f\\) 的连续区间；(c) 学生说 \\(g(x)=\\dfrac{1}{x^{2}-1}\\) 是“有理函数，所以在 \\([-2,2]\\) 上连续”。评价该说法并给出 \\(g\\) 的连续区间。 · Let \\(f(x)=\\begin{cases}x^{2},&x<1,\\\\ 2x-1,&x\\ge1.\\end{cases}\\) (a) Decide whether \\(f\\) is continuous at \\(x=1\\). (b) State the intervals of continuity of \\(f\\). (c) A student says \\(g(x)=\\dfrac{1}{x^{2}-1}\\) is “a rational function, so it is continuous on \\([-2,2]\\).” Evaluate the claim and give the intervals of continuity of \\(g\\).",
        "steps": [
          "(a) \\(f(1)=2(1)-1=1\\)；\\(\\lim_{x\\to1^-}f(x)=\\lim_{x\\to1^-}x^{2}=1\\)；\\(\\lim_{x\\to1^+}f(x)=\\lim_{x\\to1^+}(2x-1)=1\\)。三者相等，所以 \\(f\\) 在 1 处连续。 · (a) \\(f(1)=2(1)-1=1\\); \\(\\lim_{x\\to1^-}f(x)=\\lim_{x\\to1^-}x^{2}=1\\); \\(\\lim_{x\\to1^+}f(x)=\\lim_{x\\to1^+}(2x-1)=1\\). All three agree, so \\(f\\) is continuous at 1.",
          "两段分别是多项式，在各自开区间上连续；分界点 1 也已连续，所以 \\(f\\) 在 \\(\\mathbb{R}\\) 上连续。 · Each piece is a polynomial and is continuous on its open interval; the boundary point 1 is also continuous, so \\(f\\) is continuous on \\(\\mathbb{R}\\).",
          "(c) 说法错误。\\(g\\) 在 \\(x=\\pm1\\) 处分母为零、无定义，而 \\(\\pm1\\in[-2,2]\\)；因此 \\(g\\) 在 \\([-2,2]\\) 上不连续。其连续区间为 \\([-2,-1)\\)、\\((-1,1)\\)、\\((1,2]\\)。 · (c) The claim is false. \\(g\\) has denominator zero and is undefined at \\(x=\\pm1\\), and \\(\\pm1\\in[-2,2]\\); hence \\(g\\) is not continuous on \\([-2,2]\\). Its intervals of continuity are \\([-2,-1)\\), \\((-1,1)\\), and \\((1,2]\\)."
        ],
        "solution": "(a) 连续；(b) \\((-\\infty,\\infty)\\)；(c) 说法错误，\\(g\\) 的连续区间为 \\([-2,-1)\\)、\\((-1,1)\\)、\\((1,2]\\)。 · (a) Continuous; (b) \\((-\\infty,\\infty)\\); (c) the claim is false, and the intervals for \\(g\\) are \\([-2,-1)\\), \\((-1,1)\\), and \\((1,2]\\).",
        "solutionLatex": "\\lim_{x\\to1^-}f(x)=\\lim_{x\\to1^+}f(x)=f(1)=1;\\qquad g:\\ [-2,-1),\\ (-1,1),\\ (1,2]"
      }
    ],
    "examTips": [
      "先求定义域，再谈连续；没有定义的点不能包进区间。 · Find the domain before discussing continuity; points where the function is undefined cannot be included in an interval.",
      "有理函数：分解分母，在每个零点之间的区间上写连续。 · For a rational function, factor the denominator and write continuity on each interval between its zeros.",
      "对数要求参数 \\(>0\\)；偶次根号要求被开方数 \\(\\ge0\\)；\\(\\tan x\\) 要求 \\(\\cos x\\ne0\\)。 · Logarithms require a positive argument; even roots require a nonnegative radicand; \\(\\tan x\\) requires \\(\\cos x\\ne0\\).",
      "闭区间端点检查单侧极限；端点不在定义域就不要写闭区间。 · Check one-sided limits at closed endpoints; if an endpoint is not in the domain, do not use a closed interval there.",
      "分段函数在分界点算三个量：左极限、右极限、函数值。 · For a piecewise function, compute three quantities at the boundary: the left limit, the right limit, and the function value.",
      "引用“多项式、有理、指数、对数、三角函数在其定义域上连续”作为理由，不要只说“图像连续”。 · Cite the theorem that polynomial, rational, exponential, logarithmic, and trigonometric functions are continuous on their domains; do not merely say “the graph is continuous.”",
      "区间用并集时每个区间单独写，不要跨过被排除的点。 · When using a union, write each interval separately and never cross an excluded point.",
      "AP 常问“求 \\(f\\) 连续的所有区间”，答案要写成最大连通区间。 · AP often asks for all intervals on which \\(f\\) is continuous; write maximal connected intervals."
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
      "上游：1.11 定义一点连续；1.12 把逐点连续扩展到区间与端点。 · Upstream: 1.11 defines continuity at a point, and 1.12 extends pointwise continuity to intervals and endpoints.",
      "下游：1.13 处理可去间断；1.14–1.15 讨论竖直与水平渐近线；1.16 的介值定理要求闭区间连续。 · Downstream: 1.13 handles removable discontinuities, 1.14–1.15 discuss vertical and horizontal asymptotes, and the Intermediate Value Theorem in 1.16 requires continuity on a closed interval.",
      "数学内部：连续区间由定义域决定；初等函数的连续性把许多“求极限”简化为“代入”。 · Within mathematics, intervals of continuity are determined by the domain; continuity of elementary functions reduces many limit problems to direct substitution.",
      "跨学科：物理量在相变、碰撞或边界处可能不连续；建模时要说明连续区间与失效点。 · Across disciplines, physical quantities may be discontinuous at phase changes, collisions, or boundaries; a model should state its intervals of continuity and points of failure."
    ],
    "intuitionDetailed": "“区间连续”不是一句笼统的“图像没断”，而是逐点兑现的承诺：区间内随便挑一个点 \\(c\\)，都必须满足 \\(f(c)\\) 有定义、\\(\\lim_{x\\to c}f(x)\\) 存在、并且二者相等。开区间内每点两侧都有邻居，所以用双侧极限；闭区间端点只有一侧有邻居，所以只问单侧。初等函数的连续性是一张“免检清单”：多项式到处免检；有理函数除分母零点外免检；指数函数全实数免检；对数只在正数上免检；\\(\\sin\\)、\\(\\cos\\) 全实数免检；\\(\\tan\\) 在 \\(\\cos x=0\\) 处免检失效。做题时先找“不能去”的点，把定义域切成区间，再逐段引用清单；最后别忘了分段函数的分界点要单独验收。 · “Continuous on an interval” is not a vague “the graph has no break”; it is a promise honored point by point: for every \\(c\\) in the interval, \\(f(c)\\) must be defined, \\(\\lim_{x\\to c}f(x)\\) must exist, and the two must agree. Inside an open interval every point has neighbors on both sides, so two-sided limits apply; at a closed endpoint there are neighbors on only one side, so only one-sided continuity is required. Continuity of elementary functions is a checklist: polynomials pass everywhere; rational functions pass except at denominator zeros; exponentials pass on all real numbers; logarithms pass only on positive inputs; \\(\\sin\\) and \\(\\cos\\) pass everywhere; \\(\\tan\\) fails where \\(\\cos x=0\\). To solve a problem, first find the points the function cannot visit, cut the domain into intervals, and cite the checklist on each piece; finally, inspect piecewise boundaries separately.",
    "development": [
      "求定义域：分母非零、对数参数为正、偶次根号被开方数非负、\\(\\tan x\\) 的余弦非零。 · Find the domain: nonzero denominators, positive logarithm arguments, nonnegative even-root radicands, and nonzero cosine for \\(\\tan x\\).",
      "把定义域写成若干连通区间的并。 · Write the domain as a union of connected intervals.",
      "在每个连通区间内引用初等函数连续性定理。 · Cite the elementary-function continuity theorem on each connected interval.",
      "检查端点：属于定义域且为闭端点时，用单侧极限验证。 · Check endpoints: when an endpoint belongs to the domain and is included, verify it with a one-sided limit.",
      "分段函数在分界点分别算左极限、右极限、函数值。 · For a piecewise function, compute the left limit, right limit, and function value at each boundary.",
      "用图像或数值表复核，并写出最大连续区间。 · Check with a graph or table, then state the maximal intervals of continuity."
    ],
    "checks": [
      "\\(f(x)=\\dfrac{1}{x-3}\\) 在 \\([2,4]\\) 上连续吗？为什么？ · Is \\(f(x)=\\dfrac{1}{x-3}\\) continuous on \\([2,4]\\)? Why or why not?",
      "\\(\\sqrt{x-2}\\) 在 \\(x=2\\) 处是双侧连续、单侧连续，还是不连续？ · Is \\(\\sqrt{x-2}\\) continuous from both sides, continuous from one side, or discontinuous at \\(x=2\\)?",
      "\\(\\tan x\\) 在 \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\) 与 \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\) 上有何区别？ · What is the difference between \\(\\tan x\\) on \\(\\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\) and on \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\)?",
      "分段函数在分界点连续需要哪三个量相等？ · Which three quantities must agree for a piecewise function to be continuous at its boundary?",
      "为什么 \\(\\ln(x-1)\\) 的连续区间是 \\((1,\\infty)\\) 而不是 \\([1,\\infty)\\)？ · Why is the interval of continuity of \\(\\ln(x-1)\\) equal to \\((1,\\infty)\\) rather than \\([1,\\infty)\\)?"
    ],
    "vocabulary": [
      {
        "termZh": "区间连续",
        "termEn": "continuity on an interval",
        "defZh": "在区间内每一点都连续；端点按单侧连续处理。",
        "defEn": "Continuity at every point of an interval, with one-sided continuity at included endpoints."
      },
      {
        "termZh": "开区间",
        "termEn": "open interval",
        "defZh": "不包含端点的区间 \\((a,b)\\)，每点都可以从两侧趋近。",
        "defEn": "The interval \\((a,b)\\) excluding its endpoints, where every point can be approached from both sides."
      },
      {
        "termZh": "闭区间",
        "termEn": "closed interval",
        "defZh": "包含端点的区间 \\([a,b]\\)；端点只要求单侧连续。",
        "defEn": "The interval \\([a,b]\\) including its endpoints, where only one-sided continuity is required at the endpoints."
      },
      {
        "termZh": "单侧连续",
        "termEn": "one-sided continuity",
        "defZh": "\\(\\lim_{x\\to a^+}f(x)=f(a)\\) 或 \\(\\lim_{x\\to b^-}f(x)=f(b)\\)。",
        "defEn": "\\(\\lim_{x\\to a^+}f(x)=f(a)\\) or \\(\\lim_{x\\to b^-}f(x)=f(b)\\)."
      },
      {
        "termZh": "初等函数",
        "termEn": "elementary function",
        "defZh": "多项式、有理、幂、指数、对数、三角及其复合。",
        "defEn": "Polynomial, rational, power, exponential, logarithmic, and trigonometric functions and their compositions."
      },
      {
        "termZh": "有理函数",
        "termEn": "rational function",
        "defZh": "两个多项式之商 \\(\\dfrac{p(x)}{q(x)}\\)，在 \\(q(x)\\ne0\\) 处连续。",
        "defEn": "A quotient of two polynomials, \\(\\dfrac{p(x)}{q(x)}\\), continuous where \\(q(x)\\ne0\\)."
      },
      {
        "termZh": "定义域",
        "termEn": "domain",
        "defZh": "使函数有定义的所有输入 \\(x\\) 的集合；连续区间必须是定义域的子集。",
        "defEn": "The set of all inputs \\(x\\) for which the function is defined; an interval of continuity must be a subset of the domain."
      },
      {
        "termZh": "竖直渐近线",
        "termEn": "vertical asymptote",
        "defZh": "函数值趋于 \\(\\pm\\infty\\) 的竖直线，常见于分母零点或 \\(\\tan x\\) 的 \\(\\cos x=0\\) 处。",
        "defEn": "A vertical line where function values tend to \\(\\pm\\infty\\), often at a denominator zero or where \\(\\cos x=0\\) for \\(\\tan x\\)."
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
