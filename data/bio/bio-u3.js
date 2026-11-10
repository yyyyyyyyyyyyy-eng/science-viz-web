export const UNIT = {
  "id": "bio-u3",
  "code": "3",
  "titleZh": "细胞能量学",
  "titleEn": "Cellular Energetics",
  "subject": "bio",
  "layer": "ap"
};
export const TOPICS = {
  "3.1": {
    "id": "bio/bio-u3/3.1",
    "subject": "bio",
    "chapterId": "bio-u3",
    "unitCode": "3",
    "unitTitleZh": "细胞能量学",
    "unitTitleEn": "Cellular Energetics",
    "code": "3.1",
    "titleZh": "酶催化",
    "titleEn": "Enzyme Catalysis",
    "layer": "ap",
    "summary": "酶催化 · Enzyme Catalysis",
    "learningObjectives": [
      "能陈述「酶催化」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Enzyme Catalysis：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「酶催化」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "酶催化（Enzyme Catalysis）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「酶催化」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「酶催化」的工作方程或机制链。"
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
      "掌握 3.1「酶催化」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「酶催化」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「酶催化」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「酶催化」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「酶催化」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「酶催化」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u3",
        "code": "3.2",
        "title": "环境影响酶",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「酶催化」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「酶催化」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「酶催化」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.2": {
    "id": "bio/bio-u3/3.2",
    "subject": "bio",
    "chapterId": "bio-u3",
    "unitCode": "3",
    "unitTitleZh": "细胞能量学",
    "unitTitleEn": "Cellular Energetics",
    "code": "3.2",
    "titleZh": "环境影响酶",
    "titleEn": "Environmental Impacts on Enzyme Function",
    "layer": "ap",
    "summary": "温度、pH、底物与酶浓度、抑制剂和辅因子共同决定酶活性；超过最适温度可使酶变性，部分变性可逆。 · Temperature, pH, substrate and enzyme concentration, inhibitors, and cofactors set enzyme activity; above the optimum, enzymes may denature, and some denaturation is reversible.",
    "learningObjectives": [
      "能解释温度对酶活性的双重影响，并区分低温抑制、变性与复性。 · Explain the dual effect of temperature on enzyme activity and distinguish low-temperature inhibition, denaturation, and renaturation.",
      "能解释 pH 如何通过侧链电离与活性位点构象影响酶活性。 · Explain how pH affects activity through side-chain ionization and active-site conformation.",
      "能比较竞争性与非竞争性抑制对 \\(K_m\\) 与 \\(V_{\\max}\\) 的影响。 · Compare the effects of competitive and noncompetitive inhibition on \\(K_m\\) and \\(V_{\\max}\\).",
      "能设计控制变量的酶活性实验，并解读温度、pH 与底物浓度曲线。 · Design controlled experiments on enzyme activity and interpret temperature, pH, and substrate-concentration curves."
    ],
    "essentialKnowledge": [
      "每种酶有最适温度与最适 pH；最适值由酶的结构决定，并与其工作环境相适应。 · Each enzyme has an optimum temperature and pH determined by its structure and matched to its environment.",
      "温度升高先加快分子运动与碰撞，速率上升；超过最适温度后，非共价键被破坏，变性占主导，速率骤降。 · Warming first speeds molecular motion and collisions, raising rate; above the optimum, noncovalent bonds are disrupted, denaturation dominates, and rate falls sharply.",
      "超过最适温度的变性通常是不可逆的，但并非总是如此：若一级结构完整且去除变性条件，部分酶可以复性并恢复活性（见 3.7）。 · Denaturation above the optimum is often irreversible but not always: if the primary structure is intact and the denaturing condition is removed, some enzymes can renature and regain activity (see 3.7).",
      "低温降低碰撞频率使速率下降，但酶通常仍保持天然构象；升温后活性恢复属于低温抑制解除，不是复性。 · Low temperature lowers collision frequency and rate while the enzyme usually remains natively folded; recovery on warming is relief of low-temperature inhibition, not renaturation.",
      "pH 改变氨基酸侧链的质子化状态，影响底物结合、催化基团与活性位点构象；极端 pH 可导致变性。 · pH changes the protonation of amino-acid side chains, affecting substrate binding, catalytic groups, and active-site conformation; extreme pH can denature the enzyme.",
      "底物浓度升高时速率按米氏方程趋于饱和 \\(V_{\\max}\\)；酶浓度在底物充足时与速率近似成正比。 · As substrate concentration rises, rate approaches \\(V_{\\max}\\) according to the Michaelis–Menten equation; with saturating substrate, rate is approximately proportional to enzyme concentration.",
      "竞争性抑制剂与底物竞争活性位点，增大表观 \\(K_m\\) 而不改变 \\(V_{\\max}\\)；非竞争性抑制剂降低 \\(V_{\\max}\\)。 · Competitive inhibitors compete with substrate at the active site, raising apparent \\(K_m\\) without changing \\(V_{\\max}\\); noncompetitive inhibitors lower \\(V_{\\max}\\).",
      "辅因子或辅酶缺乏、别构调节与共价修饰都会改变酶活性；这些调节不等于变性。 · Missing cofactors or coenzymes, allosteric regulation, and covalent modification change enzyme activity; these forms of regulation are not denaturation."
    ],
    "definition": "酶的活性受温度、pH、底物浓度、酶浓度、抑制剂、辅因子与别构调节影响。每种酶有最适温度与最适 pH；超过最适温度后，非共价键被破坏，变性占主导，活性下降。变性通常是不可逆的，但在某些情况下可逆：去除变性条件后，一级结构完整的酶可以复性并恢复活性（见 3.7）。低温降低反应速率但通常不破坏天然构象，因此低温抑制不等于变性。 · Enzyme activity depends on temperature, pH, substrate concentration, enzyme concentration, inhibitors, cofactors, and allosteric regulation. Each enzyme has an optimum temperature and pH; above the optimum, noncovalent bonds are disrupted and denaturation drives activity down. Denaturation is often irreversible, but in some cases it is reversible: after the denaturing condition is removed, an enzyme with an intact primary structure can renature and regain activity (see 3.7). Low temperature slows the reaction but usually does not destroy the native conformation, so low-temperature inhibition is not denaturation.",
    "intuition": "酶像精密机器：温度太低转得慢，温度太高会“烧坏”；pH 不对会改变活性位点的电荷；抑制剂则像塞住钥匙孔或改变机器形状。 · An enzyme is like a precision machine: too cold and it runs slowly, too hot and it is damaged; the wrong pH changes the active site's charge, and inhibitors jam the keyhole or distort the machine.",
    "formulas": [
      {
        "latex": "v=\\dfrac{V_{\\max}[S]}{K_m+[S]}",
        "note": "底物浓度对速率的影响；高 \\([S]\\) 时趋于 \\(V_{\\max}\\)。 · Effect of substrate concentration; at high \\([S]\\) the rate approaches \\(V_{\\max}\\)."
      },
      {
        "latex": "Q_{10}=\\left(\\dfrac{R_2}{R_1}\\right)^{\\dfrac{10}{T_2-T_1}}",
        "note": "温度系数的定义（\\(T\\) 用 ℃ 或 K 的差值均可）；多数酶约 2–3。 · Temperature coefficient (\\(T\\) as a temperature difference in ℃ or K); typically about 2–3 for enzymes.",
      },
      {
        "latex": "v=k_{\\mathrm{cat}}[E]_t\\dfrac{[S]}{K_m+[S]}",
        "note": "酶浓度与转换数；底物充足时速率与 \\([E]_t\\) 成正比。 · Enzyme concentration and turnover number; with saturating substrate, rate is proportional to \\([E]_t\\)."
      },
      {
        "latex": "K_m^{\\mathrm{app}}=K_m\\left(1+\\dfrac{[I]}{K_i}\\right)",
        "note": "竞争性抑制的表观 \\(K_m\\) 增大，\\(V_{\\max}\\) 不变。 · Competitive inhibition raises apparent \\(K_m\\) while \\(V_{\\max}\\) is unchanged."
      },
      {
        "latex": "V_{\\max}^{\\mathrm{app}}=\\dfrac{V_{\\max}}{1+\\dfrac{[I]}{K_i}}",
        "note": "非竞争性抑制的表观 \\(V_{\\max}\\) 降低（简化模型）。 · Noncompetitive inhibition lowers apparent \\(V_{\\max}\\) (simplified model)."
      }
    ],
    "derivationNotes": [
      {
        "from": "温度升高 · Rising temperature",
        "to": "速率上升 · Rate increases",
        "note": "分子运动与碰撞频率增加，更多底物达到活化能；\\(Q_{10}\\) 常接近 2–3。 · Molecular motion and collision frequency increase, so more substrate reaches the activation energy; \\(Q_{10}\\) is often near 2–3."
      },
      {
        "from": "超过最适温度 · Above the optimum",
        "to": "变性占主导 · Denaturation dominates",
        "note": "非共价键被破坏，活性位点构象改变，速率骤降；是否可逆取决于一级结构与是否聚集。 · Noncovalent bonds are disrupted, active-site conformation changes, and rate falls sharply; reversibility depends on the primary structure and aggregation."
      },
      {
        "from": "pH 改变 · pH change",
        "to": "侧链电离 · Side-chain ionization",
        "note": "活性位点氨基酸的电荷改变，影响底物结合与催化；极端 pH 可导致变性。 · Charges on active-site amino acids change, affecting substrate binding and catalysis; extreme pH can denature the enzyme."
      },
      {
        "from": "底物浓度升高 · Increasing substrate",
        "to": "活性位点饱和 · Active-site saturation",
        "note": "当所有活性位点被占据时，再加底物也不能提高速率，曲线趋于 \\(V_{\\max}\\)。 · When all active sites are occupied, adding more substrate cannot raise the rate, so the curve approaches \\(V_{\\max}\\)."
      },
      {
        "from": "抑制剂结合 · Inhibitor binding",
        "to": "\\(K_m\\) 与 \\(V_{\\max}\\) 改变 · Changes in \\(K_m\\) and \\(V_{\\max}\\)",
        "note": "竞争性抑制剂增大表观 \\(K_m\\)；非竞争性抑制剂降低 \\(V_{\\max}\\)。 · Competitive inhibitors raise apparent \\(K_m\\); noncompetitive inhibitors lower \\(V_{\\max}\\)."
      }
    ],
    "conditions": [
      "温度、pH 的最适值因酶而异，并与酶的工作环境相适应。 · Optimum temperature and pH vary by enzyme and match its working environment.",
      "超过最适温度可使酶变性；变性通常不可逆，但部分酶在去除变性条件后可复性（见 3.7）。 · Above the optimum, enzymes may denature; denaturation is often irreversible, but some enzymes renature after the denaturing condition is removed (see 3.7).",
      "低温降低反应速率但通常不破坏天然构象，低温抑制不等于变性。 · Low temperature lowers reaction rate but usually does not destroy the native conformation; low-temperature inhibition is not denaturation.",
      "底物浓度足够高时速率饱和；酶浓度在底物充足时与速率近似成正比。 · Rate saturates at high substrate concentration; with saturating substrate, rate is approximately proportional to enzyme concentration.",
      "抑制剂类型决定 \\(K_m\\)、\\(V_{\\max}\\) 的变化；别构调节与共价修饰也可改变活性。 · Inhibitor type determines whether \\(K_m\\), \\(V_{\\max}\\), or both change; allosteric regulation and covalent modification also alter activity.",
      "极端 pH、去污剂、有机溶剂与重金属可引起变性，不能只归因于温度。 · Extreme pH, detergents, organic solvents, and heavy metals can denature enzymes; do not attribute denaturation only to temperature."
    ],
    "keyPoints": [
      "最适温度与最适 pH 是酶的特性。 · Optimum temperature and pH are enzyme-specific.",
      "温度曲线先升后降：低温限制速率，高温导致变性。 · The temperature curve rises then falls: low temperature limits rate, high temperature denatures.",
      "pH 通过侧链电离影响活性位点的电荷与构象。 · pH affects active-site charge and conformation through side-chain ionization.",
      "底物饱和服从米氏方程；饱和底物下速率与酶浓度成正比。 · Substrate saturation follows Michaelis–Menten; with saturating substrate, rate is proportional to enzyme concentration.",
      "竞争性抑制增大表观 \\(K_m\\)，非竞争性抑制降低 \\(V_{\\max}\\)。 · Competitive inhibition raises apparent \\(K_m\\); noncompetitive inhibition lowers \\(V_{\\max}\\).",
      "低温抑制、抑制剂结合与变性是三件不同的事。 · Low-temperature inhibition, inhibitor binding, and denaturation are three different things."
    ],
    "misconceptions": [
      "认为温度越高酶活性越高（忽略高温变性）。 · Thinking higher temperature always means higher activity (ignoring heat denaturation).",
      "把低温导致的活性下降当作变性。 · Treating the activity drop at low temperature as denaturation.",
      "把“超过最适温度后活性下降”一律说成不可逆；部分变性可以复性。 · Calling every post-optimum activity loss irreversible; some denaturation is reversible.",
      "认为 pH 只影响底物而不影响酶。 · Thinking pH affects only the substrate and not the enzyme.",
      "认为加更多底物可以无限提高速率（忽略活性位点饱和）。 · Thinking more substrate always raises rate without limit (ignoring active-site saturation).",
      "把抑制剂结合与变性混为一谈。 · Confusing inhibitor binding with denaturation."
    ],
    "examples": [
      {
        "title": "例 1 · 温度曲线 · Example 1: Temperature curve",
        "prompt": "为什么酶活性—温度曲线先升后骤降？请分别说明低温段与高温段的机制。 · Why does the enzyme activity–temperature curve rise and then drop sharply? Explain the low-temperature and high-temperature mechanisms separately.",
        "steps": [
          "低温段：分子运动与碰撞频率随温度升高而增加，更多底物—酶复合物形成，速率上升。 · Low-temperature range: molecular motion and collision frequency increase with temperature, more enzyme–substrate complexes form, and rate rises.",
          "超过最适温度：非共价键被破坏，活性位点构象改变，变性占主导，速率骤降。 · Above the optimum: noncovalent bonds are disrupted, active-site conformation changes, denaturation dominates, and rate falls sharply.",
          "高温段的下降不一定是永久失活；若一级结构完整且去除变性条件，部分酶可以复性。 · The high-temperature decline is not necessarily permanent loss; if the primary structure is intact and the denaturing condition is removed, some enzymes can renature."
        ],
        "solution": "先由碰撞频率上升，后由变性导致骤降；高温变性是否可逆取决于酶与条件。 · The rise reflects increasing collision frequency, and the sharp fall reflects denaturation; whether heat denaturation is reversible depends on the enzyme and conditions."
      },
      {
        "title": "例 2 · 最适 pH · Example 2: Optimal pH",
        "prompt": "胃蛋白酶的最适 pH 约为 2，胰蛋白酶约为 8。解释为什么两种酶的最适 pH 不同，并说明偏离最适 pH 时活性为何下降。 · Pepsin has an optimum pH near 2 and trypsin near 8. Explain why the optima differ and why activity falls away from the optimum.",
        "steps": [
          "两种酶的活性位点氨基酸组成与工作环境不同，因此侧链的质子化状态在不同 pH 下最有利于结合与催化。 · The two enzymes have different active-site amino-acid compositions and working environments, so side-chain protonation is most favorable for binding and catalysis at different pH values.",
          "偏离最适 pH 会改变活性位点侧链的电荷，破坏离子键与氢键，底物结合变差。 · Moving away from the optimum changes active-site side-chain charges, disrupts ionic bonds and hydrogen bonds, and weakens substrate binding.",
          "极端 pH 还会使酶变性，导致不可逆或部分可逆的失活。 · Extreme pH can also denature the enzyme, causing irreversible or partially reversible loss of activity."
        ],
        "solution": "最适 pH 由酶的结构与工作环境决定；偏离最适 pH 改变侧链电离并可能变性。 · The optimum pH is set by enzyme structure and environment; departing from it alters side-chain ionization and may denature the enzyme."
      },
      {
        "title": "例 3 · 抑制剂动力学 · Example 3: Inhibitor kinetics",
        "prompt": "某酶 \\(V_{\\max}=10\\,\\mu\\mathrm{mol\\,min^{-1}}\\)，\\(K_m=2\\,\\mathrm{mM}\\)。在 \\([I]=4\\,\\mathrm{mM}\\)、\\(K_i=2\\,\\mathrm{mM}\\) 时，分别求竞争性抑制的表观 \\(K_m\\) 与非竞争性抑制的表观 \\(V_{\\max}\\)。 · An enzyme has \\(V_{\\max}=10\\,\\mu\\mathrm{mol\\,min^{-1}}\\) and \\(K_m=2\\,\\mathrm{mM}\\). With \\([I]=4\\,\\mathrm{mM}\\) and \\(K_i=2\\,\\mathrm{mM}\\), find the apparent \\(K_m\\) for competitive inhibition and the apparent \\(V_{\\max}\\) for noncompetitive inhibition.",
        "steps": [
          "竞争性：\\(K_m^{\\mathrm{app}}=K_m\\left(1+\\dfrac{[I]}{K_i}\\right)=2(1+2)=6\\,\\mathrm{mM}\\)，\\(V_{\\max}\\) 不变。 · Competitive: \\(K_m^{\\mathrm{app}}=K_m\\left(1+\\dfrac{[I]}{K_i}\\right)=2(1+2)=6\\,\\mathrm{mM}\\), with \\(V_{\\max}\\) unchanged.",
          "非竞争性：\\(V_{\\max}^{\\mathrm{app}}=\\dfrac{V_{\\max}}{1+\\dfrac{[I]}{K_i}}=\\dfrac{10}{3}=3.3\\,\\mu\\mathrm{mol\\,min^{-1}}\\)，\\(K_m\\) 不变。 · Noncompetitive: \\(V_{\\max}^{\\mathrm{app}}=\\dfrac{V_{\\max}}{1+\\dfrac{[I]}{K_i}}=\\dfrac{10}{3}=3.3\\,\\mu\\mathrm{mol\\,min^{-1}}\\), with \\(K_m\\) unchanged.",
          "判据：表观 \\(K_m\\) 增大而 \\(V_{\\max}\\) 不变为竞争性；\\(V_{\\max}\\) 降低而 \\(K_m\\) 不变为非竞争性。 · Criterion: increased apparent \\(K_m\\) with unchanged \\(V_{\\max}\\) indicates competitive inhibition; decreased \\(V_{\\max}\\) with unchanged \\(K_m\\) indicates noncompetitive inhibition."
        ],
        "solution": "竞争性 \\(K_m^{\\mathrm{app}}=6\\,\\mathrm{mM}\\)；非竞争性 \\(V_{\\max}^{\\mathrm{app}}\\approx3.3\\,\\mu\\mathrm{mol\\,min^{-1}}\\)。 · Competitive \\(K_m^{\\mathrm{app}}=6\\,\\mathrm{mM}\\); noncompetitive \\(V_{\\max}^{\\mathrm{app}}\\approx3.3\\,\\mu\\mathrm{mol\\,min^{-1}}\\).",
        "solutionLatex": "K_m^{\\mathrm{app}}=6\\,\\mathrm{mM},\\qquad V_{\\max}^{\\mathrm{app}}=3.3\\,\\mu\\mathrm{mol\\,min^{-1}}"
      },
      {
        "title": "例 4 · 低温抑制与变性 · Example 4: Cold inhibition versus denaturation",
        "prompt": "酶在 4 ℃ 放置 12 h 后活性很低，恢复到 25 ℃ 后活性回到原来的 95%；另一份在 80 ℃ 放置 10 min 后冷却到 25 ℃，活性仍接近 0。分别解释两种现象，并指出哪一种涉及变性。 · Enzyme activity is low after 12 h at 4 ℃ and returns to 95% of the original at 25 ℃; another sample kept at 80 ℃ for 10 min still has almost no activity after cooling to 25 ℃. Explain both and identify which involves denaturation.",
        "steps": [
          "4 ℃：低温降低分子运动与碰撞频率，酶仍保持天然构象；升温后速率恢复，属于低温抑制解除。 · At 4 ℃, low temperature reduces molecular motion and collision frequency while the enzyme remains natively folded; activity returns on warming, so this is relief of low-temperature inhibition.",
          "80 ℃：高温破坏非共价键，天然构象展开；冷却时疏水表面聚集或发生共价损伤，无法重新折叠，属于不可逆变性。 · At 80 ℃, heat disrupts noncovalent bonds and the native conformation unfolds; on cooling, hydrophobic surfaces aggregate or covalent damage occurs, preventing refolding—irreversible denaturation.",
          "判断依据是处理过程中天然构象是否被破坏，而不是活性高低本身。 · The criterion is whether the native conformation was destroyed during treatment, not the activity level itself."
        ],
        "solution": "前者是低温抑制，后者是变性；低温抑制可逆但不等同于复性。 · The first is low-temperature inhibition; the second is denaturation. Low-temperature inhibition is reversible but is not renaturation."
      }
    ],
    "examTips": [
      "先判断是低温抑制、变性还是抑制剂结合，再解释活性变化。 · First decide whether the cause is low-temperature inhibition, denaturation, or inhibitor binding, then explain the activity change.",
      "温度曲线题要分别说明低温段与高温段的机制。 · In temperature-curve questions, explain the low-temperature and high-temperature mechanisms separately.",
      "pH 题要落到侧链质子化与活性位点构象/电荷。 · In pH questions, connect to side-chain protonation and active-site conformation or charge.",
      "抑制剂题用 \\(K_m\\)、\\(V_{\\max}\\) 的变化判断类型。 · Use changes in \\(K_m\\) and \\(V_{\\max}\\) to identify inhibitor type.",
      "不要把所有高温变性写成不可逆；CED 3.2.A.2 明确某些变性可逆。 · Do not write that all heat denaturation is irreversible; CED 3.2.A.2 states that some denaturation is reversible.",
      "实验设计要控制温度、pH、底物浓度与酶浓度，并设置对照。 · In experiments, control temperature, pH, substrate concentration, and enzyme concentration, and include controls."
    ],
    "related": [
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.1",
        "title": "酶催化 · Enzyme Catalysis",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.7",
        "title": "酶变性与复性 · Enzyme Denaturation and Renaturation",
        "relation": "related"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u1",
        "code": "1.6",
        "title": "酶结构与功能 · Structure and Function of Enzymes",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u3",
    "connections": [
      "上游：3.1 酶催化给出活性位点、特异性与活化能，本主题把这些性质放到温度、pH 与抑制剂条件下检验。 · Upstream: 3.1 Enzyme Catalysis establishes the active site, specificity, and activation energy; this topic tests those properties under temperature, pH, and inhibitor conditions.",
      "下游：3.7 酶变性与复性深入讨论变性是否可逆；3.5 细胞呼吸中的酶促步骤也依赖这些条件。 · Downstream: 3.7 Enzyme Denaturation and Renaturation examines reversibility in depth, and the enzyme-catalyzed steps of 3.5 Cellular Respiration depend on these conditions.",
      "应用：胃蛋白酶与胰蛋白酶的最适 pH、工业酶的反应条件，以及药物对酶活性的抑制。 · Application: the optimal pH of pepsin and trypsin, reaction conditions for industrial enzymes, and drug inhibition of enzyme activity."
    ],
    "intuitionDetailed": "温度每升高 10 ℃，反应速率通常增加约 2–3 倍（\\(Q_{10}\\)），但超过最适温度后变性占主导，曲线骤降。这里要分清两件事：低温使速率下降但酶仍是天然构象，升温即恢复；高温可能破坏构象，只有部分酶在去除变性条件后能复性。pH 改变侧链质子化状态，极端 pH 可不可逆地破坏活性位点。竞争性抑制剂增大表观 \\(K_m\\)，非竞争性抑制剂降低 \\(V_{\\max}\\)。 · A 10 ℃ rise usually increases rate about 2–3-fold (\\(Q_{10}\\)), but above the optimum denaturation dominates and the curve drops sharply. Keep two things separate: low temperature lowers rate while the enzyme remains natively folded, so warming restores activity; high temperature can destroy the conformation, and only some enzymes renature after the denaturing condition is removed. pH changes side-chain protonation, and extreme pH can irreversibly damage the active site. Competitive inhibitors raise apparent \\(K_m\\), while noncompetitive inhibitors lower \\(V_{\\max}\\).",
    "development": [
      "先分清三种“活性下降”：低温抑制、抑制剂结合与变性。 · First distinguish three causes of lower activity: low-temperature inhibition, inhibitor binding, and denaturation.",
      "用结构语言描述温度与 pH 的影响：哪些键被破坏、活性位点如何改变。 · Describe temperature and pH effects structurally: which bonds are disrupted and how the active site changes.",
      "用米氏方程解释底物饱和，用 \\(K_m\\)、\\(V_{\\max}\\) 的变化区分抑制剂类型。 · Use the Michaelis–Menten equation to explain substrate saturation and changes in \\(K_m\\) and \\(V_{\\max}\\) to distinguish inhibitor types.",
      "设计控制变量的实验，设置对照与重复，并用曲线检验假设。 · Design controlled experiments with controls and replicates, and test hypotheses with curves.",
      "把温度/pH/抑制剂规律迁移到消化酶、工业酶与细胞呼吸中的酶促步骤。 · Transfer the rules for temperature, pH, and inhibitors to digestive enzymes, industrial enzymes, and enzyme-catalyzed steps in cellular respiration."
    ],
    "checks": [
      "低温保存后升温活性恢复，说明发生了复性吗？为什么？ · Does activity returning after cold storage and warming show renaturation? Why or why not?",
      "温度曲线的高温段下降一定是永久失活吗？ · Is the high-temperature decline in an activity curve always permanent loss?",
      "为什么偏离最适 pH 会降低活性？ · Why does departing from the optimal pH lower activity?",
      "竞争性与非竞争性抑制剂对 \\(K_m\\)、\\(V_{\\max}\\) 的影响有何不同？ · How do competitive and noncompetitive inhibitors differ in their effects on \\(K_m\\) and \\(V_{\\max}\\)?",
      "底物饱和后为什么加底物不再提速？ · Why does adding substrate no longer raise the rate after saturation?"
    ],
    "vocabulary": [
      {
        "termZh": "最适温度",
        "termEn": "optimum temperature",
        "defZh": "使酶活性达到最高的温度；因酶而异。",
        "defEn": "The temperature at which an enzyme's activity is highest; it varies by enzyme."
      },
      {
        "termZh": "最适 pH",
        "termEn": "optimum pH",
        "defZh": "使酶活性达到最高的 pH；由活性位点侧链的电离状态决定。",
        "defEn": "The pH at which an enzyme's activity is highest, set by the ionization state of active-site side chains."
      },
      {
        "termZh": "变性",
        "termEn": "denaturation",
        "defZh": "蛋白质天然构象被破坏、活性丧失，通常不涉及肽键断裂。",
        "defEn": "Loss of a protein's native conformation and activity, usually without peptide-bond cleavage."
      },
      {
        "termZh": "复性",
        "termEn": "renaturation",
        "defZh": "去除变性因素后，多肽重新折叠成天然构象并恢复活性。",
        "defEn": "Refolding of a polypeptide into its native conformation and recovery of activity after removal of the denaturing agent."
      },
      {
        "termZh": "竞争性抑制",
        "termEn": "competitive inhibition",
        "defZh": "抑制剂与底物竞争活性位点，增大表观 \\(K_m\\) 而不改变 \\(V_{\\max}\\)。",
        "defEn": "Inhibition in which an inhibitor competes with substrate at the active site, raising apparent \\(K_m\\) without changing \\(V_{\\max}\\)."
      },
      {
        "termZh": "非竞争性抑制",
        "termEn": "noncompetitive inhibition",
        "defZh": "抑制剂结合活性位点以外的部位，降低 \\(V_{\\max}\\)。",
        "defEn": "Inhibition in which an inhibitor binds outside the active site and lowers \\(V_{\\max}\\)."
      },
      {
        "termZh": "转换数",
        "termEn": "turnover number",
        "defZh": "每个酶分子每秒催化底物转化为产物的最大分子数，\\(k_{\\mathrm{cat}}\\)。",
        "defEn": "The maximum number of substrate molecules converted per enzyme molecule per second, \\(k_{\\mathrm{cat}}\\)."
      }
    ]
  },
  "3.3": {
    "id": "bio/bio-u3/3.3",
    "subject": "bio",
    "chapterId": "bio-u3",
    "unitCode": "3",
    "unitTitleZh": "细胞能量学",
    "unitTitleEn": "Cellular Energetics",
    "code": "3.3",
    "titleZh": "细胞能量",
    "titleEn": "Cellular Energy",
    "layer": "ap",
    "summary": "细胞能量 · Cellular Energy",
    "learningObjectives": [
      "能陈述「细胞能量」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Cellular Energy：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「细胞能量」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "细胞能量（Cellular Energy）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「细胞能量」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「细胞能量」的工作方程或机制链。"
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
      "掌握 3.3「细胞能量」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「细胞能量」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「细胞能量」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「细胞能量」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「细胞能量」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「细胞能量」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u3",
        "code": "3.2",
        "title": "环境影响酶",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.4",
        "title": "光合作用",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "energy-flow",
        "title": "光合与呼吸能量流"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「细胞能量」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「细胞能量」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「细胞能量」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.4": {
    "id": "bio/bio-u3/3.4",
    "subject": "bio",
    "chapterId": "bio-u3",
    "unitCode": "3",
    "unitTitleZh": "细胞能量学",
    "unitTitleEn": "Cellular Energetics",
    "code": "3.4",
    "titleZh": "光合作用",
    "titleEn": "Photosynthesis",
    "layer": "ap",
    "summary": "光合作用 · Photosynthesis",
    "learningObjectives": [
      "能陈述「光合作用」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Photosynthesis：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「光合作用」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "光合作用（Photosynthesis）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「光合作用」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "6CO_2+6H_2O\\xrightarrow{\\text{light}}C_6H_{12}O_6+6O_2",
        "note": "光合作用总反应；O₂ 来自水的光解。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「光合作用」的工作方程或机制链。"
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
      "光反应在类囊体膜产生 ATP 与 NADPH",
      "Calvin 循环在叶绿体基质固定 CO₂",
      "Rubisco 的羧化/加氧活性受 CO₂/O₂ 比例影响"
    ],
    "keyPoints": [
      "掌握 3.4「光合作用」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「光合作用」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「光合作用」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "6CO_2+6H_2O\\xrightarrow{\\text{light}}C_6H_{12}O_6+6O_2"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「光合作用」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「光合作用」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「光合作用」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u3",
        "code": "3.3",
        "title": "细胞能量",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.5",
        "title": "细胞呼吸",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "energy-flow",
        "title": "光合与呼吸能量流"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「光合作用」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「光合作用」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「光合作用」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.5": {
    "id": "bio/bio-u3/3.5",
    "subject": "bio",
    "chapterId": "bio-u3",
    "unitCode": "3",
    "unitTitleZh": "细胞能量学",
    "unitTitleEn": "Cellular Energetics",
    "code": "3.5",
    "titleZh": "细胞呼吸",
    "titleEn": "Cellular Respiration",
    "layer": "ap",
    "summary": "细胞呼吸 · Cellular Respiration",
    "learningObjectives": [
      "能陈述「细胞呼吸」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Cellular Respiration：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「细胞呼吸」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "细胞呼吸（Cellular Respiration）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「细胞呼吸」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「细胞呼吸」的工作方程或机制链。"
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
      "掌握 3.5「细胞呼吸」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「细胞呼吸」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「细胞呼吸」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「细胞呼吸」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「细胞呼吸」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「细胞呼吸」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u3",
        "code": "3.4",
        "title": "光合作用",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.6",
        "title": "适应与能量",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "energy-flow",
        "title": "光合与呼吸能量流"
      }
    ],
    "practiceHref": "#/bio/practice/bio-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「细胞呼吸」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「细胞呼吸」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「细胞呼吸」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.6": {
    "id": "bio/bio-u3/3.6",
    "subject": "bio",
    "chapterId": "bio-u3",
    "unitCode": "3",
    "unitTitleZh": "细胞能量学",
    "unitTitleEn": "Cellular Energetics",
    "code": "3.6",
    "titleZh": "适应与能量",
    "titleEn": "Fitness",
    "layer": "ap",
    "summary": "适应与能量 · Fitness",
    "learningObjectives": [
      "能陈述「适应与能量」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Fitness：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能用主张—证据—推理结构解释与「适应与能量」相关的实验或进化/生态现象。",
      "能设计或评价实验：自变量、因变量、对照与重复。"
    ],
    "definition": "适应与能量（Fitness）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「适应与能量」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
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
        "note": "由定义出发建立「适应与能量」的工作方程或机制链。"
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
      "掌握 3.6「适应与能量」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「适应与能量」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "把相关当作因果；缺少对照却下机制结论"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「适应与能量」的定义，并列出至少两条适用条件或假设。",
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
        "prompt": "同时给出图像与数据表时，如何用「适应与能量」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「适应与能量」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「适应与能量」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "bio-u3",
        "code": "3.5",
        "title": "细胞呼吸",
        "relation": "prerequisite"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u3",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「适应与能量」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「适应与能量」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「适应与能量」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "3.7": {
    "id": "bio/bio-u3/3.7",
    "subject": "bio",
    "chapterId": "bio-u3",
    "unitCode": "3",
    "unitTitleZh": "细胞能量学",
    "unitTitleEn": "Cellular Energetics",
    "code": "3.7",
    "titleZh": "酶变性与复性",
    "titleEn": "Enzyme Denaturation and Renaturation",
    "layer": "ap",
    "summary": "变性是酶失去天然构象与活性；若一级结构完整且条件恢复，部分酶可复性并重新获得活性。 · Denaturation is loss of native conformation and activity; when the primary structure remains intact and conditions are restored, some enzymes can renature and regain activity.",
    "learningObjectives": [
      "能区分变性、复性、低温抑制与抑制剂结合，说明各自的结构与活性变化。 · Distinguish denaturation, renaturation, low-temperature inhibition, and inhibitor binding by their structural and activity changes.",
      "能说明变性是否可逆取决于哪些条件，并用“一级结构决定高级结构”解释复性。 · Explain which conditions determine whether denaturation is reversible, using the idea that primary structure dictates higher-order structure.",
      "能解读或设计检测复性的实验：去除变性剂、恢复温度与 pH、测定活性回收率。 · Interpret or design experiments that test renaturation by removing the denaturant, restoring temperature and pH, and measuring activity recovery.",
      "能用安芬森 RNase A 实验与分子伴侣说明复性的证据与细胞中的辅助机制。 · Use Anfinsen's RNase A experiment and chaperones as evidence for renaturation and its cellular assistance."
    ],
    "essentialKnowledge": [
      "变性是蛋白质天然构象被破坏：二级、三级、四级结构改变，但肽键通常不断裂；活性位点的形状与电荷改变，导致活性丧失。 · Denaturation destroys a protein's native conformation—secondary, tertiary, and quaternary structure—usually without breaking peptide bonds; the active site's shape and charge change, so activity is lost.",
      "高温、极端 pH、尿素或盐酸胍等变性剂、去污剂、有机溶剂、重金属与剧烈剪切都可以引起变性。 · Heat, extreme pH, denaturants such as urea or guanidinium chloride, detergents, organic solvents, heavy metals, and strong shear can all denature enzymes.",
      "CED 3.2.A.2：某些情况下酶变性可逆；去除变性条件后，酶可以重新折叠并恢复部分或全部活性，这一过程称为复性。 · CED 3.2.A.2: in some cases enzyme denaturation is reversible; after the denaturing condition is removed, the enzyme can refold and regain some or all of its activity—a process called renaturation.",
      "复性的前提是一级结构（氨基酸序列）完整，未发生共价修饰或聚集，并恢复到适宜的温度、pH 与离子强度。 · Renaturation requires an intact primary structure (amino-acid sequence), no covalent modification or aggregation, and a return to permissive temperature, pH, and ionic strength.",
      "安芬森实验：尿素与 β-巯基乙醇使 RNase A 完全展开并还原二硫键；透析去除后，酶自发重新折叠、二硫键重新形成，活性恢复。 · Anfinsen's experiment: urea and β-mercaptoethanol fully unfold RNase A and reduce its disulfide bonds; after dialysis removes them, the enzyme spontaneously refolds, re-forms disulfides, and regains activity.",
      "高温变性常不可逆，因为疏水核心暴露后分子间聚集，且高温可造成共价损伤；但并非所有高温变性都不可逆，嗜热酶与某些处理条件允许复性。 · Heat denaturation is often irreversible because exposed hydrophobic cores cause intermolecular aggregation and heat can cause covalent damage; not all heat denaturation is irreversible, however—thermophilic enzymes and some treatment conditions allow renaturation.",
      "低温降低分子运动与碰撞频率，使反应速率下降，但酶通常仍保持天然构象；这是可逆的低温抑制，不是变性，因此升温后活性恢复不等于复性。 · Low temperature slows molecular motion and collision frequency, lowering reaction rate while the enzyme usually stays natively folded; this is reversible low-temperature inhibition, not denaturation, so activity returning on warming is not renaturation.",
      "细胞内分子伴侣（如 Hsp70、伴侣蛋白）帮助新生或应激变性的多肽正确折叠并防止聚集；它们不改变氨基酸序列，也不提供折叠信息。 · In cells, chaperones (such as Hsp70 and chaperonins) help newly made or stress-denatured polypeptides fold correctly and avoid aggregation; they do not change the amino-acid sequence or supply the folding information."
    ],
    "definition": "酶变性（denaturation）是酶蛋白的天然空间构象被破坏，导致活性位点结构改变、催化活性丧失的过程；一级结构（肽键与氨基酸序列）通常保持完整。若去除变性因素后酶能重新折叠成天然构象并恢复活性，就称为复性（renaturation）。复性是否发生取决于一级结构是否完整、是否发生聚集或共价损伤，以及温度、pH、离子强度等条件；因此“变性”不等于“永久失活”。 · Enzyme denaturation is the loss of a protein's native three-dimensional conformation, which distorts the active site and abolishes catalytic activity, usually without breaking the primary structure (peptide bonds and amino-acid sequence). If the enzyme refolds into its native conformation and regains activity after the denaturing agent is removed, the process is called renaturation. Whether renaturation occurs depends on an intact primary structure, the absence of aggregation or covalent damage, and permissive temperature, pH, and ionic strength; thus denaturation is not the same as permanent inactivation.",
    "intuition": "把酶想成一张折好的纸鹤：变性是把纸揉皱，活性位点被压扁；复性是把同一张纸重新按折痕折回纸鹤。若纸被撕破（肽键断裂）或几张纸粘成一团（聚集），就折不回去了。低温则像把纸鹤放进冰箱——它变慢但仍然是纸鹤。 · Think of the enzyme as a folded paper crane: denaturation crumples the paper and flattens the active site; renaturation refolds the same sheet along its creases. If the paper is torn (peptide bonds broken) or several sheets stick together (aggregation), it cannot be refolded. Low temperature is like putting the crane in a fridge—it works more slowly but is still a crane.",
    "formulas": [
      {
        "latex": "\\text{activity recovery}=\\dfrac{A_{\\text{after}}}{A_{\\text{before}}}\\times100\\%",
        "note": "复性程度用活性回收率量化；100% 表示完全复性。 · Activity recovery quantifies renaturation; 100% means full recovery."
      },
      {
        "latex": "f_{\\text{native}}=\\dfrac{A_{\\text{obs}}-A_{\\text{unfolded}}}{A_{\\text{native}}-A_{\\text{unfolded}}}",
        "note": "由活性估算天然构象比例；需分别测定完全变性与天然酶的活性。 · Estimate the native fraction from activity; measure the fully unfolded and native activities separately."
      },
      {
        "latex": "A(t)=A_0e^{-kt},\\qquad t_{\\mathrm{half}}=\\dfrac{\\ln 2}{k}",
        "note": "变性失活常近似一级衰减（拓展）；半衰期越长，酶越稳定。 · Loss of activity during denaturation is often approximately first-order (extension); a longer half-life means greater stability."
      },
      {
        "latex": "\\Delta G_{\\text{folding}}=-RT\\ln K_{\\text{fold}},\\qquad K_{\\text{fold}}=\\dfrac{[\\text{N}]}{[\\text{U}]}",
        "note": "折叠自发性由自由能变决定（拓展）；负值表示天然态占优。 · Folding spontaneity is set by the free-energy change (extension); a negative value means the native state is favored."
      }
    ],
    "derivationNotes": [
      {
        "from": "天然构象 · Native conformation",
        "to": "活性位点 · Active site",
        "note": "天然构象维持活性位点的形状与电荷，底物才能结合并发生催化。 · The native conformation maintains the active site's shape and charge so substrate can bind and catalysis can occur."
      },
      {
        "from": "变性因素 · Denaturing condition",
        "to": "展开与失活 · Unfolding and loss of activity",
        "note": "热、极端 pH 或变性剂破坏非共价键，二级与三级结构展开，活性下降或消失。 · Heat, extreme pH, or denaturants disrupt noncovalent bonds, secondary and tertiary structure unfold, and activity falls or disappears."
      },
      {
        "from": "去除变性因素 · Remove the denaturant",
        "to": "复性 · Renaturation",
        "note": "若一级结构完整且无聚集，多肽按序列信息重新折叠，活性位点重建。 · If the primary structure is intact and no aggregation occurred, the polypeptide refolds according to its sequence and the active site is rebuilt."
      },
      {
        "from": "一级结构 · Primary structure",
        "to": "复性可能性 · Possibility of renaturation",
        "note": "序列决定天然折叠；肽键断裂、共价修饰或聚集会使复性失败。 · Sequence dictates the native fold; peptide-bond cleavage, covalent modification, or aggregation makes renaturation fail."
      },
      {
        "from": "低温 · Low temperature",
        "to": "可逆抑制 · Reversible inhibition",
        "note": "低温降低碰撞频率而不破坏构象；升温后活性恢复属于抑制解除。 · Low temperature lowers collision frequency without destroying conformation; recovery on warming is relief of inhibition."
      }
    ],
    "conditions": [
      "复性要求一级结构完整：肽键未水解，关键侧链未被共价修饰。 · Renaturation requires an intact primary structure: peptide bonds not hydrolyzed and key side chains not covalently modified.",
      "去除变性剂要温和、逐步，避免疏水表面突然暴露而聚集。 · Remove the denaturant gently and gradually to avoid aggregation when hydrophobic surfaces become exposed.",
      "温度、pH 与离子强度必须回到该酶的适宜范围；有些酶还需要辅因子或金属离子。 · Temperature, pH, and ionic strength must return to the enzyme's permissive range; some enzymes also need cofactors or metal ions.",
      "复性不保证 100%：部分分子可能错误折叠或聚集，活性回收率可以低于 100%。 · Renaturation is not guaranteed to be 100%: some molecules may misfold or aggregate, so activity recovery can be below 100%.",
      "高温变性常不可逆，但不能把“高温变性”一律写成不可逆；是否可逆取决于酶与处理条件。 · Heat denaturation is often irreversible, but “heat denaturation” should not be described as always irreversible; reversibility depends on the enzyme and treatment conditions.",
      "低温抑制与变性不同：低温下酶通常仍保持天然构象，升温即恢复活性。 · Low-temperature inhibition differs from denaturation: the enzyme usually remains natively folded and activity returns on warming."
    ],
    "keyPoints": [
      "变性破坏高级结构，通常不破坏一级结构。 · Denaturation disrupts higher-order structure, usually not the primary structure.",
      "变性可逆或不可逆取决于一级结构是否完整、是否聚集以及恢复条件。 · Reversibility depends on intact primary structure, absence of aggregation, and restoration conditions.",
      "复性是重新折叠回天然构象，不是重新合成酶。 · Renaturation is refolding into the native conformation, not new enzyme synthesis.",
      "安芬森 RNase A 实验证明一级结构包含折叠信息。 · Anfinsen's RNase A experiment showed that primary structure contains the folding information.",
      "低温降低速率但不等于变性；升温恢复活性是抑制解除。 · Low temperature lowers rate but is not denaturation; recovery on warming is relief of inhibition.",
      "细胞内伴侣蛋白帮助折叠并防止聚集，但不改变序列。 · Cellular chaperones assist folding and prevent aggregation without changing the sequence.",
      "用活性回收率而不仅用“是否恢复”来量化复性。 · Quantify renaturation with activity recovery, not just a yes-or-no recovery."
    ],
    "misconceptions": [
      "认为所有变性都不可逆；高温变性常不可逆，但部分酶在去除变性剂后可以复性。 · Thinking all denaturation is irreversible; heat denaturation is often irreversible, but some enzymes renature after the denaturing agent is removed.",
      "认为低温会使酶变性；低温主要降低碰撞频率与反应速率，酶通常仍保持天然构象。 · Thinking low temperature denatures enzymes; it mainly lowers collision frequency and rate while the enzyme usually remains natively folded.",
      "把复性当成细胞重新合成酶；纯化的酶在体外去除变性剂后也能复性，不需要核糖体。 · Confusing renaturation with new enzyme synthesis; purified enzyme can renature in vitro after denaturant removal without ribosomes.",
      "认为变性就是肽键断裂；变性通常只破坏非共价相互作用，肽键水解是另一过程。 · Thinking denaturation means peptide-bond hydrolysis; denaturation usually disrupts only noncovalent interactions, and hydrolysis is a separate process.",
      "认为活性恢复就说明从未变性；先失活再恢复恰好是复性的证据。 · Thinking recovery proves the enzyme never denatured; loss followed by recovery is precisely evidence of renaturation.",
      "把抑制剂结合与变性混为一谈；抑制剂可以在不展开整条多肽的情况下改变活性。 · Confusing inhibitor binding with denaturation; an inhibitor can change activity without unfolding the whole polypeptide.",
      "认为伴侣蛋白决定折叠方向或提供折叠信息；折叠信息在氨基酸序列中，伴侣蛋白主要防止聚集并辅助折叠。 · Thinking chaperones determine the fold or supply folding information; the information is in the amino-acid sequence, and chaperones mainly prevent aggregation and assist folding."
    ],
    "examples": [
      {
        "title": "例 1 · 安芬森复性实验 · Example 1: Anfinsen-style renaturation",
        "prompt": "将纯化的 RNase A 放入 8 mol/L 尿素与 β-巯基乙醇中，酶活性降至约 0。透析除去两种试剂后，活性恢复到原来的约 90%。说明两种试剂各起什么作用，并解释为什么活性恢复支持“一级结构决定高级结构”。 · Purified RNase A is placed in 8 mol/L urea plus β-mercaptoethanol and activity falls to about zero. After dialysis removes both agents, activity returns to about 90% of the original. Explain the role of each agent and why recovery supports the idea that primary structure determines higher-order structure.",
        "steps": [
          "尿素破坏氢键与疏水相互作用，使酶展开；β-巯基乙醇还原二硫键，使结构完全松散。 · Urea disrupts hydrogen bonds and hydrophobic interactions and unfolds the enzyme; β-mercaptoethanol reduces disulfide bonds and fully loosens the structure.",
          "透析去除小分子后，多肽链按氨基酸序列重新折叠，二硫键重新氧化形成，活性位点重建。 · After dialysis removes the small molecules, the polypeptide refolds according to its amino-acid sequence, disulfides re-form by oxidation, and the active site is rebuilt.",
          "没有加入新的酶或核糖体，活性恢复只能来自原有肽链的复性。 · No new enzyme or ribosome is added, so the recovered activity can only come from renaturation of the original polypeptide."
        ],
        "solution": "尿素使酶变性、β-巯基乙醇还原二硫键；去除后酶自发复性，约 90% 活性恢复，说明折叠信息存在于一级结构。 · Urea denatures the enzyme and β-mercaptoethanol reduces disulfides; after removal the enzyme spontaneously renatures with about 90% activity recovery, showing that folding information resides in the primary structure."
      },
      {
        "title": "例 2 · 活性回收率 · Example 2: Activity recovery",
        "prompt": "某酶原液活性为 80 U/mL。60 ℃ 处理 10 min 后活性降至 8 U/mL；缓慢降温并透析 2 h 后活性为 60 U/mL。求变性后剩余活性百分比与复性回收率（相对于原液），并判断复性是否完全。 · An enzyme stock has activity 80 U/mL. After 10 min at 60 ℃ activity falls to 8 U/mL; after slow cooling and 2 h of dialysis it is 60 U/mL. Find the percent activity remaining after denaturation and the renaturation recovery relative to the original stock, and decide whether renaturation is complete.",
        "steps": [
          "变性后剩余：\\(\\dfrac{8}{80}\\times100\\%=10\\%\\)。 · Activity remaining after denaturation: \\(\\dfrac{8}{80}\\times100\\%=10\\%\\).",
          "复性回收率：\\(\\dfrac{60}{80}\\times100\\%=75\\%\\)。 · Renaturation recovery: \\(\\dfrac{60}{80}\\times100\\%=75\\%\\).",
          "60 U/mL 低于原液的 80 U/mL，说明只有部分酶复性，其余可能聚集或错误折叠。 · 60 U/mL is below the original 80 U/mL, so only part of the enzyme renatured; the rest may have aggregated or misfolded."
        ],
        "solution": "变性后仅剩 10% 活性；复性后回收 75%，未完全复性。 · Only 10% activity remained after denaturation; recovery was 75%, so renaturation was incomplete."
      },
      {
        "title": "例 3 · 低温抑制不是复性 · Example 3: Cold inhibition is not renaturation",
        "prompt": "解释为什么酶在 4 ℃ 放置一夜后活性很低、回到 25 ℃ 后活性恢复，不能称为复性；而 80 ℃ 处理后再降温到 25 ℃ 活性不恢复，可能是什么原因？ · Explain why low activity after overnight storage at 4 ℃ that returns at 25 ℃ is not renaturation, whereas activity does not return after 80 ℃ treatment and cooling to 25 ℃. What may explain the difference?",
        "steps": [
          "4 ℃ 时分子运动慢、碰撞频率低，反应速率小；酶仍保持天然构象，所以升温后活性恢复是低温抑制解除。 · At 4 ℃ molecular motion and collision frequency are low, so the rate is low; the enzyme remains natively folded, so recovery on warming is relief of low-temperature inhibition.",
          "80 ℃ 可能破坏非共价键并使疏水核心暴露；冷却时分子间聚集或发生共价损伤，无法重新折叠。 · 80 ℃ may disrupt noncovalent bonds and expose hydrophobic cores; on cooling, molecules aggregate or suffer covalent damage and cannot refold.",
          "区分标准是处理过程中天然构象是否被破坏，而不仅是活性高低。 · The criterion is whether the native conformation was destroyed during treatment, not merely whether activity was low."
        ],
        "solution": "低温抑制可逆但不是变性复性；高温变性是否可逆取决于聚集与共价损伤，不能一概而论。 · Low-temperature inhibition is reversible but is not denaturation–renaturation; whether heat denaturation is reversible depends on aggregation and covalent damage and cannot be generalized."
      },
      {
        "title": "例 4 · 实验设计 · Example 4: Experimental design",
        "prompt": "设计实验检验某酶的热变性是否可逆。写出自变量、因变量、对照与关键步骤。 · Design an experiment to test whether heat denaturation of an enzyme is reversible. State the independent variable, dependent variable, controls, and key steps.",
        "steps": [
          "自变量：热处理温度（如 45 ℃ 与 70 ℃）或是否恢复条件；因变量：酶促反应速率或活性。 · Independent variable: treatment temperature (e.g., 45 ℃ versus 70 ℃) or whether permissive conditions are restored; dependent variable: enzyme activity or rate.",
          "对照：未加热酶（100% 活性）、完全变性酶（0% 活性）与仅底物对照（排除底物自分解）。 · Controls: untreated enzyme (100% activity), fully denatured enzyme (0% activity), and a substrate-only control (to rule out spontaneous substrate breakdown).",
          "步骤：在各温度保温相同时间，立即冰浴或测定活性；再缓慢恢复到最适温度与 pH 并透析，再次测定活性；每条件重复 3 次。 · Steps: incubate at each temperature for the same time and assay immediately or quench on ice; slowly return to optimal temperature and pH with dialysis and assay again; repeat each condition three times.",
          "判据：若高温组复温后活性显著回升并接近对照，支持可逆；若仍接近 0，则为不可逆。 · Criterion: if activity rises significantly after rewarming and approaches the control, denaturation was reversible; if it remains near zero, it was irreversible."
        ],
        "solution": "用同一酶、相同保温时间与底物条件，比较复温前后的活性回收率；对照排除底物耗尽与温度对测定的直接影响。 · Use the same enzyme, incubation time, and substrate conditions, and compare activity recovery before and after rewarming; controls exclude substrate depletion and direct temperature effects on the assay."
      }
    ],
    "examTips": [
      "CED 3.2.A.2 的关键句是“某些变性可逆”；不要把所有变性都写成不可逆。 · The key CED 3.2.A.2 statement is that some denaturation is reversible; do not write that all denaturation is irreversible.",
      "区分低温抑制（构象完整）与变性（构象破坏）：前者升温即恢复，后者需要复性。 · Distinguish low-temperature inhibition (intact conformation) from denaturation (disrupted conformation): the former recovers on warming, while the latter requires renaturation.",
      "复性证据要用纯化酶、去除变性剂与活性回收，排除新合成。 · Evidence for renaturation needs purified enzyme, removal of the denaturant, and activity recovery, ruling out new synthesis.",
      "高温变性常因聚集而不可逆，但“常”不是“一定”。 · Heat denaturation is often irreversible because of aggregation, but “often” is not “always.”",
      "计算活性回收率时以变性前同一酶液为分母。 · When calculating activity recovery, use the same enzyme stock before denaturation as the denominator.",
      "实验设计要设未处理对照、完全变性对照与底物对照，并重复测定。 · In experiments, include untreated, fully denatured, and substrate-only controls, and repeat measurements."
    ],
    "related": [
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.2",
        "title": "环境影响酶 · Environmental Impacts on Enzyme Function",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u3",
        "code": "3.1",
        "title": "酶催化 · Enzyme Catalysis",
        "relation": "prerequisite"
      },
      {
        "subject": "bio",
        "chapterId": "bio-u1",
        "code": "1.6",
        "title": "酶结构与功能 · Structure and Function of Enzymes",
        "relation": "related"
      }
    ],
    "modules": [],
    "practiceHref": "#/bio/practice/bio-u3",
    "connections": [
      "上游：3.1 酶催化与 3.2 环境影响酶给出活性位点、温度/pH 与变性的一般规律。 · Upstream: 3.1 Enzyme Catalysis and 3.2 Environmental Impacts on Enzyme Function establish the active site and the general rules of temperature, pH, and denaturation.",
      "证据：安芬森 RNase A 复性实验说明一级结构决定高级结构；伴侣蛋白说明细胞内的折叠辅助。 · Evidence: Anfinsen's RNase A renaturation experiment shows that primary structure determines higher-order structure; chaperones show cellular folding assistance.",
      "下游：蛋白质折叠、错误折叠疾病与生物技术中的酶复性及固定化。 · Downstream: protein folding, misfolding diseases, and enzyme renaturation and immobilization in biotechnology.",
      "跨学科：热力学与动力学——折叠是否自发看 \\(\\Delta G\\)，复性快慢看动力学与聚集竞争。 · Cross-disciplinary: thermodynamics and kinetics—whether folding is spontaneous depends on \\(\\Delta G\\), while the speed of renaturation depends on kinetics and competition with aggregation."
    ],
    "intuitionDetailed": "天然构象是自由能较低的折叠状态；变性剂把平衡推向展开态。去除变性剂后，多肽沿能量景观重新折叠；但若多个展开的疏水表面相遇，聚集可能把分子锁在非天然状态，这就是高温变性常不可逆的原因。低温只降低到达过渡态的速率，不改变天然态的优势，所以是抑制而非变性。复性是否成功，要看一级结构是否完整、是否有伴侣蛋白帮助，以及恢复条件是否温和。 · The native conformation is a low-free-energy folded state; denaturants shift the equilibrium toward the unfolded state. After removal, the polypeptide refolds along the energy landscape, but exposed hydrophobic surfaces can aggregate and lock molecules in non-native states—the usual reason heat denaturation is irreversible. Low temperature only slows access to the transition state without changing the favorability of the native state, so it is inhibition rather than denaturation. Successful renaturation depends on an intact primary structure, chaperone assistance, and gentle restoration conditions.",
    "development": [
      "先分清三种“活性下降”：低温抑制、抑制剂结合与变性。 · First distinguish three causes of lower activity: low-temperature inhibition, inhibitor binding, and denaturation.",
      "用结构语言描述变性：哪些键被破坏、哪些结构层次改变、活性位点如何受影响。 · Describe denaturation structurally: which bonds break, which levels of structure change, and how the active site is affected.",
      "判断可逆性：一级结构是否完整、是否聚集、能否恢复到适宜条件。 · Decide reversibility: is the primary structure intact, has aggregation occurred, and can permissive conditions be restored?",
      "用安芬森实验与活性回收率提供证据，并说明对照。 · Use Anfinsen's experiment and activity recovery as evidence, and describe the controls.",
      "迁移到细胞：伴侣蛋白与应激反应如何防止聚集并帮助复性。 · Transfer to cells: how chaperones and stress responses prevent aggregation and assist renaturation."
    ],
    "checks": [
      "低温保存后升温活性恢复，说明发生了复性吗？为什么？ · Does activity returning after cold storage and warming show renaturation? Why or why not?",
      "变性与肽键水解的区别是什么？ · What is the difference between denaturation and peptide-bond hydrolysis?",
      "哪些条件会让变性变成不可逆？ · Which conditions make denaturation irreversible?",
      "安芬森实验为什么能排除“新合成酶”的解释？ · Why can Anfinsen's experiment rule out new enzyme synthesis?",
      "某酶复性后活性为原来的 40%，可以说它完全复性吗？ · If activity after renaturation is 40% of the original, is renaturation complete?"
    ],
    "vocabulary": [
      {
        "termZh": "变性",
        "termEn": "denaturation",
        "defZh": "蛋白质天然构象被破坏、活性丧失，通常不涉及肽键断裂。",
        "defEn": "Loss of a protein's native conformation and activity, usually without peptide-bond cleavage."
      },
      {
        "termZh": "复性",
        "termEn": "renaturation",
        "defZh": "去除变性因素后，多肽重新折叠成天然构象并恢复活性。",
        "defEn": "Refolding of a polypeptide into its native conformation and recovery of activity after removal of the denaturing agent."
      },
      {
        "termZh": "天然构象",
        "termEn": "native conformation",
        "defZh": "蛋白质在生理条件下具有功能的三维结构。",
        "defEn": "The functional three-dimensional structure of a protein under physiological conditions."
      },
      {
        "termZh": "变性剂",
        "termEn": "denaturant",
        "defZh": "如尿素或盐酸胍，能破坏非共价相互作用使蛋白质展开的试剂。",
        "defEn": "A reagent such as urea or guanidinium chloride that disrupts noncovalent interactions and unfolds proteins."
      },
      {
        "termZh": "分子伴侣",
        "termEn": "chaperone",
        "defZh": "帮助多肽正确折叠、防止聚集的蛋白质，不改变氨基酸序列。",
        "defEn": "A protein that helps polypeptides fold correctly and prevents aggregation without changing the amino-acid sequence."
      },
      {
        "termZh": "聚集",
        "termEn": "aggregation",
        "defZh": "展开的疏水表面相互黏附形成非天然聚集体，常使复性失败。",
        "defEn": "Non-native clumping of exposed hydrophobic surfaces that often prevents renaturation."
      },
      {
        "termZh": "活性回收率",
        "termEn": "activity recovery",
        "defZh": "复性后活性占变性前活性的百分比，用于量化复性程度。",
        "defEn": "The percentage of pre-denaturation activity regained after renaturation, used to quantify renaturation."
      },
      {
        "termZh": "低温抑制",
        "termEn": "low-temperature inhibition",
        "defZh": "低温降低碰撞频率使速率下降，但酶通常仍保持天然构象。",
        "defEn": "Reduced rate at low temperature due to lower collision frequency while the enzyme usually remains natively folded."
      }
    ]
  }
};
