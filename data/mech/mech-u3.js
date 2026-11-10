export const UNIT = {
  "id": "mech-u3",
  "code": "3",
  "titleZh": "功、能量与功率",
  "titleEn": "Work, Energy, and Power",
  "subject": "mech",
  "layer": "ap"
};
export const TOPICS = {
  "3.1": {
    "id": "mech/mech-u3/3.1",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.1",
    "titleZh": "动能定理",
    "titleEn": "Work–Energy Theorem",
    "layer": "ap",
    "summary": "动能定理 · Work–Energy Theorem",
    "learningObjectives": [
      "能陈述「动能定理」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Work–Energy Theorem：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "动能定理（Work–Energy Theorem）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「动能定理」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "W_{\\mathrm{net}}=\\Delta K",
        "note": "动能定理。"
      },
      {
        "latex": "K=\\dfrac{1}{2}mv^{2}",
        "note": "平动动能。"
      },
      {
        "latex": "W=\\int\\vec F\\cdot\\mathrm{d}\\vec r",
        "note": "变力做功。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「动能定理」的工作方程或机制链。"
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
      "W_net 为合外力做功；动能按惯性系计算",
      "变力功用积分；恒力功 F·Δr",
      "定理对质点成立；刚体需考虑转动动能"
    ],
    "keyPoints": [
      "掌握 3.1「动能定理」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「动能定理」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「动能定理」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "W_{\\mathrm{net}}=\\Delta K"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「动能定理」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「动能定理」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「动能定理」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「动能定理」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「动能定理」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「动能定理」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.2": {
    "id": "mech/mech-u3/3.2",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.2",
    "titleZh": "力与势能",
    "titleEn": "Forces and Potential Energy",
    "layer": "ap",
    "summary": "保守力做功只与始末位置有关，因此可定义势能 \\(U\\)，满足 \\(\\Delta U=-W_{\\mathrm{cons}}\\)；一维中力是势能曲线的负斜率 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)。多物体系统的总势能是各相互作用对势能之和：\\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)，每对只计一次。选定系统后先列能量清单：只含一个对象（视为质点）的系统只有动能；系统包含多个相互作用对象或可逆形变时，才可能有势能。 · A conservative force does work that depends only on the endpoints, so a potential energy \\(U\\) exists with \\(\\Delta U=-W_{\\mathrm{cons}}\\); in one dimension the force is the negative slope of the potential-energy curve, \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\). For a system of more than two objects, the total potential energy is the sum of the potential energy of each interacting pair, \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\), with each pair counted once. After selecting a system, list its energies first: a system composed of only a single object (treated as a point object) has only kinetic energy, while a system with multiple interacting objects or a reversible deformation may also have potential energy.",
    "learningObjectives": [
      "能区分保守力与非保守力，说明为什么势能只对保守力定义，并且属于相互作用的系统（或物体对）而不是单个物体。 · Distinguish conservative from nonconservative forces, explain why potential energy is defined only for conservative forces, and recognize that it belongs to the interacting system (or pair), not to a single object.",
      "能用 \\(\\Delta U=-W_{\\mathrm{cons}}\\) 和 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) 在势能、力与功之间转换，并由 \\(U(x)\\) 的斜率判断力的方向。 · Convert among potential energy, work, and force using \\(\\Delta U=-W_{\\mathrm{cons}}\\) and \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\), and use the slope of \\(U(x)\\) to determine the force direction.",
      "能计算近地重力势能 \\(U_g=mgh\\) 与理想弹簧势能 \\(U_s=\\dfrac{1}{2}kx^{2}\\)，并在同一问题中一致地选择势能零点。 · Compute near-Earth gravitational potential energy \\(U_g=mgh\\) and ideal-spring potential energy \\(U_s=\\dfrac{1}{2}kx^{2}\\), choosing one consistent zero of potential energy per problem.",
      "能对三个及以上物体的系统写出 \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)，列出全部无序对，避免把同一对算两次。 · For a system of three or more objects, write \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\), list every unordered pair, and avoid counting the same pair twice.",
      "能用总势能分析稳定与不稳定平衡、转折点，并用 \\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\) 守恒解决 AP 风格的能量问题。 · Use total potential energy to analyze stable and unstable equilibrium and turning points, and solve AP-style energy problems with conservation of \\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\).",
      "能列出选定系统所具有的能量：只含一个对象（视为质点）的系统只能有动能；包含多个相互作用对象的系统可以有动能与势能。 · List the energies present in a selected system: a system composed of only a single object (treated as a point object) can only have kinetic energy, while a system containing multiple interacting objects can have both kinetic and potential energy.",
      "能说明系统边界的选择如何把同一相互作用在“系统势能”与“外力做功”之间重新记账，并用能量守恒或功能原理得到同一结果。 · Explain how the choice of system boundary re-books the same interaction as either system potential energy or external work, and use energy conservation or the work–energy principle to obtain the same result."
    ],
    "essentialKnowledge": [
      "保守力做功与路径无关，沿任意闭合路径做功为零；因此可以定义只依赖位置的势能函数。 · The work done by a conservative force is path-independent and zero around any closed path, so a position-only potential-energy function can be defined.",
      "势能变化等于保守力做功的负值：\\(\\Delta U=-W_{\\mathrm{cons}}\\)；只有势能差有物理意义，势能零点可任选但同题中必须一致。 · The change in potential energy is the negative of conservative work, \\(\\Delta U=-W_{\\mathrm{cons}}\\); only differences are physical, and the zero may be chosen freely but must stay consistent within a problem.",
      "势能属于相互作用的系统：\\(U_g=mgh\\) 属于物体—地球系统，\\(U_s=\\dfrac{1}{2}kx^{2}\\) 属于物体—弹簧系统，不能说某个物体“单独拥有”势能。 · Potential energy belongs to the interacting system: \\(U_g=mgh\\) belongs to the object–Earth system and \\(U_s=\\dfrac{1}{2}kx^{2}\\) to the object–spring system; a single object does not “own” potential energy by itself.",
      "系统能量清单由系统边界决定：动能 \\(K\\) 描述系统整体运动，势能 \\(U\\) 只记录系统内保守相互作用对，内能 \\(E_{\\mathrm{int}}\\) 记录系统内部微观运动与形变；三者可以同时存在。 · The energy inventory of a system is set by its boundary: kinetic energy \\(K\\) describes the bulk motion of the system, potential energy \\(U\\) records only conservative interacting pairs inside the system, and internal energy \\(E_{\\mathrm{int}}\\) records microscopic motion and deformation inside the system; all three may be present.",
      "CED 3.4.A.1：只含一个对象（视为质点）的系统只能有动能；势能至少需要两个相互作用的对象，因此单对象系统没有势能项，也没有可单独归属的内能项。 · CED 3.4.A.1: a system composed of only a single object (treated as a point object) can only have kinetic energy; potential energy requires at least two interacting objects, so a single-object system has no potential-energy term and no separately bookkept internal-energy term.",
      "系统选择改变记账：把地球排除在系统外，重力做外功，单物块系统只有 \\(K\\)；把地球纳入系统，重力成为内力，系统可有 \\(U_g\\) 与 \\(K\\)。两种选择对下落快慢等物理预测完全一致。 · System selection changes the bookkeeping: with Earth outside the system, gravity does external work and the single-block system has only \\(K\\); with Earth included, gravity is internal and the system can have both \\(U_g\\) and \\(K\\). Both choices give identical physical predictions such as the falling speed.",
      "摩擦等非保守过程把机械能转化为内能：若系统包含两个接触表面，可写 \\(\\Delta E_{\\mathrm{int}}=f_kd\\)；若系统只含一个质点，摩擦是外力做负功，写 \\(\\Delta K=W_f<0\\)。 · Nonconservative processes such as friction convert mechanical energy into internal energy: if the system contains both contacting surfaces, write \\(\\Delta E_{\\mathrm{int}}=f_kd\\); if the system is only a single point object, friction is an external force doing negative work, so \\(\\Delta K=W_f<0\\).",
      "机械能只是系统总能量的一部分：\\(E_{\\mathrm{mech}}=K+U\\)，\\(E_{\\mathrm{sys}}=E_{\\mathrm{mech}}+E_{\\mathrm{int}}\\)；只有内能变化可忽略时，才把机械能当作全部能量。 · Mechanical energy is only part of a system's total energy: \\(E_{\\mathrm{mech}}=K+U\\) and \\(E_{\\mathrm{sys}}=E_{\\mathrm{mech}}+E_{\\mathrm{int}}\\); only when changes in internal energy are negligible may mechanical energy be treated as the whole energy.",
      "一维保守力是势能曲线的负斜率：\\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)；力总指向势能降低的方向，斜率越陡力越大。 · In one dimension the conservative force is the negative slope of the potential-energy curve, \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\); the force points toward decreasing potential energy, and a steeper slope means a larger force.",
      "反过来，由力可以积分恢复势能：\\(U(x)=-\\int F_x\\,\\mathrm{d}x+U_0\\)；\\(U_0\\) 由势能零点决定。 · Conversely, the potential follows from integrating the force, \\(U(x)=-\\int F_x\\,\\mathrm{d}x+U_0\\), with \\(U_0\\) set by the chosen zero.",
      "多物体系统的总势能按每一对相互作用求和：\\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)；\\(N\\) 个物体共有 \\(\\dfrac{N(N-1)}{2}\\) 个无序对。 · The total potential energy of a system with more than two objects is the sum over each interacting pair, \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\); \\(N\\) objects have \\(\\dfrac{N(N-1)}{2}\\) unordered pairs.",
      "引力势能按对写为 \\(U_{ij}=-G\\dfrac{m_im_j}{r_{ij}}\\)（取无穷远为零），所以多体引力势能是若干负项之和；近地多物体系统则用 \\(U_g=g\\sum_i m_ih_i\\)（共同零高度）。 · Gravitational pair energy is \\(U_{ij}=-G\\dfrac{m_im_j}{r_{ij}}\\) with zero at infinity, so a multi-body gravitational potential energy is a sum of negative terms; near Earth, use \\(U_g=g\\sum_i m_ih_i\\) with a common reference height.",
      "弹性势能按每个弹簧（每条连接对）写为 \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\)，多个弹簧的势能直接相加；同一对物体之间的弹簧只计一次。 · Elastic potential energy is written for each spring (each connected pair) as \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\), and the energies of multiple springs add directly; a spring between the same two objects is counted once.",
      "求和时不能把 \\(U_{ij}\\) 与 \\(U_{ji}\\) 都加上，也不能因为“不相邻”就漏掉一对；只要两物体间存在相互作用，就要计入对应的对势能。 · Do not add both \\(U_{ij}\\) and \\(U_{ji}\\), and do not omit a pair merely because the objects are not adjacent; whenever two objects interact, their pair potential energy must be included."
    ],
    "definition": "保守力（conservative force）是做功只依赖始末位置、与路径无关的力；因此可以定义势能 \\(U\\)，使 \\(\\Delta U=-W_{\\mathrm{cons}}\\)，一维情形下 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)。势能不是单个物体的属性，而是属于相互作用的系统：近地重力势能 \\(U_g=mgh\\) 属于物体—地球系统，弹簧势能 \\(U_s=\\dfrac{1}{2}kx^{2}\\) 属于物体—弹簧系统。若系统含两个以上物体，总势能是每一对相互作用势能之和：\\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)；每一对只计一次，\\(N\\) 个物体共有 \\(\\dfrac{N(N-1)}{2}\\) 对。就系统能量而言，只含一个对象（视为质点）的系统只能有动能；只有包含两个或更多相互作用对象（或可逆形变）的系统才可能有势能。 · A conservative force does work that depends only on the initial and final positions, not on the path, so a potential energy \\(U\\) can be defined with \\(\\Delta U=-W_{\\mathrm{cons}}\\); in one dimension \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\). Potential energy is not a property of a single object but of an interacting system: near-Earth gravitational potential energy \\(U_g=mgh\\) belongs to the object–Earth system, and spring potential energy \\(U_s=\\dfrac{1}{2}kx^{2}\\) belongs to the object–spring system. If a system contains more than two objects, its total potential energy is the sum over each interacting pair, \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\); each pair is counted once, and \\(N\\) objects have \\(\\dfrac{N(N-1)}{2}\\) pairs. As for the energies of a system, a system consisting of only a single object (modeled as a point object) can only have kinetic energy; only a system containing two or more interacting objects (or a reversible deformation) can have potential energy.",
    "intuition": "把势能想成“储存在构型里的能量”：举高物体或压缩弹簧时，外力做功把能量存进系统；松手后保守力做功又把能量还回来。多物体系统像一张“成对账单”：每两个有相互作用的物体之间有一条账目，总势能就是把所有账目加起来，同一笔账不能记两次。选系统就是选“谁的能量算进来”：只选一个质点，只有动能；把地球或弹簧拉进来，才有势能。 · Think of potential energy as energy stored in a configuration: lifting an object or compressing a spring stores energy through external work, and conservative forces return that energy when released. A multi-object system is like a ledger of pairwise accounts: every interacting pair has one entry, and the total potential energy is the sum of all entries, with no entry counted twice. Choosing a system is choosing whose energy counts: a single point object has only kinetic energy, and Earth or a spring must be included before potential energy appears.",
    "formulas": [
      {
        "latex": "\\Delta U=-W_{\\mathrm{cons}}=-\\int_{x_i}^{x_f}F_x\\,\\mathrm{d}x",
        "note": "势能变化等于保守力做功的负值；与路径无关。 · The change in potential energy is the negative of conservative work; it is path-independent."
      },
      {
        "latex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}",
        "note": "一维保守力是势能曲线的负斜率；力指向势能降低的方向。 · In one dimension the conservative force is the negative slope of the potential-energy curve; it points toward lower potential energy."
      },
      {
        "latex": "U(x)=-\\int F_x\\,\\mathrm{d}x+U_0",
        "note": "由力恢复势能；\\(U_0\\) 由势能零点决定。 · Recover potential energy from force; \\(U_0\\) is set by the chosen zero."
      },
      {
        "latex": "U_g=mgh,\\quad U_s=\\dfrac{1}{2}kx^{2}",
        "note": "近地重力势能与理想弹簧势能；各自属于相应的系统。 · Near-Earth gravitational and ideal-spring potential energy; each belongs to its interacting system."
      },
      {
        "latex": "U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}",
        "note": "多物体系统的总势能：对每一对相互作用求和，每对只计一次。 · Total potential energy of a multi-object system: sum over each interacting pair, counting each pair once."
      },
      {
        "latex": "U_{ij}=-G\\dfrac{m_im_j}{r_{ij}}",
        "note": "一对质点的引力势能，取无穷远为零；多体时按对相加。 · Gravitational potential energy of one pair of point masses with zero at infinity; for several masses, add over pairs."
      },
      {
        "latex": "N_{\\mathrm{pairs}}=\\dfrac{N(N-1)}{2}",
        "note": "\\(N\\) 个物体的无序对数；用于检查是否漏项或重复计数。 · Number of unordered pairs for \\(N\\) objects; use it to check for missing or double-counted terms."
      },
      {
        "latex": "F_{i,x}=-\\dfrac{\\partial U_{\\mathrm{total}}}{\\partial x_i}",
        "note": "多物体系统中第 \\(i\\) 个物体受的力：固定其他物体坐标，对总势能求偏导。 · Force on object \\(i\\) in a multi-object system: hold the other coordinates fixed and differentiate the total potential with respect to \\(x_i\\)."
      },
      {
        "latex": "E_{\\mathrm{sys}}=K+U+E_{\\mathrm{int}}",
        "note": "系统总能量清单；机械能只含前两项。 · Total energy inventory of a system; mechanical energy contains only the first two terms."
      },
      {
        "latex": "E_{\\mathrm{mech}}=K+U",
        "note": "机械能；只有系统内保守力做功时守恒。 · Mechanical energy; conserved when only internal conservative forces do work."
      },
      {
        "latex": "K=\\dfrac{1}{2}mv^{2},\\quad K_{\\mathrm{rot}}=\\dfrac{1}{2}I\\omega^{2}",
        "note": "单个对象的平动动能与转动动能；质点模型只保留平动项。 · Translational and rotational kinetic energy of a single object; the point-object model keeps only the translational term."
      },
      {
        "latex": "\\Delta E_{\\mathrm{mech}}=W_{\\mathrm{ext}}+W_{\\mathrm{int,nc}}",
        "note": "机械能变化等于外力做功加内部非保守力做功；摩擦热对应后一项。 · Change in mechanical energy equals external work plus internal nonconservative work; frictional heating corresponds to the latter."
      },
      {
        "latex": "\\Delta E_{\\mathrm{int}}=f_kd",
        "note": "两个接触表面都在系统内时，摩擦使内能增加 \\(f_kd\\)。 · When both contacting surfaces are inside the system, friction increases internal energy by \\(f_kd\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "保守力与路径无关 · Conservative force and path independence",
        "to": "势能定义 · Definition of potential energy",
        "note": "从 \\(A\\) 到 \\(B\\) 的任何路径上保守力做功都相同，于是定义 \\(U_B-U_A=-W_{\\mathrm{cons},A\\to B}\\)。 · The work by a conservative force from \\(A\\) to \\(B\\) is the same on every path, so define \\(U_B-U_A=-W_{\\mathrm{cons},A\\to B}\\)."
      },
      {
        "from": "势能定义 · Definition of potential energy",
        "to": "力—势能关系 · Force–potential relation",
        "note": "对微小位移 \\(\\mathrm{d}x\\)，\\(\\mathrm{d}U=-F_x\\,\\mathrm{d}x\\)，因此 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)。 · For a small displacement \\(\\mathrm{d}x\\), \\(\\mathrm{d}U=-F_x\\,\\mathrm{d}x\\), hence \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)."
      },
      {
        "from": "一对相互作用 · One interacting pair",
        "to": "多体求和 · Multi-body sum",
        "note": "总保守内力做功是各对做功之和：\\(W_{\\mathrm{cons,total}}=\\sum_{i<j}W_{ij}\\)；每对 \\(W_{ij}=-\\Delta U_{ij}\\)，所以 \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)。 · The total conservative internal work is the sum of the pair works, \\(W_{\\mathrm{cons,total}}=\\sum_{i<j}W_{ij}\\); with \\(W_{ij}=-\\Delta U_{ij}\\) for each pair, \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)."
      },
      {
        "from": "无序对计数 · Counting unordered pairs",
        "to": "对数公式 · Pair-count formula",
        "note": "第一个物体可与其余 \\(N-1\\) 个配对，但每对会被两端各数一次，所以除以 2，得 \\(\\dfrac{N(N-1)}{2}\\)。 · The first object can pair with the other \\(N-1\\) objects, but each pair is counted from both ends, so divide by 2 to obtain \\(\\dfrac{N(N-1)}{2}\\)."
      },
      {
        "from": "具体势能模型 · Concrete potential models",
        "to": "对势能项 · Pair-energy terms",
        "note": "引力对：\\(U_{ij}=-G\\dfrac{m_im_j}{r_{ij}}\\)；弹簧对：\\(U_{ij}=\\dfrac{1}{2}k_{ij}(\\Delta x_{ij})^{2}\\)，其中 \\(\\Delta x_{ij}\\) 是该弹簧的伸长或压缩量。 · Gravitational pair: \\(U_{ij}=-G\\dfrac{m_im_j}{r_{ij}}\\); spring pair: \\(U_{ij}=\\dfrac{1}{2}k_{ij}(\\Delta x_{ij})^{2}\\), where \\(\\Delta x_{ij}\\) is that spring's extension or compression."
      },
      {
        "from": "总势能 · Total potential energy",
        "to": "单个物体受力 · Force on one object",
        "note": "固定其他物体坐标，对 \\(U_{\\mathrm{total}}\\) 关于 \\(x_i\\) 求偏导，得 \\(F_{i,x}=-\\dfrac{\\partial U_{\\mathrm{total}}}{\\partial x_i}\\)；成对势能给出的两力等大反向，体现牛顿第三定律。 · Holding the other coordinates fixed and differentiating \\(U_{\\mathrm{total}}\\) with respect to \\(x_i\\) gives \\(F_{i,x}=-\\dfrac{\\partial U_{\\mathrm{total}}}{\\partial x_i}\\); a pair potential gives equal and opposite forces, consistent with Newton's third law."
      },
      {
        "from": "系统边界 · System boundary",
        "to": "能量清单 · Energy inventory",
        "note": "只选一个质点：没有内部相互作用对，\\(U=0\\)，所以 \\(E_{\\mathrm{sys}}=K\\)。 · With only one point object there is no internal interacting pair, so \\(U=0\\) and \\(E_{\\mathrm{sys}}=K\\)."
      },
      {
        "from": "单对象系统 · Single-object system",
        "to": "多对象系统 · Multi-object system",
        "note": "把地球或弹簧纳入系统后，原来作为外力的重力/弹力变为内力，出现 \\(U_g\\) 或 \\(U_s\\)；外功项相应减少。 · After including Earth or the spring in the system, gravity or the spring force changes from an external force into an internal force, so \\(U_g\\) or \\(U_s\\) appears and the external-work term decreases accordingly."
      },
      {
        "from": "机械能 · Mechanical energy",
        "to": "内能 · Internal energy",
        "note": "摩擦使两个表面温度升高：\\(f_kd\\) 从机械能流向内能；若两个表面都在系统内，\\(\\Delta E_{\\mathrm{int}}=f_kd\\)。 · Friction warms both surfaces: \\(f_kd\\) flows from mechanical energy into internal energy; if both surfaces are inside the system, \\(\\Delta E_{\\mathrm{int}}=f_kd\\)."
      }
    ],
    "conditions": [
      "只有保守力才能定义势能；摩擦力、空气阻力等非保守力没有只依赖位置的势能函数。 · Potential energy is defined only for conservative forces; friction, air drag, and other nonconservative forces have no position-only potential-energy function.",
      "系统边界要包含每一对相互作用中的两个物体；与系统外物体的相互作用应作为外力做功处理，不能直接算作系统内部势能。 · The system boundary must include both objects of every pair whose interaction is counted; an interaction with an object outside the system is treated as external work, not as internal potential energy.",
      "势能零点可任选，但同一问题中必须一致；引力势能常取无穷远为零，近地问题常取地面或最低点为零。 · The zero of potential energy is arbitrary but must be consistent within a problem; gravitational potential energy often uses zero at infinity, while near-Earth problems often use the ground or the lowest point.",
      "\\(U_g=mgh\\) 要求 \\(h\\ll R_{\\oplus}\\) 且 \\(g\\) 近似恒定；高度很大时应使用 \\(U=-\\dfrac{GMm}{r}\\)。 · \\(U_g=mgh\\) requires \\(h\\ll R_{\\oplus}\\) and approximately constant \\(g\\); at large heights use \\(U=-\\dfrac{GMm}{r}\\).",
      "弹簧势能要求弹簧理想、形变在弹性限度内；每个弹簧对应一对连接物体，多个弹簧的势能直接相加。 · Spring potential energy requires an ideal spring within its elastic limit; each spring corresponds to one connected pair, and energies of multiple springs add directly.",
      "总势能是标量代数和，必须带符号相加；引力对势能通常为负，弹性势能非负。 · Total potential energy is a scalar algebraic sum, so signs must be kept; gravitational pair energies are usually negative and elastic potential energies are nonnegative.",
      "对连续体或球对称质量分布，应积分或使用壳层定理；质点公式 \\(-G\\dfrac{m_im_j}{r_{ij}}\\) 适用于球外或质点。 · For continuous or spherically symmetric mass distributions, integrate or use the shell theorem; the point-mass formula \\(-G\\dfrac{m_im_j}{r_{ij}}\\) applies outside spheres or for point masses.",
      "单对象系统只有动能，适用于把对象视为质点（无内部结构、无转动）的模型；有转动的刚体还可有 \\(K_{\\mathrm{rot}}\\)。 · A single-object system has only kinetic energy in the point-object model (no internal structure and no rotation); a rotating rigid body may also have \\(K_{\\mathrm{rot}}\\).",
      "要写势能，系统边界必须包含相互作用的一对（多体时包含每一对）；系统外物体的作用只能作为外力做功。 · To write potential energy, the system boundary must include the interacting pair (every pair in a multi-object system); the influence of an outside object can only be treated as external work.",
      "摩擦热属于包含两个接触表面的系统；只选一个物体为系统时，摩擦是外力做负功，不能同时再写内能项。 · Frictional heating belongs to a system that includes both contacting surfaces; when only one object is the system, friction is an external force doing negative work, and an internal-energy term must not be added at the same time."
    ],
    "keyPoints": [
      "势能储存在系统（或物体对）的构型中，不属于单个物体；先选系统，再写势能项。 · Potential energy is stored in the configuration of a system (or pair), not in a single object; choose the system before writing potential-energy terms.",
      "\\(\\Delta U=-W_{\\mathrm{cons}}\\)：保守力做正功时势能减少，做负功时势能增加。 · \\(\\Delta U=-W_{\\mathrm{cons}}\\): potential energy decreases when a conservative force does positive work and increases when it does negative work.",
      "\\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)：斜率越陡，力越大；负号表示力指向势能降低的方向。 · \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\): a steeper slope means a larger force, and the minus sign means the force points toward lower potential energy.",
      "多物体系统：\\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)；\\(N\\) 个物体有 \\(\\dfrac{N(N-1)}{2}\\) 对，每对只计一次。 · Multi-object system: \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\); \\(N\\) objects have \\(\\dfrac{N(N-1)}{2}\\) pairs, each counted once.",
      "引力对势能取无穷远为零时为负值；近地多物体系统用 \\(U_g=g\\sum_i m_ih_i\\)，共同零高度。 · Gravitational pair energy is negative with zero at infinity; for a near-Earth multi-object system use \\(U_g=g\\sum_i m_ih_i\\) with a common reference height.",
      "每个弹簧贡献 \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\)，多个弹簧直接相加；压缩与伸长平方后都为正。 · Each spring contributes \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\), and multiple springs add directly; compression and extension both give positive energy after squaring.",
      "只有内部保守力做功时 \\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\) 守恒；外力或非保守内力做功会改变这个总和。 · \\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\) is conserved when only internal conservative forces do work; external or nonconservative internal work changes the total.",
      "先数系统里的对象与相互作用，再列能量：单对象质点系统只有 \\(K\\)；有保守相互作用对才写 \\(U\\)。 · Count the objects and interactions in the system before listing energies: a single point-object system has only \\(K\\), and \\(U\\) is written only when a conservative interacting pair is included.",
      "系统选择只是记账方式：地球、弹簧或桌面在系统内还是系统外，决定该项写成 \\(U\\) 还是 \\(W_{\\mathrm{ext}}\\)；不能两边都算。 · System selection is bookkeeping: whether Earth, a spring, or a table is inside or outside the system decides whether its effect is written as \\(U\\) or \\(W_{\\mathrm{ext}}\\), never both.",
      "摩擦生热：包含两个表面时记 \\(\\Delta E_{\\mathrm{int}}=f_kd\\)；只含单物块时记 \\(\\Delta K=W_f<0\\)。 · Frictional heating: with both surfaces included, book \\(\\Delta E_{\\mathrm{int}}=f_kd\\); with only the block included, book \\(\\Delta K=W_f<0\\)."
    ],
    "misconceptions": [
      "认为势能属于单个物体；实际上 \\(U_g\\) 属于物体—地球系统，\\(U_s\\) 属于物体—弹簧系统。 · Thinking potential energy belongs to a single object; \\(U_g\\) belongs to the object–Earth system and \\(U_s\\) to the object–spring system.",
      "认为摩擦力或空气阻力也有势能；非保守力做功依赖路径，不能定义只依赖位置的势能。 · Thinking friction or air drag has potential energy; nonconservative work is path-dependent, so no position-only potential can be defined.",
      "由 \\(U(x)\\) 求力时漏掉负号，导致力的方向正好相反。 · Dropping the minus sign when finding force from \\(U(x)\\), which reverses the force direction.",
      "认为平衡位置处势能一定为零；平衡只要求 \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\)，势能值可以任意。 · Thinking potential energy must be zero at equilibrium; equilibrium only requires \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\), and the potential value is arbitrary.",
      "把稳定平衡与不稳定平衡弄反：势能谷底稳定，峰顶不稳定。 · Reversing stable and unstable equilibrium: a potential-energy valley is stable and a hilltop is unstable.",
      "重复计算同一对相互作用，例如把 \\(U_{12}\\) 与 \\(U_{21}\\) 都加上，或把三个物体的六种有序配对都当成独立对。 · Double-counting the same interaction, such as adding both \\(U_{12}\\) and \\(U_{21}\\), or treating all six ordered pairs of three objects as independent pairs.",
      "把对势能当成矢量相加，或在引力势能求和中丢掉负号。 · Adding pair potential energies as vectors, or dropping the negative signs in a gravitational potential-energy sum.",
      "把系统外物体的相互作用直接算进系统总势能，却没有把该物体纳入系统。 · Counting an interaction with an outside object as internal potential energy without including that object in the system.",
      "认为单个物体本身“拥有”势能；势能是相互作用系统（或物体对）的属性，单对象质点系统只有动能。 · Thinking a single object itself “owns” potential energy; potential energy belongs to an interacting system (or pair), and a single point-object system has only kinetic energy.",
      "换系统边界时把原来的外功项和新的势能项同时保留，造成重复记账。 · Keeping both the original external-work term and the new potential-energy term after changing the system boundary, double-counting energy.",
      "认为摩擦让能量“消失”了；能量转化为内能，仍属于包含两个表面的更大系统。 · Thinking friction makes energy “disappear”; the energy becomes internal energy and remains in the larger system that includes both surfaces.",
      "把“单对象系统只能有动能”绝对化为“任何单个物体永远没有内能”；真实物体有内部结构，若要追踪其内能，应把它的组成部分纳入系统。 · Turning “a single-object system can only have kinetic energy” into “any single object can never have internal energy”; a real object has internal structure, and to track its internal energy, include its parts in the system."
    ],
    "examples": [
      {
        "title": "例 1 · 三质点的引力势能求和 · Example 1: Summing gravitational potential energy for three masses",
        "prompt": "三个质点沿 \\(x\\) 轴固定：\\(m_1=2.0\\,\\mathrm{kg}\\) 在 \\(x=0\\)，\\(m_2=3.0\\,\\mathrm{kg}\\) 在 \\(x=0.50\\,\\mathrm{m}\\)，\\(m_3=1.0\\,\\mathrm{kg}\\) 在 \\(x=1.20\\,\\mathrm{m}\\)。取无穷远为零，求三质点系统的总引力势能（\\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\)）。 · Three point masses are fixed on the \\(x\\)-axis: \\(m_1=2.0\\,\\mathrm{kg}\\) at \\(x=0\\), \\(m_2=3.0\\,\\mathrm{kg}\\) at \\(x=0.50\\,\\mathrm{m}\\), and \\(m_3=1.0\\,\\mathrm{kg}\\) at \\(x=1.20\\,\\mathrm{m}\\). With zero at infinity, find the total gravitational potential energy of the three-mass system (\\(G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\)).",
        "steps": [
          "三个无序对是 12、13、23；距离分别为 \\(r_{12}=0.50\\,\\mathrm{m}\\)、\\(r_{13}=1.20\\,\\mathrm{m}\\)、\\(r_{23}=0.70\\,\\mathrm{m}\\)。 · The three unordered pairs are 12, 13, and 23, with separations \\(r_{12}=0.50\\,\\mathrm{m}\\), \\(r_{13}=1.20\\,\\mathrm{m}\\), and \\(r_{23}=0.70\\,\\mathrm{m}\\).",
          "\\(U_{12}=-G\\dfrac{(2.0)(3.0)}{0.50}=-12G=-8.00\\times10^{-10}\\,\\mathrm{J}\\)。 · \\(U_{12}=-G\\dfrac{(2.0)(3.0)}{0.50}=-12G=-8.00\\times10^{-10}\\,\\mathrm{J}\\).",
          "\\(U_{13}=-G\\dfrac{(2.0)(1.0)}{1.20}=-1.667G=-1.11\\times10^{-10}\\,\\mathrm{J}\\)。 · \\(U_{13}=-G\\dfrac{(2.0)(1.0)}{1.20}=-1.667G=-1.11\\times10^{-10}\\,\\mathrm{J}\\).",
          "\\(U_{23}=-G\\dfrac{(3.0)(1.0)}{0.70}=-4.286G=-2.86\\times10^{-10}\\,\\mathrm{J}\\)。 · \\(U_{23}=-G\\dfrac{(3.0)(1.0)}{0.70}=-4.286G=-2.86\\times10^{-10}\\,\\mathrm{J}\\).",
          "求和：\\(U_{\\mathrm{total}}=-(12+1.667+4.286)G=-17.95G=-1.20\\times10^{-9}\\,\\mathrm{J}\\)。 · Sum: \\(U_{\\mathrm{total}}=-(12+1.667+4.286)G=-17.95G=-1.20\\times10^{-9}\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(U_{\\mathrm{total}}\\approx-1.2\\times10^{-9}\\,\\mathrm{J}\\)，共 3 对；若把 \\(U_{12}\\) 与 \\(U_{21}\\) 都加，会错误地得到两倍大小。 · \\(U_{\\mathrm{total}}\\approx-1.2\\times10^{-9}\\,\\mathrm{J}\\) with 3 pairs; adding both \\(U_{12}\\) and \\(U_{21}\\) would incorrectly double the result.",
        "solutionLatex": "U_{\\mathrm{total}}=-(12+1.667+4.286)G=-1.20\\times10^{-9}\\,\\mathrm{J}"
      },
      {
        "title": "例 2 · 双弹簧三物块的弹性势能 · Example 2: Elastic potential energy of three blocks and two springs",
        "prompt": "光滑水平面上三个物块由两个理想弹簧连接：1–2 之间 \\(k_{12}=200\\,\\mathrm{N/m}\\)，当前伸长 \\(0.10\\,\\mathrm{m}\\)；2–3 之间 \\(k_{23}=300\\,\\mathrm{N/m}\\)，当前压缩 \\(0.20\\,\\mathrm{m}\\)。求系统的总弹性势能；若从静止释放且最终两弹簧都恢复原长，忽略摩擦，求此时三物块的总动能。 · Three blocks on a frictionless horizontal table are connected by two ideal springs: between 1 and 2, \\(k_{12}=200\\,\\mathrm{N/m}\\) with current extension \\(0.10\\,\\mathrm{m}\\); between 2 and 3, \\(k_{23}=300\\,\\mathrm{N/m}\\) with current compression \\(0.20\\,\\mathrm{m}\\). Find the total elastic potential energy of the system, and the total kinetic energy of the three blocks when both springs have returned to natural length after release from rest, neglecting friction.",
        "steps": [
          "每个弹簧是一对连接物体，各贡献一项：\\(U_{12}=\\dfrac{1}{2}k_{12}x_{12}^{2}=\\dfrac{1}{2}(200)(0.10)^{2}=1.0\\,\\mathrm{J}\\)。 · Each spring is one connected pair and contributes one term: \\(U_{12}=\\dfrac{1}{2}k_{12}x_{12}^{2}=\\dfrac{1}{2}(200)(0.10)^{2}=1.0\\,\\mathrm{J}\\).",
          "\\(U_{23}=\\dfrac{1}{2}k_{23}x_{23}^{2}=\\dfrac{1}{2}(300)(0.20)^{2}=6.0\\,\\mathrm{J}\\)；压缩量平方后仍为正。 · \\(U_{23}=\\dfrac{1}{2}k_{23}x_{23}^{2}=\\dfrac{1}{2}(300)(0.20)^{2}=6.0\\,\\mathrm{J}\\); squaring the compression makes it positive.",
          "\\(U_{\\mathrm{total}}=U_{12}+U_{23}=1.0+6.0=7.0\\,\\mathrm{J}\\)；两个弹簧对应两项，不能把同一弹簧从两端重复计入。 · \\(U_{\\mathrm{total}}=U_{12}+U_{23}=1.0+6.0=7.0\\,\\mathrm{J}\\); two springs give two terms, and the same spring must not be counted from both ends.",
          "只有内部保守力做功，机械能守恒：初态 \\(K=0\\)、\\(U=7.0\\,\\mathrm{J}\\)；末态 \\(U=0\\)，所以 \\(K_{\\mathrm{total}}=7.0\\,\\mathrm{J}\\)。 · Only internal conservative forces do work, so mechanical energy is conserved: initially \\(K=0\\) and \\(U=7.0\\,\\mathrm{J}\\); finally \\(U=0\\), so \\(K_{\\mathrm{total}}=7.0\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(U_{\\mathrm{total}}=7.0\\,\\mathrm{J}\\)；两弹簧恢复原长时 \\(K_{\\mathrm{total}}=7.0\\,\\mathrm{J}\\)。 · \\(U_{\\mathrm{total}}=7.0\\,\\mathrm{J}\\); when both springs return to natural length, \\(K_{\\mathrm{total}}=7.0\\,\\mathrm{J}\\).",
        "solutionLatex": "U_{\\mathrm{total}}=\\dfrac{1}{2}(200)(0.10)^{2}+\\dfrac{1}{2}(300)(0.20)^{2}=7.0\\,\\mathrm{J},\\qquad K_{\\mathrm{total}}=7.0\\,\\mathrm{J}"
      },
      {
        "title": "例 3 · 近地多物体重力势能 · Example 3: Near-Earth gravitational potential energy for several objects",
        "prompt": "三个物体在地面以上高度分别为 \\(h_1=0\\)、\\(h_2=1.0\\,\\mathrm{m}\\)、\\(h_3=2.0\\,\\mathrm{m}\\)，质量分别为 \\(m_1=1.0\\,\\mathrm{kg}\\)、\\(m_2=2.0\\,\\mathrm{kg}\\)、\\(m_3=3.0\\,\\mathrm{kg}\\)。以地面为零势能面，求三物体—地球系统的总重力势能，并说明这为什么是三个“物体—地球”对势能之和。 · Three objects are at heights \\(h_1=0\\), \\(h_2=1.0\\,\\mathrm{m}\\), and \\(h_3=2.0\\,\\mathrm{m}\\) above the ground, with masses \\(m_1=1.0\\,\\mathrm{kg}\\), \\(m_2=2.0\\,\\mathrm{kg}\\), and \\(m_3=3.0\\,\\mathrm{kg}\\). Taking the ground as zero, find the total gravitational potential energy of the three-object–Earth system and explain why it is the sum of three object–Earth pair energies.",
        "steps": [
          "每个物体与地球构成一对，近地近似下该对势能为 \\(m_igh_i\\)。 · Each object forms a pair with Earth, and in the near-Earth approximation that pair energy is \\(m_igh_i\\).",
          "\\(U_g=g(m_1h_1+m_2h_2+m_3h_3)=9.8(0+2.0+6.0)=78.4\\,\\mathrm{J}\\)。 · \\(U_g=g(m_1h_1+m_2h_2+m_3h_3)=9.8(0+2.0+6.0)=78.4\\,\\mathrm{J}\\).",
          "地球是三个物体共同的对端，所以“三对求和”化简为 \\(g\\sum_i m_ih_i\\)；这与多体公式 \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\) 一致。 · Earth is the common partner in all three pairs, so the “sum over three pairs” reduces to \\(g\\sum_i m_ih_i\\), consistent with the multi-body formula \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\).",
          "物体之间的相互引力势能约为 \\(10^{-10}\\,\\mathrm{J}\\) 量级，通常远小于 \\(78.4\\,\\mathrm{J}\\)；若题目明确要求，再按 \\(-G\\dfrac{m_im_j}{r_{ij}}\\) 把三对全部加上。 · The mutual gravitational potential energy among the small objects is of order \\(10^{-10}\\,\\mathrm{J}\\), usually negligible compared with \\(78.4\\,\\mathrm{J}\\); if the problem explicitly asks, add all three pairs using \\(-G\\dfrac{m_im_j}{r_{ij}}\\)."
        ],
        "solution": "\\(U_g=78.4\\,\\mathrm{J}\\)，等于三个物体—地球对势能之和；物体间的引力项通常可忽略。 · \\(U_g=78.4\\,\\mathrm{J}\\), the sum of three object–Earth pair energies; the mutual gravitational terms among the objects are usually negligible.",
        "solutionLatex": "U_g=g\\sum_i m_ih_i=9.8(0+2.0+6.0)=78.4\\,\\mathrm{J}"
      },
      {
        "title": "例 4 · 三质点等边三角形：主张—证据—推理 · Example 4: Equilateral triangle of three masses: claim–evidence–reasoning",
        "prompt": "三个质量均为 \\(m\\) 的质点位于边长为 \\(L\\) 的等边三角形顶点。学生说：“总引力势能只需把相邻两对相加，即 \\(U_{12}+U_{23}\\)，因为质点 1 和 3 不相邻。”请评价该主张，并写出正确的总势能。 · Three particles of mass \\(m\\) sit at the vertices of an equilateral triangle of side \\(L\\). A student claims: “The total gravitational potential energy is just \\(U_{12}+U_{23}\\), because masses 1 and 3 are not adjacent.” Evaluate this claim and write the correct total potential energy.",
        "steps": [
          "主张不完整：引力相互作用不要求“相邻”，任意两质点之间都存在引力势能。 · The claim is incomplete: gravitational interaction does not require adjacency; every pair of point masses has gravitational potential energy.",
          "证据：三个物体有 \\(\\dfrac{3(2)}{2}=3\\) 个无序对，即 12、13、23；等边三角形中三对距离都为 \\(L\\)。 · Evidence: three objects have \\(\\dfrac{3(2)}{2}=3\\) unordered pairs, namely 12, 13, and 23; in an equilateral triangle all three separations equal \\(L\\).",
          "每对贡献 \\(-G\\dfrac{m^{2}}{L}\\)，所以 \\(U_{\\mathrm{total}}=-3G\\dfrac{m^{2}}{L}\\)。 · Each pair contributes \\(-G\\dfrac{m^{2}}{L}\\), so \\(U_{\\mathrm{total}}=-3G\\dfrac{m^{2}}{L}\\).",
          "推理：只加两对会漏掉 13，得到 \\(-2G\\dfrac{m^{2}}{L}\\)；若把两个方向都算，则会得到 \\(-6G\\dfrac{m^{2}}{L}\\)，正好是正确值的两倍。 · Reasoning: adding only two pairs omits 13 and gives \\(-2G\\dfrac{m^{2}}{L}\\); counting both directions gives \\(-6G\\dfrac{m^{2}}{L}\\), exactly twice the correct value."
        ],
        "solution": "学生漏掉了 1–3 对；正确总势能为 \\(-3G\\dfrac{m^{2}}{L}\\)，三对都要计入且每对只计一次。 · The student omitted the 1–3 pair; the correct total is \\(-3G\\dfrac{m^{2}}{L}\\), with all three pairs included and each counted once.",
        "solutionLatex": "U_{\\mathrm{total}}=-G\\dfrac{m^{2}}{L}-G\\dfrac{m^{2}}{L}-G\\dfrac{m^{2}}{L}=-3G\\dfrac{m^{2}}{L}"
      },
      {
        "title": "例 5 · 由势能求力与稳定性 · Example 5: Force and stability from potential energy",
        "prompt": "一维系统势能 \\(U(x)=x^{4}-2x^{2}\\,\\mathrm{J}\\)（\\(x\\) 以 m 为单位）。(a) 求 \\(F_x(x)\\)；(b) 求平衡位置并判断稳定性；(c) 说明 \\(U\\) 的偶函数性质如何反映在 \\(F_x\\) 上。 · A one-dimensional system has potential energy \\(U(x)=x^{4}-2x^{2}\\,\\mathrm{J}\\) with \\(x\\) in meters. (a) Find \\(F_x(x)\\). (b) Find the equilibrium positions and determine their stability. (c) Explain how the even symmetry of \\(U\\) is reflected in \\(F_x\\).",
        "steps": [
          "\\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=-(4x^{3}-4x)=4x-4x^{3}=4x(1-x^{2})\\)。 · \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=-(4x^{3}-4x)=4x-4x^{3}=4x(1-x^{2})\\).",
          "平衡：\\(F_x=0\\Rightarrow x=0\\) 或 \\(x=\\pm1\\,\\mathrm{m}\\)。 · Equilibrium: \\(F_x=0\\Rightarrow x=0\\) or \\(x=\\pm1\\,\\mathrm{m}\\).",
          "\\(U''(x)=12x^{2}-4\\)：\\(U''(0)=-4<0\\) 不稳定；\\(U''(\\pm1)=8>0\\) 稳定。 · \\(U''(x)=12x^{2}-4\\): \\(U''(0)=-4<0\\) is unstable, while \\(U''(\\pm1)=8>0\\) is stable.",
          "\\(U(-x)=U(x)\\) 是偶函数，因此 \\(F_x(-x)=-F_x(x)\\) 是奇函数；两个稳定谷 \\(x=\\pm1\\) 完全等价。 · \\(U(-x)=U(x)\\) is even, so \\(F_x(-x)=-F_x(x)\\) is odd; the two stable wells at \\(x=\\pm1\\) are equivalent."
        ],
        "solution": "\\(F_x=4x-4x^{3}\\)；\\(x=0\\) 不稳定，\\(x=\\pm1\\,\\mathrm{m}\\) 稳定；偶函数 \\(U\\) 对应奇函数 \\(F_x\\)。 · \\(F_x=4x-4x^{3}\\); \\(x=0\\) is unstable and \\(x=\\pm1\\,\\mathrm{m}\\) are stable; even \\(U\\) corresponds to odd \\(F_x\\).",
        "solutionLatex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=4x-4x^{3}=4x(1-x^{2}),\\qquad x=0\\ \\text{unstable},\\quad x=\\pm1\\ \\text{stable}"
      },
      {
        "title": "例 6 · 单物块系统与系统选择 · Example 6: Single-block system and system selection",
        "prompt": "质量 \\(m=0.50\\,\\mathrm{kg}\\) 的物块从静止下落 \\(h=1.8\\,\\mathrm{m}\\)，忽略空气阻力。先以“只含物块”为系统：(a) 列出系统具有的能量；(b) 用外力做功求落地速度；(c) 再把地球纳入系统，重新列出能量并说明两种记账的关系。取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)。 · A block of mass \\(m=0.50\\,\\mathrm{kg}\\) falls from rest through \\(h=1.8\\,\\mathrm{m}\\), ignoring air drag. First take “the block alone” as the system: (a) list the energies the system has; (b) use external work to find the landing speed; (c) then include Earth in the system, list the energies again, and explain how the two bookkeepings are related. Take \\(g=9.8\\,\\mathrm{m/s^{2}}\\).",
        "steps": [
          "只含物块（视为质点）时系统只有动能 \\(K\\)；重力是系统外地球施加的外力。 · With only the block (treated as a point object), the system has only kinetic energy \\(K\\); gravity is an external force exerted by Earth outside the system.",
          "重力做正功 \\(W_g=mgh=(0.50)(9.8)(1.8)=8.82\\,\\mathrm{J}\\)，所以 \\(K_f=W_g=8.82\\,\\mathrm{J}\\)。 · Gravity does positive work \\(W_g=mgh=(0.50)(9.8)(1.8)=8.82\\,\\mathrm{J}\\), so \\(K_f=W_g=8.82\\,\\mathrm{J}\\).",
          "\\(v_f=\\sqrt{\\dfrac{2K_f}{m}}=\\sqrt{2gh}=\\sqrt{2(9.8)(1.8)}=5.94\\,\\mathrm{m/s}\\)。 · \\(v_f=\\sqrt{\\dfrac{2K_f}{m}}=\\sqrt{2gh}=\\sqrt{2(9.8)(1.8)}=5.94\\,\\mathrm{m/s}\\).",
          "把地球纳入系统后，重力成为内力，系统有 \\(K\\) 与 \\(U_g\\)；取地面为零，初态 \\(E_i=U_i=mgh=8.82\\,\\mathrm{J}\\)、\\(K_i=0\\)，末态 \\(U_f=0\\)、\\(K_f=8.82\\,\\mathrm{J}\\)，机械能守恒。两种选择给出同一速度；8.82 J 从“外功”重新记为“势能减少”。 · After including Earth, gravity is internal and the system has both \\(K\\) and \\(U_g\\); with zero at the ground, the initial state has \\(E_i=U_i=mgh=8.82\\,\\mathrm{J}\\) and \\(K_i=0\\), while the final state has \\(U_f=0\\) and \\(K_f=8.82\\,\\mathrm{J}\\), so mechanical energy is conserved. Both choices give the same speed; the 8.82 J is re-booked from external work to a decrease in potential energy."
        ],
        "solution": "单物块系统只有 \\(K\\)，重力外功使其增加 8.82 J，落地速度 \\(5.94\\,\\mathrm{m/s}\\)；把地球纳入后，同一能量记为 \\(U_g\\) 的减少，速度不变。 · The single-block system has only \\(K\\); external work by gravity increases it by 8.82 J, giving a landing speed of \\(5.94\\,\\mathrm{m/s}\\). With Earth included, the same energy is booked as a decrease in \\(U_g\\), and the speed is unchanged.",
        "solutionLatex": "K_f=mgh=8.82\\,\\mathrm{J},\\qquad v_f=\\sqrt{2gh}=5.94\\,\\mathrm{m/s}"
      },
      {
        "title": "例 7 · 摩擦热与系统边界 · Example 7: Frictional heating and the system boundary",
        "prompt": "质量 \\(m=2.0\\,\\mathrm{kg}\\) 的物块以 \\(v_0=4.0\\,\\mathrm{m/s}\\) 在水平桌面上滑行，动摩擦因数 \\(\\mu_k=0.30\\)，最终停下。取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)。(a) 以物块为系统，求摩擦力做功与动能变化；(b) 以物块+桌面为系统，求内能增加量并解释能量去向。 · A block of mass \\(m=2.0\\,\\mathrm{kg}\\) slides on a horizontal table with initial speed \\(v_0=4.0\\,\\mathrm{m/s}\\) and coefficient of kinetic friction \\(\\mu_k=0.30\\), then stops. Take \\(g=9.8\\,\\mathrm{m/s^{2}}\\). (a) With the block as the system, find the work done by friction and the change in kinetic energy; (b) with block + table as the system, find the increase in internal energy and explain where the energy goes.",
        "steps": [
          "\\(K_i=\\dfrac{1}{2}mv_0^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}\\)，\\(K_f=0\\)，所以 \\(\\Delta K=-16\\,\\mathrm{J}\\)。 · \\(K_i=\\dfrac{1}{2}mv_0^{2}=\\dfrac{1}{2}(2.0)(4.0)^{2}=16\\,\\mathrm{J}\\), \\(K_f=0\\), so \\(\\Delta K=-16\\,\\mathrm{J}\\).",
          "摩擦力 \\(f_k=\\mu_kN=\\mu_kmg=(0.30)(2.0)(9.8)=5.88\\,\\mathrm{N}\\)。 · The friction force is \\(f_k=\\mu_kN=\\mu_kmg=(0.30)(2.0)(9.8)=5.88\\,\\mathrm{N}\\).",
          "滑行距离 \\(d=\\dfrac{v_0^{2}}{2\\mu_kg}=\\dfrac{(4.0)^{2}}{2(0.30)(9.8)}=2.72\\,\\mathrm{m}\\)；\\(W_f=-f_kd=-5.88(2.72)=-16\\,\\mathrm{J}\\)。 · The stopping distance is \\(d=\\dfrac{v_0^{2}}{2\\mu_kg}=\\dfrac{(4.0)^{2}}{2(0.30)(9.8)}=2.72\\,\\mathrm{m}\\), so \\(W_f=-f_kd=-5.88(2.72)=-16\\,\\mathrm{J}\\).",
          "以物块为系统：摩擦是外力，\\(\\Delta K=W_f=-16\\,\\mathrm{J}\\)，物块机械能减少 16 J。以物块+桌面为系统：摩擦是内部非保守力，\\(\\Delta E_{\\mathrm{int}}=f_kd=+16\\,\\mathrm{J}\\)，机械能减少的 16 J 转化为内能，总能量不变。 · With the block as the system, friction is external and \\(\\Delta K=W_f=-16\\,\\mathrm{J}\\), so the block's mechanical energy decreases by 16 J. With block + table as the system, friction is an internal nonconservative force and \\(\\Delta E_{\\mathrm{int}}=f_kd=+16\\,\\mathrm{J}\\): the lost 16 J of mechanical energy becomes internal energy, and the total energy is unchanged."
        ],
        "solution": "物块系统中 \\(W_f=\\Delta K=-16\\,\\mathrm{J}\\)；物块+桌面系统中内能增加 \\(16\\,\\mathrm{J}\\)，机械能没有消失而是转化为内能。 · In the block system, \\(W_f=\\Delta K=-16\\,\\mathrm{J}\\); in the block + table system, internal energy increases by \\(16\\,\\mathrm{J}\\), so the mechanical energy is converted rather than lost.",
        "solutionLatex": "W_f=-f_kd=-16\\,\\mathrm{J},\\qquad \\Delta E_{\\mathrm{int}}=f_kd=+16\\,\\mathrm{J}"
      },
      {
        "title": "例 8 · 弹簧—物块：系统边界决定势能项 · Example 8: Spring–block system boundary determines the potential-energy term",
        "prompt": "光滑水平面上，质量 \\(m=0.20\\,\\mathrm{kg}\\) 的物块与理想弹簧 \\(k=50\\,\\mathrm{N/m}\\) 相连，弹簧被压缩 \\(x=0.10\\,\\mathrm{m}\\) 后从静止释放。(a) 以物块为系统，弹簧力做多少功？(b) 以物块+弹簧为系统，总能量是多少？(c) 求物块回到弹簧原长时的速度。 · On a frictionless horizontal surface, a block of mass \\(m=0.20\\,\\mathrm{kg}\\) is attached to an ideal spring with \\(k=50\\,\\mathrm{N/m}\\). The spring is compressed by \\(x=0.10\\,\\mathrm{m}\\) and released from rest. (a) With the block as the system, how much work does the spring force do? (b) With block + spring as the system, what is the total energy? (c) Find the block's speed when the spring returns to its natural length.",
        "steps": [
          "以物块为系统：弹簧在系统外，弹簧力是外力；势能不属于单物块系统。 · With the block as the system, the spring is outside and the spring force is external; potential energy does not belong to the single-block system.",
          "\\(W_s=\\dfrac{1}{2}kx^{2}=\\dfrac{1}{2}(50)(0.10)^{2}=0.25\\,\\mathrm{J}\\)，所以 \\(\\Delta K=0.25\\,\\mathrm{J}\\)。 · \\(W_s=\\dfrac{1}{2}kx^{2}=\\dfrac{1}{2}(50)(0.10)^{2}=0.25\\,\\mathrm{J}\\), so \\(\\Delta K=0.25\\,\\mathrm{J}\\).",
          "以物块+弹簧为系统：\\(K_i=0\\)，\\(U_i=\\dfrac{1}{2}kx^{2}=0.25\\,\\mathrm{J}\\)，总能量 \\(E=0.25\\,\\mathrm{J}\\)；原长时 \\(U_f=0\\)，\\(K_f=0.25\\,\\mathrm{J}\\)。 · With block + spring as the system, \\(K_i=0\\) and \\(U_i=\\dfrac{1}{2}kx^{2}=0.25\\,\\mathrm{J}\\), so the total energy is \\(E=0.25\\,\\mathrm{J}\\); at natural length \\(U_f=0\\) and \\(K_f=0.25\\,\\mathrm{J}\\).",
          "\\(v=\\sqrt{\\dfrac{2K_f}{m}}=\\sqrt{\\dfrac{2(0.25)}{0.20}}=1.58\\,\\mathrm{m/s}\\)。 · \\(v=\\sqrt{\\dfrac{2K_f}{m}}=\\sqrt{\\dfrac{2(0.25)}{0.20}}=1.58\\,\\mathrm{m/s}\\)."
        ],
        "solution": "单物块系统中弹簧力做外功 \\(0.25\\,\\mathrm{J}\\)；物块+弹簧系统中同一能量记为弹性势能 \\(0.25\\,\\mathrm{J}\\)，原长时速度 \\(1.58\\,\\mathrm{m/s}\\)。 · In the single-block system, the spring force does \\(0.25\\,\\mathrm{J}\\) of external work; in the block + spring system the same energy is elastic potential energy, and the speed at natural length is \\(1.58\\,\\mathrm{m/s}\\).",
        "solutionLatex": "W_s=U_s=\\dfrac{1}{2}(50)(0.10)^{2}=0.25\\,\\mathrm{J},\\qquad v=\\sqrt{\\dfrac{2(0.25)}{0.20}}=1.58\\,\\mathrm{m/s}"
      }
    ],
    "examTips": [
      "多物体题先列“无序对清单”：12、13、23……再用 \\(\\dfrac{N(N-1)}{2}\\) 检查有没有漏项或重复。 · For multi-object problems, first list the unordered pairs (12, 13, 23, …), then use \\(\\dfrac{N(N-1)}{2}\\) to check for missing or repeated terms.",
      "同一对只写一次：\\(U_{ij}\\) 与 \\(U_{ji}\\) 是同一个相互作用，不能相加两次。 · Write each pair once: \\(U_{ij}\\) and \\(U_{ji}\\) describe the same interaction and must not both be added.",
      "先明确系统边界：要把地球、弹簧或其他物体纳入系统，才能把相应相互作用写成势能；否则应按外力做功处理。 · Define the system boundary first: include Earth, the spring, or the other object in the system to write the interaction as potential energy; otherwise treat it as external work.",
      "引力势能取无穷远为零时为负值，求和时保留负号；近地问题可用 \\(g\\sum_i m_ih_i\\)。 · Gravitational potential energy is negative with zero at infinity, so keep the signs in the sum; near Earth, \\(g\\sum_i m_ih_i\\) is often convenient.",
      "弹簧题用每个弹簧自己的伸长或压缩量，不要用物块位移代替；多个弹簧的势能逐项相加。 · In spring problems, use each spring's own extension or compression rather than a block displacement; add the potential energy of each spring separately.",
      "由 \\(U\\) 求力时先写 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)，再用“力指向势能降低方向”检查符号；稳定性看 \\(U''\\)。 · When finding force from \\(U\\), start with \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\), check the sign with “force points toward lower potential energy,” and use \\(U''\\) for stability.",
      "被问“系统中有哪些能量”时，先数对象和相互作用：单对象质点系统只有 \\(K\\)；有保守相互作用对才写 \\(U\\)。 · When asked “which energies are in the system,” count objects and interactions first: a single point-object system has only \\(K\\); write \\(U\\) only when a conservative interacting pair is included.",
      "系统边界是记账选择：地球、弹簧或桌面在系统内写成 \\(U\\) 或 \\(E_{\\mathrm{int}}\\)，在系统外写成 \\(W_{\\mathrm{ext}}\\)；同一项不能算两次。 · The system boundary is a bookkeeping choice: Earth, a spring, or a table inside the system is written as \\(U\\) or \\(E_{\\mathrm{int}}\\), while outside it is written as \\(W_{\\mathrm{ext}}\\); the same term must not be counted twice.",
      "涉及摩擦生热时，先明确系统是否包含两个接触表面，再决定写 \\(\\Delta E_{\\mathrm{int}}=f_kd\\) 还是 \\(\\Delta K=W_f\\)。 · For frictional heating, first state whether the system includes both contacting surfaces, then decide between \\(\\Delta E_{\\mathrm{int}}=f_kd\\) and \\(\\Delta K=W_f\\)."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.1",
        "title": "动能定理 · Work–Energy Theorem",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒 · Conservation of Energy",
        "relation": "后续 · next"
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
        "chapterId": "mech-u6",
        "code": "6.1",
        "title": "转动动能 · Rotational Kinetic Energy",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：3.1 的动能定理给出 \\(W_{\\mathrm{net}}=\\Delta K\\)；2.6 的万有引力与 2.8 的弹簧力提供具体的对势能模型。 · Upstream: the work–energy theorem in 3.1 gives \\(W_{\\mathrm{net}}=\\Delta K\\), while gravitation in 2.6 and spring forces in 2.8 provide concrete pair-potential models.",
      "下游：3.3 用 \\(U_{\\mathrm{total}}\\) 写机械能守恒；3.5 把 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) 推广到变力与势能曲线。 · Downstream: 3.3 uses \\(U_{\\mathrm{total}}\\) in conservation of mechanical energy, and 3.5 extends \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) to variable forces and potential-energy curves.",
      "系统边界：同一物理情境中选择不同系统，势能项与外功项会重新分配，但物理结果不变。 · System boundary: choosing a different system in the same situation redistributes terms between potential energy and external work, but the physical result is unchanged.",
      "系统选择与能量清单：3.4.A.1 的单对象结论是系统记账规则的最简情形；把地球或弹簧移入/移出系统，只在 \\(U\\) 与 \\(W_{\\mathrm{ext}}\\) 之间重新记账。 · System selection and energy inventory: the single-object statement in 3.4.A.1 is the simplest case of the bookkeeping rule; moving Earth or a spring into or out of the system only re-books energy between \\(U\\) and \\(W_{\\mathrm{ext}}\\).",
      "跨学科：分子间势能、化学键能、天体多体问题和弹簧网络都用“按对求和”的同一套语言。 · Cross-disciplinary: intermolecular potentials, chemical bond energies, gravitational few-body problems, and spring networks all use the same “sum over pairs” language.",
      "跨学科：把摩擦热、化学键能或生物体代谢能计入系统时，同样要先把相应组成部分纳入边界。 · Cross-disciplinary: when including frictional heat, chemical bond energy, or metabolic energy, first bring the relevant components inside the system boundary."
    ],
    "intuitionDetailed": "先选系统，再谈势能：把地球和物体一起纳入系统，重力才是内力，才能写 \\(U_g\\)；把弹簧和物块一起纳入，弹力才能写 \\(U_s\\)。势能是“构型的能量”，不是单个物体的标签。对多物体系统，把每一对有相互作用的物体看成一条边：三个物体有三条边，四个物体有六条边，\\(N\\) 个物体有 \\(\\dfrac{N(N-1)}{2}\\) 条边。总势能就是这些边上的标量账目之和，\\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)；同一条边不能从两端各记一次。求某个物体受力时，把其他物体位置固定，对总势能关于该物体坐标求偏导，\\(F_{i,x}=-\\dfrac{\\partial U_{\\mathrm{total}}}{\\partial x_i}\\)，这样得到的成对力自然等大反向。最后用 \\(U\\)–\\(x\\) 曲线检查：斜率给出力，谷底稳定，峰顶不稳定；只有内部保守力做功时，\\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\) 保持不变。能量清单随系统边界改变，但物理不变：只选下落物块，系统只有动能，重力做外功；把地球选进来，系统有动能和重力势能，重力成为内力。单对象质点模型没有“内部结构”，所以既没有势能项也没有内能项；真实物体若要把内能算进来，就要把它看成由许多部分组成的多对象系统。摩擦生热也是这样：只选物块时摩擦是外力做负功，把桌面一起选进来时机械能转化为内能。 · Choose the system before talking about potential energy: include Earth with the object so gravity is internal and \\(U_g\\) can be written; include the spring with the block so the spring force can be described by \\(U_s\\). Potential energy is energy of a configuration, not a label attached to one object. For a multi-object system, treat each interacting pair as an edge: three objects have three edges, four objects have six, and \\(N\\) objects have \\(\\dfrac{N(N-1)}{2}\\) edges. The total potential energy is the scalar sum of those edge entries, \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\); the same edge must not be counted once from each end. To find the force on one object, hold the others fixed and take the partial derivative of the total potential with respect to that object's coordinate, \\(F_{i,x}=-\\dfrac{\\partial U_{\\mathrm{total}}}{\\partial x_i}\\); the resulting pair forces are equal and opposite. Finally, check with the \\(U\\)–\\(x\\) curve: the slope gives the force, valleys are stable, hilltops are unstable, and when only internal conservative forces do work, \\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\) stays constant. The energy inventory changes with the system boundary, but the physics does not: with only the falling block selected, the system has only kinetic energy and gravity does external work; include Earth and the system has kinetic plus gravitational potential energy, with gravity internal. A single point-object model has no internal structure, so it has neither a potential-energy nor an internal-energy term; to include a real object's internal energy, model it as a multi-part system. The same logic applies to friction: with only the block selected, friction is an external force doing negative work; include the table and mechanical energy converts to internal energy.",
    "development": [
      "先划定系统边界，列出系统内所有物体及它们之间的相互作用。 · First define the system boundary and list all objects inside it and the interactions among them.",
      "然后列能量清单：单对象质点系统只有 \\(K\\)，多对象系统还可有 \\(U\\)，摩擦等过程还可有 \\(E_{\\mathrm{int}}\\)。 · Then list the energy inventory: a single point-object system has only \\(K\\), a multi-object system may also have \\(U\\), and processes such as friction may also involve \\(E_{\\mathrm{int}}\\).",
      "判断哪些力是保守力；只有保守相互作用才能写成势能项，非保守力做功单独记账。 · Decide which forces are conservative; only conservative interactions become potential-energy terms, while nonconservative work is tracked separately.",
      "为每个保守相互作用选择势能表达式并对齐零点：引力用 \\(-G\\dfrac{m_im_j}{r_{ij}}\\)，弹簧用 \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\)，近地重力用 \\(mgh\\)。 · Choose a potential expression and a common zero for each conservative interaction: \\(-G\\dfrac{m_im_j}{r_{ij}}\\) for gravity, \\(\\dfrac{1}{2}k(\\Delta x)^{2}\\) for a spring, and \\(mgh\\) near Earth.",
      "列出所有无序对并对势能求和，用 \\(\\dfrac{N(N-1)}{2}\\) 检查项数；每对只写一次。 · List every unordered pair and sum the pair energies, using \\(\\dfrac{N(N-1)}{2}\\) to check the number of terms; write each pair once.",
      "用 \\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\) 守恒或 \\(F_{i,x}=-\\dfrac{\\partial U_{\\mathrm{total}}}{\\partial x_i}\\) 求解，并用符号、单位和极限情形自检。 · Solve with conservation of \\(K_{\\mathrm{total}}+U_{\\mathrm{total}}\\) or with \\(F_{i,x}=-\\dfrac{\\partial U_{\\mathrm{total}}}{\\partial x_i}\\), then check signs, units, and limiting cases."
    ],
    "checks": [
      "为什么势能属于系统而不是单个物体？以 \\(U_g=mgh\\) 为例说明。 · Why does potential energy belong to a system rather than a single object? Use \\(U_g=mgh\\) as an example.",
      "三个物体组成的系统有几对相互作用？四个呢？\\(N\\) 个呢？ · How many interacting pairs are in a three-object system? Four objects? \\(N\\) objects?",
      "如果把 \\(U_{12}\\) 和 \\(U_{21}\\) 都相加，总势能会怎样？为什么只算一次？ · What happens to the total potential energy if both \\(U_{12}\\) and \\(U_{21}\\) are added? Why count the pair only once?",
      "三个等质量质点位于等边三角形顶点，总引力势能是几项？如果只加“相邻”两对，错在哪里？ · Three equal masses sit at the vertices of an equilateral triangle. How many terms are in the total gravitational potential energy? What is wrong with adding only the two “adjacent” pairs?",
      "若系统外的一个物体与系统内物体有引力作用，能否把这对势能直接算进系统总势能？应如何处理？ · If an object outside the system gravitationally interacts with an object inside, can that pair energy be counted directly in the system's total potential energy? What should be done?",
      "由 \\(U_{\\mathrm{total}}\\) 求某个物体的受力时，为什么要对其他坐标求偏导？ · Why is a partial derivative with respect to one coordinate used when finding the force on one object from \\(U_{\\mathrm{total}}\\)?",
      "一个只含下落小球的系统（地球在系统外）具有哪些能量？重力做功如何改变这些能量？ · What energies does a system containing only a falling ball (with Earth outside) have? How does gravity's work change them?",
      "把地球纳入系统后，重力势能与外力做功如何重新记账？为什么两种选择给出同一速度？ · After including Earth in the system, how are gravitational potential energy and external work re-booked? Why do both choices give the same speed?",
      "摩擦生热时，为什么必须说明系统是否包含桌面？单物块系统中 \\(f_kd\\) 应记为什么？ · Why must you state whether the table is included when discussing frictional heating? In a single-block system, what should \\(f_kd\\) be booked as?"
    ],
    "vocabulary": [
      {
        "termZh": "系统与系统边界",
        "termEn": "system and system boundary",
        "defZh": "为分析而选定的一组对象及其假想边界；边界内对象间的相互作用可写成势能，跨边界的相互作用按外力做功处理。",
        "defEn": "A chosen collection of objects and an imaginary boundary; interactions among objects inside may be written as potential energy, while interactions crossing the boundary are treated as external work."
      },
      {
        "termZh": "保守力",
        "termEn": "conservative force",
        "defZh": "做功只依赖始末位置、与路径无关的力，可以定义势能。",
        "defEn": "A force whose work depends only on the initial and final positions, not the path, so a potential energy can be defined."
      },
      {
        "termZh": "非保守力",
        "termEn": "nonconservative force",
        "defZh": "做功依赖路径的力，如摩擦力、空气阻力；不能定义只依赖位置的势能。",
        "defEn": "A force whose work depends on the path, such as friction or air drag; no position-only potential energy can be defined."
      },
      {
        "termZh": "势能",
        "termEn": "potential energy",
        "defZh": "储存在相互作用系统构型中的能量，满足 \\(\\Delta U=-W_{\\mathrm{cons}}\\)；零点可任选，但同一问题中必须一致。",
        "defEn": "Energy stored in the configuration of an interacting system, satisfying \\(\\Delta U=-W_{\\mathrm{cons}}\\); the zero is arbitrary but must be consistent within a problem."
      },
      {
        "termZh": "重力势能与弹性势能",
        "termEn": "gravitational and elastic potential energy",
        "defZh": "物体—地球系统的近地势能 \\(U_g=mgh\\)，以及物体—弹簧系统的势能 \\(U_s=\\dfrac{1}{2}kx^{2}\\)；二者都成对属于相互作用系统。",
        "defEn": "Near-Earth potential energy of the object–Earth system, \\(U_g=mgh\\), and potential energy of the object–spring system, \\(U_s=\\dfrac{1}{2}kx^{2}\\); both belong to their interacting systems."
      },
      {
        "termZh": "对势能",
        "termEn": "pair potential energy",
        "defZh": "一对相互作用物体所共有的势能，如 \\(U_{ij}=-G\\dfrac{m_im_j}{r_{ij}}\\)；多体系统总势能是各对之和 \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\)，每对只计一次。",
        "defEn": "Potential energy shared by one interacting pair, such as \\(U_{ij}=-G\\dfrac{m_im_j}{r_{ij}}\\); a multi-body system's total potential energy is the sum over pairs, \\(U_{\\mathrm{total}}=\\sum_{i<j}U_{ij}\\), with each pair counted once."
      },
      {
        "termZh": "机械能",
        "termEn": "mechanical energy",
        "defZh": "系统动能与势能之和 \\(E_{\\mathrm{mech}}=K+U\\)；只有系统内保守力做功时守恒，摩擦等会把它转化为内能。",
        "defEn": "The sum of a system's kinetic and potential energies, \\(E_{\\mathrm{mech}}=K+U\\); conserved when only internal conservative forces do work, while friction and similar processes convert it into internal energy."
      },
      {
        "termZh": "内能",
        "termEn": "internal energy",
        "defZh": "系统内部微观运动、转动与形变对应的能量；摩擦生热时 \\(\\Delta E_{\\mathrm{int}}=f_kd\\)，属于包含两个接触表面的系统。",
        "defEn": "Energy associated with microscopic motion, rotation, and deformation inside a system; for frictional heating \\(\\Delta E_{\\mathrm{int}}=f_kd\\), belonging to the system that contains both contacting surfaces."
      }
    ]
  },
  "3.3": {
    "id": "mech/mech-u3/3.3",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.3",
    "titleZh": "机械能守恒",
    "titleEn": "Conservation of Energy",
    "layer": "ap",
    "summary": "机械能守恒 · Conservation of Energy",
    "learningObjectives": [
      "能陈述「机械能守恒」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Conservation of Energy：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "机械能守恒（Conservation of Energy）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「机械能守恒」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "E=K+U",
        "note": "机械能。"
      },
      {
        "latex": "K_i+U_i+W_{\\mathrm{nc}}=K_f+U_f",
        "note": "含非保守力做功的能量方程。"
      },
      {
        "latex": "\\Delta E=W_{\\mathrm{nc}}",
        "note": "机械能变化等于非保守力做功。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「机械能守恒」的工作方程或机制链。"
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
      "只有保守力做功时机械能守恒",
      "非保守力（摩擦等）做功改变机械能",
      "系统与势能零点需明确"
    ],
    "keyPoints": [
      "掌握 3.3「机械能守恒」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「机械能守恒」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「机械能守恒」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "E=K+U"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「机械能守恒」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「机械能守恒」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「机械能守恒」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能",
        "relation": "prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.4",
        "title": "功率",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「机械能守恒」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「机械能守恒」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「机械能守恒」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.4": {
    "id": "mech/mech-u3/3.4",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.4",
    "titleZh": "功率",
    "titleEn": "Power",
    "layer": "ap",
    "summary": "功率 · Power",
    "learningObjectives": [
      "能陈述「功率」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Power：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "功率（Power）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「功率」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}",
        "note": "瞬时功率。"
      },
      {
        "latex": "P=\\vec F\\cdot\\vec v=Fv\\cos\\theta",
        "note": "力与速度的瞬时功率。"
      },
      {
        "latex": "P=\\dfrac{\\Delta E}{\\Delta t}",
        "note": "平均功率。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「功率」的工作方程或机制链。"
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
      "瞬时功率用导数；平均功率用 ΔW/Δt",
      "F 与 v 同向时 P=Fv；夹角 θ 时 P=Fv cosθ",
      "功率是标量，单位 W"
    ],
    "keyPoints": [
      "掌握 3.4「功率」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「功率」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力或把内力当作外力"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「功率」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象、关系与适用条件；条件应按该定律或模型的假设逐条核对。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「功率」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「功率」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「功率」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "mech-u3",
        "code": "3.3",
        "title": "机械能守恒",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「功率」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「功率」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「功率」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.5": {
    "id": "mech/mech-u3/3.5",
    "subject": "mech",
    "chapterId": "mech-u3",
    "unitCode": "3",
    "unitTitleZh": "功、能量与功率",
    "unitTitleEn": "Work, Energy, and Power",
    "code": "3.5",
    "titleZh": "变力做功与势能函数",
    "titleEn": "Work by Variable Forces and Potential Energy Functions",
    "layer": "ap",
    "summary": "变力做功是 \\(F_x\\)–\\(x\\) 图下的有符号面积；一维保守力由势能斜率给出 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)，非线性弹簧的 \\(U(x)\\) 必须由积分得到。 · Work by a variable force is the signed area under the \\(F_x\\)–\\(x\\) graph; in one dimension a conservative force is the negative slope of potential energy, \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\), and a nonlinear spring's \\(U(x)\\) must be obtained by integration.",
    "learningObjectives": [
      "能用 \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\) 或 \\(F_x\\)–\\(x\\) 图面积计算变力做功，并正确处理正负号。 · Calculate work by a variable force using \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\) or the area under the \\(F_x\\)–\\(x\\) graph, with correct signs.",
      "能从 \\(U(x)\\) 的斜率求 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)，也能由 \\(F_x\\) 积分恢复 \\(U(x)\\)。 · Obtain \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) from the slope of \\(U(x)\\), and recover \\(U(x)\\) by integrating \\(F_x\\).",
      "能由 \\(U(x)\\) 的形状判断平衡位置、稳定与不稳定平衡，并用 \\(E=K+U\\) 求转折点。 · Use the shape of \\(U(x)\\) to identify equilibrium positions, stable versus unstable equilibrium, and turning points from \\(E=K+U\\).",
      "能对非线性弹簧计算变力做功与势能，而不盲目套用 \\(\\dfrac{1}{2}kx^{2}\\)。 · Calculate variable-force work and potential energy for a nonlinear spring without blindly using \\(\\dfrac{1}{2}kx^{2}\\)."
    ],
    "essentialKnowledge": [
      "变力沿 \\(x\\) 做的功是 \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\)，即 \\(F_x\\)–\\(x\\) 曲线与 \\(x\\) 轴之间的有符号面积。 · Work by a variable force along \\(x\\) is \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\), the signed area between the \\(F_x\\)–\\(x\\) curve and the \\(x\\)-axis.",
      "\\(W=F\\Delta x\\) 只适用于恒力；变力必须积分或分片求面积。 · \\(W=F\\Delta x\\) applies only to a constant force; a variable force requires integration or piecewise areas.",
      "一维保守力与势能的关系是 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)；力指向势能减小的方向。 · In one dimension, \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\); the force points toward decreasing potential energy.",
      "反过来，\\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\)；势能零点可任选，只有势能差有物理意义。 · Conversely, \\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\); the zero of potential energy is arbitrary and only differences are physical.",
      "平衡位置满足 \\(F_x=0\\)，即 \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\)；\\(U\\) 的局部极小是稳定平衡，局部极大是不稳定平衡。 · Equilibrium requires \\(F_x=0\\), i.e. \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\); a local minimum of \\(U\\) is stable equilibrium and a local maximum is unstable equilibrium.",
      "理想弹簧：\\(F_x=-kx\\)，\\(W_s=-\\dfrac{1}{2}k(x_b^{2}-x_a^{2})\\)，取 \\(U(0)=0\\) 时 \\(U_s=\\dfrac{1}{2}kx^{2}\\)。 · Ideal spring: \\(F_x=-kx\\), \\(W_s=-\\dfrac{1}{2}k(x_b^{2}-x_a^{2})\\), and with \\(U(0)=0\\), \\(U_s=\\dfrac{1}{2}kx^{2}\\).",
      "非线性弹簧：若 \\(F_x=-(kx+\\beta x^{3})\\)，则 \\(U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\)；不能只用 \\(\\dfrac{1}{2}kx^{2}\\)。 · Nonlinear spring: if \\(F_x=-(kx+\\beta x^{3})\\), then \\(U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\); \\(\\dfrac{1}{2}kx^{2}\\) alone is not enough.",
      "变力情形仍可用动能定理 \\(W_{\\mathrm{net}}=\\Delta K\\)；保守力做功可用 \\(-\\Delta U\\) 代替。 · The work–energy theorem \\(W_{\\mathrm{net}}=\\Delta K\\) still holds for variable forces; work by a conservative force can be replaced by \\(-\\Delta U\\).",
      "在 \\(E=K+U\\) 给定的情况下，转折点满足 \\(K=0\\)，即 \\(U(x)=E\\)；粒子只能出现在 \\(U(x)\\le E\\) 的区域。 · For a given \\(E=K+U\\), a turning point has \\(K=0\\), so \\(U(x)=E\\); the particle can only be where \\(U(x)\\le E\\)."
    ],
    "definition": "变力做功是力沿位移的累积：\\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\)，在 \\(F_x\\)–\\(x\\) 图上就是曲线与 \\(x\\) 轴之间的有符号面积。若力是保守力，它可以由一个势能函数 \\(U(x)\\) 描述，二者满足 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)；反之 \\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\)。势能的局部极小对应稳定平衡，局部极大对应不稳定平衡。 · Work by a variable force accumulates force along displacement: \\(W=\\displaystyle\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x\\), the signed area between the \\(F_x\\)–\\(x\\) curve and the \\(x\\)-axis. A conservative force can be described by a potential-energy function \\(U(x)\\) with \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\); conversely \\(U(x)=-\\displaystyle\\int F_x\\,\\mathrm{d}x+U_0\\). A local minimum of potential energy is stable equilibrium, and a local maximum is unstable equilibrium.",
    "intuition": "把 \\(F_x\\)–\\(x\\) 图想成“力随位置变化的账本”：每一小段位移上，力做的功是 \\(F_x\\mathrm{d}x\\)，总面积就是总功；曲线在轴下方时面积为负。把 \\(U(x)\\) 想成“地形的海拔”：力总是指向海拔降低的方向，坡度越陡，力越大；谷底是稳定平衡，山顶是不稳定平衡。非线性弹簧只是把直线的“坡”换成了弯曲的“坡”，所以 \\(U\\) 也必须重新积分。 · Think of the \\(F_x\\)–\\(x\\) graph as a ledger of force versus position: over each small displacement the work is \\(F_x\\mathrm{d}x\\), and the total area is the total work; area below the axis is negative. Think of \\(U(x)\\) as terrain elevation: force always points downhill, and a steeper slope means a larger force; a valley is stable equilibrium and a hilltop is unstable. A nonlinear spring simply replaces a straight slope with a curved one, so \\(U\\) must be integrated again.",
    "formulas": [
      {
        "latex": "W=\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x",
        "note": "变力做功；面积在 \\(x\\) 轴下方时为负。 · Work by a variable force; area below the \\(x\\)-axis counts as negative."
      },
      {
        "latex": "W=F_x\\Delta x",
        "note": "仅恒力适用；变力不能直接用。 · Valid only for a constant force; do not use it for a variable force."
      },
      {
        "latex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}",
        "note": "一维保守力等于势能曲线斜率的相反数。 · In one dimension, the conservative force is the negative slope of the potential-energy curve."
      },
      {
        "latex": "U(x)=-\\int F_x\\,\\mathrm{d}x+U_0",
        "note": "由力恢复势能；\\(U_0\\) 由势能零点决定。 · Recover potential energy from force; \\(U_0\\) is set by the chosen zero."
      },
      {
        "latex": "U_s=\\dfrac{1}{2}kx^{2}",
        "note": "理想弹簧，取平衡位置 \\(U=0\\)。 · Ideal spring with \\(U=0\\) at equilibrium."
      },
      {
        "latex": "F_x=-(kx+\\beta x^{3})",
        "note": "非线性弹簧的一个具体力模型。 · A concrete force model for a nonlinear spring."
      },
      {
        "latex": "U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}",
        "note": "上述非线性弹簧的势能，取 \\(U(0)=0\\)；由积分得到。 · Potential energy for the nonlinear spring above with \\(U(0)=0\\), obtained by integration."
      },
      {
        "latex": "E=K+U,\\qquad K=0\\ \\text{at a turning point}",
        "note": "机械能与转折点条件；只在保守力作用下成立。 · Mechanical energy and the turning-point condition; valid when only conservative forces do work."
      }
    ],
    "derivationNotes": [
      {
        "from": "功的定义 · Definition of work",
        "to": "变力积分 · Variable-force integral",
        "note": "把路径分成小段，每段近似恒力，求和取极限得 \\(W=\\int F_x\\,\\mathrm{d}x\\)。 · Divide the path into small segments, approximate each by a constant force, and take the limit to get \\(W=\\int F_x\\,\\mathrm{d}x\\)."
      },
      {
        "from": "保守力与势能 · Conservative force and potential energy",
        "to": "势能定义 · Definition of potential energy",
        "note": "\\(\\Delta U=-W_{\\mathrm{cons}}=-\\int F_x\\,\\mathrm{d}x\\)，因此 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)。 · \\(\\Delta U=-W_{\\mathrm{cons}}=-\\int F_x\\,\\mathrm{d}x\\), hence \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)."
      },
      {
        "from": "势能斜率 · Slope of potential energy",
        "to": "力的方向 · Direction of force",
        "note": "斜率为正处力沿负方向，斜率为负处力沿正方向；力总指向势能降低的一侧。 · Where the slope is positive the force points in the negative direction, and where the slope is negative it points in the positive direction; force always points toward lower potential energy."
      },
      {
        "from": "平衡条件 · Equilibrium condition",
        "to": "稳定性 · Stability",
        "note": "\\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\) 给出平衡；\\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}>0\\) 为稳定，\\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}<0\\) 为不稳定。 · \\(\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=0\\) gives equilibrium; \\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}>0\\) is stable and \\(\\dfrac{\\mathrm{d}^{2}U}{\\mathrm{d}x^{2}}<0\\) is unstable."
      },
      {
        "from": "非线性力 · Nonlinear force",
        "to": "非线性势能 · Nonlinear potential energy",
        "note": "对 \\(F_x=-(kx+\\beta x^{3})\\) 积分：\\(U=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\)。 · Integrate \\(F_x=-(kx+\\beta x^{3})\\): \\(U=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}+U_0\\)."
      }
    ],
    "conditions": [
      "\\(W=\\int F_x\\,\\mathrm{d}x\\) 是一维情形；三维要用 \\(\\int\\vec F\\cdot\\mathrm{d}\\vec r\\)。 · \\(W=\\int F_x\\,\\mathrm{d}x\\) is one-dimensional; in three dimensions use \\(\\int\\vec F\\cdot\\mathrm{d}\\vec r\\).",
      "势能只对保守力定义；摩擦力等非保守力没有只依赖位置的势能函数。 · Potential energy is defined only for conservative forces; friction and other nonconservative forces have no position-only potential-energy function.",
      "\\(F_x\\) 是沿位移方向的力分量，符号由所选正方向决定；面积在轴下方为负功。 · \\(F_x\\) is the force component along displacement with a sign set by the chosen positive direction; area below the axis is negative work.",
      "势能零点可任选，\\(U\\) 的绝对值没有物理意义；只有 \\(\\Delta U\\) 和 \\(F_x\\) 与零点无关。 · The zero of potential energy is arbitrary and the absolute value of \\(U\\) has no physical meaning; only \\(\\Delta U\\) and \\(F_x\\) are independent of the zero.",
      "非理想弹簧的 \\(F(x)\\) 只在给定范围内有效；分段力要分段积分，不能用一个多项式贯穿。 · A nonideal spring's \\(F(x)\\) is valid only over the stated range; integrate piecewise forces piecewise rather than with one polynomial everywhere."
    ],
    "keyPoints": [
      "变力做功看面积，不看单一时刻的力；面积有正负。 · Variable-force work is an area, not a single force value; the area carries a sign.",
      "\\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)：斜率越陡，力越大；负号不能丢。 · \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\): a steeper slope means a larger force; do not drop the minus sign.",
      "\\(U\\) 的极小点是稳定平衡，极大点是不稳定平衡。 · A minimum of \\(U\\) is stable equilibrium; a maximum is unstable equilibrium.",
      "理想弹簧的 \\(\\dfrac{1}{2}kx^{2}\\) 来自对 \\(-kx\\) 积分，不能无条件搬到非线性弹簧。 · The ideal-spring result \\(\\dfrac{1}{2}kx^{2}\\) comes from integrating \\(-kx\\) and does not transfer automatically to a nonlinear spring.",
      "转折点由 \\(U(x)=E\\) 给出，且必须满足 \\(U(x)\\le E\\)。 · Turning points satisfy \\(U(x)=E\\), and motion requires \\(U(x)\\le E\\).",
      "变力仍可用动能定理；保守力做功可写成 \\(-\\Delta U\\)。 · The work–energy theorem still holds for variable forces; conservative work can be written as \\(-\\Delta U\\)."
    ],
    "misconceptions": [
      "把 \\(F\\)–\\(x\\) 图的面积一律当成正功，忽略曲线在 \\(x\\) 轴下方的负面积。 · Treating every area under an \\(F\\)–\\(x\\) graph as positive work and ignoring negative area below the axis.",
      "对变力仍用 \\(W=F\\Delta x\\)，把某个位置的力当作全程恒力。 · Using \\(W=F\\Delta x\\) for a variable force and treating the force at one point as constant.",
      "由 \\(U(x)\\) 求 \\(F_x\\) 时忘记负号，导致力的方向反了。 · Dropping the minus sign when finding \\(F_x\\) from \\(U(x)\\), which reverses the force direction.",
      "认为 \\(F_x=0\\) 的地方 \\(U\\) 一定为零；平衡位置只要求斜率为零，不要求势能为零。 · Thinking \\(U\\) must be zero where \\(F_x=0\\); equilibrium only requires zero slope, not zero potential energy.",
      "把稳定平衡与不稳定平衡的凹凸关系弄反：谷底稳定，山顶不稳定。 · Reversing the curvature rule: valleys are stable and hilltops are unstable.",
      "对非线性弹簧直接使用 \\(\\dfrac{1}{2}kx^{2}\\)，忽略了 \\(\\beta x^{4}\\) 项。 · Applying \\(\\dfrac{1}{2}kx^{2}\\) directly to a nonlinear spring and ignoring the \\(\\beta x^{4}\\) term.",
      "认为势能的绝对值有物理意义；改变势能零点不改变力，也不改变物理结果。 · Thinking the absolute value of potential energy is physical; changing the zero does not change the force or any physical result."
    ],
    "examples": [
      {
        "title": "例 1 · 分段 F–x 图的面积 · Example 1: Area under a piecewise F–x graph",
        "prompt": "某物体沿 \\(x\\) 方向运动，\\(F_x\\) 在 \\(0\\) 到 \\(2.0\\,\\mathrm{m}\\) 内恒为 \\(6.0\\,\\mathrm{N}\\)，在 \\(2.0\\) 到 \\(4.0\\,\\mathrm{m}\\) 内从 \\(6.0\\,\\mathrm{N}\\) 线性减小到 \\(0\\)。求 \\(0\\) 到 \\(4.0\\,\\mathrm{m}\\) 内该力做的功。 · An object moves along \\(x\\). The force \\(F_x\\) is constant at \\(6.0\\,\\mathrm{N}\\) from \\(0\\) to \\(2.0\\,\\mathrm{m}\\), then decreases linearly from \\(6.0\\,\\mathrm{N}\\) to \\(0\\) between \\(2.0\\) and \\(4.0\\,\\mathrm{m}\\). Find the work done by this force from \\(0\\) to \\(4.0\\,\\mathrm{m}\\).",
        "steps": [
          "第一段是矩形：\\(W_1=(6.0)(2.0)=12\\,\\mathrm{J}\\)。 · The first segment is a rectangle: \\(W_1=(6.0)(2.0)=12\\,\\mathrm{J}\\).",
          "第二段是三角形：\\(W_2=\\dfrac{1}{2}(6.0)(2.0)=6.0\\,\\mathrm{J}\\)。 · The second segment is a triangle: \\(W_2=\\dfrac{1}{2}(6.0)(2.0)=6.0\\,\\mathrm{J}\\).",
          "总面积 \\(W=12+6.0=18\\,\\mathrm{J}\\)，因为两段都在 \\(x\\) 轴上方。 · Total area \\(W=12+6.0=18\\,\\mathrm{J}\\) because both segments lie above the \\(x\\)-axis."
        ],
        "solution": "\\(W=18\\,\\mathrm{J}\\)。 · \\(W=18\\,\\mathrm{J}\\).",
        "solutionLatex": "W=\\int_0^4F_x\\,\\mathrm{d}x=(6.0)(2.0)+\\dfrac{1}{2}(6.0)(2.0)=18\\,\\mathrm{J}"
      },
      {
        "title": "例 2 · 由 U(x) 求力与平衡 · Example 2: Force and equilibrium from U(x)",
        "prompt": "一维系统的势能为 \\(U(x)=3x^{2}-x^{3}\\,\\mathrm{J}\\)（\\(x\\) 以 m 为单位）。求 \\(x=1.0\\,\\mathrm{m}\\) 处的力，并找出平衡位置、判断其稳定性。 · A one-dimensional system has potential energy \\(U(x)=3x^{2}-x^{3}\\,\\mathrm{J}\\) with \\(x\\) in meters. Find the force at \\(x=1.0\\,\\mathrm{m}\\), locate the equilibrium positions, and determine their stability.",
        "steps": [
          "\\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=-(6x-3x^{2})=3x^{2}-6x\\)。 · \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=-(6x-3x^{2})=3x^{2}-6x\\).",
          "在 \\(x=1.0\\)：\\(F_x=3-6=-3.0\\,\\mathrm{N}\\)，方向沿负 \\(x\\)。 · At \\(x=1.0\\): \\(F_x=3-6=-3.0\\,\\mathrm{N}\\), directed along negative \\(x\\).",
          "平衡：\\(3x(x-2)=0\\)，所以 \\(x=0\\) 或 \\(x=2.0\\,\\mathrm{m}\\)。 · Equilibrium: \\(3x(x-2)=0\\), so \\(x=0\\) or \\(x=2.0\\,\\mathrm{m}\\).",
          "\\(U''(x)=6-6x\\)：\\(U''(0)=6>0\\) 为稳定；\\(U''(2)=-6<0\\) 为不稳定。 · \\(U''(x)=6-6x\\): \\(U''(0)=6>0\\) is stable; \\(U''(2)=-6<0\\) is unstable."
        ],
        "solution": "\\(F_x(1.0)=-3.0\\,\\mathrm{N}\\)；\\(x=0\\) 稳定，\\(x=2.0\\,\\mathrm{m}\\) 不稳定。 · \\(F_x(1.0)=-3.0\\,\\mathrm{N}\\); \\(x=0\\) is stable and \\(x=2.0\\,\\mathrm{m}\\) is unstable.",
        "solutionLatex": "F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}=3x^{2}-6x,\\qquad F_x(1.0)=-3.0\\,\\mathrm{N},\\qquad x=0\\ \\text{(stable)},\\ x=2.0\\,\\mathrm{m}\\ \\text{(unstable)}"
      },
      {
        "title": "例 3 · 非线性弹簧的功与势能 · Example 3: Work and potential energy of a nonlinear spring",
        "prompt": "非线性弹簧的力为 \\(F_x=-(250x+3000x^{3})\\,\\mathrm{N}\\)，\\(x\\) 以 m 为单位。求弹簧从 \\(x=0\\) 拉伸到 \\(x=0.20\\,\\mathrm{m}\\) 时弹簧力做的功，以及对应的势能变化。 · A nonlinear spring exerts \\(F_x=-(250x+3000x^{3})\\,\\mathrm{N}\\) with \\(x\\) in meters. Find the work done by the spring force as it is stretched from \\(x=0\\) to \\(x=0.20\\,\\mathrm{m}\\), and the corresponding change in potential energy.",
        "steps": [
          "\\(W_s=\\displaystyle\\int_0^{0.20}-(250x+3000x^{3})\\,\\mathrm{d}x=-\\left[125x^{2}+750x^{4}\\right]_0^{0.20}\\)。 · \\(W_s=\\displaystyle\\int_0^{0.20}-(250x+3000x^{3})\\,\\mathrm{d}x=-\\left[125x^{2}+750x^{4}\\right]_0^{0.20}\\).",
          "代入：\\(125(0.040)=5.0\\,\\mathrm{J}\\)，\\(750(0.0016)=1.2\\,\\mathrm{J}\\)，所以 \\(W_s=-(5.0+1.2)=-6.2\\,\\mathrm{J}\\)。 · Substitute: \\(125(0.040)=5.0\\,\\mathrm{J}\\) and \\(750(0.0016)=1.2\\,\\mathrm{J}\\), so \\(W_s=-(5.0+1.2)=-6.2\\,\\mathrm{J}\\).",
          "保守力：\\(\\Delta U=-W_s=6.2\\,\\mathrm{J}\\)；取 \\(U(0)=0\\)，则 \\(U(0.20)=6.2\\,\\mathrm{J}\\)。 · For a conservative force, \\(\\Delta U=-W_s=6.2\\,\\mathrm{J}\\); with \\(U(0)=0\\), \\(U(0.20)=6.2\\,\\mathrm{J}\\)."
        ],
        "solution": "\\(W_s=-6.2\\,\\mathrm{J}\\)，\\(\\Delta U=+6.2\\,\\mathrm{J}\\)。若误用 \\(\\dfrac{1}{2}kx^{2}\\) 只得 \\(5.0\\,\\mathrm{J}\\)，会低估 \\(1.2\\,\\mathrm{J}\\)。 · \\(W_s=-6.2\\,\\mathrm{J}\\) and \\(\\Delta U=+6.2\\,\\mathrm{J}\\). Using \\(\\dfrac{1}{2}kx^{2}\\) by mistake would give only \\(5.0\\,\\mathrm{J}\\), underestimating by \\(1.2\\,\\mathrm{J}\\).",
        "solutionLatex": "W_s=\\int_0^{0.20}-(250x+3000x^{3})\\,\\mathrm{d}x=-6.2\\,\\mathrm{J},\\qquad \\Delta U=-W_s=6.2\\,\\mathrm{J}"
      },
      {
        "title": "例 4 · 转折点与能量 · Example 4: Turning points and energy",
        "prompt": "一维势能 \\(U(x)=2x^{2}\\,\\mathrm{J}\\)（\\(x\\) 以 m 为单位）。物体总机械能 \\(E=8.0\\,\\mathrm{J}\\)，质量 \\(m=3.0\\,\\mathrm{kg}\\)。求转折点，以及 \\(x=1.0\\,\\mathrm{m}\\) 处的动能与速率。 · A one-dimensional potential is \\(U(x)=2x^{2}\\,\\mathrm{J}\\) with \\(x\\) in meters. The object has total mechanical energy \\(E=8.0\\,\\mathrm{J}\\) and mass \\(m=3.0\\,\\mathrm{kg}\\). Find the turning points and the kinetic energy and speed at \\(x=1.0\\,\\mathrm{m}\\).",
        "steps": [
          "转折点 \\(K=0\\)：\\(U(x)=E\\)，即 \\(2x^{2}=8.0\\)，得 \\(x=\\pm 2.0\\,\\mathrm{m}\\)。 · Turning points have \\(K=0\\): \\(U(x)=E\\), so \\(2x^{2}=8.0\\) and \\(x=\\pm 2.0\\,\\mathrm{m}\\).",
          "在 \\(x=1.0\\)：\\(U=2(1.0)^{2}=2.0\\,\\mathrm{J}\\)，所以 \\(K=E-U=8.0-2.0=6.0\\,\\mathrm{J}\\)。 · At \\(x=1.0\\): \\(U=2(1.0)^{2}=2.0\\,\\mathrm{J}\\), so \\(K=E-U=8.0-2.0=6.0\\,\\mathrm{J}\\).",
          "\\(K=\\dfrac{1}{2}mv^{2}\\)：\\(6.0=\\dfrac{1}{2}(3.0)v^{2}\\)，得 \\(v=\\sqrt{4.0}=2.0\\,\\mathrm{m/s}\\)。 · \\(K=\\dfrac{1}{2}mv^{2}\\): \\(6.0=\\dfrac{1}{2}(3.0)v^{2}\\), so \\(v=\\sqrt{4.0}=2.0\\,\\mathrm{m/s}\\)."
        ],
        "solution": "转折点 \\(x=\\pm 2.0\\,\\mathrm{m}\\)；\\(x=1.0\\,\\mathrm{m}\\) 处 \\(K=6.0\\,\\mathrm{J}\\)，\\(v=2.0\\,\\mathrm{m/s}\\)。 · Turning points \\(x=\\pm 2.0\\,\\mathrm{m}\\); at \\(x=1.0\\,\\mathrm{m}\\), \\(K=6.0\\,\\mathrm{J}\\) and \\(v=2.0\\,\\mathrm{m/s}\\).",
        "solutionLatex": "U(\\pm 2.0)=8.0\\,\\mathrm{J},\\qquad K(1.0)=8.0-2.0=6.0\\,\\mathrm{J},\\qquad v=\\sqrt{\\dfrac{2K}{m}}=2.0\\,\\mathrm{m\\,s^{-1}}"
      }
    ],
    "examTips": [
      "先判断力是否恒定；变力一律用积分或面积，不要直接乘位移。 · Decide first whether the force is constant; for a variable force, integrate or use area rather than multiplying by displacement.",
      "面积题先标出 \\(x\\) 轴，再把轴上方与下方的面积分别求，最后带符号相加。 · On area questions, mark the \\(x\\)-axis, compute the areas above and below separately, then add them with signs.",
      "\\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) 的负号是高频失分点；可由“力指向势能降低方向”反查。 · The minus sign in \\(F=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\) is a common lost point; check it with “force points toward lower potential energy.”",
      "平衡看斜率，稳定性看曲率：\\(U'=0\\) 且 \\(U''>0\\) 为稳定。 · Equilibrium uses the slope and stability uses the curvature: \\(U'=0\\) with \\(U''>0\\) is stable.",
      "非线性弹簧先写 \\(F(x)\\)，再积分求 \\(U\\)；不要凭记忆写 \\(\\dfrac{1}{2}kx^{2}\\)。 · For a nonlinear spring, write \\(F(x)\\) first and integrate to get \\(U\\); do not write \\(\\dfrac{1}{2}kx^{2}\\) from memory.",
      "能量题先写 \\(E=K+U\\)，转折点令 \\(K=0\\)，再用 \\(U(x)\\le E\\) 判断允许区域。 · In energy problems, write \\(E=K+U\\), set \\(K=0\\) for turning points, and use \\(U(x)\\le E\\) for the allowed region."
    ],
    "related": [
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.1",
        "title": "动能定理 · Work–Energy Theorem",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "mech",
        "chapterId": "mech-u3",
        "code": "3.2",
        "title": "力与势能 · Forces and Potential Energy",
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
        "chapterId": "mech-u7",
        "code": "7.1",
        "title": "周期运动 · Periodic Motion",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "work-energy",
        "title": "功与机械能 · Work and mechanical energy"
      }
    ],
    "practiceHref": "#/mech/practice/mech-u3",
    "connections": [
      "上游：3.1 的动能定理与 3.2 的势能定义给出 \\(W=\\Delta K\\) 和 \\(\\Delta U=-W_{\\mathrm{cons}}\\)。 · Upstream: the work–energy theorem in 3.1 and the potential-energy definition in 3.2 give \\(W=\\Delta K\\) and \\(\\Delta U=-W_{\\mathrm{cons}}\\).",
      "下游：由 \\(U(x)\\) 的极小值可判断稳定平衡，并在平衡附近做小振动近似，连接到 7.1 的简谐振动。 · Downstream: minima of \\(U(x)\\) identify stable equilibrium and support small-oscillation approximations near equilibrium, connecting to simple harmonic motion in 7.1.",
      "与 2.8 的分工：2.8 关注弹簧力本身与串并联，3.5 关注该力做的功和对应的势能函数。 · Division of labor with 2.8: 2.8 focuses on the spring force itself and series/parallel combinations; 3.5 focuses on the work done by that force and the corresponding potential-energy function.",
      "工程与生物：非线性力—位移曲线普遍存在，势能函数是判断稳定性、断裂能和能量屏障的统一语言。 · Engineering and biology: nonlinear force–displacement curves are common, and potential-energy functions provide a unified language for stability, fracture energy, and energy barriers."
    ],
    "intuitionDetailed": "先看 \\(F_x\\)–\\(x\\) 图：力不是常数时，不能用一个矩形面积代替整段功；把曲线切成很多窄条，每条的面积为 \\(F_x\\mathrm{d}x\\)，负面积表示力与位移反向。再看 \\(U(x)\\)：它是“势能地形”，斜率告诉力的大小和方向，谷底是稳定平衡，山顶是不稳定平衡。理想弹簧的 \\(U\\) 是抛物线，所以力是线性的；非线性弹簧的 \\(U\\) 多了 \\(x^{4}\\) 项，但 \\(x^{4}\\) 是偶函数，势能仍关于 \\(x=0\\) 对称，只是曲线更陡；力 \\(F_x=-(kx+\\beta x^{3})\\) 是奇函数，仍是指向原点的恢复力，但不再与 \\(x\\) 成正比。若势能含 \\(\\gamma x^{3}\\) 这样的奇次项，才会出现不对称。能量图上的水平线 \\(E\\) 与 \\(U(x)\\) 的交点就是转折点，粒子只能在 \\(U\\le E\\) 的区域运动。 · Start with the \\(F_x\\)–\\(x\\) graph: when force is not constant, one rectangular area cannot represent the whole work; slice the curve into narrow strips, each with area \\(F_x\\mathrm{d}x\\), and negative area means force opposes displacement. Then read \\(U(x)\\) as potential-energy terrain: the slope gives the magnitude and direction of force, valleys are stable equilibrium, and hilltops are unstable. An ideal spring has a parabolic \\(U\\), so its force is linear; a nonlinear spring adds an \\(x^{4}\\) term, but \\(x^{4}\\) is even, so \\(U\\) remains symmetric about \\(x=0\\), just steeper; the force \\(F_x=-(kx+\\beta x^{3})\\) is odd and still restores toward the origin, but it is no longer proportional to \\(x\\). Asymmetry would require an odd term such as \\(\\gamma x^{3}\\) in \\(U(x)\\). On an energy diagram, intersections of the horizontal line \\(E\\) with \\(U(x)\\) are turning points, and the particle can move only where \\(U\\le E\\).",
    "development": [
      "画出 \\(F_x\\)–\\(x\\) 或 \\(U(x)\\) 图，标出坐标轴、单位和零点。 · Draw the \\(F_x\\)–\\(x\\) or \\(U(x)\\) graph and mark axes, units, and the zero point.",
      "判断是否需要分段；每段内力是常数还是可以用一个函数表示。 · Decide whether the motion must be split into segments and whether the force is constant or described by one function in each.",
      "用面积或积分求功，注意 \\(x\\) 轴下方为负。 · Find work from area or integration, remembering that area below the \\(x\\)-axis is negative.",
      "若给出 \\(U(x)\\)，求导得 \\(F_x\\)；若给出 \\(F_x\\)，积分得 \\(U(x)\\)，并检查负号。 · If \\(U(x)\\) is given, differentiate to get \\(F_x\\); if \\(F_x\\) is given, integrate to get \\(U(x)\\), checking the minus sign.",
      "用 \\(U'=0\\) 找平衡、用 \\(U''\\) 判断稳定性，再用 \\(E=K+U\\) 求转折点。 · Use \\(U'=0\\) for equilibrium, \\(U''\\) for stability, and \\(E=K+U\\) for turning points."
    ],
    "checks": [
      "为什么 \\(F\\)–\\(x\\) 图中 \\(x\\) 轴下方的面积代表负功？ · Why does area below the \\(x\\)-axis in an \\(F\\)–\\(x\\) graph represent negative work?",
      "若 \\(U(x)\\) 在 \\(x_0\\) 处有局部极大值，\\(x_0\\) 是稳定还是不稳定平衡？ · If \\(U(x)\\) has a local maximum at \\(x_0\\), is \\(x_0\\) stable or unstable equilibrium?",
      "非线性弹簧的 \\(F(x)\\) 给定后，如何求 \\(U(x)\\)？为什么不能只用 \\(\\dfrac{1}{2}kx^{2}\\)？ · Given \\(F(x)\\) for a nonlinear spring, how do you find \\(U(x)\\), and why is \\(\\dfrac{1}{2}kx^{2}\\) not enough?",
      "在 \\(E=K+U\\) 图中，粒子不能进入哪一区域？ · On an \\(E=K+U\\) diagram, which region can the particle not enter?"
    ],
    "vocabulary": [
      {
        "termZh": "变力",
        "termEn": "variable force",
        "defZh": "大小或方向随位置改变的力；做功必须积分或求面积。",
        "defEn": "A force whose magnitude or direction changes with position; its work requires integration or area."
      },
      {
        "termZh": "元功",
        "termEn": "infinitesimal work",
        "defZh": "微小位移上做的功 \\(F_x\\,\\mathrm{d}x\\)，积分后得到总功。",
        "defEn": "The work \\(F_x\\,\\mathrm{d}x\\) over an infinitesimal displacement; integrating gives the total work."
      },
      {
        "termZh": "势能函数",
        "termEn": "potential-energy function",
        "defZh": "描述保守力做功能力的函数 \\(U(x)\\)，满足 \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)。",
        "defEn": "A function \\(U(x)\\) describing the work available from a conservative force, with \\(F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}\\)."
      },
      {
        "termZh": "保守力",
        "termEn": "conservative force",
        "defZh": "做功只依赖初末位置、可以定义势能的力。",
        "defEn": "A force whose work depends only on initial and final positions and for which a potential energy can be defined."
      },
      {
        "termZh": "平衡位置",
        "termEn": "equilibrium position",
        "defZh": "合力为零的位置，即 \\(U'(x)=0\\)。",
        "defEn": "A position where the net force is zero, i.e. \\(U'(x)=0\\)."
      },
      {
        "termZh": "稳定平衡",
        "termEn": "stable equilibrium",
        "defZh": "势能的局部极小点；小位移后力把物体推回平衡位置。",
        "defEn": "A local minimum of potential energy; after a small displacement the force pushes the object back."
      },
      {
        "termZh": "不稳定平衡",
        "termEn": "unstable equilibrium",
        "defZh": "势能的局部极大点；小位移后力把物体推离平衡位置。",
        "defEn": "A local maximum of potential energy; after a small displacement the force pushes the object away."
      },
      {
        "termZh": "转折点",
        "termEn": "turning point",
        "defZh": "动能为零、运动方向反转的位置，满足 \\(U(x)=E\\)。",
        "defEn": "A position where kinetic energy is zero and motion reverses, satisfying \\(U(x)=E\\)."
      }
    ]
  }
};
