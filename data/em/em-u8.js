export const UNIT = {
  "id": "em-u8",
  "code": "8",
  "titleZh": "电荷、电场与高斯定律",
  "titleEn": "Electric Charges, Fields, and Gauss's Law",
  "subject": "em",
  "layer": "ap"
};
export const TOPICS = {
  "8.1": {
    "id": "em/em-u8/8.1",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.1",
    "titleZh": "电荷与力",
    "titleEn": "Electric Charge and Force",
    "layer": "ap",
    "summary": "电荷是物质的基本属性，分为正负；同种相斥、异种相吸。库仑定律给出点电荷间作用力，电荷量子化与守恒约束所有过程；日常接触力本质上是大量微观电磁相互作用的宏观表现。 · Electric charge is a basic property of matter with two signs; like charges repel and opposite charges attract. Coulomb's law gives the force between point charges, while quantization and conservation constrain every process; everyday contact forces are macroscopic manifestations of countless microscopic electromagnetic interactions.",
    "learningObjectives": [
      "能说明电荷的两种类型、量子化与守恒，并用 \\(q=ne\\) 计算元电荷数。 · Explain the two types of charge, quantization, and conservation, and use \\(q=ne\\) to count elementary charges.",
      "能用库仑定律 \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\) 计算点电荷间作用力，并判断方向。 · Calculate the force between point charges with Coulomb's law \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\) and determine its direction.",
      "能用矢量叠加求多个电荷对同一电荷的合力，并解释宏观接触力与微观电磁作用的关系。 · Use vector superposition to find the net force on a charge and explain how macroscopic contact forces relate to microscopic electromagnetic interactions."
    ],
    "essentialKnowledge": [
      "电荷有两种：正电荷与负电荷；同种电荷相斥，异种电荷相吸。 · There are two kinds of electric charge, positive and negative; like charges repel and opposite charges attract.",
      "电荷量子化：任何可观测电荷量都是基本电荷 \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\) 的整数倍，\\(q=ne\\)。 · Charge is quantized: every observable charge is an integer multiple of the elementary charge \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\), \\(q=ne\\).",
      "电荷守恒：孤立系统的总电荷保持不变；摩擦起电只是电荷转移，不是创造电荷。 · Charge is conserved: the total charge of an isolated system is constant; rubbing transfers charge rather than creating it.",
      "库仑定律：真空中两个点电荷间的作用力大小 \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\)，方向沿两电荷连线；\\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\approx8.99\\times10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}\\)。 · Coulomb's law: in vacuum the force between two point charges has magnitude \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\) along the line joining them, with \\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\approx8.99\\times10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}\\).",
      "多个电荷对同一电荷的作用力按矢量叠加：先分别求每个力，再分解、合成。 · Forces from several charges on one charge add as vectors: find each force first, then resolve and combine.",
      "宏观物体通常整体电中性，但内部有大量正负电荷；支持力、摩擦力、张力、弹力等接触力是大量原子和分子间电磁相互作用的宏观平均，因此在宏观尺度上用接触力模型比逐个粒子求和更方便。 · Macroscopic objects are usually neutral overall but contain enormous numbers of positive and negative charges; normal force, friction, tension, and elastic forces are macroscopic averages of countless atomic and molecular electromagnetic interactions, so contact-force models are more convenient than summing every particle interaction.",
      "库仑定律只对点电荷或球对称分布的球外区域成立；对有限大带电体需分割成电荷元再积分。 · Coulomb's law applies to point charges or outside a spherically symmetric distribution; for an extended charged body, divide it into charge elements and integrate."
    ],
    "definition": "电荷（electric charge）是物质携带的一种基本属性，分为正电荷与负电荷。同种电荷相互排斥，异种电荷相互吸引。真空中两个静止点电荷之间的作用力由库仑定律给出：\\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\)，方向沿两电荷连线；同号相斥、异号相吸。电荷量是量子化的，\\(q=ne\\)，并且孤立系统的总电荷守恒。 · Electric charge is a fundamental property of matter, occurring as positive or negative. Like charges repel and opposite charges attract. In vacuum the force between two stationary point charges is given by Coulomb's law, \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\), directed along the line joining them: like signs repel and opposite signs attract. Charge is quantized as \\(q=ne\\), and the total charge of an isolated system is conserved.",
    "intuition": "把电荷想成「力的标签」：两个电荷先看符号决定推还是拉，再用 \\(r^{2}\\) 判断距离变远时力下降得多快。宏观上我们不去追踪每个电子，而是把大量电磁作用平均成支持力、摩擦力等接触力。 · Think of charge as a “force label”: first use the signs to decide push or pull, then use \\(r^{2}\\) to see how quickly the force falls with distance. Macroscopically we do not track every electron; we average enormous numbers of electromagnetic interactions into contact forces such as normal force and friction.",
    "formulas": [
      {
        "latex": "F=k\\dfrac{|q_1q_2|}{r^{2}}",
        "note": "库仑定律：真空中两个点电荷间的作用力。 · Coulomb's law: the force between two point charges in vacuum."
      },
      {
        "latex": "k=\\dfrac{1}{4\\pi\\varepsilon_0}\\approx8.99\\times10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}",
        "note": "库仑常数与真空介电常数的关系。 · Relation between Coulomb's constant and the vacuum permittivity."
      },
      {
        "latex": "q=ne",
        "note": "电荷量子化；\\(e\\) 为基本电荷，\\(n\\) 为整数。 · Charge quantization; \\(e\\) is the elementary charge and \\(n\\) is an integer."
      },
      {
        "latex": "\\vec F_{\\mathrm{net}}=\\sum_i\\vec F_i",
        "note": "多个电荷对同一电荷的合力为矢量和。 · The net force from several charges on one charge is the vector sum."
      },
      {
        "latex": "\\vec F_{12}=-\\vec F_{21}",
        "note": "两个电荷之间的作用力等大反向，符合牛顿第三定律。 · The forces two charges exert on each other are equal and opposite, consistent with Newton's third law."
      }
    ],
    "derivationNotes": [
      {
        "from": "实验事实 · Experimental fact",
        "to": "库仑定律 · Coulomb's law",
        "note": "扭秤实验表明：力与两电荷量的乘积成正比，与距离平方成反比，方向沿连线。 · Torsion-balance experiments show that the force is proportional to the product of the two charges, inversely proportional to the square of the distance, and directed along the line joining them."
      },
      {
        "from": "叠加原理 · Superposition",
        "to": "多电荷合力 · Net force from several charges",
        "note": "每个电荷独立产生作用力，合力为各力的矢量和；不能直接把大小相加减。 · Each charge contributes independently; the net force is the vector sum, not a direct addition of magnitudes."
      },
      {
        "from": "微观电磁作用 · Microscopic electromagnetic interactions",
        "to": "宏观接触力 · Macroscopic contact force",
        "note": "对大量原子和分子的电磁作用求平均，得到支持力、摩擦力、张力、弹力等宏观模型。 · Averaging electromagnetic interactions over many atoms and molecules gives macroscopic models such as normal force, friction, tension, and elasticity."
      }
    ],
    "conditions": [
      "点电荷；\\(r\\) 远大于电荷自身尺度。 · Point charges; \\(r\\) is much larger than the size of each charge.",
      "真空（或空气近似）；介质中需用介电常数。 · Vacuum (or air as an approximation); in a medium use the permittivity.",
      "电荷静止或速度远小于光速；运动电荷还会产生磁场效应。 · Charges are at rest or moving much slower than light; moving charges also produce magnetic effects.",
      "同号相斥、异号相吸；力沿两电荷连线。 · Like charges repel and opposite charges attract; the force lies along the line joining them.",
      "多个电荷用矢量叠加，不能直接代数相加。 · For multiple charges, add forces as vectors, not scalars."
    ],
    "keyPoints": [
      "电荷只有正、负两种；同种相斥、异种相吸。 · There are only two signs of charge; like charges repel and opposite charges attract.",
      "电荷量子化：\\(q=ne\\)，基本电荷 \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\)。 · Charge is quantized: \\(q=ne\\), with elementary charge \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\).",
      "电荷守恒：摩擦起电是电荷转移，不是创造电荷。 · Charge is conserved: rubbing transfers charge rather than creating it.",
      "库仑力按 \\(\\dfrac{1}{r^{2}}\\) 衰减；距离加倍，力变为原来的四分之一。 · The Coulomb force falls as \\(\\dfrac{1}{r^{2}}\\); doubling the distance reduces it to one quarter.",
      "多个电荷的合力用矢量叠加，先分解再合成。 · The net force from several charges uses vector superposition: resolve first, then combine.",
      "支持力、摩擦力、张力等接触力来自大量微观电磁相互作用，是宏观平均模型。 · Normal force, friction, tension, and other contact forces arise from countless microscopic electromagnetic interactions and are macroscopic averaged models.",
      "宏观物体整体电中性，但内部仍有大量正负电荷。 · Macroscopic objects are neutral overall but still contain enormous positive and negative charge."
    ],
    "misconceptions": [
      "认为摩擦起电创造了电荷；实际上只是电子从一个物体转移到另一个物体。 · Thinking rubbing creates charge; it only transfers electrons from one object to another.",
      "认为电中性物体内部没有电荷；中性只表示正负电荷的代数和为零。 · Thinking a neutral object contains no charge; neutrality only means the algebraic sum of positive and negative charge is zero.",
      "认为电荷量可以取任意连续值；可观测电荷是基本电荷的整数倍。 · Thinking charge can take any continuous value; observable charge is an integer multiple of the elementary charge.",
      "把库仑力方向与电场方向混为一谈；负电荷所受电场力与电场方向相反。 · Confusing the direction of the Coulomb force with the direction of the electric field; a negative charge feels a force opposite the field.",
      "认为接触力不是电磁力；支持力、摩擦力、张力本质上是原子间电磁作用的宏观表现。 · Thinking contact forces are not electromagnetic; normal force, friction, and tension are macroscopic manifestations of interatomic electromagnetic interactions.",
      "把 \\(F=k\\dfrac{q_1q_2}{r^{2}}\\) 直接用于有限大带电体； extended 物体需分割成电荷元再积分。 · Applying \\(F=k\\dfrac{q_1q_2}{r^{2}}\\) directly to an extended charged body; an extended body must be divided into charge elements and integrated.",
      "认为距离加倍时力减半；平方反比意味着力变为四分之一。 · Thinking doubling the distance halves the force; the inverse-square law makes it one quarter."
    ],
    "examples": [
      {
        "title": "例 1 · 库仑力的大小与方向 · Example 1: Magnitude and direction of the Coulomb force",
        "prompt": "两个点电荷 \\(q_1=+2.0\\,\\mathrm{\\mu C}\\) 与 \\(q_2=-3.0\\,\\mathrm{\\mu C}\\) 相距 \\(0.20\\,\\mathrm{m}\\)。求它们之间库仑力的大小，并说明每个电荷受力的方向。 · Two point charges \\(q_1=+2.0\\,\\mathrm{\\mu C}\\) and \\(q_2=-3.0\\,\\mathrm{\\mu C}\\) are \\(0.20\\,\\mathrm{m}\\) apart. Find the magnitude of the Coulomb force and state the direction of the force on each charge.",
        "steps": [
          "用库仑定律：\\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\)。 · Use Coulomb's law: \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\).",
          "\\(F=(8.99\\times10^{9})\\dfrac{(2.0\\times10^{-6})(3.0\\times10^{-6})}{(0.20)^{2}}\\)。 · \\(F=(8.99\\times10^{9})\\dfrac{(2.0\\times10^{-6})(3.0\\times10^{-6})}{(0.20)^{2}}\\).",
          "\\(F\\approx1.35\\,\\mathrm{N}\\)。 · \\(F\\approx1.35\\,\\mathrm{N}\\).",
          "两电荷异号，相互吸引：\\(q_1\\) 受力指向 \\(q_2\\)，\\(q_2\\) 受力指向 \\(q_1\\)。 · The charges have opposite signs, so they attract: the force on \\(q_1\\) points toward \\(q_2\\), and the force on \\(q_2\\) points toward \\(q_1\\)."
        ],
        "solution": "\\(F\\approx1.35\\,\\mathrm{N}\\)，方向沿连线相互吸引。 · \\(F\\approx1.35\\,\\mathrm{N}\\), directed along the line joining them, attractive.",
        "solutionLatex": "F=k\\dfrac{|q_1q_2|}{r^{2}}=(8.99\\times10^{9})\\dfrac{(2.0\\times10^{-6})(3.0\\times10^{-6})}{(0.20)^{2}}\\approx1.35\\,\\mathrm{N}"
      },
      {
        "title": "例 2 · 电荷量子化 · Example 2: Charge quantization",
        "prompt": "一个物体带电荷量 \\(q=-1.0\\,\\mathrm{\\mu C}\\)。它比中性状态多了多少个电子？ · An object has charge \\(q=-1.0\\,\\mathrm{\\mu C}\\). How many extra electrons does it have compared with its neutral state?",
        "steps": [
          "每个电子带电荷 \\(-e=-1.60\\times10^{-19}\\,\\mathrm{C}\\)。 · Each electron carries charge \\(-e=-1.60\\times10^{-19}\\,\\mathrm{C}\\).",
          "电子数 \\(n=\\dfrac{|q|}{e}=\\dfrac{1.0\\times10^{-6}}{1.60\\times10^{-19}}\\)。 · Number of electrons: \\(n=\\dfrac{|q|}{e}=\\dfrac{1.0\\times10^{-6}}{1.60\\times10^{-19}}\\).",
          "\\(n\\approx6.3\\times10^{12}\\)。 · \\(n\\approx6.3\\times10^{12}\\)."
        ],
        "solution": "约 \\(6.3\\times10^{12}\\) 个电子。 · About \\(6.3\\times10^{12}\\) electrons.",
        "solutionLatex": "n=\\dfrac{|q|}{e}=\\dfrac{1.0\\times10^{-6}}{1.60\\times10^{-19}}\\approx6.3\\times10^{12}"
      },
      {
        "title": "例 3 · 三电荷的平衡位置 · Example 3: Equilibrium position with three charges",
        "prompt": "\\(q_1=+4.0\\,\\mathrm{\\mu C}\\) 固定在 \\(x=0\\)，\\(q_2=+1.0\\,\\mathrm{\\mu C}\\) 固定在 \\(x=0.30\\,\\mathrm{m}\\)。在 \\(x\\) 轴上何处放第三个正电荷，使它所受合力为零？ · \\(q_1=+4.0\\,\\mathrm{\\mu C}\\) is fixed at \\(x=0\\) and \\(q_2=+1.0\\,\\mathrm{\\mu C}\\) is fixed at \\(x=0.30\\,\\mathrm{m}\\). Where on the \\(x\\)-axis should a third positive charge be placed so that the net force on it is zero?",
        "steps": [
          "第三个电荷必须位于两电荷之间，两个斥力才能反向。 · The third charge must lie between the two charges so that the two repulsive forces oppose each other.",
          "设它距 \\(q_1\\) 为 \\(x\\)，则距 \\(q_2\\) 为 \\(0.30-x\\)。令两力大小相等：\\(k\\dfrac{4q}{x^{2}}=k\\dfrac{q}{(0.30-x)^{2}}\\)。 · Let its distance from \\(q_1\\) be \\(x\\), so its distance from \\(q_2\\) is \\(0.30-x\\). Set the magnitudes equal: \\(k\\dfrac{4q}{x^{2}}=k\\dfrac{q}{(0.30-x)^{2}}\\).",
          "化简得 \\(\\dfrac{2}{x}=\\dfrac{1}{0.30-x}\\)，即 \\(0.60-2x=x\\)。 · Simplify to \\(\\dfrac{2}{x}=\\dfrac{1}{0.30-x}\\), so \\(0.60-2x=x\\).",
          "解得 \\(x=0.20\\,\\mathrm{m}\\)。 · Solving gives \\(x=0.20\\,\\mathrm{m}\\)."
        ],
        "solution": "在 \\(x=0.20\\,\\mathrm{m}\\) 处，合力为零。 · The net force is zero at \\(x=0.20\\,\\mathrm{m}\\).",
        "solutionLatex": "\\dfrac{4}{x^{2}}=\\dfrac{1}{(0.30-x)^{2}}\\Rightarrow x=0.20\\,\\mathrm{m}"
      },
      {
        "title": "例 4 · 支持力的微观来源 · Example 4: Microscopic origin of the normal force",
        "prompt": "一本质量 \\(2.0\\,\\mathrm{kg}\\) 的书静止在水平桌面上。书受到的重力为 \\(19.6\\,\\mathrm{N}\\)。请解释桌面支持力的来源，并说明它是否属于电磁力。 · A \\(2.0\\,\\mathrm{kg}\\) book rests on a horizontal table. Its weight is \\(19.6\\,\\mathrm{N}\\). Explain the origin of the normal force and whether it is electromagnetic.",
        "steps": [
          "书静止，竖直方向合力为零，所以支持力 \\(N=mg=19.6\\,\\mathrm{N}\\)，方向向上。 · The book is at rest, so the vertical net force is zero; thus \\(N=mg=19.6\\,\\mathrm{N}\\), upward.",
          "桌面上、下表面的原子相互靠近时，电子云之间产生强烈的电磁排斥；大量原子对的排斥平均后表现为宏观支持力。 · When atoms in the book and table are brought close, their electron clouds exert strong electromagnetic repulsion; averaging over enormous numbers of atomic pairs gives the macroscopic normal force.",
          "所以支持力不是一种新的基本力，而是电磁相互作用的宏观表现；它的大小由平衡条件决定，而不是由库仑定律逐对计算。 · The normal force is therefore not a new fundamental force but a macroscopic manifestation of electromagnetic interactions; its magnitude is set by equilibrium, not by summing Coulomb forces pair by pair."
        ],
        "solution": "支持力 \\(19.6\\,\\mathrm{N}\\) 向上，本质是大量原子间电磁排斥的宏观平均。 · The normal force is \\(19.6\\,\\mathrm{N}\\) upward and is fundamentally a macroscopic average of electromagnetic repulsion between countless atoms.",
        "solutionLatex": "N=mg=(2.0)(9.8)=19.6\\,\\mathrm{N}"
      }
    ],
    "examTips": [
      "先判断电荷符号，再确定力是吸引还是排斥；不要只算大小。 · Determine the signs first, then decide whether the force is attractive or repulsive; do not stop at the magnitude.",
      "把所有电荷量换算成库仑、距离换算成米，再代入库仑定律。 · Convert every charge to coulombs and every distance to meters before substituting into Coulomb's law.",
      "多个电荷时先分别求每个力，再按分量合成；不要直接把大小相加。 · With several charges, find each force separately and combine components; do not add magnitudes directly.",
      "解释接触力时，用「大量原子/分子间电磁相互作用的宏观平均」这一因果链。 · When explaining a contact force, use the causal chain “macroscopic average of electromagnetic interactions among countless atoms and molecules.”",
      "用 \\(q=ne\\) 检查电荷量是否合理；宏观电荷对应极大的 \\(n\\)。 · Use \\(q=ne\\) to check that a charge is reasonable; macroscopic charge corresponds to an enormous \\(n\\)."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.2",
        "title": "电场 · Electric Fields",
        "relation": "后续 · next"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.6",
        "title": "电荷性质与电荷守恒 · Properties and Conservation of Charge",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.8",
        "title": "电力、引力与宏观物性 · Electric and Gravitational Forces in Matter",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "electric-field",
        "title": "电场线与等势 · Field lines and equipotentials"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：电荷的量子化与守恒是库仑定律和整个电磁学的基础。 · Upstream: quantization and conservation of charge underpin Coulomb's law and all of electromagnetism.",
      "相关：电荷作为物质基本属性、量子化与守恒的完整讨论见 8.6；本节侧重库仑力的计算与矢量叠加。 · Related: the full discussion of charge as a fundamental property of matter, its quantization, and conservation is in 8.6; this topic focuses on Coulomb-force calculations and vector superposition.",
      "下游：把库仑力除以试探电荷得到电场，进入 8.2；多个电荷的矢量叠加进入 8.3。 · Downstream: dividing the Coulomb force by a test charge gives the electric field in 8.2; vector superposition of several charges leads to 8.3.",
      "跨主题：宏观接触力与材料性质是大量微观电磁作用的集体表现，详见 8.8。 · Cross-topic: macroscopic contact forces and material properties are collective effects of countless microscopic electromagnetic interactions, developed in 8.8.",
      "跨学科：化学键、摩擦、黏附、表面张力和生物分子识别都建立在电磁相互作用之上。 · Cross-disciplinary: chemical bonds, friction, adhesion, surface tension, and biomolecular recognition all rest on electromagnetic interactions."
    ],
    "intuitionDetailed": "库仑定律的形式与万有引力相似，都是平方反比，但电力多了一个关键特征：电荷有正负，因此力可以是吸引也可以是排斥。两个电荷靠近时，同号电荷的力指向远离彼此的方向，异号电荷的力指向彼此。多个电荷同时存在时，每个电荷都独立地对目标电荷施加库仑力，目标电荷感受的是这些力的矢量和；这就是叠加原理。宏观物体由大量原子组成，原子内部有带正电的原子核和带负电的电子；两个物体接触时，电子云之间的电磁排斥和吸引非常复杂，但平均效果可以很好地用支持力、摩擦力、张力等宏观力描述。因此在宏观问题中，我们不需要（也不可能）逐个粒子求和，而是使用接触力模型；这并不改变这些力的电磁本质。 · Coulomb's law resembles Newton's law of gravitation in its inverse-square form, but electric charge has a crucial extra feature: two signs, so the force can attract or repel. When two charges are brought together, like charges feel forces pointing away from each other, while opposite charges feel forces pointing toward each other. When several charges are present, each one independently exerts a Coulomb force on the target charge, and the target feels the vector sum of those forces; this is superposition. Macroscopic objects consist of enormous numbers of atoms containing positive nuclei and negative electrons. When two objects touch, the electromagnetic repulsion and attraction between their electron clouds are extremely complicated, but the average effect is well described by macroscopic forces such as normal force, friction, and tension. In macroscopic problems we therefore do not (and cannot) sum every particle interaction; we use contact-force models instead. This does not change the electromagnetic nature of those forces.",
    "development": [
      "回顾电荷的两种类型、量子化与守恒，明确 \\(q=ne\\) 的含义。 · Review the two types of charge, quantization, and conservation, and clarify the meaning of \\(q=ne\\).",
      "由实验事实写出库仑定律，说明平方反比与方向规则。 · Write Coulomb's law from experimental facts and state the inverse-square dependence and direction rule.",
      "把多个电荷的作用力分解为分量，再用矢量叠加求合力。 · Resolve the forces from several charges into components and use vector superposition to find the net force.",
      "用极限和比例检查结果：距离趋于零、距离很大、电荷异号等情形。 · Check results with limits and ratios: distance approaching zero, very large distance, opposite signs, and so on.",
      "把微观电磁作用平均为宏观接触力，解释支持力、摩擦力和张力的来源。 · Average microscopic electromagnetic interactions into macroscopic contact forces and explain the origin of normal force, friction, and tension."
    ],
    "checks": [
      "两个同号电荷靠近时，力的大小和方向如何变化？ · As two like charges move closer, how do the magnitude and direction of the force change?",
      "为什么说摩擦起电没有创造电荷？ · Why does rubbing not create charge?",
      "三个电荷对同一电荷的作用力为什么要用矢量叠加？ · Why must the forces from three charges on one charge be added as vectors?",
      "书受到的支持力与重力等大反向，能否说支持力就是重力？ · The normal force on a book is equal and opposite to its weight; can we say the normal force is gravity?",
      "距离加倍时库仑力变为原来的多少？ · By what factor does the Coulomb force change when the distance doubles?"
    ],
    "vocabulary": [
      {
        "termZh": "电荷",
        "termEn": "electric charge",
        "defZh": "物质的一种基本属性，分为正电荷与负电荷，决定电磁相互作用的强弱与方向。",
        "defEn": "A fundamental property of matter, occurring as positive or negative charge, that determines the strength and direction of electromagnetic interactions."
      },
      {
        "termZh": "电荷量子化",
        "termEn": "quantization of charge",
        "defZh": "任何可观测电荷量都是基本电荷 \\(e\\) 的整数倍，\\(q=ne\\)。",
        "defEn": "Every observable charge is an integer multiple of the elementary charge \\(e\\), \\(q=ne\\)."
      },
      {
        "termZh": "电荷守恒",
        "termEn": "conservation of charge",
        "defZh": "孤立系统的总电荷保持不变；起电过程只是电荷转移。",
        "defEn": "The total charge of an isolated system remains constant; charging processes only transfer charge."
      },
      {
        "termZh": "库仑定律",
        "termEn": "Coulomb's law",
        "defZh": "真空中两个点电荷间的作用力与电荷量乘积成正比、与距离平方成反比，方向沿连线。",
        "defEn": "The force between two point charges in vacuum is proportional to the product of the charges, inversely proportional to the square of the distance, and directed along the line joining them."
      },
      {
        "termZh": "基本电荷",
        "termEn": "elementary charge",
        "defZh": "一个电子或质子所带电荷量的绝对值，\\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\)。",
        "defEn": "The magnitude of the charge on an electron or proton, \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\)."
      },
      {
        "termZh": "叠加原理",
        "termEn": "superposition principle",
        "defZh": "多个电荷对同一电荷的作用力等于各电荷单独作用力的矢量和。",
        "defEn": "The net force from several charges on one charge is the vector sum of the forces each charge would exert alone."
      },
      {
        "termZh": "接触力",
        "termEn": "contact force",
        "defZh": "两个物体接触时产生的宏观力，如支持力、摩擦力、张力；本质是大量微观电磁相互作用的平均。",
        "defEn": "A macroscopic force between touching objects, such as normal force, friction, or tension; fundamentally an average of countless microscopic electromagnetic interactions."
      }
    ]
  },
  "8.2": {
    "id": "em/em-u8/8.2",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.2",
    "titleZh": "电场",
    "titleEn": "Electric Fields",
    "layer": "ap",
    "summary": "电场 · Electric Fields",
    "learningObjectives": [
      "能陈述「电场」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Fields：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电场（Electric Fields）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电场」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\vec E=\\dfrac{\\vec F}{q_0}",
        "note": "电场强度定义。"
      },
      {
        "latex": "E=k\\dfrac{|q|}{r^{2}}",
        "note": "点电荷场强。"
      },
      {
        "latex": "\\vec E_{\\mathrm{net}}=\\sum\\vec E_i",
        "note": "场强叠加原理。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电场」的工作方程或机制链。"
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
      "试探电荷足够小，不改变源电荷分布",
      "点电荷公式要求 r 远大于电荷尺度",
      "电场方向为正电荷受力方向"
    ],
    "keyPoints": [
      "掌握 8.2「电场」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电场」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电场」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\vec E=\\dfrac{\\vec F}{q_0}"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电场」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电场」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电场」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u8",
        "code": "8.1",
        "title": "电荷与力",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.3",
        "title": "电场叠加",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "electric-field",
        "title": "电场线与等势"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电场」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电场」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电场」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.3": {
    "id": "em/em-u8/8.3",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.3",
    "titleZh": "电场叠加",
    "titleEn": "Electric Field of Charge Distributions",
    "layer": "ap",
    "summary": "电场叠加 · Electric Field of Charge Distributions",
    "learningObjectives": [
      "能陈述「电场叠加」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Field of Charge Distributions：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电场叠加（Electric Field of Charge Distributions）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电场叠加」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r",
        "note": "连续电荷分布的场强微元。"
      },
      {
        "latex": "\\vec E=\\int\\mathrm{d}\\vec E",
        "note": "对整个分布积分求总场。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电场叠加」的工作方程或机制链。"
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
      "电荷连续分布；dq 为线/面/体电荷元",
      "r 为电荷元到场点距离，r̂ 从电荷元指向场点",
      "叠加原理；积分需按对称性分解分量"
    ],
    "keyPoints": [
      "掌握 8.3「电场叠加」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电场叠加」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电场叠加」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电场叠加」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电场叠加」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电场叠加」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u8",
        "code": "8.2",
        "title": "电场",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.4",
        "title": "电通量",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "electric-field",
        "title": "电场线与等势"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电场叠加」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电场叠加」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电场叠加」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.4": {
    "id": "em/em-u8/8.4",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.4",
    "titleZh": "电通量",
    "titleEn": "Electric Flux",
    "layer": "ap",
    "summary": "电通量 · Electric Flux",
    "learningObjectives": [
      "能陈述「电通量」的准确定义与适用对象",
      "能在符号、图像、数值三种表征间转换",
      "能完成一道计算/论证题并检查合理性"
    ],
    "essentialKnowledge": [
      "Electric Flux：准确陈述定义、适用范围与符号约定。",
      "能在符号、图像、数值与文字四种表征间转换，并指出等价关系。",
      "能完成推导或机制链条中的关键步骤，并说明每步依据的定律/定义。",
      "能识别常见误用：忽略假设、混淆瞬时与平均、矢量方向错误、单位不一致。",
      "能将该知识点与同一单元前后主题及跨单元联系（因果/推导/特例）。",
      "能画出对应的受力图/电路图/场示意图，并与方程一一对应。",
      "能做比例推理：某量加倍时目标量如何变化。"
    ],
    "definition": "电通量（Electric Flux）是本单元的核心知识点。要求：（1）准确定义；（2）掌握适用条件与理想化假设；（3）能在多种表征间转换；（4）能完成至少一道计算或论证并自检。",
    "intuition": "先确认物理/生物/数学设定与已知量，再调用「电通量」的核心关系，用特例、极限情形与单位/量纲做快速自检，最后对照图像或机制图。",
    "formulas": [
      {
        "latex": "\\Phi_E=\\int\\vec E\\cdot\\mathrm{d}\\vec A",
        "note": "电通量定义。"
      },
      {
        "latex": "\\Phi_E=EA\\cos\\theta",
        "note": "匀强场穿过平面。"
      }
    ],
    "derivationNotes": [
      {
        "from": "定义/公理/实验事实",
        "to": "核心关系",
        "note": "由定义出发建立「电通量」的工作方程或机制链。"
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
      "θ 为 E 与面法线的夹角",
      "闭合曲面取外法线；通量可正可负",
      "单位 N·m²/C"
    ],
    "keyPoints": [
      "掌握 8.4「电通量」准确定义",
      "四种表征互译（符号/图像/数值/文字）",
      "适用条件、反例与边界",
      "AP 简答：主张—证据—推理或完整推导",
      "与相邻知识点的联系"
    ],
    "misconceptions": [
      "在不满足假设时直接套用「电通量」的结论",
      "用斜线分式书写导致运算顺序歧义（应使用叠式分式）",
      "混淆符号含义或遗漏矢量方向/场方向",
      "把平均变化率当作瞬时变化率（或反之）",
      "忽略单位换算与有效数字",
      "受力图漏力；回路方向与方程符号不一致"
    ],
    "examples": [
      {
        "title": "例 1 · 易",
        "prompt": "写出「电通量」的定义，并列出至少两条适用条件或假设。",
        "solution": "定义需包含对象与关系；条件例如准静态、理想绝缘、连续可微、种群封闭等。不满足时说明修正。"
      },
      {
        "title": "例 2 · 中",
        "prompt": "从核心关系出发完成一次代入或机制推理，并检查特例。",
        "solution": "先写定律/定义，再代数或机制展开；用极端值验证符号与趋势。",
        "solutionLatex": "\\Phi_E=\\int\\vec E\\cdot\\mathrm{d}\\vec A"
      },
      {
        "title": "例 3 · 中",
        "prompt": "同时给出图像与数据表时，如何用「电通量」作答？指出瞬时量与平均量的区别。",
        "solution": "图像读斜率/面积/趋势；表格算差分商；符号写极限或定律；三者交叉验证。"
      },
      {
        "title": "例 4 · 难",
        "prompt": "指出学生在「电通量」中最易犯的两类错误，并给出纠正。",
        "solution": "不满足假设时套用「电通量」；用斜线分式代替叠式分式导致歧义"
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
        "chapterId": "em-u8",
        "code": "8.3",
        "title": "电场叠加",
        "relation": "prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律",
        "relation": "related"
      }
    ],
    "modules": [
      {
        "id": "gauss-law",
        "title": "高斯定律"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：本单元前置主题为后续推导提供定义或定律",
      "下游：本主题结论用于后续问题的建模",
      "跨学科：注意数学工具与科学情境的对应"
    ],
    "intuitionDetailed": "把「电通量」想成：在明确设定下，用最少的新假设连接已知量与目标量。先用生活/几何/特例建立图像，再上升到符号。",
    "development": [
      "回顾先修：确认符号、单位与「电通量」所需的前置定义已掌握。",
      "正式定义：用一句话写清对象与关系，并列出适用条件。",
      "推导/机制：从定义出发写出关键中间步骤（生物写因果链，数理写方程变换）。",
      "表征互译：同一结论用符号、图像、数值、文字各表达一次。",
      "迁移：换一个情境参数，重复一次完整推理。"
    ],
    "checks": [
      "不看书能否复述「电通量」的定义与两条适用条件？",
      "给定图像/表格，能否指出瞬时量与平均量的区别？",
      "若某假设不成立，结论哪一步失效？"
    ]
  },
  "8.5": {
    "id": "em/em-u8/8.5",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.5",
    "titleZh": "高斯定律",
    "titleEn": "Gauss's Law",
    "layer": "ap",
    "summary": "高斯定律把穿过任意闭合曲面的净电通量与该曲面所包围的净电荷联系起来：\\(\\Phi_E=\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)。对称性帮助求场，导体与绝缘体的电荷分布差异是重要应用。 · Gauss's law relates the net electric flux through any closed surface to the net charge it encloses: \\(\\Phi_E=\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\). Symmetry helps us find fields, and the different charge distributions in conductors and insulators are key applications.",
    "learningObjectives": [
      "能写出高斯定律，正确确定高斯面所包围的净电荷，并计算净电通量。 · State Gauss's law, correctly determine the net charge enclosed by a Gaussian surface, and calculate the net electric flux.",
      "能根据球对称、柱对称或平面对称选择合适的高斯面，把 \\(\\vec E\\) 提出积分号求场强。 · Choose an appropriate Gaussian surface for spherical, cylindrical, or planar symmetry and pull \\(\\vec E\\) out of the integral to find the field.",
      "能分析导体静电平衡、空腔感应电荷，并区分导体与绝缘体内部的电场和电荷分布。 · Analyze electrostatic equilibrium and induced cavity charge in conductors, and distinguish the internal fields and charge distributions of conductors and insulators."
    ],
    "essentialKnowledge": [
      "高斯定律：\\(\\Phi_E=\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)，其中 \\(Q_{\\mathrm{enc}}\\) 是闭合曲面内部的净电荷。 · Gauss's law: \\(\\Phi_E=\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\), where \\(Q_{\\mathrm{enc}}\\) is the net charge inside the closed surface.",
      "净通量只由曲面内部的净电荷决定；曲面外电荷对净通量的贡献为零，但仍会改变曲面上各点的局部电场。 · The net flux is determined only by the net charge inside the surface; charges outside contribute zero net flux but still change the local field at points on the surface.",
      "高斯定律对任意闭合曲面都成立，不要求对称性；对称性只是在求 \\(E\\) 时把 \\(\\vec E\\) 提出积分号的计算工具。 · Gauss's law holds for any closed surface and does not require symmetry; symmetry is only a calculational tool for pulling \\(\\vec E\\) out of the integral.",
      "球对称外部场等效于电荷集中在球心：\\(E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{r^{2}}\\)；无限长均匀带电直线 \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\)；无限大均匀带电平面 \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\)。 · A spherically symmetric exterior field is equivalent to all charge at the center, \\(E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{r^{2}}\\); an infinite uniform line has \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\); an infinite uniform plane has \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\).",
      "导体静电平衡时内部 \\(\\vec E=0\\)，净电荷分布在外表面；若导体有空腔，腔内电荷会在内表面感应出等量异号电荷，外表面电荷由导体总净电荷与腔内电荷共同决定。 · In electrostatic equilibrium a conductor has \\(\\vec E=0\\) inside and its net charge resides on the outer surface; if the conductor has a cavity, a charge inside induces an equal and opposite charge on the inner surface, while the outer surface charge is set by the conductor's total net charge together with the cavity charge.",
      "绝缘体中的电荷被束缚，静电平衡时多余电荷可以分布在内部和表面，内部电场也可以不为零；绝缘体不能像导体那样把内部场完全屏蔽。 · Charges in an insulator are bound, so in electrostatic equilibrium excess charge can be distributed throughout the interior as well as on the surface, and the internal field may be nonzero; an insulator cannot screen the interior field the way a conductor does.",
      "高斯面内的包围电荷可能由电荷密度积分得到：\\(Q_{\\mathrm{enc}}=\\int\\rho\\,\\mathrm{d}V\\)；当电荷只分布在部分区域时，积分限必须只覆盖该区域。 · The enclosed charge may come from integrating a charge density, \\(Q_{\\mathrm{enc}}=\\int\\rho\\,\\mathrm{d}V\\); when charge occupies only part of the region, the limits must cover only that region.",
      "电通量的单位是 \\(\\mathrm{N\\,m^{2}\\,C^{-1}}\\)；真空介电常数 \\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)。 · Electric flux has units \\(\\mathrm{N\\,m^{2}\\,C^{-1}}\\), and the vacuum permittivity is \\(\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)."
    ],
    "definition": "高斯定律指出：通过任意闭合曲面的净电通量等于该曲面所包围的净电荷除以真空介电常数，\\(\\Phi_E=\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)。它是麦克斯韦方程组之一，对任意闭合曲面都成立。闭合曲面的面积矢量取外法线；穿出为正、穿入为负。当电荷分布具有球对称、柱对称或平面对称时，可以选择与对称性匹配的高斯面，把 \\(\\vec E\\) 提出积分号，从而由 \\(Q_{\\mathrm{enc}}\\) 求场强。 · Gauss's law states that the net electric flux through any closed surface equals the net charge enclosed divided by the vacuum permittivity, \\(\\Phi_E=\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\). It is one of Maxwell's equations and holds for any closed surface. The area vector of a closed surface points along the outward normal; outward flux is positive and inward flux is negative. When the charge distribution has spherical, cylindrical, or planar symmetry, choose a Gaussian surface matching that symmetry, pull \\(\\vec E\\) out of the integral, and find the field from \\(Q_{\\mathrm{enc}}\\).",
    "intuition": "高斯定律像「数电通量账单」：不管闭合曲面多大、什么形状，只要里面包的净电荷相同，穿出去的净通量就相同；外面的电荷对净通量没有贡献。 · Gauss's law is like a “flux accounting rule”: no matter how large or what shape the closed surface is, the net outward flux is the same as long as the enclosed net charge is the same; charges outside do not contribute to the net flux.",
    "formulas": [
      {
        "latex": "\\Phi_E=\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}",
        "note": "高斯定律的积分形式。 · Integral form of Gauss's law."
      },
      {
        "latex": "E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{r^{2}}",
        "note": "球对称电荷外部（或点电荷）的电场。 · Field outside a spherically symmetric charge distribution (or of a point charge)."
      },
      {
        "latex": "E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}",
        "note": "无限长均匀带电直线的电场。 · Field of an infinite uniform line charge."
      },
      {
        "latex": "E=\\dfrac{\\sigma}{2\\varepsilon_0}",
        "note": "无限大均匀带电平面的电场。 · Field of an infinite uniform charged plane."
      },
      {
        "latex": "E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}",
        "note": "导体表面外侧的电场；方向垂直于表面。 · Field just outside a conductor surface; it is perpendicular to the surface."
      },
      {
        "latex": "Q_{\\mathrm{enc}}=\\int\\rho\\,\\mathrm{d}V",
        "note": "由体电荷密度求高斯面内的包围电荷。 · Enclosed charge from a volume charge density."
      }
    ],
    "derivationNotes": [
      {
        "from": "点电荷的库仑场 · Coulomb field of a point charge",
        "to": "球面通量 · Flux through a sphere",
        "note": "以点电荷为球心、半径 \\(r\\) 的球面上 \\(E\\) 处处相同且沿外法线，\\(\\Phi_E=E(4\\pi r^{2})=\\dfrac{q}{\\varepsilon_0}\\)。 · On a sphere of radius \\(r\\) centered on the charge, \\(E\\) is uniform and outward, so \\(\\Phi_E=E(4\\pi r^{2})=\\dfrac{q}{\\varepsilon_0}\\).",
      },
      {
        "from": "叠加原理 · Superposition",
        "to": "外部电荷净通量为零 · Zero net flux from outside charges",
        "note": "外部电荷的场线穿入闭合曲面后又穿出，净通量为零；因此只有内部净电荷出现在高斯定律右边。 · Field lines from an outside charge enter and then leave a closed surface, giving zero net flux; hence only the internal net charge appears on the right side of Gauss's law.",
      },
      {
        "from": "对称性 · Symmetry",
        "to": "提出 \\(E\\) · Pull out \\(E\\)",
        "note": "球对称取同心球面，柱对称取同轴圆柱面，平面对称取跨平面的柱形盒；在这些面上 \\(\\vec E\\cdot\\mathrm{d}\\vec A\\) 简化。 · Use a concentric sphere for spherical symmetry, a coaxial cylinder for cylindrical symmetry, and a pillbox crossing the plane for planar symmetry; on these surfaces \\(\\vec E\\cdot\\mathrm{d}\\vec A\\) simplifies.",
      },
      {
        "from": "导体静电平衡 · Conductor in electrostatic equilibrium",
        "to": "内部 \\(E=0\\)、电荷在外表面 · \\(E=0\\) inside, charge on the outer surface",
        "note": "若导体内部 \\(E\\neq0\\)，自由电荷会继续移动；平衡后内部无净电荷，净电荷只能分布在外表面。 · If \\(E\\neq0\\) inside a conductor, free charges would keep moving; after equilibrium there is no net charge inside, so net charge can reside only on the outer surface."
      }
    ],
    "conditions": [
      "高斯面必须是闭合曲面，面积矢量取外法线。 · The Gaussian surface must be closed, with area vectors along the outward normal.",
      "\\(Q_{\\mathrm{enc}}\\) 只计曲面内部的净电荷；外部电荷不计入净通量。 · \\(Q_{\\mathrm{enc}}\\) counts only the net charge inside the surface; outside charges do not contribute to the net flux.",
      "利用对称性把 \\(\\vec E\\) 提出积分号时，曲面上的 \\(\\vec E\\) 大小与方向必须具有相应对称性。 · To pull \\(\\vec E\\) out of the integral using symmetry, the magnitude and direction of \\(\\vec E\\) on the surface must have the corresponding symmetry.",
      "导体内部静电平衡时 \\(\\vec E=0\\)；绝缘体内部不一定为零，必须按实际电荷分布计算。 · A conductor in electrostatic equilibrium has \\(\\vec E=0\\) inside; an insulator's interior is not necessarily field-free and must be treated from its actual charge distribution.",
      "介质中需用介电常数；真空用 \\(\\varepsilon_0\\)，线性介质可用 \\(\\varepsilon\\) 代替。 · In a medium use the permittivity; use \\(\\varepsilon_0\\) in vacuum and \\(\\varepsilon\\) for a linear dielectric.",
      "高斯定律普遍成立，但只有在对称性足够时才能直接由它求出 \\(E\\) 的大小。 · Gauss's law is universally valid, but only sufficient symmetry lets us directly solve for the magnitude of \\(E\\)."
    ],
    "keyPoints": [
      "净通量只由内部净电荷决定；外部电荷对净通量无贡献。 · The net flux is determined only by the enclosed net charge; outside charges contribute no net flux.",
      "高斯定律对任意闭合曲面成立，不要求对称。 · Gauss's law holds for any closed surface and does not require symmetry.",
      "对称性用于求 \\(E\\)，不是高斯定律成立的前提。 · Symmetry is used to find \\(E\\), not required for Gauss's law to hold.",
      "球对称外部场等效于全部电荷集中在球心。 · A spherically symmetric exterior field is equivalent to all charge concentrated at the center.",
      "导体内部 \\(E=0\\)，净电荷在外表面；空腔内电荷会感应内表面异号电荷。 · A conductor has \\(E=0\\) inside, net charge on the outer surface, and induced opposite charge on a cavity's inner surface.",
      "绝缘体内部电场可以不为零，多余电荷可分布在内部和表面。 · An insulator's internal field may be nonzero, and excess charge can be distributed throughout its interior and surface.",
      "通量单位是 \\(\\mathrm{N\\,m^{2}\\,C^{-1}}\\)，计算时先确定 \\(Q_{\\mathrm{enc}}\\)。 · Flux has units \\(\\mathrm{N\\,m^{2}\\,C^{-1}}\\); determine \\(Q_{\\mathrm{enc}}\\) first."
    ],
    "misconceptions": [
      "认为高斯面上的 \\(E\\) 只由内部电荷产生；实际上 \\(E\\) 是所有电荷产生的总场，只是净通量由内部净电荷决定。 · Thinking \\(E\\) on the Gaussian surface is produced only by internal charge; \\(E\\) is the total field from all charges, while only the net flux is set by the enclosed net charge.",
      "认为曲面外电荷对通量有贡献；外部电荷的场线穿入又穿出，净通量为零。 · Thinking outside charges contribute to the flux; their field lines enter and leave, giving zero net flux.",
      "认为高斯定律只适用于对称分布；定律普遍成立，对称性只是求 \\(E\\) 的技巧。 · Thinking Gauss's law applies only to symmetric distributions; the law is general, and symmetry is only a technique for finding \\(E\\).",
      "把 \\(Q_{\\mathrm{enc}}\\) 与曲面上的电荷或整个系统的总电荷混淆。 · Confusing \\(Q_{\\mathrm{enc}}\\) with the charge on the surface or the total charge of the whole system.",
      "认为导体内部可以有净电荷；静电平衡时导体内部净电荷为零。 · Thinking a conductor can have net charge in its interior; in electrostatic equilibrium the interior net charge is zero.",
      "认为绝缘体内部 \\(E\\) 一定为零；绝缘体没有自由电荷来屏蔽内部场，\\(E\\) 可以不为零。 · Thinking an insulator must have \\(E=0\\) inside; without free charges to screen the field, an insulator's internal field may be nonzero.",
      "在 \\(r<R\\) 时把整个带电体的总电荷代入高斯定律；应只代入半径 \\(r\\) 以内的包围电荷。 · Substituting the total charge of the body into Gauss's law for \\(r<R\\); only the charge enclosed within radius \\(r\\) should be used."
    ],
    "examples": [
      {
        "title": "例 1 · 点电荷的净通量 · Example 1: Net flux from a point charge",
        "prompt": "\\(2.0\\,\\mathrm{\\mu C}\\) 的点电荷被一个任意形状的闭合曲面包围。求通过该曲面的净电通量。 · A \\(2.0\\,\\mathrm{\\mu C}\\) point charge is enclosed by a closed surface of arbitrary shape. Find the net electric flux through the surface.",
        "steps": [
          "\\(Q_{\\mathrm{enc}}=2.0\\times10^{-6}\\,\\mathrm{C}\\)。 · \\(Q_{\\mathrm{enc}}=2.0\\times10^{-6}\\,\\mathrm{C}\\).",
          "\\(\\Phi_E=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}=\\dfrac{2.0\\times10^{-6}}{8.85\\times10^{-12}}\\)。 · \\(\\Phi_E=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}=\\dfrac{2.0\\times10^{-6}}{8.85\\times10^{-12}}\\).",
          "\\(\\Phi_E\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。 · \\(\\Phi_E\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)."
        ],
        "solution": "\\(\\Phi_E\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)，与曲面形状无关。 · \\(\\Phi_E\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\), independent of the surface shape.",
        "solutionLatex": "\\Phi_E=\\dfrac{2.0\\times10^{-6}}{8.85\\times10^{-12}}\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}"
      },
      {
        "title": "例 2 · 球对称电荷的电场 · Example 2: Field of a spherically symmetric charge",
        "prompt": "\\(+1.0\\,\\mathrm{\\mu C}\\) 的点电荷位于半径 \\(0.30\\,\\mathrm{m}\\) 的球面中心。求球面上的电场大小与通过球面的通量。 · A \\(+1.0\\,\\mathrm{\\mu C}\\) point charge is at the center of a sphere of radius \\(0.30\\,\\mathrm{m}\\). Find the field magnitude on the sphere and the flux through it.",
        "steps": [
          "\\(E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{r^{2}}\\)。 · \\(E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{r^{2}}\\).",
          "\\(E=(8.99\\times10^{9})\\dfrac{1.0\\times10^{-6}}{(0.30)^{2}}\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E=(8.99\\times10^{9})\\dfrac{1.0\\times10^{-6}}{(0.30)^{2}}\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "\\(\\Phi_E=\\dfrac{Q}{\\varepsilon_0}=\\dfrac{1.0\\times10^{-6}}{8.85\\times10^{-12}}\\approx1.1\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。 · \\(\\Phi_E=\\dfrac{Q}{\\varepsilon_0}=\\dfrac{1.0\\times10^{-6}}{8.85\\times10^{-12}}\\approx1.1\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\).",
          "也可用 \\(\\Phi_E=E(4\\pi r^{2})\\) 验证。 · This can be checked with \\(\\Phi_E=E(4\\pi r^{2})\\)."
        ],
        "solution": "\\(E\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)，\\(\\Phi_E\\approx1.1\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。 · \\(E\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\) and \\(\\Phi_E\\approx1.1\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\).",
        "solutionLatex": "E\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}},\\qquad \\Phi_E\\approx1.1\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}"
      },
      {
        "title": "例 3 · 无限长线电荷 · Example 3: Infinite line charge",
        "prompt": "无限长均匀带电直线电荷密度为 \\(\\lambda=+3.0\\,\\mathrm{\\mu C\\,m^{-1}}\\)。求距直线 \\(0.20\\,\\mathrm{m}\\) 处的电场大小，并说明方向。 · An infinite uniform line has linear charge density \\(\\lambda=+3.0\\,\\mathrm{\\mu C\\,m^{-1}}\\). Find the field magnitude at \\(0.20\\,\\mathrm{m}\\) from the line and state its direction.",
        "steps": [
          "取同轴圆柱形高斯面，半径 \\(r\\)、长度 \\(L\\)。端面通量为零，侧面 \\(\\Phi_E=E(2\\pi rL)\\)。 · Choose a coaxial cylindrical Gaussian surface of radius \\(r\\) and length \\(L\\). The end caps have zero flux, and the curved side gives \\(\\Phi_E=E(2\\pi rL)\\).",
          "高斯定律：\\(E(2\\pi rL)=\\dfrac{\\lambda L}{\\varepsilon_0}\\)。 · Gauss's law: \\(E(2\\pi rL)=\\dfrac{\\lambda L}{\\varepsilon_0}\\).",
          "\\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}=\\dfrac{3.0\\times10^{-6}}{2\\pi(8.85\\times10^{-12})(0.20)}\\)。 · \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}=\\dfrac{3.0\\times10^{-6}}{2\\pi(8.85\\times10^{-12})(0.20)}\\).",
          "\\(E\\approx2.7\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)，方向沿径向向外。 · \\(E\\approx2.7\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\), directed radially outward."
        ],
        "solution": "\\(E\\approx2.7\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)，沿径向向外。 · \\(E\\approx2.7\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\), radially outward.",
        "solutionLatex": "E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\approx2.7\\times10^{5}\\,\\mathrm{N\\,C^{-1}}"
      },
      {
        "title": "例 4 · 导体空腔的感应电荷 · Example 4: Induced charge in a conducting cavity",
        "prompt": "一个带净电荷 \\(+5.0\\,\\mathrm{\\mu C}\\) 的导体球壳，空腔内放有 \\(+2.0\\,\\mathrm{\\mu C}\\) 的点电荷。求导体壳内表面与外表面的感应电荷。 · A conducting spherical shell with net charge \\(+5.0\\,\\mathrm{\\mu C}\\) has a \\(+2.0\\,\\mathrm{\\mu C}\\) point charge in its cavity. Find the induced charge on the inner and outer surfaces.",
        "steps": [
          "导体内部静电平衡时 \\(E=0\\)。 · In electrostatic equilibrium the conductor has \\(E=0\\) inside.",
          "取包围空腔、完全在导体内部的高斯面：内部净电荷必须为零，所以内表面感应出 \\(-2.0\\,\\mathrm{\\mu C}\\)。 · Take a Gaussian surface surrounding the cavity and lying entirely inside the conductor: the enclosed net charge must be zero, so the inner surface carries \\(-2.0\\,\\mathrm{\\mu C}\\).",
          "导体总净电荷为 \\(+5.0\\,\\mathrm{\\mu C}\\)，所以外表面电荷为 \\(+5.0-(-2.0)=+7.0\\,\\mathrm{\\mu C}\\)。 · The conductor's total net charge is \\(+5.0\\,\\mathrm{\\mu C}\\), so the outer surface carries \\(+5.0-(-2.0)=+7.0\\,\\mathrm{\\mu C}\\)."
        ],
        "solution": "内表面 \\(-2.0\\,\\mathrm{\\mu C}\\)，外表面 \\(+7.0\\,\\mathrm{\\mu C}\\)。 · Inner surface \\(-2.0\\,\\mathrm{\\mu C}\\), outer surface \\(+7.0\\,\\mathrm{\\mu C}\\).",
        "solutionLatex": "Q_{\\mathrm{inner}}=-2.0\\,\\mathrm{\\mu C},\\qquad Q_{\\mathrm{outer}}=+7.0\\,\\mathrm{\\mu C}"
      }
    ],
    "examTips": [
      "先判断对称性，再选高斯面；球对称用同心球面，柱对称用同轴圆柱面，平面对称用柱形盒。 · Determine the symmetry first, then choose the Gaussian surface: a concentric sphere for spherical symmetry, a coaxial cylinder for cylindrical symmetry, and a pillbox for planar symmetry.",
      "写高斯定律时明确标出 \\(Q_{\\mathrm{enc}}\\) 与高斯面，避免把外部电荷算进去。 · When writing Gauss's law, label \\(Q_{\\mathrm{enc}}\\) and the Gaussian surface clearly, and do not include outside charges.",
      "求导体内部场或感应电荷时，先令 \\(E=0\\)，再取合适的高斯面。 · To find the field inside a conductor or the induced charge, first set \\(E=0\\), then choose a suitable Gaussian surface.",
      "通量题先算 \\(\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)，不要被曲面形状干扰。 · For flux questions, compute \\(\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\) first and do not be distracted by the surface shape.",
      "遇到绝缘体不要默认内部 \\(E=0\\)；按实际电荷分布和 8.10、8.11 的方法处理。 · Do not assume \\(E=0\\) inside an insulator; use the actual charge distribution and the methods in 8.10 and 8.11."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.4",
        "title": "电通量 · Electric Flux",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.2",
        "title": "电场 · Electric Fields",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.10",
        "title": "绝缘体电荷与内部电场 · Charge and Fields inside Insulators",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.11",
        "title": "电荷密度与包围电荷积分 · Charge Density and Enclosed Charge",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "gauss-law",
        "title": "高斯定律 · Gauss's law"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：8.4 电通量给出通量定义，8.2 电场给出点电荷场。 · Upstream: 8.4 defines electric flux, and 8.2 gives the point-charge field.",
      "下游：高斯定律用于求球、柱、平面对称场，并进入 8.10 绝缘体、8.11 电荷密度积分和 9.2 电势。 · Downstream: Gauss's law finds fields with spherical, cylindrical, and planar symmetry and leads to 8.10 on insulators, 8.11 on charge-density integrals, and 9.2 on electric potential.",
      "应用：导体静电屏蔽、法拉第笼、电容器和同轴电缆都依赖高斯定律。 · Applications: electrostatic shielding, Faraday cages, capacitors, and coaxial cables all rely on Gauss's law.",
      "跨学科：高斯定律是麦克斯韦方程组之一，也是理解等离子体屏蔽和天体电场的基础。 · Cross-disciplinary: Gauss's law is one of Maxwell's equations and underpins plasma screening and astrophysical electric fields."
    ],
    "intuitionDetailed": "高斯定律中的 \\(\\vec E\\) 是所有电荷（包括曲面内外）产生的总电场，但只有曲面内部的净电荷决定净通量。这一点最容易混淆：曲面外的电荷可以改变曲面上每一点的场，却不会改变穿入又穿出的净通量。利用高斯定律求场强的关键是选取与对称性匹配的高斯面：球对称取同心球面，柱对称取同轴圆柱面，平面对称取跨平面的柱形盒。这样 \\(\\vec E\\) 在面上大小恒定、方向与面积矢量平行或垂直，积分才能化为简单的乘积。导体内部静电平衡时 \\(\\vec E=0\\)，净电荷分布在导体外表面；若导体有空腔，腔内电荷会在内表面感应出等量异号电荷。绝缘体则不同：电荷被束缚，不能自由重排，因此多余电荷可以留在内部，内部电场也可以不为零；这正是 8.10 的主题。 · In Gauss's law, \\(\\vec E\\) is the total field produced by all charges, both inside and outside the surface, but only the net charge inside determines the net flux. This is the most confusing point: charges outside the surface can change the field at each point on the surface, yet they do not change the net flux that enters and then leaves. The key to finding a field with Gauss's law is to choose a Gaussian surface matching the symmetry: a concentric sphere for spherical symmetry, a coaxial cylinder for cylindrical symmetry, and a pillbox crossing the plane for planar symmetry. Then \\(\\vec E\\) has constant magnitude on the surface and is either parallel or perpendicular to the area vector, so the integral reduces to a simple product. In electrostatic equilibrium a conductor has \\(\\vec E=0\\) inside and its net charge resides on the outer surface; if it has a cavity, a charge inside induces an equal and opposite charge on the inner surface. An insulator is different: its charges are bound and cannot rearrange freely, so excess charge can remain in the interior and the internal field may be nonzero; this is the subject of 8.10.",
    "development": [
      "从电通量定义和高斯定律的积分形式出发，明确 \\(Q_{\\mathrm{enc}}\\) 的含义。 · Start from the definition of electric flux and the integral form of Gauss's law, and clarify the meaning of \\(Q_{\\mathrm{enc}}\\).",
      "用点电荷和球面对称验证高斯定律，理解为什么通量与半径无关。 · Verify Gauss's law with a point charge and spherical symmetry, and understand why the flux is independent of radius.",
      "根据球、柱、平面对称选择高斯面，把 \\(\\vec E\\) 提出积分号。 · Choose Gaussian surfaces for spherical, cylindrical, and planar symmetry, and pull \\(\\vec E\\) out of the integral.",
      "用导体内部 \\(E=0\\) 分析表面电荷与空腔感应电荷。 · Use \\(E=0\\) inside a conductor to analyze surface charge and cavity-induced charge.",
      "对比导体与绝缘体，并把包围电荷写成电荷密度积分（8.10、8.11）。 · Contrast conductors and insulators, and write the enclosed charge as a charge-density integral (8.10 and 8.11)."
    ],
    "checks": [
      "高斯面上的电场由哪些电荷产生？净通量又由哪些电荷决定？ · Which charges produce the field on a Gaussian surface, and which charges determine the net flux?",
      "为什么高斯定律求场强时常要求对称性？ · Why does using Gauss's law to find a field often require symmetry?",
      "导体空腔内外表面的感应电荷如何分配？ · How is induced charge distributed on the inner and outer surfaces of a conducting cavity?",
      "绝缘体内部 \\(E\\) 一定为零吗？举例说明。 · Is \\(E\\) always zero inside an insulator? Give an example.",
      "当 \\(r<R\\) 时，高斯定律右边的 \\(Q_{\\mathrm{enc}}\\) 应该用总电荷还是部分电荷？ · For \\(r<R\\), should the \\(Q_{\\mathrm{enc}}\\) on the right side of Gauss's law be the total charge or only part of it?"
    ],
    "vocabulary": [
      {
        "termZh": "电通量",
        "termEn": "electric flux",
        "defZh": "电场穿过曲面的量，\\(\\Phi_E=\\int\\vec E\\cdot\\mathrm{d}\\vec A\\)，是标量，可正可负。",
        "defEn": "A measure of the electric field passing through a surface, \\(\\Phi_E=\\int\\vec E\\cdot\\mathrm{d}\\vec A\\); it is a scalar that can be positive or negative."
      },
      {
        "termZh": "高斯面",
        "termEn": "Gaussian surface",
        "defZh": "为应用高斯定律而选取的闭合曲面，面积矢量取外法线。",
        "defEn": "A closed surface chosen to apply Gauss's law, with area vectors along the outward normal."
      },
      {
        "termZh": "包围电荷",
        "termEn": "enclosed charge",
        "defZh": "闭合曲面内部的净电荷 \\(Q_{\\mathrm{enc}}\\)，决定净电通量。",
        "defEn": "The net charge \\(Q_{\\mathrm{enc}}\\) inside a closed surface, which determines the net electric flux."
      },
      {
        "termZh": "对称性",
        "termEn": "symmetry",
        "defZh": "电荷分布具有球、柱或平面对称性时，可选取匹配的高斯面把 \\(\\vec E\\) 提出积分号。",
        "defEn": "When a charge distribution has spherical, cylindrical, or planar symmetry, a matching Gaussian surface lets \\(\\vec E\\) be pulled out of the integral."
      },
      {
        "termZh": "静电平衡",
        "termEn": "electrostatic equilibrium",
        "defZh": "电荷不再发生宏观定向移动的状态；导体内部 \\(E=0\\)，绝缘体内部可以不为零。",
        "defEn": "A state in which charge has no macroscopic directed motion; a conductor has \\(E=0\\) inside, while an insulator's interior field may be nonzero."
      },
      {
        "termZh": "导体",
        "termEn": "conductor",
        "defZh": "含有可自由移动电荷的材料；静电平衡时内部 \\(E=0\\)，净电荷分布在外表面。",
        "defEn": "A material with freely moving charges; in electrostatic equilibrium \\(E=0\\) inside and net charge resides on the outer surface."
      },
      {
        "termZh": "绝缘体",
        "termEn": "insulator",
        "defZh": "电荷不能在宏观尺度自由移动的材料；多余电荷可分布在内部和表面，内部电场可以不为零。",
        "defEn": "A material in which charge cannot move freely on macroscopic scales; excess charge can be distributed in the interior and on the surface, and the internal field may be nonzero."
      }
    ]
  },
  "8.6": {
    "id": "em/em-u8/8.6",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.6",
    "titleZh": "电荷性质与电荷守恒",
    "titleEn": "Properties and Conservation of Charge",
    "layer": "ap",
    "summary": "电荷是物质的一种基本属性：一切物质由带正电的质子、带负电的电子和中性粒子组成，电荷不是外加的「流体」，而是粒子本身的属性。电荷只有正、负两种，同种相斥、异种相吸；中性物体只是正负电荷代数和为零。电荷量量子化为 \\(q=ne\\)，孤立系统的总电荷守恒，摩擦起电、接触起电和感应起电都只是电荷的转移或重新分布；系统的净电荷只有在电荷跨过系统边界时才会改变，而其他带电体的存在可使系统内电荷重新分布，甚至在中性系统中发生感应分离。两个带电体之间的电力由库仑定律描述，其大小与电荷量乘积成正比、与距离平方成反比，因此可用比例推理预测电荷或距离改变后的新力值。 · Electric charge is a fundamental property of matter: all matter is made of positively charged protons and negatively charged electrons, and charge is not an added “fluid” but a property of the particles themselves. Charge comes in only two signs; like charges repel and opposite charges attract, and a neutral object simply has zero algebraic sum of positive and negative charge. Charge is quantized as \\(q=ne\\), and the total charge of an isolated system is conserved: charging by friction, contact, or induction only transfers or redistributes charge. A system's net charge changes only when charge crosses its boundary, while the presence of another charged system can redistribute charge within it, producing induced charge separation even in a neutral system. The electric force between two charged objects is described by Coulomb's law, proportional to the product of the charges and inversely proportional to the square of the distance, so proportional reasoning predicts the new force when charges or separation change.",
    "learningObjectives": [
      "能说明电荷是物质的基本属性，区分「带电」与「中性」，并解释中性物体内部仍有大量正负电荷。 · Explain that charge is a fundamental property of matter, distinguish “charged” from “neutral,” and explain that a neutral object still contains enormous positive and negative charge.",
      "能用 \\(q=ne\\) 计算元电荷数，并用电荷守恒分析摩擦起电、接触起电、感应起电和粒子反应中的电荷转移。 · Use \\(q=ne\\) to count elementary charges and apply conservation of charge to friction, contact, induction, and particle reactions.",
      "能用库仑定律 \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\) 及比例关系预测电荷量或距离改变时电力的大小与方向变化，并说明电力是带电体之间的相互作用。 · Use Coulomb's law \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\) and ratio reasoning to predict changes in magnitude and direction when charges or separation change, and explain that the electric force is an interaction between charged objects.",
      "能区分导体与绝缘体的起电机制，并用系统边界说明净电荷改变只能来自跨边界的电荷转移。 · Distinguish charging mechanisms in conductors and insulators, and use the system boundary to explain that a net-charge change requires charge transfer across that boundary."
    ],
    "essentialKnowledge": [
      "电荷是物质的基本属性：物质由带正电的质子、带负电的电子和中性粒子组成；电荷描述粒子参与电磁相互作用的性质，是粒子本身的属性，不是可以独立盛放或添加的「流体」。 · Charge is a fundamental property of matter: matter consists of positively charged protons, negatively charged electrons, and neutral particles; charge describes a particle's property of participating in electromagnetic interactions. It is a property of the particle itself, not a separable “fluid” that can be stored or added independently.",
      "电荷只有正、负两种；同种电荷相斥，异种电荷相吸，力沿两电荷的连线。中性物体正负电荷的代数和为零，但内部仍含有大量正负电荷。 · There are only two signs of charge; like charges repel and opposite charges attract, with the force along the line joining them. A neutral object has zero algebraic sum of positive and negative charge but still contains enormous amounts of both.",
      "电荷量子化：任何可观测的电荷量都是基本电荷 \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\) 的整数倍，\\(q=ne\\)，其中 \\(n\\) 为整数；宏观带电体的 \\(n\\) 极大。 · Charge is quantized: every observable charge is an integer multiple of the elementary charge \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\), \\(q=ne\\) with integer \\(n\\); a macroscopic charged body has an enormous \\(n\\).",
      "电荷守恒：孤立系统的总电荷保持不变。摩擦起电是电子从一个物体转移到另一个物体；接触起电是电荷在导体间重新分配；感应起电是电荷在物体内部重新分布，三者都没有创造或消灭净电荷。 · Charge is conserved: the total charge of an isolated system remains constant. Charging by friction transfers electrons from one object to another; charging by contact redistributes charge between conductors; charging by induction redistributes charge within an object—none of these creates or destroys net charge.",
      "在粒子反应中，电荷也按代数和守恒：例如高能光子在原子核附近产生一对正负电子时，反应前总电荷为零，反应后 \\((+e)+(-e)=0\\)。 · Charge is also conserved algebraically in particle reactions: for example, when a high-energy photon near a nucleus produces an electron–positron pair, the total charge is zero before and \\((+e)+(-e)=0\\) after.",
      "两个带电体之间的电力由库仑定律给出：\\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\)，方向沿连线；两个电荷受到等大反向的力，符合牛顿第三定律。 · The electric force between two charged objects is given by Coulomb's law, \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\), directed along the line joining them; the two charges feel equal and opposite forces, consistent with Newton's third law.",
      "库仑定律的函数依赖可用于比例推理：\\(F\\propto\\dfrac{|q_1q_2|}{r^{2}}\\)。若 \\(q_1\\) 变为 \\(a\\) 倍、\\(q_2\\) 变为 \\(b\\) 倍、\\(r\\) 变为 \\(c\\) 倍，则 \\(F\\) 变为 \\(\\dfrac{ab}{c^{2}}\\) 倍。 · The functional dependence of Coulomb's law supports ratio reasoning: \\(F\\propto\\dfrac{|q_1q_2|}{r^{2}}\\). If \\(q_1\\) becomes \\(a\\) times, \\(q_2\\) becomes \\(b\\) times, and \\(r\\) becomes \\(c\\) times, then \\(F\\) becomes \\(\\dfrac{ab}{c^{2}}\\) times its original value.",
      "对由多个带电体组成的系统，系统内各电荷对目标电荷的电力按矢量叠加；对球对称带电体，外部电场等效于全部电荷集中在球心。 · For a system of several charged objects, the electric forces from the individual charges on a target charge add as vectors; outside a spherically symmetric charged body, the field is equivalent to all charge concentrated at its center.",
      "系统的净电荷或电荷分布会因其他系统的存在或变化而改变：摩擦或接触可使电荷在系统间转移；带电体靠近可使系统内电荷重新分布，发生感应分离（极化），即使系统整体中性也可以发生。 · A system's net charge or charge distribution can change in response to the presence or changes of other systems: friction or contact can transfer charge between systems, and a nearby charged object can redistribute charge within a system, producing induced charge separation (polarization) even when the system is neutral overall.",
      "系统净电荷的任何改变都来自电荷跨越系统边界的转移；起电通常涉及电子的转移：系统得到电子带负电，失去电子带正电。若没有电荷跨过边界，系统的净电荷保持不变。 · Any change in a system's net charge comes from charge crossing the system boundary; charging typically transfers electrons: a system that gains electrons becomes negative and one that loses electrons becomes positive. If no charge crosses the boundary, the net charge stays constant.",
      "导体与绝缘体的起电机制不同：导体中的自由电荷可以宏观迁移，接触或感应可使电荷重新分布到表面；绝缘体中的电荷被束缚，摩擦或接触后主要留在局部，难以自由转移。 · Charging mechanisms differ between conductors and insulators: free charge in a conductor can migrate macroscopically, so contact or induction can redistribute charge onto the surface; charge in an insulator is bound, so after friction or contact it stays localized and cannot move freely."
    ],
    "definition": "电荷是物质的一种基本属性，分为正电荷与负电荷；同种相斥、异种相吸。电荷量是量子化的，\\(q=ne\\)，且孤立系统的总电荷守恒。带电体之间的相互作用表现为电力：真空中两个静止点电荷之间的力由库仑定律给出，\\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\)，方向沿连线；同号相斥、异号相吸。电荷守恒并不意味着电荷不能移动：摩擦、接触和感应都可使电荷在物体之间或物体内部转移，但孤立系统的电荷代数和保持不变。 · Electric charge is a fundamental property of matter, occurring as positive or negative; like charges repel and opposite charges attract. Charge is quantized, \\(q=ne\\), and the total charge of an isolated system is conserved. The interaction between charged objects appears as an electric force: in vacuum the force between two stationary point charges is given by Coulomb's law, \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\), directed along the line joining them, with like signs repelling and opposite signs attracting. Conservation of charge does not mean charge cannot move: friction, contact, and induction can transfer charge between objects or redistribute it within an object, but the algebraic sum for an isolated system stays constant.",
    "intuition": "把电荷想成粒子的「电磁标签」：质子天生带正标签，电子天生带负标签，物体带电只是正负标签没有完全配对。摩擦起电不是「制造」电荷，而是把电子从一个物体搬到另一个物体；因此一个物体得到多少负电荷，另一个就失去多少负电荷。中性也不是「没有电荷」，而是正负标签数量相等。库仑力像一条「按标签强弱和距离平方缩放」的相互作用：电荷乘积越大，力越强；距离越远，力按平方迅速减小。 · Think of charge as a particle's “electromagnetic label”: protons carry a positive label and electrons a negative one, and a charged object simply has an imbalance of labels. Rubbing does not “create” charge; it moves electrons from one object to another, so whatever negative charge one object gains, the other loses. Neutral does not mean “no charge” but equal numbers of positive and negative labels. The Coulomb force is an interaction “scaled by the charge product and the square of the distance”: a larger charge product gives a stronger force, and a larger separation makes the force fall off rapidly as the square.",
    "formulas": [
      {
        "latex": "q=ne",
        "note": "电荷量子化；\\(e\\) 为基本电荷，\\(n\\) 为整数。 · Charge quantization; \\(e\\) is the elementary charge and \\(n\\) is an integer."
      },
      {
        "latex": "e=1.60\\times10^{-19}\\,\\mathrm{C}",
        "note": "基本电荷的大小，等于一个电子或质子所带电荷量的绝对值。 · Magnitude of the elementary charge, equal to the absolute charge of one electron or proton."
      },
      {
        "latex": "F=k\\dfrac{|q_1q_2|}{r^{2}}",
        "note": "库仑定律：真空中两个点电荷间的作用力大小。 · Coulomb's law: the magnitude of the force between two point charges in vacuum."
      },
      {
        "latex": "k=\\dfrac{1}{4\\pi\\varepsilon_0}\\approx8.99\\times10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}",
        "note": "库仑常数与真空介电常数的关系。 · Relation between Coulomb's constant and the vacuum permittivity."
      },
      {
        "latex": "F\\propto\\dfrac{|q_1q_2|}{r^{2}}",
        "note": "比例关系：电荷量乘积加倍则力加倍，距离加倍则力变为四分之一。 · Proportionality: doubling the charge product doubles the force, while doubling the distance makes the force one quarter."
      },
      {
        "latex": "F_{\\mathrm{new}}=F_{0}\\dfrac{a b}{c^{2}}",
        "note": "若两个电荷分别变为 \\(a\\)、\\(b\\) 倍，距离变为 \\(c\\) 倍，则新力等于原力乘以 \\(\\dfrac{ab}{c^{2}}\\)。 · If the two charges become \\(a\\) and \\(b\\) times their original values and the distance becomes \\(c\\) times, the new force is the original force times \\(\\dfrac{ab}{c^{2}}\\)."
      },
      {
        "latex": "\\vec F_{\\mathrm{net}}=\\sum_i\\vec F_i",
        "note": "多个电荷对同一电荷的作用力按矢量叠加。 · Forces from several charges on one charge add as vectors."
      },
      {
        "latex": "\\vec F_{12}=-\\vec F_{21}",
        "note": "两个电荷之间的作用力等大反向，符合牛顿第三定律。 · The forces two charges exert on each other are equal and opposite, consistent with Newton's third law."
      }
    ],
    "derivationNotes": [
      {
        "from": "实验事实 · Experimental fact",
        "to": "库仑定律 · Coulomb's law",
        "note": "扭秤实验表明：力与两电荷量的乘积成正比，与距离平方成反比，方向沿连线。 · Torsion-balance experiments show that the force is proportional to the product of the two charges, inversely proportional to the square of the distance, and directed along the line joining them."
      },
      {
        "from": "电荷的离散性 · Discrete nature of charge",
        "to": "电荷量子化 · Charge quantization",
        "note": "密立根油滴实验等表明，油滴电荷总是 \\(e\\) 的整数倍，因此可观测电荷量满足 \\(q=ne\\)。 · Millikan's oil-drop experiment and related evidence show that droplet charges are always integer multiples of \\(e\\), so observable charge satisfies \\(q=ne\\)."
      },
      {
        "from": "起电实验 · Charging experiments",
        "to": "电荷守恒 · Conservation of charge",
        "note": "摩擦后两物体带等量异号电荷，接触后电荷重新分配，但把参与过程的物体都包括在内时，总电荷不变。 · After rubbing, two objects carry equal and opposite charge; after contact, charge is redistributed, but the total charge stays constant when all objects involved are included."
      },
      {
        "from": "比例关系 · Proportionality",
        "to": "新力值 · New force value",
        "note": "由 \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\)，若 \\(q_1'=a q_1\\)、\\(q_2'=b q_2\\)、\\(r'=c r\\)，则 \\(F'=F\\dfrac{ab}{c^{2}}\\)；比例推理不需要重复代入常数 \\(k\\)。 · From \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\), if \\(q_1'=a q_1\\), \\(q_2'=b q_2\\), and \\(r'=c r\\), then \\(F'=F\\dfrac{ab}{c^{2}}\\); ratio reasoning avoids re-substituting the constant \\(k\\)."
      },
      {
        "from": "相互作用 · Interaction",
        "to": "牛顿第三定律 · Newton's third law",
        "note": "电荷之间的力是相互的：\\(q_1\\) 对 \\(q_2\\) 的力与 \\(q_2\\) 对 \\(q_1\\) 的力等大反向，与两电荷的大小是否相同无关。 · The force between charges is mutual: the force of \\(q_1\\) on \\(q_2\\) and that of \\(q_2\\) on \\(q_1\\) are equal in magnitude and opposite in direction, regardless of whether the charges have equal magnitude."
      }
    ],
    "conditions": [
      "库仑定律适用于点电荷，或球对称分布电荷的外部；\\(r\\) 应远大于带电体自身尺度。 · Coulomb's law applies to point charges or outside a spherically symmetric charge distribution; \\(r\\) must be much larger than the size of each charged body.",
      "库仑定律在真空中形式最简单；在空气中也近似成立，在介质中需用介电常数。 · Coulomb's law is simplest in vacuum; it also holds approximately in air, and in a medium the permittivity must be used.",
      "电荷静止或速度远小于光速；运动电荷还会产生磁场和磁力。 · Charges are at rest or moving much slower than light; moving charges also produce magnetic fields and magnetic forces.",
      "电荷守恒只适用于孤立系统；若系统与外界有电荷交换，必须把交换的电荷计入总账。 · Conservation of charge applies to an isolated system; if charge crosses the system boundary, the exchanged charge must be included in the accounting.",
      "电荷量子化针对可观测的电荷量；夸克带分数电荷，但不能被单独观测到。 · Quantization applies to observable charge; quarks carry fractional charge but are never observed in isolation.",
      "中性物体的净电荷为零，但仍可能因极化而受到带电体的吸引；净电荷为零不等于不受电力。 · A neutral object has zero net charge but can still be attracted by a charged body because of polarization; zero net charge does not mean zero electric force.",
      "用库仑定律计算大小时代入电荷量的绝对值，方向由电荷符号另行判断。 · Use absolute values of charge when calculating the magnitude with Coulomb's law, and determine direction separately from the signs."
    ],
    "keyPoints": [
      "电荷是物质的基本属性；物质由带正电的质子、带负电的电子和中性粒子组成。 · Charge is a fundamental property of matter; matter consists of positive protons, negative electrons, and neutral particles.",
      "电荷只有正、负两种；同种相斥、异种相吸，力沿两电荷连线。 · There are only two signs of charge; like charges repel and opposite charges attract, with the force along the line joining them.",
      "中性表示正负电荷代数和为零，不表示物体内部没有电荷。 · Neutral means the algebraic sum of positive and negative charge is zero, not that the object contains no charge.",
      "电荷量子化：\\(q=ne\\)，\\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\)。 · Charge is quantized: \\(q=ne\\), with \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\).",
      "电荷守恒：孤立系统的总电荷不变；摩擦、接触、感应起电只是电荷转移或重新分布。 · Charge is conserved: the total charge of an isolated system is constant; friction, contact, and induction only transfer or redistribute charge.",
      "库仑力大小 \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\)，与电荷量乘积成正比、与距离平方成反比。 · The Coulomb force has magnitude \\(F=k\\dfrac{|q_1q_2|}{r^{2}}\\), proportional to the charge product and inversely proportional to the square of the distance.",
      "比例推理：\\(q_1\\)、\\(q_2\\)、\\(r\\) 分别变为 \\(a\\)、\\(b\\)、\\(c\\) 倍时，\\(F\\) 变为 \\(\\dfrac{ab}{c^{2}}\\) 倍。 · Ratio reasoning: when \\(q_1\\), \\(q_2\\), and \\(r\\) become \\(a\\), \\(b\\), and \\(c\\) times their original values, \\(F\\) becomes \\(\\dfrac{ab}{c^{2}}\\) times its original value.",
      "两个电荷之间的力等大反向；多个电荷对同一电荷的力按矢量叠加。 · The forces between two charges are equal and opposite; forces from several charges on one charge add as vectors."
    ],
    "misconceptions": [
      "认为摩擦起电创造了电荷；实际上只是电子从一个物体转移到另一个物体，总电荷守恒。 · Thinking rubbing creates charge; it only transfers electrons from one object to another, and the total charge is conserved.",
      "认为中性物体内部没有电荷；中性只表示正负电荷的代数和为零。 · Thinking a neutral object contains no charge; neutrality only means the algebraic sum of positive and negative charge is zero.",
      "认为电荷量可以取任意连续值；可观测电荷是基本电荷的整数倍。 · Thinking charge can take any continuous value; observable charge is an integer multiple of the elementary charge.",
      "认为电荷是一种可以独立添加的「流体」；电荷是粒子本身的属性，与粒子不可分割。 · Thinking charge is a “fluid” that can be added independently; charge is a property of the particle itself and cannot be separated from it.",
      "认为两个电荷中电荷量大的一个施加的力更大；两个电荷受到的力大小相等、方向相反。 · Thinking the charge with the larger magnitude exerts a larger force; the two charges feel forces equal in magnitude and opposite in direction.",
      "认为距离加倍时力减半；平方反比意味着距离加倍时力变为四分之一。 · Thinking doubling the distance halves the force; the inverse-square law makes the force one quarter.",
      "认为净电荷为零的物体一定不受电力；中性物体可以被带电体极化，从而受到吸引力。 · Thinking an object with zero net charge cannot feel an electric force; a neutral object can be polarized by a charged body and attracted.",
      "认为电荷守恒意味着电荷不能移动；电荷可以在物体之间或物体内部转移，只是孤立系统的总电荷不变。 · Thinking conservation of charge means charge cannot move; charge can transfer between objects or within an object, while the total charge of an isolated system stays constant."
    ],
    "examples": [
      {
        "title": "例 1 · 电荷是物质的基本属性 · Example 1: Charge as a property of matter",
        "prompt": "一块铜块整体电中性。它内部是否含有电荷？「中性」是否等于「没有电荷」？ · A copper block is electrically neutral overall. Does it contain charge inside? Does “neutral” mean “no charge”?",
        "steps": [
          "铜原子由带正电的原子核和带负电的电子组成，因此铜块内部有大量正电荷和负电荷。 · Copper atoms consist of positively charged nuclei and negatively charged electrons, so the block contains enormous amounts of positive and negative charge.",
          "整体电中性表示正电荷总量与负电荷总量相等，代数和为零，而不是内部没有电荷。 · Overall neutrality means the total positive charge equals the total negative charge, so the algebraic sum is zero—not that there is no charge inside.",
          "当铜块与其他物体接触时，表面原子间的电磁相互作用产生支持力、摩擦力等宏观接触力。 · When the block touches another object, electromagnetic interactions between surface atoms produce macroscopic contact forces such as normal force and friction."
        ],
        "solution": "铜块内部有大量正负电荷；中性只表示正负电荷代数和为零。 · The copper block contains enormous positive and negative charge; neutral only means their algebraic sum is zero.",
        "solutionLatex": "Q_{\\mathrm{net}}=\\sum_i q_i=0"
      },
      {
        "title": "例 2 · 电荷量子化与电子数 · Example 2: Charge quantization and counting electrons",
        "prompt": "一个物体带电荷量 \\(q=-4.8\\,\\mathrm{\\mu C}\\)。它比中性状态多了多少个电子？ · An object has charge \\(q=-4.8\\,\\mathrm{\\mu C}\\). How many extra electrons does it have compared with its neutral state?",
        "steps": [
          "每个电子带电荷 \\(-e=-1.60\\times10^{-19}\\,\\mathrm{C}\\)。 · Each electron carries charge \\(-e=-1.60\\times10^{-19}\\,\\mathrm{C}\\).",
          "电子数 \\(n=\\dfrac{|q|}{e}=\\dfrac{4.8\\times10^{-6}}{1.60\\times10^{-19}}\\)。 · Number of electrons: \\(n=\\dfrac{|q|}{e}=\\dfrac{4.8\\times10^{-6}}{1.60\\times10^{-19}}\\).",
          "\\(n=3.0\\times10^{13}\\)，是整数，符合电荷量子化。 · \\(n=3.0\\times10^{13}\\), an integer, consistent with charge quantization."
        ],
        "solution": "约 \\(3.0\\times10^{13}\\) 个额外电子。 · About \\(3.0\\times10^{13}\\) extra electrons.",
        "solutionLatex": "n=\\dfrac{|q|}{e}=\\dfrac{4.8\\times10^{-6}}{1.60\\times10^{-19}}=3.0\\times10^{13}"
      },
      {
        "title": "例 3 · 接触起电与电荷守恒 · Example 3: Charging by contact and conservation of charge",
        "prompt": "两个相同的导体小球，一个带 \\(+8.0\\,\\mathrm{\\mu C}\\)，另一个带 \\(-2.0\\,\\mathrm{\\mu C}\\)。让它们接触后再分开，求每个小球的电荷量。 · Two identical conducting spheres carry \\(+8.0\\,\\mathrm{\\mu C}\\) and \\(-2.0\\,\\mathrm{\\mu C}\\). They touch and then separate. Find the charge on each sphere.",
        "steps": [
          "把两个小球作为一个孤立系统，总电荷守恒：\\(Q_{\\mathrm{total}}=+8.0-2.0=+6.0\\,\\mathrm{\\mu C}\\)。 · Treat the two spheres as one isolated system; total charge is conserved: \\(Q_{\\mathrm{total}}=+8.0-2.0=+6.0\\,\\mathrm{\\mu C}\\).",
          "两个小球完全相同，接触后电荷平均分配。 · The spheres are identical, so after contact the charge is shared equally.",
          "每个小球带 \\(\\dfrac{+6.0}{2}=+3.0\\,\\mathrm{\\mu C}\\)。 · Each sphere carries \\(\\dfrac{+6.0}{2}=+3.0\\,\\mathrm{\\mu C}\\)."
        ],
        "solution": "每个小球带 \\(+3.0\\,\\mathrm{\\mu C}\\)，总电荷仍为 \\(+6.0\\,\\mathrm{\\mu C}\\)。 · Each sphere carries \\(+3.0\\,\\mathrm{\\mu C}\\), and the total charge remains \\(+6.0\\,\\mathrm{\\mu C}\\).",
        "solutionLatex": "Q_{\\mathrm{each}}=\\dfrac{+8.0\\,\\mathrm{\\mu C}+(-2.0\\,\\mathrm{\\mu C})}{2}=+3.0\\,\\mathrm{\\mu C}"
      },
      {
        "title": "例 4 · 库仑力的比例推理 · Example 4: Ratio reasoning with Coulomb's law",
        "prompt": "两个点电荷之间的库仑力为 \\(0.40\\,\\mathrm{N}\\)。若一个电荷量变为原来的 \\(2\\) 倍，另一个变为原来的 \\(3\\) 倍，距离变为原来的 \\(2\\) 倍，求新的力。 · The Coulomb force between two point charges is \\(0.40\\,\\mathrm{N}\\). If one charge becomes \\(2\\) times its original value, the other becomes \\(3\\) times, and the distance becomes \\(2\\) times, find the new force.",
        "steps": [
          "由 \\(F\\propto\\dfrac{|q_1q_2|}{r^{2}}\\)，写出比例因子 \\(\\dfrac{ab}{c^{2}}\\)。 · From \\(F\\propto\\dfrac{|q_1q_2|}{r^{2}}\\), write the factor \\(\\dfrac{ab}{c^{2}}\\).",
          "代入 \\(a=2\\)、\\(b=3\\)、\\(c=2\\)：因子为 \\(\\dfrac{(2)(3)}{2^{2}}=\\dfrac{6}{4}=1.5\\)。 · Substitute \\(a=2\\), \\(b=3\\), and \\(c=2\\): the factor is \\(\\dfrac{(2)(3)}{2^{2}}=\\dfrac{6}{4}=1.5\\).",
          "新力 \\(F'=0.40\\times1.5=0.60\\,\\mathrm{N}\\)。 · The new force is \\(F'=0.40\\times1.5=0.60\\,\\mathrm{N}\\)."
        ],
        "solution": "新的力为 \\(0.60\\,\\mathrm{N}\\)。 · The new force is \\(0.60\\,\\mathrm{N}\\).",
        "solutionLatex": "F'=F\\dfrac{ab}{c^{2}}=0.40\\dfrac{(2)(3)}{2^{2}}=0.60\\,\\mathrm{N}"
      },
      {
        "title": "例 5 · 中性物体的极化吸引 · Example 5: Polarization attraction of a neutral object",
        "prompt": "用毛皮摩擦过的气球带负电，能吸引电中性的墙壁。电荷守恒在这里如何体现？墙壁不带电为什么还会被吸引？ · A balloon rubbed with fur becomes negatively charged and attracts a neutral wall. How is charge conservation reflected here, and why is the neutral wall attracted?",
        "steps": [
          "摩擦使电子从毛皮转移到气球，气球得到多少负电荷，毛皮就失去多少电子；把气球和毛皮作为系统，总电荷不变。 · Rubbing transfers electrons from the fur to the balloon; the balloon gains exactly the negative charge the fur loses, so the total charge of the balloon–fur system is unchanged.",
          "墙壁整体中性，但气球靠近时，墙内电子云被排斥、正电荷中心被吸引，发生极化，使靠近气球的一侧出现正电荷。 · The wall is neutral overall, but when the balloon approaches, its electron clouds are repelled and its positive charge centers are attracted, producing polarization and a positive charge on the near side.",
          "气球与墙壁近侧的正电荷之间的吸引力大于与远侧负电荷之间的排斥力，因此净力表现为吸引。 · The attraction between the balloon and the positive near-side charge is stronger than the repulsion from the distant negative charge, so the net force is attractive."
        ],
        "solution": "摩擦只是转移电子，总电荷守恒；中性墙壁被极化后受到净吸引力。 · Rubbing only transfers electrons, so total charge is conserved; the neutral wall is polarized and then feels a net attractive force.",
        "solutionLatex": "Q_{\\mathrm{balloon}}+Q_{\\mathrm{fur}}=\\mathrm{constant}"
      },
      {
        "title": "例 6 · 中性导体的感应分离与系统边界 · Example 6: Induced charge separation in a neutral conductor and the system boundary",
        "prompt": "一个中性导体球放在绝缘支架上。把带正电的玻璃棒靠近但不接触导体球。(a) 描述导体球内电荷的分布，球的净电荷是否改变？(b) 若在玻璃棒仍在时把导体球接地，再移走接地线和玻璃棒，球最终带什么电？ · A neutral conducting sphere rests on an insulating stand. A positively charged glass rod is brought near but does not touch the sphere. (a) Describe the charge distribution in the sphere and state whether its net charge changes. (b) If the sphere is grounded while the rod is still present, and then the ground and rod are removed, what is the final charge on the sphere?",
        "steps": [
          "玻璃棒的正电荷吸引导体中的自由电子向近端移动，近端带负电，远端留下正电荷；这是感应分离。 · The positive rod attracts free electrons toward the near side, leaving the near side negative and the far side positive; this is induced charge separation.",
          "导体球与外界没有电荷交换，整体仍中性：\\(Q_{\\mathrm{net}}=0\\)。电荷分布改变不等于净电荷改变。 · No charge crosses the boundary of the sphere, so it remains neutral overall: \\(Q_{\\mathrm{net}}=0\\). A changed distribution is not a changed net charge.",
          "接地后，导体球与大地连通，电子可以从大地流入导体球中和远端的正电荷；此时有电荷跨过系统边界，球的净电荷变为负。 · After grounding, the sphere is connected to Earth, so electrons can flow from Earth into the sphere and neutralize the positive far side; charge now crosses the system boundary and the sphere's net charge becomes negative.",
          "先断开接地线再移走玻璃棒，负电荷留在导体球上；若先移走玻璃棒再断开接地线，电子会流回大地，球恢复中性。操作顺序很重要。 · If the ground is disconnected before the rod is removed, the negative charge remains on the sphere; if the rod is removed first and then the ground is disconnected, electrons flow back to Earth and the sphere returns to neutral. The order matters."
        ],
        "solution": "(a) 近端负、远端正，净电荷仍为零；(b) 先断开接地再移走玻璃棒时，球最终带负电。 · (a) Negative near side and positive far side, with zero net charge; (b) if the ground is disconnected before removing the rod, the sphere ends up negatively charged.",
        "solutionLatex": "Q_{\\mathrm{net}}=0\\ \\text{(isolated)},\\qquad Q_{\\mathrm{net}}<0\\ \\text{(after grounding and rod removal)}"
      }
    ],
    "examTips": [
      "先判断题目问的是电荷的「性质」还是「数量」；性质题要说明电荷是物质的基本属性、只有正负两种。 · First decide whether a question asks about the property of charge or its amount; for the property, explain that charge is a fundamental property of matter with only two signs.",
      "遇到「中性」不要理解为「没有电荷」；中性意味着正负电荷代数和为零，内部仍有大量电荷。 · Do not read “neutral” as “no charge”; neutrality means zero algebraic sum of positive and negative charge, while enormous charge remains inside.",
      "用电荷守恒时，先明确系统边界；把参与接触、摩擦或反应的所有物体都包括进来，再写总电荷不变。 · When using conservation of charge, define the system boundary first; include every object involved in contact, friction, or reaction before setting the total charge constant.",
      "比例题直接用 \\(F'=F\\dfrac{ab}{c^{2}}\\)，不要重复代入 \\(k\\) 和全部数据；这样更快也不易算错。 · For ratio problems use \\(F'=F\\dfrac{ab}{c^{2}}\\) directly instead of re-substituting \\(k\\) and all data; it is faster and less error-prone.",
      "计算库仑力大小时用绝对值，方向由「同号相斥、异号相吸」另行判断。 · Use absolute values for the Coulomb force magnitude and determine direction separately from “like repels, opposite attracts.”",
      "两个电荷受到的力总是等大反向；不要因为一个电荷更大就认为它施加的力更大。 · The forces on the two charges are always equal and opposite; do not assume the larger charge exerts a larger force.",
      "把 \\(\\mathrm{\\mu C}\\) 换成 \\(10^{-6}\\,\\mathrm{C}\\)、把 \\(\\mathrm{cm}\\) 换成 \\(\\mathrm{m}\\)，并在最后检查数量级和单位。 · Convert \\(\\mathrm{\\mu C}\\) to \\(10^{-6}\\,\\mathrm{C}\\) and \\(\\mathrm{cm}\\) to \\(\\mathrm{m}\\), then check the order of magnitude and units."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.1",
        "title": "电荷与力 · Electric Charge and Force",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.2",
        "title": "电场 · Electric Fields",
        "relation": "后续 · next"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.8",
        "title": "电力、引力与宏观物性 · Electric and Gravitational Forces in Matter",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.10",
        "title": "绝缘体电荷与内部电场 · Charge and Fields inside Insulators",
        "relation": "相关 · related"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：8.1 已建立电荷的两种类型、库仑定律和矢量叠加；本节把「电荷是物质的基本属性」、量子化与守恒讲完整。 · Upstream: 8.1 establishes the two types of charge, Coulomb's law, and vector superposition; this topic completes the account of charge as a fundamental property of matter, its quantization, and its conservation.",
      "下游：把库仑力除以试探电荷得到电场（8.2）；多个电荷的电场叠加进入 8.3，高斯定律（8.5）则从通量角度重新表述电荷与场的关系。 · Downstream: dividing the Coulomb force by a test charge gives the electric field (8.2); superposition of fields from several charges leads to 8.3, and Gauss's law (8.5) restates the relation between charge and field through flux.",
      "跨主题：8.8 比较电力与引力，并解释宏观接触力如何来自微观电磁作用；8.10 讨论导体与绝缘体中电荷的分布和转移。 · Cross-topic: 8.8 compares electric and gravitational forces and explains how macroscopic contact forces arise from microscopic electromagnetic interactions; 8.10 discusses charge distribution and transfer in conductors and insulators.",
      "跨学科：化学键、分子间作用力、生物膜电位和材料带电现象都建立在电荷及其守恒之上。 · Cross-disciplinary: chemical bonds, intermolecular forces, membrane potentials in biology, and charging phenomena in materials all rest on charge and its conservation.",
      "科学本质：电荷守恒和电荷量子化是物理学中最精确、最普遍的守恒律与量子化规律之一。 · Nature of science: conservation of charge and charge quantization are among the most precise and universal conservation and quantization laws in physics."
    ],
    "intuitionDetailed": "电荷概念最容易出错的地方，是把「带电」当成一种可以单独盛放的东西。更准确的图像是：每个质子自带一个正电荷属性，每个电子自带一个负电荷属性；物体是否带电，只看正负属性是否配平。摩擦起电时，电子只是从一种材料跑到另一种材料，原来的总量并没有增加或减少；所以一个物体带负电，另一个必然带等量正电。中性物体内部依旧有海量正负电荷，只是数目相等；当带电体靠近时，这些电荷会发生微小位移（极化），近端出现异号电荷，远端出现同号电荷，净效果可能是吸引，这就是气球吸墙、梳子吸纸屑的原因。库仑定律则给出相互作用的定量规律：\\(F\\propto\\dfrac{|q_1q_2|}{r^{2}}\\)。做比例题时，不必每次代入 \\(k\\)：把新电荷和新距离相对于旧值的倍数找出来，力就按 \\(\\dfrac{ab}{c^{2}}\\) 缩放。还要记住，电荷之间的力是相互的；无论两个电荷量是否相等，它们受到的力总是等大反向。 · The most common mistake about charge is to treat “charged” as a separable substance that an object can hold. A more accurate picture is that every proton carries a positive charge property and every electron carries a negative one; whether an object is charged depends only on whether these properties are balanced. When rubbing transfers electrons from one material to another, the total amount is not increased or decreased; whatever negative charge one object gains, the other must lose as positive charge. A neutral object still contains enormous positive and negative charge in equal numbers; when a charged body approaches, these charges shift slightly (polarization), producing opposite charge on the near side and like charge on the far side. The net effect can be attraction—this is why a balloon sticks to a wall and a comb attracts bits of paper. Coulomb's law gives the quantitative interaction, \\(F\\propto\\dfrac{|q_1q_2|}{r^{2}}\\). For ratio problems, there is no need to substitute \\(k\\) every time: find the factors by which the charges and distance change, and the force scales by \\(\\dfrac{ab}{c^{2}}\\). Also remember that the force between charges is mutual; whether or not the two charges are equal, the forces they feel are always equal in magnitude and opposite in direction.",
    "development": [
      "从物质由质子、电子和中性粒子组成出发，说明电荷是粒子本身的属性。 · Start from the fact that matter consists of protons, electrons, and neutral particles, and explain that charge is a property of the particles themselves.",
      "区分「带电」与「中性」，用正负电荷代数和解释中性物体内部仍有大量电荷。 · Distinguish “charged” from “neutral,” and use the algebraic sum of positive and negative charge to explain why a neutral object still contains enormous charge.",
      "由密立根油滴实验等证据引入电荷量子化 \\(q=ne\\)。 · Introduce charge quantization \\(q=ne\\) from evidence such as Millikan's oil-drop experiment.",
      "用摩擦、接触、感应三种起电过程分析电荷转移，并写出电荷守恒方程。 · Analyze charge transfer in friction, contact, and induction, and write the conservation-of-charge equation.",
      "由实验事实写出库仑定律，说明平方反比和方向规则。 · Write Coulomb's law from experimental facts and state the inverse-square dependence and direction rule.",
      "用比例因子 \\(\\dfrac{ab}{c^{2}}\\) 预测电荷量或距离改变后的新力值，并用极限和符号检查结果。 · Use the factor \\(\\dfrac{ab}{c^{2}}\\) to predict the new force when charges or separation change, and check the result with limits and signs."
    ],
    "checks": [
      "电荷是物质的一种「属性」还是一种可以单独添加的「物质」？为什么？ · Is charge a “property” of matter or a separately added “substance”? Why?",
      "中性物体内部是否含有电荷？「中性」的准确含义是什么？ · Does a neutral object contain charge inside? What does “neutral” mean precisely?",
      "摩擦起电是否创造了电荷？请用总电荷守恒解释。 · Does rubbing create charge? Explain using conservation of total charge.",
      "一个物体带 \\(q=-3.2\\,\\mathrm{\\mu C}\\)，它比中性状态多了多少个电子？ · An object has \\(q=-3.2\\,\\mathrm{\\mu C}\\); how many extra electrons does it have compared with its neutral state?",
      "两个点电荷的距离变为原来的 \\(3\\) 倍，力变为原来的多少倍？ · If the distance between two point charges becomes \\(3\\) times its original value, by what factor does the force change?",
      "两个电荷量不相等的电荷之间的力是否等大？为什么？ · Are the forces between two charges of unequal magnitude equal? Why?",
      "净电荷为零的物体是否一定不受电力？举一个反例。 · Must an object with zero net charge feel zero electric force? Give a counterexample.",
      "一个中性导体球靠近带正电的玻璃棒但未接触，球内电荷如何分布？球的净电荷改变了吗？ · A neutral conducting sphere is near a positively charged glass rod without touching it. How is charge distributed, and does its net charge change?",
      "为什么「系统净电荷改变」一定意味着有电荷穿过系统边界？分别举导体和绝缘体起电的一个例子。 · Why does a change in a system's net charge require charge to cross the system boundary? Give one example each for charging a conductor and an insulator.",
      "接地为什么能改变导体的净电荷？电子是流入还是流出由什么决定？ · Why can grounding change a conductor's net charge, and what determines whether electrons flow in or out?"
    ],
    "vocabulary": [
      {
        "termZh": "电荷",
        "termEn": "electric charge",
        "defZh": "物质的一种基本属性，分为正电荷与负电荷，决定电磁相互作用的强弱和方向。",
        "defEn": "A fundamental property of matter, occurring as positive or negative charge, that determines the strength and direction of electromagnetic interactions."
      },
      {
        "termZh": "电荷量子化",
        "termEn": "quantization of charge",
        "defZh": "任何可观测电荷量都是基本电荷 \\(e\\) 的整数倍，\\(q=ne\\)。",
        "defEn": "Every observable charge is an integer multiple of the elementary charge \\(e\\), \\(q=ne\\)."
      },
      {
        "termZh": "基本电荷",
        "termEn": "elementary charge",
        "defZh": "一个电子或质子所带电荷量的绝对值，\\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\)。",
        "defEn": "The absolute value of the charge carried by one electron or proton, \\(e=1.60\\times10^{-19}\\,\\mathrm{C}\\)."
      },
      {
        "termZh": "电荷守恒",
        "termEn": "conservation of charge",
        "defZh": "孤立系统的总电荷保持不变；起电过程只是电荷转移或重新分布。",
        "defEn": "The total charge of an isolated system remains constant; charging processes only transfer or redistribute charge."
      },
      {
        "termZh": "摩擦起电",
        "termEn": "charging by friction",
        "defZh": "两种不同材料摩擦时，电子从一个物体转移到另一个物体，使两物体带等量异号电荷。",
        "defEn": "When two different materials rub, electrons transfer from one object to the other, leaving the two objects with equal and opposite charge."
      },
      {
        "termZh": "感应起电",
        "termEn": "charging by induction",
        "defZh": "带电体使导体内部自由电荷重新分布；不接地时导体总电荷不变，接地时可从大地获得或失去电子。",
        "defEn": "A charged body redistributes free charge within a conductor; without grounding the conductor's total charge is unchanged, while grounding allows it to gain or lose electrons."
      },
      {
        "termZh": "极化",
        "termEn": "polarization",
        "defZh": "中性绝缘体内部正负电荷在外电场中发生微小相对位移，使表面出现局部电荷，从而可能被带电体吸引。",
        "defEn": "A slight relative displacement of positive and negative charge in a neutral insulator under an external field, producing local surface charge and possible attraction to a charged body."
      },
      {
        "termZh": "库仑定律",
        "termEn": "Coulomb's law",
        "defZh": "真空中两个点电荷间的作用力与电荷量乘积成正比、与距离平方成反比，方向沿连线。",
        "defEn": "The force between two point charges in vacuum is proportional to the product of the charges, inversely proportional to the square of the distance, and directed along the line joining them."
      }
    ]
  },
  "8.7": {
    "id": "em/em-u8/8.7",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.7",
    "titleZh": "连续电荷分布的电场积分",
    "titleEn": "Electric Fields by Integration",
    "layer": "ap",
    "summary": "当电荷连续分布在一条线、一个面或一个体积中时，库仑定律不能直接用于整个带电体；先把带电体分成无穷小电荷元 \\(\\mathrm{d}q\\)，写出每个元在场点产生的 \\(\\mathrm{d}\\vec E\\)，再按矢量叠加积分。对称性可以消去某些分量，使积分简化为一维；常见模型包括有限长带电棒的轴线与垂直平分线、带电圆环轴线、带电圆盘轴线、半圆弧圆心和无限长带电直线。 · When charge is continuously distributed along a line, surface, or volume, Coulomb's law cannot be applied to the whole body at once. Divide the body into infinitesimal charge elements \\(\\mathrm{d}q\\), write the field \\(\\mathrm{d}\\vec E\\) each element produces at the field point, and integrate by vector superposition. Symmetry can cancel some components and reduce the integral to one dimension; standard models include a finite charged rod on its axis and perpendicular bisector, the axis of a charged ring, the axis of a charged disk, the center of a semicircular arc, and an infinitely long charged line.",
    "learningObjectives": [
      "能把连续分布写成 \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\)、\\(\\mathrm{d}q=\\sigma\\,\\mathrm{d}A\\) 或 \\(\\mathrm{d}q=\\rho\\,\\mathrm{d}V\\)，并写出场强微元 \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\)。 · Express a continuous distribution as \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\), \\(\\mathrm{d}q=\\sigma\\,\\mathrm{d}A\\), or \\(\\mathrm{d}q=\\rho\\,\\mathrm{d}V\\), and write the field element \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\).",
      "能用对称性判断哪些场分量相消，并完成有限长带电棒（轴线与垂直平分线）、带电圆环轴线、半圆弧圆心、带电圆盘轴线和无限长带电直线的积分。 · Use symmetry to identify which field components cancel and carry out the integration for a finite charged rod (on axis and on the perpendicular bisector), the axis of a charged ring, the center of a semicircular arc, the axis of a charged disk, and an infinitely long charged line.",
      "能用中心、远场、无限长或无限大极限和量纲检查积分结果，并说明方向。 · Check integration results with center, far-field, infinite-length or infinite-area limits, and dimensions, and state the direction of the field."
    ],
    "essentialKnowledge": [
      "连续分布的场强微元为 \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\)，其中 \\(\\hat r\\) 从电荷元指向场点；总场是所有微元的矢量和 \\(\\vec E=\\int\\mathrm{d}\\vec E\\)。 · The field element of a continuous distribution is \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\), where \\(\\hat r\\) points from the charge element to the field point; the total field is the vector sum \\(\\vec E=\\int\\mathrm{d}\\vec E\\) of all elements.",
      "电荷元按分布维度写成 \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\)（线）、\\(\\mathrm{d}q=\\sigma\\,\\mathrm{d}A\\)（面）或 \\(\\mathrm{d}q=\\rho\\,\\mathrm{d}V\\)（体）；\\(\\lambda\\)、\\(\\sigma\\)、\\(\\rho\\) 分别是线、面、体电荷密度。 · Charge elements are written \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\) (line), \\(\\mathrm{d}q=\\sigma\\,\\mathrm{d}A\\) (surface), or \\(\\mathrm{d}q=\\rho\\,\\mathrm{d}V\\) (volume), where \\(\\lambda\\), \\(\\sigma\\), and \\(\\rho\\) are the linear, surface, and volume charge densities.",
      "积分前先利用对称性：若电荷分布关于某平面对称，场点在该平面上，则垂直于该平面的分量相消，只需计算沿对称轴的分量。 · Before integrating, exploit symmetry: if the distribution is symmetric about a plane and the field point lies in that plane, the component perpendicular to the plane cancels, and only the component along the symmetry axis must be evaluated.",
      "有限长均匀带电棒（长 \\(L\\)、线电荷密度 \\(\\lambda\\)）在垂直平分线上距中心 \\(d\\) 处的场为 \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\)，方向垂直于棒；当 \\(L\\gg d\\) 时退化为无限长直线的 \\(E=\\dfrac{2k\\lambda}{d}\\)。 · For a finite uniformly charged rod (length \\(L\\), linear charge density \\(\\lambda\\)), the field on the perpendicular bisector at distance \\(d\\) from the center is \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\), perpendicular to the rod; for \\(L\\gg d\\) it reduces to the infinite-line result \\(E=\\dfrac{2k\\lambda}{d}\\).",
      "有限长带电棒在轴线上、距近端 \\(x\\) 处（棒外）的场为 \\(E=\\dfrac{k\\lambda L}{x(x+L)}\\)，方向沿轴线；当 \\(x\\gg L\\) 时趋近点电荷场 \\(\\dfrac{kQ}{x^{2}}\\)。 · On the axis outside a finite charged rod, at distance \\(x\\) from the near end, the field is \\(E=\\dfrac{k\\lambda L}{x(x+L)}\\), directed along the axis; for \\(x\\gg L\\) it approaches the point-charge field \\(\\dfrac{kQ}{x^{2}}\\).",
      "半径为 \\(R\\)、总电荷为 \\(Q\\) 的均匀带电圆环在轴线上距圆心 \\(z\\) 处的场为 \\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\)，方向沿轴线；圆心处 \\(E=0\\)，远场趋近点电荷场，\\(z=\\dfrac{R}{\\sqrt{2}}\\) 处出现最大值。 · For a uniformly charged ring of radius \\(R\\) and total charge \\(Q\\), the field on the axis at distance \\(z\\) from the center is \\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\), directed along the axis; it is zero at the center, approaches the point-charge field far away, and reaches a maximum at \\(z=\\dfrac{R}{\\sqrt{2}}\\).",
      "半径为 \\(R\\)、面电荷密度为 \\(\\sigma\\) 的均匀带电圆盘在轴线上的场为 \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\)；当 \\(R\\to\\infty\\) 时趋于无限大均匀平面的 \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\)，与距离无关。 · For a uniformly charged disk of radius \\(R\\) and surface charge density \\(\\sigma\\), the field on the axis is \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\); as \\(R\\to\\infty\\) it approaches the infinite uniform plane result \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\), independent of distance.",
      "半径为 \\(R\\)、线电荷密度为 \\(\\lambda\\) 的半圆弧在圆心处的场为 \\(E=\\dfrac{2k\\lambda}{R}=\\dfrac{2kQ}{\\pi R^{2}}\\)，方向沿对称轴、由正电荷指向外；整圆在圆心处的场为零。 · For a semicircular arc of radius \\(R\\) and linear charge density \\(\\lambda\\), the field at the center is \\(E=\\dfrac{2k\\lambda}{R}=\\dfrac{2kQ}{\\pi R^{2}}\\), directed along the symmetry axis away from positive charge; a complete ring produces zero field at its center.",
      "无限长均匀带电直线的场为 \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}=\\dfrac{2k\\lambda}{r}\\)，方向垂直于直线；它既可由库仑定律积分得到，也可由柱对称高斯面得到。 · An infinitely long uniformly charged line produces \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}=\\dfrac{2k\\lambda}{r}\\), perpendicular to the line; it can be obtained either by integrating Coulomb's law or by using a cylindrical Gaussian surface.",
      "对无限长均匀带电圆柱，外部（\\(r>R\\)）的场与同轴线电荷密度的无限长直线相同：\\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\)；内部场需另行积分或用高斯定律，均匀体电荷时为 \\(E=\\dfrac{\\rho r}{2\\varepsilon_0}\\)。 · For an infinitely long uniformly charged cylinder, the exterior field (\\(r>R\\)) is the same as that of an infinite line with the same linear charge density: \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\); the interior field requires a separate integral or Gauss's law, and for uniform volume charge it is \\(E=\\dfrac{\\rho r}{2\\varepsilon_0}\\)."
    ],
    "definition": "连续电荷分布的电场积分：把带电体分割成电荷元 \\(\\mathrm{d}q\\)，每个元在空间点产生 \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\)；总场为所有微元的矢量和，即 \\(\\vec E=\\int\\mathrm{d}\\vec E\\)。电荷元可按线、面、体分别写成 \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\)、\\(\\mathrm{d}q=\\sigma\\,\\mathrm{d}A\\)、\\(\\mathrm{d}q=\\rho\\,\\mathrm{d}V\\)。积分前先用对称性判断哪些分量相消，通常只需计算沿对称轴的一个分量；积分后要用中心、远场和无限大极限检查结果，并补回方向。 · Electric field by integration for a continuous charge distribution: divide the charged body into charge elements \\(\\mathrm{d}q\\), each producing \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\) at a field point; the total field is the vector sum of all elements, \\(\\vec E=\\int\\mathrm{d}\\vec E\\). Charge elements are written \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\), \\(\\mathrm{d}q=\\sigma\\,\\mathrm{d}A\\), or \\(\\mathrm{d}q=\\rho\\,\\mathrm{d}V\\) for line, surface, or volume distributions. Before integrating, use symmetry to identify which components cancel; usually only one component along the symmetry axis must be evaluated. After integrating, check the result with center, far-field, and infinite-size limits, and restore the direction.",
    "intuition": "把连续带电体想成无数个极小的点电荷：每个小电荷都按库仑定律向场点发出一支小箭头 \\(\\mathrm{d}\\vec E\\)，总场就是把这些箭头首尾相接。直接按矢量相加很麻烦，所以先看对称性：在圆环轴线上，左右两侧的横向箭头两两抵消，只剩沿轴的分量；在带电棒垂直平分线上，沿棒方向的分量也成对抵消，只剩垂直分量。于是三维矢量和退化成一个标量积分。积分时把几何关系写成同一个变量（如 \\(x\\)、\\(\\theta\\) 或 \\(r'\\)），再在带电区域上积分。最后用极限检查：点太远时，任何有限带电体都应像点电荷；无限长棒或无限大平面则给出与距离无关或按 \\(\\dfrac{1}{r}\\) 衰减的极限。 · Think of a continuous charged body as countless tiny point charges: each element sends a small field arrow \\(\\mathrm{d}\\vec E\\) to the field point according to Coulomb's law, and the total field is the chain of these arrows. Adding them as vectors is cumbersome, so first use symmetry: on the axis of a ring, transverse arrows from opposite sides cancel in pairs, leaving only the axial component; on the perpendicular bisector of a rod, components along the rod cancel in pairs, leaving only the perpendicular component. The three-dimensional vector sum then reduces to a scalar integral. Write the geometry in terms of one variable (such as \\(x\\), \\(\\theta\\), or \\(r'\\)) and integrate over the charged region. Finally, check limits: far away, any finite body should look like a point charge; an infinite rod or infinite plane gives a limit that falls as \\(\\dfrac{1}{r}\\) or stays constant.",
    "formulas": [
      {
        "latex": "\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r",
        "note": "连续分布的场强微元；\\(\\hat r\\) 从电荷元指向场点。 · Field element of a continuous distribution; \\(\\hat r\\) points from the charge element to the field point."
      },
      {
        "latex": "\\vec E=\\int\\mathrm{d}\\vec E",
        "note": "对整个带电区域作矢量积分。 · Vector integral over the entire charged region."
      },
      {
        "latex": "\\mathrm{d}q=\\lambda\\,\\mathrm{d}l,\\qquad \\mathrm{d}q=\\sigma\\,\\mathrm{d}A,\\qquad \\mathrm{d}q=\\rho\\,\\mathrm{d}V",
        "note": "线、面、体电荷元。 · Line, surface, and volume charge elements."
      },
      {
        "latex": "E_{\\text{rod},\\perp}=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}",
        "note": "有限长带电棒垂直平分线上的场；\\(d\\) 为到棒中心的距离。 · Field on the perpendicular bisector of a finite charged rod; \\(d\\) is the distance from the rod's center."
      },
      {
        "latex": "E_{\\text{rod,axis}}=\\dfrac{k\\lambda L}{x(x+L)}",
        "note": "有限长带电棒轴线上的场；\\(x\\) 为到近端的距离（棒外）。 · Field on the axis of a finite charged rod; \\(x\\) is the distance from the near end, outside the rod."
      },
      {
        "latex": "E_{\\text{ring}}=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}",
        "note": "均匀带电圆环轴线上的场；圆心处为零。 · Field on the axis of a uniformly charged ring; zero at the center."
      },
      {
        "latex": "E_{\\text{disk}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)",
        "note": "均匀带电圆盘轴线上的场；\\(R\\to\\infty\\) 时趋于 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)。 · Field on the axis of a uniformly charged disk; as \\(R\\to\\infty\\) it approaches \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)."
      },
      {
        "latex": "E_{\\text{arc}}=\\dfrac{2k\\lambda}{R}=\\dfrac{2kQ}{\\pi R^{2}}",
        "note": "半圆弧在圆心处的场；方向沿对称轴。 · Field at the center of a semicircular arc; directed along the symmetry axis."
      },
      {
        "latex": "E_{\\text{line}}=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}=\\dfrac{2k\\lambda}{r}",
        "note": "无限长均匀带电直线的场；\\(r\\) 为到直线的垂直距离。 · Field of an infinitely long uniformly charged line; \\(r\\) is the perpendicular distance to the line."
      }
    ],
    "derivationNotes": [
      {
        "from": "库仑定律 · Coulomb's law",
        "to": "场强微元 · Field element",
        "note": "把带电体分成电荷元 \\(\\mathrm{d}q\\)，每个元近似为点电荷，产生 \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\)。 · Divide the body into charge elements \\(\\mathrm{d}q\\), treat each as a point charge, and write \\(\\mathrm{d}\\vec E=k\\dfrac{\\mathrm{d}q}{r^{2}}\\hat r\\)."
      },
      {
        "from": "叠加原理 · Superposition",
        "to": "矢量积分 · Vector integral",
        "note": "总场是全部微元的矢量和；不能先把大小相加再补方向。 · The total field is the vector sum of all elements; do not add magnitudes first and attach a direction afterward."
      },
      {
        "from": "对称性 · Symmetry",
        "to": "一维标量积分 · One-dimensional scalar integral",
        "note": "在圆环轴线或棒垂直平分线上，成对出现的横向分量相消，只需积分沿对称轴的分量。 · On a ring axis or a rod's perpendicular bisector, transverse components cancel in pairs, so only the component along the symmetry axis needs to be integrated."
      },
      {
        "from": "圆环的几何关系 · Ring geometry",
        "to": "圆环轴线场 · Ring-axis field",
        "note": "每个电荷元到轴点的距离都是 \\(\\sqrt{z^{2}+R^{2}}\\)，轴向分量含因子 \\(\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\)，积分得 \\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\)。 · Every element is at distance \\(\\sqrt{z^{2}+R^{2}}\\) from the axial point, and the axial component carries the factor \\(\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\), giving \\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\)."
      },
      {
        "from": "圆盘分成圆环 · Disk as rings",
        "to": "圆盘轴线场 · Disk-axis field",
        "note": "取半径 \\(r'\\)、宽 \\(\\mathrm{d}r'\\) 的圆环，\\(\\mathrm{d}q=\\sigma 2\\pi r'\\,\\mathrm{d}r'\\)，对 \\(r'\\) 从 0 积到 \\(R\\)，得 \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\)。 · Take a ring of radius \\(r'\\) and width \\(\\mathrm{d}r'\\), with \\(\\mathrm{d}q=\\sigma 2\\pi r'\\,\\mathrm{d}r'\\), and integrate \\(r'\\) from 0 to \\(R\\) to obtain \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\)."
      },
      {
        "from": "有限长棒 · Finite rod",
        "to": "垂直平分线与轴线 · Perpendicular bisector and axis",
        "note": "垂直平分线：\\(\\mathrm{d}E_y=\\dfrac{k\\lambda d\\,\\mathrm{d}s}{(s^{2}+d^{2})^{\\frac{3}{2}}}\\)，从 \\(s=-\\dfrac{L}{2}\\) 到 \\(\\dfrac{L}{2}\\) 积分，利用 \\(\\int\\dfrac{\\mathrm{d}s}{(s^{2}+d^{2})^{\\frac{3}{2}}}=\\dfrac{s}{d^{2}\\sqrt{s^{2}+d^{2}}}\\)，得 \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\)；轴线：\\(\\mathrm{d}E=\\dfrac{k\\lambda\\,\\mathrm{d}s}{(x+s)^{2}}\\)，从 \\(s=0\\) 到 \\(L\\) 积分得 \\(E=\\dfrac{k\\lambda L}{x(x+L)}\\)。 · Perpendicular bisector: \\(\\mathrm{d}E_y=\\dfrac{k\\lambda d\\,\\mathrm{d}s}{(s^{2}+d^{2})^{\\frac{3}{2}}}\\), integrate from \\(s=-\\dfrac{L}{2}\\) to \\(\\dfrac{L}{2}\\) using \\(\\int\\dfrac{\\mathrm{d}s}{(s^{2}+d^{2})^{\\frac{3}{2}}}=\\dfrac{s}{d^{2}\\sqrt{s^{2}+d^{2}}}\\) to obtain \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\); axis: \\(\\mathrm{d}E=\\dfrac{k\\lambda\\,\\mathrm{d}s}{(x+s)^{2}}\\), integrate from \\(s=0\\) to \\(L\\) to obtain \\(E=\\dfrac{k\\lambda L}{x(x+L)}\\)."
      },
      {
        "from": "半圆弧 · Semicircular arc",
        "to": "圆心场 · Field at the center",
        "note": "\\(\\mathrm{d}E_x=\\dfrac{k\\lambda}{R}\\cos\\theta\\,\\mathrm{d}\\theta\\)，从 \\(-\\dfrac{\\pi}{2}\\) 到 \\(\\dfrac{\\pi}{2}\\) 积分，垂直分量两两相消，得 \\(E=\\dfrac{2k\\lambda}{R}=\\dfrac{2kQ}{\\pi R^{2}}\\)。 · \\(\\mathrm{d}E_x=\\dfrac{k\\lambda}{R}\\cos\\theta\\,\\mathrm{d}\\theta\\), integrated from \\(-\\dfrac{\\pi}{2}\\) to \\(\\dfrac{\\pi}{2}\\), with perpendicular components cancelling in pairs, gives \\(E=\\dfrac{2k\\lambda}{R}=\\dfrac{2kQ}{\\pi R^{2}}\\)."
      },
      {
        "from": "无限长直线 · Infinite line",
        "to": "垂直距离 r 处的场 · Field at perpendicular distance r",
        "note": "\\(\\mathrm{d}E_x=\\dfrac{k\\lambda r\\,\\mathrm{d}y}{(r^{2}+y^{2})^{\\frac{3}{2}}}\\)，从 \\(y=-\\infty\\) 到 \\(\\infty\\) 积分得 \\(E=\\dfrac{2k\\lambda}{r}=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\)；圆柱外部与同轴线电荷密度的直线相同。 · \\(\\mathrm{d}E_x=\\dfrac{k\\lambda r\\,\\mathrm{d}y}{(r^{2}+y^{2})^{\\frac{3}{2}}}\\), integrated from \\(y=-\\infty\\) to \\(\\infty\\), gives \\(E=\\dfrac{2k\\lambda}{r}=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\); a cylinder's exterior field equals that of a line with the same linear charge density."
      },
      {
        "from": "极限检验 · Limit checks",
        "to": "无限长/无限大与点电荷 · Infinite sizes and point charge",
        "note": "\\(L\\to\\infty\\) 给出无限长直线场；\\(R\\to\\infty\\) 给出无限大平面场；\\(z\\gg R\\) 或 \\(x\\gg L\\) 给出点电荷场。 · \\(L\\to\\infty\\) gives the infinite-line field; \\(R\\to\\infty\\) gives the infinite-plane field; \\(z\\gg R\\) or \\(x\\gg L\\) gives the point-charge field."
      }
    ],
    "conditions": [
      "电荷分布连续且静止；离散电荷的精确描述需要求和而不是积分。 · The charge distribution is continuous and at rest; discrete charges require a sum rather than an integral.",
      "场点不在带电体内部；若场点落在电荷分布的奇异处，需单独处理或取极限。 · The field point lies outside the charged body; if it lies on a singularity of the distribution, treat it separately or take a limit.",
      "在真空或空气中计算；在介质中把 \\(\\varepsilon_0\\) 换成介电率 \\(\\varepsilon\\)。 · Evaluate in vacuum or air; in a dielectric replace \\(\\varepsilon_0\\) with the permittivity \\(\\varepsilon\\).",
      "\\(\\hat r\\) 必须从电荷元指向场点；方向写反会使积分结果整体差一个负号。 · \\(\\hat r\\) must point from the charge element to the field point; reversing it flips the sign of the entire result.",
      "有限长、无限长、无限大平面都是理想模型，适用条件是相应的尺度比足够大或足够小。 · Finite rods, infinite lines, and infinite planes are ideal models; their validity requires the relevant length ratios to be sufficiently large or small.",
      "叠加原理要求各电荷元的场互不影响；试探电荷不能改变原来的电荷分布。 · Superposition assumes the field of each element is unaffected by the others; a test charge must not alter the original distribution."
    ],
    "keyPoints": [
      "先写 \\(\\mathrm{d}\\vec E\\)，再积分；不要一上来就把整个带电体当点电荷。 · Write \\(\\mathrm{d}\\vec E\\) first, then integrate; do not treat the whole body as a point charge from the start.",
      "电荷元有三种写法：线 \\(\\lambda\\,\\mathrm{d}l\\)、面 \\(\\sigma\\,\\mathrm{d}A\\)、体 \\(\\rho\\,\\mathrm{d}V\\)。 · Charge elements have three forms: line \\(\\lambda\\,\\mathrm{d}l\\), surface \\(\\sigma\\,\\mathrm{d}A\\), and volume \\(\\rho\\,\\mathrm{d}V\\).",
      "对称性先消去横向分量，把矢量积分变成一维标量积分。 · Use symmetry to cancel transverse components and reduce the vector integral to a one-dimensional scalar integral.",
      "有限长棒：垂直平分线 \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\)，轴线 \\(E=\\dfrac{k\\lambda L}{x(x+L)}\\)。 · Finite rod: perpendicular bisector \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\), axis \\(E=\\dfrac{k\\lambda L}{x(x+L)}\\).",
      "圆环轴线：\\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\)，圆心为零，远场为点电荷场。 · Ring axis: \\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\), zero at the center and point-charge-like far away.",
      "圆盘轴线：\\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\)，无限大平面极限为 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\)。 · Disk axis: \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\), with infinite-plane limit \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\).",
      "半圆弧圆心：\\(E=\\dfrac{2k\\lambda}{R}\\)；整圆圆心场为零。 · Semicircular arc center: \\(E=\\dfrac{2k\\lambda}{R}\\); a complete ring has zero field at its center.",
      "无限长直线：\\(E=\\dfrac{2k\\lambda}{r}\\)，方向垂直于直线。 · Infinite line: \\(E=\\dfrac{2k\\lambda}{r}\\), perpendicular to the line.",
      "每个结果都要做中心、远场、无限大和量纲检查。 · Check every result at the center, far field, infinite-size limit, and by dimensions."
    ],
    "misconceptions": [
      "把有限大带电体直接当成位于几何中心的点电荷；只有远场或球对称外部才可以这样近似。 · Treating a finite charged body as a point charge at its geometric center; this is valid only far away or outside a spherically symmetric distribution.",
      "把各电荷元的场强大小直接相加；电场是矢量，必须先分解再合成。 · Adding the magnitudes of element fields directly; the electric field is a vector and must be resolved before combining.",
      "把 \\(r\\) 当成电荷元到原点的距离，而不是到场点的距离。 · Taking \\(r\\) as the distance from the charge element to the origin instead of to the field point.",
      "在圆环圆心处套用轴线公式却忘记 \\(z=0\\) 使场为零，或误以为圆心场最大。 · Using the ring-axis formula at the center without setting \\(z=0\\), or assuming the center has the maximum field.",
      "把无限长直线的 \\(E\\propto\\dfrac{1}{r}\\) 误用于有限长棒的近端；有限长棒的结果还依赖长度和端点位置。 · Applying the infinite-line \\(E\\propto\\dfrac{1}{r}\\) near the end of a finite rod; the finite-rod result also depends on length and endpoint position.",
      "积分后只写大小而忘记方向，或把 \\(\\hat r\\) 的方向写反。 · Reporting only the magnitude after integration, or reversing the direction of \\(\\hat r\\).",
      "把 \\(\\lambda\\)、\\(\\sigma\\)、\\(\\rho\\) 的单位混用；它们分别是 \\(\\mathrm{C\\,m^{-1}}\\)、\\(\\mathrm{C\\,m^{-2}}\\)、\\(\\mathrm{C\\,m^{-3}}\\)。 · Mixing the units of \\(\\lambda\\), \\(\\sigma\\), and \\(\\rho\\), which are \\(\\mathrm{C\\,m^{-1}}\\), \\(\\mathrm{C\\,m^{-2}}\\), and \\(\\mathrm{C\\,m^{-3}}\\).",
      "对无限大平面结果感到意外：它不随距离变化，是因为平面在任意距离上都占据相同的立体角。 · Being surprised that the infinite-plane field is independent of distance; the plane subtends the same solid angle at every distance."
    ],
    "examples": [
      {
        "title": "例 1 · 有限长带电棒的垂直平分线 · Example 1: Perpendicular bisector of a finite charged rod",
        "prompt": "一根长 \\(L=0.80\\,\\mathrm{m}\\) 的均匀带电棒，线电荷密度 \\(\\lambda=+2.0\\,\\mathrm{\\mu C\\,m^{-1}}\\)。求在垂直平分线上距棒中心 \\(d=0.30\\,\\mathrm{m}\\) 处的电场大小和方向。 · A uniformly charged rod of length \\(L=0.80\\,\\mathrm{m}\\) has linear charge density \\(\\lambda=+2.0\\,\\mathrm{\\mu C\\,m^{-1}}\\). Find the magnitude and direction of the field on the perpendicular bisector at distance \\(d=0.30\\,\\mathrm{m}\\) from the rod's center.",
        "steps": [
          "由对称性，沿棒方向的分量相消，总场垂直于棒。 · By symmetry, components along the rod cancel, so the net field is perpendicular to the rod.",
          "代入 \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\)。 · Substitute into \\(E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\).",
          "\\(E=\\dfrac{(8.99\\times10^{9})(2.0\\times10^{-6})(0.80)}{(0.30)\\sqrt{(0.30)^{2}+\\dfrac{(0.80)^{2}}{4}}}\\)。 · \\(E=\\dfrac{(8.99\\times10^{9})(2.0\\times10^{-6})(0.80)}{(0.30)\\sqrt{(0.30)^{2}+\\dfrac{(0.80)^{2}}{4}}}\\).",
          "分母中的根式为 \\(\\sqrt{0.09+0.16}=0.50\\)，所以 \\(E\\approx9.6\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\)。 · The root in the denominator is \\(\\sqrt{0.09+0.16}=0.50\\), so \\(E\\approx9.6\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\)."
        ],
        "solution": "\\(E\\approx9.6\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\)，方向垂直于棒、背离正电荷。 · \\(E\\approx9.6\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\), perpendicular to the rod and away from the positive charge.",
        "solutionLatex": "E=\\dfrac{k\\lambda L}{d\\sqrt{d^{2}+\\dfrac{L^{2}}{4}}}\\approx9.6\\times10^{4}\\,\\mathrm{N\\,C^{-1}}"
      },
      {
        "title": "例 2 · 有限长带电棒的轴线 · Example 2: Axis of a finite charged rod",
        "prompt": "同一根棒（\\(L=0.80\\,\\mathrm{m}\\)，\\(\\lambda=+2.0\\,\\mathrm{\\mu C\\,m^{-1}}\\)）放在轴线上，场点距近端 \\(x=0.20\\,\\mathrm{m}\\)。求场强大小和方向。 · The same rod (\\(L=0.80\\,\\mathrm{m}\\), \\(\\lambda=+2.0\\,\\mathrm{\\mu C\\,m^{-1}}\\)) is viewed on its axis, with the field point \\(x=0.20\\,\\mathrm{m}\\) from the near end. Find the magnitude and direction of the field.",
        "steps": [
          "轴线上各电荷元的场都沿同一方向，可直接作标量积分。 · On the axis, all element fields point in the same direction, so the integral is scalar.",
          "\\(E=\\dfrac{k\\lambda L}{x(x+L)}\\)。 · \\(E=\\dfrac{k\\lambda L}{x(x+L)}\\).",
          "\\(E=\\dfrac{(8.99\\times10^{9})(2.0\\times10^{-6})(0.80)}{(0.20)(0.20+0.80)}\\approx7.2\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E=\\dfrac{(8.99\\times10^{9})(2.0\\times10^{-6})(0.80)}{(0.20)(0.20+0.80)}\\approx7.2\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\)."
        ],
        "solution": "\\(E\\approx7.2\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\)，方向沿轴线、背离正电荷。 · \\(E\\approx7.2\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\), along the axis away from the positive charge.",
        "solutionLatex": "E=\\dfrac{k\\lambda L}{x(x+L)}\\approx7.2\\times10^{4}\\,\\mathrm{N\\,C^{-1}}"
      },
      {
        "title": "例 3 · 带电圆环轴线 · Example 3: Axis of a charged ring",
        "prompt": "一个半径 \\(R=0.10\\,\\mathrm{m}\\) 的均匀带电圆环带总电荷 \\(Q=+5.0\\,\\mathrm{\\mu C}\\)。求轴线上 \\(z=0.20\\,\\mathrm{m}\\) 处的场强，并说明圆心处的场。 · A uniformly charged ring of radius \\(R=0.10\\,\\mathrm{m}\\) carries total charge \\(Q=+5.0\\,\\mathrm{\\mu C}\\). Find the field on the axis at \\(z=0.20\\,\\mathrm{m}\\), and state the field at the center.",
        "steps": [
          "圆环上各电荷元到轴点的距离相同，横向分量相消，只剩轴向分量。 · Every element is at the same distance from the axial point; transverse components cancel, leaving only the axial component.",
          "\\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\)。 · \\(E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\).",
          "\\(z^{2}+R^{2}=(0.20)^{2}+(0.10)^{2}=0.050\\,\\mathrm{m^{2}}\\)，所以 \\((z^{2}+R^{2})^{\\frac{3}{2}}\\approx0.0112\\,\\mathrm{m^{3}}\\)。 · \\(z^{2}+R^{2}=(0.20)^{2}+(0.10)^{2}=0.050\\,\\mathrm{m^{2}}\\), so \\((z^{2}+R^{2})^{\\frac{3}{2}}\\approx0.0112\\,\\mathrm{m^{3}}\\).",
          "\\(E=\\dfrac{(8.99\\times10^{9})(5.0\\times10^{-6})(0.20)}{0.0112}\\approx8.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E=\\dfrac{(8.99\\times10^{9})(5.0\\times10^{-6})(0.20)}{0.0112}\\approx8.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "圆心处 \\(z=0\\)，公式给出 \\(E=0\\)，与对称性一致。 · At the center \\(z=0\\), the formula gives \\(E=0\\), consistent with symmetry."
        ],
        "solution": "\\(E\\approx8.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)，沿轴线背离圆环；圆心处为零。 · \\(E\\approx8.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\), along the axis away from the ring; zero at the center.",
        "solutionLatex": "E=\\dfrac{kQz}{(z^{2}+R^{2})^{\\frac{3}{2}}}\\approx8.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}},\\qquad E(z=0)=0"
      },
      {
        "title": "例 4 · 半圆弧圆心处的场 · Example 4: Field at the center of a semicircular arc",
        "prompt": "一段半径 \\(R=0.050\\,\\mathrm{m}\\) 的半圆弧均匀带电，总电荷 \\(Q=+3.0\\,\\mathrm{\\mu C}\\)。求圆心处的电场大小和方向。 · A semicircular arc of radius \\(R=0.050\\,\\mathrm{m}\\) carries a uniform total charge \\(Q=+3.0\\,\\mathrm{\\mu C}\\). Find the magnitude and direction of the field at the center.",
        "steps": [
          "线电荷密度 \\(\\lambda=\\dfrac{Q}{\\pi R}\\)。 · Linear charge density \\(\\lambda=\\dfrac{Q}{\\pi R}\\).",
          "由对称性，垂直于对称轴的分量相消；沿对称轴的分量为 \\(E=\\dfrac{2k\\lambda}{R}\\)。 · By symmetry, components perpendicular to the symmetry axis cancel; the component along it is \\(E=\\dfrac{2k\\lambda}{R}\\).",
          "\\(E=\\dfrac{2kQ}{\\pi R^{2}}=\\dfrac{2(8.99\\times10^{9})(3.0\\times10^{-6})}{\\pi(0.050)^{2}}\\)。 · \\(E=\\dfrac{2kQ}{\\pi R^{2}}=\\dfrac{2(8.99\\times10^{9})(3.0\\times10^{-6})}{\\pi(0.050)^{2}}\\).",
          "\\(E\\approx6.9\\times10^{6}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E\\approx6.9\\times10^{6}\\,\\mathrm{N\\,C^{-1}}\\)."
        ],
        "solution": "\\(E\\approx6.9\\times10^{6}\\,\\mathrm{N\\,C^{-1}}\\)，沿对称轴背离正电荷。 · \\(E\\approx6.9\\times10^{6}\\,\\mathrm{N\\,C^{-1}}\\), along the symmetry axis away from the positive charge.",
        "solutionLatex": "E=\\dfrac{2kQ}{\\pi R^{2}}\\approx6.9\\times10^{6}\\,\\mathrm{N\\,C^{-1}}"
      },
      {
        "title": "例 5 · 带电圆盘轴线与无限大平面极限 · Example 5: Charged-disk axis and the infinite-plane limit",
        "prompt": "一个半径 \\(R=0.15\\,\\mathrm{m}\\) 的均匀带电圆盘，面电荷密度 \\(\\sigma=+4.0\\,\\mathrm{\\mu C\\,m^{-2}}\\)。求轴线上 \\(z=0.10\\,\\mathrm{m}\\) 处的场强，并求 \\(R\\to\\infty\\) 时的极限。 · A uniformly charged disk of radius \\(R=0.15\\,\\mathrm{m}\\) has surface charge density \\(\\sigma=+4.0\\,\\mathrm{\\mu C\\,m^{-2}}\\). Find the field on the axis at \\(z=0.10\\,\\mathrm{m}\\), and the limit as \\(R\\to\\infty\\).",
        "steps": [
          "\\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\)。 · \\(E=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\).",
          "\\(\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}=\\dfrac{0.10}{\\sqrt{0.010+0.0225}}\\approx0.555\\)。 · \\(\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}=\\dfrac{0.10}{\\sqrt{0.010+0.0225}}\\approx0.555\\).",
          "\\(\\dfrac{\\sigma}{2\\varepsilon_0}=\\dfrac{4.0\\times10^{-6}}{2(8.85\\times10^{-12})}\\approx2.26\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(\\dfrac{\\sigma}{2\\varepsilon_0}=\\dfrac{4.0\\times10^{-6}}{2(8.85\\times10^{-12})}\\approx2.26\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "\\(E\\approx(2.26\\times10^{5})(1-0.555)\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)；当 \\(R\\to\\infty\\) 时 \\(E\\to2.26\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E\\approx(2.26\\times10^{5})(1-0.555)\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\); as \\(R\\to\\infty\\), \\(E\\to2.26\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)."
        ],
        "solution": "\\(E\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)；无限大平面极限为 \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\approx2.3\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\); the infinite-plane limit is \\(\\dfrac{\\sigma}{2\\varepsilon_0}\\approx2.3\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
        "solutionLatex": "E\\approx1.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}},\\qquad E_{R\\to\\infty}=\\dfrac{\\sigma}{2\\varepsilon_0}\\approx2.3\\times10^{5}\\,\\mathrm{N\\,C^{-1}}"
      },
      {
        "title": "例 6 · 无限长带电直线：积分与高斯定律对照 · Example 6: Infinite charged line—integration versus Gauss's law",
        "prompt": "一根无限长均匀带电直线，线电荷密度 \\(\\lambda=+3.0\\,\\mathrm{\\mu C\\,m^{-1}}\\)。求距直线 \\(r=0.12\\,\\mathrm{m}\\) 处的场强，并说明如何用高斯定律复核。 · An infinitely long uniformly charged line has linear charge density \\(\\lambda=+3.0\\,\\mathrm{\\mu C\\,m^{-1}}\\). Find the field at distance \\(r=0.12\\,\\mathrm{m}\\) from the line, and explain how to check it with Gauss's law.",
        "steps": [
          "取直线沿 \\(y\\) 轴，场点在 \\(x=r\\) 处；每个电荷元 \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}y\\) 的 \\(x\\) 分量相加，\\(y\\) 分量相消。 · Put the line along the \\(y\\) axis and the field point at \\(x=r\\); the \\(x\\) components of the elements \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}y\\) add while the \\(y\\) components cancel.",
          "\\(E=\\int_{-\\infty}^{\\infty}k\\lambda\\dfrac{r\\,\\mathrm{d}y}{(r^{2}+y^{2})^{\\frac{3}{2}}}=\\dfrac{2k\\lambda}{r}\\)。 · \\(E=\\int_{-\\infty}^{\\infty}k\\lambda\\dfrac{r\\,\\mathrm{d}y}{(r^{2}+y^{2})^{\\frac{3}{2}}}=\\dfrac{2k\\lambda}{r}\\).",
          "\\(E=\\dfrac{2(8.99\\times10^{9})(3.0\\times10^{-6})}{0.12}\\approx4.5\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E=\\dfrac{2(8.99\\times10^{9})(3.0\\times10^{-6})}{0.12}\\approx4.5\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "用半径为 \\(r\\)、长为 \\(L\\) 的柱形高斯面：\\(E(2\\pi rL)=\\dfrac{\\lambda L}{\\varepsilon_0}\\)，同样得到 \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\)。 · Use a cylindrical Gaussian surface of radius \\(r\\) and length \\(L\\): \\(E(2\\pi rL)=\\dfrac{\\lambda L}{\\varepsilon_0}\\), which again gives \\(E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\)."
        ],
        "solution": "\\(E\\approx4.5\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)，方向垂直于直线、背离正电荷；积分与高斯定律结果一致。 · \\(E\\approx4.5\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\), perpendicular to the line and away from the positive charge; integration and Gauss's law agree.",
        "solutionLatex": "E=\\dfrac{2k\\lambda}{r}=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}\\approx4.5\\times10^{5}\\,\\mathrm{N\\,C^{-1}}"
      }
    ],
    "examTips": [
      "先在图上标出 \\(\\mathrm{d}q\\)、\\(r\\) 和 \\(\\hat r\\)，再写 \\(\\mathrm{d}\\vec E\\)；方向错是最常见的失分点。 · Mark \\(\\mathrm{d}q\\), \\(r\\), and \\(\\hat r\\) on the diagram before writing \\(\\mathrm{d}\\vec E\\); a wrong direction is the most common lost point.",
      "先找对称性，能消去的分量一定先消去，再积分；不要一开始就写三维矢量积分。 · Look for symmetry first and cancel components before integrating; do not start with a full three-dimensional vector integral.",
      "把 \\(r\\) 和积分变量统一：圆环用 \\(\\theta\\) 或直接利用等距，圆盘用 \\(r'\\)，有限长棒用 \\(x\\)。 · Express \\(r\\) and the integration variable consistently: use \\(\\theta\\) for a ring, \\(r'\\) for a disk, and \\(x\\) for a finite rod.",
      "积分完成后再把方向补回，并用单位、中心值、远场和无限大极限检查。 · Restore the direction after integrating, and check units, center value, far field, and infinite-size limits.",
      "记住三个常用极限：\\(L\\to\\infty\\) 的直线、\\(R\\to\\infty\\) 的平面、\\(z\\gg R\\) 或 \\(x\\gg L\\) 的点电荷。 · Remember three useful limits: the infinite line as \\(L\\to\\infty\\), the infinite plane as \\(R\\to\\infty\\), and the point charge as \\(z\\gg R\\) or \\(x\\gg L\\).",
      "写答案时区分“场强大小”和“电场方向”，并说明是哪个电荷产生的场。 · In the final answer, distinguish field magnitude from direction and state which charge distribution produces the field."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.2",
        "title": "电场 · Electric Fields",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.3",
        "title": "电场叠加 · Electric Field of Charge Distributions",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律 · Gauss's Law",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.11",
        "title": "电荷密度与包围电荷积分 · Charge Density and Enclosed Charge",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "electric-field",
        "title": "电场线与等势 · Field lines and equipotentials"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：8.1 的库仑定律给出点电荷场，8.2 定义电场，8.3 建立电场叠加；本节把这些工具推广到连续电荷分布。 · Upstream: Coulomb's law in 8.1 gives the point-charge field, 8.2 defines the electric field, and 8.3 establishes superposition; this topic extends those tools to continuous distributions.",
      "下游：8.5 高斯定律在球、柱、平面对称情形下提供更快的求场方法，可与本节积分结果互相校验。 · Downstream: Gauss's law in 8.5 gives a faster route for spherical, cylindrical, and planar symmetry and can be used to cross-check the integrals here.",
      "跨主题：8.11 把 \\(\\lambda\\)、\\(\\sigma\\)、\\(\\rho\\) 与包围电荷写成积分，是本节电荷元语言的自然延伸。 · Cross-topic: 8.11 expresses \\(\\lambda\\), \\(\\sigma\\), and \\(\\rho\\) and enclosed charge as integrals, a natural extension of the charge-element language used here.",
      "跨单元：9.3 用同样的积分思想求连续电荷分布的电势，只需把 \\(\\mathrm{d}E\\) 换成 \\(\\mathrm{d}V\\)。 · Cross-unit: 9.3 applies the same integration strategy to the potential of continuous distributions, replacing \\(\\mathrm{d}E\\) with \\(\\mathrm{d}V\\)."
    ],
    "intuitionDetailed": "连续电荷分布的题，难点通常不在积分技巧，而在建模：先把带电体切成什么形状的电荷元，再把电荷元到场点的距离写成同一个变量。对圆环，所有电荷元到轴点的距离相同，横向分量成对抵消，只剩轴向分量；对圆盘，先切成半径 \\(r'\\)、宽 \\(\\mathrm{d}r'\\) 的细圆环，再把圆环的轴线场对 \\(r'\\) 积分；对有限长棒，垂直平分线上的横向分量相消，轴线上则所有分量同向。每一步都要问：我选的 \\(\\mathrm{d}q\\) 是什么？\\(r\\) 怎么表示？哪个分量会抵消？积分限是什么？算完后用三个极限检查：场点移到中心时结果是否符合对称性；场点移到很远时是否回到点电荷；带电体变成无限长或无限大时是否得到已知的均匀场。只要这三个检查通过，符号和数量级通常就不会有大问题。 · The difficulty in continuous-distribution problems is usually modeling, not integration technique: first decide what shape of charge element to cut, then express the distance from that element to the field point in a single variable. For a ring, all elements are equally distant from the axial point, transverse components cancel in pairs, and only the axial component remains; for a disk, cut it into thin rings of radius \\(r'\\) and width \\(\\mathrm{d}r'\\), then integrate the ring-axis field over \\(r'\\); for a finite rod, transverse components cancel on the perpendicular bisector, while on the axis all contributions point the same way. At each step ask: what is my \\(\\mathrm{d}q\\)? How is \\(r\\) expressed? Which component cancels? What are the limits? After integrating, check three limits: does the result at the center respect symmetry; does it reduce to a point charge far away; does it give the known uniform field when the body becomes infinitely long or infinitely large? If these checks pass, signs and orders of magnitude are usually sound.",
    "development": [
      "从库仑定律出发，把带电体分割成电荷元，写出 \\(\\mathrm{d}\\vec E\\)。 · Starting from Coulomb's law, divide the body into charge elements and write \\(\\mathrm{d}\\vec E\\).",
      "根据线、面、体分布选择 \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\)、\\(\\sigma\\,\\mathrm{d}A\\) 或 \\(\\rho\\,\\mathrm{d}V\\)。 · Choose \\(\\mathrm{d}q=\\lambda\\,\\mathrm{d}l\\), \\(\\sigma\\,\\mathrm{d}A\\), or \\(\\rho\\,\\mathrm{d}V\\) according to the line, surface, or volume distribution.",
      "用对称性判断哪些分量相消，选择最方便的积分变量。 · Use symmetry to decide which components cancel and choose the most convenient integration variable.",
      "完成有限长棒、圆环、圆盘、半圆弧和无限长直线的积分，并写出方向。 · Carry out the integrals for the finite rod, ring, disk, semicircular arc, and infinite line, and state the direction.",
      "用中心、远场、无限大极限和量纲检查每个结果。 · Check each result with center, far-field, infinite-size limits, and dimensions."
    ],
    "checks": [
      "为什么连续电荷分布的电场要用积分而不是直接把总电荷代入库仑定律？ · Why must the field of a continuous distribution be found by integration instead of substituting the total charge into Coulomb's law directly?",
      "在圆环轴线和有限长棒的垂直平分线上，分别是哪个分量相消？为什么？ · On a ring axis and on a finite rod's perpendicular bisector, which components cancel, and why?",
      "有限长棒的垂直平分线结果在 \\(L\\gg d\\) 时变成什么？在 \\(d\\gg L\\) 时又变成什么？ · What does the finite-rod perpendicular-bisector result become for \\(L\\gg d\\)? For \\(d\\gg L\\)?",
      "圆环轴线上圆心处和远场处的场分别是什么？中间哪里最大？ · What is the ring-axis field at the center and far away, and where is it maximum in between?",
      "为什么无限大均匀平面的场与距离无关？圆盘结果如何过渡到这个极限？ · Why is the field of an infinite uniform plane independent of distance, and how does the disk result approach this limit?",
      "半圆弧在圆心处的场为什么不是零？整圆为什么是零？ · Why is the field at the center of a semicircular arc nonzero, while that of a complete ring is zero?",
      "无限长均匀带电圆柱的外部场为什么与同轴线电荷密度的直线相同？内部场又如何随 \\(r\\) 变化？ · Why is the exterior field of an infinitely long uniformly charged cylinder the same as that of a line with the same linear charge density, and how does the interior field vary with \\(r\\)?"
    ],
    "vocabulary": [
      {
        "termZh": "连续电荷分布",
        "termEn": "continuous charge distribution",
        "defZh": "电荷连续分布在线、面或体积中的带电体；需用积分而不是逐个点电荷求和。",
        "defEn": "A charged body whose charge is spread continuously along a line, surface, or volume; its field requires integration rather than a sum over individual point charges."
      },
      {
        "termZh": "电荷元",
        "termEn": "charge element",
        "defZh": "连续分布中取出的无穷小电荷 \\(\\mathrm{d}q\\)，可近似为点电荷。",
        "defEn": "An infinitesimal charge \\(\\mathrm{d}q\\) taken from a continuous distribution, treated as a point charge."
      },
      {
        "termZh": "线电荷密度",
        "termEn": "linear charge density",
        "defZh": "单位长度的电荷量 \\(\\lambda=\\dfrac{\\mathrm{d}q}{\\mathrm{d}l}\\)，单位为 \\(\\mathrm{C\\,m^{-1}}\\)。",
        "defEn": "Charge per unit length, \\(\\lambda=\\dfrac{\\mathrm{d}q}{\\mathrm{d}l}\\), in \\(\\mathrm{C\\,m^{-1}}\\)."
      },
      {
        "termZh": "面电荷密度",
        "termEn": "surface charge density",
        "defZh": "单位面积的电荷量 \\(\\sigma=\\dfrac{\\mathrm{d}q}{\\mathrm{d}A}\\)，单位为 \\(\\mathrm{C\\,m^{-2}}\\)。",
        "defEn": "Charge per unit area, \\(\\sigma=\\dfrac{\\mathrm{d}q}{\\mathrm{d}A}\\), in \\(\\mathrm{C\\,m^{-2}}\\)."
      },
      {
        "termZh": "体电荷密度",
        "termEn": "volume charge density",
        "defZh": "单位体积的电荷量 \\(\\rho=\\dfrac{\\mathrm{d}q}{\\mathrm{d}V}\\)，单位为 \\(\\mathrm{C\\,m^{-3}}\\)。",
        "defEn": "Charge per unit volume, \\(\\rho=\\dfrac{\\mathrm{d}q}{\\mathrm{d}V}\\), in \\(\\mathrm{C\\,m^{-3}}\\)."
      },
      {
        "termZh": "对称性",
        "termEn": "symmetry",
        "defZh": "电荷分布在某些变换下保持不变的性质；可用来判断哪些场分量相消。",
        "defEn": "A property of a charge distribution that remains unchanged under certain transformations; it identifies which field components cancel."
      },
      {
        "termZh": "叠加原理",
        "termEn": "superposition principle",
        "defZh": "多个电荷产生的电场等于各自电场的矢量和，是连续分布积分的基础。",
        "defEn": "The electric field of several charges is the vector sum of their individual fields, the basis for integrating a continuous distribution."
      },
      {
        "termZh": "电场积分",
        "termEn": "electric-field integral",
        "defZh": "把全部电荷元的场强微元按矢量累加，\\(\\vec E=\\int\\mathrm{d}\\vec E\\)。",
        "defEn": "The vector accumulation of all charge-element field contributions, \\(\\vec E=\\int\\mathrm{d}\\vec E\\)."
      }
    ]
  },
  "8.8": {
    "id": "em/em-u8/8.8",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.8",
    "titleZh": "电力、引力与宏观物性",
    "titleEn": "Electric and Gravitational Forces in Matter",
    "layer": "ap",
    "summary": "电力可吸引也可排斥，引力总是吸引；两者都按平方反比衰减，但电磁耦合比引力强约 \\(10^{20}\\) 倍以上。宏观物体近似电中性，所以大尺度上天体运动由引力主导，而日常接触力与材料性质仍来自大量微观电磁相互作用。 · Electric forces can attract or repel, whereas gravity always attracts; both fall off as inverse squares, but the electromagnetic coupling is more than twenty orders of magnitude stronger than gravity. Macroscopic matter is nearly neutral, so gravity dominates astronomical scales while everyday contact forces and material properties still arise from countless microscopic electromagnetic interactions.",
    "learningObjectives": [
      "能解释支持力、摩擦力、张力、弹性和材料强度等宏观性质如何来自大量微观电磁相互作用的平均。 · Explain how normal force, friction, tension, elasticity, and material strength arise from averages of countless microscopic electromagnetic interactions.",
      "能比较两个带质量与电荷物体所受的电力与引力，计算 \\(\\dfrac{F_e}{F_g}\\) 并判断哪种力更重要。 · Compare the electric and gravitational forces on two objects with mass and charge, calculate \\(\\dfrac{F_e}{F_g}\\), and decide which force is more important.",
      "能解释为什么引力在原子尺度可忽略，却在天体尺度主导运动，并用宏观电中性论证。 · Explain why gravity is negligible at atomic scales yet dominates astronomical motion, using macroscopic electrical neutrality as evidence.",
      "能说明带质量带电物体之间电力与引力的方向规则：电力可吸引或排斥，引力总是吸引，并用电子—电子、电子—质子等例子比较两种力。 · State the direction rules for electric and gravitational forces between charged objects with mass: electric forces can attract or repel while gravity always attracts, and compare the two forces for cases such as electron–electron and electron–proton."
    ],
    "essentialKnowledge": [
      "宏观物体的支持力、摩擦力、张力、弹力、黏附、表面张力和材料强度，本质上都是原子和分子间电磁相互作用的集体表现；由于粒子数极大，逐项求和不现实，因此用宏观力模型描述。 · Normal force, friction, tension, elasticity, adhesion, surface tension, and material strength are collective manifestations of electromagnetic interactions among atoms and molecules; because the number of particles is enormous, summing each interaction is impractical, so macroscopic force models are used.",
      "库仑力与引力都按 \\(\\dfrac{1}{r^{2}}\\) 衰减，但电磁耦合远强于引力：\\(k\\approx8.99\\times10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}\\)，\\(G\\approx6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\)。 · Both the Coulomb force and gravity fall off as \\(\\dfrac{1}{r^{2}}\\), but the electromagnetic coupling is far stronger: \\(k\\approx8.99\\times10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}\\) versus \\(G\\approx6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}\\).",
      "对两个带质量与电荷的物体，\\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\)；对电子与质子，这个比值约为 \\(2\\times10^{39}\\)，所以原子尺度上引力可忽略。 · For two objects with mass and charge, \\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\); for an electron and a proton this ratio is about \\(2\\times10^{39}\\), so gravity is negligible at atomic scales.",
      "引力总是吸引；电力可以吸引也可以排斥。宏观物体可以通过正负电荷几乎完全抵消净电荷，而质量没有正负，不能抵消。 · Gravity is always attractive; electric forces can attract or repel. Macroscopic objects can nearly cancel their net charge through positive and negative charges, whereas mass has no sign and cannot cancel.",
      "大尺度系统（行星、恒星、星系）近似电中性，净电荷与质量相比极小；残余电力被屏蔽或平均掉，而引力虽弱却随质量单调累加，因此主导天体运动。 · Large-scale systems (planets, stars, galaxies) are nearly electrically neutral, with negligible net charge compared with mass; residual electric forces are screened or average out, while weak gravity adds monotonically with mass and therefore dominates astronomical motion.",
      "若宏观物体带有显著净电荷，电力会远大于引力；例如两个各带 \\(1.0\\,\\mathrm{\\mu C}\\)、质量 \\(1.0\\,\\mathrm{g}\\)、相距 \\(0.10\\,\\mathrm{m}\\) 的小球，电力约为引力的 \\(10^{14}\\) 倍。 · If macroscopic objects carry significant net charge, electric forces greatly exceed gravity; for two \\(1.0\\,\\mathrm{g}\\) spheres each with \\(1.0\\,\\mathrm{\\mu C}\\) separated by \\(0.10\\,\\mathrm{m}\\), the electric force is about \\(10^{14}\\) times the gravitational force.",
      "宏观电中性不等于没有电荷：物体内部有大量正负电荷，只是代数和接近零；接触力、化学键、弹性和摩擦都来自这些电荷的相互作用。 · Macroscopic neutrality does not mean no charge: objects contain enormous positive and negative charge whose sum is nearly zero; contact forces, chemical bonds, elasticity, and friction all arise from these charges.",
      "在极大尺度上，电磁力还可能被等离子体中的自由电荷屏蔽（德拜屏蔽），而引力无法被屏蔽。 · On very large scales, electromagnetic forces can also be screened by free charges in a plasma (Debye screening), whereas gravity cannot be screened.",
      "两个带质量且带电的物体同时受到电力和引力：电力方向由电荷符号决定（同号相斥、异号相吸），引力方向总是相互吸引；两者都沿连线，大小都按 \\(\\dfrac{1}{r^{2}}\\) 衰减。 · Two objects that have both mass and charge experience both electric and gravitational forces: the electric direction depends on the signs (like charges repel, opposite charges attract), while gravity always attracts; both act along the line joining them and fall off as \\(\\dfrac{1}{r^{2}}\\).",
      "同号电荷时，电力与引力方向相反，净力是二者的矢量和；异号电荷时两者都吸引，但电力通常强得多。比较方向时必须先判断电荷符号，再判断哪种力占优。 · For like charges, the electric and gravitational forces point in opposite directions and the net force is their vector sum; for opposite charges both attract, but the electric force is usually far stronger. To compare directions, first determine the signs and then decide which force dominates."
    ],
    "definition": "电力与引力都是存在于两个物体之间的平方反比力。电力由电荷产生，可吸引或排斥；引力由质量产生，总是吸引。对两个带质量与电荷的物体，电力与引力的大小之比为 \\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\)。虽然电磁耦合远强于引力，但宏观物体和天体通常近似电中性，净电力很小，因此在大尺度上天体运动由引力主导；而日常接触力与材料性质仍是大量微观电磁相互作用的宏观表现。 · Electric and gravitational forces are both inverse-square forces between two objects. Electric forces arise from charge and can attract or repel; gravitational forces arise from mass and always attract. For two objects with mass and charge, the ratio of electric to gravitational force is \\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\). Although the electromagnetic coupling is far stronger, macroscopic objects and astronomical bodies are nearly neutral, so the net electric force is small; gravity therefore dominates on large scales, while everyday contact forces and material properties remain macroscopic manifestations of countless microscopic electromagnetic interactions.",
    "intuition": "把引力想成「只加不减的弱胶水」，把电力想成「很强但正负可抵消的弹簧」。在原子内部，电力把电子和原子核绑在一起；到了行星尺度，正负电荷几乎配对，净电力所剩无几，只有质量带来的引力还在累加。 · Think of gravity as a weak glue that only adds, and electric force as a very strong spring that can cancel because charges come in both signs. Inside atoms, electric forces bind electrons to nuclei; at planetary scales, positive and negative charges almost pair up, leaving little net electric force, while gravity from mass keeps adding.",
    "formulas": [
      {
        "latex": "F_e=k\\dfrac{|q_1q_2|}{r^{2}}",
        "note": "两个点电荷之间的电力大小。 · Magnitude of the electric force between two point charges."
      },
      {
        "latex": "F_g=G\\dfrac{m_1m_2}{r^{2}}",
        "note": "两个质点或球对称质量之间的引力大小。 · Magnitude of the gravitational force between two point masses or spherically symmetric masses."
      },
      {
        "latex": "\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}",
        "note": "同一距离下电力与引力的大小之比；\\(r^{2}\\) 被约去。 · Ratio of electric to gravitational force at the same distance; the \\(r^{2}\\) factors cancel."
      },
      {
        "latex": "k\\approx8.99\\times10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}",
        "note": "库仑常数。 · Coulomb's constant."
      },
      {
        "latex": "G\\approx6.67\\times10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}",
        "note": "万有引力常数。 · Gravitational constant."
      },
      {
        "latex": "\\dfrac{F_e}{F_g}\\approx2.3\\times10^{39}\\quad(\\text{electron-proton})",
        "note": "电子与质子在相同距离下的电力与引力之比。 · Ratio of electric to gravitational force for an electron and a proton at the same distance."
      },
      {
        "latex": "Q_{\\mathrm{net}}=\\sum_i q_i\\approx0",
        "note": "宏观电中性：正负电荷的代数和接近零。 · Macroscopic neutrality: the algebraic sum of positive and negative charge is nearly zero."
      }
    ],
    "derivationNotes": [
      {
        "from": "库仑定律与牛顿引力定律 · Coulomb's law and Newton's law of gravitation",
        "to": "力之比 · Force ratio",
        "note": "把两式相除：\\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\)。 · Divide the two expressions: \\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\)."
      },
      {
        "from": "约去距离 · Cancel the distance",
        "to": "与距离无关的比值 · Distance-independent ratio",
        "note": "\\(r^{2}\\) 约去，说明两种力按相同方式衰减，谁更强只取决于电荷、质量和耦合常数。 · The \\(r^{2}\\) factors cancel, showing that both forces fall off the same way; which is stronger depends only on charge, mass, and the coupling constants."
      },
      {
        "from": "电子与质子的数据 · Electron and proton data",
        "to": "数量级比较 · Order-of-magnitude comparison",
        "note": "代入 \\(e\\)、\\(m_e\\)、\\(m_p\\) 得 \\(\\dfrac{F_e}{F_g}\\approx2.3\\times10^{39}\\)，所以原子中引力可忽略。 · Substituting \\(e\\), \\(m_e\\), and \\(m_p\\) gives \\(\\dfrac{F_e}{F_g}\\approx2.3\\times10^{39}\\), so gravity is negligible in atoms."
      },
      {
        "from": "宏观电中性 · Macroscopic neutrality",
        "to": "大尺度引力主导 · Gravity dominance at large scales",
        "note": "天体正负电荷几乎完全抵消，净电荷 \\(Q_{\\mathrm{net}}\\approx0\\)；质量无正负，引力持续累加。 · Astronomical bodies have almost complete cancellation of positive and negative charge, \\(Q_{\\mathrm{net}}\\approx0\\); mass has no sign, so gravity keeps adding."
      },
      {
        "from": "微观电磁作用 · Microscopic electromagnetic interactions",
        "to": "宏观接触力 · Macroscopic contact forces",
        "note": "对大量原子和分子的电磁作用求平均，得到支持力、摩擦力、张力、弹力等宏观模型。 · Averaging electromagnetic interactions over many atoms and molecules gives macroscopic models such as normal force, friction, tension, and elasticity."
      }
    ],
    "conditions": [
      "点电荷、质点或球对称分布；\\(r\\) 为两者中心距离。 · Point charges, point masses, or spherically symmetric distributions; \\(r\\) is the center-to-center distance.",
      "比较两种力时必须在相同距离 \\(r\\) 下进行，否则 \\(r^{2}\\) 不能约去。 · Compare the two forces at the same distance \\(r\\), or the \\(r^{2}\\) factors will not cancel.",
      "电力使用净电荷，而不是物体内部正负电荷的绝对值之和。 · Use net charge for the electric force, not the sum of the absolute values of internal positive and negative charges.",
      "宏观电中性是近似：净电荷不必严格为零，但只要远小于内部电荷总量，电力就远小于引力。 · Macroscopic neutrality is an approximation: the net charge need not be exactly zero, but if it is tiny compared with the total internal charge, electric forces are far smaller than gravity.",
      "在原子和分子尺度还要考虑量子效应、化学键和短程力；牛顿引力通常可忽略。 · At atomic and molecular scales, quantum effects, chemical bonds, and short-range forces also matter; Newtonian gravity is usually negligible.",
      "在等离子体或导体中，自由电荷会重新分布并屏蔽电场；引力不会被屏蔽。 · In plasmas or conductors, free charges redistribute and screen electric fields; gravity is not screened."
    ],
    "keyPoints": [
      "两种力都是平方反比，但电磁耦合比引力强约 \\(10^{20}\\) 倍以上。 · Both forces are inverse-square, but the electromagnetic coupling is more than about \\(10^{20}\\) times stronger.",
      "电力可吸引或排斥，引力总是吸引。 · Electric forces can attract or repel; gravity always attracts.",
      "力之比 \\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\) 与距离无关。 · The ratio \\(\\dfrac{F_e}{F_g}=\\dfrac{k|q_1q_2|}{Gm_1m_2}\\) is independent of distance.",
      "电子与质子的 \\(\\dfrac{F_e}{F_g}\\approx2\\times10^{39}\\)，原子尺度上引力可忽略。 · For an electron and a proton, \\(\\dfrac{F_e}{F_g}\\approx2\\times10^{39}\\), so gravity is negligible at atomic scales.",
      "宏观物体近似电中性，净电力很小；质量不能抵消，所以大尺度上引力主导。 · Macroscopic objects are nearly neutral, so net electric forces are small; mass cannot cancel, so gravity dominates on large scales.",
      "接触力和材料性质来自大量微观电磁相互作用的平均，不是一种新的基本力。 · Contact forces and material properties arise from averages of countless microscopic electromagnetic interactions, not from a new fundamental force.",
      "德拜屏蔽可以进一步削弱大尺度上的电力，而引力无法被屏蔽。 · Debye screening can further weaken electric forces on large scales, whereas gravity cannot be screened."
    ],
    "misconceptions": [
      "认为「引力主导」就意味着引力更强；引力只是在电中性的大尺度系统上占优势，单个带电粒子之间电力强得多。 · Thinking “gravity dominates” means gravity is stronger; gravity only wins in neutral large-scale systems, while electric forces between individual charged particles are far stronger.",
      "认为电中性物体之间没有电磁力；中性物体仍可通过电荷极化产生吸引力，接触力也来自电磁作用。 · Thinking neutral objects exert no electromagnetic forces; neutral objects can still attract through polarization, and contact forces are electromagnetic.",
      "认为接触力是一种与电磁力并列的基本力；支持力、摩擦力、张力都是电磁相互作用的宏观表现。 · Thinking contact force is a fundamental force separate from electromagnetism; normal force, friction, and tension are macroscopic manifestations of electromagnetic interactions.",
      "认为质量和电荷总是同等重要；电荷可以为零或正负抵消，质量不能抵消。 · Thinking mass and charge are always equally important; charge can be zero or cancel, whereas mass cannot cancel.",
      "把物体内部正负电荷的绝对值之和当作净电荷代入库仑定律。 · Substituting the sum of the absolute values of internal positive and negative charges as the net charge in Coulomb's law.",
      "认为电力总是比引力强；若两个物体的净电荷几乎为零，引力可能反而占优。 · Thinking electric forces are always stronger; if the net charge is nearly zero, gravity can dominate instead.",
      "认为大尺度电力一定为零；净电荷只是很小，残余电力可能被屏蔽或平均，但在局部仍可能存在。 · Thinking electric forces are exactly zero on large scales; the net charge is only very small, and residual electric fields may be screened or averaged but can still exist locally."
    ],
    "examples": [
      {
        "title": "例 1 · 电子与质子的电力/引力之比 · Example 1: Electric-to-gravitational force ratio for an electron and a proton",
        "prompt": "电子与质子相距 \\(r\\)。求它们之间电力与引力的大小之比，并说明这个结果对原子结构意味着什么。 · An electron and a proton are separated by \\(r\\). Find the ratio of the electric force to the gravitational force and explain what the result implies for atomic structure.",
        "steps": [
          "电力 \\(F_e=k\\dfrac{e^{2}}{r^{2}}\\)，引力 \\(F_g=G\\dfrac{m_e m_p}{r^{2}}\\)。 · Electric force \\(F_e=k\\dfrac{e^{2}}{r^{2}}\\), gravitational force \\(F_g=G\\dfrac{m_e m_p}{r^{2}}\\).",
          "相除得 \\(\\dfrac{F_e}{F_g}=\\dfrac{k e^{2}}{Gm_e m_p}\\)，距离 \\(r\\) 约去。 · Dividing gives \\(\\dfrac{F_e}{F_g}=\\dfrac{k e^{2}}{Gm_e m_p}\\), and the distance \\(r\\) cancels.",
          "代入 \\(k=8.99\\times10^{9}\\)、\\(e=1.60\\times10^{-19}\\)、\\(G=6.67\\times10^{-11}\\)、\\(m_e=9.11\\times10^{-31}\\)、\\(m_p=1.67\\times10^{-27}\\)。 · Substitute \\(k=8.99\\times10^{9}\\), \\(e=1.60\\times10^{-19}\\), \\(G=6.67\\times10^{-11}\\), \\(m_e=9.11\\times10^{-31}\\), and \\(m_p=1.67\\times10^{-27}\\).",
          "\\(\\dfrac{F_e}{F_g}\\approx2.3\\times10^{39}\\)。 · \\(\\dfrac{F_e}{F_g}\\approx2.3\\times10^{39}\\)."
        ],
        "solution": "电力约为引力的 \\(2\\times10^{39}\\) 倍；原子中引力完全可以忽略，电子与原子核的结合由电力主导。 · The electric force is about \\(2\\times10^{39}\\) times gravity; gravity is completely negligible in atoms, and electric forces dominate the binding of electrons to nuclei.",
        "solutionLatex": "\\dfrac{F_e}{F_g}=\\dfrac{k e^{2}}{Gm_e m_p}\\approx2.3\\times10^{39}"
      },
      {
        "title": "例 2 · 带电小球的电力与引力 · Example 2: Electric and gravitational forces between charged spheres",
        "prompt": "两个质量均为 \\(1.0\\,\\mathrm{g}\\) 的小球各带 \\(1.0\\,\\mathrm{\\mu C}\\) 的同号电荷，相距 \\(0.10\\,\\mathrm{m}\\)。求电力、引力以及它们的比值。 · Two \\(1.0\\,\\mathrm{g}\\) spheres each carry \\(1.0\\,\\mathrm{\\mu C}\\) of like charge and are \\(0.10\\,\\mathrm{m}\\) apart. Find the electric force, the gravitational force, and their ratio.",
        "steps": [
          "\\(F_e=k\\dfrac{q^{2}}{r^{2}}=(8.99\\times10^{9})\\dfrac{(1.0\\times10^{-6})^{2}}{(0.10)^{2}}\\approx0.90\\,\\mathrm{N}\\)。 · \\(F_e=k\\dfrac{q^{2}}{r^{2}}=(8.99\\times10^{9})\\dfrac{(1.0\\times10^{-6})^{2}}{(0.10)^{2}}\\approx0.90\\,\\mathrm{N}\\).",
          "\\(F_g=G\\dfrac{m^{2}}{r^{2}}=(6.67\\times10^{-11})\\dfrac{(1.0\\times10^{-3})^{2}}{(0.10)^{2}}\\approx6.7\\times10^{-15}\\,\\mathrm{N}\\)。 · \\(F_g=G\\dfrac{m^{2}}{r^{2}}=(6.67\\times10^{-11})\\dfrac{(1.0\\times10^{-3})^{2}}{(0.10)^{2}}\\approx6.7\\times10^{-15}\\,\\mathrm{N}\\).",
          "\\(\\dfrac{F_e}{F_g}\\approx\\dfrac{0.90}{6.7\\times10^{-15}}\\approx1.3\\times10^{14}\\)。 · \\(\\dfrac{F_e}{F_g}\\approx\\dfrac{0.90}{6.7\\times10^{-15}}\\approx1.3\\times10^{14}\\)."
        ],
        "solution": "\\(F_e\\approx0.90\\,\\mathrm{N}\\)（相斥），\\(F_g\\approx6.7\\times10^{-15}\\,\\mathrm{N}\\)（相吸），电力约为引力的 \\(1.3\\times10^{14}\\) 倍。 · \\(F_e\\approx0.90\\,\\mathrm{N}\\) (repulsive), \\(F_g\\approx6.7\\times10^{-15}\\,\\mathrm{N}\\) (attractive), and the electric force is about \\(1.3\\times10^{14}\\) times gravity.",
        "solutionLatex": "F_e\\approx0.90\\,\\mathrm{N},\\qquad F_g\\approx6.7\\times10^{-15}\\,\\mathrm{N},\\qquad \\dfrac{F_e}{F_g}\\approx1.3\\times10^{14}"
      },
      {
        "title": "例 3 · 为什么地球的引力支配月球？ · Example 3: Why does Earth's gravity govern the Moon?",
        "prompt": "地球与月球都含有大量正负电荷，但月球运动主要由地球引力决定。请用「宏观电中性」和力的叠加原理解释。 · Earth and the Moon both contain enormous positive and negative charge, yet the Moon's motion is governed mainly by Earth's gravity. Explain using macroscopic neutrality and superposition.",
        "steps": [
          "地球和月球整体近似电中性，净电荷 \\(Q_{\\mathrm{net}}\\approx0\\)；正负电荷的电场在远处几乎相互抵消。 · Earth and the Moon are approximately neutral overall, \\(Q_{\\mathrm{net}}\\approx0\\); the fields of their positive and negative charges nearly cancel at large distances.",
          "即使有微小净电荷，等离子体和导体中的自由电荷也会重新分布，屏蔽大尺度电场。 · Even a small net charge would be redistributed by free charges in plasmas and conductors, screening the large-scale electric field.",
          "质量没有正负，地球和月球的质量始终同号相加，引力不会被抵消；虽然 \\(G\\) 很小，但两天体质量极大，引力仍主导轨道运动。 · Mass has no sign, so the masses of Earth and the Moon always add; gravity cannot cancel. Although \\(G\\) is small, the masses are enormous, so gravity still governs the orbit.",
          "因此「引力主导」不是因为引力耦合更强，而是因为大尺度系统电中性，电力被抵消或屏蔽。 · Thus “gravity dominates” is not because the gravitational coupling is stronger, but because large-scale systems are neutral and electric forces cancel or are screened."
        ],
        "solution": "地球与月球近似电中性，净电力可忽略；质量不能抵消，引力随质量累加，所以主导月球运动。 · Earth and the Moon are nearly neutral, so the net electric force is negligible; mass cannot cancel, and gravity accumulates with mass, so it governs the Moon's motion."
      },
      {
        "title": "例 4 · 评价「引力更强」的说法 · Example 4: Evaluating the claim that gravity is stronger",
        "prompt": "有同学说：「既然引力支配太阳系，那么两个质子之间的引力一定比电力强。」请评价这个说法，并用计算支持你的结论。 · A student says: “Since gravity governs the solar system, the gravitational force between two protons must be stronger than the electric force.” Evaluate this claim and support your conclusion with a calculation.",
        "steps": [
          "对两个质子，\\(\\dfrac{F_e}{F_g}=\\dfrac{k e^{2}}{Gm_p^{2}}\\)。 · For two protons, \\(\\dfrac{F_e}{F_g}=\\dfrac{k e^{2}}{Gm_p^{2}}\\).",
          "代入数值：\\(\\dfrac{F_e}{F_g}\\approx\\dfrac{(8.99\\times10^{9})(1.60\\times10^{-19})^{2}}{(6.67\\times10^{-11})(1.67\\times10^{-27})^{2}}\\approx1.2\\times10^{36}\\)。 · Substituting values gives \\(\\dfrac{F_e}{F_g}\\approx\\dfrac{(8.99\\times10^{9})(1.60\\times10^{-19})^{2}}{(6.67\\times10^{-11})(1.67\\times10^{-27})^{2}}\\approx1.2\\times10^{36}\\).",
          "所以两个质子之间电力远强于引力；太阳系的引力主导来自天体的巨大质量和近似电中性，而不是单个粒子的力比较。 · Therefore the electric force between two protons is far stronger than gravity; gravity's dominance in the solar system comes from the enormous masses and near neutrality of astronomical bodies, not from a force comparison between individual particles."
        ],
        "solution": "说法错误。两个质子之间 \\(\\dfrac{F_e}{F_g}\\approx1.2\\times10^{36}\\)；引力主导太阳系是因为天体近似电中性和质量巨大。 · The claim is false. For two protons, \\(\\dfrac{F_e}{F_g}\\approx1.2\\times10^{36}\\); gravity governs the solar system because astronomical bodies are nearly neutral and extremely massive.",
        "solutionLatex": "\\dfrac{F_e}{F_g}=\\dfrac{k e^{2}}{Gm_p^{2}}\\approx1.2\\times10^{36}"
      },
      {
        "title": "例 5 · 两个电子的电力与引力方向 · Example 5: Directions of electric and gravitational forces between two electrons",
        "prompt": "两个电子相距 \\(1.0\\,\\mathrm{nm}\\)。分别求它们之间电力与引力的大小和方向，并比较两种力。 · Two electrons are \\(1.0\\,\\mathrm{nm}\\) apart. Find the magnitude and direction of the electric and gravitational forces between them, and compare the two.",
        "steps": [
          "电子带同号负电荷，电力相斥；电子有质量，引力总是相吸。两种力方向相反。 · The electrons have the same negative charge, so the electric force is repulsive; they have mass, so gravity is always attractive. The two forces point in opposite directions.",
          "电力 \\(F_e=k\\dfrac{e^{2}}{r^{2}}=(8.99\\times10^{9})\\dfrac{(1.60\\times10^{-19})^{2}}{(1.0\\times10^{-9})^{2}}\\approx2.3\\times10^{-10}\\,\\mathrm{N}\\)。 · Electric force \\(F_e=k\\dfrac{e^{2}}{r^{2}}=(8.99\\times10^{9})\\dfrac{(1.60\\times10^{-19})^{2}}{(1.0\\times10^{-9})^{2}}\\approx2.3\\times10^{-10}\\,\\mathrm{N}\\).",
          "引力 \\(F_g=G\\dfrac{m_e^{2}}{r^{2}}=(6.67\\times10^{-11})\\dfrac{(9.11\\times10^{-31})^{2}}{(1.0\\times10^{-9})^{2}}\\approx5.5\\times10^{-53}\\,\\mathrm{N}\\)。 · Gravitational force \\(F_g=G\\dfrac{m_e^{2}}{r^{2}}=(6.67\\times10^{-11})\\dfrac{(9.11\\times10^{-31})^{2}}{(1.0\\times10^{-9})^{2}}\\approx5.5\\times10^{-53}\\,\\mathrm{N}\\).",
          "比值 \\(\\dfrac{F_e}{F_g}\\approx4.2\\times10^{42}\\)，电力远强于引力；但两者方向相反，净力几乎就是斥力。 · The ratio is \\(\\dfrac{F_e}{F_g}\\approx4.2\\times10^{42}\\), so the electric force is far stronger; because the two forces point in opposite directions, the net force is essentially the repulsive electric force."
        ],
        "solution": "电力约 \\(2.3\\times10^{-10}\\,\\mathrm{N}\\)，相斥；引力约 \\(5.5\\times10^{-53}\\,\\mathrm{N}\\)，相吸；电力约为引力的 \\(4.2\\times10^{42}\\) 倍。 · Electric force about \\(2.3\\times10^{-10}\\,\\mathrm{N}\\), repulsive; gravitational force about \\(5.5\\times10^{-53}\\,\\mathrm{N}\\), attractive; the electric force is about \\(4.2\\times10^{42}\\) times gravity.",
        "solutionLatex": "F_e\\approx2.3\\times10^{-10}\\,\\mathrm{N}\\ (\\text{repulsive}),\\quad F_g\\approx5.5\\times10^{-53}\\,\\mathrm{N}\\ (\\text{attractive}),\\quad \\dfrac{F_e}{F_g}\\approx4.2\\times10^{42}"
      }
    ],
    "examTips": [
      "比较两种力时先写比值 \\(\\dfrac{F_e}{F_g}\\)，距离 \\(r\\) 会自动约去。 · When comparing the two forces, write the ratio \\(\\dfrac{F_e}{F_g}\\) first; the distance \\(r\\) cancels automatically.",
      "电力用净电荷，引力用质量；不要用内部正负电荷的绝对值之和。 · Use net charge for the electric force and mass for gravity; do not use the sum of the absolute values of internal charges.",
      "「引力更强」与「引力主导」不是同一句话；后者需要说明大尺度系统近似电中性。 · “Gravity is stronger” and “gravity dominates” are not the same statement; the latter requires explaining that large-scale systems are nearly neutral.",
      "解释接触力时，用「大量原子/分子间电磁相互作用的宏观平均」这一因果链。 · When explaining contact forces, use the causal chain “macroscopic average of electromagnetic interactions among countless atoms and molecules.”",
      "数量级题先算 \\(\\dfrac{k}{G}\\sim10^{20}\\)，再乘上电荷质量比，能快速判断电力还是引力占优。 · For order-of-magnitude questions, first use \\(\\dfrac{k}{G}\\sim10^{20}\\), then multiply by the charge-to-mass ratio to decide quickly whether electric or gravitational forces dominate."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.1",
        "title": "电荷与力 · Electric Charge and Force",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律 · Gauss's Law",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.10",
        "title": "绝缘体电荷与内部电场 · Charge and Fields inside Insulators",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "electric-field",
        "title": "电场线与等势 · Field lines and equipotentials"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：8.1 的库仑定律给出电力，牛顿引力定律给出引力，两者形式相似但耦合强度不同。 · Upstream: Coulomb's law from 8.1 gives the electric force, and Newton's law of gravitation gives gravity; the forms are similar but the coupling strengths differ.",
      "下游：8.10 解释绝缘体中的电荷分布，8.11 提供由电荷密度求包围电荷的工具，用于判断净电荷。 · Downstream: 8.10 explains charge distribution in insulators, and 8.11 provides the tools to find enclosed charge from charge density, which helps assess net charge.",
      "跨学科：材料科学中的弹性、摩擦、黏附和断裂都来自原子间电磁作用；天体物理中的结构形成主要由引力驱动。 · Cross-disciplinary: elasticity, friction, adhesion, and fracture in materials science arise from interatomic electromagnetic interactions; structure formation in astrophysics is driven mainly by gravity.",
      "科学本质：宏观模型是微观相互作用的粗粒化；接触力不是新的基本力，而是电磁相互作用的集体行为。 · Nature of science: macroscopic models are coarse-grained descriptions of microscopic interactions; contact force is not a new fundamental force but collective electromagnetic behavior."
    ],
    "intuitionDetailed": "先比较两种力的「配方」：电力有电荷这个源，电荷有正负，因此力可以吸引或排斥；引力有质量这个源，质量只有正的，因此力总是吸引。两者都按 \\(\\dfrac{1}{r^{2}}\\) 衰减，所以距离不会改变谁更强，真正决定强弱的是耦合常数和「源」的大小。电磁耦合常数 \\(k\\) 比 \\(G\\) 大约 \\(10^{20}\\) 倍，而电子、质子的电荷质量比又极大，所以原子尺度上电力完胜。到了宏观尺度，物体由几乎等量的正负电荷组成，净电荷可能只有几个元电荷甚至为零；电力的「源」被大幅抵消，而质量没有抵消机制，地球、太阳这样的大质量天体产生的引力可以累加。再加上等离子体中的自由电荷会屏蔽电场，大尺度上就只剩引力在主导。另一方面，两个物体接触时，原子间距离极小，电磁作用极强，虽然正负电荷总体抵消，但局部电荷分布会产生支持力、摩擦力、黏附等宏观效果；这就是为什么日常接触力本质上是电磁力。 · First compare the “recipes” of the two forces: electric force has charge as its source, and charge comes in two signs, so the force can attract or repel; gravity has mass as its source, and mass is only positive, so gravity always attracts. Both fall off as \\(\\dfrac{1}{r^{2}}\\), so distance does not change which is stronger; the coupling constants and the sizes of the “sources” do. The electromagnetic coupling constant \\(k\\) is about \\(10^{20}\\) times larger than \\(G\\), and the charge-to-mass ratios of electrons and protons are enormous, so electric forces win completely at atomic scales. At macroscopic scales, objects consist of nearly equal positive and negative charge, so the net charge may be only a few elementary charges or zero; the electric “source” is largely cancelled, while mass has no cancellation mechanism, so the gravity of massive bodies such as Earth and the Sun can accumulate. In addition, free charges in plasmas screen electric fields, leaving gravity to dominate on large scales. On the other hand, when two objects touch, interatomic distances are tiny and electromagnetic interactions are extremely strong; although positive and negative charge cancel overall, the local charge distribution produces normal force, friction, adhesion, and other macroscopic effects. This is why everyday contact forces are fundamentally electromagnetic.",
    "development": [
      "从库仑定律和牛顿引力定律写出两种力的表达式，比较它们的平方反比形式。 · Write the electric and gravitational force laws and compare their inverse-square forms.",
      "把两式相除，得到与距离无关的力之比，并说明每一项的物理意义。 · Divide the two expressions to obtain a distance-independent force ratio, and explain the meaning of each factor.",
      "代入电子—质子、质子—质子和宏观带电小球的数据，比较数量级。 · Substitute data for electron-proton, proton-proton, and macroscopic charged spheres, and compare orders of magnitude.",
      "用宏观电中性解释为什么大尺度上净电力很小，而质量可以累加。 · Use macroscopic neutrality to explain why net electric forces are small on large scales while mass can accumulate.",
      "把微观电磁作用粗粒化为接触力，解释支持力、摩擦力和材料性质。 · Coarse-grain microscopic electromagnetic interactions into contact forces and explain normal force, friction, and material properties."
    ],
    "checks": [
      "为什么两个质子之间的电力远强于引力，但太阳系仍由引力主导？ · Why is the electric force between two protons far stronger than gravity, yet the solar system is still governed by gravity?",
      "两个带电物体的电力与引力之比与距离有关吗？为什么？ · Does the ratio of electric to gravitational force between two charged objects depend on distance? Why?",
      "「宏观电中性」是否意味着物体内部没有电荷？ · Does “macroscopically neutral” mean there is no charge inside an object?",
      "支持力和摩擦力为什么可以看作电磁力？ · Why can normal force and friction be regarded as electromagnetic forces?",
      "如果地球带有显著净电荷，月球运动还会由引力主导吗？ · If Earth had a significant net charge, would the Moon's motion still be governed by gravity?",
      "两个同号带电的物体之间，电力与引力的方向相同还是相反？异号呢？ · For two objects with like charges, do the electric and gravitational forces point in the same or opposite directions? What about opposite charges?",
      "为什么说「引力总是吸引」而电力可以排斥？这与电荷的符号有什么关系？ · Why is gravity always attractive while electric forces can repel? How does this relate to the signs of charge?"
    ],
    "vocabulary": [
      {
        "termZh": "宏观力",
        "termEn": "macroscopic force",
        "defZh": "在宏观尺度上描述大量粒子集体效果的力，如支持力、摩擦力、张力。",
        "defEn": "A force describing the collective effect of many particles on a macroscopic scale, such as normal force, friction, or tension."
      },
      {
        "termZh": "接触力",
        "termEn": "contact force",
        "defZh": "两个物体接触时产生的宏观力；本质是大量微观电磁相互作用的平均。",
        "defEn": "A macroscopic force between touching objects; fundamentally an average of countless microscopic electromagnetic interactions."
      },
      {
        "termZh": "静电力",
        "termEn": "electrostatic force",
        "defZh": "静止电荷之间的作用力，由库仑定律描述，可吸引或排斥。",
        "defEn": "The force between stationary charges, described by Coulomb's law, which can attract or repel."
      },
      {
        "termZh": "引力",
        "termEn": "gravitational force",
        "defZh": "由质量产生、总是吸引的力，大小由牛顿引力定律描述。",
        "defEn": "A force produced by mass that always attracts, with magnitude described by Newton's law of gravitation."
      },
      {
        "termZh": "电中性",
        "termEn": "electrical neutrality",
        "defZh": "物体内部正负电荷的代数和为零或接近零的宏观状态。",
        "defEn": "A macroscopic state in which the algebraic sum of positive and negative charge in an object is zero or nearly zero."
      },
      {
        "termZh": "荷质比",
        "termEn": "charge-to-mass ratio",
        "defZh": "电荷量与质量的比值 \\(\\dfrac{q}{m}\\)，决定同一物体上电力与引力的相对重要性。",
        "defEn": "The ratio \\(\\dfrac{q}{m}\\) of charge to mass, which determines the relative importance of electric and gravitational forces on the same object."
      },
      {
        "termZh": "平方反比定律",
        "termEn": "inverse-square law",
        "defZh": "力的大小与距离平方成反比的规律，库仑力和牛顿引力都遵循。",
        "defEn": "A law in which force magnitude is inversely proportional to the square of distance, obeyed by both Coulomb's law and Newtonian gravity."
      },
      {
        "termZh": "屏蔽",
        "termEn": "screening",
        "defZh": "自由电荷重新分布以削弱外部电场的效果；等离子体中的德拜屏蔽是典型例子。",
        "defEn": "The redistribution of free charges that weakens an external electric field; Debye screening in a plasma is a typical example."
      }
    ]
  },
  "8.9": {
    "id": "em/em-u8/8.9",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.9",
    "titleZh": "介电率与电极化",
    "titleEn": "Permittivity and Electric Polarization",
    "layer": "ap",
    "summary": "介电率（电容率）\\(\\varepsilon\\) 描述材料在外电场中被极化的程度，也决定材料内部电场与电容的大小。真空介电率 \\(\\varepsilon_0\\) 是常数；材料介电率 \\(\\varepsilon=\\kappa\\varepsilon_0\\)，相对介电常数 \\(\\kappa\\ge1\\)，由材料的组成与结构、电子改变构型的难易决定。极化产生束缚电荷，其反向场削弱材料内部场，使 \\(E=\\dfrac{E_0}{\\kappa}\\)、\\(C=\\kappa C_0\\)；导体中自由电荷可自由移动，绝缘体中电荷难以移动，因此二者的介电响应不同。 · Electric permittivity \\(\\varepsilon\\) describes how strongly a material is polarized by an applied field and determines the internal field and capacitance. The vacuum permittivity \\(\\varepsilon_0\\) is a constant; a material's permittivity is \\(\\varepsilon=\\kappa\\varepsilon_0\\), with relative permittivity \\(\\kappa\\ge1\\) set by composition, structure, and the ease with which electrons can change configurations. Polarization produces bound charge whose opposing field weakens the internal field, giving \\(E=\\dfrac{E_0}{\\kappa}\\) and \\(C=\\kappa C_0\\); conductors have freely moving charge carriers while insulators do not, so their dielectric responses differ.",
    "learningObjectives": [
      "能把介电率定义为材料在外电场中极化程度的量度，并区分真空介电率 \\(\\varepsilon_0\\)、材料介电率 \\(\\varepsilon\\) 和相对介电常数 \\(\\kappa\\)。 · Define permittivity as a measure of how strongly a material is polarized by an applied field, and distinguish the vacuum permittivity \\(\\varepsilon_0\\), the material permittivity \\(\\varepsilon\\), and the relative permittivity \\(\\kappa\\).",
      "能说明材料的组成、结构和电子改变构型的难易如何决定介电率，并区分导体与绝缘体的介电响应。 · Explain how composition, structure, and the ease with which electrons can change configurations determine permittivity, and distinguish the dielectric responses of conductors and insulators.",
      "能用 \\(\\varepsilon=\\kappa\\varepsilon_0\\)、\\(E=\\dfrac{E_0}{\\kappa}\\)、\\(C=\\kappa C_0\\) 和 \\(P=\\varepsilon_0\\chi_e E\\) 计算极化、内部场与电容，并分析孤立电容器与接电源电容器的能量变化。 · Use \\(\\varepsilon=\\kappa\\varepsilon_0\\), \\(E=\\dfrac{E_0}{\\kappa}\\), \\(C=\\kappa C_0\\), and \\(P=\\varepsilon_0\\chi_e E\\) to calculate polarization, internal field, and capacitance, and analyze energy changes in isolated versus battery-connected capacitors."
    ],
    "essentialKnowledge": [
      "介电率是材料在外电场中极化程度的量度：\\(\\varepsilon\\) 越大，材料越容易被极化，束缚电荷对内部场的削弱越强。 · Permittivity measures how strongly a material is polarized by an applied field: a larger \\(\\varepsilon\\) means easier polarization and stronger weakening of the internal field by bound charge.",
      "真空介电率是常数 \\(\\varepsilon_0\\approx8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)，出现在库仑常数 \\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\) 和高斯定律中。 · The vacuum permittivity is the constant \\(\\varepsilon_0\\approx8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\), appearing in Coulomb's constant \\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\) and in Gauss's law.",
      "材料的介电率与真空不同，差异来自材料的组成和结构：\\(\\varepsilon=\\kappa\\varepsilon_0\\)，相对介电常数 \\(\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1\\)；空气的 \\(\\kappa\\) 接近 1，玻璃约为 4–10，水约为 80。 · A material's permittivity differs from the vacuum value because of its composition and structure: \\(\\varepsilon=\\kappa\\varepsilon_0\\), with relative permittivity \\(\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1\\); air has \\(\\kappa\\) near 1, glass about 4–10, and water about 80.",
      "在给定材料中，介电率由电子改变构型的难易决定：电子被束缚得越紧、越难随外场重排，极化响应越弱、\\(\\kappa\\) 越小；极性分子容易取向、电子云容易变形，\\(\\kappa\\) 较大。 · In a given material, permittivity is determined by the ease with which electrons can change configurations: the more tightly bound the electrons and the harder they are to rearrange, the weaker the polarization response and the smaller \\(\\kappa\\); polar molecules that align easily and electron clouds that deform easily give larger \\(\\kappa\\).",
      "导体由电荷载流子容易移动的导电材料制成；静电平衡时导体内部 \\(E=0\\)，自由电荷分布在表面，因此不能用一个静态的相对介电常数来描述导体。 · Conductors are made of conducting materials whose charge carriers move easily; in electrostatic equilibrium \\(E=0\\) inside, free charge resides on the surface, so a conductor is not described by a static relative permittivity.",
      "绝缘体由电荷载流子难以移动的非导电材料制成；外电场使束缚电荷发生微小相对位移或使分子偶极取向，产生电极化，但电荷不能宏观迁移。 · Insulators are made of nonconducting materials whose charge carriers cannot move easily; an applied field slightly displaces bound charge or aligns molecular dipoles, producing electric polarization without macroscopic charge transport.",
      "电极化可模型化为外电场引起的电子重排与分子偶极取向，导致材料内部正负电荷中心分离；极化产生的束缚电荷在材料表面形成面电荷，其反向场削弱外场。 · Electric polarization can be modeled as field-induced electron rearrangement and molecular-dipole alignment, separating positive and negative charge centers within the material; the resulting bound charge forms surface charge whose opposing field weakens the applied field.",
      "线性、均匀、各向同性介质的内部场为 \\(E=\\dfrac{E_0}{\\kappa}\\)，其中 \\(E_0\\) 是自由电荷在真空中产生的场；极化强度 \\(P=\\varepsilon_0\\chi_e E\\)，电极化率 \\(\\chi_e=\\kappa-1\\)。 · For a linear, homogeneous, isotropic dielectric, the internal field is \\(E=\\dfrac{E_0}{\\kappa}\\), where \\(E_0\\) is the field the free charge would produce in vacuum; the polarization density is \\(P=\\varepsilon_0\\chi_e E\\), with electric susceptibility \\(\\chi_e=\\kappa-1\\).",
      "填满介质的平行板电容器电容为 \\(C=\\kappa C_0=\\dfrac{\\kappa\\varepsilon_0 A}{d}\\)；孤立电容器 \\(Q\\) 不变，插入介质后 \\(V=\\dfrac{V_0}{\\kappa}\\)、储能减小；接电源时 \\(V\\) 不变，\\(Q=\\kappa Q_0\\)、储能增大。 · A parallel-plate capacitor filled with a dielectric has \\(C=\\kappa C_0=\\dfrac{\\kappa\\varepsilon_0 A}{d}\\); for an isolated capacitor \\(Q\\) is fixed, so inserting the dielectric gives \\(V=\\dfrac{V_0}{\\kappa}\\) and stored energy decreases; with a battery connected \\(V\\) is fixed, so \\(Q=\\kappa Q_0\\) and stored energy increases.",
      "介电率不是对所有材料、所有条件都严格常数：它可随频率、温度和场强变化，强场下还可能发生击穿；在 AP 题中通常按给定的 \\(\\kappa\\) 作线性近似。 · Permittivity is not strictly constant for every material and condition: it can vary with frequency, temperature, and field strength, and strong fields can cause breakdown; AP problems normally use the given \\(\\kappa\\) as a linear approximation."
    ],
    "definition": "介电率（电容率）\\(\\varepsilon\\) 是描述材料在外电场中极化响应的物理量：\\(\\varepsilon\\) 越大，材料越容易被极化，内部场被束缚电荷削弱得越多。真空介电率 \\(\\varepsilon_0\\approx8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\) 是常数；材料介电率 \\(\\varepsilon=\\kappa\\varepsilon_0\\)，其中 \\(\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1\\) 为相对介电常数。极化是外场引起的电子重排与分子偶极取向，产生束缚电荷；束缚电荷的反向场使材料内部 \\(E=\\dfrac{E_0}{\\kappa}\\)。介电率由材料组成与结构决定，尤其取决于电子改变构型的难易：导体中载流子可自由移动，绝缘体中载流子难以移动。 · Electric permittivity \\(\\varepsilon\\) describes a material's polarization response to an applied field: a larger \\(\\varepsilon\\) means easier polarization and stronger weakening of the internal field by bound charge. The vacuum permittivity \\(\\varepsilon_0\\approx8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\) is constant; a material's permittivity is \\(\\varepsilon=\\kappa\\varepsilon_0\\), where \\(\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1\\) is the relative permittivity. Polarization is field-induced electron rearrangement and molecular-dipole alignment, producing bound charge whose opposing field gives \\(E=\\dfrac{E_0}{\\kappa}\\) inside. Permittivity is set by composition and structure, especially by the ease with which electrons can change configurations: charge carriers move freely in conductors but not easily in insulators.",
    "intuition": "把介质想成一群可拉伸的小偶极子：外电场一来，电子云向一边偏、原子核向另一边偏，分子也尝试转向，材料内部就出现一层层“被拉开”的正负电荷。这些束缚电荷在材料表面形成与自由电荷相反的电荷层，产生一个反向场，把外场抵消掉一部分；所以介质内部的场总比真空中小，\\(E=\\dfrac{E_0}{\\kappa}\\)。介电率就是描述“这种拉扯有多容易”的材料参数：电子被束缚得越紧、分子越难转向，\\(\\kappa\\) 越小；极性分子或容易变形的电子云则给出较大的 \\(\\kappa\\)。导体完全不同：它的自由电子会一直移动到内部场为零，所以导体没有静态的 \\(\\kappa\\)，而是把净电荷分布在表面。 · Think of a dielectric as a collection of stretchable little dipoles: when an external field appears, electron clouds shift one way and nuclei the other, and molecules try to rotate, creating layers of separated positive and negative charge inside the material. This bound charge forms surface layers opposite to the free charge and produces an opposing field that cancels part of the applied field; the field inside is therefore always smaller than in vacuum, \\(E=\\dfrac{E_0}{\\kappa}\\). Permittivity describes how easily this stretching happens: tightly bound electrons and molecules that cannot rotate give small \\(\\kappa\\), while polar molecules or easily deformed electron clouds give large \\(\\kappa\\). A conductor is completely different: its free electrons keep moving until the internal field is zero, so a conductor has no static \\(\\kappa\\) and instead puts its net charge on the surface.",
    "formulas": [
      {
        "latex": "\\varepsilon=\\kappa\\varepsilon_0",
        "note": "材料介电率与真空介电率的关系。 · Relation between a material's permittivity and the vacuum permittivity."
      },
      {
        "latex": "\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1",
        "note": "相对介电常数；真空为 1，材料通常大于 1。 · Relative permittivity; equal to 1 in vacuum and usually greater than 1 in matter."
      },
      {
        "latex": "\\varepsilon_0\\approx8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}",
        "note": "真空介电率，也是 \\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\) 中的常数。 · Vacuum permittivity, the constant in \\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\)."
      },
      {
        "latex": "E=\\dfrac{E_0}{\\kappa}",
        "note": "线性均匀介质内部场；\\(E_0\\) 为自由电荷在真空中的场。 · Internal field of a linear homogeneous dielectric; \\(E_0\\) is the free-charge field in vacuum."
      },
      {
        "latex": "C=\\kappa C_0=\\dfrac{\\kappa\\varepsilon_0 A}{d}",
        "note": "填满介质的平行板电容器。 · Parallel-plate capacitor filled with a dielectric."
      },
      {
        "latex": "P=\\varepsilon_0\\chi_e E,\\qquad \\chi_e=\\kappa-1",
        "note": "极化强度与电极化率；\\(P\\) 是单位体积的偶极矩。 · Polarization density and electric susceptibility; \\(P\\) is dipole moment per unit volume."
      },
      {
        "latex": "\\sigma_b=\\vec P\\cdot\\hat n",
        "note": "介质表面的束缚面电荷密度；\\(\\hat n\\) 为外法线。 · Bound surface charge density on a dielectric; \\(\\hat n\\) is the outward normal."
      },
      {
        "latex": "\\vec D=\\varepsilon\\vec E,\\qquad \\oint\\vec D\\cdot\\mathrm{d}\\vec A=Q_{\\mathrm{free}}",
        "note": "电位移矢量与介质中的高斯定律；只对自由电荷积分。 · Electric displacement and Gauss's law in a dielectric; only free charge is enclosed."
      }
    ],
    "derivationNotes": [
      {
        "from": "外电场 · Applied field",
        "to": "电极化 · Electric polarization",
        "note": "外场使电子云相对原子核位移、使分子偶极转向，材料内部正负电荷中心分离。 · The applied field displaces electron clouds relative to nuclei and rotates molecular dipoles, separating positive and negative charge centers inside the material."
      },
      {
        "from": "束缚电荷 · Bound charge",
        "to": "反向场 · Opposing field",
        "note": "极化在介质表面形成束缚面电荷，其场与自由电荷场方向相反，使净场减小。 · Polarization creates bound surface charge whose field opposes the free-charge field, reducing the net field."
      },
      {
        "from": "线性介质 · Linear dielectric",
        "to": "介电率 · Permittivity",
        "note": "极化强度与场强成正比 \\(P=\\varepsilon_0\\chi_e E\\)，定义 \\(\\varepsilon=\\varepsilon_0(1+\\chi_e)=\\kappa\\varepsilon_0\\)。 · Polarization is proportional to the field, \\(P=\\varepsilon_0\\chi_e E\\), and \\(\\varepsilon=\\varepsilon_0(1+\\chi_e)=\\kappa\\varepsilon_0\\)."
      },
      {
        "from": "电容定义 · Capacitance definition",
        "to": "介质电容 · Dielectric capacitance",
        "note": "\\(C=\\dfrac{Q}{V}\\)；填满介质后 \\(V\\) 变为 \\(\\dfrac{V_0}{\\kappa}\\)（\\(Q\\) 不变）或 \\(Q\\) 变为 \\(\\kappa Q_0\\)（\\(V\\) 不变），故 \\(C=\\kappa C_0\\)。 · \\(C=\\dfrac{Q}{V}\\); with a dielectric \\(V\\) becomes \\(\\dfrac{V_0}{\\kappa}\\) when \\(Q\\) is fixed, or \\(Q\\) becomes \\(\\kappa Q_0\\) when \\(V\\) is fixed, so \\(C=\\kappa C_0\\)."
      },
      {
        "from": "材料组成与结构 · Composition and structure",
        "to": "介电率大小 · Size of permittivity",
        "note": "电子改变构型越容易、极性分子越多，极化响应越强，\\(\\kappa\\) 越大；电子被紧紧束缚的材料 \\(\\kappa\\) 较小。 · The easier electrons can change configurations and the more polar the molecules, the stronger the polarization response and the larger \\(\\kappa\\); materials with tightly bound electrons have smaller \\(\\kappa\\)."
      },
      {
        "from": "导体与绝缘体 · Conductors and insulators",
        "to": "不同响应 · Different responses",
        "note": "导体中自由电荷宏观迁移直到内部 \\(E=0\\)；绝缘体中电荷被束缚，只能微小位移形成极化。 · Free charge in a conductor migrates macroscopically until \\(E=0\\) inside; charge in an insulator is bound and can only shift slightly to form polarization."
      }
    ],
    "conditions": [
      "线性、均匀、各向同性介质；\\(\\kappa\\) 在同一材料中近似为常数。 · Linear, homogeneous, isotropic dielectric; \\(\\kappa\\) is approximately constant within the material.",
      "介质未击穿；强场下会发生介电击穿，线性关系失效。 · The dielectric is not broken down; strong fields cause dielectric breakdown and the linear relation fails.",
      "\\(\\kappa\\) 可能随频率、温度和场强变化；题目给定 \\(\\kappa\\) 时按该值计算。 · \\(\\kappa\\) may vary with frequency, temperature, and field strength; use the value given in the problem.",
      "导体在静电平衡时内部 \\(E=0\\)，不能用一个静态 \\(\\kappa\\) 描述；介电率模型适用于绝缘介质。 · A conductor in electrostatic equilibrium has \\(E=0\\) inside and is not described by a static \\(\\kappa\\); the permittivity model applies to insulating dielectrics.",
      "若介质只部分填充电容器，需按串联、并联或分层模型处理，不能直接整个用 \\(C=\\kappa C_0\\)。 · If the dielectric only partially fills a capacitor, use series, parallel, or layered models; do not apply \\(C=\\kappa C_0\\) to the whole capacitor.",
      "区分自由电荷与束缚电荷：外加电场和电路提供的是自由电荷，极化产生的是束缚电荷。 · Distinguish free from bound charge: external fields and circuits supply free charge, while polarization produces bound charge."
    ],
    "keyPoints": [
      "介电率衡量材料被外电场极化的程度；\\(\\varepsilon\\) 越大，极化越强。 · Permittivity measures how strongly a material is polarized by an applied field; larger \\(\\varepsilon\\) means stronger polarization.",
      "真空介电率 \\(\\varepsilon_0\\) 是常数；材料介电率 \\(\\varepsilon=\\kappa\\varepsilon_0\\)，\\(\\kappa\\ge1\\)。 · The vacuum permittivity \\(\\varepsilon_0\\) is constant; a material's permittivity is \\(\\varepsilon=\\kappa\\varepsilon_0\\), with \\(\\kappa\\ge1\\).",
      "介电率差异来自材料组成和结构，尤其取决于电子改变构型的难易。 · Differences in permittivity come from composition and structure, especially the ease with which electrons can change configurations.",
      "导体中自由电荷可宏观迁移，静电平衡时内部 \\(E=0\\)；绝缘体中电荷被束缚，只能极化。 · Free charge in a conductor can migrate macroscopically, giving \\(E=0\\) inside at equilibrium; charge in an insulator is bound and can only polarize.",
      "极化产生束缚电荷，其反向场使介质内部 \\(E=\\dfrac{E_0}{\\kappa}\\)。 · Polarization produces bound charge whose opposing field gives \\(E=\\dfrac{E_0}{\\kappa}\\) inside the dielectric.",
      "填满介质的电容器 \\(C=\\kappa C_0\\)；孤立时 \\(Q\\) 不变、\\(V\\) 降低、储能减小；接电源时 \\(V\\) 不变、\\(Q\\) 增大、储能增大。 · A filled capacitor has \\(C=\\kappa C_0\\); when isolated, \\(Q\\) is fixed, \\(V\\) drops, and stored energy decreases; with a battery, \\(V\\) is fixed, \\(Q\\) increases, and stored energy increases.",
      "极化强度 \\(P=\\varepsilon_0\\chi_e E\\)，\\(\\chi_e=\\kappa-1\\)；束缚面电荷密度为 \\(\\sigma_b=\\vec P\\cdot\\hat n\\)。 · Polarization density \\(P=\\varepsilon_0\\chi_e E\\) with \\(\\chi_e=\\kappa-1\\); bound surface charge density is \\(\\sigma_b=\\vec P\\cdot\\hat n\\).",
      "介电率不是绝对常数，可随频率、温度和场强变化。 · Permittivity is not an absolute constant; it can vary with frequency, temperature, and field strength."
    ],
    "misconceptions": [
      "把介电率与极化混为一谈：\\(\\varepsilon\\) 是材料属性，\\(P\\) 是给定场强下的极化强度。 · Confusing permittivity with polarization: \\(\\varepsilon\\) is a material property, while \\(P\\) is the polarization density at a given field.",
      "认为插入介质会增强内部电场；束缚电荷的反向场使内部场减弱为 \\(\\dfrac{E_0}{\\kappa}\\)。 · Thinking a dielectric increases the internal field; bound charge produces an opposing field and reduces it to \\(\\dfrac{E_0}{\\kappa}\\).",
      "认为普通介电材料的 \\(\\kappa\\) 可以小于 1；通常 \\(\\kappa\\ge1\\)，真空为 1。 · Thinking ordinary dielectrics can have \\(\\kappa<1\\); normally \\(\\kappa\\ge1\\), with vacuum equal to 1.",
      "把导体也用一个静态 \\(\\kappa\\) 描述；导体中自由电荷会移动直到内部 \\(E=0\\)。 · Describing a conductor with a static \\(\\kappa\\); its free charge moves until \\(E=0\\) inside.",
      "认为 \\(\\varepsilon\\) 与 \\(\\varepsilon_0\\) 只是符号不同；两者数值和物理含义都不同，\\(\\varepsilon=\\kappa\\varepsilon_0\\)。 · Thinking \\(\\varepsilon\\) and \\(\\varepsilon_0\\) differ only in notation; they differ in value and meaning, with \\(\\varepsilon=\\kappa\\varepsilon_0\\).",
      "认为插入介质总是增加电容器储能；孤立电容器的储能减小，接电源时才增加。 · Thinking inserting a dielectric always increases stored energy; energy decreases for an isolated capacitor and increases only when connected to a battery.",
      "把束缚电荷当成自由电荷，或认为介质中的总电场只由自由电荷决定。 · Treating bound charge as free charge, or thinking the total field in a dielectric is set only by free charge.",
      "认为 \\(\\kappa\\) 对所有频率和温度都一样；极化机制有时间响应，\\(\\kappa\\) 会随频率和温度变化。 · Thinking \\(\\kappa\\) is the same at all frequencies and temperatures; polarization mechanisms have response times, so \\(\\kappa\\) varies."
    ],
    "examples": [
      {
        "title": "例 1 · 由电容求相对介电常数 · Example 1: Finding relative permittivity from capacitance",
        "prompt": "一个平行板电容器在真空中的电容为 \\(C_0=2.0\\,\\mathrm{pF}\\)。填满某种介质后电容变为 \\(C=7.0\\,\\mathrm{pF}\\)。求该介质的 \\(\\kappa\\) 和介电率 \\(\\varepsilon\\)。 · A parallel-plate capacitor has vacuum capacitance \\(C_0=2.0\\,\\mathrm{pF}\\). Filled with a dielectric, its capacitance becomes \\(C=7.0\\,\\mathrm{pF}\\). Find \\(\\kappa\\) and the permittivity \\(\\varepsilon\\) of the dielectric.",
        "steps": [
          "填满介质时 \\(C=\\kappa C_0\\)，所以 \\(\\kappa=\\dfrac{C}{C_0}\\)。 · With a filled dielectric, \\(C=\\kappa C_0\\), so \\(\\kappa=\\dfrac{C}{C_0}\\).",
          "\\(\\kappa=\\dfrac{7.0}{2.0}=3.5\\)。 · \\(\\kappa=\\dfrac{7.0}{2.0}=3.5\\).",
          "\\(\\varepsilon=\\kappa\\varepsilon_0=(3.5)(8.85\\times10^{-12})\\approx3.1\\times10^{-11}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)。 · \\(\\varepsilon=\\kappa\\varepsilon_0=(3.5)(8.85\\times10^{-12})\\approx3.1\\times10^{-11}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)."
        ],
        "solution": "\\(\\kappa=3.5\\)，\\(\\varepsilon\\approx3.1\\times10^{-11}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)。 · \\(\\kappa=3.5\\), \\(\\varepsilon\\approx3.1\\times10^{-11}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\).",
        "solutionLatex": "\\kappa=\\dfrac{C}{C_0}=3.5,\\qquad \\varepsilon=\\kappa\\varepsilon_0\\approx3.1\\times10^{-11}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}"
      },
      {
        "title": "例 2 · 介质内部场的削弱 · Example 2: Reduction of the internal field in a dielectric",
        "prompt": "某区域若为真空，自由电荷产生的场为 \\(E_0=1.2\\times10^{5}\\,\\mathrm{V\\,m^{-1}}\\)。填入 \\(\\kappa=2.5\\) 的均匀介质后，求介质内部场以及束缚电荷产生的反向场。 · In a region that would be vacuum, free charge produces \\(E_0=1.2\\times10^{5}\\,\\mathrm{V\\,m^{-1}}\\). After filling the region with a uniform dielectric of \\(\\kappa=2.5\\), find the internal field and the opposing field due to bound charge.",
        "steps": [
          "介质内部场 \\(E=\\dfrac{E_0}{\\kappa}\\)。 · The internal field is \\(E=\\dfrac{E_0}{\\kappa}\\).",
          "\\(E=\\dfrac{1.2\\times10^{5}}{2.5}=4.8\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)。 · \\(E=\\dfrac{1.2\\times10^{5}}{2.5}=4.8\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\).",
          "束缚电荷的反向场大小 \\(E_b=E_0-E=(1.2-0.48)\\times10^{5}=7.2\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)，方向与 \\(E_0\\) 相反。 · The bound-charge opposing field has magnitude \\(E_b=E_0-E=(1.2-0.48)\\times10^{5}=7.2\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\), opposite to \\(E_0\\)."
        ],
        "solution": "\\(E=4.8\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)，\\(E_b=7.2\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\) 且与 \\(E_0\\) 反向。 · \\(E=4.8\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\), and \\(E_b=7.2\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\) opposite to \\(E_0\\).",
        "solutionLatex": "E=\\dfrac{E_0}{\\kappa}=4.8\\times10^{4}\\,\\mathrm{V\\,m^{-1}},\\qquad E_b=E_0-E=7.2\\times10^{4}\\,\\mathrm{V\\,m^{-1}}"
      },
      {
        "title": "例 3 · 极化强度与束缚面电荷 · Example 3: Polarization density and bound surface charge",
        "prompt": "某线性介质 \\(\\kappa=3.0\\)，内部场 \\(E=4.0\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\)。求电极化率 \\(\\chi_e\\)、极化强度 \\(P\\)、束缚面电荷密度 \\(\\sigma_b\\) 和电位移 \\(D\\)。 · A linear dielectric has \\(\\kappa=3.0\\) and internal field \\(E=4.0\\times10^{4}\\,\\mathrm{V\\,m^{-1}}\\). Find the susceptibility \\(\\chi_e\\), polarization density \\(P\\), bound surface charge density \\(\\sigma_b\\), and electric displacement \\(D\\).",
        "steps": [
          "\\(\\chi_e=\\kappa-1=2.0\\)。 · \\(\\chi_e=\\kappa-1=2.0\\).",
          "\\(P=\\varepsilon_0\\chi_e E=(8.85\\times10^{-12})(2.0)(4.0\\times10^{4})\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\)。 · \\(P=\\varepsilon_0\\chi_e E=(8.85\\times10^{-12})(2.0)(4.0\\times10^{4})\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\).",
          "在垂直于 \\(\\vec P\\) 的表面，\\(\\sigma_b=P\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\)。 · On a surface perpendicular to \\(\\vec P\\), \\(\\sigma_b=P\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\).",
          "\\(D=\\varepsilon E=\\kappa\\varepsilon_0E=(3.0)(8.85\\times10^{-12})(4.0\\times10^{4})\\approx1.1\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\)。 · \\(D=\\varepsilon E=\\kappa\\varepsilon_0E=(3.0)(8.85\\times10^{-12})(4.0\\times10^{4})\\approx1.1\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\)."
        ],
        "solution": "\\(\\chi_e=2.0\\)，\\(P\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\)，\\(\\sigma_b\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\)，\\(D\\approx1.1\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\)。 · \\(\\chi_e=2.0\\), \\(P\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\), \\(\\sigma_b\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\), and \\(D\\approx1.1\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\).",
        "solutionLatex": "\\chi_e=2.0,\\quad P\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}},\\quad \\sigma_b\\approx7.1\\times10^{-7}\\,\\mathrm{C\\,m^{-2}},\\quad D\\approx1.1\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}"
      },
      {
        "title": "例 4 · 孤立与接电源电容器的能量 · Example 4: Energy of isolated versus battery-connected capacitors",
        "prompt": "一个 \\(C_0=4.0\\,\\mathrm{\\mu F}\\) 的平行板电容器先充电到 \\(V_0=12\\,\\mathrm{V}\\)。然后插入 \\(\\kappa=3.0\\) 的介质。(a) 若充电后断开电源，求新电容、电压和储能；(b) 若始终接在 12 V 电源上，求新电容、电荷和储能。 · A \\(C_0=4.0\\,\\mathrm{\\mu F}\\) parallel-plate capacitor is charged to \\(V_0=12\\,\\mathrm{V}\\). A dielectric with \\(\\kappa=3.0\\) is then inserted. (a) If the battery is disconnected after charging, find the new capacitance, voltage, and stored energy. (b) If the battery remains connected at 12 V, find the new capacitance, charge, and stored energy.",
        "steps": [
          "(a) 孤立时 \\(Q=C_0V_0=(4.0\\times10^{-6})(12)=48\\,\\mathrm{\\mu C}\\) 不变。 · (a) When isolated, \\(Q=C_0V_0=(4.0\\times10^{-6})(12)=48\\,\\mathrm{\\mu C}\\) is fixed.",
          "\\(C=\\kappa C_0=12\\,\\mathrm{\\mu F}\\)，\\(V=\\dfrac{Q}{C}=4.0\\,\\mathrm{V}\\)。 · \\(C=\\kappa C_0=12\\,\\mathrm{\\mu F}\\), and \\(V=\\dfrac{Q}{C}=4.0\\,\\mathrm{V}\\).",
          "原来储能 \\(U_0=\\dfrac{1}{2}C_0V_0^{2}=\\dfrac{1}{2}(4.0\\times10^{-6})(12)^{2}=2.88\\times10^{-4}\\,\\mathrm{J}\\)。 · The original stored energy is \\(U_0=\\dfrac{1}{2}C_0V_0^{2}=\\dfrac{1}{2}(4.0\\times10^{-6})(12)^{2}=2.88\\times10^{-4}\\,\\mathrm{J}\\).",
          "插入后 \\(U=\\dfrac{Q^{2}}{2C}=\\dfrac{(48\\times10^{-6})^{2}}{2(12\\times10^{-6})}\\approx9.6\\times10^{-5}\\,\\mathrm{J}\\)，小于 \\(U_0\\)。 · After insertion, \\(U=\\dfrac{Q^{2}}{2C}=\\dfrac{(48\\times10^{-6})^{2}}{2(12\\times10^{-6})}\\approx9.6\\times10^{-5}\\,\\mathrm{J}\\), less than \\(U_0\\).",
          "(b) 接电源时 \\(V=12\\,\\mathrm{V}\\) 不变，\\(C=12\\,\\mathrm{\\mu F}\\)，\\(Q=CV=144\\,\\mathrm{\\mu C}\\)。 · (b) With the battery connected, \\(V=12\\,\\mathrm{V}\\) is fixed, \\(C=12\\,\\mathrm{\\mu F}\\), and \\(Q=CV=144\\,\\mathrm{\\mu C}\\).",
          "\\(U=\\dfrac{1}{2}CV^{2}=\\dfrac{1}{2}(12\\times10^{-6})(12)^{2}\\approx8.6\\times10^{-4}\\,\\mathrm{J}\\)，大于原来的储能。 · \\(U=\\dfrac{1}{2}CV^{2}=\\dfrac{1}{2}(12\\times10^{-6})(12)^{2}\\approx8.6\\times10^{-4}\\,\\mathrm{J}\\), greater than the original energy."
        ],
        "solution": "(a) \\(C=12\\,\\mathrm{\\mu F}\\)，\\(V=4.0\\,\\mathrm{V}\\)，\\(U\\approx9.6\\times10^{-5}\\,\\mathrm{J}\\)；(b) \\(C=12\\,\\mathrm{\\mu F}\\)，\\(Q=144\\,\\mathrm{\\mu C}\\)，\\(U\\approx8.6\\times10^{-4}\\,\\mathrm{J}\\)。 · (a) \\(C=12\\,\\mathrm{\\mu F}\\), \\(V=4.0\\,\\mathrm{V}\\), \\(U\\approx9.6\\times10^{-5}\\,\\mathrm{J}\\); (b) \\(C=12\\,\\mathrm{\\mu F}\\), \\(Q=144\\,\\mathrm{\\mu C}\\), \\(U\\approx8.6\\times10^{-4}\\,\\mathrm{J}\\).",
        "solutionLatex": "\\text{(a)}\\ C=12\\,\\mathrm{\\mu F},\\ V=4.0\\,\\mathrm{V},\\ U\\approx9.6\\times10^{-5}\\,\\mathrm{J};\\qquad \\text{(b)}\\ Q=144\\,\\mathrm{\\mu C},\\ U\\approx8.6\\times10^{-4}\\,\\mathrm{J}"
      },
      {
        "title": "例 5 · 导体与绝缘体的介电响应 · Example 5: Dielectric response of a conductor versus an insulator",
        "prompt": "把一块铜和一块玻璃分别放进同一个外电场中。描述两者内部电荷的行为、内部电场和是否能定义静态 \\(\\kappa\\)。 · A copper block and a glass block are placed in the same external field. Describe the behavior of charge inside each, the internal field, and whether a static \\(\\kappa\\) can be defined.",
        "steps": [
          "铜是导体，自由电子在外场作用下宏观迁移，直到内部场为零；净电荷分布在表面。 · Copper is a conductor; free electrons migrate macroscopically under the external field until the internal field is zero, and net charge resides on the surface.",
          "玻璃是绝缘体，电子被束缚，只能发生微小位移或分子偶极取向，形成极化；内部场减弱但不为零。 · Glass is an insulator; electrons are bound and can only shift slightly or align molecular dipoles, producing polarization; the internal field is reduced but not zero.",
          "因此铜不能用静态 \\(\\kappa\\) 描述，而玻璃可以用 \\(\\varepsilon=\\kappa\\varepsilon_0\\) 和 \\(E=\\dfrac{E_0}{\\kappa}\\) 描述。 · Therefore copper is not described by a static \\(\\kappa\\), while glass can be described by \\(\\varepsilon=\\kappa\\varepsilon_0\\) and \\(E=\\dfrac{E_0}{\\kappa}\\)."
        ],
        "solution": "铜：自由电荷迁移到表面，内部 \\(E=0\\)，无静态 \\(\\kappa\\)；玻璃：束缚电荷极化，内部 \\(E=\\dfrac{E_0}{\\kappa}\\)，可用 \\(\\kappa\\) 描述。 · Copper: free charge moves to the surface, \\(E=0\\) inside, no static \\(\\kappa\\); glass: bound charge polarizes, \\(E=\\dfrac{E_0}{\\kappa}\\) inside, described by \\(\\kappa\\).",
        "solutionLatex": "\\text{conductor: }E_{\\mathrm{inside}}=0;\\qquad \\text{dielectric: }E_{\\mathrm{inside}}=\\dfrac{E_0}{\\kappa}"
      },
      {
        "title": "例 6 · 材料组成如何影响介电率 · Example 6: How composition affects permittivity",
        "prompt": "空气、玻璃和水的相对介电常数分别约为 1、5 和 80。用电子改变构型的难易和分子极性解释这个顺序，并说明为什么 \\(\\kappa\\) 不是所有材料都相同。 · The relative permittivities of air, glass, and water are approximately 1, 5, and 80. Explain this ordering using the ease of electron configuration changes and molecular polarity, and explain why \\(\\kappa\\) is not the same for all materials.",
        "steps": [
          "空气分子稀疏且极性很弱，电子云几乎不被外场改变，所以 \\(\\kappa\\approx1\\)。 · Air molecules are sparse and weakly polar, and their electron clouds are hardly deformed by the field, so \\(\\kappa\\approx1\\).",
          "玻璃中的电子被束缚，但离子和电子云可以在外场中发生较小位移，极化响应中等，\\(\\kappa\\approx5\\)。 · Electrons in glass are bound, but ions and electron clouds can shift slightly in the field, giving a moderate polarization response and \\(\\kappa\\approx5\\).",
          "水是极性分子，永偶极矩可以在外场中转向，且电子云容易变形，所以 \\(\\kappa\\approx80\\)。 · Water consists of polar molecules whose permanent dipoles can rotate in the field and whose electron clouds deform easily, so \\(\\kappa\\approx80\\).",
          "因此介电率由材料组成、结构和电子改变构型的难易决定，不能用一个通用值代替。 · Thus permittivity is set by composition, structure, and the ease of electron configuration changes; no universal value can replace the material-specific one."
        ],
        "solution": "极化响应从弱到强：空气 < 玻璃 < 水；\\(\\kappa\\) 由材料组成、结构和极性决定。 · Polarization response increases from air to glass to water; \\(\\kappa\\) is set by composition, structure, and molecular polarity.",
        "solutionLatex": "\\kappa_{\\mathrm{air}}\\approx1<\\kappa_{\\mathrm{glass}}\\approx5<\\kappa_{\\mathrm{water}}\\approx80"
      }
    ],
    "examTips": [
      "先问“材料还是真空”：真空用 \\(\\varepsilon_0\\)，材料用 \\(\\varepsilon=\\kappa\\varepsilon_0\\)。 · First ask “material or vacuum”: use \\(\\varepsilon_0\\) for vacuum and \\(\\varepsilon=\\kappa\\varepsilon_0\\) for matter.",
      "见到“插入介质”先判断电容器是孤立（\\(Q\\) 不变）还是接电源（\\(V\\) 不变），再决定用哪个能量公式。 · When a dielectric is inserted, first decide whether the capacitor is isolated (\\(Q\\) fixed) or connected to a battery (\\(V\\) fixed), then choose the energy formula.",
      "介电率是材料属性，极化强度 \\(P\\) 是给定场下的响应；不要把二者混用。 · Permittivity is a material property, while polarization density \\(P\\) is the response at a given field; do not confuse them.",
      "导体在静电平衡时内部 \\(E=0\\)，不要给导体硬套 \\(E=\\dfrac{E_0}{\\kappa}\\)。 · A conductor in electrostatic equilibrium has \\(E=0\\) inside; do not force \\(E=\\dfrac{E_0}{\\kappa}\\) onto a conductor.",
      "涉及表面束缚电荷时，用 \\(\\sigma_b=\\vec P\\cdot\\hat n\\)，并注意法线方向决定正负。 · For bound surface charge, use \\(\\sigma_b=\\vec P\\cdot\\hat n\\) and pay attention to how the normal sets the sign.",
      "用极限检查：真空 \\(\\kappa=1\\) 应回到无介质结果；\\(\\kappa\\) 越大，内部场越小。 · Check limits: \\(\\kappa=1\\) should recover the vacuum result; larger \\(\\kappa\\) gives a smaller internal field."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.1",
        "title": "电荷与力 · Electric Charge and Force",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律 · Gauss's Law",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.10",
        "title": "绝缘体电荷与内部电场 · Charge and Fields inside Insulators",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u10",
        "code": "10.4",
        "title": "电介质 · Dielectrics",
        "relation": "后续 · next"
      }
    ],
    "modules": [],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：8.1 的库仑定律中出现 \\(\\varepsilon_0\\)，8.5 的高斯定律把包围电荷与 \\(\\varepsilon_0\\) 联系起来；本节解释材料中 \\(\\varepsilon_0\\) 为什么要换成 \\(\\varepsilon\\)。 · Upstream: Coulomb's law in 8.1 contains \\(\\varepsilon_0\\), and Gauss's law in 8.5 relates enclosed charge to \\(\\varepsilon_0\\); this topic explains why \\(\\varepsilon_0\\) is replaced by \\(\\varepsilon\\) in matter.",
      "下游：8.10 讨论绝缘体中电荷的分布与内部场，本节提供极化与介电率的微观解释。 · Downstream: 8.10 discusses charge distribution and internal fields in insulators, and this topic supplies the microscopic explanation through polarization and permittivity.",
      "跨单元：10.3 的电容器与 10.4 的电介质把 \\(C=\\kappa C_0\\)、\\(E=\\dfrac{E_0}{\\kappa}\\) 用于具体器件和能量分析。 · Cross-unit: capacitors in 10.3 and dielectrics in 10.4 apply \\(C=\\kappa C_0\\) and \\(E=\\dfrac{E_0}{\\kappa}\\) to devices and energy analysis.",
      "跨学科：水的高介电率影响电解质溶解、生物膜电容和微波加热；材料工程用介电率设计绝缘与储能器件。 · Cross-disciplinary: water's high permittivity affects electrolyte dissolution, membrane capacitance, and microwave heating; materials engineering uses permittivity to design insulators and energy-storage devices."
    ],
    "intuitionDetailed": "介电率最容易和“极化”混淆。可以这样分工：\\(\\varepsilon\\) 是材料的“软硬程度”，说明它在给定外场下能被极化到什么程度；\\(P\\) 是在某个具体场强下实际产生的极化强度。对线性介质，两者由 \\(P=\\varepsilon_0(\\kappa-1)E\\) 联系。微观上，极化有三种常见来源：电子云相对原子核的位移、离子晶体中正负离子的相对位移、极性分子偶极子的转向。电子被束缚得越紧，位移越小；分子越容易转向，\\(\\kappa\\) 越大。极化产生的束缚电荷在介质表面形成与自由电荷相反的电荷层，其反向场把内部场从 \\(E_0\\) 削弱到 \\(\\dfrac{E_0}{\\kappa}\\)。对电容器，这表现为电容增大为 \\(\\kappa\\) 倍；但能量是增加还是减少，要看电容器是否接电源：孤立时电荷没有来源，电压下降，储能减小；接电源时电压固定，电源补充电荷，储能增大。导体没有静态 \\(\\kappa\\)，因为自由电荷会一直移动到内部场为零，而不是像束缚电荷那样只做微小位移。 · Permittivity is easily confused with polarization. A useful division of labor: \\(\\varepsilon\\) is the material's “softness,” describing how strongly it can be polarized by a given applied field; \\(P\\) is the actual polarization density at a specific field strength. For a linear dielectric they are related by \\(P=\\varepsilon_0(\\kappa-1)E\\). Microscopically, polarization has three common sources: displacement of electron clouds relative to nuclei, relative displacement of positive and negative ions in ionic crystals, and rotation of polar molecular dipoles. The more tightly bound the electrons, the smaller the displacement; the more easily molecules rotate, the larger \\(\\kappa\\). Bound charge produced by polarization forms surface layers opposite to the free charge, and its opposing field reduces the internal field from \\(E_0\\) to \\(\\dfrac{E_0}{\\kappa}\\). For a capacitor this appears as a capacitance increase by a factor \\(\\kappa\\); whether the stored energy increases or decreases depends on whether the capacitor remains connected to a battery: isolated, there is no source of charge, the voltage drops, and the stored energy decreases; connected, the voltage is fixed, the battery supplies charge, and the stored energy increases. A conductor has no static \\(\\kappa\\), because free charge keeps moving until the internal field is zero rather than shifting slightly like bound charge.",
    "development": [
      "从真空介电率 \\(\\varepsilon_0\\) 和库仑常数 \\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\) 出发，引入材料介电率 \\(\\varepsilon\\)。 · Start from the vacuum permittivity \\(\\varepsilon_0\\) and Coulomb's constant \\(k=\\dfrac{1}{4\\pi\\varepsilon_0}\\), then introduce the material permittivity \\(\\varepsilon\\).",
      "用外场下电子云位移和分子偶极取向说明电极化，并引入极化强度 \\(P\\)。 · Explain electric polarization through electron-cloud displacement and molecular-dipole alignment in an applied field, and introduce the polarization density \\(P\\).",
      "说明束缚电荷的反向场如何把内部场削弱为 \\(E=\\dfrac{E_0}{\\kappa}\\)，并定义 \\(\\varepsilon=\\kappa\\varepsilon_0\\)。 · Explain how the opposing field of bound charge reduces the internal field to \\(E=\\dfrac{E_0}{\\kappa}\\), and define \\(\\varepsilon=\\kappa\\varepsilon_0\\).",
      "把介电率与材料组成、结构、电子改变构型的难易联系起来，比较空气、玻璃和水。 · Connect permittivity to composition, structure, and the ease of electron configuration changes, comparing air, glass, and water.",
      "对比导体与绝缘体的响应：导体内部 \\(E=0\\)，绝缘体内部 \\(E=\\dfrac{E_0}{\\kappa}\\)。 · Contrast conductors and insulators: \\(E=0\\) inside a conductor, while \\(E=\\dfrac{E_0}{\\kappa}\\) inside a dielectric.",
      "把结果用于平行板电容器，分析孤立与接电源两种情形下的电容、电荷、电压和能量。 · Apply the results to a parallel-plate capacitor and analyze capacitance, charge, voltage, and energy for isolated and battery-connected cases."
    ],
    "checks": [
      "介电率衡量的是什么？它和极化强度 \\(P\\) 有什么区别？ · What does permittivity measure, and how does it differ from polarization density \\(P\\)?",
      "为什么材料的介电率与真空不同？在给定材料中，哪些微观因素决定 \\(\\kappa\\) 的大小？ · Why does a material's permittivity differ from the vacuum value, and which microscopic factors determine \\(\\kappa\\) in a given material?",
      "导体和绝缘体在外电场中的内部场和电荷行为有什么不同？为什么导体没有静态 \\(\\kappa\\)？ · How do conductors and insulators differ in internal field and charge behavior under an external field, and why does a conductor have no static \\(\\kappa\\)?",
      "插入介质后，孤立电容器和接电源电容器的电压、电荷和储能分别如何变化？ · How do voltage, charge, and stored energy change after inserting a dielectric into an isolated capacitor and into a battery-connected capacitor?",
      "为什么 \\(\\kappa\\) 会随频率和温度变化？举一个生活中的例子。 · Why can \\(\\kappa\\) vary with frequency and temperature? Give an everyday example.",
      "如果 \\(\\kappa=1\\)，本节所有公式是否回到真空结果？请逐式检查。 · If \\(\\kappa=1\\), do all formulas in this topic reduce to the vacuum results? Check each one."
    ],
    "vocabulary": [
      {
        "termZh": "介电率",
        "termEn": "permittivity",
        "defZh": "描述材料在外电场中极化程度的物理量，记作 \\(\\varepsilon\\)，单位为 \\(\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)。",
        "defEn": "A measure of how strongly a material is polarized by an applied field, denoted \\(\\varepsilon\\), in \\(\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)."
      },
      {
        "termZh": "真空介电率",
        "termEn": "vacuum permittivity",
        "defZh": "真空的介电率常数 \\(\\varepsilon_0\\approx8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)。",
        "defEn": "The constant permittivity of free space, \\(\\varepsilon_0\\approx8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}\\)."
      },
      {
        "termZh": "相对介电常数",
        "termEn": "relative permittivity",
        "defZh": "材料介电率与真空介电率之比 \\(\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1\\)。",
        "defEn": "The ratio of a material's permittivity to the vacuum permittivity, \\(\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1\\)."
      },
      {
        "termZh": "电极化",
        "termEn": "electric polarization",
        "defZh": "外电场使材料内部正负电荷中心发生相对位移或使分子偶极取向的过程。",
        "defEn": "The process in which an applied field separates positive and negative charge centers or aligns molecular dipoles within a material."
      },
      {
        "termZh": "极化强度",
        "termEn": "polarization density",
        "defZh": "单位体积的偶极矩，记作 \\(P\\)，线性介质中 \\(P=\\varepsilon_0\\chi_e E\\)。",
        "defEn": "Dipole moment per unit volume, denoted \\(P\\); for a linear dielectric \\(P=\\varepsilon_0\\chi_e E\\)."
      },
      {
        "termZh": "束缚电荷",
        "termEn": "bound charge",
        "defZh": "极化过程中在材料表面或内部出现的、不能自由移动的电荷。",
        "defEn": "Charge that appears on or within a material during polarization and cannot move freely."
      },
      {
        "termZh": "自由电荷",
        "termEn": "free charge",
        "defZh": "由外电源或外部电场提供、可以在导体中移动的电荷；介质中的高斯定律只对自由电荷积分。",
        "defEn": "Charge supplied by an external source or field that can move in a conductor; Gauss's law in a dielectric encloses only free charge."
      },
      {
        "termZh": "电极化率",
        "termEn": "electric susceptibility",
        "defZh": "描述材料极化响应强弱的无量纲量 \\(\\chi_e=\\kappa-1\\)。",
        "defEn": "A dimensionless measure of a material's polarization response, \\(\\chi_e=\\kappa-1\\)."
      }
    ]
  },
  "8.10": {
    "id": "em/em-u8/8.10",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.10",
    "titleZh": "绝缘体电荷与内部电场",
    "titleEn": "Charge and Fields inside Insulators",
    "layer": "ap",
    "summary": "导体中的自由电荷会重新分布直到内部 \\(E=0\\)；绝缘体中的电荷被束缚，静电平衡时多余电荷可以留在内部和表面，内部电场也可以不为零。 · In a conductor, free charges redistribute until \\(E=0\\) inside; in an insulator, charges are bound, so in electrostatic equilibrium excess charge can remain in the interior as well as on the surface, and the internal field may be nonzero.",
    "learningObjectives": [
      "能对比导体与绝缘体的电荷迁移能力，并说明静电平衡时各自的电荷分布。 · Compare charge mobility in conductors and insulators and describe their charge distributions in electrostatic equilibrium.",
      "能解释绝缘体中多余电荷为什么可以分布在内部和表面，以及为什么内部电场可以不为零。 · Explain why excess charge in an insulator can be distributed throughout the interior and on the surface, and why the internal field may be nonzero.",
      "能计算均匀带电实心绝缘球内外的电场，并与同样电荷、同样半径的导体球对照。 · Calculate the field inside and outside a uniformly charged insulating sphere and compare it with a conducting sphere of the same charge and radius."
    ],
    "essentialKnowledge": [
      "导体含有可自由移动的电荷；静电平衡时导体内部 \\(\\vec E=0\\)，净电荷分布在外表面。 · A conductor contains freely moving charges; in electrostatic equilibrium \\(\\vec E=0\\) inside and net charge resides on the outer surface.",
      "绝缘体中的电荷被束缚在原子或分子附近，不能在宏观尺度自由移动；静电平衡只表示没有宏观电流，不表示内部电场为零。 · Charges in an insulator are bound near atoms or molecules and cannot move freely on macroscopic scales; electrostatic equilibrium means only that there is no macroscopic current, not that the internal field is zero.",
      "绝缘体中的多余电荷可以分布在内部，也可以分布在表面，取决于电荷是如何被放置的；它不会像导体那样自动全部迁移到外表面。 · Excess charge in an insulator can be distributed in the interior and on the surface, depending on how it was placed; it does not automatically migrate entirely to the outer surface as in a conductor.",
      "均匀带电实心绝缘球：内部 \\(E(r)=\\dfrac{\\rho r}{3\\varepsilon_0}=\\dfrac{kQr}{R^{3}}\\)（\\(r<R\\)），外部 \\(E(r)=\\dfrac{kQ}{r^{2}}\\)（\\(r\\ge R\\)）；中心处 \\(E=0\\)，表面上场强最大。 · For a uniformly charged solid insulating sphere, \\(E(r)=\\dfrac{\\rho r}{3\\varepsilon_0}=\\dfrac{kQr}{R^{3}}\\) inside (\\(r<R\\)) and \\(E(r)=\\dfrac{kQ}{r^{2}}\\) outside (\\(r\\ge R\\)); the field is zero at the center and maximum at the surface.",
      "同样电荷、同样半径的导体球：内部 \\(E=0\\)，电荷全部在外表面，外部场与点电荷相同；表面电荷密度 \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}\\)。 · For a conducting sphere of the same charge and radius: \\(E=0\\) inside, all charge is on the outer surface, the exterior field is the same as a point charge, and the surface charge density is \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}\\).",
      "如果绝缘体的电荷只分布在球壳外表面，则壳内（包括材料内部和空腔）\\(Q_{\\mathrm{enc}}=0\\)，\\(E=0\\)；所以「绝缘体内部场可以不为零」取决于电荷分布，而不是材料名称。 · If an insulating shell carries charge only on its outer surface, then \\(Q_{\\mathrm{enc}}=0\\) inside the shell (including the material and cavity) and \\(E=0\\); thus “an insulator's internal field may be nonzero” depends on the charge distribution, not merely on the material label.",
      "绝缘体内部场由实际电荷分布通过高斯定律决定：\\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}\\)；非均匀电荷密度需要积分，见 8.11。 · The internal field of an insulator is determined by its actual charge distribution through Gauss's law, \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}\\); nonuniform charge densities require integration, as in 8.11.",
      "绝缘体也可以有表面电荷；表面电荷与体电荷共同决定边界附近的电场。 · An insulator can also carry surface charge; surface and volume charge together determine the field near the boundary."
    ],
    "definition": "绝缘体（insulator）是电荷不能在宏观尺度自由移动的材料。静电平衡时，绝缘体中的多余电荷不会被全部推到外表面，而可以分布在内部和表面；因此绝缘体内部的电场不一定为零，通常由电荷分布通过高斯定律决定。与之相对，导体在静电平衡时内部 \\(\\vec E=0\\)，多余电荷分布在外表面。 · An insulator is a material in which charge cannot move freely on macroscopic scales. In electrostatic equilibrium, excess charge in an insulator is not all pushed to the outer surface; it can be distributed throughout the interior as well as on the surface. The electric field inside an insulator is therefore not necessarily zero and is determined by the charge distribution through Gauss's law. In contrast, a conductor in electrostatic equilibrium has \\(\\vec E=0\\) inside, with excess charge on its outer surface.",
    "intuition": "导体像有自由流动的水，电荷会跑到表面把内部场「抹平」；绝缘体像把电荷冻在胶里，电荷留在原处，内部场由这些「冻结」的电荷决定。 · A conductor is like a fluid with free charges that flow to the surface and cancel the interior field; an insulator is like charge frozen in gel, so charge stays where it is and the interior field is set by that frozen distribution.",
    "formulas": [
      {
        "latex": "E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}",
        "note": "球对称高斯面内，由包围电荷求电场。 · Field from the enclosed charge for a spherically symmetric Gaussian surface."
      },
      {
        "latex": "Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,4\\pi r'^{2}\\,\\mathrm{d}r'",
        "note": "球对称体电荷分布的包围电荷。 · Enclosed charge for a spherically symmetric volume charge distribution."
      },
      {
        "latex": "\\rho=\\dfrac{Q}{\\dfrac{4}{3}\\pi R^{3}}",
        "note": "均匀带电实心球的体电荷密度。 · Volume charge density of a uniformly charged solid sphere."
      },
      {
        "latex": "E(r)=\\dfrac{\\rho r}{3\\varepsilon_0}=\\dfrac{kQr}{R^{3}}\\quad(r<R)",
        "note": "均匀带电实心绝缘球内部场强，随 \\(r\\) 线性增大。 · Field inside a uniformly charged insulating sphere; it grows linearly with \\(r\\)."
      },
      {
        "latex": "E(r)=\\dfrac{kQ}{r^{2}}\\quad(r\\ge R)",
        "note": "均匀带电实心绝缘球外部场强，等效于全部电荷集中在球心。 · Field outside a uniformly charged insulating sphere, equivalent to all charge at the center."
      },
      {
        "latex": "E=0\\quad(r<R)",
        "note": "导体球内部静电平衡时的电场。 · Field inside a conducting sphere in electrostatic equilibrium."
      },
      {
        "latex": "\\sigma=\\dfrac{Q}{4\\pi R^{2}}",
        "note": "导体球表面电荷密度。 · Surface charge density of a conducting sphere."
      }
    ],
    "derivationNotes": [
      {
        "from": "高斯定律 + 球对称 · Gauss's law + spherical symmetry",
        "to": "内部场公式 · Internal field formula",
        "note": "取半径 \\(r<R\\) 的同心球面：\\(E(4\\pi r^{2})=\\dfrac{Q_{\\mathrm{enc}}(r)}{\\varepsilon_0}\\)。 · Choose a concentric sphere of radius \\(r<R\\): \\(E(4\\pi r^{2})=\\dfrac{Q_{\\mathrm{enc}}(r)}{\\varepsilon_0}\\)."
      },
      {
        "from": "均匀体电荷密度 · Uniform volume charge density",
        "to": "包围电荷 · Enclosed charge",
        "note": "\\(Q_{\\mathrm{enc}}(r)=\\rho\\left(\\dfrac{4}{3}\\pi r^{3}\\right)\\)。 · \\(Q_{\\mathrm{enc}}(r)=\\rho\\left(\\dfrac{4}{3}\\pi r^{3}\\right)\\)."
      },
      {
        "from": "代入高斯定律 · Substitute into Gauss's law",
        "to": "线性场 · Linear field",
        "note": "\\(E=\\dfrac{\\rho r}{3\\varepsilon_0}\\)，在球心为零，向表面线性增大。 · \\(E=\\dfrac{\\rho r}{3\\varepsilon_0}\\), zero at the center and increasing linearly toward the surface."
      },
      {
        "from": "导体内部 \\(E=0\\) · \\(E=0\\) inside a conductor",
        "to": "电荷分布在外表面 · Charge on the outer surface",
        "note": "若导体内部有净电荷，会产生的场驱使自由电荷继续移动，直到内部场为零。 · A net charge inside would produce a field that drives free charges until the internal field is zero."
      },
      {
        "from": "绝缘体电荷被束缚 · Bound charges in an insulator",
        "to": "内部电荷与内部场 · Internal charge and internal field",
        "note": "没有自由电荷来重新分布，多余电荷留在原处，内部场由实际分布决定。 · Without free charges to redistribute, excess charge stays where it is and the internal field is set by the actual distribution."
      }
    ],
    "conditions": [
      "静电平衡：没有宏观电流，电荷不再定向移动。 · Electrostatic equilibrium: no macroscopic current and no directed motion of charge.",
      "球对称电荷分布；否则 \\(E(r)\\) 不能只用半径 \\(r\\) 表示。 · Spherically symmetric charge distribution; otherwise \\(E(r)\\) cannot be expressed using the radius \\(r\\) alone.",
      "均匀体电荷密度时，内部场才严格随 \\(r\\) 线性增大；非均匀密度需积分。 · The internal field grows strictly linearly with \\(r\\) only for uniform volume charge density; nonuniform densities require integration.",
      "理想绝缘体：没有可自由移动的电荷；真实材料可能有少量漏电或极化。 · Ideal insulator: no freely moving charge; real materials may have slight leakage or polarization.",
      "表面电荷与体电荷可以同时存在；计算时要分别计入。 · Surface and volume charge can coexist; include both when calculating the field.",
      "导体与绝缘体的对比要求两者电荷、半径相同，才能直接比较内部场。 · To compare a conductor and an insulator directly, they must have the same charge and radius."
    ],
    "keyPoints": [
      "导体静电平衡：内部 \\(E=0\\)，净电荷在外表面。 · Conductor in electrostatic equilibrium: \\(E=0\\) inside, net charge on the outer surface.",
      "绝缘体静电平衡：内部 \\(E\\) 不一定为零，多余电荷可分布在内部和表面。 · Insulator in electrostatic equilibrium: the internal field need not be zero, and excess charge can be distributed in the interior and on the surface.",
      "均匀带电实心绝缘球内部 \\(E\\propto r\\)，球心为零，表面最大。 · Inside a uniformly charged insulating sphere, \\(E\\propto r\\), zero at the center and maximum at the surface.",
      "均匀带电实心绝缘球外部等效于点电荷。 · Outside a uniformly charged insulating sphere, the field is equivalent to that of a point charge.",
      "导体球内部 \\(E=0\\)，外部同样等效于点电荷。 · A conducting sphere has \\(E=0\\) inside and the same exterior field as a point charge.",
      "「绝缘体内部场可以不为零」取决于电荷分布；若电荷只在球壳外表面，壳内仍可为零。 · “An insulator's internal field may be nonzero” depends on the charge distribution; if charge is only on the outer surface of a shell, the interior can still be field-free.",
      "绝缘体可以有表面电荷，也可以有体电荷。 · An insulator can carry both surface charge and volume charge."
    ],
    "misconceptions": [
      "认为所有绝缘体内部 \\(E\\) 都为零；绝缘体没有自由电荷来屏蔽内部场，\\(E\\) 可以不为零。 · Thinking every insulator has \\(E=0\\) inside; without free charges to screen the field, an insulator's internal field may be nonzero.",
      "认为多余电荷总会全部跑到外表面；这只对导体成立，绝缘体中的电荷可以留在内部。 · Thinking excess charge always migrates entirely to the outer surface; this is true only for conductors, while charge in an insulator can remain inside.",
      "认为绝缘体不能有表面电荷；绝缘体表面同样可以带电。 · Thinking an insulator cannot have surface charge; an insulating surface can certainly carry charge.",
      "认为静电平衡就意味着内部 \\(E=0\\)；对导体成立，对绝缘体不成立。 · Thinking electrostatic equilibrium implies \\(E=0\\) inside; this holds for conductors but not for insulators.",
      "认为均匀带电实心绝缘球内部场是常数；实际上 \\(E\\propto r\\)，随半径线性增大。 · Thinking the field inside a uniformly charged insulating sphere is constant; in fact \\(E\\propto r\\) and grows linearly with radius.",
      "认为绝缘体内部场一定不为零；若电荷只分布在球壳外表面，壳内 \\(Q_{\\mathrm{enc}}=0\\)，场可以为零。 · Thinking an insulator's internal field is always nonzero; if charge lies only on the outer surface of a shell, \\(Q_{\\mathrm{enc}}=0\\) inside and the field can be zero.",
      "把导体表面场公式 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 直接用于绝缘体内部。 · Applying the conductor-surface formula \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) directly inside an insulator."
    ],
    "examples": [
      {
        "title": "例 1 · 均匀带电实心绝缘球的内部场 · Example 1: Field inside a uniformly charged insulating sphere",
        "prompt": "一个半径 \\(R=0.20\\,\\mathrm{m}\\) 的实心绝缘球均匀带电，总电荷 \\(Q=+4.0\\,\\mathrm{\\mu C}\\)。求体电荷密度 \\(\\rho\\)，以及 \\(r=0.10\\,\\mathrm{m}\\)、\\(r=0.20\\,\\mathrm{m}\\)、\\(r=0.30\\,\\mathrm{m}\\) 处的电场大小。 · A solid insulating sphere of radius \\(R=0.20\\,\\mathrm{m}\\) carries a uniform total charge \\(Q=+4.0\\,\\mathrm{\\mu C}\\). Find the volume charge density \\(\\rho\\) and the field magnitude at \\(r=0.10\\,\\mathrm{m}\\), \\(r=0.20\\,\\mathrm{m}\\), and \\(r=0.30\\,\\mathrm{m}\\).",
        "steps": [
          "\\(\\rho=\\dfrac{Q}{\\dfrac{4}{3}\\pi R^{3}}=\\dfrac{4.0\\times10^{-6}}{\\dfrac{4}{3}\\pi(0.20)^{3}}\\approx1.2\\times10^{-4}\\,\\mathrm{C\\,m^{-3}}\\)。 · \\(\\rho=\\dfrac{Q}{\\dfrac{4}{3}\\pi R^{3}}=\\dfrac{4.0\\times10^{-6}}{\\dfrac{4}{3}\\pi(0.20)^{3}}\\approx1.2\\times10^{-4}\\,\\mathrm{C\\,m^{-3}}\\).",
          "内部 \\(r=0.10\\,\\mathrm{m}\\)：\\(E=\\dfrac{\\rho r}{3\\varepsilon_0}=\\dfrac{(1.19\\times10^{-4})(0.10)}{3(8.85\\times10^{-12})}\\approx4.5\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · Inside at \\(r=0.10\\,\\mathrm{m}\\): \\(E=\\dfrac{\\rho r}{3\\varepsilon_0}=\\dfrac{(1.19\\times10^{-4})(0.10)}{3(8.85\\times10^{-12})}\\approx4.5\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "表面 \\(r=0.20\\,\\mathrm{m}\\)：\\(E=\\dfrac{kQ}{R^{2}}=(8.99\\times10^{9})\\dfrac{4.0\\times10^{-6}}{(0.20)^{2}}\\approx9.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · At the surface \\(r=0.20\\,\\mathrm{m}\\): \\(E=\\dfrac{kQ}{R^{2}}=(8.99\\times10^{9})\\dfrac{4.0\\times10^{-6}}{(0.20)^{2}}\\approx9.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "外部 \\(r=0.30\\,\\mathrm{m}\\)：\\(E=\\dfrac{kQ}{r^{2}}=(8.99\\times10^{9})\\dfrac{4.0\\times10^{-6}}{(0.30)^{2}}\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · Outside at \\(r=0.30\\,\\mathrm{m}\\): \\(E=\\dfrac{kQ}{r^{2}}=(8.99\\times10^{9})\\dfrac{4.0\\times10^{-6}}{(0.30)^{2}}\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)."
        ],
        "solution": "\\(\\rho\\approx1.2\\times10^{-4}\\,\\mathrm{C\\,m^{-3}}\\)；\\(E(0.10)\\approx4.5\\times10^{5}\\)，\\(E(0.20)\\approx9.0\\times10^{5}\\)，\\(E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(\\rho\\approx1.2\\times10^{-4}\\,\\mathrm{C\\,m^{-3}}\\); \\(E(0.10)\\approx4.5\\times10^{5}\\), \\(E(0.20)\\approx9.0\\times10^{5}\\), and \\(E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
        "solutionLatex": "\\rho\\approx1.2\\times10^{-4}\\,\\mathrm{C\\,m^{-3}},\\quad E(0.10)\\approx4.5\\times10^{5},\\quad E(0.20)\\approx9.0\\times10^{5},\\quad E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}"
      },
      {
        "title": "例 2 · 同样电荷与半径的导体球 · Example 2: A conducting sphere with the same charge and radius",
        "prompt": "一个半径 \\(R=0.20\\,\\mathrm{m}\\) 的导体球带总电荷 \\(Q=+4.0\\,\\mathrm{\\mu C}\\)。求 \\(r=0.10\\,\\mathrm{m}\\)、\\(r=0.30\\,\\mathrm{m}\\) 处的电场，以及表面电荷密度。 · A conducting sphere of radius \\(R=0.20\\,\\mathrm{m}\\) carries total charge \\(Q=+4.0\\,\\mathrm{\\mu C}\\). Find the field at \\(r=0.10\\,\\mathrm{m}\\) and \\(r=0.30\\,\\mathrm{m}\\), and the surface charge density.",
        "steps": [
          "导体内部静电平衡：\\(E(0.10)=0\\)。 · In electrostatic equilibrium inside the conductor: \\(E(0.10)=0\\).",
          "外部等效于点电荷：\\(E(0.30)=\\dfrac{kQ}{r^{2}}\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · Outside it is equivalent to a point charge: \\(E(0.30)=\\dfrac{kQ}{r^{2}}\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "表面电荷密度：\\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}=\\dfrac{4.0\\times10^{-6}}{4\\pi(0.20)^{2}}\\approx8.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\)。 · Surface charge density: \\(\\sigma=\\dfrac{Q}{4\\pi R^{2}}=\\dfrac{4.0\\times10^{-6}}{4\\pi(0.20)^{2}}\\approx8.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\)."
        ],
        "solution": "\\(E(0.10)=0\\)，\\(E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)，\\(\\sigma\\approx8.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\)。 · \\(E(0.10)=0\\), \\(E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\), and \\(\\sigma\\approx8.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\).",
        "solutionLatex": "E(0.10)=0,\\qquad E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}},\\qquad \\sigma\\approx8.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}"
      },
      {
        "title": "例 3 · 电荷只在绝缘球壳外表面 · Example 3: Charge only on the outer surface of an insulating shell",
        "prompt": "一个绝缘球壳内半径 \\(a=0.10\\,\\mathrm{m}\\)、外半径 \\(b=0.20\\,\\mathrm{m}\\)，电荷 \\(+4.0\\,\\mathrm{\\mu C}\\) 只分布在球壳外表面。求 \\(r=0.05\\,\\mathrm{m}\\)、\\(r=0.15\\,\\mathrm{m}\\)、\\(r=0.30\\,\\mathrm{m}\\) 处的电场。 · An insulating spherical shell has inner radius \\(a=0.10\\,\\mathrm{m}\\) and outer radius \\(b=0.20\\,\\mathrm{m}\\), with \\(+4.0\\,\\mathrm{\\mu C}\\) distributed only on its outer surface. Find the field at \\(r=0.05\\,\\mathrm{m}\\), \\(r=0.15\\,\\mathrm{m}\\), and \\(r=0.30\\,\\mathrm{m}\\).",
        "steps": [
          "\\(r=0.05\\,\\mathrm{m}<a\\)：高斯面内无电荷，\\(E=0\\)。 · For \\(r=0.05\\,\\mathrm{m}<a\\), the Gaussian surface encloses no charge, so \\(E=0\\).",
          "\\(a<r=0.15\\,\\mathrm{m}<b\\)：电荷只在外表面，半径 \\(0.15\\,\\mathrm{m}\\) 的高斯面内仍无电荷，\\(E=0\\)。 · For \\(a<r=0.15\\,\\mathrm{m}<b\\), charge lies only on the outer surface, so a Gaussian surface of radius \\(0.15\\,\\mathrm{m}\\) still encloses no charge and \\(E=0\\).",
          "\\(r=0.30\\,\\mathrm{m}>b\\)：高斯面包围全部电荷，\\(E=\\dfrac{kQ}{r^{2}}\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · For \\(r=0.30\\,\\mathrm{m}>b\\), the Gaussian surface encloses all the charge, so \\(E=\\dfrac{kQ}{r^{2}}\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
          "这个例子说明：绝缘体内部场是否为零取决于电荷分布，不能只看材料名称。 · This example shows that whether an insulator's internal field is zero depends on the charge distribution, not just the material label."
        ],
        "solution": "\\(E(0.05)=0\\)，\\(E(0.15)=0\\)，\\(E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。 · \\(E(0.05)=0\\), \\(E(0.15)=0\\), and \\(E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\).",
        "solutionLatex": "E(0.05)=0,\\qquad E(0.15)=0,\\qquad E(0.30)\\approx4.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}"
      },
      {
        "title": "例 4 · 塑料棒与铜棒 · Example 4: A plastic rod versus a copper rod",
        "prompt": "两根相同的棒，一根是塑料绝缘体，一根是铜导体。分别把 \\(+1.0\\,\\mathrm{nC}\\) 的电荷放在棒的一端。请描述电荷在棒中的分布，并比较棒内电场。 · Two identical rods, one plastic insulator and one copper conductor, each receive \\(+1.0\\,\\mathrm{nC}\\) of charge at one end. Describe the charge distribution in each rod and compare the internal fields.",
        "steps": [
          "铜棒中的自由电子会被排斥并重新分布，直到导体内部 \\(E=0\\)；净正电荷分布在外表面。 · Free electrons in the copper rod are repelled and redistribute until \\(E=0\\) inside the conductor; the net positive charge resides on the outer surface.",
          "塑料棒中的电荷被束缚，不能自由迁移，因此电荷主要留在放置处附近，并可能在表面和内部形成分布。 · Charges in the plastic rod are bound and cannot migrate freely, so they remain near where they were placed and may form a distribution on the surface and in the interior.",
          "塑料棒内部电场一般不为零，由局部电荷分布决定；铜棒内部电场为零。 · The internal field of the plastic rod is generally nonzero and determined by the local charge distribution, while the copper rod has zero internal field."
        ],
        "solution": "铜棒：电荷在外表面，内部 \\(E=0\\)；塑料棒：电荷留在放置区域，内部 \\(E\\) 可以不为零。 · Copper rod: charge on the outer surface and \\(E=0\\) inside; plastic rod: charge remains near the placement region and the internal field may be nonzero."
      }
    ],
    "examTips": [
      "先判断材料是导体还是绝缘体，再决定内部 \\(E\\) 是否为零。 · First decide whether the material is a conductor or an insulator, then determine whether the internal field is zero.",
      "导体题优先用 \\(E=0\\) 和「净电荷在外表面」；绝缘体题用实际电荷分布和高斯定律。 · For conductors, use \\(E=0\\) and “net charge on the outer surface”; for insulators, use the actual charge distribution and Gauss's law.",
      "均匀带电实心绝缘球内部 \\(E\\propto r\\)，不要误写成常数或零。 · Inside a uniformly charged insulating sphere, \\(E\\propto r\\); do not write it as constant or zero.",
      "比较导体球与绝缘球时，保持电荷和半径相同，只比较内部场。 · When comparing conducting and insulating spheres, keep charge and radius the same and compare only the internal fields.",
      "遇到绝缘体球壳，先看电荷分布在哪一层，再取高斯面；不要默认全部电荷都在球心。 · For an insulating shell, first locate the charge distribution, then choose the Gaussian surface; do not assume all charge is at the center."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律 · Gauss's Law",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.2",
        "title": "电场 · Electric Fields",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.11",
        "title": "电荷密度与包围电荷积分 · Charge Density and Enclosed Charge",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.8",
        "title": "电力、引力与宏观物性 · Electric and Gravitational Forces in Matter",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "gauss-law",
        "title": "高斯定律 · Gauss's law"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：8.5 高斯定律给出 \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}\\)，是分析绝缘体内部场的基础。 · Upstream: Gauss's law in 8.5 gives \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}\\), the basis for analyzing fields inside insulators.",
      "下游：8.11 把非均匀电荷密度写成积分，用于求 \\(Q_{\\mathrm{enc}}(r)\\) 和 \\(E(r)\\)。 · Downstream: 8.11 writes nonuniform charge density as an integral to find \\(Q_{\\mathrm{enc}}(r)\\) and \\(E(r)\\).",
      "应用：驻极体、绝缘子、塑料薄膜和高压电缆中的电荷积累与击穿。 · Applications: charge accumulation and breakdown in electrets, insulators, plastic films, and high-voltage cables.",
      "对比：10.1 导体静电平衡与 10.4 电介质极化进一步区分导体、绝缘体和介电材料。 · Comparison: 10.1 on conductor equilibrium and 10.4 on dielectric polarization further distinguish conductors, insulators, and dielectric materials."
    ],
    "intuitionDetailed": "判断绝缘体内部电场时，最关键的是不要套用导体的结论。导体里有大量自由电子，只要内部出现电场，电子就会移动，直到电场被完全抵消，所以静电平衡时导体内部 \\(E=0\\)，多余电荷只能停在外表面。绝缘体的电子被原子核束缚，不能长距离迁移；把电荷放到塑料、玻璃或橡胶上，电荷会留在放置处附近，可能分布在表面，也可能深入内部。于是绝缘体内部完全可能存在电场，其大小和方向由这些电荷的分布决定。对球对称的均匀带电实心绝缘球，高斯面内的电荷随 \\(r^{3}\\) 增长，而球面面积随 \\(r^{2}\\) 增长，所以 \\(E\\propto r\\)：球心为零，向外线性增大，到表面达到最大；球外则像点电荷一样按 \\(\\dfrac{1}{r^{2}}\\) 衰减。导体球则相反：内部处处为零，电荷全在表面，外部场与点电荷相同。还要注意，「绝缘体内部场可以不为零」中的「可以」很重要：如果电荷只分布在绝缘球壳的外表面，壳内包围电荷为零，电场仍然为零。 · When analyzing the field inside an insulator, the key is not to apply conductor conclusions. A conductor contains many free electrons; if an internal field appears, electrons move until the field is completely cancelled, so in electrostatic equilibrium the conductor has \\(E=0\\) inside and excess charge can reside only on the outer surface. In an insulator, electrons are bound to nuclei and cannot migrate over long distances; charge placed on plastic, glass, or rubber stays near where it was placed, possibly on the surface and possibly deeper inside. The interior of an insulator can therefore have a nonzero electric field whose magnitude and direction are set by that charge distribution. For a spherically symmetric, uniformly charged insulating sphere, the enclosed charge grows as \\(r^{3}\\) while the sphere's area grows as \\(r^{2}\\), so \\(E\\propto r\\): zero at the center, increasing linearly outward, and maximum at the surface; outside, the field falls as \\(\\dfrac{1}{r^{2}}\\) like a point charge. A conducting sphere is the opposite: zero everywhere inside, all charge on the surface, and the same exterior field as a point charge. Note also that “may be nonzero” is important: if charge lies only on the outer surface of an insulating shell, the enclosed charge inside is zero and the field can still be zero.",
    "development": [
      "回顾导体静电平衡的结论：内部 \\(E=0\\)，净电荷在外表面。 · Review the conductor equilibrium result: \\(E=0\\) inside and net charge on the outer surface.",
      "说明绝缘体中电荷被束缚，不能自由迁移，因此多余电荷可以留在内部。 · Explain that charges in an insulator are bound and cannot migrate freely, so excess charge can remain inside.",
      "用高斯定律分析均匀带电实心绝缘球，得到内部线性场和外部平方反比场。 · Use Gauss's law to analyze a uniformly charged insulating sphere, obtaining a linear internal field and an inverse-square exterior field.",
      "与同样电荷、半径的导体球对照，画出两种 \\(E(r)\\) 曲线。 · Compare with a conducting sphere of the same charge and radius, and sketch both \\(E(r)\\) curves.",
      "讨论球壳与表面电荷的例外，理解「可以不为零」的条件性。 · Discuss shells and surface charge as exceptions to understand the conditional nature of “may be nonzero.”"
    ],
    "checks": [
      "导体与绝缘体在静电平衡时，内部电场分别有什么特点？ · What are the internal fields of conductors and insulators in electrostatic equilibrium?",
      "为什么绝缘体中的多余电荷可以分布在内部和表面？ · Why can excess charge in an insulator be distributed in the interior and on the surface?",
      "均匀带电实心绝缘球内部的 \\(E(r)\\) 随 \\(r\\) 如何变化？球心处为多少？ · How does \\(E(r)\\) vary with \\(r\\) inside a uniformly charged insulating sphere, and what is it at the center?",
      "同样电荷、同样半径的导体球与绝缘球，外部场相同吗？内部场呢？ · Do conducting and insulating spheres with the same charge and radius have the same exterior field? The same interior field?",
      "如果绝缘球壳的电荷只分布在外表面，壳内电场一定不为零吗？ · If an insulating shell carries charge only on its outer surface, is the field inside necessarily nonzero?"
    ],
    "vocabulary": [
      {
        "termZh": "绝缘体",
        "termEn": "insulator",
        "defZh": "电荷不能在宏观尺度自由移动的材料；多余电荷可分布在内部和表面，内部电场可以不为零。",
        "defEn": "A material in which charge cannot move freely on macroscopic scales; excess charge can be distributed in the interior and on the surface, and the internal field may be nonzero."
      },
      {
        "termZh": "导体",
        "termEn": "conductor",
        "defZh": "含有可自由移动电荷的材料；静电平衡时内部 \\(E=0\\)，净电荷在外表面。",
        "defEn": "A material with freely moving charges; in electrostatic equilibrium \\(E=0\\) inside and net charge resides on the outer surface."
      },
      {
        "termZh": "静电平衡",
        "termEn": "electrostatic equilibrium",
        "defZh": "电荷不再发生宏观定向移动的状态；导体内部 \\(E=0\\)，绝缘体内部可以不为零。",
        "defEn": "A state in which charge has no macroscopic directed motion; a conductor has \\(E=0\\) inside, while an insulator's interior field may be nonzero."
      },
      {
        "termZh": "束缚电荷",
        "termEn": "bound charge",
        "defZh": "被束缚在原子或分子附近、不能在宏观尺度自由移动的电荷。",
        "defEn": "Charge bound near atoms or molecules that cannot move freely on macroscopic scales."
      },
      {
        "termZh": "自由电荷",
        "termEn": "free charge",
        "defZh": "可以在材料中宏观移动的电荷，例如导体中的传导电子。",
        "defEn": "Charge that can move macroscopically through a material, such as conduction electrons in a conductor."
      },
      {
        "termZh": "表面电荷密度",
        "termEn": "surface charge density",
        "defZh": "单位面积上的电荷量 \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\)，单位 \\(\\mathrm{C\\,m^{-2}}\\)。",
        "defEn": "Charge per unit area, \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\), with units \\(\\mathrm{C\\,m^{-2}}\\)."
      },
      {
        "termZh": "体电荷密度",
        "termEn": "volume charge density",
        "defZh": "单位体积内的电荷量 \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\)，单位 \\(\\mathrm{C\\,m^{-3}}\\)。",
        "defEn": "Charge per unit volume, \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\), with units \\(\\mathrm{C\\,m^{-3}}\\)."
      }
    ]
  },
  "8.11": {
    "id": "em/em-u8/8.11",
    "subject": "em",
    "chapterId": "em-u8",
    "unitCode": "8",
    "unitTitleZh": "电荷、电场与高斯定律",
    "unitTitleEn": "Electric Charges, Fields, and Gauss's Law",
    "code": "8.11",
    "titleZh": "电荷密度与包围电荷积分",
    "titleEn": "Charge Density and Enclosed Charge",
    "layer": "ap",
    "summary": "已知线电荷密度 \\(\\lambda\\)、面电荷密度 \\(\\sigma\\) 或体电荷密度 \\(\\rho\\) 的函数，用 \\(Q=\\int\\lambda\\,\\mathrm{d}\\ell\\)、\\(Q=\\int\\sigma\\,\\mathrm{d}A\\)、\\(Q=\\int\\rho\\,\\mathrm{d}V\\) 求总电荷；高斯面内的包围电荷用从中心到 \\(r\\) 的积分。 · Given \\(\\lambda\\), \\(\\sigma\\), or \\(\\rho\\) as a function of position, integrate \\(Q=\\int\\lambda\\,\\mathrm{d}\\ell\\), \\(Q=\\int\\sigma\\,\\mathrm{d}A\\), or \\(Q=\\int\\rho\\,\\mathrm{d}V\\) to find the total charge; the charge enclosed by a Gaussian surface follows from integrating from the center out to \\(r\\).",
    "learningObjectives": [
      "能根据电荷分布的维度选择线、面或体积分，并写出正确的电荷元 \\(\\mathrm{d}Q\\)。 · Choose a line, surface, or volume integral for a charge distribution and write the correct charge element \\(\\mathrm{d}Q\\).",
      "能为球对称和柱对称分布写出正确的体积元，并计算 \\(Q_{\\mathrm{enc}}(r)\\)。 · Write the correct volume element for spherically and cylindrically symmetric distributions and calculate \\(Q_{\\mathrm{enc}}(r)\\).",
      "能把 \\(Q_{\\mathrm{enc}}(r)\\) 代入高斯定律求电场，并检查单位、极限和连续性。 · Substitute \\(Q_{\\mathrm{enc}}(r)\\) into Gauss's law to find the field, and check units, limits, and continuity."
    ],
    "essentialKnowledge": [
      "线电荷密度 \\(\\lambda=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}\\ell}\\)，单位 \\(\\mathrm{C\\,m^{-1}}\\)；总电荷 \\(Q=\\int\\lambda\\,\\mathrm{d}\\ell\\)。 · Linear charge density \\(\\lambda=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}\\ell}\\), with units \\(\\mathrm{C\\,m^{-1}}\\); total charge \\(Q=\\int\\lambda\\,\\mathrm{d}\\ell\\).",
      "面电荷密度 \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\)，单位 \\(\\mathrm{C\\,m^{-2}}\\)；总电荷 \\(Q=\\int\\sigma\\,\\mathrm{d}A\\)。 · Surface charge density \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\), with units \\(\\mathrm{C\\,m^{-2}}\\); total charge \\(Q=\\int\\sigma\\,\\mathrm{d}A\\).",
      "体电荷密度 \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\)，单位 \\(\\mathrm{C\\,m^{-3}}\\)；总电荷 \\(Q=\\int\\rho\\,\\mathrm{d}V\\)。 · Volume charge density \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\), with units \\(\\mathrm{C\\,m^{-3}}\\); total charge \\(Q=\\int\\rho\\,\\mathrm{d}V\\).",
      "只有当密度均匀时才能用 \\(Q=\\lambda L\\)、\\(Q=\\sigma A\\)、\\(Q=\\rho V\\)；密度随位置变化时必须积分。 · Only uniform densities allow \\(Q=\\lambda L\\), \\(Q=\\sigma A\\), or \\(Q=\\rho V\\); if the density varies with position, integrate.",
      "球对称体积元 \\(\\mathrm{d}V=4\\pi r^{2}\\,\\mathrm{d}r\\)，所以 \\(Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,4\\pi r'^{2}\\,\\mathrm{d}r'\\)。 · For spherical symmetry, \\(\\mathrm{d}V=4\\pi r^{2}\\,\\mathrm{d}r\\), so \\(Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,4\\pi r'^{2}\\,\\mathrm{d}r'\\).",
      "柱对称体积元 \\(\\mathrm{d}V=2\\pi rL\\,\\mathrm{d}r\\)，所以 \\(Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,2\\pi r'L\\,\\mathrm{d}r'\\)；圆盘面积元 \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\)。 · For cylindrical symmetry, \\(\\mathrm{d}V=2\\pi rL\\,\\mathrm{d}r\\), so \\(Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,2\\pi r'L\\,\\mathrm{d}r'\\); for a disk, \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\).",
      "高斯定律中的 \\(Q_{\\mathrm{enc}}\\) 只对高斯面内部积分；当电荷分布在球壳 \\(a<r<b\\) 时，\\(r<a\\) 内 \\(Q_{\\mathrm{enc}}=0\\)，\\(a<r<b\\) 内只积到 \\(r\\)，\\(r>b\\) 才等于总电荷。 · In Gauss's law, \\(Q_{\\mathrm{enc}}\\) integrates only over the interior of the Gaussian surface; for charge in a shell \\(a<r<b\\), \\(Q_{\\mathrm{enc}}=0\\) for \\(r<a\\), the integral stops at \\(r\\) for \\(a<r<b\\), and only for \\(r>b\\) does it equal the total charge.",
      "球对称电场 \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}\\)，柱对称电场 \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{2\\pi\\varepsilon_0 rL}\\)。 · For spherical symmetry, \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}\\); for cylindrical symmetry, \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{2\\pi\\varepsilon_0 rL}\\)."
    ],
    "definition": "电荷密度描述电荷在空间中的分布：线电荷密度 \\(\\lambda=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}\\ell}\\)、面电荷密度 \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\)、体电荷密度 \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\)。若已知它们随位置的函数，总电荷由相应的积分得到：\\(Q=\\int\\lambda\\,\\mathrm{d}\\ell\\)、\\(Q=\\int\\sigma\\,\\mathrm{d}A\\)、\\(Q=\\int\\rho\\,\\mathrm{d}V\\)。高斯面内的包围电荷只对曲面内部积分，例如球对称时 \\(Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,4\\pi r'^{2}\\,\\mathrm{d}r'\\)。 · Charge density describes how charge is distributed in space: linear density \\(\\lambda=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}\\ell}\\), surface density \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\), and volume density \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\). If these are given as functions of position, the total charge follows from the corresponding integral: \\(Q=\\int\\lambda\\,\\mathrm{d}\\ell\\), \\(Q=\\int\\sigma\\,\\mathrm{d}A\\), or \\(Q=\\int\\rho\\,\\mathrm{d}V\\). The charge enclosed by a Gaussian surface is integrated only over the interior; for spherical symmetry, for example, \\(Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,4\\pi r'^{2}\\,\\mathrm{d}r'\\).",
    "intuition": "把电荷密度想成「每米、每平方米或每立方米的电荷量」。总电荷就是把每个小块的电荷 \\(\\mathrm{d}Q\\) 加起来；关键不是背公式，而是写对小块的长度、面积或体积。 · Think of charge density as “charge per meter, per square meter, or per cubic meter.” Total charge is the sum of the charge \\(\\mathrm{d}Q\\) in each small piece; the key is not memorizing formulas but writing the correct length, area, or volume element.",
    "formulas": [
      {
        "latex": "Q=\\int\\lambda\\,\\mathrm{d}\\ell",
        "note": "由线电荷密度求总电荷。 · Total charge from linear charge density."
      },
      {
        "latex": "Q=\\int\\sigma\\,\\mathrm{d}A",
        "note": "由面电荷密度求总电荷。 · Total charge from surface charge density."
      },
      {
        "latex": "Q=\\int\\rho\\,\\mathrm{d}V",
        "note": "由体电荷密度求总电荷。 · Total charge from volume charge density."
      },
      {
        "latex": "Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,4\\pi r'^{2}\\,\\mathrm{d}r'",
        "note": "球对称分布的包围电荷；\\(\\mathrm{d}V=4\\pi r'^{2}\\,\\mathrm{d}r'\\)。 · Enclosed charge for spherical symmetry; \\(\\mathrm{d}V=4\\pi r'^{2}\\,\\mathrm{d}r'\\)."
      },
      {
        "latex": "Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r')\\,2\\pi r'L\\,\\mathrm{d}r'",
        "note": "柱对称分布的包围电荷；\\(\\mathrm{d}V=2\\pi r'L\\,\\mathrm{d}r'\\)。 · Enclosed charge for cylindrical symmetry; \\(\\mathrm{d}V=2\\pi r'L\\,\\mathrm{d}r'\\)."
      },
      {
        "latex": "\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r",
        "note": "圆盘或圆柱截面的面积元。 · Area element of a disk or cylindrical cross-section."
      },
      {
        "latex": "E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0 r^{2}}",
        "note": "球对称电场。 · Field for spherical symmetry."
      },
      {
        "latex": "E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{2\\pi\\varepsilon_0 rL}",
        "note": "柱对称电场；\\(L\\) 为高斯圆柱长度。 · Field for cylindrical symmetry; \\(L\\) is the length of the Gaussian cylinder."
      }
    ],
    "derivationNotes": [
      {
        "from": "电荷密度定义 · Definition of charge density",
        "to": "电荷元 · Charge element",
        "note": "把分布分成小段/小面/小体积，\\(\\mathrm{d}Q=\\lambda\\,\\mathrm{d}\\ell\\)、\\(\\sigma\\,\\mathrm{d}A\\) 或 \\(\\rho\\,\\mathrm{d}V\\)。 · Divide the distribution into small lengths, areas, or volumes: \\(\\mathrm{d}Q=\\lambda\\,\\mathrm{d}\\ell\\), \\(\\sigma\\,\\mathrm{d}A\\), or \\(\\rho\\,\\mathrm{d}V\\)."
      },
      {
        "from": "对整个分布求和 · Sum over the distribution",
        "to": "积分 · Integral",
        "note": "令小块趋于零，求和变为 \\(Q=\\int\\mathrm{d}Q\\)，积分限只覆盖带电区域。 · Let the pieces shrink to zero; the sum becomes \\(Q=\\int\\mathrm{d}Q\\), with limits covering only the charged region."
      },
      {
        "from": "球对称 · Spherical symmetry",
        "to": "球壳体积元 · Spherical shell volume element",
        "note": "半径 \\(r'\\)、厚度 \\(\\mathrm{d}r'\\) 的球壳体积为 \\(4\\pi r'^{2}\\,\\mathrm{d}r'\\)。 · A spherical shell of radius \\(r'\\) and thickness \\(\\mathrm{d}r'\\) has volume \\(4\\pi r'^{2}\\,\\mathrm{d}r'\\)."
      },
      {
        "from": "高斯定律 · Gauss's law",
        "to": "电场 · Electric field",
        "note": "对球对称，\\(E(4\\pi r^{2})=\\dfrac{Q_{\\mathrm{enc}}(r)}{\\varepsilon_0}\\)，解出 \\(E\\)。 · For spherical symmetry, \\(E(4\\pi r^{2})=\\dfrac{Q_{\\mathrm{enc}}(r)}{\\varepsilon_0}\\), then solve for \\(E\\)."
      },
      {
        "from": "分段积分 · Piecewise integration",
        "to": "球壳的 \\(Q_{\\mathrm{enc}}\\) · \\(Q_{\\mathrm{enc}}\\) for a shell",
        "note": "\\(r<a\\) 时为零；\\(a<r<b\\) 时从 \\(a\\) 积到 \\(r\\)；\\(r>b\\) 时等于总电荷。 · Zero for \\(r<a\\); integrate from \\(a\\) to \\(r\\) for \\(a<r<b\\); equal the total charge for \\(r>b\\)."
      }
    ],
    "conditions": [
      "电荷密度函数必须在积分区域内给定，并且积分限只覆盖带电区域。 · The charge-density function must be given on the integration region, and the limits must cover only the charged region.",
      "只有当密度均匀时，才能把 \\(\\rho\\)、\\(\\sigma\\)、\\(\\lambda\\) 提到积分号外。 · Only for uniform density can \\(\\rho\\), \\(\\sigma\\), or \\(\\lambda\\) be pulled outside the integral.",
      "球对称使用 \\(4\\pi r^{2}\\,\\mathrm{d}r\\)，柱对称使用 \\(2\\pi rL\\,\\mathrm{d}r\\)，圆盘使用 \\(2\\pi r\\,\\mathrm{d}r\\)。 · Use \\(4\\pi r^{2}\\,\\mathrm{d}r\\) for spherical symmetry, \\(2\\pi rL\\,\\mathrm{d}r\\) for cylindrical symmetry, and \\(2\\pi r\\,\\mathrm{d}r\\) for a disk.",
      "高斯面内的 \\(Q_{\\mathrm{enc}}\\) 只包括曲面内部电荷；外部电荷不进入积分。 · \\(Q_{\\mathrm{enc}}\\) includes only charge inside the Gaussian surface; outside charge is not integrated.",
      "球壳或分层分布需要分段写 \\(Q_{\\mathrm{enc}}(r)\\)，并检查在边界处的连续性。 · Shells and layered distributions require piecewise \\(Q_{\\mathrm{enc}}(r)\\), with continuity checked at boundaries.",
      "求 \\(E(r)\\) 时还要求相应的球对称或柱对称，才能把 \\(\\vec E\\) 提出高斯积分。 · Finding \\(E(r)\\) also requires the corresponding spherical or cylindrical symmetry so that \\(\\vec E\\) can be pulled out of the Gaussian integral."
    ],
    "keyPoints": [
      "三种密度：\\(\\lambda\\)（\\(\\mathrm{C\\,m^{-1}}\\)）、\\(\\sigma\\)（\\(\\mathrm{C\\,m^{-2}}\\)）、\\(\\rho\\)（\\(\\mathrm{C\\,m^{-3}}\\)）。 · Three densities: \\(\\lambda\\) (\\(\\mathrm{C\\,m^{-1}}\\)), \\(\\sigma\\) (\\(\\mathrm{C\\,m^{-2}}\\)), and \\(\\rho\\) (\\(\\mathrm{C\\,m^{-3}}\\)).",
      "总电荷是积分，不是密度乘体积，除非密度均匀。 · Total charge is an integral, not density times volume, unless the density is uniform.",
      "球对称体积元 \\(4\\pi r^{2}\\,\\mathrm{d}r\\) 是常见失分点。 · The spherical volume element \\(4\\pi r^{2}\\,\\mathrm{d}r\\) is a common source of errors.",
      "高斯面内的包围电荷不等于整个物体的总电荷。 · The charge enclosed by a Gaussian surface is not necessarily the total charge of the whole object.",
      "球壳分布要分段：壳内为零，壳中积到 \\(r\\)，壳外为总电荷。 · A shell distribution is piecewise: zero inside the cavity, integrated to \\(r\\) within the shell, and total charge outside.",
      "先求 \\(Q_{\\mathrm{enc}}(r)\\)，再用高斯定律求 \\(E(r)\\)。 · Find \\(Q_{\\mathrm{enc}}(r)\\) first, then use Gauss's law to find \\(E(r)\\).",
      "用 \\(r=0\\)、\\(r=R\\) 和 \\(r\\to\\infty\\) 检查结果。 · Check the result at \\(r=0\\), \\(r=R\\), and \\(r\\to\\infty\\)."
    ],
    "misconceptions": [
      "在 \\(r<R\\) 时把整个带电球的电荷 \\(Q\\) 代入高斯定律；应使用半径 \\(r\\) 以内的 \\(Q_{\\mathrm{enc}}(r)\\)。 · Substituting the entire charge \\(Q\\) into Gauss's law for \\(r<R\\); use \\(Q_{\\mathrm{enc}}(r)\\) within radius \\(r\\).",
      "对非均匀密度仍用 \\(Q=\\rho V\\)；密度随位置变化时必须积分。 · Using \\(Q=\\rho V\\) for a nonuniform density; integrate when the density varies with position.",
      "忘记球壳体积元中的 \\(4\\pi r^{2}\\)，把它写成 \\(\\mathrm{d}r\\) 或 \\(4\\pi r\\)。 · Forgetting the \\(4\\pi r^{2}\\) in the spherical shell volume element and writing \\(\\mathrm{d}r\\) or \\(4\\pi r\\).",
      "把积分限从 \\(0\\) 开始，即使电荷只分布在 \\(a<r<b\\) 的壳层中。 · Starting the integral at \\(0\\) even when charge exists only in a shell \\(a<r<b\\).",
      "混淆线、面、体电荷密度及其单位。 · Confusing linear, surface, and volume charge densities and their units.",
      "把面积元 \\(2\\pi r\\,\\mathrm{d}r\\) 用作体积元，或把体积元用作面积元。 · Using the area element \\(2\\pi r\\,\\mathrm{d}r\\) as a volume element, or vice versa.",
      "认为 \\(Q_{\\mathrm{enc}}(r)\\) 一定随 \\(r\\) 单调增加；若电荷密度有负值，包围电荷可能减少。 · Thinking \\(Q_{\\mathrm{enc}}(r)\\) must increase monotonically with \\(r\\); if the charge density can be negative, the enclosed charge can decrease."
    ],
    "examples": [
      {
        "title": "例 1 · 非均匀带电球 · Example 1: A nonuniformly charged sphere",
        "prompt": "一个半径 \\(R\\) 的球对称电荷分布，体电荷密度为 \\(\\rho(r)=\\rho_0\\left(1-\\dfrac{r}{R}\\right)\\)（\\(0\\le r\\le R\\)）。求 \\(Q_{\\mathrm{enc}}(r)\\)、总电荷 \\(Q\\) 和 \\(E(r)\\)。 · A spherically symmetric charge distribution of radius \\(R\\) has volume charge density \\(\\rho(r)=\\rho_0\\left(1-\\dfrac{r}{R}\\right)\\) for \\(0\\le r\\le R\\). Find \\(Q_{\\mathrm{enc}}(r)\\), the total charge \\(Q\\), and \\(E(r)\\).",
        "steps": [
          "\\(Q_{\\mathrm{enc}}(r)=4\\pi\\rho_0\\int_0^r\\left(1-\\dfrac{r'}{R}\\right)r'^{2}\\,\\mathrm{d}r'\\)。 · \\(Q_{\\mathrm{enc}}(r)=4\\pi\\rho_0\\int_0^r\\left(1-\\dfrac{r'}{R}\\right)r'^{2}\\,\\mathrm{d}r'\\).",
          "积分得 \\(Q_{\\mathrm{enc}}(r)=4\\pi\\rho_0\\left(\\dfrac{r^{3}}{3}-\\dfrac{r^{4}}{4R}\\right)\\)。 · Integrating gives \\(Q_{\\mathrm{enc}}(r)=4\\pi\\rho_0\\left(\\dfrac{r^{3}}{3}-\\dfrac{r^{4}}{4R}\\right)\\).",
          "令 \\(r=R\\) 得总电荷 \\(Q=4\\pi\\rho_0R^{3}\\left(\\dfrac{1}{3}-\\dfrac{1}{4}\\right)=\\dfrac{\\pi\\rho_0R^{3}}{3}\\)。 · Setting \\(r=R\\) gives \\(Q=4\\pi\\rho_0R^{3}\\left(\\dfrac{1}{3}-\\dfrac{1}{4}\\right)=\\dfrac{\\pi\\rho_0R^{3}}{3}\\).",
          "由高斯定律：\\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0r^{2}}=\\dfrac{\\rho_0}{\\varepsilon_0}\\left(\\dfrac{r}{3}-\\dfrac{r^{2}}{4R}\\right)\\)。 · From Gauss's law: \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0r^{2}}=\\dfrac{\\rho_0}{\\varepsilon_0}\\left(\\dfrac{r}{3}-\\dfrac{r^{2}}{4R}\\right)\\).",
          "检查：\\(r=0\\) 时 \\(E=0\\)；\\(r=R\\) 时 \\(E=\\dfrac{\\rho_0R}{12\\varepsilon_0}=\\dfrac{kQ}{R^{2}}\\)，与外部场连续。 · Check: \\(E=0\\) at \\(r=0\\); at \\(r=R\\), \\(E=\\dfrac{\\rho_0R}{12\\varepsilon_0}=\\dfrac{kQ}{R^{2}}\\), continuous with the exterior field."
        ],
        "solution": "\\(Q_{\\mathrm{enc}}(r)=4\\pi\\rho_0\\left(\\dfrac{r^{3}}{3}-\\dfrac{r^{4}}{4R}\\right)\\)，\\(Q=\\dfrac{\\pi\\rho_0R^{3}}{3}\\)，\\(E(r)=\\dfrac{\\rho_0}{\\varepsilon_0}\\left(\\dfrac{r}{3}-\\dfrac{r^{2}}{4R}\\right)\\)。 · \\(Q_{\\mathrm{enc}}(r)=4\\pi\\rho_0\\left(\\dfrac{r^{3}}{3}-\\dfrac{r^{4}}{4R}\\right)\\), \\(Q=\\dfrac{\\pi\\rho_0R^{3}}{3}\\), and \\(E(r)=\\dfrac{\\rho_0}{\\varepsilon_0}\\left(\\dfrac{r}{3}-\\dfrac{r^{2}}{4R}\\right)\\).",
        "solutionLatex": "Q_{\\mathrm{enc}}(r)=4\\pi\\rho_0\\left(\\dfrac{r^{3}}{3}-\\dfrac{r^{4}}{4R}\\right),\\quad Q=\\dfrac{\\pi\\rho_0R^{3}}{3},\\quad E(r)=\\dfrac{\\rho_0}{\\varepsilon_0}\\left(\\dfrac{r}{3}-\\dfrac{r^{2}}{4R}\\right)"
      },
      {
        "title": "例 2 · 柱对称非均匀电荷 · Example 2: Cylindrically symmetric nonuniform charge",
        "prompt": "一个半径 \\(R\\)、长度 \\(L\\) 的圆柱内，体电荷密度为 \\(\\rho(r)=\\rho_0\\dfrac{r}{R}\\)（\\(0\\le r\\le R\\)）。求 \\(Q_{\\mathrm{enc}}(r)\\)、总电荷 \\(Q\\) 和圆柱内部的 \\(E(r)\\)。 · A cylinder of radius \\(R\\) and length \\(L\\) has volume charge density \\(\\rho(r)=\\rho_0\\dfrac{r}{R}\\) for \\(0\\le r\\le R\\). Find \\(Q_{\\mathrm{enc}}(r)\\), the total charge \\(Q\\), and \\(E(r)\\) inside the cylinder.",
        "steps": [
          "\\(Q_{\\mathrm{enc}}(r)=2\\pi L\\dfrac{\\rho_0}{R}\\int_0^r r'^{3}\\,\\mathrm{d}r'=\\dfrac{\\pi L\\rho_0r^{4}}{2R}\\)。 · \\(Q_{\\mathrm{enc}}(r)=2\\pi L\\dfrac{\\rho_0}{R}\\int_0^r r'^{3}\\,\\mathrm{d}r'=\\dfrac{\\pi L\\rho_0r^{4}}{2R}\\).",
          "令 \\(r=R\\)：\\(Q=\\dfrac{\\pi L\\rho_0R^{3}}{2}\\)。 · Setting \\(r=R\\): \\(Q=\\dfrac{\\pi L\\rho_0R^{3}}{2}\\).",
          "取同轴圆柱形高斯面：\\(E(2\\pi rL)=\\dfrac{Q_{\\mathrm{enc}}(r)}{\\varepsilon_0}\\)。 · Choose a coaxial cylindrical Gaussian surface: \\(E(2\\pi rL)=\\dfrac{Q_{\\mathrm{enc}}(r)}{\\varepsilon_0}\\).",
          "\\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{2\\pi\\varepsilon_0rL}=\\dfrac{\\rho_0r^{3}}{4\\varepsilon_0R}\\)。 · \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{2\\pi\\varepsilon_0rL}=\\dfrac{\\rho_0r^{3}}{4\\varepsilon_0R}\\).",
          "检查：\\(r=0\\) 时 \\(E=0\\)；\\(r=R\\) 时 \\(E=\\dfrac{\\rho_0R^{2}}{4\\varepsilon_0}\\)，与外部场连续。 · Check: \\(E=0\\) at \\(r=0\\); at \\(r=R\\), \\(E=\\dfrac{\\rho_0R^{2}}{4\\varepsilon_0}\\), continuous with the exterior field."
        ],
        "solution": "\\(Q_{\\mathrm{enc}}(r)=\\dfrac{\\pi L\\rho_0r^{4}}{2R}\\)，\\(Q=\\dfrac{\\pi L\\rho_0R^{3}}{2}\\)，\\(E(r)=\\dfrac{\\rho_0r^{3}}{4\\varepsilon_0R}\\)。 · \\(Q_{\\mathrm{enc}}(r)=\\dfrac{\\pi L\\rho_0r^{4}}{2R}\\), \\(Q=\\dfrac{\\pi L\\rho_0R^{3}}{2}\\), and \\(E(r)=\\dfrac{\\rho_0r^{3}}{4\\varepsilon_0R}\\).",
        "solutionLatex": "Q_{\\mathrm{enc}}(r)=\\dfrac{\\pi L\\rho_0r^{4}}{2R},\\quad Q=\\dfrac{\\pi L\\rho_0R^{3}}{2},\\quad E(r)=\\dfrac{\\rho_0r^{3}}{4\\varepsilon_0R}"
      },
      {
        "title": "例 3 · 非均匀带电圆盘 · Example 3: A nonuniformly charged disk",
        "prompt": "一个半径 \\(R\\) 的圆盘，面电荷密度为 \\(\\sigma(r)=\\sigma_0\\left(1-\\dfrac{r}{R}\\right)\\)。求圆盘上的总电荷。 · A disk of radius \\(R\\) has surface charge density \\(\\sigma(r)=\\sigma_0\\left(1-\\dfrac{r}{R}\\right)\\). Find the total charge on the disk.",
        "steps": [
          "取半径 \\(r\\)、宽度 \\(\\mathrm{d}r\\) 的圆环，面积 \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\)。 · Take a ring of radius \\(r\\) and width \\(\\mathrm{d}r\\) with area \\(\\mathrm{d}A=2\\pi r\\,\\mathrm{d}r\\).",
          "\\(Q=\\int_0^R\\sigma_0\\left(1-\\dfrac{r}{R}\\right)2\\pi r\\,\\mathrm{d}r\\)。 · \\(Q=\\int_0^R\\sigma_0\\left(1-\\dfrac{r}{R}\\right)2\\pi r\\,\\mathrm{d}r\\).",
          "积分得 \\(Q=2\\pi\\sigma_0\\left(\\dfrac{R^{2}}{2}-\\dfrac{R^{3}}{3R}\\right)=2\\pi\\sigma_0R^{2}\\left(\\dfrac{1}{2}-\\dfrac{1}{3}\\right)\\)。 · Integrating gives \\(Q=2\\pi\\sigma_0\\left(\\dfrac{R^{2}}{2}-\\dfrac{R^{3}}{3R}\\right)=2\\pi\\sigma_0R^{2}\\left(\\dfrac{1}{2}-\\dfrac{1}{3}\\right)\\).",
          "\\(Q=\\dfrac{\\pi\\sigma_0R^{2}}{3}\\)。 · \\(Q=\\dfrac{\\pi\\sigma_0R^{2}}{3}\\)."
        ],
        "solution": "\\(Q=\\dfrac{\\pi\\sigma_0R^{2}}{3}\\)。 · \\(Q=\\dfrac{\\pi\\sigma_0R^{2}}{3}\\).",
        "solutionLatex": "Q=2\\pi\\sigma_0\\int_0^R\\left(1-\\dfrac{r}{R}\\right)r\\,\\mathrm{d}r=\\dfrac{\\pi\\sigma_0R^{2}}{3}"
      },
      {
        "title": "例 4 · 球壳的分段包围电荷 · Example 4: Piecewise enclosed charge for a spherical shell",
        "prompt": "一个球壳的内半径为 \\(a\\)、外半径为 \\(b\\)，体电荷密度均匀为 \\(\\rho\\)。写出 \\(Q_{\\mathrm{enc}}(r)\\) 在 \\(r<a\\)、\\(a\\le r\\le b\\)、\\(r>b\\) 三个区域的分段表达式。 · A spherical shell has inner radius \\(a\\), outer radius \\(b\\), and uniform volume charge density \\(\\rho\\). Write the piecewise expression for \\(Q_{\\mathrm{enc}}(r)\\) in the regions \\(r<a\\), \\(a\\le r\\le b\\), and \\(r>b\\).",
        "steps": [
          "\\(r<a\\)：高斯面内没有电荷，\\(Q_{\\mathrm{enc}}=0\\)。 · For \\(r<a\\), the Gaussian surface encloses no charge, so \\(Q_{\\mathrm{enc}}=0\\).",
          "\\(a\\le r\\le b\\)：只有 \\(a\\) 到 \\(r\\) 的球壳带电，\\(Q_{\\mathrm{enc}}=\\rho\\dfrac{4}{3}\\pi(r^{3}-a^{3})\\)。 · For \\(a\\le r\\le b\\), only the shell from \\(a\\) to \\(r\\) is charged, so \\(Q_{\\mathrm{enc}}=\\rho\\dfrac{4}{3}\\pi(r^{3}-a^{3})\\).",
          "\\(r>b\\)：高斯面包围整个球壳，\\(Q_{\\mathrm{enc}}=\\rho\\dfrac{4}{3}\\pi(b^{3}-a^{3})=Q_{\\mathrm{total}}\\)。 · For \\(r>b\\), the Gaussian surface encloses the entire shell, so \\(Q_{\\mathrm{enc}}=\\rho\\dfrac{4}{3}\\pi(b^{3}-a^{3})=Q_{\\mathrm{total}}\\).",
          "对应的电场由 \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0r^{2}}\\) 给出，并在 \\(r=a\\)、\\(r=b\\) 处检查连续性。 · The corresponding field follows from \\(E(r)=\\dfrac{Q_{\\mathrm{enc}}(r)}{4\\pi\\varepsilon_0r^{2}}\\), with continuity checked at \\(r=a\\) and \\(r=b\\)."
        ],
        "solution": "\\(Q_{\\mathrm{enc}}=0\\)（\\(r<a\\)）；\\(\\rho\\dfrac{4}{3}\\pi(r^{3}-a^{3})\\)（\\(a\\le r\\le b\\)）；\\(\\rho\\dfrac{4}{3}\\pi(b^{3}-a^{3})\\)（\\(r>b\\)）。 · \\(Q_{\\mathrm{enc}}=0\\) for \\(r<a\\); \\(\\rho\\dfrac{4}{3}\\pi(r^{3}-a^{3})\\) for \\(a\\le r\\le b\\); and \\(\\rho\\dfrac{4}{3}\\pi(b^{3}-a^{3})\\) for \\(r>b\\).",
        "solutionLatex": "Q_{\\mathrm{enc}}(r)=\\begin{cases}0,&r<a\\\\\\rho\\dfrac{4}{3}\\pi(r^{3}-a^{3}),&a\\le r\\le b\\\\\\rho\\dfrac{4}{3}\\pi(b^{3}-a^{3}),&r>b\\end{cases}"
      }
    ],
    "examTips": [
      "先判断分布是一维、二维还是三维，再写 \\(\\mathrm{d}Q\\)。 · First decide whether the distribution is one-, two-, or three-dimensional, then write \\(\\mathrm{d}Q\\).",
      "把密度函数和积分限一起写出来；不要急着把 \\(\\rho\\) 提到积分号外。 · Write the density function together with the limits; do not pull \\(\\rho\\) outside the integral too early.",
      "球对称先写 \\(Q_{\\mathrm{enc}}(r)=4\\pi\\int\\rho r'^{2}\\,\\mathrm{d}r'\\)，再代入高斯定律。 · For spherical symmetry, write \\(Q_{\\mathrm{enc}}(r)=4\\pi\\int\\rho r'^{2}\\,\\mathrm{d}r'\\) first, then substitute into Gauss's law.",
      "用 \\(r=0\\)、\\(r=R\\) 和 \\(r\\to\\infty\\) 检查 \\(E(r)\\) 的极限与连续性。 · Check the limits and continuity of \\(E(r)\\) at \\(r=0\\), \\(r=R\\), and \\(r\\to\\infty\\).",
      "球壳题一定要分段，并注意 \\(r<a\\) 时 \\(Q_{\\mathrm{enc}}=0\\)。 · Shell problems must be piecewise, and note that \\(Q_{\\mathrm{enc}}=0\\) for \\(r<a\\).",
      "最后检查单位：\\(\\rho\\) 乘体积得库仑，\\(E\\) 的单位应为 \\(\\mathrm{N\\,C^{-1}}\\)。 · Finally check units: \\(\\rho\\) times volume gives coulombs, and \\(E\\) should have units \\(\\mathrm{N\\,C^{-1}}\\)."
    ],
    "related": [
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.3",
        "title": "电场叠加 · Electric Field of Charge Distributions",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.5",
        "title": "高斯定律 · Gauss's Law",
        "relation": "先修 · prerequisite"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.10",
        "title": "绝缘体电荷与内部电场 · Charge and Fields inside Insulators",
        "relation": "相关 · related"
      },
      {
        "subject": "em",
        "chapterId": "em-u8",
        "code": "8.2",
        "title": "电场 · Electric Fields",
        "relation": "相关 · related"
      }
    ],
    "modules": [
      {
        "id": "gauss-law",
        "title": "高斯定律 · Gauss's law"
      }
    ],
    "practiceHref": "#/em/practice/em-u8",
    "connections": [
      "上游：8.3 的连续电荷分布叠加与 8.5 的高斯定律提供物理框架，微积分提供积分工具。 · Upstream: continuous charge distributions in 8.3 and Gauss's law in 8.5 provide the physical framework, while calculus provides the integration tools.",
      "下游：8.10 用 \\(Q_{\\mathrm{enc}}(r)\\) 求绝缘体内部场；9.3 用 \\(\\mathrm{d}q\\) 积分求电势。 · Downstream: 8.10 uses \\(Q_{\\mathrm{enc}}(r)\\) to find fields inside insulators; 9.3 integrates \\(\\mathrm{d}q\\) to find electric potential.",
      "应用：非均匀带电球、圆柱、圆盘和球壳是 AP 高斯定律题的常见模型。 · Applications: nonuniformly charged spheres, cylinders, disks, and shells are common models in AP Gauss's-law problems.",
      "数学：极坐标与球坐标中的面积元、体积元，以及分段积分和连续性检查。 · Mathematics: area and volume elements in polar and spherical coordinates, piecewise integration, and continuity checks."
    ],
    "intuitionDetailed": "电荷密度积分题的核心不是「套哪个公式」，而是「把物体切成什么样的小块」。如果电荷沿一条细线分布，小块是长度 \\(\\mathrm{d}\\ell\\)，电荷元 \\(\\mathrm{d}Q=\\lambda\\,\\mathrm{d}\\ell\\)；如果电荷在一层表面上，小块是面积 \\(\\mathrm{d}A\\)，\\(\\mathrm{d}Q=\\sigma\\,\\mathrm{d}A\\)；如果电荷充满体积，小块是体积 \\(\\mathrm{d}V\\)，\\(\\mathrm{d}Q=\\rho\\,\\mathrm{d}V\\)。写对小块后，总电荷就是把这些 \\(\\mathrm{d}Q\\) 从带电区域的一端积到另一端。球对称时，半径 \\(r'\\) 到 \\(r'+\\mathrm{d}r'\\) 之间的球壳体积是 \\(4\\pi r'^{2}\\,\\mathrm{d}r'\\)，所以积分里会出现 \\(r'^{2}\\)；柱对称时，薄圆柱壳的体积是 \\(2\\pi r'L\\,\\mathrm{d}r'\\)。高斯定律只需要高斯面内部的电荷，所以当高斯面半径 \\(r\\) 小于带电体半径 \\(R\\) 时，积分上限是 \\(r\\) 而不是 \\(R\\)。对球壳，还要分段：壳内没有电荷，壳层中只积到 \\(r\\)，壳外才是总电荷。最后把 \\(Q_{\\mathrm{enc}}(r)\\) 代入 \\(E=\\dfrac{Q_{\\mathrm{enc}}}{4\\pi\\varepsilon_0r^{2}}\\)（球对称）或对应的柱对称公式，并用极限和边界连续性检查。 · The core of a charge-density integration problem is not “which formula to use” but “how to slice the object.” If charge lies along a thin line, the piece is a length \\(\\mathrm{d}\\ell\\) and the charge element is \\(\\mathrm{d}Q=\\lambda\\,\\mathrm{d}\\ell\\); if charge lies on a surface, the piece is an area \\(\\mathrm{d}A\\) and \\(\\mathrm{d}Q=\\sigma\\,\\mathrm{d}A\\); if charge fills a volume, the piece is a volume \\(\\mathrm{d}V\\) and \\(\\mathrm{d}Q=\\rho\\,\\mathrm{d}V\\). Once the piece is correct, the total charge is the integral of \\(\\mathrm{d}Q\\) over the charged region. For spherical symmetry, the volume of a shell between \\(r'\\) and \\(r'+\\mathrm{d}r'\\) is \\(4\\pi r'^{2}\\,\\mathrm{d}r'\\), so the integral contains \\(r'^{2}\\); for cylindrical symmetry, a thin cylindrical shell has volume \\(2\\pi r'L\\,\\mathrm{d}r'\\). Gauss's law needs only the charge inside the Gaussian surface, so when the Gaussian radius \\(r\\) is smaller than the charged body's radius \\(R\\), the upper limit is \\(r\\), not \\(R\\). For a shell, work piecewise: no charge inside the cavity, integrate only up to \\(r\\) within the shell, and use the total charge outside. Finally, substitute \\(Q_{\\mathrm{enc}}(r)\\) into \\(E=\\dfrac{Q_{\\mathrm{enc}}}{4\\pi\\varepsilon_0r^{2}}\\) for spherical symmetry (or the corresponding cylindrical formula), and check limits and boundary continuity.",
    "development": [
      "把电荷分布按维度分类，写出对应的电荷元 \\(\\mathrm{d}Q\\)。 · Classify the charge distribution by dimension and write the corresponding charge element \\(\\mathrm{d}Q\\).",
      "写出总电荷积分，确定积分限只覆盖带电区域。 · Write the total-charge integral and set limits that cover only the charged region.",
      "对球对称或柱对称，写出正确的体积元并计算 \\(Q_{\\mathrm{enc}}(r)\\)。 · For spherical or cylindrical symmetry, write the correct volume element and calculate \\(Q_{\\mathrm{enc}}(r)\\).",
      "把 \\(Q_{\\mathrm{enc}}(r)\\) 代入高斯定律，得到 \\(E(r)\\)。 · Substitute \\(Q_{\\mathrm{enc}}(r)\\) into Gauss's law to obtain \\(E(r)\\).",
      "用 \\(r=0\\)、边界值和 \\(r\\to\\infty\\) 检查结果的极限、连续性与单位。 · Check limits, continuity, and units at \\(r=0\\), at boundaries, and as \\(r\\to\\infty\\)."
    ],
    "checks": [
      "为什么 \\(r<R\\) 时不能把总电荷 \\(Q\\) 直接代入高斯定律？ · Why can't the total charge \\(Q\\) be substituted directly into Gauss's law for \\(r<R\\)?",
      "球对称体积元为什么是 \\(4\\pi r^{2}\\,\\mathrm{d}r\\)，而不是 \\(\\mathrm{d}r\\)？ · Why is the spherical volume element \\(4\\pi r^{2}\\,\\mathrm{d}r\\) rather than \\(\\mathrm{d}r\\)?",
      "如果 \\(\\rho(r)\\) 不是常数，\\(Q=\\rho V\\) 还成立吗？ · If \\(\\rho(r)\\) is not constant, does \\(Q=\\rho V\\) still hold?",
      "球壳的 \\(Q_{\\mathrm{enc}}(r)\\) 在 \\(r<a\\)、\\(a<r<b\\)、\\(r>b\\) 三个区域分别是什么？ · What is \\(Q_{\\mathrm{enc}}(r)\\) for a spherical shell in the regions \\(r<a\\), \\(a<r<b\\), and \\(r>b\\)?",
      "如何用 \\(E(r)\\) 在 \\(r=R\\) 处的连续性检查积分结果？ · How can continuity of \\(E(r)\\) at \\(r=R\\) be used to check the integration result?"
    ],
    "vocabulary": [
      {
        "termZh": "线电荷密度",
        "termEn": "linear charge density",
        "defZh": "单位长度上的电荷量 \\(\\lambda=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}\\ell}\\)，单位 \\(\\mathrm{C\\,m^{-1}}\\)。",
        "defEn": "Charge per unit length, \\(\\lambda=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}\\ell}\\), with units \\(\\mathrm{C\\,m^{-1}}\\)."
      },
      {
        "termZh": "面电荷密度",
        "termEn": "surface charge density",
        "defZh": "单位面积上的电荷量 \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\)，单位 \\(\\mathrm{C\\,m^{-2}}\\)。",
        "defEn": "Charge per unit area, \\(\\sigma=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}A}\\), with units \\(\\mathrm{C\\,m^{-2}}\\)."
      },
      {
        "termZh": "体电荷密度",
        "termEn": "volume charge density",
        "defZh": "单位体积内的电荷量 \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\)，单位 \\(\\mathrm{C\\,m^{-3}}\\)。",
        "defEn": "Charge per unit volume, \\(\\rho=\\dfrac{\\mathrm{d}Q}{\\mathrm{d}V}\\), with units \\(\\mathrm{C\\,m^{-3}}\\)."
      },
      {
        "termZh": "电荷元",
        "termEn": "charge element",
        "defZh": "分布中一个小块的电荷 \\(\\mathrm{d}Q\\)，等于密度乘以相应的长度、面积或体积元。",
        "defEn": "The charge \\(\\mathrm{d}Q\\) of a small piece of a distribution, equal to the density times the corresponding length, area, or volume element."
      },
      {
        "termZh": "体积元",
        "termEn": "volume element",
        "defZh": "积分中的小块体积；球对称时为 \\(4\\pi r^{2}\\,\\mathrm{d}r\\)，柱对称时为 \\(2\\pi rL\\,\\mathrm{d}r\\)。",
        "defEn": "The small volume used in an integral; it is \\(4\\pi r^{2}\\,\\mathrm{d}r\\) for spherical symmetry and \\(2\\pi rL\\,\\mathrm{d}r\\) for cylindrical symmetry."
      },
      {
        "termZh": "包围电荷",
        "termEn": "enclosed charge",
        "defZh": "高斯面内部的净电荷 \\(Q_{\\mathrm{enc}}\\)，由只覆盖曲面内部的积分得到。",
        "defEn": "The net charge \\(Q_{\\mathrm{enc}}\\) inside a Gaussian surface, obtained by integrating only over the interior."
      },
      {
        "termZh": "球壳",
        "termEn": "spherical shell",
        "defZh": "位于两个半径之间的电荷分布；其包围电荷需要分段计算。",
        "defEn": "A charge distribution between two radii; its enclosed charge must be calculated piecewise."
      },
      {
        "termZh": "连续性检查",
        "termEn": "continuity check",
        "defZh": "在边界处比较内部和外部表达式，确认电场或包围电荷没有非物理的跳跃。",
        "defEn": "Comparing inside and outside expressions at a boundary to confirm that the field or enclosed charge has no unphysical jump."
      }
    ]
  }

};
