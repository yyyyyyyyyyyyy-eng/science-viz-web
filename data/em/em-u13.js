export const UNIT = {
  "id": "em-u13",
  "code": "13",
  "titleZh": "电磁感应",
  "titleEn": "Electromagnetic Induction",
  "subject": "em",
  "layer": "ap"
};
export const TOPICS = {
  "13.1": {
    "id": "em/em-u13/13.1",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.1",
    "titleZh": "磁通量",
    "titleEn": "Magnetic Flux",
    "layer": "ap",
    "summary": "磁通量 · Magnetic Flux",
    "learningObjectives": [
      "能陈述「磁通量」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Magnetic Flux：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "磁通量（Magnetic Flux）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「磁通量」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\Phi_B=\\int\\vec B\\cdot\\mathrm{d}\\vec A",
        "note": "磁通量定义。"
      },
      {
        "latex": "\\Phi_B=BA\\cos\\theta",
        "note": "匀强场穿过平面。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「磁通量」的工作方程或机制链。"
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
      "θ 为 B 与面法线的夹角",
      "面积矢量方向与回路绕向满足右手定则",
      "闭合曲面净磁通为零"
    ],
    "keyPoints": [
      "掌握 13.1「磁通量」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「磁通量」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「磁通量」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\Phi_B=BA\\cos\\theta"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「磁通量」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「磁通量」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「磁通量」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「磁通量」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「磁通量」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「磁通量」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.2": {
    "id": "em/em-u13/13.2",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.2",
    "titleZh": "电磁感应",
    "titleEn": "Electromagnetic Induction",
    "layer": "ap",
    "summary": "电磁感应 · Electromagnetic Induction",
    "learningObjectives": [
      "能陈述「电磁感应」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electromagnetic Induction：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电磁感应（Electromagnetic Induction）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电磁感应」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "法拉第电磁感应定律。"
      },
      {
        "latex": "\\varepsilon=-N\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "N 匝线圈。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电磁感应」的工作方程或机制链。"
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
      "闭合回路；磁通量随时间变化",
      "负号表示楞次定律：感应电流反抗磁通变化",
      "线圈电阻决定感应电流大小"
    ],
    "keyPoints": [
      "掌握 13.2「电磁感应」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电磁感应」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电磁感应」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电磁感应」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电磁感应」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电磁感应」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.1",
        "title": "磁通量",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.3",
        "title": "感应电流与磁力",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电磁感应」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电磁感应」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电磁感应」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.3": {
    "id": "em/em-u13/13.3",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.3",
    "titleZh": "感应电流与磁力",
    "titleEn": "Induced Currents and Magnetic Forces",
    "layer": "ap",
    "summary": "导体棒在匀强磁场中的导轨上滑动时，棒内自由电荷受洛伦兹力驱动，产生动生电动势 \\(\\varepsilon=BLv\\)；闭合回路中的感应电流由楞次定律定方向，并受到磁力 \\(\\vec F=I\\vec L\\times\\vec B\\)。该磁力总是阻碍相对运动，形成磁阻力；外力拉棒做的机械功最终等于电阻中的焦耳热。 · When a conducting bar slides on rails in a uniform magnetic field, the Lorentz force on its charge carriers produces a motional emf \\(\\varepsilon=BLv\\); Lenz's law sets the direction of the induced current in the closed loop, and the current experiences a magnetic force \\(\\vec F=I\\vec L\\times\\vec B\\). This force always opposes the relative motion, acting as a magnetic drag; the mechanical work done by the external agent pulling the bar ends up as Joule heating in the resistor.",
    "learningObjectives": [
      "能计算导轨上滑动导体棒的动生电动势 \\(\\varepsilon=BLv\\)、感应电流 \\(I=\\dfrac{\\varepsilon}{R}\\) 与磁阻力 \\(F_B=\\dfrac{B^2L^2v}{R}\\)，并说明各量的方向。 · Calculate the motional emf \\(\\varepsilon=BLv\\), induced current \\(I=\\dfrac{\\varepsilon}{R}\\), and magnetic drag \\(F_B=\\dfrac{B^2L^2v}{R}\\) for a bar sliding on rails, and state the direction of each quantity.",
      "能用楞次定律判断线框进入、离开磁场区域时的感应电流方向，并用 \\(\\vec F=I\\vec L\\times\\vec B\\) 说明磁力为什么总阻碍运动。 · Use Lenz's law to determine the direction of the induced current as a loop enters or leaves a field region, and use \\(\\vec F=I\\vec L\\times\\vec B\\) to explain why the magnetic force always opposes the motion.",
      "能对滑棒或进、出场线框做能量簿记：外力做的机械功、动能变化与焦耳热 \\(I^2Rt\\) 之间的关系，并求匀速或终端速度。 · Keep energy accounts for a sliding bar or an entering/leaving loop: relate the mechanical work by the external agent, the change in kinetic energy, and Joule heating \\(I^2Rt\\), and find the constant or terminal speed.",
      "能分析 \\(\\Phi_B\\)、\\(\\varepsilon\\)、\\(I\\)、\\(F_B\\) 随时间或位置变化的图像，并指出匀速、加速与完全进入场区后的差别。 · Analyze graphs of \\(\\Phi_B\\), \\(\\varepsilon\\), \\(I\\), and \\(F_B\\) versus time or position, and distinguish constant-speed motion, acceleration, and the moment when the loop is fully inside the field."
    ],
    "essentialKnowledge": [
      "磁通量 \\(\\Phi_B=BA\\cos\\theta\\)；只有穿过回路的磁通量发生变化，才有感应电动势。 · Magnetic flux is \\(\\Phi_B=BA\\cos\\theta\\); an induced emf requires a changing magnetic flux through the loop.",
      "法拉第定律 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 给出感应电动势的大小与方向，负号体现楞次定律。 · Faraday's law \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) gives the magnitude and direction of the induced emf; the minus sign expresses Lenz's law.",
      "导体棒垂直切割磁感线时，动生电动势 \\(\\varepsilon=BLv\\)；若 \\(\\vec v\\)、\\(\\vec B\\)、\\(\\vec L\\) 不两两垂直，应取垂直分量。 · When a bar cuts magnetic field lines perpendicularly, the motional emf is \\(\\varepsilon=BLv\\); if \\(\\vec v\\), \\(\\vec B\\), and \\(\\vec L\\) are not mutually perpendicular, use the perpendicular components.",
      "闭合回路中 \\(I=\\dfrac{\\varepsilon}{R}\\)；电动势存在但回路断开时没有持续电流。 · In a closed loop \\(I=\\dfrac{\\varepsilon}{R}\\); an emf can exist with no sustained current if the loop is open.",
      "楞次定律：感应电流的磁场总是阻碍原磁通量的变化；因此线框进入磁场时感应电流的方向与离开时相反。 · Lenz's law: the magnetic field of the induced current always opposes the change in the original magnetic flux; hence the current direction when a loop enters a field is opposite to that when it leaves.",
      "载流导线在磁场中受力 \\(\\vec F=I\\vec L\\times\\vec B\\)，大小为 \\(F=BIL\\sin\\theta\\)；滑棒情形中力沿导轨方向且与速度反向。 · A current-carrying wire in a magnetic field experiences \\(\\vec F=I\\vec L\\times\\vec B\\), with magnitude \\(F=BIL\\sin\\theta\\); for a sliding bar the force is along the rails and opposite to the velocity.",
      "滑棒的磁阻力 \\(F_B=BIL=\\dfrac{B^2L^2v}{R}\\)，随速度增大而增大；它不依赖外加力，只由瞬间速度决定。 · The magnetic drag on the bar is \\(F_B=BIL=\\dfrac{B^2L^2v}{R}\\), which grows with speed and depends on the instantaneous speed, not on the applied force.",
      "能量簿记：匀速时 \\(F_{\\mathrm{app}}v=I^2R\\)；若没有外力，棒的动能全部转化为焦耳热 \\(\\dfrac{1}{2}mv_0^2\\)。 · Energy accounting: at constant speed \\(F_{\\mathrm{app}}v=I^2R\\); without an external force, the bar's kinetic energy is entirely converted into Joule heat \\(\\dfrac{1}{2}mv_0^2\\).",
      "恒定外力下，滑棒趋于终端速度 \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\)，时间常数为 \\(\\tau=\\dfrac{mR}{B^2L^2}\\)。 · Under a constant applied force, the bar approaches the terminal speed \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\), with time constant \\(\\tau=\\dfrac{mR}{B^2L^2}\\).",
      "线框完全进入匀强磁场后，磁通量不变，感应电动势与感应电流都为零；进入和离开的过程中才有电流。 · Once a loop is completely inside a uniform field, the flux is constant, so the induced emf and current are both zero; current flows only while entering or leaving."
    ],
    "definition": "感应电流与磁力（Induced Currents and Magnetic Forces）：当穿过闭合回路的磁通量变化时，回路中出现感应电动势 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)，并由此产生感应电流 \\(I=\\dfrac{\\varepsilon}{R}\\)。在滑棒—导轨模型中，动生电动势为 \\(\\varepsilon=BLv\\)；磁场对这段感应电流的作用力为 \\(\\vec F=I\\vec L\\times\\vec B\\)，大小 \\(F=BIL\\)（\\(\\vec L\\perp\\vec B\\)），方向由右手定则确定。该磁力总是阻碍导体与磁场之间的相对运动，因而称为磁阻力或回推阻力；外力为维持运动所做的机械功最终在电阻中转化为焦耳热。 · Induced currents and magnetic forces: when the magnetic flux through a closed loop changes, an induced emf \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) appears, driving an induced current \\(I=\\dfrac{\\varepsilon}{R}\\). In the sliding-bar/rail model the motional emf is \\(\\varepsilon=BLv\\), and the magnetic force on the induced current is \\(\\vec F=I\\vec L\\times\\vec B\\), with magnitude \\(F=BIL\\) when \\(\\vec L\\perp\\vec B\\), direction given by the right-hand rule. This force always opposes the relative motion between the conductor and the field, so it is called magnetic drag or back force; the mechanical work done by an external agent to maintain the motion eventually becomes Joule heat in the resistor.",
    "intuition": "把滑棒想成一台“发电机”：棒中的自由电荷随棒一起运动，在磁场中受到洛伦兹力，被推到棒的一端，于是棒两端出现电势差。接上导轨和电阻后，这个电势差驱动电流；而电流一旦流过棒，磁场又对它施加一个与运动方向相反的力，像“磁刹车”。 · Think of the sliding bar as a generator: free charges in the bar move with it, feel a Lorentz force in the magnetic field, and are pushed toward one end, creating a potential difference across the bar. Once the rails and resistor close the circuit, this potential difference drives a current; the current in the bar then feels a magnetic force opposite to the motion, like a magnetic brake.",
    "formulas": [
      {
        "latex": "\\Phi_B=BA\\cos\\theta",
        "note": "匀强磁场中穿过回路的磁通量；\\(\\theta\\) 是 \\(\\vec B\\) 与面法线的夹角。 · Magnetic flux through a loop in a uniform field; \\(\\theta\\) is the angle between \\(\\vec B\\) and the surface normal."
      },
      {
        "latex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "法拉第电磁感应定律；负号表示感应效果阻碍磁通量变化。 · Faraday's law of induction; the minus sign means the induced effect opposes the change in flux."
      },
      {
        "latex": "\\varepsilon=BLv",
        "note": "导体棒、速度与磁场两两垂直时的动生电动势。 · Motional emf when the bar, velocity, and magnetic field are mutually perpendicular."
      },
      {
        "latex": "I=\\dfrac{\\varepsilon}{R}",
        "note": "闭合回路的感应电流；\\(R\\) 为回路总电阻。 · Induced current in a closed loop; \\(R\\) is the total loop resistance."
      },
      {
        "latex": "\\vec F=I\\vec L\\times\\vec B",
        "note": "磁场对感应电流的作用力；\\(\\vec L\\) 沿电流方向。 · Magnetic force on the induced current; \\(\\vec L\\) points along the current."
      },
      {
        "latex": "F_B=BIL=\\dfrac{B^2L^2v}{R}",
        "note": "滑棒所受磁阻力的大小；方向与速度相反。 · Magnitude of the magnetic drag on the sliding bar; it points opposite to the velocity."
      },
      {
        "latex": "P_{\\mathrm{mech}}=F_{\\mathrm{app}}v=I^2R=\\dfrac{\\varepsilon^2}{R}",
        "note": "匀速时的功率平衡：外力功率等于焦耳热功率。 · Power balance at constant speed: the external mechanical power equals the Joule heating rate."
      },
      {
        "latex": "v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2},\\quad \\tau=\\dfrac{mR}{B^2L^2}",
        "note": "恒定外力下的终端速度与趋近终端速度的时间常数。 · Terminal speed under a constant applied force and the time constant for approaching it."
      }
    ],
    "derivationNotes": [
      {
        "from": "磁通量变化 · Changing magnetic flux",
        "to": "感应电动势 · Induced emf",
        "note": "法拉第定律 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)；对滑棒，面积变化率 \\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=Lv\\)，故 \\(|\\varepsilon|=BLv\\)。 · Faraday's law \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\); for a sliding bar the area changes at \\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=Lv\\), so \\(|\\varepsilon|=BLv\\)."
      },
      {
        "from": "感应电动势 · Induced emf",
        "to": "感应电流 · Induced current",
        "note": "闭合回路欧姆定律 \\(I=\\dfrac{\\varepsilon}{R}\\)；电流方向由楞次定律确定。 · Ohm's law for the closed loop, \\(I=\\dfrac{\\varepsilon}{R}\\); Lenz's law sets the current direction."
      },
      {
        "from": "感应电流 · Induced current",
        "to": "磁力 · Magnetic force",
        "note": "\\(\\vec F=I\\vec L\\times\\vec B\\)；棒中电流与 \\(\\vec B\\) 垂直时大小为 \\(F=BIL\\)。 · \\(\\vec F=I\\vec L\\times\\vec B\\); when the current in the bar is perpendicular to \\(\\vec B\\), the magnitude is \\(F=BIL\\)."
      },
      {
        "from": "磁力 · Magnetic force",
        "to": "磁阻力公式 · Drag formula",
        "note": "代入 \\(I=\\dfrac{BLv}{R}\\) 得 \\(F_B=BIL=\\dfrac{B^2L^2v}{R}\\)；力随速度线性增大。 · Substituting \\(I=\\dfrac{BLv}{R}\\) gives \\(F_B=BIL=\\dfrac{B^2L^2v}{R}\\); the drag grows linearly with speed."
      },
      {
        "from": "功率平衡 · Power balance",
        "to": "能量守恒 · Energy conservation",
        "note": "匀速时 \\(F_{\\mathrm{app}}=F_B\\)，故 \\(F_{\\mathrm{app}}v=I^2R\\)；外力做正功，磁力对棒做负功，电能最终变为焦耳热。 · At constant speed \\(F_{\\mathrm{app}}=F_B\\), so \\(F_{\\mathrm{app}}v=I^2R\\); the external agent does positive work, the magnetic force does negative work on the bar, and the electrical energy ends up as Joule heat."
      },
      {
        "from": "无外力滑行 · Bar sliding without an external force",
        "to": "指数衰减 · Exponential decay",
        "note": "\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\)，解得 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，\\(\\tau=\\dfrac{mR}{B^2L^2}\\)。 · \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\), so \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) with \\(\\tau=\\dfrac{mR}{B^2L^2}\\)."
      },
      {
        "from": "线框进入场区 · Loop entering the field",
        "to": "电流与磁力 · Current and force",
        "note": "\\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=BLv\\)，故 \\(\\varepsilon=BLv\\)、\\(I=\\dfrac{BLv}{R}\\)；前边受力向后。完全进入后 \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=0\\)，电流与磁力都消失。 · \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=BLv\\), so \\(\\varepsilon=BLv\\) and \\(I=\\dfrac{BLv}{R}\\); the leading side feels a backward force. Once fully inside, \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=0\\) and both current and force vanish."
      },
      {
        "from": "线框离开场区 · Loop leaving the field",
        "to": "楞次定律 · Lenz's law",
        "note": "磁通量减少，感应电流反向；但受力边变为后边，\\(\\vec L\\times\\vec B\\) 仍给出与速度相反的力。 · The flux decreases, so the induced current reverses; however, the force now acts on the trailing side, and \\(\\vec L\\times\\vec B\\) still gives a force opposite to the velocity."
      }
    ],
    "conditions": [
      "磁场在相关区域内均匀且恒定；导体棒、导轨与磁场两两垂直（或取垂直分量）。 · The field is uniform and steady over the relevant region; the bar, rails, and field are mutually perpendicular (or use perpendicular components).",
      "回路闭合且总电阻为 \\(R\\)；忽略导轨与接触电阻时，\\(R\\) 就是外接电阻。 · The loop is closed with total resistance \\(R\\); if rail and contact resistances are neglected, \\(R\\) is the external resistor.",
      "除非题目特别说明，忽略回路的自感、摩擦与辐射；滑棒质量 \\(m\\) 只用于加速或减速过程。 · Unless stated otherwise, neglect self-inductance, friction, and radiation; the bar mass \\(m\\) matters only during acceleration or deceleration.",
      "楞次定律与右手定则用于方向判断；电流方向取正电荷的流动方向。 · Use Lenz's law and the right-hand rule for directions; current direction is the flow of positive charge.",
      "匀速运动需要外力与磁阻力平衡；若撤去外力，棒将减速，能量簿记必须包含动能变化。 · Constant-speed motion requires the applied force to balance the drag; if the external force is removed, the bar slows and the energy account must include the change in kinetic energy.",
      "线框进入或离开场区时，磁场边界清晰、线框边与边界平行；完全进入匀强场区后磁通量不变。 · When a loop enters or leaves a field region, the boundary is sharp and the loop side is parallel to it; once fully inside a uniform region the flux is constant.",
      "磁力对宏观导体棒做负功，但磁场对单个运动电荷不做功；能量转换来自动生电动势对电荷的作用。 · The magnetic force does negative work on the macroscopic bar, but the magnetic field does no work on an individual moving charge; the energy conversion comes from the motional emf acting on the charges."
    ],
    "keyPoints": [
      "磁通量变化是感应电动势的前提；滑棒中面积以 \\(Lv\\) 的速率增大。 · A changing flux is required for an induced emf; for a sliding bar the area grows at rate \\(Lv\\).",
      "动生电动势 \\(\\varepsilon=BLv\\)，感应电流 \\(I=\\dfrac{BLv}{R}\\)，磁阻力 \\(F_B=\\dfrac{B^2L^2v}{R}\\)。 · Motional emf \\(\\varepsilon=BLv\\), induced current \\(I=\\dfrac{BLv}{R}\\), and magnetic drag \\(F_B=\\dfrac{B^2L^2v}{R}\\).",
      "楞次定律：感应电流的磁场阻碍原磁通量变化；线框进入与离开时电流方向相反。 · Lenz's law: the induced current's field opposes the change in flux; the current directions when entering and leaving are opposite.",
      "磁力 \\(\\vec F=I\\vec L\\times\\vec B\\) 总是阻碍相对运动；这正是楞次定律的能量含义。 · The magnetic force \\(\\vec F=I\\vec L\\times\\vec B\\) always opposes the relative motion; this is the energy meaning of Lenz's law.",
      "匀速时外力功率等于焦耳热功率：\\(F_{\\mathrm{app}}v=I^2R\\)。 · At constant speed the external power equals the Joule heating rate: \\(F_{\\mathrm{app}}v=I^2R\\).",
      "无外力时滑棒按 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) 减速，\\(\\tau=\\dfrac{mR}{B^2L^2}\\)，初动能全部变为焦耳热。 · Without an external force the bar decelerates as \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) with \\(\\tau=\\dfrac{mR}{B^2L^2}\\), and its initial kinetic energy all becomes Joule heat.",
      "恒定外力下终端速度 \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\)；速度越大，磁阻力越大，最终与外力平衡。 · Under a constant applied force the terminal speed is \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\); a larger speed gives a larger drag until it balances the applied force.",
      "线框完全进入匀强磁场后 \\(\\Phi_B\\) 不变，\\(\\varepsilon=0\\)、\\(I=0\\)、\\(F_B=0\\)。 · Once a loop is fully inside a uniform field, \\(\\Phi_B\\) is constant, so \\(\\varepsilon=0\\), \\(I=0\\), and \\(F_B=0\\).",
      "通过导线截面的电荷量 \\(q=\\dfrac{\\Delta\\Phi_B}{R}\\)，与速度大小无关（只取决于磁通量变化）。 · The charge passing a cross section is \\(q=\\dfrac{\\Delta\\Phi_B}{R}\\), independent of speed and determined only by the flux change.",
      "图像题先看斜率：\\(\\Phi_B\\)–\\(t\\) 斜率的绝对值给出 \\(|\\varepsilon|\\)；\\(\\varepsilon\\)–\\(t\\) 与 \\(I\\)–\\(t\\) 形状相同（相差 \\(R\\)）。 · For graph problems read slopes first: the absolute slope of \\(\\Phi_B\\)–\\(t\\) gives \\(|\\varepsilon|\\); \\(\\varepsilon\\)–\\(t\\) and \\(I\\)–\\(t\\) have the same shape up to the factor \\(R\\)."
    ],
    "misconceptions": [
      "认为只要有磁场就有感应电流；实际上必须磁通量变化且回路闭合。 · Thinking any magnetic field produces an induced current; the flux must change and the loop must be closed.",
      "把楞次定律理解为感应电流的磁场总与原磁场反向；它阻碍的是磁通量的“变化”，不是原磁场本身。 · Reading Lenz's law as “the induced field is always opposite to the original field”; it opposes the change in flux, not the original field itself.",
      "认为线框进入和离开磁场时感应电流方向相同；两种过程的磁通量变化方向相反，电流方向也相反。 · Thinking the induced current has the same direction when a loop enters and leaves; the flux changes in opposite senses, so the current directions are opposite.",
      "认为磁力总是帮助线框运动或做正功；磁力阻碍相对运动，对棒做负功，能量由外力或动能提供。 · Thinking the magnetic force helps the loop move or does positive work; it opposes relative motion and does negative work on the bar, with energy supplied by the external agent or kinetic energy.",
      "用 \\(F=BIL\\) 时不检查垂直条件；一般情况下必须用 \\(\\vec F=I\\vec L\\times\\vec B\\)，大小为 \\(BIL\\sin\\theta\\)。 · Using \\(F=BIL\\) without checking perpendicularity; in general use \\(\\vec F=I\\vec L\\times\\vec B\\), with magnitude \\(BIL\\sin\\theta\\).",
      "认为磁阻力与外力成正比；\\(F_B=\\dfrac{B^2L^2v}{R}\\) 只由瞬时速度决定，外力通过改变速度间接影响它。 · Thinking the drag is proportional to the applied force; \\(F_B=\\dfrac{B^2L^2v}{R}\\) depends on the instantaneous speed, and the applied force affects it only through the speed.",
      "认为线框完全进入磁场后仍有感应电流；此时磁通量不变，感应电动势为零。 · Thinking a current still flows after the loop is fully inside the field; the flux is then constant and the induced emf is zero.",
      "把电动势与路端电压混为一谈；棒本身有电阻时，路端电压小于电动势。 · Confusing emf with terminal voltage; when the bar itself has resistance, the terminal voltage is less than the emf.",
      "能量簿记时只算焦耳热而忽略动能变化；加速或减速过程中必须同时计入 \\(\\Delta K\\)。 · Counting only Joule heat and ignoring changes in kinetic energy; during acceleration or deceleration \\(\\Delta K\\) must be included.",
      "判断电流方向时把电子运动方向当作电流方向；电路中的电流方向按正电荷流动定义。 · Using electron drift direction as the current direction; current is defined by the flow of positive charge."
    ],
    "examples": [
      {
        "title": "例 1 · 滑棒上的动生电动势与磁阻力 · Example 1: Motional emf and magnetic drag on a sliding bar",
        "prompt": "长 \\(L=0.40\\,\\mathrm{m}\\) 的导体棒在相距 \\(0.40\\,\\mathrm{m}\\) 的平行导轨上以 \\(v=2.0\\,\\mathrm{m/s}\\) 向右匀速滑动，匀强磁场 \\(B=0.50\\,\\mathrm{T}\\) 垂直纸面向里，回路总电阻 \\(R=0.20\\,\\Omega\\)。(a) 求动生电动势与感应电流；(b) 求棒所受的磁阻力；(c) 求外力维持匀速所需的功率。 · A \\(0.40\\,\\mathrm{m}\\) bar slides to the right at \\(v=2.0\\,\\mathrm{m/s}\\) on parallel rails \\(0.40\\,\\mathrm{m}\\) apart, in a uniform \\(0.50\\,\\mathrm{T}\\) field into the page; the loop resistance is \\(0.20\\,\\Omega\\). (a) Find the motional emf and induced current; (b) find the magnetic drag on the bar; (c) find the external power needed to maintain constant speed.",
        "steps": [
          "磁通量变化率：面积以 \\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=Lv\\) 增大，故 \\(|\\varepsilon|=\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=BLv\\)。 · Rate of flux change: the area grows at \\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=Lv\\), so \\(|\\varepsilon|=\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=BLv\\).",
          "\\(\\varepsilon=(0.50)(0.40)(2.0)=0.40\\,\\mathrm{V}\\)，\\(I=\\dfrac{\\varepsilon}{R}=\\dfrac{0.40}{0.20}=2.0\\,\\mathrm{A}\\)。 · \\(\\varepsilon=(0.50)(0.40)(2.0)=0.40\\,\\mathrm{V}\\) and \\(I=\\dfrac{\\varepsilon}{R}=\\dfrac{0.40}{0.20}=2.0\\,\\mathrm{A}\\).",
          "方向：磁通量向里增大，感应磁场向外，电流逆时针；棒中电流向上。 · Direction: the flux into the page is increasing, so the induced field points out of the page and the current is counterclockwise; the current in the bar is upward.",
          "\\(F_B=BIL=(0.50)(2.0)(0.40)=0.40\\,\\mathrm{N}\\)，方向向左，与速度相反。 · \\(F_B=BIL=(0.50)(2.0)(0.40)=0.40\\,\\mathrm{N}\\), directed to the left, opposite to the velocity.",
          "匀速时 \\(F_{\\mathrm{app}}=F_B\\)，\\(P=F_{\\mathrm{app}}v=(0.40)(2.0)=0.80\\,\\mathrm{W}\\)；也可由 \\(I^2R=(2.0)^2(0.20)=0.80\\,\\mathrm{W}\\) 检验。 · At constant speed \\(F_{\\mathrm{app}}=F_B\\), so \\(P=F_{\\mathrm{app}}v=(0.40)(2.0)=0.80\\,\\mathrm{W}\\); equivalently \\(I^2R=(2.0)^2(0.20)=0.80\\,\\mathrm{W}\\)."
        ],
        "solution": "\\(\\varepsilon=0.40\\,\\mathrm{V}\\)，\\(I=2.0\\,\\mathrm{A}\\)，\\(F_B=0.40\\,\\mathrm{N}\\)（向左），\\(P=0.80\\,\\mathrm{W}\\)。 · \\(\\varepsilon=0.40\\,\\mathrm{V}\\), \\(I=2.0\\,\\mathrm{A}\\), \\(F_B=0.40\\,\\mathrm{N}\\) to the left, and \\(P=0.80\\,\\mathrm{W}\\).",
        "solutionLatex": "\\varepsilon=BLv=0.40\\,\\mathrm{V},\\quad I=2.0\\,\\mathrm{A},\\quad F_B=0.40\\,\\mathrm{N},\\quad P=0.80\\,\\mathrm{W}"
      },
      {
        "title": "例 2 · 恒定外力下的终端速度 · Example 2: Terminal speed under a constant applied force",
        "prompt": "质量 \\(m=0.30\\,\\mathrm{kg}\\) 的导体棒在 \\(B=0.80\\,\\mathrm{T}\\) 的匀强磁场中沿导轨滑动，棒长 \\(L=0.50\\,\\mathrm{m}\\)，回路总电阻 \\(R=0.25\\,\\Omega\\)。用恒定的水平外力 \\(F_{\\mathrm{app}}=0.60\\,\\mathrm{N}\\) 拉棒。(a) 求终端速度；(b) 求 \\(t=0\\) 时的加速度；(c) 求终端速度时外力的功率。 · A bar of mass \\(m=0.30\\,\\mathrm{kg}\\) slides on rails in a uniform \\(0.80\\,\\mathrm{T}\\) field; its length is \\(L=0.50\\,\\mathrm{m}\\) and the loop resistance is \\(R=0.25\\,\\Omega\\). A constant horizontal force \\(F_{\\mathrm{app}}=0.60\\,\\mathrm{N}\\) pulls the bar. (a) Find the terminal speed; (b) find the acceleration at \\(t=0\\); (c) find the power delivered by the applied force at terminal speed.",
        "steps": [
          "终端速度时 \\(F_{\\mathrm{app}}=F_B=\\dfrac{B^2L^2v_t}{R}\\)，故 \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\)。 · At terminal speed \\(F_{\\mathrm{app}}=F_B=\\dfrac{B^2L^2v_t}{R}\\), so \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\).",
          "\\(B^2L^2=(0.80)^2(0.50)^2=0.16\\,\\mathrm{T^2\\,m^2}\\)，\\(v_t=\\dfrac{(0.60)(0.25)}{0.16}=0.94\\,\\mathrm{m/s}\\)。 · \\(B^2L^2=(0.80)^2(0.50)^2=0.16\\,\\mathrm{T^2\\,m^2}\\), so \\(v_t=\\dfrac{(0.60)(0.25)}{0.16}=0.94\\,\\mathrm{m/s}\\).",
          "\\(t=0\\) 时 \\(v=0\\)，无磁阻力，\\(a=\\dfrac{F_{\\mathrm{app}}}{m}=\\dfrac{0.60}{0.30}=2.0\\,\\mathrm{m/s^2}\\)。 · At \\(t=0\\), \\(v=0\\) and there is no drag, so \\(a=\\dfrac{F_{\\mathrm{app}}}{m}=\\dfrac{0.60}{0.30}=2.0\\,\\mathrm{m/s^2}\\).",
          "终端时 \\(P=F_{\\mathrm{app}}v_t=(0.60)(0.9375)=0.56\\,\\mathrm{W}\\)；又 \\(I=\\dfrac{BLv_t}{R}=1.5\\,\\mathrm{A}\\)，\\(I^2R=(1.5)^2(0.25)=0.56\\,\\mathrm{W}\\)。 · At terminal speed \\(P=F_{\\mathrm{app}}v_t=(0.60)(0.9375)=0.56\\,\\mathrm{W}\\); also \\(I=\\dfrac{BLv_t}{R}=1.5\\,\\mathrm{A}\\) and \\(I^2R=(1.5)^2(0.25)=0.56\\,\\mathrm{W}\\).",
          "时间常数 \\(\\tau=\\dfrac{mR}{B^2L^2}=\\dfrac{(0.30)(0.25)}{0.16}=0.47\\,\\mathrm{s}\\)，速度按 \\(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) 趋近终端值。 · The time constant is \\(\\tau=\\dfrac{mR}{B^2L^2}=\\dfrac{(0.30)(0.25)}{0.16}=0.47\\,\\mathrm{s}\\), and the speed approaches the terminal value as \\(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)."
        ],
        "solution": "\\(v_t\\approx0.94\\,\\mathrm{m/s}\\)，\\(a_0=2.0\\,\\mathrm{m/s^2}\\)，\\(P=0.56\\,\\mathrm{W}\\)。 · \\(v_t\\approx0.94\\,\\mathrm{m/s}\\), \\(a_0=2.0\\,\\mathrm{m/s^2}\\), and \\(P=0.56\\,\\mathrm{W}\\).",
        "solutionLatex": "v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}=0.94\\,\\mathrm{m/s},\\quad a_0=2.0\\,\\mathrm{m/s^2},\\quad P=0.56\\,\\mathrm{W}"
      },
      {
        "title": "例 3 · 线框进入磁场区 · Example 3: A loop entering a field region",
        "prompt": "边长 \\(L=0.20\\,\\mathrm{m}\\)、电阻 \\(R=0.10\\,\\Omega\\) 的正方形线框以 \\(v=3.0\\,\\mathrm{m/s}\\) 匀速进入宽磁场区，\\(B=0.50\\,\\mathrm{T}\\) 垂直纸面向里。(a) 求线框进入过程中感应电流的大小与方向；(b) 求磁力；(c) 求线框完全进入前通过导线截面的电荷量；(d) 验证外力功等于焦耳热。 · A square loop of side \\(L=0.20\\,\\mathrm{m}\\) and resistance \\(R=0.10\\,\\Omega\\) enters a wide field region at constant \\(v=3.0\\,\\mathrm{m/s}\\); \\(B=0.50\\,\\mathrm{T}\\) into the page. (a) Find the magnitude and direction of the induced current while entering; (b) find the magnetic force; (c) find the charge that passes a cross section before the loop is fully inside; (d) verify that the external work equals the Joule heat.",
        "steps": [
          "进入时只有前边切割磁感线，\\(\\varepsilon=BLv=(0.50)(0.20)(3.0)=0.30\\,\\mathrm{V}\\)，\\(I=\\dfrac{\\varepsilon}{R}=3.0\\,\\mathrm{A}\\)。 · While entering, only the leading side cuts field lines: \\(\\varepsilon=BLv=(0.50)(0.20)(3.0)=0.30\\,\\mathrm{V}\\) and \\(I=\\dfrac{\\varepsilon}{R}=3.0\\,\\mathrm{A}\\).",
          "磁通量向里增大，感应磁场向外，电流逆时针；前边受力 \\(F_B=BIL=(0.50)(3.0)(0.20)=0.30\\,\\mathrm{N}\\)，方向向左。 · The flux into the page increases, so the induced field points out of the page and the current is counterclockwise; the force on the leading side is \\(F_B=BIL=(0.50)(3.0)(0.20)=0.30\\,\\mathrm{N}\\) to the left.",
          "电荷量 \\(q=\\dfrac{\\Delta\\Phi_B}{R}=\\dfrac{BL^2}{R}=\\dfrac{(0.50)(0.20)^2}{0.10}=0.20\\,\\mathrm{C}\\)。 · The charge is \\(q=\\dfrac{\\Delta\\Phi_B}{R}=\\dfrac{BL^2}{R}=\\dfrac{(0.50)(0.20)^2}{0.10}=0.20\\,\\mathrm{C}\\).",
          "进入时间 \\(t=\\dfrac{L}{v}=0.0667\\,\\mathrm{s}\\)；外力功 \\(W=F_BL=(0.30)(0.20)=0.060\\,\\mathrm{J}\\)；焦耳热 \\(I^2Rt=(3.0)^2(0.10)(0.0667)=0.060\\,\\mathrm{J}\\)。 · The entering time is \\(t=\\dfrac{L}{v}=0.0667\\,\\mathrm{s}\\); the external work is \\(W=F_BL=(0.30)(0.20)=0.060\\,\\mathrm{J}\\), and the Joule heat is \\(I^2Rt=(3.0)^2(0.10)(0.0667)=0.060\\,\\mathrm{J}\\).",
          "完全进入后磁通量不变，\\(\\varepsilon=0\\)、\\(I=0\\)、\\(F_B=0\\)；离开时电流反向，但磁力仍阻碍运动。 · Once fully inside, the flux is constant, so \\(\\varepsilon=0\\), \\(I=0\\), and \\(F_B=0\\); while leaving, the current reverses but the magnetic force still opposes the motion."
        ],
        "solution": "进入时 \\(I=3.0\\,\\mathrm{A}\\)（逆时针），\\(F_B=0.30\\,\\mathrm{N}\\)（向左），\\(q=0.20\\,\\mathrm{C}\\)，\\(W=Q=0.060\\,\\mathrm{J}\\)。 · While entering, \\(I=3.0\\,\\mathrm{A}\\) counterclockwise, \\(F_B=0.30\\,\\mathrm{N}\\) to the left, \\(q=0.20\\,\\mathrm{C}\\), and \\(W=Q=0.060\\,\\mathrm{J}\\).",
        "solutionLatex": "I=3.0\\,\\mathrm{A},\\quad F_B=0.30\\,\\mathrm{N},\\quad q=0.20\\,\\mathrm{C},\\quad W=Q=0.060\\,\\mathrm{J}"
      },
      {
        "title": "例 4 · 撤去外力后的减速与能量 · Example 4: Deceleration and energy after the force is removed",
        "prompt": "质量 \\(m=0.20\\,\\mathrm{kg}\\)、长 \\(L=0.50\\,\\mathrm{m}\\) 的导体棒以初速度 \\(v_0=4.0\\,\\mathrm{m/s}\\) 在 \\(B=1.0\\,\\mathrm{T}\\) 的磁场中沿导轨滑动，回路电阻 \\(R=0.40\\,\\Omega\\)，忽略摩擦。撤去外力后：(a) 求初始感应电动势、电流与磁阻力；(b) 求初始加速度；(c) 求速度随时间的关系与时间常数；(d) 求棒最终滑行的距离与产生的总焦耳热。 · A bar of mass \\(m=0.20\\,\\mathrm{kg}\\) and length \\(L=0.50\\,\\mathrm{m}\\) slides on rails with initial speed \\(v_0=4.0\\,\\mathrm{m/s}\\) in a \\(1.0\\,\\mathrm{T}\\) field; the loop resistance is \\(R=0.40\\,\\Omega\\) and friction is negligible. After the external force is removed: (a) find the initial emf, current, and magnetic drag; (b) find the initial acceleration; (c) find \\(v(t)\\) and the time constant; (d) find the total stopping distance and total Joule heat.",
        "steps": [
          "\\(\\varepsilon_0=BLv_0=(1.0)(0.50)(4.0)=2.0\\,\\mathrm{V}\\)，\\(I_0=\\dfrac{\\varepsilon_0}{R}=5.0\\,\\mathrm{A}\\)，\\(F_0=BI_0L=(1.0)(5.0)(0.50)=2.5\\,\\mathrm{N}\\)，方向与速度相反。 · \\(\\varepsilon_0=BLv_0=(1.0)(0.50)(4.0)=2.0\\,\\mathrm{V}\\), \\(I_0=\\dfrac{\\varepsilon_0}{R}=5.0\\,\\mathrm{A}\\), and \\(F_0=BI_0L=(1.0)(5.0)(0.50)=2.5\\,\\mathrm{N}\\), opposite to the velocity.",
          "初始加速度 \\(a_0=\\dfrac{F_0}{m}=\\dfrac{2.5}{0.20}=12.5\\,\\mathrm{m/s^2}\\)，方向与速度相反。 · The initial acceleration is \\(a_0=\\dfrac{F_0}{m}=\\dfrac{2.5}{0.20}=12.5\\,\\mathrm{m/s^2}\\), opposite to the velocity.",
          "\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\)，故 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，\\(\\tau=\\dfrac{mR}{B^2L^2}=\\dfrac{(0.20)(0.40)}{(1.0)^2(0.50)^2}=0.32\\,\\mathrm{s}\\)。 · \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\), so \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) with \\(\\tau=\\dfrac{mR}{B^2L^2}=\\dfrac{(0.20)(0.40)}{(1.0)^2(0.50)^2}=0.32\\,\\mathrm{s}\\).",
          "总滑行距离 \\(x=\\displaystyle\\int_0^{\\infty}v\\,\\mathrm{d}t=v_0\\tau=(4.0)(0.32)=1.28\\,\\mathrm{m}\\)。 · The total stopping distance is \\(x=\\displaystyle\\int_0^{\\infty}v\\,\\mathrm{d}t=v_0\\tau=(4.0)(0.32)=1.28\\,\\mathrm{m}\\).",
          "总焦耳热等于初动能：\\(Q=\\dfrac{1}{2}mv_0^2=\\dfrac{1}{2}(0.20)(4.0)^2=1.6\\,\\mathrm{J}\\)；也可对 \\(I^2R\\) 积分得到同一结果。 · The total Joule heat equals the initial kinetic energy: \\(Q=\\dfrac{1}{2}mv_0^2=\\dfrac{1}{2}(0.20)(4.0)^2=1.6\\,\\mathrm{J}\\); integrating \\(I^2R\\) gives the same result."
        ],
        "solution": "初始 \\(\\varepsilon_0=2.0\\,\\mathrm{V}\\)、\\(I_0=5.0\\,\\mathrm{A}\\)、\\(F_0=2.5\\,\\mathrm{N}\\)，\\(a_0=12.5\\,\\mathrm{m/s^2}\\)；\\(v=4.0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，\\(\\tau=0.32\\,\\mathrm{s}\\)，滑行 \\(1.28\\,\\mathrm{m}\\)，产热 \\(1.6\\,\\mathrm{J}\\)。 · Initially \\(\\varepsilon_0=2.0\\,\\mathrm{V}\\), \\(I_0=5.0\\,\\mathrm{A}\\), \\(F_0=2.5\\,\\mathrm{N}\\), and \\(a_0=12.5\\,\\mathrm{m/s^2}\\); \\(v=4.0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) with \\(\\tau=0.32\\,\\mathrm{s}\\), stopping distance \\(1.28\\,\\mathrm{m}\\), and Joule heat \\(1.6\\,\\mathrm{J}\\).",
        "solutionLatex": "v=4.0\\exp\\left(-\\dfrac{t}{\\tau}\\right),\\quad \\tau=0.32\\,\\mathrm{s},\\quad x=1.28\\,\\mathrm{m},\\quad Q=1.6\\,\\mathrm{J}"
      },
      {
        "title": "例 5 · 主张—证据—推理：离开磁场时磁力会帮忙吗？ · Example 5: Claim–evidence–reasoning: does the magnetic force help when leaving?",
        "prompt": "一名学生说：“线框离开磁场时感应电流反向，所以磁力也反向，会帮助线框加速离开。”请用楞次定律、\\(\\vec F=I\\vec L\\times\\vec B\\) 与能量守恒评价这一说法。 · A student says: “When the loop leaves the field the induced current reverses, so the magnetic force also reverses and helps the loop accelerate out.” Evaluate this claim using Lenz's law, \\(\\vec F=I\\vec L\\times\\vec B\\), and energy conservation.",
        "steps": [
          "主张：电流反向意味着磁力反向，磁力做正功帮助线框离开。 · Claim: reversing the current reverses the magnetic force, so the force does positive work and helps the loop leave.",
          "证据：\\(\\vec B\\) 向里时，进入过程磁通量增大，感应电流逆时针，前边电流向上，\\(\\vec L\\times\\vec B\\) 向左；离开过程磁通量减小，感应电流顺时针，后边电流向上，\\(\\vec L\\times\\vec B\\) 仍向左。 · Evidence: with \\(\\vec B\\) into the page, the flux increases while entering, the current is counterclockwise, the current in the leading side is upward, and \\(\\vec L\\times\\vec B\\) points left; while leaving, the flux decreases, the current is clockwise, the current in the trailing side is upward, and \\(\\vec L\\times\\vec B\\) still points left.",
          "推理：电流方向确实相反，但受力边从“前边”换成了“后边”，两次叉积都给出与速度相反的力；若磁力帮助运动，能量将无中生有，违反能量守恒。 · Reasoning: the current direction does reverse, but the force acts on the leading side in one case and the trailing side in the other; both cross products give a force opposite to the velocity. If the force helped the motion, energy would be created from nothing, violating energy conservation.",
          "结论：磁力始终是阻力；线框进入和离开时电流方向相反，但磁力方向都阻碍运动。 · Conclusion: the magnetic force is always a drag; the current reverses between entering and leaving, but the force opposes the motion in both cases."
        ],
        "solution": "说法错误：电流反向不等于磁力反向；磁力始终阻碍相对运动，这正是楞次定律的能量含义。 · The claim is false: a reversed current does not mean a reversed force; the magnetic force always opposes the relative motion, which is the energy meaning of Lenz's law.",
        "solutionLatex": "\\vec F=I\\vec L\\times\\vec B\\ \\text{always opposes}\\ \\vec v"
      }
    ],
    "examTips": [
      "先判断磁通量为何变化：滑棒改变的是面积，线框进出改变的是“在场内的面积”，固定线圈改变的是 \\(B\\) 或夹角。 · First identify why the flux changes: a sliding bar changes the area, a loop entering or leaving changes the area inside the field, and a fixed coil changes \\(B\\) or the angle.",
      "用楞次定律定方向时，先写出“原磁通量向哪、增大还是减小”，再让感应磁场阻碍这个变化，最后用右手定则定电流。 · To use Lenz's law, state the direction of the original flux and whether it is increasing or decreasing, let the induced field oppose that change, then use the right-hand rule for the current.",
      "磁力方向用 \\(\\vec F=I\\vec L\\times\\vec B\\) 判断，并检查结果是否与运动方向相反；若同向，说明电流或磁场方向判断有误。 · Determine the force direction with \\(\\vec F=I\\vec L\\times\\vec B\\) and check that it opposes the motion; if it points along the motion, the current or field direction is wrong.",
      "能量题先写 \\(P_{\\mathrm{mech}}=F_{\\mathrm{app}}v\\) 与 \\(P_{\\mathrm{J}}=I^2R\\)；匀速时相等，变速时差值等于动能变化率。 · For energy problems write \\(P_{\\mathrm{mech}}=F_{\\mathrm{app}}v\\) and \\(P_{\\mathrm{J}}=I^2R\\); they are equal at constant speed, and their difference equals the rate of change of kinetic energy when speed changes.",
      "线框完全进入匀强磁场后，磁通量不变，立即判定 \\(\\varepsilon=0\\)、\\(I=0\\)、\\(F_B=0\\)，不要继续套用滑棒公式。 · Once a loop is fully inside a uniform field, the flux is constant, so immediately conclude \\(\\varepsilon=0\\), \\(I=0\\), and \\(F_B=0\\); do not keep applying the sliding-bar formula.",
      "注意单位换算（cm→m、mT→T）与有效数字；AP 计算题通常要求 2–3 位有效数字并写单位。 · Watch unit conversions (cm→m, mT→T) and significant figures; AP calculation questions usually expect 2–3 significant figures with units.",
      "简答题按“主张—证据—推理”组织：先写定律，再代入方向或能量，最后说明结论与假设。 · Organize free response as claim–evidence–reasoning: state the law, substitute the direction or energy argument, and finish with the conclusion and assumptions."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.1",
        "title": "磁通量 · Magnetic Flux",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应 · Electromagnetic Induction",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.4",
        "title": "电感 · Inductance",
        "relation": "后续 · next"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场 · Moving Charges and Magnetic Fields",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应 · Faraday electromagnetic induction"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：13.1 磁通量与 13.2 法拉第定律、楞次定律给出感应电动势的大小与方向；12.2 的洛伦兹力解释动生电动势的微观来源。 · Upstream: 13.1 magnetic flux and 13.2 Faraday's law and Lenz's law give the magnitude and direction of the induced emf; the Lorentz force from 12.2 explains the microscopic origin of motional emf.",
      "数学：磁通量变化率、\\(\\vec L\\times\\vec B\\) 的叉积、指数衰减 \\(\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) 与功率平衡；图像题要把斜率、面积与物理量对应起来。 · Mathematics: rates of flux change, the cross product \\(\\vec L\\times\\vec B\\), exponential decay \\(\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\), and power balance; graph problems require matching slopes and areas to physical quantities.",
      "下游：13.4 电感与 13.5 RL 电路把“变化电流产生感应电动势”推广到自感；发电机、电动机与变压器都利用感应电流与磁力。 · Downstream: 13.4 inductance and 13.5 RL circuits extend “a changing current produces an induced emf” to self-induction; generators, motors, and transformers all use induced currents and magnetic forces.",
      "跨学科：电磁制动、再生制动、感应加热、金属探测器与磁悬浮列车都依赖感应电流所受的磁阻力或磁力。 · Cross-disciplinary: electromagnetic braking, regenerative braking, induction heating, metal detectors, and maglev trains all rely on the magnetic drag or force on induced currents."
    ],
    "intuitionDetailed": "先看滑棒。设棒长 \\(L\\)、速度 \\(v\\) 向右、\\(\\vec B\\) 垂直纸面向里。棒内正电荷的速度向右，\\(\\vec v\\times\\vec B\\) 向上，所以正电荷被推向棒的顶端，顶端电势高；棒相当于一个电动势为 \\(\\varepsilon=BLv\\) 的电池。闭合回路中，电流从棒的顶端经外电路流回底端，在棒内由底端流向顶端。这个电流在棒内向上，\\(\\vec L\\times\\vec B\\) 向左，故磁力向左，与速度反向。电流越大、磁场越强、棒越长，磁阻力越大：\\(F_B=BIL=\\dfrac{B^2L^2v}{R}\\)。若外力向右拉棒且速度恒定，外力与磁阻力平衡，外力功率 \\(F_{\\mathrm{app}}v\\) 正好等于电阻的焦耳热功率 \\(I^2R\\)。若撤去外力，棒在磁阻力下减速；由牛顿第二定律 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\) 得指数衰减 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，时间常数 \\(\\tau=\\dfrac{mR}{B^2L^2}\\)，全部初动能变成焦耳热。再看线框进入场区：只有前边切割磁感线，磁通量向里增加，感应电流逆时针，前边受力向左；线框完全进入后磁通量不变，电流消失；离开时磁通量向里减少，感应电流顺时针，后边受力仍向左。可见无论进入还是离开，磁力都阻碍运动，这正是楞次定律的能量含义。 · Start with the sliding bar. Let the bar have length \\(L\\), velocity \\(v\\) to the right, and \\(\\vec B\\) into the page. A positive charge in the bar moves right, so \\(\\vec v\\times\\vec B\\) points upward; positive charge is pushed toward the top end, which becomes the higher-potential end. The bar acts like a battery of emf \\(\\varepsilon=BLv\\). In the closed circuit, current flows from the top end through the external circuit back to the bottom, and inside the bar from bottom to top. The current in the bar is upward, so \\(\\vec L\\times\\vec B\\) points left; the magnetic force is left, opposite to the velocity. A larger current, stronger field, or longer bar gives a larger drag: \\(F_B=BIL=\\dfrac{B^2L^2v}{R}\\). If an external force pulls the bar to the right at constant speed, the applied force balances the drag, and the external power \\(F_{\\mathrm{app}}v\\) equals the Joule heating rate \\(I^2R\\). If the external force is removed, the bar slows under the drag; Newton's second law \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\) gives exponential decay \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) with time constant \\(\\tau=\\dfrac{mR}{B^2L^2}\\), and all the initial kinetic energy becomes Joule heat. Now consider a loop entering a field region: only the leading side cuts field lines, the flux into the page increases, the induced current is counterclockwise, and the force on the leading side is to the left. Once the loop is fully inside, the flux is constant and the current vanishes. As it leaves, the flux into the page decreases, the induced current is clockwise, and the force on the trailing side is still to the left. Whether entering or leaving, the magnetic force opposes the motion—this is the energy meaning of Lenz's law.",
    "development": [
      "回顾 13.1 的磁通量与 13.2 的法拉第定律、楞次定律：先判断磁通量是否变化、变化方向如何。 · Review magnetic flux from 13.1 and Faraday's and Lenz's laws from 13.2: first decide whether the flux changes and in which sense.",
      "用洛伦兹力解释动生电动势：棒中电荷随棒运动，\\(q\\vec v\\times\\vec B\\) 把电荷推到一端，得到 \\(\\varepsilon=BLv\\)。 · Explain motional emf with the Lorentz force: charges in the bar move with it, and \\(q\\vec v\\times\\vec B\\) pushes them to one end, giving \\(\\varepsilon=BLv\\).",
      "闭合回路后由 \\(I=\\dfrac{\\varepsilon}{R}\\) 求电流，并用楞次定律或右手定则确定方向。 · Close the circuit, find the current from \\(I=\\dfrac{\\varepsilon}{R}\\), and determine its direction with Lenz's law or the right-hand rule.",
      "计算磁场对感应电流的力 \\(\\vec F=I\\vec L\\times\\vec B\\)，验证它阻碍棒或线框的运动，得到磁阻力 \\(F_B=\\dfrac{B^2L^2v}{R}\\)。 · Calculate the magnetic force \\(\\vec F=I\\vec L\\times\\vec B\\) on the induced current, verify that it opposes the motion of the bar or loop, and obtain the drag \\(F_B=\\dfrac{B^2L^2v}{R}\\).",
      "做能量簿记：外力功率、动能变化率与焦耳热功率；匀速时 \\(F_{\\mathrm{app}}v=I^2R\\)，无外力时 \\(\\dfrac{1}{2}mv_0^2=Q\\)。 · Keep the energy account: external power, rate of change of kinetic energy, and Joule heating; at constant speed \\(F_{\\mathrm{app}}v=I^2R\\), and without an external force \\(\\dfrac{1}{2}mv_0^2=Q\\).",
      "迁移到线框进入/离开场区与图像问题：分清“部分在场内”和“完全在场内”，画出 \\(\\Phi_B\\)、\\(\\varepsilon\\)、\\(I\\)、\\(F_B\\) 随位置或时间的图像。 · Transfer to loops entering/leaving a field and to graph problems: distinguish “partly inside” from “fully inside,” and sketch \\(\\Phi_B\\), \\(\\varepsilon\\), \\(I\\), and \\(F_B\\) versus position or time."
    ],
    "checks": [
      "能否从 \\(q\\vec v\\times\\vec B\\) 出发说明滑棒为什么产生 \\(\\varepsilon=BLv\\)？ · Can you start from \\(q\\vec v\\times\\vec B\\) and explain why a sliding bar produces \\(\\varepsilon=BLv\\)?",
      "若 \\(\\vec B\\) 垂直纸面向里、棒向右运动，棒中电流方向、回路电流方向与磁阻力方向分别是什么？ · If \\(\\vec B\\) is into the page and the bar moves right, what are the current direction in the bar, the current direction around the loop, and the direction of the magnetic drag?",
      "为什么 \\(F_B=\\dfrac{B^2L^2v}{R}\\) 只依赖瞬时速度而不直接依赖外力？终端速度如何由外力决定？ · Why does \\(F_B=\\dfrac{B^2L^2v}{R}\\) depend on the instantaneous speed rather than directly on the applied force? How does the applied force set the terminal speed?",
      "匀速拉棒时，写出外力功率、焦耳热功率与磁阻力功率的关系，并说明能量从哪里来、到哪里去。 · For a bar pulled at constant speed, write the relation among external power, Joule heating rate, and the power associated with the drag, and explain where the energy comes from and where it goes.",
      "线框进入和离开磁场时，感应电流方向为什么相反？为什么磁力方向却不变？ · Why are the induced current directions opposite when a loop enters and leaves a field, and why does the magnetic force direction stay the same?",
      "线框完全进入匀强磁场后，为什么 \\(\\varepsilon=0\\)、\\(I=0\\)、\\(F_B=0\\)？ · Why are \\(\\varepsilon=0\\), \\(I=0\\), and \\(F_B=0\\) once a loop is fully inside a uniform field?",
      "撤去外力后，滑棒的动能去了哪里？如何由 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\) 得到时间常数与总滑行距离？ · After the external force is removed, where does the bar's kinetic energy go? How do you obtain the time constant and total stopping distance from \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^2L^2v}{R}\\)?",
      "通过导线截面的电荷量为什么只由 \\(\\dfrac{\\Delta\\Phi_B}{R}\\) 决定，而与滑棒速度无关？ · Why is the charge passing a cross section determined only by \\(\\dfrac{\\Delta\\Phi_B}{R}\\) and independent of the bar's speed?"
    ],
    "vocabulary": [
      {
        "termZh": "动生电动势",
        "termEn": "motional emf",
        "defZh": "导体在磁场中运动、因自由电荷受洛伦兹力而产生的电动势；棒、速度与磁场两两垂直时 \\(\\varepsilon=BLv\\)。",
        "defEn": "The emf produced when a conductor moves through a magnetic field because its free charges experience a Lorentz force; when the bar, velocity, and field are mutually perpendicular, \\(\\varepsilon=BLv\\)."
      },
      {
        "termZh": "感应电流",
        "termEn": "induced current",
        "defZh": "闭合回路中由变化的磁通量产生的电流，大小 \\(I=\\dfrac{\\varepsilon}{R}\\)，方向由楞次定律确定。",
        "defEn": "The current produced in a closed loop by a changing magnetic flux; its magnitude is \\(I=\\dfrac{\\varepsilon}{R}\\) and its direction is given by Lenz's law."
      },
      {
        "termZh": "楞次定律",
        "termEn": "Lenz's law",
        "defZh": "感应电流的磁场总是阻碍引起它的磁通量变化；负号 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 体现了这一点。",
        "defEn": "The magnetic field of an induced current always opposes the change in flux that produced it; the minus sign in \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) expresses this."
      },
      {
        "termZh": "磁阻力",
        "termEn": "magnetic drag (back force)",
        "defZh": "磁场对感应电流的作用力中阻碍导体相对运动的分量；滑棒情形为 \\(F_B=\\dfrac{B^2L^2v}{R}\\)，方向与速度相反。",
        "defEn": "The component of the magnetic force on the induced current that opposes the conductor's relative motion; for a sliding bar, \\(F_B=\\dfrac{B^2L^2v}{R}\\) opposite to the velocity."
      },
      {
        "termZh": "焦耳热",
        "termEn": "Joule heating",
        "defZh": "电流通过电阻时把电能转化为内能的过程，功率为 \\(I^2R\\)；滑棒系统中它等于外力做功的功率（匀速时）。",
        "defEn": "The conversion of electrical energy into thermal energy as current flows through resistance, at rate \\(I^2R\\); in a sliding-bar system it equals the external mechanical power at constant speed."
      },
      {
        "termZh": "载流导线所受磁力",
        "termEn": "magnetic force on a current-carrying wire",
        "defZh": "磁场对通电导线的力 \\(\\vec F=I\\vec L\\times\\vec B\\)，大小 \\(F=BIL\\sin\\theta\\)，方向由右手定则确定。",
        "defEn": "The force \\(\\vec F=I\\vec L\\times\\vec B\\) exerted by a magnetic field on a current-carrying wire, with magnitude \\(F=BIL\\sin\\theta\\) and direction from the right-hand rule."
      },
      {
        "termZh": "终端速度",
        "termEn": "terminal speed",
        "defZh": "恒定外力下拉棒达到的稳定速度，此时外力与磁阻力平衡：\\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\)。",
        "defEn": "The steady speed reached by a pulled bar under a constant applied force, when the applied force balances the magnetic drag: \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^2L^2}\\)."
      }
    ]
  },
  "13.4": {
    "id": "em/em-u13/13.4",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.4",
    "titleZh": "电感",
    "titleEn": "Inductance",
    "layer": "ap",
    "summary": "电感 · Inductance",
    "learningObjectives": [
      "能陈述「电感」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Inductance：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电感（Inductance）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电感」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "L=\\dfrac{N\\Phi_B}{I}",
        "note": "自感系数定义。"
      },
      {
        "latex": "\\varepsilon_L=-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}",
        "note": "自感电动势。"
      },
      {
        "latex": "U=\\dfrac{1}{2}LI^{2}",
        "note": "电感储存的磁能。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电感」的工作方程或机制链。"
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
      "线性电感；磁介质未饱和",
      "理想电感无电阻；实际线圈含电阻",
      "感应电动势方向由楞次定律判断"
    ],
    "keyPoints": [
      "掌握 13.4「电感」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电感」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电感」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "L=\\dfrac{N\\Phi_B}{I}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电感」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电感」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电感」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.3",
        "title": "感应电流与磁力",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.5",
        "title": "LR 电路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电感」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电感」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电感」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.5": {
    "id": "em/em-u13/13.5",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.5",
    "titleZh": "LR 电路",
    "titleEn": "Circuits with Resistors and Inductors (LR Circuits)",
    "layer": "ap",
    "summary": "LR 电路 · Circuits with Resistors and Inductors (LR Circuits)",
    "learningObjectives": [
      "能陈述「LR 电路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Circuits with Resistors and Inductors (LR Circuits)：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "LR 电路（Circuits with Resistors and Inductors (LR Circuits)）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「LR 电路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\tau=\\dfrac{L}{R}",
        "note": "LR 时间常数。"
      },
      {
        "latex": "I(t)=\\dfrac{\\varepsilon}{R}\\left(1-e^{-\\dfrac{t}{\\tau}}\\right)",
        "note": "接通电源后的电流上升。"
      },
      {
        "latex": "I(t)=I_0e^{-\\dfrac{t}{\\tau}}",
        "note": "断开电源后的电流衰减。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「LR 电路」的工作方程或机制链。"
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
      "恒定 L、R；理想电感",
      "接通初始 I(0)=0；断开初始 I(0)=I₀",
      "t=τ 时达到 63.2%；约 5τ 基本稳定"
    ],
    "keyPoints": [
      "掌握 13.5「LR 电路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「LR 电路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「LR 电路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\tau=\\dfrac{L}{R}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「LR 电路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「LR 电路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「LR 电路」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.4",
        "title": "电感",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.6",
        "title": "LC 电路",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「LR 电路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「LR 电路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「LR 电路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.6": {
    "id": "em/em-u13/13.6",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.6",
    "titleZh": "LC 电路",
    "titleEn": "Circuits with Capacitors and Inductors (LC Circuits)",
    "layer": "ap",
    "summary": "LC 电路 · Circuits with Capacitors and Inductors (LC Circuits)",
    "learningObjectives": [
      "能陈述「LC 电路」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Circuits with Capacitors and Inductors (LC Circuits)：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "LC 电路（Circuits with Capacitors and Inductors (LC Circuits)）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「LC 电路」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\omega=\\dfrac{1}{\\sqrt{LC}}",
        "note": "LC 振荡角频率。"
      },
      {
        "latex": "T=2\\pi\\sqrt{LC}",
        "note": "LC 振荡周期。"
      },
      {
        "latex": "q(t)=Q_{\\max}\\cos(\\omega t+\\phi)",
        "note": "电荷随时间振荡。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「LC 电路」的工作方程或机制链。"
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
      "理想 L、C；无电阻损耗",
      "能量在电场与磁场间振荡，总能量守恒",
      "初始条件决定 Q_max 与 φ"
    ],
    "keyPoints": [
      "掌握 13.6「LC 电路」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「LC 电路」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「LC 电路」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\omega=\\dfrac{1}{\\sqrt{LC}}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「LC 电路」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「LC 电路」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「LC 电路」；用斜线分式代替叠式分式导致歧义"
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
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.5",
        "title": "LR 电路",
        "relation": "prerequisite"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「LC 电路」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「LC 电路」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「LC 电路」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "13.7": {
    "id": "em/em-u13/13.7",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.7",
    "titleZh": "麦克斯韦方程与电磁波",
    "titleEn": "Maxwell Equations and Electromagnetic Waves",
    "layer": "ap",
    "summary": "麦克斯韦方程组用四个方程完整描述电与磁：电荷产生电场，变化的磁场产生电场，电流与变化的电场产生磁场。第三方程就是法拉第定律的场形式：变化的磁通量激发环流的感应电场，感应电场是非保守场，沿闭合路径的环流等于感应电动势。把麦克斯韦补充加入安培定律后，充电电容器间隙中的位移电流使总电流保持连续；在无源真空中，方程组给出电磁波方程，波速 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · Maxwell's equations fully describe electricity and magnetism in four laws: charges produce electric fields, changing magnetic fields produce electric fields, and currents plus changing electric fields produce magnetic fields. The third equation is Faraday's law in field form: a changing magnetic flux excites a circulating induced electric field, which is nonconservative, and its circulation around a closed path equals the induced emf. With Maxwell's addition to Ampère's law, the displacement current in a charging capacitor keeps the total current continuous; in source-free vacuum the equations yield electromagnetic wave equations with speed \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
    "learningObjectives": [
      "能写出麦克斯韦方程组的四个方程，说明每个方程描述的物理内容、积分形式与符号约定。 · Write the four Maxwell equations and state the physics, integral form, and sign conventions of each.",
      "能说明麦克斯韦第四方程是安培定律加上麦克斯韦补充，区分传导电流与位移电流，并用充电电容器解释总电流为什么连续。 · Explain that Maxwell's fourth equation is Ampère's law plus Maxwell's addition, distinguish conduction current from displacement current, and use a charging capacitor to explain why the total current is continuous.",
      "能由麦克斯韦方程组说明真空中电场与磁场满足波动方程，并推出 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)，用单位与数量级检验。 · Use Maxwell's equations to show that electric and magnetic fields obey wave equations in vacuum, derive \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\), and check with units and order of magnitude.",
      "能描述真空平面电磁波的结构：\\(\\vec E\\)、\\(\\vec B\\) 与传播方向两两垂直、同相位，且 \\(E=cB\\)；能区分场强剖面、相位关系与传播方向图。 · Describe the structure of a vacuum plane electromagnetic wave: \\(\\vec E\\), \\(\\vec B\\), and the propagation direction are mutually perpendicular, the fields are in phase, and \\(E=cB\\); distinguish field-profile, phase, and propagation-direction graphs.",
      "能写出麦克斯韦第三方程的积分与微分形式，说明变化的磁通量如何在空间中激发感应电场，并区分非保守的感应电场与保守的静电场。 · Write the integral and differential forms of Maxwell's third equation, explain how a changing magnetic flux excites an induced electric field in space, and distinguish the nonconservative induced field from a conservative electrostatic field."
    ],
    "essentialKnowledge": [
      "麦克斯韦方程组由四个方程组成：电高斯定律、磁高斯定律、法拉第定律与安培–麦克斯韦定律；它们合起来完整描述经典电磁现象。 · Maxwell's equations consist of four laws: Gauss's law for electricity, Gauss's law for magnetism, Faraday's law, and the Ampère–Maxwell law; together they fully describe classical electromagnetism.",
      "电高斯定律 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)：电荷是电场的源，穿过闭合曲面的净电通量只由曲面内部的净电荷决定。 · Gauss's law for electricity, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\): charge is the source of the electric field, and the net electric flux through a closed surface depends only on the net charge inside.",
      "磁高斯定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\)：不存在磁单极子，磁感线闭合，穿过任意闭合曲面的净磁通为零。 · Gauss's law for magnetism, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\): there are no magnetic monopoles, magnetic field lines close on themselves, and the net magnetic flux through any closed surface is zero.",
      "麦克斯韦第三方程就是法拉第定律的场形式 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)：变化的磁通量在空间中激发环流感应电场，负号对应楞次定律；这条定律对任意闭合路径成立，路径不必是真实导线。 · Maxwell's third equation is Faraday's law in field form, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\): a changing magnetic flux excites a circulating induced electric field in space, the minus sign expresses Lenz's law, and the law holds for any closed path, not only a physical wire.",
      "感应电场是非保守场：\\(\\oint\\vec E_{\\mathrm{ind}}\\cdot\\mathrm{d}\\vec l=\\varepsilon\\neq0\\)，电场线没有起点和终点，一般不能写成某个单值标量电势的负梯度；沿闭合路径做功 \\(q\\varepsilon\\) 一般不为零。 · The induced electric field is nonconservative: \\(\\oint\\vec E_{\\mathrm{ind}}\\cdot\\mathrm{d}\\vec l=\\varepsilon\\neq0\\), its field lines have no start or end, it generally cannot be written as the negative gradient of a single-valued scalar potential, and the work \\(q\\varepsilon\\) around a closed path is generally nonzero.",
      "静电场由静止电荷产生，是保守场：\\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\)，电场线起于正电荷、止于负电荷，两点间电势差与路径无关。 · An electrostatic field is produced by charges at rest and is conservative: \\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\), its field lines begin on positive charge and end on negative charge, and the potential difference between two points is path-independent.",
      "感应电场存在于空间本身：没有导线或闭合回路时，变化的磁场仍激发电场；若放一闭合导体，电场驱动感应电流，\\(\\varepsilon=\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\)。 · The induced electric field exists in space itself: even without a wire or closed circuit, a changing magnetic field still excites an electric field; if a closed conductor is present, the field drives an induced current, with \\(\\varepsilon=\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\).",
      "安培–麦克斯韦定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)：磁场由传导电流和变化的电通量共同产生。 · The Ampère–Maxwell law, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\): magnetic fields are produced by conduction current and by a changing electric flux.",
      "麦克斯韦第四方程就是安培定律加上麦克斯韦补充；补充项 \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 在稳恒情形为零，但在充电电容器等非稳恒情形必不可少。 · Maxwell's fourth equation is Ampère's law plus Maxwell's addition; the extra term \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) vanishes in steady situations but is essential in non-steady situations such as a charging capacitor.",
      "位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 不是电荷的流动，而是变化电通量的等效电流；在充电平行板电容器中，\\(I_{\\mathrm{d}}\\) 等于导线中的传导电流，使总电流连续。 · Displacement current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) is not a flow of charge but the equivalent current of a changing electric flux; in a charging parallel-plate capacitor it equals the conduction current in the wires, making the total current continuous.",
      "在无源真空（\\(Q_{\\mathrm{enc}}=0\\)、\\(I_{\\mathrm{enc}}=0\\)）中，麦克斯韦方程组给出 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) 与 \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\)：电场与磁场都以波的形式传播。 · In source-free vacuum (\\(Q_{\\mathrm{enc}}=0\\), \\(I_{\\mathrm{enc}}=0\\)), Maxwell's equations give \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) and \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\): both fields propagate as waves.",
      "电磁波在真空中的速度 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，与频率、波长、场强及源的运动无关；这统一了电磁学与光学。 · The speed of electromagnetic waves in vacuum is \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), independent of frequency, wavelength, field strength, and the motion of the source; this unifies electromagnetism and optics.",
      "真空中的平面电磁波是横波：\\(\\vec E\\)、\\(\\vec B\\) 与传播方向 \\(\\vec k\\) 两两垂直，\\(\\vec E\\) 与 \\(\\vec B\\) 同相位，振幅满足 \\(E=cB\\)，传播方向为 \\(\\vec E\\times\\vec B\\)。 · A plane electromagnetic wave in vacuum is transverse: \\(\\vec E\\), \\(\\vec B\\), and the propagation direction \\(\\vec k\\) are mutually perpendicular, \\(\\vec E\\) and \\(\\vec B\\) are in phase, the amplitudes satisfy \\(E=cB\\), and the propagation direction is \\(\\vec E\\times\\vec B\\).",
      "介质中 \\(v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}}=\\dfrac{c}{n}\\)；频率由源决定、跨界面不变，波长变为真空波长的 \\(\\dfrac{1}{n}\\)。 · In a medium, \\(v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}}=\\dfrac{c}{n}\\); the frequency is set by the source and does not change across an interface, while the wavelength becomes \\(\\dfrac{1}{n}\\) of its vacuum value."
    ],
    "definition": "麦克斯韦方程组（Maxwell's equations）是完整描述经典电磁现象的四个方程：电高斯定律 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)，磁高斯定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\)，法拉第定律（麦克斯韦第三方程）\\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)：变化的磁通量在空间中激发环流的感应电场；感应电场是非保守场，沿闭合路径的环流等于感应电动势而不是零，因此一般不能用一个单值标量电势描述；以及安培–麦克斯韦定律 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。麦克斯韦第四方程就是安培定律加上麦克斯韦补充：磁场不仅可以由传导电流产生，也可以由变化的电通量产生；后者的等效电流称为位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。在无源真空中，这四个方程给出 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) 与 \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\)，即电磁波方程；波速 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，在真空中对所有频率的电磁波都相同。 · Maxwell's equations are the four equations that fully describe classical electromagnetism: Gauss's law for electricity, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\); Gauss's law for magnetism, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0\\); Faraday's law (Maxwell's third equation), \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\): a changing magnetic flux excites a circulating induced electric field in space; this induced field is nonconservative, its circulation around a closed path equals the induced emf rather than zero, so it cannot generally be described by a single-valued scalar potential; and the Ampère–Maxwell law, \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\). Maxwell's fourth equation is Ampère's law plus Maxwell's addition: magnetic fields can be produced not only by conduction current but also by a changing electric flux, whose equivalent current is the displacement current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\). In source-free vacuum these four equations give \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) and \\(\\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}\\), the electromagnetic wave equations; the wave speed is \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), the same for electromagnetic waves of every frequency in vacuum.",
    "intuition": "把四个方程想成四条规则：电荷是电场的源；磁感线没有起点和终点；变化的磁通量像旋涡一样驱动环流电场；电流和变化的电通量都能驱动环流磁场。其中第三方程把法拉第定律写成场方程：变化的磁场激发环流的感应电场，感应电场线没有起点和终点，环流不为零，所以它不是保守场，也没有全局电势。 · Think of the four equations as four rules: charge is the source of the electric field; magnetic field lines have no beginning or end; a changing magnetic flux drives a circulating electric field like a vortex; and both current and changing electric flux drive a circulating magnetic field. The third equation states Faraday's law as a field equation: a changing magnetic field excites a circulating induced electric field whose field lines have no start or end; its circulation is nonzero, so it is not conservative and has no global potential.",
    "formulas": [
      {
        "latex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "note": "电高斯定律：电荷是电场的源；闭合曲面取外法线。 · Gauss's law for electricity: charge is the source of the electric field; the outward normal is used on a closed surface."
      },
      {
        "latex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec A=0",
        "note": "磁高斯定律：不存在磁单极子，磁感线闭合。 · Gauss's law for magnetism: there are no magnetic monopoles, so magnetic field lines close on themselves."
      },
      {
        "latex": "\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "麦克斯韦第三方程（法拉第定律的电场形式）：任意闭合路径上感应电场的环流等于磁通量变化率的负值；路径不必是导线。 · Maxwell's third equation (Faraday's law in field form): the circulation of the induced electric field around any closed path equals the negative rate of change of magnetic flux; the path need not be a wire."
      },
      {
        "latex": "\\nabla\\times\\vec E=-\\dfrac{\\partial\\vec B}{\\partial t}",
        "note": "麦克斯韦第三方程的微分形式：变化的磁场是感应电场旋度的源；适用于空间每一点。 · Differential form of Maxwell's third equation: a changing magnetic field is the source of the curl of the induced electric field; it applies at every point in space."
      },
      {
        "latex": "\\varepsilon=\\oint\\vec E\\cdot\\mathrm{d}\\vec l,\\qquad \\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0",
        "note": "电动势是感应电场的环流；静电场是保守场，环流恒为零，因此有电势。 · The emf is the circulation of the induced electric field; an electrostatic field is conservative, its circulation is always zero, and a potential therefore exists."
      },
      {
        "latex": "E(r)=\\dfrac{r}{2}\\left|\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\right|\\ (r\\le R),\\qquad E(r)=\\dfrac{R^{2}}{2r}\\left|\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\right|\\ (r\\ge R)",
        "note": "半径 \\(R\\) 的圆区内 \\(B\\) 均匀变化时，由圆柱对称性得到的感应电场大小；方向沿同心圆切线。 · Magnitude of the induced electric field from cylindrical symmetry when \\(B\\) changes uniformly inside a circular region of radius \\(R\\); the field is tangent to concentric circles."
      },
      {
        "latex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}",
        "note": "安培–麦克斯韦定律：传导电流与变化的电通量都产生磁场。 · Ampère–Maxwell law: both conduction current and changing electric flux produce a magnetic field."
      },
      {
        "latex": "I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}",
        "note": "位移电流的定义；它不是电荷的流动，而是变化电通量的等效电流。 · Definition of displacement current; it is not charge flow but the equivalent current of a changing electric flux."
      },
      {
        "latex": "\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2},\\quad \\nabla^2\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec B}{\\partial t^2}",
        "note": "无源真空中的波动方程；每个笛卡尔分量都满足同一形式。 · Wave equations in source-free vacuum; every Cartesian component satisfies the same form."
      },
      {
        "latex": "c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}",
        "note": "真空中的电磁波速度；代入 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)、\\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\) 得 \\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · Speed of electromagnetic waves in vacuum; substituting \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\) and \\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\) gives \\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)."
      },
      {
        "latex": "E=cB",
        "note": "真空平面电磁波中电场与磁场振幅之比等于 \\(c\\)；二者同相位。 · In a vacuum plane electromagnetic wave, the ratio of the field amplitudes equals \\(c\\); the fields are in phase."
      },
      {
        "latex": "E(x,t)=E_{\\max}\\cos(kx-\\omega t),\\quad B(x,t)=B_{\\max}\\cos(kx-\\omega t)",
        "note": "沿 \\(+x\\) 传播的平面波；\\(c=\\dfrac{\\omega}{k}\\)。 · Plane wave propagating along \\(+x\\); \\(c=\\dfrac{\\omega}{k}\\)."
      },
      {
        "latex": "v=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}}=\\dfrac{c}{n}",
        "note": "介质中的波速；\\(n\\) 为折射率。频率不变，波长变为 \\(\\dfrac{\\lambda_0}{n}\\)。 · Wave speed in a medium; \\(n\\) is the refractive index. Frequency is unchanged and the wavelength becomes \\(\\dfrac{\\lambda_0}{n}\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "安培定律用于充电电容器 · Ampère's law applied to a charging capacitor",
        "to": "曲面选择矛盾 · Surface-choice contradiction",
        "note": "以导线为边界的安培环路，取穿过导线的曲面得 \\(I_{\\mathrm{enc}}=I\\)，取穿过电容器间隙的曲面得 \\(I_{\\mathrm{enc}}=0\\)；稳恒安培定律对非稳恒情形不自洽。 · For an Ampèrian loop bounded by the wire, a surface through the wire gives \\(I_{\\mathrm{enc}}=I\\), while a surface through the capacitor gap gives \\(I_{\\mathrm{enc}}=0\\); steady Ampère's law is inconsistent for non-steady fields."
      },
      {
        "from": "电容器极板间的电场 · Electric field between the plates",
        "to": "位移电流 · Displacement current",
        "note": "\\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{A\\varepsilon_0}\\)，故 \\(\\Phi_E=EA=\\dfrac{Q}{\\varepsilon_0}\\)，从而 \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}=I\\)；位移电流等于传导电流。 · \\(E=\\dfrac{\\sigma}{\\varepsilon_0}=\\dfrac{Q}{A\\varepsilon_0}\\), so \\(\\Phi_E=EA=\\dfrac{Q}{\\varepsilon_0}\\) and \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t}=I\\); the displacement current equals the conduction current."
      },
      {
        "from": "法拉第定律（麦克斯韦第三方程） · Faraday's law (Maxwell's third equation)",
        "to": "感应电场 · Induced electric field",
        "note": "把 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 写成场的形式 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)：磁通量变化率是感应电场环流的源，回路只是计算环流的几何路径。 · Write \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) in field form, \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\): the rate of change of magnetic flux is the source of the circulation of the induced electric field, and the loop is merely a geometric path for computing the circulation."
      },
      {
        "from": "感应电场 · Induced electric field",
        "to": "非保守性 · Nonconservative nature",
        "note": "\\(\\oint\\vec E_{\\mathrm{ind}}\\cdot\\mathrm{d}\\vec l=\\varepsilon\\neq0\\)，故感应电场不能写成 \\(-\\nabla V\\)；与静电场 \\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\) 形成对照。 · \\(\\oint\\vec E_{\\mathrm{ind}}\\cdot\\mathrm{d}\\vec l=\\varepsilon\\neq0\\), so the induced field cannot be written as \\(-\\nabla V\\); contrast this with the electrostatic field, \\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\)."
      },
      {
        "from": "圆柱对称 · Cylindrical symmetry",
        "to": "感应电场大小 · Induced-field magnitude",
        "note": "半径 \\(R\\) 的圆区内 \\(B\\) 均匀变化时，取半径 \\(r\\) 的同心圆：\\(E(2\\pi r)=\\pi r^{2}\\left|\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\right|\\)（\\(r\\le R\\)），\\(E(2\\pi r)=\\pi R^{2}\\left|\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\right|\\)（\\(r\\ge R\\)）。 · For a uniform changing \\(B\\) inside a circular region of radius \\(R\\), take a concentric circle of radius \\(r\\): \\(E(2\\pi r)=\\pi r^{2}\\left|\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\right|\\) for \\(r\\le R\\), and \\(E(2\\pi r)=\\pi R^{2}\\left|\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\right|\\) for \\(r\\ge R\\)."
      },
      {
        "from": "麦克斯韦补充 · Maxwell's addition",
        "to": "安培–麦克斯韦定律 · Ampère–Maxwell law",
        "note": "把 \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 加到安培定律右边，使总电流连续，方程对任意曲面给出同一个 \\(B\\)。 · Adding \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) to the right side of Ampère's law makes the total current continuous and gives the same \\(B\\) for any surface."
      },
      {
        "from": "无源真空中的麦克斯韦方程组 · Maxwell's equations in source-free vacuum",
        "to": "波动方程 · Wave equations",
        "note": "对法拉第定律取旋度，并用 \\(\\nabla\\times\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial\\vec E}{\\partial t}\\) 消去 \\(\\vec B\\)，得 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\)；磁场同理。 · Take the curl of Faraday's law and use \\(\\nabla\\times\\vec B=\\mu_0\\varepsilon_0\\dfrac{\\partial\\vec E}{\\partial t}\\) to eliminate \\(\\vec B\\), obtaining \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\); the magnetic field satisfies the same form."
      },
      {
        "from": "波动方程 · Wave equation",
        "to": "波速 · Wave speed",
        "note": "与 \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\) 比较，得 \\(v=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\)。 · Compare with \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\) to identify \\(v=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\)."
      },
      {
        "from": "平面波解 · Plane-wave solution",
        "to": "电场与磁场的关系 · Relation between the fields",
        "note": "把 \\(\\vec E=E_{\\max}\\cos(kx-\\omega t)\\hat j\\) 代入法拉第定律，得 \\(\\vec B\\) 沿 \\(\\hat k\\) 且 \\(E_{\\max}=cB_{\\max}\\)；两场同相位。 · Substituting \\(\\vec E=E_{\\max}\\cos(kx-\\omega t)\\hat j\\) into Faraday's law gives \\(\\vec B\\) along \\(\\hat k\\) and \\(E_{\\max}=cB_{\\max}\\); the fields are in phase."
      },
      {
        "from": "量纲检验 · Dimensional check",
        "to": "光速 · Speed of light",
        "note": "\\(\\mu_0\\varepsilon_0\\) 的单位为 \\(\\mathrm{s^2\\,m^{-2}}\\)，故 \\(\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\) 的单位为 \\(\\mathrm{m\\,s^{-1}}\\)；数值与实测光速一致，说明光是电磁波。 · \\(\\mu_0\\varepsilon_0\\) has units of \\(\\mathrm{s^2\\,m^{-2}}\\), so \\(\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\) has units of \\(\\mathrm{m\\,s^{-1}}\\); the value agrees with the measured speed of light, showing that light is an electromagnetic wave."
      }
    ],
    "conditions": [
      "以下积分形式取真空（或近似真空）；介质中需把 \\(\\varepsilon_0\\)、\\(\\mu_0\\) 换成 \\(\\varepsilon\\)、\\(\\mu\\)，并考虑束缚电荷与磁化电流。 · The integral forms below use vacuum (or near-vacuum); in a medium replace \\(\\varepsilon_0\\) and \\(\\mu_0\\) by \\(\\varepsilon\\) and \\(\\mu\\) and account for bound charge and magnetization current.",
      "法拉第定律的积分形式对任意闭合路径成立：路径可以是真实导线，也可以是空间中的假想回路；没有导体时感应电场仍存在，有闭合导体时才形成感应电流。 · The integral form of Faraday's law holds for any closed path: the path may be a real wire or an imaginary loop in space; the induced electric field exists without a conductor, while an induced current appears only when a closed conductor is present.",
      "感应电场只有在 \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\neq0\\) 时才出现；静态极限下 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=0\\)，退化为静电场。 · The induced electric field appears only when \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\neq0\\); in the static limit \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=0\\) and it reduces to an electrostatic field.",
      "符号约定：闭合路径的绕向与曲面法线由右手定则联系，负号表示感应电场阻碍磁通量变化；判断方向时先定原磁通量及其变化，再用楞次定律。 · Sign convention: the direction around the closed path and the surface normal are related by the right-hand rule, and the minus sign means the induced field opposes the change in magnetic flux; first identify the original flux and its change, then apply Lenz's law.",
      "麦克斯韦补充项只在电通量变化时出现；稳恒电流情形 \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=0\\)，退化为安培定律。 · Maxwell's addition appears only when the electric flux changes; for steady currents \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=0\\) and the law reduces to Ampère's law.",
      "安培环路与所取曲面的法线方向用右手定则联系；法拉第定律的负号体现楞次定律。 · The Ampèrian loop and the surface normal are related by the right-hand rule; the minus sign in Faraday's law expresses Lenz's law.",
      "推导波动方程时取无源真空：\\(Q_{\\mathrm{enc}}=0\\)、\\(I_{\\mathrm{enc}}=0\\)，且远离源，局部可视为平面波。 · The wave equations are derived in source-free vacuum, \\(Q_{\\mathrm{enc}}=0\\) and \\(I_{\\mathrm{enc}}=0\\), far from sources where the wave is locally planar.",
      "\\(c\\) 是真空中的速度；介质中 \\(v=\\dfrac{c}{n}<c\\)，且可能随频率变化（色散）。 · \\(c\\) is the vacuum speed; in a medium \\(v=\\dfrac{c}{n}<c\\), and it may depend on frequency (dispersion).",
      "平面波中 \\(E=cB\\) 只在真空成立；介质中应为 \\(E=vB\\)。 · For a plane wave, \\(E=cB\\) holds only in vacuum; in a medium it becomes \\(E=vB\\).",
      "经典麦克斯韦方程组不包含量子效应；在单光子或强场情形需要量子电动力学。 · The classical Maxwell equations do not include quantum effects; single-photon or strong-field situations require quantum electrodynamics."
    ],
    "keyPoints": [
      "四个方程分别负责：电荷生电场、无磁单极、变化磁场生电场、电流与变化电场生磁场。 · The four equations cover, respectively: charge produces an electric field, no magnetic monopoles, a changing magnetic field produces an electric field, and current plus a changing electric field produces a magnetic field.",
      "麦克斯韦第四方程 = 安培定律 + 麦克斯韦补充；没有补充项就无法处理充电电容器等非稳恒情形。 · Maxwell's fourth equation = Ampère's law + Maxwell's addition; without the extra term it cannot handle non-steady situations such as a charging capacitor.",
      "位移电流不是电荷流，而是 \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；在充电电容器中它等于导线中的传导电流。 · Displacement current is not charge flow but \\(\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); in a charging capacitor it equals the conduction current in the wires.",
      "变化的电场产生磁场，变化的磁场产生电场；两者互相激发形成电磁波。 · A changing electric field produces a magnetic field, and a changing magnetic field produces an electric field; the two sustain each other and form an electromagnetic wave.",
      "麦克斯韦第三方程 = 法拉第定律的场形式：\\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 或 \\(\\nabla\\times\\vec E=-\\dfrac{\\partial\\vec B}{\\partial t}\\)，对任意闭合路径和空间每一点成立，不只是电路公式。 · Maxwell's third equation = Faraday's law in field form: \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) or \\(\\nabla\\times\\vec E=-\\dfrac{\\partial\\vec B}{\\partial t}\\), valid for any closed path and at every point in space, not merely a circuit formula.",
      "感应电场非保守：环流等于感应电动势而不是零，场线没有起点和终点，一般没有全局电势；静电场则 \\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\)，有路径无关的电势差。 · The induced electric field is nonconservative: its circulation equals the induced emf rather than zero, its field lines have no start or end, and it generally has no global potential; an electrostatic field has \\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\) and a path-independent potential difference.",
      "无导体时感应电场仍存在于空间；有闭合导体时 \\(\\varepsilon=\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\) 驱动电流。圆柱对称下 \\(E\\propto r\\)（\\(r\\le R\\)），\\(E\\propto\\dfrac{1}{r}\\)（\\(r\\ge R\\)）。 · The induced electric field exists in space even without a conductor; with a closed conductor, \\(\\varepsilon=\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\) drives a current. For cylindrical symmetry, \\(E\\propto r\\) for \\(r\\le R\\) and \\(E\\propto\\dfrac{1}{r}\\) for \\(r\\ge R\\).",
      "无源真空中 \\(\\vec E\\) 与 \\(\\vec B\\) 都满足波动方程，波速 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)。 · In source-free vacuum both \\(\\vec E\\) and \\(\\vec B\\) satisfy wave equations with speed \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\).",
      "\\(c\\) 是基本常数：真空中与频率、波长、场强及源的运动无关。 · \\(c\\) is a fundamental constant: in vacuum it is independent of frequency, wavelength, field strength, and the motion of the source.",
      "真空平面电磁波是横波：\\(\\vec E\\perp\\vec B\\perp\\vec k\\)，两场同相位，\\(E=cB\\)。 · A vacuum plane electromagnetic wave is transverse: \\(\\vec E\\perp\\vec B\\perp\\vec k\\), the fields are in phase, and \\(E=cB\\).",
      "传播方向由 \\(\\vec E\\times\\vec B\\) 给出；交换 \\(\\vec E\\) 与 \\(\\vec B\\) 的方向会得到相反结论。 · The propagation direction is given by \\(\\vec E\\times\\vec B\\); swapping the field directions reverses the conclusion.",
      "介质中 \\(v=\\dfrac{c}{n}\\)：频率不变、波长改变；真空中的 \\(c\\) 不能直接用于介质。 · In a medium \\(v=\\dfrac{c}{n}\\): frequency is unchanged and wavelength changes; the vacuum value \\(c\\) cannot be used directly in a medium.",
      "麦克斯韦方程组把电、磁与光统一起来；光就是电磁波。 · Maxwell's equations unify electricity, magnetism, and light; light is an electromagnetic wave."
    ],
    "misconceptions": [
      "把位移电流当成真实电荷流；它只是变化电通量的等效电流，间隙中并没有电荷穿过。 · Treating displacement current as a real flow of charge; it is only the equivalent current of a changing electric flux, and no charge crosses the gap.",
      "认为稳恒安培定律足以处理充电电容器；对非稳恒情形必须加 \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。 · Thinking steady Ampère's law is enough for a charging capacitor; for non-steady fields the term \\(\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) must be included.",
      "认为变化电场产生电场、变化磁场产生磁场；正确的耦合是变化磁场产生电场（法拉第），变化电场产生磁场（麦克斯韦补充）。 · Thinking a changing electric field produces an electric field or a changing magnetic field produces a magnetic field; the correct couplings are changing magnetic flux → electric field (Faraday) and changing electric flux → magnetic field (Maxwell's addition).",
      "认为 \\(\\vec E\\) 与 \\(\\vec B\\) 平行，或传播方向沿 \\(\\vec E\\)；实际三者两两垂直，传播方向为 \\(\\vec E\\times\\vec B\\)。 · Thinking \\(\\vec E\\) and \\(\\vec B\\) are parallel or that propagation is along \\(\\vec E\\); actually the three directions are mutually perpendicular and propagation is along \\(\\vec E\\times\\vec B\\).",
      "把 \\(E=cB\\) 用于介质；介质中应为 \\(E=vB\\)。 · Applying \\(E=cB\\) in a medium; in a medium the relation is \\(E=vB\\).",
      "认为 \\(c\\) 依赖频率、波长或源的速度；真空中对所有电磁波都是同一个 \\(c\\)。 · Thinking \\(c\\) depends on frequency, wavelength, or the source speed; in vacuum every electromagnetic wave has the same \\(c\\).",
      "认为电磁波需要介质（“以太”）；电磁波可以在真空中传播。 · Thinking electromagnetic waves need a medium (“aether”); they can propagate through vacuum.",
      "把磁高斯定律理解为“磁场为零”；它只说净磁通为零、不存在磁单极。 · Reading Gauss's law for magnetism as “the magnetic field is zero”; it only says the net flux is zero and no magnetic monopoles exist.",
      "在法拉第定律中丢掉负号，导致感应电场方向错误。 · Dropping the minus sign in Faraday's law, which reverses the induced electric field.",
      "认为感应电场与静电场一样可以用一个标量电势和两点电势差描述；感应电场非保守，两点间“电势差”会依赖路径。 · Thinking an induced electric field, like an electrostatic field, can be described by a scalar potential and a potential difference between two points; for a nonconservative induced field, the “potential difference” depends on the path.",
      "认为没有导线就没有感应电场；变化的磁场直接在空间中激发电场，导体只是让电荷响应并形成电流。 · Thinking there is no induced electric field without a wire; a changing magnetic field directly excites an electric field in space, and a conductor merely allows charge to respond and form a current.",
      "把 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=0\\) 当成普遍规律；它只对静电场成立，对感应电场应为 \\(-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)。 · Treating \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=0\\) as a universal law; it holds only for electrostatic fields, while for an induced field the circulation is \\(-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\).",
      "把法拉第定律只当成 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 的电路公式，忽略它就是麦克斯韦第三方程，描述的是空间中的感应电场。 · Treating Faraday's law only as the circuit formula \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) and overlooking that it is Maxwell's third equation, describing an induced electric field in space."
    ],
    "examples": [
      {
        "title": "例 1 · 充电电容器的位移电流 · Example 1: Displacement current in a charging capacitor",
        "prompt": "半径为 \\(R=5.0\\,\\mathrm{cm}\\) 的圆形平行板电容器以 \\(I=3.0\\,\\mathrm{A}\\) 充电，忽略边缘效应。(a) 求极板间电通量的变化率 \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；(b) 求位移电流 \\(I_{\\mathrm{d}}\\)；(c) 求极板边缘 \\(r=R\\) 处、极板间的磁感应强度 \\(B\\)，并说明方向如何由 \\(\\vec E\\) 的变化决定。 · A circular parallel-plate capacitor of radius \\(R=5.0\\,\\mathrm{cm}\\) is charged with \\(I=3.0\\,\\mathrm{A}\\); ignore edge effects. (a) Find the rate of change of electric flux \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) between the plates; (b) find the displacement current \\(I_{\\mathrm{d}}\\); (c) find the magnetic field \\(B\\) between the plates at the plate edge \\(r=R\\), and explain how its direction is set by the change of \\(\\vec E\\).",
        "steps": [
          "位移电流定义：\\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；在理想电容器中它等于导线中的传导电流，故 \\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\)。 · Definition of displacement current: \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); in an ideal capacitor it equals the conduction current in the wires, so \\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\).",
          "\\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I_{\\mathrm{d}}}{\\varepsilon_0}=\\dfrac{3.0}{8.85\\times10^{-12}}=3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\)。 · \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I_{\\mathrm{d}}}{\\varepsilon_0}=\\dfrac{3.0}{8.85\\times10^{-12}}=3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\).",
          "取以轴线为圆心、半径 \\(r=R\\) 的圆为安培环路；极板间的位移电流全部穿过该圆，故 \\(B(2\\pi R)=\\mu_0I_{\\mathrm{d}}\\)。 · Take a circular Ampèrian loop of radius \\(r=R\\) centered on the axis; the whole displacement current between the plates passes through it, so \\(B(2\\pi R)=\\mu_0I_{\\mathrm{d}}\\).",
          "\\(B=\\dfrac{\\mu_0I_{\\mathrm{d}}}{2\\pi R}=\\dfrac{(4\\pi\\times10^{-7})(3.0)}{2\\pi(0.050)}=1.2\\times10^{-5}\\,\\mathrm{T}\\)。 · \\(B=\\dfrac{\\mu_0I_{\\mathrm{d}}}{2\\pi R}=\\dfrac{(4\\pi\\times10^{-7})(3.0)}{2\\pi(0.050)}=1.2\\times10^{-5}\\,\\mathrm{T}\\).",
          "方向：若 \\(\\vec E\\) 由正极板指向负极板且正在增大，则位移电流沿 \\(\\vec E\\) 方向；用右手定则，四指沿位移电流方向弯曲，拇指给出 \\(\\vec B\\) 的环绕方向。 · Direction: if \\(\\vec E\\) points from the positive plate to the negative plate and is increasing, the displacement current points along \\(\\vec E\\); by the right-hand rule, curl the fingers along the displacement current and the thumb gives the circulation direction of \\(\\vec B\\)."
        ],
        "solution": "\\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\approx3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\)，\\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\)，\\(B\\approx1.2\\times10^{-5}\\,\\mathrm{T}\\)。 · \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\approx3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}}\\), \\(I_{\\mathrm{d}}=3.0\\,\\mathrm{A}\\), and \\(B\\approx1.2\\times10^{-5}\\,\\mathrm{T}\\).",
        "solutionLatex": "\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=3.4\\times10^{11}\\,\\mathrm{V\\,m\\,s^{-1}},\\quad I_{\\mathrm{d}}=3.0\\,\\mathrm{A},\\quad B=1.2\\times10^{-5}\\,\\mathrm{T}"
      },
      {
        "title": "例 2 · 由真空常数计算光速 · Example 2: The speed of light from vacuum constants",
        "prompt": "取 \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\)，\\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\)。(a) 证明 \\(\\mu_0\\varepsilon_0\\) 的单位是 \\(\\mathrm{s^2\\,m^{-2}}\\)；(b) 计算 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)；(c) 说明为什么这个结果支持“光是电磁波”。 · Take \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}\\) and \\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\). (a) Show that \\(\\mu_0\\varepsilon_0\\) has units of \\(\\mathrm{s^2\\,m^{-2}}\\); (b) compute \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\); (c) explain why this result supports the statement that light is an electromagnetic wave.",
        "steps": [
          "单位：\\(\\mu_0\\) 可写成 \\(\\mathrm{N\\,A^{-2}}\\)，\\(\\varepsilon_0\\) 可写成 \\(\\mathrm{A^2\\,s^2\\,N^{-1}\\,m^{-2}}\\)，相乘得 \\(\\mathrm{s^2\\,m^{-2}}\\)。 · Units: \\(\\mu_0\\) can be written as \\(\\mathrm{N\\,A^{-2}}\\) and \\(\\varepsilon_0\\) as \\(\\mathrm{A^2\\,s^2\\,N^{-1}\\,m^{-2}}\\); their product has units \\(\\mathrm{s^2\\,m^{-2}}\\).",
          "\\(\\mu_0\\varepsilon_0=(4\\pi\\times10^{-7})(8.85\\times10^{-12})=1.11\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}}\\)。 · \\(\\mu_0\\varepsilon_0=(4\\pi\\times10^{-7})(8.85\\times10^{-12})=1.11\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}}\\).",
          "\\(c=\\dfrac{1}{\\sqrt{1.11\\times10^{-17}}}=3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(c=\\dfrac{1}{\\sqrt{1.11\\times10^{-17}}}=3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
          "该数值与已知光速一致，且与频率、波长无关；麦克斯韦由此提出光就是电磁波。后来赫兹实验直接探测到电磁波，验证了这一预言。 · This value agrees with the known speed of light and is independent of frequency and wavelength; Maxwell therefore proposed that light is an electromagnetic wave. Hertz later detected electromagnetic waves directly, confirming the prediction."
        ],
        "solution": "\\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，与实测光速一致。 · \\(c\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), in agreement with the measured speed of light.",
        "solutionLatex": "c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}"
      },
      {
        "title": "例 3 · 平面电磁波的 E、B 与传播方向 · Example 3: E, B, and propagation direction of a plane wave",
        "prompt": "真空中一平面电磁波沿 \\(+x\\) 方向传播，频率 \\(f=1.0\\times10^{8}\\,\\mathrm{Hz}\\)，电场振幅 \\(E_{\\max}=6.0\\times10^{2}\\,\\mathrm{V\\,m^{-1}}\\)，方向沿 \\(+y\\)。(a) 求磁场振幅与方向；(b) 写出 \\(E(x,t)\\) 与 \\(B(x,t)\\) 的表达式；(c) 某时刻某点 \\(E\\) 达到最大值时，该点 \\(B\\) 是否也达到最大值？ · A plane electromagnetic wave in vacuum propagates along \\(+x\\) with frequency \\(f=1.0\\times10^{8}\\,\\mathrm{Hz}\\); its electric field has amplitude \\(E_{\\max}=6.0\\times10^{2}\\,\\mathrm{V\\,m^{-1}}\\) along \\(+y\\). (a) Find the magnetic-field amplitude and direction; (b) write \\(E(x,t)\\) and \\(B(x,t)\\); (c) when \\(E\\) reaches its maximum at some point and time, does \\(B\\) also reach its maximum there?",
        "steps": [
          "\\(B_{\\max}=\\dfrac{E_{\\max}}{c}=\\dfrac{6.0\\times10^{2}}{3.00\\times10^{8}}=2.0\\times10^{-6}\\,\\mathrm{T}\\)。 · \\(B_{\\max}=\\dfrac{E_{\\max}}{c}=\\dfrac{6.0\\times10^{2}}{3.00\\times10^{8}}=2.0\\times10^{-6}\\,\\mathrm{T}\\).",
          "传播方向为 \\(\\vec E\\times\\vec B\\)：\\(\\hat j\\times\\hat k=\\hat i\\)，故 \\(\\vec B\\) 沿 \\(+z\\)。 · The propagation direction is \\(\\vec E\\times\\vec B\\): \\(\\hat j\\times\\hat k=\\hat i\\), so \\(\\vec B\\) is along \\(+z\\).",
          "\\(\\omega=2\\pi f=6.28\\times10^{8}\\,\\mathrm{rad\\,s^{-1}}\\)，\\(k=\\dfrac{\\omega}{c}=2.09\\,\\mathrm{rad\\,m^{-1}}\\)。 · \\(\\omega=2\\pi f=6.28\\times10^{8}\\,\\mathrm{rad\\,s^{-1}}\\) and \\(k=\\dfrac{\\omega}{c}=2.09\\,\\mathrm{rad\\,m^{-1}}\\).",
          "\\(E_y=6.0\\times10^{2}\\cos(2.09x-6.28\\times10^{8}t)\\)，\\(B_z=2.0\\times10^{-6}\\cos(2.09x-6.28\\times10^{8}t)\\)（SI 单位）。 · \\(E_y=6.0\\times10^{2}\\cos(2.09x-6.28\\times10^{8}t)\\) and \\(B_z=2.0\\times10^{-6}\\cos(2.09x-6.28\\times10^{8}t)\\) in SI units.",
          "因为 \\(E\\) 与 \\(B\\) 同相位，\\(E\\) 最大时 \\(B\\) 也最大；二者同时为零。 · Because \\(E\\) and \\(B\\) are in phase, \\(B\\) is also maximum when \\(E\\) is maximum, and both vanish together."
        ],
        "solution": "\\(B_{\\max}=2.0\\times10^{-6}\\,\\mathrm{T}\\)，沿 \\(+z\\)；两场同相位。 · \\(B_{\\max}=2.0\\times10^{-6}\\,\\mathrm{T}\\) along \\(+z\\); the fields are in phase.",
        "solutionLatex": "B_{\\max}=\\dfrac{E_{\\max}}{c}=2.0\\times10^{-6}\\,\\mathrm{T},\\quad \\vec E\\times\\vec B\\parallel+\\hat i"
      },
      {
        "title": "例 4 · 检验波动方程 · Example 4: Checking the wave equation",
        "prompt": "无源真空中沿 \\(+x\\) 传播的平面波写成 \\(E_y=E_0\\cos(kx-\\omega t)\\)。把它代入无源真空波动方程 \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\)，求 \\(\\omega\\) 与 \\(k\\) 必须满足的关系；若 \\(\\omega=3.0\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\)、\\(k=1.0\\times10^{7}\\,\\mathrm{rad\\,m^{-1}}\\)，求波速。 · A plane wave propagating along \\(+x\\) in source-free vacuum is written \\(E_y=E_0\\cos(kx-\\omega t)\\). Substitute it into the source-free vacuum wave equation \\(\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\dfrac{\\partial^2\\vec E}{\\partial t^2}\\) to find the required relation between \\(\\omega\\) and \\(k\\); if \\(\\omega=3.0\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\) and \\(k=1.0\\times10^{7}\\,\\mathrm{rad\\,m^{-1}}\\), find the wave speed.",
        "steps": [
          "\\(\\dfrac{\\partial^2E_y}{\\partial x^2}=-k^2E_y\\)，\\(\\dfrac{\\partial^2E_y}{\\partial t^2}=-\\omega^2E_y\\)。 · \\(\\dfrac{\\partial^2E_y}{\\partial x^2}=-k^2E_y\\) and \\(\\dfrac{\\partial^2E_y}{\\partial t^2}=-\\omega^2E_y\\).",
          "代入得 \\(-k^2E_y=-\\mu_0\\varepsilon_0\\omega^2E_y\\)，故 \\(k^2=\\mu_0\\varepsilon_0\\omega^2\\)。 · Substitution gives \\(-k^2E_y=-\\mu_0\\varepsilon_0\\omega^2E_y\\), so \\(k^2=\\mu_0\\varepsilon_0\\omega^2\\).",
          "因此 \\(\\dfrac{\\omega}{k}=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\)；只有满足这个色散关系的波才能在真空中传播。 · Therefore \\(\\dfrac{\\omega}{k}=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c\\); only waves satisfying this dispersion relation can propagate in vacuum.",
          "\\(v=\\dfrac{\\omega}{k}=\\dfrac{3.0\\times10^{15}}{1.0\\times10^{7}}=3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(v=\\dfrac{\\omega}{k}=\\dfrac{3.0\\times10^{15}}{1.0\\times10^{7}}=3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)."
        ],
        "solution": "\\(\\dfrac{\\omega}{k}=c\\)，波速 \\(3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)。 · \\(\\dfrac{\\omega}{k}=c\\), with wave speed \\(3.0\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
        "solutionLatex": "\\dfrac{\\omega}{k}=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}=c"
      },
      {
        "title": "例 5 · 主张—证据—推理：安培定律失效了吗？ · Example 5: Claim–evidence–reasoning: does Ampère's law fail?",
        "prompt": "一名学生说：“充电电容器中间是断开的，所以电流不连续，安培定律在电容器处失效。”请用麦克斯韦补充评价这一说法，并说明极板间为什么仍有磁场。 · A student claims: “A charging capacitor is broken in the middle, so the current is not continuous and Ampère's law fails at the capacitor.” Evaluate this claim using Maxwell's addition, and explain why a magnetic field still exists between the plates.",
        "steps": [
          "主张：电流不连续，安培定律失效。 · Claim: the current is not continuous and Ampère's law fails.",
          "证据：取套住导线的安培环路。若以穿过导线的平面为曲面，\\(I_{\\mathrm{enc}}=I\\)；若以鼓过电容器间隙的曲面为曲面，\\(I_{\\mathrm{enc}}=0\\)。只用稳恒安培定律会对同一环路给出不同结果。 · Evidence: take an Ampèrian loop around the wire. A surface through the wire gives \\(I_{\\mathrm{enc}}=I\\), while a surface bulging through the capacitor gap gives \\(I_{\\mathrm{enc}}=0\\). Steady Ampère's law alone would give different results for the same loop.",
          "推理：间隙中电场 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 随极板电荷增加而增大，电通量变化率为 \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I}{\\varepsilon_0}\\)，故位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=I\\)。 · Reasoning: the field in the gap, \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\), grows as the plate charge increases; the electric flux changes at \\(\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=\\dfrac{I}{\\varepsilon_0}\\), so the displacement current is \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}=I\\).",
          "麦克斯韦补充把 \\(\\mu_0I_{\\mathrm{d}}\\) 加入安培定律，两个曲面给出相同的 \\(B\\)；因此安培定律没有被推翻，而是被补全为安培–麦克斯韦定律。 · Maxwell's addition inserts \\(\\mu_0I_{\\mathrm{d}}\\) into Ampère's law, so both surfaces give the same \\(B\\); Ampère's law is not overturned but completed into the Ampère–Maxwell law.",
          "极板间的 \\(B\\) 沿以轴线为圆心的圆环方向，大小由 \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{d,enc}}\\) 给出；这正是一个变化的电场产生磁场的例子。 · The field between the plates circulates around the axis, with magnitude set by \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{d,enc}}\\); this is exactly a changing electric field producing a magnetic field."
        ],
        "solution": "说法错误；位移电流使总电流连续，安培–麦克斯韦定律在极板间仍成立，变化的电场产生环绕的磁场。 · The claim is false; the displacement current makes the total current continuous, the Ampère–Maxwell law still holds between the plates, and the changing electric field produces a circulating magnetic field.",
        "solutionLatex": "\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}"
      },
      {
        "title": "例 6 · 变化磁场激发的环形电场 · Example 6: Circulating electric field from a changing magnetic field",
        "prompt": "半径 \\(R=0.10\\,\\mathrm{m}\\) 的圆形区域内存在垂直纸面向里的匀强磁场，磁感应强度以 \\(\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=0.20\\,\\mathrm{T\\,s^{-1}}\\) 均匀增大。求 \\(r=0.050\\,\\mathrm{m}\\) 与 \\(r=0.20\\,\\mathrm{m}\\) 处的感应电场大小和方向，并验证 \\(r=0.20\\,\\mathrm{m}\\) 处沿圆周的环流等于该圆内磁通量的变化率大小。 · A uniform magnetic field into the page fills a circular region of radius \\(R=0.10\\,\\mathrm{m}\\) and increases at \\(\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=0.20\\,\\mathrm{T\\,s^{-1}}\\). Find the magnitude and direction of the induced electric field at \\(r=0.050\\,\\mathrm{m}\\) and \\(r=0.20\\,\\mathrm{m}\\), and verify that the circulation around the circle \\(r=0.20\\,\\mathrm{m}\\) equals the magnitude of the rate of change of magnetic flux through that circle.",
        "steps": [
          "由圆柱对称性，感应电场沿以圆心为圆心的圆周切线方向。磁场垂直纸面向里且增大，感应电场沿逆时针方向（俯视纸面），以阻碍磁通量增大。 · By cylindrical symmetry the induced electric field is tangent to circles centered on the region. The magnetic field points into the page and its magnitude increases, so the induced electric field is counterclockwise when viewed from above the page, opposing the increase in flux.",
          "\\(r=0.050\\,\\mathrm{m}<R\\)：取半径 \\(r\\) 的同心圆，\\(E(2\\pi r)=\\pi r^{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\)，故 \\(E=\\dfrac{r}{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=\\dfrac{0.050}{2}(0.20)=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\)。 · For \\(r=0.050\\,\\mathrm{m}<R\\), take a concentric circle of radius \\(r\\): \\(E(2\\pi r)=\\pi r^{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\), so \\(E=\\dfrac{r}{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=\\dfrac{0.050}{2}(0.20)=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\).",
          "\\(r=0.20\\,\\mathrm{m}>R\\)：只有半径 \\(R\\) 内的磁通量变化，\\(E(2\\pi r)=\\pi R^{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\)，故 \\(E=\\dfrac{R^{2}}{2r}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=\\dfrac{(0.10)^{2}}{2(0.20)}(0.20)=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\)。 · For \\(r=0.20\\,\\mathrm{m}>R\\), only the flux inside radius \\(R\\) changes: \\(E(2\\pi r)=\\pi R^{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\), so \\(E=\\dfrac{R^{2}}{2r}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=\\dfrac{(0.10)^{2}}{2(0.20)}(0.20)=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\).",
          "方向均为逆时针；在 \\(r=R\\) 处两式都给出 \\(E=1.0\\times10^{-2}\\,\\mathrm{V\\,m^{-1}}\\)，场强连续。 · Both directions are counterclockwise; at \\(r=R\\) both expressions give \\(E=1.0\\times10^{-2}\\,\\mathrm{V\\,m^{-1}}\\), so the field magnitude is continuous.",
          "验证：\\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=E(2\\pi r)=(5.0\\times10^{-3})(2\\pi)(0.20)=6.3\\times10^{-3}\\,\\mathrm{V}\\)；而 \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=\\pi R^{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=\\pi(0.10)^{2}(0.20)=6.3\\times10^{-3}\\,\\mathrm{V}\\)，大小相等，负号表示感应电场阻碍磁通量增大。 · Check: \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=E(2\\pi r)=(5.0\\times10^{-3})(2\\pi)(0.20)=6.3\\times10^{-3}\\,\\mathrm{V}\\), while \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=\\pi R^{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=\\pi(0.10)^{2}(0.20)=6.3\\times10^{-3}\\,\\mathrm{V}\\); the magnitudes agree, and the minus sign means the induced field opposes the increase in flux."
        ],
        "solution": "\\(E=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\)，两处均沿逆时针切线方向；沿 \\(r=0.20\\,\\mathrm{m}\\) 圆周的环流为 \\(6.3\\times10^{-3}\\,\\mathrm{V}\\)，等于圆内磁通量变化率的大小。 · \\(E=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\), tangent and counterclockwise at both points; the circulation around \\(r=0.20\\,\\mathrm{m}\\) is \\(6.3\\times10^{-3}\\,\\mathrm{V}\\), equal to the magnitude of the rate of change of flux through the circle.",
        "solutionLatex": "E=\\dfrac{r}{2}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\ (r<R),\\quad E=\\dfrac{R^{2}}{2r}\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=5.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\ (r>R)"
      },
      {
        "title": "例 7 · 主张—证据—推理：感应电场能用电势描述吗？ · Example 7: Claim–evidence–reasoning: can an induced electric field be described by a potential?",
        "prompt": "一名学生说：“感应电场和静电场都是电场，所以也可以用两点间的电势差 \\(\\Delta V=Ed\\) 来描述。”请比较静电场与变化磁场激发的感应电场，评价这一说法。 · A student says: “An induced electric field is still an electric field, so it can also be described by a potential difference \\(\\Delta V=Ed\\) between two points.” Compare an electrostatic field with the induced field from a changing magnetic field and evaluate this claim.",
        "steps": [
          "主张：两种电场都可以用标量电势差描述。 · Claim: both kinds of electric field can be described by a scalar potential difference.",
          "证据（静电场）：静止电荷产生的 \\(\\vec E_{\\mathrm{static}}\\) 是保守场，\\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\)，可定义 \\(V\\) 使 \\(\\vec E_{\\mathrm{static}}=-\\nabla V\\)，两点电势差与路径无关。 · Evidence (electrostatic field): the field \\(\\vec E_{\\mathrm{static}}\\) produced by charges at rest is conservative, \\(\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0\\), so a potential \\(V\\) can be defined with \\(\\vec E_{\\mathrm{static}}=-\\nabla V\\), and the potential difference between two points is path-independent.",
          "证据（感应电场）：变化磁通量产生的 \\(\\vec E_{\\mathrm{ind}}\\) 满足 \\(\\oint\\vec E_{\\mathrm{ind}}\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\neq0\\)，沿闭合路径做功不为零；若存在单值电势，闭合路径积分必须为零，矛盾。 · Evidence (induced field): the field \\(\\vec E_{\\mathrm{ind}}\\) produced by a changing magnetic flux satisfies \\(\\oint\\vec E_{\\mathrm{ind}}\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\neq0\\), so the work around a closed path is nonzero; if a single-valued potential existed, its integral around a closed path would have to be zero, a contradiction.",
          "推理：因此感应电场没有全局标量电势；两点间“电势差”会依赖路径，只有感应电动势 \\(\\varepsilon=\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\) 这个环流对固定回路有确定意义。 · Reasoning: an induced electric field therefore has no global scalar potential; a “potential difference” between two points depends on the path, and only the induced emf \\(\\varepsilon=\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\), a circulation around a fixed loop, is well defined.",
          "结论：说法只在静电场情形成立；对感应电场必须用非保守场的环流或电动势描述。 · Conclusion: the claim holds only for electrostatic fields; an induced electric field must be described by the circulation or emf of a nonconservative field."
        ],
        "solution": "说法错误；静电场保守、有路径无关的电势差，感应电场非保守、没有全局电势，只能用环流或电动势描述。 · The claim is false: an electrostatic field is conservative and has a path-independent potential difference, while an induced electric field is nonconservative, has no global potential, and can only be described by a circulation or emf.",
        "solutionLatex": "\\oint\\vec E_{\\mathrm{static}}\\cdot\\mathrm{d}\\vec l=0,\\qquad \\oint\\vec E_{\\mathrm{ind}}\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\neq0"
      }
    ],
    "examTips": [
      "先写四个方程的名称与积分形式，再代入具体情境；通量方程用闭合曲面，环流方程用闭合回路。 · Write the names and integral forms of the four equations first, then substitute the situation; flux equations use closed surfaces and circulation equations use closed loops.",
      "遇到充电或放电电容器，先判断电通量是否变化；若变化，必须保留位移电流项。 · For a charging or discharging capacitor, first decide whether the electric flux changes; if it does, the displacement-current term must be kept.",
      "位移电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) 不是电荷流；它的方向沿 \\(\\dfrac{\\mathrm{d}\\vec E}{\\mathrm{d}t}\\)。 · Displacement current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\) is not charge flow; its direction is along \\(\\dfrac{\\mathrm{d}\\vec E}{\\mathrm{d}t}\\).",
      "推导 \\(c\\) 时先写波动方程，再与标准形式比较；最后用单位与 \\(3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\) 检验。 · When deriving \\(c\\), write the wave equation, compare with the standard form, and check with units and the value \\(3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\).",
      "平面波题先由 \\(\\vec E\\times\\vec B\\) 定传播方向，或由传播方向与 \\(\\vec E\\) 定 \\(\\vec B\\)；真空中有 \\(E=cB\\)。 · For plane-wave problems, use \\(\\vec E\\times\\vec B\\) to find the propagation direction, or use the propagation direction and \\(\\vec E\\) to find \\(\\vec B\\); in vacuum \\(E=cB\\).",
      "介质中不要再用 \\(c\\)：\\(v=\\dfrac{c}{n}\\)，频率不变、波长变为 \\(\\dfrac{\\lambda_0}{n}\\)。 · Do not use \\(c\\) in a medium: \\(v=\\dfrac{c}{n}\\), frequency is unchanged, and wavelength becomes \\(\\dfrac{\\lambda_0}{n}\\).",
      "AP 简答按“主张—证据—推理”组织：先写方程，再代入几何或对称性，最后说明方向与能量。 · Organize AP free response as claim–evidence–reasoning: write the equation, substitute the geometry or symmetry, and finish with direction and energy.",
      "看到“感应电场”先问：磁通量是否变化？变化磁场在空间中激发非保守电场，不能直接套用 \\(V=Ed\\) 或 \\(U=qV\\)。 · When you see “induced electric field,” first ask whether the magnetic flux is changing; a changing magnetic field excites a nonconservative electric field in space, so \\(V=Ed\\) and \\(U=qV\\) cannot be applied directly.",
      "写麦克斯韦第三方程时用 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 或 \\(\\nabla\\times\\vec E=-\\dfrac{\\partial\\vec B}{\\partial t}\\)；前者适合环路，后者适合局部场。 · Write Maxwell's third equation as \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) or \\(\\nabla\\times\\vec E=-\\dfrac{\\partial\\vec B}{\\partial t}\\); the first form suits loops, the second suits local fields.",
      "判断感应电场方向：先定曲面法线与路径绕向的右手关系，再用楞次定律；负号不是“大小”，而是方向信息。 · To find the direction of an induced electric field, first relate the path direction and surface normal by the right-hand rule, then apply Lenz's law; the minus sign is directional information, not a magnitude.",
      "区分电动势与电势差：电动势是单位电荷绕闭合路径一周获得的能量，电势差只对保守场有路径无关意义。 · Distinguish emf from potential difference: emf is the energy per unit charge gained around a closed path, while a potential difference is path-independent only for a conservative field."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.4",
        "title": "安培定律 · Ampère's Law",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应 · Electromagnetic Induction",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.6",
        "title": "LC 电路 · Circuits with Capacitors and Inductors (LC Circuits)",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.1",
        "title": "磁场 · Magnetic Fields",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应 · Faraday electromagnetic induction"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：12.4 安培定律给出稳恒电流的磁场，13.2 法拉第定律给出变化磁场产生电场；麦克斯韦补充把两者推广到非稳恒情形；13.2 的法拉第定律就是麦克斯韦第三方程，说明变化磁场激发非保守感应电场。 · Upstream: 12.4 Ampère's law gives the magnetic field of steady currents, and 13.2 Faraday's law gives the electric field produced by a changing magnetic field; Maxwell's addition extends both to non-steady situations; Faraday's law from 13.2 is Maxwell's third equation, showing that a changing magnetic field excites a nonconservative induced electric field.",
      "数学：通量与环流、矢量微积分、偏导数与波动方程；推导 \\(c\\) 时要把方程与标准波动方程逐项比较。 · Mathematics: flux and circulation, vector calculus, partial derivatives, and the wave equation; deriving \\(c\\) requires matching the equation to the standard wave equation term by term.",
      "下游：电磁波谱、光的反射与折射、天线与无线电通信；LC 振荡电路可作为电磁辐射的入门模型；非保守感应电场与变化电场互相激发，是电磁波能够脱离电荷和电流传播的关键。 · Downstream: the electromagnetic spectrum, reflection and refraction of light, antennas and radio communication; an LC oscillating circuit is an introductory model of electromagnetic radiation; the mutual excitation of the nonconservative induced electric field and a changing electric field is what allows electromagnetic waves to propagate away from charges and currents.",
      "跨学科：光学、通信工程、遥感与医学成像都建立在电磁波之上；赫兹实验是理论预言与实验验证结合的经典案例。 · Cross-disciplinary: optics, communications engineering, remote sensing, and medical imaging all rest on electromagnetic waves; Hertz's experiment is a classic case of a theoretical prediction confirmed by experiment."
    ],
    "intuitionDetailed": "先看充电中的平行板电容器。导线里有传导电流 \\(I\\)，但电荷并不穿过极板间的间隙；间隙中的电场随极板电荷增加而增大。取一个套住导线的安培环路：如果以穿过导线的平面作为曲面，包围的电流是 \\(I\\)；如果以鼓过间隙的曲面作为曲面，包围的传导电流是零。只用稳恒安培定律会对同一个环路给出两个不同的磁场，这就是矛盾。麦克斯韦指出，间隙中变化的电通量 \\(\\Phi_E\\) 等效于一股电流 \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；在理想平行板电容器中它恰好等于 \\(I\\)。把 \\(\\mu_0I_{\\mathrm{d}}\\) 加入安培定律后，两个曲面给出同一个 \\(B\\)，总电流保持连续。再看电磁波：变化的磁场产生电场（法拉第定律），变化的电场又产生磁场（麦克斯韦补充）；两者互相“接力”，即使离开电荷和电流也能在真空中传播。取无源真空，把法拉第定律取旋度并用安培–麦克斯韦定律消去 \\(\\vec B\\)，就得到 \\(\\vec E\\) 的波动方程；\\(\\vec B\\) 也满足同一形式的方程。与标准波动方程比较，波速为 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)。在平面电磁波中，\\(\\vec E\\)、\\(\\vec B\\) 与传播方向 \\(\\vec k\\) 两两垂直，\\(\\vec E\\) 与 \\(\\vec B\\) 同相位；若 \\(\\vec E\\) 沿 \\(+y\\)、波沿 \\(+x\\)，则 \\(\\vec B\\) 沿 \\(+z\\)，因为 \\(\\hat j\\times\\hat k=\\hat i\\)。固定时刻看，场强沿传播方向呈正弦剖面；固定位置看，场随时间正弦振荡，两种图像描述的是同一个波。 · First consider a charging parallel-plate capacitor. There is a conduction current \\(I\\) in the wires, but charge does not cross the gap between the plates; the electric field in the gap grows as the plate charge increases. Take an Ampèrian loop around the wire: a surface through the wire encloses current \\(I\\), while a surface bulging through the gap encloses zero conduction current. Steady Ampère's law alone would give two different magnetic fields for the same loop, which is the contradiction. Maxwell pointed out that the changing electric flux \\(\\Phi_E\\) in the gap is equivalent to a current \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); in an ideal parallel-plate capacitor it equals \\(I\\) exactly. Adding \\(\\mu_0I_{\\mathrm{d}}\\) to Ampère's law makes both surfaces give the same \\(B\\) and keeps the total current continuous. Now consider an electromagnetic wave: a changing magnetic field produces an electric field (Faraday's law), and a changing electric field produces a magnetic field (Maxwell's addition); the two sustain each other and can propagate through vacuum even away from charges and currents. In source-free vacuum, take the curl of Faraday's law and use the Ampère–Maxwell law to eliminate \\(\\vec B\\), obtaining the wave equation for \\(\\vec E\\); \\(\\vec B\\) satisfies the same form. Comparing with the standard wave equation identifies the speed as \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\). In a plane electromagnetic wave, \\(\\vec E\\), \\(\\vec B\\), and the propagation direction \\(\\vec k\\) are mutually perpendicular, and \\(\\vec E\\) and \\(\\vec B\\) are in phase; if \\(\\vec E\\) is along \\(+y\\) and the wave travels along \\(+x\\), then \\(\\vec B\\) is along \\(+z\\) because \\(\\hat j\\times\\hat k=\\hat i\\). At a fixed time the field magnitudes form a sinusoidal profile along the propagation direction; at a fixed position the fields oscillate sinusoidally in time. The two pictures describe the same wave. 法拉第定律的场形式（麦克斯韦第三方程）进一步说明：即使没有导线，变化的磁场也会在空间中激发感应电场；感应电场线没有起点和终点，沿闭合路径的环流等于 \\(-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)，所以它不是保守场，不能用一个全局电势描述。静电场则相反：由电荷产生，电场线起止于电荷，环流为零，电势差与路径无关。 · The field form of Faraday's law (Maxwell's third equation) further shows that even without a wire, a changing magnetic field excites an induced electric field in space; its field lines have no start or end, and its circulation around a closed path equals \\(-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\), so it is not conservative and cannot be described by a global potential. An electrostatic field is different: it is produced by charge, its field lines begin and end on charge, its circulation is zero, and potential differences are path-independent.",
    "development": [
      "回顾静电与稳恒电流：电高斯定律、磁高斯定律与安培定律在稳恒情形成立。 · Review electrostatics and steady currents: Gauss's laws and Ampère's law hold in steady situations.",
      "发现矛盾：充电电容器使安培定律对不同曲面给出不同结果。 · Find the contradiction: a charging capacitor makes Ampère's law give different results for different surfaces.",
      "引入位移电流：\\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)，写入安培–麦克斯韦定律。 · Introduce displacement current, \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\), and write the Ampère–Maxwell law.",
      "用四个方程统一电与磁，并说明时变场如何互相激发。 · Use the four equations to unify electricity and magnetism and explain how time-varying fields excite each other.",
      "把第三方程写成 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 与 \\(\\nabla\\times\\vec E=-\\dfrac{\\partial\\vec B}{\\partial t}\\)，用圆柱对称例子计算感应电场，并与静电场的 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=0\\) 对比。 · Write the third equation as \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) and \\(\\nabla\\times\\vec E=-\\dfrac{\\partial\\vec B}{\\partial t}\\), compute the induced field in a cylindrically symmetric example, and contrast it with the electrostatic result \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=0\\).",
      "在无源真空中推导波动方程，得到 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)。 · Derive the wave equations in source-free vacuum and obtain \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\).",
      "分析平面波的结构与电场、磁场振幅的比值，并用单位、数量级和实验（赫兹实验、光速测量）检验。 · Analyze the structure of a plane wave and the ratio of the field amplitudes, and check with units, order of magnitude, and experiments (Hertz's experiment and measurements of the speed of light)."
    ],
    "checks": [
      "写出四个麦克斯韦方程，并说明哪一个含位移电流、哪一个体现没有磁单极。 · Write the four Maxwell equations and identify which one contains displacement current and which one expresses the absence of magnetic monopoles.",
      "充电电容器间隙中是否有电荷穿过？位移电流与导线中的传导电流有什么关系？ · Does charge cross the gap of a charging capacitor? How is the displacement current related to the conduction current in the wires?",
      "为什么说电磁波不需要介质？\\(c\\) 由哪些真空常数决定？ · Why do electromagnetic waves not need a medium? Which vacuum constants determine \\(c\\)?",
      "真空中平面电磁波的 \\(\\vec E\\)、\\(\\vec B\\) 与传播方向有什么关系？若 \\(\\vec E\\) 沿 \\(+y\\)、波沿 \\(+x\\)，\\(\\vec B\\) 沿什么方向？ · How are \\(\\vec E\\), \\(\\vec B\\), and the propagation direction related in a vacuum plane wave? If \\(\\vec E\\) is along \\(+y\\) and the wave travels along \\(+x\\), what is the direction of \\(\\vec B\\)?",
      "若频率加倍，真空中的 \\(c\\)、\\(\\lambda\\)、\\(T\\) 如何变化？进入介质后呢？ · If the frequency doubles, how do \\(c\\), \\(\\lambda\\), and \\(T\\) change in vacuum? What changes in a medium?",
      "如何用单位检验 \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)？ · How can units be used to check \\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\)?",
      "麦克斯韦第三方程的积分形式和微分形式分别是什么？它描述的是“电动势”还是“感应电场”？ · What are the integral and differential forms of Maxwell's third equation? Does it describe an emf or an induced electric field?",
      "为什么感应电场不能定义全局电势，而静电场可以？用 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\) 说明。 · Why can an induced electric field not have a global potential while an electrostatic field can? Explain using \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\).",
      "没有导线时，变化磁场是否仍在空间产生电场？若放一个闭合导体，什么量等于 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\)？ · Without a wire, does a changing magnetic field still produce an electric field in space? If a closed conductor is present, what quantity equals \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l\\)?"
    ],
    "vocabulary": [
      {
        "termZh": "麦克斯韦方程组",
        "termEn": "Maxwell's equations",
        "defZh": "完整描述经典电磁现象的四条方程：电高斯定律、磁高斯定律、法拉第定律与安培–麦克斯韦定律。",
        "defEn": "The four equations that fully describe classical electromagnetism: Gauss's law for electricity, Gauss's law for magnetism, Faraday's law, and the Ampère–Maxwell law."
      },
      {
        "termZh": "位移电流",
        "termEn": "displacement current",
        "defZh": "变化电通量的等效电流，\\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)；不是电荷的流动。",
        "defEn": "The equivalent current of a changing electric flux, \\(I_{\\mathrm{d}}=\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\); it is not a flow of charge."
      },
      {
        "termZh": "安培–麦克斯韦定律",
        "termEn": "Ampère–Maxwell law",
        "defZh": "磁场环流等于传导电流与位移电流之和：\\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)。",
        "defEn": "The circulation of the magnetic field equals the sum of conduction and displacement currents: \\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0I_{\\mathrm{enc}}+\\mu_0\\varepsilon_0\\dfrac{\\mathrm{d}\\Phi_E}{\\mathrm{d}t}\\)."
      },
      {
        "termZh": "电磁波",
        "termEn": "electromagnetic wave",
        "defZh": "相互垂直、同相位的振荡电场与振荡磁场在空间中传播形成的横波；真空中速度为 \\(c\\)。",
        "defEn": "A transverse wave formed by mutually perpendicular, in-phase oscillating electric and magnetic fields propagating through space; its vacuum speed is \\(c\\)."
      },
      {
        "termZh": "波动方程",
        "termEn": "wave equation",
        "defZh": "形如 \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\) 的偏微分方程；其解是以速度 \\(v\\) 传播的波。",
        "defEn": "A partial differential equation of the form \\(\\nabla^2 f=\\dfrac{1}{v^2}\\dfrac{\\partial^2 f}{\\partial t^2}\\), whose solutions are waves traveling at speed \\(v\\)."
      },
      {
        "termZh": "真空光速",
        "termEn": "speed of light in vacuum",
        "defZh": "\\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\)，是真空中所有电磁波的速度。",
        "defEn": "\\(c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^{8}\\,\\mathrm{m\\,s^{-1}}\\), the speed of every electromagnetic wave in vacuum."
      },
      {
        "termZh": "平面电磁波",
        "termEn": "plane electromagnetic wave",
        "defZh": "在垂直于传播方向的平面上，\\(\\vec E\\) 与 \\(\\vec B\\) 大小和方向都相同的电磁波；\\(\\vec E\\perp\\vec B\\perp\\vec k\\)，两场同相位。",
        "defEn": "An electromagnetic wave whose \\(\\vec E\\) and \\(\\vec B\\) have the same magnitude and direction everywhere on planes perpendicular to propagation; \\(\\vec E\\perp\\vec B\\perp\\vec k\\) and the fields are in phase."
      },
      {
        "termZh": "感应电场（非保守场）",
        "termEn": "induced electric field (nonconservative field)",
        "defZh": "由变化的磁通量在空间中激发的电场；沿闭合路径的环流 \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\neq0\\)，一般没有单值标量电势。",
        "defEn": "The electric field excited in space by a changing magnetic flux; its circulation around a closed path is \\(\\oint\\vec E\\cdot\\mathrm{d}\\vec l=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\neq0\\), so it generally has no single-valued scalar potential."
      }
    ]
  },

  "13.8": {
    "id": "em/em-u13/13.8",
    "subject": "em",
    "chapterId": "em-u13",
    "unitCode": "13",
    "unitTitleZh": "电磁感应",
    "unitTitleEn": "Electromagnetic Induction",
    "code": "13.8",
    "titleZh": "感应回路受力与运动",
    "titleEn": "Forces and Motion of Induced-Current Loops",
    "layer": "ap",
    "summary": "当感应电流流经处在外部磁场中的导体段时，该段受到磁力 \\(\\vec F=I\\vec L\\times\\vec B\\)；只有位于场区内的线段受力，场区外的线段不受磁力。若回路只有一部分在场内，各受力段磁力的矢量和一般不为零，可产生平动加速度；若这些力的作用线不通过质心，还会产生磁力矩和转动加速度。对滑棒或进入、离开场区的线框应用牛顿第二定律 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\)，可得到随速度增大的磁阻力、终端速度和指数趋近；完全进入匀强恒定场区后磁通量不变，感应电流与磁力都消失。 · When an induced current flows through conductor segments inside an external magnetic field, each segment experiences the magnetic force \\(\\vec F=I\\vec L\\times\\vec B\\); only segments inside the field feel a force, while segments outside feel none. If only part of the loop is inside, the vector sum of the forces on the in-field segments is generally nonzero and can produce translational acceleration; if the lines of action do not pass through the center of mass, the forces also produce a magnetic torque and rotational acceleration. Applying Newton's second law to a sliding bar or to a loop entering or leaving a field region, \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\), gives a drag that grows with speed, a terminal speed, and exponential approach; once the loop is fully inside a uniform steady field, the flux is constant and both the induced current and the magnetic force vanish.",
    "learningObjectives": [
      "能逐段判断回路中哪些线段位于外部磁场内，并对每个受力段写出 \\(\\vec F=I\\vec L\\times\\vec B\\)，说明场区外线段不受磁力。 · Determine segment by segment which parts of a loop lie inside the external field, write \\(\\vec F=I\\vec L\\times\\vec B\\) for each force-bearing segment, and explain why segments outside the field feel no magnetic force.",
      "能求各受力段磁力的矢量和与力矩和，区分平动加速度 \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\) 与转动加速度 \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\)。 · Find the vector sum of the magnetic forces and the sum of their torques, and distinguish translational acceleration \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\) from rotational acceleration \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\).",
      "能说明回路所受磁力正比于感应电流，而感应电流由磁通量变化率、回路电阻和回路速度共同决定，并导出 \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\)。 · Explain that the magnetic force on a loop is proportional to the induced current, that the current depends on the rate of change of flux, the loop resistance, and the loop speed, and derive \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\).",
      "能对滑棒、下落线框或进出场区的线框应用牛顿第二定律，求加速度、终端速度、时间常数、速度图像与停止距离。 · Apply Newton's second law to a sliding bar, a falling loop, or a loop entering or leaving a field region, and find the acceleration, terminal speed, time constant, velocity graph, and stopping distance.",
      "能用牛顿第三定律与楞次定律说明磁体与感应回路之间的相互作用力，并做机械能、焦耳热与动能变化的能量簿记。 · Use Newton's third law and Lenz's law to explain the interaction forces between a magnet and an induced-current loop, and keep an energy account of mechanical work, Joule heat, and kinetic-energy change."
    ],
    "essentialKnowledge": [
      "外部磁场只对位于场区内的载流线段施加磁力 \\(\\vec F=I\\vec L\\times\\vec B\\)；场区外线段所在处 \\(\\vec B=0\\)，磁力为零。 · The external field exerts \\(\\vec F=I\\vec L\\times\\vec B\\) only on current-carrying segments inside the field region; outside the region \\(\\vec B=0\\), so the magnetic force is zero.",
      "一段长为 \\(L\\)、电流为 \\(I\\) 的直导线在匀强磁场中的磁力大小为 \\(F=BIL\\sin\\theta\\)，\\(\\theta\\) 是 \\(\\vec L\\) 与 \\(\\vec B\\) 的夹角；垂直时 \\(F=BIL\\)。 · For a straight segment of length \\(L\\) carrying current \\(I\\) in a uniform field, the magnetic force has magnitude \\(F=BIL\\sin\\theta\\), where \\(\\theta\\) is the angle between \\(\\vec L\\) and \\(\\vec B\\); when perpendicular, \\(F=BIL\\).",
      "回路净磁力是各受力段磁力的矢量和 \\(\\vec F_{\\mathrm{net}}=\\sum_i I\\vec L_i\\times\\vec B\\)；整个闭合回路都在匀强磁场中时 \\(\\sum_i\\vec L_i=0\\)，净力为零。 · The net magnetic force is the vector sum over force-bearing segments, \\(\\vec F_{\\mathrm{net}}=\\sum_i I\\vec L_i\\times\\vec B\\); when the entire closed loop lies in a uniform field, \\(\\sum_i\\vec L_i=0\\) and the net force is zero.",
      "回路只有一部分在场内时，净力一般不为零；线框进入场区时受力段是前边，离开时是后边，完全处于匀强恒定场区时没有感应电流，也没有磁力。 · When only part of the loop is inside the field, the net force is generally nonzero; the force-bearing segment is the leading side while entering and the trailing side while leaving, and when the loop is fully inside a uniform steady field there is no induced current and no magnetic force.",
      "净力产生平动加速度 \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\)；净力与速度反向时回路减速，同向时加速。 · The net force produces translational acceleration \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\); the loop slows when the net force opposes its velocity and speeds up when the net force is along the velocity.",
      "各受力段磁力对质心或转轴的力矩之和为 \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\)，产生转动加速度 \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\)；即使净力为零，力矩也可能不为零。 · The torques of the magnetic forces about the center of mass or a pivot sum to \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\) and produce rotational acceleration \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\); even when the net force is zero, the torque need not be.",
      "整个载流回路在匀强磁场中可等效为磁矩 \\(\\vec\\mu=I\\vec A\\)，磁力矩 \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\)，大小 \\(\\tau=IAB\\sin\\theta\\)；\\(N\\) 匝时为 \\(\\mu=NIA\\)。 · A current loop in a uniform field can be described by its magnetic moment \\(\\vec\\mu=I\\vec A\\), with magnetic torque \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\) and magnitude \\(\\tau=IAB\\sin\\theta\\); for \\(N\\) turns, \\(\\mu=NIA\\).",
      "各受力段磁力（以及只有部分在场内时的净力）正比于感应电流 \\(I\\)：\\(F\\propto I\\)；而 \\(I=\\dfrac{\\varepsilon}{R}\\)，\\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)，所以磁力最终由磁通量变化率与电阻决定。 · The magnetic force on each in-field segment (and the net force when only part of the loop is inside) is proportional to the induced current \\(I\\): \\(F\\propto I\\); since \\(I=\\dfrac{\\varepsilon}{R}\\) and \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\), the force is ultimately set by the rate of change of flux and the resistance.",
      "动生情形中 \\(\\varepsilon=BLv\\)，故 \\(I=\\dfrac{BLv}{R}\\)，磁阻力 \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\)；它随速度线性增大，方向与速度相反。 · In the motional case \\(\\varepsilon=BLv\\), so \\(I=\\dfrac{BLv}{R}\\) and the magnetic drag is \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\); it grows linearly with speed and points opposite to the velocity.",
      "若磁通量变化来自随时间变化的磁场而不是回路运动，则 \\(\\varepsilon=A\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\cos\\theta\\)，磁力依赖 \\(B\\) 与 \\(\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\)，而不是回路速度；不要无条件套用 \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\)。 · If the flux change comes from a time-varying field rather than loop motion, then \\(\\varepsilon=A\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\cos\\theta\\), and the force depends on \\(B\\) and \\(\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\), not on the loop speed; do not apply \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\) unconditionally.",
      "对滑棒或进入场区的线框，牛顿第二定律写成 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\)；终端速度 \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\)，时间常数 \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\)。 · For a sliding bar or a loop entering a field region, Newton's second law reads \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\); the terminal speed is \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\) and the time constant is \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\).",
      "撤去外力后 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，停止距离 \\(x_{\\mathrm{stop}}=v_0\\tau\\)，初动能全部转化为焦耳热 \\(\\dfrac{1}{2}mv_0^{2}\\)。 · After the applied force is removed, \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\), the stopping distance is \\(x_{\\mathrm{stop}}=v_0\\tau\\), and all the initial kinetic energy \\(\\dfrac{1}{2}mv_0^{2}\\) becomes Joule heat.",
      "磁体与回路之间的力是牛顿第三定律对：感应电流排斥靠近的磁体、吸引远离的磁体，磁体对回路施加等大反向的力；这保证机械功与焦耳热之间的能量守恒。 · The forces between a magnet and a loop form a Newton's-third-law pair: the induced current repels an approaching magnet and attracts a receding one, while the magnet exerts an equal and opposite force on the loop; this enforces energy conservation between mechanical work and Joule heat."
    ],
    "definition": "感应回路受力与运动（Forces and Motion of Induced-Current Loops）：当穿过回路的磁通量变化时，回路中产生感应电动势 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 和感应电流 \\(I=\\dfrac{\\varepsilon}{R}\\)。外部磁场只对位于场区内的载流线段施加磁力 \\(\\vec F=I\\vec L\\times\\vec B\\)，场区外线段不受力；因此必须先逐段识别受力段。各受力段磁力的矢量和给出净力 \\(\\vec F_{\\mathrm{net}}=\\sum_i I\\vec L_i\\times\\vec B\\)，可产生平动加速度 \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\)；各力对质心或转轴的力矩之和给出磁力矩 \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\)，可产生转动加速度 \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\)。若整个回路处于匀强磁场中，\\(\\sum_i\\vec L_i=0\\)，净力为零；但若磁矩 \\(\\vec\\mu=I\\vec A\\) 与 \\(\\vec B\\) 不平行，仍有磁力矩 \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\)。对滑棒或进入、离开场区的线框，感应电流正比于磁通量变化率、反比于电阻；动生情形 \\(\\varepsilon=BLv\\)，故磁阻力 \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\) 随速度增大。应用牛顿第二定律 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\) 可得终端速度 \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\)、时间常数 \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\) 与指数趋近；撤去外力后速度按 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) 衰减，初动能全部转化为焦耳热。磁体与回路之间的力也成牛顿第三定律对：感应电流总是排斥靠近的磁体、吸引远离的磁体，从而阻碍相对运动。 · Forces and motion of induced-current loops: when the magnetic flux through a loop changes, an induced emf \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) and an induced current \\(I=\\dfrac{\\varepsilon}{R}\\) appear. The external field exerts a magnetic force \\(\\vec F=I\\vec L\\times\\vec B\\) only on current-carrying segments inside the field region; segments outside feel no force, so the force-bearing segments must be identified segment by segment. The vector sum of the forces on the in-field segments gives the net force \\(\\vec F_{\\mathrm{net}}=\\sum_i I\\vec L_i\\times\\vec B\\), which produces translational acceleration \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\); the sum of the torques about the center of mass or a pivot gives the magnetic torque \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\), which produces rotational acceleration \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\). If the entire loop lies in a uniform field, \\(\\sum_i\\vec L_i=0\\) and the net force is zero; however, if the magnetic moment \\(\\vec\\mu=I\\vec A\\) is not parallel to \\(\\vec B\\), there is still a magnetic torque \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\). For a sliding bar or a loop entering or leaving a field region, the induced current is proportional to the rate of change of flux and inversely proportional to the resistance; in the motional case \\(\\varepsilon=BLv\\), so the magnetic drag \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\) grows with speed. Applying Newton's second law \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\) gives the terminal speed \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\), the time constant \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\), and exponential approach; after the applied force is removed, the speed decays as \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\), and all the initial kinetic energy becomes Joule heat. The forces between a magnet and a loop also form a Newton's-third-law pair: the induced current always repels an approaching magnet and attracts a receding one, thereby opposing the relative motion.",
    "intuition": "把回路想成由许多小段导线拼成；只有浸在场区里的那些小段才“感受”到磁力，场区外的导线像不在磁场中一样。回路只有一部分在场内时，各段磁力的矢量和通常不为零，于是质心获得平动加速度；如果这些力的作用线不通过质心，它们还组成力偶，使回路转动。磁力的大小又由感应电流决定，而感应电流由磁通量变化率和电阻决定；对滑棒，磁通量变化率正比于速度，所以磁阻力随速度增大，最终与外力平衡，速度趋于终端值。 · Think of the loop as many short wire segments; only the segments immersed in the field region 'feel' a magnetic force, while wires outside behave as if there were no field. When only part of the loop is inside, the vector sum of the segment forces is usually nonzero, so the center of mass acquires translational acceleration; if the lines of action do not pass through the center of mass, they also form a couple and make the loop rotate. The force magnitude is set by the induced current, and the current is set by the rate of change of flux and the resistance; for a sliding bar the flux change rate is proportional to speed, so the drag grows with speed until it balances the applied force and the speed approaches a terminal value.",
    "formulas": [
      {
        "latex": "\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}",
        "note": "法拉第定律：感应电动势由磁通量变化率决定，负号体现楞次定律。 · Faraday's law: the induced emf is set by the rate of change of magnetic flux, and the minus sign expresses Lenz's law."
      },
      {
        "latex": "I=\\dfrac{\\varepsilon}{R}",
        "note": "闭合回路的感应电流；\\(R\\) 为回路总电阻。 · Induced current in a closed loop; \\(R\\) is the total loop resistance."
      },
      {
        "latex": "\\vec F=I\\vec L\\times\\vec B,\\qquad F=BIL\\sin\\theta",
        "note": "磁场对载流线段的磁力；\\(\\vec L\\) 沿电流方向，\\(\\theta\\) 为 \\(\\vec L\\) 与 \\(\\vec B\\) 的夹角；垂直时 \\(F=BIL\\)。 · Magnetic force on a current-carrying segment; \\(\\vec L\\) points along the current and \\(\\theta\\) is the angle between \\(\\vec L\\) and \\(\\vec B\\); when perpendicular, \\(F=BIL\\)."
      },
      {
        "latex": "\\vec F_{\\mathrm{net}}=\\sum_i I\\vec L_i\\times\\vec B",
        "note": "净磁力只对场区内线段求和；整个回路在匀强场中时矢量和为零。 · The net magnetic force sums only over in-field segments; for a complete loop in a uniform field the vector sum is zero."
      },
      {
        "latex": "\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i,\\qquad \\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}",
        "note": "力矩与转动加速度；\\(I_{\\mathrm{rot}}\\) 是绕质心或转轴的转动惯量。 · Torque and rotational acceleration; \\(I_{\\mathrm{rot}}\\) is the moment of inertia about the center of mass or pivot."
      },
      {
        "latex": "\\vec\\mu=I\\vec A,\\qquad \\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B",
        "note": "整个回路在匀强场中的磁矩与磁力矩；\\(N\\) 匝时 \\(\\mu=NIA\\)，大小 \\(\\tau=\\mu B\\sin\\theta\\)。 · Magnetic moment and magnetic torque for a complete loop in a uniform field; for \\(N\\) turns \\(\\mu=NIA\\), and the magnitude is \\(\\tau=\\mu B\\sin\\theta\\)."
      },
      {
        "latex": "\\varepsilon=BLv,\\qquad I=\\dfrac{BLv}{R},\\qquad F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}",
        "note": "动生电动势与滑棒（或进入、离开场区的线框）的磁阻力；要求 \\(\\vec v\\)、\\(\\vec B\\) 与有效长度 \\(L\\) 两两垂直（或取垂直分量）。 · Motional emf and the magnetic drag on a sliding bar or a loop entering/leaving a field region; require \\(\\vec v\\), \\(\\vec B\\), and the effective length \\(L\\) to be mutually perpendicular (or use perpendicular components)."
      },
      {
        "latex": "m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}",
        "note": "滑棒或进入场区线框的牛顿第二定律；磁阻力项与速度反向。 · Newton's second law for a sliding bar or a loop entering a field region; the drag term opposes the velocity."
      },
      {
        "latex": "v(t)=v_t\\left(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\right),\\qquad v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}},\\qquad \\tau=\\dfrac{mR}{B^{2}L^{2}}",
        "note": "从静止开始、恒定外力下的速度、终端速度与时间常数。 · Speed, terminal speed, and time constant under a constant applied force starting from rest."
      },
      {
        "latex": "v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right),\\qquad x_{\\mathrm{stop}}=v_0\\tau",
        "note": "撤去外力后的指数衰减与停止距离。 · Exponential decay and stopping distance after the applied force is removed."
      },
      {
        "latex": "P_{\\mathrm{mech}}=F_{\\mathrm{app}}v=I^{2}R+\\dfrac{\\mathrm{d}K}{\\mathrm{d}t}",
        "note": "能量簿记：外力功率等于焦耳热功率与动能变化率之和；匀速时 \\(F_{\\mathrm{app}}v=I^{2}R\\)。 · Energy account: the external mechanical power equals the Joule heating rate plus the rate of change of kinetic energy; at constant speed \\(F_{\\mathrm{app}}v=I^{2}R\\)."
      }
    ],
    "derivationNotes": [
      {
        "from": "磁通量变化 · Changing magnetic flux",
        "to": "感应电动势 · Induced emf",
        "note": "法拉第定律 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)；对进入场区的线框，面积变化率等于有效长度乘速度。 · Faraday's law \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\); for a loop entering a field region, the area changes at a rate equal to the effective length times the speed."
      },
      {
        "from": "感应电动势 · Induced emf",
        "to": "感应电流 · Induced current",
        "note": "闭合回路欧姆定律 \\(I=\\dfrac{\\varepsilon}{R}\\)；电流方向由楞次定律确定。 · Ohm's law for the closed loop, \\(I=\\dfrac{\\varepsilon}{R}\\); Lenz's law sets the current direction."
      },
      {
        "from": "感应电流 · Induced current",
        "to": "受力段磁力 · Force on in-field segments",
        "note": "对每个位于场区内的线段用 \\(\\vec F=I\\vec L\\times\\vec B\\)；场区外线段 \\(\\vec B=0\\)，力为零。 · Apply \\(\\vec F=I\\vec L\\times\\vec B\\) to each segment inside the field; outside the field \\(\\vec B=0\\) and the force is zero."
      },
      {
        "from": "各段磁力 · Segment forces",
        "to": "净力 · Net force",
        "note": "净力是各段磁力的矢量和；整个闭合回路在匀强场中 \\(\\sum_i\\vec L_i=0\\)，净力为零；只有部分在场内时一般不为零。 · The net force is the vector sum of the segment forces; for a complete closed loop in a uniform field \\(\\sum_i\\vec L_i=0\\) and the net force is zero, while for a partially immersed loop it is generally nonzero."
      },
      {
        "from": "各段磁力 · Segment forces",
        "to": "磁力矩 · Magnetic torque",
        "note": "对质心或转轴求 \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\)；整个回路在匀强场中可写成 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\)。 · Sum \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\) about the center of mass or pivot; for a complete loop in a uniform field this becomes \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\)."
      },
      {
        "from": "动生电动势 · Motional emf",
        "to": "速度依赖的磁阻力 · Velocity-dependent drag",
        "note": "\\(\\varepsilon=BLv\\)，\\(I=\\dfrac{BLv}{R}\\)，故 \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\)；磁阻力随速度线性增大。 · \\(\\varepsilon=BLv\\) and \\(I=\\dfrac{BLv}{R}\\), so \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\); the drag grows linearly with speed."
      },
      {
        "from": "牛顿第二定律 · Newton's second law",
        "to": "速度解 · Velocity solution",
        "note": "\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\)，解得 \\(v(t)=v_t\\left(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\right)\\)，\\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\)，\\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\)。 · \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\) solves to \\(v(t)=v_t\\left(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\right)\\) with \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\) and \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\)."
      },
      {
        "from": "无外力 · No applied force",
        "to": "指数衰减与停止 · Exponential decay and stopping",
        "note": "\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^{2}L^{2}v}{R}\\)，故 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，\\(x_{\\mathrm{stop}}=v_0\\tau\\)。 · \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^{2}L^{2}v}{R}\\), so \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) and \\(x_{\\mathrm{stop}}=v_0\\tau\\)."
      },
      {
        "from": "能量守恒 · Energy conservation",
        "to": "功率平衡 · Power balance",
        "note": "外力功率 \\(F_{\\mathrm{app}}v\\) 等于焦耳热功率 \\(I^{2}R\\) 与动能变化率之和；匀速时二者相等。 · The external power \\(F_{\\mathrm{app}}v\\) equals the Joule heating rate \\(I^{2}R\\) plus the rate of change of kinetic energy; at constant speed the two are equal."
      },
      {
        "from": "楞次定律与牛顿第三定律 · Lenz's law and Newton's third law",
        "to": "磁体—回路作用力 · Magnet–loop forces",
        "note": "感应电流的磁场阻碍磁通量变化，故回路排斥靠近的磁体、吸引远离的磁体；磁体对回路施加等大反向的力。 · The induced current's field opposes the change in flux, so the loop repels an approaching magnet and attracts a receding one; the magnet exerts an equal and opposite force on the loop."
      }
    ],
    "conditions": [
      "外部磁场在相关区域内均匀且恒定（或明确给出随时间变化）；场区边界清晰，回路边与边界平行或可分段处理。 · The external field is uniform and steady in the relevant region (or its time dependence is given); the field boundary is sharp, and loop sides are parallel to it or can be treated segment by segment.",
      "只对位于场区内的线段求磁力；场区外 \\(\\vec B=0\\)，磁力为零；若场区边界穿过导线，按进入场内的长度积分或分段。 · Compute magnetic forces only on segments inside the field; outside the region \\(\\vec B=0\\) and the force is zero; if the boundary cuts a wire, integrate over the in-field length or split it into segments.",
      "回路闭合、总电阻 \\(R\\) 恒定；忽略自感、接触电阻、摩擦与辐射，除非题目另行说明。 · The loop is closed with constant total resistance \\(R\\); neglect self-inductance, contact resistance, friction, and radiation unless stated otherwise.",
      "导体和回路视为刚体；质量 \\(m\\) 与转动惯量 \\(I_{\\mathrm{rot}}\\) 关于质心或给定转轴。 · The conductor and loop are treated as rigid bodies; the mass \\(m\\) and moment of inertia \\(I_{\\mathrm{rot}}\\) are about the center of mass or the given pivot.",
      "速度远小于光速，可用经典力学与准静态磁场；电流方向按正电荷流动定义，\\(\\vec L\\) 沿电流方向。 · Speeds are much less than the speed of light, so classical mechanics and quasi-static fields apply; current direction is the flow of positive charge, and \\(\\vec L\\) points along the current.",
      "磁力矩公式 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) 适用于整个回路都在匀强磁场中的情形；只有部分回路在场内时，必须逐段求力矩。 · The magnetic-torque formula \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) applies when the entire loop is in a uniform field; when only part of the loop is inside, sum the torques segment by segment.",
      "滑棒或线框沿导轨运动时，导轨电阻与接触电阻可忽略；若有重力、摩擦力或外力，必须一并写入牛顿第二定律。 · When a bar or loop moves on rails, rail and contact resistances may be neglected; if gravity, friction, or an applied force is present, include it in Newton's second law."
    ],
    "keyPoints": [
      "先画场区边界，标出哪些线段在场内；只有这些线段受 \\(\\vec F=I\\vec L\\times\\vec B\\)。 · First draw the field boundary and mark the segments inside it; only those segments feel \\(\\vec F=I\\vec L\\times\\vec B\\).",
      "线框进入时前边受力，离开时后边受力；完全处于匀强恒定场区时 \\(\\Phi_B\\) 不变，\\(I=0\\)、\\(F_B=0\\)。 · While entering, the leading side feels the force; while leaving, the trailing side does; when fully inside a uniform steady field, \\(\\Phi_B\\) is constant, so \\(I=0\\) and \\(F_B=0\\).",
      "净力是各受力段磁力的矢量和；整个回路在匀强场中净力为零，但只有部分在场内时一般不为零。 · The net force is the vector sum of the forces on in-field segments; it is zero for a complete loop in a uniform field but generally nonzero when only part of the loop is inside.",
      "力矩是各力对质心或转轴的力矩之和；净力为零不代表力矩为零。 · The torque is the sum of the moments about the center of mass or pivot; zero net force does not imply zero torque.",
      "整个回路在匀强场中可用 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\)，\\(\\vec\\mu=I\\vec A\\)；\\(N\\) 匝时 \\(\\mu=NIA\\)。 · For a complete loop in a uniform field, use \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\) with \\(\\vec\\mu=I\\vec A\\); for \\(N\\) turns, \\(\\mu=NIA\\).",
      "磁力正比于感应电流：\\(F\\propto I\\)；\\(I=\\dfrac{\\varepsilon}{R}\\)，\\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)。 · The magnetic force is proportional to the induced current: \\(F\\propto I\\); \\(I=\\dfrac{\\varepsilon}{R}\\) and \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\).",
      "动生情形 \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\)：与速度成正比、与电阻成反比、与 \\(B^{2}L^{2}\\) 成正比。 · In the motional case \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\): proportional to speed, inversely proportional to resistance, and proportional to \\(B^{2}L^{2}\\).",
      "牛顿第二定律给出终端速度 \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\) 与时间常数 \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\)；速度按指数趋近。 · Newton's second law gives the terminal speed \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\) and time constant \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}\\); the speed approaches exponentially.",
      "撤去外力后 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，停止距离 \\(v_0\\tau\\)，初动能全部变为焦耳热。 · After the applied force is removed, \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\), the stopping distance is \\(v_0\\tau\\), and all initial kinetic energy becomes Joule heat.",
      "磁体与回路之间的力是牛顿第三定律对：感应电流排斥靠近的磁体、吸引远离的磁体。 · The forces between a magnet and a loop form a Newton's-third-law pair: the induced current repels an approaching magnet and attracts a receding one.",
      "图像题：\\(F_B\\)–\\(v\\) 是过原点的直线；\\(v\\)–\\(t\\) 从零按指数趋近 \\(v_t\\)；\\(a\\)–\\(t\\) 从最大值指数衰减到零。 · Graph problems: \\(F_B\\) versus \\(v\\) is a straight line through the origin; \\(v\\) versus \\(t\\) approaches \\(v_t\\) exponentially from zero; \\(a\\) versus \\(t\\) decays exponentially from its initial value to zero."
    ],
    "misconceptions": [
      "认为整个回路都受磁力；实际上只有位于外部磁场内的线段受力，场区外线段不受力。 · Thinking the whole loop feels the magnetic force; in fact only segments inside the external field do, and segments outside feel none.",
      "把磁力说成与磁通量成正比；磁力正比于感应电流，而电流正比于磁通量变化率。 · Saying the magnetic force is proportional to the flux; the force is proportional to the induced current, which is proportional to the rate of change of flux.",
      "认为磁力总是做正功帮助回路运动；磁力阻碍相对运动，对回路做负功，机械能转化为焦耳热。 · Thinking the magnetic force always does positive work and helps the loop move; it opposes relative motion, does negative work on the loop, and converts mechanical energy into Joule heat.",
      "认为终端速度与电阻无关；\\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\) 正比于 \\(R\\)。 · Thinking the terminal speed is independent of resistance; \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\) is proportional to \\(R\\).",
      "认为净力为零就没有力矩；整个回路在匀强场中净力为零，但磁矩与磁场不平行时仍有磁力矩。 · Thinking zero net force means zero torque; a complete loop in a uniform field has zero net force but can still have a magnetic torque when its magnetic moment is not parallel to the field.",
      "认为线框完全进入匀强场区后仍有感应电流；此时磁通量不变，\\(\\varepsilon=0\\)、\\(I=0\\)。 · Thinking a current still flows after the loop is fully inside a uniform field; the flux is then constant, so \\(\\varepsilon=0\\) and \\(I=0\\).",
      "把 \\(F=BIL\\) 无条件用于任意方向；一般情况下 \\(F=BIL\\sin\\theta\\)，只有垂直时才等于 \\(BIL\\)。 · Applying \\(F=BIL\\) regardless of orientation; in general \\(F=BIL\\sin\\theta\\), and it equals \\(BIL\\) only when perpendicular.",
      "认为磁体对回路有作用力而回路对磁体没有反作用力；两者是牛顿第三定律对，等大反向。 · Thinking the magnet acts on the loop but the loop does not act back on the magnet; the two forces are a Newton's-third-law pair, equal in magnitude and opposite in direction.",
      "把磁场对单个运动电荷不做功与磁力对宏观回路做负功混为一谈；宏观能量转换来自动生电动势对电荷的作用。 · Confusing the fact that a magnetic field does no work on an individual moving charge with the negative work done on a macroscopic loop; the macroscopic energy conversion comes from the motional emf acting on the charges.",
      "认为回路速度越大磁力越小；动生磁阻力随速度增大，\\(F_B\\propto v\\)。 · Thinking a faster loop feels a smaller magnetic force; the motional drag grows with speed, \\(F_B\\propto v\\)."
    ],
    "examples": [
      {
        "title": "例 1 · 进入场区：受力段、净力与转动 · Example 1: Entering a field — force-bearing segment, net force, and rotation",
        "prompt": "边长 \\(L=0.20\\,\\mathrm{m}\\)、电阻 \\(R=0.10\\,\\Omega\\)、质量 \\(m=0.050\\,\\mathrm{kg}\\) 的正方形线框以 \\(v=3.0\\,\\mathrm{m/s}\\) 向右匀速进入宽磁场区，\\(B=0.50\\,\\mathrm{T}\\) 垂直纸面向里。(a) 求感应电流；(b) 求前边所受磁力；(c) 求净力与平动加速度；(d) 若前边力的作用线到质心距离 \\(d=0.050\\,\\mathrm{m}\\)，取 \\(I_{\\mathrm{rot}}=2.0\\times10^{-4}\\,\\mathrm{kg\\,m^{2}}\\)，求磁力矩与角加速度。 · A square loop of side \\(L=0.20\\,\\mathrm{m}\\), resistance \\(R=0.10\\,\\Omega\\), and mass \\(m=0.050\\,\\mathrm{kg}\\) enters a wide field region at \\(v=3.0\\,\\mathrm{m/s}\\) to the right; \\(B=0.50\\,\\mathrm{T}\\) is into the page. (a) Find the induced current; (b) find the force on the leading side; (c) find the net force and translational acceleration; (d) if the line of action of the leading-side force is a distance \\(d=0.050\\,\\mathrm{m}\\) from the center of mass, with \\(I_{\\mathrm{rot}}=2.0\\times10^{-4}\\,\\mathrm{kg\\,m^{2}}\\), find the magnetic torque and angular acceleration.",
        "steps": [
          "只有前边位于场区内，后边和两侧都在场区外；前边切割磁感线，磁通量向里增大。 · Only the leading side is inside the field; the trailing side and the two side segments are outside. The leading side cuts field lines, and the flux into the page increases.",
          "动生电动势 \\(\\varepsilon=BLv=(0.50)(0.20)(3.0)=0.30\\,\\mathrm{V}\\)，感应电流 \\(I=\\dfrac{\\varepsilon}{R}=\\dfrac{0.30}{0.10}=3.0\\,\\mathrm{A}\\)；由楞次定律，电流逆时针，前边中电流向上。 · The motional emf is \\(\\varepsilon=BLv=(0.50)(0.20)(3.0)=0.30\\,\\mathrm{V}\\) and the induced current is \\(I=\\dfrac{\\varepsilon}{R}=\\dfrac{0.30}{0.10}=3.0\\,\\mathrm{A}\\); by Lenz's law the current is counterclockwise, so it is upward in the leading side.",
          "前边所受磁力 \\(F=BIL=(0.50)(3.0)(0.20)=0.30\\,\\mathrm{N}\\)，由 \\(\\vec L\\times\\vec B\\) 得方向向左；其余三边在场区外，磁力为零，故净力为 \\(0.30\\,\\mathrm{N}\\) 向左。 · The force on the leading side is \\(F=BIL=(0.50)(3.0)(0.20)=0.30\\,\\mathrm{N}\\), directed left by \\(\\vec L\\times\\vec B\\); the other three sides are outside the field and feel zero force, so the net force is \\(0.30\\,\\mathrm{N}\\) to the left.",
          "平动加速度 \\(a=\\dfrac{F_{\\mathrm{net}}}{m}=\\dfrac{0.30}{0.050}=6.0\\,\\mathrm{m/s^{2}}\\)，方向向左；若没有外力，线框减速。 · The translational acceleration is \\(a=\\dfrac{F_{\\mathrm{net}}}{m}=\\dfrac{0.30}{0.050}=6.0\\,\\mathrm{m/s^{2}}\\) to the left; without an external force the loop slows down.",
          "若前边力的作用线到质心的距离 \\(d=0.050\\,\\mathrm{m}\\)，力矩 \\(\\tau=Fd=(0.30)(0.050)=0.015\\,\\mathrm{N\\,m}\\)；取 \\(I_{\\mathrm{rot}}=2.0\\times10^{-4}\\,\\mathrm{kg\\,m^{2}}\\)，角加速度 \\(\\alpha=\\dfrac{\\tau}{I_{\\mathrm{rot}}}=75\\,\\mathrm{rad/s^{2}}\\)。若作用线通过质心，则 \\(\\tau=0\\)，只有平动。 · If the line of action of the leading-side force is a distance \\(d=0.050\\,\\mathrm{m}\\) from the center of mass, the torque is \\(\\tau=Fd=(0.30)(0.050)=0.015\\,\\mathrm{N\\,m}\\); with \\(I_{\\mathrm{rot}}=2.0\\times10^{-4}\\,\\mathrm{kg\\,m^{2}}\\), the angular acceleration is \\(\\alpha=\\dfrac{\\tau}{I_{\\mathrm{rot}}}=75\\,\\mathrm{rad/s^{2}}\\). If the line of action passes through the center of mass, \\(\\tau=0\\) and the motion is purely translational."
        ],
        "solution": "\\(I=3.0\\,\\mathrm{A}\\)，\\(F=0.30\\,\\mathrm{N}\\) 向左，\\(a=6.0\\,\\mathrm{m/s^{2}}\\) 向左；偏移时 \\(\\tau=0.015\\,\\mathrm{N\\,m}\\)、\\(\\alpha=75\\,\\mathrm{rad/s^{2}}\\)。 · \\(I=3.0\\,\\mathrm{A}\\), \\(F=0.30\\,\\mathrm{N}\\) to the left, \\(a=6.0\\,\\mathrm{m/s^{2}}\\) to the left; with the offset, \\(\\tau=0.015\\,\\mathrm{N\\,m}\\) and \\(\\alpha=75\\,\\mathrm{rad/s^{2}}\\).",
        "solutionLatex": "I=3.0\\,\\mathrm{A},\\quad F=0.30\\,\\mathrm{N},\\quad a=6.0\\,\\mathrm{m/s^{2}},\\quad \\tau=0.015\\,\\mathrm{N\\,m},\\quad \\alpha=75\\,\\mathrm{rad/s^{2}}"
      },
      {
        "title": "例 2 · 下落线框的终端速度 · Example 2: Terminal speed of a falling loop",
        "prompt": "质量 \\(m=0.010\\,\\mathrm{kg}\\) 的矩形线框从静止开始竖直下落，进入水平方向的匀强磁场区；线框前边水平且长 \\(L=0.10\\,\\mathrm{m}\\)，\\(B=1.0\\,\\mathrm{T}\\) 垂直纸面向里，回路总电阻 \\(R=0.20\\,\\Omega\\)，取 \\(g=9.8\\,\\mathrm{m/s^{2}}\\)。(a) 求终端速度；(b) 求时间常数；(c) 求 \\(t=\\tau\\) 时的速度；(d) 线框完全进入场区后如何运动？ · A rectangular loop of mass \\(m=0.010\\,\\mathrm{kg}\\) falls from rest into a horizontal uniform field region; its leading side is horizontal and has length \\(L=0.10\\,\\mathrm{m}\\), \\(B=1.0\\,\\mathrm{T}\\) is into the page, the loop resistance is \\(R=0.20\\,\\Omega\\), and \\(g=9.8\\,\\mathrm{m/s^{2}}\\). (a) Find the terminal speed; (b) find the time constant; (c) find the speed at \\(t=\\tau\\); (d) how does the loop move after it is fully inside?",
        "steps": [
          "进入过程中只有前边切割磁感线，\\(\\varepsilon=BLv\\)，\\(I=\\dfrac{BLv}{R}\\)；磁力 \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\) 向上，阻碍下落。 · While entering, only the leading side cuts field lines: \\(\\varepsilon=BLv\\) and \\(I=\\dfrac{BLv}{R}\\); the magnetic force \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\) points upward and opposes the fall.",
          "终端速度时 \\(mg=F_B\\)，故 \\(v_t=\\dfrac{mgR}{B^{2}L^{2}}=\\dfrac{(0.010)(9.8)(0.20)}{(1.0)^{2}(0.10)^{2}}=1.96\\,\\mathrm{m/s}\\)。 · At terminal speed \\(mg=F_B\\), so \\(v_t=\\dfrac{mgR}{B^{2}L^{2}}=\\dfrac{(0.010)(9.8)(0.20)}{(1.0)^{2}(0.10)^{2}}=1.96\\,\\mathrm{m/s}\\).",
          "时间常数 \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}=\\dfrac{(0.010)(0.20)}{(1.0)^{2}(0.10)^{2}}=0.20\\,\\mathrm{s}\\)。 · The time constant is \\(\\tau=\\dfrac{mR}{B^{2}L^{2}}=\\dfrac{(0.010)(0.20)}{(1.0)^{2}(0.10)^{2}}=0.20\\,\\mathrm{s}\\).",
          "\\(v(\\tau)=v_t\\left(1-\\exp(-1)\\right)=0.632(1.96)=1.24\\,\\mathrm{m/s}\\)。 · \\(v(\\tau)=v_t\\left(1-\\exp(-1)\\right)=0.632(1.96)=1.24\\,\\mathrm{m/s}\\).",
          "完全进入匀强场区后磁通量不变，\\(\\varepsilon=0\\)、\\(I=0\\)、\\(F_B=0\\)，线框只受重力，以 \\(g\\) 加速；离开场区时后边受力，磁阻力再次向上。 · Once fully inside the uniform field, the flux is constant, so \\(\\varepsilon=0\\), \\(I=0\\), and \\(F_B=0\\); the loop then accelerates at \\(g\\) under gravity alone. While leaving, the trailing side feels an upward magnetic drag again."
        ],
        "solution": "\\(v_t=1.96\\,\\mathrm{m/s}\\)，\\(\\tau=0.20\\,\\mathrm{s}\\)，\\(v(\\tau)=1.24\\,\\mathrm{m/s}\\)；完全进入后以 \\(g\\) 自由加速，离开时再次受磁阻力。 · \\(v_t=1.96\\,\\mathrm{m/s}\\), \\(\\tau=0.20\\,\\mathrm{s}\\), and \\(v(\\tau)=1.24\\,\\mathrm{m/s}\\); once fully inside it accelerates freely at \\(g\\), and the drag returns while leaving.",
        "solutionLatex": "v_t=1.96\\,\\mathrm{m/s},\\quad \\tau=0.20\\,\\mathrm{s},\\quad v(\\tau)=1.24\\,\\mathrm{m/s}"
      },
      {
        "title": "例 3 · 完全在场内：净力为零但有磁力矩 · Example 3: Fully inside — zero net force but nonzero magnetic torque",
        "prompt": "边长 \\(a=0.10\\,\\mathrm{m}\\) 的正方形回路，电阻 \\(R=0.20\\,\\Omega\\)，完全处于匀强磁场 \\(B=0.40\\,\\mathrm{T}\\) 中，\\(B\\) 以 \\(\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=2.0\\,\\mathrm{T/s}\\) 增大；回路法线与 \\(\\vec B\\) 的夹角为 \\(30^{\\circ}\\)。(a) 求感应电流；(b) 求净磁力；(c) 求磁矩；(d) 求磁力矩。 · A square loop of side \\(a=0.10\\,\\mathrm{m}\\) and resistance \\(R=0.20\\,\\Omega\\) lies entirely in a uniform field \\(B=0.40\\,\\mathrm{T}\\) that increases at \\(\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=2.0\\,\\mathrm{T/s}\\); the loop normal makes an angle of \\(30^{\\circ}\\) with \\(\\vec B\\). (a) Find the induced current; (b) find the net magnetic force; (c) find the magnetic moment; (d) find the magnetic torque.",
        "steps": [
          "面积 \\(A=a^{2}=0.010\\,\\mathrm{m^{2}}\\)，磁通量 \\(\\Phi_B=BA\\cos\\theta\\)，故 \\(\\varepsilon=A\\cos\\theta\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=(0.010)(0.866)(2.0)=0.0173\\,\\mathrm{V}\\)，\\(I=\\dfrac{\\varepsilon}{R}=0.0866\\,\\mathrm{A}\\)。 · The area is \\(A=a^{2}=0.010\\,\\mathrm{m^{2}}\\) and the flux is \\(\\Phi_B=BA\\cos\\theta\\), so \\(\\varepsilon=A\\cos\\theta\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}=(0.010)(0.866)(2.0)=0.0173\\,\\mathrm{V}\\) and \\(I=\\dfrac{\\varepsilon}{R}=0.0866\\,\\mathrm{A}\\).",
          "整个回路都在匀强磁场中，四条边的磁力两两抵消，矢量和为零，故净力为零，质心没有平动加速度。 · The whole loop is in a uniform field, so the forces on opposite sides cancel in pairs and the vector sum is zero; the net force is zero and the center of mass has no translational acceleration.",
          "磁矩 \\(\\mu=IA=(0.0866)(0.010)=8.66\\times10^{-4}\\,\\mathrm{A\\,m^{2}}\\)，方向沿回路法线，由右手定则确定。 · The magnetic moment is \\(\\mu=IA=(0.0866)(0.010)=8.66\\times10^{-4}\\,\\mathrm{A\\,m^{2}}\\), along the loop normal given by the right-hand rule.",
          "磁力矩 \\(\\tau=\\mu B\\sin\\theta=(8.66\\times10^{-4})(0.40)(0.500)=1.73\\times10^{-4}\\,\\mathrm{N\\,m}\\)，方向由 \\(\\vec\\mu\\times\\vec B\\) 确定。 · The magnetic torque is \\(\\tau=\\mu B\\sin\\theta=(8.66\\times10^{-4})(0.40)(0.500)=1.73\\times10^{-4}\\,\\mathrm{N\\,m}\\), with direction from \\(\\vec\\mu\\times\\vec B\\).",
          "若回路可自由转动，该力矩会使回路转动；转动又改变磁通量并产生新的感应电流，因此完整运动是电磁—力学耦合问题。 · If the loop is free to rotate, this torque turns it; the rotation changes the flux and induces an additional current, so the full motion is a coupled electromagnetic–mechanical problem."
        ],
        "solution": "\\(I=0.087\\,\\mathrm{A}\\)，\\(F_{\\mathrm{net}}=0\\)，\\(\\mu=8.7\\times10^{-4}\\,\\mathrm{A\\,m^{2}}\\)，\\(\\tau=1.7\\times10^{-4}\\,\\mathrm{N\\,m}\\)。 · \\(I=0.087\\,\\mathrm{A}\\), \\(F_{\\mathrm{net}}=0\\), \\(\\mu=8.7\\times10^{-4}\\,\\mathrm{A\\,m^{2}}\\), and \\(\\tau=1.7\\times10^{-4}\\,\\mathrm{N\\,m}\\).",
        "solutionLatex": "I=0.087\\,\\mathrm{A},\\quad F_{\\mathrm{net}}=0,\\quad \\mu=8.7\\times10^{-4}\\,\\mathrm{A\\,m^{2}},\\quad \\tau=1.7\\times10^{-4}\\,\\mathrm{N\\,m}"
      },
      {
        "title": "例 4 · 主张—证据—推理：磁体与回路的作用力 · Example 4: Claim–evidence–reasoning — forces between magnet and loop",
        "prompt": "一名学生说：“感应电流只存在于回路中，所以磁体不受力，只有回路被推动。”请用楞次定律、牛顿第三定律与能量守恒评价这一说法。 · A student says: 'The induced current exists only in the loop, so the magnet feels no force; only the loop is pushed.' Evaluate this claim using Lenz's law, Newton's third law, and energy conservation.",
        "steps": [
          "主张：磁体不受力，只有回路受到磁力。 · Claim: the magnet feels no force; only the loop feels a magnetic force.",
          "证据：磁体靠近回路时，穿过回路的磁通量增大；感应电流的磁场阻碍这一增大，使回路靠近磁体的一面与磁体同极，因而排斥磁体。 · Evidence: as the magnet approaches the loop, the flux through the loop increases; the induced current's field opposes the increase, so the loop face nearest the magnet has the same polarity as the magnet and repels it.",
          "推理：磁体对回路施加磁力，回路对磁体施加等大反向的力，二者是牛顿第三定律对；若磁体远离，感应电流的磁场阻碍减小，回路吸引磁体，回路也受到指向磁体的力。 · Reasoning: the magnet exerts a magnetic force on the loop, and the loop exerts an equal and opposite force on the magnet; the two are a Newton's-third-law pair. If the magnet recedes, the induced field opposes the decrease, the loop attracts the magnet, and the loop feels a force toward the magnet.",
          "能量：克服这一对力做功，机械能转化为电阻中的焦耳热；若磁体不受力，能量守恒将被破坏。 · Energy: work done against this force pair converts mechanical energy into Joule heat in the resistor; if the magnet felt no force, energy conservation would be violated.",
          "结论：说法错误；磁体与回路都受力，且力总是阻碍二者之间的相对运动。 · Conclusion: the claim is false; both the magnet and the loop feel forces, and the forces always oppose their relative motion."
        ],
        "solution": "磁体与回路之间的力是牛顿第三定律对，等大反向；感应电流排斥靠近的磁体、吸引远离的磁体，机械能转化为焦耳热。 · The forces between magnet and loop are a Newton's-third-law pair, equal and opposite; the induced current repels an approaching magnet and attracts a receding one, and mechanical energy becomes Joule heat.",
        "solutionLatex": "\\vec F_{\\text{loop on magnet}}=-\\vec F_{\\text{magnet on loop}}"
      },
      {
        "title": "例 5 · 穿越有限场区：三阶段运动图像 · Example 5: Crossing a finite field region — three-stage motion",
        "prompt": "矩形线框在恒定外力 \\(F_{\\mathrm{app}}\\) 作用下穿过一个宽度大于线框的有限恒定匀强磁场区。设初速度足够大，线框能进入场区。描述线框进入、完全处于、离开场区三个阶段的受力段、净力、加速度与速度图像。 · A rectangular loop is pulled by a constant force \\(F_{\\mathrm{app}}\\) through a finite uniform steady field region wider than the loop. Assume the initial speed is large enough for the loop to enter. Describe the force-bearing segments, net force, acceleration, and velocity graph in the three stages: entering, fully inside, and leaving.",
        "steps": [
          "进入阶段：只有前边在场内，磁通量增大，感应电流产生；磁阻力 \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\) 向后，\\(F_{\\mathrm{net}}=F_{\\mathrm{app}}-F_B\\)。若 \\(F_B>F_{\\mathrm{app}}\\)，线框减速；若相等，匀速；若 \\(F_B<F_{\\mathrm{app}}\\)，线框加速。 · Entering stage: only the leading side is inside, the flux increases, and an induced current appears; the drag \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\) points backward and \\(F_{\\mathrm{net}}=F_{\\mathrm{app}}-F_B\\). The loop slows if \\(F_B>F_{\\mathrm{app}}\\), moves at constant speed if they are equal, and speeds up if \\(F_B<F_{\\mathrm{app}}\\).",
          "完全处于阶段：恒定场中磁通量不变，\\(\\varepsilon=0\\)、\\(I=0\\)、\\(F_B=0\\)；净力等于 \\(F_{\\mathrm{app}}\\)，线框沿外力方向加速。 · Fully inside stage: in the steady field the flux is constant, so \\(\\varepsilon=0\\), \\(I=0\\), and \\(F_B=0\\); the net force equals \\(F_{\\mathrm{app}}\\), and the loop accelerates along the applied force.",
          "离开阶段：只有后边在场内，磁通量减小，感应电流反向；但后边受力仍向后，\\(F_B\\) 仍阻碍运动，加速度由 \\(F_{\\mathrm{app}}-F_B\\) 决定：\\(F_B>F_{\\mathrm{app}}\\) 时减速，\\(F_B<F_{\\mathrm{app}}\\) 时加速。 · Leaving stage: only the trailing side is inside, the flux decreases, and the induced current reverses; however, the force on the trailing side still points backward, so \\(F_B\\) still opposes the motion, and the acceleration is set by \\(F_{\\mathrm{app}}-F_B\\): the loop slows when \\(F_B>F_{\\mathrm{app}}\\) and speeds up when \\(F_B<F_{\\mathrm{app}}\\).",
          "速度图像：斜率等于 \\(\\dfrac{F_{\\mathrm{app}}-F_B}{m}\\)；进入和离开阶段由 \\(F_B\\) 与 \\(F_{\\mathrm{app}}\\) 的大小决定斜率的正负，完全处于阶段斜率为正；\\(a\\)–\\(t\\) 在边界处跳变。若撤去外力，线框可能在进入阶段就停下，磁阻力随之消失。 · Velocity graph: the slope equals \\(\\dfrac{F_{\\mathrm{app}}-F_B}{m}\\); while entering and leaving, the sign of the slope is set by the relative sizes of \\(F_B\\) and \\(F_{\\mathrm{app}}\\), and while fully inside the slope is positive; \\(a\\) versus \\(t\\) jumps at the boundaries. If the applied force is removed, the loop may stop during entry, and the drag then vanishes.",
          "受力段随阶段切换：前边 → 无 → 后边；这正是“只对场区内线段求磁力”的直接应用。 · The force-bearing segment switches with stage: leading side → none → trailing side; this is a direct application of 'compute magnetic forces only on in-field segments'."
        ],
        "solution": "进入：前边受力，磁阻力向后；完全处于：无感应电流、无磁力，外力使线框加速；离开：后边受力，磁阻力仍向后。速度图像的斜率在进入和离开时由 \\(F_{\\mathrm{app}}\\) 与 \\(F_B\\) 的大小决定，完全处于时为正；若 \\(F_B>F_{\\mathrm{app}}\\)，则先减、再增、再减。 · Entering: the leading side feels a backward drag; fully inside: no induced current and no magnetic force, so the applied force accelerates the loop; leaving: the trailing side feels a backward drag. The slope of the speed graph while entering and leaving is set by the relative sizes of \\(F_{\\mathrm{app}}\\) and \\(F_B\\), and is positive while fully inside; if \\(F_B>F_{\\mathrm{app}}\\), the speed decreases, then increases, then decreases.",
        "solutionLatex": "F_B=\\dfrac{B^{2}L^{2}v}{R}\\ \\text{(entering or leaving)},\\qquad F_B=0\\ \\text{(fully inside)}"
      }
    ],
    "examTips": [
      "先画场区边界并标出受力段；不要对场区外线段使用 \\(F=BIL\\)。 · First draw the field boundary and mark the force-bearing segments; do not apply \\(F=BIL\\) to segments outside the field.",
      "用右手定则判断 \\(\\vec L\\times\\vec B\\)，并检查磁力是否阻碍相对运动；若磁力帮助运动，方向判断有误。 · Use the right-hand rule for \\(\\vec L\\times\\vec B\\) and check that the force opposes relative motion; if it helps the motion, the direction is wrong.",
      "净力与力矩分开算：净力决定质心平动，力矩决定绕质心或转轴的转动；净力为零时仍可能有转矩。 · Compute net force and torque separately: net force controls translation of the center of mass, torque controls rotation about the center of mass or pivot; zero net force can still allow a torque.",
      "运动题先写牛顿第二定律的符号式，再代入 \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\)；终端速度令 \\(a=0\\)。 · For motion problems, first write Newton's second law symbolically, then substitute \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\); set \\(a=0\\) for terminal speed.",
      "区分动生电动势 \\(\\varepsilon=BLv\\) 与感生电动势 \\(\\varepsilon=A\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\cos\\theta\\)；前者依赖速度，后者不依赖速度。 · Distinguish motional emf \\(\\varepsilon=BLv\\) from transformer emf \\(\\varepsilon=A\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\cos\\theta\\); the former depends on speed, the latter does not.",
      "能量检查：\\(P_{\\mathrm{mech}}=F_{\\mathrm{app}}v\\) 与 \\(I^{2}R\\) 比较；匀速时相等，变速时差值等于动能变化率。 · Energy check: compare \\(P_{\\mathrm{mech}}=F_{\\mathrm{app}}v\\) with \\(I^{2}R\\); they are equal at constant speed, and the difference equals the rate of change of kinetic energy when speed changes.",
      "完全进入匀强场区后立即判断 \\(\\varepsilon=0\\)、\\(I=0\\)、\\(F_B=0\\)，不要继续套用滑棒公式。 · Once fully inside a uniform field, immediately conclude \\(\\varepsilon=0\\), \\(I=0\\), and \\(F_B=0\\); do not keep applying the sliding-bar formula.",
      "注意单位换算与有效数字；力矩单位是 \\(\\mathrm{N\\,m}\\)，角加速度单位是 \\(\\mathrm{rad/s^{2}}\\)。 · Watch unit conversions and significant figures; torque is in \\(\\mathrm{N\\,m}\\) and angular acceleration in \\(\\mathrm{rad/s^{2}}\\)."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.2",
        "title": "电磁感应 · Electromagnetic Induction",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.3",
        "title": "感应电流与磁力 · Induced Currents and Magnetic Forces",
        "relation": "前置 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u13",
        "code": "13.4",
        "title": "电感 · Inductance",
        "relation": "后续 · next"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.2",
        "title": "运动电荷与磁场 · Moving Charges and Magnetic Fields",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u12",
        "code": "12.5",
        "title": "磁偶极与磁性材料 · Magnetic Dipoles and Magnetic Materials",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "faraday-induction",
        "title": "法拉第电磁感应 · Faraday electromagnetic induction"
      }
    ],
    "practiceHref": "#/em/practice/em-u13",
    "connections": [
      "上游：13.1 磁通量与 13.2 法拉第定律、楞次定律给出感应电动势的大小与方向；13.3 的滑棒与进出场区模型给出动生电动势和磁阻力的基本公式；12.2 的洛伦兹力解释动生电动势的微观来源。 · Upstream: 13.1 magnetic flux and 13.2 Faraday's and Lenz's laws give the magnitude and direction of the induced emf; the sliding-bar and entering/leaving models in 13.3 give the basic motional-emf and drag formulas; the Lorentz force from 12.2 explains the microscopic origin of motional emf.",
      "数学：矢量叉积 \\(\\vec L\\times\\vec B\\)、力矩 \\(\\vec r\\times\\vec F\\)、一阶线性微分方程与指数函数；图像题要把 \\(F_B\\)–\\(v\\) 的斜率、\\(v\\)–\\(t\\) 的渐近线和 \\(a\\)–\\(t\\) 的衰减对应到物理量。 · Mathematics: vector cross products \\(\\vec L\\times\\vec B\\), torques \\(\\vec r\\times\\vec F\\), first-order linear differential equations, and exponential functions; graph problems require matching the slope of \\(F_B\\)–\\(v\\), the asymptote of \\(v\\)–\\(t\\), and the decay of \\(a\\)–\\(t\\) to physical quantities.",
      "下游：13.4 电感与 13.5 RL 电路把“变化电流产生感应电动势”推广到自感；发电机、电动机、电磁制动与磁悬浮都利用感应回路的受力与运动。 · Downstream: 13.4 inductance and 13.5 RL circuits extend 'a changing current produces an induced emf' to self-induction; generators, motors, electromagnetic braking, and maglev all use the forces and motion of induced-current loops.",
      "跨学科：电磁制动、再生制动、感应电动机、涡流制动、金属探测器与磁悬浮列车都依赖感应电流所受的磁力或磁阻力；设计时要同时考虑制动力、发热与运动稳定性。 · Cross-disciplinary: electromagnetic braking, regenerative braking, induction motors, eddy-current brakes, metal detectors, and maglev trains all rely on the magnetic force or drag on induced currents; design must balance braking force, heating, and motion stability."
    ],
    "intuitionDetailed": "先看一个矩形线框进入有限匀强磁场区。场区边界清晰，线框只有前边在场内；前边切割磁感线，穿过线框的磁通量增加，感应电流由楞次定律确定。只有前边位于场内，所以只有前边受 \\(\\vec F=I\\vec L\\times\\vec B\\)；后边和两侧都在场外，磁力为零。前边所受磁力向后；若没有外力或外力小于磁阻力，净力向后，线框做减速平动。若前边力的作用线不通过质心，这个力还产生力矩，使线框转动；若通过质心，则只有平动。线框完全进入匀强恒定场区后，磁通量不变，感应电流消失，所有磁力为零，线框在外力作用下加速。离开场区时，只有后边在场内，磁通量减小，感应电流反向；虽然后边电流方向与前边进入时相反，但 \\(\\vec L\\times\\vec B\\) 仍给出向后的力，所以磁力还是阻力。再看滑棒：棒在导轨上以速度 \\(v\\) 运动，动生电动势 \\(\\varepsilon=BLv\\)，感应电流 \\(I=\\dfrac{BLv}{R}\\)，磁阻力 \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\)。速度越大，磁阻力越大；恒定外力下，加速度 \\(a=\\dfrac{F_{\\mathrm{app}}-F_B}{m}\\) 随速度增大而减小，速度按 \\(v(t)=v_t\\left(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\right)\\) 趋近终端速度 \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\)。撤去外力后，\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^{2}L^{2}v}{R}\\)，速度按 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) 衰减，初动能全部变成焦耳热。最后看转动：把线框看成刚性回路，各受力段对质心或转轴的力矩之和为 \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\)，角加速度 \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\)。整个回路在匀强场中时净力为零，但磁矩 \\(\\vec\\mu=I\\vec A\\) 与 \\(\\vec B\\) 不平行时仍有 \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\)，回路会转动。磁体与回路之间的力则成牛顿第三定律对：磁体靠近时感应电流排斥它，磁体远离时感应电流吸引它；回路受到等大反向的力，机械功与焦耳热之间的能量守恒由此得到保证。 · First consider a rectangular loop entering a finite uniform field region. The boundary is sharp and only the leading side is inside; the leading side cuts field lines, the flux through the loop increases, and Lenz's law sets the induced current. Only the leading side is inside, so only it feels \\(\\vec F=I\\vec L\\times\\vec B\\); the trailing side and the two side segments are outside and feel zero magnetic force. The force on the leading side points backward; if there is no applied force or the applied force is smaller than the drag, the net force is backward and the loop decelerates in translation. If the line of action of this force does not pass through the center of mass, it also produces a torque and the loop rotates; if it passes through the center of mass, the motion is purely translational. Once the loop is fully inside the uniform steady field, the flux is constant, the induced current disappears, all magnetic forces vanish, and the loop accelerates under the applied force. While leaving, only the trailing side is inside, the flux decreases, and the induced current reverses; although the current direction is opposite to that during entry, \\(\\vec L\\times\\vec B\\) still gives a backward force, so the magnetic force remains a drag. Now consider a sliding bar: the bar moves on rails at speed \\(v\\), the motional emf is \\(\\varepsilon=BLv\\), the induced current is \\(I=\\dfrac{BLv}{R}\\), and the magnetic drag is \\(F_B=BIL=\\dfrac{B^{2}L^{2}v}{R}\\). The faster the bar, the larger the drag; under a constant applied force, the acceleration \\(a=\\dfrac{F_{\\mathrm{app}}-F_B}{m}\\) decreases as the speed grows, and the speed approaches the terminal value \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\) according to \\(v(t)=v_t\\left(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\right)\\). After the applied force is removed, \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=-\\dfrac{B^{2}L^{2}v}{R}\\), the speed decays as \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\), and all the initial kinetic energy becomes Joule heat. Finally consider rotation: treat the loop as a rigid circuit; the torques of the force-bearing segments about the center of mass or a pivot sum to \\(\\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i\\), and the angular acceleration is \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\). For a complete loop in a uniform field the net force is zero, but when the magnetic moment \\(\\vec\\mu=I\\vec A\\) is not parallel to \\(\\vec B\\), there is still a magnetic torque \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\), and the loop rotates. The forces between a magnet and a loop form a Newton's-third-law pair: the induced current repels an approaching magnet and attracts a receding one, and the loop feels an equal and opposite force, which guarantees energy conservation between mechanical work and Joule heat.",
    "development": [
      "回顾 13.1 的磁通量、13.2 的法拉第定律与楞次定律、13.3 的动生电动势与磁阻力，明确“先判断磁通量是否变化”的起点。 · Review magnetic flux from 13.1, Faraday's and Lenz's laws from 13.2, and motional emf and magnetic drag from 13.3; start by deciding whether the flux changes.",
      "画出场区边界，逐段标出哪些导线在场内、哪些在场外；只对场内线段写 \\(\\vec F=I\\vec L\\times\\vec B\\)。 · Draw the field boundary and mark which wire segments are inside and which are outside; write \\(\\vec F=I\\vec L\\times\\vec B\\) only for in-field segments.",
      "求各段磁力的矢量和，得到净力与平动加速度 \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\)；判断净力与速度同向还是反向。 · Sum the segment forces vectorially to obtain the net force and translational acceleration \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\); decide whether the net force is along or opposite to the velocity.",
      "求各力对质心或转轴的力矩之和，得到磁力矩与角加速度 \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\)；整个回路在匀强场中可用 \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\)。 · Sum the torques about the center of mass or pivot to obtain the magnetic torque and angular acceleration \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\); for a complete loop in a uniform field use \\(\\vec\\tau=\\vec\\mu\\times\\vec B\\).",
      "写牛顿第二定律 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\)，解出 \\(v(t)\\)、终端速度 \\(v_t\\) 与时间常数 \\(\\tau\\)；无外力时用指数衰减与停止距离。 · Write Newton's second law \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\), solve for \\(v(t)\\), the terminal speed \\(v_t\\), and the time constant \\(\\tau\\); when no external force acts, use exponential decay and stopping distance.",
      "做能量与牛顿第三定律检查：\\(P_{\\mathrm{mech}}=F_{\\mathrm{app}}v=I^{2}R+\\dfrac{\\mathrm{d}K}{\\mathrm{d}t}\\)；磁体与回路的力等大反向，感应电流排斥靠近、吸引远离。 · Check energy and Newton's third law: \\(P_{\\mathrm{mech}}=F_{\\mathrm{app}}v=I^{2}R+\\dfrac{\\mathrm{d}K}{\\mathrm{d}t}\\); the forces between magnet and loop are equal and opposite, and the induced current repels an approaching magnet and attracts a receding one."
    ],
    "checks": [
      "线框进入、完全处于、离开场区时，哪些线段受力？各阶段磁力方向如何？ · Which segments feel forces while a loop enters, is fully inside, and leaves a field region? What is the force direction in each stage?",
      "为什么整个回路在匀强场中净力为零？净力为零是否意味着磁力矩为零？ · Why is the net force zero for a complete loop in a uniform field? Does zero net force imply zero magnetic torque?",
      "从 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\) 出发，说明 \\(F_B\\propto I\\) 且 \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\)；若 \\(R\\) 加倍，\\(F_B\\) 与 \\(v_t\\) 如何变化？ · Starting from \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\), show that \\(F_B\\propto I\\) and \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\); if \\(R\\) doubles, how do \\(F_B\\) and \\(v_t\\) change?",
      "线框完全处于匀强静态磁场中时，感应电流、磁力、磁力矩各是多少？若磁场随时间增大，哪些量会变？ · When a loop is fully inside a uniform static field, what are the induced current, magnetic force, and magnetic torque? If the field increases with time, which quantities change?",
      "写出滑棒或进入场区线框的牛顿第二定律，求 \\(v_t\\) 与 \\(\\tau\\)；撤去外力后速度如何随时间变化？ · Write Newton's second law for a sliding bar or a loop entering a field region, find \\(v_t\\) and \\(\\tau\\), and describe how the speed changes after the applied force is removed.",
      "无外力时滑棒的初动能去了哪里？如何由 \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\) 求停止距离？ · Where does the initial kinetic energy of a sliding bar go when no external force acts? How do you find the stopping distance from \\(v=v_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)?",
      "磁体靠近或远离回路时，回路和磁体各受什么方向的力？用牛顿第三定律与能量守恒说明。 · When a magnet approaches or recedes from a loop, what are the force directions on the loop and on the magnet? Explain with Newton's third law and energy conservation.",
      "画出线框穿越有限场区的 \\(v\\)–\\(t\\) 与 \\(a\\)–\\(t\\) 图像，标出三个阶段的受力段。 · Sketch \\(v\\)–\\(t\\) and \\(a\\)–\\(t\\) for a loop crossing a finite field region, and label the force-bearing segment in each stage.",
      "若把 \\(F_B\\) 对 \\(v\\) 作图，图像是什么形状？斜率由哪些量决定？ · If you plot \\(F_B\\) versus \\(v\\), what shape is the graph? Which quantities set its slope?"
    ],
    "vocabulary": [
      {
        "termZh": "受力段",
        "termEn": "force-bearing segment",
        "defZh": "回路中位于外部磁场内、因而受到磁力 \\(\\vec F=I\\vec L\\times\\vec B\\) 的导线部分；场区外线段不受磁力。",
        "defEn": "The part of a loop that lies inside the external magnetic field and therefore feels the magnetic force \\(\\vec F=I\\vec L\\times\\vec B\\); segments outside the field feel no magnetic force."
      },
      {
        "termZh": "磁阻力",
        "termEn": "magnetic drag",
        "defZh": "磁场对感应电流的作用力中阻碍回路相对运动的分量；滑棒或进入、离开场区时为 \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\)，方向与速度相反。",
        "defEn": "The component of the magnetic force on the induced current that opposes the loop's relative motion; for a sliding bar or a loop entering/leaving a field region, \\(F_B=\\dfrac{B^{2}L^{2}v}{R}\\) opposite to the velocity."
      },
      {
        "termZh": "终端速度",
        "termEn": "terminal speed",
        "defZh": "在恒定外力（或重力）与速度依赖的磁阻力平衡时达到的稳定速度；\\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\)。",
        "defEn": "The steady speed reached when a constant applied force (or gravity) balances the speed-dependent magnetic drag; \\(v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}\\)."
      },
      {
        "termZh": "磁力矩",
        "termEn": "magnetic torque",
        "defZh": "磁场对载流回路各段磁力的力矩之和；匀强场中整个回路 \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\)，大小 \\(\\tau=\\mu B\\sin\\theta\\)。",
        "defEn": "The sum of the torques of the magnetic forces on the current-carrying segments of a loop; for a complete loop in a uniform field, \\(\\vec\\tau_{\\mathrm{mag}}=\\vec\\mu\\times\\vec B\\), with magnitude \\(\\tau=\\mu B\\sin\\theta\\)."
      },
      {
        "termZh": "磁矩",
        "termEn": "magnetic moment",
        "defZh": "描述载流回路磁性的矢量 \\(\\vec\\mu=I\\vec A\\)，方向由右手定则沿回路法线；\\(N\\) 匝时为 \\(\\mu=NIA\\)。",
        "defEn": "The vector \\(\\vec\\mu=I\\vec A\\) describing the magnetism of a current loop, directed along the loop normal by the right-hand rule; for \\(N\\) turns, \\(\\mu=NIA\\)."
      },
      {
        "termZh": "平动加速度",
        "termEn": "translational acceleration",
        "defZh": "回路质心的加速度 \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\)，由各受力段磁力的矢量和决定。",
        "defEn": "The acceleration of the loop's center of mass, \\(\\vec a=\\dfrac{\\vec F_{\\mathrm{net}}}{m}\\), set by the vector sum of the magnetic forces on the force-bearing segments."
      },
      {
        "termZh": "转动加速度",
        "termEn": "rotational acceleration",
        "defZh": "回路绕质心或转轴的角加速度 \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\)，由磁力矩和转动惯量决定。",
        "defEn": "The angular acceleration of the loop about its center of mass or pivot, \\(\\vec\\alpha=\\dfrac{\\vec\\tau}{I_{\\mathrm{rot}}}\\), set by the magnetic torque and the moment of inertia."
      },
      {
        "termZh": "牛顿第二定律",
        "termEn": "Newton's second law",
        "defZh": "对回路（或滑棒）\\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=\\sum F\\)；在磁阻力情形写成 \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\)。",
        "defEn": "For a loop (or sliding bar), \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=\\sum F\\); with magnetic drag this becomes \\(m\\dfrac{\\mathrm{d}v}{\\mathrm{d}t}=F_{\\mathrm{app}}-\\dfrac{B^{2}L^{2}v}{R}\\)."
      }
    ]
  }
};
